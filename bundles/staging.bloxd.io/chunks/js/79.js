export const id = 79;
export const ids = [79, 95];
export const modules = {
    4997: (uu, Eu, ju) => {
      ju.d(Eu, {
        b: () => hu,
        e: () => Du
      });
      var su = ju(1105),
        Uu = ju.n(su),
        Zu = ju(58),
        Xu = ju(1244),
        lu = ju(4999),
        qu = ju(1964),
        fu = ju(2543),
        Cu = ju(5003),
        bu = ju(1154);
      const cu = new WeakMap;
      let Nu = 0;

      function Ou(uu) {
        let Eu = cu.get(uu);
        return void 0 === Eu && (Eu = Nu++, cu.set(uu, Eu)), Eu
      }

      function Yu(uu) {
        let {
          piece: Eu
        } = uu;
        return "space" === Eu.kind ? (0, bu.jsx)(bu.Fragment, {
          children: Eu.text
        }) : (0, bu.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${Eu.delayMs}ms`
          },
          children: (0, bu.jsx)(lu.e, {
            text: "icon" === Eu.kind ? `[[${Eu.icon}]]` : Eu.text
          })
        })
      }

      function hu(uu) {
        let {
          display: Eu
        } = uu;
        const {
          selectedLanguage: ju
        } = (0, Xu.A)(), su = (0, Zu.useMemo)((() => (0, Cu.e)((0, Cu.i)(Eu).plan.pieces)), [Eu, ju.code]);
        return (0, bu.jsxs)("div", {
          className: Uu()("Dialogue", {
            DialogueAnimateIn: !1 !== Eu.animateIn
          }),
          children: [Eu.speakerName && (0, bu.jsx)(qu.d, {
            text: Eu.speakerName,
            className: "DialogueSpeaker"
          }), (0, bu.jsx)("p", {
            className: "DialogueLine",
            children: su.map(((uu, Eu) => 1 === uu.length && "space" === uu[0].kind ? uu[0].text : (0, bu.jsx)("span", {
              className: "DialogueGlue",
              children: uu.map(((uu, Eu) => (0, bu.jsx)(Yu, {
                piece: uu
              }, Eu)))
            }, Eu)))
          })]
        })
      }
      const Du = (0, Zu.memo)((function() {
        const uu = (0, fu.h)("dialogue");
        return (0, bu.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: uu && (0, bu.jsx)(hu, {
            display: uu
          }, Ou(uu))
        })
      }))
    },
    4895: (uu, Eu, ju) => {
        ju.r(Eu), ju.d(Eu, {
          default: () => EX
        });
        var su = ju(58),
          Uu = ju(1105),
          Zu = ju.n(Uu),
          Xu = ju(1572),
          lu = ju(1580),
          qu = ju(22),
          fu = ju(65),
          Cu = ju(4899),
          bu = ju(4916),
          cu = ju(4925),
          Nu = ju(4526),
          Ou = ju(1154);
        const Yu = "/textures/docs/icons";

        function hu(uu) {
          let {
            name: Eu,
            isTinted: ju,
            className: su,
            style: Uu
          } = uu;
          const Xu = `${Yu}/${Eu}.png`;
          return ju ? (0, Ou.jsxs)("span", {
            className: Zu()("DocsPixelIcon", "Tinted", su),
            "aria-hidden": "true",
            style: Uu,
            children: [(0, Ou.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Xu}")`,
                WebkitMaskImage: `url("${Xu}")`
              }
            }), (0, Ou.jsx)("img", {
              src: Xu,
              alt: ""
            })]
          }) : (0, Ou.jsx)("img", {
            className: Zu()("DocsPixelIcon", su),
            src: Xu,
            alt: "",
            "aria-hidden": "true",
            style: Uu
          })
        }
        const Du = 1500;

        function gu() {
          const [uu, Eu] = (0, su.useState)(null);
          (0, su.useEffect)((() => {
            if (null === uu) return;
            const ju = setTimeout((() => {
              Eu(null)
            }), Du);
            return () => {
              clearTimeout(ju)
            }
          }), [uu]);
          return [uu, uu => {
            (0, Nu.b)(uu).then((() => {
              Eu({
                text: uu,
                failed: !1
              })
            }), (ju => {
              console.error("Could not copy to the clipboard", ju), Eu({
                text: uu,
                failed: !0
              })
            }))
          }]
        }

        function Mu(uu) {
          let {
            text: Eu,
            label: ju,
            className: su
          } = uu;
          const [Uu, Xu] = gu(), lu = !1 === (null === Uu || void 0 === Uu ? void 0 : Uu.failed);
          return (0, Ou.jsxs)("button", {
            type: "button",
            className: Zu()("DocsCopyButton", su, {
              Copied: lu
            }),
            title: `Copy ${Eu.length>40?"to clipboard":Eu}`,
            "aria-label": ju ? void 0 : `Copy ${Eu}`,
            onClick: uu => {
              uu.stopPropagation(), Xu(Eu)
            },
            children: [(0, Ou.jsx)(hu, {
              name: lu ? "check" : "copy"
            }), ju && (0, Ou.jsx)("span", {
              children: lu ? "Copied" : null !== Uu && void 0 !== Uu && Uu.failed ? "Copy failed" : ju
            })]
          })
        }
        Cu.b.registerLanguage("javascript", bu.d), Cu.b.registerLanguage("typescript", cu.c);
        const eu = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Gu = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          pu = 24;

        function wu(uu) {
          let {
            code: Eu,
            lang: ju,
            compact: Uu = !1
          } = uu;
          const Xu = (0, su.useMemo)((() => function(uu, Eu) {
              const ju = eu[Eu];
              return ju ? Cu.b.highlight(uu, {
                language: ju
              }).value : uu.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(Eu, ju)), [Eu, ju]),
            lu = Eu.split("\n").length,
            qu = !Uu && lu > pu + 6,
            [fu, bu] = (0, su.useState)(!1),
            cu = eu[ju];
          return (0, Ou.jsxs)("div", {
            className: Zu()("DocsCodeBlock", {
              Compact: Uu,
              Collapsed: qu && !fu
            }),
            children: [!Uu && (0, Ou.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, Ou.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: cu ? Gu[cu] : "Text"
              }), (0, Ou.jsx)(Mu, {
                text: Eu,
                label: "Copy"
              })]
            }), (0, Ou.jsx)("pre", {
              children: (0, Ou.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Xu
                }
              })
            }), qu && (0, Ou.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": fu,
              onClick: () => {
                bu(!fu)
              },
              children: [(0, Ou.jsx)(hu, {
                name: fu ? "chevron-up" : "chevron-down"
              }), fu ? "Show less" : `Show all ${lu} lines`]
            })]
          })
        }
        var Ju = ju(4928);
        var du = ju(4931);
        const au = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Pu(uu) {
          const Eu = new Map;
          let ju, su = [],
            Uu = !1;
          const Zu = () => {
            ju && Eu.set(ju.name, ju.lines.join("\n").trimEnd())
          };
          for (const Xu of uu.split("\n")) {
            const uu = Xu.match(au);
            Uu || Xu.startsWith("/*") ? (Uu || (Zu(), ju = void 0), su.push(Xu), Uu = !Xu.includes("*/")) : uu ? (Zu(), ju = {
              name: uu[1],
              lines: [...su, Xu]
            }, su = []) : ju && (Xu.startsWith(" ") || Xu.startsWith("\t") || /^[}\])|]/.test(Xu)) ? ju.lines.push(Xu) : ju && "" !== Xu.trim() && (Zu(), ju = void 0)
          }
          return Zu(), Eu
        }

        function ou(uu) {
          return "methods" === uu || "callbacks" === uu || "settings" === uu
        }
        const ku = {
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
              setterSnippet: (uu, Eu) => `api.setClientOption(playerId, "${uu}", ${Eu})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (uu, Eu) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${uu}", ${Eu})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (uu, Eu) => `api.setMobSetting(mobId, "${uu}", ${Eu})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (uu, Eu) => `api.setVehicleSetting(vehicleId, "${uu}", ${Eu})`
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
          mu = {
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

        function vu(uu) {
          return uu.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function Ku(uu) {
          let Eu = !1;
          return uu.split("\n").map((uu => (uu.startsWith("```") && (Eu = !Eu), !Eu && /^#{3,} /.test(uu) ? uu.slice(1) : uu))).join("\n")
        }

        function Vu(uu) {
          return "readme" === uu ? "getting-started" : vu(uu)
        }
        const ru = "## Glossary of Referenced Types";
        const Qu = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...du.d.flatMap((uu => {
            const Eu = {
              id: uu.id,
              slug: Vu(uu.id),
              title: uu.title,
              markdown: uu.content,
              ...ku[uu.id]
            };
            if ("readme" === uu.id) return function(uu) {
              const Eu = uu.markdown.indexOf(ru),
                ju = uu.markdown.indexOf("\n```", Eu),
                su = uu.markdown.indexOf("\n```", ju + 1);
              if (-1 === Eu || -1 === ju || -1 === su) throw new Error(`Getting started has no "${ru}" section with a code block`);
              const Uu = uu.markdown.slice(Eu + 31, ju).trim(),
                Zu = [...Pu(uu.markdown.slice(uu.markdown.indexOf("\n", ju + 1) + 1, su))].map((uu => {
                  let [Eu, ju] = uu;
                  return `## ${Eu}\n\n\`\`\`ts\n${ju}\n\`\`\`\n`
                })),
                Xu = uu.markdown.slice(uu.markdown.indexOf("\n", su + 1) + 1);
              return [{
                ...uu,
                markdown: `${uu.markdown.slice(0,Eu)}${Xu}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Uu}\n\n${Zu.join("\n")}`
              }]
            }(Eu);
            if ("howTo" === uu.id) {
              const {
                parent: uu,
                guides: ju
              } = function(uu) {
                const [Eu, ...ju] = uu.markdown.split(/^(?=## )/m), su = [Eu], Uu = [];
                for (const Xu of ju) {
                  var Zu;
                  const Eu = Xu.indexOf("\n"),
                    ju = Xu.slice(3, Eu).trim(),
                    lu = Xu.slice(Eu + 1);
                  if (!lu.includes("```")) {
                    su.push(Xu);
                    continue
                  }
                  const qu = null !== (Zu = mu[ju]) && void 0 !== Zu ? Zu : {
                    icon: "lightbulb",
                    summary: `How to use ${ju.toLowerCase()} in World Code.`
                  };
                  Uu.push({
                    id: `${uu.id}${ju.split(/[^A-Za-z0-9]+/).map((uu=>uu.charAt(0).toUpperCase()+uu.slice(1))).join("")}`,
                    slug: `${uu.slug}-${vu(ju)}`,
                    title: ju,
                    layout: "article",
                    sourceAnchor: (0, Ju.u)(ju),
                    markdown: `# ${ju}\n\n${Ku(lu)}`,
                    ...qu
                  })
                }
                return {
                  parent: {
                    ...uu,
                    markdown: su.join(""),
                    childPageIds: Uu.map((uu => uu.id))
                  },
                  guides: Uu
                }
              }(Eu);
              return [uu, ...ju]
            }
            return [Eu]
          }))],
          iu = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Qu.filter((uu => void 0 !== uu.sourceAnchor)).map((uu => uu.id))]
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

        function Wu(uu) {
          return Qu.find((Eu => Eu.id === uu))
        }
        const Su = new Map;

        function Iu(uu) {
          let Eu = Su.get(uu.id);
          return Eu || (Eu = (0, Ju.z)(uu.markdown, "changelog" === uu.layout ? 3 : 2), Su.set(uu.id, Eu)), Eu
        }

        function Fu(uu, Eu) {
          return Iu(uu).sections.some((uu => uu.heading.anchor === Eu || uu.blocks.some((uu => "heading" === uu.kind && uu.anchor === Eu))))
        }

        function Bu(uu) {
          const [Eu, ...ju] = uu.replace(/^#/, "").split("-"), su = Qu.find((uu => uu.id === Eu));
          if (!su) return null;
          const Uu = ju.length > 0 ? (0, Ju.u)(ju.join("-")) : "";
          for (const Xu of null !== (Zu = su.childPageIds) && void 0 !== Zu ? Zu : []) {
            var Zu;
            const uu = Wu(Xu);
            if (uu.sourceAnchor === Uu) return {
              page: uu,
              anchor: ""
            };
            if (Fu(uu, Uu)) return {
              page: uu,
              anchor: Uu
            }
          }
          return {
            page: su,
            anchor: Uu
          }
        }
        const Lu = {
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

        function tu(uu, Eu) {
          let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const su = Eu.slug ? `${uu}/${Eu.slug}` : uu;
          return ju ? `${su}#${ju}` : su
        }
        var xu = ju(4942);
        const Tu = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Hu = new Set(["GameApi", "Console", "_TypeOf"]),
          Au = 4;

        function nu(uu) {
          let Eu = uu.length;
          for (; Eu > 0 && "" === uu[Eu - 1].trim();) Eu--;
          return uu.slice(0, Eu)
        }

        function yu(uu) {
          var Eu;
          const ju = nu(uu);
          if (null === (Eu = ju.at(-1)) || void 0 === Eu || !Eu.trimEnd().endsWith("*/")) return {
            lines: ju,
            doc: ""
          };
          const su = ju.findLastIndex((uu => uu.startsWith("/**")));
          return -1 === su ? {
            lines: ju,
            doc: ""
          } : {
            lines: nu(ju.slice(0, su)),
            doc: ju.slice(su).join("\n")
          }
        }

        function zu(uu) {
          var Eu;
          const ju = uu.split("\n"),
            su = ju.flatMap(((uu, Eu) => Tu.test(uu) ? [Eu] : []));
          let Uu = yu(ju.slice(0, null !== (Eu = su[0]) && void 0 !== Eu ? Eu : ju.length)).doc;
          return su.map(((uu, Eu) => {
            var Zu;
            const Xu = yu(ju.slice(uu, null !== (Zu = su[Eu + 1]) && void 0 !== Zu ? Zu : ju.length)),
              lu = {
                name: ju[uu].match(Tu)[1],
                doc: Uu,
                lines: Xu.lines
              };
            return Uu = Xu.doc, lu
          }))
        }

        function Ru(uu) {
          var Eu;
          const ju = uu.match(/^readonly \[([\s\S]*)\]$/);
          return ju ? null !== (Eu = ju[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Eu ? Eu : [] : null
        }

        function uE(uu) {
          if (!uu.startsWith("{") || !uu.endsWith("}")) return null;
          const Eu = {
              keys: [],
              values: []
            },
            ju = uu => {
              const ju = uu.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              ju && (Eu.keys.push(ju[1].startsWith('"') ? ju[1] : `"${ju[1]}"`), Eu.values.push(ju[2].trim()))
            };
          let su = 0,
            Uu = "";
          for (const Zu of uu.slice(1, -1)) "{[(".includes(Zu) ? su++ : "}])".includes(Zu) && su--, ";" === Zu && 0 === su ? (ju(Uu), Uu = "") : Uu += Zu;
          return ju(Uu), Eu
        }

        function EE(uu) {
          return uu.length > Au ? `\n\t| ${uu.join("\n\t| ")}` : uu.join(" | ")
        }

        function jE(uu, Eu) {
          const ju = function(uu, Eu) {
            return uu.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((uu, ju) => {
              var su;
              const Uu = null === (su = Eu.get(ju)) || void 0 === su ? void 0 : su.object;
              return Uu ? EE(Uu.values) : uu
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((uu, ju) => {
              var su, Uu;
              const Zu = null === (su = Eu.get(ju)) || void 0 === su || null === (Uu = su.object) || void 0 === Uu ? void 0 : Uu.values.map(Ru);
              return null !== Zu && void 0 !== Zu && Zu.every((uu => null !== uu)) ? EE([...new Set(Zu.flat())]) : uu
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((uu, ju) => {
              var su;
              const Uu = null === (su = Eu.get(ju)) || void 0 === su ? void 0 : su.members;
              return Uu ? EE(Uu) : uu
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((uu, ju) => {
              var su;
              const Uu = null === (su = Eu.get(ju)) || void 0 === su ? void 0 : su.object;
              return Uu ? EE(Uu.keys) : uu
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((uu, ju) => {
              var su, Uu;
              return null !== (su = null === (Uu = Eu.get(ju)) || void 0 === Uu ? void 0 : Uu.text) && void 0 !== su ? su : uu
            }))
          }(uu.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), Eu);
          return [uu.doc, ju].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function sE(uu) {
          const Eu = zu(uu),
            ju = function(uu) {
              const Eu = new Map,
                ju = uu.find((uu => "_TypeOf" === uu.name));
              let su = null;
              const Uu = () => {
                if (su) {
                  const uu = su.lines.join("\n");
                  Eu.set(su.name, {
                    text: uu,
                    members: Ru(uu),
                    object: uE(uu)
                  })
                }
              };
              for (const Zu of ju.lines.slice(1, -1)) {
                const uu = Zu.match(/^\t([\w$]+): (.+)$/);
                uu ? (Uu(), su = {
                  name: uu[1],
                  lines: [uu[2]]
                }) : su && su.lines.push(Zu.replace(/^\t/, ""))
              }
              return Uu(), Eu
            }(Eu),
            su = new Map;
          for (const Uu of Eu) Hu.has(Uu.name) || su.has(Uu.name) || su.set(Uu.name, jE(Uu, ju));
          return su
        }
        let UE, ZE, XE;

        function lE() {
          return ZE ??= function(uu) {
            const Eu = zu(uu).find((uu => "GameApi" === uu.name)),
              ju = new Map,
              su = Eu.lines;
            for (let Zu = 0; Zu < su.length; Zu++) {
              var Uu;
              if (!su[Zu].trimStart().startsWith("/**")) continue;
              const uu = Zu;
              for (; Zu < su.length && !su[Zu].includes("*/");) Zu++;
              const Eu = null === (Uu = su[Zu + 1]) || void 0 === Uu ? void 0 : Uu.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!Eu) continue;
              let Xu = null;
              const lu = [];
              let qu = "description",
                fu = !1;
              for (const ju of su.slice(uu, Zu + 1).join("\n").split("\n").map((uu => uu.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const uu = ju.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                uu ? (Xu = uu[1].trim(), qu = "deprecation") : ju.startsWith("@") ? (qu = "otherTag", fu = !0) : "" === ju.trim() ? fu || (qu = "description", lu.push(ju)) : "deprecation" !== qu || /^[A-Z]/.test(ju.trim()) ? "otherTag" !== qu && (qu = "description", lu.push(ju)) : Xu = `${Xu} ${ju.trim()}`.trim()
              }
              ju.set(Eu[1], {
                deprecation: Xu,
                description: lu.join("\n").trim()
              })
            }
            return ju
          }(xu.default), ZE
        }

        function qE() {
          if (!XE) {
            XE = new Map;
            for (const uu of Qu) {
              const Eu = (0, Ju.y)(Iu(uu)).flatMap((uu => uu.blocks));
              for (const uu of (0, Ju.l)(Eu))
                if ("ts" === uu.lang || "typescript" === uu.lang)
                  for (const [Eu, ju] of Pu(uu.code)) XE.set(Eu, ju)
            }
            for (const [uu, Eu] of(UE ??= sE(xu.default), UE)) XE.has(uu) || XE.set(uu, Eu)
          }
          return XE
        }
        const fE = {
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
        let CE;

        function bE() {
          if (!CE) {
            CE = new Map;
            for (const uu of Qu)
              if (ou(uu.layout))
                for (const Eu of Iu(uu).sections) CE.has(Eu.heading.text) || CE.set(Eu.heading.text, {
                  pageId: uu.id,
                  anchor: Eu.heading.anchor
                })
          }
          return CE
        }

        function cE(uu) {
          const Eu = uu.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return Eu ? bE().get(Eu[1]) : void 0
        }
        const NE = (0, su.createContext)("/docs"),
          OE = (0, su.createContext)(null),
          YE = (0, su.createContext)(!1),
          hE = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function DE(uu) {
          const Eu = uu.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return Eu ? Eu[1] : null
        }

        function gE(uu) {
          let {
            colour: Eu
          } = uu;
          return (0, Ou.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: Eu
            },
            "aria-hidden": "true"
          })
        }

        function ME(uu) {
          const Eu = [];
          let ju = 0;
          for (const su of uu.matchAll(hE)) Eu.push(uu.slice(ju, su.index), (0, Ou.jsx)(gE, {
            colour: su[0]
          }), su[0]), ju = su.index + su[0].length;
          return Eu.push(uu.slice(ju)), Eu
        }

        function eE(uu) {
          let {
            href: Eu,
            children: ju
          } = uu;
          const Uu = (0, su.useContext)(NE);
          if (Eu.startsWith("#")) {
            const uu = Bu(Eu);
            if (uu) return (0, Ou.jsx)(Xu.c, {
              to: tu(Uu, uu.page, uu.anchor),
              children: (0, Ou.jsx)(YE.Provider, {
                value: !0,
                children: ju
              })
            })
          }
          return (0, Ou.jsx)("a", {
            href: Eu,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, Ou.jsx)(YE.Provider, {
              value: !0,
              children: ju
            })
          })
        }

        function GE(uu) {
          let {
            code: Eu
          } = uu;
          const ju = (0, su.useContext)(NE);
          if ((0, su.useContext)(YE)) return (0, Ou.jsx)("code", {
            className: "DocsInlineCode",
            children: Eu
          });
          if (qE().has(Eu)) return (0, Ou.jsx)(dE, {
            type: Eu
          });
          const Uu = cE(Eu);
          if (Uu) return (0, Ou.jsx)(Xu.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: tu(ju, Wu(Uu.pageId), Uu.anchor),
            children: Eu
          });
          const Zu = DE(Eu);
          return (0, Ou.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Zu && (0, Ou.jsx)(gE, {
              colour: Zu
            }), Eu]
          })
        }

        function pE(uu) {
          let {
            text: Eu
          } = uu;
          const ju = [];
          let Uu = 0;
          for (const su of Eu.matchAll(Ju.h)) {
            su.index > Uu && ju.push(...ME(Eu.slice(Uu, su.index)));
            const [, uu, Zu, Xu, lu, qu] = su;
            uu ? ju.push((0, Ou.jsx)(GE, {
              code: (0, Ju.n)(uu, Zu)
            })) : Xu ? ju.push((0, Ou.jsx)("strong", {
              children: (0, Ou.jsx)(pE, {
                text: Xu
              })
            })) : ju.push((0, Ou.jsx)(eE, {
              href: qu,
              children: (0, Ou.jsx)(pE, {
                text: lu
              })
            })), Uu = su.index + su[0].length
          }
          return Uu < Eu.length && ju.push(...ME(Eu.slice(Uu))), (0, Ou.jsx)(Ou.Fragment, {
            children: ju.map(((uu, Eu) => (0, Ou.jsx)(su.Fragment, {
              children: uu
            }, Eu)))
          })
        }
        const wE = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          JE = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function dE(uu) {
          let {
            type: Eu
          } = uu;
          const ju = qE(),
            Uu = [];
          for (const su of Eu.trim().matchAll(wE)) {
            const [uu, Eu, Zu, Xu, lu] = su;
            Eu ? Uu.push((0, Ou.jsx)("span", {
              className: "DocsTypeString",
              children: uu
            })) : Zu && ju.has(Zu) ? Uu.push((0, Ou.jsx)(mE, {
              name: Zu,
              definition: ju.get(Zu)
            })) : Zu ? Uu.push((0, Ou.jsx)("span", {
              className: JE.has(Zu) ? "DocsTypeKeyword" : "DocsTypeName",
              children: uu
            })) : Xu ? Uu.push((0, Ou.jsx)("span", {
              className: "DocsTypeNumber",
              children: uu
            })) : lu ? Uu.push(" ") : Uu.push((0, Ou.jsx)("span", {
              className: "DocsTypePunctuation",
              children: uu
            }))
          }
          return (0, Ou.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Uu.map(((uu, Eu) => (0, Ou.jsx)(su.Fragment, {
              children: uu
            }, Eu)))
          })
        }
        const aE = 480,
          PE = 6,
          oE = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let kE = 0;

        function mE(uu) {
          let {
            name: Eu,
            definition: ju
          } = uu;
          const Uu = (0, su.useContext)(NE),
            Zu = fE[Eu],
            lu = (0, su.useRef)(null),
            qu = (0, su.useRef)(null),
            Cu = (0, su.useRef)(null),
            [bu, cu] = (0, su.useState)(!1),
            [Nu, Yu] = (0, su.useState)(null),
            Du = (0, su.useRef)(),
            gu = (0, su.useContext)(OE),
            [Mu] = (0, su.useState)((() => "DocsTypePopover-" + kE++)),
            eu = () => {
              clearTimeout(Du.current), cu(!0)
            },
            Gu = () => {
              clearTimeout(Du.current), Du.current = setTimeout((() => {
                cu(!1)
              }), 120)
            };
          return (0, su.useEffect)((() => {
            if (!bu) return;
            const uu = uu => {
              if ("Escape" === uu.key) {
                var Eu, ju;
                if (null !== (Eu = qu.current) && void 0 !== Eu && Eu.contains(document.activeElement)) null === (ju = lu.current) || void 0 === ju || ju.focus();
                cu(!1)
              }
            };
            return document.addEventListener("keydown", uu), () => {
              document.removeEventListener("keydown", uu)
            }
          }), [bu]), (0, su.useEffect)((() => () => {
            clearTimeout(Du.current)
          }), []), (0, su.useLayoutEffect)((() => {
            if (!bu || !lu.current || !qu.current) return void Yu(null);
            const uu = lu.current.getBoundingClientRect(),
              Eu = qu.current.offsetHeight,
              ju = Math.min(aE, window.innerWidth - 32),
              su = Math.min(Math.max(16, uu.left), window.innerWidth - ju - 16),
              Uu = uu.bottom + PE + Eu < window.innerHeight;
            Yu({
              left: su,
              top: Uu ? uu.bottom + PE : Math.max(16, uu.top - PE - Eu)
            })
          }), [bu]), (0, Ou.jsxs)(Ou.Fragment, {
            children: [(0, Ou.jsx)("button", {
              type: "button",
              ref: lu,
              className: "DocsTypeLink",
              "aria-expanded": bu,
              "aria-describedby": bu ? Mu : void 0,
              onMouseEnter: eu,
              onMouseLeave: Gu,
              onFocus: eu,
              onBlur: Gu,
              onKeyDown: uu => {
                "Tab" === uu.key && !uu.shiftKey && Cu.current && (uu.preventDefault(), Cu.current.focus())
              },
              onClick: eu,
              children: Eu
            }), bu && (0, fu.createPortal)((0, Ou.jsxs)("span", {
              ref: qu,
              id: Mu,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Nu ? {
                left: Nu.left,
                top: Nu.top,
                maxWidth: aE
              } : {
                visibility: "hidden"
              },
              onMouseEnter: eu,
              onMouseLeave: Gu,
              onFocus: eu,
              onBlur: Gu,
              children: [(0, Ou.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, Ou.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: Eu
                }), Zu && (0, Ou.jsxs)(Xu.c, {
                  ref: Cu,
                  className: "DocsTypePopoverLink",
                  to: tu(Uu, Wu(Zu)),
                  onClick: () => {
                    cu(!1)
                  },
                  onKeyDown: uu => {
                    if ("Tab" === uu.key) {
                      var Eu;
                      if (uu.preventDefault(), uu.shiftKey || !lu.current || ! function(uu, Eu) {
                          const ju = [...document.querySelectorAll(oE)],
                            su = ju.slice(ju.indexOf(uu) + 1).find((uu => uu.getClientRects().length > 0 && !(null !== Eu && void 0 !== Eu && Eu.contains(uu))));
                          return null === su || void 0 === su || su.focus(), void 0 !== su
                        }(lu.current, qu.current)) null === (Eu = lu.current) || void 0 === Eu || Eu.focus();
                      uu.shiftKey || cu(!1)
                    }
                  },
                  children: [Wu(Zu).title, (0, Ou.jsx)(hu, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, Ou.jsx)(wu, {
                lang: "ts",
                code: ju,
                compact: !0
              })]
            }), null !== gu && void 0 !== gu ? gu : document.body)]
          })
        }
        var vE = ju(202),
          KE = ju(4944),
          VE = ju(4952),
          rE = ju(4958);
        const QE = {
          progressBar: {
            zu: 30,
            Ru: .075,
            uE: 5,
            EE: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            UE: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            XE: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            lE: !0,
            scale: 3,
            rotation: 15,
            qE: !1
          },
          gravityBar: {
            zu: 30,
            CE: .25,
            bE: 3,
            cE: .8,
            gravity: 1,
            NE: 1.5,
            OE: 8,
            YE: 4,
            EE: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            DE: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            ME: 5,
            eE: 1200,
            GE: .15,
            pE: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var iE = ju(337),
          WE = ju(2045);

        function SE(uu) {
          return uu.startsWith("fa-")
        }
        const IE = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          FE = {
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

        function BE(uu) {
          return "string" === typeof uu ? "text" : "entityName" in uu || "translationKey" in uu ? "other" : (0, iE.ub)(uu) ? "progressBar" : (0, iE.tb)(uu) ? "keyBinding" : "icon" in uu ? "icon" : "str" in uu && "string" === typeof uu.str ? "text" : "other"
        }
        const LE = [{
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
          tE = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...LE],
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
                options: WE.j
              },
              isRequired: !0
            }, ...LE],
            other: []
          };

        function xE(uu) {
          return "string" === typeof uu ? {
            str: uu
          } : uu
        }

        function TE(uu, Eu) {
          let ju = xE(uu);
          for (const su of Eu) ju = ju && "object" === typeof ju ? ju[su] : void 0;
          return ju
        }

        function HE(uu, Eu, ju) {
          const su = (uu, Uu) => {
            var Zu;
            const Xu = Eu[Uu],
              lu = {
                ...uu
              };
            if (Uu === Eu.length - 1) return void 0 === ju ? delete lu[Xu] : lu[Xu] = ju, lu;
            const qu = su(null !== (Zu = uu[Xu]) && void 0 !== Zu ? Zu : {}, Uu + 1);
            return 0 === Object.keys(qu).length ? delete lu[Xu] : lu[Xu] = qu, lu
          };
          return function(uu) {
            const Eu = Object.keys(uu);
            return "string" === typeof uu.str && 1 === Eu.length ? uu.str : uu
          }(su(xE(uu), 0))
        }

        function AE(uu, Eu) {
          const ju = BE(uu),
            su = tE[ju].find((uu => uu.path.join(".") === Eu.join("."))),
            Uu = null !== su && void 0 !== su && su.isRequired && "other" !== ju ? TE(FE[ju], Eu) : void 0;
          return HE(uu, Eu, Uu)
        }

        function nE(uu) {
          switch (BE(uu)) {
            case "text":
              return String(TE(uu, ["str"]));
            case "icon":
              return String(TE(uu, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(TE(uu,["progress"])))}%`;
            case "keyBinding":
              return String(TE(uu, ["action"]));
            case "other":
              return JSON.stringify(uu)
          }
        }
        const yE = /^[A-Za-z_$][\w$]*$/;

        function zE(uu) {
          if (Array.isArray(uu)) return `[${uu.map(zE).join(", ")}]`;
          if (uu && "object" === typeof uu) {
            const Eu = Object.entries(uu).map((uu => {
              let [Eu, ju] = uu;
              return `${yE.test(Eu)?Eu:JSON.stringify(Eu)}: ${zE(ju)}`
            }));
            return 0 === Eu.length ? "{}" : `{ ${Eu.join(", ")} }`
          }
          return JSON.stringify(uu)
        }

        function RE(uu) {
          const Eu = uu.map(zE),
            ju = `[${Eu.join(", ")}]`;
          return ju.length <= 60 ? ju : `[\n${Eu.map((uu=>`    ${uu},`)).join("\n")}\n]`
        }
        const uj = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Ej(uu) {
          let Eu = "";
          for (let Uu = 0; Uu < uu.length; Uu++) {
            const Zu = uu[Uu];
            if ("\\" === Zu) {
              var ju;
              const su = null !== (ju = uu[Uu + 1]) && void 0 !== ju ? ju : "";
              Eu += "'" === su ? "'" : Zu + su, Uu++
            } else if ('"' === Zu) Eu += '\\"';
            else {
              var su;
              Eu += null !== (su = uj[Zu]) && void 0 !== su ? su : Zu
            }
          }
          return `"${Eu}"`
        }

        function jj(uu) {
          if ("string" === typeof uu) return !0;
          if (!uu || "object" !== typeof uu || Array.isArray(uu)) return !1;
          const Eu = uu;
          return "ProgressBar" === Eu.type ? "number" === typeof Eu.progress : "StyledKeyBinding" === Eu.type ? WE.j.includes(Eu.action) : "string" === typeof Eu.icon || "string" === typeof Eu.str || "string" === typeof Eu.entityName || "string" === typeof Eu.translationKey
        }

        function sj(uu) {
          let Eu;
          try {
            Eu = function(uu) {
              let Eu = "",
                ju = "",
                su = 0;
              const Uu = () => {
                Eu += ju.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), ju = ""
              };
              for (; su < uu.length;) {
                const Zu = uu.slice(su).search(/["'`]|\/\//);
                if (-1 === Zu) {
                  ju += uu.slice(su);
                  break
                }
                ju += uu.slice(su, su + Zu);
                const Xu = su + Zu,
                  lu = uu[Xu];
                if ("/" === lu) {
                  const Eu = uu.indexOf("\n", Xu);
                  su = -1 === Eu ? uu.length : Eu;
                  continue
                }
                if (Uu(), "`" === lu) throw new Error("Use quotes rather than template strings.");
                let qu = Xu + 1;
                for (; qu < uu.length && uu[qu] !== lu;) qu += "\\" === uu[qu] ? 2 : 1;
                if (qu >= uu.length) throw new Error("A string is missing its closing quote.");
                const fu = uu.slice(Xu + 1, qu);
                Eu += Ej(fu), su = qu + 1
              }
              return Uu(), JSON.parse(Eu)
            }(uu.trim())
          } catch (su) {
            return {
              parts: null,
              error: su instanceof SyntaxError ? "This isn't a valid array yet." : su.message
            }
          }
          if (!Array.isArray(Eu)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const ju = Eu.findIndex((uu => !jj(uu)));
          return -1 !== ju ? {
            parts: null,
            error: `Part ${ju+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: Eu,
            error: null
          }
        }
        const Uj = 1 / vE.e.clientTicksPerSecond,
          Zj = 700,
          Xj = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          lj = {
            progressBar: QE.progressBar.UE,
            timedClick: QE.timedClick.icon,
            gravityBar: QE.gravityBar.icon,
            precisionBar: QE.precisionBar.icon,
            rhythmClick: QE.rhythmClick.icon
          };

        function qj(uu) {
          let {
            type: Eu
          } = uu;
          const [ju, Uu] = (0, su.useState)("ready"), [Xu, lu] = (0, su.useState)(1), [qu, fu] = (0, su.useState)(!0), Cu = (0, su.useRef)(null), bu = (0, su.useRef)(null), cu = (0, su.useRef)(null), Nu = (0, su.useRef)(new Set), Yu = (0, su.useRef)(!1), Du = lj[Eu], gu = (0, su.useMemo)((() => ({
            getState: () => {
              var uu, Eu;
              return null !== (uu = null === (Eu = cu.current) || void 0 === Eu ? void 0 : Eu.getState()) && void 0 !== uu ? uu : Xj
            },
            onFrame: uu => (Nu.current.add(uu), () => {
              Nu.current.delete(uu)
            })
          })), []);
          (0, su.useEffect)((() => {
            const uu = Cu.current,
              Eu = bu.current;
            if (!uu || !Eu) return;
            const ju = new ResizeObserver((() => {
              lu(uu.clientWidth / Math.max(1, Eu.offsetWidth))
            }));
            return ju.observe(uu), () => {
              ju.disconnect()
            }
          }), []), (0, su.useEffect)((() => {
            var uu;
            if ("playing" !== ju) return;
            let su = !1;
            const Zu = new rE.f[Eu](QE[Eu], (uu => {
              su = !0, fu(!1), Uu(uu ? "succeeded" : "failed")
            }), (() => {}));
            cu.current = Zu;
            let Xu = 0,
              lu = performance.now(),
              qu = requestAnimationFrame((function uu(Eu) {
                for (Xu += Math.min(.25, (Eu - lu) / 1e3), lu = Eu; Xu >= Uj && !su;) Xu -= Uj, Zu.handleTick(Uj);
                for (const ju of Nu.current) ju();
                su || (qu = requestAnimationFrame(uu))
              }));
            return null === (uu = Cu.current) || void 0 === uu || uu.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(qu), Zu.tearDown(), cu.current = null, Yu.current = !1
            }
          }), [ju, Eu]), (0, su.useEffect)((() => {
            if (qu) return;
            const uu = setTimeout((() => {
              fu(!0)
            }), Zj);
            return () => {
              clearTimeout(uu)
            }
          }), [qu]);
          const Mu = uu => {
            var Eu;
            "playing" === ju && Yu.current !== uu && (Yu.current = uu, null === (Eu = cu.current) || void 0 === Eu || Eu.handleMouseInput(uu))
          };
          return (0, Ou.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, Ou.jsxs)("div", {
              ref: Cu,
              className: Zu()("DocsQteStage", {
                Playing: "playing" === ju
              }),
              tabIndex: "playing" === ju ? 0 : -1,
              role: "playing" === ju ? "button" : void 0,
              "aria-label": "playing" === ju ? `${Eu} quick time event: click or press Space` : void 0,
              onPointerDown: uu => {
                0 === uu.button && Mu(!0)
              },
              onPointerUp: () => {
                Mu(!1)
              },
              onPointerLeave: () => {
                Mu(!1)
              },
              onPointerCancel: () => {
                Mu(!1)
              },
              onKeyDown: uu => {
                "playing" !== ju || " " !== uu.key && "Enter" !== uu.key || (uu.preventDefault(), Mu(!0))
              },
              onKeyUp: uu => {
                "playing" !== ju || " " !== uu.key && "Enter" !== uu.key || Mu(!1)
              },
              children: [(0, Ou.jsx)("div", {
                ref: bu,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Xu})`
                },
                children: "playing" === ju && (0, Ou.jsx)(VE.c.Provider, {
                  value: gu,
                  children: (0, Ou.jsx)(KE.b, {
                    qte: {
                      type: Eu,
                      parameters: QE[Eu]
                    }
                  })
                })
              }), "playing" !== ju && (0, Ou.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== ju && (0, Ou.jsxs)("div", {
                  className: Zu()("DocsQteResult", "succeeded" === ju ? "Succeeded" : "Failed"),
                  children: [(0, Ou.jsx)(hu, {
                    name: "succeeded" === ju ? "check" : "cross",
                    isTinted: !0
                  }), (0, Ou.jsx)("span", {
                    children: "succeeded" === ju ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, Ou.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !qu,
                  onClick: () => {
                    Uu("playing")
                  },
                  children: [(0, Ou.jsx)(hu, {
                    name: "ready" === ju ? "play" : "replay"
                  }), (0, Ou.jsx)("span", {
                    children: "ready" === ju ? `Try ${Eu}` : "Play again"
                  })]
                })]
              })]
            }), Du && !SE(Du) && (0, Ou.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, Ou.jsx)("code", {
                children: Du
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function fj(uu) {
          let {
            level: Eu,
            text: ju,
            anchor: su,
            className: Uu
          } = uu;
          const Xu = `h${Math.min(Eu,6)}`;
          return (0, Ou.jsxs)(Xu, {
                id: su,
                className: Zu()("DocsHeading", Uu),
                children: [(0, Ou.jsx)(pE, {
                      text: ju
                    }), (0, Ou.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${su}`,
                        "aria-label": `Link to ${ju.replace(/`/g,"")}`,children:"#"})]})}function Cj(uu){let{items:Eu,ordered:ju}=uu;const su=ju?"ol":"ul";return(0,Ou.jsx)(su,{className:"DocsList",children:Eu.map(((uu,Eu)=>(0,Ou.jsxs)("li",{children:[(0,Ou.jsx)(pE,{text:uu.text}),uu.children.length>0&&(0,Ou.jsx)(Cj,{items:uu.children,ordered:ju})]},Eu)))})}function bj(uu){const Eu=uu[0],ju="paragraph"===(null===Eu||void 0===Eu?void 0:Eu.kind)?Eu.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(ju)?"warning":/^\*\*(tip|prefer)/.test(ju)?"tip":"note"}function cj(uu){let{block:Eu}=uu;switch(Eu.kind){case"heading":return(0,Ou.jsx)(fj,{level:Eu.level,text:Eu.text,anchor:Eu.anchor});case"paragraph":return(0,Ou.jsx)("p",{children:(0,Ou.jsx)(pE,{text:Eu.text})});case"code":{const uu="ts"===Eu.lang?function(uu){const Eu=uu.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return Eu&&Object.hasOwn(QE,Eu[1])?Eu[1]:null}(Eu.code):null;return(0,Ou.jsxs)(Ou.Fragment,{children:[(0,Ou.jsx)(wu,{code:Eu.code,lang:Eu.lang}),uu&&(0,Ou.jsx)(qj,{type:uu})]})}case"table":return(0,Ou.jsx)("div",{className:"DocsTableScroll",children:(0,Ou.jsxs)("table",{className:"DocsTable",children:[(0,Ou.jsx)("thead",{children:(0,Ou.jsx)("tr",{children:Eu.header.map(((uu,Eu)=>(0,Ou.jsx)("th",{children:(0,Ou.jsx)(pE,{text:uu})},Eu)))})}),(0,Ou.jsx)("tbody",{children:Eu.rows.map(((uu,Eu)=>(0,Ou.jsx)("tr",{children:uu.map(((uu,Eu)=>(0,Ou.jsx)("td",{children:(0,Ou.jsx)(pE,{text:uu})},Eu)))},Eu)))})]})});case"list":return(0,Ou.jsx)(Cj,{items:Eu.items,ordered:Eu.ordered});case"quote":return(0,Ou.jsx)("aside",{className:Zu()("DocsCallout",bj(Eu.blocks)),children:(0,Ou.jsx)(Nj,{blocks:Eu.blocks})});case"rule":return(0,Ou.jsx)("hr",{className:"DocsRule"})}}function Nj(uu){let{blocks:Eu}=uu;return(0,Ou.jsx)(Ou.Fragment,{children:Eu.map(((uu,Eu)=>(0,Ou.jsx)(cj,{block:uu},Eu)))})}var Oj=ju(4934),Yj=ju(4938);function hj(uu){return"blocks"===uu||"items"===uu}const Dj=new Map;function gj(uu){let Eu=Dj.get(uu);return Eu||(Eu=function(uu){const Eu={entries:[],legend:[],notes:[],examples:[]};let ju=!1;for(const Zu of uu.split(/\r?\n/).slice(1)){if(Zu.startsWith("#")){const uu=Zu.replace(/^# ?/,""),su=uu.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);su?Eu.legend.push({code:su[1],meaning:su[2],usage:su[3].trim()}):/^Examples:/.test(uu.trim())?ju=!0:ju&&uu.trim()?Eu.examples.push(uu.trim()):uu.trim()&&!/^\s/.test(uu)&&Eu.notes.push(uu.trim());continue}const uu=Zu.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var su,Uu;uu&&Eu.entries.push({name:uu[1],variants:null!==(su=null===(Uu=uu[2])||void 0===Uu?void 0:Uu.split(","))&&void 0!==su?su:[]})}return Eu}("blocks"===uu?Oj:Yj),Dj.set(uu,Eu)),Eu}function Mj(uu){let{className:Eu,value:ju,placeholder:su,label:Uu,onChange:Zu,count:Xu,children:lu}=uu;return(0,Ou.jsxs)("div",{className:Eu,children:[(0,Ou.jsx)(hu,{name:"magnifying-glass"}),(0,Ou.jsx)("input",{type:"search",value:ju,placeholder:su,"aria-label":Uu,onChange:uu=>{Zu(uu.target.value)}}),lu,Xu&&(0,Ou.jsxs)("span",{className:"DocsFilterCount",children:[Xu.visible," of ",Xu.total]})]})}var ej=ju(1116);function Gj(uu){const Eu=uu.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return Eu?Eu[2]:null}function pj(uu){return"paragraph"===uu.kind&&""===uu.text.trim()}function wj(uu){const Eu={name:uu.heading.text,description:[],params:[],returns:null};let ju="description";for(const Uu of uu.blocks)if(!pj(Uu))if("heading"===Uu.kind&&/^Parameters:?$/.test(Uu.text))ju="params";else if("heading"===Uu.kind&&/^Returns:?$/.test(Uu.text))ju="returns",Eu.returns={type:"",description:[]};else if("params"!==ju||"table"!==Uu.kind){if("returns"===ju&&"paragraph"===Uu.kind&&""===Eu.returns.type){const uu=Gj(Uu.text);if(null!==uu){Eu.returns.type=uu.replaceAll("\\|","|");continue}}"returns"===ju?Eu.returns.description.push(Uu):Eu.description.push(Uu)}else for(const[uu,ju,Zu]of Uu.rows){var su;Eu.params.push({name:uu,type:null!==(su=Gj(ju))&&void 0!==su?su:ju,description:null!==Zu&&void 0!==Zu?Zu:""})}return Eu}const Jj=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function dj(uu){return uu.filter((uu=>!pj(uu)))}const aj=/^[\w][\w .'&!:()-]*$/,Pj=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function oj(uu){var Eu;if("code"===uu.kind&&"text"===uu.lang){const Eu=uu.code.split("\n").map((uu=>uu.trim())).filter(Boolean);return Eu.length>0&&Eu.every((uu=>aj.test(uu)))?Eu.map((uu=>({name:uu}))):null}return"paragraph"===uu.kind&&Pj.test(uu.text.trim())?[...uu.text.matchAll(/`([ ^ `]+)` / g)].flatMap((uu => uu[1].split(/,\s*/).map((uu => ({
                              name: uu.trim()
                            }))))): "table" === uu.kind && null !== (Eu = uu.header[0]) && void 0 !== Eu && Eu.startsWith("Song") ? uu.rows.map((uu => {
                              let [Eu, ju] = uu;
                              return {
                                name: Eu.replace(/`/g, ""),
                                caption: ju
                              }
                            })) : null
                          }

                          function kj(uu) {
                            const Eu = [];
                            for (const ju of uu) {
                              const uu = oj(ju),
                                su = Eu.at(-1),
                                Uu = "table" === ju.kind;
                              uu ? "names" === (null === su || void 0 === su ? void 0 : su.kind) && su.isSongs === Uu ? su.names.push(...uu) : Eu.push({
                                kind: "names",
                                names: uu,
                                isSongs: Uu
                              }) : Eu.push({
                                kind: "block",
                                block: ju
                              })
                            }
                            return Eu
                          }
                          const mj = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function vj(uu, Eu) {
                            return `${mj[uu]}-${(0,Ju.u)(Eu)}`
                          }
                          const Kj = new WeakMap;

                          function Vj(uu, Eu, ju) {
                            let su = Kj.get(Eu);
                            if (!su) {
                              su = new Map;
                              const ju = new Set;
                              for (const Uu of (0, Ju.y)(Eu)) {
                                const Eu = kj(dj(Uu.blocks)).map((Eu => {
                                  if ("block" === Eu.kind) return Eu;
                                  return {
                                    kind: "names",
                                    names: Eu.names.map((Eu => {
                                      var su, Zu;
                                      const Xu = vj(uu, Eu.name);
                                      let lu = Xu;
                                      for (let uu = 2; ju.has(lu); uu++) lu = `${Xu}-${uu}`;
                                      return ju.add(lu), {
                                        ...Eu,
                                        anchor: lu,
                                        heading: null !== (su = null === (Zu = Uu.heading) || void 0 === Zu ? void 0 : Zu.text) && void 0 !== su ? su : ""
                                      }
                                    })),
                                    isSongs: Eu.isSongs
                                  }
                                }));
                                su.set(Uu.blocks, Eu)
                              }
                              Kj.set(Eu, su)
                            }
                            const Uu = su.get(ju);
                            if (!Uu) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Uu
                          }
                          const rj = "/textures/docs/skinPreviews",
                            Qj = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var ij = ju(4408),
                            Wj = ju(4427);

                          function Sj(uu) {
                            return Object.hasOwn(ij.h, uu) ? ij.h[uu] : null
                          }
                          const Ij = {
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
                            blendMode: Wj.e.Standard
                          };

                          function Fj(uu, Eu, ju) {
                            return Eu + (ju - Eu) * uu()
                          }

                          function Bj(uu, Eu, ju) {
                            return uu + (Eu - uu) * ju
                          }

                          function Lj(uu) {
                            return uu.length > 0 && "timeFraction" in uu[0]
                          }

                          function tj(uu, Eu) {
                            if (0 === uu.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Lj(uu.colorGradients)) {
                              const ju = uu.colorGradients,
                                {
                                  color: su
                                } = ju[Math.floor(Eu() * ju.length) % ju.length];
                              return [{
                                at: 0,
                                colour: [su[0] / 255, su[1] / 255, su[2] / 255, 1]
                              }]
                            }
                            return [...uu.colorGradients].sort(((uu, Eu) => uu.timeFraction - Eu.timeFraction)).map((uu => {
                              var ju, su, Uu;
                              const Zu = uu.minColor,
                                Xu = null !== (ju = uu.maxColor) && void 0 !== ju ? ju : Zu,
                                lu = Eu(),
                                qu = [Bj(Zu[0], Xu[0], lu) / 255, Bj(Zu[1], Xu[1], lu) / 255, Bj(Zu[2], Xu[2], lu) / 255, Bj(null !== (su = Zu[3]) && void 0 !== su ? su : 1, null !== (Uu = Xu[3]) && void 0 !== Uu ? Uu : 1, lu)];
                              return {
                                at: uu.timeFraction,
                                colour: qu
                              }
                            }))
                          }

                          function xj(uu, Eu, ju, su) {
                            const Uu = Fj(su, uu.minEmitPower, uu.maxEmitPower),
                              Zu = Eu => Fj(su, Math.min(uu.dir1[Eu], uu.dir2[Eu]), Math.max(uu.dir1[Eu], uu.dir2[Eu])) * Uu,
                              Xu = [...uu.velocityGradients].sort(((uu, Eu) => uu.timeFraction - Eu.timeFraction)).map((uu => ({
                                at: uu.timeFraction,
                                factor: Fj(su, uu.factor, uu.factor2)
                              })));
                            return {
                              pos: [Fj(su, Eu[0], ju[0]), Fj(su, Eu[1], ju[1]), Fj(su, Eu[2], ju[2])],
                              dir: [Zu(0), Zu(1), Zu(2)],
                              age: 0,
                              life: Fj(su, uu.minLifeTime, uu.maxLifeTime),
                              size: Fj(su, uu.minSize, uu.maxSize),
                              colours: tj(uu, su),
                              velocityFactors: Xu
                            }
                          }

                          function Tj(uu, Eu, ju, su) {
                            if (Eu < uu[0].at) return ju(Math.min(1, uu.length - 1));
                            for (let Uu = 0; Uu < uu.length - 1; Uu++)
                              if (Eu <= uu[Uu + 1].at) {
                                const Zu = uu[Uu + 1].at - uu[Uu].at;
                                return su(ju(Uu), ju(Uu + 1), Zu > 0 ? (Eu - uu[Uu].at) / Zu : 1)
                              } return ju(uu.length - 1)
                          }

                          function Hj(uu) {
                            return Tj(uu.colours, uu.age / uu.life, (Eu => uu.colours[Eu].colour), ((uu, Eu, ju) => [Bj(uu[0], Eu[0], ju), Bj(uu[1], Eu[1], ju), Bj(uu[2], Eu[2], ju), Bj(uu[3], Eu[3], ju)]))
                          }

                          function Aj(uu, Eu, ju) {
                            if (uu.age += ju, uu.age >= uu.life) return !1;
                            const su = function(uu) {
                              return 0 === uu.velocityFactors.length ? 1 : Tj(uu.velocityFactors, uu.age / uu.life, (Eu => uu.velocityFactors[Eu].factor), Bj)
                            }(uu) * ju;
                            for (let Zu = 0; Zu < 3; Zu++) {
                              var Uu;
                              uu.pos[Zu] += uu.dir[Zu] * su, uu.dir[Zu] += (null !== (Uu = Eu[Zu]) && void 0 !== Uu ? Uu : 0) * ju
                            }
                            return !0
                          }

                          function nj(uu) {
                            return String(Math.round(1e6 * uu) / 1e6)
                          }

                          function yj(uu) {
                            return `[${uu.map(nj).join(", ")}]`
                          }

                          function zj(uu, Eu) {
                            const ju = `${Eu}    `;
                            return `[\n${(Lj(uu)?uu.map((uu=>{const Eu=[`${ju}    timeFraction: ${nj(uu.timeFraction)},`,`${ju}    minColor: ${yj(uu.minColor)},`];return uu.maxColor&&Eu.push(`${ju}    maxColor: ${yj(uu.maxColor)},`),`${ju}{\n${Eu.join("\n")}\n${ju}},`})):uu.map((uu=>`
                            $ {
                              ju
                            } {
                              color: $ {
                                yj(uu.color)
                              }
                            }, `))).join("\n")}\n${Eu}]`
                          }
                          const Rj = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            us = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const Es = .6;

                          function ss(uu, Eu) {
                            return `${Eu?"song":"sound"}:${uu}`
                          }
                          let Us = {
                              track: null,
                              volume: Es
                            },
                            Zs = null,
                            Xs = 0,
                            ls = 0;
                          const qs = new Set;

                          function fs(uu) {
                            Us = {
                              ...Us,
                              ...uu
                            }, qs.forEach((uu => {
                              uu()
                            }))
                          }

                          function Cs(uu) {
                            Us.track && fs({
                              track: {
                                ...Us.track,
                                ...uu
                              }
                            })
                          }

                          function bs(uu) {
                            const [Eu, ju] = (0, su.useState)((() => uu(Us))), Uu = (0, su.useRef)(uu);
                            return Uu.current = uu, (0, su.useEffect)((() => {
                              const uu = () => {
                                ju((() => Uu.current(Us)))
                              };
                              return qs.add(uu), uu(), () => {
                                qs.delete(uu)
                              }
                            }), []), Eu
                          }

                          function cs() {
                            Xs++;
                            const uu = Zs;
                            Zs = null, null === uu || void 0 === uu || uu.stop()
                          }

                          function Ns(uu, Eu) {
                            let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            cs();
                            const Uu = Xs,
                              {
                                track: Zu
                              } = Us,
                              Xu = Zu && Zu.name === uu && Zu.isSong === Eu ? Zu.duration : 0;
                            ls = su, fs({
                              track: {
                                name: uu,
                                isSong: Eu,
                                status: "loading",
                                duration: Xu
                              }
                            }), Promise.all([ju.e(227), ju.e(253)]).then((() => ju(40076))).then((ju => {
                              let {
                                playDocsSound: Zu
                              } = ju;
                              Uu === Xs && (Zs = Zu(uu, Eu, Us.volume, su, {
                                onPlay: uu => {
                                  Uu === Xs && Cs({
                                    status: "playing",
                                    duration: uu
                                  })
                                },
                                onEnd: uu => {
                                  var Eu, ju;
                                  Uu === Xs && (Zs = null, uu ? fs({
                                    track: null
                                  }) : (ls = null !== (Eu = null === (ju = Us.track) || void 0 === ju ? void 0 : ju.duration) && void 0 !== Eu ? Eu : 0, Cs({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((Eu => {
                              console.error(`Could not play docs sound ${uu}`, Eu), Uu === Xs && fs({
                                track: null
                              })
                            }))
                          }

                          function Os() {
                            const {
                              track: uu
                            } = Us;
                            if (!uu) return;
                            if ("playing" === uu.status && Zs) return ls = Zs.bM(), Zs.pause(), void Cs({
                              status: "paused"
                            });
                            if ("loading" === uu.status) return cs(), void Cs({
                              status: "paused"
                            });
                            if (Zs) return void Zs.resume();
                            const Eu = uu.duration > 0 && ls >= uu.duration - .05;
                            Ns(uu.name, uu.isSong, Eu ? 0 : ls)
                          }

                          function Ys() {
                            var uu;
                            return Zs && "playing" === (null === (uu = Us.track) || void 0 === uu ? void 0 : uu.status) ? Zs.bM() : ls
                          }

                          function hs(uu) {
                            var Eu;
                            null === (Eu = Zs) || void 0 === Eu || Eu.setVolume(uu), fs({
                              volume: uu
                            })
                          }

                          function Ds() {
                            cs(), ls = 0, fs({
                              track: null
                            })
                          }
                          const gs = (0, su.createContext)(null);
                          let Ms = null;

                          function es() {
                            const [uu, Eu] = (0, su.useState)(null);
                            return (0, su.useEffect)((() => {
                              let uu = !1;
                              return Ms ??= Promise.all([ju.e(73), ju.e(76), ju.e(75), ju.e(74), ju.e(188), ju.e(100), ju.e(231)]).then((() => ju(40070))), Ms.then((ju => {
                                uu || Eu(ju)
                              }), (uu => {
                                console.error("Could not load the docs gallery's textures", uu), Ms = null
                              })), () => {
                                uu = !0
                              }
                            }), []), uu
                          }
                          const Gs = 24,
                            ps = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function ws(uu, Eu) {
                            const ju = "skins" === uu ? function(uu, Eu) {
                              const ju = Qj.find((Eu => uu.startsWith(Eu.heading)));
                              return ju ? function(uu, Eu) {
                                return `${uu}-${Eu}`
                              }(ju.prefix, Eu) : null
                            }(Eu.heading, Eu.name) : null;
                            return null === ju ? null : `${rj}/${ju}.webp`
                          }

                          function ds(uu) {
                            let {
                              kind: Eu,
                              entry: ju,
                              assets: Uu,
                              renderedUrl: Xu
                            } = uu;
                            const {
                              name: lu
                            } = ju, [qu, fu] = (0, su.useState)(!1);
                            if ("icons" === Eu && SE(lu)) return (0, Ou.jsx)(ej.e, {
                              className: "DocsTileIcon",
                              name: lu
                            });
                            let Cu = null;
                            var bu;
                            if ("icons" === Eu) Cu = null !== (bu = null === Uu || void 0 === Uu ? void 0 : Uu.getIngameIconUrl(lu)) && void 0 !== bu ? bu : null;
                            else if ("particles" === Eu) {
                              var cu, Nu, Yu;
                              Cu = null !== (cu = null === Uu || void 0 === Uu ? void 0 : Uu.getParticleTextureUrl(null !== (Nu = null === (Yu = Sj(lu)) || void 0 === Yu ? void 0 : Yu.texture) && void 0 !== Nu ? Nu : lu)) && void 0 !== cu ? cu : null
                            } else "skins" === Eu && (Cu = null !== Xu && void 0 !== Xu ? Xu : ps.test(lu) ? `/textures/charSkins/previews/${lu}_preview.png` : null);
                            return !Cu || qu ? (0, Ou.jsx)(hu, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === Eu ? "person" : "image"
                            }) : (0, Ou.jsx)("img", {
                              className: Zu()("DocsTileImage", {
                                Pixelated: "skins" !== Eu
                              }),
                              src: Cu,
                              srcSet: Cu === Xu ? `${Cu} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Cu}`), fu(!0)
                              }
                            })
                          }

                          function as(uu) {
                            let {
                              entry: Eu,
                              isSong: ju
                            } = uu;
                            const su = bs((uu => {
                                let {
                                  track: su
                                } = uu;
                                return (null === su || void 0 === su ? void 0 : su.name) === Eu.name && su.isSong === ju ? su.status : null
                              })),
                              Uu = null !== su && "paused" !== su;
                            return (0, Ou.jsxs)("button", {
                              type: "button",
                              id: Eu.anchor,
                              className: Zu()("DocsSoundTile", {
                                Playing: Uu
                              }),
                              "data-docs-track": ss(Eu.name, ju),
                              "aria-label": Uu ? `Pause ${Eu.name}` : `Play ${Eu.name}`,
                              onClick: () => {
                                null !== su ? Os() : Ns(Eu.name, ju)
                              },
                              children: [(0, Ou.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, Ou.jsx)(hu, {
                                  name: Uu ? "pause" : "play"
                                })
                              }), (0, Ou.jsx)("code", {
                                className: "DocsSoundName",
                                children: Eu.name
                              }), Eu.caption && (0, Ou.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: Eu.caption
                              })]
                            })
                          }

                          function Ps(uu) {
                            let {
                              kind: Eu,
                              names: ju,
                              isSongs: Uu
                            } = uu;
                            const Xu = es(),
                              [lu, qu] = gu(),
                              fu = !1 === (null === lu || void 0 === lu ? void 0 : lu.failed) ? lu.text : null,
                              Cu = (0, su.useContext)(gs),
                              [bu, cu] = (0, su.useState)(""),
                              Nu = bu.trim().toLowerCase(),
                              Yu = Nu ? ju.filter((uu => uu.name.toLowerCase().includes(Nu))) : ju;
                            return (0, Ou.jsxs)("div", {
                              className: "DocsGallery",
                              children: [ju.length > Gs && (0, Ou.jsx)(Mj, {
                                className: "DocsGalleryFilter",
                                value: bu,
                                placeholder: `Filter ${ju.length} names\u2026`,
                                label: "Filter names",
                                onChange: cu,
                                count: Nu ? {
                                  visible: Yu.length,
                                  total: ju.length
                                } : null
                              }), (0, Ou.jsx)("div", {
                                className: Zu()("DocsGalleryGrid", `Kind-${Eu}`, {
                                  Songs: Uu
                                }),
                                children: Yu.map((uu => {
                                  if ("sounds" === Eu) return (0, Ou.jsx)(as, {
                                    entry: uu,
                                    isSong: Uu
                                  }, uu.anchor);
                                  if (Cu && "particles" === Eu && Sj(uu.name)) return (0, Ou.jsxs)("button", {
                                    type: "button",
                                    id: uu.anchor,
                                    className: Zu()("DocsTile Previewable", {
                                      Copied: fu === uu.name
                                    }),
                                    title: `Play "${uu.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Cu(uu.name), qu(uu.name)
                                    },
                                    children: [(0, Ou.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, Ou.jsx)(ds, {
                                        kind: Eu,
                                        entry: uu,
                                        assets: Xu,
                                        renderedUrl: null
                                      }), (0, Ou.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, Ou.jsx)(hu, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, Ou.jsx)("span", {
                                      className: "DocsTileName",
                                      children: fu === uu.name ? "Copied!" : uu.name
                                    })]
                                  }, uu.anchor);
                                  const ju = ws(Eu, uu);
                                  return (0, Ou.jsxs)("button", {
                                    type: "button",
                                    id: uu.anchor,
                                    className: Zu()("DocsTile", {
                                      Copied: fu === uu.name
                                    }),
                                    title: `Copy "${uu.name}"`,
                                    onClick: () => {
                                      qu(uu.name)
                                    },
                                    children: [(0, Ou.jsx)("span", {
                                      className: Zu()("DocsTilePreview", {
                                        Rendered: null !== ju
                                      }),
                                      children: (0, Ou.jsx)(ds, {
                                        kind: Eu,
                                        entry: uu,
                                        assets: Xu,
                                        renderedUrl: ju
                                      })
                                    }), (0, Ou.jsx)("span", {
                                      className: "DocsTileName",
                                      children: fu === uu.name ? "Copied!" : uu.name
                                    })]
                                  }, uu.anchor)
                                }))
                              })]
                            })
                          }

                          function os(uu) {
                            let {
                              kind: Eu,
                              content: ju,
                              blocks: su
                            } = uu;
                            return (0, Ou.jsx)(Ou.Fragment, {
                              children: Vj(Eu, ju, su).map(((uu, ju) => "block" === uu.kind ? (0, Ou.jsx)(cj, {
                                block: uu.block
                              }, ju) : (0, Ou.jsx)(Ps, {
                                kind: Eu,
                                names: uu.names,
                                isSongs: uu.isSongs
                              }, ju)))
                            })
                          }
                          const ks = [{
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

                          function ms(uu) {
                            let {
                              cards: Eu = ks,
                              label: ju = "Start here"
                            } = uu;
                            const Uu = (0, su.useContext)(NE);
                            return (0, Ou.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": ju,
                              children: Eu.map((uu => {
                                let {
                                  pageId: Eu,
                                  countNoun: ju
                                } = uu;
                                const su = Wu(Eu);
                                return (0, Ou.jsxs)(Xu.c, {
                                  to: tu(Uu, su),
                                  className: "DocsLandingCard",
                                  children: [(0, Ou.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, Ou.jsx)(hu, {
                                      name: su.icon
                                    })
                                  }), (0, Ou.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: su.title
                                  }), (0, Ou.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: su.summary
                                  }), ju && (0, Ou.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [Iu(su).sections.length, " ", ju]
                                  })]
                                }, Eu)
                              }))
                            })
                          }
                          const vs = 240;

                          function Ks(uu) {
                            let {
                              faces: Eu
                            } = uu;
                            return (0, Ou.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, Ou.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${Eu.top}")`
                                }
                              }), (0, Ou.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${Eu.left}")`
                                }
                              }), (0, Ou.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${Eu.right}")`
                                }
                              })]
                            })
                          }

                          function Vs(uu) {
                            let {
                              src: Eu
                            } = uu;
                            const [ju, Uu] = (0, su.useState)(!1);
                            return ju ? null : (0, Ou.jsx)("img", {
                              src: Eu,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${Eu}`), Uu(!0)
                              }
                            })
                          }

                          function rs(uu) {
                            let {
                              kind: Eu
                            } = uu;
                            const ju = gj(Eu),
                              Uu = es(),
                              Xu = (0, lu.r)(),
                              [qu, fu] = (0, su.useState)(""),
                              [Cu, bu] = (0, su.useState)(null),
                              [cu, Nu] = (0, su.useState)(vs),
                              [Yu, Du] = (0, su.useState)(null),
                              gu = (0, su.useRef)(null),
                              eu = qu.trim().toLowerCase();
                            (0, su.useEffect)((() => {
                              const uu = (0, Ju.r)(Xu.hash),
                                su = ju.entries.find((ju => vj(Eu, ju.name) === uu));
                              if (su) gu.current = su.name, fu(su.name), bu(null), Du(su.name);
                              else if (null !== gu.current) {
                                const uu = gu.current;
                                gu.current = null, fu((Eu => Eu === uu ? "" : Eu)), Du(null)
                              }
                            }), [ju, Eu, Xu.hash, Xu.key]), (0, su.useEffect)((() => {
                              var uu;
                              null !== Yu && (null === (uu = document.getElementById(vj(Eu, Yu))) || void 0 === uu || uu.scrollIntoView({
                                block: "center"
                              }))
                            }), [Eu, Yu]);
                            const Gu = ju.entries.filter((uu => (!eu || uu.name.toLowerCase().includes(eu)) && (!Cu || uu.variants.includes(Cu))));
                            return (0, Ou.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [ju.notes.length > 0 && (0, Ou.jsx)("div", {
                                className: "DocsProse",
                                children: ju.notes.map((uu => (0, Ou.jsx)("p", {
                                  children: uu
                                }, uu)))
                              }), ju.legend.length > 0 && (0, Ou.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, Ou.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, Ou.jsx)("thead", {
                                    children: (0, Ou.jsxs)("tr", {
                                      children: [(0, Ou.jsx)("th", {
                                        children: "Code"
                                      }), (0, Ou.jsx)("th", {
                                        children: "Variant"
                                      }), (0, Ou.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, Ou.jsx)("tbody", {
                                    children: ju.legend.map((uu => (0, Ou.jsxs)("tr", {
                                      children: [(0, Ou.jsx)("td", {
                                        children: (0, Ou.jsx)("button", {
                                          type: "button",
                                          className: Zu()("DocsVariantChip", {
                                            Active: Cu === uu.code
                                          }),
                                          "aria-pressed": Cu === uu.code,
                                          title: `Show only ${Eu} with ${uu.meaning} variants`,
                                          onClick: () => {
                                            bu(Cu === uu.code ? null : uu.code)
                                          },
                                          children: uu.code
                                        })
                                      }), (0, Ou.jsx)("td", {
                                        children: uu.meaning
                                      }), (0, Ou.jsx)("td", {
                                        children: (0, Ou.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: uu.usage
                                        })
                                      })]
                                    }, uu.code)))
                                  })]
                                })
                              }), ju.examples.length > 0 && (0, Ou.jsx)(wu, {
                                lang: "text",
                                code: ju.examples.join("\n")
                              }), (0, Ou.jsx)(Mj, {
                                className: "DocsFilterBar",
                                value: qu,
                                placeholder: `Search ${ju.entries.length} ${Eu}\u2026`,
                                label: `Search ${Eu}`,
                                onChange: uu => {
                                  fu(uu), Nu(vs)
                                },
                                count: eu || Cu ? {
                                  visible: Gu.length,
                                  total: ju.entries.length
                                } : null,
                                children: Cu && (0, Ou.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    bu(null)
                                  },
                                  children: [Cu, " ", (0, Ou.jsx)(hu, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, Ou.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Gu.slice(0, cu).map((uu => {
                                  const ju = "blocks" === Eu ? null === Uu || void 0 === Uu ? void 0 : Uu.getBlockFaces(uu.name) : null,
                                    su = Uu && !ju ? Uu.getItemTextureUrl(uu.name) : null;
                                  return (0, Ou.jsxs)("div", {
                                    id: vj(Eu, uu.name),
                                    className: Zu()("DocsCatalogueTile", {
                                      Linked: uu.name === Yu
                                    }),
                                    children: [(0, Ou.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [ju && (0, Ou.jsx)(Ks, {
                                        faces: ju
                                      }), su && (0, Ou.jsx)(Vs, {
                                        src: su
                                      })]
                                    }), (0, Ou.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: uu.name
                                    }), uu.variants.length > 0 && (0, Ou.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: uu.variants.map((uu => (0, Ou.jsx)("span", {
                                        children: uu
                                      }, uu)))
                                    }), (0, Ou.jsx)(Mu, {
                                      text: uu.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, uu.name)
                                }))
                              }), Gu.length > cu && (0, Ou.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Nu(Gu.length)
                                },
                                children: ["Show all ", Gu.length]
                              }), 0 === Gu.length && (0, Ou.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", Eu, " match."]
                              })]
                            })
                          }
                          var Qs = ju(4992),
                            is = ju(1639);
                          const Ws = .95 * Qs.d;

                          function Ss(uu) {
                            return /^\s*```/.test(uu)
                          }

                          function Is(uu, Eu) {
                            const ju = [
                              []
                            ];
                            let su = !1;
                            for (const Uu of uu.split("\n")) !su && Eu(Uu) && ju.at(-1).length > 0 && ju.push([]), Ss(Uu) && (su = !su), ju.at(-1).push(Uu);
                            return ju.map((uu => uu.join("\n").trim())).filter(Boolean)
                          }

                          function Fs(uu, Eu) {
                            const ju = `${"#".repeat(Eu)} `,
                              su = [];
                            let Uu = !1;
                            for (const Zu of uu.split("\n")) Ss(Zu) ? Uu = !Uu : !Uu && Zu.startsWith(ju) && su.push(Zu.slice(ju.length).trim());
                            return su
                          }

                          function Bs(uu) {
                            return uu.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class Ls {
                            constructor(uu, Eu) {
                              this.origin = Eu, this.pages = void 0, this.partPaths = new Map;
                              const ju = uu.map((uu => {
                                const Eu = Eu => this.resolveLinks(uu, Eu).length,
                                  ju = function(uu, Eu) {
                                    const ju = uu.map((uu => Eu(uu.markdown) + 2)),
                                      su = ju.reduce(((uu, Eu) => uu + Eu), 0),
                                      Uu = su / Math.ceil(su / Ws),
                                      Zu = [];
                                    let Xu = 0;
                                    return uu.forEach(((uu, Eu) => {
                                      const su = ju[Eu];
                                      (0 === Zu.length || Xu + su > Ws || Xu + su / 2 > Uu) && (Zu.push([]), Xu = 0), Zu.at(-1).push(uu), Xu += su
                                    })), Zu
                                  }(function(uu, Eu) {
                                    return Is(uu, (uu => uu.startsWith("## "))).flatMap((uu => {
                                      var ju;
                                      const su = null !== (ju = Fs(uu, 2)[0]) && void 0 !== ju ? ju : "";
                                      if (Eu(uu) <= Ws) return [{
                                        markdown: uu,
                                        section: su
                                      }];
                                      let Uu = !1,
                                        Zu = "";
                                      return Is(uu, (uu => {
                                        const Eu = Uu && "" !== uu.trim();
                                        return Uu = "" === uu.trim(), Eu
                                      })).map((uu => {
                                        var Eu;
                                        const ju = Fs(uu, 3),
                                          Uu = uu.startsWith("### ") ? ju[0] : Zu;
                                        return Zu = null !== (Eu = ju.at(-1)) && void 0 !== Eu ? Eu : Zu, {
                                          markdown: uu,
                                          section: su || Uu
                                        }
                                      }))
                                    }))
                                  }(Bs(uu), Eu), Eu);
                                return {
                                  page: uu,
                                  groups: ju.length > 1 ? ju : []
                                }
                              }));
                              for (const {
                                  page: su,
                                  groups: Uu
                                }
                                of ju) Uu.forEach(((uu, Eu) => {
                                const ju = (0, Qs.w)(su.slug, Eu);
                                for (const Uu of uu.flatMap((uu => [...Fs(uu.markdown, 2), ...Fs(uu.markdown, 3)]))) {
                                  const uu = `${su.id}#${(0,Ju.u)(Uu)}`;
                                  this.partPaths.has(uu) || this.partPaths.set(uu, ju)
                                }
                              }));
                              this.pages = ju.map((uu => {
                                let {
                                  page: Eu,
                                  groups: ju
                                } = uu;
                                return {
                                  page: Eu,
                                  path: (0, Qs.t)(Eu.slug),
                                  markdown: `# ${Eu.title}\n\n${this.resolveLinks(Eu,Bs(Eu))}\n`,
                                  parts: ju.map(((uu, su) => this.renderPart(Eu, uu, su, ju.length)))
                                }
                              }))
                            }
                            url(uu) {
                              return `${this.origin}${uu}`
                            }
                            getPage(uu) {
                              return this.pages.find((Eu => Eu.page.id === uu))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((uu => (uu.parts.length > 0 ? uu.parts : [{
                                path: uu.path,
                                label: "",
                                markdown: uu.markdown
                              }]).filter((uu => uu.markdown.length > Qs.d))))
                            }
                            markdownUrl(uu, Eu) {
                              const ju = Eu && this.partPaths.get(`${uu.id}#${Eu}`) || (0, Qs.t)(uu.slug);
                              return this.url(Eu ? `${ju}#${Eu}` : ju)
                            }
                            resolveLinks(uu, Eu) {
                              return Eu.replace(/\]\((#[^)]+)\)/g, ((Eu, ju) => {
                                var su;
                                const Uu = null !== (su = Bu(ju)) && void 0 !== su ? su : this.samePageTarget(uu, ju);
                                return Uu ? `](${this.markdownUrl(Uu.page,Uu.anchor)})` : Eu
                              }))
                            }
                            samePageTarget(uu, Eu) {
                              const ju = (0, Ju.u)(Eu.slice(1));
                              return Fu(uu, ju) ? {
                                page: uu,
                                anchor: ju
                              } : null
                            }
                            renderPart(uu, Eu, ju, su) {
                              const Uu = function(uu) {
                                  const Eu = uu.map((uu => uu.section)).filter(Boolean);
                                  if (0 === Eu.length) return "";
                                  const ju = Eu[0],
                                    su = Eu.at(-1);
                                  return ju === su ? ju : `${ju} to ${su}`
                                }(Eu),
                                Zu = Eu.map((uu => uu.markdown)).join("\n\n"),
                                Xu = Uu ? `It covers ${Uu}. ` : "",
                                lu = `Part ${ju+1} of ${su} of [${uu.title}](${this.url((0,Qs.t)(uu.slug))}). ${Xu}[llms.txt](${this.url(Qs.f)}) lists every part.`;
                              return {
                                path: (0, Qs.w)(uu.slug, ju),
                                label: Uu,
                                markdown: `# ${uu.title}, part ${ju+1} of ${su}\n\n${lu}\n\n${this.resolveLinks(uu,Zu)}\n`
                              }
                            }
                            llmsTxt(uu) {
                              const Eu = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${ts(Qs.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const ju of iu) {
                                Eu.push("", `## ${ju.title}`, "");
                                for (const uu of ju.pageIds) {
                                  const ju = this.getPage(uu),
                                    {
                                      page: su,
                                      parts: Uu
                                    } = ju,
                                    Zu = `About ${ts(ju.markdown.length)} tokens${Uu.length>0?`, in ${Uu.length} parts:`:"."}`;
                                  Eu.push(`- [${su.title}](${this.url(ju.path)}): ${su.summary} ${Zu}`), Uu.forEach(((uu, ju) => {
                                    Eu.push(`  - [Part ${ju+1}${uu.label?`: ${uu.label}`:""}](${this.url(uu.path)})`)
                                  }))
                                }
                              }
                              return Eu.push("", "## Optional", "", `- [Every page in one file](${this.url(Qs.e)}): About ${ts(uu.length)} tokens, for a model with a large context window.`, ""), Eu.join("\n")
                            }
                            llmsFullTxt() {
                              return iu.flatMap((uu => uu.pageIds.map((uu => this.getPage(uu).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const uu = this.llmsFullTxt(),
                                Eu = this.llmsTxt(uu),
                                ju = new Map([
                                  [Qs.m, Eu],
                                  [Qs.f, Eu],
                                  [Qs.e, uu]
                                ]);
                              for (const su of this.pages) {
                                ju.set(su.path, su.markdown);
                                for (const uu of su.parts) ju.set(uu.path, uu.markdown)
                              }
                              return ju
                            }
                          }

                          function ts(uu) {
                            return `${Math.max(1,Math.round(uu/4e3))}K`
                          }
                          let xs = null;

                          function Ts() {
                            return xs ??= new Ls(Qu, is.e), xs
                          }
                          var Hs = ju(4995);
                          const As = [Hs.g, Hs.k];

                          function ns(uu) {
                            return Ts().getPage(uu.id).parts.length > 0 ? `Read ${Qs.i}, then the parts of the Bloxd Code API's ${uu.title} page it lists, so I can ask questions about it.` : `Read ${is.e}${(0,Qs.t)(uu.slug)} so I can ask questions about it. ${Hs.j}`
                          }

                          function ys(uu) {
                            let {
                              page: Eu
                            } = uu;
                            const [ju, su] = gu();
                            return (0, Ou.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, Ou.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  su(Ts().getPage(Eu.id).markdown)
                                },
                                children: [(0, Ou.jsx)(hu, {
                                  name: !1 === (null === ju || void 0 === ju ? void 0 : ju.failed) ? "check" : "copy"
                                }), (0, Ou.jsx)("span", {
                                  children: ju ? ju.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), As.map((uu => (0, Ou.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, Hs.d)(uu, ns(Eu)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, Ou.jsx)(hu, {
                                  name: "external-link"
                                }), (0, Ou.jsxs)("span", {
                                  children: ["Open in ", uu.name]
                                })]
                              }, uu.name)))]
                            })
                          }

                          function zs(uu) {
                            return `#${[0,1,2].map((Eu=>Math.round(Math.min(255,Math.max(0,uu[Eu]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function Rs(uu) {
                            return [parseInt(uu.slice(1, 3), 16), parseInt(uu.slice(3, 5), 16), parseInt(uu.slice(5, 7), 16)]
                          }

                          function uU(uu) {
                            let {
                              label: Eu,
                              min: ju,
                              max: su,
                              step: Uu,
                              low: Zu,
                              high: Xu,
                              onChange: lu
                            } = uu;
                            return (0, Ou.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ou.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Ou.jsx)("span", {
                                  children: Eu
                                }), (0, Ou.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Zu === Xu ? Zu : `${Zu}\u2013${Xu}`
                                })]
                              }), (0, Ou.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, Ou.jsx)("input", {
                                  type: "range",
                                  min: ju,
                                  max: su,
                                  step: Uu,
                                  value: Math.min(su, Zu),
                                  "aria-label": `Minimum ${Eu.toLowerCase()}`,
                                  onChange: uu => {
                                    const Eu = Number(uu.target.value);
                                    lu(Eu, Math.max(Eu, Xu))
                                  }
                                }), (0, Ou.jsx)("input", {
                                  type: "range",
                                  min: ju,
                                  max: su,
                                  step: Uu,
                                  value: Math.min(su, Xu),
                                  "aria-label": `Maximum ${Eu.toLowerCase()}`,
                                  onChange: uu => {
                                    const Eu = Number(uu.target.value);
                                    lu(Math.min(Eu, Zu), Eu)
                                  }
                                })]
                              })]
                            })
                          }

                          function EU(uu) {
                            let {
                              label: Eu,
                              min: ju,
                              max: su,
                              step: Uu,
                              value: Zu,
                              onChange: Xu,
                              format: lu = String
                            } = uu;
                            return (0, Ou.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ou.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Ou.jsx)("span", {
                                  children: Eu
                                }), (0, Ou.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: lu(Zu)
                                })]
                              }), (0, Ou.jsx)("input", {
                                type: "range",
                                min: ju,
                                max: su,
                                step: Uu,
                                value: Math.min(su, Math.max(ju, Zu)),
                                "aria-label": Eu,
                                onChange: uu => {
                                  Xu(Number(uu.target.value))
                                }
                              })]
                            })
                          }

                          function jU(uu) {
                            let {
                              opts: Eu,
                              onChange: ju
                            } = uu;
                            const su = Eu.colorGradients;
                            if (!Lj(su)) return (0, Ou.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ou.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, Ou.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, Ou.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: su.map(((uu, Eu) => (0, Ou.jsx)("input", {
                                  type: "color",
                                  value: zs(uu.color),
                                  "aria-label": `Colour ${Eu+1}`,
                                  onChange: uu => {
                                    const Uu = [...su];
                                    Uu[Eu] = {
                                      color: Rs(uu.target.value)
                                    }, ju(Uu)
                                  }
                                }, Eu)))
                              })]
                            });
                            const Uu = (uu, Eu) => {
                              const Uu = [...su];
                              Uu[uu] = Eu, ju(Uu)
                            };
                            return (0, Ou.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ou.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Ou.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, Ou.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), su.map(((uu, Eu) => {
                                var ju;
                                const su = null !== (ju = uu.maxColor) && void 0 !== ju ? ju : uu.minColor;
                                return (0, Ou.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, Ou.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * uu.timeFraction), "%"]
                                  }), (0, Ou.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${zs(uu.minColor)}, ${zs(su)})`
                                    }
                                  }), (0, Ou.jsx)("input", {
                                    type: "color",
                                    value: zs(uu.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*uu.timeFraction)}%`,
                                    onChange: ju => {
                                      Uu(Eu, {
                                        ...uu,
                                        minColor: [...Rs(ju.target.value), uu.minColor[3]]
                                      })
                                    }
                                  }), (0, Ou.jsx)("input", {
                                    type: "color",
                                    value: zs(su),
                                    "aria-label": `Maximum colour at ${Math.round(100*uu.timeFraction)}%`,
                                    onChange: ju => {
                                      Uu(Eu, {
                                        ...uu,
                                        maxColor: [...Rs(ju.target.value), su[3]]
                                      })
                                    }
                                  })]
                                }, Eu)
                              }))]
                            })
                          }
                          const sU = [-.5, -.5, -.5],
                            UU = [.5, .5, .5],
                            ZU = [0, 1, 2, 3, 4, 5, 6, 7].map((uu => [1 & uu ? UU[0] : sU[0], 2 & uu ? UU[1] : sU[1], 4 & uu ? UU[2] : sU[2]]));class XU {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(uu, Eu, ju, su) {
                              const Uu = Math.round(31 * Eu),
                                Zu = Math.round(31 * ju),
                                Xu = Math.round(31 * su),
                                lu = `${Uu}|${Zu}|${Xu}`;
                              let qu = this.tints.get(uu);
                              (!qu || qu.size > 2e3) && (qu = new Map, this.tints.set(uu, qu));
                              let fu = qu.get(lu);
                              if (fu) return fu;
                              fu = document.createElement("canvas"), fu.width = uu.naturalWidth || 16, fu.height = uu.naturalHeight || 16;
                              const Cu = fu.getContext("2d");
                              return Cu ? (Cu.imageSmoothingEnabled = !1, Cu.drawImage(uu, 0, 0, fu.width, fu.height), Cu.globalCompositeOperation = "multiply", Cu.fillStyle = `rgb(${Uu/31*255}, ${Zu/31*255}, ${Xu/31*255})`, Cu.fillRect(0, 0, fu.width, fu.height), Cu.globalCompositeOperation = "destination-in", Cu.drawImage(uu, 0, 0, fu.width, fu.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), qu.set(lu, fu), fu
                            }
                          }

                          function lU(uu) {
                            let {
                              opts: Eu,
                              textureUrl: ju,
                              burst: Uu,
                              paused: Zu
                            } = uu;
                            const Xu = (0, su.useRef)(null),
                              lu = (0, su.useRef)(Eu);
                            lu.current = Eu;
                            const qu = (0, su.useRef)(Zu);
                            qu.current = Zu;
                            const fu = (0, su.useRef)(null),
                              Cu = (0, su.useRef)(null),
                              bu = (0, su.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(uu) {
                                let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const ju = [-.5, -.5, -.5],
                                  su = [.5, .5, .5];
                                let Uu = .5;
                                for (let Zu = 0; Zu < 40; Zu++) {
                                  const Zu = xj(uu, ju, su, Eu),
                                    Xu = Math.max(Zu.life / 30, .001);
                                  for (; Aj(Zu, uu.gravity, Xu);) Uu = Math.max(Uu, Math.hypot(Zu.pos[0], Zu.pos[1], Zu.pos[2]) + Zu.size / 2)
                                }
                                return Uu
                              }(Eu)))), [Eu]),
                              cu = (0, su.useRef)(bu);
                            return cu.current = bu, (0, su.useEffect)((() => {
                              if (fu.current = null, !ju) return;
                              const uu = new Image;
                              let Eu = !1;
                              return uu.onload = () => {
                                Eu || (fu.current = uu)
                              }, uu.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${ju}`)
                              }, uu.src = ju, () => {
                                Eu = !0
                              }
                            }), [ju]), (0, su.useEffect)((() => {
                              var uu;
                              null === (uu = Cu.current) || void 0 === uu || uu.call(Cu)
                            }), [Eu, Uu]), (0, su.useEffect)((() => {
                              const uu = Xu.current,
                                Eu = null === uu || void 0 === uu ? void 0 : uu.getContext("2d");
                              if (!uu || !Eu) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const ju = new XU;
                              let su = [],
                                Uu = 0,
                                Zu = -.7,
                                bu = cu.current,
                                Nu = performance.now(),
                                Ou = 0,
                                Yu = !0,
                                hu = null;
                              const Du = () => {
                                const uu = lu.current,
                                  Eu = Math.min(400, Math.max(0, Math.ceil(uu.manualEmitCount)));
                                su = [];
                                for (let ju = 0; ju < Eu; ju++) su.push(xj(uu, sU, UU, Math.random));
                                Uu = 0
                              };
                              Cu.current = Du, Du();
                              const gu = Xu => {
                                Ou = requestAnimationFrame(gu);
                                const Cu = Math.min(.05, (Xu - Nu) / 1e3);
                                if (Nu = Xu, !Yu) return;
                                const Mu = window.devicePixelRatio || 1,
                                  eu = Math.round(uu.clientWidth * Mu),
                                  Gu = Math.round(uu.clientHeight * Mu);
                                if (0 === eu || 0 === Gu) return;
                                uu.width === eu && uu.height === Gu || (uu.width = eu, uu.height = Gu);
                                const pu = lu.current;
                                null === hu && (Zu += .18 * Cu), bu += (cu.current - bu) * Math.min(1, 4 * Cu);
                                const wu = .6 * Cu;
                                su = su.filter((uu => Aj(uu, pu.gravity, wu))), 0 !== su.length || qu.current || (Uu += Cu, Uu > .6 && Du());
                                const Ju = function(uu, Eu, ju, su) {
                                  const Uu = 3.2 * su,
                                    Zu = .44 * Math.min(uu, Eu) * Uu / su,
                                    Xu = Math.cos(ju),
                                    lu = Math.sin(ju),
                                    qu = Math.cos(.42),
                                    fu = Math.sin(.42);
                                  return (ju, su, Cu) => {
                                    const bu = ju * lu + Cu * Xu,
                                      cu = Uu - (su * fu + bu * qu);
                                    if (cu < .05) return null;
                                    const Nu = Zu / cu;
                                    return {
                                      x: uu / 2 + (ju * Xu - Cu * lu) * Nu,
                                      y: Eu / 2 - (su * qu - bu * fu) * Nu,
                                      scale: Nu,
                                      depth: cu
                                    }
                                  }
                                }(eu, Gu, Zu, bu);
                                ! function(uu, Eu, ju, su, Uu) {
                                  const Zu = uu.createLinearGradient(0, 0, 0, ju);
                                  Zu.addColorStop(0, "#23262d"), Zu.addColorStop(1, "#16181c"), uu.globalCompositeOperation = "source-over", uu.globalAlpha = 1, uu.fillStyle = Zu, uu.fillRect(0, 0, Eu, ju);
                                  const Xu = (Eu, ju) => {
                                      const Uu = su(Eu[0], Eu[1], Eu[2]),
                                        Zu = su(ju[0], ju[1], ju[2]);
                                      Uu && Zu && (uu.beginPath(), uu.moveTo(Uu.x, Uu.y), uu.lineTo(Zu.x, Zu.y), uu.stroke())
                                    },
                                    lu = Math.ceil(Uu) + 1,
                                    qu = sU[1];
                                  uu.lineWidth = 1, uu.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let fu = -lu; fu <= lu; fu++) Xu([fu + .5, qu, .5 - lu], [fu + .5, qu, lu + .5]), Xu([.5 - lu, qu, fu + .5], [lu + .5, qu, fu + .5]);
                                  uu.strokeStyle = "rgba(255, 255, 255, 0.28)", uu.setLineDash([4, 4]);
                                  for (const fu of ZU)
                                    for (const uu of ZU) {
                                      const Eu = [0, 1, 2].filter((Eu => fu[Eu] !== uu[Eu]));
                                      1 === Eu.length && fu[Eu[0]] < uu[Eu[0]] && Xu(fu, uu)
                                    }
                                  uu.setLineDash([])
                                }(Eu, eu, Gu, Ju, bu);
                                const du = fu.current,
                                  au = su.map((uu => ({
                                    particle: uu,
                                    at: Ju(uu.pos[0], uu.pos[1], uu.pos[2])
                                  }))).filter((uu => null !== uu.at)).sort(((uu, Eu) => Eu.at.depth - uu.at.depth));
                                Eu.imageSmoothingEnabled = !1;
                                for (const uu of function(uu) {
                                    switch (uu) {
                                      case Wj.e.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Wj.e.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Wj.e.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Wj.e.MultiplyAdd:
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
                                  }(pu.blendMode)) {
                                  Eu.globalCompositeOperation = uu.operation;
                                  for (const {
                                      particle: su,
                                      at: Uu
                                    }
                                    of au) {
                                    const [Zu, Xu, lu, qu] = Hj(su), fu = Math.max(1, su.size * Uu.scale);
                                    Eu.globalAlpha = uu.usesAlpha ? Math.min(1, Math.max(0, qu)) : 1, du ? Eu.drawImage(ju.get(du, Zu, Xu, lu), Uu.x - fu / 2, Uu.y - fu / 2, fu, fu) : (Eu.fillStyle = `rgb(${255*Zu}, ${255*Xu}, ${255*lu})`, Eu.fillRect(Uu.x - fu / 2, Uu.y - fu / 2, fu, fu))
                                  }
                                }
                                Eu.globalCompositeOperation = "source-over", Eu.globalAlpha = 1
                              };
                              Ou = requestAnimationFrame(gu);
                              const Mu = new IntersectionObserver((uu => {
                                let [Eu] = uu;
                                Yu = Eu.isIntersecting
                              }));
                              Mu.observe(uu);
                              const eu = Eu => {
                                  hu = Eu.clientX, uu.setPointerCapture(Eu.pointerId)
                                },
                                Gu = uu => {
                                  null !== hu && (Zu += .01 * (uu.clientX - hu), hu = uu.clientX)
                                },
                                pu = () => {
                                  hu = null
                                };
                              return uu.addEventListener("pointerdown", eu), uu.addEventListener("pointermove", Gu), uu.addEventListener("pointerup", pu), uu.addEventListener("pointercancel", pu), () => {
                                cancelAnimationFrame(Ou), Mu.disconnect(), Cu.current = null, uu.removeEventListener("pointerdown", eu), uu.removeEventListener("pointermove", Gu), uu.removeEventListener("pointerup", pu), uu.removeEventListener("pointercancel", pu)
                              }
                            }), []), (0, Ou.jsx)("canvas", {
                              ref: Xu,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${Eu.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const qU = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            fU = [{
                              mode: Wj.e.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Wj.e.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Wj.e.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Wj.e.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Wj.e.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            CU = (0, su.forwardRef)((function(uu, Eu) {
                              var ju, Uu;
                              let {
                                textures: Xu
                              } = uu;
                              const lu = es(),
                                qu = (0, su.useRef)(null),
                                [fu, Cu] = (0, su.useState)(Ij),
                                [bu, cu] = (0, su.useState)("example"),
                                [Nu, Yu] = (0, su.useState)(0),
                                [Du, gu] = (0, su.useState)(!1),
                                eu = uu => {
                                  const Eu = "example" === uu ? Ij : Sj(uu);
                                  Eu && (Cu(Eu), cu(uu))
                                };
                              (0, su.useImperativeHandle)(Eu, (() => ({
                                preview: uu => {
                                  var Eu;
                                  eu(uu), null === (Eu = qu.current) || void 0 === Eu || Eu.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Gu = uu => {
                                  Cu({
                                    ...fu,
                                    ...uu
                                  }), cu(null)
                                },
                                pu = function(uu, Eu) {
                                  if (null !== Eu) return `${Rj}    presetId: "${Eu}",\n${us}\n})`;
                                  const ju = uu.velocityGradients.map((uu => `        {\n            timeFraction: ${nj(uu.timeFraction)},\n            factor: ${nj(uu.factor)},\n            factor2: ${nj(uu.factor2)},\n        },`)),
                                    su = [`    dir1: ${yj(uu.dir1)},`, `    dir2: ${yj(uu.dir2)},`, us, `    texture: "${uu.texture}",`, `    minLifeTime: ${nj(uu.minLifeTime)},`, `    maxLifeTime: ${nj(uu.maxLifeTime)},`, `    minEmitPower: ${nj(uu.minEmitPower)},`, `    maxEmitPower: ${nj(uu.maxEmitPower)},`, `    minSize: ${nj(uu.minSize)},`, `    maxSize: ${nj(uu.maxSize)},`, `    manualEmitCount: ${nj(uu.manualEmitCount)},`, `    gravity: ${yj(uu.gravity)},`, `    colorGradients: ${zj(uu.colorGradients,"    ")},`, `    velocityGradients: ${ju.length>0?`[\n${ju.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${nj(uu.blendMode)},`];
                                  return void 0 !== uu.hideDist && su.push(`    hideDist: ${nj(uu.hideDist)},`), `${Rj}${su.join("\n")}\n})`
                                }(fu, null === bu || "example" === bu ? null : bu),
                                Ju = Xu.includes(fu.texture) ? Xu : [...Xu, fu.texture];
                              return (0, Ou.jsxs)("section", {
                                ref: qu,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, Ou.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, Ou.jsxs)("div", {
                                    children: [(0, Ou.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, Ou.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, Ou.jsx)(Mu, {
                                    text: pu,
                                    label: "Copy code"
                                  })]
                                }), (0, Ou.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, Ou.jsx)("button", {
                                    type: "button",
                                    className: Zu()("DocsVariantChip", {
                                      Active: "example" === bu
                                    }),
                                    onClick: () => {
                                      eu("example")
                                    },
                                    children: "Example"
                                  }), qU.filter((uu => null !== Sj(uu))).map((uu => (0, Ou.jsx)("button", {
                                    type: "button",
                                    className: Zu()("DocsVariantChip", {
                                      Active: bu === uu
                                    }),
                                    onClick: () => {
                                      eu(uu)
                                    },
                                    children: uu
                                  }, uu))), (0, Ou.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== bu && void 0 !== bu ? bu : "custom",
                                    "aria-label": "Preset",
                                    onChange: uu => {
                                      eu(uu.target.value)
                                    },
                                    children: [(0, Ou.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === bu && (0, Ou.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), ij.d.map((uu => (0, Ou.jsx)("option", {
                                      value: uu,
                                      children: uu
                                    }, uu)))]
                                  })]
                                }), (0, Ou.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, Ou.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, Ou.jsx)(lU, {
                                      opts: fu,
                                      textureUrl: null !== (ju = null === lu || void 0 === lu ? void 0 : lu.getParticleTextureUrl(fu.texture)) && void 0 !== ju ? ju : null,
                                      burst: Nu,
                                      paused: Du
                                    }), (0, Ou.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, Ou.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Yu(Nu + 1)
                                        },
                                        children: [(0, Ou.jsx)(hu, {
                                          name: "replay"
                                        }), (0, Ou.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, Ou.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": Du,
                                        onClick: () => {
                                          gu(!Du)
                                        },
                                        children: [(0, Ou.jsx)(hu, {
                                          name: Du ? "play" : "pause"
                                        }), (0, Ou.jsx)("span", {
                                          children: Du ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, Ou.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, Ou.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Ou.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, Ou.jsx)("span", {
                                          children: "Texture"
                                        }), (0, Ou.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: fu.texture
                                        })]
                                      }), (0, Ou.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: Ju.map((uu => {
                                          var Eu;
                                          const ju = null !== (Eu = null === lu || void 0 === lu ? void 0 : lu.getParticleTextureUrl(uu)) && void 0 !== Eu ? Eu : null;
                                          return (0, Ou.jsx)("button", {
                                            type: "button",
                                            className: Zu()("DocsParticleTexture", {
                                              Active: fu.texture === uu
                                            }),
                                            title: uu,
                                            "aria-label": uu,
                                            "aria-pressed": fu.texture === uu,
                                            onClick: () => {
                                              Gu({
                                                texture: uu
                                              })
                                            },
                                            children: ju ? (0, Ou.jsx)("img", {
                                              src: ju,
                                              alt: ""
                                            }) : (0, Ou.jsx)(hu, {
                                              name: "image"
                                            })
                                          }, uu)
                                        }))
                                      })]
                                    }), (0, Ou.jsx)(EU, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: fu.manualEmitCount,
                                      onChange: uu => {
                                        Gu({
                                          manualEmitCount: uu
                                        })
                                      }
                                    }), (0, Ou.jsx)(uU, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: fu.minLifeTime,
                                      high: fu.maxLifeTime,
                                      onChange: (uu, Eu) => {
                                        Gu({
                                          minLifeTime: uu,
                                          maxLifeTime: Eu
                                        })
                                      }
                                    }), (0, Ou.jsx)(uU, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: fu.minEmitPower,
                                      high: fu.maxEmitPower,
                                      onChange: (uu, Eu) => {
                                        Gu({
                                          minEmitPower: uu,
                                          maxEmitPower: Eu
                                        })
                                      }
                                    }), (0, Ou.jsx)(uU, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: fu.minSize,
                                      high: fu.maxSize,
                                      onChange: (uu, Eu) => {
                                        Gu({
                                          minSize: uu,
                                          maxSize: Eu
                                        })
                                      }
                                    }), (0, Ou.jsx)(EU, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Uu = fu.gravity[1]) && void 0 !== Uu ? Uu : 0,
                                      onChange: uu => {
                                        var Eu, ju;
                                        Gu({
                                          gravity: [null !== (Eu = fu.gravity[0]) && void 0 !== Eu ? Eu : 0, uu, null !== (ju = fu.gravity[2]) && void 0 !== ju ? ju : 0]
                                        })
                                      }
                                    }), (0, Ou.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Ou.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, Ou.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, Ou.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: fu.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: uu => {
                                          Gu({
                                            blendMode: Number(uu.target.value)
                                          })
                                        },
                                        children: fU.map((uu => {
                                          let {
                                            mode: Eu,
                                            label: ju
                                          } = uu;
                                          return (0, Ou.jsx)("option", {
                                            value: Eu,
                                            children: ju
                                          }, Eu)
                                        }))
                                      })]
                                    }), (0, Ou.jsx)(jU, {
                                      opts: fu,
                                      onChange: uu => {
                                        Gu({
                                          colorGradients: uu
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, Ou.jsx)(wu, {
                                  code: pu,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var bU = ju(4653),
                            cU = ju(1964);

                          function NU(uu, Eu) {
                            return uu ? bU.c.includes(Eu) ? uu.getIngameIconUrl(Eu) : uu.getItemIconUrl(Eu) : null
                          }

                          function OU(uu) {
                            var Eu, ju, su;
                            let {
                              part: Uu,
                              assets: Xu
                            } = uu;
                            const lu = NU(Xu, Uu.icon),
                              qu = null !== (Eu = null === (ju = Uu.style) || void 0 === ju ? void 0 : ju.fontSize) && void 0 !== Eu ? Eu : "1.8em",
                              fu = (0, iE.Yb)(Uu.style);
                            return (0, Ou.jsxs)("span", {
                              className: Zu()("DocsBloxdTextIcon", {
                                Missing: !lu
                              }),
                              style: {
                                width: qu,
                                height: qu,
                                opacity: null === (su = Uu.style) || void 0 === su ? void 0 : su.opacity
                              },
                              title: lu ? void 0 : `No Bloxd icon, item or block is called "${Uu.icon}"`,
                              children: [lu && fu && (0, Ou.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: fu,
                                  maskImage: `url("${lu}")`,
                                  WebkitMaskImage: `url("${lu}")`
                                }
                              }), lu ? (0, Ou.jsx)("img", {
                                src: lu,
                                alt: "",
                                className: Zu()({
                                  Tinted: fu
                                })
                              }) : (0, Ou.jsx)(hu, {
                                name: "image"
                              })]
                            })
                          }

                          function YU(uu) {
                            let {
                              parts: Eu,
                              className: ju
                            } = uu;
                            const su = es(),
                              Uu = [];
                            let Xu = [];
                            const lu = uu => {
                              Xu.length > 0 && (Uu.push((0, Ou.jsx)(cU.d, {
                                text: Xu
                              }, `run-${uu}`)), Xu = [])
                            };
                            return Eu.forEach(((uu, Eu) => {
                              "icon" !== BE(uu) || SE(uu.icon) ? Xu.push(uu) : (lu(Eu), Uu.push((0, Ou.jsx)(OU, {
                                part: uu,
                                assets: su
                              }, `icon-${Eu}`)))
                            })), lu(Eu.length), (0, Ou.jsx)("div", {
                              className: Zu()("DocsStyledTextPreview", ju),
                              children: Uu
                            })
                          }
                          const hU = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let DU = null;

                          function gU(uu) {
                            if (DU ??= document.createElement("canvas").getContext("2d"), !DU) return "#000000";
                            DU.fillStyle = "#000000", DU.fillStyle = uu;
                            const Eu = DU.fillStyle;
                            return Eu.startsWith("#") ? Eu : "#000000"
                          }

                          function MU(uu) {
                            let {
                              value: Eu,
                              label: ju,
                              onChange: su
                            } = uu;
                            return (0, Ou.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, Ou.jsx)("input", {
                                type: "color",
                                value: gU(Eu),
                                "aria-label": `${ju} picker`,
                                onChange: uu => {
                                  su(uu.target.value)
                                }
                              }), (0, Ou.jsx)("input", {
                                type: "text",
                                value: Eu,
                                placeholder: "#ffb914 or gold",
                                "aria-label": ju,
                                spellCheck: !1,
                                onChange: uu => {
                                  su(uu.target.value)
                                }
                              })]
                            })
                          }

                          function eU(uu) {
                            let {
                              value: Eu,
                              fontAwesomeIcons: ju,
                              onChange: Uu
                            } = uu;
                            const Xu = es(),
                              [lu, qu] = (0, su.useState)(SE(Eu) ? "fontAwesome" : "bloxd"),
                              [fu, Cu] = (0, su.useState)(""),
                              bu = fu.trim().toLowerCase(),
                              cu = "bloxd" === lu ? bU.c : ju,
                              Nu = bu ? cu.filter((uu => uu.toLowerCase().includes(bu))) : cu;
                            return (0, Ou.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, Ou.jsx)("input", {
                                type: "text",
                                value: Eu,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: uu => {
                                  Uu(uu.target.value)
                                }
                              }), (0, Ou.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, Ou.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((uu => (0, Ou.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": lu === uu,
                                    className: Zu()("DocsVariantChip", {
                                      Active: lu === uu
                                    }),
                                    onClick: () => {
                                      qu(uu)
                                    },
                                    children: "bloxd" === uu ? `Bloxd icons (${bU.c.length})` : `Font Awesome (${ju.length})`
                                  }, uu))), (0, Ou.jsx)("input", {
                                    type: "search",
                                    value: fu,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: uu => {
                                      Cu(uu.target.value)
                                    }
                                  })
                                ]
                              }), (0, Ou.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Nu.map((uu => {
                                  const ju = "bloxd" === lu ? NU(Xu, uu) : null;
                                  return (0, Ou.jsx)("button", {
                                    type: "button",
                                    title: uu,
                                    "aria-label": uu,
                                    "aria-pressed": uu === Eu,
                                    className: Zu()("DocsIconPickerOption", {
                                      Active: uu === Eu
                                    }),
                                    onClick: () => {
                                      Uu(uu)
                                    },
                                    children: "fontAwesome" === lu ? (0, Ou.jsx)(ej.e, {
                                      name: uu
                                    }) : ju ? (0, Ou.jsx)("img", {
                                      src: ju,
                                      alt: ""
                                    }) : (0, Ou.jsx)(hu, {
                                      name: "image"
                                    })
                                  }, uu)
                                })), 0 === Nu.length && (0, Ou.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", fu, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function GU(uu) {
                            let {
                              property: Eu,
                              value: ju,
                              fontAwesomeIcons: su,
                              onChange: Uu
                            } = uu;
                            const {
                              field: Zu,
                              label: Xu
                            } = Eu, lu = uu => "" !== uu || Eu.isRequired ? uu : void 0;
                            switch (Zu.kind) {
                              case "text":
                                return Zu.multiline ? (0, Ou.jsx)("textarea", {
                                  value: String(null !== ju && void 0 !== ju ? ju : ""),
                                  rows: 2,
                                  "aria-label": Xu,
                                  onChange: uu => {
                                    Uu(uu.target.value)
                                  }
                                }) : (0, Ou.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ju && void 0 !== ju ? ju : ""),
                                  "aria-label": Xu,
                                  onChange: uu => {
                                    Uu(lu(uu.target.value))
                                  }
                                });
                              case "size":
                                return (0, Ou.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ju && void 0 !== ju ? ju : ""),
                                  placeholder: Eu.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Xu,
                                  spellCheck: !1,
                                  onChange: uu => {
                                    Uu(lu(uu.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, Ou.jsx)(MU, {
                                  value: String(null !== ju && void 0 !== ju ? ju : ""),
                                  label: Xu,
                                  onChange: uu => {
                                    Uu(lu(uu))
                                  }
                                });
                              case "colours": {
                                const uu = Array.isArray(ju) ? ju : [],
                                  Eu = uu => {
                                    Uu(uu.length > 0 ? uu : void 0)
                                  };
                                return (0, Ou.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [uu.map(((ju, su) => (0, Ou.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, Ou.jsx)(MU, {
                                      value: ju,
                                      label: `${Xu} ${su+1}`,
                                      onChange: ju => {
                                        Eu(uu.map(((uu, Eu) => Eu === su ? ju : uu)))
                                      }
                                    }), (0, Ou.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${su+1}`,
                                      onClick: () => {
                                        Eu(uu.filter(((uu, Eu) => Eu !== su)))
                                      },
                                      children: (0, Ou.jsx)(hu, {
                                        name: "cross"
                                      })
                                    })]
                                  }, su))), (0, Ou.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var ju;
                                      Eu([...uu, null !== (ju = uu.at(-1)) && void 0 !== ju ? ju : "#ffffff"])
                                    },
                                    children: [(0, Ou.jsx)(hu, {
                                      name: "plus"
                                    }), 0 === uu.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var qu;
                                const uu = "number" === typeof ju ? ju : Number(null !== (qu = Eu.defaultText) && void 0 !== qu ? qu : 0);
                                return (0, Ou.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, Ou.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: uu,
                                    "aria-label": Xu,
                                    onChange: uu => {
                                      Uu(Number(uu.target.value))
                                    }
                                  }), (0, Ou.jsx)("output", {
                                    children: uu.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, Ou.jsxs)("select", {
                                  value: String(null !== ju && void 0 !== ju ? ju : ""),
                                  "aria-label": Xu,
                                  onChange: uu => {
                                    Uu(lu(uu.target.value))
                                  },
                                  children: [!Eu.isRequired && (0, Ou.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", Eu.defaultText, ")"]
                                  }), Zu.options.map((uu => (0, Ou.jsx)("option", {
                                    value: uu,
                                    children: uu
                                  }, uu)))]
                                });
                              case "icon":
                                return (0, Ou.jsx)(eU, {
                                  value: String(null !== ju && void 0 !== ju ? ju : ""),
                                  fontAwesomeIcons: su,
                                  onChange: Uu
                                })
                            }
                          }

                          function pU(uu) {
                            let Eu;
                            try {
                              Eu = JSON.parse(uu)
                            } catch (ju) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${ju.message}`
                              }
                            }
                            return jj(Eu) ? {
                              part: Eu,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function wU(uu) {
                            let {
                              parts: Eu,
                              index: ju,
                              fontAwesomeIcons: Uu,
                              onChange: Zu,
                              jK: Xu,
                              onClose: lu
                            } = uu;
                            const qu = (0, su.useContext)(OE),
                              Cu = (0, su.useRef)(null),
                              bu = Eu[ju],
                              cu = BE(bu),
                              [Nu, Yu] = (0, su.useState)((() => JSON.stringify(bu, null, 2))),
                              Du = (0, su.useMemo)((() => "other" === cu ? pU(Nu).error : null), [cu, Nu]);
                            (0, su.useEffect)((() => {
                              var uu;
                              null === (uu = Cu.current) || void 0 === uu || uu.focus()
                            }), []);
                            const gu = (0, Ou.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: uu => {
                                uu.target === uu.currentTarget && lu()
                              },
                              children: (0, Ou.jsxs)("div", {
                                ref: Cu,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${ju+1}: ${IE[cu]}`,
                                tabIndex: -1,
                                onKeyDown: uu => {
                                  "Escape" === uu.key ? (uu.stopPropagation(), lu()) : "Tab" === uu.key && Cu.current && function(uu, Eu) {
                                    const ju = Array.from(uu.querySelectorAll(oE)),
                                      su = ju[0],
                                      Uu = ju.at(-1);
                                    if (!su || !Uu) return;
                                    const Zu = document.activeElement;
                                    !Eu.shiftKey || Zu !== su && Zu !== uu ? Eu.shiftKey || Zu !== Uu || (Eu.preventDefault(), su.focus()) : (Eu.preventDefault(), Uu.focus())
                                  }(Cu.current, uu)
                                },
                                children: [(0, Ou.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, Ou.jsxs)("div", {
                                    children: [(0, Ou.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", ju + 1]
                                    }), (0, Ou.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: IE[cu]
                                    })]
                                  }), (0, Ou.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: lu,
                                    children: (0, Ou.jsx)(hu, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, Ou.jsx)(YU, {
                                  parts: Eu,
                                  className: "DocsTextDialogPreview"
                                }), (0, Ou.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === cu ? (0, Ou.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, Ou.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, Ou.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Nu,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: uu => {
                                        Yu(uu.target.value);
                                        const Eu = pU(uu.target.value);
                                        null !== Eu.part && Zu(Eu.part)
                                      }
                                    }), Du && (0, Ou.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: Du
                                    })]
                                  }) : tE[cu].map((uu => {
                                    const Eu = TE(bu, uu.path),
                                      ju = uu.isRequired ? JSON.stringify(AE(bu, uu.path)) === JSON.stringify(bu) : void 0 === Eu;
                                    return (0, Ou.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, Ou.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, Ou.jsx)("span", {
                                          children: uu.label
                                        }), (0, Ou.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: ju,
                                          "aria-label": `Reset ${uu.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Zu(AE(bu, uu.path))
                                          },
                                          children: [(0, Ou.jsx)(hu, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, Ou.jsx)(GU, {
                                        property: uu,
                                        value: Eu,
                                        fontAwesomeIcons: Uu,
                                        onChange: Eu => {
                                          Zu(HE(bu, uu.path, Eu))
                                        }
                                      }), !uu.isRequired && (0, Ou.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", uu.defaultText]
                                      })]
                                    }, uu.path.join("."))
                                  }))
                                }), (0, Ou.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, Ou.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Xu,
                                    children: [(0, Ou.jsx)(hu, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, Ou.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: lu,
                                    children: "Done"
                                  })]
                                }), (0, Ou.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: hU.map((uu => (0, Ou.jsx)("option", {
                                    value: uu
                                  }, uu)))
                                })]
                              })
                            });
                            return qu ? (0, fu.createPortal)(gu, qu) : gu
                          }
                          const JU = [{
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
                            dU = Object.keys(FE);

                          function aU(uu) {
                            let {
                              fontAwesomeIcons: Eu
                            } = uu;
                            const [ju, Uu] = (0, su.useState)(JU[0].parts), [Xu, lu] = (0, su.useState)((() => RE(JU[0].parts))), [qu, fu] = (0, su.useState)(null), [Cu, bu] = (0, su.useState)(!1), [cu, Nu] = (0, su.useState)(null), [Yu, Du] = (0, su.useState)(!1), [gu, Mu] = (0, su.useState)(null), eu = (0, su.useRef)(null), Gu = RE(ju);
                            (0, su.useLayoutEffect)((() => {
                              var uu;
                              if (!gu) return;
                              const Eu = uu => {
                                  var Eu;
                                  return null === (Eu = eu.current) || void 0 === Eu ? void 0 : Eu.querySelector(`[data-focus-key="${uu}"]`)
                                },
                                ju = Eu(gu.key);
                              null === (uu = ju && !ju.disabled ? ju : Eu(gu.fallback)) || void 0 === uu || uu.focus(), Mu(null)
                            }), [gu]);
                            const pu = uu => {
                                Uu(uu), lu(RE(uu)), fu(null)
                              },
                              Ju = uu => {
                                pu(ju.filter(((Eu, ju) => ju !== uu))), Mu({
                                  key: `edit-${Math.min(uu,ju.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              du = (uu, Eu) => {
                                const su = [...ju],
                                  [Uu] = su.splice(uu, 1);
                                su.splice(uu + Eu, 0, Uu), pu(su);
                                Mu({
                                  key: `${Eu<0?"up":"down"}-${uu+Eu}`,
                                  fallback: `edit-${uu+Eu}`
                                })
                              };
                            return (0, Ou.jsxs)("section", {
                              ref: eu,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, Ou.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, Ou.jsxs)("div", {
                                  children: [(0, Ou.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, Ou.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, Ou.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: JU.map((uu => (0, Ou.jsx)("button", {
                                  type: "button",
                                  className: Zu()("DocsVariantChip", {
                                    Active: Gu === RE(uu.parts)
                                  }),
                                  onClick: () => {
                                    pu(uu.parts)
                                  },
                                  children: uu.label
                                }, uu.label)))
                              }), (0, Ou.jsx)(YU, {
                                parts: ju,
                                className: "DocsTextEditorPreview"
                              }), (0, Ou.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, Ou.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Ou.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, Ou.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [ju.map(((uu, Eu) => {
                                      const su = BE(uu);
                                      return (0, Ou.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, Ou.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${Eu}`,
                                          "aria-label": `Edit part ${Eu+1}, ${IE[su]}`,
                                          onClick: () => {
                                            Nu(Eu)
                                          },
                                          children: [(0, Ou.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: IE[su]
                                          }), (0, Ou.jsx)(YU, {
                                            parts: [uu],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== su && (0, Ou.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: nE(uu)
                                          })]
                                        }), (0, Ou.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, Ou.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Eu+1} up`,
                                            "data-focus-key": `up-${Eu}`,
                                            disabled: 0 === Eu,
                                            onClick: () => {
                                              du(Eu, -1)
                                            },
                                            children: (0, Ou.jsx)(hu, {
                                              name: "chevron-up"
                                            })
                                          }), (0, Ou.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Eu+1} down`,
                                            "data-focus-key": `down-${Eu}`,
                                            disabled: Eu === ju.length - 1,
                                            onClick: () => {
                                              du(Eu, 1)
                                            },
                                            children: (0, Ou.jsx)(hu, {
                                              name: "chevron-down"
                                            })
                                          }), (0, Ou.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${Eu+1}`,
                                            onClick: () => {
                                              Ju(Eu)
                                            },
                                            children: (0, Ou.jsx)(hu, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, Eu)
                                    })), 0 === ju.length && (0, Ou.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, Ou.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: uu => {
                                      "Escape" === uu.key && Yu && (uu.stopPropagation(), Du(!1), Mu({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, Ou.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Yu,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        Du(!Yu)
                                      },
                                      children: [(0, Ou.jsx)(hu, {
                                        name: "plus"
                                      }), "Add a part", (0, Ou.jsx)(hu, {
                                        name: Yu ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Yu && (0, Ou.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: dU.map((uu => (0, Ou.jsx)("li", {
                                        children: (0, Ou.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (uu => {
                                              pu([...ju, FE[uu]]), Du(!1), Nu(ju.length)
                                            })(uu)
                                          },
                                          children: IE[uu]
                                        })
                                      }, uu)))
                                    })]
                                  })]
                                }), (0, Ou.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Ou.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, Ou.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Cu,
                                      onClick: () => {
                                        bu(!Cu)
                                      },
                                      children: [(0, Ou.jsx)(hu, {
                                        name: Cu ? "check" : "pencil"
                                      }), Cu ? "Done" : "Edit"]
                                    })]
                                  }), Cu ? (0, Ou.jsxs)(Ou.Fragment, {
                                    children: [(0, Ou.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Xu,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: uu => {
                                        lu(uu.target.value);
                                        const Eu = sj(uu.target.value);
                                        fu(Eu.error), Eu.parts && Uu(Eu.parts)
                                      }
                                    }), qu && (0, Ou.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: qu
                                    })]
                                  }) : (0, Ou.jsx)(wu, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Gu})`
                                  })]
                                })]
                              }), null !== cu && cu < ju.length && (0, Ou.jsx)(wU, {
                                parts: ju,
                                index: cu,
                                fontAwesomeIcons: Eu,
                                onChange: uu => {
                                  ((uu, Eu) => {
                                    pu(ju.map(((ju, su) => su === uu ? Eu : ju)))
                                  })(cu, uu)
                                },
                                jK: () => {
                                  Ju(cu), Nu(null)
                                },
                                onClose: () => {
                                  Nu(null), Mu({
                                    key: `edit-${cu}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var PU = ju(5011),
                            oU = ju(4997),
                            kU = ju(5003),
                            mU = ju(5019);
                          const vU = 40,
                            KU = 800,
                            VU = 150,
                            rU = 8e3,
                            QU = 2e3;

                          function iU(uu, Eu) {
                            return 12 * Math.log2(Eu / uu)
                          }

                          function WU(uu, Eu) {
                            return Math.round(uu * 2 ** (Eu / 12) * 10) / 10
                          }

                          function SU(uu) {
                            return `${uu} ms`
                          }

                          function IU(uu) {
                            return `${uu} st`
                          }
                          const FU = [{
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

                          function BU(uu) {
                            let {
                              synth: Eu,
                              onChange: ju
                            } = uu;
                            const su = (0, PU.l)(Eu);
                            return (0, Ou.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, Ou.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Ou.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, Ou.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, Ou.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, Ou.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, Ou.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: PU.h.map((uu => (0, Ou.jsx)("button", {
                                      type: "button",
                                      className: Zu()("DocsVariantChip", {
                                        Active: Eu.waveform === uu
                                      }),
                                      "aria-pressed": Eu.waveform === uu,
                                      onClick: () => {
                                        ju({
                                          waveform: uu
                                        })
                                      },
                                      children: uu
                                    }, uu)))
                                  })]
                                }), (0, Ou.jsx)(EU, {
                                  label: "Pitch",
                                  min: 0,
                                  max: iU(vU, KU),
                                  step: .1,
                                  value: iU(vU, Eu.pitchHz),
                                  format: () => `${Eu.pitchHz} Hz`,
                                  onChange: uu => {
                                    ju({
                                      pitchHz: WU(vU, uu)
                                    })
                                  }
                                }), (0, Ou.jsx)(EU, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: Eu.syllableMs,
                                  format: SU,
                                  onChange: uu => {
                                    ju({
                                      syllableMs: uu
                                    })
                                  }
                                }), (0, Ou.jsx)(EU, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: Eu.volume,
                                  onChange: uu => {
                                    ju({
                                      volume: uu
                                    })
                                  }
                                })]
                              }), (0, Ou.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Ou.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, Ou.jsx)(EU, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: Eu.durationMs,
                                  format: SU,
                                  onChange: uu => {
                                    ju({
                                      durationMs: uu
                                    })
                                  }
                                }), (0, Ou.jsx)(EU, {
                                  label: "Fade in",
                                  min: 0,
                                  max: su.durationMs,
                                  step: 1,
                                  value: su.attackMs,
                                  format: SU,
                                  onChange: uu => {
                                    ju({
                                      attackMs: uu
                                    })
                                  }
                                }), (0, Ou.jsx)(EU, {
                                  label: "Fade out",
                                  min: 0,
                                  max: su.durationMs - su.attackMs,
                                  step: 1,
                                  value: su.releaseMs,
                                  format: SU,
                                  onChange: uu => {
                                    ju({
                                      releaseMs: uu
                                    })
                                  }
                                }), (0, Ou.jsx)(EU, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: Eu.glideSemitones,
                                  format: IU,
                                  onChange: uu => {
                                    ju({
                                      glideSemitones: uu
                                    })
                                  }
                                }), (0, Ou.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, Ou.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== Eu.lowpassHz,
                                    onChange: uu => {
                                      ju({
                                        lowpassHz: uu.target.checked ? QU : null
                                      })
                                    }
                                  }), (0, Ou.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== Eu.lowpassHz && (0, Ou.jsx)(EU, {
                                  label: "Filter",
                                  min: 0,
                                  max: iU(VU, rU),
                                  step: .1,
                                  value: iU(VU, Eu.lowpassHz),
                                  format: () => `${Eu.lowpassHz} Hz`,
                                  onChange: uu => {
                                    ju({
                                      lowpassHz: WU(VU, uu)
                                    })
                                  }
                                })]
                              }), (0, Ou.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Ou.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), FU.map((uu => {
                                  let {
                                    key: su,
                                    label: Uu,
                                    max: Zu
                                  } = uu;
                                  return (0, Ou.jsx)(EU, {
                                    label: Uu,
                                    min: 0,
                                    max: Zu,
                                    step: .1,
                                    value: Eu.intonation[su],
                                    format: IU,
                                    onChange: uu => {
                                      ju({
                                        intonation: {
                                          ...Eu.intonation,
                                          [su]: uu
                                        }
                                      })
                                    }
                                  }, su)
                                }))]
                              })]
                            })
                          }
                          const LU = Object.keys(PU.j),
                            tU = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function xU(uu) {
                            var Eu;
                            const ju = JSON.stringify((0, PU.l)(uu));
                            return null !== (Eu = LU.find((uu => JSON.stringify((0, PU.l)(PU.j[uu])) === ju))) && void 0 !== Eu ? Eu : null
                          }

                          function TU(uu) {
                            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof uu || null === uu) return JSON.stringify(uu);
                            return `{\n${Object.entries(uu).map((uu=>{let[ju,su]=uu;return`${Eu}    ${ju}: ${TU(su,`${Eu}    `)},`})).join("\n")}\n${Eu}}`
                          }

                          function HU(uu, Eu, ju) {
                            const su = xU(uu),
                              Uu = [`    line: ${JSON.stringify(Eu)},`];
                            return ju && Uu.push(`    speakerName: ${JSON.stringify(ju)},`), Uu.push("    voice,"), `const voice = ${su?JSON.stringify(su):TU((0,PU.l)(uu))}\n\napi.setClientOption(playerId, "dialogue", {\n${Uu.join("\n")}\n})`
                          }
                          const AU = 400,
                            nU = 90;
                          let yU = null;

                          function zU(uu, Eu, ju) {
                            return yU ??= new AudioContext, yU.resume(), (0, mU.c)(yU, yU.destination, uu, Eu, ju, (() => {}))
                          }

                          function RU() {
                            const [uu, Eu] = (0, su.useState)(PU.j.regular), [ju, Uu] = (0, su.useState)(tU[0]), [Xu, lu] = (0, su.useState)("Innkeeper"), [qu, fu] = (0, su.useState)(0), Cu = bs((uu => uu.volume)), bu = (0, su.useRef)(null), cu = (0, su.useRef)(0), Nu = (0, su.useRef)(0), Yu = () => {
                              var uu;
                              null === (uu = bu.current) || void 0 === uu || uu.call(bu), bu.current = null
                            };
                            (0, su.useEffect)((() => () => {
                              var uu;
                              null === (uu = bu.current) || void 0 === uu || uu.call(bu), window.clearTimeout(cu.current)
                            }), []);
                            const Du = (0, su.useMemo)((() => ({
                                line: ju,
                                speakerName: Xu || void 0,
                                voice: uu
                              })), [ju, Xu, uu]),
                              gu = (0, su.useRef)(Du);
                            gu.current = Du;
                            const eu = xU(uu),
                              Gu = uu => {
                                window.clearTimeout(cu.current), Yu();
                                const {
                                  plan: Eu,
                                  synth: ju
                                } = (0, kU.i)(uu);
                                ju && (bu.current = zU(ju, Eu.blips, Cu)), fu((uu => uu + 1))
                              },
                              pu = HU(uu, ju, Xu);
                            return (0, Ou.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, Ou.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, Ou.jsxs)("div", {
                                  children: [(0, Ou.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, Ou.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, Ou.jsx)(Mu, {
                                  text: pu,
                                  label: "Copy code"
                                })]
                              }), (0, Ou.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [LU.map((uu => (0, Ou.jsx)("button", {
                                  type: "button",
                                  className: Zu()("DocsVariantChip", {
                                    Active: eu === uu
                                  }),
                                  "aria-pressed": eu === uu,
                                  onClick: () => {
                                    (uu => {
                                      const ju = PU.j[uu];
                                      Eu(ju), Gu({
                                        ...Du,
                                        voice: ju
                                      })
                                    })(uu)
                                  },
                                  children: uu
                                }, uu))), !eu && (0, Ou.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, Ou.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, Ou.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, Ou.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, Ou.jsx)(oU.b, {
                                      display: Du
                                    }, qu)
                                  }), (0, Ou.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: uu => {
                                      uu.preventDefault(), Gu(Du)
                                    },
                                    children: [(0, Ou.jsx)("input", {
                                      value: ju,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: uu => {
                                        Uu(uu.target.value)
                                      }
                                    }), (0, Ou.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, Ou.jsx)(hu, {
                                        name: "play"
                                      }), (0, Ou.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, Ou.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: tU.map((uu => (0, Ou.jsx)("button", {
                                      type: "button",
                                      className: Zu()("DocsVariantChip", {
                                        Active: ju === uu
                                      }),
                                      onClick: () => {
                                        var Eu;
                                        Uu(Eu = uu), Gu({
                                          ...Du,
                                          line: Eu
                                        })
                                      },
                                      children: uu
                                    }, uu)))
                                  }), (0, Ou.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, Ou.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, Ou.jsx)("input", {
                                      value: Xu,
                                      placeholder: "No name",
                                      onChange: uu => {
                                        lu(uu.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, Ou.jsx)(BU, {
                                  synth: uu,
                                  onChange: ju => {
                                    const su = {
                                      ...uu,
                                      ...ju
                                    };
                                    Eu(su);
                                    const Uu = {
                                        ...Du,
                                        voice: su
                                      },
                                      Zu = performance.now();
                                    if (Zu - Nu.current >= nU) {
                                      Nu.current = Zu, Yu();
                                      const uu = (0, kU.i)(Uu).plan.blips[0];
                                      uu && (bu.current = zU((0, PU.l)(su), [{
                                        ...uu,
                                        atMs: 0
                                      }], Cu))
                                    }
                                    window.clearTimeout(cu.current), cu.current = window.setTimeout((() => {
                                      Gu(gu.current)
                                    }), AU)
                                  }
                                })]
                              }), (0, Ou.jsx)(wu, {
                                code: pu,
                                lang: "ts"
                              })]
                            })
                          }
                          var uZ = ju(5041);
                          const EZ = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            jZ = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            sZ = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${jZ}`, "g"), uZ.j],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, uZ.j]
                            ];

                          function UZ(uu) {
                            return `${uu.pageId}#${uu.anchor}`
                          }
                          let ZZ, XZ, lZ;

                          function qZ(uu) {
                            const Eu = (0, Ju.j)(uu),
                              ju = new Set;
                            for (const [, , su] of Eu.matchAll(Ju.d)) {
                              const uu = su.startsWith("#") ? Bu(su) : null,
                                Eu = uu ? UZ({
                                  pageId: uu.page.id,
                                  anchor: uu.anchor
                                }) : null;
                              null !== Eu && (ZZ || (ZZ = new Set(Qu.flatMap((uu => ou(uu.layout) ? Iu(uu).sections.map((Eu => UZ({
                                pageId: uu.id,
                                anchor: Eu.heading.anchor
                              }))) : [])))), ZZ).has(Eu) && ju.add(Eu)
                            }
                            for (const [, , su] of Eu.matchAll(EZ)) {
                              const uu = cE(su);
                              uu && ju.add(UZ(uu))
                            }
                            return ju
                          }

                          function fZ(uu, Eu) {
                            const ju = new Set,
                              su = function(uu) {
                                return uu.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(uu);
                            for (const [, Uu] of su.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) ju.add(Uu);
                            for (const [Uu, Zu] of sZ)
                              for (const [, uu] of(0, uZ.e)(su, Uu, Zu)) Eu.has(uu) && ju.add(uu);
                            return ju
                          }

                          function CZ(uu, Eu, ju, su) {
                            const Uu = uu.get(Eu);
                            Uu ? !su && Uu.some((uu => uu.pageId === ju.pageId)) || Uu.push(ju) : uu.set(Eu, [ju])
                          }
                          const bZ = /^[A-Za-z_$][\w$]*$/;

                          function cZ(uu) {
                            return bZ.test(uu.name) ? uu.name : "options"
                          }

                          function NZ(uu, Eu) {
                            const ju = uu.params.map(cZ).join(", ");
                            return Eu ? `${uu.name} = (${ju}) => {\n\t\n}` : `api.${uu.name}(${ju})`
                          }

                          function OZ(uu) {
                            let {
                              method: Eu,
                              isCallback: ju
                            } = uu;
                            return (0, Ou.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, Ou.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [ju ? (0, Ou.jsxs)(Ou.Fragment, {
                                  children: [(0, Ou.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Eu.name
                                  }), (0, Ou.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, Ou.jsxs)(Ou.Fragment, {
                                  children: [(0, Ou.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, Ou.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Eu.name
                                  }), (0, Ou.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), Eu.params.map(((uu, ju) => (0, Ou.jsxs)(su.Fragment, {
                                  children: [ju > 0 && (0, Ou.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, Ou.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${Eu.name}-${cZ(uu)}`,
                                    children: uu.name
                                  })]
                                }, uu.name))), (0, Ou.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: ju ? ") => " : ")"
                                }), ju && !Eu.returns && (0, Ou.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), Eu.returns && Eu.returns.type && (0, Ou.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!ju && (0, Ou.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, Ou.jsx)(dE, {
                                  type: Eu.returns.type
                                })]
                              })]
                            })
                          }

                          function YZ(uu) {
                            let {
                              title: Eu,
                              references: ju
                            } = uu;
                            const Uu = (0, su.useContext)(NE);
                            return (0, Ou.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, Ou.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: Eu
                              }), ju.map((uu => (0, Ou.jsx)(Xu.c, {
                                to: tu(Uu, Wu(uu.pageId), uu.anchor),
                                children: uu.label
                              }, `${uu.pageId}#${uu.anchor}`)))]
                            })
                          }

                          function hZ(uu) {
                            var Eu, ju;
                            let {
                              pageId: su,
                              anchor: Uu
                            } = uu;
                            const Zu = UZ({
                                pageId: su,
                                anchor: Uu
                              }),
                              Xu = null !== (Eu = function() {
                                if (!lZ) {
                                  lZ = new Map;
                                  const su = new Set(Qu.filter((uu => "callbacks" === uu.layout)).flatMap((uu => Iu(uu).sections.map((uu => uu.heading.text)))));
                                  for (const Uu of Qu)
                                    if ("article" === Uu.layout || "snippets" === Uu.layout)
                                      for (const Zu of (0, Ju.y)(Iu(Uu)))
                                        for (const {
                                            code: Xu
                                          }
                                          of(0, Ju.l)(Zu.blocks))
                                          for (const lu of fZ(Xu, su)) {
                                            const su = bE().get(lu);
                                            if (su) {
                                              var uu, Eu, ju;
                                              const Xu = {
                                                pageId: Uu.id,
                                                anchor: null !== (uu = null === (Eu = Zu.heading) || void 0 === Eu ? void 0 : Eu.anchor) && void 0 !== uu ? uu : "",
                                                label: null !== (ju = Uu.navTitle) && void 0 !== ju ? ju : Uu.title
                                              };
                                              CZ(lZ, UZ(su), Xu, !1)
                                            }
                                          }
                                }
                                return lZ
                              }().get(Zu)) && void 0 !== Eu ? Eu : [],
                              lu = null !== (ju = function() {
                                if (!XZ) {
                                  XZ = new Map;
                                  const uu = Wu("changelog");
                                  for (const Eu of Iu(uu).sections) {
                                    const ju = new Set(Eu.blocks.flatMap((uu => [...qZ(uu)])));
                                    for (const su of ju) {
                                      const ju = {
                                        pageId: uu.id,
                                        anchor: Eu.heading.anchor,
                                        label: Eu.heading.text
                                      };
                                      CZ(XZ, su, ju, !0)
                                    }
                                  }
                                }
                                return XZ
                              }().get(Zu)) && void 0 !== ju ? ju : [];
                            return 0 === Xu.length && 0 === lu.length ? null : (0, Ou.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Xu.length > 0 && (0, Ou.jsx)(YZ, {
                                title: "Used in",
                                references: Xu
                              }), lu.length > 0 && (0, Ou.jsx)(YZ, {
                                title: "Changelog",
                                references: lu
                              })]
                            })
                          }

                          function DZ(uu) {
                            let {
                              method: Eu,
                              pageId: ju,
                              anchor: su,
                              isCallback: Uu
                            } = uu;
                            const Zu = Uu ? void 0 : lE().get(Eu.name),
                              Xu = Eu.description.length > 0 || null === Zu || void 0 === Zu || !Zu.description ? Eu.description : (0, Ju.B)(Zu.description);
                            return (0, Ou.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, Ou.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Ou.jsx)(fj, {
                                  level: 2,
                                  text: Eu.name,
                                  anchor: su,
                                  className: "DocsCardTitle"
                                }), (0, Ou.jsx)(Mu, {
                                  text: NZ(Eu, Uu),
                                  label: Uu ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Ou.jsx)(OZ, {
                                method: Eu,
                                isCallback: Uu
                              }), Zu && null !== Zu.deprecation && (0, Ou.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, Ou.jsx)("strong", {
                                  children: "Deprecated"
                                }), Zu.deprecation && (0, Ou.jsxs)(Ou.Fragment, {
                                  children: [": ", (0, Ou.jsx)(pE, {
                                    text: (lu = Zu.deprecation, (0, uZ.u)(lu, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, uZ.i)("`\\w"), (uu => {
                                      let [Eu] = uu;
                                      return bE().has(Eu) ? `\`${Eu}\`` : Eu
                                    })))
                                  })]
                                })]
                              }), Xu.length > 0 && (0, Ou.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Ou.jsx)(Nj, {
                                  blocks: Xu
                                })
                              }), Eu.params.length > 0 && (0, Ou.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Ou.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, Ou.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: Eu.params.map((uu => (0, Ou.jsxs)("div", {
                                    id: `${Eu.name}-${cZ(uu)}`,
                                    className: "DocsParam",
                                    children: [(0, Ou.jsxs)("dt", {
                                      children: [(0, Ou.jsx)("code", {
                                        className: "DocsParamName",
                                        children: uu.name
                                      }), (0, Ou.jsx)(dE, {
                                        type: uu.type
                                      })]
                                    }), uu.description && (0, Ou.jsx)("dd", {
                                      children: (0, Ou.jsx)(pE, {
                                        text: uu.description
                                      })
                                    })]
                                  }, uu.name)))
                                })]
                              }), Eu.returns && (Eu.returns.type || Eu.returns.description.length > 0) && (0, Ou.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Ou.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, Ou.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [Eu.returns.type && (0, Ou.jsx)(dE, {
                                    type: Eu.returns.type
                                  }), Eu.returns.description.length > 0 && (0, Ou.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, Ou.jsx)(Nj, {
                                      blocks: Eu.returns.description
                                    })
                                  })]
                                })]
                              }), (0, Ou.jsx)(hZ, {
                                pageId: ju,
                                anchor: su
                              })]
                            });
                            var lu
                          }

                          function gZ(uu) {
                            var Eu;
                            return null !== uu.defaultValue && "undefined" !== uu.defaultValue ? uu.defaultValue : null !== (Eu = uu.example) && void 0 !== Eu ? Eu : "value"
                          }

                          function MZ(uu) {
                            let {
                              setting: Eu,
                              pageId: ju,
                              anchor: su,
                              setterSnippet: Uu
                            } = uu;
                            const Zu = null === Eu.defaultValue ? null : DE(Eu.defaultValue);
                            return (0, Ou.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, Ou.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Ou.jsx)(fj, {
                                  level: 2,
                                  text: Eu.name,
                                  anchor: su,
                                  className: "DocsCardTitle"
                                }), (0, Ou.jsx)(Mu, {
                                  text: Uu(Eu.name, gZ(Eu)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Ou.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, Ou.jsxs)("div", {
                                  children: [(0, Ou.jsx)("dt", {
                                    children: "Type"
                                  }), (0, Ou.jsx)("dd", {
                                    children: (0, Ou.jsx)(dE, {
                                      type: Eu.type
                                    })
                                  })]
                                }), null !== Eu.defaultValue && (0, Ou.jsxs)("div", {
                                  children: [(0, Ou.jsx)("dt", {
                                    children: "Default"
                                  }), (0, Ou.jsx)("dd", {
                                    children: (0, Ou.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Zu && (0, Ou.jsx)(gE, {
                                        colour: Zu
                                      }), Eu.defaultValue]
                                    })
                                  })]
                                }), null !== Eu.example && (0, Ou.jsxs)("div", {
                                  children: [(0, Ou.jsx)("dt", {
                                    children: "Example"
                                  }), (0, Ou.jsx)("dd", {
                                    children: (0, Ou.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: Eu.example
                                    })
                                  })]
                                })]
                              }), Eu.description.length > 0 && (0, Ou.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Ou.jsx)(Nj, {
                                  blocks: Eu.description
                                })
                              }), (0, Ou.jsx)(hZ, {
                                pageId: ju,
                                anchor: su
                              })]
                            })
                          }

                          function eZ(uu) {
                            let {
                              section: Eu
                            } = uu;
                            return (0, Ou.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, Ou.jsx)(fj, {
                                level: 2,
                                text: Eu.heading.text,
                                anchor: Eu.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, Ou.jsx)("div", {
                                className: "DocsProse",
                                children: (0, Ou.jsx)(Nj, {
                                  blocks: Eu.blocks
                                })
                              })]
                            })
                          }

                          function GZ(uu) {
                            let {
                              section: Eu
                            } = uu;
                            return (0, Ou.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Ou.jsx)(fj, {
                                level: Eu.heading.level,
                                text: Eu.heading.text,
                                anchor: Eu.heading.anchor
                              }), (0, Ou.jsx)(Nj, {
                                blocks: Eu.blocks
                              })]
                            })
                          }
                          const pZ = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function wZ(uu) {
                            let {
                              page: Eu,
                              section: ju
                            } = uu;
                            if ("methods" === Eu.layout || "callbacks" === Eu.layout) return (0, Ou.jsx)(DZ, {
                              method: wj(ju),
                              pageId: Eu.id,
                              anchor: ju.heading.anchor,
                              isCallback: "callbacks" === Eu.layout
                            });
                            if ("settings" === Eu.layout) {
                              const uu = function(uu) {
                                const Eu = {
                                  name: uu.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const su of uu.blocks) {
                                  var ju;
                                  if (pj(su)) continue;
                                  const uu = "paragraph" === su.kind ? su.text.match(Jj) : null;
                                  if (!uu) {
                                    Eu.description.push(su);
                                    continue
                                  }
                                  const Uu = null !== (ju = Gj(uu[2])) && void 0 !== ju ? ju : uu[2];
                                  "Type" === uu[1] ? Eu.type = Uu : "Default" === uu[1] ? Eu.defaultValue = Uu : "" !== Uu && (Eu.example = Uu)
                                }
                                return Eu.type ? Eu : null
                              }(ju);
                              if (uu) return (0, Ou.jsx)(MZ, {
                                setting: uu,
                                pageId: Eu.id,
                                anchor: ju.heading.anchor,
                                setterSnippet: Eu.setterSnippet
                              })
                            }
                            return "snippets" === Eu.layout ? (0, Ou.jsx)(eZ, {
                              section: ju
                            }) : "changelog" === Eu.layout ? (0, Ou.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, Ou.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, Ou.jsx)(fj, {
                                  level: 2,
                                  text: ju.heading.text,
                                  anchor: ju.heading.anchor
                                })
                              }), (0, Ou.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, Ou.jsx)(Nj, {
                                  blocks: dj(ju.blocks)
                                })
                              })]
                            }) : Eu.gallery ? (0, Ou.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Ou.jsx)(fj, {
                                level: ju.heading.level,
                                text: ju.heading.text,
                                anchor: ju.heading.anchor
                              }), (0, Ou.jsx)(os, {
                                kind: Eu.gallery,
                                content: Iu(Eu),
                                blocks: ju.blocks
                              })]
                            }) : (0, Ou.jsx)(GZ, {
                              section: ju
                            })
                          }

                          function JZ(uu) {
                            let {
                              page: Eu,
                              onTocChange: ju
                            } = uu;
                            const Uu = Iu(Eu),
                              [Zu, Xu] = (0, su.useState)(""),
                              lu = "article" !== Eu.layout,
                              qu = hj(Eu.gallery) ? Eu.gallery : null,
                              fu = null !== qu,
                              Cu = Zu.trim().toLowerCase(),
                              bu = (0, su.useRef)(null),
                              cu = (0, su.useCallback)((uu => {
                                var Eu;
                                null === (Eu = bu.current) || void 0 === Eu || Eu.preview(uu)
                              }), []),
                              Nu = (0, su.useMemo)((() => {
                                if (!Eu.hasParticlePlayground) return [];
                                const uu = kj(Uu.intro).find((uu => "names" === uu.kind && !uu.names.some((uu => null !== Sj(uu.name)))));
                                return "names" === (null === uu || void 0 === uu ? void 0 : uu.kind) ? uu.names.map((uu => uu.name)) : []
                              }), [Eu, Uu]),
                              Yu = (0, su.useMemo)((() => {
                                if (!Eu.hasTextPlayground) return [];
                                const uu = Uu.sections.flatMap((uu => uu.blocks.flatMap((uu => {
                                  var Eu;
                                  return (null !== (Eu = oj(uu)) && void 0 !== Eu ? Eu : []).flatMap((uu => SE(uu.name) ? [uu.name] : []))
                                }))));
                                return [...new Set(uu)]
                              }), [Eu, Uu]),
                              hu = (0, su.useMemo)((() => Cu ? Uu.sections.filter((uu => function(uu, Eu) {
                                return !!uu.heading.text.toLowerCase().includes(Eu) || uu.blocks.some((uu => (0, Ju.j)(uu).toLowerCase().includes(Eu)))
                              }(uu, Cu))) : Uu.sections), [Uu, Cu]),
                              Du = (0, su.useMemo)((() => function(uu, Eu) {
                                return "article" !== uu.layout ? Eu.map((uu => ({
                                  anchor: uu.heading.anchor,
                                  text: uu.heading.text,
                                  level: 2
                                }))) : Eu.flatMap((uu => {
                                  const Eu = uu.blocks.flatMap((uu => "heading" === uu.kind && 3 === uu.level ? [{
                                    anchor: uu.anchor,
                                    text: uu.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: uu.heading.anchor,
                                    text: uu.heading.text,
                                    level: 2
                                  }, ...Eu]
                                }))
                              }(Eu, hu)), [Eu, hu]);
                            return (0, su.useEffect)((() => {
                              ju(Du)
                            }), [Du, ju]), (0, Ou.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, Ou.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, Ou.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Uu.title || Eu.title
                                }), (0, Ou.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: Eu.summary
                                }), (0, Ou.jsx)(ys, {
                                  page: Eu
                                }), lu && (0, Ou.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, Ou.jsxs)("span", {
                                    children: [(0, Ou.jsx)("strong", {
                                      children: Uu.sections.length
                                    }), " ", pZ[Eu.layout]]
                                  })
                                })]
                              }), "" === Eu.slug && (0, Ou.jsx)(ms, {}), qu && (0, Ou.jsx)(rs, {
                                kind: qu
                              }, qu), Eu.hasParticlePlayground && (0, Ou.jsx)(CU, {
                                ref: bu,
                                textures: Nu
                              }), !fu && Uu.intro.length > 0 && (0, Ou.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: Eu.gallery ? (0, Ou.jsx)(gs.Provider, {
                                  value: Eu.hasParticlePlayground ? cu : null,
                                  children: (0, Ou.jsx)(os, {
                                    kind: Eu.gallery,
                                    content: Uu,
                                    blocks: Uu.intro
                                  })
                                }) : (0, Ou.jsx)(Nj, {
                                  blocks: dj(Uu.intro)
                                })
                              }), Eu.hasTextPlayground && (0, Ou.jsx)(aU, {
                                fontAwesomeIcons: Yu
                              }), Eu.hasVoicePlayground && (0, Ou.jsx)(RU, {}), Eu.childPageIds && (0, Ou.jsx)(ms, {
                                cards: Eu.childPageIds.map((uu => ({
                                  pageId: uu
                                }))),
                                label: Eu.title
                              }), lu && (0, Ou.jsx)(Mj, {
                                className: "DocsFilterBar",
                                value: Zu,
                                placeholder: `Filter ${Uu.sections.length} ${pZ[Eu.layout]}\u2026`,
                                label: `Filter ${pZ[Eu.layout]}`,
                                onChange: Xu,
                                count: Cu ? {
                                  visible: hu.length,
                                  total: Uu.sections.length
                                } : null
                              }), !fu && (0, Ou.jsxs)("div", {
                                className: `DocsSections Layout-${Eu.layout}`,
                                children: [hu.map((uu => (0, Ou.jsx)(wZ, {
                                  page: Eu,
                                  section: uu
                                }, uu.heading.anchor))), 0 === hu.length && (0, Ou.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", pZ[Eu.layout], " match \u201c", Zu, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const dZ = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function aZ(uu) {
                            let {
                              entry: Eu,
                              isActive: ju,
                              onNavigate: su,
                              label: Uu,
                              children: Xu
                            } = uu;
                            return (0, Ou.jsx)("a", {
                              href: `#${Eu.anchor}`,
                              "aria-label": Uu,
                              className: Zu()(`Level${Eu.level}`, {
                                Active: ju
                              }),
                              "aria-current": ju ? "location" : void 0,
                              onClick: uu => {
                                uu.preventDefault(), su(Eu.anchor)
                              },
                              children: Xu
                            })
                          }

                          function PZ(uu) {
                            let {
                              toc: Eu,
                              activeAnchor: ju,
                              onNavigate: Uu
                            } = uu;
                            const Xu = Math.max(0, Eu.findIndex((uu => uu.anchor === ju))),
                              lu = (0, su.useRef)(null),
                              qu = (0, su.useRef)(!1);
                            (0, su.useEffect)((() => {
                              var uu, ju;
                              const su = null === (uu = lu.current) || void 0 === uu ? void 0 : uu.closest(".DocsToc"),
                                Uu = null === (ju = lu.current) || void 0 === ju ? void 0 : ju.querySelector(".DocsTimelineNotch.Active");
                              if (!su || !Uu) return;
                              let Zu = 0;
                              if (Xu === Eu.length - 1) Zu = su.scrollHeight;
                              else if (Xu > 0) {
                                const uu = su.getBoundingClientRect(),
                                  Eu = Uu.getBoundingClientRect();
                                Zu = su.scrollTop + Eu.top + Eu.height / 2 - (uu.top + su.clientHeight / 2)
                              }
                              su.scrollTo({
                                top: Zu,
                                behavior: qu.current ? "smooth" : "auto"
                              }), qu.current = !0
                            }), [Xu, Eu.length]);
                            const fu = [];
                            return Eu.forEach(((uu, Eu) => {
                              var ju, su, Uu;
                              const Zu = function(uu) {
                                  const Eu = uu.trim().match(dZ);
                                  return Eu ? {
                                    day: Eu[1],
                                    month: `${Eu[2]} ${Eu[3]}`
                                  } : null
                                }(uu.text),
                                Xu = null !== (ju = null === Zu || void 0 === Zu ? void 0 : Zu.month) && void 0 !== ju ? ju : null;
                              null !== Xu && (null === (su = fu.at(-1)) || void 0 === su ? void 0 : su.month) === Xu || fu.push({
                                month: Xu,
                                entries: []
                              }), fu.at(-1).entries.push({
                                entry: uu,
                                day: null !== (Uu = null === Zu || void 0 === Zu ? void 0 : Zu.day) && void 0 !== Uu ? Uu : null,
                                index: Eu
                              })
                            })), (0, Ou.jsx)("ol", {
                              ref: lu,
                              className: "DocsTimeline",
                              children: fu.map((uu => {
                                let {
                                  month: Eu,
                                  entries: ju
                                } = uu;
                                return (0, Ou.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [Eu && (0, Ou.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: Eu
                                  }), (0, Ou.jsx)("ol", {
                                    children: ju.map((uu => {
                                      let {
                                        entry: Eu,
                                        day: ju,
                                        index: su
                                      } = uu;
                                      return (0, Ou.jsx)("li", {
                                        className: Zu()("DocsTimelineNotch", {
                                          Passed: su < Xu,
                                          Active: su === Xu
                                        }),
                                        children: (0, Ou.jsx)(aZ, {
                                          entry: Eu,
                                          isActive: su === Xu,
                                          onNavigate: Uu,
                                          label: Eu.text,
                                          children: (0, Ou.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== ju && void 0 !== ju ? ju : Eu.text
                                          })
                                        })
                                      }, Eu.anchor)
                                    }))
                                  })]
                                }, ju[0].entry.anchor)
                              }))
                            })
                          }

                          function oZ(uu) {
                            let {
                              isChangelog: Eu,
                              toc: ju,
                              activeAnchor: su,
                              onNavigate: Uu
                            } = uu;
                            return 0 === ju.length ? null : (0, Ou.jsxs)(Ou.Fragment, {
                              children: [(0, Ou.jsx)("div", {
                                className: "DocsTocTitle",
                                children: Eu ? "Updates" : "On this page"
                              }), Eu ? (0, Ou.jsx)(PZ, {
                                toc: ju,
                                activeAnchor: su,
                                onNavigate: Uu
                              }) : (0, Ou.jsx)("ul", {
                                children: ju.map((uu => (0, Ou.jsx)("li", {
                                  children: (0, Ou.jsx)(aZ, {
                                    entry: uu,
                                    isActive: uu.anchor === su,
                                    onNavigate: Uu,
                                    children: uu.text.replace(/`/g, "")
                                  })
                                }, uu.anchor)))
                              })]
                            })
                          }
                          const kZ = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            mZ = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            vZ = 20,
                            KZ = 10,
                            VZ = 40,
                            rZ = 120;
                          let QZ;

                          function iZ(uu) {
                            const Eu = uu.gallery;
                            if (!Eu) return [];
                            if (hj(Eu)) return function(uu) {
                              return gj(uu).entries.map((uu => uu.name))
                            }(Eu).map((ju => ({
                              page: uu,
                              anchor: vj(Eu, ju),
                              title: ju,
                              kind: mZ[Eu],
                              text: "",
                              listedUnder: uu.title
                            })));
                            const ju = Iu(uu);
                            return (0, Ju.y)(ju).flatMap((su => {
                              const Uu = su.heading ? `${uu.title} \u203a ${su.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : uu.title;
                              return Vj(Eu, ju, su.blocks).flatMap((ju => "names" !== ju.kind ? [] : ju.names.map((su => {
                                const Zu = ju.isSongs ? "Song" : mZ[Eu];
                                return {
                                  page: uu,
                                  anchor: su.anchor,
                                  title: su.name,
                                  kind: Zu,
                                  text: "",
                                  listedUnder: Uu
                                }
                              }))))
                            }))
                          }

                          function WZ(uu, Eu, ju) {
                            const su = uu.title.toLowerCase();
                            let Uu = 0;
                            if (su === Eu) Uu = 100;
                            else if (su.startsWith(Eu)) Uu = 80;
                            else if (su.includes(Eu)) Uu = 60;
                            else if (ju.every((uu => su.includes(uu)))) Uu = 45;
                            else {
                              if (!uu.text.toLowerCase().includes(Eu)) return 0;
                              Uu = 20
                            }
                            return Uu - Math.min(su.length / 10, 9) + ("Page" === uu.kind ? 8 : "Method" === uu.kind ? 3 : 0) - (uu.listedUnder ? vZ : 0)
                          }

                          function SZ(uu, Eu) {
                            const ju = uu.toLowerCase().indexOf(Eu),
                              su = Math.max(0, ju - rZ / 3);
                            return `${su>0?"\u2026":""}${uu.slice(su,su+rZ)}${su+rZ<uu.length?"\u2026":""}`
                          }

                          function IZ(uu) {
                            let {
                              text: Eu,
                              query: ju
                            } = uu;
                            const su = ju ? Eu.toLowerCase().indexOf(ju) : -1;
                            return -1 === su ? (0, Ou.jsx)(Ou.Fragment, {
                              children: Eu
                            }) : (0, Ou.jsxs)(Ou.Fragment, {
                              children: [Eu.slice(0, su), (0, Ou.jsx)("mark", {
                                children: Eu.slice(su, su + ju.length)
                              }), Eu.slice(su + ju.length)]
                            })
                          }

                          function FZ(uu) {
                            let {
                              basePath: Eu,
                              onClose: ju
                            } = uu;
                            const Uu = (0, lu.v)(),
                              [Xu, qu] = (0, su.useState)(""),
                              [fu, Cu] = (0, su.useState)(0),
                              bu = (0, su.useRef)(null),
                              cu = (0, su.useRef)(null),
                              Nu = Xu.trim().toLowerCase(),
                              Yu = (0, su.useMemo)((() => {
                                const uu = (QZ || (QZ = Qu.flatMap((uu => {
                                  const Eu = Iu(uu);
                                  return [{
                                    page: uu,
                                    anchor: "",
                                    title: uu.title,
                                    kind: "Page",
                                    text: uu.summary
                                  }, ...Eu.sections.flatMap((Eu => {
                                    const ju = Eu.blocks.filter((uu => "paragraph" === uu.kind)).map(Ju.j).join(" ").replace(/[`*]/g, ""),
                                      su = {
                                        page: uu,
                                        anchor: Eu.heading.anchor,
                                        title: Eu.heading.text.replace(/`/g, ""),
                                        kind: kZ[uu.layout],
                                        text: ju
                                      },
                                      Uu = Eu.blocks.flatMap((Eu => "article" === uu.layout && "heading" === Eu.kind && 3 === Eu.level ? [{
                                        page: uu,
                                        anchor: Eu.anchor,
                                        title: Eu.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: su.title
                                      }] : []));
                                    return [su, ...Uu]
                                  })), ...iZ(uu)]
                                }))), QZ);
                                if (!Nu) return uu.filter((uu => "Page" === uu.kind));
                                const Eu = Nu.split(/\s+/);
                                let ju = 0;
                                return uu.map((uu => ({
                                  entry: uu,
                                  score: WZ(uu, Nu, Eu)
                                }))).filter((uu => uu.score > 0)).sort(((uu, Eu) => Eu.score - uu.score)).filter((uu => !uu.entry.listedUnder || (ju++, ju <= KZ))).slice(0, VZ).map((uu => uu.entry))
                              }), [Nu]);
                            (0, su.useEffect)((() => {
                              Cu(0)
                            }), [Nu]), (0, su.useEffect)((() => {
                              const uu = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === uu || void 0 === uu || uu.focus()
                              }
                            }), []), (0, su.useEffect)((() => {
                              var uu, Eu;
                              null === (uu = bu.current) || void 0 === uu || null === (Eu = uu.querySelector(".Active")) || void 0 === Eu || Eu.scrollIntoView({
                                block: "nearest"
                              })
                            }), [fu]);
                            const Du = uu => {
                              Uu(tu(Eu, uu.page, uu.anchor)), ju()
                            };
                            return (0, Ou.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: uu => {
                                uu.target === uu.currentTarget && ju()
                              },
                              children: (0, Ou.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: uu => {
                                  uu.target !== cu.current && uu.preventDefault()
                                },
                                onKeyDown: uu => {
                                  if ("Escape" === uu.key) ju();
                                  else if ("Tab" === uu.key) {
                                    var Eu;
                                    uu.preventDefault(), null === (Eu = cu.current) || void 0 === Eu || Eu.focus()
                                  }
                                },
                                children: [(0, Ou.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, Ou.jsx)(hu, {
                                    name: "magnifying-glass"
                                  }), (0, Ou.jsx)("input", {
                                    ref: cu,
                                    autoFocus: !0,
                                    value: Xu,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Yu.length > 0 ? `DocsSearchResult-${fu}` : void 0,
                                    onChange: uu => {
                                      qu(uu.target.value)
                                    },
                                    onKeyDown: uu => {
                                      if ("ArrowDown" === uu.key || "ArrowUp" === uu.key) {
                                        uu.preventDefault();
                                        const Eu = "ArrowDown" === uu.key ? 1 : -1;
                                        Cu((fu + Eu + Yu.length) % Math.max(Yu.length, 1))
                                      } else "Enter" === uu.key && Yu[fu] && Du(Yu[fu])
                                    }
                                  }), (0, Ou.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, Ou.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: bu,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Nu && (0, Ou.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Yu.map(((uu, Eu) => {
                                    var ju;
                                    return (0, Ou.jsxs)("li", {
                                      id: `DocsSearchResult-${Eu}`,
                                      role: "option",
                                      "aria-selected": Eu === fu,
                                      className: Zu()("DocsSearchResult", {
                                        Active: Eu === fu
                                      }),
                                      onMouseMove: () => {
                                        Cu(Eu)
                                      },
                                      onClick: () => {
                                        Du(uu)
                                      },
                                      children: [(0, Ou.jsx)(hu, {
                                        name: uu.page.icon
                                      }), (0, Ou.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, Ou.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, Ou.jsx)(IZ, {
                                            text: uu.title,
                                            query: Nu
                                          })
                                        }), uu.text && (0, Ou.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, Ou.jsx)(IZ, {
                                            text: SZ(uu.text, Nu),
                                            query: Nu
                                          })
                                        })]
                                      }), (0, Ou.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === uu.kind ? "Page" : null !== (ju = uu.listedUnder) && void 0 !== ju ? ju : `${uu.kind} \xb7 ${uu.page.title}`
                                      })]
                                    }, `${uu.page.id}#${uu.anchor}`)
                                  })), Nu && 0 === Yu.length && (0, Ou.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Xu, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function BZ(uu, Eu) {
                            if (Eu < 10) return `${uu.toFixed(1)}s`;
                            const ju = Math.floor(uu);
                            return `${Math.floor(ju/60)}:${String(ju%60).padStart(2,"0")}`
                          }

                          function LZ() {
                            const uu = bs((uu => uu.track)),
                              Eu = bs((uu => uu.volume)),
                              [ju, Uu] = (0, su.useState)(0),
                              Xu = (0, su.useRef)(Es);
                            if ((0, su.useEffect)((() => {
                                if (!uu) return;
                                if (Uu(Ys()), "playing" !== uu.status) return;
                                let Eu = 0;
                                const ju = () => {
                                  Uu(Ys()), Eu = requestAnimationFrame(ju)
                                };
                                return Eu = requestAnimationFrame(ju), () => {
                                  cancelAnimationFrame(Eu)
                                }
                              }), [uu]), !uu) return null;
                            const lu = "paused" !== uu.status,
                              qu = Math.min(ju, uu.duration);
                            return (0, Ou.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, Ou.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, Ou.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": lu ? `Pause ${uu.name}` : `Play ${uu.name}`,
                                  onClick: Os,
                                  children: (0, Ou.jsx)(hu, {
                                    name: lu ? "pause" : "play"
                                  })
                                }), (0, Ou.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, Ou.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, Ou.jsx)("code", {
                                      children: uu.name
                                    }), (0, Ou.jsx)("span", {
                                      children: uu.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, Ou.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, Ou.jsx)("span", {
                                      children: BZ(qu, uu.duration)
                                    }), (0, Ou.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: uu.duration || 1,
                                      step: .01,
                                      value: qu,
                                      disabled: 0 === uu.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${BZ(qu,uu.duration)} of ${BZ(uu.duration,uu.duration)}`,
                                      onChange: uu => {
                                        const Eu = Number(uu.target.value);
                                        ! function(uu) {
                                          var Eu;
                                          ls = uu, null === (Eu = Zs) || void 0 === Eu || Eu.seek(uu)
                                        }(Eu), Uu(Eu)
                                      }
                                    }), (0, Ou.jsx)("span", {
                                      children: uu.duration > 0 ? BZ(uu.duration, uu.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, Ou.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, Ou.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === Eu ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === Eu ? hs(Xu.current) : (Xu.current = Eu, hs(0))
                                    },
                                    children: (0, Ou.jsx)(hu, {
                                      name: "volume",
                                      className: Zu()({
                                        Muted: 0 === Eu
                                      })
                                    })
                                  }), (0, Ou.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: Eu,
                                    "aria-label": "Volume",
                                    onChange: uu => {
                                      hs(Number(uu.target.value))
                                    }
                                  })]
                                }), (0, Ou.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var Eu;
                                    null === (Eu = document.querySelector(`[data-docs-track="${CSS.escape(ss(uu.name,uu.isSong))}"]`)) || void 0 === Eu || Eu.focus(), Ds()
                                  },
                                  children: (0, Ou.jsx)(hu, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var tZ = ju(31);
                          const xZ = "docsTheme",
                            TZ = window.matchMedia("(prefers-color-scheme: light)");

                          function HZ(uu) {
                            let {
                              theme: Eu,
                              onChange: ju
                            } = uu;
                            const su = "dark" === Eu ? "light" : "dark";
                            return (0, Ou.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${su} theme`,
                              title: `Switch to ${su} theme`,
                              onClick: () => {
                                ju(su)
                              },
                              children: (0, Ou.jsx)(hu, {
                                name: "dark" === Eu ? "moon" : "sun"
                              })
                            })
                          }
                          const AZ = "https://github.com/Bloxdy/code-api",
                            nZ = "https://discord.gg/playbloxd",
                            yZ = 180,
                            zZ = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function RZ(uu) {
                            let {
                              basePath: Eu,
                              activePageId: ju,
                              onNavigate: su
                            } = uu;
                            return (0, Ou.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: iu.map((uu => (0, Ou.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, Ou.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: uu.title
                                }), uu.pageIds.map((uu => {
                                  var Uu;
                                  const lu = Wu(uu);
                                  return (0, Ou.jsxs)(Xu.c, {
                                    to: tu(Eu, lu),
                                    className: Zu()("DocsNavLink", {
                                      Active: lu.id === ju
                                    }),
                                    "aria-current": lu.id === ju ? "page" : void 0,
                                    onClick: su,
                                    children: [(0, Ou.jsx)(hu, {
                                      name: lu.icon
                                    }), (0, Ou.jsx)("span", {
                                      children: null !== (Uu = lu.navTitle) && void 0 !== Uu ? Uu : lu.title
                                    })]
                                  }, lu.id)
                                }))]
                              }, uu.title)))
                            })
                          }

                          function uX(uu) {
                            let {
                              basePath: Eu,
                              pageId: ju
                            } = uu;
                            const su = iu.flatMap((uu => uu.pageIds)),
                              Uu = su.indexOf(ju),
                              Zu = Uu > 0 ? Wu(su[Uu - 1]) : null,
                              lu = Uu < su.length - 1 ? Wu(su[Uu + 1]) : null;
                            return (0, Ou.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Zu ? (0, Ou.jsxs)(Xu.c, {
                                className: "DocsPagerLink Previous",
                                to: tu(Eu, Zu),
                                children: [(0, Ou.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, Ou.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Zu.title
                                })]
                              }) : (0, Ou.jsx)("span", {}), lu && (0, Ou.jsxs)(Xu.c, {
                                className: "DocsPagerLink Next",
                                to: tu(Eu, lu),
                                children: [(0, Ou.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, Ou.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: lu.title
                                })]
                              })]
                            })
                          }

                          function EX(uu) {
                            let {
                              basePath: Eu,
                              embedded: ju = !1
                            } = uu;
                            const {
                              pageSlug: Uu = ""
                            } = (0, lu.B)(), fu = (0, lu.r)(), Cu = (0, lu.v)(), bu = (cu = Uu, Qu.find((uu => uu.slug === cu)));
                            var cu;
                            const [Nu, Yu] = function() {
                              const [uu, Eu] = (0, su.useState)((() => {
                                const uu = tZ.k.getItem(xZ);
                                return "dark" === uu || "light" === uu ? uu : null
                              })), [ju, Uu] = (0, su.useState)(TZ.matches ? "light" : "dark");
                              return (0, su.useEffect)((() => {
                                const uu = () => {
                                  Uu(TZ.matches ? "light" : "dark")
                                };
                                return TZ.addEventListener("change", uu), () => {
                                  TZ.removeEventListener("change", uu)
                                }
                              }), []), [null !== uu && void 0 !== uu ? uu : ju, uu => {
                                tZ.k.setItem(xZ, uu), Eu(uu)
                              }]
                            }(), [Du, gu] = (0, su.useState)(null), [Mu, eu] = (0, su.useState)(!1), [Gu, pu] = (0, su.useState)(!1), [wu, du] = (0, su.useState)([]), au = function(uu, Eu) {
                              const [ju, Uu] = (0, su.useState)("");
                              return (0, su.useEffect)((() => {
                                if (!Eu) return;
                                let ju = 0;
                                const su = () => {
                                    var su, Zu;
                                    ju = 0;
                                    const Xu = Eu.getBoundingClientRect().top + yZ;
                                    let lu = null !== (su = null === (Zu = uu[0]) || void 0 === Zu ? void 0 : Zu.anchor) && void 0 !== su ? su : "";
                                    for (const Eu of uu) {
                                      const uu = document.getElementById(Eu.anchor);
                                      uu && uu.getBoundingClientRect().top <= Xu && (lu = Eu.anchor)
                                    }
                                    Eu.scrollTop + Eu.clientHeight >= Eu.scrollHeight - 2 && Eu.scrollTop > 0 && uu.length > 0 && (lu = uu[uu.length - 1].anchor), Uu(lu)
                                  },
                                  Zu = () => {
                                    ju || (ju = requestAnimationFrame(su))
                                  };
                                return su(), Eu.addEventListener("scroll", Zu, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(ju), Eu.removeEventListener("scroll", Zu)
                                }
                              }), [uu, Eu]), ju
                            }(wu, Du), Pu = "" === Uu && fu.hash ? function(uu) {
                              const Eu = (0, Ju.r)(uu);
                              if (Fu(Wu("welcome"), Eu)) return null;
                              const ju = Object.hasOwn(Lu, Eu) ? Lu[Eu] : null;
                              if (ju) return {
                                page: Wu(ju.pageId),
                                anchor: ju.anchor
                              };
                              const su = Wu("readme");
                              return Fu(su, Eu) ? {
                                page: su,
                                anchor: Eu
                              } : Bu(`#${Eu}`)
                            }(fu.hash) : null;
                            (0, su.useEffect)((() => (qu.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              qu.d.set({
                                musicOnFromPage: !0
                              }), Ds()
                            })), []), (0, su.useEffect)((() => {
                              const uu = uu => {
                                const Eu = uu.target;
                                if (Eu.closest(".DocsTextDialog")) return;
                                const ju = Eu.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(Eu.tagName);
                                "k" === uu.key && (uu.metaKey || uu.ctrlKey) || "/" === uu.key && !ju ? (uu.preventDefault(), pu(!0)) : "Escape" === uu.key && eu(!1)
                              };
                              return window.addEventListener("keydown", uu), () => {
                                window.removeEventListener("keydown", uu)
                              }
                            }), []);
                            const ou = (0, su.useRef)(null);
                            (0, su.useLayoutEffect)((() => {
                              var uu, Eu;
                              if (!Du) return;
                              const ju = ou.current === fu.pathname;
                              ou.current = fu.pathname;
                              const su = (0, Ju.r)(fu.hash),
                                Uu = su ? document.getElementById(su) : null;
                              if (null === (uu = Du.querySelector(".DocsTargeted")) || void 0 === uu || uu.classList.remove("DocsTargeted"), null === Uu || void 0 === Uu || null === (Eu = Uu.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === Eu || Eu.classList.add("DocsTargeted"), Uu) {
                                var Zu;
                                const uu = Uu.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Zu = Uu.closest(".DocsChangelogEntry")) && void 0 !== Zu ? Zu : Uu).scrollIntoView({
                                  block: uu ? "center" : "start",
                                  behavior: ju ? "smooth" : "auto"
                                })
                              } else ju || Du.scrollTo({
                                top: 0
                              })
                            }), [Du, fu.pathname, fu.hash, fu.key]);
                            const ku = (0, su.useCallback)((() => {
                                eu(!1)
                              }), []),
                              mu = (0, su.useCallback)((uu => {
                                Cu({
                                  hash: uu
                                })
                              }), [Cu]);
                            if (Pu) return (0, Ou.jsx)(lu.e, {
                              replace: !0,
                              to: tu(Eu, Pu.page, Pu.anchor)
                            });
                            if (!bu) return (0, Ou.jsx)(lu.e, {
                              replace: !0,
                              to: Eu
                            });
                            const vu = ju ? "div" : "main";
                            return (0, Ou.jsx)(NE.Provider, {
                              value: Eu,
                              children: (0, Ou.jsx)(OE.Provider, {
                                value: Du,
                                children: (0, Ou.jsxs)("div", {
                                  ref: gu,
                                  className: Zu()("DocsSite", {
                                    Embedded: ju,
                                    NavOpen: Mu
                                  }),
                                  "data-theme": Nu,
                                  children: [(0, Ou.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, Ou.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Mu ? "Close menu" : "Open menu",
                                      "aria-expanded": Mu,
                                      onClick: () => {
                                        eu(!Mu)
                                      },
                                      children: (0, Ou.jsx)(hu, {
                                        name: Mu ? "cross" : "menu"
                                      })
                                    }), (0, Ou.jsxs)(Xu.c, {
                                      to: Eu,
                                      className: "DocsBrand",
                                      children: [(0, Ou.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, Ou.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, Ou.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, Ou.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        pu(!0)
                                      },
                                      children: [(0, Ou.jsx)(hu, {
                                        name: "magnifying-glass"
                                      }), (0, Ou.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, Ou.jsxs)("kbd", {
                                        children: [zZ ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, Ou.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, Ou.jsxs)("a", {
                                        href: nZ,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Ou.jsx)(hu, {
                                          name: "discord"
                                        }), (0, Ou.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, Ou.jsxs)("a", {
                                        href: AZ,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Ou.jsx)(hu, {
                                          name: "external-link"
                                        }), (0, Ou.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !ju && (0, Ou.jsxs)(Xu.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, Ou.jsx)(hu, {
                                          name: "play"
                                        }), (0, Ou.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, Ou.jsx)(HZ, {
                                        theme: Nu,
                                        onChange: Yu
                                      })]
                                    })]
                                  }), (0, Ou.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, Ou.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, Ou.jsx)(RZ, {
                                        basePath: Eu,
                                        activePageId: bu.id,
                                        onNavigate: ku
                                      })
                                    }), (0, Ou.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: ku
                                    }), (0, Ou.jsxs)(vu, {
                                      className: "DocsMain",
                                      children: [(0, Ou.jsx)(JZ, {
                                        page: bu,
                                        onTocChange: du
                                      }, bu.id), (0, Ou.jsx)(uX, {
                                        basePath: Eu,
                                        pageId: bu.id
                                      })]
                                    }), (0, Ou.jsx)("aside", {
                                      className: Zu()("DocsToc", {
                                        Timeline: "changelog" === bu.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, Ou.jsx)(oZ, {
                                        isChangelog: "changelog" === bu.layout,
                                        toc: wu,
                                        activeAnchor: au,
                                        onNavigate: mu
                                      })
                                    })]
                                  }), (0, Ou.jsx)(LZ, {}), Gu && (0, Ou.jsx)(FZ, {
                                    basePath: Eu,
                                    onClose: () => {
                                      pu(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4928: (uu, Eu, ju) => {
                          ju.d(Eu, {
                            B: () => cu,
                            d: () => su,
                            h: () => Xu,
                            j: () => hu,
                            l: () => Yu,
                            n: () => lu,
                            r: () => Uu,
                            u: () => Zu,
                            y: () => Ou,
                            z: () => Nu
                          });
                          const su = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Uu(uu) {
                            try {
                              return decodeURIComponent(uu.slice(1))
                            } catch {
                              return uu.slice(1)
                            }
                          }

                          function Zu(uu) {
                            return uu.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Xu = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${su.source}`, "g");

                          function lu(uu, Eu) {
                            return 2 === uu.length ? Eu.replace(/^ (.*) $/, "$1") : Eu
                          }

                          function qu(uu) {
                            return "" === uu.trim()
                          }

                          function fu(uu) {
                            const Eu = [];
                            for (const ju of uu.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Eu.length > 0 && Eu[Eu.length - 1].endsWith("\\") ? Eu[Eu.length - 1] += `|${ju}` : Eu.push(ju);
                            return Eu.map((uu => uu.trim().replaceAll("\\|", "|")))
                          }
                          const Cu = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function bu(uu) {
                            const Eu = [],
                              ju = [{
                                indent: -1,
                                items: Eu
                              }];
                            let su = null;
                            for (const Uu of uu) {
                              const uu = Uu.match(Cu);
                              if (!uu) {
                                su && (su.text += ` ${Uu.trim()}`);
                                continue
                              }
                              const Eu = uu[1].replace(/\t/g, "  ").length;
                              for (; Eu <= ju[ju.length - 1].indent;) ju.pop();
                              su = {
                                text: uu[3].trim(),
                                children: []
                              }, ju[ju.length - 1].items.push(su), ju.push({
                                indent: Eu,
                                items: su.children
                              })
                            }
                            return Eu
                          }

                          function cu(uu) {
                            const Eu = uu.replace(/\r\n/g, "\n").split("\n"),
                              ju = [];
                            let su = 0;
                            for (; su < Eu.length;) {
                              const uu = Eu[su];
                              if (qu(uu)) {
                                su++;
                                continue
                              }
                              const Uu = uu.match(/^\s*```\s*(\w*)\s*$/);
                              if (Uu) {
                                const uu = [];
                                for (su++; su < Eu.length && !/^\s*```\s*$/.test(Eu[su]);) uu.push(Eu[su]), su++;
                                su++, ju.push({
                                  kind: "code",
                                  lang: Uu[1] || "text",
                                  code: uu.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Xu = uu.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Xu) {
                                const uu = Xu[2].trim();
                                ju.push({
                                  kind: "heading",
                                  level: Xu[1].length,
                                  text: uu,
                                  anchor: Zu(uu)
                                }), su++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(uu)) {
                                ju.push({
                                  kind: "rule"
                                }), su++;
                                continue
                              }
                              if (uu.trim().startsWith("|") && su + 1 < Eu.length && /^\s*\|[\s:|-]+\|\s*$/.test(Eu[su + 1])) {
                                const Uu = fu(uu),
                                  Zu = [];
                                for (su += 2; su < Eu.length && Eu[su].trim().startsWith("|");) Zu.push(fu(Eu[su])), su++;
                                ju.push({
                                  kind: "table",
                                  header: Uu,
                                  rows: Zu
                                });
                                continue
                              }
                              if (uu.startsWith(">")) {
                                const uu = [];
                                for (; su < Eu.length && Eu[su].startsWith(">");) uu.push(Eu[su].replace(/^>\s?/, "")), su++;
                                ju.push({
                                  kind: "quote",
                                  blocks: cu(uu.join("\n"))
                                });
                                continue
                              }
                              if (Cu.test(uu)) {
                                const Uu = [],
                                  Zu = /^\s*\d+\./.test(uu);
                                for (; su < Eu.length && !qu(Eu[su]) && (Cu.test(Eu[su]) || /^\s+\S/.test(Eu[su]));) Uu.push(Eu[su]), su++;
                                ju.push({
                                  kind: "list",
                                  ordered: Zu,
                                  items: bu(Uu)
                                });
                                continue
                              }
                              const lu = [];
                              for (; su < Eu.length && !qu(Eu[su]) && !/^\s*```/.test(Eu[su]) && !/^#{1,6}\s/.test(Eu[su]) && !Eu[su].startsWith(">") && !Cu.test(Eu[su]) && (!Eu[su].trim().startsWith("|") || 0 !== lu.length);) lu.push(Eu[su].trim()), su++;
                              0 === lu.length && (lu.push(Eu[su].trim()), su++), ju.push({
                                kind: "paragraph",
                                text: lu.join(" ")
                              })
                            }
                            return ju
                          }

                          function Nu(uu) {
                            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const ju = cu(uu);
                            let su = "";
                            const Uu = [],
                              Zu = [],
                              Xu = new Map;
                            for (const fu of ju) {
                              if ("heading" === fu.kind) {
                                var lu;
                                const uu = (null !== (lu = Xu.get(fu.anchor)) && void 0 !== lu ? lu : 0) + 1;
                                Xu.set(fu.anchor, uu), uu > 1 && (fu.anchor = `${fu.anchor}-${uu}`)
                              }
                              if ("heading" === fu.kind && 1 === fu.level && !su) {
                                su = fu.text;
                                continue
                              }
                              if ("heading" === fu.kind && fu.level <= Eu) {
                                Zu.push({
                                  heading: fu,
                                  blocks: []
                                });
                                continue
                              }
                              const uu = Zu.at(-1);
                              uu ? uu.blocks.push(fu) : Uu.push(fu)
                            }
                            const qu = uu => {
                              for (;
                                "rule" === (null === (Eu = uu.at(-1)) || void 0 === Eu ? void 0 : Eu.kind);) {
                                var Eu;
                                uu.pop()
                              }
                            };
                            qu(Uu);
                            for (const fu of Zu) qu(fu.blocks);
                            return {
                              title: su,
                              intro: Uu,
                              sections: Zu
                            }
                          }

                          function Ou(uu) {
                            return [{
                              heading: null,
                              blocks: uu.intro
                            }, ...uu.sections.map((uu => ({
                              heading: uu.heading,
                              blocks: uu.blocks
                            })))]
                          }

                          function Yu(uu) {
                            return uu.flatMap((uu => "code" === uu.kind ? [uu] : "quote" === uu.kind ? Yu(uu.blocks) : []))
                          }

                          function hu(uu) {
                            switch (uu.kind) {
                              case "heading":
                              case "paragraph":
                                return uu.text;
                              case "code":
                                return uu.code;
                              case "table":
                                return [uu.header, ...uu.rows].map((uu => uu.join(" "))).join(" ");
                              case "list": {
                                const Eu = uu => uu.map((uu => `${uu.text} ${Eu(uu.children)}`)).join(" ");
                                return Eu(uu.items)
                              }
                              case "quote":
                                return uu.blocks.map(hu).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4999: (uu, Eu, ju) => {
                          ju.d(Eu, {
                            e: () => lu
                          });
                          var su = ju(58),
                            Uu = ju(337),
                            Zu = ju(1971),
                            Xu = ju(1154);

                          function lu(uu) {
                            let {
                              text: Eu
                            } = uu;
                            const ju = [];
                            let lu = "";
                            return (0, Uu.gc)(Eu).forEach(((uu, Eu) => {
                              if ("string" === typeof uu || !(0, Zu.h)(uu.icon)) return void(lu += "string" === typeof uu ? uu : uu.icon);
                              const Uu = Math.max(0, lu.trimEnd().search(/\S{1,12}$/));
                              ju.push((0, Xu.jsxs)(su.Fragment, {
                                children: [lu.slice(0, Uu), (0, Xu.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [lu.slice(Uu), (0, Xu.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": uu.icon,
                                    children: (0, Xu.jsx)(Zu.d, {
                                      itemName: uu.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, Eu)), lu = ""
                            })), ju.push(lu), (0, Xu.jsx)(Xu.Fragment, {
                              children: ju
                            })
                          }
                        }, 4944: (uu, Eu, ju) => {
                          ju.d(Eu, {
                            d: () => gu,
                            b: () => Du
                          });
                          var su = ju(58),
                            Uu = ju(1499),
                            Zu = ju(1964),
                            Xu = ju(4952),
                            lu = ju(1154);
                          const qu = (0, su.memo)((function(uu) {
                            let {
                              initialParameters: Eu
                            } = uu;
                            const ju = (0, su.useRef)(null),
                              Uu = (0, su.useRef)(null),
                              qu = (0, su.useRef)(0),
                              fu = (0, su.useRef)(null),
                              Cu = Eu.description,
                              bu = Eu.UE,
                              {
                                scale: cu,
                                rotation: Nu
                              } = null !== Eu && void 0 !== Eu ? Eu : {},
                              Ou = (0, Xu.d)();
                            return (0, su.useEffect)((() => {
                              const uu = Ou.onFrame((() => {
                                const uu = Ou.getState();
                                if (!uu.isActive || !ju.current || !Uu.current) return;
                                const Eu = uu.state;
                                if (ju.current.value = Eu.progress, Eu.clickCount > qu.current) {
                                  qu.current = Eu.clickCount;
                                  const uu = Uu.current;
                                  uu.classList.add("pulse"), fu.current = setTimeout((() => {
                                    uu.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(fu.current), uu()
                              }
                            }), [Ou]), (0, lu.jsx)(lu.Fragment, {
                              children: (0, lu.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== cu && {
                                    "--scale": cu
                                  },
                                  ...null !== Nu && {
                                    "--rotation": `${Nu}deg`
                                  }
                                },
                                children: [(0, lu.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: ju
                                }), (0, lu.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Uu,
                                  children: (0, lu.jsx)(Zu.d, {
                                    text: [{
                                      icon: bu
                                    }]
                                  })
                                }), (0, lu.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, lu.jsx)(Zu.d, {
                                    text: Cu
                                  })
                                })]
                              })
                            })
                          }));
                          var fu = ju(1105),
                            Cu = ju.n(fu);
                          const bu = 2 * Math.PI * 90,
                            cu = (0, su.memo)((function(uu) {
                              let {
                                initialParameters: Eu
                              } = uu;
                              const ju = (0, su.useRef)(null),
                                Uu = (0, su.useRef)(null),
                                qu = (0, su.useRef)(null),
                                fu = Eu.label,
                                cu = Eu.icon,
                                Nu = Eu.lE,
                                {
                                  scale: Ou,
                                  rotation: Yu,
                                  qE: hu
                                } = null !== Eu && void 0 !== Eu ? Eu : {},
                                Du = (0, Xu.d)();
                              return (0, su.useEffect)((() => {
                                const uu = Du.onFrame((() => {
                                  var uu, Eu;
                                  const su = Du.getState();
                                  if (!su.isActive || !Uu.current) return;
                                  const Zu = su.state,
                                    Xu = null !== (uu = Zu.timeRemaining) && void 0 !== uu ? uu : 0,
                                    lu = null !== (Eu = Zu.XE) && void 0 !== Eu ? Eu : 1,
                                    fu = bu * (1 - Xu / lu);
                                  Uu.current.style.strokeDashoffset = `${fu}`, ju.current && (ju.current.style.opacity = Xu > 0 ? "1" : "0"), qu.current && Nu && (qu.current.textContent = `${(Xu/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  uu()
                                }
                              }), [Du, Nu]), (0, lu.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: ju,
                                style: {
                                  ...null !== Ou && {
                                    "--scale": Ou
                                  },
                                  ...null !== Yu && {
                                    "--rotation": `${Yu}deg`
                                  }
                                },
                                children: [(0, lu.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, lu.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, lu.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, lu.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: bu,
                                      ref: Uu
                                    })]
                                  }), (0, lu.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, lu.jsx)(Zu.d, {
                                      text: [{
                                        icon: cu
                                      }],
                                      className: Cu()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: hu
                                      })
                                    })
                                  })]
                                }), (0, lu.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, lu.jsx)(Zu.d, {
                                    text: fu,
                                    className: "QTETimedClickLabelText"
                                  }), Nu && (0, lu.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: qu
                                  })]
                                })]
                              })
                            })),
                            Nu = (0, su.memo)((function(uu) {
                              let {
                                initialParameters: Eu
                              } = uu;
                              const ju = (0, su.useRef)(null),
                                Uu = (0, su.useRef)(null),
                                qu = (0, su.useRef)(null),
                                fu = (0, su.useRef)(!1),
                                Cu = Eu.description,
                                bu = null === Eu || void 0 === Eu ? void 0 : Eu.icon,
                                cu = (0, Xu.d)();
                              return (0, su.useEffect)((() => {
                                const uu = cu.onFrame((() => {
                                  const uu = cu.getState();
                                  if (!uu.isActive) return;
                                  const Eu = uu.state;
                                  if (ju.current) {
                                    const uu = 100 * (Eu.catchZonePosition - Eu.CE / 2);
                                    ju.current.style.left = `${uu}%`, ju.current.style.width = 100 * Eu.CE + "%", Eu.isCatching !== fu.current && (fu.current = Eu.isCatching, Eu.isCatching ? ju.current.classList.add("catching") : ju.current.classList.remove("catching"))
                                  }
                                  Uu.current && (Uu.current.style.left = 100 * Eu.moverPosition + "%"), qu.current && (qu.current.value = Eu.progress)
                                }));
                                return () => {
                                  uu()
                                }
                              }), [cu]), (0, lu.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, lu.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, lu.jsx)(Zu.d, {
                                    text: Cu
                                  })
                                }), (0, lu.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: qu
                                }), (0, lu.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, lu.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: ju
                                  }), (0, lu.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Uu,
                                    children: (0, lu.jsx)("span", {
                                      children: bu && (0, lu.jsx)(Zu.d, {
                                        text: [{
                                          icon: bu,
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
                          var Ou = ju(649);
                          const Yu = (0, su.memo)((function(uu) {
                              let {
                                initialParameters: Eu
                              } = uu;
                              const ju = (0, su.useRef)(null),
                                Uu = Eu.label,
                                qu = Eu.DE,
                                {
                                  icon: fu,
                                  scale: Cu,
                                  rotation: bu
                                } = null !== Eu && void 0 !== Eu ? Eu : {},
                                cu = 100 * (.5 - qu / 2),
                                Nu = 100 * qu,
                                Yu = (0, Xu.d)();
                              return (0, su.useEffect)((() => {
                                const uu = Yu.onFrame((() => {
                                  const uu = Yu.getState();
                                  if (!uu.isActive || !ju.current) return;
                                  const Eu = uu.state;
                                  ju.current.style.left = 100 * Eu.markerPosition + "%"
                                }));
                                return () => {
                                  uu()
                                }
                              }), [Yu]), (0, lu.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, Ou.H)(Cu) && {
                                    "--scale": Cu
                                  },
                                  ...!(0, Ou.H)(bu) && {
                                    "--rotation": `${bu}deg`
                                  }
                                },
                                children: [fu && (0, lu.jsx)(Zu.d, {
                                  text: [{
                                    icon: fu
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, lu.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, lu.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${cu}%`,
                                      width: `${Nu}%`
                                    }
                                  }), (0, lu.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: ju
                                  })]
                                }), (0, lu.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, lu.jsx)(Zu.d, {
                                    text: Uu
                                  })
                                })]
                              })
                            })),
                            hu = (0, su.memo)((function(uu) {
                              let {
                                initialParameters: Eu
                              } = uu;
                              const ju = (0, su.useRef)(null),
                                [Uu, qu] = (0, su.useState)((() => new Array(Eu.ME).fill("pending"))),
                                [fu, Cu] = (0, su.useState)((() => {
                                  const uu = Eu.pE;
                                  return (0, Ou.H)(uu) || uu <= 0 ? [] : new Array(uu).fill("pending")
                                })),
                                bu = Eu.label,
                                {
                                  icon: cu
                                } = Eu,
                                Nu = (0, su.useRef)(0),
                                Yu = (0, su.useRef)(0),
                                hu = (0, su.useRef)([]),
                                Du = (0, Xu.d)();
                              return (0, su.useEffect)((() => {
                                const uu = Du.onFrame((() => {
                                  const uu = Du.getState();
                                  if (!uu.isActive || !ju.current) return;
                                  const Eu = uu.state,
                                    su = 30 + 60 * Eu.outerCircleProgress;
                                  if (ju.current.setAttribute("r", String(su)), !0 === Eu.lastClickResult && Eu.successes > Nu.current) {
                                    ju.current.classList.remove("QTERhythmClickOuterCircle--miss"), ju.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const uu = setTimeout((() => {
                                      var uu;
                                      null === (uu = ju.current) || void 0 === uu || uu.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    hu.current.push(uu)
                                  } else if (!1 === Eu.lastClickResult && Eu.misses > Yu.current) {
                                    ju.current.classList.remove("QTERhythmClickOuterCircle--hit"), ju.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const uu = setTimeout((() => {
                                      var uu;
                                      null === (uu = ju.current) || void 0 === uu || uu.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    hu.current.push(uu)
                                  }
                                  Eu.successes === Nu.current && Eu.misses === Yu.current || (Nu.current = Eu.successes, Yu.current = Eu.misses, qu((uu => {
                                    const ju = [...uu];
                                    for (let su = 0; su < Eu.ME; su++) ju[su] = su < Eu.successes ? "success" : "pending";
                                    return ju
                                  })), Cu((uu => {
                                    if (0 === uu.length) return uu;
                                    const ju = [...uu];
                                    for (let su = 0; su < ju.length; su++) ju[su] = su < Eu.misses ? "miss" : "pending";
                                    return ju
                                  })))
                                }));
                                return () => {
                                  uu();
                                  for (const uu of hu.current) clearTimeout(uu);
                                  hu.current = []
                                }
                              }), [Du]), (0, lu.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, lu.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Uu.map(((uu, Eu) => (0, lu.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === uu ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, Eu)))
                                }), (0, lu.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, lu.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, lu.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, lu.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: ju
                                    })]
                                  }), cu && (0, lu.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, lu.jsx)(Zu.d, {
                                      text: [{
                                        icon: cu
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), fu.length > 0 && (0, lu.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: fu.map(((uu, Eu) => (0, lu.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === uu ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, Eu)))
                                }), (0, lu.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, lu.jsx)(Zu.d, {
                                    text: bu
                                  })
                                })]
                              })
                            }));

                          function Du(uu) {
                            let {
                              qte: Eu
                            } = uu;
                            switch (Eu.type) {
                              case "progressBar":
                                return (0, lu.jsx)(qu, {
                                  initialParameters: Eu.parameters
                                });
                              case "timedClick":
                                return (0, lu.jsx)(cu, {
                                  initialParameters: Eu.parameters
                                });
                              case "gravityBar":
                                return (0, lu.jsx)(Nu, {
                                  initialParameters: Eu.parameters
                                });
                              case "precisionBar":
                                return (0, lu.jsx)(Yu, {
                                  initialParameters: Eu.parameters
                                });
                              case "rhythmClick":
                                return (0, lu.jsx)(hu, {
                                  initialParameters: Eu.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const gu = (0, su.memo)((function() {
                            const [uu, Eu] = (0, su.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Uu.f)("qteStateUpdated", (uu => {
                              Eu(uu)
                            })), uu.isActive && uu.type ? (0, lu.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, lu.jsx)(Du, {
                                qte: uu
                              })
                            }) : null
                          }))
                        }, 4952: (uu, Eu, ju) => {
                          ju.d(Eu, {
                            c: () => lu,
                            d: () => qu
                          });
                          var su = ju(58),
                            Uu = ju(1353),
                            Zu = ju(4958);
                          const Xu = {
                              getState: () => Zu.d.getCurrentState(),
                              onFrame: Uu.t
                            },
                            lu = (0, su.createContext)(Xu);

                          function qu() {
                            return (0, su.useContext)(lu)
                          }
                        }, 5003: (uu, Eu, ju) => {
                          ju.d(Eu, {
                            e: () => Vu,
                            i: () => Ku
                          });
                          var su = ju(5011),
                            Uu = ju(337);
                          const Zu = 120,
                            Xu = 260,
                            lu = 1.15,
                            qu = 1.2,
                            fu = 2,
                            Cu = 1.08,
                            bu = .8,
                            cu = .95,
                            Nu = 8,
                            Ou = "[\"')\\]\u300d\u300f\uff09]*",
                            Yu = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ou}$`),
                            hu = new RegExp(`[?\uff1f]${Ou}$`),
                            Du = new RegExp(`[!\uff01]${Ou}$`),
                            gu = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Mu = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            eu = new RegExp(`[${Mu}]`),
                            Gu = new RegExp(`[${Mu}]|[^${Mu}]+`, "g"),
                            pu = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function wu(uu) {
                            let Eu = 2166136261;
                            for (let ju = 0; ju < uu.length; ju++) Eu ^= uu.charCodeAt(ju), Eu = Math.imul(Eu, 16777619);
                            return (Eu >>> 0) / 4294967295 * 2 - 1
                          }

                          function Ju(uu) {
                            var Eu;
                            if (eu.test(uu)) return 1;
                            const ju = uu.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              su = ju.replace(/[^0-9]/g, "");
                            if (su.length > 0 && !/\p{L}/u.test(ju)) return Math.min(su.length, 4);
                            const Uu = null !== (Eu = ju.match(pu)) && void 0 !== Eu ? Eu : [];
                            if (0 === Uu.length) {
                              var Zu, Xu;
                              const uu = null !== (Zu = null === (Xu = ju.match(/\p{L}/gu)) || void 0 === Xu ? void 0 : Xu.length) && void 0 !== Zu ? Zu : 0;
                              return 0 === uu ? 0 : Math.min(Math.max(1, Math.round(uu / 2.5)), Nu)
                            }
                            const lu = ju.replace(/[^\p{L}]/gu, ""),
                              qu = Uu.length > 1 && "e" === Uu.at(-1) && lu.endsWith("e") && !lu.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(uu.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Uu.length - (qu ? 1 : 0), Nu)
                          }

                          function du(uu) {
                            return uu.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function au(uu) {
                            const Eu = uu.replace(/[^\p{L}]/gu, "");
                            return Eu.length >= 2 && Eu === Eu.toUpperCase() && Eu !== Eu.toLowerCase()
                          }

                          function Pu(uu, Eu) {
                            var ju;
                            const Nu = Eu && (0, su.l)(Eu),
                              Ou = null !== (ju = null === Nu || void 0 === Nu ? void 0 : Nu.syllableMs) && void 0 !== ju ? ju : su.e,
                              Mu = function(uu) {
                                const Eu = [];
                                for (const su of (0, Uu.gc)(uu))
                                  if ("string" === typeof su)
                                    for (const uu of su.split(/(\s+)/)) {
                                      if ("" === uu) continue;
                                      if (/^\s+$/.test(uu)) {
                                        Eu.push({
                                          kind: "space",
                                          text: uu
                                        });
                                        continue
                                      }
                                      if (!eu.test(uu)) {
                                        Eu.push({
                                          kind: "word",
                                          text: uu,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let su = !0;
                                      for (const Uu of null !== (ju = uu.match(Gu)) && void 0 !== ju ? ju : []) {
                                        var ju;
                                        const uu = Eu.at(-1);
                                        su || "word" !== (null === uu || void 0 === uu ? void 0 : uu.kind) || eu.test(Uu) || /[\p{L}\p{N}]/u.test(Uu) ? (su || Eu.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), Eu.push({
                                          kind: "word",
                                          text: Uu,
                                          delayMs: 0
                                        }), su = !1) : uu.text += Uu
                                      }
                                    } else Eu.push({
                                      kind: "icon",
                                      text: su.icon,
                                      delayMs: 0
                                    });
                                return Eu
                              }(uu),
                              pu = [];
                            let Pu = [];
                            for (const su of Mu) "space" !== su.kind && (Pu.push(su), Yu.test(su.text) && (pu.push(Pu), Pu = []));
                            pu.push(Pu);
                            const ou = [];
                            let ku = 0;
                            for (const su of pu) {
                              var mu, vu;
                              const uu = null !== (mu = null === (vu = su.at(-1)) || void 0 === vu ? void 0 : vu.text) && void 0 !== mu ? mu : "",
                                Eu = hu.test(uu),
                                ju = Du.test(uu),
                                Uu = su.map((uu => "word" === uu.kind ? Ju(uu.text) : 1)),
                                Mu = Uu.findLastIndex((uu => uu > 0));
                              for (const [hu, Du] of su.entries()) {
                                const uu = "word" === Du.kind,
                                  su = Uu[hu];
                                Du.delayMs = ku;
                                for (let Uu = 0; Nu && Uu < su; Uu++) {
                                  const {
                                    intonation: Zu
                                  } = Nu;
                                  let Xu = Mu > 0 ? -Zu.declineSemitones * (hu / Mu) : 0;
                                  Xu += wu(`${du(Du.text)}|${Uu}`) * Zu.variationSemitones;
                                  const Yu = Math.min(1, Zu.variationSemitones);
                                  let gu = Nu.glideSemitones,
                                    eu = 1;
                                  ju && (Xu += Zu.exclaimLiftSemitones, eu *= lu), Eu && hu === Mu && (Xu += Zu.questionRiseSemitones * (su > 1 ? .5 + .5 * Uu / (su - 1) : 1), Uu === su - 1 && (gu = Math.abs(gu) + Zu.questionRiseSemitones / 2)), uu && au(Du.text) && (Xu += fu * Yu, eu *= qu), su > 1 && 0 === Uu && (Xu += bu * Yu, eu *= Cu), ou.push({
                                    atMs: ku + Uu * Ou,
                                    semitones: Xu,
                                    glideSemitones: gu,
                                    durationMs: Uu < su - 1 ? Math.min(Nu.durationMs, Ou * cu) : Nu.durationMs,
                                    level: eu
                                  })
                                }
                                ku += su * Ou + (Yu.test(Du.text) ? Xu : gu.test(Du.text) ? Zu : 0)
                              }
                            }
                            return {
                              pieces: Mu.map((uu => "space" === uu.kind ? uu : "icon" === uu.kind ? {
                                kind: "icon",
                                icon: uu.text,
                                delayMs: uu.delayMs
                              } : {
                                kind: "word",
                                text: uu.text,
                                delayMs: uu.delayMs
                              })),
                              blips: ou
                            }
                          }
                          var ou = ju(1244),
                            ku = ju(1303),
                            mu = ju(1995);

                          function vu(uu) {
                            if ("string" === typeof uu) return uu;
                            const Eu = ku.h.get().getCurrentLanguageCode();
                            return (0, ou.u)(Eu, uu.translationKey, (0, ou.r)(uu.params, mu.e.shown))
                          }

                          function Ku(uu) {
                            const Eu = void 0 === uu.voice ? null : (0, su.o)(uu.voice),
                              ju = Eu && (0, su.l)(Eu);
                            return {
                              plan: Pu(vu(uu.line), ju),
                              synth: ju
                            }
                          }

                          function Vu(uu) {
                            const Eu = [];
                            let ju = [];
                            for (const [Uu, Zu] of uu.entries()) {
                              var su;
                              "space" === Zu.kind && (" " !== Zu.text || "icon" !== (null === (su = uu[Uu + 1]) || void 0 === su ? void 0 : su.kind)) ? (ju.length > 0 && Eu.push(ju), Eu.push([Zu]), ju = []) : ju.push(Zu)
                            }
                            return ju.length > 0 && Eu.push(ju), Eu
                          }
                        }, 5019: (uu, Eu, ju) => {
                          ju.d(Eu, {
                            c: () => Cu,
                            d: () => bu
                          });
                          var su = ju(5026),
                            Uu = ju(22);
                          const Zu = .25,
                            Xu = .85,
                            lu = .02,
                            qu = .01;

                          function fu(uu, Eu, ju, su, Uu, Zu, lu) {
                            const {
                              waveform: qu,
                              pitchHz: fu,
                              attackMs: Cu,
                              releaseMs: bu,
                              lowpassHz: cu
                            } = ju, Nu = Uu + su.durationMs / 1e3, Ou = fu * 2 ** (su.semitones / 12), Yu = uu.createOscillator();
                            Yu.type = qu, Yu.frequency.setValueAtTime(Ou, Uu), Yu.frequency.exponentialRampToValueAtTime(Ou * 2 ** (su.glideSemitones / 12), Nu);
                            const hu = Uu + Math.min(Cu, su.durationMs) / 1e3,
                              Du = uu.createGain();
                            Du.gain.setValueAtTime(0, Uu), Du.gain.linearRampToValueAtTime(Zu, hu), Du.gain.linearRampToValueAtTime(Zu * Xu, Math.max(hu, Nu - bu / 1e3)), Du.gain.linearRampToValueAtTime(0, Nu);
                            const gu = [Yu];
                            if (null !== cu) {
                              const Eu = uu.createBiquadFilter();
                              Eu.type = "lowpass", Eu.frequency.value = cu, gu.push(Eu)
                            }
                            gu.push(Du, Eu);
                            for (let Xu = 1; Xu < gu.length; Xu++) gu[Xu - 1].connect(gu[Xu]);
                            return Yu.onended = () => {
                              for (const uu of gu.slice(0, -1)) uu.disconnect();
                              lu()
                            }, Yu.start(Uu), Yu.stop(Nu), Yu
                          }

                          function Cu(uu, Eu, ju, su, Uu, Xu) {
                            if (0 === su.length) return Xu(), () => {};
                            const Cu = Zu * ju.volume * Uu,
                              bu = uu.createGain();
                            bu.connect(Eu);
                            const cu = uu.currentTime + lu,
                              Nu = new Set;
                            for (const Zu of su) {
                              const Eu = fu(uu, bu, ju, Zu, cu + Zu.atMs / 1e3, Cu * Zu.level, (() => {
                                Nu.delete(Eu), 0 === Nu.size && (bu.disconnect(), Xu())
                              }));
                              Nu.add(Eu)
                            }
                            return () => {
                              const Eu = uu.currentTime;
                              bu.gain.setTargetAtTime(0, Eu, qu);
                              for (const uu of Nu) try {
                                uu.stop(Eu + 5 * qu)
                              } catch {}
                            }
                          }

                          function bu(uu, Eu) {
                            var ju;
                            const Zu = su.Howler.ctx,
                              Xu = su.Howler.masterGain;
                            if (!Zu || !Xu || !Uu.d.get("soundOnFromAd")) return () => {};
                            const lu = su.Howler;
                            return null === (ju = lu._autoResume) || void 0 === ju || ju.call(lu), Cu(Zu, Xu, uu, Eu, Uu.d.get("soundVolume"), (() => {
                              var uu;
                              null === (uu = lu._autoSuspend) || void 0 === uu || uu.call(lu)
                            }))
                          }
                        }, 4995: (uu, Eu, ju) => {
                          ju.d(Eu, {
                            d: () => lu,
                            g: () => Uu,
                            h: () => qu,
                            j: () => Xu,
                            k: () => Zu
                          });
                          var su = ju(4992);
                          const Uu = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            Zu = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            Xu = `${su.i} lists every page of the Bloxd Code API docs.`;

                          function lu(uu, Eu) {
                            return `${uu.url}${encodeURIComponent(Eu.toWellFormed())}`
                          }

                          function qu(uu) {
                            const Eu = lu(Uu, uu);
                            return Eu.length <= 3e4 ? {
                              url: Eu,
                              sendsPrompt: !0
                            } : {
                              url: new URL(Uu.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5026: (uu, Eu, ju) => {
                          ju.r(Eu), ju.d(Eu, {
                            Howl: () => Uu.Howl,
                            Howler: () => Uu.Howler,
                            musicOutput: () => hu,
                            readyAudioContext: () => Du
                          });
                          var su, Uu = ju(5032),
                            Zu = ju(3634),
                            Xu = ju(4834);
                          const lu = Uu.Howler;

                          function qu() {
                            var uu, Eu;
                            if (lu.ctx || !lu.usingWebAudio || "undefined" === typeof AudioContext || !(0, Xu.j)()) return;
                            const ju = navigator.audioSession;
                            let su;
                            "auto" === (null === ju || void 0 === ju ? void 0 : ju.type) && (ju.type = "ambient");
                            try {
                              su = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Uu = su.createGain();
                            Uu.gain.setValueAtTime(lu._muted ? 0 : null !== (uu = lu._volume) && void 0 !== uu ? uu : 1, su.currentTime), Uu.connect(su.destination), lu.ctx = su, lu.masterGain = Uu, null === (Eu = lu._setup) || void 0 === Eu || Eu.call(lu)
                          }
                          lu._mobileUnloaded = !0;
                          const fu = lu.volume.bind(Uu.Howler);
                          lu.volume = function() {
                            return qu(), fu(...arguments)
                          };
                          const Cu = lu.mute.bind(Uu.Howler);
                          lu.mute = uu => (qu(), Cu(uu));
                          const bu = Uu.Howl.prototype,
                            cu = bu.init;

                          function Nu() {
                            for (; lu._html5AudioPool.length < lu.html5PoolSize;) {
                              const uu = new Audio;
                              uu._unlocked = !0, lu._releaseHtml5Audio(uu)
                            }
                            for (const Eu of lu._howls)
                              if (!Eu._webAudio)
                                for (const ju of Eu._getSoundIds()) {
                                  var uu;
                                  const su = null === (uu = Eu._soundById(ju)) || void 0 === uu ? void 0 : uu._node;
                                  su && !su._unlocked && (su._unlocked = !0, su.load())
                                }
                          }
                          bu.init = function(uu) {
                            return qu(), cu.call(this, uu)
                          }, (0, Xu.j)() && (lu._unlockAudio = () => {
                            const uu = lu.ctx;
                            if (lu._audioUnlocked || !uu) return;
                            lu.autoUnlock = !1;
                            const Eu = uu.createBuffer(1, 1, 22050);
                            lu._scratchBuffer = Eu;
                            const ju = new AbortController;
                            let su = "afterPaint";
                            const Uu = () => {
                                var su;
                                if (lu._audioUnlocked) return;
                                null === (su = lu._autoResume) || void 0 === su || su.call(lu);
                                const Uu = uu.createBufferSource();
                                Uu.buffer = Eu, Uu.connect(uu.destination), Uu.start(0), uu.resume().catch((() => {})), Uu.onended = () => {
                                  Uu.disconnect(0), lu._audioUnlocked = !0, ju.abort();
                                  for (const uu of lu._howls) uu._emit("unlock")
                                }
                              },
                              qu = () => {
                                Nu(), Uu()
                              },
                              fu = Eu => {
                                if (Nu(), "inTap" === su) {
                                  if ("running" === uu.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Uu()
                                } else "afterPaint" === su && (su = "queued", (0, Zu.d)(Eu.timeStamp, (() => {
                                  su = "inTap", Uu()
                                })))
                              };
                            for (const Zu of ["touchstart", "touchend"]) document.addEventListener(Zu, qu, {
                              capture: !0,
                              signal: ju.signal
                            });
                            for (const Zu of Xu.c) document.addEventListener(Zu, fu, {
                              capture: !0,
                              signal: ju.signal
                            })
                          });
                          let Ou = 0;
                          const Yu = null === (su = lu._autoSuspend) || void 0 === su ? void 0 : su.bind(Uu.Howler);

                          function hu() {
                            Du();
                            const {
                              ctx: uu,
                              masterGain: Eu
                            } = lu;
                            return uu && Eu ? {
                              ctx: uu,
                              destination: Eu,
                              holdAwake: uu => {
                                var Eu, ju;
                                (Ou += uu ? 1 : -1, uu) ? null === (Eu = lu._autoResume) || void 0 === Eu || Eu.call(lu): null === (ju = lu._autoSuspend) || void 0 === ju || ju.call(lu)
                              },
                              wake: () => {
                                var Eu;
                                "running" !== uu.state && (null === (Eu = lu._autoResume) || void 0 === Eu || Eu.call(lu), uu.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function Du() {
                            var uu;
                            (lu.volume(), lu.ctx && lu.autoUnlock) && (null === (uu = lu._unlockAudio) || void 0 === uu || uu.call(lu))
                          }
                          Yu && (lu._autoSuspend = () => Ou > 0 ? Uu.Howler : Yu())
                        }, 5041: (uu, Eu, ju) => {
                          function su(uu) {
                            return {
                              notAfter: uu
                            }
                          }
                          ju.d(Eu, {
                            d: () => qu,
                            e: () => fu,
                            h: () => lu,
                            i: () => su,
                            j: () => Uu,
                            n: () => Zu,
                            q: () => Xu,
                            u: () => Cu,
                            x: () => bu
                          });
                          const Uu = su("\\w$."),
                            Zu = su("\\w.,");

                          function Xu(uu) {
                            return Eu => qu(Eu, uu)
                          }

                          function lu(uu) {
                            return Eu => !uu.test(Eu.input.slice(0, Eu.index))
                          }

                          function qu(uu, Eu) {
                            return uu.index > 0 && new RegExp(`[${Eu}]`).test(uu.input[uu.index - 1])
                          }

                          function fu(uu, Eu, ju) {
                            return function(uu) {
                              return void 0 !== uu && "function" !== typeof uu
                            }(ju) ? function(uu, Eu, ju) {
                              const su = Eu.flags.replace(/[gy]/g, ""),
                                Uu = new RegExp(`[^${ju}](?:${Eu.source})`, `${su}g`),
                                Zu = [],
                                Xu = ju => {
                                  const su = ju.index + ju[0].length;
                                  return ("" === ju[0] ? cu(uu, Eu, su) : su) - 1
                                },
                                lu = new RegExp(`(?:${Eu.source})`, `${su}y`).exec(uu);
                              if (lu) {
                                if (Zu.push(lu), !Eu.global) return Zu;
                                Uu.lastIndex = Xu(lu)
                              }
                              for (let qu = Uu.exec(uu); qu; qu = Uu.exec(uu)) {
                                const ju = cu(uu, Eu, qu.index) - qu.index;
                                if (qu[0] = qu[0].slice(ju), qu.index += ju, Zu.push(qu), !Eu.global) break;
                                Uu.lastIndex = Xu(qu)
                              }
                              return Zu
                            }(uu, Eu, ju.notAfter) : function(uu, Eu, ju) {
                              const su = new RegExp(Eu.source, `${Eu.flags.replace(/[gy]/g,"")}g`),
                                Uu = [];
                              for (let Zu = su.exec(uu); Zu; Zu = su.exec(uu))
                                if (!ju || ju(Zu)) {
                                  if (Uu.push(Zu), !Eu.global) break;
                                  "" === Zu[0] && (su.lastIndex = cu(uu, Eu, su.lastIndex))
                                } else su.lastIndex = cu(uu, Eu, Zu.index);
                              return Uu
                            }(uu, Eu, ju)
                          }

                          function Cu(uu, Eu, ju, su) {
                            let Uu = "",
                              Zu = 0;
                            for (const Xu of fu(uu, Eu, ju)) Uu += uu.slice(Zu, Xu.index) + su(Xu), Zu = Xu.index + Xu[0].length;
                            return Uu + uu.slice(Zu)
                          }

                          function bu(uu, Eu, ju) {
                            const su = [];
                            let Uu = 0;
                            for (const Zu of fu(uu, Eu, ju)) su.push(uu.slice(Uu, Zu.index)), Uu = Zu.index + Zu[0].length;
                            return [...su, uu.slice(Uu)]
                          }

                          function cu(uu, Eu, ju) {
                            var su;
                            return ju + (Eu.unicode && (null !== (su = uu.codePointAt(ju)) && void 0 !== su ? su : 0) > 65535 ? 2 : 1)
                          }
                        }, 4992: (uu, Eu, ju) => {
                          ju.d(Eu, {
                            C: () => Nu,
                            d: () => Uu,
                            e: () => qu,
                            f: () => Zu,
                            i: () => Xu,
                            m: () => lu,
                            q: () => hu,
                            t: () => Cu,
                            w: () => bu,
                            y: () => Yu
                          });
                          var su = ju(1639);
                          const Uu = 24e3,
                            Zu = "/docs/llms.txt",
                            Xu = `${su.e}${Zu}`,
                            lu = "/llms.txt",
                            qu = "/docs/llms-full.txt";

                          function fu(uu) {
                            return uu || "index"
                          }

                          function Cu(uu) {
                            return `/docs/${fu(uu)}.md`
                          }

                          function bu(uu, Eu) {
                            return `/docs/${fu(uu)}/${Eu+1}.md`
                          }
                          const cu = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Nu(uu) {
                            const Eu = cu.exec(uu);
                            return null === Eu ? null : {
                              name: Eu[1],
                              part: void 0 === Eu[2] ? null : Number(Eu[2])
                            }
                          }
                          const Ou = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Yu(uu) {
                            const Eu = Ou.exec(uu);
                            if (null === Eu) return null;
                            const [, ju = "", su] = Eu;
                            return void 0 === su ? Cu(ju) : bu(ju, Number(su) - 1)
                          }

                          function hu(uu) {
                            return `/docsHtml/${fu(uu)}.html`
                          }
                        }, 5011: (uu, Eu, ju) => {
                          ju.d(Eu, {
                            e: () => Uu,
                            h: () => su,
                            j: () => Zu,
                            l: () => qu,
                            o: () => Xu
                          });
                          const su = ["sine", "triangle", "square", "sawtooth"],
                            Uu = 55,
                            Zu = {
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

                          function Xu(uu) {
                            return "string" !== typeof uu ? uu : Object.hasOwn(Zu, uu) ? Zu[uu] : null
                          }

                          function lu(uu, Eu, ju) {
                            return Math.min(ju, Math.max(Eu, uu))
                          }

                          function qu(uu) {
                            const Eu = lu(uu.durationMs, 10, 500),
                              ju = lu(uu.attackMs, 0, Eu),
                              {
                                intonation: Uu
                              } = uu;
                            return {
                              waveform: su.includes(uu.waveform) ? uu.waveform : "sine",
                              pitchHz: lu(uu.pitchHz, 20, 4e3),
                              glideSemitones: lu(uu.glideSemitones, -24, 24),
                              durationMs: Eu,
                              attackMs: ju,
                              releaseMs: lu(uu.releaseMs, 0, Eu - ju),
                              lowpassHz: null === uu.lowpassHz ? null : lu(uu.lowpassHz, 20, 2e4),
                              volume: lu(uu.volume, 0, 2),
                              intonation: {
                                variationSemitones: lu(Uu.variationSemitones, 0, 6),
                                declineSemitones: lu(Uu.declineSemitones, 0, 12),
                                questionRiseSemitones: lu(Uu.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: lu(Uu.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: lu(uu.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const uu in modules) Object.freeze(modules[uu]);