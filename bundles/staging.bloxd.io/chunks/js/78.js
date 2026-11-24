export const id = 78;
export const ids = [78, 93];
export const modules = {
    4773: (mm, Tm, fm) => {
      fm.d(Tm, {
        d: () => qm,
        e: () => jm
      });
      var hm = fm(1080),
        Am = fm.n(hm),
        am = fm(59),
        xm = fm(1208),
        wm = fm(4782),
        Dm = fm(1884),
        im = fm(2391),
        Rm = fm(4784),
        pm = fm(1135);
      const Em = new WeakMap;
      let om = 0;

      function Om(mm) {
        let Tm = Em.get(mm);
        return void 0 === Tm && (Tm = om++, Em.set(mm, Tm)), Tm
      }

      function Ym(mm) {
        let {
          piece: Tm
        } = mm;
        return "space" === Tm.kind ? (0, pm.jsx)(pm.Fragment, {
          children: Tm.text
        }) : (0, pm.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${Tm.delayMs}ms`
          },
          children: (0, pm.jsx)(wm.e, {
            text: "icon" === Tm.kind ? `[[${Tm.icon}]]` : Tm.text
          })
        })
      }

      function qm(mm) {
        let {
          display: Tm
        } = mm;
        const {
          selectedLanguage: fm
        } = (0, xm.A)(), hm = (0, am.useMemo)((() => (0, Rm.c)((0, Rm.f)(Tm).plan.pieces)), [Tm, fm.code]);
        return (0, pm.jsxs)("div", {
          className: Am()("Dialogue", {
            DialogueAnimateIn: !1 !== Tm.animateIn
          }),
          children: [Tm.speakerName && (0, pm.jsx)(Dm.b, {
            text: Tm.speakerName,
            className: "DialogueSpeaker"
          }), (0, pm.jsx)("p", {
            className: "DialogueLine",
            children: hm.map(((mm, Tm) => 1 === mm.length && "space" === mm[0].kind ? mm[0].text : (0, pm.jsx)("span", {
              className: "DialogueGlue",
              children: mm.map(((mm, Tm) => (0, pm.jsx)(Ym, {
                piece: mm
              }, Tm)))
            }, Tm)))
          })]
        })
      }
      const jm = (0, am.memo)((function() {
        const mm = (0, im.g)("dialogue");
        return (0, pm.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: mm && (0, pm.jsx)(qm, {
            display: mm
          }, Om(mm))
        })
      }))
    },
    4654: (mm, Tm, fm) => {
        fm.r(Tm), fm.d(Tm, {
          default: () => Tx
        });
        var hm = fm(59),
          Am = fm(1080),
          am = fm.n(Am),
          xm = fm(1528),
          wm = fm(1537),
          Dm = fm(23),
          im = fm(77),
          Rm = fm(4656),
          pm = fm(4663),
          Em = fm(4665),
          om = fm(4296),
          Om = fm(1135);
        const Ym = "/textures/docs/icons";

        function qm(mm) {
          let {
            name: Tm,
            isTinted: fm,
            className: hm,
            style: Am
          } = mm;
          const xm = `${Ym}/${Tm}.png`;
          return fm ? (0, Om.jsxs)("span", {
            className: am()("DocsPixelIcon", "Tinted", hm),
            "aria-hidden": "true",
            style: Am,
            children: [(0, Om.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${xm}")`,
                WebkitMaskImage: `url("${xm}")`
              }
            }), (0, Om.jsx)("img", {
              src: xm,
              alt: ""
            })]
          }) : (0, Om.jsx)("img", {
            className: am()("DocsPixelIcon", hm),
            src: xm,
            alt: "",
            "aria-hidden": "true",
            style: Am
          })
        }
        const jm = 1500;

        function Vm() {
          const [mm, Tm] = (0, hm.useState)(null);
          (0, hm.useEffect)((() => {
            if (null === mm) return;
            const fm = setTimeout((() => {
              Tm(null)
            }), jm);
            return () => {
              clearTimeout(fm)
            }
          }), [mm]);
          return [mm, mm => {
            (0, om.b)(mm).then((() => {
              Tm({
                text: mm,
                failed: !1
              })
            }), (fm => {
              console.error("Could not copy to the clipboard", fm), Tm({
                text: mm,
                failed: !0
              })
            }))
          }]
        }

        function Im(mm) {
          let {
            text: Tm,
            label: fm,
            className: hm
          } = mm;
          const [Am, xm] = Vm(), wm = !1 === (null === Am || void 0 === Am ? void 0 : Am.failed);
          return (0, Om.jsxs)("button", {
            type: "button",
            className: am()("DocsCopyButton", hm, {
              Copied: wm
            }),
            title: `Copy ${Tm.length>40?"to clipboard":Tm}`,
            "aria-label": fm ? void 0 : `Copy ${Tm}`,
            onClick: mm => {
              mm.stopPropagation(), xm(Tm)
            },
            children: [(0, Om.jsx)(qm, {
              name: wm ? "check" : "copy"
            }), fm && (0, Om.jsx)("span", {
              children: wm ? "Copied" : null !== Am && void 0 !== Am && Am.failed ? "Copy failed" : fm
            })]
          })
        }
        Rm.b.registerLanguage("javascript", pm.b), Rm.b.registerLanguage("typescript", Em.d);
        const Km = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Qm = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          nm = 24;

        function Jm(mm) {
          let {
            code: Tm,
            lang: fm,
            compact: Am = !1
          } = mm;
          const xm = (0, hm.useMemo)((() => function(mm, Tm) {
              const fm = Km[Tm];
              return fm ? Rm.b.highlight(mm, {
                language: fm
              }).value : mm.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(Tm, fm)), [Tm, fm]),
            wm = Tm.split("\n").length,
            Dm = !Am && wm > nm + 6,
            [im, pm] = (0, hm.useState)(!1),
            Em = Km[fm];
          return (0, Om.jsxs)("div", {
            className: am()("DocsCodeBlock", {
              Compact: Am,
              Collapsed: Dm && !im
            }),
            children: [!Am && (0, Om.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, Om.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Em ? Qm[Em] : "Text"
              }), (0, Om.jsx)(Im, {
                text: Tm,
                label: "Copy"
              })]
            }), (0, Om.jsx)("pre", {
              children: (0, Om.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: xm
                }
              })
            }), Dm && (0, Om.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": im,
              onClick: () => {
                pm(!im)
              },
              children: [(0, Om.jsx)(qm, {
                name: im ? "chevron-up" : "chevron-down"
              }), im ? "Show less" : `Show all ${wm} lines`]
            })]
          })
        }
        var cm = fm(4672);
        var zm = fm(4674);
        const Zm = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function km(mm) {
          const Tm = new Map;
          let fm, hm = [],
            Am = !1;
          const am = () => {
            fm && Tm.set(fm.name, fm.lines.join("\n").trimEnd())
          };
          for (const xm of mm.split("\n")) {
            const mm = xm.match(Zm);
            Am || xm.startsWith("/*") ? (Am || (am(), fm = void 0), hm.push(xm), Am = !xm.includes("*/")) : mm ? (am(), fm = {
              name: mm[1],
              lines: [...hm, xm]
            }, hm = []) : fm && (xm.startsWith(" ") || xm.startsWith("\t") || /^[}\])|]/.test(xm)) ? fm.lines.push(xm) : fm && "" !== xm.trim() && (am(), fm = void 0)
          }
          return am(), Tm
        }

        function bm(mm) {
          return "methods" === mm || "callbacks" === mm || "settings" === mm
        }
        const Sm = {
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
              setterSnippet: (mm, Tm) => `api.setClientOption(playerId, "${mm}", ${Tm})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (mm, Tm) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${mm}", ${Tm})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (mm, Tm) => `api.setMobSetting(mobId, "${mm}", ${Tm})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (mm, Tm) => `api.setVehicleSetting(vehicleId, "${mm}", ${Tm})`
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
          em = {
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

        function Nm(mm) {
          return mm.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function Gm(mm) {
          let Tm = !1;
          return mm.split("\n").map((mm => (mm.startsWith("```") && (Tm = !Tm), !Tm && /^#{3,} /.test(mm) ? mm.slice(1) : mm))).join("\n")
        }

        function Xm(mm) {
          return "readme" === mm ? "getting-started" : Nm(mm)
        }
        const Pm = "## Glossary of Referenced Types";
        const Hm = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...zm.b.flatMap((mm => {
            const Tm = {
              id: mm.id,
              slug: Xm(mm.id),
              title: mm.title,
              markdown: mm.content,
              ...Sm[mm.id]
            };
            if ("readme" === mm.id) return function(mm) {
              const Tm = mm.markdown.indexOf(Pm),
                fm = mm.markdown.indexOf("\n```", Tm),
                hm = mm.markdown.indexOf("\n```", fm + 1);
              if (-1 === Tm || -1 === fm || -1 === hm) throw new Error(`Getting started has no "${Pm}" section with a code block`);
              const Am = mm.markdown.slice(Tm + 31, fm).trim(),
                am = [...km(mm.markdown.slice(mm.markdown.indexOf("\n", fm + 1) + 1, hm))].map((mm => {
                  let [Tm, fm] = mm;
                  return `## ${Tm}\n\n\`\`\`ts\n${fm}\n\`\`\`\n`
                })),
                xm = mm.markdown.slice(mm.markdown.indexOf("\n", hm + 1) + 1);
              return [{
                ...mm,
                markdown: `${mm.markdown.slice(0,Tm)}${xm}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Am}\n\n${am.join("\n")}`
              }]
            }(Tm);
            if ("howTo" === mm.id) {
              const {
                parent: mm,
                guides: fm
              } = function(mm) {
                const [Tm, ...fm] = mm.markdown.split(/^(?=## )/m), hm = [Tm], Am = [];
                for (const xm of fm) {
                  var am;
                  const Tm = xm.indexOf("\n"),
                    fm = xm.slice(3, Tm).trim(),
                    wm = xm.slice(Tm + 1);
                  if (!wm.includes("```")) {
                    hm.push(xm);
                    continue
                  }
                  const Dm = null !== (am = em[fm]) && void 0 !== am ? am : {
                    icon: "lightbulb",
                    summary: `How to use ${fm.toLowerCase()} in World Code.`
                  };
                  Am.push({
                    id: `${mm.id}${fm.split(/[^A-Za-z0-9]+/).map((mm=>mm.charAt(0).toUpperCase()+mm.slice(1))).join("")}`,
                    slug: `${mm.slug}-${Nm(fm)}`,
                    title: fm,
                    layout: "article",
                    sourceAnchor: (0, cm.q)(fm),
                    markdown: `# ${fm}\n\n${Gm(wm)}`,
                    ...Dm
                  })
                }
                return {
                  parent: {
                    ...mm,
                    markdown: hm.join(""),
                    childPageIds: Am.map((mm => mm.id))
                  },
                  guides: Am
                }
              }(Tm);
              return [mm, ...fm]
            }
            return [Tm]
          }))],
          ym = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Hm.filter((mm => void 0 !== mm.sourceAnchor)).map((mm => mm.id))]
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

        function Cm(mm) {
          return Hm.find((Tm => Tm.id === mm))
        }
        const rm = new Map;

        function sm(mm) {
          let Tm = rm.get(mm.id);
          return Tm || (Tm = (0, cm.v)(mm.markdown, "changelog" === mm.layout ? 3 : 2), rm.set(mm.id, Tm)), Tm
        }

        function lm(mm, Tm) {
          return sm(mm).sections.some((mm => mm.heading.anchor === Tm || mm.blocks.some((mm => "heading" === mm.kind && mm.anchor === Tm))))
        }

        function Mm(mm) {
          const [Tm, ...fm] = mm.replace(/^#/, "").split("-"), hm = Hm.find((mm => mm.id === Tm));
          if (!hm) return null;
          const Am = fm.length > 0 ? (0, cm.q)(fm.join("-")) : "";
          for (const xm of null !== (am = hm.childPageIds) && void 0 !== am ? am : []) {
            var am;
            const mm = Cm(xm);
            if (mm.sourceAnchor === Am) return {
              page: mm,
              anchor: ""
            };
            if (lm(mm, Am)) return {
              page: mm,
              anchor: Am
            }
          }
          return {
            page: hm,
            anchor: Am
          }
        }
        const um = {
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

        function Bm(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const hm = Tm.slug ? `${mm}/${Tm.slug}` : mm;
          return fm ? `${hm}#${fm}` : hm
        }
        var Lm = fm(4696);
        const tm = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Um = new Set(["GameApi", "Console", "_TypeOf"]),
          dm = 4;

        function gm(mm) {
          let Tm = mm.length;
          for (; Tm > 0 && "" === mm[Tm - 1].trim();) Tm--;
          return mm.slice(0, Tm)
        }

        function Wm(mm) {
          var Tm;
          const fm = gm(mm);
          if (null === (Tm = fm.at(-1)) || void 0 === Tm || !Tm.trimEnd().endsWith("*/")) return {
            lines: fm,
            doc: ""
          };
          const hm = fm.findLastIndex((mm => mm.startsWith("/**")));
          return -1 === hm ? {
            lines: fm,
            doc: ""
          } : {
            lines: gm(fm.slice(0, hm)),
            doc: fm.slice(hm).join("\n")
          }
        }

        function Fm(mm) {
          var Tm;
          const fm = mm.split("\n"),
            hm = fm.flatMap(((mm, Tm) => tm.test(mm) ? [Tm] : []));
          let Am = Wm(fm.slice(0, null !== (Tm = hm[0]) && void 0 !== Tm ? Tm : fm.length)).doc;
          return hm.map(((mm, Tm) => {
            var am;
            const xm = Wm(fm.slice(mm, null !== (am = hm[Tm + 1]) && void 0 !== am ? am : fm.length)),
              wm = {
                name: fm[mm].match(tm)[1],
                doc: Am,
                lines: xm.lines
              };
            return Am = xm.doc, wm
          }))
        }

        function mT(mm) {
          var Tm;
          const fm = mm.match(/^readonly \[([\s\S]*)\]$/);
          return fm ? null !== (Tm = fm[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Tm ? Tm : [] : null
        }

        function TT(mm) {
          if (!mm.startsWith("{") || !mm.endsWith("}")) return null;
          const Tm = {
              keys: [],
              values: []
            },
            fm = mm => {
              const fm = mm.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              fm && (Tm.keys.push(fm[1].startsWith('"') ? fm[1] : `"${fm[1]}"`), Tm.values.push(fm[2].trim()))
            };
          let hm = 0,
            Am = "";
          for (const am of mm.slice(1, -1)) "{[(".includes(am) ? hm++ : "}])".includes(am) && hm--, ";" === am && 0 === hm ? (fm(Am), Am = "") : Am += am;
          return fm(Am), Tm
        }

        function fT(mm) {
          return mm.length > dm ? `\n\t| ${mm.join("\n\t| ")}` : mm.join(" | ")
        }

        function hT(mm, Tm) {
          const fm = function(mm, Tm) {
            return mm.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((mm, fm) => {
              var hm;
              const Am = null === (hm = Tm.get(fm)) || void 0 === hm ? void 0 : hm.object;
              return Am ? fT(Am.values) : mm
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((mm, fm) => {
              var hm, Am;
              const am = null === (hm = Tm.get(fm)) || void 0 === hm || null === (Am = hm.object) || void 0 === Am ? void 0 : Am.values.map(mT);
              return null !== am && void 0 !== am && am.every((mm => null !== mm)) ? fT([...new Set(am.flat())]) : mm
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((mm, fm) => {
              var hm;
              const Am = null === (hm = Tm.get(fm)) || void 0 === hm ? void 0 : hm.members;
              return Am ? fT(Am) : mm
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((mm, fm) => {
              var hm;
              const Am = null === (hm = Tm.get(fm)) || void 0 === hm ? void 0 : hm.object;
              return Am ? fT(Am.keys) : mm
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((mm, fm) => {
              var hm, Am;
              return null !== (hm = null === (Am = Tm.get(fm)) || void 0 === Am ? void 0 : Am.text) && void 0 !== hm ? hm : mm
            }))
          }(mm.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), Tm);
          return [mm.doc, fm].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function AT(mm) {
          const Tm = Fm(mm),
            fm = function(mm) {
              const Tm = new Map,
                fm = mm.find((mm => "_TypeOf" === mm.name));
              let hm = null;
              const Am = () => {
                if (hm) {
                  const mm = hm.lines.join("\n");
                  Tm.set(hm.name, {
                    text: mm,
                    members: mT(mm),
                    object: TT(mm)
                  })
                }
              };
              for (const am of fm.lines.slice(1, -1)) {
                const mm = am.match(/^\t([\w$]+): (.+)$/);
                mm ? (Am(), hm = {
                  name: mm[1],
                  lines: [mm[2]]
                }) : hm && hm.lines.push(am.replace(/^\t/, ""))
              }
              return Am(), Tm
            }(Tm),
            hm = new Map;
          for (const Am of Tm) Um.has(Am.name) || hm.has(Am.name) || hm.set(Am.name, hT(Am, fm));
          return hm
        }
        let aT, xT, wT;

        function DT() {
          return xT ??= function(mm) {
            const Tm = Fm(mm).find((mm => "GameApi" === mm.name)),
              fm = new Map,
              hm = Tm.lines;
            for (let am = 0; am < hm.length; am++) {
              var Am;
              if (!hm[am].trimStart().startsWith("/**")) continue;
              const mm = am;
              for (; am < hm.length && !hm[am].includes("*/");) am++;
              const Tm = null === (Am = hm[am + 1]) || void 0 === Am ? void 0 : Am.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!Tm) continue;
              let xm = null;
              const wm = [];
              let Dm = "description",
                im = !1;
              for (const fm of hm.slice(mm, am + 1).join("\n").split("\n").map((mm => mm.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const mm = fm.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                mm ? (xm = mm[1].trim(), Dm = "deprecation") : fm.startsWith("@") ? (Dm = "otherTag", im = !0) : "" === fm.trim() ? im || (Dm = "description", wm.push(fm)) : "deprecation" !== Dm || /^[A-Z]/.test(fm.trim()) ? "otherTag" !== Dm && (Dm = "description", wm.push(fm)) : xm = `${xm} ${fm.trim()}`.trim()
              }
              fm.set(Tm[1], {
                deprecation: xm,
                description: wm.join("\n").trim()
              })
            }
            return fm
          }(Lm.default), xT
        }

        function iT() {
          if (!wT) {
            wT = new Map;
            for (const mm of Hm) {
              const Tm = (0, cm.r)(sm(mm)).flatMap((mm => mm.blocks));
              for (const mm of (0, cm.k)(Tm))
                if ("ts" === mm.lang || "typescript" === mm.lang)
                  for (const [Tm, fm] of km(mm.code)) wT.set(Tm, fm)
            }
            for (const [mm, Tm] of(aT ??= AT(Lm.default), aT)) wT.has(mm) || wT.set(mm, Tm)
          }
          return wT
        }
        const RT = {
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
        let pT;

        function ET() {
          if (!pT) {
            pT = new Map;
            for (const mm of Hm)
              if (bm(mm.layout))
                for (const Tm of sm(mm).sections) pT.has(Tm.heading.text) || pT.set(Tm.heading.text, {
                  pageId: mm.id,
                  anchor: Tm.heading.anchor
                })
          }
          return pT
        }

        function oT(mm) {
          const Tm = mm.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return Tm ? ET().get(Tm[1]) : void 0
        }
        const OT = (0, hm.createContext)("/docs"),
          YT = (0, hm.createContext)(null),
          qT = (0, hm.createContext)(!1),
          jT = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function VT(mm) {
          const Tm = mm.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return Tm ? Tm[1] : null
        }

        function IT(mm) {
          let {
            colour: Tm
          } = mm;
          return (0, Om.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: Tm
            },
            "aria-hidden": "true"
          })
        }

        function KT(mm) {
          const Tm = [];
          let fm = 0;
          for (const hm of mm.matchAll(jT)) Tm.push(mm.slice(fm, hm.index), (0, Om.jsx)(IT, {
            colour: hm[0]
          }), hm[0]), fm = hm.index + hm[0].length;
          return Tm.push(mm.slice(fm)), Tm
        }

        function QT(mm) {
          let {
            href: Tm,
            children: fm
          } = mm;
          const Am = (0, hm.useContext)(OT);
          if (Tm.startsWith("#")) {
            const mm = Mm(Tm);
            if (mm) return (0, Om.jsx)(xm.d, {
              to: Bm(Am, mm.page, mm.anchor),
              children: (0, Om.jsx)(qT.Provider, {
                value: !0,
                children: fm
              })
            })
          }
          return (0, Om.jsx)("a", {
            href: Tm,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, Om.jsx)(qT.Provider, {
              value: !0,
              children: fm
            })
          })
        }

        function nT(mm) {
          let {
            code: Tm
          } = mm;
          const fm = (0, hm.useContext)(OT);
          if ((0, hm.useContext)(qT)) return (0, Om.jsx)("code", {
            className: "DocsInlineCode",
            children: Tm
          });
          if (iT().has(Tm)) return (0, Om.jsx)(ZT, {
            type: Tm
          });
          const Am = oT(Tm);
          if (Am) return (0, Om.jsx)(xm.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: Bm(fm, Cm(Am.pageId), Am.anchor),
            children: Tm
          });
          const am = VT(Tm);
          return (0, Om.jsxs)("code", {
            className: "DocsInlineCode",
            children: [am && (0, Om.jsx)(IT, {
              colour: am
            }), Tm]
          })
        }

        function JT(mm) {
          let {
            text: Tm
          } = mm;
          const fm = [];
          let Am = 0;
          for (const hm of Tm.matchAll(cm.f)) {
            hm.index > Am && fm.push(...KT(Tm.slice(Am, hm.index)));
            const [, mm, am, xm, wm, Dm] = hm;
            mm ? fm.push((0, Om.jsx)(nT, {
              code: (0, cm.n)(mm, am)
            })) : xm ? fm.push((0, Om.jsx)("strong", {
              children: (0, Om.jsx)(JT, {
                text: xm
              })
            })) : fm.push((0, Om.jsx)(QT, {
              href: Dm,
              children: (0, Om.jsx)(JT, {
                text: wm
              })
            })), Am = hm.index + hm[0].length
          }
          return Am < Tm.length && fm.push(...KT(Tm.slice(Am))), (0, Om.jsx)(Om.Fragment, {
            children: fm.map(((mm, Tm) => (0, Om.jsx)(hm.Fragment, {
              children: mm
            }, Tm)))
          })
        }
        const cT = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          zT = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function ZT(mm) {
          let {
            type: Tm
          } = mm;
          const fm = iT(),
            Am = [];
          for (const hm of Tm.trim().matchAll(cT)) {
            const [mm, Tm, am, xm, wm] = hm;
            Tm ? Am.push((0, Om.jsx)("span", {
              className: "DocsTypeString",
              children: mm
            })) : am && fm.has(am) ? Am.push((0, Om.jsx)(NT, {
              name: am,
              definition: fm.get(am)
            })) : am ? Am.push((0, Om.jsx)("span", {
              className: zT.has(am) ? "DocsTypeKeyword" : "DocsTypeName",
              children: mm
            })) : xm ? Am.push((0, Om.jsx)("span", {
              className: "DocsTypeNumber",
              children: mm
            })) : wm ? Am.push(" ") : Am.push((0, Om.jsx)("span", {
              className: "DocsTypePunctuation",
              children: mm
            }))
          }
          return (0, Om.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Am.map(((mm, Tm) => (0, Om.jsx)(hm.Fragment, {
              children: mm
            }, Tm)))
          })
        }
        const kT = 480,
          bT = 6,
          ST = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let eT = 0;

        function NT(mm) {
          let {
            name: Tm,
            definition: fm
          } = mm;
          const Am = (0, hm.useContext)(OT),
            am = RT[Tm],
            wm = (0, hm.useRef)(null),
            Dm = (0, hm.useRef)(null),
            Rm = (0, hm.useRef)(null),
            [pm, Em] = (0, hm.useState)(!1),
            [om, Ym] = (0, hm.useState)(null),
            jm = (0, hm.useRef)(),
            Vm = (0, hm.useContext)(YT),
            [Im] = (0, hm.useState)((() => "DocsTypePopover-" + eT++)),
            Km = () => {
              clearTimeout(jm.current), Em(!0)
            },
            Qm = () => {
              clearTimeout(jm.current), jm.current = setTimeout((() => {
                Em(!1)
              }), 120)
            };
          return (0, hm.useEffect)((() => {
            if (!pm) return;
            const mm = mm => {
              if ("Escape" === mm.key) {
                var Tm, fm;
                if (null !== (Tm = Dm.current) && void 0 !== Tm && Tm.contains(document.activeElement)) null === (fm = wm.current) || void 0 === fm || fm.focus();
                Em(!1)
              }
            };
            return document.addEventListener("keydown", mm), () => {
              document.removeEventListener("keydown", mm)
            }
          }), [pm]), (0, hm.useEffect)((() => () => {
            clearTimeout(jm.current)
          }), []), (0, hm.useLayoutEffect)((() => {
            if (!pm || !wm.current || !Dm.current) return void Ym(null);
            const mm = wm.current.getBoundingClientRect(),
              Tm = Dm.current.offsetHeight,
              fm = Math.min(kT, window.innerWidth - 32),
              hm = Math.min(Math.max(16, mm.left), window.innerWidth - fm - 16),
              Am = mm.bottom + bT + Tm < window.innerHeight;
            Ym({
              left: hm,
              top: Am ? mm.bottom + bT : Math.max(16, mm.top - bT - Tm)
            })
          }), [pm]), (0, Om.jsxs)(Om.Fragment, {
            children: [(0, Om.jsx)("button", {
              type: "button",
              ref: wm,
              className: "DocsTypeLink",
              "aria-expanded": pm,
              "aria-describedby": pm ? Im : void 0,
              onMouseEnter: Km,
              onMouseLeave: Qm,
              onFocus: Km,
              onBlur: Qm,
              onKeyDown: mm => {
                "Tab" === mm.key && !mm.shiftKey && Rm.current && (mm.preventDefault(), Rm.current.focus())
              },
              onClick: Km,
              children: Tm
            }), pm && (0, im.createPortal)((0, Om.jsxs)("span", {
              ref: Dm,
              id: Im,
              className: "DocsTypePopover",
              role: "tooltip",
              style: om ? {
                left: om.left,
                top: om.top,
                maxWidth: kT
              } : {
                visibility: "hidden"
              },
              onMouseEnter: Km,
              onMouseLeave: Qm,
              onFocus: Km,
              onBlur: Qm,
              children: [(0, Om.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, Om.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: Tm
                }), am && (0, Om.jsxs)(xm.d, {
                  ref: Rm,
                  className: "DocsTypePopoverLink",
                  to: Bm(Am, Cm(am)),
                  onClick: () => {
                    Em(!1)
                  },
                  onKeyDown: mm => {
                    if ("Tab" === mm.key) {
                      var Tm;
                      if (mm.preventDefault(), mm.shiftKey || !wm.current || ! function(mm, Tm) {
                          const fm = [...document.querySelectorAll(ST)],
                            hm = fm.slice(fm.indexOf(mm) + 1).find((mm => mm.getClientRects().length > 0 && !(null !== Tm && void 0 !== Tm && Tm.contains(mm))));
                          return null === hm || void 0 === hm || hm.focus(), void 0 !== hm
                        }(wm.current, Dm.current)) null === (Tm = wm.current) || void 0 === Tm || Tm.focus();
                      mm.shiftKey || Em(!1)
                    }
                  },
                  children: [Cm(am).title, (0, Om.jsx)(qm, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, Om.jsx)(Jm, {
                lang: "ts",
                code: fm,
                compact: !0
              })]
            }), null !== Vm && void 0 !== Vm ? Vm : document.body)]
          })
        }
        var GT = fm(198),
          XT = fm(4704),
          PT = fm(4711),
          HT = fm(4717);
        const yT = {
          progressBar: {
            Sf: 30,
            ef: .075,
            Nf: 5,
            Gf: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Hf: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Cf: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            rf: !0,
            scale: 3,
            rotation: 15,
            sf: !1
          },
          gravityBar: {
            Sf: 30,
            Mf: .25,
            uf: 3,
            Bf: .8,
            gravity: 1,
            Lf: 1.5,
            vf: 8,
            tf: 4,
            Gf: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            df: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Wf: 5,
            Ff: 1200,
            mh: .15,
            Th: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var CT = fm(339),
          rT = fm(1971);

        function sT(mm) {
          return mm.startsWith("fa-")
        }
        const lT = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          MT = {
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

        function uT(mm) {
          return "string" === typeof mm ? "text" : "entityName" in mm || "translationKey" in mm ? "other" : (0, CT.tb)(mm) ? "progressBar" : (0, CT.pb)(mm) ? "keyBinding" : "icon" in mm ? "icon" : "str" in mm && "string" === typeof mm.str ? "text" : "other"
        }
        const BT = [{
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
          LT = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...BT],
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
                options: rT.h
              },
              isRequired: !0
            }, ...BT],
            other: []
          };

        function vT(mm) {
          return "string" === typeof mm ? {
            str: mm
          } : mm
        }

        function tT(mm, Tm) {
          let fm = vT(mm);
          for (const hm of Tm) fm = fm && "object" === typeof fm ? fm[hm] : void 0;
          return fm
        }

        function UT(mm, Tm, fm) {
          const hm = (mm, Am) => {
            var am;
            const xm = Tm[Am],
              wm = {
                ...mm
              };
            if (Am === Tm.length - 1) return void 0 === fm ? delete wm[xm] : wm[xm] = fm, wm;
            const Dm = hm(null !== (am = mm[xm]) && void 0 !== am ? am : {}, Am + 1);
            return 0 === Object.keys(Dm).length ? delete wm[xm] : wm[xm] = Dm, wm
          };
          return function(mm) {
            const Tm = Object.keys(mm);
            return "string" === typeof mm.str && 1 === Tm.length ? mm.str : mm
          }(hm(vT(mm), 0))
        }

        function dT(mm, Tm) {
          const fm = uT(mm),
            hm = LT[fm].find((mm => mm.path.join(".") === Tm.join("."))),
            Am = null !== hm && void 0 !== hm && hm.isRequired && "other" !== fm ? tT(MT[fm], Tm) : void 0;
          return UT(mm, Tm, Am)
        }

        function gT(mm) {
          switch (uT(mm)) {
            case "text":
              return String(tT(mm, ["str"]));
            case "icon":
              return String(tT(mm, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(tT(mm,["progress"])))}%`;
            case "keyBinding":
              return String(tT(mm, ["action"]));
            case "other":
              return JSON.stringify(mm)
          }
        }
        const WT = /^[A-Za-z_$][\w$]*$/;

        function FT(mm) {
          if (Array.isArray(mm)) return `[${mm.map(FT).join(", ")}]`;
          if (mm && "object" === typeof mm) {
            const Tm = Object.entries(mm).map((mm => {
              let [Tm, fm] = mm;
              return `${WT.test(Tm)?Tm:JSON.stringify(Tm)}: ${FT(fm)}`
            }));
            return 0 === Tm.length ? "{}" : `{ ${Tm.join(", ")} }`
          }
          return JSON.stringify(mm)
        }

        function mf(mm) {
          const Tm = mm.map(FT),
            fm = `[${Tm.join(", ")}]`;
          return fm.length <= 60 ? fm : `[\n${Tm.map((mm=>`    ${mm},`)).join("\n")}\n]`
        }
        const Tf = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function ff(mm) {
          let Tm = "";
          for (let Am = 0; Am < mm.length; Am++) {
            const am = mm[Am];
            if ("\\" === am) {
              var fm;
              const hm = null !== (fm = mm[Am + 1]) && void 0 !== fm ? fm : "";
              Tm += "'" === hm ? "'" : am + hm, Am++
            } else if ('"' === am) Tm += '\\"';
            else {
              var hm;
              Tm += null !== (hm = Tf[am]) && void 0 !== hm ? hm : am
            }
          }
          return `"${Tm}"`
        }

        function hf(mm) {
          if ("string" === typeof mm) return !0;
          if (!mm || "object" !== typeof mm || Array.isArray(mm)) return !1;
          const Tm = mm;
          return "ProgressBar" === Tm.type ? "number" === typeof Tm.progress : "StyledKeyBinding" === Tm.type ? rT.h.includes(Tm.action) : "string" === typeof Tm.icon || "string" === typeof Tm.str || "string" === typeof Tm.entityName || "string" === typeof Tm.translationKey
        }

        function Af(mm) {
          let Tm;
          try {
            Tm = function(mm) {
              let Tm = "",
                fm = "",
                hm = 0;
              const Am = () => {
                Tm += fm.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), fm = ""
              };
              for (; hm < mm.length;) {
                const am = mm.slice(hm).search(/["'`]|\/\//);
                if (-1 === am) {
                  fm += mm.slice(hm);
                  break
                }
                fm += mm.slice(hm, hm + am);
                const xm = hm + am,
                  wm = mm[xm];
                if ("/" === wm) {
                  const Tm = mm.indexOf("\n", xm);
                  hm = -1 === Tm ? mm.length : Tm;
                  continue
                }
                if (Am(), "`" === wm) throw new Error("Use quotes rather than template strings.");
                let Dm = xm + 1;
                for (; Dm < mm.length && mm[Dm] !== wm;) Dm += "\\" === mm[Dm] ? 2 : 1;
                if (Dm >= mm.length) throw new Error("A string is missing its closing quote.");
                const im = mm.slice(xm + 1, Dm);
                Tm += ff(im), hm = Dm + 1
              }
              return Am(), JSON.parse(Tm)
            }(mm.trim())
          } catch (hm) {
            return {
              parts: null,
              error: hm instanceof SyntaxError ? "This isn't a valid array yet." : hm.message
            }
          }
          if (!Array.isArray(Tm)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const fm = Tm.findIndex((mm => !hf(mm)));
          return -1 !== fm ? {
            parts: null,
            error: `Part ${fm+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: Tm,
            error: null
          }
        }
        const af = 1 / GT.f.clientTicksPerSecond,
          xf = 700,
          wf = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Df = {
            progressBar: yT.progressBar.Hf,
            timedClick: yT.timedClick.icon,
            gravityBar: yT.gravityBar.icon,
            precisionBar: yT.precisionBar.icon,
            rhythmClick: yT.rhythmClick.icon
          };

        function Rf(mm) {
          let {
            type: Tm
          } = mm;
          const [fm, Am] = (0, hm.useState)("ready"), [xm, wm] = (0, hm.useState)(1), [Dm, im] = (0, hm.useState)(!0), Rm = (0, hm.useRef)(null), pm = (0, hm.useRef)(null), Em = (0, hm.useRef)(null), om = (0, hm.useRef)(new Set), Ym = (0, hm.useRef)(!1), jm = Df[Tm], Vm = (0, hm.useMemo)((() => ({
            getState: () => {
              var mm, Tm;
              return null !== (mm = null === (Tm = Em.current) || void 0 === Tm ? void 0 : Tm.getState()) && void 0 !== mm ? mm : wf
            },
            onFrame: mm => (om.current.add(mm), () => {
              om.current.delete(mm)
            })
          })), []);
          (0, hm.useEffect)((() => {
            const mm = Rm.current,
              Tm = pm.current;
            if (!mm || !Tm) return;
            const fm = new ResizeObserver((() => {
              wm(mm.clientWidth / Math.max(1, Tm.offsetWidth))
            }));
            return fm.observe(mm), () => {
              fm.disconnect()
            }
          }), []), (0, hm.useEffect)((() => {
            var mm;
            if ("playing" !== fm) return;
            let hm = !1;
            const am = new HT.h[Tm](yT[Tm], (mm => {
              hm = !0, im(!1), Am(mm ? "succeeded" : "failed")
            }), (() => {}));
            Em.current = am;
            let xm = 0,
              wm = performance.now(),
              Dm = requestAnimationFrame((function mm(Tm) {
                for (xm += Math.min(.25, (Tm - wm) / 1e3), wm = Tm; xm >= af && !hm;) xm -= af, am.handleTick(af);
                for (const fm of om.current) fm();
                hm || (Dm = requestAnimationFrame(mm))
              }));
            return null === (mm = Rm.current) || void 0 === mm || mm.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Dm), am.tearDown(), Em.current = null, Ym.current = !1
            }
          }), [fm, Tm]), (0, hm.useEffect)((() => {
            if (Dm) return;
            const mm = setTimeout((() => {
              im(!0)
            }), xf);
            return () => {
              clearTimeout(mm)
            }
          }), [Dm]);
          const Im = mm => {
            var Tm;
            "playing" === fm && Ym.current !== mm && (Ym.current = mm, null === (Tm = Em.current) || void 0 === Tm || Tm.handleMouseInput(mm))
          };
          return (0, Om.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, Om.jsxs)("div", {
              ref: Rm,
              className: am()("DocsQteStage", {
                Playing: "playing" === fm
              }),
              tabIndex: "playing" === fm ? 0 : -1,
              role: "playing" === fm ? "button" : void 0,
              "aria-label": "playing" === fm ? `${Tm} quick time event: click or press Space` : void 0,
              onPointerDown: mm => {
                0 === mm.button && Im(!0)
              },
              onPointerUp: () => {
                Im(!1)
              },
              onPointerLeave: () => {
                Im(!1)
              },
              onPointerCancel: () => {
                Im(!1)
              },
              onKeyDown: mm => {
                "playing" !== fm || " " !== mm.key && "Enter" !== mm.key || (mm.preventDefault(), Im(!0))
              },
              onKeyUp: mm => {
                "playing" !== fm || " " !== mm.key && "Enter" !== mm.key || Im(!1)
              },
              children: [(0, Om.jsx)("div", {
                ref: pm,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${xm})`
                },
                children: "playing" === fm && (0, Om.jsx)(PT.b.Provider, {
                  value: Vm,
                  children: (0, Om.jsx)(XT.c, {
                    qte: {
                      type: Tm,
                      parameters: yT[Tm]
                    }
                  })
                })
              }), "playing" !== fm && (0, Om.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== fm && (0, Om.jsxs)("div", {
                  className: am()("DocsQteResult", "succeeded" === fm ? "Succeeded" : "Failed"),
                  children: [(0, Om.jsx)(qm, {
                    name: "succeeded" === fm ? "check" : "cross",
                    isTinted: !0
                  }), (0, Om.jsx)("span", {
                    children: "succeeded" === fm ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, Om.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Dm,
                  onClick: () => {
                    Am("playing")
                  },
                  children: [(0, Om.jsx)(qm, {
                    name: "ready" === fm ? "play" : "replay"
                  }), (0, Om.jsx)("span", {
                    children: "ready" === fm ? `Try ${Tm}` : "Play again"
                  })]
                })]
              })]
            }), jm && !sT(jm) && (0, Om.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, Om.jsx)("code", {
                children: jm
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function pf(mm) {
          let {
            level: Tm,
            text: fm,
            anchor: hm,
            className: Am
          } = mm;
          const xm = `h${Math.min(Tm,6)}`;
          return (0, Om.jsxs)(xm, {
                id: hm,
                className: am()("DocsHeading", Am),
                children: [(0, Om.jsx)(JT, {
                      text: fm
                    }), (0, Om.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${hm}`,
                        "aria-label": `Link to ${fm.replace(/`/g,"")}`,children:"#"})]})}function Ef(mm){let{items:Tm,ordered:fm}=mm;const hm=fm?"ol":"ul";return(0,Om.jsx)(hm,{className:"DocsList",children:Tm.map(((mm,Tm)=>(0,Om.jsxs)("li",{children:[(0,Om.jsx)(JT,{text:mm.text}),mm.children.length>0&&(0,Om.jsx)(Ef,{items:mm.children,ordered:fm})]},Tm)))})}function of(mm){const Tm=mm[0],fm="paragraph"===(null===Tm||void 0===Tm?void 0:Tm.kind)?Tm.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(fm)?"warning":/^\*\*(tip|prefer)/.test(fm)?"tip":"note"}function Of(mm){let{block:Tm}=mm;switch(Tm.kind){case"heading":return(0,Om.jsx)(pf,{level:Tm.level,text:Tm.text,anchor:Tm.anchor});case"paragraph":return(0,Om.jsx)("p",{children:(0,Om.jsx)(JT,{text:Tm.text})});case"code":{const mm="ts"===Tm.lang?function(mm){const Tm=mm.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return Tm&&Object.hasOwn(yT,Tm[1])?Tm[1]:null}(Tm.code):null;return(0,Om.jsxs)(Om.Fragment,{children:[(0,Om.jsx)(Jm,{code:Tm.code,lang:Tm.lang}),mm&&(0,Om.jsx)(Rf,{type:mm})]})}case"table":return(0,Om.jsx)("div",{className:"DocsTableScroll",children:(0,Om.jsxs)("table",{className:"DocsTable",children:[(0,Om.jsx)("thead",{children:(0,Om.jsx)("tr",{children:Tm.header.map(((mm,Tm)=>(0,Om.jsx)("th",{children:(0,Om.jsx)(JT,{text:mm})},Tm)))})}),(0,Om.jsx)("tbody",{children:Tm.rows.map(((mm,Tm)=>(0,Om.jsx)("tr",{children:mm.map(((mm,Tm)=>(0,Om.jsx)("td",{children:(0,Om.jsx)(JT,{text:mm})},Tm)))},Tm)))})]})});case"list":return(0,Om.jsx)(Ef,{items:Tm.items,ordered:Tm.ordered});case"quote":return(0,Om.jsx)("aside",{className:am()("DocsCallout",of(Tm.blocks)),children:(0,Om.jsx)(Yf,{blocks:Tm.blocks})});case"rule":return(0,Om.jsx)("hr",{className:"DocsRule"})}}function Yf(mm){let{blocks:Tm}=mm;return(0,Om.jsx)(Om.Fragment,{children:Tm.map(((mm,Tm)=>(0,Om.jsx)(Of,{block:mm},Tm)))})}var qf=fm(4683),jf=fm(4691);function Vf(mm){return"blocks"===mm||"items"===mm}const If=new Map;function Kf(mm){let Tm=If.get(mm);return Tm||(Tm=function(mm){const Tm={entries:[],legend:[],notes:[],examples:[]};let fm=!1;for(const am of mm.split(/\r?\n/).slice(1)){if(am.startsWith("#")){const mm=am.replace(/^# ?/,""),hm=mm.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);hm?Tm.legend.push({code:hm[1],meaning:hm[2],usage:hm[3].trim()}):/^Examples:/.test(mm.trim())?fm=!0:fm&&mm.trim()?Tm.examples.push(mm.trim()):mm.trim()&&!/^\s/.test(mm)&&Tm.notes.push(mm.trim());continue}const mm=am.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var hm,Am;mm&&Tm.entries.push({name:mm[1],variants:null!==(hm=null===(Am=mm[2])||void 0===Am?void 0:Am.split(","))&&void 0!==hm?hm:[]})}return Tm}("blocks"===mm?qf:jf),If.set(mm,Tm)),Tm}function Qf(mm){let{className:Tm,value:fm,placeholder:hm,label:Am,onChange:am,count:xm,children:wm}=mm;return(0,Om.jsxs)("div",{className:Tm,children:[(0,Om.jsx)(qm,{name:"magnifying-glass"}),(0,Om.jsx)("input",{type:"search",value:fm,placeholder:hm,"aria-label":Am,onChange:mm=>{am(mm.target.value)}}),wm,xm&&(0,Om.jsxs)("span",{className:"DocsFilterCount",children:[xm.visible," of ",xm.total]})]})}var nf=fm(1089);function Jf(mm){const Tm=mm.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return Tm?Tm[2]:null}function zf(mm){return"paragraph"===mm.kind&&""===mm.text.trim()}function Zf(mm){const Tm={name:mm.heading.text,description:[],params:[],returns:null};let fm="description";for(const Am of mm.blocks)if(!zf(Am))if("heading"===Am.kind&&/^Parameters:?$/.test(Am.text))fm="params";else if("heading"===Am.kind&&/^Returns:?$/.test(Am.text))fm="returns",Tm.returns={type:"",description:[]};else if("params"!==fm||"table"!==Am.kind){if("returns"===fm&&"paragraph"===Am.kind&&""===Tm.returns.type){const mm=Jf(Am.text);if(null!==mm){Tm.returns.type=mm.replaceAll("\\|","|");continue}}"returns"===fm?Tm.returns.description.push(Am):Tm.description.push(Am)}else for(const[mm,fm,am]of Am.rows){var hm;Tm.params.push({name:mm,type:null!==(hm=Jf(fm))&&void 0!==hm?hm:fm,description:null!==am&&void 0!==am?am:""})}return Tm}const kf=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function bf(mm){return mm.filter((mm=>!zf(mm)))}const Sf=/^[\w][\w .'&!:()-]*$/,ef=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Nf(mm){var Tm;if("code"===mm.kind&&"text"===mm.lang){const Tm=mm.code.split("\n").map((mm=>mm.trim())).filter(Boolean);return Tm.length>0&&Tm.every((mm=>Sf.test(mm)))?Tm.map((mm=>({name:mm}))):null}return"paragraph"===mm.kind&&ef.test(mm.text.trim())?[...mm.text.matchAll(/`([ ^ `]+)` / g)].flatMap((mm => mm[1].split(/,\s*/).map((mm => ({
                              name: mm.trim()
                            }))))): "table" === mm.kind && null !== (Tm = mm.header[0]) && void 0 !== Tm && Tm.startsWith("Song") ? mm.rows.map((mm => {
                              let [Tm, fm] = mm;
                              return {
                                name: Tm.replace(/`/g, ""),
                                caption: fm
                              }
                            })) : null
                          }

                          function Gf(mm) {
                            const Tm = [];
                            for (const fm of mm) {
                              const mm = Nf(fm),
                                hm = Tm.at(-1),
                                Am = "table" === fm.kind;
                              mm ? "names" === (null === hm || void 0 === hm ? void 0 : hm.kind) && hm.isSongs === Am ? hm.names.push(...mm) : Tm.push({
                                kind: "names",
                                names: mm,
                                isSongs: Am
                              }) : Tm.push({
                                kind: "block",
                                block: fm
                              })
                            }
                            return Tm
                          }
                          const Xf = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Pf(mm, Tm) {
                            return `${Xf[mm]}-${(0,cm.q)(Tm)}`
                          }
                          const Hf = new WeakMap;

                          function yf(mm, Tm, fm) {
                            let hm = Hf.get(Tm);
                            if (!hm) {
                              hm = new Map;
                              const fm = new Set;
                              for (const Am of (0, cm.r)(Tm)) {
                                const Tm = Gf(bf(Am.blocks)).map((Tm => {
                                  if ("block" === Tm.kind) return Tm;
                                  return {
                                    kind: "names",
                                    names: Tm.names.map((Tm => {
                                      var hm, am;
                                      const xm = Pf(mm, Tm.name);
                                      let wm = xm;
                                      for (let mm = 2; fm.has(wm); mm++) wm = `${xm}-${mm}`;
                                      return fm.add(wm), {
                                        ...Tm,
                                        anchor: wm,
                                        heading: null !== (hm = null === (am = Am.heading) || void 0 === am ? void 0 : am.text) && void 0 !== hm ? hm : ""
                                      }
                                    })),
                                    isSongs: Tm.isSongs
                                  }
                                }));
                                hm.set(Am.blocks, Tm)
                              }
                              Hf.set(Tm, hm)
                            }
                            const Am = hm.get(fm);
                            if (!Am) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Am
                          }
                          const Cf = "/textures/docs/skinPreviews",
                            rf = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var sf = fm(4160),
                            lf = fm(4171);

                          function Mf(mm) {
                            return Object.hasOwn(sf.g, mm) ? sf.g[mm] : null
                          }
                          const uf = {
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
                            blendMode: lf.g.Standard
                          };

                          function Bf(mm, Tm, fm) {
                            return Tm + (fm - Tm) * mm()
                          }

                          function Lf(mm, Tm, fm) {
                            return mm + (Tm - mm) * fm
                          }

                          function vf(mm) {
                            return mm.length > 0 && "timeFraction" in mm[0]
                          }

                          function tf(mm, Tm) {
                            if (0 === mm.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!vf(mm.colorGradients)) {
                              const fm = mm.colorGradients,
                                {
                                  color: hm
                                } = fm[Math.floor(Tm() * fm.length) % fm.length];
                              return [{
                                at: 0,
                                colour: [hm[0] / 255, hm[1] / 255, hm[2] / 255, 1]
                              }]
                            }
                            return [...mm.colorGradients].sort(((mm, Tm) => mm.timeFraction - Tm.timeFraction)).map((mm => {
                              var fm, hm, Am;
                              const am = mm.minColor,
                                xm = null !== (fm = mm.maxColor) && void 0 !== fm ? fm : am,
                                wm = Tm(),
                                Dm = [Lf(am[0], xm[0], wm) / 255, Lf(am[1], xm[1], wm) / 255, Lf(am[2], xm[2], wm) / 255, Lf(null !== (hm = am[3]) && void 0 !== hm ? hm : 1, null !== (Am = xm[3]) && void 0 !== Am ? Am : 1, wm)];
                              return {
                                at: mm.timeFraction,
                                colour: Dm
                              }
                            }))
                          }

                          function Uf(mm, Tm, fm, hm) {
                            const Am = Bf(hm, mm.minEmitPower, mm.maxEmitPower),
                              am = Tm => Bf(hm, Math.min(mm.dir1[Tm], mm.dir2[Tm]), Math.max(mm.dir1[Tm], mm.dir2[Tm])) * Am,
                              xm = [...mm.velocityGradients].sort(((mm, Tm) => mm.timeFraction - Tm.timeFraction)).map((mm => ({
                                at: mm.timeFraction,
                                factor: Bf(hm, mm.factor, mm.factor2)
                              })));
                            return {
                              pos: [Bf(hm, Tm[0], fm[0]), Bf(hm, Tm[1], fm[1]), Bf(hm, Tm[2], fm[2])],
                              dir: [am(0), am(1), am(2)],
                              age: 0,
                              life: Bf(hm, mm.minLifeTime, mm.maxLifeTime),
                              size: Bf(hm, mm.minSize, mm.maxSize),
                              colours: tf(mm, hm),
                              velocityFactors: xm
                            }
                          }

                          function df(mm, Tm, fm, hm) {
                            if (Tm < mm[0].at) return fm(Math.min(1, mm.length - 1));
                            for (let Am = 0; Am < mm.length - 1; Am++)
                              if (Tm <= mm[Am + 1].at) {
                                const am = mm[Am + 1].at - mm[Am].at;
                                return hm(fm(Am), fm(Am + 1), am > 0 ? (Tm - mm[Am].at) / am : 1)
                              } return fm(mm.length - 1)
                          }

                          function gf(mm) {
                            return df(mm.colours, mm.age / mm.life, (Tm => mm.colours[Tm].colour), ((mm, Tm, fm) => [Lf(mm[0], Tm[0], fm), Lf(mm[1], Tm[1], fm), Lf(mm[2], Tm[2], fm), Lf(mm[3], Tm[3], fm)]))
                          }

                          function Wf(mm, Tm, fm) {
                            if (mm.age += fm, mm.age >= mm.life) return !1;
                            const hm = function(mm) {
                              return 0 === mm.velocityFactors.length ? 1 : df(mm.velocityFactors, mm.age / mm.life, (Tm => mm.velocityFactors[Tm].factor), Lf)
                            }(mm) * fm;
                            for (let am = 0; am < 3; am++) {
                              var Am;
                              mm.pos[am] += mm.dir[am] * hm, mm.dir[am] += (null !== (Am = Tm[am]) && void 0 !== Am ? Am : 0) * fm
                            }
                            return !0
                          }

                          function Ff(mm) {
                            return String(Math.round(1e6 * mm) / 1e6)
                          }

                          function mh(mm) {
                            return `[${mm.map(Ff).join(", ")}]`
                          }

                          function Th(mm, Tm) {
                            const fm = `${Tm}    `;
                            return `[\n${(vf(mm)?mm.map((mm=>{const Tm=[`${fm}    timeFraction: ${Ff(mm.timeFraction)},`,`${fm}    minColor: ${mh(mm.minColor)},`];return mm.maxColor&&Tm.push(`${fm}    maxColor: ${mh(mm.maxColor)},`),`${fm}{\n${Tm.join("\n")}\n${fm}},`})):mm.map((mm=>`
                            $ {
                              fm
                            } {
                              color: $ {
                                mh(mm.color)
                              }
                            }, `))).join("\n")}\n${Tm}]`
                          }
                          const fh = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            hh = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const Ah = .6;

                          function ah(mm, Tm) {
                            return `${Tm?"song":"sound"}:${mm}`
                          }
                          let xh = {
                              track: null,
                              volume: Ah
                            },
                            wh = null,
                            Dh = 0,
                            ih = 0;
                          const Rh = new Set;

                          function ph(mm) {
                            xh = {
                              ...xh,
                              ...mm
                            }, Rh.forEach((mm => {
                              mm()
                            }))
                          }

                          function Eh(mm) {
                            xh.track && ph({
                              track: {
                                ...xh.track,
                                ...mm
                              }
                            })
                          }

                          function oh(mm) {
                            const [Tm, fm] = (0, hm.useState)((() => mm(xh))), Am = (0, hm.useRef)(mm);
                            return Am.current = mm, (0, hm.useEffect)((() => {
                              const mm = () => {
                                fm((() => Am.current(xh)))
                              };
                              return Rh.add(mm), mm(), () => {
                                Rh.delete(mm)
                              }
                            }), []), Tm
                          }

                          function Oh() {
                            Dh++;
                            const mm = wh;
                            wh = null, null === mm || void 0 === mm || mm.stop()
                          }

                          function Yh(mm, Tm) {
                            let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Oh();
                            const Am = Dh,
                              {
                                track: am
                              } = xh,
                              xm = am && am.name === mm && am.isSong === Tm ? am.duration : 0;
                            ih = hm, ph({
                              track: {
                                name: mm,
                                isSong: Tm,
                                status: "loading",
                                duration: xm
                              }
                            }), Promise.all([fm.e(222), fm.e(249)]).then((() => fm(39909))).then((fm => {
                              let {
                                playDocsSound: am
                              } = fm;
                              Am === Dh && (wh = am(mm, Tm, xh.volume, hm, {
                                onPlay: mm => {
                                  Am === Dh && Eh({
                                    status: "playing",
                                    duration: mm
                                  })
                                },
                                onEnd: mm => {
                                  var Tm, fm;
                                  Am === Dh && (wh = null, mm ? ph({
                                    track: null
                                  }) : (ih = null !== (Tm = null === (fm = xh.track) || void 0 === fm ? void 0 : fm.duration) && void 0 !== Tm ? Tm : 0, Eh({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((Tm => {
                              console.error(`Could not play docs sound ${mm}`, Tm), Am === Dh && ph({
                                track: null
                              })
                            }))
                          }

                          function qh() {
                            const {
                              track: mm
                            } = xh;
                            if (!mm) return;
                            if ("playing" === mm.status && wh) return ih = wh.rV(), wh.pause(), void Eh({
                              status: "paused"
                            });
                            if ("loading" === mm.status) return Oh(), void Eh({
                              status: "paused"
                            });
                            if (wh) return void wh.resume();
                            const Tm = mm.duration > 0 && ih >= mm.duration - .05;
                            Yh(mm.name, mm.isSong, Tm ? 0 : ih)
                          }

                          function jh() {
                            var mm;
                            return wh && "playing" === (null === (mm = xh.track) || void 0 === mm ? void 0 : mm.status) ? wh.rV() : ih
                          }

                          function Vh(mm) {
                            var Tm;
                            null === (Tm = wh) || void 0 === Tm || Tm.setVolume(mm), ph({
                              volume: mm
                            })
                          }

                          function Ih() {
                            Oh(), ih = 0, ph({
                              track: null
                            })
                          }
                          const Kh = (0, hm.createContext)(null);
                          let Qh = null;

                          function nh() {
                            const [mm, Tm] = (0, hm.useState)(null);
                            return (0, hm.useEffect)((() => {
                              let mm = !1;
                              return Qh ??= Promise.all([fm.e(72), fm.e(75), fm.e(74), fm.e(73), fm.e(186), fm.e(98), fm.e(226)]).then((() => fm(39901))), Qh.then((fm => {
                                mm || Tm(fm)
                              }), (mm => {
                                console.error("Could not load the docs gallery's textures", mm), Qh = null
                              })), () => {
                                mm = !0
                              }
                            }), []), mm
                          }
                          const Jh = 24,
                            ch = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function zh(mm, Tm) {
                            const fm = "skins" === mm ? function(mm, Tm) {
                              const fm = rf.find((Tm => mm.startsWith(Tm.heading)));
                              return fm ? function(mm, Tm) {
                                return `${mm}-${Tm}`
                              }(fm.prefix, Tm) : null
                            }(Tm.heading, Tm.name) : null;
                            return null === fm ? null : `${Cf}/${fm}.webp`
                          }

                          function Zh(mm) {
                            let {
                              kind: Tm,
                              entry: fm,
                              assets: Am,
                              renderedUrl: xm
                            } = mm;
                            const {
                              name: wm
                            } = fm, [Dm, im] = (0, hm.useState)(!1);
                            if ("icons" === Tm && sT(wm)) return (0, Om.jsx)(nf.c, {
                              className: "DocsTileIcon",
                              name: wm
                            });
                            let Rm = null;
                            var pm;
                            if ("icons" === Tm) Rm = null !== (pm = null === Am || void 0 === Am ? void 0 : Am.getIngameIconUrl(wm)) && void 0 !== pm ? pm : null;
                            else if ("particles" === Tm) {
                              var Em, om, Ym;
                              Rm = null !== (Em = null === Am || void 0 === Am ? void 0 : Am.getParticleTextureUrl(null !== (om = null === (Ym = Mf(wm)) || void 0 === Ym ? void 0 : Ym.texture) && void 0 !== om ? om : wm)) && void 0 !== Em ? Em : null
                            } else "skins" === Tm && (Rm = null !== xm && void 0 !== xm ? xm : ch.test(wm) ? `/textures/charSkins/previews/${wm}_preview.png` : null);
                            return !Rm || Dm ? (0, Om.jsx)(qm, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === Tm ? "person" : "image"
                            }) : (0, Om.jsx)("img", {
                              className: am()("DocsTileImage", {
                                Pixelated: "skins" !== Tm
                              }),
                              src: Rm,
                              srcSet: Rm === xm ? `${Rm} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Rm}`), im(!0)
                              }
                            })
                          }

                          function kh(mm) {
                            let {
                              entry: Tm,
                              isSong: fm
                            } = mm;
                            const hm = oh((mm => {
                                let {
                                  track: hm
                                } = mm;
                                return (null === hm || void 0 === hm ? void 0 : hm.name) === Tm.name && hm.isSong === fm ? hm.status : null
                              })),
                              Am = null !== hm && "paused" !== hm;
                            return (0, Om.jsxs)("button", {
                              type: "button",
                              id: Tm.anchor,
                              className: am()("DocsSoundTile", {
                                Playing: Am
                              }),
                              "data-docs-track": ah(Tm.name, fm),
                              "aria-label": Am ? `Pause ${Tm.name}` : `Play ${Tm.name}`,
                              onClick: () => {
                                null !== hm ? qh() : Yh(Tm.name, fm)
                              },
                              children: [(0, Om.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, Om.jsx)(qm, {
                                  name: Am ? "pause" : "play"
                                })
                              }), (0, Om.jsx)("code", {
                                className: "DocsSoundName",
                                children: Tm.name
                              }), Tm.caption && (0, Om.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: Tm.caption
                              })]
                            })
                          }

                          function bh(mm) {
                            let {
                              kind: Tm,
                              names: fm,
                              isSongs: Am
                            } = mm;
                            const xm = nh(),
                              [wm, Dm] = Vm(),
                              im = !1 === (null === wm || void 0 === wm ? void 0 : wm.failed) ? wm.text : null,
                              Rm = (0, hm.useContext)(Kh),
                              [pm, Em] = (0, hm.useState)(""),
                              om = pm.trim().toLowerCase(),
                              Ym = om ? fm.filter((mm => mm.name.toLowerCase().includes(om))) : fm;
                            return (0, Om.jsxs)("div", {
                              className: "DocsGallery",
                              children: [fm.length > Jh && (0, Om.jsx)(Qf, {
                                className: "DocsGalleryFilter",
                                value: pm,
                                placeholder: `Filter ${fm.length} names\u2026`,
                                label: "Filter names",
                                onChange: Em,
                                count: om ? {
                                  visible: Ym.length,
                                  total: fm.length
                                } : null
                              }), (0, Om.jsx)("div", {
                                className: am()("DocsGalleryGrid", `Kind-${Tm}`, {
                                  Songs: Am
                                }),
                                children: Ym.map((mm => {
                                  if ("sounds" === Tm) return (0, Om.jsx)(kh, {
                                    entry: mm,
                                    isSong: Am
                                  }, mm.anchor);
                                  if (Rm && "particles" === Tm && Mf(mm.name)) return (0, Om.jsxs)("button", {
                                    type: "button",
                                    id: mm.anchor,
                                    className: am()("DocsTile Previewable", {
                                      Copied: im === mm.name
                                    }),
                                    title: `Play "${mm.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Rm(mm.name), Dm(mm.name)
                                    },
                                    children: [(0, Om.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, Om.jsx)(Zh, {
                                        kind: Tm,
                                        entry: mm,
                                        assets: xm,
                                        renderedUrl: null
                                      }), (0, Om.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, Om.jsx)(qm, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, Om.jsx)("span", {
                                      className: "DocsTileName",
                                      children: im === mm.name ? "Copied!" : mm.name
                                    })]
                                  }, mm.anchor);
                                  const fm = zh(Tm, mm);
                                  return (0, Om.jsxs)("button", {
                                    type: "button",
                                    id: mm.anchor,
                                    className: am()("DocsTile", {
                                      Copied: im === mm.name
                                    }),
                                    title: `Copy "${mm.name}"`,
                                    onClick: () => {
                                      Dm(mm.name)
                                    },
                                    children: [(0, Om.jsx)("span", {
                                      className: am()("DocsTilePreview", {
                                        Rendered: null !== fm
                                      }),
                                      children: (0, Om.jsx)(Zh, {
                                        kind: Tm,
                                        entry: mm,
                                        assets: xm,
                                        renderedUrl: fm
                                      })
                                    }), (0, Om.jsx)("span", {
                                      className: "DocsTileName",
                                      children: im === mm.name ? "Copied!" : mm.name
                                    })]
                                  }, mm.anchor)
                                }))
                              })]
                            })
                          }

                          function Sh(mm) {
                            let {
                              kind: Tm,
                              content: fm,
                              blocks: hm
                            } = mm;
                            return (0, Om.jsx)(Om.Fragment, {
                              children: yf(Tm, fm, hm).map(((mm, fm) => "block" === mm.kind ? (0, Om.jsx)(Of, {
                                block: mm.block
                              }, fm) : (0, Om.jsx)(bh, {
                                kind: Tm,
                                names: mm.names,
                                isSongs: mm.isSongs
                              }, fm)))
                            })
                          }
                          const eh = [{
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

                          function Nh(mm) {
                            let {
                              cards: Tm = eh,
                              label: fm = "Start here"
                            } = mm;
                            const Am = (0, hm.useContext)(OT);
                            return (0, Om.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": fm,
                              children: Tm.map((mm => {
                                let {
                                  pageId: Tm,
                                  countNoun: fm
                                } = mm;
                                const hm = Cm(Tm);
                                return (0, Om.jsxs)(xm.d, {
                                  to: Bm(Am, hm),
                                  className: "DocsLandingCard",
                                  children: [(0, Om.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, Om.jsx)(qm, {
                                      name: hm.icon
                                    })
                                  }), (0, Om.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: hm.title
                                  }), (0, Om.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: hm.summary
                                  }), fm && (0, Om.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [sm(hm).sections.length, " ", fm]
                                  })]
                                }, Tm)
                              }))
                            })
                          }
                          const Gh = 240;

                          function Xh(mm) {
                            let {
                              faces: Tm
                            } = mm;
                            return (0, Om.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, Om.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${Tm.top}")`
                                }
                              }), (0, Om.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${Tm.left}")`
                                }
                              }), (0, Om.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${Tm.right}")`
                                }
                              })]
                            })
                          }

                          function Ph(mm) {
                            let {
                              src: Tm
                            } = mm;
                            const [fm, Am] = (0, hm.useState)(!1);
                            return fm ? null : (0, Om.jsx)("img", {
                              src: Tm,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${Tm}`), Am(!0)
                              }
                            })
                          }

                          function Hh(mm) {
                            let {
                              kind: Tm
                            } = mm;
                            const fm = Kf(Tm),
                              Am = nh(),
                              xm = (0, wm.w)(),
                              [Dm, im] = (0, hm.useState)(""),
                              [Rm, pm] = (0, hm.useState)(null),
                              [Em, om] = (0, hm.useState)(Gh),
                              [Ym, jm] = (0, hm.useState)(null),
                              Vm = (0, hm.useRef)(null),
                              Km = Dm.trim().toLowerCase();
                            (0, hm.useEffect)((() => {
                              const mm = (0, cm.o)(xm.hash),
                                hm = fm.entries.find((fm => Pf(Tm, fm.name) === mm));
                              if (hm) Vm.current = hm.name, im(hm.name), pm(null), jm(hm.name);
                              else if (null !== Vm.current) {
                                const mm = Vm.current;
                                Vm.current = null, im((Tm => Tm === mm ? "" : Tm)), jm(null)
                              }
                            }), [fm, Tm, xm.hash, xm.key]), (0, hm.useEffect)((() => {
                              var mm;
                              null !== Ym && (null === (mm = document.getElementById(Pf(Tm, Ym))) || void 0 === mm || mm.scrollIntoView({
                                block: "center"
                              }))
                            }), [Tm, Ym]);
                            const Qm = fm.entries.filter((mm => (!Km || mm.name.toLowerCase().includes(Km)) && (!Rm || mm.variants.includes(Rm))));
                            return (0, Om.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [fm.notes.length > 0 && (0, Om.jsx)("div", {
                                className: "DocsProse",
                                children: fm.notes.map((mm => (0, Om.jsx)("p", {
                                  children: mm
                                }, mm)))
                              }), fm.legend.length > 0 && (0, Om.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, Om.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, Om.jsx)("thead", {
                                    children: (0, Om.jsxs)("tr", {
                                      children: [(0, Om.jsx)("th", {
                                        children: "Code"
                                      }), (0, Om.jsx)("th", {
                                        children: "Variant"
                                      }), (0, Om.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, Om.jsx)("tbody", {
                                    children: fm.legend.map((mm => (0, Om.jsxs)("tr", {
                                      children: [(0, Om.jsx)("td", {
                                        children: (0, Om.jsx)("button", {
                                          type: "button",
                                          className: am()("DocsVariantChip", {
                                            Active: Rm === mm.code
                                          }),
                                          "aria-pressed": Rm === mm.code,
                                          title: `Show only ${Tm} with ${mm.meaning} variants`,
                                          onClick: () => {
                                            pm(Rm === mm.code ? null : mm.code)
                                          },
                                          children: mm.code
                                        })
                                      }), (0, Om.jsx)("td", {
                                        children: mm.meaning
                                      }), (0, Om.jsx)("td", {
                                        children: (0, Om.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: mm.usage
                                        })
                                      })]
                                    }, mm.code)))
                                  })]
                                })
                              }), fm.examples.length > 0 && (0, Om.jsx)(Jm, {
                                lang: "text",
                                code: fm.examples.join("\n")
                              }), (0, Om.jsx)(Qf, {
                                className: "DocsFilterBar",
                                value: Dm,
                                placeholder: `Search ${fm.entries.length} ${Tm}\u2026`,
                                label: `Search ${Tm}`,
                                onChange: mm => {
                                  im(mm), om(Gh)
                                },
                                count: Km || Rm ? {
                                  visible: Qm.length,
                                  total: fm.entries.length
                                } : null,
                                children: Rm && (0, Om.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    pm(null)
                                  },
                                  children: [Rm, " ", (0, Om.jsx)(qm, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, Om.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Qm.slice(0, Em).map((mm => {
                                  const fm = "blocks" === Tm ? null === Am || void 0 === Am ? void 0 : Am.getBlockFaces(mm.name) : null,
                                    hm = Am && !fm ? Am.getItemTextureUrl(mm.name) : null;
                                  return (0, Om.jsxs)("div", {
                                    id: Pf(Tm, mm.name),
                                    className: am()("DocsCatalogueTile", {
                                      Linked: mm.name === Ym
                                    }),
                                    children: [(0, Om.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [fm && (0, Om.jsx)(Xh, {
                                        faces: fm
                                      }), hm && (0, Om.jsx)(Ph, {
                                        src: hm
                                      })]
                                    }), (0, Om.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: mm.name
                                    }), mm.variants.length > 0 && (0, Om.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: mm.variants.map((mm => (0, Om.jsx)("span", {
                                        children: mm
                                      }, mm)))
                                    }), (0, Om.jsx)(Im, {
                                      text: mm.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, mm.name)
                                }))
                              }), Qm.length > Em && (0, Om.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  om(Qm.length)
                                },
                                children: ["Show all ", Qm.length]
                              }), 0 === Qm.length && (0, Om.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", Tm, " match."]
                              })]
                            })
                          }
                          var yh = fm(4767),
                            Ch = fm(1589);
                          const rh = .95 * yh.d;

                          function sh(mm) {
                            return /^\s*```/.test(mm)
                          }

                          function lh(mm, Tm) {
                            const fm = [
                              []
                            ];
                            let hm = !1;
                            for (const Am of mm.split("\n")) !hm && Tm(Am) && fm.at(-1).length > 0 && fm.push([]), sh(Am) && (hm = !hm), fm.at(-1).push(Am);
                            return fm.map((mm => mm.join("\n").trim())).filter(Boolean)
                          }

                          function Mh(mm, Tm) {
                            const fm = `${"#".repeat(Tm)} `,
                              hm = [];
                            let Am = !1;
                            for (const am of mm.split("\n")) sh(am) ? Am = !Am : !Am && am.startsWith(fm) && hm.push(am.slice(fm.length).trim());
                            return hm
                          }

                          function uh(mm) {
                            return mm.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class Bh {
                            constructor(mm, Tm) {
                              this.origin = Tm, this.pages = void 0, this.partPaths = new Map;
                              const fm = mm.map((mm => {
                                const Tm = Tm => this.resolveLinks(mm, Tm).length,
                                  fm = function(mm, Tm) {
                                    const fm = mm.map((mm => Tm(mm.markdown) + 2)),
                                      hm = fm.reduce(((mm, Tm) => mm + Tm), 0),
                                      Am = hm / Math.ceil(hm / rh),
                                      am = [];
                                    let xm = 0;
                                    return mm.forEach(((mm, Tm) => {
                                      const hm = fm[Tm];
                                      (0 === am.length || xm + hm > rh || xm + hm / 2 > Am) && (am.push([]), xm = 0), am.at(-1).push(mm), xm += hm
                                    })), am
                                  }(function(mm, Tm) {
                                    return lh(mm, (mm => mm.startsWith("## "))).flatMap((mm => {
                                      var fm;
                                      const hm = null !== (fm = Mh(mm, 2)[0]) && void 0 !== fm ? fm : "";
                                      if (Tm(mm) <= rh) return [{
                                        markdown: mm,
                                        section: hm
                                      }];
                                      let Am = !1,
                                        am = "";
                                      return lh(mm, (mm => {
                                        const Tm = Am && "" !== mm.trim();
                                        return Am = "" === mm.trim(), Tm
                                      })).map((mm => {
                                        var Tm;
                                        const fm = Mh(mm, 3),
                                          Am = mm.startsWith("### ") ? fm[0] : am;
                                        return am = null !== (Tm = fm.at(-1)) && void 0 !== Tm ? Tm : am, {
                                          markdown: mm,
                                          section: hm || Am
                                        }
                                      }))
                                    }))
                                  }(uh(mm), Tm), Tm);
                                return {
                                  page: mm,
                                  groups: fm.length > 1 ? fm : []
                                }
                              }));
                              for (const {
                                  page: hm,
                                  groups: Am
                                }
                                of fm) Am.forEach(((mm, Tm) => {
                                const fm = (0, yh.t)(hm.slug, Tm);
                                for (const Am of mm.flatMap((mm => [...Mh(mm.markdown, 2), ...Mh(mm.markdown, 3)]))) {
                                  const mm = `${hm.id}#${(0,cm.q)(Am)}`;
                                  this.partPaths.has(mm) || this.partPaths.set(mm, fm)
                                }
                              }));
                              this.pages = fm.map((mm => {
                                let {
                                  page: Tm,
                                  groups: fm
                                } = mm;
                                return {
                                  page: Tm,
                                  path: (0, yh.q)(Tm.slug),
                                  markdown: `# ${Tm.title}\n\n${this.resolveLinks(Tm,uh(Tm))}\n`,
                                  parts: fm.map(((mm, hm) => this.renderPart(Tm, mm, hm, fm.length)))
                                }
                              }))
                            }
                            url(mm) {
                              return `${this.origin}${mm}`
                            }
                            getPage(mm) {
                              return this.pages.find((Tm => Tm.page.id === mm))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((mm => (mm.parts.length > 0 ? mm.parts : [{
                                path: mm.path,
                                label: "",
                                markdown: mm.markdown
                              }]).filter((mm => mm.markdown.length > yh.d))))
                            }
                            markdownUrl(mm, Tm) {
                              const fm = Tm && this.partPaths.get(`${mm.id}#${Tm}`) || (0, yh.q)(mm.slug);
                              return this.url(Tm ? `${fm}#${Tm}` : fm)
                            }
                            resolveLinks(mm, Tm) {
                              return Tm.replace(/\]\((#[^)]+)\)/g, ((Tm, fm) => {
                                var hm;
                                const Am = null !== (hm = Mm(fm)) && void 0 !== hm ? hm : this.samePageTarget(mm, fm);
                                return Am ? `](${this.markdownUrl(Am.page,Am.anchor)})` : Tm
                              }))
                            }
                            samePageTarget(mm, Tm) {
                              const fm = (0, cm.q)(Tm.slice(1));
                              return lm(mm, fm) ? {
                                page: mm,
                                anchor: fm
                              } : null
                            }
                            renderPart(mm, Tm, fm, hm) {
                              const Am = function(mm) {
                                  const Tm = mm.map((mm => mm.section)).filter(Boolean);
                                  if (0 === Tm.length) return "";
                                  const fm = Tm[0],
                                    hm = Tm.at(-1);
                                  return fm === hm ? fm : `${fm} to ${hm}`
                                }(Tm),
                                am = Tm.map((mm => mm.markdown)).join("\n\n"),
                                xm = Am ? `It covers ${Am}. ` : "",
                                wm = `Part ${fm+1} of ${hm} of [${mm.title}](${this.url((0,yh.q)(mm.slug))}). ${xm}[llms.txt](${this.url(yh.h)}) lists every part.`;
                              return {
                                path: (0, yh.t)(mm.slug, fm),
                                label: Am,
                                markdown: `# ${mm.title}, part ${fm+1} of ${hm}\n\n${wm}\n\n${this.resolveLinks(mm,am)}\n`
                              }
                            }
                            llmsTxt(mm) {
                              const Tm = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${Lh(yh.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const fm of ym) {
                                Tm.push("", `## ${fm.title}`, "");
                                for (const mm of fm.pageIds) {
                                  const fm = this.getPage(mm),
                                    {
                                      page: hm,
                                      parts: Am
                                    } = fm,
                                    am = `About ${Lh(fm.markdown.length)} tokens${Am.length>0?`, in ${Am.length} parts:`:"."}`;
                                  Tm.push(`- [${hm.title}](${this.url(fm.path)}): ${hm.summary} ${am}`), Am.forEach(((mm, fm) => {
                                    Tm.push(`  - [Part ${fm+1}${mm.label?`: ${mm.label}`:""}](${this.url(mm.path)})`)
                                  }))
                                }
                              }
                              return Tm.push("", "## Optional", "", `- [Every page in one file](${this.url(yh.e)}): About ${Lh(mm.length)} tokens, for a model with a large context window.`, ""), Tm.join("\n")
                            }
                            llmsFullTxt() {
                              return ym.flatMap((mm => mm.pageIds.map((mm => this.getPage(mm).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const mm = this.llmsFullTxt(),
                                Tm = this.llmsTxt(mm),
                                fm = new Map([
                                  [yh.l, Tm],
                                  [yh.h, Tm],
                                  [yh.e, mm]
                                ]);
                              for (const hm of this.pages) {
                                fm.set(hm.path, hm.markdown);
                                for (const mm of hm.parts) fm.set(mm.path, mm.markdown)
                              }
                              return fm
                            }
                          }

                          function Lh(mm) {
                            return `${Math.max(1,Math.round(mm/4e3))}K`
                          }
                          let vh = null;

                          function th() {
                            return vh ??= new Bh(Hm, Ch.b), vh
                          }
                          const Uh = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function dh(mm) {
                            return th().getPage(mm.id).parts.length > 0 ? `Read ${yh.i}, then the parts of the Bloxd Code API's ${mm.title} page it lists, so I can ask questions about it.` : `Read ${Ch.b}${(0,yh.q)(mm.slug)} so I can ask questions about it. ${yh.i} lists every page of the Bloxd Code API docs.`
                          }

                          function gh(mm) {
                            let {
                              page: Tm
                            } = mm;
                            const [fm, hm] = Vm();
                            return (0, Om.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, Om.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  hm(th().getPage(Tm.id).markdown)
                                },
                                children: [(0, Om.jsx)(qm, {
                                  name: !1 === (null === fm || void 0 === fm ? void 0 : fm.failed) ? "check" : "copy"
                                }), (0, Om.jsx)("span", {
                                  children: fm ? fm.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), Uh.map((mm => (0, Om.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${mm.url}${encodeURIComponent(dh(Tm))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, Om.jsx)(qm, {
                                  name: "external-link"
                                }), (0, Om.jsxs)("span", {
                                  children: ["Open in ", mm.name]
                                })]
                              }, mm.name)))]
                            })
                          }

                          function Wh(mm) {
                            return `#${[0,1,2].map((Tm=>Math.round(Math.min(255,Math.max(0,mm[Tm]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function Fh(mm) {
                            return [parseInt(mm.slice(1, 3), 16), parseInt(mm.slice(3, 5), 16), parseInt(mm.slice(5, 7), 16)]
                          }

                          function mA(mm) {
                            let {
                              label: Tm,
                              min: fm,
                              max: hm,
                              step: Am,
                              low: am,
                              high: xm,
                              onChange: wm
                            } = mm;
                            return (0, Om.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Om.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Om.jsx)("span", {
                                  children: Tm
                                }), (0, Om.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: am === xm ? am : `${am}\u2013${xm}`
                                })]
                              }), (0, Om.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, Om.jsx)("input", {
                                  type: "range",
                                  min: fm,
                                  max: hm,
                                  step: Am,
                                  value: Math.min(hm, am),
                                  "aria-label": `Minimum ${Tm.toLowerCase()}`,
                                  onChange: mm => {
                                    const Tm = Number(mm.target.value);
                                    wm(Tm, Math.max(Tm, xm))
                                  }
                                }), (0, Om.jsx)("input", {
                                  type: "range",
                                  min: fm,
                                  max: hm,
                                  step: Am,
                                  value: Math.min(hm, xm),
                                  "aria-label": `Maximum ${Tm.toLowerCase()}`,
                                  onChange: mm => {
                                    const Tm = Number(mm.target.value);
                                    wm(Math.min(Tm, am), Tm)
                                  }
                                })]
                              })]
                            })
                          }

                          function TA(mm) {
                            let {
                              label: Tm,
                              min: fm,
                              max: hm,
                              step: Am,
                              value: am,
                              onChange: xm,
                              format: wm = String
                            } = mm;
                            return (0, Om.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Om.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Om.jsx)("span", {
                                  children: Tm
                                }), (0, Om.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: wm(am)
                                })]
                              }), (0, Om.jsx)("input", {
                                type: "range",
                                min: fm,
                                max: hm,
                                step: Am,
                                value: Math.min(hm, Math.max(fm, am)),
                                "aria-label": Tm,
                                onChange: mm => {
                                  xm(Number(mm.target.value))
                                }
                              })]
                            })
                          }

                          function fA(mm) {
                            let {
                              opts: Tm,
                              onChange: fm
                            } = mm;
                            const hm = Tm.colorGradients;
                            if (!vf(hm)) return (0, Om.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Om.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, Om.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, Om.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: hm.map(((mm, Tm) => (0, Om.jsx)("input", {
                                  type: "color",
                                  value: Wh(mm.color),
                                  "aria-label": `Colour ${Tm+1}`,
                                  onChange: mm => {
                                    const Am = [...hm];
                                    Am[Tm] = {
                                      color: Fh(mm.target.value)
                                    }, fm(Am)
                                  }
                                }, Tm)))
                              })]
                            });
                            const Am = (mm, Tm) => {
                              const Am = [...hm];
                              Am[mm] = Tm, fm(Am)
                            };
                            return (0, Om.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Om.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Om.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, Om.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), hm.map(((mm, Tm) => {
                                var fm;
                                const hm = null !== (fm = mm.maxColor) && void 0 !== fm ? fm : mm.minColor;
                                return (0, Om.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, Om.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * mm.timeFraction), "%"]
                                  }), (0, Om.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${Wh(mm.minColor)}, ${Wh(hm)})`
                                    }
                                  }), (0, Om.jsx)("input", {
                                    type: "color",
                                    value: Wh(mm.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*mm.timeFraction)}%`,
                                    onChange: fm => {
                                      Am(Tm, {
                                        ...mm,
                                        minColor: [...Fh(fm.target.value), mm.minColor[3]]
                                      })
                                    }
                                  }), (0, Om.jsx)("input", {
                                    type: "color",
                                    value: Wh(hm),
                                    "aria-label": `Maximum colour at ${Math.round(100*mm.timeFraction)}%`,
                                    onChange: fm => {
                                      Am(Tm, {
                                        ...mm,
                                        maxColor: [...Fh(fm.target.value), hm[3]]
                                      })
                                    }
                                  })]
                                }, Tm)
                              }))]
                            })
                          }
                          const hA = [-.5, -.5, -.5],
                            AA = [.5, .5, .5],
                            aA = [0, 1, 2, 3, 4, 5, 6, 7].map((mm => [1 & mm ? AA[0] : hA[0], 2 & mm ? AA[1] : hA[1], 4 & mm ? AA[2] : hA[2]]));class xA {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(mm, Tm, fm, hm) {
                              const Am = Math.round(31 * Tm),
                                am = Math.round(31 * fm),
                                xm = Math.round(31 * hm),
                                wm = `${Am}|${am}|${xm}`;
                              let Dm = this.tints.get(mm);
                              (!Dm || Dm.size > 2e3) && (Dm = new Map, this.tints.set(mm, Dm));
                              let im = Dm.get(wm);
                              if (im) return im;
                              im = document.createElement("canvas"), im.width = mm.naturalWidth || 16, im.height = mm.naturalHeight || 16;
                              const Rm = im.getContext("2d");
                              return Rm ? (Rm.imageSmoothingEnabled = !1, Rm.drawImage(mm, 0, 0, im.width, im.height), Rm.globalCompositeOperation = "multiply", Rm.fillStyle = `rgb(${Am/31*255}, ${am/31*255}, ${xm/31*255})`, Rm.fillRect(0, 0, im.width, im.height), Rm.globalCompositeOperation = "destination-in", Rm.drawImage(mm, 0, 0, im.width, im.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Dm.set(wm, im), im
                            }
                          }

                          function wA(mm) {
                            let {
                              opts: Tm,
                              textureUrl: fm,
                              burst: Am,
                              paused: am
                            } = mm;
                            const xm = (0, hm.useRef)(null),
                              wm = (0, hm.useRef)(Tm);
                            wm.current = Tm;
                            const Dm = (0, hm.useRef)(am);
                            Dm.current = am;
                            const im = (0, hm.useRef)(null),
                              Rm = (0, hm.useRef)(null),
                              pm = (0, hm.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(mm) {
                                let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const fm = [-.5, -.5, -.5],
                                  hm = [.5, .5, .5];
                                let Am = .5;
                                for (let am = 0; am < 40; am++) {
                                  const am = Uf(mm, fm, hm, Tm),
                                    xm = Math.max(am.life / 30, .001);
                                  for (; Wf(am, mm.gravity, xm);) Am = Math.max(Am, Math.hypot(am.pos[0], am.pos[1], am.pos[2]) + am.size / 2)
                                }
                                return Am
                              }(Tm)))), [Tm]),
                              Em = (0, hm.useRef)(pm);
                            return Em.current = pm, (0, hm.useEffect)((() => {
                              if (im.current = null, !fm) return;
                              const mm = new Image;
                              let Tm = !1;
                              return mm.onload = () => {
                                Tm || (im.current = mm)
                              }, mm.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${fm}`)
                              }, mm.src = fm, () => {
                                Tm = !0
                              }
                            }), [fm]), (0, hm.useEffect)((() => {
                              var mm;
                              null === (mm = Rm.current) || void 0 === mm || mm.call(Rm)
                            }), [Tm, Am]), (0, hm.useEffect)((() => {
                              const mm = xm.current,
                                Tm = null === mm || void 0 === mm ? void 0 : mm.getContext("2d");
                              if (!mm || !Tm) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const fm = new xA;
                              let hm = [],
                                Am = 0,
                                am = -.7,
                                pm = Em.current,
                                om = performance.now(),
                                Om = 0,
                                Ym = !0,
                                qm = null;
                              const jm = () => {
                                const mm = wm.current,
                                  Tm = Math.min(400, Math.max(0, Math.ceil(mm.manualEmitCount)));
                                hm = [];
                                for (let fm = 0; fm < Tm; fm++) hm.push(Uf(mm, hA, AA, Math.random));
                                Am = 0
                              };
                              Rm.current = jm, jm();
                              const Vm = xm => {
                                Om = requestAnimationFrame(Vm);
                                const Rm = Math.min(.05, (xm - om) / 1e3);
                                if (om = xm, !Ym) return;
                                const Im = window.devicePixelRatio || 1,
                                  Km = Math.round(mm.clientWidth * Im),
                                  Qm = Math.round(mm.clientHeight * Im);
                                if (0 === Km || 0 === Qm) return;
                                mm.width === Km && mm.height === Qm || (mm.width = Km, mm.height = Qm);
                                const nm = wm.current;
                                null === qm && (am += .18 * Rm), pm += (Em.current - pm) * Math.min(1, 4 * Rm);
                                const Jm = .6 * Rm;
                                hm = hm.filter((mm => Wf(mm, nm.gravity, Jm))), 0 !== hm.length || Dm.current || (Am += Rm, Am > .6 && jm());
                                const cm = function(mm, Tm, fm, hm) {
                                  const Am = 3.2 * hm,
                                    am = .44 * Math.min(mm, Tm) * Am / hm,
                                    xm = Math.cos(fm),
                                    wm = Math.sin(fm),
                                    Dm = Math.cos(.42),
                                    im = Math.sin(.42);
                                  return (fm, hm, Rm) => {
                                    const pm = fm * wm + Rm * xm,
                                      Em = Am - (hm * im + pm * Dm);
                                    if (Em < .05) return null;
                                    const om = am / Em;
                                    return {
                                      x: mm / 2 + (fm * xm - Rm * wm) * om,
                                      y: Tm / 2 - (hm * Dm - pm * im) * om,
                                      scale: om,
                                      depth: Em
                                    }
                                  }
                                }(Km, Qm, am, pm);
                                ! function(mm, Tm, fm, hm, Am) {
                                  const am = mm.createLinearGradient(0, 0, 0, fm);
                                  am.addColorStop(0, "#23262d"), am.addColorStop(1, "#16181c"), mm.globalCompositeOperation = "source-over", mm.globalAlpha = 1, mm.fillStyle = am, mm.fillRect(0, 0, Tm, fm);
                                  const xm = (Tm, fm) => {
                                      const Am = hm(Tm[0], Tm[1], Tm[2]),
                                        am = hm(fm[0], fm[1], fm[2]);
                                      Am && am && (mm.beginPath(), mm.moveTo(Am.x, Am.y), mm.lineTo(am.x, am.y), mm.stroke())
                                    },
                                    wm = Math.ceil(Am) + 1,
                                    Dm = hA[1];
                                  mm.lineWidth = 1, mm.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let im = -wm; im <= wm; im++) xm([im + .5, Dm, .5 - wm], [im + .5, Dm, wm + .5]), xm([.5 - wm, Dm, im + .5], [wm + .5, Dm, im + .5]);
                                  mm.strokeStyle = "rgba(255, 255, 255, 0.28)", mm.setLineDash([4, 4]);
                                  for (const im of aA)
                                    for (const mm of aA) {
                                      const Tm = [0, 1, 2].filter((Tm => im[Tm] !== mm[Tm]));
                                      1 === Tm.length && im[Tm[0]] < mm[Tm[0]] && xm(im, mm)
                                    }
                                  mm.setLineDash([])
                                }(Tm, Km, Qm, cm, pm);
                                const zm = im.current,
                                  Zm = hm.map((mm => ({
                                    particle: mm,
                                    at: cm(mm.pos[0], mm.pos[1], mm.pos[2])
                                  }))).filter((mm => null !== mm.at)).sort(((mm, Tm) => Tm.at.depth - mm.at.depth));
                                Tm.imageSmoothingEnabled = !1;
                                for (const mm of function(mm) {
                                    switch (mm) {
                                      case lf.g.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case lf.g.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case lf.g.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case lf.g.MultiplyAdd:
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
                                  }(nm.blendMode)) {
                                  Tm.globalCompositeOperation = mm.operation;
                                  for (const {
                                      particle: hm,
                                      at: Am
                                    }
                                    of Zm) {
                                    const [am, xm, wm, Dm] = gf(hm), im = Math.max(1, hm.size * Am.scale);
                                    Tm.globalAlpha = mm.usesAlpha ? Math.min(1, Math.max(0, Dm)) : 1, zm ? Tm.drawImage(fm.get(zm, am, xm, wm), Am.x - im / 2, Am.y - im / 2, im, im) : (Tm.fillStyle = `rgb(${255*am}, ${255*xm}, ${255*wm})`, Tm.fillRect(Am.x - im / 2, Am.y - im / 2, im, im))
                                  }
                                }
                                Tm.globalCompositeOperation = "source-over", Tm.globalAlpha = 1
                              };
                              Om = requestAnimationFrame(Vm);
                              const Im = new IntersectionObserver((mm => {
                                let [Tm] = mm;
                                Ym = Tm.isIntersecting
                              }));
                              Im.observe(mm);
                              const Km = Tm => {
                                  qm = Tm.clientX, mm.setPointerCapture(Tm.pointerId)
                                },
                                Qm = mm => {
                                  null !== qm && (am += .01 * (mm.clientX - qm), qm = mm.clientX)
                                },
                                nm = () => {
                                  qm = null
                                };
                              return mm.addEventListener("pointerdown", Km), mm.addEventListener("pointermove", Qm), mm.addEventListener("pointerup", nm), mm.addEventListener("pointercancel", nm), () => {
                                cancelAnimationFrame(Om), Im.disconnect(), Rm.current = null, mm.removeEventListener("pointerdown", Km), mm.removeEventListener("pointermove", Qm), mm.removeEventListener("pointerup", nm), mm.removeEventListener("pointercancel", nm)
                              }
                            }), []), (0, Om.jsx)("canvas", {
                              ref: xm,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${Tm.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const DA = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            iA = [{
                              mode: lf.g.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: lf.g.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: lf.g.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: lf.g.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: lf.g.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            RA = (0, hm.forwardRef)((function(mm, Tm) {
                              var fm, Am;
                              let {
                                textures: xm
                              } = mm;
                              const wm = nh(),
                                Dm = (0, hm.useRef)(null),
                                [im, Rm] = (0, hm.useState)(uf),
                                [pm, Em] = (0, hm.useState)("example"),
                                [om, Ym] = (0, hm.useState)(0),
                                [jm, Vm] = (0, hm.useState)(!1),
                                Km = mm => {
                                  const Tm = "example" === mm ? uf : Mf(mm);
                                  Tm && (Rm(Tm), Em(mm))
                                };
                              (0, hm.useImperativeHandle)(Tm, (() => ({
                                preview: mm => {
                                  var Tm;
                                  Km(mm), null === (Tm = Dm.current) || void 0 === Tm || Tm.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Qm = mm => {
                                  Rm({
                                    ...im,
                                    ...mm
                                  }), Em(null)
                                },
                                nm = function(mm, Tm) {
                                  if (null !== Tm) return `${fh}    presetId: "${Tm}",\n${hh}\n})`;
                                  const fm = mm.velocityGradients.map((mm => `        {\n            timeFraction: ${Ff(mm.timeFraction)},\n            factor: ${Ff(mm.factor)},\n            factor2: ${Ff(mm.factor2)},\n        },`)),
                                    hm = [`    dir1: ${mh(mm.dir1)},`, `    dir2: ${mh(mm.dir2)},`, hh, `    texture: "${mm.texture}",`, `    minLifeTime: ${Ff(mm.minLifeTime)},`, `    maxLifeTime: ${Ff(mm.maxLifeTime)},`, `    minEmitPower: ${Ff(mm.minEmitPower)},`, `    maxEmitPower: ${Ff(mm.maxEmitPower)},`, `    minSize: ${Ff(mm.minSize)},`, `    maxSize: ${Ff(mm.maxSize)},`, `    manualEmitCount: ${Ff(mm.manualEmitCount)},`, `    gravity: ${mh(mm.gravity)},`, `    colorGradients: ${Th(mm.colorGradients,"    ")},`, `    velocityGradients: ${fm.length>0?`[\n${fm.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Ff(mm.blendMode)},`];
                                  return void 0 !== mm.hideDist && hm.push(`    hideDist: ${Ff(mm.hideDist)},`), `${fh}${hm.join("\n")}\n})`
                                }(im, null === pm || "example" === pm ? null : pm),
                                cm = xm.includes(im.texture) ? xm : [...xm, im.texture];
                              return (0, Om.jsxs)("section", {
                                ref: Dm,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, Om.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, Om.jsxs)("div", {
                                    children: [(0, Om.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, Om.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, Om.jsx)(Im, {
                                    text: nm,
                                    label: "Copy code"
                                  })]
                                }), (0, Om.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, Om.jsx)("button", {
                                    type: "button",
                                    className: am()("DocsVariantChip", {
                                      Active: "example" === pm
                                    }),
                                    onClick: () => {
                                      Km("example")
                                    },
                                    children: "Example"
                                  }), DA.filter((mm => null !== Mf(mm))).map((mm => (0, Om.jsx)("button", {
                                    type: "button",
                                    className: am()("DocsVariantChip", {
                                      Active: pm === mm
                                    }),
                                    onClick: () => {
                                      Km(mm)
                                    },
                                    children: mm
                                  }, mm))), (0, Om.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== pm && void 0 !== pm ? pm : "custom",
                                    "aria-label": "Preset",
                                    onChange: mm => {
                                      Km(mm.target.value)
                                    },
                                    children: [(0, Om.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === pm && (0, Om.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), sf.e.map((mm => (0, Om.jsx)("option", {
                                      value: mm,
                                      children: mm
                                    }, mm)))]
                                  })]
                                }), (0, Om.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, Om.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, Om.jsx)(wA, {
                                      opts: im,
                                      textureUrl: null !== (fm = null === wm || void 0 === wm ? void 0 : wm.getParticleTextureUrl(im.texture)) && void 0 !== fm ? fm : null,
                                      burst: om,
                                      paused: jm
                                    }), (0, Om.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, Om.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Ym(om + 1)
                                        },
                                        children: [(0, Om.jsx)(qm, {
                                          name: "replay"
                                        }), (0, Om.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, Om.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": jm,
                                        onClick: () => {
                                          Vm(!jm)
                                        },
                                        children: [(0, Om.jsx)(qm, {
                                          name: jm ? "play" : "pause"
                                        }), (0, Om.jsx)("span", {
                                          children: jm ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, Om.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, Om.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Om.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, Om.jsx)("span", {
                                          children: "Texture"
                                        }), (0, Om.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: im.texture
                                        })]
                                      }), (0, Om.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: cm.map((mm => {
                                          var Tm;
                                          const fm = null !== (Tm = null === wm || void 0 === wm ? void 0 : wm.getParticleTextureUrl(mm)) && void 0 !== Tm ? Tm : null;
                                          return (0, Om.jsx)("button", {
                                            type: "button",
                                            className: am()("DocsParticleTexture", {
                                              Active: im.texture === mm
                                            }),
                                            title: mm,
                                            "aria-label": mm,
                                            "aria-pressed": im.texture === mm,
                                            onClick: () => {
                                              Qm({
                                                texture: mm
                                              })
                                            },
                                            children: fm ? (0, Om.jsx)("img", {
                                              src: fm,
                                              alt: ""
                                            }) : (0, Om.jsx)(qm, {
                                              name: "image"
                                            })
                                          }, mm)
                                        }))
                                      })]
                                    }), (0, Om.jsx)(TA, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: im.manualEmitCount,
                                      onChange: mm => {
                                        Qm({
                                          manualEmitCount: mm
                                        })
                                      }
                                    }), (0, Om.jsx)(mA, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: im.minLifeTime,
                                      high: im.maxLifeTime,
                                      onChange: (mm, Tm) => {
                                        Qm({
                                          minLifeTime: mm,
                                          maxLifeTime: Tm
                                        })
                                      }
                                    }), (0, Om.jsx)(mA, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: im.minEmitPower,
                                      high: im.maxEmitPower,
                                      onChange: (mm, Tm) => {
                                        Qm({
                                          minEmitPower: mm,
                                          maxEmitPower: Tm
                                        })
                                      }
                                    }), (0, Om.jsx)(mA, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: im.minSize,
                                      high: im.maxSize,
                                      onChange: (mm, Tm) => {
                                        Qm({
                                          minSize: mm,
                                          maxSize: Tm
                                        })
                                      }
                                    }), (0, Om.jsx)(TA, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Am = im.gravity[1]) && void 0 !== Am ? Am : 0,
                                      onChange: mm => {
                                        var Tm, fm;
                                        Qm({
                                          gravity: [null !== (Tm = im.gravity[0]) && void 0 !== Tm ? Tm : 0, mm, null !== (fm = im.gravity[2]) && void 0 !== fm ? fm : 0]
                                        })
                                      }
                                    }), (0, Om.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Om.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, Om.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, Om.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: im.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: mm => {
                                          Qm({
                                            blendMode: Number(mm.target.value)
                                          })
                                        },
                                        children: iA.map((mm => {
                                          let {
                                            mode: Tm,
                                            label: fm
                                          } = mm;
                                          return (0, Om.jsx)("option", {
                                            value: Tm,
                                            children: fm
                                          }, Tm)
                                        }))
                                      })]
                                    }), (0, Om.jsx)(fA, {
                                      opts: im,
                                      onChange: mm => {
                                        Qm({
                                          colorGradients: mm
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, Om.jsx)(Jm, {
                                  code: nm,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var pA = fm(4405),
                            EA = fm(1884);

                          function oA(mm, Tm) {
                            return mm ? pA.e.includes(Tm) ? mm.getIngameIconUrl(Tm) : mm.getItemIconUrl(Tm) : null
                          }

                          function OA(mm) {
                            var Tm, fm, hm;
                            let {
                              part: Am,
                              assets: xm
                            } = mm;
                            const wm = oA(xm, Am.icon),
                              Dm = null !== (Tm = null === (fm = Am.style) || void 0 === fm ? void 0 : fm.fontSize) && void 0 !== Tm ? Tm : "1.8em",
                              im = (0, CT.Sb)(Am.style);
                            return (0, Om.jsxs)("span", {
                              className: am()("DocsBloxdTextIcon", {
                                Missing: !wm
                              }),
                              style: {
                                width: Dm,
                                height: Dm,
                                opacity: null === (hm = Am.style) || void 0 === hm ? void 0 : hm.opacity
                              },
                              title: wm ? void 0 : `No Bloxd icon, item or block is called "${Am.icon}"`,
                              children: [wm && im && (0, Om.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: im,
                                  maskImage: `url("${wm}")`,
                                  WebkitMaskImage: `url("${wm}")`
                                }
                              }), wm ? (0, Om.jsx)("img", {
                                src: wm,
                                alt: "",
                                className: am()({
                                  Tinted: im
                                })
                              }) : (0, Om.jsx)(qm, {
                                name: "image"
                              })]
                            })
                          }

                          function YA(mm) {
                            let {
                              parts: Tm,
                              className: fm
                            } = mm;
                            const hm = nh(),
                              Am = [];
                            let xm = [];
                            const wm = mm => {
                              xm.length > 0 && (Am.push((0, Om.jsx)(EA.b, {
                                text: xm
                              }, `run-${mm}`)), xm = [])
                            };
                            return Tm.forEach(((mm, Tm) => {
                              "icon" !== uT(mm) || sT(mm.icon) ? xm.push(mm) : (wm(Tm), Am.push((0, Om.jsx)(OA, {
                                part: mm,
                                assets: hm
                              }, `icon-${Tm}`)))
                            })), wm(Tm.length), (0, Om.jsx)("div", {
                              className: am()("DocsStyledTextPreview", fm),
                              children: Am
                            })
                          }
                          const qA = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let jA = null;

                          function VA(mm) {
                            if (jA ??= document.createElement("canvas").getContext("2d"), !jA) return "#000000";
                            jA.fillStyle = "#000000", jA.fillStyle = mm;
                            const Tm = jA.fillStyle;
                            return Tm.startsWith("#") ? Tm : "#000000"
                          }

                          function IA(mm) {
                            let {
                              value: Tm,
                              label: fm,
                              onChange: hm
                            } = mm;
                            return (0, Om.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, Om.jsx)("input", {
                                type: "color",
                                value: VA(Tm),
                                "aria-label": `${fm} picker`,
                                onChange: mm => {
                                  hm(mm.target.value)
                                }
                              }), (0, Om.jsx)("input", {
                                type: "text",
                                value: Tm,
                                placeholder: "#ffb914 or gold",
                                "aria-label": fm,
                                spellCheck: !1,
                                onChange: mm => {
                                  hm(mm.target.value)
                                }
                              })]
                            })
                          }

                          function KA(mm) {
                            let {
                              value: Tm,
                              fontAwesomeIcons: fm,
                              onChange: Am
                            } = mm;
                            const xm = nh(),
                              [wm, Dm] = (0, hm.useState)(sT(Tm) ? "fontAwesome" : "bloxd"),
                              [im, Rm] = (0, hm.useState)(""),
                              pm = im.trim().toLowerCase(),
                              Em = "bloxd" === wm ? pA.e : fm,
                              om = pm ? Em.filter((mm => mm.toLowerCase().includes(pm))) : Em;
                            return (0, Om.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, Om.jsx)("input", {
                                type: "text",
                                value: Tm,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: mm => {
                                  Am(mm.target.value)
                                }
                              }), (0, Om.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, Om.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((mm => (0, Om.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": wm === mm,
                                    className: am()("DocsVariantChip", {
                                      Active: wm === mm
                                    }),
                                    onClick: () => {
                                      Dm(mm)
                                    },
                                    children: "bloxd" === mm ? `Bloxd icons (${pA.e.length})` : `Font Awesome (${fm.length})`
                                  }, mm))), (0, Om.jsx)("input", {
                                    type: "search",
                                    value: im,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: mm => {
                                      Rm(mm.target.value)
                                    }
                                  })
                                ]
                              }), (0, Om.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [om.map((mm => {
                                  const fm = "bloxd" === wm ? oA(xm, mm) : null;
                                  return (0, Om.jsx)("button", {
                                    type: "button",
                                    title: mm,
                                    "aria-label": mm,
                                    "aria-pressed": mm === Tm,
                                    className: am()("DocsIconPickerOption", {
                                      Active: mm === Tm
                                    }),
                                    onClick: () => {
                                      Am(mm)
                                    },
                                    children: "fontAwesome" === wm ? (0, Om.jsx)(nf.c, {
                                      name: mm
                                    }) : fm ? (0, Om.jsx)("img", {
                                      src: fm,
                                      alt: ""
                                    }) : (0, Om.jsx)(qm, {
                                      name: "image"
                                    })
                                  }, mm)
                                })), 0 === om.length && (0, Om.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", im, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function QA(mm) {
                            let {
                              property: Tm,
                              value: fm,
                              fontAwesomeIcons: hm,
                              onChange: Am
                            } = mm;
                            const {
                              field: am,
                              label: xm
                            } = Tm, wm = mm => "" !== mm || Tm.isRequired ? mm : void 0;
                            switch (am.kind) {
                              case "text":
                                return am.multiline ? (0, Om.jsx)("textarea", {
                                  value: String(null !== fm && void 0 !== fm ? fm : ""),
                                  rows: 2,
                                  "aria-label": xm,
                                  onChange: mm => {
                                    Am(mm.target.value)
                                  }
                                }) : (0, Om.jsx)("input", {
                                  type: "text",
                                  value: String(null !== fm && void 0 !== fm ? fm : ""),
                                  "aria-label": xm,
                                  onChange: mm => {
                                    Am(wm(mm.target.value))
                                  }
                                });
                              case "size":
                                return (0, Om.jsx)("input", {
                                  type: "text",
                                  value: String(null !== fm && void 0 !== fm ? fm : ""),
                                  placeholder: Tm.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": xm,
                                  spellCheck: !1,
                                  onChange: mm => {
                                    Am(wm(mm.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, Om.jsx)(IA, {
                                  value: String(null !== fm && void 0 !== fm ? fm : ""),
                                  label: xm,
                                  onChange: mm => {
                                    Am(wm(mm))
                                  }
                                });
                              case "colours": {
                                const mm = Array.isArray(fm) ? fm : [],
                                  Tm = mm => {
                                    Am(mm.length > 0 ? mm : void 0)
                                  };
                                return (0, Om.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [mm.map(((fm, hm) => (0, Om.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, Om.jsx)(IA, {
                                      value: fm,
                                      label: `${xm} ${hm+1}`,
                                      onChange: fm => {
                                        Tm(mm.map(((mm, Tm) => Tm === hm ? fm : mm)))
                                      }
                                    }), (0, Om.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${hm+1}`,
                                      onClick: () => {
                                        Tm(mm.filter(((mm, Tm) => Tm !== hm)))
                                      },
                                      children: (0, Om.jsx)(qm, {
                                        name: "cross"
                                      })
                                    })]
                                  }, hm))), (0, Om.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var fm;
                                      Tm([...mm, null !== (fm = mm.at(-1)) && void 0 !== fm ? fm : "#ffffff"])
                                    },
                                    children: [(0, Om.jsx)(qm, {
                                      name: "plus"
                                    }), 0 === mm.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Dm;
                                const mm = "number" === typeof fm ? fm : Number(null !== (Dm = Tm.defaultText) && void 0 !== Dm ? Dm : 0);
                                return (0, Om.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, Om.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: mm,
                                    "aria-label": xm,
                                    onChange: mm => {
                                      Am(Number(mm.target.value))
                                    }
                                  }), (0, Om.jsx)("output", {
                                    children: mm.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, Om.jsxs)("select", {
                                  value: String(null !== fm && void 0 !== fm ? fm : ""),
                                  "aria-label": xm,
                                  onChange: mm => {
                                    Am(wm(mm.target.value))
                                  },
                                  children: [!Tm.isRequired && (0, Om.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", Tm.defaultText, ")"]
                                  }), am.options.map((mm => (0, Om.jsx)("option", {
                                    value: mm,
                                    children: mm
                                  }, mm)))]
                                });
                              case "icon":
                                return (0, Om.jsx)(KA, {
                                  value: String(null !== fm && void 0 !== fm ? fm : ""),
                                  fontAwesomeIcons: hm,
                                  onChange: Am
                                })
                            }
                          }

                          function nA(mm) {
                            let Tm;
                            try {
                              Tm = JSON.parse(mm)
                            } catch (fm) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${fm.message}`
                              }
                            }
                            return hf(Tm) ? {
                              part: Tm,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function JA(mm) {
                            let {
                              parts: Tm,
                              index: fm,
                              fontAwesomeIcons: Am,
                              onChange: am,
                              oN: xm,
                              onClose: wm
                            } = mm;
                            const Dm = (0, hm.useContext)(YT),
                              Rm = (0, hm.useRef)(null),
                              pm = Tm[fm],
                              Em = uT(pm),
                              [om, Ym] = (0, hm.useState)((() => JSON.stringify(pm, null, 2))),
                              jm = (0, hm.useMemo)((() => "other" === Em ? nA(om).error : null), [Em, om]);
                            (0, hm.useEffect)((() => {
                              var mm;
                              null === (mm = Rm.current) || void 0 === mm || mm.focus()
                            }), []);
                            const Vm = (0, Om.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: mm => {
                                mm.target === mm.currentTarget && wm()
                              },
                              children: (0, Om.jsxs)("div", {
                                ref: Rm,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${fm+1}: ${lT[Em]}`,
                                tabIndex: -1,
                                onKeyDown: mm => {
                                  "Escape" === mm.key ? (mm.stopPropagation(), wm()) : "Tab" === mm.key && Rm.current && function(mm, Tm) {
                                    const fm = Array.from(mm.querySelectorAll(ST)),
                                      hm = fm[0],
                                      Am = fm.at(-1);
                                    if (!hm || !Am) return;
                                    const am = document.activeElement;
                                    !Tm.shiftKey || am !== hm && am !== mm ? Tm.shiftKey || am !== Am || (Tm.preventDefault(), hm.focus()) : (Tm.preventDefault(), Am.focus())
                                  }(Rm.current, mm)
                                },
                                children: [(0, Om.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, Om.jsxs)("div", {
                                    children: [(0, Om.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", fm + 1]
                                    }), (0, Om.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: lT[Em]
                                    })]
                                  }), (0, Om.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: wm,
                                    children: (0, Om.jsx)(qm, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, Om.jsx)(YA, {
                                  parts: Tm,
                                  className: "DocsTextDialogPreview"
                                }), (0, Om.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Em ? (0, Om.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, Om.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, Om.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: om,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: mm => {
                                        Ym(mm.target.value);
                                        const Tm = nA(mm.target.value);
                                        null !== Tm.part && am(Tm.part)
                                      }
                                    }), jm && (0, Om.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: jm
                                    })]
                                  }) : LT[Em].map((mm => {
                                    const Tm = tT(pm, mm.path),
                                      fm = mm.isRequired ? JSON.stringify(dT(pm, mm.path)) === JSON.stringify(pm) : void 0 === Tm;
                                    return (0, Om.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, Om.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, Om.jsx)("span", {
                                          children: mm.label
                                        }), (0, Om.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: fm,
                                          "aria-label": `Reset ${mm.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            am(dT(pm, mm.path))
                                          },
                                          children: [(0, Om.jsx)(qm, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, Om.jsx)(QA, {
                                        property: mm,
                                        value: Tm,
                                        fontAwesomeIcons: Am,
                                        onChange: Tm => {
                                          am(UT(pm, mm.path, Tm))
                                        }
                                      }), !mm.isRequired && (0, Om.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", mm.defaultText]
                                      })]
                                    }, mm.path.join("."))
                                  }))
                                }), (0, Om.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, Om.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: xm,
                                    children: [(0, Om.jsx)(qm, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, Om.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: wm,
                                    children: "Done"
                                  })]
                                }), (0, Om.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: qA.map((mm => (0, Om.jsx)("option", {
                                    value: mm
                                  }, mm)))
                                })]
                              })
                            });
                            return Dm ? (0, im.createPortal)(Vm, Dm) : Vm
                          }
                          const cA = [{
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
                            zA = Object.keys(MT);

                          function ZA(mm) {
                            let {
                              fontAwesomeIcons: Tm
                            } = mm;
                            const [fm, Am] = (0, hm.useState)(cA[0].parts), [xm, wm] = (0, hm.useState)((() => mf(cA[0].parts))), [Dm, im] = (0, hm.useState)(null), [Rm, pm] = (0, hm.useState)(!1), [Em, om] = (0, hm.useState)(null), [Ym, jm] = (0, hm.useState)(!1), [Vm, Im] = (0, hm.useState)(null), Km = (0, hm.useRef)(null), Qm = mf(fm);
                            (0, hm.useLayoutEffect)((() => {
                              var mm;
                              if (!Vm) return;
                              const Tm = mm => {
                                  var Tm;
                                  return null === (Tm = Km.current) || void 0 === Tm ? void 0 : Tm.querySelector(`[data-focus-key="${mm}"]`)
                                },
                                fm = Tm(Vm.key);
                              null === (mm = fm && !fm.disabled ? fm : Tm(Vm.fallback)) || void 0 === mm || mm.focus(), Im(null)
                            }), [Vm]);
                            const nm = mm => {
                                Am(mm), wm(mf(mm)), im(null)
                              },
                              cm = mm => {
                                nm(fm.filter(((Tm, fm) => fm !== mm))), Im({
                                  key: `edit-${Math.min(mm,fm.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              zm = (mm, Tm) => {
                                const hm = [...fm],
                                  [Am] = hm.splice(mm, 1);
                                hm.splice(mm + Tm, 0, Am), nm(hm);
                                Im({
                                  key: `${Tm<0?"up":"down"}-${mm+Tm}`,
                                  fallback: `edit-${mm+Tm}`
                                })
                              };
                            return (0, Om.jsxs)("section", {
                              ref: Km,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, Om.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, Om.jsxs)("div", {
                                  children: [(0, Om.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, Om.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, Om.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: cA.map((mm => (0, Om.jsx)("button", {
                                  type: "button",
                                  className: am()("DocsVariantChip", {
                                    Active: Qm === mf(mm.parts)
                                  }),
                                  onClick: () => {
                                    nm(mm.parts)
                                  },
                                  children: mm.label
                                }, mm.label)))
                              }), (0, Om.jsx)(YA, {
                                parts: fm,
                                className: "DocsTextEditorPreview"
                              }), (0, Om.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, Om.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Om.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, Om.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [fm.map(((mm, Tm) => {
                                      const hm = uT(mm);
                                      return (0, Om.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, Om.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${Tm}`,
                                          "aria-label": `Edit part ${Tm+1}, ${lT[hm]}`,
                                          onClick: () => {
                                            om(Tm)
                                          },
                                          children: [(0, Om.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: lT[hm]
                                          }), (0, Om.jsx)(YA, {
                                            parts: [mm],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== hm && (0, Om.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: gT(mm)
                                          })]
                                        }), (0, Om.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, Om.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Tm+1} up`,
                                            "data-focus-key": `up-${Tm}`,
                                            disabled: 0 === Tm,
                                            onClick: () => {
                                              zm(Tm, -1)
                                            },
                                            children: (0, Om.jsx)(qm, {
                                              name: "chevron-up"
                                            })
                                          }), (0, Om.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Tm+1} down`,
                                            "data-focus-key": `down-${Tm}`,
                                            disabled: Tm === fm.length - 1,
                                            onClick: () => {
                                              zm(Tm, 1)
                                            },
                                            children: (0, Om.jsx)(qm, {
                                              name: "chevron-down"
                                            })
                                          }), (0, Om.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${Tm+1}`,
                                            onClick: () => {
                                              cm(Tm)
                                            },
                                            children: (0, Om.jsx)(qm, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, Tm)
                                    })), 0 === fm.length && (0, Om.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, Om.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: mm => {
                                      "Escape" === mm.key && Ym && (mm.stopPropagation(), jm(!1), Im({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, Om.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Ym,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        jm(!Ym)
                                      },
                                      children: [(0, Om.jsx)(qm, {
                                        name: "plus"
                                      }), "Add a part", (0, Om.jsx)(qm, {
                                        name: Ym ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Ym && (0, Om.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: zA.map((mm => (0, Om.jsx)("li", {
                                        children: (0, Om.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (mm => {
                                              nm([...fm, MT[mm]]), jm(!1), om(fm.length)
                                            })(mm)
                                          },
                                          children: lT[mm]
                                        })
                                      }, mm)))
                                    })]
                                  })]
                                }), (0, Om.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Om.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, Om.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Rm,
                                      onClick: () => {
                                        pm(!Rm)
                                      },
                                      children: [(0, Om.jsx)(qm, {
                                        name: Rm ? "check" : "pencil"
                                      }), Rm ? "Done" : "Edit"]
                                    })]
                                  }), Rm ? (0, Om.jsxs)(Om.Fragment, {
                                    children: [(0, Om.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: xm,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: mm => {
                                        wm(mm.target.value);
                                        const Tm = Af(mm.target.value);
                                        im(Tm.error), Tm.parts && Am(Tm.parts)
                                      }
                                    }), Dm && (0, Om.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Dm
                                    })]
                                  }) : (0, Om.jsx)(Jm, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Qm})`
                                  })]
                                })]
                              }), null !== Em && Em < fm.length && (0, Om.jsx)(JA, {
                                parts: fm,
                                index: Em,
                                fontAwesomeIcons: Tm,
                                onChange: mm => {
                                  ((mm, Tm) => {
                                    nm(fm.map(((fm, hm) => hm === mm ? Tm : fm)))
                                  })(Em, mm)
                                },
                                oN: () => {
                                  cm(Em), om(null)
                                },
                                onClose: () => {
                                  om(null), Im({
                                    key: `edit-${Em}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var kA = fm(4789),
                            bA = fm(4773),
                            SA = fm(4784),
                            eA = fm(4796);
                          const NA = 40,
                            GA = 800,
                            XA = 150,
                            PA = 8e3,
                            HA = 2e3;

                          function yA(mm, Tm) {
                            return 12 * Math.log2(Tm / mm)
                          }

                          function CA(mm, Tm) {
                            return Math.round(mm * 2 ** (Tm / 12) * 10) / 10
                          }

                          function rA(mm) {
                            return `${mm} ms`
                          }

                          function sA(mm) {
                            return `${mm} st`
                          }
                          const lA = [{
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

                          function MA(mm) {
                            let {
                              synth: Tm,
                              onChange: fm
                            } = mm;
                            const hm = (0, kA.g)(Tm);
                            return (0, Om.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, Om.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Om.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, Om.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, Om.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, Om.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, Om.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: kA.e.map((mm => (0, Om.jsx)("button", {
                                      type: "button",
                                      className: am()("DocsVariantChip", {
                                        Active: Tm.waveform === mm
                                      }),
                                      "aria-pressed": Tm.waveform === mm,
                                      onClick: () => {
                                        fm({
                                          waveform: mm
                                        })
                                      },
                                      children: mm
                                    }, mm)))
                                  })]
                                }), (0, Om.jsx)(TA, {
                                  label: "Pitch",
                                  min: 0,
                                  max: yA(NA, GA),
                                  step: .1,
                                  value: yA(NA, Tm.pitchHz),
                                  format: () => `${Tm.pitchHz} Hz`,
                                  onChange: mm => {
                                    fm({
                                      pitchHz: CA(NA, mm)
                                    })
                                  }
                                }), (0, Om.jsx)(TA, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: Tm.syllableMs,
                                  format: rA,
                                  onChange: mm => {
                                    fm({
                                      syllableMs: mm
                                    })
                                  }
                                }), (0, Om.jsx)(TA, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: Tm.volume,
                                  onChange: mm => {
                                    fm({
                                      volume: mm
                                    })
                                  }
                                })]
                              }), (0, Om.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Om.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, Om.jsx)(TA, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: Tm.durationMs,
                                  format: rA,
                                  onChange: mm => {
                                    fm({
                                      durationMs: mm
                                    })
                                  }
                                }), (0, Om.jsx)(TA, {
                                  label: "Fade in",
                                  min: 0,
                                  max: hm.durationMs,
                                  step: 1,
                                  value: hm.attackMs,
                                  format: rA,
                                  onChange: mm => {
                                    fm({
                                      attackMs: mm
                                    })
                                  }
                                }), (0, Om.jsx)(TA, {
                                  label: "Fade out",
                                  min: 0,
                                  max: hm.durationMs - hm.attackMs,
                                  step: 1,
                                  value: hm.releaseMs,
                                  format: rA,
                                  onChange: mm => {
                                    fm({
                                      releaseMs: mm
                                    })
                                  }
                                }), (0, Om.jsx)(TA, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: Tm.glideSemitones,
                                  format: sA,
                                  onChange: mm => {
                                    fm({
                                      glideSemitones: mm
                                    })
                                  }
                                }), (0, Om.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, Om.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== Tm.lowpassHz,
                                    onChange: mm => {
                                      fm({
                                        lowpassHz: mm.target.checked ? HA : null
                                      })
                                    }
                                  }), (0, Om.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== Tm.lowpassHz && (0, Om.jsx)(TA, {
                                  label: "Filter",
                                  min: 0,
                                  max: yA(XA, PA),
                                  step: .1,
                                  value: yA(XA, Tm.lowpassHz),
                                  format: () => `${Tm.lowpassHz} Hz`,
                                  onChange: mm => {
                                    fm({
                                      lowpassHz: CA(XA, mm)
                                    })
                                  }
                                })]
                              }), (0, Om.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Om.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), lA.map((mm => {
                                  let {
                                    key: hm,
                                    label: Am,
                                    max: am
                                  } = mm;
                                  return (0, Om.jsx)(TA, {
                                    label: Am,
                                    min: 0,
                                    max: am,
                                    step: .1,
                                    value: Tm.intonation[hm],
                                    format: sA,
                                    onChange: mm => {
                                      fm({
                                        intonation: {
                                          ...Tm.intonation,
                                          [hm]: mm
                                        }
                                      })
                                    }
                                  }, hm)
                                }))]
                              })]
                            })
                          }
                          const uA = Object.keys(kA.f),
                            BA = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function LA(mm) {
                            var Tm;
                            const fm = JSON.stringify((0, kA.g)(mm));
                            return null !== (Tm = uA.find((mm => JSON.stringify((0, kA.g)(kA.f[mm])) === fm))) && void 0 !== Tm ? Tm : null
                          }

                          function vA(mm) {
                            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof mm || null === mm) return JSON.stringify(mm);
                            return `{\n${Object.entries(mm).map((mm=>{let[fm,hm]=mm;return`${Tm}    ${fm}: ${vA(hm,`${Tm}    `)},`})).join("\n")}\n${Tm}}`
                          }

                          function tA(mm, Tm, fm) {
                            const hm = LA(mm),
                              Am = [`    line: ${JSON.stringify(Tm)},`];
                            return fm && Am.push(`    speakerName: ${JSON.stringify(fm)},`), Am.push("    voice,"), `const voice = ${hm?JSON.stringify(hm):vA((0,kA.g)(mm))}\n\napi.setClientOption(playerId, "dialogue", {\n${Am.join("\n")}\n})`
                          }
                          const UA = 400,
                            dA = 90;
                          let gA = null;

                          function WA(mm, Tm, fm) {
                            return gA ??= new AudioContext, gA.resume(), (0, eA.c)(gA, gA.destination, mm, Tm, fm, (() => {}))
                          }

                          function FA() {
                            const [mm, Tm] = (0, hm.useState)(kA.f.regular), [fm, Am] = (0, hm.useState)(BA[0]), [xm, wm] = (0, hm.useState)("Innkeeper"), [Dm, im] = (0, hm.useState)(0), Rm = oh((mm => mm.volume)), pm = (0, hm.useRef)(null), Em = (0, hm.useRef)(0), om = (0, hm.useRef)(0), Ym = () => {
                              var mm;
                              null === (mm = pm.current) || void 0 === mm || mm.call(pm), pm.current = null
                            };
                            (0, hm.useEffect)((() => () => {
                              var mm;
                              null === (mm = pm.current) || void 0 === mm || mm.call(pm), window.clearTimeout(Em.current)
                            }), []);
                            const jm = (0, hm.useMemo)((() => ({
                                line: fm,
                                speakerName: xm || void 0,
                                voice: mm
                              })), [fm, xm, mm]),
                              Vm = (0, hm.useRef)(jm);
                            Vm.current = jm;
                            const Km = LA(mm),
                              Qm = mm => {
                                window.clearTimeout(Em.current), Ym();
                                const {
                                  plan: Tm,
                                  synth: fm
                                } = (0, SA.f)(mm);
                                fm && (pm.current = WA(fm, Tm.blips, Rm)), im((mm => mm + 1))
                              },
                              nm = tA(mm, fm, xm);
                            return (0, Om.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, Om.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, Om.jsxs)("div", {
                                  children: [(0, Om.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, Om.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, Om.jsx)(Im, {
                                  text: nm,
                                  label: "Copy code"
                                })]
                              }), (0, Om.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [uA.map((mm => (0, Om.jsx)("button", {
                                  type: "button",
                                  className: am()("DocsVariantChip", {
                                    Active: Km === mm
                                  }),
                                  "aria-pressed": Km === mm,
                                  onClick: () => {
                                    (mm => {
                                      const fm = kA.f[mm];
                                      Tm(fm), Qm({
                                        ...jm,
                                        voice: fm
                                      })
                                    })(mm)
                                  },
                                  children: mm
                                }, mm))), !Km && (0, Om.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, Om.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, Om.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, Om.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, Om.jsx)(bA.d, {
                                      display: jm
                                    }, Dm)
                                  }), (0, Om.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: mm => {
                                      mm.preventDefault(), Qm(jm)
                                    },
                                    children: [(0, Om.jsx)("input", {
                                      value: fm,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: mm => {
                                        Am(mm.target.value)
                                      }
                                    }), (0, Om.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, Om.jsx)(qm, {
                                        name: "play"
                                      }), (0, Om.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, Om.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: BA.map((mm => (0, Om.jsx)("button", {
                                      type: "button",
                                      className: am()("DocsVariantChip", {
                                        Active: fm === mm
                                      }),
                                      onClick: () => {
                                        var Tm;
                                        Am(Tm = mm), Qm({
                                          ...jm,
                                          line: Tm
                                        })
                                      },
                                      children: mm
                                    }, mm)))
                                  }), (0, Om.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, Om.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, Om.jsx)("input", {
                                      value: xm,
                                      placeholder: "No name",
                                      onChange: mm => {
                                        wm(mm.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, Om.jsx)(MA, {
                                  synth: mm,
                                  onChange: fm => {
                                    const hm = {
                                      ...mm,
                                      ...fm
                                    };
                                    Tm(hm);
                                    const Am = {
                                        ...jm,
                                        voice: hm
                                      },
                                      am = performance.now();
                                    if (am - om.current >= dA) {
                                      om.current = am, Ym();
                                      const mm = (0, SA.f)(Am).plan.blips[0];
                                      mm && (pm.current = WA((0, kA.g)(hm), [{
                                        ...mm,
                                        atMs: 0
                                      }], Rm))
                                    }
                                    window.clearTimeout(Em.current), Em.current = window.setTimeout((() => {
                                      Qm(Vm.current)
                                    }), UA)
                                  }
                                })]
                              }), (0, Om.jsx)(Jm, {
                                code: nm,
                                lang: "ts"
                              })]
                            })
                          }
                          var ma = fm(4809);
                          const Ta = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            fa = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            ha = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${fa}`, "g"), ma.n],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, ma.n]
                            ];

                          function Aa(mm) {
                            return `${mm.pageId}#${mm.anchor}`
                          }
                          let aa, xa, wa;

                          function Da(mm) {
                            const Tm = (0, cm.j)(mm),
                              fm = new Set;
                            for (const [, , hm] of Tm.matchAll(cm.b)) {
                              const mm = hm.startsWith("#") ? Mm(hm) : null,
                                Tm = mm ? Aa({
                                  pageId: mm.page.id,
                                  anchor: mm.anchor
                                }) : null;
                              null !== Tm && (aa || (aa = new Set(Hm.flatMap((mm => bm(mm.layout) ? sm(mm).sections.map((Tm => Aa({
                                pageId: mm.id,
                                anchor: Tm.heading.anchor
                              }))) : [])))), aa).has(Tm) && fm.add(Tm)
                            }
                            for (const [, , hm] of Tm.matchAll(Ta)) {
                              const mm = oT(hm);
                              mm && fm.add(Aa(mm))
                            }
                            return fm
                          }

                          function ia(mm, Tm) {
                            const fm = new Set,
                              hm = function(mm) {
                                return mm.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(mm);
                            for (const [, Am] of hm.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) fm.add(Am);
                            for (const [Am, am] of ha)
                              for (const [, mm] of(0, ma.g)(hm, Am, am)) Tm.has(mm) && fm.add(mm);
                            return fm
                          }

                          function Ra(mm, Tm, fm, hm) {
                            const Am = mm.get(Tm);
                            Am ? !hm && Am.some((mm => mm.pageId === fm.pageId)) || Am.push(fm) : mm.set(Tm, [fm])
                          }
                          const pa = /^[A-Za-z_$][\w$]*$/;

                          function Ea(mm) {
                            return pa.test(mm.name) ? mm.name : "options"
                          }

                          function oa(mm, Tm) {
                            const fm = mm.params.map(Ea).join(", ");
                            return Tm ? `${mm.name} = (${fm}) => {\n\t\n}` : `api.${mm.name}(${fm})`
                          }

                          function Oa(mm) {
                            let {
                              method: Tm,
                              isCallback: fm
                            } = mm;
                            return (0, Om.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, Om.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [fm ? (0, Om.jsxs)(Om.Fragment, {
                                  children: [(0, Om.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Tm.name
                                  }), (0, Om.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, Om.jsxs)(Om.Fragment, {
                                  children: [(0, Om.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, Om.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Tm.name
                                  }), (0, Om.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), Tm.params.map(((mm, fm) => (0, Om.jsxs)(hm.Fragment, {
                                  children: [fm > 0 && (0, Om.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, Om.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${Tm.name}-${Ea(mm)}`,
                                    children: mm.name
                                  })]
                                }, mm.name))), (0, Om.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: fm ? ") => " : ")"
                                }), fm && !Tm.returns && (0, Om.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), Tm.returns && Tm.returns.type && (0, Om.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!fm && (0, Om.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, Om.jsx)(ZT, {
                                  type: Tm.returns.type
                                })]
                              })]
                            })
                          }

                          function Ya(mm) {
                            let {
                              title: Tm,
                              references: fm
                            } = mm;
                            const Am = (0, hm.useContext)(OT);
                            return (0, Om.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, Om.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: Tm
                              }), fm.map((mm => (0, Om.jsx)(xm.d, {
                                to: Bm(Am, Cm(mm.pageId), mm.anchor),
                                children: mm.label
                              }, `${mm.pageId}#${mm.anchor}`)))]
                            })
                          }

                          function qa(mm) {
                            var Tm, fm;
                            let {
                              pageId: hm,
                              anchor: Am
                            } = mm;
                            const am = Aa({
                                pageId: hm,
                                anchor: Am
                              }),
                              xm = null !== (Tm = function() {
                                if (!wa) {
                                  wa = new Map;
                                  const hm = new Set(Hm.filter((mm => "callbacks" === mm.layout)).flatMap((mm => sm(mm).sections.map((mm => mm.heading.text)))));
                                  for (const Am of Hm)
                                    if ("article" === Am.layout || "snippets" === Am.layout)
                                      for (const am of (0, cm.r)(sm(Am)))
                                        for (const {
                                            code: xm
                                          }
                                          of(0, cm.k)(am.blocks))
                                          for (const wm of ia(xm, hm)) {
                                            const hm = ET().get(wm);
                                            if (hm) {
                                              var mm, Tm, fm;
                                              const xm = {
                                                pageId: Am.id,
                                                anchor: null !== (mm = null === (Tm = am.heading) || void 0 === Tm ? void 0 : Tm.anchor) && void 0 !== mm ? mm : "",
                                                label: null !== (fm = Am.navTitle) && void 0 !== fm ? fm : Am.title
                                              };
                                              Ra(wa, Aa(hm), xm, !1)
                                            }
                                          }
                                }
                                return wa
                              }().get(am)) && void 0 !== Tm ? Tm : [],
                              wm = null !== (fm = function() {
                                if (!xa) {
                                  xa = new Map;
                                  const mm = Cm("changelog");
                                  for (const Tm of sm(mm).sections) {
                                    const fm = new Set(Tm.blocks.flatMap((mm => [...Da(mm)])));
                                    for (const hm of fm) {
                                      const fm = {
                                        pageId: mm.id,
                                        anchor: Tm.heading.anchor,
                                        label: Tm.heading.text
                                      };
                                      Ra(xa, hm, fm, !0)
                                    }
                                  }
                                }
                                return xa
                              }().get(am)) && void 0 !== fm ? fm : [];
                            return 0 === xm.length && 0 === wm.length ? null : (0, Om.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [xm.length > 0 && (0, Om.jsx)(Ya, {
                                title: "Used in",
                                references: xm
                              }), wm.length > 0 && (0, Om.jsx)(Ya, {
                                title: "Changelog",
                                references: wm
                              })]
                            })
                          }

                          function ja(mm) {
                            let {
                              method: Tm,
                              pageId: fm,
                              anchor: hm,
                              isCallback: Am
                            } = mm;
                            const am = Am ? void 0 : DT().get(Tm.name),
                              xm = Tm.description.length > 0 || null === am || void 0 === am || !am.description ? Tm.description : (0, cm.x)(am.description);
                            return (0, Om.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, Om.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Om.jsx)(pf, {
                                  level: 2,
                                  text: Tm.name,
                                  anchor: hm,
                                  className: "DocsCardTitle"
                                }), (0, Om.jsx)(Im, {
                                  text: oa(Tm, Am),
                                  label: Am ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Om.jsx)(Oa, {
                                method: Tm,
                                isCallback: Am
                              }), am && null !== am.deprecation && (0, Om.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, Om.jsx)("strong", {
                                  children: "Deprecated"
                                }), am.deprecation && (0, Om.jsxs)(Om.Fragment, {
                                  children: [": ", (0, Om.jsx)(JT, {
                                    text: (wm = am.deprecation, (0, ma.s)(wm, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, ma.l)("`\\w"), (mm => {
                                      let [Tm] = mm;
                                      return ET().has(Tm) ? `\`${Tm}\`` : Tm
                                    })))
                                  })]
                                })]
                              }), xm.length > 0 && (0, Om.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Om.jsx)(Yf, {
                                  blocks: xm
                                })
                              }), Tm.params.length > 0 && (0, Om.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Om.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, Om.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: Tm.params.map((mm => (0, Om.jsxs)("div", {
                                    id: `${Tm.name}-${Ea(mm)}`,
                                    className: "DocsParam",
                                    children: [(0, Om.jsxs)("dt", {
                                      children: [(0, Om.jsx)("code", {
                                        className: "DocsParamName",
                                        children: mm.name
                                      }), (0, Om.jsx)(ZT, {
                                        type: mm.type
                                      })]
                                    }), mm.description && (0, Om.jsx)("dd", {
                                      children: (0, Om.jsx)(JT, {
                                        text: mm.description
                                      })
                                    })]
                                  }, mm.name)))
                                })]
                              }), Tm.returns && (Tm.returns.type || Tm.returns.description.length > 0) && (0, Om.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Om.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, Om.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [Tm.returns.type && (0, Om.jsx)(ZT, {
                                    type: Tm.returns.type
                                  }), Tm.returns.description.length > 0 && (0, Om.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, Om.jsx)(Yf, {
                                      blocks: Tm.returns.description
                                    })
                                  })]
                                })]
                              }), (0, Om.jsx)(qa, {
                                pageId: fm,
                                anchor: hm
                              })]
                            });
                            var wm
                          }

                          function Va(mm) {
                            var Tm;
                            return null !== mm.defaultValue && "undefined" !== mm.defaultValue ? mm.defaultValue : null !== (Tm = mm.example) && void 0 !== Tm ? Tm : "value"
                          }

                          function Ia(mm) {
                            let {
                              setting: Tm,
                              pageId: fm,
                              anchor: hm,
                              setterSnippet: Am
                            } = mm;
                            const am = null === Tm.defaultValue ? null : VT(Tm.defaultValue);
                            return (0, Om.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, Om.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Om.jsx)(pf, {
                                  level: 2,
                                  text: Tm.name,
                                  anchor: hm,
                                  className: "DocsCardTitle"
                                }), (0, Om.jsx)(Im, {
                                  text: Am(Tm.name, Va(Tm)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Om.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, Om.jsxs)("div", {
                                  children: [(0, Om.jsx)("dt", {
                                    children: "Type"
                                  }), (0, Om.jsx)("dd", {
                                    children: (0, Om.jsx)(ZT, {
                                      type: Tm.type
                                    })
                                  })]
                                }), null !== Tm.defaultValue && (0, Om.jsxs)("div", {
                                  children: [(0, Om.jsx)("dt", {
                                    children: "Default"
                                  }), (0, Om.jsx)("dd", {
                                    children: (0, Om.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [am && (0, Om.jsx)(IT, {
                                        colour: am
                                      }), Tm.defaultValue]
                                    })
                                  })]
                                }), null !== Tm.example && (0, Om.jsxs)("div", {
                                  children: [(0, Om.jsx)("dt", {
                                    children: "Example"
                                  }), (0, Om.jsx)("dd", {
                                    children: (0, Om.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: Tm.example
                                    })
                                  })]
                                })]
                              }), Tm.description.length > 0 && (0, Om.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Om.jsx)(Yf, {
                                  blocks: Tm.description
                                })
                              }), (0, Om.jsx)(qa, {
                                pageId: fm,
                                anchor: hm
                              })]
                            })
                          }

                          function Ka(mm) {
                            let {
                              section: Tm
                            } = mm;
                            return (0, Om.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, Om.jsx)(pf, {
                                level: 2,
                                text: Tm.heading.text,
                                anchor: Tm.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, Om.jsx)("div", {
                                className: "DocsProse",
                                children: (0, Om.jsx)(Yf, {
                                  blocks: Tm.blocks
                                })
                              })]
                            })
                          }

                          function Qa(mm) {
                            let {
                              section: Tm
                            } = mm;
                            return (0, Om.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Om.jsx)(pf, {
                                level: Tm.heading.level,
                                text: Tm.heading.text,
                                anchor: Tm.heading.anchor
                              }), (0, Om.jsx)(Yf, {
                                blocks: Tm.blocks
                              })]
                            })
                          }
                          const na = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function Ja(mm) {
                            let {
                              page: Tm,
                              section: fm
                            } = mm;
                            if ("methods" === Tm.layout || "callbacks" === Tm.layout) return (0, Om.jsx)(ja, {
                              method: Zf(fm),
                              pageId: Tm.id,
                              anchor: fm.heading.anchor,
                              isCallback: "callbacks" === Tm.layout
                            });
                            if ("settings" === Tm.layout) {
                              const mm = function(mm) {
                                const Tm = {
                                  name: mm.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const hm of mm.blocks) {
                                  var fm;
                                  if (zf(hm)) continue;
                                  const mm = "paragraph" === hm.kind ? hm.text.match(kf) : null;
                                  if (!mm) {
                                    Tm.description.push(hm);
                                    continue
                                  }
                                  const Am = null !== (fm = Jf(mm[2])) && void 0 !== fm ? fm : mm[2];
                                  "Type" === mm[1] ? Tm.type = Am : "Default" === mm[1] ? Tm.defaultValue = Am : "" !== Am && (Tm.example = Am)
                                }
                                return Tm.type ? Tm : null
                              }(fm);
                              if (mm) return (0, Om.jsx)(Ia, {
                                setting: mm,
                                pageId: Tm.id,
                                anchor: fm.heading.anchor,
                                setterSnippet: Tm.setterSnippet
                              })
                            }
                            return "snippets" === Tm.layout ? (0, Om.jsx)(Ka, {
                              section: fm
                            }) : "changelog" === Tm.layout ? (0, Om.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, Om.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, Om.jsx)(pf, {
                                  level: 2,
                                  text: fm.heading.text,
                                  anchor: fm.heading.anchor
                                })
                              }), (0, Om.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, Om.jsx)(Yf, {
                                  blocks: bf(fm.blocks)
                                })
                              })]
                            }) : Tm.gallery ? (0, Om.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Om.jsx)(pf, {
                                level: fm.heading.level,
                                text: fm.heading.text,
                                anchor: fm.heading.anchor
                              }), (0, Om.jsx)(Sh, {
                                kind: Tm.gallery,
                                content: sm(Tm),
                                blocks: fm.blocks
                              })]
                            }) : (0, Om.jsx)(Qa, {
                              section: fm
                            })
                          }

                          function ca(mm) {
                            let {
                              page: Tm,
                              onTocChange: fm
                            } = mm;
                            const Am = sm(Tm),
                              [am, xm] = (0, hm.useState)(""),
                              wm = "article" !== Tm.layout,
                              Dm = Vf(Tm.gallery) ? Tm.gallery : null,
                              im = null !== Dm,
                              Rm = am.trim().toLowerCase(),
                              pm = (0, hm.useRef)(null),
                              Em = (0, hm.useCallback)((mm => {
                                var Tm;
                                null === (Tm = pm.current) || void 0 === Tm || Tm.preview(mm)
                              }), []),
                              om = (0, hm.useMemo)((() => {
                                if (!Tm.hasParticlePlayground) return [];
                                const mm = Gf(Am.intro).find((mm => "names" === mm.kind && !mm.names.some((mm => null !== Mf(mm.name)))));
                                return "names" === (null === mm || void 0 === mm ? void 0 : mm.kind) ? mm.names.map((mm => mm.name)) : []
                              }), [Tm, Am]),
                              Ym = (0, hm.useMemo)((() => {
                                if (!Tm.hasTextPlayground) return [];
                                const mm = Am.sections.flatMap((mm => mm.blocks.flatMap((mm => {
                                  var Tm;
                                  return (null !== (Tm = Nf(mm)) && void 0 !== Tm ? Tm : []).flatMap((mm => sT(mm.name) ? [mm.name] : []))
                                }))));
                                return [...new Set(mm)]
                              }), [Tm, Am]),
                              qm = (0, hm.useMemo)((() => Rm ? Am.sections.filter((mm => function(mm, Tm) {
                                return !!mm.heading.text.toLowerCase().includes(Tm) || mm.blocks.some((mm => (0, cm.j)(mm).toLowerCase().includes(Tm)))
                              }(mm, Rm))) : Am.sections), [Am, Rm]),
                              jm = (0, hm.useMemo)((() => function(mm, Tm) {
                                return "article" !== mm.layout ? Tm.map((mm => ({
                                  anchor: mm.heading.anchor,
                                  text: mm.heading.text,
                                  level: 2
                                }))) : Tm.flatMap((mm => {
                                  const Tm = mm.blocks.flatMap((mm => "heading" === mm.kind && 3 === mm.level ? [{
                                    anchor: mm.anchor,
                                    text: mm.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: mm.heading.anchor,
                                    text: mm.heading.text,
                                    level: 2
                                  }, ...Tm]
                                }))
                              }(Tm, qm)), [Tm, qm]);
                            return (0, hm.useEffect)((() => {
                              fm(jm)
                            }), [jm, fm]), (0, Om.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, Om.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, Om.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Am.title || Tm.title
                                }), (0, Om.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: Tm.summary
                                }), (0, Om.jsx)(gh, {
                                  page: Tm
                                }), wm && (0, Om.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, Om.jsxs)("span", {
                                    children: [(0, Om.jsx)("strong", {
                                      children: Am.sections.length
                                    }), " ", na[Tm.layout]]
                                  })
                                })]
                              }), "" === Tm.slug && (0, Om.jsx)(Nh, {}), Dm && (0, Om.jsx)(Hh, {
                                kind: Dm
                              }, Dm), Tm.hasParticlePlayground && (0, Om.jsx)(RA, {
                                ref: pm,
                                textures: om
                              }), !im && Am.intro.length > 0 && (0, Om.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: Tm.gallery ? (0, Om.jsx)(Kh.Provider, {
                                  value: Tm.hasParticlePlayground ? Em : null,
                                  children: (0, Om.jsx)(Sh, {
                                    kind: Tm.gallery,
                                    content: Am,
                                    blocks: Am.intro
                                  })
                                }) : (0, Om.jsx)(Yf, {
                                  blocks: bf(Am.intro)
                                })
                              }), Tm.hasTextPlayground && (0, Om.jsx)(ZA, {
                                fontAwesomeIcons: Ym
                              }), Tm.hasVoicePlayground && (0, Om.jsx)(FA, {}), Tm.childPageIds && (0, Om.jsx)(Nh, {
                                cards: Tm.childPageIds.map((mm => ({
                                  pageId: mm
                                }))),
                                label: Tm.title
                              }), wm && (0, Om.jsx)(Qf, {
                                className: "DocsFilterBar",
                                value: am,
                                placeholder: `Filter ${Am.sections.length} ${na[Tm.layout]}\u2026`,
                                label: `Filter ${na[Tm.layout]}`,
                                onChange: xm,
                                count: Rm ? {
                                  visible: qm.length,
                                  total: Am.sections.length
                                } : null
                              }), !im && (0, Om.jsxs)("div", {
                                className: `DocsSections Layout-${Tm.layout}`,
                                children: [qm.map((mm => (0, Om.jsx)(Ja, {
                                  page: Tm,
                                  section: mm
                                }, mm.heading.anchor))), 0 === qm.length && (0, Om.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", na[Tm.layout], " match \u201c", am, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const za = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Za(mm) {
                            let {
                              entry: Tm,
                              isActive: fm,
                              onNavigate: hm,
                              label: Am,
                              children: xm
                            } = mm;
                            return (0, Om.jsx)("a", {
                              href: `#${Tm.anchor}`,
                              "aria-label": Am,
                              className: am()(`Level${Tm.level}`, {
                                Active: fm
                              }),
                              "aria-current": fm ? "location" : void 0,
                              onClick: mm => {
                                mm.preventDefault(), hm(Tm.anchor)
                              },
                              children: xm
                            })
                          }

                          function ka(mm) {
                            let {
                              toc: Tm,
                              activeAnchor: fm,
                              onNavigate: Am
                            } = mm;
                            const xm = Math.max(0, Tm.findIndex((mm => mm.anchor === fm))),
                              wm = (0, hm.useRef)(null),
                              Dm = (0, hm.useRef)(!1);
                            (0, hm.useEffect)((() => {
                              var mm, fm;
                              const hm = null === (mm = wm.current) || void 0 === mm ? void 0 : mm.closest(".DocsToc"),
                                Am = null === (fm = wm.current) || void 0 === fm ? void 0 : fm.querySelector(".DocsTimelineNotch.Active");
                              if (!hm || !Am) return;
                              let am = 0;
                              if (xm === Tm.length - 1) am = hm.scrollHeight;
                              else if (xm > 0) {
                                const mm = hm.getBoundingClientRect(),
                                  Tm = Am.getBoundingClientRect();
                                am = hm.scrollTop + Tm.top + Tm.height / 2 - (mm.top + hm.clientHeight / 2)
                              }
                              hm.scrollTo({
                                top: am,
                                behavior: Dm.current ? "smooth" : "auto"
                              }), Dm.current = !0
                            }), [xm, Tm.length]);
                            const im = [];
                            return Tm.forEach(((mm, Tm) => {
                              var fm, hm, Am;
                              const am = function(mm) {
                                  const Tm = mm.trim().match(za);
                                  return Tm ? {
                                    day: Tm[1],
                                    month: `${Tm[2]} ${Tm[3]}`
                                  } : null
                                }(mm.text),
                                xm = null !== (fm = null === am || void 0 === am ? void 0 : am.month) && void 0 !== fm ? fm : null;
                              null !== xm && (null === (hm = im.at(-1)) || void 0 === hm ? void 0 : hm.month) === xm || im.push({
                                month: xm,
                                entries: []
                              }), im.at(-1).entries.push({
                                entry: mm,
                                day: null !== (Am = null === am || void 0 === am ? void 0 : am.day) && void 0 !== Am ? Am : null,
                                index: Tm
                              })
                            })), (0, Om.jsx)("ol", {
                              ref: wm,
                              className: "DocsTimeline",
                              children: im.map((mm => {
                                let {
                                  month: Tm,
                                  entries: fm
                                } = mm;
                                return (0, Om.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [Tm && (0, Om.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: Tm
                                  }), (0, Om.jsx)("ol", {
                                    children: fm.map((mm => {
                                      let {
                                        entry: Tm,
                                        day: fm,
                                        index: hm
                                      } = mm;
                                      return (0, Om.jsx)("li", {
                                        className: am()("DocsTimelineNotch", {
                                          Passed: hm < xm,
                                          Active: hm === xm
                                        }),
                                        children: (0, Om.jsx)(Za, {
                                          entry: Tm,
                                          isActive: hm === xm,
                                          onNavigate: Am,
                                          label: Tm.text,
                                          children: (0, Om.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== fm && void 0 !== fm ? fm : Tm.text
                                          })
                                        })
                                      }, Tm.anchor)
                                    }))
                                  })]
                                }, fm[0].entry.anchor)
                              }))
                            })
                          }

                          function ba(mm) {
                            let {
                              isChangelog: Tm,
                              toc: fm,
                              activeAnchor: hm,
                              onNavigate: Am
                            } = mm;
                            return 0 === fm.length ? null : (0, Om.jsxs)(Om.Fragment, {
                              children: [(0, Om.jsx)("div", {
                                className: "DocsTocTitle",
                                children: Tm ? "Updates" : "On this page"
                              }), Tm ? (0, Om.jsx)(ka, {
                                toc: fm,
                                activeAnchor: hm,
                                onNavigate: Am
                              }) : (0, Om.jsx)("ul", {
                                children: fm.map((mm => (0, Om.jsx)("li", {
                                  children: (0, Om.jsx)(Za, {
                                    entry: mm,
                                    isActive: mm.anchor === hm,
                                    onNavigate: Am,
                                    children: mm.text.replace(/`/g, "")
                                  })
                                }, mm.anchor)))
                              })]
                            })
                          }
                          const Sa = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            ea = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Na = 20,
                            Ga = 10,
                            Xa = 40,
                            Pa = 120;
                          let Ha;

                          function ya(mm) {
                            const Tm = mm.gallery;
                            if (!Tm) return [];
                            if (Vf(Tm)) return function(mm) {
                              return Kf(mm).entries.map((mm => mm.name))
                            }(Tm).map((fm => ({
                              page: mm,
                              anchor: Pf(Tm, fm),
                              title: fm,
                              kind: ea[Tm],
                              text: "",
                              listedUnder: mm.title
                            })));
                            const fm = sm(mm);
                            return (0, cm.r)(fm).flatMap((hm => {
                              const Am = hm.heading ? `${mm.title} \u203a ${hm.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : mm.title;
                              return yf(Tm, fm, hm.blocks).flatMap((fm => "names" !== fm.kind ? [] : fm.names.map((hm => {
                                const am = fm.isSongs ? "Song" : ea[Tm];
                                return {
                                  page: mm,
                                  anchor: hm.anchor,
                                  title: hm.name,
                                  kind: am,
                                  text: "",
                                  listedUnder: Am
                                }
                              }))))
                            }))
                          }

                          function Ca(mm, Tm, fm) {
                            const hm = mm.title.toLowerCase();
                            let Am = 0;
                            if (hm === Tm) Am = 100;
                            else if (hm.startsWith(Tm)) Am = 80;
                            else if (hm.includes(Tm)) Am = 60;
                            else if (fm.every((mm => hm.includes(mm)))) Am = 45;
                            else {
                              if (!mm.text.toLowerCase().includes(Tm)) return 0;
                              Am = 20
                            }
                            return Am - Math.min(hm.length / 10, 9) + ("Page" === mm.kind ? 8 : "Method" === mm.kind ? 3 : 0) - (mm.listedUnder ? Na : 0)
                          }

                          function ra(mm, Tm) {
                            const fm = mm.toLowerCase().indexOf(Tm),
                              hm = Math.max(0, fm - Pa / 3);
                            return `${hm>0?"\u2026":""}${mm.slice(hm,hm+Pa)}${hm+Pa<mm.length?"\u2026":""}`
                          }

                          function sa(mm) {
                            let {
                              text: Tm,
                              query: fm
                            } = mm;
                            const hm = fm ? Tm.toLowerCase().indexOf(fm) : -1;
                            return -1 === hm ? (0, Om.jsx)(Om.Fragment, {
                              children: Tm
                            }) : (0, Om.jsxs)(Om.Fragment, {
                              children: [Tm.slice(0, hm), (0, Om.jsx)("mark", {
                                children: Tm.slice(hm, hm + fm.length)
                              }), Tm.slice(hm + fm.length)]
                            })
                          }

                          function la(mm) {
                            let {
                              basePath: Tm,
                              onClose: fm
                            } = mm;
                            const Am = (0, wm.A)(),
                              [xm, Dm] = (0, hm.useState)(""),
                              [im, Rm] = (0, hm.useState)(0),
                              pm = (0, hm.useRef)(null),
                              Em = (0, hm.useRef)(null),
                              om = xm.trim().toLowerCase(),
                              Ym = (0, hm.useMemo)((() => {
                                const mm = (Ha || (Ha = Hm.flatMap((mm => {
                                  const Tm = sm(mm);
                                  return [{
                                    page: mm,
                                    anchor: "",
                                    title: mm.title,
                                    kind: "Page",
                                    text: mm.summary
                                  }, ...Tm.sections.flatMap((Tm => {
                                    const fm = Tm.blocks.filter((mm => "paragraph" === mm.kind)).map(cm.j).join(" ").replace(/[`*]/g, ""),
                                      hm = {
                                        page: mm,
                                        anchor: Tm.heading.anchor,
                                        title: Tm.heading.text.replace(/`/g, ""),
                                        kind: Sa[mm.layout],
                                        text: fm
                                      },
                                      Am = Tm.blocks.flatMap((Tm => "article" === mm.layout && "heading" === Tm.kind && 3 === Tm.level ? [{
                                        page: mm,
                                        anchor: Tm.anchor,
                                        title: Tm.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: hm.title
                                      }] : []));
                                    return [hm, ...Am]
                                  })), ...ya(mm)]
                                }))), Ha);
                                if (!om) return mm.filter((mm => "Page" === mm.kind));
                                const Tm = om.split(/\s+/);
                                let fm = 0;
                                return mm.map((mm => ({
                                  entry: mm,
                                  score: Ca(mm, om, Tm)
                                }))).filter((mm => mm.score > 0)).sort(((mm, Tm) => Tm.score - mm.score)).filter((mm => !mm.entry.listedUnder || (fm++, fm <= Ga))).slice(0, Xa).map((mm => mm.entry))
                              }), [om]);
                            (0, hm.useEffect)((() => {
                              Rm(0)
                            }), [om]), (0, hm.useEffect)((() => {
                              const mm = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === mm || void 0 === mm || mm.focus()
                              }
                            }), []), (0, hm.useEffect)((() => {
                              var mm, Tm;
                              null === (mm = pm.current) || void 0 === mm || null === (Tm = mm.querySelector(".Active")) || void 0 === Tm || Tm.scrollIntoView({
                                block: "nearest"
                              })
                            }), [im]);
                            const jm = mm => {
                              Am(Bm(Tm, mm.page, mm.anchor)), fm()
                            };
                            return (0, Om.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: mm => {
                                mm.target === mm.currentTarget && fm()
                              },
                              children: (0, Om.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: mm => {
                                  mm.target !== Em.current && mm.preventDefault()
                                },
                                onKeyDown: mm => {
                                  if ("Escape" === mm.key) fm();
                                  else if ("Tab" === mm.key) {
                                    var Tm;
                                    mm.preventDefault(), null === (Tm = Em.current) || void 0 === Tm || Tm.focus()
                                  }
                                },
                                children: [(0, Om.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, Om.jsx)(qm, {
                                    name: "magnifying-glass"
                                  }), (0, Om.jsx)("input", {
                                    ref: Em,
                                    autoFocus: !0,
                                    value: xm,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Ym.length > 0 ? `DocsSearchResult-${im}` : void 0,
                                    onChange: mm => {
                                      Dm(mm.target.value)
                                    },
                                    onKeyDown: mm => {
                                      if ("ArrowDown" === mm.key || "ArrowUp" === mm.key) {
                                        mm.preventDefault();
                                        const Tm = "ArrowDown" === mm.key ? 1 : -1;
                                        Rm((im + Tm + Ym.length) % Math.max(Ym.length, 1))
                                      } else "Enter" === mm.key && Ym[im] && jm(Ym[im])
                                    }
                                  }), (0, Om.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, Om.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: pm,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!om && (0, Om.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Ym.map(((mm, Tm) => {
                                    var fm;
                                    return (0, Om.jsxs)("li", {
                                      id: `DocsSearchResult-${Tm}`,
                                      role: "option",
                                      "aria-selected": Tm === im,
                                      className: am()("DocsSearchResult", {
                                        Active: Tm === im
                                      }),
                                      onMouseMove: () => {
                                        Rm(Tm)
                                      },
                                      onClick: () => {
                                        jm(mm)
                                      },
                                      children: [(0, Om.jsx)(qm, {
                                        name: mm.page.icon
                                      }), (0, Om.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, Om.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, Om.jsx)(sa, {
                                            text: mm.title,
                                            query: om
                                          })
                                        }), mm.text && (0, Om.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, Om.jsx)(sa, {
                                            text: ra(mm.text, om),
                                            query: om
                                          })
                                        })]
                                      }), (0, Om.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === mm.kind ? "Page" : null !== (fm = mm.listedUnder) && void 0 !== fm ? fm : `${mm.kind} \xb7 ${mm.page.title}`
                                      })]
                                    }, `${mm.page.id}#${mm.anchor}`)
                                  })), om && 0 === Ym.length && (0, Om.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", xm, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function Ma(mm, Tm) {
                            if (Tm < 10) return `${mm.toFixed(1)}s`;
                            const fm = Math.floor(mm);
                            return `${Math.floor(fm/60)}:${String(fm%60).padStart(2,"0")}`
                          }

                          function ua() {
                            const mm = oh((mm => mm.track)),
                              Tm = oh((mm => mm.volume)),
                              [fm, Am] = (0, hm.useState)(0),
                              xm = (0, hm.useRef)(Ah);
                            if ((0, hm.useEffect)((() => {
                                if (!mm) return;
                                if (Am(jh()), "playing" !== mm.status) return;
                                let Tm = 0;
                                const fm = () => {
                                  Am(jh()), Tm = requestAnimationFrame(fm)
                                };
                                return Tm = requestAnimationFrame(fm), () => {
                                  cancelAnimationFrame(Tm)
                                }
                              }), [mm]), !mm) return null;
                            const wm = "paused" !== mm.status,
                              Dm = Math.min(fm, mm.duration);
                            return (0, Om.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, Om.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, Om.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": wm ? `Pause ${mm.name}` : `Play ${mm.name}`,
                                  onClick: qh,
                                  children: (0, Om.jsx)(qm, {
                                    name: wm ? "pause" : "play"
                                  })
                                }), (0, Om.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, Om.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, Om.jsx)("code", {
                                      children: mm.name
                                    }), (0, Om.jsx)("span", {
                                      children: mm.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, Om.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, Om.jsx)("span", {
                                      children: Ma(Dm, mm.duration)
                                    }), (0, Om.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: mm.duration || 1,
                                      step: .01,
                                      value: Dm,
                                      disabled: 0 === mm.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${Ma(Dm,mm.duration)} of ${Ma(mm.duration,mm.duration)}`,
                                      onChange: mm => {
                                        const Tm = Number(mm.target.value);
                                        ! function(mm) {
                                          var Tm;
                                          ih = mm, null === (Tm = wh) || void 0 === Tm || Tm.seek(mm)
                                        }(Tm), Am(Tm)
                                      }
                                    }), (0, Om.jsx)("span", {
                                      children: mm.duration > 0 ? Ma(mm.duration, mm.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, Om.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, Om.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === Tm ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === Tm ? Vh(xm.current) : (xm.current = Tm, Vh(0))
                                    },
                                    children: (0, Om.jsx)(qm, {
                                      name: "volume",
                                      className: am()({
                                        Muted: 0 === Tm
                                      })
                                    })
                                  }), (0, Om.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: Tm,
                                    "aria-label": "Volume",
                                    onChange: mm => {
                                      Vh(Number(mm.target.value))
                                    }
                                  })]
                                }), (0, Om.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var Tm;
                                    null === (Tm = document.querySelector(`[data-docs-track="${CSS.escape(ah(mm.name,mm.isSong))}"]`)) || void 0 === Tm || Tm.focus(), Ih()
                                  },
                                  children: (0, Om.jsx)(qm, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var Ba = fm(37);
                          const La = "docsTheme",
                            va = window.matchMedia("(prefers-color-scheme: light)");

                          function ta(mm) {
                            let {
                              theme: Tm,
                              onChange: fm
                            } = mm;
                            const hm = "dark" === Tm ? "light" : "dark";
                            return (0, Om.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${hm} theme`,
                              title: `Switch to ${hm} theme`,
                              onClick: () => {
                                fm(hm)
                              },
                              children: (0, Om.jsx)(qm, {
                                name: "dark" === Tm ? "moon" : "sun"
                              })
                            })
                          }
                          const Ua = "https://github.com/Bloxdy/code-api",
                            da = "https://discord.gg/playbloxd",
                            ga = 180,
                            Wa = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function Fa(mm) {
                            let {
                              basePath: Tm,
                              activePageId: fm,
                              onNavigate: hm
                            } = mm;
                            return (0, Om.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: ym.map((mm => (0, Om.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, Om.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: mm.title
                                }), mm.pageIds.map((mm => {
                                  var Am;
                                  const wm = Cm(mm);
                                  return (0, Om.jsxs)(xm.d, {
                                    to: Bm(Tm, wm),
                                    className: am()("DocsNavLink", {
                                      Active: wm.id === fm
                                    }),
                                    "aria-current": wm.id === fm ? "page" : void 0,
                                    onClick: hm,
                                    children: [(0, Om.jsx)(qm, {
                                      name: wm.icon
                                    }), (0, Om.jsx)("span", {
                                      children: null !== (Am = wm.navTitle) && void 0 !== Am ? Am : wm.title
                                    })]
                                  }, wm.id)
                                }))]
                              }, mm.title)))
                            })
                          }

                          function mx(mm) {
                            let {
                              basePath: Tm,
                              pageId: fm
                            } = mm;
                            const hm = ym.flatMap((mm => mm.pageIds)),
                              Am = hm.indexOf(fm),
                              am = Am > 0 ? Cm(hm[Am - 1]) : null,
                              wm = Am < hm.length - 1 ? Cm(hm[Am + 1]) : null;
                            return (0, Om.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [am ? (0, Om.jsxs)(xm.d, {
                                className: "DocsPagerLink Previous",
                                to: Bm(Tm, am),
                                children: [(0, Om.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, Om.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: am.title
                                })]
                              }) : (0, Om.jsx)("span", {}), wm && (0, Om.jsxs)(xm.d, {
                                className: "DocsPagerLink Next",
                                to: Bm(Tm, wm),
                                children: [(0, Om.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, Om.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: wm.title
                                })]
                              })]
                            })
                          }

                          function Tx(mm) {
                            let {
                              basePath: Tm,
                              embedded: fm = !1
                            } = mm;
                            const {
                              pageSlug: Am = ""
                            } = (0, wm.G)(), im = (0, wm.w)(), Rm = (0, wm.A)(), pm = (Em = Am, Hm.find((mm => mm.slug === Em)));
                            var Em;
                            const [om, Ym] = function() {
                              const [mm, Tm] = (0, hm.useState)((() => {
                                const mm = Ba.g.getItem(La);
                                return "dark" === mm || "light" === mm ? mm : null
                              })), [fm, Am] = (0, hm.useState)(va.matches ? "light" : "dark");
                              return (0, hm.useEffect)((() => {
                                const mm = () => {
                                  Am(va.matches ? "light" : "dark")
                                };
                                return va.addEventListener("change", mm), () => {
                                  va.removeEventListener("change", mm)
                                }
                              }), []), [null !== mm && void 0 !== mm ? mm : fm, mm => {
                                Ba.g.setItem(La, mm), Tm(mm)
                              }]
                            }(), [jm, Vm] = (0, hm.useState)(null), [Im, Km] = (0, hm.useState)(!1), [Qm, nm] = (0, hm.useState)(!1), [Jm, zm] = (0, hm.useState)([]), Zm = function(mm, Tm) {
                              const [fm, Am] = (0, hm.useState)("");
                              return (0, hm.useEffect)((() => {
                                if (!Tm) return;
                                let fm = 0;
                                const hm = () => {
                                    var hm, am;
                                    fm = 0;
                                    const xm = Tm.getBoundingClientRect().top + ga;
                                    let wm = null !== (hm = null === (am = mm[0]) || void 0 === am ? void 0 : am.anchor) && void 0 !== hm ? hm : "";
                                    for (const Tm of mm) {
                                      const mm = document.getElementById(Tm.anchor);
                                      mm && mm.getBoundingClientRect().top <= xm && (wm = Tm.anchor)
                                    }
                                    Tm.scrollTop + Tm.clientHeight >= Tm.scrollHeight - 2 && Tm.scrollTop > 0 && mm.length > 0 && (wm = mm[mm.length - 1].anchor), Am(wm)
                                  },
                                  am = () => {
                                    fm || (fm = requestAnimationFrame(hm))
                                  };
                                return hm(), Tm.addEventListener("scroll", am, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(fm), Tm.removeEventListener("scroll", am)
                                }
                              }), [mm, Tm]), fm
                            }(Jm, jm), km = "" === Am && im.hash ? function(mm) {
                              const Tm = (0, cm.o)(mm);
                              if (lm(Cm("welcome"), Tm)) return null;
                              const fm = Object.hasOwn(um, Tm) ? um[Tm] : null;
                              if (fm) return {
                                page: Cm(fm.pageId),
                                anchor: fm.anchor
                              };
                              const hm = Cm("readme");
                              return lm(hm, Tm) ? {
                                page: hm,
                                anchor: Tm
                              } : Mm(`#${Tm}`)
                            }(im.hash) : null;
                            (0, hm.useEffect)((() => (Dm.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              Dm.c.set({
                                musicOnFromPage: !0
                              }), Ih()
                            })), []), (0, hm.useEffect)((() => {
                              const mm = mm => {
                                const Tm = mm.target;
                                if (Tm.closest(".DocsTextDialog")) return;
                                const fm = Tm.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(Tm.tagName);
                                "k" === mm.key && (mm.metaKey || mm.ctrlKey) || "/" === mm.key && !fm ? (mm.preventDefault(), nm(!0)) : "Escape" === mm.key && Km(!1)
                              };
                              return window.addEventListener("keydown", mm), () => {
                                window.removeEventListener("keydown", mm)
                              }
                            }), []);
                            const bm = (0, hm.useRef)(null);
                            (0, hm.useLayoutEffect)((() => {
                              var mm, Tm;
                              if (!jm) return;
                              const fm = bm.current === im.pathname;
                              bm.current = im.pathname;
                              const hm = (0, cm.o)(im.hash),
                                Am = hm ? document.getElementById(hm) : null;
                              if (null === (mm = jm.querySelector(".DocsTargeted")) || void 0 === mm || mm.classList.remove("DocsTargeted"), null === Am || void 0 === Am || null === (Tm = Am.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === Tm || Tm.classList.add("DocsTargeted"), Am) {
                                var am;
                                const mm = Am.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (am = Am.closest(".DocsChangelogEntry")) && void 0 !== am ? am : Am).scrollIntoView({
                                  block: mm ? "center" : "start",
                                  behavior: fm ? "smooth" : "auto"
                                })
                              } else fm || jm.scrollTo({
                                top: 0
                              })
                            }), [jm, im.pathname, im.hash, im.key]);
                            const Sm = (0, hm.useCallback)((() => {
                                Km(!1)
                              }), []),
                              em = (0, hm.useCallback)((mm => {
                                Rm({
                                  hash: mm
                                })
                              }), [Rm]);
                            if (km) return (0, Om.jsx)(wm.e, {
                              replace: !0,
                              to: Bm(Tm, km.page, km.anchor)
                            });
                            if (!pm) return (0, Om.jsx)(wm.e, {
                              replace: !0,
                              to: Tm
                            });
                            const Nm = fm ? "div" : "main";
                            return (0, Om.jsx)(OT.Provider, {
                              value: Tm,
                              children: (0, Om.jsx)(YT.Provider, {
                                value: jm,
                                children: (0, Om.jsxs)("div", {
                                  ref: Vm,
                                  className: am()("DocsSite", {
                                    Embedded: fm,
                                    NavOpen: Im
                                  }),
                                  "data-theme": om,
                                  children: [(0, Om.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, Om.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Im ? "Close menu" : "Open menu",
                                      "aria-expanded": Im,
                                      onClick: () => {
                                        Km(!Im)
                                      },
                                      children: (0, Om.jsx)(qm, {
                                        name: Im ? "cross" : "menu"
                                      })
                                    }), (0, Om.jsxs)(xm.d, {
                                      to: Tm,
                                      className: "DocsBrand",
                                      children: [(0, Om.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, Om.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, Om.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, Om.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        nm(!0)
                                      },
                                      children: [(0, Om.jsx)(qm, {
                                        name: "magnifying-glass"
                                      }), (0, Om.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, Om.jsxs)("kbd", {
                                        children: [Wa ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, Om.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, Om.jsxs)("a", {
                                        href: da,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Om.jsx)(qm, {
                                          name: "discord"
                                        }), (0, Om.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, Om.jsxs)("a", {
                                        href: Ua,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Om.jsx)(qm, {
                                          name: "external-link"
                                        }), (0, Om.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !fm && (0, Om.jsxs)(xm.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, Om.jsx)(qm, {
                                          name: "play"
                                        }), (0, Om.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, Om.jsx)(ta, {
                                        theme: om,
                                        onChange: Ym
                                      })]
                                    })]
                                  }), (0, Om.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, Om.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, Om.jsx)(Fa, {
                                        basePath: Tm,
                                        activePageId: pm.id,
                                        onNavigate: Sm
                                      })
                                    }), (0, Om.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Sm
                                    }), (0, Om.jsxs)(Nm, {
                                      className: "DocsMain",
                                      children: [(0, Om.jsx)(ca, {
                                        page: pm,
                                        onTocChange: zm
                                      }, pm.id), (0, Om.jsx)(mx, {
                                        basePath: Tm,
                                        pageId: pm.id
                                      })]
                                    }), (0, Om.jsx)("aside", {
                                      className: am()("DocsToc", {
                                        Timeline: "changelog" === pm.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, Om.jsx)(ba, {
                                        isChangelog: "changelog" === pm.layout,
                                        toc: Jm,
                                        activeAnchor: Zm,
                                        onNavigate: em
                                      })
                                    })]
                                  }), (0, Om.jsx)(ua, {}), Qm && (0, Om.jsx)(la, {
                                    basePath: Tm,
                                    onClose: () => {
                                      nm(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4672: (mm, Tm, fm) => {
                          fm.d(Tm, {
                            b: () => hm,
                            f: () => xm,
                            j: () => qm,
                            k: () => Ym,
                            n: () => wm,
                            o: () => Am,
                            q: () => am,
                            r: () => Om,
                            v: () => om,
                            x: () => Em
                          });
                          const hm = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Am(mm) {
                            try {
                              return decodeURIComponent(mm.slice(1))
                            } catch {
                              return mm.slice(1)
                            }
                          }

                          function am(mm) {
                            return mm.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const xm = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${hm.source}`, "g");

                          function wm(mm, Tm) {
                            return 2 === mm.length ? Tm.replace(/^ (.*) $/, "$1") : Tm
                          }

                          function Dm(mm) {
                            return "" === mm.trim()
                          }

                          function im(mm) {
                            const Tm = [];
                            for (const fm of mm.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Tm.length > 0 && Tm[Tm.length - 1].endsWith("\\") ? Tm[Tm.length - 1] += `|${fm}` : Tm.push(fm);
                            return Tm.map((mm => mm.trim().replaceAll("\\|", "|")))
                          }
                          const Rm = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function pm(mm) {
                            const Tm = [],
                              fm = [{
                                indent: -1,
                                items: Tm
                              }];
                            let hm = null;
                            for (const Am of mm) {
                              const mm = Am.match(Rm);
                              if (!mm) {
                                hm && (hm.text += ` ${Am.trim()}`);
                                continue
                              }
                              const Tm = mm[1].replace(/\t/g, "  ").length;
                              for (; Tm <= fm[fm.length - 1].indent;) fm.pop();
                              hm = {
                                text: mm[3].trim(),
                                children: []
                              }, fm[fm.length - 1].items.push(hm), fm.push({
                                indent: Tm,
                                items: hm.children
                              })
                            }
                            return Tm
                          }

                          function Em(mm) {
                            const Tm = mm.replace(/\r\n/g, "\n").split("\n"),
                              fm = [];
                            let hm = 0;
                            for (; hm < Tm.length;) {
                              const mm = Tm[hm];
                              if (Dm(mm)) {
                                hm++;
                                continue
                              }
                              const Am = mm.match(/^\s*```\s*(\w*)\s*$/);
                              if (Am) {
                                const mm = [];
                                for (hm++; hm < Tm.length && !/^\s*```\s*$/.test(Tm[hm]);) mm.push(Tm[hm]), hm++;
                                hm++, fm.push({
                                  kind: "code",
                                  lang: Am[1] || "text",
                                  code: mm.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const xm = mm.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (xm) {
                                const mm = xm[2].trim();
                                fm.push({
                                  kind: "heading",
                                  level: xm[1].length,
                                  text: mm,
                                  anchor: am(mm)
                                }), hm++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(mm)) {
                                fm.push({
                                  kind: "rule"
                                }), hm++;
                                continue
                              }
                              if (mm.trim().startsWith("|") && hm + 1 < Tm.length && /^\s*\|[\s:|-]+\|\s*$/.test(Tm[hm + 1])) {
                                const Am = im(mm),
                                  am = [];
                                for (hm += 2; hm < Tm.length && Tm[hm].trim().startsWith("|");) am.push(im(Tm[hm])), hm++;
                                fm.push({
                                  kind: "table",
                                  header: Am,
                                  rows: am
                                });
                                continue
                              }
                              if (mm.startsWith(">")) {
                                const mm = [];
                                for (; hm < Tm.length && Tm[hm].startsWith(">");) mm.push(Tm[hm].replace(/^>\s?/, "")), hm++;
                                fm.push({
                                  kind: "quote",
                                  blocks: Em(mm.join("\n"))
                                });
                                continue
                              }
                              if (Rm.test(mm)) {
                                const Am = [],
                                  am = /^\s*\d+\./.test(mm);
                                for (; hm < Tm.length && !Dm(Tm[hm]) && (Rm.test(Tm[hm]) || /^\s+\S/.test(Tm[hm]));) Am.push(Tm[hm]), hm++;
                                fm.push({
                                  kind: "list",
                                  ordered: am,
                                  items: pm(Am)
                                });
                                continue
                              }
                              const wm = [];
                              for (; hm < Tm.length && !Dm(Tm[hm]) && !/^\s*```/.test(Tm[hm]) && !/^#{1,6}\s/.test(Tm[hm]) && !Tm[hm].startsWith(">") && !Rm.test(Tm[hm]) && (!Tm[hm].trim().startsWith("|") || 0 !== wm.length);) wm.push(Tm[hm].trim()), hm++;
                              0 === wm.length && (wm.push(Tm[hm].trim()), hm++), fm.push({
                                kind: "paragraph",
                                text: wm.join(" ")
                              })
                            }
                            return fm
                          }

                          function om(mm) {
                            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const fm = Em(mm);
                            let hm = "";
                            const Am = [],
                              am = [],
                              xm = new Map;
                            for (const im of fm) {
                              if ("heading" === im.kind) {
                                var wm;
                                const mm = (null !== (wm = xm.get(im.anchor)) && void 0 !== wm ? wm : 0) + 1;
                                xm.set(im.anchor, mm), mm > 1 && (im.anchor = `${im.anchor}-${mm}`)
                              }
                              if ("heading" === im.kind && 1 === im.level && !hm) {
                                hm = im.text;
                                continue
                              }
                              if ("heading" === im.kind && im.level <= Tm) {
                                am.push({
                                  heading: im,
                                  blocks: []
                                });
                                continue
                              }
                              const mm = am.at(-1);
                              mm ? mm.blocks.push(im) : Am.push(im)
                            }
                            const Dm = mm => {
                              for (;
                                "rule" === (null === (Tm = mm.at(-1)) || void 0 === Tm ? void 0 : Tm.kind);) {
                                var Tm;
                                mm.pop()
                              }
                            };
                            Dm(Am);
                            for (const im of am) Dm(im.blocks);
                            return {
                              title: hm,
                              intro: Am,
                              sections: am
                            }
                          }

                          function Om(mm) {
                            return [{
                              heading: null,
                              blocks: mm.intro
                            }, ...mm.sections.map((mm => ({
                              heading: mm.heading,
                              blocks: mm.blocks
                            })))]
                          }

                          function Ym(mm) {
                            return mm.flatMap((mm => "code" === mm.kind ? [mm] : "quote" === mm.kind ? Ym(mm.blocks) : []))
                          }

                          function qm(mm) {
                            switch (mm.kind) {
                              case "heading":
                              case "paragraph":
                                return mm.text;
                              case "code":
                                return mm.code;
                              case "table":
                                return [mm.header, ...mm.rows].map((mm => mm.join(" "))).join(" ");
                              case "list": {
                                const Tm = mm => mm.map((mm => `${mm.text} ${Tm(mm.children)}`)).join(" ");
                                return Tm(mm.items)
                              }
                              case "quote":
                                return mm.blocks.map(qm).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4782: (mm, Tm, fm) => {
                          fm.d(Tm, {
                            e: () => wm
                          });
                          var hm = fm(59),
                            Am = fm(339),
                            am = fm(1893),
                            xm = fm(1135);

                          function wm(mm) {
                            let {
                              text: Tm
                            } = mm;
                            const fm = [];
                            let wm = "";
                            return (0, Am.Zb)(Tm).forEach(((mm, Tm) => {
                              if ("string" === typeof mm || !(0, am.f)(mm.icon)) return void(wm += "string" === typeof mm ? mm : mm.icon);
                              const Am = Math.max(0, wm.trimEnd().search(/\S{1,12}$/));
                              fm.push((0, xm.jsxs)(hm.Fragment, {
                                children: [wm.slice(0, Am), (0, xm.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [wm.slice(Am), (0, xm.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": mm.icon,
                                    children: (0, xm.jsx)(am.d, {
                                      itemName: mm.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, Tm)), wm = ""
                            })), fm.push(wm), (0, xm.jsx)(xm.Fragment, {
                              children: fm
                            })
                          }
                        }, 4704: (mm, Tm, fm) => {
                          fm.d(Tm, {
                            f: () => Vm,
                            c: () => jm
                          });
                          var hm = fm(59),
                            Am = fm(1449),
                            am = fm(1884),
                            xm = fm(4711),
                            wm = fm(1135);
                          const Dm = (0, hm.memo)((function(mm) {
                            let {
                              initialParameters: Tm
                            } = mm;
                            const fm = (0, hm.useRef)(null),
                              Am = (0, hm.useRef)(null),
                              Dm = (0, hm.useRef)(0),
                              im = (0, hm.useRef)(null),
                              Rm = Tm.description,
                              pm = Tm.Hf,
                              {
                                scale: Em,
                                rotation: om
                              } = null !== Tm && void 0 !== Tm ? Tm : {},
                              Om = (0, xm.c)();
                            return (0, hm.useEffect)((() => {
                              const mm = Om.onFrame((() => {
                                const mm = Om.getState();
                                if (!mm.isActive || !fm.current || !Am.current) return;
                                const Tm = mm.state;
                                if (fm.current.value = Tm.progress, Tm.clickCount > Dm.current) {
                                  Dm.current = Tm.clickCount;
                                  const mm = Am.current;
                                  mm.classList.add("pulse"), im.current = setTimeout((() => {
                                    mm.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(im.current), mm()
                              }
                            }), [Om]), (0, wm.jsx)(wm.Fragment, {
                              children: (0, wm.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Em && {
                                    "--scale": Em
                                  },
                                  ...null !== om && {
                                    "--rotation": `${om}deg`
                                  }
                                },
                                children: [(0, wm.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: fm
                                }), (0, wm.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Am,
                                  children: (0, wm.jsx)(am.b, {
                                    text: [{
                                      icon: pm
                                    }]
                                  })
                                }), (0, wm.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, wm.jsx)(am.b, {
                                    text: Rm
                                  })
                                })]
                              })
                            })
                          }));
                          var im = fm(1080),
                            Rm = fm.n(im);
                          const pm = 2 * Math.PI * 90,
                            Em = (0, hm.memo)((function(mm) {
                              let {
                                initialParameters: Tm
                              } = mm;
                              const fm = (0, hm.useRef)(null),
                                Am = (0, hm.useRef)(null),
                                Dm = (0, hm.useRef)(null),
                                im = Tm.label,
                                Em = Tm.icon,
                                om = Tm.rf,
                                {
                                  scale: Om,
                                  rotation: Ym,
                                  sf: qm
                                } = null !== Tm && void 0 !== Tm ? Tm : {},
                                jm = (0, xm.c)();
                              return (0, hm.useEffect)((() => {
                                const mm = jm.onFrame((() => {
                                  var mm, Tm;
                                  const hm = jm.getState();
                                  if (!hm.isActive || !Am.current) return;
                                  const am = hm.state,
                                    xm = null !== (mm = am.timeRemaining) && void 0 !== mm ? mm : 0,
                                    wm = null !== (Tm = am.Cf) && void 0 !== Tm ? Tm : 1,
                                    im = pm * (1 - xm / wm);
                                  Am.current.style.strokeDashoffset = `${im}`, fm.current && (fm.current.style.opacity = xm > 0 ? "1" : "0"), Dm.current && om && (Dm.current.textContent = `${(xm/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  mm()
                                }
                              }), [jm, om]), (0, wm.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: fm,
                                style: {
                                  ...null !== Om && {
                                    "--scale": Om
                                  },
                                  ...null !== Ym && {
                                    "--rotation": `${Ym}deg`
                                  }
                                },
                                children: [(0, wm.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, wm.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, wm.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, wm.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: pm,
                                      ref: Am
                                    })]
                                  }), (0, wm.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, wm.jsx)(am.b, {
                                      text: [{
                                        icon: Em
                                      }],
                                      className: Rm()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: qm
                                      })
                                    })
                                  })]
                                }), (0, wm.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, wm.jsx)(am.b, {
                                    text: im,
                                    className: "QTETimedClickLabelText"
                                  }), om && (0, wm.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: Dm
                                  })]
                                })]
                              })
                            })),
                            om = (0, hm.memo)((function(mm) {
                              let {
                                initialParameters: Tm
                              } = mm;
                              const fm = (0, hm.useRef)(null),
                                Am = (0, hm.useRef)(null),
                                Dm = (0, hm.useRef)(null),
                                im = (0, hm.useRef)(!1),
                                Rm = Tm.description,
                                pm = null === Tm || void 0 === Tm ? void 0 : Tm.icon,
                                Em = (0, xm.c)();
                              return (0, hm.useEffect)((() => {
                                const mm = Em.onFrame((() => {
                                  const mm = Em.getState();
                                  if (!mm.isActive) return;
                                  const Tm = mm.state;
                                  if (fm.current) {
                                    const mm = 100 * (Tm.catchZonePosition - Tm.Mf / 2);
                                    fm.current.style.left = `${mm}%`, fm.current.style.width = 100 * Tm.Mf + "%", Tm.isCatching !== im.current && (im.current = Tm.isCatching, Tm.isCatching ? fm.current.classList.add("catching") : fm.current.classList.remove("catching"))
                                  }
                                  Am.current && (Am.current.style.left = 100 * Tm.moverPosition + "%"), Dm.current && (Dm.current.value = Tm.progress)
                                }));
                                return () => {
                                  mm()
                                }
                              }), [Em]), (0, wm.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, wm.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, wm.jsx)(am.b, {
                                    text: Rm
                                  })
                                }), (0, wm.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: Dm
                                }), (0, wm.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, wm.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: fm
                                  }), (0, wm.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Am,
                                    children: (0, wm.jsx)("span", {
                                      children: pm && (0, wm.jsx)(am.b, {
                                        text: [{
                                          icon: pm,
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
                          var Om = fm(653);
                          const Ym = (0, hm.memo)((function(mm) {
                              let {
                                initialParameters: Tm
                              } = mm;
                              const fm = (0, hm.useRef)(null),
                                Am = Tm.label,
                                Dm = Tm.df,
                                {
                                  icon: im,
                                  scale: Rm,
                                  rotation: pm
                                } = null !== Tm && void 0 !== Tm ? Tm : {},
                                Em = 100 * (.5 - Dm / 2),
                                om = 100 * Dm,
                                Ym = (0, xm.c)();
                              return (0, hm.useEffect)((() => {
                                const mm = Ym.onFrame((() => {
                                  const mm = Ym.getState();
                                  if (!mm.isActive || !fm.current) return;
                                  const Tm = mm.state;
                                  fm.current.style.left = 100 * Tm.markerPosition + "%"
                                }));
                                return () => {
                                  mm()
                                }
                              }), [Ym]), (0, wm.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, Om.H)(Rm) && {
                                    "--scale": Rm
                                  },
                                  ...!(0, Om.H)(pm) && {
                                    "--rotation": `${pm}deg`
                                  }
                                },
                                children: [im && (0, wm.jsx)(am.b, {
                                  text: [{
                                    icon: im
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, wm.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, wm.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Em}%`,
                                      width: `${om}%`
                                    }
                                  }), (0, wm.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: fm
                                  })]
                                }), (0, wm.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, wm.jsx)(am.b, {
                                    text: Am
                                  })
                                })]
                              })
                            })),
                            qm = (0, hm.memo)((function(mm) {
                              let {
                                initialParameters: Tm
                              } = mm;
                              const fm = (0, hm.useRef)(null),
                                [Am, Dm] = (0, hm.useState)((() => new Array(Tm.Wf).fill("pending"))),
                                [im, Rm] = (0, hm.useState)((() => {
                                  const mm = Tm.Th;
                                  return (0, Om.H)(mm) || mm <= 0 ? [] : new Array(mm).fill("pending")
                                })),
                                pm = Tm.label,
                                {
                                  icon: Em
                                } = Tm,
                                om = (0, hm.useRef)(0),
                                Ym = (0, hm.useRef)(0),
                                qm = (0, hm.useRef)([]),
                                jm = (0, xm.c)();
                              return (0, hm.useEffect)((() => {
                                const mm = jm.onFrame((() => {
                                  const mm = jm.getState();
                                  if (!mm.isActive || !fm.current) return;
                                  const Tm = mm.state,
                                    hm = 30 + 60 * Tm.outerCircleProgress;
                                  if (fm.current.setAttribute("r", String(hm)), !0 === Tm.lastClickResult && Tm.successes > om.current) {
                                    fm.current.classList.remove("QTERhythmClickOuterCircle--miss"), fm.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const mm = setTimeout((() => {
                                      var mm;
                                      null === (mm = fm.current) || void 0 === mm || mm.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    qm.current.push(mm)
                                  } else if (!1 === Tm.lastClickResult && Tm.misses > Ym.current) {
                                    fm.current.classList.remove("QTERhythmClickOuterCircle--hit"), fm.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const mm = setTimeout((() => {
                                      var mm;
                                      null === (mm = fm.current) || void 0 === mm || mm.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    qm.current.push(mm)
                                  }
                                  Tm.successes === om.current && Tm.misses === Ym.current || (om.current = Tm.successes, Ym.current = Tm.misses, Dm((mm => {
                                    const fm = [...mm];
                                    for (let hm = 0; hm < Tm.Wf; hm++) fm[hm] = hm < Tm.successes ? "success" : "pending";
                                    return fm
                                  })), Rm((mm => {
                                    if (0 === mm.length) return mm;
                                    const fm = [...mm];
                                    for (let hm = 0; hm < fm.length; hm++) fm[hm] = hm < Tm.misses ? "miss" : "pending";
                                    return fm
                                  })))
                                }));
                                return () => {
                                  mm();
                                  for (const mm of qm.current) clearTimeout(mm);
                                  qm.current = []
                                }
                              }), [jm]), (0, wm.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, wm.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Am.map(((mm, Tm) => (0, wm.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === mm ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, Tm)))
                                }), (0, wm.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, wm.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, wm.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, wm.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: fm
                                    })]
                                  }), Em && (0, wm.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, wm.jsx)(am.b, {
                                      text: [{
                                        icon: Em
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), im.length > 0 && (0, wm.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: im.map(((mm, Tm) => (0, wm.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === mm ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, Tm)))
                                }), (0, wm.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, wm.jsx)(am.b, {
                                    text: pm
                                  })
                                })]
                              })
                            }));

                          function jm(mm) {
                            let {
                              qte: Tm
                            } = mm;
                            switch (Tm.type) {
                              case "progressBar":
                                return (0, wm.jsx)(Dm, {
                                  initialParameters: Tm.parameters
                                });
                              case "timedClick":
                                return (0, wm.jsx)(Em, {
                                  initialParameters: Tm.parameters
                                });
                              case "gravityBar":
                                return (0, wm.jsx)(om, {
                                  initialParameters: Tm.parameters
                                });
                              case "precisionBar":
                                return (0, wm.jsx)(Ym, {
                                  initialParameters: Tm.parameters
                                });
                              case "rhythmClick":
                                return (0, wm.jsx)(qm, {
                                  initialParameters: Tm.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Vm = (0, hm.memo)((function() {
                            const [mm, Tm] = (0, hm.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Am.g)("qteStateUpdated", (mm => {
                              Tm(mm)
                            })), mm.isActive && mm.type ? (0, wm.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, wm.jsx)(jm, {
                                qte: mm
                              })
                            }) : null
                          }))
                        }, 4711: (mm, Tm, fm) => {
                          fm.d(Tm, {
                            b: () => wm,
                            c: () => Dm
                          });
                          var hm = fm(59),
                            Am = fm(1296),
                            am = fm(4717);
                          const xm = {
                              getState: () => am.d.getCurrentState(),
                              onFrame: Am.l
                            },
                            wm = (0, hm.createContext)(xm);

                          function Dm() {
                            return (0, hm.useContext)(wm)
                          }
                        }, 4784: (mm, Tm, fm) => {
                          fm.d(Tm, {
                            c: () => Xm,
                            f: () => Gm
                          });
                          var hm = fm(4789),
                            Am = fm(339);
                          const am = 120,
                            xm = 260,
                            wm = 1.15,
                            Dm = 1.2,
                            im = 2,
                            Rm = 1.08,
                            pm = .8,
                            Em = .95,
                            om = 8,
                            Om = "[\"')\\]\u300d\u300f\uff09]*",
                            Ym = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Om}$`),
                            qm = new RegExp(`[?\uff1f]${Om}$`),
                            jm = new RegExp(`[!\uff01]${Om}$`),
                            Vm = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Im = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            Km = new RegExp(`[${Im}]`),
                            Qm = new RegExp(`[${Im}]|[^${Im}]+`, "g"),
                            nm = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Jm(mm) {
                            let Tm = 2166136261;
                            for (let fm = 0; fm < mm.length; fm++) Tm ^= mm.charCodeAt(fm), Tm = Math.imul(Tm, 16777619);
                            return (Tm >>> 0) / 4294967295 * 2 - 1
                          }

                          function cm(mm) {
                            var Tm;
                            if (Km.test(mm)) return 1;
                            const fm = mm.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              hm = fm.replace(/[^0-9]/g, "");
                            if (hm.length > 0 && !/\p{L}/u.test(fm)) return Math.min(hm.length, 4);
                            const Am = null !== (Tm = fm.match(nm)) && void 0 !== Tm ? Tm : [];
                            if (0 === Am.length) {
                              var am, xm;
                              const mm = null !== (am = null === (xm = fm.match(/\p{L}/gu)) || void 0 === xm ? void 0 : xm.length) && void 0 !== am ? am : 0;
                              return 0 === mm ? 0 : Math.min(Math.max(1, Math.round(mm / 2.5)), om)
                            }
                            const wm = fm.replace(/[^\p{L}]/gu, ""),
                              Dm = Am.length > 1 && "e" === Am.at(-1) && wm.endsWith("e") && !wm.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(mm.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Am.length - (Dm ? 1 : 0), om)
                          }

                          function zm(mm) {
                            return mm.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Zm(mm) {
                            const Tm = mm.replace(/[^\p{L}]/gu, "");
                            return Tm.length >= 2 && Tm === Tm.toUpperCase() && Tm !== Tm.toLowerCase()
                          }

                          function km(mm, Tm) {
                            var fm;
                            const om = Tm && (0, hm.g)(Tm),
                              Om = null !== (fm = null === om || void 0 === om ? void 0 : om.syllableMs) && void 0 !== fm ? fm : hm.d,
                              Im = function(mm) {
                                const Tm = [];
                                for (const hm of (0, Am.Zb)(mm))
                                  if ("string" === typeof hm)
                                    for (const mm of hm.split(/(\s+)/)) {
                                      if ("" === mm) continue;
                                      if (/^\s+$/.test(mm)) {
                                        Tm.push({
                                          kind: "space",
                                          text: mm
                                        });
                                        continue
                                      }
                                      if (!Km.test(mm)) {
                                        Tm.push({
                                          kind: "word",
                                          text: mm,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let hm = !0;
                                      for (const Am of null !== (fm = mm.match(Qm)) && void 0 !== fm ? fm : []) {
                                        var fm;
                                        const mm = Tm.at(-1);
                                        hm || "word" !== (null === mm || void 0 === mm ? void 0 : mm.kind) || Km.test(Am) || /[\p{L}\p{N}]/u.test(Am) ? (hm || Tm.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), Tm.push({
                                          kind: "word",
                                          text: Am,
                                          delayMs: 0
                                        }), hm = !1) : mm.text += Am
                                      }
                                    } else Tm.push({
                                      kind: "icon",
                                      text: hm.icon,
                                      delayMs: 0
                                    });
                                return Tm
                              }(mm),
                              nm = [];
                            let km = [];
                            for (const hm of Im) "space" !== hm.kind && (km.push(hm), Ym.test(hm.text) && (nm.push(km), km = []));
                            nm.push(km);
                            const bm = [];
                            let Sm = 0;
                            for (const hm of nm) {
                              var em, Nm;
                              const mm = null !== (em = null === (Nm = hm.at(-1)) || void 0 === Nm ? void 0 : Nm.text) && void 0 !== em ? em : "",
                                Tm = qm.test(mm),
                                fm = jm.test(mm),
                                Am = hm.map((mm => "word" === mm.kind ? cm(mm.text) : 1)),
                                Im = Am.findLastIndex((mm => mm > 0));
                              for (const [qm, jm] of hm.entries()) {
                                const mm = "word" === jm.kind,
                                  hm = Am[qm];
                                jm.delayMs = Sm;
                                for (let Am = 0; om && Am < hm; Am++) {
                                  const {
                                    intonation: am
                                  } = om;
                                  let xm = Im > 0 ? -am.declineSemitones * (qm / Im) : 0;
                                  xm += Jm(`${zm(jm.text)}|${Am}`) * am.variationSemitones;
                                  const Ym = Math.min(1, am.variationSemitones);
                                  let Vm = om.glideSemitones,
                                    Km = 1;
                                  fm && (xm += am.exclaimLiftSemitones, Km *= wm), Tm && qm === Im && (xm += am.questionRiseSemitones * (hm > 1 ? .5 + .5 * Am / (hm - 1) : 1), Am === hm - 1 && (Vm = Math.abs(Vm) + am.questionRiseSemitones / 2)), mm && Zm(jm.text) && (xm += im * Ym, Km *= Dm), hm > 1 && 0 === Am && (xm += pm * Ym, Km *= Rm), bm.push({
                                    atMs: Sm + Am * Om,
                                    semitones: xm,
                                    glideSemitones: Vm,
                                    durationMs: Am < hm - 1 ? Math.min(om.durationMs, Om * Em) : om.durationMs,
                                    level: Km
                                  })
                                }
                                Sm += hm * Om + (Ym.test(jm.text) ? xm : Vm.test(jm.text) ? am : 0)
                              }
                            }
                            return {
                              pieces: Im.map((mm => "space" === mm.kind ? mm : "icon" === mm.kind ? {
                                kind: "icon",
                                icon: mm.text,
                                delayMs: mm.delayMs
                              } : {
                                kind: "word",
                                text: mm.text,
                                delayMs: mm.delayMs
                              })),
                              blips: bm
                            }
                          }
                          var bm = fm(1208),
                            Sm = fm(1259),
                            em = fm(1912);

                          function Nm(mm) {
                            if ("string" === typeof mm) return mm;
                            const Tm = Sm.e.get().getCurrentLanguageCode();
                            return (0, bm.t)(Tm, mm.translationKey, (0, bm.r)(mm.params, em.e.shown))
                          }

                          function Gm(mm) {
                            const Tm = void 0 === mm.voice ? null : (0, hm.k)(mm.voice),
                              fm = Tm && (0, hm.g)(Tm);
                            return {
                              plan: km(Nm(mm.line), fm),
                              synth: fm
                            }
                          }

                          function Xm(mm) {
                            const Tm = [];
                            let fm = [];
                            for (const [Am, am] of mm.entries()) {
                              var hm;
                              "space" === am.kind && (" " !== am.text || "icon" !== (null === (hm = mm[Am + 1]) || void 0 === hm ? void 0 : hm.kind)) ? (fm.length > 0 && Tm.push(fm), Tm.push([am]), fm = []) : fm.push(am)
                            }
                            return fm.length > 0 && Tm.push(fm), Tm
                          }
                        }, 4796: (mm, Tm, fm) => {
                          fm.d(Tm, {
                            c: () => Rm,
                            e: () => pm
                          });
                          var hm = fm(4800),
                            Am = fm(23);
                          const am = .25,
                            xm = .85,
                            wm = .02,
                            Dm = .01;

                          function im(mm, Tm, fm, hm, Am, am, wm) {
                            const {
                              waveform: Dm,
                              pitchHz: im,
                              attackMs: Rm,
                              releaseMs: pm,
                              lowpassHz: Em
                            } = fm, om = Am + hm.durationMs / 1e3, Om = im * 2 ** (hm.semitones / 12), Ym = mm.createOscillator();
                            Ym.type = Dm, Ym.frequency.setValueAtTime(Om, Am), Ym.frequency.exponentialRampToValueAtTime(Om * 2 ** (hm.glideSemitones / 12), om);
                            const qm = Am + Math.min(Rm, hm.durationMs) / 1e3,
                              jm = mm.createGain();
                            jm.gain.setValueAtTime(0, Am), jm.gain.linearRampToValueAtTime(am, qm), jm.gain.linearRampToValueAtTime(am * xm, Math.max(qm, om - pm / 1e3)), jm.gain.linearRampToValueAtTime(0, om);
                            const Vm = [Ym];
                            if (null !== Em) {
                              const Tm = mm.createBiquadFilter();
                              Tm.type = "lowpass", Tm.frequency.value = Em, Vm.push(Tm)
                            }
                            Vm.push(jm, Tm);
                            for (let xm = 1; xm < Vm.length; xm++) Vm[xm - 1].connect(Vm[xm]);
                            return Ym.onended = () => {
                              for (const mm of Vm.slice(0, -1)) mm.disconnect();
                              wm()
                            }, Ym.start(Am), Ym.stop(om), Ym
                          }

                          function Rm(mm, Tm, fm, hm, Am, xm) {
                            if (0 === hm.length) return xm(), () => {};
                            const Rm = am * fm.volume * Am,
                              pm = mm.createGain();
                            pm.connect(Tm);
                            const Em = mm.currentTime + wm,
                              om = new Set;
                            for (const am of hm) {
                              const Tm = im(mm, pm, fm, am, Em + am.atMs / 1e3, Rm * am.level, (() => {
                                om.delete(Tm), 0 === om.size && (pm.disconnect(), xm())
                              }));
                              om.add(Tm)
                            }
                            return () => {
                              const Tm = mm.currentTime;
                              pm.gain.setTargetAtTime(0, Tm, Dm);
                              for (const mm of om) try {
                                mm.stop(Tm + 5 * Dm)
                              } catch {}
                            }
                          }

                          function pm(mm, Tm) {
                            var fm;
                            const am = hm.Howler.ctx,
                              xm = hm.Howler.masterGain;
                            if (!am || !xm || !Am.c.get("soundOnFromAd")) return () => {};
                            const wm = hm.Howler;
                            return null === (fm = wm._autoResume) || void 0 === fm || fm.call(wm), Rm(am, xm, mm, Tm, Am.c.get("soundVolume"), (() => {
                              var mm;
                              null === (mm = wm._autoSuspend) || void 0 === mm || mm.call(wm)
                            }))
                          }
                        }, 4800: (mm, Tm, fm) => {
                          fm.r(Tm), fm.d(Tm, {
                            Howl: () => Am.Howl,
                            Howler: () => Am.Howler,
                            musicOutput: () => qm,
                            readyAudioContext: () => jm
                          });
                          var hm, Am = fm(4806),
                            am = fm(3443),
                            xm = fm(4588);
                          const wm = Am.Howler;

                          function Dm() {
                            var mm, Tm;
                            if (wm.ctx || !wm.usingWebAudio || "undefined" === typeof AudioContext || !(0, xm.k)()) return;
                            const fm = navigator.audioSession;
                            let hm;
                            "auto" === (null === fm || void 0 === fm ? void 0 : fm.type) && (fm.type = "ambient");
                            try {
                              hm = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Am = hm.createGain();
                            Am.gain.setValueAtTime(wm._muted ? 0 : null !== (mm = wm._volume) && void 0 !== mm ? mm : 1, hm.currentTime), Am.connect(hm.destination), wm.ctx = hm, wm.masterGain = Am, null === (Tm = wm._setup) || void 0 === Tm || Tm.call(wm)
                          }
                          wm._mobileUnloaded = !0;
                          const im = wm.volume.bind(Am.Howler);
                          wm.volume = function() {
                            return Dm(), im(...arguments)
                          };
                          const Rm = wm.mute.bind(Am.Howler);
                          wm.mute = mm => (Dm(), Rm(mm));
                          const pm = Am.Howl.prototype,
                            Em = pm.init;

                          function om() {
                            for (; wm._html5AudioPool.length < wm.html5PoolSize;) {
                              const mm = new Audio;
                              mm._unlocked = !0, wm._releaseHtml5Audio(mm)
                            }
                            for (const Tm of wm._howls)
                              if (!Tm._webAudio)
                                for (const fm of Tm._getSoundIds()) {
                                  var mm;
                                  const hm = null === (mm = Tm._soundById(fm)) || void 0 === mm ? void 0 : mm._node;
                                  hm && !hm._unlocked && (hm._unlocked = !0, hm.load())
                                }
                          }
                          pm.init = function(mm) {
                            return Dm(), Em.call(this, mm)
                          }, (0, xm.k)() && (wm._unlockAudio = () => {
                            const mm = wm.ctx;
                            if (wm._audioUnlocked || !mm) return;
                            wm.autoUnlock = !1;
                            const Tm = mm.createBuffer(1, 1, 22050);
                            wm._scratchBuffer = Tm;
                            const fm = new AbortController;
                            let hm = "afterPaint";
                            const Am = () => {
                                var hm;
                                if (wm._audioUnlocked) return;
                                null === (hm = wm._autoResume) || void 0 === hm || hm.call(wm);
                                const Am = mm.createBufferSource();
                                Am.buffer = Tm, Am.connect(mm.destination), Am.start(0), mm.resume().catch((() => {})), Am.onended = () => {
                                  Am.disconnect(0), wm._audioUnlocked = !0, fm.abort();
                                  for (const mm of wm._howls) mm._emit("unlock")
                                }
                              },
                              Dm = () => {
                                om(), Am()
                              },
                              im = Tm => {
                                if (om(), "inTap" === hm) {
                                  if ("running" === mm.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Am()
                                } else "afterPaint" === hm && (hm = "queued", (0, am.c)(Tm.timeStamp, (() => {
                                  hm = "inTap", Am()
                                })))
                              };
                            for (const am of ["touchstart", "touchend"]) document.addEventListener(am, Dm, {
                              capture: !0,
                              signal: fm.signal
                            });
                            for (const am of xm.c) document.addEventListener(am, im, {
                              capture: !0,
                              signal: fm.signal
                            })
                          });
                          let Om = 0;
                          const Ym = null === (hm = wm._autoSuspend) || void 0 === hm ? void 0 : hm.bind(Am.Howler);

                          function qm() {
                            jm();
                            const {
                              ctx: mm,
                              masterGain: Tm
                            } = wm;
                            return mm && Tm ? {
                              ctx: mm,
                              destination: Tm,
                              holdAwake: mm => {
                                var Tm, fm;
                                (Om += mm ? 1 : -1, mm) ? null === (Tm = wm._autoResume) || void 0 === Tm || Tm.call(wm): null === (fm = wm._autoSuspend) || void 0 === fm || fm.call(wm)
                              },
                              wake: () => {
                                var Tm;
                                "running" !== mm.state && (null === (Tm = wm._autoResume) || void 0 === Tm || Tm.call(wm), mm.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function jm() {
                            var mm;
                            (wm.volume(), wm.ctx && wm.autoUnlock) && (null === (mm = wm._unlockAudio) || void 0 === mm || mm.call(wm))
                          }
                          Ym && (wm._autoSuspend = () => Om > 0 ? Am.Howler : Ym())
                        }, 4809: (mm, Tm, fm) => {
                          function hm(mm) {
                            return {
                              notAfter: mm
                            }
                          }
                          fm.d(Tm, {
                            c: () => Dm,
                            g: () => im,
                            j: () => wm,
                            l: () => hm,
                            n: () => Am,
                            p: () => am,
                            q: () => xm,
                            s: () => Rm,
                            w: () => pm
                          });
                          const Am = hm("\\w$."),
                            am = hm("\\w.,");

                          function xm(mm) {
                            return Tm => Dm(Tm, mm)
                          }

                          function wm(mm) {
                            return Tm => !mm.test(Tm.input.slice(0, Tm.index))
                          }

                          function Dm(mm, Tm) {
                            return mm.index > 0 && new RegExp(`[${Tm}]`).test(mm.input[mm.index - 1])
                          }

                          function im(mm, Tm, fm) {
                            return function(mm) {
                              return void 0 !== mm && "function" !== typeof mm
                            }(fm) ? function(mm, Tm, fm) {
                              const hm = Tm.flags.replace(/[gy]/g, ""),
                                Am = new RegExp(`[^${fm}](?:${Tm.source})`, `${hm}g`),
                                am = [],
                                xm = fm => {
                                  const hm = fm.index + fm[0].length;
                                  return ("" === fm[0] ? Em(mm, Tm, hm) : hm) - 1
                                },
                                wm = new RegExp(`(?:${Tm.source})`, `${hm}y`).exec(mm);
                              if (wm) {
                                if (am.push(wm), !Tm.global) return am;
                                Am.lastIndex = xm(wm)
                              }
                              for (let Dm = Am.exec(mm); Dm; Dm = Am.exec(mm)) {
                                const fm = Em(mm, Tm, Dm.index) - Dm.index;
                                if (Dm[0] = Dm[0].slice(fm), Dm.index += fm, am.push(Dm), !Tm.global) break;
                                Am.lastIndex = xm(Dm)
                              }
                              return am
                            }(mm, Tm, fm.notAfter) : function(mm, Tm, fm) {
                              const hm = new RegExp(Tm.source, `${Tm.flags.replace(/[gy]/g,"")}g`),
                                Am = [];
                              for (let am = hm.exec(mm); am; am = hm.exec(mm))
                                if (!fm || fm(am)) {
                                  if (Am.push(am), !Tm.global) break;
                                  "" === am[0] && (hm.lastIndex = Em(mm, Tm, hm.lastIndex))
                                } else hm.lastIndex = Em(mm, Tm, am.index);
                              return Am
                            }(mm, Tm, fm)
                          }

                          function Rm(mm, Tm, fm, hm) {
                            let Am = "",
                              am = 0;
                            for (const xm of im(mm, Tm, fm)) Am += mm.slice(am, xm.index) + hm(xm), am = xm.index + xm[0].length;
                            return Am + mm.slice(am)
                          }

                          function pm(mm, Tm, fm) {
                            const hm = [];
                            let Am = 0;
                            for (const am of im(mm, Tm, fm)) hm.push(mm.slice(Am, am.index)), Am = am.index + am[0].length;
                            return [...hm, mm.slice(Am)]
                          }

                          function Em(mm, Tm, fm) {
                            var hm;
                            return fm + (Tm.unicode && (null !== (hm = mm.codePointAt(fm)) && void 0 !== hm ? hm : 0) > 65535 ? 2 : 1)
                          }
                        }, 4767: (mm, Tm, fm) => {
                          fm.d(Tm, {
                            d: () => Am,
                            e: () => Dm,
                            h: () => am,
                            i: () => xm,
                            l: () => wm,
                            m: () => qm,
                            q: () => Rm,
                            t: () => pm,
                            u: () => Ym,
                            y: () => om
                          });
                          var hm = fm(1589);
                          const Am = 24e3,
                            am = "/docs/llms.txt",
                            xm = `${hm.b}${am}`,
                            wm = "/llms.txt",
                            Dm = "/docs/llms-full.txt";

                          function im(mm) {
                            return mm || "index"
                          }

                          function Rm(mm) {
                            return `/docs/${im(mm)}.md`
                          }

                          function pm(mm, Tm) {
                            return `/docs/${im(mm)}/${Tm+1}.md`
                          }
                          const Em = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function om(mm) {
                            const Tm = Em.exec(mm);
                            return null === Tm ? null : {
                              name: Tm[1],
                              part: void 0 === Tm[2] ? null : Number(Tm[2])
                            }
                          }
                          const Om = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Ym(mm) {
                            const Tm = Om.exec(mm);
                            if (null === Tm) return null;
                            const [, fm = "", hm] = Tm;
                            return void 0 === hm ? Rm(fm) : pm(fm, Number(hm) - 1)
                          }

                          function qm(mm) {
                            return `/docsHtml/${im(mm)}.html`
                          }
                        }, 4789: (mm, Tm, fm) => {
                          fm.d(Tm, {
                            d: () => Am,
                            e: () => hm,
                            f: () => am,
                            g: () => Dm,
                            k: () => xm
                          });
                          const hm = ["sine", "triangle", "square", "sawtooth"],
                            Am = 55,
                            am = {
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

                          function xm(mm) {
                            return "string" !== typeof mm ? mm : Object.hasOwn(am, mm) ? am[mm] : null
                          }

                          function wm(mm, Tm, fm) {
                            return Math.min(fm, Math.max(Tm, mm))
                          }

                          function Dm(mm) {
                            const Tm = wm(mm.durationMs, 10, 500),
                              fm = wm(mm.attackMs, 0, Tm),
                              {
                                intonation: Am
                              } = mm;
                            return {
                              waveform: hm.includes(mm.waveform) ? mm.waveform : "sine",
                              pitchHz: wm(mm.pitchHz, 20, 4e3),
                              glideSemitones: wm(mm.glideSemitones, -24, 24),
                              durationMs: Tm,
                              attackMs: fm,
                              releaseMs: wm(mm.releaseMs, 0, Tm - fm),
                              lowpassHz: null === mm.lowpassHz ? null : wm(mm.lowpassHz, 20, 2e4),
                              volume: wm(mm.volume, 0, 2),
                              intonation: {
                                variationSemitones: wm(Am.variationSemitones, 0, 6),
                                declineSemitones: wm(Am.declineSemitones, 0, 12),
                                questionRiseSemitones: wm(Am.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: wm(Am.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: wm(mm.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const mm in modules) Object.freeze(modules[mm]);