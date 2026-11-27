export const id = 94;
export const ids = [94, 110];
export const modules = {
    5642: (rr, Sr, Qr) => {
      Qr.d(Sr, {
        c: () => hr,
        e: () => zr
      });
      var Zr = Qr(1155),
        Wr = Qr.n(Zr),
        ar = Qr(72),
        jr = Qr(1251),
        Ir = Qr(5649),
        fr = Qr(2057),
        Er = Qr(3404),
        pr = Qr(5658),
        xr = Qr(1338);
      const mr = new WeakMap;
      let Nr = 0;

      function Ur(rr) {
        let Sr = mr.get(rr);
        return void 0 === Sr && (Sr = Nr++, mr.set(rr, Sr)), Sr
      }

      function tr(rr) {
        let {
          piece: Sr
        } = rr;
        return "space" === Sr.kind ? (0, xr.jsx)(xr.Fragment, {
          children: Sr.text
        }) : (0, xr.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${Sr.delayMs}ms`
          },
          children: (0, xr.jsx)(Ir.e, {
            text: "icon" === Sr.kind ? `[[${Sr.icon}]]` : Sr.text
          })
        })
      }

      function hr(rr) {
        let {
          display: Sr
        } = rr;
        const {
          selectedLanguage: Qr
        } = (0, jr.E)(), Zr = (0, ar.useMemo)((() => (0, pr.d)((0, pr.h)(Sr).plan.pieces)), [Sr, Qr.code]);
        return (0, xr.jsxs)("div", {
          className: Wr()("Dialogue", {
            DialogueAnimateIn: !1 !== Sr.animateIn
          }),
          children: [Sr.speakerName && (0, xr.jsx)(fr.c, {
            text: Sr.speakerName,
            className: "DialogueSpeaker"
          }), (0, xr.jsx)("p", {
            className: "DialogueLine",
            children: Zr.map(((rr, Sr) => 1 === rr.length && "space" === rr[0].kind ? rr[0].text : (0, xr.jsx)("span", {
              className: "DialogueGlue",
              children: rr.map(((rr, Sr) => (0, xr.jsx)(tr, {
                piece: rr
              }, Sr)))
            }, Sr)))
          })]
        })
      }
      const zr = (0, ar.memo)((function() {
        const rr = (0, Er.l)("dialogue");
        return (0, xr.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: rr && (0, xr.jsx)(hr, {
            display: rr
          }, Ur(rr))
        })
      }))
    },
    5531: (rr, Sr, Qr) => {
        Qr.r(Sr), Qr.d(Sr, {
          default: () => ua
        });
        var Zr = Qr(72),
          Wr = Qr(1155),
          ar = Qr.n(Wr),
          jr = Qr(1651),
          Ir = Qr(1653),
          fr = Qr(26),
          Er = Qr(92),
          pr = Qr(5538),
          xr = Qr(5553),
          mr = Qr(5562),
          Nr = Qr(5063),
          Ur = Qr(1338);
        const tr = "/textures/docs/icons";

        function hr(rr) {
          let {
            name: Sr,
            isTinted: Qr,
            className: Zr,
            style: Wr
          } = rr;
          const jr = `${tr}/${Sr}.png`;
          return Qr ? (0, Ur.jsxs)("span", {
            className: ar()("DocsPixelIcon", "Tinted", Zr),
            "aria-hidden": "true",
            style: Wr,
            children: [(0, Ur.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${jr}")`,
                WebkitMaskImage: `url("${jr}")`
              }
            }), (0, Ur.jsx)("img", {
              src: jr,
              alt: ""
            })]
          }) : (0, Ur.jsx)("img", {
            className: ar()("DocsPixelIcon", Zr),
            src: jr,
            alt: "",
            "aria-hidden": "true",
            style: Wr
          })
        }
        const zr = 1500;

        function Yr() {
          const [rr, Sr] = (0, Zr.useState)(null);
          (0, Zr.useEffect)((() => {
            if (null === rr) return;
            const Qr = setTimeout((() => {
              Sr(null)
            }), zr);
            return () => {
              clearTimeout(Qr)
            }
          }), [rr]);
          return [rr, rr => {
            (0, Nr.b)(rr).then((() => {
              Sr({
                text: rr,
                failed: !1
              })
            }), (Qr => {
              console.error("Could not copy to the clipboard", Qr), Sr({
                text: rr,
                failed: !0
              })
            }))
          }]
        }

        function nr(rr) {
          let {
            text: Sr,
            label: Qr,
            className: Zr
          } = rr;
          const [Wr, jr] = Yr(), Ir = !1 === (null === Wr || void 0 === Wr ? void 0 : Wr.failed);
          return (0, Ur.jsxs)("button", {
            type: "button",
            className: ar()("DocsCopyButton", Zr, {
              Copied: Ir
            }),
            title: "Copy to clipboard",
            "aria-label": Qr ? void 0 : `Copy ${Sr}`,
            onClick: rr => {
              rr.stopPropagation(), jr(Sr)
            },
            children: [(0, Ur.jsx)(hr, {
              name: Ir ? "check" : "copy"
            }), Qr && (0, Ur.jsx)("span", {
              children: Ir ? "Copied" : null !== Wr && void 0 !== Wr && Wr.failed ? "Copy failed" : Qr
            })]
          })
        }
        pr.d.registerLanguage("javascript", xr.d), pr.d.registerLanguage("typescript", mr.c);
        const er = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Kr = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          yr = 24;

        function Br(rr) {
          let {
            code: Sr,
            lang: Qr,
            compact: Wr = !1
          } = rr;
          const jr = (0, Zr.useMemo)((() => function(rr, Sr) {
              const Qr = er[Sr];
              return Qr ? pr.d.highlight(rr, {
                language: Qr
              }).value : rr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(Sr, Qr)), [Sr, Qr]),
            Ir = Sr.split("\n").length,
            fr = !Wr && Ir > yr + 6,
            [Er, xr] = (0, Zr.useState)(!1),
            mr = er[Qr];
          return (0, Ur.jsxs)("div", {
            className: ar()("DocsCodeBlock", {
              Compact: Wr,
              Collapsed: fr && !Er
            }),
            children: [!Wr && (0, Ur.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, Ur.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: mr ? Kr[mr] : "Text"
              }), (0, Ur.jsx)(nr, {
                text: Sr,
                label: "Copy"
              })]
            }), (0, Ur.jsx)("pre", {
              children: (0, Ur.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: jr
                }
              })
            }), fr && (0, Ur.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Er,
              onClick: () => {
                xr(!Er)
              },
              children: [(0, Ur.jsx)(hr, {
                name: Er ? "chevron-up" : "chevron-down"
              }), Er ? "Show less" : `Show all ${Ir} lines`]
            })]
          })
        }
        var Tr = Qr(5564);
        var vr = Qr(5566);
        const Or = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Lr(rr) {
          const Sr = new Map;
          let Qr, Zr = [],
            Wr = !1;
          const ar = () => {
            Qr && Sr.set(Qr.name, Qr.lines.join("\n").trimEnd())
          };
          for (const jr of rr.split("\n")) {
            const rr = jr.match(Or);
            Wr || jr.startsWith("/*") ? (Wr || (ar(), Qr = void 0), Zr.push(jr), Wr = !jr.includes("*/")) : rr ? (ar(), Qr = {
              name: rr[1],
              lines: [...Zr, jr]
            }, Zr = []) : Qr && (jr.startsWith(" ") || jr.startsWith("\t") || /^[}\])|]/.test(jr)) ? Qr.lines.push(jr) : Qr && "" !== jr.trim() && (ar(), Qr = void 0)
          }
          return ar(), Sr
        }

        function lr(rr) {
          return "methods" === rr || "callbacks" === rr || "settings" === rr
        }
        const Xr = {
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
              setterSnippet: (rr, Sr) => `api.setClientOption(playerId, "${rr}", ${Sr})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (rr, Sr) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${rr}", ${Sr})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (rr, Sr) => `api.setMobSetting(mobId, "${rr}", ${Sr})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (rr, Sr) => `api.setVehicleSetting(vehicleId, "${rr}", ${Sr})`
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
          Pr = {
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

        function Hr(rr) {
          return rr.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function qr(rr) {
          let Sr = !1;
          return rr.split("\n").map((rr => (rr.startsWith("```") && (Sr = !Sr), !Sr && /^#{3,} /.test(rr) ? rr.slice(1) : rr))).join("\n")
        }

        function Rr(rr) {
          return "readme" === rr ? "getting-started" : Hr(rr)
        }
        const gr = "## Glossary of Referenced Types";
        const Cr = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...vr.e.flatMap((rr => {
            const Sr = {
              id: rr.id,
              slug: Rr(rr.id),
              title: rr.title,
              markdown: rr.content,
              ...Xr[rr.id]
            };
            if ("readme" === rr.id) return function(rr) {
              const Sr = rr.markdown.indexOf(gr),
                Qr = rr.markdown.indexOf("\n```", Sr),
                Zr = rr.markdown.indexOf("\n```", Qr + 1);
              if (-1 === Sr || -1 === Qr || -1 === Zr) throw new Error(`Getting started has no "${gr}" section with a code block`);
              const Wr = rr.markdown.slice(Sr + 31, Qr).trim(),
                ar = [...Lr(rr.markdown.slice(rr.markdown.indexOf("\n", Qr + 1) + 1, Zr))].map((rr => {
                  let [Sr, Qr] = rr;
                  return `## ${Sr}\n\n\`\`\`ts\n${Qr}\n\`\`\`\n`
                })),
                jr = rr.markdown.slice(rr.markdown.indexOf("\n", Zr + 1) + 1);
              return [{
                ...rr,
                markdown: `${rr.markdown.slice(0,Sr)}${jr}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Wr}\n\n${ar.join("\n")}`
              }]
            }(Sr);
            if ("howTo" === rr.id) {
              const {
                parent: rr,
                guides: Qr
              } = function(rr) {
                const [Sr, ...Qr] = rr.markdown.split(/^(?=## )/m), Zr = [Sr], Wr = [];
                for (const jr of Qr) {
                  var ar;
                  const Sr = jr.indexOf("\n"),
                    Qr = jr.slice(3, Sr).trim(),
                    Ir = jr.slice(Sr + 1);
                  if (!Ir.includes("```")) {
                    Zr.push(jr);
                    continue
                  }
                  const fr = null !== (ar = Pr[Qr]) && void 0 !== ar ? ar : {
                    icon: "lightbulb",
                    summary: `How to use ${Qr.toLowerCase()} in World Code.`
                  };
                  Wr.push({
                    id: `${rr.id}${Qr.split(/[^A-Za-z0-9]+/).map((rr=>rr.charAt(0).toUpperCase()+rr.slice(1))).join("")}`,
                    slug: `${rr.slug}-${Hr(Qr)}`,
                    title: Qr,
                    layout: "article",
                    sourceAnchor: (0, Tr.o)(Qr),
                    markdown: `# ${Qr}\n\n${qr(Ir)}`,
                    ...fr
                  })
                }
                return {
                  parent: {
                    ...rr,
                    markdown: Zr.join(""),
                    childPageIds: Wr.map((rr => rr.id))
                  },
                  guides: Wr
                }
              }(Sr);
              return [rr, ...Qr]
            }
            return [Sr]
          }))],
          Mr = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Cr.filter((rr => void 0 !== rr.sourceAnchor)).map((rr => rr.id))]
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

        function Gr(rr) {
          return Cr.find((Sr => Sr.id === rr))
        }
        const kr = new Map;

        function Ar(rr) {
          let Sr = kr.get(rr.id);
          return Sr || (Sr = (0, Tr.t)(rr.markdown, "changelog" === rr.layout ? 3 : 2), kr.set(rr.id, Sr)), Sr
        }

        function Vr(rr, Sr) {
          return Ar(rr).sections.some((rr => rr.heading.anchor === Sr || rr.blocks.some((rr => "heading" === rr.kind && rr.anchor === Sr))))
        }

        function ir(rr) {
          const [Sr, ...Qr] = rr.replace(/^#/, "").split("-"), Zr = Cr.find((rr => rr.id === Sr));
          if (!Zr) return null;
          const Wr = Qr.length > 0 ? (0, Tr.o)(Qr.join("-")) : "";
          for (const jr of null !== (ar = Zr.childPageIds) && void 0 !== ar ? ar : []) {
            var ar;
            const rr = Gr(jr);
            if (rr.sourceAnchor === Wr) return {
              page: rr,
              anchor: ""
            };
            if (Vr(rr, Wr)) return {
              page: rr,
              anchor: Wr
            }
          }
          return {
            page: Zr,
            anchor: Wr
          }
        }
        const wr = {
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

        function cr(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Zr = Sr.slug ? `${rr}/${Sr.slug}` : rr;
          return Qr ? `${Zr}#${Qr}` : Zr
        }
        var Fr = Qr(5577);
        const or = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          br = new Set(["GameApi", "Console", "_TypeOf"]),
          Jr = 4;

        function Dr(rr) {
          let Sr = rr.length;
          for (; Sr > 0 && "" === rr[Sr - 1].trim();) Sr--;
          return rr.slice(0, Sr)
        }

        function dr(rr) {
          var Sr;
          const Qr = Dr(rr);
          if (null === (Sr = Qr.at(-1)) || void 0 === Sr || !Sr.trimEnd().endsWith("*/")) return {
            lines: Qr,
            doc: ""
          };
          const Zr = Qr.findLastIndex((rr => rr.startsWith("/**")));
          return -1 === Zr ? {
            lines: Qr,
            doc: ""
          } : {
            lines: Dr(Qr.slice(0, Zr)),
            doc: Qr.slice(Zr).join("\n")
          }
        }

        function sr(rr) {
          var Sr;
          const Qr = rr.split("\n"),
            Zr = Qr.flatMap(((rr, Sr) => or.test(rr) ? [Sr] : []));
          let Wr = dr(Qr.slice(0, null !== (Sr = Zr[0]) && void 0 !== Sr ? Sr : Qr.length)).doc;
          return Zr.map(((rr, Sr) => {
            var ar;
            const jr = dr(Qr.slice(rr, null !== (ar = Zr[Sr + 1]) && void 0 !== ar ? ar : Qr.length)),
              Ir = {
                name: Qr[rr].match(or)[1],
                doc: Wr,
                lines: jr.lines
              };
            return Wr = jr.doc, Ir
          }))
        }

        function ur(rr) {
          var Sr;
          const Qr = rr.match(/^readonly \[([\s\S]*)\]$/);
          return Qr ? null !== (Sr = Qr[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Sr ? Sr : [] : null
        }

        function rS(rr) {
          if (!rr.startsWith("{") || !rr.endsWith("}")) return null;
          const Sr = {
              keys: [],
              values: []
            },
            Qr = rr => {
              const Qr = rr.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              Qr && (Sr.keys.push(Qr[1].startsWith('"') ? Qr[1] : `"${Qr[1]}"`), Sr.values.push(Qr[2].trim()))
            };
          let Zr = 0,
            Wr = "";
          for (const ar of rr.slice(1, -1)) "{[(".includes(ar) ? Zr++ : "}])".includes(ar) && Zr--, ";" === ar && 0 === Zr ? (Qr(Wr), Wr = "") : Wr += ar;
          return Qr(Wr), Sr
        }

        function SS(rr) {
          return rr.length > Jr ? `\n\t| ${rr.join("\n\t| ")}` : rr.join(" | ")
        }

        function QS(rr, Sr) {
          const Qr = function(rr, Sr) {
            return rr.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((rr, Qr) => {
              var Zr;
              const Wr = null === (Zr = Sr.get(Qr)) || void 0 === Zr ? void 0 : Zr.object;
              return Wr ? SS(Wr.values) : rr
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((rr, Qr) => {
              var Zr, Wr;
              const ar = null === (Zr = Sr.get(Qr)) || void 0 === Zr || null === (Wr = Zr.object) || void 0 === Wr ? void 0 : Wr.values.map(ur);
              return null !== ar && void 0 !== ar && ar.every((rr => null !== rr)) ? SS([...new Set(ar.flat())]) : rr
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((rr, Qr) => {
              var Zr;
              const Wr = null === (Zr = Sr.get(Qr)) || void 0 === Zr ? void 0 : Zr.members;
              return Wr ? SS(Wr) : rr
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((rr, Qr) => {
              var Zr;
              const Wr = null === (Zr = Sr.get(Qr)) || void 0 === Zr ? void 0 : Zr.object;
              return Wr ? SS(Wr.keys) : rr
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((rr, Qr) => {
              var Zr, Wr;
              return null !== (Zr = null === (Wr = Sr.get(Qr)) || void 0 === Wr ? void 0 : Wr.text) && void 0 !== Zr ? Zr : rr
            }))
          }(rr.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), Sr);
          return [rr.doc, Qr].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function ZS(rr) {
          const Sr = sr(rr),
            Qr = function(rr) {
              const Sr = new Map,
                Qr = rr.find((rr => "_TypeOf" === rr.name));
              let Zr = null;
              const Wr = () => {
                if (Zr) {
                  const rr = Zr.lines.join("\n");
                  Sr.set(Zr.name, {
                    text: rr,
                    members: ur(rr),
                    object: rS(rr)
                  })
                }
              };
              for (const ar of Qr.lines.slice(1, -1)) {
                const rr = ar.match(/^\t([\w$]+): (.+)$/);
                rr ? (Wr(), Zr = {
                  name: rr[1],
                  lines: [rr[2]]
                }) : Zr && Zr.lines.push(ar.replace(/^\t/, ""))
              }
              return Wr(), Sr
            }(Sr),
            Zr = new Map;
          for (const Wr of Sr) br.has(Wr.name) || Zr.has(Wr.name) || Zr.set(Wr.name, QS(Wr, Qr));
          return Zr
        }
        let WS, aS, jS;

        function IS() {
          return aS ??= function(rr) {
            const Sr = sr(rr).find((rr => "GameApi" === rr.name)),
              Qr = new Map,
              Zr = Sr.lines;
            for (let ar = 0; ar < Zr.length; ar++) {
              var Wr;
              if (!Zr[ar].trimStart().startsWith("/**")) continue;
              const rr = ar;
              for (; ar < Zr.length && !Zr[ar].includes("*/");) ar++;
              const Sr = null === (Wr = Zr[ar + 1]) || void 0 === Wr ? void 0 : Wr.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!Sr) continue;
              let jr = null;
              const Ir = [];
              let fr = "description",
                Er = !1;
              for (const Qr of Zr.slice(rr, ar + 1).join("\n").split("\n").map((rr => rr.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const rr = Qr.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                rr ? (jr = rr[1].trim(), fr = "deprecation") : Qr.startsWith("@") ? (fr = "otherTag", Er = !0) : "" === Qr.trim() ? Er || (fr = "description", Ir.push(Qr)) : "deprecation" !== fr || /^[A-Z]/.test(Qr.trim()) ? "otherTag" !== fr && (fr = "description", Ir.push(Qr)) : jr = `${jr} ${Qr.trim()}`.trim()
              }
              Qr.set(Sr[1], {
                deprecation: jr,
                description: Ir.join("\n").trim()
              })
            }
            return Qr
          }(Fr.default), aS
        }

        function fS() {
          if (!jS) {
            jS = new Map;
            for (const rr of Cr) {
              const Sr = (0, Tr.r)(Ar(rr)).flatMap((rr => rr.blocks));
              for (const rr of (0, Tr.i)(Sr))
                if ("ts" === rr.lang || "typescript" === rr.lang)
                  for (const [Sr, Qr] of Lr(rr.code)) jS.set(Sr, Qr)
            }
            for (const [rr, Sr] of(WS ??= ZS(Fr.default), WS)) jS.has(rr) || jS.set(rr, Sr)
          }
          return jS
        }
        const ES = {
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
        let pS;

        function xS() {
          if (!pS) {
            pS = new Map;
            for (const rr of Cr)
              if (lr(rr.layout))
                for (const Sr of Ar(rr).sections) pS.has(Sr.heading.text) || pS.set(Sr.heading.text, {
                  pageId: rr.id,
                  anchor: Sr.heading.anchor
                })
          }
          return pS
        }

        function mS(rr) {
          const Sr = rr.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return Sr ? xS().get(Sr[1]) : void 0
        }
        const NS = (0, Zr.createContext)("/docs"),
          US = (0, Zr.createContext)(null),
          tS = (0, Zr.createContext)(!1),
          hS = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function zS(rr) {
          const Sr = rr.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return Sr ? Sr[1] : null
        }

        function YS(rr) {
          let {
            colour: Sr
          } = rr;
          return (0, Ur.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: Sr
            },
            "aria-hidden": "true"
          })
        }

        function nS(rr) {
          const Sr = [];
          let Qr = 0;
          for (const Zr of rr.matchAll(hS)) Sr.push(rr.slice(Qr, Zr.index), (0, Ur.jsx)(YS, {
            colour: Zr[0]
          }), Zr[0]), Qr = Zr.index + Zr[0].length;
          return Sr.push(rr.slice(Qr)), Sr
        }

        function eS(rr) {
          let {
            href: Sr,
            children: Qr
          } = rr;
          const Wr = (0, Zr.useContext)(NS);
          if (Sr.startsWith("#")) {
            const rr = ir(Sr);
            if (rr) return (0, Ur.jsx)(jr.d, {
              to: cr(Wr, rr.page, rr.anchor),
              children: (0, Ur.jsx)(tS.Provider, {
                value: !0,
                children: Qr
              })
            })
          }
          return (0, Ur.jsx)("a", {
            href: Sr,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, Ur.jsx)(tS.Provider, {
              value: !0,
              children: Qr
            })
          })
        }

        function KS(rr) {
          let {
            code: Sr
          } = rr;
          const Qr = (0, Zr.useContext)(NS);
          if ((0, Zr.useContext)(tS)) return (0, Ur.jsx)("code", {
            className: "DocsInlineCode",
            children: Sr
          });
          if (fS().has(Sr)) return (0, Ur.jsx)(vS, {
            type: Sr
          });
          const Wr = mS(Sr);
          if (Wr) return (0, Ur.jsx)(jr.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: cr(Qr, Gr(Wr.pageId), Wr.anchor),
            children: Sr
          });
          const ar = zS(Sr);
          return (0, Ur.jsxs)("code", {
            className: "DocsInlineCode",
            children: [ar && (0, Ur.jsx)(YS, {
              colour: ar
            }), Sr]
          })
        }

        function yS(rr) {
          let {
            text: Sr
          } = rr;
          const Qr = [];
          let Wr = 0;
          for (const Zr of Sr.matchAll(Tr.e)) {
            Zr.index > Wr && Qr.push(...nS(Sr.slice(Wr, Zr.index)));
            const [, rr, ar, jr, Ir, fr] = Zr;
            rr ? Qr.push((0, Ur.jsx)(KS, {
              code: (0, Tr.j)(rr, ar)
            })) : jr ? Qr.push((0, Ur.jsx)("strong", {
              children: (0, Ur.jsx)(yS, {
                text: jr
              })
            })) : Qr.push((0, Ur.jsx)(eS, {
              href: fr,
              children: (0, Ur.jsx)(yS, {
                text: Ir
              })
            })), Wr = Zr.index + Zr[0].length
          }
          return Wr < Sr.length && Qr.push(...nS(Sr.slice(Wr))), (0, Ur.jsx)(Ur.Fragment, {
            children: Qr.map(((rr, Sr) => (0, Ur.jsx)(Zr.Fragment, {
              children: rr
            }, Sr)))
          })
        }
        const BS = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          TS = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function vS(rr) {
          let {
            type: Sr
          } = rr;
          const Qr = fS(),
            Wr = [];
          for (const Zr of Sr.trim().matchAll(BS)) {
            const [rr, Sr, ar, jr, Ir] = Zr;
            Sr ? Wr.push((0, Ur.jsx)("span", {
              className: "DocsTypeString",
              children: rr
            })) : ar && Qr.has(ar) ? Wr.push((0, Ur.jsx)(PS, {
              name: ar,
              definition: Qr.get(ar)
            })) : ar ? Wr.push((0, Ur.jsx)("span", {
              className: TS.has(ar) ? "DocsTypeKeyword" : "DocsTypeName",
              children: rr
            })) : jr ? Wr.push((0, Ur.jsx)("span", {
              className: "DocsTypeNumber",
              children: rr
            })) : Ir ? Wr.push(" ") : Wr.push((0, Ur.jsx)("span", {
              className: "DocsTypePunctuation",
              children: rr
            }))
          }
          return (0, Ur.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Wr.map(((rr, Sr) => (0, Ur.jsx)(Zr.Fragment, {
              children: rr
            }, Sr)))
          })
        }
        const OS = 480,
          LS = 6,
          lS = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let XS = 0;

        function PS(rr) {
          let {
            name: Sr,
            definition: Qr
          } = rr;
          const Wr = (0, Zr.useContext)(NS),
            ar = ES[Sr],
            Ir = (0, Zr.useRef)(null),
            fr = (0, Zr.useRef)(null),
            pr = (0, Zr.useRef)(null),
            [xr, mr] = (0, Zr.useState)(!1),
            [Nr, tr] = (0, Zr.useState)(null),
            zr = (0, Zr.useRef)(),
            Yr = (0, Zr.useContext)(US),
            [nr] = (0, Zr.useState)((() => "DocsTypePopover-" + XS++)),
            er = () => {
              clearTimeout(zr.current), mr(!0)
            },
            Kr = () => {
              clearTimeout(zr.current), zr.current = setTimeout((() => {
                mr(!1)
              }), 120)
            };
          return (0, Zr.useEffect)((() => {
            if (!xr) return;
            const rr = rr => {
              if ("Escape" === rr.key) {
                var Sr, Qr;
                if (null !== (Sr = fr.current) && void 0 !== Sr && Sr.contains(document.activeElement)) null === (Qr = Ir.current) || void 0 === Qr || Qr.focus();
                mr(!1)
              }
            };
            return document.addEventListener("keydown", rr), () => {
              document.removeEventListener("keydown", rr)
            }
          }), [xr]), (0, Zr.useEffect)((() => () => {
            clearTimeout(zr.current)
          }), []), (0, Zr.useLayoutEffect)((() => {
            if (!xr || !Ir.current || !fr.current) return void tr(null);
            const rr = Ir.current.getBoundingClientRect(),
              Sr = fr.current.offsetHeight,
              Qr = Math.min(OS, window.innerWidth - 32),
              Zr = Math.min(Math.max(16, rr.left), window.innerWidth - Qr - 16),
              Wr = rr.bottom + LS + Sr < window.innerHeight;
            tr({
              left: Zr,
              top: Wr ? rr.bottom + LS : Math.max(16, rr.top - LS - Sr)
            })
          }), [xr]), (0, Ur.jsxs)(Ur.Fragment, {
            children: [(0, Ur.jsx)("button", {
              type: "button",
              ref: Ir,
              className: "DocsTypeLink",
              "aria-expanded": xr,
              "aria-describedby": xr ? nr : void 0,
              onMouseEnter: er,
              onMouseLeave: Kr,
              onFocus: er,
              onBlur: Kr,
              onKeyDown: rr => {
                "Tab" === rr.key && !rr.shiftKey && pr.current && (rr.preventDefault(), pr.current.focus())
              },
              onClick: er,
              children: Sr
            }), xr && (0, Er.createPortal)((0, Ur.jsxs)("span", {
              ref: fr,
              id: nr,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Nr ? {
                left: Nr.left,
                top: Nr.top,
                maxWidth: OS
              } : {
                visibility: "hidden"
              },
              onMouseEnter: er,
              onMouseLeave: Kr,
              onFocus: er,
              onBlur: Kr,
              children: [(0, Ur.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, Ur.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: Sr
                }), ar && (0, Ur.jsxs)(jr.d, {
                  ref: pr,
                  className: "DocsTypePopoverLink",
                  to: cr(Wr, Gr(ar)),
                  onClick: () => {
                    mr(!1)
                  },
                  onKeyDown: rr => {
                    if ("Tab" === rr.key) {
                      var Sr;
                      if (rr.preventDefault(), rr.shiftKey || !Ir.current || ! function(rr, Sr) {
                          const Qr = [...document.querySelectorAll(lS)],
                            Zr = Qr.slice(Qr.indexOf(rr) + 1).find((rr => rr.getClientRects().length > 0 && !(null !== Sr && void 0 !== Sr && Sr.contains(rr))));
                          return null === Zr || void 0 === Zr || Zr.focus(), void 0 !== Zr
                        }(Ir.current, fr.current)) null === (Sr = Ir.current) || void 0 === Sr || Sr.focus();
                      rr.shiftKey || mr(!1)
                    }
                  },
                  children: [Gr(ar).title, (0, Ur.jsx)(hr, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, Ur.jsx)(Br, {
                lang: "ts",
                code: Qr,
                compact: !0
              })]
            }), null !== Yr && void 0 !== Yr ? Yr : document.body)]
          })
        }
        var HS = Qr(208),
          qS = Qr(5581),
          RS = Qr(5589),
          gS = Qr(5594);
        const CS = {
          progressBar: {
            ya: 30,
            Ba: .075,
            Ta: 5,
            va: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Oa: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            la: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Xa: !0,
            scale: 3,
            rotation: 15,
            Pa: !1
          },
          gravityBar: {
            ya: 30,
            qa: .25,
            Ra: 3,
            ga: .8,
            gravity: 1,
            Ca: 1.5,
            Ma: 8,
            Ga: 4,
            va: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            Aa: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            ia: 5,
            wa: 1200,
            ca: .15,
            Fa: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var MS = Qr(360),
          GS = Qr(2140);

        function kS(rr) {
          return rr.startsWith("fa-")
        }
        const AS = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          VS = {
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

        function iS(rr) {
          return "string" === typeof rr ? "text" : "entityName" in rr || "translationKey" in rr ? "other" : (0, MS.xb)(rr) ? "progressBar" : (0, MS.wb)(rr) ? "keyBinding" : "icon" in rr ? "icon" : "str" in rr && "string" === typeof rr.str ? "text" : "other"
        }
        const wS = [{
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
          cS = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...wS],
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
                options: GS.l
              },
              isRequired: !0
            }, ...wS],
            other: []
          };

        function FS(rr) {
          return "string" === typeof rr ? {
            str: rr
          } : rr
        }

        function oS(rr, Sr) {
          let Qr = FS(rr);
          for (const Zr of Sr) Qr = Qr && "object" === typeof Qr ? Qr[Zr] : void 0;
          return Qr
        }

        function bS(rr, Sr, Qr) {
          const Zr = (rr, Wr) => {
            var ar;
            const jr = Sr[Wr],
              Ir = {
                ...rr
              };
            if (Wr === Sr.length - 1) return void 0 === Qr ? delete Ir[jr] : Ir[jr] = Qr, Ir;
            const fr = Zr(null !== (ar = rr[jr]) && void 0 !== ar ? ar : {}, Wr + 1);
            return 0 === Object.keys(fr).length ? delete Ir[jr] : Ir[jr] = fr, Ir
          };
          return function(rr) {
            const Sr = Object.keys(rr);
            return "string" === typeof rr.str && 1 === Sr.length ? rr.str : rr
          }(Zr(FS(rr), 0))
        }

        function JS(rr, Sr) {
          const Qr = iS(rr),
            Zr = cS[Qr].find((rr => rr.path.join(".") === Sr.join("."))),
            Wr = null !== Zr && void 0 !== Zr && Zr.isRequired && "other" !== Qr ? oS(VS[Qr], Sr) : void 0;
          return bS(rr, Sr, Wr)
        }

        function DS(rr) {
          switch (iS(rr)) {
            case "text":
              return String(oS(rr, ["str"]));
            case "icon":
              return String(oS(rr, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(oS(rr,["progress"])))}%`;
            case "keyBinding":
              return String(oS(rr, ["action"]));
            case "other":
              return JSON.stringify(rr)
          }
        }
        const dS = /^[A-Za-z_$][\w$]*$/;

        function sS(rr) {
          if (Array.isArray(rr)) return `[${rr.map(sS).join(", ")}]`;
          if (rr && "object" === typeof rr) {
            const Sr = Object.entries(rr).map((rr => {
              let [Sr, Qr] = rr;
              return `${dS.test(Sr)?Sr:JSON.stringify(Sr)}: ${sS(Qr)}`
            }));
            return 0 === Sr.length ? "{}" : `{ ${Sr.join(", ")} }`
          }
          return JSON.stringify(rr)
        }

        function uS(rr) {
          const Sr = rr.map(sS),
            Qr = `[${Sr.join(", ")}]`;
          return Qr.length <= 60 ? Qr : `[\n${Sr.map((rr=>`    ${rr},`)).join("\n")}\n]`
        }
        const rQ = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function SQ(rr) {
          let Sr = "";
          for (let Wr = 0; Wr < rr.length; Wr++) {
            const ar = rr[Wr];
            if ("\\" === ar) {
              var Qr;
              const Zr = null !== (Qr = rr[Wr + 1]) && void 0 !== Qr ? Qr : "";
              Sr += "'" === Zr ? "'" : ar + Zr, Wr++
            } else if ('"' === ar) Sr += '\\"';
            else {
              var Zr;
              Sr += null !== (Zr = rQ[ar]) && void 0 !== Zr ? Zr : ar
            }
          }
          return `"${Sr}"`
        }

        function QQ(rr) {
          if ("string" === typeof rr) return !0;
          if (!rr || "object" !== typeof rr || Array.isArray(rr)) return !1;
          const Sr = rr;
          return "ProgressBar" === Sr.type ? "number" === typeof Sr.progress : "StyledKeyBinding" === Sr.type ? GS.l.includes(Sr.action) : "string" === typeof Sr.icon || "string" === typeof Sr.str || "string" === typeof Sr.entityName || "string" === typeof Sr.translationKey
        }

        function ZQ(rr) {
          let Sr;
          try {
            Sr = function(rr) {
              let Sr = "",
                Qr = "",
                Zr = 0;
              const Wr = () => {
                Sr += Qr.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), Qr = ""
              };
              for (; Zr < rr.length;) {
                const ar = rr.slice(Zr).search(/["'`]|\/\//);
                if (-1 === ar) {
                  Qr += rr.slice(Zr);
                  break
                }
                Qr += rr.slice(Zr, Zr + ar);
                const jr = Zr + ar,
                  Ir = rr[jr];
                if ("/" === Ir) {
                  const Sr = rr.indexOf("\n", jr);
                  Zr = -1 === Sr ? rr.length : Sr;
                  continue
                }
                if (Wr(), "`" === Ir) throw new Error("Use quotes rather than template strings.");
                let fr = jr + 1;
                for (; fr < rr.length && rr[fr] !== Ir;) fr += "\\" === rr[fr] ? 2 : 1;
                if (fr >= rr.length) throw new Error("A string is missing its closing quote.");
                const Er = rr.slice(jr + 1, fr);
                Sr += SQ(Er), Zr = fr + 1
              }
              return Wr(), JSON.parse(Sr)
            }(rr.trim())
          } catch (Zr) {
            return {
              parts: null,
              error: Zr instanceof SyntaxError ? "This isn't a valid array yet." : Zr.message
            }
          }
          if (!Array.isArray(Sr)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const Qr = Sr.findIndex((rr => !QQ(rr)));
          return -1 !== Qr ? {
            parts: null,
            error: `Part ${Qr+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: Sr,
            error: null
          }
        }
        const WQ = 1 / HS.i.clientTicksPerSecond,
          aQ = 700,
          jQ = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          IQ = {
            progressBar: CS.progressBar.Oa,
            timedClick: CS.timedClick.icon,
            gravityBar: CS.gravityBar.icon,
            precisionBar: CS.precisionBar.icon,
            rhythmClick: CS.rhythmClick.icon
          };

        function fQ(rr) {
          let {
            type: Sr
          } = rr;
          const [Qr, Wr] = (0, Zr.useState)("ready"), [jr, Ir] = (0, Zr.useState)(1), [fr, Er] = (0, Zr.useState)(!0), pr = (0, Zr.useRef)(null), xr = (0, Zr.useRef)(null), mr = (0, Zr.useRef)(null), Nr = (0, Zr.useRef)(new Set), tr = (0, Zr.useRef)(!1), zr = IQ[Sr], Yr = (0, Zr.useMemo)((() => ({
            getState: () => {
              var rr, Sr;
              return null !== (rr = null === (Sr = mr.current) || void 0 === Sr ? void 0 : Sr.getState()) && void 0 !== rr ? rr : jQ
            },
            onFrame: rr => (Nr.current.add(rr), () => {
              Nr.current.delete(rr)
            })
          })), []);
          (0, Zr.useEffect)((() => {
            const rr = pr.current,
              Sr = xr.current;
            if (!rr || !Sr) return;
            const Qr = new ResizeObserver((() => {
              Ir(rr.clientWidth / Math.max(1, Sr.offsetWidth))
            }));
            return Qr.observe(rr), () => {
              Qr.disconnect()
            }
          }), []), (0, Zr.useEffect)((() => {
            var rr;
            if ("playing" !== Qr) return;
            let Zr = !1;
            const ar = new gS.i[Sr](CS[Sr], (rr => {
              Zr = !0, Er(!1), Wr(rr ? "succeeded" : "failed")
            }), (() => {}));
            mr.current = ar;
            let jr = 0,
              Ir = performance.now(),
              fr = requestAnimationFrame((function rr(Sr) {
                for (jr += Math.min(.25, (Sr - Ir) / 1e3), Ir = Sr; jr >= WQ && !Zr;) jr -= WQ, ar.handleTick(WQ);
                for (const Qr of Nr.current) Qr();
                Zr || (fr = requestAnimationFrame(rr))
              }));
            return null === (rr = pr.current) || void 0 === rr || rr.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(fr), ar.tearDown(), mr.current = null, tr.current = !1
            }
          }), [Qr, Sr]), (0, Zr.useEffect)((() => {
            if (fr) return;
            const rr = setTimeout((() => {
              Er(!0)
            }), aQ);
            return () => {
              clearTimeout(rr)
            }
          }), [fr]);
          const nr = rr => {
            var Sr;
            "playing" === Qr && tr.current !== rr && (tr.current = rr, null === (Sr = mr.current) || void 0 === Sr || Sr.handleMouseInput(rr))
          };
          return (0, Ur.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, Ur.jsxs)("div", {
              ref: pr,
              className: ar()("DocsQteStage", {
                Playing: "playing" === Qr
              }),
              tabIndex: "playing" === Qr ? 0 : -1,
              role: "playing" === Qr ? "button" : void 0,
              "aria-label": "playing" === Qr ? `${Sr} quick time event: click or press Space` : void 0,
              onPointerDown: rr => {
                0 === rr.button && nr(!0)
              },
              onPointerUp: () => {
                nr(!1)
              },
              onPointerLeave: () => {
                nr(!1)
              },
              onPointerCancel: () => {
                nr(!1)
              },
              onKeyDown: rr => {
                "playing" !== Qr || " " !== rr.key && "Enter" !== rr.key || (rr.preventDefault(), nr(!0))
              },
              onKeyUp: rr => {
                "playing" !== Qr || " " !== rr.key && "Enter" !== rr.key || nr(!1)
              },
              children: [(0, Ur.jsx)("div", {
                ref: xr,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${jr})`
                },
                children: "playing" === Qr && (0, Ur.jsx)(RS.b.Provider, {
                  value: Yr,
                  children: (0, Ur.jsx)(qS.d, {
                    qte: {
                      type: Sr,
                      parameters: CS[Sr]
                    }
                  })
                })
              }), "playing" !== Qr && (0, Ur.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== Qr && (0, Ur.jsxs)("div", {
                  className: ar()("DocsQteResult", "succeeded" === Qr ? "Succeeded" : "Failed"),
                  children: [(0, Ur.jsx)(hr, {
                    name: "succeeded" === Qr ? "check" : "cross",
                    isTinted: !0
                  }), (0, Ur.jsx)("span", {
                    children: "succeeded" === Qr ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, Ur.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !fr,
                  onClick: () => {
                    Wr("playing")
                  },
                  children: [(0, Ur.jsx)(hr, {
                    name: "ready" === Qr ? "play" : "replay"
                  }), (0, Ur.jsx)("span", {
                    children: "ready" === Qr ? `Try ${Sr}` : "Play again"
                  })]
                })]
              })]
            }), zr && !kS(zr) && (0, Ur.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, Ur.jsx)("code", {
                children: zr
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function EQ(rr) {
          let {
            level: Sr,
            text: Qr,
            anchor: Zr,
            className: Wr
          } = rr;
          const jr = `h${Math.min(Sr,6)}`;
          return (0, Ur.jsxs)(jr, {
                id: Zr,
                className: ar()("DocsHeading", Wr),
                children: [(0, Ur.jsx)(yS, {
                      text: Qr
                    }), (0, Ur.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Zr}`,
                        "aria-label": `Link to ${Qr.replace(/`/g,"")}`,children:"#"})]})}function pQ(rr){let{items:Sr,ordered:Qr}=rr;const Zr=Qr?"ol":"ul";return(0,Ur.jsx)(Zr,{className:"DocsList",children:Sr.map(((rr,Sr)=>(0,Ur.jsxs)("li",{children:[(0,Ur.jsx)(yS,{text:rr.text}),rr.children.length>0&&(0,Ur.jsx)(pQ,{items:rr.children,ordered:Qr})]},Sr)))})}function xQ(rr){const Sr=rr[0],Qr="paragraph"===(null===Sr||void 0===Sr?void 0:Sr.kind)?Sr.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(Qr)?"warning":/^\*\*(tip|prefer)/.test(Qr)?"tip":"note"}function mQ(rr){let{block:Sr}=rr;switch(Sr.kind){case"heading":return(0,Ur.jsx)(EQ,{level:Sr.level,text:Sr.text,anchor:Sr.anchor});case"paragraph":return(0,Ur.jsx)("p",{children:(0,Ur.jsx)(yS,{text:Sr.text})});case"code":{const rr="ts"===Sr.lang?function(rr){const Sr=rr.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return Sr&&Object.hasOwn(CS,Sr[1])?Sr[1]:null}(Sr.code):null;return(0,Ur.jsxs)(Ur.Fragment,{children:[(0,Ur.jsx)(Br,{code:Sr.code,lang:Sr.lang}),rr&&(0,Ur.jsx)(fQ,{type:rr})]})}case"table":return(0,Ur.jsx)("div",{className:"DocsTableScroll",children:(0,Ur.jsxs)("table",{className:"DocsTable",children:[(0,Ur.jsx)("thead",{children:(0,Ur.jsx)("tr",{children:Sr.header.map(((rr,Sr)=>(0,Ur.jsx)("th",{children:(0,Ur.jsx)(yS,{text:rr})},Sr)))})}),(0,Ur.jsx)("tbody",{children:Sr.rows.map(((rr,Sr)=>(0,Ur.jsx)("tr",{children:rr.map(((rr,Sr)=>(0,Ur.jsx)("td",{children:(0,Ur.jsx)(yS,{text:rr})},Sr)))},Sr)))})]})});case"list":return(0,Ur.jsx)(pQ,{items:Sr.items,ordered:Sr.ordered});case"quote":return(0,Ur.jsx)("aside",{className:ar()("DocsCallout",xQ(Sr.blocks)),children:(0,Ur.jsx)(NQ,{blocks:Sr.blocks})});case"rule":return(0,Ur.jsx)("hr",{className:"DocsRule"})}}function NQ(rr){let{blocks:Sr}=rr;return(0,Ur.jsx)(Ur.Fragment,{children:Sr.map(((rr,Sr)=>(0,Ur.jsx)(mQ,{block:rr},Sr)))})}var UQ=Qr(5571),tQ=Qr(5575);function hQ(rr){return"blocks"===rr||"items"===rr}const zQ=new Map;function YQ(rr){let Sr=zQ.get(rr);return Sr||(Sr=function(rr){const Sr={entries:[],legend:[],notes:[],examples:[]};let Qr=!1;for(const ar of rr.split(/\r?\n/).slice(1)){if(ar.startsWith("#")){const rr=ar.replace(/^# ?/,""),Zr=rr.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Zr?Sr.legend.push({code:Zr[1],meaning:Zr[2],usage:Zr[3].trim()}):/^Examples:/.test(rr.trim())?Qr=!0:Qr&&rr.trim()?Sr.examples.push(rr.trim()):rr.trim()&&!/^\s/.test(rr)&&Sr.notes.push(rr.trim());continue}const rr=ar.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Zr,Wr;rr&&Sr.entries.push({name:rr[1],variants:null!==(Zr=null===(Wr=rr[2])||void 0===Wr?void 0:Wr.split(","))&&void 0!==Zr?Zr:[]})}return Sr}("blocks"===rr?UQ:tQ),zQ.set(rr,Sr)),Sr}function nQ(rr){let{className:Sr,value:Qr,placeholder:Zr,label:Wr,onChange:ar,count:jr,children:Ir}=rr;return(0,Ur.jsxs)("div",{className:Sr,children:[(0,Ur.jsx)(hr,{name:"magnifying-glass"}),(0,Ur.jsx)("input",{type:"search",value:Qr,placeholder:Zr,"aria-label":Wr,onChange:rr=>{ar(rr.target.value)}}),Ir,jr&&(0,Ur.jsxs)("span",{className:"DocsFilterCount",children:[jr.visible," of ",jr.total]})]})}var eQ=Qr(1448);function KQ(rr){const Sr=rr.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return Sr?Sr[2]:null}function yQ(rr){return"paragraph"===rr.kind&&""===rr.text.trim()}function BQ(rr){const Sr={name:rr.heading.text,description:[],params:[],returns:null};let Qr="description";for(const Wr of rr.blocks)if(!yQ(Wr))if("heading"===Wr.kind&&/^Parameters:?$/.test(Wr.text))Qr="params";else if("heading"===Wr.kind&&/^Returns:?$/.test(Wr.text))Qr="returns",Sr.returns={type:"",description:[]};else if("params"!==Qr||"table"!==Wr.kind){if("returns"===Qr&&"paragraph"===Wr.kind&&""===Sr.returns.type){const rr=KQ(Wr.text);if(null!==rr){Sr.returns.type=rr.replaceAll("\\|","|");continue}}"returns"===Qr?Sr.returns.description.push(Wr):Sr.description.push(Wr)}else for(const[rr,Qr,ar]of Wr.rows){var Zr;Sr.params.push({name:rr,type:null!==(Zr=KQ(Qr))&&void 0!==Zr?Zr:Qr,description:null!==ar&&void 0!==ar?ar:""})}return Sr}const TQ=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function vQ(rr){return rr.filter((rr=>!yQ(rr)))}const OQ=/^[\w][\w .'&!:()-]*$/,LQ=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function lQ(rr){var Sr;if("code"===rr.kind&&"text"===rr.lang){const Sr=rr.code.split("\n").map((rr=>rr.trim())).filter(Boolean);return Sr.length>0&&Sr.every((rr=>OQ.test(rr)))?Sr.map((rr=>({name:rr}))):null}return"paragraph"===rr.kind&&LQ.test(rr.text.trim())?[...rr.text.matchAll(/`([ ^ `]+)` / g)].flatMap((rr => rr[1].split(/,\s*/).map((rr => ({
                              name: rr.trim()
                            }))))): "table" === rr.kind && null !== (Sr = rr.header[0]) && void 0 !== Sr && Sr.startsWith("Song") ? rr.rows.map((rr => {
                              let [Sr, Qr] = rr;
                              return {
                                name: Sr.replace(/`/g, ""),
                                caption: Qr
                              }
                            })) : null
                          }

                          function XQ(rr) {
                            const Sr = [];
                            for (const Qr of rr) {
                              const rr = lQ(Qr),
                                Zr = Sr.at(-1),
                                Wr = "table" === Qr.kind;
                              rr ? "names" === (null === Zr || void 0 === Zr ? void 0 : Zr.kind) && Zr.isSongs === Wr ? Zr.names.push(...rr) : Sr.push({
                                kind: "names",
                                names: rr,
                                isSongs: Wr
                              }) : Sr.push({
                                kind: "block",
                                block: Qr
                              })
                            }
                            return Sr
                          }
                          const PQ = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function HQ(rr, Sr) {
                            return `${PQ[rr]}-${(0,Tr.o)(Sr)}`
                          }
                          const qQ = new WeakMap;

                          function RQ(rr, Sr, Qr) {
                            let Zr = qQ.get(Sr);
                            if (!Zr) {
                              Zr = new Map;
                              const Qr = new Set;
                              for (const Wr of (0, Tr.r)(Sr)) {
                                const Sr = XQ(vQ(Wr.blocks)).map((Sr => {
                                  if ("block" === Sr.kind) return Sr;
                                  return {
                                    kind: "names",
                                    names: Sr.names.map((Sr => {
                                      var Zr, ar;
                                      const jr = HQ(rr, Sr.name);
                                      let Ir = jr;
                                      for (let rr = 2; Qr.has(Ir); rr++) Ir = `${jr}-${rr}`;
                                      return Qr.add(Ir), {
                                        ...Sr,
                                        anchor: Ir,
                                        heading: null !== (Zr = null === (ar = Wr.heading) || void 0 === ar ? void 0 : ar.text) && void 0 !== Zr ? Zr : ""
                                      }
                                    })),
                                    isSongs: Sr.isSongs
                                  }
                                }));
                                Zr.set(Wr.blocks, Sr)
                              }
                              qQ.set(Sr, Zr)
                            }
                            const Wr = Zr.get(Qr);
                            if (!Wr) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Wr
                          }
                          const gQ = "/textures/docs/skinPreviews",
                            CQ = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var MQ = Qr(2968),
                            GQ = Qr(2984);

                          function kQ(rr) {
                            return Object.hasOwn(MQ.f, rr) ? MQ.f[rr] : null
                          }
                          const AQ = {
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
                            blendMode: GQ.e.Standard
                          };

                          function VQ(rr, Sr, Qr) {
                            return Sr + (Qr - Sr) * rr()
                          }

                          function iQ(rr, Sr, Qr) {
                            return rr + (Sr - rr) * Qr
                          }

                          function wQ(rr) {
                            return rr.length > 0 && "timeFraction" in rr[0]
                          }

                          function cQ(rr, Sr) {
                            if (0 === rr.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!wQ(rr.colorGradients)) {
                              const Qr = rr.colorGradients,
                                {
                                  color: Zr
                                } = Qr[Math.floor(Sr() * Qr.length) % Qr.length];
                              return [{
                                at: 0,
                                colour: [Zr[0] / 255, Zr[1] / 255, Zr[2] / 255, 1]
                              }]
                            }
                            return [...rr.colorGradients].sort(((rr, Sr) => rr.timeFraction - Sr.timeFraction)).map((rr => {
                              var Qr, Zr, Wr;
                              const ar = rr.minColor,
                                jr = null !== (Qr = rr.maxColor) && void 0 !== Qr ? Qr : ar,
                                Ir = Sr(),
                                fr = [iQ(ar[0], jr[0], Ir) / 255, iQ(ar[1], jr[1], Ir) / 255, iQ(ar[2], jr[2], Ir) / 255, iQ(null !== (Zr = ar[3]) && void 0 !== Zr ? Zr : 1, null !== (Wr = jr[3]) && void 0 !== Wr ? Wr : 1, Ir)];
                              return {
                                at: rr.timeFraction,
                                colour: fr
                              }
                            }))
                          }

                          function FQ(rr, Sr, Qr, Zr) {
                            const Wr = VQ(Zr, rr.minEmitPower, rr.maxEmitPower),
                              ar = Sr => VQ(Zr, Math.min(rr.dir1[Sr], rr.dir2[Sr]), Math.max(rr.dir1[Sr], rr.dir2[Sr])) * Wr,
                              jr = [...rr.velocityGradients].sort(((rr, Sr) => rr.timeFraction - Sr.timeFraction)).map((rr => ({
                                at: rr.timeFraction,
                                factor: VQ(Zr, rr.factor, rr.factor2)
                              })));
                            return {
                              pos: [VQ(Zr, Sr[0], Qr[0]), VQ(Zr, Sr[1], Qr[1]), VQ(Zr, Sr[2], Qr[2])],
                              dir: [ar(0), ar(1), ar(2)],
                              age: 0,
                              life: VQ(Zr, rr.minLifeTime, rr.maxLifeTime),
                              size: VQ(Zr, rr.minSize, rr.maxSize),
                              colours: cQ(rr, Zr),
                              velocityFactors: jr
                            }
                          }

                          function oQ(rr, Sr, Qr, Zr) {
                            if (Sr < rr[0].at) return Qr(Math.min(1, rr.length - 1));
                            for (let Wr = 0; Wr < rr.length - 1; Wr++)
                              if (Sr <= rr[Wr + 1].at) {
                                const ar = rr[Wr + 1].at - rr[Wr].at;
                                return Zr(Qr(Wr), Qr(Wr + 1), ar > 0 ? (Sr - rr[Wr].at) / ar : 1)
                              } return Qr(rr.length - 1)
                          }

                          function bQ(rr) {
                            return oQ(rr.colours, rr.age / rr.life, (Sr => rr.colours[Sr].colour), ((rr, Sr, Qr) => [iQ(rr[0], Sr[0], Qr), iQ(rr[1], Sr[1], Qr), iQ(rr[2], Sr[2], Qr), iQ(rr[3], Sr[3], Qr)]))
                          }

                          function JQ(rr, Sr, Qr) {
                            if (rr.age += Qr, rr.age >= rr.life) return !1;
                            const Zr = function(rr) {
                              return 0 === rr.velocityFactors.length ? 1 : oQ(rr.velocityFactors, rr.age / rr.life, (Sr => rr.velocityFactors[Sr].factor), iQ)
                            }(rr) * Qr;
                            for (let ar = 0; ar < 3; ar++) {
                              var Wr;
                              rr.pos[ar] += rr.dir[ar] * Zr, rr.dir[ar] += (null !== (Wr = Sr[ar]) && void 0 !== Wr ? Wr : 0) * Qr
                            }
                            return !0
                          }

                          function DQ(rr) {
                            return String(Math.round(1e6 * rr) / 1e6)
                          }

                          function dQ(rr) {
                            return `[${rr.map(DQ).join(", ")}]`
                          }

                          function sQ(rr, Sr) {
                            const Qr = `${Sr}    `;
                            return `[\n${(wQ(rr)?rr.map((rr=>{const Sr=[`${Qr}    timeFraction: ${DQ(rr.timeFraction)},`,`${Qr}    minColor: ${dQ(rr.minColor)},`];return rr.maxColor&&Sr.push(`${Qr}    maxColor: ${dQ(rr.maxColor)},`),`${Qr}{\n${Sr.join("\n")}\n${Qr}},`})):rr.map((rr=>`
                            $ {
                              Qr
                            } {
                              color: $ {
                                dQ(rr.color)
                              }
                            }, `))).join("\n")}\n${Sr}]`
                          }
                          const uQ = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            rZ = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const SZ = .6;

                          function QZ(rr, Sr) {
                            return `${Sr?"song":"sound"}:${rr}`
                          }
                          let ZZ = {
                              track: null,
                              volume: SZ
                            },
                            WZ = null,
                            aZ = 0,
                            jZ = 0;
                          const IZ = new Set;

                          function fZ(rr) {
                            ZZ = {
                              ...ZZ,
                              ...rr
                            }, IZ.forEach((rr => {
                              rr()
                            }))
                          }

                          function EZ(rr) {
                            ZZ.track && fZ({
                              track: {
                                ...ZZ.track,
                                ...rr
                              }
                            })
                          }

                          function pZ(rr) {
                            const [Sr, Qr] = (0, Zr.useState)((() => rr(ZZ))), Wr = (0, Zr.useRef)(rr);
                            return Wr.current = rr, (0, Zr.useEffect)((() => {
                              const rr = () => {
                                Qr((() => Wr.current(ZZ)))
                              };
                              return IZ.add(rr), rr(), () => {
                                IZ.delete(rr)
                              }
                            }), []), Sr
                          }

                          function xZ() {
                            aZ++;
                            const rr = WZ;
                            WZ = null, null === rr || void 0 === rr || rr.stop()
                          }

                          function mZ(rr, Sr) {
                            let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            xZ();
                            const Wr = aZ,
                              {
                                track: ar
                              } = ZZ,
                              jr = ar && ar.name === rr && ar.isSong === Sr ? ar.duration : 0;
                            jZ = Zr, fZ({
                              track: {
                                name: rr,
                                isSong: Sr,
                                status: "loading",
                                duration: jr
                              }
                            }), Promise.all([Qr.e(253), Qr.e(285)]).then((() => Qr(41704))).then((Qr => {
                              let {
                                playDocsSound: ar
                              } = Qr;
                              Wr === aZ && (WZ = ar(rr, Sr, ZZ.volume, Zr, {
                                onPlay: rr => {
                                  Wr === aZ && EZ({
                                    status: "playing",
                                    duration: rr
                                  })
                                },
                                onEnd: rr => {
                                  var Sr, Qr;
                                  Wr === aZ && (WZ = null, rr ? fZ({
                                    track: null
                                  }) : (jZ = null !== (Sr = null === (Qr = ZZ.track) || void 0 === Qr ? void 0 : Qr.duration) && void 0 !== Sr ? Sr : 0, EZ({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((Sr => {
                              console.error(`Could not play docs sound ${rr}`, Sr), Wr === aZ && fZ({
                                track: null
                              })
                            }))
                          }

                          function NZ() {
                            const {
                              track: rr
                            } = ZZ;
                            if (!rr) return;
                            if ("playing" === rr.status && WZ) return jZ = WZ.JY(), WZ.pause(), void EZ({
                              status: "paused"
                            });
                            if ("loading" === rr.status) return xZ(), void EZ({
                              status: "paused"
                            });
                            if (WZ) return void WZ.resume();
                            const Sr = rr.duration > 0 && jZ >= rr.duration - .05;
                            mZ(rr.name, rr.isSong, Sr ? 0 : jZ)
                          }

                          function UZ() {
                            var rr;
                            return WZ && "playing" === (null === (rr = ZZ.track) || void 0 === rr ? void 0 : rr.status) ? WZ.JY() : jZ
                          }

                          function tZ(rr) {
                            var Sr;
                            null === (Sr = WZ) || void 0 === Sr || Sr.setVolume(rr), fZ({
                              volume: rr
                            })
                          }

                          function hZ() {
                            xZ(), jZ = 0, fZ({
                              track: null
                            })
                          }
                          const zZ = (0, Zr.createContext)(null);
                          let YZ = null;

                          function nZ() {
                            const [rr, Sr] = (0, Zr.useState)(null);
                            return (0, Zr.useEffect)((() => {
                              let rr = !1;
                              return YZ ??= Promise.all([Qr.e(85), Qr.e(89), Qr.e(86), Qr.e(87), Qr.e(88), Qr.e(124), Qr.e(36), Qr.e(259)]).then((() => Qr(41700))), YZ.then((Qr => {
                                rr || Sr(Qr)
                              }), (rr => {
                                console.error("Could not load the docs gallery's textures", rr), YZ = null
                              })), () => {
                                rr = !0
                              }
                            }), []), rr
                          }
                          const eZ = 24,
                            KZ = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function yZ(rr, Sr) {
                            const Qr = "skins" === rr ? function(rr, Sr) {
                              const Qr = CQ.find((Sr => rr.startsWith(Sr.heading)));
                              return Qr ? function(rr, Sr) {
                                return `${rr}-${Sr}`
                              }(Qr.prefix, Sr) : null
                            }(Sr.heading, Sr.name) : null;
                            return null === Qr ? null : `${gQ}/${Qr}.webp`
                          }

                          function BZ(rr) {
                            let {
                              kind: Sr,
                              entry: Qr,
                              assets: Wr,
                              renderedUrl: jr
                            } = rr;
                            const {
                              name: Ir
                            } = Qr, [fr, Er] = (0, Zr.useState)(!1);
                            if ("icons" === Sr && kS(Ir)) return (0, Ur.jsx)(eQ.c, {
                              className: "DocsTileIcon",
                              name: Ir
                            });
                            let pr = null;
                            var xr;
                            if ("icons" === Sr) pr = null !== (xr = null === Wr || void 0 === Wr ? void 0 : Wr.getIngameIconUrl(Ir)) && void 0 !== xr ? xr : null;
                            else if ("particles" === Sr) {
                              var mr, Nr, tr;
                              pr = null !== (mr = null === Wr || void 0 === Wr ? void 0 : Wr.getParticleTextureUrl(null !== (Nr = null === (tr = kQ(Ir)) || void 0 === tr ? void 0 : tr.texture) && void 0 !== Nr ? Nr : Ir)) && void 0 !== mr ? mr : null
                            } else "skins" === Sr && (pr = null !== jr && void 0 !== jr ? jr : KZ.test(Ir) ? `/textures/charSkins/previews/${Ir}_preview.png` : null);
                            return !pr || fr ? (0, Ur.jsx)(hr, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === Sr ? "person" : "image"
                            }) : (0, Ur.jsx)("img", {
                              className: ar()("DocsTileImage", {
                                Pixelated: "skins" !== Sr
                              }),
                              src: pr,
                              srcSet: pr === jr ? `${pr} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${pr}`), Er(!0)
                              }
                            })
                          }

                          function TZ(rr) {
                            let {
                              entry: Sr,
                              isSong: Qr
                            } = rr;
                            const Zr = pZ((rr => {
                                let {
                                  track: Zr
                                } = rr;
                                return (null === Zr || void 0 === Zr ? void 0 : Zr.name) === Sr.name && Zr.isSong === Qr ? Zr.status : null
                              })),
                              Wr = null !== Zr && "paused" !== Zr;
                            return (0, Ur.jsxs)("button", {
                              type: "button",
                              id: Sr.anchor,
                              className: ar()("DocsSoundTile", {
                                Playing: Wr
                              }),
                              "data-docs-track": QZ(Sr.name, Qr),
                              "aria-label": Wr ? `Pause ${Sr.name}` : `Play ${Sr.name}`,
                              onClick: () => {
                                null !== Zr ? NZ() : mZ(Sr.name, Qr)
                              },
                              children: [(0, Ur.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, Ur.jsx)(hr, {
                                  name: Wr ? "pause" : "play"
                                })
                              }), (0, Ur.jsx)("code", {
                                className: "DocsSoundName",
                                children: Sr.name
                              }), Sr.caption && (0, Ur.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: Sr.caption
                              })]
                            })
                          }

                          function vZ(rr) {
                            let {
                              kind: Sr,
                              names: Qr,
                              isSongs: Wr
                            } = rr;
                            const jr = nZ(),
                              [Ir, fr] = Yr(),
                              Er = !1 === (null === Ir || void 0 === Ir ? void 0 : Ir.failed) ? Ir.text : null,
                              pr = (0, Zr.useContext)(zZ),
                              [xr, mr] = (0, Zr.useState)(""),
                              Nr = xr.trim().toLowerCase(),
                              tr = Nr ? Qr.filter((rr => rr.name.toLowerCase().includes(Nr))) : Qr;
                            return (0, Ur.jsxs)("div", {
                              className: "DocsGallery",
                              children: [Qr.length > eZ && (0, Ur.jsx)(nQ, {
                                className: "DocsGalleryFilter",
                                value: xr,
                                placeholder: `Filter ${Qr.length} names\u2026`,
                                label: "Filter names",
                                onChange: mr,
                                count: Nr ? {
                                  visible: tr.length,
                                  total: Qr.length
                                } : null
                              }), (0, Ur.jsx)("div", {
                                className: ar()("DocsGalleryGrid", `Kind-${Sr}`, {
                                  Songs: Wr
                                }),
                                children: tr.map((rr => {
                                  if ("sounds" === Sr) return (0, Ur.jsx)(TZ, {
                                    entry: rr,
                                    isSong: Wr
                                  }, rr.anchor);
                                  if (pr && "particles" === Sr && kQ(rr.name)) return (0, Ur.jsxs)("button", {
                                    type: "button",
                                    id: rr.anchor,
                                    className: ar()("DocsTile Previewable", {
                                      Copied: Er === rr.name
                                    }),
                                    title: `Play "${rr.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      pr(rr.name), fr(rr.name)
                                    },
                                    children: [(0, Ur.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, Ur.jsx)(BZ, {
                                        kind: Sr,
                                        entry: rr,
                                        assets: jr,
                                        renderedUrl: null
                                      }), (0, Ur.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, Ur.jsx)(hr, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, Ur.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Er === rr.name ? "Copied!" : rr.name
                                    })]
                                  }, rr.anchor);
                                  const Qr = yZ(Sr, rr);
                                  return (0, Ur.jsxs)("button", {
                                    type: "button",
                                    id: rr.anchor,
                                    className: ar()("DocsTile", {
                                      Copied: Er === rr.name
                                    }),
                                    title: `Copy "${rr.name}"`,
                                    onClick: () => {
                                      fr(rr.name)
                                    },
                                    children: [(0, Ur.jsx)("span", {
                                      className: ar()("DocsTilePreview", {
                                        Rendered: null !== Qr
                                      }),
                                      children: (0, Ur.jsx)(BZ, {
                                        kind: Sr,
                                        entry: rr,
                                        assets: jr,
                                        renderedUrl: Qr
                                      })
                                    }), (0, Ur.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Er === rr.name ? "Copied!" : rr.name
                                    })]
                                  }, rr.anchor)
                                }))
                              })]
                            })
                          }

                          function OZ(rr) {
                            let {
                              kind: Sr,
                              content: Qr,
                              blocks: Zr
                            } = rr;
                            return (0, Ur.jsx)(Ur.Fragment, {
                              children: RQ(Sr, Qr, Zr).map(((rr, Qr) => "block" === rr.kind ? (0, Ur.jsx)(mQ, {
                                block: rr.block
                              }, Qr) : (0, Ur.jsx)(vZ, {
                                kind: Sr,
                                names: rr.names,
                                isSongs: rr.isSongs
                              }, Qr)))
                            })
                          }
                          const LZ = [{
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

                          function lZ(rr) {
                            let {
                              cards: Sr = LZ,
                              label: Qr = "Start here"
                            } = rr;
                            const Wr = (0, Zr.useContext)(NS);
                            return (0, Ur.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": Qr,
                              children: Sr.map((rr => {
                                let {
                                  pageId: Sr,
                                  countNoun: Qr
                                } = rr;
                                const Zr = Gr(Sr);
                                return (0, Ur.jsxs)(jr.d, {
                                  to: cr(Wr, Zr),
                                  className: "DocsLandingCard",
                                  children: [(0, Ur.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, Ur.jsx)(hr, {
                                      name: Zr.icon
                                    })
                                  }), (0, Ur.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Zr.title
                                  }), (0, Ur.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Zr.summary
                                  }), Qr && (0, Ur.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [Ar(Zr).sections.length, " ", Qr]
                                  })]
                                }, Sr)
                              }))
                            })
                          }
                          const XZ = 240;

                          function PZ(rr) {
                            let {
                              faces: Sr
                            } = rr;
                            return (0, Ur.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, Ur.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${Sr.top}")`
                                }
                              }), (0, Ur.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${Sr.left}")`
                                }
                              }), (0, Ur.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${Sr.right}")`
                                }
                              })]
                            })
                          }

                          function HZ(rr) {
                            let {
                              src: Sr
                            } = rr;
                            const [Qr, Wr] = (0, Zr.useState)(!1);
                            return Qr ? null : (0, Ur.jsx)("img", {
                              src: Sr,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${Sr}`), Wr(!0)
                              }
                            })
                          }

                          function qZ(rr) {
                            let {
                              kind: Sr
                            } = rr;
                            const Qr = YQ(Sr),
                              Wr = nZ(),
                              jr = (0, Ir.s)(),
                              [fr, Er] = (0, Zr.useState)(""),
                              [pr, xr] = (0, Zr.useState)(null),
                              [mr, Nr] = (0, Zr.useState)(XZ),
                              [tr, zr] = (0, Zr.useState)(null),
                              Yr = (0, Zr.useRef)(null),
                              er = fr.trim().toLowerCase();
                            (0, Zr.useEffect)((() => {
                              const rr = (0, Tr.k)(jr.hash),
                                Zr = Qr.entries.find((Qr => HQ(Sr, Qr.name) === rr));
                              if (Zr) Yr.current = Zr.name, Er(Zr.name), xr(null), zr(Zr.name);
                              else if (null !== Yr.current) {
                                const rr = Yr.current;
                                Yr.current = null, Er((Sr => Sr === rr ? "" : Sr)), zr(null)
                              }
                            }), [Qr, Sr, jr.hash, jr.key]), (0, Zr.useEffect)((() => {
                              var rr;
                              null !== tr && (null === (rr = document.getElementById(HQ(Sr, tr))) || void 0 === rr || rr.scrollIntoView({
                                block: "center"
                              }))
                            }), [Sr, tr]);
                            const Kr = Qr.entries.filter((rr => (!er || rr.name.toLowerCase().includes(er)) && (!pr || rr.variants.includes(pr))));
                            return (0, Ur.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [Qr.notes.length > 0 && (0, Ur.jsx)("div", {
                                className: "DocsProse",
                                children: Qr.notes.map((rr => (0, Ur.jsx)("p", {
                                  children: rr
                                }, rr)))
                              }), Qr.legend.length > 0 && (0, Ur.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, Ur.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, Ur.jsx)("thead", {
                                    children: (0, Ur.jsxs)("tr", {
                                      children: [(0, Ur.jsx)("th", {
                                        children: "Code"
                                      }), (0, Ur.jsx)("th", {
                                        children: "Variant"
                                      }), (0, Ur.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, Ur.jsx)("tbody", {
                                    children: Qr.legend.map((rr => (0, Ur.jsxs)("tr", {
                                      children: [(0, Ur.jsx)("td", {
                                        children: (0, Ur.jsx)("button", {
                                          type: "button",
                                          className: ar()("DocsVariantChip", {
                                            Active: pr === rr.code
                                          }),
                                          "aria-pressed": pr === rr.code,
                                          title: `Show only ${Sr} with ${rr.meaning} variants`,
                                          onClick: () => {
                                            xr(pr === rr.code ? null : rr.code)
                                          },
                                          children: rr.code
                                        })
                                      }), (0, Ur.jsx)("td", {
                                        children: rr.meaning
                                      }), (0, Ur.jsx)("td", {
                                        children: (0, Ur.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: rr.usage
                                        })
                                      })]
                                    }, rr.code)))
                                  })]
                                })
                              }), Qr.examples.length > 0 && (0, Ur.jsx)(Br, {
                                lang: "text",
                                code: Qr.examples.join("\n")
                              }), (0, Ur.jsx)(nQ, {
                                className: "DocsFilterBar",
                                value: fr,
                                placeholder: `Search ${Qr.entries.length} ${Sr}\u2026`,
                                label: `Search ${Sr}`,
                                onChange: rr => {
                                  Er(rr), Nr(XZ)
                                },
                                count: er || pr ? {
                                  visible: Kr.length,
                                  total: Qr.entries.length
                                } : null,
                                children: pr && (0, Ur.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    xr(null)
                                  },
                                  children: [pr, " ", (0, Ur.jsx)(hr, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, Ur.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Kr.slice(0, mr).map((rr => {
                                  const Qr = "blocks" === Sr ? null === Wr || void 0 === Wr ? void 0 : Wr.getBlockFaces(rr.name) : null,
                                    Zr = Wr && !Qr ? Wr.getItemTextureUrl(rr.name) : null;
                                  return (0, Ur.jsxs)("div", {
                                    id: HQ(Sr, rr.name),
                                    className: ar()("DocsCatalogueTile", {
                                      Linked: rr.name === tr
                                    }),
                                    children: [(0, Ur.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [Qr && (0, Ur.jsx)(PZ, {
                                        faces: Qr
                                      }), Zr && (0, Ur.jsx)(HZ, {
                                        src: Zr
                                      })]
                                    }), (0, Ur.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: rr.name
                                    }), rr.variants.length > 0 && (0, Ur.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: rr.variants.map((rr => (0, Ur.jsx)("span", {
                                        children: rr
                                      }, rr)))
                                    }), (0, Ur.jsx)(nr, {
                                      text: rr.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, rr.name)
                                }))
                              }), Kr.length > mr && (0, Ur.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Nr(Kr.length)
                                },
                                children: ["Show all ", Kr.length]
                              }), 0 === Kr.length && (0, Ur.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", Sr, " match."]
                              })]
                            })
                          }
                          var RZ = Qr(5634),
                            gZ = Qr(1722);
                          const CZ = .95 * RZ.d;

                          function MZ(rr) {
                            return /^\s*```/.test(rr)
                          }

                          function GZ(rr, Sr) {
                            const Qr = [
                              []
                            ];
                            let Zr = !1;
                            for (const Wr of rr.split("\n")) !Zr && Sr(Wr) && Qr.at(-1).length > 0 && Qr.push([]), MZ(Wr) && (Zr = !Zr), Qr.at(-1).push(Wr);
                            return Qr.map((rr => rr.join("\n").trim())).filter(Boolean)
                          }

                          function kZ(rr, Sr) {
                            const Qr = `${"#".repeat(Sr)} `,
                              Zr = [];
                            let Wr = !1;
                            for (const ar of rr.split("\n")) MZ(ar) ? Wr = !Wr : !Wr && ar.startsWith(Qr) && Zr.push(ar.slice(Qr.length).trim());
                            return Zr
                          }

                          function AZ(rr) {
                            return rr.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class VZ {
                            constructor(rr, Sr) {
                              this.origin = Sr, this.pages = void 0, this.partPaths = new Map;
                              const Qr = rr.map((rr => {
                                const Sr = Sr => this.resolveLinks(rr, Sr).length,
                                  Qr = function(rr, Sr) {
                                    const Qr = rr.map((rr => Sr(rr.markdown) + 2)),
                                      Zr = Qr.reduce(((rr, Sr) => rr + Sr), 0),
                                      Wr = Zr / Math.ceil(Zr / CZ),
                                      ar = [];
                                    let jr = 0;
                                    return rr.forEach(((rr, Sr) => {
                                      const Zr = Qr[Sr];
                                      (0 === ar.length || jr + Zr > CZ || jr + Zr / 2 > Wr) && (ar.push([]), jr = 0), ar.at(-1).push(rr), jr += Zr
                                    })), ar
                                  }(function(rr, Sr) {
                                    return GZ(rr, (rr => rr.startsWith("## "))).flatMap((rr => {
                                      var Qr;
                                      const Zr = null !== (Qr = kZ(rr, 2)[0]) && void 0 !== Qr ? Qr : "";
                                      if (Sr(rr) <= CZ) return [{
                                        markdown: rr,
                                        section: Zr
                                      }];
                                      let Wr = !1,
                                        ar = "";
                                      return GZ(rr, (rr => {
                                        const Sr = Wr && "" !== rr.trim();
                                        return Wr = "" === rr.trim(), Sr
                                      })).map((rr => {
                                        var Sr;
                                        const Qr = kZ(rr, 3),
                                          Wr = rr.startsWith("### ") ? Qr[0] : ar;
                                        return ar = null !== (Sr = Qr.at(-1)) && void 0 !== Sr ? Sr : ar, {
                                          markdown: rr,
                                          section: Zr || Wr
                                        }
                                      }))
                                    }))
                                  }(AZ(rr), Sr), Sr);
                                return {
                                  page: rr,
                                  groups: Qr.length > 1 ? Qr : []
                                }
                              }));
                              for (const {
                                  page: Zr,
                                  groups: Wr
                                }
                                of Qr) Wr.forEach(((rr, Sr) => {
                                const Qr = (0, RZ.s)(Zr.slug, Sr);
                                for (const Wr of rr.flatMap((rr => [...kZ(rr.markdown, 2), ...kZ(rr.markdown, 3)]))) {
                                  const rr = `${Zr.id}#${(0,Tr.o)(Wr)}`;
                                  this.partPaths.has(rr) || this.partPaths.set(rr, Qr)
                                }
                              }));
                              this.pages = Qr.map((rr => {
                                let {
                                  page: Sr,
                                  groups: Qr
                                } = rr;
                                return {
                                  page: Sr,
                                  path: (0, RZ.r)(Sr.slug),
                                  markdown: `# ${Sr.title}\n\n${this.resolveLinks(Sr,AZ(Sr))}\n`,
                                  parts: Qr.map(((rr, Zr) => this.renderPart(Sr, rr, Zr, Qr.length)))
                                }
                              }))
                            }
                            url(rr) {
                              return `${this.origin}${rr}`
                            }
                            getPage(rr) {
                              return this.pages.find((Sr => Sr.page.id === rr))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((rr => (rr.parts.length > 0 ? rr.parts : [{
                                path: rr.path,
                                label: "",
                                markdown: rr.markdown
                              }]).filter((rr => rr.markdown.length > RZ.d))))
                            }
                            markdownUrl(rr, Sr) {
                              const Qr = Sr && this.partPaths.get(`${rr.id}#${Sr}`) || (0, RZ.r)(rr.slug);
                              return this.url(Sr ? `${Qr}#${Sr}` : Qr)
                            }
                            resolveLinks(rr, Sr) {
                              return Sr.replace(/\]\((#[^)]+)\)/g, ((Sr, Qr) => {
                                var Zr;
                                const Wr = null !== (Zr = ir(Qr)) && void 0 !== Zr ? Zr : this.samePageTarget(rr, Qr);
                                return Wr ? `](${this.markdownUrl(Wr.page,Wr.anchor)})` : Sr
                              }))
                            }
                            samePageTarget(rr, Sr) {
                              const Qr = (0, Tr.o)(Sr.slice(1));
                              return Vr(rr, Qr) ? {
                                page: rr,
                                anchor: Qr
                              } : null
                            }
                            renderPart(rr, Sr, Qr, Zr) {
                              const Wr = function(rr) {
                                  const Sr = rr.map((rr => rr.section)).filter(Boolean);
                                  if (0 === Sr.length) return "";
                                  const Qr = Sr[0],
                                    Zr = Sr.at(-1);
                                  return Qr === Zr ? Qr : `${Qr} to ${Zr}`
                                }(Sr),
                                ar = Sr.map((rr => rr.markdown)).join("\n\n"),
                                jr = Wr ? `It covers ${Wr}. ` : "",
                                Ir = `Part ${Qr+1} of ${Zr} of [${rr.title}](${this.url((0,RZ.r)(rr.slug))}). ${jr}[llms.txt](${this.url(RZ.j)}) lists every part.`;
                              return {
                                path: (0, RZ.s)(rr.slug, Qr),
                                label: Wr,
                                markdown: `# ${rr.title}, part ${Qr+1} of ${Zr}\n\n${Ir}\n\n${this.resolveLinks(rr,ar)}\n`
                              }
                            }
                            llmsTxt(rr) {
                              const Sr = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${iZ(RZ.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const Qr of Mr) {
                                Sr.push("", `## ${Qr.title}`, "");
                                for (const rr of Qr.pageIds) {
                                  const Qr = this.getPage(rr),
                                    {
                                      page: Zr,
                                      parts: Wr
                                    } = Qr,
                                    ar = `About ${iZ(Qr.markdown.length)} tokens${Wr.length>0?`, in ${Wr.length} parts:`:"."}`;
                                  Sr.push(`- [${Zr.title}](${this.url(Qr.path)}): ${Zr.summary} ${ar}`), Wr.forEach(((rr, Qr) => {
                                    Sr.push(`  - [Part ${Qr+1}${rr.label?`: ${rr.label}`:""}](${this.url(rr.path)})`)
                                  }))
                                }
                              }
                              return Sr.push("", "## Optional", "", `- [Every page in one file](${this.url(RZ.f)}): About ${iZ(rr.length)} tokens, for a model with a large context window.`, ""), Sr.join("\n")
                            }
                            llmsFullTxt() {
                              return Mr.flatMap((rr => rr.pageIds.map((rr => this.getPage(rr).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const rr = this.llmsFullTxt(),
                                Sr = this.llmsTxt(rr),
                                Qr = new Map([
                                  [RZ.m, Sr],
                                  [RZ.j, Sr],
                                  [RZ.f, rr]
                                ]);
                              for (const Zr of this.pages) {
                                Qr.set(Zr.path, Zr.markdown);
                                for (const rr of Zr.parts) Qr.set(rr.path, rr.markdown)
                              }
                              return Qr
                            }
                          }

                          function iZ(rr) {
                            return `${Math.max(1,Math.round(rr/4e3))}K`
                          }
                          let wZ = null;

                          function cZ() {
                            return wZ ??= new VZ(Cr, gZ.c), wZ
                          }
                          var FZ = Qr(5636);
                          const oZ = [FZ.g, FZ.o];

                          function bZ(rr) {
                            return cZ().getPage(rr.id).parts.length > 0 ? `Read ${RZ.l}, then the parts of the Bloxd Code API's ${rr.title} page it lists, so I can ask questions about it.` : `Read ${gZ.c}${(0,RZ.r)(rr.slug)} so I can ask questions about it. ${FZ.l}`
                          }

                          function JZ(rr) {
                            let {
                              page: Sr
                            } = rr;
                            const [Qr, Zr] = Yr();
                            return (0, Ur.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, Ur.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Zr(cZ().getPage(Sr.id).markdown)
                                },
                                children: [(0, Ur.jsx)(hr, {
                                  name: !1 === (null === Qr || void 0 === Qr ? void 0 : Qr.failed) ? "check" : "copy"
                                }), (0, Ur.jsx)("span", {
                                  children: Qr ? Qr.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), oZ.map((rr => (0, Ur.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, FZ.c)(rr, bZ(Sr)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, Ur.jsx)(hr, {
                                  name: "external-link"
                                }), (0, Ur.jsxs)("span", {
                                  children: ["Open in ", rr.name]
                                })]
                              }, rr.name)))]
                            })
                          }

                          function DZ(rr) {
                            return `#${[0,1,2].map((Sr=>Math.round(Math.min(255,Math.max(0,rr[Sr]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function dZ(rr) {
                            return [parseInt(rr.slice(1, 3), 16), parseInt(rr.slice(3, 5), 16), parseInt(rr.slice(5, 7), 16)]
                          }

                          function sZ(rr) {
                            let {
                              label: Sr,
                              min: Qr,
                              max: Zr,
                              step: Wr,
                              low: ar,
                              high: jr,
                              onChange: Ir
                            } = rr;
                            return (0, Ur.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ur.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Ur.jsx)("span", {
                                  children: Sr
                                }), (0, Ur.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: ar === jr ? ar : `${ar}\u2013${jr}`
                                })]
                              }), (0, Ur.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, Ur.jsx)("input", {
                                  type: "range",
                                  min: Qr,
                                  max: Zr,
                                  step: Wr,
                                  value: Math.min(Zr, ar),
                                  "aria-label": `Minimum ${Sr.toLowerCase()}`,
                                  onChange: rr => {
                                    const Sr = Number(rr.target.value);
                                    Ir(Sr, Math.max(Sr, jr))
                                  }
                                }), (0, Ur.jsx)("input", {
                                  type: "range",
                                  min: Qr,
                                  max: Zr,
                                  step: Wr,
                                  value: Math.min(Zr, jr),
                                  "aria-label": `Maximum ${Sr.toLowerCase()}`,
                                  onChange: rr => {
                                    const Sr = Number(rr.target.value);
                                    Ir(Math.min(Sr, ar), Sr)
                                  }
                                })]
                              })]
                            })
                          }

                          function uZ(rr) {
                            let {
                              label: Sr,
                              min: Qr,
                              max: Zr,
                              step: Wr,
                              value: ar,
                              onChange: jr,
                              format: Ir = String
                            } = rr;
                            return (0, Ur.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ur.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Ur.jsx)("span", {
                                  children: Sr
                                }), (0, Ur.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Ir(ar)
                                })]
                              }), (0, Ur.jsx)("input", {
                                type: "range",
                                min: Qr,
                                max: Zr,
                                step: Wr,
                                value: Math.min(Zr, Math.max(Qr, ar)),
                                "aria-label": Sr,
                                onChange: rr => {
                                  jr(Number(rr.target.value))
                                }
                              })]
                            })
                          }

                          function rW(rr) {
                            let {
                              opts: Sr,
                              onChange: Qr
                            } = rr;
                            const Zr = Sr.colorGradients;
                            if (!wQ(Zr)) return (0, Ur.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ur.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, Ur.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, Ur.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Zr.map(((rr, Sr) => (0, Ur.jsx)("input", {
                                  type: "color",
                                  value: DZ(rr.color),
                                  "aria-label": `Colour ${Sr+1}`,
                                  onChange: rr => {
                                    const Wr = [...Zr];
                                    Wr[Sr] = {
                                      color: dZ(rr.target.value)
                                    }, Qr(Wr)
                                  }
                                }, Sr)))
                              })]
                            });
                            const Wr = (rr, Sr) => {
                              const Wr = [...Zr];
                              Wr[rr] = Sr, Qr(Wr)
                            };
                            return (0, Ur.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ur.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Ur.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, Ur.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Zr.map(((rr, Sr) => {
                                var Qr;
                                const Zr = null !== (Qr = rr.maxColor) && void 0 !== Qr ? Qr : rr.minColor;
                                return (0, Ur.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, Ur.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * rr.timeFraction), "%"]
                                  }), (0, Ur.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${DZ(rr.minColor)}, ${DZ(Zr)})`
                                    }
                                  }), (0, Ur.jsx)("input", {
                                    type: "color",
                                    value: DZ(rr.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*rr.timeFraction)}%`,
                                    onChange: Qr => {
                                      Wr(Sr, {
                                        ...rr,
                                        minColor: [...dZ(Qr.target.value), rr.minColor[3]]
                                      })
                                    }
                                  }), (0, Ur.jsx)("input", {
                                    type: "color",
                                    value: DZ(Zr),
                                    "aria-label": `Maximum colour at ${Math.round(100*rr.timeFraction)}%`,
                                    onChange: Qr => {
                                      Wr(Sr, {
                                        ...rr,
                                        maxColor: [...dZ(Qr.target.value), Zr[3]]
                                      })
                                    }
                                  })]
                                }, Sr)
                              }))]
                            })
                          }
                          const SW = [-.5, -.5, -.5],
                            QW = [.5, .5, .5],
                            ZW = [0, 1, 2, 3, 4, 5, 6, 7].map((rr => [1 & rr ? QW[0] : SW[0], 2 & rr ? QW[1] : SW[1], 4 & rr ? QW[2] : SW[2]]));class WW {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(rr, Sr, Qr, Zr) {
                              const Wr = Math.round(31 * Sr),
                                ar = Math.round(31 * Qr),
                                jr = Math.round(31 * Zr),
                                Ir = `${Wr}|${ar}|${jr}`;
                              let fr = this.tints.get(rr);
                              (!fr || fr.size > 2e3) && (fr = new Map, this.tints.set(rr, fr));
                              let Er = fr.get(Ir);
                              if (Er) return Er;
                              Er = document.createElement("canvas"), Er.width = rr.naturalWidth || 16, Er.height = rr.naturalHeight || 16;
                              const pr = Er.getContext("2d");
                              return pr ? (pr.imageSmoothingEnabled = !1, pr.drawImage(rr, 0, 0, Er.width, Er.height), pr.globalCompositeOperation = "multiply", pr.fillStyle = `rgb(${Wr/31*255}, ${ar/31*255}, ${jr/31*255})`, pr.fillRect(0, 0, Er.width, Er.height), pr.globalCompositeOperation = "destination-in", pr.drawImage(rr, 0, 0, Er.width, Er.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), fr.set(Ir, Er), Er
                            }
                          }

                          function aW(rr) {
                            let {
                              opts: Sr,
                              textureUrl: Qr,
                              burst: Wr,
                              paused: ar
                            } = rr;
                            const jr = (0, Zr.useRef)(null),
                              Ir = (0, Zr.useRef)(Sr);
                            Ir.current = Sr;
                            const fr = (0, Zr.useRef)(ar);
                            fr.current = ar;
                            const Er = (0, Zr.useRef)(null),
                              pr = (0, Zr.useRef)(null),
                              xr = (0, Zr.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(rr) {
                                let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const Qr = [-.5, -.5, -.5],
                                  Zr = [.5, .5, .5];
                                let Wr = .5;
                                for (let ar = 0; ar < 40; ar++) {
                                  const ar = FQ(rr, Qr, Zr, Sr),
                                    jr = Math.max(ar.life / 30, .001);
                                  for (; JQ(ar, rr.gravity, jr);) Wr = Math.max(Wr, Math.hypot(ar.pos[0], ar.pos[1], ar.pos[2]) + ar.size / 2)
                                }
                                return Wr
                              }(Sr)))), [Sr]),
                              mr = (0, Zr.useRef)(xr);
                            return mr.current = xr, (0, Zr.useEffect)((() => {
                              if (Er.current = null, !Qr) return;
                              const rr = new Image;
                              let Sr = !1;
                              return rr.onload = () => {
                                Sr || (Er.current = rr)
                              }, rr.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${Qr}`)
                              }, rr.src = Qr, () => {
                                Sr = !0
                              }
                            }), [Qr]), (0, Zr.useEffect)((() => {
                              var rr;
                              null === (rr = pr.current) || void 0 === rr || rr.call(pr)
                            }), [Sr, Wr]), (0, Zr.useEffect)((() => {
                              const rr = jr.current,
                                Sr = null === rr || void 0 === rr ? void 0 : rr.getContext("2d");
                              if (!rr || !Sr) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const Qr = new WW;
                              let Zr = [],
                                Wr = 0,
                                ar = -.7,
                                xr = mr.current,
                                Nr = performance.now(),
                                Ur = 0,
                                tr = !0,
                                hr = null;
                              const zr = () => {
                                const rr = Ir.current,
                                  Sr = Math.min(400, Math.max(0, Math.ceil(rr.manualEmitCount)));
                                Zr = [];
                                for (let Qr = 0; Qr < Sr; Qr++) Zr.push(FQ(rr, SW, QW, Math.random));
                                Wr = 0
                              };
                              pr.current = zr, zr();
                              const Yr = jr => {
                                Ur = requestAnimationFrame(Yr);
                                const pr = Math.min(.05, (jr - Nr) / 1e3);
                                if (Nr = jr, !tr) return;
                                const nr = window.devicePixelRatio || 1,
                                  er = Math.round(rr.clientWidth * nr),
                                  Kr = Math.round(rr.clientHeight * nr);
                                if (0 === er || 0 === Kr) return;
                                rr.width === er && rr.height === Kr || (rr.width = er, rr.height = Kr);
                                const yr = Ir.current;
                                null === hr && (ar += .18 * pr), xr += (mr.current - xr) * Math.min(1, 4 * pr);
                                const Br = .6 * pr;
                                Zr = Zr.filter((rr => JQ(rr, yr.gravity, Br))), 0 !== Zr.length || fr.current || (Wr += pr, Wr > .6 && zr());
                                const Tr = function(rr, Sr, Qr, Zr) {
                                  const Wr = 3.2 * Zr,
                                    ar = .44 * Math.min(rr, Sr) * Wr / Zr,
                                    jr = Math.cos(Qr),
                                    Ir = Math.sin(Qr),
                                    fr = Math.cos(.42),
                                    Er = Math.sin(.42);
                                  return (Qr, Zr, pr) => {
                                    const xr = Qr * Ir + pr * jr,
                                      mr = Wr - (Zr * Er + xr * fr);
                                    if (mr < .05) return null;
                                    const Nr = ar / mr;
                                    return {
                                      x: rr / 2 + (Qr * jr - pr * Ir) * Nr,
                                      y: Sr / 2 - (Zr * fr - xr * Er) * Nr,
                                      scale: Nr,
                                      depth: mr
                                    }
                                  }
                                }(er, Kr, ar, xr);
                                ! function(rr, Sr, Qr, Zr, Wr) {
                                  const ar = rr.createLinearGradient(0, 0, 0, Qr);
                                  ar.addColorStop(0, "#23262d"), ar.addColorStop(1, "#16181c"), rr.globalCompositeOperation = "source-over", rr.globalAlpha = 1, rr.fillStyle = ar, rr.fillRect(0, 0, Sr, Qr);
                                  const jr = (Sr, Qr) => {
                                      const Wr = Zr(Sr[0], Sr[1], Sr[2]),
                                        ar = Zr(Qr[0], Qr[1], Qr[2]);
                                      Wr && ar && (rr.beginPath(), rr.moveTo(Wr.x, Wr.y), rr.lineTo(ar.x, ar.y), rr.stroke())
                                    },
                                    Ir = Math.ceil(Wr) + 1,
                                    fr = SW[1];
                                  rr.lineWidth = 1, rr.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Er = -Ir; Er <= Ir; Er++) jr([Er + .5, fr, .5 - Ir], [Er + .5, fr, Ir + .5]), jr([.5 - Ir, fr, Er + .5], [Ir + .5, fr, Er + .5]);
                                  rr.strokeStyle = "rgba(255, 255, 255, 0.28)", rr.setLineDash([4, 4]);
                                  for (const Er of ZW)
                                    for (const rr of ZW) {
                                      const Sr = [0, 1, 2].filter((Sr => Er[Sr] !== rr[Sr]));
                                      1 === Sr.length && Er[Sr[0]] < rr[Sr[0]] && jr(Er, rr)
                                    }
                                  rr.setLineDash([])
                                }(Sr, er, Kr, Tr, xr);
                                const vr = Er.current,
                                  Or = Zr.map((rr => ({
                                    particle: rr,
                                    at: Tr(rr.pos[0], rr.pos[1], rr.pos[2])
                                  }))).filter((rr => null !== rr.at)).sort(((rr, Sr) => Sr.at.depth - rr.at.depth));
                                Sr.imageSmoothingEnabled = !1;
                                for (const rr of function(rr) {
                                    switch (rr) {
                                      case GQ.e.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case GQ.e.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case GQ.e.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case GQ.e.MultiplyAdd:
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
                                  }(yr.blendMode)) {
                                  Sr.globalCompositeOperation = rr.operation;
                                  for (const {
                                      particle: Zr,
                                      at: Wr
                                    }
                                    of Or) {
                                    const [ar, jr, Ir, fr] = bQ(Zr), Er = Math.max(1, Zr.size * Wr.scale);
                                    Sr.globalAlpha = rr.usesAlpha ? Math.min(1, Math.max(0, fr)) : 1, vr ? Sr.drawImage(Qr.get(vr, ar, jr, Ir), Wr.x - Er / 2, Wr.y - Er / 2, Er, Er) : (Sr.fillStyle = `rgb(${255*ar}, ${255*jr}, ${255*Ir})`, Sr.fillRect(Wr.x - Er / 2, Wr.y - Er / 2, Er, Er))
                                  }
                                }
                                Sr.globalCompositeOperation = "source-over", Sr.globalAlpha = 1
                              };
                              Ur = requestAnimationFrame(Yr);
                              const nr = new IntersectionObserver((rr => {
                                let [Sr] = rr;
                                tr = Sr.isIntersecting
                              }));
                              nr.observe(rr);
                              const er = Sr => {
                                  hr = Sr.clientX, rr.setPointerCapture(Sr.pointerId)
                                },
                                Kr = rr => {
                                  null !== hr && (ar += .01 * (rr.clientX - hr), hr = rr.clientX)
                                },
                                yr = () => {
                                  hr = null
                                };
                              return rr.addEventListener("pointerdown", er), rr.addEventListener("pointermove", Kr), rr.addEventListener("pointerup", yr), rr.addEventListener("pointercancel", yr), () => {
                                cancelAnimationFrame(Ur), nr.disconnect(), pr.current = null, rr.removeEventListener("pointerdown", er), rr.removeEventListener("pointermove", Kr), rr.removeEventListener("pointerup", yr), rr.removeEventListener("pointercancel", yr)
                              }
                            }), []), (0, Ur.jsx)("canvas", {
                              ref: jr,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${Sr.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const jW = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            IW = [{
                              mode: GQ.e.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: GQ.e.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: GQ.e.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: GQ.e.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: GQ.e.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            fW = (0, Zr.forwardRef)((function(rr, Sr) {
                              var Qr, Wr;
                              let {
                                textures: jr
                              } = rr;
                              const Ir = nZ(),
                                fr = (0, Zr.useRef)(null),
                                [Er, pr] = (0, Zr.useState)(AQ),
                                [xr, mr] = (0, Zr.useState)("example"),
                                [Nr, tr] = (0, Zr.useState)(0),
                                [zr, Yr] = (0, Zr.useState)(!1),
                                er = rr => {
                                  const Sr = "example" === rr ? AQ : kQ(rr);
                                  Sr && (pr(Sr), mr(rr))
                                };
                              (0, Zr.useImperativeHandle)(Sr, (() => ({
                                preview: rr => {
                                  var Sr;
                                  er(rr), null === (Sr = fr.current) || void 0 === Sr || Sr.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Kr = rr => {
                                  pr({
                                    ...Er,
                                    ...rr
                                  }), mr(null)
                                },
                                yr = function(rr, Sr) {
                                  if (null !== Sr) return `${uQ}    presetId: "${Sr}",\n${rZ}\n})`;
                                  const Qr = rr.velocityGradients.map((rr => `        {\n            timeFraction: ${DQ(rr.timeFraction)},\n            factor: ${DQ(rr.factor)},\n            factor2: ${DQ(rr.factor2)},\n        },`)),
                                    Zr = [`    dir1: ${dQ(rr.dir1)},`, `    dir2: ${dQ(rr.dir2)},`, rZ, `    texture: "${rr.texture}",`, `    minLifeTime: ${DQ(rr.minLifeTime)},`, `    maxLifeTime: ${DQ(rr.maxLifeTime)},`, `    minEmitPower: ${DQ(rr.minEmitPower)},`, `    maxEmitPower: ${DQ(rr.maxEmitPower)},`, `    minSize: ${DQ(rr.minSize)},`, `    maxSize: ${DQ(rr.maxSize)},`, `    manualEmitCount: ${DQ(rr.manualEmitCount)},`, `    gravity: ${dQ(rr.gravity)},`, `    colorGradients: ${sQ(rr.colorGradients,"    ")},`, `    velocityGradients: ${Qr.length>0?`[\n${Qr.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${DQ(rr.blendMode)},`];
                                  return void 0 !== rr.hideDist && Zr.push(`    hideDist: ${DQ(rr.hideDist)},`), `${uQ}${Zr.join("\n")}\n})`
                                }(Er, null === xr || "example" === xr ? null : xr),
                                Tr = jr.includes(Er.texture) ? jr : [...jr, Er.texture];
                              return (0, Ur.jsxs)("section", {
                                ref: fr,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, Ur.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, Ur.jsxs)("div", {
                                    children: [(0, Ur.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, Ur.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, Ur.jsx)(nr, {
                                    text: yr,
                                    label: "Copy code"
                                  })]
                                }), (0, Ur.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, Ur.jsx)("button", {
                                    type: "button",
                                    className: ar()("DocsVariantChip", {
                                      Active: "example" === xr
                                    }),
                                    onClick: () => {
                                      er("example")
                                    },
                                    children: "Example"
                                  }), jW.filter((rr => null !== kQ(rr))).map((rr => (0, Ur.jsx)("button", {
                                    type: "button",
                                    className: ar()("DocsVariantChip", {
                                      Active: xr === rr
                                    }),
                                    onClick: () => {
                                      er(rr)
                                    },
                                    children: rr
                                  }, rr))), (0, Ur.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== xr && void 0 !== xr ? xr : "custom",
                                    "aria-label": "Preset",
                                    onChange: rr => {
                                      er(rr.target.value)
                                    },
                                    children: [(0, Ur.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === xr && (0, Ur.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), MQ.c.map((rr => (0, Ur.jsx)("option", {
                                      value: rr,
                                      children: rr
                                    }, rr)))]
                                  })]
                                }), (0, Ur.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, Ur.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, Ur.jsx)(aW, {
                                      opts: Er,
                                      textureUrl: null !== (Qr = null === Ir || void 0 === Ir ? void 0 : Ir.getParticleTextureUrl(Er.texture)) && void 0 !== Qr ? Qr : null,
                                      burst: Nr,
                                      paused: zr
                                    }), (0, Ur.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, Ur.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          tr(Nr + 1)
                                        },
                                        children: [(0, Ur.jsx)(hr, {
                                          name: "replay"
                                        }), (0, Ur.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, Ur.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": zr,
                                        onClick: () => {
                                          Yr(!zr)
                                        },
                                        children: [(0, Ur.jsx)(hr, {
                                          name: zr ? "play" : "pause"
                                        }), (0, Ur.jsx)("span", {
                                          children: zr ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, Ur.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, Ur.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Ur.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, Ur.jsx)("span", {
                                          children: "Texture"
                                        }), (0, Ur.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Er.texture
                                        })]
                                      }), (0, Ur.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: Tr.map((rr => {
                                          var Sr;
                                          const Qr = null !== (Sr = null === Ir || void 0 === Ir ? void 0 : Ir.getParticleTextureUrl(rr)) && void 0 !== Sr ? Sr : null;
                                          return (0, Ur.jsx)("button", {
                                            type: "button",
                                            className: ar()("DocsParticleTexture", {
                                              Active: Er.texture === rr
                                            }),
                                            title: rr,
                                            "aria-label": rr,
                                            "aria-pressed": Er.texture === rr,
                                            onClick: () => {
                                              Kr({
                                                texture: rr
                                              })
                                            },
                                            children: Qr ? (0, Ur.jsx)("img", {
                                              src: Qr,
                                              alt: ""
                                            }) : (0, Ur.jsx)(hr, {
                                              name: "image"
                                            })
                                          }, rr)
                                        }))
                                      })]
                                    }), (0, Ur.jsx)(uZ, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Er.manualEmitCount,
                                      onChange: rr => {
                                        Kr({
                                          manualEmitCount: rr
                                        })
                                      }
                                    }), (0, Ur.jsx)(sZ, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Er.minLifeTime,
                                      high: Er.maxLifeTime,
                                      onChange: (rr, Sr) => {
                                        Kr({
                                          minLifeTime: rr,
                                          maxLifeTime: Sr
                                        })
                                      }
                                    }), (0, Ur.jsx)(sZ, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Er.minEmitPower,
                                      high: Er.maxEmitPower,
                                      onChange: (rr, Sr) => {
                                        Kr({
                                          minEmitPower: rr,
                                          maxEmitPower: Sr
                                        })
                                      }
                                    }), (0, Ur.jsx)(sZ, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Er.minSize,
                                      high: Er.maxSize,
                                      onChange: (rr, Sr) => {
                                        Kr({
                                          minSize: rr,
                                          maxSize: Sr
                                        })
                                      }
                                    }), (0, Ur.jsx)(uZ, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Wr = Er.gravity[1]) && void 0 !== Wr ? Wr : 0,
                                      onChange: rr => {
                                        var Sr, Qr;
                                        Kr({
                                          gravity: [null !== (Sr = Er.gravity[0]) && void 0 !== Sr ? Sr : 0, rr, null !== (Qr = Er.gravity[2]) && void 0 !== Qr ? Qr : 0]
                                        })
                                      }
                                    }), (0, Ur.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Ur.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, Ur.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, Ur.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Er.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: rr => {
                                          Kr({
                                            blendMode: Number(rr.target.value)
                                          })
                                        },
                                        children: IW.map((rr => {
                                          let {
                                            mode: Sr,
                                            label: Qr
                                          } = rr;
                                          return (0, Ur.jsx)("option", {
                                            value: Sr,
                                            children: Qr
                                          }, Sr)
                                        }))
                                      })]
                                    }), (0, Ur.jsx)(rW, {
                                      opts: Er,
                                      onChange: rr => {
                                        Kr({
                                          colorGradients: rr
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, Ur.jsx)(Br, {
                                  code: yr,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var EW = Qr(5223),
                            pW = Qr(2057);

                          function xW(rr, Sr) {
                            return rr ? EW.b.includes(Sr) ? rr.getIngameIconUrl(Sr) : rr.getItemIconUrl(Sr) : null
                          }

                          function mW(rr) {
                            var Sr, Qr, Zr;
                            let {
                              part: Wr,
                              assets: jr
                            } = rr;
                            const Ir = xW(jr, Wr.icon),
                              fr = null !== (Sr = null === (Qr = Wr.style) || void 0 === Qr ? void 0 : Qr.fontSize) && void 0 !== Sr ? Sr : "1.8em",
                              Er = (0, MS._b)(Wr.style);
                            return (0, Ur.jsxs)("span", {
                              className: ar()("DocsBloxdTextIcon", {
                                Missing: !Ir
                              }),
                              style: {
                                width: fr,
                                height: fr,
                                opacity: null === (Zr = Wr.style) || void 0 === Zr ? void 0 : Zr.opacity
                              },
                              title: Ir ? void 0 : "No Bloxd icon, item or block has this name",
                              children: [Ir && Er && (0, Ur.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Er,
                                  maskImage: `url("${Ir}")`,
                                  WebkitMaskImage: `url("${Ir}")`
                                }
                              }), Ir ? (0, Ur.jsx)("img", {
                                src: Ir,
                                alt: "",
                                className: ar()({
                                  Tinted: Er
                                })
                              }) : (0, Ur.jsx)(hr, {
                                name: "image"
                              })]
                            })
                          }

                          function NW(rr) {
                            let {
                              parts: Sr,
                              className: Qr
                            } = rr;
                            const Zr = nZ(),
                              Wr = [];
                            let jr = [];
                            const Ir = rr => {
                              jr.length > 0 && (Wr.push((0, Ur.jsx)(pW.c, {
                                text: jr
                              }, `run-${rr}`)), jr = [])
                            };
                            return Sr.forEach(((rr, Sr) => {
                              "icon" !== iS(rr) || kS(rr.icon) ? jr.push(rr) : (Ir(Sr), Wr.push((0, Ur.jsx)(mW, {
                                part: rr,
                                assets: Zr
                              }, `icon-${Sr}`)))
                            })), Ir(Sr.length), (0, Ur.jsx)("div", {
                              className: ar()("DocsStyledTextPreview", Qr),
                              children: Wr
                            })
                          }
                          const UW = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let tW = null;

                          function hW(rr) {
                            if (tW ??= document.createElement("canvas").getContext("2d"), !tW) return "#000000";
                            tW.fillStyle = "#000000", tW.fillStyle = rr;
                            const Sr = tW.fillStyle;
                            return Sr.startsWith("#") ? Sr : "#000000"
                          }

                          function zW(rr) {
                            let {
                              value: Sr,
                              label: Qr,
                              onChange: Zr
                            } = rr;
                            return (0, Ur.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, Ur.jsx)("input", {
                                type: "color",
                                value: hW(Sr),
                                "aria-label": `${Qr} picker`,
                                onChange: rr => {
                                  Zr(rr.target.value)
                                }
                              }), (0, Ur.jsx)("input", {
                                type: "text",
                                value: Sr,
                                placeholder: "#ffb914 or gold",
                                "aria-label": Qr,
                                spellCheck: !1,
                                onChange: rr => {
                                  Zr(rr.target.value)
                                }
                              })]
                            })
                          }

                          function YW(rr) {
                            let {
                              value: Sr,
                              fontAwesomeIcons: Qr,
                              onChange: Wr
                            } = rr;
                            const jr = nZ(),
                              [Ir, fr] = (0, Zr.useState)(kS(Sr) ? "fontAwesome" : "bloxd"),
                              [Er, pr] = (0, Zr.useState)(""),
                              xr = Er.trim().toLowerCase(),
                              mr = "bloxd" === Ir ? EW.b : Qr,
                              Nr = xr ? mr.filter((rr => rr.toLowerCase().includes(xr))) : mr;
                            return (0, Ur.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, Ur.jsx)("input", {
                                type: "text",
                                value: Sr,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: rr => {
                                  Wr(rr.target.value)
                                }
                              }), (0, Ur.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, Ur.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((rr => (0, Ur.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": Ir === rr,
                                    className: ar()("DocsVariantChip", {
                                      Active: Ir === rr
                                    }),
                                    onClick: () => {
                                      fr(rr)
                                    },
                                    children: "bloxd" === rr ? `Bloxd icons (${EW.b.length})` : `Font Awesome (${Qr.length})`
                                  }, rr))), (0, Ur.jsx)("input", {
                                    type: "search",
                                    value: Er,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: rr => {
                                      pr(rr.target.value)
                                    }
                                  })
                                ]
                              }), (0, Ur.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Nr.map((rr => {
                                  const Qr = "bloxd" === Ir ? xW(jr, rr) : null;
                                  return (0, Ur.jsx)("button", {
                                    type: "button",
                                    title: rr,
                                    "aria-label": rr,
                                    "aria-pressed": rr === Sr,
                                    className: ar()("DocsIconPickerOption", {
                                      Active: rr === Sr
                                    }),
                                    onClick: () => {
                                      Wr(rr)
                                    },
                                    children: "fontAwesome" === Ir ? (0, Ur.jsx)(eQ.c, {
                                      name: rr
                                    }) : Qr ? (0, Ur.jsx)("img", {
                                      src: Qr,
                                      alt: ""
                                    }) : (0, Ur.jsx)(hr, {
                                      name: "image"
                                    })
                                  }, rr)
                                })), 0 === Nr.length && (0, Ur.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Er, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function nW(rr) {
                            let {
                              property: Sr,
                              value: Qr,
                              fontAwesomeIcons: Zr,
                              onChange: Wr
                            } = rr;
                            const {
                              field: ar,
                              label: jr
                            } = Sr, Ir = rr => "" !== rr || Sr.isRequired ? rr : void 0;
                            switch (ar.kind) {
                              case "text":
                                return ar.multiline ? (0, Ur.jsx)("textarea", {
                                  value: String(null !== Qr && void 0 !== Qr ? Qr : ""),
                                  rows: 2,
                                  "aria-label": jr,
                                  onChange: rr => {
                                    Wr(rr.target.value)
                                  }
                                }) : (0, Ur.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Qr && void 0 !== Qr ? Qr : ""),
                                  "aria-label": jr,
                                  onChange: rr => {
                                    Wr(Ir(rr.target.value))
                                  }
                                });
                              case "size":
                                return (0, Ur.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Qr && void 0 !== Qr ? Qr : ""),
                                  placeholder: Sr.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": jr,
                                  spellCheck: !1,
                                  onChange: rr => {
                                    Wr(Ir(rr.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, Ur.jsx)(zW, {
                                  value: String(null !== Qr && void 0 !== Qr ? Qr : ""),
                                  label: jr,
                                  onChange: rr => {
                                    Wr(Ir(rr))
                                  }
                                });
                              case "colours": {
                                const rr = Array.isArray(Qr) ? Qr : [],
                                  Sr = rr => {
                                    Wr(rr.length > 0 ? rr : void 0)
                                  };
                                return (0, Ur.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [rr.map(((Qr, Zr) => (0, Ur.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, Ur.jsx)(zW, {
                                      value: Qr,
                                      label: `${jr} ${Zr+1}`,
                                      onChange: Qr => {
                                        Sr(rr.map(((rr, Sr) => Sr === Zr ? Qr : rr)))
                                      }
                                    }), (0, Ur.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Zr+1}`,
                                      onClick: () => {
                                        Sr(rr.filter(((rr, Sr) => Sr !== Zr)))
                                      },
                                      children: (0, Ur.jsx)(hr, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Zr))), (0, Ur.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var Qr;
                                      Sr([...rr, null !== (Qr = rr.at(-1)) && void 0 !== Qr ? Qr : "#ffffff"])
                                    },
                                    children: [(0, Ur.jsx)(hr, {
                                      name: "plus"
                                    }), 0 === rr.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var fr;
                                const rr = "number" === typeof Qr ? Qr : Number(null !== (fr = Sr.defaultText) && void 0 !== fr ? fr : 0);
                                return (0, Ur.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, Ur.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: rr,
                                    "aria-label": jr,
                                    onChange: rr => {
                                      Wr(Number(rr.target.value))
                                    }
                                  }), (0, Ur.jsx)("output", {
                                    children: rr.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, Ur.jsxs)("select", {
                                  value: String(null !== Qr && void 0 !== Qr ? Qr : ""),
                                  "aria-label": jr,
                                  onChange: rr => {
                                    Wr(Ir(rr.target.value))
                                  },
                                  children: [!Sr.isRequired && (0, Ur.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", Sr.defaultText, ")"]
                                  }), ar.options.map((rr => (0, Ur.jsx)("option", {
                                    value: rr,
                                    children: rr
                                  }, rr)))]
                                });
                              case "icon":
                                return (0, Ur.jsx)(YW, {
                                  value: String(null !== Qr && void 0 !== Qr ? Qr : ""),
                                  fontAwesomeIcons: Zr,
                                  onChange: Wr
                                })
                            }
                          }

                          function eW(rr) {
                            let Sr;
                            try {
                              Sr = JSON.parse(rr)
                            } catch (Qr) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${Qr.message}`
                              }
                            }
                            return QQ(Sr) ? {
                              part: Sr,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function KW(rr) {
                            let {
                              parts: Sr,
                              index: Qr,
                              fontAwesomeIcons: Wr,
                              onChange: ar,
                              bq: jr,
                              onClose: Ir
                            } = rr;
                            const fr = (0, Zr.useContext)(US),
                              pr = (0, Zr.useRef)(null),
                              xr = Sr[Qr],
                              mr = iS(xr),
                              [Nr, tr] = (0, Zr.useState)((() => JSON.stringify(xr, null, 2))),
                              zr = (0, Zr.useMemo)((() => "other" === mr ? eW(Nr).error : null), [mr, Nr]);
                            (0, Zr.useEffect)((() => {
                              var rr;
                              null === (rr = pr.current) || void 0 === rr || rr.focus()
                            }), []);
                            const Yr = (0, Ur.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: rr => {
                                rr.target === rr.currentTarget && Ir()
                              },
                              children: (0, Ur.jsxs)("div", {
                                ref: pr,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${Qr+1}: ${AS[mr]}`,
                                tabIndex: -1,
                                onKeyDown: rr => {
                                  "Escape" === rr.key ? (rr.stopPropagation(), Ir()) : "Tab" === rr.key && pr.current && function(rr, Sr) {
                                    const Qr = Array.from(rr.querySelectorAll(lS)),
                                      Zr = Qr[0],
                                      Wr = Qr.at(-1);
                                    if (!Zr || !Wr) return;
                                    const ar = document.activeElement;
                                    !Sr.shiftKey || ar !== Zr && ar !== rr ? Sr.shiftKey || ar !== Wr || (Sr.preventDefault(), Zr.focus()) : (Sr.preventDefault(), Wr.focus())
                                  }(pr.current, rr)
                                },
                                children: [(0, Ur.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, Ur.jsxs)("div", {
                                    children: [(0, Ur.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", Qr + 1]
                                    }), (0, Ur.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: AS[mr]
                                    })]
                                  }), (0, Ur.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: Ir,
                                    children: (0, Ur.jsx)(hr, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, Ur.jsx)(NW, {
                                  parts: Sr,
                                  className: "DocsTextDialogPreview"
                                }), (0, Ur.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === mr ? (0, Ur.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, Ur.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, Ur.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Nr,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: rr => {
                                        tr(rr.target.value);
                                        const Sr = eW(rr.target.value);
                                        null !== Sr.part && ar(Sr.part)
                                      }
                                    }), zr && (0, Ur.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: zr
                                    })]
                                  }) : cS[mr].map((rr => {
                                    const Sr = oS(xr, rr.path),
                                      Qr = rr.isRequired ? JSON.stringify(JS(xr, rr.path)) === JSON.stringify(xr) : void 0 === Sr;
                                    return (0, Ur.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, Ur.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, Ur.jsx)("span", {
                                          children: rr.label
                                        }), (0, Ur.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: Qr,
                                          "aria-label": `Reset ${rr.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            ar(JS(xr, rr.path))
                                          },
                                          children: [(0, Ur.jsx)(hr, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, Ur.jsx)(nW, {
                                        property: rr,
                                        value: Sr,
                                        fontAwesomeIcons: Wr,
                                        onChange: Sr => {
                                          ar(bS(xr, rr.path, Sr))
                                        }
                                      }), !rr.isRequired && (0, Ur.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", rr.defaultText]
                                      })]
                                    }, rr.path.join("."))
                                  }))
                                }), (0, Ur.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, Ur.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: jr,
                                    children: [(0, Ur.jsx)(hr, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, Ur.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: Ir,
                                    children: "Done"
                                  })]
                                }), (0, Ur.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: UW.map((rr => (0, Ur.jsx)("option", {
                                    value: rr
                                  }, rr)))
                                })]
                              })
                            });
                            return fr ? (0, Er.createPortal)(Yr, fr) : Yr
                          }
                          const yW = [{
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
                            BW = Object.keys(VS);

                          function TW(rr) {
                            let {
                              fontAwesomeIcons: Sr
                            } = rr;
                            const [Qr, Wr] = (0, Zr.useState)(yW[0].parts), [jr, Ir] = (0, Zr.useState)((() => uS(yW[0].parts))), [fr, Er] = (0, Zr.useState)(null), [pr, xr] = (0, Zr.useState)(!1), [mr, Nr] = (0, Zr.useState)(null), [tr, zr] = (0, Zr.useState)(!1), [Yr, nr] = (0, Zr.useState)(null), er = (0, Zr.useRef)(null), Kr = uS(Qr);
                            (0, Zr.useLayoutEffect)((() => {
                              var rr;
                              if (!Yr) return;
                              const Sr = rr => {
                                  var Sr;
                                  return null === (Sr = er.current) || void 0 === Sr ? void 0 : Sr.querySelector(`[data-focus-key="${rr}"]`)
                                },
                                Qr = Sr(Yr.key);
                              null === (rr = Qr && !Qr.disabled ? Qr : Sr(Yr.fallback)) || void 0 === rr || rr.focus(), nr(null)
                            }), [Yr]);
                            const yr = rr => {
                                Wr(rr), Ir(uS(rr)), Er(null)
                              },
                              Tr = rr => {
                                yr(Qr.filter(((Sr, Qr) => Qr !== rr))), nr({
                                  key: `edit-${Math.min(rr,Qr.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              vr = (rr, Sr) => {
                                const Zr = [...Qr],
                                  [Wr] = Zr.splice(rr, 1);
                                Zr.splice(rr + Sr, 0, Wr), yr(Zr);
                                nr({
                                  key: `${Sr<0?"up":"down"}-${rr+Sr}`,
                                  fallback: `edit-${rr+Sr}`
                                })
                              };
                            return (0, Ur.jsxs)("section", {
                              ref: er,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, Ur.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, Ur.jsxs)("div", {
                                  children: [(0, Ur.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, Ur.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, Ur.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: yW.map((rr => (0, Ur.jsx)("button", {
                                  type: "button",
                                  className: ar()("DocsVariantChip", {
                                    Active: Kr === uS(rr.parts)
                                  }),
                                  onClick: () => {
                                    yr(rr.parts)
                                  },
                                  children: rr.label
                                }, rr.label)))
                              }), (0, Ur.jsx)(NW, {
                                parts: Qr,
                                className: "DocsTextEditorPreview"
                              }), (0, Ur.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, Ur.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Ur.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, Ur.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [Qr.map(((rr, Sr) => {
                                      const Zr = iS(rr);
                                      return (0, Ur.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, Ur.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${Sr}`,
                                          "aria-label": `Edit part ${Sr+1}, ${AS[Zr]}`,
                                          onClick: () => {
                                            Nr(Sr)
                                          },
                                          children: [(0, Ur.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: AS[Zr]
                                          }), (0, Ur.jsx)(NW, {
                                            parts: [rr],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Zr && (0, Ur.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: DS(rr)
                                          })]
                                        }), (0, Ur.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, Ur.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Sr+1} up`,
                                            "data-focus-key": `up-${Sr}`,
                                            disabled: 0 === Sr,
                                            onClick: () => {
                                              vr(Sr, -1)
                                            },
                                            children: (0, Ur.jsx)(hr, {
                                              name: "chevron-up"
                                            })
                                          }), (0, Ur.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Sr+1} down`,
                                            "data-focus-key": `down-${Sr}`,
                                            disabled: Sr === Qr.length - 1,
                                            onClick: () => {
                                              vr(Sr, 1)
                                            },
                                            children: (0, Ur.jsx)(hr, {
                                              name: "chevron-down"
                                            })
                                          }), (0, Ur.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${Sr+1}`,
                                            onClick: () => {
                                              Tr(Sr)
                                            },
                                            children: (0, Ur.jsx)(hr, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, Sr)
                                    })), 0 === Qr.length && (0, Ur.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, Ur.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: rr => {
                                      "Escape" === rr.key && tr && (rr.stopPropagation(), zr(!1), nr({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, Ur.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": tr,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        zr(!tr)
                                      },
                                      children: [(0, Ur.jsx)(hr, {
                                        name: "plus"
                                      }), "Add a part", (0, Ur.jsx)(hr, {
                                        name: tr ? "chevron-up" : "chevron-down"
                                      })]
                                    }), tr && (0, Ur.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: BW.map((rr => (0, Ur.jsx)("li", {
                                        children: (0, Ur.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (rr => {
                                              yr([...Qr, VS[rr]]), zr(!1), Nr(Qr.length)
                                            })(rr)
                                          },
                                          children: AS[rr]
                                        })
                                      }, rr)))
                                    })]
                                  })]
                                }), (0, Ur.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Ur.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, Ur.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": pr,
                                      onClick: () => {
                                        xr(!pr)
                                      },
                                      children: [(0, Ur.jsx)(hr, {
                                        name: pr ? "check" : "pencil"
                                      }), pr ? "Done" : "Edit"]
                                    })]
                                  }), pr ? (0, Ur.jsxs)(Ur.Fragment, {
                                    children: [(0, Ur.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: jr,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: rr => {
                                        Ir(rr.target.value);
                                        const Sr = ZQ(rr.target.value);
                                        Er(Sr.error), Sr.parts && Wr(Sr.parts)
                                      }
                                    }), fr && (0, Ur.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: fr
                                    })]
                                  }) : (0, Ur.jsx)(Br, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Kr})`
                                  })]
                                })]
                              }), null !== mr && mr < Qr.length && (0, Ur.jsx)(KW, {
                                parts: Qr,
                                index: mr,
                                fontAwesomeIcons: Sr,
                                onChange: rr => {
                                  ((rr, Sr) => {
                                    yr(Qr.map(((Qr, Zr) => Zr === rr ? Sr : Qr)))
                                  })(mr, rr)
                                },
                                bq: () => {
                                  Tr(mr), Nr(null)
                                },
                                onClose: () => {
                                  Nr(null), nr({
                                    key: `edit-${mr}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var vW = Qr(5667),
                            OW = Qr(5642),
                            LW = Qr(5658),
                            lW = Qr(5675);
                          const XW = 40,
                            PW = 800,
                            HW = 150,
                            qW = 8e3,
                            RW = 2e3;

                          function gW(rr, Sr) {
                            return 12 * Math.log2(Sr / rr)
                          }

                          function CW(rr, Sr) {
                            return Math.round(rr * 2 ** (Sr / 12) * 10) / 10
                          }

                          function MW(rr) {
                            return `${rr} ms`
                          }

                          function GW(rr) {
                            return `${rr} st`
                          }
                          const kW = [{
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

                          function AW(rr) {
                            let {
                              synth: Sr,
                              onChange: Qr
                            } = rr;
                            const Zr = (0, vW.n)(Sr);
                            return (0, Ur.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, Ur.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Ur.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, Ur.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, Ur.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, Ur.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, Ur.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: vW.h.map((rr => (0, Ur.jsx)("button", {
                                      type: "button",
                                      className: ar()("DocsVariantChip", {
                                        Active: Sr.waveform === rr
                                      }),
                                      "aria-pressed": Sr.waveform === rr,
                                      onClick: () => {
                                        Qr({
                                          waveform: rr
                                        })
                                      },
                                      children: rr
                                    }, rr)))
                                  })]
                                }), (0, Ur.jsx)(uZ, {
                                  label: "Pitch",
                                  min: 0,
                                  max: gW(XW, PW),
                                  step: .1,
                                  value: gW(XW, Sr.pitchHz),
                                  format: () => `${Sr.pitchHz} Hz`,
                                  onChange: rr => {
                                    Qr({
                                      pitchHz: CW(XW, rr)
                                    })
                                  }
                                }), (0, Ur.jsx)(uZ, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: Sr.syllableMs,
                                  format: MW,
                                  onChange: rr => {
                                    Qr({
                                      syllableMs: rr
                                    })
                                  }
                                }), (0, Ur.jsx)(uZ, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: Sr.volume,
                                  onChange: rr => {
                                    Qr({
                                      volume: rr
                                    })
                                  }
                                })]
                              }), (0, Ur.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Ur.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, Ur.jsx)(uZ, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: Sr.durationMs,
                                  format: MW,
                                  onChange: rr => {
                                    Qr({
                                      durationMs: rr
                                    })
                                  }
                                }), (0, Ur.jsx)(uZ, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Zr.durationMs,
                                  step: 1,
                                  value: Zr.attackMs,
                                  format: MW,
                                  onChange: rr => {
                                    Qr({
                                      attackMs: rr
                                    })
                                  }
                                }), (0, Ur.jsx)(uZ, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Zr.durationMs - Zr.attackMs,
                                  step: 1,
                                  value: Zr.releaseMs,
                                  format: MW,
                                  onChange: rr => {
                                    Qr({
                                      releaseMs: rr
                                    })
                                  }
                                }), (0, Ur.jsx)(uZ, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: Sr.glideSemitones,
                                  format: GW,
                                  onChange: rr => {
                                    Qr({
                                      glideSemitones: rr
                                    })
                                  }
                                }), (0, Ur.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, Ur.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== Sr.lowpassHz,
                                    onChange: rr => {
                                      Qr({
                                        lowpassHz: rr.target.checked ? RW : null
                                      })
                                    }
                                  }), (0, Ur.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== Sr.lowpassHz && (0, Ur.jsx)(uZ, {
                                  label: "Filter",
                                  min: 0,
                                  max: gW(HW, qW),
                                  step: .1,
                                  value: gW(HW, Sr.lowpassHz),
                                  format: () => `${Sr.lowpassHz} Hz`,
                                  onChange: rr => {
                                    Qr({
                                      lowpassHz: CW(HW, rr)
                                    })
                                  }
                                })]
                              }), (0, Ur.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Ur.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), kW.map((rr => {
                                  let {
                                    key: Zr,
                                    label: Wr,
                                    max: ar
                                  } = rr;
                                  return (0, Ur.jsx)(uZ, {
                                    label: Wr,
                                    min: 0,
                                    max: ar,
                                    step: .1,
                                    value: Sr.intonation[Zr],
                                    format: GW,
                                    onChange: rr => {
                                      Qr({
                                        intonation: {
                                          ...Sr.intonation,
                                          [Zr]: rr
                                        }
                                      })
                                    }
                                  }, Zr)
                                }))]
                              })]
                            })
                          }
                          const VW = Object.keys(vW.l),
                            iW = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function wW(rr) {
                            var Sr;
                            const Qr = JSON.stringify((0, vW.n)(rr));
                            return null !== (Sr = VW.find((rr => JSON.stringify((0, vW.n)(vW.l[rr])) === Qr))) && void 0 !== Sr ? Sr : null
                          }

                          function cW(rr) {
                            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof rr || null === rr) return JSON.stringify(rr);
                            return `{\n${Object.entries(rr).map((rr=>{let[Qr,Zr]=rr;return`${Sr}    ${Qr}: ${cW(Zr,`${Sr}    `)},`})).join("\n")}\n${Sr}}`
                          }

                          function FW(rr, Sr, Qr) {
                            const Zr = wW(rr),
                              Wr = [`    line: ${JSON.stringify(Sr)},`];
                            return Qr && Wr.push(`    speakerName: ${JSON.stringify(Qr)},`), Wr.push("    voice,"), `const voice = ${Zr?JSON.stringify(Zr):cW((0,vW.n)(rr))}\n\napi.setClientOption(playerId, "dialogue", {\n${Wr.join("\n")}\n})`
                          }
                          const oW = 400,
                            bW = 90;
                          let JW = null;

                          function DW(rr, Sr, Qr) {
                            return JW ??= new AudioContext, JW.resume(), (0, lW.e)(JW, JW.destination, rr, Sr, Qr, (() => {}))
                          }

                          function dW() {
                            const [rr, Sr] = (0, Zr.useState)(vW.l.regular), [Qr, Wr] = (0, Zr.useState)(iW[0]), [jr, Ir] = (0, Zr.useState)("Innkeeper"), [fr, Er] = (0, Zr.useState)(0), pr = pZ((rr => rr.volume)), xr = (0, Zr.useRef)(null), mr = (0, Zr.useRef)(0), Nr = (0, Zr.useRef)(0), tr = () => {
                              var rr;
                              null === (rr = xr.current) || void 0 === rr || rr.call(xr), xr.current = null
                            };
                            (0, Zr.useEffect)((() => () => {
                              var rr;
                              null === (rr = xr.current) || void 0 === rr || rr.call(xr), window.clearTimeout(mr.current)
                            }), []);
                            const zr = (0, Zr.useMemo)((() => ({
                                line: Qr,
                                speakerName: jr || void 0,
                                voice: rr
                              })), [Qr, jr, rr]),
                              Yr = (0, Zr.useRef)(zr);
                            Yr.current = zr;
                            const er = wW(rr),
                              Kr = rr => {
                                window.clearTimeout(mr.current), tr();
                                const {
                                  plan: Sr,
                                  synth: Qr
                                } = (0, LW.h)(rr);
                                Qr && (xr.current = DW(Qr, Sr.blips, pr)), Er((rr => rr + 1))
                              },
                              yr = FW(rr, Qr, jr);
                            return (0, Ur.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, Ur.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, Ur.jsxs)("div", {
                                  children: [(0, Ur.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, Ur.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, Ur.jsx)(nr, {
                                  text: yr,
                                  label: "Copy code"
                                })]
                              }), (0, Ur.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [VW.map((rr => (0, Ur.jsx)("button", {
                                  type: "button",
                                  className: ar()("DocsVariantChip", {
                                    Active: er === rr
                                  }),
                                  "aria-pressed": er === rr,
                                  onClick: () => {
                                    (rr => {
                                      const Qr = vW.l[rr];
                                      Sr(Qr), Kr({
                                        ...zr,
                                        voice: Qr
                                      })
                                    })(rr)
                                  },
                                  children: rr
                                }, rr))), !er && (0, Ur.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, Ur.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, Ur.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, Ur.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, Ur.jsx)(OW.c, {
                                      display: zr
                                    }, fr)
                                  }), (0, Ur.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: rr => {
                                      rr.preventDefault(), Kr(zr)
                                    },
                                    children: [(0, Ur.jsx)("input", {
                                      value: Qr,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: rr => {
                                        Wr(rr.target.value)
                                      }
                                    }), (0, Ur.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, Ur.jsx)(hr, {
                                        name: "play"
                                      }), (0, Ur.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, Ur.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: iW.map((rr => (0, Ur.jsx)("button", {
                                      type: "button",
                                      className: ar()("DocsVariantChip", {
                                        Active: Qr === rr
                                      }),
                                      onClick: () => {
                                        var Sr;
                                        Wr(Sr = rr), Kr({
                                          ...zr,
                                          line: Sr
                                        })
                                      },
                                      children: rr
                                    }, rr)))
                                  }), (0, Ur.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, Ur.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, Ur.jsx)("input", {
                                      value: jr,
                                      placeholder: "No name",
                                      onChange: rr => {
                                        Ir(rr.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, Ur.jsx)(AW, {
                                  synth: rr,
                                  onChange: Qr => {
                                    const Zr = {
                                      ...rr,
                                      ...Qr
                                    };
                                    Sr(Zr);
                                    const Wr = {
                                        ...zr,
                                        voice: Zr
                                      },
                                      ar = performance.now();
                                    if (ar - Nr.current >= bW) {
                                      Nr.current = ar, tr();
                                      const rr = (0, LW.h)(Wr).plan.blips[0];
                                      rr && (xr.current = DW((0, vW.n)(Zr), [{
                                        ...rr,
                                        atMs: 0
                                      }], pr))
                                    }
                                    window.clearTimeout(mr.current), mr.current = window.setTimeout((() => {
                                      Kr(Yr.current)
                                    }), oW)
                                  }
                                })]
                              }), (0, Ur.jsx)(Br, {
                                code: yr,
                                lang: "ts"
                              })]
                            })
                          }
                          var sW = Qr(5692);
                          const uW = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            ra = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Sa = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${ra}`, "g"), sW.o],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, sW.o]
                            ];

                          function Qa(rr) {
                            return `${rr.pageId}#${rr.anchor}`
                          }
                          let Za, Wa, aa;

                          function ja(rr) {
                            const Sr = (0, Tr.f)(rr),
                              Qr = new Set;
                            for (const [, , Zr] of Sr.matchAll(Tr.b)) {
                              const rr = Zr.startsWith("#") ? ir(Zr) : null,
                                Sr = rr ? Qa({
                                  pageId: rr.page.id,
                                  anchor: rr.anchor
                                }) : null;
                              null !== Sr && (Za || (Za = new Set(Cr.flatMap((rr => lr(rr.layout) ? Ar(rr).sections.map((Sr => Qa({
                                pageId: rr.id,
                                anchor: Sr.heading.anchor
                              }))) : [])))), Za).has(Sr) && Qr.add(Sr)
                            }
                            for (const [, , Zr] of Sr.matchAll(uW)) {
                              const rr = mS(Zr);
                              rr && Qr.add(Qa(rr))
                            }
                            return Qr
                          }

                          function Ia(rr, Sr) {
                            const Qr = new Set,
                              Zr = function(rr) {
                                return rr.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(rr);
                            for (const [, Wr] of Zr.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) Qr.add(Wr);
                            for (const [Wr, ar] of Sa)
                              for (const [, rr] of(0, sW.e)(Zr, Wr, ar)) Sr.has(rr) && Qr.add(rr);
                            return Qr
                          }

                          function fa(rr, Sr, Qr, Zr) {
                            const Wr = rr.get(Sr);
                            Wr ? !Zr && Wr.some((rr => rr.pageId === Qr.pageId)) || Wr.push(Qr) : rr.set(Sr, [Qr])
                          }
                          const Ea = /^[A-Za-z_$][\w$]*$/;

                          function pa(rr) {
                            return Ea.test(rr.name) ? rr.name : "options"
                          }

                          function xa(rr, Sr) {
                            const Qr = rr.params.map(pa).join(", ");
                            return Sr ? `${rr.name} = (${Qr}) => {\n\t\n}` : `api.${rr.name}(${Qr})`
                          }

                          function ma(rr) {
                            let {
                              method: Sr,
                              isCallback: Qr
                            } = rr;
                            return (0, Ur.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, Ur.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [Qr ? (0, Ur.jsxs)(Ur.Fragment, {
                                  children: [(0, Ur.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Sr.name
                                  }), (0, Ur.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, Ur.jsxs)(Ur.Fragment, {
                                  children: [(0, Ur.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, Ur.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Sr.name
                                  }), (0, Ur.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), Sr.params.map(((rr, Qr) => (0, Ur.jsxs)(Zr.Fragment, {
                                  children: [Qr > 0 && (0, Ur.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, Ur.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${Sr.name}-${pa(rr)}`,
                                    children: rr.name
                                  })]
                                }, rr.name))), (0, Ur.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: Qr ? ") => " : ")"
                                }), Qr && !Sr.returns && (0, Ur.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), Sr.returns && Sr.returns.type && (0, Ur.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!Qr && (0, Ur.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, Ur.jsx)(vS, {
                                  type: Sr.returns.type
                                })]
                              })]
                            })
                          }

                          function Na(rr) {
                            let {
                              title: Sr,
                              references: Qr
                            } = rr;
                            const Wr = (0, Zr.useContext)(NS);
                            return (0, Ur.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, Ur.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: Sr
                              }), Qr.map((rr => (0, Ur.jsx)(jr.d, {
                                to: cr(Wr, Gr(rr.pageId), rr.anchor),
                                children: rr.label
                              }, `${rr.pageId}#${rr.anchor}`)))]
                            })
                          }

                          function Ua(rr) {
                            var Sr, Qr;
                            let {
                              pageId: Zr,
                              anchor: Wr
                            } = rr;
                            const ar = Qa({
                                pageId: Zr,
                                anchor: Wr
                              }),
                              jr = null !== (Sr = function() {
                                if (!aa) {
                                  aa = new Map;
                                  const Zr = new Set(Cr.filter((rr => "callbacks" === rr.layout)).flatMap((rr => Ar(rr).sections.map((rr => rr.heading.text)))));
                                  for (const Wr of Cr)
                                    if ("article" === Wr.layout || "snippets" === Wr.layout)
                                      for (const ar of (0, Tr.r)(Ar(Wr)))
                                        for (const {
                                            code: jr
                                          }
                                          of(0, Tr.i)(ar.blocks))
                                          for (const Ir of Ia(jr, Zr)) {
                                            const Zr = xS().get(Ir);
                                            if (Zr) {
                                              var rr, Sr, Qr;
                                              const jr = {
                                                pageId: Wr.id,
                                                anchor: null !== (rr = null === (Sr = ar.heading) || void 0 === Sr ? void 0 : Sr.anchor) && void 0 !== rr ? rr : "",
                                                label: null !== (Qr = Wr.navTitle) && void 0 !== Qr ? Qr : Wr.title
                                              };
                                              fa(aa, Qa(Zr), jr, !1)
                                            }
                                          }
                                }
                                return aa
                              }().get(ar)) && void 0 !== Sr ? Sr : [],
                              Ir = null !== (Qr = function() {
                                if (!Wa) {
                                  Wa = new Map;
                                  const rr = Gr("changelog");
                                  for (const Sr of Ar(rr).sections) {
                                    const Qr = new Set(Sr.blocks.flatMap((rr => [...ja(rr)])));
                                    for (const Zr of Qr) {
                                      const Qr = {
                                        pageId: rr.id,
                                        anchor: Sr.heading.anchor,
                                        label: Sr.heading.text
                                      };
                                      fa(Wa, Zr, Qr, !0)
                                    }
                                  }
                                }
                                return Wa
                              }().get(ar)) && void 0 !== Qr ? Qr : [];
                            return 0 === jr.length && 0 === Ir.length ? null : (0, Ur.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [jr.length > 0 && (0, Ur.jsx)(Na, {
                                title: "Used in",
                                references: jr
                              }), Ir.length > 0 && (0, Ur.jsx)(Na, {
                                title: "Changelog",
                                references: Ir
                              })]
                            })
                          }

                          function ta(rr) {
                            let {
                              method: Sr,
                              pageId: Qr,
                              anchor: Zr,
                              isCallback: Wr
                            } = rr;
                            const ar = Wr ? void 0 : IS().get(Sr.name),
                              jr = Sr.description.length > 0 || null === ar || void 0 === ar || !ar.description ? Sr.description : (0, Tr.v)(ar.description);
                            return (0, Ur.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, Ur.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Ur.jsx)(EQ, {
                                  level: 2,
                                  text: Sr.name,
                                  anchor: Zr,
                                  className: "DocsCardTitle"
                                }), (0, Ur.jsx)(nr, {
                                  text: xa(Sr, Wr),
                                  label: Wr ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Ur.jsx)(ma, {
                                method: Sr,
                                isCallback: Wr
                              }), ar && null !== ar.deprecation && (0, Ur.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, Ur.jsx)("strong", {
                                  children: "Deprecated"
                                }), ar.deprecation && (0, Ur.jsxs)(Ur.Fragment, {
                                  children: [": ", (0, Ur.jsx)(yS, {
                                    text: (Ir = ar.deprecation, (0, sW.t)(Ir, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, sW.k)("`\\w"), (rr => {
                                      let [Sr] = rr;
                                      return xS().has(Sr) ? `\`${Sr}\`` : Sr
                                    })))
                                  })]
                                })]
                              }), jr.length > 0 && (0, Ur.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Ur.jsx)(NQ, {
                                  blocks: jr
                                })
                              }), Sr.params.length > 0 && (0, Ur.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Ur.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, Ur.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: Sr.params.map((rr => (0, Ur.jsxs)("div", {
                                    id: `${Sr.name}-${pa(rr)}`,
                                    className: "DocsParam",
                                    children: [(0, Ur.jsxs)("dt", {
                                      children: [(0, Ur.jsx)("code", {
                                        className: "DocsParamName",
                                        children: rr.name
                                      }), (0, Ur.jsx)(vS, {
                                        type: rr.type
                                      })]
                                    }), rr.description && (0, Ur.jsx)("dd", {
                                      children: (0, Ur.jsx)(yS, {
                                        text: rr.description
                                      })
                                    })]
                                  }, rr.name)))
                                })]
                              }), Sr.returns && (Sr.returns.type || Sr.returns.description.length > 0) && (0, Ur.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Ur.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, Ur.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [Sr.returns.type && (0, Ur.jsx)(vS, {
                                    type: Sr.returns.type
                                  }), Sr.returns.description.length > 0 && (0, Ur.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, Ur.jsx)(NQ, {
                                      blocks: Sr.returns.description
                                    })
                                  })]
                                })]
                              }), (0, Ur.jsx)(Ua, {
                                pageId: Qr,
                                anchor: Zr
                              })]
                            });
                            var Ir
                          }

                          function ha(rr) {
                            var Sr;
                            return null !== rr.defaultValue && "undefined" !== rr.defaultValue ? rr.defaultValue : null !== (Sr = rr.example) && void 0 !== Sr ? Sr : "value"
                          }

                          function za(rr) {
                            let {
                              setting: Sr,
                              pageId: Qr,
                              anchor: Zr,
                              setterSnippet: Wr
                            } = rr;
                            const ar = null === Sr.defaultValue ? null : zS(Sr.defaultValue);
                            return (0, Ur.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, Ur.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Ur.jsx)(EQ, {
                                  level: 2,
                                  text: Sr.name,
                                  anchor: Zr,
                                  className: "DocsCardTitle"
                                }), (0, Ur.jsx)(nr, {
                                  text: Wr(Sr.name, ha(Sr)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Ur.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, Ur.jsxs)("div", {
                                  children: [(0, Ur.jsx)("dt", {
                                    children: "Type"
                                  }), (0, Ur.jsx)("dd", {
                                    children: (0, Ur.jsx)(vS, {
                                      type: Sr.type
                                    })
                                  })]
                                }), null !== Sr.defaultValue && (0, Ur.jsxs)("div", {
                                  children: [(0, Ur.jsx)("dt", {
                                    children: "Default"
                                  }), (0, Ur.jsx)("dd", {
                                    children: (0, Ur.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [ar && (0, Ur.jsx)(YS, {
                                        colour: ar
                                      }), Sr.defaultValue]
                                    })
                                  })]
                                }), null !== Sr.example && (0, Ur.jsxs)("div", {
                                  children: [(0, Ur.jsx)("dt", {
                                    children: "Example"
                                  }), (0, Ur.jsx)("dd", {
                                    children: (0, Ur.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: Sr.example
                                    })
                                  })]
                                })]
                              }), Sr.description.length > 0 && (0, Ur.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Ur.jsx)(NQ, {
                                  blocks: Sr.description
                                })
                              }), (0, Ur.jsx)(Ua, {
                                pageId: Qr,
                                anchor: Zr
                              })]
                            })
                          }

                          function Ya(rr) {
                            let {
                              section: Sr
                            } = rr;
                            return (0, Ur.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, Ur.jsx)(EQ, {
                                level: 2,
                                text: Sr.heading.text,
                                anchor: Sr.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, Ur.jsx)("div", {
                                className: "DocsProse",
                                children: (0, Ur.jsx)(NQ, {
                                  blocks: Sr.blocks
                                })
                              })]
                            })
                          }

                          function na(rr) {
                            let {
                              section: Sr
                            } = rr;
                            return (0, Ur.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Ur.jsx)(EQ, {
                                level: Sr.heading.level,
                                text: Sr.heading.text,
                                anchor: Sr.heading.anchor
                              }), (0, Ur.jsx)(NQ, {
                                blocks: Sr.blocks
                              })]
                            })
                          }
                          const ea = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function Ka(rr) {
                            let {
                              page: Sr,
                              section: Qr
                            } = rr;
                            if ("methods" === Sr.layout || "callbacks" === Sr.layout) return (0, Ur.jsx)(ta, {
                              method: BQ(Qr),
                              pageId: Sr.id,
                              anchor: Qr.heading.anchor,
                              isCallback: "callbacks" === Sr.layout
                            });
                            if ("settings" === Sr.layout) {
                              const rr = function(rr) {
                                const Sr = {
                                  name: rr.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Zr of rr.blocks) {
                                  var Qr;
                                  if (yQ(Zr)) continue;
                                  const rr = "paragraph" === Zr.kind ? Zr.text.match(TQ) : null;
                                  if (!rr) {
                                    Sr.description.push(Zr);
                                    continue
                                  }
                                  const Wr = null !== (Qr = KQ(rr[2])) && void 0 !== Qr ? Qr : rr[2];
                                  "Type" === rr[1] ? Sr.type = Wr : "Default" === rr[1] ? Sr.defaultValue = Wr : "" !== Wr && (Sr.example = Wr)
                                }
                                return Sr.type ? Sr : null
                              }(Qr);
                              if (rr) return (0, Ur.jsx)(za, {
                                setting: rr,
                                pageId: Sr.id,
                                anchor: Qr.heading.anchor,
                                setterSnippet: Sr.setterSnippet
                              })
                            }
                            return "snippets" === Sr.layout ? (0, Ur.jsx)(Ya, {
                              section: Qr
                            }) : "changelog" === Sr.layout ? (0, Ur.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, Ur.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, Ur.jsx)(EQ, {
                                  level: 2,
                                  text: Qr.heading.text,
                                  anchor: Qr.heading.anchor
                                })
                              }), (0, Ur.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, Ur.jsx)(NQ, {
                                  blocks: vQ(Qr.blocks)
                                })
                              })]
                            }) : Sr.gallery ? (0, Ur.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Ur.jsx)(EQ, {
                                level: Qr.heading.level,
                                text: Qr.heading.text,
                                anchor: Qr.heading.anchor
                              }), (0, Ur.jsx)(OZ, {
                                kind: Sr.gallery,
                                content: Ar(Sr),
                                blocks: Qr.blocks
                              })]
                            }) : (0, Ur.jsx)(na, {
                              section: Qr
                            })
                          }

                          function ya(rr) {
                            let {
                              page: Sr,
                              onTocChange: Qr
                            } = rr;
                            const Wr = Ar(Sr),
                              [ar, jr] = (0, Zr.useState)(""),
                              Ir = "article" !== Sr.layout,
                              fr = hQ(Sr.gallery) ? Sr.gallery : null,
                              Er = null !== fr,
                              pr = ar.trim().toLowerCase(),
                              xr = (0, Zr.useRef)(null),
                              mr = (0, Zr.useCallback)((rr => {
                                var Sr;
                                null === (Sr = xr.current) || void 0 === Sr || Sr.preview(rr)
                              }), []),
                              Nr = (0, Zr.useMemo)((() => {
                                if (!Sr.hasParticlePlayground) return [];
                                const rr = XQ(Wr.intro).find((rr => "names" === rr.kind && !rr.names.some((rr => null !== kQ(rr.name)))));
                                return "names" === (null === rr || void 0 === rr ? void 0 : rr.kind) ? rr.names.map((rr => rr.name)) : []
                              }), [Sr, Wr]),
                              tr = (0, Zr.useMemo)((() => {
                                if (!Sr.hasTextPlayground) return [];
                                const rr = Wr.sections.flatMap((rr => rr.blocks.flatMap((rr => {
                                  var Sr;
                                  return (null !== (Sr = lQ(rr)) && void 0 !== Sr ? Sr : []).flatMap((rr => kS(rr.name) ? [rr.name] : []))
                                }))));
                                return [...new Set(rr)]
                              }), [Sr, Wr]),
                              hr = (0, Zr.useMemo)((() => pr ? Wr.sections.filter((rr => function(rr, Sr) {
                                return !!rr.heading.text.toLowerCase().includes(Sr) || rr.blocks.some((rr => (0, Tr.f)(rr).toLowerCase().includes(Sr)))
                              }(rr, pr))) : Wr.sections), [Wr, pr]),
                              zr = (0, Zr.useMemo)((() => function(rr, Sr) {
                                return "article" !== rr.layout ? Sr.map((rr => ({
                                  anchor: rr.heading.anchor,
                                  text: rr.heading.text,
                                  level: 2
                                }))) : Sr.flatMap((rr => {
                                  const Sr = rr.blocks.flatMap((rr => "heading" === rr.kind && 3 === rr.level ? [{
                                    anchor: rr.anchor,
                                    text: rr.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: rr.heading.anchor,
                                    text: rr.heading.text,
                                    level: 2
                                  }, ...Sr]
                                }))
                              }(Sr, hr)), [Sr, hr]);
                            return (0, Zr.useEffect)((() => {
                              Qr(zr)
                            }), [zr, Qr]), (0, Ur.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, Ur.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, Ur.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Wr.title || Sr.title
                                }), (0, Ur.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: Sr.summary
                                }), (0, Ur.jsx)(JZ, {
                                  page: Sr
                                }), Ir && (0, Ur.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, Ur.jsxs)("span", {
                                    children: [(0, Ur.jsx)("strong", {
                                      children: Wr.sections.length
                                    }), " ", ea[Sr.layout]]
                                  })
                                })]
                              }), "" === Sr.slug && (0, Ur.jsx)(lZ, {}), fr && (0, Ur.jsx)(qZ, {
                                kind: fr
                              }, fr), Sr.hasParticlePlayground && (0, Ur.jsx)(fW, {
                                ref: xr,
                                textures: Nr
                              }), !Er && Wr.intro.length > 0 && (0, Ur.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: Sr.gallery ? (0, Ur.jsx)(zZ.Provider, {
                                  value: Sr.hasParticlePlayground ? mr : null,
                                  children: (0, Ur.jsx)(OZ, {
                                    kind: Sr.gallery,
                                    content: Wr,
                                    blocks: Wr.intro
                                  })
                                }) : (0, Ur.jsx)(NQ, {
                                  blocks: vQ(Wr.intro)
                                })
                              }), Sr.hasTextPlayground && (0, Ur.jsx)(TW, {
                                fontAwesomeIcons: tr
                              }), Sr.hasVoicePlayground && (0, Ur.jsx)(dW, {}), Sr.childPageIds && (0, Ur.jsx)(lZ, {
                                cards: Sr.childPageIds.map((rr => ({
                                  pageId: rr
                                }))),
                                label: Sr.title
                              }), Ir && (0, Ur.jsx)(nQ, {
                                className: "DocsFilterBar",
                                value: ar,
                                placeholder: `Filter ${Wr.sections.length} ${ea[Sr.layout]}\u2026`,
                                label: `Filter ${ea[Sr.layout]}`,
                                onChange: jr,
                                count: pr ? {
                                  visible: hr.length,
                                  total: Wr.sections.length
                                } : null
                              }), !Er && (0, Ur.jsxs)("div", {
                                className: `DocsSections Layout-${Sr.layout}`,
                                children: [hr.map((rr => (0, Ur.jsx)(Ka, {
                                  page: Sr,
                                  section: rr
                                }, rr.heading.anchor))), 0 === hr.length && (0, Ur.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", ea[Sr.layout], " match \u201c", ar, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Ba = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Ta(rr) {
                            let {
                              entry: Sr,
                              isActive: Qr,
                              onNavigate: Zr,
                              label: Wr,
                              children: jr
                            } = rr;
                            return (0, Ur.jsx)("a", {
                              href: `#${Sr.anchor}`,
                              "aria-label": Wr,
                              className: ar()(`Level${Sr.level}`, {
                                Active: Qr
                              }),
                              "aria-current": Qr ? "location" : void 0,
                              onClick: rr => {
                                rr.preventDefault(), Zr(Sr.anchor)
                              },
                              children: jr
                            })
                          }

                          function va(rr) {
                            let {
                              toc: Sr,
                              activeAnchor: Qr,
                              onNavigate: Wr
                            } = rr;
                            const jr = Math.max(0, Sr.findIndex((rr => rr.anchor === Qr))),
                              Ir = (0, Zr.useRef)(null),
                              fr = (0, Zr.useRef)(!1);
                            (0, Zr.useEffect)((() => {
                              var rr, Qr;
                              const Zr = null === (rr = Ir.current) || void 0 === rr ? void 0 : rr.closest(".DocsToc"),
                                Wr = null === (Qr = Ir.current) || void 0 === Qr ? void 0 : Qr.querySelector(".DocsTimelineNotch.Active");
                              if (!Zr || !Wr) return;
                              let ar = 0;
                              if (jr === Sr.length - 1) ar = Zr.scrollHeight;
                              else if (jr > 0) {
                                const rr = Zr.getBoundingClientRect(),
                                  Sr = Wr.getBoundingClientRect();
                                ar = Zr.scrollTop + Sr.top + Sr.height / 2 - (rr.top + Zr.clientHeight / 2)
                              }
                              Zr.scrollTo({
                                top: ar,
                                behavior: fr.current ? "smooth" : "auto"
                              }), fr.current = !0
                            }), [jr, Sr.length]);
                            const Er = [];
                            return Sr.forEach(((rr, Sr) => {
                              var Qr, Zr, Wr;
                              const ar = function(rr) {
                                  const Sr = rr.trim().match(Ba);
                                  return Sr ? {
                                    day: Sr[1],
                                    month: `${Sr[2]} ${Sr[3]}`
                                  } : null
                                }(rr.text),
                                jr = null !== (Qr = null === ar || void 0 === ar ? void 0 : ar.month) && void 0 !== Qr ? Qr : null;
                              null !== jr && (null === (Zr = Er.at(-1)) || void 0 === Zr ? void 0 : Zr.month) === jr || Er.push({
                                month: jr,
                                entries: []
                              }), Er.at(-1).entries.push({
                                entry: rr,
                                day: null !== (Wr = null === ar || void 0 === ar ? void 0 : ar.day) && void 0 !== Wr ? Wr : null,
                                index: Sr
                              })
                            })), (0, Ur.jsx)("ol", {
                              ref: Ir,
                              className: "DocsTimeline",
                              children: Er.map((rr => {
                                let {
                                  month: Sr,
                                  entries: Qr
                                } = rr;
                                return (0, Ur.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [Sr && (0, Ur.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: Sr
                                  }), (0, Ur.jsx)("ol", {
                                    children: Qr.map((rr => {
                                      let {
                                        entry: Sr,
                                        day: Qr,
                                        index: Zr
                                      } = rr;
                                      return (0, Ur.jsx)("li", {
                                        className: ar()("DocsTimelineNotch", {
                                          Passed: Zr < jr,
                                          Active: Zr === jr
                                        }),
                                        children: (0, Ur.jsx)(Ta, {
                                          entry: Sr,
                                          isActive: Zr === jr,
                                          onNavigate: Wr,
                                          label: Sr.text,
                                          children: (0, Ur.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== Qr && void 0 !== Qr ? Qr : Sr.text
                                          })
                                        })
                                      }, Sr.anchor)
                                    }))
                                  })]
                                }, Qr[0].entry.anchor)
                              }))
                            })
                          }

                          function Oa(rr) {
                            let {
                              isChangelog: Sr,
                              toc: Qr,
                              activeAnchor: Zr,
                              onNavigate: Wr
                            } = rr;
                            return 0 === Qr.length ? null : (0, Ur.jsxs)(Ur.Fragment, {
                              children: [(0, Ur.jsx)("div", {
                                className: "DocsTocTitle",
                                children: Sr ? "Updates" : "On this page"
                              }), Sr ? (0, Ur.jsx)(va, {
                                toc: Qr,
                                activeAnchor: Zr,
                                onNavigate: Wr
                              }) : (0, Ur.jsx)("ul", {
                                children: Qr.map((rr => (0, Ur.jsx)("li", {
                                  children: (0, Ur.jsx)(Ta, {
                                    entry: rr,
                                    isActive: rr.anchor === Zr,
                                    onNavigate: Wr,
                                    children: rr.text.replace(/`/g, "")
                                  })
                                }, rr.anchor)))
                              })]
                            })
                          }
                          const La = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            la = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Xa = 20,
                            Pa = 10,
                            Ha = 40,
                            qa = 120;
                          let Ra;

                          function ga(rr) {
                            const Sr = rr.gallery;
                            if (!Sr) return [];
                            if (hQ(Sr)) return function(rr) {
                              return YQ(rr).entries.map((rr => rr.name))
                            }(Sr).map((Qr => ({
                              page: rr,
                              anchor: HQ(Sr, Qr),
                              title: Qr,
                              kind: la[Sr],
                              text: "",
                              listedUnder: rr.title
                            })));
                            const Qr = Ar(rr);
                            return (0, Tr.r)(Qr).flatMap((Zr => {
                              const Wr = Zr.heading ? `${rr.title} \u203a ${Zr.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : rr.title;
                              return RQ(Sr, Qr, Zr.blocks).flatMap((Qr => "names" !== Qr.kind ? [] : Qr.names.map((Zr => {
                                const ar = Qr.isSongs ? "Song" : la[Sr];
                                return {
                                  page: rr,
                                  anchor: Zr.anchor,
                                  title: Zr.name,
                                  kind: ar,
                                  text: "",
                                  listedUnder: Wr
                                }
                              }))))
                            }))
                          }

                          function Ca(rr, Sr, Qr) {
                            const Zr = rr.title.toLowerCase();
                            let Wr = 0;
                            if (Zr === Sr) Wr = 100;
                            else if (Zr.startsWith(Sr)) Wr = 80;
                            else if (Zr.includes(Sr)) Wr = 60;
                            else if (Qr.every((rr => Zr.includes(rr)))) Wr = 45;
                            else {
                              if (!rr.text.toLowerCase().includes(Sr)) return 0;
                              Wr = 20
                            }
                            return Wr - Math.min(Zr.length / 10, 9) + ("Page" === rr.kind ? 8 : "Method" === rr.kind ? 3 : 0) - (rr.listedUnder ? Xa : 0)
                          }

                          function Ma(rr, Sr) {
                            const Qr = rr.toLowerCase().indexOf(Sr),
                              Zr = Math.max(0, Qr - qa / 3);
                            return `${Zr>0?"\u2026":""}${rr.slice(Zr,Zr+qa)}${Zr+qa<rr.length?"\u2026":""}`
                          }

                          function Ga(rr) {
                            let {
                              text: Sr,
                              query: Qr
                            } = rr;
                            const Zr = Qr ? Sr.toLowerCase().indexOf(Qr) : -1;
                            return -1 === Zr ? (0, Ur.jsx)(Ur.Fragment, {
                              children: Sr
                            }) : (0, Ur.jsxs)(Ur.Fragment, {
                              children: [Sr.slice(0, Zr), (0, Ur.jsx)("mark", {
                                children: Sr.slice(Zr, Zr + Qr.length)
                              }), Sr.slice(Zr + Qr.length)]
                            })
                          }

                          function ka(rr) {
                            let {
                              basePath: Sr,
                              onClose: Qr
                            } = rr;
                            const Wr = (0, Ir.t)(),
                              [jr, fr] = (0, Zr.useState)(""),
                              [Er, pr] = (0, Zr.useState)(0),
                              xr = (0, Zr.useRef)(null),
                              mr = (0, Zr.useRef)(null),
                              Nr = jr.trim().toLowerCase(),
                              tr = (0, Zr.useMemo)((() => {
                                const rr = (Ra || (Ra = Cr.flatMap((rr => {
                                  const Sr = Ar(rr);
                                  return [{
                                    page: rr,
                                    anchor: "",
                                    title: rr.title,
                                    kind: "Page",
                                    text: rr.summary
                                  }, ...Sr.sections.flatMap((Sr => {
                                    const Qr = Sr.blocks.filter((rr => "paragraph" === rr.kind)).map(Tr.f).join(" ").replace(/[`*]/g, ""),
                                      Zr = {
                                        page: rr,
                                        anchor: Sr.heading.anchor,
                                        title: Sr.heading.text.replace(/`/g, ""),
                                        kind: La[rr.layout],
                                        text: Qr
                                      },
                                      Wr = Sr.blocks.flatMap((Sr => "article" === rr.layout && "heading" === Sr.kind && 3 === Sr.level ? [{
                                        page: rr,
                                        anchor: Sr.anchor,
                                        title: Sr.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Zr.title
                                      }] : []));
                                    return [Zr, ...Wr]
                                  })), ...ga(rr)]
                                }))), Ra);
                                if (!Nr) return rr.filter((rr => "Page" === rr.kind));
                                const Sr = Nr.split(/\s+/);
                                let Qr = 0;
                                return rr.map((rr => ({
                                  entry: rr,
                                  score: Ca(rr, Nr, Sr)
                                }))).filter((rr => rr.score > 0)).sort(((rr, Sr) => Sr.score - rr.score)).filter((rr => !rr.entry.listedUnder || (Qr++, Qr <= Pa))).slice(0, Ha).map((rr => rr.entry))
                              }), [Nr]);
                            (0, Zr.useEffect)((() => {
                              pr(0)
                            }), [Nr]), (0, Zr.useEffect)((() => {
                              const rr = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === rr || void 0 === rr || rr.focus()
                              }
                            }), []), (0, Zr.useEffect)((() => {
                              var rr, Sr;
                              null === (rr = xr.current) || void 0 === rr || null === (Sr = rr.querySelector(".Active")) || void 0 === Sr || Sr.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Er]);
                            const zr = rr => {
                              Wr(cr(Sr, rr.page, rr.anchor)), Qr()
                            };
                            return (0, Ur.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: rr => {
                                rr.target === rr.currentTarget && Qr()
                              },
                              children: (0, Ur.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: rr => {
                                  rr.target !== mr.current && rr.preventDefault()
                                },
                                onKeyDown: rr => {
                                  if ("Escape" === rr.key) Qr();
                                  else if ("Tab" === rr.key) {
                                    var Sr;
                                    rr.preventDefault(), null === (Sr = mr.current) || void 0 === Sr || Sr.focus()
                                  }
                                },
                                children: [(0, Ur.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, Ur.jsx)(hr, {
                                    name: "magnifying-glass"
                                  }), (0, Ur.jsx)("input", {
                                    ref: mr,
                                    autoFocus: !0,
                                    value: jr,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": tr.length > 0 ? `DocsSearchResult-${Er}` : void 0,
                                    onChange: rr => {
                                      fr(rr.target.value)
                                    },
                                    onKeyDown: rr => {
                                      if ("ArrowDown" === rr.key || "ArrowUp" === rr.key) {
                                        rr.preventDefault();
                                        const Sr = "ArrowDown" === rr.key ? 1 : -1;
                                        pr((Er + Sr + tr.length) % Math.max(tr.length, 1))
                                      } else "Enter" === rr.key && tr[Er] && zr(tr[Er])
                                    }
                                  }), (0, Ur.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, Ur.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: xr,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Nr && (0, Ur.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), tr.map(((rr, Sr) => {
                                    var Qr;
                                    return (0, Ur.jsxs)("li", {
                                      id: `DocsSearchResult-${Sr}`,
                                      role: "option",
                                      "aria-selected": Sr === Er,
                                      className: ar()("DocsSearchResult", {
                                        Active: Sr === Er
                                      }),
                                      onMouseMove: () => {
                                        pr(Sr)
                                      },
                                      onClick: () => {
                                        zr(rr)
                                      },
                                      children: [(0, Ur.jsx)(hr, {
                                        name: rr.page.icon
                                      }), (0, Ur.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, Ur.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, Ur.jsx)(Ga, {
                                            text: rr.title,
                                            query: Nr
                                          })
                                        }), rr.text && (0, Ur.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, Ur.jsx)(Ga, {
                                            text: Ma(rr.text, Nr),
                                            query: Nr
                                          })
                                        })]
                                      }), (0, Ur.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === rr.kind ? "Page" : null !== (Qr = rr.listedUnder) && void 0 !== Qr ? Qr : `${rr.kind} \xb7 ${rr.page.title}`
                                      })]
                                    }, `${rr.page.id}#${rr.anchor}`)
                                  })), Nr && 0 === tr.length && (0, Ur.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", jr, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function Aa(rr, Sr) {
                            if (Sr < 10) return `${rr.toFixed(1)}s`;
                            const Qr = Math.floor(rr);
                            return `${Math.floor(Qr/60)}:${String(Qr%60).padStart(2,"0")}`
                          }

                          function Va() {
                            const rr = pZ((rr => rr.track)),
                              Sr = pZ((rr => rr.volume)),
                              [Qr, Wr] = (0, Zr.useState)(0),
                              jr = (0, Zr.useRef)(SZ);
                            if ((0, Zr.useEffect)((() => {
                                if (!rr) return;
                                if (Wr(UZ()), "playing" !== rr.status) return;
                                let Sr = 0;
                                const Qr = () => {
                                  Wr(UZ()), Sr = requestAnimationFrame(Qr)
                                };
                                return Sr = requestAnimationFrame(Qr), () => {
                                  cancelAnimationFrame(Sr)
                                }
                              }), [rr]), !rr) return null;
                            const Ir = "paused" !== rr.status,
                              fr = Math.min(Qr, rr.duration);
                            return (0, Ur.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, Ur.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, Ur.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": Ir ? `Pause ${rr.name}` : `Play ${rr.name}`,
                                  onClick: NZ,
                                  children: (0, Ur.jsx)(hr, {
                                    name: Ir ? "pause" : "play"
                                  })
                                }), (0, Ur.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, Ur.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, Ur.jsx)("code", {
                                      children: rr.name
                                    }), (0, Ur.jsx)("span", {
                                      children: rr.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, Ur.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, Ur.jsx)("span", {
                                      children: Aa(fr, rr.duration)
                                    }), (0, Ur.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: rr.duration || 1,
                                      step: .01,
                                      value: fr,
                                      disabled: 0 === rr.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${Aa(fr,rr.duration)} of ${Aa(rr.duration,rr.duration)}`,
                                      onChange: rr => {
                                        const Sr = Number(rr.target.value);
                                        ! function(rr) {
                                          var Sr;
                                          jZ = rr, null === (Sr = WZ) || void 0 === Sr || Sr.seek(rr)
                                        }(Sr), Wr(Sr)
                                      }
                                    }), (0, Ur.jsx)("span", {
                                      children: rr.duration > 0 ? Aa(rr.duration, rr.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, Ur.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, Ur.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === Sr ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === Sr ? tZ(jr.current) : (jr.current = Sr, tZ(0))
                                    },
                                    children: (0, Ur.jsx)(hr, {
                                      name: "volume",
                                      className: ar()({
                                        Muted: 0 === Sr
                                      })
                                    })
                                  }), (0, Ur.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: Sr,
                                    "aria-label": "Volume",
                                    onChange: rr => {
                                      tZ(Number(rr.target.value))
                                    }
                                  })]
                                }), (0, Ur.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var Sr;
                                    null === (Sr = document.querySelector(`[data-docs-track="${CSS.escape(QZ(rr.name,rr.isSong))}"]`)) || void 0 === Sr || Sr.focus(), hZ()
                                  },
                                  children: (0, Ur.jsx)(hr, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var ia = Qr(43);
                          const wa = "docsTheme",
                            ca = window.matchMedia("(prefers-color-scheme: light)");

                          function Fa(rr) {
                            let {
                              theme: Sr,
                              onChange: Qr
                            } = rr;
                            const Zr = "dark" === Sr ? "light" : "dark";
                            return (0, Ur.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Zr} theme`,
                              title: `Switch to ${Zr} theme`,
                              onClick: () => {
                                Qr(Zr)
                              },
                              children: (0, Ur.jsx)(hr, {
                                name: "dark" === Sr ? "moon" : "sun"
                              })
                            })
                          }
                          const oa = "https://github.com/Bloxdy/code-api",
                            ba = "https://discord.gg/playbloxd",
                            Ja = 180,
                            Da = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function da(rr) {
                            let {
                              basePath: Sr,
                              activePageId: Qr,
                              onNavigate: Zr
                            } = rr;
                            return (0, Ur.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Mr.map((rr => (0, Ur.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, Ur.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: rr.title
                                }), rr.pageIds.map((rr => {
                                  var Wr;
                                  const Ir = Gr(rr);
                                  return (0, Ur.jsxs)(jr.d, {
                                    to: cr(Sr, Ir),
                                    className: ar()("DocsNavLink", {
                                      Active: Ir.id === Qr
                                    }),
                                    "aria-current": Ir.id === Qr ? "page" : void 0,
                                    onClick: Zr,
                                    children: [(0, Ur.jsx)(hr, {
                                      name: Ir.icon
                                    }), (0, Ur.jsx)("span", {
                                      children: null !== (Wr = Ir.navTitle) && void 0 !== Wr ? Wr : Ir.title
                                    })]
                                  }, Ir.id)
                                }))]
                              }, rr.title)))
                            })
                          }

                          function sa(rr) {
                            let {
                              basePath: Sr,
                              pageId: Qr
                            } = rr;
                            const Zr = Mr.flatMap((rr => rr.pageIds)),
                              Wr = Zr.indexOf(Qr),
                              ar = Wr > 0 ? Gr(Zr[Wr - 1]) : null,
                              Ir = Wr < Zr.length - 1 ? Gr(Zr[Wr + 1]) : null;
                            return (0, Ur.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [ar ? (0, Ur.jsxs)(jr.d, {
                                className: "DocsPagerLink Previous",
                                to: cr(Sr, ar),
                                children: [(0, Ur.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, Ur.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: ar.title
                                })]
                              }) : (0, Ur.jsx)("span", {}), Ir && (0, Ur.jsxs)(jr.d, {
                                className: "DocsPagerLink Next",
                                to: cr(Sr, Ir),
                                children: [(0, Ur.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, Ur.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Ir.title
                                })]
                              })]
                            })
                          }

                          function ua(rr) {
                            let {
                              basePath: Sr,
                              embedded: Qr = !1
                            } = rr;
                            const {
                              pageSlug: Wr = ""
                            } = (0, Ir.w)(), Er = (0, Ir.s)(), pr = (0, Ir.t)(), xr = (mr = Wr, Cr.find((rr => rr.slug === mr)));
                            var mr;
                            const [Nr, tr] = function() {
                              const [rr, Sr] = (0, Zr.useState)((() => {
                                const rr = ia.j.getItem(wa);
                                return "dark" === rr || "light" === rr ? rr : null
                              })), [Qr, Wr] = (0, Zr.useState)(ca.matches ? "light" : "dark");
                              return (0, Zr.useEffect)((() => {
                                const rr = () => {
                                  Wr(ca.matches ? "light" : "dark")
                                };
                                return ca.addEventListener("change", rr), () => {
                                  ca.removeEventListener("change", rr)
                                }
                              }), []), [null !== rr && void 0 !== rr ? rr : Qr, rr => {
                                ia.j.setItem(wa, rr), Sr(rr)
                              }]
                            }(), [zr, Yr] = (0, Zr.useState)(null), [nr, er] = (0, Zr.useState)(!1), [Kr, yr] = (0, Zr.useState)(!1), [Br, vr] = (0, Zr.useState)([]), Or = function(rr, Sr) {
                              const [Qr, Wr] = (0, Zr.useState)("");
                              return (0, Zr.useEffect)((() => {
                                if (!Sr) return;
                                let Qr = 0;
                                const Zr = () => {
                                    var Zr, ar;
                                    Qr = 0;
                                    const jr = Sr.getBoundingClientRect().top + Ja;
                                    let Ir = null !== (Zr = null === (ar = rr[0]) || void 0 === ar ? void 0 : ar.anchor) && void 0 !== Zr ? Zr : "";
                                    for (const Sr of rr) {
                                      const rr = document.getElementById(Sr.anchor);
                                      rr && rr.getBoundingClientRect().top <= jr && (Ir = Sr.anchor)
                                    }
                                    Sr.scrollTop + Sr.clientHeight >= Sr.scrollHeight - 2 && Sr.scrollTop > 0 && rr.length > 0 && (Ir = rr[rr.length - 1].anchor), Wr(Ir)
                                  },
                                  ar = () => {
                                    Qr || (Qr = requestAnimationFrame(Zr))
                                  };
                                return Zr(), Sr.addEventListener("scroll", ar, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(Qr), Sr.removeEventListener("scroll", ar)
                                }
                              }), [rr, Sr]), Qr
                            }(Br, zr), Lr = "" === Wr && Er.hash ? function(rr) {
                              const Sr = (0, Tr.k)(rr);
                              if (Vr(Gr("welcome"), Sr)) return null;
                              const Qr = Object.hasOwn(wr, Sr) ? wr[Sr] : null;
                              if (Qr) return {
                                page: Gr(Qr.pageId),
                                anchor: Qr.anchor
                              };
                              const Zr = Gr("readme");
                              return Vr(Zr, Sr) ? {
                                page: Zr,
                                anchor: Sr
                              } : ir(`#${Sr}`)
                            }(Er.hash) : null;
                            (0, Zr.useEffect)((() => (fr.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              fr.c.set({
                                musicOnFromPage: !0
                              }), hZ()
                            })), []), (0, Zr.useEffect)((() => {
                              const rr = rr => {
                                const Sr = rr.target;
                                if (Sr.closest(".DocsTextDialog")) return;
                                const Qr = Sr.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(Sr.tagName);
                                "k" === rr.key && (rr.metaKey || rr.ctrlKey) || "/" === rr.key && !Qr ? (rr.preventDefault(), yr(!0)) : "Escape" === rr.key && er(!1)
                              };
                              return window.addEventListener("keydown", rr), () => {
                                window.removeEventListener("keydown", rr)
                              }
                            }), []);
                            const lr = (0, Zr.useRef)(null);
                            (0, Zr.useLayoutEffect)((() => {
                              var rr, Sr;
                              if (!zr) return;
                              const Qr = lr.current === Er.pathname;
                              lr.current = Er.pathname;
                              const Zr = (0, Tr.k)(Er.hash),
                                Wr = Zr ? document.getElementById(Zr) : null;
                              if (null === (rr = zr.querySelector(".DocsTargeted")) || void 0 === rr || rr.classList.remove("DocsTargeted"), null === Wr || void 0 === Wr || null === (Sr = Wr.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === Sr || Sr.classList.add("DocsTargeted"), Wr) {
                                var ar;
                                const rr = Wr.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (ar = Wr.closest(".DocsChangelogEntry")) && void 0 !== ar ? ar : Wr).scrollIntoView({
                                  block: rr ? "center" : "start",
                                  behavior: Qr ? "smooth" : "auto"
                                })
                              } else Qr || zr.scrollTo({
                                top: 0
                              })
                            }), [zr, Er.pathname, Er.hash, Er.key]);
                            const Xr = (0, Zr.useCallback)((() => {
                                er(!1)
                              }), []),
                              Pr = (0, Zr.useCallback)((rr => {
                                pr({
                                  hash: rr
                                })
                              }), [pr]);
                            if (Lr) return (0, Ur.jsx)(Ir.d, {
                              replace: !0,
                              to: cr(Sr, Lr.page, Lr.anchor)
                            });
                            if (!xr) return (0, Ur.jsx)(Ir.d, {
                              replace: !0,
                              to: Sr
                            });
                            const Hr = Qr ? "div" : "main";
                            return (0, Ur.jsx)(NS.Provider, {
                              value: Sr,
                              children: (0, Ur.jsx)(US.Provider, {
                                value: zr,
                                children: (0, Ur.jsxs)("div", {
                                  ref: Yr,
                                  className: ar()("DocsSite", {
                                    Embedded: Qr,
                                    NavOpen: nr
                                  }),
                                  "data-theme": Nr,
                                  children: [(0, Ur.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, Ur.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": nr ? "Close menu" : "Open menu",
                                      "aria-expanded": nr,
                                      onClick: () => {
                                        er(!nr)
                                      },
                                      children: (0, Ur.jsx)(hr, {
                                        name: nr ? "cross" : "menu"
                                      })
                                    }), (0, Ur.jsxs)(jr.d, {
                                      to: Sr,
                                      className: "DocsBrand",
                                      children: [(0, Ur.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, Ur.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, Ur.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, Ur.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        yr(!0)
                                      },
                                      children: [(0, Ur.jsx)(hr, {
                                        name: "magnifying-glass"
                                      }), (0, Ur.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, Ur.jsxs)("kbd", {
                                        children: [Da ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, Ur.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, Ur.jsxs)("a", {
                                        href: ba,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Ur.jsx)(hr, {
                                          name: "discord"
                                        }), (0, Ur.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, Ur.jsxs)("a", {
                                        href: oa,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Ur.jsx)(hr, {
                                          name: "external-link"
                                        }), (0, Ur.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !Qr && (0, Ur.jsxs)(jr.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, Ur.jsx)(hr, {
                                          name: "play"
                                        }), (0, Ur.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, Ur.jsx)(Fa, {
                                        theme: Nr,
                                        onChange: tr
                                      })]
                                    })]
                                  }), (0, Ur.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, Ur.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, Ur.jsx)(da, {
                                        basePath: Sr,
                                        activePageId: xr.id,
                                        onNavigate: Xr
                                      })
                                    }), (0, Ur.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Xr
                                    }), (0, Ur.jsxs)(Hr, {
                                      className: "DocsMain",
                                      children: [(0, Ur.jsx)(ya, {
                                        page: xr,
                                        onTocChange: vr
                                      }, xr.id), (0, Ur.jsx)(sa, {
                                        basePath: Sr,
                                        pageId: xr.id
                                      })]
                                    }), (0, Ur.jsx)("aside", {
                                      className: ar()("DocsToc", {
                                        Timeline: "changelog" === xr.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, Ur.jsx)(Oa, {
                                        isChangelog: "changelog" === xr.layout,
                                        toc: Br,
                                        activeAnchor: Or,
                                        onNavigate: Pr
                                      })
                                    })]
                                  }), (0, Ur.jsx)(Va, {}), Kr && (0, Ur.jsx)(ka, {
                                    basePath: Sr,
                                    onClose: () => {
                                      yr(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5564: (rr, Sr, Qr) => {
                          Qr.d(Sr, {
                            b: () => Zr,
                            e: () => jr,
                            f: () => hr,
                            i: () => tr,
                            j: () => Ir,
                            k: () => Wr,
                            o: () => ar,
                            r: () => Ur,
                            t: () => Nr,
                            v: () => mr
                          });
                          const Zr = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Wr(rr) {
                            try {
                              return decodeURIComponent(rr.slice(1))
                            } catch {
                              return rr.slice(1)
                            }
                          }

                          function ar(rr) {
                            return rr.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const jr = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Zr.source}`, "g");

                          function Ir(rr, Sr) {
                            return 2 === rr.length ? Sr.replace(/^ (.*) $/, "$1") : Sr
                          }

                          function fr(rr) {
                            return "" === rr.trim()
                          }

                          function Er(rr) {
                            const Sr = [];
                            for (const Qr of rr.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Sr.length > 0 && Sr[Sr.length - 1].endsWith("\\") ? Sr[Sr.length - 1] += `|${Qr}` : Sr.push(Qr);
                            return Sr.map((rr => rr.trim().replaceAll("\\|", "|")))
                          }
                          const pr = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function xr(rr) {
                            const Sr = [],
                              Qr = [{
                                indent: -1,
                                items: Sr
                              }];
                            let Zr = null;
                            for (const Wr of rr) {
                              const rr = Wr.match(pr);
                              if (!rr) {
                                Zr && (Zr.text += ` ${Wr.trim()}`);
                                continue
                              }
                              const Sr = rr[1].replace(/\t/g, "  ").length;
                              for (; Sr <= Qr[Qr.length - 1].indent;) Qr.pop();
                              Zr = {
                                text: rr[3].trim(),
                                children: []
                              }, Qr[Qr.length - 1].items.push(Zr), Qr.push({
                                indent: Sr,
                                items: Zr.children
                              })
                            }
                            return Sr
                          }

                          function mr(rr) {
                            const Sr = rr.replace(/\r\n/g, "\n").split("\n"),
                              Qr = [];
                            let Zr = 0;
                            for (; Zr < Sr.length;) {
                              const rr = Sr[Zr];
                              if (fr(rr)) {
                                Zr++;
                                continue
                              }
                              const Wr = rr.match(/^\s*```\s*(\w*)\s*$/);
                              if (Wr) {
                                const rr = [];
                                for (Zr++; Zr < Sr.length && !/^\s*```\s*$/.test(Sr[Zr]);) rr.push(Sr[Zr]), Zr++;
                                Zr++, Qr.push({
                                  kind: "code",
                                  lang: Wr[1] || "text",
                                  code: rr.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const jr = rr.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (jr) {
                                const rr = jr[2].trim();
                                Qr.push({
                                  kind: "heading",
                                  level: jr[1].length,
                                  text: rr,
                                  anchor: ar(rr)
                                }), Zr++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(rr)) {
                                Qr.push({
                                  kind: "rule"
                                }), Zr++;
                                continue
                              }
                              if (rr.trim().startsWith("|") && Zr + 1 < Sr.length && /^\s*\|[\s:|-]+\|\s*$/.test(Sr[Zr + 1])) {
                                const Wr = Er(rr),
                                  ar = [];
                                for (Zr += 2; Zr < Sr.length && Sr[Zr].trim().startsWith("|");) ar.push(Er(Sr[Zr])), Zr++;
                                Qr.push({
                                  kind: "table",
                                  header: Wr,
                                  rows: ar
                                });
                                continue
                              }
                              if (rr.startsWith(">")) {
                                const rr = [];
                                for (; Zr < Sr.length && Sr[Zr].startsWith(">");) rr.push(Sr[Zr].replace(/^>\s?/, "")), Zr++;
                                Qr.push({
                                  kind: "quote",
                                  blocks: mr(rr.join("\n"))
                                });
                                continue
                              }
                              if (pr.test(rr)) {
                                const Wr = [],
                                  ar = /^\s*\d+\./.test(rr);
                                for (; Zr < Sr.length && !fr(Sr[Zr]) && (pr.test(Sr[Zr]) || /^\s+\S/.test(Sr[Zr]));) Wr.push(Sr[Zr]), Zr++;
                                Qr.push({
                                  kind: "list",
                                  ordered: ar,
                                  items: xr(Wr)
                                });
                                continue
                              }
                              const Ir = [];
                              for (; Zr < Sr.length && !fr(Sr[Zr]) && !/^\s*```/.test(Sr[Zr]) && !/^#{1,6}\s/.test(Sr[Zr]) && !Sr[Zr].startsWith(">") && !pr.test(Sr[Zr]) && (!Sr[Zr].trim().startsWith("|") || 0 !== Ir.length);) Ir.push(Sr[Zr].trim()), Zr++;
                              0 === Ir.length && (Ir.push(Sr[Zr].trim()), Zr++), Qr.push({
                                kind: "paragraph",
                                text: Ir.join(" ")
                              })
                            }
                            return Qr
                          }

                          function Nr(rr) {
                            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const Qr = mr(rr);
                            let Zr = "";
                            const Wr = [],
                              ar = [],
                              jr = new Map;
                            for (const Er of Qr) {
                              if ("heading" === Er.kind) {
                                var Ir;
                                const rr = (null !== (Ir = jr.get(Er.anchor)) && void 0 !== Ir ? Ir : 0) + 1;
                                jr.set(Er.anchor, rr), rr > 1 && (Er.anchor = `${Er.anchor}-${rr}`)
                              }
                              if ("heading" === Er.kind && 1 === Er.level && !Zr) {
                                Zr = Er.text;
                                continue
                              }
                              if ("heading" === Er.kind && Er.level <= Sr) {
                                ar.push({
                                  heading: Er,
                                  blocks: []
                                });
                                continue
                              }
                              const rr = ar.at(-1);
                              rr ? rr.blocks.push(Er) : Wr.push(Er)
                            }
                            const fr = rr => {
                              for (;
                                "rule" === (null === (Sr = rr.at(-1)) || void 0 === Sr ? void 0 : Sr.kind);) {
                                var Sr;
                                rr.pop()
                              }
                            };
                            fr(Wr);
                            for (const Er of ar) fr(Er.blocks);
                            return {
                              title: Zr,
                              intro: Wr,
                              sections: ar
                            }
                          }

                          function Ur(rr) {
                            return [{
                              heading: null,
                              blocks: rr.intro
                            }, ...rr.sections.map((rr => ({
                              heading: rr.heading,
                              blocks: rr.blocks
                            })))]
                          }

                          function tr(rr) {
                            return rr.flatMap((rr => "code" === rr.kind ? [rr] : "quote" === rr.kind ? tr(rr.blocks) : []))
                          }

                          function hr(rr) {
                            switch (rr.kind) {
                              case "heading":
                              case "paragraph":
                                return rr.text;
                              case "code":
                                return rr.code;
                              case "table":
                                return [rr.header, ...rr.rows].map((rr => rr.join(" "))).join(" ");
                              case "list": {
                                const Sr = rr => rr.map((rr => `${rr.text} ${Sr(rr.children)}`)).join(" ");
                                return Sr(rr.items)
                              }
                              case "quote":
                                return rr.blocks.map(hr).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5649: (rr, Sr, Qr) => {
                          Qr.d(Sr, {
                            e: () => Ir
                          });
                          var Zr = Qr(72),
                            Wr = Qr(360),
                            ar = Qr(2075),
                            jr = Qr(1338);

                          function Ir(rr) {
                            let {
                              text: Sr
                            } = rr;
                            const Qr = [];
                            let Ir = "";
                            return (0, Wr.gc)(Sr).forEach(((rr, Sr) => {
                              if ("string" === typeof rr || !(0, ar.h)(rr.icon)) return void(Ir += "string" === typeof rr ? rr : rr.icon);
                              const Wr = Math.max(0, Ir.trimEnd().search(/\S{1,12}$/));
                              Qr.push((0, jr.jsxs)(Zr.Fragment, {
                                children: [Ir.slice(0, Wr), (0, jr.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [Ir.slice(Wr), (0, jr.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": rr.icon,
                                    children: (0, jr.jsx)(ar.d, {
                                      itemName: rr.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, Sr)), Ir = ""
                            })), Qr.push(Ir), (0, jr.jsx)(jr.Fragment, {
                              children: Qr
                            })
                          }
                        }, 5581: (rr, Sr, Qr) => {
                          Qr.d(Sr, {
                            e: () => Yr,
                            d: () => zr
                          });
                          var Zr = Qr(72),
                            Wr = Qr(1573),
                            ar = Qr(2057),
                            jr = Qr(5589),
                            Ir = Qr(1338);
                          const fr = (0, Zr.memo)((function(rr) {
                            let {
                              initialParameters: Sr
                            } = rr;
                            const Qr = (0, Zr.useRef)(null),
                              Wr = (0, Zr.useRef)(null),
                              fr = (0, Zr.useRef)(0),
                              Er = (0, Zr.useRef)(null),
                              pr = Sr.description,
                              xr = Sr.Oa,
                              {
                                scale: mr,
                                rotation: Nr
                              } = null !== Sr && void 0 !== Sr ? Sr : {},
                              Ur = (0, jr.f)();
                            return (0, Zr.useEffect)((() => {
                              const rr = Ur.onFrame((() => {
                                const rr = Ur.getState();
                                if (!rr.isActive || !Qr.current || !Wr.current) return;
                                const Sr = rr.state;
                                if (Qr.current.value = Sr.progress, Sr.clickCount > fr.current) {
                                  fr.current = Sr.clickCount;
                                  const rr = Wr.current;
                                  rr.classList.add("pulse"), Er.current = setTimeout((() => {
                                    rr.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Er.current), rr()
                              }
                            }), [Ur]), (0, Ir.jsx)(Ir.Fragment, {
                              children: (0, Ir.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== mr && {
                                    "--scale": mr
                                  },
                                  ...null !== Nr && {
                                    "--rotation": `${Nr}deg`
                                  }
                                },
                                children: [(0, Ir.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: Qr
                                }), (0, Ir.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Wr,
                                  children: (0, Ir.jsx)(ar.c, {
                                    text: [{
                                      icon: xr
                                    }]
                                  })
                                }), (0, Ir.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, Ir.jsx)(ar.c, {
                                    text: pr
                                  })
                                })]
                              })
                            })
                          }));
                          var Er = Qr(1155),
                            pr = Qr.n(Er);
                          const xr = 2 * Math.PI * 90,
                            mr = (0, Zr.memo)((function(rr) {
                              let {
                                initialParameters: Sr
                              } = rr;
                              const Qr = (0, Zr.useRef)(null),
                                Wr = (0, Zr.useRef)(null),
                                fr = (0, Zr.useRef)(null),
                                Er = Sr.label,
                                mr = Sr.icon,
                                Nr = Sr.Xa,
                                {
                                  scale: Ur,
                                  rotation: tr,
                                  Pa: hr
                                } = null !== Sr && void 0 !== Sr ? Sr : {},
                                zr = (0, jr.f)();
                              return (0, Zr.useEffect)((() => {
                                const rr = zr.onFrame((() => {
                                  var rr, Sr;
                                  const Zr = zr.getState();
                                  if (!Zr.isActive || !Wr.current) return;
                                  const ar = Zr.state,
                                    jr = null !== (rr = ar.timeRemaining) && void 0 !== rr ? rr : 0,
                                    Ir = null !== (Sr = ar.la) && void 0 !== Sr ? Sr : 1,
                                    Er = xr * (1 - jr / Ir);
                                  Wr.current.style.strokeDashoffset = `${Er}`, Qr.current && (Qr.current.style.opacity = jr > 0 ? "1" : "0"), fr.current && Nr && (fr.current.textContent = `${(jr/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  rr()
                                }
                              }), [zr, Nr]), (0, Ir.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: Qr,
                                style: {
                                  ...null !== Ur && {
                                    "--scale": Ur
                                  },
                                  ...null !== tr && {
                                    "--rotation": `${tr}deg`
                                  }
                                },
                                children: [(0, Ir.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, Ir.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Ir.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, Ir.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: xr,
                                      ref: Wr
                                    })]
                                  }), (0, Ir.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, Ir.jsx)(ar.c, {
                                      text: [{
                                        icon: mr
                                      }],
                                      className: pr()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: hr
                                      })
                                    })
                                  })]
                                }), (0, Ir.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, Ir.jsx)(ar.c, {
                                    text: Er,
                                    className: "QTETimedClickLabelText"
                                  }), Nr && (0, Ir.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: fr
                                  })]
                                })]
                              })
                            })),
                            Nr = (0, Zr.memo)((function(rr) {
                              let {
                                initialParameters: Sr
                              } = rr;
                              const Qr = (0, Zr.useRef)(null),
                                Wr = (0, Zr.useRef)(null),
                                fr = (0, Zr.useRef)(null),
                                Er = (0, Zr.useRef)(!1),
                                pr = Sr.description,
                                xr = null === Sr || void 0 === Sr ? void 0 : Sr.icon,
                                mr = (0, jr.f)();
                              return (0, Zr.useEffect)((() => {
                                const rr = mr.onFrame((() => {
                                  const rr = mr.getState();
                                  if (!rr.isActive) return;
                                  const Sr = rr.state;
                                  if (Qr.current) {
                                    const rr = 100 * (Sr.catchZonePosition - Sr.qa / 2);
                                    Qr.current.style.left = `${rr}%`, Qr.current.style.width = 100 * Sr.qa + "%", Sr.isCatching !== Er.current && (Er.current = Sr.isCatching, Sr.isCatching ? Qr.current.classList.add("catching") : Qr.current.classList.remove("catching"))
                                  }
                                  Wr.current && (Wr.current.style.left = 100 * Sr.moverPosition + "%"), fr.current && (fr.current.value = Sr.progress)
                                }));
                                return () => {
                                  rr()
                                }
                              }), [mr]), (0, Ir.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, Ir.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, Ir.jsx)(ar.c, {
                                    text: pr
                                  })
                                }), (0, Ir.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: fr
                                }), (0, Ir.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, Ir.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: Qr
                                  }), (0, Ir.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Wr,
                                    children: (0, Ir.jsx)("span", {
                                      children: xr && (0, Ir.jsx)(ar.c, {
                                        text: [{
                                          icon: xr,
                                          style: {
                                            fontSize: "4rem"
                                          }
                                        }]
                                      })
                                    })
                                  })]
                                })]
                              })
                            }));
                          var Ur = Qr(688);
                          const tr = (0, Zr.memo)((function(rr) {
                              let {
                                initialParameters: Sr
                              } = rr;
                              const Qr = (0, Zr.useRef)(null),
                                Wr = Sr.label,
                                fr = Sr.Aa,
                                {
                                  icon: Er,
                                  scale: pr,
                                  rotation: xr
                                } = null !== Sr && void 0 !== Sr ? Sr : {},
                                mr = 100 * (.5 - fr / 2),
                                Nr = 100 * fr,
                                tr = (0, jr.f)();
                              return (0, Zr.useEffect)((() => {
                                const rr = tr.onFrame((() => {
                                  const rr = tr.getState();
                                  if (!rr.isActive || !Qr.current) return;
                                  const Sr = rr.state;
                                  Qr.current.style.left = 100 * Sr.markerPosition + "%"
                                }));
                                return () => {
                                  rr()
                                }
                              }), [tr]), (0, Ir.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, Ur.L)(pr) && {
                                    "--scale": pr
                                  },
                                  ...!(0, Ur.L)(xr) && {
                                    "--rotation": `${xr}deg`
                                  }
                                },
                                children: [Er && (0, Ir.jsx)(ar.c, {
                                  text: [{
                                    icon: Er
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, Ir.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, Ir.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${mr}%`,
                                      width: `${Nr}%`
                                    }
                                  }), (0, Ir.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: Qr
                                  })]
                                }), (0, Ir.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, Ir.jsx)(ar.c, {
                                    text: Wr
                                  })
                                })]
                              })
                            })),
                            hr = (0, Zr.memo)((function(rr) {
                              let {
                                initialParameters: Sr
                              } = rr;
                              const Qr = (0, Zr.useRef)(null),
                                [Wr, fr] = (0, Zr.useState)((() => new Array(Sr.ia).fill("pending"))),
                                [Er, pr] = (0, Zr.useState)((() => {
                                  const rr = Sr.Fa;
                                  return (0, Ur.L)(rr) || rr <= 0 ? [] : new Array(rr).fill("pending")
                                })),
                                xr = Sr.label,
                                {
                                  icon: mr
                                } = Sr,
                                Nr = (0, Zr.useRef)(0),
                                tr = (0, Zr.useRef)(0),
                                hr = (0, Zr.useRef)([]),
                                zr = (0, jr.f)();
                              return (0, Zr.useEffect)((() => {
                                const rr = zr.onFrame((() => {
                                  const rr = zr.getState();
                                  if (!rr.isActive || !Qr.current) return;
                                  const Sr = rr.state,
                                    Zr = 30 + 60 * Sr.outerCircleProgress;
                                  if (Qr.current.setAttribute("r", String(Zr)), !0 === Sr.lastClickResult && Sr.successes > Nr.current) {
                                    Qr.current.classList.remove("QTERhythmClickOuterCircle--miss"), Qr.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const rr = setTimeout((() => {
                                      var rr;
                                      null === (rr = Qr.current) || void 0 === rr || rr.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    hr.current.push(rr)
                                  } else if (!1 === Sr.lastClickResult && Sr.misses > tr.current) {
                                    Qr.current.classList.remove("QTERhythmClickOuterCircle--hit"), Qr.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const rr = setTimeout((() => {
                                      var rr;
                                      null === (rr = Qr.current) || void 0 === rr || rr.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    hr.current.push(rr)
                                  }
                                  Sr.successes === Nr.current && Sr.misses === tr.current || (Nr.current = Sr.successes, tr.current = Sr.misses, fr((rr => {
                                    const Qr = [...rr];
                                    for (let Zr = 0; Zr < Sr.ia; Zr++) Qr[Zr] = Zr < Sr.successes ? "success" : "pending";
                                    return Qr
                                  })), pr((rr => {
                                    if (0 === rr.length) return rr;
                                    const Qr = [...rr];
                                    for (let Zr = 0; Zr < Qr.length; Zr++) Qr[Zr] = Zr < Sr.misses ? "miss" : "pending";
                                    return Qr
                                  })))
                                }));
                                return () => {
                                  rr();
                                  for (const rr of hr.current) clearTimeout(rr);
                                  hr.current = []
                                }
                              }), [zr]), (0, Ir.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, Ir.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Wr.map(((rr, Sr) => (0, Ir.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === rr ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, Sr)))
                                }), (0, Ir.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, Ir.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Ir.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, Ir.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: Qr
                                    })]
                                  }), mr && (0, Ir.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, Ir.jsx)(ar.c, {
                                      text: [{
                                        icon: mr
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Er.length > 0 && (0, Ir.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Er.map(((rr, Sr) => (0, Ir.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === rr ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, Sr)))
                                }), (0, Ir.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, Ir.jsx)(ar.c, {
                                    text: xr
                                  })
                                })]
                              })
                            }));

                          function zr(rr) {
                            let {
                              qte: Sr
                            } = rr;
                            switch (Sr.type) {
                              case "progressBar":
                                return (0, Ir.jsx)(fr, {
                                  initialParameters: Sr.parameters
                                });
                              case "timedClick":
                                return (0, Ir.jsx)(mr, {
                                  initialParameters: Sr.parameters
                                });
                              case "gravityBar":
                                return (0, Ir.jsx)(Nr, {
                                  initialParameters: Sr.parameters
                                });
                              case "precisionBar":
                                return (0, Ir.jsx)(tr, {
                                  initialParameters: Sr.parameters
                                });
                              case "rhythmClick":
                                return (0, Ir.jsx)(hr, {
                                  initialParameters: Sr.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Yr = (0, Zr.memo)((function() {
                            const [rr, Sr] = (0, Zr.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Wr.c)("qteStateUpdated", (rr => {
                              Sr(rr)
                            })), rr.isActive && rr.type ? (0, Ir.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, Ir.jsx)(zr, {
                                qte: rr
                              })
                            }) : null
                          }))
                        }, 5589: (rr, Sr, Qr) => {
                          Qr.d(Sr, {
                            b: () => Ir,
                            f: () => fr
                          });
                          var Zr = Qr(72),
                            Wr = Qr(1364),
                            ar = Qr(5594);
                          const jr = {
                              getState: () => ar.e.getCurrentState(),
                              onFrame: Wr.H
                            },
                            Ir = (0, Zr.createContext)(jr);

                          function fr() {
                            return (0, Zr.useContext)(Ir)
                          }
                        }, 5658: (rr, Sr, Qr) => {
                          Qr.d(Sr, {
                            d: () => Rr,
                            h: () => qr
                          });
                          var Zr = Qr(5667),
                            Wr = Qr(360);
                          const ar = 120,
                            jr = 260,
                            Ir = 1.15,
                            fr = 1.2,
                            Er = 2,
                            pr = 1.08,
                            xr = .8,
                            mr = .95,
                            Nr = 8,
                            Ur = "[\"')\\]\u300d\u300f\uff09]*",
                            tr = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ur}$`),
                            hr = new RegExp(`[?\uff1f]${Ur}$`),
                            zr = new RegExp(`[!\uff01]${Ur}$`),
                            Yr = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            nr = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            er = new RegExp(`[${nr}]`),
                            Kr = new RegExp(`[${nr}]|[^${nr}]+`, "g"),
                            yr = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Br(rr) {
                            let Sr = 2166136261;
                            for (let Qr = 0; Qr < rr.length; Qr++) Sr ^= rr.charCodeAt(Qr), Sr = Math.imul(Sr, 16777619);
                            return (Sr >>> 0) / 4294967295 * 2 - 1
                          }

                          function Tr(rr) {
                            var Sr;
                            if (er.test(rr)) return 1;
                            const Qr = rr.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Zr = Qr.replace(/[^0-9]/g, "");
                            if (Zr.length > 0 && !/\p{L}/u.test(Qr)) return Math.min(Zr.length, 4);
                            const Wr = null !== (Sr = Qr.match(yr)) && void 0 !== Sr ? Sr : [];
                            if (0 === Wr.length) {
                              var ar, jr;
                              const rr = null !== (ar = null === (jr = Qr.match(/\p{L}/gu)) || void 0 === jr ? void 0 : jr.length) && void 0 !== ar ? ar : 0;
                              return 0 === rr ? 0 : Math.min(Math.max(1, Math.round(rr / 2.5)), Nr)
                            }
                            const Ir = Qr.replace(/[^\p{L}]/gu, ""),
                              fr = Wr.length > 1 && "e" === Wr.at(-1) && Ir.endsWith("e") && !Ir.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(rr.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Wr.length - (fr ? 1 : 0), Nr)
                          }

                          function vr(rr) {
                            return rr.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Or(rr) {
                            const Sr = rr.replace(/[^\p{L}]/gu, "");
                            return Sr.length >= 2 && Sr === Sr.toUpperCase() && Sr !== Sr.toLowerCase()
                          }

                          function Lr(rr, Sr) {
                            var Qr;
                            const Nr = Sr && (0, Zr.n)(Sr),
                              Ur = null !== (Qr = null === Nr || void 0 === Nr ? void 0 : Nr.syllableMs) && void 0 !== Qr ? Qr : Zr.e,
                              nr = function(rr) {
                                const Sr = [];
                                for (const Zr of (0, Wr.gc)(rr))
                                  if ("string" === typeof Zr)
                                    for (const rr of Zr.split(/(\s+)/)) {
                                      if ("" === rr) continue;
                                      if (/^\s+$/.test(rr)) {
                                        Sr.push({
                                          kind: "space",
                                          text: rr
                                        });
                                        continue
                                      }
                                      if (!er.test(rr)) {
                                        Sr.push({
                                          kind: "word",
                                          text: rr,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Zr = !0;
                                      for (const Wr of null !== (Qr = rr.match(Kr)) && void 0 !== Qr ? Qr : []) {
                                        var Qr;
                                        const rr = Sr.at(-1);
                                        Zr || "word" !== (null === rr || void 0 === rr ? void 0 : rr.kind) || er.test(Wr) || /[\p{L}\p{N}]/u.test(Wr) ? (Zr || Sr.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), Sr.push({
                                          kind: "word",
                                          text: Wr,
                                          delayMs: 0
                                        }), Zr = !1) : rr.text += Wr
                                      }
                                    } else Sr.push({
                                      kind: "icon",
                                      text: Zr.icon,
                                      delayMs: 0
                                    });
                                return Sr
                              }(rr),
                              yr = [];
                            let Lr = [];
                            for (const Zr of nr) "space" !== Zr.kind && (Lr.push(Zr), tr.test(Zr.text) && (yr.push(Lr), Lr = []));
                            yr.push(Lr);
                            const lr = [];
                            let Xr = 0;
                            for (const Zr of yr) {
                              var Pr, Hr;
                              const rr = null !== (Pr = null === (Hr = Zr.at(-1)) || void 0 === Hr ? void 0 : Hr.text) && void 0 !== Pr ? Pr : "",
                                Sr = hr.test(rr),
                                Qr = zr.test(rr),
                                Wr = Zr.map((rr => "word" === rr.kind ? Tr(rr.text) : 1)),
                                nr = Wr.findLastIndex((rr => rr > 0));
                              for (const [hr, zr] of Zr.entries()) {
                                const rr = "word" === zr.kind,
                                  Zr = Wr[hr];
                                zr.delayMs = Xr;
                                for (let Wr = 0; Nr && Wr < Zr; Wr++) {
                                  const {
                                    intonation: ar
                                  } = Nr;
                                  let jr = nr > 0 ? -ar.declineSemitones * (hr / nr) : 0;
                                  jr += Br(`${vr(zr.text)}|${Wr}`) * ar.variationSemitones;
                                  const tr = Math.min(1, ar.variationSemitones);
                                  let Yr = Nr.glideSemitones,
                                    er = 1;
                                  Qr && (jr += ar.exclaimLiftSemitones, er *= Ir), Sr && hr === nr && (jr += ar.questionRiseSemitones * (Zr > 1 ? .5 + .5 * Wr / (Zr - 1) : 1), Wr === Zr - 1 && (Yr = Math.abs(Yr) + ar.questionRiseSemitones / 2)), rr && Or(zr.text) && (jr += Er * tr, er *= fr), Zr > 1 && 0 === Wr && (jr += xr * tr, er *= pr), lr.push({
                                    atMs: Xr + Wr * Ur,
                                    semitones: jr,
                                    glideSemitones: Yr,
                                    durationMs: Wr < Zr - 1 ? Math.min(Nr.durationMs, Ur * mr) : Nr.durationMs,
                                    level: er
                                  })
                                }
                                Xr += Zr * Ur + (tr.test(zr.text) ? jr : Yr.test(zr.text) ? ar : 0)
                              }
                            }
                            return {
                              pieces: nr.map((rr => "space" === rr.kind ? rr : "icon" === rr.kind ? {
                                kind: "icon",
                                icon: rr.text,
                                delayMs: rr.delayMs
                              } : {
                                kind: "word",
                                text: rr.text,
                                delayMs: rr.delayMs
                              })),
                              blips: lr
                            }
                          }
                          var lr = Qr(1251),
                            Xr = Qr(1304),
                            Pr = Qr(2093);

                          function Hr(rr) {
                            if ("string" === typeof rr) return rr;
                            const Sr = Xr.f.get().getCurrentLanguageCode();
                            return (0, lr.s)(Sr, rr.translationKey, (0, lr.p)(rr.params, Pr.b.shown))
                          }

                          function qr(rr) {
                            const Sr = void 0 === rr.voice ? null : (0, Zr.p)(rr.voice),
                              Qr = Sr && (0, Zr.n)(Sr);
                            return {
                              plan: Lr(Hr(rr.line), Qr),
                              synth: Qr
                            }
                          }

                          function Rr(rr) {
                            const Sr = [];
                            let Qr = [];
                            for (const [Wr, ar] of rr.entries()) {
                              var Zr;
                              "space" === ar.kind && (" " !== ar.text || "icon" !== (null === (Zr = rr[Wr + 1]) || void 0 === Zr ? void 0 : Zr.kind)) ? (Qr.length > 0 && Sr.push(Qr), Sr.push([ar]), Qr = []) : Qr.push(ar)
                            }
                            return Qr.length > 0 && Sr.push(Qr), Sr
                          }
                        }, 5675: (rr, Sr, Qr) => {
                          Qr.d(Sr, {
                            e: () => pr,
                            h: () => xr
                          });
                          var Zr = Qr(5681),
                            Wr = Qr(26);
                          const ar = .25,
                            jr = .85,
                            Ir = .02,
                            fr = .01;

                          function Er(rr, Sr, Qr, Zr, Wr, ar, Ir) {
                            const {
                              waveform: fr,
                              pitchHz: Er,
                              attackMs: pr,
                              releaseMs: xr,
                              lowpassHz: mr
                            } = Qr, Nr = Wr + Zr.durationMs / 1e3, Ur = Er * 2 ** (Zr.semitones / 12), tr = rr.createOscillator();
                            tr.type = fr, tr.frequency.setValueAtTime(Ur, Wr), tr.frequency.exponentialRampToValueAtTime(Ur * 2 ** (Zr.glideSemitones / 12), Nr);
                            const hr = Wr + Math.min(pr, Zr.durationMs) / 1e3,
                              zr = rr.createGain();
                            zr.gain.setValueAtTime(0, Wr), zr.gain.linearRampToValueAtTime(ar, hr), zr.gain.linearRampToValueAtTime(ar * jr, Math.max(hr, Nr - xr / 1e3)), zr.gain.linearRampToValueAtTime(0, Nr);
                            const Yr = [tr];
                            if (null !== mr) {
                              const Sr = rr.createBiquadFilter();
                              Sr.type = "lowpass", Sr.frequency.value = mr, Yr.push(Sr)
                            }
                            Yr.push(zr, Sr);
                            for (let jr = 1; jr < Yr.length; jr++) Yr[jr - 1].connect(Yr[jr]);
                            return tr.onended = () => {
                              for (const rr of Yr.slice(0, -1)) rr.disconnect();
                              Ir()
                            }, tr.start(Wr), tr.stop(Nr), tr
                          }

                          function pr(rr, Sr, Qr, Zr, Wr, jr) {
                            if (0 === Zr.length) return jr(), () => {};
                            const pr = ar * Qr.volume * Wr,
                              xr = rr.createGain();
                            xr.connect(Sr);
                            const mr = rr.currentTime + Ir,
                              Nr = new Set;
                            for (const ar of Zr) {
                              const Sr = Er(rr, xr, Qr, ar, mr + ar.atMs / 1e3, pr * ar.level, (() => {
                                Nr.delete(Sr), 0 === Nr.size && (xr.disconnect(), jr())
                              }));
                              Nr.add(Sr)
                            }
                            return () => {
                              const Sr = rr.currentTime;
                              xr.gain.setTargetAtTime(0, Sr, fr);
                              for (const rr of Nr) try {
                                rr.stop(Sr + 5 * fr)
                              } catch {}
                            }
                          }

                          function xr(rr, Sr) {
                            var Qr;
                            const ar = Zr.Howler.ctx,
                              jr = Zr.Howler.masterGain;
                            if (!ar || !jr || !Wr.c.get("soundOnFromAd")) return () => {};
                            const Ir = Zr.Howler;
                            return null === (Qr = Ir._autoResume) || void 0 === Qr || Qr.call(Ir), pr(ar, jr, rr, Sr, Wr.c.get("soundVolume"), (() => {
                              var rr;
                              null === (rr = Ir._autoSuspend) || void 0 === rr || rr.call(Ir)
                            }))
                          }
                        }, 5636: (rr, Sr, Qr) => {
                          Qr.d(Sr, {
                            c: () => Ir,
                            g: () => Wr,
                            i: () => fr,
                            l: () => jr,
                            o: () => ar
                          });
                          var Zr = Qr(5634);
                          const Wr = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            ar = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            jr = `${Zr.l} lists every page of the Bloxd Code API docs.`;

                          function Ir(rr, Sr) {
                            return `${rr.url}${encodeURIComponent(Sr.toWellFormed())}`
                          }

                          function fr(rr) {
                            const Sr = Ir(Wr, rr);
                            return Sr.length <= 3e4 ? {
                              url: Sr,
                              sendsPrompt: !0
                            } : {
                              url: new URL(Wr.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5681: (rr, Sr, Qr) => {
                          Qr.r(Sr), Qr.d(Sr, {
                            Howl: () => Wr.Howl,
                            Howler: () => Wr.Howler,
                            musicOutput: () => hr,
                            readyAudioContext: () => zr
                          });
                          var Zr, Wr = Qr(5689),
                            ar = Qr(4681),
                            jr = Qr(5413);
                          const Ir = Wr.Howler;

                          function fr() {
                            var rr, Sr;
                            if (Ir.ctx || !Ir.usingWebAudio || "undefined" === typeof AudioContext || !(0, jr.i)()) return;
                            const Qr = navigator.audioSession;
                            let Zr;
                            "auto" === (null === Qr || void 0 === Qr ? void 0 : Qr.type) && (Qr.type = "ambient");
                            try {
                              Zr = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Wr = Zr.createGain();
                            Wr.gain.setValueAtTime(Ir._muted ? 0 : null !== (rr = Ir._volume) && void 0 !== rr ? rr : 1, Zr.currentTime), Wr.connect(Zr.destination), Ir.ctx = Zr, Ir.masterGain = Wr, null === (Sr = Ir._setup) || void 0 === Sr || Sr.call(Ir)
                          }
                          Ir._mobileUnloaded = !0;
                          const Er = Ir.volume.bind(Wr.Howler);
                          Ir.volume = function() {
                            return fr(), Er(...arguments)
                          };
                          const pr = Ir.mute.bind(Wr.Howler);
                          Ir.mute = rr => (fr(), pr(rr));
                          const xr = Wr.Howl.prototype,
                            mr = xr.init;

                          function Nr() {
                            for (; Ir._html5AudioPool.length < Ir.html5PoolSize;) {
                              const rr = new Audio;
                              rr._unlocked = !0, Ir._releaseHtml5Audio(rr)
                            }
                            for (const Sr of Ir._howls)
                              if (!Sr._webAudio)
                                for (const Qr of Sr._getSoundIds()) {
                                  var rr;
                                  const Zr = null === (rr = Sr._soundById(Qr)) || void 0 === rr ? void 0 : rr._node;
                                  Zr && !Zr._unlocked && (Zr._unlocked = !0, Zr.load())
                                }
                          }
                          xr.init = function(rr) {
                            return fr(), mr.call(this, rr)
                          }, (0, jr.i)() && (Ir._unlockAudio = () => {
                            const rr = Ir.ctx;
                            if (Ir._audioUnlocked || !rr) return;
                            Ir.autoUnlock = !1;
                            const Sr = rr.createBuffer(1, 1, 22050);
                            Ir._scratchBuffer = Sr;
                            const Qr = new AbortController;
                            let Zr = "afterPaint";
                            const Wr = () => {
                                var Zr;
                                if (Ir._audioUnlocked) return;
                                null === (Zr = Ir._autoResume) || void 0 === Zr || Zr.call(Ir);
                                const Wr = rr.createBufferSource();
                                Wr.buffer = Sr, Wr.connect(rr.destination), Wr.start(0), rr.resume().catch((() => {})), Wr.onended = () => {
                                  Wr.disconnect(0), Ir._audioUnlocked = !0, Qr.abort();
                                  for (const rr of Ir._howls) rr._emit("unlock")
                                }
                              },
                              fr = () => {
                                Nr(), Wr()
                              },
                              Er = Sr => {
                                if (Nr(), "inTap" === Zr) {
                                  if ("running" === rr.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Wr()
                                } else "afterPaint" === Zr && (Zr = "queued", (0, ar.e)(Sr.timeStamp, (() => {
                                  Zr = "inTap", Wr()
                                })))
                              };
                            for (const ar of ["touchstart", "touchend"]) document.addEventListener(ar, fr, {
                              capture: !0,
                              signal: Qr.signal
                            });
                            for (const ar of jr.c) document.addEventListener(ar, Er, {
                              capture: !0,
                              signal: Qr.signal
                            })
                          });
                          let Ur = 0;
                          const tr = null === (Zr = Ir._autoSuspend) || void 0 === Zr ? void 0 : Zr.bind(Wr.Howler);

                          function hr() {
                            zr();
                            const {
                              ctx: rr,
                              masterGain: Sr
                            } = Ir;
                            return rr && Sr ? {
                              ctx: rr,
                              destination: Sr,
                              holdAwake: rr => {
                                var Sr, Qr;
                                (Ur += rr ? 1 : -1, rr) ? null === (Sr = Ir._autoResume) || void 0 === Sr || Sr.call(Ir): null === (Qr = Ir._autoSuspend) || void 0 === Qr || Qr.call(Ir)
                              },
                              wake: () => {
                                var Sr;
                                "running" !== rr.state && (null === (Sr = Ir._autoResume) || void 0 === Sr || Sr.call(Ir), rr.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function zr() {
                            var rr;
                            (Ir.volume(), Ir.ctx && Ir.autoUnlock) && (null === (rr = Ir._unlockAudio) || void 0 === rr || rr.call(Ir))
                          }
                          tr && (Ir._autoSuspend = () => Ur > 0 ? Wr.Howler : tr())
                        }, 5692: (rr, Sr, Qr) => {
                          function Zr(rr) {
                            return {
                              notAfter: rr
                            }
                          }
                          Qr.d(Sr, {
                            c: () => fr,
                            e: () => Er,
                            g: () => Ir,
                            k: () => Zr,
                            o: () => Wr,
                            p: () => ar,
                            s: () => jr,
                            t: () => pr,
                            u: () => xr
                          });
                          const Wr = Zr("\\w$."),
                            ar = Zr("\\w.,");

                          function jr(rr) {
                            return Sr => fr(Sr, rr)
                          }

                          function Ir(rr) {
                            return Sr => !rr.test(Sr.input.slice(0, Sr.index))
                          }

                          function fr(rr, Sr) {
                            return rr.index > 0 && new RegExp(`[${Sr}]`).test(rr.input[rr.index - 1])
                          }

                          function Er(rr, Sr, Qr) {
                            return function(rr) {
                              return void 0 !== rr && "function" !== typeof rr
                            }(Qr) ? function(rr, Sr, Qr) {
                              const Zr = Sr.flags.replace(/[gy]/g, ""),
                                Wr = new RegExp(`[^${Qr}](?:${Sr.source})`, `${Zr}g`),
                                ar = [],
                                jr = Qr => {
                                  const Zr = Qr.index + Qr[0].length;
                                  return ("" === Qr[0] ? mr(rr, Sr, Zr) : Zr) - 1
                                },
                                Ir = new RegExp(`(?:${Sr.source})`, `${Zr}y`).exec(rr);
                              if (Ir) {
                                if (ar.push(Ir), !Sr.global) return ar;
                                Wr.lastIndex = jr(Ir)
                              }
                              for (let fr = Wr.exec(rr); fr; fr = Wr.exec(rr)) {
                                const Qr = mr(rr, Sr, fr.index) - fr.index;
                                if (fr[0] = fr[0].slice(Qr), fr.index += Qr, ar.push(fr), !Sr.global) break;
                                Wr.lastIndex = jr(fr)
                              }
                              return ar
                            }(rr, Sr, Qr.notAfter) : function(rr, Sr, Qr) {
                              const Zr = new RegExp(Sr.source, `${Sr.flags.replace(/[gy]/g,"")}g`),
                                Wr = [];
                              for (let ar = Zr.exec(rr); ar; ar = Zr.exec(rr))
                                if (!Qr || Qr(ar)) {
                                  if (Wr.push(ar), !Sr.global) break;
                                  "" === ar[0] && (Zr.lastIndex = mr(rr, Sr, Zr.lastIndex))
                                } else Zr.lastIndex = mr(rr, Sr, ar.index);
                              return Wr
                            }(rr, Sr, Qr)
                          }

                          function pr(rr, Sr, Qr, Zr) {
                            let Wr = "",
                              ar = 0;
                            for (const jr of Er(rr, Sr, Qr)) Wr += rr.slice(ar, jr.index) + Zr(jr), ar = jr.index + jr[0].length;
                            return Wr + rr.slice(ar)
                          }

                          function xr(rr, Sr, Qr) {
                            const Zr = [];
                            let Wr = 0;
                            for (const ar of Er(rr, Sr, Qr)) Zr.push(rr.slice(Wr, ar.index)), Wr = ar.index + ar[0].length;
                            return [...Zr, rr.slice(Wr)]
                          }

                          function mr(rr, Sr, Qr) {
                            var Zr;
                            return Qr + (Sr.unicode && (null !== (Zr = rr.codePointAt(Qr)) && void 0 !== Zr ? Zr : 0) > 65535 ? 2 : 1)
                          }
                        }, 5634: (rr, Sr, Qr) => {
                          Qr.d(Sr, {
                            d: () => Wr,
                            f: () => fr,
                            j: () => ar,
                            l: () => jr,
                            m: () => Ir,
                            p: () => hr,
                            r: () => pr,
                            s: () => xr,
                            w: () => tr,
                            x: () => Nr
                          });
                          var Zr = Qr(1722);
                          const Wr = 24e3,
                            ar = "/docs/llms.txt",
                            jr = `${Zr.c}${ar}`,
                            Ir = "/llms.txt",
                            fr = "/docs/llms-full.txt";

                          function Er(rr) {
                            return rr || "index"
                          }

                          function pr(rr) {
                            return `/docs/${Er(rr)}.md`
                          }

                          function xr(rr, Sr) {
                            return `/docs/${Er(rr)}/${Sr+1}.md`
                          }
                          const mr = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Nr(rr) {
                            const Sr = mr.exec(rr);
                            return null === Sr ? null : {
                              name: Sr[1],
                              part: void 0 === Sr[2] ? null : Number(Sr[2])
                            }
                          }
                          const Ur = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function tr(rr) {
                            const Sr = Ur.exec(rr);
                            if (null === Sr) return null;
                            const [, Qr = "", Zr] = Sr;
                            return void 0 === Zr ? pr(Qr) : xr(Qr, Number(Zr) - 1)
                          }

                          function hr(rr) {
                            return `/docsHtml/${Er(rr)}.html`
                          }
                        }, 5667: (rr, Sr, Qr) => {
                          Qr.d(Sr, {
                            e: () => Wr,
                            h: () => Zr,
                            l: () => ar,
                            n: () => fr,
                            p: () => jr
                          });
                          const Zr = ["sine", "triangle", "square", "sawtooth"],
                            Wr = 55,
                            ar = {
                              soft: {
                                waveform: "sine",
                                pitchHz: 300,
                                glideSemitones: -.5,
                                durationMs: 80,
                                attackMs: 6,
                                releaseMs: 18,
                                lowpassHz: null,
                                volume: .6,
                                intonation: {
                                  variationSemitones: 1.2,
                                  declineSemitones: 1.5,
                                  questionRiseSemitones: 3.5,
                                  exclaimLiftSemitones: 1.5
                                },
                                syllableMs: 60
                              },
                              regular: {
                                waveform: "triangle",
                                pitchHz: 195,
                                glideSemitones: -.6,
                                durationMs: 70,
                                attackMs: 2,
                                releaseMs: 12,
                                lowpassHz: null,
                                volume: 1,
                                intonation: {
                                  variationSemitones: 1.5,
                                  declineSemitones: 2,
                                  questionRiseSemitones: 4,
                                  exclaimLiftSemitones: 2
                                },
                                syllableMs: 52
                              },
                              dark: {
                                waveform: "sawtooth",
                                pitchHz: 80,
                                glideSemitones: -.6,
                                durationMs: 85,
                                attackMs: 6,
                                releaseMs: 16,
                                lowpassHz: 420,
                                volume: 1.05,
                                intonation: {
                                  variationSemitones: 1,
                                  declineSemitones: 3.5,
                                  questionRiseSemitones: 2.5,
                                  exclaimLiftSemitones: 1
                                },
                                syllableMs: 64
                              },
                              "high-pitched": {
                                waveform: "triangle",
                                pitchHz: 300,
                                glideSemitones: -.8,
                                durationMs: 55,
                                attackMs: 2,
                                releaseMs: 10,
                                lowpassHz: null,
                                volume: .8,
                                intonation: {
                                  variationSemitones: 2.2,
                                  declineSemitones: 2,
                                  questionRiseSemitones: 5,
                                  exclaimLiftSemitones: 3
                                },
                                syllableMs: 44
                              },
                              gruff: {
                                waveform: "sawtooth",
                                pitchHz: 105,
                                glideSemitones: -.8,
                                durationMs: 75,
                                attackMs: 4,
                                releaseMs: 14,
                                lowpassHz: 900,
                                volume: .85,
                                intonation: {
                                  variationSemitones: 1.2,
                                  declineSemitones: 3,
                                  questionRiseSemitones: 3,
                                  exclaimLiftSemitones: 2
                                },
                                syllableMs: 58
                              },
                              lively: {
                                waveform: "square",
                                pitchHz: 230,
                                glideSemitones: .6,
                                durationMs: 55,
                                attackMs: 2,
                                releaseMs: 10,
                                lowpassHz: 2400,
                                volume: .5,
                                intonation: {
                                  variationSemitones: 2.6,
                                  declineSemitones: 1.5,
                                  questionRiseSemitones: 5,
                                  exclaimLiftSemitones: 3.5
                                },
                                syllableMs: 44
                              },
                              posh: {
                                waveform: "triangle",
                                pitchHz: 175,
                                glideSemitones: 1.2,
                                durationMs: 90,
                                attackMs: 6,
                                releaseMs: 20,
                                lowpassHz: 2e3,
                                volume: 1,
                                intonation: {
                                  variationSemitones: 2,
                                  declineSemitones: 4,
                                  questionRiseSemitones: 5,
                                  exclaimLiftSemitones: 2.5
                                },
                                syllableMs: 60
                              },
                              mechanical: {
                                waveform: "square",
                                pitchHz: 140,
                                glideSemitones: 0,
                                durationMs: 60,
                                attackMs: 0,
                                releaseMs: 4,
                                lowpassHz: 1400,
                                volume: .55,
                                intonation: {
                                  variationSemitones: 0,
                                  declineSemitones: 0,
                                  questionRiseSemitones: 0,
                                  exclaimLiftSemitones: 0
                                },
                                syllableMs: 62
                              }
                            };

                          function jr(rr) {
                            return "string" !== typeof rr ? rr : Object.hasOwn(ar, rr) ? ar[rr] : null
                          }

                          function Ir(rr, Sr, Qr) {
                            return Math.min(Qr, Math.max(Sr, rr))
                          }

                          function fr(rr) {
                            const Sr = Ir(rr.durationMs, 10, 500),
                              Qr = Ir(rr.attackMs, 0, Sr),
                              {
                                intonation: Wr
                              } = rr;
                            return {
                              waveform: Zr.includes(rr.waveform) ? rr.waveform : "sine",
                              pitchHz: Ir(rr.pitchHz, 20, 4e3),
                              glideSemitones: Ir(rr.glideSemitones, -24, 24),
                              durationMs: Sr,
                              attackMs: Qr,
                              releaseMs: Ir(rr.releaseMs, 0, Sr - Qr),
                              lowpassHz: null === rr.lowpassHz ? null : Ir(rr.lowpassHz, 20, 2e4),
                              volume: Ir(rr.volume, 0, 2),
                              intonation: {
                                variationSemitones: Ir(Wr.variationSemitones, 0, 6),
                                declineSemitones: Ir(Wr.declineSemitones, 0, 12),
                                questionRiseSemitones: Ir(Wr.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: Ir(Wr.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: Ir(rr.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const rr in modules) Object.freeze(modules[rr]);