# ts2 examples

**ts2** is a small, statically typed, declarative language with inline templating, flavoured like React and TypeScript. You describe what a user interface looks like, read the state it depends on, and handle the events it receives; everything else is resolved ahead of time.

📖 **Documentation: <https://playrift.co/docs/ts2/>**

```tsx
export function ThinBox({ children }: { children?: Children }): Component {
  return (
    <layer w="fill" h="fill">
      <rect x="center" y="center" w="fill" h="fill" color={0x0e0e0c} />
      <rect x="center" y="center" w={{ fill: 2 }} h={{ fill: 2 }} color={0x474745} />
      <layer w="fill" h="fill">
        {children}
      </layer>
    </layer>
  );
}
```

ts2 grew out of [Rift](https://playrift.co), and this repository is a set of worked
examples demonstrating the language and providing references for what idiomatic ts2 looks like. Every UI is a **recreation of a user interface from 235 era osrs**, rebuilt in ts2. Where a folder has a `_preview.png`, that picture is a render of the compiled ts2 source at runtime.

## Folders

### `<id>_<name>/` — one folder per user interface

Each folder is named for the user interface id it recreates, then that UI's name.

| Folder | UI | Component count |
|---|---|---|
| [`0063_congratulations`](0063_congratulations/) | Quest-reward — "Congratulations!", the reward model, "You are awarded:" | 1 |
| [`0068_slayer-partner`](0068_slayer-partner/) | Slayer Partner — a request/response dialog | 3 |
| [`0227_needed-items-list`](0227_needed-items-list/) | A "needed items" checklist with its own scrollbar | 2 |
| [`0370_house-options`](0370_house-options/) | House Options — the POH build/settings | 8 |
| [`0371_wom-recycling`](0371_wom-recycling/) | Wise Old Man's Recycling Centre | 4 |
| [`0387_equipment`](0387_equipment/) | Worn Equipment | 3 |
| [`0428_room-timer-overlay`](0428_room-timer-overlay/) | Room timer overlay — "Room X of 8" with a progress bar | 4 |
| [`0625_message-scroll`](0625_message-scroll/) | A scrollable message modal | 1 |
| [`0631_seed-vault`](0631_seed-vault/) | The Seed Vault | 8 |
| [`0735_league-3-fragments`](0735_league-3-fragments/) | League 3 ("Trailblazer") fragment and relic modal | 11 |
| [`0738_fairy-ring-power-relay`](0738_fairy-ring-power-relay/) | Fairy Ring Power Relay | 1 |
| [`0796_family-portraits`](0796_family-portraits/) | Family portraits | 1 |

`0735_league-3-fragments` is the one to read if you only read one: 11 components, a list built by
iterating a shipped data table, a filter driven by a client variable, and right-click
options.

### `lib/` — shared code

Components used by more than one UI — the `StoneButton` family, `SteelBorder`,
`ThinBox`, `ScrollbarVertical`, `Frame` — alongside `lib.helpers.ts2` and
`lib.constants.ts2`.

The `game/` subfolder holds eleven **generated dictionaries** (`varbits.ts2`, `enums.ts2`,
`sprites.ts2`, `sounds.ts2`, `animations.ts2`, `params.ts2`, `varps.ts2`, `varcs.ts2`,
`inventories.ts2`, `models.ts2`, `fonts.ts2`). These are references to the game asset bundle, and exist as a layer of abstraction so that UI refers to `Varbits.OSM_SIMULATE` instead of `6352`, eliminating magic numbers from the language.

## File naming

Files are named `<subject>.<role>.ts2`.

| UI | Contains |
|---|---|
| `<UI>.ui.ts2` | The `<ui>` export — the entry point that gives the tree its interface id. One per folder. |
| `<name>.component.ts2` | Exactly one component. |
| `<UI>.helpers.ts2` | Functions that are not components. |
| `<UI>.constants.ts2` | Enums, types, table references and other module-level data. |
| `game/<kind>.ts2` | A generated dictionary (`lib/game/` only). |
| `_preview.png` | The UI, rendered from the source beside it. |

`<UI>` is the name half of the folder name (`house-options`, `league-3-fragments`), so
the entry point for `0370_house-options` is `0370_house-options/house-options.ui.ts2`.
`<name>` is the component's name in kebab-case, so `FragmentRow` lives in
`fragment-row.component.ts2`.

Reading a folder therefore has an obvious order: start at `*.ui.ts2`, follow it into the
component it renders, and look up anything unfamiliar in `*.constants.ts2`.
