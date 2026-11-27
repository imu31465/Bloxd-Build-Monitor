export const id = 92;
export const ids = [92, 108];
export const modules = {
    5311: (ee, ie, He) => {
      He.d(ie, {
        d: () => pe,
        e: () => Xe
      });
      var ye = He(1053),
        be = He.n(ye),
        Me = He(59),
        Ke = He(1127),
        Ue = He(5317),
        Fe = He(1956),
        Je = He(2532),
        oe = He(5319),
        Re = He(1228);
      const ke = new WeakMap;
      let qe = 0;

      function fe(ee) {
        let ie = ke.get(ee);
        return void 0 === ie && (ie = qe++, ke.set(ee, ie)), ie
      }

      function Te(ee) {
        let {
          piece: ie
        } = ee;
        return "space" === ie.kind ? (0, Re.jsx)(Re.Fragment, {
          children: ie.text
        }) : (0, Re.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${ie.delayMs}ms`
          },
          children: (0, Re.jsx)(Ue.c, {
            text: "icon" === ie.kind ? `[[${ie.icon}]]` : ie.text
          })
        })
      }

      function pe(ee) {
        let {
          display: ie
        } = ee;
        const {
          selectedLanguage: He
        } = (0, Ke.v)(), ye = (0, Me.useMemo)((() => (0, oe.e)((0, oe.g)(ie).plan.pieces)), [ie, He.code]);
        return (0, Re.jsxs)("div", {
          className: be()("Dialogue", {
            DialogueAnimateIn: !1 !== ie.animateIn
          }),
          children: [ie.speakerName && (0, Re.jsx)(Fe.e, {
            text: ie.speakerName,
            className: "DialogueSpeaker"
          }), (0, Re.jsx)("p", {
            className: "DialogueLine",
            children: ye.map(((ee, ie) => 1 === ee.length && "space" === ee[0].kind ? ee[0].text : (0, Re.jsx)("span", {
              className: "DialogueGlue",
              children: ee.map(((ee, ie) => (0, Re.jsx)(Te, {
                piece: ee
              }, ie)))
            }, ie)))
          })]
        })
      }
      const Xe = (0, Me.memo)((function() {
        const ee = (0, Je.i)("dialogue");
        return (0, Re.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: ee && (0, Re.jsx)(pe, {
            display: ee
          }, fe(ee))
        })
      }))
    },
    5191: (ee, ie, He) => {
        He.r(ie), He.d(ie, {
          default: () => iK
        });
        var ye = He(59),
          be = He(1053),
          Me = He.n(be),
          Ke = He(1511),
          Ue = He(1515),
          Fe = He(18),
          Je = He(77),
          oe = He(5198),
          Re = He(5209),
          ke = He(5212),
          qe = He(4721),
          fe = He(1228);
        const Te = "/textures/docs/icons";

        function pe(ee) {
          let {
            name: ie,
            isTinted: He,
            className: ye,
            style: be
          } = ee;
          const Ke = `${Te}/${ie}.png`;
          return He ? (0, fe.jsxs)("span", {
            className: Me()("DocsPixelIcon", "Tinted", ye),
            "aria-hidden": "true",
            style: be,
            children: [(0, fe.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Ke}")`,
                WebkitMaskImage: `url("${Ke}")`
              }
            }), (0, fe.jsx)("img", {
              src: Ke,
              alt: ""
            })]
          }) : (0, fe.jsx)("img", {
            className: Me()("DocsPixelIcon", ye),
            src: Ke,
            alt: "",
            "aria-hidden": "true",
            style: be
          })
        }
        const Xe = 1500;

        function ze() {
          const [ee, ie] = (0, ye.useState)(null);
          (0, ye.useEffect)((() => {
            if (null === ee) return;
            const He = setTimeout((() => {
              ie(null)
            }), Xe);
            return () => {
              clearTimeout(He)
            }
          }), [ee]);
          return [ee, ee => {
            (0, qe.e)(ee).then((() => {
              ie({
                text: ee,
                failed: !1
              })
            }), (He => {
              console.error("Could not copy to the clipboard", He), ie({
                text: ee,
                failed: !0
              })
            }))
          }]
        }

        function Be(ee) {
          let {
            text: ie,
            label: He,
            className: ye
          } = ee;
          const [be, Ke] = ze(), Ue = !1 === (null === be || void 0 === be ? void 0 : be.failed);
          return (0, fe.jsxs)("button", {
            type: "button",
            className: Me()("DocsCopyButton", ye, {
              Copied: Ue
            }),
            title: "Copy to clipboard",
            "aria-label": He ? void 0 : `Copy ${ie}`,
            onClick: ee => {
              ee.stopPropagation(), Ke(ie)
            },
            children: [(0, fe.jsx)(pe, {
              name: Ue ? "check" : "copy"
            }), He && (0, fe.jsx)("span", {
              children: Ue ? "Copied" : null !== be && void 0 !== be && be.failed ? "Copy failed" : He
            })]
          })
        }
        oe.b.registerLanguage("javascript", Re.b), oe.b.registerLanguage("typescript", ke.b);
        const Ee = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          ge = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          Oe = 24;

        function de(ee) {
          let {
            code: ie,
            lang: He,
            compact: be = !1
          } = ee;
          const Ke = (0, ye.useMemo)((() => function(ee, ie) {
              const He = Ee[ie];
              return He ? oe.b.highlight(ee, {
                language: He
              }).value : ee.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(ie, He)), [ie, He]),
            Ue = ie.split("\n").length,
            Fe = !be && Ue > Oe + 6,
            [Je, Re] = (0, ye.useState)(!1),
            ke = Ee[He];
          return (0, fe.jsxs)("div", {
            className: Me()("DocsCodeBlock", {
              Compact: be,
              Collapsed: Fe && !Je
            }),
            children: [!be && (0, fe.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, fe.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: ke ? ge[ke] : "Text"
              }), (0, fe.jsx)(Be, {
                text: ie,
                label: "Copy"
              })]
            }), (0, fe.jsx)("pre", {
              children: (0, fe.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Ke
                }
              })
            }), Fe && (0, fe.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Je,
              onClick: () => {
                Re(!Je)
              },
              children: [(0, fe.jsx)(pe, {
                name: Je ? "chevron-up" : "chevron-down"
              }), Je ? "Show less" : `Show all ${Ue} lines`]
            })]
          })
        }
        var We = He(5220);
        var te = He(5222);
        const Ze = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function we(ee) {
          const ie = new Map;
          let He, ye = [],
            be = !1;
          const Me = () => {
            He && ie.set(He.name, He.lines.join("\n").trimEnd())
          };
          for (const Ke of ee.split("\n")) {
            const ee = Ke.match(Ze);
            be || Ke.startsWith("/*") ? (be || (Me(), He = void 0), ye.push(Ke), be = !Ke.includes("*/")) : ee ? (Me(), He = {
              name: ee[1],
              lines: [...ye, Ke]
            }, ye = []) : He && (Ke.startsWith(" ") || Ke.startsWith("\t") || /^[}\])|]/.test(Ke)) ? He.lines.push(Ke) : He && "" !== Ke.trim() && (Me(), He = void 0)
          }
          return Me(), ie
        }

        function De(ee) {
          return "methods" === ee || "callbacks" === ee || "settings" === ee
        }
        const Pe = {
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
              setterSnippet: (ee, ie) => `api.setClientOption(playerId, "${ee}", ${ie})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (ee, ie) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${ee}", ${ie})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (ee, ie) => `api.setMobSetting(mobId, "${ee}", ${ie})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (ee, ie) => `api.setVehicleSetting(vehicleId, "${ee}", ${ie})`
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
          Ae = {
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

        function Ye(ee) {
          return ee.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function Ve(ee) {
          let ie = !1;
          return ee.split("\n").map((ee => (ee.startsWith("```") && (ie = !ie), !ie && /^#{3,} /.test(ee) ? ee.slice(1) : ee))).join("\n")
        }

        function ae(ee) {
          return "readme" === ee ? "getting-started" : Ye(ee)
        }
        const ce = "## Glossary of Referenced Types";
        const xe = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...te.c.flatMap((ee => {
            const ie = {
              id: ee.id,
              slug: ae(ee.id),
              title: ee.title,
              markdown: ee.content,
              ...Pe[ee.id]
            };
            if ("readme" === ee.id) return function(ee) {
              const ie = ee.markdown.indexOf(ce),
                He = ee.markdown.indexOf("\n```", ie),
                ye = ee.markdown.indexOf("\n```", He + 1);
              if (-1 === ie || -1 === He || -1 === ye) throw new Error(`Getting started has no "${ce}" section with a code block`);
              const be = ee.markdown.slice(ie + 31, He).trim(),
                Me = [...we(ee.markdown.slice(ee.markdown.indexOf("\n", He + 1) + 1, ye))].map((ee => {
                  let [ie, He] = ee;
                  return `## ${ie}\n\n\`\`\`ts\n${He}\n\`\`\`\n`
                })),
                Ke = ee.markdown.slice(ee.markdown.indexOf("\n", ye + 1) + 1);
              return [{
                ...ee,
                markdown: `${ee.markdown.slice(0,ie)}${Ke}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${be}\n\n${Me.join("\n")}`
              }]
            }(ie);
            if ("howTo" === ee.id) {
              const {
                parent: ee,
                guides: He
              } = function(ee) {
                const [ie, ...He] = ee.markdown.split(/^(?=## )/m), ye = [ie], be = [];
                for (const Ke of He) {
                  var Me;
                  const ie = Ke.indexOf("\n"),
                    He = Ke.slice(3, ie).trim(),
                    Ue = Ke.slice(ie + 1);
                  if (!Ue.includes("```")) {
                    ye.push(Ke);
                    continue
                  }
                  const Fe = null !== (Me = Ae[He]) && void 0 !== Me ? Me : {
                    icon: "lightbulb",
                    summary: `How to use ${He.toLowerCase()} in World Code.`
                  };
                  be.push({
                    id: `${ee.id}${He.split(/[^A-Za-z0-9]+/).map((ee=>ee.charAt(0).toUpperCase()+ee.slice(1))).join("")}`,
                    slug: `${ee.slug}-${Ye(He)}`,
                    title: He,
                    layout: "article",
                    sourceAnchor: (0, We.t)(He),
                    markdown: `# ${He}\n\n${Ve(Ue)}`,
                    ...Fe
                  })
                }
                return {
                  parent: {
                    ...ee,
                    markdown: ye.join(""),
                    childPageIds: be.map((ee => ee.id))
                  },
                  guides: be
                }
              }(ie);
              return [ee, ...He]
            }
            return [ie]
          }))],
          Le = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...xe.filter((ee => void 0 !== ee.sourceAnchor)).map((ee => ee.id))]
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

        function Ce(ee) {
          return xe.find((ie => ie.id === ee))
        }
        const ve = new Map;

        function ue(ee) {
          let ie = ve.get(ee.id);
          return ie || (ie = (0, We.y)(ee.markdown, "changelog" === ee.layout ? 3 : 2), ve.set(ee.id, ie)), ie
        }

        function me(ee, ie) {
          return ue(ee).sections.some((ee => ee.heading.anchor === ie || ee.blocks.some((ee => "heading" === ee.kind && ee.anchor === ie))))
        }

        function le(ee) {
          const [ie, ...He] = ee.replace(/^#/, "").split("-"), ye = xe.find((ee => ee.id === ie));
          if (!ye) return null;
          const be = He.length > 0 ? (0, We.t)(He.join("-")) : "";
          for (const Ke of null !== (Me = ye.childPageIds) && void 0 !== Me ? Me : []) {
            var Me;
            const ee = Ce(Ke);
            if (ee.sourceAnchor === be) return {
              page: ee,
              anchor: ""
            };
            if (me(ee, be)) return {
              page: ee,
              anchor: be
            }
          }
          return {
            page: ye,
            anchor: be
          }
        }
        const Se = {
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

        function ne(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const ye = ie.slug ? `${ee}/${ie.slug}` : ee;
          return He ? `${ye}#${He}` : ye
        }
        var je = He(5239);
        const se = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Ie = new Set(["GameApi", "Console", "_TypeOf"]),
          he = 4;

        function Ne(ee) {
          let ie = ee.length;
          for (; ie > 0 && "" === ee[ie - 1].trim();) ie--;
          return ee.slice(0, ie)
        }

        function Ge(ee) {
          var ie;
          const He = Ne(ee);
          if (null === (ie = He.at(-1)) || void 0 === ie || !ie.trimEnd().endsWith("*/")) return {
            lines: He,
            doc: ""
          };
          const ye = He.findLastIndex((ee => ee.startsWith("/**")));
          return -1 === ye ? {
            lines: He,
            doc: ""
          } : {
            lines: Ne(He.slice(0, ye)),
            doc: He.slice(ye).join("\n")
          }
        }

        function re(ee) {
          var ie;
          const He = ee.split("\n"),
            ye = He.flatMap(((ee, ie) => se.test(ee) ? [ie] : []));
          let be = Ge(He.slice(0, null !== (ie = ye[0]) && void 0 !== ie ? ie : He.length)).doc;
          return ye.map(((ee, ie) => {
            var Me;
            const Ke = Ge(He.slice(ee, null !== (Me = ye[ie + 1]) && void 0 !== Me ? Me : He.length)),
              Ue = {
                name: He[ee].match(se)[1],
                doc: be,
                lines: Ke.lines
              };
            return be = Ke.doc, Ue
          }))
        }

        function Qe(ee) {
          var ie;
          const He = ee.match(/^readonly \[([\s\S]*)\]$/);
          return He ? null !== (ie = He[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== ie ? ie : [] : null
        }

        function ei(ee) {
          if (!ee.startsWith("{") || !ee.endsWith("}")) return null;
          const ie = {
              keys: [],
              values: []
            },
            He = ee => {
              const He = ee.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              He && (ie.keys.push(He[1].startsWith('"') ? He[1] : `"${He[1]}"`), ie.values.push(He[2].trim()))
            };
          let ye = 0,
            be = "";
          for (const Me of ee.slice(1, -1)) "{[(".includes(Me) ? ye++ : "}])".includes(Me) && ye--, ";" === Me && 0 === ye ? (He(be), be = "") : be += Me;
          return He(be), ie
        }

        function ii(ee) {
          return ee.length > he ? `\n\t| ${ee.join("\n\t| ")}` : ee.join(" | ")
        }

        function Hi(ee, ie) {
          const He = function(ee, ie) {
            return ee.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((ee, He) => {
              var ye;
              const be = null === (ye = ie.get(He)) || void 0 === ye ? void 0 : ye.object;
              return be ? ii(be.values) : ee
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((ee, He) => {
              var ye, be;
              const Me = null === (ye = ie.get(He)) || void 0 === ye || null === (be = ye.object) || void 0 === be ? void 0 : be.values.map(Qe);
              return null !== Me && void 0 !== Me && Me.every((ee => null !== ee)) ? ii([...new Set(Me.flat())]) : ee
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((ee, He) => {
              var ye;
              const be = null === (ye = ie.get(He)) || void 0 === ye ? void 0 : ye.members;
              return be ? ii(be) : ee
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((ee, He) => {
              var ye;
              const be = null === (ye = ie.get(He)) || void 0 === ye ? void 0 : ye.object;
              return be ? ii(be.keys) : ee
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((ee, He) => {
              var ye, be;
              return null !== (ye = null === (be = ie.get(He)) || void 0 === be ? void 0 : be.text) && void 0 !== ye ? ye : ee
            }))
          }(ee.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), ie);
          return [ee.doc, He].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function yi(ee) {
          const ie = re(ee),
            He = function(ee) {
              const ie = new Map,
                He = ee.find((ee => "_TypeOf" === ee.name));
              let ye = null;
              const be = () => {
                if (ye) {
                  const ee = ye.lines.join("\n");
                  ie.set(ye.name, {
                    text: ee,
                    members: Qe(ee),
                    object: ei(ee)
                  })
                }
              };
              for (const Me of He.lines.slice(1, -1)) {
                const ee = Me.match(/^\t([\w$]+): (.+)$/);
                ee ? (be(), ye = {
                  name: ee[1],
                  lines: [ee[2]]
                }) : ye && ye.lines.push(Me.replace(/^\t/, ""))
              }
              return be(), ie
            }(ie),
            ye = new Map;
          for (const be of ie) Ie.has(be.name) || ye.has(be.name) || ye.set(be.name, Hi(be, He));
          return ye
        }
        let bi, Mi, Ki;

        function Ui() {
          return Mi ??= function(ee) {
            const ie = re(ee).find((ee => "GameApi" === ee.name)),
              He = new Map,
              ye = ie.lines;
            for (let Me = 0; Me < ye.length; Me++) {
              var be;
              if (!ye[Me].trimStart().startsWith("/**")) continue;
              const ee = Me;
              for (; Me < ye.length && !ye[Me].includes("*/");) Me++;
              const ie = null === (be = ye[Me + 1]) || void 0 === be ? void 0 : be.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!ie) continue;
              let Ke = null;
              const Ue = [];
              let Fe = "description",
                Je = !1;
              for (const He of ye.slice(ee, Me + 1).join("\n").split("\n").map((ee => ee.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const ee = He.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                ee ? (Ke = ee[1].trim(), Fe = "deprecation") : He.startsWith("@") ? (Fe = "otherTag", Je = !0) : "" === He.trim() ? Je || (Fe = "description", Ue.push(He)) : "deprecation" !== Fe || /^[A-Z]/.test(He.trim()) ? "otherTag" !== Fe && (Fe = "description", Ue.push(He)) : Ke = `${Ke} ${He.trim()}`.trim()
              }
              He.set(ie[1], {
                deprecation: Ke,
                description: Ue.join("\n").trim()
              })
            }
            return He
          }(je.default), Mi
        }

        function Fi() {
          if (!Ki) {
            Ki = new Map;
            for (const ee of xe) {
              const ie = (0, We.x)(ue(ee)).flatMap((ee => ee.blocks));
              for (const ee of (0, We.l)(ie))
                if ("ts" === ee.lang || "typescript" === ee.lang)
                  for (const [ie, He] of we(ee.code)) Ki.set(ie, He)
            }
            for (const [ee, ie] of(bi ??= yi(je.default), bi)) Ki.has(ee) || Ki.set(ee, ie)
          }
          return Ki
        }
        const Ji = {
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
        let oi;

        function Ri() {
          if (!oi) {
            oi = new Map;
            for (const ee of xe)
              if (De(ee.layout))
                for (const ie of ue(ee).sections) oi.has(ie.heading.text) || oi.set(ie.heading.text, {
                  pageId: ee.id,
                  anchor: ie.heading.anchor
                })
          }
          return oi
        }

        function ki(ee) {
          const ie = ee.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return ie ? Ri().get(ie[1]) : void 0
        }
        const qi = (0, ye.createContext)("/docs"),
          fi = (0, ye.createContext)(null),
          Ti = (0, ye.createContext)(!1),
          Xi = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function zi(ee) {
          const ie = ee.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return ie ? ie[1] : null
        }

        function Bi(ee) {
          let {
            colour: ie
          } = ee;
          return (0, fe.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: ie
            },
            "aria-hidden": "true"
          })
        }

        function Ei(ee) {
          const ie = [];
          let He = 0;
          for (const ye of ee.matchAll(Xi)) ie.push(ee.slice(He, ye.index), (0, fe.jsx)(Bi, {
            colour: ye[0]
          }), ye[0]), He = ye.index + ye[0].length;
          return ie.push(ee.slice(He)), ie
        }

        function gi(ee) {
          let {
            href: ie,
            children: He
          } = ee;
          const be = (0, ye.useContext)(qi);
          if (ie.startsWith("#")) {
            const ee = le(ie);
            if (ee) return (0, fe.jsx)(Ke.e, {
              to: ne(be, ee.page, ee.anchor),
              children: (0, fe.jsx)(Ti.Provider, {
                value: !0,
                children: He
              })
            })
          }
          return (0, fe.jsx)("a", {
            href: ie,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, fe.jsx)(Ti.Provider, {
              value: !0,
              children: He
            })
          })
        }

        function Oi(ee) {
          let {
            code: ie
          } = ee;
          const He = (0, ye.useContext)(qi);
          if ((0, ye.useContext)(Ti)) return (0, fe.jsx)("code", {
            className: "DocsInlineCode",
            children: ie
          });
          if (Fi().has(ie)) return (0, fe.jsx)(Zi, {
            type: ie
          });
          const be = ki(ie);
          if (be) return (0, fe.jsx)(Ke.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: ne(He, Ce(be.pageId), be.anchor),
            children: ie
          });
          const Me = zi(ie);
          return (0, fe.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Me && (0, fe.jsx)(Bi, {
              colour: Me
            }), ie]
          })
        }

        function di(ee) {
          let {
            text: ie
          } = ee;
          const He = [];
          let be = 0;
          for (const ye of ie.matchAll(We.h)) {
            ye.index > be && He.push(...Ei(ie.slice(be, ye.index)));
            const [, ee, Me, Ke, Ue, Fe] = ye;
            ee ? He.push((0, fe.jsx)(Oi, {
              code: (0, We.n)(ee, Me)
            })) : Ke ? He.push((0, fe.jsx)("strong", {
              children: (0, fe.jsx)(di, {
                text: Ke
              })
            })) : He.push((0, fe.jsx)(gi, {
              href: Fe,
              children: (0, fe.jsx)(di, {
                text: Ue
              })
            })), be = ye.index + ye[0].length
          }
          return be < ie.length && He.push(...Ei(ie.slice(be))), (0, fe.jsx)(fe.Fragment, {
            children: He.map(((ee, ie) => (0, fe.jsx)(ye.Fragment, {
              children: ee
            }, ie)))
          })
        }
        const Wi = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          ti = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function Zi(ee) {
          let {
            type: ie
          } = ee;
          const He = Fi(),
            be = [];
          for (const ye of ie.trim().matchAll(Wi)) {
            const [ee, ie, Me, Ke, Ue] = ye;
            ie ? be.push((0, fe.jsx)("span", {
              className: "DocsTypeString",
              children: ee
            })) : Me && He.has(Me) ? be.push((0, fe.jsx)(Yi, {
              name: Me,
              definition: He.get(Me)
            })) : Me ? be.push((0, fe.jsx)("span", {
              className: ti.has(Me) ? "DocsTypeKeyword" : "DocsTypeName",
              children: ee
            })) : Ke ? be.push((0, fe.jsx)("span", {
              className: "DocsTypeNumber",
              children: ee
            })) : Ue ? be.push(" ") : be.push((0, fe.jsx)("span", {
              className: "DocsTypePunctuation",
              children: ee
            }))
          }
          return (0, fe.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: be.map(((ee, ie) => (0, fe.jsx)(ye.Fragment, {
              children: ee
            }, ie)))
          })
        }
        const wi = 480,
          Di = 6,
          Pi = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Ai = 0;

        function Yi(ee) {
          let {
            name: ie,
            definition: He
          } = ee;
          const be = (0, ye.useContext)(qi),
            Me = Ji[ie],
            Ue = (0, ye.useRef)(null),
            Fe = (0, ye.useRef)(null),
            oe = (0, ye.useRef)(null),
            [Re, ke] = (0, ye.useState)(!1),
            [qe, Te] = (0, ye.useState)(null),
            Xe = (0, ye.useRef)(),
            ze = (0, ye.useContext)(fi),
            [Be] = (0, ye.useState)((() => "DocsTypePopover-" + Ai++)),
            Ee = () => {
              clearTimeout(Xe.current), ke(!0)
            },
            ge = () => {
              clearTimeout(Xe.current), Xe.current = setTimeout((() => {
                ke(!1)
              }), 120)
            };
          return (0, ye.useEffect)((() => {
            if (!Re) return;
            const ee = ee => {
              if ("Escape" === ee.key) {
                var ie, He;
                if (null !== (ie = Fe.current) && void 0 !== ie && ie.contains(document.activeElement)) null === (He = Ue.current) || void 0 === He || He.focus();
                ke(!1)
              }
            };
            return document.addEventListener("keydown", ee), () => {
              document.removeEventListener("keydown", ee)
            }
          }), [Re]), (0, ye.useEffect)((() => () => {
            clearTimeout(Xe.current)
          }), []), (0, ye.useLayoutEffect)((() => {
            if (!Re || !Ue.current || !Fe.current) return void Te(null);
            const ee = Ue.current.getBoundingClientRect(),
              ie = Fe.current.offsetHeight,
              He = Math.min(wi, window.innerWidth - 32),
              ye = Math.min(Math.max(16, ee.left), window.innerWidth - He - 16),
              be = ee.bottom + Di + ie < window.innerHeight;
            Te({
              left: ye,
              top: be ? ee.bottom + Di : Math.max(16, ee.top - Di - ie)
            })
          }), [Re]), (0, fe.jsxs)(fe.Fragment, {
            children: [(0, fe.jsx)("button", {
              type: "button",
              ref: Ue,
              className: "DocsTypeLink",
              "aria-expanded": Re,
              "aria-describedby": Re ? Be : void 0,
              onMouseEnter: Ee,
              onMouseLeave: ge,
              onFocus: Ee,
              onBlur: ge,
              onKeyDown: ee => {
                "Tab" === ee.key && !ee.shiftKey && oe.current && (ee.preventDefault(), oe.current.focus())
              },
              onClick: Ee,
              children: ie
            }), Re && (0, Je.createPortal)((0, fe.jsxs)("span", {
              ref: Fe,
              id: Be,
              className: "DocsTypePopover",
              role: "tooltip",
              style: qe ? {
                left: qe.left,
                top: qe.top,
                maxWidth: wi
              } : {
                visibility: "hidden"
              },
              onMouseEnter: Ee,
              onMouseLeave: ge,
              onFocus: Ee,
              onBlur: ge,
              children: [(0, fe.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, fe.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: ie
                }), Me && (0, fe.jsxs)(Ke.e, {
                  ref: oe,
                  className: "DocsTypePopoverLink",
                  to: ne(be, Ce(Me)),
                  onClick: () => {
                    ke(!1)
                  },
                  onKeyDown: ee => {
                    if ("Tab" === ee.key) {
                      var ie;
                      if (ee.preventDefault(), ee.shiftKey || !Ue.current || ! function(ee, ie) {
                          const He = [...document.querySelectorAll(Pi)],
                            ye = He.slice(He.indexOf(ee) + 1).find((ee => ee.getClientRects().length > 0 && !(null !== ie && void 0 !== ie && ie.contains(ee))));
                          return null === ye || void 0 === ye || ye.focus(), void 0 !== ye
                        }(Ue.current, Fe.current)) null === (ie = Ue.current) || void 0 === ie || ie.focus();
                      ee.shiftKey || ke(!1)
                    }
                  },
                  children: [Ce(Me).title, (0, fe.jsx)(pe, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, fe.jsx)(de, {
                lang: "ts",
                code: He,
                compact: !0
              })]
            }), null !== ze && void 0 !== ze ? ze : document.body)]
          })
        }
        var Vi = He(186),
          ai = He(5245),
          ci = He(5252),
          xi = He(5255);
        const Li = {
          progressBar: {
            Si: 30,
            ni: .075,
            ji: 5,
            si: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Ii: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Gi: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            ri: !0,
            scale: 3,
            rotation: 15,
            Qi: !1
          },
          gravityBar: {
            Si: 30,
            iH: .25,
            HH: 3,
            yH: .8,
            gravity: 1,
            bH: 1.5,
            KH: 8,
            UH: 4,
            si: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            JH: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            RH: 5,
            kH: 1200,
            qH: .15,
            fH: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var Ci = He(335),
          vi = He(2054);

        function ui(ee) {
          return ee.startsWith("fa-")
        }
        const mi = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          li = {
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

        function Si(ee) {
          return "string" === typeof ee ? "text" : "entityName" in ee || "translationKey" in ee ? "other" : (0, Ci.Db)(ee) ? "progressBar" : (0, Ci.Bb)(ee) ? "keyBinding" : "icon" in ee ? "icon" : "str" in ee && "string" === typeof ee.str ? "text" : "other"
        }
        const ni = [{
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
          ji = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...ni],
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
                options: vi.m
              },
              isRequired: !0
            }, ...ni],
            other: []
          };

        function si(ee) {
          return "string" === typeof ee ? {
            str: ee
          } : ee
        }

        function Ii(ee, ie) {
          let He = si(ee);
          for (const ye of ie) He = He && "object" === typeof He ? He[ye] : void 0;
          return He
        }

        function Ni(ee, ie, He) {
          const ye = (ee, be) => {
            var Me;
            const Ke = ie[be],
              Ue = {
                ...ee
              };
            if (be === ie.length - 1) return void 0 === He ? delete Ue[Ke] : Ue[Ke] = He, Ue;
            const Fe = ye(null !== (Me = ee[Ke]) && void 0 !== Me ? Me : {}, be + 1);
            return 0 === Object.keys(Fe).length ? delete Ue[Ke] : Ue[Ke] = Fe, Ue
          };
          return function(ee) {
            const ie = Object.keys(ee);
            return "string" === typeof ee.str && 1 === ie.length ? ee.str : ee
          }(ye(si(ee), 0))
        }

        function Gi(ee, ie) {
          const He = Si(ee),
            ye = ji[He].find((ee => ee.path.join(".") === ie.join("."))),
            be = null !== ye && void 0 !== ye && ye.isRequired && "other" !== He ? Ii(li[He], ie) : void 0;
          return Ni(ee, ie, be)
        }

        function ri(ee) {
          switch (Si(ee)) {
            case "text":
              return String(Ii(ee, ["str"]));
            case "icon":
              return String(Ii(ee, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Ii(ee,["progress"])))}%`;
            case "keyBinding":
              return String(Ii(ee, ["action"]));
            case "other":
              return JSON.stringify(ee)
          }
        }
        const Qi = /^[A-Za-z_$][\w$]*$/;

        function eH(ee) {
          if (Array.isArray(ee)) return `[${ee.map(eH).join(", ")}]`;
          if (ee && "object" === typeof ee) {
            const ie = Object.entries(ee).map((ee => {
              let [ie, He] = ee;
              return `${Qi.test(ie)?ie:JSON.stringify(ie)}: ${eH(He)}`
            }));
            return 0 === ie.length ? "{}" : `{ ${ie.join(", ")} }`
          }
          return JSON.stringify(ee)
        }

        function iH(ee) {
          const ie = ee.map(eH),
            He = `[${ie.join(", ")}]`;
          return He.length <= 60 ? He : `[\n${ie.map((ee=>`    ${ee},`)).join("\n")}\n]`
        }
        const HH = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function yH(ee) {
          let ie = "";
          for (let be = 0; be < ee.length; be++) {
            const Me = ee[be];
            if ("\\" === Me) {
              var He;
              const ye = null !== (He = ee[be + 1]) && void 0 !== He ? He : "";
              ie += "'" === ye ? "'" : Me + ye, be++
            } else if ('"' === Me) ie += '\\"';
            else {
              var ye;
              ie += null !== (ye = HH[Me]) && void 0 !== ye ? ye : Me
            }
          }
          return `"${ie}"`
        }

        function bH(ee) {
          if ("string" === typeof ee) return !0;
          if (!ee || "object" !== typeof ee || Array.isArray(ee)) return !1;
          const ie = ee;
          return "ProgressBar" === ie.type ? "number" === typeof ie.progress : "StyledKeyBinding" === ie.type ? vi.m.includes(ie.action) : "string" === typeof ie.icon || "string" === typeof ie.str || "string" === typeof ie.entityName || "string" === typeof ie.translationKey
        }

        function MH(ee) {
          let ie;
          try {
            ie = function(ee) {
              let ie = "",
                He = "",
                ye = 0;
              const be = () => {
                ie += He.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), He = ""
              };
              for (; ye < ee.length;) {
                const Me = ee.slice(ye).search(/["'`]|\/\//);
                if (-1 === Me) {
                  He += ee.slice(ye);
                  break
                }
                He += ee.slice(ye, ye + Me);
                const Ke = ye + Me,
                  Ue = ee[Ke];
                if ("/" === Ue) {
                  const ie = ee.indexOf("\n", Ke);
                  ye = -1 === ie ? ee.length : ie;
                  continue
                }
                if (be(), "`" === Ue) throw new Error("Use quotes rather than template strings.");
                let Fe = Ke + 1;
                for (; Fe < ee.length && ee[Fe] !== Ue;) Fe += "\\" === ee[Fe] ? 2 : 1;
                if (Fe >= ee.length) throw new Error("A string is missing its closing quote.");
                const Je = ee.slice(Ke + 1, Fe);
                ie += yH(Je), ye = Fe + 1
              }
              return be(), JSON.parse(ie)
            }(ee.trim())
          } catch (ye) {
            return {
              parts: null,
              error: ye instanceof SyntaxError ? "This isn't a valid array yet." : ye.message
            }
          }
          if (!Array.isArray(ie)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const He = ie.findIndex((ee => !bH(ee)));
          return -1 !== He ? {
            parts: null,
            error: `Part ${He+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: ie,
            error: null
          }
        }
        const KH = 1 / Vi.g.clientTicksPerSecond,
          UH = 700,
          FH = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          JH = {
            progressBar: Li.progressBar.Ii,
            timedClick: Li.timedClick.icon,
            gravityBar: Li.gravityBar.icon,
            precisionBar: Li.precisionBar.icon,
            rhythmClick: Li.rhythmClick.icon
          };

        function oH(ee) {
          let {
            type: ie
          } = ee;
          const [He, be] = (0, ye.useState)("ready"), [Ke, Ue] = (0, ye.useState)(1), [Fe, Je] = (0, ye.useState)(!0), oe = (0, ye.useRef)(null), Re = (0, ye.useRef)(null), ke = (0, ye.useRef)(null), qe = (0, ye.useRef)(new Set), Te = (0, ye.useRef)(!1), Xe = JH[ie], ze = (0, ye.useMemo)((() => ({
            getState: () => {
              var ee, ie;
              return null !== (ee = null === (ie = ke.current) || void 0 === ie ? void 0 : ie.getState()) && void 0 !== ee ? ee : FH
            },
            onFrame: ee => (qe.current.add(ee), () => {
              qe.current.delete(ee)
            })
          })), []);
          (0, ye.useEffect)((() => {
            const ee = oe.current,
              ie = Re.current;
            if (!ee || !ie) return;
            const He = new ResizeObserver((() => {
              Ue(ee.clientWidth / Math.max(1, ie.offsetWidth))
            }));
            return He.observe(ee), () => {
              He.disconnect()
            }
          }), []), (0, ye.useEffect)((() => {
            var ee;
            if ("playing" !== He) return;
            let ye = !1;
            const Me = new xi.g[ie](Li[ie], (ee => {
              ye = !0, Je(!1), be(ee ? "succeeded" : "failed")
            }), (() => {}));
            ke.current = Me;
            let Ke = 0,
              Ue = performance.now(),
              Fe = requestAnimationFrame((function ee(ie) {
                for (Ke += Math.min(.25, (ie - Ue) / 1e3), Ue = ie; Ke >= KH && !ye;) Ke -= KH, Me.handleTick(KH);
                for (const He of qe.current) He();
                ye || (Fe = requestAnimationFrame(ee))
              }));
            return null === (ee = oe.current) || void 0 === ee || ee.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Fe), Me.tearDown(), ke.current = null, Te.current = !1
            }
          }), [He, ie]), (0, ye.useEffect)((() => {
            if (Fe) return;
            const ee = setTimeout((() => {
              Je(!0)
            }), UH);
            return () => {
              clearTimeout(ee)
            }
          }), [Fe]);
          const Be = ee => {
            var ie;
            "playing" === He && Te.current !== ee && (Te.current = ee, null === (ie = ke.current) || void 0 === ie || ie.handleMouseInput(ee))
          };
          return (0, fe.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, fe.jsxs)("div", {
              ref: oe,
              className: Me()("DocsQteStage", {
                Playing: "playing" === He
              }),
              tabIndex: "playing" === He ? 0 : -1,
              role: "playing" === He ? "button" : void 0,
              "aria-label": "playing" === He ? `${ie} quick time event: click or press Space` : void 0,
              onPointerDown: ee => {
                0 === ee.button && Be(!0)
              },
              onPointerUp: () => {
                Be(!1)
              },
              onPointerLeave: () => {
                Be(!1)
              },
              onPointerCancel: () => {
                Be(!1)
              },
              onKeyDown: ee => {
                "playing" !== He || " " !== ee.key && "Enter" !== ee.key || (ee.preventDefault(), Be(!0))
              },
              onKeyUp: ee => {
                "playing" !== He || " " !== ee.key && "Enter" !== ee.key || Be(!1)
              },
              children: [(0, fe.jsx)("div", {
                ref: Re,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Ke})`
                },
                children: "playing" === He && (0, fe.jsx)(ci.d.Provider, {
                  value: ze,
                  children: (0, fe.jsx)(ai.e, {
                    qte: {
                      type: ie,
                      parameters: Li[ie]
                    }
                  })
                })
              }), "playing" !== He && (0, fe.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== He && (0, fe.jsxs)("div", {
                  className: Me()("DocsQteResult", "succeeded" === He ? "Succeeded" : "Failed"),
                  children: [(0, fe.jsx)(pe, {
                    name: "succeeded" === He ? "check" : "cross",
                    isTinted: !0
                  }), (0, fe.jsx)("span", {
                    children: "succeeded" === He ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, fe.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Fe,
                  onClick: () => {
                    be("playing")
                  },
                  children: [(0, fe.jsx)(pe, {
                    name: "ready" === He ? "play" : "replay"
                  }), (0, fe.jsx)("span", {
                    children: "ready" === He ? `Try ${ie}` : "Play again"
                  })]
                })]
              })]
            }), Xe && !ui(Xe) && (0, fe.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, fe.jsx)("code", {
                children: Xe
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function RH(ee) {
          let {
            level: ie,
            text: He,
            anchor: ye,
            className: be
          } = ee;
          const Ke = `h${Math.min(ie,6)}`;
          return (0, fe.jsxs)(Ke, {
                id: ye,
                className: Me()("DocsHeading", be),
                children: [(0, fe.jsx)(di, {
                      text: He
                    }), (0, fe.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${ye}`,
                        "aria-label": `Link to ${He.replace(/`/g,"")}`,children:"#"})]})}function kH(ee){let{items:ie,ordered:He}=ee;const ye=He?"ol":"ul";return(0,fe.jsx)(ye,{className:"DocsList",children:ie.map(((ee,ie)=>(0,fe.jsxs)("li",{children:[(0,fe.jsx)(di,{text:ee.text}),ee.children.length>0&&(0,fe.jsx)(kH,{items:ee.children,ordered:He})]},ie)))})}function qH(ee){const ie=ee[0],He="paragraph"===(null===ie||void 0===ie?void 0:ie.kind)?ie.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(He)?"warning":/^\*\*(tip|prefer)/.test(He)?"tip":"note"}function fH(ee){let{block:ie}=ee;switch(ie.kind){case"heading":return(0,fe.jsx)(RH,{level:ie.level,text:ie.text,anchor:ie.anchor});case"paragraph":return(0,fe.jsx)("p",{children:(0,fe.jsx)(di,{text:ie.text})});case"code":{const ee="ts"===ie.lang?function(ee){const ie=ee.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return ie&&Object.hasOwn(Li,ie[1])?ie[1]:null}(ie.code):null;return(0,fe.jsxs)(fe.Fragment,{children:[(0,fe.jsx)(de,{code:ie.code,lang:ie.lang}),ee&&(0,fe.jsx)(oH,{type:ee})]})}case"table":return(0,fe.jsx)("div",{className:"DocsTableScroll",children:(0,fe.jsxs)("table",{className:"DocsTable",children:[(0,fe.jsx)("thead",{children:(0,fe.jsx)("tr",{children:ie.header.map(((ee,ie)=>(0,fe.jsx)("th",{children:(0,fe.jsx)(di,{text:ee})},ie)))})}),(0,fe.jsx)("tbody",{children:ie.rows.map(((ee,ie)=>(0,fe.jsx)("tr",{children:ee.map(((ee,ie)=>(0,fe.jsx)("td",{children:(0,fe.jsx)(di,{text:ee})},ie)))},ie)))})]})});case"list":return(0,fe.jsx)(kH,{items:ie.items,ordered:ie.ordered});case"quote":return(0,fe.jsx)("aside",{className:Me()("DocsCallout",qH(ie.blocks)),children:(0,fe.jsx)(TH,{blocks:ie.blocks})});case"rule":return(0,fe.jsx)("hr",{className:"DocsRule"})}}function TH(ee){let{blocks:ie}=ee;return(0,fe.jsx)(fe.Fragment,{children:ie.map(((ee,ie)=>(0,fe.jsx)(fH,{block:ee},ie)))})}var pH=He(5226),XH=He(5234);function zH(ee){return"blocks"===ee||"items"===ee}const BH=new Map;function EH(ee){let ie=BH.get(ee);return ie||(ie=function(ee){const ie={entries:[],legend:[],notes:[],examples:[]};let He=!1;for(const Me of ee.split(/\r?\n/).slice(1)){if(Me.startsWith("#")){const ee=Me.replace(/^# ?/,""),ye=ee.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);ye?ie.legend.push({code:ye[1],meaning:ye[2],usage:ye[3].trim()}):/^Examples:/.test(ee.trim())?He=!0:He&&ee.trim()?ie.examples.push(ee.trim()):ee.trim()&&!/^\s/.test(ee)&&ie.notes.push(ee.trim());continue}const ee=Me.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var ye,be;ee&&ie.entries.push({name:ee[1],variants:null!==(ye=null===(be=ee[2])||void 0===be?void 0:be.split(","))&&void 0!==ye?ye:[]})}return ie}("blocks"===ee?pH:XH),BH.set(ee,ie)),ie}function gH(ee){let{className:ie,value:He,placeholder:ye,label:be,onChange:Me,count:Ke,children:Ue}=ee;return(0,fe.jsxs)("div",{className:ie,children:[(0,fe.jsx)(pe,{name:"magnifying-glass"}),(0,fe.jsx)("input",{type:"search",value:He,placeholder:ye,"aria-label":be,onChange:ee=>{Me(ee.target.value)}}),Ue,Ke&&(0,fe.jsxs)("span",{className:"DocsFilterCount",children:[Ke.visible," of ",Ke.total]})]})}var OH=He(1323);function dH(ee){const ie=ee.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return ie?ie[2]:null}function WH(ee){return"paragraph"===ee.kind&&""===ee.text.trim()}function tH(ee){const ie={name:ee.heading.text,description:[],params:[],returns:null};let He="description";for(const be of ee.blocks)if(!WH(be))if("heading"===be.kind&&/^Parameters:?$/.test(be.text))He="params";else if("heading"===be.kind&&/^Returns:?$/.test(be.text))He="returns",ie.returns={type:"",description:[]};else if("params"!==He||"table"!==be.kind){if("returns"===He&&"paragraph"===be.kind&&""===ie.returns.type){const ee=dH(be.text);if(null!==ee){ie.returns.type=ee.replaceAll("\\|","|");continue}}"returns"===He?ie.returns.description.push(be):ie.description.push(be)}else for(const[ee,He,Me]of be.rows){var ye;ie.params.push({name:ee,type:null!==(ye=dH(He))&&void 0!==ye?ye:He,description:null!==Me&&void 0!==Me?Me:""})}return ie}const ZH=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function wH(ee){return ee.filter((ee=>!WH(ee)))}const DH=/^[\w][\w .'&!:()-]*$/,PH=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function AH(ee){var ie;if("code"===ee.kind&&"text"===ee.lang){const ie=ee.code.split("\n").map((ee=>ee.trim())).filter(Boolean);return ie.length>0&&ie.every((ee=>DH.test(ee)))?ie.map((ee=>({name:ee}))):null}return"paragraph"===ee.kind&&PH.test(ee.text.trim())?[...ee.text.matchAll(/`([ ^ `]+)` / g)].flatMap((ee => ee[1].split(/,\s*/).map((ee => ({
                              name: ee.trim()
                            }))))): "table" === ee.kind && null !== (ie = ee.header[0]) && void 0 !== ie && ie.startsWith("Song") ? ee.rows.map((ee => {
                              let [ie, He] = ee;
                              return {
                                name: ie.replace(/`/g, ""),
                                caption: He
                              }
                            })) : null
                          }

                          function YH(ee) {
                            const ie = [];
                            for (const He of ee) {
                              const ee = AH(He),
                                ye = ie.at(-1),
                                be = "table" === He.kind;
                              ee ? "names" === (null === ye || void 0 === ye ? void 0 : ye.kind) && ye.isSongs === be ? ye.names.push(...ee) : ie.push({
                                kind: "names",
                                names: ee,
                                isSongs: be
                              }) : ie.push({
                                kind: "block",
                                block: He
                              })
                            }
                            return ie
                          }
                          const VH = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function aH(ee, ie) {
                            return `${VH[ee]}-${(0,We.t)(ie)}`
                          }
                          const cH = new WeakMap;

                          function xH(ee, ie, He) {
                            let ye = cH.get(ie);
                            if (!ye) {
                              ye = new Map;
                              const He = new Set;
                              for (const be of (0, We.x)(ie)) {
                                const ie = YH(wH(be.blocks)).map((ie => {
                                  if ("block" === ie.kind) return ie;
                                  return {
                                    kind: "names",
                                    names: ie.names.map((ie => {
                                      var ye, Me;
                                      const Ke = aH(ee, ie.name);
                                      let Ue = Ke;
                                      for (let ee = 2; He.has(Ue); ee++) Ue = `${Ke}-${ee}`;
                                      return He.add(Ue), {
                                        ...ie,
                                        anchor: Ue,
                                        heading: null !== (ye = null === (Me = be.heading) || void 0 === Me ? void 0 : Me.text) && void 0 !== ye ? ye : ""
                                      }
                                    })),
                                    isSongs: ie.isSongs
                                  }
                                }));
                                ye.set(be.blocks, ie)
                              }
                              cH.set(ie, ye)
                            }
                            const be = ye.get(He);
                            if (!be) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return be
                          }
                          const LH = "/textures/docs/skinPreviews",
                            CH = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var vH = He(4582),
                            uH = He(4598);

                          function mH(ee) {
                            return Object.hasOwn(vH.f, ee) ? vH.f[ee] : null
                          }
                          const lH = {
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
                            blendMode: uH.e.Standard
                          };

                          function SH(ee, ie, He) {
                            return ie + (He - ie) * ee()
                          }

                          function nH(ee, ie, He) {
                            return ee + (ie - ee) * He
                          }

                          function jH(ee) {
                            return ee.length > 0 && "timeFraction" in ee[0]
                          }

                          function sH(ee, ie) {
                            if (0 === ee.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!jH(ee.colorGradients)) {
                              const He = ee.colorGradients,
                                {
                                  color: ye
                                } = He[Math.floor(ie() * He.length) % He.length];
                              return [{
                                at: 0,
                                colour: [ye[0] / 255, ye[1] / 255, ye[2] / 255, 1]
                              }]
                            }
                            return [...ee.colorGradients].sort(((ee, ie) => ee.timeFraction - ie.timeFraction)).map((ee => {
                              var He, ye, be;
                              const Me = ee.minColor,
                                Ke = null !== (He = ee.maxColor) && void 0 !== He ? He : Me,
                                Ue = ie(),
                                Fe = [nH(Me[0], Ke[0], Ue) / 255, nH(Me[1], Ke[1], Ue) / 255, nH(Me[2], Ke[2], Ue) / 255, nH(null !== (ye = Me[3]) && void 0 !== ye ? ye : 1, null !== (be = Ke[3]) && void 0 !== be ? be : 1, Ue)];
                              return {
                                at: ee.timeFraction,
                                colour: Fe
                              }
                            }))
                          }

                          function IH(ee, ie, He, ye) {
                            const be = SH(ye, ee.minEmitPower, ee.maxEmitPower),
                              Me = ie => SH(ye, Math.min(ee.dir1[ie], ee.dir2[ie]), Math.max(ee.dir1[ie], ee.dir2[ie])) * be,
                              Ke = [...ee.velocityGradients].sort(((ee, ie) => ee.timeFraction - ie.timeFraction)).map((ee => ({
                                at: ee.timeFraction,
                                factor: SH(ye, ee.factor, ee.factor2)
                              })));
                            return {
                              pos: [SH(ye, ie[0], He[0]), SH(ye, ie[1], He[1]), SH(ye, ie[2], He[2])],
                              dir: [Me(0), Me(1), Me(2)],
                              age: 0,
                              life: SH(ye, ee.minLifeTime, ee.maxLifeTime),
                              size: SH(ye, ee.minSize, ee.maxSize),
                              colours: sH(ee, ye),
                              velocityFactors: Ke
                            }
                          }

                          function hH(ee, ie, He, ye) {
                            if (ie < ee[0].at) return He(Math.min(1, ee.length - 1));
                            for (let be = 0; be < ee.length - 1; be++)
                              if (ie <= ee[be + 1].at) {
                                const Me = ee[be + 1].at - ee[be].at;
                                return ye(He(be), He(be + 1), Me > 0 ? (ie - ee[be].at) / Me : 1)
                              } return He(ee.length - 1)
                          }

                          function NH(ee) {
                            return hH(ee.colours, ee.age / ee.life, (ie => ee.colours[ie].colour), ((ee, ie, He) => [nH(ee[0], ie[0], He), nH(ee[1], ie[1], He), nH(ee[2], ie[2], He), nH(ee[3], ie[3], He)]))
                          }

                          function GH(ee, ie, He) {
                            if (ee.age += He, ee.age >= ee.life) return !1;
                            const ye = function(ee) {
                              return 0 === ee.velocityFactors.length ? 1 : hH(ee.velocityFactors, ee.age / ee.life, (ie => ee.velocityFactors[ie].factor), nH)
                            }(ee) * He;
                            for (let Me = 0; Me < 3; Me++) {
                              var be;
                              ee.pos[Me] += ee.dir[Me] * ye, ee.dir[Me] += (null !== (be = ie[Me]) && void 0 !== be ? be : 0) * He
                            }
                            return !0
                          }

                          function rH(ee) {
                            return String(Math.round(1e6 * ee) / 1e6)
                          }

                          function QH(ee) {
                            return `[${ee.map(rH).join(", ")}]`
                          }

                          function ey(ee, ie) {
                            const He = `${ie}    `;
                            return `[\n${(jH(ee)?ee.map((ee=>{const ie=[`${He}    timeFraction: ${rH(ee.timeFraction)},`,`${He}    minColor: ${QH(ee.minColor)},`];return ee.maxColor&&ie.push(`${He}    maxColor: ${QH(ee.maxColor)},`),`${He}{\n${ie.join("\n")}\n${He}},`})):ee.map((ee=>`
                            $ {
                              He
                            } {
                              color: $ {
                                QH(ee.color)
                              }
                            }, `))).join("\n")}\n${ie}]`
                          }
                          const iy = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            Hy = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const yy = .6;

                          function by(ee, ie) {
                            return `${ie?"song":"sound"}:${ee}`
                          }
                          let My = {
                              track: null,
                              volume: yy
                            },
                            Ky = null,
                            Uy = 0,
                            Fy = 0;
                          const Jy = new Set;

                          function oy(ee) {
                            My = {
                              ...My,
                              ...ee
                            }, Jy.forEach((ee => {
                              ee()
                            }))
                          }

                          function Ry(ee) {
                            My.track && oy({
                              track: {
                                ...My.track,
                                ...ee
                              }
                            })
                          }

                          function ky(ee) {
                            const [ie, He] = (0, ye.useState)((() => ee(My))), be = (0, ye.useRef)(ee);
                            return be.current = ee, (0, ye.useEffect)((() => {
                              const ee = () => {
                                He((() => be.current(My)))
                              };
                              return Jy.add(ee), ee(), () => {
                                Jy.delete(ee)
                              }
                            }), []), ie
                          }

                          function qy() {
                            Uy++;
                            const ee = Ky;
                            Ky = null, null === ee || void 0 === ee || ee.stop()
                          }

                          function fy(ee, ie) {
                            let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            qy();
                            const be = Uy,
                              {
                                track: Me
                              } = My,
                              Ke = Me && Me.name === ee && Me.isSong === ie ? Me.duration : 0;
                            Fy = ye, oy({
                              track: {
                                name: ee,
                                isSong: ie,
                                status: "loading",
                                duration: Ke
                              }
                            }), Promise.all([He.e(249), He.e(278)]).then((() => He(40891))).then((He => {
                              let {
                                playDocsSound: Me
                              } = He;
                              be === Uy && (Ky = Me(ee, ie, My.volume, ye, {
                                onPlay: ee => {
                                  be === Uy && Ry({
                                    status: "playing",
                                    duration: ee
                                  })
                                },
                                onEnd: ee => {
                                  var ie, He;
                                  be === Uy && (Ky = null, ee ? oy({
                                    track: null
                                  }) : (Fy = null !== (ie = null === (He = My.track) || void 0 === He ? void 0 : He.duration) && void 0 !== ie ? ie : 0, Ry({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((ie => {
                              console.error(`Could not play docs sound ${ee}`, ie), be === Uy && oy({
                                track: null
                              })
                            }))
                          }

                          function Ty() {
                            const {
                              track: ee
                            } = My;
                            if (!ee) return;
                            if ("playing" === ee.status && Ky) return Fy = Ky.pE(), Ky.pause(), void Ry({
                              status: "paused"
                            });
                            if ("loading" === ee.status) return qy(), void Ry({
                              status: "paused"
                            });
                            if (Ky) return void Ky.resume();
                            const ie = ee.duration > 0 && Fy >= ee.duration - .05;
                            fy(ee.name, ee.isSong, ie ? 0 : Fy)
                          }

                          function py() {
                            var ee;
                            return Ky && "playing" === (null === (ee = My.track) || void 0 === ee ? void 0 : ee.status) ? Ky.pE() : Fy
                          }

                          function Xy(ee) {
                            var ie;
                            null === (ie = Ky) || void 0 === ie || ie.setVolume(ee), oy({
                              volume: ee
                            })
                          }

                          function zy() {
                            qy(), Fy = 0, oy({
                              track: null
                            })
                          }
                          const By = (0, ye.createContext)(null);
                          let Ey = null;

                          function gy() {
                            const [ee, ie] = (0, ye.useState)(null);
                            return (0, ye.useEffect)((() => {
                              let ee = !1;
                              return Ey ??= Promise.all([He.e(84), He.e(87), He.e(85), He.e(86), He.e(204), He.e(35), He.e(253)]).then((() => He(40888))), Ey.then((He => {
                                ee || ie(He)
                              }), (ee => {
                                console.error("Could not load the docs gallery's textures", ee), Ey = null
                              })), () => {
                                ee = !0
                              }
                            }), []), ee
                          }
                          const Oy = 24,
                            dy = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function Wy(ee, ie) {
                            const He = "skins" === ee ? function(ee, ie) {
                              const He = CH.find((ie => ee.startsWith(ie.heading)));
                              return He ? function(ee, ie) {
                                return `${ee}-${ie}`
                              }(He.prefix, ie) : null
                            }(ie.heading, ie.name) : null;
                            return null === He ? null : `${LH}/${He}.webp`
                          }

                          function ty(ee) {
                            let {
                              kind: ie,
                              entry: He,
                              assets: be,
                              renderedUrl: Ke
                            } = ee;
                            const {
                              name: Ue
                            } = He, [Fe, Je] = (0, ye.useState)(!1);
                            if ("icons" === ie && ui(Ue)) return (0, fe.jsx)(OH.e, {
                              className: "DocsTileIcon",
                              name: Ue
                            });
                            let oe = null;
                            var Re;
                            if ("icons" === ie) oe = null !== (Re = null === be || void 0 === be ? void 0 : be.getIngameIconUrl(Ue)) && void 0 !== Re ? Re : null;
                            else if ("particles" === ie) {
                              var ke, qe, Te;
                              oe = null !== (ke = null === be || void 0 === be ? void 0 : be.getParticleTextureUrl(null !== (qe = null === (Te = mH(Ue)) || void 0 === Te ? void 0 : Te.texture) && void 0 !== qe ? qe : Ue)) && void 0 !== ke ? ke : null
                            } else "skins" === ie && (oe = null !== Ke && void 0 !== Ke ? Ke : dy.test(Ue) ? `/textures/charSkins/previews/${Ue}_preview.png` : null);
                            return !oe || Fe ? (0, fe.jsx)(pe, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === ie ? "person" : "image"
                            }) : (0, fe.jsx)("img", {
                              className: Me()("DocsTileImage", {
                                Pixelated: "skins" !== ie
                              }),
                              src: oe,
                              srcSet: oe === Ke ? `${oe} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${oe}`), Je(!0)
                              }
                            })
                          }

                          function Zy(ee) {
                            let {
                              entry: ie,
                              isSong: He
                            } = ee;
                            const ye = ky((ee => {
                                let {
                                  track: ye
                                } = ee;
                                return (null === ye || void 0 === ye ? void 0 : ye.name) === ie.name && ye.isSong === He ? ye.status : null
                              })),
                              be = null !== ye && "paused" !== ye;
                            return (0, fe.jsxs)("button", {
                              type: "button",
                              id: ie.anchor,
                              className: Me()("DocsSoundTile", {
                                Playing: be
                              }),
                              "data-docs-track": by(ie.name, He),
                              "aria-label": be ? `Pause ${ie.name}` : `Play ${ie.name}`,
                              onClick: () => {
                                null !== ye ? Ty() : fy(ie.name, He)
                              },
                              children: [(0, fe.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, fe.jsx)(pe, {
                                  name: be ? "pause" : "play"
                                })
                              }), (0, fe.jsx)("code", {
                                className: "DocsSoundName",
                                children: ie.name
                              }), ie.caption && (0, fe.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: ie.caption
                              })]
                            })
                          }

                          function wy(ee) {
                            let {
                              kind: ie,
                              names: He,
                              isSongs: be
                            } = ee;
                            const Ke = gy(),
                              [Ue, Fe] = ze(),
                              Je = !1 === (null === Ue || void 0 === Ue ? void 0 : Ue.failed) ? Ue.text : null,
                              oe = (0, ye.useContext)(By),
                              [Re, ke] = (0, ye.useState)(""),
                              qe = Re.trim().toLowerCase(),
                              Te = qe ? He.filter((ee => ee.name.toLowerCase().includes(qe))) : He;
                            return (0, fe.jsxs)("div", {
                              className: "DocsGallery",
                              children: [He.length > Oy && (0, fe.jsx)(gH, {
                                className: "DocsGalleryFilter",
                                value: Re,
                                placeholder: `Filter ${He.length} names\u2026`,
                                label: "Filter names",
                                onChange: ke,
                                count: qe ? {
                                  visible: Te.length,
                                  total: He.length
                                } : null
                              }), (0, fe.jsx)("div", {
                                className: Me()("DocsGalleryGrid", `Kind-${ie}`, {
                                  Songs: be
                                }),
                                children: Te.map((ee => {
                                  if ("sounds" === ie) return (0, fe.jsx)(Zy, {
                                    entry: ee,
                                    isSong: be
                                  }, ee.anchor);
                                  if (oe && "particles" === ie && mH(ee.name)) return (0, fe.jsxs)("button", {
                                    type: "button",
                                    id: ee.anchor,
                                    className: Me()("DocsTile Previewable", {
                                      Copied: Je === ee.name
                                    }),
                                    title: `Play "${ee.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      oe(ee.name), Fe(ee.name)
                                    },
                                    children: [(0, fe.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, fe.jsx)(ty, {
                                        kind: ie,
                                        entry: ee,
                                        assets: Ke,
                                        renderedUrl: null
                                      }), (0, fe.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, fe.jsx)(pe, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, fe.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Je === ee.name ? "Copied!" : ee.name
                                    })]
                                  }, ee.anchor);
                                  const He = Wy(ie, ee);
                                  return (0, fe.jsxs)("button", {
                                    type: "button",
                                    id: ee.anchor,
                                    className: Me()("DocsTile", {
                                      Copied: Je === ee.name
                                    }),
                                    title: `Copy "${ee.name}"`,
                                    onClick: () => {
                                      Fe(ee.name)
                                    },
                                    children: [(0, fe.jsx)("span", {
                                      className: Me()("DocsTilePreview", {
                                        Rendered: null !== He
                                      }),
                                      children: (0, fe.jsx)(ty, {
                                        kind: ie,
                                        entry: ee,
                                        assets: Ke,
                                        renderedUrl: He
                                      })
                                    }), (0, fe.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Je === ee.name ? "Copied!" : ee.name
                                    })]
                                  }, ee.anchor)
                                }))
                              })]
                            })
                          }

                          function Dy(ee) {
                            let {
                              kind: ie,
                              content: He,
                              blocks: ye
                            } = ee;
                            return (0, fe.jsx)(fe.Fragment, {
                              children: xH(ie, He, ye).map(((ee, He) => "block" === ee.kind ? (0, fe.jsx)(fH, {
                                block: ee.block
                              }, He) : (0, fe.jsx)(wy, {
                                kind: ie,
                                names: ee.names,
                                isSongs: ee.isSongs
                              }, He)))
                            })
                          }
                          const Py = [{
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

                          function Ay(ee) {
                            let {
                              cards: ie = Py,
                              label: He = "Start here"
                            } = ee;
                            const be = (0, ye.useContext)(qi);
                            return (0, fe.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": He,
                              children: ie.map((ee => {
                                let {
                                  pageId: ie,
                                  countNoun: He
                                } = ee;
                                const ye = Ce(ie);
                                return (0, fe.jsxs)(Ke.e, {
                                  to: ne(be, ye),
                                  className: "DocsLandingCard",
                                  children: [(0, fe.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, fe.jsx)(pe, {
                                      name: ye.icon
                                    })
                                  }), (0, fe.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: ye.title
                                  }), (0, fe.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: ye.summary
                                  }), He && (0, fe.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [ue(ye).sections.length, " ", He]
                                  })]
                                }, ie)
                              }))
                            })
                          }
                          const Yy = 240;

                          function Vy(ee) {
                            let {
                              faces: ie
                            } = ee;
                            return (0, fe.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, fe.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${ie.top}")`
                                }
                              }), (0, fe.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${ie.left}")`
                                }
                              }), (0, fe.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${ie.right}")`
                                }
                              })]
                            })
                          }

                          function ay(ee) {
                            let {
                              src: ie
                            } = ee;
                            const [He, be] = (0, ye.useState)(!1);
                            return He ? null : (0, fe.jsx)("img", {
                              src: ie,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${ie}`), be(!0)
                              }
                            })
                          }

                          function cy(ee) {
                            let {
                              kind: ie
                            } = ee;
                            const He = EH(ie),
                              be = gy(),
                              Ke = (0, Ue.u)(),
                              [Fe, Je] = (0, ye.useState)(""),
                              [oe, Re] = (0, ye.useState)(null),
                              [ke, qe] = (0, ye.useState)(Yy),
                              [Te, Xe] = (0, ye.useState)(null),
                              ze = (0, ye.useRef)(null),
                              Ee = Fe.trim().toLowerCase();
                            (0, ye.useEffect)((() => {
                              const ee = (0, We.q)(Ke.hash),
                                ye = He.entries.find((He => aH(ie, He.name) === ee));
                              if (ye) ze.current = ye.name, Je(ye.name), Re(null), Xe(ye.name);
                              else if (null !== ze.current) {
                                const ee = ze.current;
                                ze.current = null, Je((ie => ie === ee ? "" : ie)), Xe(null)
                              }
                            }), [He, ie, Ke.hash, Ke.key]), (0, ye.useEffect)((() => {
                              var ee;
                              null !== Te && (null === (ee = document.getElementById(aH(ie, Te))) || void 0 === ee || ee.scrollIntoView({
                                block: "center"
                              }))
                            }), [ie, Te]);
                            const ge = He.entries.filter((ee => (!Ee || ee.name.toLowerCase().includes(Ee)) && (!oe || ee.variants.includes(oe))));
                            return (0, fe.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [He.notes.length > 0 && (0, fe.jsx)("div", {
                                className: "DocsProse",
                                children: He.notes.map((ee => (0, fe.jsx)("p", {
                                  children: ee
                                }, ee)))
                              }), He.legend.length > 0 && (0, fe.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, fe.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, fe.jsx)("thead", {
                                    children: (0, fe.jsxs)("tr", {
                                      children: [(0, fe.jsx)("th", {
                                        children: "Code"
                                      }), (0, fe.jsx)("th", {
                                        children: "Variant"
                                      }), (0, fe.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, fe.jsx)("tbody", {
                                    children: He.legend.map((ee => (0, fe.jsxs)("tr", {
                                      children: [(0, fe.jsx)("td", {
                                        children: (0, fe.jsx)("button", {
                                          type: "button",
                                          className: Me()("DocsVariantChip", {
                                            Active: oe === ee.code
                                          }),
                                          "aria-pressed": oe === ee.code,
                                          title: `Show only ${ie} with ${ee.meaning} variants`,
                                          onClick: () => {
                                            Re(oe === ee.code ? null : ee.code)
                                          },
                                          children: ee.code
                                        })
                                      }), (0, fe.jsx)("td", {
                                        children: ee.meaning
                                      }), (0, fe.jsx)("td", {
                                        children: (0, fe.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: ee.usage
                                        })
                                      })]
                                    }, ee.code)))
                                  })]
                                })
                              }), He.examples.length > 0 && (0, fe.jsx)(de, {
                                lang: "text",
                                code: He.examples.join("\n")
                              }), (0, fe.jsx)(gH, {
                                className: "DocsFilterBar",
                                value: Fe,
                                placeholder: `Search ${He.entries.length} ${ie}\u2026`,
                                label: `Search ${ie}`,
                                onChange: ee => {
                                  Je(ee), qe(Yy)
                                },
                                count: Ee || oe ? {
                                  visible: ge.length,
                                  total: He.entries.length
                                } : null,
                                children: oe && (0, fe.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Re(null)
                                  },
                                  children: [oe, " ", (0, fe.jsx)(pe, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, fe.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: ge.slice(0, ke).map((ee => {
                                  const He = "blocks" === ie ? null === be || void 0 === be ? void 0 : be.getBlockFaces(ee.name) : null,
                                    ye = be && !He ? be.getItemTextureUrl(ee.name) : null;
                                  return (0, fe.jsxs)("div", {
                                    id: aH(ie, ee.name),
                                    className: Me()("DocsCatalogueTile", {
                                      Linked: ee.name === Te
                                    }),
                                    children: [(0, fe.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [He && (0, fe.jsx)(Vy, {
                                        faces: He
                                      }), ye && (0, fe.jsx)(ay, {
                                        src: ye
                                      })]
                                    }), (0, fe.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: ee.name
                                    }), ee.variants.length > 0 && (0, fe.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: ee.variants.map((ee => (0, fe.jsx)("span", {
                                        children: ee
                                      }, ee)))
                                    }), (0, fe.jsx)(Be, {
                                      text: ee.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, ee.name)
                                }))
                              }), ge.length > ke && (0, fe.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  qe(ge.length)
                                },
                                children: ["Show all ", ge.length]
                              }), 0 === ge.length && (0, fe.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", ie, " match."]
                              })]
                            })
                          }
                          var xy = He(5294),
                            Ly = He(1585);
                          const Cy = .95 * xy.e;

                          function vy(ee) {
                            return /^\s*```/.test(ee)
                          }

                          function uy(ee, ie) {
                            const He = [
                              []
                            ];
                            let ye = !1;
                            for (const be of ee.split("\n")) !ye && ie(be) && He.at(-1).length > 0 && He.push([]), vy(be) && (ye = !ye), He.at(-1).push(be);
                            return He.map((ee => ee.join("\n").trim())).filter(Boolean)
                          }

                          function my(ee, ie) {
                            const He = `${"#".repeat(ie)} `,
                              ye = [];
                            let be = !1;
                            for (const Me of ee.split("\n")) vy(Me) ? be = !be : !be && Me.startsWith(He) && ye.push(Me.slice(He.length).trim());
                            return ye
                          }

                          function ly(ee) {
                            return ee.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class Sy {
                            constructor(ee, ie) {
                              this.origin = ie, this.pages = void 0, this.partPaths = new Map;
                              const He = ee.map((ee => {
                                const ie = ie => this.resolveLinks(ee, ie).length,
                                  He = function(ee, ie) {
                                    const He = ee.map((ee => ie(ee.markdown) + 2)),
                                      ye = He.reduce(((ee, ie) => ee + ie), 0),
                                      be = ye / Math.ceil(ye / Cy),
                                      Me = [];
                                    let Ke = 0;
                                    return ee.forEach(((ee, ie) => {
                                      const ye = He[ie];
                                      (0 === Me.length || Ke + ye > Cy || Ke + ye / 2 > be) && (Me.push([]), Ke = 0), Me.at(-1).push(ee), Ke += ye
                                    })), Me
                                  }(function(ee, ie) {
                                    return uy(ee, (ee => ee.startsWith("## "))).flatMap((ee => {
                                      var He;
                                      const ye = null !== (He = my(ee, 2)[0]) && void 0 !== He ? He : "";
                                      if (ie(ee) <= Cy) return [{
                                        markdown: ee,
                                        section: ye
                                      }];
                                      let be = !1,
                                        Me = "";
                                      return uy(ee, (ee => {
                                        const ie = be && "" !== ee.trim();
                                        return be = "" === ee.trim(), ie
                                      })).map((ee => {
                                        var ie;
                                        const He = my(ee, 3),
                                          be = ee.startsWith("### ") ? He[0] : Me;
                                        return Me = null !== (ie = He.at(-1)) && void 0 !== ie ? ie : Me, {
                                          markdown: ee,
                                          section: ye || be
                                        }
                                      }))
                                    }))
                                  }(ly(ee), ie), ie);
                                return {
                                  page: ee,
                                  groups: He.length > 1 ? He : []
                                }
                              }));
                              for (const {
                                  page: ye,
                                  groups: be
                                }
                                of He) be.forEach(((ee, ie) => {
                                const He = (0, xy.B)(ye.slug, ie);
                                for (const be of ee.flatMap((ee => [...my(ee.markdown, 2), ...my(ee.markdown, 3)]))) {
                                  const ee = `${ye.id}#${(0,We.t)(be)}`;
                                  this.partPaths.has(ee) || this.partPaths.set(ee, He)
                                }
                              }));
                              this.pages = He.map((ee => {
                                let {
                                  page: ie,
                                  groups: He
                                } = ee;
                                return {
                                  page: ie,
                                  path: (0, xy.z)(ie.slug),
                                  markdown: `# ${ie.title}\n\n${this.resolveLinks(ie,ly(ie))}\n`,
                                  parts: He.map(((ee, ye) => this.renderPart(ie, ee, ye, He.length)))
                                }
                              }))
                            }
                            url(ee) {
                              return `${this.origin}${ee}`
                            }
                            getPage(ee) {
                              return this.pages.find((ie => ie.page.id === ee))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((ee => (ee.parts.length > 0 ? ee.parts : [{
                                path: ee.path,
                                label: "",
                                markdown: ee.markdown
                              }]).filter((ee => ee.markdown.length > xy.e))))
                            }
                            markdownUrl(ee, ie) {
                              const He = ie && this.partPaths.get(`${ee.id}#${ie}`) || (0, xy.z)(ee.slug);
                              return this.url(ie ? `${He}#${ie}` : He)
                            }
                            resolveLinks(ee, ie) {
                              return ie.replace(/\]\((#[^)]+)\)/g, ((ie, He) => {
                                var ye;
                                const be = null !== (ye = le(He)) && void 0 !== ye ? ye : this.samePageTarget(ee, He);
                                return be ? `](${this.markdownUrl(be.page,be.anchor)})` : ie
                              }))
                            }
                            samePageTarget(ee, ie) {
                              const He = (0, We.t)(ie.slice(1));
                              return me(ee, He) ? {
                                page: ee,
                                anchor: He
                              } : null
                            }
                            renderPart(ee, ie, He, ye) {
                              const be = function(ee) {
                                  const ie = ee.map((ee => ee.section)).filter(Boolean);
                                  if (0 === ie.length) return "";
                                  const He = ie[0],
                                    ye = ie.at(-1);
                                  return He === ye ? He : `${He} to ${ye}`
                                }(ie),
                                Me = ie.map((ee => ee.markdown)).join("\n\n"),
                                Ke = be ? `It covers ${be}. ` : "",
                                Ue = `Part ${He+1} of ${ye} of [${ee.title}](${this.url((0,xy.z)(ee.slug))}). ${Ke}[llms.txt](${this.url(xy.k)}) lists every part.`;
                              return {
                                path: (0, xy.B)(ee.slug, He),
                                label: be,
                                markdown: `# ${ee.title}, part ${He+1} of ${ye}\n\n${Ue}\n\n${this.resolveLinks(ee,Me)}\n`
                              }
                            }
                            llmsTxt(ee) {
                              const ie = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${ny(xy.e)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const He of Le) {
                                ie.push("", `## ${He.title}`, "");
                                for (const ee of He.pageIds) {
                                  const He = this.getPage(ee),
                                    {
                                      page: ye,
                                      parts: be
                                    } = He,
                                    Me = `About ${ny(He.markdown.length)} tokens${be.length>0?`, in ${be.length} parts:`:"."}`;
                                  ie.push(`- [${ye.title}](${this.url(He.path)}): ${ye.summary} ${Me}`), be.forEach(((ee, He) => {
                                    ie.push(`  - [Part ${He+1}${ee.label?`: ${ee.label}`:""}](${this.url(ee.path)})`)
                                  }))
                                }
                              }
                              return ie.push("", "## Optional", "", `- [Every page in one file](${this.url(xy.h)}): About ${ny(ee.length)} tokens, for a model with a large context window.`, ""), ie.join("\n")
                            }
                            llmsFullTxt() {
                              return Le.flatMap((ee => ee.pageIds.map((ee => this.getPage(ee).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const ee = this.llmsFullTxt(),
                                ie = this.llmsTxt(ee),
                                He = new Map([
                                  [xy.r, ie],
                                  [xy.k, ie],
                                  [xy.h, ee]
                                ]);
                              for (const ye of this.pages) {
                                He.set(ye.path, ye.markdown);
                                for (const ee of ye.parts) He.set(ee.path, ee.markdown)
                              }
                              return He
                            }
                          }

                          function ny(ee) {
                            return `${Math.max(1,Math.round(ee/4e3))}K`
                          }
                          let jy = null;

                          function sy() {
                            return jy ??= new Sy(xe, Ly.b), jy
                          }
                          var Iy = He(5303);
                          const hy = [Iy.d, Iy.p];

                          function Ny(ee) {
                            return sy().getPage(ee.id).parts.length > 0 ? `Read ${xy.n}, then the parts of the Bloxd Code API's ${ee.title} page it lists, so I can ask questions about it.` : `Read ${Ly.b}${(0,xy.z)(ee.slug)} so I can ask questions about it. ${Iy.l}`
                          }

                          function Gy(ee) {
                            let {
                              page: ie
                            } = ee;
                            const [He, ye] = ze();
                            return (0, fe.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, fe.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  ye(sy().getPage(ie.id).markdown)
                                },
                                children: [(0, fe.jsx)(pe, {
                                  name: !1 === (null === He || void 0 === He ? void 0 : He.failed) ? "check" : "copy"
                                }), (0, fe.jsx)("span", {
                                  children: He ? He.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), hy.map((ee => (0, fe.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, Iy.b)(ee, Ny(ie)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, fe.jsx)(pe, {
                                  name: "external-link"
                                }), (0, fe.jsxs)("span", {
                                  children: ["Open in ", ee.name]
                                })]
                              }, ee.name)))]
                            })
                          }

                          function ry(ee) {
                            return `#${[0,1,2].map((ie=>Math.round(Math.min(255,Math.max(0,ee[ie]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function Qy(ee) {
                            return [parseInt(ee.slice(1, 3), 16), parseInt(ee.slice(3, 5), 16), parseInt(ee.slice(5, 7), 16)]
                          }

                          function eb(ee) {
                            let {
                              label: ie,
                              min: He,
                              max: ye,
                              step: be,
                              low: Me,
                              high: Ke,
                              onChange: Ue
                            } = ee;
                            return (0, fe.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, fe.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, fe.jsx)("span", {
                                  children: ie
                                }), (0, fe.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Me === Ke ? Me : `${Me}\u2013${Ke}`
                                })]
                              }), (0, fe.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, fe.jsx)("input", {
                                  type: "range",
                                  min: He,
                                  max: ye,
                                  step: be,
                                  value: Math.min(ye, Me),
                                  "aria-label": `Minimum ${ie.toLowerCase()}`,
                                  onChange: ee => {
                                    const ie = Number(ee.target.value);
                                    Ue(ie, Math.max(ie, Ke))
                                  }
                                }), (0, fe.jsx)("input", {
                                  type: "range",
                                  min: He,
                                  max: ye,
                                  step: be,
                                  value: Math.min(ye, Ke),
                                  "aria-label": `Maximum ${ie.toLowerCase()}`,
                                  onChange: ee => {
                                    const ie = Number(ee.target.value);
                                    Ue(Math.min(ie, Me), ie)
                                  }
                                })]
                              })]
                            })
                          }

                          function ib(ee) {
                            let {
                              label: ie,
                              min: He,
                              max: ye,
                              step: be,
                              value: Me,
                              onChange: Ke,
                              format: Ue = String
                            } = ee;
                            return (0, fe.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, fe.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, fe.jsx)("span", {
                                  children: ie
                                }), (0, fe.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Ue(Me)
                                })]
                              }), (0, fe.jsx)("input", {
                                type: "range",
                                min: He,
                                max: ye,
                                step: be,
                                value: Math.min(ye, Math.max(He, Me)),
                                "aria-label": ie,
                                onChange: ee => {
                                  Ke(Number(ee.target.value))
                                }
                              })]
                            })
                          }

                          function Hb(ee) {
                            let {
                              opts: ie,
                              onChange: He
                            } = ee;
                            const ye = ie.colorGradients;
                            if (!jH(ye)) return (0, fe.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, fe.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, fe.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, fe.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: ye.map(((ee, ie) => (0, fe.jsx)("input", {
                                  type: "color",
                                  value: ry(ee.color),
                                  "aria-label": `Colour ${ie+1}`,
                                  onChange: ee => {
                                    const be = [...ye];
                                    be[ie] = {
                                      color: Qy(ee.target.value)
                                    }, He(be)
                                  }
                                }, ie)))
                              })]
                            });
                            const be = (ee, ie) => {
                              const be = [...ye];
                              be[ee] = ie, He(be)
                            };
                            return (0, fe.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, fe.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, fe.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, fe.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), ye.map(((ee, ie) => {
                                var He;
                                const ye = null !== (He = ee.maxColor) && void 0 !== He ? He : ee.minColor;
                                return (0, fe.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, fe.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * ee.timeFraction), "%"]
                                  }), (0, fe.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${ry(ee.minColor)}, ${ry(ye)})`
                                    }
                                  }), (0, fe.jsx)("input", {
                                    type: "color",
                                    value: ry(ee.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*ee.timeFraction)}%`,
                                    onChange: He => {
                                      be(ie, {
                                        ...ee,
                                        minColor: [...Qy(He.target.value), ee.minColor[3]]
                                      })
                                    }
                                  }), (0, fe.jsx)("input", {
                                    type: "color",
                                    value: ry(ye),
                                    "aria-label": `Maximum colour at ${Math.round(100*ee.timeFraction)}%`,
                                    onChange: He => {
                                      be(ie, {
                                        ...ee,
                                        maxColor: [...Qy(He.target.value), ye[3]]
                                      })
                                    }
                                  })]
                                }, ie)
                              }))]
                            })
                          }
                          const yb = [-.5, -.5, -.5],
                            bb = [.5, .5, .5],
                            Mb = [0, 1, 2, 3, 4, 5, 6, 7].map((ee => [1 & ee ? bb[0] : yb[0], 2 & ee ? bb[1] : yb[1], 4 & ee ? bb[2] : yb[2]]));class Kb {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(ee, ie, He, ye) {
                              const be = Math.round(31 * ie),
                                Me = Math.round(31 * He),
                                Ke = Math.round(31 * ye),
                                Ue = `${be}|${Me}|${Ke}`;
                              let Fe = this.tints.get(ee);
                              (!Fe || Fe.size > 2e3) && (Fe = new Map, this.tints.set(ee, Fe));
                              let Je = Fe.get(Ue);
                              if (Je) return Je;
                              Je = document.createElement("canvas"), Je.width = ee.naturalWidth || 16, Je.height = ee.naturalHeight || 16;
                              const oe = Je.getContext("2d");
                              return oe ? (oe.imageSmoothingEnabled = !1, oe.drawImage(ee, 0, 0, Je.width, Je.height), oe.globalCompositeOperation = "multiply", oe.fillStyle = `rgb(${be/31*255}, ${Me/31*255}, ${Ke/31*255})`, oe.fillRect(0, 0, Je.width, Je.height), oe.globalCompositeOperation = "destination-in", oe.drawImage(ee, 0, 0, Je.width, Je.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Fe.set(Ue, Je), Je
                            }
                          }

                          function Ub(ee) {
                            let {
                              opts: ie,
                              textureUrl: He,
                              burst: be,
                              paused: Me
                            } = ee;
                            const Ke = (0, ye.useRef)(null),
                              Ue = (0, ye.useRef)(ie);
                            Ue.current = ie;
                            const Fe = (0, ye.useRef)(Me);
                            Fe.current = Me;
                            const Je = (0, ye.useRef)(null),
                              oe = (0, ye.useRef)(null),
                              Re = (0, ye.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(ee) {
                                let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const He = [-.5, -.5, -.5],
                                  ye = [.5, .5, .5];
                                let be = .5;
                                for (let Me = 0; Me < 40; Me++) {
                                  const Me = IH(ee, He, ye, ie),
                                    Ke = Math.max(Me.life / 30, .001);
                                  for (; GH(Me, ee.gravity, Ke);) be = Math.max(be, Math.hypot(Me.pos[0], Me.pos[1], Me.pos[2]) + Me.size / 2)
                                }
                                return be
                              }(ie)))), [ie]),
                              ke = (0, ye.useRef)(Re);
                            return ke.current = Re, (0, ye.useEffect)((() => {
                              if (Je.current = null, !He) return;
                              const ee = new Image;
                              let ie = !1;
                              return ee.onload = () => {
                                ie || (Je.current = ee)
                              }, ee.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${He}`)
                              }, ee.src = He, () => {
                                ie = !0
                              }
                            }), [He]), (0, ye.useEffect)((() => {
                              var ee;
                              null === (ee = oe.current) || void 0 === ee || ee.call(oe)
                            }), [ie, be]), (0, ye.useEffect)((() => {
                              const ee = Ke.current,
                                ie = null === ee || void 0 === ee ? void 0 : ee.getContext("2d");
                              if (!ee || !ie) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const He = new Kb;
                              let ye = [],
                                be = 0,
                                Me = -.7,
                                Re = ke.current,
                                qe = performance.now(),
                                fe = 0,
                                Te = !0,
                                pe = null;
                              const Xe = () => {
                                const ee = Ue.current,
                                  ie = Math.min(400, Math.max(0, Math.ceil(ee.manualEmitCount)));
                                ye = [];
                                for (let He = 0; He < ie; He++) ye.push(IH(ee, yb, bb, Math.random));
                                be = 0
                              };
                              oe.current = Xe, Xe();
                              const ze = Ke => {
                                fe = requestAnimationFrame(ze);
                                const oe = Math.min(.05, (Ke - qe) / 1e3);
                                if (qe = Ke, !Te) return;
                                const Be = window.devicePixelRatio || 1,
                                  Ee = Math.round(ee.clientWidth * Be),
                                  ge = Math.round(ee.clientHeight * Be);
                                if (0 === Ee || 0 === ge) return;
                                ee.width === Ee && ee.height === ge || (ee.width = Ee, ee.height = ge);
                                const Oe = Ue.current;
                                null === pe && (Me += .18 * oe), Re += (ke.current - Re) * Math.min(1, 4 * oe);
                                const de = .6 * oe;
                                ye = ye.filter((ee => GH(ee, Oe.gravity, de))), 0 !== ye.length || Fe.current || (be += oe, be > .6 && Xe());
                                const We = function(ee, ie, He, ye) {
                                  const be = 3.2 * ye,
                                    Me = .44 * Math.min(ee, ie) * be / ye,
                                    Ke = Math.cos(He),
                                    Ue = Math.sin(He),
                                    Fe = Math.cos(.42),
                                    Je = Math.sin(.42);
                                  return (He, ye, oe) => {
                                    const Re = He * Ue + oe * Ke,
                                      ke = be - (ye * Je + Re * Fe);
                                    if (ke < .05) return null;
                                    const qe = Me / ke;
                                    return {
                                      x: ee / 2 + (He * Ke - oe * Ue) * qe,
                                      y: ie / 2 - (ye * Fe - Re * Je) * qe,
                                      scale: qe,
                                      depth: ke
                                    }
                                  }
                                }(Ee, ge, Me, Re);
                                ! function(ee, ie, He, ye, be) {
                                  const Me = ee.createLinearGradient(0, 0, 0, He);
                                  Me.addColorStop(0, "#23262d"), Me.addColorStop(1, "#16181c"), ee.globalCompositeOperation = "source-over", ee.globalAlpha = 1, ee.fillStyle = Me, ee.fillRect(0, 0, ie, He);
                                  const Ke = (ie, He) => {
                                      const be = ye(ie[0], ie[1], ie[2]),
                                        Me = ye(He[0], He[1], He[2]);
                                      be && Me && (ee.beginPath(), ee.moveTo(be.x, be.y), ee.lineTo(Me.x, Me.y), ee.stroke())
                                    },
                                    Ue = Math.ceil(be) + 1,
                                    Fe = yb[1];
                                  ee.lineWidth = 1, ee.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Je = -Ue; Je <= Ue; Je++) Ke([Je + .5, Fe, .5 - Ue], [Je + .5, Fe, Ue + .5]), Ke([.5 - Ue, Fe, Je + .5], [Ue + .5, Fe, Je + .5]);
                                  ee.strokeStyle = "rgba(255, 255, 255, 0.28)", ee.setLineDash([4, 4]);
                                  for (const Je of Mb)
                                    for (const ee of Mb) {
                                      const ie = [0, 1, 2].filter((ie => Je[ie] !== ee[ie]));
                                      1 === ie.length && Je[ie[0]] < ee[ie[0]] && Ke(Je, ee)
                                    }
                                  ee.setLineDash([])
                                }(ie, Ee, ge, We, Re);
                                const te = Je.current,
                                  Ze = ye.map((ee => ({
                                    particle: ee,
                                    at: We(ee.pos[0], ee.pos[1], ee.pos[2])
                                  }))).filter((ee => null !== ee.at)).sort(((ee, ie) => ie.at.depth - ee.at.depth));
                                ie.imageSmoothingEnabled = !1;
                                for (const ee of function(ee) {
                                    switch (ee) {
                                      case uH.e.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case uH.e.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case uH.e.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case uH.e.MultiplyAdd:
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
                                  }(Oe.blendMode)) {
                                  ie.globalCompositeOperation = ee.operation;
                                  for (const {
                                      particle: ye,
                                      at: be
                                    }
                                    of Ze) {
                                    const [Me, Ke, Ue, Fe] = NH(ye), Je = Math.max(1, ye.size * be.scale);
                                    ie.globalAlpha = ee.usesAlpha ? Math.min(1, Math.max(0, Fe)) : 1, te ? ie.drawImage(He.get(te, Me, Ke, Ue), be.x - Je / 2, be.y - Je / 2, Je, Je) : (ie.fillStyle = `rgb(${255*Me}, ${255*Ke}, ${255*Ue})`, ie.fillRect(be.x - Je / 2, be.y - Je / 2, Je, Je))
                                  }
                                }
                                ie.globalCompositeOperation = "source-over", ie.globalAlpha = 1
                              };
                              fe = requestAnimationFrame(ze);
                              const Be = new IntersectionObserver((ee => {
                                let [ie] = ee;
                                Te = ie.isIntersecting
                              }));
                              Be.observe(ee);
                              const Ee = ie => {
                                  pe = ie.clientX, ee.setPointerCapture(ie.pointerId)
                                },
                                ge = ee => {
                                  null !== pe && (Me += .01 * (ee.clientX - pe), pe = ee.clientX)
                                },
                                Oe = () => {
                                  pe = null
                                };
                              return ee.addEventListener("pointerdown", Ee), ee.addEventListener("pointermove", ge), ee.addEventListener("pointerup", Oe), ee.addEventListener("pointercancel", Oe), () => {
                                cancelAnimationFrame(fe), Be.disconnect(), oe.current = null, ee.removeEventListener("pointerdown", Ee), ee.removeEventListener("pointermove", ge), ee.removeEventListener("pointerup", Oe), ee.removeEventListener("pointercancel", Oe)
                              }
                            }), []), (0, fe.jsx)("canvas", {
                              ref: Ke,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${ie.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const Fb = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Jb = [{
                              mode: uH.e.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: uH.e.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: uH.e.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: uH.e.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: uH.e.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            ob = (0, ye.forwardRef)((function(ee, ie) {
                              var He, be;
                              let {
                                textures: Ke
                              } = ee;
                              const Ue = gy(),
                                Fe = (0, ye.useRef)(null),
                                [Je, oe] = (0, ye.useState)(lH),
                                [Re, ke] = (0, ye.useState)("example"),
                                [qe, Te] = (0, ye.useState)(0),
                                [Xe, ze] = (0, ye.useState)(!1),
                                Ee = ee => {
                                  const ie = "example" === ee ? lH : mH(ee);
                                  ie && (oe(ie), ke(ee))
                                };
                              (0, ye.useImperativeHandle)(ie, (() => ({
                                preview: ee => {
                                  var ie;
                                  Ee(ee), null === (ie = Fe.current) || void 0 === ie || ie.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const ge = ee => {
                                  oe({
                                    ...Je,
                                    ...ee
                                  }), ke(null)
                                },
                                Oe = function(ee, ie) {
                                  if (null !== ie) return `${iy}    presetId: "${ie}",\n${Hy}\n})`;
                                  const He = ee.velocityGradients.map((ee => `        {\n            timeFraction: ${rH(ee.timeFraction)},\n            factor: ${rH(ee.factor)},\n            factor2: ${rH(ee.factor2)},\n        },`)),
                                    ye = [`    dir1: ${QH(ee.dir1)},`, `    dir2: ${QH(ee.dir2)},`, Hy, `    texture: "${ee.texture}",`, `    minLifeTime: ${rH(ee.minLifeTime)},`, `    maxLifeTime: ${rH(ee.maxLifeTime)},`, `    minEmitPower: ${rH(ee.minEmitPower)},`, `    maxEmitPower: ${rH(ee.maxEmitPower)},`, `    minSize: ${rH(ee.minSize)},`, `    maxSize: ${rH(ee.maxSize)},`, `    manualEmitCount: ${rH(ee.manualEmitCount)},`, `    gravity: ${QH(ee.gravity)},`, `    colorGradients: ${ey(ee.colorGradients,"    ")},`, `    velocityGradients: ${He.length>0?`[\n${He.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${rH(ee.blendMode)},`];
                                  return void 0 !== ee.hideDist && ye.push(`    hideDist: ${rH(ee.hideDist)},`), `${iy}${ye.join("\n")}\n})`
                                }(Je, null === Re || "example" === Re ? null : Re),
                                We = Ke.includes(Je.texture) ? Ke : [...Ke, Je.texture];
                              return (0, fe.jsxs)("section", {
                                ref: Fe,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, fe.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, fe.jsxs)("div", {
                                    children: [(0, fe.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, fe.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, fe.jsx)(Be, {
                                    text: Oe,
                                    label: "Copy code"
                                  })]
                                }), (0, fe.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, fe.jsx)("button", {
                                    type: "button",
                                    className: Me()("DocsVariantChip", {
                                      Active: "example" === Re
                                    }),
                                    onClick: () => {
                                      Ee("example")
                                    },
                                    children: "Example"
                                  }), Fb.filter((ee => null !== mH(ee))).map((ee => (0, fe.jsx)("button", {
                                    type: "button",
                                    className: Me()("DocsVariantChip", {
                                      Active: Re === ee
                                    }),
                                    onClick: () => {
                                      Ee(ee)
                                    },
                                    children: ee
                                  }, ee))), (0, fe.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Re && void 0 !== Re ? Re : "custom",
                                    "aria-label": "Preset",
                                    onChange: ee => {
                                      Ee(ee.target.value)
                                    },
                                    children: [(0, fe.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Re && (0, fe.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), vH.b.map((ee => (0, fe.jsx)("option", {
                                      value: ee,
                                      children: ee
                                    }, ee)))]
                                  })]
                                }), (0, fe.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, fe.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, fe.jsx)(Ub, {
                                      opts: Je,
                                      textureUrl: null !== (He = null === Ue || void 0 === Ue ? void 0 : Ue.getParticleTextureUrl(Je.texture)) && void 0 !== He ? He : null,
                                      burst: qe,
                                      paused: Xe
                                    }), (0, fe.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, fe.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Te(qe + 1)
                                        },
                                        children: [(0, fe.jsx)(pe, {
                                          name: "replay"
                                        }), (0, fe.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, fe.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": Xe,
                                        onClick: () => {
                                          ze(!Xe)
                                        },
                                        children: [(0, fe.jsx)(pe, {
                                          name: Xe ? "play" : "pause"
                                        }), (0, fe.jsx)("span", {
                                          children: Xe ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, fe.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, fe.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, fe.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, fe.jsx)("span", {
                                          children: "Texture"
                                        }), (0, fe.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Je.texture
                                        })]
                                      }), (0, fe.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: We.map((ee => {
                                          var ie;
                                          const He = null !== (ie = null === Ue || void 0 === Ue ? void 0 : Ue.getParticleTextureUrl(ee)) && void 0 !== ie ? ie : null;
                                          return (0, fe.jsx)("button", {
                                            type: "button",
                                            className: Me()("DocsParticleTexture", {
                                              Active: Je.texture === ee
                                            }),
                                            title: ee,
                                            "aria-label": ee,
                                            "aria-pressed": Je.texture === ee,
                                            onClick: () => {
                                              ge({
                                                texture: ee
                                              })
                                            },
                                            children: He ? (0, fe.jsx)("img", {
                                              src: He,
                                              alt: ""
                                            }) : (0, fe.jsx)(pe, {
                                              name: "image"
                                            })
                                          }, ee)
                                        }))
                                      })]
                                    }), (0, fe.jsx)(ib, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Je.manualEmitCount,
                                      onChange: ee => {
                                        ge({
                                          manualEmitCount: ee
                                        })
                                      }
                                    }), (0, fe.jsx)(eb, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Je.minLifeTime,
                                      high: Je.maxLifeTime,
                                      onChange: (ee, ie) => {
                                        ge({
                                          minLifeTime: ee,
                                          maxLifeTime: ie
                                        })
                                      }
                                    }), (0, fe.jsx)(eb, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Je.minEmitPower,
                                      high: Je.maxEmitPower,
                                      onChange: (ee, ie) => {
                                        ge({
                                          minEmitPower: ee,
                                          maxEmitPower: ie
                                        })
                                      }
                                    }), (0, fe.jsx)(eb, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Je.minSize,
                                      high: Je.maxSize,
                                      onChange: (ee, ie) => {
                                        ge({
                                          minSize: ee,
                                          maxSize: ie
                                        })
                                      }
                                    }), (0, fe.jsx)(ib, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (be = Je.gravity[1]) && void 0 !== be ? be : 0,
                                      onChange: ee => {
                                        var ie, He;
                                        ge({
                                          gravity: [null !== (ie = Je.gravity[0]) && void 0 !== ie ? ie : 0, ee, null !== (He = Je.gravity[2]) && void 0 !== He ? He : 0]
                                        })
                                      }
                                    }), (0, fe.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, fe.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, fe.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, fe.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Je.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: ee => {
                                          ge({
                                            blendMode: Number(ee.target.value)
                                          })
                                        },
                                        children: Jb.map((ee => {
                                          let {
                                            mode: ie,
                                            label: He
                                          } = ee;
                                          return (0, fe.jsx)("option", {
                                            value: ie,
                                            children: He
                                          }, ie)
                                        }))
                                      })]
                                    }), (0, fe.jsx)(Hb, {
                                      opts: Je,
                                      onChange: ee => {
                                        ge({
                                          colorGradients: ee
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, fe.jsx)(de, {
                                  code: Oe,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Rb = He(4868),
                            kb = He(1956);

                          function qb(ee, ie) {
                            return ee ? Rb.d.includes(ie) ? ee.getIngameIconUrl(ie) : ee.getItemIconUrl(ie) : null
                          }

                          function fb(ee) {
                            var ie, He, ye;
                            let {
                              part: be,
                              assets: Ke
                            } = ee;
                            const Ue = qb(Ke, be.icon),
                              Fe = null !== (ie = null === (He = be.style) || void 0 === He ? void 0 : He.fontSize) && void 0 !== ie ? ie : "1.8em",
                              Je = (0, Ci.ec)(be.style);
                            return (0, fe.jsxs)("span", {
                              className: Me()("DocsBloxdTextIcon", {
                                Missing: !Ue
                              }),
                              style: {
                                width: Fe,
                                height: Fe,
                                opacity: null === (ye = be.style) || void 0 === ye ? void 0 : ye.opacity
                              },
                              title: Ue ? void 0 : "No Bloxd icon, item or block has this name",
                              children: [Ue && Je && (0, fe.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Je,
                                  maskImage: `url("${Ue}")`,
                                  WebkitMaskImage: `url("${Ue}")`
                                }
                              }), Ue ? (0, fe.jsx)("img", {
                                src: Ue,
                                alt: "",
                                className: Me()({
                                  Tinted: Je
                                })
                              }) : (0, fe.jsx)(pe, {
                                name: "image"
                              })]
                            })
                          }

                          function Tb(ee) {
                            let {
                              parts: ie,
                              className: He
                            } = ee;
                            const ye = gy(),
                              be = [];
                            let Ke = [];
                            const Ue = ee => {
                              Ke.length > 0 && (be.push((0, fe.jsx)(kb.e, {
                                text: Ke
                              }, `run-${ee}`)), Ke = [])
                            };
                            return ie.forEach(((ee, ie) => {
                              "icon" !== Si(ee) || ui(ee.icon) ? Ke.push(ee) : (Ue(ie), be.push((0, fe.jsx)(fb, {
                                part: ee,
                                assets: ye
                              }, `icon-${ie}`)))
                            })), Ue(ie.length), (0, fe.jsx)("div", {
                              className: Me()("DocsStyledTextPreview", He),
                              children: be
                            })
                          }
                          const pb = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let Xb = null;

                          function zb(ee) {
                            if (Xb ??= document.createElement("canvas").getContext("2d"), !Xb) return "#000000";
                            Xb.fillStyle = "#000000", Xb.fillStyle = ee;
                            const ie = Xb.fillStyle;
                            return ie.startsWith("#") ? ie : "#000000"
                          }

                          function Bb(ee) {
                            let {
                              value: ie,
                              label: He,
                              onChange: ye
                            } = ee;
                            return (0, fe.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, fe.jsx)("input", {
                                type: "color",
                                value: zb(ie),
                                "aria-label": `${He} picker`,
                                onChange: ee => {
                                  ye(ee.target.value)
                                }
                              }), (0, fe.jsx)("input", {
                                type: "text",
                                value: ie,
                                placeholder: "#ffb914 or gold",
                                "aria-label": He,
                                spellCheck: !1,
                                onChange: ee => {
                                  ye(ee.target.value)
                                }
                              })]
                            })
                          }

                          function Eb(ee) {
                            let {
                              value: ie,
                              fontAwesomeIcons: He,
                              onChange: be
                            } = ee;
                            const Ke = gy(),
                              [Ue, Fe] = (0, ye.useState)(ui(ie) ? "fontAwesome" : "bloxd"),
                              [Je, oe] = (0, ye.useState)(""),
                              Re = Je.trim().toLowerCase(),
                              ke = "bloxd" === Ue ? Rb.d : He,
                              qe = Re ? ke.filter((ee => ee.toLowerCase().includes(Re))) : ke;
                            return (0, fe.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, fe.jsx)("input", {
                                type: "text",
                                value: ie,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: ee => {
                                  be(ee.target.value)
                                }
                              }), (0, fe.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, fe.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((ee => (0, fe.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": Ue === ee,
                                    className: Me()("DocsVariantChip", {
                                      Active: Ue === ee
                                    }),
                                    onClick: () => {
                                      Fe(ee)
                                    },
                                    children: "bloxd" === ee ? `Bloxd icons (${Rb.d.length})` : `Font Awesome (${He.length})`
                                  }, ee))), (0, fe.jsx)("input", {
                                    type: "search",
                                    value: Je,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: ee => {
                                      oe(ee.target.value)
                                    }
                                  })
                                ]
                              }), (0, fe.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [qe.map((ee => {
                                  const He = "bloxd" === Ue ? qb(Ke, ee) : null;
                                  return (0, fe.jsx)("button", {
                                    type: "button",
                                    title: ee,
                                    "aria-label": ee,
                                    "aria-pressed": ee === ie,
                                    className: Me()("DocsIconPickerOption", {
                                      Active: ee === ie
                                    }),
                                    onClick: () => {
                                      be(ee)
                                    },
                                    children: "fontAwesome" === Ue ? (0, fe.jsx)(OH.e, {
                                      name: ee
                                    }) : He ? (0, fe.jsx)("img", {
                                      src: He,
                                      alt: ""
                                    }) : (0, fe.jsx)(pe, {
                                      name: "image"
                                    })
                                  }, ee)
                                })), 0 === qe.length && (0, fe.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Je, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function gb(ee) {
                            let {
                              property: ie,
                              value: He,
                              fontAwesomeIcons: ye,
                              onChange: be
                            } = ee;
                            const {
                              field: Me,
                              label: Ke
                            } = ie, Ue = ee => "" !== ee || ie.isRequired ? ee : void 0;
                            switch (Me.kind) {
                              case "text":
                                return Me.multiline ? (0, fe.jsx)("textarea", {
                                  value: String(null !== He && void 0 !== He ? He : ""),
                                  rows: 2,
                                  "aria-label": Ke,
                                  onChange: ee => {
                                    be(ee.target.value)
                                  }
                                }) : (0, fe.jsx)("input", {
                                  type: "text",
                                  value: String(null !== He && void 0 !== He ? He : ""),
                                  "aria-label": Ke,
                                  onChange: ee => {
                                    be(Ue(ee.target.value))
                                  }
                                });
                              case "size":
                                return (0, fe.jsx)("input", {
                                  type: "text",
                                  value: String(null !== He && void 0 !== He ? He : ""),
                                  placeholder: ie.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Ke,
                                  spellCheck: !1,
                                  onChange: ee => {
                                    be(Ue(ee.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, fe.jsx)(Bb, {
                                  value: String(null !== He && void 0 !== He ? He : ""),
                                  label: Ke,
                                  onChange: ee => {
                                    be(Ue(ee))
                                  }
                                });
                              case "colours": {
                                const ee = Array.isArray(He) ? He : [],
                                  ie = ee => {
                                    be(ee.length > 0 ? ee : void 0)
                                  };
                                return (0, fe.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [ee.map(((He, ye) => (0, fe.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, fe.jsx)(Bb, {
                                      value: He,
                                      label: `${Ke} ${ye+1}`,
                                      onChange: He => {
                                        ie(ee.map(((ee, ie) => ie === ye ? He : ee)))
                                      }
                                    }), (0, fe.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${ye+1}`,
                                      onClick: () => {
                                        ie(ee.filter(((ee, ie) => ie !== ye)))
                                      },
                                      children: (0, fe.jsx)(pe, {
                                        name: "cross"
                                      })
                                    })]
                                  }, ye))), (0, fe.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var He;
                                      ie([...ee, null !== (He = ee.at(-1)) && void 0 !== He ? He : "#ffffff"])
                                    },
                                    children: [(0, fe.jsx)(pe, {
                                      name: "plus"
                                    }), 0 === ee.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Fe;
                                const ee = "number" === typeof He ? He : Number(null !== (Fe = ie.defaultText) && void 0 !== Fe ? Fe : 0);
                                return (0, fe.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, fe.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: ee,
                                    "aria-label": Ke,
                                    onChange: ee => {
                                      be(Number(ee.target.value))
                                    }
                                  }), (0, fe.jsx)("output", {
                                    children: ee.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, fe.jsxs)("select", {
                                  value: String(null !== He && void 0 !== He ? He : ""),
                                  "aria-label": Ke,
                                  onChange: ee => {
                                    be(Ue(ee.target.value))
                                  },
                                  children: [!ie.isRequired && (0, fe.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", ie.defaultText, ")"]
                                  }), Me.options.map((ee => (0, fe.jsx)("option", {
                                    value: ee,
                                    children: ee
                                  }, ee)))]
                                });
                              case "icon":
                                return (0, fe.jsx)(Eb, {
                                  value: String(null !== He && void 0 !== He ? He : ""),
                                  fontAwesomeIcons: ye,
                                  onChange: be
                                })
                            }
                          }

                          function Ob(ee) {
                            let ie;
                            try {
                              ie = JSON.parse(ee)
                            } catch (He) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${He.message}`
                              }
                            }
                            return bH(ie) ? {
                              part: ie,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function db(ee) {
                            let {
                              parts: ie,
                              index: He,
                              fontAwesomeIcons: be,
                              onChange: Me,
                              JV: Ke,
                              onClose: Ue
                            } = ee;
                            const Fe = (0, ye.useContext)(fi),
                              oe = (0, ye.useRef)(null),
                              Re = ie[He],
                              ke = Si(Re),
                              [qe, Te] = (0, ye.useState)((() => JSON.stringify(Re, null, 2))),
                              Xe = (0, ye.useMemo)((() => "other" === ke ? Ob(qe).error : null), [ke, qe]);
                            (0, ye.useEffect)((() => {
                              var ee;
                              null === (ee = oe.current) || void 0 === ee || ee.focus()
                            }), []);
                            const ze = (0, fe.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: ee => {
                                ee.target === ee.currentTarget && Ue()
                              },
                              children: (0, fe.jsxs)("div", {
                                ref: oe,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${He+1}: ${mi[ke]}`,
                                tabIndex: -1,
                                onKeyDown: ee => {
                                  "Escape" === ee.key ? (ee.stopPropagation(), Ue()) : "Tab" === ee.key && oe.current && function(ee, ie) {
                                    const He = Array.from(ee.querySelectorAll(Pi)),
                                      ye = He[0],
                                      be = He.at(-1);
                                    if (!ye || !be) return;
                                    const Me = document.activeElement;
                                    !ie.shiftKey || Me !== ye && Me !== ee ? ie.shiftKey || Me !== be || (ie.preventDefault(), ye.focus()) : (ie.preventDefault(), be.focus())
                                  }(oe.current, ee)
                                },
                                children: [(0, fe.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, fe.jsxs)("div", {
                                    children: [(0, fe.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", He + 1]
                                    }), (0, fe.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: mi[ke]
                                    })]
                                  }), (0, fe.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: Ue,
                                    children: (0, fe.jsx)(pe, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, fe.jsx)(Tb, {
                                  parts: ie,
                                  className: "DocsTextDialogPreview"
                                }), (0, fe.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === ke ? (0, fe.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, fe.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, fe.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: qe,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: ee => {
                                        Te(ee.target.value);
                                        const ie = Ob(ee.target.value);
                                        null !== ie.part && Me(ie.part)
                                      }
                                    }), Xe && (0, fe.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: Xe
                                    })]
                                  }) : ji[ke].map((ee => {
                                    const ie = Ii(Re, ee.path),
                                      He = ee.isRequired ? JSON.stringify(Gi(Re, ee.path)) === JSON.stringify(Re) : void 0 === ie;
                                    return (0, fe.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, fe.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, fe.jsx)("span", {
                                          children: ee.label
                                        }), (0, fe.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: He,
                                          "aria-label": `Reset ${ee.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Me(Gi(Re, ee.path))
                                          },
                                          children: [(0, fe.jsx)(pe, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, fe.jsx)(gb, {
                                        property: ee,
                                        value: ie,
                                        fontAwesomeIcons: be,
                                        onChange: ie => {
                                          Me(Ni(Re, ee.path, ie))
                                        }
                                      }), !ee.isRequired && (0, fe.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", ee.defaultText]
                                      })]
                                    }, ee.path.join("."))
                                  }))
                                }), (0, fe.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, fe.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Ke,
                                    children: [(0, fe.jsx)(pe, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, fe.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: Ue,
                                    children: "Done"
                                  })]
                                }), (0, fe.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: pb.map((ee => (0, fe.jsx)("option", {
                                    value: ee
                                  }, ee)))
                                })]
                              })
                            });
                            return Fe ? (0, Je.createPortal)(ze, Fe) : ze
                          }
                          const Wb = [{
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
                            tb = Object.keys(li);

                          function Zb(ee) {
                            let {
                              fontAwesomeIcons: ie
                            } = ee;
                            const [He, be] = (0, ye.useState)(Wb[0].parts), [Ke, Ue] = (0, ye.useState)((() => iH(Wb[0].parts))), [Fe, Je] = (0, ye.useState)(null), [oe, Re] = (0, ye.useState)(!1), [ke, qe] = (0, ye.useState)(null), [Te, Xe] = (0, ye.useState)(!1), [ze, Be] = (0, ye.useState)(null), Ee = (0, ye.useRef)(null), ge = iH(He);
                            (0, ye.useLayoutEffect)((() => {
                              var ee;
                              if (!ze) return;
                              const ie = ee => {
                                  var ie;
                                  return null === (ie = Ee.current) || void 0 === ie ? void 0 : ie.querySelector(`[data-focus-key="${ee}"]`)
                                },
                                He = ie(ze.key);
                              null === (ee = He && !He.disabled ? He : ie(ze.fallback)) || void 0 === ee || ee.focus(), Be(null)
                            }), [ze]);
                            const Oe = ee => {
                                be(ee), Ue(iH(ee)), Je(null)
                              },
                              We = ee => {
                                Oe(He.filter(((ie, He) => He !== ee))), Be({
                                  key: `edit-${Math.min(ee,He.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              te = (ee, ie) => {
                                const ye = [...He],
                                  [be] = ye.splice(ee, 1);
                                ye.splice(ee + ie, 0, be), Oe(ye);
                                Be({
                                  key: `${ie<0?"up":"down"}-${ee+ie}`,
                                  fallback: `edit-${ee+ie}`
                                })
                              };
                            return (0, fe.jsxs)("section", {
                              ref: Ee,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, fe.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, fe.jsxs)("div", {
                                  children: [(0, fe.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, fe.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, fe.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Wb.map((ee => (0, fe.jsx)("button", {
                                  type: "button",
                                  className: Me()("DocsVariantChip", {
                                    Active: ge === iH(ee.parts)
                                  }),
                                  onClick: () => {
                                    Oe(ee.parts)
                                  },
                                  children: ee.label
                                }, ee.label)))
                              }), (0, fe.jsx)(Tb, {
                                parts: He,
                                className: "DocsTextEditorPreview"
                              }), (0, fe.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, fe.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, fe.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, fe.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [He.map(((ee, ie) => {
                                      const ye = Si(ee);
                                      return (0, fe.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, fe.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${ie}`,
                                          "aria-label": `Edit part ${ie+1}, ${mi[ye]}`,
                                          onClick: () => {
                                            qe(ie)
                                          },
                                          children: [(0, fe.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: mi[ye]
                                          }), (0, fe.jsx)(Tb, {
                                            parts: [ee],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== ye && (0, fe.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: ri(ee)
                                          })]
                                        }), (0, fe.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, fe.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${ie+1} up`,
                                            "data-focus-key": `up-${ie}`,
                                            disabled: 0 === ie,
                                            onClick: () => {
                                              te(ie, -1)
                                            },
                                            children: (0, fe.jsx)(pe, {
                                              name: "chevron-up"
                                            })
                                          }), (0, fe.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${ie+1} down`,
                                            "data-focus-key": `down-${ie}`,
                                            disabled: ie === He.length - 1,
                                            onClick: () => {
                                              te(ie, 1)
                                            },
                                            children: (0, fe.jsx)(pe, {
                                              name: "chevron-down"
                                            })
                                          }), (0, fe.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${ie+1}`,
                                            onClick: () => {
                                              We(ie)
                                            },
                                            children: (0, fe.jsx)(pe, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, ie)
                                    })), 0 === He.length && (0, fe.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, fe.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: ee => {
                                      "Escape" === ee.key && Te && (ee.stopPropagation(), Xe(!1), Be({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, fe.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Te,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        Xe(!Te)
                                      },
                                      children: [(0, fe.jsx)(pe, {
                                        name: "plus"
                                      }), "Add a part", (0, fe.jsx)(pe, {
                                        name: Te ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Te && (0, fe.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: tb.map((ee => (0, fe.jsx)("li", {
                                        children: (0, fe.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (ee => {
                                              Oe([...He, li[ee]]), Xe(!1), qe(He.length)
                                            })(ee)
                                          },
                                          children: mi[ee]
                                        })
                                      }, ee)))
                                    })]
                                  })]
                                }), (0, fe.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, fe.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, fe.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": oe,
                                      onClick: () => {
                                        Re(!oe)
                                      },
                                      children: [(0, fe.jsx)(pe, {
                                        name: oe ? "check" : "pencil"
                                      }), oe ? "Done" : "Edit"]
                                    })]
                                  }), oe ? (0, fe.jsxs)(fe.Fragment, {
                                    children: [(0, fe.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Ke,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: ee => {
                                        Ue(ee.target.value);
                                        const ie = MH(ee.target.value);
                                        Je(ie.error), ie.parts && be(ie.parts)
                                      }
                                    }), Fe && (0, fe.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Fe
                                    })]
                                  }) : (0, fe.jsx)(de, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${ge})`
                                  })]
                                })]
                              }), null !== ke && ke < He.length && (0, fe.jsx)(db, {
                                parts: He,
                                index: ke,
                                fontAwesomeIcons: ie,
                                onChange: ee => {
                                  ((ee, ie) => {
                                    Oe(He.map(((He, ye) => ye === ee ? ie : He)))
                                  })(ke, ee)
                                },
                                JV: () => {
                                  We(ke), qe(null)
                                },
                                onClose: () => {
                                  qe(null), Be({
                                    key: `edit-${ke}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var wb = He(5326),
                            Db = He(5311),
                            Pb = He(5319),
                            Ab = He(5333);
                          const Yb = 40,
                            Vb = 800,
                            ab = 150,
                            cb = 8e3,
                            xb = 2e3;

                          function Lb(ee, ie) {
                            return 12 * Math.log2(ie / ee)
                          }

                          function Cb(ee, ie) {
                            return Math.round(ee * 2 ** (ie / 12) * 10) / 10
                          }

                          function vb(ee) {
                            return `${ee} ms`
                          }

                          function ub(ee) {
                            return `${ee} st`
                          }
                          const mb = [{
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

                          function lb(ee) {
                            let {
                              synth: ie,
                              onChange: He
                            } = ee;
                            const ye = (0, wb.l)(ie);
                            return (0, fe.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, fe.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, fe.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, fe.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, fe.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, fe.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, fe.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: wb.h.map((ee => (0, fe.jsx)("button", {
                                      type: "button",
                                      className: Me()("DocsVariantChip", {
                                        Active: ie.waveform === ee
                                      }),
                                      "aria-pressed": ie.waveform === ee,
                                      onClick: () => {
                                        He({
                                          waveform: ee
                                        })
                                      },
                                      children: ee
                                    }, ee)))
                                  })]
                                }), (0, fe.jsx)(ib, {
                                  label: "Pitch",
                                  min: 0,
                                  max: Lb(Yb, Vb),
                                  step: .1,
                                  value: Lb(Yb, ie.pitchHz),
                                  format: () => `${ie.pitchHz} Hz`,
                                  onChange: ee => {
                                    He({
                                      pitchHz: Cb(Yb, ee)
                                    })
                                  }
                                }), (0, fe.jsx)(ib, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: ie.syllableMs,
                                  format: vb,
                                  onChange: ee => {
                                    He({
                                      syllableMs: ee
                                    })
                                  }
                                }), (0, fe.jsx)(ib, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: ie.volume,
                                  onChange: ee => {
                                    He({
                                      volume: ee
                                    })
                                  }
                                })]
                              }), (0, fe.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, fe.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, fe.jsx)(ib, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: ie.durationMs,
                                  format: vb,
                                  onChange: ee => {
                                    He({
                                      durationMs: ee
                                    })
                                  }
                                }), (0, fe.jsx)(ib, {
                                  label: "Fade in",
                                  min: 0,
                                  max: ye.durationMs,
                                  step: 1,
                                  value: ye.attackMs,
                                  format: vb,
                                  onChange: ee => {
                                    He({
                                      attackMs: ee
                                    })
                                  }
                                }), (0, fe.jsx)(ib, {
                                  label: "Fade out",
                                  min: 0,
                                  max: ye.durationMs - ye.attackMs,
                                  step: 1,
                                  value: ye.releaseMs,
                                  format: vb,
                                  onChange: ee => {
                                    He({
                                      releaseMs: ee
                                    })
                                  }
                                }), (0, fe.jsx)(ib, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: ie.glideSemitones,
                                  format: ub,
                                  onChange: ee => {
                                    He({
                                      glideSemitones: ee
                                    })
                                  }
                                }), (0, fe.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, fe.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== ie.lowpassHz,
                                    onChange: ee => {
                                      He({
                                        lowpassHz: ee.target.checked ? xb : null
                                      })
                                    }
                                  }), (0, fe.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== ie.lowpassHz && (0, fe.jsx)(ib, {
                                  label: "Filter",
                                  min: 0,
                                  max: Lb(ab, cb),
                                  step: .1,
                                  value: Lb(ab, ie.lowpassHz),
                                  format: () => `${ie.lowpassHz} Hz`,
                                  onChange: ee => {
                                    He({
                                      lowpassHz: Cb(ab, ee)
                                    })
                                  }
                                })]
                              }), (0, fe.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, fe.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), mb.map((ee => {
                                  let {
                                    key: ye,
                                    label: be,
                                    max: Me
                                  } = ee;
                                  return (0, fe.jsx)(ib, {
                                    label: be,
                                    min: 0,
                                    max: Me,
                                    step: .1,
                                    value: ie.intonation[ye],
                                    format: ub,
                                    onChange: ee => {
                                      He({
                                        intonation: {
                                          ...ie.intonation,
                                          [ye]: ee
                                        }
                                      })
                                    }
                                  }, ye)
                                }))]
                              })]
                            })
                          }
                          const Sb = Object.keys(wb.k),
                            nb = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function jb(ee) {
                            var ie;
                            const He = JSON.stringify((0, wb.l)(ee));
                            return null !== (ie = Sb.find((ee => JSON.stringify((0, wb.l)(wb.k[ee])) === He))) && void 0 !== ie ? ie : null
                          }

                          function sb(ee) {
                            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof ee || null === ee) return JSON.stringify(ee);
                            return `{\n${Object.entries(ee).map((ee=>{let[He,ye]=ee;return`${ie}    ${He}: ${sb(ye,`${ie}    `)},`})).join("\n")}\n${ie}}`
                          }

                          function Ib(ee, ie, He) {
                            const ye = jb(ee),
                              be = [`    line: ${JSON.stringify(ie)},`];
                            return He && be.push(`    speakerName: ${JSON.stringify(He)},`), be.push("    voice,"), `const voice = ${ye?JSON.stringify(ye):sb((0,wb.l)(ee))}\n\napi.setClientOption(playerId, "dialogue", {\n${be.join("\n")}\n})`
                          }
                          const hb = 400,
                            Nb = 90;
                          let Gb = null;

                          function rb(ee, ie, He) {
                            return Gb ??= new AudioContext, Gb.resume(), (0, Ab.e)(Gb, Gb.destination, ee, ie, He, (() => {}))
                          }

                          function Qb() {
                            const [ee, ie] = (0, ye.useState)(wb.k.regular), [He, be] = (0, ye.useState)(nb[0]), [Ke, Ue] = (0, ye.useState)("Innkeeper"), [Fe, Je] = (0, ye.useState)(0), oe = ky((ee => ee.volume)), Re = (0, ye.useRef)(null), ke = (0, ye.useRef)(0), qe = (0, ye.useRef)(0), Te = () => {
                              var ee;
                              null === (ee = Re.current) || void 0 === ee || ee.call(Re), Re.current = null
                            };
                            (0, ye.useEffect)((() => () => {
                              var ee;
                              null === (ee = Re.current) || void 0 === ee || ee.call(Re), window.clearTimeout(ke.current)
                            }), []);
                            const Xe = (0, ye.useMemo)((() => ({
                                line: He,
                                speakerName: Ke || void 0,
                                voice: ee
                              })), [He, Ke, ee]),
                              ze = (0, ye.useRef)(Xe);
                            ze.current = Xe;
                            const Ee = jb(ee),
                              ge = ee => {
                                window.clearTimeout(ke.current), Te();
                                const {
                                  plan: ie,
                                  synth: He
                                } = (0, Pb.g)(ee);
                                He && (Re.current = rb(He, ie.blips, oe)), Je((ee => ee + 1))
                              },
                              Oe = Ib(ee, He, Ke);
                            return (0, fe.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, fe.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, fe.jsxs)("div", {
                                  children: [(0, fe.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, fe.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, fe.jsx)(Be, {
                                  text: Oe,
                                  label: "Copy code"
                                })]
                              }), (0, fe.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [Sb.map((ee => (0, fe.jsx)("button", {
                                  type: "button",
                                  className: Me()("DocsVariantChip", {
                                    Active: Ee === ee
                                  }),
                                  "aria-pressed": Ee === ee,
                                  onClick: () => {
                                    (ee => {
                                      const He = wb.k[ee];
                                      ie(He), ge({
                                        ...Xe,
                                        voice: He
                                      })
                                    })(ee)
                                  },
                                  children: ee
                                }, ee))), !Ee && (0, fe.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, fe.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, fe.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, fe.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, fe.jsx)(Db.d, {
                                      display: Xe
                                    }, Fe)
                                  }), (0, fe.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: ee => {
                                      ee.preventDefault(), ge(Xe)
                                    },
                                    children: [(0, fe.jsx)("input", {
                                      value: He,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: ee => {
                                        be(ee.target.value)
                                      }
                                    }), (0, fe.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, fe.jsx)(pe, {
                                        name: "play"
                                      }), (0, fe.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, fe.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: nb.map((ee => (0, fe.jsx)("button", {
                                      type: "button",
                                      className: Me()("DocsVariantChip", {
                                        Active: He === ee
                                      }),
                                      onClick: () => {
                                        var ie;
                                        be(ie = ee), ge({
                                          ...Xe,
                                          line: ie
                                        })
                                      },
                                      children: ee
                                    }, ee)))
                                  }), (0, fe.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, fe.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, fe.jsx)("input", {
                                      value: Ke,
                                      placeholder: "No name",
                                      onChange: ee => {
                                        Ue(ee.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, fe.jsx)(lb, {
                                  synth: ee,
                                  onChange: He => {
                                    const ye = {
                                      ...ee,
                                      ...He
                                    };
                                    ie(ye);
                                    const be = {
                                        ...Xe,
                                        voice: ye
                                      },
                                      Me = performance.now();
                                    if (Me - qe.current >= Nb) {
                                      qe.current = Me, Te();
                                      const ee = (0, Pb.g)(be).plan.blips[0];
                                      ee && (Re.current = rb((0, wb.l)(ye), [{
                                        ...ee,
                                        atMs: 0
                                      }], oe))
                                    }
                                    window.clearTimeout(ke.current), ke.current = window.setTimeout((() => {
                                      ge(ze.current)
                                    }), hb)
                                  }
                                })]
                              }), (0, fe.jsx)(de, {
                                code: Oe,
                                lang: "ts"
                              })]
                            })
                          }
                          var eM = He(5343);
                          const iM = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            HM = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            yM = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${HM}`, "g"), eM.n],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, eM.n]
                            ];

                          function bM(ee) {
                            return `${ee.pageId}#${ee.anchor}`
                          }
                          let MM, KM, UM;

                          function FM(ee) {
                            const ie = (0, We.i)(ee),
                              He = new Set;
                            for (const [, , ye] of ie.matchAll(We.e)) {
                              const ee = ye.startsWith("#") ? le(ye) : null,
                                ie = ee ? bM({
                                  pageId: ee.page.id,
                                  anchor: ee.anchor
                                }) : null;
                              null !== ie && (MM || (MM = new Set(xe.flatMap((ee => De(ee.layout) ? ue(ee).sections.map((ie => bM({
                                pageId: ee.id,
                                anchor: ie.heading.anchor
                              }))) : [])))), MM).has(ie) && He.add(ie)
                            }
                            for (const [, , ye] of ie.matchAll(iM)) {
                              const ee = ki(ye);
                              ee && He.add(bM(ee))
                            }
                            return He
                          }

                          function JM(ee, ie) {
                            const He = new Set,
                              ye = function(ee) {
                                return ee.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(ee);
                            for (const [, be] of ye.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) He.add(be);
                            for (const [be, Me] of yM)
                              for (const [, ee] of(0, eM.g)(ye, be, Me)) ie.has(ee) && He.add(ee);
                            return He
                          }

                          function oM(ee, ie, He, ye) {
                            const be = ee.get(ie);
                            be ? !ye && be.some((ee => ee.pageId === He.pageId)) || be.push(He) : ee.set(ie, [He])
                          }
                          const RM = /^[A-Za-z_$][\w$]*$/;

                          function kM(ee) {
                            return RM.test(ee.name) ? ee.name : "options"
                          }

                          function qM(ee, ie) {
                            const He = ee.params.map(kM).join(", ");
                            return ie ? `${ee.name} = (${He}) => {\n\t\n}` : `api.${ee.name}(${He})`
                          }

                          function fM(ee) {
                            let {
                              method: ie,
                              isCallback: He
                            } = ee;
                            return (0, fe.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, fe.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [He ? (0, fe.jsxs)(fe.Fragment, {
                                  children: [(0, fe.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: ie.name
                                  }), (0, fe.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, fe.jsxs)(fe.Fragment, {
                                  children: [(0, fe.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, fe.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: ie.name
                                  }), (0, fe.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), ie.params.map(((ee, He) => (0, fe.jsxs)(ye.Fragment, {
                                  children: [He > 0 && (0, fe.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, fe.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${ie.name}-${kM(ee)}`,
                                    children: ee.name
                                  })]
                                }, ee.name))), (0, fe.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: He ? ") => " : ")"
                                }), He && !ie.returns && (0, fe.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), ie.returns && ie.returns.type && (0, fe.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!He && (0, fe.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, fe.jsx)(Zi, {
                                  type: ie.returns.type
                                })]
                              })]
                            })
                          }

                          function TM(ee) {
                            let {
                              title: ie,
                              references: He
                            } = ee;
                            const be = (0, ye.useContext)(qi);
                            return (0, fe.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, fe.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: ie
                              }), He.map((ee => (0, fe.jsx)(Ke.e, {
                                to: ne(be, Ce(ee.pageId), ee.anchor),
                                children: ee.label
                              }, `${ee.pageId}#${ee.anchor}`)))]
                            })
                          }

                          function pM(ee) {
                            var ie, He;
                            let {
                              pageId: ye,
                              anchor: be
                            } = ee;
                            const Me = bM({
                                pageId: ye,
                                anchor: be
                              }),
                              Ke = null !== (ie = function() {
                                if (!UM) {
                                  UM = new Map;
                                  const ye = new Set(xe.filter((ee => "callbacks" === ee.layout)).flatMap((ee => ue(ee).sections.map((ee => ee.heading.text)))));
                                  for (const be of xe)
                                    if ("article" === be.layout || "snippets" === be.layout)
                                      for (const Me of (0, We.x)(ue(be)))
                                        for (const {
                                            code: Ke
                                          }
                                          of(0, We.l)(Me.blocks))
                                          for (const Ue of JM(Ke, ye)) {
                                            const ye = Ri().get(Ue);
                                            if (ye) {
                                              var ee, ie, He;
                                              const Ke = {
                                                pageId: be.id,
                                                anchor: null !== (ee = null === (ie = Me.heading) || void 0 === ie ? void 0 : ie.anchor) && void 0 !== ee ? ee : "",
                                                label: null !== (He = be.navTitle) && void 0 !== He ? He : be.title
                                              };
                                              oM(UM, bM(ye), Ke, !1)
                                            }
                                          }
                                }
                                return UM
                              }().get(Me)) && void 0 !== ie ? ie : [],
                              Ue = null !== (He = function() {
                                if (!KM) {
                                  KM = new Map;
                                  const ee = Ce("changelog");
                                  for (const ie of ue(ee).sections) {
                                    const He = new Set(ie.blocks.flatMap((ee => [...FM(ee)])));
                                    for (const ye of He) {
                                      const He = {
                                        pageId: ee.id,
                                        anchor: ie.heading.anchor,
                                        label: ie.heading.text
                                      };
                                      oM(KM, ye, He, !0)
                                    }
                                  }
                                }
                                return KM
                              }().get(Me)) && void 0 !== He ? He : [];
                            return 0 === Ke.length && 0 === Ue.length ? null : (0, fe.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Ke.length > 0 && (0, fe.jsx)(TM, {
                                title: "Used in",
                                references: Ke
                              }), Ue.length > 0 && (0, fe.jsx)(TM, {
                                title: "Changelog",
                                references: Ue
                              })]
                            })
                          }

                          function XM(ee) {
                            let {
                              method: ie,
                              pageId: He,
                              anchor: ye,
                              isCallback: be
                            } = ee;
                            const Me = be ? void 0 : Ui().get(ie.name),
                              Ke = ie.description.length > 0 || null === Me || void 0 === Me || !Me.description ? ie.description : (0, We.C)(Me.description);
                            return (0, fe.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, fe.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, fe.jsx)(RH, {
                                  level: 2,
                                  text: ie.name,
                                  anchor: ye,
                                  className: "DocsCardTitle"
                                }), (0, fe.jsx)(Be, {
                                  text: qM(ie, be),
                                  label: be ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, fe.jsx)(fM, {
                                method: ie,
                                isCallback: be
                              }), Me && null !== Me.deprecation && (0, fe.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, fe.jsx)("strong", {
                                  children: "Deprecated"
                                }), Me.deprecation && (0, fe.jsxs)(fe.Fragment, {
                                  children: [": ", (0, fe.jsx)(di, {
                                    text: (Ue = Me.deprecation, (0, eM.t)(Ue, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, eM.m)("`\\w"), (ee => {
                                      let [ie] = ee;
                                      return Ri().has(ie) ? `\`${ie}\`` : ie
                                    })))
                                  })]
                                })]
                              }), Ke.length > 0 && (0, fe.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, fe.jsx)(TH, {
                                  blocks: Ke
                                })
                              }), ie.params.length > 0 && (0, fe.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, fe.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, fe.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: ie.params.map((ee => (0, fe.jsxs)("div", {
                                    id: `${ie.name}-${kM(ee)}`,
                                    className: "DocsParam",
                                    children: [(0, fe.jsxs)("dt", {
                                      children: [(0, fe.jsx)("code", {
                                        className: "DocsParamName",
                                        children: ee.name
                                      }), (0, fe.jsx)(Zi, {
                                        type: ee.type
                                      })]
                                    }), ee.description && (0, fe.jsx)("dd", {
                                      children: (0, fe.jsx)(di, {
                                        text: ee.description
                                      })
                                    })]
                                  }, ee.name)))
                                })]
                              }), ie.returns && (ie.returns.type || ie.returns.description.length > 0) && (0, fe.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, fe.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, fe.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [ie.returns.type && (0, fe.jsx)(Zi, {
                                    type: ie.returns.type
                                  }), ie.returns.description.length > 0 && (0, fe.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, fe.jsx)(TH, {
                                      blocks: ie.returns.description
                                    })
                                  })]
                                })]
                              }), (0, fe.jsx)(pM, {
                                pageId: He,
                                anchor: ye
                              })]
                            });
                            var Ue
                          }

                          function zM(ee) {
                            var ie;
                            return null !== ee.defaultValue && "undefined" !== ee.defaultValue ? ee.defaultValue : null !== (ie = ee.example) && void 0 !== ie ? ie : "value"
                          }

                          function BM(ee) {
                            let {
                              setting: ie,
                              pageId: He,
                              anchor: ye,
                              setterSnippet: be
                            } = ee;
                            const Me = null === ie.defaultValue ? null : zi(ie.defaultValue);
                            return (0, fe.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, fe.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, fe.jsx)(RH, {
                                  level: 2,
                                  text: ie.name,
                                  anchor: ye,
                                  className: "DocsCardTitle"
                                }), (0, fe.jsx)(Be, {
                                  text: be(ie.name, zM(ie)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, fe.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, fe.jsxs)("div", {
                                  children: [(0, fe.jsx)("dt", {
                                    children: "Type"
                                  }), (0, fe.jsx)("dd", {
                                    children: (0, fe.jsx)(Zi, {
                                      type: ie.type
                                    })
                                  })]
                                }), null !== ie.defaultValue && (0, fe.jsxs)("div", {
                                  children: [(0, fe.jsx)("dt", {
                                    children: "Default"
                                  }), (0, fe.jsx)("dd", {
                                    children: (0, fe.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Me && (0, fe.jsx)(Bi, {
                                        colour: Me
                                      }), ie.defaultValue]
                                    })
                                  })]
                                }), null !== ie.example && (0, fe.jsxs)("div", {
                                  children: [(0, fe.jsx)("dt", {
                                    children: "Example"
                                  }), (0, fe.jsx)("dd", {
                                    children: (0, fe.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: ie.example
                                    })
                                  })]
                                })]
                              }), ie.description.length > 0 && (0, fe.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, fe.jsx)(TH, {
                                  blocks: ie.description
                                })
                              }), (0, fe.jsx)(pM, {
                                pageId: He,
                                anchor: ye
                              })]
                            })
                          }

                          function EM(ee) {
                            let {
                              section: ie
                            } = ee;
                            return (0, fe.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, fe.jsx)(RH, {
                                level: 2,
                                text: ie.heading.text,
                                anchor: ie.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, fe.jsx)("div", {
                                className: "DocsProse",
                                children: (0, fe.jsx)(TH, {
                                  blocks: ie.blocks
                                })
                              })]
                            })
                          }

                          function gM(ee) {
                            let {
                              section: ie
                            } = ee;
                            return (0, fe.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, fe.jsx)(RH, {
                                level: ie.heading.level,
                                text: ie.heading.text,
                                anchor: ie.heading.anchor
                              }), (0, fe.jsx)(TH, {
                                blocks: ie.blocks
                              })]
                            })
                          }
                          const OM = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function dM(ee) {
                            let {
                              page: ie,
                              section: He
                            } = ee;
                            if ("methods" === ie.layout || "callbacks" === ie.layout) return (0, fe.jsx)(XM, {
                              method: tH(He),
                              pageId: ie.id,
                              anchor: He.heading.anchor,
                              isCallback: "callbacks" === ie.layout
                            });
                            if ("settings" === ie.layout) {
                              const ee = function(ee) {
                                const ie = {
                                  name: ee.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const ye of ee.blocks) {
                                  var He;
                                  if (WH(ye)) continue;
                                  const ee = "paragraph" === ye.kind ? ye.text.match(ZH) : null;
                                  if (!ee) {
                                    ie.description.push(ye);
                                    continue
                                  }
                                  const be = null !== (He = dH(ee[2])) && void 0 !== He ? He : ee[2];
                                  "Type" === ee[1] ? ie.type = be : "Default" === ee[1] ? ie.defaultValue = be : "" !== be && (ie.example = be)
                                }
                                return ie.type ? ie : null
                              }(He);
                              if (ee) return (0, fe.jsx)(BM, {
                                setting: ee,
                                pageId: ie.id,
                                anchor: He.heading.anchor,
                                setterSnippet: ie.setterSnippet
                              })
                            }
                            return "snippets" === ie.layout ? (0, fe.jsx)(EM, {
                              section: He
                            }) : "changelog" === ie.layout ? (0, fe.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, fe.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, fe.jsx)(RH, {
                                  level: 2,
                                  text: He.heading.text,
                                  anchor: He.heading.anchor
                                })
                              }), (0, fe.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, fe.jsx)(TH, {
                                  blocks: wH(He.blocks)
                                })
                              })]
                            }) : ie.gallery ? (0, fe.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, fe.jsx)(RH, {
                                level: He.heading.level,
                                text: He.heading.text,
                                anchor: He.heading.anchor
                              }), (0, fe.jsx)(Dy, {
                                kind: ie.gallery,
                                content: ue(ie),
                                blocks: He.blocks
                              })]
                            }) : (0, fe.jsx)(gM, {
                              section: He
                            })
                          }

                          function WM(ee) {
                            let {
                              page: ie,
                              onTocChange: He
                            } = ee;
                            const be = ue(ie),
                              [Me, Ke] = (0, ye.useState)(""),
                              Ue = "article" !== ie.layout,
                              Fe = zH(ie.gallery) ? ie.gallery : null,
                              Je = null !== Fe,
                              oe = Me.trim().toLowerCase(),
                              Re = (0, ye.useRef)(null),
                              ke = (0, ye.useCallback)((ee => {
                                var ie;
                                null === (ie = Re.current) || void 0 === ie || ie.preview(ee)
                              }), []),
                              qe = (0, ye.useMemo)((() => {
                                if (!ie.hasParticlePlayground) return [];
                                const ee = YH(be.intro).find((ee => "names" === ee.kind && !ee.names.some((ee => null !== mH(ee.name)))));
                                return "names" === (null === ee || void 0 === ee ? void 0 : ee.kind) ? ee.names.map((ee => ee.name)) : []
                              }), [ie, be]),
                              Te = (0, ye.useMemo)((() => {
                                if (!ie.hasTextPlayground) return [];
                                const ee = be.sections.flatMap((ee => ee.blocks.flatMap((ee => {
                                  var ie;
                                  return (null !== (ie = AH(ee)) && void 0 !== ie ? ie : []).flatMap((ee => ui(ee.name) ? [ee.name] : []))
                                }))));
                                return [...new Set(ee)]
                              }), [ie, be]),
                              pe = (0, ye.useMemo)((() => oe ? be.sections.filter((ee => function(ee, ie) {
                                return !!ee.heading.text.toLowerCase().includes(ie) || ee.blocks.some((ee => (0, We.i)(ee).toLowerCase().includes(ie)))
                              }(ee, oe))) : be.sections), [be, oe]),
                              Xe = (0, ye.useMemo)((() => function(ee, ie) {
                                return "article" !== ee.layout ? ie.map((ee => ({
                                  anchor: ee.heading.anchor,
                                  text: ee.heading.text,
                                  level: 2
                                }))) : ie.flatMap((ee => {
                                  const ie = ee.blocks.flatMap((ee => "heading" === ee.kind && 3 === ee.level ? [{
                                    anchor: ee.anchor,
                                    text: ee.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: ee.heading.anchor,
                                    text: ee.heading.text,
                                    level: 2
                                  }, ...ie]
                                }))
                              }(ie, pe)), [ie, pe]);
                            return (0, ye.useEffect)((() => {
                              He(Xe)
                            }), [Xe, He]), (0, fe.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, fe.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, fe.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: be.title || ie.title
                                }), (0, fe.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: ie.summary
                                }), (0, fe.jsx)(Gy, {
                                  page: ie
                                }), Ue && (0, fe.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, fe.jsxs)("span", {
                                    children: [(0, fe.jsx)("strong", {
                                      children: be.sections.length
                                    }), " ", OM[ie.layout]]
                                  })
                                })]
                              }), "" === ie.slug && (0, fe.jsx)(Ay, {}), Fe && (0, fe.jsx)(cy, {
                                kind: Fe
                              }, Fe), ie.hasParticlePlayground && (0, fe.jsx)(ob, {
                                ref: Re,
                                textures: qe
                              }), !Je && be.intro.length > 0 && (0, fe.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: ie.gallery ? (0, fe.jsx)(By.Provider, {
                                  value: ie.hasParticlePlayground ? ke : null,
                                  children: (0, fe.jsx)(Dy, {
                                    kind: ie.gallery,
                                    content: be,
                                    blocks: be.intro
                                  })
                                }) : (0, fe.jsx)(TH, {
                                  blocks: wH(be.intro)
                                })
                              }), ie.hasTextPlayground && (0, fe.jsx)(Zb, {
                                fontAwesomeIcons: Te
                              }), ie.hasVoicePlayground && (0, fe.jsx)(Qb, {}), ie.childPageIds && (0, fe.jsx)(Ay, {
                                cards: ie.childPageIds.map((ee => ({
                                  pageId: ee
                                }))),
                                label: ie.title
                              }), Ue && (0, fe.jsx)(gH, {
                                className: "DocsFilterBar",
                                value: Me,
                                placeholder: `Filter ${be.sections.length} ${OM[ie.layout]}\u2026`,
                                label: `Filter ${OM[ie.layout]}`,
                                onChange: Ke,
                                count: oe ? {
                                  visible: pe.length,
                                  total: be.sections.length
                                } : null
                              }), !Je && (0, fe.jsxs)("div", {
                                className: `DocsSections Layout-${ie.layout}`,
                                children: [pe.map((ee => (0, fe.jsx)(dM, {
                                  page: ie,
                                  section: ee
                                }, ee.heading.anchor))), 0 === pe.length && (0, fe.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", OM[ie.layout], " match \u201c", Me, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const tM = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function ZM(ee) {
                            let {
                              entry: ie,
                              isActive: He,
                              onNavigate: ye,
                              label: be,
                              children: Ke
                            } = ee;
                            return (0, fe.jsx)("a", {
                              href: `#${ie.anchor}`,
                              "aria-label": be,
                              className: Me()(`Level${ie.level}`, {
                                Active: He
                              }),
                              "aria-current": He ? "location" : void 0,
                              onClick: ee => {
                                ee.preventDefault(), ye(ie.anchor)
                              },
                              children: Ke
                            })
                          }

                          function wM(ee) {
                            let {
                              toc: ie,
                              activeAnchor: He,
                              onNavigate: be
                            } = ee;
                            const Ke = Math.max(0, ie.findIndex((ee => ee.anchor === He))),
                              Ue = (0, ye.useRef)(null),
                              Fe = (0, ye.useRef)(!1);
                            (0, ye.useEffect)((() => {
                              var ee, He;
                              const ye = null === (ee = Ue.current) || void 0 === ee ? void 0 : ee.closest(".DocsToc"),
                                be = null === (He = Ue.current) || void 0 === He ? void 0 : He.querySelector(".DocsTimelineNotch.Active");
                              if (!ye || !be) return;
                              let Me = 0;
                              if (Ke === ie.length - 1) Me = ye.scrollHeight;
                              else if (Ke > 0) {
                                const ee = ye.getBoundingClientRect(),
                                  ie = be.getBoundingClientRect();
                                Me = ye.scrollTop + ie.top + ie.height / 2 - (ee.top + ye.clientHeight / 2)
                              }
                              ye.scrollTo({
                                top: Me,
                                behavior: Fe.current ? "smooth" : "auto"
                              }), Fe.current = !0
                            }), [Ke, ie.length]);
                            const Je = [];
                            return ie.forEach(((ee, ie) => {
                              var He, ye, be;
                              const Me = function(ee) {
                                  const ie = ee.trim().match(tM);
                                  return ie ? {
                                    day: ie[1],
                                    month: `${ie[2]} ${ie[3]}`
                                  } : null
                                }(ee.text),
                                Ke = null !== (He = null === Me || void 0 === Me ? void 0 : Me.month) && void 0 !== He ? He : null;
                              null !== Ke && (null === (ye = Je.at(-1)) || void 0 === ye ? void 0 : ye.month) === Ke || Je.push({
                                month: Ke,
                                entries: []
                              }), Je.at(-1).entries.push({
                                entry: ee,
                                day: null !== (be = null === Me || void 0 === Me ? void 0 : Me.day) && void 0 !== be ? be : null,
                                index: ie
                              })
                            })), (0, fe.jsx)("ol", {
                              ref: Ue,
                              className: "DocsTimeline",
                              children: Je.map((ee => {
                                let {
                                  month: ie,
                                  entries: He
                                } = ee;
                                return (0, fe.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [ie && (0, fe.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: ie
                                  }), (0, fe.jsx)("ol", {
                                    children: He.map((ee => {
                                      let {
                                        entry: ie,
                                        day: He,
                                        index: ye
                                      } = ee;
                                      return (0, fe.jsx)("li", {
                                        className: Me()("DocsTimelineNotch", {
                                          Passed: ye < Ke,
                                          Active: ye === Ke
                                        }),
                                        children: (0, fe.jsx)(ZM, {
                                          entry: ie,
                                          isActive: ye === Ke,
                                          onNavigate: be,
                                          label: ie.text,
                                          children: (0, fe.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== He && void 0 !== He ? He : ie.text
                                          })
                                        })
                                      }, ie.anchor)
                                    }))
                                  })]
                                }, He[0].entry.anchor)
                              }))
                            })
                          }

                          function DM(ee) {
                            let {
                              isChangelog: ie,
                              toc: He,
                              activeAnchor: ye,
                              onNavigate: be
                            } = ee;
                            return 0 === He.length ? null : (0, fe.jsxs)(fe.Fragment, {
                              children: [(0, fe.jsx)("div", {
                                className: "DocsTocTitle",
                                children: ie ? "Updates" : "On this page"
                              }), ie ? (0, fe.jsx)(wM, {
                                toc: He,
                                activeAnchor: ye,
                                onNavigate: be
                              }) : (0, fe.jsx)("ul", {
                                children: He.map((ee => (0, fe.jsx)("li", {
                                  children: (0, fe.jsx)(ZM, {
                                    entry: ee,
                                    isActive: ee.anchor === ye,
                                    onNavigate: be,
                                    children: ee.text.replace(/`/g, "")
                                  })
                                }, ee.anchor)))
                              })]
                            })
                          }
                          const PM = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            AM = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            YM = 20,
                            VM = 10,
                            aM = 40,
                            cM = 120;
                          let xM;

                          function LM(ee) {
                            const ie = ee.gallery;
                            if (!ie) return [];
                            if (zH(ie)) return function(ee) {
                              return EH(ee).entries.map((ee => ee.name))
                            }(ie).map((He => ({
                              page: ee,
                              anchor: aH(ie, He),
                              title: He,
                              kind: AM[ie],
                              text: "",
                              listedUnder: ee.title
                            })));
                            const He = ue(ee);
                            return (0, We.x)(He).flatMap((ye => {
                              const be = ye.heading ? `${ee.title} \u203a ${ye.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : ee.title;
                              return xH(ie, He, ye.blocks).flatMap((He => "names" !== He.kind ? [] : He.names.map((ye => {
                                const Me = He.isSongs ? "Song" : AM[ie];
                                return {
                                  page: ee,
                                  anchor: ye.anchor,
                                  title: ye.name,
                                  kind: Me,
                                  text: "",
                                  listedUnder: be
                                }
                              }))))
                            }))
                          }

                          function CM(ee, ie, He) {
                            const ye = ee.title.toLowerCase();
                            let be = 0;
                            if (ye === ie) be = 100;
                            else if (ye.startsWith(ie)) be = 80;
                            else if (ye.includes(ie)) be = 60;
                            else if (He.every((ee => ye.includes(ee)))) be = 45;
                            else {
                              if (!ee.text.toLowerCase().includes(ie)) return 0;
                              be = 20
                            }
                            return be - Math.min(ye.length / 10, 9) + ("Page" === ee.kind ? 8 : "Method" === ee.kind ? 3 : 0) - (ee.listedUnder ? YM : 0)
                          }

                          function vM(ee, ie) {
                            const He = ee.toLowerCase().indexOf(ie),
                              ye = Math.max(0, He - cM / 3);
                            return `${ye>0?"\u2026":""}${ee.slice(ye,ye+cM)}${ye+cM<ee.length?"\u2026":""}`
                          }

                          function uM(ee) {
                            let {
                              text: ie,
                              query: He
                            } = ee;
                            const ye = He ? ie.toLowerCase().indexOf(He) : -1;
                            return -1 === ye ? (0, fe.jsx)(fe.Fragment, {
                              children: ie
                            }) : (0, fe.jsxs)(fe.Fragment, {
                              children: [ie.slice(0, ye), (0, fe.jsx)("mark", {
                                children: ie.slice(ye, ye + He.length)
                              }), ie.slice(ye + He.length)]
                            })
                          }

                          function mM(ee) {
                            let {
                              basePath: ie,
                              onClose: He
                            } = ee;
                            const be = (0, Ue.w)(),
                              [Ke, Fe] = (0, ye.useState)(""),
                              [Je, oe] = (0, ye.useState)(0),
                              Re = (0, ye.useRef)(null),
                              ke = (0, ye.useRef)(null),
                              qe = Ke.trim().toLowerCase(),
                              Te = (0, ye.useMemo)((() => {
                                const ee = (xM || (xM = xe.flatMap((ee => {
                                  const ie = ue(ee);
                                  return [{
                                    page: ee,
                                    anchor: "",
                                    title: ee.title,
                                    kind: "Page",
                                    text: ee.summary
                                  }, ...ie.sections.flatMap((ie => {
                                    const He = ie.blocks.filter((ee => "paragraph" === ee.kind)).map(We.i).join(" ").replace(/[`*]/g, ""),
                                      ye = {
                                        page: ee,
                                        anchor: ie.heading.anchor,
                                        title: ie.heading.text.replace(/`/g, ""),
                                        kind: PM[ee.layout],
                                        text: He
                                      },
                                      be = ie.blocks.flatMap((ie => "article" === ee.layout && "heading" === ie.kind && 3 === ie.level ? [{
                                        page: ee,
                                        anchor: ie.anchor,
                                        title: ie.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: ye.title
                                      }] : []));
                                    return [ye, ...be]
                                  })), ...LM(ee)]
                                }))), xM);
                                if (!qe) return ee.filter((ee => "Page" === ee.kind));
                                const ie = qe.split(/\s+/);
                                let He = 0;
                                return ee.map((ee => ({
                                  entry: ee,
                                  score: CM(ee, qe, ie)
                                }))).filter((ee => ee.score > 0)).sort(((ee, ie) => ie.score - ee.score)).filter((ee => !ee.entry.listedUnder || (He++, He <= VM))).slice(0, aM).map((ee => ee.entry))
                              }), [qe]);
                            (0, ye.useEffect)((() => {
                              oe(0)
                            }), [qe]), (0, ye.useEffect)((() => {
                              const ee = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === ee || void 0 === ee || ee.focus()
                              }
                            }), []), (0, ye.useEffect)((() => {
                              var ee, ie;
                              null === (ee = Re.current) || void 0 === ee || null === (ie = ee.querySelector(".Active")) || void 0 === ie || ie.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Je]);
                            const Xe = ee => {
                              be(ne(ie, ee.page, ee.anchor)), He()
                            };
                            return (0, fe.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: ee => {
                                ee.target === ee.currentTarget && He()
                              },
                              children: (0, fe.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: ee => {
                                  ee.target !== ke.current && ee.preventDefault()
                                },
                                onKeyDown: ee => {
                                  if ("Escape" === ee.key) He();
                                  else if ("Tab" === ee.key) {
                                    var ie;
                                    ee.preventDefault(), null === (ie = ke.current) || void 0 === ie || ie.focus()
                                  }
                                },
                                children: [(0, fe.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, fe.jsx)(pe, {
                                    name: "magnifying-glass"
                                  }), (0, fe.jsx)("input", {
                                    ref: ke,
                                    autoFocus: !0,
                                    value: Ke,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Te.length > 0 ? `DocsSearchResult-${Je}` : void 0,
                                    onChange: ee => {
                                      Fe(ee.target.value)
                                    },
                                    onKeyDown: ee => {
                                      if ("ArrowDown" === ee.key || "ArrowUp" === ee.key) {
                                        ee.preventDefault();
                                        const ie = "ArrowDown" === ee.key ? 1 : -1;
                                        oe((Je + ie + Te.length) % Math.max(Te.length, 1))
                                      } else "Enter" === ee.key && Te[Je] && Xe(Te[Je])
                                    }
                                  }), (0, fe.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, fe.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Re,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!qe && (0, fe.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Te.map(((ee, ie) => {
                                    var He;
                                    return (0, fe.jsxs)("li", {
                                      id: `DocsSearchResult-${ie}`,
                                      role: "option",
                                      "aria-selected": ie === Je,
                                      className: Me()("DocsSearchResult", {
                                        Active: ie === Je
                                      }),
                                      onMouseMove: () => {
                                        oe(ie)
                                      },
                                      onClick: () => {
                                        Xe(ee)
                                      },
                                      children: [(0, fe.jsx)(pe, {
                                        name: ee.page.icon
                                      }), (0, fe.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, fe.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, fe.jsx)(uM, {
                                            text: ee.title,
                                            query: qe
                                          })
                                        }), ee.text && (0, fe.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, fe.jsx)(uM, {
                                            text: vM(ee.text, qe),
                                            query: qe
                                          })
                                        })]
                                      }), (0, fe.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === ee.kind ? "Page" : null !== (He = ee.listedUnder) && void 0 !== He ? He : `${ee.kind} \xb7 ${ee.page.title}`
                                      })]
                                    }, `${ee.page.id}#${ee.anchor}`)
                                  })), qe && 0 === Te.length && (0, fe.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Ke, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function lM(ee, ie) {
                            if (ie < 10) return `${ee.toFixed(1)}s`;
                            const He = Math.floor(ee);
                            return `${Math.floor(He/60)}:${String(He%60).padStart(2,"0")}`
                          }

                          function SM() {
                            const ee = ky((ee => ee.track)),
                              ie = ky((ee => ee.volume)),
                              [He, be] = (0, ye.useState)(0),
                              Ke = (0, ye.useRef)(yy);
                            if ((0, ye.useEffect)((() => {
                                if (!ee) return;
                                if (be(py()), "playing" !== ee.status) return;
                                let ie = 0;
                                const He = () => {
                                  be(py()), ie = requestAnimationFrame(He)
                                };
                                return ie = requestAnimationFrame(He), () => {
                                  cancelAnimationFrame(ie)
                                }
                              }), [ee]), !ee) return null;
                            const Ue = "paused" !== ee.status,
                              Fe = Math.min(He, ee.duration);
                            return (0, fe.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, fe.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, fe.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": Ue ? `Pause ${ee.name}` : `Play ${ee.name}`,
                                  onClick: Ty,
                                  children: (0, fe.jsx)(pe, {
                                    name: Ue ? "pause" : "play"
                                  })
                                }), (0, fe.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, fe.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, fe.jsx)("code", {
                                      children: ee.name
                                    }), (0, fe.jsx)("span", {
                                      children: ee.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, fe.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, fe.jsx)("span", {
                                      children: lM(Fe, ee.duration)
                                    }), (0, fe.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: ee.duration || 1,
                                      step: .01,
                                      value: Fe,
                                      disabled: 0 === ee.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${lM(Fe,ee.duration)} of ${lM(ee.duration,ee.duration)}`,
                                      onChange: ee => {
                                        const ie = Number(ee.target.value);
                                        ! function(ee) {
                                          var ie;
                                          Fy = ee, null === (ie = Ky) || void 0 === ie || ie.seek(ee)
                                        }(ie), be(ie)
                                      }
                                    }), (0, fe.jsx)("span", {
                                      children: ee.duration > 0 ? lM(ee.duration, ee.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, fe.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, fe.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === ie ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === ie ? Xy(Ke.current) : (Ke.current = ie, Xy(0))
                                    },
                                    children: (0, fe.jsx)(pe, {
                                      name: "volume",
                                      className: Me()({
                                        Muted: 0 === ie
                                      })
                                    })
                                  }), (0, fe.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: ie,
                                    "aria-label": "Volume",
                                    onChange: ee => {
                                      Xy(Number(ee.target.value))
                                    }
                                  })]
                                }), (0, fe.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var ie;
                                    null === (ie = document.querySelector(`[data-docs-track="${CSS.escape(by(ee.name,ee.isSong))}"]`)) || void 0 === ie || ie.focus(), zy()
                                  },
                                  children: (0, fe.jsx)(pe, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var nM = He(35);
                          const jM = "docsTheme",
                            sM = window.matchMedia("(prefers-color-scheme: light)");

                          function IM(ee) {
                            let {
                              theme: ie,
                              onChange: He
                            } = ee;
                            const ye = "dark" === ie ? "light" : "dark";
                            return (0, fe.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${ye} theme`,
                              title: `Switch to ${ye} theme`,
                              onClick: () => {
                                He(ye)
                              },
                              children: (0, fe.jsx)(pe, {
                                name: "dark" === ie ? "moon" : "sun"
                              })
                            })
                          }
                          const hM = "https://github.com/Bloxdy/code-api",
                            NM = "https://discord.gg/playbloxd",
                            GM = 180,
                            rM = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function QM(ee) {
                            let {
                              basePath: ie,
                              activePageId: He,
                              onNavigate: ye
                            } = ee;
                            return (0, fe.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Le.map((ee => (0, fe.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, fe.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: ee.title
                                }), ee.pageIds.map((ee => {
                                  var be;
                                  const Ue = Ce(ee);
                                  return (0, fe.jsxs)(Ke.e, {
                                    to: ne(ie, Ue),
                                    className: Me()("DocsNavLink", {
                                      Active: Ue.id === He
                                    }),
                                    "aria-current": Ue.id === He ? "page" : void 0,
                                    onClick: ye,
                                    children: [(0, fe.jsx)(pe, {
                                      name: Ue.icon
                                    }), (0, fe.jsx)("span", {
                                      children: null !== (be = Ue.navTitle) && void 0 !== be ? be : Ue.title
                                    })]
                                  }, Ue.id)
                                }))]
                              }, ee.title)))
                            })
                          }

                          function eK(ee) {
                            let {
                              basePath: ie,
                              pageId: He
                            } = ee;
                            const ye = Le.flatMap((ee => ee.pageIds)),
                              be = ye.indexOf(He),
                              Me = be > 0 ? Ce(ye[be - 1]) : null,
                              Ue = be < ye.length - 1 ? Ce(ye[be + 1]) : null;
                            return (0, fe.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Me ? (0, fe.jsxs)(Ke.e, {
                                className: "DocsPagerLink Previous",
                                to: ne(ie, Me),
                                children: [(0, fe.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, fe.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Me.title
                                })]
                              }) : (0, fe.jsx)("span", {}), Ue && (0, fe.jsxs)(Ke.e, {
                                className: "DocsPagerLink Next",
                                to: ne(ie, Ue),
                                children: [(0, fe.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, fe.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Ue.title
                                })]
                              })]
                            })
                          }

                          function iK(ee) {
                            let {
                              basePath: ie,
                              embedded: He = !1
                            } = ee;
                            const {
                              pageSlug: be = ""
                            } = (0, Ue.B)(), Je = (0, Ue.u)(), oe = (0, Ue.w)(), Re = (ke = be, xe.find((ee => ee.slug === ke)));
                            var ke;
                            const [qe, Te] = function() {
                              const [ee, ie] = (0, ye.useState)((() => {
                                const ee = nM.i.getItem(jM);
                                return "dark" === ee || "light" === ee ? ee : null
                              })), [He, be] = (0, ye.useState)(sM.matches ? "light" : "dark");
                              return (0, ye.useEffect)((() => {
                                const ee = () => {
                                  be(sM.matches ? "light" : "dark")
                                };
                                return sM.addEventListener("change", ee), () => {
                                  sM.removeEventListener("change", ee)
                                }
                              }), []), [null !== ee && void 0 !== ee ? ee : He, ee => {
                                nM.i.setItem(jM, ee), ie(ee)
                              }]
                            }(), [Xe, ze] = (0, ye.useState)(null), [Be, Ee] = (0, ye.useState)(!1), [ge, Oe] = (0, ye.useState)(!1), [de, te] = (0, ye.useState)([]), Ze = function(ee, ie) {
                              const [He, be] = (0, ye.useState)("");
                              return (0, ye.useEffect)((() => {
                                if (!ie) return;
                                let He = 0;
                                const ye = () => {
                                    var ye, Me;
                                    He = 0;
                                    const Ke = ie.getBoundingClientRect().top + GM;
                                    let Ue = null !== (ye = null === (Me = ee[0]) || void 0 === Me ? void 0 : Me.anchor) && void 0 !== ye ? ye : "";
                                    for (const ie of ee) {
                                      const ee = document.getElementById(ie.anchor);
                                      ee && ee.getBoundingClientRect().top <= Ke && (Ue = ie.anchor)
                                    }
                                    ie.scrollTop + ie.clientHeight >= ie.scrollHeight - 2 && ie.scrollTop > 0 && ee.length > 0 && (Ue = ee[ee.length - 1].anchor), be(Ue)
                                  },
                                  Me = () => {
                                    He || (He = requestAnimationFrame(ye))
                                  };
                                return ye(), ie.addEventListener("scroll", Me, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(He), ie.removeEventListener("scroll", Me)
                                }
                              }), [ee, ie]), He
                            }(de, Xe), we = "" === be && Je.hash ? function(ee) {
                              const ie = (0, We.q)(ee);
                              if (me(Ce("welcome"), ie)) return null;
                              const He = Object.hasOwn(Se, ie) ? Se[ie] : null;
                              if (He) return {
                                page: Ce(He.pageId),
                                anchor: He.anchor
                              };
                              const ye = Ce("readme");
                              return me(ye, ie) ? {
                                page: ye,
                                anchor: ie
                              } : le(`#${ie}`)
                            }(Je.hash) : null;
                            (0, ye.useEffect)((() => (Fe.e.set({
                              musicOnFromPage: !1
                            }), () => {
                              Fe.e.set({
                                musicOnFromPage: !0
                              }), zy()
                            })), []), (0, ye.useEffect)((() => {
                              const ee = ee => {
                                const ie = ee.target;
                                if (ie.closest(".DocsTextDialog")) return;
                                const He = ie.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(ie.tagName);
                                "k" === ee.key && (ee.metaKey || ee.ctrlKey) || "/" === ee.key && !He ? (ee.preventDefault(), Oe(!0)) : "Escape" === ee.key && Ee(!1)
                              };
                              return window.addEventListener("keydown", ee), () => {
                                window.removeEventListener("keydown", ee)
                              }
                            }), []);
                            const De = (0, ye.useRef)(null);
                            (0, ye.useLayoutEffect)((() => {
                              var ee, ie;
                              if (!Xe) return;
                              const He = De.current === Je.pathname;
                              De.current = Je.pathname;
                              const ye = (0, We.q)(Je.hash),
                                be = ye ? document.getElementById(ye) : null;
                              if (null === (ee = Xe.querySelector(".DocsTargeted")) || void 0 === ee || ee.classList.remove("DocsTargeted"), null === be || void 0 === be || null === (ie = be.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === ie || ie.classList.add("DocsTargeted"), be) {
                                var Me;
                                const ee = be.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Me = be.closest(".DocsChangelogEntry")) && void 0 !== Me ? Me : be).scrollIntoView({
                                  block: ee ? "center" : "start",
                                  behavior: He ? "smooth" : "auto"
                                })
                              } else He || Xe.scrollTo({
                                top: 0
                              })
                            }), [Xe, Je.pathname, Je.hash, Je.key]);
                            const Pe = (0, ye.useCallback)((() => {
                                Ee(!1)
                              }), []),
                              Ae = (0, ye.useCallback)((ee => {
                                oe({
                                  hash: ee
                                })
                              }), [oe]);
                            if (we) return (0, fe.jsx)(Ue.b, {
                              replace: !0,
                              to: ne(ie, we.page, we.anchor)
                            });
                            if (!Re) return (0, fe.jsx)(Ue.b, {
                              replace: !0,
                              to: ie
                            });
                            const Ye = He ? "div" : "main";
                            return (0, fe.jsx)(qi.Provider, {
                              value: ie,
                              children: (0, fe.jsx)(fi.Provider, {
                                value: Xe,
                                children: (0, fe.jsxs)("div", {
                                  ref: ze,
                                  className: Me()("DocsSite", {
                                    Embedded: He,
                                    NavOpen: Be
                                  }),
                                  "data-theme": qe,
                                  children: [(0, fe.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, fe.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Be ? "Close menu" : "Open menu",
                                      "aria-expanded": Be,
                                      onClick: () => {
                                        Ee(!Be)
                                      },
                                      children: (0, fe.jsx)(pe, {
                                        name: Be ? "cross" : "menu"
                                      })
                                    }), (0, fe.jsxs)(Ke.e, {
                                      to: ie,
                                      className: "DocsBrand",
                                      children: [(0, fe.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, fe.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, fe.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, fe.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        Oe(!0)
                                      },
                                      children: [(0, fe.jsx)(pe, {
                                        name: "magnifying-glass"
                                      }), (0, fe.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, fe.jsxs)("kbd", {
                                        children: [rM ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, fe.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, fe.jsxs)("a", {
                                        href: NM,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, fe.jsx)(pe, {
                                          name: "discord"
                                        }), (0, fe.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, fe.jsxs)("a", {
                                        href: hM,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, fe.jsx)(pe, {
                                          name: "external-link"
                                        }), (0, fe.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !He && (0, fe.jsxs)(Ke.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, fe.jsx)(pe, {
                                          name: "play"
                                        }), (0, fe.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, fe.jsx)(IM, {
                                        theme: qe,
                                        onChange: Te
                                      })]
                                    })]
                                  }), (0, fe.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, fe.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, fe.jsx)(QM, {
                                        basePath: ie,
                                        activePageId: Re.id,
                                        onNavigate: Pe
                                      })
                                    }), (0, fe.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Pe
                                    }), (0, fe.jsxs)(Ye, {
                                      className: "DocsMain",
                                      children: [(0, fe.jsx)(WM, {
                                        page: Re,
                                        onTocChange: te
                                      }, Re.id), (0, fe.jsx)(eK, {
                                        basePath: ie,
                                        pageId: Re.id
                                      })]
                                    }), (0, fe.jsx)("aside", {
                                      className: Me()("DocsToc", {
                                        Timeline: "changelog" === Re.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, fe.jsx)(DM, {
                                        isChangelog: "changelog" === Re.layout,
                                        toc: de,
                                        activeAnchor: Ze,
                                        onNavigate: Ae
                                      })
                                    })]
                                  }), (0, fe.jsx)(SM, {}), ge && (0, fe.jsx)(mM, {
                                    basePath: ie,
                                    onClose: () => {
                                      Oe(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5220: (ee, ie, He) => {
                          He.d(ie, {
                            C: () => ke,
                            e: () => ye,
                            h: () => Ke,
                            i: () => pe,
                            l: () => Te,
                            n: () => Ue,
                            q: () => be,
                            t: () => Me,
                            x: () => fe,
                            y: () => qe
                          });
                          const ye = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function be(ee) {
                            try {
                              return decodeURIComponent(ee.slice(1))
                            } catch {
                              return ee.slice(1)
                            }
                          }

                          function Me(ee) {
                            return ee.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Ke = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${ye.source}`, "g");

                          function Ue(ee, ie) {
                            return 2 === ee.length ? ie.replace(/^ (.*) $/, "$1") : ie
                          }

                          function Fe(ee) {
                            return "" === ee.trim()
                          }

                          function Je(ee) {
                            const ie = [];
                            for (const He of ee.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ie.length > 0 && ie[ie.length - 1].endsWith("\\") ? ie[ie.length - 1] += `|${He}` : ie.push(He);
                            return ie.map((ee => ee.trim().replaceAll("\\|", "|")))
                          }
                          const oe = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Re(ee) {
                            const ie = [],
                              He = [{
                                indent: -1,
                                items: ie
                              }];
                            let ye = null;
                            for (const be of ee) {
                              const ee = be.match(oe);
                              if (!ee) {
                                ye && (ye.text += ` ${be.trim()}`);
                                continue
                              }
                              const ie = ee[1].replace(/\t/g, "  ").length;
                              for (; ie <= He[He.length - 1].indent;) He.pop();
                              ye = {
                                text: ee[3].trim(),
                                children: []
                              }, He[He.length - 1].items.push(ye), He.push({
                                indent: ie,
                                items: ye.children
                              })
                            }
                            return ie
                          }

                          function ke(ee) {
                            const ie = ee.replace(/\r\n/g, "\n").split("\n"),
                              He = [];
                            let ye = 0;
                            for (; ye < ie.length;) {
                              const ee = ie[ye];
                              if (Fe(ee)) {
                                ye++;
                                continue
                              }
                              const be = ee.match(/^\s*```\s*(\w*)\s*$/);
                              if (be) {
                                const ee = [];
                                for (ye++; ye < ie.length && !/^\s*```\s*$/.test(ie[ye]);) ee.push(ie[ye]), ye++;
                                ye++, He.push({
                                  kind: "code",
                                  lang: be[1] || "text",
                                  code: ee.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Ke = ee.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Ke) {
                                const ee = Ke[2].trim();
                                He.push({
                                  kind: "heading",
                                  level: Ke[1].length,
                                  text: ee,
                                  anchor: Me(ee)
                                }), ye++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(ee)) {
                                He.push({
                                  kind: "rule"
                                }), ye++;
                                continue
                              }
                              if (ee.trim().startsWith("|") && ye + 1 < ie.length && /^\s*\|[\s:|-]+\|\s*$/.test(ie[ye + 1])) {
                                const be = Je(ee),
                                  Me = [];
                                for (ye += 2; ye < ie.length && ie[ye].trim().startsWith("|");) Me.push(Je(ie[ye])), ye++;
                                He.push({
                                  kind: "table",
                                  header: be,
                                  rows: Me
                                });
                                continue
                              }
                              if (ee.startsWith(">")) {
                                const ee = [];
                                for (; ye < ie.length && ie[ye].startsWith(">");) ee.push(ie[ye].replace(/^>\s?/, "")), ye++;
                                He.push({
                                  kind: "quote",
                                  blocks: ke(ee.join("\n"))
                                });
                                continue
                              }
                              if (oe.test(ee)) {
                                const be = [],
                                  Me = /^\s*\d+\./.test(ee);
                                for (; ye < ie.length && !Fe(ie[ye]) && (oe.test(ie[ye]) || /^\s+\S/.test(ie[ye]));) be.push(ie[ye]), ye++;
                                He.push({
                                  kind: "list",
                                  ordered: Me,
                                  items: Re(be)
                                });
                                continue
                              }
                              const Ue = [];
                              for (; ye < ie.length && !Fe(ie[ye]) && !/^\s*```/.test(ie[ye]) && !/^#{1,6}\s/.test(ie[ye]) && !ie[ye].startsWith(">") && !oe.test(ie[ye]) && (!ie[ye].trim().startsWith("|") || 0 !== Ue.length);) Ue.push(ie[ye].trim()), ye++;
                              0 === Ue.length && (Ue.push(ie[ye].trim()), ye++), He.push({
                                kind: "paragraph",
                                text: Ue.join(" ")
                              })
                            }
                            return He
                          }

                          function qe(ee) {
                            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const He = ke(ee);
                            let ye = "";
                            const be = [],
                              Me = [],
                              Ke = new Map;
                            for (const Je of He) {
                              if ("heading" === Je.kind) {
                                var Ue;
                                const ee = (null !== (Ue = Ke.get(Je.anchor)) && void 0 !== Ue ? Ue : 0) + 1;
                                Ke.set(Je.anchor, ee), ee > 1 && (Je.anchor = `${Je.anchor}-${ee}`)
                              }
                              if ("heading" === Je.kind && 1 === Je.level && !ye) {
                                ye = Je.text;
                                continue
                              }
                              if ("heading" === Je.kind && Je.level <= ie) {
                                Me.push({
                                  heading: Je,
                                  blocks: []
                                });
                                continue
                              }
                              const ee = Me.at(-1);
                              ee ? ee.blocks.push(Je) : be.push(Je)
                            }
                            const Fe = ee => {
                              for (;
                                "rule" === (null === (ie = ee.at(-1)) || void 0 === ie ? void 0 : ie.kind);) {
                                var ie;
                                ee.pop()
                              }
                            };
                            Fe(be);
                            for (const Je of Me) Fe(Je.blocks);
                            return {
                              title: ye,
                              intro: be,
                              sections: Me
                            }
                          }

                          function fe(ee) {
                            return [{
                              heading: null,
                              blocks: ee.intro
                            }, ...ee.sections.map((ee => ({
                              heading: ee.heading,
                              blocks: ee.blocks
                            })))]
                          }

                          function Te(ee) {
                            return ee.flatMap((ee => "code" === ee.kind ? [ee] : "quote" === ee.kind ? Te(ee.blocks) : []))
                          }

                          function pe(ee) {
                            switch (ee.kind) {
                              case "heading":
                              case "paragraph":
                                return ee.text;
                              case "code":
                                return ee.code;
                              case "table":
                                return [ee.header, ...ee.rows].map((ee => ee.join(" "))).join(" ");
                              case "list": {
                                const ie = ee => ee.map((ee => `${ee.text} ${ie(ee.children)}`)).join(" ");
                                return ie(ee.items)
                              }
                              case "quote":
                                return ee.blocks.map(pe).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5317: (ee, ie, He) => {
                          He.d(ie, {
                            c: () => Ue
                          });
                          var ye = He(59),
                            be = He(335),
                            Me = He(1970),
                            Ke = He(1228);

                          function Ue(ee) {
                            let {
                              text: ie
                            } = ee;
                            const He = [];
                            let Ue = "";
                            return (0, be.kc)(ie).forEach(((ee, ie) => {
                              if ("string" === typeof ee || !(0, Me.e)(ee.icon)) return void(Ue += "string" === typeof ee ? ee : ee.icon);
                              const be = Math.max(0, Ue.trimEnd().search(/\S{1,12}$/));
                              He.push((0, Ke.jsxs)(ye.Fragment, {
                                children: [Ue.slice(0, be), (0, Ke.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [Ue.slice(be), (0, Ke.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": ee.icon,
                                    children: (0, Ke.jsx)(Me.c, {
                                      itemName: ee.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, ie)), Ue = ""
                            })), He.push(Ue), (0, Ke.jsx)(Ke.Fragment, {
                              children: He
                            })
                          }
                        }, 5245: (ee, ie, He) => {
                          He.d(ie, {
                            h: () => ze,
                            e: () => Xe
                          });
                          var ye = He(59),
                            be = He(1432),
                            Me = He(1956),
                            Ke = He(5252),
                            Ue = He(1228);
                          const Fe = (0, ye.memo)((function(ee) {
                            let {
                              initialParameters: ie
                            } = ee;
                            const He = (0, ye.useRef)(null),
                              be = (0, ye.useRef)(null),
                              Fe = (0, ye.useRef)(0),
                              Je = (0, ye.useRef)(null),
                              oe = ie.description,
                              Re = ie.Ii,
                              {
                                scale: ke,
                                rotation: qe
                              } = null !== ie && void 0 !== ie ? ie : {},
                              fe = (0, Ke.e)();
                            return (0, ye.useEffect)((() => {
                              const ee = fe.onFrame((() => {
                                const ee = fe.getState();
                                if (!ee.isActive || !He.current || !be.current) return;
                                const ie = ee.state;
                                if (He.current.value = ie.progress, ie.clickCount > Fe.current) {
                                  Fe.current = ie.clickCount;
                                  const ee = be.current;
                                  ee.classList.add("pulse"), Je.current = setTimeout((() => {
                                    ee.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Je.current), ee()
                              }
                            }), [fe]), (0, Ue.jsx)(Ue.Fragment, {
                              children: (0, Ue.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== ke && {
                                    "--scale": ke
                                  },
                                  ...null !== qe && {
                                    "--rotation": `${qe}deg`
                                  }
                                },
                                children: [(0, Ue.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: He
                                }), (0, Ue.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: be,
                                  children: (0, Ue.jsx)(Me.e, {
                                    text: [{
                                      icon: Re
                                    }]
                                  })
                                }), (0, Ue.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, Ue.jsx)(Me.e, {
                                    text: oe
                                  })
                                })]
                              })
                            })
                          }));
                          var Je = He(1053),
                            oe = He.n(Je);
                          const Re = 2 * Math.PI * 90,
                            ke = (0, ye.memo)((function(ee) {
                              let {
                                initialParameters: ie
                              } = ee;
                              const He = (0, ye.useRef)(null),
                                be = (0, ye.useRef)(null),
                                Fe = (0, ye.useRef)(null),
                                Je = ie.label,
                                ke = ie.icon,
                                qe = ie.ri,
                                {
                                  scale: fe,
                                  rotation: Te,
                                  Qi: pe
                                } = null !== ie && void 0 !== ie ? ie : {},
                                Xe = (0, Ke.e)();
                              return (0, ye.useEffect)((() => {
                                const ee = Xe.onFrame((() => {
                                  var ee, ie;
                                  const ye = Xe.getState();
                                  if (!ye.isActive || !be.current) return;
                                  const Me = ye.state,
                                    Ke = null !== (ee = Me.timeRemaining) && void 0 !== ee ? ee : 0,
                                    Ue = null !== (ie = Me.Gi) && void 0 !== ie ? ie : 1,
                                    Je = Re * (1 - Ke / Ue);
                                  be.current.style.strokeDashoffset = `${Je}`, He.current && (He.current.style.opacity = Ke > 0 ? "1" : "0"), Fe.current && qe && (Fe.current.textContent = `${(Ke/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  ee()
                                }
                              }), [Xe, qe]), (0, Ue.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: He,
                                style: {
                                  ...null !== fe && {
                                    "--scale": fe
                                  },
                                  ...null !== Te && {
                                    "--rotation": `${Te}deg`
                                  }
                                },
                                children: [(0, Ue.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, Ue.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Ue.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, Ue.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Re,
                                      ref: be
                                    })]
                                  }), (0, Ue.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, Ue.jsx)(Me.e, {
                                      text: [{
                                        icon: ke
                                      }],
                                      className: oe()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: pe
                                      })
                                    })
                                  })]
                                }), (0, Ue.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, Ue.jsx)(Me.e, {
                                    text: Je,
                                    className: "QTETimedClickLabelText"
                                  }), qe && (0, Ue.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: Fe
                                  })]
                                })]
                              })
                            })),
                            qe = (0, ye.memo)((function(ee) {
                              let {
                                initialParameters: ie
                              } = ee;
                              const He = (0, ye.useRef)(null),
                                be = (0, ye.useRef)(null),
                                Fe = (0, ye.useRef)(null),
                                Je = (0, ye.useRef)(!1),
                                oe = ie.description,
                                Re = null === ie || void 0 === ie ? void 0 : ie.icon,
                                ke = (0, Ke.e)();
                              return (0, ye.useEffect)((() => {
                                const ee = ke.onFrame((() => {
                                  const ee = ke.getState();
                                  if (!ee.isActive) return;
                                  const ie = ee.state;
                                  if (He.current) {
                                    const ee = 100 * (ie.catchZonePosition - ie.iH / 2);
                                    He.current.style.left = `${ee}%`, He.current.style.width = 100 * ie.iH + "%", ie.isCatching !== Je.current && (Je.current = ie.isCatching, ie.isCatching ? He.current.classList.add("catching") : He.current.classList.remove("catching"))
                                  }
                                  be.current && (be.current.style.left = 100 * ie.moverPosition + "%"), Fe.current && (Fe.current.value = ie.progress)
                                }));
                                return () => {
                                  ee()
                                }
                              }), [ke]), (0, Ue.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, Ue.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, Ue.jsx)(Me.e, {
                                    text: oe
                                  })
                                }), (0, Ue.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: Fe
                                }), (0, Ue.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, Ue.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: He
                                  }), (0, Ue.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: be,
                                    children: (0, Ue.jsx)("span", {
                                      children: Re && (0, Ue.jsx)(Me.e, {
                                        text: [{
                                          icon: Re,
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
                          var fe = He(610);
                          const Te = (0, ye.memo)((function(ee) {
                              let {
                                initialParameters: ie
                              } = ee;
                              const He = (0, ye.useRef)(null),
                                be = ie.label,
                                Fe = ie.JH,
                                {
                                  icon: Je,
                                  scale: oe,
                                  rotation: Re
                                } = null !== ie && void 0 !== ie ? ie : {},
                                ke = 100 * (.5 - Fe / 2),
                                qe = 100 * Fe,
                                Te = (0, Ke.e)();
                              return (0, ye.useEffect)((() => {
                                const ee = Te.onFrame((() => {
                                  const ee = Te.getState();
                                  if (!ee.isActive || !He.current) return;
                                  const ie = ee.state;
                                  He.current.style.left = 100 * ie.markerPosition + "%"
                                }));
                                return () => {
                                  ee()
                                }
                              }), [Te]), (0, Ue.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, fe.P)(oe) && {
                                    "--scale": oe
                                  },
                                  ...!(0, fe.P)(Re) && {
                                    "--rotation": `${Re}deg`
                                  }
                                },
                                children: [Je && (0, Ue.jsx)(Me.e, {
                                  text: [{
                                    icon: Je
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, Ue.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, Ue.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${ke}%`,
                                      width: `${qe}%`
                                    }
                                  }), (0, Ue.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: He
                                  })]
                                }), (0, Ue.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, Ue.jsx)(Me.e, {
                                    text: be
                                  })
                                })]
                              })
                            })),
                            pe = (0, ye.memo)((function(ee) {
                              let {
                                initialParameters: ie
                              } = ee;
                              const He = (0, ye.useRef)(null),
                                [be, Fe] = (0, ye.useState)((() => new Array(ie.RH).fill("pending"))),
                                [Je, oe] = (0, ye.useState)((() => {
                                  const ee = ie.fH;
                                  return (0, fe.P)(ee) || ee <= 0 ? [] : new Array(ee).fill("pending")
                                })),
                                Re = ie.label,
                                {
                                  icon: ke
                                } = ie,
                                qe = (0, ye.useRef)(0),
                                Te = (0, ye.useRef)(0),
                                pe = (0, ye.useRef)([]),
                                Xe = (0, Ke.e)();
                              return (0, ye.useEffect)((() => {
                                const ee = Xe.onFrame((() => {
                                  const ee = Xe.getState();
                                  if (!ee.isActive || !He.current) return;
                                  const ie = ee.state,
                                    ye = 30 + 60 * ie.outerCircleProgress;
                                  if (He.current.setAttribute("r", String(ye)), !0 === ie.lastClickResult && ie.successes > qe.current) {
                                    He.current.classList.remove("QTERhythmClickOuterCircle--miss"), He.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const ee = setTimeout((() => {
                                      var ee;
                                      null === (ee = He.current) || void 0 === ee || ee.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    pe.current.push(ee)
                                  } else if (!1 === ie.lastClickResult && ie.misses > Te.current) {
                                    He.current.classList.remove("QTERhythmClickOuterCircle--hit"), He.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const ee = setTimeout((() => {
                                      var ee;
                                      null === (ee = He.current) || void 0 === ee || ee.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    pe.current.push(ee)
                                  }
                                  ie.successes === qe.current && ie.misses === Te.current || (qe.current = ie.successes, Te.current = ie.misses, Fe((ee => {
                                    const He = [...ee];
                                    for (let ye = 0; ye < ie.RH; ye++) He[ye] = ye < ie.successes ? "success" : "pending";
                                    return He
                                  })), oe((ee => {
                                    if (0 === ee.length) return ee;
                                    const He = [...ee];
                                    for (let ye = 0; ye < He.length; ye++) He[ye] = ye < ie.misses ? "miss" : "pending";
                                    return He
                                  })))
                                }));
                                return () => {
                                  ee();
                                  for (const ee of pe.current) clearTimeout(ee);
                                  pe.current = []
                                }
                              }), [Xe]), (0, Ue.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, Ue.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: be.map(((ee, ie) => (0, Ue.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === ee ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, ie)))
                                }), (0, Ue.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, Ue.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Ue.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, Ue.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: He
                                    })]
                                  }), ke && (0, Ue.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, Ue.jsx)(Me.e, {
                                      text: [{
                                        icon: ke
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Je.length > 0 && (0, Ue.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Je.map(((ee, ie) => (0, Ue.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === ee ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, ie)))
                                }), (0, Ue.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, Ue.jsx)(Me.e, {
                                    text: Re
                                  })
                                })]
                              })
                            }));

                          function Xe(ee) {
                            let {
                              qte: ie
                            } = ee;
                            switch (ie.type) {
                              case "progressBar":
                                return (0, Ue.jsx)(Fe, {
                                  initialParameters: ie.parameters
                                });
                              case "timedClick":
                                return (0, Ue.jsx)(ke, {
                                  initialParameters: ie.parameters
                                });
                              case "gravityBar":
                                return (0, Ue.jsx)(qe, {
                                  initialParameters: ie.parameters
                                });
                              case "precisionBar":
                                return (0, Ue.jsx)(Te, {
                                  initialParameters: ie.parameters
                                });
                              case "rhythmClick":
                                return (0, Ue.jsx)(pe, {
                                  initialParameters: ie.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const ze = (0, ye.memo)((function() {
                            const [ee, ie] = (0, ye.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, be.f)("qteStateUpdated", (ee => {
                              ie(ee)
                            })), ee.isActive && ee.type ? (0, Ue.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, Ue.jsx)(Xe, {
                                qte: ee
                              })
                            }) : null
                          }))
                        }, 5252: (ee, ie, He) => {
                          He.d(ie, {
                            d: () => Ue,
                            e: () => Fe
                          });
                          var ye = He(59),
                            be = He(1260),
                            Me = He(5255);
                          const Ke = {
                              getState: () => Me.d.getCurrentState(),
                              onFrame: be.q
                            },
                            Ue = (0, ye.createContext)(Ke);

                          function Fe() {
                            return (0, ye.useContext)(Ue)
                          }
                        }, 5319: (ee, ie, He) => {
                          He.d(ie, {
                            e: () => ae,
                            g: () => Ve
                          });
                          var ye = He(5326),
                            be = He(335);
                          const Me = 120,
                            Ke = 260,
                            Ue = 1.15,
                            Fe = 1.2,
                            Je = 2,
                            oe = 1.08,
                            Re = .8,
                            ke = .95,
                            qe = 8,
                            fe = "[\"')\\]\u300d\u300f\uff09]*",
                            Te = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${fe}$`),
                            pe = new RegExp(`[?\uff1f]${fe}$`),
                            Xe = new RegExp(`[!\uff01]${fe}$`),
                            ze = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Be = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            Ee = new RegExp(`[${Be}]`),
                            ge = new RegExp(`[${Be}]|[^${Be}]+`, "g"),
                            Oe = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function de(ee) {
                            let ie = 2166136261;
                            for (let He = 0; He < ee.length; He++) ie ^= ee.charCodeAt(He), ie = Math.imul(ie, 16777619);
                            return (ie >>> 0) / 4294967295 * 2 - 1
                          }

                          function We(ee) {
                            var ie;
                            if (Ee.test(ee)) return 1;
                            const He = ee.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              ye = He.replace(/[^0-9]/g, "");
                            if (ye.length > 0 && !/\p{L}/u.test(He)) return Math.min(ye.length, 4);
                            const be = null !== (ie = He.match(Oe)) && void 0 !== ie ? ie : [];
                            if (0 === be.length) {
                              var Me, Ke;
                              const ee = null !== (Me = null === (Ke = He.match(/\p{L}/gu)) || void 0 === Ke ? void 0 : Ke.length) && void 0 !== Me ? Me : 0;
                              return 0 === ee ? 0 : Math.min(Math.max(1, Math.round(ee / 2.5)), qe)
                            }
                            const Ue = He.replace(/[^\p{L}]/gu, ""),
                              Fe = be.length > 1 && "e" === be.at(-1) && Ue.endsWith("e") && !Ue.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(ee.replace(/[^\p{L}]/gu, ""));
                            return Math.min(be.length - (Fe ? 1 : 0), qe)
                          }

                          function te(ee) {
                            return ee.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Ze(ee) {
                            const ie = ee.replace(/[^\p{L}]/gu, "");
                            return ie.length >= 2 && ie === ie.toUpperCase() && ie !== ie.toLowerCase()
                          }

                          function we(ee, ie) {
                            var He;
                            const qe = ie && (0, ye.l)(ie),
                              fe = null !== (He = null === qe || void 0 === qe ? void 0 : qe.syllableMs) && void 0 !== He ? He : ye.d,
                              Be = function(ee) {
                                const ie = [];
                                for (const ye of (0, be.kc)(ee))
                                  if ("string" === typeof ye)
                                    for (const ee of ye.split(/(\s+)/)) {
                                      if ("" === ee) continue;
                                      if (/^\s+$/.test(ee)) {
                                        ie.push({
                                          kind: "space",
                                          text: ee
                                        });
                                        continue
                                      }
                                      if (!Ee.test(ee)) {
                                        ie.push({
                                          kind: "word",
                                          text: ee,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let ye = !0;
                                      for (const be of null !== (He = ee.match(ge)) && void 0 !== He ? He : []) {
                                        var He;
                                        const ee = ie.at(-1);
                                        ye || "word" !== (null === ee || void 0 === ee ? void 0 : ee.kind) || Ee.test(be) || /[\p{L}\p{N}]/u.test(be) ? (ye || ie.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), ie.push({
                                          kind: "word",
                                          text: be,
                                          delayMs: 0
                                        }), ye = !1) : ee.text += be
                                      }
                                    } else ie.push({
                                      kind: "icon",
                                      text: ye.icon,
                                      delayMs: 0
                                    });
                                return ie
                              }(ee),
                              Oe = [];
                            let we = [];
                            for (const ye of Be) "space" !== ye.kind && (we.push(ye), Te.test(ye.text) && (Oe.push(we), we = []));
                            Oe.push(we);
                            const De = [];
                            let Pe = 0;
                            for (const ye of Oe) {
                              var Ae, Ye;
                              const ee = null !== (Ae = null === (Ye = ye.at(-1)) || void 0 === Ye ? void 0 : Ye.text) && void 0 !== Ae ? Ae : "",
                                ie = pe.test(ee),
                                He = Xe.test(ee),
                                be = ye.map((ee => "word" === ee.kind ? We(ee.text) : 1)),
                                Be = be.findLastIndex((ee => ee > 0));
                              for (const [pe, Xe] of ye.entries()) {
                                const ee = "word" === Xe.kind,
                                  ye = be[pe];
                                Xe.delayMs = Pe;
                                for (let be = 0; qe && be < ye; be++) {
                                  const {
                                    intonation: Me
                                  } = qe;
                                  let Ke = Be > 0 ? -Me.declineSemitones * (pe / Be) : 0;
                                  Ke += de(`${te(Xe.text)}|${be}`) * Me.variationSemitones;
                                  const Te = Math.min(1, Me.variationSemitones);
                                  let ze = qe.glideSemitones,
                                    Ee = 1;
                                  He && (Ke += Me.exclaimLiftSemitones, Ee *= Ue), ie && pe === Be && (Ke += Me.questionRiseSemitones * (ye > 1 ? .5 + .5 * be / (ye - 1) : 1), be === ye - 1 && (ze = Math.abs(ze) + Me.questionRiseSemitones / 2)), ee && Ze(Xe.text) && (Ke += Je * Te, Ee *= Fe), ye > 1 && 0 === be && (Ke += Re * Te, Ee *= oe), De.push({
                                    atMs: Pe + be * fe,
                                    semitones: Ke,
                                    glideSemitones: ze,
                                    durationMs: be < ye - 1 ? Math.min(qe.durationMs, fe * ke) : qe.durationMs,
                                    level: Ee
                                  })
                                }
                                Pe += ye * fe + (Te.test(Xe.text) ? Ke : ze.test(Xe.text) ? Me : 0)
                              }
                            }
                            return {
                              pieces: Be.map((ee => "space" === ee.kind ? ee : "icon" === ee.kind ? {
                                kind: "icon",
                                icon: ee.text,
                                delayMs: ee.delayMs
                              } : {
                                kind: "word",
                                text: ee.text,
                                delayMs: ee.delayMs
                              })),
                              blips: De
                            }
                          }
                          var De = He(1127),
                            Pe = He(1196),
                            Ae = He(1988);

                          function Ye(ee) {
                            if ("string" === typeof ee) return ee;
                            const ie = Pe.f.get().getCurrentLanguageCode();
                            return (0, De.o)(ie, ee.translationKey, (0, De.m)(ee.params, Ae.c.shown))
                          }

                          function Ve(ee) {
                            const ie = void 0 === ee.voice ? null : (0, ye.n)(ee.voice),
                              He = ie && (0, ye.l)(ie);
                            return {
                              plan: we(Ye(ee.line), He),
                              synth: He
                            }
                          }

                          function ae(ee) {
                            const ie = [];
                            let He = [];
                            for (const [be, Me] of ee.entries()) {
                              var ye;
                              "space" === Me.kind && (" " !== Me.text || "icon" !== (null === (ye = ee[be + 1]) || void 0 === ye ? void 0 : ye.kind)) ? (He.length > 0 && ie.push(He), ie.push([Me]), He = []) : He.push(Me)
                            }
                            return He.length > 0 && ie.push(He), ie
                          }
                        }, 5333: (ee, ie, He) => {
                          He.d(ie, {
                            e: () => oe,
                            f: () => Re
                          });
                          var ye = He(5338),
                            be = He(18);
                          const Me = .25,
                            Ke = .85,
                            Ue = .02,
                            Fe = .01;

                          function Je(ee, ie, He, ye, be, Me, Ue) {
                            const {
                              waveform: Fe,
                              pitchHz: Je,
                              attackMs: oe,
                              releaseMs: Re,
                              lowpassHz: ke
                            } = He, qe = be + ye.durationMs / 1e3, fe = Je * 2 ** (ye.semitones / 12), Te = ee.createOscillator();
                            Te.type = Fe, Te.frequency.setValueAtTime(fe, be), Te.frequency.exponentialRampToValueAtTime(fe * 2 ** (ye.glideSemitones / 12), qe);
                            const pe = be + Math.min(oe, ye.durationMs) / 1e3,
                              Xe = ee.createGain();
                            Xe.gain.setValueAtTime(0, be), Xe.gain.linearRampToValueAtTime(Me, pe), Xe.gain.linearRampToValueAtTime(Me * Ke, Math.max(pe, qe - Re / 1e3)), Xe.gain.linearRampToValueAtTime(0, qe);
                            const ze = [Te];
                            if (null !== ke) {
                              const ie = ee.createBiquadFilter();
                              ie.type = "lowpass", ie.frequency.value = ke, ze.push(ie)
                            }
                            ze.push(Xe, ie);
                            for (let Ke = 1; Ke < ze.length; Ke++) ze[Ke - 1].connect(ze[Ke]);
                            return Te.onended = () => {
                              for (const ee of ze.slice(0, -1)) ee.disconnect();
                              Ue()
                            }, Te.start(be), Te.stop(qe), Te
                          }

                          function oe(ee, ie, He, ye, be, Ke) {
                            if (0 === ye.length) return Ke(), () => {};
                            const oe = Me * He.volume * be,
                              Re = ee.createGain();
                            Re.connect(ie);
                            const ke = ee.currentTime + Ue,
                              qe = new Set;
                            for (const Me of ye) {
                              const ie = Je(ee, Re, He, Me, ke + Me.atMs / 1e3, oe * Me.level, (() => {
                                qe.delete(ie), 0 === qe.size && (Re.disconnect(), Ke())
                              }));
                              qe.add(ie)
                            }
                            return () => {
                              const ie = ee.currentTime;
                              Re.gain.setTargetAtTime(0, ie, Fe);
                              for (const ee of qe) try {
                                ee.stop(ie + 5 * Fe)
                              } catch {}
                            }
                          }

                          function Re(ee, ie) {
                            var He;
                            const Me = ye.Howler.ctx,
                              Ke = ye.Howler.masterGain;
                            if (!Me || !Ke || !be.e.get("soundOnFromAd")) return () => {};
                            const Ue = ye.Howler;
                            return null === (He = Ue._autoResume) || void 0 === He || He.call(Ue), oe(Me, Ke, ee, ie, be.e.get("soundVolume"), (() => {
                              var ee;
                              null === (ee = Ue._autoSuspend) || void 0 === ee || ee.call(Ue)
                            }))
                          }
                        }, 5303: (ee, ie, He) => {
                          He.d(ie, {
                            b: () => Ue,
                            d: () => be,
                            h: () => Fe,
                            l: () => Ke,
                            p: () => Me
                          });
                          var ye = He(5294);
                          const be = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            Me = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            Ke = `${ye.n} lists every page of the Bloxd Code API docs.`;

                          function Ue(ee, ie) {
                            return `${ee.url}${encodeURIComponent(ie.toWellFormed())}`
                          }

                          function Fe(ee) {
                            const ie = Ue(be, ee);
                            return ie.length <= 3e4 ? {
                              url: ie,
                              sendsPrompt: !0
                            } : {
                              url: new URL(be.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5338: (ee, ie, He) => {
                          He.r(ie), He.d(ie, {
                            Howl: () => be.Howl,
                            Howler: () => be.Howler,
                            musicOutput: () => pe,
                            readyAudioContext: () => Xe
                          });
                          var ye, be = He(5340),
                            Me = He(3791),
                            Ke = He(5055);
                          const Ue = be.Howler;

                          function Fe() {
                            var ee, ie;
                            if (Ue.ctx || !Ue.usingWebAudio || "undefined" === typeof AudioContext || !(0, Ke.f)()) return;
                            const He = navigator.audioSession;
                            let ye;
                            "auto" === (null === He || void 0 === He ? void 0 : He.type) && (He.type = "ambient");
                            try {
                              ye = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const be = ye.createGain();
                            be.gain.setValueAtTime(Ue._muted ? 0 : null !== (ee = Ue._volume) && void 0 !== ee ? ee : 1, ye.currentTime), be.connect(ye.destination), Ue.ctx = ye, Ue.masterGain = be, null === (ie = Ue._setup) || void 0 === ie || ie.call(Ue)
                          }
                          Ue._mobileUnloaded = !0;
                          const Je = Ue.volume.bind(be.Howler);
                          Ue.volume = function() {
                            return Fe(), Je(...arguments)
                          };
                          const oe = Ue.mute.bind(be.Howler);
                          Ue.mute = ee => (Fe(), oe(ee));
                          const Re = be.Howl.prototype,
                            ke = Re.init;

                          function qe() {
                            for (; Ue._html5AudioPool.length < Ue.html5PoolSize;) {
                              const ee = new Audio;
                              ee._unlocked = !0, Ue._releaseHtml5Audio(ee)
                            }
                            for (const ie of Ue._howls)
                              if (!ie._webAudio)
                                for (const He of ie._getSoundIds()) {
                                  var ee;
                                  const ye = null === (ee = ie._soundById(He)) || void 0 === ee ? void 0 : ee._node;
                                  ye && !ye._unlocked && (ye._unlocked = !0, ye.load())
                                }
                          }
                          Re.init = function(ee) {
                            return Fe(), ke.call(this, ee)
                          }, (0, Ke.f)() && (Ue._unlockAudio = () => {
                            const ee = Ue.ctx;
                            if (Ue._audioUnlocked || !ee) return;
                            Ue.autoUnlock = !1;
                            const ie = ee.createBuffer(1, 1, 22050);
                            Ue._scratchBuffer = ie;
                            const He = new AbortController;
                            let ye = "afterPaint";
                            const be = () => {
                                var ye;
                                if (Ue._audioUnlocked) return;
                                null === (ye = Ue._autoResume) || void 0 === ye || ye.call(Ue);
                                const be = ee.createBufferSource();
                                be.buffer = ie, be.connect(ee.destination), be.start(0), ee.resume().catch((() => {})), be.onended = () => {
                                  be.disconnect(0), Ue._audioUnlocked = !0, He.abort();
                                  for (const ee of Ue._howls) ee._emit("unlock")
                                }
                              },
                              Fe = () => {
                                qe(), be()
                              },
                              Je = ie => {
                                if (qe(), "inTap" === ye) {
                                  if ("running" === ee.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), be()
                                } else "afterPaint" === ye && (ye = "queued", (0, Me.c)(ie.timeStamp, (() => {
                                  ye = "inTap", be()
                                })))
                              };
                            for (const Me of ["touchstart", "touchend"]) document.addEventListener(Me, Fe, {
                              capture: !0,
                              signal: He.signal
                            });
                            for (const Me of Ke.b) document.addEventListener(Me, Je, {
                              capture: !0,
                              signal: He.signal
                            })
                          });
                          let fe = 0;
                          const Te = null === (ye = Ue._autoSuspend) || void 0 === ye ? void 0 : ye.bind(be.Howler);

                          function pe() {
                            Xe();
                            const {
                              ctx: ee,
                              masterGain: ie
                            } = Ue;
                            return ee && ie ? {
                              ctx: ee,
                              destination: ie,
                              holdAwake: ee => {
                                var ie, He;
                                (fe += ee ? 1 : -1, ee) ? null === (ie = Ue._autoResume) || void 0 === ie || ie.call(Ue): null === (He = Ue._autoSuspend) || void 0 === He || He.call(Ue)
                              },
                              wake: () => {
                                var ie;
                                "running" !== ee.state && (null === (ie = Ue._autoResume) || void 0 === ie || ie.call(Ue), ee.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function Xe() {
                            var ee;
                            (Ue.volume(), Ue.ctx && Ue.autoUnlock) && (null === (ee = Ue._unlockAudio) || void 0 === ee || ee.call(Ue))
                          }
                          Te && (Ue._autoSuspend = () => fe > 0 ? be.Howler : Te())
                        }, 5343: (ee, ie, He) => {
                          function ye(ee) {
                            return {
                              notAfter: ee
                            }
                          }
                          He.d(ie, {
                            e: () => Fe,
                            g: () => Je,
                            k: () => Ue,
                            m: () => ye,
                            n: () => be,
                            p: () => Me,
                            s: () => Ke,
                            t: () => oe,
                            v: () => Re
                          });
                          const be = ye("\\w$."),
                            Me = ye("\\w.,");

                          function Ke(ee) {
                            return ie => Fe(ie, ee)
                          }

                          function Ue(ee) {
                            return ie => !ee.test(ie.input.slice(0, ie.index))
                          }

                          function Fe(ee, ie) {
                            return ee.index > 0 && new RegExp(`[${ie}]`).test(ee.input[ee.index - 1])
                          }

                          function Je(ee, ie, He) {
                            return function(ee) {
                              return void 0 !== ee && "function" !== typeof ee
                            }(He) ? function(ee, ie, He) {
                              const ye = ie.flags.replace(/[gy]/g, ""),
                                be = new RegExp(`[^${He}](?:${ie.source})`, `${ye}g`),
                                Me = [],
                                Ke = He => {
                                  const ye = He.index + He[0].length;
                                  return ("" === He[0] ? ke(ee, ie, ye) : ye) - 1
                                },
                                Ue = new RegExp(`(?:${ie.source})`, `${ye}y`).exec(ee);
                              if (Ue) {
                                if (Me.push(Ue), !ie.global) return Me;
                                be.lastIndex = Ke(Ue)
                              }
                              for (let Fe = be.exec(ee); Fe; Fe = be.exec(ee)) {
                                const He = ke(ee, ie, Fe.index) - Fe.index;
                                if (Fe[0] = Fe[0].slice(He), Fe.index += He, Me.push(Fe), !ie.global) break;
                                be.lastIndex = Ke(Fe)
                              }
                              return Me
                            }(ee, ie, He.notAfter) : function(ee, ie, He) {
                              const ye = new RegExp(ie.source, `${ie.flags.replace(/[gy]/g,"")}g`),
                                be = [];
                              for (let Me = ye.exec(ee); Me; Me = ye.exec(ee))
                                if (!He || He(Me)) {
                                  if (be.push(Me), !ie.global) break;
                                  "" === Me[0] && (ye.lastIndex = ke(ee, ie, ye.lastIndex))
                                } else ye.lastIndex = ke(ee, ie, Me.index);
                              return be
                            }(ee, ie, He)
                          }

                          function oe(ee, ie, He, ye) {
                            let be = "",
                              Me = 0;
                            for (const Ke of Je(ee, ie, He)) be += ee.slice(Me, Ke.index) + ye(Ke), Me = Ke.index + Ke[0].length;
                            return be + ee.slice(Me)
                          }

                          function Re(ee, ie, He) {
                            const ye = [];
                            let be = 0;
                            for (const Me of Je(ee, ie, He)) ye.push(ee.slice(be, Me.index)), be = Me.index + Me[0].length;
                            return [...ye, ee.slice(be)]
                          }

                          function ke(ee, ie, He) {
                            var ye;
                            return He + (ie.unicode && (null !== (ye = ee.codePointAt(He)) && void 0 !== ye ? ye : 0) > 65535 ? 2 : 1)
                          }
                        }, 5294: (ee, ie, He) => {
                          He.d(ie, {
                            B: () => Re,
                            D: () => Te,
                            H: () => qe,
                            e: () => be,
                            h: () => Fe,
                            k: () => Me,
                            n: () => Ke,
                            r: () => Ue,
                            v: () => pe,
                            z: () => oe
                          });
                          var ye = He(1585);
                          const be = 24e3,
                            Me = "/docs/llms.txt",
                            Ke = `${ye.b}${Me}`,
                            Ue = "/llms.txt",
                            Fe = "/docs/llms-full.txt";

                          function Je(ee) {
                            return ee || "index"
                          }

                          function oe(ee) {
                            return `/docs/${Je(ee)}.md`
                          }

                          function Re(ee, ie) {
                            return `/docs/${Je(ee)}/${ie+1}.md`
                          }
                          const ke = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function qe(ee) {
                            const ie = ke.exec(ee);
                            return null === ie ? null : {
                              name: ie[1],
                              part: void 0 === ie[2] ? null : Number(ie[2])
                            }
                          }
                          const fe = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Te(ee) {
                            const ie = fe.exec(ee);
                            if (null === ie) return null;
                            const [, He = "", ye] = ie;
                            return void 0 === ye ? oe(He) : Re(He, Number(ye) - 1)
                          }

                          function pe(ee) {
                            return `/docsHtml/${Je(ee)}.html`
                          }
                        }, 5326: (ee, ie, He) => {
                          He.d(ie, {
                            d: () => be,
                            h: () => ye,
                            k: () => Me,
                            l: () => Fe,
                            n: () => Ke
                          });
                          const ye = ["sine", "triangle", "square", "sawtooth"],
                            be = 55,
                            Me = {
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

                          function Ke(ee) {
                            return "string" !== typeof ee ? ee : Object.hasOwn(Me, ee) ? Me[ee] : null
                          }

                          function Ue(ee, ie, He) {
                            return Math.min(He, Math.max(ie, ee))
                          }

                          function Fe(ee) {
                            const ie = Ue(ee.durationMs, 10, 500),
                              He = Ue(ee.attackMs, 0, ie),
                              {
                                intonation: be
                              } = ee;
                            return {
                              waveform: ye.includes(ee.waveform) ? ee.waveform : "sine",
                              pitchHz: Ue(ee.pitchHz, 20, 4e3),
                              glideSemitones: Ue(ee.glideSemitones, -24, 24),
                              durationMs: ie,
                              attackMs: He,
                              releaseMs: Ue(ee.releaseMs, 0, ie - He),
                              lowpassHz: null === ee.lowpassHz ? null : Ue(ee.lowpassHz, 20, 2e4),
                              volume: Ue(ee.volume, 0, 2),
                              intonation: {
                                variationSemitones: Ue(be.variationSemitones, 0, 6),
                                declineSemitones: Ue(be.declineSemitones, 0, 12),
                                questionRiseSemitones: Ue(be.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: Ue(be.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: Ue(ee.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const ee in modules) Object.freeze(modules[ee]);