export const id = 75;
export const ids = [75, 91];
export const modules = {
    4516: (bb, ab, Ub) => {
      Ub.d(ab, {
        c: () => kb,
        f: () => yb
      });
      var Ab = Ub(984),
        Mb = Ub.n(Ab),
        Tb = Ub(52),
        Eb = Ub(1134),
        Yb = Ub(4522),
        Bb = Ub(1794),
        eb = Ub(2268),
        vb = Ub(4531),
        Lb = Ub(1023);
      const Pb = new WeakMap;
      let Xb = 0;

      function jb(bb) {
        let ab = Pb.get(bb);
        return void 0 === ab && (ab = Xb++, Pb.set(bb, ab)), ab
      }

      function Rb(bb) {
        let {
          piece: ab
        } = bb;
        return "space" === ab.kind ? (0, Lb.jsx)(Lb.Fragment, {
          children: ab.text
        }) : (0, Lb.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${ab.delayMs}ms`
          },
          children: (0, Lb.jsx)(Yb.c, {
            text: "icon" === ab.kind ? `[[${ab.icon}]]` : ab.text
          })
        })
      }

      function kb(bb) {
        let {
          display: ab
        } = bb;
        const {
          selectedLanguage: Ub
        } = (0, Eb.A)(), Ab = (0, Tb.useMemo)((() => (0, vb.e)((0, vb.g)(ab).plan.pieces)), [ab, Ub.code]);
        return (0, Lb.jsxs)("div", {
          className: Mb()("Dialogue", {
            DialogueAnimateIn: !1 !== ab.animateIn
          }),
          children: [ab.speakerName && (0, Lb.jsx)(Bb.c, {
            text: ab.speakerName,
            className: "DialogueSpeaker"
          }), (0, Lb.jsx)("p", {
            className: "DialogueLine",
            children: Ab.map(((bb, ab) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Lb.jsx)("span", {
              className: "DialogueGlue",
              children: bb.map(((bb, ab) => (0, Lb.jsx)(Rb, {
                piece: bb
              }, ab)))
            }, ab)))
          })]
        })
      }
      const yb = (0, Tb.memo)((function() {
        const bb = (0, eb.h)("dialogue");
        return (0, Lb.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: bb && (0, Lb.jsx)(kb, {
            display: bb
          }, jb(bb))
        })
      }))
    },
    4392: (bb, ab, Ub) => {
        Ub.r(ab), Ub.d(ab, {
          default: () => nT
        });
        var Ab = Ub(52),
          Mb = Ub(984),
          Tb = Ub.n(Mb),
          Eb = Ub(1438),
          Yb = Ub(1446),
          Bb = Ub(19),
          eb = Ub(75),
          vb = Ub(4399),
          Lb = Ub(4405),
          Pb = Ub(4413),
          Xb = Ub(4047),
          jb = Ub(1023);
        const Rb = "/textures/docs/icons";

        function kb(bb) {
          let {
            name: ab,
            isTinted: Ub,
            className: Ab,
            style: Mb
          } = bb;
          const Eb = `${Rb}/${ab}.png`;
          return Ub ? (0, jb.jsxs)("span", {
            className: Tb()("DocsPixelIcon", "Tinted", Ab),
            "aria-hidden": "true",
            style: Mb,
            children: [(0, jb.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Eb}")`,
                WebkitMaskImage: `url("${Eb}")`
              }
            }), (0, jb.jsx)("img", {
              src: Eb,
              alt: ""
            })]
          }) : (0, jb.jsx)("img", {
            className: Tb()("DocsPixelIcon", Ab),
            src: Eb,
            alt: "",
            "aria-hidden": "true",
            style: Mb
          })
        }
        const yb = 1500;

        function Zb() {
          const [bb, ab] = (0, Ab.useState)(null);
          (0, Ab.useEffect)((() => {
            if (null === bb) return;
            const Ub = setTimeout((() => {
              ab(null)
            }), yb);
            return () => {
              clearTimeout(Ub)
            }
          }), [bb]);
          return [bb, bb => {
            (0, Xb.b)(bb).then((() => {
              ab({
                text: bb,
                failed: !1
              })
            }), (Ub => {
              console.error("Could not copy to the clipboard", Ub), ab({
                text: bb,
                failed: !0
              })
            }))
          }]
        }

        function Db(bb) {
          let {
            text: ab,
            label: Ub,
            className: Ab
          } = bb;
          const [Mb, Eb] = Zb(), Yb = !1 === (null === Mb || void 0 === Mb ? void 0 : Mb.failed);
          return (0, jb.jsxs)("button", {
            type: "button",
            className: Tb()("DocsCopyButton", Ab, {
              Copied: Yb
            }),
            title: `Copy ${ab.length>40?"to clipboard":ab}`,
            "aria-label": Ub ? void 0 : `Copy ${ab}`,
            onClick: bb => {
              bb.stopPropagation(), Eb(ab)
            },
            children: [(0, jb.jsx)(kb, {
              name: Yb ? "check" : "copy"
            }), Ub && (0, jb.jsx)("span", {
              children: Yb ? "Copied" : null !== Mb && void 0 !== Mb && Mb.failed ? "Copy failed" : Ub
            })]
          })
        }
        vb.d.registerLanguage("javascript", Lb.c), vb.d.registerLanguage("typescript", Pb.d);
        const zb = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          xb = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          ib = 24;

        function fb(bb) {
          let {
            code: ab,
            lang: Ub,
            compact: Mb = !1
          } = bb;
          const Eb = (0, Ab.useMemo)((() => function(bb, ab) {
              const Ub = zb[ab];
              return Ub ? vb.d.highlight(bb, {
                language: Ub
              }).value : bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(ab, Ub)), [ab, Ub]),
            Yb = ab.split("\n").length,
            Bb = !Mb && Yb > ib + 6,
            [eb, Lb] = (0, Ab.useState)(!1),
            Pb = zb[Ub];
          return (0, jb.jsxs)("div", {
            className: Tb()("DocsCodeBlock", {
              Compact: Mb,
              Collapsed: Bb && !eb
            }),
            children: [!Mb && (0, jb.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, jb.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Pb ? xb[Pb] : "Text"
              }), (0, jb.jsx)(Db, {
                text: ab,
                label: "Copy"
              })]
            }), (0, jb.jsx)("pre", {
              children: (0, jb.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Eb
                }
              })
            }), Bb && (0, jb.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": eb,
              onClick: () => {
                Lb(!eb)
              },
              children: [(0, jb.jsx)(kb, {
                name: eb ? "chevron-up" : "chevron-down"
              }), eb ? "Show less" : `Show all ${Yb} lines`]
            })]
          })
        }
        var mb = Ub(4420);
        var pb = Ub(4428);
        const Nb = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Wb(bb) {
          const ab = new Map;
          let Ub, Ab = [],
            Mb = !1;
          const Tb = () => {
            Ub && ab.set(Ub.name, Ub.lines.join("\n").trimEnd())
          };
          for (const Eb of bb.split("\n")) {
            const bb = Eb.match(Nb);
            Mb || Eb.startsWith("/*") ? (Mb || (Tb(), Ub = void 0), Ab.push(Eb), Mb = !Eb.includes("*/")) : bb ? (Tb(), Ub = {
              name: bb[1],
              lines: [...Ab, Eb]
            }, Ab = []) : Ub && (Eb.startsWith(" ") || Eb.startsWith("\t") || /^[}\])|]/.test(Eb)) ? Ub.lines.push(Eb) : Ub && "" !== Eb.trim() && (Tb(), Ub = void 0)
          }
          return Tb(), ab
        }

        function Hb(bb) {
          return "methods" === bb || "callbacks" === bb || "settings" === bb
        }
        const Ib = {
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
              setterSnippet: (bb, ab) => `api.setClientOption(playerId, "${bb}", ${ab})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (bb, ab) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${bb}", ${ab})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (bb, ab) => `api.setMobSetting(mobId, "${bb}", ${ab})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (bb, ab) => `api.setVehicleSetting(vehicleId, "${bb}", ${ab})`
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
          db = {
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

        function Fb(bb) {
          return bb.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function hb(bb) {
          let ab = !1;
          return bb.split("\n").map((bb => (bb.startsWith("```") && (ab = !ab), !ab && /^#{3,} /.test(bb) ? bb.slice(1) : bb))).join("\n")
        }

        function Gb(bb) {
          return "readme" === bb ? "getting-started" : Fb(bb)
        }
        const Qb = "## Glossary of Referenced Types";
        const qb = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...pb.d.flatMap((bb => {
            const ab = {
              id: bb.id,
              slug: Gb(bb.id),
              title: bb.title,
              markdown: bb.content,
              ...Ib[bb.id]
            };
            if ("readme" === bb.id) return function(bb) {
              const ab = bb.markdown.indexOf(Qb),
                Ub = bb.markdown.indexOf("\n```", ab),
                Ab = bb.markdown.indexOf("\n```", Ub + 1);
              if (-1 === ab || -1 === Ub || -1 === Ab) throw new Error(`Getting started has no "${Qb}" section with a code block`);
              const Mb = bb.markdown.slice(ab + 31, Ub).trim(),
                Tb = [...Wb(bb.markdown.slice(bb.markdown.indexOf("\n", Ub + 1) + 1, Ab))].map((bb => {
                  let [ab, Ub] = bb;
                  return `## ${ab}\n\n\`\`\`ts\n${Ub}\n\`\`\`\n`
                })),
                Eb = bb.markdown.slice(bb.markdown.indexOf("\n", Ab + 1) + 1);
              return [{
                ...bb,
                markdown: `${bb.markdown.slice(0,ab)}${Eb}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Mb}\n\n${Tb.join("\n")}`
              }]
            }(ab);
            if ("howTo" === bb.id) {
              const {
                parent: bb,
                guides: Ub
              } = function(bb) {
                const [ab, ...Ub] = bb.markdown.split(/^(?=## )/m), Ab = [ab], Mb = [];
                for (const Eb of Ub) {
                  var Tb;
                  const ab = Eb.indexOf("\n"),
                    Ub = Eb.slice(3, ab).trim(),
                    Yb = Eb.slice(ab + 1);
                  if (!Yb.includes("```")) {
                    Ab.push(Eb);
                    continue
                  }
                  const Bb = null !== (Tb = db[Ub]) && void 0 !== Tb ? Tb : {
                    icon: "lightbulb",
                    summary: `How to use ${Ub.toLowerCase()} in World Code.`
                  };
                  Mb.push({
                    id: `${bb.id}${Ub.split(/[^A-Za-z0-9]+/).map((bb=>bb.charAt(0).toUpperCase()+bb.slice(1))).join("")}`,
                    slug: `${bb.slug}-${Fb(Ub)}`,
                    title: Ub,
                    layout: "article",
                    sourceAnchor: (0, mb.r)(Ub),
                    markdown: `# ${Ub}\n\n${hb(Yb)}`,
                    ...Bb
                  })
                }
                return {
                  parent: {
                    ...bb,
                    markdown: Ab.join(""),
                    childPageIds: Mb.map((bb => bb.id))
                  },
                  guides: Mb
                }
              }(ab);
              return [bb, ...Ub]
            }
            return [ab]
          }))],
          ub = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...qb.filter((bb => void 0 !== bb.sourceAnchor)).map((bb => bb.id))]
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

        function rb(bb) {
          return qb.find((ab => ab.id === bb))
        }
        const Kb = new Map;

        function ob(bb) {
          let ab = Kb.get(bb.id);
          return ab || (ab = (0, mb.v)(bb.markdown, "changelog" === bb.layout ? 3 : 2), Kb.set(bb.id, ab)), ab
        }

        function lb(bb, ab) {
          return ob(bb).sections.some((bb => bb.heading.anchor === ab || bb.blocks.some((bb => "heading" === bb.kind && bb.anchor === ab))))
        }

        function tb(bb) {
          const [ab, ...Ub] = bb.replace(/^#/, "").split("-"), Ab = qb.find((bb => bb.id === ab));
          if (!Ab) return null;
          const Mb = Ub.length > 0 ? (0, mb.r)(Ub.join("-")) : "";
          for (const Eb of null !== (Tb = Ab.childPageIds) && void 0 !== Tb ? Tb : []) {
            var Tb;
            const bb = rb(Eb);
            if (bb.sourceAnchor === Mb) return {
              page: bb,
              anchor: ""
            };
            if (lb(bb, Mb)) return {
              page: bb,
              anchor: Mb
            }
          }
          return {
            page: Ab,
            anchor: Mb
          }
        }
        const wb = {
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

        function sb(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Ab = ab.slug ? `${bb}/${ab.slug}` : bb;
          return Ub ? `${Ab}#${Ub}` : Ab
        }
        var gb = Ub(4446);
        const Cb = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Vb = new Set(["GameApi", "Console", "_TypeOf"]),
          Ob = 4;

        function cb(bb) {
          let ab = bb.length;
          for (; ab > 0 && "" === bb[ab - 1].trim();) ab--;
          return bb.slice(0, ab)
        }

        function Jb(bb) {
          var ab;
          const Ub = cb(bb);
          if (null === (ab = Ub.at(-1)) || void 0 === ab || !ab.trimEnd().endsWith("*/")) return {
            lines: Ub,
            doc: ""
          };
          const Ab = Ub.findLastIndex((bb => bb.startsWith("/**")));
          return -1 === Ab ? {
            lines: Ub,
            doc: ""
          } : {
            lines: cb(Ub.slice(0, Ab)),
            doc: Ub.slice(Ab).join("\n")
          }
        }

        function nb(bb) {
          var ab;
          const Ub = bb.split("\n"),
            Ab = Ub.flatMap(((bb, ab) => Cb.test(bb) ? [ab] : []));
          let Mb = Jb(Ub.slice(0, null !== (ab = Ab[0]) && void 0 !== ab ? ab : Ub.length)).doc;
          return Ab.map(((bb, ab) => {
            var Tb;
            const Eb = Jb(Ub.slice(bb, null !== (Tb = Ab[ab + 1]) && void 0 !== Tb ? Tb : Ub.length)),
              Yb = {
                name: Ub[bb].match(Cb)[1],
                doc: Mb,
                lines: Eb.lines
              };
            return Mb = Eb.doc, Yb
          }))
        }

        function Sb(bb) {
          var ab;
          const Ub = bb.match(/^readonly \[([\s\S]*)\]$/);
          return Ub ? null !== (ab = Ub[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== ab ? ab : [] : null
        }

        function ba(bb) {
          if (!bb.startsWith("{") || !bb.endsWith("}")) return null;
          const ab = {
              keys: [],
              values: []
            },
            Ub = bb => {
              const Ub = bb.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              Ub && (ab.keys.push(Ub[1].startsWith('"') ? Ub[1] : `"${Ub[1]}"`), ab.values.push(Ub[2].trim()))
            };
          let Ab = 0,
            Mb = "";
          for (const Tb of bb.slice(1, -1)) "{[(".includes(Tb) ? Ab++ : "}])".includes(Tb) && Ab--, ";" === Tb && 0 === Ab ? (Ub(Mb), Mb = "") : Mb += Tb;
          return Ub(Mb), ab
        }

        function aa(bb) {
          return bb.length > Ob ? `\n\t| ${bb.join("\n\t| ")}` : bb.join(" | ")
        }

        function Ua(bb, ab) {
          const Ub = function(bb, ab) {
            return bb.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((bb, Ub) => {
              var Ab;
              const Mb = null === (Ab = ab.get(Ub)) || void 0 === Ab ? void 0 : Ab.object;
              return Mb ? aa(Mb.values) : bb
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((bb, Ub) => {
              var Ab, Mb;
              const Tb = null === (Ab = ab.get(Ub)) || void 0 === Ab || null === (Mb = Ab.object) || void 0 === Mb ? void 0 : Mb.values.map(Sb);
              return null !== Tb && void 0 !== Tb && Tb.every((bb => null !== bb)) ? aa([...new Set(Tb.flat())]) : bb
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((bb, Ub) => {
              var Ab;
              const Mb = null === (Ab = ab.get(Ub)) || void 0 === Ab ? void 0 : Ab.members;
              return Mb ? aa(Mb) : bb
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((bb, Ub) => {
              var Ab;
              const Mb = null === (Ab = ab.get(Ub)) || void 0 === Ab ? void 0 : Ab.object;
              return Mb ? aa(Mb.keys) : bb
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((bb, Ub) => {
              var Ab, Mb;
              return null !== (Ab = null === (Mb = ab.get(Ub)) || void 0 === Mb ? void 0 : Mb.text) && void 0 !== Ab ? Ab : bb
            }))
          }(bb.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), ab);
          return [bb.doc, Ub].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Aa(bb) {
          const ab = nb(bb),
            Ub = function(bb) {
              const ab = new Map,
                Ub = bb.find((bb => "_TypeOf" === bb.name));
              let Ab = null;
              const Mb = () => {
                if (Ab) {
                  const bb = Ab.lines.join("\n");
                  ab.set(Ab.name, {
                    text: bb,
                    members: Sb(bb),
                    object: ba(bb)
                  })
                }
              };
              for (const Tb of Ub.lines.slice(1, -1)) {
                const bb = Tb.match(/^\t([\w$]+): (.+)$/);
                bb ? (Mb(), Ab = {
                  name: bb[1],
                  lines: [bb[2]]
                }) : Ab && Ab.lines.push(Tb.replace(/^\t/, ""))
              }
              return Mb(), ab
            }(ab),
            Ab = new Map;
          for (const Mb of ab) Vb.has(Mb.name) || Ab.has(Mb.name) || Ab.set(Mb.name, Ua(Mb, Ub));
          return Ab
        }
        let Ma, Ta, Ea;

        function Ya() {
          return Ta ??= function(bb) {
            const ab = nb(bb).find((bb => "GameApi" === bb.name)),
              Ub = new Map,
              Ab = ab.lines;
            for (let Tb = 0; Tb < Ab.length; Tb++) {
              var Mb;
              if (!Ab[Tb].trimStart().startsWith("/**")) continue;
              const bb = Tb;
              for (; Tb < Ab.length && !Ab[Tb].includes("*/");) Tb++;
              const ab = null === (Mb = Ab[Tb + 1]) || void 0 === Mb ? void 0 : Mb.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!ab) continue;
              let Eb = null;
              const Yb = [];
              let Bb = "description",
                eb = !1;
              for (const Ub of Ab.slice(bb, Tb + 1).join("\n").split("\n").map((bb => bb.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const bb = Ub.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                bb ? (Eb = bb[1].trim(), Bb = "deprecation") : Ub.startsWith("@") ? (Bb = "otherTag", eb = !0) : "" === Ub.trim() ? eb || (Bb = "description", Yb.push(Ub)) : "deprecation" !== Bb || /^[A-Z]/.test(Ub.trim()) ? "otherTag" !== Bb && (Bb = "description", Yb.push(Ub)) : Eb = `${Eb} ${Ub.trim()}`.trim()
              }
              Ub.set(ab[1], {
                deprecation: Eb,
                description: Yb.join("\n").trim()
              })
            }
            return Ub
          }(gb.default), Ta
        }

        function Ba() {
          if (!Ea) {
            Ea = new Map;
            for (const bb of qb) {
              const ab = (0, mb.u)(ob(bb)).flatMap((bb => bb.blocks));
              for (const bb of (0, mb.m)(ab))
                if ("ts" === bb.lang || "typescript" === bb.lang)
                  for (const [ab, Ub] of Wb(bb.code)) Ea.set(ab, Ub)
            }
            for (const [bb, ab] of(Ma ??= Aa(gb.default), Ma)) Ea.has(bb) || Ea.set(bb, ab)
          }
          return Ea
        }
        const ea = {
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
        let va;

        function La() {
          if (!va) {
            va = new Map;
            for (const bb of qb)
              if (Hb(bb.layout))
                for (const ab of ob(bb).sections) va.has(ab.heading.text) || va.set(ab.heading.text, {
                  pageId: bb.id,
                  anchor: ab.heading.anchor
                })
          }
          return va
        }

        function Pa(bb) {
          const ab = bb.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return ab ? La().get(ab[1]) : void 0
        }
        const Xa = (0, Ab.createContext)("/docs"),
          ja = (0, Ab.createContext)(null),
          Ra = (0, Ab.createContext)(!1),
          ka = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function ya(bb) {
          const ab = bb.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return ab ? ab[1] : null
        }

        function Za(bb) {
          let {
            colour: ab
          } = bb;
          return (0, jb.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: ab
            },
            "aria-hidden": "true"
          })
        }

        function Da(bb) {
          const ab = [];
          let Ub = 0;
          for (const Ab of bb.matchAll(ka)) ab.push(bb.slice(Ub, Ab.index), (0, jb.jsx)(Za, {
            colour: Ab[0]
          }), Ab[0]), Ub = Ab.index + Ab[0].length;
          return ab.push(bb.slice(Ub)), ab
        }

        function za(bb) {
          let {
            href: ab,
            children: Ub
          } = bb;
          const Mb = (0, Ab.useContext)(Xa);
          if (ab.startsWith("#")) {
            const bb = tb(ab);
            if (bb) return (0, jb.jsx)(Eb.c, {
              to: sb(Mb, bb.page, bb.anchor),
              children: (0, jb.jsx)(Ra.Provider, {
                value: !0,
                children: Ub
              })
            })
          }
          return (0, jb.jsx)("a", {
            href: ab,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, jb.jsx)(Ra.Provider, {
              value: !0,
              children: Ub
            })
          })
        }

        function xa(bb) {
          let {
            code: ab
          } = bb;
          const Ub = (0, Ab.useContext)(Xa);
          if ((0, Ab.useContext)(Ra)) return (0, jb.jsx)("code", {
            className: "DocsInlineCode",
            children: ab
          });
          if (Ba().has(ab)) return (0, jb.jsx)(pa, {
            type: ab
          });
          const Mb = Pa(ab);
          if (Mb) return (0, jb.jsx)(Eb.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: sb(Ub, rb(Mb.pageId), Mb.anchor),
            children: ab
          });
          const Tb = ya(ab);
          return (0, jb.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Tb && (0, jb.jsx)(Za, {
              colour: Tb
            }), ab]
          })
        }

        function ia(bb) {
          let {
            text: ab
          } = bb;
          const Ub = [];
          let Mb = 0;
          for (const Ab of ab.matchAll(mb.e)) {
            Ab.index > Mb && Ub.push(...Da(ab.slice(Mb, Ab.index)));
            const [, bb, Tb, Eb, Yb, Bb] = Ab;
            bb ? Ub.push((0, jb.jsx)(xa, {
              code: (0, mb.o)(bb, Tb)
            })) : Eb ? Ub.push((0, jb.jsx)("strong", {
              children: (0, jb.jsx)(ia, {
                text: Eb
              })
            })) : Ub.push((0, jb.jsx)(za, {
              href: Bb,
              children: (0, jb.jsx)(ia, {
                text: Yb
              })
            })), Mb = Ab.index + Ab[0].length
          }
          return Mb < ab.length && Ub.push(...Da(ab.slice(Mb))), (0, jb.jsx)(jb.Fragment, {
            children: Ub.map(((bb, ab) => (0, jb.jsx)(Ab.Fragment, {
              children: bb
            }, ab)))
          })
        }
        const fa = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          ma = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function pa(bb) {
          let {
            type: ab
          } = bb;
          const Ub = Ba(),
            Mb = [];
          for (const Ab of ab.trim().matchAll(fa)) {
            const [bb, ab, Tb, Eb, Yb] = Ab;
            ab ? Mb.push((0, jb.jsx)("span", {
              className: "DocsTypeString",
              children: bb
            })) : Tb && Ub.has(Tb) ? Mb.push((0, jb.jsx)(da, {
              name: Tb,
              definition: Ub.get(Tb)
            })) : Tb ? Mb.push((0, jb.jsx)("span", {
              className: ma.has(Tb) ? "DocsTypeKeyword" : "DocsTypeName",
              children: bb
            })) : Eb ? Mb.push((0, jb.jsx)("span", {
              className: "DocsTypeNumber",
              children: bb
            })) : Yb ? Mb.push(" ") : Mb.push((0, jb.jsx)("span", {
              className: "DocsTypePunctuation",
              children: bb
            }))
          }
          return (0, jb.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Mb.map(((bb, ab) => (0, jb.jsx)(Ab.Fragment, {
              children: bb
            }, ab)))
          })
        }
        const Na = 480,
          Wa = 6,
          Ha = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Ia = 0;

        function da(bb) {
          let {
            name: ab,
            definition: Ub
          } = bb;
          const Mb = (0, Ab.useContext)(Xa),
            Tb = ea[ab],
            Yb = (0, Ab.useRef)(null),
            Bb = (0, Ab.useRef)(null),
            vb = (0, Ab.useRef)(null),
            [Lb, Pb] = (0, Ab.useState)(!1),
            [Xb, Rb] = (0, Ab.useState)(null),
            yb = (0, Ab.useRef)(),
            Zb = (0, Ab.useContext)(ja),
            [Db] = (0, Ab.useState)((() => "DocsTypePopover-" + Ia++)),
            zb = () => {
              clearTimeout(yb.current), Pb(!0)
            },
            xb = () => {
              clearTimeout(yb.current), yb.current = setTimeout((() => {
                Pb(!1)
              }), 120)
            };
          return (0, Ab.useEffect)((() => {
            if (!Lb) return;
            const bb = bb => {
              if ("Escape" === bb.key) {
                var ab, Ub;
                if (null !== (ab = Bb.current) && void 0 !== ab && ab.contains(document.activeElement)) null === (Ub = Yb.current) || void 0 === Ub || Ub.focus();
                Pb(!1)
              }
            };
            return document.addEventListener("keydown", bb), () => {
              document.removeEventListener("keydown", bb)
            }
          }), [Lb]), (0, Ab.useEffect)((() => () => {
            clearTimeout(yb.current)
          }), []), (0, Ab.useLayoutEffect)((() => {
            if (!Lb || !Yb.current || !Bb.current) return void Rb(null);
            const bb = Yb.current.getBoundingClientRect(),
              ab = Bb.current.offsetHeight,
              Ub = Math.min(Na, window.innerWidth - 32),
              Ab = Math.min(Math.max(16, bb.left), window.innerWidth - Ub - 16),
              Mb = bb.bottom + Wa + ab < window.innerHeight;
            Rb({
              left: Ab,
              top: Mb ? bb.bottom + Wa : Math.max(16, bb.top - Wa - ab)
            })
          }), [Lb]), (0, jb.jsxs)(jb.Fragment, {
            children: [(0, jb.jsx)("button", {
              type: "button",
              ref: Yb,
              className: "DocsTypeLink",
              "aria-expanded": Lb,
              "aria-describedby": Lb ? Db : void 0,
              onMouseEnter: zb,
              onMouseLeave: xb,
              onFocus: zb,
              onBlur: xb,
              onKeyDown: bb => {
                "Tab" === bb.key && !bb.shiftKey && vb.current && (bb.preventDefault(), vb.current.focus())
              },
              onClick: zb,
              children: ab
            }), Lb && (0, eb.createPortal)((0, jb.jsxs)("span", {
              ref: Bb,
              id: Db,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Xb ? {
                left: Xb.left,
                top: Xb.top,
                maxWidth: Na
              } : {
                visibility: "hidden"
              },
              onMouseEnter: zb,
              onMouseLeave: xb,
              onFocus: zb,
              onBlur: xb,
              children: [(0, jb.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, jb.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: ab
                }), Tb && (0, jb.jsxs)(Eb.c, {
                  ref: vb,
                  className: "DocsTypePopoverLink",
                  to: sb(Mb, rb(Tb)),
                  onClick: () => {
                    Pb(!1)
                  },
                  onKeyDown: bb => {
                    if ("Tab" === bb.key) {
                      var ab;
                      if (bb.preventDefault(), bb.shiftKey || !Yb.current || ! function(bb, ab) {
                          const Ub = [...document.querySelectorAll(Ha)],
                            Ab = Ub.slice(Ub.indexOf(bb) + 1).find((bb => bb.getClientRects().length > 0 && !(null !== ab && void 0 !== ab && ab.contains(bb))));
                          return null === Ab || void 0 === Ab || Ab.focus(), void 0 !== Ab
                        }(Yb.current, Bb.current)) null === (ab = Yb.current) || void 0 === ab || ab.focus();
                      bb.shiftKey || Pb(!1)
                    }
                  },
                  children: [rb(Tb).title, (0, jb.jsx)(kb, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, jb.jsx)(fb, {
                lang: "ts",
                code: Ub,
                compact: !0
              })]
            }), null !== Zb && void 0 !== Zb ? Zb : document.body)]
          })
        }
        var Fa = Ub(205),
          ha = Ub(4455),
          Ga = Ub(4457),
          Qa = Ub(4462);
        const qa = {
          progressBar: {
            qb: 30,
            ub: .075,
            Kb: 5,
            ob: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            gb: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Vb: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Ob: !0,
            scale: 3,
            rotation: 15,
            cb: !1
          },
          gravityBar: {
            qb: 30,
            Sb: .25,
            ba: 3,
            aa: .8,
            gravity: 1,
            Ua: 1.5,
            Aa: 8,
            Ma: 4,
            ob: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            Ea: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Ba: 5,
            ea: 1200,
            va: .15,
            La: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var ua = Ub(307),
          ra = Ub(1889);

        function Ka(bb) {
          return bb.startsWith("fa-")
        }
        const oa = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          la = {
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

        function ta(bb) {
          return "string" === typeof bb ? "text" : "entityName" in bb || "translationKey" in bb ? "other" : (0, ua.qb)(bb) ? "progressBar" : (0, ua.ob)(bb) ? "keyBinding" : "icon" in bb ? "icon" : "str" in bb && "string" === typeof bb.str ? "text" : "other"
        }
        const wa = [{
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
          sa = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...wa],
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
                options: ra.m
              },
              isRequired: !0
            }, ...wa],
            other: []
          };

        function ga(bb) {
          return "string" === typeof bb ? {
            str: bb
          } : bb
        }

        function Ca(bb, ab) {
          let Ub = ga(bb);
          for (const Ab of ab) Ub = Ub && "object" === typeof Ub ? Ub[Ab] : void 0;
          return Ub
        }

        function Va(bb, ab, Ub) {
          const Ab = (bb, Mb) => {
            var Tb;
            const Eb = ab[Mb],
              Yb = {
                ...bb
              };
            if (Mb === ab.length - 1) return void 0 === Ub ? delete Yb[Eb] : Yb[Eb] = Ub, Yb;
            const Bb = Ab(null !== (Tb = bb[Eb]) && void 0 !== Tb ? Tb : {}, Mb + 1);
            return 0 === Object.keys(Bb).length ? delete Yb[Eb] : Yb[Eb] = Bb, Yb
          };
          return function(bb) {
            const ab = Object.keys(bb);
            return "string" === typeof bb.str && 1 === ab.length ? bb.str : bb
          }(Ab(ga(bb), 0))
        }

        function Oa(bb, ab) {
          const Ub = ta(bb),
            Ab = sa[Ub].find((bb => bb.path.join(".") === ab.join("."))),
            Mb = null !== Ab && void 0 !== Ab && Ab.isRequired && "other" !== Ub ? Ca(la[Ub], ab) : void 0;
          return Va(bb, ab, Mb)
        }

        function ca(bb) {
          switch (ta(bb)) {
            case "text":
              return String(Ca(bb, ["str"]));
            case "icon":
              return String(Ca(bb, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Ca(bb,["progress"])))}%`;
            case "keyBinding":
              return String(Ca(bb, ["action"]));
            case "other":
              return JSON.stringify(bb)
          }
        }
        const Ja = /^[A-Za-z_$][\w$]*$/;

        function na(bb) {
          if (Array.isArray(bb)) return `[${bb.map(na).join(", ")}]`;
          if (bb && "object" === typeof bb) {
            const ab = Object.entries(bb).map((bb => {
              let [ab, Ub] = bb;
              return `${Ja.test(ab)?ab:JSON.stringify(ab)}: ${na(Ub)}`
            }));
            return 0 === ab.length ? "{}" : `{ ${ab.join(", ")} }`
          }
          return JSON.stringify(bb)
        }

        function Sa(bb) {
          const ab = bb.map(na),
            Ub = `[${ab.join(", ")}]`;
          return Ub.length <= 60 ? Ub : `[\n${ab.map((bb=>`    ${bb},`)).join("\n")}\n]`
        }
        const bU = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function aU(bb) {
          let ab = "";
          for (let Mb = 0; Mb < bb.length; Mb++) {
            const Tb = bb[Mb];
            if ("\\" === Tb) {
              var Ub;
              const Ab = null !== (Ub = bb[Mb + 1]) && void 0 !== Ub ? Ub : "";
              ab += "'" === Ab ? "'" : Tb + Ab, Mb++
            } else if ('"' === Tb) ab += '\\"';
            else {
              var Ab;
              ab += null !== (Ab = bU[Tb]) && void 0 !== Ab ? Ab : Tb
            }
          }
          return `"${ab}"`
        }

        function UU(bb) {
          if ("string" === typeof bb) return !0;
          if (!bb || "object" !== typeof bb || Array.isArray(bb)) return !1;
          const ab = bb;
          return "ProgressBar" === ab.type ? "number" === typeof ab.progress : "StyledKeyBinding" === ab.type ? ra.m.includes(ab.action) : "string" === typeof ab.icon || "string" === typeof ab.str || "string" === typeof ab.entityName || "string" === typeof ab.translationKey
        }

        function AU(bb) {
          let ab;
          try {
            ab = function(bb) {
              let ab = "",
                Ub = "",
                Ab = 0;
              const Mb = () => {
                ab += Ub.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), Ub = ""
              };
              for (; Ab < bb.length;) {
                const Tb = bb.slice(Ab).search(/["'`]|\/\//);
                if (-1 === Tb) {
                  Ub += bb.slice(Ab);
                  break
                }
                Ub += bb.slice(Ab, Ab + Tb);
                const Eb = Ab + Tb,
                  Yb = bb[Eb];
                if ("/" === Yb) {
                  const ab = bb.indexOf("\n", Eb);
                  Ab = -1 === ab ? bb.length : ab;
                  continue
                }
                if (Mb(), "`" === Yb) throw new Error("Use quotes rather than template strings.");
                let Bb = Eb + 1;
                for (; Bb < bb.length && bb[Bb] !== Yb;) Bb += "\\" === bb[Bb] ? 2 : 1;
                if (Bb >= bb.length) throw new Error("A string is missing its closing quote.");
                const eb = bb.slice(Eb + 1, Bb);
                ab += aU(eb), Ab = Bb + 1
              }
              return Mb(), JSON.parse(ab)
            }(bb.trim())
          } catch (Ab) {
            return {
              parts: null,
              error: Ab instanceof SyntaxError ? "This isn't a valid array yet." : Ab.message
            }
          }
          if (!Array.isArray(ab)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const Ub = ab.findIndex((bb => !UU(bb)));
          return -1 !== Ub ? {
            parts: null,
            error: `Part ${Ub+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: ab,
            error: null
          }
        }
        const MU = 1 / Fa.c.clientTicksPerSecond,
          TU = 700,
          EU = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          YU = {
            progressBar: qa.progressBar.gb,
            timedClick: qa.timedClick.icon,
            gravityBar: qa.gravityBar.icon,
            precisionBar: qa.precisionBar.icon,
            rhythmClick: qa.rhythmClick.icon
          };

        function BU(bb) {
          let {
            type: ab
          } = bb;
          const [Ub, Mb] = (0, Ab.useState)("ready"), [Eb, Yb] = (0, Ab.useState)(1), [Bb, eb] = (0, Ab.useState)(!0), vb = (0, Ab.useRef)(null), Lb = (0, Ab.useRef)(null), Pb = (0, Ab.useRef)(null), Xb = (0, Ab.useRef)(new Set), Rb = (0, Ab.useRef)(!1), yb = YU[ab], Zb = (0, Ab.useMemo)((() => ({
            getState: () => {
              var bb, ab;
              return null !== (bb = null === (ab = Pb.current) || void 0 === ab ? void 0 : ab.getState()) && void 0 !== bb ? bb : EU
            },
            onFrame: bb => (Xb.current.add(bb), () => {
              Xb.current.delete(bb)
            })
          })), []);
          (0, Ab.useEffect)((() => {
            const bb = vb.current,
              ab = Lb.current;
            if (!bb || !ab) return;
            const Ub = new ResizeObserver((() => {
              Yb(bb.clientWidth / Math.max(1, ab.offsetWidth))
            }));
            return Ub.observe(bb), () => {
              Ub.disconnect()
            }
          }), []), (0, Ab.useEffect)((() => {
            var bb;
            if ("playing" !== Ub) return;
            let Ab = !1;
            const Tb = new Qa.f[ab](qa[ab], (bb => {
              Ab = !0, eb(!1), Mb(bb ? "succeeded" : "failed")
            }), (() => {}));
            Pb.current = Tb;
            let Eb = 0,
              Yb = performance.now(),
              Bb = requestAnimationFrame((function bb(ab) {
                for (Eb += Math.min(.25, (ab - Yb) / 1e3), Yb = ab; Eb >= MU && !Ab;) Eb -= MU, Tb.handleTick(MU);
                for (const Ub of Xb.current) Ub();
                Ab || (Bb = requestAnimationFrame(bb))
              }));
            return null === (bb = vb.current) || void 0 === bb || bb.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Bb), Tb.tearDown(), Pb.current = null, Rb.current = !1
            }
          }), [Ub, ab]), (0, Ab.useEffect)((() => {
            if (Bb) return;
            const bb = setTimeout((() => {
              eb(!0)
            }), TU);
            return () => {
              clearTimeout(bb)
            }
          }), [Bb]);
          const Db = bb => {
            var ab;
            "playing" === Ub && Rb.current !== bb && (Rb.current = bb, null === (ab = Pb.current) || void 0 === ab || ab.handleMouseInput(bb))
          };
          return (0, jb.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, jb.jsxs)("div", {
              ref: vb,
              className: Tb()("DocsQteStage", {
                Playing: "playing" === Ub
              }),
              tabIndex: "playing" === Ub ? 0 : -1,
              role: "playing" === Ub ? "button" : void 0,
              "aria-label": "playing" === Ub ? `${ab} quick time event: click or press Space` : void 0,
              onPointerDown: bb => {
                0 === bb.button && Db(!0)
              },
              onPointerUp: () => {
                Db(!1)
              },
              onPointerLeave: () => {
                Db(!1)
              },
              onPointerCancel: () => {
                Db(!1)
              },
              onKeyDown: bb => {
                "playing" !== Ub || " " !== bb.key && "Enter" !== bb.key || (bb.preventDefault(), Db(!0))
              },
              onKeyUp: bb => {
                "playing" !== Ub || " " !== bb.key && "Enter" !== bb.key || Db(!1)
              },
              children: [(0, jb.jsx)("div", {
                ref: Lb,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Eb})`
                },
                children: "playing" === Ub && (0, jb.jsx)(Ga.c.Provider, {
                  value: Zb,
                  children: (0, jb.jsx)(ha.e, {
                    qte: {
                      type: ab,
                      parameters: qa[ab]
                    }
                  })
                })
              }), "playing" !== Ub && (0, jb.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== Ub && (0, jb.jsxs)("div", {
                  className: Tb()("DocsQteResult", "succeeded" === Ub ? "Succeeded" : "Failed"),
                  children: [(0, jb.jsx)(kb, {
                    name: "succeeded" === Ub ? "check" : "cross",
                    isTinted: !0
                  }), (0, jb.jsx)("span", {
                    children: "succeeded" === Ub ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, jb.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Bb,
                  onClick: () => {
                    Mb("playing")
                  },
                  children: [(0, jb.jsx)(kb, {
                    name: "ready" === Ub ? "play" : "replay"
                  }), (0, jb.jsx)("span", {
                    children: "ready" === Ub ? `Try ${ab}` : "Play again"
                  })]
                })]
              })]
            }), yb && !Ka(yb) && (0, jb.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, jb.jsx)("code", {
                children: yb
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function eU(bb) {
          let {
            level: ab,
            text: Ub,
            anchor: Ab,
            className: Mb
          } = bb;
          const Eb = `h${Math.min(ab,6)}`;
          return (0, jb.jsxs)(Eb, {
                id: Ab,
                className: Tb()("DocsHeading", Mb),
                children: [(0, jb.jsx)(ia, {
                      text: Ub
                    }), (0, jb.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Ab}`,
                        "aria-label": `Link to ${Ub.replace(/`/g,"")}`,children:"#"})]})}function vU(bb){let{items:ab,ordered:Ub}=bb;const Ab=Ub?"ol":"ul";return(0,jb.jsx)(Ab,{className:"DocsList",children:ab.map(((bb,ab)=>(0,jb.jsxs)("li",{children:[(0,jb.jsx)(ia,{text:bb.text}),bb.children.length>0&&(0,jb.jsx)(vU,{items:bb.children,ordered:Ub})]},ab)))})}function LU(bb){const ab=bb[0],Ub="paragraph"===(null===ab||void 0===ab?void 0:ab.kind)?ab.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(Ub)?"warning":/^\*\*(tip|prefer)/.test(Ub)?"tip":"note"}function PU(bb){let{block:ab}=bb;switch(ab.kind){case"heading":return(0,jb.jsx)(eU,{level:ab.level,text:ab.text,anchor:ab.anchor});case"paragraph":return(0,jb.jsx)("p",{children:(0,jb.jsx)(ia,{text:ab.text})});case"code":{const bb="ts"===ab.lang?function(bb){const ab=bb.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return ab&&Object.hasOwn(qa,ab[1])?ab[1]:null}(ab.code):null;return(0,jb.jsxs)(jb.Fragment,{children:[(0,jb.jsx)(fb,{code:ab.code,lang:ab.lang}),bb&&(0,jb.jsx)(BU,{type:bb})]})}case"table":return(0,jb.jsx)("div",{className:"DocsTableScroll",children:(0,jb.jsxs)("table",{className:"DocsTable",children:[(0,jb.jsx)("thead",{children:(0,jb.jsx)("tr",{children:ab.header.map(((bb,ab)=>(0,jb.jsx)("th",{children:(0,jb.jsx)(ia,{text:bb})},ab)))})}),(0,jb.jsx)("tbody",{children:ab.rows.map(((bb,ab)=>(0,jb.jsx)("tr",{children:bb.map(((bb,ab)=>(0,jb.jsx)("td",{children:(0,jb.jsx)(ia,{text:bb})},ab)))},ab)))})]})});case"list":return(0,jb.jsx)(vU,{items:ab.items,ordered:ab.ordered});case"quote":return(0,jb.jsx)("aside",{className:Tb()("DocsCallout",LU(ab.blocks)),children:(0,jb.jsx)(XU,{blocks:ab.blocks})});case"rule":return(0,jb.jsx)("hr",{className:"DocsRule"})}}function XU(bb){let{blocks:ab}=bb;return(0,jb.jsx)(jb.Fragment,{children:ab.map(((bb,ab)=>(0,jb.jsx)(PU,{block:bb},ab)))})}var jU=Ub(4437),RU=Ub(4439);function kU(bb){return"blocks"===bb||"items"===bb}const yU=new Map;function ZU(bb){let ab=yU.get(bb);return ab||(ab=function(bb){const ab={entries:[],legend:[],notes:[],examples:[]};let Ub=!1;for(const Tb of bb.split(/\r?\n/).slice(1)){if(Tb.startsWith("#")){const bb=Tb.replace(/^# ?/,""),Ab=bb.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Ab?ab.legend.push({code:Ab[1],meaning:Ab[2],usage:Ab[3].trim()}):/^Examples:/.test(bb.trim())?Ub=!0:Ub&&bb.trim()?ab.examples.push(bb.trim()):bb.trim()&&!/^\s/.test(bb)&&ab.notes.push(bb.trim());continue}const bb=Tb.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Ab,Mb;bb&&ab.entries.push({name:bb[1],variants:null!==(Ab=null===(Mb=bb[2])||void 0===Mb?void 0:Mb.split(","))&&void 0!==Ab?Ab:[]})}return ab}("blocks"===bb?jU:RU),yU.set(bb,ab)),ab}function DU(bb){let{className:ab,value:Ub,placeholder:Ab,label:Mb,onChange:Tb,count:Eb,children:Yb}=bb;return(0,jb.jsxs)("div",{className:ab,children:[(0,jb.jsx)(kb,{name:"magnifying-glass"}),(0,jb.jsx)("input",{type:"search",value:Ub,placeholder:Ab,"aria-label":Mb,onChange:bb=>{Tb(bb.target.value)}}),Yb,Eb&&(0,jb.jsxs)("span",{className:"DocsFilterCount",children:[Eb.visible," of ",Eb.total]})]})}var zU=Ub(990);function xU(bb){const ab=bb.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return ab?ab[2]:null}function iU(bb){return"paragraph"===bb.kind&&""===bb.text.trim()}function fU(bb){const ab={name:bb.heading.text,description:[],params:[],returns:null};let Ub="description";for(const Mb of bb.blocks)if(!iU(Mb))if("heading"===Mb.kind&&/^Parameters:?$/.test(Mb.text))Ub="params";else if("heading"===Mb.kind&&/^Returns:?$/.test(Mb.text))Ub="returns",ab.returns={type:"",description:[]};else if("params"!==Ub||"table"!==Mb.kind){if("returns"===Ub&&"paragraph"===Mb.kind&&""===ab.returns.type){const bb=xU(Mb.text);if(null!==bb){ab.returns.type=bb.replaceAll("\\|","|");continue}}"returns"===Ub?ab.returns.description.push(Mb):ab.description.push(Mb)}else for(const[bb,Ub,Tb]of Mb.rows){var Ab;ab.params.push({name:bb,type:null!==(Ab=xU(Ub))&&void 0!==Ab?Ab:Ub,description:null!==Tb&&void 0!==Tb?Tb:""})}return ab}const mU=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function pU(bb){return bb.filter((bb=>!iU(bb)))}const NU=/^[\w][\w .'&!:()-]*$/,WU=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function HU(bb){var ab;if("code"===bb.kind&&"text"===bb.lang){const ab=bb.code.split("\n").map((bb=>bb.trim())).filter(Boolean);return ab.length>0&&ab.every((bb=>NU.test(bb)))?ab.map((bb=>({name:bb}))):null}return"paragraph"===bb.kind&&WU.test(bb.text.trim())?[...bb.text.matchAll(/`([ ^ `]+)` / g)].flatMap((bb => bb[1].split(/,\s*/).map((bb => ({
                              name: bb.trim()
                            }))))): "table" === bb.kind && null !== (ab = bb.header[0]) && void 0 !== ab && ab.startsWith("Song") ? bb.rows.map((bb => {
                              let [ab, Ub] = bb;
                              return {
                                name: ab.replace(/`/g, ""),
                                caption: Ub
                              }
                            })) : null
                          }

                          function IU(bb) {
                            const ab = [];
                            for (const Ub of bb) {
                              const bb = HU(Ub),
                                Ab = ab.at(-1),
                                Mb = "table" === Ub.kind;
                              bb ? "names" === (null === Ab || void 0 === Ab ? void 0 : Ab.kind) && Ab.isSongs === Mb ? Ab.names.push(...bb) : ab.push({
                                kind: "names",
                                names: bb,
                                isSongs: Mb
                              }) : ab.push({
                                kind: "block",
                                block: Ub
                              })
                            }
                            return ab
                          }
                          const dU = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function FU(bb, ab) {
                            return `${dU[bb]}-${(0,mb.r)(ab)}`
                          }
                          const hU = new WeakMap;

                          function GU(bb, ab, Ub) {
                            let Ab = hU.get(ab);
                            if (!Ab) {
                              Ab = new Map;
                              const Ub = new Set;
                              for (const Mb of (0, mb.u)(ab)) {
                                const ab = IU(pU(Mb.blocks)).map((ab => {
                                  if ("block" === ab.kind) return ab;
                                  return {
                                    kind: "names",
                                    names: ab.names.map((ab => {
                                      var Ab, Tb;
                                      const Eb = FU(bb, ab.name);
                                      let Yb = Eb;
                                      for (let bb = 2; Ub.has(Yb); bb++) Yb = `${Eb}-${bb}`;
                                      return Ub.add(Yb), {
                                        ...ab,
                                        anchor: Yb,
                                        heading: null !== (Ab = null === (Tb = Mb.heading) || void 0 === Tb ? void 0 : Tb.text) && void 0 !== Ab ? Ab : ""
                                      }
                                    })),
                                    isSongs: ab.isSongs
                                  }
                                }));
                                Ab.set(Mb.blocks, ab)
                              }
                              hU.set(ab, Ab)
                            }
                            const Mb = Ab.get(Ub);
                            if (!Mb) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Mb
                          }
                          const QU = "/textures/docs/skinPreviews",
                            qU = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var uU = Ub(3942),
                            rU = Ub(3959);

                          function KU(bb) {
                            return Object.hasOwn(uU.f, bb) ? uU.f[bb] : null
                          }
                          const oU = {
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
                            blendMode: rU.f.Standard
                          };

                          function lU(bb, ab, Ub) {
                            return ab + (Ub - ab) * bb()
                          }

                          function tU(bb, ab, Ub) {
                            return bb + (ab - bb) * Ub
                          }

                          function wU(bb) {
                            return bb.length > 0 && "timeFraction" in bb[0]
                          }

                          function sU(bb, ab) {
                            if (0 === bb.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!wU(bb.colorGradients)) {
                              const Ub = bb.colorGradients,
                                {
                                  color: Ab
                                } = Ub[Math.floor(ab() * Ub.length) % Ub.length];
                              return [{
                                at: 0,
                                colour: [Ab[0] / 255, Ab[1] / 255, Ab[2] / 255, 1]
                              }]
                            }
                            return [...bb.colorGradients].sort(((bb, ab) => bb.timeFraction - ab.timeFraction)).map((bb => {
                              var Ub, Ab, Mb;
                              const Tb = bb.minColor,
                                Eb = null !== (Ub = bb.maxColor) && void 0 !== Ub ? Ub : Tb,
                                Yb = ab(),
                                Bb = [tU(Tb[0], Eb[0], Yb) / 255, tU(Tb[1], Eb[1], Yb) / 255, tU(Tb[2], Eb[2], Yb) / 255, tU(null !== (Ab = Tb[3]) && void 0 !== Ab ? Ab : 1, null !== (Mb = Eb[3]) && void 0 !== Mb ? Mb : 1, Yb)];
                              return {
                                at: bb.timeFraction,
                                colour: Bb
                              }
                            }))
                          }

                          function gU(bb, ab, Ub, Ab) {
                            const Mb = lU(Ab, bb.minEmitPower, bb.maxEmitPower),
                              Tb = ab => lU(Ab, Math.min(bb.dir1[ab], bb.dir2[ab]), Math.max(bb.dir1[ab], bb.dir2[ab])) * Mb,
                              Eb = [...bb.velocityGradients].sort(((bb, ab) => bb.timeFraction - ab.timeFraction)).map((bb => ({
                                at: bb.timeFraction,
                                factor: lU(Ab, bb.factor, bb.factor2)
                              })));
                            return {
                              pos: [lU(Ab, ab[0], Ub[0]), lU(Ab, ab[1], Ub[1]), lU(Ab, ab[2], Ub[2])],
                              dir: [Tb(0), Tb(1), Tb(2)],
                              age: 0,
                              life: lU(Ab, bb.minLifeTime, bb.maxLifeTime),
                              size: lU(Ab, bb.minSize, bb.maxSize),
                              colours: sU(bb, Ab),
                              velocityFactors: Eb
                            }
                          }

                          function CU(bb, ab, Ub, Ab) {
                            if (ab < bb[0].at) return Ub(Math.min(1, bb.length - 1));
                            for (let Mb = 0; Mb < bb.length - 1; Mb++)
                              if (ab <= bb[Mb + 1].at) {
                                const Tb = bb[Mb + 1].at - bb[Mb].at;
                                return Ab(Ub(Mb), Ub(Mb + 1), Tb > 0 ? (ab - bb[Mb].at) / Tb : 1)
                              } return Ub(bb.length - 1)
                          }

                          function VU(bb) {
                            return CU(bb.colours, bb.age / bb.life, (ab => bb.colours[ab].colour), ((bb, ab, Ub) => [tU(bb[0], ab[0], Ub), tU(bb[1], ab[1], Ub), tU(bb[2], ab[2], Ub), tU(bb[3], ab[3], Ub)]))
                          }

                          function OU(bb, ab, Ub) {
                            if (bb.age += Ub, bb.age >= bb.life) return !1;
                            const Ab = function(bb) {
                              return 0 === bb.velocityFactors.length ? 1 : CU(bb.velocityFactors, bb.age / bb.life, (ab => bb.velocityFactors[ab].factor), tU)
                            }(bb) * Ub;
                            for (let Tb = 0; Tb < 3; Tb++) {
                              var Mb;
                              bb.pos[Tb] += bb.dir[Tb] * Ab, bb.dir[Tb] += (null !== (Mb = ab[Tb]) && void 0 !== Mb ? Mb : 0) * Ub
                            }
                            return !0
                          }

                          function cU(bb) {
                            return String(Math.round(1e6 * bb) / 1e6)
                          }

                          function JU(bb) {
                            return `[${bb.map(cU).join(", ")}]`
                          }

                          function nU(bb, ab) {
                            const Ub = `${ab}    `;
                            return `[\n${(wU(bb)?bb.map((bb=>{const ab=[`${Ub}    timeFraction: ${cU(bb.timeFraction)},`,`${Ub}    minColor: ${JU(bb.minColor)},`];return bb.maxColor&&ab.push(`${Ub}    maxColor: ${JU(bb.maxColor)},`),`${Ub}{\n${ab.join("\n")}\n${Ub}},`})):bb.map((bb=>`
                            $ {
                              Ub
                            } {
                              color: $ {
                                JU(bb.color)
                              }
                            }, `))).join("\n")}\n${ab}]`
                          }
                          const SU = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            bA = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const aA = .6;

                          function UA(bb, ab) {
                            return `${ab?"song":"sound"}:${bb}`
                          }
                          let AA = {
                              track: null,
                              volume: aA
                            },
                            MA = null,
                            TA = 0,
                            EA = 0;
                          const YA = new Set;

                          function BA(bb) {
                            AA = {
                              ...AA,
                              ...bb
                            }, YA.forEach((bb => {
                              bb()
                            }))
                          }

                          function eA(bb) {
                            AA.track && BA({
                              track: {
                                ...AA.track,
                                ...bb
                              }
                            })
                          }

                          function vA(bb) {
                            const [ab, Ub] = (0, Ab.useState)((() => bb(AA))), Mb = (0, Ab.useRef)(bb);
                            return Mb.current = bb, (0, Ab.useEffect)((() => {
                              const bb = () => {
                                Ub((() => Mb.current(AA)))
                              };
                              return YA.add(bb), bb(), () => {
                                YA.delete(bb)
                              }
                            }), []), ab
                          }

                          function LA() {
                            TA++;
                            const bb = MA;
                            MA = null, null === bb || void 0 === bb || bb.stop()
                          }

                          function PA(bb, ab) {
                            let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            LA();
                            const Mb = TA,
                              {
                                track: Tb
                              } = AA,
                              Eb = Tb && Tb.name === bb && Tb.isSong === ab ? Tb.duration : 0;
                            EA = Ab, BA({
                              track: {
                                name: bb,
                                isSong: ab,
                                status: "loading",
                                duration: Eb
                              }
                            }), Promise.all([Ub.e(215), Ub.e(239)]).then((() => Ub(38880))).then((Ub => {
                              let {
                                playDocsSound: Tb
                              } = Ub;
                              Mb === TA && (MA = Tb(bb, ab, AA.volume, Ab, {
                                onPlay: bb => {
                                  Mb === TA && eA({
                                    status: "playing",
                                    duration: bb
                                  })
                                },
                                onEnd: bb => {
                                  var ab, Ub;
                                  Mb === TA && (MA = null, bb ? BA({
                                    track: null
                                  }) : (EA = null !== (ab = null === (Ub = AA.track) || void 0 === Ub ? void 0 : Ub.duration) && void 0 !== ab ? ab : 0, eA({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((ab => {
                              console.error(`Could not play docs sound ${bb}`, ab), Mb === TA && BA({
                                track: null
                              })
                            }))
                          }

                          function XA() {
                            const {
                              track: bb
                            } = AA;
                            if (!bb) return;
                            if ("playing" === bb.status && MA) return EA = MA.eZ(), MA.pause(), void eA({
                              status: "paused"
                            });
                            if ("loading" === bb.status) return LA(), void eA({
                              status: "paused"
                            });
                            if (MA) return void MA.resume();
                            const ab = bb.duration > 0 && EA >= bb.duration - .05;
                            PA(bb.name, bb.isSong, ab ? 0 : EA)
                          }

                          function jA() {
                            var bb;
                            return MA && "playing" === (null === (bb = AA.track) || void 0 === bb ? void 0 : bb.status) ? MA.eZ() : EA
                          }

                          function RA(bb) {
                            var ab;
                            null === (ab = MA) || void 0 === ab || ab.setVolume(bb), BA({
                              volume: bb
                            })
                          }

                          function kA() {
                            LA(), EA = 0, BA({
                              track: null
                            })
                          }
                          const yA = (0, Ab.createContext)(null);
                          let ZA = null;

                          function DA() {
                            const [bb, ab] = (0, Ab.useState)(null);
                            return (0, Ab.useEffect)((() => {
                              let bb = !1;
                              return ZA ??= Promise.all([Ub.e(69), Ub.e(72), Ub.e(71), Ub.e(70), Ub.e(196), Ub.e(96), Ub.e(220)]).then((() => Ub(38878))), ZA.then((Ub => {
                                bb || ab(Ub)
                              }), (bb => {
                                console.error("Could not load the docs gallery's textures", bb), ZA = null
                              })), () => {
                                bb = !0
                              }
                            }), []), bb
                          }
                          const zA = 24,
                            xA = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function iA(bb, ab) {
                            const Ub = "skins" === bb ? function(bb, ab) {
                              const Ub = qU.find((ab => bb.startsWith(ab.heading)));
                              return Ub ? function(bb, ab) {
                                return `${bb}-${ab}`
                              }(Ub.prefix, ab) : null
                            }(ab.heading, ab.name) : null;
                            return null === Ub ? null : `${QU}/${Ub}.webp`
                          }

                          function fA(bb) {
                            let {
                              kind: ab,
                              entry: Ub,
                              assets: Mb,
                              renderedUrl: Eb
                            } = bb;
                            const {
                              name: Yb
                            } = Ub, [Bb, eb] = (0, Ab.useState)(!1);
                            if ("icons" === ab && Ka(Yb)) return (0, jb.jsx)(zU.e, {
                              className: "DocsTileIcon",
                              name: Yb
                            });
                            let vb = null;
                            var Lb;
                            if ("icons" === ab) vb = null !== (Lb = null === Mb || void 0 === Mb ? void 0 : Mb.getIngameIconUrl(Yb)) && void 0 !== Lb ? Lb : null;
                            else if ("particles" === ab) {
                              var Pb, Xb, Rb;
                              vb = null !== (Pb = null === Mb || void 0 === Mb ? void 0 : Mb.getParticleTextureUrl(null !== (Xb = null === (Rb = KU(Yb)) || void 0 === Rb ? void 0 : Rb.texture) && void 0 !== Xb ? Xb : Yb)) && void 0 !== Pb ? Pb : null
                            } else "skins" === ab && (vb = null !== Eb && void 0 !== Eb ? Eb : xA.test(Yb) ? `/textures/charSkins/previews/${Yb}_preview.png` : null);
                            return !vb || Bb ? (0, jb.jsx)(kb, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === ab ? "person" : "image"
                            }) : (0, jb.jsx)("img", {
                              className: Tb()("DocsTileImage", {
                                Pixelated: "skins" !== ab
                              }),
                              src: vb,
                              srcSet: vb === Eb ? `${vb} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${vb}`), eb(!0)
                              }
                            })
                          }

                          function mA(bb) {
                            let {
                              entry: ab,
                              isSong: Ub
                            } = bb;
                            const Ab = vA((bb => {
                                let {
                                  track: Ab
                                } = bb;
                                return (null === Ab || void 0 === Ab ? void 0 : Ab.name) === ab.name && Ab.isSong === Ub ? Ab.status : null
                              })),
                              Mb = null !== Ab && "paused" !== Ab;
                            return (0, jb.jsxs)("button", {
                              type: "button",
                              id: ab.anchor,
                              className: Tb()("DocsSoundTile", {
                                Playing: Mb
                              }),
                              "data-docs-track": UA(ab.name, Ub),
                              "aria-label": Mb ? `Pause ${ab.name}` : `Play ${ab.name}`,
                              onClick: () => {
                                null !== Ab ? XA() : PA(ab.name, Ub)
                              },
                              children: [(0, jb.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, jb.jsx)(kb, {
                                  name: Mb ? "pause" : "play"
                                })
                              }), (0, jb.jsx)("code", {
                                className: "DocsSoundName",
                                children: ab.name
                              }), ab.caption && (0, jb.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: ab.caption
                              })]
                            })
                          }

                          function pA(bb) {
                            let {
                              kind: ab,
                              names: Ub,
                              isSongs: Mb
                            } = bb;
                            const Eb = DA(),
                              [Yb, Bb] = Zb(),
                              eb = !1 === (null === Yb || void 0 === Yb ? void 0 : Yb.failed) ? Yb.text : null,
                              vb = (0, Ab.useContext)(yA),
                              [Lb, Pb] = (0, Ab.useState)(""),
                              Xb = Lb.trim().toLowerCase(),
                              Rb = Xb ? Ub.filter((bb => bb.name.toLowerCase().includes(Xb))) : Ub;
                            return (0, jb.jsxs)("div", {
                              className: "DocsGallery",
                              children: [Ub.length > zA && (0, jb.jsx)(DU, {
                                className: "DocsGalleryFilter",
                                value: Lb,
                                placeholder: `Filter ${Ub.length} names\u2026`,
                                label: "Filter names",
                                onChange: Pb,
                                count: Xb ? {
                                  visible: Rb.length,
                                  total: Ub.length
                                } : null
                              }), (0, jb.jsx)("div", {
                                className: Tb()("DocsGalleryGrid", `Kind-${ab}`, {
                                  Songs: Mb
                                }),
                                children: Rb.map((bb => {
                                  if ("sounds" === ab) return (0, jb.jsx)(mA, {
                                    entry: bb,
                                    isSong: Mb
                                  }, bb.anchor);
                                  if (vb && "particles" === ab && KU(bb.name)) return (0, jb.jsxs)("button", {
                                    type: "button",
                                    id: bb.anchor,
                                    className: Tb()("DocsTile Previewable", {
                                      Copied: eb === bb.name
                                    }),
                                    title: `Play "${bb.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      vb(bb.name), Bb(bb.name)
                                    },
                                    children: [(0, jb.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, jb.jsx)(fA, {
                                        kind: ab,
                                        entry: bb,
                                        assets: Eb,
                                        renderedUrl: null
                                      }), (0, jb.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, jb.jsx)(kb, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, jb.jsx)("span", {
                                      className: "DocsTileName",
                                      children: eb === bb.name ? "Copied!" : bb.name
                                    })]
                                  }, bb.anchor);
                                  const Ub = iA(ab, bb);
                                  return (0, jb.jsxs)("button", {
                                    type: "button",
                                    id: bb.anchor,
                                    className: Tb()("DocsTile", {
                                      Copied: eb === bb.name
                                    }),
                                    title: `Copy "${bb.name}"`,
                                    onClick: () => {
                                      Bb(bb.name)
                                    },
                                    children: [(0, jb.jsx)("span", {
                                      className: Tb()("DocsTilePreview", {
                                        Rendered: null !== Ub
                                      }),
                                      children: (0, jb.jsx)(fA, {
                                        kind: ab,
                                        entry: bb,
                                        assets: Eb,
                                        renderedUrl: Ub
                                      })
                                    }), (0, jb.jsx)("span", {
                                      className: "DocsTileName",
                                      children: eb === bb.name ? "Copied!" : bb.name
                                    })]
                                  }, bb.anchor)
                                }))
                              })]
                            })
                          }

                          function NA(bb) {
                            let {
                              kind: ab,
                              content: Ub,
                              blocks: Ab
                            } = bb;
                            return (0, jb.jsx)(jb.Fragment, {
                              children: GU(ab, Ub, Ab).map(((bb, Ub) => "block" === bb.kind ? (0, jb.jsx)(PU, {
                                block: bb.block
                              }, Ub) : (0, jb.jsx)(pA, {
                                kind: ab,
                                names: bb.names,
                                isSongs: bb.isSongs
                              }, Ub)))
                            })
                          }
                          const WA = [{
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

                          function HA(bb) {
                            let {
                              cards: ab = WA,
                              label: Ub = "Start here"
                            } = bb;
                            const Mb = (0, Ab.useContext)(Xa);
                            return (0, jb.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": Ub,
                              children: ab.map((bb => {
                                let {
                                  pageId: ab,
                                  countNoun: Ub
                                } = bb;
                                const Ab = rb(ab);
                                return (0, jb.jsxs)(Eb.c, {
                                  to: sb(Mb, Ab),
                                  className: "DocsLandingCard",
                                  children: [(0, jb.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, jb.jsx)(kb, {
                                      name: Ab.icon
                                    })
                                  }), (0, jb.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Ab.title
                                  }), (0, jb.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Ab.summary
                                  }), Ub && (0, jb.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [ob(Ab).sections.length, " ", Ub]
                                  })]
                                }, ab)
                              }))
                            })
                          }
                          const IA = 240;

                          function dA(bb) {
                            let {
                              faces: ab
                            } = bb;
                            return (0, jb.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, jb.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${ab.top}")`
                                }
                              }), (0, jb.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${ab.left}")`
                                }
                              }), (0, jb.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${ab.right}")`
                                }
                              })]
                            })
                          }

                          function FA(bb) {
                            let {
                              src: ab
                            } = bb;
                            const [Ub, Mb] = (0, Ab.useState)(!1);
                            return Ub ? null : (0, jb.jsx)("img", {
                              src: ab,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${ab}`), Mb(!0)
                              }
                            })
                          }

                          function hA(bb) {
                            let {
                              kind: ab
                            } = bb;
                            const Ub = ZU(ab),
                              Mb = DA(),
                              Eb = (0, Yb.v)(),
                              [Bb, eb] = (0, Ab.useState)(""),
                              [vb, Lb] = (0, Ab.useState)(null),
                              [Pb, Xb] = (0, Ab.useState)(IA),
                              [Rb, yb] = (0, Ab.useState)(null),
                              Zb = (0, Ab.useRef)(null),
                              zb = Bb.trim().toLowerCase();
                            (0, Ab.useEffect)((() => {
                              const bb = (0, mb.p)(Eb.hash),
                                Ab = Ub.entries.find((Ub => FU(ab, Ub.name) === bb));
                              if (Ab) Zb.current = Ab.name, eb(Ab.name), Lb(null), yb(Ab.name);
                              else if (null !== Zb.current) {
                                const bb = Zb.current;
                                Zb.current = null, eb((ab => ab === bb ? "" : ab)), yb(null)
                              }
                            }), [Ub, ab, Eb.hash, Eb.key]), (0, Ab.useEffect)((() => {
                              var bb;
                              null !== Rb && (null === (bb = document.getElementById(FU(ab, Rb))) || void 0 === bb || bb.scrollIntoView({
                                block: "center"
                              }))
                            }), [ab, Rb]);
                            const xb = Ub.entries.filter((bb => (!zb || bb.name.toLowerCase().includes(zb)) && (!vb || bb.variants.includes(vb))));
                            return (0, jb.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [Ub.notes.length > 0 && (0, jb.jsx)("div", {
                                className: "DocsProse",
                                children: Ub.notes.map((bb => (0, jb.jsx)("p", {
                                  children: bb
                                }, bb)))
                              }), Ub.legend.length > 0 && (0, jb.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, jb.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, jb.jsx)("thead", {
                                    children: (0, jb.jsxs)("tr", {
                                      children: [(0, jb.jsx)("th", {
                                        children: "Code"
                                      }), (0, jb.jsx)("th", {
                                        children: "Variant"
                                      }), (0, jb.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, jb.jsx)("tbody", {
                                    children: Ub.legend.map((bb => (0, jb.jsxs)("tr", {
                                      children: [(0, jb.jsx)("td", {
                                        children: (0, jb.jsx)("button", {
                                          type: "button",
                                          className: Tb()("DocsVariantChip", {
                                            Active: vb === bb.code
                                          }),
                                          "aria-pressed": vb === bb.code,
                                          title: `Show only ${ab} with ${bb.meaning} variants`,
                                          onClick: () => {
                                            Lb(vb === bb.code ? null : bb.code)
                                          },
                                          children: bb.code
                                        })
                                      }), (0, jb.jsx)("td", {
                                        children: bb.meaning
                                      }), (0, jb.jsx)("td", {
                                        children: (0, jb.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: bb.usage
                                        })
                                      })]
                                    }, bb.code)))
                                  })]
                                })
                              }), Ub.examples.length > 0 && (0, jb.jsx)(fb, {
                                lang: "text",
                                code: Ub.examples.join("\n")
                              }), (0, jb.jsx)(DU, {
                                className: "DocsFilterBar",
                                value: Bb,
                                placeholder: `Search ${Ub.entries.length} ${ab}\u2026`,
                                label: `Search ${ab}`,
                                onChange: bb => {
                                  eb(bb), Xb(IA)
                                },
                                count: zb || vb ? {
                                  visible: xb.length,
                                  total: Ub.entries.length
                                } : null,
                                children: vb && (0, jb.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Lb(null)
                                  },
                                  children: [vb, " ", (0, jb.jsx)(kb, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, jb.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: xb.slice(0, Pb).map((bb => {
                                  const Ub = "blocks" === ab ? null === Mb || void 0 === Mb ? void 0 : Mb.getBlockFaces(bb.name) : null,
                                    Ab = Mb && !Ub ? Mb.getItemTextureUrl(bb.name) : null;
                                  return (0, jb.jsxs)("div", {
                                    id: FU(ab, bb.name),
                                    className: Tb()("DocsCatalogueTile", {
                                      Linked: bb.name === Rb
                                    }),
                                    children: [(0, jb.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [Ub && (0, jb.jsx)(dA, {
                                        faces: Ub
                                      }), Ab && (0, jb.jsx)(FA, {
                                        src: Ab
                                      })]
                                    }), (0, jb.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: bb.name
                                    }), bb.variants.length > 0 && (0, jb.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: bb.variants.map((bb => (0, jb.jsx)("span", {
                                        children: bb
                                      }, bb)))
                                    }), (0, jb.jsx)(Db, {
                                      text: bb.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, bb.name)
                                }))
                              }), xb.length > Pb && (0, jb.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Xb(xb.length)
                                },
                                children: ["Show all ", xb.length]
                              }), 0 === xb.length && (0, jb.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", ab, " match."]
                              })]
                            })
                          }
                          var GA = Ub(4509),
                            QA = Ub(1505);
                          const qA = .95 * GA.d;

                          function uA(bb) {
                            return /^\s*```/.test(bb)
                          }

                          function rA(bb, ab) {
                            const Ub = [
                              []
                            ];
                            let Ab = !1;
                            for (const Mb of bb.split("\n")) !Ab && ab(Mb) && Ub.at(-1).length > 0 && Ub.push([]), uA(Mb) && (Ab = !Ab), Ub.at(-1).push(Mb);
                            return Ub.map((bb => bb.join("\n").trim())).filter(Boolean)
                          }

                          function KA(bb, ab) {
                            const Ub = `${"#".repeat(ab)} `,
                              Ab = [];
                            let Mb = !1;
                            for (const Tb of bb.split("\n")) uA(Tb) ? Mb = !Mb : !Mb && Tb.startsWith(Ub) && Ab.push(Tb.slice(Ub.length).trim());
                            return Ab
                          }

                          function oA(bb) {
                            return bb.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class lA {
                            constructor(bb, ab) {
                              this.origin = ab, this.pages = void 0, this.partPaths = new Map;
                              const Ub = bb.map((bb => {
                                const ab = ab => this.resolveLinks(bb, ab).length,
                                  Ub = function(bb, ab) {
                                    const Ub = bb.map((bb => ab(bb.markdown) + 2)),
                                      Ab = Ub.reduce(((bb, ab) => bb + ab), 0),
                                      Mb = Ab / Math.ceil(Ab / qA),
                                      Tb = [];
                                    let Eb = 0;
                                    return bb.forEach(((bb, ab) => {
                                      const Ab = Ub[ab];
                                      (0 === Tb.length || Eb + Ab > qA || Eb + Ab / 2 > Mb) && (Tb.push([]), Eb = 0), Tb.at(-1).push(bb), Eb += Ab
                                    })), Tb
                                  }(function(bb, ab) {
                                    return rA(bb, (bb => bb.startsWith("## "))).flatMap((bb => {
                                      var Ub;
                                      const Ab = null !== (Ub = KA(bb, 2)[0]) && void 0 !== Ub ? Ub : "";
                                      if (ab(bb) <= qA) return [{
                                        markdown: bb,
                                        section: Ab
                                      }];
                                      let Mb = !1,
                                        Tb = "";
                                      return rA(bb, (bb => {
                                        const ab = Mb && "" !== bb.trim();
                                        return Mb = "" === bb.trim(), ab
                                      })).map((bb => {
                                        var ab;
                                        const Ub = KA(bb, 3),
                                          Mb = bb.startsWith("### ") ? Ub[0] : Tb;
                                        return Tb = null !== (ab = Ub.at(-1)) && void 0 !== ab ? ab : Tb, {
                                          markdown: bb,
                                          section: Ab || Mb
                                        }
                                      }))
                                    }))
                                  }(oA(bb), ab), ab);
                                return {
                                  page: bb,
                                  groups: Ub.length > 1 ? Ub : []
                                }
                              }));
                              for (const {
                                  page: Ab,
                                  groups: Mb
                                }
                                of Ub) Mb.forEach(((bb, ab) => {
                                const Ub = (0, GA.x)(Ab.slug, ab);
                                for (const Mb of bb.flatMap((bb => [...KA(bb.markdown, 2), ...KA(bb.markdown, 3)]))) {
                                  const bb = `${Ab.id}#${(0,mb.r)(Mb)}`;
                                  this.partPaths.has(bb) || this.partPaths.set(bb, Ub)
                                }
                              }));
                              this.pages = Ub.map((bb => {
                                let {
                                  page: ab,
                                  groups: Ub
                                } = bb;
                                return {
                                  page: ab,
                                  path: (0, GA.v)(ab.slug),
                                  markdown: `# ${ab.title}\n\n${this.resolveLinks(ab,oA(ab))}\n`,
                                  parts: Ub.map(((bb, Ab) => this.renderPart(ab, bb, Ab, Ub.length)))
                                }
                              }))
                            }
                            url(bb) {
                              return `${this.origin}${bb}`
                            }
                            getPage(bb) {
                              return this.pages.find((ab => ab.page.id === bb))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((bb => (bb.parts.length > 0 ? bb.parts : [{
                                path: bb.path,
                                label: "",
                                markdown: bb.markdown
                              }]).filter((bb => bb.markdown.length > GA.d))))
                            }
                            markdownUrl(bb, ab) {
                              const Ub = ab && this.partPaths.get(`${bb.id}#${ab}`) || (0, GA.v)(bb.slug);
                              return this.url(ab ? `${Ub}#${ab}` : Ub)
                            }
                            resolveLinks(bb, ab) {
                              return ab.replace(/\]\((#[^)]+)\)/g, ((ab, Ub) => {
                                var Ab;
                                const Mb = null !== (Ab = tb(Ub)) && void 0 !== Ab ? Ab : this.samePageTarget(bb, Ub);
                                return Mb ? `](${this.markdownUrl(Mb.page,Mb.anchor)})` : ab
                              }))
                            }
                            samePageTarget(bb, ab) {
                              const Ub = (0, mb.r)(ab.slice(1));
                              return lb(bb, Ub) ? {
                                page: bb,
                                anchor: Ub
                              } : null
                            }
                            renderPart(bb, ab, Ub, Ab) {
                              const Mb = function(bb) {
                                  const ab = bb.map((bb => bb.section)).filter(Boolean);
                                  if (0 === ab.length) return "";
                                  const Ub = ab[0],
                                    Ab = ab.at(-1);
                                  return Ub === Ab ? Ub : `${Ub} to ${Ab}`
                                }(ab),
                                Tb = ab.map((bb => bb.markdown)).join("\n\n"),
                                Eb = Mb ? `It covers ${Mb}. ` : "",
                                Yb = `Part ${Ub+1} of ${Ab} of [${bb.title}](${this.url((0,GA.v)(bb.slug))}). ${Eb}[llms.txt](${this.url(GA.j)}) lists every part.`;
                              return {
                                path: (0, GA.x)(bb.slug, Ub),
                                label: Mb,
                                markdown: `# ${bb.title}, part ${Ub+1} of ${Ab}\n\n${Yb}\n\n${this.resolveLinks(bb,Tb)}\n`
                              }
                            }
                            llmsTxt(bb) {
                              const ab = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${tA(GA.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const Ub of ub) {
                                ab.push("", `## ${Ub.title}`, "");
                                for (const bb of Ub.pageIds) {
                                  const Ub = this.getPage(bb),
                                    {
                                      page: Ab,
                                      parts: Mb
                                    } = Ub,
                                    Tb = `About ${tA(Ub.markdown.length)} tokens${Mb.length>0?`, in ${Mb.length} parts:`:"."}`;
                                  ab.push(`- [${Ab.title}](${this.url(Ub.path)}): ${Ab.summary} ${Tb}`), Mb.forEach(((bb, Ub) => {
                                    ab.push(`  - [Part ${Ub+1}${bb.label?`: ${bb.label}`:""}](${this.url(bb.path)})`)
                                  }))
                                }
                              }
                              return ab.push("", "## Optional", "", `- [Every page in one file](${this.url(GA.f)}): About ${tA(bb.length)} tokens, for a model with a large context window.`, ""), ab.join("\n")
                            }
                            llmsFullTxt() {
                              return ub.flatMap((bb => bb.pageIds.map((bb => this.getPage(bb).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const bb = this.llmsFullTxt(),
                                ab = this.llmsTxt(bb),
                                Ub = new Map([
                                  [GA.q, ab],
                                  [GA.j, ab],
                                  [GA.f, bb]
                                ]);
                              for (const Ab of this.pages) {
                                Ub.set(Ab.path, Ab.markdown);
                                for (const bb of Ab.parts) Ub.set(bb.path, bb.markdown)
                              }
                              return Ub
                            }
                          }

                          function tA(bb) {
                            return `${Math.max(1,Math.round(bb/4e3))}K`
                          }
                          let wA = null;

                          function sA() {
                            return wA ??= new lA(qb, QA.d), wA
                          }
                          const gA = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function CA(bb) {
                            return sA().getPage(bb.id).parts.length > 0 ? `Read ${GA.n}, then the parts of the Bloxd Code API's ${bb.title} page it lists, so I can ask questions about it.` : `Read ${QA.d}${(0,GA.v)(bb.slug)} so I can ask questions about it. ${GA.n} lists every page of the Bloxd Code API docs.`
                          }

                          function VA(bb) {
                            let {
                              page: ab
                            } = bb;
                            const [Ub, Ab] = Zb();
                            return (0, jb.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, jb.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Ab(sA().getPage(ab.id).markdown)
                                },
                                children: [(0, jb.jsx)(kb, {
                                  name: !1 === (null === Ub || void 0 === Ub ? void 0 : Ub.failed) ? "check" : "copy"
                                }), (0, jb.jsx)("span", {
                                  children: Ub ? Ub.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), gA.map((bb => (0, jb.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${bb.url}${encodeURIComponent(CA(ab))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, jb.jsx)(kb, {
                                  name: "external-link"
                                }), (0, jb.jsxs)("span", {
                                  children: ["Open in ", bb.name]
                                })]
                              }, bb.name)))]
                            })
                          }

                          function OA(bb) {
                            return `#${[0,1,2].map((ab=>Math.round(Math.min(255,Math.max(0,bb[ab]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function cA(bb) {
                            return [parseInt(bb.slice(1, 3), 16), parseInt(bb.slice(3, 5), 16), parseInt(bb.slice(5, 7), 16)]
                          }

                          function JA(bb) {
                            let {
                              label: ab,
                              min: Ub,
                              max: Ab,
                              step: Mb,
                              low: Tb,
                              high: Eb,
                              onChange: Yb
                            } = bb;
                            return (0, jb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, jb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, jb.jsx)("span", {
                                  children: ab
                                }), (0, jb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Tb === Eb ? Tb : `${Tb}\u2013${Eb}`
                                })]
                              }), (0, jb.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, jb.jsx)("input", {
                                  type: "range",
                                  min: Ub,
                                  max: Ab,
                                  step: Mb,
                                  value: Math.min(Ab, Tb),
                                  "aria-label": `Minimum ${ab.toLowerCase()}`,
                                  onChange: bb => {
                                    const ab = Number(bb.target.value);
                                    Yb(ab, Math.max(ab, Eb))
                                  }
                                }), (0, jb.jsx)("input", {
                                  type: "range",
                                  min: Ub,
                                  max: Ab,
                                  step: Mb,
                                  value: Math.min(Ab, Eb),
                                  "aria-label": `Maximum ${ab.toLowerCase()}`,
                                  onChange: bb => {
                                    const ab = Number(bb.target.value);
                                    Yb(Math.min(ab, Tb), ab)
                                  }
                                })]
                              })]
                            })
                          }

                          function nA(bb) {
                            let {
                              label: ab,
                              min: Ub,
                              max: Ab,
                              step: Mb,
                              value: Tb,
                              onChange: Eb,
                              format: Yb = String
                            } = bb;
                            return (0, jb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, jb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, jb.jsx)("span", {
                                  children: ab
                                }), (0, jb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Yb(Tb)
                                })]
                              }), (0, jb.jsx)("input", {
                                type: "range",
                                min: Ub,
                                max: Ab,
                                step: Mb,
                                value: Math.min(Ab, Math.max(Ub, Tb)),
                                "aria-label": ab,
                                onChange: bb => {
                                  Eb(Number(bb.target.value))
                                }
                              })]
                            })
                          }

                          function SA(bb) {
                            let {
                              opts: ab,
                              onChange: Ub
                            } = bb;
                            const Ab = ab.colorGradients;
                            if (!wU(Ab)) return (0, jb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, jb.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, jb.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, jb.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Ab.map(((bb, ab) => (0, jb.jsx)("input", {
                                  type: "color",
                                  value: OA(bb.color),
                                  "aria-label": `Colour ${ab+1}`,
                                  onChange: bb => {
                                    const Mb = [...Ab];
                                    Mb[ab] = {
                                      color: cA(bb.target.value)
                                    }, Ub(Mb)
                                  }
                                }, ab)))
                              })]
                            });
                            const Mb = (bb, ab) => {
                              const Mb = [...Ab];
                              Mb[bb] = ab, Ub(Mb)
                            };
                            return (0, jb.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, jb.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, jb.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, jb.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Ab.map(((bb, ab) => {
                                var Ub;
                                const Ab = null !== (Ub = bb.maxColor) && void 0 !== Ub ? Ub : bb.minColor;
                                return (0, jb.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, jb.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * bb.timeFraction), "%"]
                                  }), (0, jb.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${OA(bb.minColor)}, ${OA(Ab)})`
                                    }
                                  }), (0, jb.jsx)("input", {
                                    type: "color",
                                    value: OA(bb.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*bb.timeFraction)}%`,
                                    onChange: Ub => {
                                      Mb(ab, {
                                        ...bb,
                                        minColor: [...cA(Ub.target.value), bb.minColor[3]]
                                      })
                                    }
                                  }), (0, jb.jsx)("input", {
                                    type: "color",
                                    value: OA(Ab),
                                    "aria-label": `Maximum colour at ${Math.round(100*bb.timeFraction)}%`,
                                    onChange: Ub => {
                                      Mb(ab, {
                                        ...bb,
                                        maxColor: [...cA(Ub.target.value), Ab[3]]
                                      })
                                    }
                                  })]
                                }, ab)
                              }))]
                            })
                          }
                          const bM = [-.5, -.5, -.5],
                            aM = [.5, .5, .5],
                            UM = [0, 1, 2, 3, 4, 5, 6, 7].map((bb => [1 & bb ? aM[0] : bM[0], 2 & bb ? aM[1] : bM[1], 4 & bb ? aM[2] : bM[2]]));class AM {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(bb, ab, Ub, Ab) {
                              const Mb = Math.round(31 * ab),
                                Tb = Math.round(31 * Ub),
                                Eb = Math.round(31 * Ab),
                                Yb = `${Mb}|${Tb}|${Eb}`;
                              let Bb = this.tints.get(bb);
                              (!Bb || Bb.size > 2e3) && (Bb = new Map, this.tints.set(bb, Bb));
                              let eb = Bb.get(Yb);
                              if (eb) return eb;
                              eb = document.createElement("canvas"), eb.width = bb.naturalWidth || 16, eb.height = bb.naturalHeight || 16;
                              const vb = eb.getContext("2d");
                              return vb ? (vb.imageSmoothingEnabled = !1, vb.drawImage(bb, 0, 0, eb.width, eb.height), vb.globalCompositeOperation = "multiply", vb.fillStyle = `rgb(${Mb/31*255}, ${Tb/31*255}, ${Eb/31*255})`, vb.fillRect(0, 0, eb.width, eb.height), vb.globalCompositeOperation = "destination-in", vb.drawImage(bb, 0, 0, eb.width, eb.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Bb.set(Yb, eb), eb
                            }
                          }

                          function MM(bb) {
                            let {
                              opts: ab,
                              textureUrl: Ub,
                              burst: Mb,
                              paused: Tb
                            } = bb;
                            const Eb = (0, Ab.useRef)(null),
                              Yb = (0, Ab.useRef)(ab);
                            Yb.current = ab;
                            const Bb = (0, Ab.useRef)(Tb);
                            Bb.current = Tb;
                            const eb = (0, Ab.useRef)(null),
                              vb = (0, Ab.useRef)(null),
                              Lb = (0, Ab.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(bb) {
                                let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const Ub = [-.5, -.5, -.5],
                                  Ab = [.5, .5, .5];
                                let Mb = .5;
                                for (let Tb = 0; Tb < 40; Tb++) {
                                  const Tb = gU(bb, Ub, Ab, ab),
                                    Eb = Math.max(Tb.life / 30, .001);
                                  for (; OU(Tb, bb.gravity, Eb);) Mb = Math.max(Mb, Math.hypot(Tb.pos[0], Tb.pos[1], Tb.pos[2]) + Tb.size / 2)
                                }
                                return Mb
                              }(ab)))), [ab]),
                              Pb = (0, Ab.useRef)(Lb);
                            return Pb.current = Lb, (0, Ab.useEffect)((() => {
                              if (eb.current = null, !Ub) return;
                              const bb = new Image;
                              let ab = !1;
                              return bb.onload = () => {
                                ab || (eb.current = bb)
                              }, bb.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${Ub}`)
                              }, bb.src = Ub, () => {
                                ab = !0
                              }
                            }), [Ub]), (0, Ab.useEffect)((() => {
                              var bb;
                              null === (bb = vb.current) || void 0 === bb || bb.call(vb)
                            }), [ab, Mb]), (0, Ab.useEffect)((() => {
                              const bb = Eb.current,
                                ab = null === bb || void 0 === bb ? void 0 : bb.getContext("2d");
                              if (!bb || !ab) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const Ub = new AM;
                              let Ab = [],
                                Mb = 0,
                                Tb = -.7,
                                Lb = Pb.current,
                                Xb = performance.now(),
                                jb = 0,
                                Rb = !0,
                                kb = null;
                              const yb = () => {
                                const bb = Yb.current,
                                  ab = Math.min(400, Math.max(0, Math.ceil(bb.manualEmitCount)));
                                Ab = [];
                                for (let Ub = 0; Ub < ab; Ub++) Ab.push(gU(bb, bM, aM, Math.random));
                                Mb = 0
                              };
                              vb.current = yb, yb();
                              const Zb = Eb => {
                                jb = requestAnimationFrame(Zb);
                                const vb = Math.min(.05, (Eb - Xb) / 1e3);
                                if (Xb = Eb, !Rb) return;
                                const Db = window.devicePixelRatio || 1,
                                  zb = Math.round(bb.clientWidth * Db),
                                  xb = Math.round(bb.clientHeight * Db);
                                if (0 === zb || 0 === xb) return;
                                bb.width === zb && bb.height === xb || (bb.width = zb, bb.height = xb);
                                const ib = Yb.current;
                                null === kb && (Tb += .18 * vb), Lb += (Pb.current - Lb) * Math.min(1, 4 * vb);
                                const fb = .6 * vb;
                                Ab = Ab.filter((bb => OU(bb, ib.gravity, fb))), 0 !== Ab.length || Bb.current || (Mb += vb, Mb > .6 && yb());
                                const mb = function(bb, ab, Ub, Ab) {
                                  const Mb = 3.2 * Ab,
                                    Tb = .44 * Math.min(bb, ab) * Mb / Ab,
                                    Eb = Math.cos(Ub),
                                    Yb = Math.sin(Ub),
                                    Bb = Math.cos(.42),
                                    eb = Math.sin(.42);
                                  return (Ub, Ab, vb) => {
                                    const Lb = Ub * Yb + vb * Eb,
                                      Pb = Mb - (Ab * eb + Lb * Bb);
                                    if (Pb < .05) return null;
                                    const Xb = Tb / Pb;
                                    return {
                                      x: bb / 2 + (Ub * Eb - vb * Yb) * Xb,
                                      y: ab / 2 - (Ab * Bb - Lb * eb) * Xb,
                                      scale: Xb,
                                      depth: Pb
                                    }
                                  }
                                }(zb, xb, Tb, Lb);
                                ! function(bb, ab, Ub, Ab, Mb) {
                                  const Tb = bb.createLinearGradient(0, 0, 0, Ub);
                                  Tb.addColorStop(0, "#23262d"), Tb.addColorStop(1, "#16181c"), bb.globalCompositeOperation = "source-over", bb.globalAlpha = 1, bb.fillStyle = Tb, bb.fillRect(0, 0, ab, Ub);
                                  const Eb = (ab, Ub) => {
                                      const Mb = Ab(ab[0], ab[1], ab[2]),
                                        Tb = Ab(Ub[0], Ub[1], Ub[2]);
                                      Mb && Tb && (bb.beginPath(), bb.moveTo(Mb.x, Mb.y), bb.lineTo(Tb.x, Tb.y), bb.stroke())
                                    },
                                    Yb = Math.ceil(Mb) + 1,
                                    Bb = bM[1];
                                  bb.lineWidth = 1, bb.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let eb = -Yb; eb <= Yb; eb++) Eb([eb + .5, Bb, .5 - Yb], [eb + .5, Bb, Yb + .5]), Eb([.5 - Yb, Bb, eb + .5], [Yb + .5, Bb, eb + .5]);
                                  bb.strokeStyle = "rgba(255, 255, 255, 0.28)", bb.setLineDash([4, 4]);
                                  for (const eb of UM)
                                    for (const bb of UM) {
                                      const ab = [0, 1, 2].filter((ab => eb[ab] !== bb[ab]));
                                      1 === ab.length && eb[ab[0]] < bb[ab[0]] && Eb(eb, bb)
                                    }
                                  bb.setLineDash([])
                                }(ab, zb, xb, mb, Lb);
                                const pb = eb.current,
                                  Nb = Ab.map((bb => ({
                                    particle: bb,
                                    at: mb(bb.pos[0], bb.pos[1], bb.pos[2])
                                  }))).filter((bb => null !== bb.at)).sort(((bb, ab) => ab.at.depth - bb.at.depth));
                                ab.imageSmoothingEnabled = !1;
                                for (const bb of function(bb) {
                                    switch (bb) {
                                      case rU.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case rU.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case rU.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case rU.f.MultiplyAdd:
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
                                  }(ib.blendMode)) {
                                  ab.globalCompositeOperation = bb.operation;
                                  for (const {
                                      particle: Ab,
                                      at: Mb
                                    }
                                    of Nb) {
                                    const [Tb, Eb, Yb, Bb] = VU(Ab), eb = Math.max(1, Ab.size * Mb.scale);
                                    ab.globalAlpha = bb.usesAlpha ? Math.min(1, Math.max(0, Bb)) : 1, pb ? ab.drawImage(Ub.get(pb, Tb, Eb, Yb), Mb.x - eb / 2, Mb.y - eb / 2, eb, eb) : (ab.fillStyle = `rgb(${255*Tb}, ${255*Eb}, ${255*Yb})`, ab.fillRect(Mb.x - eb / 2, Mb.y - eb / 2, eb, eb))
                                  }
                                }
                                ab.globalCompositeOperation = "source-over", ab.globalAlpha = 1
                              };
                              jb = requestAnimationFrame(Zb);
                              const Db = new IntersectionObserver((bb => {
                                let [ab] = bb;
                                Rb = ab.isIntersecting
                              }));
                              Db.observe(bb);
                              const zb = ab => {
                                  kb = ab.clientX, bb.setPointerCapture(ab.pointerId)
                                },
                                xb = bb => {
                                  null !== kb && (Tb += .01 * (bb.clientX - kb), kb = bb.clientX)
                                },
                                ib = () => {
                                  kb = null
                                };
                              return bb.addEventListener("pointerdown", zb), bb.addEventListener("pointermove", xb), bb.addEventListener("pointerup", ib), bb.addEventListener("pointercancel", ib), () => {
                                cancelAnimationFrame(jb), Db.disconnect(), vb.current = null, bb.removeEventListener("pointerdown", zb), bb.removeEventListener("pointermove", xb), bb.removeEventListener("pointerup", ib), bb.removeEventListener("pointercancel", ib)
                              }
                            }), []), (0, jb.jsx)("canvas", {
                              ref: Eb,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${ab.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const TM = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            EM = [{
                              mode: rU.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: rU.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: rU.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: rU.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: rU.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            YM = (0, Ab.forwardRef)((function(bb, ab) {
                              var Ub, Mb;
                              let {
                                textures: Eb
                              } = bb;
                              const Yb = DA(),
                                Bb = (0, Ab.useRef)(null),
                                [eb, vb] = (0, Ab.useState)(oU),
                                [Lb, Pb] = (0, Ab.useState)("example"),
                                [Xb, Rb] = (0, Ab.useState)(0),
                                [yb, Zb] = (0, Ab.useState)(!1),
                                zb = bb => {
                                  const ab = "example" === bb ? oU : KU(bb);
                                  ab && (vb(ab), Pb(bb))
                                };
                              (0, Ab.useImperativeHandle)(ab, (() => ({
                                preview: bb => {
                                  var ab;
                                  zb(bb), null === (ab = Bb.current) || void 0 === ab || ab.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const xb = bb => {
                                  vb({
                                    ...eb,
                                    ...bb
                                  }), Pb(null)
                                },
                                ib = function(bb, ab) {
                                  if (null !== ab) return `${SU}    presetId: "${ab}",\n${bA}\n})`;
                                  const Ub = bb.velocityGradients.map((bb => `        {\n            timeFraction: ${cU(bb.timeFraction)},\n            factor: ${cU(bb.factor)},\n            factor2: ${cU(bb.factor2)},\n        },`)),
                                    Ab = [`    dir1: ${JU(bb.dir1)},`, `    dir2: ${JU(bb.dir2)},`, bA, `    texture: "${bb.texture}",`, `    minLifeTime: ${cU(bb.minLifeTime)},`, `    maxLifeTime: ${cU(bb.maxLifeTime)},`, `    minEmitPower: ${cU(bb.minEmitPower)},`, `    maxEmitPower: ${cU(bb.maxEmitPower)},`, `    minSize: ${cU(bb.minSize)},`, `    maxSize: ${cU(bb.maxSize)},`, `    manualEmitCount: ${cU(bb.manualEmitCount)},`, `    gravity: ${JU(bb.gravity)},`, `    colorGradients: ${nU(bb.colorGradients,"    ")},`, `    velocityGradients: ${Ub.length>0?`[\n${Ub.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${cU(bb.blendMode)},`];
                                  return void 0 !== bb.hideDist && Ab.push(`    hideDist: ${cU(bb.hideDist)},`), `${SU}${Ab.join("\n")}\n})`
                                }(eb, null === Lb || "example" === Lb ? null : Lb),
                                mb = Eb.includes(eb.texture) ? Eb : [...Eb, eb.texture];
                              return (0, jb.jsxs)("section", {
                                ref: Bb,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, jb.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, jb.jsxs)("div", {
                                    children: [(0, jb.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, jb.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, jb.jsx)(Db, {
                                    text: ib,
                                    label: "Copy code"
                                  })]
                                }), (0, jb.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, jb.jsx)("button", {
                                    type: "button",
                                    className: Tb()("DocsVariantChip", {
                                      Active: "example" === Lb
                                    }),
                                    onClick: () => {
                                      zb("example")
                                    },
                                    children: "Example"
                                  }), TM.filter((bb => null !== KU(bb))).map((bb => (0, jb.jsx)("button", {
                                    type: "button",
                                    className: Tb()("DocsVariantChip", {
                                      Active: Lb === bb
                                    }),
                                    onClick: () => {
                                      zb(bb)
                                    },
                                    children: bb
                                  }, bb))), (0, jb.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Lb && void 0 !== Lb ? Lb : "custom",
                                    "aria-label": "Preset",
                                    onChange: bb => {
                                      zb(bb.target.value)
                                    },
                                    children: [(0, jb.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Lb && (0, jb.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), uU.d.map((bb => (0, jb.jsx)("option", {
                                      value: bb,
                                      children: bb
                                    }, bb)))]
                                  })]
                                }), (0, jb.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, jb.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, jb.jsx)(MM, {
                                      opts: eb,
                                      textureUrl: null !== (Ub = null === Yb || void 0 === Yb ? void 0 : Yb.getParticleTextureUrl(eb.texture)) && void 0 !== Ub ? Ub : null,
                                      burst: Xb,
                                      paused: yb
                                    }), (0, jb.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, jb.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Rb(Xb + 1)
                                        },
                                        children: [(0, jb.jsx)(kb, {
                                          name: "replay"
                                        }), (0, jb.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, jb.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": yb,
                                        onClick: () => {
                                          Zb(!yb)
                                        },
                                        children: [(0, jb.jsx)(kb, {
                                          name: yb ? "play" : "pause"
                                        }), (0, jb.jsx)("span", {
                                          children: yb ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, jb.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, jb.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, jb.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, jb.jsx)("span", {
                                          children: "Texture"
                                        }), (0, jb.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: eb.texture
                                        })]
                                      }), (0, jb.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: mb.map((bb => {
                                          var ab;
                                          const Ub = null !== (ab = null === Yb || void 0 === Yb ? void 0 : Yb.getParticleTextureUrl(bb)) && void 0 !== ab ? ab : null;
                                          return (0, jb.jsx)("button", {
                                            type: "button",
                                            className: Tb()("DocsParticleTexture", {
                                              Active: eb.texture === bb
                                            }),
                                            title: bb,
                                            "aria-label": bb,
                                            "aria-pressed": eb.texture === bb,
                                            onClick: () => {
                                              xb({
                                                texture: bb
                                              })
                                            },
                                            children: Ub ? (0, jb.jsx)("img", {
                                              src: Ub,
                                              alt: ""
                                            }) : (0, jb.jsx)(kb, {
                                              name: "image"
                                            })
                                          }, bb)
                                        }))
                                      })]
                                    }), (0, jb.jsx)(nA, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: eb.manualEmitCount,
                                      onChange: bb => {
                                        xb({
                                          manualEmitCount: bb
                                        })
                                      }
                                    }), (0, jb.jsx)(JA, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: eb.minLifeTime,
                                      high: eb.maxLifeTime,
                                      onChange: (bb, ab) => {
                                        xb({
                                          minLifeTime: bb,
                                          maxLifeTime: ab
                                        })
                                      }
                                    }), (0, jb.jsx)(JA, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: eb.minEmitPower,
                                      high: eb.maxEmitPower,
                                      onChange: (bb, ab) => {
                                        xb({
                                          minEmitPower: bb,
                                          maxEmitPower: ab
                                        })
                                      }
                                    }), (0, jb.jsx)(JA, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: eb.minSize,
                                      high: eb.maxSize,
                                      onChange: (bb, ab) => {
                                        xb({
                                          minSize: bb,
                                          maxSize: ab
                                        })
                                      }
                                    }), (0, jb.jsx)(nA, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Mb = eb.gravity[1]) && void 0 !== Mb ? Mb : 0,
                                      onChange: bb => {
                                        var ab, Ub;
                                        xb({
                                          gravity: [null !== (ab = eb.gravity[0]) && void 0 !== ab ? ab : 0, bb, null !== (Ub = eb.gravity[2]) && void 0 !== Ub ? Ub : 0]
                                        })
                                      }
                                    }), (0, jb.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, jb.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, jb.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, jb.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: eb.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: bb => {
                                          xb({
                                            blendMode: Number(bb.target.value)
                                          })
                                        },
                                        children: EM.map((bb => {
                                          let {
                                            mode: ab,
                                            label: Ub
                                          } = bb;
                                          return (0, jb.jsx)("option", {
                                            value: ab,
                                            children: Ub
                                          }, ab)
                                        }))
                                      })]
                                    }), (0, jb.jsx)(SA, {
                                      opts: eb,
                                      onChange: bb => {
                                        xb({
                                          colorGradients: bb
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, jb.jsx)(fb, {
                                  code: ib,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var BM = Ub(4150),
                            eM = Ub(1794);

                          function vM(bb, ab) {
                            return bb ? BM.b.includes(ab) ? bb.getIngameIconUrl(ab) : bb.getItemIconUrl(ab) : null
                          }

                          function LM(bb) {
                            var ab, Ub, Ab;
                            let {
                              part: Mb,
                              assets: Eb
                            } = bb;
                            const Yb = vM(Eb, Mb.icon),
                              Bb = null !== (ab = null === (Ub = Mb.style) || void 0 === Ub ? void 0 : Ub.fontSize) && void 0 !== ab ? ab : "1.8em",
                              eb = (0, ua.Vb)(Mb.style);
                            return (0, jb.jsxs)("span", {
                              className: Tb()("DocsBloxdTextIcon", {
                                Missing: !Yb
                              }),
                              style: {
                                width: Bb,
                                height: Bb,
                                opacity: null === (Ab = Mb.style) || void 0 === Ab ? void 0 : Ab.opacity
                              },
                              title: Yb ? void 0 : `No Bloxd icon, item or block is called "${Mb.icon}"`,
                              children: [Yb && eb && (0, jb.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: eb,
                                  maskImage: `url("${Yb}")`,
                                  WebkitMaskImage: `url("${Yb}")`
                                }
                              }), Yb ? (0, jb.jsx)("img", {
                                src: Yb,
                                alt: "",
                                className: Tb()({
                                  Tinted: eb
                                })
                              }) : (0, jb.jsx)(kb, {
                                name: "image"
                              })]
                            })
                          }

                          function PM(bb) {
                            let {
                              parts: ab,
                              className: Ub
                            } = bb;
                            const Ab = DA(),
                              Mb = [];
                            let Eb = [];
                            const Yb = bb => {
                              Eb.length > 0 && (Mb.push((0, jb.jsx)(eM.c, {
                                text: Eb
                              }, `run-${bb}`)), Eb = [])
                            };
                            return ab.forEach(((bb, ab) => {
                              "icon" !== ta(bb) || Ka(bb.icon) ? Eb.push(bb) : (Yb(ab), Mb.push((0, jb.jsx)(LM, {
                                part: bb,
                                assets: Ab
                              }, `icon-${ab}`)))
                            })), Yb(ab.length), (0, jb.jsx)("div", {
                              className: Tb()("DocsStyledTextPreview", Ub),
                              children: Mb
                            })
                          }
                          const XM = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let jM = null;

                          function RM(bb) {
                            if (jM ??= document.createElement("canvas").getContext("2d"), !jM) return "#000000";
                            jM.fillStyle = "#000000", jM.fillStyle = bb;
                            const ab = jM.fillStyle;
                            return ab.startsWith("#") ? ab : "#000000"
                          }

                          function kM(bb) {
                            let {
                              value: ab,
                              label: Ub,
                              onChange: Ab
                            } = bb;
                            return (0, jb.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, jb.jsx)("input", {
                                type: "color",
                                value: RM(ab),
                                "aria-label": `${Ub} picker`,
                                onChange: bb => {
                                  Ab(bb.target.value)
                                }
                              }), (0, jb.jsx)("input", {
                                type: "text",
                                value: ab,
                                placeholder: "#ffb914 or gold",
                                "aria-label": Ub,
                                spellCheck: !1,
                                onChange: bb => {
                                  Ab(bb.target.value)
                                }
                              })]
                            })
                          }

                          function yM(bb) {
                            let {
                              value: ab,
                              fontAwesomeIcons: Ub,
                              onChange: Mb
                            } = bb;
                            const Eb = DA(),
                              [Yb, Bb] = (0, Ab.useState)(Ka(ab) ? "fontAwesome" : "bloxd"),
                              [eb, vb] = (0, Ab.useState)(""),
                              Lb = eb.trim().toLowerCase(),
                              Pb = "bloxd" === Yb ? BM.b : Ub,
                              Xb = Lb ? Pb.filter((bb => bb.toLowerCase().includes(Lb))) : Pb;
                            return (0, jb.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, jb.jsx)("input", {
                                type: "text",
                                value: ab,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: bb => {
                                  Mb(bb.target.value)
                                }
                              }), (0, jb.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, jb.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((bb => (0, jb.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": Yb === bb,
                                    className: Tb()("DocsVariantChip", {
                                      Active: Yb === bb
                                    }),
                                    onClick: () => {
                                      Bb(bb)
                                    },
                                    children: "bloxd" === bb ? `Bloxd icons (${BM.b.length})` : `Font Awesome (${Ub.length})`
                                  }, bb))), (0, jb.jsx)("input", {
                                    type: "search",
                                    value: eb,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: bb => {
                                      vb(bb.target.value)
                                    }
                                  })
                                ]
                              }), (0, jb.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Xb.map((bb => {
                                  const Ub = "bloxd" === Yb ? vM(Eb, bb) : null;
                                  return (0, jb.jsx)("button", {
                                    type: "button",
                                    title: bb,
                                    "aria-label": bb,
                                    "aria-pressed": bb === ab,
                                    className: Tb()("DocsIconPickerOption", {
                                      Active: bb === ab
                                    }),
                                    onClick: () => {
                                      Mb(bb)
                                    },
                                    children: "fontAwesome" === Yb ? (0, jb.jsx)(zU.e, {
                                      name: bb
                                    }) : Ub ? (0, jb.jsx)("img", {
                                      src: Ub,
                                      alt: ""
                                    }) : (0, jb.jsx)(kb, {
                                      name: "image"
                                    })
                                  }, bb)
                                })), 0 === Xb.length && (0, jb.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", eb, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function ZM(bb) {
                            let {
                              property: ab,
                              value: Ub,
                              fontAwesomeIcons: Ab,
                              onChange: Mb
                            } = bb;
                            const {
                              field: Tb,
                              label: Eb
                            } = ab, Yb = bb => "" !== bb || ab.isRequired ? bb : void 0;
                            switch (Tb.kind) {
                              case "text":
                                return Tb.multiline ? (0, jb.jsx)("textarea", {
                                  value: String(null !== Ub && void 0 !== Ub ? Ub : ""),
                                  rows: 2,
                                  "aria-label": Eb,
                                  onChange: bb => {
                                    Mb(bb.target.value)
                                  }
                                }) : (0, jb.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Ub && void 0 !== Ub ? Ub : ""),
                                  "aria-label": Eb,
                                  onChange: bb => {
                                    Mb(Yb(bb.target.value))
                                  }
                                });
                              case "size":
                                return (0, jb.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Ub && void 0 !== Ub ? Ub : ""),
                                  placeholder: ab.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Eb,
                                  spellCheck: !1,
                                  onChange: bb => {
                                    Mb(Yb(bb.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, jb.jsx)(kM, {
                                  value: String(null !== Ub && void 0 !== Ub ? Ub : ""),
                                  label: Eb,
                                  onChange: bb => {
                                    Mb(Yb(bb))
                                  }
                                });
                              case "colours": {
                                const bb = Array.isArray(Ub) ? Ub : [],
                                  ab = bb => {
                                    Mb(bb.length > 0 ? bb : void 0)
                                  };
                                return (0, jb.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [bb.map(((Ub, Ab) => (0, jb.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, jb.jsx)(kM, {
                                      value: Ub,
                                      label: `${Eb} ${Ab+1}`,
                                      onChange: Ub => {
                                        ab(bb.map(((bb, ab) => ab === Ab ? Ub : bb)))
                                      }
                                    }), (0, jb.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Ab+1}`,
                                      onClick: () => {
                                        ab(bb.filter(((bb, ab) => ab !== Ab)))
                                      },
                                      children: (0, jb.jsx)(kb, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Ab))), (0, jb.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var Ub;
                                      ab([...bb, null !== (Ub = bb.at(-1)) && void 0 !== Ub ? Ub : "#ffffff"])
                                    },
                                    children: [(0, jb.jsx)(kb, {
                                      name: "plus"
                                    }), 0 === bb.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Bb;
                                const bb = "number" === typeof Ub ? Ub : Number(null !== (Bb = ab.defaultText) && void 0 !== Bb ? Bb : 0);
                                return (0, jb.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, jb.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: bb,
                                    "aria-label": Eb,
                                    onChange: bb => {
                                      Mb(Number(bb.target.value))
                                    }
                                  }), (0, jb.jsx)("output", {
                                    children: bb.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, jb.jsxs)("select", {
                                  value: String(null !== Ub && void 0 !== Ub ? Ub : ""),
                                  "aria-label": Eb,
                                  onChange: bb => {
                                    Mb(Yb(bb.target.value))
                                  },
                                  children: [!ab.isRequired && (0, jb.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", ab.defaultText, ")"]
                                  }), Tb.options.map((bb => (0, jb.jsx)("option", {
                                    value: bb,
                                    children: bb
                                  }, bb)))]
                                });
                              case "icon":
                                return (0, jb.jsx)(yM, {
                                  value: String(null !== Ub && void 0 !== Ub ? Ub : ""),
                                  fontAwesomeIcons: Ab,
                                  onChange: Mb
                                })
                            }
                          }

                          function DM(bb) {
                            let ab;
                            try {
                              ab = JSON.parse(bb)
                            } catch (Ub) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${Ub.message}`
                              }
                            }
                            return UU(ab) ? {
                              part: ab,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function zM(bb) {
                            let {
                              parts: ab,
                              index: Ub,
                              fontAwesomeIcons: Mb,
                              onChange: Tb,
                              kp: Eb,
                              onClose: Yb
                            } = bb;
                            const Bb = (0, Ab.useContext)(ja),
                              vb = (0, Ab.useRef)(null),
                              Lb = ab[Ub],
                              Pb = ta(Lb),
                              [Xb, Rb] = (0, Ab.useState)((() => JSON.stringify(Lb, null, 2))),
                              yb = (0, Ab.useMemo)((() => "other" === Pb ? DM(Xb).error : null), [Pb, Xb]);
                            (0, Ab.useEffect)((() => {
                              var bb;
                              null === (bb = vb.current) || void 0 === bb || bb.focus()
                            }), []);
                            const Zb = (0, jb.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: bb => {
                                bb.target === bb.currentTarget && Yb()
                              },
                              children: (0, jb.jsxs)("div", {
                                ref: vb,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${Ub+1}: ${oa[Pb]}`,
                                tabIndex: -1,
                                onKeyDown: bb => {
                                  "Escape" === bb.key ? (bb.stopPropagation(), Yb()) : "Tab" === bb.key && vb.current && function(bb, ab) {
                                    const Ub = Array.from(bb.querySelectorAll(Ha)),
                                      Ab = Ub[0],
                                      Mb = Ub.at(-1);
                                    if (!Ab || !Mb) return;
                                    const Tb = document.activeElement;
                                    !ab.shiftKey || Tb !== Ab && Tb !== bb ? ab.shiftKey || Tb !== Mb || (ab.preventDefault(), Ab.focus()) : (ab.preventDefault(), Mb.focus())
                                  }(vb.current, bb)
                                },
                                children: [(0, jb.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, jb.jsxs)("div", {
                                    children: [(0, jb.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", Ub + 1]
                                    }), (0, jb.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: oa[Pb]
                                    })]
                                  }), (0, jb.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: Yb,
                                    children: (0, jb.jsx)(kb, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, jb.jsx)(PM, {
                                  parts: ab,
                                  className: "DocsTextDialogPreview"
                                }), (0, jb.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Pb ? (0, jb.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, jb.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, jb.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Xb,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: bb => {
                                        Rb(bb.target.value);
                                        const ab = DM(bb.target.value);
                                        null !== ab.part && Tb(ab.part)
                                      }
                                    }), yb && (0, jb.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: yb
                                    })]
                                  }) : sa[Pb].map((bb => {
                                    const ab = Ca(Lb, bb.path),
                                      Ub = bb.isRequired ? JSON.stringify(Oa(Lb, bb.path)) === JSON.stringify(Lb) : void 0 === ab;
                                    return (0, jb.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, jb.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, jb.jsx)("span", {
                                          children: bb.label
                                        }), (0, jb.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: Ub,
                                          "aria-label": `Reset ${bb.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Tb(Oa(Lb, bb.path))
                                          },
                                          children: [(0, jb.jsx)(kb, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, jb.jsx)(ZM, {
                                        property: bb,
                                        value: ab,
                                        fontAwesomeIcons: Mb,
                                        onChange: ab => {
                                          Tb(Va(Lb, bb.path, ab))
                                        }
                                      }), !bb.isRequired && (0, jb.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", bb.defaultText]
                                      })]
                                    }, bb.path.join("."))
                                  }))
                                }), (0, jb.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, jb.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Eb,
                                    children: [(0, jb.jsx)(kb, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, jb.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: Yb,
                                    children: "Done"
                                  })]
                                }), (0, jb.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: XM.map((bb => (0, jb.jsx)("option", {
                                    value: bb
                                  }, bb)))
                                })]
                              })
                            });
                            return Bb ? (0, eb.createPortal)(Zb, Bb) : Zb
                          }
                          const xM = [{
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
                            iM = Object.keys(la);

                          function fM(bb) {
                            let {
                              fontAwesomeIcons: ab
                            } = bb;
                            const [Ub, Mb] = (0, Ab.useState)(xM[0].parts), [Eb, Yb] = (0, Ab.useState)((() => Sa(xM[0].parts))), [Bb, eb] = (0, Ab.useState)(null), [vb, Lb] = (0, Ab.useState)(!1), [Pb, Xb] = (0, Ab.useState)(null), [Rb, yb] = (0, Ab.useState)(!1), [Zb, Db] = (0, Ab.useState)(null), zb = (0, Ab.useRef)(null), xb = Sa(Ub);
                            (0, Ab.useLayoutEffect)((() => {
                              var bb;
                              if (!Zb) return;
                              const ab = bb => {
                                  var ab;
                                  return null === (ab = zb.current) || void 0 === ab ? void 0 : ab.querySelector(`[data-focus-key="${bb}"]`)
                                },
                                Ub = ab(Zb.key);
                              null === (bb = Ub && !Ub.disabled ? Ub : ab(Zb.fallback)) || void 0 === bb || bb.focus(), Db(null)
                            }), [Zb]);
                            const ib = bb => {
                                Mb(bb), Yb(Sa(bb)), eb(null)
                              },
                              mb = bb => {
                                ib(Ub.filter(((ab, Ub) => Ub !== bb))), Db({
                                  key: `edit-${Math.min(bb,Ub.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              pb = (bb, ab) => {
                                const Ab = [...Ub],
                                  [Mb] = Ab.splice(bb, 1);
                                Ab.splice(bb + ab, 0, Mb), ib(Ab);
                                Db({
                                  key: `${ab<0?"up":"down"}-${bb+ab}`,
                                  fallback: `edit-${bb+ab}`
                                })
                              };
                            return (0, jb.jsxs)("section", {
                              ref: zb,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, jb.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, jb.jsxs)("div", {
                                  children: [(0, jb.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, jb.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, jb.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: xM.map((bb => (0, jb.jsx)("button", {
                                  type: "button",
                                  className: Tb()("DocsVariantChip", {
                                    Active: xb === Sa(bb.parts)
                                  }),
                                  onClick: () => {
                                    ib(bb.parts)
                                  },
                                  children: bb.label
                                }, bb.label)))
                              }), (0, jb.jsx)(PM, {
                                parts: Ub,
                                className: "DocsTextEditorPreview"
                              }), (0, jb.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, jb.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, jb.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, jb.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [Ub.map(((bb, ab) => {
                                      const Ab = ta(bb);
                                      return (0, jb.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, jb.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${ab}`,
                                          "aria-label": `Edit part ${ab+1}, ${oa[Ab]}`,
                                          onClick: () => {
                                            Xb(ab)
                                          },
                                          children: [(0, jb.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: oa[Ab]
                                          }), (0, jb.jsx)(PM, {
                                            parts: [bb],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Ab && (0, jb.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: ca(bb)
                                          })]
                                        }), (0, jb.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, jb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${ab+1} up`,
                                            "data-focus-key": `up-${ab}`,
                                            disabled: 0 === ab,
                                            onClick: () => {
                                              pb(ab, -1)
                                            },
                                            children: (0, jb.jsx)(kb, {
                                              name: "chevron-up"
                                            })
                                          }), (0, jb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${ab+1} down`,
                                            "data-focus-key": `down-${ab}`,
                                            disabled: ab === Ub.length - 1,
                                            onClick: () => {
                                              pb(ab, 1)
                                            },
                                            children: (0, jb.jsx)(kb, {
                                              name: "chevron-down"
                                            })
                                          }), (0, jb.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${ab+1}`,
                                            onClick: () => {
                                              mb(ab)
                                            },
                                            children: (0, jb.jsx)(kb, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, ab)
                                    })), 0 === Ub.length && (0, jb.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, jb.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: bb => {
                                      "Escape" === bb.key && Rb && (bb.stopPropagation(), yb(!1), Db({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, jb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Rb,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        yb(!Rb)
                                      },
                                      children: [(0, jb.jsx)(kb, {
                                        name: "plus"
                                      }), "Add a part", (0, jb.jsx)(kb, {
                                        name: Rb ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Rb && (0, jb.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: iM.map((bb => (0, jb.jsx)("li", {
                                        children: (0, jb.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (bb => {
                                              ib([...Ub, la[bb]]), yb(!1), Xb(Ub.length)
                                            })(bb)
                                          },
                                          children: oa[bb]
                                        })
                                      }, bb)))
                                    })]
                                  })]
                                }), (0, jb.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, jb.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, jb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": vb,
                                      onClick: () => {
                                        Lb(!vb)
                                      },
                                      children: [(0, jb.jsx)(kb, {
                                        name: vb ? "check" : "pencil"
                                      }), vb ? "Done" : "Edit"]
                                    })]
                                  }), vb ? (0, jb.jsxs)(jb.Fragment, {
                                    children: [(0, jb.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Eb,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: bb => {
                                        Yb(bb.target.value);
                                        const ab = AU(bb.target.value);
                                        eb(ab.error), ab.parts && Mb(ab.parts)
                                      }
                                    }), Bb && (0, jb.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Bb
                                    })]
                                  }) : (0, jb.jsx)(fb, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${xb})`
                                  })]
                                })]
                              }), null !== Pb && Pb < Ub.length && (0, jb.jsx)(zM, {
                                parts: Ub,
                                index: Pb,
                                fontAwesomeIcons: ab,
                                onChange: bb => {
                                  ((bb, ab) => {
                                    ib(Ub.map(((Ub, Ab) => Ab === bb ? ab : Ub)))
                                  })(Pb, bb)
                                },
                                kp: () => {
                                  mb(Pb), Xb(null)
                                },
                                onClose: () => {
                                  Xb(null), Db({
                                    key: `edit-${Pb}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var mM = Ub(4536),
                            pM = Ub(4516),
                            NM = Ub(4531),
                            WM = Ub(4541);
                          const HM = 40,
                            IM = 800,
                            dM = 150,
                            FM = 8e3,
                            hM = 2e3;

                          function GM(bb, ab) {
                            return 12 * Math.log2(ab / bb)
                          }

                          function QM(bb, ab) {
                            return Math.round(bb * 2 ** (ab / 12) * 10) / 10
                          }

                          function qM(bb) {
                            return `${bb} ms`
                          }

                          function uM(bb) {
                            return `${bb} st`
                          }
                          const rM = [{
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

                          function KM(bb) {
                            let {
                              synth: ab,
                              onChange: Ub
                            } = bb;
                            const Ab = (0, mM.k)(ab);
                            return (0, jb.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, jb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, jb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, jb.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, jb.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, jb.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, jb.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: mM.e.map((bb => (0, jb.jsx)("button", {
                                      type: "button",
                                      className: Tb()("DocsVariantChip", {
                                        Active: ab.waveform === bb
                                      }),
                                      "aria-pressed": ab.waveform === bb,
                                      onClick: () => {
                                        Ub({
                                          waveform: bb
                                        })
                                      },
                                      children: bb
                                    }, bb)))
                                  })]
                                }), (0, jb.jsx)(nA, {
                                  label: "Pitch",
                                  min: 0,
                                  max: GM(HM, IM),
                                  step: .1,
                                  value: GM(HM, ab.pitchHz),
                                  format: () => `${ab.pitchHz} Hz`,
                                  onChange: bb => {
                                    Ub({
                                      pitchHz: QM(HM, bb)
                                    })
                                  }
                                }), (0, jb.jsx)(nA, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: ab.syllableMs,
                                  format: qM,
                                  onChange: bb => {
                                    Ub({
                                      syllableMs: bb
                                    })
                                  }
                                }), (0, jb.jsx)(nA, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: ab.volume,
                                  onChange: bb => {
                                    Ub({
                                      volume: bb
                                    })
                                  }
                                })]
                              }), (0, jb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, jb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, jb.jsx)(nA, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: ab.durationMs,
                                  format: qM,
                                  onChange: bb => {
                                    Ub({
                                      durationMs: bb
                                    })
                                  }
                                }), (0, jb.jsx)(nA, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Ab.durationMs,
                                  step: 1,
                                  value: Ab.attackMs,
                                  format: qM,
                                  onChange: bb => {
                                    Ub({
                                      attackMs: bb
                                    })
                                  }
                                }), (0, jb.jsx)(nA, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Ab.durationMs - Ab.attackMs,
                                  step: 1,
                                  value: Ab.releaseMs,
                                  format: qM,
                                  onChange: bb => {
                                    Ub({
                                      releaseMs: bb
                                    })
                                  }
                                }), (0, jb.jsx)(nA, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: ab.glideSemitones,
                                  format: uM,
                                  onChange: bb => {
                                    Ub({
                                      glideSemitones: bb
                                    })
                                  }
                                }), (0, jb.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, jb.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== ab.lowpassHz,
                                    onChange: bb => {
                                      Ub({
                                        lowpassHz: bb.target.checked ? hM : null
                                      })
                                    }
                                  }), (0, jb.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== ab.lowpassHz && (0, jb.jsx)(nA, {
                                  label: "Filter",
                                  min: 0,
                                  max: GM(dM, FM),
                                  step: .1,
                                  value: GM(dM, ab.lowpassHz),
                                  format: () => `${ab.lowpassHz} Hz`,
                                  onChange: bb => {
                                    Ub({
                                      lowpassHz: QM(dM, bb)
                                    })
                                  }
                                })]
                              }), (0, jb.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, jb.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), rM.map((bb => {
                                  let {
                                    key: Ab,
                                    label: Mb,
                                    max: Tb
                                  } = bb;
                                  return (0, jb.jsx)(nA, {
                                    label: Mb,
                                    min: 0,
                                    max: Tb,
                                    step: .1,
                                    value: ab.intonation[Ab],
                                    format: uM,
                                    onChange: bb => {
                                      Ub({
                                        intonation: {
                                          ...ab.intonation,
                                          [Ab]: bb
                                        }
                                      })
                                    }
                                  }, Ab)
                                }))]
                              })]
                            })
                          }
                          const oM = Object.keys(mM.i),
                            lM = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function tM(bb) {
                            var ab;
                            const Ub = JSON.stringify((0, mM.k)(bb));
                            return null !== (ab = oM.find((bb => JSON.stringify((0, mM.k)(mM.i[bb])) === Ub))) && void 0 !== ab ? ab : null
                          }

                          function wM(bb) {
                            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof bb || null === bb) return JSON.stringify(bb);
                            return `{\n${Object.entries(bb).map((bb=>{let[Ub,Ab]=bb;return`${ab}    ${Ub}: ${wM(Ab,`${ab}    `)},`})).join("\n")}\n${ab}}`
                          }

                          function sM(bb, ab, Ub) {
                            const Ab = tM(bb),
                              Mb = [`    line: ${JSON.stringify(ab)},`];
                            return Ub && Mb.push(`    speakerName: ${JSON.stringify(Ub)},`), Mb.push("    voice,"), `const voice = ${Ab?JSON.stringify(Ab):wM((0,mM.k)(bb))}\n\napi.setClientOption(playerId, "dialogue", {\n${Mb.join("\n")}\n})`
                          }
                          const gM = 400,
                            CM = 90;
                          let VM = null;

                          function OM(bb, ab, Ub) {
                            return VM ??= new AudioContext, VM.resume(), (0, WM.c)(VM, VM.destination, bb, ab, Ub, (() => {}))
                          }

                          function cM() {
                            const [bb, ab] = (0, Ab.useState)(mM.i.regular), [Ub, Mb] = (0, Ab.useState)(lM[0]), [Eb, Yb] = (0, Ab.useState)("Innkeeper"), [Bb, eb] = (0, Ab.useState)(0), vb = vA((bb => bb.volume)), Lb = (0, Ab.useRef)(null), Pb = (0, Ab.useRef)(0), Xb = (0, Ab.useRef)(0), Rb = () => {
                              var bb;
                              null === (bb = Lb.current) || void 0 === bb || bb.call(Lb), Lb.current = null
                            };
                            (0, Ab.useEffect)((() => () => {
                              var bb;
                              null === (bb = Lb.current) || void 0 === bb || bb.call(Lb), window.clearTimeout(Pb.current)
                            }), []);
                            const yb = (0, Ab.useMemo)((() => ({
                                line: Ub,
                                speakerName: Eb || void 0,
                                voice: bb
                              })), [Ub, Eb, bb]),
                              Zb = (0, Ab.useRef)(yb);
                            Zb.current = yb;
                            const zb = tM(bb),
                              xb = bb => {
                                window.clearTimeout(Pb.current), Rb();
                                const {
                                  plan: ab,
                                  synth: Ub
                                } = (0, NM.g)(bb);
                                Ub && (Lb.current = OM(Ub, ab.blips, vb)), eb((bb => bb + 1))
                              },
                              ib = sM(bb, Ub, Eb);
                            return (0, jb.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, jb.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, jb.jsxs)("div", {
                                  children: [(0, jb.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, jb.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, jb.jsx)(Db, {
                                  text: ib,
                                  label: "Copy code"
                                })]
                              }), (0, jb.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [oM.map((bb => (0, jb.jsx)("button", {
                                  type: "button",
                                  className: Tb()("DocsVariantChip", {
                                    Active: zb === bb
                                  }),
                                  "aria-pressed": zb === bb,
                                  onClick: () => {
                                    (bb => {
                                      const Ub = mM.i[bb];
                                      ab(Ub), xb({
                                        ...yb,
                                        voice: Ub
                                      })
                                    })(bb)
                                  },
                                  children: bb
                                }, bb))), !zb && (0, jb.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, jb.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, jb.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, jb.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, jb.jsx)(pM.c, {
                                      display: yb
                                    }, Bb)
                                  }), (0, jb.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: bb => {
                                      bb.preventDefault(), xb(yb)
                                    },
                                    children: [(0, jb.jsx)("input", {
                                      value: Ub,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: bb => {
                                        Mb(bb.target.value)
                                      }
                                    }), (0, jb.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, jb.jsx)(kb, {
                                        name: "play"
                                      }), (0, jb.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, jb.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: lM.map((bb => (0, jb.jsx)("button", {
                                      type: "button",
                                      className: Tb()("DocsVariantChip", {
                                        Active: Ub === bb
                                      }),
                                      onClick: () => {
                                        var ab;
                                        Mb(ab = bb), xb({
                                          ...yb,
                                          line: ab
                                        })
                                      },
                                      children: bb
                                    }, bb)))
                                  }), (0, jb.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, jb.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, jb.jsx)("input", {
                                      value: Eb,
                                      placeholder: "No name",
                                      onChange: bb => {
                                        Yb(bb.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, jb.jsx)(KM, {
                                  synth: bb,
                                  onChange: Ub => {
                                    const Ab = {
                                      ...bb,
                                      ...Ub
                                    };
                                    ab(Ab);
                                    const Mb = {
                                        ...yb,
                                        voice: Ab
                                      },
                                      Tb = performance.now();
                                    if (Tb - Xb.current >= CM) {
                                      Xb.current = Tb, Rb();
                                      const bb = (0, NM.g)(Mb).plan.blips[0];
                                      bb && (Lb.current = OM((0, mM.k)(Ab), [{
                                        ...bb,
                                        atMs: 0
                                      }], vb))
                                    }
                                    window.clearTimeout(Pb.current), Pb.current = window.setTimeout((() => {
                                      xb(Zb.current)
                                    }), gM)
                                  }
                                })]
                              }), (0, jb.jsx)(fb, {
                                code: ib,
                                lang: "ts"
                              })]
                            })
                          }
                          var JM = Ub(4553);
                          const nM = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            SM = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            bT = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${SM}`, "g"), JM.l],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, JM.l]
                            ];

                          function aT(bb) {
                            return `${bb.pageId}#${bb.anchor}`
                          }
                          let UT, AT, MT;

                          function TT(bb) {
                            const ab = (0, mb.i)(bb),
                              Ub = new Set;
                            for (const [, , Ab] of ab.matchAll(mb.b)) {
                              const bb = Ab.startsWith("#") ? tb(Ab) : null,
                                ab = bb ? aT({
                                  pageId: bb.page.id,
                                  anchor: bb.anchor
                                }) : null;
                              null !== ab && (UT || (UT = new Set(qb.flatMap((bb => Hb(bb.layout) ? ob(bb).sections.map((ab => aT({
                                pageId: bb.id,
                                anchor: ab.heading.anchor
                              }))) : [])))), UT).has(ab) && Ub.add(ab)
                            }
                            for (const [, , Ab] of ab.matchAll(nM)) {
                              const bb = Pa(Ab);
                              bb && Ub.add(aT(bb))
                            }
                            return Ub
                          }

                          function ET(bb, ab) {
                            const Ub = new Set,
                              Ab = function(bb) {
                                return bb.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(bb);
                            for (const [, Mb] of Ab.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) Ub.add(Mb);
                            for (const [Mb, Tb] of bT)
                              for (const [, bb] of(0, JM.f)(Ab, Mb, Tb)) ab.has(bb) && Ub.add(bb);
                            return Ub
                          }

                          function YT(bb, ab, Ub, Ab) {
                            const Mb = bb.get(ab);
                            Mb ? !Ab && Mb.some((bb => bb.pageId === Ub.pageId)) || Mb.push(Ub) : bb.set(ab, [Ub])
                          }
                          const BT = /^[A-Za-z_$][\w$]*$/;

                          function eT(bb) {
                            return BT.test(bb.name) ? bb.name : "options"
                          }

                          function vT(bb, ab) {
                            const Ub = bb.params.map(eT).join(", ");
                            return ab ? `${bb.name} = (${Ub}) => {\n\t\n}` : `api.${bb.name}(${Ub})`
                          }

                          function LT(bb) {
                            let {
                              method: ab,
                              isCallback: Ub
                            } = bb;
                            return (0, jb.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, jb.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [Ub ? (0, jb.jsxs)(jb.Fragment, {
                                  children: [(0, jb.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: ab.name
                                  }), (0, jb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, jb.jsxs)(jb.Fragment, {
                                  children: [(0, jb.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, jb.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: ab.name
                                  }), (0, jb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), ab.params.map(((bb, Ub) => (0, jb.jsxs)(Ab.Fragment, {
                                  children: [Ub > 0 && (0, jb.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, jb.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${ab.name}-${eT(bb)}`,
                                    children: bb.name
                                  })]
                                }, bb.name))), (0, jb.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: Ub ? ") => " : ")"
                                }), Ub && !ab.returns && (0, jb.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), ab.returns && ab.returns.type && (0, jb.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!Ub && (0, jb.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, jb.jsx)(pa, {
                                  type: ab.returns.type
                                })]
                              })]
                            })
                          }

                          function PT(bb) {
                            let {
                              title: ab,
                              references: Ub
                            } = bb;
                            const Mb = (0, Ab.useContext)(Xa);
                            return (0, jb.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, jb.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: ab
                              }), Ub.map((bb => (0, jb.jsx)(Eb.c, {
                                to: sb(Mb, rb(bb.pageId), bb.anchor),
                                children: bb.label
                              }, `${bb.pageId}#${bb.anchor}`)))]
                            })
                          }

                          function XT(bb) {
                            var ab, Ub;
                            let {
                              pageId: Ab,
                              anchor: Mb
                            } = bb;
                            const Tb = aT({
                                pageId: Ab,
                                anchor: Mb
                              }),
                              Eb = null !== (ab = function() {
                                if (!MT) {
                                  MT = new Map;
                                  const Ab = new Set(qb.filter((bb => "callbacks" === bb.layout)).flatMap((bb => ob(bb).sections.map((bb => bb.heading.text)))));
                                  for (const Mb of qb)
                                    if ("article" === Mb.layout || "snippets" === Mb.layout)
                                      for (const Tb of (0, mb.u)(ob(Mb)))
                                        for (const {
                                            code: Eb
                                          }
                                          of(0, mb.m)(Tb.blocks))
                                          for (const Yb of ET(Eb, Ab)) {
                                            const Ab = La().get(Yb);
                                            if (Ab) {
                                              var bb, ab, Ub;
                                              const Eb = {
                                                pageId: Mb.id,
                                                anchor: null !== (bb = null === (ab = Tb.heading) || void 0 === ab ? void 0 : ab.anchor) && void 0 !== bb ? bb : "",
                                                label: null !== (Ub = Mb.navTitle) && void 0 !== Ub ? Ub : Mb.title
                                              };
                                              YT(MT, aT(Ab), Eb, !1)
                                            }
                                          }
                                }
                                return MT
                              }().get(Tb)) && void 0 !== ab ? ab : [],
                              Yb = null !== (Ub = function() {
                                if (!AT) {
                                  AT = new Map;
                                  const bb = rb("changelog");
                                  for (const ab of ob(bb).sections) {
                                    const Ub = new Set(ab.blocks.flatMap((bb => [...TT(bb)])));
                                    for (const Ab of Ub) {
                                      const Ub = {
                                        pageId: bb.id,
                                        anchor: ab.heading.anchor,
                                        label: ab.heading.text
                                      };
                                      YT(AT, Ab, Ub, !0)
                                    }
                                  }
                                }
                                return AT
                              }().get(Tb)) && void 0 !== Ub ? Ub : [];
                            return 0 === Eb.length && 0 === Yb.length ? null : (0, jb.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Eb.length > 0 && (0, jb.jsx)(PT, {
                                title: "Used in",
                                references: Eb
                              }), Yb.length > 0 && (0, jb.jsx)(PT, {
                                title: "Changelog",
                                references: Yb
                              })]
                            })
                          }

                          function jT(bb) {
                            let {
                              method: ab,
                              pageId: Ub,
                              anchor: Ab,
                              isCallback: Mb
                            } = bb;
                            const Tb = Mb ? void 0 : Ya().get(ab.name),
                              Eb = ab.description.length > 0 || null === Tb || void 0 === Tb || !Tb.description ? ab.description : (0, mb.z)(Tb.description);
                            return (0, jb.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, jb.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, jb.jsx)(eU, {
                                  level: 2,
                                  text: ab.name,
                                  anchor: Ab,
                                  className: "DocsCardTitle"
                                }), (0, jb.jsx)(Db, {
                                  text: vT(ab, Mb),
                                  label: Mb ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, jb.jsx)(LT, {
                                method: ab,
                                isCallback: Mb
                              }), Tb && null !== Tb.deprecation && (0, jb.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, jb.jsx)("strong", {
                                  children: "Deprecated"
                                }), Tb.deprecation && (0, jb.jsxs)(jb.Fragment, {
                                  children: [": ", (0, jb.jsx)(ia, {
                                    text: (Yb = Tb.deprecation, (0, JM.s)(Yb, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, JM.h)("`\\w"), (bb => {
                                      let [ab] = bb;
                                      return La().has(ab) ? `\`${ab}\`` : ab
                                    })))
                                  })]
                                })]
                              }), Eb.length > 0 && (0, jb.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, jb.jsx)(XU, {
                                  blocks: Eb
                                })
                              }), ab.params.length > 0 && (0, jb.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, jb.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, jb.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: ab.params.map((bb => (0, jb.jsxs)("div", {
                                    id: `${ab.name}-${eT(bb)}`,
                                    className: "DocsParam",
                                    children: [(0, jb.jsxs)("dt", {
                                      children: [(0, jb.jsx)("code", {
                                        className: "DocsParamName",
                                        children: bb.name
                                      }), (0, jb.jsx)(pa, {
                                        type: bb.type
                                      })]
                                    }), bb.description && (0, jb.jsx)("dd", {
                                      children: (0, jb.jsx)(ia, {
                                        text: bb.description
                                      })
                                    })]
                                  }, bb.name)))
                                })]
                              }), ab.returns && (ab.returns.type || ab.returns.description.length > 0) && (0, jb.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, jb.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, jb.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [ab.returns.type && (0, jb.jsx)(pa, {
                                    type: ab.returns.type
                                  }), ab.returns.description.length > 0 && (0, jb.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, jb.jsx)(XU, {
                                      blocks: ab.returns.description
                                    })
                                  })]
                                })]
                              }), (0, jb.jsx)(XT, {
                                pageId: Ub,
                                anchor: Ab
                              })]
                            });
                            var Yb
                          }

                          function RT(bb) {
                            var ab;
                            return null !== bb.defaultValue && "undefined" !== bb.defaultValue ? bb.defaultValue : null !== (ab = bb.example) && void 0 !== ab ? ab : "value"
                          }

                          function kT(bb) {
                            let {
                              setting: ab,
                              pageId: Ub,
                              anchor: Ab,
                              setterSnippet: Mb
                            } = bb;
                            const Tb = null === ab.defaultValue ? null : ya(ab.defaultValue);
                            return (0, jb.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, jb.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, jb.jsx)(eU, {
                                  level: 2,
                                  text: ab.name,
                                  anchor: Ab,
                                  className: "DocsCardTitle"
                                }), (0, jb.jsx)(Db, {
                                  text: Mb(ab.name, RT(ab)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, jb.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, jb.jsxs)("div", {
                                  children: [(0, jb.jsx)("dt", {
                                    children: "Type"
                                  }), (0, jb.jsx)("dd", {
                                    children: (0, jb.jsx)(pa, {
                                      type: ab.type
                                    })
                                  })]
                                }), null !== ab.defaultValue && (0, jb.jsxs)("div", {
                                  children: [(0, jb.jsx)("dt", {
                                    children: "Default"
                                  }), (0, jb.jsx)("dd", {
                                    children: (0, jb.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Tb && (0, jb.jsx)(Za, {
                                        colour: Tb
                                      }), ab.defaultValue]
                                    })
                                  })]
                                }), null !== ab.example && (0, jb.jsxs)("div", {
                                  children: [(0, jb.jsx)("dt", {
                                    children: "Example"
                                  }), (0, jb.jsx)("dd", {
                                    children: (0, jb.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: ab.example
                                    })
                                  })]
                                })]
                              }), ab.description.length > 0 && (0, jb.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, jb.jsx)(XU, {
                                  blocks: ab.description
                                })
                              }), (0, jb.jsx)(XT, {
                                pageId: Ub,
                                anchor: Ab
                              })]
                            })
                          }

                          function yT(bb) {
                            let {
                              section: ab
                            } = bb;
                            return (0, jb.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, jb.jsx)(eU, {
                                level: 2,
                                text: ab.heading.text,
                                anchor: ab.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, jb.jsx)("div", {
                                className: "DocsProse",
                                children: (0, jb.jsx)(XU, {
                                  blocks: ab.blocks
                                })
                              })]
                            })
                          }

                          function ZT(bb) {
                            let {
                              section: ab
                            } = bb;
                            return (0, jb.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, jb.jsx)(eU, {
                                level: ab.heading.level,
                                text: ab.heading.text,
                                anchor: ab.heading.anchor
                              }), (0, jb.jsx)(XU, {
                                blocks: ab.blocks
                              })]
                            })
                          }
                          const DT = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function zT(bb) {
                            let {
                              page: ab,
                              section: Ub
                            } = bb;
                            if ("methods" === ab.layout || "callbacks" === ab.layout) return (0, jb.jsx)(jT, {
                              method: fU(Ub),
                              pageId: ab.id,
                              anchor: Ub.heading.anchor,
                              isCallback: "callbacks" === ab.layout
                            });
                            if ("settings" === ab.layout) {
                              const bb = function(bb) {
                                const ab = {
                                  name: bb.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Ab of bb.blocks) {
                                  var Ub;
                                  if (iU(Ab)) continue;
                                  const bb = "paragraph" === Ab.kind ? Ab.text.match(mU) : null;
                                  if (!bb) {
                                    ab.description.push(Ab);
                                    continue
                                  }
                                  const Mb = null !== (Ub = xU(bb[2])) && void 0 !== Ub ? Ub : bb[2];
                                  "Type" === bb[1] ? ab.type = Mb : "Default" === bb[1] ? ab.defaultValue = Mb : "" !== Mb && (ab.example = Mb)
                                }
                                return ab.type ? ab : null
                              }(Ub);
                              if (bb) return (0, jb.jsx)(kT, {
                                setting: bb,
                                pageId: ab.id,
                                anchor: Ub.heading.anchor,
                                setterSnippet: ab.setterSnippet
                              })
                            }
                            return "snippets" === ab.layout ? (0, jb.jsx)(yT, {
                              section: Ub
                            }) : "changelog" === ab.layout ? (0, jb.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, jb.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, jb.jsx)(eU, {
                                  level: 2,
                                  text: Ub.heading.text,
                                  anchor: Ub.heading.anchor
                                })
                              }), (0, jb.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, jb.jsx)(XU, {
                                  blocks: pU(Ub.blocks)
                                })
                              })]
                            }) : ab.gallery ? (0, jb.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, jb.jsx)(eU, {
                                level: Ub.heading.level,
                                text: Ub.heading.text,
                                anchor: Ub.heading.anchor
                              }), (0, jb.jsx)(NA, {
                                kind: ab.gallery,
                                content: ob(ab),
                                blocks: Ub.blocks
                              })]
                            }) : (0, jb.jsx)(ZT, {
                              section: Ub
                            })
                          }

                          function xT(bb) {
                            let {
                              page: ab,
                              onTocChange: Ub
                            } = bb;
                            const Mb = ob(ab),
                              [Tb, Eb] = (0, Ab.useState)(""),
                              Yb = "article" !== ab.layout,
                              Bb = kU(ab.gallery) ? ab.gallery : null,
                              eb = null !== Bb,
                              vb = Tb.trim().toLowerCase(),
                              Lb = (0, Ab.useRef)(null),
                              Pb = (0, Ab.useCallback)((bb => {
                                var ab;
                                null === (ab = Lb.current) || void 0 === ab || ab.preview(bb)
                              }), []),
                              Xb = (0, Ab.useMemo)((() => {
                                if (!ab.hasParticlePlayground) return [];
                                const bb = IU(Mb.intro).find((bb => "names" === bb.kind && !bb.names.some((bb => null !== KU(bb.name)))));
                                return "names" === (null === bb || void 0 === bb ? void 0 : bb.kind) ? bb.names.map((bb => bb.name)) : []
                              }), [ab, Mb]),
                              Rb = (0, Ab.useMemo)((() => {
                                if (!ab.hasTextPlayground) return [];
                                const bb = Mb.sections.flatMap((bb => bb.blocks.flatMap((bb => {
                                  var ab;
                                  return (null !== (ab = HU(bb)) && void 0 !== ab ? ab : []).flatMap((bb => Ka(bb.name) ? [bb.name] : []))
                                }))));
                                return [...new Set(bb)]
                              }), [ab, Mb]),
                              kb = (0, Ab.useMemo)((() => vb ? Mb.sections.filter((bb => function(bb, ab) {
                                return !!bb.heading.text.toLowerCase().includes(ab) || bb.blocks.some((bb => (0, mb.i)(bb).toLowerCase().includes(ab)))
                              }(bb, vb))) : Mb.sections), [Mb, vb]),
                              yb = (0, Ab.useMemo)((() => function(bb, ab) {
                                return "article" !== bb.layout ? ab.map((bb => ({
                                  anchor: bb.heading.anchor,
                                  text: bb.heading.text,
                                  level: 2
                                }))) : ab.flatMap((bb => {
                                  const ab = bb.blocks.flatMap((bb => "heading" === bb.kind && 3 === bb.level ? [{
                                    anchor: bb.anchor,
                                    text: bb.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: bb.heading.anchor,
                                    text: bb.heading.text,
                                    level: 2
                                  }, ...ab]
                                }))
                              }(ab, kb)), [ab, kb]);
                            return (0, Ab.useEffect)((() => {
                              Ub(yb)
                            }), [yb, Ub]), (0, jb.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, jb.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, jb.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Mb.title || ab.title
                                }), (0, jb.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: ab.summary
                                }), (0, jb.jsx)(VA, {
                                  page: ab
                                }), Yb && (0, jb.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, jb.jsxs)("span", {
                                    children: [(0, jb.jsx)("strong", {
                                      children: Mb.sections.length
                                    }), " ", DT[ab.layout]]
                                  })
                                })]
                              }), "" === ab.slug && (0, jb.jsx)(HA, {}), Bb && (0, jb.jsx)(hA, {
                                kind: Bb
                              }, Bb), ab.hasParticlePlayground && (0, jb.jsx)(YM, {
                                ref: Lb,
                                textures: Xb
                              }), !eb && Mb.intro.length > 0 && (0, jb.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: ab.gallery ? (0, jb.jsx)(yA.Provider, {
                                  value: ab.hasParticlePlayground ? Pb : null,
                                  children: (0, jb.jsx)(NA, {
                                    kind: ab.gallery,
                                    content: Mb,
                                    blocks: Mb.intro
                                  })
                                }) : (0, jb.jsx)(XU, {
                                  blocks: pU(Mb.intro)
                                })
                              }), ab.hasTextPlayground && (0, jb.jsx)(fM, {
                                fontAwesomeIcons: Rb
                              }), ab.hasVoicePlayground && (0, jb.jsx)(cM, {}), ab.childPageIds && (0, jb.jsx)(HA, {
                                cards: ab.childPageIds.map((bb => ({
                                  pageId: bb
                                }))),
                                label: ab.title
                              }), Yb && (0, jb.jsx)(DU, {
                                className: "DocsFilterBar",
                                value: Tb,
                                placeholder: `Filter ${Mb.sections.length} ${DT[ab.layout]}\u2026`,
                                label: `Filter ${DT[ab.layout]}`,
                                onChange: Eb,
                                count: vb ? {
                                  visible: kb.length,
                                  total: Mb.sections.length
                                } : null
                              }), !eb && (0, jb.jsxs)("div", {
                                className: `DocsSections Layout-${ab.layout}`,
                                children: [kb.map((bb => (0, jb.jsx)(zT, {
                                  page: ab,
                                  section: bb
                                }, bb.heading.anchor))), 0 === kb.length && (0, jb.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", DT[ab.layout], " match \u201c", Tb, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const iT = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function fT(bb) {
                            let {
                              entry: ab,
                              isActive: Ub,
                              onNavigate: Ab,
                              label: Mb,
                              children: Eb
                            } = bb;
                            return (0, jb.jsx)("a", {
                              href: `#${ab.anchor}`,
                              "aria-label": Mb,
                              className: Tb()(`Level${ab.level}`, {
                                Active: Ub
                              }),
                              "aria-current": Ub ? "location" : void 0,
                              onClick: bb => {
                                bb.preventDefault(), Ab(ab.anchor)
                              },
                              children: Eb
                            })
                          }

                          function mT(bb) {
                            let {
                              toc: ab,
                              activeAnchor: Ub,
                              onNavigate: Mb
                            } = bb;
                            const Eb = Math.max(0, ab.findIndex((bb => bb.anchor === Ub))),
                              Yb = (0, Ab.useRef)(null),
                              Bb = (0, Ab.useRef)(!1);
                            (0, Ab.useEffect)((() => {
                              var bb, Ub;
                              const Ab = null === (bb = Yb.current) || void 0 === bb ? void 0 : bb.closest(".DocsToc"),
                                Mb = null === (Ub = Yb.current) || void 0 === Ub ? void 0 : Ub.querySelector(".DocsTimelineNotch.Active");
                              if (!Ab || !Mb) return;
                              let Tb = 0;
                              if (Eb === ab.length - 1) Tb = Ab.scrollHeight;
                              else if (Eb > 0) {
                                const bb = Ab.getBoundingClientRect(),
                                  ab = Mb.getBoundingClientRect();
                                Tb = Ab.scrollTop + ab.top + ab.height / 2 - (bb.top + Ab.clientHeight / 2)
                              }
                              Ab.scrollTo({
                                top: Tb,
                                behavior: Bb.current ? "smooth" : "auto"
                              }), Bb.current = !0
                            }), [Eb, ab.length]);
                            const eb = [];
                            return ab.forEach(((bb, ab) => {
                              var Ub, Ab, Mb;
                              const Tb = function(bb) {
                                  const ab = bb.trim().match(iT);
                                  return ab ? {
                                    day: ab[1],
                                    month: `${ab[2]} ${ab[3]}`
                                  } : null
                                }(bb.text),
                                Eb = null !== (Ub = null === Tb || void 0 === Tb ? void 0 : Tb.month) && void 0 !== Ub ? Ub : null;
                              null !== Eb && (null === (Ab = eb.at(-1)) || void 0 === Ab ? void 0 : Ab.month) === Eb || eb.push({
                                month: Eb,
                                entries: []
                              }), eb.at(-1).entries.push({
                                entry: bb,
                                day: null !== (Mb = null === Tb || void 0 === Tb ? void 0 : Tb.day) && void 0 !== Mb ? Mb : null,
                                index: ab
                              })
                            })), (0, jb.jsx)("ol", {
                              ref: Yb,
                              className: "DocsTimeline",
                              children: eb.map((bb => {
                                let {
                                  month: ab,
                                  entries: Ub
                                } = bb;
                                return (0, jb.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [ab && (0, jb.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: ab
                                  }), (0, jb.jsx)("ol", {
                                    children: Ub.map((bb => {
                                      let {
                                        entry: ab,
                                        day: Ub,
                                        index: Ab
                                      } = bb;
                                      return (0, jb.jsx)("li", {
                                        className: Tb()("DocsTimelineNotch", {
                                          Passed: Ab < Eb,
                                          Active: Ab === Eb
                                        }),
                                        children: (0, jb.jsx)(fT, {
                                          entry: ab,
                                          isActive: Ab === Eb,
                                          onNavigate: Mb,
                                          label: ab.text,
                                          children: (0, jb.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== Ub && void 0 !== Ub ? Ub : ab.text
                                          })
                                        })
                                      }, ab.anchor)
                                    }))
                                  })]
                                }, Ub[0].entry.anchor)
                              }))
                            })
                          }

                          function pT(bb) {
                            let {
                              isChangelog: ab,
                              toc: Ub,
                              activeAnchor: Ab,
                              onNavigate: Mb
                            } = bb;
                            return 0 === Ub.length ? null : (0, jb.jsxs)(jb.Fragment, {
                              children: [(0, jb.jsx)("div", {
                                className: "DocsTocTitle",
                                children: ab ? "Updates" : "On this page"
                              }), ab ? (0, jb.jsx)(mT, {
                                toc: Ub,
                                activeAnchor: Ab,
                                onNavigate: Mb
                              }) : (0, jb.jsx)("ul", {
                                children: Ub.map((bb => (0, jb.jsx)("li", {
                                  children: (0, jb.jsx)(fT, {
                                    entry: bb,
                                    isActive: bb.anchor === Ab,
                                    onNavigate: Mb,
                                    children: bb.text.replace(/`/g, "")
                                  })
                                }, bb.anchor)))
                              })]
                            })
                          }
                          const NT = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            WT = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            HT = 20,
                            IT = 10,
                            dT = 40,
                            FT = 120;
                          let hT;

                          function GT(bb) {
                            const ab = bb.gallery;
                            if (!ab) return [];
                            if (kU(ab)) return function(bb) {
                              return ZU(bb).entries.map((bb => bb.name))
                            }(ab).map((Ub => ({
                              page: bb,
                              anchor: FU(ab, Ub),
                              title: Ub,
                              kind: WT[ab],
                              text: "",
                              listedUnder: bb.title
                            })));
                            const Ub = ob(bb);
                            return (0, mb.u)(Ub).flatMap((Ab => {
                              const Mb = Ab.heading ? `${bb.title} \u203a ${Ab.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : bb.title;
                              return GU(ab, Ub, Ab.blocks).flatMap((Ub => "names" !== Ub.kind ? [] : Ub.names.map((Ab => {
                                const Tb = Ub.isSongs ? "Song" : WT[ab];
                                return {
                                  page: bb,
                                  anchor: Ab.anchor,
                                  title: Ab.name,
                                  kind: Tb,
                                  text: "",
                                  listedUnder: Mb
                                }
                              }))))
                            }))
                          }

                          function QT(bb, ab, Ub) {
                            const Ab = bb.title.toLowerCase();
                            let Mb = 0;
                            if (Ab === ab) Mb = 100;
                            else if (Ab.startsWith(ab)) Mb = 80;
                            else if (Ab.includes(ab)) Mb = 60;
                            else if (Ub.every((bb => Ab.includes(bb)))) Mb = 45;
                            else {
                              if (!bb.text.toLowerCase().includes(ab)) return 0;
                              Mb = 20
                            }
                            return Mb - Math.min(Ab.length / 10, 9) + ("Page" === bb.kind ? 8 : "Method" === bb.kind ? 3 : 0) - (bb.listedUnder ? HT : 0)
                          }

                          function qT(bb, ab) {
                            const Ub = bb.toLowerCase().indexOf(ab),
                              Ab = Math.max(0, Ub - FT / 3);
                            return `${Ab>0?"\u2026":""}${bb.slice(Ab,Ab+FT)}${Ab+FT<bb.length?"\u2026":""}`
                          }

                          function uT(bb) {
                            let {
                              text: ab,
                              query: Ub
                            } = bb;
                            const Ab = Ub ? ab.toLowerCase().indexOf(Ub) : -1;
                            return -1 === Ab ? (0, jb.jsx)(jb.Fragment, {
                              children: ab
                            }) : (0, jb.jsxs)(jb.Fragment, {
                              children: [ab.slice(0, Ab), (0, jb.jsx)("mark", {
                                children: ab.slice(Ab, Ab + Ub.length)
                              }), ab.slice(Ab + Ub.length)]
                            })
                          }

                          function rT(bb) {
                            let {
                              basePath: ab,
                              onClose: Ub
                            } = bb;
                            const Mb = (0, Yb.x)(),
                              [Eb, Bb] = (0, Ab.useState)(""),
                              [eb, vb] = (0, Ab.useState)(0),
                              Lb = (0, Ab.useRef)(null),
                              Pb = (0, Ab.useRef)(null),
                              Xb = Eb.trim().toLowerCase(),
                              Rb = (0, Ab.useMemo)((() => {
                                const bb = (hT || (hT = qb.flatMap((bb => {
                                  const ab = ob(bb);
                                  return [{
                                    page: bb,
                                    anchor: "",
                                    title: bb.title,
                                    kind: "Page",
                                    text: bb.summary
                                  }, ...ab.sections.flatMap((ab => {
                                    const Ub = ab.blocks.filter((bb => "paragraph" === bb.kind)).map(mb.i).join(" ").replace(/[`*]/g, ""),
                                      Ab = {
                                        page: bb,
                                        anchor: ab.heading.anchor,
                                        title: ab.heading.text.replace(/`/g, ""),
                                        kind: NT[bb.layout],
                                        text: Ub
                                      },
                                      Mb = ab.blocks.flatMap((ab => "article" === bb.layout && "heading" === ab.kind && 3 === ab.level ? [{
                                        page: bb,
                                        anchor: ab.anchor,
                                        title: ab.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Ab.title
                                      }] : []));
                                    return [Ab, ...Mb]
                                  })), ...GT(bb)]
                                }))), hT);
                                if (!Xb) return bb.filter((bb => "Page" === bb.kind));
                                const ab = Xb.split(/\s+/);
                                let Ub = 0;
                                return bb.map((bb => ({
                                  entry: bb,
                                  score: QT(bb, Xb, ab)
                                }))).filter((bb => bb.score > 0)).sort(((bb, ab) => ab.score - bb.score)).filter((bb => !bb.entry.listedUnder || (Ub++, Ub <= IT))).slice(0, dT).map((bb => bb.entry))
                              }), [Xb]);
                            (0, Ab.useEffect)((() => {
                              vb(0)
                            }), [Xb]), (0, Ab.useEffect)((() => {
                              const bb = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === bb || void 0 === bb || bb.focus()
                              }
                            }), []), (0, Ab.useEffect)((() => {
                              var bb, ab;
                              null === (bb = Lb.current) || void 0 === bb || null === (ab = bb.querySelector(".Active")) || void 0 === ab || ab.scrollIntoView({
                                block: "nearest"
                              })
                            }), [eb]);
                            const yb = bb => {
                              Mb(sb(ab, bb.page, bb.anchor)), Ub()
                            };
                            return (0, jb.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: bb => {
                                bb.target === bb.currentTarget && Ub()
                              },
                              children: (0, jb.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: bb => {
                                  bb.target !== Pb.current && bb.preventDefault()
                                },
                                onKeyDown: bb => {
                                  if ("Escape" === bb.key) Ub();
                                  else if ("Tab" === bb.key) {
                                    var ab;
                                    bb.preventDefault(), null === (ab = Pb.current) || void 0 === ab || ab.focus()
                                  }
                                },
                                children: [(0, jb.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, jb.jsx)(kb, {
                                    name: "magnifying-glass"
                                  }), (0, jb.jsx)("input", {
                                    ref: Pb,
                                    autoFocus: !0,
                                    value: Eb,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Rb.length > 0 ? `DocsSearchResult-${eb}` : void 0,
                                    onChange: bb => {
                                      Bb(bb.target.value)
                                    },
                                    onKeyDown: bb => {
                                      if ("ArrowDown" === bb.key || "ArrowUp" === bb.key) {
                                        bb.preventDefault();
                                        const ab = "ArrowDown" === bb.key ? 1 : -1;
                                        vb((eb + ab + Rb.length) % Math.max(Rb.length, 1))
                                      } else "Enter" === bb.key && Rb[eb] && yb(Rb[eb])
                                    }
                                  }), (0, jb.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, jb.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Lb,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Xb && (0, jb.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Rb.map(((bb, ab) => {
                                    var Ub;
                                    return (0, jb.jsxs)("li", {
                                      id: `DocsSearchResult-${ab}`,
                                      role: "option",
                                      "aria-selected": ab === eb,
                                      className: Tb()("DocsSearchResult", {
                                        Active: ab === eb
                                      }),
                                      onMouseMove: () => {
                                        vb(ab)
                                      },
                                      onClick: () => {
                                        yb(bb)
                                      },
                                      children: [(0, jb.jsx)(kb, {
                                        name: bb.page.icon
                                      }), (0, jb.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, jb.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, jb.jsx)(uT, {
                                            text: bb.title,
                                            query: Xb
                                          })
                                        }), bb.text && (0, jb.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, jb.jsx)(uT, {
                                            text: qT(bb.text, Xb),
                                            query: Xb
                                          })
                                        })]
                                      }), (0, jb.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === bb.kind ? "Page" : null !== (Ub = bb.listedUnder) && void 0 !== Ub ? Ub : `${bb.kind} \xb7 ${bb.page.title}`
                                      })]
                                    }, `${bb.page.id}#${bb.anchor}`)
                                  })), Xb && 0 === Rb.length && (0, jb.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Eb, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function KT(bb, ab) {
                            if (ab < 10) return `${bb.toFixed(1)}s`;
                            const Ub = Math.floor(bb);
                            return `${Math.floor(Ub/60)}:${String(Ub%60).padStart(2,"0")}`
                          }

                          function oT() {
                            const bb = vA((bb => bb.track)),
                              ab = vA((bb => bb.volume)),
                              [Ub, Mb] = (0, Ab.useState)(0),
                              Eb = (0, Ab.useRef)(aA);
                            if ((0, Ab.useEffect)((() => {
                                if (!bb) return;
                                if (Mb(jA()), "playing" !== bb.status) return;
                                let ab = 0;
                                const Ub = () => {
                                  Mb(jA()), ab = requestAnimationFrame(Ub)
                                };
                                return ab = requestAnimationFrame(Ub), () => {
                                  cancelAnimationFrame(ab)
                                }
                              }), [bb]), !bb) return null;
                            const Yb = "paused" !== bb.status,
                              Bb = Math.min(Ub, bb.duration);
                            return (0, jb.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, jb.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, jb.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": Yb ? `Pause ${bb.name}` : `Play ${bb.name}`,
                                  onClick: XA,
                                  children: (0, jb.jsx)(kb, {
                                    name: Yb ? "pause" : "play"
                                  })
                                }), (0, jb.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, jb.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, jb.jsx)("code", {
                                      children: bb.name
                                    }), (0, jb.jsx)("span", {
                                      children: bb.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, jb.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, jb.jsx)("span", {
                                      children: KT(Bb, bb.duration)
                                    }), (0, jb.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: bb.duration || 1,
                                      step: .01,
                                      value: Bb,
                                      disabled: 0 === bb.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${KT(Bb,bb.duration)} of ${KT(bb.duration,bb.duration)}`,
                                      onChange: bb => {
                                        const ab = Number(bb.target.value);
                                        ! function(bb) {
                                          var ab;
                                          EA = bb, null === (ab = MA) || void 0 === ab || ab.seek(bb)
                                        }(ab), Mb(ab)
                                      }
                                    }), (0, jb.jsx)("span", {
                                      children: bb.duration > 0 ? KT(bb.duration, bb.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, jb.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, jb.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === ab ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === ab ? RA(Eb.current) : (Eb.current = ab, RA(0))
                                    },
                                    children: (0, jb.jsx)(kb, {
                                      name: "volume",
                                      className: Tb()({
                                        Muted: 0 === ab
                                      })
                                    })
                                  }), (0, jb.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: ab,
                                    "aria-label": "Volume",
                                    onChange: bb => {
                                      RA(Number(bb.target.value))
                                    }
                                  })]
                                }), (0, jb.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var ab;
                                    null === (ab = document.querySelector(`[data-docs-track="${CSS.escape(UA(bb.name,bb.isSong))}"]`)) || void 0 === ab || ab.focus(), kA()
                                  },
                                  children: (0, jb.jsx)(kb, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var lT = Ub(31);
                          const tT = "docsTheme",
                            wT = window.matchMedia("(prefers-color-scheme: light)");

                          function sT(bb) {
                            let {
                              theme: ab,
                              onChange: Ub
                            } = bb;
                            const Ab = "dark" === ab ? "light" : "dark";
                            return (0, jb.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Ab} theme`,
                              title: `Switch to ${Ab} theme`,
                              onClick: () => {
                                Ub(Ab)
                              },
                              children: (0, jb.jsx)(kb, {
                                name: "dark" === ab ? "moon" : "sun"
                              })
                            })
                          }
                          const gT = "https://github.com/Bloxdy/code-api",
                            CT = "https://discord.gg/playbloxd",
                            VT = 180,
                            OT = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function cT(bb) {
                            let {
                              basePath: ab,
                              activePageId: Ub,
                              onNavigate: Ab
                            } = bb;
                            return (0, jb.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: ub.map((bb => (0, jb.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, jb.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: bb.title
                                }), bb.pageIds.map((bb => {
                                  var Mb;
                                  const Yb = rb(bb);
                                  return (0, jb.jsxs)(Eb.c, {
                                    to: sb(ab, Yb),
                                    className: Tb()("DocsNavLink", {
                                      Active: Yb.id === Ub
                                    }),
                                    "aria-current": Yb.id === Ub ? "page" : void 0,
                                    onClick: Ab,
                                    children: [(0, jb.jsx)(kb, {
                                      name: Yb.icon
                                    }), (0, jb.jsx)("span", {
                                      children: null !== (Mb = Yb.navTitle) && void 0 !== Mb ? Mb : Yb.title
                                    })]
                                  }, Yb.id)
                                }))]
                              }, bb.title)))
                            })
                          }

                          function JT(bb) {
                            let {
                              basePath: ab,
                              pageId: Ub
                            } = bb;
                            const Ab = ub.flatMap((bb => bb.pageIds)),
                              Mb = Ab.indexOf(Ub),
                              Tb = Mb > 0 ? rb(Ab[Mb - 1]) : null,
                              Yb = Mb < Ab.length - 1 ? rb(Ab[Mb + 1]) : null;
                            return (0, jb.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Tb ? (0, jb.jsxs)(Eb.c, {
                                className: "DocsPagerLink Previous",
                                to: sb(ab, Tb),
                                children: [(0, jb.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, jb.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Tb.title
                                })]
                              }) : (0, jb.jsx)("span", {}), Yb && (0, jb.jsxs)(Eb.c, {
                                className: "DocsPagerLink Next",
                                to: sb(ab, Yb),
                                children: [(0, jb.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, jb.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Yb.title
                                })]
                              })]
                            })
                          }

                          function nT(bb) {
                            let {
                              basePath: ab,
                              embedded: Ub = !1
                            } = bb;
                            const {
                              pageSlug: Mb = ""
                            } = (0, Yb.F)(), eb = (0, Yb.v)(), vb = (0, Yb.x)(), Lb = (Pb = Mb, qb.find((bb => bb.slug === Pb)));
                            var Pb;
                            const [Xb, Rb] = function() {
                              const [bb, ab] = (0, Ab.useState)((() => {
                                const bb = lT.f.getItem(tT);
                                return "dark" === bb || "light" === bb ? bb : null
                              })), [Ub, Mb] = (0, Ab.useState)(wT.matches ? "light" : "dark");
                              return (0, Ab.useEffect)((() => {
                                const bb = () => {
                                  Mb(wT.matches ? "light" : "dark")
                                };
                                return wT.addEventListener("change", bb), () => {
                                  wT.removeEventListener("change", bb)
                                }
                              }), []), [null !== bb && void 0 !== bb ? bb : Ub, bb => {
                                lT.f.setItem(tT, bb), ab(bb)
                              }]
                            }(), [yb, Zb] = (0, Ab.useState)(null), [Db, zb] = (0, Ab.useState)(!1), [xb, ib] = (0, Ab.useState)(!1), [fb, pb] = (0, Ab.useState)([]), Nb = function(bb, ab) {
                              const [Ub, Mb] = (0, Ab.useState)("");
                              return (0, Ab.useEffect)((() => {
                                if (!ab) return;
                                let Ub = 0;
                                const Ab = () => {
                                    var Ab, Tb;
                                    Ub = 0;
                                    const Eb = ab.getBoundingClientRect().top + VT;
                                    let Yb = null !== (Ab = null === (Tb = bb[0]) || void 0 === Tb ? void 0 : Tb.anchor) && void 0 !== Ab ? Ab : "";
                                    for (const ab of bb) {
                                      const bb = document.getElementById(ab.anchor);
                                      bb && bb.getBoundingClientRect().top <= Eb && (Yb = ab.anchor)
                                    }
                                    ab.scrollTop + ab.clientHeight >= ab.scrollHeight - 2 && ab.scrollTop > 0 && bb.length > 0 && (Yb = bb[bb.length - 1].anchor), Mb(Yb)
                                  },
                                  Tb = () => {
                                    Ub || (Ub = requestAnimationFrame(Ab))
                                  };
                                return Ab(), ab.addEventListener("scroll", Tb, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(Ub), ab.removeEventListener("scroll", Tb)
                                }
                              }), [bb, ab]), Ub
                            }(fb, yb), Wb = "" === Mb && eb.hash ? function(bb) {
                              const ab = (0, mb.p)(bb);
                              if (lb(rb("welcome"), ab)) return null;
                              const Ub = Object.hasOwn(wb, ab) ? wb[ab] : null;
                              if (Ub) return {
                                page: rb(Ub.pageId),
                                anchor: Ub.anchor
                              };
                              const Ab = rb("readme");
                              return lb(Ab, ab) ? {
                                page: Ab,
                                anchor: ab
                              } : tb(`#${ab}`)
                            }(eb.hash) : null;
                            (0, Ab.useEffect)((() => (Bb.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              Bb.c.set({
                                musicOnFromPage: !0
                              }), kA()
                            })), []), (0, Ab.useEffect)((() => {
                              const bb = bb => {
                                const ab = bb.target;
                                if (ab.closest(".DocsTextDialog")) return;
                                const Ub = ab.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(ab.tagName);
                                "k" === bb.key && (bb.metaKey || bb.ctrlKey) || "/" === bb.key && !Ub ? (bb.preventDefault(), ib(!0)) : "Escape" === bb.key && zb(!1)
                              };
                              return window.addEventListener("keydown", bb), () => {
                                window.removeEventListener("keydown", bb)
                              }
                            }), []);
                            const Hb = (0, Ab.useRef)(null);
                            (0, Ab.useLayoutEffect)((() => {
                              var bb, ab;
                              if (!yb) return;
                              const Ub = Hb.current === eb.pathname;
                              Hb.current = eb.pathname;
                              const Ab = (0, mb.p)(eb.hash),
                                Mb = Ab ? document.getElementById(Ab) : null;
                              if (null === (bb = yb.querySelector(".DocsTargeted")) || void 0 === bb || bb.classList.remove("DocsTargeted"), null === Mb || void 0 === Mb || null === (ab = Mb.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === ab || ab.classList.add("DocsTargeted"), Mb) {
                                var Tb;
                                const bb = Mb.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Tb = Mb.closest(".DocsChangelogEntry")) && void 0 !== Tb ? Tb : Mb).scrollIntoView({
                                  block: bb ? "center" : "start",
                                  behavior: Ub ? "smooth" : "auto"
                                })
                              } else Ub || yb.scrollTo({
                                top: 0
                              })
                            }), [yb, eb.pathname, eb.hash, eb.key]);
                            const Ib = (0, Ab.useCallback)((() => {
                                zb(!1)
                              }), []),
                              db = (0, Ab.useCallback)((bb => {
                                vb({
                                  hash: bb
                                })
                              }), [vb]);
                            if (Wb) return (0, jb.jsx)(Yb.e, {
                              replace: !0,
                              to: sb(ab, Wb.page, Wb.anchor)
                            });
                            if (!Lb) return (0, jb.jsx)(Yb.e, {
                              replace: !0,
                              to: ab
                            });
                            const Fb = Ub ? "div" : "main";
                            return (0, jb.jsx)(Xa.Provider, {
                              value: ab,
                              children: (0, jb.jsx)(ja.Provider, {
                                value: yb,
                                children: (0, jb.jsxs)("div", {
                                  ref: Zb,
                                  className: Tb()("DocsSite", {
                                    Embedded: Ub,
                                    NavOpen: Db
                                  }),
                                  "data-theme": Xb,
                                  children: [(0, jb.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, jb.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Db ? "Close menu" : "Open menu",
                                      "aria-expanded": Db,
                                      onClick: () => {
                                        zb(!Db)
                                      },
                                      children: (0, jb.jsx)(kb, {
                                        name: Db ? "cross" : "menu"
                                      })
                                    }), (0, jb.jsxs)(Eb.c, {
                                      to: ab,
                                      className: "DocsBrand",
                                      children: [(0, jb.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, jb.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, jb.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, jb.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        ib(!0)
                                      },
                                      children: [(0, jb.jsx)(kb, {
                                        name: "magnifying-glass"
                                      }), (0, jb.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, jb.jsxs)("kbd", {
                                        children: [OT ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, jb.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, jb.jsxs)("a", {
                                        href: CT,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, jb.jsx)(kb, {
                                          name: "discord"
                                        }), (0, jb.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, jb.jsxs)("a", {
                                        href: gT,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, jb.jsx)(kb, {
                                          name: "external-link"
                                        }), (0, jb.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !Ub && (0, jb.jsxs)(Eb.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, jb.jsx)(kb, {
                                          name: "play"
                                        }), (0, jb.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, jb.jsx)(sT, {
                                        theme: Xb,
                                        onChange: Rb
                                      })]
                                    })]
                                  }), (0, jb.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, jb.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, jb.jsx)(cT, {
                                        basePath: ab,
                                        activePageId: Lb.id,
                                        onNavigate: Ib
                                      })
                                    }), (0, jb.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Ib
                                    }), (0, jb.jsxs)(Fb, {
                                      className: "DocsMain",
                                      children: [(0, jb.jsx)(xT, {
                                        page: Lb,
                                        onTocChange: pb
                                      }, Lb.id), (0, jb.jsx)(JT, {
                                        basePath: ab,
                                        pageId: Lb.id
                                      })]
                                    }), (0, jb.jsx)("aside", {
                                      className: Tb()("DocsToc", {
                                        Timeline: "changelog" === Lb.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, jb.jsx)(pT, {
                                        isChangelog: "changelog" === Lb.layout,
                                        toc: fb,
                                        activeAnchor: Nb,
                                        onNavigate: db
                                      })
                                    })]
                                  }), (0, jb.jsx)(oT, {}), xb && (0, jb.jsx)(rT, {
                                    basePath: ab,
                                    onClose: () => {
                                      ib(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4420: (bb, ab, Ub) => {
                          Ub.d(ab, {
                            b: () => Ab,
                            e: () => Eb,
                            i: () => kb,
                            m: () => Rb,
                            o: () => Yb,
                            p: () => Mb,
                            r: () => Tb,
                            u: () => jb,
                            v: () => Xb,
                            z: () => Pb
                          });
                          const Ab = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Mb(bb) {
                            try {
                              return decodeURIComponent(bb.slice(1))
                            } catch {
                              return bb.slice(1)
                            }
                          }

                          function Tb(bb) {
                            return bb.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Eb = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Ab.source}`, "g");

                          function Yb(bb, ab) {
                            return 2 === bb.length ? ab.replace(/^ (.*) $/, "$1") : ab
                          }

                          function Bb(bb) {
                            return "" === bb.trim()
                          }

                          function eb(bb) {
                            const ab = [];
                            for (const Ub of bb.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ab.length > 0 && ab[ab.length - 1].endsWith("\\") ? ab[ab.length - 1] += `|${Ub}` : ab.push(Ub);
                            return ab.map((bb => bb.trim().replaceAll("\\|", "|")))
                          }
                          const vb = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Lb(bb) {
                            const ab = [],
                              Ub = [{
                                indent: -1,
                                items: ab
                              }];
                            let Ab = null;
                            for (const Mb of bb) {
                              const bb = Mb.match(vb);
                              if (!bb) {
                                Ab && (Ab.text += ` ${Mb.trim()}`);
                                continue
                              }
                              const ab = bb[1].replace(/\t/g, "  ").length;
                              for (; ab <= Ub[Ub.length - 1].indent;) Ub.pop();
                              Ab = {
                                text: bb[3].trim(),
                                children: []
                              }, Ub[Ub.length - 1].items.push(Ab), Ub.push({
                                indent: ab,
                                items: Ab.children
                              })
                            }
                            return ab
                          }

                          function Pb(bb) {
                            const ab = bb.replace(/\r\n/g, "\n").split("\n"),
                              Ub = [];
                            let Ab = 0;
                            for (; Ab < ab.length;) {
                              const bb = ab[Ab];
                              if (Bb(bb)) {
                                Ab++;
                                continue
                              }
                              const Mb = bb.match(/^\s*```\s*(\w*)\s*$/);
                              if (Mb) {
                                const bb = [];
                                for (Ab++; Ab < ab.length && !/^\s*```\s*$/.test(ab[Ab]);) bb.push(ab[Ab]), Ab++;
                                Ab++, Ub.push({
                                  kind: "code",
                                  lang: Mb[1] || "text",
                                  code: bb.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Eb = bb.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Eb) {
                                const bb = Eb[2].trim();
                                Ub.push({
                                  kind: "heading",
                                  level: Eb[1].length,
                                  text: bb,
                                  anchor: Tb(bb)
                                }), Ab++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(bb)) {
                                Ub.push({
                                  kind: "rule"
                                }), Ab++;
                                continue
                              }
                              if (bb.trim().startsWith("|") && Ab + 1 < ab.length && /^\s*\|[\s:|-]+\|\s*$/.test(ab[Ab + 1])) {
                                const Mb = eb(bb),
                                  Tb = [];
                                for (Ab += 2; Ab < ab.length && ab[Ab].trim().startsWith("|");) Tb.push(eb(ab[Ab])), Ab++;
                                Ub.push({
                                  kind: "table",
                                  header: Mb,
                                  rows: Tb
                                });
                                continue
                              }
                              if (bb.startsWith(">")) {
                                const bb = [];
                                for (; Ab < ab.length && ab[Ab].startsWith(">");) bb.push(ab[Ab].replace(/^>\s?/, "")), Ab++;
                                Ub.push({
                                  kind: "quote",
                                  blocks: Pb(bb.join("\n"))
                                });
                                continue
                              }
                              if (vb.test(bb)) {
                                const Mb = [],
                                  Tb = /^\s*\d+\./.test(bb);
                                for (; Ab < ab.length && !Bb(ab[Ab]) && (vb.test(ab[Ab]) || /^\s+\S/.test(ab[Ab]));) Mb.push(ab[Ab]), Ab++;
                                Ub.push({
                                  kind: "list",
                                  ordered: Tb,
                                  items: Lb(Mb)
                                });
                                continue
                              }
                              const Yb = [];
                              for (; Ab < ab.length && !Bb(ab[Ab]) && !/^\s*```/.test(ab[Ab]) && !/^#{1,6}\s/.test(ab[Ab]) && !ab[Ab].startsWith(">") && !vb.test(ab[Ab]) && (!ab[Ab].trim().startsWith("|") || 0 !== Yb.length);) Yb.push(ab[Ab].trim()), Ab++;
                              0 === Yb.length && (Yb.push(ab[Ab].trim()), Ab++), Ub.push({
                                kind: "paragraph",
                                text: Yb.join(" ")
                              })
                            }
                            return Ub
                          }

                          function Xb(bb) {
                            let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const Ub = Pb(bb);
                            let Ab = "";
                            const Mb = [],
                              Tb = [],
                              Eb = new Map;
                            for (const eb of Ub) {
                              if ("heading" === eb.kind) {
                                var Yb;
                                const bb = (null !== (Yb = Eb.get(eb.anchor)) && void 0 !== Yb ? Yb : 0) + 1;
                                Eb.set(eb.anchor, bb), bb > 1 && (eb.anchor = `${eb.anchor}-${bb}`)
                              }
                              if ("heading" === eb.kind && 1 === eb.level && !Ab) {
                                Ab = eb.text;
                                continue
                              }
                              if ("heading" === eb.kind && eb.level <= ab) {
                                Tb.push({
                                  heading: eb,
                                  blocks: []
                                });
                                continue
                              }
                              const bb = Tb.at(-1);
                              bb ? bb.blocks.push(eb) : Mb.push(eb)
                            }
                            const Bb = bb => {
                              for (;
                                "rule" === (null === (ab = bb.at(-1)) || void 0 === ab ? void 0 : ab.kind);) {
                                var ab;
                                bb.pop()
                              }
                            };
                            Bb(Mb);
                            for (const eb of Tb) Bb(eb.blocks);
                            return {
                              title: Ab,
                              intro: Mb,
                              sections: Tb
                            }
                          }

                          function jb(bb) {
                            return [{
                              heading: null,
                              blocks: bb.intro
                            }, ...bb.sections.map((bb => ({
                              heading: bb.heading,
                              blocks: bb.blocks
                            })))]
                          }

                          function Rb(bb) {
                            return bb.flatMap((bb => "code" === bb.kind ? [bb] : "quote" === bb.kind ? Rb(bb.blocks) : []))
                          }

                          function kb(bb) {
                            switch (bb.kind) {
                              case "heading":
                              case "paragraph":
                                return bb.text;
                              case "code":
                                return bb.code;
                              case "table":
                                return [bb.header, ...bb.rows].map((bb => bb.join(" "))).join(" ");
                              case "list": {
                                const ab = bb => bb.map((bb => `${bb.text} ${ab(bb.children)}`)).join(" ");
                                return ab(bb.items)
                              }
                              case "quote":
                                return bb.blocks.map(kb).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4522: (bb, ab, Ub) => {
                          Ub.d(ab, {
                            c: () => Yb
                          });
                          var Ab = Ub(52),
                            Mb = Ub(307),
                            Tb = Ub(1812),
                            Eb = Ub(1023);

                          function Yb(bb) {
                            let {
                              text: ab
                            } = bb;
                            const Ub = [];
                            let Yb = "";
                            return (0, Mb.cc)(ab).forEach(((bb, ab) => {
                              if ("string" === typeof bb || !(0, Tb.f)(bb.icon)) return void(Yb += "string" === typeof bb ? bb : bb.icon);
                              const Mb = Math.max(0, Yb.trimEnd().search(/\S{1,12}$/));
                              Ub.push((0, Eb.jsxs)(Ab.Fragment, {
                                children: [Yb.slice(0, Mb), (0, Eb.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [Yb.slice(Mb), (0, Eb.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": bb.icon,
                                    children: (0, Eb.jsx)(Tb.c, {
                                      itemName: bb.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, ab)), Yb = ""
                            })), Ub.push(Yb), (0, Eb.jsx)(Eb.Fragment, {
                              children: Ub
                            })
                          }
                        }, 4455: (bb, ab, Ub) => {
                          Ub.d(ab, {
                            g: () => Zb,
                            e: () => yb
                          });
                          var Ab = Ub(52),
                            Mb = Ub(1345),
                            Tb = Ub(1794),
                            Eb = Ub(4457),
                            Yb = Ub(1023);
                          const Bb = (0, Ab.memo)((function(bb) {
                            let {
                              initialParameters: ab
                            } = bb;
                            const Ub = (0, Ab.useRef)(null),
                              Mb = (0, Ab.useRef)(null),
                              Bb = (0, Ab.useRef)(0),
                              eb = (0, Ab.useRef)(null),
                              vb = ab.description,
                              Lb = ab.gb,
                              {
                                scale: Pb,
                                rotation: Xb
                              } = null !== ab && void 0 !== ab ? ab : {},
                              jb = (0, Eb.f)();
                            return (0, Ab.useEffect)((() => {
                              const bb = jb.onFrame((() => {
                                const bb = jb.getState();
                                if (!bb.isActive || !Ub.current || !Mb.current) return;
                                const ab = bb.state;
                                if (Ub.current.value = ab.progress, ab.clickCount > Bb.current) {
                                  Bb.current = ab.clickCount;
                                  const bb = Mb.current;
                                  bb.classList.add("pulse"), eb.current = setTimeout((() => {
                                    bb.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(eb.current), bb()
                              }
                            }), [jb]), (0, Yb.jsx)(Yb.Fragment, {
                              children: (0, Yb.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Pb && {
                                    "--scale": Pb
                                  },
                                  ...null !== Xb && {
                                    "--rotation": `${Xb}deg`
                                  }
                                },
                                children: [(0, Yb.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: Ub
                                }), (0, Yb.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Mb,
                                  children: (0, Yb.jsx)(Tb.c, {
                                    text: [{
                                      icon: Lb
                                    }]
                                  })
                                }), (0, Yb.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, Yb.jsx)(Tb.c, {
                                    text: vb
                                  })
                                })]
                              })
                            })
                          }));
                          var eb = Ub(984),
                            vb = Ub.n(eb);
                          const Lb = 2 * Math.PI * 90,
                            Pb = (0, Ab.memo)((function(bb) {
                              let {
                                initialParameters: ab
                              } = bb;
                              const Ub = (0, Ab.useRef)(null),
                                Mb = (0, Ab.useRef)(null),
                                Bb = (0, Ab.useRef)(null),
                                eb = ab.label,
                                Pb = ab.icon,
                                Xb = ab.Ob,
                                {
                                  scale: jb,
                                  rotation: Rb,
                                  cb: kb
                                } = null !== ab && void 0 !== ab ? ab : {},
                                yb = (0, Eb.f)();
                              return (0, Ab.useEffect)((() => {
                                const bb = yb.onFrame((() => {
                                  var bb, ab;
                                  const Ab = yb.getState();
                                  if (!Ab.isActive || !Mb.current) return;
                                  const Tb = Ab.state,
                                    Eb = null !== (bb = Tb.timeRemaining) && void 0 !== bb ? bb : 0,
                                    Yb = null !== (ab = Tb.Vb) && void 0 !== ab ? ab : 1,
                                    eb = Lb * (1 - Eb / Yb);
                                  Mb.current.style.strokeDashoffset = `${eb}`, Ub.current && (Ub.current.style.opacity = Eb > 0 ? "1" : "0"), Bb.current && Xb && (Bb.current.textContent = `${(Eb/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  bb()
                                }
                              }), [yb, Xb]), (0, Yb.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: Ub,
                                style: {
                                  ...null !== jb && {
                                    "--scale": jb
                                  },
                                  ...null !== Rb && {
                                    "--rotation": `${Rb}deg`
                                  }
                                },
                                children: [(0, Yb.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, Yb.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Yb.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, Yb.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Lb,
                                      ref: Mb
                                    })]
                                  }), (0, Yb.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, Yb.jsx)(Tb.c, {
                                      text: [{
                                        icon: Pb
                                      }],
                                      className: vb()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: kb
                                      })
                                    })
                                  })]
                                }), (0, Yb.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, Yb.jsx)(Tb.c, {
                                    text: eb,
                                    className: "QTETimedClickLabelText"
                                  }), Xb && (0, Yb.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: Bb
                                  })]
                                })]
                              })
                            })),
                            Xb = (0, Ab.memo)((function(bb) {
                              let {
                                initialParameters: ab
                              } = bb;
                              const Ub = (0, Ab.useRef)(null),
                                Mb = (0, Ab.useRef)(null),
                                Bb = (0, Ab.useRef)(null),
                                eb = (0, Ab.useRef)(!1),
                                vb = ab.description,
                                Lb = null === ab || void 0 === ab ? void 0 : ab.icon,
                                Pb = (0, Eb.f)();
                              return (0, Ab.useEffect)((() => {
                                const bb = Pb.onFrame((() => {
                                  const bb = Pb.getState();
                                  if (!bb.isActive) return;
                                  const ab = bb.state;
                                  if (Ub.current) {
                                    const bb = 100 * (ab.catchZonePosition - ab.Sb / 2);
                                    Ub.current.style.left = `${bb}%`, Ub.current.style.width = 100 * ab.Sb + "%", ab.isCatching !== eb.current && (eb.current = ab.isCatching, ab.isCatching ? Ub.current.classList.add("catching") : Ub.current.classList.remove("catching"))
                                  }
                                  Mb.current && (Mb.current.style.left = 100 * ab.moverPosition + "%"), Bb.current && (Bb.current.value = ab.progress)
                                }));
                                return () => {
                                  bb()
                                }
                              }), [Pb]), (0, Yb.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, Yb.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, Yb.jsx)(Tb.c, {
                                    text: vb
                                  })
                                }), (0, Yb.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: Bb
                                }), (0, Yb.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, Yb.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: Ub
                                  }), (0, Yb.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Mb,
                                    children: (0, Yb.jsx)("span", {
                                      children: Lb && (0, Yb.jsx)(Tb.c, {
                                        text: [{
                                          icon: Lb,
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
                          var jb = Ub(591);
                          const Rb = (0, Ab.memo)((function(bb) {
                              let {
                                initialParameters: ab
                              } = bb;
                              const Ub = (0, Ab.useRef)(null),
                                Mb = ab.label,
                                Bb = ab.Ea,
                                {
                                  icon: eb,
                                  scale: vb,
                                  rotation: Lb
                                } = null !== ab && void 0 !== ab ? ab : {},
                                Pb = 100 * (.5 - Bb / 2),
                                Xb = 100 * Bb,
                                Rb = (0, Eb.f)();
                              return (0, Ab.useEffect)((() => {
                                const bb = Rb.onFrame((() => {
                                  const bb = Rb.getState();
                                  if (!bb.isActive || !Ub.current) return;
                                  const ab = bb.state;
                                  Ub.current.style.left = 100 * ab.markerPosition + "%"
                                }));
                                return () => {
                                  bb()
                                }
                              }), [Rb]), (0, Yb.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, jb.I)(vb) && {
                                    "--scale": vb
                                  },
                                  ...!(0, jb.I)(Lb) && {
                                    "--rotation": `${Lb}deg`
                                  }
                                },
                                children: [eb && (0, Yb.jsx)(Tb.c, {
                                  text: [{
                                    icon: eb
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, Yb.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, Yb.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Pb}%`,
                                      width: `${Xb}%`
                                    }
                                  }), (0, Yb.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: Ub
                                  })]
                                }), (0, Yb.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, Yb.jsx)(Tb.c, {
                                    text: Mb
                                  })
                                })]
                              })
                            })),
                            kb = (0, Ab.memo)((function(bb) {
                              let {
                                initialParameters: ab
                              } = bb;
                              const Ub = (0, Ab.useRef)(null),
                                [Mb, Bb] = (0, Ab.useState)((() => new Array(ab.Ba).fill("pending"))),
                                [eb, vb] = (0, Ab.useState)((() => {
                                  const bb = ab.La;
                                  return (0, jb.I)(bb) || bb <= 0 ? [] : new Array(bb).fill("pending")
                                })),
                                Lb = ab.label,
                                {
                                  icon: Pb
                                } = ab,
                                Xb = (0, Ab.useRef)(0),
                                Rb = (0, Ab.useRef)(0),
                                kb = (0, Ab.useRef)([]),
                                yb = (0, Eb.f)();
                              return (0, Ab.useEffect)((() => {
                                const bb = yb.onFrame((() => {
                                  const bb = yb.getState();
                                  if (!bb.isActive || !Ub.current) return;
                                  const ab = bb.state,
                                    Ab = 30 + 60 * ab.outerCircleProgress;
                                  if (Ub.current.setAttribute("r", String(Ab)), !0 === ab.lastClickResult && ab.successes > Xb.current) {
                                    Ub.current.classList.remove("QTERhythmClickOuterCircle--miss"), Ub.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const bb = setTimeout((() => {
                                      var bb;
                                      null === (bb = Ub.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    kb.current.push(bb)
                                  } else if (!1 === ab.lastClickResult && ab.misses > Rb.current) {
                                    Ub.current.classList.remove("QTERhythmClickOuterCircle--hit"), Ub.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const bb = setTimeout((() => {
                                      var bb;
                                      null === (bb = Ub.current) || void 0 === bb || bb.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    kb.current.push(bb)
                                  }
                                  ab.successes === Xb.current && ab.misses === Rb.current || (Xb.current = ab.successes, Rb.current = ab.misses, Bb((bb => {
                                    const Ub = [...bb];
                                    for (let Ab = 0; Ab < ab.Ba; Ab++) Ub[Ab] = Ab < ab.successes ? "success" : "pending";
                                    return Ub
                                  })), vb((bb => {
                                    if (0 === bb.length) return bb;
                                    const Ub = [...bb];
                                    for (let Ab = 0; Ab < Ub.length; Ab++) Ub[Ab] = Ab < ab.misses ? "miss" : "pending";
                                    return Ub
                                  })))
                                }));
                                return () => {
                                  bb();
                                  for (const bb of kb.current) clearTimeout(bb);
                                  kb.current = []
                                }
                              }), [yb]), (0, Yb.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, Yb.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Mb.map(((bb, ab) => (0, Yb.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === bb ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, ab)))
                                }), (0, Yb.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, Yb.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Yb.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, Yb.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: Ub
                                    })]
                                  }), Pb && (0, Yb.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, Yb.jsx)(Tb.c, {
                                      text: [{
                                        icon: Pb
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), eb.length > 0 && (0, Yb.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: eb.map(((bb, ab) => (0, Yb.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === bb ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, ab)))
                                }), (0, Yb.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, Yb.jsx)(Tb.c, {
                                    text: Lb
                                  })
                                })]
                              })
                            }));

                          function yb(bb) {
                            let {
                              qte: ab
                            } = bb;
                            switch (ab.type) {
                              case "progressBar":
                                return (0, Yb.jsx)(Bb, {
                                  initialParameters: ab.parameters
                                });
                              case "timedClick":
                                return (0, Yb.jsx)(Pb, {
                                  initialParameters: ab.parameters
                                });
                              case "gravityBar":
                                return (0, Yb.jsx)(Xb, {
                                  initialParameters: ab.parameters
                                });
                              case "precisionBar":
                                return (0, Yb.jsx)(Rb, {
                                  initialParameters: ab.parameters
                                });
                              case "rhythmClick":
                                return (0, Yb.jsx)(kb, {
                                  initialParameters: ab.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Zb = (0, Ab.memo)((function() {
                            const [bb, ab] = (0, Ab.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Mb.f)("qteStateUpdated", (bb => {
                              ab(bb)
                            })), bb.isActive && bb.type ? (0, Yb.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, Yb.jsx)(yb, {
                                qte: bb
                              })
                            }) : null
                          }))
                        }, 4457: (bb, ab, Ub) => {
                          Ub.d(ab, {
                            c: () => Yb,
                            f: () => Bb
                          });
                          var Ab = Ub(52),
                            Mb = Ub(1227),
                            Tb = Ub(4462);
                          const Eb = {
                              getState: () => Tb.e.getCurrentState(),
                              onFrame: Mb.j
                            },
                            Yb = (0, Ab.createContext)(Eb);

                          function Bb() {
                            return (0, Ab.useContext)(Yb)
                          }
                        }, 4531: (bb, ab, Ub) => {
                          Ub.d(ab, {
                            e: () => Gb,
                            g: () => hb
                          });
                          var Ab = Ub(4536),
                            Mb = Ub(307);
                          const Tb = 120,
                            Eb = 260,
                            Yb = 1.15,
                            Bb = 1.2,
                            eb = 2,
                            vb = 1.08,
                            Lb = .8,
                            Pb = .95,
                            Xb = 8,
                            jb = "[\"')\\]\u300d\u300f\uff09]*",
                            Rb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${jb}$`),
                            kb = new RegExp(`[?\uff1f]${jb}$`),
                            yb = new RegExp(`[!\uff01]${jb}$`),
                            Zb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Db = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            zb = new RegExp(`[${Db}]`),
                            xb = new RegExp(`[${Db}]|[^${Db}]+`, "g"),
                            ib = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function fb(bb) {
                            let ab = 2166136261;
                            for (let Ub = 0; Ub < bb.length; Ub++) ab ^= bb.charCodeAt(Ub), ab = Math.imul(ab, 16777619);
                            return (ab >>> 0) / 4294967295 * 2 - 1
                          }

                          function mb(bb) {
                            var ab;
                            if (zb.test(bb)) return 1;
                            const Ub = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Ab = Ub.replace(/[^0-9]/g, "");
                            if (Ab.length > 0 && !/\p{L}/u.test(Ub)) return Math.min(Ab.length, 4);
                            const Mb = null !== (ab = Ub.match(ib)) && void 0 !== ab ? ab : [];
                            if (0 === Mb.length) {
                              var Tb, Eb;
                              const bb = null !== (Tb = null === (Eb = Ub.match(/\p{L}/gu)) || void 0 === Eb ? void 0 : Eb.length) && void 0 !== Tb ? Tb : 0;
                              return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), Xb)
                            }
                            const Yb = Ub.replace(/[^\p{L}]/gu, ""),
                              Bb = Mb.length > 1 && "e" === Mb.at(-1) && Yb.endsWith("e") && !Yb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Mb.length - (Bb ? 1 : 0), Xb)
                          }

                          function pb(bb) {
                            return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Nb(bb) {
                            const ab = bb.replace(/[^\p{L}]/gu, "");
                            return ab.length >= 2 && ab === ab.toUpperCase() && ab !== ab.toLowerCase()
                          }

                          function Wb(bb, ab) {
                            var Ub;
                            const Xb = ab && (0, Ab.k)(ab),
                              jb = null !== (Ub = null === Xb || void 0 === Xb ? void 0 : Xb.syllableMs) && void 0 !== Ub ? Ub : Ab.b,
                              Db = function(bb) {
                                const ab = [];
                                for (const Ab of (0, Mb.cc)(bb))
                                  if ("string" === typeof Ab)
                                    for (const bb of Ab.split(/(\s+)/)) {
                                      if ("" === bb) continue;
                                      if (/^\s+$/.test(bb)) {
                                        ab.push({
                                          kind: "space",
                                          text: bb
                                        });
                                        continue
                                      }
                                      if (!zb.test(bb)) {
                                        ab.push({
                                          kind: "word",
                                          text: bb,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Ab = !0;
                                      for (const Mb of null !== (Ub = bb.match(xb)) && void 0 !== Ub ? Ub : []) {
                                        var Ub;
                                        const bb = ab.at(-1);
                                        Ab || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || zb.test(Mb) || /[\p{L}\p{N}]/u.test(Mb) ? (Ab || ab.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), ab.push({
                                          kind: "word",
                                          text: Mb,
                                          delayMs: 0
                                        }), Ab = !1) : bb.text += Mb
                                      }
                                    } else ab.push({
                                      kind: "icon",
                                      text: Ab.icon,
                                      delayMs: 0
                                    });
                                return ab
                              }(bb),
                              ib = [];
                            let Wb = [];
                            for (const Ab of Db) "space" !== Ab.kind && (Wb.push(Ab), Rb.test(Ab.text) && (ib.push(Wb), Wb = []));
                            ib.push(Wb);
                            const Hb = [];
                            let Ib = 0;
                            for (const Ab of ib) {
                              var db, Fb;
                              const bb = null !== (db = null === (Fb = Ab.at(-1)) || void 0 === Fb ? void 0 : Fb.text) && void 0 !== db ? db : "",
                                ab = kb.test(bb),
                                Ub = yb.test(bb),
                                Mb = Ab.map((bb => "word" === bb.kind ? mb(bb.text) : 1)),
                                Db = Mb.findLastIndex((bb => bb > 0));
                              for (const [kb, yb] of Ab.entries()) {
                                const bb = "word" === yb.kind,
                                  Ab = Mb[kb];
                                yb.delayMs = Ib;
                                for (let Mb = 0; Xb && Mb < Ab; Mb++) {
                                  const {
                                    intonation: Tb
                                  } = Xb;
                                  let Eb = Db > 0 ? -Tb.declineSemitones * (kb / Db) : 0;
                                  Eb += fb(`${pb(yb.text)}|${Mb}`) * Tb.variationSemitones;
                                  const Rb = Math.min(1, Tb.variationSemitones);
                                  let Zb = Xb.glideSemitones,
                                    zb = 1;
                                  Ub && (Eb += Tb.exclaimLiftSemitones, zb *= Yb), ab && kb === Db && (Eb += Tb.questionRiseSemitones * (Ab > 1 ? .5 + .5 * Mb / (Ab - 1) : 1), Mb === Ab - 1 && (Zb = Math.abs(Zb) + Tb.questionRiseSemitones / 2)), bb && Nb(yb.text) && (Eb += eb * Rb, zb *= Bb), Ab > 1 && 0 === Mb && (Eb += Lb * Rb, zb *= vb), Hb.push({
                                    atMs: Ib + Mb * jb,
                                    semitones: Eb,
                                    glideSemitones: Zb,
                                    durationMs: Mb < Ab - 1 ? Math.min(Xb.durationMs, jb * Pb) : Xb.durationMs,
                                    level: zb
                                  })
                                }
                                Ib += Ab * jb + (Rb.test(yb.text) ? Eb : Zb.test(yb.text) ? Tb : 0)
                              }
                            }
                            return {
                              pieces: Db.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
                                kind: "icon",
                                icon: bb.text,
                                delayMs: bb.delayMs
                              } : {
                                kind: "word",
                                text: bb.text,
                                delayMs: bb.delayMs
                              })),
                              blips: Hb
                            }
                          }
                          var Hb = Ub(1134),
                            Ib = Ub(1198),
                            db = Ub(1829);

                          function Fb(bb) {
                            if ("string" === typeof bb) return bb;
                            const ab = Ib.f.get().getCurrentLanguageCode();
                            return (0, Hb.p)(ab, bb.translationKey, (0, Hb.m)(bb.params, db.c.shown))
                          }

                          function hb(bb) {
                            const ab = void 0 === bb.voice ? null : (0, Ab.n)(bb.voice),
                              Ub = ab && (0, Ab.k)(ab);
                            return {
                              plan: Wb(Fb(bb.line), Ub),
                              synth: Ub
                            }
                          }

                          function Gb(bb) {
                            const ab = [];
                            let Ub = [];
                            for (const [Mb, Tb] of bb.entries()) {
                              var Ab;
                              "space" === Tb.kind && (" " !== Tb.text || "icon" !== (null === (Ab = bb[Mb + 1]) || void 0 === Ab ? void 0 : Ab.kind)) ? (Ub.length > 0 && ab.push(Ub), ab.push([Tb]), Ub = []) : Ub.push(Tb)
                            }
                            return Ub.length > 0 && ab.push(Ub), ab
                          }
                        }, 4541: (bb, ab, Ub) => {
                          Ub.d(ab, {
                            c: () => vb,
                            g: () => Lb
                          });
                          var Ab = Ub(4546),
                            Mb = Ub(19);
                          const Tb = .25,
                            Eb = .85,
                            Yb = .02,
                            Bb = .01;

                          function eb(bb, ab, Ub, Ab, Mb, Tb, Yb) {
                            const {
                              waveform: Bb,
                              pitchHz: eb,
                              attackMs: vb,
                              releaseMs: Lb,
                              lowpassHz: Pb
                            } = Ub, Xb = Mb + Ab.durationMs / 1e3, jb = eb * 2 ** (Ab.semitones / 12), Rb = bb.createOscillator();
                            Rb.type = Bb, Rb.frequency.setValueAtTime(jb, Mb), Rb.frequency.exponentialRampToValueAtTime(jb * 2 ** (Ab.glideSemitones / 12), Xb);
                            const kb = Mb + Math.min(vb, Ab.durationMs) / 1e3,
                              yb = bb.createGain();
                            yb.gain.setValueAtTime(0, Mb), yb.gain.linearRampToValueAtTime(Tb, kb), yb.gain.linearRampToValueAtTime(Tb * Eb, Math.max(kb, Xb - Lb / 1e3)), yb.gain.linearRampToValueAtTime(0, Xb);
                            const Zb = [Rb];
                            if (null !== Pb) {
                              const ab = bb.createBiquadFilter();
                              ab.type = "lowpass", ab.frequency.value = Pb, Zb.push(ab)
                            }
                            Zb.push(yb, ab);
                            for (let Eb = 1; Eb < Zb.length; Eb++) Zb[Eb - 1].connect(Zb[Eb]);
                            return Rb.onended = () => {
                              for (const bb of Zb.slice(0, -1)) bb.disconnect();
                              Yb()
                            }, Rb.start(Mb), Rb.stop(Xb), Rb
                          }

                          function vb(bb, ab, Ub, Ab, Mb, Eb) {
                            if (0 === Ab.length) return Eb(), () => {};
                            const vb = Tb * Ub.volume * Mb,
                              Lb = bb.createGain();
                            Lb.connect(ab);
                            const Pb = bb.currentTime + Yb,
                              Xb = new Set;
                            for (const Tb of Ab) {
                              const ab = eb(bb, Lb, Ub, Tb, Pb + Tb.atMs / 1e3, vb * Tb.level, (() => {
                                Xb.delete(ab), 0 === Xb.size && (Lb.disconnect(), Eb())
                              }));
                              Xb.add(ab)
                            }
                            return () => {
                              const ab = bb.currentTime;
                              Lb.gain.setTargetAtTime(0, ab, Bb);
                              for (const bb of Xb) try {
                                bb.stop(ab + 5 * Bb)
                              } catch {}
                            }
                          }

                          function Lb(bb, ab) {
                            var Ub;
                            const Tb = Ab.Howler.ctx,
                              Eb = Ab.Howler.masterGain;
                            if (!Tb || !Eb || !Mb.c.get("soundOnFromAd")) return () => {};
                            const Yb = Ab.Howler;
                            return null === (Ub = Yb._autoResume) || void 0 === Ub || Ub.call(Yb), vb(Tb, Eb, bb, ab, Mb.c.get("soundVolume"), (() => {
                              var bb;
                              null === (bb = Yb._autoSuspend) || void 0 === bb || bb.call(Yb)
                            }))
                          }
                        }, 4546: (bb, ab, Ub) => {
                          Ub.r(ab), Ub.d(ab, {
                            Howl: () => Mb.Howl,
                            Howler: () => Mb.Howler,
                            iosAudio: () => Bb,
                            musicOutput: () => kb,
                            readyAudioContext: () => yb
                          });
                          var Ab, Mb = Ub(4551),
                            Tb = Ub(101);
                          const Eb = Mb.Howler;
                          let Yb;

                          function Bb() {
                            return Yb ??= "ios" === (0, Tb.getOperatingSystem)(), Yb
                          }

                          function eb() {
                            var bb, ab;
                            if (Eb.ctx || !Eb.usingWebAudio || "undefined" === typeof AudioContext || !Bb()) return;
                            const Ub = navigator.audioSession;
                            let Ab;
                            "auto" === (null === Ub || void 0 === Ub ? void 0 : Ub.type) && (Ub.type = "ambient");
                            try {
                              Ab = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Mb = Ab.createGain();
                            Mb.gain.setValueAtTime(Eb._muted ? 0 : null !== (bb = Eb._volume) && void 0 !== bb ? bb : 1, Ab.currentTime), Mb.connect(Ab.destination), Eb.ctx = Ab, Eb.masterGain = Mb, null === (ab = Eb._setup) || void 0 === ab || ab.call(Eb)
                          }
                          Eb._mobileUnloaded = !0;
                          const vb = Eb.volume.bind(Mb.Howler);
                          Eb.volume = function() {
                            return eb(), vb(...arguments)
                          };
                          const Lb = Eb.mute.bind(Mb.Howler);
                          Eb.mute = bb => (eb(), Lb(bb));
                          const Pb = Mb.Howl.prototype,
                            Xb = Pb.init;
                          Pb.init = function(bb) {
                            return eb(), Xb.call(this, bb)
                          };
                          let jb = 0;
                          const Rb = null === (Ab = Eb._autoSuspend) || void 0 === Ab ? void 0 : Ab.bind(Mb.Howler);

                          function kb() {
                            yb();
                            const {
                              ctx: bb,
                              masterGain: ab
                            } = Eb;
                            return bb && ab ? {
                              ctx: bb,
                              destination: ab,
                              holdAwake: bb => {
                                var ab, Ub;
                                (jb += bb ? 1 : -1, bb) ? null === (ab = Eb._autoResume) || void 0 === ab || ab.call(Eb): null === (Ub = Eb._autoSuspend) || void 0 === Ub || Ub.call(Eb)
                              },
                              wake: () => {
                                var ab;
                                "running" !== bb.state && (null === (ab = Eb._autoResume) || void 0 === ab || ab.call(Eb), bb.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function yb() {
                            var bb;
                            (Eb.volume(), Eb.ctx && Eb.autoUnlock) && (null === (bb = Eb._unlockAudio) || void 0 === bb || bb.call(Eb))
                          }
                          Rb && (Eb._autoSuspend = () => jb > 0 ? Mb.Howler : Rb())
                        }, 4553: (bb, ab, Ub) => {
                          function Ab(bb) {
                            return {
                              notAfter: bb
                            }
                          }
                          Ub.d(ab, {
                            d: () => Bb,
                            f: () => eb,
                            g: () => Yb,
                            h: () => Ab,
                            l: () => Mb,
                            m: () => Tb,
                            p: () => Eb,
                            s: () => vb,
                            w: () => Lb
                          });
                          const Mb = Ab("\\w$."),
                            Tb = Ab("\\w.,");

                          function Eb(bb) {
                            return ab => Bb(ab, bb)
                          }

                          function Yb(bb) {
                            return ab => !bb.test(ab.input.slice(0, ab.index))
                          }

                          function Bb(bb, ab) {
                            return bb.index > 0 && new RegExp(`[${ab}]`).test(bb.input[bb.index - 1])
                          }

                          function eb(bb, ab, Ub) {
                            return function(bb) {
                              return void 0 !== bb && "function" !== typeof bb
                            }(Ub) ? function(bb, ab, Ub) {
                              const Ab = ab.flags.replace(/[gy]/g, ""),
                                Mb = new RegExp(`[^${Ub}](?:${ab.source})`, `${Ab}g`),
                                Tb = [],
                                Eb = Ub => {
                                  const Ab = Ub.index + Ub[0].length;
                                  return ("" === Ub[0] ? Pb(bb, ab, Ab) : Ab) - 1
                                },
                                Yb = new RegExp(`(?:${ab.source})`, `${Ab}y`).exec(bb);
                              if (Yb) {
                                if (Tb.push(Yb), !ab.global) return Tb;
                                Mb.lastIndex = Eb(Yb)
                              }
                              for (let Bb = Mb.exec(bb); Bb; Bb = Mb.exec(bb)) {
                                const Ub = Pb(bb, ab, Bb.index) - Bb.index;
                                if (Bb[0] = Bb[0].slice(Ub), Bb.index += Ub, Tb.push(Bb), !ab.global) break;
                                Mb.lastIndex = Eb(Bb)
                              }
                              return Tb
                            }(bb, ab, Ub.notAfter) : function(bb, ab, Ub) {
                              const Ab = new RegExp(ab.source, `${ab.flags.replace(/[gy]/g,"")}g`),
                                Mb = [];
                              for (let Tb = Ab.exec(bb); Tb; Tb = Ab.exec(bb))
                                if (!Ub || Ub(Tb)) {
                                  if (Mb.push(Tb), !ab.global) break;
                                  "" === Tb[0] && (Ab.lastIndex = Pb(bb, ab, Ab.lastIndex))
                                } else Ab.lastIndex = Pb(bb, ab, Tb.index);
                              return Mb
                            }(bb, ab, Ub)
                          }

                          function vb(bb, ab, Ub, Ab) {
                            let Mb = "",
                              Tb = 0;
                            for (const Eb of eb(bb, ab, Ub)) Mb += bb.slice(Tb, Eb.index) + Ab(Eb), Tb = Eb.index + Eb[0].length;
                            return Mb + bb.slice(Tb)
                          }

                          function Lb(bb, ab, Ub) {
                            const Ab = [];
                            let Mb = 0;
                            for (const Tb of eb(bb, ab, Ub)) Ab.push(bb.slice(Mb, Tb.index)), Mb = Tb.index + Tb[0].length;
                            return [...Ab, bb.slice(Mb)]
                          }

                          function Pb(bb, ab, Ub) {
                            var Ab;
                            return Ub + (ab.unicode && (null !== (Ab = bb.codePointAt(Ub)) && void 0 !== Ab ? Ab : 0) > 65535 ? 2 : 1)
                          }
                        }, 4509: (bb, ab, Ub) => {
                          Ub.d(ab, {
                            B: () => Rb,
                            C: () => Xb,
                            d: () => Mb,
                            f: () => Bb,
                            j: () => Tb,
                            n: () => Eb,
                            q: () => Yb,
                            t: () => kb,
                            v: () => vb,
                            x: () => Lb
                          });
                          var Ab = Ub(1505);
                          const Mb = 24e3,
                            Tb = "/docs/llms.txt",
                            Eb = `${Ab.d}${Tb}`,
                            Yb = "/llms.txt",
                            Bb = "/docs/llms-full.txt";

                          function eb(bb) {
                            return bb || "index"
                          }

                          function vb(bb) {
                            return `/docs/${eb(bb)}.md`
                          }

                          function Lb(bb, ab) {
                            return `/docs/${eb(bb)}/${ab+1}.md`
                          }
                          const Pb = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Xb(bb) {
                            const ab = Pb.exec(bb);
                            return null === ab ? null : {
                              name: ab[1],
                              part: void 0 === ab[2] ? null : Number(ab[2])
                            }
                          }
                          const jb = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Rb(bb) {
                            const ab = jb.exec(bb);
                            if (null === ab) return null;
                            const [, Ub = "", Ab] = ab;
                            return void 0 === Ab ? vb(Ub) : Lb(Ub, Number(Ab) - 1)
                          }

                          function kb(bb) {
                            return `/docsHtml/${eb(bb)}.html`
                          }
                        }, 4536: (bb, ab, Ub) => {
                          Ub.d(ab, {
                            b: () => Mb,
                            e: () => Ab,
                            i: () => Tb,
                            k: () => Bb,
                            n: () => Eb
                          });
                          const Ab = ["sine", "triangle", "square", "sawtooth"],
                            Mb = 55,
                            Tb = {
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

                          function Eb(bb) {
                            return "string" !== typeof bb ? bb : Object.hasOwn(Tb, bb) ? Tb[bb] : null
                          }

                          function Yb(bb, ab, Ub) {
                            return Math.min(Ub, Math.max(ab, bb))
                          }

                          function Bb(bb) {
                            const ab = Yb(bb.durationMs, 10, 500),
                              Ub = Yb(bb.attackMs, 0, ab),
                              {
                                intonation: Mb
                              } = bb;
                            return {
                              waveform: Ab.includes(bb.waveform) ? bb.waveform : "sine",
                              pitchHz: Yb(bb.pitchHz, 20, 4e3),
                              glideSemitones: Yb(bb.glideSemitones, -24, 24),
                              durationMs: ab,
                              attackMs: Ub,
                              releaseMs: Yb(bb.releaseMs, 0, ab - Ub),
                              lowpassHz: null === bb.lowpassHz ? null : Yb(bb.lowpassHz, 20, 2e4),
                              volume: Yb(bb.volume, 0, 2),
                              intonation: {
                                variationSemitones: Yb(Mb.variationSemitones, 0, 6),
                                declineSemitones: Yb(Mb.declineSemitones, 0, 12),
                                questionRiseSemitones: Yb(Mb.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: Yb(Mb.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: Yb(bb.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const bb in modules) Object.freeze(modules[bb]);