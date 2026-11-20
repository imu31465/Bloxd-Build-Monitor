export const id = 75;
export const ids = [75, 91];
export const modules = {
    4598: (uu, Ru, yu) => {
      yu.d(Ru, {
        b: () => Tu,
        e: () => Wu
      });
      var Eu = yu(1035),
        Ku = yu.n(Eu),
        Qu = yu(64),
        mu = yu(1170),
        Ju = yu(4604),
        Nu = yu(1825),
        Xu = yu(2335),
        Vu = yu(4611),
        ru = yu(1079);
      const Bu = new WeakMap;
      let xu = 0;

      function Su(uu) {
        let Ru = Bu.get(uu);
        return void 0 === Ru && (Ru = xu++, Bu.set(uu, Ru)), Ru
      }

      function pu(uu) {
        let {
          piece: Ru
        } = uu;
        return "space" === Ru.kind ? (0, ru.jsx)(ru.Fragment, {
          children: Ru.text
        }) : (0, ru.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${Ru.delayMs}ms`
          },
          children: (0, ru.jsx)(Ju.c, {
            text: "icon" === Ru.kind ? `[[${Ru.icon}]]` : Ru.text
          })
        })
      }

      function Tu(uu) {
        let {
          display: Ru
        } = uu;
        const {
          selectedLanguage: yu
        } = (0, mu.E)(), Eu = (0, Qu.useMemo)((() => (0, Vu.d)((0, Vu.g)(Ru).plan.pieces)), [Ru, yu.code]);
        return (0, ru.jsxs)("div", {
          className: Ku()("Dialogue", {
            DialogueAnimateIn: !1 !== Ru.animateIn
          }),
          children: [Ru.speakerName && (0, ru.jsx)(Nu.d, {
            text: Ru.speakerName,
            className: "DialogueSpeaker"
          }), (0, ru.jsx)("p", {
            className: "DialogueLine",
            children: Eu.map(((uu, Ru) => 1 === uu.length && "space" === uu[0].kind ? uu[0].text : (0, ru.jsx)("span", {
              className: "DialogueGlue",
              children: uu.map(((uu, Ru) => (0, ru.jsx)(pu, {
                piece: uu
              }, Ru)))
            }, Ru)))
          })]
        })
      }
      const Wu = (0, Qu.memo)((function() {
        const uu = (0, Xu.g)("dialogue");
        return (0, ru.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: uu && (0, ru.jsx)(Tu, {
            display: uu
          }, Su(uu))
        })
      }))
    },
    4475: (uu, Ru, yu) => {
        yu.r(Ru), yu.d(Ru, {
          default: () => aQ
        });
        var Eu = yu(64),
          Ku = yu(1035),
          Qu = yu.n(Ku),
          mu = yu(1476),
          Ju = yu(1483),
          Nu = yu(27),
          Xu = yu(80),
          Vu = yu(4484),
          ru = yu(4499),
          Bu = yu(4507),
          xu = yu(4134),
          Su = yu(1079);
        const pu = "/textures/docs/icons";

        function Tu(uu) {
          let {
            name: Ru,
            isTinted: yu,
            className: Eu,
            style: Ku
          } = uu;
          const mu = `${pu}/${Ru}.png`;
          return yu ? (0, Su.jsxs)("span", {
            className: Qu()("DocsPixelIcon", "Tinted", Eu),
            "aria-hidden": "true",
            style: Ku,
            children: [(0, Su.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${mu}")`,
                WebkitMaskImage: `url("${mu}")`
              }
            }), (0, Su.jsx)("img", {
              src: mu,
              alt: ""
            })]
          }) : (0, Su.jsx)("img", {
            className: Qu()("DocsPixelIcon", Eu),
            src: mu,
            alt: "",
            "aria-hidden": "true",
            style: Ku
          })
        }
        const Wu = 1500;

        function ju() {
          const [uu, Ru] = (0, Eu.useState)(null);
          (0, Eu.useEffect)((() => {
            if (null === uu) return;
            const yu = setTimeout((() => {
              Ru(null)
            }), Wu);
            return () => {
              clearTimeout(yu)
            }
          }), [uu]);
          return [uu, uu => {
            (0, xu.c)(uu).then((() => {
              Ru({
                text: uu,
                failed: !1
              })
            }), (yu => {
              console.error("Could not copy to the clipboard", yu), Ru({
                text: uu,
                failed: !0
              })
            }))
          }]
        }

        function Hu(uu) {
          let {
            text: Ru,
            label: yu,
            className: Eu
          } = uu;
          const [Ku, mu] = ju(), Ju = !1 === (null === Ku || void 0 === Ku ? void 0 : Ku.failed);
          return (0, Su.jsxs)("button", {
            type: "button",
            className: Qu()("DocsCopyButton", Eu, {
              Copied: Ju
            }),
            title: `Copy ${Ru.length>40?"to clipboard":Ru}`,
            "aria-label": yu ? void 0 : `Copy ${Ru}`,
            onClick: uu => {
              uu.stopPropagation(), mu(Ru)
            },
            children: [(0, Su.jsx)(Tu, {
              name: Ju ? "check" : "copy"
            }), yu && (0, Su.jsx)("span", {
              children: Ju ? "Copied" : null !== Ku && void 0 !== Ku && Ku.failed ? "Copy failed" : yu
            })]
          })
        }
        Vu.c.registerLanguage("javascript", ru.b), Vu.c.registerLanguage("typescript", Bu.c);
        const du = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          bu = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          Cu = 24;

        function ku(uu) {
          let {
            code: Ru,
            lang: yu,
            compact: Ku = !1
          } = uu;
          const mu = (0, Eu.useMemo)((() => function(uu, Ru) {
              const yu = du[Ru];
              return yu ? Vu.c.highlight(uu, {
                language: yu
              }).value : uu.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(Ru, yu)), [Ru, yu]),
            Ju = Ru.split("\n").length,
            Nu = !Ku && Ju > Cu + 6,
            [Xu, ru] = (0, Eu.useState)(!1),
            Bu = du[yu];
          return (0, Su.jsxs)("div", {
            className: Qu()("DocsCodeBlock", {
              Compact: Ku,
              Collapsed: Nu && !Xu
            }),
            children: [!Ku && (0, Su.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, Su.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Bu ? bu[Bu] : "Text"
              }), (0, Su.jsx)(Hu, {
                text: Ru,
                label: "Copy"
              })]
            }), (0, Su.jsx)("pre", {
              children: (0, Su.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: mu
                }
              })
            }), Nu && (0, Su.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Xu,
              onClick: () => {
                ru(!Xu)
              },
              children: [(0, Su.jsx)(Tu, {
                name: Xu ? "chevron-up" : "chevron-down"
              }), Xu ? "Show less" : `Show all ${Ju} lines`]
            })]
          })
        }
        var eu = yu(4511);
        var Au = yu(4513);
        const Du = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Mu(uu) {
          const Ru = new Map;
          let yu, Eu = [],
            Ku = !1;
          const Qu = () => {
            yu && Ru.set(yu.name, yu.lines.join("\n").trimEnd())
          };
          for (const mu of uu.split("\n")) {
            const uu = mu.match(Du);
            Ku || mu.startsWith("/*") ? (Ku || (Qu(), yu = void 0), Eu.push(mu), Ku = !mu.includes("*/")) : uu ? (Qu(), yu = {
              name: uu[1],
              lines: [...Eu, mu]
            }, Eu = []) : yu && (mu.startsWith(" ") || mu.startsWith("\t") || /^[}\])|]/.test(mu)) ? yu.lines.push(mu) : yu && "" !== mu.trim() && (Qu(), yu = void 0)
          }
          return Qu(), Ru
        }

        function Iu(uu) {
          return "methods" === uu || "callbacks" === uu || "settings" === uu
        }
        const Gu = {
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
              setterSnippet: (uu, Ru) => `api.setClientOption(playerId, "${uu}", ${Ru})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (uu, Ru) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${uu}", ${Ru})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (uu, Ru) => `api.setMobSetting(mobId, "${uu}", ${Ru})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (uu, Ru) => `api.setVehicleSetting(vehicleId, "${uu}", ${Ru})`
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
          Uu = {
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

        function nu(uu) {
          return uu.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function su(uu) {
          let Ru = !1;
          return uu.split("\n").map((uu => (uu.startsWith("```") && (Ru = !Ru), !Ru && /^#{3,} /.test(uu) ? uu.slice(1) : uu))).join("\n")
        }

        function tu(uu) {
          return "readme" === uu ? "getting-started" : nu(uu)
        }
        const lu = "## Glossary of Referenced Types";
        const gu = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...Au.c.flatMap((uu => {
            const Ru = {
              id: uu.id,
              slug: tu(uu.id),
              title: uu.title,
              markdown: uu.content,
              ...Gu[uu.id]
            };
            if ("readme" === uu.id) return function(uu) {
              const Ru = uu.markdown.indexOf(lu),
                yu = uu.markdown.indexOf("\n```", Ru),
                Eu = uu.markdown.indexOf("\n```", yu + 1);
              if (-1 === Ru || -1 === yu || -1 === Eu) throw new Error(`Getting started has no "${lu}" section with a code block`);
              const Ku = uu.markdown.slice(Ru + 31, yu).trim(),
                Qu = [...Mu(uu.markdown.slice(uu.markdown.indexOf("\n", yu + 1) + 1, Eu))].map((uu => {
                  let [Ru, yu] = uu;
                  return `## ${Ru}\n\n\`\`\`ts\n${yu}\n\`\`\`\n`
                })),
                mu = uu.markdown.slice(uu.markdown.indexOf("\n", Eu + 1) + 1);
              return [{
                ...uu,
                markdown: `${uu.markdown.slice(0,Ru)}${mu}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Ku}\n\n${Qu.join("\n")}`
              }]
            }(Ru);
            if ("howTo" === uu.id) {
              const {
                parent: uu,
                guides: yu
              } = function(uu) {
                const [Ru, ...yu] = uu.markdown.split(/^(?=## )/m), Eu = [Ru], Ku = [];
                for (const mu of yu) {
                  var Qu;
                  const Ru = mu.indexOf("\n"),
                    yu = mu.slice(3, Ru).trim(),
                    Ju = mu.slice(Ru + 1);
                  if (!Ju.includes("```")) {
                    Eu.push(mu);
                    continue
                  }
                  const Nu = null !== (Qu = Uu[yu]) && void 0 !== Qu ? Qu : {
                    icon: "lightbulb",
                    summary: `How to use ${yu.toLowerCase()} in World Code.`
                  };
                  Ku.push({
                    id: `${uu.id}${yu.split(/[^A-Za-z0-9]+/).map((uu=>uu.charAt(0).toUpperCase()+uu.slice(1))).join("")}`,
                    slug: `${uu.slug}-${nu(yu)}`,
                    title: yu,
                    layout: "article",
                    sourceAnchor: (0, eu.l)(yu),
                    markdown: `# ${yu}\n\n${su(Ju)}`,
                    ...Nu
                  })
                }
                return {
                  parent: {
                    ...uu,
                    markdown: Eu.join(""),
                    childPageIds: Ku.map((uu => uu.id))
                  },
                  guides: Ku
                }
              }(Ru);
              return [uu, ...yu]
            }
            return [Ru]
          }))],
          cu = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...gu.filter((uu => void 0 !== uu.sourceAnchor)).map((uu => uu.id))]
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

        function Lu(uu) {
          return gu.find((Ru => Ru.id === uu))
        }
        const zu = new Map;

        function Fu(uu) {
          let Ru = zu.get(uu.id);
          return Ru || (Ru = (0, eu.s)(uu.markdown, "changelog" === uu.layout ? 3 : 2), zu.set(uu.id, Ru)), Ru
        }

        function wu(uu, Ru) {
          return Fu(uu).sections.some((uu => uu.heading.anchor === Ru || uu.blocks.some((uu => "heading" === uu.kind && uu.anchor === Ru))))
        }

        function Zu(uu) {
          const [Ru, ...yu] = uu.replace(/^#/, "").split("-"), Eu = gu.find((uu => uu.id === Ru));
          if (!Eu) return null;
          const Ku = yu.length > 0 ? (0, eu.l)(yu.join("-")) : "";
          for (const mu of null !== (Qu = Eu.childPageIds) && void 0 !== Qu ? Qu : []) {
            var Qu;
            const uu = Lu(mu);
            if (uu.sourceAnchor === Ku) return {
              page: uu,
              anchor: ""
            };
            if (wu(uu, Ku)) return {
              page: uu,
              anchor: Ku
            }
          }
          return {
            page: Eu,
            anchor: Ku
          }
        }
        const hu = {
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

        function Pu(uu, Ru) {
          let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Eu = Ru.slug ? `${uu}/${Ru.slug}` : uu;
          return yu ? `${Eu}#${yu}` : Eu
        }
        var iu = yu(4532);
        const Yu = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          ou = new Set(["GameApi", "Console", "_TypeOf"]),
          qu = 4;

        function Ou(uu) {
          let Ru = uu.length;
          for (; Ru > 0 && "" === uu[Ru - 1].trim();) Ru--;
          return uu.slice(0, Ru)
        }

        function vu(uu) {
          var Ru;
          const yu = Ou(uu);
          if (null === (Ru = yu.at(-1)) || void 0 === Ru || !Ru.trimEnd().endsWith("*/")) return {
            lines: yu,
            doc: ""
          };
          const Eu = yu.findLastIndex((uu => uu.startsWith("/**")));
          return -1 === Eu ? {
            lines: yu,
            doc: ""
          } : {
            lines: Ou(yu.slice(0, Eu)),
            doc: yu.slice(Eu).join("\n")
          }
        }

        function au(uu) {
          var Ru;
          const yu = uu.split("\n"),
            Eu = yu.flatMap(((uu, Ru) => Yu.test(uu) ? [Ru] : []));
          let Ku = vu(yu.slice(0, null !== (Ru = Eu[0]) && void 0 !== Ru ? Ru : yu.length)).doc;
          return Eu.map(((uu, Ru) => {
            var Qu;
            const mu = vu(yu.slice(uu, null !== (Qu = Eu[Ru + 1]) && void 0 !== Qu ? Qu : yu.length)),
              Ju = {
                name: yu[uu].match(Yu)[1],
                doc: Ku,
                lines: mu.lines
              };
            return Ku = mu.doc, Ju
          }))
        }

        function fu(uu) {
          var Ru;
          const yu = uu.match(/^readonly \[([\s\S]*)\]$/);
          return yu ? null !== (Ru = yu[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Ru ? Ru : [] : null
        }

        function uR(uu) {
          if (!uu.startsWith("{") || !uu.endsWith("}")) return null;
          const Ru = {
              keys: [],
              values: []
            },
            yu = uu => {
              const yu = uu.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              yu && (Ru.keys.push(yu[1].startsWith('"') ? yu[1] : `"${yu[1]}"`), Ru.values.push(yu[2].trim()))
            };
          let Eu = 0,
            Ku = "";
          for (const Qu of uu.slice(1, -1)) "{[(".includes(Qu) ? Eu++ : "}])".includes(Qu) && Eu--, ";" === Qu && 0 === Eu ? (yu(Ku), Ku = "") : Ku += Qu;
          return yu(Ku), Ru
        }

        function RR(uu) {
          return uu.length > qu ? `\n\t| ${uu.join("\n\t| ")}` : uu.join(" | ")
        }

        function yR(uu, Ru) {
          const yu = function(uu, Ru) {
            return uu.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((uu, yu) => {
              var Eu;
              const Ku = null === (Eu = Ru.get(yu)) || void 0 === Eu ? void 0 : Eu.object;
              return Ku ? RR(Ku.values) : uu
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((uu, yu) => {
              var Eu, Ku;
              const Qu = null === (Eu = Ru.get(yu)) || void 0 === Eu || null === (Ku = Eu.object) || void 0 === Ku ? void 0 : Ku.values.map(fu);
              return null !== Qu && void 0 !== Qu && Qu.every((uu => null !== uu)) ? RR([...new Set(Qu.flat())]) : uu
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((uu, yu) => {
              var Eu;
              const Ku = null === (Eu = Ru.get(yu)) || void 0 === Eu ? void 0 : Eu.members;
              return Ku ? RR(Ku) : uu
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((uu, yu) => {
              var Eu;
              const Ku = null === (Eu = Ru.get(yu)) || void 0 === Eu ? void 0 : Eu.object;
              return Ku ? RR(Ku.keys) : uu
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((uu, yu) => {
              var Eu, Ku;
              return null !== (Eu = null === (Ku = Ru.get(yu)) || void 0 === Ku ? void 0 : Ku.text) && void 0 !== Eu ? Eu : uu
            }))
          }(uu.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), Ru);
          return [uu.doc, yu].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function ER(uu) {
          const Ru = au(uu),
            yu = function(uu) {
              const Ru = new Map,
                yu = uu.find((uu => "_TypeOf" === uu.name));
              let Eu = null;
              const Ku = () => {
                if (Eu) {
                  const uu = Eu.lines.join("\n");
                  Ru.set(Eu.name, {
                    text: uu,
                    members: fu(uu),
                    object: uR(uu)
                  })
                }
              };
              for (const Qu of yu.lines.slice(1, -1)) {
                const uu = Qu.match(/^\t([\w$]+): (.+)$/);
                uu ? (Ku(), Eu = {
                  name: uu[1],
                  lines: [uu[2]]
                }) : Eu && Eu.lines.push(Qu.replace(/^\t/, ""))
              }
              return Ku(), Ru
            }(Ru),
            Eu = new Map;
          for (const Ku of Ru) ou.has(Ku.name) || Eu.has(Ku.name) || Eu.set(Ku.name, yR(Ku, yu));
          return Eu
        }
        let KR, QR, mR;

        function JR() {
          return QR ??= function(uu) {
            const Ru = au(uu).find((uu => "GameApi" === uu.name)),
              yu = new Map,
              Eu = Ru.lines;
            for (let Qu = 0; Qu < Eu.length; Qu++) {
              var Ku;
              if (!Eu[Qu].trimStart().startsWith("/**")) continue;
              const uu = Qu;
              for (; Qu < Eu.length && !Eu[Qu].includes("*/");) Qu++;
              const Ru = null === (Ku = Eu[Qu + 1]) || void 0 === Ku ? void 0 : Ku.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!Ru) continue;
              let mu = null;
              const Ju = [];
              let Nu = "description",
                Xu = !1;
              for (const yu of Eu.slice(uu, Qu + 1).join("\n").split("\n").map((uu => uu.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const uu = yu.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                uu ? (mu = uu[1].trim(), Nu = "deprecation") : yu.startsWith("@") ? (Nu = "otherTag", Xu = !0) : "" === yu.trim() ? Xu || (Nu = "description", Ju.push(yu)) : "deprecation" !== Nu || /^[A-Z]/.test(yu.trim()) ? "otherTag" !== Nu && (Nu = "description", Ju.push(yu)) : mu = `${mu} ${yu.trim()}`.trim()
              }
              yu.set(Ru[1], {
                deprecation: mu,
                description: Ju.join("\n").trim()
              })
            }
            return yu
          }(iu.default), QR
        }

        function NR() {
          if (!mR) {
            mR = new Map;
            for (const uu of gu) {
              const Ru = (0, eu.p)(Fu(uu)).flatMap((uu => uu.blocks));
              for (const uu of (0, eu.e)(Ru))
                if ("ts" === uu.lang || "typescript" === uu.lang)
                  for (const [Ru, yu] of Mu(uu.code)) mR.set(Ru, yu)
            }
            for (const [uu, Ru] of(KR ??= ER(iu.default), KR)) mR.has(uu) || mR.set(uu, Ru)
          }
          return mR
        }
        const XR = {
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
        let VR;

        function rR() {
          if (!VR) {
            VR = new Map;
            for (const uu of gu)
              if (Iu(uu.layout))
                for (const Ru of Fu(uu).sections) VR.has(Ru.heading.text) || VR.set(Ru.heading.text, {
                  pageId: uu.id,
                  anchor: Ru.heading.anchor
                })
          }
          return VR
        }

        function BR(uu) {
          const Ru = uu.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return Ru ? rR().get(Ru[1]) : void 0
        }
        const xR = (0, Eu.createContext)("/docs"),
          SR = (0, Eu.createContext)(null),
          pR = (0, Eu.createContext)(!1),
          TR = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function WR(uu) {
          const Ru = uu.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return Ru ? Ru[1] : null
        }

        function jR(uu) {
          let {
            colour: Ru
          } = uu;
          return (0, Su.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: Ru
            },
            "aria-hidden": "true"
          })
        }

        function HR(uu) {
          const Ru = [];
          let yu = 0;
          for (const Eu of uu.matchAll(TR)) Ru.push(uu.slice(yu, Eu.index), (0, Su.jsx)(jR, {
            colour: Eu[0]
          }), Eu[0]), yu = Eu.index + Eu[0].length;
          return Ru.push(uu.slice(yu)), Ru
        }

        function dR(uu) {
          let {
            href: Ru,
            children: yu
          } = uu;
          const Ku = (0, Eu.useContext)(xR);
          if (Ru.startsWith("#")) {
            const uu = Zu(Ru);
            if (uu) return (0, Su.jsx)(mu.c, {
              to: Pu(Ku, uu.page, uu.anchor),
              children: (0, Su.jsx)(pR.Provider, {
                value: !0,
                children: yu
              })
            })
          }
          return (0, Su.jsx)("a", {
            href: Ru,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, Su.jsx)(pR.Provider, {
              value: !0,
              children: yu
            })
          })
        }

        function bR(uu) {
          let {
            code: Ru
          } = uu;
          const yu = (0, Eu.useContext)(xR);
          if ((0, Eu.useContext)(pR)) return (0, Su.jsx)("code", {
            className: "DocsInlineCode",
            children: Ru
          });
          if (NR().has(Ru)) return (0, Su.jsx)(AR, {
            type: Ru
          });
          const Ku = BR(Ru);
          if (Ku) return (0, Su.jsx)(mu.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: Pu(yu, Lu(Ku.pageId), Ku.anchor),
            children: Ru
          });
          const Qu = WR(Ru);
          return (0, Su.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Qu && (0, Su.jsx)(jR, {
              colour: Qu
            }), Ru]
          })
        }

        function CR(uu) {
          let {
            text: Ru
          } = uu;
          const yu = [];
          let Ku = 0;
          for (const Eu of Ru.matchAll(eu.c)) {
            Eu.index > Ku && yu.push(...HR(Ru.slice(Ku, Eu.index)));
            const [, uu, Qu, mu, Ju, Nu] = Eu;
            uu ? yu.push((0, Su.jsx)(bR, {
              code: (0, eu.h)(uu, Qu)
            })) : mu ? yu.push((0, Su.jsx)("strong", {
              children: (0, Su.jsx)(CR, {
                text: mu
              })
            })) : yu.push((0, Su.jsx)(dR, {
              href: Nu,
              children: (0, Su.jsx)(CR, {
                text: Ju
              })
            })), Ku = Eu.index + Eu[0].length
          }
          return Ku < Ru.length && yu.push(...HR(Ru.slice(Ku))), (0, Su.jsx)(Su.Fragment, {
            children: yu.map(((uu, Ru) => (0, Su.jsx)(Eu.Fragment, {
              children: uu
            }, Ru)))
          })
        }
        const kR = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          eR = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function AR(uu) {
          let {
            type: Ru
          } = uu;
          const yu = NR(),
            Ku = [];
          for (const Eu of Ru.trim().matchAll(kR)) {
            const [uu, Ru, Qu, mu, Ju] = Eu;
            Ru ? Ku.push((0, Su.jsx)("span", {
              className: "DocsTypeString",
              children: uu
            })) : Qu && yu.has(Qu) ? Ku.push((0, Su.jsx)(UR, {
              name: Qu,
              definition: yu.get(Qu)
            })) : Qu ? Ku.push((0, Su.jsx)("span", {
              className: eR.has(Qu) ? "DocsTypeKeyword" : "DocsTypeName",
              children: uu
            })) : mu ? Ku.push((0, Su.jsx)("span", {
              className: "DocsTypeNumber",
              children: uu
            })) : Ju ? Ku.push(" ") : Ku.push((0, Su.jsx)("span", {
              className: "DocsTypePunctuation",
              children: uu
            }))
          }
          return (0, Su.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Ku.map(((uu, Ru) => (0, Su.jsx)(Eu.Fragment, {
              children: uu
            }, Ru)))
          })
        }
        const DR = 480,
          MR = 6,
          IR = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let GR = 0;

        function UR(uu) {
          let {
            name: Ru,
            definition: yu
          } = uu;
          const Ku = (0, Eu.useContext)(xR),
            Qu = XR[Ru],
            Ju = (0, Eu.useRef)(null),
            Nu = (0, Eu.useRef)(null),
            Vu = (0, Eu.useRef)(null),
            [ru, Bu] = (0, Eu.useState)(!1),
            [xu, pu] = (0, Eu.useState)(null),
            Wu = (0, Eu.useRef)(),
            ju = (0, Eu.useContext)(SR),
            [Hu] = (0, Eu.useState)((() => "DocsTypePopover-" + GR++)),
            du = () => {
              clearTimeout(Wu.current), Bu(!0)
            },
            bu = () => {
              clearTimeout(Wu.current), Wu.current = setTimeout((() => {
                Bu(!1)
              }), 120)
            };
          return (0, Eu.useEffect)((() => {
            if (!ru) return;
            const uu = uu => {
              if ("Escape" === uu.key) {
                var Ru, yu;
                if (null !== (Ru = Nu.current) && void 0 !== Ru && Ru.contains(document.activeElement)) null === (yu = Ju.current) || void 0 === yu || yu.focus();
                Bu(!1)
              }
            };
            return document.addEventListener("keydown", uu), () => {
              document.removeEventListener("keydown", uu)
            }
          }), [ru]), (0, Eu.useEffect)((() => () => {
            clearTimeout(Wu.current)
          }), []), (0, Eu.useLayoutEffect)((() => {
            if (!ru || !Ju.current || !Nu.current) return void pu(null);
            const uu = Ju.current.getBoundingClientRect(),
              Ru = Nu.current.offsetHeight,
              yu = Math.min(DR, window.innerWidth - 32),
              Eu = Math.min(Math.max(16, uu.left), window.innerWidth - yu - 16),
              Ku = uu.bottom + MR + Ru < window.innerHeight;
            pu({
              left: Eu,
              top: Ku ? uu.bottom + MR : Math.max(16, uu.top - MR - Ru)
            })
          }), [ru]), (0, Su.jsxs)(Su.Fragment, {
            children: [(0, Su.jsx)("button", {
              type: "button",
              ref: Ju,
              className: "DocsTypeLink",
              "aria-expanded": ru,
              "aria-describedby": ru ? Hu : void 0,
              onMouseEnter: du,
              onMouseLeave: bu,
              onFocus: du,
              onBlur: bu,
              onKeyDown: uu => {
                "Tab" === uu.key && !uu.shiftKey && Vu.current && (uu.preventDefault(), Vu.current.focus())
              },
              onClick: du,
              children: Ru
            }), ru && (0, Xu.createPortal)((0, Su.jsxs)("span", {
              ref: Nu,
              id: Hu,
              className: "DocsTypePopover",
              role: "tooltip",
              style: xu ? {
                left: xu.left,
                top: xu.top,
                maxWidth: DR
              } : {
                visibility: "hidden"
              },
              onMouseEnter: du,
              onMouseLeave: bu,
              onFocus: du,
              onBlur: bu,
              children: [(0, Su.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, Su.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: Ru
                }), Qu && (0, Su.jsxs)(mu.c, {
                  ref: Vu,
                  className: "DocsTypePopoverLink",
                  to: Pu(Ku, Lu(Qu)),
                  onClick: () => {
                    Bu(!1)
                  },
                  onKeyDown: uu => {
                    if ("Tab" === uu.key) {
                      var Ru;
                      if (uu.preventDefault(), uu.shiftKey || !Ju.current || ! function(uu, Ru) {
                          const yu = [...document.querySelectorAll(IR)],
                            Eu = yu.slice(yu.indexOf(uu) + 1).find((uu => uu.getClientRects().length > 0 && !(null !== Ru && void 0 !== Ru && Ru.contains(uu))));
                          return null === Eu || void 0 === Eu || Eu.focus(), void 0 !== Eu
                        }(Ju.current, Nu.current)) null === (Ru = Ju.current) || void 0 === Ru || Ru.focus();
                      uu.shiftKey || Bu(!1)
                    }
                  },
                  children: [Lu(Qu).title, (0, Su.jsx)(Tu, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, Su.jsx)(ku, {
                lang: "ts",
                code: yu,
                compact: !0
              })]
            }), null !== ju && void 0 !== ju ? ju : document.body)]
          })
        }
        var nR = yu(212),
          sR = yu(4540),
          tR = yu(4544),
          lR = yu(4546);
        const gR = {
          progressBar: {
            nu: 30,
            tu: .075,
            lu: 5,
            gu: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            zu: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            wu: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Zu: !0,
            scale: 3,
            rotation: 15,
            Pu: !1
          },
          gravityBar: {
            nu: 30,
            Yu: .25,
            ou: 3,
            qu: .8,
            gravity: 1,
            Ou: 1.5,
            vu: 8,
            au: 4,
            gu: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            uR: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            yR: 5,
            ER: 1200,
            KR: .15,
            QR: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var cR = yu(330),
          LR = yu(1923);

        function zR(uu) {
          return uu.startsWith("fa-")
        }
        const FR = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          wR = {
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

        function ZR(uu) {
          return "string" === typeof uu ? "text" : "entityName" in uu || "translationKey" in uu ? "other" : (0, cR.wb)(uu) ? "progressBar" : (0, cR.tb)(uu) ? "keyBinding" : "icon" in uu ? "icon" : "str" in uu && "string" === typeof uu.str ? "text" : "other"
        }
        const hR = [{
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
          PR = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...hR],
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
                options: LR.h
              },
              isRequired: !0
            }, ...hR],
            other: []
          };

        function iR(uu) {
          return "string" === typeof uu ? {
            str: uu
          } : uu
        }

        function YR(uu, Ru) {
          let yu = iR(uu);
          for (const Eu of Ru) yu = yu && "object" === typeof yu ? yu[Eu] : void 0;
          return yu
        }

        function oR(uu, Ru, yu) {
          const Eu = (uu, Ku) => {
            var Qu;
            const mu = Ru[Ku],
              Ju = {
                ...uu
              };
            if (Ku === Ru.length - 1) return void 0 === yu ? delete Ju[mu] : Ju[mu] = yu, Ju;
            const Nu = Eu(null !== (Qu = uu[mu]) && void 0 !== Qu ? Qu : {}, Ku + 1);
            return 0 === Object.keys(Nu).length ? delete Ju[mu] : Ju[mu] = Nu, Ju
          };
          return function(uu) {
            const Ru = Object.keys(uu);
            return "string" === typeof uu.str && 1 === Ru.length ? uu.str : uu
          }(Eu(iR(uu), 0))
        }

        function qR(uu, Ru) {
          const yu = ZR(uu),
            Eu = PR[yu].find((uu => uu.path.join(".") === Ru.join("."))),
            Ku = null !== Eu && void 0 !== Eu && Eu.isRequired && "other" !== yu ? YR(wR[yu], Ru) : void 0;
          return oR(uu, Ru, Ku)
        }

        function OR(uu) {
          switch (ZR(uu)) {
            case "text":
              return String(YR(uu, ["str"]));
            case "icon":
              return String(YR(uu, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(YR(uu,["progress"])))}%`;
            case "keyBinding":
              return String(YR(uu, ["action"]));
            case "other":
              return JSON.stringify(uu)
          }
        }
        const vR = /^[A-Za-z_$][\w$]*$/;

        function aR(uu) {
          if (Array.isArray(uu)) return `[${uu.map(aR).join(", ")}]`;
          if (uu && "object" === typeof uu) {
            const Ru = Object.entries(uu).map((uu => {
              let [Ru, yu] = uu;
              return `${vR.test(Ru)?Ru:JSON.stringify(Ru)}: ${aR(yu)}`
            }));
            return 0 === Ru.length ? "{}" : `{ ${Ru.join(", ")} }`
          }
          return JSON.stringify(uu)
        }

        function fR(uu) {
          const Ru = uu.map(aR),
            yu = `[${Ru.join(", ")}]`;
          return yu.length <= 60 ? yu : `[\n${Ru.map((uu=>`    ${uu},`)).join("\n")}\n]`
        }
        const uy = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Ry(uu) {
          let Ru = "";
          for (let Ku = 0; Ku < uu.length; Ku++) {
            const Qu = uu[Ku];
            if ("\\" === Qu) {
              var yu;
              const Eu = null !== (yu = uu[Ku + 1]) && void 0 !== yu ? yu : "";
              Ru += "'" === Eu ? "'" : Qu + Eu, Ku++
            } else if ('"' === Qu) Ru += '\\"';
            else {
              var Eu;
              Ru += null !== (Eu = uy[Qu]) && void 0 !== Eu ? Eu : Qu
            }
          }
          return `"${Ru}"`
        }

        function yy(uu) {
          if ("string" === typeof uu) return !0;
          if (!uu || "object" !== typeof uu || Array.isArray(uu)) return !1;
          const Ru = uu;
          return "ProgressBar" === Ru.type ? "number" === typeof Ru.progress : "StyledKeyBinding" === Ru.type ? LR.h.includes(Ru.action) : "string" === typeof Ru.icon || "string" === typeof Ru.str || "string" === typeof Ru.entityName || "string" === typeof Ru.translationKey
        }

        function Ey(uu) {
          let Ru;
          try {
            Ru = function(uu) {
              let Ru = "",
                yu = "",
                Eu = 0;
              const Ku = () => {
                Ru += yu.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), yu = ""
              };
              for (; Eu < uu.length;) {
                const Qu = uu.slice(Eu).search(/["'`]|\/\//);
                if (-1 === Qu) {
                  yu += uu.slice(Eu);
                  break
                }
                yu += uu.slice(Eu, Eu + Qu);
                const mu = Eu + Qu,
                  Ju = uu[mu];
                if ("/" === Ju) {
                  const Ru = uu.indexOf("\n", mu);
                  Eu = -1 === Ru ? uu.length : Ru;
                  continue
                }
                if (Ku(), "`" === Ju) throw new Error("Use quotes rather than template strings.");
                let Nu = mu + 1;
                for (; Nu < uu.length && uu[Nu] !== Ju;) Nu += "\\" === uu[Nu] ? 2 : 1;
                if (Nu >= uu.length) throw new Error("A string is missing its closing quote.");
                const Xu = uu.slice(mu + 1, Nu);
                Ru += Ry(Xu), Eu = Nu + 1
              }
              return Ku(), JSON.parse(Ru)
            }(uu.trim())
          } catch (Eu) {
            return {
              parts: null,
              error: Eu instanceof SyntaxError ? "This isn't a valid array yet." : Eu.message
            }
          }
          if (!Array.isArray(Ru)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const yu = Ru.findIndex((uu => !yy(uu)));
          return -1 !== yu ? {
            parts: null,
            error: `Part ${yu+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: Ru,
            error: null
          }
        }
        const Ky = 1 / nR.f.clientTicksPerSecond,
          Qy = 700,
          my = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Jy = {
            progressBar: gR.progressBar.zu,
            timedClick: gR.timedClick.icon,
            gravityBar: gR.gravityBar.icon,
            precisionBar: gR.precisionBar.icon,
            rhythmClick: gR.rhythmClick.icon
          };

        function Ny(uu) {
          let {
            type: Ru
          } = uu;
          const [yu, Ku] = (0, Eu.useState)("ready"), [mu, Ju] = (0, Eu.useState)(1), [Nu, Xu] = (0, Eu.useState)(!0), Vu = (0, Eu.useRef)(null), ru = (0, Eu.useRef)(null), Bu = (0, Eu.useRef)(null), xu = (0, Eu.useRef)(new Set), pu = (0, Eu.useRef)(!1), Wu = Jy[Ru], ju = (0, Eu.useMemo)((() => ({
            getState: () => {
              var uu, Ru;
              return null !== (uu = null === (Ru = Bu.current) || void 0 === Ru ? void 0 : Ru.getState()) && void 0 !== uu ? uu : my
            },
            onFrame: uu => (xu.current.add(uu), () => {
              xu.current.delete(uu)
            })
          })), []);
          (0, Eu.useEffect)((() => {
            const uu = Vu.current,
              Ru = ru.current;
            if (!uu || !Ru) return;
            const yu = new ResizeObserver((() => {
              Ju(uu.clientWidth / Math.max(1, Ru.offsetWidth))
            }));
            return yu.observe(uu), () => {
              yu.disconnect()
            }
          }), []), (0, Eu.useEffect)((() => {
            var uu;
            if ("playing" !== yu) return;
            let Eu = !1;
            const Qu = new lR.h[Ru](gR[Ru], (uu => {
              Eu = !0, Xu(!1), Ku(uu ? "succeeded" : "failed")
            }), (() => {}));
            Bu.current = Qu;
            let mu = 0,
              Ju = performance.now(),
              Nu = requestAnimationFrame((function uu(Ru) {
                for (mu += Math.min(.25, (Ru - Ju) / 1e3), Ju = Ru; mu >= Ky && !Eu;) mu -= Ky, Qu.handleTick(Ky);
                for (const yu of xu.current) yu();
                Eu || (Nu = requestAnimationFrame(uu))
              }));
            return null === (uu = Vu.current) || void 0 === uu || uu.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Nu), Qu.tearDown(), Bu.current = null, pu.current = !1
            }
          }), [yu, Ru]), (0, Eu.useEffect)((() => {
            if (Nu) return;
            const uu = setTimeout((() => {
              Xu(!0)
            }), Qy);
            return () => {
              clearTimeout(uu)
            }
          }), [Nu]);
          const Hu = uu => {
            var Ru;
            "playing" === yu && pu.current !== uu && (pu.current = uu, null === (Ru = Bu.current) || void 0 === Ru || Ru.handleMouseInput(uu))
          };
          return (0, Su.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, Su.jsxs)("div", {
              ref: Vu,
              className: Qu()("DocsQteStage", {
                Playing: "playing" === yu
              }),
              tabIndex: "playing" === yu ? 0 : -1,
              role: "playing" === yu ? "button" : void 0,
              "aria-label": "playing" === yu ? `${Ru} quick time event: click or press Space` : void 0,
              onPointerDown: uu => {
                0 === uu.button && Hu(!0)
              },
              onPointerUp: () => {
                Hu(!1)
              },
              onPointerLeave: () => {
                Hu(!1)
              },
              onPointerCancel: () => {
                Hu(!1)
              },
              onKeyDown: uu => {
                "playing" !== yu || " " !== uu.key && "Enter" !== uu.key || (uu.preventDefault(), Hu(!0))
              },
              onKeyUp: uu => {
                "playing" !== yu || " " !== uu.key && "Enter" !== uu.key || Hu(!1)
              },
              children: [(0, Su.jsx)("div", {
                ref: ru,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${mu})`
                },
                children: "playing" === yu && (0, Su.jsx)(tR.b.Provider, {
                  value: ju,
                  children: (0, Su.jsx)(sR.b, {
                    qte: {
                      type: Ru,
                      parameters: gR[Ru]
                    }
                  })
                })
              }), "playing" !== yu && (0, Su.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== yu && (0, Su.jsxs)("div", {
                  className: Qu()("DocsQteResult", "succeeded" === yu ? "Succeeded" : "Failed"),
                  children: [(0, Su.jsx)(Tu, {
                    name: "succeeded" === yu ? "check" : "cross",
                    isTinted: !0
                  }), (0, Su.jsx)("span", {
                    children: "succeeded" === yu ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, Su.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Nu,
                  onClick: () => {
                    Ku("playing")
                  },
                  children: [(0, Su.jsx)(Tu, {
                    name: "ready" === yu ? "play" : "replay"
                  }), (0, Su.jsx)("span", {
                    children: "ready" === yu ? `Try ${Ru}` : "Play again"
                  })]
                })]
              })]
            }), Wu && !zR(Wu) && (0, Su.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, Su.jsx)("code", {
                children: Wu
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Xy(uu) {
          let {
            level: Ru,
            text: yu,
            anchor: Eu,
            className: Ku
          } = uu;
          const mu = `h${Math.min(Ru,6)}`;
          return (0, Su.jsxs)(mu, {
                id: Eu,
                className: Qu()("DocsHeading", Ku),
                children: [(0, Su.jsx)(CR, {
                      text: yu
                    }), (0, Su.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Eu}`,
                        "aria-label": `Link to ${yu.replace(/`/g,"")}`,children:"#"})]})}function Vy(uu){let{items:Ru,ordered:yu}=uu;const Eu=yu?"ol":"ul";return(0,Su.jsx)(Eu,{className:"DocsList",children:Ru.map(((uu,Ru)=>(0,Su.jsxs)("li",{children:[(0,Su.jsx)(CR,{text:uu.text}),uu.children.length>0&&(0,Su.jsx)(Vy,{items:uu.children,ordered:yu})]},Ru)))})}function ry(uu){const Ru=uu[0],yu="paragraph"===(null===Ru||void 0===Ru?void 0:Ru.kind)?Ru.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(yu)?"warning":/^\*\*(tip|prefer)/.test(yu)?"tip":"note"}function By(uu){let{block:Ru}=uu;switch(Ru.kind){case"heading":return(0,Su.jsx)(Xy,{level:Ru.level,text:Ru.text,anchor:Ru.anchor});case"paragraph":return(0,Su.jsx)("p",{children:(0,Su.jsx)(CR,{text:Ru.text})});case"code":{const uu="ts"===Ru.lang?function(uu){const Ru=uu.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return Ru&&Object.hasOwn(gR,Ru[1])?Ru[1]:null}(Ru.code):null;return(0,Su.jsxs)(Su.Fragment,{children:[(0,Su.jsx)(ku,{code:Ru.code,lang:Ru.lang}),uu&&(0,Su.jsx)(Ny,{type:uu})]})}case"table":return(0,Su.jsx)("div",{className:"DocsTableScroll",children:(0,Su.jsxs)("table",{className:"DocsTable",children:[(0,Su.jsx)("thead",{children:(0,Su.jsx)("tr",{children:Ru.header.map(((uu,Ru)=>(0,Su.jsx)("th",{children:(0,Su.jsx)(CR,{text:uu})},Ru)))})}),(0,Su.jsx)("tbody",{children:Ru.rows.map(((uu,Ru)=>(0,Su.jsx)("tr",{children:uu.map(((uu,Ru)=>(0,Su.jsx)("td",{children:(0,Su.jsx)(CR,{text:uu})},Ru)))},Ru)))})]})});case"list":return(0,Su.jsx)(Vy,{items:Ru.items,ordered:Ru.ordered});case"quote":return(0,Su.jsx)("aside",{className:Qu()("DocsCallout",ry(Ru.blocks)),children:(0,Su.jsx)(xy,{blocks:Ru.blocks})});case"rule":return(0,Su.jsx)("hr",{className:"DocsRule"})}}function xy(uu){let{blocks:Ru}=uu;return(0,Su.jsx)(Su.Fragment,{children:Ru.map(((uu,Ru)=>(0,Su.jsx)(By,{block:uu},Ru)))})}var Sy=yu(4518),py=yu(4523);function Ty(uu){return"blocks"===uu||"items"===uu}const Wy=new Map;function jy(uu){let Ru=Wy.get(uu);return Ru||(Ru=function(uu){const Ru={entries:[],legend:[],notes:[],examples:[]};let yu=!1;for(const Qu of uu.split(/\r?\n/).slice(1)){if(Qu.startsWith("#")){const uu=Qu.replace(/^# ?/,""),Eu=uu.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Eu?Ru.legend.push({code:Eu[1],meaning:Eu[2],usage:Eu[3].trim()}):/^Examples:/.test(uu.trim())?yu=!0:yu&&uu.trim()?Ru.examples.push(uu.trim()):uu.trim()&&!/^\s/.test(uu)&&Ru.notes.push(uu.trim());continue}const uu=Qu.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Eu,Ku;uu&&Ru.entries.push({name:uu[1],variants:null!==(Eu=null===(Ku=uu[2])||void 0===Ku?void 0:Ku.split(","))&&void 0!==Eu?Eu:[]})}return Ru}("blocks"===uu?Sy:py),Wy.set(uu,Ru)),Ru}function Hy(uu){let{className:Ru,value:yu,placeholder:Eu,label:Ku,onChange:Qu,count:mu,children:Ju}=uu;return(0,Su.jsxs)("div",{className:Ru,children:[(0,Su.jsx)(Tu,{name:"magnifying-glass"}),(0,Su.jsx)("input",{type:"search",value:yu,placeholder:Eu,"aria-label":Ku,onChange:uu=>{Qu(uu.target.value)}}),Ju,mu&&(0,Su.jsxs)("span",{className:"DocsFilterCount",children:[mu.visible," of ",mu.total]})]})}var dy=yu(1043);function by(uu){const Ru=uu.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return Ru?Ru[2]:null}function Cy(uu){return"paragraph"===uu.kind&&""===uu.text.trim()}function ky(uu){const Ru={name:uu.heading.text,description:[],params:[],returns:null};let yu="description";for(const Ku of uu.blocks)if(!Cy(Ku))if("heading"===Ku.kind&&/^Parameters:?$/.test(Ku.text))yu="params";else if("heading"===Ku.kind&&/^Returns:?$/.test(Ku.text))yu="returns",Ru.returns={type:"",description:[]};else if("params"!==yu||"table"!==Ku.kind){if("returns"===yu&&"paragraph"===Ku.kind&&""===Ru.returns.type){const uu=by(Ku.text);if(null!==uu){Ru.returns.type=uu.replaceAll("\\|","|");continue}}"returns"===yu?Ru.returns.description.push(Ku):Ru.description.push(Ku)}else for(const[uu,yu,Qu]of Ku.rows){var Eu;Ru.params.push({name:uu,type:null!==(Eu=by(yu))&&void 0!==Eu?Eu:yu,description:null!==Qu&&void 0!==Qu?Qu:""})}return Ru}const ey=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function Ay(uu){return uu.filter((uu=>!Cy(uu)))}const Dy=/^[\w][\w .'&!:()-]*$/,My=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Iy(uu){var Ru;if("code"===uu.kind&&"text"===uu.lang){const Ru=uu.code.split("\n").map((uu=>uu.trim())).filter(Boolean);return Ru.length>0&&Ru.every((uu=>Dy.test(uu)))?Ru.map((uu=>({name:uu}))):null}return"paragraph"===uu.kind&&My.test(uu.text.trim())?[...uu.text.matchAll(/`([ ^ `]+)` / g)].flatMap((uu => uu[1].split(/,\s*/).map((uu => ({
                              name: uu.trim()
                            }))))): "table" === uu.kind && null !== (Ru = uu.header[0]) && void 0 !== Ru && Ru.startsWith("Song") ? uu.rows.map((uu => {
                              let [Ru, yu] = uu;
                              return {
                                name: Ru.replace(/`/g, ""),
                                caption: yu
                              }
                            })) : null
                          }

                          function Gy(uu) {
                            const Ru = [];
                            for (const yu of uu) {
                              const uu = Iy(yu),
                                Eu = Ru.at(-1),
                                Ku = "table" === yu.kind;
                              uu ? "names" === (null === Eu || void 0 === Eu ? void 0 : Eu.kind) && Eu.isSongs === Ku ? Eu.names.push(...uu) : Ru.push({
                                kind: "names",
                                names: uu,
                                isSongs: Ku
                              }) : Ru.push({
                                kind: "block",
                                block: yu
                              })
                            }
                            return Ru
                          }
                          const Uy = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function ny(uu, Ru) {
                            return `${Uy[uu]}-${(0,eu.l)(Ru)}`
                          }
                          const sy = new WeakMap;

                          function ty(uu, Ru, yu) {
                            let Eu = sy.get(Ru);
                            if (!Eu) {
                              Eu = new Map;
                              const yu = new Set;
                              for (const Ku of (0, eu.p)(Ru)) {
                                const Ru = Gy(Ay(Ku.blocks)).map((Ru => {
                                  if ("block" === Ru.kind) return Ru;
                                  return {
                                    kind: "names",
                                    names: Ru.names.map((Ru => {
                                      var Eu, Qu;
                                      const mu = ny(uu, Ru.name);
                                      let Ju = mu;
                                      for (let uu = 2; yu.has(Ju); uu++) Ju = `${mu}-${uu}`;
                                      return yu.add(Ju), {
                                        ...Ru,
                                        anchor: Ju,
                                        heading: null !== (Eu = null === (Qu = Ku.heading) || void 0 === Qu ? void 0 : Qu.text) && void 0 !== Eu ? Eu : ""
                                      }
                                    })),
                                    isSongs: Ru.isSongs
                                  }
                                }));
                                Eu.set(Ku.blocks, Ru)
                              }
                              sy.set(Ru, Eu)
                            }
                            const Ku = Eu.get(yu);
                            if (!Ku) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Ku
                          }
                          const ly = "/textures/docs/skinPreviews",
                            gy = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var cy = yu(4037),
                            Ly = yu(4053);

                          function zy(uu) {
                            return Object.hasOwn(cy.d, uu) ? cy.d[uu] : null
                          }
                          const Fy = {
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
                            blendMode: Ly.g.Standard
                          };

                          function wy(uu, Ru, yu) {
                            return Ru + (yu - Ru) * uu()
                          }

                          function Zy(uu, Ru, yu) {
                            return uu + (Ru - uu) * yu
                          }

                          function hy(uu) {
                            return uu.length > 0 && "timeFraction" in uu[0]
                          }

                          function Py(uu, Ru) {
                            if (0 === uu.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!hy(uu.colorGradients)) {
                              const yu = uu.colorGradients,
                                {
                                  color: Eu
                                } = yu[Math.floor(Ru() * yu.length) % yu.length];
                              return [{
                                at: 0,
                                colour: [Eu[0] / 255, Eu[1] / 255, Eu[2] / 255, 1]
                              }]
                            }
                            return [...uu.colorGradients].sort(((uu, Ru) => uu.timeFraction - Ru.timeFraction)).map((uu => {
                              var yu, Eu, Ku;
                              const Qu = uu.minColor,
                                mu = null !== (yu = uu.maxColor) && void 0 !== yu ? yu : Qu,
                                Ju = Ru(),
                                Nu = [Zy(Qu[0], mu[0], Ju) / 255, Zy(Qu[1], mu[1], Ju) / 255, Zy(Qu[2], mu[2], Ju) / 255, Zy(null !== (Eu = Qu[3]) && void 0 !== Eu ? Eu : 1, null !== (Ku = mu[3]) && void 0 !== Ku ? Ku : 1, Ju)];
                              return {
                                at: uu.timeFraction,
                                colour: Nu
                              }
                            }))
                          }

                          function iy(uu, Ru, yu, Eu) {
                            const Ku = wy(Eu, uu.minEmitPower, uu.maxEmitPower),
                              Qu = Ru => wy(Eu, Math.min(uu.dir1[Ru], uu.dir2[Ru]), Math.max(uu.dir1[Ru], uu.dir2[Ru])) * Ku,
                              mu = [...uu.velocityGradients].sort(((uu, Ru) => uu.timeFraction - Ru.timeFraction)).map((uu => ({
                                at: uu.timeFraction,
                                factor: wy(Eu, uu.factor, uu.factor2)
                              })));
                            return {
                              pos: [wy(Eu, Ru[0], yu[0]), wy(Eu, Ru[1], yu[1]), wy(Eu, Ru[2], yu[2])],
                              dir: [Qu(0), Qu(1), Qu(2)],
                              age: 0,
                              life: wy(Eu, uu.minLifeTime, uu.maxLifeTime),
                              size: wy(Eu, uu.minSize, uu.maxSize),
                              colours: Py(uu, Eu),
                              velocityFactors: mu
                            }
                          }

                          function Yy(uu, Ru, yu, Eu) {
                            if (Ru < uu[0].at) return yu(Math.min(1, uu.length - 1));
                            for (let Ku = 0; Ku < uu.length - 1; Ku++)
                              if (Ru <= uu[Ku + 1].at) {
                                const Qu = uu[Ku + 1].at - uu[Ku].at;
                                return Eu(yu(Ku), yu(Ku + 1), Qu > 0 ? (Ru - uu[Ku].at) / Qu : 1)
                              } return yu(uu.length - 1)
                          }

                          function oy(uu) {
                            return Yy(uu.colours, uu.age / uu.life, (Ru => uu.colours[Ru].colour), ((uu, Ru, yu) => [Zy(uu[0], Ru[0], yu), Zy(uu[1], Ru[1], yu), Zy(uu[2], Ru[2], yu), Zy(uu[3], Ru[3], yu)]))
                          }

                          function qy(uu, Ru, yu) {
                            if (uu.age += yu, uu.age >= uu.life) return !1;
                            const Eu = function(uu) {
                              return 0 === uu.velocityFactors.length ? 1 : Yy(uu.velocityFactors, uu.age / uu.life, (Ru => uu.velocityFactors[Ru].factor), Zy)
                            }(uu) * yu;
                            for (let Qu = 0; Qu < 3; Qu++) {
                              var Ku;
                              uu.pos[Qu] += uu.dir[Qu] * Eu, uu.dir[Qu] += (null !== (Ku = Ru[Qu]) && void 0 !== Ku ? Ku : 0) * yu
                            }
                            return !0
                          }

                          function Oy(uu) {
                            return String(Math.round(1e6 * uu) / 1e6)
                          }

                          function vy(uu) {
                            return `[${uu.map(Oy).join(", ")}]`
                          }

                          function ay(uu, Ru) {
                            const yu = `${Ru}    `;
                            return `[\n${(hy(uu)?uu.map((uu=>{const Ru=[`${yu}    timeFraction: ${Oy(uu.timeFraction)},`,`${yu}    minColor: ${vy(uu.minColor)},`];return uu.maxColor&&Ru.push(`${yu}    maxColor: ${vy(uu.maxColor)},`),`${yu}{\n${Ru.join("\n")}\n${yu}},`})):uu.map((uu=>`
                            $ {
                              yu
                            } {
                              color: $ {
                                vy(uu.color)
                              }
                            }, `))).join("\n")}\n${Ru}]`
                          }
                          const fy = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            uE = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const RE = .6;

                          function yE(uu, Ru) {
                            return `${Ru?"song":"sound"}:${uu}`
                          }
                          let EE = {
                              track: null,
                              volume: RE
                            },
                            KE = null,
                            QE = 0,
                            mE = 0;
                          const JE = new Set;

                          function NE(uu) {
                            EE = {
                              ...EE,
                              ...uu
                            }, JE.forEach((uu => {
                              uu()
                            }))
                          }

                          function XE(uu) {
                            EE.track && NE({
                              track: {
                                ...EE.track,
                                ...uu
                              }
                            })
                          }

                          function VE(uu) {
                            const [Ru, yu] = (0, Eu.useState)((() => uu(EE))), Ku = (0, Eu.useRef)(uu);
                            return Ku.current = uu, (0, Eu.useEffect)((() => {
                              const uu = () => {
                                yu((() => Ku.current(EE)))
                              };
                              return JE.add(uu), uu(), () => {
                                JE.delete(uu)
                              }
                            }), []), Ru
                          }

                          function rE() {
                            QE++;
                            const uu = KE;
                            KE = null, null === uu || void 0 === uu || uu.stop()
                          }

                          function BE(uu, Ru) {
                            let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            rE();
                            const Ku = QE,
                              {
                                track: Qu
                              } = EE,
                              mu = Qu && Qu.name === uu && Qu.isSong === Ru ? Qu.duration : 0;
                            mE = Eu, NE({
                              track: {
                                name: uu,
                                isSong: Ru,
                                status: "loading",
                                duration: mu
                              }
                            }), Promise.all([yu.e(215), yu.e(239)]).then((() => yu(39361))).then((yu => {
                              let {
                                playDocsSound: Qu
                              } = yu;
                              Ku === QE && (KE = Qu(uu, Ru, EE.volume, Eu, {
                                onPlay: uu => {
                                  Ku === QE && XE({
                                    status: "playing",
                                    duration: uu
                                  })
                                },
                                onEnd: uu => {
                                  var Ru, yu;
                                  Ku === QE && (KE = null, uu ? NE({
                                    track: null
                                  }) : (mE = null !== (Ru = null === (yu = EE.track) || void 0 === yu ? void 0 : yu.duration) && void 0 !== Ru ? Ru : 0, XE({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((Ru => {
                              console.error(`Could not play docs sound ${uu}`, Ru), Ku === QE && NE({
                                track: null
                              })
                            }))
                          }

                          function xE() {
                            const {
                              track: uu
                            } = EE;
                            if (!uu) return;
                            if ("playing" === uu.status && KE) return mE = KE.mH(), KE.pause(), void XE({
                              status: "paused"
                            });
                            if ("loading" === uu.status) return rE(), void XE({
                              status: "paused"
                            });
                            if (KE) return void KE.resume();
                            const Ru = uu.duration > 0 && mE >= uu.duration - .05;
                            BE(uu.name, uu.isSong, Ru ? 0 : mE)
                          }

                          function SE() {
                            var uu;
                            return KE && "playing" === (null === (uu = EE.track) || void 0 === uu ? void 0 : uu.status) ? KE.mH() : mE
                          }

                          function pE(uu) {
                            var Ru;
                            null === (Ru = KE) || void 0 === Ru || Ru.setVolume(uu), NE({
                              volume: uu
                            })
                          }

                          function TE() {
                            rE(), mE = 0, NE({
                              track: null
                            })
                          }
                          const WE = (0, Eu.createContext)(null);
                          let jE = null;

                          function HE() {
                            const [uu, Ru] = (0, Eu.useState)(null);
                            return (0, Eu.useEffect)((() => {
                              let uu = !1;
                              return jE ??= Promise.all([yu.e(69), yu.e(72), yu.e(71), yu.e(70), yu.e(196), yu.e(96), yu.e(220)]).then((() => yu(39357))), jE.then((yu => {
                                uu || Ru(yu)
                              }), (uu => {
                                console.error("Could not load the docs gallery's textures", uu), jE = null
                              })), () => {
                                uu = !0
                              }
                            }), []), uu
                          }
                          const dE = 24,
                            bE = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function CE(uu, Ru) {
                            const yu = "skins" === uu ? function(uu, Ru) {
                              const yu = gy.find((Ru => uu.startsWith(Ru.heading)));
                              return yu ? function(uu, Ru) {
                                return `${uu}-${Ru}`
                              }(yu.prefix, Ru) : null
                            }(Ru.heading, Ru.name) : null;
                            return null === yu ? null : `${ly}/${yu}.webp`
                          }

                          function kE(uu) {
                            let {
                              kind: Ru,
                              entry: yu,
                              assets: Ku,
                              renderedUrl: mu
                            } = uu;
                            const {
                              name: Ju
                            } = yu, [Nu, Xu] = (0, Eu.useState)(!1);
                            if ("icons" === Ru && zR(Ju)) return (0, Su.jsx)(dy.c, {
                              className: "DocsTileIcon",
                              name: Ju
                            });
                            let Vu = null;
                            var ru;
                            if ("icons" === Ru) Vu = null !== (ru = null === Ku || void 0 === Ku ? void 0 : Ku.getIngameIconUrl(Ju)) && void 0 !== ru ? ru : null;
                            else if ("particles" === Ru) {
                              var Bu, xu, pu;
                              Vu = null !== (Bu = null === Ku || void 0 === Ku ? void 0 : Ku.getParticleTextureUrl(null !== (xu = null === (pu = zy(Ju)) || void 0 === pu ? void 0 : pu.texture) && void 0 !== xu ? xu : Ju)) && void 0 !== Bu ? Bu : null
                            } else "skins" === Ru && (Vu = null !== mu && void 0 !== mu ? mu : bE.test(Ju) ? `/textures/charSkins/previews/${Ju}_preview.png` : null);
                            return !Vu || Nu ? (0, Su.jsx)(Tu, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === Ru ? "person" : "image"
                            }) : (0, Su.jsx)("img", {
                              className: Qu()("DocsTileImage", {
                                Pixelated: "skins" !== Ru
                              }),
                              src: Vu,
                              srcSet: Vu === mu ? `${Vu} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Vu}`), Xu(!0)
                              }
                            })
                          }

                          function eE(uu) {
                            let {
                              entry: Ru,
                              isSong: yu
                            } = uu;
                            const Eu = VE((uu => {
                                let {
                                  track: Eu
                                } = uu;
                                return (null === Eu || void 0 === Eu ? void 0 : Eu.name) === Ru.name && Eu.isSong === yu ? Eu.status : null
                              })),
                              Ku = null !== Eu && "paused" !== Eu;
                            return (0, Su.jsxs)("button", {
                              type: "button",
                              id: Ru.anchor,
                              className: Qu()("DocsSoundTile", {
                                Playing: Ku
                              }),
                              "data-docs-track": yE(Ru.name, yu),
                              "aria-label": Ku ? `Pause ${Ru.name}` : `Play ${Ru.name}`,
                              onClick: () => {
                                null !== Eu ? xE() : BE(Ru.name, yu)
                              },
                              children: [(0, Su.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, Su.jsx)(Tu, {
                                  name: Ku ? "pause" : "play"
                                })
                              }), (0, Su.jsx)("code", {
                                className: "DocsSoundName",
                                children: Ru.name
                              }), Ru.caption && (0, Su.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: Ru.caption
                              })]
                            })
                          }

                          function AE(uu) {
                            let {
                              kind: Ru,
                              names: yu,
                              isSongs: Ku
                            } = uu;
                            const mu = HE(),
                              [Ju, Nu] = ju(),
                              Xu = !1 === (null === Ju || void 0 === Ju ? void 0 : Ju.failed) ? Ju.text : null,
                              Vu = (0, Eu.useContext)(WE),
                              [ru, Bu] = (0, Eu.useState)(""),
                              xu = ru.trim().toLowerCase(),
                              pu = xu ? yu.filter((uu => uu.name.toLowerCase().includes(xu))) : yu;
                            return (0, Su.jsxs)("div", {
                              className: "DocsGallery",
                              children: [yu.length > dE && (0, Su.jsx)(Hy, {
                                className: "DocsGalleryFilter",
                                value: ru,
                                placeholder: `Filter ${yu.length} names\u2026`,
                                label: "Filter names",
                                onChange: Bu,
                                count: xu ? {
                                  visible: pu.length,
                                  total: yu.length
                                } : null
                              }), (0, Su.jsx)("div", {
                                className: Qu()("DocsGalleryGrid", `Kind-${Ru}`, {
                                  Songs: Ku
                                }),
                                children: pu.map((uu => {
                                  if ("sounds" === Ru) return (0, Su.jsx)(eE, {
                                    entry: uu,
                                    isSong: Ku
                                  }, uu.anchor);
                                  if (Vu && "particles" === Ru && zy(uu.name)) return (0, Su.jsxs)("button", {
                                    type: "button",
                                    id: uu.anchor,
                                    className: Qu()("DocsTile Previewable", {
                                      Copied: Xu === uu.name
                                    }),
                                    title: `Play "${uu.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Vu(uu.name), Nu(uu.name)
                                    },
                                    children: [(0, Su.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, Su.jsx)(kE, {
                                        kind: Ru,
                                        entry: uu,
                                        assets: mu,
                                        renderedUrl: null
                                      }), (0, Su.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, Su.jsx)(Tu, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, Su.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Xu === uu.name ? "Copied!" : uu.name
                                    })]
                                  }, uu.anchor);
                                  const yu = CE(Ru, uu);
                                  return (0, Su.jsxs)("button", {
                                    type: "button",
                                    id: uu.anchor,
                                    className: Qu()("DocsTile", {
                                      Copied: Xu === uu.name
                                    }),
                                    title: `Copy "${uu.name}"`,
                                    onClick: () => {
                                      Nu(uu.name)
                                    },
                                    children: [(0, Su.jsx)("span", {
                                      className: Qu()("DocsTilePreview", {
                                        Rendered: null !== yu
                                      }),
                                      children: (0, Su.jsx)(kE, {
                                        kind: Ru,
                                        entry: uu,
                                        assets: mu,
                                        renderedUrl: yu
                                      })
                                    }), (0, Su.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Xu === uu.name ? "Copied!" : uu.name
                                    })]
                                  }, uu.anchor)
                                }))
                              })]
                            })
                          }

                          function DE(uu) {
                            let {
                              kind: Ru,
                              content: yu,
                              blocks: Eu
                            } = uu;
                            return (0, Su.jsx)(Su.Fragment, {
                              children: ty(Ru, yu, Eu).map(((uu, yu) => "block" === uu.kind ? (0, Su.jsx)(By, {
                                block: uu.block
                              }, yu) : (0, Su.jsx)(AE, {
                                kind: Ru,
                                names: uu.names,
                                isSongs: uu.isSongs
                              }, yu)))
                            })
                          }
                          const ME = [{
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

                          function IE(uu) {
                            let {
                              cards: Ru = ME,
                              label: yu = "Start here"
                            } = uu;
                            const Ku = (0, Eu.useContext)(xR);
                            return (0, Su.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": yu,
                              children: Ru.map((uu => {
                                let {
                                  pageId: Ru,
                                  countNoun: yu
                                } = uu;
                                const Eu = Lu(Ru);
                                return (0, Su.jsxs)(mu.c, {
                                  to: Pu(Ku, Eu),
                                  className: "DocsLandingCard",
                                  children: [(0, Su.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, Su.jsx)(Tu, {
                                      name: Eu.icon
                                    })
                                  }), (0, Su.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Eu.title
                                  }), (0, Su.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Eu.summary
                                  }), yu && (0, Su.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [Fu(Eu).sections.length, " ", yu]
                                  })]
                                }, Ru)
                              }))
                            })
                          }
                          const GE = 240;

                          function UE(uu) {
                            let {
                              faces: Ru
                            } = uu;
                            return (0, Su.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, Su.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${Ru.top}")`
                                }
                              }), (0, Su.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${Ru.left}")`
                                }
                              }), (0, Su.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${Ru.right}")`
                                }
                              })]
                            })
                          }

                          function nE(uu) {
                            let {
                              src: Ru
                            } = uu;
                            const [yu, Ku] = (0, Eu.useState)(!1);
                            return yu ? null : (0, Su.jsx)("img", {
                              src: Ru,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${Ru}`), Ku(!0)
                              }
                            })
                          }

                          function sE(uu) {
                            let {
                              kind: Ru
                            } = uu;
                            const yu = jy(Ru),
                              Ku = HE(),
                              mu = (0, Ju.s)(),
                              [Nu, Xu] = (0, Eu.useState)(""),
                              [Vu, ru] = (0, Eu.useState)(null),
                              [Bu, xu] = (0, Eu.useState)(GE),
                              [pu, Wu] = (0, Eu.useState)(null),
                              ju = (0, Eu.useRef)(null),
                              du = Nu.trim().toLowerCase();
                            (0, Eu.useEffect)((() => {
                              const uu = (0, eu.i)(mu.hash),
                                Eu = yu.entries.find((yu => ny(Ru, yu.name) === uu));
                              if (Eu) ju.current = Eu.name, Xu(Eu.name), ru(null), Wu(Eu.name);
                              else if (null !== ju.current) {
                                const uu = ju.current;
                                ju.current = null, Xu((Ru => Ru === uu ? "" : Ru)), Wu(null)
                              }
                            }), [yu, Ru, mu.hash, mu.key]), (0, Eu.useEffect)((() => {
                              var uu;
                              null !== pu && (null === (uu = document.getElementById(ny(Ru, pu))) || void 0 === uu || uu.scrollIntoView({
                                block: "center"
                              }))
                            }), [Ru, pu]);
                            const bu = yu.entries.filter((uu => (!du || uu.name.toLowerCase().includes(du)) && (!Vu || uu.variants.includes(Vu))));
                            return (0, Su.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [yu.notes.length > 0 && (0, Su.jsx)("div", {
                                className: "DocsProse",
                                children: yu.notes.map((uu => (0, Su.jsx)("p", {
                                  children: uu
                                }, uu)))
                              }), yu.legend.length > 0 && (0, Su.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, Su.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, Su.jsx)("thead", {
                                    children: (0, Su.jsxs)("tr", {
                                      children: [(0, Su.jsx)("th", {
                                        children: "Code"
                                      }), (0, Su.jsx)("th", {
                                        children: "Variant"
                                      }), (0, Su.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, Su.jsx)("tbody", {
                                    children: yu.legend.map((uu => (0, Su.jsxs)("tr", {
                                      children: [(0, Su.jsx)("td", {
                                        children: (0, Su.jsx)("button", {
                                          type: "button",
                                          className: Qu()("DocsVariantChip", {
                                            Active: Vu === uu.code
                                          }),
                                          "aria-pressed": Vu === uu.code,
                                          title: `Show only ${Ru} with ${uu.meaning} variants`,
                                          onClick: () => {
                                            ru(Vu === uu.code ? null : uu.code)
                                          },
                                          children: uu.code
                                        })
                                      }), (0, Su.jsx)("td", {
                                        children: uu.meaning
                                      }), (0, Su.jsx)("td", {
                                        children: (0, Su.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: uu.usage
                                        })
                                      })]
                                    }, uu.code)))
                                  })]
                                })
                              }), yu.examples.length > 0 && (0, Su.jsx)(ku, {
                                lang: "text",
                                code: yu.examples.join("\n")
                              }), (0, Su.jsx)(Hy, {
                                className: "DocsFilterBar",
                                value: Nu,
                                placeholder: `Search ${yu.entries.length} ${Ru}\u2026`,
                                label: `Search ${Ru}`,
                                onChange: uu => {
                                  Xu(uu), xu(GE)
                                },
                                count: du || Vu ? {
                                  visible: bu.length,
                                  total: yu.entries.length
                                } : null,
                                children: Vu && (0, Su.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    ru(null)
                                  },
                                  children: [Vu, " ", (0, Su.jsx)(Tu, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, Su.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: bu.slice(0, Bu).map((uu => {
                                  const yu = "blocks" === Ru ? null === Ku || void 0 === Ku ? void 0 : Ku.getBlockFaces(uu.name) : null,
                                    Eu = Ku && !yu ? Ku.getItemTextureUrl(uu.name) : null;
                                  return (0, Su.jsxs)("div", {
                                    id: ny(Ru, uu.name),
                                    className: Qu()("DocsCatalogueTile", {
                                      Linked: uu.name === pu
                                    }),
                                    children: [(0, Su.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [yu && (0, Su.jsx)(UE, {
                                        faces: yu
                                      }), Eu && (0, Su.jsx)(nE, {
                                        src: Eu
                                      })]
                                    }), (0, Su.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: uu.name
                                    }), uu.variants.length > 0 && (0, Su.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: uu.variants.map((uu => (0, Su.jsx)("span", {
                                        children: uu
                                      }, uu)))
                                    }), (0, Su.jsx)(Hu, {
                                      text: uu.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, uu.name)
                                }))
                              }), bu.length > Bu && (0, Su.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  xu(bu.length)
                                },
                                children: ["Show all ", bu.length]
                              }), 0 === bu.length && (0, Su.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", Ru, " match."]
                              })]
                            })
                          }
                          var tE = yu(4593),
                            lE = yu(1542);
                          const gE = .95 * tE.b;

                          function cE(uu) {
                            return /^\s*```/.test(uu)
                          }

                          function LE(uu, Ru) {
                            const yu = [
                              []
                            ];
                            let Eu = !1;
                            for (const Ku of uu.split("\n")) !Eu && Ru(Ku) && yu.at(-1).length > 0 && yu.push([]), cE(Ku) && (Eu = !Eu), yu.at(-1).push(Ku);
                            return yu.map((uu => uu.join("\n").trim())).filter(Boolean)
                          }

                          function zE(uu, Ru) {
                            const yu = `${"#".repeat(Ru)} `,
                              Eu = [];
                            let Ku = !1;
                            for (const Qu of uu.split("\n")) cE(Qu) ? Ku = !Ku : !Ku && Qu.startsWith(yu) && Eu.push(Qu.slice(yu.length).trim());
                            return Eu
                          }

                          function FE(uu) {
                            return uu.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class wE {
                            constructor(uu, Ru) {
                              this.origin = Ru, this.pages = void 0, this.partPaths = new Map;
                              const yu = uu.map((uu => {
                                const Ru = Ru => this.resolveLinks(uu, Ru).length,
                                  yu = function(uu, Ru) {
                                    const yu = uu.map((uu => Ru(uu.markdown) + 2)),
                                      Eu = yu.reduce(((uu, Ru) => uu + Ru), 0),
                                      Ku = Eu / Math.ceil(Eu / gE),
                                      Qu = [];
                                    let mu = 0;
                                    return uu.forEach(((uu, Ru) => {
                                      const Eu = yu[Ru];
                                      (0 === Qu.length || mu + Eu > gE || mu + Eu / 2 > Ku) && (Qu.push([]), mu = 0), Qu.at(-1).push(uu), mu += Eu
                                    })), Qu
                                  }(function(uu, Ru) {
                                    return LE(uu, (uu => uu.startsWith("## "))).flatMap((uu => {
                                      var yu;
                                      const Eu = null !== (yu = zE(uu, 2)[0]) && void 0 !== yu ? yu : "";
                                      if (Ru(uu) <= gE) return [{
                                        markdown: uu,
                                        section: Eu
                                      }];
                                      let Ku = !1,
                                        Qu = "";
                                      return LE(uu, (uu => {
                                        const Ru = Ku && "" !== uu.trim();
                                        return Ku = "" === uu.trim(), Ru
                                      })).map((uu => {
                                        var Ru;
                                        const yu = zE(uu, 3),
                                          Ku = uu.startsWith("### ") ? yu[0] : Qu;
                                        return Qu = null !== (Ru = yu.at(-1)) && void 0 !== Ru ? Ru : Qu, {
                                          markdown: uu,
                                          section: Eu || Ku
                                        }
                                      }))
                                    }))
                                  }(FE(uu), Ru), Ru);
                                return {
                                  page: uu,
                                  groups: yu.length > 1 ? yu : []
                                }
                              }));
                              for (const {
                                  page: Eu,
                                  groups: Ku
                                }
                                of yu) Ku.forEach(((uu, Ru) => {
                                const yu = (0, tE.w)(Eu.slug, Ru);
                                for (const Ku of uu.flatMap((uu => [...zE(uu.markdown, 2), ...zE(uu.markdown, 3)]))) {
                                  const uu = `${Eu.id}#${(0,eu.l)(Ku)}`;
                                  this.partPaths.has(uu) || this.partPaths.set(uu, yu)
                                }
                              }));
                              this.pages = yu.map((uu => {
                                let {
                                  page: Ru,
                                  groups: yu
                                } = uu;
                                return {
                                  page: Ru,
                                  path: (0, tE.u)(Ru.slug),
                                  markdown: `# ${Ru.title}\n\n${this.resolveLinks(Ru,FE(Ru))}\n`,
                                  parts: yu.map(((uu, Eu) => this.renderPart(Ru, uu, Eu, yu.length)))
                                }
                              }))
                            }
                            url(uu) {
                              return `${this.origin}${uu}`
                            }
                            getPage(uu) {
                              return this.pages.find((Ru => Ru.page.id === uu))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((uu => (uu.parts.length > 0 ? uu.parts : [{
                                path: uu.path,
                                label: "",
                                markdown: uu.markdown
                              }]).filter((uu => uu.markdown.length > tE.b))))
                            }
                            markdownUrl(uu, Ru) {
                              const yu = Ru && this.partPaths.get(`${uu.id}#${Ru}`) || (0, tE.u)(uu.slug);
                              return this.url(Ru ? `${yu}#${Ru}` : yu)
                            }
                            resolveLinks(uu, Ru) {
                              return Ru.replace(/\]\((#[^)]+)\)/g, ((Ru, yu) => {
                                var Eu;
                                const Ku = null !== (Eu = Zu(yu)) && void 0 !== Eu ? Eu : this.samePageTarget(uu, yu);
                                return Ku ? `](${this.markdownUrl(Ku.page,Ku.anchor)})` : Ru
                              }))
                            }
                            samePageTarget(uu, Ru) {
                              const yu = (0, eu.l)(Ru.slice(1));
                              return wu(uu, yu) ? {
                                page: uu,
                                anchor: yu
                              } : null
                            }
                            renderPart(uu, Ru, yu, Eu) {
                              const Ku = function(uu) {
                                  const Ru = uu.map((uu => uu.section)).filter(Boolean);
                                  if (0 === Ru.length) return "";
                                  const yu = Ru[0],
                                    Eu = Ru.at(-1);
                                  return yu === Eu ? yu : `${yu} to ${Eu}`
                                }(Ru),
                                Qu = Ru.map((uu => uu.markdown)).join("\n\n"),
                                mu = Ku ? `It covers ${Ku}. ` : "",
                                Ju = `Part ${yu+1} of ${Eu} of [${uu.title}](${this.url((0,tE.u)(uu.slug))}). ${mu}[llms.txt](${this.url(tE.h)}) lists every part.`;
                              return {
                                path: (0, tE.w)(uu.slug, yu),
                                label: Ku,
                                markdown: `# ${uu.title}, part ${yu+1} of ${Eu}\n\n${Ju}\n\n${this.resolveLinks(uu,Qu)}\n`
                              }
                            }
                            llmsTxt(uu) {
                              const Ru = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${ZE(tE.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const yu of cu) {
                                Ru.push("", `## ${yu.title}`, "");
                                for (const uu of yu.pageIds) {
                                  const yu = this.getPage(uu),
                                    {
                                      page: Eu,
                                      parts: Ku
                                    } = yu,
                                    Qu = `About ${ZE(yu.markdown.length)} tokens${Ku.length>0?`, in ${Ku.length} parts:`:"."}`;
                                  Ru.push(`- [${Eu.title}](${this.url(yu.path)}): ${Eu.summary} ${Qu}`), Ku.forEach(((uu, yu) => {
                                    Ru.push(`  - [Part ${yu+1}${uu.label?`: ${uu.label}`:""}](${this.url(uu.path)})`)
                                  }))
                                }
                              }
                              return Ru.push("", "## Optional", "", `- [Every page in one file](${this.url(tE.e)}): About ${ZE(uu.length)} tokens, for a model with a large context window.`, ""), Ru.join("\n")
                            }
                            llmsFullTxt() {
                              return cu.flatMap((uu => uu.pageIds.map((uu => this.getPage(uu).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const uu = this.llmsFullTxt(),
                                Ru = this.llmsTxt(uu),
                                yu = new Map([
                                  [tE.m, Ru],
                                  [tE.h, Ru],
                                  [tE.e, uu]
                                ]);
                              for (const Eu of this.pages) {
                                yu.set(Eu.path, Eu.markdown);
                                for (const uu of Eu.parts) yu.set(uu.path, uu.markdown)
                              }
                              return yu
                            }
                          }

                          function ZE(uu) {
                            return `${Math.max(1,Math.round(uu/4e3))}K`
                          }
                          let hE = null;

                          function PE() {
                            return hE ??= new wE(gu, lE.c), hE
                          }
                          const iE = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function YE(uu) {
                            return PE().getPage(uu.id).parts.length > 0 ? `Read ${tE.j}, then the parts of the Bloxd Code API's ${uu.title} page it lists, so I can ask questions about it.` : `Read ${lE.c}${(0,tE.u)(uu.slug)} so I can ask questions about it. ${tE.j} lists every page of the Bloxd Code API docs.`
                          }

                          function oE(uu) {
                            let {
                              page: Ru
                            } = uu;
                            const [yu, Eu] = ju();
                            return (0, Su.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, Su.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Eu(PE().getPage(Ru.id).markdown)
                                },
                                children: [(0, Su.jsx)(Tu, {
                                  name: !1 === (null === yu || void 0 === yu ? void 0 : yu.failed) ? "check" : "copy"
                                }), (0, Su.jsx)("span", {
                                  children: yu ? yu.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), iE.map((uu => (0, Su.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${uu.url}${encodeURIComponent(YE(Ru))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, Su.jsx)(Tu, {
                                  name: "external-link"
                                }), (0, Su.jsxs)("span", {
                                  children: ["Open in ", uu.name]
                                })]
                              }, uu.name)))]
                            })
                          }

                          function qE(uu) {
                            return `#${[0,1,2].map((Ru=>Math.round(Math.min(255,Math.max(0,uu[Ru]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function OE(uu) {
                            return [parseInt(uu.slice(1, 3), 16), parseInt(uu.slice(3, 5), 16), parseInt(uu.slice(5, 7), 16)]
                          }

                          function vE(uu) {
                            let {
                              label: Ru,
                              min: yu,
                              max: Eu,
                              step: Ku,
                              low: Qu,
                              high: mu,
                              onChange: Ju
                            } = uu;
                            return (0, Su.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Su.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Su.jsx)("span", {
                                  children: Ru
                                }), (0, Su.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Qu === mu ? Qu : `${Qu}\u2013${mu}`
                                })]
                              }), (0, Su.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, Su.jsx)("input", {
                                  type: "range",
                                  min: yu,
                                  max: Eu,
                                  step: Ku,
                                  value: Math.min(Eu, Qu),
                                  "aria-label": `Minimum ${Ru.toLowerCase()}`,
                                  onChange: uu => {
                                    const Ru = Number(uu.target.value);
                                    Ju(Ru, Math.max(Ru, mu))
                                  }
                                }), (0, Su.jsx)("input", {
                                  type: "range",
                                  min: yu,
                                  max: Eu,
                                  step: Ku,
                                  value: Math.min(Eu, mu),
                                  "aria-label": `Maximum ${Ru.toLowerCase()}`,
                                  onChange: uu => {
                                    const Ru = Number(uu.target.value);
                                    Ju(Math.min(Ru, Qu), Ru)
                                  }
                                })]
                              })]
                            })
                          }

                          function aE(uu) {
                            let {
                              label: Ru,
                              min: yu,
                              max: Eu,
                              step: Ku,
                              value: Qu,
                              onChange: mu,
                              format: Ju = String
                            } = uu;
                            return (0, Su.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Su.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Su.jsx)("span", {
                                  children: Ru
                                }), (0, Su.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Ju(Qu)
                                })]
                              }), (0, Su.jsx)("input", {
                                type: "range",
                                min: yu,
                                max: Eu,
                                step: Ku,
                                value: Math.min(Eu, Math.max(yu, Qu)),
                                "aria-label": Ru,
                                onChange: uu => {
                                  mu(Number(uu.target.value))
                                }
                              })]
                            })
                          }

                          function fE(uu) {
                            let {
                              opts: Ru,
                              onChange: yu
                            } = uu;
                            const Eu = Ru.colorGradients;
                            if (!hy(Eu)) return (0, Su.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Su.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, Su.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, Su.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Eu.map(((uu, Ru) => (0, Su.jsx)("input", {
                                  type: "color",
                                  value: qE(uu.color),
                                  "aria-label": `Colour ${Ru+1}`,
                                  onChange: uu => {
                                    const Ku = [...Eu];
                                    Ku[Ru] = {
                                      color: OE(uu.target.value)
                                    }, yu(Ku)
                                  }
                                }, Ru)))
                              })]
                            });
                            const Ku = (uu, Ru) => {
                              const Ku = [...Eu];
                              Ku[uu] = Ru, yu(Ku)
                            };
                            return (0, Su.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Su.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Su.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, Su.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Eu.map(((uu, Ru) => {
                                var yu;
                                const Eu = null !== (yu = uu.maxColor) && void 0 !== yu ? yu : uu.minColor;
                                return (0, Su.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, Su.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * uu.timeFraction), "%"]
                                  }), (0, Su.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${qE(uu.minColor)}, ${qE(Eu)})`
                                    }
                                  }), (0, Su.jsx)("input", {
                                    type: "color",
                                    value: qE(uu.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*uu.timeFraction)}%`,
                                    onChange: yu => {
                                      Ku(Ru, {
                                        ...uu,
                                        minColor: [...OE(yu.target.value), uu.minColor[3]]
                                      })
                                    }
                                  }), (0, Su.jsx)("input", {
                                    type: "color",
                                    value: qE(Eu),
                                    "aria-label": `Maximum colour at ${Math.round(100*uu.timeFraction)}%`,
                                    onChange: yu => {
                                      Ku(Ru, {
                                        ...uu,
                                        maxColor: [...OE(yu.target.value), Eu[3]]
                                      })
                                    }
                                  })]
                                }, Ru)
                              }))]
                            })
                          }
                          const uK = [-.5, -.5, -.5],
                            RK = [.5, .5, .5],
                            yK = [0, 1, 2, 3, 4, 5, 6, 7].map((uu => [1 & uu ? RK[0] : uK[0], 2 & uu ? RK[1] : uK[1], 4 & uu ? RK[2] : uK[2]]));class EK {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(uu, Ru, yu, Eu) {
                              const Ku = Math.round(31 * Ru),
                                Qu = Math.round(31 * yu),
                                mu = Math.round(31 * Eu),
                                Ju = `${Ku}|${Qu}|${mu}`;
                              let Nu = this.tints.get(uu);
                              (!Nu || Nu.size > 2e3) && (Nu = new Map, this.tints.set(uu, Nu));
                              let Xu = Nu.get(Ju);
                              if (Xu) return Xu;
                              Xu = document.createElement("canvas"), Xu.width = uu.naturalWidth || 16, Xu.height = uu.naturalHeight || 16;
                              const Vu = Xu.getContext("2d");
                              return Vu ? (Vu.imageSmoothingEnabled = !1, Vu.drawImage(uu, 0, 0, Xu.width, Xu.height), Vu.globalCompositeOperation = "multiply", Vu.fillStyle = `rgb(${Ku/31*255}, ${Qu/31*255}, ${mu/31*255})`, Vu.fillRect(0, 0, Xu.width, Xu.height), Vu.globalCompositeOperation = "destination-in", Vu.drawImage(uu, 0, 0, Xu.width, Xu.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Nu.set(Ju, Xu), Xu
                            }
                          }

                          function KK(uu) {
                            let {
                              opts: Ru,
                              textureUrl: yu,
                              burst: Ku,
                              paused: Qu
                            } = uu;
                            const mu = (0, Eu.useRef)(null),
                              Ju = (0, Eu.useRef)(Ru);
                            Ju.current = Ru;
                            const Nu = (0, Eu.useRef)(Qu);
                            Nu.current = Qu;
                            const Xu = (0, Eu.useRef)(null),
                              Vu = (0, Eu.useRef)(null),
                              ru = (0, Eu.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(uu) {
                                let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const yu = [-.5, -.5, -.5],
                                  Eu = [.5, .5, .5];
                                let Ku = .5;
                                for (let Qu = 0; Qu < 40; Qu++) {
                                  const Qu = iy(uu, yu, Eu, Ru),
                                    mu = Math.max(Qu.life / 30, .001);
                                  for (; qy(Qu, uu.gravity, mu);) Ku = Math.max(Ku, Math.hypot(Qu.pos[0], Qu.pos[1], Qu.pos[2]) + Qu.size / 2)
                                }
                                return Ku
                              }(Ru)))), [Ru]),
                              Bu = (0, Eu.useRef)(ru);
                            return Bu.current = ru, (0, Eu.useEffect)((() => {
                              if (Xu.current = null, !yu) return;
                              const uu = new Image;
                              let Ru = !1;
                              return uu.onload = () => {
                                Ru || (Xu.current = uu)
                              }, uu.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${yu}`)
                              }, uu.src = yu, () => {
                                Ru = !0
                              }
                            }), [yu]), (0, Eu.useEffect)((() => {
                              var uu;
                              null === (uu = Vu.current) || void 0 === uu || uu.call(Vu)
                            }), [Ru, Ku]), (0, Eu.useEffect)((() => {
                              const uu = mu.current,
                                Ru = null === uu || void 0 === uu ? void 0 : uu.getContext("2d");
                              if (!uu || !Ru) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const yu = new EK;
                              let Eu = [],
                                Ku = 0,
                                Qu = -.7,
                                ru = Bu.current,
                                xu = performance.now(),
                                Su = 0,
                                pu = !0,
                                Tu = null;
                              const Wu = () => {
                                const uu = Ju.current,
                                  Ru = Math.min(400, Math.max(0, Math.ceil(uu.manualEmitCount)));
                                Eu = [];
                                for (let yu = 0; yu < Ru; yu++) Eu.push(iy(uu, uK, RK, Math.random));
                                Ku = 0
                              };
                              Vu.current = Wu, Wu();
                              const ju = mu => {
                                Su = requestAnimationFrame(ju);
                                const Vu = Math.min(.05, (mu - xu) / 1e3);
                                if (xu = mu, !pu) return;
                                const Hu = window.devicePixelRatio || 1,
                                  du = Math.round(uu.clientWidth * Hu),
                                  bu = Math.round(uu.clientHeight * Hu);
                                if (0 === du || 0 === bu) return;
                                uu.width === du && uu.height === bu || (uu.width = du, uu.height = bu);
                                const Cu = Ju.current;
                                null === Tu && (Qu += .18 * Vu), ru += (Bu.current - ru) * Math.min(1, 4 * Vu);
                                const ku = .6 * Vu;
                                Eu = Eu.filter((uu => qy(uu, Cu.gravity, ku))), 0 !== Eu.length || Nu.current || (Ku += Vu, Ku > .6 && Wu());
                                const eu = function(uu, Ru, yu, Eu) {
                                  const Ku = 3.2 * Eu,
                                    Qu = .44 * Math.min(uu, Ru) * Ku / Eu,
                                    mu = Math.cos(yu),
                                    Ju = Math.sin(yu),
                                    Nu = Math.cos(.42),
                                    Xu = Math.sin(.42);
                                  return (yu, Eu, Vu) => {
                                    const ru = yu * Ju + Vu * mu,
                                      Bu = Ku - (Eu * Xu + ru * Nu);
                                    if (Bu < .05) return null;
                                    const xu = Qu / Bu;
                                    return {
                                      x: uu / 2 + (yu * mu - Vu * Ju) * xu,
                                      y: Ru / 2 - (Eu * Nu - ru * Xu) * xu,
                                      scale: xu,
                                      depth: Bu
                                    }
                                  }
                                }(du, bu, Qu, ru);
                                ! function(uu, Ru, yu, Eu, Ku) {
                                  const Qu = uu.createLinearGradient(0, 0, 0, yu);
                                  Qu.addColorStop(0, "#23262d"), Qu.addColorStop(1, "#16181c"), uu.globalCompositeOperation = "source-over", uu.globalAlpha = 1, uu.fillStyle = Qu, uu.fillRect(0, 0, Ru, yu);
                                  const mu = (Ru, yu) => {
                                      const Ku = Eu(Ru[0], Ru[1], Ru[2]),
                                        Qu = Eu(yu[0], yu[1], yu[2]);
                                      Ku && Qu && (uu.beginPath(), uu.moveTo(Ku.x, Ku.y), uu.lineTo(Qu.x, Qu.y), uu.stroke())
                                    },
                                    Ju = Math.ceil(Ku) + 1,
                                    Nu = uK[1];
                                  uu.lineWidth = 1, uu.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Xu = -Ju; Xu <= Ju; Xu++) mu([Xu + .5, Nu, .5 - Ju], [Xu + .5, Nu, Ju + .5]), mu([.5 - Ju, Nu, Xu + .5], [Ju + .5, Nu, Xu + .5]);
                                  uu.strokeStyle = "rgba(255, 255, 255, 0.28)", uu.setLineDash([4, 4]);
                                  for (const Xu of yK)
                                    for (const uu of yK) {
                                      const Ru = [0, 1, 2].filter((Ru => Xu[Ru] !== uu[Ru]));
                                      1 === Ru.length && Xu[Ru[0]] < uu[Ru[0]] && mu(Xu, uu)
                                    }
                                  uu.setLineDash([])
                                }(Ru, du, bu, eu, ru);
                                const Au = Xu.current,
                                  Du = Eu.map((uu => ({
                                    particle: uu,
                                    at: eu(uu.pos[0], uu.pos[1], uu.pos[2])
                                  }))).filter((uu => null !== uu.at)).sort(((uu, Ru) => Ru.at.depth - uu.at.depth));
                                Ru.imageSmoothingEnabled = !1;
                                for (const uu of function(uu) {
                                    switch (uu) {
                                      case Ly.g.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Ly.g.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Ly.g.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Ly.g.MultiplyAdd:
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
                                  }(Cu.blendMode)) {
                                  Ru.globalCompositeOperation = uu.operation;
                                  for (const {
                                      particle: Eu,
                                      at: Ku
                                    }
                                    of Du) {
                                    const [Qu, mu, Ju, Nu] = oy(Eu), Xu = Math.max(1, Eu.size * Ku.scale);
                                    Ru.globalAlpha = uu.usesAlpha ? Math.min(1, Math.max(0, Nu)) : 1, Au ? Ru.drawImage(yu.get(Au, Qu, mu, Ju), Ku.x - Xu / 2, Ku.y - Xu / 2, Xu, Xu) : (Ru.fillStyle = `rgb(${255*Qu}, ${255*mu}, ${255*Ju})`, Ru.fillRect(Ku.x - Xu / 2, Ku.y - Xu / 2, Xu, Xu))
                                  }
                                }
                                Ru.globalCompositeOperation = "source-over", Ru.globalAlpha = 1
                              };
                              Su = requestAnimationFrame(ju);
                              const Hu = new IntersectionObserver((uu => {
                                let [Ru] = uu;
                                pu = Ru.isIntersecting
                              }));
                              Hu.observe(uu);
                              const du = Ru => {
                                  Tu = Ru.clientX, uu.setPointerCapture(Ru.pointerId)
                                },
                                bu = uu => {
                                  null !== Tu && (Qu += .01 * (uu.clientX - Tu), Tu = uu.clientX)
                                },
                                Cu = () => {
                                  Tu = null
                                };
                              return uu.addEventListener("pointerdown", du), uu.addEventListener("pointermove", bu), uu.addEventListener("pointerup", Cu), uu.addEventListener("pointercancel", Cu), () => {
                                cancelAnimationFrame(Su), Hu.disconnect(), Vu.current = null, uu.removeEventListener("pointerdown", du), uu.removeEventListener("pointermove", bu), uu.removeEventListener("pointerup", Cu), uu.removeEventListener("pointercancel", Cu)
                              }
                            }), []), (0, Su.jsx)("canvas", {
                              ref: mu,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${Ru.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const QK = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            mK = [{
                              mode: Ly.g.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Ly.g.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Ly.g.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Ly.g.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Ly.g.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            JK = (0, Eu.forwardRef)((function(uu, Ru) {
                              var yu, Ku;
                              let {
                                textures: mu
                              } = uu;
                              const Ju = HE(),
                                Nu = (0, Eu.useRef)(null),
                                [Xu, Vu] = (0, Eu.useState)(Fy),
                                [ru, Bu] = (0, Eu.useState)("example"),
                                [xu, pu] = (0, Eu.useState)(0),
                                [Wu, ju] = (0, Eu.useState)(!1),
                                du = uu => {
                                  const Ru = "example" === uu ? Fy : zy(uu);
                                  Ru && (Vu(Ru), Bu(uu))
                                };
                              (0, Eu.useImperativeHandle)(Ru, (() => ({
                                preview: uu => {
                                  var Ru;
                                  du(uu), null === (Ru = Nu.current) || void 0 === Ru || Ru.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const bu = uu => {
                                  Vu({
                                    ...Xu,
                                    ...uu
                                  }), Bu(null)
                                },
                                Cu = function(uu, Ru) {
                                  if (null !== Ru) return `${fy}    presetId: "${Ru}",\n${uE}\n})`;
                                  const yu = uu.velocityGradients.map((uu => `        {\n            timeFraction: ${Oy(uu.timeFraction)},\n            factor: ${Oy(uu.factor)},\n            factor2: ${Oy(uu.factor2)},\n        },`)),
                                    Eu = [`    dir1: ${vy(uu.dir1)},`, `    dir2: ${vy(uu.dir2)},`, uE, `    texture: "${uu.texture}",`, `    minLifeTime: ${Oy(uu.minLifeTime)},`, `    maxLifeTime: ${Oy(uu.maxLifeTime)},`, `    minEmitPower: ${Oy(uu.minEmitPower)},`, `    maxEmitPower: ${Oy(uu.maxEmitPower)},`, `    minSize: ${Oy(uu.minSize)},`, `    maxSize: ${Oy(uu.maxSize)},`, `    manualEmitCount: ${Oy(uu.manualEmitCount)},`, `    gravity: ${vy(uu.gravity)},`, `    colorGradients: ${ay(uu.colorGradients,"    ")},`, `    velocityGradients: ${yu.length>0?`[\n${yu.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Oy(uu.blendMode)},`];
                                  return void 0 !== uu.hideDist && Eu.push(`    hideDist: ${Oy(uu.hideDist)},`), `${fy}${Eu.join("\n")}\n})`
                                }(Xu, null === ru || "example" === ru ? null : ru),
                                eu = mu.includes(Xu.texture) ? mu : [...mu, Xu.texture];
                              return (0, Su.jsxs)("section", {
                                ref: Nu,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, Su.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, Su.jsxs)("div", {
                                    children: [(0, Su.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, Su.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, Su.jsx)(Hu, {
                                    text: Cu,
                                    label: "Copy code"
                                  })]
                                }), (0, Su.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, Su.jsx)("button", {
                                    type: "button",
                                    className: Qu()("DocsVariantChip", {
                                      Active: "example" === ru
                                    }),
                                    onClick: () => {
                                      du("example")
                                    },
                                    children: "Example"
                                  }), QK.filter((uu => null !== zy(uu))).map((uu => (0, Su.jsx)("button", {
                                    type: "button",
                                    className: Qu()("DocsVariantChip", {
                                      Active: ru === uu
                                    }),
                                    onClick: () => {
                                      du(uu)
                                    },
                                    children: uu
                                  }, uu))), (0, Su.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== ru && void 0 !== ru ? ru : "custom",
                                    "aria-label": "Preset",
                                    onChange: uu => {
                                      du(uu.target.value)
                                    },
                                    children: [(0, Su.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === ru && (0, Su.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), cy.c.map((uu => (0, Su.jsx)("option", {
                                      value: uu,
                                      children: uu
                                    }, uu)))]
                                  })]
                                }), (0, Su.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, Su.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, Su.jsx)(KK, {
                                      opts: Xu,
                                      textureUrl: null !== (yu = null === Ju || void 0 === Ju ? void 0 : Ju.getParticleTextureUrl(Xu.texture)) && void 0 !== yu ? yu : null,
                                      burst: xu,
                                      paused: Wu
                                    }), (0, Su.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, Su.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          pu(xu + 1)
                                        },
                                        children: [(0, Su.jsx)(Tu, {
                                          name: "replay"
                                        }), (0, Su.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, Su.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": Wu,
                                        onClick: () => {
                                          ju(!Wu)
                                        },
                                        children: [(0, Su.jsx)(Tu, {
                                          name: Wu ? "play" : "pause"
                                        }), (0, Su.jsx)("span", {
                                          children: Wu ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, Su.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, Su.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Su.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, Su.jsx)("span", {
                                          children: "Texture"
                                        }), (0, Su.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Xu.texture
                                        })]
                                      }), (0, Su.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: eu.map((uu => {
                                          var Ru;
                                          const yu = null !== (Ru = null === Ju || void 0 === Ju ? void 0 : Ju.getParticleTextureUrl(uu)) && void 0 !== Ru ? Ru : null;
                                          return (0, Su.jsx)("button", {
                                            type: "button",
                                            className: Qu()("DocsParticleTexture", {
                                              Active: Xu.texture === uu
                                            }),
                                            title: uu,
                                            "aria-label": uu,
                                            "aria-pressed": Xu.texture === uu,
                                            onClick: () => {
                                              bu({
                                                texture: uu
                                              })
                                            },
                                            children: yu ? (0, Su.jsx)("img", {
                                              src: yu,
                                              alt: ""
                                            }) : (0, Su.jsx)(Tu, {
                                              name: "image"
                                            })
                                          }, uu)
                                        }))
                                      })]
                                    }), (0, Su.jsx)(aE, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Xu.manualEmitCount,
                                      onChange: uu => {
                                        bu({
                                          manualEmitCount: uu
                                        })
                                      }
                                    }), (0, Su.jsx)(vE, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Xu.minLifeTime,
                                      high: Xu.maxLifeTime,
                                      onChange: (uu, Ru) => {
                                        bu({
                                          minLifeTime: uu,
                                          maxLifeTime: Ru
                                        })
                                      }
                                    }), (0, Su.jsx)(vE, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Xu.minEmitPower,
                                      high: Xu.maxEmitPower,
                                      onChange: (uu, Ru) => {
                                        bu({
                                          minEmitPower: uu,
                                          maxEmitPower: Ru
                                        })
                                      }
                                    }), (0, Su.jsx)(vE, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Xu.minSize,
                                      high: Xu.maxSize,
                                      onChange: (uu, Ru) => {
                                        bu({
                                          minSize: uu,
                                          maxSize: Ru
                                        })
                                      }
                                    }), (0, Su.jsx)(aE, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Ku = Xu.gravity[1]) && void 0 !== Ku ? Ku : 0,
                                      onChange: uu => {
                                        var Ru, yu;
                                        bu({
                                          gravity: [null !== (Ru = Xu.gravity[0]) && void 0 !== Ru ? Ru : 0, uu, null !== (yu = Xu.gravity[2]) && void 0 !== yu ? yu : 0]
                                        })
                                      }
                                    }), (0, Su.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Su.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, Su.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, Su.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Xu.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: uu => {
                                          bu({
                                            blendMode: Number(uu.target.value)
                                          })
                                        },
                                        children: mK.map((uu => {
                                          let {
                                            mode: Ru,
                                            label: yu
                                          } = uu;
                                          return (0, Su.jsx)("option", {
                                            value: Ru,
                                            children: yu
                                          }, Ru)
                                        }))
                                      })]
                                    }), (0, Su.jsx)(fE, {
                                      opts: Xu,
                                      onChange: uu => {
                                        bu({
                                          colorGradients: uu
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, Su.jsx)(ku, {
                                  code: Cu,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var NK = yu(4237),
                            XK = yu(1825);

                          function VK(uu, Ru) {
                            return uu ? NK.c.includes(Ru) ? uu.getIngameIconUrl(Ru) : uu.getItemIconUrl(Ru) : null
                          }

                          function rK(uu) {
                            var Ru, yu, Eu;
                            let {
                              part: Ku,
                              assets: mu
                            } = uu;
                            const Ju = VK(mu, Ku.icon),
                              Nu = null !== (Ru = null === (yu = Ku.style) || void 0 === yu ? void 0 : yu.fontSize) && void 0 !== Ru ? Ru : "1.8em",
                              Xu = (0, cR.$b)(Ku.style);
                            return (0, Su.jsxs)("span", {
                              className: Qu()("DocsBloxdTextIcon", {
                                Missing: !Ju
                              }),
                              style: {
                                width: Nu,
                                height: Nu,
                                opacity: null === (Eu = Ku.style) || void 0 === Eu ? void 0 : Eu.opacity
                              },
                              title: Ju ? void 0 : `No Bloxd icon, item or block is called "${Ku.icon}"`,
                              children: [Ju && Xu && (0, Su.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Xu,
                                  maskImage: `url("${Ju}")`,
                                  WebkitMaskImage: `url("${Ju}")`
                                }
                              }), Ju ? (0, Su.jsx)("img", {
                                src: Ju,
                                alt: "",
                                className: Qu()({
                                  Tinted: Xu
                                })
                              }) : (0, Su.jsx)(Tu, {
                                name: "image"
                              })]
                            })
                          }

                          function BK(uu) {
                            let {
                              parts: Ru,
                              className: yu
                            } = uu;
                            const Eu = HE(),
                              Ku = [];
                            let mu = [];
                            const Ju = uu => {
                              mu.length > 0 && (Ku.push((0, Su.jsx)(XK.d, {
                                text: mu
                              }, `run-${uu}`)), mu = [])
                            };
                            return Ru.forEach(((uu, Ru) => {
                              "icon" !== ZR(uu) || zR(uu.icon) ? mu.push(uu) : (Ju(Ru), Ku.push((0, Su.jsx)(rK, {
                                part: uu,
                                assets: Eu
                              }, `icon-${Ru}`)))
                            })), Ju(Ru.length), (0, Su.jsx)("div", {
                              className: Qu()("DocsStyledTextPreview", yu),
                              children: Ku
                            })
                          }
                          const xK = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let SK = null;

                          function pK(uu) {
                            if (SK ??= document.createElement("canvas").getContext("2d"), !SK) return "#000000";
                            SK.fillStyle = "#000000", SK.fillStyle = uu;
                            const Ru = SK.fillStyle;
                            return Ru.startsWith("#") ? Ru : "#000000"
                          }

                          function TK(uu) {
                            let {
                              value: Ru,
                              label: yu,
                              onChange: Eu
                            } = uu;
                            return (0, Su.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, Su.jsx)("input", {
                                type: "color",
                                value: pK(Ru),
                                "aria-label": `${yu} picker`,
                                onChange: uu => {
                                  Eu(uu.target.value)
                                }
                              }), (0, Su.jsx)("input", {
                                type: "text",
                                value: Ru,
                                placeholder: "#ffb914 or gold",
                                "aria-label": yu,
                                spellCheck: !1,
                                onChange: uu => {
                                  Eu(uu.target.value)
                                }
                              })]
                            })
                          }

                          function WK(uu) {
                            let {
                              value: Ru,
                              fontAwesomeIcons: yu,
                              onChange: Ku
                            } = uu;
                            const mu = HE(),
                              [Ju, Nu] = (0, Eu.useState)(zR(Ru) ? "fontAwesome" : "bloxd"),
                              [Xu, Vu] = (0, Eu.useState)(""),
                              ru = Xu.trim().toLowerCase(),
                              Bu = "bloxd" === Ju ? NK.c : yu,
                              xu = ru ? Bu.filter((uu => uu.toLowerCase().includes(ru))) : Bu;
                            return (0, Su.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, Su.jsx)("input", {
                                type: "text",
                                value: Ru,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: uu => {
                                  Ku(uu.target.value)
                                }
                              }), (0, Su.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, Su.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((uu => (0, Su.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": Ju === uu,
                                    className: Qu()("DocsVariantChip", {
                                      Active: Ju === uu
                                    }),
                                    onClick: () => {
                                      Nu(uu)
                                    },
                                    children: "bloxd" === uu ? `Bloxd icons (${NK.c.length})` : `Font Awesome (${yu.length})`
                                  }, uu))), (0, Su.jsx)("input", {
                                    type: "search",
                                    value: Xu,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: uu => {
                                      Vu(uu.target.value)
                                    }
                                  })
                                ]
                              }), (0, Su.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [xu.map((uu => {
                                  const yu = "bloxd" === Ju ? VK(mu, uu) : null;
                                  return (0, Su.jsx)("button", {
                                    type: "button",
                                    title: uu,
                                    "aria-label": uu,
                                    "aria-pressed": uu === Ru,
                                    className: Qu()("DocsIconPickerOption", {
                                      Active: uu === Ru
                                    }),
                                    onClick: () => {
                                      Ku(uu)
                                    },
                                    children: "fontAwesome" === Ju ? (0, Su.jsx)(dy.c, {
                                      name: uu
                                    }) : yu ? (0, Su.jsx)("img", {
                                      src: yu,
                                      alt: ""
                                    }) : (0, Su.jsx)(Tu, {
                                      name: "image"
                                    })
                                  }, uu)
                                })), 0 === xu.length && (0, Su.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Xu, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function jK(uu) {
                            let {
                              property: Ru,
                              value: yu,
                              fontAwesomeIcons: Eu,
                              onChange: Ku
                            } = uu;
                            const {
                              field: Qu,
                              label: mu
                            } = Ru, Ju = uu => "" !== uu || Ru.isRequired ? uu : void 0;
                            switch (Qu.kind) {
                              case "text":
                                return Qu.multiline ? (0, Su.jsx)("textarea", {
                                  value: String(null !== yu && void 0 !== yu ? yu : ""),
                                  rows: 2,
                                  "aria-label": mu,
                                  onChange: uu => {
                                    Ku(uu.target.value)
                                  }
                                }) : (0, Su.jsx)("input", {
                                  type: "text",
                                  value: String(null !== yu && void 0 !== yu ? yu : ""),
                                  "aria-label": mu,
                                  onChange: uu => {
                                    Ku(Ju(uu.target.value))
                                  }
                                });
                              case "size":
                                return (0, Su.jsx)("input", {
                                  type: "text",
                                  value: String(null !== yu && void 0 !== yu ? yu : ""),
                                  placeholder: Ru.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": mu,
                                  spellCheck: !1,
                                  onChange: uu => {
                                    Ku(Ju(uu.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, Su.jsx)(TK, {
                                  value: String(null !== yu && void 0 !== yu ? yu : ""),
                                  label: mu,
                                  onChange: uu => {
                                    Ku(Ju(uu))
                                  }
                                });
                              case "colours": {
                                const uu = Array.isArray(yu) ? yu : [],
                                  Ru = uu => {
                                    Ku(uu.length > 0 ? uu : void 0)
                                  };
                                return (0, Su.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [uu.map(((yu, Eu) => (0, Su.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, Su.jsx)(TK, {
                                      value: yu,
                                      label: `${mu} ${Eu+1}`,
                                      onChange: yu => {
                                        Ru(uu.map(((uu, Ru) => Ru === Eu ? yu : uu)))
                                      }
                                    }), (0, Su.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Eu+1}`,
                                      onClick: () => {
                                        Ru(uu.filter(((uu, Ru) => Ru !== Eu)))
                                      },
                                      children: (0, Su.jsx)(Tu, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Eu))), (0, Su.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var yu;
                                      Ru([...uu, null !== (yu = uu.at(-1)) && void 0 !== yu ? yu : "#ffffff"])
                                    },
                                    children: [(0, Su.jsx)(Tu, {
                                      name: "plus"
                                    }), 0 === uu.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Nu;
                                const uu = "number" === typeof yu ? yu : Number(null !== (Nu = Ru.defaultText) && void 0 !== Nu ? Nu : 0);
                                return (0, Su.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, Su.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: uu,
                                    "aria-label": mu,
                                    onChange: uu => {
                                      Ku(Number(uu.target.value))
                                    }
                                  }), (0, Su.jsx)("output", {
                                    children: uu.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, Su.jsxs)("select", {
                                  value: String(null !== yu && void 0 !== yu ? yu : ""),
                                  "aria-label": mu,
                                  onChange: uu => {
                                    Ku(Ju(uu.target.value))
                                  },
                                  children: [!Ru.isRequired && (0, Su.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", Ru.defaultText, ")"]
                                  }), Qu.options.map((uu => (0, Su.jsx)("option", {
                                    value: uu,
                                    children: uu
                                  }, uu)))]
                                });
                              case "icon":
                                return (0, Su.jsx)(WK, {
                                  value: String(null !== yu && void 0 !== yu ? yu : ""),
                                  fontAwesomeIcons: Eu,
                                  onChange: Ku
                                })
                            }
                          }

                          function HK(uu) {
                            let Ru;
                            try {
                              Ru = JSON.parse(uu)
                            } catch (yu) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${yu.message}`
                              }
                            }
                            return yy(Ru) ? {
                              part: Ru,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function dK(uu) {
                            let {
                              parts: Ru,
                              index: yu,
                              fontAwesomeIcons: Ku,
                              onChange: Qu,
                              JA: mu,
                              onClose: Ju
                            } = uu;
                            const Nu = (0, Eu.useContext)(SR),
                              Vu = (0, Eu.useRef)(null),
                              ru = Ru[yu],
                              Bu = ZR(ru),
                              [xu, pu] = (0, Eu.useState)((() => JSON.stringify(ru, null, 2))),
                              Wu = (0, Eu.useMemo)((() => "other" === Bu ? HK(xu).error : null), [Bu, xu]);
                            (0, Eu.useEffect)((() => {
                              var uu;
                              null === (uu = Vu.current) || void 0 === uu || uu.focus()
                            }), []);
                            const ju = (0, Su.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: uu => {
                                uu.target === uu.currentTarget && Ju()
                              },
                              children: (0, Su.jsxs)("div", {
                                ref: Vu,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${yu+1}: ${FR[Bu]}`,
                                tabIndex: -1,
                                onKeyDown: uu => {
                                  "Escape" === uu.key ? (uu.stopPropagation(), Ju()) : "Tab" === uu.key && Vu.current && function(uu, Ru) {
                                    const yu = Array.from(uu.querySelectorAll(IR)),
                                      Eu = yu[0],
                                      Ku = yu.at(-1);
                                    if (!Eu || !Ku) return;
                                    const Qu = document.activeElement;
                                    !Ru.shiftKey || Qu !== Eu && Qu !== uu ? Ru.shiftKey || Qu !== Ku || (Ru.preventDefault(), Eu.focus()) : (Ru.preventDefault(), Ku.focus())
                                  }(Vu.current, uu)
                                },
                                children: [(0, Su.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, Su.jsxs)("div", {
                                    children: [(0, Su.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", yu + 1]
                                    }), (0, Su.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: FR[Bu]
                                    })]
                                  }), (0, Su.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: Ju,
                                    children: (0, Su.jsx)(Tu, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, Su.jsx)(BK, {
                                  parts: Ru,
                                  className: "DocsTextDialogPreview"
                                }), (0, Su.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Bu ? (0, Su.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, Su.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, Su.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: xu,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: uu => {
                                        pu(uu.target.value);
                                        const Ru = HK(uu.target.value);
                                        null !== Ru.part && Qu(Ru.part)
                                      }
                                    }), Wu && (0, Su.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: Wu
                                    })]
                                  }) : PR[Bu].map((uu => {
                                    const Ru = YR(ru, uu.path),
                                      yu = uu.isRequired ? JSON.stringify(qR(ru, uu.path)) === JSON.stringify(ru) : void 0 === Ru;
                                    return (0, Su.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, Su.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, Su.jsx)("span", {
                                          children: uu.label
                                        }), (0, Su.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: yu,
                                          "aria-label": `Reset ${uu.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Qu(qR(ru, uu.path))
                                          },
                                          children: [(0, Su.jsx)(Tu, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, Su.jsx)(jK, {
                                        property: uu,
                                        value: Ru,
                                        fontAwesomeIcons: Ku,
                                        onChange: Ru => {
                                          Qu(oR(ru, uu.path, Ru))
                                        }
                                      }), !uu.isRequired && (0, Su.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", uu.defaultText]
                                      })]
                                    }, uu.path.join("."))
                                  }))
                                }), (0, Su.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, Su.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: mu,
                                    children: [(0, Su.jsx)(Tu, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, Su.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: Ju,
                                    children: "Done"
                                  })]
                                }), (0, Su.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: xK.map((uu => (0, Su.jsx)("option", {
                                    value: uu
                                  }, uu)))
                                })]
                              })
                            });
                            return Nu ? (0, Xu.createPortal)(ju, Nu) : ju
                          }
                          const bK = [{
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
                            CK = Object.keys(wR);

                          function kK(uu) {
                            let {
                              fontAwesomeIcons: Ru
                            } = uu;
                            const [yu, Ku] = (0, Eu.useState)(bK[0].parts), [mu, Ju] = (0, Eu.useState)((() => fR(bK[0].parts))), [Nu, Xu] = (0, Eu.useState)(null), [Vu, ru] = (0, Eu.useState)(!1), [Bu, xu] = (0, Eu.useState)(null), [pu, Wu] = (0, Eu.useState)(!1), [ju, Hu] = (0, Eu.useState)(null), du = (0, Eu.useRef)(null), bu = fR(yu);
                            (0, Eu.useLayoutEffect)((() => {
                              var uu;
                              if (!ju) return;
                              const Ru = uu => {
                                  var Ru;
                                  return null === (Ru = du.current) || void 0 === Ru ? void 0 : Ru.querySelector(`[data-focus-key="${uu}"]`)
                                },
                                yu = Ru(ju.key);
                              null === (uu = yu && !yu.disabled ? yu : Ru(ju.fallback)) || void 0 === uu || uu.focus(), Hu(null)
                            }), [ju]);
                            const Cu = uu => {
                                Ku(uu), Ju(fR(uu)), Xu(null)
                              },
                              eu = uu => {
                                Cu(yu.filter(((Ru, yu) => yu !== uu))), Hu({
                                  key: `edit-${Math.min(uu,yu.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              Au = (uu, Ru) => {
                                const Eu = [...yu],
                                  [Ku] = Eu.splice(uu, 1);
                                Eu.splice(uu + Ru, 0, Ku), Cu(Eu);
                                Hu({
                                  key: `${Ru<0?"up":"down"}-${uu+Ru}`,
                                  fallback: `edit-${uu+Ru}`
                                })
                              };
                            return (0, Su.jsxs)("section", {
                              ref: du,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, Su.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, Su.jsxs)("div", {
                                  children: [(0, Su.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, Su.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, Su.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: bK.map((uu => (0, Su.jsx)("button", {
                                  type: "button",
                                  className: Qu()("DocsVariantChip", {
                                    Active: bu === fR(uu.parts)
                                  }),
                                  onClick: () => {
                                    Cu(uu.parts)
                                  },
                                  children: uu.label
                                }, uu.label)))
                              }), (0, Su.jsx)(BK, {
                                parts: yu,
                                className: "DocsTextEditorPreview"
                              }), (0, Su.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, Su.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Su.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, Su.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [yu.map(((uu, Ru) => {
                                      const Eu = ZR(uu);
                                      return (0, Su.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, Su.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${Ru}`,
                                          "aria-label": `Edit part ${Ru+1}, ${FR[Eu]}`,
                                          onClick: () => {
                                            xu(Ru)
                                          },
                                          children: [(0, Su.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: FR[Eu]
                                          }), (0, Su.jsx)(BK, {
                                            parts: [uu],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Eu && (0, Su.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: OR(uu)
                                          })]
                                        }), (0, Su.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, Su.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Ru+1} up`,
                                            "data-focus-key": `up-${Ru}`,
                                            disabled: 0 === Ru,
                                            onClick: () => {
                                              Au(Ru, -1)
                                            },
                                            children: (0, Su.jsx)(Tu, {
                                              name: "chevron-up"
                                            })
                                          }), (0, Su.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Ru+1} down`,
                                            "data-focus-key": `down-${Ru}`,
                                            disabled: Ru === yu.length - 1,
                                            onClick: () => {
                                              Au(Ru, 1)
                                            },
                                            children: (0, Su.jsx)(Tu, {
                                              name: "chevron-down"
                                            })
                                          }), (0, Su.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${Ru+1}`,
                                            onClick: () => {
                                              eu(Ru)
                                            },
                                            children: (0, Su.jsx)(Tu, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, Ru)
                                    })), 0 === yu.length && (0, Su.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, Su.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: uu => {
                                      "Escape" === uu.key && pu && (uu.stopPropagation(), Wu(!1), Hu({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, Su.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": pu,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        Wu(!pu)
                                      },
                                      children: [(0, Su.jsx)(Tu, {
                                        name: "plus"
                                      }), "Add a part", (0, Su.jsx)(Tu, {
                                        name: pu ? "chevron-up" : "chevron-down"
                                      })]
                                    }), pu && (0, Su.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: CK.map((uu => (0, Su.jsx)("li", {
                                        children: (0, Su.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (uu => {
                                              Cu([...yu, wR[uu]]), Wu(!1), xu(yu.length)
                                            })(uu)
                                          },
                                          children: FR[uu]
                                        })
                                      }, uu)))
                                    })]
                                  })]
                                }), (0, Su.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Su.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, Su.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Vu,
                                      onClick: () => {
                                        ru(!Vu)
                                      },
                                      children: [(0, Su.jsx)(Tu, {
                                        name: Vu ? "check" : "pencil"
                                      }), Vu ? "Done" : "Edit"]
                                    })]
                                  }), Vu ? (0, Su.jsxs)(Su.Fragment, {
                                    children: [(0, Su.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: mu,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: uu => {
                                        Ju(uu.target.value);
                                        const Ru = Ey(uu.target.value);
                                        Xu(Ru.error), Ru.parts && Ku(Ru.parts)
                                      }
                                    }), Nu && (0, Su.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Nu
                                    })]
                                  }) : (0, Su.jsx)(ku, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${bu})`
                                  })]
                                })]
                              }), null !== Bu && Bu < yu.length && (0, Su.jsx)(dK, {
                                parts: yu,
                                index: Bu,
                                fontAwesomeIcons: Ru,
                                onChange: uu => {
                                  ((uu, Ru) => {
                                    Cu(yu.map(((yu, Eu) => Eu === uu ? Ru : yu)))
                                  })(Bu, uu)
                                },
                                JA: () => {
                                  eu(Bu), xu(null)
                                },
                                onClose: () => {
                                  xu(null), Hu({
                                    key: `edit-${Bu}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var eK = yu(4617),
                            AK = yu(4598),
                            DK = yu(4611),
                            MK = yu(4626);
                          const IK = 40,
                            GK = 800,
                            UK = 150,
                            nK = 8e3,
                            sK = 2e3;

                          function tK(uu, Ru) {
                            return 12 * Math.log2(Ru / uu)
                          }

                          function lK(uu, Ru) {
                            return Math.round(uu * 2 ** (Ru / 12) * 10) / 10
                          }

                          function gK(uu) {
                            return `${uu} ms`
                          }

                          function cK(uu) {
                            return `${uu} st`
                          }
                          const LK = [{
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

                          function zK(uu) {
                            let {
                              synth: Ru,
                              onChange: yu
                            } = uu;
                            const Eu = (0, eK.k)(Ru);
                            return (0, Su.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, Su.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Su.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, Su.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, Su.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, Su.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, Su.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: eK.d.map((uu => (0, Su.jsx)("button", {
                                      type: "button",
                                      className: Qu()("DocsVariantChip", {
                                        Active: Ru.waveform === uu
                                      }),
                                      "aria-pressed": Ru.waveform === uu,
                                      onClick: () => {
                                        yu({
                                          waveform: uu
                                        })
                                      },
                                      children: uu
                                    }, uu)))
                                  })]
                                }), (0, Su.jsx)(aE, {
                                  label: "Pitch",
                                  min: 0,
                                  max: tK(IK, GK),
                                  step: .1,
                                  value: tK(IK, Ru.pitchHz),
                                  format: () => `${Ru.pitchHz} Hz`,
                                  onChange: uu => {
                                    yu({
                                      pitchHz: lK(IK, uu)
                                    })
                                  }
                                }), (0, Su.jsx)(aE, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: Ru.syllableMs,
                                  format: gK,
                                  onChange: uu => {
                                    yu({
                                      syllableMs: uu
                                    })
                                  }
                                }), (0, Su.jsx)(aE, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: Ru.volume,
                                  onChange: uu => {
                                    yu({
                                      volume: uu
                                    })
                                  }
                                })]
                              }), (0, Su.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Su.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, Su.jsx)(aE, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: Ru.durationMs,
                                  format: gK,
                                  onChange: uu => {
                                    yu({
                                      durationMs: uu
                                    })
                                  }
                                }), (0, Su.jsx)(aE, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Eu.durationMs,
                                  step: 1,
                                  value: Eu.attackMs,
                                  format: gK,
                                  onChange: uu => {
                                    yu({
                                      attackMs: uu
                                    })
                                  }
                                }), (0, Su.jsx)(aE, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Eu.durationMs - Eu.attackMs,
                                  step: 1,
                                  value: Eu.releaseMs,
                                  format: gK,
                                  onChange: uu => {
                                    yu({
                                      releaseMs: uu
                                    })
                                  }
                                }), (0, Su.jsx)(aE, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: Ru.glideSemitones,
                                  format: cK,
                                  onChange: uu => {
                                    yu({
                                      glideSemitones: uu
                                    })
                                  }
                                }), (0, Su.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, Su.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== Ru.lowpassHz,
                                    onChange: uu => {
                                      yu({
                                        lowpassHz: uu.target.checked ? sK : null
                                      })
                                    }
                                  }), (0, Su.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== Ru.lowpassHz && (0, Su.jsx)(aE, {
                                  label: "Filter",
                                  min: 0,
                                  max: tK(UK, nK),
                                  step: .1,
                                  value: tK(UK, Ru.lowpassHz),
                                  format: () => `${Ru.lowpassHz} Hz`,
                                  onChange: uu => {
                                    yu({
                                      lowpassHz: lK(UK, uu)
                                    })
                                  }
                                })]
                              }), (0, Su.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Su.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), LK.map((uu => {
                                  let {
                                    key: Eu,
                                    label: Ku,
                                    max: Qu
                                  } = uu;
                                  return (0, Su.jsx)(aE, {
                                    label: Ku,
                                    min: 0,
                                    max: Qu,
                                    step: .1,
                                    value: Ru.intonation[Eu],
                                    format: cK,
                                    onChange: uu => {
                                      yu({
                                        intonation: {
                                          ...Ru.intonation,
                                          [Eu]: uu
                                        }
                                      })
                                    }
                                  }, Eu)
                                }))]
                              })]
                            })
                          }
                          const FK = Object.keys(eK.g),
                            wK = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function ZK(uu) {
                            var Ru;
                            const yu = JSON.stringify((0, eK.k)(uu));
                            return null !== (Ru = FK.find((uu => JSON.stringify((0, eK.k)(eK.g[uu])) === yu))) && void 0 !== Ru ? Ru : null
                          }

                          function hK(uu) {
                            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof uu || null === uu) return JSON.stringify(uu);
                            return `{\n${Object.entries(uu).map((uu=>{let[yu,Eu]=uu;return`${Ru}    ${yu}: ${hK(Eu,`${Ru}    `)},`})).join("\n")}\n${Ru}}`
                          }

                          function PK(uu, Ru, yu) {
                            const Eu = ZK(uu),
                              Ku = [`    line: ${JSON.stringify(Ru)},`];
                            return yu && Ku.push(`    speakerName: ${JSON.stringify(yu)},`), Ku.push("    voice,"), `const voice = ${Eu?JSON.stringify(Eu):hK((0,eK.k)(uu))}\n\napi.setClientOption(playerId, "dialogue", {\n${Ku.join("\n")}\n})`
                          }
                          const iK = 400,
                            YK = 90;
                          let oK = null;

                          function qK(uu, Ru, yu) {
                            return oK ??= new AudioContext, oK.resume(), (0, MK.e)(oK, oK.destination, uu, Ru, yu, (() => {}))
                          }

                          function OK() {
                            const [uu, Ru] = (0, Eu.useState)(eK.g.regular), [yu, Ku] = (0, Eu.useState)(wK[0]), [mu, Ju] = (0, Eu.useState)("Innkeeper"), [Nu, Xu] = (0, Eu.useState)(0), Vu = VE((uu => uu.volume)), ru = (0, Eu.useRef)(null), Bu = (0, Eu.useRef)(0), xu = (0, Eu.useRef)(0), pu = () => {
                              var uu;
                              null === (uu = ru.current) || void 0 === uu || uu.call(ru), ru.current = null
                            };
                            (0, Eu.useEffect)((() => () => {
                              var uu;
                              null === (uu = ru.current) || void 0 === uu || uu.call(ru), window.clearTimeout(Bu.current)
                            }), []);
                            const Wu = (0, Eu.useMemo)((() => ({
                                line: yu,
                                speakerName: mu || void 0,
                                voice: uu
                              })), [yu, mu, uu]),
                              ju = (0, Eu.useRef)(Wu);
                            ju.current = Wu;
                            const du = ZK(uu),
                              bu = uu => {
                                window.clearTimeout(Bu.current), pu();
                                const {
                                  plan: Ru,
                                  synth: yu
                                } = (0, DK.g)(uu);
                                yu && (ru.current = qK(yu, Ru.blips, Vu)), Xu((uu => uu + 1))
                              },
                              Cu = PK(uu, yu, mu);
                            return (0, Su.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, Su.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, Su.jsxs)("div", {
                                  children: [(0, Su.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, Su.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, Su.jsx)(Hu, {
                                  text: Cu,
                                  label: "Copy code"
                                })]
                              }), (0, Su.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [FK.map((uu => (0, Su.jsx)("button", {
                                  type: "button",
                                  className: Qu()("DocsVariantChip", {
                                    Active: du === uu
                                  }),
                                  "aria-pressed": du === uu,
                                  onClick: () => {
                                    (uu => {
                                      const yu = eK.g[uu];
                                      Ru(yu), bu({
                                        ...Wu,
                                        voice: yu
                                      })
                                    })(uu)
                                  },
                                  children: uu
                                }, uu))), !du && (0, Su.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, Su.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, Su.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, Su.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, Su.jsx)(AK.b, {
                                      display: Wu
                                    }, Nu)
                                  }), (0, Su.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: uu => {
                                      uu.preventDefault(), bu(Wu)
                                    },
                                    children: [(0, Su.jsx)("input", {
                                      value: yu,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: uu => {
                                        Ku(uu.target.value)
                                      }
                                    }), (0, Su.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, Su.jsx)(Tu, {
                                        name: "play"
                                      }), (0, Su.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, Su.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: wK.map((uu => (0, Su.jsx)("button", {
                                      type: "button",
                                      className: Qu()("DocsVariantChip", {
                                        Active: yu === uu
                                      }),
                                      onClick: () => {
                                        var Ru;
                                        Ku(Ru = uu), bu({
                                          ...Wu,
                                          line: Ru
                                        })
                                      },
                                      children: uu
                                    }, uu)))
                                  }), (0, Su.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, Su.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, Su.jsx)("input", {
                                      value: mu,
                                      placeholder: "No name",
                                      onChange: uu => {
                                        Ju(uu.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, Su.jsx)(zK, {
                                  synth: uu,
                                  onChange: yu => {
                                    const Eu = {
                                      ...uu,
                                      ...yu
                                    };
                                    Ru(Eu);
                                    const Ku = {
                                        ...Wu,
                                        voice: Eu
                                      },
                                      Qu = performance.now();
                                    if (Qu - xu.current >= YK) {
                                      xu.current = Qu, pu();
                                      const uu = (0, DK.g)(Ku).plan.blips[0];
                                      uu && (ru.current = qK((0, eK.k)(Eu), [{
                                        ...uu,
                                        atMs: 0
                                      }], Vu))
                                    }
                                    window.clearTimeout(Bu.current), Bu.current = window.setTimeout((() => {
                                      bu(ju.current)
                                    }), iK)
                                  }
                                })]
                              }), (0, Su.jsx)(ku, {
                                code: Cu,
                                lang: "ts"
                              })]
                            })
                          }
                          var vK = yu(4640);
                          const aK = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            fK = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            uQ = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${fK}`, "g"), vK.o],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, vK.o]
                            ];

                          function RQ(uu) {
                            return `${uu.pageId}#${uu.anchor}`
                          }
                          let yQ, EQ, KQ;

                          function QQ(uu) {
                            const Ru = (0, eu.d)(uu),
                              yu = new Set;
                            for (const [, , Eu] of Ru.matchAll(eu.b)) {
                              const uu = Eu.startsWith("#") ? Zu(Eu) : null,
                                Ru = uu ? RQ({
                                  pageId: uu.page.id,
                                  anchor: uu.anchor
                                }) : null;
                              null !== Ru && (yQ || (yQ = new Set(gu.flatMap((uu => Iu(uu.layout) ? Fu(uu).sections.map((Ru => RQ({
                                pageId: uu.id,
                                anchor: Ru.heading.anchor
                              }))) : [])))), yQ).has(Ru) && yu.add(Ru)
                            }
                            for (const [, , Eu] of Ru.matchAll(aK)) {
                              const uu = BR(Eu);
                              uu && yu.add(RQ(uu))
                            }
                            return yu
                          }

                          function mQ(uu, Ru) {
                            const yu = new Set,
                              Eu = function(uu) {
                                return uu.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(uu);
                            for (const [, Ku] of Eu.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) yu.add(Ku);
                            for (const [Ku, Qu] of uQ)
                              for (const [, uu] of(0, vK.i)(Eu, Ku, Qu)) Ru.has(uu) && yu.add(uu);
                            return yu
                          }

                          function JQ(uu, Ru, yu, Eu) {
                            const Ku = uu.get(Ru);
                            Ku ? !Eu && Ku.some((uu => uu.pageId === yu.pageId)) || Ku.push(yu) : uu.set(Ru, [yu])
                          }
                          const NQ = /^[A-Za-z_$][\w$]*$/;

                          function XQ(uu) {
                            return NQ.test(uu.name) ? uu.name : "options"
                          }

                          function VQ(uu, Ru) {
                            const yu = uu.params.map(XQ).join(", ");
                            return Ru ? `${uu.name} = (${yu}) => {\n\t\n}` : `api.${uu.name}(${yu})`
                          }

                          function rQ(uu) {
                            let {
                              method: Ru,
                              isCallback: yu
                            } = uu;
                            return (0, Su.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, Su.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [yu ? (0, Su.jsxs)(Su.Fragment, {
                                  children: [(0, Su.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Ru.name
                                  }), (0, Su.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, Su.jsxs)(Su.Fragment, {
                                  children: [(0, Su.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, Su.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Ru.name
                                  }), (0, Su.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), Ru.params.map(((uu, yu) => (0, Su.jsxs)(Eu.Fragment, {
                                  children: [yu > 0 && (0, Su.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, Su.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${Ru.name}-${XQ(uu)}`,
                                    children: uu.name
                                  })]
                                }, uu.name))), (0, Su.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: yu ? ") => " : ")"
                                }), yu && !Ru.returns && (0, Su.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), Ru.returns && Ru.returns.type && (0, Su.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!yu && (0, Su.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, Su.jsx)(AR, {
                                  type: Ru.returns.type
                                })]
                              })]
                            })
                          }

                          function BQ(uu) {
                            let {
                              title: Ru,
                              references: yu
                            } = uu;
                            const Ku = (0, Eu.useContext)(xR);
                            return (0, Su.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, Su.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: Ru
                              }), yu.map((uu => (0, Su.jsx)(mu.c, {
                                to: Pu(Ku, Lu(uu.pageId), uu.anchor),
                                children: uu.label
                              }, `${uu.pageId}#${uu.anchor}`)))]
                            })
                          }

                          function xQ(uu) {
                            var Ru, yu;
                            let {
                              pageId: Eu,
                              anchor: Ku
                            } = uu;
                            const Qu = RQ({
                                pageId: Eu,
                                anchor: Ku
                              }),
                              mu = null !== (Ru = function() {
                                if (!KQ) {
                                  KQ = new Map;
                                  const Eu = new Set(gu.filter((uu => "callbacks" === uu.layout)).flatMap((uu => Fu(uu).sections.map((uu => uu.heading.text)))));
                                  for (const Ku of gu)
                                    if ("article" === Ku.layout || "snippets" === Ku.layout)
                                      for (const Qu of (0, eu.p)(Fu(Ku)))
                                        for (const {
                                            code: mu
                                          }
                                          of(0, eu.e)(Qu.blocks))
                                          for (const Ju of mQ(mu, Eu)) {
                                            const Eu = rR().get(Ju);
                                            if (Eu) {
                                              var uu, Ru, yu;
                                              const mu = {
                                                pageId: Ku.id,
                                                anchor: null !== (uu = null === (Ru = Qu.heading) || void 0 === Ru ? void 0 : Ru.anchor) && void 0 !== uu ? uu : "",
                                                label: null !== (yu = Ku.navTitle) && void 0 !== yu ? yu : Ku.title
                                              };
                                              JQ(KQ, RQ(Eu), mu, !1)
                                            }
                                          }
                                }
                                return KQ
                              }().get(Qu)) && void 0 !== Ru ? Ru : [],
                              Ju = null !== (yu = function() {
                                if (!EQ) {
                                  EQ = new Map;
                                  const uu = Lu("changelog");
                                  for (const Ru of Fu(uu).sections) {
                                    const yu = new Set(Ru.blocks.flatMap((uu => [...QQ(uu)])));
                                    for (const Eu of yu) {
                                      const yu = {
                                        pageId: uu.id,
                                        anchor: Ru.heading.anchor,
                                        label: Ru.heading.text
                                      };
                                      JQ(EQ, Eu, yu, !0)
                                    }
                                  }
                                }
                                return EQ
                              }().get(Qu)) && void 0 !== yu ? yu : [];
                            return 0 === mu.length && 0 === Ju.length ? null : (0, Su.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [mu.length > 0 && (0, Su.jsx)(BQ, {
                                title: "Used in",
                                references: mu
                              }), Ju.length > 0 && (0, Su.jsx)(BQ, {
                                title: "Changelog",
                                references: Ju
                              })]
                            })
                          }

                          function SQ(uu) {
                            let {
                              method: Ru,
                              pageId: yu,
                              anchor: Eu,
                              isCallback: Ku
                            } = uu;
                            const Qu = Ku ? void 0 : JR().get(Ru.name),
                              mu = Ru.description.length > 0 || null === Qu || void 0 === Qu || !Qu.description ? Ru.description : (0, eu.v)(Qu.description);
                            return (0, Su.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, Su.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Su.jsx)(Xy, {
                                  level: 2,
                                  text: Ru.name,
                                  anchor: Eu,
                                  className: "DocsCardTitle"
                                }), (0, Su.jsx)(Hu, {
                                  text: VQ(Ru, Ku),
                                  label: Ku ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Su.jsx)(rQ, {
                                method: Ru,
                                isCallback: Ku
                              }), Qu && null !== Qu.deprecation && (0, Su.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, Su.jsx)("strong", {
                                  children: "Deprecated"
                                }), Qu.deprecation && (0, Su.jsxs)(Su.Fragment, {
                                  children: [": ", (0, Su.jsx)(CR, {
                                    text: (Ju = Qu.deprecation, (0, vK.u)(Ju, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, vK.l)("`\\w"), (uu => {
                                      let [Ru] = uu;
                                      return rR().has(Ru) ? `\`${Ru}\`` : Ru
                                    })))
                                  })]
                                })]
                              }), mu.length > 0 && (0, Su.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Su.jsx)(xy, {
                                  blocks: mu
                                })
                              }), Ru.params.length > 0 && (0, Su.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Su.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, Su.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: Ru.params.map((uu => (0, Su.jsxs)("div", {
                                    id: `${Ru.name}-${XQ(uu)}`,
                                    className: "DocsParam",
                                    children: [(0, Su.jsxs)("dt", {
                                      children: [(0, Su.jsx)("code", {
                                        className: "DocsParamName",
                                        children: uu.name
                                      }), (0, Su.jsx)(AR, {
                                        type: uu.type
                                      })]
                                    }), uu.description && (0, Su.jsx)("dd", {
                                      children: (0, Su.jsx)(CR, {
                                        text: uu.description
                                      })
                                    })]
                                  }, uu.name)))
                                })]
                              }), Ru.returns && (Ru.returns.type || Ru.returns.description.length > 0) && (0, Su.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Su.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, Su.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [Ru.returns.type && (0, Su.jsx)(AR, {
                                    type: Ru.returns.type
                                  }), Ru.returns.description.length > 0 && (0, Su.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, Su.jsx)(xy, {
                                      blocks: Ru.returns.description
                                    })
                                  })]
                                })]
                              }), (0, Su.jsx)(xQ, {
                                pageId: yu,
                                anchor: Eu
                              })]
                            });
                            var Ju
                          }

                          function pQ(uu) {
                            var Ru;
                            return null !== uu.defaultValue && "undefined" !== uu.defaultValue ? uu.defaultValue : null !== (Ru = uu.example) && void 0 !== Ru ? Ru : "value"
                          }

                          function TQ(uu) {
                            let {
                              setting: Ru,
                              pageId: yu,
                              anchor: Eu,
                              setterSnippet: Ku
                            } = uu;
                            const Qu = null === Ru.defaultValue ? null : WR(Ru.defaultValue);
                            return (0, Su.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, Su.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Su.jsx)(Xy, {
                                  level: 2,
                                  text: Ru.name,
                                  anchor: Eu,
                                  className: "DocsCardTitle"
                                }), (0, Su.jsx)(Hu, {
                                  text: Ku(Ru.name, pQ(Ru)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Su.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, Su.jsxs)("div", {
                                  children: [(0, Su.jsx)("dt", {
                                    children: "Type"
                                  }), (0, Su.jsx)("dd", {
                                    children: (0, Su.jsx)(AR, {
                                      type: Ru.type
                                    })
                                  })]
                                }), null !== Ru.defaultValue && (0, Su.jsxs)("div", {
                                  children: [(0, Su.jsx)("dt", {
                                    children: "Default"
                                  }), (0, Su.jsx)("dd", {
                                    children: (0, Su.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Qu && (0, Su.jsx)(jR, {
                                        colour: Qu
                                      }), Ru.defaultValue]
                                    })
                                  })]
                                }), null !== Ru.example && (0, Su.jsxs)("div", {
                                  children: [(0, Su.jsx)("dt", {
                                    children: "Example"
                                  }), (0, Su.jsx)("dd", {
                                    children: (0, Su.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: Ru.example
                                    })
                                  })]
                                })]
                              }), Ru.description.length > 0 && (0, Su.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Su.jsx)(xy, {
                                  blocks: Ru.description
                                })
                              }), (0, Su.jsx)(xQ, {
                                pageId: yu,
                                anchor: Eu
                              })]
                            })
                          }

                          function WQ(uu) {
                            let {
                              section: Ru
                            } = uu;
                            return (0, Su.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, Su.jsx)(Xy, {
                                level: 2,
                                text: Ru.heading.text,
                                anchor: Ru.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, Su.jsx)("div", {
                                className: "DocsProse",
                                children: (0, Su.jsx)(xy, {
                                  blocks: Ru.blocks
                                })
                              })]
                            })
                          }

                          function jQ(uu) {
                            let {
                              section: Ru
                            } = uu;
                            return (0, Su.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Su.jsx)(Xy, {
                                level: Ru.heading.level,
                                text: Ru.heading.text,
                                anchor: Ru.heading.anchor
                              }), (0, Su.jsx)(xy, {
                                blocks: Ru.blocks
                              })]
                            })
                          }
                          const HQ = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function dQ(uu) {
                            let {
                              page: Ru,
                              section: yu
                            } = uu;
                            if ("methods" === Ru.layout || "callbacks" === Ru.layout) return (0, Su.jsx)(SQ, {
                              method: ky(yu),
                              pageId: Ru.id,
                              anchor: yu.heading.anchor,
                              isCallback: "callbacks" === Ru.layout
                            });
                            if ("settings" === Ru.layout) {
                              const uu = function(uu) {
                                const Ru = {
                                  name: uu.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Eu of uu.blocks) {
                                  var yu;
                                  if (Cy(Eu)) continue;
                                  const uu = "paragraph" === Eu.kind ? Eu.text.match(ey) : null;
                                  if (!uu) {
                                    Ru.description.push(Eu);
                                    continue
                                  }
                                  const Ku = null !== (yu = by(uu[2])) && void 0 !== yu ? yu : uu[2];
                                  "Type" === uu[1] ? Ru.type = Ku : "Default" === uu[1] ? Ru.defaultValue = Ku : "" !== Ku && (Ru.example = Ku)
                                }
                                return Ru.type ? Ru : null
                              }(yu);
                              if (uu) return (0, Su.jsx)(TQ, {
                                setting: uu,
                                pageId: Ru.id,
                                anchor: yu.heading.anchor,
                                setterSnippet: Ru.setterSnippet
                              })
                            }
                            return "snippets" === Ru.layout ? (0, Su.jsx)(WQ, {
                              section: yu
                            }) : "changelog" === Ru.layout ? (0, Su.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, Su.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, Su.jsx)(Xy, {
                                  level: 2,
                                  text: yu.heading.text,
                                  anchor: yu.heading.anchor
                                })
                              }), (0, Su.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, Su.jsx)(xy, {
                                  blocks: Ay(yu.blocks)
                                })
                              })]
                            }) : Ru.gallery ? (0, Su.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Su.jsx)(Xy, {
                                level: yu.heading.level,
                                text: yu.heading.text,
                                anchor: yu.heading.anchor
                              }), (0, Su.jsx)(DE, {
                                kind: Ru.gallery,
                                content: Fu(Ru),
                                blocks: yu.blocks
                              })]
                            }) : (0, Su.jsx)(jQ, {
                              section: yu
                            })
                          }

                          function bQ(uu) {
                            let {
                              page: Ru,
                              onTocChange: yu
                            } = uu;
                            const Ku = Fu(Ru),
                              [Qu, mu] = (0, Eu.useState)(""),
                              Ju = "article" !== Ru.layout,
                              Nu = Ty(Ru.gallery) ? Ru.gallery : null,
                              Xu = null !== Nu,
                              Vu = Qu.trim().toLowerCase(),
                              ru = (0, Eu.useRef)(null),
                              Bu = (0, Eu.useCallback)((uu => {
                                var Ru;
                                null === (Ru = ru.current) || void 0 === Ru || Ru.preview(uu)
                              }), []),
                              xu = (0, Eu.useMemo)((() => {
                                if (!Ru.hasParticlePlayground) return [];
                                const uu = Gy(Ku.intro).find((uu => "names" === uu.kind && !uu.names.some((uu => null !== zy(uu.name)))));
                                return "names" === (null === uu || void 0 === uu ? void 0 : uu.kind) ? uu.names.map((uu => uu.name)) : []
                              }), [Ru, Ku]),
                              pu = (0, Eu.useMemo)((() => {
                                if (!Ru.hasTextPlayground) return [];
                                const uu = Ku.sections.flatMap((uu => uu.blocks.flatMap((uu => {
                                  var Ru;
                                  return (null !== (Ru = Iy(uu)) && void 0 !== Ru ? Ru : []).flatMap((uu => zR(uu.name) ? [uu.name] : []))
                                }))));
                                return [...new Set(uu)]
                              }), [Ru, Ku]),
                              Tu = (0, Eu.useMemo)((() => Vu ? Ku.sections.filter((uu => function(uu, Ru) {
                                return !!uu.heading.text.toLowerCase().includes(Ru) || uu.blocks.some((uu => (0, eu.d)(uu).toLowerCase().includes(Ru)))
                              }(uu, Vu))) : Ku.sections), [Ku, Vu]),
                              Wu = (0, Eu.useMemo)((() => function(uu, Ru) {
                                return "article" !== uu.layout ? Ru.map((uu => ({
                                  anchor: uu.heading.anchor,
                                  text: uu.heading.text,
                                  level: 2
                                }))) : Ru.flatMap((uu => {
                                  const Ru = uu.blocks.flatMap((uu => "heading" === uu.kind && 3 === uu.level ? [{
                                    anchor: uu.anchor,
                                    text: uu.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: uu.heading.anchor,
                                    text: uu.heading.text,
                                    level: 2
                                  }, ...Ru]
                                }))
                              }(Ru, Tu)), [Ru, Tu]);
                            return (0, Eu.useEffect)((() => {
                              yu(Wu)
                            }), [Wu, yu]), (0, Su.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, Su.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, Su.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Ku.title || Ru.title
                                }), (0, Su.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: Ru.summary
                                }), (0, Su.jsx)(oE, {
                                  page: Ru
                                }), Ju && (0, Su.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, Su.jsxs)("span", {
                                    children: [(0, Su.jsx)("strong", {
                                      children: Ku.sections.length
                                    }), " ", HQ[Ru.layout]]
                                  })
                                })]
                              }), "" === Ru.slug && (0, Su.jsx)(IE, {}), Nu && (0, Su.jsx)(sE, {
                                kind: Nu
                              }, Nu), Ru.hasParticlePlayground && (0, Su.jsx)(JK, {
                                ref: ru,
                                textures: xu
                              }), !Xu && Ku.intro.length > 0 && (0, Su.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: Ru.gallery ? (0, Su.jsx)(WE.Provider, {
                                  value: Ru.hasParticlePlayground ? Bu : null,
                                  children: (0, Su.jsx)(DE, {
                                    kind: Ru.gallery,
                                    content: Ku,
                                    blocks: Ku.intro
                                  })
                                }) : (0, Su.jsx)(xy, {
                                  blocks: Ay(Ku.intro)
                                })
                              }), Ru.hasTextPlayground && (0, Su.jsx)(kK, {
                                fontAwesomeIcons: pu
                              }), Ru.hasVoicePlayground && (0, Su.jsx)(OK, {}), Ru.childPageIds && (0, Su.jsx)(IE, {
                                cards: Ru.childPageIds.map((uu => ({
                                  pageId: uu
                                }))),
                                label: Ru.title
                              }), Ju && (0, Su.jsx)(Hy, {
                                className: "DocsFilterBar",
                                value: Qu,
                                placeholder: `Filter ${Ku.sections.length} ${HQ[Ru.layout]}\u2026`,
                                label: `Filter ${HQ[Ru.layout]}`,
                                onChange: mu,
                                count: Vu ? {
                                  visible: Tu.length,
                                  total: Ku.sections.length
                                } : null
                              }), !Xu && (0, Su.jsxs)("div", {
                                className: `DocsSections Layout-${Ru.layout}`,
                                children: [Tu.map((uu => (0, Su.jsx)(dQ, {
                                  page: Ru,
                                  section: uu
                                }, uu.heading.anchor))), 0 === Tu.length && (0, Su.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", HQ[Ru.layout], " match \u201c", Qu, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const CQ = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function kQ(uu) {
                            let {
                              entry: Ru,
                              isActive: yu,
                              onNavigate: Eu,
                              label: Ku,
                              children: mu
                            } = uu;
                            return (0, Su.jsx)("a", {
                              href: `#${Ru.anchor}`,
                              "aria-label": Ku,
                              className: Qu()(`Level${Ru.level}`, {
                                Active: yu
                              }),
                              "aria-current": yu ? "location" : void 0,
                              onClick: uu => {
                                uu.preventDefault(), Eu(Ru.anchor)
                              },
                              children: mu
                            })
                          }

                          function eQ(uu) {
                            let {
                              toc: Ru,
                              activeAnchor: yu,
                              onNavigate: Ku
                            } = uu;
                            const mu = Math.max(0, Ru.findIndex((uu => uu.anchor === yu))),
                              Ju = (0, Eu.useRef)(null),
                              Nu = (0, Eu.useRef)(!1);
                            (0, Eu.useEffect)((() => {
                              var uu, yu;
                              const Eu = null === (uu = Ju.current) || void 0 === uu ? void 0 : uu.closest(".DocsToc"),
                                Ku = null === (yu = Ju.current) || void 0 === yu ? void 0 : yu.querySelector(".DocsTimelineNotch.Active");
                              if (!Eu || !Ku) return;
                              let Qu = 0;
                              if (mu === Ru.length - 1) Qu = Eu.scrollHeight;
                              else if (mu > 0) {
                                const uu = Eu.getBoundingClientRect(),
                                  Ru = Ku.getBoundingClientRect();
                                Qu = Eu.scrollTop + Ru.top + Ru.height / 2 - (uu.top + Eu.clientHeight / 2)
                              }
                              Eu.scrollTo({
                                top: Qu,
                                behavior: Nu.current ? "smooth" : "auto"
                              }), Nu.current = !0
                            }), [mu, Ru.length]);
                            const Xu = [];
                            return Ru.forEach(((uu, Ru) => {
                              var yu, Eu, Ku;
                              const Qu = function(uu) {
                                  const Ru = uu.trim().match(CQ);
                                  return Ru ? {
                                    day: Ru[1],
                                    month: `${Ru[2]} ${Ru[3]}`
                                  } : null
                                }(uu.text),
                                mu = null !== (yu = null === Qu || void 0 === Qu ? void 0 : Qu.month) && void 0 !== yu ? yu : null;
                              null !== mu && (null === (Eu = Xu.at(-1)) || void 0 === Eu ? void 0 : Eu.month) === mu || Xu.push({
                                month: mu,
                                entries: []
                              }), Xu.at(-1).entries.push({
                                entry: uu,
                                day: null !== (Ku = null === Qu || void 0 === Qu ? void 0 : Qu.day) && void 0 !== Ku ? Ku : null,
                                index: Ru
                              })
                            })), (0, Su.jsx)("ol", {
                              ref: Ju,
                              className: "DocsTimeline",
                              children: Xu.map((uu => {
                                let {
                                  month: Ru,
                                  entries: yu
                                } = uu;
                                return (0, Su.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [Ru && (0, Su.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: Ru
                                  }), (0, Su.jsx)("ol", {
                                    children: yu.map((uu => {
                                      let {
                                        entry: Ru,
                                        day: yu,
                                        index: Eu
                                      } = uu;
                                      return (0, Su.jsx)("li", {
                                        className: Qu()("DocsTimelineNotch", {
                                          Passed: Eu < mu,
                                          Active: Eu === mu
                                        }),
                                        children: (0, Su.jsx)(kQ, {
                                          entry: Ru,
                                          isActive: Eu === mu,
                                          onNavigate: Ku,
                                          label: Ru.text,
                                          children: (0, Su.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== yu && void 0 !== yu ? yu : Ru.text
                                          })
                                        })
                                      }, Ru.anchor)
                                    }))
                                  })]
                                }, yu[0].entry.anchor)
                              }))
                            })
                          }

                          function AQ(uu) {
                            let {
                              isChangelog: Ru,
                              toc: yu,
                              activeAnchor: Eu,
                              onNavigate: Ku
                            } = uu;
                            return 0 === yu.length ? null : (0, Su.jsxs)(Su.Fragment, {
                              children: [(0, Su.jsx)("div", {
                                className: "DocsTocTitle",
                                children: Ru ? "Updates" : "On this page"
                              }), Ru ? (0, Su.jsx)(eQ, {
                                toc: yu,
                                activeAnchor: Eu,
                                onNavigate: Ku
                              }) : (0, Su.jsx)("ul", {
                                children: yu.map((uu => (0, Su.jsx)("li", {
                                  children: (0, Su.jsx)(kQ, {
                                    entry: uu,
                                    isActive: uu.anchor === Eu,
                                    onNavigate: Ku,
                                    children: uu.text.replace(/`/g, "")
                                  })
                                }, uu.anchor)))
                              })]
                            })
                          }
                          const DQ = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            MQ = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            IQ = 20,
                            GQ = 10,
                            UQ = 40,
                            nQ = 120;
                          let sQ;

                          function tQ(uu) {
                            const Ru = uu.gallery;
                            if (!Ru) return [];
                            if (Ty(Ru)) return function(uu) {
                              return jy(uu).entries.map((uu => uu.name))
                            }(Ru).map((yu => ({
                              page: uu,
                              anchor: ny(Ru, yu),
                              title: yu,
                              kind: MQ[Ru],
                              text: "",
                              listedUnder: uu.title
                            })));
                            const yu = Fu(uu);
                            return (0, eu.p)(yu).flatMap((Eu => {
                              const Ku = Eu.heading ? `${uu.title} \u203a ${Eu.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : uu.title;
                              return ty(Ru, yu, Eu.blocks).flatMap((yu => "names" !== yu.kind ? [] : yu.names.map((Eu => {
                                const Qu = yu.isSongs ? "Song" : MQ[Ru];
                                return {
                                  page: uu,
                                  anchor: Eu.anchor,
                                  title: Eu.name,
                                  kind: Qu,
                                  text: "",
                                  listedUnder: Ku
                                }
                              }))))
                            }))
                          }

                          function lQ(uu, Ru, yu) {
                            const Eu = uu.title.toLowerCase();
                            let Ku = 0;
                            if (Eu === Ru) Ku = 100;
                            else if (Eu.startsWith(Ru)) Ku = 80;
                            else if (Eu.includes(Ru)) Ku = 60;
                            else if (yu.every((uu => Eu.includes(uu)))) Ku = 45;
                            else {
                              if (!uu.text.toLowerCase().includes(Ru)) return 0;
                              Ku = 20
                            }
                            return Ku - Math.min(Eu.length / 10, 9) + ("Page" === uu.kind ? 8 : "Method" === uu.kind ? 3 : 0) - (uu.listedUnder ? IQ : 0)
                          }

                          function gQ(uu, Ru) {
                            const yu = uu.toLowerCase().indexOf(Ru),
                              Eu = Math.max(0, yu - nQ / 3);
                            return `${Eu>0?"\u2026":""}${uu.slice(Eu,Eu+nQ)}${Eu+nQ<uu.length?"\u2026":""}`
                          }

                          function cQ(uu) {
                            let {
                              text: Ru,
                              query: yu
                            } = uu;
                            const Eu = yu ? Ru.toLowerCase().indexOf(yu) : -1;
                            return -1 === Eu ? (0, Su.jsx)(Su.Fragment, {
                              children: Ru
                            }) : (0, Su.jsxs)(Su.Fragment, {
                              children: [Ru.slice(0, Eu), (0, Su.jsx)("mark", {
                                children: Ru.slice(Eu, Eu + yu.length)
                              }), Ru.slice(Eu + yu.length)]
                            })
                          }

                          function LQ(uu) {
                            let {
                              basePath: Ru,
                              onClose: yu
                            } = uu;
                            const Ku = (0, Ju.t)(),
                              [mu, Nu] = (0, Eu.useState)(""),
                              [Xu, Vu] = (0, Eu.useState)(0),
                              ru = (0, Eu.useRef)(null),
                              Bu = (0, Eu.useRef)(null),
                              xu = mu.trim().toLowerCase(),
                              pu = (0, Eu.useMemo)((() => {
                                const uu = (sQ || (sQ = gu.flatMap((uu => {
                                  const Ru = Fu(uu);
                                  return [{
                                    page: uu,
                                    anchor: "",
                                    title: uu.title,
                                    kind: "Page",
                                    text: uu.summary
                                  }, ...Ru.sections.flatMap((Ru => {
                                    const yu = Ru.blocks.filter((uu => "paragraph" === uu.kind)).map(eu.d).join(" ").replace(/[`*]/g, ""),
                                      Eu = {
                                        page: uu,
                                        anchor: Ru.heading.anchor,
                                        title: Ru.heading.text.replace(/`/g, ""),
                                        kind: DQ[uu.layout],
                                        text: yu
                                      },
                                      Ku = Ru.blocks.flatMap((Ru => "article" === uu.layout && "heading" === Ru.kind && 3 === Ru.level ? [{
                                        page: uu,
                                        anchor: Ru.anchor,
                                        title: Ru.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Eu.title
                                      }] : []));
                                    return [Eu, ...Ku]
                                  })), ...tQ(uu)]
                                }))), sQ);
                                if (!xu) return uu.filter((uu => "Page" === uu.kind));
                                const Ru = xu.split(/\s+/);
                                let yu = 0;
                                return uu.map((uu => ({
                                  entry: uu,
                                  score: lQ(uu, xu, Ru)
                                }))).filter((uu => uu.score > 0)).sort(((uu, Ru) => Ru.score - uu.score)).filter((uu => !uu.entry.listedUnder || (yu++, yu <= GQ))).slice(0, UQ).map((uu => uu.entry))
                              }), [xu]);
                            (0, Eu.useEffect)((() => {
                              Vu(0)
                            }), [xu]), (0, Eu.useEffect)((() => {
                              const uu = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === uu || void 0 === uu || uu.focus()
                              }
                            }), []), (0, Eu.useEffect)((() => {
                              var uu, Ru;
                              null === (uu = ru.current) || void 0 === uu || null === (Ru = uu.querySelector(".Active")) || void 0 === Ru || Ru.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Xu]);
                            const Wu = uu => {
                              Ku(Pu(Ru, uu.page, uu.anchor)), yu()
                            };
                            return (0, Su.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: uu => {
                                uu.target === uu.currentTarget && yu()
                              },
                              children: (0, Su.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: uu => {
                                  uu.target !== Bu.current && uu.preventDefault()
                                },
                                onKeyDown: uu => {
                                  if ("Escape" === uu.key) yu();
                                  else if ("Tab" === uu.key) {
                                    var Ru;
                                    uu.preventDefault(), null === (Ru = Bu.current) || void 0 === Ru || Ru.focus()
                                  }
                                },
                                children: [(0, Su.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, Su.jsx)(Tu, {
                                    name: "magnifying-glass"
                                  }), (0, Su.jsx)("input", {
                                    ref: Bu,
                                    autoFocus: !0,
                                    value: mu,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": pu.length > 0 ? `DocsSearchResult-${Xu}` : void 0,
                                    onChange: uu => {
                                      Nu(uu.target.value)
                                    },
                                    onKeyDown: uu => {
                                      if ("ArrowDown" === uu.key || "ArrowUp" === uu.key) {
                                        uu.preventDefault();
                                        const Ru = "ArrowDown" === uu.key ? 1 : -1;
                                        Vu((Xu + Ru + pu.length) % Math.max(pu.length, 1))
                                      } else "Enter" === uu.key && pu[Xu] && Wu(pu[Xu])
                                    }
                                  }), (0, Su.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, Su.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: ru,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!xu && (0, Su.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), pu.map(((uu, Ru) => {
                                    var yu;
                                    return (0, Su.jsxs)("li", {
                                      id: `DocsSearchResult-${Ru}`,
                                      role: "option",
                                      "aria-selected": Ru === Xu,
                                      className: Qu()("DocsSearchResult", {
                                        Active: Ru === Xu
                                      }),
                                      onMouseMove: () => {
                                        Vu(Ru)
                                      },
                                      onClick: () => {
                                        Wu(uu)
                                      },
                                      children: [(0, Su.jsx)(Tu, {
                                        name: uu.page.icon
                                      }), (0, Su.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, Su.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, Su.jsx)(cQ, {
                                            text: uu.title,
                                            query: xu
                                          })
                                        }), uu.text && (0, Su.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, Su.jsx)(cQ, {
                                            text: gQ(uu.text, xu),
                                            query: xu
                                          })
                                        })]
                                      }), (0, Su.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === uu.kind ? "Page" : null !== (yu = uu.listedUnder) && void 0 !== yu ? yu : `${uu.kind} \xb7 ${uu.page.title}`
                                      })]
                                    }, `${uu.page.id}#${uu.anchor}`)
                                  })), xu && 0 === pu.length && (0, Su.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", mu, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function zQ(uu, Ru) {
                            if (Ru < 10) return `${uu.toFixed(1)}s`;
                            const yu = Math.floor(uu);
                            return `${Math.floor(yu/60)}:${String(yu%60).padStart(2,"0")}`
                          }

                          function FQ() {
                            const uu = VE((uu => uu.track)),
                              Ru = VE((uu => uu.volume)),
                              [yu, Ku] = (0, Eu.useState)(0),
                              mu = (0, Eu.useRef)(RE);
                            if ((0, Eu.useEffect)((() => {
                                if (!uu) return;
                                if (Ku(SE()), "playing" !== uu.status) return;
                                let Ru = 0;
                                const yu = () => {
                                  Ku(SE()), Ru = requestAnimationFrame(yu)
                                };
                                return Ru = requestAnimationFrame(yu), () => {
                                  cancelAnimationFrame(Ru)
                                }
                              }), [uu]), !uu) return null;
                            const Ju = "paused" !== uu.status,
                              Nu = Math.min(yu, uu.duration);
                            return (0, Su.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, Su.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, Su.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": Ju ? `Pause ${uu.name}` : `Play ${uu.name}`,
                                  onClick: xE,
                                  children: (0, Su.jsx)(Tu, {
                                    name: Ju ? "pause" : "play"
                                  })
                                }), (0, Su.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, Su.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, Su.jsx)("code", {
                                      children: uu.name
                                    }), (0, Su.jsx)("span", {
                                      children: uu.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, Su.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, Su.jsx)("span", {
                                      children: zQ(Nu, uu.duration)
                                    }), (0, Su.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: uu.duration || 1,
                                      step: .01,
                                      value: Nu,
                                      disabled: 0 === uu.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${zQ(Nu,uu.duration)} of ${zQ(uu.duration,uu.duration)}`,
                                      onChange: uu => {
                                        const Ru = Number(uu.target.value);
                                        ! function(uu) {
                                          var Ru;
                                          mE = uu, null === (Ru = KE) || void 0 === Ru || Ru.seek(uu)
                                        }(Ru), Ku(Ru)
                                      }
                                    }), (0, Su.jsx)("span", {
                                      children: uu.duration > 0 ? zQ(uu.duration, uu.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, Su.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, Su.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === Ru ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === Ru ? pE(mu.current) : (mu.current = Ru, pE(0))
                                    },
                                    children: (0, Su.jsx)(Tu, {
                                      name: "volume",
                                      className: Qu()({
                                        Muted: 0 === Ru
                                      })
                                    })
                                  }), (0, Su.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: Ru,
                                    "aria-label": "Volume",
                                    onChange: uu => {
                                      pE(Number(uu.target.value))
                                    }
                                  })]
                                }), (0, Su.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var Ru;
                                    null === (Ru = document.querySelector(`[data-docs-track="${CSS.escape(yE(uu.name,uu.isSong))}"]`)) || void 0 === Ru || Ru.focus(), TE()
                                  },
                                  children: (0, Su.jsx)(Tu, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var wQ = yu(47);
                          const ZQ = "docsTheme",
                            hQ = window.matchMedia("(prefers-color-scheme: light)");

                          function PQ(uu) {
                            let {
                              theme: Ru,
                              onChange: yu
                            } = uu;
                            const Eu = "dark" === Ru ? "light" : "dark";
                            return (0, Su.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Eu} theme`,
                              title: `Switch to ${Eu} theme`,
                              onClick: () => {
                                yu(Eu)
                              },
                              children: (0, Su.jsx)(Tu, {
                                name: "dark" === Ru ? "moon" : "sun"
                              })
                            })
                          }
                          const iQ = "https://github.com/Bloxdy/code-api",
                            YQ = "https://discord.gg/playbloxd",
                            oQ = 180,
                            qQ = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function OQ(uu) {
                            let {
                              basePath: Ru,
                              activePageId: yu,
                              onNavigate: Eu
                            } = uu;
                            return (0, Su.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: cu.map((uu => (0, Su.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, Su.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: uu.title
                                }), uu.pageIds.map((uu => {
                                  var Ku;
                                  const Ju = Lu(uu);
                                  return (0, Su.jsxs)(mu.c, {
                                    to: Pu(Ru, Ju),
                                    className: Qu()("DocsNavLink", {
                                      Active: Ju.id === yu
                                    }),
                                    "aria-current": Ju.id === yu ? "page" : void 0,
                                    onClick: Eu,
                                    children: [(0, Su.jsx)(Tu, {
                                      name: Ju.icon
                                    }), (0, Su.jsx)("span", {
                                      children: null !== (Ku = Ju.navTitle) && void 0 !== Ku ? Ku : Ju.title
                                    })]
                                  }, Ju.id)
                                }))]
                              }, uu.title)))
                            })
                          }

                          function vQ(uu) {
                            let {
                              basePath: Ru,
                              pageId: yu
                            } = uu;
                            const Eu = cu.flatMap((uu => uu.pageIds)),
                              Ku = Eu.indexOf(yu),
                              Qu = Ku > 0 ? Lu(Eu[Ku - 1]) : null,
                              Ju = Ku < Eu.length - 1 ? Lu(Eu[Ku + 1]) : null;
                            return (0, Su.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Qu ? (0, Su.jsxs)(mu.c, {
                                className: "DocsPagerLink Previous",
                                to: Pu(Ru, Qu),
                                children: [(0, Su.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, Su.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Qu.title
                                })]
                              }) : (0, Su.jsx)("span", {}), Ju && (0, Su.jsxs)(mu.c, {
                                className: "DocsPagerLink Next",
                                to: Pu(Ru, Ju),
                                children: [(0, Su.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, Su.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Ju.title
                                })]
                              })]
                            })
                          }

                          function aQ(uu) {
                            let {
                              basePath: Ru,
                              embedded: yu = !1
                            } = uu;
                            const {
                              pageSlug: Ku = ""
                            } = (0, Ju.A)(), Xu = (0, Ju.s)(), Vu = (0, Ju.t)(), ru = (Bu = Ku, gu.find((uu => uu.slug === Bu)));
                            var Bu;
                            const [xu, pu] = function() {
                              const [uu, Ru] = (0, Eu.useState)((() => {
                                const uu = wQ.i.getItem(ZQ);
                                return "dark" === uu || "light" === uu ? uu : null
                              })), [yu, Ku] = (0, Eu.useState)(hQ.matches ? "light" : "dark");
                              return (0, Eu.useEffect)((() => {
                                const uu = () => {
                                  Ku(hQ.matches ? "light" : "dark")
                                };
                                return hQ.addEventListener("change", uu), () => {
                                  hQ.removeEventListener("change", uu)
                                }
                              }), []), [null !== uu && void 0 !== uu ? uu : yu, uu => {
                                wQ.i.setItem(ZQ, uu), Ru(uu)
                              }]
                            }(), [Wu, ju] = (0, Eu.useState)(null), [Hu, du] = (0, Eu.useState)(!1), [bu, Cu] = (0, Eu.useState)(!1), [ku, Au] = (0, Eu.useState)([]), Du = function(uu, Ru) {
                              const [yu, Ku] = (0, Eu.useState)("");
                              return (0, Eu.useEffect)((() => {
                                if (!Ru) return;
                                let yu = 0;
                                const Eu = () => {
                                    var Eu, Qu;
                                    yu = 0;
                                    const mu = Ru.getBoundingClientRect().top + oQ;
                                    let Ju = null !== (Eu = null === (Qu = uu[0]) || void 0 === Qu ? void 0 : Qu.anchor) && void 0 !== Eu ? Eu : "";
                                    for (const Ru of uu) {
                                      const uu = document.getElementById(Ru.anchor);
                                      uu && uu.getBoundingClientRect().top <= mu && (Ju = Ru.anchor)
                                    }
                                    Ru.scrollTop + Ru.clientHeight >= Ru.scrollHeight - 2 && Ru.scrollTop > 0 && uu.length > 0 && (Ju = uu[uu.length - 1].anchor), Ku(Ju)
                                  },
                                  Qu = () => {
                                    yu || (yu = requestAnimationFrame(Eu))
                                  };
                                return Eu(), Ru.addEventListener("scroll", Qu, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(yu), Ru.removeEventListener("scroll", Qu)
                                }
                              }), [uu, Ru]), yu
                            }(ku, Wu), Mu = "" === Ku && Xu.hash ? function(uu) {
                              const Ru = (0, eu.i)(uu);
                              if (wu(Lu("welcome"), Ru)) return null;
                              const yu = Object.hasOwn(hu, Ru) ? hu[Ru] : null;
                              if (yu) return {
                                page: Lu(yu.pageId),
                                anchor: yu.anchor
                              };
                              const Eu = Lu("readme");
                              return wu(Eu, Ru) ? {
                                page: Eu,
                                anchor: Ru
                              } : Zu(`#${Ru}`)
                            }(Xu.hash) : null;
                            (0, Eu.useEffect)((() => (Nu.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              Nu.d.set({
                                musicOnFromPage: !0
                              }), TE()
                            })), []), (0, Eu.useEffect)((() => {
                              const uu = uu => {
                                const Ru = uu.target;
                                if (Ru.closest(".DocsTextDialog")) return;
                                const yu = Ru.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(Ru.tagName);
                                "k" === uu.key && (uu.metaKey || uu.ctrlKey) || "/" === uu.key && !yu ? (uu.preventDefault(), Cu(!0)) : "Escape" === uu.key && du(!1)
                              };
                              return window.addEventListener("keydown", uu), () => {
                                window.removeEventListener("keydown", uu)
                              }
                            }), []);
                            const Iu = (0, Eu.useRef)(null);
                            (0, Eu.useLayoutEffect)((() => {
                              var uu, Ru;
                              if (!Wu) return;
                              const yu = Iu.current === Xu.pathname;
                              Iu.current = Xu.pathname;
                              const Eu = (0, eu.i)(Xu.hash),
                                Ku = Eu ? document.getElementById(Eu) : null;
                              if (null === (uu = Wu.querySelector(".DocsTargeted")) || void 0 === uu || uu.classList.remove("DocsTargeted"), null === Ku || void 0 === Ku || null === (Ru = Ku.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === Ru || Ru.classList.add("DocsTargeted"), Ku) {
                                var Qu;
                                const uu = Ku.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Qu = Ku.closest(".DocsChangelogEntry")) && void 0 !== Qu ? Qu : Ku).scrollIntoView({
                                  block: uu ? "center" : "start",
                                  behavior: yu ? "smooth" : "auto"
                                })
                              } else yu || Wu.scrollTo({
                                top: 0
                              })
                            }), [Wu, Xu.pathname, Xu.hash, Xu.key]);
                            const Gu = (0, Eu.useCallback)((() => {
                                du(!1)
                              }), []),
                              Uu = (0, Eu.useCallback)((uu => {
                                Vu({
                                  hash: uu
                                })
                              }), [Vu]);
                            if (Mu) return (0, Su.jsx)(Ju.d, {
                              replace: !0,
                              to: Pu(Ru, Mu.page, Mu.anchor)
                            });
                            if (!ru) return (0, Su.jsx)(Ju.d, {
                              replace: !0,
                              to: Ru
                            });
                            const nu = yu ? "div" : "main";
                            return (0, Su.jsx)(xR.Provider, {
                              value: Ru,
                              children: (0, Su.jsx)(SR.Provider, {
                                value: Wu,
                                children: (0, Su.jsxs)("div", {
                                  ref: ju,
                                  className: Qu()("DocsSite", {
                                    Embedded: yu,
                                    NavOpen: Hu
                                  }),
                                  "data-theme": xu,
                                  children: [(0, Su.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, Su.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Hu ? "Close menu" : "Open menu",
                                      "aria-expanded": Hu,
                                      onClick: () => {
                                        du(!Hu)
                                      },
                                      children: (0, Su.jsx)(Tu, {
                                        name: Hu ? "cross" : "menu"
                                      })
                                    }), (0, Su.jsxs)(mu.c, {
                                      to: Ru,
                                      className: "DocsBrand",
                                      children: [(0, Su.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, Su.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, Su.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, Su.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        Cu(!0)
                                      },
                                      children: [(0, Su.jsx)(Tu, {
                                        name: "magnifying-glass"
                                      }), (0, Su.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, Su.jsxs)("kbd", {
                                        children: [qQ ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, Su.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, Su.jsxs)("a", {
                                        href: YQ,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Su.jsx)(Tu, {
                                          name: "discord"
                                        }), (0, Su.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, Su.jsxs)("a", {
                                        href: iQ,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Su.jsx)(Tu, {
                                          name: "external-link"
                                        }), (0, Su.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !yu && (0, Su.jsxs)(mu.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, Su.jsx)(Tu, {
                                          name: "play"
                                        }), (0, Su.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, Su.jsx)(PQ, {
                                        theme: xu,
                                        onChange: pu
                                      })]
                                    })]
                                  }), (0, Su.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, Su.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, Su.jsx)(OQ, {
                                        basePath: Ru,
                                        activePageId: ru.id,
                                        onNavigate: Gu
                                      })
                                    }), (0, Su.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Gu
                                    }), (0, Su.jsxs)(nu, {
                                      className: "DocsMain",
                                      children: [(0, Su.jsx)(bQ, {
                                        page: ru,
                                        onTocChange: Au
                                      }, ru.id), (0, Su.jsx)(vQ, {
                                        basePath: Ru,
                                        pageId: ru.id
                                      })]
                                    }), (0, Su.jsx)("aside", {
                                      className: Qu()("DocsToc", {
                                        Timeline: "changelog" === ru.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, Su.jsx)(AQ, {
                                        isChangelog: "changelog" === ru.layout,
                                        toc: ku,
                                        activeAnchor: Du,
                                        onNavigate: Uu
                                      })
                                    })]
                                  }), (0, Su.jsx)(FQ, {}), bu && (0, Su.jsx)(LQ, {
                                    basePath: Ru,
                                    onClose: () => {
                                      Cu(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4511: (uu, Ru, yu) => {
                          yu.d(Ru, {
                            b: () => Eu,
                            c: () => mu,
                            d: () => Tu,
                            e: () => pu,
                            h: () => Ju,
                            i: () => Ku,
                            l: () => Qu,
                            p: () => Su,
                            s: () => xu,
                            v: () => Bu
                          });
                          const Eu = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Ku(uu) {
                            try {
                              return decodeURIComponent(uu.slice(1))
                            } catch {
                              return uu.slice(1)
                            }
                          }

                          function Qu(uu) {
                            return uu.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const mu = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Eu.source}`, "g");

                          function Ju(uu, Ru) {
                            return 2 === uu.length ? Ru.replace(/^ (.*) $/, "$1") : Ru
                          }

                          function Nu(uu) {
                            return "" === uu.trim()
                          }

                          function Xu(uu) {
                            const Ru = [];
                            for (const yu of uu.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Ru.length > 0 && Ru[Ru.length - 1].endsWith("\\") ? Ru[Ru.length - 1] += `|${yu}` : Ru.push(yu);
                            return Ru.map((uu => uu.trim().replaceAll("\\|", "|")))
                          }
                          const Vu = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function ru(uu) {
                            const Ru = [],
                              yu = [{
                                indent: -1,
                                items: Ru
                              }];
                            let Eu = null;
                            for (const Ku of uu) {
                              const uu = Ku.match(Vu);
                              if (!uu) {
                                Eu && (Eu.text += ` ${Ku.trim()}`);
                                continue
                              }
                              const Ru = uu[1].replace(/\t/g, "  ").length;
                              for (; Ru <= yu[yu.length - 1].indent;) yu.pop();
                              Eu = {
                                text: uu[3].trim(),
                                children: []
                              }, yu[yu.length - 1].items.push(Eu), yu.push({
                                indent: Ru,
                                items: Eu.children
                              })
                            }
                            return Ru
                          }

                          function Bu(uu) {
                            const Ru = uu.replace(/\r\n/g, "\n").split("\n"),
                              yu = [];
                            let Eu = 0;
                            for (; Eu < Ru.length;) {
                              const uu = Ru[Eu];
                              if (Nu(uu)) {
                                Eu++;
                                continue
                              }
                              const Ku = uu.match(/^\s*```\s*(\w*)\s*$/);
                              if (Ku) {
                                const uu = [];
                                for (Eu++; Eu < Ru.length && !/^\s*```\s*$/.test(Ru[Eu]);) uu.push(Ru[Eu]), Eu++;
                                Eu++, yu.push({
                                  kind: "code",
                                  lang: Ku[1] || "text",
                                  code: uu.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const mu = uu.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (mu) {
                                const uu = mu[2].trim();
                                yu.push({
                                  kind: "heading",
                                  level: mu[1].length,
                                  text: uu,
                                  anchor: Qu(uu)
                                }), Eu++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(uu)) {
                                yu.push({
                                  kind: "rule"
                                }), Eu++;
                                continue
                              }
                              if (uu.trim().startsWith("|") && Eu + 1 < Ru.length && /^\s*\|[\s:|-]+\|\s*$/.test(Ru[Eu + 1])) {
                                const Ku = Xu(uu),
                                  Qu = [];
                                for (Eu += 2; Eu < Ru.length && Ru[Eu].trim().startsWith("|");) Qu.push(Xu(Ru[Eu])), Eu++;
                                yu.push({
                                  kind: "table",
                                  header: Ku,
                                  rows: Qu
                                });
                                continue
                              }
                              if (uu.startsWith(">")) {
                                const uu = [];
                                for (; Eu < Ru.length && Ru[Eu].startsWith(">");) uu.push(Ru[Eu].replace(/^>\s?/, "")), Eu++;
                                yu.push({
                                  kind: "quote",
                                  blocks: Bu(uu.join("\n"))
                                });
                                continue
                              }
                              if (Vu.test(uu)) {
                                const Ku = [],
                                  Qu = /^\s*\d+\./.test(uu);
                                for (; Eu < Ru.length && !Nu(Ru[Eu]) && (Vu.test(Ru[Eu]) || /^\s+\S/.test(Ru[Eu]));) Ku.push(Ru[Eu]), Eu++;
                                yu.push({
                                  kind: "list",
                                  ordered: Qu,
                                  items: ru(Ku)
                                });
                                continue
                              }
                              const Ju = [];
                              for (; Eu < Ru.length && !Nu(Ru[Eu]) && !/^\s*```/.test(Ru[Eu]) && !/^#{1,6}\s/.test(Ru[Eu]) && !Ru[Eu].startsWith(">") && !Vu.test(Ru[Eu]) && (!Ru[Eu].trim().startsWith("|") || 0 !== Ju.length);) Ju.push(Ru[Eu].trim()), Eu++;
                              0 === Ju.length && (Ju.push(Ru[Eu].trim()), Eu++), yu.push({
                                kind: "paragraph",
                                text: Ju.join(" ")
                              })
                            }
                            return yu
                          }

                          function xu(uu) {
                            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const yu = Bu(uu);
                            let Eu = "";
                            const Ku = [],
                              Qu = [],
                              mu = new Map;
                            for (const Xu of yu) {
                              if ("heading" === Xu.kind) {
                                var Ju;
                                const uu = (null !== (Ju = mu.get(Xu.anchor)) && void 0 !== Ju ? Ju : 0) + 1;
                                mu.set(Xu.anchor, uu), uu > 1 && (Xu.anchor = `${Xu.anchor}-${uu}`)
                              }
                              if ("heading" === Xu.kind && 1 === Xu.level && !Eu) {
                                Eu = Xu.text;
                                continue
                              }
                              if ("heading" === Xu.kind && Xu.level <= Ru) {
                                Qu.push({
                                  heading: Xu,
                                  blocks: []
                                });
                                continue
                              }
                              const uu = Qu.at(-1);
                              uu ? uu.blocks.push(Xu) : Ku.push(Xu)
                            }
                            const Nu = uu => {
                              for (;
                                "rule" === (null === (Ru = uu.at(-1)) || void 0 === Ru ? void 0 : Ru.kind);) {
                                var Ru;
                                uu.pop()
                              }
                            };
                            Nu(Ku);
                            for (const Xu of Qu) Nu(Xu.blocks);
                            return {
                              title: Eu,
                              intro: Ku,
                              sections: Qu
                            }
                          }

                          function Su(uu) {
                            return [{
                              heading: null,
                              blocks: uu.intro
                            }, ...uu.sections.map((uu => ({
                              heading: uu.heading,
                              blocks: uu.blocks
                            })))]
                          }

                          function pu(uu) {
                            return uu.flatMap((uu => "code" === uu.kind ? [uu] : "quote" === uu.kind ? pu(uu.blocks) : []))
                          }

                          function Tu(uu) {
                            switch (uu.kind) {
                              case "heading":
                              case "paragraph":
                                return uu.text;
                              case "code":
                                return uu.code;
                              case "table":
                                return [uu.header, ...uu.rows].map((uu => uu.join(" "))).join(" ");
                              case "list": {
                                const Ru = uu => uu.map((uu => `${uu.text} ${Ru(uu.children)}`)).join(" ");
                                return Ru(uu.items)
                              }
                              case "quote":
                                return uu.blocks.map(Tu).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4604: (uu, Ru, yu) => {
                          yu.d(Ru, {
                            c: () => Ju
                          });
                          var Eu = yu(64),
                            Ku = yu(330),
                            Qu = yu(1841),
                            mu = yu(1079);

                          function Ju(uu) {
                            let {
                              text: Ru
                            } = uu;
                            const yu = [];
                            let Ju = "";
                            return (0, Ku.ic)(Ru).forEach(((uu, Ru) => {
                              if ("string" === typeof uu || !(0, Qu.d)(uu.icon)) return void(Ju += "string" === typeof uu ? uu : uu.icon);
                              const Ku = Math.max(0, Ju.trimEnd().search(/\S{1,12}$/));
                              yu.push((0, mu.jsxs)(Eu.Fragment, {
                                children: [Ju.slice(0, Ku), (0, mu.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [Ju.slice(Ku), (0, mu.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": uu.icon,
                                    children: (0, mu.jsx)(Qu.c, {
                                      itemName: uu.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, Ru)), Ju = ""
                            })), yu.push(Ju), (0, mu.jsx)(mu.Fragment, {
                              children: yu
                            })
                          }
                        }, 4540: (uu, Ru, yu) => {
                          yu.d(Ru, {
                            c: () => ju,
                            b: () => Wu
                          });
                          var Eu = yu(64),
                            Ku = yu(1400),
                            Qu = yu(1825),
                            mu = yu(4544),
                            Ju = yu(1079);
                          const Nu = (0, Eu.memo)((function(uu) {
                            let {
                              initialParameters: Ru
                            } = uu;
                            const yu = (0, Eu.useRef)(null),
                              Ku = (0, Eu.useRef)(null),
                              Nu = (0, Eu.useRef)(0),
                              Xu = (0, Eu.useRef)(null),
                              Vu = Ru.description,
                              ru = Ru.zu,
                              {
                                scale: Bu,
                                rotation: xu
                              } = null !== Ru && void 0 !== Ru ? Ru : {},
                              Su = (0, mu.f)();
                            return (0, Eu.useEffect)((() => {
                              const uu = Su.onFrame((() => {
                                const uu = Su.getState();
                                if (!uu.isActive || !yu.current || !Ku.current) return;
                                const Ru = uu.state;
                                if (yu.current.value = Ru.progress, Ru.clickCount > Nu.current) {
                                  Nu.current = Ru.clickCount;
                                  const uu = Ku.current;
                                  uu.classList.add("pulse"), Xu.current = setTimeout((() => {
                                    uu.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Xu.current), uu()
                              }
                            }), [Su]), (0, Ju.jsx)(Ju.Fragment, {
                              children: (0, Ju.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Bu && {
                                    "--scale": Bu
                                  },
                                  ...null !== xu && {
                                    "--rotation": `${xu}deg`
                                  }
                                },
                                children: [(0, Ju.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: yu
                                }), (0, Ju.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Ku,
                                  children: (0, Ju.jsx)(Qu.d, {
                                    text: [{
                                      icon: ru
                                    }]
                                  })
                                }), (0, Ju.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, Ju.jsx)(Qu.d, {
                                    text: Vu
                                  })
                                })]
                              })
                            })
                          }));
                          var Xu = yu(1035),
                            Vu = yu.n(Xu);
                          const ru = 2 * Math.PI * 90,
                            Bu = (0, Eu.memo)((function(uu) {
                              let {
                                initialParameters: Ru
                              } = uu;
                              const yu = (0, Eu.useRef)(null),
                                Ku = (0, Eu.useRef)(null),
                                Nu = (0, Eu.useRef)(null),
                                Xu = Ru.label,
                                Bu = Ru.icon,
                                xu = Ru.Zu,
                                {
                                  scale: Su,
                                  rotation: pu,
                                  Pu: Tu
                                } = null !== Ru && void 0 !== Ru ? Ru : {},
                                Wu = (0, mu.f)();
                              return (0, Eu.useEffect)((() => {
                                const uu = Wu.onFrame((() => {
                                  var uu, Ru;
                                  const Eu = Wu.getState();
                                  if (!Eu.isActive || !Ku.current) return;
                                  const Qu = Eu.state,
                                    mu = null !== (uu = Qu.timeRemaining) && void 0 !== uu ? uu : 0,
                                    Ju = null !== (Ru = Qu.wu) && void 0 !== Ru ? Ru : 1,
                                    Xu = ru * (1 - mu / Ju);
                                  Ku.current.style.strokeDashoffset = `${Xu}`, yu.current && (yu.current.style.opacity = mu > 0 ? "1" : "0"), Nu.current && xu && (Nu.current.textContent = `${(mu/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  uu()
                                }
                              }), [Wu, xu]), (0, Ju.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: yu,
                                style: {
                                  ...null !== Su && {
                                    "--scale": Su
                                  },
                                  ...null !== pu && {
                                    "--rotation": `${pu}deg`
                                  }
                                },
                                children: [(0, Ju.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, Ju.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Ju.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, Ju.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: ru,
                                      ref: Ku
                                    })]
                                  }), (0, Ju.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, Ju.jsx)(Qu.d, {
                                      text: [{
                                        icon: Bu
                                      }],
                                      className: Vu()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: Tu
                                      })
                                    })
                                  })]
                                }), (0, Ju.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, Ju.jsx)(Qu.d, {
                                    text: Xu,
                                    className: "QTETimedClickLabelText"
                                  }), xu && (0, Ju.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: Nu
                                  })]
                                })]
                              })
                            })),
                            xu = (0, Eu.memo)((function(uu) {
                              let {
                                initialParameters: Ru
                              } = uu;
                              const yu = (0, Eu.useRef)(null),
                                Ku = (0, Eu.useRef)(null),
                                Nu = (0, Eu.useRef)(null),
                                Xu = (0, Eu.useRef)(!1),
                                Vu = Ru.description,
                                ru = null === Ru || void 0 === Ru ? void 0 : Ru.icon,
                                Bu = (0, mu.f)();
                              return (0, Eu.useEffect)((() => {
                                const uu = Bu.onFrame((() => {
                                  const uu = Bu.getState();
                                  if (!uu.isActive) return;
                                  const Ru = uu.state;
                                  if (yu.current) {
                                    const uu = 100 * (Ru.catchZonePosition - Ru.Yu / 2);
                                    yu.current.style.left = `${uu}%`, yu.current.style.width = 100 * Ru.Yu + "%", Ru.isCatching !== Xu.current && (Xu.current = Ru.isCatching, Ru.isCatching ? yu.current.classList.add("catching") : yu.current.classList.remove("catching"))
                                  }
                                  Ku.current && (Ku.current.style.left = 100 * Ru.moverPosition + "%"), Nu.current && (Nu.current.value = Ru.progress)
                                }));
                                return () => {
                                  uu()
                                }
                              }), [Bu]), (0, Ju.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, Ju.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, Ju.jsx)(Qu.d, {
                                    text: Vu
                                  })
                                }), (0, Ju.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: Nu
                                }), (0, Ju.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, Ju.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: yu
                                  }), (0, Ju.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Ku,
                                    children: (0, Ju.jsx)("span", {
                                      children: ru && (0, Ju.jsx)(Qu.d, {
                                        text: [{
                                          icon: ru,
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
                          var Su = yu(610);
                          const pu = (0, Eu.memo)((function(uu) {
                              let {
                                initialParameters: Ru
                              } = uu;
                              const yu = (0, Eu.useRef)(null),
                                Ku = Ru.label,
                                Nu = Ru.uR,
                                {
                                  icon: Xu,
                                  scale: Vu,
                                  rotation: ru
                                } = null !== Ru && void 0 !== Ru ? Ru : {},
                                Bu = 100 * (.5 - Nu / 2),
                                xu = 100 * Nu,
                                pu = (0, mu.f)();
                              return (0, Eu.useEffect)((() => {
                                const uu = pu.onFrame((() => {
                                  const uu = pu.getState();
                                  if (!uu.isActive || !yu.current) return;
                                  const Ru = uu.state;
                                  yu.current.style.left = 100 * Ru.markerPosition + "%"
                                }));
                                return () => {
                                  uu()
                                }
                              }), [pu]), (0, Ju.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, Su.E)(Vu) && {
                                    "--scale": Vu
                                  },
                                  ...!(0, Su.E)(ru) && {
                                    "--rotation": `${ru}deg`
                                  }
                                },
                                children: [Xu && (0, Ju.jsx)(Qu.d, {
                                  text: [{
                                    icon: Xu
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, Ju.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, Ju.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Bu}%`,
                                      width: `${xu}%`
                                    }
                                  }), (0, Ju.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: yu
                                  })]
                                }), (0, Ju.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, Ju.jsx)(Qu.d, {
                                    text: Ku
                                  })
                                })]
                              })
                            })),
                            Tu = (0, Eu.memo)((function(uu) {
                              let {
                                initialParameters: Ru
                              } = uu;
                              const yu = (0, Eu.useRef)(null),
                                [Ku, Nu] = (0, Eu.useState)((() => new Array(Ru.yR).fill("pending"))),
                                [Xu, Vu] = (0, Eu.useState)((() => {
                                  const uu = Ru.QR;
                                  return (0, Su.E)(uu) || uu <= 0 ? [] : new Array(uu).fill("pending")
                                })),
                                ru = Ru.label,
                                {
                                  icon: Bu
                                } = Ru,
                                xu = (0, Eu.useRef)(0),
                                pu = (0, Eu.useRef)(0),
                                Tu = (0, Eu.useRef)([]),
                                Wu = (0, mu.f)();
                              return (0, Eu.useEffect)((() => {
                                const uu = Wu.onFrame((() => {
                                  const uu = Wu.getState();
                                  if (!uu.isActive || !yu.current) return;
                                  const Ru = uu.state,
                                    Eu = 30 + 60 * Ru.outerCircleProgress;
                                  if (yu.current.setAttribute("r", String(Eu)), !0 === Ru.lastClickResult && Ru.successes > xu.current) {
                                    yu.current.classList.remove("QTERhythmClickOuterCircle--miss"), yu.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const uu = setTimeout((() => {
                                      var uu;
                                      null === (uu = yu.current) || void 0 === uu || uu.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    Tu.current.push(uu)
                                  } else if (!1 === Ru.lastClickResult && Ru.misses > pu.current) {
                                    yu.current.classList.remove("QTERhythmClickOuterCircle--hit"), yu.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const uu = setTimeout((() => {
                                      var uu;
                                      null === (uu = yu.current) || void 0 === uu || uu.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    Tu.current.push(uu)
                                  }
                                  Ru.successes === xu.current && Ru.misses === pu.current || (xu.current = Ru.successes, pu.current = Ru.misses, Nu((uu => {
                                    const yu = [...uu];
                                    for (let Eu = 0; Eu < Ru.yR; Eu++) yu[Eu] = Eu < Ru.successes ? "success" : "pending";
                                    return yu
                                  })), Vu((uu => {
                                    if (0 === uu.length) return uu;
                                    const yu = [...uu];
                                    for (let Eu = 0; Eu < yu.length; Eu++) yu[Eu] = Eu < Ru.misses ? "miss" : "pending";
                                    return yu
                                  })))
                                }));
                                return () => {
                                  uu();
                                  for (const uu of Tu.current) clearTimeout(uu);
                                  Tu.current = []
                                }
                              }), [Wu]), (0, Ju.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, Ju.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Ku.map(((uu, Ru) => (0, Ju.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === uu ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, Ru)))
                                }), (0, Ju.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, Ju.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Ju.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, Ju.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: yu
                                    })]
                                  }), Bu && (0, Ju.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, Ju.jsx)(Qu.d, {
                                      text: [{
                                        icon: Bu
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Xu.length > 0 && (0, Ju.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Xu.map(((uu, Ru) => (0, Ju.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === uu ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, Ru)))
                                }), (0, Ju.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, Ju.jsx)(Qu.d, {
                                    text: ru
                                  })
                                })]
                              })
                            }));

                          function Wu(uu) {
                            let {
                              qte: Ru
                            } = uu;
                            switch (Ru.type) {
                              case "progressBar":
                                return (0, Ju.jsx)(Nu, {
                                  initialParameters: Ru.parameters
                                });
                              case "timedClick":
                                return (0, Ju.jsx)(Bu, {
                                  initialParameters: Ru.parameters
                                });
                              case "gravityBar":
                                return (0, Ju.jsx)(xu, {
                                  initialParameters: Ru.parameters
                                });
                              case "precisionBar":
                                return (0, Ju.jsx)(pu, {
                                  initialParameters: Ru.parameters
                                });
                              case "rhythmClick":
                                return (0, Ju.jsx)(Tu, {
                                  initialParameters: Ru.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const ju = (0, Eu.memo)((function() {
                            const [uu, Ru] = (0, Eu.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Ku.e)("qteStateUpdated", (uu => {
                              Ru(uu)
                            })), uu.isActive && uu.type ? (0, Ju.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, Ju.jsx)(Wu, {
                                qte: uu
                              })
                            }) : null
                          }))
                        }, 4544: (uu, Ru, yu) => {
                          yu.d(Ru, {
                            b: () => Ju,
                            f: () => Nu
                          });
                          var Eu = yu(64),
                            Ku = yu(1257),
                            Qu = yu(4546);
                          const mu = {
                              getState: () => Qu.d.getCurrentState(),
                              onFrame: Ku.o
                            },
                            Ju = (0, Eu.createContext)(mu);

                          function Nu() {
                            return (0, Eu.useContext)(Ju)
                          }
                        }, 4611: (uu, Ru, yu) => {
                          yu.d(Ru, {
                            d: () => tu,
                            g: () => su
                          });
                          var Eu = yu(4617),
                            Ku = yu(330);
                          const Qu = 120,
                            mu = 260,
                            Ju = 1.15,
                            Nu = 1.2,
                            Xu = 2,
                            Vu = 1.08,
                            ru = .8,
                            Bu = .95,
                            xu = 8,
                            Su = "[\"')\\]\u300d\u300f\uff09]*",
                            pu = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Su}$`),
                            Tu = new RegExp(`[?\uff1f]${Su}$`),
                            Wu = new RegExp(`[!\uff01]${Su}$`),
                            ju = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Hu = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            du = new RegExp(`[${Hu}]`),
                            bu = new RegExp(`[${Hu}]|[^${Hu}]+`, "g"),
                            Cu = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function ku(uu) {
                            let Ru = 2166136261;
                            for (let yu = 0; yu < uu.length; yu++) Ru ^= uu.charCodeAt(yu), Ru = Math.imul(Ru, 16777619);
                            return (Ru >>> 0) / 4294967295 * 2 - 1
                          }

                          function eu(uu) {
                            var Ru;
                            if (du.test(uu)) return 1;
                            const yu = uu.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Eu = yu.replace(/[^0-9]/g, "");
                            if (Eu.length > 0 && !/\p{L}/u.test(yu)) return Math.min(Eu.length, 4);
                            const Ku = null !== (Ru = yu.match(Cu)) && void 0 !== Ru ? Ru : [];
                            if (0 === Ku.length) {
                              var Qu, mu;
                              const uu = null !== (Qu = null === (mu = yu.match(/\p{L}/gu)) || void 0 === mu ? void 0 : mu.length) && void 0 !== Qu ? Qu : 0;
                              return 0 === uu ? 0 : Math.min(Math.max(1, Math.round(uu / 2.5)), xu)
                            }
                            const Ju = yu.replace(/[^\p{L}]/gu, ""),
                              Nu = Ku.length > 1 && "e" === Ku.at(-1) && Ju.endsWith("e") && !Ju.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(uu.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Ku.length - (Nu ? 1 : 0), xu)
                          }

                          function Au(uu) {
                            return uu.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Du(uu) {
                            const Ru = uu.replace(/[^\p{L}]/gu, "");
                            return Ru.length >= 2 && Ru === Ru.toUpperCase() && Ru !== Ru.toLowerCase()
                          }

                          function Mu(uu, Ru) {
                            var yu;
                            const xu = Ru && (0, Eu.k)(Ru),
                              Su = null !== (yu = null === xu || void 0 === xu ? void 0 : xu.syllableMs) && void 0 !== yu ? yu : Eu.c,
                              Hu = function(uu) {
                                const Ru = [];
                                for (const Eu of (0, Ku.ic)(uu))
                                  if ("string" === typeof Eu)
                                    for (const uu of Eu.split(/(\s+)/)) {
                                      if ("" === uu) continue;
                                      if (/^\s+$/.test(uu)) {
                                        Ru.push({
                                          kind: "space",
                                          text: uu
                                        });
                                        continue
                                      }
                                      if (!du.test(uu)) {
                                        Ru.push({
                                          kind: "word",
                                          text: uu,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Eu = !0;
                                      for (const Ku of null !== (yu = uu.match(bu)) && void 0 !== yu ? yu : []) {
                                        var yu;
                                        const uu = Ru.at(-1);
                                        Eu || "word" !== (null === uu || void 0 === uu ? void 0 : uu.kind) || du.test(Ku) || /[\p{L}\p{N}]/u.test(Ku) ? (Eu || Ru.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), Ru.push({
                                          kind: "word",
                                          text: Ku,
                                          delayMs: 0
                                        }), Eu = !1) : uu.text += Ku
                                      }
                                    } else Ru.push({
                                      kind: "icon",
                                      text: Eu.icon,
                                      delayMs: 0
                                    });
                                return Ru
                              }(uu),
                              Cu = [];
                            let Mu = [];
                            for (const Eu of Hu) "space" !== Eu.kind && (Mu.push(Eu), pu.test(Eu.text) && (Cu.push(Mu), Mu = []));
                            Cu.push(Mu);
                            const Iu = [];
                            let Gu = 0;
                            for (const Eu of Cu) {
                              var Uu, nu;
                              const uu = null !== (Uu = null === (nu = Eu.at(-1)) || void 0 === nu ? void 0 : nu.text) && void 0 !== Uu ? Uu : "",
                                Ru = Tu.test(uu),
                                yu = Wu.test(uu),
                                Ku = Eu.map((uu => "word" === uu.kind ? eu(uu.text) : 1)),
                                Hu = Ku.findLastIndex((uu => uu > 0));
                              for (const [Tu, Wu] of Eu.entries()) {
                                const uu = "word" === Wu.kind,
                                  Eu = Ku[Tu];
                                Wu.delayMs = Gu;
                                for (let Ku = 0; xu && Ku < Eu; Ku++) {
                                  const {
                                    intonation: Qu
                                  } = xu;
                                  let mu = Hu > 0 ? -Qu.declineSemitones * (Tu / Hu) : 0;
                                  mu += ku(`${Au(Wu.text)}|${Ku}`) * Qu.variationSemitones;
                                  const pu = Math.min(1, Qu.variationSemitones);
                                  let ju = xu.glideSemitones,
                                    du = 1;
                                  yu && (mu += Qu.exclaimLiftSemitones, du *= Ju), Ru && Tu === Hu && (mu += Qu.questionRiseSemitones * (Eu > 1 ? .5 + .5 * Ku / (Eu - 1) : 1), Ku === Eu - 1 && (ju = Math.abs(ju) + Qu.questionRiseSemitones / 2)), uu && Du(Wu.text) && (mu += Xu * pu, du *= Nu), Eu > 1 && 0 === Ku && (mu += ru * pu, du *= Vu), Iu.push({
                                    atMs: Gu + Ku * Su,
                                    semitones: mu,
                                    glideSemitones: ju,
                                    durationMs: Ku < Eu - 1 ? Math.min(xu.durationMs, Su * Bu) : xu.durationMs,
                                    level: du
                                  })
                                }
                                Gu += Eu * Su + (pu.test(Wu.text) ? mu : ju.test(Wu.text) ? Qu : 0)
                              }
                            }
                            return {
                              pieces: Hu.map((uu => "space" === uu.kind ? uu : "icon" === uu.kind ? {
                                kind: "icon",
                                icon: uu.text,
                                delayMs: uu.delayMs
                              } : {
                                kind: "word",
                                text: uu.text,
                                delayMs: uu.delayMs
                              })),
                              blips: Iu
                            }
                          }
                          var Iu = yu(1170),
                            Gu = yu(1224),
                            Uu = yu(1862);

                          function nu(uu) {
                            if ("string" === typeof uu) return uu;
                            const Ru = Gu.f.get().getCurrentLanguageCode();
                            return (0, Iu.q)(Ru, uu.translationKey, (0, Iu.o)(uu.params, Uu.d.shown))
                          }

                          function su(uu) {
                            const Ru = void 0 === uu.voice ? null : (0, Eu.m)(uu.voice),
                              yu = Ru && (0, Eu.k)(Ru);
                            return {
                              plan: Mu(nu(uu.line), yu),
                              synth: yu
                            }
                          }

                          function tu(uu) {
                            const Ru = [];
                            let yu = [];
                            for (const [Ku, Qu] of uu.entries()) {
                              var Eu;
                              "space" === Qu.kind && (" " !== Qu.text || "icon" !== (null === (Eu = uu[Ku + 1]) || void 0 === Eu ? void 0 : Eu.kind)) ? (yu.length > 0 && Ru.push(yu), Ru.push([Qu]), yu = []) : yu.push(Qu)
                            }
                            return yu.length > 0 && Ru.push(yu), Ru
                          }
                        }, 4626: (uu, Ru, yu) => {
                          yu.d(Ru, {
                            e: () => Vu,
                            h: () => ru
                          });
                          var Eu = yu(4630),
                            Ku = yu(27);
                          const Qu = .25,
                            mu = .85,
                            Ju = .02,
                            Nu = .01;

                          function Xu(uu, Ru, yu, Eu, Ku, Qu, Ju) {
                            const {
                              waveform: Nu,
                              pitchHz: Xu,
                              attackMs: Vu,
                              releaseMs: ru,
                              lowpassHz: Bu
                            } = yu, xu = Ku + Eu.durationMs / 1e3, Su = Xu * 2 ** (Eu.semitones / 12), pu = uu.createOscillator();
                            pu.type = Nu, pu.frequency.setValueAtTime(Su, Ku), pu.frequency.exponentialRampToValueAtTime(Su * 2 ** (Eu.glideSemitones / 12), xu);
                            const Tu = Ku + Math.min(Vu, Eu.durationMs) / 1e3,
                              Wu = uu.createGain();
                            Wu.gain.setValueAtTime(0, Ku), Wu.gain.linearRampToValueAtTime(Qu, Tu), Wu.gain.linearRampToValueAtTime(Qu * mu, Math.max(Tu, xu - ru / 1e3)), Wu.gain.linearRampToValueAtTime(0, xu);
                            const ju = [pu];
                            if (null !== Bu) {
                              const Ru = uu.createBiquadFilter();
                              Ru.type = "lowpass", Ru.frequency.value = Bu, ju.push(Ru)
                            }
                            ju.push(Wu, Ru);
                            for (let mu = 1; mu < ju.length; mu++) ju[mu - 1].connect(ju[mu]);
                            return pu.onended = () => {
                              for (const uu of ju.slice(0, -1)) uu.disconnect();
                              Ju()
                            }, pu.start(Ku), pu.stop(xu), pu
                          }

                          function Vu(uu, Ru, yu, Eu, Ku, mu) {
                            if (0 === Eu.length) return mu(), () => {};
                            const Vu = Qu * yu.volume * Ku,
                              ru = uu.createGain();
                            ru.connect(Ru);
                            const Bu = uu.currentTime + Ju,
                              xu = new Set;
                            for (const Qu of Eu) {
                              const Ru = Xu(uu, ru, yu, Qu, Bu + Qu.atMs / 1e3, Vu * Qu.level, (() => {
                                xu.delete(Ru), 0 === xu.size && (ru.disconnect(), mu())
                              }));
                              xu.add(Ru)
                            }
                            return () => {
                              const Ru = uu.currentTime;
                              ru.gain.setTargetAtTime(0, Ru, Nu);
                              for (const uu of xu) try {
                                uu.stop(Ru + 5 * Nu)
                              } catch {}
                            }
                          }

                          function ru(uu, Ru) {
                            var yu;
                            const Qu = Eu.Howler.ctx,
                              mu = Eu.Howler.masterGain;
                            if (!Qu || !mu || !Ku.d.get("soundOnFromAd")) return () => {};
                            const Ju = Eu.Howler;
                            return null === (yu = Ju._autoResume) || void 0 === yu || yu.call(Ju), Vu(Qu, mu, uu, Ru, Ku.d.get("soundVolume"), (() => {
                              var uu;
                              null === (uu = Ju._autoSuspend) || void 0 === uu || uu.call(Ju)
                            }))
                          }
                        }, 4630: (uu, Ru, yu) => {
                          yu.r(Ru), yu.d(Ru, {
                            Howl: () => Ku.Howl,
                            Howler: () => Ku.Howler,
                            iosAudio: () => Nu,
                            musicOutput: () => Tu,
                            readyAudioContext: () => Wu
                          });
                          var Eu, Ku = yu(4638),
                            Qu = yu(106);
                          const mu = Ku.Howler;
                          let Ju;

                          function Nu() {
                            return Ju ??= "ios" === (0, Qu.getOperatingSystem)(), Ju
                          }

                          function Xu() {
                            var uu, Ru;
                            if (mu.ctx || !mu.usingWebAudio || "undefined" === typeof AudioContext || !Nu()) return;
                            const yu = navigator.audioSession;
                            let Eu;
                            "auto" === (null === yu || void 0 === yu ? void 0 : yu.type) && (yu.type = "ambient");
                            try {
                              Eu = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Ku = Eu.createGain();
                            Ku.gain.setValueAtTime(mu._muted ? 0 : null !== (uu = mu._volume) && void 0 !== uu ? uu : 1, Eu.currentTime), Ku.connect(Eu.destination), mu.ctx = Eu, mu.masterGain = Ku, null === (Ru = mu._setup) || void 0 === Ru || Ru.call(mu)
                          }
                          mu._mobileUnloaded = !0;
                          const Vu = mu.volume.bind(Ku.Howler);
                          mu.volume = function() {
                            return Xu(), Vu(...arguments)
                          };
                          const ru = mu.mute.bind(Ku.Howler);
                          mu.mute = uu => (Xu(), ru(uu));
                          const Bu = Ku.Howl.prototype,
                            xu = Bu.init;
                          Bu.init = function(uu) {
                            return Xu(), xu.call(this, uu)
                          };
                          let Su = 0;
                          const pu = null === (Eu = mu._autoSuspend) || void 0 === Eu ? void 0 : Eu.bind(Ku.Howler);

                          function Tu() {
                            Wu();
                            const {
                              ctx: uu,
                              masterGain: Ru
                            } = mu;
                            return uu && Ru ? {
                              ctx: uu,
                              destination: Ru,
                              holdAwake: uu => {
                                var Ru, yu;
                                (Su += uu ? 1 : -1, uu) ? null === (Ru = mu._autoResume) || void 0 === Ru || Ru.call(mu): null === (yu = mu._autoSuspend) || void 0 === yu || yu.call(mu)
                              },
                              wake: () => {
                                var Ru;
                                "running" !== uu.state && (null === (Ru = mu._autoResume) || void 0 === Ru || Ru.call(mu), uu.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function Wu() {
                            var uu;
                            (mu.volume(), mu.ctx && mu.autoUnlock) && (null === (uu = mu._unlockAudio) || void 0 === uu || uu.call(mu))
                          }
                          pu && (mu._autoSuspend = () => Su > 0 ? Ku.Howler : pu())
                        }, 4640: (uu, Ru, yu) => {
                          function Eu(uu) {
                            return {
                              notAfter: uu
                            }
                          }
                          yu.d(Ru, {
                            e: () => Nu,
                            i: () => Xu,
                            j: () => Ju,
                            l: () => Eu,
                            o: () => Ku,
                            p: () => Qu,
                            r: () => mu,
                            u: () => Vu,
                            x: () => ru
                          });
                          const Ku = Eu("\\w$."),
                            Qu = Eu("\\w.,");

                          function mu(uu) {
                            return Ru => Nu(Ru, uu)
                          }

                          function Ju(uu) {
                            return Ru => !uu.test(Ru.input.slice(0, Ru.index))
                          }

                          function Nu(uu, Ru) {
                            return uu.index > 0 && new RegExp(`[${Ru}]`).test(uu.input[uu.index - 1])
                          }

                          function Xu(uu, Ru, yu) {
                            return function(uu) {
                              return void 0 !== uu && "function" !== typeof uu
                            }(yu) ? function(uu, Ru, yu) {
                              const Eu = Ru.flags.replace(/[gy]/g, ""),
                                Ku = new RegExp(`[^${yu}](?:${Ru.source})`, `${Eu}g`),
                                Qu = [],
                                mu = yu => {
                                  const Eu = yu.index + yu[0].length;
                                  return ("" === yu[0] ? Bu(uu, Ru, Eu) : Eu) - 1
                                },
                                Ju = new RegExp(`(?:${Ru.source})`, `${Eu}y`).exec(uu);
                              if (Ju) {
                                if (Qu.push(Ju), !Ru.global) return Qu;
                                Ku.lastIndex = mu(Ju)
                              }
                              for (let Nu = Ku.exec(uu); Nu; Nu = Ku.exec(uu)) {
                                const yu = Bu(uu, Ru, Nu.index) - Nu.index;
                                if (Nu[0] = Nu[0].slice(yu), Nu.index += yu, Qu.push(Nu), !Ru.global) break;
                                Ku.lastIndex = mu(Nu)
                              }
                              return Qu
                            }(uu, Ru, yu.notAfter) : function(uu, Ru, yu) {
                              const Eu = new RegExp(Ru.source, `${Ru.flags.replace(/[gy]/g,"")}g`),
                                Ku = [];
                              for (let Qu = Eu.exec(uu); Qu; Qu = Eu.exec(uu))
                                if (!yu || yu(Qu)) {
                                  if (Ku.push(Qu), !Ru.global) break;
                                  "" === Qu[0] && (Eu.lastIndex = Bu(uu, Ru, Eu.lastIndex))
                                } else Eu.lastIndex = Bu(uu, Ru, Qu.index);
                              return Ku
                            }(uu, Ru, yu)
                          }

                          function Vu(uu, Ru, yu, Eu) {
                            let Ku = "",
                              Qu = 0;
                            for (const mu of Xu(uu, Ru, yu)) Ku += uu.slice(Qu, mu.index) + Eu(mu), Qu = mu.index + mu[0].length;
                            return Ku + uu.slice(Qu)
                          }

                          function ru(uu, Ru, yu) {
                            const Eu = [];
                            let Ku = 0;
                            for (const Qu of Xu(uu, Ru, yu)) Eu.push(uu.slice(Ku, Qu.index)), Ku = Qu.index + Qu[0].length;
                            return [...Eu, uu.slice(Ku)]
                          }

                          function Bu(uu, Ru, yu) {
                            var Eu;
                            return yu + (Ru.unicode && (null !== (Eu = uu.codePointAt(yu)) && void 0 !== Eu ? Eu : 0) > 65535 ? 2 : 1)
                          }
                        }, 4593: (uu, Ru, yu) => {
                          yu.d(Ru, {
                            A: () => xu,
                            b: () => Ku,
                            e: () => Nu,
                            h: () => Qu,
                            j: () => mu,
                            m: () => Ju,
                            q: () => Tu,
                            u: () => Vu,
                            w: () => ru,
                            y: () => pu
                          });
                          var Eu = yu(1542);
                          const Ku = 24e3,
                            Qu = "/docs/llms.txt",
                            mu = `${Eu.c}${Qu}`,
                            Ju = "/llms.txt",
                            Nu = "/docs/llms-full.txt";

                          function Xu(uu) {
                            return uu || "index"
                          }

                          function Vu(uu) {
                            return `/docs/${Xu(uu)}.md`
                          }

                          function ru(uu, Ru) {
                            return `/docs/${Xu(uu)}/${Ru+1}.md`
                          }
                          const Bu = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function xu(uu) {
                            const Ru = Bu.exec(uu);
                            return null === Ru ? null : {
                              name: Ru[1],
                              part: void 0 === Ru[2] ? null : Number(Ru[2])
                            }
                          }
                          const Su = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function pu(uu) {
                            const Ru = Su.exec(uu);
                            if (null === Ru) return null;
                            const [, yu = "", Eu] = Ru;
                            return void 0 === Eu ? Vu(yu) : ru(yu, Number(Eu) - 1)
                          }

                          function Tu(uu) {
                            return `/docsHtml/${Xu(uu)}.html`
                          }
                        }, 4617: (uu, Ru, yu) => {
                          yu.d(Ru, {
                            c: () => Ku,
                            d: () => Eu,
                            g: () => Qu,
                            k: () => Nu,
                            m: () => mu
                          });
                          const Eu = ["sine", "triangle", "square", "sawtooth"],
                            Ku = 55,
                            Qu = {
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

                          function mu(uu) {
                            return "string" !== typeof uu ? uu : Object.hasOwn(Qu, uu) ? Qu[uu] : null
                          }

                          function Ju(uu, Ru, yu) {
                            return Math.min(yu, Math.max(Ru, uu))
                          }

                          function Nu(uu) {
                            const Ru = Ju(uu.durationMs, 10, 500),
                              yu = Ju(uu.attackMs, 0, Ru),
                              {
                                intonation: Ku
                              } = uu;
                            return {
                              waveform: Eu.includes(uu.waveform) ? uu.waveform : "sine",
                              pitchHz: Ju(uu.pitchHz, 20, 4e3),
                              glideSemitones: Ju(uu.glideSemitones, -24, 24),
                              durationMs: Ru,
                              attackMs: yu,
                              releaseMs: Ju(uu.releaseMs, 0, Ru - yu),
                              lowpassHz: null === uu.lowpassHz ? null : Ju(uu.lowpassHz, 20, 2e4),
                              volume: Ju(uu.volume, 0, 2),
                              intonation: {
                                variationSemitones: Ju(Ku.variationSemitones, 0, 6),
                                declineSemitones: Ju(Ku.declineSemitones, 0, 12),
                                questionRiseSemitones: Ju(Ku.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: Ju(Ku.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: Ju(uu.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const uu in modules) Object.freeze(modules[uu]);