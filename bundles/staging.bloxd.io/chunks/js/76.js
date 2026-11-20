export const id = 76;
export const ids = [76, 92];
export const modules = {
    4574: (vv, zv, Pv) => {
      Pv.d(zv, {
        b: () => Cv,
        f: () => iv
      });
      var hv = Pv(1035),
        Sv = Pv.n(hv),
        ev = Pv(52),
        gv = Pv(1175),
        pv = Pv(4582),
        dv = Pv(1858),
        Nv = Pv(2324),
        lv = Pv(4589),
        Tv = Pv(1082);
      const Wv = new WeakMap;
      let wv = 0;

      function av(vv) {
        let zv = Wv.get(vv);
        return void 0 === zv && (zv = wv++, Wv.set(vv, zv)), zv
      }

      function sv(vv) {
        let {
          piece: zv
        } = vv;
        return "space" === zv.kind ? (0, Tv.jsx)(Tv.Fragment, {
          children: zv.text
        }) : (0, Tv.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${zv.delayMs}ms`
          },
          children: (0, Tv.jsx)(pv.c, {
            text: "icon" === zv.kind ? `[[${zv.icon}]]` : zv.text
          })
        })
      }

      function Cv(vv) {
        let {
          display: zv
        } = vv;
        const {
          selectedLanguage: Pv
        } = (0, gv.x)(), hv = (0, ev.useMemo)((() => (0, lv.d)((0, lv.e)(zv).plan.pieces)), [zv, Pv.code]);
        return (0, Tv.jsxs)("div", {
          className: Sv()("Dialogue", {
            DialogueAnimateIn: !1 !== zv.animateIn
          }),
          children: [zv.speakerName && (0, Tv.jsx)(dv.c, {
            text: zv.speakerName,
            className: "DialogueSpeaker"
          }), (0, Tv.jsx)("p", {
            className: "DialogueLine",
            children: hv.map(((vv, zv) => 1 === vv.length && "space" === vv[0].kind ? vv[0].text : (0, Tv.jsx)("span", {
              className: "DialogueGlue",
              children: vv.map(((vv, zv) => (0, Tv.jsx)(sv, {
                piece: vv
              }, zv)))
            }, zv)))
          })]
        })
      }
      const iv = (0, ev.memo)((function() {
        const vv = (0, Nv.i)("dialogue");
        return (0, Tv.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: vv && (0, Tv.jsx)(Cv, {
            display: vv
          }, av(vv))
        })
      }))
    },
    4463: (vv, zv, Pv) => {
        Pv.r(zv), Pv.d(zv, {
          default: () => Xe
        });
        var hv = Pv(52),
          Sv = Pv(1035),
          ev = Pv.n(Sv),
          gv = Pv(1496),
          pv = Pv(1505),
          dv = Pv(22),
          Nv = Pv(62),
          lv = Pv(4465),
          Tv = Pv(4474),
          Wv = Pv(4483),
          wv = Pv(4123),
          av = Pv(1082);
        const sv = "/textures/docs/icons";

        function Cv(vv) {
          let {
            name: zv,
            isTinted: Pv,
            className: hv,
            style: Sv
          } = vv;
          const gv = `${sv}/${zv}.png`;
          return Pv ? (0, av.jsxs)("span", {
            className: ev()("DocsPixelIcon", "Tinted", hv),
            "aria-hidden": "true",
            style: Sv,
            children: [(0, av.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${gv}")`,
                WebkitMaskImage: `url("${gv}")`
              }
            }), (0, av.jsx)("img", {
              src: gv,
              alt: ""
            })]
          }) : (0, av.jsx)("img", {
            className: ev()("DocsPixelIcon", hv),
            src: gv,
            alt: "",
            "aria-hidden": "true",
            style: Sv
          })
        }
        const iv = 1500;

        function cv() {
          const [vv, zv] = (0, hv.useState)(null);
          (0, hv.useEffect)((() => {
            if (null === vv) return;
            const Pv = setTimeout((() => {
              zv(null)
            }), iv);
            return () => {
              clearTimeout(Pv)
            }
          }), [vv]);
          return [vv, vv => {
            (0, wv.b)(vv).then((() => {
              zv({
                text: vv,
                failed: !1
              })
            }), (Pv => {
              console.error("Could not copy to the clipboard", Pv), zv({
                text: vv,
                failed: !0
              })
            }))
          }]
        }

        function Gv(vv) {
          let {
            text: zv,
            label: Pv,
            className: hv
          } = vv;
          const [Sv, gv] = cv(), pv = !1 === (null === Sv || void 0 === Sv ? void 0 : Sv.failed);
          return (0, av.jsxs)("button", {
            type: "button",
            className: ev()("DocsCopyButton", hv, {
              Copied: pv
            }),
            title: `Copy ${zv.length>40?"to clipboard":zv}`,
            "aria-label": Pv ? void 0 : `Copy ${zv}`,
            onClick: vv => {
              vv.stopPropagation(), gv(zv)
            },
            children: [(0, av.jsx)(Cv, {
              name: pv ? "check" : "copy"
            }), Pv && (0, av.jsx)("span", {
              children: pv ? "Copied" : null !== Sv && void 0 !== Sv && Sv.failed ? "Copy failed" : Pv
            })]
          })
        }
        lv.c.registerLanguage("javascript", Tv.c), lv.c.registerLanguage("typescript", Wv.e);
        const mv = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          jv = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          fv = 24;

        function Fv(vv) {
          let {
            code: zv,
            lang: Pv,
            compact: Sv = !1
          } = vv;
          const gv = (0, hv.useMemo)((() => function(vv, zv) {
              const Pv = mv[zv];
              return Pv ? lv.c.highlight(vv, {
                language: Pv
              }).value : vv.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(zv, Pv)), [zv, Pv]),
            pv = zv.split("\n").length,
            dv = !Sv && pv > fv + 6,
            [Nv, Tv] = (0, hv.useState)(!1),
            Wv = mv[Pv];
          return (0, av.jsxs)("div", {
            className: ev()("DocsCodeBlock", {
              Compact: Sv,
              Collapsed: dv && !Nv
            }),
            children: [!Sv && (0, av.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, av.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Wv ? jv[Wv] : "Text"
              }), (0, av.jsx)(Gv, {
                text: zv,
                label: "Copy"
              })]
            }), (0, av.jsx)("pre", {
              children: (0, av.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: gv
                }
              })
            }), dv && (0, av.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Nv,
              onClick: () => {
                Tv(!Nv)
              },
              children: [(0, av.jsx)(Cv, {
                name: Nv ? "chevron-up" : "chevron-down"
              }), Nv ? "Show less" : `Show all ${pv} lines`]
            })]
          })
        }
        var Yv = Pv(4491);
        var nv = Pv(4493);
        const Ov = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Dv(vv) {
          const zv = new Map;
          let Pv, hv = [],
            Sv = !1;
          const ev = () => {
            Pv && zv.set(Pv.name, Pv.lines.join("\n").trimEnd())
          };
          for (const gv of vv.split("\n")) {
            const vv = gv.match(Ov);
            Sv || gv.startsWith("/*") ? (Sv || (ev(), Pv = void 0), hv.push(gv), Sv = !gv.includes("*/")) : vv ? (ev(), Pv = {
              name: vv[1],
              lines: [...hv, gv]
            }, hv = []) : Pv && (gv.startsWith(" ") || gv.startsWith("\t") || /^[}\])|]/.test(gv)) ? Pv.lines.push(gv) : Pv && "" !== gv.trim() && (ev(), Pv = void 0)
          }
          return ev(), zv
        }

        function Kv(vv) {
          return "methods" === vv || "callbacks" === vv || "settings" === vv
        }
        const Vv = {
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
              setterSnippet: (vv, zv) => `api.setClientOption(playerId, "${vv}", ${zv})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (vv, zv) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${vv}", ${zv})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (vv, zv) => `api.setMobSetting(mobId, "${vv}", ${zv})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (vv, zv) => `api.setVehicleSetting(vehicleId, "${vv}", ${zv})`
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
          Uv = {
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

        function Rv(vv) {
          return vv.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function xv(vv) {
          let zv = !1;
          return vv.split("\n").map((vv => (vv.startsWith("```") && (zv = !zv), !zv && /^#{3,} /.test(vv) ? vv.slice(1) : vv))).join("\n")
        }

        function tv(vv) {
          return "readme" === vv ? "getting-started" : Rv(vv)
        }
        const qv = "## Glossary of Referenced Types";
        const Iv = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...nv.d.flatMap((vv => {
            const zv = {
              id: vv.id,
              slug: tv(vv.id),
              title: vv.title,
              markdown: vv.content,
              ...Vv[vv.id]
            };
            if ("readme" === vv.id) return function(vv) {
              const zv = vv.markdown.indexOf(qv),
                Pv = vv.markdown.indexOf("\n```", zv),
                hv = vv.markdown.indexOf("\n```", Pv + 1);
              if (-1 === zv || -1 === Pv || -1 === hv) throw new Error(`Getting started has no "${qv}" section with a code block`);
              const Sv = vv.markdown.slice(zv + 31, Pv).trim(),
                ev = [...Dv(vv.markdown.slice(vv.markdown.indexOf("\n", Pv + 1) + 1, hv))].map((vv => {
                  let [zv, Pv] = vv;
                  return `## ${zv}\n\n\`\`\`ts\n${Pv}\n\`\`\`\n`
                })),
                gv = vv.markdown.slice(vv.markdown.indexOf("\n", hv + 1) + 1);
              return [{
                ...vv,
                markdown: `${vv.markdown.slice(0,zv)}${gv}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Sv}\n\n${ev.join("\n")}`
              }]
            }(zv);
            if ("howTo" === vv.id) {
              const {
                parent: vv,
                guides: Pv
              } = function(vv) {
                const [zv, ...Pv] = vv.markdown.split(/^(?=## )/m), hv = [zv], Sv = [];
                for (const gv of Pv) {
                  var ev;
                  const zv = gv.indexOf("\n"),
                    Pv = gv.slice(3, zv).trim(),
                    pv = gv.slice(zv + 1);
                  if (!pv.includes("```")) {
                    hv.push(gv);
                    continue
                  }
                  const dv = null !== (ev = Uv[Pv]) && void 0 !== ev ? ev : {
                    icon: "lightbulb",
                    summary: `How to use ${Pv.toLowerCase()} in World Code.`
                  };
                  Sv.push({
                    id: `${vv.id}${Pv.split(/[^A-Za-z0-9]+/).map((vv=>vv.charAt(0).toUpperCase()+vv.slice(1))).join("")}`,
                    slug: `${vv.slug}-${Rv(Pv)}`,
                    title: Pv,
                    layout: "article",
                    sourceAnchor: (0, Yv.r)(Pv),
                    markdown: `# ${Pv}\n\n${xv(pv)}`,
                    ...dv
                  })
                }
                return {
                  parent: {
                    ...vv,
                    markdown: hv.join(""),
                    childPageIds: Sv.map((vv => vv.id))
                  },
                  guides: Sv
                }
              }(zv);
              return [vv, ...Pv]
            }
            return [zv]
          }))],
          Qv = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Iv.filter((vv => void 0 !== vv.sourceAnchor)).map((vv => vv.id))]
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

        function Zv(vv) {
          return Iv.find((zv => zv.id === vv))
        }
        const Av = new Map;

        function Lv(vv) {
          let zv = Av.get(vv.id);
          return zv || (zv = (0, Yv.y)(vv.markdown, "changelog" === vv.layout ? 3 : 2), Av.set(vv.id, zv)), zv
        }

        function Hv(vv, zv) {
          return Lv(vv).sections.some((vv => vv.heading.anchor === zv || vv.blocks.some((vv => "heading" === vv.kind && vv.anchor === zv))))
        }

        function Mv(vv) {
          const [zv, ...Pv] = vv.replace(/^#/, "").split("-"), hv = Iv.find((vv => vv.id === zv));
          if (!hv) return null;
          const Sv = Pv.length > 0 ? (0, Yv.r)(Pv.join("-")) : "";
          for (const gv of null !== (ev = hv.childPageIds) && void 0 !== ev ? ev : []) {
            var ev;
            const vv = Zv(gv);
            if (vv.sourceAnchor === Sv) return {
              page: vv,
              anchor: ""
            };
            if (Hv(vv, Sv)) return {
              page: vv,
              anchor: Sv
            }
          }
          return {
            page: hv,
            anchor: Sv
          }
        }
        const yv = {
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

        function Bv(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const hv = zv.slug ? `${vv}/${zv.slug}` : vv;
          return Pv ? `${hv}#${Pv}` : hv
        }
        var Jv = Pv(4503);
        const Ev = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          ov = new Set(["GameApi", "Console", "_TypeOf"]),
          bv = 4;

        function rv(vv) {
          let zv = vv.length;
          for (; zv > 0 && "" === vv[zv - 1].trim();) zv--;
          return vv.slice(0, zv)
        }

        function kv(vv) {
          var zv;
          const Pv = rv(vv);
          if (null === (zv = Pv.at(-1)) || void 0 === zv || !zv.trimEnd().endsWith("*/")) return {
            lines: Pv,
            doc: ""
          };
          const hv = Pv.findLastIndex((vv => vv.startsWith("/**")));
          return -1 === hv ? {
            lines: Pv,
            doc: ""
          } : {
            lines: rv(Pv.slice(0, hv)),
            doc: Pv.slice(hv).join("\n")
          }
        }

        function Xv(vv) {
          var zv;
          const Pv = vv.split("\n"),
            hv = Pv.flatMap(((vv, zv) => Ev.test(vv) ? [zv] : []));
          let Sv = kv(Pv.slice(0, null !== (zv = hv[0]) && void 0 !== zv ? zv : Pv.length)).doc;
          return hv.map(((vv, zv) => {
            var ev;
            const gv = kv(Pv.slice(vv, null !== (ev = hv[zv + 1]) && void 0 !== ev ? ev : Pv.length)),
              pv = {
                name: Pv[vv].match(Ev)[1],
                doc: Sv,
                lines: gv.lines
              };
            return Sv = gv.doc, pv
          }))
        }

        function uv(vv) {
          var zv;
          const Pv = vv.match(/^readonly \[([\s\S]*)\]$/);
          return Pv ? null !== (zv = Pv[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== zv ? zv : [] : null
        }

        function vz(vv) {
          if (!vv.startsWith("{") || !vv.endsWith("}")) return null;
          const zv = {
              keys: [],
              values: []
            },
            Pv = vv => {
              const Pv = vv.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              Pv && (zv.keys.push(Pv[1].startsWith('"') ? Pv[1] : `"${Pv[1]}"`), zv.values.push(Pv[2].trim()))
            };
          let hv = 0,
            Sv = "";
          for (const ev of vv.slice(1, -1)) "{[(".includes(ev) ? hv++ : "}])".includes(ev) && hv--, ";" === ev && 0 === hv ? (Pv(Sv), Sv = "") : Sv += ev;
          return Pv(Sv), zv
        }

        function zz(vv) {
          return vv.length > bv ? `\n\t| ${vv.join("\n\t| ")}` : vv.join(" | ")
        }

        function Pz(vv, zv) {
          const Pv = function(vv, zv) {
            return vv.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((vv, Pv) => {
              var hv;
              const Sv = null === (hv = zv.get(Pv)) || void 0 === hv ? void 0 : hv.object;
              return Sv ? zz(Sv.values) : vv
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((vv, Pv) => {
              var hv, Sv;
              const ev = null === (hv = zv.get(Pv)) || void 0 === hv || null === (Sv = hv.object) || void 0 === Sv ? void 0 : Sv.values.map(uv);
              return null !== ev && void 0 !== ev && ev.every((vv => null !== vv)) ? zz([...new Set(ev.flat())]) : vv
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((vv, Pv) => {
              var hv;
              const Sv = null === (hv = zv.get(Pv)) || void 0 === hv ? void 0 : hv.members;
              return Sv ? zz(Sv) : vv
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((vv, Pv) => {
              var hv;
              const Sv = null === (hv = zv.get(Pv)) || void 0 === hv ? void 0 : hv.object;
              return Sv ? zz(Sv.keys) : vv
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((vv, Pv) => {
              var hv, Sv;
              return null !== (hv = null === (Sv = zv.get(Pv)) || void 0 === Sv ? void 0 : Sv.text) && void 0 !== hv ? hv : vv
            }))
          }(vv.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), zv);
          return [vv.doc, Pv].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function hz(vv) {
          const zv = Xv(vv),
            Pv = function(vv) {
              const zv = new Map,
                Pv = vv.find((vv => "_TypeOf" === vv.name));
              let hv = null;
              const Sv = () => {
                if (hv) {
                  const vv = hv.lines.join("\n");
                  zv.set(hv.name, {
                    text: vv,
                    members: uv(vv),
                    object: vz(vv)
                  })
                }
              };
              for (const ev of Pv.lines.slice(1, -1)) {
                const vv = ev.match(/^\t([\w$]+): (.+)$/);
                vv ? (Sv(), hv = {
                  name: vv[1],
                  lines: [vv[2]]
                }) : hv && hv.lines.push(ev.replace(/^\t/, ""))
              }
              return Sv(), zv
            }(zv),
            hv = new Map;
          for (const Sv of zv) ov.has(Sv.name) || hv.has(Sv.name) || hv.set(Sv.name, Pz(Sv, Pv));
          return hv
        }
        let Sz, ez, gz;

        function pz() {
          return ez ??= function(vv) {
            const zv = Xv(vv).find((vv => "GameApi" === vv.name)),
              Pv = new Map,
              hv = zv.lines;
            for (let ev = 0; ev < hv.length; ev++) {
              var Sv;
              if (!hv[ev].trimStart().startsWith("/**")) continue;
              const vv = ev;
              for (; ev < hv.length && !hv[ev].includes("*/");) ev++;
              const zv = null === (Sv = hv[ev + 1]) || void 0 === Sv ? void 0 : Sv.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!zv) continue;
              let gv = null;
              const pv = [];
              let dv = "description",
                Nv = !1;
              for (const Pv of hv.slice(vv, ev + 1).join("\n").split("\n").map((vv => vv.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const vv = Pv.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                vv ? (gv = vv[1].trim(), dv = "deprecation") : Pv.startsWith("@") ? (dv = "otherTag", Nv = !0) : "" === Pv.trim() ? Nv || (dv = "description", pv.push(Pv)) : "deprecation" !== dv || /^[A-Z]/.test(Pv.trim()) ? "otherTag" !== dv && (dv = "description", pv.push(Pv)) : gv = `${gv} ${Pv.trim()}`.trim()
              }
              Pv.set(zv[1], {
                deprecation: gv,
                description: pv.join("\n").trim()
              })
            }
            return Pv
          }(Jv.default), ez
        }

        function dz() {
          if (!gz) {
            gz = new Map;
            for (const vv of Iv) {
              const zv = (0, Yv.u)(Lv(vv)).flatMap((vv => vv.blocks));
              for (const vv of (0, Yv.l)(zv))
                if ("ts" === vv.lang || "typescript" === vv.lang)
                  for (const [zv, Pv] of Dv(vv.code)) gz.set(zv, Pv)
            }
            for (const [vv, zv] of(Sz ??= hz(Jv.default), Sz)) gz.has(vv) || gz.set(vv, zv)
          }
          return gz
        }
        const Nz = {
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
        let lz;

        function Tz() {
          if (!lz) {
            lz = new Map;
            for (const vv of Iv)
              if (Kv(vv.layout))
                for (const zv of Lv(vv).sections) lz.has(zv.heading.text) || lz.set(zv.heading.text, {
                  pageId: vv.id,
                  anchor: zv.heading.anchor
                })
          }
          return lz
        }

        function Wz(vv) {
          const zv = vv.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return zv ? Tz().get(zv[1]) : void 0
        }
        const wz = (0, hv.createContext)("/docs"),
          az = (0, hv.createContext)(null),
          sz = (0, hv.createContext)(!1),
          Cz = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function iz(vv) {
          const zv = vv.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return zv ? zv[1] : null
        }

        function cz(vv) {
          let {
            colour: zv
          } = vv;
          return (0, av.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: zv
            },
            "aria-hidden": "true"
          })
        }

        function Gz(vv) {
          const zv = [];
          let Pv = 0;
          for (const hv of vv.matchAll(Cz)) zv.push(vv.slice(Pv, hv.index), (0, av.jsx)(cz, {
            colour: hv[0]
          }), hv[0]), Pv = hv.index + hv[0].length;
          return zv.push(vv.slice(Pv)), zv
        }

        function mz(vv) {
          let {
            href: zv,
            children: Pv
          } = vv;
          const Sv = (0, hv.useContext)(wz);
          if (zv.startsWith("#")) {
            const vv = Mv(zv);
            if (vv) return (0, av.jsx)(gv.d, {
              to: Bv(Sv, vv.page, vv.anchor),
              children: (0, av.jsx)(sz.Provider, {
                value: !0,
                children: Pv
              })
            })
          }
          return (0, av.jsx)("a", {
            href: zv,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, av.jsx)(sz.Provider, {
              value: !0,
              children: Pv
            })
          })
        }

        function jz(vv) {
          let {
            code: zv
          } = vv;
          const Pv = (0, hv.useContext)(wz);
          if ((0, hv.useContext)(sz)) return (0, av.jsx)("code", {
            className: "DocsInlineCode",
            children: zv
          });
          if (dz().has(zv)) return (0, av.jsx)(nz, {
            type: zv
          });
          const Sv = Wz(zv);
          if (Sv) return (0, av.jsx)(gv.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: Bv(Pv, Zv(Sv.pageId), Sv.anchor),
            children: zv
          });
          const ev = iz(zv);
          return (0, av.jsxs)("code", {
            className: "DocsInlineCode",
            children: [ev && (0, av.jsx)(cz, {
              colour: ev
            }), zv]
          })
        }

        function fz(vv) {
          let {
            text: zv
          } = vv;
          const Pv = [];
          let Sv = 0;
          for (const hv of zv.matchAll(Yv.f)) {
            hv.index > Sv && Pv.push(...Gz(zv.slice(Sv, hv.index)));
            const [, vv, ev, gv, pv, dv] = hv;
            vv ? Pv.push((0, av.jsx)(jz, {
              code: (0, Yv.n)(vv, ev)
            })) : gv ? Pv.push((0, av.jsx)("strong", {
              children: (0, av.jsx)(fz, {
                text: gv
              })
            })) : Pv.push((0, av.jsx)(mz, {
              href: dv,
              children: (0, av.jsx)(fz, {
                text: pv
              })
            })), Sv = hv.index + hv[0].length
          }
          return Sv < zv.length && Pv.push(...Gz(zv.slice(Sv))), (0, av.jsx)(av.Fragment, {
            children: Pv.map(((vv, zv) => (0, av.jsx)(hv.Fragment, {
              children: vv
            }, zv)))
          })
        }
        const Fz = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          Yz = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function nz(vv) {
          let {
            type: zv
          } = vv;
          const Pv = dz(),
            Sv = [];
          for (const hv of zv.trim().matchAll(Fz)) {
            const [vv, zv, ev, gv, pv] = hv;
            zv ? Sv.push((0, av.jsx)("span", {
              className: "DocsTypeString",
              children: vv
            })) : ev && Pv.has(ev) ? Sv.push((0, av.jsx)(Uz, {
              name: ev,
              definition: Pv.get(ev)
            })) : ev ? Sv.push((0, av.jsx)("span", {
              className: Yz.has(ev) ? "DocsTypeKeyword" : "DocsTypeName",
              children: vv
            })) : gv ? Sv.push((0, av.jsx)("span", {
              className: "DocsTypeNumber",
              children: vv
            })) : pv ? Sv.push(" ") : Sv.push((0, av.jsx)("span", {
              className: "DocsTypePunctuation",
              children: vv
            }))
          }
          return (0, av.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Sv.map(((vv, zv) => (0, av.jsx)(hv.Fragment, {
              children: vv
            }, zv)))
          })
        }
        const Oz = 480,
          Dz = 6,
          Kz = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Vz = 0;

        function Uz(vv) {
          let {
            name: zv,
            definition: Pv
          } = vv;
          const Sv = (0, hv.useContext)(wz),
            ev = Nz[zv],
            pv = (0, hv.useRef)(null),
            dv = (0, hv.useRef)(null),
            lv = (0, hv.useRef)(null),
            [Tv, Wv] = (0, hv.useState)(!1),
            [wv, sv] = (0, hv.useState)(null),
            iv = (0, hv.useRef)(),
            cv = (0, hv.useContext)(az),
            [Gv] = (0, hv.useState)((() => "DocsTypePopover-" + Vz++)),
            mv = () => {
              clearTimeout(iv.current), Wv(!0)
            },
            jv = () => {
              clearTimeout(iv.current), iv.current = setTimeout((() => {
                Wv(!1)
              }), 120)
            };
          return (0, hv.useEffect)((() => {
            if (!Tv) return;
            const vv = vv => {
              if ("Escape" === vv.key) {
                var zv, Pv;
                if (null !== (zv = dv.current) && void 0 !== zv && zv.contains(document.activeElement)) null === (Pv = pv.current) || void 0 === Pv || Pv.focus();
                Wv(!1)
              }
            };
            return document.addEventListener("keydown", vv), () => {
              document.removeEventListener("keydown", vv)
            }
          }), [Tv]), (0, hv.useEffect)((() => () => {
            clearTimeout(iv.current)
          }), []), (0, hv.useLayoutEffect)((() => {
            if (!Tv || !pv.current || !dv.current) return void sv(null);
            const vv = pv.current.getBoundingClientRect(),
              zv = dv.current.offsetHeight,
              Pv = Math.min(Oz, window.innerWidth - 32),
              hv = Math.min(Math.max(16, vv.left), window.innerWidth - Pv - 16),
              Sv = vv.bottom + Dz + zv < window.innerHeight;
            sv({
              left: hv,
              top: Sv ? vv.bottom + Dz : Math.max(16, vv.top - Dz - zv)
            })
          }), [Tv]), (0, av.jsxs)(av.Fragment, {
            children: [(0, av.jsx)("button", {
              type: "button",
              ref: pv,
              className: "DocsTypeLink",
              "aria-expanded": Tv,
              "aria-describedby": Tv ? Gv : void 0,
              onMouseEnter: mv,
              onMouseLeave: jv,
              onFocus: mv,
              onBlur: jv,
              onKeyDown: vv => {
                "Tab" === vv.key && !vv.shiftKey && lv.current && (vv.preventDefault(), lv.current.focus())
              },
              onClick: mv,
              children: zv
            }), Tv && (0, Nv.createPortal)((0, av.jsxs)("span", {
              ref: dv,
              id: Gv,
              className: "DocsTypePopover",
              role: "tooltip",
              style: wv ? {
                left: wv.left,
                top: wv.top,
                maxWidth: Oz
              } : {
                visibility: "hidden"
              },
              onMouseEnter: mv,
              onMouseLeave: jv,
              onFocus: mv,
              onBlur: jv,
              children: [(0, av.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, av.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: zv
                }), ev && (0, av.jsxs)(gv.d, {
                  ref: lv,
                  className: "DocsTypePopoverLink",
                  to: Bv(Sv, Zv(ev)),
                  onClick: () => {
                    Wv(!1)
                  },
                  onKeyDown: vv => {
                    if ("Tab" === vv.key) {
                      var zv;
                      if (vv.preventDefault(), vv.shiftKey || !pv.current || ! function(vv, zv) {
                          const Pv = [...document.querySelectorAll(Kz)],
                            hv = Pv.slice(Pv.indexOf(vv) + 1).find((vv => vv.getClientRects().length > 0 && !(null !== zv && void 0 !== zv && zv.contains(vv))));
                          return null === hv || void 0 === hv || hv.focus(), void 0 !== hv
                        }(pv.current, dv.current)) null === (zv = pv.current) || void 0 === zv || zv.focus();
                      vv.shiftKey || Wv(!1)
                    }
                  },
                  children: [Zv(ev).title, (0, av.jsx)(Cv, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, av.jsx)(Fv, {
                lang: "ts",
                code: Pv,
                compact: !0
              })]
            }), null !== cv && void 0 !== cv ? cv : document.body)]
          })
        }
        var Rz = Pv(185),
          xz = Pv(4512),
          tz = Pv(4520),
          qz = Pv(4525);
        const Iz = {
          progressBar: {
            Az: 30,
            Lz: .075,
            Mz: 5,
            yz: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Bz: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Ez: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            bz: !0,
            scale: 3,
            rotation: 15,
            rz: !1
          },
          gravityBar: {
            Az: 30,
            Xz: .25,
            vP: 3,
            zP: .8,
            gravity: 1,
            PP: 1.5,
            hP: 8,
            SP: 4,
            yz: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            gP: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            dP: 5,
            NP: 1200,
            lP: .15,
            TP: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var Qz = Pv(302),
          Zz = Pv(1946);

        function Az(vv) {
          return vv.startsWith("fa-")
        }
        const Lz = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Hz = {
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

        function Mz(vv) {
          return "string" === typeof vv ? "text" : "entityName" in vv || "translationKey" in vv ? "other" : (0, Qz.qb)(vv) ? "progressBar" : (0, Qz.mb)(vv) ? "keyBinding" : "icon" in vv ? "icon" : "str" in vv && "string" === typeof vv.str ? "text" : "other"
        }
        const yz = [{
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
          Bz = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...yz],
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
                options: Zz.f
              },
              isRequired: !0
            }, ...yz],
            other: []
          };

        function Jz(vv) {
          return "string" === typeof vv ? {
            str: vv
          } : vv
        }

        function Ez(vv, zv) {
          let Pv = Jz(vv);
          for (const hv of zv) Pv = Pv && "object" === typeof Pv ? Pv[hv] : void 0;
          return Pv
        }

        function oz(vv, zv, Pv) {
          const hv = (vv, Sv) => {
            var ev;
            const gv = zv[Sv],
              pv = {
                ...vv
              };
            if (Sv === zv.length - 1) return void 0 === Pv ? delete pv[gv] : pv[gv] = Pv, pv;
            const dv = hv(null !== (ev = vv[gv]) && void 0 !== ev ? ev : {}, Sv + 1);
            return 0 === Object.keys(dv).length ? delete pv[gv] : pv[gv] = dv, pv
          };
          return function(vv) {
            const zv = Object.keys(vv);
            return "string" === typeof vv.str && 1 === zv.length ? vv.str : vv
          }(hv(Jz(vv), 0))
        }

        function bz(vv, zv) {
          const Pv = Mz(vv),
            hv = Bz[Pv].find((vv => vv.path.join(".") === zv.join("."))),
            Sv = null !== hv && void 0 !== hv && hv.isRequired && "other" !== Pv ? Ez(Hz[Pv], zv) : void 0;
          return oz(vv, zv, Sv)
        }

        function rz(vv) {
          switch (Mz(vv)) {
            case "text":
              return String(Ez(vv, ["str"]));
            case "icon":
              return String(Ez(vv, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Ez(vv,["progress"])))}%`;
            case "keyBinding":
              return String(Ez(vv, ["action"]));
            case "other":
              return JSON.stringify(vv)
          }
        }
        const kz = /^[A-Za-z_$][\w$]*$/;

        function Xz(vv) {
          if (Array.isArray(vv)) return `[${vv.map(Xz).join(", ")}]`;
          if (vv && "object" === typeof vv) {
            const zv = Object.entries(vv).map((vv => {
              let [zv, Pv] = vv;
              return `${kz.test(zv)?zv:JSON.stringify(zv)}: ${Xz(Pv)}`
            }));
            return 0 === zv.length ? "{}" : `{ ${zv.join(", ")} }`
          }
          return JSON.stringify(vv)
        }

        function uz(vv) {
          const zv = vv.map(Xz),
            Pv = `[${zv.join(", ")}]`;
          return Pv.length <= 60 ? Pv : `[\n${zv.map((vv=>`    ${vv},`)).join("\n")}\n]`
        }
        const vP = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function zP(vv) {
          let zv = "";
          for (let Sv = 0; Sv < vv.length; Sv++) {
            const ev = vv[Sv];
            if ("\\" === ev) {
              var Pv;
              const hv = null !== (Pv = vv[Sv + 1]) && void 0 !== Pv ? Pv : "";
              zv += "'" === hv ? "'" : ev + hv, Sv++
            } else if ('"' === ev) zv += '\\"';
            else {
              var hv;
              zv += null !== (hv = vP[ev]) && void 0 !== hv ? hv : ev
            }
          }
          return `"${zv}"`
        }

        function PP(vv) {
          if ("string" === typeof vv) return !0;
          if (!vv || "object" !== typeof vv || Array.isArray(vv)) return !1;
          const zv = vv;
          return "ProgressBar" === zv.type ? "number" === typeof zv.progress : "StyledKeyBinding" === zv.type ? Zz.f.includes(zv.action) : "string" === typeof zv.icon || "string" === typeof zv.str || "string" === typeof zv.entityName || "string" === typeof zv.translationKey
        }

        function hP(vv) {
          let zv;
          try {
            zv = function(vv) {
              let zv = "",
                Pv = "",
                hv = 0;
              const Sv = () => {
                zv += Pv.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), Pv = ""
              };
              for (; hv < vv.length;) {
                const ev = vv.slice(hv).search(/["'`]|\/\//);
                if (-1 === ev) {
                  Pv += vv.slice(hv);
                  break
                }
                Pv += vv.slice(hv, hv + ev);
                const gv = hv + ev,
                  pv = vv[gv];
                if ("/" === pv) {
                  const zv = vv.indexOf("\n", gv);
                  hv = -1 === zv ? vv.length : zv;
                  continue
                }
                if (Sv(), "`" === pv) throw new Error("Use quotes rather than template strings.");
                let dv = gv + 1;
                for (; dv < vv.length && vv[dv] !== pv;) dv += "\\" === vv[dv] ? 2 : 1;
                if (dv >= vv.length) throw new Error("A string is missing its closing quote.");
                const Nv = vv.slice(gv + 1, dv);
                zv += zP(Nv), hv = dv + 1
              }
              return Sv(), JSON.parse(zv)
            }(vv.trim())
          } catch (hv) {
            return {
              parts: null,
              error: hv instanceof SyntaxError ? "This isn't a valid array yet." : hv.message
            }
          }
          if (!Array.isArray(zv)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const Pv = zv.findIndex((vv => !PP(vv)));
          return -1 !== Pv ? {
            parts: null,
            error: `Part ${Pv+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: zv,
            error: null
          }
        }
        const SP = 1 / Rz.f.clientTicksPerSecond,
          eP = 700,
          gP = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          pP = {
            progressBar: Iz.progressBar.Bz,
            timedClick: Iz.timedClick.icon,
            gravityBar: Iz.gravityBar.icon,
            precisionBar: Iz.precisionBar.icon,
            rhythmClick: Iz.rhythmClick.icon
          };

        function dP(vv) {
          let {
            type: zv
          } = vv;
          const [Pv, Sv] = (0, hv.useState)("ready"), [gv, pv] = (0, hv.useState)(1), [dv, Nv] = (0, hv.useState)(!0), lv = (0, hv.useRef)(null), Tv = (0, hv.useRef)(null), Wv = (0, hv.useRef)(null), wv = (0, hv.useRef)(new Set), sv = (0, hv.useRef)(!1), iv = pP[zv], cv = (0, hv.useMemo)((() => ({
            getState: () => {
              var vv, zv;
              return null !== (vv = null === (zv = Wv.current) || void 0 === zv ? void 0 : zv.getState()) && void 0 !== vv ? vv : gP
            },
            onFrame: vv => (wv.current.add(vv), () => {
              wv.current.delete(vv)
            })
          })), []);
          (0, hv.useEffect)((() => {
            const vv = lv.current,
              zv = Tv.current;
            if (!vv || !zv) return;
            const Pv = new ResizeObserver((() => {
              pv(vv.clientWidth / Math.max(1, zv.offsetWidth))
            }));
            return Pv.observe(vv), () => {
              Pv.disconnect()
            }
          }), []), (0, hv.useEffect)((() => {
            var vv;
            if ("playing" !== Pv) return;
            let hv = !1;
            const ev = new qz.e[zv](Iz[zv], (vv => {
              hv = !0, Nv(!1), Sv(vv ? "succeeded" : "failed")
            }), (() => {}));
            Wv.current = ev;
            let gv = 0,
              pv = performance.now(),
              dv = requestAnimationFrame((function vv(zv) {
                for (gv += Math.min(.25, (zv - pv) / 1e3), pv = zv; gv >= SP && !hv;) gv -= SP, ev.handleTick(SP);
                for (const Pv of wv.current) Pv();
                hv || (dv = requestAnimationFrame(vv))
              }));
            return null === (vv = lv.current) || void 0 === vv || vv.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(dv), ev.tearDown(), Wv.current = null, sv.current = !1
            }
          }), [Pv, zv]), (0, hv.useEffect)((() => {
            if (dv) return;
            const vv = setTimeout((() => {
              Nv(!0)
            }), eP);
            return () => {
              clearTimeout(vv)
            }
          }), [dv]);
          const Gv = vv => {
            var zv;
            "playing" === Pv && sv.current !== vv && (sv.current = vv, null === (zv = Wv.current) || void 0 === zv || zv.handleMouseInput(vv))
          };
          return (0, av.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, av.jsxs)("div", {
              ref: lv,
              className: ev()("DocsQteStage", {
                Playing: "playing" === Pv
              }),
              tabIndex: "playing" === Pv ? 0 : -1,
              role: "playing" === Pv ? "button" : void 0,
              "aria-label": "playing" === Pv ? `${zv} quick time event: click or press Space` : void 0,
              onPointerDown: vv => {
                0 === vv.button && Gv(!0)
              },
              onPointerUp: () => {
                Gv(!1)
              },
              onPointerLeave: () => {
                Gv(!1)
              },
              onPointerCancel: () => {
                Gv(!1)
              },
              onKeyDown: vv => {
                "playing" !== Pv || " " !== vv.key && "Enter" !== vv.key || (vv.preventDefault(), Gv(!0))
              },
              onKeyUp: vv => {
                "playing" !== Pv || " " !== vv.key && "Enter" !== vv.key || Gv(!1)
              },
              children: [(0, av.jsx)("div", {
                ref: Tv,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${gv})`
                },
                children: "playing" === Pv && (0, av.jsx)(tz.c.Provider, {
                  value: cv,
                  children: (0, av.jsx)(xz.c, {
                    qte: {
                      type: zv,
                      parameters: Iz[zv]
                    }
                  })
                })
              }), "playing" !== Pv && (0, av.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== Pv && (0, av.jsxs)("div", {
                  className: ev()("DocsQteResult", "succeeded" === Pv ? "Succeeded" : "Failed"),
                  children: [(0, av.jsx)(Cv, {
                    name: "succeeded" === Pv ? "check" : "cross",
                    isTinted: !0
                  }), (0, av.jsx)("span", {
                    children: "succeeded" === Pv ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, av.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !dv,
                  onClick: () => {
                    Sv("playing")
                  },
                  children: [(0, av.jsx)(Cv, {
                    name: "ready" === Pv ? "play" : "replay"
                  }), (0, av.jsx)("span", {
                    children: "ready" === Pv ? `Try ${zv}` : "Play again"
                  })]
                })]
              })]
            }), iv && !Az(iv) && (0, av.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, av.jsx)("code", {
                children: iv
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function NP(vv) {
          let {
            level: zv,
            text: Pv,
            anchor: hv,
            className: Sv
          } = vv;
          const gv = `h${Math.min(zv,6)}`;
          return (0, av.jsxs)(gv, {
                id: hv,
                className: ev()("DocsHeading", Sv),
                children: [(0, av.jsx)(fz, {
                      text: Pv
                    }), (0, av.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${hv}`,
                        "aria-label": `Link to ${Pv.replace(/`/g,"")}`,children:"#"})]})}function lP(vv){let{items:zv,ordered:Pv}=vv;const hv=Pv?"ol":"ul";return(0,av.jsx)(hv,{className:"DocsList",children:zv.map(((vv,zv)=>(0,av.jsxs)("li",{children:[(0,av.jsx)(fz,{text:vv.text}),vv.children.length>0&&(0,av.jsx)(lP,{items:vv.children,ordered:Pv})]},zv)))})}function TP(vv){const zv=vv[0],Pv="paragraph"===(null===zv||void 0===zv?void 0:zv.kind)?zv.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(Pv)?"warning":/^\*\*(tip|prefer)/.test(Pv)?"tip":"note"}function WP(vv){let{block:zv}=vv;switch(zv.kind){case"heading":return(0,av.jsx)(NP,{level:zv.level,text:zv.text,anchor:zv.anchor});case"paragraph":return(0,av.jsx)("p",{children:(0,av.jsx)(fz,{text:zv.text})});case"code":{const vv="ts"===zv.lang?function(vv){const zv=vv.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return zv&&Object.hasOwn(Iz,zv[1])?zv[1]:null}(zv.code):null;return(0,av.jsxs)(av.Fragment,{children:[(0,av.jsx)(Fv,{code:zv.code,lang:zv.lang}),vv&&(0,av.jsx)(dP,{type:vv})]})}case"table":return(0,av.jsx)("div",{className:"DocsTableScroll",children:(0,av.jsxs)("table",{className:"DocsTable",children:[(0,av.jsx)("thead",{children:(0,av.jsx)("tr",{children:zv.header.map(((vv,zv)=>(0,av.jsx)("th",{children:(0,av.jsx)(fz,{text:vv})},zv)))})}),(0,av.jsx)("tbody",{children:zv.rows.map(((vv,zv)=>(0,av.jsx)("tr",{children:vv.map(((vv,zv)=>(0,av.jsx)("td",{children:(0,av.jsx)(fz,{text:vv})},zv)))},zv)))})]})});case"list":return(0,av.jsx)(lP,{items:zv.items,ordered:zv.ordered});case"quote":return(0,av.jsx)("aside",{className:ev()("DocsCallout",TP(zv.blocks)),children:(0,av.jsx)(wP,{blocks:zv.blocks})});case"rule":return(0,av.jsx)("hr",{className:"DocsRule"})}}function wP(vv){let{blocks:zv}=vv;return(0,av.jsx)(av.Fragment,{children:zv.map(((vv,zv)=>(0,av.jsx)(WP,{block:vv},zv)))})}var aP=Pv(4496),sP=Pv(4499);function CP(vv){return"blocks"===vv||"items"===vv}const iP=new Map;function cP(vv){let zv=iP.get(vv);return zv||(zv=function(vv){const zv={entries:[],legend:[],notes:[],examples:[]};let Pv=!1;for(const ev of vv.split(/\r?\n/).slice(1)){if(ev.startsWith("#")){const vv=ev.replace(/^# ?/,""),hv=vv.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);hv?zv.legend.push({code:hv[1],meaning:hv[2],usage:hv[3].trim()}):/^Examples:/.test(vv.trim())?Pv=!0:Pv&&vv.trim()?zv.examples.push(vv.trim()):vv.trim()&&!/^\s/.test(vv)&&zv.notes.push(vv.trim());continue}const vv=ev.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var hv,Sv;vv&&zv.entries.push({name:vv[1],variants:null!==(hv=null===(Sv=vv[2])||void 0===Sv?void 0:Sv.split(","))&&void 0!==hv?hv:[]})}return zv}("blocks"===vv?aP:sP),iP.set(vv,zv)),zv}function GP(vv){let{className:zv,value:Pv,placeholder:hv,label:Sv,onChange:ev,count:gv,children:pv}=vv;return(0,av.jsxs)("div",{className:zv,children:[(0,av.jsx)(Cv,{name:"magnifying-glass"}),(0,av.jsx)("input",{type:"search",value:Pv,placeholder:hv,"aria-label":Sv,onChange:vv=>{ev(vv.target.value)}}),pv,gv&&(0,av.jsxs)("span",{className:"DocsFilterCount",children:[gv.visible," of ",gv.total]})]})}var mP=Pv(1042);function jP(vv){const zv=vv.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return zv?zv[2]:null}function fP(vv){return"paragraph"===vv.kind&&""===vv.text.trim()}function FP(vv){const zv={name:vv.heading.text,description:[],params:[],returns:null};let Pv="description";for(const Sv of vv.blocks)if(!fP(Sv))if("heading"===Sv.kind&&/^Parameters:?$/.test(Sv.text))Pv="params";else if("heading"===Sv.kind&&/^Returns:?$/.test(Sv.text))Pv="returns",zv.returns={type:"",description:[]};else if("params"!==Pv||"table"!==Sv.kind){if("returns"===Pv&&"paragraph"===Sv.kind&&""===zv.returns.type){const vv=jP(Sv.text);if(null!==vv){zv.returns.type=vv.replaceAll("\\|","|");continue}}"returns"===Pv?zv.returns.description.push(Sv):zv.description.push(Sv)}else for(const[vv,Pv,ev]of Sv.rows){var hv;zv.params.push({name:vv,type:null!==(hv=jP(Pv))&&void 0!==hv?hv:Pv,description:null!==ev&&void 0!==ev?ev:""})}return zv}const YP=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function nP(vv){return vv.filter((vv=>!fP(vv)))}const OP=/^[\w][\w .'&!:()-]*$/,DP=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function KP(vv){var zv;if("code"===vv.kind&&"text"===vv.lang){const zv=vv.code.split("\n").map((vv=>vv.trim())).filter(Boolean);return zv.length>0&&zv.every((vv=>OP.test(vv)))?zv.map((vv=>({name:vv}))):null}return"paragraph"===vv.kind&&DP.test(vv.text.trim())?[...vv.text.matchAll(/`([ ^ `]+)` / g)].flatMap((vv => vv[1].split(/,\s*/).map((vv => ({
                              name: vv.trim()
                            }))))): "table" === vv.kind && null !== (zv = vv.header[0]) && void 0 !== zv && zv.startsWith("Song") ? vv.rows.map((vv => {
                              let [zv, Pv] = vv;
                              return {
                                name: zv.replace(/`/g, ""),
                                caption: Pv
                              }
                            })) : null
                          }

                          function VP(vv) {
                            const zv = [];
                            for (const Pv of vv) {
                              const vv = KP(Pv),
                                hv = zv.at(-1),
                                Sv = "table" === Pv.kind;
                              vv ? "names" === (null === hv || void 0 === hv ? void 0 : hv.kind) && hv.isSongs === Sv ? hv.names.push(...vv) : zv.push({
                                kind: "names",
                                names: vv,
                                isSongs: Sv
                              }) : zv.push({
                                kind: "block",
                                block: Pv
                              })
                            }
                            return zv
                          }
                          const UP = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function RP(vv, zv) {
                            return `${UP[vv]}-${(0,Yv.r)(zv)}`
                          }
                          const xP = new WeakMap;

                          function tP(vv, zv, Pv) {
                            let hv = xP.get(zv);
                            if (!hv) {
                              hv = new Map;
                              const Pv = new Set;
                              for (const Sv of (0, Yv.u)(zv)) {
                                const zv = VP(nP(Sv.blocks)).map((zv => {
                                  if ("block" === zv.kind) return zv;
                                  return {
                                    kind: "names",
                                    names: zv.names.map((zv => {
                                      var hv, ev;
                                      const gv = RP(vv, zv.name);
                                      let pv = gv;
                                      for (let vv = 2; Pv.has(pv); vv++) pv = `${gv}-${vv}`;
                                      return Pv.add(pv), {
                                        ...zv,
                                        anchor: pv,
                                        heading: null !== (hv = null === (ev = Sv.heading) || void 0 === ev ? void 0 : ev.text) && void 0 !== hv ? hv : ""
                                      }
                                    })),
                                    isSongs: zv.isSongs
                                  }
                                }));
                                hv.set(Sv.blocks, zv)
                              }
                              xP.set(zv, hv)
                            }
                            const Sv = hv.get(Pv);
                            if (!Sv) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Sv
                          }
                          const qP = "/textures/docs/skinPreviews",
                            IP = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var QP = Pv(3999),
                            ZP = Pv(4019);

                          function AP(vv) {
                            return Object.hasOwn(QP.g, vv) ? QP.g[vv] : null
                          }
                          const LP = {
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
                            blendMode: ZP.f.Standard
                          };

                          function HP(vv, zv, Pv) {
                            return zv + (Pv - zv) * vv()
                          }

                          function MP(vv, zv, Pv) {
                            return vv + (zv - vv) * Pv
                          }

                          function yP(vv) {
                            return vv.length > 0 && "timeFraction" in vv[0]
                          }

                          function BP(vv, zv) {
                            if (0 === vv.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!yP(vv.colorGradients)) {
                              const Pv = vv.colorGradients,
                                {
                                  color: hv
                                } = Pv[Math.floor(zv() * Pv.length) % Pv.length];
                              return [{
                                at: 0,
                                colour: [hv[0] / 255, hv[1] / 255, hv[2] / 255, 1]
                              }]
                            }
                            return [...vv.colorGradients].sort(((vv, zv) => vv.timeFraction - zv.timeFraction)).map((vv => {
                              var Pv, hv, Sv;
                              const ev = vv.minColor,
                                gv = null !== (Pv = vv.maxColor) && void 0 !== Pv ? Pv : ev,
                                pv = zv(),
                                dv = [MP(ev[0], gv[0], pv) / 255, MP(ev[1], gv[1], pv) / 255, MP(ev[2], gv[2], pv) / 255, MP(null !== (hv = ev[3]) && void 0 !== hv ? hv : 1, null !== (Sv = gv[3]) && void 0 !== Sv ? Sv : 1, pv)];
                              return {
                                at: vv.timeFraction,
                                colour: dv
                              }
                            }))
                          }

                          function JP(vv, zv, Pv, hv) {
                            const Sv = HP(hv, vv.minEmitPower, vv.maxEmitPower),
                              ev = zv => HP(hv, Math.min(vv.dir1[zv], vv.dir2[zv]), Math.max(vv.dir1[zv], vv.dir2[zv])) * Sv,
                              gv = [...vv.velocityGradients].sort(((vv, zv) => vv.timeFraction - zv.timeFraction)).map((vv => ({
                                at: vv.timeFraction,
                                factor: HP(hv, vv.factor, vv.factor2)
                              })));
                            return {
                              pos: [HP(hv, zv[0], Pv[0]), HP(hv, zv[1], Pv[1]), HP(hv, zv[2], Pv[2])],
                              dir: [ev(0), ev(1), ev(2)],
                              age: 0,
                              life: HP(hv, vv.minLifeTime, vv.maxLifeTime),
                              size: HP(hv, vv.minSize, vv.maxSize),
                              colours: BP(vv, hv),
                              velocityFactors: gv
                            }
                          }

                          function EP(vv, zv, Pv, hv) {
                            if (zv < vv[0].at) return Pv(Math.min(1, vv.length - 1));
                            for (let Sv = 0; Sv < vv.length - 1; Sv++)
                              if (zv <= vv[Sv + 1].at) {
                                const ev = vv[Sv + 1].at - vv[Sv].at;
                                return hv(Pv(Sv), Pv(Sv + 1), ev > 0 ? (zv - vv[Sv].at) / ev : 1)
                              } return Pv(vv.length - 1)
                          }

                          function oP(vv) {
                            return EP(vv.colours, vv.age / vv.life, (zv => vv.colours[zv].colour), ((vv, zv, Pv) => [MP(vv[0], zv[0], Pv), MP(vv[1], zv[1], Pv), MP(vv[2], zv[2], Pv), MP(vv[3], zv[3], Pv)]))
                          }

                          function bP(vv, zv, Pv) {
                            if (vv.age += Pv, vv.age >= vv.life) return !1;
                            const hv = function(vv) {
                              return 0 === vv.velocityFactors.length ? 1 : EP(vv.velocityFactors, vv.age / vv.life, (zv => vv.velocityFactors[zv].factor), MP)
                            }(vv) * Pv;
                            for (let ev = 0; ev < 3; ev++) {
                              var Sv;
                              vv.pos[ev] += vv.dir[ev] * hv, vv.dir[ev] += (null !== (Sv = zv[ev]) && void 0 !== Sv ? Sv : 0) * Pv
                            }
                            return !0
                          }

                          function rP(vv) {
                            return String(Math.round(1e6 * vv) / 1e6)
                          }

                          function kP(vv) {
                            return `[${vv.map(rP).join(", ")}]`
                          }

                          function XP(vv, zv) {
                            const Pv = `${zv}    `;
                            return `[\n${(yP(vv)?vv.map((vv=>{const zv=[`${Pv}    timeFraction: ${rP(vv.timeFraction)},`,`${Pv}    minColor: ${kP(vv.minColor)},`];return vv.maxColor&&zv.push(`${Pv}    maxColor: ${kP(vv.maxColor)},`),`${Pv}{\n${zv.join("\n")}\n${Pv}},`})):vv.map((vv=>`
                            $ {
                              Pv
                            } {
                              color: $ {
                                kP(vv.color)
                              }
                            }, `))).join("\n")}\n${zv}]`
                          }
                          const uP = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            vh = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const zh = .6;

                          function Ph(vv, zv) {
                            return `${zv?"song":"sound"}:${vv}`
                          }
                          let hh = {
                              track: null,
                              volume: zh
                            },
                            Sh = null,
                            eh = 0,
                            gh = 0;
                          const ph = new Set;

                          function dh(vv) {
                            hh = {
                              ...hh,
                              ...vv
                            }, ph.forEach((vv => {
                              vv()
                            }))
                          }

                          function Nh(vv) {
                            hh.track && dh({
                              track: {
                                ...hh.track,
                                ...vv
                              }
                            })
                          }

                          function lh(vv) {
                            const [zv, Pv] = (0, hv.useState)((() => vv(hh))), Sv = (0, hv.useRef)(vv);
                            return Sv.current = vv, (0, hv.useEffect)((() => {
                              const vv = () => {
                                Pv((() => Sv.current(hh)))
                              };
                              return ph.add(vv), vv(), () => {
                                ph.delete(vv)
                              }
                            }), []), zv
                          }

                          function Th() {
                            eh++;
                            const vv = Sh;
                            Sh = null, null === vv || void 0 === vv || vv.stop()
                          }

                          function Wh(vv, zv) {
                            let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Th();
                            const Sv = eh,
                              {
                                track: ev
                              } = hh,
                              gv = ev && ev.name === vv && ev.isSong === zv ? ev.duration : 0;
                            gh = hv, dh({
                              track: {
                                name: vv,
                                isSong: zv,
                                status: "loading",
                                duration: gv
                              }
                            }), Promise.all([Pv.e(216), Pv.e(241)]).then((() => Pv(39115))).then((Pv => {
                              let {
                                playDocsSound: ev
                              } = Pv;
                              Sv === eh && (Sh = ev(vv, zv, hh.volume, hv, {
                                onPlay: vv => {
                                  Sv === eh && Nh({
                                    status: "playing",
                                    duration: vv
                                  })
                                },
                                onEnd: vv => {
                                  var zv, Pv;
                                  Sv === eh && (Sh = null, vv ? dh({
                                    track: null
                                  }) : (gh = null !== (zv = null === (Pv = hh.track) || void 0 === Pv ? void 0 : Pv.duration) && void 0 !== zv ? zv : 0, Nh({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((zv => {
                              console.error(`Could not play docs sound ${vv}`, zv), Sv === eh && dh({
                                track: null
                              })
                            }))
                          }

                          function wh() {
                            const {
                              track: vv
                            } = hh;
                            if (!vv) return;
                            if ("playing" === vv.status && Sh) return gh = Sh.yG(), Sh.pause(), void Nh({
                              status: "paused"
                            });
                            if ("loading" === vv.status) return Th(), void Nh({
                              status: "paused"
                            });
                            if (Sh) return void Sh.resume();
                            const zv = vv.duration > 0 && gh >= vv.duration - .05;
                            Wh(vv.name, vv.isSong, zv ? 0 : gh)
                          }

                          function ah() {
                            var vv;
                            return Sh && "playing" === (null === (vv = hh.track) || void 0 === vv ? void 0 : vv.status) ? Sh.yG() : gh
                          }

                          function sh(vv) {
                            var zv;
                            null === (zv = Sh) || void 0 === zv || zv.setVolume(vv), dh({
                              volume: vv
                            })
                          }

                          function Ch() {
                            Th(), gh = 0, dh({
                              track: null
                            })
                          }
                          const ih = (0, hv.createContext)(null);
                          let ch = null;

                          function Gh() {
                            const [vv, zv] = (0, hv.useState)(null);
                            return (0, hv.useEffect)((() => {
                              let vv = !1;
                              return ch ??= Promise.all([Pv.e(70), Pv.e(73), Pv.e(72), Pv.e(71), Pv.e(196), Pv.e(97), Pv.e(221)]).then((() => Pv(39111))), ch.then((Pv => {
                                vv || zv(Pv)
                              }), (vv => {
                                console.error("Could not load the docs gallery's textures", vv), ch = null
                              })), () => {
                                vv = !0
                              }
                            }), []), vv
                          }
                          const mh = 24,
                            jh = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function fh(vv, zv) {
                            const Pv = "skins" === vv ? function(vv, zv) {
                              const Pv = IP.find((zv => vv.startsWith(zv.heading)));
                              return Pv ? function(vv, zv) {
                                return `${vv}-${zv}`
                              }(Pv.prefix, zv) : null
                            }(zv.heading, zv.name) : null;
                            return null === Pv ? null : `${qP}/${Pv}.webp`
                          }

                          function Fh(vv) {
                            let {
                              kind: zv,
                              entry: Pv,
                              assets: Sv,
                              renderedUrl: gv
                            } = vv;
                            const {
                              name: pv
                            } = Pv, [dv, Nv] = (0, hv.useState)(!1);
                            if ("icons" === zv && Az(pv)) return (0, av.jsx)(mP.b, {
                              className: "DocsTileIcon",
                              name: pv
                            });
                            let lv = null;
                            var Tv;
                            if ("icons" === zv) lv = null !== (Tv = null === Sv || void 0 === Sv ? void 0 : Sv.getIngameIconUrl(pv)) && void 0 !== Tv ? Tv : null;
                            else if ("particles" === zv) {
                              var Wv, wv, sv;
                              lv = null !== (Wv = null === Sv || void 0 === Sv ? void 0 : Sv.getParticleTextureUrl(null !== (wv = null === (sv = AP(pv)) || void 0 === sv ? void 0 : sv.texture) && void 0 !== wv ? wv : pv)) && void 0 !== Wv ? Wv : null
                            } else "skins" === zv && (lv = null !== gv && void 0 !== gv ? gv : jh.test(pv) ? `/textures/charSkins/previews/${pv}_preview.png` : null);
                            return !lv || dv ? (0, av.jsx)(Cv, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === zv ? "person" : "image"
                            }) : (0, av.jsx)("img", {
                              className: ev()("DocsTileImage", {
                                Pixelated: "skins" !== zv
                              }),
                              src: lv,
                              srcSet: lv === gv ? `${lv} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${lv}`), Nv(!0)
                              }
                            })
                          }

                          function Yh(vv) {
                            let {
                              entry: zv,
                              isSong: Pv
                            } = vv;
                            const hv = lh((vv => {
                                let {
                                  track: hv
                                } = vv;
                                return (null === hv || void 0 === hv ? void 0 : hv.name) === zv.name && hv.isSong === Pv ? hv.status : null
                              })),
                              Sv = null !== hv && "paused" !== hv;
                            return (0, av.jsxs)("button", {
                              type: "button",
                              id: zv.anchor,
                              className: ev()("DocsSoundTile", {
                                Playing: Sv
                              }),
                              "data-docs-track": Ph(zv.name, Pv),
                              "aria-label": Sv ? `Pause ${zv.name}` : `Play ${zv.name}`,
                              onClick: () => {
                                null !== hv ? wh() : Wh(zv.name, Pv)
                              },
                              children: [(0, av.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, av.jsx)(Cv, {
                                  name: Sv ? "pause" : "play"
                                })
                              }), (0, av.jsx)("code", {
                                className: "DocsSoundName",
                                children: zv.name
                              }), zv.caption && (0, av.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: zv.caption
                              })]
                            })
                          }

                          function nh(vv) {
                            let {
                              kind: zv,
                              names: Pv,
                              isSongs: Sv
                            } = vv;
                            const gv = Gh(),
                              [pv, dv] = cv(),
                              Nv = !1 === (null === pv || void 0 === pv ? void 0 : pv.failed) ? pv.text : null,
                              lv = (0, hv.useContext)(ih),
                              [Tv, Wv] = (0, hv.useState)(""),
                              wv = Tv.trim().toLowerCase(),
                              sv = wv ? Pv.filter((vv => vv.name.toLowerCase().includes(wv))) : Pv;
                            return (0, av.jsxs)("div", {
                              className: "DocsGallery",
                              children: [Pv.length > mh && (0, av.jsx)(GP, {
                                className: "DocsGalleryFilter",
                                value: Tv,
                                placeholder: `Filter ${Pv.length} names\u2026`,
                                label: "Filter names",
                                onChange: Wv,
                                count: wv ? {
                                  visible: sv.length,
                                  total: Pv.length
                                } : null
                              }), (0, av.jsx)("div", {
                                className: ev()("DocsGalleryGrid", `Kind-${zv}`, {
                                  Songs: Sv
                                }),
                                children: sv.map((vv => {
                                  if ("sounds" === zv) return (0, av.jsx)(Yh, {
                                    entry: vv,
                                    isSong: Sv
                                  }, vv.anchor);
                                  if (lv && "particles" === zv && AP(vv.name)) return (0, av.jsxs)("button", {
                                    type: "button",
                                    id: vv.anchor,
                                    className: ev()("DocsTile Previewable", {
                                      Copied: Nv === vv.name
                                    }),
                                    title: `Play "${vv.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      lv(vv.name), dv(vv.name)
                                    },
                                    children: [(0, av.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, av.jsx)(Fh, {
                                        kind: zv,
                                        entry: vv,
                                        assets: gv,
                                        renderedUrl: null
                                      }), (0, av.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, av.jsx)(Cv, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, av.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Nv === vv.name ? "Copied!" : vv.name
                                    })]
                                  }, vv.anchor);
                                  const Pv = fh(zv, vv);
                                  return (0, av.jsxs)("button", {
                                    type: "button",
                                    id: vv.anchor,
                                    className: ev()("DocsTile", {
                                      Copied: Nv === vv.name
                                    }),
                                    title: `Copy "${vv.name}"`,
                                    onClick: () => {
                                      dv(vv.name)
                                    },
                                    children: [(0, av.jsx)("span", {
                                      className: ev()("DocsTilePreview", {
                                        Rendered: null !== Pv
                                      }),
                                      children: (0, av.jsx)(Fh, {
                                        kind: zv,
                                        entry: vv,
                                        assets: gv,
                                        renderedUrl: Pv
                                      })
                                    }), (0, av.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Nv === vv.name ? "Copied!" : vv.name
                                    })]
                                  }, vv.anchor)
                                }))
                              })]
                            })
                          }

                          function Oh(vv) {
                            let {
                              kind: zv,
                              content: Pv,
                              blocks: hv
                            } = vv;
                            return (0, av.jsx)(av.Fragment, {
                              children: tP(zv, Pv, hv).map(((vv, Pv) => "block" === vv.kind ? (0, av.jsx)(WP, {
                                block: vv.block
                              }, Pv) : (0, av.jsx)(nh, {
                                kind: zv,
                                names: vv.names,
                                isSongs: vv.isSongs
                              }, Pv)))
                            })
                          }
                          const Dh = [{
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

                          function Kh(vv) {
                            let {
                              cards: zv = Dh,
                              label: Pv = "Start here"
                            } = vv;
                            const Sv = (0, hv.useContext)(wz);
                            return (0, av.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": Pv,
                              children: zv.map((vv => {
                                let {
                                  pageId: zv,
                                  countNoun: Pv
                                } = vv;
                                const hv = Zv(zv);
                                return (0, av.jsxs)(gv.d, {
                                  to: Bv(Sv, hv),
                                  className: "DocsLandingCard",
                                  children: [(0, av.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, av.jsx)(Cv, {
                                      name: hv.icon
                                    })
                                  }), (0, av.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: hv.title
                                  }), (0, av.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: hv.summary
                                  }), Pv && (0, av.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [Lv(hv).sections.length, " ", Pv]
                                  })]
                                }, zv)
                              }))
                            })
                          }
                          const Vh = 240;

                          function Uh(vv) {
                            let {
                              faces: zv
                            } = vv;
                            return (0, av.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, av.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${zv.top}")`
                                }
                              }), (0, av.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${zv.left}")`
                                }
                              }), (0, av.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${zv.right}")`
                                }
                              })]
                            })
                          }

                          function Rh(vv) {
                            let {
                              src: zv
                            } = vv;
                            const [Pv, Sv] = (0, hv.useState)(!1);
                            return Pv ? null : (0, av.jsx)("img", {
                              src: zv,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${zv}`), Sv(!0)
                              }
                            })
                          }

                          function xh(vv) {
                            let {
                              kind: zv
                            } = vv;
                            const Pv = cP(zv),
                              Sv = Gh(),
                              gv = (0, pv.p)(),
                              [dv, Nv] = (0, hv.useState)(""),
                              [lv, Tv] = (0, hv.useState)(null),
                              [Wv, wv] = (0, hv.useState)(Vh),
                              [sv, iv] = (0, hv.useState)(null),
                              cv = (0, hv.useRef)(null),
                              mv = dv.trim().toLowerCase();
                            (0, hv.useEffect)((() => {
                              const vv = (0, Yv.q)(gv.hash),
                                hv = Pv.entries.find((Pv => RP(zv, Pv.name) === vv));
                              if (hv) cv.current = hv.name, Nv(hv.name), Tv(null), iv(hv.name);
                              else if (null !== cv.current) {
                                const vv = cv.current;
                                cv.current = null, Nv((zv => zv === vv ? "" : zv)), iv(null)
                              }
                            }), [Pv, zv, gv.hash, gv.key]), (0, hv.useEffect)((() => {
                              var vv;
                              null !== sv && (null === (vv = document.getElementById(RP(zv, sv))) || void 0 === vv || vv.scrollIntoView({
                                block: "center"
                              }))
                            }), [zv, sv]);
                            const jv = Pv.entries.filter((vv => (!mv || vv.name.toLowerCase().includes(mv)) && (!lv || vv.variants.includes(lv))));
                            return (0, av.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [Pv.notes.length > 0 && (0, av.jsx)("div", {
                                className: "DocsProse",
                                children: Pv.notes.map((vv => (0, av.jsx)("p", {
                                  children: vv
                                }, vv)))
                              }), Pv.legend.length > 0 && (0, av.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, av.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, av.jsx)("thead", {
                                    children: (0, av.jsxs)("tr", {
                                      children: [(0, av.jsx)("th", {
                                        children: "Code"
                                      }), (0, av.jsx)("th", {
                                        children: "Variant"
                                      }), (0, av.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, av.jsx)("tbody", {
                                    children: Pv.legend.map((vv => (0, av.jsxs)("tr", {
                                      children: [(0, av.jsx)("td", {
                                        children: (0, av.jsx)("button", {
                                          type: "button",
                                          className: ev()("DocsVariantChip", {
                                            Active: lv === vv.code
                                          }),
                                          "aria-pressed": lv === vv.code,
                                          title: `Show only ${zv} with ${vv.meaning} variants`,
                                          onClick: () => {
                                            Tv(lv === vv.code ? null : vv.code)
                                          },
                                          children: vv.code
                                        })
                                      }), (0, av.jsx)("td", {
                                        children: vv.meaning
                                      }), (0, av.jsx)("td", {
                                        children: (0, av.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: vv.usage
                                        })
                                      })]
                                    }, vv.code)))
                                  })]
                                })
                              }), Pv.examples.length > 0 && (0, av.jsx)(Fv, {
                                lang: "text",
                                code: Pv.examples.join("\n")
                              }), (0, av.jsx)(GP, {
                                className: "DocsFilterBar",
                                value: dv,
                                placeholder: `Search ${Pv.entries.length} ${zv}\u2026`,
                                label: `Search ${zv}`,
                                onChange: vv => {
                                  Nv(vv), wv(Vh)
                                },
                                count: mv || lv ? {
                                  visible: jv.length,
                                  total: Pv.entries.length
                                } : null,
                                children: lv && (0, av.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Tv(null)
                                  },
                                  children: [lv, " ", (0, av.jsx)(Cv, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, av.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: jv.slice(0, Wv).map((vv => {
                                  const Pv = "blocks" === zv ? null === Sv || void 0 === Sv ? void 0 : Sv.getBlockFaces(vv.name) : null,
                                    hv = Sv && !Pv ? Sv.getItemTextureUrl(vv.name) : null;
                                  return (0, av.jsxs)("div", {
                                    id: RP(zv, vv.name),
                                    className: ev()("DocsCatalogueTile", {
                                      Linked: vv.name === sv
                                    }),
                                    children: [(0, av.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [Pv && (0, av.jsx)(Uh, {
                                        faces: Pv
                                      }), hv && (0, av.jsx)(Rh, {
                                        src: hv
                                      })]
                                    }), (0, av.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: vv.name
                                    }), vv.variants.length > 0 && (0, av.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: vv.variants.map((vv => (0, av.jsx)("span", {
                                        children: vv
                                      }, vv)))
                                    }), (0, av.jsx)(Gv, {
                                      text: vv.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, vv.name)
                                }))
                              }), jv.length > Wv && (0, av.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  wv(jv.length)
                                },
                                children: ["Show all ", jv.length]
                              }), 0 === jv.length && (0, av.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", zv, " match."]
                              })]
                            })
                          }
                          var th = Pv(4570),
                            qh = Pv(1567);
                          const Ih = .95 * th.b;

                          function Qh(vv) {
                            return /^\s*```/.test(vv)
                          }

                          function Zh(vv, zv) {
                            const Pv = [
                              []
                            ];
                            let hv = !1;
                            for (const Sv of vv.split("\n")) !hv && zv(Sv) && Pv.at(-1).length > 0 && Pv.push([]), Qh(Sv) && (hv = !hv), Pv.at(-1).push(Sv);
                            return Pv.map((vv => vv.join("\n").trim())).filter(Boolean)
                          }

                          function Ah(vv, zv) {
                            const Pv = `${"#".repeat(zv)} `,
                              hv = [];
                            let Sv = !1;
                            for (const ev of vv.split("\n")) Qh(ev) ? Sv = !Sv : !Sv && ev.startsWith(Pv) && hv.push(ev.slice(Pv.length).trim());
                            return hv
                          }

                          function Lh(vv) {
                            return vv.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class Hh {
                            constructor(vv, zv) {
                              this.origin = zv, this.pages = void 0, this.partPaths = new Map;
                              const Pv = vv.map((vv => {
                                const zv = zv => this.resolveLinks(vv, zv).length,
                                  Pv = function(vv, zv) {
                                    const Pv = vv.map((vv => zv(vv.markdown) + 2)),
                                      hv = Pv.reduce(((vv, zv) => vv + zv), 0),
                                      Sv = hv / Math.ceil(hv / Ih),
                                      ev = [];
                                    let gv = 0;
                                    return vv.forEach(((vv, zv) => {
                                      const hv = Pv[zv];
                                      (0 === ev.length || gv + hv > Ih || gv + hv / 2 > Sv) && (ev.push([]), gv = 0), ev.at(-1).push(vv), gv += hv
                                    })), ev
                                  }(function(vv, zv) {
                                    return Zh(vv, (vv => vv.startsWith("## "))).flatMap((vv => {
                                      var Pv;
                                      const hv = null !== (Pv = Ah(vv, 2)[0]) && void 0 !== Pv ? Pv : "";
                                      if (zv(vv) <= Ih) return [{
                                        markdown: vv,
                                        section: hv
                                      }];
                                      let Sv = !1,
                                        ev = "";
                                      return Zh(vv, (vv => {
                                        const zv = Sv && "" !== vv.trim();
                                        return Sv = "" === vv.trim(), zv
                                      })).map((vv => {
                                        var zv;
                                        const Pv = Ah(vv, 3),
                                          Sv = vv.startsWith("### ") ? Pv[0] : ev;
                                        return ev = null !== (zv = Pv.at(-1)) && void 0 !== zv ? zv : ev, {
                                          markdown: vv,
                                          section: hv || Sv
                                        }
                                      }))
                                    }))
                                  }(Lh(vv), zv), zv);
                                return {
                                  page: vv,
                                  groups: Pv.length > 1 ? Pv : []
                                }
                              }));
                              for (const {
                                  page: hv,
                                  groups: Sv
                                }
                                of Pv) Sv.forEach(((vv, zv) => {
                                const Pv = (0, th.t)(hv.slug, zv);
                                for (const Sv of vv.flatMap((vv => [...Ah(vv.markdown, 2), ...Ah(vv.markdown, 3)]))) {
                                  const vv = `${hv.id}#${(0,Yv.r)(Sv)}`;
                                  this.partPaths.has(vv) || this.partPaths.set(vv, Pv)
                                }
                              }));
                              this.pages = Pv.map((vv => {
                                let {
                                  page: zv,
                                  groups: Pv
                                } = vv;
                                return {
                                  page: zv,
                                  path: (0, th.q)(zv.slug),
                                  markdown: `# ${zv.title}\n\n${this.resolveLinks(zv,Lh(zv))}\n`,
                                  parts: Pv.map(((vv, hv) => this.renderPart(zv, vv, hv, Pv.length)))
                                }
                              }))
                            }
                            url(vv) {
                              return `${this.origin}${vv}`
                            }
                            getPage(vv) {
                              return this.pages.find((zv => zv.page.id === vv))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((vv => (vv.parts.length > 0 ? vv.parts : [{
                                path: vv.path,
                                label: "",
                                markdown: vv.markdown
                              }]).filter((vv => vv.markdown.length > th.b))))
                            }
                            markdownUrl(vv, zv) {
                              const Pv = zv && this.partPaths.get(`${vv.id}#${zv}`) || (0, th.q)(vv.slug);
                              return this.url(zv ? `${Pv}#${zv}` : Pv)
                            }
                            resolveLinks(vv, zv) {
                              return zv.replace(/\]\((#[^)]+)\)/g, ((zv, Pv) => {
                                var hv;
                                const Sv = null !== (hv = Mv(Pv)) && void 0 !== hv ? hv : this.samePageTarget(vv, Pv);
                                return Sv ? `](${this.markdownUrl(Sv.page,Sv.anchor)})` : zv
                              }))
                            }
                            samePageTarget(vv, zv) {
                              const Pv = (0, Yv.r)(zv.slice(1));
                              return Hv(vv, Pv) ? {
                                page: vv,
                                anchor: Pv
                              } : null
                            }
                            renderPart(vv, zv, Pv, hv) {
                              const Sv = function(vv) {
                                  const zv = vv.map((vv => vv.section)).filter(Boolean);
                                  if (0 === zv.length) return "";
                                  const Pv = zv[0],
                                    hv = zv.at(-1);
                                  return Pv === hv ? Pv : `${Pv} to ${hv}`
                                }(zv),
                                ev = zv.map((vv => vv.markdown)).join("\n\n"),
                                gv = Sv ? `It covers ${Sv}. ` : "",
                                pv = `Part ${Pv+1} of ${hv} of [${vv.title}](${this.url((0,th.q)(vv.slug))}). ${gv}[llms.txt](${this.url(th.d)}) lists every part.`;
                              return {
                                path: (0, th.t)(vv.slug, Pv),
                                label: Sv,
                                markdown: `# ${vv.title}, part ${Pv+1} of ${hv}\n\n${pv}\n\n${this.resolveLinks(vv,ev)}\n`
                              }
                            }
                            llmsTxt(vv) {
                              const zv = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${Mh(th.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const Pv of Qv) {
                                zv.push("", `## ${Pv.title}`, "");
                                for (const vv of Pv.pageIds) {
                                  const Pv = this.getPage(vv),
                                    {
                                      page: hv,
                                      parts: Sv
                                    } = Pv,
                                    ev = `About ${Mh(Pv.markdown.length)} tokens${Sv.length>0?`, in ${Sv.length} parts:`:"."}`;
                                  zv.push(`- [${hv.title}](${this.url(Pv.path)}): ${hv.summary} ${ev}`), Sv.forEach(((vv, Pv) => {
                                    zv.push(`  - [Part ${Pv+1}${vv.label?`: ${vv.label}`:""}](${this.url(vv.path)})`)
                                  }))
                                }
                              }
                              return zv.push("", "## Optional", "", `- [Every page in one file](${this.url(th.c)}): About ${Mh(vv.length)} tokens, for a model with a large context window.`, ""), zv.join("\n")
                            }
                            llmsFullTxt() {
                              return Qv.flatMap((vv => vv.pageIds.map((vv => this.getPage(vv).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const vv = this.llmsFullTxt(),
                                zv = this.llmsTxt(vv),
                                Pv = new Map([
                                  [th.j, zv],
                                  [th.d, zv],
                                  [th.c, vv]
                                ]);
                              for (const hv of this.pages) {
                                Pv.set(hv.path, hv.markdown);
                                for (const vv of hv.parts) Pv.set(vv.path, vv.markdown)
                              }
                              return Pv
                            }
                          }

                          function Mh(vv) {
                            return `${Math.max(1,Math.round(vv/4e3))}K`
                          }
                          let yh = null;

                          function Bh() {
                            return yh ??= new Hh(Iv, qh.d), yh
                          }
                          const Jh = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function Eh(vv) {
                            return Bh().getPage(vv.id).parts.length > 0 ? `Read ${th.h}, then the parts of the Bloxd Code API's ${vv.title} page it lists, so I can ask questions about it.` : `Read ${qh.d}${(0,th.q)(vv.slug)} so I can ask questions about it. ${th.h} lists every page of the Bloxd Code API docs.`
                          }

                          function oh(vv) {
                            let {
                              page: zv
                            } = vv;
                            const [Pv, hv] = cv();
                            return (0, av.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, av.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  hv(Bh().getPage(zv.id).markdown)
                                },
                                children: [(0, av.jsx)(Cv, {
                                  name: !1 === (null === Pv || void 0 === Pv ? void 0 : Pv.failed) ? "check" : "copy"
                                }), (0, av.jsx)("span", {
                                  children: Pv ? Pv.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), Jh.map((vv => (0, av.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${vv.url}${encodeURIComponent(Eh(zv))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, av.jsx)(Cv, {
                                  name: "external-link"
                                }), (0, av.jsxs)("span", {
                                  children: ["Open in ", vv.name]
                                })]
                              }, vv.name)))]
                            })
                          }

                          function bh(vv) {
                            return `#${[0,1,2].map((zv=>Math.round(Math.min(255,Math.max(0,vv[zv]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function rh(vv) {
                            return [parseInt(vv.slice(1, 3), 16), parseInt(vv.slice(3, 5), 16), parseInt(vv.slice(5, 7), 16)]
                          }

                          function kh(vv) {
                            let {
                              label: zv,
                              min: Pv,
                              max: hv,
                              step: Sv,
                              low: ev,
                              high: gv,
                              onChange: pv
                            } = vv;
                            return (0, av.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, av.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, av.jsx)("span", {
                                  children: zv
                                }), (0, av.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: ev === gv ? ev : `${ev}\u2013${gv}`
                                })]
                              }), (0, av.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, av.jsx)("input", {
                                  type: "range",
                                  min: Pv,
                                  max: hv,
                                  step: Sv,
                                  value: Math.min(hv, ev),
                                  "aria-label": `Minimum ${zv.toLowerCase()}`,
                                  onChange: vv => {
                                    const zv = Number(vv.target.value);
                                    pv(zv, Math.max(zv, gv))
                                  }
                                }), (0, av.jsx)("input", {
                                  type: "range",
                                  min: Pv,
                                  max: hv,
                                  step: Sv,
                                  value: Math.min(hv, gv),
                                  "aria-label": `Maximum ${zv.toLowerCase()}`,
                                  onChange: vv => {
                                    const zv = Number(vv.target.value);
                                    pv(Math.min(zv, ev), zv)
                                  }
                                })]
                              })]
                            })
                          }

                          function Xh(vv) {
                            let {
                              label: zv,
                              min: Pv,
                              max: hv,
                              step: Sv,
                              value: ev,
                              onChange: gv,
                              format: pv = String
                            } = vv;
                            return (0, av.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, av.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, av.jsx)("span", {
                                  children: zv
                                }), (0, av.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: pv(ev)
                                })]
                              }), (0, av.jsx)("input", {
                                type: "range",
                                min: Pv,
                                max: hv,
                                step: Sv,
                                value: Math.min(hv, Math.max(Pv, ev)),
                                "aria-label": zv,
                                onChange: vv => {
                                  gv(Number(vv.target.value))
                                }
                              })]
                            })
                          }

                          function uh(vv) {
                            let {
                              opts: zv,
                              onChange: Pv
                            } = vv;
                            const hv = zv.colorGradients;
                            if (!yP(hv)) return (0, av.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, av.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, av.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, av.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: hv.map(((vv, zv) => (0, av.jsx)("input", {
                                  type: "color",
                                  value: bh(vv.color),
                                  "aria-label": `Colour ${zv+1}`,
                                  onChange: vv => {
                                    const Sv = [...hv];
                                    Sv[zv] = {
                                      color: rh(vv.target.value)
                                    }, Pv(Sv)
                                  }
                                }, zv)))
                              })]
                            });
                            const Sv = (vv, zv) => {
                              const Sv = [...hv];
                              Sv[vv] = zv, Pv(Sv)
                            };
                            return (0, av.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, av.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, av.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, av.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), hv.map(((vv, zv) => {
                                var Pv;
                                const hv = null !== (Pv = vv.maxColor) && void 0 !== Pv ? Pv : vv.minColor;
                                return (0, av.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, av.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * vv.timeFraction), "%"]
                                  }), (0, av.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${bh(vv.minColor)}, ${bh(hv)})`
                                    }
                                  }), (0, av.jsx)("input", {
                                    type: "color",
                                    value: bh(vv.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*vv.timeFraction)}%`,
                                    onChange: Pv => {
                                      Sv(zv, {
                                        ...vv,
                                        minColor: [...rh(Pv.target.value), vv.minColor[3]]
                                      })
                                    }
                                  }), (0, av.jsx)("input", {
                                    type: "color",
                                    value: bh(hv),
                                    "aria-label": `Maximum colour at ${Math.round(100*vv.timeFraction)}%`,
                                    onChange: Pv => {
                                      Sv(zv, {
                                        ...vv,
                                        maxColor: [...rh(Pv.target.value), hv[3]]
                                      })
                                    }
                                  })]
                                }, zv)
                              }))]
                            })
                          }
                          const vS = [-.5, -.5, -.5],
                            zS = [.5, .5, .5],
                            PS = [0, 1, 2, 3, 4, 5, 6, 7].map((vv => [1 & vv ? zS[0] : vS[0], 2 & vv ? zS[1] : vS[1], 4 & vv ? zS[2] : vS[2]]));class hS {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(vv, zv, Pv, hv) {
                              const Sv = Math.round(31 * zv),
                                ev = Math.round(31 * Pv),
                                gv = Math.round(31 * hv),
                                pv = `${Sv}|${ev}|${gv}`;
                              let dv = this.tints.get(vv);
                              (!dv || dv.size > 2e3) && (dv = new Map, this.tints.set(vv, dv));
                              let Nv = dv.get(pv);
                              if (Nv) return Nv;
                              Nv = document.createElement("canvas"), Nv.width = vv.naturalWidth || 16, Nv.height = vv.naturalHeight || 16;
                              const lv = Nv.getContext("2d");
                              return lv ? (lv.imageSmoothingEnabled = !1, lv.drawImage(vv, 0, 0, Nv.width, Nv.height), lv.globalCompositeOperation = "multiply", lv.fillStyle = `rgb(${Sv/31*255}, ${ev/31*255}, ${gv/31*255})`, lv.fillRect(0, 0, Nv.width, Nv.height), lv.globalCompositeOperation = "destination-in", lv.drawImage(vv, 0, 0, Nv.width, Nv.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), dv.set(pv, Nv), Nv
                            }
                          }

                          function SS(vv) {
                            let {
                              opts: zv,
                              textureUrl: Pv,
                              burst: Sv,
                              paused: ev
                            } = vv;
                            const gv = (0, hv.useRef)(null),
                              pv = (0, hv.useRef)(zv);
                            pv.current = zv;
                            const dv = (0, hv.useRef)(ev);
                            dv.current = ev;
                            const Nv = (0, hv.useRef)(null),
                              lv = (0, hv.useRef)(null),
                              Tv = (0, hv.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(vv) {
                                let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const Pv = [-.5, -.5, -.5],
                                  hv = [.5, .5, .5];
                                let Sv = .5;
                                for (let ev = 0; ev < 40; ev++) {
                                  const ev = JP(vv, Pv, hv, zv),
                                    gv = Math.max(ev.life / 30, .001);
                                  for (; bP(ev, vv.gravity, gv);) Sv = Math.max(Sv, Math.hypot(ev.pos[0], ev.pos[1], ev.pos[2]) + ev.size / 2)
                                }
                                return Sv
                              }(zv)))), [zv]),
                              Wv = (0, hv.useRef)(Tv);
                            return Wv.current = Tv, (0, hv.useEffect)((() => {
                              if (Nv.current = null, !Pv) return;
                              const vv = new Image;
                              let zv = !1;
                              return vv.onload = () => {
                                zv || (Nv.current = vv)
                              }, vv.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${Pv}`)
                              }, vv.src = Pv, () => {
                                zv = !0
                              }
                            }), [Pv]), (0, hv.useEffect)((() => {
                              var vv;
                              null === (vv = lv.current) || void 0 === vv || vv.call(lv)
                            }), [zv, Sv]), (0, hv.useEffect)((() => {
                              const vv = gv.current,
                                zv = null === vv || void 0 === vv ? void 0 : vv.getContext("2d");
                              if (!vv || !zv) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const Pv = new hS;
                              let hv = [],
                                Sv = 0,
                                ev = -.7,
                                Tv = Wv.current,
                                wv = performance.now(),
                                av = 0,
                                sv = !0,
                                Cv = null;
                              const iv = () => {
                                const vv = pv.current,
                                  zv = Math.min(400, Math.max(0, Math.ceil(vv.manualEmitCount)));
                                hv = [];
                                for (let Pv = 0; Pv < zv; Pv++) hv.push(JP(vv, vS, zS, Math.random));
                                Sv = 0
                              };
                              lv.current = iv, iv();
                              const cv = gv => {
                                av = requestAnimationFrame(cv);
                                const lv = Math.min(.05, (gv - wv) / 1e3);
                                if (wv = gv, !sv) return;
                                const Gv = window.devicePixelRatio || 1,
                                  mv = Math.round(vv.clientWidth * Gv),
                                  jv = Math.round(vv.clientHeight * Gv);
                                if (0 === mv || 0 === jv) return;
                                vv.width === mv && vv.height === jv || (vv.width = mv, vv.height = jv);
                                const fv = pv.current;
                                null === Cv && (ev += .18 * lv), Tv += (Wv.current - Tv) * Math.min(1, 4 * lv);
                                const Fv = .6 * lv;
                                hv = hv.filter((vv => bP(vv, fv.gravity, Fv))), 0 !== hv.length || dv.current || (Sv += lv, Sv > .6 && iv());
                                const Yv = function(vv, zv, Pv, hv) {
                                  const Sv = 3.2 * hv,
                                    ev = .44 * Math.min(vv, zv) * Sv / hv,
                                    gv = Math.cos(Pv),
                                    pv = Math.sin(Pv),
                                    dv = Math.cos(.42),
                                    Nv = Math.sin(.42);
                                  return (Pv, hv, lv) => {
                                    const Tv = Pv * pv + lv * gv,
                                      Wv = Sv - (hv * Nv + Tv * dv);
                                    if (Wv < .05) return null;
                                    const wv = ev / Wv;
                                    return {
                                      x: vv / 2 + (Pv * gv - lv * pv) * wv,
                                      y: zv / 2 - (hv * dv - Tv * Nv) * wv,
                                      scale: wv,
                                      depth: Wv
                                    }
                                  }
                                }(mv, jv, ev, Tv);
                                ! function(vv, zv, Pv, hv, Sv) {
                                  const ev = vv.createLinearGradient(0, 0, 0, Pv);
                                  ev.addColorStop(0, "#23262d"), ev.addColorStop(1, "#16181c"), vv.globalCompositeOperation = "source-over", vv.globalAlpha = 1, vv.fillStyle = ev, vv.fillRect(0, 0, zv, Pv);
                                  const gv = (zv, Pv) => {
                                      const Sv = hv(zv[0], zv[1], zv[2]),
                                        ev = hv(Pv[0], Pv[1], Pv[2]);
                                      Sv && ev && (vv.beginPath(), vv.moveTo(Sv.x, Sv.y), vv.lineTo(ev.x, ev.y), vv.stroke())
                                    },
                                    pv = Math.ceil(Sv) + 1,
                                    dv = vS[1];
                                  vv.lineWidth = 1, vv.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Nv = -pv; Nv <= pv; Nv++) gv([Nv + .5, dv, .5 - pv], [Nv + .5, dv, pv + .5]), gv([.5 - pv, dv, Nv + .5], [pv + .5, dv, Nv + .5]);
                                  vv.strokeStyle = "rgba(255, 255, 255, 0.28)", vv.setLineDash([4, 4]);
                                  for (const Nv of PS)
                                    for (const vv of PS) {
                                      const zv = [0, 1, 2].filter((zv => Nv[zv] !== vv[zv]));
                                      1 === zv.length && Nv[zv[0]] < vv[zv[0]] && gv(Nv, vv)
                                    }
                                  vv.setLineDash([])
                                }(zv, mv, jv, Yv, Tv);
                                const nv = Nv.current,
                                  Ov = hv.map((vv => ({
                                    particle: vv,
                                    at: Yv(vv.pos[0], vv.pos[1], vv.pos[2])
                                  }))).filter((vv => null !== vv.at)).sort(((vv, zv) => zv.at.depth - vv.at.depth));
                                zv.imageSmoothingEnabled = !1;
                                for (const vv of function(vv) {
                                    switch (vv) {
                                      case ZP.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case ZP.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case ZP.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case ZP.f.MultiplyAdd:
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
                                  }(fv.blendMode)) {
                                  zv.globalCompositeOperation = vv.operation;
                                  for (const {
                                      particle: hv,
                                      at: Sv
                                    }
                                    of Ov) {
                                    const [ev, gv, pv, dv] = oP(hv), Nv = Math.max(1, hv.size * Sv.scale);
                                    zv.globalAlpha = vv.usesAlpha ? Math.min(1, Math.max(0, dv)) : 1, nv ? zv.drawImage(Pv.get(nv, ev, gv, pv), Sv.x - Nv / 2, Sv.y - Nv / 2, Nv, Nv) : (zv.fillStyle = `rgb(${255*ev}, ${255*gv}, ${255*pv})`, zv.fillRect(Sv.x - Nv / 2, Sv.y - Nv / 2, Nv, Nv))
                                  }
                                }
                                zv.globalCompositeOperation = "source-over", zv.globalAlpha = 1
                              };
                              av = requestAnimationFrame(cv);
                              const Gv = new IntersectionObserver((vv => {
                                let [zv] = vv;
                                sv = zv.isIntersecting
                              }));
                              Gv.observe(vv);
                              const mv = zv => {
                                  Cv = zv.clientX, vv.setPointerCapture(zv.pointerId)
                                },
                                jv = vv => {
                                  null !== Cv && (ev += .01 * (vv.clientX - Cv), Cv = vv.clientX)
                                },
                                fv = () => {
                                  Cv = null
                                };
                              return vv.addEventListener("pointerdown", mv), vv.addEventListener("pointermove", jv), vv.addEventListener("pointerup", fv), vv.addEventListener("pointercancel", fv), () => {
                                cancelAnimationFrame(av), Gv.disconnect(), lv.current = null, vv.removeEventListener("pointerdown", mv), vv.removeEventListener("pointermove", jv), vv.removeEventListener("pointerup", fv), vv.removeEventListener("pointercancel", fv)
                              }
                            }), []), (0, av.jsx)("canvas", {
                              ref: gv,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${zv.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const eS = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            gS = [{
                              mode: ZP.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: ZP.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: ZP.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: ZP.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: ZP.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            pS = (0, hv.forwardRef)((function(vv, zv) {
                              var Pv, Sv;
                              let {
                                textures: gv
                              } = vv;
                              const pv = Gh(),
                                dv = (0, hv.useRef)(null),
                                [Nv, lv] = (0, hv.useState)(LP),
                                [Tv, Wv] = (0, hv.useState)("example"),
                                [wv, sv] = (0, hv.useState)(0),
                                [iv, cv] = (0, hv.useState)(!1),
                                mv = vv => {
                                  const zv = "example" === vv ? LP : AP(vv);
                                  zv && (lv(zv), Wv(vv))
                                };
                              (0, hv.useImperativeHandle)(zv, (() => ({
                                preview: vv => {
                                  var zv;
                                  mv(vv), null === (zv = dv.current) || void 0 === zv || zv.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const jv = vv => {
                                  lv({
                                    ...Nv,
                                    ...vv
                                  }), Wv(null)
                                },
                                fv = function(vv, zv) {
                                  if (null !== zv) return `${uP}    presetId: "${zv}",\n${vh}\n})`;
                                  const Pv = vv.velocityGradients.map((vv => `        {\n            timeFraction: ${rP(vv.timeFraction)},\n            factor: ${rP(vv.factor)},\n            factor2: ${rP(vv.factor2)},\n        },`)),
                                    hv = [`    dir1: ${kP(vv.dir1)},`, `    dir2: ${kP(vv.dir2)},`, vh, `    texture: "${vv.texture}",`, `    minLifeTime: ${rP(vv.minLifeTime)},`, `    maxLifeTime: ${rP(vv.maxLifeTime)},`, `    minEmitPower: ${rP(vv.minEmitPower)},`, `    maxEmitPower: ${rP(vv.maxEmitPower)},`, `    minSize: ${rP(vv.minSize)},`, `    maxSize: ${rP(vv.maxSize)},`, `    manualEmitCount: ${rP(vv.manualEmitCount)},`, `    gravity: ${kP(vv.gravity)},`, `    colorGradients: ${XP(vv.colorGradients,"    ")},`, `    velocityGradients: ${Pv.length>0?`[\n${Pv.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${rP(vv.blendMode)},`];
                                  return void 0 !== vv.hideDist && hv.push(`    hideDist: ${rP(vv.hideDist)},`), `${uP}${hv.join("\n")}\n})`
                                }(Nv, null === Tv || "example" === Tv ? null : Tv),
                                Yv = gv.includes(Nv.texture) ? gv : [...gv, Nv.texture];
                              return (0, av.jsxs)("section", {
                                ref: dv,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, av.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, av.jsxs)("div", {
                                    children: [(0, av.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, av.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, av.jsx)(Gv, {
                                    text: fv,
                                    label: "Copy code"
                                  })]
                                }), (0, av.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, av.jsx)("button", {
                                    type: "button",
                                    className: ev()("DocsVariantChip", {
                                      Active: "example" === Tv
                                    }),
                                    onClick: () => {
                                      mv("example")
                                    },
                                    children: "Example"
                                  }), eS.filter((vv => null !== AP(vv))).map((vv => (0, av.jsx)("button", {
                                    type: "button",
                                    className: ev()("DocsVariantChip", {
                                      Active: Tv === vv
                                    }),
                                    onClick: () => {
                                      mv(vv)
                                    },
                                    children: vv
                                  }, vv))), (0, av.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Tv && void 0 !== Tv ? Tv : "custom",
                                    "aria-label": "Preset",
                                    onChange: vv => {
                                      mv(vv.target.value)
                                    },
                                    children: [(0, av.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Tv && (0, av.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), QP.e.map((vv => (0, av.jsx)("option", {
                                      value: vv,
                                      children: vv
                                    }, vv)))]
                                  })]
                                }), (0, av.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, av.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, av.jsx)(SS, {
                                      opts: Nv,
                                      textureUrl: null !== (Pv = null === pv || void 0 === pv ? void 0 : pv.getParticleTextureUrl(Nv.texture)) && void 0 !== Pv ? Pv : null,
                                      burst: wv,
                                      paused: iv
                                    }), (0, av.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, av.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          sv(wv + 1)
                                        },
                                        children: [(0, av.jsx)(Cv, {
                                          name: "replay"
                                        }), (0, av.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, av.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": iv,
                                        onClick: () => {
                                          cv(!iv)
                                        },
                                        children: [(0, av.jsx)(Cv, {
                                          name: iv ? "play" : "pause"
                                        }), (0, av.jsx)("span", {
                                          children: iv ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, av.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, av.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, av.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, av.jsx)("span", {
                                          children: "Texture"
                                        }), (0, av.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Nv.texture
                                        })]
                                      }), (0, av.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: Yv.map((vv => {
                                          var zv;
                                          const Pv = null !== (zv = null === pv || void 0 === pv ? void 0 : pv.getParticleTextureUrl(vv)) && void 0 !== zv ? zv : null;
                                          return (0, av.jsx)("button", {
                                            type: "button",
                                            className: ev()("DocsParticleTexture", {
                                              Active: Nv.texture === vv
                                            }),
                                            title: vv,
                                            "aria-label": vv,
                                            "aria-pressed": Nv.texture === vv,
                                            onClick: () => {
                                              jv({
                                                texture: vv
                                              })
                                            },
                                            children: Pv ? (0, av.jsx)("img", {
                                              src: Pv,
                                              alt: ""
                                            }) : (0, av.jsx)(Cv, {
                                              name: "image"
                                            })
                                          }, vv)
                                        }))
                                      })]
                                    }), (0, av.jsx)(Xh, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Nv.manualEmitCount,
                                      onChange: vv => {
                                        jv({
                                          manualEmitCount: vv
                                        })
                                      }
                                    }), (0, av.jsx)(kh, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Nv.minLifeTime,
                                      high: Nv.maxLifeTime,
                                      onChange: (vv, zv) => {
                                        jv({
                                          minLifeTime: vv,
                                          maxLifeTime: zv
                                        })
                                      }
                                    }), (0, av.jsx)(kh, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Nv.minEmitPower,
                                      high: Nv.maxEmitPower,
                                      onChange: (vv, zv) => {
                                        jv({
                                          minEmitPower: vv,
                                          maxEmitPower: zv
                                        })
                                      }
                                    }), (0, av.jsx)(kh, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Nv.minSize,
                                      high: Nv.maxSize,
                                      onChange: (vv, zv) => {
                                        jv({
                                          minSize: vv,
                                          maxSize: zv
                                        })
                                      }
                                    }), (0, av.jsx)(Xh, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Sv = Nv.gravity[1]) && void 0 !== Sv ? Sv : 0,
                                      onChange: vv => {
                                        var zv, Pv;
                                        jv({
                                          gravity: [null !== (zv = Nv.gravity[0]) && void 0 !== zv ? zv : 0, vv, null !== (Pv = Nv.gravity[2]) && void 0 !== Pv ? Pv : 0]
                                        })
                                      }
                                    }), (0, av.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, av.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, av.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, av.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Nv.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: vv => {
                                          jv({
                                            blendMode: Number(vv.target.value)
                                          })
                                        },
                                        children: gS.map((vv => {
                                          let {
                                            mode: zv,
                                            label: Pv
                                          } = vv;
                                          return (0, av.jsx)("option", {
                                            value: zv,
                                            children: Pv
                                          }, zv)
                                        }))
                                      })]
                                    }), (0, av.jsx)(uh, {
                                      opts: Nv,
                                      onChange: vv => {
                                        jv({
                                          colorGradients: vv
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, av.jsx)(Fv, {
                                  code: fv,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var dS = Pv(4220),
                            NS = Pv(1858);

                          function lS(vv, zv) {
                            return vv ? dS.d.includes(zv) ? vv.getIngameIconUrl(zv) : vv.getItemIconUrl(zv) : null
                          }

                          function TS(vv) {
                            var zv, Pv, hv;
                            let {
                              part: Sv,
                              assets: gv
                            } = vv;
                            const pv = lS(gv, Sv.icon),
                              dv = null !== (zv = null === (Pv = Sv.style) || void 0 === Pv ? void 0 : Pv.fontSize) && void 0 !== zv ? zv : "1.8em",
                              Nv = (0, Qz.Ob)(Sv.style);
                            return (0, av.jsxs)("span", {
                              className: ev()("DocsBloxdTextIcon", {
                                Missing: !pv
                              }),
                              style: {
                                width: dv,
                                height: dv,
                                opacity: null === (hv = Sv.style) || void 0 === hv ? void 0 : hv.opacity
                              },
                              title: pv ? void 0 : `No Bloxd icon, item or block is called "${Sv.icon}"`,
                              children: [pv && Nv && (0, av.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Nv,
                                  maskImage: `url("${pv}")`,
                                  WebkitMaskImage: `url("${pv}")`
                                }
                              }), pv ? (0, av.jsx)("img", {
                                src: pv,
                                alt: "",
                                className: ev()({
                                  Tinted: Nv
                                })
                              }) : (0, av.jsx)(Cv, {
                                name: "image"
                              })]
                            })
                          }

                          function WS(vv) {
                            let {
                              parts: zv,
                              className: Pv
                            } = vv;
                            const hv = Gh(),
                              Sv = [];
                            let gv = [];
                            const pv = vv => {
                              gv.length > 0 && (Sv.push((0, av.jsx)(NS.c, {
                                text: gv
                              }, `run-${vv}`)), gv = [])
                            };
                            return zv.forEach(((vv, zv) => {
                              "icon" !== Mz(vv) || Az(vv.icon) ? gv.push(vv) : (pv(zv), Sv.push((0, av.jsx)(TS, {
                                part: vv,
                                assets: hv
                              }, `icon-${zv}`)))
                            })), pv(zv.length), (0, av.jsx)("div", {
                              className: ev()("DocsStyledTextPreview", Pv),
                              children: Sv
                            })
                          }
                          const wS = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let aS = null;

                          function sS(vv) {
                            if (aS ??= document.createElement("canvas").getContext("2d"), !aS) return "#000000";
                            aS.fillStyle = "#000000", aS.fillStyle = vv;
                            const zv = aS.fillStyle;
                            return zv.startsWith("#") ? zv : "#000000"
                          }

                          function CS(vv) {
                            let {
                              value: zv,
                              label: Pv,
                              onChange: hv
                            } = vv;
                            return (0, av.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, av.jsx)("input", {
                                type: "color",
                                value: sS(zv),
                                "aria-label": `${Pv} picker`,
                                onChange: vv => {
                                  hv(vv.target.value)
                                }
                              }), (0, av.jsx)("input", {
                                type: "text",
                                value: zv,
                                placeholder: "#ffb914 or gold",
                                "aria-label": Pv,
                                spellCheck: !1,
                                onChange: vv => {
                                  hv(vv.target.value)
                                }
                              })]
                            })
                          }

                          function iS(vv) {
                            let {
                              value: zv,
                              fontAwesomeIcons: Pv,
                              onChange: Sv
                            } = vv;
                            const gv = Gh(),
                              [pv, dv] = (0, hv.useState)(Az(zv) ? "fontAwesome" : "bloxd"),
                              [Nv, lv] = (0, hv.useState)(""),
                              Tv = Nv.trim().toLowerCase(),
                              Wv = "bloxd" === pv ? dS.d : Pv,
                              wv = Tv ? Wv.filter((vv => vv.toLowerCase().includes(Tv))) : Wv;
                            return (0, av.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, av.jsx)("input", {
                                type: "text",
                                value: zv,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: vv => {
                                  Sv(vv.target.value)
                                }
                              }), (0, av.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, av.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((vv => (0, av.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": pv === vv,
                                    className: ev()("DocsVariantChip", {
                                      Active: pv === vv
                                    }),
                                    onClick: () => {
                                      dv(vv)
                                    },
                                    children: "bloxd" === vv ? `Bloxd icons (${dS.d.length})` : `Font Awesome (${Pv.length})`
                                  }, vv))), (0, av.jsx)("input", {
                                    type: "search",
                                    value: Nv,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: vv => {
                                      lv(vv.target.value)
                                    }
                                  })
                                ]
                              }), (0, av.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [wv.map((vv => {
                                  const Pv = "bloxd" === pv ? lS(gv, vv) : null;
                                  return (0, av.jsx)("button", {
                                    type: "button",
                                    title: vv,
                                    "aria-label": vv,
                                    "aria-pressed": vv === zv,
                                    className: ev()("DocsIconPickerOption", {
                                      Active: vv === zv
                                    }),
                                    onClick: () => {
                                      Sv(vv)
                                    },
                                    children: "fontAwesome" === pv ? (0, av.jsx)(mP.b, {
                                      name: vv
                                    }) : Pv ? (0, av.jsx)("img", {
                                      src: Pv,
                                      alt: ""
                                    }) : (0, av.jsx)(Cv, {
                                      name: "image"
                                    })
                                  }, vv)
                                })), 0 === wv.length && (0, av.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Nv, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function cS(vv) {
                            let {
                              property: zv,
                              value: Pv,
                              fontAwesomeIcons: hv,
                              onChange: Sv
                            } = vv;
                            const {
                              field: ev,
                              label: gv
                            } = zv, pv = vv => "" !== vv || zv.isRequired ? vv : void 0;
                            switch (ev.kind) {
                              case "text":
                                return ev.multiline ? (0, av.jsx)("textarea", {
                                  value: String(null !== Pv && void 0 !== Pv ? Pv : ""),
                                  rows: 2,
                                  "aria-label": gv,
                                  onChange: vv => {
                                    Sv(vv.target.value)
                                  }
                                }) : (0, av.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Pv && void 0 !== Pv ? Pv : ""),
                                  "aria-label": gv,
                                  onChange: vv => {
                                    Sv(pv(vv.target.value))
                                  }
                                });
                              case "size":
                                return (0, av.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Pv && void 0 !== Pv ? Pv : ""),
                                  placeholder: zv.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": gv,
                                  spellCheck: !1,
                                  onChange: vv => {
                                    Sv(pv(vv.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, av.jsx)(CS, {
                                  value: String(null !== Pv && void 0 !== Pv ? Pv : ""),
                                  label: gv,
                                  onChange: vv => {
                                    Sv(pv(vv))
                                  }
                                });
                              case "colours": {
                                const vv = Array.isArray(Pv) ? Pv : [],
                                  zv = vv => {
                                    Sv(vv.length > 0 ? vv : void 0)
                                  };
                                return (0, av.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [vv.map(((Pv, hv) => (0, av.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, av.jsx)(CS, {
                                      value: Pv,
                                      label: `${gv} ${hv+1}`,
                                      onChange: Pv => {
                                        zv(vv.map(((vv, zv) => zv === hv ? Pv : vv)))
                                      }
                                    }), (0, av.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${hv+1}`,
                                      onClick: () => {
                                        zv(vv.filter(((vv, zv) => zv !== hv)))
                                      },
                                      children: (0, av.jsx)(Cv, {
                                        name: "cross"
                                      })
                                    })]
                                  }, hv))), (0, av.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var Pv;
                                      zv([...vv, null !== (Pv = vv.at(-1)) && void 0 !== Pv ? Pv : "#ffffff"])
                                    },
                                    children: [(0, av.jsx)(Cv, {
                                      name: "plus"
                                    }), 0 === vv.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var dv;
                                const vv = "number" === typeof Pv ? Pv : Number(null !== (dv = zv.defaultText) && void 0 !== dv ? dv : 0);
                                return (0, av.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, av.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: vv,
                                    "aria-label": gv,
                                    onChange: vv => {
                                      Sv(Number(vv.target.value))
                                    }
                                  }), (0, av.jsx)("output", {
                                    children: vv.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, av.jsxs)("select", {
                                  value: String(null !== Pv && void 0 !== Pv ? Pv : ""),
                                  "aria-label": gv,
                                  onChange: vv => {
                                    Sv(pv(vv.target.value))
                                  },
                                  children: [!zv.isRequired && (0, av.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", zv.defaultText, ")"]
                                  }), ev.options.map((vv => (0, av.jsx)("option", {
                                    value: vv,
                                    children: vv
                                  }, vv)))]
                                });
                              case "icon":
                                return (0, av.jsx)(iS, {
                                  value: String(null !== Pv && void 0 !== Pv ? Pv : ""),
                                  fontAwesomeIcons: hv,
                                  onChange: Sv
                                })
                            }
                          }

                          function GS(vv) {
                            let zv;
                            try {
                              zv = JSON.parse(vv)
                            } catch (Pv) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${Pv.message}`
                              }
                            }
                            return PP(zv) ? {
                              part: zv,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function mS(vv) {
                            let {
                              parts: zv,
                              index: Pv,
                              fontAwesomeIcons: Sv,
                              onChange: ev,
                              HO: gv,
                              onClose: pv
                            } = vv;
                            const dv = (0, hv.useContext)(az),
                              lv = (0, hv.useRef)(null),
                              Tv = zv[Pv],
                              Wv = Mz(Tv),
                              [wv, sv] = (0, hv.useState)((() => JSON.stringify(Tv, null, 2))),
                              iv = (0, hv.useMemo)((() => "other" === Wv ? GS(wv).error : null), [Wv, wv]);
                            (0, hv.useEffect)((() => {
                              var vv;
                              null === (vv = lv.current) || void 0 === vv || vv.focus()
                            }), []);
                            const cv = (0, av.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: vv => {
                                vv.target === vv.currentTarget && pv()
                              },
                              children: (0, av.jsxs)("div", {
                                ref: lv,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${Pv+1}: ${Lz[Wv]}`,
                                tabIndex: -1,
                                onKeyDown: vv => {
                                  "Escape" === vv.key ? (vv.stopPropagation(), pv()) : "Tab" === vv.key && lv.current && function(vv, zv) {
                                    const Pv = Array.from(vv.querySelectorAll(Kz)),
                                      hv = Pv[0],
                                      Sv = Pv.at(-1);
                                    if (!hv || !Sv) return;
                                    const ev = document.activeElement;
                                    !zv.shiftKey || ev !== hv && ev !== vv ? zv.shiftKey || ev !== Sv || (zv.preventDefault(), hv.focus()) : (zv.preventDefault(), Sv.focus())
                                  }(lv.current, vv)
                                },
                                children: [(0, av.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, av.jsxs)("div", {
                                    children: [(0, av.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", Pv + 1]
                                    }), (0, av.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: Lz[Wv]
                                    })]
                                  }), (0, av.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: pv,
                                    children: (0, av.jsx)(Cv, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, av.jsx)(WS, {
                                  parts: zv,
                                  className: "DocsTextDialogPreview"
                                }), (0, av.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Wv ? (0, av.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, av.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, av.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: wv,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: vv => {
                                        sv(vv.target.value);
                                        const zv = GS(vv.target.value);
                                        null !== zv.part && ev(zv.part)
                                      }
                                    }), iv && (0, av.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: iv
                                    })]
                                  }) : Bz[Wv].map((vv => {
                                    const zv = Ez(Tv, vv.path),
                                      Pv = vv.isRequired ? JSON.stringify(bz(Tv, vv.path)) === JSON.stringify(Tv) : void 0 === zv;
                                    return (0, av.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, av.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, av.jsx)("span", {
                                          children: vv.label
                                        }), (0, av.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: Pv,
                                          "aria-label": `Reset ${vv.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            ev(bz(Tv, vv.path))
                                          },
                                          children: [(0, av.jsx)(Cv, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, av.jsx)(cS, {
                                        property: vv,
                                        value: zv,
                                        fontAwesomeIcons: Sv,
                                        onChange: zv => {
                                          ev(oz(Tv, vv.path, zv))
                                        }
                                      }), !vv.isRequired && (0, av.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", vv.defaultText]
                                      })]
                                    }, vv.path.join("."))
                                  }))
                                }), (0, av.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, av.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: gv,
                                    children: [(0, av.jsx)(Cv, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, av.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: pv,
                                    children: "Done"
                                  })]
                                }), (0, av.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: wS.map((vv => (0, av.jsx)("option", {
                                    value: vv
                                  }, vv)))
                                })]
                              })
                            });
                            return dv ? (0, Nv.createPortal)(cv, dv) : cv
                          }
                          const jS = [{
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
                            fS = Object.keys(Hz);

                          function FS(vv) {
                            let {
                              fontAwesomeIcons: zv
                            } = vv;
                            const [Pv, Sv] = (0, hv.useState)(jS[0].parts), [gv, pv] = (0, hv.useState)((() => uz(jS[0].parts))), [dv, Nv] = (0, hv.useState)(null), [lv, Tv] = (0, hv.useState)(!1), [Wv, wv] = (0, hv.useState)(null), [sv, iv] = (0, hv.useState)(!1), [cv, Gv] = (0, hv.useState)(null), mv = (0, hv.useRef)(null), jv = uz(Pv);
                            (0, hv.useLayoutEffect)((() => {
                              var vv;
                              if (!cv) return;
                              const zv = vv => {
                                  var zv;
                                  return null === (zv = mv.current) || void 0 === zv ? void 0 : zv.querySelector(`[data-focus-key="${vv}"]`)
                                },
                                Pv = zv(cv.key);
                              null === (vv = Pv && !Pv.disabled ? Pv : zv(cv.fallback)) || void 0 === vv || vv.focus(), Gv(null)
                            }), [cv]);
                            const fv = vv => {
                                Sv(vv), pv(uz(vv)), Nv(null)
                              },
                              Yv = vv => {
                                fv(Pv.filter(((zv, Pv) => Pv !== vv))), Gv({
                                  key: `edit-${Math.min(vv,Pv.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              nv = (vv, zv) => {
                                const hv = [...Pv],
                                  [Sv] = hv.splice(vv, 1);
                                hv.splice(vv + zv, 0, Sv), fv(hv);
                                Gv({
                                  key: `${zv<0?"up":"down"}-${vv+zv}`,
                                  fallback: `edit-${vv+zv}`
                                })
                              };
                            return (0, av.jsxs)("section", {
                              ref: mv,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, av.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, av.jsxs)("div", {
                                  children: [(0, av.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, av.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, av.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: jS.map((vv => (0, av.jsx)("button", {
                                  type: "button",
                                  className: ev()("DocsVariantChip", {
                                    Active: jv === uz(vv.parts)
                                  }),
                                  onClick: () => {
                                    fv(vv.parts)
                                  },
                                  children: vv.label
                                }, vv.label)))
                              }), (0, av.jsx)(WS, {
                                parts: Pv,
                                className: "DocsTextEditorPreview"
                              }), (0, av.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, av.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, av.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, av.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [Pv.map(((vv, zv) => {
                                      const hv = Mz(vv);
                                      return (0, av.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, av.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${zv}`,
                                          "aria-label": `Edit part ${zv+1}, ${Lz[hv]}`,
                                          onClick: () => {
                                            wv(zv)
                                          },
                                          children: [(0, av.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: Lz[hv]
                                          }), (0, av.jsx)(WS, {
                                            parts: [vv],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== hv && (0, av.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: rz(vv)
                                          })]
                                        }), (0, av.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, av.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${zv+1} up`,
                                            "data-focus-key": `up-${zv}`,
                                            disabled: 0 === zv,
                                            onClick: () => {
                                              nv(zv, -1)
                                            },
                                            children: (0, av.jsx)(Cv, {
                                              name: "chevron-up"
                                            })
                                          }), (0, av.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${zv+1} down`,
                                            "data-focus-key": `down-${zv}`,
                                            disabled: zv === Pv.length - 1,
                                            onClick: () => {
                                              nv(zv, 1)
                                            },
                                            children: (0, av.jsx)(Cv, {
                                              name: "chevron-down"
                                            })
                                          }), (0, av.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${zv+1}`,
                                            onClick: () => {
                                              Yv(zv)
                                            },
                                            children: (0, av.jsx)(Cv, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, zv)
                                    })), 0 === Pv.length && (0, av.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, av.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: vv => {
                                      "Escape" === vv.key && sv && (vv.stopPropagation(), iv(!1), Gv({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, av.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": sv,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        iv(!sv)
                                      },
                                      children: [(0, av.jsx)(Cv, {
                                        name: "plus"
                                      }), "Add a part", (0, av.jsx)(Cv, {
                                        name: sv ? "chevron-up" : "chevron-down"
                                      })]
                                    }), sv && (0, av.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: fS.map((vv => (0, av.jsx)("li", {
                                        children: (0, av.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (vv => {
                                              fv([...Pv, Hz[vv]]), iv(!1), wv(Pv.length)
                                            })(vv)
                                          },
                                          children: Lz[vv]
                                        })
                                      }, vv)))
                                    })]
                                  })]
                                }), (0, av.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, av.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, av.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": lv,
                                      onClick: () => {
                                        Tv(!lv)
                                      },
                                      children: [(0, av.jsx)(Cv, {
                                        name: lv ? "check" : "pencil"
                                      }), lv ? "Done" : "Edit"]
                                    })]
                                  }), lv ? (0, av.jsxs)(av.Fragment, {
                                    children: [(0, av.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: gv,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: vv => {
                                        pv(vv.target.value);
                                        const zv = hP(vv.target.value);
                                        Nv(zv.error), zv.parts && Sv(zv.parts)
                                      }
                                    }), dv && (0, av.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: dv
                                    })]
                                  }) : (0, av.jsx)(Fv, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${jv})`
                                  })]
                                })]
                              }), null !== Wv && Wv < Pv.length && (0, av.jsx)(mS, {
                                parts: Pv,
                                index: Wv,
                                fontAwesomeIcons: zv,
                                onChange: vv => {
                                  ((vv, zv) => {
                                    fv(Pv.map(((Pv, hv) => hv === vv ? zv : Pv)))
                                  })(Wv, vv)
                                },
                                HO: () => {
                                  Yv(Wv), wv(null)
                                },
                                onClose: () => {
                                  wv(null), Gv({
                                    key: `edit-${Wv}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var YS = Pv(4592),
                            nS = Pv(4574),
                            OS = Pv(4589),
                            DS = Pv(4595);
                          const KS = 40,
                            VS = 800,
                            US = 150,
                            RS = 8e3,
                            xS = 2e3;

                          function tS(vv, zv) {
                            return 12 * Math.log2(zv / vv)
                          }

                          function qS(vv, zv) {
                            return Math.round(vv * 2 ** (zv / 12) * 10) / 10
                          }

                          function IS(vv) {
                            return `${vv} ms`
                          }

                          function QS(vv) {
                            return `${vv} st`
                          }
                          const ZS = [{
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

                          function AS(vv) {
                            let {
                              synth: zv,
                              onChange: Pv
                            } = vv;
                            const hv = (0, YS.h)(zv);
                            return (0, av.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, av.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, av.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, av.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, av.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, av.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, av.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: YS.e.map((vv => (0, av.jsx)("button", {
                                      type: "button",
                                      className: ev()("DocsVariantChip", {
                                        Active: zv.waveform === vv
                                      }),
                                      "aria-pressed": zv.waveform === vv,
                                      onClick: () => {
                                        Pv({
                                          waveform: vv
                                        })
                                      },
                                      children: vv
                                    }, vv)))
                                  })]
                                }), (0, av.jsx)(Xh, {
                                  label: "Pitch",
                                  min: 0,
                                  max: tS(KS, VS),
                                  step: .1,
                                  value: tS(KS, zv.pitchHz),
                                  format: () => `${zv.pitchHz} Hz`,
                                  onChange: vv => {
                                    Pv({
                                      pitchHz: qS(KS, vv)
                                    })
                                  }
                                }), (0, av.jsx)(Xh, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: zv.syllableMs,
                                  format: IS,
                                  onChange: vv => {
                                    Pv({
                                      syllableMs: vv
                                    })
                                  }
                                }), (0, av.jsx)(Xh, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: zv.volume,
                                  onChange: vv => {
                                    Pv({
                                      volume: vv
                                    })
                                  }
                                })]
                              }), (0, av.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, av.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, av.jsx)(Xh, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: zv.durationMs,
                                  format: IS,
                                  onChange: vv => {
                                    Pv({
                                      durationMs: vv
                                    })
                                  }
                                }), (0, av.jsx)(Xh, {
                                  label: "Fade in",
                                  min: 0,
                                  max: hv.durationMs,
                                  step: 1,
                                  value: hv.attackMs,
                                  format: IS,
                                  onChange: vv => {
                                    Pv({
                                      attackMs: vv
                                    })
                                  }
                                }), (0, av.jsx)(Xh, {
                                  label: "Fade out",
                                  min: 0,
                                  max: hv.durationMs - hv.attackMs,
                                  step: 1,
                                  value: hv.releaseMs,
                                  format: IS,
                                  onChange: vv => {
                                    Pv({
                                      releaseMs: vv
                                    })
                                  }
                                }), (0, av.jsx)(Xh, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: zv.glideSemitones,
                                  format: QS,
                                  onChange: vv => {
                                    Pv({
                                      glideSemitones: vv
                                    })
                                  }
                                }), (0, av.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, av.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== zv.lowpassHz,
                                    onChange: vv => {
                                      Pv({
                                        lowpassHz: vv.target.checked ? xS : null
                                      })
                                    }
                                  }), (0, av.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== zv.lowpassHz && (0, av.jsx)(Xh, {
                                  label: "Filter",
                                  min: 0,
                                  max: tS(US, RS),
                                  step: .1,
                                  value: tS(US, zv.lowpassHz),
                                  format: () => `${zv.lowpassHz} Hz`,
                                  onChange: vv => {
                                    Pv({
                                      lowpassHz: qS(US, vv)
                                    })
                                  }
                                })]
                              }), (0, av.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, av.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), ZS.map((vv => {
                                  let {
                                    key: hv,
                                    label: Sv,
                                    max: ev
                                  } = vv;
                                  return (0, av.jsx)(Xh, {
                                    label: Sv,
                                    min: 0,
                                    max: ev,
                                    step: .1,
                                    value: zv.intonation[hv],
                                    format: QS,
                                    onChange: vv => {
                                      Pv({
                                        intonation: {
                                          ...zv.intonation,
                                          [hv]: vv
                                        }
                                      })
                                    }
                                  }, hv)
                                }))]
                              })]
                            })
                          }
                          const LS = Object.keys(YS.f),
                            HS = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function MS(vv) {
                            var zv;
                            const Pv = JSON.stringify((0, YS.h)(vv));
                            return null !== (zv = LS.find((vv => JSON.stringify((0, YS.h)(YS.f[vv])) === Pv))) && void 0 !== zv ? zv : null
                          }

                          function yS(vv) {
                            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof vv || null === vv) return JSON.stringify(vv);
                            return `{\n${Object.entries(vv).map((vv=>{let[Pv,hv]=vv;return`${zv}    ${Pv}: ${yS(hv,`${zv}    `)},`})).join("\n")}\n${zv}}`
                          }

                          function BS(vv, zv, Pv) {
                            const hv = MS(vv),
                              Sv = [`    line: ${JSON.stringify(zv)},`];
                            return Pv && Sv.push(`    speakerName: ${JSON.stringify(Pv)},`), Sv.push("    voice,"), `const voice = ${hv?JSON.stringify(hv):yS((0,YS.h)(vv))}\n\napi.setClientOption(playerId, "dialogue", {\n${Sv.join("\n")}\n})`
                          }
                          const JS = 400,
                            ES = 90;
                          let oS = null;

                          function bS(vv, zv, Pv) {
                            return oS ??= new AudioContext, oS.resume(), (0, DS.c)(oS, oS.destination, vv, zv, Pv, (() => {}))
                          }

                          function rS() {
                            const [vv, zv] = (0, hv.useState)(YS.f.regular), [Pv, Sv] = (0, hv.useState)(HS[0]), [gv, pv] = (0, hv.useState)("Innkeeper"), [dv, Nv] = (0, hv.useState)(0), lv = lh((vv => vv.volume)), Tv = (0, hv.useRef)(null), Wv = (0, hv.useRef)(0), wv = (0, hv.useRef)(0), sv = () => {
                              var vv;
                              null === (vv = Tv.current) || void 0 === vv || vv.call(Tv), Tv.current = null
                            };
                            (0, hv.useEffect)((() => () => {
                              var vv;
                              null === (vv = Tv.current) || void 0 === vv || vv.call(Tv), window.clearTimeout(Wv.current)
                            }), []);
                            const iv = (0, hv.useMemo)((() => ({
                                line: Pv,
                                speakerName: gv || void 0,
                                voice: vv
                              })), [Pv, gv, vv]),
                              cv = (0, hv.useRef)(iv);
                            cv.current = iv;
                            const mv = MS(vv),
                              jv = vv => {
                                window.clearTimeout(Wv.current), sv();
                                const {
                                  plan: zv,
                                  synth: Pv
                                } = (0, OS.e)(vv);
                                Pv && (Tv.current = bS(Pv, zv.blips, lv)), Nv((vv => vv + 1))
                              },
                              fv = BS(vv, Pv, gv);
                            return (0, av.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, av.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, av.jsxs)("div", {
                                  children: [(0, av.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, av.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, av.jsx)(Gv, {
                                  text: fv,
                                  label: "Copy code"
                                })]
                              }), (0, av.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [LS.map((vv => (0, av.jsx)("button", {
                                  type: "button",
                                  className: ev()("DocsVariantChip", {
                                    Active: mv === vv
                                  }),
                                  "aria-pressed": mv === vv,
                                  onClick: () => {
                                    (vv => {
                                      const Pv = YS.f[vv];
                                      zv(Pv), jv({
                                        ...iv,
                                        voice: Pv
                                      })
                                    })(vv)
                                  },
                                  children: vv
                                }, vv))), !mv && (0, av.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, av.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, av.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, av.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, av.jsx)(nS.b, {
                                      display: iv
                                    }, dv)
                                  }), (0, av.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: vv => {
                                      vv.preventDefault(), jv(iv)
                                    },
                                    children: [(0, av.jsx)("input", {
                                      value: Pv,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: vv => {
                                        Sv(vv.target.value)
                                      }
                                    }), (0, av.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, av.jsx)(Cv, {
                                        name: "play"
                                      }), (0, av.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, av.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: HS.map((vv => (0, av.jsx)("button", {
                                      type: "button",
                                      className: ev()("DocsVariantChip", {
                                        Active: Pv === vv
                                      }),
                                      onClick: () => {
                                        var zv;
                                        Sv(zv = vv), jv({
                                          ...iv,
                                          line: zv
                                        })
                                      },
                                      children: vv
                                    }, vv)))
                                  }), (0, av.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, av.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, av.jsx)("input", {
                                      value: gv,
                                      placeholder: "No name",
                                      onChange: vv => {
                                        pv(vv.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, av.jsx)(AS, {
                                  synth: vv,
                                  onChange: Pv => {
                                    const hv = {
                                      ...vv,
                                      ...Pv
                                    };
                                    zv(hv);
                                    const Sv = {
                                        ...iv,
                                        voice: hv
                                      },
                                      ev = performance.now();
                                    if (ev - wv.current >= ES) {
                                      wv.current = ev, sv();
                                      const vv = (0, OS.e)(Sv).plan.blips[0];
                                      vv && (Tv.current = bS((0, YS.h)(hv), [{
                                        ...vv,
                                        atMs: 0
                                      }], lv))
                                    }
                                    window.clearTimeout(Wv.current), Wv.current = window.setTimeout((() => {
                                      jv(cv.current)
                                    }), JS)
                                  }
                                })]
                              }), (0, av.jsx)(Fv, {
                                code: fv,
                                lang: "ts"
                              })]
                            })
                          }
                          var kS = Pv(4615);
                          const XS = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            uS = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            ve = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${uS}`, "g"), kS.l],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, kS.l]
                            ];

                          function ze(vv) {
                            return `${vv.pageId}#${vv.anchor}`
                          }
                          let Pe, he, Se;

                          function ee(vv) {
                            const zv = (0, Yv.i)(vv),
                              Pv = new Set;
                            for (const [, , hv] of zv.matchAll(Yv.b)) {
                              const vv = hv.startsWith("#") ? Mv(hv) : null,
                                zv = vv ? ze({
                                  pageId: vv.page.id,
                                  anchor: vv.anchor
                                }) : null;
                              null !== zv && (Pe || (Pe = new Set(Iv.flatMap((vv => Kv(vv.layout) ? Lv(vv).sections.map((zv => ze({
                                pageId: vv.id,
                                anchor: zv.heading.anchor
                              }))) : [])))), Pe).has(zv) && Pv.add(zv)
                            }
                            for (const [, , hv] of zv.matchAll(XS)) {
                              const vv = Wz(hv);
                              vv && Pv.add(ze(vv))
                            }
                            return Pv
                          }

                          function ge(vv, zv) {
                            const Pv = new Set,
                              hv = function(vv) {
                                return vv.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(vv);
                            for (const [, Sv] of hv.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) Pv.add(Sv);
                            for (const [Sv, ev] of ve)
                              for (const [, vv] of(0, kS.f)(hv, Sv, ev)) zv.has(vv) && Pv.add(vv);
                            return Pv
                          }

                          function pe(vv, zv, Pv, hv) {
                            const Sv = vv.get(zv);
                            Sv ? !hv && Sv.some((vv => vv.pageId === Pv.pageId)) || Sv.push(Pv) : vv.set(zv, [Pv])
                          }
                          const de = /^[A-Za-z_$][\w$]*$/;

                          function Ne(vv) {
                            return de.test(vv.name) ? vv.name : "options"
                          }

                          function le(vv, zv) {
                            const Pv = vv.params.map(Ne).join(", ");
                            return zv ? `${vv.name} = (${Pv}) => {\n\t\n}` : `api.${vv.name}(${Pv})`
                          }

                          function Te(vv) {
                            let {
                              method: zv,
                              isCallback: Pv
                            } = vv;
                            return (0, av.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, av.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [Pv ? (0, av.jsxs)(av.Fragment, {
                                  children: [(0, av.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: zv.name
                                  }), (0, av.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, av.jsxs)(av.Fragment, {
                                  children: [(0, av.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, av.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: zv.name
                                  }), (0, av.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), zv.params.map(((vv, Pv) => (0, av.jsxs)(hv.Fragment, {
                                  children: [Pv > 0 && (0, av.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, av.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${zv.name}-${Ne(vv)}`,
                                    children: vv.name
                                  })]
                                }, vv.name))), (0, av.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: Pv ? ") => " : ")"
                                }), Pv && !zv.returns && (0, av.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), zv.returns && zv.returns.type && (0, av.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!Pv && (0, av.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, av.jsx)(nz, {
                                  type: zv.returns.type
                                })]
                              })]
                            })
                          }

                          function We(vv) {
                            let {
                              title: zv,
                              references: Pv
                            } = vv;
                            const Sv = (0, hv.useContext)(wz);
                            return (0, av.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, av.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: zv
                              }), Pv.map((vv => (0, av.jsx)(gv.d, {
                                to: Bv(Sv, Zv(vv.pageId), vv.anchor),
                                children: vv.label
                              }, `${vv.pageId}#${vv.anchor}`)))]
                            })
                          }

                          function we(vv) {
                            var zv, Pv;
                            let {
                              pageId: hv,
                              anchor: Sv
                            } = vv;
                            const ev = ze({
                                pageId: hv,
                                anchor: Sv
                              }),
                              gv = null !== (zv = function() {
                                if (!Se) {
                                  Se = new Map;
                                  const hv = new Set(Iv.filter((vv => "callbacks" === vv.layout)).flatMap((vv => Lv(vv).sections.map((vv => vv.heading.text)))));
                                  for (const Sv of Iv)
                                    if ("article" === Sv.layout || "snippets" === Sv.layout)
                                      for (const ev of (0, Yv.u)(Lv(Sv)))
                                        for (const {
                                            code: gv
                                          }
                                          of(0, Yv.l)(ev.blocks))
                                          for (const pv of ge(gv, hv)) {
                                            const hv = Tz().get(pv);
                                            if (hv) {
                                              var vv, zv, Pv;
                                              const gv = {
                                                pageId: Sv.id,
                                                anchor: null !== (vv = null === (zv = ev.heading) || void 0 === zv ? void 0 : zv.anchor) && void 0 !== vv ? vv : "",
                                                label: null !== (Pv = Sv.navTitle) && void 0 !== Pv ? Pv : Sv.title
                                              };
                                              pe(Se, ze(hv), gv, !1)
                                            }
                                          }
                                }
                                return Se
                              }().get(ev)) && void 0 !== zv ? zv : [],
                              pv = null !== (Pv = function() {
                                if (!he) {
                                  he = new Map;
                                  const vv = Zv("changelog");
                                  for (const zv of Lv(vv).sections) {
                                    const Pv = new Set(zv.blocks.flatMap((vv => [...ee(vv)])));
                                    for (const hv of Pv) {
                                      const Pv = {
                                        pageId: vv.id,
                                        anchor: zv.heading.anchor,
                                        label: zv.heading.text
                                      };
                                      pe(he, hv, Pv, !0)
                                    }
                                  }
                                }
                                return he
                              }().get(ev)) && void 0 !== Pv ? Pv : [];
                            return 0 === gv.length && 0 === pv.length ? null : (0, av.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [gv.length > 0 && (0, av.jsx)(We, {
                                title: "Used in",
                                references: gv
                              }), pv.length > 0 && (0, av.jsx)(We, {
                                title: "Changelog",
                                references: pv
                              })]
                            })
                          }

                          function ae(vv) {
                            let {
                              method: zv,
                              pageId: Pv,
                              anchor: hv,
                              isCallback: Sv
                            } = vv;
                            const ev = Sv ? void 0 : pz().get(zv.name),
                              gv = zv.description.length > 0 || null === ev || void 0 === ev || !ev.description ? zv.description : (0, Yv.z)(ev.description);
                            return (0, av.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, av.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, av.jsx)(NP, {
                                  level: 2,
                                  text: zv.name,
                                  anchor: hv,
                                  className: "DocsCardTitle"
                                }), (0, av.jsx)(Gv, {
                                  text: le(zv, Sv),
                                  label: Sv ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, av.jsx)(Te, {
                                method: zv,
                                isCallback: Sv
                              }), ev && null !== ev.deprecation && (0, av.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, av.jsx)("strong", {
                                  children: "Deprecated"
                                }), ev.deprecation && (0, av.jsxs)(av.Fragment, {
                                  children: [": ", (0, av.jsx)(fz, {
                                    text: (pv = ev.deprecation, (0, kS.s)(pv, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, kS.h)("`\\w"), (vv => {
                                      let [zv] = vv;
                                      return Tz().has(zv) ? `\`${zv}\`` : zv
                                    })))
                                  })]
                                })]
                              }), gv.length > 0 && (0, av.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, av.jsx)(wP, {
                                  blocks: gv
                                })
                              }), zv.params.length > 0 && (0, av.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, av.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, av.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: zv.params.map((vv => (0, av.jsxs)("div", {
                                    id: `${zv.name}-${Ne(vv)}`,
                                    className: "DocsParam",
                                    children: [(0, av.jsxs)("dt", {
                                      children: [(0, av.jsx)("code", {
                                        className: "DocsParamName",
                                        children: vv.name
                                      }), (0, av.jsx)(nz, {
                                        type: vv.type
                                      })]
                                    }), vv.description && (0, av.jsx)("dd", {
                                      children: (0, av.jsx)(fz, {
                                        text: vv.description
                                      })
                                    })]
                                  }, vv.name)))
                                })]
                              }), zv.returns && (zv.returns.type || zv.returns.description.length > 0) && (0, av.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, av.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, av.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [zv.returns.type && (0, av.jsx)(nz, {
                                    type: zv.returns.type
                                  }), zv.returns.description.length > 0 && (0, av.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, av.jsx)(wP, {
                                      blocks: zv.returns.description
                                    })
                                  })]
                                })]
                              }), (0, av.jsx)(we, {
                                pageId: Pv,
                                anchor: hv
                              })]
                            });
                            var pv
                          }

                          function se(vv) {
                            var zv;
                            return null !== vv.defaultValue && "undefined" !== vv.defaultValue ? vv.defaultValue : null !== (zv = vv.example) && void 0 !== zv ? zv : "value"
                          }

                          function Ce(vv) {
                            let {
                              setting: zv,
                              pageId: Pv,
                              anchor: hv,
                              setterSnippet: Sv
                            } = vv;
                            const ev = null === zv.defaultValue ? null : iz(zv.defaultValue);
                            return (0, av.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, av.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, av.jsx)(NP, {
                                  level: 2,
                                  text: zv.name,
                                  anchor: hv,
                                  className: "DocsCardTitle"
                                }), (0, av.jsx)(Gv, {
                                  text: Sv(zv.name, se(zv)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, av.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, av.jsxs)("div", {
                                  children: [(0, av.jsx)("dt", {
                                    children: "Type"
                                  }), (0, av.jsx)("dd", {
                                    children: (0, av.jsx)(nz, {
                                      type: zv.type
                                    })
                                  })]
                                }), null !== zv.defaultValue && (0, av.jsxs)("div", {
                                  children: [(0, av.jsx)("dt", {
                                    children: "Default"
                                  }), (0, av.jsx)("dd", {
                                    children: (0, av.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [ev && (0, av.jsx)(cz, {
                                        colour: ev
                                      }), zv.defaultValue]
                                    })
                                  })]
                                }), null !== zv.example && (0, av.jsxs)("div", {
                                  children: [(0, av.jsx)("dt", {
                                    children: "Example"
                                  }), (0, av.jsx)("dd", {
                                    children: (0, av.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: zv.example
                                    })
                                  })]
                                })]
                              }), zv.description.length > 0 && (0, av.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, av.jsx)(wP, {
                                  blocks: zv.description
                                })
                              }), (0, av.jsx)(we, {
                                pageId: Pv,
                                anchor: hv
                              })]
                            })
                          }

                          function ie(vv) {
                            let {
                              section: zv
                            } = vv;
                            return (0, av.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, av.jsx)(NP, {
                                level: 2,
                                text: zv.heading.text,
                                anchor: zv.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, av.jsx)("div", {
                                className: "DocsProse",
                                children: (0, av.jsx)(wP, {
                                  blocks: zv.blocks
                                })
                              })]
                            })
                          }

                          function ce(vv) {
                            let {
                              section: zv
                            } = vv;
                            return (0, av.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, av.jsx)(NP, {
                                level: zv.heading.level,
                                text: zv.heading.text,
                                anchor: zv.heading.anchor
                              }), (0, av.jsx)(wP, {
                                blocks: zv.blocks
                              })]
                            })
                          }
                          const Ge = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function me(vv) {
                            let {
                              page: zv,
                              section: Pv
                            } = vv;
                            if ("methods" === zv.layout || "callbacks" === zv.layout) return (0, av.jsx)(ae, {
                              method: FP(Pv),
                              pageId: zv.id,
                              anchor: Pv.heading.anchor,
                              isCallback: "callbacks" === zv.layout
                            });
                            if ("settings" === zv.layout) {
                              const vv = function(vv) {
                                const zv = {
                                  name: vv.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const hv of vv.blocks) {
                                  var Pv;
                                  if (fP(hv)) continue;
                                  const vv = "paragraph" === hv.kind ? hv.text.match(YP) : null;
                                  if (!vv) {
                                    zv.description.push(hv);
                                    continue
                                  }
                                  const Sv = null !== (Pv = jP(vv[2])) && void 0 !== Pv ? Pv : vv[2];
                                  "Type" === vv[1] ? zv.type = Sv : "Default" === vv[1] ? zv.defaultValue = Sv : "" !== Sv && (zv.example = Sv)
                                }
                                return zv.type ? zv : null
                              }(Pv);
                              if (vv) return (0, av.jsx)(Ce, {
                                setting: vv,
                                pageId: zv.id,
                                anchor: Pv.heading.anchor,
                                setterSnippet: zv.setterSnippet
                              })
                            }
                            return "snippets" === zv.layout ? (0, av.jsx)(ie, {
                              section: Pv
                            }) : "changelog" === zv.layout ? (0, av.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, av.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, av.jsx)(NP, {
                                  level: 2,
                                  text: Pv.heading.text,
                                  anchor: Pv.heading.anchor
                                })
                              }), (0, av.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, av.jsx)(wP, {
                                  blocks: nP(Pv.blocks)
                                })
                              })]
                            }) : zv.gallery ? (0, av.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, av.jsx)(NP, {
                                level: Pv.heading.level,
                                text: Pv.heading.text,
                                anchor: Pv.heading.anchor
                              }), (0, av.jsx)(Oh, {
                                kind: zv.gallery,
                                content: Lv(zv),
                                blocks: Pv.blocks
                              })]
                            }) : (0, av.jsx)(ce, {
                              section: Pv
                            })
                          }

                          function je(vv) {
                            let {
                              page: zv,
                              onTocChange: Pv
                            } = vv;
                            const Sv = Lv(zv),
                              [ev, gv] = (0, hv.useState)(""),
                              pv = "article" !== zv.layout,
                              dv = CP(zv.gallery) ? zv.gallery : null,
                              Nv = null !== dv,
                              lv = ev.trim().toLowerCase(),
                              Tv = (0, hv.useRef)(null),
                              Wv = (0, hv.useCallback)((vv => {
                                var zv;
                                null === (zv = Tv.current) || void 0 === zv || zv.preview(vv)
                              }), []),
                              wv = (0, hv.useMemo)((() => {
                                if (!zv.hasParticlePlayground) return [];
                                const vv = VP(Sv.intro).find((vv => "names" === vv.kind && !vv.names.some((vv => null !== AP(vv.name)))));
                                return "names" === (null === vv || void 0 === vv ? void 0 : vv.kind) ? vv.names.map((vv => vv.name)) : []
                              }), [zv, Sv]),
                              sv = (0, hv.useMemo)((() => {
                                if (!zv.hasTextPlayground) return [];
                                const vv = Sv.sections.flatMap((vv => vv.blocks.flatMap((vv => {
                                  var zv;
                                  return (null !== (zv = KP(vv)) && void 0 !== zv ? zv : []).flatMap((vv => Az(vv.name) ? [vv.name] : []))
                                }))));
                                return [...new Set(vv)]
                              }), [zv, Sv]),
                              Cv = (0, hv.useMemo)((() => lv ? Sv.sections.filter((vv => function(vv, zv) {
                                return !!vv.heading.text.toLowerCase().includes(zv) || vv.blocks.some((vv => (0, Yv.i)(vv).toLowerCase().includes(zv)))
                              }(vv, lv))) : Sv.sections), [Sv, lv]),
                              iv = (0, hv.useMemo)((() => function(vv, zv) {
                                return "article" !== vv.layout ? zv.map((vv => ({
                                  anchor: vv.heading.anchor,
                                  text: vv.heading.text,
                                  level: 2
                                }))) : zv.flatMap((vv => {
                                  const zv = vv.blocks.flatMap((vv => "heading" === vv.kind && 3 === vv.level ? [{
                                    anchor: vv.anchor,
                                    text: vv.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: vv.heading.anchor,
                                    text: vv.heading.text,
                                    level: 2
                                  }, ...zv]
                                }))
                              }(zv, Cv)), [zv, Cv]);
                            return (0, hv.useEffect)((() => {
                              Pv(iv)
                            }), [iv, Pv]), (0, av.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, av.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, av.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Sv.title || zv.title
                                }), (0, av.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: zv.summary
                                }), (0, av.jsx)(oh, {
                                  page: zv
                                }), pv && (0, av.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, av.jsxs)("span", {
                                    children: [(0, av.jsx)("strong", {
                                      children: Sv.sections.length
                                    }), " ", Ge[zv.layout]]
                                  })
                                })]
                              }), "" === zv.slug && (0, av.jsx)(Kh, {}), dv && (0, av.jsx)(xh, {
                                kind: dv
                              }, dv), zv.hasParticlePlayground && (0, av.jsx)(pS, {
                                ref: Tv,
                                textures: wv
                              }), !Nv && Sv.intro.length > 0 && (0, av.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: zv.gallery ? (0, av.jsx)(ih.Provider, {
                                  value: zv.hasParticlePlayground ? Wv : null,
                                  children: (0, av.jsx)(Oh, {
                                    kind: zv.gallery,
                                    content: Sv,
                                    blocks: Sv.intro
                                  })
                                }) : (0, av.jsx)(wP, {
                                  blocks: nP(Sv.intro)
                                })
                              }), zv.hasTextPlayground && (0, av.jsx)(FS, {
                                fontAwesomeIcons: sv
                              }), zv.hasVoicePlayground && (0, av.jsx)(rS, {}), zv.childPageIds && (0, av.jsx)(Kh, {
                                cards: zv.childPageIds.map((vv => ({
                                  pageId: vv
                                }))),
                                label: zv.title
                              }), pv && (0, av.jsx)(GP, {
                                className: "DocsFilterBar",
                                value: ev,
                                placeholder: `Filter ${Sv.sections.length} ${Ge[zv.layout]}\u2026`,
                                label: `Filter ${Ge[zv.layout]}`,
                                onChange: gv,
                                count: lv ? {
                                  visible: Cv.length,
                                  total: Sv.sections.length
                                } : null
                              }), !Nv && (0, av.jsxs)("div", {
                                className: `DocsSections Layout-${zv.layout}`,
                                children: [Cv.map((vv => (0, av.jsx)(me, {
                                  page: zv,
                                  section: vv
                                }, vv.heading.anchor))), 0 === Cv.length && (0, av.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Ge[zv.layout], " match \u201c", ev, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const fe = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Fe(vv) {
                            let {
                              entry: zv,
                              isActive: Pv,
                              onNavigate: hv,
                              label: Sv,
                              children: gv
                            } = vv;
                            return (0, av.jsx)("a", {
                              href: `#${zv.anchor}`,
                              "aria-label": Sv,
                              className: ev()(`Level${zv.level}`, {
                                Active: Pv
                              }),
                              "aria-current": Pv ? "location" : void 0,
                              onClick: vv => {
                                vv.preventDefault(), hv(zv.anchor)
                              },
                              children: gv
                            })
                          }

                          function Ye(vv) {
                            let {
                              toc: zv,
                              activeAnchor: Pv,
                              onNavigate: Sv
                            } = vv;
                            const gv = Math.max(0, zv.findIndex((vv => vv.anchor === Pv))),
                              pv = (0, hv.useRef)(null),
                              dv = (0, hv.useRef)(!1);
                            (0, hv.useEffect)((() => {
                              var vv, Pv;
                              const hv = null === (vv = pv.current) || void 0 === vv ? void 0 : vv.closest(".DocsToc"),
                                Sv = null === (Pv = pv.current) || void 0 === Pv ? void 0 : Pv.querySelector(".DocsTimelineNotch.Active");
                              if (!hv || !Sv) return;
                              let ev = 0;
                              if (gv === zv.length - 1) ev = hv.scrollHeight;
                              else if (gv > 0) {
                                const vv = hv.getBoundingClientRect(),
                                  zv = Sv.getBoundingClientRect();
                                ev = hv.scrollTop + zv.top + zv.height / 2 - (vv.top + hv.clientHeight / 2)
                              }
                              hv.scrollTo({
                                top: ev,
                                behavior: dv.current ? "smooth" : "auto"
                              }), dv.current = !0
                            }), [gv, zv.length]);
                            const Nv = [];
                            return zv.forEach(((vv, zv) => {
                              var Pv, hv, Sv;
                              const ev = function(vv) {
                                  const zv = vv.trim().match(fe);
                                  return zv ? {
                                    day: zv[1],
                                    month: `${zv[2]} ${zv[3]}`
                                  } : null
                                }(vv.text),
                                gv = null !== (Pv = null === ev || void 0 === ev ? void 0 : ev.month) && void 0 !== Pv ? Pv : null;
                              null !== gv && (null === (hv = Nv.at(-1)) || void 0 === hv ? void 0 : hv.month) === gv || Nv.push({
                                month: gv,
                                entries: []
                              }), Nv.at(-1).entries.push({
                                entry: vv,
                                day: null !== (Sv = null === ev || void 0 === ev ? void 0 : ev.day) && void 0 !== Sv ? Sv : null,
                                index: zv
                              })
                            })), (0, av.jsx)("ol", {
                              ref: pv,
                              className: "DocsTimeline",
                              children: Nv.map((vv => {
                                let {
                                  month: zv,
                                  entries: Pv
                                } = vv;
                                return (0, av.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [zv && (0, av.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: zv
                                  }), (0, av.jsx)("ol", {
                                    children: Pv.map((vv => {
                                      let {
                                        entry: zv,
                                        day: Pv,
                                        index: hv
                                      } = vv;
                                      return (0, av.jsx)("li", {
                                        className: ev()("DocsTimelineNotch", {
                                          Passed: hv < gv,
                                          Active: hv === gv
                                        }),
                                        children: (0, av.jsx)(Fe, {
                                          entry: zv,
                                          isActive: hv === gv,
                                          onNavigate: Sv,
                                          label: zv.text,
                                          children: (0, av.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== Pv && void 0 !== Pv ? Pv : zv.text
                                          })
                                        })
                                      }, zv.anchor)
                                    }))
                                  })]
                                }, Pv[0].entry.anchor)
                              }))
                            })
                          }

                          function ne(vv) {
                            let {
                              isChangelog: zv,
                              toc: Pv,
                              activeAnchor: hv,
                              onNavigate: Sv
                            } = vv;
                            return 0 === Pv.length ? null : (0, av.jsxs)(av.Fragment, {
                              children: [(0, av.jsx)("div", {
                                className: "DocsTocTitle",
                                children: zv ? "Updates" : "On this page"
                              }), zv ? (0, av.jsx)(Ye, {
                                toc: Pv,
                                activeAnchor: hv,
                                onNavigate: Sv
                              }) : (0, av.jsx)("ul", {
                                children: Pv.map((vv => (0, av.jsx)("li", {
                                  children: (0, av.jsx)(Fe, {
                                    entry: vv,
                                    isActive: vv.anchor === hv,
                                    onNavigate: Sv,
                                    children: vv.text.replace(/`/g, "")
                                  })
                                }, vv.anchor)))
                              })]
                            })
                          }
                          const Oe = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            De = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Ke = 20,
                            Ve = 10,
                            Ue = 40,
                            Re = 120;
                          let xe;

                          function te(vv) {
                            const zv = vv.gallery;
                            if (!zv) return [];
                            if (CP(zv)) return function(vv) {
                              return cP(vv).entries.map((vv => vv.name))
                            }(zv).map((Pv => ({
                              page: vv,
                              anchor: RP(zv, Pv),
                              title: Pv,
                              kind: De[zv],
                              text: "",
                              listedUnder: vv.title
                            })));
                            const Pv = Lv(vv);
                            return (0, Yv.u)(Pv).flatMap((hv => {
                              const Sv = hv.heading ? `${vv.title} \u203a ${hv.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : vv.title;
                              return tP(zv, Pv, hv.blocks).flatMap((Pv => "names" !== Pv.kind ? [] : Pv.names.map((hv => {
                                const ev = Pv.isSongs ? "Song" : De[zv];
                                return {
                                  page: vv,
                                  anchor: hv.anchor,
                                  title: hv.name,
                                  kind: ev,
                                  text: "",
                                  listedUnder: Sv
                                }
                              }))))
                            }))
                          }

                          function qe(vv, zv, Pv) {
                            const hv = vv.title.toLowerCase();
                            let Sv = 0;
                            if (hv === zv) Sv = 100;
                            else if (hv.startsWith(zv)) Sv = 80;
                            else if (hv.includes(zv)) Sv = 60;
                            else if (Pv.every((vv => hv.includes(vv)))) Sv = 45;
                            else {
                              if (!vv.text.toLowerCase().includes(zv)) return 0;
                              Sv = 20
                            }
                            return Sv - Math.min(hv.length / 10, 9) + ("Page" === vv.kind ? 8 : "Method" === vv.kind ? 3 : 0) - (vv.listedUnder ? Ke : 0)
                          }

                          function Ie(vv, zv) {
                            const Pv = vv.toLowerCase().indexOf(zv),
                              hv = Math.max(0, Pv - Re / 3);
                            return `${hv>0?"\u2026":""}${vv.slice(hv,hv+Re)}${hv+Re<vv.length?"\u2026":""}`
                          }

                          function Qe(vv) {
                            let {
                              text: zv,
                              query: Pv
                            } = vv;
                            const hv = Pv ? zv.toLowerCase().indexOf(Pv) : -1;
                            return -1 === hv ? (0, av.jsx)(av.Fragment, {
                              children: zv
                            }) : (0, av.jsxs)(av.Fragment, {
                              children: [zv.slice(0, hv), (0, av.jsx)("mark", {
                                children: zv.slice(hv, hv + Pv.length)
                              }), zv.slice(hv + Pv.length)]
                            })
                          }

                          function Ze(vv) {
                            let {
                              basePath: zv,
                              onClose: Pv
                            } = vv;
                            const Sv = (0, pv.t)(),
                              [gv, dv] = (0, hv.useState)(""),
                              [Nv, lv] = (0, hv.useState)(0),
                              Tv = (0, hv.useRef)(null),
                              Wv = (0, hv.useRef)(null),
                              wv = gv.trim().toLowerCase(),
                              sv = (0, hv.useMemo)((() => {
                                const vv = (xe || (xe = Iv.flatMap((vv => {
                                  const zv = Lv(vv);
                                  return [{
                                    page: vv,
                                    anchor: "",
                                    title: vv.title,
                                    kind: "Page",
                                    text: vv.summary
                                  }, ...zv.sections.flatMap((zv => {
                                    const Pv = zv.blocks.filter((vv => "paragraph" === vv.kind)).map(Yv.i).join(" ").replace(/[`*]/g, ""),
                                      hv = {
                                        page: vv,
                                        anchor: zv.heading.anchor,
                                        title: zv.heading.text.replace(/`/g, ""),
                                        kind: Oe[vv.layout],
                                        text: Pv
                                      },
                                      Sv = zv.blocks.flatMap((zv => "article" === vv.layout && "heading" === zv.kind && 3 === zv.level ? [{
                                        page: vv,
                                        anchor: zv.anchor,
                                        title: zv.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: hv.title
                                      }] : []));
                                    return [hv, ...Sv]
                                  })), ...te(vv)]
                                }))), xe);
                                if (!wv) return vv.filter((vv => "Page" === vv.kind));
                                const zv = wv.split(/\s+/);
                                let Pv = 0;
                                return vv.map((vv => ({
                                  entry: vv,
                                  score: qe(vv, wv, zv)
                                }))).filter((vv => vv.score > 0)).sort(((vv, zv) => zv.score - vv.score)).filter((vv => !vv.entry.listedUnder || (Pv++, Pv <= Ve))).slice(0, Ue).map((vv => vv.entry))
                              }), [wv]);
                            (0, hv.useEffect)((() => {
                              lv(0)
                            }), [wv]), (0, hv.useEffect)((() => {
                              const vv = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === vv || void 0 === vv || vv.focus()
                              }
                            }), []), (0, hv.useEffect)((() => {
                              var vv, zv;
                              null === (vv = Tv.current) || void 0 === vv || null === (zv = vv.querySelector(".Active")) || void 0 === zv || zv.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Nv]);
                            const iv = vv => {
                              Sv(Bv(zv, vv.page, vv.anchor)), Pv()
                            };
                            return (0, av.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: vv => {
                                vv.target === vv.currentTarget && Pv()
                              },
                              children: (0, av.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: vv => {
                                  vv.target !== Wv.current && vv.preventDefault()
                                },
                                onKeyDown: vv => {
                                  if ("Escape" === vv.key) Pv();
                                  else if ("Tab" === vv.key) {
                                    var zv;
                                    vv.preventDefault(), null === (zv = Wv.current) || void 0 === zv || zv.focus()
                                  }
                                },
                                children: [(0, av.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, av.jsx)(Cv, {
                                    name: "magnifying-glass"
                                  }), (0, av.jsx)("input", {
                                    ref: Wv,
                                    autoFocus: !0,
                                    value: gv,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": sv.length > 0 ? `DocsSearchResult-${Nv}` : void 0,
                                    onChange: vv => {
                                      dv(vv.target.value)
                                    },
                                    onKeyDown: vv => {
                                      if ("ArrowDown" === vv.key || "ArrowUp" === vv.key) {
                                        vv.preventDefault();
                                        const zv = "ArrowDown" === vv.key ? 1 : -1;
                                        lv((Nv + zv + sv.length) % Math.max(sv.length, 1))
                                      } else "Enter" === vv.key && sv[Nv] && iv(sv[Nv])
                                    }
                                  }), (0, av.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, av.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Tv,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!wv && (0, av.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), sv.map(((vv, zv) => {
                                    var Pv;
                                    return (0, av.jsxs)("li", {
                                      id: `DocsSearchResult-${zv}`,
                                      role: "option",
                                      "aria-selected": zv === Nv,
                                      className: ev()("DocsSearchResult", {
                                        Active: zv === Nv
                                      }),
                                      onMouseMove: () => {
                                        lv(zv)
                                      },
                                      onClick: () => {
                                        iv(vv)
                                      },
                                      children: [(0, av.jsx)(Cv, {
                                        name: vv.page.icon
                                      }), (0, av.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, av.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, av.jsx)(Qe, {
                                            text: vv.title,
                                            query: wv
                                          })
                                        }), vv.text && (0, av.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, av.jsx)(Qe, {
                                            text: Ie(vv.text, wv),
                                            query: wv
                                          })
                                        })]
                                      }), (0, av.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === vv.kind ? "Page" : null !== (Pv = vv.listedUnder) && void 0 !== Pv ? Pv : `${vv.kind} \xb7 ${vv.page.title}`
                                      })]
                                    }, `${vv.page.id}#${vv.anchor}`)
                                  })), wv && 0 === sv.length && (0, av.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", gv, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function Ae(vv, zv) {
                            if (zv < 10) return `${vv.toFixed(1)}s`;
                            const Pv = Math.floor(vv);
                            return `${Math.floor(Pv/60)}:${String(Pv%60).padStart(2,"0")}`
                          }

                          function Le() {
                            const vv = lh((vv => vv.track)),
                              zv = lh((vv => vv.volume)),
                              [Pv, Sv] = (0, hv.useState)(0),
                              gv = (0, hv.useRef)(zh);
                            if ((0, hv.useEffect)((() => {
                                if (!vv) return;
                                if (Sv(ah()), "playing" !== vv.status) return;
                                let zv = 0;
                                const Pv = () => {
                                  Sv(ah()), zv = requestAnimationFrame(Pv)
                                };
                                return zv = requestAnimationFrame(Pv), () => {
                                  cancelAnimationFrame(zv)
                                }
                              }), [vv]), !vv) return null;
                            const pv = "paused" !== vv.status,
                              dv = Math.min(Pv, vv.duration);
                            return (0, av.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, av.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, av.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": pv ? `Pause ${vv.name}` : `Play ${vv.name}`,
                                  onClick: wh,
                                  children: (0, av.jsx)(Cv, {
                                    name: pv ? "pause" : "play"
                                  })
                                }), (0, av.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, av.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, av.jsx)("code", {
                                      children: vv.name
                                    }), (0, av.jsx)("span", {
                                      children: vv.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, av.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, av.jsx)("span", {
                                      children: Ae(dv, vv.duration)
                                    }), (0, av.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: vv.duration || 1,
                                      step: .01,
                                      value: dv,
                                      disabled: 0 === vv.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${Ae(dv,vv.duration)} of ${Ae(vv.duration,vv.duration)}`,
                                      onChange: vv => {
                                        const zv = Number(vv.target.value);
                                        ! function(vv) {
                                          var zv;
                                          gh = vv, null === (zv = Sh) || void 0 === zv || zv.seek(vv)
                                        }(zv), Sv(zv)
                                      }
                                    }), (0, av.jsx)("span", {
                                      children: vv.duration > 0 ? Ae(vv.duration, vv.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, av.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, av.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === zv ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === zv ? sh(gv.current) : (gv.current = zv, sh(0))
                                    },
                                    children: (0, av.jsx)(Cv, {
                                      name: "volume",
                                      className: ev()({
                                        Muted: 0 === zv
                                      })
                                    })
                                  }), (0, av.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: zv,
                                    "aria-label": "Volume",
                                    onChange: vv => {
                                      sh(Number(vv.target.value))
                                    }
                                  })]
                                }), (0, av.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var zv;
                                    null === (zv = document.querySelector(`[data-docs-track="${CSS.escape(Ph(vv.name,vv.isSong))}"]`)) || void 0 === zv || zv.focus(), Ch()
                                  },
                                  children: (0, av.jsx)(Cv, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var He = Pv(39);
                          const Me = "docsTheme",
                            ye = window.matchMedia("(prefers-color-scheme: light)");

                          function Be(vv) {
                            let {
                              theme: zv,
                              onChange: Pv
                            } = vv;
                            const hv = "dark" === zv ? "light" : "dark";
                            return (0, av.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${hv} theme`,
                              title: `Switch to ${hv} theme`,
                              onClick: () => {
                                Pv(hv)
                              },
                              children: (0, av.jsx)(Cv, {
                                name: "dark" === zv ? "moon" : "sun"
                              })
                            })
                          }
                          const Je = "https://github.com/Bloxdy/code-api",
                            Ee = "https://discord.gg/playbloxd",
                            oe = 180,
                            be = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function re(vv) {
                            let {
                              basePath: zv,
                              activePageId: Pv,
                              onNavigate: hv
                            } = vv;
                            return (0, av.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Qv.map((vv => (0, av.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, av.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: vv.title
                                }), vv.pageIds.map((vv => {
                                  var Sv;
                                  const pv = Zv(vv);
                                  return (0, av.jsxs)(gv.d, {
                                    to: Bv(zv, pv),
                                    className: ev()("DocsNavLink", {
                                      Active: pv.id === Pv
                                    }),
                                    "aria-current": pv.id === Pv ? "page" : void 0,
                                    onClick: hv,
                                    children: [(0, av.jsx)(Cv, {
                                      name: pv.icon
                                    }), (0, av.jsx)("span", {
                                      children: null !== (Sv = pv.navTitle) && void 0 !== Sv ? Sv : pv.title
                                    })]
                                  }, pv.id)
                                }))]
                              }, vv.title)))
                            })
                          }

                          function ke(vv) {
                            let {
                              basePath: zv,
                              pageId: Pv
                            } = vv;
                            const hv = Qv.flatMap((vv => vv.pageIds)),
                              Sv = hv.indexOf(Pv),
                              ev = Sv > 0 ? Zv(hv[Sv - 1]) : null,
                              pv = Sv < hv.length - 1 ? Zv(hv[Sv + 1]) : null;
                            return (0, av.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [ev ? (0, av.jsxs)(gv.d, {
                                className: "DocsPagerLink Previous",
                                to: Bv(zv, ev),
                                children: [(0, av.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, av.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: ev.title
                                })]
                              }) : (0, av.jsx)("span", {}), pv && (0, av.jsxs)(gv.d, {
                                className: "DocsPagerLink Next",
                                to: Bv(zv, pv),
                                children: [(0, av.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, av.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: pv.title
                                })]
                              })]
                            })
                          }

                          function Xe(vv) {
                            let {
                              basePath: zv,
                              embedded: Pv = !1
                            } = vv;
                            const {
                              pageSlug: Sv = ""
                            } = (0, pv.B)(), Nv = (0, pv.p)(), lv = (0, pv.t)(), Tv = (Wv = Sv, Iv.find((vv => vv.slug === Wv)));
                            var Wv;
                            const [wv, sv] = function() {
                              const [vv, zv] = (0, hv.useState)((() => {
                                const vv = He.h.getItem(Me);
                                return "dark" === vv || "light" === vv ? vv : null
                              })), [Pv, Sv] = (0, hv.useState)(ye.matches ? "light" : "dark");
                              return (0, hv.useEffect)((() => {
                                const vv = () => {
                                  Sv(ye.matches ? "light" : "dark")
                                };
                                return ye.addEventListener("change", vv), () => {
                                  ye.removeEventListener("change", vv)
                                }
                              }), []), [null !== vv && void 0 !== vv ? vv : Pv, vv => {
                                He.h.setItem(Me, vv), zv(vv)
                              }]
                            }(), [iv, cv] = (0, hv.useState)(null), [Gv, mv] = (0, hv.useState)(!1), [jv, fv] = (0, hv.useState)(!1), [Fv, nv] = (0, hv.useState)([]), Ov = function(vv, zv) {
                              const [Pv, Sv] = (0, hv.useState)("");
                              return (0, hv.useEffect)((() => {
                                if (!zv) return;
                                let Pv = 0;
                                const hv = () => {
                                    var hv, ev;
                                    Pv = 0;
                                    const gv = zv.getBoundingClientRect().top + oe;
                                    let pv = null !== (hv = null === (ev = vv[0]) || void 0 === ev ? void 0 : ev.anchor) && void 0 !== hv ? hv : "";
                                    for (const zv of vv) {
                                      const vv = document.getElementById(zv.anchor);
                                      vv && vv.getBoundingClientRect().top <= gv && (pv = zv.anchor)
                                    }
                                    zv.scrollTop + zv.clientHeight >= zv.scrollHeight - 2 && zv.scrollTop > 0 && vv.length > 0 && (pv = vv[vv.length - 1].anchor), Sv(pv)
                                  },
                                  ev = () => {
                                    Pv || (Pv = requestAnimationFrame(hv))
                                  };
                                return hv(), zv.addEventListener("scroll", ev, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(Pv), zv.removeEventListener("scroll", ev)
                                }
                              }), [vv, zv]), Pv
                            }(Fv, iv), Dv = "" === Sv && Nv.hash ? function(vv) {
                              const zv = (0, Yv.q)(vv);
                              if (Hv(Zv("welcome"), zv)) return null;
                              const Pv = Object.hasOwn(yv, zv) ? yv[zv] : null;
                              if (Pv) return {
                                page: Zv(Pv.pageId),
                                anchor: Pv.anchor
                              };
                              const hv = Zv("readme");
                              return Hv(hv, zv) ? {
                                page: hv,
                                anchor: zv
                              } : Mv(`#${zv}`)
                            }(Nv.hash) : null;
                            (0, hv.useEffect)((() => (dv.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              dv.c.set({
                                musicOnFromPage: !0
                              }), Ch()
                            })), []), (0, hv.useEffect)((() => {
                              const vv = vv => {
                                const zv = vv.target;
                                if (zv.closest(".DocsTextDialog")) return;
                                const Pv = zv.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(zv.tagName);
                                "k" === vv.key && (vv.metaKey || vv.ctrlKey) || "/" === vv.key && !Pv ? (vv.preventDefault(), fv(!0)) : "Escape" === vv.key && mv(!1)
                              };
                              return window.addEventListener("keydown", vv), () => {
                                window.removeEventListener("keydown", vv)
                              }
                            }), []);
                            const Kv = (0, hv.useRef)(null);
                            (0, hv.useLayoutEffect)((() => {
                              var vv, zv;
                              if (!iv) return;
                              const Pv = Kv.current === Nv.pathname;
                              Kv.current = Nv.pathname;
                              const hv = (0, Yv.q)(Nv.hash),
                                Sv = hv ? document.getElementById(hv) : null;
                              if (null === (vv = iv.querySelector(".DocsTargeted")) || void 0 === vv || vv.classList.remove("DocsTargeted"), null === Sv || void 0 === Sv || null === (zv = Sv.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === zv || zv.classList.add("DocsTargeted"), Sv) {
                                var ev;
                                const vv = Sv.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (ev = Sv.closest(".DocsChangelogEntry")) && void 0 !== ev ? ev : Sv).scrollIntoView({
                                  block: vv ? "center" : "start",
                                  behavior: Pv ? "smooth" : "auto"
                                })
                              } else Pv || iv.scrollTo({
                                top: 0
                              })
                            }), [iv, Nv.pathname, Nv.hash, Nv.key]);
                            const Vv = (0, hv.useCallback)((() => {
                                mv(!1)
                              }), []),
                              Uv = (0, hv.useCallback)((vv => {
                                lv({
                                  hash: vv
                                })
                              }), [lv]);
                            if (Dv) return (0, av.jsx)(pv.c, {
                              replace: !0,
                              to: Bv(zv, Dv.page, Dv.anchor)
                            });
                            if (!Tv) return (0, av.jsx)(pv.c, {
                              replace: !0,
                              to: zv
                            });
                            const Rv = Pv ? "div" : "main";
                            return (0, av.jsx)(wz.Provider, {
                              value: zv,
                              children: (0, av.jsx)(az.Provider, {
                                value: iv,
                                children: (0, av.jsxs)("div", {
                                  ref: cv,
                                  className: ev()("DocsSite", {
                                    Embedded: Pv,
                                    NavOpen: Gv
                                  }),
                                  "data-theme": wv,
                                  children: [(0, av.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, av.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Gv ? "Close menu" : "Open menu",
                                      "aria-expanded": Gv,
                                      onClick: () => {
                                        mv(!Gv)
                                      },
                                      children: (0, av.jsx)(Cv, {
                                        name: Gv ? "cross" : "menu"
                                      })
                                    }), (0, av.jsxs)(gv.d, {
                                      to: zv,
                                      className: "DocsBrand",
                                      children: [(0, av.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, av.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, av.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, av.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        fv(!0)
                                      },
                                      children: [(0, av.jsx)(Cv, {
                                        name: "magnifying-glass"
                                      }), (0, av.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, av.jsxs)("kbd", {
                                        children: [be ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, av.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, av.jsxs)("a", {
                                        href: Ee,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, av.jsx)(Cv, {
                                          name: "discord"
                                        }), (0, av.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, av.jsxs)("a", {
                                        href: Je,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, av.jsx)(Cv, {
                                          name: "external-link"
                                        }), (0, av.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !Pv && (0, av.jsxs)(gv.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, av.jsx)(Cv, {
                                          name: "play"
                                        }), (0, av.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, av.jsx)(Be, {
                                        theme: wv,
                                        onChange: sv
                                      })]
                                    })]
                                  }), (0, av.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, av.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, av.jsx)(re, {
                                        basePath: zv,
                                        activePageId: Tv.id,
                                        onNavigate: Vv
                                      })
                                    }), (0, av.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Vv
                                    }), (0, av.jsxs)(Rv, {
                                      className: "DocsMain",
                                      children: [(0, av.jsx)(je, {
                                        page: Tv,
                                        onTocChange: nv
                                      }, Tv.id), (0, av.jsx)(ke, {
                                        basePath: zv,
                                        pageId: Tv.id
                                      })]
                                    }), (0, av.jsx)("aside", {
                                      className: ev()("DocsToc", {
                                        Timeline: "changelog" === Tv.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, av.jsx)(ne, {
                                        isChangelog: "changelog" === Tv.layout,
                                        toc: Fv,
                                        activeAnchor: Ov,
                                        onNavigate: Uv
                                      })
                                    })]
                                  }), (0, av.jsx)(Le, {}), jv && (0, av.jsx)(Ze, {
                                    basePath: zv,
                                    onClose: () => {
                                      fv(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4491: (vv, zv, Pv) => {
                          Pv.d(zv, {
                            b: () => hv,
                            f: () => gv,
                            i: () => Cv,
                            l: () => sv,
                            n: () => pv,
                            q: () => Sv,
                            r: () => ev,
                            u: () => av,
                            y: () => wv,
                            z: () => Wv
                          });
                          const hv = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Sv(vv) {
                            try {
                              return decodeURIComponent(vv.slice(1))
                            } catch {
                              return vv.slice(1)
                            }
                          }

                          function ev(vv) {
                            return vv.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const gv = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${hv.source}`, "g");

                          function pv(vv, zv) {
                            return 2 === vv.length ? zv.replace(/^ (.*) $/, "$1") : zv
                          }

                          function dv(vv) {
                            return "" === vv.trim()
                          }

                          function Nv(vv) {
                            const zv = [];
                            for (const Pv of vv.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) zv.length > 0 && zv[zv.length - 1].endsWith("\\") ? zv[zv.length - 1] += `|${Pv}` : zv.push(Pv);
                            return zv.map((vv => vv.trim().replaceAll("\\|", "|")))
                          }
                          const lv = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Tv(vv) {
                            const zv = [],
                              Pv = [{
                                indent: -1,
                                items: zv
                              }];
                            let hv = null;
                            for (const Sv of vv) {
                              const vv = Sv.match(lv);
                              if (!vv) {
                                hv && (hv.text += ` ${Sv.trim()}`);
                                continue
                              }
                              const zv = vv[1].replace(/\t/g, "  ").length;
                              for (; zv <= Pv[Pv.length - 1].indent;) Pv.pop();
                              hv = {
                                text: vv[3].trim(),
                                children: []
                              }, Pv[Pv.length - 1].items.push(hv), Pv.push({
                                indent: zv,
                                items: hv.children
                              })
                            }
                            return zv
                          }

                          function Wv(vv) {
                            const zv = vv.replace(/\r\n/g, "\n").split("\n"),
                              Pv = [];
                            let hv = 0;
                            for (; hv < zv.length;) {
                              const vv = zv[hv];
                              if (dv(vv)) {
                                hv++;
                                continue
                              }
                              const Sv = vv.match(/^\s*```\s*(\w*)\s*$/);
                              if (Sv) {
                                const vv = [];
                                for (hv++; hv < zv.length && !/^\s*```\s*$/.test(zv[hv]);) vv.push(zv[hv]), hv++;
                                hv++, Pv.push({
                                  kind: "code",
                                  lang: Sv[1] || "text",
                                  code: vv.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const gv = vv.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (gv) {
                                const vv = gv[2].trim();
                                Pv.push({
                                  kind: "heading",
                                  level: gv[1].length,
                                  text: vv,
                                  anchor: ev(vv)
                                }), hv++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(vv)) {
                                Pv.push({
                                  kind: "rule"
                                }), hv++;
                                continue
                              }
                              if (vv.trim().startsWith("|") && hv + 1 < zv.length && /^\s*\|[\s:|-]+\|\s*$/.test(zv[hv + 1])) {
                                const Sv = Nv(vv),
                                  ev = [];
                                for (hv += 2; hv < zv.length && zv[hv].trim().startsWith("|");) ev.push(Nv(zv[hv])), hv++;
                                Pv.push({
                                  kind: "table",
                                  header: Sv,
                                  rows: ev
                                });
                                continue
                              }
                              if (vv.startsWith(">")) {
                                const vv = [];
                                for (; hv < zv.length && zv[hv].startsWith(">");) vv.push(zv[hv].replace(/^>\s?/, "")), hv++;
                                Pv.push({
                                  kind: "quote",
                                  blocks: Wv(vv.join("\n"))
                                });
                                continue
                              }
                              if (lv.test(vv)) {
                                const Sv = [],
                                  ev = /^\s*\d+\./.test(vv);
                                for (; hv < zv.length && !dv(zv[hv]) && (lv.test(zv[hv]) || /^\s+\S/.test(zv[hv]));) Sv.push(zv[hv]), hv++;
                                Pv.push({
                                  kind: "list",
                                  ordered: ev,
                                  items: Tv(Sv)
                                });
                                continue
                              }
                              const pv = [];
                              for (; hv < zv.length && !dv(zv[hv]) && !/^\s*```/.test(zv[hv]) && !/^#{1,6}\s/.test(zv[hv]) && !zv[hv].startsWith(">") && !lv.test(zv[hv]) && (!zv[hv].trim().startsWith("|") || 0 !== pv.length);) pv.push(zv[hv].trim()), hv++;
                              0 === pv.length && (pv.push(zv[hv].trim()), hv++), Pv.push({
                                kind: "paragraph",
                                text: pv.join(" ")
                              })
                            }
                            return Pv
                          }

                          function wv(vv) {
                            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const Pv = Wv(vv);
                            let hv = "";
                            const Sv = [],
                              ev = [],
                              gv = new Map;
                            for (const Nv of Pv) {
                              if ("heading" === Nv.kind) {
                                var pv;
                                const vv = (null !== (pv = gv.get(Nv.anchor)) && void 0 !== pv ? pv : 0) + 1;
                                gv.set(Nv.anchor, vv), vv > 1 && (Nv.anchor = `${Nv.anchor}-${vv}`)
                              }
                              if ("heading" === Nv.kind && 1 === Nv.level && !hv) {
                                hv = Nv.text;
                                continue
                              }
                              if ("heading" === Nv.kind && Nv.level <= zv) {
                                ev.push({
                                  heading: Nv,
                                  blocks: []
                                });
                                continue
                              }
                              const vv = ev.at(-1);
                              vv ? vv.blocks.push(Nv) : Sv.push(Nv)
                            }
                            const dv = vv => {
                              for (;
                                "rule" === (null === (zv = vv.at(-1)) || void 0 === zv ? void 0 : zv.kind);) {
                                var zv;
                                vv.pop()
                              }
                            };
                            dv(Sv);
                            for (const Nv of ev) dv(Nv.blocks);
                            return {
                              title: hv,
                              intro: Sv,
                              sections: ev
                            }
                          }

                          function av(vv) {
                            return [{
                              heading: null,
                              blocks: vv.intro
                            }, ...vv.sections.map((vv => ({
                              heading: vv.heading,
                              blocks: vv.blocks
                            })))]
                          }

                          function sv(vv) {
                            return vv.flatMap((vv => "code" === vv.kind ? [vv] : "quote" === vv.kind ? sv(vv.blocks) : []))
                          }

                          function Cv(vv) {
                            switch (vv.kind) {
                              case "heading":
                              case "paragraph":
                                return vv.text;
                              case "code":
                                return vv.code;
                              case "table":
                                return [vv.header, ...vv.rows].map((vv => vv.join(" "))).join(" ");
                              case "list": {
                                const zv = vv => vv.map((vv => `${vv.text} ${zv(vv.children)}`)).join(" ");
                                return zv(vv.items)
                              }
                              case "quote":
                                return vv.blocks.map(Cv).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4582: (vv, zv, Pv) => {
                          Pv.d(zv, {
                            c: () => pv
                          });
                          var hv = Pv(52),
                            Sv = Pv(302),
                            ev = Pv(1871),
                            gv = Pv(1082);

                          function pv(vv) {
                            let {
                              text: zv
                            } = vv;
                            const Pv = [];
                            let pv = "";
                            return (0, Sv.Vb)(zv).forEach(((vv, zv) => {
                              if ("string" === typeof vv || !(0, ev.d)(vv.icon)) return void(pv += "string" === typeof vv ? vv : vv.icon);
                              const Sv = Math.max(0, pv.trimEnd().search(/\S{1,12}$/));
                              Pv.push((0, gv.jsxs)(hv.Fragment, {
                                children: [pv.slice(0, Sv), (0, gv.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [pv.slice(Sv), (0, gv.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": vv.icon,
                                    children: (0, gv.jsx)(ev.b, {
                                      itemName: vv.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, zv)), pv = ""
                            })), Pv.push(pv), (0, gv.jsx)(gv.Fragment, {
                              children: Pv
                            })
                          }
                        }, 4512: (vv, zv, Pv) => {
                          Pv.d(zv, {
                            g: () => cv,
                            c: () => iv
                          });
                          var hv = Pv(52),
                            Sv = Pv(1439),
                            ev = Pv(1858),
                            gv = Pv(4520),
                            pv = Pv(1082);
                          const dv = (0, hv.memo)((function(vv) {
                            let {
                              initialParameters: zv
                            } = vv;
                            const Pv = (0, hv.useRef)(null),
                              Sv = (0, hv.useRef)(null),
                              dv = (0, hv.useRef)(0),
                              Nv = (0, hv.useRef)(null),
                              lv = zv.description,
                              Tv = zv.Bz,
                              {
                                scale: Wv,
                                rotation: wv
                              } = null !== zv && void 0 !== zv ? zv : {},
                              av = (0, gv.f)();
                            return (0, hv.useEffect)((() => {
                              const vv = av.onFrame((() => {
                                const vv = av.getState();
                                if (!vv.isActive || !Pv.current || !Sv.current) return;
                                const zv = vv.state;
                                if (Pv.current.value = zv.progress, zv.clickCount > dv.current) {
                                  dv.current = zv.clickCount;
                                  const vv = Sv.current;
                                  vv.classList.add("pulse"), Nv.current = setTimeout((() => {
                                    vv.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Nv.current), vv()
                              }
                            }), [av]), (0, pv.jsx)(pv.Fragment, {
                              children: (0, pv.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Wv && {
                                    "--scale": Wv
                                  },
                                  ...null !== wv && {
                                    "--rotation": `${wv}deg`
                                  }
                                },
                                children: [(0, pv.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: Pv
                                }), (0, pv.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Sv,
                                  children: (0, pv.jsx)(ev.c, {
                                    text: [{
                                      icon: Tv
                                    }]
                                  })
                                }), (0, pv.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, pv.jsx)(ev.c, {
                                    text: lv
                                  })
                                })]
                              })
                            })
                          }));
                          var Nv = Pv(1035),
                            lv = Pv.n(Nv);
                          const Tv = 2 * Math.PI * 90,
                            Wv = (0, hv.memo)((function(vv) {
                              let {
                                initialParameters: zv
                              } = vv;
                              const Pv = (0, hv.useRef)(null),
                                Sv = (0, hv.useRef)(null),
                                dv = (0, hv.useRef)(null),
                                Nv = zv.label,
                                Wv = zv.icon,
                                wv = zv.bz,
                                {
                                  scale: av,
                                  rotation: sv,
                                  rz: Cv
                                } = null !== zv && void 0 !== zv ? zv : {},
                                iv = (0, gv.f)();
                              return (0, hv.useEffect)((() => {
                                const vv = iv.onFrame((() => {
                                  var vv, zv;
                                  const hv = iv.getState();
                                  if (!hv.isActive || !Sv.current) return;
                                  const ev = hv.state,
                                    gv = null !== (vv = ev.timeRemaining) && void 0 !== vv ? vv : 0,
                                    pv = null !== (zv = ev.Ez) && void 0 !== zv ? zv : 1,
                                    Nv = Tv * (1 - gv / pv);
                                  Sv.current.style.strokeDashoffset = `${Nv}`, Pv.current && (Pv.current.style.opacity = gv > 0 ? "1" : "0"), dv.current && wv && (dv.current.textContent = `${(gv/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  vv()
                                }
                              }), [iv, wv]), (0, pv.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: Pv,
                                style: {
                                  ...null !== av && {
                                    "--scale": av
                                  },
                                  ...null !== sv && {
                                    "--rotation": `${sv}deg`
                                  }
                                },
                                children: [(0, pv.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, pv.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, pv.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, pv.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Tv,
                                      ref: Sv
                                    })]
                                  }), (0, pv.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, pv.jsx)(ev.c, {
                                      text: [{
                                        icon: Wv
                                      }],
                                      className: lv()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: Cv
                                      })
                                    })
                                  })]
                                }), (0, pv.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, pv.jsx)(ev.c, {
                                    text: Nv,
                                    className: "QTETimedClickLabelText"
                                  }), wv && (0, pv.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: dv
                                  })]
                                })]
                              })
                            })),
                            wv = (0, hv.memo)((function(vv) {
                              let {
                                initialParameters: zv
                              } = vv;
                              const Pv = (0, hv.useRef)(null),
                                Sv = (0, hv.useRef)(null),
                                dv = (0, hv.useRef)(null),
                                Nv = (0, hv.useRef)(!1),
                                lv = zv.description,
                                Tv = null === zv || void 0 === zv ? void 0 : zv.icon,
                                Wv = (0, gv.f)();
                              return (0, hv.useEffect)((() => {
                                const vv = Wv.onFrame((() => {
                                  const vv = Wv.getState();
                                  if (!vv.isActive) return;
                                  const zv = vv.state;
                                  if (Pv.current) {
                                    const vv = 100 * (zv.catchZonePosition - zv.Xz / 2);
                                    Pv.current.style.left = `${vv}%`, Pv.current.style.width = 100 * zv.Xz + "%", zv.isCatching !== Nv.current && (Nv.current = zv.isCatching, zv.isCatching ? Pv.current.classList.add("catching") : Pv.current.classList.remove("catching"))
                                  }
                                  Sv.current && (Sv.current.style.left = 100 * zv.moverPosition + "%"), dv.current && (dv.current.value = zv.progress)
                                }));
                                return () => {
                                  vv()
                                }
                              }), [Wv]), (0, pv.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, pv.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, pv.jsx)(ev.c, {
                                    text: lv
                                  })
                                }), (0, pv.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: dv
                                }), (0, pv.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, pv.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: Pv
                                  }), (0, pv.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Sv,
                                    children: (0, pv.jsx)("span", {
                                      children: Tv && (0, pv.jsx)(ev.c, {
                                        text: [{
                                          icon: Tv,
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
                          var av = Pv(626);
                          const sv = (0, hv.memo)((function(vv) {
                              let {
                                initialParameters: zv
                              } = vv;
                              const Pv = (0, hv.useRef)(null),
                                Sv = zv.label,
                                dv = zv.gP,
                                {
                                  icon: Nv,
                                  scale: lv,
                                  rotation: Tv
                                } = null !== zv && void 0 !== zv ? zv : {},
                                Wv = 100 * (.5 - dv / 2),
                                wv = 100 * dv,
                                sv = (0, gv.f)();
                              return (0, hv.useEffect)((() => {
                                const vv = sv.onFrame((() => {
                                  const vv = sv.getState();
                                  if (!vv.isActive || !Pv.current) return;
                                  const zv = vv.state;
                                  Pv.current.style.left = 100 * zv.markerPosition + "%"
                                }));
                                return () => {
                                  vv()
                                }
                              }), [sv]), (0, pv.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, av.N)(lv) && {
                                    "--scale": lv
                                  },
                                  ...!(0, av.N)(Tv) && {
                                    "--rotation": `${Tv}deg`
                                  }
                                },
                                children: [Nv && (0, pv.jsx)(ev.c, {
                                  text: [{
                                    icon: Nv
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, pv.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, pv.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Wv}%`,
                                      width: `${wv}%`
                                    }
                                  }), (0, pv.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: Pv
                                  })]
                                }), (0, pv.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, pv.jsx)(ev.c, {
                                    text: Sv
                                  })
                                })]
                              })
                            })),
                            Cv = (0, hv.memo)((function(vv) {
                              let {
                                initialParameters: zv
                              } = vv;
                              const Pv = (0, hv.useRef)(null),
                                [Sv, dv] = (0, hv.useState)((() => new Array(zv.dP).fill("pending"))),
                                [Nv, lv] = (0, hv.useState)((() => {
                                  const vv = zv.TP;
                                  return (0, av.N)(vv) || vv <= 0 ? [] : new Array(vv).fill("pending")
                                })),
                                Tv = zv.label,
                                {
                                  icon: Wv
                                } = zv,
                                wv = (0, hv.useRef)(0),
                                sv = (0, hv.useRef)(0),
                                Cv = (0, hv.useRef)([]),
                                iv = (0, gv.f)();
                              return (0, hv.useEffect)((() => {
                                const vv = iv.onFrame((() => {
                                  const vv = iv.getState();
                                  if (!vv.isActive || !Pv.current) return;
                                  const zv = vv.state,
                                    hv = 30 + 60 * zv.outerCircleProgress;
                                  if (Pv.current.setAttribute("r", String(hv)), !0 === zv.lastClickResult && zv.successes > wv.current) {
                                    Pv.current.classList.remove("QTERhythmClickOuterCircle--miss"), Pv.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const vv = setTimeout((() => {
                                      var vv;
                                      null === (vv = Pv.current) || void 0 === vv || vv.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    Cv.current.push(vv)
                                  } else if (!1 === zv.lastClickResult && zv.misses > sv.current) {
                                    Pv.current.classList.remove("QTERhythmClickOuterCircle--hit"), Pv.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const vv = setTimeout((() => {
                                      var vv;
                                      null === (vv = Pv.current) || void 0 === vv || vv.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    Cv.current.push(vv)
                                  }
                                  zv.successes === wv.current && zv.misses === sv.current || (wv.current = zv.successes, sv.current = zv.misses, dv((vv => {
                                    const Pv = [...vv];
                                    for (let hv = 0; hv < zv.dP; hv++) Pv[hv] = hv < zv.successes ? "success" : "pending";
                                    return Pv
                                  })), lv((vv => {
                                    if (0 === vv.length) return vv;
                                    const Pv = [...vv];
                                    for (let hv = 0; hv < Pv.length; hv++) Pv[hv] = hv < zv.misses ? "miss" : "pending";
                                    return Pv
                                  })))
                                }));
                                return () => {
                                  vv();
                                  for (const vv of Cv.current) clearTimeout(vv);
                                  Cv.current = []
                                }
                              }), [iv]), (0, pv.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, pv.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Sv.map(((vv, zv) => (0, pv.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === vv ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, zv)))
                                }), (0, pv.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, pv.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, pv.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, pv.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: Pv
                                    })]
                                  }), Wv && (0, pv.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, pv.jsx)(ev.c, {
                                      text: [{
                                        icon: Wv
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Nv.length > 0 && (0, pv.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Nv.map(((vv, zv) => (0, pv.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === vv ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, zv)))
                                }), (0, pv.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, pv.jsx)(ev.c, {
                                    text: Tv
                                  })
                                })]
                              })
                            }));

                          function iv(vv) {
                            let {
                              qte: zv
                            } = vv;
                            switch (zv.type) {
                              case "progressBar":
                                return (0, pv.jsx)(dv, {
                                  initialParameters: zv.parameters
                                });
                              case "timedClick":
                                return (0, pv.jsx)(Wv, {
                                  initialParameters: zv.parameters
                                });
                              case "gravityBar":
                                return (0, pv.jsx)(wv, {
                                  initialParameters: zv.parameters
                                });
                              case "precisionBar":
                                return (0, pv.jsx)(sv, {
                                  initialParameters: zv.parameters
                                });
                              case "rhythmClick":
                                return (0, pv.jsx)(Cv, {
                                  initialParameters: zv.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const cv = (0, hv.memo)((function() {
                            const [vv, zv] = (0, hv.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Sv.g)("qteStateUpdated", (vv => {
                              zv(vv)
                            })), vv.isActive && vv.type ? (0, pv.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, pv.jsx)(iv, {
                                qte: vv
                              })
                            }) : null
                          }))
                        }, 4520: (vv, zv, Pv) => {
                          Pv.d(zv, {
                            c: () => pv,
                            f: () => dv
                          });
                          var hv = Pv(52),
                            Sv = Pv(1285),
                            ev = Pv(4525);
                          const gv = {
                              getState: () => ev.d.getCurrentState(),
                              onFrame: Sv.s
                            },
                            pv = (0, hv.createContext)(gv);

                          function dv() {
                            return (0, hv.useContext)(pv)
                          }
                        }, 4589: (vv, zv, Pv) => {
                          Pv.d(zv, {
                            d: () => tv,
                            e: () => xv
                          });
                          var hv = Pv(4592),
                            Sv = Pv(302);
                          const ev = 120,
                            gv = 260,
                            pv = 1.15,
                            dv = 1.2,
                            Nv = 2,
                            lv = 1.08,
                            Tv = .8,
                            Wv = .95,
                            wv = 8,
                            av = "[\"')\\]\u300d\u300f\uff09]*",
                            sv = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${av}$`),
                            Cv = new RegExp(`[?\uff1f]${av}$`),
                            iv = new RegExp(`[!\uff01]${av}$`),
                            cv = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Gv = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            mv = new RegExp(`[${Gv}]`),
                            jv = new RegExp(`[${Gv}]|[^${Gv}]+`, "g"),
                            fv = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Fv(vv) {
                            let zv = 2166136261;
                            for (let Pv = 0; Pv < vv.length; Pv++) zv ^= vv.charCodeAt(Pv), zv = Math.imul(zv, 16777619);
                            return (zv >>> 0) / 4294967295 * 2 - 1
                          }

                          function Yv(vv) {
                            var zv;
                            if (mv.test(vv)) return 1;
                            const Pv = vv.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              hv = Pv.replace(/[^0-9]/g, "");
                            if (hv.length > 0 && !/\p{L}/u.test(Pv)) return Math.min(hv.length, 4);
                            const Sv = null !== (zv = Pv.match(fv)) && void 0 !== zv ? zv : [];
                            if (0 === Sv.length) {
                              var ev, gv;
                              const vv = null !== (ev = null === (gv = Pv.match(/\p{L}/gu)) || void 0 === gv ? void 0 : gv.length) && void 0 !== ev ? ev : 0;
                              return 0 === vv ? 0 : Math.min(Math.max(1, Math.round(vv / 2.5)), wv)
                            }
                            const pv = Pv.replace(/[^\p{L}]/gu, ""),
                              dv = Sv.length > 1 && "e" === Sv.at(-1) && pv.endsWith("e") && !pv.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(vv.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Sv.length - (dv ? 1 : 0), wv)
                          }

                          function nv(vv) {
                            return vv.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Ov(vv) {
                            const zv = vv.replace(/[^\p{L}]/gu, "");
                            return zv.length >= 2 && zv === zv.toUpperCase() && zv !== zv.toLowerCase()
                          }

                          function Dv(vv, zv) {
                            var Pv;
                            const wv = zv && (0, hv.h)(zv),
                              av = null !== (Pv = null === wv || void 0 === wv ? void 0 : wv.syllableMs) && void 0 !== Pv ? Pv : hv.c,
                              Gv = function(vv) {
                                const zv = [];
                                for (const hv of (0, Sv.Vb)(vv))
                                  if ("string" === typeof hv)
                                    for (const vv of hv.split(/(\s+)/)) {
                                      if ("" === vv) continue;
                                      if (/^\s+$/.test(vv)) {
                                        zv.push({
                                          kind: "space",
                                          text: vv
                                        });
                                        continue
                                      }
                                      if (!mv.test(vv)) {
                                        zv.push({
                                          kind: "word",
                                          text: vv,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let hv = !0;
                                      for (const Sv of null !== (Pv = vv.match(jv)) && void 0 !== Pv ? Pv : []) {
                                        var Pv;
                                        const vv = zv.at(-1);
                                        hv || "word" !== (null === vv || void 0 === vv ? void 0 : vv.kind) || mv.test(Sv) || /[\p{L}\p{N}]/u.test(Sv) ? (hv || zv.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), zv.push({
                                          kind: "word",
                                          text: Sv,
                                          delayMs: 0
                                        }), hv = !1) : vv.text += Sv
                                      }
                                    } else zv.push({
                                      kind: "icon",
                                      text: hv.icon,
                                      delayMs: 0
                                    });
                                return zv
                              }(vv),
                              fv = [];
                            let Dv = [];
                            for (const hv of Gv) "space" !== hv.kind && (Dv.push(hv), sv.test(hv.text) && (fv.push(Dv), Dv = []));
                            fv.push(Dv);
                            const Kv = [];
                            let Vv = 0;
                            for (const hv of fv) {
                              var Uv, Rv;
                              const vv = null !== (Uv = null === (Rv = hv.at(-1)) || void 0 === Rv ? void 0 : Rv.text) && void 0 !== Uv ? Uv : "",
                                zv = Cv.test(vv),
                                Pv = iv.test(vv),
                                Sv = hv.map((vv => "word" === vv.kind ? Yv(vv.text) : 1)),
                                Gv = Sv.findLastIndex((vv => vv > 0));
                              for (const [Cv, iv] of hv.entries()) {
                                const vv = "word" === iv.kind,
                                  hv = Sv[Cv];
                                iv.delayMs = Vv;
                                for (let Sv = 0; wv && Sv < hv; Sv++) {
                                  const {
                                    intonation: ev
                                  } = wv;
                                  let gv = Gv > 0 ? -ev.declineSemitones * (Cv / Gv) : 0;
                                  gv += Fv(`${nv(iv.text)}|${Sv}`) * ev.variationSemitones;
                                  const sv = Math.min(1, ev.variationSemitones);
                                  let cv = wv.glideSemitones,
                                    mv = 1;
                                  Pv && (gv += ev.exclaimLiftSemitones, mv *= pv), zv && Cv === Gv && (gv += ev.questionRiseSemitones * (hv > 1 ? .5 + .5 * Sv / (hv - 1) : 1), Sv === hv - 1 && (cv = Math.abs(cv) + ev.questionRiseSemitones / 2)), vv && Ov(iv.text) && (gv += Nv * sv, mv *= dv), hv > 1 && 0 === Sv && (gv += Tv * sv, mv *= lv), Kv.push({
                                    atMs: Vv + Sv * av,
                                    semitones: gv,
                                    glideSemitones: cv,
                                    durationMs: Sv < hv - 1 ? Math.min(wv.durationMs, av * Wv) : wv.durationMs,
                                    level: mv
                                  })
                                }
                                Vv += hv * av + (sv.test(iv.text) ? gv : cv.test(iv.text) ? ev : 0)
                              }
                            }
                            return {
                              pieces: Gv.map((vv => "space" === vv.kind ? vv : "icon" === vv.kind ? {
                                kind: "icon",
                                icon: vv.text,
                                delayMs: vv.delayMs
                              } : {
                                kind: "word",
                                text: vv.text,
                                delayMs: vv.delayMs
                              })),
                              blips: Kv
                            }
                          }
                          var Kv = Pv(1175),
                            Vv = Pv(1234),
                            Uv = Pv(1884);

                          function Rv(vv) {
                            if ("string" === typeof vv) return vv;
                            const zv = Vv.f.get().getCurrentLanguageCode();
                            return (0, Kv.j)(zv, vv.translationKey, (0, Kv.i)(vv.params, Uv.b.shown))
                          }

                          function xv(vv) {
                            const zv = void 0 === vv.voice ? null : (0, hv.l)(vv.voice),
                              Pv = zv && (0, hv.h)(zv);
                            return {
                              plan: Dv(Rv(vv.line), Pv),
                              synth: Pv
                            }
                          }

                          function tv(vv) {
                            const zv = [];
                            let Pv = [];
                            for (const [Sv, ev] of vv.entries()) {
                              var hv;
                              "space" === ev.kind && (" " !== ev.text || "icon" !== (null === (hv = vv[Sv + 1]) || void 0 === hv ? void 0 : hv.kind)) ? (Pv.length > 0 && zv.push(Pv), zv.push([ev]), Pv = []) : Pv.push(ev)
                            }
                            return Pv.length > 0 && zv.push(Pv), zv
                          }
                        }, 4595: (vv, zv, Pv) => {
                          Pv.d(zv, {
                            c: () => lv,
                            e: () => Tv
                          });
                          var hv = Pv(4603),
                            Sv = Pv(22);
                          const ev = .25,
                            gv = .85,
                            pv = .02,
                            dv = .01;

                          function Nv(vv, zv, Pv, hv, Sv, ev, pv) {
                            const {
                              waveform: dv,
                              pitchHz: Nv,
                              attackMs: lv,
                              releaseMs: Tv,
                              lowpassHz: Wv
                            } = Pv, wv = Sv + hv.durationMs / 1e3, av = Nv * 2 ** (hv.semitones / 12), sv = vv.createOscillator();
                            sv.type = dv, sv.frequency.setValueAtTime(av, Sv), sv.frequency.exponentialRampToValueAtTime(av * 2 ** (hv.glideSemitones / 12), wv);
                            const Cv = Sv + Math.min(lv, hv.durationMs) / 1e3,
                              iv = vv.createGain();
                            iv.gain.setValueAtTime(0, Sv), iv.gain.linearRampToValueAtTime(ev, Cv), iv.gain.linearRampToValueAtTime(ev * gv, Math.max(Cv, wv - Tv / 1e3)), iv.gain.linearRampToValueAtTime(0, wv);
                            const cv = [sv];
                            if (null !== Wv) {
                              const zv = vv.createBiquadFilter();
                              zv.type = "lowpass", zv.frequency.value = Wv, cv.push(zv)
                            }
                            cv.push(iv, zv);
                            for (let gv = 1; gv < cv.length; gv++) cv[gv - 1].connect(cv[gv]);
                            return sv.onended = () => {
                              for (const vv of cv.slice(0, -1)) vv.disconnect();
                              pv()
                            }, sv.start(Sv), sv.stop(wv), sv
                          }

                          function lv(vv, zv, Pv, hv, Sv, gv) {
                            if (0 === hv.length) return gv(), () => {};
                            const lv = ev * Pv.volume * Sv,
                              Tv = vv.createGain();
                            Tv.connect(zv);
                            const Wv = vv.currentTime + pv,
                              wv = new Set;
                            for (const ev of hv) {
                              const zv = Nv(vv, Tv, Pv, ev, Wv + ev.atMs / 1e3, lv * ev.level, (() => {
                                wv.delete(zv), 0 === wv.size && (Tv.disconnect(), gv())
                              }));
                              wv.add(zv)
                            }
                            return () => {
                              const zv = vv.currentTime;
                              Tv.gain.setTargetAtTime(0, zv, dv);
                              for (const vv of wv) try {
                                vv.stop(zv + 5 * dv)
                              } catch {}
                            }
                          }

                          function Tv(vv, zv) {
                            var Pv;
                            const ev = hv.Howler.ctx,
                              gv = hv.Howler.masterGain;
                            if (!ev || !gv || !Sv.c.get("soundOnFromAd")) return () => {};
                            const pv = hv.Howler;
                            return null === (Pv = pv._autoResume) || void 0 === Pv || Pv.call(pv), lv(ev, gv, vv, zv, Sv.c.get("soundVolume"), (() => {
                              var vv;
                              null === (vv = pv._autoSuspend) || void 0 === vv || vv.call(pv)
                            }))
                          }
                        }, 4603: (vv, zv, Pv) => {
                          Pv.r(zv), Pv.d(zv, {
                            Howl: () => Sv.Howl,
                            Howler: () => Sv.Howler,
                            musicOutput: () => av,
                            readyAudioContext: () => sv
                          });
                          var hv, Sv = Pv(4611),
                            ev = Pv(4411);
                          const gv = Sv.Howler;

                          function pv() {
                            var vv, zv;
                            if (gv.ctx || !gv.usingWebAudio || "undefined" === typeof AudioContext || !(0, ev.f)()) return;
                            const Pv = navigator.audioSession;
                            let hv;
                            "auto" === (null === Pv || void 0 === Pv ? void 0 : Pv.type) && (Pv.type = "ambient");
                            try {
                              hv = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Sv = hv.createGain();
                            Sv.gain.setValueAtTime(gv._muted ? 0 : null !== (vv = gv._volume) && void 0 !== vv ? vv : 1, hv.currentTime), Sv.connect(hv.destination), gv.ctx = hv, gv.masterGain = Sv, null === (zv = gv._setup) || void 0 === zv || zv.call(gv)
                          }
                          gv._mobileUnloaded = !0;
                          const dv = gv.volume.bind(Sv.Howler);
                          gv.volume = function() {
                            return pv(), dv(...arguments)
                          };
                          const Nv = gv.mute.bind(Sv.Howler);
                          gv.mute = vv => (pv(), Nv(vv));
                          const lv = Sv.Howl.prototype,
                            Tv = lv.init;
                          lv.init = function(vv) {
                            return pv(), Tv.call(this, vv)
                          };
                          let Wv = 0;
                          const wv = null === (hv = gv._autoSuspend) || void 0 === hv ? void 0 : hv.bind(Sv.Howler);

                          function av() {
                            sv();
                            const {
                              ctx: vv,
                              masterGain: zv
                            } = gv;
                            return vv && zv ? {
                              ctx: vv,
                              destination: zv,
                              holdAwake: vv => {
                                var zv, Pv;
                                (Wv += vv ? 1 : -1, vv) ? null === (zv = gv._autoResume) || void 0 === zv || zv.call(gv): null === (Pv = gv._autoSuspend) || void 0 === Pv || Pv.call(gv)
                              },
                              wake: () => {
                                var zv;
                                "running" !== vv.state && (null === (zv = gv._autoResume) || void 0 === zv || zv.call(gv), vv.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function sv() {
                            var vv;
                            (gv.volume(), gv.ctx && gv.autoUnlock) && (null === (vv = gv._unlockAudio) || void 0 === vv || vv.call(gv))
                          }
                          wv && (gv._autoSuspend = () => Wv > 0 ? Sv.Howler : wv())
                        }, 4615: (vv, zv, Pv) => {
                          function hv(vv) {
                            return {
                              notAfter: vv
                            }
                          }
                          Pv.d(zv, {
                            c: () => dv,
                            f: () => Nv,
                            g: () => pv,
                            h: () => hv,
                            l: () => Sv,
                            m: () => ev,
                            q: () => gv,
                            s: () => lv,
                            t: () => Tv
                          });
                          const Sv = hv("\\w$."),
                            ev = hv("\\w.,");

                          function gv(vv) {
                            return zv => dv(zv, vv)
                          }

                          function pv(vv) {
                            return zv => !vv.test(zv.input.slice(0, zv.index))
                          }

                          function dv(vv, zv) {
                            return vv.index > 0 && new RegExp(`[${zv}]`).test(vv.input[vv.index - 1])
                          }

                          function Nv(vv, zv, Pv) {
                            return function(vv) {
                              return void 0 !== vv && "function" !== typeof vv
                            }(Pv) ? function(vv, zv, Pv) {
                              const hv = zv.flags.replace(/[gy]/g, ""),
                                Sv = new RegExp(`[^${Pv}](?:${zv.source})`, `${hv}g`),
                                ev = [],
                                gv = Pv => {
                                  const hv = Pv.index + Pv[0].length;
                                  return ("" === Pv[0] ? Wv(vv, zv, hv) : hv) - 1
                                },
                                pv = new RegExp(`(?:${zv.source})`, `${hv}y`).exec(vv);
                              if (pv) {
                                if (ev.push(pv), !zv.global) return ev;
                                Sv.lastIndex = gv(pv)
                              }
                              for (let dv = Sv.exec(vv); dv; dv = Sv.exec(vv)) {
                                const Pv = Wv(vv, zv, dv.index) - dv.index;
                                if (dv[0] = dv[0].slice(Pv), dv.index += Pv, ev.push(dv), !zv.global) break;
                                Sv.lastIndex = gv(dv)
                              }
                              return ev
                            }(vv, zv, Pv.notAfter) : function(vv, zv, Pv) {
                              const hv = new RegExp(zv.source, `${zv.flags.replace(/[gy]/g,"")}g`),
                                Sv = [];
                              for (let ev = hv.exec(vv); ev; ev = hv.exec(vv))
                                if (!Pv || Pv(ev)) {
                                  if (Sv.push(ev), !zv.global) break;
                                  "" === ev[0] && (hv.lastIndex = Wv(vv, zv, hv.lastIndex))
                                } else hv.lastIndex = Wv(vv, zv, ev.index);
                              return Sv
                            }(vv, zv, Pv)
                          }

                          function lv(vv, zv, Pv, hv) {
                            let Sv = "",
                              ev = 0;
                            for (const gv of Nv(vv, zv, Pv)) Sv += vv.slice(ev, gv.index) + hv(gv), ev = gv.index + gv[0].length;
                            return Sv + vv.slice(ev)
                          }

                          function Tv(vv, zv, Pv) {
                            const hv = [];
                            let Sv = 0;
                            for (const ev of Nv(vv, zv, Pv)) hv.push(vv.slice(Sv, ev.index)), Sv = ev.index + ev[0].length;
                            return [...hv, vv.slice(Sv)]
                          }

                          function Wv(vv, zv, Pv) {
                            var hv;
                            return Pv + (zv.unicode && (null !== (hv = vv.codePointAt(Pv)) && void 0 !== hv ? hv : 0) > 65535 ? 2 : 1)
                          }
                        }, 4570: (vv, zv, Pv) => {
                          Pv.d(zv, {
                            A: () => wv,
                            b: () => Sv,
                            c: () => dv,
                            d: () => ev,
                            h: () => gv,
                            j: () => pv,
                            n: () => Cv,
                            q: () => lv,
                            t: () => Tv,
                            w: () => sv
                          });
                          var hv = Pv(1567);
                          const Sv = 24e3,
                            ev = "/docs/llms.txt",
                            gv = `${hv.d}${ev}`,
                            pv = "/llms.txt",
                            dv = "/docs/llms-full.txt";

                          function Nv(vv) {
                            return vv || "index"
                          }

                          function lv(vv) {
                            return `/docs/${Nv(vv)}.md`
                          }

                          function Tv(vv, zv) {
                            return `/docs/${Nv(vv)}/${zv+1}.md`
                          }
                          const Wv = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function wv(vv) {
                            const zv = Wv.exec(vv);
                            return null === zv ? null : {
                              name: zv[1],
                              part: void 0 === zv[2] ? null : Number(zv[2])
                            }
                          }
                          const av = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function sv(vv) {
                            const zv = av.exec(vv);
                            if (null === zv) return null;
                            const [, Pv = "", hv] = zv;
                            return void 0 === hv ? lv(Pv) : Tv(Pv, Number(hv) - 1)
                          }

                          function Cv(vv) {
                            return `/docsHtml/${Nv(vv)}.html`
                          }
                        }, 4592: (vv, zv, Pv) => {
                          Pv.d(zv, {
                            c: () => Sv,
                            e: () => hv,
                            f: () => ev,
                            h: () => dv,
                            l: () => gv
                          });
                          const hv = ["sine", "triangle", "square", "sawtooth"],
                            Sv = 55,
                            ev = {
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

                          function gv(vv) {
                            return "string" !== typeof vv ? vv : Object.hasOwn(ev, vv) ? ev[vv] : null
                          }

                          function pv(vv, zv, Pv) {
                            return Math.min(Pv, Math.max(zv, vv))
                          }

                          function dv(vv) {
                            const zv = pv(vv.durationMs, 10, 500),
                              Pv = pv(vv.attackMs, 0, zv),
                              {
                                intonation: Sv
                              } = vv;
                            return {
                              waveform: hv.includes(vv.waveform) ? vv.waveform : "sine",
                              pitchHz: pv(vv.pitchHz, 20, 4e3),
                              glideSemitones: pv(vv.glideSemitones, -24, 24),
                              durationMs: zv,
                              attackMs: Pv,
                              releaseMs: pv(vv.releaseMs, 0, zv - Pv),
                              lowpassHz: null === vv.lowpassHz ? null : pv(vv.lowpassHz, 20, 2e4),
                              volume: pv(vv.volume, 0, 2),
                              intonation: {
                                variationSemitones: pv(Sv.variationSemitones, 0, 6),
                                declineSemitones: pv(Sv.declineSemitones, 0, 12),
                                questionRiseSemitones: pv(Sv.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: pv(Sv.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: pv(vv.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const vv in modules) Object.freeze(modules[vv]);