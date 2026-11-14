export const id = 64;
export const ids = [64, 78];
export const modules = {
    3764: (cB, Bc, nc) => {
        nc.r(Bc), nc.d(Bc, {
          default: () => Gr
        });
        var Vc = nc(73),
          Ic = nc(912),
          rB = nc.n(Ic),
          uc = nc(1338),
          sc = nc(1344),
          Mc = nc(27),
          Pc = nc(83),
          qB = nc(3766),
          Oc = nc(3781),
          Tc = nc(3783),
          fc = nc(3545),
          mB = nc(957);
        const ec = "/textures/docs/icons";

        function tB(cB) {
          let {
            name: Bc,
            isTinted: nc,
            className: Vc,
            style: Ic
          } = cB;
          const uc = `${ec}/${Bc}.png`;
          return nc ? (0, mB.jsxs)("span", {
            className: rB()("DocsPixelIcon", "Tinted", Vc),
            "aria-hidden": "true",
            style: Ic,
            children: [(0, mB.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${uc}")`,
                WebkitMaskImage: `url("${uc}")`
              }
            }), (0, mB.jsx)("img", {
              src: uc,
              alt: ""
            })]
          }) : (0, mB.jsx)("img", {
            className: rB()("DocsPixelIcon", Vc),
            src: uc,
            alt: "",
            "aria-hidden": "true",
            style: Ic
          })
        }
        const Sc = 1500;

        function yB() {
          const [cB, Bc] = (0, Vc.useState)(null);
          (0, Vc.useEffect)((() => {
            if (null === cB) return;
            const nc = setTimeout((() => {
              Bc(null)
            }), Sc);
            return () => {
              clearTimeout(nc)
            }
          }), [cB]);
          return [cB, cB => {
            (0, fc.b)(cB).then((() => {
              Bc({
                text: cB,
                failed: !1
              })
            }), (nc => {
              console.error("Could not copy to the clipboard", nc), Bc({
                text: cB,
                failed: !0
              })
            }))
          }]
        }

        function zB(cB) {
          let {
            text: Bc,
            label: nc,
            className: Vc
          } = cB;
          const [Ic, uc] = yB(), sc = !1 === (null === Ic || void 0 === Ic ? void 0 : Ic.failed);
          return (0, mB.jsxs)("button", {
            type: "button",
            className: rB()("DocsCopyButton", Vc, {
              Copied: sc
            }),
            title: `Copy ${Bc.length>40?"to clipboard":Bc}`,
            "aria-label": nc ? void 0 : `Copy ${Bc}`,
            onClick: cB => {
              cB.stopPropagation(), uc(Bc)
            },
            children: [(0, mB.jsx)(tB, {
              name: sc ? "check" : "copy"
            }), nc && (0, mB.jsx)("span", {
              children: sc ? "Copied" : null !== Ic && void 0 !== Ic && Ic.failed ? "Copy failed" : nc
            })]
          })
        }
        qB.b.registerLanguage("javascript", Oc.d), qB.b.registerLanguage("typescript", Tc.e);
        const pc = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          hc = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          aB = 24;

        function lc(cB) {
          let {
            code: Bc,
            lang: nc,
            compact: Ic = !1
          } = cB;
          const uc = (0, Vc.useMemo)((() => function(cB, Bc) {
              const nc = pc[Bc];
              return nc ? qB.b.highlight(cB, {
                language: nc
              }).value : cB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(Bc, nc)), [Bc, nc]),
            sc = Bc.split("\n").length,
            Mc = !Ic && sc > aB + 6,
            [Pc, Oc] = (0, Vc.useState)(!1),
            Tc = pc[nc];
          return (0, mB.jsxs)("div", {
            className: rB()("DocsCodeBlock", {
              Compact: Ic,
              Collapsed: Mc && !Pc
            }),
            children: [!Ic && (0, mB.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, mB.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Tc ? hc[Tc] : "Text"
              }), (0, mB.jsx)(zB, {
                text: Bc,
                label: "Copy"
              })]
            }), (0, mB.jsx)("pre", {
              children: (0, mB.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: uc
                }
              })
            }), Mc && (0, mB.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Pc,
              onClick: () => {
                Oc(!Pc)
              },
              children: [(0, mB.jsx)(tB, {
                name: Pc ? "chevron-up" : "chevron-down"
              }), Pc ? "Show less" : `Show all ${sc} lines`]
            })]
          })
        }
        var Yc = nc(3786);
        var Lc = nc(3795);
        const gB = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Uc(cB) {
          const Bc = new Map;
          let nc, Vc = [],
            Ic = !1;
          const rB = () => {
            nc && Bc.set(nc.name, nc.lines.join("\n").trimEnd())
          };
          for (const uc of cB.split("\n")) {
            const cB = uc.match(gB);
            Ic || uc.startsWith("/*") ? (Ic || (rB(), nc = void 0), Vc.push(uc), Ic = !uc.includes("*/")) : cB ? (rB(), nc = {
              name: cB[1],
              lines: [...Vc, uc]
            }, Vc = []) : nc && (uc.startsWith(" ") || uc.startsWith("\t") || /^[}\])|]/.test(uc)) ? nc.lines.push(uc) : nc && "" !== uc.trim() && (rB(), nc = void 0)
          }
          return rB(), Bc
        }

        function bB(cB) {
          return "methods" === cB || "callbacks" === cB || "settings" === cB
        }
        const Zc = {
            readme: {
              icon: "code-block",
              summary: "Code blocks, boards and World Code, and the globals your code can use.",
              layout: "article"
            },
            snippets: {
              icon: "scroll",
              summary: "Ready-made code for common jobs, from moving players to running code every second.",
              layout: "snippets"
            },
            howTo: {
              icon: "book",
              summary: "Step-by-step guides for variations, plugins and full games.",
              layout: "article",
              navTitle: "All how-tos"
            },
            changelog: {
              icon: "calendar",
              summary: "What changed in the Code API, newest first.",
              layout: "changelog"
            },
            apiReference: {
              icon: "prompt",
              summary: "Every method on the api object, with parameters and return types.",
              layout: "methods"
            },
            callbacks: {
              icon: "bolt",
              summary: "Functions your world code defines to react to game events.",
              layout: "callbacks"
            },
            clientOptions: {
              icon: "player",
              summary: "Per-player options such as speed, health and camera.",
              layout: "settings",
              setterSnippet: (cB, Bc) => `api.setClientOption(playerId, "${cB}", ${Bc})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (cB, Bc) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${cB}", ${Bc})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (cB, Bc) => `api.setMobSetting(mobId, "${cB}", ${Bc})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (cB, Bc) => `api.setVehicleSetting(vehicleId, "${cB}", ${Bc})`
            },
            meshEntities: {
              icon: "mesh",
              summary: "Spawn mesh entities and throwables, and attach meshes to nodes.",
              layout: "article"
            },
            qte: {
              icon: "stopwatch",
              summary: "Quick time events: progress bars, timed clicks and rhythm games.",
              layout: "article"
            },
            dialogueVoices: {
              icon: "speech-bubble",
              summary: "The voices dialogue is read out in, with a playground for making voices of your own.",
              layout: "article",
              hasVoicePlayground: !0
            },
            particles: {
              icon: "sparkle",
              summary: "Particle textures and presets, with a live effect playground.",
              layout: "article",
              gallery: "particles",
              hasParticlePlayground: !0
            },
            sounds: {
              icon: "music",
              summary: "Every sound effect and song you can play.",
              layout: "article",
              gallery: "sounds"
            },
            icons: {
              icon: "heart",
              summary: "Icons for styled text, from Bloxd icons to Font Awesome.",
              layout: "article",
              gallery: "icons",
              hasTextPlayground: !0
            },
            skins: {
              icon: "shirt",
              summary: "Skin parts, NPC skins and poses for players.",
              layout: "article",
              gallery: "skins"
            },
            blockNames: {
              icon: "grass-block",
              summary: "Every block name, with its texture and variants.",
              layout: "article",
              gallery: "blocks"
            },
            itemNames: {
              icon: "pickaxe",
              summary: "Every item name, with its texture.",
              layout: "article",
              gallery: "items"
            }
          },
          Qc = {
            Variations: {
              icon: "layers",
              summary: "Alternate versions of a custom game, and matchmaking players between them."
            },
            Plugins: {
              icon: "puzzle",
              summary: "Reusable first-party World Code features, imported from @plugins."
            },
            "Building a SessionBasedGame": {
              icon: "trophy",
              summary: "A full team game: lobby, teams, map voting, rounds and a winner."
            },
            "Interactable NPCs": {
              icon: "speech-bubble",
              summary: "Entities players talk to or use, such as shopkeepers and guards."
            },
            Dialogue: {
              icon: "volume",
              summary: "Lines of dialogue below the crosshair, read out a syllable at a time in a voice."
            },
            "Project schematics": {
              icon: "blueprint",
              summary: "Build whole chunks from schematics stored with your project."
            }
          };

        function Cc(cB) {
          return cB.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function vB(cB) {
          let Bc = !1;
          return cB.split("\n").map((cB => (cB.startsWith("```") && (Bc = !Bc), !Bc && /^#{3,} /.test(cB) ? cB.slice(1) : cB))).join("\n")
        }

        function Dc(cB) {
          return "readme" === cB ? "getting-started" : Cc(cB)
        }
        const Nc = "## Glossary of Referenced Types";
        const Ec = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...Lc.b.flatMap((cB => {
            const Bc = {
              id: cB.id,
              slug: Dc(cB.id),
              title: cB.title,
              markdown: cB.content,
              ...Zc[cB.id]
            };
            if ("readme" === cB.id) return function(cB) {
              const Bc = cB.markdown.indexOf(Nc),
                nc = cB.markdown.indexOf("\n```", Bc),
                Vc = cB.markdown.indexOf("\n```", nc + 1);
              if (-1 === Bc || -1 === nc || -1 === Vc) throw new Error(`Getting started has no "${Nc}" section with a code block`);
              const Ic = cB.markdown.slice(Bc + 31, nc).trim(),
                rB = [...Uc(cB.markdown.slice(cB.markdown.indexOf("\n", nc + 1) + 1, Vc))].map((cB => {
                  let [Bc, nc] = cB;
                  return `## ${Bc}\n\n\`\`\`ts\n${nc}\n\`\`\`\n`
                })),
                uc = cB.markdown.slice(cB.markdown.indexOf("\n", Vc + 1) + 1);
              return [{
                ...cB,
                markdown: `${cB.markdown.slice(0,Bc)}${uc}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Ic}\n\n${rB.join("\n")}`
              }]
            }(Bc);
            if ("howTo" === cB.id) {
              const {
                parent: cB,
                guides: nc
              } = function(cB) {
                const [Bc, ...nc] = cB.markdown.split(/^(?=## )/m), Vc = [Bc], Ic = [];
                for (const uc of nc) {
                  var rB;
                  const Bc = uc.indexOf("\n"),
                    nc = uc.slice(3, Bc).trim(),
                    sc = uc.slice(Bc + 1);
                  if (!sc.includes("```")) {
                    Vc.push(uc);
                    continue
                  }
                  const Mc = null !== (rB = Qc[nc]) && void 0 !== rB ? rB : {
                    icon: "lightbulb",
                    summary: `How to use ${nc.toLowerCase()} in World Code.`
                  };
                  Ic.push({
                    id: `${cB.id}${nc.split(/[^A-Za-z0-9]+/).map((cB=>cB.charAt(0).toUpperCase()+cB.slice(1))).join("")}`,
                    slug: `${cB.slug}-${Cc(nc)}`,
                    title: nc,
                    layout: "article",
                    sourceAnchor: (0, Yc.r)(nc),
                    markdown: `# ${nc}\n\n${vB(sc)}`,
                    ...Mc
                  })
                }
                return {
                  parent: {
                    ...cB,
                    markdown: Vc.join(""),
                    childPageIds: Ic.map((cB => cB.id))
                  },
                  guides: Ic
                }
              }(Bc);
              return [cB, ...nc]
            }
            return [Bc]
          }))],
          oc = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Ec.filter((cB => void 0 !== cB.sourceAnchor)).map((cB => cB.id))]
          }, {
            title: "Reference",
            pageIds: ["apiReference", "callbacks", "clientOptions", "types"]
          }, {
            title: "Settings",
            pageIds: ["entitySettings", "mobSettings", "vehicleSettings"]
          }, {
            title: "Systems",
            pageIds: ["meshEntities", "qte", "dialogueVoices"]
          }, {
            title: "Assets",
            pageIds: ["particles", "sounds", "icons", "skins", "blockNames", "itemNames"]
          }];

        function Wc(cB) {
          return Ec.find((Bc => Bc.id === cB))
        }
        const wc = new Map;

        function kB(cB) {
          let Bc = wc.get(cB.id);
          return Bc || (Bc = (0, Yc.y)(cB.markdown, "changelog" === cB.layout ? 3 : 2), wc.set(cB.id, Bc)), Bc
        }

        function Xc(cB, Bc) {
          return kB(cB).sections.some((cB => cB.heading.anchor === Bc || cB.blocks.some((cB => "heading" === cB.kind && cB.anchor === Bc))))
        }

        function Hc(cB) {
          const [Bc, ...nc] = cB.replace(/^#/, "").split("-"), Vc = Ec.find((cB => cB.id === Bc));
          if (!Vc) return null;
          const Ic = nc.length > 0 ? (0, Yc.r)(nc.join("-")) : "";
          for (const uc of null !== (rB = Vc.childPageIds) && void 0 !== rB ? rB : []) {
            var rB;
            const cB = Wc(uc);
            if (cB.sourceAnchor === Ic) return {
              page: cB,
              anchor: ""
            };
            if (Xc(cB, Ic)) return {
              page: cB,
              anchor: Ic
            }
          }
          return {
            page: Vc,
            anchor: Ic
          }
        }
        const Fc = {
          Examples: {
            pageId: "snippets",
            anchor: ""
          },
          Notes: {
            pageId: "readme",
            anchor: "Globals"
          },
          "Glossary-of-Referenced-Types": {
            pageId: "types",
            anchor: ""
          }
        };

        function Jc(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Vc = Bc.slug ? `${cB}/${Bc.slug}` : cB;
          return nc ? `${Vc}#${nc}` : Vc
        }
        var jB = nc(3802);
        const Rc = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          iB = new Set(["GameApi", "Console", "_TypeOf"]),
          Kc = 4;

        function xB(cB) {
          let Bc = cB.length;
          for (; Bc > 0 && "" === cB[Bc - 1].trim();) Bc--;
          return cB.slice(0, Bc)
        }

        function dc(cB) {
          var Bc;
          const nc = xB(cB);
          if (null === (Bc = nc.at(-1)) || void 0 === Bc || !Bc.trimEnd().endsWith("*/")) return {
            lines: nc,
            doc: ""
          };
          const Vc = nc.findLastIndex((cB => cB.startsWith("/**")));
          return -1 === Vc ? {
            lines: nc,
            doc: ""
          } : {
            lines: xB(nc.slice(0, Vc)),
            doc: nc.slice(Vc).join("\n")
          }
        }

        function Ac(cB) {
          var Bc;
          const nc = cB.split("\n"),
            Vc = nc.flatMap(((cB, Bc) => Rc.test(cB) ? [Bc] : []));
          let Ic = dc(nc.slice(0, null !== (Bc = Vc[0]) && void 0 !== Bc ? Bc : nc.length)).doc;
          return Vc.map(((cB, Bc) => {
            var rB;
            const uc = dc(nc.slice(cB, null !== (rB = Vc[Bc + 1]) && void 0 !== rB ? rB : nc.length)),
              sc = {
                name: nc[cB].match(Rc)[1],
                doc: Ic,
                lines: uc.lines
              };
            return Ic = uc.doc, sc
          }))
        }

        function Gc(cB) {
          var Bc;
          const nc = cB.match(/^readonly \[([\s\S]*)\]$/);
          return nc ? null !== (Bc = nc[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Bc ? Bc : [] : null
        }

        function cn(cB) {
          if (!cB.startsWith("{") || !cB.endsWith("}")) return null;
          const Bc = {
              keys: [],
              values: []
            },
            nc = cB => {
              const nc = cB.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              nc && (Bc.keys.push(nc[1].startsWith('"') ? nc[1] : `"${nc[1]}"`), Bc.values.push(nc[2].trim()))
            };
          let Vc = 0,
            Ic = "";
          for (const rB of cB.slice(1, -1)) "{[(".includes(rB) ? Vc++ : "}])".includes(rB) && Vc--, ";" === rB && 0 === Vc ? (nc(Ic), Ic = "") : Ic += rB;
          return nc(Ic), Bc
        }

        function BB(cB) {
          return cB.length > Kc ? `\n\t| ${cB.join("\n\t| ")}` : cB.join(" | ")
        }

        function nB(cB, Bc) {
          const nc = function(cB, Bc) {
            return cB.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((cB, nc) => {
              var Vc;
              const Ic = null === (Vc = Bc.get(nc)) || void 0 === Vc ? void 0 : Vc.object;
              return Ic ? BB(Ic.values) : cB
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((cB, nc) => {
              var Vc, Ic;
              const rB = null === (Vc = Bc.get(nc)) || void 0 === Vc || null === (Ic = Vc.object) || void 0 === Ic ? void 0 : Ic.values.map(Gc);
              return null !== rB && void 0 !== rB && rB.every((cB => null !== cB)) ? BB([...new Set(rB.flat())]) : cB
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((cB, nc) => {
              var Vc;
              const Ic = null === (Vc = Bc.get(nc)) || void 0 === Vc ? void 0 : Vc.members;
              return Ic ? BB(Ic) : cB
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((cB, nc) => {
              var Vc;
              const Ic = null === (Vc = Bc.get(nc)) || void 0 === Vc ? void 0 : Vc.object;
              return Ic ? BB(Ic.keys) : cB
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((cB, nc) => {
              var Vc, Ic;
              return null !== (Vc = null === (Ic = Bc.get(nc)) || void 0 === Ic ? void 0 : Ic.text) && void 0 !== Vc ? Vc : cB
            }))
          }(cB.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), Bc);
          return [cB.doc, nc].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function VB(cB) {
          const Bc = Ac(cB),
            nc = function(cB) {
              const Bc = new Map,
                nc = cB.find((cB => "_TypeOf" === cB.name));
              let Vc = null;
              const Ic = () => {
                if (Vc) {
                  const cB = Vc.lines.join("\n");
                  Bc.set(Vc.name, {
                    text: cB,
                    members: Gc(cB),
                    object: cn(cB)
                  })
                }
              };
              for (const rB of nc.lines.slice(1, -1)) {
                const cB = rB.match(/^\t([\w$]+): (.+)$/);
                cB ? (Ic(), Vc = {
                  name: cB[1],
                  lines: [cB[2]]
                }) : Vc && Vc.lines.push(rB.replace(/^\t/, ""))
              }
              return Ic(), Bc
            }(Bc),
            Vc = new Map;
          for (const Ic of Bc) iB.has(Ic.name) || Vc.has(Ic.name) || Vc.set(Ic.name, nB(Ic, nc));
          return Vc
        }
        let IB, rn, uB;

        function sB() {
          return rn ??= function(cB) {
            const Bc = Ac(cB).find((cB => "GameApi" === cB.name)),
              nc = new Map,
              Vc = Bc.lines;
            for (let rB = 0; rB < Vc.length; rB++) {
              var Ic;
              if (!Vc[rB].trimStart().startsWith("/**")) continue;
              const cB = rB;
              for (; rB < Vc.length && !Vc[rB].includes("*/");) rB++;
              const Bc = null === (Ic = Vc[rB + 1]) || void 0 === Ic ? void 0 : Ic.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!Bc) continue;
              let uc = null;
              const sc = [];
              let Mc = "description",
                Pc = !1;
              for (const nc of Vc.slice(cB, rB + 1).join("\n").split("\n").map((cB => cB.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const cB = nc.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                cB ? (uc = cB[1].trim(), Mc = "deprecation") : nc.startsWith("@") ? (Mc = "otherTag", Pc = !0) : "" === nc.trim() ? Pc || (Mc = "description", sc.push(nc)) : "deprecation" !== Mc || /^[A-Z]/.test(nc.trim()) ? "otherTag" !== Mc && (Mc = "description", sc.push(nc)) : uc = `${uc} ${nc.trim()}`.trim()
              }
              nc.set(Bc[1], {
                deprecation: uc,
                description: sc.join("\n").trim()
              })
            }
            return nc
          }(jB.default), rn
        }

        function MB() {
          if (!uB) {
            uB = new Map;
            for (const cB of Ec) {
              const Bc = (0, Yc.u)(kB(cB)).flatMap((cB => cB.blocks));
              for (const cB of (0, Yc.i)(Bc))
                if ("ts" === cB.lang || "typescript" === cB.lang)
                  for (const [Bc, nc] of Uc(cB.code)) uB.set(Bc, nc)
            }
            for (const [cB, Bc] of(IB ??= VB(jB.default), IB)) uB.has(cB) || uB.set(cB, Bc)
          }
          return uB
        }
        const PB = {
          BlockName: "blockNames",
          BlockNameOrId: "blockNames",
          ItemName: "itemNames",
          Song: "sounds",
          ParticlePresetId: "particles",
          PlayerPose: "skins",
          IngameIconName: "icons",
          ClientOptions: "clientOptions",
          ClientOption: "clientOptions",
          OtherEntitySettings: "entitySettings",
          OtherEntitySetting: "entitySettings",
          MobSettings: "mobSettings",
          MobSetting: "mobSettings",
          VehicleSetting: "vehicleSettings",
          SettableVehicleSetting: "vehicleSettings"
        };
        let qn;

        function OB() {
          if (!qn) {
            qn = new Map;
            for (const cB of Ec)
              if (bB(cB.layout))
                for (const Bc of kB(cB).sections) qn.has(Bc.heading.text) || qn.set(Bc.heading.text, {
                  pageId: cB.id,
                  anchor: Bc.heading.anchor
                })
          }
          return qn
        }

        function TB(cB) {
          const Bc = cB.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return Bc ? OB().get(Bc[1]) : void 0
        }
        const fB = (0, Vc.createContext)("/docs"),
          mn = (0, Vc.createContext)(null),
          eB = (0, Vc.createContext)(!1),
          tn = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function SB(cB) {
          const Bc = cB.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return Bc ? Bc[1] : null
        }

        function yn(cB) {
          let {
            colour: Bc
          } = cB;
          return (0, mB.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: Bc
            },
            "aria-hidden": "true"
          })
        }

        function zn(cB) {
          const Bc = [];
          let nc = 0;
          for (const Vc of cB.matchAll(tn)) Bc.push(cB.slice(nc, Vc.index), (0, mB.jsx)(yn, {
            colour: Vc[0]
          }), Vc[0]), nc = Vc.index + Vc[0].length;
          return Bc.push(cB.slice(nc)), Bc
        }

        function pB(cB) {
          let {
            href: Bc,
            children: nc
          } = cB;
          const Ic = (0, Vc.useContext)(fB);
          if (Bc.startsWith("#")) {
            const cB = Hc(Bc);
            if (cB) return (0, mB.jsx)(uc.e, {
              to: Jc(Ic, cB.page, cB.anchor),
              children: (0, mB.jsx)(eB.Provider, {
                value: !0,
                children: nc
              })
            })
          }
          return (0, mB.jsx)("a", {
            href: Bc,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, mB.jsx)(eB.Provider, {
              value: !0,
              children: nc
            })
          })
        }

        function hB(cB) {
          let {
            code: Bc
          } = cB;
          const nc = (0, Vc.useContext)(fB);
          if ((0, Vc.useContext)(eB)) return (0, mB.jsx)("code", {
            className: "DocsInlineCode",
            children: Bc
          });
          if (MB().has(Bc)) return (0, mB.jsx)(LB, {
            type: Bc
          });
          const Ic = TB(Bc);
          if (Ic) return (0, mB.jsx)(uc.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: Jc(nc, Wc(Ic.pageId), Ic.anchor),
            children: Bc
          });
          const rB = SB(Bc);
          return (0, mB.jsxs)("code", {
            className: "DocsInlineCode",
            children: [rB && (0, mB.jsx)(yn, {
              colour: rB
            }), Bc]
          })
        }

        function an(cB) {
          let {
            text: Bc
          } = cB;
          const nc = [];
          let Ic = 0;
          for (const Vc of Bc.matchAll(Yc.d)) {
            Vc.index > Ic && nc.push(...zn(Bc.slice(Ic, Vc.index)));
            const [, cB, rB, uc, sc, Mc] = Vc;
            cB ? nc.push((0, mB.jsx)(hB, {
              code: (0, Yc.k)(cB, rB)
            })) : uc ? nc.push((0, mB.jsx)("strong", {
              children: (0, mB.jsx)(an, {
                text: uc
              })
            })) : nc.push((0, mB.jsx)(pB, {
              href: Mc,
              children: (0, mB.jsx)(an, {
                text: sc
              })
            })), Ic = Vc.index + Vc[0].length
          }
          return Ic < Bc.length && nc.push(...zn(Bc.slice(Ic))), (0, mB.jsx)(mB.Fragment, {
            children: nc.map(((cB, Bc) => (0, mB.jsx)(Vc.Fragment, {
              children: cB
            }, Bc)))
          })
        }
        const lB = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          YB = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function LB(cB) {
          let {
            type: Bc
          } = cB;
          const nc = MB(),
            Ic = [];
          for (const Vc of Bc.trim().matchAll(lB)) {
            const [cB, Bc, rB, uc, sc] = Vc;
            Bc ? Ic.push((0, mB.jsx)("span", {
              className: "DocsTypeString",
              children: cB
            })) : rB && nc.has(rB) ? Ic.push((0, mB.jsx)(QB, {
              name: rB,
              definition: nc.get(rB)
            })) : rB ? Ic.push((0, mB.jsx)("span", {
              className: YB.has(rB) ? "DocsTypeKeyword" : "DocsTypeName",
              children: cB
            })) : uc ? Ic.push((0, mB.jsx)("span", {
              className: "DocsTypeNumber",
              children: cB
            })) : sc ? Ic.push(" ") : Ic.push((0, mB.jsx)("span", {
              className: "DocsTypePunctuation",
              children: cB
            }))
          }
          return (0, mB.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Ic.map(((cB, Bc) => (0, mB.jsx)(Vc.Fragment, {
              children: cB
            }, Bc)))
          })
        }
        const gn = 480,
          UB = 6,
          bn = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let ZB = 0;

        function QB(cB) {
          let {
            name: Bc,
            definition: nc
          } = cB;
          const Ic = (0, Vc.useContext)(fB),
            rB = PB[Bc],
            sc = (0, Vc.useRef)(null),
            Mc = (0, Vc.useRef)(null),
            qB = (0, Vc.useRef)(null),
            [Oc, Tc] = (0, Vc.useState)(!1),
            [fc, ec] = (0, Vc.useState)(null),
            Sc = (0, Vc.useRef)(),
            yB = (0, Vc.useContext)(mn),
            [zB] = (0, Vc.useState)((() => "DocsTypePopover-" + ZB++)),
            pc = () => {
              clearTimeout(Sc.current), Tc(!0)
            },
            hc = () => {
              clearTimeout(Sc.current), Sc.current = setTimeout((() => {
                Tc(!1)
              }), 120)
            };
          return (0, Vc.useEffect)((() => {
            if (!Oc) return;
            const cB = cB => {
              if ("Escape" === cB.key) {
                var Bc, nc;
                if (null !== (Bc = Mc.current) && void 0 !== Bc && Bc.contains(document.activeElement)) null === (nc = sc.current) || void 0 === nc || nc.focus();
                Tc(!1)
              }
            };
            return document.addEventListener("keydown", cB), () => {
              document.removeEventListener("keydown", cB)
            }
          }), [Oc]), (0, Vc.useEffect)((() => () => {
            clearTimeout(Sc.current)
          }), []), (0, Vc.useLayoutEffect)((() => {
            if (!Oc || !sc.current || !Mc.current) return void ec(null);
            const cB = sc.current.getBoundingClientRect(),
              Bc = Mc.current.offsetHeight,
              nc = Math.min(gn, window.innerWidth - 32),
              Vc = Math.min(Math.max(16, cB.left), window.innerWidth - nc - 16),
              Ic = cB.bottom + UB + Bc < window.innerHeight;
            ec({
              left: Vc,
              top: Ic ? cB.bottom + UB : Math.max(16, cB.top - UB - Bc)
            })
          }), [Oc]), (0, mB.jsxs)(mB.Fragment, {
            children: [(0, mB.jsx)("button", {
              type: "button",
              ref: sc,
              className: "DocsTypeLink",
              "aria-expanded": Oc,
              "aria-describedby": Oc ? zB : void 0,
              onMouseEnter: pc,
              onMouseLeave: hc,
              onFocus: pc,
              onBlur: hc,
              onKeyDown: cB => {
                "Tab" === cB.key && !cB.shiftKey && qB.current && (cB.preventDefault(), qB.current.focus())
              },
              onClick: pc,
              children: Bc
            }), Oc && (0, Pc.createPortal)((0, mB.jsxs)("span", {
              ref: Mc,
              id: zB,
              className: "DocsTypePopover",
              role: "tooltip",
              style: fc ? {
                left: fc.left,
                top: fc.top,
                maxWidth: gn
              } : {
                visibility: "hidden"
              },
              onMouseEnter: pc,
              onMouseLeave: hc,
              onFocus: pc,
              onBlur: hc,
              children: [(0, mB.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, mB.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: Bc
                }), rB && (0, mB.jsxs)(uc.e, {
                  ref: qB,
                  className: "DocsTypePopoverLink",
                  to: Jc(Ic, Wc(rB)),
                  onClick: () => {
                    Tc(!1)
                  },
                  onKeyDown: cB => {
                    if ("Tab" === cB.key) {
                      var Bc;
                      if (cB.preventDefault(), cB.shiftKey || !sc.current || ! function(cB, Bc) {
                          const nc = [...document.querySelectorAll(bn)],
                            Vc = nc.slice(nc.indexOf(cB) + 1).find((cB => cB.getClientRects().length > 0 && !(null !== Bc && void 0 !== Bc && Bc.contains(cB))));
                          return null === Vc || void 0 === Vc || Vc.focus(), void 0 !== Vc
                        }(sc.current, Mc.current)) null === (Bc = sc.current) || void 0 === Bc || Bc.focus();
                      cB.shiftKey || Tc(!1)
                    }
                  },
                  children: [Wc(rB).title, (0, mB.jsx)(tB, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, mB.jsx)(lc, {
                lang: "ts",
                code: nc,
                compact: !0
              })]
            }), null !== yB && void 0 !== yB ? yB : document.body)]
          })
        }
        var CB = nc(174),
          vn = nc(3808),
          DB = nc(3814),
          NB = nc(3823);
        const EB = {
          progressBar: {
            qE: 30,
            rG: .075,
            sA: 5,
            yE: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            yG: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            aG: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            HA: !0,
            scale: 3,
            rotation: 15,
            JA: !1
          },
          gravityBar: {
            qE: 30,
            iG: .25,
            xG: 3,
            nG: .8,
            gravity: 1,
            r4: 1.5,
            sG: 8,
            pG: 4,
            yE: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            lG: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            QG: 5,
            WG: 1200,
            JG: .15,
            i4: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var oB = nc(244),
          WB = nc(1630);

        function wB(cB) {
          return cB.startsWith("fa-")
        }
        const kn = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          XB = {
            text: "Text",
            icon: {
              icon: "Pixelated Heart"
            },
            progressBar: {
              type: "ProgressBar",
              progress: .5
            },
            keyBinding: {
              type: "StyledKeyBinding",
              action: "jump"
            }
          };

        function HB(cB) {
          return "string" === typeof cB ? "text" : "entityName" in cB || "translationKey" in cB ? "other" : (0, oB.sb)(cB) ? "progressBar" : (0, oB.rb)(cB) ? "keyBinding" : "icon" in cB ? "icon" : "str" in cB && "string" === typeof cB.str ? "text" : "other"
        }
        const FB = [{
            path: ["style", "color"],
            label: "Colour",
            field: {
              kind: "colour"
            },
            defaultText: "The surrounding text's"
          }, {
            path: ["style", "fontSize"],
            label: "Font size",
            field: {
              kind: "size"
            },
            defaultText: "1em"
          }, {
            path: ["style", "fontWeight"],
            label: "Font weight",
            field: {
              kind: "choice",
              options: ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
            },
            defaultText: "normal"
          }, {
            path: ["style", "fontStyle"],
            label: "Font style",
            field: {
              kind: "choice",
              options: ["normal", "italic"]
            },
            defaultText: "normal"
          }, {
            path: ["style", "opacity"],
            label: "Opacity",
            field: {
              kind: "fraction"
            },
            defaultText: "1"
          }],
          JB = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...FB],
            icon: [{
              path: ["icon"],
              label: "Icon",
              field: {
                kind: "icon"
              },
              isRequired: !0
            }, {
              path: ["style", "color"],
              label: "Colour",
              field: {
                kind: "colour"
              },
              defaultText: "None, or the text's for Font Awesome"
            }, {
              path: ["style", "fontSize"],
              label: "Size",
              field: {
                kind: "size"
              },
              defaultText: "1.8em"
            }, {
              path: ["style", "opacity"],
              label: "Opacity",
              field: {
                kind: "fraction"
              },
              defaultText: "1"
            }],
            progressBar: [{
              path: ["progress"],
              label: "Progress",
              field: {
                kind: "fraction"
              },
              isRequired: !0
            }, {
              path: ["width"],
              label: "Width",
              field: {
                kind: "size"
              },
              defaultText: "4em"
            }, {
              path: ["height"],
              label: "Height",
              field: {
                kind: "size"
              },
              defaultText: "0.7em"
            }, {
              path: ["colours"],
              label: "Fill colours",
              field: {
                kind: "colours"
              },
              defaultText: "#ffffff"
            }, {
              path: ["backgroundColour"],
              label: "Track colour",
              field: {
                kind: "colour"
              },
              defaultText: "rgba(0, 0, 0, 0.45)"
            }],
            keyBinding: [{
              path: ["action"],
              label: "Action",
              field: {
                kind: "choice",
                options: WB.k
              },
              isRequired: !0
            }, ...FB],
            other: []
          };

        function jn(cB) {
          return "string" === typeof cB ? {
            str: cB
          } : cB
        }

        function RB(cB, Bc) {
          let nc = jn(cB);
          for (const Vc of Bc) nc = nc && "object" === typeof nc ? nc[Vc] : void 0;
          return nc
        }

        function KB(cB, Bc, nc) {
          const Vc = (cB, Ic) => {
            var rB;
            const uc = Bc[Ic],
              sc = {
                ...cB
              };
            if (Ic === Bc.length - 1) return void 0 === nc ? delete sc[uc] : sc[uc] = nc, sc;
            const Mc = Vc(null !== (rB = cB[uc]) && void 0 !== rB ? rB : {}, Ic + 1);
            return 0 === Object.keys(Mc).length ? delete sc[uc] : sc[uc] = Mc, sc
          };
          return function(cB) {
            const Bc = Object.keys(cB);
            return "string" === typeof cB.str && 1 === Bc.length ? cB.str : cB
          }(Vc(jn(cB), 0))
        }

        function xn(cB, Bc) {
          const nc = HB(cB),
            Vc = JB[nc].find((cB => cB.path.join(".") === Bc.join("."))),
            Ic = null !== Vc && void 0 !== Vc && Vc.isRequired && "other" !== nc ? RB(XB[nc], Bc) : void 0;
          return KB(cB, Bc, Ic)
        }

        function dB(cB) {
          switch (HB(cB)) {
            case "text":
              return String(RB(cB, ["str"]));
            case "icon":
              return String(RB(cB, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(RB(cB,["progress"])))}%`;
            case "keyBinding":
              return String(RB(cB, ["action"]));
            case "other":
              return JSON.stringify(cB)
          }
        }
        const AB = /^[A-Za-z_$][\w$]*$/;

        function GB(cB) {
          if (Array.isArray(cB)) return `[${cB.map(GB).join(", ")}]`;
          if (cB && "object" === typeof cB) {
            const Bc = Object.entries(cB).map((cB => {
              let [Bc, nc] = cB;
              return `${AB.test(Bc)?Bc:JSON.stringify(Bc)}: ${GB(nc)}`
            }));
            return 0 === Bc.length ? "{}" : `{ ${Bc.join(", ")} }`
          }
          return JSON.stringify(cB)
        }

        function cV(cB) {
          const Bc = cB.map(GB),
            nc = `[${Bc.join(", ")}]`;
          return nc.length <= 60 ? nc : `[\n${Bc.map((cB=>`    ${cB},`)).join("\n")}\n]`
        }
        const Bn = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function nn(cB) {
          let Bc = "";
          for (let Ic = 0; Ic < cB.length; Ic++) {
            const rB = cB[Ic];
            if ("\\" === rB) {
              var nc;
              const Vc = null !== (nc = cB[Ic + 1]) && void 0 !== nc ? nc : "";
              Bc += "'" === Vc ? "'" : rB + Vc, Ic++
            } else if ('"' === rB) Bc += '\\"';
            else {
              var Vc;
              Bc += null !== (Vc = Bn[rB]) && void 0 !== Vc ? Vc : rB
            }
          }
          return `"${Bc}"`
        }

        function Vn(cB) {
          if ("string" === typeof cB) return !0;
          if (!cB || "object" !== typeof cB || Array.isArray(cB)) return !1;
          const Bc = cB;
          return "ProgressBar" === Bc.type ? "number" === typeof Bc.progress : "StyledKeyBinding" === Bc.type ? WB.k.includes(Bc.action) : "string" === typeof Bc.icon || "string" === typeof Bc.str || "string" === typeof Bc.entityName || "string" === typeof Bc.translationKey
        }

        function In(cB) {
          let Bc;
          try {
            Bc = function(cB) {
              let Bc = "",
                nc = "",
                Vc = 0;
              const Ic = () => {
                Bc += nc.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), nc = ""
              };
              for (; Vc < cB.length;) {
                const rB = cB.slice(Vc).search(/["'`]|\/\//);
                if (-1 === rB) {
                  nc += cB.slice(Vc);
                  break
                }
                nc += cB.slice(Vc, Vc + rB);
                const uc = Vc + rB,
                  sc = cB[uc];
                if ("/" === sc) {
                  const Bc = cB.indexOf("\n", uc);
                  Vc = -1 === Bc ? cB.length : Bc;
                  continue
                }
                if (Ic(), "`" === sc) throw new Error("Use quotes rather than template strings.");
                let Mc = uc + 1;
                for (; Mc < cB.length && cB[Mc] !== sc;) Mc += "\\" === cB[Mc] ? 2 : 1;
                if (Mc >= cB.length) throw new Error("A string is missing its closing quote.");
                const Pc = cB.slice(uc + 1, Mc);
                Bc += nn(Pc), Vc = Mc + 1
              }
              return Ic(), JSON.parse(Bc)
            }(cB.trim())
          } catch (Vc) {
            return {
              parts: null,
              error: Vc instanceof SyntaxError ? "This isn't a valid array yet." : Vc.message
            }
          }
          if (!Array.isArray(Bc)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const nc = Bc.findIndex((cB => !Vn(cB)));
          return -1 !== nc ? {
            parts: null,
            error: `Part ${nc+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: Bc,
            error: null
          }
        }
        const rV = 1 / CB.e.clientTicksPerSecond,
          un = 700,
          sn = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Mn = {
            progressBar: EB.progressBar.yG,
            timedClick: EB.timedClick.icon,
            gravityBar: EB.gravityBar.icon,
            precisionBar: EB.precisionBar.icon,
            rhythmClick: EB.rhythmClick.icon
          };

        function Pn(cB) {
          let {
            type: Bc
          } = cB;
          const [nc, Ic] = (0, Vc.useState)("ready"), [uc, sc] = (0, Vc.useState)(1), [Mc, Pc] = (0, Vc.useState)(!0), qB = (0, Vc.useRef)(null), Oc = (0, Vc.useRef)(null), Tc = (0, Vc.useRef)(null), fc = (0, Vc.useRef)(new Set), ec = (0, Vc.useRef)(!1), Sc = Mn[Bc], yB = (0, Vc.useMemo)((() => ({
            getState: () => {
              var cB, Bc;
              return null !== (cB = null === (Bc = Tc.current) || void 0 === Bc ? void 0 : Bc.getState()) && void 0 !== cB ? cB : sn
            },
            onFrame: cB => (fc.current.add(cB), () => {
              fc.current.delete(cB)
            })
          })), []);
          (0, Vc.useEffect)((() => {
            const cB = qB.current,
              Bc = Oc.current;
            if (!cB || !Bc) return;
            const nc = new ResizeObserver((() => {
              sc(cB.clientWidth / Math.max(1, Bc.offsetWidth))
            }));
            return nc.observe(cB), () => {
              nc.disconnect()
            }
          }), []), (0, Vc.useEffect)((() => {
            var cB;
            if ("playing" !== nc) return;
            let Vc = !1;
            const rB = new NB.f[Bc](EB[Bc], (cB => {
              Vc = !0, Pc(!1), Ic(cB ? "succeeded" : "failed")
            }), (() => {}));
            Tc.current = rB;
            let uc = 0,
              sc = performance.now(),
              Mc = requestAnimationFrame((function cB(Bc) {
                for (uc += Math.min(.25, (Bc - sc) / 1e3), sc = Bc; uc >= rV && !Vc;) uc -= rV, rB.handleTick(rV);
                for (const nc of fc.current) nc();
                Vc || (Mc = requestAnimationFrame(cB))
              }));
            return null === (cB = qB.current) || void 0 === cB || cB.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Mc), rB.tearDown(), Tc.current = null, ec.current = !1
            }
          }), [nc, Bc]), (0, Vc.useEffect)((() => {
            if (Mc) return;
            const cB = setTimeout((() => {
              Pc(!0)
            }), un);
            return () => {
              clearTimeout(cB)
            }
          }), [Mc]);
          const zB = cB => {
            var Bc;
            "playing" === nc && ec.current !== cB && (ec.current = cB, null === (Bc = Tc.current) || void 0 === Bc || Bc.handleMouseInput(cB))
          };
          return (0, mB.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, mB.jsxs)("div", {
              ref: qB,
              className: rB()("DocsQteStage", {
                Playing: "playing" === nc
              }),
              tabIndex: "playing" === nc ? 0 : -1,
              role: "playing" === nc ? "button" : void 0,
              "aria-label": "playing" === nc ? `${Bc} quick time event: click or press Space` : void 0,
              onPointerDown: cB => {
                0 === cB.button && zB(!0)
              },
              onPointerUp: () => {
                zB(!1)
              },
              onPointerLeave: () => {
                zB(!1)
              },
              onPointerCancel: () => {
                zB(!1)
              },
              onKeyDown: cB => {
                "playing" !== nc || " " !== cB.key && "Enter" !== cB.key || (cB.preventDefault(), zB(!0))
              },
              onKeyUp: cB => {
                "playing" !== nc || " " !== cB.key && "Enter" !== cB.key || zB(!1)
              },
              children: [(0, mB.jsx)("div", {
                ref: Oc,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${uc})`
                },
                children: "playing" === nc && (0, mB.jsx)(DB.e.Provider, {
                  value: yB,
                  children: (0, mB.jsx)(vn.c, {
                    qte: {
                      type: Bc,
                      parameters: EB[Bc]
                    }
                  })
                })
              }), "playing" !== nc && (0, mB.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== nc && (0, mB.jsxs)("div", {
                  className: rB()("DocsQteResult", "succeeded" === nc ? "Succeeded" : "Failed"),
                  children: [(0, mB.jsx)(tB, {
                    name: "succeeded" === nc ? "check" : "cross",
                    isTinted: !0
                  }), (0, mB.jsx)("span", {
                    children: "succeeded" === nc ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, mB.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Mc,
                  onClick: () => {
                    Ic("playing")
                  },
                  children: [(0, mB.jsx)(tB, {
                    name: "ready" === nc ? "play" : "replay"
                  }), (0, mB.jsx)("span", {
                    children: "ready" === nc ? `Try ${Bc}` : "Play again"
                  })]
                })]
              })]
            }), Sc && !wB(Sc) && (0, mB.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, mB.jsx)("code", {
                children: Sc
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function qV(cB) {
          let {
            level: Bc,
            text: nc,
            anchor: Vc,
            className: Ic
          } = cB;
          const uc = `h${Math.min(Bc,6)}`;
          return (0, mB.jsxs)(uc, {
                id: Vc,
                className: rB()("DocsHeading", Ic),
                children: [(0, mB.jsx)(an, {
                      text: nc
                    }), (0, mB.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Vc}`,
                        "aria-label": `Link to ${nc.replace(/`/g,"")}`,children:"#"})]})}function On(cB){let{items:Bc,ordered:nc}=cB;const Vc=nc?"ol":"ul";return(0,mB.jsx)(Vc,{className:"DocsList",children:Bc.map(((cB,Bc)=>(0,mB.jsxs)("li",{children:[(0,mB.jsx)(an,{text:cB.text}),cB.children.length>0&&(0,mB.jsx)(On,{items:cB.children,ordered:nc})]},Bc)))})}function Tn(cB){const Bc=cB[0],nc="paragraph"===(null===Bc||void 0===Bc?void 0:Bc.kind)?Bc.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(nc)?"warning":/^\*\*(tip|prefer)/.test(nc)?"tip":"note"}function fn(cB){let{block:Bc}=cB;switch(Bc.kind){case"heading":return(0,mB.jsx)(qV,{level:Bc.level,text:Bc.text,anchor:Bc.anchor});case"paragraph":return(0,mB.jsx)("p",{children:(0,mB.jsx)(an,{text:Bc.text})});case"code":{const cB="ts"===Bc.lang?function(cB){const Bc=cB.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return Bc&&Object.hasOwn(EB,Bc[1])?Bc[1]:null}(Bc.code):null;return(0,mB.jsxs)(mB.Fragment,{children:[(0,mB.jsx)(lc,{code:Bc.code,lang:Bc.lang}),cB&&(0,mB.jsx)(Pn,{type:cB})]})}case"table":return(0,mB.jsx)("div",{className:"DocsTableScroll",children:(0,mB.jsxs)("table",{className:"DocsTable",children:[(0,mB.jsx)("thead",{children:(0,mB.jsx)("tr",{children:Bc.header.map(((cB,Bc)=>(0,mB.jsx)("th",{children:(0,mB.jsx)(an,{text:cB})},Bc)))})}),(0,mB.jsx)("tbody",{children:Bc.rows.map(((cB,Bc)=>(0,mB.jsx)("tr",{children:cB.map(((cB,Bc)=>(0,mB.jsx)("td",{children:(0,mB.jsx)(an,{text:cB})},Bc)))},Bc)))})]})});case"list":return(0,mB.jsx)(On,{items:Bc.items,ordered:Bc.ordered});case"quote":return(0,mB.jsx)("aside",{className:rB()("DocsCallout",Tn(Bc.blocks)),children:(0,mB.jsx)(mV,{blocks:Bc.blocks})});case"rule":return(0,mB.jsx)("hr",{className:"DocsRule"})}}function mV(cB){let{blocks:Bc}=cB;return(0,mB.jsx)(mB.Fragment,{children:Bc.map(((cB,Bc)=>(0,mB.jsx)(fn,{block:cB},Bc)))})}var en=nc(3797),tV=nc(3799);function Sn(cB){return"blocks"===cB||"items"===cB}const yV=new Map;function zV(cB){let Bc=yV.get(cB);return Bc||(Bc=function(cB){const Bc={entries:[],legend:[],notes:[],examples:[]};let nc=!1;for(const rB of cB.split(/\r?\n/).slice(1)){if(rB.startsWith("#")){const cB=rB.replace(/^# ?/,""),Vc=cB.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Vc?Bc.legend.push({code:Vc[1],meaning:Vc[2],usage:Vc[3].trim()}):/^Examples:/.test(cB.trim())?nc=!0:nc&&cB.trim()?Bc.examples.push(cB.trim()):cB.trim()&&!/^\s/.test(cB)&&Bc.notes.push(cB.trim());continue}const cB=rB.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Vc,Ic;cB&&Bc.entries.push({name:cB[1],variants:null!==(Vc=null===(Ic=cB[2])||void 0===Ic?void 0:Ic.split(","))&&void 0!==Vc?Vc:[]})}return Bc}("blocks"===cB?en:tV),yV.set(cB,Bc)),Bc}function pn(cB){let{className:Bc,value:nc,placeholder:Vc,label:Ic,onChange:rB,count:uc,children:sc}=cB;return(0,mB.jsxs)("div",{className:Bc,children:[(0,mB.jsx)(tB,{name:"magnifying-glass"}),(0,mB.jsx)("input",{type:"search",value:nc,placeholder:Vc,"aria-label":Ic,onChange:cB=>{rB(cB.target.value)}}),sc,uc&&(0,mB.jsxs)("span",{className:"DocsFilterCount",children:[uc.visible," of ",uc.total]})]})}var hn=nc(926);function aV(cB){const Bc=cB.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return Bc?Bc[2]:null}function lnc(cB){return"paragraph"===cB.kind&&""===cB.text.trim()}function Yn(cB){const Bc={name:cB.heading.text,description:[],params:[],returns:null};let nc="description";for(const Ic of cB.blocks)if(!lnc(Ic))if("heading"===Ic.kind&&/^Parameters:?$/.test(Ic.text))nc="params";else if("heading"===Ic.kind&&/^Returns:?$/.test(Ic.text))nc="returns",Bc.returns={type:"",description:[]};else if("params"!==nc||"table"!==Ic.kind){if("returns"===nc&&"paragraph"===Ic.kind&&""===Bc.returns.type){const cB=aV(Ic.text);if(null!==cB){Bc.returns.type=cB.replaceAll("\\|","|");continue}}"returns"===nc?Bc.returns.description.push(Ic):Bc.description.push(Ic)}else for(const[cB,nc,rB]of Ic.rows){var Vc;Bc.params.push({name:cB,type:null!==(Vc=aV(nc))&&void 0!==Vc?Vc:nc,description:null!==rB&&void 0!==rB?rB:""})}return Bc}const Ln=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function gV(cB){return cB.filter((cB=>!lnc(cB)))}const Un=/^[\w][\w .'&!:()-]*$/,bV=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Zn(cB){var Bc;if("code"===cB.kind&&"text"===cB.lang){const Bc=cB.code.split("\n").map((cB=>cB.trim())).filter(Boolean);return Bc.length>0&&Bc.every((cB=>Un.test(cB)))?Bc.map((cB=>({name:cB}))):null}return"paragraph"===cB.kind&&bV.test(cB.text.trim())?[...cB.text.matchAll(/`([ ^ `]+)` / g)].flatMap((cB => cB[1].split(/,\s*/).map((cB => ({
                              name: cB.trim()
                            }))))): "table" === cB.kind && null !== (Bc = cB.header[0]) && void 0 !== Bc && Bc.startsWith("Song") ? cB.rows.map((cB => {
                              let [Bc, nc] = cB;
                              return {
                                name: Bc.replace(/`/g, ""),
                                caption: nc
                              }
                            })) : null
                          }

                          function Qn(cB) {
                            const Bc = [];
                            for (const nc of cB) {
                              const cB = Zn(nc),
                                Vc = Bc.at(-1),
                                Ic = "table" === nc.kind;
                              cB ? "names" === (null === Vc || void 0 === Vc ? void 0 : Vc.kind) && Vc.isSongs === Ic ? Vc.names.push(...cB) : Bc.push({
                                kind: "names",
                                names: cB,
                                isSongs: Ic
                              }) : Bc.push({
                                kind: "block",
                                block: nc
                              })
                            }
                            return Bc
                          }
                          const Cn = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function vV(cB, Bc) {
                            return `${Cn[cB]}-${(0,Yc.r)(Bc)}`
                          }
                          const Dn = new WeakMap;

                          function Nn(cB, Bc, nc) {
                            let Vc = Dn.get(Bc);
                            if (!Vc) {
                              Vc = new Map;
                              const nc = new Set;
                              for (const Ic of (0, Yc.u)(Bc)) {
                                const Bc = Qn(gV(Ic.blocks)).map((Bc => {
                                  if ("block" === Bc.kind) return Bc;
                                  return {
                                    kind: "names",
                                    names: Bc.names.map((Bc => {
                                      var Vc, rB;
                                      const uc = vV(cB, Bc.name);
                                      let sc = uc;
                                      for (let cB = 2; nc.has(sc); cB++) sc = `${uc}-${cB}`;
                                      return nc.add(sc), {
                                        ...Bc,
                                        anchor: sc,
                                        heading: null !== (Vc = null === (rB = Ic.heading) || void 0 === rB ? void 0 : rB.text) && void 0 !== Vc ? Vc : ""
                                      }
                                    })),
                                    isSongs: Bc.isSongs
                                  }
                                }));
                                Vc.set(Ic.blocks, Bc)
                              }
                              Dn.set(Bc, Vc)
                            }
                            const Ic = Vc.get(nc);
                            if (!Ic) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Ic
                          }
                          const En = "/textures/docs/skinPreviews",
                            onc = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var Wn = nc(3422),
                            wn = nc(3441);

                          function kV(cB) {
                            return Object.hasOwn(Wn.c, cB) ? Wn.c[cB] : null
                          }
                          const Xn = {
                            dir1: [-1, -1, -1],
                            dir2: [1, 1, 1],
                            texture: "bubble",
                            minLifeTime: .2,
                            maxLifeTime: .6,
                            minEmitPower: 2,
                            maxEmitPower: 2,
                            minSize: .25,
                            maxSize: .35,
                            manualEmitCount: 20,
                            gravity: [0, -10, 0],
                            colorGradients: [{
                              timeFraction: 0,
                              minColor: [60, 60, 150, 1],
                              maxColor: [200, 200, 255, 1]
                            }],
                            velocityGradients: [{
                              timeFraction: 0,
                              factor: 1,
                              factor2: 1
                            }],
                            blendMode: wn.f.Standard
                          };

                          function Hn(cB, Bc, nc) {
                            return Bc + (nc - Bc) * cB()
                          }

                          function Fn(cB, Bc, nc) {
                            return cB + (Bc - cB) * nc
                          }

                          function Jn(cB) {
                            return cB.length > 0 && "timeFraction" in cB[0]
                          }

                          function jV(cB, Bc) {
                            if (0 === cB.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Jn(cB.colorGradients)) {
                              const nc = cB.colorGradients,
                                {
                                  color: Vc
                                } = nc[Math.floor(Bc() * nc.length) % nc.length];
                              return [{
                                at: 0,
                                colour: [Vc[0] / 255, Vc[1] / 255, Vc[2] / 255, 1]
                              }]
                            }
                            return [...cB.colorGradients].sort(((cB, Bc) => cB.timeFraction - Bc.timeFraction)).map((cB => {
                              var nc, Vc, Ic;
                              const rB = cB.minColor,
                                uc = null !== (nc = cB.maxColor) && void 0 !== nc ? nc : rB,
                                sc = Bc(),
                                Mc = [Fn(rB[0], uc[0], sc) / 255, Fn(rB[1], uc[1], sc) / 255, Fn(rB[2], uc[2], sc) / 255, Fn(null !== (Vc = rB[3]) && void 0 !== Vc ? Vc : 1, null !== (Ic = uc[3]) && void 0 !== Ic ? Ic : 1, sc)];
                              return {
                                at: cB.timeFraction,
                                colour: Mc
                              }
                            }))
                          }

                          function Rn(cB, Bc, nc, Vc) {
                            const Ic = Hn(Vc, cB.minEmitPower, cB.maxEmitPower),
                              rB = Bc => Hn(Vc, Math.min(cB.dir1[Bc], cB.dir2[Bc]), Math.max(cB.dir1[Bc], cB.dir2[Bc])) * Ic,
                              uc = [...cB.velocityGradients].sort(((cB, Bc) => cB.timeFraction - Bc.timeFraction)).map((cB => ({
                                at: cB.timeFraction,
                                factor: Hn(Vc, cB.factor, cB.factor2)
                              })));
                            return {
                              pos: [Hn(Vc, Bc[0], nc[0]), Hn(Vc, Bc[1], nc[1]), Hn(Vc, Bc[2], nc[2])],
                              dir: [rB(0), rB(1), rB(2)],
                              age: 0,
                              life: Hn(Vc, cB.minLifeTime, cB.maxLifeTime),
                              size: Hn(Vc, cB.minSize, cB.maxSize),
                              colours: jV(cB, Vc),
                              velocityFactors: uc
                            }
                          }

                          function iV(cB, Bc, nc, Vc) {
                            if (Bc < cB[0].at) return nc(Math.min(1, cB.length - 1));
                            for (let Ic = 0; Ic < cB.length - 1; Ic++)
                              if (Bc <= cB[Ic + 1].at) {
                                const rB = cB[Ic + 1].at - cB[Ic].at;
                                return Vc(nc(Ic), nc(Ic + 1), rB > 0 ? (Bc - cB[Ic].at) / rB : 1)
                              } return nc(cB.length - 1)
                          }

                          function Kn(cB) {
                            return iV(cB.colours, cB.age / cB.life, (Bc => cB.colours[Bc].colour), ((cB, Bc, nc) => [Fn(cB[0], Bc[0], nc), Fn(cB[1], Bc[1], nc), Fn(cB[2], Bc[2], nc), Fn(cB[3], Bc[3], nc)]))
                          }

                          function xV(cB, Bc, nc) {
                            if (cB.age += nc, cB.age >= cB.life) return !1;
                            const Vc = function(cB) {
                              return 0 === cB.velocityFactors.length ? 1 : iV(cB.velocityFactors, cB.age / cB.life, (Bc => cB.velocityFactors[Bc].factor), Fn)
                            }(cB) * nc;
                            for (let rB = 0; rB < 3; rB++) {
                              var Ic;
                              cB.pos[rB] += cB.dir[rB] * Vc, cB.dir[rB] += (null !== (Ic = Bc[rB]) && void 0 !== Ic ? Ic : 0) * nc
                            }
                            return !0
                          }

                          function dn(cB) {
                            return String(Math.round(1e6 * cB) / 1e6)
                          }

                          function An(cB) {
                            return `[${cB.map(dn).join(", ")}]`
                          }

                          function Gn(cB, Bc) {
                            const nc = `${Bc}    `;
                            return `[\n${(Jn(cB)?cB.map((cB=>{const Bc=[`${nc}    timeFraction: ${dn(cB.timeFraction)},`,`${nc}    minColor: ${An(cB.minColor)},`];return cB.maxColor&&Bc.push(`${nc}    maxColor: ${An(cB.maxColor)},`),`${nc}{\n${Bc.join("\n")}\n${nc}},`})):cB.map((cB=>`
                            $ {
                              nc
                            } {
                              color: $ {
                                An(cB.color)
                              }
                            }, `))).join("\n")}\n${Bc}]`
                          }
                          const cI = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            BV = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const nV = .6;

                          function VV(cB, Bc) {
                            return `${Bc?"song":"sound"}:${cB}`
                          }
                          let IV = {
                              track: null,
                              volume: nV
                            },
                            rI = null,
                            uV = 0,
                            sV = 0;
                          const MV = new Set;

                          function PV(cB) {
                            IV = {
                              ...IV,
                              ...cB
                            }, MV.forEach((cB => {
                              cB()
                            }))
                          }

                          function qI(cB) {
                            IV.track && PV({
                              track: {
                                ...IV.track,
                                ...cB
                              }
                            })
                          }

                          function OV(cB) {
                            const [Bc, nc] = (0, Vc.useState)((() => cB(IV))), Ic = (0, Vc.useRef)(cB);
                            return Ic.current = cB, (0, Vc.useEffect)((() => {
                              const cB = () => {
                                nc((() => Ic.current(IV)))
                              };
                              return MV.add(cB), cB(), () => {
                                MV.delete(cB)
                              }
                            }), []), Bc
                          }

                          function TV() {
                            uV++;
                            const cB = rI;
                            rI = null, null === cB || void 0 === cB || cB.stop()
                          }

                          function fV(cB, Bc) {
                            let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            TV();
                            const Ic = uV,
                              {
                                track: rB
                              } = IV,
                              uc = rB && rB.name === cB && rB.isSong === Bc ? rB.duration : 0;
                            sV = Vc, PV({
                              track: {
                                name: cB,
                                isSong: Bc,
                                status: "loading",
                                duration: uc
                              }
                            }), Promise.all([nc.e(198), nc.e(225)]).then((() => nc(37867))).then((nc => {
                              let {
                                playDocsSound: rB
                              } = nc;
                              Ic === uV && (rI = rB(cB, Bc, IV.volume, Vc, {
                                onPlay: cB => {
                                  Ic === uV && qI({
                                    status: "playing",
                                    duration: cB
                                  })
                                },
                                onEnd: cB => {
                                  var Bc, nc;
                                  Ic === uV && (rI = null, cB ? PV({
                                    track: null
                                  }) : (sV = null !== (Bc = null === (nc = IV.track) || void 0 === nc ? void 0 : nc.duration) && void 0 !== Bc ? Bc : 0, qI({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((Bc => {
                              console.error(`Could not play docs sound ${cB}`, Bc), Ic === uV && PV({
                                track: null
                              })
                            }))
                          }

                          function mI() {
                            const {
                              track: cB
                            } = IV;
                            if (!cB) return;
                            if ("playing" === cB.status && rI) return sV = rI.rC(), rI.pause(), void qI({
                              status: "paused"
                            });
                            if ("loading" === cB.status) return TV(), void qI({
                              status: "paused"
                            });
                            if (rI) return void rI.resume();
                            const Bc = cB.duration > 0 && sV >= cB.duration - .05;
                            fV(cB.name, cB.isSong, Bc ? 0 : sV)
                          }

                          function eV() {
                            var cB;
                            return rI && "playing" === (null === (cB = IV.track) || void 0 === cB ? void 0 : cB.status) ? rI.rC() : sV
                          }

                          function tI(cB) {
                            var Bc;
                            null === (Bc = rI) || void 0 === Bc || Bc.setVolume(cB), PV({
                              volume: cB
                            })
                          }

                          function SV() {
                            TV(), sV = 0, PV({
                              track: null
                            })
                          }
                          const yI = (0, Vc.createContext)(null);
                          let zI = null;

                          function pV() {
                            const [cB, Bc] = (0, Vc.useState)(null);
                            return (0, Vc.useEffect)((() => {
                              let cB = !1;
                              return zI ??= Promise.all([nc.e(60), nc.e(63), nc.e(62), nc.e(61), nc.e(181), nc.e(83), nc.e(205)]).then((() => nc(37858))), zI.then((nc => {
                                cB || Bc(nc)
                              }), (cB => {
                                console.error("Could not load the docs gallery's textures", cB), zI = null
                              })), () => {
                                cB = !0
                              }
                            }), []), cB
                          }
                          const hV = 24,
                            aI = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function lV(cB, Bc) {
                            const nc = "skins" === cB ? function(cB, Bc) {
                              const nc = onc.find((Bc => cB.startsWith(Bc.heading)));
                              return nc ? function(cB, Bc) {
                                return `${cB}-${Bc}`
                              }(nc.prefix, Bc) : null
                            }(Bc.heading, Bc.name) : null;
                            return null === nc ? null : `${En}/${nc}.webp`
                          }

                          function YV(cB) {
                            let {
                              kind: Bc,
                              entry: nc,
                              assets: Ic,
                              renderedUrl: uc
                            } = cB;
                            const {
                              name: sc
                            } = nc, [Mc, Pc] = (0, Vc.useState)(!1);
                            if ("icons" === Bc && wB(sc)) return (0, mB.jsx)(hn.e, {
                              className: "DocsTileIcon",
                              name: sc
                            });
                            let qB = null;
                            var Oc;
                            if ("icons" === Bc) qB = null !== (Oc = null === Ic || void 0 === Ic ? void 0 : Ic.getIngameIconUrl(sc)) && void 0 !== Oc ? Oc : null;
                            else if ("particles" === Bc) {
                              var Tc, fc, ec;
                              qB = null !== (Tc = null === Ic || void 0 === Ic ? void 0 : Ic.getParticleTextureUrl(null !== (fc = null === (ec = kV(sc)) || void 0 === ec ? void 0 : ec.texture) && void 0 !== fc ? fc : sc)) && void 0 !== Tc ? Tc : null
                            } else "skins" === Bc && (qB = null !== uc && void 0 !== uc ? uc : aI.test(sc) ? `/textures/charSkins/previews/${sc}_preview.png` : null);
                            return !qB || Mc ? (0, mB.jsx)(tB, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === Bc ? "person" : "image"
                            }) : (0, mB.jsx)("img", {
                              className: rB()("DocsTileImage", {
                                Pixelated: "skins" !== Bc
                              }),
                              src: qB,
                              srcSet: qB === uc ? `${qB} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${qB}`), Pc(!0)
                              }
                            })
                          }

                          function LV(cB) {
                            let {
                              entry: Bc,
                              isSong: nc
                            } = cB;
                            const Vc = OV((cB => {
                                let {
                                  track: Vc
                                } = cB;
                                return (null === Vc || void 0 === Vc ? void 0 : Vc.name) === Bc.name && Vc.isSong === nc ? Vc.status : null
                              })),
                              Ic = null !== Vc && "paused" !== Vc;
                            return (0, mB.jsxs)("button", {
                              type: "button",
                              id: Bc.anchor,
                              className: rB()("DocsSoundTile", {
                                Playing: Ic
                              }),
                              "data-docs-track": VV(Bc.name, nc),
                              "aria-label": Ic ? `Pause ${Bc.name}` : `Play ${Bc.name}`,
                              onClick: () => {
                                null !== Vc ? mI() : fV(Bc.name, nc)
                              },
                              children: [(0, mB.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, mB.jsx)(tB, {
                                  name: Ic ? "pause" : "play"
                                })
                              }), (0, mB.jsx)("code", {
                                className: "DocsSoundName",
                                children: Bc.name
                              }), Bc.caption && (0, mB.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: Bc.caption
                              })]
                            })
                          }

                          function gI(cB) {
                            let {
                              kind: Bc,
                              names: nc,
                              isSongs: Ic
                            } = cB;
                            const uc = pV(),
                              [sc, Mc] = yB(),
                              Pc = !1 === (null === sc || void 0 === sc ? void 0 : sc.failed) ? sc.text : null,
                              qB = (0, Vc.useContext)(yI),
                              [Oc, Tc] = (0, Vc.useState)(""),
                              fc = Oc.trim().toLowerCase(),
                              ec = fc ? nc.filter((cB => cB.name.toLowerCase().includes(fc))) : nc;
                            return (0, mB.jsxs)("div", {
                              className: "DocsGallery",
                              children: [nc.length > hV && (0, mB.jsx)(pn, {
                                className: "DocsGalleryFilter",
                                value: Oc,
                                placeholder: `Filter ${nc.length} names\u2026`,
                                label: "Filter names",
                                onChange: Tc,
                                count: fc ? {
                                  visible: ec.length,
                                  total: nc.length
                                } : null
                              }), (0, mB.jsx)("div", {
                                className: rB()("DocsGalleryGrid", `Kind-${Bc}`, {
                                  Songs: Ic
                                }),
                                children: ec.map((cB => {
                                  if ("sounds" === Bc) return (0, mB.jsx)(LV, {
                                    entry: cB,
                                    isSong: Ic
                                  }, cB.anchor);
                                  if (qB && "particles" === Bc && kV(cB.name)) return (0, mB.jsxs)("button", {
                                    type: "button",
                                    id: cB.anchor,
                                    className: rB()("DocsTile Previewable", {
                                      Copied: Pc === cB.name
                                    }),
                                    title: `Play "${cB.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      qB(cB.name), Mc(cB.name)
                                    },
                                    children: [(0, mB.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, mB.jsx)(YV, {
                                        kind: Bc,
                                        entry: cB,
                                        assets: uc,
                                        renderedUrl: null
                                      }), (0, mB.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, mB.jsx)(tB, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, mB.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Pc === cB.name ? "Copied!" : cB.name
                                    })]
                                  }, cB.anchor);
                                  const nc = lV(Bc, cB);
                                  return (0, mB.jsxs)("button", {
                                    type: "button",
                                    id: cB.anchor,
                                    className: rB()("DocsTile", {
                                      Copied: Pc === cB.name
                                    }),
                                    title: `Copy "${cB.name}"`,
                                    onClick: () => {
                                      Mc(cB.name)
                                    },
                                    children: [(0, mB.jsx)("span", {
                                      className: rB()("DocsTilePreview", {
                                        Rendered: null !== nc
                                      }),
                                      children: (0, mB.jsx)(YV, {
                                        kind: Bc,
                                        entry: cB,
                                        assets: uc,
                                        renderedUrl: nc
                                      })
                                    }), (0, mB.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Pc === cB.name ? "Copied!" : cB.name
                                    })]
                                  }, cB.anchor)
                                }))
                              })]
                            })
                          }

                          function UV(cB) {
                            let {
                              kind: Bc,
                              content: nc,
                              blocks: Vc
                            } = cB;
                            return (0, mB.jsx)(mB.Fragment, {
                              children: Nn(Bc, nc, Vc).map(((cB, nc) => "block" === cB.kind ? (0, mB.jsx)(fn, {
                                block: cB.block
                              }, nc) : (0, mB.jsx)(gI, {
                                kind: Bc,
                                names: cB.names,
                                isSongs: cB.isSongs
                              }, nc)))
                            })
                          }
                          const bI = [{
                            pageId: "readme"
                          }, {
                            pageId: "snippets",
                            countNoun: "snippets"
                          }, {
                            pageId: "apiReference",
                            countNoun: "methods"
                          }, {
                            pageId: "callbacks",
                            countNoun: "callbacks"
                          }, {
                            pageId: "howTo"
                          }, {
                            pageId: "clientOptions",
                            countNoun: "options"
                          }];

                          function ZV(cB) {
                            let {
                              cards: Bc = bI,
                              label: nc = "Start here"
                            } = cB;
                            const Ic = (0, Vc.useContext)(fB);
                            return (0, mB.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": nc,
                              children: Bc.map((cB => {
                                let {
                                  pageId: Bc,
                                  countNoun: nc
                                } = cB;
                                const Vc = Wc(Bc);
                                return (0, mB.jsxs)(uc.e, {
                                  to: Jc(Ic, Vc),
                                  className: "DocsLandingCard",
                                  children: [(0, mB.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, mB.jsx)(tB, {
                                      name: Vc.icon
                                    })
                                  }), (0, mB.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Vc.title
                                  }), (0, mB.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Vc.summary
                                  }), nc && (0, mB.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [kB(Vc).sections.length, " ", nc]
                                  })]
                                }, Bc)
                              }))
                            })
                          }
                          const QV = 240;

                          function CV(cB) {
                            let {
                              faces: Bc
                            } = cB;
                            return (0, mB.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, mB.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${Bc.top}")`
                                }
                              }), (0, mB.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${Bc.left}")`
                                }
                              }), (0, mB.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${Bc.right}")`
                                }
                              })]
                            })
                          }

                          function vI(cB) {
                            let {
                              src: Bc
                            } = cB;
                            const [nc, Ic] = (0, Vc.useState)(!1);
                            return nc ? null : (0, mB.jsx)("img", {
                              src: Bc,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${Bc}`), Ic(!0)
                              }
                            })
                          }

                          function DV(cB) {
                            let {
                              kind: Bc
                            } = cB;
                            const nc = zV(Bc),
                              Ic = pV(),
                              uc = (0, sc.s)(),
                              [Mc, Pc] = (0, Vc.useState)(""),
                              [qB, Oc] = (0, Vc.useState)(null),
                              [Tc, fc] = (0, Vc.useState)(QV),
                              [ec, Sc] = (0, Vc.useState)(null),
                              yB = (0, Vc.useRef)(null),
                              pc = Mc.trim().toLowerCase();
                            (0, Vc.useEffect)((() => {
                              const cB = (0, Yc.o)(uc.hash),
                                Vc = nc.entries.find((nc => vV(Bc, nc.name) === cB));
                              if (Vc) yB.current = Vc.name, Pc(Vc.name), Oc(null), Sc(Vc.name);
                              else if (null !== yB.current) {
                                const cB = yB.current;
                                yB.current = null, Pc((Bc => Bc === cB ? "" : Bc)), Sc(null)
                              }
                            }), [nc, Bc, uc.hash, uc.key]), (0, Vc.useEffect)((() => {
                              var cB;
                              null !== ec && (null === (cB = document.getElementById(vV(Bc, ec))) || void 0 === cB || cB.scrollIntoView({
                                block: "center"
                              }))
                            }), [Bc, ec]);
                            const hc = nc.entries.filter((cB => (!pc || cB.name.toLowerCase().includes(pc)) && (!qB || cB.variants.includes(qB))));
                            return (0, mB.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [nc.notes.length > 0 && (0, mB.jsx)("div", {
                                className: "DocsProse",
                                children: nc.notes.map((cB => (0, mB.jsx)("p", {
                                  children: cB
                                }, cB)))
                              }), nc.legend.length > 0 && (0, mB.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, mB.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, mB.jsx)("thead", {
                                    children: (0, mB.jsxs)("tr", {
                                      children: [(0, mB.jsx)("th", {
                                        children: "Code"
                                      }), (0, mB.jsx)("th", {
                                        children: "Variant"
                                      }), (0, mB.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, mB.jsx)("tbody", {
                                    children: nc.legend.map((cB => (0, mB.jsxs)("tr", {
                                      children: [(0, mB.jsx)("td", {
                                        children: (0, mB.jsx)("button", {
                                          type: "button",
                                          className: rB()("DocsVariantChip", {
                                            Active: qB === cB.code
                                          }),
                                          "aria-pressed": qB === cB.code,
                                          title: `Show only ${Bc} with ${cB.meaning} variants`,
                                          onClick: () => {
                                            Oc(qB === cB.code ? null : cB.code)
                                          },
                                          children: cB.code
                                        })
                                      }), (0, mB.jsx)("td", {
                                        children: cB.meaning
                                      }), (0, mB.jsx)("td", {
                                        children: (0, mB.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: cB.usage
                                        })
                                      })]
                                    }, cB.code)))
                                  })]
                                })
                              }), nc.examples.length > 0 && (0, mB.jsx)(lc, {
                                lang: "text",
                                code: nc.examples.join("\n")
                              }), (0, mB.jsx)(pn, {
                                className: "DocsFilterBar",
                                value: Mc,
                                placeholder: `Search ${nc.entries.length} ${Bc}\u2026`,
                                label: `Search ${Bc}`,
                                onChange: cB => {
                                  Pc(cB), fc(QV)
                                },
                                count: pc || qB ? {
                                  visible: hc.length,
                                  total: nc.entries.length
                                } : null,
                                children: qB && (0, mB.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Oc(null)
                                  },
                                  children: [qB, " ", (0, mB.jsx)(tB, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, mB.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: hc.slice(0, Tc).map((cB => {
                                  const nc = "blocks" === Bc ? null === Ic || void 0 === Ic ? void 0 : Ic.getBlockFaces(cB.name) : null,
                                    Vc = Ic && !nc ? Ic.getItemTextureUrl(cB.name) : null;
                                  return (0, mB.jsxs)("div", {
                                    id: vV(Bc, cB.name),
                                    className: rB()("DocsCatalogueTile", {
                                      Linked: cB.name === ec
                                    }),
                                    children: [(0, mB.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [nc && (0, mB.jsx)(CV, {
                                        faces: nc
                                      }), Vc && (0, mB.jsx)(vI, {
                                        src: Vc
                                      })]
                                    }), (0, mB.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: cB.name
                                    }), cB.variants.length > 0 && (0, mB.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: cB.variants.map((cB => (0, mB.jsx)("span", {
                                        children: cB
                                      }, cB)))
                                    }), (0, mB.jsx)(zB, {
                                      text: cB.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, cB.name)
                                }))
                              }), hc.length > Tc && (0, mB.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  fc(hc.length)
                                },
                                children: ["Show all ", hc.length]
                              }), 0 === hc.length && (0, mB.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", Bc, " match."]
                              })]
                            })
                          }
                          var NV = nc(3874),
                            EV = nc(1406);
                          const oV = .95 * NV.b;

                          function WV(cB) {
                            return /^\s*```/.test(cB)
                          }

                          function wV(cB, Bc) {
                            const nc = [
                              []
                            ];
                            let Vc = !1;
                            for (const Ic of cB.split("\n")) !Vc && Bc(Ic) && nc.at(-1).length > 0 && nc.push([]), WV(Ic) && (Vc = !Vc), nc.at(-1).push(Ic);
                            return nc.map((cB => cB.join("\n").trim())).filter(Boolean)
                          }

                          function kI(cB, Bc) {
                            const nc = `${"#".repeat(Bc)} `,
                              Vc = [];
                            let Ic = !1;
                            for (const rB of cB.split("\n")) WV(rB) ? Ic = !Ic : !Ic && rB.startsWith(nc) && Vc.push(rB.slice(nc.length).trim());
                            return Vc
                          }

                          function XV(cB) {
                            return cB.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class HV {
                            constructor(cB, Bc) {
                              this.origin = Bc, this.pages = void 0, this.partPaths = new Map;
                              const nc = cB.map((cB => {
                                const Bc = function(cB, Bc) {
                                  const nc = cB.map((cB => Bc(cB) + 2)),
                                    Vc = nc.reduce(((cB, Bc) => cB + Bc), 0),
                                    Ic = Vc / Math.ceil(Vc / oV),
                                    rB = [];
                                  let uc = 0;
                                  return cB.forEach(((cB, Bc) => {
                                    const Vc = nc[Bc];
                                    (0 === rB.length || uc + Vc > oV || uc + Vc / 2 > Ic) && (rB.push([]), uc = 0), rB.at(-1).push(cB), uc += Vc
                                  })), rB
                                }(wV(XV(cB), (cB => cB.startsWith("## "))).flatMap((cB => {
                                  var Bc;
                                  const nc = null !== (Bc = kI(cB, 2)[0]) && void 0 !== Bc ? Bc : "";
                                  if (cB.length <= oV) return [{
                                    markdown: cB,
                                    section: nc
                                  }];
                                  let Vc = !1;
                                  return wV(cB, (cB => {
                                    const Bc = Vc && "" !== cB.trim();
                                    return Vc = "" === cB.trim(), Bc
                                  })).map((cB => ({
                                    markdown: cB,
                                    section: nc
                                  })))
                                })), (Bc => this.resolveLinks(cB, Bc.markdown).length));
                                return {
                                  page: cB,
                                  groups: Bc.length > 1 ? Bc : []
                                }
                              }));
                              for (const {
                                  page: Vc,
                                  groups: Ic
                                }
                                of nc) Ic.forEach(((cB, Bc) => {
                                const nc = (0, NV.v)(Vc.slug, Bc);
                                for (const Ic of cB.flatMap((cB => [...kI(cB.markdown, 2), ...kI(cB.markdown, 3)]))) {
                                  const cB = `${Vc.id}#${(0,Yc.r)(Ic)}`;
                                  this.partPaths.has(cB) || this.partPaths.set(cB, nc)
                                }
                              }));
                              this.pages = nc.map((cB => {
                                let {
                                  page: Bc,
                                  groups: nc
                                } = cB;
                                return {
                                  page: Bc,
                                  path: (0, NV.s)(Bc.slug),
                                  markdown: `# ${Bc.title}\n\n${this.resolveLinks(Bc,XV(Bc))}\n`,
                                  parts: nc.map(((cB, Vc) => this.renderPart(Bc, cB, Vc, nc.length)))
                                }
                              }))
                            }
                            url(cB) {
                              return `${this.origin}${cB}`
                            }
                            getPage(cB) {
                              return this.pages.find((Bc => Bc.page.id === cB))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((cB => (cB.parts.length > 0 ? cB.parts : [{
                                path: cB.path,
                                label: "",
                                markdown: cB.markdown
                              }]).filter((cB => cB.markdown.length > NV.b))))
                            }
                            markdownUrl(cB, Bc) {
                              const nc = Bc && this.partPaths.get(`${cB.id}#${Bc}`) || (0, NV.s)(cB.slug);
                              return this.url(Bc ? `${nc}#${Bc}` : nc)
                            }
                            resolveLinks(cB, Bc) {
                              return Bc.replace(/\]\((#[^)]+)\)/g, ((Bc, nc) => {
                                var Vc;
                                const Ic = null !== (Vc = Hc(nc)) && void 0 !== Vc ? Vc : this.samePageTarget(cB, nc);
                                return Ic ? `](${this.markdownUrl(Ic.page,Ic.anchor)})` : Bc
                              }))
                            }
                            samePageTarget(cB, Bc) {
                              const nc = (0, Yc.r)(Bc.slice(1));
                              return Xc(cB, nc) ? {
                                page: cB,
                                anchor: nc
                              } : null
                            }
                            renderPart(cB, Bc, nc, Vc) {
                              const Ic = function(cB) {
                                  const Bc = cB.map((cB => cB.section)).filter(Boolean);
                                  if (0 === Bc.length) return "";
                                  const nc = Bc[0],
                                    Vc = Bc.at(-1);
                                  return nc === Vc ? nc : `${nc} to ${Vc}`
                                }(Bc),
                                rB = Bc.map((cB => cB.markdown)).join("\n\n"),
                                uc = Ic ? `It covers ${Ic}. ` : "",
                                sc = `Part ${nc+1} of ${Vc} of [${cB.title}](${this.url((0,NV.s)(cB.slug))}). ${uc}[llms.txt](${this.url(NV.g)}) lists every part.`;
                              return {
                                path: (0, NV.v)(cB.slug, nc),
                                label: Ic,
                                markdown: `# ${cB.title}, part ${nc+1} of ${Vc}\n\n${sc}\n\n${this.resolveLinks(cB,rB)}\n`
                              }
                            }
                            llmsTxt(cB) {
                              const Bc = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${FV(NV.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const nc of oc) {
                                Bc.push("", `## ${nc.title}`, "");
                                for (const cB of nc.pageIds) {
                                  const nc = this.getPage(cB),
                                    {
                                      page: Vc,
                                      parts: Ic
                                    } = nc,
                                    rB = `About ${FV(nc.markdown.length)} tokens${Ic.length>0?`, in ${Ic.length} parts:`:"."}`;
                                  Bc.push(`- [${Vc.title}](${this.url(nc.path)}): ${Vc.summary} ${rB}`), Ic.forEach(((cB, nc) => {
                                    Bc.push(`  - [Part ${nc+1}${cB.label?`: ${cB.label}`:""}](${this.url(cB.path)})`)
                                  }))
                                }
                              }
                              return Bc.push("", "## Optional", "", `- [Every page in one file](${this.url(NV.e)}): About ${FV(cB.length)} tokens, for a model with a large context window.`, ""), Bc.join("\n")
                            }
                            llmsFullTxt() {
                              return oc.flatMap((cB => cB.pageIds.map((cB => this.getPage(cB).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const cB = this.llmsFullTxt(),
                                Bc = this.llmsTxt(cB),
                                nc = new Map([
                                  [NV.m, Bc],
                                  [NV.g, Bc],
                                  [NV.e, cB]
                                ]);
                              for (const Vc of this.pages) {
                                nc.set(Vc.path, Vc.markdown);
                                for (const cB of Vc.parts) nc.set(cB.path, cB.markdown)
                              }
                              return nc
                            }
                          }

                          function FV(cB) {
                            return `${Math.max(1,Math.round(cB/4e3))}K`
                          }
                          let JV = null;

                          function jI() {
                            return JV ??= new HV(Ec, EV.b), JV
                          }
                          const RV = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function iI(cB) {
                            return jI().getPage(cB.id).parts.length > 0 ? `Read ${NV.j}, then the parts of the Bloxd Code API's ${cB.title} page it lists, so I can ask questions about it.` : `Read ${EV.b}${(0,NV.s)(cB.slug)} so I can ask questions about it. ${NV.j} lists every page of the Bloxd Code API docs.`
                          }

                          function KV(cB) {
                            let {
                              page: Bc
                            } = cB;
                            const [nc, Vc] = yB();
                            return (0, mB.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, mB.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Vc(jI().getPage(Bc.id).markdown)
                                },
                                children: [(0, mB.jsx)(tB, {
                                  name: !1 === (null === nc || void 0 === nc ? void 0 : nc.failed) ? "check" : "copy"
                                }), (0, mB.jsx)("span", {
                                  children: nc ? nc.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), RV.map((cB => (0, mB.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${cB.url}${encodeURIComponent(iI(Bc))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, mB.jsx)(tB, {
                                  name: "external-link"
                                }), (0, mB.jsxs)("span", {
                                  children: ["Open in ", cB.name]
                                })]
                              }, cB.name)))]
                            })
                          }

                          function xI(cB) {
                            return `#${[0,1,2].map((Bc=>Math.round(Math.min(255,Math.max(0,cB[Bc]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function dV(cB) {
                            return [parseInt(cB.slice(1, 3), 16), parseInt(cB.slice(3, 5), 16), parseInt(cB.slice(5, 7), 16)]
                          }

                          function AV(cB) {
                            let {
                              label: Bc,
                              min: nc,
                              max: Vc,
                              step: Ic,
                              low: rB,
                              high: uc,
                              onChange: sc
                            } = cB;
                            return (0, mB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, mB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, mB.jsx)("span", {
                                  children: Bc
                                }), (0, mB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: rB === uc ? rB : `${rB}\u2013${uc}`
                                })]
                              }), (0, mB.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, mB.jsx)("input", {
                                  type: "range",
                                  min: nc,
                                  max: Vc,
                                  step: Ic,
                                  value: Math.min(Vc, rB),
                                  "aria-label": `Minimum ${Bc.toLowerCase()}`,
                                  onChange: cB => {
                                    const Bc = Number(cB.target.value);
                                    sc(Bc, Math.max(Bc, uc))
                                  }
                                }), (0, mB.jsx)("input", {
                                  type: "range",
                                  min: nc,
                                  max: Vc,
                                  step: Ic,
                                  value: Math.min(Vc, uc),
                                  "aria-label": `Maximum ${Bc.toLowerCase()}`,
                                  onChange: cB => {
                                    const Bc = Number(cB.target.value);
                                    sc(Math.min(Bc, rB), Bc)
                                  }
                                })]
                              })]
                            })
                          }

                          function GV(cB) {
                            let {
                              label: Bc,
                              min: nc,
                              max: Vc,
                              step: Ic,
                              value: rB,
                              onChange: uc,
                              format: sc = String
                            } = cB;
                            return (0, mB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, mB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, mB.jsx)("span", {
                                  children: Bc
                                }), (0, mB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: sc(rB)
                                })]
                              }), (0, mB.jsx)("input", {
                                type: "range",
                                min: nc,
                                max: Vc,
                                step: Ic,
                                value: Math.min(Vc, Math.max(nc, rB)),
                                "aria-label": Bc,
                                onChange: cB => {
                                  uc(Number(cB.target.value))
                                }
                              })]
                            })
                          }

                          function cr(cB) {
                            let {
                              opts: Bc,
                              onChange: nc
                            } = cB;
                            const Vc = Bc.colorGradients;
                            if (!Jn(Vc)) return (0, mB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, mB.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, mB.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, mB.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Vc.map(((cB, Bc) => (0, mB.jsx)("input", {
                                  type: "color",
                                  value: xI(cB.color),
                                  "aria-label": `Colour ${Bc+1}`,
                                  onChange: cB => {
                                    const Ic = [...Vc];
                                    Ic[Bc] = {
                                      color: dV(cB.target.value)
                                    }, nc(Ic)
                                  }
                                }, Bc)))
                              })]
                            });
                            const Ic = (cB, Bc) => {
                              const Ic = [...Vc];
                              Ic[cB] = Bc, nc(Ic)
                            };
                            return (0, mB.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, mB.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, mB.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, mB.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Vc.map(((cB, Bc) => {
                                var nc;
                                const Vc = null !== (nc = cB.maxColor) && void 0 !== nc ? nc : cB.minColor;
                                return (0, mB.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, mB.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * cB.timeFraction), "%"]
                                  }), (0, mB.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${xI(cB.minColor)}, ${xI(Vc)})`
                                    }
                                  }), (0, mB.jsx)("input", {
                                    type: "color",
                                    value: xI(cB.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*cB.timeFraction)}%`,
                                    onChange: nc => {
                                      Ic(Bc, {
                                        ...cB,
                                        minColor: [...dV(nc.target.value), cB.minColor[3]]
                                      })
                                    }
                                  }), (0, mB.jsx)("input", {
                                    type: "color",
                                    value: xI(Vc),
                                    "aria-label": `Maximum colour at ${Math.round(100*cB.timeFraction)}%`,
                                    onChange: nc => {
                                      Ic(Bc, {
                                        ...cB,
                                        maxColor: [...dV(nc.target.value), Vc[3]]
                                      })
                                    }
                                  })]
                                }, Bc)
                              }))]
                            })
                          }
                          const BI = [-.5, -.5, -.5],
                            nI = [.5, .5, .5],
                            VI = [0, 1, 2, 3, 4, 5, 6, 7].map((cB => [1 & cB ? nI[0] : BI[0], 2 & cB ? nI[1] : BI[1], 4 & cB ? nI[2] : BI[2]]));class II {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(cB, Bc, nc, Vc) {
                              const Ic = Math.round(31 * Bc),
                                rB = Math.round(31 * nc),
                                uc = Math.round(31 * Vc),
                                sc = `${Ic}|${rB}|${uc}`;
                              let Mc = this.tints.get(cB);
                              (!Mc || Mc.size > 2e3) && (Mc = new Map, this.tints.set(cB, Mc));
                              let Pc = Mc.get(sc);
                              if (Pc) return Pc;
                              Pc = document.createElement("canvas"), Pc.width = cB.naturalWidth || 16, Pc.height = cB.naturalHeight || 16;
                              const qB = Pc.getContext("2d");
                              return qB ? (qB.imageSmoothingEnabled = !1, qB.drawImage(cB, 0, 0, Pc.width, Pc.height), qB.globalCompositeOperation = "multiply", qB.fillStyle = `rgb(${Ic/31*255}, ${rB/31*255}, ${uc/31*255})`, qB.fillRect(0, 0, Pc.width, Pc.height), qB.globalCompositeOperation = "destination-in", qB.drawImage(cB, 0, 0, Pc.width, Pc.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Mc.set(sc, Pc), Pc
                            }
                          }

                          function rr(cB) {
                            let {
                              opts: Bc,
                              textureUrl: nc,
                              burst: Ic,
                              paused: rB
                            } = cB;
                            const uc = (0, Vc.useRef)(null),
                              sc = (0, Vc.useRef)(Bc);
                            sc.current = Bc;
                            const Mc = (0, Vc.useRef)(rB);
                            Mc.current = rB;
                            const Pc = (0, Vc.useRef)(null),
                              qB = (0, Vc.useRef)(null),
                              Oc = (0, Vc.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(cB) {
                                let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const nc = [-.5, -.5, -.5],
                                  Vc = [.5, .5, .5];
                                let Ic = .5;
                                for (let rB = 0; rB < 40; rB++) {
                                  const rB = Rn(cB, nc, Vc, Bc),
                                    uc = Math.max(rB.life / 30, .001);
                                  for (; xV(rB, cB.gravity, uc);) Ic = Math.max(Ic, Math.hypot(rB.pos[0], rB.pos[1], rB.pos[2]) + rB.size / 2)
                                }
                                return Ic
                              }(Bc)))), [Bc]),
                              Tc = (0, Vc.useRef)(Oc);
                            return Tc.current = Oc, (0, Vc.useEffect)((() => {
                              if (Pc.current = null, !nc) return;
                              const cB = new Image;
                              let Bc = !1;
                              return cB.onload = () => {
                                Bc || (Pc.current = cB)
                              }, cB.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${nc}`)
                              }, cB.src = nc, () => {
                                Bc = !0
                              }
                            }), [nc]), (0, Vc.useEffect)((() => {
                              var cB;
                              null === (cB = qB.current) || void 0 === cB || cB.call(qB)
                            }), [Bc, Ic]), (0, Vc.useEffect)((() => {
                              const cB = uc.current,
                                Bc = null === cB || void 0 === cB ? void 0 : cB.getContext("2d");
                              if (!cB || !Bc) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const nc = new II;
                              let Vc = [],
                                Ic = 0,
                                rB = -.7,
                                Oc = Tc.current,
                                fc = performance.now(),
                                mB = 0,
                                ec = !0,
                                tB = null;
                              const Sc = () => {
                                const cB = sc.current,
                                  Bc = Math.min(400, Math.max(0, Math.ceil(cB.manualEmitCount)));
                                Vc = [];
                                for (let nc = 0; nc < Bc; nc++) Vc.push(Rn(cB, BI, nI, Math.random));
                                Ic = 0
                              };
                              qB.current = Sc, Sc();
                              const yB = uc => {
                                mB = requestAnimationFrame(yB);
                                const qB = Math.min(.05, (uc - fc) / 1e3);
                                if (fc = uc, !ec) return;
                                const zB = window.devicePixelRatio || 1,
                                  pc = Math.round(cB.clientWidth * zB),
                                  hc = Math.round(cB.clientHeight * zB);
                                if (0 === pc || 0 === hc) return;
                                cB.width === pc && cB.height === hc || (cB.width = pc, cB.height = hc);
                                const aB = sc.current;
                                null === tB && (rB += .18 * qB), Oc += (Tc.current - Oc) * Math.min(1, 4 * qB);
                                const lc = .6 * qB;
                                Vc = Vc.filter((cB => xV(cB, aB.gravity, lc))), 0 !== Vc.length || Mc.current || (Ic += qB, Ic > .6 && Sc());
                                const Yc = function(cB, Bc, nc, Vc) {
                                  const Ic = 3.2 * Vc,
                                    rB = .44 * Math.min(cB, Bc) * Ic / Vc,
                                    uc = Math.cos(nc),
                                    sc = Math.sin(nc),
                                    Mc = Math.cos(.42),
                                    Pc = Math.sin(.42);
                                  return (nc, Vc, qB) => {
                                    const Oc = nc * sc + qB * uc,
                                      Tc = Ic - (Vc * Pc + Oc * Mc);
                                    if (Tc < .05) return null;
                                    const fc = rB / Tc;
                                    return {
                                      x: cB / 2 + (nc * uc - qB * sc) * fc,
                                      y: Bc / 2 - (Vc * Mc - Oc * Pc) * fc,
                                      scale: fc,
                                      depth: Tc
                                    }
                                  }
                                }(pc, hc, rB, Oc);
                                ! function(cB, Bc, nc, Vc, Ic) {
                                  const rB = cB.createLinearGradient(0, 0, 0, nc);
                                  rB.addColorStop(0, "#23262d"), rB.addColorStop(1, "#16181c"), cB.globalCompositeOperation = "source-over", cB.globalAlpha = 1, cB.fillStyle = rB, cB.fillRect(0, 0, Bc, nc);
                                  const uc = (Bc, nc) => {
                                      const Ic = Vc(Bc[0], Bc[1], Bc[2]),
                                        rB = Vc(nc[0], nc[1], nc[2]);
                                      Ic && rB && (cB.beginPath(), cB.moveTo(Ic.x, Ic.y), cB.lineTo(rB.x, rB.y), cB.stroke())
                                    },
                                    sc = Math.ceil(Ic) + 1,
                                    Mc = BI[1];
                                  cB.lineWidth = 1, cB.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Pc = -sc; Pc <= sc; Pc++) uc([Pc + .5, Mc, .5 - sc], [Pc + .5, Mc, sc + .5]), uc([.5 - sc, Mc, Pc + .5], [sc + .5, Mc, Pc + .5]);
                                  cB.strokeStyle = "rgba(255, 255, 255, 0.28)", cB.setLineDash([4, 4]);
                                  for (const Pc of VI)
                                    for (const cB of VI) {
                                      const Bc = [0, 1, 2].filter((Bc => Pc[Bc] !== cB[Bc]));
                                      1 === Bc.length && Pc[Bc[0]] < cB[Bc[0]] && uc(Pc, cB)
                                    }
                                  cB.setLineDash([])
                                }(Bc, pc, hc, Yc, Oc);
                                const Lc = Pc.current,
                                  gB = Vc.map((cB => ({
                                    particle: cB,
                                    at: Yc(cB.pos[0], cB.pos[1], cB.pos[2])
                                  }))).filter((cB => null !== cB.at)).sort(((cB, Bc) => Bc.at.depth - cB.at.depth));
                                Bc.imageSmoothingEnabled = !1;
                                for (const cB of function(cB) {
                                    switch (cB) {
                                      case wn.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case wn.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case wn.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case wn.f.MultiplyAdd:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }, {
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      default:
                                        return [{
                                          operation: "source-over",
                                          usesAlpha: !0
                                        }]
                                    }
                                  }(aB.blendMode)) {
                                  Bc.globalCompositeOperation = cB.operation;
                                  for (const {
                                      particle: Vc,
                                      at: Ic
                                    }
                                    of gB) {
                                    const [rB, uc, sc, Mc] = Kn(Vc), Pc = Math.max(1, Vc.size * Ic.scale);
                                    Bc.globalAlpha = cB.usesAlpha ? Math.min(1, Math.max(0, Mc)) : 1, Lc ? Bc.drawImage(nc.get(Lc, rB, uc, sc), Ic.x - Pc / 2, Ic.y - Pc / 2, Pc, Pc) : (Bc.fillStyle = `rgb(${255*rB}, ${255*uc}, ${255*sc})`, Bc.fillRect(Ic.x - Pc / 2, Ic.y - Pc / 2, Pc, Pc))
                                  }
                                }
                                Bc.globalCompositeOperation = "source-over", Bc.globalAlpha = 1
                              };
                              mB = requestAnimationFrame(yB);
                              const zB = new IntersectionObserver((cB => {
                                let [Bc] = cB;
                                ec = Bc.isIntersecting
                              }));
                              zB.observe(cB);
                              const pc = Bc => {
                                  tB = Bc.clientX, cB.setPointerCapture(Bc.pointerId)
                                },
                                hc = cB => {
                                  null !== tB && (rB += .01 * (cB.clientX - tB), tB = cB.clientX)
                                },
                                aB = () => {
                                  tB = null
                                };
                              return cB.addEventListener("pointerdown", pc), cB.addEventListener("pointermove", hc), cB.addEventListener("pointerup", aB), cB.addEventListener("pointercancel", aB), () => {
                                cancelAnimationFrame(mB), zB.disconnect(), qB.current = null, cB.removeEventListener("pointerdown", pc), cB.removeEventListener("pointermove", hc), cB.removeEventListener("pointerup", aB), cB.removeEventListener("pointercancel", aB)
                              }
                            }), []), (0, mB.jsx)("canvas", {
                              ref: uc,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${Bc.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const uI = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            sI = [{
                              mode: wn.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: wn.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: wn.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: wn.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: wn.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            MI = (0, Vc.forwardRef)((function(cB, Bc) {
                              var nc, Ic;
                              let {
                                textures: uc
                              } = cB;
                              const sc = pV(),
                                Mc = (0, Vc.useRef)(null),
                                [Pc, qB] = (0, Vc.useState)(Xn),
                                [Oc, Tc] = (0, Vc.useState)("example"),
                                [fc, ec] = (0, Vc.useState)(0),
                                [Sc, yB] = (0, Vc.useState)(!1),
                                pc = cB => {
                                  const Bc = "example" === cB ? Xn : kV(cB);
                                  Bc && (qB(Bc), Tc(cB))
                                };
                              (0, Vc.useImperativeHandle)(Bc, (() => ({
                                preview: cB => {
                                  var Bc;
                                  pc(cB), null === (Bc = Mc.current) || void 0 === Bc || Bc.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const hc = cB => {
                                  qB({
                                    ...Pc,
                                    ...cB
                                  }), Tc(null)
                                },
                                aB = function(cB, Bc) {
                                  if (null !== Bc) return `${cI}    presetId: "${Bc}",\n${BV}\n})`;
                                  const nc = cB.velocityGradients.map((cB => `        {\n            timeFraction: ${dn(cB.timeFraction)},\n            factor: ${dn(cB.factor)},\n            factor2: ${dn(cB.factor2)},\n        },`)),
                                    Vc = [`    dir1: ${An(cB.dir1)},`, `    dir2: ${An(cB.dir2)},`, BV, `    texture: "${cB.texture}",`, `    minLifeTime: ${dn(cB.minLifeTime)},`, `    maxLifeTime: ${dn(cB.maxLifeTime)},`, `    minEmitPower: ${dn(cB.minEmitPower)},`, `    maxEmitPower: ${dn(cB.maxEmitPower)},`, `    minSize: ${dn(cB.minSize)},`, `    maxSize: ${dn(cB.maxSize)},`, `    manualEmitCount: ${dn(cB.manualEmitCount)},`, `    gravity: ${An(cB.gravity)},`, `    colorGradients: ${Gn(cB.colorGradients,"    ")},`, `    velocityGradients: ${nc.length>0?`[\n${nc.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${dn(cB.blendMode)},`];
                                  return void 0 !== cB.hideDist && Vc.push(`    hideDist: ${dn(cB.hideDist)},`), `${cI}${Vc.join("\n")}\n})`
                                }(Pc, null === Oc || "example" === Oc ? null : Oc),
                                Yc = uc.includes(Pc.texture) ? uc : [...uc, Pc.texture];
                              return (0, mB.jsxs)("section", {
                                ref: Mc,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, mB.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, mB.jsxs)("div", {
                                    children: [(0, mB.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, mB.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, mB.jsx)(zB, {
                                    text: aB,
                                    label: "Copy code"
                                  })]
                                }), (0, mB.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, mB.jsx)("button", {
                                    type: "button",
                                    className: rB()("DocsVariantChip", {
                                      Active: "example" === Oc
                                    }),
                                    onClick: () => {
                                      pc("example")
                                    },
                                    children: "Example"
                                  }), uI.filter((cB => null !== kV(cB))).map((cB => (0, mB.jsx)("button", {
                                    type: "button",
                                    className: rB()("DocsVariantChip", {
                                      Active: Oc === cB
                                    }),
                                    onClick: () => {
                                      pc(cB)
                                    },
                                    children: cB
                                  }, cB))), (0, mB.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Oc && void 0 !== Oc ? Oc : "custom",
                                    "aria-label": "Preset",
                                    onChange: cB => {
                                      pc(cB.target.value)
                                    },
                                    children: [(0, mB.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Oc && (0, mB.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), Wn.b.map((cB => (0, mB.jsx)("option", {
                                      value: cB,
                                      children: cB
                                    }, cB)))]
                                  })]
                                }), (0, mB.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, mB.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, mB.jsx)(rr, {
                                      opts: Pc,
                                      textureUrl: null !== (nc = null === sc || void 0 === sc ? void 0 : sc.getParticleTextureUrl(Pc.texture)) && void 0 !== nc ? nc : null,
                                      burst: fc,
                                      paused: Sc
                                    }), (0, mB.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, mB.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          ec(fc + 1)
                                        },
                                        children: [(0, mB.jsx)(tB, {
                                          name: "replay"
                                        }), (0, mB.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, mB.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": Sc,
                                        onClick: () => {
                                          yB(!Sc)
                                        },
                                        children: [(0, mB.jsx)(tB, {
                                          name: Sc ? "play" : "pause"
                                        }), (0, mB.jsx)("span", {
                                          children: Sc ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, mB.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, mB.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, mB.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, mB.jsx)("span", {
                                          children: "Texture"
                                        }), (0, mB.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Pc.texture
                                        })]
                                      }), (0, mB.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: Yc.map((cB => {
                                          var Bc;
                                          const nc = null !== (Bc = null === sc || void 0 === sc ? void 0 : sc.getParticleTextureUrl(cB)) && void 0 !== Bc ? Bc : null;
                                          return (0, mB.jsx)("button", {
                                            type: "button",
                                            className: rB()("DocsParticleTexture", {
                                              Active: Pc.texture === cB
                                            }),
                                            title: cB,
                                            "aria-label": cB,
                                            "aria-pressed": Pc.texture === cB,
                                            onClick: () => {
                                              hc({
                                                texture: cB
                                              })
                                            },
                                            children: nc ? (0, mB.jsx)("img", {
                                              src: nc,
                                              alt: ""
                                            }) : (0, mB.jsx)(tB, {
                                              name: "image"
                                            })
                                          }, cB)
                                        }))
                                      })]
                                    }), (0, mB.jsx)(GV, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Pc.manualEmitCount,
                                      onChange: cB => {
                                        hc({
                                          manualEmitCount: cB
                                        })
                                      }
                                    }), (0, mB.jsx)(AV, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Pc.minLifeTime,
                                      high: Pc.maxLifeTime,
                                      onChange: (cB, Bc) => {
                                        hc({
                                          minLifeTime: cB,
                                          maxLifeTime: Bc
                                        })
                                      }
                                    }), (0, mB.jsx)(AV, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Pc.minEmitPower,
                                      high: Pc.maxEmitPower,
                                      onChange: (cB, Bc) => {
                                        hc({
                                          minEmitPower: cB,
                                          maxEmitPower: Bc
                                        })
                                      }
                                    }), (0, mB.jsx)(AV, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Pc.minSize,
                                      high: Pc.maxSize,
                                      onChange: (cB, Bc) => {
                                        hc({
                                          minSize: cB,
                                          maxSize: Bc
                                        })
                                      }
                                    }), (0, mB.jsx)(GV, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Ic = Pc.gravity[1]) && void 0 !== Ic ? Ic : 0,
                                      onChange: cB => {
                                        var Bc, nc;
                                        hc({
                                          gravity: [null !== (Bc = Pc.gravity[0]) && void 0 !== Bc ? Bc : 0, cB, null !== (nc = Pc.gravity[2]) && void 0 !== nc ? nc : 0]
                                        })
                                      }
                                    }), (0, mB.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, mB.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, mB.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, mB.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Pc.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: cB => {
                                          hc({
                                            blendMode: Number(cB.target.value)
                                          })
                                        },
                                        children: sI.map((cB => {
                                          let {
                                            mode: Bc,
                                            label: nc
                                          } = cB;
                                          return (0, mB.jsx)("option", {
                                            value: Bc,
                                            children: nc
                                          }, Bc)
                                        }))
                                      })]
                                    }), (0, mB.jsx)(cr, {
                                      opts: Pc,
                                      onChange: cB => {
                                        hc({
                                          colorGradients: cB
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, mB.jsx)(lc, {
                                  code: aB,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var PI = nc(3594),
                            qr = nc(1536);

                          function OI(cB, Bc) {
                            return cB ? PI.b.includes(Bc) ? cB.getIngameIconUrl(Bc) : cB.getItemIconUrl(Bc) : null
                          }

                          function TI(cB) {
                            var Bc, nc, Vc;
                            let {
                              part: Ic,
                              assets: uc
                            } = cB;
                            const sc = OI(uc, Ic.icon),
                              Mc = null !== (Bc = null === (nc = Ic.style) || void 0 === nc ? void 0 : nc.fontSize) && void 0 !== Bc ? Bc : "1.8em",
                              Pc = (0, oB.Sb)(Ic.style);
                            return (0, mB.jsxs)("span", {
                              className: rB()("DocsBloxdTextIcon", {
                                Missing: !sc
                              }),
                              style: {
                                width: Mc,
                                height: Mc,
                                opacity: null === (Vc = Ic.style) || void 0 === Vc ? void 0 : Vc.opacity
                              },
                              title: sc ? void 0 : `No Bloxd icon, item or block is called "${Ic.icon}"`,
                              children: [sc && Pc && (0, mB.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Pc,
                                  maskImage: `url("${sc}")`,
                                  WebkitMaskImage: `url("${sc}")`
                                }
                              }), sc ? (0, mB.jsx)("img", {
                                src: sc,
                                alt: "",
                                className: rB()({
                                  Tinted: Pc
                                })
                              }) : (0, mB.jsx)(tB, {
                                name: "image"
                              })]
                            })
                          }

                          function fI(cB) {
                            let {
                              parts: Bc,
                              className: nc
                            } = cB;
                            const Vc = pV(),
                              Ic = [];
                            let uc = [];
                            const sc = cB => {
                              uc.length > 0 && (Ic.push((0, mB.jsx)(qr.e, {
                                text: uc
                              }, `run-${cB}`)), uc = [])
                            };
                            return Bc.forEach(((cB, Bc) => {
                              "icon" !== HB(cB) || wB(cB.icon) ? uc.push(cB) : (sc(Bc), Ic.push((0, mB.jsx)(TI, {
                                part: cB,
                                assets: Vc
                              }, `icon-${Bc}`)))
                            })), sc(Bc.length), (0, mB.jsx)("div", {
                              className: rB()("DocsStyledTextPreview", nc),
                              children: Ic
                            })
                          }
                          const mr = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let eI = null;

                          function tr(cB) {
                            if (eI ??= document.createElement("canvas").getContext("2d"), !eI) return "#000000";
                            eI.fillStyle = "#000000", eI.fillStyle = cB;
                            const Bc = eI.fillStyle;
                            return Bc.startsWith("#") ? Bc : "#000000"
                          }

                          function SI(cB) {
                            let {
                              value: Bc,
                              label: nc,
                              onChange: Vc
                            } = cB;
                            return (0, mB.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, mB.jsx)("input", {
                                type: "color",
                                value: tr(Bc),
                                "aria-label": `${nc} picker`,
                                onChange: cB => {
                                  Vc(cB.target.value)
                                }
                              }), (0, mB.jsx)("input", {
                                type: "text",
                                value: Bc,
                                placeholder: "#ffb914 or gold",
                                "aria-label": nc,
                                spellCheck: !1,
                                onChange: cB => {
                                  Vc(cB.target.value)
                                }
                              })]
                            })
                          }

                          function yr(cB) {
                            let {
                              value: Bc,
                              fontAwesomeIcons: nc,
                              onChange: Ic
                            } = cB;
                            const uc = pV(),
                              [sc, Mc] = (0, Vc.useState)(wB(Bc) ? "fontAwesome" : "bloxd"),
                              [Pc, qB] = (0, Vc.useState)(""),
                              Oc = Pc.trim().toLowerCase(),
                              Tc = "bloxd" === sc ? PI.b : nc,
                              fc = Oc ? Tc.filter((cB => cB.toLowerCase().includes(Oc))) : Tc;
                            return (0, mB.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, mB.jsx)("input", {
                                type: "text",
                                value: Bc,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: cB => {
                                  Ic(cB.target.value)
                                }
                              }), (0, mB.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, mB.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((cB => (0, mB.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": sc === cB,
                                    className: rB()("DocsVariantChip", {
                                      Active: sc === cB
                                    }),
                                    onClick: () => {
                                      Mc(cB)
                                    },
                                    children: "bloxd" === cB ? `Bloxd icons (${PI.b.length})` : `Font Awesome (${nc.length})`
                                  }, cB))), (0, mB.jsx)("input", {
                                    type: "search",
                                    value: Pc,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: cB => {
                                      qB(cB.target.value)
                                    }
                                  })
                                ]
                              }), (0, mB.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [fc.map((cB => {
                                  const nc = "bloxd" === sc ? OI(uc, cB) : null;
                                  return (0, mB.jsx)("button", {
                                    type: "button",
                                    title: cB,
                                    "aria-label": cB,
                                    "aria-pressed": cB === Bc,
                                    className: rB()("DocsIconPickerOption", {
                                      Active: cB === Bc
                                    }),
                                    onClick: () => {
                                      Ic(cB)
                                    },
                                    children: "fontAwesome" === sc ? (0, mB.jsx)(hn.e, {
                                      name: cB
                                    }) : nc ? (0, mB.jsx)("img", {
                                      src: nc,
                                      alt: ""
                                    }) : (0, mB.jsx)(tB, {
                                      name: "image"
                                    })
                                  }, cB)
                                })), 0 === fc.length && (0, mB.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Pc, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function zr(cB) {
                            let {
                              property: Bc,
                              value: nc,
                              fontAwesomeIcons: Vc,
                              onChange: Ic
                            } = cB;
                            const {
                              field: rB,
                              label: uc
                            } = Bc, sc = cB => "" !== cB || Bc.isRequired ? cB : void 0;
                            switch (rB.kind) {
                              case "text":
                                return rB.multiline ? (0, mB.jsx)("textarea", {
                                  value: String(null !== nc && void 0 !== nc ? nc : ""),
                                  rows: 2,
                                  "aria-label": uc,
                                  onChange: cB => {
                                    Ic(cB.target.value)
                                  }
                                }) : (0, mB.jsx)("input", {
                                  type: "text",
                                  value: String(null !== nc && void 0 !== nc ? nc : ""),
                                  "aria-label": uc,
                                  onChange: cB => {
                                    Ic(sc(cB.target.value))
                                  }
                                });
                              case "size":
                                return (0, mB.jsx)("input", {
                                  type: "text",
                                  value: String(null !== nc && void 0 !== nc ? nc : ""),
                                  placeholder: Bc.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": uc,
                                  spellCheck: !1,
                                  onChange: cB => {
                                    Ic(sc(cB.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, mB.jsx)(SI, {
                                  value: String(null !== nc && void 0 !== nc ? nc : ""),
                                  label: uc,
                                  onChange: cB => {
                                    Ic(sc(cB))
                                  }
                                });
                              case "colours": {
                                const cB = Array.isArray(nc) ? nc : [],
                                  Bc = cB => {
                                    Ic(cB.length > 0 ? cB : void 0)
                                  };
                                return (0, mB.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [cB.map(((nc, Vc) => (0, mB.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, mB.jsx)(SI, {
                                      value: nc,
                                      label: `${uc} ${Vc+1}`,
                                      onChange: nc => {
                                        Bc(cB.map(((cB, Bc) => Bc === Vc ? nc : cB)))
                                      }
                                    }), (0, mB.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Vc+1}`,
                                      onClick: () => {
                                        Bc(cB.filter(((cB, Bc) => Bc !== Vc)))
                                      },
                                      children: (0, mB.jsx)(tB, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Vc))), (0, mB.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var nc;
                                      Bc([...cB, null !== (nc = cB.at(-1)) && void 0 !== nc ? nc : "#ffffff"])
                                    },
                                    children: [(0, mB.jsx)(tB, {
                                      name: "plus"
                                    }), 0 === cB.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Mc;
                                const cB = "number" === typeof nc ? nc : Number(null !== (Mc = Bc.defaultText) && void 0 !== Mc ? Mc : 0);
                                return (0, mB.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, mB.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: cB,
                                    "aria-label": uc,
                                    onChange: cB => {
                                      Ic(Number(cB.target.value))
                                    }
                                  }), (0, mB.jsx)("output", {
                                    children: cB.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, mB.jsxs)("select", {
                                  value: String(null !== nc && void 0 !== nc ? nc : ""),
                                  "aria-label": uc,
                                  onChange: cB => {
                                    Ic(sc(cB.target.value))
                                  },
                                  children: [!Bc.isRequired && (0, mB.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", Bc.defaultText, ")"]
                                  }), rB.options.map((cB => (0, mB.jsx)("option", {
                                    value: cB,
                                    children: cB
                                  }, cB)))]
                                });
                              case "icon":
                                return (0, mB.jsx)(yr, {
                                  value: String(null !== nc && void 0 !== nc ? nc : ""),
                                  fontAwesomeIcons: Vc,
                                  onChange: Ic
                                })
                            }
                          }

                          function pI(cB) {
                            let Bc;
                            try {
                              Bc = JSON.parse(cB)
                            } catch (nc) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${nc.message}`
                              }
                            }
                            return Vn(Bc) ? {
                              part: Bc,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function hI(cB) {
                            let {
                              parts: Bc,
                              index: nc,
                              fontAwesomeIcons: Ic,
                              onChange: rB,
                              YBc: uc,
                              onClose: sc
                            } = cB;
                            const Mc = (0, Vc.useContext)(mn),
                              qB = (0, Vc.useRef)(null),
                              Oc = Bc[nc],
                              Tc = HB(Oc),
                              [fc, ec] = (0, Vc.useState)((() => JSON.stringify(Oc, null, 2))),
                              Sc = (0, Vc.useMemo)((() => "other" === Tc ? pI(fc).error : null), [Tc, fc]);
                            (0, Vc.useEffect)((() => {
                              var cB;
                              null === (cB = qB.current) || void 0 === cB || cB.focus()
                            }), []);
                            const yB = (0, mB.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: cB => {
                                cB.target === cB.currentTarget && sc()
                              },
                              children: (0, mB.jsxs)("div", {
                                ref: qB,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${nc+1}: ${kn[Tc]}`,
                                tabIndex: -1,
                                onKeyDown: cB => {
                                  "Escape" === cB.key ? (cB.stopPropagation(), sc()) : "Tab" === cB.key && qB.current && function(cB, Bc) {
                                    const nc = Array.from(cB.querySelectorAll(bn)),
                                      Vc = nc[0],
                                      Ic = nc.at(-1);
                                    if (!Vc || !Ic) return;
                                    const rB = document.activeElement;
                                    !Bc.shiftKey || rB !== Vc && rB !== cB ? Bc.shiftKey || rB !== Ic || (Bc.preventDefault(), Vc.focus()) : (Bc.preventDefault(), Ic.focus())
                                  }(qB.current, cB)
                                },
                                children: [(0, mB.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, mB.jsxs)("div", {
                                    children: [(0, mB.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", nc + 1]
                                    }), (0, mB.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: kn[Tc]
                                    })]
                                  }), (0, mB.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: sc,
                                    children: (0, mB.jsx)(tB, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, mB.jsx)(fI, {
                                  parts: Bc,
                                  className: "DocsTextDialogPreview"
                                }), (0, mB.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Tc ? (0, mB.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, mB.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, mB.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: fc,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: cB => {
                                        ec(cB.target.value);
                                        const Bc = pI(cB.target.value);
                                        null !== Bc.part && rB(Bc.part)
                                      }
                                    }), Sc && (0, mB.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: Sc
                                    })]
                                  }) : JB[Tc].map((cB => {
                                    const Bc = RB(Oc, cB.path),
                                      nc = cB.isRequired ? JSON.stringify(xn(Oc, cB.path)) === JSON.stringify(Oc) : void 0 === Bc;
                                    return (0, mB.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, mB.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, mB.jsx)("span", {
                                          children: cB.label
                                        }), (0, mB.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: nc,
                                          "aria-label": `Reset ${cB.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            rB(xn(Oc, cB.path))
                                          },
                                          children: [(0, mB.jsx)(tB, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, mB.jsx)(zr, {
                                        property: cB,
                                        value: Bc,
                                        fontAwesomeIcons: Ic,
                                        onChange: Bc => {
                                          rB(KB(Oc, cB.path, Bc))
                                        }
                                      }), !cB.isRequired && (0, mB.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", cB.defaultText]
                                      })]
                                    }, cB.path.join("."))
                                  }))
                                }), (0, mB.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, mB.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: uc,
                                    children: [(0, mB.jsx)(tB, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, mB.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: sc,
                                    children: "Done"
                                  })]
                                }), (0, mB.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: mr.map((cB => (0, mB.jsx)("option", {
                                    value: cB
                                  }, cB)))
                                })]
                              })
                            });
                            return Mc ? (0, Pc.createPortal)(yB, Mc) : yB
                          }
                          const ar = [{
                              label: "Icon and text",
                              parts: [{
                                icon: "Pixelated Heart"
                              }, " You gained a life!"]
                            }, {
                              label: "Coloured words",
                              parts: ["Welcome to ", {
                                str: "Sky Castle",
                                style: {
                                  color: "#ffb914",
                                  fontWeight: "bold"
                                }
                              }, ", adventurer!"]
                            }, {
                              label: "Achievement",
                              parts: [{
                                icon: "fa-solid fa-trophy",
                                style: {
                                  color: "gold"
                                }
                              }, {
                                str: " Achievement unlocked: ",
                                style: {
                                  opacity: .8
                                }
                              }, {
                                str: "Master Builder",
                                style: {
                                  color: "#4f94f1",
                                  fontStyle: "italic"
                                }
                              }]
                            }, {
                              label: "Loading bar",
                              parts: ["Charging ", {
                                type: "ProgressBar",
                                progress: .65,
                                colours: ["#4f94f1", "#9be15d"]
                              }, " Press ", {
                                type: "StyledKeyBinding",
                                action: "jump"
                              }]
                            }],
                            lI = Object.keys(XB);

                          function YI(cB) {
                            let {
                              fontAwesomeIcons: Bc
                            } = cB;
                            const [nc, Ic] = (0, Vc.useState)(ar[0].parts), [uc, sc] = (0, Vc.useState)((() => cV(ar[0].parts))), [Mc, Pc] = (0, Vc.useState)(null), [qB, Oc] = (0, Vc.useState)(!1), [Tc, fc] = (0, Vc.useState)(null), [ec, Sc] = (0, Vc.useState)(!1), [yB, zB] = (0, Vc.useState)(null), pc = (0, Vc.useRef)(null), hc = cV(nc);
                            (0, Vc.useLayoutEffect)((() => {
                              var cB;
                              if (!yB) return;
                              const Bc = cB => {
                                  var Bc;
                                  return null === (Bc = pc.current) || void 0 === Bc ? void 0 : Bc.querySelector(`[data-focus-key="${cB}"]`)
                                },
                                nc = Bc(yB.key);
                              null === (cB = nc && !nc.disabled ? nc : Bc(yB.fallback)) || void 0 === cB || cB.focus(), zB(null)
                            }), [yB]);
                            const aB = cB => {
                                Ic(cB), sc(cV(cB)), Pc(null)
                              },
                              Yc = cB => {
                                aB(nc.filter(((Bc, nc) => nc !== cB))), zB({
                                  key: `edit-${Math.min(cB,nc.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              Lc = (cB, Bc) => {
                                const Vc = [...nc],
                                  [Ic] = Vc.splice(cB, 1);
                                Vc.splice(cB + Bc, 0, Ic), aB(Vc);
                                zB({
                                  key: `${Bc<0?"up":"down"}-${cB+Bc}`,
                                  fallback: `edit-${cB+Bc}`
                                })
                              };
                            return (0, mB.jsxs)("section", {
                              ref: pc,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, mB.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, mB.jsxs)("div", {
                                  children: [(0, mB.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, mB.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, mB.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: ar.map((cB => (0, mB.jsx)("button", {
                                  type: "button",
                                  className: rB()("DocsVariantChip", {
                                    Active: hc === cV(cB.parts)
                                  }),
                                  onClick: () => {
                                    aB(cB.parts)
                                  },
                                  children: cB.label
                                }, cB.label)))
                              }), (0, mB.jsx)(fI, {
                                parts: nc,
                                className: "DocsTextEditorPreview"
                              }), (0, mB.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, mB.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, mB.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, mB.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [nc.map(((cB, Bc) => {
                                      const Vc = HB(cB);
                                      return (0, mB.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, mB.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${Bc}`,
                                          "aria-label": `Edit part ${Bc+1}, ${kn[Vc]}`,
                                          onClick: () => {
                                            fc(Bc)
                                          },
                                          children: [(0, mB.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: kn[Vc]
                                          }), (0, mB.jsx)(fI, {
                                            parts: [cB],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Vc && (0, mB.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: dB(cB)
                                          })]
                                        }), (0, mB.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, mB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Bc+1} up`,
                                            "data-focus-key": `up-${Bc}`,
                                            disabled: 0 === Bc,
                                            onClick: () => {
                                              Lc(Bc, -1)
                                            },
                                            children: (0, mB.jsx)(tB, {
                                              name: "chevron-up"
                                            })
                                          }), (0, mB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Bc+1} down`,
                                            "data-focus-key": `down-${Bc}`,
                                            disabled: Bc === nc.length - 1,
                                            onClick: () => {
                                              Lc(Bc, 1)
                                            },
                                            children: (0, mB.jsx)(tB, {
                                              name: "chevron-down"
                                            })
                                          }), (0, mB.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${Bc+1}`,
                                            onClick: () => {
                                              Yc(Bc)
                                            },
                                            children: (0, mB.jsx)(tB, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, Bc)
                                    })), 0 === nc.length && (0, mB.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, mB.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: cB => {
                                      "Escape" === cB.key && ec && (cB.stopPropagation(), Sc(!1), zB({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, mB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": ec,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        Sc(!ec)
                                      },
                                      children: [(0, mB.jsx)(tB, {
                                        name: "plus"
                                      }), "Add a part", (0, mB.jsx)(tB, {
                                        name: ec ? "chevron-up" : "chevron-down"
                                      })]
                                    }), ec && (0, mB.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: lI.map((cB => (0, mB.jsx)("li", {
                                        children: (0, mB.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (cB => {
                                              aB([...nc, XB[cB]]), Sc(!1), fc(nc.length)
                                            })(cB)
                                          },
                                          children: kn[cB]
                                        })
                                      }, cB)))
                                    })]
                                  })]
                                }), (0, mB.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, mB.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, mB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": qB,
                                      onClick: () => {
                                        Oc(!qB)
                                      },
                                      children: [(0, mB.jsx)(tB, {
                                        name: qB ? "check" : "pencil"
                                      }), qB ? "Done" : "Edit"]
                                    })]
                                  }), qB ? (0, mB.jsxs)(mB.Fragment, {
                                    children: [(0, mB.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: uc,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: cB => {
                                        sc(cB.target.value);
                                        const Bc = In(cB.target.value);
                                        Pc(Bc.error), Bc.parts && Ic(Bc.parts)
                                      }
                                    }), Mc && (0, mB.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Mc
                                    })]
                                  }) : (0, mB.jsx)(lc, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${hc})`
                                  })]
                                })]
                              }), null !== Tc && Tc < nc.length && (0, mB.jsx)(hI, {
                                parts: nc,
                                index: Tc,
                                fontAwesomeIcons: Bc,
                                onChange: cB => {
                                  ((cB, Bc) => {
                                    aB(nc.map(((nc, Vc) => Vc === cB ? Bc : nc)))
                                  })(Tc, cB)
                                },
                                YBc: () => {
                                  Yc(Tc), fc(null)
                                },
                                onClose: () => {
                                  fc(null), zB({
                                    key: `edit-${Tc}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var LI = nc(3893),
                            gr = nc(3876),
                            UI = nc(3885),
                            br = nc(3900);
                          const ZI = 40,
                            QI = 800,
                            CI = 150,
                            vr = 8e3,
                            DI = 2e3;

                          function NI(cB, Bc) {
                            return 12 * Math.log2(Bc / cB)
                          }

                          function EI(cB, Bc) {
                            return Math.round(cB * 2 ** (Bc / 12) * 10) / 10
                          }

                          function oI(cB) {
                            return `${cB} ms`
                          }

                          function WI(cB) {
                            return `${cB} st`
                          }
                          const wI = [{
                            key: "variationSemitones",
                            label: "Word variation",
                            max: 6
                          }, {
                            key: "declineSemitones",
                            label: "Fall over a sentence",
                            max: 12
                          }, {
                            key: "questionRiseSemitones",
                            label: "Question rise",
                            max: 12
                          }, {
                            key: "exclaimLiftSemitones",
                            label: "Exclamation lift",
                            max: 12
                          }];

                          function kr(cB) {
                            let {
                              synth: Bc,
                              onChange: nc
                            } = cB;
                            const Vc = (0, LI.k)(Bc);
                            return (0, mB.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, mB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, mB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, mB.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, mB.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, mB.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, mB.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: LI.f.map((cB => (0, mB.jsx)("button", {
                                      type: "button",
                                      className: rB()("DocsVariantChip", {
                                        Active: Bc.waveform === cB
                                      }),
                                      "aria-pressed": Bc.waveform === cB,
                                      onClick: () => {
                                        nc({
                                          waveform: cB
                                        })
                                      },
                                      children: cB
                                    }, cB)))
                                  })]
                                }), (0, mB.jsx)(GV, {
                                  label: "Pitch",
                                  min: 0,
                                  max: NI(ZI, QI),
                                  step: .1,
                                  value: NI(ZI, Bc.pitchHz),
                                  format: () => `${Bc.pitchHz} Hz`,
                                  onChange: cB => {
                                    nc({
                                      pitchHz: EI(ZI, cB)
                                    })
                                  }
                                }), (0, mB.jsx)(GV, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: Bc.syllableMs,
                                  format: oI,
                                  onChange: cB => {
                                    nc({
                                      syllableMs: cB
                                    })
                                  }
                                }), (0, mB.jsx)(GV, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: Bc.volume,
                                  onChange: cB => {
                                    nc({
                                      volume: cB
                                    })
                                  }
                                })]
                              }), (0, mB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, mB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, mB.jsx)(GV, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: Bc.durationMs,
                                  format: oI,
                                  onChange: cB => {
                                    nc({
                                      durationMs: cB
                                    })
                                  }
                                }), (0, mB.jsx)(GV, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Vc.durationMs,
                                  step: 1,
                                  value: Vc.attackMs,
                                  format: oI,
                                  onChange: cB => {
                                    nc({
                                      attackMs: cB
                                    })
                                  }
                                }), (0, mB.jsx)(GV, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Vc.durationMs - Vc.attackMs,
                                  step: 1,
                                  value: Vc.releaseMs,
                                  format: oI,
                                  onChange: cB => {
                                    nc({
                                      releaseMs: cB
                                    })
                                  }
                                }), (0, mB.jsx)(GV, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: Bc.glideSemitones,
                                  format: WI,
                                  onChange: cB => {
                                    nc({
                                      glideSemitones: cB
                                    })
                                  }
                                }), (0, mB.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, mB.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== Bc.lowpassHz,
                                    onChange: cB => {
                                      nc({
                                        lowpassHz: cB.target.checked ? DI : null
                                      })
                                    }
                                  }), (0, mB.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== Bc.lowpassHz && (0, mB.jsx)(GV, {
                                  label: "Filter",
                                  min: 0,
                                  max: NI(CI, vr),
                                  step: .1,
                                  value: NI(CI, Bc.lowpassHz),
                                  format: () => `${Bc.lowpassHz} Hz`,
                                  onChange: cB => {
                                    nc({
                                      lowpassHz: EI(CI, cB)
                                    })
                                  }
                                })]
                              }), (0, mB.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, mB.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), wI.map((cB => {
                                  let {
                                    key: Vc,
                                    label: Ic,
                                    max: rB
                                  } = cB;
                                  return (0, mB.jsx)(GV, {
                                    label: Ic,
                                    min: 0,
                                    max: rB,
                                    step: .1,
                                    value: Bc.intonation[Vc],
                                    format: WI,
                                    onChange: cB => {
                                      nc({
                                        intonation: {
                                          ...Bc.intonation,
                                          [Vc]: cB
                                        }
                                      })
                                    }
                                  }, Vc)
                                }))]
                              })]
                            })
                          }
                          const XI = Object.keys(LI.j),
                            HI = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function FI(cB) {
                            var Bc;
                            const nc = JSON.stringify((0, LI.k)(cB));
                            return null !== (Bc = XI.find((cB => JSON.stringify((0, LI.k)(LI.j[cB])) === nc))) && void 0 !== Bc ? Bc : null
                          }

                          function JI(cB) {
                            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof cB || null === cB) return JSON.stringify(cB);
                            return `{\n${Object.entries(cB).map((cB=>{let[nc,Vc]=cB;return`${Bc}    ${nc}: ${JI(Vc,`${Bc}    `)},`})).join("\n")}\n${Bc}}`
                          }

                          function jr(cB, Bc, nc) {
                            const Vc = FI(cB),
                              Ic = [`    line: ${JSON.stringify(Bc)},`];
                            return nc && Ic.push(`    speakerName: ${JSON.stringify(nc)},`), Ic.push("    voice,"), `const voice = ${Vc?JSON.stringify(Vc):JI((0,LI.k)(cB))}\n\napi.setClientOption(playerId, "dialogue", {\n${Ic.join("\n")}\n})`
                          }
                          const RI = 400,
                            ir = 90;
                          let KI = null;

                          function xr(cB, Bc, nc) {
                            return KI ??= new AudioContext, KI.resume(), (0, br.e)(KI, KI.destination, cB, Bc, nc, (() => {}))
                          }

                          function dI() {
                            const [cB, Bc] = (0, Vc.useState)(LI.j.regular), [nc, Ic] = (0, Vc.useState)(HI[0]), [uc, sc] = (0, Vc.useState)("Innkeeper"), [Mc, Pc] = (0, Vc.useState)(0), qB = OV((cB => cB.volume)), Oc = (0, Vc.useRef)(null), Tc = (0, Vc.useRef)(0), fc = (0, Vc.useRef)(0), ec = () => {
                              var cB;
                              null === (cB = Oc.current) || void 0 === cB || cB.call(Oc), Oc.current = null
                            };
                            (0, Vc.useEffect)((() => () => {
                              var cB;
                              null === (cB = Oc.current) || void 0 === cB || cB.call(Oc), window.clearTimeout(Tc.current)
                            }), []);
                            const Sc = (0, Vc.useMemo)((() => ({
                                line: nc,
                                speakerName: uc || void 0,
                                voice: cB
                              })), [nc, uc, cB]),
                              yB = (0, Vc.useRef)(Sc);
                            yB.current = Sc;
                            const pc = FI(cB),
                              hc = cB => {
                                window.clearTimeout(Tc.current), ec();
                                const {
                                  plan: Bc,
                                  synth: nc
                                } = (0, UI.h)(cB);
                                nc && (Oc.current = xr(nc, Bc.blips, qB)), Pc((cB => cB + 1))
                              },
                              aB = jr(cB, nc, uc);
                            return (0, mB.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, mB.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, mB.jsxs)("div", {
                                  children: [(0, mB.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, mB.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, mB.jsx)(zB, {
                                  text: aB,
                                  label: "Copy code"
                                })]
                              }), (0, mB.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [XI.map((cB => (0, mB.jsx)("button", {
                                  type: "button",
                                  className: rB()("DocsVariantChip", {
                                    Active: pc === cB
                                  }),
                                  "aria-pressed": pc === cB,
                                  onClick: () => {
                                    (cB => {
                                      const nc = LI.j[cB];
                                      Bc(nc), hc({
                                        ...Sc,
                                        voice: nc
                                      })
                                    })(cB)
                                  },
                                  children: cB
                                }, cB))), !pc && (0, mB.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, mB.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, mB.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, mB.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, mB.jsx)(gr.d, {
                                      display: Sc
                                    }, Mc)
                                  }), (0, mB.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: cB => {
                                      cB.preventDefault(), hc(Sc)
                                    },
                                    children: [(0, mB.jsx)("input", {
                                      value: nc,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: cB => {
                                        Ic(cB.target.value)
                                      }
                                    }), (0, mB.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, mB.jsx)(tB, {
                                        name: "play"
                                      }), (0, mB.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, mB.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: HI.map((cB => (0, mB.jsx)("button", {
                                      type: "button",
                                      className: rB()("DocsVariantChip", {
                                        Active: nc === cB
                                      }),
                                      onClick: () => {
                                        var Bc;
                                        Ic(Bc = cB), hc({
                                          ...Sc,
                                          line: Bc
                                        })
                                      },
                                      children: cB
                                    }, cB)))
                                  }), (0, mB.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, mB.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, mB.jsx)("input", {
                                      value: uc,
                                      placeholder: "No name",
                                      onChange: cB => {
                                        sc(cB.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, mB.jsx)(kr, {
                                  synth: cB,
                                  onChange: nc => {
                                    const Vc = {
                                      ...cB,
                                      ...nc
                                    };
                                    Bc(Vc);
                                    const Ic = {
                                        ...Sc,
                                        voice: Vc
                                      },
                                      rB = performance.now();
                                    if (rB - fc.current >= ir) {
                                      fc.current = rB, ec();
                                      const cB = (0, UI.h)(Ic).plan.blips[0];
                                      cB && (Oc.current = xr((0, LI.k)(Vc), [{
                                        ...cB,
                                        atMs: 0
                                      }], qB))
                                    }
                                    window.clearTimeout(Tc.current), Tc.current = window.setTimeout((() => {
                                      hc(yB.current)
                                    }), RI)
                                  }
                                })]
                              }), (0, mB.jsx)(lc, {
                                code: aB,
                                lang: "ts"
                              })]
                            })
                          }
                          var AI = nc(3914);
                          const GI = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            cu = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Br = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${cu}`, "g"), AI.l],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, AI.l]
                            ];

                          function nr(cB) {
                            return `${cB.pageId}#${cB.anchor}`
                          }
                          let Vr, Ir, ru;

                          function ur(cB) {
                            const Bc = (0, Yc.g)(cB),
                              nc = new Set;
                            for (const [, , Vc] of Bc.matchAll(Yc.c)) {
                              const cB = Vc.startsWith("#") ? Hc(Vc) : null,
                                Bc = cB ? nr({
                                  pageId: cB.page.id,
                                  anchor: cB.anchor
                                }) : null;
                              null !== Bc && (Vr || (Vr = new Set(Ec.flatMap((cB => bB(cB.layout) ? kB(cB).sections.map((Bc => nr({
                                pageId: cB.id,
                                anchor: Bc.heading.anchor
                              }))) : [])))), Vr).has(Bc) && nc.add(Bc)
                            }
                            for (const [, , Vc] of Bc.matchAll(GI)) {
                              const cB = TB(Vc);
                              cB && nc.add(nr(cB))
                            }
                            return nc
                          }

                          function sr(cB, Bc) {
                            const nc = new Set,
                              Vc = function(cB) {
                                return cB.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(cB);
                            for (const [, Ic] of Vc.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) nc.add(Ic);
                            for (const [Ic, rB] of Br)
                              for (const [, cB] of(0, AI.e)(Vc, Ic, rB)) Bc.has(cB) && nc.add(cB);
                            return nc
                          }

                          function Mr(cB, Bc, nc, Vc) {
                            const Ic = cB.get(Bc);
                            Ic ? !Vc && Ic.some((cB => cB.pageId === nc.pageId)) || Ic.push(nc) : cB.set(Bc, [nc])
                          }
                          const Pr = /^[A-Za-z_$][\w$]*$/;

                          function qu(cB) {
                            return Pr.test(cB.name) ? cB.name : "options"
                          }

                          function Or(cB, Bc) {
                            const nc = cB.params.map(qu).join(", ");
                            return Bc ? `${cB.name} = (${nc}) => {\n\t\n}` : `api.${cB.name}(${nc})`
                          }

                          function Tr(cB) {
                            let {
                              method: Bc,
                              isCallback: nc
                            } = cB;
                            return (0, mB.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, mB.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [nc ? (0, mB.jsxs)(mB.Fragment, {
                                  children: [(0, mB.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Bc.name
                                  }), (0, mB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, mB.jsxs)(mB.Fragment, {
                                  children: [(0, mB.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, mB.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Bc.name
                                  }), (0, mB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), Bc.params.map(((cB, nc) => (0, mB.jsxs)(Vc.Fragment, {
                                  children: [nc > 0 && (0, mB.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, mB.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${Bc.name}-${qu(cB)}`,
                                    children: cB.name
                                  })]
                                }, cB.name))), (0, mB.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: nc ? ") => " : ")"
                                }), nc && !Bc.returns && (0, mB.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), Bc.returns && Bc.returns.type && (0, mB.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!nc && (0, mB.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, mB.jsx)(LB, {
                                  type: Bc.returns.type
                                })]
                              })]
                            })
                          }

                          function fr(cB) {
                            let {
                              title: Bc,
                              references: nc
                            } = cB;
                            const Ic = (0, Vc.useContext)(fB);
                            return (0, mB.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, mB.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: Bc
                              }), nc.map((cB => (0, mB.jsx)(uc.e, {
                                to: Jc(Ic, Wc(cB.pageId), cB.anchor),
                                children: cB.label
                              }, `${cB.pageId}#${cB.anchor}`)))]
                            })
                          }

                          function mu(cB) {
                            var Bc, nc;
                            let {
                              pageId: Vc,
                              anchor: Ic
                            } = cB;
                            const rB = nr({
                                pageId: Vc,
                                anchor: Ic
                              }),
                              uc = null !== (Bc = function() {
                                if (!ru) {
                                  ru = new Map;
                                  const Vc = new Set(Ec.filter((cB => "callbacks" === cB.layout)).flatMap((cB => kB(cB).sections.map((cB => cB.heading.text)))));
                                  for (const Ic of Ec)
                                    if ("article" === Ic.layout || "snippets" === Ic.layout)
                                      for (const rB of (0, Yc.u)(kB(Ic)))
                                        for (const {
                                            code: uc
                                          }
                                          of(0, Yc.i)(rB.blocks))
                                          for (const sc of sr(uc, Vc)) {
                                            const Vc = OB().get(sc);
                                            if (Vc) {
                                              var cB, Bc, nc;
                                              const uc = {
                                                pageId: Ic.id,
                                                anchor: null !== (cB = null === (Bc = rB.heading) || void 0 === Bc ? void 0 : Bc.anchor) && void 0 !== cB ? cB : "",
                                                label: null !== (nc = Ic.navTitle) && void 0 !== nc ? nc : Ic.title
                                              };
                                              Mr(ru, nr(Vc), uc, !1)
                                            }
                                          }
                                }
                                return ru
                              }().get(rB)) && void 0 !== Bc ? Bc : [],
                              sc = null !== (nc = function() {
                                if (!Ir) {
                                  Ir = new Map;
                                  const cB = Wc("changelog");
                                  for (const Bc of kB(cB).sections) {
                                    const nc = new Set(Bc.blocks.flatMap((cB => [...ur(cB)])));
                                    for (const Vc of nc) {
                                      const nc = {
                                        pageId: cB.id,
                                        anchor: Bc.heading.anchor,
                                        label: Bc.heading.text
                                      };
                                      Mr(Ir, Vc, nc, !0)
                                    }
                                  }
                                }
                                return Ir
                              }().get(rB)) && void 0 !== nc ? nc : [];
                            return 0 === uc.length && 0 === sc.length ? null : (0, mB.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [uc.length > 0 && (0, mB.jsx)(fr, {
                                title: "Used in",
                                references: uc
                              }), sc.length > 0 && (0, mB.jsx)(fr, {
                                title: "Changelog",
                                references: sc
                              })]
                            })
                          }

                          function er(cB) {
                            let {
                              method: Bc,
                              pageId: nc,
                              anchor: Vc,
                              isCallback: Ic
                            } = cB;
                            const rB = Ic ? void 0 : sB().get(Bc.name),
                              uc = Bc.description.length > 0 || null === rB || void 0 === rB || !rB.description ? Bc.description : (0, Yc.z)(rB.description);
                            return (0, mB.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, mB.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, mB.jsx)(qV, {
                                  level: 2,
                                  text: Bc.name,
                                  anchor: Vc,
                                  className: "DocsCardTitle"
                                }), (0, mB.jsx)(zB, {
                                  text: Or(Bc, Ic),
                                  label: Ic ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, mB.jsx)(Tr, {
                                method: Bc,
                                isCallback: Ic
                              }), rB && null !== rB.deprecation && (0, mB.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, mB.jsx)("strong", {
                                  children: "Deprecated"
                                }), rB.deprecation && (0, mB.jsxs)(mB.Fragment, {
                                  children: [": ", (0, mB.jsx)(an, {
                                    text: (sc = rB.deprecation, (0, AI.v)(sc, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, AI.i)("`\\w"), (cB => {
                                      let [Bc] = cB;
                                      return OB().has(Bc) ? `\`${Bc}\`` : Bc
                                    })))
                                  })]
                                })]
                              }), uc.length > 0 && (0, mB.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, mB.jsx)(mV, {
                                  blocks: uc
                                })
                              }), Bc.params.length > 0 && (0, mB.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, mB.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, mB.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: Bc.params.map((cB => (0, mB.jsxs)("div", {
                                    id: `${Bc.name}-${qu(cB)}`,
                                    className: "DocsParam",
                                    children: [(0, mB.jsxs)("dt", {
                                      children: [(0, mB.jsx)("code", {
                                        className: "DocsParamName",
                                        children: cB.name
                                      }), (0, mB.jsx)(LB, {
                                        type: cB.type
                                      })]
                                    }), cB.description && (0, mB.jsx)("dd", {
                                      children: (0, mB.jsx)(an, {
                                        text: cB.description
                                      })
                                    })]
                                  }, cB.name)))
                                })]
                              }), Bc.returns && (Bc.returns.type || Bc.returns.description.length > 0) && (0, mB.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, mB.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, mB.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [Bc.returns.type && (0, mB.jsx)(LB, {
                                    type: Bc.returns.type
                                  }), Bc.returns.description.length > 0 && (0, mB.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, mB.jsx)(mV, {
                                      blocks: Bc.returns.description
                                    })
                                  })]
                                })]
                              }), (0, mB.jsx)(mu, {
                                pageId: nc,
                                anchor: Vc
                              })]
                            });
                            var sc
                          }

                          function tu(cB) {
                            var Bc;
                            return null !== cB.defaultValue && "undefined" !== cB.defaultValue ? cB.defaultValue : null !== (Bc = cB.example) && void 0 !== Bc ? Bc : "value"
                          }

                          function Sr(cB) {
                            let {
                              setting: Bc,
                              pageId: nc,
                              anchor: Vc,
                              setterSnippet: Ic
                            } = cB;
                            const rB = null === Bc.defaultValue ? null : SB(Bc.defaultValue);
                            return (0, mB.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, mB.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, mB.jsx)(qV, {
                                  level: 2,
                                  text: Bc.name,
                                  anchor: Vc,
                                  className: "DocsCardTitle"
                                }), (0, mB.jsx)(zB, {
                                  text: Ic(Bc.name, tu(Bc)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, mB.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, mB.jsxs)("div", {
                                  children: [(0, mB.jsx)("dt", {
                                    children: "Type"
                                  }), (0, mB.jsx)("dd", {
                                    children: (0, mB.jsx)(LB, {
                                      type: Bc.type
                                    })
                                  })]
                                }), null !== Bc.defaultValue && (0, mB.jsxs)("div", {
                                  children: [(0, mB.jsx)("dt", {
                                    children: "Default"
                                  }), (0, mB.jsx)("dd", {
                                    children: (0, mB.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [rB && (0, mB.jsx)(yn, {
                                        colour: rB
                                      }), Bc.defaultValue]
                                    })
                                  })]
                                }), null !== Bc.example && (0, mB.jsxs)("div", {
                                  children: [(0, mB.jsx)("dt", {
                                    children: "Example"
                                  }), (0, mB.jsx)("dd", {
                                    children: (0, mB.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: Bc.example
                                    })
                                  })]
                                })]
                              }), Bc.description.length > 0 && (0, mB.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, mB.jsx)(mV, {
                                  blocks: Bc.description
                                })
                              }), (0, mB.jsx)(mu, {
                                pageId: nc,
                                anchor: Vc
                              })]
                            })
                          }

                          function yu(cB) {
                            let {
                              section: Bc
                            } = cB;
                            return (0, mB.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, mB.jsx)(qV, {
                                level: 2,
                                text: Bc.heading.text,
                                anchor: Bc.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, mB.jsx)("div", {
                                className: "DocsProse",
                                children: (0, mB.jsx)(mV, {
                                  blocks: Bc.blocks
                                })
                              })]
                            })
                          }

                          function zu(cB) {
                            let {
                              section: Bc
                            } = cB;
                            return (0, mB.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, mB.jsx)(qV, {
                                level: Bc.heading.level,
                                text: Bc.heading.text,
                                anchor: Bc.heading.anchor
                              }), (0, mB.jsx)(mV, {
                                blocks: Bc.blocks
                              })]
                            })
                          }
                          const pr = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function hr(cB) {
                            let {
                              page: Bc,
                              section: nc
                            } = cB;
                            if ("methods" === Bc.layout || "callbacks" === Bc.layout) return (0, mB.jsx)(er, {
                              method: Yn(nc),
                              pageId: Bc.id,
                              anchor: nc.heading.anchor,
                              isCallback: "callbacks" === Bc.layout
                            });
                            if ("settings" === Bc.layout) {
                              const cB = function(cB) {
                                const Bc = {
                                  name: cB.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Vc of cB.blocks) {
                                  var nc;
                                  if (lnc(Vc)) continue;
                                  const cB = "paragraph" === Vc.kind ? Vc.text.match(Ln) : null;
                                  if (!cB) {
                                    Bc.description.push(Vc);
                                    continue
                                  }
                                  const Ic = null !== (nc = aV(cB[2])) && void 0 !== nc ? nc : cB[2];
                                  "Type" === cB[1] ? Bc.type = Ic : "Default" === cB[1] ? Bc.defaultValue = Ic : "" !== Ic && (Bc.example = Ic)
                                }
                                return Bc.type ? Bc : null
                              }(nc);
                              if (cB) return (0, mB.jsx)(Sr, {
                                setting: cB,
                                pageId: Bc.id,
                                anchor: nc.heading.anchor,
                                setterSnippet: Bc.setterSnippet
                              })
                            }
                            return "snippets" === Bc.layout ? (0, mB.jsx)(yu, {
                              section: nc
                            }) : "changelog" === Bc.layout ? (0, mB.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, mB.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, mB.jsx)(qV, {
                                  level: 2,
                                  text: nc.heading.text,
                                  anchor: nc.heading.anchor
                                })
                              }), (0, mB.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, mB.jsx)(mV, {
                                  blocks: gV(nc.blocks)
                                })
                              })]
                            }) : Bc.gallery ? (0, mB.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, mB.jsx)(qV, {
                                level: nc.heading.level,
                                text: nc.heading.text,
                                anchor: nc.heading.anchor
                              }), (0, mB.jsx)(UV, {
                                kind: Bc.gallery,
                                content: kB(Bc),
                                blocks: nc.blocks
                              })]
                            }) : (0, mB.jsx)(zu, {
                              section: nc
                            })
                          }

                          function au(cB) {
                            let {
                              page: Bc,
                              onTocChange: nc
                            } = cB;
                            const Ic = kB(Bc),
                              [rB, uc] = (0, Vc.useState)(""),
                              sc = "article" !== Bc.layout,
                              Mc = Sn(Bc.gallery) ? Bc.gallery : null,
                              Pc = null !== Mc,
                              qB = rB.trim().toLowerCase(),
                              Oc = (0, Vc.useRef)(null),
                              Tc = (0, Vc.useCallback)((cB => {
                                var Bc;
                                null === (Bc = Oc.current) || void 0 === Bc || Bc.preview(cB)
                              }), []),
                              fc = (0, Vc.useMemo)((() => {
                                if (!Bc.hasParticlePlayground) return [];
                                const cB = Qn(Ic.intro).find((cB => "names" === cB.kind && !cB.names.some((cB => null !== kV(cB.name)))));
                                return "names" === (null === cB || void 0 === cB ? void 0 : cB.kind) ? cB.names.map((cB => cB.name)) : []
                              }), [Bc, Ic]),
                              ec = (0, Vc.useMemo)((() => {
                                if (!Bc.hasTextPlayground) return [];
                                const cB = Ic.sections.flatMap((cB => cB.blocks.flatMap((cB => {
                                  var Bc;
                                  return (null !== (Bc = Zn(cB)) && void 0 !== Bc ? Bc : []).flatMap((cB => wB(cB.name) ? [cB.name] : []))
                                }))));
                                return [...new Set(cB)]
                              }), [Bc, Ic]),
                              tB = (0, Vc.useMemo)((() => qB ? Ic.sections.filter((cB => function(cB, Bc) {
                                return !!cB.heading.text.toLowerCase().includes(Bc) || cB.blocks.some((cB => (0, Yc.g)(cB).toLowerCase().includes(Bc)))
                              }(cB, qB))) : Ic.sections), [Ic, qB]),
                              Sc = (0, Vc.useMemo)((() => function(cB, Bc) {
                                return "article" !== cB.layout ? Bc.map((cB => ({
                                  anchor: cB.heading.anchor,
                                  text: cB.heading.text,
                                  level: 2
                                }))) : Bc.flatMap((cB => {
                                  const Bc = cB.blocks.flatMap((cB => "heading" === cB.kind && 3 === cB.level ? [{
                                    anchor: cB.anchor,
                                    text: cB.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: cB.heading.anchor,
                                    text: cB.heading.text,
                                    level: 2
                                  }, ...Bc]
                                }))
                              }(Bc, tB)), [Bc, tB]);
                            return (0, Vc.useEffect)((() => {
                              nc(Sc)
                            }), [Sc, nc]), (0, mB.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, mB.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, mB.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Ic.title || Bc.title
                                }), (0, mB.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: Bc.summary
                                }), (0, mB.jsx)(KV, {
                                  page: Bc
                                }), sc && (0, mB.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, mB.jsxs)("span", {
                                    children: [(0, mB.jsx)("strong", {
                                      children: Ic.sections.length
                                    }), " ", pr[Bc.layout]]
                                  })
                                })]
                              }), "" === Bc.slug && (0, mB.jsx)(ZV, {}), Mc && (0, mB.jsx)(DV, {
                                kind: Mc
                              }, Mc), Bc.hasParticlePlayground && (0, mB.jsx)(MI, {
                                ref: Oc,
                                textures: fc
                              }), !Pc && Ic.intro.length > 0 && (0, mB.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: Bc.gallery ? (0, mB.jsx)(yI.Provider, {
                                  value: Bc.hasParticlePlayground ? Tc : null,
                                  children: (0, mB.jsx)(UV, {
                                    kind: Bc.gallery,
                                    content: Ic,
                                    blocks: Ic.intro
                                  })
                                }) : (0, mB.jsx)(mV, {
                                  blocks: gV(Ic.intro)
                                })
                              }), Bc.hasTextPlayground && (0, mB.jsx)(YI, {
                                fontAwesomeIcons: ec
                              }), Bc.hasVoicePlayground && (0, mB.jsx)(dI, {}), Bc.childPageIds && (0, mB.jsx)(ZV, {
                                cards: Bc.childPageIds.map((cB => ({
                                  pageId: cB
                                }))),
                                label: Bc.title
                              }), sc && (0, mB.jsx)(pn, {
                                className: "DocsFilterBar",
                                value: rB,
                                placeholder: `Filter ${Ic.sections.length} ${pr[Bc.layout]}\u2026`,
                                label: `Filter ${pr[Bc.layout]}`,
                                onChange: uc,
                                count: qB ? {
                                  visible: tB.length,
                                  total: Ic.sections.length
                                } : null
                              }), !Pc && (0, mB.jsxs)("div", {
                                className: `DocsSections Layout-${Bc.layout}`,
                                children: [tB.map((cB => (0, mB.jsx)(hr, {
                                  page: Bc,
                                  section: cB
                                }, cB.heading.anchor))), 0 === tB.length && (0, mB.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", pr[Bc.layout], " match \u201c", rB, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const lr = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Yr(cB) {
                            let {
                              entry: Bc,
                              isActive: nc,
                              onNavigate: Vc,
                              label: Ic,
                              children: uc
                            } = cB;
                            return (0, mB.jsx)("a", {
                              href: `#${Bc.anchor}`,
                              "aria-label": Ic,
                              className: rB()(`Level${Bc.level}`, {
                                Active: nc
                              }),
                              "aria-current": nc ? "location" : void 0,
                              onClick: cB => {
                                cB.preventDefault(), Vc(Bc.anchor)
                              },
                              children: uc
                            })
                          }

                          function Lr(cB) {
                            let {
                              toc: Bc,
                              activeAnchor: nc,
                              onNavigate: Ic
                            } = cB;
                            const uc = Math.max(0, Bc.findIndex((cB => cB.anchor === nc))),
                              sc = (0, Vc.useRef)(null),
                              Mc = (0, Vc.useRef)(!1);
                            (0, Vc.useEffect)((() => {
                              var cB, nc;
                              const Vc = null === (cB = sc.current) || void 0 === cB ? void 0 : cB.closest(".DocsToc"),
                                Ic = null === (nc = sc.current) || void 0 === nc ? void 0 : nc.querySelector(".DocsTimelineNotch.Active");
                              if (!Vc || !Ic) return;
                              let rB = 0;
                              if (uc === Bc.length - 1) rB = Vc.scrollHeight;
                              else if (uc > 0) {
                                const cB = Vc.getBoundingClientRect(),
                                  Bc = Ic.getBoundingClientRect();
                                rB = Vc.scrollTop + Bc.top + Bc.height / 2 - (cB.top + Vc.clientHeight / 2)
                              }
                              Vc.scrollTo({
                                top: rB,
                                behavior: Mc.current ? "smooth" : "auto"
                              }), Mc.current = !0
                            }), [uc, Bc.length]);
                            const Pc = [];
                            return Bc.forEach(((cB, Bc) => {
                              var nc, Vc, Ic;
                              const rB = function(cB) {
                                  const Bc = cB.trim().match(lr);
                                  return Bc ? {
                                    day: Bc[1],
                                    month: `${Bc[2]} ${Bc[3]}`
                                  } : null
                                }(cB.text),
                                uc = null !== (nc = null === rB || void 0 === rB ? void 0 : rB.month) && void 0 !== nc ? nc : null;
                              null !== uc && (null === (Vc = Pc.at(-1)) || void 0 === Vc ? void 0 : Vc.month) === uc || Pc.push({
                                month: uc,
                                entries: []
                              }), Pc.at(-1).entries.push({
                                entry: cB,
                                day: null !== (Ic = null === rB || void 0 === rB ? void 0 : rB.day) && void 0 !== Ic ? Ic : null,
                                index: Bc
                              })
                            })), (0, mB.jsx)("ol", {
                              ref: sc,
                              className: "DocsTimeline",
                              children: Pc.map((cB => {
                                let {
                                  month: Bc,
                                  entries: nc
                                } = cB;
                                return (0, mB.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [Bc && (0, mB.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: Bc
                                  }), (0, mB.jsx)("ol", {
                                    children: nc.map((cB => {
                                      let {
                                        entry: Bc,
                                        day: nc,
                                        index: Vc
                                      } = cB;
                                      return (0, mB.jsx)("li", {
                                        className: rB()("DocsTimelineNotch", {
                                          Passed: Vc < uc,
                                          Active: Vc === uc
                                        }),
                                        children: (0, mB.jsx)(Yr, {
                                          entry: Bc,
                                          isActive: Vc === uc,
                                          onNavigate: Ic,
                                          label: Bc.text,
                                          children: (0, mB.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== nc && void 0 !== nc ? nc : Bc.text
                                          })
                                        })
                                      }, Bc.anchor)
                                    }))
                                  })]
                                }, nc[0].entry.anchor)
                              }))
                            })
                          }

                          function gu(cB) {
                            let {
                              isChangelog: Bc,
                              toc: nc,
                              activeAnchor: Vc,
                              onNavigate: Ic
                            } = cB;
                            return 0 === nc.length ? null : (0, mB.jsxs)(mB.Fragment, {
                              children: [(0, mB.jsx)("div", {
                                className: "DocsTocTitle",
                                children: Bc ? "Updates" : "On this page"
                              }), Bc ? (0, mB.jsx)(Lr, {
                                toc: nc,
                                activeAnchor: Vc,
                                onNavigate: Ic
                              }) : (0, mB.jsx)("ul", {
                                children: nc.map((cB => (0, mB.jsx)("li", {
                                  children: (0, mB.jsx)(Yr, {
                                    entry: cB,
                                    isActive: cB.anchor === Vc,
                                    onNavigate: Ic,
                                    children: cB.text.replace(/`/g, "")
                                  })
                                }, cB.anchor)))
                              })]
                            })
                          }
                          const Ur = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            bu = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Zr = 20,
                            Qr = 10,
                            Cr = 40,
                            vu = 120;
                          let Dr;

                          function Nr(cB) {
                            const Bc = cB.gallery;
                            if (!Bc) return [];
                            if (Sn(Bc)) return function(cB) {
                              return zV(cB).entries.map((cB => cB.name))
                            }(Bc).map((nc => ({
                              page: cB,
                              anchor: vV(Bc, nc),
                              title: nc,
                              kind: bu[Bc],
                              text: "",
                              listedUnder: cB.title
                            })));
                            const nc = kB(cB);
                            return (0, Yc.u)(nc).flatMap((Vc => {
                              const Ic = Vc.heading ? `${cB.title} \u203a ${Vc.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : cB.title;
                              return Nn(Bc, nc, Vc.blocks).flatMap((nc => "names" !== nc.kind ? [] : nc.names.map((Vc => {
                                const rB = nc.isSongs ? "Song" : bu[Bc];
                                return {
                                  page: cB,
                                  anchor: Vc.anchor,
                                  title: Vc.name,
                                  kind: rB,
                                  text: "",
                                  listedUnder: Ic
                                }
                              }))))
                            }))
                          }

                          function Er(cB, Bc, nc) {
                            const Vc = cB.title.toLowerCase();
                            let Ic = 0;
                            if (Vc === Bc) Ic = 100;
                            else if (Vc.startsWith(Bc)) Ic = 80;
                            else if (Vc.includes(Bc)) Ic = 60;
                            else if (nc.every((cB => Vc.includes(cB)))) Ic = 45;
                            else {
                              if (!cB.text.toLowerCase().includes(Bc)) return 0;
                              Ic = 20
                            }
                            return Ic - Math.min(Vc.length / 10, 9) + ("Page" === cB.kind ? 8 : "Method" === cB.kind ? 3 : 0) - (cB.listedUnder ? Zr : 0)
                          }

                          function or(cB, Bc) {
                            const nc = cB.toLowerCase().indexOf(Bc),
                              Vc = Math.max(0, nc - vu / 3);
                            return `${Vc>0?"\u2026":""}${cB.slice(Vc,Vc+vu)}${Vc+vu<cB.length?"\u2026":""}`
                          }

                          function Wr(cB) {
                            let {
                              text: Bc,
                              query: nc
                            } = cB;
                            const Vc = nc ? Bc.toLowerCase().indexOf(nc) : -1;
                            return -1 === Vc ? (0, mB.jsx)(mB.Fragment, {
                              children: Bc
                            }) : (0, mB.jsxs)(mB.Fragment, {
                              children: [Bc.slice(0, Vc), (0, mB.jsx)("mark", {
                                children: Bc.slice(Vc, Vc + nc.length)
                              }), Bc.slice(Vc + nc.length)]
                            })
                          }

                          function wr(cB) {
                            let {
                              basePath: Bc,
                              onClose: nc
                            } = cB;
                            const Ic = (0, sc.v)(),
                              [uc, Mc] = (0, Vc.useState)(""),
                              [Pc, qB] = (0, Vc.useState)(0),
                              Oc = (0, Vc.useRef)(null),
                              Tc = (0, Vc.useRef)(null),
                              fc = uc.trim().toLowerCase(),
                              ec = (0, Vc.useMemo)((() => {
                                const cB = (Dr || (Dr = Ec.flatMap((cB => {
                                  const Bc = kB(cB);
                                  return [{
                                    page: cB,
                                    anchor: "",
                                    title: cB.title,
                                    kind: "Page",
                                    text: cB.summary
                                  }, ...Bc.sections.flatMap((Bc => {
                                    const nc = Bc.blocks.filter((cB => "paragraph" === cB.kind)).map(Yc.g).join(" ").replace(/[`*]/g, ""),
                                      Vc = {
                                        page: cB,
                                        anchor: Bc.heading.anchor,
                                        title: Bc.heading.text.replace(/`/g, ""),
                                        kind: Ur[cB.layout],
                                        text: nc
                                      },
                                      Ic = Bc.blocks.flatMap((Bc => "article" === cB.layout && "heading" === Bc.kind && 3 === Bc.level ? [{
                                        page: cB,
                                        anchor: Bc.anchor,
                                        title: Bc.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Vc.title
                                      }] : []));
                                    return [Vc, ...Ic]
                                  })), ...Nr(cB)]
                                }))), Dr);
                                if (!fc) return cB.filter((cB => "Page" === cB.kind));
                                const Bc = fc.split(/\s+/);
                                let nc = 0;
                                return cB.map((cB => ({
                                  entry: cB,
                                  score: Er(cB, fc, Bc)
                                }))).filter((cB => cB.score > 0)).sort(((cB, Bc) => Bc.score - cB.score)).filter((cB => !cB.entry.listedUnder || (nc++, nc <= Qr))).slice(0, Cr).map((cB => cB.entry))
                              }), [fc]);
                            (0, Vc.useEffect)((() => {
                              qB(0)
                            }), [fc]), (0, Vc.useEffect)((() => {
                              const cB = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === cB || void 0 === cB || cB.focus()
                              }
                            }), []), (0, Vc.useEffect)((() => {
                              var cB, Bc;
                              null === (cB = Oc.current) || void 0 === cB || null === (Bc = cB.querySelector(".Active")) || void 0 === Bc || Bc.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Pc]);
                            const Sc = cB => {
                              Ic(Jc(Bc, cB.page, cB.anchor)), nc()
                            };
                            return (0, mB.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: cB => {
                                cB.target === cB.currentTarget && nc()
                              },
                              children: (0, mB.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: cB => {
                                  cB.target !== Tc.current && cB.preventDefault()
                                },
                                onKeyDown: cB => {
                                  if ("Escape" === cB.key) nc();
                                  else if ("Tab" === cB.key) {
                                    var Bc;
                                    cB.preventDefault(), null === (Bc = Tc.current) || void 0 === Bc || Bc.focus()
                                  }
                                },
                                children: [(0, mB.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, mB.jsx)(tB, {
                                    name: "magnifying-glass"
                                  }), (0, mB.jsx)("input", {
                                    ref: Tc,
                                    autoFocus: !0,
                                    value: uc,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": ec.length > 0 ? `DocsSearchResult-${Pc}` : void 0,
                                    onChange: cB => {
                                      Mc(cB.target.value)
                                    },
                                    onKeyDown: cB => {
                                      if ("ArrowDown" === cB.key || "ArrowUp" === cB.key) {
                                        cB.preventDefault();
                                        const Bc = "ArrowDown" === cB.key ? 1 : -1;
                                        qB((Pc + Bc + ec.length) % Math.max(ec.length, 1))
                                      } else "Enter" === cB.key && ec[Pc] && Sc(ec[Pc])
                                    }
                                  }), (0, mB.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, mB.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Oc,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!fc && (0, mB.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), ec.map(((cB, Bc) => {
                                    var nc;
                                    return (0, mB.jsxs)("li", {
                                      id: `DocsSearchResult-${Bc}`,
                                      role: "option",
                                      "aria-selected": Bc === Pc,
                                      className: rB()("DocsSearchResult", {
                                        Active: Bc === Pc
                                      }),
                                      onMouseMove: () => {
                                        qB(Bc)
                                      },
                                      onClick: () => {
                                        Sc(cB)
                                      },
                                      children: [(0, mB.jsx)(tB, {
                                        name: cB.page.icon
                                      }), (0, mB.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, mB.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, mB.jsx)(Wr, {
                                            text: cB.title,
                                            query: fc
                                          })
                                        }), cB.text && (0, mB.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, mB.jsx)(Wr, {
                                            text: or(cB.text, fc),
                                            query: fc
                                          })
                                        })]
                                      }), (0, mB.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === cB.kind ? "Page" : null !== (nc = cB.listedUnder) && void 0 !== nc ? nc : `${cB.kind} \xb7 ${cB.page.title}`
                                      })]
                                    }, `${cB.page.id}#${cB.anchor}`)
                                  })), fc && 0 === ec.length && (0, mB.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", uc, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function ku(cB, Bc) {
                            if (Bc < 10) return `${cB.toFixed(1)}s`;
                            const nc = Math.floor(cB);
                            return `${Math.floor(nc/60)}:${String(nc%60).padStart(2,"0")}`
                          }

                          function Xr() {
                            const cB = OV((cB => cB.track)),
                              Bc = OV((cB => cB.volume)),
                              [nc, Ic] = (0, Vc.useState)(0),
                              uc = (0, Vc.useRef)(nV);
                            if ((0, Vc.useEffect)((() => {
                                if (!cB) return;
                                if (Ic(eV()), "playing" !== cB.status) return;
                                let Bc = 0;
                                const nc = () => {
                                  Ic(eV()), Bc = requestAnimationFrame(nc)
                                };
                                return Bc = requestAnimationFrame(nc), () => {
                                  cancelAnimationFrame(Bc)
                                }
                              }), [cB]), !cB) return null;
                            const sc = "paused" !== cB.status,
                              Mc = Math.min(nc, cB.duration);
                            return (0, mB.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, mB.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, mB.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": sc ? `Pause ${cB.name}` : `Play ${cB.name}`,
                                  onClick: mI,
                                  children: (0, mB.jsx)(tB, {
                                    name: sc ? "pause" : "play"
                                  })
                                }), (0, mB.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, mB.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, mB.jsx)("code", {
                                      children: cB.name
                                    }), (0, mB.jsx)("span", {
                                      children: cB.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, mB.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, mB.jsx)("span", {
                                      children: ku(Mc, cB.duration)
                                    }), (0, mB.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: cB.duration || 1,
                                      step: .01,
                                      value: Mc,
                                      disabled: 0 === cB.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${ku(Mc,cB.duration)} of ${ku(cB.duration,cB.duration)}`,
                                      onChange: cB => {
                                        const Bc = Number(cB.target.value);
                                        ! function(cB) {
                                          var Bc;
                                          sV = cB, null === (Bc = rI) || void 0 === Bc || Bc.seek(cB)
                                        }(Bc), Ic(Bc)
                                      }
                                    }), (0, mB.jsx)("span", {
                                      children: cB.duration > 0 ? ku(cB.duration, cB.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, mB.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, mB.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === Bc ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === Bc ? tI(uc.current) : (uc.current = Bc, tI(0))
                                    },
                                    children: (0, mB.jsx)(tB, {
                                      name: "volume",
                                      className: rB()({
                                        Muted: 0 === Bc
                                      })
                                    })
                                  }), (0, mB.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: Bc,
                                    "aria-label": "Volume",
                                    onChange: cB => {
                                      tI(Number(cB.target.value))
                                    }
                                  })]
                                }), (0, mB.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var Bc;
                                    null === (Bc = document.querySelector(`[data-docs-track="${CSS.escape(VV(cB.name,cB.isSong))}"]`)) || void 0 === Bc || Bc.focus(), SV()
                                  },
                                  children: (0, mB.jsx)(tB, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var Hr = nc(51);
                          const Fr = "docsTheme",
                            Jr = window.matchMedia("(prefers-color-scheme: light)");

                          function ju(cB) {
                            let {
                              theme: Bc,
                              onChange: nc
                            } = cB;
                            const Vc = "dark" === Bc ? "light" : "dark";
                            return (0, mB.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Vc} theme`,
                              title: `Switch to ${Vc} theme`,
                              onClick: () => {
                                nc(Vc)
                              },
                              children: (0, mB.jsx)(tB, {
                                name: "dark" === Bc ? "moon" : "sun"
                              })
                            })
                          }
                          const Rr = "https://github.com/Bloxdy/code-api",
                            iu = "https://discord.gg/playbloxd",
                            Kr = 180,
                            xu = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function dr(cB) {
                            let {
                              basePath: Bc,
                              activePageId: nc,
                              onNavigate: Vc
                            } = cB;
                            return (0, mB.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: oc.map((cB => (0, mB.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, mB.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: cB.title
                                }), cB.pageIds.map((cB => {
                                  var Ic;
                                  const sc = Wc(cB);
                                  return (0, mB.jsxs)(uc.e, {
                                    to: Jc(Bc, sc),
                                    className: rB()("DocsNavLink", {
                                      Active: sc.id === nc
                                    }),
                                    "aria-current": sc.id === nc ? "page" : void 0,
                                    onClick: Vc,
                                    children: [(0, mB.jsx)(tB, {
                                      name: sc.icon
                                    }), (0, mB.jsx)("span", {
                                      children: null !== (Ic = sc.navTitle) && void 0 !== Ic ? Ic : sc.title
                                    })]
                                  }, sc.id)
                                }))]
                              }, cB.title)))
                            })
                          }

                          function Ar(cB) {
                            let {
                              basePath: Bc,
                              pageId: nc
                            } = cB;
                            const Vc = oc.flatMap((cB => cB.pageIds)),
                              Ic = Vc.indexOf(nc),
                              rB = Ic > 0 ? Wc(Vc[Ic - 1]) : null,
                              sc = Ic < Vc.length - 1 ? Wc(Vc[Ic + 1]) : null;
                            return (0, mB.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [rB ? (0, mB.jsxs)(uc.e, {
                                className: "DocsPagerLink Previous",
                                to: Jc(Bc, rB),
                                children: [(0, mB.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, mB.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: rB.title
                                })]
                              }) : (0, mB.jsx)("span", {}), sc && (0, mB.jsxs)(uc.e, {
                                className: "DocsPagerLink Next",
                                to: Jc(Bc, sc),
                                children: [(0, mB.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, mB.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: sc.title
                                })]
                              })]
                            })
                          }

                          function Gr(cB) {
                            let {
                              basePath: Bc,
                              embedded: nc = !1
                            } = cB;
                            const {
                              pageSlug: Ic = ""
                            } = (0, sc.z)(), Pc = (0, sc.s)(), qB = (0, sc.v)(), Oc = (Tc = Ic, Ec.find((cB => cB.slug === Tc)));
                            var Tc;
                            const [fc, ec] = function() {
                              const [cB, Bc] = (0, Vc.useState)((() => {
                                const cB = Hr.h.getItem(Fr);
                                return "dark" === cB || "light" === cB ? cB : null
                              })), [nc, Ic] = (0, Vc.useState)(Jr.matches ? "light" : "dark");
                              return (0, Vc.useEffect)((() => {
                                const cB = () => {
                                  Ic(Jr.matches ? "light" : "dark")
                                };
                                return Jr.addEventListener("change", cB), () => {
                                  Jr.removeEventListener("change", cB)
                                }
                              }), []), [null !== cB && void 0 !== cB ? cB : nc, cB => {
                                Hr.h.setItem(Fr, cB), Bc(cB)
                              }]
                            }(), [Sc, yB] = (0, Vc.useState)(null), [zB, pc] = (0, Vc.useState)(!1), [hc, aB] = (0, Vc.useState)(!1), [lc, Lc] = (0, Vc.useState)([]), gB = function(cB, Bc) {
                              const [nc, Ic] = (0, Vc.useState)("");
                              return (0, Vc.useEffect)((() => {
                                if (!Bc) return;
                                let nc = 0;
                                const Vc = () => {
                                    var Vc, rB;
                                    nc = 0;
                                    const uc = Bc.getBoundingClientRect().top + Kr;
                                    let sc = null !== (Vc = null === (rB = cB[0]) || void 0 === rB ? void 0 : rB.anchor) && void 0 !== Vc ? Vc : "";
                                    for (const Bc of cB) {
                                      const cB = document.getElementById(Bc.anchor);
                                      cB && cB.getBoundingClientRect().top <= uc && (sc = Bc.anchor)
                                    }
                                    Bc.scrollTop + Bc.clientHeight >= Bc.scrollHeight - 2 && Bc.scrollTop > 0 && cB.length > 0 && (sc = cB[cB.length - 1].anchor), Ic(sc)
                                  },
                                  rB = () => {
                                    nc || (nc = requestAnimationFrame(Vc))
                                  };
                                return Vc(), Bc.addEventListener("scroll", rB, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(nc), Bc.removeEventListener("scroll", rB)
                                }
                              }), [cB, Bc]), nc
                            }(lc, Sc), Uc = "" === Ic && Pc.hash ? function(cB) {
                              const Bc = (0, Yc.o)(cB);
                              if (Xc(Wc("welcome"), Bc)) return null;
                              const nc = Object.hasOwn(Fc, Bc) ? Fc[Bc] : null;
                              if (nc) return {
                                page: Wc(nc.pageId),
                                anchor: nc.anchor
                              };
                              const Vc = Wc("readme");
                              return Xc(Vc, Bc) ? {
                                page: Vc,
                                anchor: Bc
                              } : Hc(`#${Bc}`)
                            }(Pc.hash) : null;
                            (0, Vc.useEffect)((() => (Mc.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              Mc.d.set({
                                musicOnFromPage: !0
                              }), SV()
                            })), []), (0, Vc.useEffect)((() => {
                              const cB = cB => {
                                const Bc = cB.target;
                                if (Bc.closest(".DocsTextDialog")) return;
                                const nc = Bc.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(Bc.tagName);
                                "k" === cB.key && (cB.metaKey || cB.ctrlKey) || "/" === cB.key && !nc ? (cB.preventDefault(), aB(!0)) : "Escape" === cB.key && pc(!1)
                              };
                              return window.addEventListener("keydown", cB), () => {
                                window.removeEventListener("keydown", cB)
                              }
                            }), []);
                            const bB = (0, Vc.useRef)(null);
                            (0, Vc.useLayoutEffect)((() => {
                              var cB, Bc;
                              if (!Sc) return;
                              const nc = bB.current === Pc.pathname;
                              bB.current = Pc.pathname;
                              const Vc = (0, Yc.o)(Pc.hash),
                                Ic = Vc ? document.getElementById(Vc) : null;
                              if (null === (cB = Sc.querySelector(".DocsTargeted")) || void 0 === cB || cB.classList.remove("DocsTargeted"), null === Ic || void 0 === Ic || null === (Bc = Ic.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === Bc || Bc.classList.add("DocsTargeted"), Ic) {
                                var rB;
                                const cB = Ic.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (rB = Ic.closest(".DocsChangelogEntry")) && void 0 !== rB ? rB : Ic).scrollIntoView({
                                  block: cB ? "center" : "start",
                                  behavior: nc ? "smooth" : "auto"
                                })
                              } else nc || Sc.scrollTo({
                                top: 0
                              })
                            }), [Sc, Pc.pathname, Pc.hash, Pc.key]);
                            const Zc = (0, Vc.useCallback)((() => {
                                pc(!1)
                              }), []),
                              Qc = (0, Vc.useCallback)((cB => {
                                qB({
                                  hash: cB
                                })
                              }), [qB]);
                            if (Uc) return (0, mB.jsx)(sc.d, {
                              replace: !0,
                              to: Jc(Bc, Uc.page, Uc.anchor)
                            });
                            if (!Oc) return (0, mB.jsx)(sc.d, {
                              replace: !0,
                              to: Bc
                            });
                            const Cc = nc ? "div" : "main";
                            return (0, mB.jsx)(fB.Provider, {
                              value: Bc,
                              children: (0, mB.jsx)(mn.Provider, {
                                value: Sc,
                                children: (0, mB.jsxs)("div", {
                                  ref: yB,
                                  className: rB()("DocsSite", {
                                    Embedded: nc,
                                    NavOpen: zB
                                  }),
                                  "data-theme": fc,
                                  children: [(0, mB.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, mB.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": zB ? "Close menu" : "Open menu",
                                      "aria-expanded": zB,
                                      onClick: () => {
                                        pc(!zB)
                                      },
                                      children: (0, mB.jsx)(tB, {
                                        name: zB ? "cross" : "menu"
                                      })
                                    }), (0, mB.jsxs)(uc.e, {
                                      to: Bc,
                                      className: "DocsBrand",
                                      children: [(0, mB.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, mB.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, mB.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, mB.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        aB(!0)
                                      },
                                      children: [(0, mB.jsx)(tB, {
                                        name: "magnifying-glass"
                                      }), (0, mB.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, mB.jsxs)("kbd", {
                                        children: [xu ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, mB.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, mB.jsxs)("a", {
                                        href: iu,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, mB.jsx)(tB, {
                                          name: "discord"
                                        }), (0, mB.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, mB.jsxs)("a", {
                                        href: Rr,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, mB.jsx)(tB, {
                                          name: "external-link"
                                        }), (0, mB.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !nc && (0, mB.jsxs)(uc.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, mB.jsx)(tB, {
                                          name: "play"
                                        }), (0, mB.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, mB.jsx)(ju, {
                                        theme: fc,
                                        onChange: ec
                                      })]
                                    })]
                                  }), (0, mB.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, mB.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, mB.jsx)(dr, {
                                        basePath: Bc,
                                        activePageId: Oc.id,
                                        onNavigate: Zc
                                      })
                                    }), (0, mB.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Zc
                                    }), (0, mB.jsxs)(Cc, {
                                      className: "DocsMain",
                                      children: [(0, mB.jsx)(au, {
                                        page: Oc,
                                        onTocChange: Lc
                                      }, Oc.id), (0, mB.jsx)(Ar, {
                                        basePath: Bc,
                                        pageId: Oc.id
                                      })]
                                    }), (0, mB.jsx)("aside", {
                                      className: rB()("DocsToc", {
                                        Timeline: "changelog" === Oc.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, mB.jsx)(gu, {
                                        isChangelog: "changelog" === Oc.layout,
                                        toc: lc,
                                        activeAnchor: gB,
                                        onNavigate: Qc
                                      })
                                    })]
                                  }), (0, mB.jsx)(Xr, {}), hc && (0, mB.jsx)(wr, {
                                    basePath: Bc,
                                    onClose: () => {
                                      aB(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 3786: (cB, Bc, nc) => {
                          nc.d(Bc, {
                            c: () => Vc,
                            d: () => uc,
                            g: () => tB,
                            i: () => ec,
                            k: () => sc,
                            o: () => Ic,
                            r: () => rB,
                            u: () => mB,
                            y: () => fc,
                            z: () => Tc
                          });
                          const Vc = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Ic(cB) {
                            try {
                              return decodeURIComponent(cB.slice(1))
                            } catch {
                              return cB.slice(1)
                            }
                          }

                          function rB(cB) {
                            return cB.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const uc = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Vc.source}`, "g");

                          function sc(cB, Bc) {
                            return 2 === cB.length ? Bc.replace(/^ (.*) $/, "$1") : Bc
                          }

                          function Mc(cB) {
                            return "" === cB.trim()
                          }

                          function Pc(cB) {
                            const Bc = [];
                            for (const nc of cB.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Bc.length > 0 && Bc[Bc.length - 1].endsWith("\\") ? Bc[Bc.length - 1] += `|${nc}` : Bc.push(nc);
                            return Bc.map((cB => cB.trim().replaceAll("\\|", "|")))
                          }
                          const qB = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Oc(cB) {
                            const Bc = [],
                              nc = [{
                                indent: -1,
                                items: Bc
                              }];
                            let Vc = null;
                            for (const Ic of cB) {
                              const cB = Ic.match(qB);
                              if (!cB) {
                                Vc && (Vc.text += ` ${Ic.trim()}`);
                                continue
                              }
                              const Bc = cB[1].replace(/\t/g, "  ").length;
                              for (; Bc <= nc[nc.length - 1].indent;) nc.pop();
                              Vc = {
                                text: cB[3].trim(),
                                children: []
                              }, nc[nc.length - 1].items.push(Vc), nc.push({
                                indent: Bc,
                                items: Vc.children
                              })
                            }
                            return Bc
                          }

                          function Tc(cB) {
                            const Bc = cB.replace(/\r\n/g, "\n").split("\n"),
                              nc = [];
                            let Vc = 0;
                            for (; Vc < Bc.length;) {
                              const cB = Bc[Vc];
                              if (Mc(cB)) {
                                Vc++;
                                continue
                              }
                              const Ic = cB.match(/^\s*```\s*(\w*)\s*$/);
                              if (Ic) {
                                const cB = [];
                                for (Vc++; Vc < Bc.length && !/^\s*```\s*$/.test(Bc[Vc]);) cB.push(Bc[Vc]), Vc++;
                                Vc++, nc.push({
                                  kind: "code",
                                  lang: Ic[1] || "text",
                                  code: cB.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const uc = cB.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (uc) {
                                const cB = uc[2].trim();
                                nc.push({
                                  kind: "heading",
                                  level: uc[1].length,
                                  text: cB,
                                  anchor: rB(cB)
                                }), Vc++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(cB)) {
                                nc.push({
                                  kind: "rule"
                                }), Vc++;
                                continue
                              }
                              if (cB.trim().startsWith("|") && Vc + 1 < Bc.length && /^\s*\|[\s:|-]+\|\s*$/.test(Bc[Vc + 1])) {
                                const Ic = Pc(cB),
                                  rB = [];
                                for (Vc += 2; Vc < Bc.length && Bc[Vc].trim().startsWith("|");) rB.push(Pc(Bc[Vc])), Vc++;
                                nc.push({
                                  kind: "table",
                                  header: Ic,
                                  rows: rB
                                });
                                continue
                              }
                              if (cB.startsWith(">")) {
                                const cB = [];
                                for (; Vc < Bc.length && Bc[Vc].startsWith(">");) cB.push(Bc[Vc].replace(/^>\s?/, "")), Vc++;
                                nc.push({
                                  kind: "quote",
                                  blocks: Tc(cB.join("\n"))
                                });
                                continue
                              }
                              if (qB.test(cB)) {
                                const Ic = [],
                                  rB = /^\s*\d+\./.test(cB);
                                for (; Vc < Bc.length && !Mc(Bc[Vc]) && (qB.test(Bc[Vc]) || /^\s+\S/.test(Bc[Vc]));) Ic.push(Bc[Vc]), Vc++;
                                nc.push({
                                  kind: "list",
                                  ordered: rB,
                                  items: Oc(Ic)
                                });
                                continue
                              }
                              const sc = [];
                              for (; Vc < Bc.length && !Mc(Bc[Vc]) && !/^\s*```/.test(Bc[Vc]) && !/^#{1,6}\s/.test(Bc[Vc]) && !Bc[Vc].startsWith(">") && !qB.test(Bc[Vc]) && (!Bc[Vc].trim().startsWith("|") || 0 !== sc.length);) sc.push(Bc[Vc].trim()), Vc++;
                              0 === sc.length && (sc.push(Bc[Vc].trim()), Vc++), nc.push({
                                kind: "paragraph",
                                text: sc.join(" ")
                              })
                            }
                            return nc
                          }

                          function fc(cB) {
                            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const nc = Tc(cB);
                            let Vc = "";
                            const Ic = [],
                              rB = [],
                              uc = new Map;
                            for (const Pc of nc) {
                              if ("heading" === Pc.kind) {
                                var sc;
                                const cB = (null !== (sc = uc.get(Pc.anchor)) && void 0 !== sc ? sc : 0) + 1;
                                uc.set(Pc.anchor, cB), cB > 1 && (Pc.anchor = `${Pc.anchor}-${cB}`)
                              }
                              if ("heading" === Pc.kind && 1 === Pc.level && !Vc) {
                                Vc = Pc.text;
                                continue
                              }
                              if ("heading" === Pc.kind && Pc.level <= Bc) {
                                rB.push({
                                  heading: Pc,
                                  blocks: []
                                });
                                continue
                              }
                              const cB = rB.at(-1);
                              cB ? cB.blocks.push(Pc) : Ic.push(Pc)
                            }
                            const Mc = cB => {
                              for (;
                                "rule" === (null === (Bc = cB.at(-1)) || void 0 === Bc ? void 0 : Bc.kind);) {
                                var Bc;
                                cB.pop()
                              }
                            };
                            Mc(Ic);
                            for (const Pc of rB) Mc(Pc.blocks);
                            return {
                              title: Vc,
                              intro: Ic,
                              sections: rB
                            }
                          }

                          function mB(cB) {
                            return [{
                              heading: null,
                              blocks: cB.intro
                            }, ...cB.sections.map((cB => ({
                              heading: cB.heading,
                              blocks: cB.blocks
                            })))]
                          }

                          function ec(cB) {
                            return cB.flatMap((cB => "code" === cB.kind ? [cB] : "quote" === cB.kind ? ec(cB.blocks) : []))
                          }

                          function tB(cB) {
                            switch (cB.kind) {
                              case "heading":
                              case "paragraph":
                                return cB.text;
                              case "code":
                                return cB.code;
                              case "table":
                                return [cB.header, ...cB.rows].map((cB => cB.join(" "))).join(" ");
                              case "list": {
                                const Bc = cB => cB.map((cB => `${cB.text} ${Bc(cB.children)}`)).join(" ");
                                return Bc(cB.items)
                              }
                              case "quote":
                                return cB.blocks.map(tB).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 3900: (cB, Bc, nc) => {
                          nc.d(Bc, {
                            e: () => qB,
                            i: () => Oc
                          });
                          var Vc = nc(3907),
                            Ic = nc(27);
                          const rB = .25,
                            uc = .85,
                            sc = .02,
                            Mc = .01;

                          function Pc(cB, Bc, nc, Vc, Ic, rB, sc) {
                            const {
                              waveform: Mc,
                              pitchHz: Pc,
                              attackMs: qB,
                              releaseMs: Oc,
                              lowpassHz: Tc
                            } = nc, fc = Ic + Vc.durationMs / 1e3, mB = Pc * 2 ** (Vc.semitones / 12), ec = cB.createOscillator();
                            ec.type = Mc, ec.frequency.setValueAtTime(mB, Ic), ec.frequency.exponentialRampToValueAtTime(mB * 2 ** (Vc.glideSemitones / 12), fc);
                            const tB = Ic + Math.min(qB, Vc.durationMs) / 1e3,
                              Sc = cB.createGain();
                            Sc.gain.setValueAtTime(0, Ic), Sc.gain.linearRampToValueAtTime(rB, tB), Sc.gain.linearRampToValueAtTime(rB * uc, Math.max(tB, fc - Oc / 1e3)), Sc.gain.linearRampToValueAtTime(0, fc);
                            const yB = [ec];
                            if (null !== Tc) {
                              const Bc = cB.createBiquadFilter();
                              Bc.type = "lowpass", Bc.frequency.value = Tc, yB.push(Bc)
                            }
                            yB.push(Sc, Bc);
                            for (let uc = 1; uc < yB.length; uc++) yB[uc - 1].connect(yB[uc]);
                            return ec.onended = () => {
                              for (const cB of yB.slice(0, -1)) cB.disconnect();
                              sc()
                            }, ec.start(Ic), ec.stop(fc), ec
                          }

                          function qB(cB, Bc, nc, Vc, Ic, uc) {
                            if (0 === Vc.length) return uc(), () => {};
                            const qB = rB * nc.volume * Ic,
                              Oc = cB.createGain();
                            Oc.connect(Bc);
                            const Tc = cB.currentTime + sc,
                              fc = new Set;
                            for (const rB of Vc) {
                              const Bc = Pc(cB, Oc, nc, rB, Tc + rB.atMs / 1e3, qB * rB.level, (() => {
                                fc.delete(Bc), 0 === fc.size && (Oc.disconnect(), uc())
                              }));
                              fc.add(Bc)
                            }
                            return () => {
                              const Bc = cB.currentTime;
                              Oc.gain.setTargetAtTime(0, Bc, Mc);
                              for (const cB of fc) try {
                                cB.stop(Bc + 5 * Mc)
                              } catch {}
                            }
                          }

                          function Oc(cB, Bc) {
                            var nc;
                            const rB = Vc.d.ctx,
                              uc = Vc.d.masterGain;
                            if (!rB || !uc || !Ic.d.get("soundOnFromAd")) return () => {};
                            const sc = Vc.d;
                            return null === (nc = sc._autoResume) || void 0 === nc || nc.call(sc), qB(rB, uc, cB, Bc, Ic.d.get("soundVolume"), (() => {
                              var cB;
                              null === (cB = sc._autoSuspend) || void 0 === cB || cB.call(sc)
                            }))
                          }
                        }, 3823: (cB, Bc, nc) => {
                          nc.d(Bc, {
                            e: () => pc,
                            f: () => Sc
                          });
                          var Vc = nc(1156),
                            Ic = nc(35);
                          var rB = nc(302);
                          var uc = nc(569);
                          var sc = nc(1927),
                            Mc = nc(3828),
                            Pc = nc(3855),
                            qB = nc(3866);
                          class Oc {
                            constructor(cB, Bc, nc, Vc, Ic, rB) {
                              this.id = cB, this.type = Bc, this.parameters = nc, this.tearDownNotification = Vc, this.onDonePromise = Ic, this.resolveRequest = rB
                            }
                          }
                          const Tc = new Set(["primary-fire", "alt-fire", "TouchDig"]);
                          class fc {
                            constructor(cB, Bc, nc, Vc, Ic, rB) {
                              this.id = cB, this.type = Bc, this.parameters = nc, this.resolveRequest = Vc, this.onDonePromise = Ic, this.tearDownNotification = rB, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
                              const uc = Sc[Bc];
                              if (!uc) throw console.error(`No QTE implementation registered for type: ${Bc}`), new Error(`No QTE implementation registered for type: ${Bc}`);
                              this.implementation = new uc(nc, (cB => {
                                this.isCompleted = !0, this.resolveRequest(cB)
                              }), this.tearDownNotification), this.setupInputHandlers()
                            }
                            setupInputHandlers() {
                              this.mouseSub = Ic.i.subscribe("QTEMouseState", (cB => {
                                let {
                                  isDown: Bc
                                } = cB;
                                this.isCompleted || this.implementation.handleMouseInput(Bc)
                              })), this.stopInputActions = (0, Pc.j)((cB => {
                                this.isCompleted || !Tc.has(cB.action) && !(0, Pc.f)(cB) || this.implementation.handleMouseInput(cB.down)
                              })), this.tickSub = Ic.i.subscribe("noaTick", (cB => {
                                if (this.isCompleted) return;
                                const Bc = cB / 1e3;
                                this.implementation.handleTick(Bc)
                              })), this.stopShellTicks = (0, Mc.v)((() => {
                                this.isCompleted || this.implementation.handleTick(sc.s / 1e3)
                              }))
                            }
                            cleanup() {
                              var cB, Bc;
                              this.mouseSub && (Ic.i.unsubscribe(this.mouseSub), this.mouseSub = null), null === (cB = this.stopInputActions) || void 0 === cB || cB.call(this), this.stopInputActions = null, null === (Bc = this.stopShellTicks) || void 0 === Bc || Bc.call(this), this.stopShellTicks = null, this.tickSub && (Ic.i.unsubscribe(this.tickSub), this.tickSub = null)
                            }
                            async waitUntilDone() {
                              await this.onDonePromise
                            }
                            getState() {
                              return this.implementation.getState()
                            }
                            tearDown() {
                              this.isCompleted = !0, this.cleanup(), this.implementation.tearDown()
                            }
                          }
                          const mB = new Vc.d,
                            ec = new Map;
                          let tB = null;
                          const Sc = {
                            progressBar: class {
                              constructor(cB, Bc, nc) {
                                var Vc, Ic, rB, uc;
                                this.resolveRequest = Bc, this.tearDownNotification = nc, this.progress = 0, this.rG = void 0, this.sA = void 0, this.yE = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
                                const sc = cB;
                                this.rG = null !== (Vc = sc.rG) && void 0 !== Vc ? Vc : .075, this.sA = null !== (Ic = sc.sA) && void 0 !== Ic ? Ic : 1, this.progress = null !== (rB = sc.qE) && void 0 !== rB ? rB : 30, this.yE = null !== (uc = sc.yE) && void 0 !== uc && uc, this.parameters = sc
                              }
                              handleMouseInput(cB) {
                                cB && !this.isCompleted && (this.clickCount++, this.progress += this.sA, this.progress >= 100 && this.complete(!0))
                              }
                              handleTick() {
                                if (!this.isCompleted)
                                  if (this.progress -= this.rG, this.yE && this.progress <= 0) this.complete(!1);
                                  else if (this.progress <= 0) this.progress = 0;
                                else if (this.progress >= 100) return void this.complete(!0)
                              }
                              complete(cB) {
                                this.isCompleted = !0, this.resolveRequest(cB)
                              }
                              getState() {
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    progress: this.progress,
                                    clickCount: this.clickCount
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            },
                            timedClick: class {
                              constructor(cB, Bc, nc) {
                                var Vc;
                                this.resolveRequest = Bc, this.tearDownNotification = nc, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = cB, this.timeWindowMs = null !== (Vc = this.parameters.aG) && void 0 !== Vc ? Vc : 3e3, this.startTime = Date.now()
                              }
                              handleMouseInput(cB) {
                                if (!cB || this.isCompleted) return;
                                Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
                              }
                              handleTick() {
                                if (this.isCompleted) return;
                                Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
                              }
                              complete(cB) {
                                this.isCompleted = !0, this.resolveRequest(cB)
                              }
                              getState() {
                                const cB = Date.now() - this.startTime,
                                  Bc = Math.max(0, this.timeWindowMs - cB);
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    timeRemaining: Bc,
                                    aG: this.timeWindowMs
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            },
                            gravityBar: class {
                              constructor(cB, Bc, nc) {
                                var Vc;
                                this.resolveRequest = Bc, this.tearDownNotification = nc, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
                                const Ic = cB;
                                this.parameters = {
                                  ...Ic,
                                  iG: rB.b.clamp(Ic.iG, .05, 1)
                                }, this.progress = null !== (Vc = Ic.qE) && void 0 !== Vc ? Vc : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
                              }
                              handleMouseInput(cB) {
                                this.isMouseDown = cB
                              }
                              handleTick(cB) {
                                this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(cB))
                              }
                              updateMover() {
                                this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
                                const cB = Math.sign(this.moverTarget - this.moverPosition);
                                this.moverPosition += cB * this.parameters.xG * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
                              }
                              pickNewMoverTarget() {
                                this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
                              }
                              randomNumTicksUntilDirectionChange() {
                                const cB = rB.b.clamp(1 - .7 * this.parameters.nG, 0, 1.4);
                                return Math.floor(60 * cB + 40 * Math.random())
                              }
                              updateCatchZone() {
                                this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.r4 : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = rB.b.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
                                const cB = this.parameters.iG / 2,
                                  Bc = cB,
                                  nc = 1 - cB;
                                this.catchZonePosition <= Bc ? (this.catchZonePosition = Bc, this.catchZoneVelocity = 0) : this.catchZonePosition >= nc && (this.catchZonePosition = nc, this.catchZoneVelocity = 0)
                              }
                              isMoverInCatchZone() {
                                const cB = this.parameters.iG / 2;
                                return this.moverPosition >= this.catchZonePosition - cB && this.moverPosition <= this.catchZonePosition + cB
                              }
                              updateProgress(cB) {
                                this.isMoverInCatchZone() ? this.progress += this.parameters.sG * cB : this.progress -= this.parameters.pG * cB, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.yE && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
                              }
                              complete(cB) {
                                this.isCompleted = !0, this.resolveRequest(cB)
                              }
                              getState() {
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    catchZonePosition: this.catchZonePosition,
                                    iG: this.parameters.iG,
                                    moverPosition: this.moverPosition,
                                    progress: this.progress,
                                    isCatching: this.isMoverInCatchZone()
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            },
                            precisionBar: class {
                              constructor(cB, Bc, nc) {
                                var Vc, Ic, uc, sc, Mc;
                                this.resolveRequest = Bc, this.tearDownNotification = nc, this.startTime = void 0, this.speed = void 0, this.lG = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
                                const Pc = cB;
                                this.parameters = {
                                  ...Pc,
                                  speed: null !== (Vc = Pc.speed) && void 0 !== Vc ? Vc : .5,
                                  lG: rB.b.clamp(Pc.lG, .05, 1),
                                  label: null !== (Ic = Pc.label) && void 0 !== Ic ? Ic : [{
                                    str: "Click when the marker is within the green zone."
                                  }],
                                  icon: null !== (uc = Pc.icon) && void 0 !== uc ? uc : null,
                                  scale: null !== (sc = Pc.scale) && void 0 !== sc ? sc : 1,
                                  rotation: null !== (Mc = Pc.rotation) && void 0 !== Mc ? Mc : 0
                                }, this.speed = this.parameters.speed, this.lG = this.parameters.lG, this.startTime = Date.now()
                              }
                              handleMouseInput(cB) {
                                if (cB) {
                                  this.updateMarkerPosition();
                                  const cB = Math.abs(this.markerPosition - .5) <= this.lG / 2;
                                  this.complete(cB)
                                }
                              }
                              handleTick() {
                                this.isCompleted || this.updateMarkerPosition()
                              }
                              updateMarkerPosition() {
                                const cB = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
                                this.markerPosition = cB <= .5 ? 2 * cB : 2 - 2 * cB
                              }
                              complete(cB) {
                                this.isCompleted = !0, this.resolveRequest(cB)
                              }
                              getState() {
                                return this.updateMarkerPosition(), {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    markerPosition: this.markerPosition
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            },
                            rhythmClick: class {
                              constructor(cB, Bc, nc) {
                                this.resolveRequest = Bc, this.tearDownNotification = nc, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = cB, this.shrinkStartTime = Date.now()
                              }
                              handleMouseInput(cB) {
                                if (!cB || this.isCompleted) return;
                                const Bc = this.getOuterCircleProgress();
                                if (Bc <= this.parameters.JG && Bc >= -this.parameters.JG) {
                                  if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.QG) return void this.complete(!0)
                                } else this.handleMiss();
                                this.shrinkStartTime = Date.now()
                              }
                              handleMiss() {
                                this.misses++, this.lastClickResult = !1, !(0, uc.E)(this.parameters.i4) && this.misses > this.parameters.i4 ? this.complete(!1) : this.shrinkStartTime = Date.now()
                              }
                              handleTick() {
                                if (this.isCompleted) return;
                                this.getOuterCircleProgress() < -this.parameters.JG && this.handleMiss()
                              }
                              getOuterCircleProgress() {
                                return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.WG
                              }
                              complete(cB) {
                                this.isCompleted = !0, this.resolveRequest(cB)
                              }
                              getState() {
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    outerCircleProgress: this.getOuterCircleProgress(),
                                    successes: this.successes,
                                    QG: this.parameters.QG,
                                    misses: this.misses,
                                    lastClickResult: this.lastClickResult
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            }
                          };

                          function yB() {
                            (0, qB.h)(sc.x.Qte, tB ? sc.x.Qte : 0), tB ? Ic.i.Vu("qteStateUpdated", tB.getState()) : Ic.i.Vu("qteStateUpdated", {
                              type: null,
                              typeSpecificParameters: null,
                              isActive: !1
                            })
                          }
                          class zB {
                            constructor(cB, Bc) {
                              this.resultPromise = cB, this.tearDownQTE = Bc
                            }
                            static create(cB, Bc, nc) {
                              const Vc = Promise.race([cB, Bc]);
                              return new zB(Vc, nc)
                            }
                            async getResult() {
                              return await this.resultPromise
                            }
                          }
                          class pc {
                            static queueQTE(cB, Bc, nc) {
                              let Vc, Ic;
                              const rB = new Promise((cB => {
                                  Vc = cB
                                })),
                                uc = new Promise((cB => {
                                  Ic = () => {
                                    cB("qteTornDown")
                                  }
                                })),
                                sc = Promise.race([rB, uc]).then((() => {})),
                                Mc = new Oc(cB, Bc, nc, Ic, sc, Vc);
                              return ec.set(cB, Mc), mB.enqueue(Mc), tB || this.processNextQTE(), zB.create(rB, uc, Ic)
                            }
                            static async processNextQTE() {
                              if (tB || mB.hV()) return void(mB.hV() && tB && (tB = null, yB()));
                              const cB = await mB.dequeue();
                              if (!ec.has(cB.id)) return void await this.processNextQTE();
                              ec.delete(cB.id);
                              const Bc = new fc(cB.id, cB.type, cB.parameters, cB.resolveRequest, cB.onDonePromise, cB.tearDownNotification);
                              tB = Bc, yB();
                              try {
                                await Bc.waitUntilDone()
                              } catch (nc) {
                                console.error("Error while waiting for QTE to resolve:", nc.stack)
                              }
                              tB === Bc && (tB.cleanup(), tB = null, yB()), await this.processNextQTE()
                            }
                            static cancelQTE(cB) {
                              if (tB && tB.id === cB) return tB.tearDown(), tB = null, yB(), void this.processNextQTE();
                              const Bc = ec.get(cB);
                              Bc && (ec.delete(cB), Bc.tearDownNotification())
                            }
                            static getCurrentState() {
                              return tB ? tB.getState() : {
                                type: null,
                                parameters: null,
                                state: null,
                                isActive: !1
                              }
                            }
                            static reset() {
                              tB && (tB.tearDown(), tB = null), ec.forEach(((cB, Bc) => {
                                this.cancelQTE(Bc)
                              })), mB.emptyQueue(), ec.clear(), yB()
                            }
                          }
                        }, 3907: (cB, Bc, nc) => {
                          nc.d(Bc, {
                            Howl: () => Vc.Howl,
                            d: () => Vc.Howler
                          });
                          var Vc = nc(3909);
                          Vc.Howler._mobileUnloaded = !0
                        }, 3914: (cB, Bc, nc) => {
                          function Vc(cB) {
                            return {
                              notAfter: cB
                            }
                          }
                          nc.d(Bc, {
                            c: () => Mc,
                            e: () => Pc,
                            f: () => sc,
                            i: () => Vc,
                            l: () => Ic,
                            p: () => rB,
                            s: () => uc,
                            v: () => qB,
                            y: () => Oc
                          });
                          const Ic = Vc("\\w$."),
                            rB = Vc("\\w.,");

                          function uc(cB) {
                            return Bc => Mc(Bc, cB)
                          }

                          function sc(cB) {
                            return Bc => !cB.test(Bc.input.slice(0, Bc.index))
                          }

                          function Mc(cB, Bc) {
                            return cB.index > 0 && new RegExp(`[${Bc}]`).test(cB.input[cB.index - 1])
                          }

                          function Pc(cB, Bc, nc) {
                            return function(cB) {
                              return void 0 !== cB && "function" !== typeof cB
                            }(nc) ? function(cB, Bc, nc) {
                              const Vc = Bc.flags.replace(/[gy]/g, ""),
                                Ic = new RegExp(`[^${nc}](?:${Bc.source})`, `${Vc}g`),
                                rB = [],
                                uc = nc => {
                                  const Vc = nc.index + nc[0].length;
                                  return ("" === nc[0] ? Tc(cB, Bc, Vc) : Vc) - 1
                                },
                                sc = new RegExp(`(?:${Bc.source})`, `${Vc}y`).exec(cB);
                              if (sc) {
                                if (rB.push(sc), !Bc.global) return rB;
                                Ic.lastIndex = uc(sc)
                              }
                              for (let Mc = Ic.exec(cB); Mc; Mc = Ic.exec(cB)) {
                                const nc = Tc(cB, Bc, Mc.index) - Mc.index;
                                if (Mc[0] = Mc[0].slice(nc), Mc.index += nc, rB.push(Mc), !Bc.global) break;
                                Ic.lastIndex = uc(Mc)
                              }
                              return rB
                            }(cB, Bc, nc.notAfter) : function(cB, Bc, nc) {
                              const Vc = new RegExp(Bc.source, `${Bc.flags.replace(/[gy]/g,"")}g`),
                                Ic = [];
                              for (let rB = Vc.exec(cB); rB; rB = Vc.exec(cB))
                                if (!nc || nc(rB)) {
                                  if (Ic.push(rB), !Bc.global) break;
                                  "" === rB[0] && (Vc.lastIndex = Tc(cB, Bc, Vc.lastIndex))
                                } else Vc.lastIndex = Tc(cB, Bc, rB.index);
                              return Ic
                            }(cB, Bc, nc)
                          }

                          function qB(cB, Bc, nc, Vc) {
                            let Ic = "",
                              rB = 0;
                            for (const uc of Pc(cB, Bc, nc)) Ic += cB.slice(rB, uc.index) + Vc(uc), rB = uc.index + uc[0].length;
                            return Ic + cB.slice(rB)
                          }

                          function Oc(cB, Bc, nc) {
                            const Vc = [];
                            let Ic = 0;
                            for (const rB of Pc(cB, Bc, nc)) Vc.push(cB.slice(Ic, rB.index)), Ic = rB.index + rB[0].length;
                            return [...Vc, cB.slice(Ic)]
                          }

                          function Tc(cB, Bc, nc) {
                            var Vc;
                            return nc + (Bc.unicode && (null !== (Vc = cB.codePointAt(nc)) && void 0 !== Vc ? Vc : 0) > 65535 ? 2 : 1)
                          }
                        }, 3855: (cB, Bc, nc) => {
                          nc.d(Bc, {
                            b: () => Mc,
                            f: () => rB,
                            j: () => sc
                          });
                          var Vc = nc(1927),
                            Ic = nc(3857);

                          function rB(cB) {
                            let {
                              action: Bc,
                              flags: nc
                            } = cB;
                            return "mid-fire" === Bc && 0 !== (nc & Vc.d.AltLeftClick)
                          }
                          const uc = new Set;

                          function sc(cB) {
                            return uc.add(cB), () => {
                              uc.delete(cB)
                            }
                          }

                          function Mc(cB) {
                            const Bc = Ic.e[255 & cB];
                            if (void 0 === Bc) return;
                            const nc = cB >>> 8 & 255,
                              rB = {
                                action: Bc,
                                down: 0 !== (nc & Vc.d.Down),
                                flags: nc,
                                press: cB >>> 16
                              };
                            for (const Vc of uc) Vc(rB)
                          }
                        }, 3874: (cB, Bc, nc) => {
                          nc.d(Bc, {
                            C: () => fc,
                            b: () => Ic,
                            e: () => Mc,
                            g: () => rB,
                            j: () => uc,
                            m: () => sc,
                            o: () => tB,
                            s: () => qB,
                            v: () => Oc,
                            z: () => ec
                          });
                          var Vc = nc(1406);
                          const Ic = 24e3,
                            rB = "/docs/llms.txt",
                            uc = `${Vc.b}${rB}`,
                            sc = "/llms.txt",
                            Mc = "/docs/llms-full.txt";

                          function Pc(cB) {
                            return cB || "index"
                          }

                          function qB(cB) {
                            return `/docs/${Pc(cB)}.md`
                          }

                          function Oc(cB, Bc) {
                            return `/docs/${Pc(cB)}/${Bc+1}.md`
                          }
                          const Tc = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function fc(cB) {
                            const Bc = Tc.exec(cB);
                            return null === Bc ? null : {
                              name: Bc[1],
                              part: void 0 === Bc[2] ? null : Number(Bc[2])
                            }
                          }
                          const mB = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function ec(cB) {
                            const Bc = mB.exec(cB);
                            if (null === Bc) return null;
                            const [, nc = "", Vc] = Bc;
                            return void 0 === Vc ? qB(nc) : Oc(nc, Number(Vc) - 1)
                          }

                          function tB(cB) {
                            return `/docsHtml/${Pc(cB)}.html`
                          }
                        }
                      }; Object.freeze(modules);
                      for (const cB in modules) Object.freeze(modules[cB]);