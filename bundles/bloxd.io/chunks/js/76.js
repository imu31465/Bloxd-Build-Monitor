export const id = 76;
export const ids = [76, 92];
export const modules = {
    4598: (bb, ub, hb) => {
      hb.d(ub, {
        c: () => ob,
        g: () => Ab
      });
      var Bb = hb(958),
        Ob = hb.n(Bb),
        Gb = hb(49),
        Ub = hb(1095),
        Lb = hb(4606),
        Yb = hb(1789),
        Sb = hb(2288),
        ab = hb(4611),
        Hb = hb(1007);
      const wb = new WeakMap;
      let Zb = 0;

      function Xb(bb) {
        let ub = wb.get(bb);
        return void 0 === ub && (ub = Zb++, wb.set(bb, ub)), ub
      }

      function pb(bb) {
        let {
          piece: ub
        } = bb;
        return "space" === ub.kind ? (0, Hb.jsx)(Hb.Fragment, {
          children: ub.text
        }) : (0, Hb.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${ub.delayMs}ms`
          },
          children: (0, Hb.jsx)(Lb.c, {
            text: "icon" === ub.kind ? `[[${ub.icon}]]` : ub.text
          })
        })
      }

      function ob(bb) {
        let {
          display: ub
        } = bb;
        const {
          selectedLanguage: hb
        } = (0, Ub.K)(), Bb = (0, Gb.useMemo)((() => (0, ab.e)((0, ab.i)(ub).plan.pieces)), [ub, hb.code]);
        return (0, Hb.jsxs)("div", {
          className: Ob()("Dialogue", {
            DialogueAnimateIn: !1 !== ub.animateIn
          }),
          children: [ub.speakerName && (0, Hb.jsx)(Yb.c, {
            text: ub.speakerName,
            className: "DialogueSpeaker"
          }), (0, Hb.jsx)("p", {
            className: "DialogueLine",
            children: Bb.map(((bb, ub) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Hb.jsx)("span", {
              className: "DialogueGlue",
              children: bb.map(((bb, ub) => (0, Hb.jsx)(pb, {
                piece: bb
              }, ub)))
            }, ub)))
          })]
        })
      }
      const Ab = (0, Gb.memo)((function() {
        const bb = (0, Sb.f)("dialogue");
        return (0, Hb.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: bb && (0, Hb.jsx)(ob, {
            display: bb
          }, Xb(bb))
        })
      }))
    },
    4472: (bb, ub, hb) => {
        hb.r(ub), hb.d(ub, {
          default: () => QG
        });
        var Bb = hb(49),
          Ob = hb(958),
          Gb = hb.n(Ob),
          Ub = hb(1424),
          Lb = hb(1431),
          Yb = hb(13),
          Sb = hb(65),
          ab = hb(4481),
          Hb = hb(4493),
          wb = hb(4502),
          Zb = hb(4118),
          Xb = hb(1007);
        const pb = "/textures/docs/icons";

        function ob(bb) {
          let {
            name: ub,
            isTinted: hb,
            className: Bb,
            style: Ob
          } = bb;
          const Ub = `${pb}/${ub}.png`;
          return hb ? (0, Xb.jsxs)("span", {
            className: Gb()("DocsPixelIcon", "Tinted", Bb),
            "aria-hidden": "true",
            style: Ob,
            children: [(0, Xb.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Ub}")`,
                WebkitMaskImage: `url("${Ub}")`
              }
            }), (0, Xb.jsx)("img", {
              src: Ub,
              alt: ""
            })]
          }) : (0, Xb.jsx)("img", {
            className: Gb()("DocsPixelIcon", Bb),
            src: Ub,
            alt: "",
            "aria-hidden": "true",
            style: Ob
          })
        }
        const Ab = 1500;

        function lb() {
          const [bb, ub] = (0, Bb.useState)(null);
          (0, Bb.useEffect)((() => {
            if (null === bb) return;
            const hb = setTimeout((() => {
              ub(null)
            }), Ab);
            return () => {
              clearTimeout(hb)
            }
          }), [bb]);
          return [bb, bb => {
            (0, Zb.b)(bb).then((() => {
              ub({
                text: bb,
                failed: !1
              })
            }), (hb => {
              console.error("Could not copy to the clipboard", hb), ub({
                text: bb,
                failed: !0
              })
            }))
          }]
        }

        function Kb(bb) {
          let {
            text: ub,
            label: hb,
            className: Bb
          } = bb;
          const [Ob, Ub] = lb(), Lb = !1 === (null === Ob || void 0 === Ob ? void 0 : Ob.failed);
          return (0, Xb.jsxs)("button", {
            type: "button",
            className: Gb()("DocsCopyButton", Bb, {
              Copied: Lb
            }),
            title: `Copy ${ub.length>40?"to clipboard":ub}`,
            "aria-label": hb ? void 0 : `Copy ${ub}`,
            onClick: bb => {
              bb.stopPropagation(), Ub(ub)
            },
            children: [(0, Xb.jsx)(ob, {
              name: Lb ? "check" : "copy"
            }), hb && (0, Xb.jsx)("span", {
              children: Lb ? "Copied" : null !== Ob && void 0 !== Ob && Ob.failed ? "Copy failed" : hb
            })]
          })
        }
        ab.c.registerLanguage("javascript", Hb.e), ab.c.registerLanguage("typescript", wb.d);
        const Wb = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Cb = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          db = 24;

        function rb(bb) {
          let {
            code: ub,
            lang: hb,
            compact: Ob = !1
          } = bb;
          const Ub = (0, Bb.useMemo)((() => function(bb, ub) {
              const hb = Wb[ub];
              return hb ? ab.c.highlight(bb, {
                language: hb
              }).value : bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(ub, hb)), [ub, hb]),
            Lb = ub.split("\n").length,
            Yb = !Ob && Lb > db + 6,
            [Sb, Hb] = (0, Bb.useState)(!1),
            wb = Wb[hb];
          return (0, Xb.jsxs)("div", {
            className: Gb()("DocsCodeBlock", {
              Compact: Ob,
              Collapsed: Yb && !Sb
            }),
            children: [!Ob && (0, Xb.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, Xb.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: wb ? Cb[wb] : "Text"
              }), (0, Xb.jsx)(Kb, {
                text: ub,
                label: "Copy"
              })]
            }), (0, Xb.jsx)("pre", {
              children: (0, Xb.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Ub
                }
              })
            }), Yb && (0, Xb.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Sb,
              onClick: () => {
                Hb(!Sb)
              },
              children: [(0, Xb.jsx)(ob, {
                name: Sb ? "chevron-up" : "chevron-down"
              }), Sb ? "Show less" : `Show all ${Lb} lines`]
            })]
          })
        }
        var jb = hb(4507);
        var nb = hb(4515);
        const Db = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function xb(bb) {
          const ub = new Map;
          let hb, Bb = [],
            Ob = !1;
          const Gb = () => {
            hb && ub.set(hb.name, hb.lines.join("\n").trimEnd())
          };
          for (const Ub of bb.split("\n")) {
            const bb = Ub.match(Db);
            Ob || Ub.startsWith("/*") ? (Ob || (Gb(), hb = void 0), Bb.push(Ub), Ob = !Ub.includes("*/")) : bb ? (Gb(), hb = {
              name: bb[1],
              lines: [...Bb, Ub]
            }, Bb = []) : hb && (Ub.startsWith(" ") || Ub.startsWith("\t") || /^[}\])|]/.test(Ub)) ? hb.lines.push(Ub) : hb && "" !== Ub.trim() && (Gb(), hb = void 0)
          }
          return Gb(), ub
        }

        function zb(bb) {
          return "methods" === bb || "callbacks" === bb || "settings" === bb
        }
        const gb = {
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
              setterSnippet: (bb, ub) => `api.setClientOption(playerId, "${bb}", ${ub})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (bb, ub) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${bb}", ${ub})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (bb, ub) => `api.setMobSetting(mobId, "${bb}", ${ub})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (bb, ub) => `api.setVehicleSetting(vehicleId, "${bb}", ${ub})`
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
          ib = {
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

        function vb(bb) {
          return bb.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function tb(bb) {
          let ub = !1;
          return bb.split("\n").map((bb => (bb.startsWith("```") && (ub = !ub), !ub && /^#{3,} /.test(bb) ? bb.slice(1) : bb))).join("\n")
        }

        function Jb(bb) {
          return "readme" === bb ? "getting-started" : vb(bb)
        }
        const eb = "## Glossary of Referenced Types";
        const Nb = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...nb.b.flatMap((bb => {
            const ub = {
              id: bb.id,
              slug: Jb(bb.id),
              title: bb.title,
              markdown: bb.content,
              ...gb[bb.id]
            };
            if ("readme" === bb.id) return function(bb) {
              const ub = bb.markdown.indexOf(eb),
                hb = bb.markdown.indexOf("\n```", ub),
                Bb = bb.markdown.indexOf("\n```", hb + 1);
              if (-1 === ub || -1 === hb || -1 === Bb) throw new Error(`Getting started has no "${eb}" section with a code block`);
              const Ob = bb.markdown.slice(ub + 31, hb).trim(),
                Gb = [...xb(bb.markdown.slice(bb.markdown.indexOf("\n", hb + 1) + 1, Bb))].map((bb => {
                  let [ub, hb] = bb;
                  return `## ${ub}\n\n\`\`\`ts\n${hb}\n\`\`\`\n`
                })),
                Ub = bb.markdown.slice(bb.markdown.indexOf("\n", Bb + 1) + 1);
              return [{
                ...bb,
                markdown: `${bb.markdown.slice(0,ub)}${Ub}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Ob}\n\n${Gb.join("\n")}`
              }]
            }(ub);
            if ("howTo" === bb.id) {
              const {
                parent: bb,
                guides: hb
              } = function(bb) {
                const [ub, ...hb] = bb.markdown.split(/^(?=## )/m), Bb = [ub], Ob = [];
                for (const Ub of hb) {
                  var Gb;
                  const ub = Ub.indexOf("\n"),
                    hb = Ub.slice(3, ub).trim(),
                    Lb = Ub.slice(ub + 1);
                  if (!Lb.includes("```")) {
                    Bb.push(Ub);
                    continue
                  }
                  const Yb = null !== (Gb = ib[hb]) && void 0 !== Gb ? Gb : {
                    icon: "lightbulb",
                    summary: `How to use ${hb.toLowerCase()} in World Code.`
                  };
                  Ob.push({
                    id: `${bb.id}${hb.split(/[^A-Za-z0-9]+/).map((bb=>bb.charAt(0).toUpperCase()+bb.slice(1))).join("")}`,
                    slug: `${bb.slug}-${vb(hb)}`,
                    title: hb,
                    layout: "article",
                    sourceAnchor: (0, jb.s)(hb),
                    markdown: `# ${hb}\n\n${tb(Lb)}`,
                    ...Yb
                  })
                }
                return {
                  parent: {
                    ...bb,
                    markdown: Bb.join(""),
                    childPageIds: Ob.map((bb => bb.id))
                  },
                  guides: Ob
                }
              }(ub);
              return [bb, ...hb]
            }
            return [ub]
          }))],
          sb = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Nb.filter((bb => void 0 !== bb.sourceAnchor)).map((bb => bb.id))]
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

        function Mb(bb) {
          return Nb.find((ub => ub.id === bb))
        }
        const mb = new Map;

        function Ib(bb) {
          let ub = mb.get(bb.id);
          return ub || (ub = (0, jb.x)(bb.markdown, "changelog" === bb.layout ? 3 : 2), mb.set(bb.id, ub)), ub
        }

        function Pb(bb, ub) {
          return Ib(bb).sections.some((bb => bb.heading.anchor === ub || bb.blocks.some((bb => "heading" === bb.kind && bb.anchor === ub))))
        }

        function qb(bb) {
          const [ub, ...hb] = bb.replace(/^#/, "").split("-"), Bb = Nb.find((bb => bb.id === ub));
          if (!Bb) return null;
          const Ob = hb.length > 0 ? (0, jb.s)(hb.join("-")) : "";
          for (const Ub of null !== (Gb = Bb.childPageIds) && void 0 !== Gb ? Gb : []) {
            var Gb;
            const bb = Mb(Ub);
            if (bb.sourceAnchor === Ob) return {
              page: bb,
              anchor: ""
            };
            if (Pb(bb, Ob)) return {
              page: bb,
              anchor: Ob
            }
          }
          return {
            page: Bb,
            anchor: Ob
          }
        }
        const Eb = {
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

        function yb(bb, ub) {
          let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Bb = ub.slug ? `${bb}/${ub.slug}` : bb;
          return hb ? `${Bb}#${hb}` : Bb
        }
        var Vb = hb(4528);
        const Fb = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          fb = new Set(["GameApi", "Console", "_TypeOf"]),
          kb = 4;

        function Tb(bb) {
          let ub = bb.length;
          for (; ub > 0 && "" === bb[ub - 1].trim();) ub--;
          return bb.slice(0, ub)
        }

        function cb(bb) {
          var ub;
          const hb = Tb(bb);
          if (null === (ub = hb.at(-1)) || void 0 === ub || !ub.trimEnd().endsWith("*/")) return {
            lines: hb,
            doc: ""
          };
          const Bb = hb.findLastIndex((bb => bb.startsWith("/**")));
          return -1 === Bb ? {
            lines: hb,
            doc: ""
          } : {
            lines: Tb(hb.slice(0, Bb)),
            doc: hb.slice(Bb).join("\n")
          }
        }

        function Qb(bb) {
          var ub;
          const hb = bb.split("\n"),
            Bb = hb.flatMap(((bb, ub) => Fb.test(bb) ? [ub] : []));
          let Ob = cb(hb.slice(0, null !== (ub = Bb[0]) && void 0 !== ub ? ub : hb.length)).doc;
          return Bb.map(((bb, ub) => {
            var Gb;
            const Ub = cb(hb.slice(bb, null !== (Gb = Bb[ub + 1]) && void 0 !== Gb ? Gb : hb.length)),
              Lb = {
                name: hb[bb].match(Fb)[1],
                doc: Ob,
                lines: Ub.lines
              };
            return Ob = Ub.doc, Lb
          }))
        }

        function Rb(bb) {
          var ub;
          const hb = bb.match(/^readonly \[([\s\S]*)\]$/);
          return hb ? null !== (ub = hb[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== ub ? ub : [] : null
        }

        function bu(bb) {
          if (!bb.startsWith("{") || !bb.endsWith("}")) return null;
          const ub = {
              keys: [],
              values: []
            },
            hb = bb => {
              const hb = bb.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              hb && (ub.keys.push(hb[1].startsWith('"') ? hb[1] : `"${hb[1]}"`), ub.values.push(hb[2].trim()))
            };
          let Bb = 0,
            Ob = "";
          for (const Gb of bb.slice(1, -1)) "{[(".includes(Gb) ? Bb++ : "}])".includes(Gb) && Bb--, ";" === Gb && 0 === Bb ? (hb(Ob), Ob = "") : Ob += Gb;
          return hb(Ob), ub
        }

        function uu(bb) {
          return bb.length > kb ? `\n\t| ${bb.join("\n\t| ")}` : bb.join(" | ")
        }

        function hu(bb, ub) {
          const hb = function(bb, ub) {
            return bb.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((bb, hb) => {
              var Bb;
              const Ob = null === (Bb = ub.get(hb)) || void 0 === Bb ? void 0 : Bb.object;
              return Ob ? uu(Ob.values) : bb
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((bb, hb) => {
              var Bb, Ob;
              const Gb = null === (Bb = ub.get(hb)) || void 0 === Bb || null === (Ob = Bb.object) || void 0 === Ob ? void 0 : Ob.values.map(Rb);
              return null !== Gb && void 0 !== Gb && Gb.every((bb => null !== bb)) ? uu([...new Set(Gb.flat())]) : bb
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((bb, hb) => {
              var Bb;
              const Ob = null === (Bb = ub.get(hb)) || void 0 === Bb ? void 0 : Bb.members;
              return Ob ? uu(Ob) : bb
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((bb, hb) => {
              var Bb;
              const Ob = null === (Bb = ub.get(hb)) || void 0 === Bb ? void 0 : Bb.object;
              return Ob ? uu(Ob.keys) : bb
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((bb, hb) => {
              var Bb, Ob;
              return null !== (Bb = null === (Ob = ub.get(hb)) || void 0 === Ob ? void 0 : Ob.text) && void 0 !== Bb ? Bb : bb
            }))
          }(bb.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), ub);
          return [bb.doc, hb].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Bu(bb) {
          const ub = Qb(bb),
            hb = function(bb) {
              const ub = new Map,
                hb = bb.find((bb => "_TypeOf" === bb.name));
              let Bb = null;
              const Ob = () => {
                if (Bb) {
                  const bb = Bb.lines.join("\n");
                  ub.set(Bb.name, {
                    text: bb,
                    members: Rb(bb),
                    object: bu(bb)
                  })
                }
              };
              for (const Gb of hb.lines.slice(1, -1)) {
                const bb = Gb.match(/^\t([\w$]+): (.+)$/);
                bb ? (Ob(), Bb = {
                  name: bb[1],
                  lines: [bb[2]]
                }) : Bb && Bb.lines.push(Gb.replace(/^\t/, ""))
              }
              return Ob(), ub
            }(ub),
            Bb = new Map;
          for (const Ob of ub) fb.has(Ob.name) || Bb.has(Ob.name) || Bb.set(Ob.name, hu(Ob, hb));
          return Bb
        }
        let Ou, Gu, Uu;

        function Lu() {
          return Gu ??= function(bb) {
            const ub = Qb(bb).find((bb => "GameApi" === bb.name)),
              hb = new Map,
              Bb = ub.lines;
            for (let Gb = 0; Gb < Bb.length; Gb++) {
              var Ob;
              if (!Bb[Gb].trimStart().startsWith("/**")) continue;
              const bb = Gb;
              for (; Gb < Bb.length && !Bb[Gb].includes("*/");) Gb++;
              const ub = null === (Ob = Bb[Gb + 1]) || void 0 === Ob ? void 0 : Ob.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!ub) continue;
              let Ub = null;
              const Lb = [];
              let Yb = "description",
                Sb = !1;
              for (const hb of Bb.slice(bb, Gb + 1).join("\n").split("\n").map((bb => bb.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const bb = hb.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                bb ? (Ub = bb[1].trim(), Yb = "deprecation") : hb.startsWith("@") ? (Yb = "otherTag", Sb = !0) : "" === hb.trim() ? Sb || (Yb = "description", Lb.push(hb)) : "deprecation" !== Yb || /^[A-Z]/.test(hb.trim()) ? "otherTag" !== Yb && (Yb = "description", Lb.push(hb)) : Ub = `${Ub} ${hb.trim()}`.trim()
              }
              hb.set(ub[1], {
                deprecation: Ub,
                description: Lb.join("\n").trim()
              })
            }
            return hb
          }(Vb.default), Gu
        }

        function Yu() {
          if (!Uu) {
            Uu = new Map;
            for (const bb of Nb) {
              const ub = (0, jb.v)(Ib(bb)).flatMap((bb => bb.blocks));
              for (const bb of (0, jb.j)(ub))
                if ("ts" === bb.lang || "typescript" === bb.lang)
                  for (const [ub, hb] of xb(bb.code)) Uu.set(ub, hb)
            }
            for (const [bb, ub] of(Ou ??= Bu(Vb.default), Ou)) Uu.has(bb) || Uu.set(bb, ub)
          }
          return Uu
        }
        const Su = {
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
        let au;

        function Hu() {
          if (!au) {
            au = new Map;
            for (const bb of Nb)
              if (zb(bb.layout))
                for (const ub of Ib(bb).sections) au.has(ub.heading.text) || au.set(ub.heading.text, {
                  pageId: bb.id,
                  anchor: ub.heading.anchor
                })
          }
          return au
        }

        function wu(bb) {
          const ub = bb.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return ub ? Hu().get(ub[1]) : void 0
        }
        const Zu = (0, Bb.createContext)("/docs"),
          Xu = (0, Bb.createContext)(null),
          pu = (0, Bb.createContext)(!1),
          ou = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function Au(bb) {
          const ub = bb.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return ub ? ub[1] : null
        }

        function lu(bb) {
          let {
            colour: ub
          } = bb;
          return (0, Xb.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: ub
            },
            "aria-hidden": "true"
          })
        }

        function Ku(bb) {
          const ub = [];
          let hb = 0;
          for (const Bb of bb.matchAll(ou)) ub.push(bb.slice(hb, Bb.index), (0, Xb.jsx)(lu, {
            colour: Bb[0]
          }), Bb[0]), hb = Bb.index + Bb[0].length;
          return ub.push(bb.slice(hb)), ub
        }

        function Wu(bb) {
          let {
            href: ub,
            children: hb
          } = bb;
          const Ob = (0, Bb.useContext)(Zu);
          if (ub.startsWith("#")) {
            const bb = qb(ub);
            if (bb) return (0, Xb.jsx)(Ub.e, {
              to: yb(Ob, bb.page, bb.anchor),
              children: (0, Xb.jsx)(pu.Provider, {
                value: !0,
                children: hb
              })
            })
          }
          return (0, Xb.jsx)("a", {
            href: ub,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, Xb.jsx)(pu.Provider, {
              value: !0,
              children: hb
            })
          })
        }

        function Cu(bb) {
          let {
            code: ub
          } = bb;
          const hb = (0, Bb.useContext)(Zu);
          if ((0, Bb.useContext)(pu)) return (0, Xb.jsx)("code", {
            className: "DocsInlineCode",
            children: ub
          });
          if (Yu().has(ub)) return (0, Xb.jsx)(nu, {
            type: ub
          });
          const Ob = wu(ub);
          if (Ob) return (0, Xb.jsx)(Ub.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: yb(hb, Mb(Ob.pageId), Ob.anchor),
            children: ub
          });
          const Gb = Au(ub);
          return (0, Xb.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Gb && (0, Xb.jsx)(lu, {
              colour: Gb
            }), ub]
          })
        }

        function du(bb) {
          let {
            text: ub
          } = bb;
          const hb = [];
          let Ob = 0;
          for (const Bb of ub.matchAll(jb.f)) {
            Bb.index > Ob && hb.push(...Ku(ub.slice(Ob, Bb.index)));
            const [, bb, Gb, Ub, Lb, Yb] = Bb;
            bb ? hb.push((0, Xb.jsx)(Cu, {
              code: (0, jb.n)(bb, Gb)
            })) : Ub ? hb.push((0, Xb.jsx)("strong", {
              children: (0, Xb.jsx)(du, {
                text: Ub
              })
            })) : hb.push((0, Xb.jsx)(Wu, {
              href: Yb,
              children: (0, Xb.jsx)(du, {
                text: Lb
              })
            })), Ob = Bb.index + Bb[0].length
          }
          return Ob < ub.length && hb.push(...Ku(ub.slice(Ob))), (0, Xb.jsx)(Xb.Fragment, {
            children: hb.map(((bb, ub) => (0, Xb.jsx)(Bb.Fragment, {
              children: bb
            }, ub)))
          })
        }
        const ru = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          ju = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function nu(bb) {
          let {
            type: ub
          } = bb;
          const hb = Yu(),
            Ob = [];
          for (const Bb of ub.trim().matchAll(ru)) {
            const [bb, ub, Gb, Ub, Lb] = Bb;
            ub ? Ob.push((0, Xb.jsx)("span", {
              className: "DocsTypeString",
              children: bb
            })) : Gb && hb.has(Gb) ? Ob.push((0, Xb.jsx)(iu, {
              name: Gb,
              definition: hb.get(Gb)
            })) : Gb ? Ob.push((0, Xb.jsx)("span", {
              className: ju.has(Gb) ? "DocsTypeKeyword" : "DocsTypeName",
              children: bb
            })) : Ub ? Ob.push((0, Xb.jsx)("span", {
              className: "DocsTypeNumber",
              children: bb
            })) : Lb ? Ob.push(" ") : Ob.push((0, Xb.jsx)("span", {
              className: "DocsTypePunctuation",
              children: bb
            }))
          }
          return (0, Xb.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Ob.map(((bb, ub) => (0, Xb.jsx)(Bb.Fragment, {
              children: bb
            }, ub)))
          })
        }
        const Du = 480,
          xu = 6,
          zu = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let gu = 0;

        function iu(bb) {
          let {
            name: ub,
            definition: hb
          } = bb;
          const Ob = (0, Bb.useContext)(Zu),
            Gb = Su[ub],
            Lb = (0, Bb.useRef)(null),
            Yb = (0, Bb.useRef)(null),
            ab = (0, Bb.useRef)(null),
            [Hb, wb] = (0, Bb.useState)(!1),
            [Zb, pb] = (0, Bb.useState)(null),
            Ab = (0, Bb.useRef)(),
            lb = (0, Bb.useContext)(Xu),
            [Kb] = (0, Bb.useState)((() => "DocsTypePopover-" + gu++)),
            Wb = () => {
              clearTimeout(Ab.current), wb(!0)
            },
            Cb = () => {
              clearTimeout(Ab.current), Ab.current = setTimeout((() => {
                wb(!1)
              }), 120)
            };
          return (0, Bb.useEffect)((() => {
            if (!Hb) return;
            const bb = bb => {
              if ("Escape" === bb.key) {
                var ub, hb;
                if (null !== (ub = Yb.current) && void 0 !== ub && ub.contains(document.activeElement)) null === (hb = Lb.current) || void 0 === hb || hb.focus();
                wb(!1)
              }
            };
            return document.addEventListener("keydown", bb), () => {
              document.removeEventListener("keydown", bb)
            }
          }), [Hb]), (0, Bb.useEffect)((() => () => {
            clearTimeout(Ab.current)
          }), []), (0, Bb.useLayoutEffect)((() => {
            if (!Hb || !Lb.current || !Yb.current) return void pb(null);
            const bb = Lb.current.getBoundingClientRect(),
              ub = Yb.current.offsetHeight,
              hb = Math.min(Du, window.innerWidth - 32),
              Bb = Math.min(Math.max(16, bb.left), window.innerWidth - hb - 16),
              Ob = bb.bottom + xu + ub < window.innerHeight;
            pb({
              left: Bb,
              top: Ob ? bb.bottom + xu : Math.max(16, bb.top - xu - ub)
            })
          }), [Hb]), (0, Xb.jsxs)(Xb.Fragment, {
            children: [(0, Xb.jsx)("button", {
              type: "button",
              ref: Lb,
              className: "DocsTypeLink",
              "aria-expanded": Hb,
              "aria-describedby": Hb ? Kb : void 0,
              onMouseEnter: Wb,
              onMouseLeave: Cb,
              onFocus: Wb,
              onBlur: Cb,
              onKeyDown: bb => {
                "Tab" === bb.key && !bb.shiftKey && ab.current && (bb.preventDefault(), ab.current.focus())
              },
              onClick: Wb,
              children: ub
            }), Hb && (0, Sb.createPortal)((0, Xb.jsxs)("span", {
              ref: Yb,
              id: Kb,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Zb ? {
                left: Zb.left,
                top: Zb.top,
                maxWidth: Du
              } : {
                visibility: "hidden"
              },
              onMouseEnter: Wb,
              onMouseLeave: Cb,
              onFocus: Wb,
              onBlur: Cb,
              children: [(0, Xb.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, Xb.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: ub
                }), Gb && (0, Xb.jsxs)(Ub.e, {
                  ref: ab,
                  className: "DocsTypePopoverLink",
                  to: yb(Ob, Mb(Gb)),
                  onClick: () => {
                    wb(!1)
                  },
                  onKeyDown: bb => {
                    if ("Tab" === bb.key) {
                      var ub;
                      if (bb.preventDefault(), bb.shiftKey || !Lb.current || ! function(bb, ub) {
                          const hb = [...document.querySelectorAll(zu)],
                            Bb = hb.slice(hb.indexOf(bb) + 1).find((bb => bb.getClientRects().length > 0 && !(null !== ub && void 0 !== ub && ub.contains(bb))));
                          return null === Bb || void 0 === Bb || Bb.focus(), void 0 !== Bb
                        }(Lb.current, Yb.current)) null === (ub = Lb.current) || void 0 === ub || ub.focus();
                      bb.shiftKey || wb(!1)
                    }
                  },
                  children: [Mb(Gb).title, (0, Xb.jsx)(ob, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, Xb.jsx)(rb, {
                lang: "ts",
                code: hb,
                compact: !0
              })]
            }), null !== lb && void 0 !== lb ? lb : document.body)]
          })
        }
        var vu = hb(191),
          tu = hb(4531),
          Ju = hb(4535),
          eu = hb(4542);
        const Nu = {
          progressBar: {
            IB: 30,
            PB: .075,
            qB: 5,
            EB: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            yB: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            FB: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            fB: !0,
            scale: 3,
            rotation: 15,
            kB: !1
          },
          gravityBar: {
            IB: 30,
            cB: .25,
            QB: 3,
            RB: .8,
            gravity: 1,
            bO: 1.5,
            uO: 8,
            hO: 4,
            EB: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            OO: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            UO: 5,
            LO: 1200,
            YO: .15,
            SO: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var su = hb(298),
          Mu = hb(1881);

        function mu(bb) {
          return bb.startsWith("fa-")
        }
        const Iu = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Pu = {
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

        function qu(bb) {
          return "string" === typeof bb ? "text" : "entityName" in bb || "translationKey" in bb ? "other" : (0, su.Db)(bb) ? "progressBar" : (0, su.Bb)(bb) ? "keyBinding" : "icon" in bb ? "icon" : "str" in bb && "string" === typeof bb.str ? "text" : "other"
        }
        const Eu = [{
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
          yu = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...Eu],
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
                options: Mu.o
              },
              isRequired: !0
            }, ...Eu],
            other: []
          };

        function Vu(bb) {
          return "string" === typeof bb ? {
            str: bb
          } : bb
        }

        function Fu(bb, ub) {
          let hb = Vu(bb);
          for (const Bb of ub) hb = hb && "object" === typeof hb ? hb[Bb] : void 0;
          return hb
        }

        function fu(bb, ub, hb) {
          const Bb = (bb, Ob) => {
            var Gb;
            const Ub = ub[Ob],
              Lb = {
                ...bb
              };
            if (Ob === ub.length - 1) return void 0 === hb ? delete Lb[Ub] : Lb[Ub] = hb, Lb;
            const Yb = Bb(null !== (Gb = bb[Ub]) && void 0 !== Gb ? Gb : {}, Ob + 1);
            return 0 === Object.keys(Yb).length ? delete Lb[Ub] : Lb[Ub] = Yb, Lb
          };
          return function(bb) {
            const ub = Object.keys(bb);
            return "string" === typeof bb.str && 1 === ub.length ? bb.str : bb
          }(Bb(Vu(bb), 0))
        }

        function ku(bb, ub) {
          const hb = qu(bb),
            Bb = yu[hb].find((bb => bb.path.join(".") === ub.join("."))),
            Ob = null !== Bb && void 0 !== Bb && Bb.isRequired && "other" !== hb ? Fu(Pu[hb], ub) : void 0;
          return fu(bb, ub, Ob)
        }

        function Tu(bb) {
          switch (qu(bb)) {
            case "text":
              return String(Fu(bb, ["str"]));
            case "icon":
              return String(Fu(bb, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Fu(bb,["progress"])))}%`;
            case "keyBinding":
              return String(Fu(bb, ["action"]));
            case "other":
              return JSON.stringify(bb)
          }
        }
        const cu = /^[A-Za-z_$][\w$]*$/;

        function Qu(bb) {
          if (Array.isArray(bb)) return `[${bb.map(Qu).join(", ")}]`;
          if (bb && "object" === typeof bb) {
            const ub = Object.entries(bb).map((bb => {
              let [ub, hb] = bb;
              return `${cu.test(ub)?ub:JSON.stringify(ub)}: ${Qu(hb)}`
            }));
            return 0 === ub.length ? "{}" : `{ ${ub.join(", ")} }`
          }
          return JSON.stringify(bb)
        }

        function Ru(bb) {
          const ub = bb.map(Qu),
            hb = `[${ub.join(", ")}]`;
          return hb.length <= 60 ? hb : `[\n${ub.map((bb=>`    ${bb},`)).join("\n")}\n]`
        }
        const bh = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function uh(bb) {
          let ub = "";
          for (let Ob = 0; Ob < bb.length; Ob++) {
            const Gb = bb[Ob];
            if ("\\" === Gb) {
              var hb;
              const Bb = null !== (hb = bb[Ob + 1]) && void 0 !== hb ? hb : "";
              ub += "'" === Bb ? "'" : Gb + Bb, Ob++
            } else if ('"' === Gb) ub += '\\"';
            else {
              var Bb;
              ub += null !== (Bb = bh[Gb]) && void 0 !== Bb ? Bb : Gb
            }
          }
          return `"${ub}"`
        }

        function hh(bb) {
          if ("string" === typeof bb) return !0;
          if (!bb || "object" !== typeof bb || Array.isArray(bb)) return !1;
          const ub = bb;
          return "ProgressBar" === ub.type ? "number" === typeof ub.progress : "StyledKeyBinding" === ub.type ? Mu.o.includes(ub.action) : "string" === typeof ub.icon || "string" === typeof ub.str || "string" === typeof ub.entityName || "string" === typeof ub.translationKey
        }

        function Bh(bb) {
          let ub;
          try {
            ub = function(bb) {
              let ub = "",
                hb = "",
                Bb = 0;
              const Ob = () => {
                ub += hb.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), hb = ""
              };
              for (; Bb < bb.length;) {
                const Gb = bb.slice(Bb).search(/["'`]|\/\//);
                if (-1 === Gb) {
                  hb += bb.slice(Bb);
                  break
                }
                hb += bb.slice(Bb, Bb + Gb);
                const Ub = Bb + Gb,
                  Lb = bb[Ub];
                if ("/" === Lb) {
                  const ub = bb.indexOf("\n", Ub);
                  Bb = -1 === ub ? bb.length : ub;
                  continue
                }
                if (Ob(), "`" === Lb) throw new Error("Use quotes rather than template strings.");
                let Yb = Ub + 1;
                for (; Yb < bb.length && bb[Yb] !== Lb;) Yb += "\\" === bb[Yb] ? 2 : 1;
                if (Yb >= bb.length) throw new Error("A string is missing its closing quote.");
                const Sb = bb.slice(Ub + 1, Yb);
                ub += uh(Sb), Bb = Yb + 1
              }
              return Ob(), JSON.parse(ub)
            }(bb.trim())
          } catch (Bb) {
            return {
              parts: null,
              error: Bb instanceof SyntaxError ? "This isn't a valid array yet." : Bb.message
            }
          }
          if (!Array.isArray(ub)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const hb = ub.findIndex((bb => !hh(bb)));
          return -1 !== hb ? {
            parts: null,
            error: `Part ${hb+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: ub,
            error: null
          }
        }
        const Oh = 1 / vu.e.clientTicksPerSecond,
          Gh = 700,
          Uh = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Lh = {
            progressBar: Nu.progressBar.yB,
            timedClick: Nu.timedClick.icon,
            gravityBar: Nu.gravityBar.icon,
            precisionBar: Nu.precisionBar.icon,
            rhythmClick: Nu.rhythmClick.icon
          };

        function Yh(bb) {
          let {
            type: ub
          } = bb;
          const [hb, Ob] = (0, Bb.useState)("ready"), [Ub, Lb] = (0, Bb.useState)(1), [Yb, Sb] = (0, Bb.useState)(!0), ab = (0, Bb.useRef)(null), Hb = (0, Bb.useRef)(null), wb = (0, Bb.useRef)(null), Zb = (0, Bb.useRef)(new Set), pb = (0, Bb.useRef)(!1), Ab = Lh[ub], lb = (0, Bb.useMemo)((() => ({
            getState: () => {
              var bb, ub;
              return null !== (bb = null === (ub = wb.current) || void 0 === ub ? void 0 : ub.getState()) && void 0 !== bb ? bb : Uh
            },
            onFrame: bb => (Zb.current.add(bb), () => {
              Zb.current.delete(bb)
            })
          })), []);
          (0, Bb.useEffect)((() => {
            const bb = ab.current,
              ub = Hb.current;
            if (!bb || !ub) return;
            const hb = new ResizeObserver((() => {
              Lb(bb.clientWidth / Math.max(1, ub.offsetWidth))
            }));
            return hb.observe(bb), () => {
              hb.disconnect()
            }
          }), []), (0, Bb.useEffect)((() => {
            var bb;
            if ("playing" !== hb) return;
            let Bb = !1;
            const Gb = new eu.f[ub](Nu[ub], (bb => {
              Bb = !0, Sb(!1), Ob(bb ? "succeeded" : "failed")
            }), (() => {}));
            wb.current = Gb;
            let Ub = 0,
              Lb = performance.now(),
              Yb = requestAnimationFrame((function bb(ub) {
                for (Ub += Math.min(.25, (ub - Lb) / 1e3), Lb = ub; Ub >= Oh && !Bb;) Ub -= Oh, Gb.handleTick(Oh);
                for (const hb of Zb.current) hb();
                Bb || (Yb = requestAnimationFrame(bb))
              }));
            return null === (bb = ab.current) || void 0 === bb || bb.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Yb), Gb.tearDown(), wb.current = null, pb.current = !1
            }
          }), [hb, ub]), (0, Bb.useEffect)((() => {
            if (Yb) return;
            const bb = setTimeout((() => {
              Sb(!0)
            }), Gh);
            return () => {
              clearTimeout(bb)
            }
          }), [Yb]);
          const Kb = bb => {
            var ub;
            "playing" === hb && pb.current !== bb && (pb.current = bb, null === (ub = wb.current) || void 0 === ub || ub.handleMouseInput(bb))
          };
          return (0, Xb.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, Xb.jsxs)("div", {
              ref: ab,
              className: Gb()("DocsQteStage", {
                Playing: "playing" === hb
              }),
              tabIndex: "playing" === hb ? 0 : -1,
              role: "playing" === hb ? "button" : void 0,
              "aria-label": "playing" === hb ? `${ub} quick time event: click or press Space` : void 0,
              onPointerDown: bb => {
                0 === bb.button && Kb(!0)
              },
              onPointerUp: () => {
                Kb(!1)
              },
              onPointerLeave: () => {
                Kb(!1)
              },
              onPointerCancel: () => {
                Kb(!1)
              },
              onKeyDown: bb => {
                "playing" !== hb || " " !== bb.key && "Enter" !== bb.key || (bb.preventDefault(), Kb(!0))
              },
              onKeyUp: bb => {
                "playing" !== hb || " " !== bb.key && "Enter" !== bb.key || Kb(!1)
              },
              children: [(0, Xb.jsx)("div", {
                ref: Hb,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Ub})`
                },
                children: "playing" === hb && (0, Xb.jsx)(Ju.c.Provider, {
                  value: lb,
                  children: (0, Xb.jsx)(tu.b, {
                    qte: {
                      type: ub,
                      parameters: Nu[ub]
                    }
                  })
                })
              }), "playing" !== hb && (0, Xb.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== hb && (0, Xb.jsxs)("div", {
                  className: Gb()("DocsQteResult", "succeeded" === hb ? "Succeeded" : "Failed"),
                  children: [(0, Xb.jsx)(ob, {
                    name: "succeeded" === hb ? "check" : "cross",
                    isTinted: !0
                  }), (0, Xb.jsx)("span", {
                    children: "succeeded" === hb ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, Xb.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Yb,
                  onClick: () => {
                    Ob("playing")
                  },
                  children: [(0, Xb.jsx)(ob, {
                    name: "ready" === hb ? "play" : "replay"
                  }), (0, Xb.jsx)("span", {
                    children: "ready" === hb ? `Try ${ub}` : "Play again"
                  })]
                })]
              })]
            }), Ab && !mu(Ab) && (0, Xb.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, Xb.jsx)("code", {
                children: Ab
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Sh(bb) {
          let {
            level: ub,
            text: hb,
            anchor: Bb,
            className: Ob
          } = bb;
          const Ub = `h${Math.min(ub,6)}`;
          return (0, Xb.jsxs)(Ub, {
                id: Bb,
                className: Gb()("DocsHeading", Ob),
                children: [(0, Xb.jsx)(du, {
                      text: hb
                    }), (0, Xb.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Bb}`,
                        "aria-label": `Link to ${hb.replace(/`/g,"")}`,children:"#"})]})}function ah(bb){let{items:ub,ordered:hb}=bb;const Bb=hb?"ol":"ul";return(0,Xb.jsx)(Bb,{className:"DocsList",children:ub.map(((bb,ub)=>(0,Xb.jsxs)("li",{children:[(0,Xb.jsx)(du,{text:bb.text}),bb.children.length>0&&(0,Xb.jsx)(ah,{items:bb.children,ordered:hb})]},ub)))})}function Hh(bb){const ub=bb[0],hb="paragraph"===(null===ub||void 0===ub?void 0:ub.kind)?ub.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(hb)?"warning":/^\*\*(tip|prefer)/.test(hb)?"tip":"note"}function wh(bb){let{block:ub}=bb;switch(ub.kind){case"heading":return(0,Xb.jsx)(Sh,{level:ub.level,text:ub.text,anchor:ub.anchor});case"paragraph":return(0,Xb.jsx)("p",{children:(0,Xb.jsx)(du,{text:ub.text})});case"code":{const bb="ts"===ub.lang?function(bb){const ub=bb.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return ub&&Object.hasOwn(Nu,ub[1])?ub[1]:null}(ub.code):null;return(0,Xb.jsxs)(Xb.Fragment,{children:[(0,Xb.jsx)(rb,{code:ub.code,lang:ub.lang}),bb&&(0,Xb.jsx)(Yh,{type:bb})]})}case"table":return(0,Xb.jsx)("div",{className:"DocsTableScroll",children:(0,Xb.jsxs)("table",{className:"DocsTable",children:[(0,Xb.jsx)("thead",{children:(0,Xb.jsx)("tr",{children:ub.header.map(((bb,ub)=>(0,Xb.jsx)("th",{children:(0,Xb.jsx)(du,{text:bb})},ub)))})}),(0,Xb.jsx)("tbody",{children:ub.rows.map(((bb,ub)=>(0,Xb.jsx)("tr",{children:bb.map(((bb,ub)=>(0,Xb.jsx)("td",{children:(0,Xb.jsx)(du,{text:bb})},ub)))},ub)))})]})});case"list":return(0,Xb.jsx)(ah,{items:ub.items,ordered:ub.ordered});case"quote":return(0,Xb.jsx)("aside",{className:Gb()("DocsCallout",Hh(ub.blocks)),children:(0,Xb.jsx)(Zh,{blocks:ub.blocks})});case"rule":return(0,Xb.jsx)("hr",{className:"DocsRule"})}}function Zh(bb){let{blocks:ub}=bb;return(0,Xb.jsx)(Xb.Fragment,{children:ub.map(((bb,ub)=>(0,Xb.jsx)(wh,{block:bb},ub)))})}var Xh=hb(4519),ph=hb(4524);function oh(bb){return"blocks"===bb||"items"===bb}const Ah=new Map;function lh(bb){let ub=Ah.get(bb);return ub||(ub=function(bb){const ub={entries:[],legend:[],notes:[],examples:[]};let hb=!1;for(const Gb of bb.split(/\r?\n/).slice(1)){if(Gb.startsWith("#")){const bb=Gb.replace(/^# ?/,""),Bb=bb.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Bb?ub.legend.push({code:Bb[1],meaning:Bb[2],usage:Bb[3].trim()}):/^Examples:/.test(bb.trim())?hb=!0:hb&&bb.trim()?ub.examples.push(bb.trim()):bb.trim()&&!/^\s/.test(bb)&&ub.notes.push(bb.trim());continue}const bb=Gb.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Bb,Ob;bb&&ub.entries.push({name:bb[1],variants:null!==(Bb=null===(Ob=bb[2])||void 0===Ob?void 0:Ob.split(","))&&void 0!==Bb?Bb:[]})}return ub}("blocks"===bb?Xh:ph),Ah.set(bb,ub)),ub}function Kh(bb){let{className:ub,value:hb,placeholder:Bb,label:Ob,onChange:Gb,count:Ub,children:Lb}=bb;return(0,Xb.jsxs)("div",{className:ub,children:[(0,Xb.jsx)(ob,{name:"magnifying-glass"}),(0,Xb.jsx)("input",{type:"search",value:hb,placeholder:Bb,"aria-label":Ob,onChange:bb=>{Gb(bb.target.value)}}),Lb,Ub&&(0,Xb.jsxs)("span",{className:"DocsFilterCount",children:[Ub.visible," of ",Ub.total]})]})}var Wh=hb(966);function Ch(bb){const ub=bb.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return ub?ub[2]:null}function dh(bb){return"paragraph"===bb.kind&&""===bb.text.trim()}function rh(bb){const ub={name:bb.heading.text,description:[],params:[],returns:null};let hb="description";for(const Ob of bb.blocks)if(!dh(Ob))if("heading"===Ob.kind&&/^Parameters:?$/.test(Ob.text))hb="params";else if("heading"===Ob.kind&&/^Returns:?$/.test(Ob.text))hb="returns",ub.returns={type:"",description:[]};else if("params"!==hb||"table"!==Ob.kind){if("returns"===hb&&"paragraph"===Ob.kind&&""===ub.returns.type){const bb=Ch(Ob.text);if(null!==bb){ub.returns.type=bb.replaceAll("\\|","|");continue}}"returns"===hb?ub.returns.description.push(Ob):ub.description.push(Ob)}else for(const[bb,hb,Gb]of Ob.rows){var Bb;ub.params.push({name:bb,type:null!==(Bb=Ch(hb))&&void 0!==Bb?Bb:hb,description:null!==Gb&&void 0!==Gb?Gb:""})}return ub}const jh=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function nh(bb){return bb.filter((bb=>!dh(bb)))}const Dh=/^[\w][\w .'&!:()-]*$/,xh=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function zh(bb){var ub;if("code"===bb.kind&&"text"===bb.lang){const ub=bb.code.split("\n").map((bb=>bb.trim())).filter(Boolean);return ub.length>0&&ub.every((bb=>Dh.test(bb)))?ub.map((bb=>({name:bb}))):null}return"paragraph"===bb.kind&&xh.test(bb.text.trim())?[...bb.text.matchAll(/`([ ^ `]+)` / g)].flatMap((bb => bb[1].split(/,\s*/).map((bb => ({
                              name: bb.trim()
                            }))))): "table" === bb.kind && null !== (ub = bb.header[0]) && void 0 !== ub && ub.startsWith("Song") ? bb.rows.map((bb => {
                              let [ub, hb] = bb;
                              return {
                                name: ub.replace(/`/g, ""),
                                caption: hb
                              }
                            })) : null
                          }

                          function gh(bb) {
                            const ub = [];
                            for (const hb of bb) {
                              const bb = zh(hb),
                                Bb = ub.at(-1),
                                Ob = "table" === hb.kind;
                              bb ? "names" === (null === Bb || void 0 === Bb ? void 0 : Bb.kind) && Bb.isSongs === Ob ? Bb.names.push(...bb) : ub.push({
                                kind: "names",
                                names: bb,
                                isSongs: Ob
                              }) : ub.push({
                                kind: "block",
                                block: hb
                              })
                            }
                            return ub
                          }
                          const ih = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function vh(bb, ub) {
                            return `${ih[bb]}-${(0,jb.s)(ub)}`
                          }
                          const th = new WeakMap;

                          function Jh(bb, ub, hb) {
                            let Bb = th.get(ub);
                            if (!Bb) {
                              Bb = new Map;
                              const hb = new Set;
                              for (const Ob of (0, jb.v)(ub)) {
                                const ub = gh(nh(Ob.blocks)).map((ub => {
                                  if ("block" === ub.kind) return ub;
                                  return {
                                    kind: "names",
                                    names: ub.names.map((ub => {
                                      var Bb, Gb;
                                      const Ub = vh(bb, ub.name);
                                      let Lb = Ub;
                                      for (let bb = 2; hb.has(Lb); bb++) Lb = `${Ub}-${bb}`;
                                      return hb.add(Lb), {
                                        ...ub,
                                        anchor: Lb,
                                        heading: null !== (Bb = null === (Gb = Ob.heading) || void 0 === Gb ? void 0 : Gb.text) && void 0 !== Bb ? Bb : ""
                                      }
                                    })),
                                    isSongs: ub.isSongs
                                  }
                                }));
                                Bb.set(Ob.blocks, ub)
                              }
                              th.set(ub, Bb)
                            }
                            const Ob = Bb.get(hb);
                            if (!Ob) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Ob
                          }
                          const eh = "/textures/docs/skinPreviews",
                            Nh = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var sh = hb(4002),
                            Mh = hb(4013);

                          function mh(bb) {
                            return Object.hasOwn(sh.d, bb) ? sh.d[bb] : null
                          }
                          const Ih = {
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
                            blendMode: Mh.f.Standard
                          };

                          function Ph(bb, ub, hb) {
                            return ub + (hb - ub) * bb()
                          }

                          function qh(bb, ub, hb) {
                            return bb + (ub - bb) * hb
                          }

                          function Eh(bb) {
                            return bb.length > 0 && "timeFraction" in bb[0]
                          }

                          function yh(bb, ub) {
                            if (0 === bb.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Eh(bb.colorGradients)) {
                              const hb = bb.colorGradients,
                                {
                                  color: Bb
                                } = hb[Math.floor(ub() * hb.length) % hb.length];
                              return [{
                                at: 0,
                                colour: [Bb[0] / 255, Bb[1] / 255, Bb[2] / 255, 1]
                              }]
                            }
                            return [...bb.colorGradients].sort(((bb, ub) => bb.timeFraction - ub.timeFraction)).map((bb => {
                              var hb, Bb, Ob;
                              const Gb = bb.minColor,
                                Ub = null !== (hb = bb.maxColor) && void 0 !== hb ? hb : Gb,
                                Lb = ub(),
                                Yb = [qh(Gb[0], Ub[0], Lb) / 255, qh(Gb[1], Ub[1], Lb) / 255, qh(Gb[2], Ub[2], Lb) / 255, qh(null !== (Bb = Gb[3]) && void 0 !== Bb ? Bb : 1, null !== (Ob = Ub[3]) && void 0 !== Ob ? Ob : 1, Lb)];
                              return {
                                at: bb.timeFraction,
                                colour: Yb
                              }
                            }))
                          }

                          function Vh(bb, ub, hb, Bb) {
                            const Ob = Ph(Bb, bb.minEmitPower, bb.maxEmitPower),
                              Gb = ub => Ph(Bb, Math.min(bb.dir1[ub], bb.dir2[ub]), Math.max(bb.dir1[ub], bb.dir2[ub])) * Ob,
                              Ub = [...bb.velocityGradients].sort(((bb, ub) => bb.timeFraction - ub.timeFraction)).map((bb => ({
                                at: bb.timeFraction,
                                factor: Ph(Bb, bb.factor, bb.factor2)
                              })));
                            return {
                              pos: [Ph(Bb, ub[0], hb[0]), Ph(Bb, ub[1], hb[1]), Ph(Bb, ub[2], hb[2])],
                              dir: [Gb(0), Gb(1), Gb(2)],
                              age: 0,
                              life: Ph(Bb, bb.minLifeTime, bb.maxLifeTime),
                              size: Ph(Bb, bb.minSize, bb.maxSize),
                              colours: yh(bb, Bb),
                              velocityFactors: Ub
                            }
                          }

                          function Fh(bb, ub, hb, Bb) {
                            if (ub < bb[0].at) return hb(Math.min(1, bb.length - 1));
                            for (let Ob = 0; Ob < bb.length - 1; Ob++)
                              if (ub <= bb[Ob + 1].at) {
                                const Gb = bb[Ob + 1].at - bb[Ob].at;
                                return Bb(hb(Ob), hb(Ob + 1), Gb > 0 ? (ub - bb[Ob].at) / Gb : 1)
                              } return hb(bb.length - 1)
                          }

                          function fh(bb) {
                            return Fh(bb.colours, bb.age / bb.life, (ub => bb.colours[ub].colour), ((bb, ub, hb) => [qh(bb[0], ub[0], hb), qh(bb[1], ub[1], hb), qh(bb[2], ub[2], hb), qh(bb[3], ub[3], hb)]))
                          }

                          function kh(bb, ub, hb) {
                            if (bb.age += hb, bb.age >= bb.life) return !1;
                            const Bb = function(bb) {
                              return 0 === bb.velocityFactors.length ? 1 : Fh(bb.velocityFactors, bb.age / bb.life, (ub => bb.velocityFactors[ub].factor), qh)
                            }(bb) * hb;
                            for (let Gb = 0; Gb < 3; Gb++) {
                              var Ob;
                              bb.pos[Gb] += bb.dir[Gb] * Bb, bb.dir[Gb] += (null !== (Ob = ub[Gb]) && void 0 !== Ob ? Ob : 0) * hb
                            }
                            return !0
                          }

                          function Th(bb) {
                            return String(Math.round(1e6 * bb) / 1e6)
                          }

                          function ch(bb) {
                            return `[${bb.map(Th).join(", ")}]`
                          }

                          function Qh(bb, ub) {
                            const hb = `${ub}    `;
                            return `[\n${(Eh(bb)?bb.map((bb=>{const ub=[`${hb}    timeFraction: ${Th(bb.timeFraction)},`,`${hb}    minColor: ${ch(bb.minColor)},`];return bb.maxColor&&ub.push(`${hb}    maxColor: ${ch(bb.maxColor)},`),`${hb}{\n${ub.join("\n")}\n${hb}},`})):bb.map((bb=>`
                            $ {
                              hb
                            } {
                              color: $ {
                                ch(bb.color)
                              }
                            }, `))).join("\n")}\n${ub}]`
                          }
                          const Rh = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            bB = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const uB = .6;

                          function hB(bb, ub) {
                            return `${ub?"song":"sound"}:${bb}`
                          }
                          let BB = {
                              track: null,
                              volume: uB
                            },
                            OB = null,
                            GB = 0,
                            UB = 0;
                          const LB = new Set;

                          function YB(bb) {
                            BB = {
                              ...BB,
                              ...bb
                            }, LB.forEach((bb => {
                              bb()
                            }))
                          }

                          function SB(bb) {
                            BB.track && YB({
                              track: {
                                ...BB.track,
                                ...bb
                              }
                            })
                          }

                          function aB(bb) {
                            const [ub, hb] = (0, Bb.useState)((() => bb(BB))), Ob = (0, Bb.useRef)(bb);
                            return Ob.current = bb, (0, Bb.useEffect)((() => {
                              const bb = () => {
                                hb((() => Ob.current(BB)))
                              };
                              return LB.add(bb), bb(), () => {
                                LB.delete(bb)
                              }
                            }), []), ub
                          }

                          function HB() {
                            GB++;
                            const bb = OB;
                            OB = null, null === bb || void 0 === bb || bb.stop()
                          }

                          function wB(bb, ub) {
                            let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            HB();
                            const Ob = GB,
                              {
                                track: Gb
                              } = BB,
                              Ub = Gb && Gb.name === bb && Gb.isSong === ub ? Gb.duration : 0;
                            UB = Bb, YB({
                              track: {
                                name: bb,
                                isSong: ub,
                                status: "loading",
                                duration: Ub
                              }
                            }), Promise.all([hb.e(217), hb.e(241)]).then((() => hb(39254))).then((hb => {
                              let {
                                playDocsSound: Gb
                              } = hb;
                              Ob === GB && (OB = Gb(bb, ub, BB.volume, Bb, {
                                onPlay: bb => {
                                  Ob === GB && SB({
                                    status: "playing",
                                    duration: bb
                                  })
                                },
                                onEnd: bb => {
                                  var ub, hb;
                                  Ob === GB && (OB = null, bb ? YB({
                                    track: null
                                  }) : (UB = null !== (ub = null === (hb = BB.track) || void 0 === hb ? void 0 : hb.duration) && void 0 !== ub ? ub : 0, SB({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((ub => {
                              console.error(`Could not play docs sound ${bb}`, ub), Ob === GB && YB({
                                track: null
                              })
                            }))
                          }

                          function ZB() {
                            const {
                              track: bb
                            } = BB;
                            if (!bb) return;
                            if ("playing" === bb.status && OB) return UB = OB.iK(), OB.pause(), void SB({
                              status: "paused"
                            });
                            if ("loading" === bb.status) return HB(), void SB({
                              status: "paused"
                            });
                            if (OB) return void OB.resume();
                            const ub = bb.duration > 0 && UB >= bb.duration - .05;
                            wB(bb.name, bb.isSong, ub ? 0 : UB)
                          }

                          function XB() {
                            var bb;
                            return OB && "playing" === (null === (bb = BB.track) || void 0 === bb ? void 0 : bb.status) ? OB.iK() : UB
                          }

                          function pB(bb) {
                            var ub;
                            null === (ub = OB) || void 0 === ub || ub.setVolume(bb), YB({
                              volume: bb
                            })
                          }

                          function oB() {
                            HB(), UB = 0, YB({
                              track: null
                            })
                          }
                          const AB = (0, Bb.createContext)(null);
                          let lB = null;

                          function KB() {
                            const [bb, ub] = (0, Bb.useState)(null);
                            return (0, Bb.useEffect)((() => {
                              let bb = !1;
                              return lB ??= Promise.all([hb.e(70), hb.e(73), hb.e(72), hb.e(71), hb.e(197), hb.e(97), hb.e(221)]).then((() => hb(39251))), lB.then((hb => {
                                bb || ub(hb)
                              }), (bb => {
                                console.error("Could not load the docs gallery's textures", bb), lB = null
                              })), () => {
                                bb = !0
                              }
                            }), []), bb
                          }
                          const WB = 24,
                            CB = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function dB(bb, ub) {
                            const hb = "skins" === bb ? function(bb, ub) {
                              const hb = Nh.find((ub => bb.startsWith(ub.heading)));
                              return hb ? function(bb, ub) {
                                return `${bb}-${ub}`
                              }(hb.prefix, ub) : null
                            }(ub.heading, ub.name) : null;
                            return null === hb ? null : `${eh}/${hb}.webp`
                          }

                          function rB(bb) {
                            let {
                              kind: ub,
                              entry: hb,
                              assets: Ob,
                              renderedUrl: Ub
                            } = bb;
                            const {
                              name: Lb
                            } = hb, [Yb, Sb] = (0, Bb.useState)(!1);
                            if ("icons" === ub && mu(Lb)) return (0, Xb.jsx)(Wh.e, {
                              className: "DocsTileIcon",
                              name: Lb
                            });
                            let ab = null;
                            var Hb;
                            if ("icons" === ub) ab = null !== (Hb = null === Ob || void 0 === Ob ? void 0 : Ob.getIngameIconUrl(Lb)) && void 0 !== Hb ? Hb : null;
                            else if ("particles" === ub) {
                              var wb, Zb, pb;
                              ab = null !== (wb = null === Ob || void 0 === Ob ? void 0 : Ob.getParticleTextureUrl(null !== (Zb = null === (pb = mh(Lb)) || void 0 === pb ? void 0 : pb.texture) && void 0 !== Zb ? Zb : Lb)) && void 0 !== wb ? wb : null
                            } else "skins" === ub && (ab = null !== Ub && void 0 !== Ub ? Ub : CB.test(Lb) ? `/textures/charSkins/previews/${Lb}_preview.png` : null);
                            return !ab || Yb ? (0, Xb.jsx)(ob, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === ub ? "person" : "image"
                            }) : (0, Xb.jsx)("img", {
                              className: Gb()("DocsTileImage", {
                                Pixelated: "skins" !== ub
                              }),
                              src: ab,
                              srcSet: ab === Ub ? `${ab} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${ab}`), Sb(!0)
                              }
                            })
                          }

                          function jB(bb) {
                            let {
                              entry: ub,
                              isSong: hb
                            } = bb;
                            const Bb = aB((bb => {
                                let {
                                  track: Bb
                                } = bb;
                                return (null === Bb || void 0 === Bb ? void 0 : Bb.name) === ub.name && Bb.isSong === hb ? Bb.status : null
                              })),
                              Ob = null !== Bb && "paused" !== Bb;
                            return (0, Xb.jsxs)("button", {
                              type: "button",
                              id: ub.anchor,
                              className: Gb()("DocsSoundTile", {
                                Playing: Ob
                              }),
                              "data-docs-track": hB(ub.name, hb),
                              "aria-label": Ob ? `Pause ${ub.name}` : `Play ${ub.name}`,
                              onClick: () => {
                                null !== Bb ? ZB() : wB(ub.name, hb)
                              },
                              children: [(0, Xb.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, Xb.jsx)(ob, {
                                  name: Ob ? "pause" : "play"
                                })
                              }), (0, Xb.jsx)("code", {
                                className: "DocsSoundName",
                                children: ub.name
                              }), ub.caption && (0, Xb.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: ub.caption
                              })]
                            })
                          }

                          function nB(bb) {
                            let {
                              kind: ub,
                              names: hb,
                              isSongs: Ob
                            } = bb;
                            const Ub = KB(),
                              [Lb, Yb] = lb(),
                              Sb = !1 === (null === Lb || void 0 === Lb ? void 0 : Lb.failed) ? Lb.text : null,
                              ab = (0, Bb.useContext)(AB),
                              [Hb, wb] = (0, Bb.useState)(""),
                              Zb = Hb.trim().toLowerCase(),
                              pb = Zb ? hb.filter((bb => bb.name.toLowerCase().includes(Zb))) : hb;
                            return (0, Xb.jsxs)("div", {
                              className: "DocsGallery",
                              children: [hb.length > WB && (0, Xb.jsx)(Kh, {
                                className: "DocsGalleryFilter",
                                value: Hb,
                                placeholder: `Filter ${hb.length} names\u2026`,
                                label: "Filter names",
                                onChange: wb,
                                count: Zb ? {
                                  visible: pb.length,
                                  total: hb.length
                                } : null
                              }), (0, Xb.jsx)("div", {
                                className: Gb()("DocsGalleryGrid", `Kind-${ub}`, {
                                  Songs: Ob
                                }),
                                children: pb.map((bb => {
                                  if ("sounds" === ub) return (0, Xb.jsx)(jB, {
                                    entry: bb,
                                    isSong: Ob
                                  }, bb.anchor);
                                  if (ab && "particles" === ub && mh(bb.name)) return (0, Xb.jsxs)("button", {
                                    type: "button",
                                    id: bb.anchor,
                                    className: Gb()("DocsTile Previewable", {
                                      Copied: Sb === bb.name
                                    }),
                                    title: `Play "${bb.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      ab(bb.name), Yb(bb.name)
                                    },
                                    children: [(0, Xb.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, Xb.jsx)(rB, {
                                        kind: ub,
                                        entry: bb,
                                        assets: Ub,
                                        renderedUrl: null
                                      }), (0, Xb.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, Xb.jsx)(ob, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, Xb.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Sb === bb.name ? "Copied!" : bb.name
                                    })]
                                  }, bb.anchor);
                                  const hb = dB(ub, bb);
                                  return (0, Xb.jsxs)("button", {
                                    type: "button",
                                    id: bb.anchor,
                                    className: Gb()("DocsTile", {
                                      Copied: Sb === bb.name
                                    }),
                                    title: `Copy "${bb.name}"`,
                                    onClick: () => {
                                      Yb(bb.name)
                                    },
                                    children: [(0, Xb.jsx)("span", {
                                      className: Gb()("DocsTilePreview", {
                                        Rendered: null !== hb
                                      }),
                                      children: (0, Xb.jsx)(rB, {
                                        kind: ub,
                                        entry: bb,
                                        assets: Ub,
                                        renderedUrl: hb
                                      })
                                    }), (0, Xb.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Sb === bb.name ? "Copied!" : bb.name
                                    })]
                                  }, bb.anchor)
                                }))
                              })]
                            })
                          }

                          function DB(bb) {
                            let {
                              kind: ub,
                              content: hb,
                              blocks: Bb
                            } = bb;
                            return (0, Xb.jsx)(Xb.Fragment, {
                              children: Jh(ub, hb, Bb).map(((bb, hb) => "block" === bb.kind ? (0, Xb.jsx)(wh, {
                                block: bb.block
                              }, hb) : (0, Xb.jsx)(nB, {
                                kind: ub,
                                names: bb.names,
                                isSongs: bb.isSongs
                              }, hb)))
                            })
                          }
                          const xB = [{
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

                          function zB(bb) {
                            let {
                              cards: ub = xB,
                              label: hb = "Start here"
                            } = bb;
                            const Ob = (0, Bb.useContext)(Zu);
                            return (0, Xb.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": hb,
                              children: ub.map((bb => {
                                let {
                                  pageId: ub,
                                  countNoun: hb
                                } = bb;
                                const Bb = Mb(ub);
                                return (0, Xb.jsxs)(Ub.e, {
                                  to: yb(Ob, Bb),
                                  className: "DocsLandingCard",
                                  children: [(0, Xb.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, Xb.jsx)(ob, {
                                      name: Bb.icon
                                    })
                                  }), (0, Xb.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Bb.title
                                  }), (0, Xb.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Bb.summary
                                  }), hb && (0, Xb.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [Ib(Bb).sections.length, " ", hb]
                                  })]
                                }, ub)
                              }))
                            })
                          }
                          const gB = 240;

                          function iB(bb) {
                            let {
                              faces: ub
                            } = bb;
                            return (0, Xb.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, Xb.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${ub.top}")`
                                }
                              }), (0, Xb.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${ub.left}")`
                                }
                              }), (0, Xb.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${ub.right}")`
                                }
                              })]
                            })
                          }

                          function vB(bb) {
                            let {
                              src: ub
                            } = bb;
                            const [hb, Ob] = (0, Bb.useState)(!1);
                            return hb ? null : (0, Xb.jsx)("img", {
                              src: ub,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${ub}`), Ob(!0)
                              }
                            })
                          }

                          function tB(bb) {
                            let {
                              kind: ub
                            } = bb;
                            const hb = lh(ub),
                              Ob = KB(),
                              Ub = (0, Lb.x)(),
                              [Yb, Sb] = (0, Bb.useState)(""),
                              [ab, Hb] = (0, Bb.useState)(null),
                              [wb, Zb] = (0, Bb.useState)(gB),
                              [pb, Ab] = (0, Bb.useState)(null),
                              lb = (0, Bb.useRef)(null),
                              Wb = Yb.trim().toLowerCase();
                            (0, Bb.useEffect)((() => {
                              const bb = (0, jb.r)(Ub.hash),
                                Bb = hb.entries.find((hb => vh(ub, hb.name) === bb));
                              if (Bb) lb.current = Bb.name, Sb(Bb.name), Hb(null), Ab(Bb.name);
                              else if (null !== lb.current) {
                                const bb = lb.current;
                                lb.current = null, Sb((ub => ub === bb ? "" : ub)), Ab(null)
                              }
                            }), [hb, ub, Ub.hash, Ub.key]), (0, Bb.useEffect)((() => {
                              var bb;
                              null !== pb && (null === (bb = document.getElementById(vh(ub, pb))) || void 0 === bb || bb.scrollIntoView({
                                block: "center"
                              }))
                            }), [ub, pb]);
                            const Cb = hb.entries.filter((bb => (!Wb || bb.name.toLowerCase().includes(Wb)) && (!ab || bb.variants.includes(ab))));
                            return (0, Xb.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [hb.notes.length > 0 && (0, Xb.jsx)("div", {
                                className: "DocsProse",
                                children: hb.notes.map((bb => (0, Xb.jsx)("p", {
                                  children: bb
                                }, bb)))
                              }), hb.legend.length > 0 && (0, Xb.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, Xb.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, Xb.jsx)("thead", {
                                    children: (0, Xb.jsxs)("tr", {
                                      children: [(0, Xb.jsx)("th", {
                                        children: "Code"
                                      }), (0, Xb.jsx)("th", {
                                        children: "Variant"
                                      }), (0, Xb.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, Xb.jsx)("tbody", {
                                    children: hb.legend.map((bb => (0, Xb.jsxs)("tr", {
                                      children: [(0, Xb.jsx)("td", {
                                        children: (0, Xb.jsx)("button", {
                                          type: "button",
                                          className: Gb()("DocsVariantChip", {
                                            Active: ab === bb.code
                                          }),
                                          "aria-pressed": ab === bb.code,
                                          title: `Show only ${ub} with ${bb.meaning} variants`,
                                          onClick: () => {
                                            Hb(ab === bb.code ? null : bb.code)
                                          },
                                          children: bb.code
                                        })
                                      }), (0, Xb.jsx)("td", {
                                        children: bb.meaning
                                      }), (0, Xb.jsx)("td", {
                                        children: (0, Xb.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: bb.usage
                                        })
                                      })]
                                    }, bb.code)))
                                  })]
                                })
                              }), hb.examples.length > 0 && (0, Xb.jsx)(rb, {
                                lang: "text",
                                code: hb.examples.join("\n")
                              }), (0, Xb.jsx)(Kh, {
                                className: "DocsFilterBar",
                                value: Yb,
                                placeholder: `Search ${hb.entries.length} ${ub}\u2026`,
                                label: `Search ${ub}`,
                                onChange: bb => {
                                  Sb(bb), Zb(gB)
                                },
                                count: Wb || ab ? {
                                  visible: Cb.length,
                                  total: hb.entries.length
                                } : null,
                                children: ab && (0, Xb.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Hb(null)
                                  },
                                  children: [ab, " ", (0, Xb.jsx)(ob, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, Xb.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Cb.slice(0, wb).map((bb => {
                                  const hb = "blocks" === ub ? null === Ob || void 0 === Ob ? void 0 : Ob.getBlockFaces(bb.name) : null,
                                    Bb = Ob && !hb ? Ob.getItemTextureUrl(bb.name) : null;
                                  return (0, Xb.jsxs)("div", {
                                    id: vh(ub, bb.name),
                                    className: Gb()("DocsCatalogueTile", {
                                      Linked: bb.name === pb
                                    }),
                                    children: [(0, Xb.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [hb && (0, Xb.jsx)(iB, {
                                        faces: hb
                                      }), Bb && (0, Xb.jsx)(vB, {
                                        src: Bb
                                      })]
                                    }), (0, Xb.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: bb.name
                                    }), bb.variants.length > 0 && (0, Xb.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: bb.variants.map((bb => (0, Xb.jsx)("span", {
                                        children: bb
                                      }, bb)))
                                    }), (0, Xb.jsx)(Kb, {
                                      text: bb.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, bb.name)
                                }))
                              }), Cb.length > wb && (0, Xb.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Zb(Cb.length)
                                },
                                children: ["Show all ", Cb.length]
                              }), 0 === Cb.length && (0, Xb.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", ub, " match."]
                              })]
                            })
                          }
                          var JB = hb(4592),
                            eB = hb(1482);
                          const NB = .95 * JB.c;

                          function sB(bb) {
                            return /^\s*```/.test(bb)
                          }

                          function MB(bb, ub) {
                            const hb = [
                              []
                            ];
                            let Bb = !1;
                            for (const Ob of bb.split("\n")) !Bb && ub(Ob) && hb.at(-1).length > 0 && hb.push([]), sB(Ob) && (Bb = !Bb), hb.at(-1).push(Ob);
                            return hb.map((bb => bb.join("\n").trim())).filter(Boolean)
                          }

                          function mB(bb, ub) {
                            const hb = `${"#".repeat(ub)} `,
                              Bb = [];
                            let Ob = !1;
                            for (const Gb of bb.split("\n")) sB(Gb) ? Ob = !Ob : !Ob && Gb.startsWith(hb) && Bb.push(Gb.slice(hb.length).trim());
                            return Bb
                          }

                          function IB(bb) {
                            return bb.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class PB {
                            constructor(bb, ub) {
                              this.origin = ub, this.pages = void 0, this.partPaths = new Map;
                              const hb = bb.map((bb => {
                                const ub = ub => this.resolveLinks(bb, ub).length,
                                  hb = function(bb, ub) {
                                    const hb = bb.map((bb => ub(bb.markdown) + 2)),
                                      Bb = hb.reduce(((bb, ub) => bb + ub), 0),
                                      Ob = Bb / Math.ceil(Bb / NB),
                                      Gb = [];
                                    let Ub = 0;
                                    return bb.forEach(((bb, ub) => {
                                      const Bb = hb[ub];
                                      (0 === Gb.length || Ub + Bb > NB || Ub + Bb / 2 > Ob) && (Gb.push([]), Ub = 0), Gb.at(-1).push(bb), Ub += Bb
                                    })), Gb
                                  }(function(bb, ub) {
                                    return MB(bb, (bb => bb.startsWith("## "))).flatMap((bb => {
                                      var hb;
                                      const Bb = null !== (hb = mB(bb, 2)[0]) && void 0 !== hb ? hb : "";
                                      if (ub(bb) <= NB) return [{
                                        markdown: bb,
                                        section: Bb
                                      }];
                                      let Ob = !1,
                                        Gb = "";
                                      return MB(bb, (bb => {
                                        const ub = Ob && "" !== bb.trim();
                                        return Ob = "" === bb.trim(), ub
                                      })).map((bb => {
                                        var ub;
                                        const hb = mB(bb, 3),
                                          Ob = bb.startsWith("### ") ? hb[0] : Gb;
                                        return Gb = null !== (ub = hb.at(-1)) && void 0 !== ub ? ub : Gb, {
                                          markdown: bb,
                                          section: Bb || Ob
                                        }
                                      }))
                                    }))
                                  }(IB(bb), ub), ub);
                                return {
                                  page: bb,
                                  groups: hb.length > 1 ? hb : []
                                }
                              }));
                              for (const {
                                  page: Bb,
                                  groups: Ob
                                }
                                of hb) Ob.forEach(((bb, ub) => {
                                const hb = (0, JB.s)(Bb.slug, ub);
                                for (const Ob of bb.flatMap((bb => [...mB(bb.markdown, 2), ...mB(bb.markdown, 3)]))) {
                                  const bb = `${Bb.id}#${(0,jb.s)(Ob)}`;
                                  this.partPaths.has(bb) || this.partPaths.set(bb, hb)
                                }
                              }));
                              this.pages = hb.map((bb => {
                                let {
                                  page: ub,
                                  groups: hb
                                } = bb;
                                return {
                                  page: ub,
                                  path: (0, JB.q)(ub.slug),
                                  markdown: `# ${ub.title}\n\n${this.resolveLinks(ub,IB(ub))}\n`,
                                  parts: hb.map(((bb, Bb) => this.renderPart(ub, bb, Bb, hb.length)))
                                }
                              }))
                            }
                            url(bb) {
                              return `${this.origin}${bb}`
                            }
                            getPage(bb) {
                              return this.pages.find((ub => ub.page.id === bb))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((bb => (bb.parts.length > 0 ? bb.parts : [{
                                path: bb.path,
                                label: "",
                                markdown: bb.markdown
                              }]).filter((bb => bb.markdown.length > JB.c))))
                            }
                            markdownUrl(bb, ub) {
                              const hb = ub && this.partPaths.get(`${bb.id}#${ub}`) || (0, JB.q)(bb.slug);
                              return this.url(ub ? `${hb}#${ub}` : hb)
                            }
                            resolveLinks(bb, ub) {
                              return ub.replace(/\]\((#[^)]+)\)/g, ((ub, hb) => {
                                var Bb;
                                const Ob = null !== (Bb = qb(hb)) && void 0 !== Bb ? Bb : this.samePageTarget(bb, hb);
                                return Ob ? `](${this.markdownUrl(Ob.page,Ob.anchor)})` : ub
                              }))
                            }
                            samePageTarget(bb, ub) {
                              const hb = (0, jb.s)(ub.slice(1));
                              return Pb(bb, hb) ? {
                                page: bb,
                                anchor: hb
                              } : null
                            }
                            renderPart(bb, ub, hb, Bb) {
                              const Ob = function(bb) {
                                  const ub = bb.map((bb => bb.section)).filter(Boolean);
                                  if (0 === ub.length) return "";
                                  const hb = ub[0],
                                    Bb = ub.at(-1);
                                  return hb === Bb ? hb : `${hb} to ${Bb}`
                                }(ub),
                                Gb = ub.map((bb => bb.markdown)).join("\n\n"),
                                Ub = Ob ? `It covers ${Ob}. ` : "",
                                Lb = `Part ${hb+1} of ${Bb} of [${bb.title}](${this.url((0,JB.q)(bb.slug))}). ${Ub}[llms.txt](${this.url(JB.h)}) lists every part.`;
                              return {
                                path: (0, JB.s)(bb.slug, hb),
                                label: Ob,
                                markdown: `# ${bb.title}, part ${hb+1} of ${Bb}\n\n${Lb}\n\n${this.resolveLinks(bb,Gb)}\n`
                              }
                            }
                            llmsTxt(bb) {
                              const ub = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${qB(JB.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const hb of sb) {
                                ub.push("", `## ${hb.title}`, "");
                                for (const bb of hb.pageIds) {
                                  const hb = this.getPage(bb),
                                    {
                                      page: Bb,
                                      parts: Ob
                                    } = hb,
                                    Gb = `About ${qB(hb.markdown.length)} tokens${Ob.length>0?`, in ${Ob.length} parts:`:"."}`;
                                  ub.push(`- [${Bb.title}](${this.url(hb.path)}): ${Bb.summary} ${Gb}`), Ob.forEach(((bb, hb) => {
                                    ub.push(`  - [Part ${hb+1}${bb.label?`: ${bb.label}`:""}](${this.url(bb.path)})`)
                                  }))
                                }
                              }
                              return ub.push("", "## Optional", "", `- [Every page in one file](${this.url(JB.d)}): About ${qB(bb.length)} tokens, for a model with a large context window.`, ""), ub.join("\n")
                            }
                            llmsFullTxt() {
                              return sb.flatMap((bb => bb.pageIds.map((bb => this.getPage(bb).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const bb = this.llmsFullTxt(),
                                ub = this.llmsTxt(bb),
                                hb = new Map([
                                  [JB.m, ub],
                                  [JB.h, ub],
                                  [JB.d, bb]
                                ]);
                              for (const Bb of this.pages) {
                                hb.set(Bb.path, Bb.markdown);
                                for (const bb of Bb.parts) hb.set(bb.path, bb.markdown)
                              }
                              return hb
                            }
                          }

                          function qB(bb) {
                            return `${Math.max(1,Math.round(bb/4e3))}K`
                          }
                          let EB = null;

                          function yB() {
                            return EB ??= new PB(Nb, eB.d), EB
                          }
                          const VB = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function FB(bb) {
                            return yB().getPage(bb.id).parts.length > 0 ? `Read ${JB.i}, then the parts of the Bloxd Code API's ${bb.title} page it lists, so I can ask questions about it.` : `Read ${eB.d}${(0,JB.q)(bb.slug)} so I can ask questions about it. ${JB.i} lists every page of the Bloxd Code API docs.`
                          }

                          function fB(bb) {
                            let {
                              page: ub
                            } = bb;
                            const [hb, Bb] = lb();
                            return (0, Xb.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, Xb.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Bb(yB().getPage(ub.id).markdown)
                                },
                                children: [(0, Xb.jsx)(ob, {
                                  name: !1 === (null === hb || void 0 === hb ? void 0 : hb.failed) ? "check" : "copy"
                                }), (0, Xb.jsx)("span", {
                                  children: hb ? hb.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), VB.map((bb => (0, Xb.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${bb.url}${encodeURIComponent(FB(ub))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, Xb.jsx)(ob, {
                                  name: "external-link"
                                }), (0, Xb.jsxs)("span", {
                                  children: ["Open in ", bb.name]
                                })]
                              }, bb.name)))]
                            })
                          }

                          function kB(bb) {
                            return `#${[0,1,2].map((ub=>Math.round(Math.min(255,Math.max(0,bb[ub]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function TB(bb) {
                            return [parseInt(bb.slice(1, 3), 16), parseInt(bb.slice(3, 5), 16), parseInt(bb.slice(5, 7), 16)]
                          }

                          function cB(bb) {
                            let {
                              label: ub,
                              min: hb,
                              max: Bb,
                              step: Ob,
                              low: Gb,
                              high: Ub,
                              onChange: Lb
                            } = bb;
                            return (0, Xb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Xb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Xb.jsx)("span", {
                                  children: ub
                                }), (0, Xb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Gb === Ub ? Gb : `${Gb}\u2013${Ub}`
                                })]
                              }), (0, Xb.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, Xb.jsx)("input", {
                                  type: "range",
                                  min: hb,
                                  max: Bb,
                                  step: Ob,
                                  value: Math.min(Bb, Gb),
                                  "aria-label": `Minimum ${ub.toLowerCase()}`,
                                  onChange: bb => {
                                    const ub = Number(bb.target.value);
                                    Lb(ub, Math.max(ub, Ub))
                                  }
                                }), (0, Xb.jsx)("input", {
                                  type: "range",
                                  min: hb,
                                  max: Bb,
                                  step: Ob,
                                  value: Math.min(Bb, Ub),
                                  "aria-label": `Maximum ${ub.toLowerCase()}`,
                                  onChange: bb => {
                                    const ub = Number(bb.target.value);
                                    Lb(Math.min(ub, Gb), ub)
                                  }
                                })]
                              })]
                            })
                          }

                          function QB(bb) {
                            let {
                              label: ub,
                              min: hb,
                              max: Bb,
                              step: Ob,
                              value: Gb,
                              onChange: Ub,
                              format: Lb = String
                            } = bb;
                            return (0, Xb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Xb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Xb.jsx)("span", {
                                  children: ub
                                }), (0, Xb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Lb(Gb)
                                })]
                              }), (0, Xb.jsx)("input", {
                                type: "range",
                                min: hb,
                                max: Bb,
                                step: Ob,
                                value: Math.min(Bb, Math.max(hb, Gb)),
                                "aria-label": ub,
                                onChange: bb => {
                                  Ub(Number(bb.target.value))
                                }
                              })]
                            })
                          }

                          function RB(bb) {
                            let {
                              opts: ub,
                              onChange: hb
                            } = bb;
                            const Bb = ub.colorGradients;
                            if (!Eh(Bb)) return (0, Xb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Xb.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, Xb.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, Xb.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Bb.map(((bb, ub) => (0, Xb.jsx)("input", {
                                  type: "color",
                                  value: kB(bb.color),
                                  "aria-label": `Colour ${ub+1}`,
                                  onChange: bb => {
                                    const Ob = [...Bb];
                                    Ob[ub] = {
                                      color: TB(bb.target.value)
                                    }, hb(Ob)
                                  }
                                }, ub)))
                              })]
                            });
                            const Ob = (bb, ub) => {
                              const Ob = [...Bb];
                              Ob[bb] = ub, hb(Ob)
                            };
                            return (0, Xb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Xb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Xb.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, Xb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Bb.map(((bb, ub) => {
                                var hb;
                                const Bb = null !== (hb = bb.maxColor) && void 0 !== hb ? hb : bb.minColor;
                                return (0, Xb.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, Xb.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * bb.timeFraction), "%"]
                                  }), (0, Xb.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${kB(bb.minColor)}, ${kB(Bb)})`
                                    }
                                  }), (0, Xb.jsx)("input", {
                                    type: "color",
                                    value: kB(bb.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*bb.timeFraction)}%`,
                                    onChange: hb => {
                                      Ob(ub, {
                                        ...bb,
                                        minColor: [...TB(hb.target.value), bb.minColor[3]]
                                      })
                                    }
                                  }), (0, Xb.jsx)("input", {
                                    type: "color",
                                    value: kB(Bb),
                                    "aria-label": `Maximum colour at ${Math.round(100*bb.timeFraction)}%`,
                                    onChange: hb => {
                                      Ob(ub, {
                                        ...bb,
                                        maxColor: [...TB(hb.target.value), Bb[3]]
                                      })
                                    }
                                  })]
                                }, ub)
                              }))]
                            })
                          }
                          const bO = [-.5, -.5, -.5],
                            uO = [.5, .5, .5],
                            hO = [0, 1, 2, 3, 4, 5, 6, 7].map((bb => [1 & bb ? uO[0] : bO[0], 2 & bb ? uO[1] : bO[1], 4 & bb ? uO[2] : bO[2]]));class BO {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(bb, ub, hb, Bb) {
                              const Ob = Math.round(31 * ub),
                                Gb = Math.round(31 * hb),
                                Ub = Math.round(31 * Bb),
                                Lb = `${Ob}|${Gb}|${Ub}`;
                              let Yb = this.tints.get(bb);
                              (!Yb || Yb.size > 2e3) && (Yb = new Map, this.tints.set(bb, Yb));
                              let Sb = Yb.get(Lb);
                              if (Sb) return Sb;
                              Sb = document.createElement("canvas"), Sb.width = bb.naturalWidth || 16, Sb.height = bb.naturalHeight || 16;
                              const ab = Sb.getContext("2d");
                              return ab ? (ab.imageSmoothingEnabled = !1, ab.drawImage(bb, 0, 0, Sb.width, Sb.height), ab.globalCompositeOperation = "multiply", ab.fillStyle = `rgb(${Ob/31*255}, ${Gb/31*255}, ${Ub/31*255})`, ab.fillRect(0, 0, Sb.width, Sb.height), ab.globalCompositeOperation = "destination-in", ab.drawImage(bb, 0, 0, Sb.width, Sb.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Yb.set(Lb, Sb), Sb
                            }
                          }

                          function OO(bb) {
                            let {
                              opts: ub,
                              textureUrl: hb,
                              burst: Ob,
                              paused: Gb
                            } = bb;
                            const Ub = (0, Bb.useRef)(null),
                              Lb = (0, Bb.useRef)(ub);
                            Lb.current = ub;
                            const Yb = (0, Bb.useRef)(Gb);
                            Yb.current = Gb;
                            const Sb = (0, Bb.useRef)(null),
                              ab = (0, Bb.useRef)(null),
                              Hb = (0, Bb.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(bb) {
                                let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const hb = [-.5, -.5, -.5],
                                  Bb = [.5, .5, .5];
                                let Ob = .5;
                                for (let Gb = 0; Gb < 40; Gb++) {
                                  const Gb = Vh(bb, hb, Bb, ub),
                                    Ub = Math.max(Gb.life / 30, .001);
                                  for (; kh(Gb, bb.gravity, Ub);) Ob = Math.max(Ob, Math.hypot(Gb.pos[0], Gb.pos[1], Gb.pos[2]) + Gb.size / 2)
                                }
                                return Ob
                              }(ub)))), [ub]),
                              wb = (0, Bb.useRef)(Hb);
                            return wb.current = Hb, (0, Bb.useEffect)((() => {
                              if (Sb.current = null, !hb) return;
                              const bb = new Image;
                              let ub = !1;
                              return bb.onload = () => {
                                ub || (Sb.current = bb)
                              }, bb.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${hb}`)
                              }, bb.src = hb, () => {
                                ub = !0
                              }
                            }), [hb]), (0, Bb.useEffect)((() => {
                              var bb;
                              null === (bb = ab.current) || void 0 === bb || bb.call(ab)
                            }), [ub, Ob]), (0, Bb.useEffect)((() => {
                              const bb = Ub.current,
                                ub = null === bb || void 0 === bb ? void 0 : bb.getContext("2d");
                              if (!bb || !ub) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const hb = new BO;
                              let Bb = [],
                                Ob = 0,
                                Gb = -.7,
                                Hb = wb.current,
                                Zb = performance.now(),
                                Xb = 0,
                                pb = !0,
                                ob = null;
                              const Ab = () => {
                                const bb = Lb.current,
                                  ub = Math.min(400, Math.max(0, Math.ceil(bb.manualEmitCount)));
                                Bb = [];
                                for (let hb = 0; hb < ub; hb++) Bb.push(Vh(bb, bO, uO, Math.random));
                                Ob = 0
                              };
                              ab.current = Ab, Ab();
                              const lb = Ub => {
                                Xb = requestAnimationFrame(lb);
                                const ab = Math.min(.05, (Ub - Zb) / 1e3);
                                if (Zb = Ub, !pb) return;
                                const Kb = window.devicePixelRatio || 1,
                                  Wb = Math.round(bb.clientWidth * Kb),
                                  Cb = Math.round(bb.clientHeight * Kb);
                                if (0 === Wb || 0 === Cb) return;
                                bb.width === Wb && bb.height === Cb || (bb.width = Wb, bb.height = Cb);
                                const db = Lb.current;
                                null === ob && (Gb += .18 * ab), Hb += (wb.current - Hb) * Math.min(1, 4 * ab);
                                const rb = .6 * ab;
                                Bb = Bb.filter((bb => kh(bb, db.gravity, rb))), 0 !== Bb.length || Yb.current || (Ob += ab, Ob > .6 && Ab());
                                const jb = function(bb, ub, hb, Bb) {
                                  const Ob = 3.2 * Bb,
                                    Gb = .44 * Math.min(bb, ub) * Ob / Bb,
                                    Ub = Math.cos(hb),
                                    Lb = Math.sin(hb),
                                    Yb = Math.cos(.42),
                                    Sb = Math.sin(.42);
                                  return (hb, Bb, ab) => {
                                    const Hb = hb * Lb + ab * Ub,
                                      wb = Ob - (Bb * Sb + Hb * Yb);
                                    if (wb < .05) return null;
                                    const Zb = Gb / wb;
                                    return {
                                      x: bb / 2 + (hb * Ub - ab * Lb) * Zb,
                                      y: ub / 2 - (Bb * Yb - Hb * Sb) * Zb,
                                      scale: Zb,
                                      depth: wb
                                    }
                                  }
                                }(Wb, Cb, Gb, Hb);
                                ! function(bb, ub, hb, Bb, Ob) {
                                  const Gb = bb.createLinearGradient(0, 0, 0, hb);
                                  Gb.addColorStop(0, "#23262d"), Gb.addColorStop(1, "#16181c"), bb.globalCompositeOperation = "source-over", bb.globalAlpha = 1, bb.fillStyle = Gb, bb.fillRect(0, 0, ub, hb);
                                  const Ub = (ub, hb) => {
                                      const Ob = Bb(ub[0], ub[1], ub[2]),
                                        Gb = Bb(hb[0], hb[1], hb[2]);
                                      Ob && Gb && (bb.beginPath(), bb.moveTo(Ob.x, Ob.y), bb.lineTo(Gb.x, Gb.y), bb.stroke())
                                    },
                                    Lb = Math.ceil(Ob) + 1,
                                    Yb = bO[1];
                                  bb.lineWidth = 1, bb.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Sb = -Lb; Sb <= Lb; Sb++) Ub([Sb + .5, Yb, .5 - Lb], [Sb + .5, Yb, Lb + .5]), Ub([.5 - Lb, Yb, Sb + .5], [Lb + .5, Yb, Sb + .5]);
                                  bb.strokeStyle = "rgba(255, 255, 255, 0.28)", bb.setLineDash([4, 4]);
                                  for (const Sb of hO)
                                    for (const bb of hO) {
                                      const ub = [0, 1, 2].filter((ub => Sb[ub] !== bb[ub]));
                                      1 === ub.length && Sb[ub[0]] < bb[ub[0]] && Ub(Sb, bb)
                                    }
                                  bb.setLineDash([])
                                }(ub, Wb, Cb, jb, Hb);
                                const nb = Sb.current,
                                  Db = Bb.map((bb => ({
                                    particle: bb,
                                    at: jb(bb.pos[0], bb.pos[1], bb.pos[2])
                                  }))).filter((bb => null !== bb.at)).sort(((bb, ub) => ub.at.depth - bb.at.depth));
                                ub.imageSmoothingEnabled = !1;
                                for (const bb of function(bb) {
                                    switch (bb) {
                                      case Mh.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Mh.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Mh.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Mh.f.MultiplyAdd:
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
                                  }(db.blendMode)) {
                                  ub.globalCompositeOperation = bb.operation;
                                  for (const {
                                      particle: Bb,
                                      at: Ob
                                    }
                                    of Db) {
                                    const [Gb, Ub, Lb, Yb] = fh(Bb), Sb = Math.max(1, Bb.size * Ob.scale);
                                    ub.globalAlpha = bb.usesAlpha ? Math.min(1, Math.max(0, Yb)) : 1, nb ? ub.drawImage(hb.get(nb, Gb, Ub, Lb), Ob.x - Sb / 2, Ob.y - Sb / 2, Sb, Sb) : (ub.fillStyle = `rgb(${255*Gb}, ${255*Ub}, ${255*Lb})`, ub.fillRect(Ob.x - Sb / 2, Ob.y - Sb / 2, Sb, Sb))
                                  }
                                }
                                ub.globalCompositeOperation = "source-over", ub.globalAlpha = 1
                              };
                              Xb = requestAnimationFrame(lb);
                              const Kb = new IntersectionObserver((bb => {
                                let [ub] = bb;
                                pb = ub.isIntersecting
                              }));
                              Kb.observe(bb);
                              const Wb = ub => {
                                  ob = ub.clientX, bb.setPointerCapture(ub.pointerId)
                                },
                                Cb = bb => {
                                  null !== ob && (Gb += .01 * (bb.clientX - ob), ob = bb.clientX)
                                },
                                db = () => {
                                  ob = null
                                };
                              return bb.addEventListener("pointerdown", Wb), bb.addEventListener("pointermove", Cb), bb.addEventListener("pointerup", db), bb.addEventListener("pointercancel", db), () => {
                                cancelAnimationFrame(Xb), Kb.disconnect(), ab.current = null, bb.removeEventListener("pointerdown", Wb), bb.removeEventListener("pointermove", Cb), bb.removeEventListener("pointerup", db), bb.removeEventListener("pointercancel", db)
                              }
                            }), []), (0, Xb.jsx)("canvas", {
                              ref: Ub,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${ub.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const GO = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            UO = [{
                              mode: Mh.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Mh.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Mh.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Mh.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Mh.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            LO = (0, Bb.forwardRef)((function(bb, ub) {
                              var hb, Ob;
                              let {
                                textures: Ub
                              } = bb;
                              const Lb = KB(),
                                Yb = (0, Bb.useRef)(null),
                                [Sb, ab] = (0, Bb.useState)(Ih),
                                [Hb, wb] = (0, Bb.useState)("example"),
                                [Zb, pb] = (0, Bb.useState)(0),
                                [Ab, lb] = (0, Bb.useState)(!1),
                                Wb = bb => {
                                  const ub = "example" === bb ? Ih : mh(bb);
                                  ub && (ab(ub), wb(bb))
                                };
                              (0, Bb.useImperativeHandle)(ub, (() => ({
                                preview: bb => {
                                  var ub;
                                  Wb(bb), null === (ub = Yb.current) || void 0 === ub || ub.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Cb = bb => {
                                  ab({
                                    ...Sb,
                                    ...bb
                                  }), wb(null)
                                },
                                db = function(bb, ub) {
                                  if (null !== ub) return `${Rh}    presetId: "${ub}",\n${bB}\n})`;
                                  const hb = bb.velocityGradients.map((bb => `        {\n            timeFraction: ${Th(bb.timeFraction)},\n            factor: ${Th(bb.factor)},\n            factor2: ${Th(bb.factor2)},\n        },`)),
                                    Bb = [`    dir1: ${ch(bb.dir1)},`, `    dir2: ${ch(bb.dir2)},`, bB, `    texture: "${bb.texture}",`, `    minLifeTime: ${Th(bb.minLifeTime)},`, `    maxLifeTime: ${Th(bb.maxLifeTime)},`, `    minEmitPower: ${Th(bb.minEmitPower)},`, `    maxEmitPower: ${Th(bb.maxEmitPower)},`, `    minSize: ${Th(bb.minSize)},`, `    maxSize: ${Th(bb.maxSize)},`, `    manualEmitCount: ${Th(bb.manualEmitCount)},`, `    gravity: ${ch(bb.gravity)},`, `    colorGradients: ${Qh(bb.colorGradients,"    ")},`, `    velocityGradients: ${hb.length>0?`[\n${hb.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Th(bb.blendMode)},`];
                                  return void 0 !== bb.hideDist && Bb.push(`    hideDist: ${Th(bb.hideDist)},`), `${Rh}${Bb.join("\n")}\n})`
                                }(Sb, null === Hb || "example" === Hb ? null : Hb),
                                jb = Ub.includes(Sb.texture) ? Ub : [...Ub, Sb.texture];
                              return (0, Xb.jsxs)("section", {
                                ref: Yb,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, Xb.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, Xb.jsxs)("div", {
                                    children: [(0, Xb.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, Xb.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, Xb.jsx)(Kb, {
                                    text: db,
                                    label: "Copy code"
                                  })]
                                }), (0, Xb.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, Xb.jsx)("button", {
                                    type: "button",
                                    className: Gb()("DocsVariantChip", {
                                      Active: "example" === Hb
                                    }),
                                    onClick: () => {
                                      Wb("example")
                                    },
                                    children: "Example"
                                  }), GO.filter((bb => null !== mh(bb))).map((bb => (0, Xb.jsx)("button", {
                                    type: "button",
                                    className: Gb()("DocsVariantChip", {
                                      Active: Hb === bb
                                    }),
                                    onClick: () => {
                                      Wb(bb)
                                    },
                                    children: bb
                                  }, bb))), (0, Xb.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Hb && void 0 !== Hb ? Hb : "custom",
                                    "aria-label": "Preset",
                                    onChange: bb => {
                                      Wb(bb.target.value)
                                    },
                                    children: [(0, Xb.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Hb && (0, Xb.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), sh.b.map((bb => (0, Xb.jsx)("option", {
                                      value: bb,
                                      children: bb
                                    }, bb)))]
                                  })]
                                }), (0, Xb.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, Xb.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, Xb.jsx)(OO, {
                                      opts: Sb,
                                      textureUrl: null !== (hb = null === Lb || void 0 === Lb ? void 0 : Lb.getParticleTextureUrl(Sb.texture)) && void 0 !== hb ? hb : null,
                                      burst: Zb,
                                      paused: Ab
                                    }), (0, Xb.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, Xb.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          pb(Zb + 1)
                                        },
                                        children: [(0, Xb.jsx)(ob, {
                                          name: "replay"
                                        }), (0, Xb.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, Xb.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": Ab,
                                        onClick: () => {
                                          lb(!Ab)
                                        },
                                        children: [(0, Xb.jsx)(ob, {
                                          name: Ab ? "play" : "pause"
                                        }), (0, Xb.jsx)("span", {
                                          children: Ab ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, Xb.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, Xb.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Xb.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, Xb.jsx)("span", {
                                          children: "Texture"
                                        }), (0, Xb.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Sb.texture
                                        })]
                                      }), (0, Xb.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: jb.map((bb => {
                                          var ub;
                                          const hb = null !== (ub = null === Lb || void 0 === Lb ? void 0 : Lb.getParticleTextureUrl(bb)) && void 0 !== ub ? ub : null;
                                          return (0, Xb.jsx)("button", {
                                            type: "button",
                                            className: Gb()("DocsParticleTexture", {
                                              Active: Sb.texture === bb
                                            }),
                                            title: bb,
                                            "aria-label": bb,
                                            "aria-pressed": Sb.texture === bb,
                                            onClick: () => {
                                              Cb({
                                                texture: bb
                                              })
                                            },
                                            children: hb ? (0, Xb.jsx)("img", {
                                              src: hb,
                                              alt: ""
                                            }) : (0, Xb.jsx)(ob, {
                                              name: "image"
                                            })
                                          }, bb)
                                        }))
                                      })]
                                    }), (0, Xb.jsx)(QB, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Sb.manualEmitCount,
                                      onChange: bb => {
                                        Cb({
                                          manualEmitCount: bb
                                        })
                                      }
                                    }), (0, Xb.jsx)(cB, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Sb.minLifeTime,
                                      high: Sb.maxLifeTime,
                                      onChange: (bb, ub) => {
                                        Cb({
                                          minLifeTime: bb,
                                          maxLifeTime: ub
                                        })
                                      }
                                    }), (0, Xb.jsx)(cB, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Sb.minEmitPower,
                                      high: Sb.maxEmitPower,
                                      onChange: (bb, ub) => {
                                        Cb({
                                          minEmitPower: bb,
                                          maxEmitPower: ub
                                        })
                                      }
                                    }), (0, Xb.jsx)(cB, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Sb.minSize,
                                      high: Sb.maxSize,
                                      onChange: (bb, ub) => {
                                        Cb({
                                          minSize: bb,
                                          maxSize: ub
                                        })
                                      }
                                    }), (0, Xb.jsx)(QB, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Ob = Sb.gravity[1]) && void 0 !== Ob ? Ob : 0,
                                      onChange: bb => {
                                        var ub, hb;
                                        Cb({
                                          gravity: [null !== (ub = Sb.gravity[0]) && void 0 !== ub ? ub : 0, bb, null !== (hb = Sb.gravity[2]) && void 0 !== hb ? hb : 0]
                                        })
                                      }
                                    }), (0, Xb.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Xb.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, Xb.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, Xb.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Sb.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: bb => {
                                          Cb({
                                            blendMode: Number(bb.target.value)
                                          })
                                        },
                                        children: UO.map((bb => {
                                          let {
                                            mode: ub,
                                            label: hb
                                          } = bb;
                                          return (0, Xb.jsx)("option", {
                                            value: ub,
                                            children: hb
                                          }, ub)
                                        }))
                                      })]
                                    }), (0, Xb.jsx)(RB, {
                                      opts: Sb,
                                      onChange: bb => {
                                        Cb({
                                          colorGradients: bb
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, Xb.jsx)(rb, {
                                  code: db,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var YO = hb(4238),
                            SO = hb(1789);

                          function aO(bb, ub) {
                            return bb ? YO.e.includes(ub) ? bb.getIngameIconUrl(ub) : bb.getItemIconUrl(ub) : null
                          }

                          function HO(bb) {
                            var ub, hb, Bb;
                            let {
                              part: Ob,
                              assets: Ub
                            } = bb;
                            const Lb = aO(Ub, Ob.icon),
                              Yb = null !== (ub = null === (hb = Ob.style) || void 0 === hb ? void 0 : hb.fontSize) && void 0 !== ub ? ub : "1.8em",
                              Sb = (0, su.fc)(Ob.style);
                            return (0, Xb.jsxs)("span", {
                              className: Gb()("DocsBloxdTextIcon", {
                                Missing: !Lb
                              }),
                              style: {
                                width: Yb,
                                height: Yb,
                                opacity: null === (Bb = Ob.style) || void 0 === Bb ? void 0 : Bb.opacity
                              },
                              title: Lb ? void 0 : `No Bloxd icon, item or block is called "${Ob.icon}"`,
                              children: [Lb && Sb && (0, Xb.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Sb,
                                  maskImage: `url("${Lb}")`,
                                  WebkitMaskImage: `url("${Lb}")`
                                }
                              }), Lb ? (0, Xb.jsx)("img", {
                                src: Lb,
                                alt: "",
                                className: Gb()({
                                  Tinted: Sb
                                })
                              }) : (0, Xb.jsx)(ob, {
                                name: "image"
                              })]
                            })
                          }

                          function wO(bb) {
                            let {
                              parts: ub,
                              className: hb
                            } = bb;
                            const Bb = KB(),
                              Ob = [];
                            let Ub = [];
                            const Lb = bb => {
                              Ub.length > 0 && (Ob.push((0, Xb.jsx)(SO.c, {
                                text: Ub
                              }, `run-${bb}`)), Ub = [])
                            };
                            return ub.forEach(((bb, ub) => {
                              "icon" !== qu(bb) || mu(bb.icon) ? Ub.push(bb) : (Lb(ub), Ob.push((0, Xb.jsx)(HO, {
                                part: bb,
                                assets: Bb
                              }, `icon-${ub}`)))
                            })), Lb(ub.length), (0, Xb.jsx)("div", {
                              className: Gb()("DocsStyledTextPreview", hb),
                              children: Ob
                            })
                          }
                          const ZO = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let XO = null;

                          function pO(bb) {
                            if (XO ??= document.createElement("canvas").getContext("2d"), !XO) return "#000000";
                            XO.fillStyle = "#000000", XO.fillStyle = bb;
                            const ub = XO.fillStyle;
                            return ub.startsWith("#") ? ub : "#000000"
                          }

                          function oO(bb) {
                            let {
                              value: ub,
                              label: hb,
                              onChange: Bb
                            } = bb;
                            return (0, Xb.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, Xb.jsx)("input", {
                                type: "color",
                                value: pO(ub),
                                "aria-label": `${hb} picker`,
                                onChange: bb => {
                                  Bb(bb.target.value)
                                }
                              }), (0, Xb.jsx)("input", {
                                type: "text",
                                value: ub,
                                placeholder: "#ffb914 or gold",
                                "aria-label": hb,
                                spellCheck: !1,
                                onChange: bb => {
                                  Bb(bb.target.value)
                                }
                              })]
                            })
                          }

                          function AO(bb) {
                            let {
                              value: ub,
                              fontAwesomeIcons: hb,
                              onChange: Ob
                            } = bb;
                            const Ub = KB(),
                              [Lb, Yb] = (0, Bb.useState)(mu(ub) ? "fontAwesome" : "bloxd"),
                              [Sb, ab] = (0, Bb.useState)(""),
                              Hb = Sb.trim().toLowerCase(),
                              wb = "bloxd" === Lb ? YO.e : hb,
                              Zb = Hb ? wb.filter((bb => bb.toLowerCase().includes(Hb))) : wb;
                            return (0, Xb.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, Xb.jsx)("input", {
                                type: "text",
                                value: ub,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: bb => {
                                  Ob(bb.target.value)
                                }
                              }), (0, Xb.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, Xb.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((bb => (0, Xb.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": Lb === bb,
                                    className: Gb()("DocsVariantChip", {
                                      Active: Lb === bb
                                    }),
                                    onClick: () => {
                                      Yb(bb)
                                    },
                                    children: "bloxd" === bb ? `Bloxd icons (${YO.e.length})` : `Font Awesome (${hb.length})`
                                  }, bb))), (0, Xb.jsx)("input", {
                                    type: "search",
                                    value: Sb,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: bb => {
                                      ab(bb.target.value)
                                    }
                                  })
                                ]
                              }), (0, Xb.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Zb.map((bb => {
                                  const hb = "bloxd" === Lb ? aO(Ub, bb) : null;
                                  return (0, Xb.jsx)("button", {
                                    type: "button",
                                    title: bb,
                                    "aria-label": bb,
                                    "aria-pressed": bb === ub,
                                    className: Gb()("DocsIconPickerOption", {
                                      Active: bb === ub
                                    }),
                                    onClick: () => {
                                      Ob(bb)
                                    },
                                    children: "fontAwesome" === Lb ? (0, Xb.jsx)(Wh.e, {
                                      name: bb
                                    }) : hb ? (0, Xb.jsx)("img", {
                                      src: hb,
                                      alt: ""
                                    }) : (0, Xb.jsx)(ob, {
                                      name: "image"
                                    })
                                  }, bb)
                                })), 0 === Zb.length && (0, Xb.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Sb, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function lO(bb) {
                            let {
                              property: ub,
                              value: hb,
                              fontAwesomeIcons: Bb,
                              onChange: Ob
                            } = bb;
                            const {
                              field: Gb,
                              label: Ub
                            } = ub, Lb = bb => "" !== bb || ub.isRequired ? bb : void 0;
                            switch (Gb.kind) {
                              case "text":
                                return Gb.multiline ? (0, Xb.jsx)("textarea", {
                                  value: String(null !== hb && void 0 !== hb ? hb : ""),
                                  rows: 2,
                                  "aria-label": Ub,
                                  onChange: bb => {
                                    Ob(bb.target.value)
                                  }
                                }) : (0, Xb.jsx)("input", {
                                  type: "text",
                                  value: String(null !== hb && void 0 !== hb ? hb : ""),
                                  "aria-label": Ub,
                                  onChange: bb => {
                                    Ob(Lb(bb.target.value))
                                  }
                                });
                              case "size":
                                return (0, Xb.jsx)("input", {
                                  type: "text",
                                  value: String(null !== hb && void 0 !== hb ? hb : ""),
                                  placeholder: ub.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Ub,
                                  spellCheck: !1,
                                  onChange: bb => {
                                    Ob(Lb(bb.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, Xb.jsx)(oO, {
                                  value: String(null !== hb && void 0 !== hb ? hb : ""),
                                  label: Ub,
                                  onChange: bb => {
                                    Ob(Lb(bb))
                                  }
                                });
                              case "colours": {
                                const bb = Array.isArray(hb) ? hb : [],
                                  ub = bb => {
                                    Ob(bb.length > 0 ? bb : void 0)
                                  };
                                return (0, Xb.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [bb.map(((hb, Bb) => (0, Xb.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, Xb.jsx)(oO, {
                                      value: hb,
                                      label: `${Ub} ${Bb+1}`,
                                      onChange: hb => {
                                        ub(bb.map(((bb, ub) => ub === Bb ? hb : bb)))
                                      }
                                    }), (0, Xb.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Bb+1}`,
                                      onClick: () => {
                                        ub(bb.filter(((bb, ub) => ub !== Bb)))
                                      },
                                      children: (0, Xb.jsx)(ob, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Bb))), (0, Xb.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var hb;
                                      ub([...bb, null !== (hb = bb.at(-1)) && void 0 !== hb ? hb : "#ffffff"])
                                    },
                                    children: [(0, Xb.jsx)(ob, {
                                      name: "plus"
                                    }), 0 === bb.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Yb;
                                const bb = "number" === typeof hb ? hb : Number(null !== (Yb = ub.defaultText) && void 0 !== Yb ? Yb : 0);
                                return (0, Xb.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, Xb.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: bb,
                                    "aria-label": Ub,
                                    onChange: bb => {
                                      Ob(Number(bb.target.value))
                                    }
                                  }), (0, Xb.jsx)("output", {
                                    children: bb.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, Xb.jsxs)("select", {
                                  value: String(null !== hb && void 0 !== hb ? hb : ""),
                                  "aria-label": Ub,
                                  onChange: bb => {
                                    Ob(Lb(bb.target.value))
                                  },
                                  children: [!ub.isRequired && (0, Xb.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", ub.defaultText, ")"]
                                  }), Gb.options.map((bb => (0, Xb.jsx)("option", {
                                    value: bb,
                                    children: bb
                                  }, bb)))]
                                });
                              case "icon":
                                return (0, Xb.jsx)(AO, {
                                  value: String(null !== hb && void 0 !== hb ? hb : ""),
                                  fontAwesomeIcons: Bb,
                                  onChange: Ob
                                })
                            }
                          }

                          function KO(bb) {
                            let ub;
                            try {
                              ub = JSON.parse(bb)
                            } catch (hb) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${hb.message}`
                              }
                            }
                            return hh(ub) ? {
                              part: ub,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function WO(bb) {
                            let {
                              parts: ub,
                              index: hb,
                              fontAwesomeIcons: Ob,
                              onChange: Gb,
                              gJ: Ub,
                              onClose: Lb
                            } = bb;
                            const Yb = (0, Bb.useContext)(Xu),
                              ab = (0, Bb.useRef)(null),
                              Hb = ub[hb],
                              wb = qu(Hb),
                              [Zb, pb] = (0, Bb.useState)((() => JSON.stringify(Hb, null, 2))),
                              Ab = (0, Bb.useMemo)((() => "other" === wb ? KO(Zb).error : null), [wb, Zb]);
                            (0, Bb.useEffect)((() => {
                              var bb;
                              null === (bb = ab.current) || void 0 === bb || bb.focus()
                            }), []);
                            const lb = (0, Xb.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: bb => {
                                bb.target === bb.currentTarget && Lb()
                              },
                              children: (0, Xb.jsxs)("div", {
                                ref: ab,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${hb+1}: ${Iu[wb]}`,
                                tabIndex: -1,
                                onKeyDown: bb => {
                                  "Escape" === bb.key ? (bb.stopPropagation(), Lb()) : "Tab" === bb.key && ab.current && function(bb, ub) {
                                    const hb = Array.from(bb.querySelectorAll(zu)),
                                      Bb = hb[0],
                                      Ob = hb.at(-1);
                                    if (!Bb || !Ob) return;
                                    const Gb = document.activeElement;
                                    !ub.shiftKey || Gb !== Bb && Gb !== bb ? ub.shiftKey || Gb !== Ob || (ub.preventDefault(), Bb.focus()) : (ub.preventDefault(), Ob.focus())
                                  }(ab.current, bb)
                                },
                                children: [(0, Xb.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, Xb.jsxs)("div", {
                                    children: [(0, Xb.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", hb + 1]
                                    }), (0, Xb.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: Iu[wb]
                                    })]
                                  }), (0, Xb.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: Lb,
                                    children: (0, Xb.jsx)(ob, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, Xb.jsx)(wO, {
                                  parts: ub,
                                  className: "DocsTextDialogPreview"
                                }), (0, Xb.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === wb ? (0, Xb.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, Xb.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, Xb.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Zb,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: bb => {
                                        pb(bb.target.value);
                                        const ub = KO(bb.target.value);
                                        null !== ub.part && Gb(ub.part)
                                      }
                                    }), Ab && (0, Xb.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: Ab
                                    })]
                                  }) : yu[wb].map((bb => {
                                    const ub = Fu(Hb, bb.path),
                                      hb = bb.isRequired ? JSON.stringify(ku(Hb, bb.path)) === JSON.stringify(Hb) : void 0 === ub;
                                    return (0, Xb.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, Xb.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, Xb.jsx)("span", {
                                          children: bb.label
                                        }), (0, Xb.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: hb,
                                          "aria-label": `Reset ${bb.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Gb(ku(Hb, bb.path))
                                          },
                                          children: [(0, Xb.jsx)(ob, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, Xb.jsx)(lO, {
                                        property: bb,
                                        value: ub,
                                        fontAwesomeIcons: Ob,
                                        onChange: ub => {
                                          Gb(fu(Hb, bb.path, ub))
                                        }
                                      }), !bb.isRequired && (0, Xb.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", bb.defaultText]
                                      })]
                                    }, bb.path.join("."))
                                  }))
                                }), (0, Xb.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, Xb.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Ub,
                                    children: [(0, Xb.jsx)(ob, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, Xb.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: Lb,
                                    children: "Done"
                                  })]
                                }), (0, Xb.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: ZO.map((bb => (0, Xb.jsx)("option", {
                                    value: bb
                                  }, bb)))
                                })]
                              })
                            });
                            return Yb ? (0, Sb.createPortal)(lb, Yb) : lb
                          }
                          const CO = [{
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
                            dO = Object.keys(Pu);

                          function rO(bb) {
                            let {
                              fontAwesomeIcons: ub
                            } = bb;
                            const [hb, Ob] = (0, Bb.useState)(CO[0].parts), [Ub, Lb] = (0, Bb.useState)((() => Ru(CO[0].parts))), [Yb, Sb] = (0, Bb.useState)(null), [ab, Hb] = (0, Bb.useState)(!1), [wb, Zb] = (0, Bb.useState)(null), [pb, Ab] = (0, Bb.useState)(!1), [lb, Kb] = (0, Bb.useState)(null), Wb = (0, Bb.useRef)(null), Cb = Ru(hb);
                            (0, Bb.useLayoutEffect)((() => {
                              var bb;
                              if (!lb) return;
                              const ub = bb => {
                                  var ub;
                                  return null === (ub = Wb.current) || void 0 === ub ? void 0 : ub.querySelector(`[data-focus-key="${bb}"]`)
                                },
                                hb = ub(lb.key);
                              null === (bb = hb && !hb.disabled ? hb : ub(lb.fallback)) || void 0 === bb || bb.focus(), Kb(null)
                            }), [lb]);
                            const db = bb => {
                                Ob(bb), Lb(Ru(bb)), Sb(null)
                              },
                              jb = bb => {
                                db(hb.filter(((ub, hb) => hb !== bb))), Kb({
                                  key: `edit-${Math.min(bb,hb.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              nb = (bb, ub) => {
                                const Bb = [...hb],
                                  [Ob] = Bb.splice(bb, 1);
                                Bb.splice(bb + ub, 0, Ob), db(Bb);
                                Kb({
                                  key: `${ub<0?"up":"down"}-${bb+ub}`,
                                  fallback: `edit-${bb+ub}`
                                })
                              };
                            return (0, Xb.jsxs)("section", {
                              ref: Wb,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, Xb.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, Xb.jsxs)("div", {
                                  children: [(0, Xb.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, Xb.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, Xb.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: CO.map((bb => (0, Xb.jsx)("button", {
                                  type: "button",
                                  className: Gb()("DocsVariantChip", {
                                    Active: Cb === Ru(bb.parts)
                                  }),
                                  onClick: () => {
                                    db(bb.parts)
                                  },
                                  children: bb.label
                                }, bb.label)))
                              }), (0, Xb.jsx)(wO, {
                                parts: hb,
                                className: "DocsTextEditorPreview"
                              }), (0, Xb.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, Xb.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Xb.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, Xb.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [hb.map(((bb, ub) => {
                                      const Bb = qu(bb);
                                      return (0, Xb.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, Xb.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${ub}`,
                                          "aria-label": `Edit part ${ub+1}, ${Iu[Bb]}`,
                                          onClick: () => {
                                            Zb(ub)
                                          },
                                          children: [(0, Xb.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: Iu[Bb]
                                          }), (0, Xb.jsx)(wO, {
                                            parts: [bb],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Bb && (0, Xb.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Tu(bb)
                                          })]
                                        }), (0, Xb.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, Xb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${ub+1} up`,
                                            "data-focus-key": `up-${ub}`,
                                            disabled: 0 === ub,
                                            onClick: () => {
                                              nb(ub, -1)
                                            },
                                            children: (0, Xb.jsx)(ob, {
                                              name: "chevron-up"
                                            })
                                          }), (0, Xb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${ub+1} down`,
                                            "data-focus-key": `down-${ub}`,
                                            disabled: ub === hb.length - 1,
                                            onClick: () => {
                                              nb(ub, 1)
                                            },
                                            children: (0, Xb.jsx)(ob, {
                                              name: "chevron-down"
                                            })
                                          }), (0, Xb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${ub+1}`,
                                            onClick: () => {
                                              jb(ub)
                                            },
                                            children: (0, Xb.jsx)(ob, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, ub)
                                    })), 0 === hb.length && (0, Xb.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, Xb.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: bb => {
                                      "Escape" === bb.key && pb && (bb.stopPropagation(), Ab(!1), Kb({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, Xb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": pb,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        Ab(!pb)
                                      },
                                      children: [(0, Xb.jsx)(ob, {
                                        name: "plus"
                                      }), "Add a part", (0, Xb.jsx)(ob, {
                                        name: pb ? "chevron-up" : "chevron-down"
                                      })]
                                    }), pb && (0, Xb.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: dO.map((bb => (0, Xb.jsx)("li", {
                                        children: (0, Xb.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (bb => {
                                              db([...hb, Pu[bb]]), Ab(!1), Zb(hb.length)
                                            })(bb)
                                          },
                                          children: Iu[bb]
                                        })
                                      }, bb)))
                                    })]
                                  })]
                                }), (0, Xb.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Xb.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, Xb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": ab,
                                      onClick: () => {
                                        Hb(!ab)
                                      },
                                      children: [(0, Xb.jsx)(ob, {
                                        name: ab ? "check" : "pencil"
                                      }), ab ? "Done" : "Edit"]
                                    })]
                                  }), ab ? (0, Xb.jsxs)(Xb.Fragment, {
                                    children: [(0, Xb.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Ub,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: bb => {
                                        Lb(bb.target.value);
                                        const ub = Bh(bb.target.value);
                                        Sb(ub.error), ub.parts && Ob(ub.parts)
                                      }
                                    }), Yb && (0, Xb.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Yb
                                    })]
                                  }) : (0, Xb.jsx)(rb, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Cb})`
                                  })]
                                })]
                              }), null !== wb && wb < hb.length && (0, Xb.jsx)(WO, {
                                parts: hb,
                                index: wb,
                                fontAwesomeIcons: ub,
                                onChange: bb => {
                                  ((bb, ub) => {
                                    db(hb.map(((hb, Bb) => Bb === bb ? ub : hb)))
                                  })(wb, bb)
                                },
                                gJ: () => {
                                  jb(wb), Zb(null)
                                },
                                onClose: () => {
                                  Zb(null), Kb({
                                    key: `edit-${wb}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var jO = hb(4617),
                            nO = hb(4598),
                            DO = hb(4611),
                            xO = hb(4620);
                          const zO = 40,
                            gO = 800,
                            iO = 150,
                            vO = 8e3,
                            tO = 2e3;

                          function JO(bb, ub) {
                            return 12 * Math.log2(ub / bb)
                          }

                          function eO(bb, ub) {
                            return Math.round(bb * 2 ** (ub / 12) * 10) / 10
                          }

                          function NO(bb) {
                            return `${bb} ms`
                          }

                          function sO(bb) {
                            return `${bb} st`
                          }
                          const MO = [{
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

                          function mO(bb) {
                            let {
                              synth: ub,
                              onChange: hb
                            } = bb;
                            const Bb = (0, jO.l)(ub);
                            return (0, Xb.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, Xb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Xb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, Xb.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, Xb.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, Xb.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, Xb.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: jO.h.map((bb => (0, Xb.jsx)("button", {
                                      type: "button",
                                      className: Gb()("DocsVariantChip", {
                                        Active: ub.waveform === bb
                                      }),
                                      "aria-pressed": ub.waveform === bb,
                                      onClick: () => {
                                        hb({
                                          waveform: bb
                                        })
                                      },
                                      children: bb
                                    }, bb)))
                                  })]
                                }), (0, Xb.jsx)(QB, {
                                  label: "Pitch",
                                  min: 0,
                                  max: JO(zO, gO),
                                  step: .1,
                                  value: JO(zO, ub.pitchHz),
                                  format: () => `${ub.pitchHz} Hz`,
                                  onChange: bb => {
                                    hb({
                                      pitchHz: eO(zO, bb)
                                    })
                                  }
                                }), (0, Xb.jsx)(QB, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: ub.syllableMs,
                                  format: NO,
                                  onChange: bb => {
                                    hb({
                                      syllableMs: bb
                                    })
                                  }
                                }), (0, Xb.jsx)(QB, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: ub.volume,
                                  onChange: bb => {
                                    hb({
                                      volume: bb
                                    })
                                  }
                                })]
                              }), (0, Xb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Xb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, Xb.jsx)(QB, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: ub.durationMs,
                                  format: NO,
                                  onChange: bb => {
                                    hb({
                                      durationMs: bb
                                    })
                                  }
                                }), (0, Xb.jsx)(QB, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Bb.durationMs,
                                  step: 1,
                                  value: Bb.attackMs,
                                  format: NO,
                                  onChange: bb => {
                                    hb({
                                      attackMs: bb
                                    })
                                  }
                                }), (0, Xb.jsx)(QB, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Bb.durationMs - Bb.attackMs,
                                  step: 1,
                                  value: Bb.releaseMs,
                                  format: NO,
                                  onChange: bb => {
                                    hb({
                                      releaseMs: bb
                                    })
                                  }
                                }), (0, Xb.jsx)(QB, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: ub.glideSemitones,
                                  format: sO,
                                  onChange: bb => {
                                    hb({
                                      glideSemitones: bb
                                    })
                                  }
                                }), (0, Xb.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, Xb.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== ub.lowpassHz,
                                    onChange: bb => {
                                      hb({
                                        lowpassHz: bb.target.checked ? tO : null
                                      })
                                    }
                                  }), (0, Xb.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== ub.lowpassHz && (0, Xb.jsx)(QB, {
                                  label: "Filter",
                                  min: 0,
                                  max: JO(iO, vO),
                                  step: .1,
                                  value: JO(iO, ub.lowpassHz),
                                  format: () => `${ub.lowpassHz} Hz`,
                                  onChange: bb => {
                                    hb({
                                      lowpassHz: eO(iO, bb)
                                    })
                                  }
                                })]
                              }), (0, Xb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Xb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), MO.map((bb => {
                                  let {
                                    key: Bb,
                                    label: Ob,
                                    max: Gb
                                  } = bb;
                                  return (0, Xb.jsx)(QB, {
                                    label: Ob,
                                    min: 0,
                                    max: Gb,
                                    step: .1,
                                    value: ub.intonation[Bb],
                                    format: sO,
                                    onChange: bb => {
                                      hb({
                                        intonation: {
                                          ...ub.intonation,
                                          [Bb]: bb
                                        }
                                      })
                                    }
                                  }, Bb)
                                }))]
                              })]
                            })
                          }
                          const IO = Object.keys(jO.i),
                            PO = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function qO(bb) {
                            var ub;
                            const hb = JSON.stringify((0, jO.l)(bb));
                            return null !== (ub = IO.find((bb => JSON.stringify((0, jO.l)(jO.i[bb])) === hb))) && void 0 !== ub ? ub : null
                          }

                          function EO(bb) {
                            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof bb || null === bb) return JSON.stringify(bb);
                            return `{\n${Object.entries(bb).map((bb=>{let[hb,Bb]=bb;return`${ub}    ${hb}: ${EO(Bb,`${ub}    `)},`})).join("\n")}\n${ub}}`
                          }

                          function yO(bb, ub, hb) {
                            const Bb = qO(bb),
                              Ob = [`    line: ${JSON.stringify(ub)},`];
                            return hb && Ob.push(`    speakerName: ${JSON.stringify(hb)},`), Ob.push("    voice,"), `const voice = ${Bb?JSON.stringify(Bb):EO((0,jO.l)(bb))}\n\napi.setClientOption(playerId, "dialogue", {\n${Ob.join("\n")}\n})`
                          }
                          const VO = 400,
                            FO = 90;
                          let fO = null;

                          function kO(bb, ub, hb) {
                            return fO ??= new AudioContext, fO.resume(), (0, xO.c)(fO, fO.destination, bb, ub, hb, (() => {}))
                          }

                          function TO() {
                            const [bb, ub] = (0, Bb.useState)(jO.i.regular), [hb, Ob] = (0, Bb.useState)(PO[0]), [Ub, Lb] = (0, Bb.useState)("Innkeeper"), [Yb, Sb] = (0, Bb.useState)(0), ab = aB((bb => bb.volume)), Hb = (0, Bb.useRef)(null), wb = (0, Bb.useRef)(0), Zb = (0, Bb.useRef)(0), pb = () => {
                              var bb;
                              null === (bb = Hb.current) || void 0 === bb || bb.call(Hb), Hb.current = null
                            };
                            (0, Bb.useEffect)((() => () => {
                              var bb;
                              null === (bb = Hb.current) || void 0 === bb || bb.call(Hb), window.clearTimeout(wb.current)
                            }), []);
                            const Ab = (0, Bb.useMemo)((() => ({
                                line: hb,
                                speakerName: Ub || void 0,
                                voice: bb
                              })), [hb, Ub, bb]),
                              lb = (0, Bb.useRef)(Ab);
                            lb.current = Ab;
                            const Wb = qO(bb),
                              Cb = bb => {
                                window.clearTimeout(wb.current), pb();
                                const {
                                  plan: ub,
                                  synth: hb
                                } = (0, DO.i)(bb);
                                hb && (Hb.current = kO(hb, ub.blips, ab)), Sb((bb => bb + 1))
                              },
                              db = yO(bb, hb, Ub);
                            return (0, Xb.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, Xb.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, Xb.jsxs)("div", {
                                  children: [(0, Xb.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, Xb.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, Xb.jsx)(Kb, {
                                  text: db,
                                  label: "Copy code"
                                })]
                              }), (0, Xb.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [IO.map((bb => (0, Xb.jsx)("button", {
                                  type: "button",
                                  className: Gb()("DocsVariantChip", {
                                    Active: Wb === bb
                                  }),
                                  "aria-pressed": Wb === bb,
                                  onClick: () => {
                                    (bb => {
                                      const hb = jO.i[bb];
                                      ub(hb), Cb({
                                        ...Ab,
                                        voice: hb
                                      })
                                    })(bb)
                                  },
                                  children: bb
                                }, bb))), !Wb && (0, Xb.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, Xb.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, Xb.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, Xb.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, Xb.jsx)(nO.c, {
                                      display: Ab
                                    }, Yb)
                                  }), (0, Xb.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: bb => {
                                      bb.preventDefault(), Cb(Ab)
                                    },
                                    children: [(0, Xb.jsx)("input", {
                                      value: hb,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: bb => {
                                        Ob(bb.target.value)
                                      }
                                    }), (0, Xb.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, Xb.jsx)(ob, {
                                        name: "play"
                                      }), (0, Xb.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, Xb.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: PO.map((bb => (0, Xb.jsx)("button", {
                                      type: "button",
                                      className: Gb()("DocsVariantChip", {
                                        Active: hb === bb
                                      }),
                                      onClick: () => {
                                        var ub;
                                        Ob(ub = bb), Cb({
                                          ...Ab,
                                          line: ub
                                        })
                                      },
                                      children: bb
                                    }, bb)))
                                  }), (0, Xb.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, Xb.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, Xb.jsx)("input", {
                                      value: Ub,
                                      placeholder: "No name",
                                      onChange: bb => {
                                        Lb(bb.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, Xb.jsx)(mO, {
                                  synth: bb,
                                  onChange: hb => {
                                    const Bb = {
                                      ...bb,
                                      ...hb
                                    };
                                    ub(Bb);
                                    const Ob = {
                                        ...Ab,
                                        voice: Bb
                                      },
                                      Gb = performance.now();
                                    if (Gb - Zb.current >= FO) {
                                      Zb.current = Gb, pb();
                                      const bb = (0, DO.i)(Ob).plan.blips[0];
                                      bb && (Hb.current = kO((0, jO.l)(Bb), [{
                                        ...bb,
                                        atMs: 0
                                      }], ab))
                                    }
                                    window.clearTimeout(wb.current), wb.current = window.setTimeout((() => {
                                      Cb(lb.current)
                                    }), VO)
                                  }
                                })]
                              }), (0, Xb.jsx)(rb, {
                                code: db,
                                lang: "ts"
                              })]
                            })
                          }
                          var cO = hb(4637);
                          const QO = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            RO = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            bG = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${RO}`, "g"), cO.m],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, cO.m]
                            ];

                          function uG(bb) {
                            return `${bb.pageId}#${bb.anchor}`
                          }
                          let hG, BG, OG;

                          function GG(bb) {
                            const ub = (0, jb.i)(bb),
                              hb = new Set;
                            for (const [, , Bb] of ub.matchAll(jb.b)) {
                              const bb = Bb.startsWith("#") ? qb(Bb) : null,
                                ub = bb ? uG({
                                  pageId: bb.page.id,
                                  anchor: bb.anchor
                                }) : null;
                              null !== ub && (hG || (hG = new Set(Nb.flatMap((bb => zb(bb.layout) ? Ib(bb).sections.map((ub => uG({
                                pageId: bb.id,
                                anchor: ub.heading.anchor
                              }))) : [])))), hG).has(ub) && hb.add(ub)
                            }
                            for (const [, , Bb] of ub.matchAll(QO)) {
                              const bb = wu(Bb);
                              bb && hb.add(uG(bb))
                            }
                            return hb
                          }

                          function UG(bb, ub) {
                            const hb = new Set,
                              Bb = function(bb) {
                                return bb.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(bb);
                            for (const [, Ob] of Bb.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) hb.add(Ob);
                            for (const [Ob, Gb] of bG)
                              for (const [, bb] of(0, cO.f)(Bb, Ob, Gb)) ub.has(bb) && hb.add(bb);
                            return hb
                          }

                          function LG(bb, ub, hb, Bb) {
                            const Ob = bb.get(ub);
                            Ob ? !Bb && Ob.some((bb => bb.pageId === hb.pageId)) || Ob.push(hb) : bb.set(ub, [hb])
                          }
                          const YG = /^[A-Za-z_$][\w$]*$/;

                          function SG(bb) {
                            return YG.test(bb.name) ? bb.name : "options"
                          }

                          function aG(bb, ub) {
                            const hb = bb.params.map(SG).join(", ");
                            return ub ? `${bb.name} = (${hb}) => {\n\t\n}` : `api.${bb.name}(${hb})`
                          }

                          function HG(bb) {
                            let {
                              method: ub,
                              isCallback: hb
                            } = bb;
                            return (0, Xb.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, Xb.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [hb ? (0, Xb.jsxs)(Xb.Fragment, {
                                  children: [(0, Xb.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: ub.name
                                  }), (0, Xb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, Xb.jsxs)(Xb.Fragment, {
                                  children: [(0, Xb.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, Xb.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: ub.name
                                  }), (0, Xb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), ub.params.map(((bb, hb) => (0, Xb.jsxs)(Bb.Fragment, {
                                  children: [hb > 0 && (0, Xb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, Xb.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${ub.name}-${SG(bb)}`,
                                    children: bb.name
                                  })]
                                }, bb.name))), (0, Xb.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: hb ? ") => " : ")"
                                }), hb && !ub.returns && (0, Xb.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), ub.returns && ub.returns.type && (0, Xb.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!hb && (0, Xb.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, Xb.jsx)(nu, {
                                  type: ub.returns.type
                                })]
                              })]
                            })
                          }

                          function wG(bb) {
                            let {
                              title: ub,
                              references: hb
                            } = bb;
                            const Ob = (0, Bb.useContext)(Zu);
                            return (0, Xb.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, Xb.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: ub
                              }), hb.map((bb => (0, Xb.jsx)(Ub.e, {
                                to: yb(Ob, Mb(bb.pageId), bb.anchor),
                                children: bb.label
                              }, `${bb.pageId}#${bb.anchor}`)))]
                            })
                          }

                          function ZG(bb) {
                            var ub, hb;
                            let {
                              pageId: Bb,
                              anchor: Ob
                            } = bb;
                            const Gb = uG({
                                pageId: Bb,
                                anchor: Ob
                              }),
                              Ub = null !== (ub = function() {
                                if (!OG) {
                                  OG = new Map;
                                  const Bb = new Set(Nb.filter((bb => "callbacks" === bb.layout)).flatMap((bb => Ib(bb).sections.map((bb => bb.heading.text)))));
                                  for (const Ob of Nb)
                                    if ("article" === Ob.layout || "snippets" === Ob.layout)
                                      for (const Gb of (0, jb.v)(Ib(Ob)))
                                        for (const {
                                            code: Ub
                                          }
                                          of(0, jb.j)(Gb.blocks))
                                          for (const Lb of UG(Ub, Bb)) {
                                            const Bb = Hu().get(Lb);
                                            if (Bb) {
                                              var bb, ub, hb;
                                              const Ub = {
                                                pageId: Ob.id,
                                                anchor: null !== (bb = null === (ub = Gb.heading) || void 0 === ub ? void 0 : ub.anchor) && void 0 !== bb ? bb : "",
                                                label: null !== (hb = Ob.navTitle) && void 0 !== hb ? hb : Ob.title
                                              };
                                              LG(OG, uG(Bb), Ub, !1)
                                            }
                                          }
                                }
                                return OG
                              }().get(Gb)) && void 0 !== ub ? ub : [],
                              Lb = null !== (hb = function() {
                                if (!BG) {
                                  BG = new Map;
                                  const bb = Mb("changelog");
                                  for (const ub of Ib(bb).sections) {
                                    const hb = new Set(ub.blocks.flatMap((bb => [...GG(bb)])));
                                    for (const Bb of hb) {
                                      const hb = {
                                        pageId: bb.id,
                                        anchor: ub.heading.anchor,
                                        label: ub.heading.text
                                      };
                                      LG(BG, Bb, hb, !0)
                                    }
                                  }
                                }
                                return BG
                              }().get(Gb)) && void 0 !== hb ? hb : [];
                            return 0 === Ub.length && 0 === Lb.length ? null : (0, Xb.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Ub.length > 0 && (0, Xb.jsx)(wG, {
                                title: "Used in",
                                references: Ub
                              }), Lb.length > 0 && (0, Xb.jsx)(wG, {
                                title: "Changelog",
                                references: Lb
                              })]
                            })
                          }

                          function XG(bb) {
                            let {
                              method: ub,
                              pageId: hb,
                              anchor: Bb,
                              isCallback: Ob
                            } = bb;
                            const Gb = Ob ? void 0 : Lu().get(ub.name),
                              Ub = ub.description.length > 0 || null === Gb || void 0 === Gb || !Gb.description ? ub.description : (0, jb.y)(Gb.description);
                            return (0, Xb.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, Xb.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Xb.jsx)(Sh, {
                                  level: 2,
                                  text: ub.name,
                                  anchor: Bb,
                                  className: "DocsCardTitle"
                                }), (0, Xb.jsx)(Kb, {
                                  text: aG(ub, Ob),
                                  label: Ob ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Xb.jsx)(HG, {
                                method: ub,
                                isCallback: Ob
                              }), Gb && null !== Gb.deprecation && (0, Xb.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, Xb.jsx)("strong", {
                                  children: "Deprecated"
                                }), Gb.deprecation && (0, Xb.jsxs)(Xb.Fragment, {
                                  children: [": ", (0, Xb.jsx)(du, {
                                    text: (Lb = Gb.deprecation, (0, cO.v)(Lb, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, cO.j)("`\\w"), (bb => {
                                      let [ub] = bb;
                                      return Hu().has(ub) ? `\`${ub}\`` : ub
                                    })))
                                  })]
                                })]
                              }), Ub.length > 0 && (0, Xb.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Xb.jsx)(Zh, {
                                  blocks: Ub
                                })
                              }), ub.params.length > 0 && (0, Xb.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Xb.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, Xb.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: ub.params.map((bb => (0, Xb.jsxs)("div", {
                                    id: `${ub.name}-${SG(bb)}`,
                                    className: "DocsParam",
                                    children: [(0, Xb.jsxs)("dt", {
                                      children: [(0, Xb.jsx)("code", {
                                        className: "DocsParamName",
                                        children: bb.name
                                      }), (0, Xb.jsx)(nu, {
                                        type: bb.type
                                      })]
                                    }), bb.description && (0, Xb.jsx)("dd", {
                                      children: (0, Xb.jsx)(du, {
                                        text: bb.description
                                      })
                                    })]
                                  }, bb.name)))
                                })]
                              }), ub.returns && (ub.returns.type || ub.returns.description.length > 0) && (0, Xb.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Xb.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, Xb.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [ub.returns.type && (0, Xb.jsx)(nu, {
                                    type: ub.returns.type
                                  }), ub.returns.description.length > 0 && (0, Xb.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, Xb.jsx)(Zh, {
                                      blocks: ub.returns.description
                                    })
                                  })]
                                })]
                              }), (0, Xb.jsx)(ZG, {
                                pageId: hb,
                                anchor: Bb
                              })]
                            });
                            var Lb
                          }

                          function pG(bb) {
                            var ub;
                            return null !== bb.defaultValue && "undefined" !== bb.defaultValue ? bb.defaultValue : null !== (ub = bb.example) && void 0 !== ub ? ub : "value"
                          }

                          function oG(bb) {
                            let {
                              setting: ub,
                              pageId: hb,
                              anchor: Bb,
                              setterSnippet: Ob
                            } = bb;
                            const Gb = null === ub.defaultValue ? null : Au(ub.defaultValue);
                            return (0, Xb.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, Xb.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Xb.jsx)(Sh, {
                                  level: 2,
                                  text: ub.name,
                                  anchor: Bb,
                                  className: "DocsCardTitle"
                                }), (0, Xb.jsx)(Kb, {
                                  text: Ob(ub.name, pG(ub)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Xb.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, Xb.jsxs)("div", {
                                  children: [(0, Xb.jsx)("dt", {
                                    children: "Type"
                                  }), (0, Xb.jsx)("dd", {
                                    children: (0, Xb.jsx)(nu, {
                                      type: ub.type
                                    })
                                  })]
                                }), null !== ub.defaultValue && (0, Xb.jsxs)("div", {
                                  children: [(0, Xb.jsx)("dt", {
                                    children: "Default"
                                  }), (0, Xb.jsx)("dd", {
                                    children: (0, Xb.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Gb && (0, Xb.jsx)(lu, {
                                        colour: Gb
                                      }), ub.defaultValue]
                                    })
                                  })]
                                }), null !== ub.example && (0, Xb.jsxs)("div", {
                                  children: [(0, Xb.jsx)("dt", {
                                    children: "Example"
                                  }), (0, Xb.jsx)("dd", {
                                    children: (0, Xb.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: ub.example
                                    })
                                  })]
                                })]
                              }), ub.description.length > 0 && (0, Xb.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Xb.jsx)(Zh, {
                                  blocks: ub.description
                                })
                              }), (0, Xb.jsx)(ZG, {
                                pageId: hb,
                                anchor: Bb
                              })]
                            })
                          }

                          function AG(bb) {
                            let {
                              section: ub
                            } = bb;
                            return (0, Xb.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, Xb.jsx)(Sh, {
                                level: 2,
                                text: ub.heading.text,
                                anchor: ub.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, Xb.jsx)("div", {
                                className: "DocsProse",
                                children: (0, Xb.jsx)(Zh, {
                                  blocks: ub.blocks
                                })
                              })]
                            })
                          }

                          function lG(bb) {
                            let {
                              section: ub
                            } = bb;
                            return (0, Xb.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Xb.jsx)(Sh, {
                                level: ub.heading.level,
                                text: ub.heading.text,
                                anchor: ub.heading.anchor
                              }), (0, Xb.jsx)(Zh, {
                                blocks: ub.blocks
                              })]
                            })
                          }
                          const KG = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function WG(bb) {
                            let {
                              page: ub,
                              section: hb
                            } = bb;
                            if ("methods" === ub.layout || "callbacks" === ub.layout) return (0, Xb.jsx)(XG, {
                              method: rh(hb),
                              pageId: ub.id,
                              anchor: hb.heading.anchor,
                              isCallback: "callbacks" === ub.layout
                            });
                            if ("settings" === ub.layout) {
                              const bb = function(bb) {
                                const ub = {
                                  name: bb.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Bb of bb.blocks) {
                                  var hb;
                                  if (dh(Bb)) continue;
                                  const bb = "paragraph" === Bb.kind ? Bb.text.match(jh) : null;
                                  if (!bb) {
                                    ub.description.push(Bb);
                                    continue
                                  }
                                  const Ob = null !== (hb = Ch(bb[2])) && void 0 !== hb ? hb : bb[2];
                                  "Type" === bb[1] ? ub.type = Ob : "Default" === bb[1] ? ub.defaultValue = Ob : "" !== Ob && (ub.example = Ob)
                                }
                                return ub.type ? ub : null
                              }(hb);
                              if (bb) return (0, Xb.jsx)(oG, {
                                setting: bb,
                                pageId: ub.id,
                                anchor: hb.heading.anchor,
                                setterSnippet: ub.setterSnippet
                              })
                            }
                            return "snippets" === ub.layout ? (0, Xb.jsx)(AG, {
                              section: hb
                            }) : "changelog" === ub.layout ? (0, Xb.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, Xb.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, Xb.jsx)(Sh, {
                                  level: 2,
                                  text: hb.heading.text,
                                  anchor: hb.heading.anchor
                                })
                              }), (0, Xb.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, Xb.jsx)(Zh, {
                                  blocks: nh(hb.blocks)
                                })
                              })]
                            }) : ub.gallery ? (0, Xb.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Xb.jsx)(Sh, {
                                level: hb.heading.level,
                                text: hb.heading.text,
                                anchor: hb.heading.anchor
                              }), (0, Xb.jsx)(DB, {
                                kind: ub.gallery,
                                content: Ib(ub),
                                blocks: hb.blocks
                              })]
                            }) : (0, Xb.jsx)(lG, {
                              section: hb
                            })
                          }

                          function CG(bb) {
                            let {
                              page: ub,
                              onTocChange: hb
                            } = bb;
                            const Ob = Ib(ub),
                              [Gb, Ub] = (0, Bb.useState)(""),
                              Lb = "article" !== ub.layout,
                              Yb = oh(ub.gallery) ? ub.gallery : null,
                              Sb = null !== Yb,
                              ab = Gb.trim().toLowerCase(),
                              Hb = (0, Bb.useRef)(null),
                              wb = (0, Bb.useCallback)((bb => {
                                var ub;
                                null === (ub = Hb.current) || void 0 === ub || ub.preview(bb)
                              }), []),
                              Zb = (0, Bb.useMemo)((() => {
                                if (!ub.hasParticlePlayground) return [];
                                const bb = gh(Ob.intro).find((bb => "names" === bb.kind && !bb.names.some((bb => null !== mh(bb.name)))));
                                return "names" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.names.map((bb => bb.name)) : []
                              }), [ub, Ob]),
                              pb = (0, Bb.useMemo)((() => {
                                if (!ub.hasTextPlayground) return [];
                                const bb = Ob.sections.flatMap((bb => bb.blocks.flatMap((bb => {
                                  var ub;
                                  return (null !== (ub = zh(bb)) && void 0 !== ub ? ub : []).flatMap((bb => mu(bb.name) ? [bb.name] : []))
                                }))));
                                return [...new Set(bb)]
                              }), [ub, Ob]),
                              ob = (0, Bb.useMemo)((() => ab ? Ob.sections.filter((bb => function(bb, ub) {
                                return !!bb.heading.text.toLowerCase().includes(ub) || bb.blocks.some((bb => (0, jb.i)(bb).toLowerCase().includes(ub)))
                              }(bb, ab))) : Ob.sections), [Ob, ab]),
                              Ab = (0, Bb.useMemo)((() => function(bb, ub) {
                                return "article" !== bb.layout ? ub.map((bb => ({
                                  anchor: bb.heading.anchor,
                                  text: bb.heading.text,
                                  level: 2
                                }))) : ub.flatMap((bb => {
                                  const ub = bb.blocks.flatMap((bb => "heading" === bb.kind && 3 === bb.level ? [{
                                    anchor: bb.anchor,
                                    text: bb.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: bb.heading.anchor,
                                    text: bb.heading.text,
                                    level: 2
                                  }, ...ub]
                                }))
                              }(ub, ob)), [ub, ob]);
                            return (0, Bb.useEffect)((() => {
                              hb(Ab)
                            }), [Ab, hb]), (0, Xb.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, Xb.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, Xb.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Ob.title || ub.title
                                }), (0, Xb.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: ub.summary
                                }), (0, Xb.jsx)(fB, {
                                  page: ub
                                }), Lb && (0, Xb.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, Xb.jsxs)("span", {
                                    children: [(0, Xb.jsx)("strong", {
                                      children: Ob.sections.length
                                    }), " ", KG[ub.layout]]
                                  })
                                })]
                              }), "" === ub.slug && (0, Xb.jsx)(zB, {}), Yb && (0, Xb.jsx)(tB, {
                                kind: Yb
                              }, Yb), ub.hasParticlePlayground && (0, Xb.jsx)(LO, {
                                ref: Hb,
                                textures: Zb
                              }), !Sb && Ob.intro.length > 0 && (0, Xb.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: ub.gallery ? (0, Xb.jsx)(AB.Provider, {
                                  value: ub.hasParticlePlayground ? wb : null,
                                  children: (0, Xb.jsx)(DB, {
                                    kind: ub.gallery,
                                    content: Ob,
                                    blocks: Ob.intro
                                  })
                                }) : (0, Xb.jsx)(Zh, {
                                  blocks: nh(Ob.intro)
                                })
                              }), ub.hasTextPlayground && (0, Xb.jsx)(rO, {
                                fontAwesomeIcons: pb
                              }), ub.hasVoicePlayground && (0, Xb.jsx)(TO, {}), ub.childPageIds && (0, Xb.jsx)(zB, {
                                cards: ub.childPageIds.map((bb => ({
                                  pageId: bb
                                }))),
                                label: ub.title
                              }), Lb && (0, Xb.jsx)(Kh, {
                                className: "DocsFilterBar",
                                value: Gb,
                                placeholder: `Filter ${Ob.sections.length} ${KG[ub.layout]}\u2026`,
                                label: `Filter ${KG[ub.layout]}`,
                                onChange: Ub,
                                count: ab ? {
                                  visible: ob.length,
                                  total: Ob.sections.length
                                } : null
                              }), !Sb && (0, Xb.jsxs)("div", {
                                className: `DocsSections Layout-${ub.layout}`,
                                children: [ob.map((bb => (0, Xb.jsx)(WG, {
                                  page: ub,
                                  section: bb
                                }, bb.heading.anchor))), 0 === ob.length && (0, Xb.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", KG[ub.layout], " match \u201c", Gb, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const dG = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function rG(bb) {
                            let {
                              entry: ub,
                              isActive: hb,
                              onNavigate: Bb,
                              label: Ob,
                              children: Ub
                            } = bb;
                            return (0, Xb.jsx)("a", {
                              href: `#${ub.anchor}`,
                              "aria-label": Ob,
                              className: Gb()(`Level${ub.level}`, {
                                Active: hb
                              }),
                              "aria-current": hb ? "location" : void 0,
                              onClick: bb => {
                                bb.preventDefault(), Bb(ub.anchor)
                              },
                              children: Ub
                            })
                          }

                          function jG(bb) {
                            let {
                              toc: ub,
                              activeAnchor: hb,
                              onNavigate: Ob
                            } = bb;
                            const Ub = Math.max(0, ub.findIndex((bb => bb.anchor === hb))),
                              Lb = (0, Bb.useRef)(null),
                              Yb = (0, Bb.useRef)(!1);
                            (0, Bb.useEffect)((() => {
                              var bb, hb;
                              const Bb = null === (bb = Lb.current) || void 0 === bb ? void 0 : bb.closest(".DocsToc"),
                                Ob = null === (hb = Lb.current) || void 0 === hb ? void 0 : hb.querySelector(".DocsTimelineNotch.Active");
                              if (!Bb || !Ob) return;
                              let Gb = 0;
                              if (Ub === ub.length - 1) Gb = Bb.scrollHeight;
                              else if (Ub > 0) {
                                const bb = Bb.getBoundingClientRect(),
                                  ub = Ob.getBoundingClientRect();
                                Gb = Bb.scrollTop + ub.top + ub.height / 2 - (bb.top + Bb.clientHeight / 2)
                              }
                              Bb.scrollTo({
                                top: Gb,
                                behavior: Yb.current ? "smooth" : "auto"
                              }), Yb.current = !0
                            }), [Ub, ub.length]);
                            const Sb = [];
                            return ub.forEach(((bb, ub) => {
                              var hb, Bb, Ob;
                              const Gb = function(bb) {
                                  const ub = bb.trim().match(dG);
                                  return ub ? {
                                    day: ub[1],
                                    month: `${ub[2]} ${ub[3]}`
                                  } : null
                                }(bb.text),
                                Ub = null !== (hb = null === Gb || void 0 === Gb ? void 0 : Gb.month) && void 0 !== hb ? hb : null;
                              null !== Ub && (null === (Bb = Sb.at(-1)) || void 0 === Bb ? void 0 : Bb.month) === Ub || Sb.push({
                                month: Ub,
                                entries: []
                              }), Sb.at(-1).entries.push({
                                entry: bb,
                                day: null !== (Ob = null === Gb || void 0 === Gb ? void 0 : Gb.day) && void 0 !== Ob ? Ob : null,
                                index: ub
                              })
                            })), (0, Xb.jsx)("ol", {
                              ref: Lb,
                              className: "DocsTimeline",
                              children: Sb.map((bb => {
                                let {
                                  month: ub,
                                  entries: hb
                                } = bb;
                                return (0, Xb.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [ub && (0, Xb.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: ub
                                  }), (0, Xb.jsx)("ol", {
                                    children: hb.map((bb => {
                                      let {
                                        entry: ub,
                                        day: hb,
                                        index: Bb
                                      } = bb;
                                      return (0, Xb.jsx)("li", {
                                        className: Gb()("DocsTimelineNotch", {
                                          Passed: Bb < Ub,
                                          Active: Bb === Ub
                                        }),
                                        children: (0, Xb.jsx)(rG, {
                                          entry: ub,
                                          isActive: Bb === Ub,
                                          onNavigate: Ob,
                                          label: ub.text,
                                          children: (0, Xb.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== hb && void 0 !== hb ? hb : ub.text
                                          })
                                        })
                                      }, ub.anchor)
                                    }))
                                  })]
                                }, hb[0].entry.anchor)
                              }))
                            })
                          }

                          function nG(bb) {
                            let {
                              isChangelog: ub,
                              toc: hb,
                              activeAnchor: Bb,
                              onNavigate: Ob
                            } = bb;
                            return 0 === hb.length ? null : (0, Xb.jsxs)(Xb.Fragment, {
                              children: [(0, Xb.jsx)("div", {
                                className: "DocsTocTitle",
                                children: ub ? "Updates" : "On this page"
                              }), ub ? (0, Xb.jsx)(jG, {
                                toc: hb,
                                activeAnchor: Bb,
                                onNavigate: Ob
                              }) : (0, Xb.jsx)("ul", {
                                children: hb.map((bb => (0, Xb.jsx)("li", {
                                  children: (0, Xb.jsx)(rG, {
                                    entry: bb,
                                    isActive: bb.anchor === Bb,
                                    onNavigate: Ob,
                                    children: bb.text.replace(/`/g, "")
                                  })
                                }, bb.anchor)))
                              })]
                            })
                          }
                          const DG = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            xG = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            zG = 20,
                            gG = 10,
                            iG = 40,
                            vG = 120;
                          let tG;

                          function JG(bb) {
                            const ub = bb.gallery;
                            if (!ub) return [];
                            if (oh(ub)) return function(bb) {
                              return lh(bb).entries.map((bb => bb.name))
                            }(ub).map((hb => ({
                              page: bb,
                              anchor: vh(ub, hb),
                              title: hb,
                              kind: xG[ub],
                              text: "",
                              listedUnder: bb.title
                            })));
                            const hb = Ib(bb);
                            return (0, jb.v)(hb).flatMap((Bb => {
                              const Ob = Bb.heading ? `${bb.title} \u203a ${Bb.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : bb.title;
                              return Jh(ub, hb, Bb.blocks).flatMap((hb => "names" !== hb.kind ? [] : hb.names.map((Bb => {
                                const Gb = hb.isSongs ? "Song" : xG[ub];
                                return {
                                  page: bb,
                                  anchor: Bb.anchor,
                                  title: Bb.name,
                                  kind: Gb,
                                  text: "",
                                  listedUnder: Ob
                                }
                              }))))
                            }))
                          }

                          function eG(bb, ub, hb) {
                            const Bb = bb.title.toLowerCase();
                            let Ob = 0;
                            if (Bb === ub) Ob = 100;
                            else if (Bb.startsWith(ub)) Ob = 80;
                            else if (Bb.includes(ub)) Ob = 60;
                            else if (hb.every((bb => Bb.includes(bb)))) Ob = 45;
                            else {
                              if (!bb.text.toLowerCase().includes(ub)) return 0;
                              Ob = 20
                            }
                            return Ob - Math.min(Bb.length / 10, 9) + ("Page" === bb.kind ? 8 : "Method" === bb.kind ? 3 : 0) - (bb.listedUnder ? zG : 0)
                          }

                          function NG(bb, ub) {
                            const hb = bb.toLowerCase().indexOf(ub),
                              Bb = Math.max(0, hb - vG / 3);
                            return `${Bb>0?"\u2026":""}${bb.slice(Bb,Bb+vG)}${Bb+vG<bb.length?"\u2026":""}`
                          }

                          function sG(bb) {
                            let {
                              text: ub,
                              query: hb
                            } = bb;
                            const Bb = hb ? ub.toLowerCase().indexOf(hb) : -1;
                            return -1 === Bb ? (0, Xb.jsx)(Xb.Fragment, {
                              children: ub
                            }) : (0, Xb.jsxs)(Xb.Fragment, {
                              children: [ub.slice(0, Bb), (0, Xb.jsx)("mark", {
                                children: ub.slice(Bb, Bb + hb.length)
                              }), ub.slice(Bb + hb.length)]
                            })
                          }

                          function MG(bb) {
                            let {
                              basePath: ub,
                              onClose: hb
                            } = bb;
                            const Ob = (0, Lb.y)(),
                              [Ub, Yb] = (0, Bb.useState)(""),
                              [Sb, ab] = (0, Bb.useState)(0),
                              Hb = (0, Bb.useRef)(null),
                              wb = (0, Bb.useRef)(null),
                              Zb = Ub.trim().toLowerCase(),
                              pb = (0, Bb.useMemo)((() => {
                                const bb = (tG || (tG = Nb.flatMap((bb => {
                                  const ub = Ib(bb);
                                  return [{
                                    page: bb,
                                    anchor: "",
                                    title: bb.title,
                                    kind: "Page",
                                    text: bb.summary
                                  }, ...ub.sections.flatMap((ub => {
                                    const hb = ub.blocks.filter((bb => "paragraph" === bb.kind)).map(jb.i).join(" ").replace(/[`*]/g, ""),
                                      Bb = {
                                        page: bb,
                                        anchor: ub.heading.anchor,
                                        title: ub.heading.text.replace(/`/g, ""),
                                        kind: DG[bb.layout],
                                        text: hb
                                      },
                                      Ob = ub.blocks.flatMap((ub => "article" === bb.layout && "heading" === ub.kind && 3 === ub.level ? [{
                                        page: bb,
                                        anchor: ub.anchor,
                                        title: ub.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Bb.title
                                      }] : []));
                                    return [Bb, ...Ob]
                                  })), ...JG(bb)]
                                }))), tG);
                                if (!Zb) return bb.filter((bb => "Page" === bb.kind));
                                const ub = Zb.split(/\s+/);
                                let hb = 0;
                                return bb.map((bb => ({
                                  entry: bb,
                                  score: eG(bb, Zb, ub)
                                }))).filter((bb => bb.score > 0)).sort(((bb, ub) => ub.score - bb.score)).filter((bb => !bb.entry.listedUnder || (hb++, hb <= gG))).slice(0, iG).map((bb => bb.entry))
                              }), [Zb]);
                            (0, Bb.useEffect)((() => {
                              ab(0)
                            }), [Zb]), (0, Bb.useEffect)((() => {
                              const bb = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === bb || void 0 === bb || bb.focus()
                              }
                            }), []), (0, Bb.useEffect)((() => {
                              var bb, ub;
                              null === (bb = Hb.current) || void 0 === bb || null === (ub = bb.querySelector(".Active")) || void 0 === ub || ub.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Sb]);
                            const Ab = bb => {
                              Ob(yb(ub, bb.page, bb.anchor)), hb()
                            };
                            return (0, Xb.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: bb => {
                                bb.target === bb.currentTarget && hb()
                              },
                              children: (0, Xb.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: bb => {
                                  bb.target !== wb.current && bb.preventDefault()
                                },
                                onKeyDown: bb => {
                                  if ("Escape" === bb.key) hb();
                                  else if ("Tab" === bb.key) {
                                    var ub;
                                    bb.preventDefault(), null === (ub = wb.current) || void 0 === ub || ub.focus()
                                  }
                                },
                                children: [(0, Xb.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, Xb.jsx)(ob, {
                                    name: "magnifying-glass"
                                  }), (0, Xb.jsx)("input", {
                                    ref: wb,
                                    autoFocus: !0,
                                    value: Ub,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": pb.length > 0 ? `DocsSearchResult-${Sb}` : void 0,
                                    onChange: bb => {
                                      Yb(bb.target.value)
                                    },
                                    onKeyDown: bb => {
                                      if ("ArrowDown" === bb.key || "ArrowUp" === bb.key) {
                                        bb.preventDefault();
                                        const ub = "ArrowDown" === bb.key ? 1 : -1;
                                        ab((Sb + ub + pb.length) % Math.max(pb.length, 1))
                                      } else "Enter" === bb.key && pb[Sb] && Ab(pb[Sb])
                                    }
                                  }), (0, Xb.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, Xb.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Hb,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Zb && (0, Xb.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), pb.map(((bb, ub) => {
                                    var hb;
                                    return (0, Xb.jsxs)("li", {
                                      id: `DocsSearchResult-${ub}`,
                                      role: "option",
                                      "aria-selected": ub === Sb,
                                      className: Gb()("DocsSearchResult", {
                                        Active: ub === Sb
                                      }),
                                      onMouseMove: () => {
                                        ab(ub)
                                      },
                                      onClick: () => {
                                        Ab(bb)
                                      },
                                      children: [(0, Xb.jsx)(ob, {
                                        name: bb.page.icon
                                      }), (0, Xb.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, Xb.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, Xb.jsx)(sG, {
                                            text: bb.title,
                                            query: Zb
                                          })
                                        }), bb.text && (0, Xb.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, Xb.jsx)(sG, {
                                            text: NG(bb.text, Zb),
                                            query: Zb
                                          })
                                        })]
                                      }), (0, Xb.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === bb.kind ? "Page" : null !== (hb = bb.listedUnder) && void 0 !== hb ? hb : `${bb.kind} \xb7 ${bb.page.title}`
                                      })]
                                    }, `${bb.page.id}#${bb.anchor}`)
                                  })), Zb && 0 === pb.length && (0, Xb.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Ub, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function mG(bb, ub) {
                            if (ub < 10) return `${bb.toFixed(1)}s`;
                            const hb = Math.floor(bb);
                            return `${Math.floor(hb/60)}:${String(hb%60).padStart(2,"0")}`
                          }

                          function IG() {
                            const bb = aB((bb => bb.track)),
                              ub = aB((bb => bb.volume)),
                              [hb, Ob] = (0, Bb.useState)(0),
                              Ub = (0, Bb.useRef)(uB);
                            if ((0, Bb.useEffect)((() => {
                                if (!bb) return;
                                if (Ob(XB()), "playing" !== bb.status) return;
                                let ub = 0;
                                const hb = () => {
                                  Ob(XB()), ub = requestAnimationFrame(hb)
                                };
                                return ub = requestAnimationFrame(hb), () => {
                                  cancelAnimationFrame(ub)
                                }
                              }), [bb]), !bb) return null;
                            const Lb = "paused" !== bb.status,
                              Yb = Math.min(hb, bb.duration);
                            return (0, Xb.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, Xb.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, Xb.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": Lb ? `Pause ${bb.name}` : `Play ${bb.name}`,
                                  onClick: ZB,
                                  children: (0, Xb.jsx)(ob, {
                                    name: Lb ? "pause" : "play"
                                  })
                                }), (0, Xb.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, Xb.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, Xb.jsx)("code", {
                                      children: bb.name
                                    }), (0, Xb.jsx)("span", {
                                      children: bb.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, Xb.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, Xb.jsx)("span", {
                                      children: mG(Yb, bb.duration)
                                    }), (0, Xb.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: bb.duration || 1,
                                      step: .01,
                                      value: Yb,
                                      disabled: 0 === bb.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${mG(Yb,bb.duration)} of ${mG(bb.duration,bb.duration)}`,
                                      onChange: bb => {
                                        const ub = Number(bb.target.value);
                                        ! function(bb) {
                                          var ub;
                                          UB = bb, null === (ub = OB) || void 0 === ub || ub.seek(bb)
                                        }(ub), Ob(ub)
                                      }
                                    }), (0, Xb.jsx)("span", {
                                      children: bb.duration > 0 ? mG(bb.duration, bb.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, Xb.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, Xb.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === ub ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === ub ? pB(Ub.current) : (Ub.current = ub, pB(0))
                                    },
                                    children: (0, Xb.jsx)(ob, {
                                      name: "volume",
                                      className: Gb()({
                                        Muted: 0 === ub
                                      })
                                    })
                                  }), (0, Xb.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: ub,
                                    "aria-label": "Volume",
                                    onChange: bb => {
                                      pB(Number(bb.target.value))
                                    }
                                  })]
                                }), (0, Xb.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var ub;
                                    null === (ub = document.querySelector(`[data-docs-track="${CSS.escape(hB(bb.name,bb.isSong))}"]`)) || void 0 === ub || ub.focus(), oB()
                                  },
                                  children: (0, Xb.jsx)(ob, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var PG = hb(29);
                          const qG = "docsTheme",
                            EG = window.matchMedia("(prefers-color-scheme: light)");

                          function yG(bb) {
                            let {
                              theme: ub,
                              onChange: hb
                            } = bb;
                            const Bb = "dark" === ub ? "light" : "dark";
                            return (0, Xb.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Bb} theme`,
                              title: `Switch to ${Bb} theme`,
                              onClick: () => {
                                hb(Bb)
                              },
                              children: (0, Xb.jsx)(ob, {
                                name: "dark" === ub ? "moon" : "sun"
                              })
                            })
                          }
                          const VG = "https://github.com/Bloxdy/code-api",
                            FG = "https://discord.gg/playbloxd",
                            fG = 180,
                            kG = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function TG(bb) {
                            let {
                              basePath: ub,
                              activePageId: hb,
                              onNavigate: Bb
                            } = bb;
                            return (0, Xb.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: sb.map((bb => (0, Xb.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, Xb.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: bb.title
                                }), bb.pageIds.map((bb => {
                                  var Ob;
                                  const Lb = Mb(bb);
                                  return (0, Xb.jsxs)(Ub.e, {
                                    to: yb(ub, Lb),
                                    className: Gb()("DocsNavLink", {
                                      Active: Lb.id === hb
                                    }),
                                    "aria-current": Lb.id === hb ? "page" : void 0,
                                    onClick: Bb,
                                    children: [(0, Xb.jsx)(ob, {
                                      name: Lb.icon
                                    }), (0, Xb.jsx)("span", {
                                      children: null !== (Ob = Lb.navTitle) && void 0 !== Ob ? Ob : Lb.title
                                    })]
                                  }, Lb.id)
                                }))]
                              }, bb.title)))
                            })
                          }

                          function cG(bb) {
                            let {
                              basePath: ub,
                              pageId: hb
                            } = bb;
                            const Bb = sb.flatMap((bb => bb.pageIds)),
                              Ob = Bb.indexOf(hb),
                              Gb = Ob > 0 ? Mb(Bb[Ob - 1]) : null,
                              Lb = Ob < Bb.length - 1 ? Mb(Bb[Ob + 1]) : null;
                            return (0, Xb.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Gb ? (0, Xb.jsxs)(Ub.e, {
                                className: "DocsPagerLink Previous",
                                to: yb(ub, Gb),
                                children: [(0, Xb.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, Xb.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Gb.title
                                })]
                              }) : (0, Xb.jsx)("span", {}), Lb && (0, Xb.jsxs)(Ub.e, {
                                className: "DocsPagerLink Next",
                                to: yb(ub, Lb),
                                children: [(0, Xb.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, Xb.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Lb.title
                                })]
                              })]
                            })
                          }

                          function QG(bb) {
                            let {
                              basePath: ub,
                              embedded: hb = !1
                            } = bb;
                            const {
                              pageSlug: Ob = ""
                            } = (0, Lb.F)(), Sb = (0, Lb.x)(), ab = (0, Lb.y)(), Hb = (wb = Ob, Nb.find((bb => bb.slug === wb)));
                            var wb;
                            const [Zb, pb] = function() {
                              const [bb, ub] = (0, Bb.useState)((() => {
                                const bb = PG.j.getItem(qG);
                                return "dark" === bb || "light" === bb ? bb : null
                              })), [hb, Ob] = (0, Bb.useState)(EG.matches ? "light" : "dark");
                              return (0, Bb.useEffect)((() => {
                                const bb = () => {
                                  Ob(EG.matches ? "light" : "dark")
                                };
                                return EG.addEventListener("change", bb), () => {
                                  EG.removeEventListener("change", bb)
                                }
                              }), []), [null !== bb && void 0 !== bb ? bb : hb, bb => {
                                PG.j.setItem(qG, bb), ub(bb)
                              }]
                            }(), [Ab, lb] = (0, Bb.useState)(null), [Kb, Wb] = (0, Bb.useState)(!1), [Cb, db] = (0, Bb.useState)(!1), [rb, nb] = (0, Bb.useState)([]), Db = function(bb, ub) {
                              const [hb, Ob] = (0, Bb.useState)("");
                              return (0, Bb.useEffect)((() => {
                                if (!ub) return;
                                let hb = 0;
                                const Bb = () => {
                                    var Bb, Gb;
                                    hb = 0;
                                    const Ub = ub.getBoundingClientRect().top + fG;
                                    let Lb = null !== (Bb = null === (Gb = bb[0]) || void 0 === Gb ? void 0 : Gb.anchor) && void 0 !== Bb ? Bb : "";
                                    for (const ub of bb) {
                                      const bb = document.getElementById(ub.anchor);
                                      bb && bb.getBoundingClientRect().top <= Ub && (Lb = ub.anchor)
                                    }
                                    ub.scrollTop + ub.clientHeight >= ub.scrollHeight - 2 && ub.scrollTop > 0 && bb.length > 0 && (Lb = bb[bb.length - 1].anchor), Ob(Lb)
                                  },
                                  Gb = () => {
                                    hb || (hb = requestAnimationFrame(Bb))
                                  };
                                return Bb(), ub.addEventListener("scroll", Gb, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(hb), ub.removeEventListener("scroll", Gb)
                                }
                              }), [bb, ub]), hb
                            }(rb, Ab), xb = "" === Ob && Sb.hash ? function(bb) {
                              const ub = (0, jb.r)(bb);
                              if (Pb(Mb("welcome"), ub)) return null;
                              const hb = Object.hasOwn(Eb, ub) ? Eb[ub] : null;
                              if (hb) return {
                                page: Mb(hb.pageId),
                                anchor: hb.anchor
                              };
                              const Bb = Mb("readme");
                              return Pb(Bb, ub) ? {
                                page: Bb,
                                anchor: ub
                              } : qb(`#${ub}`)
                            }(Sb.hash) : null;
                            (0, Bb.useEffect)((() => (Yb.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              Yb.d.set({
                                musicOnFromPage: !0
                              }), oB()
                            })), []), (0, Bb.useEffect)((() => {
                              const bb = bb => {
                                const ub = bb.target;
                                if (ub.closest(".DocsTextDialog")) return;
                                const hb = ub.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(ub.tagName);
                                "k" === bb.key && (bb.metaKey || bb.ctrlKey) || "/" === bb.key && !hb ? (bb.preventDefault(), db(!0)) : "Escape" === bb.key && Wb(!1)
                              };
                              return window.addEventListener("keydown", bb), () => {
                                window.removeEventListener("keydown", bb)
                              }
                            }), []);
                            const zb = (0, Bb.useRef)(null);
                            (0, Bb.useLayoutEffect)((() => {
                              var bb, ub;
                              if (!Ab) return;
                              const hb = zb.current === Sb.pathname;
                              zb.current = Sb.pathname;
                              const Bb = (0, jb.r)(Sb.hash),
                                Ob = Bb ? document.getElementById(Bb) : null;
                              if (null === (bb = Ab.querySelector(".DocsTargeted")) || void 0 === bb || bb.classList.remove("DocsTargeted"), null === Ob || void 0 === Ob || null === (ub = Ob.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === ub || ub.classList.add("DocsTargeted"), Ob) {
                                var Gb;
                                const bb = Ob.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Gb = Ob.closest(".DocsChangelogEntry")) && void 0 !== Gb ? Gb : Ob).scrollIntoView({
                                  block: bb ? "center" : "start",
                                  behavior: hb ? "smooth" : "auto"
                                })
                              } else hb || Ab.scrollTo({
                                top: 0
                              })
                            }), [Ab, Sb.pathname, Sb.hash, Sb.key]);
                            const gb = (0, Bb.useCallback)((() => {
                                Wb(!1)
                              }), []),
                              ib = (0, Bb.useCallback)((bb => {
                                ab({
                                  hash: bb
                                })
                              }), [ab]);
                            if (xb) return (0, Xb.jsx)(Lb.e, {
                              replace: !0,
                              to: yb(ub, xb.page, xb.anchor)
                            });
                            if (!Hb) return (0, Xb.jsx)(Lb.e, {
                              replace: !0,
                              to: ub
                            });
                            const vb = hb ? "div" : "main";
                            return (0, Xb.jsx)(Zu.Provider, {
                              value: ub,
                              children: (0, Xb.jsx)(Xu.Provider, {
                                value: Ab,
                                children: (0, Xb.jsxs)("div", {
                                  ref: lb,
                                  className: Gb()("DocsSite", {
                                    Embedded: hb,
                                    NavOpen: Kb
                                  }),
                                  "data-theme": Zb,
                                  children: [(0, Xb.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, Xb.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Kb ? "Close menu" : "Open menu",
                                      "aria-expanded": Kb,
                                      onClick: () => {
                                        Wb(!Kb)
                                      },
                                      children: (0, Xb.jsx)(ob, {
                                        name: Kb ? "cross" : "menu"
                                      })
                                    }), (0, Xb.jsxs)(Ub.e, {
                                      to: ub,
                                      className: "DocsBrand",
                                      children: [(0, Xb.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, Xb.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, Xb.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, Xb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        db(!0)
                                      },
                                      children: [(0, Xb.jsx)(ob, {
                                        name: "magnifying-glass"
                                      }), (0, Xb.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, Xb.jsxs)("kbd", {
                                        children: [kG ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, Xb.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, Xb.jsxs)("a", {
                                        href: FG,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Xb.jsx)(ob, {
                                          name: "discord"
                                        }), (0, Xb.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, Xb.jsxs)("a", {
                                        href: VG,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Xb.jsx)(ob, {
                                          name: "external-link"
                                        }), (0, Xb.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !hb && (0, Xb.jsxs)(Ub.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, Xb.jsx)(ob, {
                                          name: "play"
                                        }), (0, Xb.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, Xb.jsx)(yG, {
                                        theme: Zb,
                                        onChange: pb
                                      })]
                                    })]
                                  }), (0, Xb.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, Xb.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, Xb.jsx)(TG, {
                                        basePath: ub,
                                        activePageId: Hb.id,
                                        onNavigate: gb
                                      })
                                    }), (0, Xb.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: gb
                                    }), (0, Xb.jsxs)(vb, {
                                      className: "DocsMain",
                                      children: [(0, Xb.jsx)(CG, {
                                        page: Hb,
                                        onTocChange: nb
                                      }, Hb.id), (0, Xb.jsx)(cG, {
                                        basePath: ub,
                                        pageId: Hb.id
                                      })]
                                    }), (0, Xb.jsx)("aside", {
                                      className: Gb()("DocsToc", {
                                        Timeline: "changelog" === Hb.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, Xb.jsx)(nG, {
                                        isChangelog: "changelog" === Hb.layout,
                                        toc: rb,
                                        activeAnchor: Db,
                                        onNavigate: ib
                                      })
                                    })]
                                  }), (0, Xb.jsx)(IG, {}), Cb && (0, Xb.jsx)(MG, {
                                    basePath: ub,
                                    onClose: () => {
                                      db(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4507: (bb, ub, hb) => {
                          hb.d(ub, {
                            b: () => Bb,
                            f: () => Ub,
                            i: () => ob,
                            j: () => pb,
                            n: () => Lb,
                            r: () => Ob,
                            s: () => Gb,
                            v: () => Xb,
                            x: () => Zb,
                            y: () => wb
                          });
                          const Bb = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Ob(bb) {
                            try {
                              return decodeURIComponent(bb.slice(1))
                            } catch {
                              return bb.slice(1)
                            }
                          }

                          function Gb(bb) {
                            return bb.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Ub = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Bb.source}`, "g");

                          function Lb(bb, ub) {
                            return 2 === bb.length ? ub.replace(/^ (.*) $/, "$1") : ub
                          }

                          function Yb(bb) {
                            return "" === bb.trim()
                          }

                          function Sb(bb) {
                            const ub = [];
                            for (const hb of bb.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ub.length > 0 && ub[ub.length - 1].endsWith("\\") ? ub[ub.length - 1] += `|${hb}` : ub.push(hb);
                            return ub.map((bb => bb.trim().replaceAll("\\|", "|")))
                          }
                          const ab = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Hb(bb) {
                            const ub = [],
                              hb = [{
                                indent: -1,
                                items: ub
                              }];
                            let Bb = null;
                            for (const Ob of bb) {
                              const bb = Ob.match(ab);
                              if (!bb) {
                                Bb && (Bb.text += ` ${Ob.trim()}`);
                                continue
                              }
                              const ub = bb[1].replace(/\t/g, "  ").length;
                              for (; ub <= hb[hb.length - 1].indent;) hb.pop();
                              Bb = {
                                text: bb[3].trim(),
                                children: []
                              }, hb[hb.length - 1].items.push(Bb), hb.push({
                                indent: ub,
                                items: Bb.children
                              })
                            }
                            return ub
                          }

                          function wb(bb) {
                            const ub = bb.replace(/\r\n/g, "\n").split("\n"),
                              hb = [];
                            let Bb = 0;
                            for (; Bb < ub.length;) {
                              const bb = ub[Bb];
                              if (Yb(bb)) {
                                Bb++;
                                continue
                              }
                              const Ob = bb.match(/^\s*```\s*(\w*)\s*$/);
                              if (Ob) {
                                const bb = [];
                                for (Bb++; Bb < ub.length && !/^\s*```\s*$/.test(ub[Bb]);) bb.push(ub[Bb]), Bb++;
                                Bb++, hb.push({
                                  kind: "code",
                                  lang: Ob[1] || "text",
                                  code: bb.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Ub = bb.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Ub) {
                                const bb = Ub[2].trim();
                                hb.push({
                                  kind: "heading",
                                  level: Ub[1].length,
                                  text: bb,
                                  anchor: Gb(bb)
                                }), Bb++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(bb)) {
                                hb.push({
                                  kind: "rule"
                                }), Bb++;
                                continue
                              }
                              if (bb.trim().startsWith("|") && Bb + 1 < ub.length && /^\s*\|[\s:|-]+\|\s*$/.test(ub[Bb + 1])) {
                                const Ob = Sb(bb),
                                  Gb = [];
                                for (Bb += 2; Bb < ub.length && ub[Bb].trim().startsWith("|");) Gb.push(Sb(ub[Bb])), Bb++;
                                hb.push({
                                  kind: "table",
                                  header: Ob,
                                  rows: Gb
                                });
                                continue
                              }
                              if (bb.startsWith(">")) {
                                const bb = [];
                                for (; Bb < ub.length && ub[Bb].startsWith(">");) bb.push(ub[Bb].replace(/^>\s?/, "")), Bb++;
                                hb.push({
                                  kind: "quote",
                                  blocks: wb(bb.join("\n"))
                                });
                                continue
                              }
                              if (ab.test(bb)) {
                                const Ob = [],
                                  Gb = /^\s*\d+\./.test(bb);
                                for (; Bb < ub.length && !Yb(ub[Bb]) && (ab.test(ub[Bb]) || /^\s+\S/.test(ub[Bb]));) Ob.push(ub[Bb]), Bb++;
                                hb.push({
                                  kind: "list",
                                  ordered: Gb,
                                  items: Hb(Ob)
                                });
                                continue
                              }
                              const Lb = [];
                              for (; Bb < ub.length && !Yb(ub[Bb]) && !/^\s*```/.test(ub[Bb]) && !/^#{1,6}\s/.test(ub[Bb]) && !ub[Bb].startsWith(">") && !ab.test(ub[Bb]) && (!ub[Bb].trim().startsWith("|") || 0 !== Lb.length);) Lb.push(ub[Bb].trim()), Bb++;
                              0 === Lb.length && (Lb.push(ub[Bb].trim()), Bb++), hb.push({
                                kind: "paragraph",
                                text: Lb.join(" ")
                              })
                            }
                            return hb
                          }

                          function Zb(bb) {
                            let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const hb = wb(bb);
                            let Bb = "";
                            const Ob = [],
                              Gb = [],
                              Ub = new Map;
                            for (const Sb of hb) {
                              if ("heading" === Sb.kind) {
                                var Lb;
                                const bb = (null !== (Lb = Ub.get(Sb.anchor)) && void 0 !== Lb ? Lb : 0) + 1;
                                Ub.set(Sb.anchor, bb), bb > 1 && (Sb.anchor = `${Sb.anchor}-${bb}`)
                              }
                              if ("heading" === Sb.kind && 1 === Sb.level && !Bb) {
                                Bb = Sb.text;
                                continue
                              }
                              if ("heading" === Sb.kind && Sb.level <= ub) {
                                Gb.push({
                                  heading: Sb,
                                  blocks: []
                                });
                                continue
                              }
                              const bb = Gb.at(-1);
                              bb ? bb.blocks.push(Sb) : Ob.push(Sb)
                            }
                            const Yb = bb => {
                              for (;
                                "rule" === (null === (ub = bb.at(-1)) || void 0 === ub ? void 0 : ub.kind);) {
                                var ub;
                                bb.pop()
                              }
                            };
                            Yb(Ob);
                            for (const Sb of Gb) Yb(Sb.blocks);
                            return {
                              title: Bb,
                              intro: Ob,
                              sections: Gb
                            }
                          }

                          function Xb(bb) {
                            return [{
                              heading: null,
                              blocks: bb.intro
                            }, ...bb.sections.map((bb => ({
                              heading: bb.heading,
                              blocks: bb.blocks
                            })))]
                          }

                          function pb(bb) {
                            return bb.flatMap((bb => "code" === bb.kind ? [bb] : "quote" === bb.kind ? pb(bb.blocks) : []))
                          }

                          function ob(bb) {
                            switch (bb.kind) {
                              case "heading":
                              case "paragraph":
                                return bb.text;
                              case "code":
                                return bb.code;
                              case "table":
                                return [bb.header, ...bb.rows].map((bb => bb.join(" "))).join(" ");
                              case "list": {
                                const ub = bb => bb.map((bb => `${bb.text} ${ub(bb.children)}`)).join(" ");
                                return ub(bb.items)
                              }
                              case "quote":
                                return bb.blocks.map(ob).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4606: (bb, ub, hb) => {
                          hb.d(ub, {
                            c: () => Lb
                          });
                          var Bb = hb(49),
                            Ob = hb(298),
                            Gb = hb(1799),
                            Ub = hb(1007);

                          function Lb(bb) {
                            let {
                              text: ub
                            } = bb;
                            const hb = [];
                            let Lb = "";
                            return (0, Ob.nc)(ub).forEach(((bb, ub) => {
                              if ("string" === typeof bb || !(0, Gb.e)(bb.icon)) return void(Lb += "string" === typeof bb ? bb : bb.icon);
                              const Ob = Math.max(0, Lb.trimEnd().search(/\S{1,12}$/));
                              hb.push((0, Ub.jsxs)(Bb.Fragment, {
                                children: [Lb.slice(0, Ob), (0, Ub.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [Lb.slice(Ob), (0, Ub.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": bb.icon,
                                    children: (0, Ub.jsx)(Gb.d, {
                                      itemName: bb.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, ub)), Lb = ""
                            })), hb.push(Lb), (0, Ub.jsx)(Ub.Fragment, {
                              children: hb
                            })
                          }
                        }, 4531: (bb, ub, hb) => {
                          hb.d(ub, {
                            d: () => lb,
                            b: () => Ab
                          });
                          var Bb = hb(49),
                            Ob = hb(1348),
                            Gb = hb(1789),
                            Ub = hb(4535),
                            Lb = hb(1007);
                          const Yb = (0, Bb.memo)((function(bb) {
                            let {
                              initialParameters: ub
                            } = bb;
                            const hb = (0, Bb.useRef)(null),
                              Ob = (0, Bb.useRef)(null),
                              Yb = (0, Bb.useRef)(0),
                              Sb = (0, Bb.useRef)(null),
                              ab = ub.description,
                              Hb = ub.yB,
                              {
                                scale: wb,
                                rotation: Zb
                              } = null !== ub && void 0 !== ub ? ub : {},
                              Xb = (0, Ub.g)();
                            return (0, Bb.useEffect)((() => {
                              const bb = Xb.onFrame((() => {
                                const bb = Xb.getState();
                                if (!bb.isActive || !hb.current || !Ob.current) return;
                                const ub = bb.state;
                                if (hb.current.value = ub.progress, ub.clickCount > Yb.current) {
                                  Yb.current = ub.clickCount;
                                  const bb = Ob.current;
                                  bb.classList.add("pulse"), Sb.current = setTimeout((() => {
                                    bb.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Sb.current), bb()
                              }
                            }), [Xb]), (0, Lb.jsx)(Lb.Fragment, {
                              children: (0, Lb.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== wb && {
                                    "--scale": wb
                                  },
                                  ...null !== Zb && {
                                    "--rotation": `${Zb}deg`
                                  }
                                },
                                children: [(0, Lb.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: hb
                                }), (0, Lb.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Ob,
                                  children: (0, Lb.jsx)(Gb.c, {
                                    text: [{
                                      icon: Hb
                                    }]
                                  })
                                }), (0, Lb.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, Lb.jsx)(Gb.c, {
                                    text: ab
                                  })
                                })]
                              })
                            })
                          }));
                          var Sb = hb(958),
                            ab = hb.n(Sb);
                          const Hb = 2 * Math.PI * 90,
                            wb = (0, Bb.memo)((function(bb) {
                              let {
                                initialParameters: ub
                              } = bb;
                              const hb = (0, Bb.useRef)(null),
                                Ob = (0, Bb.useRef)(null),
                                Yb = (0, Bb.useRef)(null),
                                Sb = ub.label,
                                wb = ub.icon,
                                Zb = ub.fB,
                                {
                                  scale: Xb,
                                  rotation: pb,
                                  kB: ob
                                } = null !== ub && void 0 !== ub ? ub : {},
                                Ab = (0, Ub.g)();
                              return (0, Bb.useEffect)((() => {
                                const bb = Ab.onFrame((() => {
                                  var bb, ub;
                                  const Bb = Ab.getState();
                                  if (!Bb.isActive || !Ob.current) return;
                                  const Gb = Bb.state,
                                    Ub = null !== (bb = Gb.timeRemaining) && void 0 !== bb ? bb : 0,
                                    Lb = null !== (ub = Gb.FB) && void 0 !== ub ? ub : 1,
                                    Sb = Hb * (1 - Ub / Lb);
                                  Ob.current.style.strokeDashoffset = `${Sb}`, hb.current && (hb.current.style.opacity = Ub > 0 ? "1" : "0"), Yb.current && Zb && (Yb.current.textContent = `${(Ub/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  bb()
                                }
                              }), [Ab, Zb]), (0, Lb.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: hb,
                                style: {
                                  ...null !== Xb && {
                                    "--scale": Xb
                                  },
                                  ...null !== pb && {
                                    "--rotation": `${pb}deg`
                                  }
                                },
                                children: [(0, Lb.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, Lb.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Lb.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, Lb.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Hb,
                                      ref: Ob
                                    })]
                                  }), (0, Lb.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, Lb.jsx)(Gb.c, {
                                      text: [{
                                        icon: wb
                                      }],
                                      className: ab()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: ob
                                      })
                                    })
                                  })]
                                }), (0, Lb.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, Lb.jsx)(Gb.c, {
                                    text: Sb,
                                    className: "QTETimedClickLabelText"
                                  }), Zb && (0, Lb.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: Yb
                                  })]
                                })]
                              })
                            })),
                            Zb = (0, Bb.memo)((function(bb) {
                              let {
                                initialParameters: ub
                              } = bb;
                              const hb = (0, Bb.useRef)(null),
                                Ob = (0, Bb.useRef)(null),
                                Yb = (0, Bb.useRef)(null),
                                Sb = (0, Bb.useRef)(!1),
                                ab = ub.description,
                                Hb = null === ub || void 0 === ub ? void 0 : ub.icon,
                                wb = (0, Ub.g)();
                              return (0, Bb.useEffect)((() => {
                                const bb = wb.onFrame((() => {
                                  const bb = wb.getState();
                                  if (!bb.isActive) return;
                                  const ub = bb.state;
                                  if (hb.current) {
                                    const bb = 100 * (ub.catchZonePosition - ub.cB / 2);
                                    hb.current.style.left = `${bb}%`, hb.current.style.width = 100 * ub.cB + "%", ub.isCatching !== Sb.current && (Sb.current = ub.isCatching, ub.isCatching ? hb.current.classList.add("catching") : hb.current.classList.remove("catching"))
                                  }
                                  Ob.current && (Ob.current.style.left = 100 * ub.moverPosition + "%"), Yb.current && (Yb.current.value = ub.progress)
                                }));
                                return () => {
                                  bb()
                                }
                              }), [wb]), (0, Lb.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, Lb.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, Lb.jsx)(Gb.c, {
                                    text: ab
                                  })
                                }), (0, Lb.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: Yb
                                }), (0, Lb.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, Lb.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: hb
                                  }), (0, Lb.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Ob,
                                    children: (0, Lb.jsx)("span", {
                                      children: Hb && (0, Lb.jsx)(Gb.c, {
                                        text: [{
                                          icon: Hb,
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
                          var Xb = hb(588);
                          const pb = (0, Bb.memo)((function(bb) {
                              let {
                                initialParameters: ub
                              } = bb;
                              const hb = (0, Bb.useRef)(null),
                                Ob = ub.label,
                                Yb = ub.OO,
                                {
                                  icon: Sb,
                                  scale: ab,
                                  rotation: Hb
                                } = null !== ub && void 0 !== ub ? ub : {},
                                wb = 100 * (.5 - Yb / 2),
                                Zb = 100 * Yb,
                                pb = (0, Ub.g)();
                              return (0, Bb.useEffect)((() => {
                                const bb = pb.onFrame((() => {
                                  const bb = pb.getState();
                                  if (!bb.isActive || !hb.current) return;
                                  const ub = bb.state;
                                  hb.current.style.left = 100 * ub.markerPosition + "%"
                                }));
                                return () => {
                                  bb()
                                }
                              }), [pb]), (0, Lb.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, Xb.J)(ab) && {
                                    "--scale": ab
                                  },
                                  ...!(0, Xb.J)(Hb) && {
                                    "--rotation": `${Hb}deg`
                                  }
                                },
                                children: [Sb && (0, Lb.jsx)(Gb.c, {
                                  text: [{
                                    icon: Sb
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, Lb.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, Lb.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${wb}%`,
                                      width: `${Zb}%`
                                    }
                                  }), (0, Lb.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: hb
                                  })]
                                }), (0, Lb.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, Lb.jsx)(Gb.c, {
                                    text: Ob
                                  })
                                })]
                              })
                            })),
                            ob = (0, Bb.memo)((function(bb) {
                              let {
                                initialParameters: ub
                              } = bb;
                              const hb = (0, Bb.useRef)(null),
                                [Ob, Yb] = (0, Bb.useState)((() => new Array(ub.UO).fill("pending"))),
                                [Sb, ab] = (0, Bb.useState)((() => {
                                  const bb = ub.SO;
                                  return (0, Xb.J)(bb) || bb <= 0 ? [] : new Array(bb).fill("pending")
                                })),
                                Hb = ub.label,
                                {
                                  icon: wb
                                } = ub,
                                Zb = (0, Bb.useRef)(0),
                                pb = (0, Bb.useRef)(0),
                                ob = (0, Bb.useRef)([]),
                                Ab = (0, Ub.g)();
                              return (0, Bb.useEffect)((() => {
                                const bb = Ab.onFrame((() => {
                                  const bb = Ab.getState();
                                  if (!bb.isActive || !hb.current) return;
                                  const ub = bb.state,
                                    Bb = 30 + 60 * ub.outerCircleProgress;
                                  if (hb.current.setAttribute("r", String(Bb)), !0 === ub.lastClickResult && ub.successes > Zb.current) {
                                    hb.current.classList.remove("QTERhythmClickOuterCircle--miss"), hb.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const bb = setTimeout((() => {
                                      var bb;
                                      null === (bb = hb.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    ob.current.push(bb)
                                  } else if (!1 === ub.lastClickResult && ub.misses > pb.current) {
                                    hb.current.classList.remove("QTERhythmClickOuterCircle--hit"), hb.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const bb = setTimeout((() => {
                                      var bb;
                                      null === (bb = hb.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    ob.current.push(bb)
                                  }
                                  ub.successes === Zb.current && ub.misses === pb.current || (Zb.current = ub.successes, pb.current = ub.misses, Yb((bb => {
                                    const hb = [...bb];
                                    for (let Bb = 0; Bb < ub.UO; Bb++) hb[Bb] = Bb < ub.successes ? "success" : "pending";
                                    return hb
                                  })), ab((bb => {
                                    if (0 === bb.length) return bb;
                                    const hb = [...bb];
                                    for (let Bb = 0; Bb < hb.length; Bb++) hb[Bb] = Bb < ub.misses ? "miss" : "pending";
                                    return hb
                                  })))
                                }));
                                return () => {
                                  bb();
                                  for (const bb of ob.current) clearTimeout(bb);
                                  ob.current = []
                                }
                              }), [Ab]), (0, Lb.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, Lb.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Ob.map(((bb, ub) => (0, Lb.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === bb ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, ub)))
                                }), (0, Lb.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, Lb.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Lb.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, Lb.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: hb
                                    })]
                                  }), wb && (0, Lb.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, Lb.jsx)(Gb.c, {
                                      text: [{
                                        icon: wb
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Sb.length > 0 && (0, Lb.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Sb.map(((bb, ub) => (0, Lb.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === bb ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, ub)))
                                }), (0, Lb.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, Lb.jsx)(Gb.c, {
                                    text: Hb
                                  })
                                })]
                              })
                            }));

                          function Ab(bb) {
                            let {
                              qte: ub
                            } = bb;
                            switch (ub.type) {
                              case "progressBar":
                                return (0, Lb.jsx)(Yb, {
                                  initialParameters: ub.parameters
                                });
                              case "timedClick":
                                return (0, Lb.jsx)(wb, {
                                  initialParameters: ub.parameters
                                });
                              case "gravityBar":
                                return (0, Lb.jsx)(Zb, {
                                  initialParameters: ub.parameters
                                });
                              case "precisionBar":
                                return (0, Lb.jsx)(pb, {
                                  initialParameters: ub.parameters
                                });
                              case "rhythmClick":
                                return (0, Lb.jsx)(ob, {
                                  initialParameters: ub.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const lb = (0, Bb.memo)((function() {
                            const [bb, ub] = (0, Bb.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Ob.h)("qteStateUpdated", (bb => {
                              ub(bb)
                            })), bb.isActive && bb.type ? (0, Lb.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, Lb.jsx)(Ab, {
                                qte: bb
                              })
                            }) : null
                          }))
                        }, 4535: (bb, ub, hb) => {
                          hb.d(ub, {
                            c: () => Lb,
                            g: () => Yb
                          });
                          var Bb = hb(49),
                            Ob = hb(1193),
                            Gb = hb(4542);
                          const Ub = {
                              getState: () => Gb.c.getCurrentState(),
                              onFrame: Ob.p
                            },
                            Lb = (0, Bb.createContext)(Ub);

                          function Yb() {
                            return (0, Bb.useContext)(Lb)
                          }
                        }, 4611: (bb, ub, hb) => {
                          hb.d(ub, {
                            e: () => Jb,
                            i: () => tb
                          });
                          var Bb = hb(4617),
                            Ob = hb(298);
                          const Gb = 120,
                            Ub = 260,
                            Lb = 1.15,
                            Yb = 1.2,
                            Sb = 2,
                            ab = 1.08,
                            Hb = .8,
                            wb = .95,
                            Zb = 8,
                            Xb = "[\"')\\]\u300d\u300f\uff09]*",
                            pb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Xb}$`),
                            ob = new RegExp(`[?\uff1f]${Xb}$`),
                            Ab = new RegExp(`[!\uff01]${Xb}$`),
                            lb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Kb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            Wb = new RegExp(`[${Kb}]`),
                            Cb = new RegExp(`[${Kb}]|[^${Kb}]+`, "g"),
                            db = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function rb(bb) {
                            let ub = 2166136261;
                            for (let hb = 0; hb < bb.length; hb++) ub ^= bb.charCodeAt(hb), ub = Math.imul(ub, 16777619);
                            return (ub >>> 0) / 4294967295 * 2 - 1
                          }

                          function jb(bb) {
                            var ub;
                            if (Wb.test(bb)) return 1;
                            const hb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Bb = hb.replace(/[^0-9]/g, "");
                            if (Bb.length > 0 && !/\p{L}/u.test(hb)) return Math.min(Bb.length, 4);
                            const Ob = null !== (ub = hb.match(db)) && void 0 !== ub ? ub : [];
                            if (0 === Ob.length) {
                              var Gb, Ub;
                              const bb = null !== (Gb = null === (Ub = hb.match(/\p{L}/gu)) || void 0 === Ub ? void 0 : Ub.length) && void 0 !== Gb ? Gb : 0;
                              return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), Zb)
                            }
                            const Lb = hb.replace(/[^\p{L}]/gu, ""),
                              Yb = Ob.length > 1 && "e" === Ob.at(-1) && Lb.endsWith("e") && !Lb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Ob.length - (Yb ? 1 : 0), Zb)
                          }

                          function nb(bb) {
                            return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Db(bb) {
                            const ub = bb.replace(/[^\p{L}]/gu, "");
                            return ub.length >= 2 && ub === ub.toUpperCase() && ub !== ub.toLowerCase()
                          }

                          function xb(bb, ub) {
                            var hb;
                            const Zb = ub && (0, Bb.l)(ub),
                              Xb = null !== (hb = null === Zb || void 0 === Zb ? void 0 : Zb.syllableMs) && void 0 !== hb ? hb : Bb.d,
                              Kb = function(bb) {
                                const ub = [];
                                for (const Bb of (0, Ob.nc)(bb))
                                  if ("string" === typeof Bb)
                                    for (const bb of Bb.split(/(\s+)/)) {
                                      if ("" === bb) continue;
                                      if (/^\s+$/.test(bb)) {
                                        ub.push({
                                          kind: "space",
                                          text: bb
                                        });
                                        continue
                                      }
                                      if (!Wb.test(bb)) {
                                        ub.push({
                                          kind: "word",
                                          text: bb,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Bb = !0;
                                      for (const Ob of null !== (hb = bb.match(Cb)) && void 0 !== hb ? hb : []) {
                                        var hb;
                                        const bb = ub.at(-1);
                                        Bb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || Wb.test(Ob) || /[\p{L}\p{N}]/u.test(Ob) ? (Bb || ub.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), ub.push({
                                          kind: "word",
                                          text: Ob,
                                          delayMs: 0
                                        }), Bb = !1) : bb.text += Ob
                                      }
                                    } else ub.push({
                                      kind: "icon",
                                      text: Bb.icon,
                                      delayMs: 0
                                    });
                                return ub
                              }(bb),
                              db = [];
                            let xb = [];
                            for (const Bb of Kb) "space" !== Bb.kind && (xb.push(Bb), pb.test(Bb.text) && (db.push(xb), xb = []));
                            db.push(xb);
                            const zb = [];
                            let gb = 0;
                            for (const Bb of db) {
                              var ib, vb;
                              const bb = null !== (ib = null === (vb = Bb.at(-1)) || void 0 === vb ? void 0 : vb.text) && void 0 !== ib ? ib : "",
                                ub = ob.test(bb),
                                hb = Ab.test(bb),
                                Ob = Bb.map((bb => "word" === bb.kind ? jb(bb.text) : 1)),
                                Kb = Ob.findLastIndex((bb => bb > 0));
                              for (const [ob, Ab] of Bb.entries()) {
                                const bb = "word" === Ab.kind,
                                  Bb = Ob[ob];
                                Ab.delayMs = gb;
                                for (let Ob = 0; Zb && Ob < Bb; Ob++) {
                                  const {
                                    intonation: Gb
                                  } = Zb;
                                  let Ub = Kb > 0 ? -Gb.declineSemitones * (ob / Kb) : 0;
                                  Ub += rb(`${nb(Ab.text)}|${Ob}`) * Gb.variationSemitones;
                                  const pb = Math.min(1, Gb.variationSemitones);
                                  let lb = Zb.glideSemitones,
                                    Wb = 1;
                                  hb && (Ub += Gb.exclaimLiftSemitones, Wb *= Lb), ub && ob === Kb && (Ub += Gb.questionRiseSemitones * (Bb > 1 ? .5 + .5 * Ob / (Bb - 1) : 1), Ob === Bb - 1 && (lb = Math.abs(lb) + Gb.questionRiseSemitones / 2)), bb && Db(Ab.text) && (Ub += Sb * pb, Wb *= Yb), Bb > 1 && 0 === Ob && (Ub += Hb * pb, Wb *= ab), zb.push({
                                    atMs: gb + Ob * Xb,
                                    semitones: Ub,
                                    glideSemitones: lb,
                                    durationMs: Ob < Bb - 1 ? Math.min(Zb.durationMs, Xb * wb) : Zb.durationMs,
                                    level: Wb
                                  })
                                }
                                gb += Bb * Xb + (pb.test(Ab.text) ? Ub : lb.test(Ab.text) ? Gb : 0)
                              }
                            }
                            return {
                              pieces: Kb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
                                kind: "icon",
                                icon: bb.text,
                                delayMs: bb.delayMs
                              } : {
                                kind: "word",
                                text: bb.text,
                                delayMs: bb.delayMs
                              })),
                              blips: zb
                            }
                          }
                          var zb = hb(1095),
                            gb = hb(1144),
                            ib = hb(1819);

                          function vb(bb) {
                            if ("string" === typeof bb) return bb;
                            const ub = gb.h.get().getCurrentLanguageCode();
                            return (0, zb.w)(ub, bb.translationKey, (0, zb.s)(bb.params, ib.d.shown))
                          }

                          function tb(bb) {
                            const ub = void 0 === bb.voice ? null : (0, Bb.o)(bb.voice),
                              hb = ub && (0, Bb.l)(ub);
                            return {
                              plan: xb(vb(bb.line), hb),
                              synth: hb
                            }
                          }

                          function Jb(bb) {
                            const ub = [];
                            let hb = [];
                            for (const [Ob, Gb] of bb.entries()) {
                              var Bb;
                              "space" === Gb.kind && (" " !== Gb.text || "icon" !== (null === (Bb = bb[Ob + 1]) || void 0 === Bb ? void 0 : Bb.kind)) ? (hb.length > 0 && ub.push(hb), ub.push([Gb]), hb = []) : hb.push(Gb)
                            }
                            return hb.length > 0 && ub.push(hb), ub
                          }
                        }, 4620: (bb, ub, hb) => {
                          hb.d(ub, {
                            c: () => ab,
                            f: () => Hb
                          });
                          var Bb = hb(4626),
                            Ob = hb(13);
                          const Gb = .25,
                            Ub = .85,
                            Lb = .02,
                            Yb = .01;

                          function Sb(bb, ub, hb, Bb, Ob, Gb, Lb) {
                            const {
                              waveform: Yb,
                              pitchHz: Sb,
                              attackMs: ab,
                              releaseMs: Hb,
                              lowpassHz: wb
                            } = hb, Zb = Ob + Bb.durationMs / 1e3, Xb = Sb * 2 ** (Bb.semitones / 12), pb = bb.createOscillator();
                            pb.type = Yb, pb.frequency.setValueAtTime(Xb, Ob), pb.frequency.exponentialRampToValueAtTime(Xb * 2 ** (Bb.glideSemitones / 12), Zb);
                            const ob = Ob + Math.min(ab, Bb.durationMs) / 1e3,
                              Ab = bb.createGain();
                            Ab.gain.setValueAtTime(0, Ob), Ab.gain.linearRampToValueAtTime(Gb, ob), Ab.gain.linearRampToValueAtTime(Gb * Ub, Math.max(ob, Zb - Hb / 1e3)), Ab.gain.linearRampToValueAtTime(0, Zb);
                            const lb = [pb];
                            if (null !== wb) {
                              const ub = bb.createBiquadFilter();
                              ub.type = "lowpass", ub.frequency.value = wb, lb.push(ub)
                            }
                            lb.push(Ab, ub);
                            for (let Ub = 1; Ub < lb.length; Ub++) lb[Ub - 1].connect(lb[Ub]);
                            return pb.onended = () => {
                              for (const bb of lb.slice(0, -1)) bb.disconnect();
                              Lb()
                            }, pb.start(Ob), pb.stop(Zb), pb
                          }

                          function ab(bb, ub, hb, Bb, Ob, Ub) {
                            if (0 === Bb.length) return Ub(), () => {};
                            const ab = Gb * hb.volume * Ob,
                              Hb = bb.createGain();
                            Hb.connect(ub);
                            const wb = bb.currentTime + Lb,
                              Zb = new Set;
                            for (const Gb of Bb) {
                              const ub = Sb(bb, Hb, hb, Gb, wb + Gb.atMs / 1e3, ab * Gb.level, (() => {
                                Zb.delete(ub), 0 === Zb.size && (Hb.disconnect(), Ub())
                              }));
                              Zb.add(ub)
                            }
                            return () => {
                              const ub = bb.currentTime;
                              Hb.gain.setTargetAtTime(0, ub, Yb);
                              for (const bb of Zb) try {
                                bb.stop(ub + 5 * Yb)
                              } catch {}
                            }
                          }

                          function Hb(bb, ub) {
                            var hb;
                            const Gb = Bb.Howler.ctx,
                              Ub = Bb.Howler.masterGain;
                            if (!Gb || !Ub || !Ob.d.get("soundOnFromAd")) return () => {};
                            const Lb = Bb.Howler;
                            return null === (hb = Lb._autoResume) || void 0 === hb || hb.call(Lb), ab(Gb, Ub, bb, ub, Ob.d.get("soundVolume"), (() => {
                              var bb;
                              null === (bb = Lb._autoSuspend) || void 0 === bb || bb.call(Lb)
                            }))
                          }
                        }, 4626: (bb, ub, hb) => {
                          hb.r(ub), hb.d(ub, {
                            Howl: () => Ob.Howl,
                            Howler: () => Ob.Howler,
                            musicOutput: () => Xb,
                            readyAudioContext: () => pb
                          });
                          var Bb, Ob = hb(4629),
                            Gb = hb(4415);
                          const Ub = Ob.Howler;

                          function Lb() {
                            var bb, ub;
                            if (Ub.ctx || !Ub.usingWebAudio || "undefined" === typeof AudioContext || !(0, Gb.d)()) return;
                            const hb = navigator.audioSession;
                            let Bb;
                            "auto" === (null === hb || void 0 === hb ? void 0 : hb.type) && (hb.type = "ambient");
                            try {
                              Bb = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Ob = Bb.createGain();
                            Ob.gain.setValueAtTime(Ub._muted ? 0 : null !== (bb = Ub._volume) && void 0 !== bb ? bb : 1, Bb.currentTime), Ob.connect(Bb.destination), Ub.ctx = Bb, Ub.masterGain = Ob, null === (ub = Ub._setup) || void 0 === ub || ub.call(Ub)
                          }
                          Ub._mobileUnloaded = !0;
                          const Yb = Ub.volume.bind(Ob.Howler);
                          Ub.volume = function() {
                            return Lb(), Yb(...arguments)
                          };
                          const Sb = Ub.mute.bind(Ob.Howler);
                          Ub.mute = bb => (Lb(), Sb(bb));
                          const ab = Ob.Howl.prototype,
                            Hb = ab.init;
                          ab.init = function(bb) {
                            return Lb(), Hb.call(this, bb)
                          };
                          let wb = 0;
                          const Zb = null === (Bb = Ub._autoSuspend) || void 0 === Bb ? void 0 : Bb.bind(Ob.Howler);

                          function Xb() {
                            pb();
                            const {
                              ctx: bb,
                              masterGain: ub
                            } = Ub;
                            return bb && ub ? {
                              ctx: bb,
                              destination: ub,
                              holdAwake: bb => {
                                var ub, hb;
                                (wb += bb ? 1 : -1, bb) ? null === (ub = Ub._autoResume) || void 0 === ub || ub.call(Ub): null === (hb = Ub._autoSuspend) || void 0 === hb || hb.call(Ub)
                              },
                              wake: () => {
                                var ub;
                                "running" !== bb.state && (null === (ub = Ub._autoResume) || void 0 === ub || ub.call(Ub), bb.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function pb() {
                            var bb;
                            (Ub.volume(), Ub.ctx && Ub.autoUnlock) && (null === (bb = Ub._unlockAudio) || void 0 === bb || bb.call(Ub))
                          }
                          Zb && (Ub._autoSuspend = () => wb > 0 ? Ob.Howler : Zb())
                        }, 4637: (bb, ub, hb) => {
                          function Bb(bb) {
                            return {
                              notAfter: bb
                            }
                          }
                          hb.d(ub, {
                            b: () => Yb,
                            f: () => Sb,
                            i: () => Lb,
                            j: () => Bb,
                            m: () => Ob,
                            p: () => Gb,
                            r: () => Ub,
                            v: () => ab,
                            z: () => Hb
                          });
                          const Ob = Bb("\\w$."),
                            Gb = Bb("\\w.,");

                          function Ub(bb) {
                            return ub => Yb(ub, bb)
                          }

                          function Lb(bb) {
                            return ub => !bb.test(ub.input.slice(0, ub.index))
                          }

                          function Yb(bb, ub) {
                            return bb.index > 0 && new RegExp(`[${ub}]`).test(bb.input[bb.index - 1])
                          }

                          function Sb(bb, ub, hb) {
                            return function(bb) {
                              return void 0 !== bb && "function" !== typeof bb
                            }(hb) ? function(bb, ub, hb) {
                              const Bb = ub.flags.replace(/[gy]/g, ""),
                                Ob = new RegExp(`[^${hb}](?:${ub.source})`, `${Bb}g`),
                                Gb = [],
                                Ub = hb => {
                                  const Bb = hb.index + hb[0].length;
                                  return ("" === hb[0] ? wb(bb, ub, Bb) : Bb) - 1
                                },
                                Lb = new RegExp(`(?:${ub.source})`, `${Bb}y`).exec(bb);
                              if (Lb) {
                                if (Gb.push(Lb), !ub.global) return Gb;
                                Ob.lastIndex = Ub(Lb)
                              }
                              for (let Yb = Ob.exec(bb); Yb; Yb = Ob.exec(bb)) {
                                const hb = wb(bb, ub, Yb.index) - Yb.index;
                                if (Yb[0] = Yb[0].slice(hb), Yb.index += hb, Gb.push(Yb), !ub.global) break;
                                Ob.lastIndex = Ub(Yb)
                              }
                              return Gb
                            }(bb, ub, hb.notAfter) : function(bb, ub, hb) {
                              const Bb = new RegExp(ub.source, `${ub.flags.replace(/[gy]/g,"")}g`),
                                Ob = [];
                              for (let Gb = Bb.exec(bb); Gb; Gb = Bb.exec(bb))
                                if (!hb || hb(Gb)) {
                                  if (Ob.push(Gb), !ub.global) break;
                                  "" === Gb[0] && (Bb.lastIndex = wb(bb, ub, Bb.lastIndex))
                                } else Bb.lastIndex = wb(bb, ub, Gb.index);
                              return Ob
                            }(bb, ub, hb)
                          }

                          function ab(bb, ub, hb, Bb) {
                            let Ob = "",
                              Gb = 0;
                            for (const Ub of Sb(bb, ub, hb)) Ob += bb.slice(Gb, Ub.index) + Bb(Ub), Gb = Ub.index + Ub[0].length;
                            return Ob + bb.slice(Gb)
                          }

                          function Hb(bb, ub, hb) {
                            const Bb = [];
                            let Ob = 0;
                            for (const Gb of Sb(bb, ub, hb)) Bb.push(bb.slice(Ob, Gb.index)), Ob = Gb.index + Gb[0].length;
                            return [...Bb, bb.slice(Ob)]
                          }

                          function wb(bb, ub, hb) {
                            var Bb;
                            return hb + (ub.unicode && (null !== (Bb = bb.codePointAt(hb)) && void 0 !== Bb ? Bb : 0) > 65535 ? 2 : 1)
                          }
                        }, 4592: (bb, ub, hb) => {
                          hb.d(ub, {
                            c: () => Ob,
                            d: () => Yb,
                            h: () => Gb,
                            i: () => Ub,
                            m: () => Lb,
                            o: () => ob,
                            q: () => ab,
                            s: () => Hb,
                            v: () => pb,
                            z: () => Zb
                          });
                          var Bb = hb(1482);
                          const Ob = 24e3,
                            Gb = "/docs/llms.txt",
                            Ub = `${Bb.d}${Gb}`,
                            Lb = "/llms.txt",
                            Yb = "/docs/llms-full.txt";

                          function Sb(bb) {
                            return bb || "index"
                          }

                          function ab(bb) {
                            return `/docs/${Sb(bb)}.md`
                          }

                          function Hb(bb, ub) {
                            return `/docs/${Sb(bb)}/${ub+1}.md`
                          }
                          const wb = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Zb(bb) {
                            const ub = wb.exec(bb);
                            return null === ub ? null : {
                              name: ub[1],
                              part: void 0 === ub[2] ? null : Number(ub[2])
                            }
                          }
                          const Xb = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function pb(bb) {
                            const ub = Xb.exec(bb);
                            if (null === ub) return null;
                            const [, hb = "", Bb] = ub;
                            return void 0 === Bb ? ab(hb) : Hb(hb, Number(Bb) - 1)
                          }

                          function ob(bb) {
                            return `/docsHtml/${Sb(bb)}.html`
                          }
                        }, 4617: (bb, ub, hb) => {
                          hb.d(ub, {
                            d: () => Ob,
                            h: () => Bb,
                            i: () => Gb,
                            l: () => Yb,
                            o: () => Ub
                          });
                          const Bb = ["sine", "triangle", "square", "sawtooth"],
                            Ob = 55,
                            Gb = {
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

                          function Ub(bb) {
                            return "string" !== typeof bb ? bb : Object.hasOwn(Gb, bb) ? Gb[bb] : null
                          }

                          function Lb(bb, ub, hb) {
                            return Math.min(hb, Math.max(ub, bb))
                          }

                          function Yb(bb) {
                            const ub = Lb(bb.durationMs, 10, 500),
                              hb = Lb(bb.attackMs, 0, ub),
                              {
                                intonation: Ob
                              } = bb;
                            return {
                              waveform: Bb.includes(bb.waveform) ? bb.waveform : "sine",
                              pitchHz: Lb(bb.pitchHz, 20, 4e3),
                              glideSemitones: Lb(bb.glideSemitones, -24, 24),
                              durationMs: ub,
                              attackMs: hb,
                              releaseMs: Lb(bb.releaseMs, 0, ub - hb),
                              lowpassHz: null === bb.lowpassHz ? null : Lb(bb.lowpassHz, 20, 2e4),
                              volume: Lb(bb.volume, 0, 2),
                              intonation: {
                                variationSemitones: Lb(Ob.variationSemitones, 0, 6),
                                declineSemitones: Lb(Ob.declineSemitones, 0, 12),
                                questionRiseSemitones: Lb(Ob.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: Lb(Ob.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: Lb(bb.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const bb in modules) Object.freeze(modules[bb]);