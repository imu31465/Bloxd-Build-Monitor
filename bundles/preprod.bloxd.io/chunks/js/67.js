export const id = 67;
export const ids = [67, 81];
export const modules = {
    4037: (yb, bb, Wy) => {
      Wy.d(bb, {
        c: () => Ey,
        d: () => ly
      });
      var Uy = Wy(898),
        hy = Wy.n(Uy),
        fy = Wy(55),
        Zy = Wy(1042),
        cb = Wy(4046),
        Py = Wy(1546),
        oy = Wy(2005),
        By = Wy(4050),
        Ky = Wy(952);
      const ey = new WeakMap;
      let qb = 0;

      function sy(yb) {
        let bb = ey.get(yb);
        return void 0 === bb && (bb = qb++, ey.set(yb, bb)), bb
      }

      function Sy(yb) {
        let {
          piece: bb
        } = yb;
        return "space" === bb.kind ? (0, Ky.jsx)(Ky.Fragment, {
          children: bb.text
        }) : (0, Ky.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${bb.delayMs}ms`
          },
          children: (0, Ky.jsx)(cb.c, {
            text: "icon" === bb.kind ? `[[${bb.icon}]]` : bb.text
          })
        })
      }

      function Ey(yb) {
        let {
          display: bb
        } = yb;
        const {
          selectedLanguage: Wy
        } = (0, Zy.D)(), Uy = (0, fy.useMemo)((() => (0, By.d)((0, By.f)(bb).plan.pieces)), [bb, Wy.code]);
        return (0, Ky.jsxs)("div", {
          className: hy()("Dialogue", {
            DialogueAnimateIn: !1 !== bb.animateIn
          }),
          children: [bb.speakerName && (0, Ky.jsx)(Py.d, {
            text: bb.speakerName,
            className: "DialogueSpeaker"
          }), (0, Ky.jsx)("p", {
            className: "DialogueLine",
            children: Uy.map(((yb, bb) => 1 === yb.length && "space" === yb[0].kind ? yb[0].text : (0, Ky.jsx)("span", {
              className: "DialogueGlue",
              children: yb.map(((yb, bb) => (0, Ky.jsx)(Sy, {
                piece: yb
              }, bb)))
            }, bb)))
          })]
        })
      }
      const ly = (0, fy.memo)((function() {
        const yb = (0, oy.k)("dialogue");
        return (0, Ky.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: yb && (0, Ky.jsx)(Ey, {
            display: yb
          }, sy(yb))
        })
      }))
    },
    3900: (yb, bb, Wy) => {
        Wy.r(bb), Wy.d(bb, {
          default: () => df
        });
        var Uy = Wy(55),
          hy = Wy(898),
          fy = Wy.n(hy),
          Zy = Wy(1364),
          cb = Wy(1370),
          Py = Wy(19),
          oy = Wy(70),
          By = Wy(3904),
          Ky = Wy(3920),
          ey = Wy(3929),
          qb = Wy(3622),
          sy = Wy(952);
        const Sy = "/textures/docs/icons";

        function Ey(yb) {
          let {
            name: bb,
            isTinted: Wy,
            className: Uy,
            style: hy
          } = yb;
          const Zy = `${Sy}/${bb}.png`;
          return Wy ? (0, sy.jsxs)("span", {
            className: fy()("DocsPixelIcon", "Tinted", Uy),
            "aria-hidden": "true",
            style: hy,
            children: [(0, sy.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Zy}")`,
                WebkitMaskImage: `url("${Zy}")`
              }
            }), (0, sy.jsx)("img", {
              src: Zy,
              alt: ""
            })]
          }) : (0, sy.jsx)("img", {
            className: fy()("DocsPixelIcon", Uy),
            src: Zy,
            alt: "",
            "aria-hidden": "true",
            style: hy
          })
        }
        const ly = 1500;

        function mb() {
          const [yb, bb] = (0, Uy.useState)(null);
          (0, Uy.useEffect)((() => {
            if (null === yb) return;
            const Wy = setTimeout((() => {
              bb(null)
            }), ly);
            return () => {
              clearTimeout(Wy)
            }
          }), [yb]);
          return [yb, yb => {
            (0, qb.c)(yb).then((() => {
              bb({
                text: yb,
                failed: !1
              })
            }), (Wy => {
              console.error("Could not copy to the clipboard", Wy), bb({
                text: yb,
                failed: !0
              })
            }))
          }]
        }

        function Cy(yb) {
          let {
            text: bb,
            label: Wy,
            className: Uy
          } = yb;
          const [hy, Zy] = mb(), cb = !1 === (null === hy || void 0 === hy ? void 0 : hy.failed);
          return (0, sy.jsxs)("button", {
            type: "button",
            className: fy()("DocsCopyButton", Uy, {
              Copied: cb
            }),
            title: `Copy ${bb.length>40?"to clipboard":bb}`,
            "aria-label": Wy ? void 0 : `Copy ${bb}`,
            onClick: yb => {
              yb.stopPropagation(), Zy(bb)
            },
            children: [(0, sy.jsx)(Ey, {
              name: cb ? "check" : "copy"
            }), Wy && (0, sy.jsx)("span", {
              children: cb ? "Copied" : null !== hy && void 0 !== hy && hy.failed ? "Copy failed" : Wy
            })]
          })
        }
        By.e.registerLanguage("javascript", Ky.c), By.e.registerLanguage("typescript", ey.c);
        const Ty = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Vy = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          Jy = 24;

        function gb(yb) {
          let {
            code: bb,
            lang: Wy,
            compact: hy = !1
          } = yb;
          const Zy = (0, Uy.useMemo)((() => function(yb, bb) {
              const Wy = Ty[bb];
              return Wy ? By.e.highlight(yb, {
                language: Wy
              }).value : yb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(bb, Wy)), [bb, Wy]),
            cb = bb.split("\n").length,
            Py = !hy && cb > Jy + 6,
            [oy, Ky] = (0, Uy.useState)(!1),
            ey = Ty[Wy];
          return (0, sy.jsxs)("div", {
            className: fy()("DocsCodeBlock", {
              Compact: hy,
              Collapsed: Py && !oy
            }),
            children: [!hy && (0, sy.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, sy.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: ey ? Vy[ey] : "Text"
              }), (0, sy.jsx)(Cy, {
                text: bb,
                label: "Copy"
              })]
            }), (0, sy.jsx)("pre", {
              children: (0, sy.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Zy
                }
              })
            }), Py && (0, sy.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": oy,
              onClick: () => {
                Ky(!oy)
              },
              children: [(0, sy.jsx)(Ey, {
                name: oy ? "chevron-up" : "chevron-down"
              }), oy ? "Show less" : `Show all ${cb} lines`]
            })]
          })
        }
        var Gy = Wy(3938);
        var Oy = Wy(3946);
        const Ry = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function vb(yb) {
          const bb = new Map;
          let Wy, Uy = [],
            hy = !1;
          const fy = () => {
            Wy && bb.set(Wy.name, Wy.lines.join("\n").trimEnd())
          };
          for (const Zy of yb.split("\n")) {
            const yb = Zy.match(Ry);
            hy || Zy.startsWith("/*") ? (hy || (fy(), Wy = void 0), Uy.push(Zy), hy = !Zy.includes("*/")) : yb ? (fy(), Wy = {
              name: yb[1],
              lines: [...Uy, Zy]
            }, Uy = []) : Wy && (Zy.startsWith(" ") || Zy.startsWith("\t") || /^[}\])|]/.test(Zy)) ? Wy.lines.push(Zy) : Wy && "" !== Zy.trim() && (fy(), Wy = void 0)
          }
          return fy(), bb
        }

        function ib(yb) {
          return "methods" === yb || "callbacks" === yb || "settings" === yb
        }
        const My = {
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
              setterSnippet: (yb, bb) => `api.setClientOption(playerId, "${yb}", ${bb})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (yb, bb) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${yb}", ${bb})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (yb, bb) => `api.setMobSetting(mobId, "${yb}", ${bb})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (yb, bb) => `api.setVehicleSetting(vehicleId, "${yb}", ${bb})`
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
          Yy = {
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

        function Xy(yb) {
          return yb.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function ny(yb) {
          let bb = !1;
          return yb.split("\n").map((yb => (yb.startsWith("```") && (bb = !bb), !bb && /^#{3,} /.test(yb) ? yb.slice(1) : yb))).join("\n")
        }

        function uy(yb) {
          return "readme" === yb ? "getting-started" : Xy(yb)
        }
        const rb = "## Glossary of Referenced Types";
        const Hy = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...Oy.c.flatMap((yb => {
            const bb = {
              id: yb.id,
              slug: uy(yb.id),
              title: yb.title,
              markdown: yb.content,
              ...My[yb.id]
            };
            if ("readme" === yb.id) return function(yb) {
              const bb = yb.markdown.indexOf(rb),
                Wy = yb.markdown.indexOf("\n```", bb),
                Uy = yb.markdown.indexOf("\n```", Wy + 1);
              if (-1 === bb || -1 === Wy || -1 === Uy) throw new Error(`Getting started has no "${rb}" section with a code block`);
              const hy = yb.markdown.slice(bb + 31, Wy).trim(),
                fy = [...vb(yb.markdown.slice(yb.markdown.indexOf("\n", Wy + 1) + 1, Uy))].map((yb => {
                  let [bb, Wy] = yb;
                  return `## ${bb}\n\n\`\`\`ts\n${Wy}\n\`\`\`\n`
                })),
                Zy = yb.markdown.slice(yb.markdown.indexOf("\n", Uy + 1) + 1);
              return [{
                ...yb,
                markdown: `${yb.markdown.slice(0,bb)}${Zy}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${hy}\n\n${fy.join("\n")}`
              }]
            }(bb);
            if ("howTo" === yb.id) {
              const {
                parent: yb,
                guides: Wy
              } = function(yb) {
                const [bb, ...Wy] = yb.markdown.split(/^(?=## )/m), Uy = [bb], hy = [];
                for (const Zy of Wy) {
                  var fy;
                  const bb = Zy.indexOf("\n"),
                    Wy = Zy.slice(3, bb).trim(),
                    cb = Zy.slice(bb + 1);
                  if (!cb.includes("```")) {
                    Uy.push(Zy);
                    continue
                  }
                  const Py = null !== (fy = Yy[Wy]) && void 0 !== fy ? fy : {
                    icon: "lightbulb",
                    summary: `How to use ${Wy.toLowerCase()} in World Code.`
                  };
                  hy.push({
                    id: `${yb.id}${Wy.split(/[^A-Za-z0-9]+/).map((yb=>yb.charAt(0).toUpperCase()+yb.slice(1))).join("")}`,
                    slug: `${yb.slug}-${Xy(Wy)}`,
                    title: Wy,
                    layout: "article",
                    sourceAnchor: (0, Gy.p)(Wy),
                    markdown: `# ${Wy}\n\n${ny(cb)}`,
                    ...Py
                  })
                }
                return {
                  parent: {
                    ...yb,
                    markdown: Uy.join(""),
                    childPageIds: hy.map((yb => yb.id))
                  },
                  guides: hy
                }
              }(bb);
              return [yb, ...Wy]
            }
            return [bb]
          }))],
          ab = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Hy.filter((yb => void 0 !== yb.sourceAnchor)).map((yb => yb.id))]
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

        function Fy(yb) {
          return Hy.find((bb => bb.id === yb))
        }
        const py = new Map;

        function Ly(yb) {
          let bb = py.get(yb.id);
          return bb || (bb = (0, Gy.u)(yb.markdown, "changelog" === yb.layout ? 3 : 2), py.set(yb.id, bb)), bb
        }

        function Qy(yb, bb) {
          return Ly(yb).sections.some((yb => yb.heading.anchor === bb || yb.blocks.some((yb => "heading" === yb.kind && yb.anchor === bb))))
        }

        function jb(yb) {
          const [bb, ...Wy] = yb.replace(/^#/, "").split("-"), Uy = Hy.find((yb => yb.id === bb));
          if (!Uy) return null;
          const hy = Wy.length > 0 ? (0, Gy.p)(Wy.join("-")) : "";
          for (const Zy of null !== (fy = Uy.childPageIds) && void 0 !== fy ? fy : []) {
            var fy;
            const yb = Fy(Zy);
            if (yb.sourceAnchor === hy) return {
              page: yb,
              anchor: ""
            };
            if (Qy(yb, hy)) return {
              page: yb,
              anchor: hy
            }
          }
          return {
            page: Uy,
            anchor: hy
          }
        }
        const Dy = {
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

        function tb(yb, bb) {
          let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Uy = bb.slug ? `${yb}/${bb.slug}` : yb;
          return Wy ? `${Uy}#${Wy}` : Uy
        }
        var wy = Wy(3965);
        const kb = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Ny = new Set(["GameApi", "Console", "_TypeOf"]),
          zb = 4;

        function Iy(yb) {
          let bb = yb.length;
          for (; bb > 0 && "" === yb[bb - 1].trim();) bb--;
          return yb.slice(0, bb)
        }

        function xb(yb) {
          var bb;
          const Wy = Iy(yb);
          if (null === (bb = Wy.at(-1)) || void 0 === bb || !bb.trimEnd().endsWith("*/")) return {
            lines: Wy,
            doc: ""
          };
          const Uy = Wy.findLastIndex((yb => yb.startsWith("/**")));
          return -1 === Uy ? {
            lines: Wy,
            doc: ""
          } : {
            lines: Iy(Wy.slice(0, Uy)),
            doc: Wy.slice(Uy).join("\n")
          }
        }

        function Ay(yb) {
          var bb;
          const Wy = yb.split("\n"),
            Uy = Wy.flatMap(((yb, bb) => kb.test(yb) ? [bb] : []));
          let hy = xb(Wy.slice(0, null !== (bb = Uy[0]) && void 0 !== bb ? bb : Wy.length)).doc;
          return Uy.map(((yb, bb) => {
            var fy;
            const Zy = xb(Wy.slice(yb, null !== (fy = Uy[bb + 1]) && void 0 !== fy ? fy : Wy.length)),
              cb = {
                name: Wy[yb].match(kb)[1],
                doc: hy,
                lines: Zy.lines
              };
            return hy = Zy.doc, cb
          }))
        }

        function dy(yb) {
          var bb;
          const Wy = yb.match(/^readonly \[([\s\S]*)\]$/);
          return Wy ? null !== (bb = Wy[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== bb ? bb : [] : null
        }

        function yW(yb) {
          if (!yb.startsWith("{") || !yb.endsWith("}")) return null;
          const bb = {
              keys: [],
              values: []
            },
            Wy = yb => {
              const Wy = yb.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              Wy && (bb.keys.push(Wy[1].startsWith('"') ? Wy[1] : `"${Wy[1]}"`), bb.values.push(Wy[2].trim()))
            };
          let Uy = 0,
            hy = "";
          for (const fy of yb.slice(1, -1)) "{[(".includes(fy) ? Uy++ : "}])".includes(fy) && Uy--, ";" === fy && 0 === Uy ? (Wy(hy), hy = "") : hy += fy;
          return Wy(hy), bb
        }

        function bW(yb) {
          return yb.length > zb ? `\n\t| ${yb.join("\n\t| ")}` : yb.join(" | ")
        }

        function Wb(yb, bb) {
          const Wy = function(yb, bb) {
            return yb.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((yb, Wy) => {
              var Uy;
              const hy = null === (Uy = bb.get(Wy)) || void 0 === Uy ? void 0 : Uy.object;
              return hy ? bW(hy.values) : yb
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((yb, Wy) => {
              var Uy, hy;
              const fy = null === (Uy = bb.get(Wy)) || void 0 === Uy || null === (hy = Uy.object) || void 0 === hy ? void 0 : hy.values.map(dy);
              return null !== fy && void 0 !== fy && fy.every((yb => null !== yb)) ? bW([...new Set(fy.flat())]) : yb
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((yb, Wy) => {
              var Uy;
              const hy = null === (Uy = bb.get(Wy)) || void 0 === Uy ? void 0 : Uy.members;
              return hy ? bW(hy) : yb
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((yb, Wy) => {
              var Uy;
              const hy = null === (Uy = bb.get(Wy)) || void 0 === Uy ? void 0 : Uy.object;
              return hy ? bW(hy.keys) : yb
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((yb, Wy) => {
              var Uy, hy;
              return null !== (Uy = null === (hy = bb.get(Wy)) || void 0 === hy ? void 0 : hy.text) && void 0 !== Uy ? Uy : yb
            }))
          }(yb.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), bb);
          return [yb.doc, Wy].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Ub(yb) {
          const bb = Ay(yb),
            Wy = function(yb) {
              const bb = new Map,
                Wy = yb.find((yb => "_TypeOf" === yb.name));
              let Uy = null;
              const hy = () => {
                if (Uy) {
                  const yb = Uy.lines.join("\n");
                  bb.set(Uy.name, {
                    text: yb,
                    members: dy(yb),
                    object: yW(yb)
                  })
                }
              };
              for (const fy of Wy.lines.slice(1, -1)) {
                const yb = fy.match(/^\t([\w$]+): (.+)$/);
                yb ? (hy(), Uy = {
                  name: yb[1],
                  lines: [yb[2]]
                }) : Uy && Uy.lines.push(fy.replace(/^\t/, ""))
              }
              return hy(), bb
            }(bb),
            Uy = new Map;
          for (const hy of bb) Ny.has(hy.name) || Uy.has(hy.name) || Uy.set(hy.name, Wb(hy, Wy));
          return Uy
        }
        let hb, fb, Zb;

        function cW() {
          return fb ??= function(yb) {
            const bb = Ay(yb).find((yb => "GameApi" === yb.name)),
              Wy = new Map,
              Uy = bb.lines;
            for (let fy = 0; fy < Uy.length; fy++) {
              var hy;
              if (!Uy[fy].trimStart().startsWith("/**")) continue;
              const yb = fy;
              for (; fy < Uy.length && !Uy[fy].includes("*/");) fy++;
              const bb = null === (hy = Uy[fy + 1]) || void 0 === hy ? void 0 : hy.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!bb) continue;
              let Zy = null;
              const cb = [];
              let Py = "description",
                oy = !1;
              for (const Wy of Uy.slice(yb, fy + 1).join("\n").split("\n").map((yb => yb.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const yb = Wy.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                yb ? (Zy = yb[1].trim(), Py = "deprecation") : Wy.startsWith("@") ? (Py = "otherTag", oy = !0) : "" === Wy.trim() ? oy || (Py = "description", cb.push(Wy)) : "deprecation" !== Py || /^[A-Z]/.test(Wy.trim()) ? "otherTag" !== Py && (Py = "description", cb.push(Wy)) : Zy = `${Zy} ${Wy.trim()}`.trim()
              }
              Wy.set(bb[1], {
                deprecation: Zy,
                description: cb.join("\n").trim()
              })
            }
            return Wy
          }(wy.default), fb
        }

        function Pb() {
          if (!Zb) {
            Zb = new Map;
            for (const yb of Hy) {
              const bb = (0, Gy.s)(Ly(yb)).flatMap((yb => yb.blocks));
              for (const yb of (0, Gy.i)(bb))
                if ("ts" === yb.lang || "typescript" === yb.lang)
                  for (const [bb, Wy] of vb(yb.code)) Zb.set(bb, Wy)
            }
            for (const [yb, bb] of(hb ??= Ub(wy.default), hb)) Zb.has(yb) || Zb.set(yb, bb)
          }
          return Zb
        }
        const ob = {
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
        let Bb;

        function Kb() {
          if (!Bb) {
            Bb = new Map;
            for (const yb of Hy)
              if (ib(yb.layout))
                for (const bb of Ly(yb).sections) Bb.has(bb.heading.text) || Bb.set(bb.heading.text, {
                  pageId: yb.id,
                  anchor: bb.heading.anchor
                })
          }
          return Bb
        }

        function eb(yb) {
          const bb = yb.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return bb ? Kb().get(bb[1]) : void 0
        }
        const qW = (0, Uy.createContext)("/docs"),
          sb = (0, Uy.createContext)(null),
          Sb = (0, Uy.createContext)(!1),
          Eb = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function lb(yb) {
          const bb = yb.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return bb ? bb[1] : null
        }

        function mW(yb) {
          let {
            colour: bb
          } = yb;
          return (0, sy.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: bb
            },
            "aria-hidden": "true"
          })
        }

        function Cb(yb) {
          const bb = [];
          let Wy = 0;
          for (const Uy of yb.matchAll(Eb)) bb.push(yb.slice(Wy, Uy.index), (0, sy.jsx)(mW, {
            colour: Uy[0]
          }), Uy[0]), Wy = Uy.index + Uy[0].length;
          return bb.push(yb.slice(Wy)), bb
        }

        function Tb(yb) {
          let {
            href: bb,
            children: Wy
          } = yb;
          const hy = (0, Uy.useContext)(qW);
          if (bb.startsWith("#")) {
            const yb = jb(bb);
            if (yb) return (0, sy.jsx)(Zy.c, {
              to: tb(hy, yb.page, yb.anchor),
              children: (0, sy.jsx)(Sb.Provider, {
                value: !0,
                children: Wy
              })
            })
          }
          return (0, sy.jsx)("a", {
            href: bb,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, sy.jsx)(Sb.Provider, {
              value: !0,
              children: Wy
            })
          })
        }

        function Vb(yb) {
          let {
            code: bb
          } = yb;
          const Wy = (0, Uy.useContext)(qW);
          if ((0, Uy.useContext)(Sb)) return (0, sy.jsx)("code", {
            className: "DocsInlineCode",
            children: bb
          });
          if (Pb().has(bb)) return (0, sy.jsx)(Ob, {
            type: bb
          });
          const hy = eb(bb);
          if (hy) return (0, sy.jsx)(Zy.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: tb(Wy, Fy(hy.pageId), hy.anchor),
            children: bb
          });
          const fy = lb(bb);
          return (0, sy.jsxs)("code", {
            className: "DocsInlineCode",
            children: [fy && (0, sy.jsx)(mW, {
              colour: fy
            }), bb]
          })
        }

        function Jb(yb) {
          let {
            text: bb
          } = yb;
          const Wy = [];
          let hy = 0;
          for (const Uy of bb.matchAll(Gy.e)) {
            Uy.index > hy && Wy.push(...Cb(bb.slice(hy, Uy.index)));
            const [, yb, fy, Zy, cb, Py] = Uy;
            yb ? Wy.push((0, sy.jsx)(Vb, {
              code: (0, Gy.k)(yb, fy)
            })) : Zy ? Wy.push((0, sy.jsx)("strong", {
              children: (0, sy.jsx)(Jb, {
                text: Zy
              })
            })) : Wy.push((0, sy.jsx)(Tb, {
              href: Py,
              children: (0, sy.jsx)(Jb, {
                text: cb
              })
            })), hy = Uy.index + Uy[0].length
          }
          return hy < bb.length && Wy.push(...Cb(bb.slice(hy))), (0, sy.jsx)(sy.Fragment, {
            children: Wy.map(((yb, bb) => (0, sy.jsx)(Uy.Fragment, {
              children: yb
            }, bb)))
          })
        }
        const gW = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          Gb = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function Ob(yb) {
          let {
            type: bb
          } = yb;
          const Wy = Pb(),
            hy = [];
          for (const Uy of bb.trim().matchAll(gW)) {
            const [yb, bb, fy, Zy, cb] = Uy;
            bb ? hy.push((0, sy.jsx)("span", {
              className: "DocsTypeString",
              children: yb
            })) : fy && Wy.has(fy) ? hy.push((0, sy.jsx)(Yb, {
              name: fy,
              definition: Wy.get(fy)
            })) : fy ? hy.push((0, sy.jsx)("span", {
              className: Gb.has(fy) ? "DocsTypeKeyword" : "DocsTypeName",
              children: yb
            })) : Zy ? hy.push((0, sy.jsx)("span", {
              className: "DocsTypeNumber",
              children: yb
            })) : cb ? hy.push(" ") : hy.push((0, sy.jsx)("span", {
              className: "DocsTypePunctuation",
              children: yb
            }))
          }
          return (0, sy.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: hy.map(((yb, bb) => (0, sy.jsx)(Uy.Fragment, {
              children: yb
            }, bb)))
          })
        }
        const Rb = 480,
          vW = 6,
          iW = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Mb = 0;

        function Yb(yb) {
          let {
            name: bb,
            definition: Wy
          } = yb;
          const hy = (0, Uy.useContext)(qW),
            fy = ob[bb],
            cb = (0, Uy.useRef)(null),
            Py = (0, Uy.useRef)(null),
            By = (0, Uy.useRef)(null),
            [Ky, ey] = (0, Uy.useState)(!1),
            [qb, Sy] = (0, Uy.useState)(null),
            ly = (0, Uy.useRef)(),
            mb = (0, Uy.useContext)(sb),
            [Cy] = (0, Uy.useState)((() => "DocsTypePopover-" + Mb++)),
            Ty = () => {
              clearTimeout(ly.current), ey(!0)
            },
            Vy = () => {
              clearTimeout(ly.current), ly.current = setTimeout((() => {
                ey(!1)
              }), 120)
            };
          return (0, Uy.useEffect)((() => {
            if (!Ky) return;
            const yb = yb => {
              if ("Escape" === yb.key) {
                var bb, Wy;
                if (null !== (bb = Py.current) && void 0 !== bb && bb.contains(document.activeElement)) null === (Wy = cb.current) || void 0 === Wy || Wy.focus();
                ey(!1)
              }
            };
            return document.addEventListener("keydown", yb), () => {
              document.removeEventListener("keydown", yb)
            }
          }), [Ky]), (0, Uy.useEffect)((() => () => {
            clearTimeout(ly.current)
          }), []), (0, Uy.useLayoutEffect)((() => {
            if (!Ky || !cb.current || !Py.current) return void Sy(null);
            const yb = cb.current.getBoundingClientRect(),
              bb = Py.current.offsetHeight,
              Wy = Math.min(Rb, window.innerWidth - 32),
              Uy = Math.min(Math.max(16, yb.left), window.innerWidth - Wy - 16),
              hy = yb.bottom + vW + bb < window.innerHeight;
            Sy({
              left: Uy,
              top: hy ? yb.bottom + vW : Math.max(16, yb.top - vW - bb)
            })
          }), [Ky]), (0, sy.jsxs)(sy.Fragment, {
            children: [(0, sy.jsx)("button", {
              type: "button",
              ref: cb,
              className: "DocsTypeLink",
              "aria-expanded": Ky,
              "aria-describedby": Ky ? Cy : void 0,
              onMouseEnter: Ty,
              onMouseLeave: Vy,
              onFocus: Ty,
              onBlur: Vy,
              onKeyDown: yb => {
                "Tab" === yb.key && !yb.shiftKey && By.current && (yb.preventDefault(), By.current.focus())
              },
              onClick: Ty,
              children: bb
            }), Ky && (0, oy.createPortal)((0, sy.jsxs)("span", {
              ref: Py,
              id: Cy,
              className: "DocsTypePopover",
              role: "tooltip",
              style: qb ? {
                left: qb.left,
                top: qb.top,
                maxWidth: Rb
              } : {
                visibility: "hidden"
              },
              onMouseEnter: Ty,
              onMouseLeave: Vy,
              onFocus: Ty,
              onBlur: Vy,
              children: [(0, sy.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, sy.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: bb
                }), fy && (0, sy.jsxs)(Zy.c, {
                  ref: By,
                  className: "DocsTypePopoverLink",
                  to: tb(hy, Fy(fy)),
                  onClick: () => {
                    ey(!1)
                  },
                  onKeyDown: yb => {
                    if ("Tab" === yb.key) {
                      var bb;
                      if (yb.preventDefault(), yb.shiftKey || !cb.current || ! function(yb, bb) {
                          const Wy = [...document.querySelectorAll(iW)],
                            Uy = Wy.slice(Wy.indexOf(yb) + 1).find((yb => yb.getClientRects().length > 0 && !(null !== bb && void 0 !== bb && bb.contains(yb))));
                          return null === Uy || void 0 === Uy || Uy.focus(), void 0 !== Uy
                        }(cb.current, Py.current)) null === (bb = cb.current) || void 0 === bb || bb.focus();
                      yb.shiftKey || ey(!1)
                    }
                  },
                  children: [Fy(fy).title, (0, sy.jsx)(Ey, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, sy.jsx)(gb, {
                lang: "ts",
                code: Wy,
                compact: !0
              })]
            }), null !== mb && void 0 !== mb ? mb : document.body)]
          })
        }
        var Xb = Wy(167),
          nb = Wy(3970),
          ub = Wy(3974),
          rW = Wy(3983);
        const Hb = {
          progressBar: {
            rM: 30,
            Z2: .075,
            y5: 5,
            piy: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            U3: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            B3: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            K3: !0,
            scale: 3,
            rotation: 15,
            i5: !1
          },
          gravityBar: {
            rM: 30,
            t5: .25,
            I3: 3,
            A3: .8,
            gravity: 1,
            P5: 1.5,
            o5: 8,
            B5: 4,
            piy: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            i6: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            I5: 5,
            U6: 1200,
            f6: .15,
            R6: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var aW = Wy(248),
          Fb = Wy(1634);

        function pb(yb) {
          return yb.startsWith("fa-")
        }
        const Lb = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Qb = {
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

        function jW(yb) {
          return "string" === typeof yb ? "text" : "entityName" in yb || "translationKey" in yb ? "other" : (0, aW.xb)(yb) ? "progressBar" : (0, aW.ub)(yb) ? "keyBinding" : "icon" in yb ? "icon" : "str" in yb && "string" === typeof yb.str ? "text" : "other"
        }
        const Db = [{
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
          tW = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...Db],
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
                options: Fb.i
              },
              isRequired: !0
            }, ...Db],
            other: []
          };

        function wb(yb) {
          return "string" === typeof yb ? {
            str: yb
          } : yb
        }

        function kW(yb, bb) {
          let Wy = wb(yb);
          for (const Uy of bb) Wy = Wy && "object" === typeof Wy ? Wy[Uy] : void 0;
          return Wy
        }

        function Nb(yb, bb, Wy) {
          const Uy = (yb, hy) => {
            var fy;
            const Zy = bb[hy],
              cb = {
                ...yb
              };
            if (hy === bb.length - 1) return void 0 === Wy ? delete cb[Zy] : cb[Zy] = Wy, cb;
            const Py = Uy(null !== (fy = yb[Zy]) && void 0 !== fy ? fy : {}, hy + 1);
            return 0 === Object.keys(Py).length ? delete cb[Zy] : cb[Zy] = Py, cb
          };
          return function(yb) {
            const bb = Object.keys(yb);
            return "string" === typeof yb.str && 1 === bb.length ? yb.str : yb
          }(Uy(wb(yb), 0))
        }

        function zW(yb, bb) {
          const Wy = jW(yb),
            Uy = tW[Wy].find((yb => yb.path.join(".") === bb.join("."))),
            hy = null !== Uy && void 0 !== Uy && Uy.isRequired && "other" !== Wy ? kW(Qb[Wy], bb) : void 0;
          return Nb(yb, bb, hy)
        }

        function Ib(yb) {
          switch (jW(yb)) {
            case "text":
              return String(kW(yb, ["str"]));
            case "icon":
              return String(kW(yb, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(kW(yb,["progress"])))}%`;
            case "keyBinding":
              return String(kW(yb, ["action"]));
            case "other":
              return JSON.stringify(yb)
          }
        }
        const xW = /^[A-Za-z_$][\w$]*$/;

        function Ab(yb) {
          if (Array.isArray(yb)) return `[${yb.map(Ab).join(", ")}]`;
          if (yb && "object" === typeof yb) {
            const bb = Object.entries(yb).map((yb => {
              let [bb, Wy] = yb;
              return `${xW.test(bb)?bb:JSON.stringify(bb)}: ${Ab(Wy)}`
            }));
            return 0 === bb.length ? "{}" : `{ ${bb.join(", ")} }`
          }
          return JSON.stringify(yb)
        }

        function db(yb) {
          const bb = yb.map(Ab),
            Wy = `[${bb.join(", ")}]`;
          return Wy.length <= 60 ? Wy : `[\n${bb.map((yb=>`    ${yb},`)).join("\n")}\n]`
        }
        const yU = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function bU(yb) {
          let bb = "";
          for (let hy = 0; hy < yb.length; hy++) {
            const fy = yb[hy];
            if ("\\" === fy) {
              var Wy;
              const Uy = null !== (Wy = yb[hy + 1]) && void 0 !== Wy ? Wy : "";
              bb += "'" === Uy ? "'" : fy + Uy, hy++
            } else if ('"' === fy) bb += '\\"';
            else {
              var Uy;
              bb += null !== (Uy = yU[fy]) && void 0 !== Uy ? Uy : fy
            }
          }
          return `"${bb}"`
        }

        function WW(yb) {
          if ("string" === typeof yb) return !0;
          if (!yb || "object" !== typeof yb || Array.isArray(yb)) return !1;
          const bb = yb;
          return "ProgressBar" === bb.type ? "number" === typeof bb.progress : "StyledKeyBinding" === bb.type ? Fb.i.includes(bb.action) : "string" === typeof bb.icon || "string" === typeof bb.str || "string" === typeof bb.entityName || "string" === typeof bb.translationKey
        }

        function UW(yb) {
          let bb;
          try {
            bb = function(yb) {
              let bb = "",
                Wy = "",
                Uy = 0;
              const hy = () => {
                bb += Wy.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), Wy = ""
              };
              for (; Uy < yb.length;) {
                const fy = yb.slice(Uy).search(/["'`]|\/\//);
                if (-1 === fy) {
                  Wy += yb.slice(Uy);
                  break
                }
                Wy += yb.slice(Uy, Uy + fy);
                const Zy = Uy + fy,
                  cb = yb[Zy];
                if ("/" === cb) {
                  const bb = yb.indexOf("\n", Zy);
                  Uy = -1 === bb ? yb.length : bb;
                  continue
                }
                if (hy(), "`" === cb) throw new Error("Use quotes rather than template strings.");
                let Py = Zy + 1;
                for (; Py < yb.length && yb[Py] !== cb;) Py += "\\" === yb[Py] ? 2 : 1;
                if (Py >= yb.length) throw new Error("A string is missing its closing quote.");
                const oy = yb.slice(Zy + 1, Py);
                bb += bU(oy), Uy = Py + 1
              }
              return hy(), JSON.parse(bb)
            }(yb.trim())
          } catch (Uy) {
            return {
              parts: null,
              error: Uy instanceof SyntaxError ? "This isn't a valid array yet." : Uy.message
            }
          }
          if (!Array.isArray(bb)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const Wy = bb.findIndex((yb => !WW(yb)));
          return -1 !== Wy ? {
            parts: null,
            error: `Part ${Wy+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: bb,
            error: null
          }
        }
        const hW = 1 / Xb.c.clientTicksPerSecond,
          fW = 700,
          ZW = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          cU = {
            progressBar: Hb.progressBar.U3,
            timedClick: Hb.timedClick.icon,
            gravityBar: Hb.gravityBar.icon,
            precisionBar: Hb.precisionBar.icon,
            rhythmClick: Hb.rhythmClick.icon
          };

        function PW(yb) {
          let {
            type: bb
          } = yb;
          const [Wy, hy] = (0, Uy.useState)("ready"), [Zy, cb] = (0, Uy.useState)(1), [Py, oy] = (0, Uy.useState)(!0), By = (0, Uy.useRef)(null), Ky = (0, Uy.useRef)(null), ey = (0, Uy.useRef)(null), qb = (0, Uy.useRef)(new Set), Sy = (0, Uy.useRef)(!1), ly = cU[bb], mb = (0, Uy.useMemo)((() => ({
            getState: () => {
              var yb, bb;
              return null !== (yb = null === (bb = ey.current) || void 0 === bb ? void 0 : bb.getState()) && void 0 !== yb ? yb : ZW
            },
            onFrame: yb => (qb.current.add(yb), () => {
              qb.current.delete(yb)
            })
          })), []);
          (0, Uy.useEffect)((() => {
            const yb = By.current,
              bb = Ky.current;
            if (!yb || !bb) return;
            const Wy = new ResizeObserver((() => {
              cb(yb.clientWidth / Math.max(1, bb.offsetWidth))
            }));
            return Wy.observe(yb), () => {
              Wy.disconnect()
            }
          }), []), (0, Uy.useEffect)((() => {
            var yb;
            if ("playing" !== Wy) return;
            let Uy = !1;
            const fy = new rW.h[bb](Hb[bb], (yb => {
              Uy = !0, oy(!1), hy(yb ? "succeeded" : "failed")
            }), (() => {}));
            ey.current = fy;
            let Zy = 0,
              cb = performance.now(),
              Py = requestAnimationFrame((function yb(bb) {
                for (Zy += Math.min(.25, (bb - cb) / 1e3), cb = bb; Zy >= hW && !Uy;) Zy -= hW, fy.handleTick(hW);
                for (const Wy of qb.current) Wy();
                Uy || (Py = requestAnimationFrame(yb))
              }));
            return null === (yb = By.current) || void 0 === yb || yb.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Py), fy.tearDown(), ey.current = null, Sy.current = !1
            }
          }), [Wy, bb]), (0, Uy.useEffect)((() => {
            if (Py) return;
            const yb = setTimeout((() => {
              oy(!0)
            }), fW);
            return () => {
              clearTimeout(yb)
            }
          }), [Py]);
          const Cy = yb => {
            var bb;
            "playing" === Wy && Sy.current !== yb && (Sy.current = yb, null === (bb = ey.current) || void 0 === bb || bb.handleMouseInput(yb))
          };
          return (0, sy.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, sy.jsxs)("div", {
              ref: By,
              className: fy()("DocsQteStage", {
                Playing: "playing" === Wy
              }),
              tabIndex: "playing" === Wy ? 0 : -1,
              role: "playing" === Wy ? "button" : void 0,
              "aria-label": "playing" === Wy ? `${bb} quick time event: click or press Space` : void 0,
              onPointerDown: yb => {
                0 === yb.button && Cy(!0)
              },
              onPointerUp: () => {
                Cy(!1)
              },
              onPointerLeave: () => {
                Cy(!1)
              },
              onPointerCancel: () => {
                Cy(!1)
              },
              onKeyDown: yb => {
                "playing" !== Wy || " " !== yb.key && "Enter" !== yb.key || (yb.preventDefault(), Cy(!0))
              },
              onKeyUp: yb => {
                "playing" !== Wy || " " !== yb.key && "Enter" !== yb.key || Cy(!1)
              },
              children: [(0, sy.jsx)("div", {
                ref: Ky,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Zy})`
                },
                children: "playing" === Wy && (0, sy.jsx)(ub.b.Provider, {
                  value: mb,
                  children: (0, sy.jsx)(nb.d, {
                    qte: {
                      type: bb,
                      parameters: Hb[bb]
                    }
                  })
                })
              }), "playing" !== Wy && (0, sy.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== Wy && (0, sy.jsxs)("div", {
                  className: fy()("DocsQteResult", "succeeded" === Wy ? "Succeeded" : "Failed"),
                  children: [(0, sy.jsx)(Ey, {
                    name: "succeeded" === Wy ? "check" : "cross",
                    isTinted: !0
                  }), (0, sy.jsx)("span", {
                    children: "succeeded" === Wy ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, sy.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Py,
                  onClick: () => {
                    hy("playing")
                  },
                  children: [(0, sy.jsx)(Ey, {
                    name: "ready" === Wy ? "play" : "replay"
                  }), (0, sy.jsx)("span", {
                    children: "ready" === Wy ? `Try ${bb}` : "Play again"
                  })]
                })]
              })]
            }), ly && !pb(ly) && (0, sy.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, sy.jsx)("code", {
                children: ly
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function oW(yb) {
          let {
            level: bb,
            text: Wy,
            anchor: Uy,
            className: hy
          } = yb;
          const Zy = `h${Math.min(bb,6)}`;
          return (0, sy.jsxs)(Zy, {
                id: Uy,
                className: fy()("DocsHeading", hy),
                children: [(0, sy.jsx)(Jb, {
                      text: Wy
                    }), (0, sy.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Uy}`,
                        "aria-label": `Link to ${Wy.replace(/`/g,"")}`,children:"#"})]})}function BW(yb){let{items:bb,ordered:Wy}=yb;const Uy=Wy?"ol":"ul";return(0,sy.jsx)(Uy,{className:"DocsList",children:bb.map(((yb,bb)=>(0,sy.jsxs)("li",{children:[(0,sy.jsx)(Jb,{text:yb.text}),yb.children.length>0&&(0,sy.jsx)(BW,{items:yb.children,ordered:Wy})]},bb)))})}function KW(yb){const bb=yb[0],Wy="paragraph"===(null===bb||void 0===bb?void 0:bb.kind)?bb.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(Wy)?"warning":/^\*\*(tip|prefer)/.test(Wy)?"tip":"note"}function eW(yb){let{block:bb}=yb;switch(bb.kind){case"heading":return(0,sy.jsx)(oW,{level:bb.level,text:bb.text,anchor:bb.anchor});case"paragraph":return(0,sy.jsx)("p",{children:(0,sy.jsx)(Jb,{text:bb.text})});case"code":{const yb="ts"===bb.lang?function(yb){const bb=yb.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return bb&&Object.hasOwn(Hb,bb[1])?bb[1]:null}(bb.code):null;return(0,sy.jsxs)(sy.Fragment,{children:[(0,sy.jsx)(gb,{code:bb.code,lang:bb.lang}),yb&&(0,sy.jsx)(PW,{type:yb})]})}case"table":return(0,sy.jsx)("div",{className:"DocsTableScroll",children:(0,sy.jsxs)("table",{className:"DocsTable",children:[(0,sy.jsx)("thead",{children:(0,sy.jsx)("tr",{children:bb.header.map(((yb,bb)=>(0,sy.jsx)("th",{children:(0,sy.jsx)(Jb,{text:yb})},bb)))})}),(0,sy.jsx)("tbody",{children:bb.rows.map(((yb,bb)=>(0,sy.jsx)("tr",{children:yb.map(((yb,bb)=>(0,sy.jsx)("td",{children:(0,sy.jsx)(Jb,{text:yb})},bb)))},bb)))})]})});case"list":return(0,sy.jsx)(BW,{items:bb.items,ordered:bb.ordered});case"quote":return(0,sy.jsx)("aside",{className:fy()("DocsCallout",KW(bb.blocks)),children:(0,sy.jsx)(qU,{blocks:bb.blocks})});case"rule":return(0,sy.jsx)("hr",{className:"DocsRule"})}}function qU(yb){let{blocks:bb}=yb;return(0,sy.jsx)(sy.Fragment,{children:bb.map(((yb,bb)=>(0,sy.jsx)(eW,{block:yb},bb)))})}var sW=Wy(3955),SW=Wy(3961);function EW(yb){return"blocks"===yb||"items"===yb}const lW=new Map;function mU(yb){let bb=lW.get(yb);return bb||(bb=function(yb){const bb={entries:[],legend:[],notes:[],examples:[]};let Wy=!1;for(const fy of yb.split(/\r?\n/).slice(1)){if(fy.startsWith("#")){const yb=fy.replace(/^# ?/,""),Uy=yb.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Uy?bb.legend.push({code:Uy[1],meaning:Uy[2],usage:Uy[3].trim()}):/^Examples:/.test(yb.trim())?Wy=!0:Wy&&yb.trim()?bb.examples.push(yb.trim()):yb.trim()&&!/^\s/.test(yb)&&bb.notes.push(yb.trim());continue}const yb=fy.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Uy,hy;yb&&bb.entries.push({name:yb[1],variants:null!==(Uy=null===(hy=yb[2])||void 0===hy?void 0:hy.split(","))&&void 0!==Uy?Uy:[]})}return bb}("blocks"===yb?sW:SW),lW.set(yb,bb)),bb}function CW(yb){let{className:bb,value:Wy,placeholder:Uy,label:hy,onChange:fy,count:Zy,children:cb}=yb;return(0,sy.jsxs)("div",{className:bb,children:[(0,sy.jsx)(Ey,{name:"magnifying-glass"}),(0,sy.jsx)("input",{type:"search",value:Wy,placeholder:Uy,"aria-label":hy,onChange:yb=>{fy(yb.target.value)}}),cb,Zy&&(0,sy.jsxs)("span",{className:"DocsFilterCount",children:[Zy.visible," of ",Zy.total]})]})}var TW=Wy(910);function VW(yb){const bb=yb.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return bb?bb[2]:null}function JW(yb){return"paragraph"===yb.kind&&""===yb.text.trim()}function gU(yb){const bb={name:yb.heading.text,description:[],params:[],returns:null};let Wy="description";for(const hy of yb.blocks)if(!JW(hy))if("heading"===hy.kind&&/^Parameters:?$/.test(hy.text))Wy="params";else if("heading"===hy.kind&&/^Returns:?$/.test(hy.text))Wy="returns",bb.returns={type:"",description:[]};else if("params"!==Wy||"table"!==hy.kind){if("returns"===Wy&&"paragraph"===hy.kind&&""===bb.returns.type){const yb=VW(hy.text);if(null!==yb){bb.returns.type=yb.replaceAll("\\|","|");continue}}"returns"===Wy?bb.returns.description.push(hy):bb.description.push(hy)}else for(const[yb,Wy,fy]of hy.rows){var Uy;bb.params.push({name:yb,type:null!==(Uy=VW(Wy))&&void 0!==Uy?Uy:Wy,description:null!==fy&&void 0!==fy?fy:""})}return bb}const GW=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function OW(yb){return yb.filter((yb=>!JW(yb)))}const RW=/^[\w][\w .'&!:()-]*$/,vU=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function iU(yb){var bb;if("code"===yb.kind&&"text"===yb.lang){const bb=yb.code.split("\n").map((yb=>yb.trim())).filter(Boolean);return bb.length>0&&bb.every((yb=>RW.test(yb)))?bb.map((yb=>({name:yb}))):null}return"paragraph"===yb.kind&&vU.test(yb.text.trim())?[...yb.text.matchAll(/`([ ^ `]+)` / g)].flatMap((yb => yb[1].split(/,\s*/).map((yb => ({
                              name: yb.trim()
                            }))))): "table" === yb.kind && null !== (bb = yb.header[0]) && void 0 !== bb && bb.startsWith("Song") ? yb.rows.map((yb => {
                              let [bb, Wy] = yb;
                              return {
                                name: bb.replace(/`/g, ""),
                                caption: Wy
                              }
                            })) : null
                          }

                          function MW(yb) {
                            const bb = [];
                            for (const Wy of yb) {
                              const yb = iU(Wy),
                                Uy = bb.at(-1),
                                hy = "table" === Wy.kind;
                              yb ? "names" === (null === Uy || void 0 === Uy ? void 0 : Uy.kind) && Uy.isSongs === hy ? Uy.names.push(...yb) : bb.push({
                                kind: "names",
                                names: yb,
                                isSongs: hy
                              }) : bb.push({
                                kind: "block",
                                block: Wy
                              })
                            }
                            return bb
                          }
                          const YW = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function XW(yb, bb) {
                            return `${YW[yb]}-${(0,Gy.p)(bb)}`
                          }
                          const nW = new WeakMap;

                          function uW(yb, bb, Wy) {
                            let Uy = nW.get(bb);
                            if (!Uy) {
                              Uy = new Map;
                              const Wy = new Set;
                              for (const hy of (0, Gy.s)(bb)) {
                                const bb = MW(OW(hy.blocks)).map((bb => {
                                  if ("block" === bb.kind) return bb;
                                  return {
                                    kind: "names",
                                    names: bb.names.map((bb => {
                                      var Uy, fy;
                                      const Zy = XW(yb, bb.name);
                                      let cb = Zy;
                                      for (let yb = 2; Wy.has(cb); yb++) cb = `${Zy}-${yb}`;
                                      return Wy.add(cb), {
                                        ...bb,
                                        anchor: cb,
                                        heading: null !== (Uy = null === (fy = hy.heading) || void 0 === fy ? void 0 : fy.text) && void 0 !== Uy ? Uy : ""
                                      }
                                    })),
                                    isSongs: bb.isSongs
                                  }
                                }));
                                Uy.set(hy.blocks, bb)
                              }
                              nW.set(bb, Uy)
                            }
                            const hy = Uy.get(Wy);
                            if (!hy) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return hy
                          }
                          const rU = "/textures/docs/skinPreviews",
                            HW = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var aU = Wy(3511),
                            FW = Wy(3525);

                          function pW(yb) {
                            return Object.hasOwn(aU.e, yb) ? aU.e[yb] : null
                          }
                          const LW = {
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
                            blendMode: FW.e.Standard
                          };

                          function QW(yb, bb, Wy) {
                            return bb + (Wy - bb) * yb()
                          }

                          function jU(yb, bb, Wy) {
                            return yb + (bb - yb) * Wy
                          }

                          function DW(yb) {
                            return yb.length > 0 && "timeFraction" in yb[0]
                          }

                          function tU(yb, bb) {
                            if (0 === yb.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!DW(yb.colorGradients)) {
                              const Wy = yb.colorGradients,
                                {
                                  color: Uy
                                } = Wy[Math.floor(bb() * Wy.length) % Wy.length];
                              return [{
                                at: 0,
                                colour: [Uy[0] / 255, Uy[1] / 255, Uy[2] / 255, 1]
                              }]
                            }
                            return [...yb.colorGradients].sort(((yb, bb) => yb.timeFraction - bb.timeFraction)).map((yb => {
                              var Wy, Uy, hy;
                              const fy = yb.minColor,
                                Zy = null !== (Wy = yb.maxColor) && void 0 !== Wy ? Wy : fy,
                                cb = bb(),
                                Py = [jU(fy[0], Zy[0], cb) / 255, jU(fy[1], Zy[1], cb) / 255, jU(fy[2], Zy[2], cb) / 255, jU(null !== (Uy = fy[3]) && void 0 !== Uy ? Uy : 1, null !== (hy = Zy[3]) && void 0 !== hy ? hy : 1, cb)];
                              return {
                                at: yb.timeFraction,
                                colour: Py
                              }
                            }))
                          }

                          function wW(yb, bb, Wy, Uy) {
                            const hy = QW(Uy, yb.minEmitPower, yb.maxEmitPower),
                              fy = bb => QW(Uy, Math.min(yb.dir1[bb], yb.dir2[bb]), Math.max(yb.dir1[bb], yb.dir2[bb])) * hy,
                              Zy = [...yb.velocityGradients].sort(((yb, bb) => yb.timeFraction - bb.timeFraction)).map((yb => ({
                                at: yb.timeFraction,
                                factor: QW(Uy, yb.factor, yb.factor2)
                              })));
                            return {
                              pos: [QW(Uy, bb[0], Wy[0]), QW(Uy, bb[1], Wy[1]), QW(Uy, bb[2], Wy[2])],
                              dir: [fy(0), fy(1), fy(2)],
                              age: 0,
                              life: QW(Uy, yb.minLifeTime, yb.maxLifeTime),
                              size: QW(Uy, yb.minSize, yb.maxSize),
                              colours: tU(yb, Uy),
                              velocityFactors: Zy
                            }
                          }

                          function kU(yb, bb, Wy, Uy) {
                            if (bb < yb[0].at) return Wy(Math.min(1, yb.length - 1));
                            for (let hy = 0; hy < yb.length - 1; hy++)
                              if (bb <= yb[hy + 1].at) {
                                const fy = yb[hy + 1].at - yb[hy].at;
                                return Uy(Wy(hy), Wy(hy + 1), fy > 0 ? (bb - yb[hy].at) / fy : 1)
                              } return Wy(yb.length - 1)
                          }

                          function NW(yb) {
                            return kU(yb.colours, yb.age / yb.life, (bb => yb.colours[bb].colour), ((yb, bb, Wy) => [jU(yb[0], bb[0], Wy), jU(yb[1], bb[1], Wy), jU(yb[2], bb[2], Wy), jU(yb[3], bb[3], Wy)]))
                          }

                          function zU(yb, bb, Wy) {
                            if (yb.age += Wy, yb.age >= yb.life) return !1;
                            const Uy = function(yb) {
                              return 0 === yb.velocityFactors.length ? 1 : kU(yb.velocityFactors, yb.age / yb.life, (bb => yb.velocityFactors[bb].factor), jU)
                            }(yb) * Wy;
                            for (let fy = 0; fy < 3; fy++) {
                              var hy;
                              yb.pos[fy] += yb.dir[fy] * Uy, yb.dir[fy] += (null !== (hy = bb[fy]) && void 0 !== hy ? hy : 0) * Wy
                            }
                            return !0
                          }

                          function IW(yb) {
                            return String(Math.round(1e6 * yb) / 1e6)
                          }

                          function xU(yb) {
                            return `[${yb.map(IW).join(", ")}]`
                          }

                          function AW(yb, bb) {
                            const Wy = `${bb}    `;
                            return `[\n${(DW(yb)?yb.map((yb=>{const bb=[`${Wy}    timeFraction: ${IW(yb.timeFraction)},`,`${Wy}    minColor: ${xU(yb.minColor)},`];return yb.maxColor&&bb.push(`${Wy}    maxColor: ${xU(yb.maxColor)},`),`${Wy}{\n${bb.join("\n")}\n${Wy}},`})):yb.map((yb=>`
                            $ {
                              Wy
                            } {
                              color: $ {
                                xU(yb.color)
                              }
                            }, `))).join("\n")}\n${bb}]`
                          }
                          const dW = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            yh = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const bh = .6;

                          function WU(yb, bb) {
                            return `${bb?"song":"sound"}:${yb}`
                          }
                          let UU = {
                              track: null,
                              volume: bh
                            },
                            hU = null,
                            fU = 0,
                            ZU = 0;
                          const ch = new Set;

                          function PU(yb) {
                            UU = {
                              ...UU,
                              ...yb
                            }, ch.forEach((yb => {
                              yb()
                            }))
                          }

                          function oU(yb) {
                            UU.track && PU({
                              track: {
                                ...UU.track,
                                ...yb
                              }
                            })
                          }

                          function BU(yb) {
                            const [bb, Wy] = (0, Uy.useState)((() => yb(UU))), hy = (0, Uy.useRef)(yb);
                            return hy.current = yb, (0, Uy.useEffect)((() => {
                              const yb = () => {
                                Wy((() => hy.current(UU)))
                              };
                              return ch.add(yb), yb(), () => {
                                ch.delete(yb)
                              }
                            }), []), bb
                          }

                          function KU() {
                            fU++;
                            const yb = hU;
                            hU = null, null === yb || void 0 === yb || yb.stop()
                          }

                          function eU(yb, bb) {
                            let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            KU();
                            const hy = fU,
                              {
                                track: fy
                              } = UU,
                              Zy = fy && fy.name === yb && fy.isSong === bb ? fy.duration : 0;
                            ZU = Uy, PU({
                              track: {
                                name: yb,
                                isSong: bb,
                                status: "loading",
                                duration: Zy
                              }
                            }), Promise.all([Wy.e(199), Wy.e(228)]).then((() => Wy(38258))).then((Wy => {
                              let {
                                playDocsSound: fy
                              } = Wy;
                              hy === fU && (hU = fy(yb, bb, UU.volume, Uy, {
                                onPlay: yb => {
                                  hy === fU && oU({
                                    status: "playing",
                                    duration: yb
                                  })
                                },
                                onEnd: yb => {
                                  var bb, Wy;
                                  hy === fU && (hU = null, yb ? PU({
                                    track: null
                                  }) : (ZU = null !== (bb = null === (Wy = UU.track) || void 0 === Wy ? void 0 : Wy.duration) && void 0 !== bb ? bb : 0, oU({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((bb => {
                              console.error(`Could not play docs sound ${yb}`, bb), hy === fU && PU({
                                track: null
                              })
                            }))
                          }

                          function qh() {
                            const {
                              track: yb
                            } = UU;
                            if (!yb) return;
                            if ("playing" === yb.status && hU) return ZU = hU.Tl(), hU.pause(), void oU({
                              status: "paused"
                            });
                            if ("loading" === yb.status) return KU(), void oU({
                              status: "paused"
                            });
                            if (hU) return void hU.resume();
                            const bb = yb.duration > 0 && ZU >= yb.duration - .05;
                            eU(yb.name, yb.isSong, bb ? 0 : ZU)
                          }

                          function sU() {
                            var yb;
                            return hU && "playing" === (null === (yb = UU.track) || void 0 === yb ? void 0 : yb.status) ? hU.Tl() : ZU
                          }

                          function SU(yb) {
                            var bb;
                            null === (bb = hU) || void 0 === bb || bb.setVolume(yb), PU({
                              volume: yb
                            })
                          }

                          function EU() {
                            KU(), ZU = 0, PU({
                              track: null
                            })
                          }
                          const lU = (0, Uy.createContext)(null);
                          let mh = null;

                          function CU() {
                            const [yb, bb] = (0, Uy.useState)(null);
                            return (0, Uy.useEffect)((() => {
                              let yb = !1;
                              return mh ??= Promise.all([Wy.e(63), Wy.e(66), Wy.e(65), Wy.e(64), Wy.e(182), Wy.e(86), Wy.e(207)]).then((() => Wy(38249))), mh.then((Wy => {
                                yb || bb(Wy)
                              }), (yb => {
                                console.error("Could not load the docs gallery's textures", yb), mh = null
                              })), () => {
                                yb = !0
                              }
                            }), []), yb
                          }
                          const TU = 24,
                            VU = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function JU(yb, bb) {
                            const Wy = "skins" === yb ? function(yb, bb) {
                              const Wy = HW.find((bb => yb.startsWith(bb.heading)));
                              return Wy ? function(yb, bb) {
                                return `${yb}-${bb}`
                              }(Wy.prefix, bb) : null
                            }(bb.heading, bb.name) : null;
                            return null === Wy ? null : `${rU}/${Wy}.webp`
                          }

                          function gh(yb) {
                            let {
                              kind: bb,
                              entry: Wy,
                              assets: hy,
                              renderedUrl: Zy
                            } = yb;
                            const {
                              name: cb
                            } = Wy, [Py, oy] = (0, Uy.useState)(!1);
                            if ("icons" === bb && pb(cb)) return (0, sy.jsx)(TW.e, {
                              className: "DocsTileIcon",
                              name: cb
                            });
                            let By = null;
                            var Ky;
                            if ("icons" === bb) By = null !== (Ky = null === hy || void 0 === hy ? void 0 : hy.getIngameIconUrl(cb)) && void 0 !== Ky ? Ky : null;
                            else if ("particles" === bb) {
                              var ey, qb, Sy;
                              By = null !== (ey = null === hy || void 0 === hy ? void 0 : hy.getParticleTextureUrl(null !== (qb = null === (Sy = pW(cb)) || void 0 === Sy ? void 0 : Sy.texture) && void 0 !== qb ? qb : cb)) && void 0 !== ey ? ey : null
                            } else "skins" === bb && (By = null !== Zy && void 0 !== Zy ? Zy : VU.test(cb) ? `/textures/charSkins/previews/${cb}_preview.png` : null);
                            return !By || Py ? (0, sy.jsx)(Ey, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === bb ? "person" : "image"
                            }) : (0, sy.jsx)("img", {
                              className: fy()("DocsTileImage", {
                                Pixelated: "skins" !== bb
                              }),
                              src: By,
                              srcSet: By === Zy ? `${By} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${By}`), oy(!0)
                              }
                            })
                          }

                          function GU(yb) {
                            let {
                              entry: bb,
                              isSong: Wy
                            } = yb;
                            const Uy = BU((yb => {
                                let {
                                  track: Uy
                                } = yb;
                                return (null === Uy || void 0 === Uy ? void 0 : Uy.name) === bb.name && Uy.isSong === Wy ? Uy.status : null
                              })),
                              hy = null !== Uy && "paused" !== Uy;
                            return (0, sy.jsxs)("button", {
                              type: "button",
                              id: bb.anchor,
                              className: fy()("DocsSoundTile", {
                                Playing: hy
                              }),
                              "data-docs-track": WU(bb.name, Wy),
                              "aria-label": hy ? `Pause ${bb.name}` : `Play ${bb.name}`,
                              onClick: () => {
                                null !== Uy ? qh() : eU(bb.name, Wy)
                              },
                              children: [(0, sy.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, sy.jsx)(Ey, {
                                  name: hy ? "pause" : "play"
                                })
                              }), (0, sy.jsx)("code", {
                                className: "DocsSoundName",
                                children: bb.name
                              }), bb.caption && (0, sy.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: bb.caption
                              })]
                            })
                          }

                          function OU(yb) {
                            let {
                              kind: bb,
                              names: Wy,
                              isSongs: hy
                            } = yb;
                            const Zy = CU(),
                              [cb, Py] = mb(),
                              oy = !1 === (null === cb || void 0 === cb ? void 0 : cb.failed) ? cb.text : null,
                              By = (0, Uy.useContext)(lU),
                              [Ky, ey] = (0, Uy.useState)(""),
                              qb = Ky.trim().toLowerCase(),
                              Sy = qb ? Wy.filter((yb => yb.name.toLowerCase().includes(qb))) : Wy;
                            return (0, sy.jsxs)("div", {
                              className: "DocsGallery",
                              children: [Wy.length > TU && (0, sy.jsx)(CW, {
                                className: "DocsGalleryFilter",
                                value: Ky,
                                placeholder: `Filter ${Wy.length} names\u2026`,
                                label: "Filter names",
                                onChange: ey,
                                count: qb ? {
                                  visible: Sy.length,
                                  total: Wy.length
                                } : null
                              }), (0, sy.jsx)("div", {
                                className: fy()("DocsGalleryGrid", `Kind-${bb}`, {
                                  Songs: hy
                                }),
                                children: Sy.map((yb => {
                                  if ("sounds" === bb) return (0, sy.jsx)(GU, {
                                    entry: yb,
                                    isSong: hy
                                  }, yb.anchor);
                                  if (By && "particles" === bb && pW(yb.name)) return (0, sy.jsxs)("button", {
                                    type: "button",
                                    id: yb.anchor,
                                    className: fy()("DocsTile Previewable", {
                                      Copied: oy === yb.name
                                    }),
                                    title: `Play "${yb.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      By(yb.name), Py(yb.name)
                                    },
                                    children: [(0, sy.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, sy.jsx)(gh, {
                                        kind: bb,
                                        entry: yb,
                                        assets: Zy,
                                        renderedUrl: null
                                      }), (0, sy.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, sy.jsx)(Ey, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, sy.jsx)("span", {
                                      className: "DocsTileName",
                                      children: oy === yb.name ? "Copied!" : yb.name
                                    })]
                                  }, yb.anchor);
                                  const Wy = JU(bb, yb);
                                  return (0, sy.jsxs)("button", {
                                    type: "button",
                                    id: yb.anchor,
                                    className: fy()("DocsTile", {
                                      Copied: oy === yb.name
                                    }),
                                    title: `Copy "${yb.name}"`,
                                    onClick: () => {
                                      Py(yb.name)
                                    },
                                    children: [(0, sy.jsx)("span", {
                                      className: fy()("DocsTilePreview", {
                                        Rendered: null !== Wy
                                      }),
                                      children: (0, sy.jsx)(gh, {
                                        kind: bb,
                                        entry: yb,
                                        assets: Zy,
                                        renderedUrl: Wy
                                      })
                                    }), (0, sy.jsx)("span", {
                                      className: "DocsTileName",
                                      children: oy === yb.name ? "Copied!" : yb.name
                                    })]
                                  }, yb.anchor)
                                }))
                              })]
                            })
                          }

                          function RU(yb) {
                            let {
                              kind: bb,
                              content: Wy,
                              blocks: Uy
                            } = yb;
                            return (0, sy.jsx)(sy.Fragment, {
                              children: uW(bb, Wy, Uy).map(((yb, Wy) => "block" === yb.kind ? (0, sy.jsx)(eW, {
                                block: yb.block
                              }, Wy) : (0, sy.jsx)(OU, {
                                kind: bb,
                                names: yb.names,
                                isSongs: yb.isSongs
                              }, Wy)))
                            })
                          }
                          const vh = [{
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

                          function ih(yb) {
                            let {
                              cards: bb = vh,
                              label: Wy = "Start here"
                            } = yb;
                            const hy = (0, Uy.useContext)(qW);
                            return (0, sy.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": Wy,
                              children: bb.map((yb => {
                                let {
                                  pageId: bb,
                                  countNoun: Wy
                                } = yb;
                                const Uy = Fy(bb);
                                return (0, sy.jsxs)(Zy.c, {
                                  to: tb(hy, Uy),
                                  className: "DocsLandingCard",
                                  children: [(0, sy.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, sy.jsx)(Ey, {
                                      name: Uy.icon
                                    })
                                  }), (0, sy.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Uy.title
                                  }), (0, sy.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Uy.summary
                                  }), Wy && (0, sy.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [Ly(Uy).sections.length, " ", Wy]
                                  })]
                                }, bb)
                              }))
                            })
                          }
                          const MU = 240;

                          function YU(yb) {
                            let {
                              faces: bb
                            } = yb;
                            return (0, sy.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, sy.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${bb.top}")`
                                }
                              }), (0, sy.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${bb.left}")`
                                }
                              }), (0, sy.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${bb.right}")`
                                }
                              })]
                            })
                          }

                          function XU(yb) {
                            let {
                              src: bb
                            } = yb;
                            const [Wy, hy] = (0, Uy.useState)(!1);
                            return Wy ? null : (0, sy.jsx)("img", {
                              src: bb,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${bb}`), hy(!0)
                              }
                            })
                          }

                          function nU(yb) {
                            let {
                              kind: bb
                            } = yb;
                            const Wy = mU(bb),
                              hy = CU(),
                              Zy = (0, cb.y)(),
                              [Py, oy] = (0, Uy.useState)(""),
                              [By, Ky] = (0, Uy.useState)(null),
                              [ey, qb] = (0, Uy.useState)(MU),
                              [Sy, ly] = (0, Uy.useState)(null),
                              mb = (0, Uy.useRef)(null),
                              Ty = Py.trim().toLowerCase();
                            (0, Uy.useEffect)((() => {
                              const yb = (0, Gy.l)(Zy.hash),
                                Uy = Wy.entries.find((Wy => XW(bb, Wy.name) === yb));
                              if (Uy) mb.current = Uy.name, oy(Uy.name), Ky(null), ly(Uy.name);
                              else if (null !== mb.current) {
                                const yb = mb.current;
                                mb.current = null, oy((bb => bb === yb ? "" : bb)), ly(null)
                              }
                            }), [Wy, bb, Zy.hash, Zy.key]), (0, Uy.useEffect)((() => {
                              var yb;
                              null !== Sy && (null === (yb = document.getElementById(XW(bb, Sy))) || void 0 === yb || yb.scrollIntoView({
                                block: "center"
                              }))
                            }), [bb, Sy]);
                            const Vy = Wy.entries.filter((yb => (!Ty || yb.name.toLowerCase().includes(Ty)) && (!By || yb.variants.includes(By))));
                            return (0, sy.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [Wy.notes.length > 0 && (0, sy.jsx)("div", {
                                className: "DocsProse",
                                children: Wy.notes.map((yb => (0, sy.jsx)("p", {
                                  children: yb
                                }, yb)))
                              }), Wy.legend.length > 0 && (0, sy.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, sy.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, sy.jsx)("thead", {
                                    children: (0, sy.jsxs)("tr", {
                                      children: [(0, sy.jsx)("th", {
                                        children: "Code"
                                      }), (0, sy.jsx)("th", {
                                        children: "Variant"
                                      }), (0, sy.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, sy.jsx)("tbody", {
                                    children: Wy.legend.map((yb => (0, sy.jsxs)("tr", {
                                      children: [(0, sy.jsx)("td", {
                                        children: (0, sy.jsx)("button", {
                                          type: "button",
                                          className: fy()("DocsVariantChip", {
                                            Active: By === yb.code
                                          }),
                                          "aria-pressed": By === yb.code,
                                          title: `Show only ${bb} with ${yb.meaning} variants`,
                                          onClick: () => {
                                            Ky(By === yb.code ? null : yb.code)
                                          },
                                          children: yb.code
                                        })
                                      }), (0, sy.jsx)("td", {
                                        children: yb.meaning
                                      }), (0, sy.jsx)("td", {
                                        children: (0, sy.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: yb.usage
                                        })
                                      })]
                                    }, yb.code)))
                                  })]
                                })
                              }), Wy.examples.length > 0 && (0, sy.jsx)(gb, {
                                lang: "text",
                                code: Wy.examples.join("\n")
                              }), (0, sy.jsx)(CW, {
                                className: "DocsFilterBar",
                                value: Py,
                                placeholder: `Search ${Wy.entries.length} ${bb}\u2026`,
                                label: `Search ${bb}`,
                                onChange: yb => {
                                  oy(yb), qb(MU)
                                },
                                count: Ty || By ? {
                                  visible: Vy.length,
                                  total: Wy.entries.length
                                } : null,
                                children: By && (0, sy.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Ky(null)
                                  },
                                  children: [By, " ", (0, sy.jsx)(Ey, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, sy.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Vy.slice(0, ey).map((yb => {
                                  const Wy = "blocks" === bb ? null === hy || void 0 === hy ? void 0 : hy.getBlockFaces(yb.name) : null,
                                    Uy = hy && !Wy ? hy.getItemTextureUrl(yb.name) : null;
                                  return (0, sy.jsxs)("div", {
                                    id: XW(bb, yb.name),
                                    className: fy()("DocsCatalogueTile", {
                                      Linked: yb.name === Sy
                                    }),
                                    children: [(0, sy.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [Wy && (0, sy.jsx)(YU, {
                                        faces: Wy
                                      }), Uy && (0, sy.jsx)(XU, {
                                        src: Uy
                                      })]
                                    }), (0, sy.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: yb.name
                                    }), yb.variants.length > 0 && (0, sy.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: yb.variants.map((yb => (0, sy.jsx)("span", {
                                        children: yb
                                      }, yb)))
                                    }), (0, sy.jsx)(Cy, {
                                      text: yb.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, yb.name)
                                }))
                              }), Vy.length > ey && (0, sy.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  qb(Vy.length)
                                },
                                children: ["Show all ", Vy.length]
                              }), 0 === Vy.length && (0, sy.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", bb, " match."]
                              })]
                            })
                          }
                          var uU = Wy(4030),
                            rh = Wy(1420);
                          const HU = .95 * uU.b;

                          function ah(yb) {
                            return /^\s*```/.test(yb)
                          }

                          function FU(yb, bb) {
                            const Wy = [
                              []
                            ];
                            let Uy = !1;
                            for (const hy of yb.split("\n")) !Uy && bb(hy) && Wy.at(-1).length > 0 && Wy.push([]), ah(hy) && (Uy = !Uy), Wy.at(-1).push(hy);
                            return Wy.map((yb => yb.join("\n").trim())).filter(Boolean)
                          }

                          function pU(yb, bb) {
                            const Wy = `${"#".repeat(bb)} `,
                              Uy = [];
                            let hy = !1;
                            for (const fy of yb.split("\n")) ah(fy) ? hy = !hy : !hy && fy.startsWith(Wy) && Uy.push(fy.slice(Wy.length).trim());
                            return Uy
                          }

                          function LU(yb) {
                            return yb.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class QU {
                            constructor(yb, bb) {
                              this.origin = bb, this.pages = void 0, this.partPaths = new Map;
                              const Wy = yb.map((yb => {
                                const bb = function(yb, bb) {
                                  const Wy = yb.map((yb => bb(yb) + 2)),
                                    Uy = Wy.reduce(((yb, bb) => yb + bb), 0),
                                    hy = Uy / Math.ceil(Uy / HU),
                                    fy = [];
                                  let Zy = 0;
                                  return yb.forEach(((yb, bb) => {
                                    const Uy = Wy[bb];
                                    (0 === fy.length || Zy + Uy > HU || Zy + Uy / 2 > hy) && (fy.push([]), Zy = 0), fy.at(-1).push(yb), Zy += Uy
                                  })), fy
                                }(FU(LU(yb), (yb => yb.startsWith("## "))).flatMap((yb => {
                                  var bb;
                                  const Wy = null !== (bb = pU(yb, 2)[0]) && void 0 !== bb ? bb : "";
                                  if (yb.length <= HU) return [{
                                    markdown: yb,
                                    section: Wy
                                  }];
                                  let Uy = !1;
                                  return FU(yb, (yb => {
                                    const bb = Uy && "" !== yb.trim();
                                    return Uy = "" === yb.trim(), bb
                                  })).map((yb => ({
                                    markdown: yb,
                                    section: Wy
                                  })))
                                })), (bb => this.resolveLinks(yb, bb.markdown).length));
                                return {
                                  page: yb,
                                  groups: bb.length > 1 ? bb : []
                                }
                              }));
                              for (const {
                                  page: Uy,
                                  groups: hy
                                }
                                of Wy) hy.forEach(((yb, bb) => {
                                const Wy = (0, uU.k)(Uy.slug, bb);
                                for (const hy of yb.flatMap((yb => [...pU(yb.markdown, 2), ...pU(yb.markdown, 3)]))) {
                                  const yb = `${Uy.id}#${(0,Gy.p)(hy)}`;
                                  this.partPaths.has(yb) || this.partPaths.set(yb, Wy)
                                }
                              }));
                              this.pages = Wy.map((yb => {
                                let {
                                  page: bb,
                                  groups: Wy
                                } = yb;
                                return {
                                  page: bb,
                                  path: (0, uU.j)(bb.slug),
                                  markdown: `# ${bb.title}\n\n${this.resolveLinks(bb,LU(bb))}\n`,
                                  parts: Wy.map(((yb, Uy) => this.renderPart(bb, yb, Uy, Wy.length)))
                                }
                              }))
                            }
                            url(yb) {
                              return `${this.origin}${yb}`
                            }
                            getPage(yb) {
                              return this.pages.find((bb => bb.page.id === yb))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((yb => (yb.parts.length > 0 ? yb.parts : [{
                                path: yb.path,
                                label: "",
                                markdown: yb.markdown
                              }]).filter((yb => yb.markdown.length > uU.b))))
                            }
                            markdownUrl(yb, bb) {
                              const Wy = bb && this.partPaths.get(`${yb.id}#${bb}`) || (0, uU.j)(yb.slug);
                              return this.url(bb ? `${Wy}#${bb}` : Wy)
                            }
                            resolveLinks(yb, bb) {
                              return bb.replace(/\]\((#[^)]+)\)/g, ((bb, Wy) => {
                                var Uy;
                                const hy = null !== (Uy = jb(Wy)) && void 0 !== Uy ? Uy : this.samePageTarget(yb, Wy);
                                return hy ? `](${this.markdownUrl(hy.page,hy.anchor)})` : bb
                              }))
                            }
                            samePageTarget(yb, bb) {
                              const Wy = (0, Gy.p)(bb.slice(1));
                              return Qy(yb, Wy) ? {
                                page: yb,
                                anchor: Wy
                              } : null
                            }
                            renderPart(yb, bb, Wy, Uy) {
                              const hy = function(yb) {
                                  const bb = yb.map((yb => yb.section)).filter(Boolean);
                                  if (0 === bb.length) return "";
                                  const Wy = bb[0],
                                    Uy = bb.at(-1);
                                  return Wy === Uy ? Wy : `${Wy} to ${Uy}`
                                }(bb),
                                fy = bb.map((yb => yb.markdown)).join("\n\n"),
                                Zy = hy ? `It covers ${hy}. ` : "",
                                cb = `Part ${Wy+1} of ${Uy} of [${yb.title}](${this.url((0,uU.j)(yb.slug))}). ${Zy}[llms.txt](${this.url(uU.e)}) lists every part.`;
                              return {
                                path: (0, uU.k)(yb.slug, Wy),
                                label: hy,
                                markdown: `# ${yb.title}, part ${Wy+1} of ${Uy}\n\n${cb}\n\n${this.resolveLinks(yb,fy)}\n`
                              }
                            }
                            llmsTxt(yb) {
                              const bb = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${jh(uU.b)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const Wy of ab) {
                                bb.push("", `## ${Wy.title}`, "");
                                for (const yb of Wy.pageIds) {
                                  const Wy = this.getPage(yb),
                                    {
                                      page: Uy,
                                      parts: hy
                                    } = Wy,
                                    fy = `About ${jh(Wy.markdown.length)} tokens${hy.length>0?`, in ${hy.length} parts:`:"."}`;
                                  bb.push(`- [${Uy.title}](${this.url(Wy.path)}): ${Uy.summary} ${fy}`), hy.forEach(((yb, Wy) => {
                                    bb.push(`  - [Part ${Wy+1}${yb.label?`: ${yb.label}`:""}](${this.url(yb.path)})`)
                                  }))
                                }
                              }
                              return bb.push("", "## Optional", "", `- [Every page in one file](${this.url(uU.d)}): About ${jh(yb.length)} tokens, for a model with a large context window.`, ""), bb.join("\n")
                            }
                            llmsFullTxt() {
                              return ab.flatMap((yb => yb.pageIds.map((yb => this.getPage(yb).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const yb = this.llmsFullTxt(),
                                bb = this.llmsTxt(yb),
                                Wy = new Map([
                                  [uU.h, bb],
                                  [uU.e, bb],
                                  [uU.d, yb]
                                ]);
                              for (const Uy of this.pages) {
                                Wy.set(Uy.path, Uy.markdown);
                                for (const yb of Uy.parts) Wy.set(yb.path, yb.markdown)
                              }
                              return Wy
                            }
                          }

                          function jh(yb) {
                            return `${Math.max(1,Math.round(yb/4e3))}K`
                          }
                          let DU = null;

                          function th() {
                            return DU ??= new QU(Hy, rh.e), DU
                          }
                          const wU = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function kh(yb) {
                            return th().getPage(yb.id).parts.length > 0 ? `Read ${uU.f}, then the parts of the Bloxd Code API's ${yb.title} page it lists, so I can ask questions about it.` : `Read ${rh.e}${(0,uU.j)(yb.slug)} so I can ask questions about it. ${uU.f} lists every page of the Bloxd Code API docs.`
                          }

                          function NU(yb) {
                            let {
                              page: bb
                            } = yb;
                            const [Wy, Uy] = mb();
                            return (0, sy.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, sy.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Uy(th().getPage(bb.id).markdown)
                                },
                                children: [(0, sy.jsx)(Ey, {
                                  name: !1 === (null === Wy || void 0 === Wy ? void 0 : Wy.failed) ? "check" : "copy"
                                }), (0, sy.jsx)("span", {
                                  children: Wy ? Wy.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), wU.map((yb => (0, sy.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${yb.url}${encodeURIComponent(kh(bb))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, sy.jsx)(Ey, {
                                  name: "external-link"
                                }), (0, sy.jsxs)("span", {
                                  children: ["Open in ", yb.name]
                                })]
                              }, yb.name)))]
                            })
                          }

                          function zh(yb) {
                            return `#${[0,1,2].map((bb=>Math.round(Math.min(255,Math.max(0,yb[bb]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function IU(yb) {
                            return [parseInt(yb.slice(1, 3), 16), parseInt(yb.slice(3, 5), 16), parseInt(yb.slice(5, 7), 16)]
                          }

                          function xh(yb) {
                            let {
                              label: bb,
                              min: Wy,
                              max: Uy,
                              step: hy,
                              low: fy,
                              high: Zy,
                              onChange: cb
                            } = yb;
                            return (0, sy.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, sy.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, sy.jsx)("span", {
                                  children: bb
                                }), (0, sy.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: fy === Zy ? fy : `${fy}\u2013${Zy}`
                                })]
                              }), (0, sy.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, sy.jsx)("input", {
                                  type: "range",
                                  min: Wy,
                                  max: Uy,
                                  step: hy,
                                  value: Math.min(Uy, fy),
                                  "aria-label": `Minimum ${bb.toLowerCase()}`,
                                  onChange: yb => {
                                    const bb = Number(yb.target.value);
                                    cb(bb, Math.max(bb, Zy))
                                  }
                                }), (0, sy.jsx)("input", {
                                  type: "range",
                                  min: Wy,
                                  max: Uy,
                                  step: hy,
                                  value: Math.min(Uy, Zy),
                                  "aria-label": `Maximum ${bb.toLowerCase()}`,
                                  onChange: yb => {
                                    const bb = Number(yb.target.value);
                                    cb(Math.min(bb, fy), bb)
                                  }
                                })]
                              })]
                            })
                          }

                          function AU(yb) {
                            let {
                              label: bb,
                              min: Wy,
                              max: Uy,
                              step: hy,
                              value: fy,
                              onChange: Zy,
                              format: cb = String
                            } = yb;
                            return (0, sy.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, sy.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, sy.jsx)("span", {
                                  children: bb
                                }), (0, sy.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: cb(fy)
                                })]
                              }), (0, sy.jsx)("input", {
                                type: "range",
                                min: Wy,
                                max: Uy,
                                step: hy,
                                value: Math.min(Uy, Math.max(Wy, fy)),
                                "aria-label": bb,
                                onChange: yb => {
                                  Zy(Number(yb.target.value))
                                }
                              })]
                            })
                          }

                          function dU(yb) {
                            let {
                              opts: bb,
                              onChange: Wy
                            } = yb;
                            const Uy = bb.colorGradients;
                            if (!DW(Uy)) return (0, sy.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, sy.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, sy.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, sy.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Uy.map(((yb, bb) => (0, sy.jsx)("input", {
                                  type: "color",
                                  value: zh(yb.color),
                                  "aria-label": `Colour ${bb+1}`,
                                  onChange: yb => {
                                    const hy = [...Uy];
                                    hy[bb] = {
                                      color: IU(yb.target.value)
                                    }, Wy(hy)
                                  }
                                }, bb)))
                              })]
                            });
                            const hy = (yb, bb) => {
                              const hy = [...Uy];
                              hy[yb] = bb, Wy(hy)
                            };
                            return (0, sy.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, sy.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, sy.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, sy.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Uy.map(((yb, bb) => {
                                var Wy;
                                const Uy = null !== (Wy = yb.maxColor) && void 0 !== Wy ? Wy : yb.minColor;
                                return (0, sy.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, sy.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * yb.timeFraction), "%"]
                                  }), (0, sy.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${zh(yb.minColor)}, ${zh(Uy)})`
                                    }
                                  }), (0, sy.jsx)("input", {
                                    type: "color",
                                    value: zh(yb.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*yb.timeFraction)}%`,
                                    onChange: Wy => {
                                      hy(bb, {
                                        ...yb,
                                        minColor: [...IU(Wy.target.value), yb.minColor[3]]
                                      })
                                    }
                                  }), (0, sy.jsx)("input", {
                                    type: "color",
                                    value: zh(Uy),
                                    "aria-label": `Maximum colour at ${Math.round(100*yb.timeFraction)}%`,
                                    onChange: Wy => {
                                      hy(bb, {
                                        ...yb,
                                        maxColor: [...IU(Wy.target.value), Uy[3]]
                                      })
                                    }
                                  })]
                                }, bb)
                              }))]
                            })
                          }
                          const yf = [-.5, -.5, -.5],
                            bf = [.5, .5, .5],
                            Wh = [0, 1, 2, 3, 4, 5, 6, 7].map((yb => [1 & yb ? bf[0] : yf[0], 2 & yb ? bf[1] : yf[1], 4 & yb ? bf[2] : yf[2]]));class Uh {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(yb, bb, Wy, Uy) {
                              const hy = Math.round(31 * bb),
                                fy = Math.round(31 * Wy),
                                Zy = Math.round(31 * Uy),
                                cb = `${hy}|${fy}|${Zy}`;
                              let Py = this.tints.get(yb);
                              (!Py || Py.size > 2e3) && (Py = new Map, this.tints.set(yb, Py));
                              let oy = Py.get(cb);
                              if (oy) return oy;
                              oy = document.createElement("canvas"), oy.width = yb.naturalWidth || 16, oy.height = yb.naturalHeight || 16;
                              const By = oy.getContext("2d");
                              return By ? (By.imageSmoothingEnabled = !1, By.drawImage(yb, 0, 0, oy.width, oy.height), By.globalCompositeOperation = "multiply", By.fillStyle = `rgb(${hy/31*255}, ${fy/31*255}, ${Zy/31*255})`, By.fillRect(0, 0, oy.width, oy.height), By.globalCompositeOperation = "destination-in", By.drawImage(yb, 0, 0, oy.width, oy.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Py.set(cb, oy), oy
                            }
                          }

                          function hh(yb) {
                            let {
                              opts: bb,
                              textureUrl: Wy,
                              burst: hy,
                              paused: fy
                            } = yb;
                            const Zy = (0, Uy.useRef)(null),
                              cb = (0, Uy.useRef)(bb);
                            cb.current = bb;
                            const Py = (0, Uy.useRef)(fy);
                            Py.current = fy;
                            const oy = (0, Uy.useRef)(null),
                              By = (0, Uy.useRef)(null),
                              Ky = (0, Uy.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(yb) {
                                let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const Wy = [-.5, -.5, -.5],
                                  Uy = [.5, .5, .5];
                                let hy = .5;
                                for (let fy = 0; fy < 40; fy++) {
                                  const fy = wW(yb, Wy, Uy, bb),
                                    Zy = Math.max(fy.life / 30, .001);
                                  for (; zU(fy, yb.gravity, Zy);) hy = Math.max(hy, Math.hypot(fy.pos[0], fy.pos[1], fy.pos[2]) + fy.size / 2)
                                }
                                return hy
                              }(bb)))), [bb]),
                              ey = (0, Uy.useRef)(Ky);
                            return ey.current = Ky, (0, Uy.useEffect)((() => {
                              if (oy.current = null, !Wy) return;
                              const yb = new Image;
                              let bb = !1;
                              return yb.onload = () => {
                                bb || (oy.current = yb)
                              }, yb.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${Wy}`)
                              }, yb.src = Wy, () => {
                                bb = !0
                              }
                            }), [Wy]), (0, Uy.useEffect)((() => {
                              var yb;
                              null === (yb = By.current) || void 0 === yb || yb.call(By)
                            }), [bb, hy]), (0, Uy.useEffect)((() => {
                              const yb = Zy.current,
                                bb = null === yb || void 0 === yb ? void 0 : yb.getContext("2d");
                              if (!yb || !bb) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const Wy = new Uh;
                              let Uy = [],
                                hy = 0,
                                fy = -.7,
                                Ky = ey.current,
                                qb = performance.now(),
                                sy = 0,
                                Sy = !0,
                                Ey = null;
                              const ly = () => {
                                const yb = cb.current,
                                  bb = Math.min(400, Math.max(0, Math.ceil(yb.manualEmitCount)));
                                Uy = [];
                                for (let Wy = 0; Wy < bb; Wy++) Uy.push(wW(yb, yf, bf, Math.random));
                                hy = 0
                              };
                              By.current = ly, ly();
                              const mb = Zy => {
                                sy = requestAnimationFrame(mb);
                                const By = Math.min(.05, (Zy - qb) / 1e3);
                                if (qb = Zy, !Sy) return;
                                const Cy = window.devicePixelRatio || 1,
                                  Ty = Math.round(yb.clientWidth * Cy),
                                  Vy = Math.round(yb.clientHeight * Cy);
                                if (0 === Ty || 0 === Vy) return;
                                yb.width === Ty && yb.height === Vy || (yb.width = Ty, yb.height = Vy);
                                const Jy = cb.current;
                                null === Ey && (fy += .18 * By), Ky += (ey.current - Ky) * Math.min(1, 4 * By);
                                const gb = .6 * By;
                                Uy = Uy.filter((yb => zU(yb, Jy.gravity, gb))), 0 !== Uy.length || Py.current || (hy += By, hy > .6 && ly());
                                const Gy = function(yb, bb, Wy, Uy) {
                                  const hy = 3.2 * Uy,
                                    fy = .44 * Math.min(yb, bb) * hy / Uy,
                                    Zy = Math.cos(Wy),
                                    cb = Math.sin(Wy),
                                    Py = Math.cos(.42),
                                    oy = Math.sin(.42);
                                  return (Wy, Uy, By) => {
                                    const Ky = Wy * cb + By * Zy,
                                      ey = hy - (Uy * oy + Ky * Py);
                                    if (ey < .05) return null;
                                    const qb = fy / ey;
                                    return {
                                      x: yb / 2 + (Wy * Zy - By * cb) * qb,
                                      y: bb / 2 - (Uy * Py - Ky * oy) * qb,
                                      scale: qb,
                                      depth: ey
                                    }
                                  }
                                }(Ty, Vy, fy, Ky);
                                ! function(yb, bb, Wy, Uy, hy) {
                                  const fy = yb.createLinearGradient(0, 0, 0, Wy);
                                  fy.addColorStop(0, "#23262d"), fy.addColorStop(1, "#16181c"), yb.globalCompositeOperation = "source-over", yb.globalAlpha = 1, yb.fillStyle = fy, yb.fillRect(0, 0, bb, Wy);
                                  const Zy = (bb, Wy) => {
                                      const hy = Uy(bb[0], bb[1], bb[2]),
                                        fy = Uy(Wy[0], Wy[1], Wy[2]);
                                      hy && fy && (yb.beginPath(), yb.moveTo(hy.x, hy.y), yb.lineTo(fy.x, fy.y), yb.stroke())
                                    },
                                    cb = Math.ceil(hy) + 1,
                                    Py = yf[1];
                                  yb.lineWidth = 1, yb.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let oy = -cb; oy <= cb; oy++) Zy([oy + .5, Py, .5 - cb], [oy + .5, Py, cb + .5]), Zy([.5 - cb, Py, oy + .5], [cb + .5, Py, oy + .5]);
                                  yb.strokeStyle = "rgba(255, 255, 255, 0.28)", yb.setLineDash([4, 4]);
                                  for (const oy of Wh)
                                    for (const yb of Wh) {
                                      const bb = [0, 1, 2].filter((bb => oy[bb] !== yb[bb]));
                                      1 === bb.length && oy[bb[0]] < yb[bb[0]] && Zy(oy, yb)
                                    }
                                  yb.setLineDash([])
                                }(bb, Ty, Vy, Gy, Ky);
                                const Oy = oy.current,
                                  Ry = Uy.map((yb => ({
                                    particle: yb,
                                    at: Gy(yb.pos[0], yb.pos[1], yb.pos[2])
                                  }))).filter((yb => null !== yb.at)).sort(((yb, bb) => bb.at.depth - yb.at.depth));
                                bb.imageSmoothingEnabled = !1;
                                for (const yb of function(yb) {
                                    switch (yb) {
                                      case FW.e.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case FW.e.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case FW.e.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case FW.e.MultiplyAdd:
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
                                  }(Jy.blendMode)) {
                                  bb.globalCompositeOperation = yb.operation;
                                  for (const {
                                      particle: Uy,
                                      at: hy
                                    }
                                    of Ry) {
                                    const [fy, Zy, cb, Py] = NW(Uy), oy = Math.max(1, Uy.size * hy.scale);
                                    bb.globalAlpha = yb.usesAlpha ? Math.min(1, Math.max(0, Py)) : 1, Oy ? bb.drawImage(Wy.get(Oy, fy, Zy, cb), hy.x - oy / 2, hy.y - oy / 2, oy, oy) : (bb.fillStyle = `rgb(${255*fy}, ${255*Zy}, ${255*cb})`, bb.fillRect(hy.x - oy / 2, hy.y - oy / 2, oy, oy))
                                  }
                                }
                                bb.globalCompositeOperation = "source-over", bb.globalAlpha = 1
                              };
                              sy = requestAnimationFrame(mb);
                              const Cy = new IntersectionObserver((yb => {
                                let [bb] = yb;
                                Sy = bb.isIntersecting
                              }));
                              Cy.observe(yb);
                              const Ty = bb => {
                                  Ey = bb.clientX, yb.setPointerCapture(bb.pointerId)
                                },
                                Vy = yb => {
                                  null !== Ey && (fy += .01 * (yb.clientX - Ey), Ey = yb.clientX)
                                },
                                Jy = () => {
                                  Ey = null
                                };
                              return yb.addEventListener("pointerdown", Ty), yb.addEventListener("pointermove", Vy), yb.addEventListener("pointerup", Jy), yb.addEventListener("pointercancel", Jy), () => {
                                cancelAnimationFrame(sy), Cy.disconnect(), By.current = null, yb.removeEventListener("pointerdown", Ty), yb.removeEventListener("pointermove", Vy), yb.removeEventListener("pointerup", Jy), yb.removeEventListener("pointercancel", Jy)
                              }
                            }), []), (0, sy.jsx)("canvas", {
                              ref: Zy,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${bb.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const fh = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Zh = [{
                              mode: FW.e.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: FW.e.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: FW.e.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: FW.e.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: FW.e.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            cf = (0, Uy.forwardRef)((function(yb, bb) {
                              var Wy, hy;
                              let {
                                textures: Zy
                              } = yb;
                              const cb = CU(),
                                Py = (0, Uy.useRef)(null),
                                [oy, By] = (0, Uy.useState)(LW),
                                [Ky, ey] = (0, Uy.useState)("example"),
                                [qb, Sy] = (0, Uy.useState)(0),
                                [ly, mb] = (0, Uy.useState)(!1),
                                Ty = yb => {
                                  const bb = "example" === yb ? LW : pW(yb);
                                  bb && (By(bb), ey(yb))
                                };
                              (0, Uy.useImperativeHandle)(bb, (() => ({
                                preview: yb => {
                                  var bb;
                                  Ty(yb), null === (bb = Py.current) || void 0 === bb || bb.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Vy = yb => {
                                  By({
                                    ...oy,
                                    ...yb
                                  }), ey(null)
                                },
                                Jy = function(yb, bb) {
                                  if (null !== bb) return `${dW}    presetId: "${bb}",\n${yh}\n})`;
                                  const Wy = yb.velocityGradients.map((yb => `        {\n            timeFraction: ${IW(yb.timeFraction)},\n            factor: ${IW(yb.factor)},\n            factor2: ${IW(yb.factor2)},\n        },`)),
                                    Uy = [`    dir1: ${xU(yb.dir1)},`, `    dir2: ${xU(yb.dir2)},`, yh, `    texture: "${yb.texture}",`, `    minLifeTime: ${IW(yb.minLifeTime)},`, `    maxLifeTime: ${IW(yb.maxLifeTime)},`, `    minEmitPower: ${IW(yb.minEmitPower)},`, `    maxEmitPower: ${IW(yb.maxEmitPower)},`, `    minSize: ${IW(yb.minSize)},`, `    maxSize: ${IW(yb.maxSize)},`, `    manualEmitCount: ${IW(yb.manualEmitCount)},`, `    gravity: ${xU(yb.gravity)},`, `    colorGradients: ${AW(yb.colorGradients,"    ")},`, `    velocityGradients: ${Wy.length>0?`[\n${Wy.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${IW(yb.blendMode)},`];
                                  return void 0 !== yb.hideDist && Uy.push(`    hideDist: ${IW(yb.hideDist)},`), `${dW}${Uy.join("\n")}\n})`
                                }(oy, null === Ky || "example" === Ky ? null : Ky),
                                Gy = Zy.includes(oy.texture) ? Zy : [...Zy, oy.texture];
                              return (0, sy.jsxs)("section", {
                                ref: Py,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, sy.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, sy.jsxs)("div", {
                                    children: [(0, sy.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, sy.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, sy.jsx)(Cy, {
                                    text: Jy,
                                    label: "Copy code"
                                  })]
                                }), (0, sy.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, sy.jsx)("button", {
                                    type: "button",
                                    className: fy()("DocsVariantChip", {
                                      Active: "example" === Ky
                                    }),
                                    onClick: () => {
                                      Ty("example")
                                    },
                                    children: "Example"
                                  }), fh.filter((yb => null !== pW(yb))).map((yb => (0, sy.jsx)("button", {
                                    type: "button",
                                    className: fy()("DocsVariantChip", {
                                      Active: Ky === yb
                                    }),
                                    onClick: () => {
                                      Ty(yb)
                                    },
                                    children: yb
                                  }, yb))), (0, sy.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Ky && void 0 !== Ky ? Ky : "custom",
                                    "aria-label": "Preset",
                                    onChange: yb => {
                                      Ty(yb.target.value)
                                    },
                                    children: [(0, sy.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Ky && (0, sy.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), aU.b.map((yb => (0, sy.jsx)("option", {
                                      value: yb,
                                      children: yb
                                    }, yb)))]
                                  })]
                                }), (0, sy.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, sy.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, sy.jsx)(hh, {
                                      opts: oy,
                                      textureUrl: null !== (Wy = null === cb || void 0 === cb ? void 0 : cb.getParticleTextureUrl(oy.texture)) && void 0 !== Wy ? Wy : null,
                                      burst: qb,
                                      paused: ly
                                    }), (0, sy.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, sy.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Sy(qb + 1)
                                        },
                                        children: [(0, sy.jsx)(Ey, {
                                          name: "replay"
                                        }), (0, sy.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, sy.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": ly,
                                        onClick: () => {
                                          mb(!ly)
                                        },
                                        children: [(0, sy.jsx)(Ey, {
                                          name: ly ? "play" : "pause"
                                        }), (0, sy.jsx)("span", {
                                          children: ly ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, sy.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, sy.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, sy.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, sy.jsx)("span", {
                                          children: "Texture"
                                        }), (0, sy.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: oy.texture
                                        })]
                                      }), (0, sy.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: Gy.map((yb => {
                                          var bb;
                                          const Wy = null !== (bb = null === cb || void 0 === cb ? void 0 : cb.getParticleTextureUrl(yb)) && void 0 !== bb ? bb : null;
                                          return (0, sy.jsx)("button", {
                                            type: "button",
                                            className: fy()("DocsParticleTexture", {
                                              Active: oy.texture === yb
                                            }),
                                            title: yb,
                                            "aria-label": yb,
                                            "aria-pressed": oy.texture === yb,
                                            onClick: () => {
                                              Vy({
                                                texture: yb
                                              })
                                            },
                                            children: Wy ? (0, sy.jsx)("img", {
                                              src: Wy,
                                              alt: ""
                                            }) : (0, sy.jsx)(Ey, {
                                              name: "image"
                                            })
                                          }, yb)
                                        }))
                                      })]
                                    }), (0, sy.jsx)(AU, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: oy.manualEmitCount,
                                      onChange: yb => {
                                        Vy({
                                          manualEmitCount: yb
                                        })
                                      }
                                    }), (0, sy.jsx)(xh, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: oy.minLifeTime,
                                      high: oy.maxLifeTime,
                                      onChange: (yb, bb) => {
                                        Vy({
                                          minLifeTime: yb,
                                          maxLifeTime: bb
                                        })
                                      }
                                    }), (0, sy.jsx)(xh, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: oy.minEmitPower,
                                      high: oy.maxEmitPower,
                                      onChange: (yb, bb) => {
                                        Vy({
                                          minEmitPower: yb,
                                          maxEmitPower: bb
                                        })
                                      }
                                    }), (0, sy.jsx)(xh, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: oy.minSize,
                                      high: oy.maxSize,
                                      onChange: (yb, bb) => {
                                        Vy({
                                          minSize: yb,
                                          maxSize: bb
                                        })
                                      }
                                    }), (0, sy.jsx)(AU, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (hy = oy.gravity[1]) && void 0 !== hy ? hy : 0,
                                      onChange: yb => {
                                        var bb, Wy;
                                        Vy({
                                          gravity: [null !== (bb = oy.gravity[0]) && void 0 !== bb ? bb : 0, yb, null !== (Wy = oy.gravity[2]) && void 0 !== Wy ? Wy : 0]
                                        })
                                      }
                                    }), (0, sy.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, sy.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, sy.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, sy.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: oy.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: yb => {
                                          Vy({
                                            blendMode: Number(yb.target.value)
                                          })
                                        },
                                        children: Zh.map((yb => {
                                          let {
                                            mode: bb,
                                            label: Wy
                                          } = yb;
                                          return (0, sy.jsx)("option", {
                                            value: bb,
                                            children: Wy
                                          }, bb)
                                        }))
                                      })]
                                    }), (0, sy.jsx)(dU, {
                                      opts: oy,
                                      onChange: yb => {
                                        Vy({
                                          colorGradients: yb
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, sy.jsx)(gb, {
                                  code: Jy,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Ph = Wy(3693),
                            oh = Wy(1546);

                          function Bh(yb, bb) {
                            return yb ? Ph.b.includes(bb) ? yb.getIngameIconUrl(bb) : yb.getItemIconUrl(bb) : null
                          }

                          function Kh(yb) {
                            var bb, Wy, Uy;
                            let {
                              part: hy,
                              assets: Zy
                            } = yb;
                            const cb = Bh(Zy, hy.icon),
                              Py = null !== (bb = null === (Wy = hy.style) || void 0 === Wy ? void 0 : Wy.fontSize) && void 0 !== bb ? bb : "1.8em",
                              oy = (0, aW.Sb)(hy.style);
                            return (0, sy.jsxs)("span", {
                              className: fy()("DocsBloxdTextIcon", {
                                Missing: !cb
                              }),
                              style: {
                                width: Py,
                                height: Py,
                                opacity: null === (Uy = hy.style) || void 0 === Uy ? void 0 : Uy.opacity
                              },
                              title: cb ? void 0 : `No Bloxd icon, item or block is called "${hy.icon}"`,
                              children: [cb && oy && (0, sy.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: oy,
                                  maskImage: `url("${cb}")`,
                                  WebkitMaskImage: `url("${cb}")`
                                }
                              }), cb ? (0, sy.jsx)("img", {
                                src: cb,
                                alt: "",
                                className: fy()({
                                  Tinted: oy
                                })
                              }) : (0, sy.jsx)(Ey, {
                                name: "image"
                              })]
                            })
                          }

                          function eh(yb) {
                            let {
                              parts: bb,
                              className: Wy
                            } = yb;
                            const Uy = CU(),
                              hy = [];
                            let Zy = [];
                            const cb = yb => {
                              Zy.length > 0 && (hy.push((0, sy.jsx)(oh.d, {
                                text: Zy
                              }, `run-${yb}`)), Zy = [])
                            };
                            return bb.forEach(((yb, bb) => {
                              "icon" !== jW(yb) || pb(yb.icon) ? Zy.push(yb) : (cb(bb), hy.push((0, sy.jsx)(Kh, {
                                part: yb,
                                assets: Uy
                              }, `icon-${bb}`)))
                            })), cb(bb.length), (0, sy.jsx)("div", {
                              className: fy()("DocsStyledTextPreview", Wy),
                              children: hy
                            })
                          }
                          const qf = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let sh = null;

                          function Sh(yb) {
                            if (sh ??= document.createElement("canvas").getContext("2d"), !sh) return "#000000";
                            sh.fillStyle = "#000000", sh.fillStyle = yb;
                            const bb = sh.fillStyle;
                            return bb.startsWith("#") ? bb : "#000000"
                          }

                          function Eh(yb) {
                            let {
                              value: bb,
                              label: Wy,
                              onChange: Uy
                            } = yb;
                            return (0, sy.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, sy.jsx)("input", {
                                type: "color",
                                value: Sh(bb),
                                "aria-label": `${Wy} picker`,
                                onChange: yb => {
                                  Uy(yb.target.value)
                                }
                              }), (0, sy.jsx)("input", {
                                type: "text",
                                value: bb,
                                placeholder: "#ffb914 or gold",
                                "aria-label": Wy,
                                spellCheck: !1,
                                onChange: yb => {
                                  Uy(yb.target.value)
                                }
                              })]
                            })
                          }

                          function lh(yb) {
                            let {
                              value: bb,
                              fontAwesomeIcons: Wy,
                              onChange: hy
                            } = yb;
                            const Zy = CU(),
                              [cb, Py] = (0, Uy.useState)(pb(bb) ? "fontAwesome" : "bloxd"),
                              [oy, By] = (0, Uy.useState)(""),
                              Ky = oy.trim().toLowerCase(),
                              ey = "bloxd" === cb ? Ph.b : Wy,
                              qb = Ky ? ey.filter((yb => yb.toLowerCase().includes(Ky))) : ey;
                            return (0, sy.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, sy.jsx)("input", {
                                type: "text",
                                value: bb,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: yb => {
                                  hy(yb.target.value)
                                }
                              }), (0, sy.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, sy.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((yb => (0, sy.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": cb === yb,
                                    className: fy()("DocsVariantChip", {
                                      Active: cb === yb
                                    }),
                                    onClick: () => {
                                      Py(yb)
                                    },
                                    children: "bloxd" === yb ? `Bloxd icons (${Ph.b.length})` : `Font Awesome (${Wy.length})`
                                  }, yb))), (0, sy.jsx)("input", {
                                    type: "search",
                                    value: oy,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: yb => {
                                      By(yb.target.value)
                                    }
                                  })
                                ]
                              }), (0, sy.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [qb.map((yb => {
                                  const Wy = "bloxd" === cb ? Bh(Zy, yb) : null;
                                  return (0, sy.jsx)("button", {
                                    type: "button",
                                    title: yb,
                                    "aria-label": yb,
                                    "aria-pressed": yb === bb,
                                    className: fy()("DocsIconPickerOption", {
                                      Active: yb === bb
                                    }),
                                    onClick: () => {
                                      hy(yb)
                                    },
                                    children: "fontAwesome" === cb ? (0, sy.jsx)(TW.e, {
                                      name: yb
                                    }) : Wy ? (0, sy.jsx)("img", {
                                      src: Wy,
                                      alt: ""
                                    }) : (0, sy.jsx)(Ey, {
                                      name: "image"
                                    })
                                  }, yb)
                                })), 0 === qb.length && (0, sy.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", oy, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function mf(yb) {
                            let {
                              property: bb,
                              value: Wy,
                              fontAwesomeIcons: Uy,
                              onChange: hy
                            } = yb;
                            const {
                              field: fy,
                              label: Zy
                            } = bb, cb = yb => "" !== yb || bb.isRequired ? yb : void 0;
                            switch (fy.kind) {
                              case "text":
                                return fy.multiline ? (0, sy.jsx)("textarea", {
                                  value: String(null !== Wy && void 0 !== Wy ? Wy : ""),
                                  rows: 2,
                                  "aria-label": Zy,
                                  onChange: yb => {
                                    hy(yb.target.value)
                                  }
                                }) : (0, sy.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Wy && void 0 !== Wy ? Wy : ""),
                                  "aria-label": Zy,
                                  onChange: yb => {
                                    hy(cb(yb.target.value))
                                  }
                                });
                              case "size":
                                return (0, sy.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Wy && void 0 !== Wy ? Wy : ""),
                                  placeholder: bb.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Zy,
                                  spellCheck: !1,
                                  onChange: yb => {
                                    hy(cb(yb.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, sy.jsx)(Eh, {
                                  value: String(null !== Wy && void 0 !== Wy ? Wy : ""),
                                  label: Zy,
                                  onChange: yb => {
                                    hy(cb(yb))
                                  }
                                });
                              case "colours": {
                                const yb = Array.isArray(Wy) ? Wy : [],
                                  bb = yb => {
                                    hy(yb.length > 0 ? yb : void 0)
                                  };
                                return (0, sy.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [yb.map(((Wy, Uy) => (0, sy.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, sy.jsx)(Eh, {
                                      value: Wy,
                                      label: `${Zy} ${Uy+1}`,
                                      onChange: Wy => {
                                        bb(yb.map(((yb, bb) => bb === Uy ? Wy : yb)))
                                      }
                                    }), (0, sy.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Uy+1}`,
                                      onClick: () => {
                                        bb(yb.filter(((yb, bb) => bb !== Uy)))
                                      },
                                      children: (0, sy.jsx)(Ey, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Uy))), (0, sy.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var Wy;
                                      bb([...yb, null !== (Wy = yb.at(-1)) && void 0 !== Wy ? Wy : "#ffffff"])
                                    },
                                    children: [(0, sy.jsx)(Ey, {
                                      name: "plus"
                                    }), 0 === yb.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Py;
                                const yb = "number" === typeof Wy ? Wy : Number(null !== (Py = bb.defaultText) && void 0 !== Py ? Py : 0);
                                return (0, sy.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, sy.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: yb,
                                    "aria-label": Zy,
                                    onChange: yb => {
                                      hy(Number(yb.target.value))
                                    }
                                  }), (0, sy.jsx)("output", {
                                    children: yb.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, sy.jsxs)("select", {
                                  value: String(null !== Wy && void 0 !== Wy ? Wy : ""),
                                  "aria-label": Zy,
                                  onChange: yb => {
                                    hy(cb(yb.target.value))
                                  },
                                  children: [!bb.isRequired && (0, sy.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", bb.defaultText, ")"]
                                  }), fy.options.map((yb => (0, sy.jsx)("option", {
                                    value: yb,
                                    children: yb
                                  }, yb)))]
                                });
                              case "icon":
                                return (0, sy.jsx)(lh, {
                                  value: String(null !== Wy && void 0 !== Wy ? Wy : ""),
                                  fontAwesomeIcons: Uy,
                                  onChange: hy
                                })
                            }
                          }

                          function Ch(yb) {
                            let bb;
                            try {
                              bb = JSON.parse(yb)
                            } catch (Wy) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${Wy.message}`
                              }
                            }
                            return WW(bb) ? {
                              part: bb,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Th(yb) {
                            let {
                              parts: bb,
                              index: Wy,
                              fontAwesomeIcons: hy,
                              onChange: fy,
                              Yby: Zy,
                              onClose: cb
                            } = yb;
                            const Py = (0, Uy.useContext)(sb),
                              By = (0, Uy.useRef)(null),
                              Ky = bb[Wy],
                              ey = jW(Ky),
                              [qb, Sy] = (0, Uy.useState)((() => JSON.stringify(Ky, null, 2))),
                              ly = (0, Uy.useMemo)((() => "other" === ey ? Ch(qb).error : null), [ey, qb]);
                            (0, Uy.useEffect)((() => {
                              var yb;
                              null === (yb = By.current) || void 0 === yb || yb.focus()
                            }), []);
                            const mb = (0, sy.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: yb => {
                                yb.target === yb.currentTarget && cb()
                              },
                              children: (0, sy.jsxs)("div", {
                                ref: By,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${Wy+1}: ${Lb[ey]}`,
                                tabIndex: -1,
                                onKeyDown: yb => {
                                  "Escape" === yb.key ? (yb.stopPropagation(), cb()) : "Tab" === yb.key && By.current && function(yb, bb) {
                                    const Wy = Array.from(yb.querySelectorAll(iW)),
                                      Uy = Wy[0],
                                      hy = Wy.at(-1);
                                    if (!Uy || !hy) return;
                                    const fy = document.activeElement;
                                    !bb.shiftKey || fy !== Uy && fy !== yb ? bb.shiftKey || fy !== hy || (bb.preventDefault(), Uy.focus()) : (bb.preventDefault(), hy.focus())
                                  }(By.current, yb)
                                },
                                children: [(0, sy.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, sy.jsxs)("div", {
                                    children: [(0, sy.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", Wy + 1]
                                    }), (0, sy.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: Lb[ey]
                                    })]
                                  }), (0, sy.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: cb,
                                    children: (0, sy.jsx)(Ey, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, sy.jsx)(eh, {
                                  parts: bb,
                                  className: "DocsTextDialogPreview"
                                }), (0, sy.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === ey ? (0, sy.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, sy.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, sy.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: qb,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: yb => {
                                        Sy(yb.target.value);
                                        const bb = Ch(yb.target.value);
                                        null !== bb.part && fy(bb.part)
                                      }
                                    }), ly && (0, sy.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: ly
                                    })]
                                  }) : tW[ey].map((yb => {
                                    const bb = kW(Ky, yb.path),
                                      Wy = yb.isRequired ? JSON.stringify(zW(Ky, yb.path)) === JSON.stringify(Ky) : void 0 === bb;
                                    return (0, sy.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, sy.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, sy.jsx)("span", {
                                          children: yb.label
                                        }), (0, sy.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: Wy,
                                          "aria-label": `Reset ${yb.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            fy(zW(Ky, yb.path))
                                          },
                                          children: [(0, sy.jsx)(Ey, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, sy.jsx)(mf, {
                                        property: yb,
                                        value: bb,
                                        fontAwesomeIcons: hy,
                                        onChange: bb => {
                                          fy(Nb(Ky, yb.path, bb))
                                        }
                                      }), !yb.isRequired && (0, sy.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", yb.defaultText]
                                      })]
                                    }, yb.path.join("."))
                                  }))
                                }), (0, sy.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, sy.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Zy,
                                    children: [(0, sy.jsx)(Ey, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, sy.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: cb,
                                    children: "Done"
                                  })]
                                }), (0, sy.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: qf.map((yb => (0, sy.jsx)("option", {
                                    value: yb
                                  }, yb)))
                                })]
                              })
                            });
                            return Py ? (0, oy.createPortal)(mb, Py) : mb
                          }
                          const Vh = [{
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
                            Jh = Object.keys(Qb);

                          function gf(yb) {
                            let {
                              fontAwesomeIcons: bb
                            } = yb;
                            const [Wy, hy] = (0, Uy.useState)(Vh[0].parts), [Zy, cb] = (0, Uy.useState)((() => db(Vh[0].parts))), [Py, oy] = (0, Uy.useState)(null), [By, Ky] = (0, Uy.useState)(!1), [ey, qb] = (0, Uy.useState)(null), [Sy, ly] = (0, Uy.useState)(!1), [mb, Cy] = (0, Uy.useState)(null), Ty = (0, Uy.useRef)(null), Vy = db(Wy);
                            (0, Uy.useLayoutEffect)((() => {
                              var yb;
                              if (!mb) return;
                              const bb = yb => {
                                  var bb;
                                  return null === (bb = Ty.current) || void 0 === bb ? void 0 : bb.querySelector(`[data-focus-key="${yb}"]`)
                                },
                                Wy = bb(mb.key);
                              null === (yb = Wy && !Wy.disabled ? Wy : bb(mb.fallback)) || void 0 === yb || yb.focus(), Cy(null)
                            }), [mb]);
                            const Jy = yb => {
                                hy(yb), cb(db(yb)), oy(null)
                              },
                              Gy = yb => {
                                Jy(Wy.filter(((bb, Wy) => Wy !== yb))), Cy({
                                  key: `edit-${Math.min(yb,Wy.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              Oy = (yb, bb) => {
                                const Uy = [...Wy],
                                  [hy] = Uy.splice(yb, 1);
                                Uy.splice(yb + bb, 0, hy), Jy(Uy);
                                Cy({
                                  key: `${bb<0?"up":"down"}-${yb+bb}`,
                                  fallback: `edit-${yb+bb}`
                                })
                              };
                            return (0, sy.jsxs)("section", {
                              ref: Ty,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, sy.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, sy.jsxs)("div", {
                                  children: [(0, sy.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, sy.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, sy.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Vh.map((yb => (0, sy.jsx)("button", {
                                  type: "button",
                                  className: fy()("DocsVariantChip", {
                                    Active: Vy === db(yb.parts)
                                  }),
                                  onClick: () => {
                                    Jy(yb.parts)
                                  },
                                  children: yb.label
                                }, yb.label)))
                              }), (0, sy.jsx)(eh, {
                                parts: Wy,
                                className: "DocsTextEditorPreview"
                              }), (0, sy.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, sy.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, sy.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, sy.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [Wy.map(((yb, bb) => {
                                      const Uy = jW(yb);
                                      return (0, sy.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, sy.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${bb}`,
                                          "aria-label": `Edit part ${bb+1}, ${Lb[Uy]}`,
                                          onClick: () => {
                                            qb(bb)
                                          },
                                          children: [(0, sy.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: Lb[Uy]
                                          }), (0, sy.jsx)(eh, {
                                            parts: [yb],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Uy && (0, sy.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Ib(yb)
                                          })]
                                        }), (0, sy.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, sy.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${bb+1} up`,
                                            "data-focus-key": `up-${bb}`,
                                            disabled: 0 === bb,
                                            onClick: () => {
                                              Oy(bb, -1)
                                            },
                                            children: (0, sy.jsx)(Ey, {
                                              name: "chevron-up"
                                            })
                                          }), (0, sy.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${bb+1} down`,
                                            "data-focus-key": `down-${bb}`,
                                            disabled: bb === Wy.length - 1,
                                            onClick: () => {
                                              Oy(bb, 1)
                                            },
                                            children: (0, sy.jsx)(Ey, {
                                              name: "chevron-down"
                                            })
                                          }), (0, sy.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${bb+1}`,
                                            onClick: () => {
                                              Gy(bb)
                                            },
                                            children: (0, sy.jsx)(Ey, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, bb)
                                    })), 0 === Wy.length && (0, sy.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, sy.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: yb => {
                                      "Escape" === yb.key && Sy && (yb.stopPropagation(), ly(!1), Cy({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, sy.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Sy,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        ly(!Sy)
                                      },
                                      children: [(0, sy.jsx)(Ey, {
                                        name: "plus"
                                      }), "Add a part", (0, sy.jsx)(Ey, {
                                        name: Sy ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Sy && (0, sy.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Jh.map((yb => (0, sy.jsx)("li", {
                                        children: (0, sy.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (yb => {
                                              Jy([...Wy, Qb[yb]]), ly(!1), qb(Wy.length)
                                            })(yb)
                                          },
                                          children: Lb[yb]
                                        })
                                      }, yb)))
                                    })]
                                  })]
                                }), (0, sy.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, sy.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, sy.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": By,
                                      onClick: () => {
                                        Ky(!By)
                                      },
                                      children: [(0, sy.jsx)(Ey, {
                                        name: By ? "check" : "pencil"
                                      }), By ? "Done" : "Edit"]
                                    })]
                                  }), By ? (0, sy.jsxs)(sy.Fragment, {
                                    children: [(0, sy.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Zy,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: yb => {
                                        cb(yb.target.value);
                                        const bb = UW(yb.target.value);
                                        oy(bb.error), bb.parts && hy(bb.parts)
                                      }
                                    }), Py && (0, sy.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Py
                                    })]
                                  }) : (0, sy.jsx)(gb, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Vy})`
                                  })]
                                })]
                              }), null !== ey && ey < Wy.length && (0, sy.jsx)(Th, {
                                parts: Wy,
                                index: ey,
                                fontAwesomeIcons: bb,
                                onChange: yb => {
                                  ((yb, bb) => {
                                    Jy(Wy.map(((Wy, Uy) => Uy === yb ? bb : Wy)))
                                  })(ey, yb)
                                },
                                Yby: () => {
                                  Gy(ey), qb(null)
                                },
                                onClose: () => {
                                  qb(null), Cy({
                                    key: `edit-${ey}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var Gh = Wy(4052),
                            Oh = Wy(4037),
                            Rh = Wy(4050),
                            vf = Wy(4060);
                          const Mh = 40,
                            Yh = 800,
                            Xh = 150,
                            nh = 8e3,
                            uh = 2e3;

                          function rf(yb, bb) {
                            return 12 * Math.log2(bb / yb)
                          }

                          function Hh(yb, bb) {
                            return Math.round(yb * 2 ** (bb / 12) * 10) / 10
                          }

                          function af(yb) {
                            return `${yb} ms`
                          }

                          function Fh(yb) {
                            return `${yb} st`
                          }
                          const ph = [{
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

                          function Lh(yb) {
                            let {
                              synth: bb,
                              onChange: Wy
                            } = yb;
                            const Uy = (0, Gh.l)(bb);
                            return (0, sy.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, sy.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, sy.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, sy.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, sy.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, sy.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, sy.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: Gh.h.map((yb => (0, sy.jsx)("button", {
                                      type: "button",
                                      className: fy()("DocsVariantChip", {
                                        Active: bb.waveform === yb
                                      }),
                                      "aria-pressed": bb.waveform === yb,
                                      onClick: () => {
                                        Wy({
                                          waveform: yb
                                        })
                                      },
                                      children: yb
                                    }, yb)))
                                  })]
                                }), (0, sy.jsx)(AU, {
                                  label: "Pitch",
                                  min: 0,
                                  max: rf(Mh, Yh),
                                  step: .1,
                                  value: rf(Mh, bb.pitchHz),
                                  format: () => `${bb.pitchHz} Hz`,
                                  onChange: yb => {
                                    Wy({
                                      pitchHz: Hh(Mh, yb)
                                    })
                                  }
                                }), (0, sy.jsx)(AU, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: bb.syllableMs,
                                  format: af,
                                  onChange: yb => {
                                    Wy({
                                      syllableMs: yb
                                    })
                                  }
                                }), (0, sy.jsx)(AU, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: bb.volume,
                                  onChange: yb => {
                                    Wy({
                                      volume: yb
                                    })
                                  }
                                })]
                              }), (0, sy.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, sy.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, sy.jsx)(AU, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: bb.durationMs,
                                  format: af,
                                  onChange: yb => {
                                    Wy({
                                      durationMs: yb
                                    })
                                  }
                                }), (0, sy.jsx)(AU, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Uy.durationMs,
                                  step: 1,
                                  value: Uy.attackMs,
                                  format: af,
                                  onChange: yb => {
                                    Wy({
                                      attackMs: yb
                                    })
                                  }
                                }), (0, sy.jsx)(AU, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Uy.durationMs - Uy.attackMs,
                                  step: 1,
                                  value: Uy.releaseMs,
                                  format: af,
                                  onChange: yb => {
                                    Wy({
                                      releaseMs: yb
                                    })
                                  }
                                }), (0, sy.jsx)(AU, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: bb.glideSemitones,
                                  format: Fh,
                                  onChange: yb => {
                                    Wy({
                                      glideSemitones: yb
                                    })
                                  }
                                }), (0, sy.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, sy.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== bb.lowpassHz,
                                    onChange: yb => {
                                      Wy({
                                        lowpassHz: yb.target.checked ? uh : null
                                      })
                                    }
                                  }), (0, sy.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== bb.lowpassHz && (0, sy.jsx)(AU, {
                                  label: "Filter",
                                  min: 0,
                                  max: rf(Xh, nh),
                                  step: .1,
                                  value: rf(Xh, bb.lowpassHz),
                                  format: () => `${bb.lowpassHz} Hz`,
                                  onChange: yb => {
                                    Wy({
                                      lowpassHz: Hh(Xh, yb)
                                    })
                                  }
                                })]
                              }), (0, sy.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, sy.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), ph.map((yb => {
                                  let {
                                    key: Uy,
                                    label: hy,
                                    max: fy
                                  } = yb;
                                  return (0, sy.jsx)(AU, {
                                    label: hy,
                                    min: 0,
                                    max: fy,
                                    step: .1,
                                    value: bb.intonation[Uy],
                                    format: Fh,
                                    onChange: yb => {
                                      Wy({
                                        intonation: {
                                          ...bb.intonation,
                                          [Uy]: yb
                                        }
                                      })
                                    }
                                  }, Uy)
                                }))]
                              })]
                            })
                          }
                          const Qh = Object.keys(Gh.i),
                            jf = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function Dh(yb) {
                            var bb;
                            const Wy = JSON.stringify((0, Gh.l)(yb));
                            return null !== (bb = Qh.find((yb => JSON.stringify((0, Gh.l)(Gh.i[yb])) === Wy))) && void 0 !== bb ? bb : null
                          }

                          function tf(yb) {
                            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof yb || null === yb) return JSON.stringify(yb);
                            return `{\n${Object.entries(yb).map((yb=>{let[Wy,Uy]=yb;return`${bb}    ${Wy}: ${tf(Uy,`${bb}    `)},`})).join("\n")}\n${bb}}`
                          }

                          function wh(yb, bb, Wy) {
                            const Uy = Dh(yb),
                              hy = [`    line: ${JSON.stringify(bb)},`];
                            return Wy && hy.push(`    speakerName: ${JSON.stringify(Wy)},`), hy.push("    voice,"), `const voice = ${Uy?JSON.stringify(Uy):tf((0,Gh.l)(yb))}\n\napi.setClientOption(playerId, "dialogue", {\n${hy.join("\n")}\n})`
                          }
                          const kf = 400,
                            Nh = 90;
                          let zf = null;

                          function Ih(yb, bb, Wy) {
                            return zf ??= new AudioContext, zf.resume(), (0, vf.b)(zf, zf.destination, yb, bb, Wy, (() => {}))
                          }

                          function xf() {
                            const [yb, bb] = (0, Uy.useState)(Gh.i.regular), [Wy, hy] = (0, Uy.useState)(jf[0]), [Zy, cb] = (0, Uy.useState)("Innkeeper"), [Py, oy] = (0, Uy.useState)(0), By = BU((yb => yb.volume)), Ky = (0, Uy.useRef)(null), ey = (0, Uy.useRef)(0), qb = (0, Uy.useRef)(0), Sy = () => {
                              var yb;
                              null === (yb = Ky.current) || void 0 === yb || yb.call(Ky), Ky.current = null
                            };
                            (0, Uy.useEffect)((() => () => {
                              var yb;
                              null === (yb = Ky.current) || void 0 === yb || yb.call(Ky), window.clearTimeout(ey.current)
                            }), []);
                            const ly = (0, Uy.useMemo)((() => ({
                                line: Wy,
                                speakerName: Zy || void 0,
                                voice: yb
                              })), [Wy, Zy, yb]),
                              mb = (0, Uy.useRef)(ly);
                            mb.current = ly;
                            const Ty = Dh(yb),
                              Vy = yb => {
                                window.clearTimeout(ey.current), Sy();
                                const {
                                  plan: bb,
                                  synth: Wy
                                } = (0, Rh.f)(yb);
                                Wy && (Ky.current = Ih(Wy, bb.blips, By)), oy((yb => yb + 1))
                              },
                              Jy = wh(yb, Wy, Zy);
                            return (0, sy.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, sy.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, sy.jsxs)("div", {
                                  children: [(0, sy.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, sy.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, sy.jsx)(Cy, {
                                  text: Jy,
                                  label: "Copy code"
                                })]
                              }), (0, sy.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [Qh.map((yb => (0, sy.jsx)("button", {
                                  type: "button",
                                  className: fy()("DocsVariantChip", {
                                    Active: Ty === yb
                                  }),
                                  "aria-pressed": Ty === yb,
                                  onClick: () => {
                                    (yb => {
                                      const Wy = Gh.i[yb];
                                      bb(Wy), Vy({
                                        ...ly,
                                        voice: Wy
                                      })
                                    })(yb)
                                  },
                                  children: yb
                                }, yb))), !Ty && (0, sy.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, sy.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, sy.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, sy.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, sy.jsx)(Oh.c, {
                                      display: ly
                                    }, Py)
                                  }), (0, sy.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: yb => {
                                      yb.preventDefault(), Vy(ly)
                                    },
                                    children: [(0, sy.jsx)("input", {
                                      value: Wy,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: yb => {
                                        hy(yb.target.value)
                                      }
                                    }), (0, sy.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, sy.jsx)(Ey, {
                                        name: "play"
                                      }), (0, sy.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, sy.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: jf.map((yb => (0, sy.jsx)("button", {
                                      type: "button",
                                      className: fy()("DocsVariantChip", {
                                        Active: Wy === yb
                                      }),
                                      onClick: () => {
                                        var bb;
                                        hy(bb = yb), Vy({
                                          ...ly,
                                          line: bb
                                        })
                                      },
                                      children: yb
                                    }, yb)))
                                  }), (0, sy.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, sy.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, sy.jsx)("input", {
                                      value: Zy,
                                      placeholder: "No name",
                                      onChange: yb => {
                                        cb(yb.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, sy.jsx)(Lh, {
                                  synth: yb,
                                  onChange: Wy => {
                                    const Uy = {
                                      ...yb,
                                      ...Wy
                                    };
                                    bb(Uy);
                                    const hy = {
                                        ...ly,
                                        voice: Uy
                                      },
                                      fy = performance.now();
                                    if (fy - qb.current >= Nh) {
                                      qb.current = fy, Sy();
                                      const yb = (0, Rh.f)(hy).plan.blips[0];
                                      yb && (Ky.current = Ih((0, Gh.l)(Uy), [{
                                        ...yb,
                                        atMs: 0
                                      }], By))
                                    }
                                    window.clearTimeout(ey.current), ey.current = window.setTimeout((() => {
                                      Vy(mb.current)
                                    }), kf)
                                  }
                                })]
                              }), (0, sy.jsx)(gb, {
                                code: Jy,
                                lang: "ts"
                              })]
                            })
                          }
                          var Ah = Wy(4074);
                          const dh = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            yZ = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            bZ = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${yZ}`, "g"), Ah.m],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Ah.m]
                            ];

                          function Wf(yb) {
                            return `${yb.pageId}#${yb.anchor}`
                          }
                          let Uf, hf, ff;

                          function Zf(yb) {
                            const bb = (0, Gy.g)(yb),
                              Wy = new Set;
                            for (const [, , Uy] of bb.matchAll(Gy.c)) {
                              const yb = Uy.startsWith("#") ? jb(Uy) : null,
                                bb = yb ? Wf({
                                  pageId: yb.page.id,
                                  anchor: yb.anchor
                                }) : null;
                              null !== bb && (Uf || (Uf = new Set(Hy.flatMap((yb => ib(yb.layout) ? Ly(yb).sections.map((bb => Wf({
                                pageId: yb.id,
                                anchor: bb.heading.anchor
                              }))) : [])))), Uf).has(bb) && Wy.add(bb)
                            }
                            for (const [, , Uy] of bb.matchAll(dh)) {
                              const yb = eb(Uy);
                              yb && Wy.add(Wf(yb))
                            }
                            return Wy
                          }

                          function cZ(yb, bb) {
                            const Wy = new Set,
                              Uy = function(yb) {
                                return yb.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(yb);
                            for (const [, hy] of Uy.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) Wy.add(hy);
                            for (const [hy, fy] of bZ)
                              for (const [, yb] of(0, Ah.g)(Uy, hy, fy)) bb.has(yb) && Wy.add(yb);
                            return Wy
                          }

                          function Pf(yb, bb, Wy, Uy) {
                            const hy = yb.get(bb);
                            hy ? !Uy && hy.some((yb => yb.pageId === Wy.pageId)) || hy.push(Wy) : yb.set(bb, [Wy])
                          }
                          const of = /^[A-Za-z_$][\w$]*$/;

                          function Bf(yb) {
                            return of.test(yb.name) ? yb.name : "options"
                          }

                          function Kf(yb, bb) {
                            const Wy = yb.params.map(Bf).join(", ");
                            return bb ? `${yb.name} = (${Wy}) => {\n\t\n}` : `api.${yb.name}(${Wy})`
                          }

                          function ef(yb) {
                            let {
                              method: bb,
                              isCallback: Wy
                            } = yb;
                            return (0, sy.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, sy.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [Wy ? (0, sy.jsxs)(sy.Fragment, {
                                  children: [(0, sy.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: bb.name
                                  }), (0, sy.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, sy.jsxs)(sy.Fragment, {
                                  children: [(0, sy.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, sy.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: bb.name
                                  }), (0, sy.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), bb.params.map(((yb, Wy) => (0, sy.jsxs)(Uy.Fragment, {
                                  children: [Wy > 0 && (0, sy.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, sy.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${bb.name}-${Bf(yb)}`,
                                    children: yb.name
                                  })]
                                }, yb.name))), (0, sy.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: Wy ? ") => " : ")"
                                }), Wy && !bb.returns && (0, sy.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), bb.returns && bb.returns.type && (0, sy.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!Wy && (0, sy.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, sy.jsx)(Ob, {
                                  type: bb.returns.type
                                })]
                              })]
                            })
                          }

                          function qZ(yb) {
                            let {
                              title: bb,
                              references: Wy
                            } = yb;
                            const hy = (0, Uy.useContext)(qW);
                            return (0, sy.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, sy.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: bb
                              }), Wy.map((yb => (0, sy.jsx)(Zy.c, {
                                to: tb(hy, Fy(yb.pageId), yb.anchor),
                                children: yb.label
                              }, `${yb.pageId}#${yb.anchor}`)))]
                            })
                          }

                          function sf(yb) {
                            var bb, Wy;
                            let {
                              pageId: Uy,
                              anchor: hy
                            } = yb;
                            const fy = Wf({
                                pageId: Uy,
                                anchor: hy
                              }),
                              Zy = null !== (bb = function() {
                                if (!ff) {
                                  ff = new Map;
                                  const Uy = new Set(Hy.filter((yb => "callbacks" === yb.layout)).flatMap((yb => Ly(yb).sections.map((yb => yb.heading.text)))));
                                  for (const hy of Hy)
                                    if ("article" === hy.layout || "snippets" === hy.layout)
                                      for (const fy of (0, Gy.s)(Ly(hy)))
                                        for (const {
                                            code: Zy
                                          }
                                          of(0, Gy.i)(fy.blocks))
                                          for (const cb of cZ(Zy, Uy)) {
                                            const Uy = Kb().get(cb);
                                            if (Uy) {
                                              var yb, bb, Wy;
                                              const Zy = {
                                                pageId: hy.id,
                                                anchor: null !== (yb = null === (bb = fy.heading) || void 0 === bb ? void 0 : bb.anchor) && void 0 !== yb ? yb : "",
                                                label: null !== (Wy = hy.navTitle) && void 0 !== Wy ? Wy : hy.title
                                              };
                                              Pf(ff, Wf(Uy), Zy, !1)
                                            }
                                          }
                                }
                                return ff
                              }().get(fy)) && void 0 !== bb ? bb : [],
                              cb = null !== (Wy = function() {
                                if (!hf) {
                                  hf = new Map;
                                  const yb = Fy("changelog");
                                  for (const bb of Ly(yb).sections) {
                                    const Wy = new Set(bb.blocks.flatMap((yb => [...Zf(yb)])));
                                    for (const Uy of Wy) {
                                      const Wy = {
                                        pageId: yb.id,
                                        anchor: bb.heading.anchor,
                                        label: bb.heading.text
                                      };
                                      Pf(hf, Uy, Wy, !0)
                                    }
                                  }
                                }
                                return hf
                              }().get(fy)) && void 0 !== Wy ? Wy : [];
                            return 0 === Zy.length && 0 === cb.length ? null : (0, sy.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Zy.length > 0 && (0, sy.jsx)(qZ, {
                                title: "Used in",
                                references: Zy
                              }), cb.length > 0 && (0, sy.jsx)(qZ, {
                                title: "Changelog",
                                references: cb
                              })]
                            })
                          }

                          function Sf(yb) {
                            let {
                              method: bb,
                              pageId: Wy,
                              anchor: Uy,
                              isCallback: hy
                            } = yb;
                            const fy = hy ? void 0 : cW().get(bb.name),
                              Zy = bb.description.length > 0 || null === fy || void 0 === fy || !fy.description ? bb.description : (0, Gy.x)(fy.description);
                            return (0, sy.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, sy.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, sy.jsx)(oW, {
                                  level: 2,
                                  text: bb.name,
                                  anchor: Uy,
                                  className: "DocsCardTitle"
                                }), (0, sy.jsx)(Cy, {
                                  text: Kf(bb, hy),
                                  label: hy ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, sy.jsx)(ef, {
                                method: bb,
                                isCallback: hy
                              }), fy && null !== fy.deprecation && (0, sy.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, sy.jsx)("strong", {
                                  children: "Deprecated"
                                }), fy.deprecation && (0, sy.jsxs)(sy.Fragment, {
                                  children: [": ", (0, sy.jsx)(Jb, {
                                    text: (cb = fy.deprecation, (0, Ah.u)(cb, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Ah.j)("`\\w"), (yb => {
                                      let [bb] = yb;
                                      return Kb().has(bb) ? `\`${bb}\`` : bb
                                    })))
                                  })]
                                })]
                              }), Zy.length > 0 && (0, sy.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, sy.jsx)(qU, {
                                  blocks: Zy
                                })
                              }), bb.params.length > 0 && (0, sy.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, sy.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, sy.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: bb.params.map((yb => (0, sy.jsxs)("div", {
                                    id: `${bb.name}-${Bf(yb)}`,
                                    className: "DocsParam",
                                    children: [(0, sy.jsxs)("dt", {
                                      children: [(0, sy.jsx)("code", {
                                        className: "DocsParamName",
                                        children: yb.name
                                      }), (0, sy.jsx)(Ob, {
                                        type: yb.type
                                      })]
                                    }), yb.description && (0, sy.jsx)("dd", {
                                      children: (0, sy.jsx)(Jb, {
                                        text: yb.description
                                      })
                                    })]
                                  }, yb.name)))
                                })]
                              }), bb.returns && (bb.returns.type || bb.returns.description.length > 0) && (0, sy.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, sy.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, sy.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [bb.returns.type && (0, sy.jsx)(Ob, {
                                    type: bb.returns.type
                                  }), bb.returns.description.length > 0 && (0, sy.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, sy.jsx)(qU, {
                                      blocks: bb.returns.description
                                    })
                                  })]
                                })]
                              }), (0, sy.jsx)(sf, {
                                pageId: Wy,
                                anchor: Uy
                              })]
                            });
                            var cb
                          }

                          function Ef(yb) {
                            var bb;
                            return null !== yb.defaultValue && "undefined" !== yb.defaultValue ? yb.defaultValue : null !== (bb = yb.example) && void 0 !== bb ? bb : "value"
                          }

                          function lf(yb) {
                            let {
                              setting: bb,
                              pageId: Wy,
                              anchor: Uy,
                              setterSnippet: hy
                            } = yb;
                            const fy = null === bb.defaultValue ? null : lb(bb.defaultValue);
                            return (0, sy.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, sy.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, sy.jsx)(oW, {
                                  level: 2,
                                  text: bb.name,
                                  anchor: Uy,
                                  className: "DocsCardTitle"
                                }), (0, sy.jsx)(Cy, {
                                  text: hy(bb.name, Ef(bb)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, sy.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, sy.jsxs)("div", {
                                  children: [(0, sy.jsx)("dt", {
                                    children: "Type"
                                  }), (0, sy.jsx)("dd", {
                                    children: (0, sy.jsx)(Ob, {
                                      type: bb.type
                                    })
                                  })]
                                }), null !== bb.defaultValue && (0, sy.jsxs)("div", {
                                  children: [(0, sy.jsx)("dt", {
                                    children: "Default"
                                  }), (0, sy.jsx)("dd", {
                                    children: (0, sy.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [fy && (0, sy.jsx)(mW, {
                                        colour: fy
                                      }), bb.defaultValue]
                                    })
                                  })]
                                }), null !== bb.example && (0, sy.jsxs)("div", {
                                  children: [(0, sy.jsx)("dt", {
                                    children: "Example"
                                  }), (0, sy.jsx)("dd", {
                                    children: (0, sy.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: bb.example
                                    })
                                  })]
                                })]
                              }), bb.description.length > 0 && (0, sy.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, sy.jsx)(qU, {
                                  blocks: bb.description
                                })
                              }), (0, sy.jsx)(sf, {
                                pageId: Wy,
                                anchor: Uy
                              })]
                            })
                          }

                          function mZ(yb) {
                            let {
                              section: bb
                            } = yb;
                            return (0, sy.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, sy.jsx)(oW, {
                                level: 2,
                                text: bb.heading.text,
                                anchor: bb.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, sy.jsx)("div", {
                                className: "DocsProse",
                                children: (0, sy.jsx)(qU, {
                                  blocks: bb.blocks
                                })
                              })]
                            })
                          }

                          function Cf(yb) {
                            let {
                              section: bb
                            } = yb;
                            return (0, sy.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, sy.jsx)(oW, {
                                level: bb.heading.level,
                                text: bb.heading.text,
                                anchor: bb.heading.anchor
                              }), (0, sy.jsx)(qU, {
                                blocks: bb.blocks
                              })]
                            })
                          }
                          const Tf = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function Vf(yb) {
                            let {
                              page: bb,
                              section: Wy
                            } = yb;
                            if ("methods" === bb.layout || "callbacks" === bb.layout) return (0, sy.jsx)(Sf, {
                              method: gU(Wy),
                              pageId: bb.id,
                              anchor: Wy.heading.anchor,
                              isCallback: "callbacks" === bb.layout
                            });
                            if ("settings" === bb.layout) {
                              const yb = function(yb) {
                                const bb = {
                                  name: yb.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Uy of yb.blocks) {
                                  var Wy;
                                  if (JW(Uy)) continue;
                                  const yb = "paragraph" === Uy.kind ? Uy.text.match(GW) : null;
                                  if (!yb) {
                                    bb.description.push(Uy);
                                    continue
                                  }
                                  const hy = null !== (Wy = VW(yb[2])) && void 0 !== Wy ? Wy : yb[2];
                                  "Type" === yb[1] ? bb.type = hy : "Default" === yb[1] ? bb.defaultValue = hy : "" !== hy && (bb.example = hy)
                                }
                                return bb.type ? bb : null
                              }(Wy);
                              if (yb) return (0, sy.jsx)(lf, {
                                setting: yb,
                                pageId: bb.id,
                                anchor: Wy.heading.anchor,
                                setterSnippet: bb.setterSnippet
                              })
                            }
                            return "snippets" === bb.layout ? (0, sy.jsx)(mZ, {
                              section: Wy
                            }) : "changelog" === bb.layout ? (0, sy.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, sy.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, sy.jsx)(oW, {
                                  level: 2,
                                  text: Wy.heading.text,
                                  anchor: Wy.heading.anchor
                                })
                              }), (0, sy.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, sy.jsx)(qU, {
                                  blocks: OW(Wy.blocks)
                                })
                              })]
                            }) : bb.gallery ? (0, sy.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, sy.jsx)(oW, {
                                level: Wy.heading.level,
                                text: Wy.heading.text,
                                anchor: Wy.heading.anchor
                              }), (0, sy.jsx)(RU, {
                                kind: bb.gallery,
                                content: Ly(bb),
                                blocks: Wy.blocks
                              })]
                            }) : (0, sy.jsx)(Cf, {
                              section: Wy
                            })
                          }

                          function Jf(yb) {
                            let {
                              page: bb,
                              onTocChange: Wy
                            } = yb;
                            const hy = Ly(bb),
                              [fy, Zy] = (0, Uy.useState)(""),
                              cb = "article" !== bb.layout,
                              Py = EW(bb.gallery) ? bb.gallery : null,
                              oy = null !== Py,
                              By = fy.trim().toLowerCase(),
                              Ky = (0, Uy.useRef)(null),
                              ey = (0, Uy.useCallback)((yb => {
                                var bb;
                                null === (bb = Ky.current) || void 0 === bb || bb.preview(yb)
                              }), []),
                              qb = (0, Uy.useMemo)((() => {
                                if (!bb.hasParticlePlayground) return [];
                                const yb = MW(hy.intro).find((yb => "names" === yb.kind && !yb.names.some((yb => null !== pW(yb.name)))));
                                return "names" === (null === yb || void 0 === yb ? void 0 : yb.kind) ? yb.names.map((yb => yb.name)) : []
                              }), [bb, hy]),
                              Sy = (0, Uy.useMemo)((() => {
                                if (!bb.hasTextPlayground) return [];
                                const yb = hy.sections.flatMap((yb => yb.blocks.flatMap((yb => {
                                  var bb;
                                  return (null !== (bb = iU(yb)) && void 0 !== bb ? bb : []).flatMap((yb => pb(yb.name) ? [yb.name] : []))
                                }))));
                                return [...new Set(yb)]
                              }), [bb, hy]),
                              Ey = (0, Uy.useMemo)((() => By ? hy.sections.filter((yb => function(yb, bb) {
                                return !!yb.heading.text.toLowerCase().includes(bb) || yb.blocks.some((yb => (0, Gy.g)(yb).toLowerCase().includes(bb)))
                              }(yb, By))) : hy.sections), [hy, By]),
                              ly = (0, Uy.useMemo)((() => function(yb, bb) {
                                return "article" !== yb.layout ? bb.map((yb => ({
                                  anchor: yb.heading.anchor,
                                  text: yb.heading.text,
                                  level: 2
                                }))) : bb.flatMap((yb => {
                                  const bb = yb.blocks.flatMap((yb => "heading" === yb.kind && 3 === yb.level ? [{
                                    anchor: yb.anchor,
                                    text: yb.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: yb.heading.anchor,
                                    text: yb.heading.text,
                                    level: 2
                                  }, ...bb]
                                }))
                              }(bb, Ey)), [bb, Ey]);
                            return (0, Uy.useEffect)((() => {
                              Wy(ly)
                            }), [ly, Wy]), (0, sy.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, sy.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, sy.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: hy.title || bb.title
                                }), (0, sy.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: bb.summary
                                }), (0, sy.jsx)(NU, {
                                  page: bb
                                }), cb && (0, sy.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, sy.jsxs)("span", {
                                    children: [(0, sy.jsx)("strong", {
                                      children: hy.sections.length
                                    }), " ", Tf[bb.layout]]
                                  })
                                })]
                              }), "" === bb.slug && (0, sy.jsx)(ih, {}), Py && (0, sy.jsx)(nU, {
                                kind: Py
                              }, Py), bb.hasParticlePlayground && (0, sy.jsx)(cf, {
                                ref: Ky,
                                textures: qb
                              }), !oy && hy.intro.length > 0 && (0, sy.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: bb.gallery ? (0, sy.jsx)(lU.Provider, {
                                  value: bb.hasParticlePlayground ? ey : null,
                                  children: (0, sy.jsx)(RU, {
                                    kind: bb.gallery,
                                    content: hy,
                                    blocks: hy.intro
                                  })
                                }) : (0, sy.jsx)(qU, {
                                  blocks: OW(hy.intro)
                                })
                              }), bb.hasTextPlayground && (0, sy.jsx)(gf, {
                                fontAwesomeIcons: Sy
                              }), bb.hasVoicePlayground && (0, sy.jsx)(xf, {}), bb.childPageIds && (0, sy.jsx)(ih, {
                                cards: bb.childPageIds.map((yb => ({
                                  pageId: yb
                                }))),
                                label: bb.title
                              }), cb && (0, sy.jsx)(CW, {
                                className: "DocsFilterBar",
                                value: fy,
                                placeholder: `Filter ${hy.sections.length} ${Tf[bb.layout]}\u2026`,
                                label: `Filter ${Tf[bb.layout]}`,
                                onChange: Zy,
                                count: By ? {
                                  visible: Ey.length,
                                  total: hy.sections.length
                                } : null
                              }), !oy && (0, sy.jsxs)("div", {
                                className: `DocsSections Layout-${bb.layout}`,
                                children: [Ey.map((yb => (0, sy.jsx)(Vf, {
                                  page: bb,
                                  section: yb
                                }, yb.heading.anchor))), 0 === Ey.length && (0, sy.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Tf[bb.layout], " match \u201c", fy, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const gZ = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Gf(yb) {
                            let {
                              entry: bb,
                              isActive: Wy,
                              onNavigate: Uy,
                              label: hy,
                              children: Zy
                            } = yb;
                            return (0, sy.jsx)("a", {
                              href: `#${bb.anchor}`,
                              "aria-label": hy,
                              className: fy()(`Level${bb.level}`, {
                                Active: Wy
                              }),
                              "aria-current": Wy ? "location" : void 0,
                              onClick: yb => {
                                yb.preventDefault(), Uy(bb.anchor)
                              },
                              children: Zy
                            })
                          }

                          function Of(yb) {
                            let {
                              toc: bb,
                              activeAnchor: Wy,
                              onNavigate: hy
                            } = yb;
                            const Zy = Math.max(0, bb.findIndex((yb => yb.anchor === Wy))),
                              cb = (0, Uy.useRef)(null),
                              Py = (0, Uy.useRef)(!1);
                            (0, Uy.useEffect)((() => {
                              var yb, Wy;
                              const Uy = null === (yb = cb.current) || void 0 === yb ? void 0 : yb.closest(".DocsToc"),
                                hy = null === (Wy = cb.current) || void 0 === Wy ? void 0 : Wy.querySelector(".DocsTimelineNotch.Active");
                              if (!Uy || !hy) return;
                              let fy = 0;
                              if (Zy === bb.length - 1) fy = Uy.scrollHeight;
                              else if (Zy > 0) {
                                const yb = Uy.getBoundingClientRect(),
                                  bb = hy.getBoundingClientRect();
                                fy = Uy.scrollTop + bb.top + bb.height / 2 - (yb.top + Uy.clientHeight / 2)
                              }
                              Uy.scrollTo({
                                top: fy,
                                behavior: Py.current ? "smooth" : "auto"
                              }), Py.current = !0
                            }), [Zy, bb.length]);
                            const oy = [];
                            return bb.forEach(((yb, bb) => {
                              var Wy, Uy, hy;
                              const fy = function(yb) {
                                  const bb = yb.trim().match(gZ);
                                  return bb ? {
                                    day: bb[1],
                                    month: `${bb[2]} ${bb[3]}`
                                  } : null
                                }(yb.text),
                                Zy = null !== (Wy = null === fy || void 0 === fy ? void 0 : fy.month) && void 0 !== Wy ? Wy : null;
                              null !== Zy && (null === (Uy = oy.at(-1)) || void 0 === Uy ? void 0 : Uy.month) === Zy || oy.push({
                                month: Zy,
                                entries: []
                              }), oy.at(-1).entries.push({
                                entry: yb,
                                day: null !== (hy = null === fy || void 0 === fy ? void 0 : fy.day) && void 0 !== hy ? hy : null,
                                index: bb
                              })
                            })), (0, sy.jsx)("ol", {
                              ref: cb,
                              className: "DocsTimeline",
                              children: oy.map((yb => {
                                let {
                                  month: bb,
                                  entries: Wy
                                } = yb;
                                return (0, sy.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [bb && (0, sy.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: bb
                                  }), (0, sy.jsx)("ol", {
                                    children: Wy.map((yb => {
                                      let {
                                        entry: bb,
                                        day: Wy,
                                        index: Uy
                                      } = yb;
                                      return (0, sy.jsx)("li", {
                                        className: fy()("DocsTimelineNotch", {
                                          Passed: Uy < Zy,
                                          Active: Uy === Zy
                                        }),
                                        children: (0, sy.jsx)(Gf, {
                                          entry: bb,
                                          isActive: Uy === Zy,
                                          onNavigate: hy,
                                          label: bb.text,
                                          children: (0, sy.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== Wy && void 0 !== Wy ? Wy : bb.text
                                          })
                                        })
                                      }, bb.anchor)
                                    }))
                                  })]
                                }, Wy[0].entry.anchor)
                              }))
                            })
                          }

                          function Rf(yb) {
                            let {
                              isChangelog: bb,
                              toc: Wy,
                              activeAnchor: Uy,
                              onNavigate: hy
                            } = yb;
                            return 0 === Wy.length ? null : (0, sy.jsxs)(sy.Fragment, {
                              children: [(0, sy.jsx)("div", {
                                className: "DocsTocTitle",
                                children: bb ? "Updates" : "On this page"
                              }), bb ? (0, sy.jsx)(Of, {
                                toc: Wy,
                                activeAnchor: Uy,
                                onNavigate: hy
                              }) : (0, sy.jsx)("ul", {
                                children: Wy.map((yb => (0, sy.jsx)("li", {
                                  children: (0, sy.jsx)(Gf, {
                                    entry: yb,
                                    isActive: yb.anchor === Uy,
                                    onNavigate: hy,
                                    children: yb.text.replace(/`/g, "")
                                  })
                                }, yb.anchor)))
                              })]
                            })
                          }
                          const vZ = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            iZ = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Mf = 20,
                            Yf = 10,
                            Xf = 40,
                            nf = 120;
                          let uf;

                          function rZ(yb) {
                            const bb = yb.gallery;
                            if (!bb) return [];
                            if (EW(bb)) return function(yb) {
                              return mU(yb).entries.map((yb => yb.name))
                            }(bb).map((Wy => ({
                              page: yb,
                              anchor: XW(bb, Wy),
                              title: Wy,
                              kind: iZ[bb],
                              text: "",
                              listedUnder: yb.title
                            })));
                            const Wy = Ly(yb);
                            return (0, Gy.s)(Wy).flatMap((Uy => {
                              const hy = Uy.heading ? `${yb.title} \u203a ${Uy.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : yb.title;
                              return uW(bb, Wy, Uy.blocks).flatMap((Wy => "names" !== Wy.kind ? [] : Wy.names.map((Uy => {
                                const fy = Wy.isSongs ? "Song" : iZ[bb];
                                return {
                                  page: yb,
                                  anchor: Uy.anchor,
                                  title: Uy.name,
                                  kind: fy,
                                  text: "",
                                  listedUnder: hy
                                }
                              }))))
                            }))
                          }

                          function Hf(yb, bb, Wy) {
                            const Uy = yb.title.toLowerCase();
                            let hy = 0;
                            if (Uy === bb) hy = 100;
                            else if (Uy.startsWith(bb)) hy = 80;
                            else if (Uy.includes(bb)) hy = 60;
                            else if (Wy.every((yb => Uy.includes(yb)))) hy = 45;
                            else {
                              if (!yb.text.toLowerCase().includes(bb)) return 0;
                              hy = 20
                            }
                            return hy - Math.min(Uy.length / 10, 9) + ("Page" === yb.kind ? 8 : "Method" === yb.kind ? 3 : 0) - (yb.listedUnder ? Mf : 0)
                          }

                          function aZ(yb, bb) {
                            const Wy = yb.toLowerCase().indexOf(bb),
                              Uy = Math.max(0, Wy - nf / 3);
                            return `${Uy>0?"\u2026":""}${yb.slice(Uy,Uy+nf)}${Uy+nf<yb.length?"\u2026":""}`
                          }

                          function Ff(yb) {
                            let {
                              text: bb,
                              query: Wy
                            } = yb;
                            const Uy = Wy ? bb.toLowerCase().indexOf(Wy) : -1;
                            return -1 === Uy ? (0, sy.jsx)(sy.Fragment, {
                              children: bb
                            }) : (0, sy.jsxs)(sy.Fragment, {
                              children: [bb.slice(0, Uy), (0, sy.jsx)("mark", {
                                children: bb.slice(Uy, Uy + Wy.length)
                              }), bb.slice(Uy + Wy.length)]
                            })
                          }

                          function pf(yb) {
                            let {
                              basePath: bb,
                              onClose: Wy
                            } = yb;
                            const hy = (0, cb.z)(),
                              [Zy, Py] = (0, Uy.useState)(""),
                              [oy, By] = (0, Uy.useState)(0),
                              Ky = (0, Uy.useRef)(null),
                              ey = (0, Uy.useRef)(null),
                              qb = Zy.trim().toLowerCase(),
                              Sy = (0, Uy.useMemo)((() => {
                                const yb = (uf || (uf = Hy.flatMap((yb => {
                                  const bb = Ly(yb);
                                  return [{
                                    page: yb,
                                    anchor: "",
                                    title: yb.title,
                                    kind: "Page",
                                    text: yb.summary
                                  }, ...bb.sections.flatMap((bb => {
                                    const Wy = bb.blocks.filter((yb => "paragraph" === yb.kind)).map(Gy.g).join(" ").replace(/[`*]/g, ""),
                                      Uy = {
                                        page: yb,
                                        anchor: bb.heading.anchor,
                                        title: bb.heading.text.replace(/`/g, ""),
                                        kind: vZ[yb.layout],
                                        text: Wy
                                      },
                                      hy = bb.blocks.flatMap((bb => "article" === yb.layout && "heading" === bb.kind && 3 === bb.level ? [{
                                        page: yb,
                                        anchor: bb.anchor,
                                        title: bb.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Uy.title
                                      }] : []));
                                    return [Uy, ...hy]
                                  })), ...rZ(yb)]
                                }))), uf);
                                if (!qb) return yb.filter((yb => "Page" === yb.kind));
                                const bb = qb.split(/\s+/);
                                let Wy = 0;
                                return yb.map((yb => ({
                                  entry: yb,
                                  score: Hf(yb, qb, bb)
                                }))).filter((yb => yb.score > 0)).sort(((yb, bb) => bb.score - yb.score)).filter((yb => !yb.entry.listedUnder || (Wy++, Wy <= Yf))).slice(0, Xf).map((yb => yb.entry))
                              }), [qb]);
                            (0, Uy.useEffect)((() => {
                              By(0)
                            }), [qb]), (0, Uy.useEffect)((() => {
                              const yb = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === yb || void 0 === yb || yb.focus()
                              }
                            }), []), (0, Uy.useEffect)((() => {
                              var yb, bb;
                              null === (yb = Ky.current) || void 0 === yb || null === (bb = yb.querySelector(".Active")) || void 0 === bb || bb.scrollIntoView({
                                block: "nearest"
                              })
                            }), [oy]);
                            const ly = yb => {
                              hy(tb(bb, yb.page, yb.anchor)), Wy()
                            };
                            return (0, sy.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: yb => {
                                yb.target === yb.currentTarget && Wy()
                              },
                              children: (0, sy.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: yb => {
                                  yb.target !== ey.current && yb.preventDefault()
                                },
                                onKeyDown: yb => {
                                  if ("Escape" === yb.key) Wy();
                                  else if ("Tab" === yb.key) {
                                    var bb;
                                    yb.preventDefault(), null === (bb = ey.current) || void 0 === bb || bb.focus()
                                  }
                                },
                                children: [(0, sy.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, sy.jsx)(Ey, {
                                    name: "magnifying-glass"
                                  }), (0, sy.jsx)("input", {
                                    ref: ey,
                                    autoFocus: !0,
                                    value: Zy,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Sy.length > 0 ? `DocsSearchResult-${oy}` : void 0,
                                    onChange: yb => {
                                      Py(yb.target.value)
                                    },
                                    onKeyDown: yb => {
                                      if ("ArrowDown" === yb.key || "ArrowUp" === yb.key) {
                                        yb.preventDefault();
                                        const bb = "ArrowDown" === yb.key ? 1 : -1;
                                        By((oy + bb + Sy.length) % Math.max(Sy.length, 1))
                                      } else "Enter" === yb.key && Sy[oy] && ly(Sy[oy])
                                    }
                                  }), (0, sy.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, sy.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Ky,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!qb && (0, sy.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Sy.map(((yb, bb) => {
                                    var Wy;
                                    return (0, sy.jsxs)("li", {
                                      id: `DocsSearchResult-${bb}`,
                                      role: "option",
                                      "aria-selected": bb === oy,
                                      className: fy()("DocsSearchResult", {
                                        Active: bb === oy
                                      }),
                                      onMouseMove: () => {
                                        By(bb)
                                      },
                                      onClick: () => {
                                        ly(yb)
                                      },
                                      children: [(0, sy.jsx)(Ey, {
                                        name: yb.page.icon
                                      }), (0, sy.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, sy.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, sy.jsx)(Ff, {
                                            text: yb.title,
                                            query: qb
                                          })
                                        }), yb.text && (0, sy.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, sy.jsx)(Ff, {
                                            text: aZ(yb.text, qb),
                                            query: qb
                                          })
                                        })]
                                      }), (0, sy.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === yb.kind ? "Page" : null !== (Wy = yb.listedUnder) && void 0 !== Wy ? Wy : `${yb.kind} \xb7 ${yb.page.title}`
                                      })]
                                    }, `${yb.page.id}#${yb.anchor}`)
                                  })), qb && 0 === Sy.length && (0, sy.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Zy, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function Lf(yb, bb) {
                            if (bb < 10) return `${yb.toFixed(1)}s`;
                            const Wy = Math.floor(yb);
                            return `${Math.floor(Wy/60)}:${String(Wy%60).padStart(2,"0")}`
                          }

                          function Qf() {
                            const yb = BU((yb => yb.track)),
                              bb = BU((yb => yb.volume)),
                              [Wy, hy] = (0, Uy.useState)(0),
                              Zy = (0, Uy.useRef)(bh);
                            if ((0, Uy.useEffect)((() => {
                                if (!yb) return;
                                if (hy(sU()), "playing" !== yb.status) return;
                                let bb = 0;
                                const Wy = () => {
                                  hy(sU()), bb = requestAnimationFrame(Wy)
                                };
                                return bb = requestAnimationFrame(Wy), () => {
                                  cancelAnimationFrame(bb)
                                }
                              }), [yb]), !yb) return null;
                            const cb = "paused" !== yb.status,
                              Py = Math.min(Wy, yb.duration);
                            return (0, sy.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, sy.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, sy.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": cb ? `Pause ${yb.name}` : `Play ${yb.name}`,
                                  onClick: qh,
                                  children: (0, sy.jsx)(Ey, {
                                    name: cb ? "pause" : "play"
                                  })
                                }), (0, sy.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, sy.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, sy.jsx)("code", {
                                      children: yb.name
                                    }), (0, sy.jsx)("span", {
                                      children: yb.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, sy.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, sy.jsx)("span", {
                                      children: Lf(Py, yb.duration)
                                    }), (0, sy.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: yb.duration || 1,
                                      step: .01,
                                      value: Py,
                                      disabled: 0 === yb.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${Lf(Py,yb.duration)} of ${Lf(yb.duration,yb.duration)}`,
                                      onChange: yb => {
                                        const bb = Number(yb.target.value);
                                        ! function(yb) {
                                          var bb;
                                          ZU = yb, null === (bb = hU) || void 0 === bb || bb.seek(yb)
                                        }(bb), hy(bb)
                                      }
                                    }), (0, sy.jsx)("span", {
                                      children: yb.duration > 0 ? Lf(yb.duration, yb.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, sy.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, sy.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === bb ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === bb ? SU(Zy.current) : (Zy.current = bb, SU(0))
                                    },
                                    children: (0, sy.jsx)(Ey, {
                                      name: "volume",
                                      className: fy()({
                                        Muted: 0 === bb
                                      })
                                    })
                                  }), (0, sy.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: bb,
                                    "aria-label": "Volume",
                                    onChange: yb => {
                                      SU(Number(yb.target.value))
                                    }
                                  })]
                                }), (0, sy.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var bb;
                                    null === (bb = document.querySelector(`[data-docs-track="${CSS.escape(WU(yb.name,yb.isSong))}"]`)) || void 0 === bb || bb.focus(), EU()
                                  },
                                  children: (0, sy.jsx)(Ey, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var jZ = Wy(33);
                          const Df = "docsTheme",
                            tZ = window.matchMedia("(prefers-color-scheme: light)");

                          function wf(yb) {
                            let {
                              theme: bb,
                              onChange: Wy
                            } = yb;
                            const Uy = "dark" === bb ? "light" : "dark";
                            return (0, sy.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Uy} theme`,
                              title: `Switch to ${Uy} theme`,
                              onClick: () => {
                                Wy(Uy)
                              },
                              children: (0, sy.jsx)(Ey, {
                                name: "dark" === bb ? "moon" : "sun"
                              })
                            })
                          }
                          const kZ = "https://github.com/Bloxdy/code-api",
                            Nf = "https://discord.gg/playbloxd",
                            zZ = 180,
                            If = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function xZ(yb) {
                            let {
                              basePath: bb,
                              activePageId: Wy,
                              onNavigate: Uy
                            } = yb;
                            return (0, sy.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: ab.map((yb => (0, sy.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, sy.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: yb.title
                                }), yb.pageIds.map((yb => {
                                  var hy;
                                  const cb = Fy(yb);
                                  return (0, sy.jsxs)(Zy.c, {
                                    to: tb(bb, cb),
                                    className: fy()("DocsNavLink", {
                                      Active: cb.id === Wy
                                    }),
                                    "aria-current": cb.id === Wy ? "page" : void 0,
                                    onClick: Uy,
                                    children: [(0, sy.jsx)(Ey, {
                                      name: cb.icon
                                    }), (0, sy.jsx)("span", {
                                      children: null !== (hy = cb.navTitle) && void 0 !== hy ? hy : cb.title
                                    })]
                                  }, cb.id)
                                }))]
                              }, yb.title)))
                            })
                          }

                          function Af(yb) {
                            let {
                              basePath: bb,
                              pageId: Wy
                            } = yb;
                            const Uy = ab.flatMap((yb => yb.pageIds)),
                              hy = Uy.indexOf(Wy),
                              fy = hy > 0 ? Fy(Uy[hy - 1]) : null,
                              cb = hy < Uy.length - 1 ? Fy(Uy[hy + 1]) : null;
                            return (0, sy.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [fy ? (0, sy.jsxs)(Zy.c, {
                                className: "DocsPagerLink Previous",
                                to: tb(bb, fy),
                                children: [(0, sy.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, sy.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: fy.title
                                })]
                              }) : (0, sy.jsx)("span", {}), cb && (0, sy.jsxs)(Zy.c, {
                                className: "DocsPagerLink Next",
                                to: tb(bb, cb),
                                children: [(0, sy.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, sy.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: cb.title
                                })]
                              })]
                            })
                          }

                          function df(yb) {
                            let {
                              basePath: bb,
                              embedded: Wy = !1
                            } = yb;
                            const {
                              pageSlug: hy = ""
                            } = (0, cb.F)(), oy = (0, cb.y)(), By = (0, cb.z)(), Ky = (ey = hy, Hy.find((yb => yb.slug === ey)));
                            var ey;
                            const [qb, Sy] = function() {
                              const [yb, bb] = (0, Uy.useState)((() => {
                                const yb = jZ.e.getItem(Df);
                                return "dark" === yb || "light" === yb ? yb : null
                              })), [Wy, hy] = (0, Uy.useState)(tZ.matches ? "light" : "dark");
                              return (0, Uy.useEffect)((() => {
                                const yb = () => {
                                  hy(tZ.matches ? "light" : "dark")
                                };
                                return tZ.addEventListener("change", yb), () => {
                                  tZ.removeEventListener("change", yb)
                                }
                              }), []), [null !== yb && void 0 !== yb ? yb : Wy, yb => {
                                jZ.e.setItem(Df, yb), bb(yb)
                              }]
                            }(), [ly, mb] = (0, Uy.useState)(null), [Cy, Ty] = (0, Uy.useState)(!1), [Vy, Jy] = (0, Uy.useState)(!1), [gb, Oy] = (0, Uy.useState)([]), Ry = function(yb, bb) {
                              const [Wy, hy] = (0, Uy.useState)("");
                              return (0, Uy.useEffect)((() => {
                                if (!bb) return;
                                let Wy = 0;
                                const Uy = () => {
                                    var Uy, fy;
                                    Wy = 0;
                                    const Zy = bb.getBoundingClientRect().top + zZ;
                                    let cb = null !== (Uy = null === (fy = yb[0]) || void 0 === fy ? void 0 : fy.anchor) && void 0 !== Uy ? Uy : "";
                                    for (const bb of yb) {
                                      const yb = document.getElementById(bb.anchor);
                                      yb && yb.getBoundingClientRect().top <= Zy && (cb = bb.anchor)
                                    }
                                    bb.scrollTop + bb.clientHeight >= bb.scrollHeight - 2 && bb.scrollTop > 0 && yb.length > 0 && (cb = yb[yb.length - 1].anchor), hy(cb)
                                  },
                                  fy = () => {
                                    Wy || (Wy = requestAnimationFrame(Uy))
                                  };
                                return Uy(), bb.addEventListener("scroll", fy, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(Wy), bb.removeEventListener("scroll", fy)
                                }
                              }), [yb, bb]), Wy
                            }(gb, ly), vb = "" === hy && oy.hash ? function(yb) {
                              const bb = (0, Gy.l)(yb);
                              if (Qy(Fy("welcome"), bb)) return null;
                              const Wy = Object.hasOwn(Dy, bb) ? Dy[bb] : null;
                              if (Wy) return {
                                page: Fy(Wy.pageId),
                                anchor: Wy.anchor
                              };
                              const Uy = Fy("readme");
                              return Qy(Uy, bb) ? {
                                page: Uy,
                                anchor: bb
                              } : jb(`#${bb}`)
                            }(oy.hash) : null;
                            (0, Uy.useEffect)((() => (Py.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              Py.d.set({
                                musicOnFromPage: !0
                              }), EU()
                            })), []), (0, Uy.useEffect)((() => {
                              const yb = yb => {
                                const bb = yb.target;
                                if (bb.closest(".DocsTextDialog")) return;
                                const Wy = bb.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(bb.tagName);
                                "k" === yb.key && (yb.metaKey || yb.ctrlKey) || "/" === yb.key && !Wy ? (yb.preventDefault(), Jy(!0)) : "Escape" === yb.key && Ty(!1)
                              };
                              return window.addEventListener("keydown", yb), () => {
                                window.removeEventListener("keydown", yb)
                              }
                            }), []);
                            const ib = (0, Uy.useRef)(null);
                            (0, Uy.useLayoutEffect)((() => {
                              var yb, bb;
                              if (!ly) return;
                              const Wy = ib.current === oy.pathname;
                              ib.current = oy.pathname;
                              const Uy = (0, Gy.l)(oy.hash),
                                hy = Uy ? document.getElementById(Uy) : null;
                              if (null === (yb = ly.querySelector(".DocsTargeted")) || void 0 === yb || yb.classList.remove("DocsTargeted"), null === hy || void 0 === hy || null === (bb = hy.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === bb || bb.classList.add("DocsTargeted"), hy) {
                                var fy;
                                const yb = hy.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (fy = hy.closest(".DocsChangelogEntry")) && void 0 !== fy ? fy : hy).scrollIntoView({
                                  block: yb ? "center" : "start",
                                  behavior: Wy ? "smooth" : "auto"
                                })
                              } else Wy || ly.scrollTo({
                                top: 0
                              })
                            }), [ly, oy.pathname, oy.hash, oy.key]);
                            const My = (0, Uy.useCallback)((() => {
                                Ty(!1)
                              }), []),
                              Yy = (0, Uy.useCallback)((yb => {
                                By({
                                  hash: yb
                                })
                              }), [By]);
                            if (vb) return (0, sy.jsx)(cb.e, {
                              replace: !0,
                              to: tb(bb, vb.page, vb.anchor)
                            });
                            if (!Ky) return (0, sy.jsx)(cb.e, {
                              replace: !0,
                              to: bb
                            });
                            const Xy = Wy ? "div" : "main";
                            return (0, sy.jsx)(qW.Provider, {
                              value: bb,
                              children: (0, sy.jsx)(sb.Provider, {
                                value: ly,
                                children: (0, sy.jsxs)("div", {
                                  ref: mb,
                                  className: fy()("DocsSite", {
                                    Embedded: Wy,
                                    NavOpen: Cy
                                  }),
                                  "data-theme": qb,
                                  children: [(0, sy.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, sy.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Cy ? "Close menu" : "Open menu",
                                      "aria-expanded": Cy,
                                      onClick: () => {
                                        Ty(!Cy)
                                      },
                                      children: (0, sy.jsx)(Ey, {
                                        name: Cy ? "cross" : "menu"
                                      })
                                    }), (0, sy.jsxs)(Zy.c, {
                                      to: bb,
                                      className: "DocsBrand",
                                      children: [(0, sy.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, sy.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, sy.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, sy.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        Jy(!0)
                                      },
                                      children: [(0, sy.jsx)(Ey, {
                                        name: "magnifying-glass"
                                      }), (0, sy.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, sy.jsxs)("kbd", {
                                        children: [If ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, sy.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, sy.jsxs)("a", {
                                        href: Nf,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, sy.jsx)(Ey, {
                                          name: "discord"
                                        }), (0, sy.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, sy.jsxs)("a", {
                                        href: kZ,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, sy.jsx)(Ey, {
                                          name: "external-link"
                                        }), (0, sy.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !Wy && (0, sy.jsxs)(Zy.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, sy.jsx)(Ey, {
                                          name: "play"
                                        }), (0, sy.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, sy.jsx)(wf, {
                                        theme: qb,
                                        onChange: Sy
                                      })]
                                    })]
                                  }), (0, sy.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, sy.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, sy.jsx)(xZ, {
                                        basePath: bb,
                                        activePageId: Ky.id,
                                        onNavigate: My
                                      })
                                    }), (0, sy.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: My
                                    }), (0, sy.jsxs)(Xy, {
                                      className: "DocsMain",
                                      children: [(0, sy.jsx)(Jf, {
                                        page: Ky,
                                        onTocChange: Oy
                                      }, Ky.id), (0, sy.jsx)(Af, {
                                        basePath: bb,
                                        pageId: Ky.id
                                      })]
                                    }), (0, sy.jsx)("aside", {
                                      className: fy()("DocsToc", {
                                        Timeline: "changelog" === Ky.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, sy.jsx)(Rf, {
                                        isChangelog: "changelog" === Ky.layout,
                                        toc: gb,
                                        activeAnchor: Ry,
                                        onNavigate: Yy
                                      })
                                    })]
                                  }), (0, sy.jsx)(Qf, {}), Vy && (0, sy.jsx)(pf, {
                                    basePath: bb,
                                    onClose: () => {
                                      Jy(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 3938: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            c: () => Uy,
                            e: () => Zy,
                            g: () => Ey,
                            i: () => Sy,
                            k: () => cb,
                            l: () => hy,
                            p: () => fy,
                            s: () => sy,
                            u: () => qb,
                            x: () => ey
                          });
                          const Uy = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function hy(yb) {
                            try {
                              return decodeURIComponent(yb.slice(1))
                            } catch {
                              return yb.slice(1)
                            }
                          }

                          function fy(yb) {
                            return yb.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Zy = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Uy.source}`, "g");

                          function cb(yb, bb) {
                            return 2 === yb.length ? bb.replace(/^ (.*) $/, "$1") : bb
                          }

                          function Py(yb) {
                            return "" === yb.trim()
                          }

                          function oy(yb) {
                            const bb = [];
                            for (const Wy of yb.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) bb.length > 0 && bb[bb.length - 1].endsWith("\\") ? bb[bb.length - 1] += `|${Wy}` : bb.push(Wy);
                            return bb.map((yb => yb.trim().replaceAll("\\|", "|")))
                          }
                          const By = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Ky(yb) {
                            const bb = [],
                              Wy = [{
                                indent: -1,
                                items: bb
                              }];
                            let Uy = null;
                            for (const hy of yb) {
                              const yb = hy.match(By);
                              if (!yb) {
                                Uy && (Uy.text += ` ${hy.trim()}`);
                                continue
                              }
                              const bb = yb[1].replace(/\t/g, "  ").length;
                              for (; bb <= Wy[Wy.length - 1].indent;) Wy.pop();
                              Uy = {
                                text: yb[3].trim(),
                                children: []
                              }, Wy[Wy.length - 1].items.push(Uy), Wy.push({
                                indent: bb,
                                items: Uy.children
                              })
                            }
                            return bb
                          }

                          function ey(yb) {
                            const bb = yb.replace(/\r\n/g, "\n").split("\n"),
                              Wy = [];
                            let Uy = 0;
                            for (; Uy < bb.length;) {
                              const yb = bb[Uy];
                              if (Py(yb)) {
                                Uy++;
                                continue
                              }
                              const hy = yb.match(/^\s*```\s*(\w*)\s*$/);
                              if (hy) {
                                const yb = [];
                                for (Uy++; Uy < bb.length && !/^\s*```\s*$/.test(bb[Uy]);) yb.push(bb[Uy]), Uy++;
                                Uy++, Wy.push({
                                  kind: "code",
                                  lang: hy[1] || "text",
                                  code: yb.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Zy = yb.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Zy) {
                                const yb = Zy[2].trim();
                                Wy.push({
                                  kind: "heading",
                                  level: Zy[1].length,
                                  text: yb,
                                  anchor: fy(yb)
                                }), Uy++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(yb)) {
                                Wy.push({
                                  kind: "rule"
                                }), Uy++;
                                continue
                              }
                              if (yb.trim().startsWith("|") && Uy + 1 < bb.length && /^\s*\|[\s:|-]+\|\s*$/.test(bb[Uy + 1])) {
                                const hy = oy(yb),
                                  fy = [];
                                for (Uy += 2; Uy < bb.length && bb[Uy].trim().startsWith("|");) fy.push(oy(bb[Uy])), Uy++;
                                Wy.push({
                                  kind: "table",
                                  header: hy,
                                  rows: fy
                                });
                                continue
                              }
                              if (yb.startsWith(">")) {
                                const yb = [];
                                for (; Uy < bb.length && bb[Uy].startsWith(">");) yb.push(bb[Uy].replace(/^>\s?/, "")), Uy++;
                                Wy.push({
                                  kind: "quote",
                                  blocks: ey(yb.join("\n"))
                                });
                                continue
                              }
                              if (By.test(yb)) {
                                const hy = [],
                                  fy = /^\s*\d+\./.test(yb);
                                for (; Uy < bb.length && !Py(bb[Uy]) && (By.test(bb[Uy]) || /^\s+\S/.test(bb[Uy]));) hy.push(bb[Uy]), Uy++;
                                Wy.push({
                                  kind: "list",
                                  ordered: fy,
                                  items: Ky(hy)
                                });
                                continue
                              }
                              const cb = [];
                              for (; Uy < bb.length && !Py(bb[Uy]) && !/^\s*```/.test(bb[Uy]) && !/^#{1,6}\s/.test(bb[Uy]) && !bb[Uy].startsWith(">") && !By.test(bb[Uy]) && (!bb[Uy].trim().startsWith("|") || 0 !== cb.length);) cb.push(bb[Uy].trim()), Uy++;
                              0 === cb.length && (cb.push(bb[Uy].trim()), Uy++), Wy.push({
                                kind: "paragraph",
                                text: cb.join(" ")
                              })
                            }
                            return Wy
                          }

                          function qb(yb) {
                            let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const Wy = ey(yb);
                            let Uy = "";
                            const hy = [],
                              fy = [],
                              Zy = new Map;
                            for (const oy of Wy) {
                              if ("heading" === oy.kind) {
                                var cb;
                                const yb = (null !== (cb = Zy.get(oy.anchor)) && void 0 !== cb ? cb : 0) + 1;
                                Zy.set(oy.anchor, yb), yb > 1 && (oy.anchor = `${oy.anchor}-${yb}`)
                              }
                              if ("heading" === oy.kind && 1 === oy.level && !Uy) {
                                Uy = oy.text;
                                continue
                              }
                              if ("heading" === oy.kind && oy.level <= bb) {
                                fy.push({
                                  heading: oy,
                                  blocks: []
                                });
                                continue
                              }
                              const yb = fy.at(-1);
                              yb ? yb.blocks.push(oy) : hy.push(oy)
                            }
                            const Py = yb => {
                              for (;
                                "rule" === (null === (bb = yb.at(-1)) || void 0 === bb ? void 0 : bb.kind);) {
                                var bb;
                                yb.pop()
                              }
                            };
                            Py(hy);
                            for (const oy of fy) Py(oy.blocks);
                            return {
                              title: Uy,
                              intro: hy,
                              sections: fy
                            }
                          }

                          function sy(yb) {
                            return [{
                              heading: null,
                              blocks: yb.intro
                            }, ...yb.sections.map((yb => ({
                              heading: yb.heading,
                              blocks: yb.blocks
                            })))]
                          }

                          function Sy(yb) {
                            return yb.flatMap((yb => "code" === yb.kind ? [yb] : "quote" === yb.kind ? Sy(yb.blocks) : []))
                          }

                          function Ey(yb) {
                            switch (yb.kind) {
                              case "heading":
                              case "paragraph":
                                return yb.text;
                              case "code":
                                return yb.code;
                              case "table":
                                return [yb.header, ...yb.rows].map((yb => yb.join(" "))).join(" ");
                              case "list": {
                                const bb = yb => yb.map((yb => `${yb.text} ${bb(yb.children)}`)).join(" ");
                                return bb(yb.items)
                              }
                              case "quote":
                                return yb.blocks.map(Ey).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4046: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            c: () => cb
                          });
                          var Uy = Wy(55),
                            hy = Wy(248),
                            fy = Wy(1556),
                            Zy = Wy(952);

                          function cb(yb) {
                            let {
                              text: bb
                            } = yb;
                            const Wy = [];
                            let cb = "";
                            return (0, hy.Vb)(bb).forEach(((yb, bb) => {
                              if ("string" === typeof yb || !(0, fy.h)(yb.icon)) return void(cb += "string" === typeof yb ? yb : yb.icon);
                              const hy = Math.max(0, cb.trimEnd().search(/\S{1,12}$/));
                              Wy.push((0, Zy.jsxs)(Uy.Fragment, {
                                children: [cb.slice(0, hy), (0, Zy.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [cb.slice(hy), (0, Zy.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": yb.icon,
                                    children: (0, Zy.jsx)(fy.d, {
                                      itemName: yb.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, bb)), cb = ""
                            })), Wy.push(cb), (0, Zy.jsx)(Zy.Fragment, {
                              children: Wy
                            })
                          }
                        }, 3970: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            e: () => mb,
                            d: () => ly
                          });
                          var Uy = Wy(55),
                            hy = Wy(1268),
                            fy = Wy(1546),
                            Zy = Wy(3974),
                            cb = Wy(952);
                          const Py = (0, Uy.memo)((function(yb) {
                            let {
                              initialParameters: bb
                            } = yb;
                            const Wy = (0, Uy.useRef)(null),
                              hy = (0, Uy.useRef)(null),
                              Py = (0, Uy.useRef)(0),
                              oy = (0, Uy.useRef)(null),
                              By = bb.description,
                              Ky = bb.U3,
                              {
                                scale: ey,
                                rotation: qb
                              } = null !== bb && void 0 !== bb ? bb : {},
                              sy = (0, Zy.e)();
                            return (0, Uy.useEffect)((() => {
                              const yb = sy.onFrame((() => {
                                const yb = sy.getState();
                                if (!yb.isActive || !Wy.current || !hy.current) return;
                                const bb = yb.state;
                                if (Wy.current.value = bb.progress, bb.clickCount > Py.current) {
                                  Py.current = bb.clickCount;
                                  const yb = hy.current;
                                  yb.classList.add("pulse"), oy.current = setTimeout((() => {
                                    yb.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(oy.current), yb()
                              }
                            }), [sy]), (0, cb.jsx)(cb.Fragment, {
                              children: (0, cb.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== ey && {
                                    "--scale": ey
                                  },
                                  ...null !== qb && {
                                    "--rotation": `${qb}deg`
                                  }
                                },
                                children: [(0, cb.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: Wy
                                }), (0, cb.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: hy,
                                  children: (0, cb.jsx)(fy.d, {
                                    text: [{
                                      icon: Ky
                                    }]
                                  })
                                }), (0, cb.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, cb.jsx)(fy.d, {
                                    text: By
                                  })
                                })]
                              })
                            })
                          }));
                          var oy = Wy(898),
                            By = Wy.n(oy);
                          const Ky = 2 * Math.PI * 90,
                            ey = (0, Uy.memo)((function(yb) {
                              let {
                                initialParameters: bb
                              } = yb;
                              const Wy = (0, Uy.useRef)(null),
                                hy = (0, Uy.useRef)(null),
                                Py = (0, Uy.useRef)(null),
                                oy = bb.label,
                                ey = bb.icon,
                                qb = bb.K3,
                                {
                                  scale: sy,
                                  rotation: Sy,
                                  i5: Ey
                                } = null !== bb && void 0 !== bb ? bb : {},
                                ly = (0, Zy.e)();
                              return (0, Uy.useEffect)((() => {
                                const yb = ly.onFrame((() => {
                                  var yb, bb;
                                  const Uy = ly.getState();
                                  if (!Uy.isActive || !hy.current) return;
                                  const fy = Uy.state,
                                    Zy = null !== (yb = fy.timeRemaining) && void 0 !== yb ? yb : 0,
                                    cb = null !== (bb = fy.B3) && void 0 !== bb ? bb : 1,
                                    oy = Ky * (1 - Zy / cb);
                                  hy.current.style.strokeDashoffset = `${oy}`, Wy.current && (Wy.current.style.opacity = Zy > 0 ? "1" : "0"), Py.current && qb && (Py.current.textContent = `${(Zy/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  yb()
                                }
                              }), [ly, qb]), (0, cb.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: Wy,
                                style: {
                                  ...null !== sy && {
                                    "--scale": sy
                                  },
                                  ...null !== Sy && {
                                    "--rotation": `${Sy}deg`
                                  }
                                },
                                children: [(0, cb.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, cb.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, cb.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, cb.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Ky,
                                      ref: hy
                                    })]
                                  }), (0, cb.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, cb.jsx)(fy.d, {
                                      text: [{
                                        icon: ey
                                      }],
                                      className: By()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: Ey
                                      })
                                    })
                                  })]
                                }), (0, cb.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, cb.jsx)(fy.d, {
                                    text: oy,
                                    className: "QTETimedClickLabelText"
                                  }), qb && (0, cb.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: Py
                                  })]
                                })]
                              })
                            })),
                            qb = (0, Uy.memo)((function(yb) {
                              let {
                                initialParameters: bb
                              } = yb;
                              const Wy = (0, Uy.useRef)(null),
                                hy = (0, Uy.useRef)(null),
                                Py = (0, Uy.useRef)(null),
                                oy = (0, Uy.useRef)(!1),
                                By = bb.description,
                                Ky = null === bb || void 0 === bb ? void 0 : bb.icon,
                                ey = (0, Zy.e)();
                              return (0, Uy.useEffect)((() => {
                                const yb = ey.onFrame((() => {
                                  const yb = ey.getState();
                                  if (!yb.isActive) return;
                                  const bb = yb.state;
                                  if (Wy.current) {
                                    const yb = 100 * (bb.catchZonePosition - bb.t5 / 2);
                                    Wy.current.style.left = `${yb}%`, Wy.current.style.width = 100 * bb.t5 + "%", bb.isCatching !== oy.current && (oy.current = bb.isCatching, bb.isCatching ? Wy.current.classList.add("catching") : Wy.current.classList.remove("catching"))
                                  }
                                  hy.current && (hy.current.style.left = 100 * bb.moverPosition + "%"), Py.current && (Py.current.value = bb.progress)
                                }));
                                return () => {
                                  yb()
                                }
                              }), [ey]), (0, cb.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, cb.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, cb.jsx)(fy.d, {
                                    text: By
                                  })
                                }), (0, cb.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: Py
                                }), (0, cb.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, cb.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: Wy
                                  }), (0, cb.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: hy,
                                    children: (0, cb.jsx)("span", {
                                      children: Ky && (0, cb.jsx)(fy.d, {
                                        text: [{
                                          icon: Ky,
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
                          var sy = Wy(547);
                          const Sy = (0, Uy.memo)((function(yb) {
                              let {
                                initialParameters: bb
                              } = yb;
                              const Wy = (0, Uy.useRef)(null),
                                hy = bb.label,
                                Py = bb.i6,
                                {
                                  icon: oy,
                                  scale: By,
                                  rotation: Ky
                                } = null !== bb && void 0 !== bb ? bb : {},
                                ey = 100 * (.5 - Py / 2),
                                qb = 100 * Py,
                                Sy = (0, Zy.e)();
                              return (0, Uy.useEffect)((() => {
                                const yb = Sy.onFrame((() => {
                                  const yb = Sy.getState();
                                  if (!yb.isActive || !Wy.current) return;
                                  const bb = yb.state;
                                  Wy.current.style.left = 100 * bb.markerPosition + "%"
                                }));
                                return () => {
                                  yb()
                                }
                              }), [Sy]), (0, cb.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, sy.D)(By) && {
                                    "--scale": By
                                  },
                                  ...!(0, sy.D)(Ky) && {
                                    "--rotation": `${Ky}deg`
                                  }
                                },
                                children: [oy && (0, cb.jsx)(fy.d, {
                                  text: [{
                                    icon: oy
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, cb.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, cb.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${ey}%`,
                                      width: `${qb}%`
                                    }
                                  }), (0, cb.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: Wy
                                  })]
                                }), (0, cb.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, cb.jsx)(fy.d, {
                                    text: hy
                                  })
                                })]
                              })
                            })),
                            Ey = (0, Uy.memo)((function(yb) {
                              let {
                                initialParameters: bb
                              } = yb;
                              const Wy = (0, Uy.useRef)(null),
                                [hy, Py] = (0, Uy.useState)((() => new Array(bb.I5).fill("pending"))),
                                [oy, By] = (0, Uy.useState)((() => {
                                  const yb = bb.R6;
                                  return (0, sy.D)(yb) || yb <= 0 ? [] : new Array(yb).fill("pending")
                                })),
                                Ky = bb.label,
                                {
                                  icon: ey
                                } = bb,
                                qb = (0, Uy.useRef)(0),
                                Sy = (0, Uy.useRef)(0),
                                Ey = (0, Uy.useRef)([]),
                                ly = (0, Zy.e)();
                              return (0, Uy.useEffect)((() => {
                                const yb = ly.onFrame((() => {
                                  const yb = ly.getState();
                                  if (!yb.isActive || !Wy.current) return;
                                  const bb = yb.state,
                                    Uy = 30 + 60 * bb.outerCircleProgress;
                                  if (Wy.current.setAttribute("r", String(Uy)), !0 === bb.lastClickResult && bb.successes > qb.current) {
                                    Wy.current.classList.remove("QTERhythmClickOuterCircle--miss"), Wy.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const yb = setTimeout((() => {
                                      var yb;
                                      null === (yb = Wy.current) || void 0 === yb || yb.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    Ey.current.push(yb)
                                  } else if (!1 === bb.lastClickResult && bb.misses > Sy.current) {
                                    Wy.current.classList.remove("QTERhythmClickOuterCircle--hit"), Wy.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const yb = setTimeout((() => {
                                      var yb;
                                      null === (yb = Wy.current) || void 0 === yb || yb.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    Ey.current.push(yb)
                                  }
                                  bb.successes === qb.current && bb.misses === Sy.current || (qb.current = bb.successes, Sy.current = bb.misses, Py((yb => {
                                    const Wy = [...yb];
                                    for (let Uy = 0; Uy < bb.I5; Uy++) Wy[Uy] = Uy < bb.successes ? "success" : "pending";
                                    return Wy
                                  })), By((yb => {
                                    if (0 === yb.length) return yb;
                                    const Wy = [...yb];
                                    for (let Uy = 0; Uy < Wy.length; Uy++) Wy[Uy] = Uy < bb.misses ? "miss" : "pending";
                                    return Wy
                                  })))
                                }));
                                return () => {
                                  yb();
                                  for (const yb of Ey.current) clearTimeout(yb);
                                  Ey.current = []
                                }
                              }), [ly]), (0, cb.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, cb.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: hy.map(((yb, bb) => (0, cb.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === yb ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, bb)))
                                }), (0, cb.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, cb.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, cb.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, cb.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: Wy
                                    })]
                                  }), ey && (0, cb.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, cb.jsx)(fy.d, {
                                      text: [{
                                        icon: ey
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), oy.length > 0 && (0, cb.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: oy.map(((yb, bb) => (0, cb.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === yb ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, bb)))
                                }), (0, cb.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, cb.jsx)(fy.d, {
                                    text: Ky
                                  })
                                })]
                              })
                            }));

                          function ly(yb) {
                            let {
                              qte: bb
                            } = yb;
                            switch (bb.type) {
                              case "progressBar":
                                return (0, cb.jsx)(Py, {
                                  initialParameters: bb.parameters
                                });
                              case "timedClick":
                                return (0, cb.jsx)(ey, {
                                  initialParameters: bb.parameters
                                });
                              case "gravityBar":
                                return (0, cb.jsx)(qb, {
                                  initialParameters: bb.parameters
                                });
                              case "precisionBar":
                                return (0, cb.jsx)(Sy, {
                                  initialParameters: bb.parameters
                                });
                              case "rhythmClick":
                                return (0, cb.jsx)(Ey, {
                                  initialParameters: bb.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const mb = (0, Uy.memo)((function() {
                            const [yb, bb] = (0, Uy.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, hy.i)("qteStateUpdated", (yb => {
                              bb(yb)
                            })), yb.isActive && yb.type ? (0, cb.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, cb.jsx)(ly, {
                                qte: yb
                              })
                            }) : null
                          }))
                        }, 3974: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            b: () => cb,
                            e: () => Py
                          });
                          var Uy = Wy(55),
                            hy = Wy(1156),
                            fy = Wy(3983);
                          const Zy = {
                              getState: () => fy.e.getCurrentState(),
                              onFrame: hy.h
                            },
                            cb = (0, Uy.createContext)(Zy);

                          function Py() {
                            return (0, Uy.useContext)(cb)
                          }
                        }, 4050: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            d: () => uy,
                            f: () => ny
                          });
                          var Uy = Wy(4052),
                            hy = Wy(248);
                          const fy = 120,
                            Zy = 260,
                            cb = 1.15,
                            Py = 1.2,
                            oy = 2,
                            By = 1.08,
                            Ky = .8,
                            ey = .95,
                            qb = 8,
                            sy = "[\"')\\]\u300d\u300f\uff09]*",
                            Sy = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${sy}$`),
                            Ey = new RegExp(`[?\uff1f]${sy}$`),
                            ly = new RegExp(`[!\uff01]${sy}$`),
                            mb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Cy = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            Ty = new RegExp(`[${Cy}]`),
                            Vy = new RegExp(`[${Cy}]|[^${Cy}]+`, "g"),
                            Jy = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function gb(yb) {
                            let bb = 2166136261;
                            for (let Wy = 0; Wy < yb.length; Wy++) bb ^= yb.charCodeAt(Wy), bb = Math.imul(bb, 16777619);
                            return (bb >>> 0) / 4294967295 * 2 - 1
                          }

                          function Gy(yb) {
                            var bb;
                            if (Ty.test(yb)) return 1;
                            const Wy = yb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Uy = Wy.replace(/[^0-9]/g, "");
                            if (Uy.length > 0 && !/\p{L}/u.test(Wy)) return Math.min(Uy.length, 4);
                            const hy = null !== (bb = Wy.match(Jy)) && void 0 !== bb ? bb : [];
                            if (0 === hy.length) {
                              var fy, Zy;
                              const yb = null !== (fy = null === (Zy = Wy.match(/\p{L}/gu)) || void 0 === Zy ? void 0 : Zy.length) && void 0 !== fy ? fy : 0;
                              return 0 === yb ? 0 : Math.min(Math.max(1, Math.round(yb / 2.5)), qb)
                            }
                            const cb = Wy.replace(/[^\p{L}]/gu, ""),
                              Py = hy.length > 1 && "e" === hy.at(-1) && cb.endsWith("e") && !cb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(yb.replace(/[^\p{L}]/gu, ""));
                            return Math.min(hy.length - (Py ? 1 : 0), qb)
                          }

                          function Oy(yb) {
                            return yb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Ry(yb) {
                            const bb = yb.replace(/[^\p{L}]/gu, "");
                            return bb.length >= 2 && bb === bb.toUpperCase() && bb !== bb.toLowerCase()
                          }

                          function vb(yb, bb) {
                            var Wy;
                            const qb = bb && (0, Uy.l)(bb),
                              sy = null !== (Wy = null === qb || void 0 === qb ? void 0 : qb.syllableMs) && void 0 !== Wy ? Wy : Uy.d,
                              Cy = function(yb) {
                                const bb = [];
                                for (const Uy of (0, hy.Vb)(yb))
                                  if ("string" === typeof Uy)
                                    for (const yb of Uy.split(/(\s+)/)) {
                                      if ("" === yb) continue;
                                      if (/^\s+$/.test(yb)) {
                                        bb.push({
                                          kind: "space",
                                          text: yb
                                        });
                                        continue
                                      }
                                      if (!Ty.test(yb)) {
                                        bb.push({
                                          kind: "word",
                                          text: yb,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Uy = !0;
                                      for (const hy of null !== (Wy = yb.match(Vy)) && void 0 !== Wy ? Wy : []) {
                                        var Wy;
                                        const yb = bb.at(-1);
                                        Uy || "word" !== (null === yb || void 0 === yb ? void 0 : yb.kind) || Ty.test(hy) || /[\p{L}\p{N}]/u.test(hy) ? (Uy || bb.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), bb.push({
                                          kind: "word",
                                          text: hy,
                                          delayMs: 0
                                        }), Uy = !1) : yb.text += hy
                                      }
                                    } else bb.push({
                                      kind: "icon",
                                      text: Uy.icon,
                                      delayMs: 0
                                    });
                                return bb
                              }(yb),
                              Jy = [];
                            let vb = [];
                            for (const Uy of Cy) "space" !== Uy.kind && (vb.push(Uy), Sy.test(Uy.text) && (Jy.push(vb), vb = []));
                            Jy.push(vb);
                            const ib = [];
                            let My = 0;
                            for (const Uy of Jy) {
                              var Yy, Xy;
                              const yb = null !== (Yy = null === (Xy = Uy.at(-1)) || void 0 === Xy ? void 0 : Xy.text) && void 0 !== Yy ? Yy : "",
                                bb = Ey.test(yb),
                                Wy = ly.test(yb),
                                hy = Uy.map((yb => "word" === yb.kind ? Gy(yb.text) : 1)),
                                Cy = hy.findLastIndex((yb => yb > 0));
                              for (const [Ey, ly] of Uy.entries()) {
                                const yb = "word" === ly.kind,
                                  Uy = hy[Ey];
                                ly.delayMs = My;
                                for (let hy = 0; qb && hy < Uy; hy++) {
                                  const {
                                    intonation: fy
                                  } = qb;
                                  let Zy = Cy > 0 ? -fy.declineSemitones * (Ey / Cy) : 0;
                                  Zy += gb(`${Oy(ly.text)}|${hy}`) * fy.variationSemitones;
                                  const Sy = Math.min(1, fy.variationSemitones);
                                  let mb = qb.glideSemitones,
                                    Ty = 1;
                                  Wy && (Zy += fy.exclaimLiftSemitones, Ty *= cb), bb && Ey === Cy && (Zy += fy.questionRiseSemitones * (Uy > 1 ? .5 + .5 * hy / (Uy - 1) : 1), hy === Uy - 1 && (mb = Math.abs(mb) + fy.questionRiseSemitones / 2)), yb && Ry(ly.text) && (Zy += oy * Sy, Ty *= Py), Uy > 1 && 0 === hy && (Zy += Ky * Sy, Ty *= By), ib.push({
                                    atMs: My + hy * sy,
                                    semitones: Zy,
                                    glideSemitones: mb,
                                    durationMs: hy < Uy - 1 ? Math.min(qb.durationMs, sy * ey) : qb.durationMs,
                                    level: Ty
                                  })
                                }
                                My += Uy * sy + (Sy.test(ly.text) ? Zy : mb.test(ly.text) ? fy : 0)
                              }
                            }
                            return {
                              pieces: Cy.map((yb => "space" === yb.kind ? yb : "icon" === yb.kind ? {
                                kind: "icon",
                                icon: yb.text,
                                delayMs: yb.delayMs
                              } : {
                                kind: "word",
                                text: yb.text,
                                delayMs: yb.delayMs
                              })),
                              blips: ib
                            }
                          }
                          var ib = Wy(1042),
                            My = Wy(1115),
                            Yy = Wy(1580);

                          function Xy(yb) {
                            if ("string" === typeof yb) return yb;
                            const bb = My.f.get().getCurrentLanguageCode();
                            return (0, ib.t)(bb, yb.translationKey, (0, ib.s)(yb.params, Yy.d.shown))
                          }

                          function ny(yb) {
                            const bb = void 0 === yb.voice ? null : (0, Uy.p)(yb.voice),
                              Wy = bb && (0, Uy.l)(bb);
                            return {
                              plan: vb(Xy(yb.line), Wy),
                              synth: Wy
                            }
                          }

                          function uy(yb) {
                            const bb = [];
                            let Wy = [];
                            for (const [hy, fy] of yb.entries()) {
                              var Uy;
                              "space" === fy.kind && (" " !== fy.text || "icon" !== (null === (Uy = yb[hy + 1]) || void 0 === Uy ? void 0 : Uy.kind)) ? (Wy.length > 0 && bb.push(Wy), bb.push([fy]), Wy = []) : Wy.push(fy)
                            }
                            return Wy.length > 0 && bb.push(Wy), bb
                          }
                        }, 4060: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            b: () => By,
                            e: () => Ky
                          });
                          var Uy = Wy(4068),
                            hy = Wy(19);
                          const fy = .25,
                            Zy = .85,
                            cb = .02,
                            Py = .01;

                          function oy(yb, bb, Wy, Uy, hy, fy, cb) {
                            const {
                              waveform: Py,
                              pitchHz: oy,
                              attackMs: By,
                              releaseMs: Ky,
                              lowpassHz: ey
                            } = Wy, qb = hy + Uy.durationMs / 1e3, sy = oy * 2 ** (Uy.semitones / 12), Sy = yb.createOscillator();
                            Sy.type = Py, Sy.frequency.setValueAtTime(sy, hy), Sy.frequency.exponentialRampToValueAtTime(sy * 2 ** (Uy.glideSemitones / 12), qb);
                            const Ey = hy + Math.min(By, Uy.durationMs) / 1e3,
                              ly = yb.createGain();
                            ly.gain.setValueAtTime(0, hy), ly.gain.linearRampToValueAtTime(fy, Ey), ly.gain.linearRampToValueAtTime(fy * Zy, Math.max(Ey, qb - Ky / 1e3)), ly.gain.linearRampToValueAtTime(0, qb);
                            const mb = [Sy];
                            if (null !== ey) {
                              const bb = yb.createBiquadFilter();
                              bb.type = "lowpass", bb.frequency.value = ey, mb.push(bb)
                            }
                            mb.push(ly, bb);
                            for (let Zy = 1; Zy < mb.length; Zy++) mb[Zy - 1].connect(mb[Zy]);
                            return Sy.onended = () => {
                              for (const yb of mb.slice(0, -1)) yb.disconnect();
                              cb()
                            }, Sy.start(hy), Sy.stop(qb), Sy
                          }

                          function By(yb, bb, Wy, Uy, hy, Zy) {
                            if (0 === Uy.length) return Zy(), () => {};
                            const By = fy * Wy.volume * hy,
                              Ky = yb.createGain();
                            Ky.connect(bb);
                            const ey = yb.currentTime + cb,
                              qb = new Set;
                            for (const fy of Uy) {
                              const bb = oy(yb, Ky, Wy, fy, ey + fy.atMs / 1e3, By * fy.level, (() => {
                                qb.delete(bb), 0 === qb.size && (Ky.disconnect(), Zy())
                              }));
                              qb.add(bb)
                            }
                            return () => {
                              const bb = yb.currentTime;
                              Ky.gain.setTargetAtTime(0, bb, Py);
                              for (const yb of qb) try {
                                yb.stop(bb + 5 * Py)
                              } catch {}
                            }
                          }

                          function Ky(yb, bb) {
                            var Wy;
                            const fy = Uy.d.ctx,
                              Zy = Uy.d.masterGain;
                            if (!fy || !Zy || !hy.d.get("soundOnFromAd")) return () => {};
                            const cb = Uy.d;
                            return null === (Wy = cb._autoResume) || void 0 === Wy || Wy.call(cb), By(fy, Zy, yb, bb, hy.d.get("soundVolume"), (() => {
                              var yb;
                              null === (yb = cb._autoSuspend) || void 0 === yb || yb.call(cb)
                            }))
                          }
                        }, 3983: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            e: () => Ty,
                            h: () => ly
                          });
                          var Uy = Wy(1158),
                            hy = Wy(23);
                          var fy = Wy(258);
                          var Zy = Wy(547);
                          var cb = Wy(1977),
                            Py = Wy(3991),
                            oy = Wy(4006),
                            By = Wy(4022);
                          class Ky {
                            constructor(yb, bb, Wy, Uy, hy, fy) {
                              this.id = yb, this.type = bb, this.parameters = Wy, this.tearDownNotification = Uy, this.onDonePromise = hy, this.resolveRequest = fy
                            }
                          }
                          const ey = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
                          class qb {
                            constructor(yb, bb, Wy, Uy, hy, fy) {
                              this.id = yb, this.type = bb, this.parameters = Wy, this.resolveRequest = Uy, this.onDonePromise = hy, this.tearDownNotification = fy, this.mouseSub = null, this.stopInputActions = null, this.stopShellTicks = null, this.tickSub = null, this.implementation = void 0, this.isCompleted = !1;
                              const Zy = ly[bb];
                              if (!Zy) throw console.error(`No QTE implementation registered for type: ${bb}`), new Error(`No QTE implementation registered for type: ${bb}`);
                              this.implementation = new Zy(Wy, (yb => {
                                this.isCompleted = !0, this.resolveRequest(yb)
                              }), this.tearDownNotification), this.setupInputHandlers()
                            }
                            setupInputHandlers() {
                              this.mouseSub = hy.g.subscribe("QTEMouseState", (yb => {
                                let {
                                  isDown: bb
                                } = yb;
                                this.isCompleted || this.implementation.handleMouseInput(bb)
                              })), this.stopInputActions = (0, oy.k)((yb => {
                                this.isCompleted || !ey.has(yb.action) && !(0, oy.h)(yb) || this.implementation.handleMouseInput(yb.down)
                              })), this.tickSub = hy.g.subscribe("noaTick", (yb => {
                                if (this.isCompleted) return;
                                const bb = yb / 1e3;
                                this.implementation.handleTick(bb)
                              })), this.stopShellTicks = (0, Py.z)((() => {
                                this.isCompleted || this.implementation.handleTick(cb.q / 1e3)
                              }))
                            }
                            cleanup() {
                              var yb, bb;
                              this.mouseSub && (hy.g.unsubscribe(this.mouseSub), this.mouseSub = null), null === (yb = this.stopInputActions) || void 0 === yb || yb.call(this), this.stopInputActions = null, null === (bb = this.stopShellTicks) || void 0 === bb || bb.call(this), this.stopShellTicks = null, this.tickSub && (hy.g.unsubscribe(this.tickSub), this.tickSub = null)
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
                          const sy = new Uy.b,
                            Sy = new Map;
                          let Ey = null;
                          const ly = {
                            progressBar: class {
                              constructor(yb, bb, Wy) {
                                var Uy, hy, fy, Zy;
                                this.resolveRequest = bb, this.tearDownNotification = Wy, this.progress = 0, this.Z2 = void 0, this.y5 = void 0, this.piy = void 0, this.isCompleted = !1, this.clickCount = 0, this.parameters = void 0, this.type = "progressBar";
                                const cb = yb;
                                this.Z2 = null !== (Uy = cb.Z2) && void 0 !== Uy ? Uy : .075, this.y5 = null !== (hy = cb.y5) && void 0 !== hy ? hy : 1, this.progress = null !== (fy = cb.rM) && void 0 !== fy ? fy : 30, this.piy = null !== (Zy = cb.piy) && void 0 !== Zy && Zy, this.parameters = cb
                              }
                              handleMouseInput(yb) {
                                yb && !this.isCompleted && (this.clickCount++, this.progress += this.y5, this.progress >= 100 && this.complete(!0))
                              }
                              handleTick() {
                                if (!this.isCompleted)
                                  if (this.progress -= this.Z2, this.piy && this.progress <= 0) this.complete(!1);
                                  else if (this.progress <= 0) this.progress = 0;
                                else if (this.progress >= 100) return void this.complete(!0)
                              }
                              complete(yb) {
                                this.isCompleted = !0, this.resolveRequest(yb)
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
                              constructor(yb, bb, Wy) {
                                var Uy;
                                this.resolveRequest = bb, this.tearDownNotification = Wy, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = yb, this.timeWindowMs = null !== (Uy = this.parameters.B3) && void 0 !== Uy ? Uy : 3e3, this.startTime = Date.now()
                              }
                              handleMouseInput(yb) {
                                if (!yb || this.isCompleted) return;
                                Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
                              }
                              handleTick() {
                                if (this.isCompleted) return;
                                Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
                              }
                              complete(yb) {
                                this.isCompleted = !0, this.resolveRequest(yb)
                              }
                              getState() {
                                const yb = Date.now() - this.startTime,
                                  bb = Math.max(0, this.timeWindowMs - yb);
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    timeRemaining: bb,
                                    B3: this.timeWindowMs
                                  },
                                  isActive: !0
                                }
                              }
                              tearDown() {
                                this.tearDownNotification()
                              }
                            },
                            gravityBar: class {
                              constructor(yb, bb, Wy) {
                                var Uy;
                                this.resolveRequest = bb, this.tearDownNotification = Wy, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirectionChange = void 0, this.progress = void 0, this.isCompleted = !1;
                                const hy = yb;
                                this.parameters = {
                                  ...hy,
                                  t5: fy.c.clamp(hy.t5, .05, 1)
                                }, this.progress = null !== (Uy = hy.rM) && void 0 !== Uy ? Uy : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
                              }
                              handleMouseInput(yb) {
                                this.isMouseDown = yb
                              }
                              handleTick(yb) {
                                this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(yb))
                              }
                              updateMover() {
                                this.ticksUntilDirectionChange--, (this.ticksUntilDirectionChange <= 0 || Math.abs(this.moverPosition - this.moverTarget) < .02) && this.pickNewMoverTarget();
                                const yb = Math.sign(this.moverTarget - this.moverPosition);
                                this.moverPosition += yb * this.parameters.I3 * .004, this.moverPosition = Math.max(0, Math.min(1, this.moverPosition))
                              }
                              pickNewMoverTarget() {
                                this.moverTarget = Math.random(), this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
                              }
                              randomNumTicksUntilDirectionChange() {
                                const yb = fy.c.clamp(1 - .7 * this.parameters.A3, 0, 1.4);
                                return Math.floor(60 * yb + 40 * Math.random())
                              }
                              updateCatchZone() {
                                this.isMouseDown ? this.catchZoneVelocity += .001 * this.parameters.P5 : this.catchZoneVelocity -= .001 * this.parameters.gravity, this.catchZoneVelocity *= .92, this.catchZoneVelocity = fy.c.clampAbs(this.catchZoneVelocity, .03), this.catchZonePosition += this.catchZoneVelocity;
                                const yb = this.parameters.t5 / 2,
                                  bb = yb,
                                  Wy = 1 - yb;
                                this.catchZonePosition <= bb ? (this.catchZonePosition = bb, this.catchZoneVelocity = 0) : this.catchZonePosition >= Wy && (this.catchZonePosition = Wy, this.catchZoneVelocity = 0)
                              }
                              isMoverInCatchZone() {
                                const yb = this.parameters.t5 / 2;
                                return this.moverPosition >= this.catchZonePosition - yb && this.moverPosition <= this.catchZonePosition + yb
                              }
                              updateProgress(yb) {
                                this.isMoverInCatchZone() ? this.progress += this.parameters.o5 * yb : this.progress -= this.parameters.B5 * yb, this.progress >= 100 ? (this.progress = 100, this.complete(!0)) : this.parameters.piy && this.progress <= 0 ? (this.progress = 0, this.complete(!1)) : this.progress < 0 && (this.progress = 0)
                              }
                              complete(yb) {
                                this.isCompleted = !0, this.resolveRequest(yb)
                              }
                              getState() {
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    catchZonePosition: this.catchZonePosition,
                                    t5: this.parameters.t5,
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
                              constructor(yb, bb, Wy) {
                                var Uy, hy, Zy, cb, Py;
                                this.resolveRequest = bb, this.tearDownNotification = Wy, this.startTime = void 0, this.speed = void 0, this.i6 = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
                                const oy = yb;
                                this.parameters = {
                                  ...oy,
                                  speed: null !== (Uy = oy.speed) && void 0 !== Uy ? Uy : .5,
                                  i6: fy.c.clamp(oy.i6, .05, 1),
                                  label: null !== (hy = oy.label) && void 0 !== hy ? hy : [{
                                    str: "Click when the marker is within the green zone."
                                  }],
                                  icon: null !== (Zy = oy.icon) && void 0 !== Zy ? Zy : null,
                                  scale: null !== (cb = oy.scale) && void 0 !== cb ? cb : 1,
                                  rotation: null !== (Py = oy.rotation) && void 0 !== Py ? Py : 0
                                }, this.speed = this.parameters.speed, this.i6 = this.parameters.i6, this.startTime = Date.now()
                              }
                              handleMouseInput(yb) {
                                if (yb) {
                                  this.updateMarkerPosition();
                                  const yb = Math.abs(this.markerPosition - .5) <= this.i6 / 2;
                                  this.complete(yb)
                                }
                              }
                              handleTick() {
                                this.isCompleted || this.updateMarkerPosition()
                              }
                              updateMarkerPosition() {
                                const yb = (Date.now() - this.startTime) / 1e3 * this.speed % 1;
                                this.markerPosition = yb <= .5 ? 2 * yb : 2 - 2 * yb
                              }
                              complete(yb) {
                                this.isCompleted = !0, this.resolveRequest(yb)
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
                              constructor(yb, bb, Wy) {
                                this.resolveRequest = bb, this.tearDownNotification = Wy, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = yb, this.shrinkStartTime = Date.now()
                              }
                              handleMouseInput(yb) {
                                if (!yb || this.isCompleted) return;
                                const bb = this.getOuterCircleProgress();
                                if (bb <= this.parameters.f6 && bb >= -this.parameters.f6) {
                                  if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.I5) return void this.complete(!0)
                                } else this.handleMiss();
                                this.shrinkStartTime = Date.now()
                              }
                              handleMiss() {
                                this.misses++, this.lastClickResult = !1, !(0, Zy.D)(this.parameters.R6) && this.misses > this.parameters.R6 ? this.complete(!1) : this.shrinkStartTime = Date.now()
                              }
                              handleTick() {
                                if (this.isCompleted) return;
                                this.getOuterCircleProgress() < -this.parameters.f6 && this.handleMiss()
                              }
                              getOuterCircleProgress() {
                                return 1 - (Date.now() - this.shrinkStartTime) / this.parameters.U6
                              }
                              complete(yb) {
                                this.isCompleted = !0, this.resolveRequest(yb)
                              }
                              getState() {
                                return {
                                  type: this.type,
                                  parameters: this.parameters,
                                  state: {
                                    outerCircleProgress: this.getOuterCircleProgress(),
                                    successes: this.successes,
                                    I5: this.parameters.I5,
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

                          function mb() {
                            (0, By.h)(cb.v.Qte, Ey ? cb.v.Qte : 0), Ey ? hy.g.EZ("qteStateUpdated", Ey.getState()) : hy.g.EZ("qteStateUpdated", {
                              type: null,
                              typeSpecificParameters: null,
                              isActive: !1
                            })
                          }
                          class Cy {
                            constructor(yb, bb) {
                              this.resultPromise = yb, this.tearDownQTE = bb
                            }
                            static create(yb, bb, Wy) {
                              const Uy = Promise.race([yb, bb]);
                              return new Cy(Uy, Wy)
                            }
                            async getResult() {
                              return await this.resultPromise
                            }
                          }
                          class Ty {
                            static queueQTE(yb, bb, Wy) {
                              let Uy, hy;
                              const fy = new Promise((yb => {
                                  Uy = yb
                                })),
                                Zy = new Promise((yb => {
                                  hy = () => {
                                    yb("qteTornDown")
                                  }
                                })),
                                cb = Promise.race([fy, Zy]).then((() => {})),
                                Py = new Ky(yb, bb, Wy, hy, cb, Uy);
                              return Sy.set(yb, Py), sy.enqueue(Py), Ey || this.processNextQTE(), Cy.create(fy, Zy, hy)
                            }
                            static async processNextQTE() {
                              if (Ey || sy.gh()) return void(sy.gh() && Ey && (Ey = null, mb()));
                              const yb = await sy.dequeue();
                              if (!Sy.has(yb.id)) return void await this.processNextQTE();
                              Sy.delete(yb.id);
                              const bb = new qb(yb.id, yb.type, yb.parameters, yb.resolveRequest, yb.onDonePromise, yb.tearDownNotification);
                              Ey = bb, mb();
                              try {
                                await bb.waitUntilDone()
                              } catch (Wy) {
                                console.error("Error while waiting for QTE to resolve:", Wy.stack)
                              }
                              Ey === bb && (Ey.cleanup(), Ey = null, mb()), await this.processNextQTE()
                            }
                            static cancelQTE(yb) {
                              if (Ey && Ey.id === yb) return Ey.tearDown(), Ey = null, mb(), void this.processNextQTE();
                              const bb = Sy.get(yb);
                              bb && (Sy.delete(yb), bb.tearDownNotification())
                            }
                            static getCurrentState() {
                              return Ey ? Ey.getState() : {
                                type: null,
                                parameters: null,
                                state: null,
                                isActive: !1
                              }
                            }
                            static reset() {
                              Ey && (Ey.tearDown(), Ey = null), Sy.forEach(((yb, bb) => {
                                this.cancelQTE(bb)
                              })), sy.emptyQueue(), Sy.clear(), mb()
                            }
                          }
                        }, 4068: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            Howl: () => Uy.Howl,
                            d: () => Uy.Howler
                          });
                          var Uy = Wy(4072);
                          Uy.Howler._mobileUnloaded = !0
                        }, 4074: (yb, bb, Wy) => {
                          function Uy(yb) {
                            return {
                              notAfter: yb
                            }
                          }
                          Wy.d(bb, {
                            e: () => Py,
                            g: () => oy,
                            i: () => cb,
                            j: () => Uy,
                            m: () => hy,
                            o: () => fy,
                            r: () => Zy,
                            u: () => By,
                            x: () => Ky
                          });
                          const hy = Uy("\\w$."),
                            fy = Uy("\\w.,");

                          function Zy(yb) {
                            return bb => Py(bb, yb)
                          }

                          function cb(yb) {
                            return bb => !yb.test(bb.input.slice(0, bb.index))
                          }

                          function Py(yb, bb) {
                            return yb.index > 0 && new RegExp(`[${bb}]`).test(yb.input[yb.index - 1])
                          }

                          function oy(yb, bb, Wy) {
                            return function(yb) {
                              return void 0 !== yb && "function" !== typeof yb
                            }(Wy) ? function(yb, bb, Wy) {
                              const Uy = bb.flags.replace(/[gy]/g, ""),
                                hy = new RegExp(`[^${Wy}](?:${bb.source})`, `${Uy}g`),
                                fy = [],
                                Zy = Wy => {
                                  const Uy = Wy.index + Wy[0].length;
                                  return ("" === Wy[0] ? ey(yb, bb, Uy) : Uy) - 1
                                },
                                cb = new RegExp(`(?:${bb.source})`, `${Uy}y`).exec(yb);
                              if (cb) {
                                if (fy.push(cb), !bb.global) return fy;
                                hy.lastIndex = Zy(cb)
                              }
                              for (let Py = hy.exec(yb); Py; Py = hy.exec(yb)) {
                                const Wy = ey(yb, bb, Py.index) - Py.index;
                                if (Py[0] = Py[0].slice(Wy), Py.index += Wy, fy.push(Py), !bb.global) break;
                                hy.lastIndex = Zy(Py)
                              }
                              return fy
                            }(yb, bb, Wy.notAfter) : function(yb, bb, Wy) {
                              const Uy = new RegExp(bb.source, `${bb.flags.replace(/[gy]/g,"")}g`),
                                hy = [];
                              for (let fy = Uy.exec(yb); fy; fy = Uy.exec(yb))
                                if (!Wy || Wy(fy)) {
                                  if (hy.push(fy), !bb.global) break;
                                  "" === fy[0] && (Uy.lastIndex = ey(yb, bb, Uy.lastIndex))
                                } else Uy.lastIndex = ey(yb, bb, fy.index);
                              return hy
                            }(yb, bb, Wy)
                          }

                          function By(yb, bb, Wy, Uy) {
                            let hy = "",
                              fy = 0;
                            for (const Zy of oy(yb, bb, Wy)) hy += yb.slice(fy, Zy.index) + Uy(Zy), fy = Zy.index + Zy[0].length;
                            return hy + yb.slice(fy)
                          }

                          function Ky(yb, bb, Wy) {
                            const Uy = [];
                            let hy = 0;
                            for (const fy of oy(yb, bb, Wy)) Uy.push(yb.slice(hy, fy.index)), hy = fy.index + fy[0].length;
                            return [...Uy, yb.slice(hy)]
                          }

                          function ey(yb, bb, Wy) {
                            var Uy;
                            return Wy + (bb.unicode && (null !== (Uy = yb.codePointAt(Wy)) && void 0 !== Uy ? Uy : 0) > 65535 ? 2 : 1)
                          }
                        }, 4006: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            d: () => Py,
                            h: () => fy,
                            k: () => cb
                          });
                          var Uy = Wy(1977),
                            hy = Wy(4013);

                          function fy(yb) {
                            let {
                              action: bb,
                              flags: Wy
                            } = yb;
                            return "mid-fire" === bb && 0 !== (Wy & Uy.b.AltLeftClick)
                          }
                          const Zy = new Set;

                          function cb(yb) {
                            return Zy.add(yb), () => {
                              Zy.delete(yb)
                            }
                          }

                          function Py(yb) {
                            const bb = hy.b[255 & yb];
                            if (void 0 === bb) return;
                            const Wy = yb >>> 8 & 255,
                              fy = {
                                action: bb,
                                down: 0 !== (Wy & Uy.b.Down),
                                flags: Wy,
                                press: yb >>> 16
                              };
                            for (const Uy of Zy) Uy(fy)
                          }
                        }, 4030: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            b: () => hy,
                            d: () => Py,
                            e: () => fy,
                            f: () => Zy,
                            h: () => cb,
                            i: () => Ey,
                            j: () => By,
                            k: () => Ky,
                            o: () => Sy,
                            q: () => qb
                          });
                          var Uy = Wy(1420);
                          const hy = 24e3,
                            fy = "/docs/llms.txt",
                            Zy = `${Uy.e}${fy}`,
                            cb = "/llms.txt",
                            Py = "/docs/llms-full.txt";

                          function oy(yb) {
                            return yb || "index"
                          }

                          function By(yb) {
                            return `/docs/${oy(yb)}.md`
                          }

                          function Ky(yb, bb) {
                            return `/docs/${oy(yb)}/${bb+1}.md`
                          }
                          const ey = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function qb(yb) {
                            const bb = ey.exec(yb);
                            return null === bb ? null : {
                              name: bb[1],
                              part: void 0 === bb[2] ? null : Number(bb[2])
                            }
                          }
                          const sy = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Sy(yb) {
                            const bb = sy.exec(yb);
                            if (null === bb) return null;
                            const [, Wy = "", Uy] = bb;
                            return void 0 === Uy ? By(Wy) : Ky(Wy, Number(Uy) - 1)
                          }

                          function Ey(yb) {
                            return `/docsHtml/${oy(yb)}.html`
                          }
                        }, 4052: (yb, bb, Wy) => {
                          Wy.d(bb, {
                            d: () => hy,
                            h: () => Uy,
                            i: () => fy,
                            l: () => Py,
                            p: () => Zy
                          });
                          const Uy = ["sine", "triangle", "square", "sawtooth"],
                            hy = 55,
                            fy = {
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

                          function Zy(yb) {
                            return "string" !== typeof yb ? yb : Object.hasOwn(fy, yb) ? fy[yb] : null
                          }

                          function cb(yb, bb, Wy) {
                            return Math.min(Wy, Math.max(bb, yb))
                          }

                          function Py(yb) {
                            const bb = cb(yb.durationMs, 10, 500),
                              Wy = cb(yb.attackMs, 0, bb),
                              {
                                intonation: hy
                              } = yb;
                            return {
                              waveform: Uy.includes(yb.waveform) ? yb.waveform : "sine",
                              pitchHz: cb(yb.pitchHz, 20, 4e3),
                              glideSemitones: cb(yb.glideSemitones, -24, 24),
                              durationMs: bb,
                              attackMs: Wy,
                              releaseMs: cb(yb.releaseMs, 0, bb - Wy),
                              lowpassHz: null === yb.lowpassHz ? null : cb(yb.lowpassHz, 20, 2e4),
                              volume: cb(yb.volume, 0, 2),
                              intonation: {
                                variationSemitones: cb(hy.variationSemitones, 0, 6),
                                declineSemitones: cb(hy.declineSemitones, 0, 12),
                                questionRiseSemitones: cb(hy.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: cb(hy.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: cb(yb.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const yb in modules) Object.freeze(modules[yb]);