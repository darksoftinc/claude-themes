import type { CommandRunInput } from 'claude-code'
import { expect, test } from 'claude-code/testing'

test('/tema neon switches the look and remembers it', async ($, on) => {
  const store = new Map<string, unknown>([['theme', 'kapadokya']])
  const scenes: string[] = []

  on('command.register', () => ({ value: { command: 'tema' } }))
  on('store.get', (_, e) => ({ value: store.get(e.key) }))
  on('store.set', (_, e) => {
    store.set(e.key, e.value)

    return { value: undefined }
  })
  on('theme.set', (_, e) => {
    const backdrop = e.backdrop

    if (backdrop !== undefined && 'scene' in backdrop && typeof backdrop.scene === 'string') {
      scenes.push(backdrop.scene)
    }

    return { value: { isDrawn: true, requestId: 't' } }
  })
  on('session.start', (_, e) => ({ cwd: e.cwd }))

  await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true })
  expect(scenes).toEqual(['kapadokya'])

  const ran = await $.command.run({ command: 'tema', args: 'neon' } as CommandRunInput)
  expect(scenes).toEqual(['kapadokya', 'neon-gece'])
  expect(store.get('theme')).toBe('neon-gece')
  expect(ran.text).toContain('Neon Gece')

  await $.command.run({ command: 'tema', args: 'Kış Ormanı' } as CommandRunInput)
  expect(scenes.at(-1)).toBe('kis-ormani')

  const unknown = await $.command.run({ command: 'tema', args: 'uzay' } as CommandRunInput)
  expect(unknown.text).toContain('adında bir tema yok')
  expect(store.get('theme')).toBe('kis-ormani')
})

test('the new themes are reachable by their Turkish names', async ($, on) => {
  const scenes: string[] = []

  on('command.register', () => ({ value: { command: 'tema' } }))
  on('store.get', () => ({ value: 'kapadokya' }))
  on('store.set', () => ({ value: undefined }))
  on('theme.set', (_, e) => {
    const backdrop = e.backdrop

    if (backdrop !== undefined && 'scene' in backdrop && typeof backdrop.scene === 'string') {
      scenes.push(backdrop.scene)
    }

    return { value: { isDrawn: true, requestId: 't' } }
  })
  on('session.start', (_, e) => ({ cwd: e.cwd }))
  await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true })

  for (const [query, id] of [['Mürekkep', 'murekkep'], ['mavi', 'mavi-kopya'], ['bauhaus', 'bauhaus'], ['Yörünge', 'yorunge'], ['topo', 'topografya']] as const) {
    await $.command.run({ command: 'tema', args: query } as CommandRunInput)
    expect(scenes.at(-1)).toBe(id)
  }
})
