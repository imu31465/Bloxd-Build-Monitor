export const id = 94;
export const ids = [94, 110];
export const modules = {
    5730: (bb, wb, Mb) => {
      Mb.d(wb, {
        d: () => Fb,
        e: () => Bb
      });
      var eb = Mb(1159),
        Hb = Mb.n(eb),
        pb = Mb(64),
        Vb = Mb(1259),
        gb = Mb(5734),
        lb = Mb(2116),
        Lb = Mb(3503),
        Ib = Mb(5743),
        Ob = Mb(1364);
      const Ub = new WeakMap;
      let tb = 0;

      function Cb(bb) {
        let wb = Ub.get(bb);
        return void 0 === wb && (wb = tb++, Ub.set(bb, wb)), wb
      }

      function Eb(bb) {
        let {
          piece: wb
        } = bb;
        return "space" === wb.kind ? (0, Ob.jsx)(Ob.Fragment, {
          children: wb.text
        }) : (0, Ob.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${wb.delayMs}ms`
          },
          children: (0, Ob.jsx)(gb.b, {
            text: "icon" === wb.kind ? `[[${wb.icon}]]` : wb.text
          })
        })
      }

      function Fb(bb) {
        let {
          display: wb
        } = bb;
        const {
          selectedLanguage: Mb
        } = (0, Vb.C)(), eb = (0, pb.useMemo)((() => (0, Ib.e)((0, Ib.f)(wb).plan.pieces)), [wb, Mb.code]);
        return (0, Ob.jsxs)("div", {
          className: Hb()("Dialogue", {
            DialogueAnimateIn: !1 !== wb.animateIn
          }),
          children: [wb.speakerName && (0, Ob.jsx)(lb.d, {
            text: wb.speakerName,
            className: "DialogueSpeaker"
          }), (0, Ob.jsx)("p", {
            className: "DialogueLine",
            children: eb.map(((bb, wb) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Ob.jsx)("span", {
              className: "DialogueGlue",
              children: bb.map(((bb, wb) => (0, Ob.jsx)(Eb, {
                piece: bb
              }, wb)))
            }, wb)))
          })]
        })
      }
      const Bb = (0, pb.memo)((function() {
        const bb = (0, Lb.k)("dialogue");
        return (0, Ob.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: bb && (0, Ob.jsx)(Fb, {
            display: bb
          }, Cb(bb))
        })
      }))
    },
    5610: (bb, wb, Mb) => {
        Mb.r(wb), Mb.d(wb, {
          default: () => wV
        });
        var eb = Mb(64),
          Hb = Mb(1159),
          pb = Mb.n(Hb),
          Vb = Mb(1693),
          gb = Mb(1696),
          lb = Mb(26),
          Lb = Mb(81),
          Ib = Mb(5612),
          Ob = Mb(5620),
          Ub = Mb(5627),
          tb = Mb(5185),
          Cb = Mb(1364);
        const Eb = "/textures/docs/icons";

        function Fb(bb) {
          let {
            name: wb,
            isTinted: Mb,
            className: eb,
            style: Hb
          } = bb;
          const Vb = `${Eb}/${wb}.png`;
          return Mb ? (0, Cb.jsxs)("span", {
            className: pb()("DocsPixelIcon", "Tinted", eb),
            "aria-hidden": "true",
            style: Hb,
            children: [(0, Cb.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Vb}")`,
                WebkitMaskImage: `url("${Vb}")`
              }
            }), (0, Cb.jsx)("img", {
              src: Vb,
              alt: ""
            })]
          }) : (0, Cb.jsx)("img", {
            className: pb()("DocsPixelIcon", eb),
            src: Vb,
            alt: "",
            "aria-hidden": "true",
            style: Hb
          })
        }
        const Bb = 1500;

        function sb() {
          const [bb, wb] = (0, eb.useState)(null);
          (0, eb.useEffect)((() => {
            if (null === bb) return;
            const Mb = setTimeout((() => {
              wb(null)
            }), Bb);
            return () => {
              clearTimeout(Mb)
            }
          }), [bb]);
          return [bb, bb => {
            (0, tb.d)(bb).then((() => {
              wb({
                text: bb,
                failed: !1
              })
            }), (Mb => {
              console.error("Could not copy to the clipboard", Mb), wb({
                text: bb,
                failed: !0
              })
            }))
          }]
        }

        function mb(bb) {
          let {
            text: wb,
            label: Mb,
            className: eb
          } = bb;
          const [Hb, Vb] = sb(), gb = !1 === (null === Hb || void 0 === Hb ? void 0 : Hb.failed);
          return (0, Cb.jsxs)("button", {
            type: "button",
            className: pb()("DocsCopyButton", eb, {
              Copied: gb
            }),
            title: "Copy to clipboard",
            "aria-label": Mb ? void 0 : `Copy ${wb}`,
            onClick: bb => {
              bb.stopPropagation(), Vb(wb)
            },
            children: [(0, Cb.jsx)(Fb, {
              name: gb ? "check" : "copy"
            }), Mb && (0, Cb.jsx)("span", {
              children: gb ? "Copied" : null !== Hb && void 0 !== Hb && Hb.failed ? "Copy failed" : Mb
            })]
          })
        }
        Ib.d.registerLanguage("javascript", Ob.d), Ib.d.registerLanguage("typescript", Ub.b);
        const hb = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          zb = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          Xb = 24;

        function xb(bb) {
          let {
            code: wb,
            lang: Mb,
            compact: Hb = !1
          } = bb;
          const Vb = (0, eb.useMemo)((() => function(bb, wb) {
              const Mb = hb[wb];
              return Mb ? Ib.d.highlight(bb, {
                language: Mb
              }).value : bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(wb, Mb)), [wb, Mb]),
            gb = wb.split("\n").length,
            lb = !Hb && gb > Xb + 6,
            [Lb, Ob] = (0, eb.useState)(!1),
            Ub = hb[Mb];
          return (0, Cb.jsxs)("div", {
            className: pb()("DocsCodeBlock", {
              Compact: Hb,
              Collapsed: lb && !Lb
            }),
            children: [!Hb && (0, Cb.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, Cb.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Ub ? zb[Ub] : "Text"
              }), (0, Cb.jsx)(mb, {
                text: wb,
                label: "Copy"
              })]
            }), (0, Cb.jsx)("pre", {
              children: (0, Cb.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Vb
                }
              })
            }), lb && (0, Cb.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Lb,
              onClick: () => {
                Ob(!Lb)
              },
              children: [(0, Cb.jsx)(Fb, {
                name: Lb ? "chevron-up" : "chevron-down"
              }), Lb ? "Show less" : `Show all ${gb} lines`]
            })]
          })
        }
        var jb = Mb(5629);
        var Kb = Mb(5637);
        const rb = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Rb(bb) {
          const wb = new Map;
          let Mb, eb = [],
            Hb = !1;
          const pb = () => {
            Mb && wb.set(Mb.name, Mb.lines.join("\n").trimEnd())
          };
          for (const Vb of bb.split("\n")) {
            const bb = Vb.match(rb);
            Hb || Vb.startsWith("/*") ? (Hb || (pb(), Mb = void 0), eb.push(Vb), Hb = !Vb.includes("*/")) : bb ? (pb(), Mb = {
              name: bb[1],
              lines: [...eb, Vb]
            }, eb = []) : Mb && (Vb.startsWith(" ") || Vb.startsWith("\t") || /^[}\])|]/.test(Vb)) ? Mb.lines.push(Vb) : Mb && "" !== Vb.trim() && (pb(), Mb = void 0)
          }
          return pb(), wb
        }

        function Db(bb) {
          return "methods" === bb || "callbacks" === bb || "settings" === bb
        }
        const cb = {
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
              setterSnippet: (bb, wb) => `api.setClientOption(playerId, "${bb}", ${wb})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (bb, wb) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${bb}", ${wb})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (bb, wb) => `api.setMobSetting(mobId, "${bb}", ${wb})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (bb, wb) => `api.setVehicleSetting(vehicleId, "${bb}", ${wb})`
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
          Yb = {
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

        function Zb(bb) {
          return bb.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function fb(bb) {
          let wb = !1;
          return bb.split("\n").map((bb => (bb.startsWith("```") && (wb = !wb), !wb && /^#{3,} /.test(bb) ? bb.slice(1) : bb))).join("\n")
        }

        function Ab(bb) {
          return "readme" === bb ? "getting-started" : Zb(bb)
        }
        const Wb = "## Glossary of Referenced Types";
        const Jb = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...Kb.b.flatMap((bb => {
            const wb = {
              id: bb.id,
              slug: Ab(bb.id),
              title: bb.title,
              markdown: bb.content,
              ...cb[bb.id]
            };
            if ("readme" === bb.id) return function(bb) {
              const wb = bb.markdown.indexOf(Wb),
                Mb = bb.markdown.indexOf("\n```", wb),
                eb = bb.markdown.indexOf("\n```", Mb + 1);
              if (-1 === wb || -1 === Mb || -1 === eb) throw new Error(`Getting started has no "${Wb}" section with a code block`);
              const Hb = bb.markdown.slice(wb + 31, Mb).trim(),
                pb = [...Rb(bb.markdown.slice(bb.markdown.indexOf("\n", Mb + 1) + 1, eb))].map((bb => {
                  let [wb, Mb] = bb;
                  return `## ${wb}\n\n\`\`\`ts\n${Mb}\n\`\`\`\n`
                })),
                Vb = bb.markdown.slice(bb.markdown.indexOf("\n", eb + 1) + 1);
              return [{
                ...bb,
                markdown: `${bb.markdown.slice(0,wb)}${Vb}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Hb}\n\n${pb.join("\n")}`
              }]
            }(wb);
            if ("howTo" === bb.id) {
              const {
                parent: bb,
                guides: Mb
              } = function(bb) {
                const [wb, ...Mb] = bb.markdown.split(/^(?=## )/m), eb = [wb], Hb = [];
                for (const Vb of Mb) {
                  var pb;
                  const wb = Vb.indexOf("\n"),
                    Mb = Vb.slice(3, wb).trim(),
                    gb = Vb.slice(wb + 1);
                  if (!gb.includes("```")) {
                    eb.push(Vb);
                    continue
                  }
                  const lb = null !== (pb = Yb[Mb]) && void 0 !== pb ? pb : {
                    icon: "lightbulb",
                    summary: `How to use ${Mb.toLowerCase()} in World Code.`
                  };
                  Hb.push({
                    id: `${bb.id}${Mb.split(/[^A-Za-z0-9]+/).map((bb=>bb.charAt(0).toUpperCase()+bb.slice(1))).join("")}`,
                    slug: `${bb.slug}-${Zb(Mb)}`,
                    title: Mb,
                    layout: "article",
                    sourceAnchor: (0, jb.s)(Mb),
                    markdown: `# ${Mb}\n\n${fb(gb)}`,
                    ...lb
                  })
                }
                return {
                  parent: {
                    ...bb,
                    markdown: eb.join(""),
                    childPageIds: Hb.map((bb => bb.id))
                  },
                  guides: Hb
                }
              }(wb);
              return [bb, ...Mb]
            }
            return [wb]
          }))],
          Sb = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Jb.filter((bb => void 0 !== bb.sourceAnchor)).map((bb => bb.id))]
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

        function Nb(bb) {
          return Jb.find((wb => wb.id === bb))
        }
        const vb = new Map;

        function Qb(bb) {
          let wb = vb.get(bb.id);
          return wb || (wb = (0, jb.A)(bb.markdown, "changelog" === bb.layout ? 3 : 2), vb.set(bb.id, wb)), wb
        }

        function Gb(bb, wb) {
          return Qb(bb).sections.some((bb => bb.heading.anchor === wb || bb.blocks.some((bb => "heading" === bb.kind && bb.anchor === wb))))
        }

        function qb(bb) {
          const [wb, ...Mb] = bb.replace(/^#/, "").split("-"), eb = Jb.find((bb => bb.id === wb));
          if (!eb) return null;
          const Hb = Mb.length > 0 ? (0, jb.s)(Mb.join("-")) : "";
          for (const Vb of null !== (pb = eb.childPageIds) && void 0 !== pb ? pb : []) {
            var pb;
            const bb = Nb(Vb);
            if (bb.sourceAnchor === Hb) return {
              page: bb,
              anchor: ""
            };
            if (Gb(bb, Hb)) return {
              page: bb,
              anchor: Hb
            }
          }
          return {
            page: eb,
            anchor: Hb
          }
        }
        const ab = {
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

        function ib(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const eb = wb.slug ? `${bb}/${wb.slug}` : bb;
          return Mb ? `${eb}#${Mb}` : eb
        }
        var ub = Mb(5652);
        const db = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Pb = new Set(["GameApi", "Console", "_TypeOf"]),
          nb = 4;

        function yb(bb) {
          let wb = bb.length;
          for (; wb > 0 && "" === bb[wb - 1].trim();) wb--;
          return bb.slice(0, wb)
        }

        function ob(bb) {
          var wb;
          const Mb = yb(bb);
          if (null === (wb = Mb.at(-1)) || void 0 === wb || !wb.trimEnd().endsWith("*/")) return {
            lines: Mb,
            doc: ""
          };
          const eb = Mb.findLastIndex((bb => bb.startsWith("/**")));
          return -1 === eb ? {
            lines: Mb,
            doc: ""
          } : {
            lines: yb(Mb.slice(0, eb)),
            doc: Mb.slice(eb).join("\n")
          }
        }

        function Tb(bb) {
          var wb;
          const Mb = bb.split("\n"),
            eb = Mb.flatMap(((bb, wb) => db.test(bb) ? [wb] : []));
          let Hb = ob(Mb.slice(0, null !== (wb = eb[0]) && void 0 !== wb ? wb : Mb.length)).doc;
          return eb.map(((bb, wb) => {
            var pb;
            const Vb = ob(Mb.slice(bb, null !== (pb = eb[wb + 1]) && void 0 !== pb ? pb : Mb.length)),
              gb = {
                name: Mb[bb].match(db)[1],
                doc: Hb,
                lines: Vb.lines
              };
            return Hb = Vb.doc, gb
          }))
        }

        function kb(bb) {
          var wb;
          const Mb = bb.match(/^readonly \[([\s\S]*)\]$/);
          return Mb ? null !== (wb = Mb[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== wb ? wb : [] : null
        }

        function bw(bb) {
          if (!bb.startsWith("{") || !bb.endsWith("}")) return null;
          const wb = {
              keys: [],
              values: []
            },
            Mb = bb => {
              const Mb = bb.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              Mb && (wb.keys.push(Mb[1].startsWith('"') ? Mb[1] : `"${Mb[1]}"`), wb.values.push(Mb[2].trim()))
            };
          let eb = 0,
            Hb = "";
          for (const pb of bb.slice(1, -1)) "{[(".includes(pb) ? eb++ : "}])".includes(pb) && eb--, ";" === pb && 0 === eb ? (Mb(Hb), Hb = "") : Hb += pb;
          return Mb(Hb), wb
        }

        function ww(bb) {
          return bb.length > nb ? `\n\t| ${bb.join("\n\t| ")}` : bb.join(" | ")
        }

        function Mw(bb, wb) {
          const Mb = function(bb, wb) {
            return bb.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((bb, Mb) => {
              var eb;
              const Hb = null === (eb = wb.get(Mb)) || void 0 === eb ? void 0 : eb.object;
              return Hb ? ww(Hb.values) : bb
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((bb, Mb) => {
              var eb, Hb;
              const pb = null === (eb = wb.get(Mb)) || void 0 === eb || null === (Hb = eb.object) || void 0 === Hb ? void 0 : Hb.values.map(kb);
              return null !== pb && void 0 !== pb && pb.every((bb => null !== bb)) ? ww([...new Set(pb.flat())]) : bb
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((bb, Mb) => {
              var eb;
              const Hb = null === (eb = wb.get(Mb)) || void 0 === eb ? void 0 : eb.members;
              return Hb ? ww(Hb) : bb
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((bb, Mb) => {
              var eb;
              const Hb = null === (eb = wb.get(Mb)) || void 0 === eb ? void 0 : eb.object;
              return Hb ? ww(Hb.keys) : bb
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((bb, Mb) => {
              var eb, Hb;
              return null !== (eb = null === (Hb = wb.get(Mb)) || void 0 === Hb ? void 0 : Hb.text) && void 0 !== eb ? eb : bb
            }))
          }(bb.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), wb);
          return [bb.doc, Mb].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function ew(bb) {
          const wb = Tb(bb),
            Mb = function(bb) {
              const wb = new Map,
                Mb = bb.find((bb => "_TypeOf" === bb.name));
              let eb = null;
              const Hb = () => {
                if (eb) {
                  const bb = eb.lines.join("\n");
                  wb.set(eb.name, {
                    text: bb,
                    members: kb(bb),
                    object: bw(bb)
                  })
                }
              };
              for (const pb of Mb.lines.slice(1, -1)) {
                const bb = pb.match(/^\t([\w$]+): (.+)$/);
                bb ? (Hb(), eb = {
                  name: bb[1],
                  lines: [bb[2]]
                }) : eb && eb.lines.push(pb.replace(/^\t/, ""))
              }
              return Hb(), wb
            }(wb),
            eb = new Map;
          for (const Hb of wb) Pb.has(Hb.name) || eb.has(Hb.name) || eb.set(Hb.name, Mw(Hb, Mb));
          return eb
        }
        let Hw, pw, Vw;

        function gw() {
          return pw ??= function(bb) {
            const wb = Tb(bb).find((bb => "GameApi" === bb.name)),
              Mb = new Map,
              eb = wb.lines;
            for (let pb = 0; pb < eb.length; pb++) {
              var Hb;
              if (!eb[pb].trimStart().startsWith("/**")) continue;
              const bb = pb;
              for (; pb < eb.length && !eb[pb].includes("*/");) pb++;
              const wb = null === (Hb = eb[pb + 1]) || void 0 === Hb ? void 0 : Hb.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!wb) continue;
              let Vb = null;
              const gb = [];
              let lb = "description",
                Lb = !1;
              for (const Mb of eb.slice(bb, pb + 1).join("\n").split("\n").map((bb => bb.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const bb = Mb.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                bb ? (Vb = bb[1].trim(), lb = "deprecation") : Mb.startsWith("@") ? (lb = "otherTag", Lb = !0) : "" === Mb.trim() ? Lb || (lb = "description", gb.push(Mb)) : "deprecation" !== lb || /^[A-Z]/.test(Mb.trim()) ? "otherTag" !== lb && (lb = "description", gb.push(Mb)) : Vb = `${Vb} ${Mb.trim()}`.trim()
              }
              Mb.set(wb[1], {
                deprecation: Vb,
                description: gb.join("\n").trim()
              })
            }
            return Mb
          }(ub.default), pw
        }

        function lw() {
          if (!Vw) {
            Vw = new Map;
            for (const bb of Jb) {
              const wb = (0, jb.w)(Qb(bb)).flatMap((bb => bb.blocks));
              for (const bb of (0, jb.k)(wb))
                if ("ts" === bb.lang || "typescript" === bb.lang)
                  for (const [wb, Mb] of Rb(bb.code)) Vw.set(wb, Mb)
            }
            for (const [bb, wb] of(Hw ??= ew(ub.default), Hw)) Vw.has(bb) || Vw.set(bb, wb)
          }
          return Vw
        }
        const Lw = {
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
        let Iw;

        function Ow() {
          if (!Iw) {
            Iw = new Map;
            for (const bb of Jb)
              if (Db(bb.layout))
                for (const wb of Qb(bb).sections) Iw.has(wb.heading.text) || Iw.set(wb.heading.text, {
                  pageId: bb.id,
                  anchor: wb.heading.anchor
                })
          }
          return Iw
        }

        function Uw(bb) {
          const wb = bb.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return wb ? Ow().get(wb[1]) : void 0
        }
        const tw = (0, eb.createContext)("/docs"),
          Cw = (0, eb.createContext)(null),
          Ew = (0, eb.createContext)(!1),
          Fw = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function Bw(bb) {
          const wb = bb.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return wb ? wb[1] : null
        }

        function sw(bb) {
          let {
            colour: wb
          } = bb;
          return (0, Cb.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: wb
            },
            "aria-hidden": "true"
          })
        }

        function mw(bb) {
          const wb = [];
          let Mb = 0;
          for (const eb of bb.matchAll(Fw)) wb.push(bb.slice(Mb, eb.index), (0, Cb.jsx)(sw, {
            colour: eb[0]
          }), eb[0]), Mb = eb.index + eb[0].length;
          return wb.push(bb.slice(Mb)), wb
        }

        function hw(bb) {
          let {
            href: wb,
            children: Mb
          } = bb;
          const Hb = (0, eb.useContext)(tw);
          if (wb.startsWith("#")) {
            const bb = qb(wb);
            if (bb) return (0, Cb.jsx)(Vb.b, {
              to: ib(Hb, bb.page, bb.anchor),
              children: (0, Cb.jsx)(Ew.Provider, {
                value: !0,
                children: Mb
              })
            })
          }
          return (0, Cb.jsx)("a", {
            href: wb,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, Cb.jsx)(Ew.Provider, {
              value: !0,
              children: Mb
            })
          })
        }

        function zw(bb) {
          let {
            code: wb
          } = bb;
          const Mb = (0, eb.useContext)(tw);
          if ((0, eb.useContext)(Ew)) return (0, Cb.jsx)("code", {
            className: "DocsInlineCode",
            children: wb
          });
          if (lw().has(wb)) return (0, Cb.jsx)(Kw, {
            type: wb
          });
          const Hb = Uw(wb);
          if (Hb) return (0, Cb.jsx)(Vb.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: ib(Mb, Nb(Hb.pageId), Hb.anchor),
            children: wb
          });
          const pb = Bw(wb);
          return (0, Cb.jsxs)("code", {
            className: "DocsInlineCode",
            children: [pb && (0, Cb.jsx)(sw, {
              colour: pb
            }), wb]
          })
        }

        function Xw(bb) {
          let {
            text: wb
          } = bb;
          const Mb = [];
          let Hb = 0;
          for (const eb of wb.matchAll(jb.d)) {
            eb.index > Hb && Mb.push(...mw(wb.slice(Hb, eb.index)));
            const [, bb, pb, Vb, gb, lb] = eb;
            bb ? Mb.push((0, Cb.jsx)(zw, {
              code: (0, jb.n)(bb, pb)
            })) : Vb ? Mb.push((0, Cb.jsx)("strong", {
              children: (0, Cb.jsx)(Xw, {
                text: Vb
              })
            })) : Mb.push((0, Cb.jsx)(hw, {
              href: lb,
              children: (0, Cb.jsx)(Xw, {
                text: gb
              })
            })), Hb = eb.index + eb[0].length
          }
          return Hb < wb.length && Mb.push(...mw(wb.slice(Hb))), (0, Cb.jsx)(Cb.Fragment, {
            children: Mb.map(((bb, wb) => (0, Cb.jsx)(eb.Fragment, {
              children: bb
            }, wb)))
          })
        }
        const xw = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          jw = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function Kw(bb) {
          let {
            type: wb
          } = bb;
          const Mb = lw(),
            Hb = [];
          for (const eb of wb.trim().matchAll(xw)) {
            const [bb, wb, pb, Vb, gb] = eb;
            wb ? Hb.push((0, Cb.jsx)("span", {
              className: "DocsTypeString",
              children: bb
            })) : pb && Mb.has(pb) ? Hb.push((0, Cb.jsx)(Zw, {
              name: pb,
              definition: Mb.get(pb)
            })) : pb ? Hb.push((0, Cb.jsx)("span", {
              className: jw.has(pb) ? "DocsTypeKeyword" : "DocsTypeName",
              children: bb
            })) : Vb ? Hb.push((0, Cb.jsx)("span", {
              className: "DocsTypeNumber",
              children: bb
            })) : gb ? Hb.push(" ") : Hb.push((0, Cb.jsx)("span", {
              className: "DocsTypePunctuation",
              children: bb
            }))
          }
          return (0, Cb.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Hb.map(((bb, wb) => (0, Cb.jsx)(eb.Fragment, {
              children: bb
            }, wb)))
          })
        }
        const rw = 480,
          Rw = 6,
          Dw = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Yw = 0;

        function Zw(bb) {
          let {
            name: wb,
            definition: Mb
          } = bb;
          const Hb = (0, eb.useContext)(tw),
            pb = Lw[wb],
            gb = (0, eb.useRef)(null),
            lb = (0, eb.useRef)(null),
            Ib = (0, eb.useRef)(null),
            [Ob, Ub] = (0, eb.useState)(!1),
            [tb, Eb] = (0, eb.useState)(null),
            Bb = (0, eb.useRef)(),
            sb = (0, eb.useContext)(Cw),
            [mb] = (0, eb.useState)((() => "DocsTypePopover-" + Yw++)),
            hb = () => {
              clearTimeout(Bb.current), Ub(!0)
            },
            zb = () => {
              clearTimeout(Bb.current), Bb.current = setTimeout((() => {
                Ub(!1)
              }), 120)
            };
          return (0, eb.useEffect)((() => {
            if (!Ob) return;
            const bb = bb => {
              if ("Escape" === bb.key) {
                var wb, Mb;
                if (null !== (wb = lb.current) && void 0 !== wb && wb.contains(document.activeElement)) null === (Mb = gb.current) || void 0 === Mb || Mb.focus();
                Ub(!1)
              }
            };
            return document.addEventListener("keydown", bb), () => {
              document.removeEventListener("keydown", bb)
            }
          }), [Ob]), (0, eb.useEffect)((() => () => {
            clearTimeout(Bb.current)
          }), []), (0, eb.useLayoutEffect)((() => {
            if (!Ob || !gb.current || !lb.current) return void Eb(null);
            const bb = gb.current.getBoundingClientRect(),
              wb = lb.current.offsetHeight,
              Mb = Math.min(rw, window.innerWidth - 32),
              eb = Math.min(Math.max(16, bb.left), window.innerWidth - Mb - 16),
              Hb = bb.bottom + Rw + wb < window.innerHeight;
            Eb({
              left: eb,
              top: Hb ? bb.bottom + Rw : Math.max(16, bb.top - Rw - wb)
            })
          }), [Ob]), (0, Cb.jsxs)(Cb.Fragment, {
            children: [(0, Cb.jsx)("button", {
              type: "button",
              ref: gb,
              className: "DocsTypeLink",
              "aria-expanded": Ob,
              "aria-describedby": Ob ? mb : void 0,
              onMouseEnter: hb,
              onMouseLeave: zb,
              onFocus: hb,
              onBlur: zb,
              onKeyDown: bb => {
                "Tab" === bb.key && !bb.shiftKey && Ib.current && (bb.preventDefault(), Ib.current.focus())
              },
              onClick: hb,
              children: wb
            }), Ob && (0, Lb.createPortal)((0, Cb.jsxs)("span", {
              ref: lb,
              id: mb,
              className: "DocsTypePopover",
              role: "tooltip",
              style: tb ? {
                left: tb.left,
                top: tb.top,
                maxWidth: rw
              } : {
                visibility: "hidden"
              },
              onMouseEnter: hb,
              onMouseLeave: zb,
              onFocus: hb,
              onBlur: zb,
              children: [(0, Cb.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, Cb.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: wb
                }), pb && (0, Cb.jsxs)(Vb.b, {
                  ref: Ib,
                  className: "DocsTypePopoverLink",
                  to: ib(Hb, Nb(pb)),
                  onClick: () => {
                    Ub(!1)
                  },
                  onKeyDown: bb => {
                    if ("Tab" === bb.key) {
                      var wb;
                      if (bb.preventDefault(), bb.shiftKey || !gb.current || ! function(bb, wb) {
                          const Mb = [...document.querySelectorAll(Dw)],
                            eb = Mb.slice(Mb.indexOf(bb) + 1).find((bb => bb.getClientRects().length > 0 && !(null !== wb && void 0 !== wb && wb.contains(bb))));
                          return null === eb || void 0 === eb || eb.focus(), void 0 !== eb
                        }(gb.current, lb.current)) null === (wb = gb.current) || void 0 === wb || wb.focus();
                      bb.shiftKey || Ub(!1)
                    }
                  },
                  children: [Nb(pb).title, (0, Cb.jsx)(Fb, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, Cb.jsx)(xb, {
                lang: "ts",
                code: Mb,
                compact: !0
              })]
            }), null !== sb && void 0 !== sb ? sb : document.body)]
          })
        }
        var fw = Mb(225),
          Aw = Mb(5657),
          Ww = Mb(5661),
          Jw = Mb(5669);
        const Sw = {
          progressBar: {
            hp: 30,
            zp: .075,
            Xp: 5,
            xp: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            jp: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            rp: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Rp: !0,
            scale: 3,
            rotation: 15,
            Dp: !1
          },
          gravityBar: {
            hp: 30,
            Yp: .25,
            Zp: 3,
            fp: .8,
            gravity: 1,
            Ap: 1.5,
            Wp: 8,
            Jp: 4,
            xp: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            Np: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Qp: 5,
            Gp: 1200,
            qp: .15,
            ap: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var Nw = Mb(366),
          vw = Mb(2199);

        function Qw(bb) {
          return bb.startsWith("fa-")
        }
        const Gw = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          qw = {
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

        function aw(bb) {
          return "string" === typeof bb ? "text" : "entityName" in bb || "translationKey" in bb ? "other" : (0, Nw.xb)(bb) ? "progressBar" : (0, Nw.tb)(bb) ? "keyBinding" : "icon" in bb ? "icon" : "str" in bb && "string" === typeof bb.str ? "text" : "other"
        }
        const iw = [{
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
          uw = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...iw],
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
                options: vw.h
              },
              isRequired: !0
            }, ...iw],
            other: []
          };

        function dw(bb) {
          return "string" === typeof bb ? {
            str: bb
          } : bb
        }

        function Pw(bb, wb) {
          let Mb = dw(bb);
          for (const eb of wb) Mb = Mb && "object" === typeof Mb ? Mb[eb] : void 0;
          return Mb
        }

        function nw(bb, wb, Mb) {
          const eb = (bb, Hb) => {
            var pb;
            const Vb = wb[Hb],
              gb = {
                ...bb
              };
            if (Hb === wb.length - 1) return void 0 === Mb ? delete gb[Vb] : gb[Vb] = Mb, gb;
            const lb = eb(null !== (pb = bb[Vb]) && void 0 !== pb ? pb : {}, Hb + 1);
            return 0 === Object.keys(lb).length ? delete gb[Vb] : gb[Vb] = lb, gb
          };
          return function(bb) {
            const wb = Object.keys(bb);
            return "string" === typeof bb.str && 1 === wb.length ? bb.str : bb
          }(eb(dw(bb), 0))
        }

        function yw(bb, wb) {
          const Mb = aw(bb),
            eb = uw[Mb].find((bb => bb.path.join(".") === wb.join("."))),
            Hb = null !== eb && void 0 !== eb && eb.isRequired && "other" !== Mb ? Pw(qw[Mb], wb) : void 0;
          return nw(bb, wb, Hb)
        }

        function ow(bb) {
          switch (aw(bb)) {
            case "text":
              return String(Pw(bb, ["str"]));
            case "icon":
              return String(Pw(bb, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Pw(bb,["progress"])))}%`;
            case "keyBinding":
              return String(Pw(bb, ["action"]));
            case "other":
              return JSON.stringify(bb)
          }
        }
        const Tw = /^[A-Za-z_$][\w$]*$/;

        function kw(bb) {
          if (Array.isArray(bb)) return `[${bb.map(kw).join(", ")}]`;
          if (bb && "object" === typeof bb) {
            const wb = Object.entries(bb).map((bb => {
              let [wb, Mb] = bb;
              return `${Tw.test(wb)?wb:JSON.stringify(wb)}: ${kw(Mb)}`
            }));
            return 0 === wb.length ? "{}" : `{ ${wb.join(", ")} }`
          }
          return JSON.stringify(bb)
        }

        function bM(bb) {
          const wb = bb.map(kw),
            Mb = `[${wb.join(", ")}]`;
          return Mb.length <= 60 ? Mb : `[\n${wb.map((bb=>`    ${bb},`)).join("\n")}\n]`
        }
        const wM = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function MM(bb) {
          let wb = "";
          for (let Hb = 0; Hb < bb.length; Hb++) {
            const pb = bb[Hb];
            if ("\\" === pb) {
              var Mb;
              const eb = null !== (Mb = bb[Hb + 1]) && void 0 !== Mb ? Mb : "";
              wb += "'" === eb ? "'" : pb + eb, Hb++
            } else if ('"' === pb) wb += '\\"';
            else {
              var eb;
              wb += null !== (eb = wM[pb]) && void 0 !== eb ? eb : pb
            }
          }
          return `"${wb}"`
        }

        function eM(bb) {
          if ("string" === typeof bb) return !0;
          if (!bb || "object" !== typeof bb || Array.isArray(bb)) return !1;
          const wb = bb;
          return "ProgressBar" === wb.type ? "number" === typeof wb.progress : "StyledKeyBinding" === wb.type ? vw.h.includes(wb.action) : "string" === typeof wb.icon || "string" === typeof wb.str || "string" === typeof wb.entityName || "string" === typeof wb.translationKey
        }

        function HM(bb) {
          let wb;
          try {
            wb = function(bb) {
              let wb = "",
                Mb = "",
                eb = 0;
              const Hb = () => {
                wb += Mb.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), Mb = ""
              };
              for (; eb < bb.length;) {
                const pb = bb.slice(eb).search(/["'`]|\/\//);
                if (-1 === pb) {
                  Mb += bb.slice(eb);
                  break
                }
                Mb += bb.slice(eb, eb + pb);
                const Vb = eb + pb,
                  gb = bb[Vb];
                if ("/" === gb) {
                  const wb = bb.indexOf("\n", Vb);
                  eb = -1 === wb ? bb.length : wb;
                  continue
                }
                if (Hb(), "`" === gb) throw new Error("Use quotes rather than template strings.");
                let lb = Vb + 1;
                for (; lb < bb.length && bb[lb] !== gb;) lb += "\\" === bb[lb] ? 2 : 1;
                if (lb >= bb.length) throw new Error("A string is missing its closing quote.");
                const Lb = bb.slice(Vb + 1, lb);
                wb += MM(Lb), eb = lb + 1
              }
              return Hb(), JSON.parse(wb)
            }(bb.trim())
          } catch (eb) {
            return {
              parts: null,
              error: eb instanceof SyntaxError ? "This isn't a valid array yet." : eb.message
            }
          }
          if (!Array.isArray(wb)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const Mb = wb.findIndex((bb => !eM(bb)));
          return -1 !== Mb ? {
            parts: null,
            error: `Part ${Mb+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: wb,
            error: null
          }
        }
        const pM = 1 / fw.e.clientTicksPerSecond,
          VM = 700,
          gM = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          lM = {
            progressBar: Sw.progressBar.jp,
            timedClick: Sw.timedClick.icon,
            gravityBar: Sw.gravityBar.icon,
            precisionBar: Sw.precisionBar.icon,
            rhythmClick: Sw.rhythmClick.icon
          };

        function LM(bb) {
          let {
            type: wb
          } = bb;
          const [Mb, Hb] = (0, eb.useState)("ready"), [Vb, gb] = (0, eb.useState)(1), [lb, Lb] = (0, eb.useState)(!0), Ib = (0, eb.useRef)(null), Ob = (0, eb.useRef)(null), Ub = (0, eb.useRef)(null), tb = (0, eb.useRef)(new Set), Eb = (0, eb.useRef)(!1), Bb = lM[wb], sb = (0, eb.useMemo)((() => ({
            getState: () => {
              var bb, wb;
              return null !== (bb = null === (wb = Ub.current) || void 0 === wb ? void 0 : wb.getState()) && void 0 !== bb ? bb : gM
            },
            onFrame: bb => (tb.current.add(bb), () => {
              tb.current.delete(bb)
            })
          })), []);
          (0, eb.useEffect)((() => {
            const bb = Ib.current,
              wb = Ob.current;
            if (!bb || !wb) return;
            const Mb = new ResizeObserver((() => {
              gb(bb.clientWidth / Math.max(1, wb.offsetWidth))
            }));
            return Mb.observe(bb), () => {
              Mb.disconnect()
            }
          }), []), (0, eb.useEffect)((() => {
            var bb;
            if ("playing" !== Mb) return;
            let eb = !1;
            const pb = new Jw.c[wb](Sw[wb], (bb => {
              eb = !0, Lb(!1), Hb(bb ? "succeeded" : "failed")
            }), (() => {}));
            Ub.current = pb;
            let Vb = 0,
              gb = performance.now(),
              lb = requestAnimationFrame((function bb(wb) {
                for (Vb += Math.min(.25, (wb - gb) / 1e3), gb = wb; Vb >= pM && !eb;) Vb -= pM, pb.handleTick(pM);
                for (const Mb of tb.current) Mb();
                eb || (lb = requestAnimationFrame(bb))
              }));
            return null === (bb = Ib.current) || void 0 === bb || bb.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(lb), pb.tearDown(), Ub.current = null, Eb.current = !1
            }
          }), [Mb, wb]), (0, eb.useEffect)((() => {
            if (lb) return;
            const bb = setTimeout((() => {
              Lb(!0)
            }), VM);
            return () => {
              clearTimeout(bb)
            }
          }), [lb]);
          const mb = bb => {
            var wb;
            "playing" === Mb && Eb.current !== bb && (Eb.current = bb, null === (wb = Ub.current) || void 0 === wb || wb.handleMouseInput(bb))
          };
          return (0, Cb.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, Cb.jsxs)("div", {
              ref: Ib,
              className: pb()("DocsQteStage", {
                Playing: "playing" === Mb
              }),
              tabIndex: "playing" === Mb ? 0 : -1,
              role: "playing" === Mb ? "button" : void 0,
              "aria-label": "playing" === Mb ? `${wb} quick time event: click or press Space` : void 0,
              onPointerDown: bb => {
                0 === bb.button && mb(!0)
              },
              onPointerUp: () => {
                mb(!1)
              },
              onPointerLeave: () => {
                mb(!1)
              },
              onPointerCancel: () => {
                mb(!1)
              },
              onKeyDown: bb => {
                "playing" !== Mb || " " !== bb.key && "Enter" !== bb.key || (bb.preventDefault(), mb(!0))
              },
              onKeyUp: bb => {
                "playing" !== Mb || " " !== bb.key && "Enter" !== bb.key || mb(!1)
              },
              children: [(0, Cb.jsx)("div", {
                ref: Ob,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Vb})`
                },
                children: "playing" === Mb && (0, Cb.jsx)(Ww.d.Provider, {
                  value: sb,
                  children: (0, Cb.jsx)(Aw.e, {
                    qte: {
                      type: wb,
                      parameters: Sw[wb]
                    }
                  })
                })
              }), "playing" !== Mb && (0, Cb.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== Mb && (0, Cb.jsxs)("div", {
                  className: pb()("DocsQteResult", "succeeded" === Mb ? "Succeeded" : "Failed"),
                  children: [(0, Cb.jsx)(Fb, {
                    name: "succeeded" === Mb ? "check" : "cross",
                    isTinted: !0
                  }), (0, Cb.jsx)("span", {
                    children: "succeeded" === Mb ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, Cb.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !lb,
                  onClick: () => {
                    Hb("playing")
                  },
                  children: [(0, Cb.jsx)(Fb, {
                    name: "ready" === Mb ? "play" : "replay"
                  }), (0, Cb.jsx)("span", {
                    children: "ready" === Mb ? `Try ${wb}` : "Play again"
                  })]
                })]
              })]
            }), Bb && !Qw(Bb) && (0, Cb.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, Cb.jsx)("code", {
                children: Bb
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function IM(bb) {
          let {
            level: wb,
            text: Mb,
            anchor: eb,
            className: Hb
          } = bb;
          const Vb = `h${Math.min(wb,6)}`;
          return (0, Cb.jsxs)(Vb, {
                id: eb,
                className: pb()("DocsHeading", Hb),
                children: [(0, Cb.jsx)(Xw, {
                      text: Mb
                    }), (0, Cb.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${eb}`,
                        "aria-label": `Link to ${Mb.replace(/`/g,"")}`,children:"#"})]})}function OM(bb){let{items:wb,ordered:Mb}=bb;const eb=Mb?"ol":"ul";return(0,Cb.jsx)(eb,{className:"DocsList",children:wb.map(((bb,wb)=>(0,Cb.jsxs)("li",{children:[(0,Cb.jsx)(Xw,{text:bb.text}),bb.children.length>0&&(0,Cb.jsx)(OM,{items:bb.children,ordered:Mb})]},wb)))})}function UM(bb){const wb=bb[0],Mb="paragraph"===(null===wb||void 0===wb?void 0:wb.kind)?wb.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(Mb)?"warning":/^\*\*(tip|prefer)/.test(Mb)?"tip":"note"}function tM(bb){let{block:wb}=bb;switch(wb.kind){case"heading":return(0,Cb.jsx)(IM,{level:wb.level,text:wb.text,anchor:wb.anchor});case"paragraph":return(0,Cb.jsx)("p",{children:(0,Cb.jsx)(Xw,{text:wb.text})});case"code":{const bb="ts"===wb.lang?function(bb){const wb=bb.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return wb&&Object.hasOwn(Sw,wb[1])?wb[1]:null}(wb.code):null;return(0,Cb.jsxs)(Cb.Fragment,{children:[(0,Cb.jsx)(xb,{code:wb.code,lang:wb.lang}),bb&&(0,Cb.jsx)(LM,{type:bb})]})}case"table":return(0,Cb.jsx)("div",{className:"DocsTableScroll",children:(0,Cb.jsxs)("table",{className:"DocsTable",children:[(0,Cb.jsx)("thead",{children:(0,Cb.jsx)("tr",{children:wb.header.map(((bb,wb)=>(0,Cb.jsx)("th",{children:(0,Cb.jsx)(Xw,{text:bb})},wb)))})}),(0,Cb.jsx)("tbody",{children:wb.rows.map(((bb,wb)=>(0,Cb.jsx)("tr",{children:bb.map(((bb,wb)=>(0,Cb.jsx)("td",{children:(0,Cb.jsx)(Xw,{text:bb})},wb)))},wb)))})]})});case"list":return(0,Cb.jsx)(OM,{items:wb.items,ordered:wb.ordered});case"quote":return(0,Cb.jsx)("aside",{className:pb()("DocsCallout",UM(wb.blocks)),children:(0,Cb.jsx)(CM,{blocks:wb.blocks})});case"rule":return(0,Cb.jsx)("hr",{className:"DocsRule"})}}function CM(bb){let{blocks:wb}=bb;return(0,Cb.jsx)(Cb.Fragment,{children:wb.map(((bb,wb)=>(0,Cb.jsx)(tM,{block:bb},wb)))})}var EM=Mb(5641),FM=Mb(5649);function BM(bb){return"blocks"===bb||"items"===bb}const sM=new Map;function mM(bb){let wb=sM.get(bb);return wb||(wb=function(bb){const wb={entries:[],legend:[],notes:[],examples:[]};let Mb=!1;for(const pb of bb.split(/\r?\n/).slice(1)){if(pb.startsWith("#")){const bb=pb.replace(/^# ?/,""),eb=bb.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);eb?wb.legend.push({code:eb[1],meaning:eb[2],usage:eb[3].trim()}):/^Examples:/.test(bb.trim())?Mb=!0:Mb&&bb.trim()?wb.examples.push(bb.trim()):bb.trim()&&!/^\s/.test(bb)&&wb.notes.push(bb.trim());continue}const bb=pb.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var eb,Hb;bb&&wb.entries.push({name:bb[1],variants:null!==(eb=null===(Hb=bb[2])||void 0===Hb?void 0:Hb.split(","))&&void 0!==eb?eb:[]})}return wb}("blocks"===bb?EM:FM),sM.set(bb,wb)),wb}function hM(bb){let{className:wb,value:Mb,placeholder:eb,label:Hb,onChange:pb,count:Vb,children:gb}=bb;return(0,Cb.jsxs)("div",{className:wb,children:[(0,Cb.jsx)(Fb,{name:"magnifying-glass"}),(0,Cb.jsx)("input",{type:"search",value:Mb,placeholder:eb,"aria-label":Hb,onChange:bb=>{pb(bb.target.value)}}),gb,Vb&&(0,Cb.jsxs)("span",{className:"DocsFilterCount",children:[Vb.visible," of ",Vb.total]})]})}var zM=Mb(1475);function XM(bb){const wb=bb.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return wb?wb[2]:null}function xM(bb){return"paragraph"===bb.kind&&""===bb.text.trim()}function jM(bb){const wb={name:bb.heading.text,description:[],params:[],returns:null};let Mb="description";for(const Hb of bb.blocks)if(!xM(Hb))if("heading"===Hb.kind&&/^Parameters:?$/.test(Hb.text))Mb="params";else if("heading"===Hb.kind&&/^Returns:?$/.test(Hb.text))Mb="returns",wb.returns={type:"",description:[]};else if("params"!==Mb||"table"!==Hb.kind){if("returns"===Mb&&"paragraph"===Hb.kind&&""===wb.returns.type){const bb=XM(Hb.text);if(null!==bb){wb.returns.type=bb.replaceAll("\\|","|");continue}}"returns"===Mb?wb.returns.description.push(Hb):wb.description.push(Hb)}else for(const[bb,Mb,pb]of Hb.rows){var eb;wb.params.push({name:bb,type:null!==(eb=XM(Mb))&&void 0!==eb?eb:Mb,description:null!==pb&&void 0!==pb?pb:""})}return wb}const KM=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function rM(bb){return bb.filter((bb=>!xM(bb)))}const RM=/^[\w][\w .'&!:()-]*$/,DM=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function cM(bb){var wb;if("code"===bb.kind&&"text"===bb.lang){const wb=bb.code.split("\n").map((bb=>bb.trim())).filter(Boolean);return wb.length>0&&wb.every((bb=>RM.test(bb)))?wb.map((bb=>({name:bb}))):null}return"paragraph"===bb.kind&&DM.test(bb.text.trim())?[...bb.text.matchAll(/`([ ^ `]+)` / g)].flatMap((bb => bb[1].split(/,\s*/).map((bb => ({
                              name: bb.trim()
                            }))))): "table" === bb.kind && null !== (wb = bb.header[0]) && void 0 !== wb && wb.startsWith("Song") ? bb.rows.map((bb => {
                              let [wb, Mb] = bb;
                              return {
                                name: wb.replace(/`/g, ""),
                                caption: Mb
                              }
                            })) : null
                          }

                          function YM(bb) {
                            const wb = [];
                            for (const Mb of bb) {
                              const bb = cM(Mb),
                                eb = wb.at(-1),
                                Hb = "table" === Mb.kind;
                              bb ? "names" === (null === eb || void 0 === eb ? void 0 : eb.kind) && eb.isSongs === Hb ? eb.names.push(...bb) : wb.push({
                                kind: "names",
                                names: bb,
                                isSongs: Hb
                              }) : wb.push({
                                kind: "block",
                                block: Mb
                              })
                            }
                            return wb
                          }
                          const ZM = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function fM(bb, wb) {
                            return `${ZM[bb]}-${(0,jb.s)(wb)}`
                          }
                          const AM = new WeakMap;

                          function WM(bb, wb, Mb) {
                            let eb = AM.get(wb);
                            if (!eb) {
                              eb = new Map;
                              const Mb = new Set;
                              for (const Hb of (0, jb.w)(wb)) {
                                const wb = YM(rM(Hb.blocks)).map((wb => {
                                  if ("block" === wb.kind) return wb;
                                  return {
                                    kind: "names",
                                    names: wb.names.map((wb => {
                                      var eb, pb;
                                      const Vb = fM(bb, wb.name);
                                      let gb = Vb;
                                      for (let bb = 2; Mb.has(gb); bb++) gb = `${Vb}-${bb}`;
                                      return Mb.add(gb), {
                                        ...wb,
                                        anchor: gb,
                                        heading: null !== (eb = null === (pb = Hb.heading) || void 0 === pb ? void 0 : pb.text) && void 0 !== eb ? eb : ""
                                      }
                                    })),
                                    isSongs: wb.isSongs
                                  }
                                }));
                                eb.set(Hb.blocks, wb)
                              }
                              AM.set(wb, eb)
                            }
                            const Hb = eb.get(Mb);
                            if (!Hb) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Hb
                          }
                          const JM = "/textures/docs/skinPreviews",
                            SM = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var NM = Mb(3044),
                            vM = Mb(3059);

                          function QM(bb) {
                            return Object.hasOwn(NM.g, bb) ? NM.g[bb] : null
                          }
                          const GM = {
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
                            blendMode: vM.d.Standard
                          };

                          function qM(bb, wb, Mb) {
                            return wb + (Mb - wb) * bb()
                          }

                          function aM(bb, wb, Mb) {
                            return bb + (wb - bb) * Mb
                          }

                          function iM(bb) {
                            return bb.length > 0 && "timeFraction" in bb[0]
                          }

                          function uM(bb, wb) {
                            if (0 === bb.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!iM(bb.colorGradients)) {
                              const Mb = bb.colorGradients,
                                {
                                  color: eb
                                } = Mb[Math.floor(wb() * Mb.length) % Mb.length];
                              return [{
                                at: 0,
                                colour: [eb[0] / 255, eb[1] / 255, eb[2] / 255, 1]
                              }]
                            }
                            return [...bb.colorGradients].sort(((bb, wb) => bb.timeFraction - wb.timeFraction)).map((bb => {
                              var Mb, eb, Hb;
                              const pb = bb.minColor,
                                Vb = null !== (Mb = bb.maxColor) && void 0 !== Mb ? Mb : pb,
                                gb = wb(),
                                lb = [aM(pb[0], Vb[0], gb) / 255, aM(pb[1], Vb[1], gb) / 255, aM(pb[2], Vb[2], gb) / 255, aM(null !== (eb = pb[3]) && void 0 !== eb ? eb : 1, null !== (Hb = Vb[3]) && void 0 !== Hb ? Hb : 1, gb)];
                              return {
                                at: bb.timeFraction,
                                colour: lb
                              }
                            }))
                          }

                          function dM(bb, wb, Mb, eb) {
                            const Hb = qM(eb, bb.minEmitPower, bb.maxEmitPower),
                              pb = wb => qM(eb, Math.min(bb.dir1[wb], bb.dir2[wb]), Math.max(bb.dir1[wb], bb.dir2[wb])) * Hb,
                              Vb = [...bb.velocityGradients].sort(((bb, wb) => bb.timeFraction - wb.timeFraction)).map((bb => ({
                                at: bb.timeFraction,
                                factor: qM(eb, bb.factor, bb.factor2)
                              })));
                            return {
                              pos: [qM(eb, wb[0], Mb[0]), qM(eb, wb[1], Mb[1]), qM(eb, wb[2], Mb[2])],
                              dir: [pb(0), pb(1), pb(2)],
                              age: 0,
                              life: qM(eb, bb.minLifeTime, bb.maxLifeTime),
                              size: qM(eb, bb.minSize, bb.maxSize),
                              colours: uM(bb, eb),
                              velocityFactors: Vb
                            }
                          }

                          function PM(bb, wb, Mb, eb) {
                            if (wb < bb[0].at) return Mb(Math.min(1, bb.length - 1));
                            for (let Hb = 0; Hb < bb.length - 1; Hb++)
                              if (wb <= bb[Hb + 1].at) {
                                const pb = bb[Hb + 1].at - bb[Hb].at;
                                return eb(Mb(Hb), Mb(Hb + 1), pb > 0 ? (wb - bb[Hb].at) / pb : 1)
                              } return Mb(bb.length - 1)
                          }

                          function nM(bb) {
                            return PM(bb.colours, bb.age / bb.life, (wb => bb.colours[wb].colour), ((bb, wb, Mb) => [aM(bb[0], wb[0], Mb), aM(bb[1], wb[1], Mb), aM(bb[2], wb[2], Mb), aM(bb[3], wb[3], Mb)]))
                          }

                          function yM(bb, wb, Mb) {
                            if (bb.age += Mb, bb.age >= bb.life) return !1;
                            const eb = function(bb) {
                              return 0 === bb.velocityFactors.length ? 1 : PM(bb.velocityFactors, bb.age / bb.life, (wb => bb.velocityFactors[wb].factor), aM)
                            }(bb) * Mb;
                            for (let pb = 0; pb < 3; pb++) {
                              var Hb;
                              bb.pos[pb] += bb.dir[pb] * eb, bb.dir[pb] += (null !== (Hb = wb[pb]) && void 0 !== Hb ? Hb : 0) * Mb
                            }
                            return !0
                          }

                          function oM(bb) {
                            return String(Math.round(1e6 * bb) / 1e6)
                          }

                          function TM(bb) {
                            return `[${bb.map(oM).join(", ")}]`
                          }

                          function kM(bb, wb) {
                            const Mb = `${wb}    `;
                            return `[\n${(iM(bb)?bb.map((bb=>{const wb=[`${Mb}    timeFraction: ${oM(bb.timeFraction)},`,`${Mb}    minColor: ${TM(bb.minColor)},`];return bb.maxColor&&wb.push(`${Mb}    maxColor: ${TM(bb.maxColor)},`),`${Mb}{\n${wb.join("\n")}\n${Mb}},`})):bb.map((bb=>`
                            $ {
                              Mb
                            } {
                              color: $ {
                                TM(bb.color)
                              }
                            }, `))).join("\n")}\n${wb}]`
                          }
                          const be = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            we = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const Me = .6;

                          function ee(bb, wb) {
                            return `${wb?"song":"sound"}:${bb}`
                          }
                          let He = {
                              track: null,
                              volume: Me
                            },
                            pe = null,
                            Ve = 0,
                            ge = 0;
                          const le = new Set;

                          function Le(bb) {
                            He = {
                              ...He,
                              ...bb
                            }, le.forEach((bb => {
                              bb()
                            }))
                          }

                          function Ie(bb) {
                            He.track && Le({
                              track: {
                                ...He.track,
                                ...bb
                              }
                            })
                          }

                          function Oe(bb) {
                            const [wb, Mb] = (0, eb.useState)((() => bb(He))), Hb = (0, eb.useRef)(bb);
                            return Hb.current = bb, (0, eb.useEffect)((() => {
                              const bb = () => {
                                Mb((() => Hb.current(He)))
                              };
                              return le.add(bb), bb(), () => {
                                le.delete(bb)
                              }
                            }), []), wb
                          }

                          function Ue() {
                            Ve++;
                            const bb = pe;
                            pe = null, null === bb || void 0 === bb || bb.stop()
                          }

                          function te(bb, wb) {
                            let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Ue();
                            const Hb = Ve,
                              {
                                track: pb
                              } = He,
                              Vb = pb && pb.name === bb && pb.isSong === wb ? pb.duration : 0;
                            ge = eb, Le({
                              track: {
                                name: bb,
                                isSong: wb,
                                status: "loading",
                                duration: Vb
                              }
                            }), Promise.all([Mb.e(253), Mb.e(285)]).then((() => Mb(41482))).then((Mb => {
                              let {
                                playDocsSound: pb
                              } = Mb;
                              Hb === Ve && (pe = pb(bb, wb, He.volume, eb, {
                                onPlay: bb => {
                                  Hb === Ve && Ie({
                                    status: "playing",
                                    duration: bb
                                  })
                                },
                                onEnd: bb => {
                                  var wb, Mb;
                                  Hb === Ve && (pe = null, bb ? Le({
                                    track: null
                                  }) : (ge = null !== (wb = null === (Mb = He.track) || void 0 === Mb ? void 0 : Mb.duration) && void 0 !== wb ? wb : 0, Ie({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((wb => {
                              console.error(`Could not play docs sound ${bb}`, wb), Hb === Ve && Le({
                                track: null
                              })
                            }))
                          }

                          function Ce() {
                            const {
                              track: bb
                            } = He;
                            if (!bb) return;
                            if ("playing" === bb.status && pe) return ge = pe.Qm(), pe.pause(), void Ie({
                              status: "paused"
                            });
                            if ("loading" === bb.status) return Ue(), void Ie({
                              status: "paused"
                            });
                            if (pe) return void pe.resume();
                            const wb = bb.duration > 0 && ge >= bb.duration - .05;
                            te(bb.name, bb.isSong, wb ? 0 : ge)
                          }

                          function Ee() {
                            var bb;
                            return pe && "playing" === (null === (bb = He.track) || void 0 === bb ? void 0 : bb.status) ? pe.Qm() : ge
                          }

                          function Fe(bb) {
                            var wb;
                            null === (wb = pe) || void 0 === wb || wb.setVolume(bb), Le({
                              volume: bb
                            })
                          }

                          function Be() {
                            Ue(), ge = 0, Le({
                              track: null
                            })
                          }
                          const se = (0, eb.createContext)(null);
                          let me = null;

                          function he() {
                            const [bb, wb] = (0, eb.useState)(null);
                            return (0, eb.useEffect)((() => {
                              let bb = !1;
                              return me ??= Promise.all([Mb.e(85), Mb.e(89), Mb.e(86), Mb.e(87), Mb.e(88), Mb.e(124), Mb.e(36), Mb.e(259)]).then((() => Mb(41475))), me.then((Mb => {
                                bb || wb(Mb)
                              }), (bb => {
                                console.error("Could not load the docs gallery's textures", bb), me = null
                              })), () => {
                                bb = !0
                              }
                            }), []), bb
                          }
                          const ze = 24,
                            Xe = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function xe(bb, wb) {
                            const Mb = "skins" === bb ? function(bb, wb) {
                              const Mb = SM.find((wb => bb.startsWith(wb.heading)));
                              return Mb ? function(bb, wb) {
                                return `${bb}-${wb}`
                              }(Mb.prefix, wb) : null
                            }(wb.heading, wb.name) : null;
                            return null === Mb ? null : `${JM}/${Mb}.webp`
                          }

                          function je(bb) {
                            let {
                              kind: wb,
                              entry: Mb,
                              assets: Hb,
                              renderedUrl: Vb
                            } = bb;
                            const {
                              name: gb
                            } = Mb, [lb, Lb] = (0, eb.useState)(!1);
                            if ("icons" === wb && Qw(gb)) return (0, Cb.jsx)(zM.b, {
                              className: "DocsTileIcon",
                              name: gb
                            });
                            let Ib = null;
                            var Ob;
                            if ("icons" === wb) Ib = null !== (Ob = null === Hb || void 0 === Hb ? void 0 : Hb.getIngameIconUrl(gb)) && void 0 !== Ob ? Ob : null;
                            else if ("particles" === wb) {
                              var Ub, tb, Eb;
                              Ib = null !== (Ub = null === Hb || void 0 === Hb ? void 0 : Hb.getParticleTextureUrl(null !== (tb = null === (Eb = QM(gb)) || void 0 === Eb ? void 0 : Eb.texture) && void 0 !== tb ? tb : gb)) && void 0 !== Ub ? Ub : null
                            } else "skins" === wb && (Ib = null !== Vb && void 0 !== Vb ? Vb : Xe.test(gb) ? `/textures/charSkins/previews/${gb}_preview.png` : null);
                            return !Ib || lb ? (0, Cb.jsx)(Fb, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === wb ? "person" : "image"
                            }) : (0, Cb.jsx)("img", {
                              className: pb()("DocsTileImage", {
                                Pixelated: "skins" !== wb
                              }),
                              src: Ib,
                              srcSet: Ib === Vb ? `${Ib} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Ib}`), Lb(!0)
                              }
                            })
                          }

                          function Ke(bb) {
                            let {
                              entry: wb,
                              isSong: Mb
                            } = bb;
                            const eb = Oe((bb => {
                                let {
                                  track: eb
                                } = bb;
                                return (null === eb || void 0 === eb ? void 0 : eb.name) === wb.name && eb.isSong === Mb ? eb.status : null
                              })),
                              Hb = null !== eb && "paused" !== eb;
                            return (0, Cb.jsxs)("button", {
                              type: "button",
                              id: wb.anchor,
                              className: pb()("DocsSoundTile", {
                                Playing: Hb
                              }),
                              "data-docs-track": ee(wb.name, Mb),
                              "aria-label": Hb ? `Pause ${wb.name}` : `Play ${wb.name}`,
                              onClick: () => {
                                null !== eb ? Ce() : te(wb.name, Mb)
                              },
                              children: [(0, Cb.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, Cb.jsx)(Fb, {
                                  name: Hb ? "pause" : "play"
                                })
                              }), (0, Cb.jsx)("code", {
                                className: "DocsSoundName",
                                children: wb.name
                              }), wb.caption && (0, Cb.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: wb.caption
                              })]
                            })
                          }

                          function re(bb) {
                            let {
                              kind: wb,
                              names: Mb,
                              isSongs: Hb
                            } = bb;
                            const Vb = he(),
                              [gb, lb] = sb(),
                              Lb = !1 === (null === gb || void 0 === gb ? void 0 : gb.failed) ? gb.text : null,
                              Ib = (0, eb.useContext)(se),
                              [Ob, Ub] = (0, eb.useState)(""),
                              tb = Ob.trim().toLowerCase(),
                              Eb = tb ? Mb.filter((bb => bb.name.toLowerCase().includes(tb))) : Mb;
                            return (0, Cb.jsxs)("div", {
                              className: "DocsGallery",
                              children: [Mb.length > ze && (0, Cb.jsx)(hM, {
                                className: "DocsGalleryFilter",
                                value: Ob,
                                placeholder: `Filter ${Mb.length} names\u2026`,
                                label: "Filter names",
                                onChange: Ub,
                                count: tb ? {
                                  visible: Eb.length,
                                  total: Mb.length
                                } : null
                              }), (0, Cb.jsx)("div", {
                                className: pb()("DocsGalleryGrid", `Kind-${wb}`, {
                                  Songs: Hb
                                }),
                                children: Eb.map((bb => {
                                  if ("sounds" === wb) return (0, Cb.jsx)(Ke, {
                                    entry: bb,
                                    isSong: Hb
                                  }, bb.anchor);
                                  if (Ib && "particles" === wb && QM(bb.name)) return (0, Cb.jsxs)("button", {
                                    type: "button",
                                    id: bb.anchor,
                                    className: pb()("DocsTile Previewable", {
                                      Copied: Lb === bb.name
                                    }),
                                    title: `Play "${bb.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Ib(bb.name), lb(bb.name)
                                    },
                                    children: [(0, Cb.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, Cb.jsx)(je, {
                                        kind: wb,
                                        entry: bb,
                                        assets: Vb,
                                        renderedUrl: null
                                      }), (0, Cb.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, Cb.jsx)(Fb, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, Cb.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Lb === bb.name ? "Copied!" : bb.name
                                    })]
                                  }, bb.anchor);
                                  const Mb = xe(wb, bb);
                                  return (0, Cb.jsxs)("button", {
                                    type: "button",
                                    id: bb.anchor,
                                    className: pb()("DocsTile", {
                                      Copied: Lb === bb.name
                                    }),
                                    title: `Copy "${bb.name}"`,
                                    onClick: () => {
                                      lb(bb.name)
                                    },
                                    children: [(0, Cb.jsx)("span", {
                                      className: pb()("DocsTilePreview", {
                                        Rendered: null !== Mb
                                      }),
                                      children: (0, Cb.jsx)(je, {
                                        kind: wb,
                                        entry: bb,
                                        assets: Vb,
                                        renderedUrl: Mb
                                      })
                                    }), (0, Cb.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Lb === bb.name ? "Copied!" : bb.name
                                    })]
                                  }, bb.anchor)
                                }))
                              })]
                            })
                          }

                          function Re(bb) {
                            let {
                              kind: wb,
                              content: Mb,
                              blocks: eb
                            } = bb;
                            return (0, Cb.jsx)(Cb.Fragment, {
                              children: WM(wb, Mb, eb).map(((bb, Mb) => "block" === bb.kind ? (0, Cb.jsx)(tM, {
                                block: bb.block
                              }, Mb) : (0, Cb.jsx)(re, {
                                kind: wb,
                                names: bb.names,
                                isSongs: bb.isSongs
                              }, Mb)))
                            })
                          }
                          const De = [{
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

                          function ce(bb) {
                            let {
                              cards: wb = De,
                              label: Mb = "Start here"
                            } = bb;
                            const Hb = (0, eb.useContext)(tw);
                            return (0, Cb.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": Mb,
                              children: wb.map((bb => {
                                let {
                                  pageId: wb,
                                  countNoun: Mb
                                } = bb;
                                const eb = Nb(wb);
                                return (0, Cb.jsxs)(Vb.b, {
                                  to: ib(Hb, eb),
                                  className: "DocsLandingCard",
                                  children: [(0, Cb.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, Cb.jsx)(Fb, {
                                      name: eb.icon
                                    })
                                  }), (0, Cb.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: eb.title
                                  }), (0, Cb.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: eb.summary
                                  }), Mb && (0, Cb.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [Qb(eb).sections.length, " ", Mb]
                                  })]
                                }, wb)
                              }))
                            })
                          }
                          const Ye = 240;

                          function Ze(bb) {
                            let {
                              faces: wb
                            } = bb;
                            return (0, Cb.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, Cb.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${wb.top}")`
                                }
                              }), (0, Cb.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${wb.left}")`
                                }
                              }), (0, Cb.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${wb.right}")`
                                }
                              })]
                            })
                          }

                          function fe(bb) {
                            let {
                              src: wb
                            } = bb;
                            const [Mb, Hb] = (0, eb.useState)(!1);
                            return Mb ? null : (0, Cb.jsx)("img", {
                              src: wb,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${wb}`), Hb(!0)
                              }
                            })
                          }

                          function Ae(bb) {
                            let {
                              kind: wb
                            } = bb;
                            const Mb = mM(wb),
                              Hb = he(),
                              Vb = (0, gb.v)(),
                              [lb, Lb] = (0, eb.useState)(""),
                              [Ib, Ob] = (0, eb.useState)(null),
                              [Ub, tb] = (0, eb.useState)(Ye),
                              [Eb, Bb] = (0, eb.useState)(null),
                              sb = (0, eb.useRef)(null),
                              hb = lb.trim().toLowerCase();
                            (0, eb.useEffect)((() => {
                              const bb = (0, jb.q)(Vb.hash),
                                eb = Mb.entries.find((Mb => fM(wb, Mb.name) === bb));
                              if (eb) sb.current = eb.name, Lb(eb.name), Ob(null), Bb(eb.name);
                              else if (null !== sb.current) {
                                const bb = sb.current;
                                sb.current = null, Lb((wb => wb === bb ? "" : wb)), Bb(null)
                              }
                            }), [Mb, wb, Vb.hash, Vb.key]), (0, eb.useEffect)((() => {
                              var bb;
                              null !== Eb && (null === (bb = document.getElementById(fM(wb, Eb))) || void 0 === bb || bb.scrollIntoView({
                                block: "center"
                              }))
                            }), [wb, Eb]);
                            const zb = Mb.entries.filter((bb => (!hb || bb.name.toLowerCase().includes(hb)) && (!Ib || bb.variants.includes(Ib))));
                            return (0, Cb.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [Mb.notes.length > 0 && (0, Cb.jsx)("div", {
                                className: "DocsProse",
                                children: Mb.notes.map((bb => (0, Cb.jsx)("p", {
                                  children: bb
                                }, bb)))
                              }), Mb.legend.length > 0 && (0, Cb.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, Cb.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, Cb.jsx)("thead", {
                                    children: (0, Cb.jsxs)("tr", {
                                      children: [(0, Cb.jsx)("th", {
                                        children: "Code"
                                      }), (0, Cb.jsx)("th", {
                                        children: "Variant"
                                      }), (0, Cb.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, Cb.jsx)("tbody", {
                                    children: Mb.legend.map((bb => (0, Cb.jsxs)("tr", {
                                      children: [(0, Cb.jsx)("td", {
                                        children: (0, Cb.jsx)("button", {
                                          type: "button",
                                          className: pb()("DocsVariantChip", {
                                            Active: Ib === bb.code
                                          }),
                                          "aria-pressed": Ib === bb.code,
                                          title: `Show only ${wb} with ${bb.meaning} variants`,
                                          onClick: () => {
                                            Ob(Ib === bb.code ? null : bb.code)
                                          },
                                          children: bb.code
                                        })
                                      }), (0, Cb.jsx)("td", {
                                        children: bb.meaning
                                      }), (0, Cb.jsx)("td", {
                                        children: (0, Cb.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: bb.usage
                                        })
                                      })]
                                    }, bb.code)))
                                  })]
                                })
                              }), Mb.examples.length > 0 && (0, Cb.jsx)(xb, {
                                lang: "text",
                                code: Mb.examples.join("\n")
                              }), (0, Cb.jsx)(hM, {
                                className: "DocsFilterBar",
                                value: lb,
                                placeholder: `Search ${Mb.entries.length} ${wb}\u2026`,
                                label: `Search ${wb}`,
                                onChange: bb => {
                                  Lb(bb), tb(Ye)
                                },
                                count: hb || Ib ? {
                                  visible: zb.length,
                                  total: Mb.entries.length
                                } : null,
                                children: Ib && (0, Cb.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Ob(null)
                                  },
                                  children: [Ib, " ", (0, Cb.jsx)(Fb, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, Cb.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: zb.slice(0, Ub).map((bb => {
                                  const Mb = "blocks" === wb ? null === Hb || void 0 === Hb ? void 0 : Hb.getBlockFaces(bb.name) : null,
                                    eb = Hb && !Mb ? Hb.getItemTextureUrl(bb.name) : null;
                                  return (0, Cb.jsxs)("div", {
                                    id: fM(wb, bb.name),
                                    className: pb()("DocsCatalogueTile", {
                                      Linked: bb.name === Eb
                                    }),
                                    children: [(0, Cb.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [Mb && (0, Cb.jsx)(Ze, {
                                        faces: Mb
                                      }), eb && (0, Cb.jsx)(fe, {
                                        src: eb
                                      })]
                                    }), (0, Cb.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: bb.name
                                    }), bb.variants.length > 0 && (0, Cb.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: bb.variants.map((bb => (0, Cb.jsx)("span", {
                                        children: bb
                                      }, bb)))
                                    }), (0, Cb.jsx)(mb, {
                                      text: bb.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, bb.name)
                                }))
                              }), zb.length > Ub && (0, Cb.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  tb(zb.length)
                                },
                                children: ["Show all ", zb.length]
                              }), 0 === zb.length && (0, Cb.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", wb, " match."]
                              })]
                            })
                          }
                          var We = Mb(5713),
                            Je = Mb(1770);
                          const Se = .95 * We.d;

                          function Ne(bb) {
                            return /^\s*```/.test(bb)
                          }

                          function ve(bb, wb) {
                            const Mb = [
                              []
                            ];
                            let eb = !1;
                            for (const Hb of bb.split("\n")) !eb && wb(Hb) && Mb.at(-1).length > 0 && Mb.push([]), Ne(Hb) && (eb = !eb), Mb.at(-1).push(Hb);
                            return Mb.map((bb => bb.join("\n").trim())).filter(Boolean)
                          }

                          function Qe(bb, wb) {
                            const Mb = `${"#".repeat(wb)} `,
                              eb = [];
                            let Hb = !1;
                            for (const pb of bb.split("\n")) Ne(pb) ? Hb = !Hb : !Hb && pb.startsWith(Mb) && eb.push(pb.slice(Mb.length).trim());
                            return eb
                          }

                          function Ge(bb) {
                            return bb.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class qe {
                            constructor(bb, wb) {
                              this.origin = wb, this.pages = void 0, this.partPaths = new Map;
                              const Mb = bb.map((bb => {
                                const wb = wb => this.resolveLinks(bb, wb).length,
                                  Mb = function(bb, wb) {
                                    const Mb = bb.map((bb => wb(bb.markdown) + 2)),
                                      eb = Mb.reduce(((bb, wb) => bb + wb), 0),
                                      Hb = eb / Math.ceil(eb / Se),
                                      pb = [];
                                    let Vb = 0;
                                    return bb.forEach(((bb, wb) => {
                                      const eb = Mb[wb];
                                      (0 === pb.length || Vb + eb > Se || Vb + eb / 2 > Hb) && (pb.push([]), Vb = 0), pb.at(-1).push(bb), Vb += eb
                                    })), pb
                                  }(function(bb, wb) {
                                    return ve(bb, (bb => bb.startsWith("## "))).flatMap((bb => {
                                      var Mb;
                                      const eb = null !== (Mb = Qe(bb, 2)[0]) && void 0 !== Mb ? Mb : "";
                                      if (wb(bb) <= Se) return [{
                                        markdown: bb,
                                        section: eb
                                      }];
                                      let Hb = !1,
                                        pb = "";
                                      return ve(bb, (bb => {
                                        const wb = Hb && "" !== bb.trim();
                                        return Hb = "" === bb.trim(), wb
                                      })).map((bb => {
                                        var wb;
                                        const Mb = Qe(bb, 3),
                                          Hb = bb.startsWith("### ") ? Mb[0] : pb;
                                        return pb = null !== (wb = Mb.at(-1)) && void 0 !== wb ? wb : pb, {
                                          markdown: bb,
                                          section: eb || Hb
                                        }
                                      }))
                                    }))
                                  }(Ge(bb), wb), wb);
                                return {
                                  page: bb,
                                  groups: Mb.length > 1 ? Mb : []
                                }
                              }));
                              for (const {
                                  page: eb,
                                  groups: Hb
                                }
                                of Mb) Hb.forEach(((bb, wb) => {
                                const Mb = (0, We.y)(eb.slug, wb);
                                for (const Hb of bb.flatMap((bb => [...Qe(bb.markdown, 2), ...Qe(bb.markdown, 3)]))) {
                                  const bb = `${eb.id}#${(0,jb.s)(Hb)}`;
                                  this.partPaths.has(bb) || this.partPaths.set(bb, Mb)
                                }
                              }));
                              this.pages = Mb.map((bb => {
                                let {
                                  page: wb,
                                  groups: Mb
                                } = bb;
                                return {
                                  page: wb,
                                  path: (0, We.v)(wb.slug),
                                  markdown: `# ${wb.title}\n\n${this.resolveLinks(wb,Ge(wb))}\n`,
                                  parts: Mb.map(((bb, eb) => this.renderPart(wb, bb, eb, Mb.length)))
                                }
                              }))
                            }
                            url(bb) {
                              return `${this.origin}${bb}`
                            }
                            getPage(bb) {
                              return this.pages.find((wb => wb.page.id === bb))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((bb => (bb.parts.length > 0 ? bb.parts : [{
                                path: bb.path,
                                label: "",
                                markdown: bb.markdown
                              }]).filter((bb => bb.markdown.length > We.d))))
                            }
                            markdownUrl(bb, wb) {
                              const Mb = wb && this.partPaths.get(`${bb.id}#${wb}`) || (0, We.v)(bb.slug);
                              return this.url(wb ? `${Mb}#${wb}` : Mb)
                            }
                            resolveLinks(bb, wb) {
                              return wb.replace(/\]\((#[^)]+)\)/g, ((wb, Mb) => {
                                var eb;
                                const Hb = null !== (eb = qb(Mb)) && void 0 !== eb ? eb : this.samePageTarget(bb, Mb);
                                return Hb ? `](${this.markdownUrl(Hb.page,Hb.anchor)})` : wb
                              }))
                            }
                            samePageTarget(bb, wb) {
                              const Mb = (0, jb.s)(wb.slice(1));
                              return Gb(bb, Mb) ? {
                                page: bb,
                                anchor: Mb
                              } : null
                            }
                            renderPart(bb, wb, Mb, eb) {
                              const Hb = function(bb) {
                                  const wb = bb.map((bb => bb.section)).filter(Boolean);
                                  if (0 === wb.length) return "";
                                  const Mb = wb[0],
                                    eb = wb.at(-1);
                                  return Mb === eb ? Mb : `${Mb} to ${eb}`
                                }(wb),
                                pb = wb.map((bb => bb.markdown)).join("\n\n"),
                                Vb = Hb ? `It covers ${Hb}. ` : "",
                                gb = `Part ${Mb+1} of ${eb} of [${bb.title}](${this.url((0,We.v)(bb.slug))}). ${Vb}[llms.txt](${this.url(We.h)}) lists every part.`;
                              return {
                                path: (0, We.y)(bb.slug, Mb),
                                label: Hb,
                                markdown: `# ${bb.title}, part ${Mb+1} of ${eb}\n\n${gb}\n\n${this.resolveLinks(bb,pb)}\n`
                              }
                            }
                            llmsTxt(bb) {
                              const wb = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${ae(We.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const Mb of Sb) {
                                wb.push("", `## ${Mb.title}`, "");
                                for (const bb of Mb.pageIds) {
                                  const Mb = this.getPage(bb),
                                    {
                                      page: eb,
                                      parts: Hb
                                    } = Mb,
                                    pb = `About ${ae(Mb.markdown.length)} tokens${Hb.length>0?`, in ${Hb.length} parts:`:"."}`;
                                  wb.push(`- [${eb.title}](${this.url(Mb.path)}): ${eb.summary} ${pb}`), Hb.forEach(((bb, Mb) => {
                                    wb.push(`  - [Part ${Mb+1}${bb.label?`: ${bb.label}`:""}](${this.url(bb.path)})`)
                                  }))
                                }
                              }
                              return wb.push("", "## Optional", "", `- [Every page in one file](${this.url(We.e)}): About ${ae(bb.length)} tokens, for a model with a large context window.`, ""), wb.join("\n")
                            }
                            llmsFullTxt() {
                              return Sb.flatMap((bb => bb.pageIds.map((bb => this.getPage(bb).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const bb = this.llmsFullTxt(),
                                wb = this.llmsTxt(bb),
                                Mb = new Map([
                                  [We.o, wb],
                                  [We.h, wb],
                                  [We.e, bb]
                                ]);
                              for (const eb of this.pages) {
                                Mb.set(eb.path, eb.markdown);
                                for (const bb of eb.parts) Mb.set(bb.path, bb.markdown)
                              }
                              return Mb
                            }
                          }

                          function ae(bb) {
                            return `${Math.max(1,Math.round(bb/4e3))}K`
                          }
                          let ie = null;

                          function ue() {
                            return ie ??= new qe(Jb, Je.e), ie
                          }
                          var de = Mb(5722);
                          const Pe = [de.f, de.k];

                          function ne(bb) {
                            return ue().getPage(bb.id).parts.length > 0 ? `Read ${We.k}, then the parts of the Bloxd Code API's ${bb.title} page it lists, so I can ask questions about it.` : `Read ${Je.e}${(0,We.v)(bb.slug)} so I can ask questions about it. ${de.h}`
                          }

                          function ye(bb) {
                            let {
                              page: wb
                            } = bb;
                            const [Mb, eb] = sb();
                            return (0, Cb.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, Cb.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  eb(ue().getPage(wb.id).markdown)
                                },
                                children: [(0, Cb.jsx)(Fb, {
                                  name: !1 === (null === Mb || void 0 === Mb ? void 0 : Mb.failed) ? "check" : "copy"
                                }), (0, Cb.jsx)("span", {
                                  children: Mb ? Mb.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), Pe.map((bb => (0, Cb.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, de.d)(bb, ne(wb)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, Cb.jsx)(Fb, {
                                  name: "external-link"
                                }), (0, Cb.jsxs)("span", {
                                  children: ["Open in ", bb.name]
                                })]
                              }, bb.name)))]
                            })
                          }

                          function oe(bb) {
                            return `#${[0,1,2].map((wb=>Math.round(Math.min(255,Math.max(0,bb[wb]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function Te(bb) {
                            return [parseInt(bb.slice(1, 3), 16), parseInt(bb.slice(3, 5), 16), parseInt(bb.slice(5, 7), 16)]
                          }

                          function ke(bb) {
                            let {
                              label: wb,
                              min: Mb,
                              max: eb,
                              step: Hb,
                              low: pb,
                              high: Vb,
                              onChange: gb
                            } = bb;
                            return (0, Cb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Cb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Cb.jsx)("span", {
                                  children: wb
                                }), (0, Cb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: pb === Vb ? pb : `${pb}\u2013${Vb}`
                                })]
                              }), (0, Cb.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, Cb.jsx)("input", {
                                  type: "range",
                                  min: Mb,
                                  max: eb,
                                  step: Hb,
                                  value: Math.min(eb, pb),
                                  "aria-label": `Minimum ${wb.toLowerCase()}`,
                                  onChange: bb => {
                                    const wb = Number(bb.target.value);
                                    gb(wb, Math.max(wb, Vb))
                                  }
                                }), (0, Cb.jsx)("input", {
                                  type: "range",
                                  min: Mb,
                                  max: eb,
                                  step: Hb,
                                  value: Math.min(eb, Vb),
                                  "aria-label": `Maximum ${wb.toLowerCase()}`,
                                  onChange: bb => {
                                    const wb = Number(bb.target.value);
                                    gb(Math.min(wb, pb), wb)
                                  }
                                })]
                              })]
                            })
                          }

                          function bH(bb) {
                            let {
                              label: wb,
                              min: Mb,
                              max: eb,
                              step: Hb,
                              value: pb,
                              onChange: Vb,
                              format: gb = String
                            } = bb;
                            return (0, Cb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Cb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Cb.jsx)("span", {
                                  children: wb
                                }), (0, Cb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: gb(pb)
                                })]
                              }), (0, Cb.jsx)("input", {
                                type: "range",
                                min: Mb,
                                max: eb,
                                step: Hb,
                                value: Math.min(eb, Math.max(Mb, pb)),
                                "aria-label": wb,
                                onChange: bb => {
                                  Vb(Number(bb.target.value))
                                }
                              })]
                            })
                          }

                          function wH(bb) {
                            let {
                              opts: wb,
                              onChange: Mb
                            } = bb;
                            const eb = wb.colorGradients;
                            if (!iM(eb)) return (0, Cb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Cb.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, Cb.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, Cb.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: eb.map(((bb, wb) => (0, Cb.jsx)("input", {
                                  type: "color",
                                  value: oe(bb.color),
                                  "aria-label": `Colour ${wb+1}`,
                                  onChange: bb => {
                                    const Hb = [...eb];
                                    Hb[wb] = {
                                      color: Te(bb.target.value)
                                    }, Mb(Hb)
                                  }
                                }, wb)))
                              })]
                            });
                            const Hb = (bb, wb) => {
                              const Hb = [...eb];
                              Hb[bb] = wb, Mb(Hb)
                            };
                            return (0, Cb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Cb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Cb.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, Cb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), eb.map(((bb, wb) => {
                                var Mb;
                                const eb = null !== (Mb = bb.maxColor) && void 0 !== Mb ? Mb : bb.minColor;
                                return (0, Cb.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, Cb.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * bb.timeFraction), "%"]
                                  }), (0, Cb.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${oe(bb.minColor)}, ${oe(eb)})`
                                    }
                                  }), (0, Cb.jsx)("input", {
                                    type: "color",
                                    value: oe(bb.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*bb.timeFraction)}%`,
                                    onChange: Mb => {
                                      Hb(wb, {
                                        ...bb,
                                        minColor: [...Te(Mb.target.value), bb.minColor[3]]
                                      })
                                    }
                                  }), (0, Cb.jsx)("input", {
                                    type: "color",
                                    value: oe(eb),
                                    "aria-label": `Maximum colour at ${Math.round(100*bb.timeFraction)}%`,
                                    onChange: Mb => {
                                      Hb(wb, {
                                        ...bb,
                                        maxColor: [...Te(Mb.target.value), eb[3]]
                                      })
                                    }
                                  })]
                                }, wb)
                              }))]
                            })
                          }
                          const MH = [-.5, -.5, -.5],
                            eH = [.5, .5, .5],
                            HH = [0, 1, 2, 3, 4, 5, 6, 7].map((bb => [1 & bb ? eH[0] : MH[0], 2 & bb ? eH[1] : MH[1], 4 & bb ? eH[2] : MH[2]]));class pH {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(bb, wb, Mb, eb) {
                              const Hb = Math.round(31 * wb),
                                pb = Math.round(31 * Mb),
                                Vb = Math.round(31 * eb),
                                gb = `${Hb}|${pb}|${Vb}`;
                              let lb = this.tints.get(bb);
                              (!lb || lb.size > 2e3) && (lb = new Map, this.tints.set(bb, lb));
                              let Lb = lb.get(gb);
                              if (Lb) return Lb;
                              Lb = document.createElement("canvas"), Lb.width = bb.naturalWidth || 16, Lb.height = bb.naturalHeight || 16;
                              const Ib = Lb.getContext("2d");
                              return Ib ? (Ib.imageSmoothingEnabled = !1, Ib.drawImage(bb, 0, 0, Lb.width, Lb.height), Ib.globalCompositeOperation = "multiply", Ib.fillStyle = `rgb(${Hb/31*255}, ${pb/31*255}, ${Vb/31*255})`, Ib.fillRect(0, 0, Lb.width, Lb.height), Ib.globalCompositeOperation = "destination-in", Ib.drawImage(bb, 0, 0, Lb.width, Lb.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), lb.set(gb, Lb), Lb
                            }
                          }

                          function VH(bb) {
                            let {
                              opts: wb,
                              textureUrl: Mb,
                              burst: Hb,
                              paused: pb
                            } = bb;
                            const Vb = (0, eb.useRef)(null),
                              gb = (0, eb.useRef)(wb);
                            gb.current = wb;
                            const lb = (0, eb.useRef)(pb);
                            lb.current = pb;
                            const Lb = (0, eb.useRef)(null),
                              Ib = (0, eb.useRef)(null),
                              Ob = (0, eb.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(bb) {
                                let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const Mb = [-.5, -.5, -.5],
                                  eb = [.5, .5, .5];
                                let Hb = .5;
                                for (let pb = 0; pb < 40; pb++) {
                                  const pb = dM(bb, Mb, eb, wb),
                                    Vb = Math.max(pb.life / 30, .001);
                                  for (; yM(pb, bb.gravity, Vb);) Hb = Math.max(Hb, Math.hypot(pb.pos[0], pb.pos[1], pb.pos[2]) + pb.size / 2)
                                }
                                return Hb
                              }(wb)))), [wb]),
                              Ub = (0, eb.useRef)(Ob);
                            return Ub.current = Ob, (0, eb.useEffect)((() => {
                              if (Lb.current = null, !Mb) return;
                              const bb = new Image;
                              let wb = !1;
                              return bb.onload = () => {
                                wb || (Lb.current = bb)
                              }, bb.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${Mb}`)
                              }, bb.src = Mb, () => {
                                wb = !0
                              }
                            }), [Mb]), (0, eb.useEffect)((() => {
                              var bb;
                              null === (bb = Ib.current) || void 0 === bb || bb.call(Ib)
                            }), [wb, Hb]), (0, eb.useEffect)((() => {
                              const bb = Vb.current,
                                wb = null === bb || void 0 === bb ? void 0 : bb.getContext("2d");
                              if (!bb || !wb) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const Mb = new pH;
                              let eb = [],
                                Hb = 0,
                                pb = -.7,
                                Ob = Ub.current,
                                tb = performance.now(),
                                Cb = 0,
                                Eb = !0,
                                Fb = null;
                              const Bb = () => {
                                const bb = gb.current,
                                  wb = Math.min(400, Math.max(0, Math.ceil(bb.manualEmitCount)));
                                eb = [];
                                for (let Mb = 0; Mb < wb; Mb++) eb.push(dM(bb, MH, eH, Math.random));
                                Hb = 0
                              };
                              Ib.current = Bb, Bb();
                              const sb = Vb => {
                                Cb = requestAnimationFrame(sb);
                                const Ib = Math.min(.05, (Vb - tb) / 1e3);
                                if (tb = Vb, !Eb) return;
                                const mb = window.devicePixelRatio || 1,
                                  hb = Math.round(bb.clientWidth * mb),
                                  zb = Math.round(bb.clientHeight * mb);
                                if (0 === hb || 0 === zb) return;
                                bb.width === hb && bb.height === zb || (bb.width = hb, bb.height = zb);
                                const Xb = gb.current;
                                null === Fb && (pb += .18 * Ib), Ob += (Ub.current - Ob) * Math.min(1, 4 * Ib);
                                const xb = .6 * Ib;
                                eb = eb.filter((bb => yM(bb, Xb.gravity, xb))), 0 !== eb.length || lb.current || (Hb += Ib, Hb > .6 && Bb());
                                const jb = function(bb, wb, Mb, eb) {
                                  const Hb = 3.2 * eb,
                                    pb = .44 * Math.min(bb, wb) * Hb / eb,
                                    Vb = Math.cos(Mb),
                                    gb = Math.sin(Mb),
                                    lb = Math.cos(.42),
                                    Lb = Math.sin(.42);
                                  return (Mb, eb, Ib) => {
                                    const Ob = Mb * gb + Ib * Vb,
                                      Ub = Hb - (eb * Lb + Ob * lb);
                                    if (Ub < .05) return null;
                                    const tb = pb / Ub;
                                    return {
                                      x: bb / 2 + (Mb * Vb - Ib * gb) * tb,
                                      y: wb / 2 - (eb * lb - Ob * Lb) * tb,
                                      scale: tb,
                                      depth: Ub
                                    }
                                  }
                                }(hb, zb, pb, Ob);
                                ! function(bb, wb, Mb, eb, Hb) {
                                  const pb = bb.createLinearGradient(0, 0, 0, Mb);
                                  pb.addColorStop(0, "#23262d"), pb.addColorStop(1, "#16181c"), bb.globalCompositeOperation = "source-over", bb.globalAlpha = 1, bb.fillStyle = pb, bb.fillRect(0, 0, wb, Mb);
                                  const Vb = (wb, Mb) => {
                                      const Hb = eb(wb[0], wb[1], wb[2]),
                                        pb = eb(Mb[0], Mb[1], Mb[2]);
                                      Hb && pb && (bb.beginPath(), bb.moveTo(Hb.x, Hb.y), bb.lineTo(pb.x, pb.y), bb.stroke())
                                    },
                                    gb = Math.ceil(Hb) + 1,
                                    lb = MH[1];
                                  bb.lineWidth = 1, bb.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Lb = -gb; Lb <= gb; Lb++) Vb([Lb + .5, lb, .5 - gb], [Lb + .5, lb, gb + .5]), Vb([.5 - gb, lb, Lb + .5], [gb + .5, lb, Lb + .5]);
                                  bb.strokeStyle = "rgba(255, 255, 255, 0.28)", bb.setLineDash([4, 4]);
                                  for (const Lb of HH)
                                    for (const bb of HH) {
                                      const wb = [0, 1, 2].filter((wb => Lb[wb] !== bb[wb]));
                                      1 === wb.length && Lb[wb[0]] < bb[wb[0]] && Vb(Lb, bb)
                                    }
                                  bb.setLineDash([])
                                }(wb, hb, zb, jb, Ob);
                                const Kb = Lb.current,
                                  rb = eb.map((bb => ({
                                    particle: bb,
                                    at: jb(bb.pos[0], bb.pos[1], bb.pos[2])
                                  }))).filter((bb => null !== bb.at)).sort(((bb, wb) => wb.at.depth - bb.at.depth));
                                wb.imageSmoothingEnabled = !1;
                                for (const bb of function(bb) {
                                    switch (bb) {
                                      case vM.d.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case vM.d.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case vM.d.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case vM.d.MultiplyAdd:
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
                                  }(Xb.blendMode)) {
                                  wb.globalCompositeOperation = bb.operation;
                                  for (const {
                                      particle: eb,
                                      at: Hb
                                    }
                                    of rb) {
                                    const [pb, Vb, gb, lb] = nM(eb), Lb = Math.max(1, eb.size * Hb.scale);
                                    wb.globalAlpha = bb.usesAlpha ? Math.min(1, Math.max(0, lb)) : 1, Kb ? wb.drawImage(Mb.get(Kb, pb, Vb, gb), Hb.x - Lb / 2, Hb.y - Lb / 2, Lb, Lb) : (wb.fillStyle = `rgb(${255*pb}, ${255*Vb}, ${255*gb})`, wb.fillRect(Hb.x - Lb / 2, Hb.y - Lb / 2, Lb, Lb))
                                  }
                                }
                                wb.globalCompositeOperation = "source-over", wb.globalAlpha = 1
                              };
                              Cb = requestAnimationFrame(sb);
                              const mb = new IntersectionObserver((bb => {
                                let [wb] = bb;
                                Eb = wb.isIntersecting
                              }));
                              mb.observe(bb);
                              const hb = wb => {
                                  Fb = wb.clientX, bb.setPointerCapture(wb.pointerId)
                                },
                                zb = bb => {
                                  null !== Fb && (pb += .01 * (bb.clientX - Fb), Fb = bb.clientX)
                                },
                                Xb = () => {
                                  Fb = null
                                };
                              return bb.addEventListener("pointerdown", hb), bb.addEventListener("pointermove", zb), bb.addEventListener("pointerup", Xb), bb.addEventListener("pointercancel", Xb), () => {
                                cancelAnimationFrame(Cb), mb.disconnect(), Ib.current = null, bb.removeEventListener("pointerdown", hb), bb.removeEventListener("pointermove", zb), bb.removeEventListener("pointerup", Xb), bb.removeEventListener("pointercancel", Xb)
                              }
                            }), []), (0, Cb.jsx)("canvas", {
                              ref: Vb,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${wb.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const gH = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            lH = [{
                              mode: vM.d.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: vM.d.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: vM.d.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: vM.d.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: vM.d.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            LH = (0, eb.forwardRef)((function(bb, wb) {
                              var Mb, Hb;
                              let {
                                textures: Vb
                              } = bb;
                              const gb = he(),
                                lb = (0, eb.useRef)(null),
                                [Lb, Ib] = (0, eb.useState)(GM),
                                [Ob, Ub] = (0, eb.useState)("example"),
                                [tb, Eb] = (0, eb.useState)(0),
                                [Bb, sb] = (0, eb.useState)(!1),
                                hb = bb => {
                                  const wb = "example" === bb ? GM : QM(bb);
                                  wb && (Ib(wb), Ub(bb))
                                };
                              (0, eb.useImperativeHandle)(wb, (() => ({
                                preview: bb => {
                                  var wb;
                                  hb(bb), null === (wb = lb.current) || void 0 === wb || wb.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const zb = bb => {
                                  Ib({
                                    ...Lb,
                                    ...bb
                                  }), Ub(null)
                                },
                                Xb = function(bb, wb) {
                                  if (null !== wb) return `${be}    presetId: "${wb}",\n${we}\n})`;
                                  const Mb = bb.velocityGradients.map((bb => `        {\n            timeFraction: ${oM(bb.timeFraction)},\n            factor: ${oM(bb.factor)},\n            factor2: ${oM(bb.factor2)},\n        },`)),
                                    eb = [`    dir1: ${TM(bb.dir1)},`, `    dir2: ${TM(bb.dir2)},`, we, `    texture: "${bb.texture}",`, `    minLifeTime: ${oM(bb.minLifeTime)},`, `    maxLifeTime: ${oM(bb.maxLifeTime)},`, `    minEmitPower: ${oM(bb.minEmitPower)},`, `    maxEmitPower: ${oM(bb.maxEmitPower)},`, `    minSize: ${oM(bb.minSize)},`, `    maxSize: ${oM(bb.maxSize)},`, `    manualEmitCount: ${oM(bb.manualEmitCount)},`, `    gravity: ${TM(bb.gravity)},`, `    colorGradients: ${kM(bb.colorGradients,"    ")},`, `    velocityGradients: ${Mb.length>0?`[\n${Mb.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${oM(bb.blendMode)},`];
                                  return void 0 !== bb.hideDist && eb.push(`    hideDist: ${oM(bb.hideDist)},`), `${be}${eb.join("\n")}\n})`
                                }(Lb, null === Ob || "example" === Ob ? null : Ob),
                                jb = Vb.includes(Lb.texture) ? Vb : [...Vb, Lb.texture];
                              return (0, Cb.jsxs)("section", {
                                ref: lb,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, Cb.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, Cb.jsxs)("div", {
                                    children: [(0, Cb.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, Cb.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, Cb.jsx)(mb, {
                                    text: Xb,
                                    label: "Copy code"
                                  })]
                                }), (0, Cb.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, Cb.jsx)("button", {
                                    type: "button",
                                    className: pb()("DocsVariantChip", {
                                      Active: "example" === Ob
                                    }),
                                    onClick: () => {
                                      hb("example")
                                    },
                                    children: "Example"
                                  }), gH.filter((bb => null !== QM(bb))).map((bb => (0, Cb.jsx)("button", {
                                    type: "button",
                                    className: pb()("DocsVariantChip", {
                                      Active: Ob === bb
                                    }),
                                    onClick: () => {
                                      hb(bb)
                                    },
                                    children: bb
                                  }, bb))), (0, Cb.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Ob && void 0 !== Ob ? Ob : "custom",
                                    "aria-label": "Preset",
                                    onChange: bb => {
                                      hb(bb.target.value)
                                    },
                                    children: [(0, Cb.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Ob && (0, Cb.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), NM.c.map((bb => (0, Cb.jsx)("option", {
                                      value: bb,
                                      children: bb
                                    }, bb)))]
                                  })]
                                }), (0, Cb.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, Cb.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, Cb.jsx)(VH, {
                                      opts: Lb,
                                      textureUrl: null !== (Mb = null === gb || void 0 === gb ? void 0 : gb.getParticleTextureUrl(Lb.texture)) && void 0 !== Mb ? Mb : null,
                                      burst: tb,
                                      paused: Bb
                                    }), (0, Cb.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, Cb.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Eb(tb + 1)
                                        },
                                        children: [(0, Cb.jsx)(Fb, {
                                          name: "replay"
                                        }), (0, Cb.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, Cb.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": Bb,
                                        onClick: () => {
                                          sb(!Bb)
                                        },
                                        children: [(0, Cb.jsx)(Fb, {
                                          name: Bb ? "play" : "pause"
                                        }), (0, Cb.jsx)("span", {
                                          children: Bb ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, Cb.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, Cb.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Cb.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, Cb.jsx)("span", {
                                          children: "Texture"
                                        }), (0, Cb.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Lb.texture
                                        })]
                                      }), (0, Cb.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: jb.map((bb => {
                                          var wb;
                                          const Mb = null !== (wb = null === gb || void 0 === gb ? void 0 : gb.getParticleTextureUrl(bb)) && void 0 !== wb ? wb : null;
                                          return (0, Cb.jsx)("button", {
                                            type: "button",
                                            className: pb()("DocsParticleTexture", {
                                              Active: Lb.texture === bb
                                            }),
                                            title: bb,
                                            "aria-label": bb,
                                            "aria-pressed": Lb.texture === bb,
                                            onClick: () => {
                                              zb({
                                                texture: bb
                                              })
                                            },
                                            children: Mb ? (0, Cb.jsx)("img", {
                                              src: Mb,
                                              alt: ""
                                            }) : (0, Cb.jsx)(Fb, {
                                              name: "image"
                                            })
                                          }, bb)
                                        }))
                                      })]
                                    }), (0, Cb.jsx)(bH, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Lb.manualEmitCount,
                                      onChange: bb => {
                                        zb({
                                          manualEmitCount: bb
                                        })
                                      }
                                    }), (0, Cb.jsx)(ke, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Lb.minLifeTime,
                                      high: Lb.maxLifeTime,
                                      onChange: (bb, wb) => {
                                        zb({
                                          minLifeTime: bb,
                                          maxLifeTime: wb
                                        })
                                      }
                                    }), (0, Cb.jsx)(ke, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Lb.minEmitPower,
                                      high: Lb.maxEmitPower,
                                      onChange: (bb, wb) => {
                                        zb({
                                          minEmitPower: bb,
                                          maxEmitPower: wb
                                        })
                                      }
                                    }), (0, Cb.jsx)(ke, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Lb.minSize,
                                      high: Lb.maxSize,
                                      onChange: (bb, wb) => {
                                        zb({
                                          minSize: bb,
                                          maxSize: wb
                                        })
                                      }
                                    }), (0, Cb.jsx)(bH, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Hb = Lb.gravity[1]) && void 0 !== Hb ? Hb : 0,
                                      onChange: bb => {
                                        var wb, Mb;
                                        zb({
                                          gravity: [null !== (wb = Lb.gravity[0]) && void 0 !== wb ? wb : 0, bb, null !== (Mb = Lb.gravity[2]) && void 0 !== Mb ? Mb : 0]
                                        })
                                      }
                                    }), (0, Cb.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Cb.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, Cb.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, Cb.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Lb.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: bb => {
                                          zb({
                                            blendMode: Number(bb.target.value)
                                          })
                                        },
                                        children: lH.map((bb => {
                                          let {
                                            mode: wb,
                                            label: Mb
                                          } = bb;
                                          return (0, Cb.jsx)("option", {
                                            value: wb,
                                            children: Mb
                                          }, wb)
                                        }))
                                      })]
                                    }), (0, Cb.jsx)(wH, {
                                      opts: Lb,
                                      onChange: bb => {
                                        zb({
                                          colorGradients: bb
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, Cb.jsx)(xb, {
                                  code: Xb,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var IH = Mb(5315),
                            OH = Mb(2116);

                          function UH(bb, wb) {
                            return bb ? IH.d.includes(wb) ? bb.getIngameIconUrl(wb) : bb.getItemIconUrl(wb) : null
                          }

                          function tH(bb) {
                            var wb, Mb, eb;
                            let {
                              part: Hb,
                              assets: Vb
                            } = bb;
                            const gb = UH(Vb, Hb.icon),
                              lb = null !== (wb = null === (Mb = Hb.style) || void 0 === Mb ? void 0 : Mb.fontSize) && void 0 !== wb ? wb : "1.8em",
                              Lb = (0, Nw._b)(Hb.style);
                            return (0, Cb.jsxs)("span", {
                              className: pb()("DocsBloxdTextIcon", {
                                Missing: !gb
                              }),
                              style: {
                                width: lb,
                                height: lb,
                                opacity: null === (eb = Hb.style) || void 0 === eb ? void 0 : eb.opacity
                              },
                              title: gb ? void 0 : "No Bloxd icon, item or block has this name",
                              children: [gb && Lb && (0, Cb.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Lb,
                                  maskImage: `url("${gb}")`,
                                  WebkitMaskImage: `url("${gb}")`
                                }
                              }), gb ? (0, Cb.jsx)("img", {
                                src: gb,
                                alt: "",
                                className: pb()({
                                  Tinted: Lb
                                })
                              }) : (0, Cb.jsx)(Fb, {
                                name: "image"
                              })]
                            })
                          }

                          function CH(bb) {
                            let {
                              parts: wb,
                              className: Mb
                            } = bb;
                            const eb = he(),
                              Hb = [];
                            let Vb = [];
                            const gb = bb => {
                              Vb.length > 0 && (Hb.push((0, Cb.jsx)(OH.d, {
                                text: Vb
                              }, `run-${bb}`)), Vb = [])
                            };
                            return wb.forEach(((bb, wb) => {
                              "icon" !== aw(bb) || Qw(bb.icon) ? Vb.push(bb) : (gb(wb), Hb.push((0, Cb.jsx)(tH, {
                                part: bb,
                                assets: eb
                              }, `icon-${wb}`)))
                            })), gb(wb.length), (0, Cb.jsx)("div", {
                              className: pb()("DocsStyledTextPreview", Mb),
                              children: Hb
                            })
                          }
                          const EH = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let FH = null;

                          function BH(bb) {
                            if (FH ??= document.createElement("canvas").getContext("2d"), !FH) return "#000000";
                            FH.fillStyle = "#000000", FH.fillStyle = bb;
                            const wb = FH.fillStyle;
                            return wb.startsWith("#") ? wb : "#000000"
                          }

                          function sH(bb) {
                            let {
                              value: wb,
                              label: Mb,
                              onChange: eb
                            } = bb;
                            return (0, Cb.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, Cb.jsx)("input", {
                                type: "color",
                                value: BH(wb),
                                "aria-label": `${Mb} picker`,
                                onChange: bb => {
                                  eb(bb.target.value)
                                }
                              }), (0, Cb.jsx)("input", {
                                type: "text",
                                value: wb,
                                placeholder: "#ffb914 or gold",
                                "aria-label": Mb,
                                spellCheck: !1,
                                onChange: bb => {
                                  eb(bb.target.value)
                                }
                              })]
                            })
                          }

                          function mH(bb) {
                            let {
                              value: wb,
                              fontAwesomeIcons: Mb,
                              onChange: Hb
                            } = bb;
                            const Vb = he(),
                              [gb, lb] = (0, eb.useState)(Qw(wb) ? "fontAwesome" : "bloxd"),
                              [Lb, Ib] = (0, eb.useState)(""),
                              Ob = Lb.trim().toLowerCase(),
                              Ub = "bloxd" === gb ? IH.d : Mb,
                              tb = Ob ? Ub.filter((bb => bb.toLowerCase().includes(Ob))) : Ub;
                            return (0, Cb.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, Cb.jsx)("input", {
                                type: "text",
                                value: wb,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: bb => {
                                  Hb(bb.target.value)
                                }
                              }), (0, Cb.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, Cb.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((bb => (0, Cb.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": gb === bb,
                                    className: pb()("DocsVariantChip", {
                                      Active: gb === bb
                                    }),
                                    onClick: () => {
                                      lb(bb)
                                    },
                                    children: "bloxd" === bb ? `Bloxd icons (${IH.d.length})` : `Font Awesome (${Mb.length})`
                                  }, bb))), (0, Cb.jsx)("input", {
                                    type: "search",
                                    value: Lb,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: bb => {
                                      Ib(bb.target.value)
                                    }
                                  })
                                ]
                              }), (0, Cb.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [tb.map((bb => {
                                  const Mb = "bloxd" === gb ? UH(Vb, bb) : null;
                                  return (0, Cb.jsx)("button", {
                                    type: "button",
                                    title: bb,
                                    "aria-label": bb,
                                    "aria-pressed": bb === wb,
                                    className: pb()("DocsIconPickerOption", {
                                      Active: bb === wb
                                    }),
                                    onClick: () => {
                                      Hb(bb)
                                    },
                                    children: "fontAwesome" === gb ? (0, Cb.jsx)(zM.b, {
                                      name: bb
                                    }) : Mb ? (0, Cb.jsx)("img", {
                                      src: Mb,
                                      alt: ""
                                    }) : (0, Cb.jsx)(Fb, {
                                      name: "image"
                                    })
                                  }, bb)
                                })), 0 === tb.length && (0, Cb.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Lb, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function hH(bb) {
                            let {
                              property: wb,
                              value: Mb,
                              fontAwesomeIcons: eb,
                              onChange: Hb
                            } = bb;
                            const {
                              field: pb,
                              label: Vb
                            } = wb, gb = bb => "" !== bb || wb.isRequired ? bb : void 0;
                            switch (pb.kind) {
                              case "text":
                                return pb.multiline ? (0, Cb.jsx)("textarea", {
                                  value: String(null !== Mb && void 0 !== Mb ? Mb : ""),
                                  rows: 2,
                                  "aria-label": Vb,
                                  onChange: bb => {
                                    Hb(bb.target.value)
                                  }
                                }) : (0, Cb.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Mb && void 0 !== Mb ? Mb : ""),
                                  "aria-label": Vb,
                                  onChange: bb => {
                                    Hb(gb(bb.target.value))
                                  }
                                });
                              case "size":
                                return (0, Cb.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Mb && void 0 !== Mb ? Mb : ""),
                                  placeholder: wb.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Vb,
                                  spellCheck: !1,
                                  onChange: bb => {
                                    Hb(gb(bb.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, Cb.jsx)(sH, {
                                  value: String(null !== Mb && void 0 !== Mb ? Mb : ""),
                                  label: Vb,
                                  onChange: bb => {
                                    Hb(gb(bb))
                                  }
                                });
                              case "colours": {
                                const bb = Array.isArray(Mb) ? Mb : [],
                                  wb = bb => {
                                    Hb(bb.length > 0 ? bb : void 0)
                                  };
                                return (0, Cb.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [bb.map(((Mb, eb) => (0, Cb.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, Cb.jsx)(sH, {
                                      value: Mb,
                                      label: `${Vb} ${eb+1}`,
                                      onChange: Mb => {
                                        wb(bb.map(((bb, wb) => wb === eb ? Mb : bb)))
                                      }
                                    }), (0, Cb.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${eb+1}`,
                                      onClick: () => {
                                        wb(bb.filter(((bb, wb) => wb !== eb)))
                                      },
                                      children: (0, Cb.jsx)(Fb, {
                                        name: "cross"
                                      })
                                    })]
                                  }, eb))), (0, Cb.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var Mb;
                                      wb([...bb, null !== (Mb = bb.at(-1)) && void 0 !== Mb ? Mb : "#ffffff"])
                                    },
                                    children: [(0, Cb.jsx)(Fb, {
                                      name: "plus"
                                    }), 0 === bb.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var lb;
                                const bb = "number" === typeof Mb ? Mb : Number(null !== (lb = wb.defaultText) && void 0 !== lb ? lb : 0);
                                return (0, Cb.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, Cb.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: bb,
                                    "aria-label": Vb,
                                    onChange: bb => {
                                      Hb(Number(bb.target.value))
                                    }
                                  }), (0, Cb.jsx)("output", {
                                    children: bb.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, Cb.jsxs)("select", {
                                  value: String(null !== Mb && void 0 !== Mb ? Mb : ""),
                                  "aria-label": Vb,
                                  onChange: bb => {
                                    Hb(gb(bb.target.value))
                                  },
                                  children: [!wb.isRequired && (0, Cb.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", wb.defaultText, ")"]
                                  }), pb.options.map((bb => (0, Cb.jsx)("option", {
                                    value: bb,
                                    children: bb
                                  }, bb)))]
                                });
                              case "icon":
                                return (0, Cb.jsx)(mH, {
                                  value: String(null !== Mb && void 0 !== Mb ? Mb : ""),
                                  fontAwesomeIcons: eb,
                                  onChange: Hb
                                })
                            }
                          }

                          function zH(bb) {
                            let wb;
                            try {
                              wb = JSON.parse(bb)
                            } catch (Mb) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${Mb.message}`
                              }
                            }
                            return eM(wb) ? {
                              part: wb,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function XH(bb) {
                            let {
                              parts: wb,
                              index: Mb,
                              fontAwesomeIcons: Hb,
                              onChange: pb,
                              FW: Vb,
                              onClose: gb
                            } = bb;
                            const lb = (0, eb.useContext)(Cw),
                              Ib = (0, eb.useRef)(null),
                              Ob = wb[Mb],
                              Ub = aw(Ob),
                              [tb, Eb] = (0, eb.useState)((() => JSON.stringify(Ob, null, 2))),
                              Bb = (0, eb.useMemo)((() => "other" === Ub ? zH(tb).error : null), [Ub, tb]);
                            (0, eb.useEffect)((() => {
                              var bb;
                              null === (bb = Ib.current) || void 0 === bb || bb.focus()
                            }), []);
                            const sb = (0, Cb.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: bb => {
                                bb.target === bb.currentTarget && gb()
                              },
                              children: (0, Cb.jsxs)("div", {
                                ref: Ib,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${Mb+1}: ${Gw[Ub]}`,
                                tabIndex: -1,
                                onKeyDown: bb => {
                                  "Escape" === bb.key ? (bb.stopPropagation(), gb()) : "Tab" === bb.key && Ib.current && function(bb, wb) {
                                    const Mb = Array.from(bb.querySelectorAll(Dw)),
                                      eb = Mb[0],
                                      Hb = Mb.at(-1);
                                    if (!eb || !Hb) return;
                                    const pb = document.activeElement;
                                    !wb.shiftKey || pb !== eb && pb !== bb ? wb.shiftKey || pb !== Hb || (wb.preventDefault(), eb.focus()) : (wb.preventDefault(), Hb.focus())
                                  }(Ib.current, bb)
                                },
                                children: [(0, Cb.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, Cb.jsxs)("div", {
                                    children: [(0, Cb.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", Mb + 1]
                                    }), (0, Cb.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: Gw[Ub]
                                    })]
                                  }), (0, Cb.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: gb,
                                    children: (0, Cb.jsx)(Fb, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, Cb.jsx)(CH, {
                                  parts: wb,
                                  className: "DocsTextDialogPreview"
                                }), (0, Cb.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Ub ? (0, Cb.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, Cb.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, Cb.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: tb,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: bb => {
                                        Eb(bb.target.value);
                                        const wb = zH(bb.target.value);
                                        null !== wb.part && pb(wb.part)
                                      }
                                    }), Bb && (0, Cb.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: Bb
                                    })]
                                  }) : uw[Ub].map((bb => {
                                    const wb = Pw(Ob, bb.path),
                                      Mb = bb.isRequired ? JSON.stringify(yw(Ob, bb.path)) === JSON.stringify(Ob) : void 0 === wb;
                                    return (0, Cb.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, Cb.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, Cb.jsx)("span", {
                                          children: bb.label
                                        }), (0, Cb.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: Mb,
                                          "aria-label": `Reset ${bb.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            pb(yw(Ob, bb.path))
                                          },
                                          children: [(0, Cb.jsx)(Fb, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, Cb.jsx)(hH, {
                                        property: bb,
                                        value: wb,
                                        fontAwesomeIcons: Hb,
                                        onChange: wb => {
                                          pb(nw(Ob, bb.path, wb))
                                        }
                                      }), !bb.isRequired && (0, Cb.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", bb.defaultText]
                                      })]
                                    }, bb.path.join("."))
                                  }))
                                }), (0, Cb.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, Cb.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Vb,
                                    children: [(0, Cb.jsx)(Fb, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, Cb.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: gb,
                                    children: "Done"
                                  })]
                                }), (0, Cb.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: EH.map((bb => (0, Cb.jsx)("option", {
                                    value: bb
                                  }, bb)))
                                })]
                              })
                            });
                            return lb ? (0, Lb.createPortal)(sb, lb) : sb
                          }
                          const xH = [{
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
                            jH = Object.keys(qw);

                          function KH(bb) {
                            let {
                              fontAwesomeIcons: wb
                            } = bb;
                            const [Mb, Hb] = (0, eb.useState)(xH[0].parts), [Vb, gb] = (0, eb.useState)((() => bM(xH[0].parts))), [lb, Lb] = (0, eb.useState)(null), [Ib, Ob] = (0, eb.useState)(!1), [Ub, tb] = (0, eb.useState)(null), [Eb, Bb] = (0, eb.useState)(!1), [sb, mb] = (0, eb.useState)(null), hb = (0, eb.useRef)(null), zb = bM(Mb);
                            (0, eb.useLayoutEffect)((() => {
                              var bb;
                              if (!sb) return;
                              const wb = bb => {
                                  var wb;
                                  return null === (wb = hb.current) || void 0 === wb ? void 0 : wb.querySelector(`[data-focus-key="${bb}"]`)
                                },
                                Mb = wb(sb.key);
                              null === (bb = Mb && !Mb.disabled ? Mb : wb(sb.fallback)) || void 0 === bb || bb.focus(), mb(null)
                            }), [sb]);
                            const Xb = bb => {
                                Hb(bb), gb(bM(bb)), Lb(null)
                              },
                              jb = bb => {
                                Xb(Mb.filter(((wb, Mb) => Mb !== bb))), mb({
                                  key: `edit-${Math.min(bb,Mb.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              Kb = (bb, wb) => {
                                const eb = [...Mb],
                                  [Hb] = eb.splice(bb, 1);
                                eb.splice(bb + wb, 0, Hb), Xb(eb);
                                mb({
                                  key: `${wb<0?"up":"down"}-${bb+wb}`,
                                  fallback: `edit-${bb+wb}`
                                })
                              };
                            return (0, Cb.jsxs)("section", {
                              ref: hb,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, Cb.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, Cb.jsxs)("div", {
                                  children: [(0, Cb.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, Cb.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, Cb.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: xH.map((bb => (0, Cb.jsx)("button", {
                                  type: "button",
                                  className: pb()("DocsVariantChip", {
                                    Active: zb === bM(bb.parts)
                                  }),
                                  onClick: () => {
                                    Xb(bb.parts)
                                  },
                                  children: bb.label
                                }, bb.label)))
                              }), (0, Cb.jsx)(CH, {
                                parts: Mb,
                                className: "DocsTextEditorPreview"
                              }), (0, Cb.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, Cb.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Cb.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, Cb.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [Mb.map(((bb, wb) => {
                                      const eb = aw(bb);
                                      return (0, Cb.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, Cb.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${wb}`,
                                          "aria-label": `Edit part ${wb+1}, ${Gw[eb]}`,
                                          onClick: () => {
                                            tb(wb)
                                          },
                                          children: [(0, Cb.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: Gw[eb]
                                          }), (0, Cb.jsx)(CH, {
                                            parts: [bb],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== eb && (0, Cb.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: ow(bb)
                                          })]
                                        }), (0, Cb.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, Cb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${wb+1} up`,
                                            "data-focus-key": `up-${wb}`,
                                            disabled: 0 === wb,
                                            onClick: () => {
                                              Kb(wb, -1)
                                            },
                                            children: (0, Cb.jsx)(Fb, {
                                              name: "chevron-up"
                                            })
                                          }), (0, Cb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${wb+1} down`,
                                            "data-focus-key": `down-${wb}`,
                                            disabled: wb === Mb.length - 1,
                                            onClick: () => {
                                              Kb(wb, 1)
                                            },
                                            children: (0, Cb.jsx)(Fb, {
                                              name: "chevron-down"
                                            })
                                          }), (0, Cb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${wb+1}`,
                                            onClick: () => {
                                              jb(wb)
                                            },
                                            children: (0, Cb.jsx)(Fb, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, wb)
                                    })), 0 === Mb.length && (0, Cb.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, Cb.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: bb => {
                                      "Escape" === bb.key && Eb && (bb.stopPropagation(), Bb(!1), mb({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, Cb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Eb,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        Bb(!Eb)
                                      },
                                      children: [(0, Cb.jsx)(Fb, {
                                        name: "plus"
                                      }), "Add a part", (0, Cb.jsx)(Fb, {
                                        name: Eb ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Eb && (0, Cb.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: jH.map((bb => (0, Cb.jsx)("li", {
                                        children: (0, Cb.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (bb => {
                                              Xb([...Mb, qw[bb]]), Bb(!1), tb(Mb.length)
                                            })(bb)
                                          },
                                          children: Gw[bb]
                                        })
                                      }, bb)))
                                    })]
                                  })]
                                }), (0, Cb.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Cb.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, Cb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Ib,
                                      onClick: () => {
                                        Ob(!Ib)
                                      },
                                      children: [(0, Cb.jsx)(Fb, {
                                        name: Ib ? "check" : "pencil"
                                      }), Ib ? "Done" : "Edit"]
                                    })]
                                  }), Ib ? (0, Cb.jsxs)(Cb.Fragment, {
                                    children: [(0, Cb.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Vb,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: bb => {
                                        gb(bb.target.value);
                                        const wb = HM(bb.target.value);
                                        Lb(wb.error), wb.parts && Hb(wb.parts)
                                      }
                                    }), lb && (0, Cb.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: lb
                                    })]
                                  }) : (0, Cb.jsx)(xb, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${zb})`
                                  })]
                                })]
                              }), null !== Ub && Ub < Mb.length && (0, Cb.jsx)(XH, {
                                parts: Mb,
                                index: Ub,
                                fontAwesomeIcons: wb,
                                onChange: bb => {
                                  ((bb, wb) => {
                                    Xb(Mb.map(((Mb, eb) => eb === bb ? wb : Mb)))
                                  })(Ub, bb)
                                },
                                FW: () => {
                                  jb(Ub), tb(null)
                                },
                                onClose: () => {
                                  tb(null), mb({
                                    key: `edit-${Ub}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var rH = Mb(5752),
                            RH = Mb(5730),
                            DH = Mb(5743),
                            cH = Mb(5757);
                          const YH = 40,
                            ZH = 800,
                            fH = 150,
                            AH = 8e3,
                            WH = 2e3;

                          function JH(bb, wb) {
                            return 12 * Math.log2(wb / bb)
                          }

                          function SH(bb, wb) {
                            return Math.round(bb * 2 ** (wb / 12) * 10) / 10
                          }

                          function NH(bb) {
                            return `${bb} ms`
                          }

                          function vH(bb) {
                            return `${bb} st`
                          }
                          const QH = [{
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

                          function GH(bb) {
                            let {
                              synth: wb,
                              onChange: Mb
                            } = bb;
                            const eb = (0, rH.k)(wb);
                            return (0, Cb.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, Cb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Cb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, Cb.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, Cb.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, Cb.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, Cb.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: rH.g.map((bb => (0, Cb.jsx)("button", {
                                      type: "button",
                                      className: pb()("DocsVariantChip", {
                                        Active: wb.waveform === bb
                                      }),
                                      "aria-pressed": wb.waveform === bb,
                                      onClick: () => {
                                        Mb({
                                          waveform: bb
                                        })
                                      },
                                      children: bb
                                    }, bb)))
                                  })]
                                }), (0, Cb.jsx)(bH, {
                                  label: "Pitch",
                                  min: 0,
                                  max: JH(YH, ZH),
                                  step: .1,
                                  value: JH(YH, wb.pitchHz),
                                  format: () => `${wb.pitchHz} Hz`,
                                  onChange: bb => {
                                    Mb({
                                      pitchHz: SH(YH, bb)
                                    })
                                  }
                                }), (0, Cb.jsx)(bH, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: wb.syllableMs,
                                  format: NH,
                                  onChange: bb => {
                                    Mb({
                                      syllableMs: bb
                                    })
                                  }
                                }), (0, Cb.jsx)(bH, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: wb.volume,
                                  onChange: bb => {
                                    Mb({
                                      volume: bb
                                    })
                                  }
                                })]
                              }), (0, Cb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Cb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, Cb.jsx)(bH, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: wb.durationMs,
                                  format: NH,
                                  onChange: bb => {
                                    Mb({
                                      durationMs: bb
                                    })
                                  }
                                }), (0, Cb.jsx)(bH, {
                                  label: "Fade in",
                                  min: 0,
                                  max: eb.durationMs,
                                  step: 1,
                                  value: eb.attackMs,
                                  format: NH,
                                  onChange: bb => {
                                    Mb({
                                      attackMs: bb
                                    })
                                  }
                                }), (0, Cb.jsx)(bH, {
                                  label: "Fade out",
                                  min: 0,
                                  max: eb.durationMs - eb.attackMs,
                                  step: 1,
                                  value: eb.releaseMs,
                                  format: NH,
                                  onChange: bb => {
                                    Mb({
                                      releaseMs: bb
                                    })
                                  }
                                }), (0, Cb.jsx)(bH, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: wb.glideSemitones,
                                  format: vH,
                                  onChange: bb => {
                                    Mb({
                                      glideSemitones: bb
                                    })
                                  }
                                }), (0, Cb.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, Cb.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== wb.lowpassHz,
                                    onChange: bb => {
                                      Mb({
                                        lowpassHz: bb.target.checked ? WH : null
                                      })
                                    }
                                  }), (0, Cb.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== wb.lowpassHz && (0, Cb.jsx)(bH, {
                                  label: "Filter",
                                  min: 0,
                                  max: JH(fH, AH),
                                  step: .1,
                                  value: JH(fH, wb.lowpassHz),
                                  format: () => `${wb.lowpassHz} Hz`,
                                  onChange: bb => {
                                    Mb({
                                      lowpassHz: SH(fH, bb)
                                    })
                                  }
                                })]
                              }), (0, Cb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Cb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), QH.map((bb => {
                                  let {
                                    key: eb,
                                    label: Hb,
                                    max: pb
                                  } = bb;
                                  return (0, Cb.jsx)(bH, {
                                    label: Hb,
                                    min: 0,
                                    max: pb,
                                    step: .1,
                                    value: wb.intonation[eb],
                                    format: vH,
                                    onChange: bb => {
                                      Mb({
                                        intonation: {
                                          ...wb.intonation,
                                          [eb]: bb
                                        }
                                      })
                                    }
                                  }, eb)
                                }))]
                              })]
                            })
                          }
                          const qH = Object.keys(rH.h),
                            aH = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function iH(bb) {
                            var wb;
                            const Mb = JSON.stringify((0, rH.k)(bb));
                            return null !== (wb = qH.find((bb => JSON.stringify((0, rH.k)(rH.h[bb])) === Mb))) && void 0 !== wb ? wb : null
                          }

                          function uH(bb) {
                            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof bb || null === bb) return JSON.stringify(bb);
                            return `{\n${Object.entries(bb).map((bb=>{let[Mb,eb]=bb;return`${wb}    ${Mb}: ${uH(eb,`${wb}    `)},`})).join("\n")}\n${wb}}`
                          }

                          function dH(bb, wb, Mb) {
                            const eb = iH(bb),
                              Hb = [`    line: ${JSON.stringify(wb)},`];
                            return Mb && Hb.push(`    speakerName: ${JSON.stringify(Mb)},`), Hb.push("    voice,"), `const voice = ${eb?JSON.stringify(eb):uH((0,rH.k)(bb))}\n\napi.setClientOption(playerId, "dialogue", {\n${Hb.join("\n")}\n})`
                          }
                          const PH = 400,
                            nH = 90;
                          let yH = null;

                          function oH(bb, wb, Mb) {
                            return yH ??= new AudioContext, yH.resume(), (0, cH.b)(yH, yH.destination, bb, wb, Mb, (() => {}))
                          }

                          function TH() {
                            const [bb, wb] = (0, eb.useState)(rH.h.regular), [Mb, Hb] = (0, eb.useState)(aH[0]), [Vb, gb] = (0, eb.useState)("Innkeeper"), [lb, Lb] = (0, eb.useState)(0), Ib = Oe((bb => bb.volume)), Ob = (0, eb.useRef)(null), Ub = (0, eb.useRef)(0), tb = (0, eb.useRef)(0), Eb = () => {
                              var bb;
                              null === (bb = Ob.current) || void 0 === bb || bb.call(Ob), Ob.current = null
                            };
                            (0, eb.useEffect)((() => () => {
                              var bb;
                              null === (bb = Ob.current) || void 0 === bb || bb.call(Ob), window.clearTimeout(Ub.current)
                            }), []);
                            const Bb = (0, eb.useMemo)((() => ({
                                line: Mb,
                                speakerName: Vb || void 0,
                                voice: bb
                              })), [Mb, Vb, bb]),
                              sb = (0, eb.useRef)(Bb);
                            sb.current = Bb;
                            const hb = iH(bb),
                              zb = bb => {
                                window.clearTimeout(Ub.current), Eb();
                                const {
                                  plan: wb,
                                  synth: Mb
                                } = (0, DH.f)(bb);
                                Mb && (Ob.current = oH(Mb, wb.blips, Ib)), Lb((bb => bb + 1))
                              },
                              Xb = dH(bb, Mb, Vb);
                            return (0, Cb.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, Cb.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, Cb.jsxs)("div", {
                                  children: [(0, Cb.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, Cb.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, Cb.jsx)(mb, {
                                  text: Xb,
                                  label: "Copy code"
                                })]
                              }), (0, Cb.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [qH.map((bb => (0, Cb.jsx)("button", {
                                  type: "button",
                                  className: pb()("DocsVariantChip", {
                                    Active: hb === bb
                                  }),
                                  "aria-pressed": hb === bb,
                                  onClick: () => {
                                    (bb => {
                                      const Mb = rH.h[bb];
                                      wb(Mb), zb({
                                        ...Bb,
                                        voice: Mb
                                      })
                                    })(bb)
                                  },
                                  children: bb
                                }, bb))), !hb && (0, Cb.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, Cb.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, Cb.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, Cb.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, Cb.jsx)(RH.d, {
                                      display: Bb
                                    }, lb)
                                  }), (0, Cb.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: bb => {
                                      bb.preventDefault(), zb(Bb)
                                    },
                                    children: [(0, Cb.jsx)("input", {
                                      value: Mb,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: bb => {
                                        Hb(bb.target.value)
                                      }
                                    }), (0, Cb.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, Cb.jsx)(Fb, {
                                        name: "play"
                                      }), (0, Cb.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, Cb.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: aH.map((bb => (0, Cb.jsx)("button", {
                                      type: "button",
                                      className: pb()("DocsVariantChip", {
                                        Active: Mb === bb
                                      }),
                                      onClick: () => {
                                        var wb;
                                        Hb(wb = bb), zb({
                                          ...Bb,
                                          line: wb
                                        })
                                      },
                                      children: bb
                                    }, bb)))
                                  }), (0, Cb.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, Cb.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, Cb.jsx)("input", {
                                      value: Vb,
                                      placeholder: "No name",
                                      onChange: bb => {
                                        gb(bb.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, Cb.jsx)(GH, {
                                  synth: bb,
                                  onChange: Mb => {
                                    const eb = {
                                      ...bb,
                                      ...Mb
                                    };
                                    wb(eb);
                                    const Hb = {
                                        ...Bb,
                                        voice: eb
                                      },
                                      pb = performance.now();
                                    if (pb - tb.current >= nH) {
                                      tb.current = pb, Eb();
                                      const bb = (0, DH.f)(Hb).plan.blips[0];
                                      bb && (Ob.current = oH((0, rH.k)(eb), [{
                                        ...bb,
                                        atMs: 0
                                      }], Ib))
                                    }
                                    window.clearTimeout(Ub.current), Ub.current = window.setTimeout((() => {
                                      zb(sb.current)
                                    }), PH)
                                  }
                                })]
                              }), (0, Cb.jsx)(xb, {
                                code: Xb,
                                lang: "ts"
                              })]
                            })
                          }
                          var kH = Mb(5773);
                          const bp = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            wp = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Mp = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${wp}`, "g"), kH.i],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, kH.i]
                            ];

                          function ep(bb) {
                            return `${bb.pageId}#${bb.anchor}`
                          }
                          let Hp, pp, Vp;

                          function gp(bb) {
                            const wb = (0, jb.g)(bb),
                              Mb = new Set;
                            for (const [, , eb] of wb.matchAll(jb.b)) {
                              const bb = eb.startsWith("#") ? qb(eb) : null,
                                wb = bb ? ep({
                                  pageId: bb.page.id,
                                  anchor: bb.anchor
                                }) : null;
                              null !== wb && (Hp || (Hp = new Set(Jb.flatMap((bb => Db(bb.layout) ? Qb(bb).sections.map((wb => ep({
                                pageId: bb.id,
                                anchor: wb.heading.anchor
                              }))) : [])))), Hp).has(wb) && Mb.add(wb)
                            }
                            for (const [, , eb] of wb.matchAll(bp)) {
                              const bb = Uw(eb);
                              bb && Mb.add(ep(bb))
                            }
                            return Mb
                          }

                          function lp(bb, wb) {
                            const Mb = new Set,
                              eb = function(bb) {
                                return bb.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(bb);
                            for (const [, Hb] of eb.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) Mb.add(Hb);
                            for (const [Hb, pb] of Mp)
                              for (const [, bb] of(0, kH.d)(eb, Hb, pb)) wb.has(bb) && Mb.add(bb);
                            return Mb
                          }

                          function Lp(bb, wb, Mb, eb) {
                            const Hb = bb.get(wb);
                            Hb ? !eb && Hb.some((bb => bb.pageId === Mb.pageId)) || Hb.push(Mb) : bb.set(wb, [Mb])
                          }
                          const Ip = /^[A-Za-z_$][\w$]*$/;

                          function Op(bb) {
                            return Ip.test(bb.name) ? bb.name : "options"
                          }

                          function Up(bb, wb) {
                            const Mb = bb.params.map(Op).join(", ");
                            return wb ? `${bb.name} = (${Mb}) => {\n\t\n}` : `api.${bb.name}(${Mb})`
                          }

                          function tp(bb) {
                            let {
                              method: wb,
                              isCallback: Mb
                            } = bb;
                            return (0, Cb.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, Cb.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [Mb ? (0, Cb.jsxs)(Cb.Fragment, {
                                  children: [(0, Cb.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: wb.name
                                  }), (0, Cb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, Cb.jsxs)(Cb.Fragment, {
                                  children: [(0, Cb.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, Cb.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: wb.name
                                  }), (0, Cb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), wb.params.map(((bb, Mb) => (0, Cb.jsxs)(eb.Fragment, {
                                  children: [Mb > 0 && (0, Cb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, Cb.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${wb.name}-${Op(bb)}`,
                                    children: bb.name
                                  })]
                                }, bb.name))), (0, Cb.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: Mb ? ") => " : ")"
                                }), Mb && !wb.returns && (0, Cb.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), wb.returns && wb.returns.type && (0, Cb.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!Mb && (0, Cb.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, Cb.jsx)(Kw, {
                                  type: wb.returns.type
                                })]
                              })]
                            })
                          }

                          function Cp(bb) {
                            let {
                              title: wb,
                              references: Mb
                            } = bb;
                            const Hb = (0, eb.useContext)(tw);
                            return (0, Cb.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, Cb.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: wb
                              }), Mb.map((bb => (0, Cb.jsx)(Vb.b, {
                                to: ib(Hb, Nb(bb.pageId), bb.anchor),
                                children: bb.label
                              }, `${bb.pageId}#${bb.anchor}`)))]
                            })
                          }

                          function Ep(bb) {
                            var wb, Mb;
                            let {
                              pageId: eb,
                              anchor: Hb
                            } = bb;
                            const pb = ep({
                                pageId: eb,
                                anchor: Hb
                              }),
                              Vb = null !== (wb = function() {
                                if (!Vp) {
                                  Vp = new Map;
                                  const eb = new Set(Jb.filter((bb => "callbacks" === bb.layout)).flatMap((bb => Qb(bb).sections.map((bb => bb.heading.text)))));
                                  for (const Hb of Jb)
                                    if ("article" === Hb.layout || "snippets" === Hb.layout)
                                      for (const pb of (0, jb.w)(Qb(Hb)))
                                        for (const {
                                            code: Vb
                                          }
                                          of(0, jb.k)(pb.blocks))
                                          for (const gb of lp(Vb, eb)) {
                                            const eb = Ow().get(gb);
                                            if (eb) {
                                              var bb, wb, Mb;
                                              const Vb = {
                                                pageId: Hb.id,
                                                anchor: null !== (bb = null === (wb = pb.heading) || void 0 === wb ? void 0 : wb.anchor) && void 0 !== bb ? bb : "",
                                                label: null !== (Mb = Hb.navTitle) && void 0 !== Mb ? Mb : Hb.title
                                              };
                                              Lp(Vp, ep(eb), Vb, !1)
                                            }
                                          }
                                }
                                return Vp
                              }().get(pb)) && void 0 !== wb ? wb : [],
                              gb = null !== (Mb = function() {
                                if (!pp) {
                                  pp = new Map;
                                  const bb = Nb("changelog");
                                  for (const wb of Qb(bb).sections) {
                                    const Mb = new Set(wb.blocks.flatMap((bb => [...gp(bb)])));
                                    for (const eb of Mb) {
                                      const Mb = {
                                        pageId: bb.id,
                                        anchor: wb.heading.anchor,
                                        label: wb.heading.text
                                      };
                                      Lp(pp, eb, Mb, !0)
                                    }
                                  }
                                }
                                return pp
                              }().get(pb)) && void 0 !== Mb ? Mb : [];
                            return 0 === Vb.length && 0 === gb.length ? null : (0, Cb.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Vb.length > 0 && (0, Cb.jsx)(Cp, {
                                title: "Used in",
                                references: Vb
                              }), gb.length > 0 && (0, Cb.jsx)(Cp, {
                                title: "Changelog",
                                references: gb
                              })]
                            })
                          }

                          function Fp(bb) {
                            let {
                              method: wb,
                              pageId: Mb,
                              anchor: eb,
                              isCallback: Hb
                            } = bb;
                            const pb = Hb ? void 0 : gw().get(wb.name),
                              Vb = wb.description.length > 0 || null === pb || void 0 === pb || !pb.description ? wb.description : (0, jb.E)(pb.description);
                            return (0, Cb.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, Cb.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Cb.jsx)(IM, {
                                  level: 2,
                                  text: wb.name,
                                  anchor: eb,
                                  className: "DocsCardTitle"
                                }), (0, Cb.jsx)(mb, {
                                  text: Up(wb, Hb),
                                  label: Hb ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Cb.jsx)(tp, {
                                method: wb,
                                isCallback: Hb
                              }), pb && null !== pb.deprecation && (0, Cb.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, Cb.jsx)("strong", {
                                  children: "Deprecated"
                                }), pb.deprecation && (0, Cb.jsxs)(Cb.Fragment, {
                                  children: [": ", (0, Cb.jsx)(Xw, {
                                    text: (gb = pb.deprecation, (0, kH.t)(gb, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, kH.h)("`\\w"), (bb => {
                                      let [wb] = bb;
                                      return Ow().has(wb) ? `\`${wb}\`` : wb
                                    })))
                                  })]
                                })]
                              }), Vb.length > 0 && (0, Cb.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Cb.jsx)(CM, {
                                  blocks: Vb
                                })
                              }), wb.params.length > 0 && (0, Cb.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Cb.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, Cb.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: wb.params.map((bb => (0, Cb.jsxs)("div", {
                                    id: `${wb.name}-${Op(bb)}`,
                                    className: "DocsParam",
                                    children: [(0, Cb.jsxs)("dt", {
                                      children: [(0, Cb.jsx)("code", {
                                        className: "DocsParamName",
                                        children: bb.name
                                      }), (0, Cb.jsx)(Kw, {
                                        type: bb.type
                                      })]
                                    }), bb.description && (0, Cb.jsx)("dd", {
                                      children: (0, Cb.jsx)(Xw, {
                                        text: bb.description
                                      })
                                    })]
                                  }, bb.name)))
                                })]
                              }), wb.returns && (wb.returns.type || wb.returns.description.length > 0) && (0, Cb.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Cb.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, Cb.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [wb.returns.type && (0, Cb.jsx)(Kw, {
                                    type: wb.returns.type
                                  }), wb.returns.description.length > 0 && (0, Cb.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, Cb.jsx)(CM, {
                                      blocks: wb.returns.description
                                    })
                                  })]
                                })]
                              }), (0, Cb.jsx)(Ep, {
                                pageId: Mb,
                                anchor: eb
                              })]
                            });
                            var gb
                          }

                          function Bp(bb) {
                            var wb;
                            return null !== bb.defaultValue && "undefined" !== bb.defaultValue ? bb.defaultValue : null !== (wb = bb.example) && void 0 !== wb ? wb : "value"
                          }

                          function sp(bb) {
                            let {
                              setting: wb,
                              pageId: Mb,
                              anchor: eb,
                              setterSnippet: Hb
                            } = bb;
                            const pb = null === wb.defaultValue ? null : Bw(wb.defaultValue);
                            return (0, Cb.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, Cb.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Cb.jsx)(IM, {
                                  level: 2,
                                  text: wb.name,
                                  anchor: eb,
                                  className: "DocsCardTitle"
                                }), (0, Cb.jsx)(mb, {
                                  text: Hb(wb.name, Bp(wb)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Cb.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, Cb.jsxs)("div", {
                                  children: [(0, Cb.jsx)("dt", {
                                    children: "Type"
                                  }), (0, Cb.jsx)("dd", {
                                    children: (0, Cb.jsx)(Kw, {
                                      type: wb.type
                                    })
                                  })]
                                }), null !== wb.defaultValue && (0, Cb.jsxs)("div", {
                                  children: [(0, Cb.jsx)("dt", {
                                    children: "Default"
                                  }), (0, Cb.jsx)("dd", {
                                    children: (0, Cb.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [pb && (0, Cb.jsx)(sw, {
                                        colour: pb
                                      }), wb.defaultValue]
                                    })
                                  })]
                                }), null !== wb.example && (0, Cb.jsxs)("div", {
                                  children: [(0, Cb.jsx)("dt", {
                                    children: "Example"
                                  }), (0, Cb.jsx)("dd", {
                                    children: (0, Cb.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: wb.example
                                    })
                                  })]
                                })]
                              }), wb.description.length > 0 && (0, Cb.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Cb.jsx)(CM, {
                                  blocks: wb.description
                                })
                              }), (0, Cb.jsx)(Ep, {
                                pageId: Mb,
                                anchor: eb
                              })]
                            })
                          }

                          function mp(bb) {
                            let {
                              section: wb
                            } = bb;
                            return (0, Cb.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, Cb.jsx)(IM, {
                                level: 2,
                                text: wb.heading.text,
                                anchor: wb.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, Cb.jsx)("div", {
                                className: "DocsProse",
                                children: (0, Cb.jsx)(CM, {
                                  blocks: wb.blocks
                                })
                              })]
                            })
                          }

                          function hp(bb) {
                            let {
                              section: wb
                            } = bb;
                            return (0, Cb.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Cb.jsx)(IM, {
                                level: wb.heading.level,
                                text: wb.heading.text,
                                anchor: wb.heading.anchor
                              }), (0, Cb.jsx)(CM, {
                                blocks: wb.blocks
                              })]
                            })
                          }
                          const zp = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function Xp(bb) {
                            let {
                              page: wb,
                              section: Mb
                            } = bb;
                            if ("methods" === wb.layout || "callbacks" === wb.layout) return (0, Cb.jsx)(Fp, {
                              method: jM(Mb),
                              pageId: wb.id,
                              anchor: Mb.heading.anchor,
                              isCallback: "callbacks" === wb.layout
                            });
                            if ("settings" === wb.layout) {
                              const bb = function(bb) {
                                const wb = {
                                  name: bb.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const eb of bb.blocks) {
                                  var Mb;
                                  if (xM(eb)) continue;
                                  const bb = "paragraph" === eb.kind ? eb.text.match(KM) : null;
                                  if (!bb) {
                                    wb.description.push(eb);
                                    continue
                                  }
                                  const Hb = null !== (Mb = XM(bb[2])) && void 0 !== Mb ? Mb : bb[2];
                                  "Type" === bb[1] ? wb.type = Hb : "Default" === bb[1] ? wb.defaultValue = Hb : "" !== Hb && (wb.example = Hb)
                                }
                                return wb.type ? wb : null
                              }(Mb);
                              if (bb) return (0, Cb.jsx)(sp, {
                                setting: bb,
                                pageId: wb.id,
                                anchor: Mb.heading.anchor,
                                setterSnippet: wb.setterSnippet
                              })
                            }
                            return "snippets" === wb.layout ? (0, Cb.jsx)(mp, {
                              section: Mb
                            }) : "changelog" === wb.layout ? (0, Cb.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, Cb.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, Cb.jsx)(IM, {
                                  level: 2,
                                  text: Mb.heading.text,
                                  anchor: Mb.heading.anchor
                                })
                              }), (0, Cb.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, Cb.jsx)(CM, {
                                  blocks: rM(Mb.blocks)
                                })
                              })]
                            }) : wb.gallery ? (0, Cb.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Cb.jsx)(IM, {
                                level: Mb.heading.level,
                                text: Mb.heading.text,
                                anchor: Mb.heading.anchor
                              }), (0, Cb.jsx)(Re, {
                                kind: wb.gallery,
                                content: Qb(wb),
                                blocks: Mb.blocks
                              })]
                            }) : (0, Cb.jsx)(hp, {
                              section: Mb
                            })
                          }

                          function xp(bb) {
                            let {
                              page: wb,
                              onTocChange: Mb
                            } = bb;
                            const Hb = Qb(wb),
                              [pb, Vb] = (0, eb.useState)(""),
                              gb = "article" !== wb.layout,
                              lb = BM(wb.gallery) ? wb.gallery : null,
                              Lb = null !== lb,
                              Ib = pb.trim().toLowerCase(),
                              Ob = (0, eb.useRef)(null),
                              Ub = (0, eb.useCallback)((bb => {
                                var wb;
                                null === (wb = Ob.current) || void 0 === wb || wb.preview(bb)
                              }), []),
                              tb = (0, eb.useMemo)((() => {
                                if (!wb.hasParticlePlayground) return [];
                                const bb = YM(Hb.intro).find((bb => "names" === bb.kind && !bb.names.some((bb => null !== QM(bb.name)))));
                                return "names" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.names.map((bb => bb.name)) : []
                              }), [wb, Hb]),
                              Eb = (0, eb.useMemo)((() => {
                                if (!wb.hasTextPlayground) return [];
                                const bb = Hb.sections.flatMap((bb => bb.blocks.flatMap((bb => {
                                  var wb;
                                  return (null !== (wb = cM(bb)) && void 0 !== wb ? wb : []).flatMap((bb => Qw(bb.name) ? [bb.name] : []))
                                }))));
                                return [...new Set(bb)]
                              }), [wb, Hb]),
                              Fb = (0, eb.useMemo)((() => Ib ? Hb.sections.filter((bb => function(bb, wb) {
                                return !!bb.heading.text.toLowerCase().includes(wb) || bb.blocks.some((bb => (0, jb.g)(bb).toLowerCase().includes(wb)))
                              }(bb, Ib))) : Hb.sections), [Hb, Ib]),
                              Bb = (0, eb.useMemo)((() => function(bb, wb) {
                                return "article" !== bb.layout ? wb.map((bb => ({
                                  anchor: bb.heading.anchor,
                                  text: bb.heading.text,
                                  level: 2
                                }))) : wb.flatMap((bb => {
                                  const wb = bb.blocks.flatMap((bb => "heading" === bb.kind && 3 === bb.level ? [{
                                    anchor: bb.anchor,
                                    text: bb.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: bb.heading.anchor,
                                    text: bb.heading.text,
                                    level: 2
                                  }, ...wb]
                                }))
                              }(wb, Fb)), [wb, Fb]);
                            return (0, eb.useEffect)((() => {
                              Mb(Bb)
                            }), [Bb, Mb]), (0, Cb.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, Cb.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, Cb.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Hb.title || wb.title
                                }), (0, Cb.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: wb.summary
                                }), (0, Cb.jsx)(ye, {
                                  page: wb
                                }), gb && (0, Cb.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, Cb.jsxs)("span", {
                                    children: [(0, Cb.jsx)("strong", {
                                      children: Hb.sections.length
                                    }), " ", zp[wb.layout]]
                                  })
                                })]
                              }), "" === wb.slug && (0, Cb.jsx)(ce, {}), lb && (0, Cb.jsx)(Ae, {
                                kind: lb
                              }, lb), wb.hasParticlePlayground && (0, Cb.jsx)(LH, {
                                ref: Ob,
                                textures: tb
                              }), !Lb && Hb.intro.length > 0 && (0, Cb.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: wb.gallery ? (0, Cb.jsx)(se.Provider, {
                                  value: wb.hasParticlePlayground ? Ub : null,
                                  children: (0, Cb.jsx)(Re, {
                                    kind: wb.gallery,
                                    content: Hb,
                                    blocks: Hb.intro
                                  })
                                }) : (0, Cb.jsx)(CM, {
                                  blocks: rM(Hb.intro)
                                })
                              }), wb.hasTextPlayground && (0, Cb.jsx)(KH, {
                                fontAwesomeIcons: Eb
                              }), wb.hasVoicePlayground && (0, Cb.jsx)(TH, {}), wb.childPageIds && (0, Cb.jsx)(ce, {
                                cards: wb.childPageIds.map((bb => ({
                                  pageId: bb
                                }))),
                                label: wb.title
                              }), gb && (0, Cb.jsx)(hM, {
                                className: "DocsFilterBar",
                                value: pb,
                                placeholder: `Filter ${Hb.sections.length} ${zp[wb.layout]}\u2026`,
                                label: `Filter ${zp[wb.layout]}`,
                                onChange: Vb,
                                count: Ib ? {
                                  visible: Fb.length,
                                  total: Hb.sections.length
                                } : null
                              }), !Lb && (0, Cb.jsxs)("div", {
                                className: `DocsSections Layout-${wb.layout}`,
                                children: [Fb.map((bb => (0, Cb.jsx)(Xp, {
                                  page: wb,
                                  section: bb
                                }, bb.heading.anchor))), 0 === Fb.length && (0, Cb.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", zp[wb.layout], " match \u201c", pb, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const jp = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Kp(bb) {
                            let {
                              entry: wb,
                              isActive: Mb,
                              onNavigate: eb,
                              label: Hb,
                              children: Vb
                            } = bb;
                            return (0, Cb.jsx)("a", {
                              href: `#${wb.anchor}`,
                              "aria-label": Hb,
                              className: pb()(`Level${wb.level}`, {
                                Active: Mb
                              }),
                              "aria-current": Mb ? "location" : void 0,
                              onClick: bb => {
                                bb.preventDefault(), eb(wb.anchor)
                              },
                              children: Vb
                            })
                          }

                          function rp(bb) {
                            let {
                              toc: wb,
                              activeAnchor: Mb,
                              onNavigate: Hb
                            } = bb;
                            const Vb = Math.max(0, wb.findIndex((bb => bb.anchor === Mb))),
                              gb = (0, eb.useRef)(null),
                              lb = (0, eb.useRef)(!1);
                            (0, eb.useEffect)((() => {
                              var bb, Mb;
                              const eb = null === (bb = gb.current) || void 0 === bb ? void 0 : bb.closest(".DocsToc"),
                                Hb = null === (Mb = gb.current) || void 0 === Mb ? void 0 : Mb.querySelector(".DocsTimelineNotch.Active");
                              if (!eb || !Hb) return;
                              let pb = 0;
                              if (Vb === wb.length - 1) pb = eb.scrollHeight;
                              else if (Vb > 0) {
                                const bb = eb.getBoundingClientRect(),
                                  wb = Hb.getBoundingClientRect();
                                pb = eb.scrollTop + wb.top + wb.height / 2 - (bb.top + eb.clientHeight / 2)
                              }
                              eb.scrollTo({
                                top: pb,
                                behavior: lb.current ? "smooth" : "auto"
                              }), lb.current = !0
                            }), [Vb, wb.length]);
                            const Lb = [];
                            return wb.forEach(((bb, wb) => {
                              var Mb, eb, Hb;
                              const pb = function(bb) {
                                  const wb = bb.trim().match(jp);
                                  return wb ? {
                                    day: wb[1],
                                    month: `${wb[2]} ${wb[3]}`
                                  } : null
                                }(bb.text),
                                Vb = null !== (Mb = null === pb || void 0 === pb ? void 0 : pb.month) && void 0 !== Mb ? Mb : null;
                              null !== Vb && (null === (eb = Lb.at(-1)) || void 0 === eb ? void 0 : eb.month) === Vb || Lb.push({
                                month: Vb,
                                entries: []
                              }), Lb.at(-1).entries.push({
                                entry: bb,
                                day: null !== (Hb = null === pb || void 0 === pb ? void 0 : pb.day) && void 0 !== Hb ? Hb : null,
                                index: wb
                              })
                            })), (0, Cb.jsx)("ol", {
                              ref: gb,
                              className: "DocsTimeline",
                              children: Lb.map((bb => {
                                let {
                                  month: wb,
                                  entries: Mb
                                } = bb;
                                return (0, Cb.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [wb && (0, Cb.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: wb
                                  }), (0, Cb.jsx)("ol", {
                                    children: Mb.map((bb => {
                                      let {
                                        entry: wb,
                                        day: Mb,
                                        index: eb
                                      } = bb;
                                      return (0, Cb.jsx)("li", {
                                        className: pb()("DocsTimelineNotch", {
                                          Passed: eb < Vb,
                                          Active: eb === Vb
                                        }),
                                        children: (0, Cb.jsx)(Kp, {
                                          entry: wb,
                                          isActive: eb === Vb,
                                          onNavigate: Hb,
                                          label: wb.text,
                                          children: (0, Cb.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== Mb && void 0 !== Mb ? Mb : wb.text
                                          })
                                        })
                                      }, wb.anchor)
                                    }))
                                  })]
                                }, Mb[0].entry.anchor)
                              }))
                            })
                          }

                          function Rp(bb) {
                            let {
                              isChangelog: wb,
                              toc: Mb,
                              activeAnchor: eb,
                              onNavigate: Hb
                            } = bb;
                            return 0 === Mb.length ? null : (0, Cb.jsxs)(Cb.Fragment, {
                              children: [(0, Cb.jsx)("div", {
                                className: "DocsTocTitle",
                                children: wb ? "Updates" : "On this page"
                              }), wb ? (0, Cb.jsx)(rp, {
                                toc: Mb,
                                activeAnchor: eb,
                                onNavigate: Hb
                              }) : (0, Cb.jsx)("ul", {
                                children: Mb.map((bb => (0, Cb.jsx)("li", {
                                  children: (0, Cb.jsx)(Kp, {
                                    entry: bb,
                                    isActive: bb.anchor === eb,
                                    onNavigate: Hb,
                                    children: bb.text.replace(/`/g, "")
                                  })
                                }, bb.anchor)))
                              })]
                            })
                          }
                          const Dp = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            cp = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Yp = 20,
                            Zp = 10,
                            fp = 40,
                            Ap = 120;
                          let Wp;

                          function Jp(bb) {
                            const wb = bb.gallery;
                            if (!wb) return [];
                            if (BM(wb)) return function(bb) {
                              return mM(bb).entries.map((bb => bb.name))
                            }(wb).map((Mb => ({
                              page: bb,
                              anchor: fM(wb, Mb),
                              title: Mb,
                              kind: cp[wb],
                              text: "",
                              listedUnder: bb.title
                            })));
                            const Mb = Qb(bb);
                            return (0, jb.w)(Mb).flatMap((eb => {
                              const Hb = eb.heading ? `${bb.title} \u203a ${eb.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : bb.title;
                              return WM(wb, Mb, eb.blocks).flatMap((Mb => "names" !== Mb.kind ? [] : Mb.names.map((eb => {
                                const pb = Mb.isSongs ? "Song" : cp[wb];
                                return {
                                  page: bb,
                                  anchor: eb.anchor,
                                  title: eb.name,
                                  kind: pb,
                                  text: "",
                                  listedUnder: Hb
                                }
                              }))))
                            }))
                          }

                          function Sp(bb, wb, Mb) {
                            const eb = bb.title.toLowerCase();
                            let Hb = 0;
                            if (eb === wb) Hb = 100;
                            else if (eb.startsWith(wb)) Hb = 80;
                            else if (eb.includes(wb)) Hb = 60;
                            else if (Mb.every((bb => eb.includes(bb)))) Hb = 45;
                            else {
                              if (!bb.text.toLowerCase().includes(wb)) return 0;
                              Hb = 20
                            }
                            return Hb - Math.min(eb.length / 10, 9) + ("Page" === bb.kind ? 8 : "Method" === bb.kind ? 3 : 0) - (bb.listedUnder ? Yp : 0)
                          }

                          function Np(bb, wb) {
                            const Mb = bb.toLowerCase().indexOf(wb),
                              eb = Math.max(0, Mb - Ap / 3);
                            return `${eb>0?"\u2026":""}${bb.slice(eb,eb+Ap)}${eb+Ap<bb.length?"\u2026":""}`
                          }

                          function vp(bb) {
                            let {
                              text: wb,
                              query: Mb
                            } = bb;
                            const eb = Mb ? wb.toLowerCase().indexOf(Mb) : -1;
                            return -1 === eb ? (0, Cb.jsx)(Cb.Fragment, {
                              children: wb
                            }) : (0, Cb.jsxs)(Cb.Fragment, {
                              children: [wb.slice(0, eb), (0, Cb.jsx)("mark", {
                                children: wb.slice(eb, eb + Mb.length)
                              }), wb.slice(eb + Mb.length)]
                            })
                          }

                          function Qp(bb) {
                            let {
                              basePath: wb,
                              onClose: Mb
                            } = bb;
                            const Hb = (0, gb.y)(),
                              [Vb, lb] = (0, eb.useState)(""),
                              [Lb, Ib] = (0, eb.useState)(0),
                              Ob = (0, eb.useRef)(null),
                              Ub = (0, eb.useRef)(null),
                              tb = Vb.trim().toLowerCase(),
                              Eb = (0, eb.useMemo)((() => {
                                const bb = (Wp || (Wp = Jb.flatMap((bb => {
                                  const wb = Qb(bb);
                                  return [{
                                    page: bb,
                                    anchor: "",
                                    title: bb.title,
                                    kind: "Page",
                                    text: bb.summary
                                  }, ...wb.sections.flatMap((wb => {
                                    const Mb = wb.blocks.filter((bb => "paragraph" === bb.kind)).map(jb.g).join(" ").replace(/[`*]/g, ""),
                                      eb = {
                                        page: bb,
                                        anchor: wb.heading.anchor,
                                        title: wb.heading.text.replace(/`/g, ""),
                                        kind: Dp[bb.layout],
                                        text: Mb
                                      },
                                      Hb = wb.blocks.flatMap((wb => "article" === bb.layout && "heading" === wb.kind && 3 === wb.level ? [{
                                        page: bb,
                                        anchor: wb.anchor,
                                        title: wb.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: eb.title
                                      }] : []));
                                    return [eb, ...Hb]
                                  })), ...Jp(bb)]
                                }))), Wp);
                                if (!tb) return bb.filter((bb => "Page" === bb.kind));
                                const wb = tb.split(/\s+/);
                                let Mb = 0;
                                return bb.map((bb => ({
                                  entry: bb,
                                  score: Sp(bb, tb, wb)
                                }))).filter((bb => bb.score > 0)).sort(((bb, wb) => wb.score - bb.score)).filter((bb => !bb.entry.listedUnder || (Mb++, Mb <= Zp))).slice(0, fp).map((bb => bb.entry))
                              }), [tb]);
                            (0, eb.useEffect)((() => {
                              Ib(0)
                            }), [tb]), (0, eb.useEffect)((() => {
                              const bb = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === bb || void 0 === bb || bb.focus()
                              }
                            }), []), (0, eb.useEffect)((() => {
                              var bb, wb;
                              null === (bb = Ob.current) || void 0 === bb || null === (wb = bb.querySelector(".Active")) || void 0 === wb || wb.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Lb]);
                            const Bb = bb => {
                              Hb(ib(wb, bb.page, bb.anchor)), Mb()
                            };
                            return (0, Cb.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: bb => {
                                bb.target === bb.currentTarget && Mb()
                              },
                              children: (0, Cb.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: bb => {
                                  bb.target !== Ub.current && bb.preventDefault()
                                },
                                onKeyDown: bb => {
                                  if ("Escape" === bb.key) Mb();
                                  else if ("Tab" === bb.key) {
                                    var wb;
                                    bb.preventDefault(), null === (wb = Ub.current) || void 0 === wb || wb.focus()
                                  }
                                },
                                children: [(0, Cb.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, Cb.jsx)(Fb, {
                                    name: "magnifying-glass"
                                  }), (0, Cb.jsx)("input", {
                                    ref: Ub,
                                    autoFocus: !0,
                                    value: Vb,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Eb.length > 0 ? `DocsSearchResult-${Lb}` : void 0,
                                    onChange: bb => {
                                      lb(bb.target.value)
                                    },
                                    onKeyDown: bb => {
                                      if ("ArrowDown" === bb.key || "ArrowUp" === bb.key) {
                                        bb.preventDefault();
                                        const wb = "ArrowDown" === bb.key ? 1 : -1;
                                        Ib((Lb + wb + Eb.length) % Math.max(Eb.length, 1))
                                      } else "Enter" === bb.key && Eb[Lb] && Bb(Eb[Lb])
                                    }
                                  }), (0, Cb.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, Cb.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Ob,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!tb && (0, Cb.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Eb.map(((bb, wb) => {
                                    var Mb;
                                    return (0, Cb.jsxs)("li", {
                                      id: `DocsSearchResult-${wb}`,
                                      role: "option",
                                      "aria-selected": wb === Lb,
                                      className: pb()("DocsSearchResult", {
                                        Active: wb === Lb
                                      }),
                                      onMouseMove: () => {
                                        Ib(wb)
                                      },
                                      onClick: () => {
                                        Bb(bb)
                                      },
                                      children: [(0, Cb.jsx)(Fb, {
                                        name: bb.page.icon
                                      }), (0, Cb.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, Cb.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, Cb.jsx)(vp, {
                                            text: bb.title,
                                            query: tb
                                          })
                                        }), bb.text && (0, Cb.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, Cb.jsx)(vp, {
                                            text: Np(bb.text, tb),
                                            query: tb
                                          })
                                        })]
                                      }), (0, Cb.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === bb.kind ? "Page" : null !== (Mb = bb.listedUnder) && void 0 !== Mb ? Mb : `${bb.kind} \xb7 ${bb.page.title}`
                                      })]
                                    }, `${bb.page.id}#${bb.anchor}`)
                                  })), tb && 0 === Eb.length && (0, Cb.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Vb, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function Gp(bb, wb) {
                            if (wb < 10) return `${bb.toFixed(1)}s`;
                            const Mb = Math.floor(bb);
                            return `${Math.floor(Mb/60)}:${String(Mb%60).padStart(2,"0")}`
                          }

                          function qp() {
                            const bb = Oe((bb => bb.track)),
                              wb = Oe((bb => bb.volume)),
                              [Mb, Hb] = (0, eb.useState)(0),
                              Vb = (0, eb.useRef)(Me);
                            if ((0, eb.useEffect)((() => {
                                if (!bb) return;
                                if (Hb(Ee()), "playing" !== bb.status) return;
                                let wb = 0;
                                const Mb = () => {
                                  Hb(Ee()), wb = requestAnimationFrame(Mb)
                                };
                                return wb = requestAnimationFrame(Mb), () => {
                                  cancelAnimationFrame(wb)
                                }
                              }), [bb]), !bb) return null;
                            const gb = "paused" !== bb.status,
                              lb = Math.min(Mb, bb.duration);
                            return (0, Cb.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, Cb.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, Cb.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": gb ? `Pause ${bb.name}` : `Play ${bb.name}`,
                                  onClick: Ce,
                                  children: (0, Cb.jsx)(Fb, {
                                    name: gb ? "pause" : "play"
                                  })
                                }), (0, Cb.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, Cb.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, Cb.jsx)("code", {
                                      children: bb.name
                                    }), (0, Cb.jsx)("span", {
                                      children: bb.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, Cb.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, Cb.jsx)("span", {
                                      children: Gp(lb, bb.duration)
                                    }), (0, Cb.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: bb.duration || 1,
                                      step: .01,
                                      value: lb,
                                      disabled: 0 === bb.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${Gp(lb,bb.duration)} of ${Gp(bb.duration,bb.duration)}`,
                                      onChange: bb => {
                                        const wb = Number(bb.target.value);
                                        ! function(bb) {
                                          var wb;
                                          ge = bb, null === (wb = pe) || void 0 === wb || wb.seek(bb)
                                        }(wb), Hb(wb)
                                      }
                                    }), (0, Cb.jsx)("span", {
                                      children: bb.duration > 0 ? Gp(bb.duration, bb.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, Cb.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, Cb.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === wb ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === wb ? Fe(Vb.current) : (Vb.current = wb, Fe(0))
                                    },
                                    children: (0, Cb.jsx)(Fb, {
                                      name: "volume",
                                      className: pb()({
                                        Muted: 0 === wb
                                      })
                                    })
                                  }), (0, Cb.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: wb,
                                    "aria-label": "Volume",
                                    onChange: bb => {
                                      Fe(Number(bb.target.value))
                                    }
                                  })]
                                }), (0, Cb.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var wb;
                                    null === (wb = document.querySelector(`[data-docs-track="${CSS.escape(ee(bb.name,bb.isSong))}"]`)) || void 0 === wb || wb.focus(), Be()
                                  },
                                  children: (0, Cb.jsx)(Fb, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var ap = Mb(43);
                          const ip = "docsTheme",
                            dp = window.matchMedia("(prefers-color-scheme: light)");

                          function Pp(bb) {
                            let {
                              theme: wb,
                              onChange: Mb
                            } = bb;
                            const eb = "dark" === wb ? "light" : "dark";
                            return (0, Cb.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${eb} theme`,
                              title: `Switch to ${eb} theme`,
                              onClick: () => {
                                Mb(eb)
                              },
                              children: (0, Cb.jsx)(Fb, {
                                name: "dark" === wb ? "moon" : "sun"
                              })
                            })
                          }
                          const np = "https://github.com/Bloxdy/code-api",
                            yp = "https://discord.gg/playbloxd",
                            op = 180,
                            Tp = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function kp(bb) {
                            let {
                              basePath: wb,
                              activePageId: Mb,
                              onNavigate: eb
                            } = bb;
                            return (0, Cb.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Sb.map((bb => (0, Cb.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, Cb.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: bb.title
                                }), bb.pageIds.map((bb => {
                                  var Hb;
                                  const gb = Nb(bb);
                                  return (0, Cb.jsxs)(Vb.b, {
                                    to: ib(wb, gb),
                                    className: pb()("DocsNavLink", {
                                      Active: gb.id === Mb
                                    }),
                                    "aria-current": gb.id === Mb ? "page" : void 0,
                                    onClick: eb,
                                    children: [(0, Cb.jsx)(Fb, {
                                      name: gb.icon
                                    }), (0, Cb.jsx)("span", {
                                      children: null !== (Hb = gb.navTitle) && void 0 !== Hb ? Hb : gb.title
                                    })]
                                  }, gb.id)
                                }))]
                              }, bb.title)))
                            })
                          }

                          function bV(bb) {
                            let {
                              basePath: wb,
                              pageId: Mb
                            } = bb;
                            const eb = Sb.flatMap((bb => bb.pageIds)),
                              Hb = eb.indexOf(Mb),
                              pb = Hb > 0 ? Nb(eb[Hb - 1]) : null,
                              gb = Hb < eb.length - 1 ? Nb(eb[Hb + 1]) : null;
                            return (0, Cb.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [pb ? (0, Cb.jsxs)(Vb.b, {
                                className: "DocsPagerLink Previous",
                                to: ib(wb, pb),
                                children: [(0, Cb.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, Cb.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: pb.title
                                })]
                              }) : (0, Cb.jsx)("span", {}), gb && (0, Cb.jsxs)(Vb.b, {
                                className: "DocsPagerLink Next",
                                to: ib(wb, gb),
                                children: [(0, Cb.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, Cb.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: gb.title
                                })]
                              })]
                            })
                          }

                          function wV(bb) {
                            let {
                              basePath: wb,
                              embedded: Mb = !1
                            } = bb;
                            const {
                              pageSlug: Hb = ""
                            } = (0, gb.E)(), Lb = (0, gb.v)(), Ib = (0, gb.y)(), Ob = (Ub = Hb, Jb.find((bb => bb.slug === Ub)));
                            var Ub;
                            const [tb, Eb] = function() {
                              const [bb, wb] = (0, eb.useState)((() => {
                                const bb = ap.i.getItem(ip);
                                return "dark" === bb || "light" === bb ? bb : null
                              })), [Mb, Hb] = (0, eb.useState)(dp.matches ? "light" : "dark");
                              return (0, eb.useEffect)((() => {
                                const bb = () => {
                                  Hb(dp.matches ? "light" : "dark")
                                };
                                return dp.addEventListener("change", bb), () => {
                                  dp.removeEventListener("change", bb)
                                }
                              }), []), [null !== bb && void 0 !== bb ? bb : Mb, bb => {
                                ap.i.setItem(ip, bb), wb(bb)
                              }]
                            }(), [Bb, sb] = (0, eb.useState)(null), [mb, hb] = (0, eb.useState)(!1), [zb, Xb] = (0, eb.useState)(!1), [xb, Kb] = (0, eb.useState)([]), rb = function(bb, wb) {
                              const [Mb, Hb] = (0, eb.useState)("");
                              return (0, eb.useEffect)((() => {
                                if (!wb) return;
                                let Mb = 0;
                                const eb = () => {
                                    var eb, pb;
                                    Mb = 0;
                                    const Vb = wb.getBoundingClientRect().top + op;
                                    let gb = null !== (eb = null === (pb = bb[0]) || void 0 === pb ? void 0 : pb.anchor) && void 0 !== eb ? eb : "";
                                    for (const wb of bb) {
                                      const bb = document.getElementById(wb.anchor);
                                      bb && bb.getBoundingClientRect().top <= Vb && (gb = wb.anchor)
                                    }
                                    wb.scrollTop + wb.clientHeight >= wb.scrollHeight - 2 && wb.scrollTop > 0 && bb.length > 0 && (gb = bb[bb.length - 1].anchor), Hb(gb)
                                  },
                                  pb = () => {
                                    Mb || (Mb = requestAnimationFrame(eb))
                                  };
                                return eb(), wb.addEventListener("scroll", pb, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(Mb), wb.removeEventListener("scroll", pb)
                                }
                              }), [bb, wb]), Mb
                            }(xb, Bb), Rb = "" === Hb && Lb.hash ? function(bb) {
                              const wb = (0, jb.q)(bb);
                              if (Gb(Nb("welcome"), wb)) return null;
                              const Mb = Object.hasOwn(ab, wb) ? ab[wb] : null;
                              if (Mb) return {
                                page: Nb(Mb.pageId),
                                anchor: Mb.anchor
                              };
                              const eb = Nb("readme");
                              return Gb(eb, wb) ? {
                                page: eb,
                                anchor: wb
                              } : qb(`#${wb}`)
                            }(Lb.hash) : null;
                            (0, eb.useEffect)((() => (lb.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              lb.c.set({
                                musicOnFromPage: !0
                              }), Be()
                            })), []), (0, eb.useEffect)((() => {
                              const bb = bb => {
                                const wb = bb.target;
                                if (wb.closest(".DocsTextDialog")) return;
                                const Mb = wb.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(wb.tagName);
                                "k" === bb.key && (bb.metaKey || bb.ctrlKey) || "/" === bb.key && !Mb ? (bb.preventDefault(), Xb(!0)) : "Escape" === bb.key && hb(!1)
                              };
                              return window.addEventListener("keydown", bb), () => {
                                window.removeEventListener("keydown", bb)
                              }
                            }), []);
                            const Db = (0, eb.useRef)(null);
                            (0, eb.useLayoutEffect)((() => {
                              var bb, wb;
                              if (!Bb) return;
                              const Mb = Db.current === Lb.pathname;
                              Db.current = Lb.pathname;
                              const eb = (0, jb.q)(Lb.hash),
                                Hb = eb ? document.getElementById(eb) : null;
                              if (null === (bb = Bb.querySelector(".DocsTargeted")) || void 0 === bb || bb.classList.remove("DocsTargeted"), null === Hb || void 0 === Hb || null === (wb = Hb.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === wb || wb.classList.add("DocsTargeted"), Hb) {
                                var pb;
                                const bb = Hb.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (pb = Hb.closest(".DocsChangelogEntry")) && void 0 !== pb ? pb : Hb).scrollIntoView({
                                  block: bb ? "center" : "start",
                                  behavior: Mb ? "smooth" : "auto"
                                })
                              } else Mb || Bb.scrollTo({
                                top: 0
                              })
                            }), [Bb, Lb.pathname, Lb.hash, Lb.key]);
                            const cb = (0, eb.useCallback)((() => {
                                hb(!1)
                              }), []),
                              Yb = (0, eb.useCallback)((bb => {
                                Ib({
                                  hash: bb
                                })
                              }), [Ib]);
                            if (Rb) return (0, Cb.jsx)(gb.e, {
                              replace: !0,
                              to: ib(wb, Rb.page, Rb.anchor)
                            });
                            if (!Ob) return (0, Cb.jsx)(gb.e, {
                              replace: !0,
                              to: wb
                            });
                            const Zb = Mb ? "div" : "main";
                            return (0, Cb.jsx)(tw.Provider, {
                              value: wb,
                              children: (0, Cb.jsx)(Cw.Provider, {
                                value: Bb,
                                children: (0, Cb.jsxs)("div", {
                                  ref: sb,
                                  className: pb()("DocsSite", {
                                    Embedded: Mb,
                                    NavOpen: mb
                                  }),
                                  "data-theme": tb,
                                  children: [(0, Cb.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, Cb.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": mb ? "Close menu" : "Open menu",
                                      "aria-expanded": mb,
                                      onClick: () => {
                                        hb(!mb)
                                      },
                                      children: (0, Cb.jsx)(Fb, {
                                        name: mb ? "cross" : "menu"
                                      })
                                    }), (0, Cb.jsxs)(Vb.b, {
                                      to: wb,
                                      className: "DocsBrand",
                                      children: [(0, Cb.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, Cb.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, Cb.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, Cb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        Xb(!0)
                                      },
                                      children: [(0, Cb.jsx)(Fb, {
                                        name: "magnifying-glass"
                                      }), (0, Cb.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, Cb.jsxs)("kbd", {
                                        children: [Tp ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, Cb.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, Cb.jsxs)("a", {
                                        href: yp,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Cb.jsx)(Fb, {
                                          name: "discord"
                                        }), (0, Cb.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, Cb.jsxs)("a", {
                                        href: np,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Cb.jsx)(Fb, {
                                          name: "external-link"
                                        }), (0, Cb.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !Mb && (0, Cb.jsxs)(Vb.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, Cb.jsx)(Fb, {
                                          name: "play"
                                        }), (0, Cb.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, Cb.jsx)(Pp, {
                                        theme: tb,
                                        onChange: Eb
                                      })]
                                    })]
                                  }), (0, Cb.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, Cb.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, Cb.jsx)(kp, {
                                        basePath: wb,
                                        activePageId: Ob.id,
                                        onNavigate: cb
                                      })
                                    }), (0, Cb.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: cb
                                    }), (0, Cb.jsxs)(Zb, {
                                      className: "DocsMain",
                                      children: [(0, Cb.jsx)(xp, {
                                        page: Ob,
                                        onTocChange: Kb
                                      }, Ob.id), (0, Cb.jsx)(bV, {
                                        basePath: wb,
                                        pageId: Ob.id
                                      })]
                                    }), (0, Cb.jsx)("aside", {
                                      className: pb()("DocsToc", {
                                        Timeline: "changelog" === Ob.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, Cb.jsx)(Rp, {
                                        isChangelog: "changelog" === Ob.layout,
                                        toc: xb,
                                        activeAnchor: rb,
                                        onNavigate: Yb
                                      })
                                    })]
                                  }), (0, Cb.jsx)(qp, {}), zb && (0, Cb.jsx)(Qp, {
                                    basePath: wb,
                                    onClose: () => {
                                      Xb(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5629: (bb, wb, Mb) => {
                          Mb.d(wb, {
                            A: () => tb,
                            E: () => Ub,
                            b: () => eb,
                            d: () => Vb,
                            g: () => Fb,
                            k: () => Eb,
                            n: () => gb,
                            q: () => Hb,
                            s: () => pb,
                            w: () => Cb
                          });
                          const eb = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Hb(bb) {
                            try {
                              return decodeURIComponent(bb.slice(1))
                            } catch {
                              return bb.slice(1)
                            }
                          }

                          function pb(bb) {
                            return bb.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Vb = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${eb.source}`, "g");

                          function gb(bb, wb) {
                            return 2 === bb.length ? wb.replace(/^ (.*) $/, "$1") : wb
                          }

                          function lb(bb) {
                            return "" === bb.trim()
                          }

                          function Lb(bb) {
                            const wb = [];
                            for (const Mb of bb.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) wb.length > 0 && wb[wb.length - 1].endsWith("\\") ? wb[wb.length - 1] += `|${Mb}` : wb.push(Mb);
                            return wb.map((bb => bb.trim().replaceAll("\\|", "|")))
                          }
                          const Ib = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Ob(bb) {
                            const wb = [],
                              Mb = [{
                                indent: -1,
                                items: wb
                              }];
                            let eb = null;
                            for (const Hb of bb) {
                              const bb = Hb.match(Ib);
                              if (!bb) {
                                eb && (eb.text += ` ${Hb.trim()}`);
                                continue
                              }
                              const wb = bb[1].replace(/\t/g, "  ").length;
                              for (; wb <= Mb[Mb.length - 1].indent;) Mb.pop();
                              eb = {
                                text: bb[3].trim(),
                                children: []
                              }, Mb[Mb.length - 1].items.push(eb), Mb.push({
                                indent: wb,
                                items: eb.children
                              })
                            }
                            return wb
                          }

                          function Ub(bb) {
                            const wb = bb.replace(/\r\n/g, "\n").split("\n"),
                              Mb = [];
                            let eb = 0;
                            for (; eb < wb.length;) {
                              const bb = wb[eb];
                              if (lb(bb)) {
                                eb++;
                                continue
                              }
                              const Hb = bb.match(/^\s*```\s*(\w*)\s*$/);
                              if (Hb) {
                                const bb = [];
                                for (eb++; eb < wb.length && !/^\s*```\s*$/.test(wb[eb]);) bb.push(wb[eb]), eb++;
                                eb++, Mb.push({
                                  kind: "code",
                                  lang: Hb[1] || "text",
                                  code: bb.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Vb = bb.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Vb) {
                                const bb = Vb[2].trim();
                                Mb.push({
                                  kind: "heading",
                                  level: Vb[1].length,
                                  text: bb,
                                  anchor: pb(bb)
                                }), eb++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(bb)) {
                                Mb.push({
                                  kind: "rule"
                                }), eb++;
                                continue
                              }
                              if (bb.trim().startsWith("|") && eb + 1 < wb.length && /^\s*\|[\s:|-]+\|\s*$/.test(wb[eb + 1])) {
                                const Hb = Lb(bb),
                                  pb = [];
                                for (eb += 2; eb < wb.length && wb[eb].trim().startsWith("|");) pb.push(Lb(wb[eb])), eb++;
                                Mb.push({
                                  kind: "table",
                                  header: Hb,
                                  rows: pb
                                });
                                continue
                              }
                              if (bb.startsWith(">")) {
                                const bb = [];
                                for (; eb < wb.length && wb[eb].startsWith(">");) bb.push(wb[eb].replace(/^>\s?/, "")), eb++;
                                Mb.push({
                                  kind: "quote",
                                  blocks: Ub(bb.join("\n"))
                                });
                                continue
                              }
                              if (Ib.test(bb)) {
                                const Hb = [],
                                  pb = /^\s*\d+\./.test(bb);
                                for (; eb < wb.length && !lb(wb[eb]) && (Ib.test(wb[eb]) || /^\s+\S/.test(wb[eb]));) Hb.push(wb[eb]), eb++;
                                Mb.push({
                                  kind: "list",
                                  ordered: pb,
                                  items: Ob(Hb)
                                });
                                continue
                              }
                              const gb = [];
                              for (; eb < wb.length && !lb(wb[eb]) && !/^\s*```/.test(wb[eb]) && !/^#{1,6}\s/.test(wb[eb]) && !wb[eb].startsWith(">") && !Ib.test(wb[eb]) && (!wb[eb].trim().startsWith("|") || 0 !== gb.length);) gb.push(wb[eb].trim()), eb++;
                              0 === gb.length && (gb.push(wb[eb].trim()), eb++), Mb.push({
                                kind: "paragraph",
                                text: gb.join(" ")
                              })
                            }
                            return Mb
                          }

                          function tb(bb) {
                            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const Mb = Ub(bb);
                            let eb = "";
                            const Hb = [],
                              pb = [],
                              Vb = new Map;
                            for (const Lb of Mb) {
                              if ("heading" === Lb.kind) {
                                var gb;
                                const bb = (null !== (gb = Vb.get(Lb.anchor)) && void 0 !== gb ? gb : 0) + 1;
                                Vb.set(Lb.anchor, bb), bb > 1 && (Lb.anchor = `${Lb.anchor}-${bb}`)
                              }
                              if ("heading" === Lb.kind && 1 === Lb.level && !eb) {
                                eb = Lb.text;
                                continue
                              }
                              if ("heading" === Lb.kind && Lb.level <= wb) {
                                pb.push({
                                  heading: Lb,
                                  blocks: []
                                });
                                continue
                              }
                              const bb = pb.at(-1);
                              bb ? bb.blocks.push(Lb) : Hb.push(Lb)
                            }
                            const lb = bb => {
                              for (;
                                "rule" === (null === (wb = bb.at(-1)) || void 0 === wb ? void 0 : wb.kind);) {
                                var wb;
                                bb.pop()
                              }
                            };
                            lb(Hb);
                            for (const Lb of pb) lb(Lb.blocks);
                            return {
                              title: eb,
                              intro: Hb,
                              sections: pb
                            }
                          }

                          function Cb(bb) {
                            return [{
                              heading: null,
                              blocks: bb.intro
                            }, ...bb.sections.map((bb => ({
                              heading: bb.heading,
                              blocks: bb.blocks
                            })))]
                          }

                          function Eb(bb) {
                            return bb.flatMap((bb => "code" === bb.kind ? [bb] : "quote" === bb.kind ? Eb(bb.blocks) : []))
                          }

                          function Fb(bb) {
                            switch (bb.kind) {
                              case "heading":
                              case "paragraph":
                                return bb.text;
                              case "code":
                                return bb.code;
                              case "table":
                                return [bb.header, ...bb.rows].map((bb => bb.join(" "))).join(" ");
                              case "list": {
                                const wb = bb => bb.map((bb => `${bb.text} ${wb(bb.children)}`)).join(" ");
                                return wb(bb.items)
                              }
                              case "quote":
                                return bb.blocks.map(Fb).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5734: (bb, wb, Mb) => {
                          Mb.d(wb, {
                            b: () => gb
                          });
                          var eb = Mb(64),
                            Hb = Mb(366),
                            pb = Mb(2130),
                            Vb = Mb(1364);

                          function gb(bb) {
                            let {
                              text: wb
                            } = bb;
                            const Mb = [];
                            let gb = "";
                            return (0, Hb.gc)(wb).forEach(((bb, wb) => {
                              if ("string" === typeof bb || !(0, pb.d)(bb.icon)) return void(gb += "string" === typeof bb ? bb : bb.icon);
                              const Hb = Math.max(0, gb.trimEnd().search(/\S{1,12}$/));
                              Mb.push((0, Vb.jsxs)(eb.Fragment, {
                                children: [gb.slice(0, Hb), (0, Vb.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [gb.slice(Hb), (0, Vb.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": bb.icon,
                                    children: (0, Vb.jsx)(pb.c, {
                                      itemName: bb.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, wb)), gb = ""
                            })), Mb.push(gb), (0, Vb.jsx)(Vb.Fragment, {
                              children: Mb
                            })
                          }
                        }, 5657: (bb, wb, Mb) => {
                          Mb.d(wb, {
                            h: () => sb,
                            e: () => Bb
                          });
                          var eb = Mb(64),
                            Hb = Mb(1611),
                            pb = Mb(2116),
                            Vb = Mb(5661),
                            gb = Mb(1364);
                          const lb = (0, eb.memo)((function(bb) {
                            let {
                              initialParameters: wb
                            } = bb;
                            const Mb = (0, eb.useRef)(null),
                              Hb = (0, eb.useRef)(null),
                              lb = (0, eb.useRef)(0),
                              Lb = (0, eb.useRef)(null),
                              Ib = wb.description,
                              Ob = wb.jp,
                              {
                                scale: Ub,
                                rotation: tb
                              } = null !== wb && void 0 !== wb ? wb : {},
                              Cb = (0, Vb.f)();
                            return (0, eb.useEffect)((() => {
                              const bb = Cb.onFrame((() => {
                                const bb = Cb.getState();
                                if (!bb.isActive || !Mb.current || !Hb.current) return;
                                const wb = bb.state;
                                if (Mb.current.value = wb.progress, wb.clickCount > lb.current) {
                                  lb.current = wb.clickCount;
                                  const bb = Hb.current;
                                  bb.classList.add("pulse"), Lb.current = setTimeout((() => {
                                    bb.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Lb.current), bb()
                              }
                            }), [Cb]), (0, gb.jsx)(gb.Fragment, {
                              children: (0, gb.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Ub && {
                                    "--scale": Ub
                                  },
                                  ...null !== tb && {
                                    "--rotation": `${tb}deg`
                                  }
                                },
                                children: [(0, gb.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: Mb
                                }), (0, gb.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Hb,
                                  children: (0, gb.jsx)(pb.d, {
                                    text: [{
                                      icon: Ob
                                    }]
                                  })
                                }), (0, gb.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, gb.jsx)(pb.d, {
                                    text: Ib
                                  })
                                })]
                              })
                            })
                          }));
                          var Lb = Mb(1159),
                            Ib = Mb.n(Lb);
                          const Ob = 2 * Math.PI * 90,
                            Ub = (0, eb.memo)((function(bb) {
                              let {
                                initialParameters: wb
                              } = bb;
                              const Mb = (0, eb.useRef)(null),
                                Hb = (0, eb.useRef)(null),
                                lb = (0, eb.useRef)(null),
                                Lb = wb.label,
                                Ub = wb.icon,
                                tb = wb.Rp,
                                {
                                  scale: Cb,
                                  rotation: Eb,
                                  Dp: Fb
                                } = null !== wb && void 0 !== wb ? wb : {},
                                Bb = (0, Vb.f)();
                              return (0, eb.useEffect)((() => {
                                const bb = Bb.onFrame((() => {
                                  var bb, wb;
                                  const eb = Bb.getState();
                                  if (!eb.isActive || !Hb.current) return;
                                  const pb = eb.state,
                                    Vb = null !== (bb = pb.timeRemaining) && void 0 !== bb ? bb : 0,
                                    gb = null !== (wb = pb.rp) && void 0 !== wb ? wb : 1,
                                    Lb = Ob * (1 - Vb / gb);
                                  Hb.current.style.strokeDashoffset = `${Lb}`, Mb.current && (Mb.current.style.opacity = Vb > 0 ? "1" : "0"), lb.current && tb && (lb.current.textContent = `${(Vb/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  bb()
                                }
                              }), [Bb, tb]), (0, gb.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: Mb,
                                style: {
                                  ...null !== Cb && {
                                    "--scale": Cb
                                  },
                                  ...null !== Eb && {
                                    "--rotation": `${Eb}deg`
                                  }
                                },
                                children: [(0, gb.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, gb.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, gb.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, gb.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Ob,
                                      ref: Hb
                                    })]
                                  }), (0, gb.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, gb.jsx)(pb.d, {
                                      text: [{
                                        icon: Ub
                                      }],
                                      className: Ib()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: Fb
                                      })
                                    })
                                  })]
                                }), (0, gb.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, gb.jsx)(pb.d, {
                                    text: Lb,
                                    className: "QTETimedClickLabelText"
                                  }), tb && (0, gb.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: lb
                                  })]
                                })]
                              })
                            })),
                            tb = (0, eb.memo)((function(bb) {
                              let {
                                initialParameters: wb
                              } = bb;
                              const Mb = (0, eb.useRef)(null),
                                Hb = (0, eb.useRef)(null),
                                lb = (0, eb.useRef)(null),
                                Lb = (0, eb.useRef)(!1),
                                Ib = wb.description,
                                Ob = null === wb || void 0 === wb ? void 0 : wb.icon,
                                Ub = (0, Vb.f)();
                              return (0, eb.useEffect)((() => {
                                const bb = Ub.onFrame((() => {
                                  const bb = Ub.getState();
                                  if (!bb.isActive) return;
                                  const wb = bb.state;
                                  if (Mb.current) {
                                    const bb = 100 * (wb.catchZonePosition - wb.Yp / 2);
                                    Mb.current.style.left = `${bb}%`, Mb.current.style.width = 100 * wb.Yp + "%", wb.isCatching !== Lb.current && (Lb.current = wb.isCatching, wb.isCatching ? Mb.current.classList.add("catching") : Mb.current.classList.remove("catching"))
                                  }
                                  Hb.current && (Hb.current.style.left = 100 * wb.moverPosition + "%"), lb.current && (lb.current.value = wb.progress)
                                }));
                                return () => {
                                  bb()
                                }
                              }), [Ub]), (0, gb.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, gb.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, gb.jsx)(pb.d, {
                                    text: Ib
                                  })
                                }), (0, gb.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: lb
                                }), (0, gb.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, gb.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: Mb
                                  }), (0, gb.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Hb,
                                    children: (0, gb.jsx)("span", {
                                      children: Ob && (0, gb.jsx)(pb.d, {
                                        text: [{
                                          icon: Ob,
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
                          var Cb = Mb(661);
                          const Eb = (0, eb.memo)((function(bb) {
                              let {
                                initialParameters: wb
                              } = bb;
                              const Mb = (0, eb.useRef)(null),
                                Hb = wb.label,
                                lb = wb.Np,
                                {
                                  icon: Lb,
                                  scale: Ib,
                                  rotation: Ob
                                } = null !== wb && void 0 !== wb ? wb : {},
                                Ub = 100 * (.5 - lb / 2),
                                tb = 100 * lb,
                                Eb = (0, Vb.f)();
                              return (0, eb.useEffect)((() => {
                                const bb = Eb.onFrame((() => {
                                  const bb = Eb.getState();
                                  if (!bb.isActive || !Mb.current) return;
                                  const wb = bb.state;
                                  Mb.current.style.left = 100 * wb.markerPosition + "%"
                                }));
                                return () => {
                                  bb()
                                }
                              }), [Eb]), (0, gb.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, Cb.K)(Ib) && {
                                    "--scale": Ib
                                  },
                                  ...!(0, Cb.K)(Ob) && {
                                    "--rotation": `${Ob}deg`
                                  }
                                },
                                children: [Lb && (0, gb.jsx)(pb.d, {
                                  text: [{
                                    icon: Lb
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, gb.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, gb.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Ub}%`,
                                      width: `${tb}%`
                                    }
                                  }), (0, gb.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: Mb
                                  })]
                                }), (0, gb.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, gb.jsx)(pb.d, {
                                    text: Hb
                                  })
                                })]
                              })
                            })),
                            Fb = (0, eb.memo)((function(bb) {
                              let {
                                initialParameters: wb
                              } = bb;
                              const Mb = (0, eb.useRef)(null),
                                [Hb, lb] = (0, eb.useState)((() => new Array(wb.Qp).fill("pending"))),
                                [Lb, Ib] = (0, eb.useState)((() => {
                                  const bb = wb.ap;
                                  return (0, Cb.K)(bb) || bb <= 0 ? [] : new Array(bb).fill("pending")
                                })),
                                Ob = wb.label,
                                {
                                  icon: Ub
                                } = wb,
                                tb = (0, eb.useRef)(0),
                                Eb = (0, eb.useRef)(0),
                                Fb = (0, eb.useRef)([]),
                                Bb = (0, Vb.f)();
                              return (0, eb.useEffect)((() => {
                                const bb = Bb.onFrame((() => {
                                  const bb = Bb.getState();
                                  if (!bb.isActive || !Mb.current) return;
                                  const wb = bb.state,
                                    eb = 30 + 60 * wb.outerCircleProgress;
                                  if (Mb.current.setAttribute("r", String(eb)), !0 === wb.lastClickResult && wb.successes > tb.current) {
                                    Mb.current.classList.remove("QTERhythmClickOuterCircle--miss"), Mb.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const bb = setTimeout((() => {
                                      var bb;
                                      null === (bb = Mb.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    Fb.current.push(bb)
                                  } else if (!1 === wb.lastClickResult && wb.misses > Eb.current) {
                                    Mb.current.classList.remove("QTERhythmClickOuterCircle--hit"), Mb.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const bb = setTimeout((() => {
                                      var bb;
                                      null === (bb = Mb.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    Fb.current.push(bb)
                                  }
                                  wb.successes === tb.current && wb.misses === Eb.current || (tb.current = wb.successes, Eb.current = wb.misses, lb((bb => {
                                    const Mb = [...bb];
                                    for (let eb = 0; eb < wb.Qp; eb++) Mb[eb] = eb < wb.successes ? "success" : "pending";
                                    return Mb
                                  })), Ib((bb => {
                                    if (0 === bb.length) return bb;
                                    const Mb = [...bb];
                                    for (let eb = 0; eb < Mb.length; eb++) Mb[eb] = eb < wb.misses ? "miss" : "pending";
                                    return Mb
                                  })))
                                }));
                                return () => {
                                  bb();
                                  for (const bb of Fb.current) clearTimeout(bb);
                                  Fb.current = []
                                }
                              }), [Bb]), (0, gb.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, gb.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Hb.map(((bb, wb) => (0, gb.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === bb ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, wb)))
                                }), (0, gb.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, gb.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, gb.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, gb.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: Mb
                                    })]
                                  }), Ub && (0, gb.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, gb.jsx)(pb.d, {
                                      text: [{
                                        icon: Ub
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Lb.length > 0 && (0, gb.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Lb.map(((bb, wb) => (0, gb.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === bb ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, wb)))
                                }), (0, gb.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, gb.jsx)(pb.d, {
                                    text: Ob
                                  })
                                })]
                              })
                            }));

                          function Bb(bb) {
                            let {
                              qte: wb
                            } = bb;
                            switch (wb.type) {
                              case "progressBar":
                                return (0, gb.jsx)(lb, {
                                  initialParameters: wb.parameters
                                });
                              case "timedClick":
                                return (0, gb.jsx)(Ub, {
                                  initialParameters: wb.parameters
                                });
                              case "gravityBar":
                                return (0, gb.jsx)(tb, {
                                  initialParameters: wb.parameters
                                });
                              case "precisionBar":
                                return (0, gb.jsx)(Eb, {
                                  initialParameters: wb.parameters
                                });
                              case "rhythmClick":
                                return (0, gb.jsx)(Fb, {
                                  initialParameters: wb.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const sb = (0, eb.memo)((function() {
                            const [bb, wb] = (0, eb.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Hb.e)("qteStateUpdated", (bb => {
                              wb(bb)
                            })), bb.isActive && bb.type ? (0, gb.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, gb.jsx)(Bb, {
                                qte: bb
                              })
                            }) : null
                          }))
                        }, 5661: (bb, wb, Mb) => {
                          Mb.d(wb, {
                            d: () => gb,
                            f: () => lb
                          });
                          var eb = Mb(64),
                            Hb = Mb(1391),
                            pb = Mb(5669);
                          const Vb = {
                              getState: () => pb.b.getCurrentState(),
                              onFrame: Hb.z
                            },
                            gb = (0, eb.createContext)(Vb);

                          function lb() {
                            return (0, eb.useContext)(gb)
                          }
                        }, 5743: (bb, wb, Mb) => {
                          Mb.d(wb, {
                            e: () => Ab,
                            f: () => fb
                          });
                          var eb = Mb(5752),
                            Hb = Mb(366);
                          const pb = 120,
                            Vb = 260,
                            gb = 1.15,
                            lb = 1.2,
                            Lb = 2,
                            Ib = 1.08,
                            Ob = .8,
                            Ub = .95,
                            tb = 8,
                            Cb = "[\"')\\]\u300d\u300f\uff09]*",
                            Eb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Cb}$`),
                            Fb = new RegExp(`[?\uff1f]${Cb}$`),
                            Bb = new RegExp(`[!\uff01]${Cb}$`),
                            sb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            mb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            hb = new RegExp(`[${mb}]`),
                            zb = new RegExp(`[${mb}]|[^${mb}]+`, "g"),
                            Xb = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function xb(bb) {
                            let wb = 2166136261;
                            for (let Mb = 0; Mb < bb.length; Mb++) wb ^= bb.charCodeAt(Mb), wb = Math.imul(wb, 16777619);
                            return (wb >>> 0) / 4294967295 * 2 - 1
                          }

                          function jb(bb) {
                            var wb;
                            if (hb.test(bb)) return 1;
                            const Mb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              eb = Mb.replace(/[^0-9]/g, "");
                            if (eb.length > 0 && !/\p{L}/u.test(Mb)) return Math.min(eb.length, 4);
                            const Hb = null !== (wb = Mb.match(Xb)) && void 0 !== wb ? wb : [];
                            if (0 === Hb.length) {
                              var pb, Vb;
                              const bb = null !== (pb = null === (Vb = Mb.match(/\p{L}/gu)) || void 0 === Vb ? void 0 : Vb.length) && void 0 !== pb ? pb : 0;
                              return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), tb)
                            }
                            const gb = Mb.replace(/[^\p{L}]/gu, ""),
                              lb = Hb.length > 1 && "e" === Hb.at(-1) && gb.endsWith("e") && !gb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Hb.length - (lb ? 1 : 0), tb)
                          }

                          function Kb(bb) {
                            return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function rb(bb) {
                            const wb = bb.replace(/[^\p{L}]/gu, "");
                            return wb.length >= 2 && wb === wb.toUpperCase() && wb !== wb.toLowerCase()
                          }

                          function Rb(bb, wb) {
                            var Mb;
                            const tb = wb && (0, eb.k)(wb),
                              Cb = null !== (Mb = null === tb || void 0 === tb ? void 0 : tb.syllableMs) && void 0 !== Mb ? Mb : eb.c,
                              mb = function(bb) {
                                const wb = [];
                                for (const eb of (0, Hb.gc)(bb))
                                  if ("string" === typeof eb)
                                    for (const bb of eb.split(/(\s+)/)) {
                                      if ("" === bb) continue;
                                      if (/^\s+$/.test(bb)) {
                                        wb.push({
                                          kind: "space",
                                          text: bb
                                        });
                                        continue
                                      }
                                      if (!hb.test(bb)) {
                                        wb.push({
                                          kind: "word",
                                          text: bb,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let eb = !0;
                                      for (const Hb of null !== (Mb = bb.match(zb)) && void 0 !== Mb ? Mb : []) {
                                        var Mb;
                                        const bb = wb.at(-1);
                                        eb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || hb.test(Hb) || /[\p{L}\p{N}]/u.test(Hb) ? (eb || wb.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), wb.push({
                                          kind: "word",
                                          text: Hb,
                                          delayMs: 0
                                        }), eb = !1) : bb.text += Hb
                                      }
                                    } else wb.push({
                                      kind: "icon",
                                      text: eb.icon,
                                      delayMs: 0
                                    });
                                return wb
                              }(bb),
                              Xb = [];
                            let Rb = [];
                            for (const eb of mb) "space" !== eb.kind && (Rb.push(eb), Eb.test(eb.text) && (Xb.push(Rb), Rb = []));
                            Xb.push(Rb);
                            const Db = [];
                            let cb = 0;
                            for (const eb of Xb) {
                              var Yb, Zb;
                              const bb = null !== (Yb = null === (Zb = eb.at(-1)) || void 0 === Zb ? void 0 : Zb.text) && void 0 !== Yb ? Yb : "",
                                wb = Fb.test(bb),
                                Mb = Bb.test(bb),
                                Hb = eb.map((bb => "word" === bb.kind ? jb(bb.text) : 1)),
                                mb = Hb.findLastIndex((bb => bb > 0));
                              for (const [Fb, Bb] of eb.entries()) {
                                const bb = "word" === Bb.kind,
                                  eb = Hb[Fb];
                                Bb.delayMs = cb;
                                for (let Hb = 0; tb && Hb < eb; Hb++) {
                                  const {
                                    intonation: pb
                                  } = tb;
                                  let Vb = mb > 0 ? -pb.declineSemitones * (Fb / mb) : 0;
                                  Vb += xb(`${Kb(Bb.text)}|${Hb}`) * pb.variationSemitones;
                                  const Eb = Math.min(1, pb.variationSemitones);
                                  let sb = tb.glideSemitones,
                                    hb = 1;
                                  Mb && (Vb += pb.exclaimLiftSemitones, hb *= gb), wb && Fb === mb && (Vb += pb.questionRiseSemitones * (eb > 1 ? .5 + .5 * Hb / (eb - 1) : 1), Hb === eb - 1 && (sb = Math.abs(sb) + pb.questionRiseSemitones / 2)), bb && rb(Bb.text) && (Vb += Lb * Eb, hb *= lb), eb > 1 && 0 === Hb && (Vb += Ob * Eb, hb *= Ib), Db.push({
                                    atMs: cb + Hb * Cb,
                                    semitones: Vb,
                                    glideSemitones: sb,
                                    durationMs: Hb < eb - 1 ? Math.min(tb.durationMs, Cb * Ub) : tb.durationMs,
                                    level: hb
                                  })
                                }
                                cb += eb * Cb + (Eb.test(Bb.text) ? Vb : sb.test(Bb.text) ? pb : 0)
                              }
                            }
                            return {
                              pieces: mb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
                                kind: "icon",
                                icon: bb.text,
                                delayMs: bb.delayMs
                              } : {
                                kind: "word",
                                text: bb.text,
                                delayMs: bb.delayMs
                              })),
                              blips: Db
                            }
                          }
                          var Db = Mb(1259),
                            cb = Mb(1321),
                            Yb = Mb(2146);

                          function Zb(bb) {
                            if ("string" === typeof bb) return bb;
                            const wb = cb.g.get().getCurrentLanguageCode();
                            return (0, Db.r)(wb, bb.translationKey, (0, Db.n)(bb.params, Yb.d.shown))
                          }

                          function fb(bb) {
                            const wb = void 0 === bb.voice ? null : (0, eb.n)(bb.voice),
                              Mb = wb && (0, eb.k)(wb);
                            return {
                              plan: Rb(Zb(bb.line), Mb),
                              synth: Mb
                            }
                          }

                          function Ab(bb) {
                            const wb = [];
                            let Mb = [];
                            for (const [Hb, pb] of bb.entries()) {
                              var eb;
                              "space" === pb.kind && (" " !== pb.text || "icon" !== (null === (eb = bb[Hb + 1]) || void 0 === eb ? void 0 : eb.kind)) ? (Mb.length > 0 && wb.push(Mb), wb.push([pb]), Mb = []) : Mb.push(pb)
                            }
                            return Mb.length > 0 && wb.push(Mb), wb
                          }
                        }, 5757: (bb, wb, Mb) => {
                          Mb.d(wb, {
                            b: () => Ib,
                            d: () => Ob
                          });
                          var eb = Mb(5766),
                            Hb = Mb(26);
                          const pb = .25,
                            Vb = .85,
                            gb = .02,
                            lb = .01;

                          function Lb(bb, wb, Mb, eb, Hb, pb, gb) {
                            const {
                              waveform: lb,
                              pitchHz: Lb,
                              attackMs: Ib,
                              releaseMs: Ob,
                              lowpassHz: Ub
                            } = Mb, tb = Hb + eb.durationMs / 1e3, Cb = Lb * 2 ** (eb.semitones / 12), Eb = bb.createOscillator();
                            Eb.type = lb, Eb.frequency.setValueAtTime(Cb, Hb), Eb.frequency.exponentialRampToValueAtTime(Cb * 2 ** (eb.glideSemitones / 12), tb);
                            const Fb = Hb + Math.min(Ib, eb.durationMs) / 1e3,
                              Bb = bb.createGain();
                            Bb.gain.setValueAtTime(0, Hb), Bb.gain.linearRampToValueAtTime(pb, Fb), Bb.gain.linearRampToValueAtTime(pb * Vb, Math.max(Fb, tb - Ob / 1e3)), Bb.gain.linearRampToValueAtTime(0, tb);
                            const sb = [Eb];
                            if (null !== Ub) {
                              const wb = bb.createBiquadFilter();
                              wb.type = "lowpass", wb.frequency.value = Ub, sb.push(wb)
                            }
                            sb.push(Bb, wb);
                            for (let Vb = 1; Vb < sb.length; Vb++) sb[Vb - 1].connect(sb[Vb]);
                            return Eb.onended = () => {
                              for (const bb of sb.slice(0, -1)) bb.disconnect();
                              gb()
                            }, Eb.start(Hb), Eb.stop(tb), Eb
                          }

                          function Ib(bb, wb, Mb, eb, Hb, Vb) {
                            if (0 === eb.length) return Vb(), () => {};
                            const Ib = pb * Mb.volume * Hb,
                              Ob = bb.createGain();
                            Ob.connect(wb);
                            const Ub = bb.currentTime + gb,
                              tb = new Set;
                            for (const pb of eb) {
                              const wb = Lb(bb, Ob, Mb, pb, Ub + pb.atMs / 1e3, Ib * pb.level, (() => {
                                tb.delete(wb), 0 === tb.size && (Ob.disconnect(), Vb())
                              }));
                              tb.add(wb)
                            }
                            return () => {
                              const wb = bb.currentTime;
                              Ob.gain.setTargetAtTime(0, wb, lb);
                              for (const bb of tb) try {
                                bb.stop(wb + 5 * lb)
                              } catch {}
                            }
                          }

                          function Ob(bb, wb) {
                            var Mb;
                            const pb = eb.Howler.ctx,
                              Vb = eb.Howler.masterGain;
                            if (!pb || !Vb || !Hb.c.get("soundOnFromAd")) return () => {};
                            const gb = eb.Howler;
                            return null === (Mb = gb._autoResume) || void 0 === Mb || Mb.call(gb), Ib(pb, Vb, bb, wb, Hb.c.get("soundVolume"), (() => {
                              var bb;
                              null === (bb = gb._autoSuspend) || void 0 === bb || bb.call(gb)
                            }))
                          }
                        }, 5722: (bb, wb, Mb) => {
                          Mb.d(wb, {
                            d: () => gb,
                            f: () => Hb,
                            g: () => lb,
                            h: () => Vb,
                            k: () => pb
                          });
                          var eb = Mb(5713);
                          const Hb = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            pb = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            Vb = `${eb.k} lists every page of the Bloxd Code API docs.`;

                          function gb(bb, wb) {
                            return `${bb.url}${encodeURIComponent(wb.toWellFormed())}`
                          }

                          function lb(bb) {
                            const wb = gb(Hb, bb);
                            return wb.length <= 3e4 ? {
                              url: wb,
                              sendsPrompt: !0
                            } : {
                              url: new URL(Hb.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5766: (bb, wb, Mb) => {
                          Mb.r(wb), Mb.d(wb, {
                            Howl: () => Hb.Howl,
                            Howler: () => Hb.Howler,
                            musicOutput: () => Fb,
                            readyAudioContext: () => Bb
                          });
                          var eb, Hb = Mb(5768),
                            pb = Mb(4835),
                            Vb = Mb(5505);
                          const gb = Hb.Howler;

                          function lb() {
                            var bb, wb;
                            if (gb.ctx || !gb.usingWebAudio || "undefined" === typeof AudioContext || !(0, Vb.h)()) return;
                            const Mb = navigator.audioSession;
                            let eb;
                            "auto" === (null === Mb || void 0 === Mb ? void 0 : Mb.type) && (Mb.type = "ambient");
                            try {
                              eb = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Hb = eb.createGain();
                            Hb.gain.setValueAtTime(gb._muted ? 0 : null !== (bb = gb._volume) && void 0 !== bb ? bb : 1, eb.currentTime), Hb.connect(eb.destination), gb.ctx = eb, gb.masterGain = Hb, null === (wb = gb._setup) || void 0 === wb || wb.call(gb)
                          }
                          gb._mobileUnloaded = !0;
                          const Lb = gb.volume.bind(Hb.Howler);
                          gb.volume = function() {
                            return lb(), Lb(...arguments)
                          };
                          const Ib = gb.mute.bind(Hb.Howler);
                          gb.mute = bb => (lb(), Ib(bb));
                          const Ob = Hb.Howl.prototype,
                            Ub = Ob.init;

                          function tb() {
                            for (; gb._html5AudioPool.length < gb.html5PoolSize;) {
                              const bb = new Audio;
                              bb._unlocked = !0, gb._releaseHtml5Audio(bb)
                            }
                            for (const wb of gb._howls)
                              if (!wb._webAudio)
                                for (const Mb of wb._getSoundIds()) {
                                  var bb;
                                  const eb = null === (bb = wb._soundById(Mb)) || void 0 === bb ? void 0 : bb._node;
                                  eb && !eb._unlocked && (eb._unlocked = !0, eb.load())
                                }
                          }
                          Ob.init = function(bb) {
                            return lb(), Ub.call(this, bb)
                          }, (0, Vb.h)() && (gb._unlockAudio = () => {
                            const bb = gb.ctx;
                            if (gb._audioUnlocked || !bb) return;
                            gb.autoUnlock = !1;
                            const wb = bb.createBuffer(1, 1, 22050);
                            gb._scratchBuffer = wb;
                            const Mb = new AbortController;
                            let eb = "afterPaint";
                            const Hb = () => {
                                var eb;
                                if (gb._audioUnlocked) return;
                                null === (eb = gb._autoResume) || void 0 === eb || eb.call(gb);
                                const Hb = bb.createBufferSource();
                                Hb.buffer = wb, Hb.connect(bb.destination), Hb.start(0), bb.resume().catch((() => {})), Hb.onended = () => {
                                  Hb.disconnect(0), gb._audioUnlocked = !0, Mb.abort();
                                  for (const bb of gb._howls) bb._emit("unlock")
                                }
                              },
                              lb = () => {
                                tb(), Hb()
                              },
                              Lb = wb => {
                                if (tb(), "inTap" === eb) {
                                  if ("running" === bb.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Hb()
                                } else "afterPaint" === eb && (eb = "queued", (0, pb.b)(wb.timeStamp, (() => {
                                  eb = "inTap", Hb()
                                })))
                              };
                            for (const pb of ["touchstart", "touchend"]) document.addEventListener(pb, lb, {
                              capture: !0,
                              signal: Mb.signal
                            });
                            for (const pb of Vb.d) document.addEventListener(pb, Lb, {
                              capture: !0,
                              signal: Mb.signal
                            })
                          });
                          let Cb = 0;
                          const Eb = null === (eb = gb._autoSuspend) || void 0 === eb ? void 0 : eb.bind(Hb.Howler);

                          function Fb() {
                            Bb();
                            const {
                              ctx: bb,
                              masterGain: wb
                            } = gb;
                            return bb && wb ? {
                              ctx: bb,
                              destination: wb,
                              holdAwake: bb => {
                                var wb, Mb;
                                (Cb += bb ? 1 : -1, bb) ? null === (wb = gb._autoResume) || void 0 === wb || wb.call(gb): null === (Mb = gb._autoSuspend) || void 0 === Mb || Mb.call(gb)
                              },
                              wake: () => {
                                var wb;
                                "running" !== bb.state && (null === (wb = gb._autoResume) || void 0 === wb || wb.call(gb), bb.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function Bb() {
                            var bb;
                            (gb.volume(), gb.ctx && gb.autoUnlock) && (null === (bb = gb._unlockAudio) || void 0 === bb || bb.call(gb))
                          }
                          Eb && (gb._autoSuspend = () => Cb > 0 ? Hb.Howler : Eb())
                        }, 5773: (bb, wb, Mb) => {
                          function eb(bb) {
                            return {
                              notAfter: bb
                            }
                          }
                          Mb.d(wb, {
                            c: () => lb,
                            d: () => Lb,
                            g: () => gb,
                            h: () => eb,
                            i: () => Hb,
                            m: () => pb,
                            q: () => Vb,
                            t: () => Ib,
                            v: () => Ob
                          });
                          const Hb = eb("\\w$."),
                            pb = eb("\\w.,");

                          function Vb(bb) {
                            return wb => lb(wb, bb)
                          }

                          function gb(bb) {
                            return wb => !bb.test(wb.input.slice(0, wb.index))
                          }

                          function lb(bb, wb) {
                            return bb.index > 0 && new RegExp(`[${wb}]`).test(bb.input[bb.index - 1])
                          }

                          function Lb(bb, wb, Mb) {
                            return function(bb) {
                              return void 0 !== bb && "function" !== typeof bb
                            }(Mb) ? function(bb, wb, Mb) {
                              const eb = wb.flags.replace(/[gy]/g, ""),
                                Hb = new RegExp(`[^${Mb}](?:${wb.source})`, `${eb}g`),
                                pb = [],
                                Vb = Mb => {
                                  const eb = Mb.index + Mb[0].length;
                                  return ("" === Mb[0] ? Ub(bb, wb, eb) : eb) - 1
                                },
                                gb = new RegExp(`(?:${wb.source})`, `${eb}y`).exec(bb);
                              if (gb) {
                                if (pb.push(gb), !wb.global) return pb;
                                Hb.lastIndex = Vb(gb)
                              }
                              for (let lb = Hb.exec(bb); lb; lb = Hb.exec(bb)) {
                                const Mb = Ub(bb, wb, lb.index) - lb.index;
                                if (lb[0] = lb[0].slice(Mb), lb.index += Mb, pb.push(lb), !wb.global) break;
                                Hb.lastIndex = Vb(lb)
                              }
                              return pb
                            }(bb, wb, Mb.notAfter) : function(bb, wb, Mb) {
                              const eb = new RegExp(wb.source, `${wb.flags.replace(/[gy]/g,"")}g`),
                                Hb = [];
                              for (let pb = eb.exec(bb); pb; pb = eb.exec(bb))
                                if (!Mb || Mb(pb)) {
                                  if (Hb.push(pb), !wb.global) break;
                                  "" === pb[0] && (eb.lastIndex = Ub(bb, wb, eb.lastIndex))
                                } else eb.lastIndex = Ub(bb, wb, pb.index);
                              return Hb
                            }(bb, wb, Mb)
                          }

                          function Ib(bb, wb, Mb, eb) {
                            let Hb = "",
                              pb = 0;
                            for (const Vb of Lb(bb, wb, Mb)) Hb += bb.slice(pb, Vb.index) + eb(Vb), pb = Vb.index + Vb[0].length;
                            return Hb + bb.slice(pb)
                          }

                          function Ob(bb, wb, Mb) {
                            const eb = [];
                            let Hb = 0;
                            for (const pb of Lb(bb, wb, Mb)) eb.push(bb.slice(Hb, pb.index)), Hb = pb.index + pb[0].length;
                            return [...eb, bb.slice(Hb)]
                          }

                          function Ub(bb, wb, Mb) {
                            var eb;
                            return Mb + (wb.unicode && (null !== (eb = bb.codePointAt(Mb)) && void 0 !== eb ? eb : 0) > 65535 ? 2 : 1)
                          }
                        }, 5713: (bb, wb, Mb) => {
                          Mb.d(wb, {
                            B: () => Eb,
                            D: () => tb,
                            d: () => Hb,
                            e: () => lb,
                            h: () => pb,
                            k: () => Vb,
                            o: () => gb,
                            s: () => Fb,
                            v: () => Ib,
                            y: () => Ob
                          });
                          var eb = Mb(1770);
                          const Hb = 24e3,
                            pb = "/docs/llms.txt",
                            Vb = `${eb.e}${pb}`,
                            gb = "/llms.txt",
                            lb = "/docs/llms-full.txt";

                          function Lb(bb) {
                            return bb || "index"
                          }

                          function Ib(bb) {
                            return `/docs/${Lb(bb)}.md`
                          }

                          function Ob(bb, wb) {
                            return `/docs/${Lb(bb)}/${wb+1}.md`
                          }
                          const Ub = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function tb(bb) {
                            const wb = Ub.exec(bb);
                            return null === wb ? null : {
                              name: wb[1],
                              part: void 0 === wb[2] ? null : Number(wb[2])
                            }
                          }
                          const Cb = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Eb(bb) {
                            const wb = Cb.exec(bb);
                            if (null === wb) return null;
                            const [, Mb = "", eb] = wb;
                            return void 0 === eb ? Ib(Mb) : Ob(Mb, Number(eb) - 1)
                          }

                          function Fb(bb) {
                            return `/docsHtml/${Lb(bb)}.html`
                          }
                        }, 5752: (bb, wb, Mb) => {
                          Mb.d(wb, {
                            c: () => Hb,
                            g: () => eb,
                            h: () => pb,
                            k: () => lb,
                            n: () => Vb
                          });
                          const eb = ["sine", "triangle", "square", "sawtooth"],
                            Hb = 55,
                            pb = {
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

                          function Vb(bb) {
                            return "string" !== typeof bb ? bb : Object.hasOwn(pb, bb) ? pb[bb] : null
                          }

                          function gb(bb, wb, Mb) {
                            return Math.min(Mb, Math.max(wb, bb))
                          }

                          function lb(bb) {
                            const wb = gb(bb.durationMs, 10, 500),
                              Mb = gb(bb.attackMs, 0, wb),
                              {
                                intonation: Hb
                              } = bb;
                            return {
                              waveform: eb.includes(bb.waveform) ? bb.waveform : "sine",
                              pitchHz: gb(bb.pitchHz, 20, 4e3),
                              glideSemitones: gb(bb.glideSemitones, -24, 24),
                              durationMs: wb,
                              attackMs: Mb,
                              releaseMs: gb(bb.releaseMs, 0, wb - Mb),
                              lowpassHz: null === bb.lowpassHz ? null : gb(bb.lowpassHz, 20, 2e4),
                              volume: gb(bb.volume, 0, 2),
                              intonation: {
                                variationSemitones: gb(Hb.variationSemitones, 0, 6),
                                declineSemitones: gb(Hb.declineSemitones, 0, 12),
                                questionRiseSemitones: gb(Hb.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: gb(Hb.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: gb(bb.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const bb in modules) Object.freeze(modules[bb]);