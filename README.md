# Claude Code Temaları

Claude Code masaüstü ve mobil uygulaması için on iki hareketli tema ve aralarında anında geçiş yapan `/tema` komutu.

| Tema | Mod | Sahne |
|---|---|---|
| Kapadokya | gündüz + gece | Peribacaları üzerinde yükselen balonlar |
| Neon Gece | koyu | Çizgili neon gün batımı ve kayan ızgara |
| Aurora | koyu | Dalgalanan kuzey ışıkları |
| Nakkaşhane | gündüz + gece | Minyatür üslubunda şehir, atlılar ve tezhipli çerçeve |
| Lale Bahçesi | gündüz + gece | İznik çinisi ve sallanan laleler |
| Derin Deniz | koyu | Işıltılı denizanaları ve kabarcıklar |
| Kış Ormanı | gündüz + gece | Karlı çamlar, kulübe ve kar yağışı |
| Mürekkep | gündüz + gece | Mürekkep lekesi dağlar ve sis |
| Mavi Kopya | koyu | Kendini çizen teknik çizim |
| Bauhaus | gündüz + gece | Ana renklerde geometrik kompozisyon |
| Yörünge | koyu | Dönen gezegenler ve yıldız alanı |
| Topografya | gündüz + gece | Eş yükselti eğrili harita ve rota |

## Kurulum

Claude Code masaüstü uygulamasında: mesaj kutusunun yanındaki **+** düğmesi → **Plugins** → **Add marketplace** → `darksoftinc/claude-themes` yazın, ardından **tema** eklentisini ekleyin.

Terminalde bir Claude Code oturumunun içinde:

```
/plugin install tema --marketplace darksoftinc/claude-themes
```

ya da kabukta:

```
claude plugin install tema --marketplace darksoftinc/claude-themes
```

## Kullanım

- `/tema` — temaları listeler, açık olanı ● ile gösterir
- `/tema neon`, `/tema kapadokya`, `/tema yorunge` … — o temaya geçer (adın başı yeterli)
- `/tema kapali` — uygulamanın kendi görünümüne döner

Seçilen tema hatırlanır; yeni sohbetler de aynı temayla açılır. Temalar masaüstü ve mobil uygulamada görünür, terminalde görünmez.
