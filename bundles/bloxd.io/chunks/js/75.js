export const id = 75;
export const ids = [75, 91];
export const modules = {
    4559: (kk, Fk, Bk) => {
      Bk.d(Fk, {
        d: () => fk,
        f: () => mk
      });
      var Rk = Bk(1020),
        tk = Bk.n(Rk),
        ak = Bk(61),
        Xk = Bk(1149),
        bk = Bk(4566),
        wk = Bk(1812),
        dk = Bk(2320),
        sk = Bk(4568),
        Vk = Bk(1069);
      const Jk = new WeakMap;
      let Ak = 0;

      function ek(kk) {
        let Fk = Jk.get(kk);
        return void 0 === Fk && (Fk = Ak++, Jk.set(kk, Fk)), Fk
      }

      function yk(kk) {
        let {
          piece: Fk
        } = kk;
        return "space" === Fk.kind ? (0, Vk.jsx)(Vk.Fragment, {
          children: Fk.text
        }) : (0, Vk.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${Fk.delayMs}ms`
          },
          children: (0, Vk.jsx)(bk.c, {
            text: "icon" === Fk.kind ? `[[${Fk.icon}]]` : Fk.text
          })
        })
      }

      function fk(kk) {
        let {
          display: Fk
        } = kk;
        const {
          selectedLanguage: Bk
        } = (0, Xk.x)(), Rk = (0, ak.useMemo)((() => (0, sk.e)((0, sk.h)(Fk).plan.pieces)), [Fk, Bk.code]);
        return (0, Vk.jsxs)("div", {
          className: tk()("Dialogue", {
            DialogueAnimateIn: !1 !== Fk.animateIn
          }),
          children: [Fk.speakerName && (0, Vk.jsx)(wk.d, {
            text: Fk.speakerName,
            className: "DialogueSpeaker"
          }), (0, Vk.jsx)("p", {
            className: "DialogueLine",
            children: Rk.map(((kk, Fk) => 1 === kk.length && "space" === kk[0].kind ? kk[0].text : (0, Vk.jsx)("span", {
              className: "DialogueGlue",
              children: kk.map(((kk, Fk) => (0, Vk.jsx)(yk, {
                piece: kk
              }, Fk)))
            }, Fk)))
          })]
        })
      }
      const mk = (0, ak.memo)((function() {
        const kk = (0, dk.j)("dialogue");
        return (0, Vk.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: kk && (0, Vk.jsx)(fk, {
            display: kk
          }, ek(kk))
        })
      }))
    },
    4433: (kk, Fk, Bk) => {
        Bk.r(Fk), Bk.d(Fk, {
          default: () => kX
        });
        var Rk = Bk(61),
          tk = Bk(1020),
          ak = Bk.n(tk),
          Xk = Bk(1467),
          bk = Bk(1473),
          wk = Bk(22),
          dk = Bk(67),
          sk = Bk(4437),
          Vk = Bk(4445),
          Jk = Bk(4452),
          Ak = Bk(4115),
          ek = Bk(1069);
        const yk = "/textures/docs/icons";

        function fk(kk) {
          let {
            name: Fk,
            isTinted: Bk,
            className: Rk,
            style: tk
          } = kk;
          const Xk = `${yk}/${Fk}.png`;
          return Bk ? (0, ek.jsxs)("span", {
            className: ak()("DocsPixelIcon", "Tinted", Rk),
            "aria-hidden": "true",
            style: tk,
            children: [(0, ek.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Xk}")`,
                WebkitMaskImage: `url("${Xk}")`
              }
            }), (0, ek.jsx)("img", {
              src: Xk,
              alt: ""
            })]
          }) : (0, ek.jsx)("img", {
            className: ak()("DocsPixelIcon", Rk),
            src: Xk,
            alt: "",
            "aria-hidden": "true",
            style: tk
          })
        }
        const mk = 1500;

        function Wk() {
          const [kk, Fk] = (0, Rk.useState)(null);
          (0, Rk.useEffect)((() => {
            if (null === kk) return;
            const Bk = setTimeout((() => {
              Fk(null)
            }), mk);
            return () => {
              clearTimeout(Bk)
            }
          }), [kk]);
          return [kk, kk => {
            (0, Ak.c)(kk).then((() => {
              Fk({
                text: kk,
                failed: !1
              })
            }), (Bk => {
              console.error("Could not copy to the clipboard", Bk), Fk({
                text: kk,
                failed: !0
              })
            }))
          }]
        }

        function vk(kk) {
          let {
            text: Fk,
            label: Bk,
            className: Rk
          } = kk;
          const [tk, Xk] = Wk(), bk = !1 === (null === tk || void 0 === tk ? void 0 : tk.failed);
          return (0, ek.jsxs)("button", {
            type: "button",
            className: ak()("DocsCopyButton", Rk, {
              Copied: bk
            }),
            title: `Copy ${Fk.length>40?"to clipboard":Fk}`,
            "aria-label": Bk ? void 0 : `Copy ${Fk}`,
            onClick: kk => {
              kk.stopPropagation(), Xk(Fk)
            },
            children: [(0, ek.jsx)(fk, {
              name: bk ? "check" : "copy"
            }), Bk && (0, ek.jsx)("span", {
              children: bk ? "Copied" : null !== tk && void 0 !== tk && tk.failed ? "Copy failed" : Bk
            })]
          })
        }
        sk.c.registerLanguage("javascript", Vk.b), sk.c.registerLanguage("typescript", Jk.c);
        const ik = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Yk = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          Lk = 24;

        function Ok(kk) {
          let {
            code: Fk,
            lang: Bk,
            compact: tk = !1
          } = kk;
          const Xk = (0, Rk.useMemo)((() => function(kk, Fk) {
              const Bk = ik[Fk];
              return Bk ? sk.c.highlight(kk, {
                language: Bk
              }).value : kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(Fk, Bk)), [Fk, Bk]),
            bk = Fk.split("\n").length,
            wk = !tk && bk > Lk + 6,
            [dk, Vk] = (0, Rk.useState)(!1),
            Jk = ik[Bk];
          return (0, ek.jsxs)("div", {
            className: ak()("DocsCodeBlock", {
              Compact: tk,
              Collapsed: wk && !dk
            }),
            children: [!tk && (0, ek.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, ek.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Jk ? Yk[Jk] : "Text"
              }), (0, ek.jsx)(vk, {
                text: Fk,
                label: "Copy"
              })]
            }), (0, ek.jsx)("pre", {
              children: (0, ek.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Xk
                }
              })
            }), wk && (0, ek.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": dk,
              onClick: () => {
                Vk(!dk)
              },
              children: [(0, ek.jsx)(fk, {
                name: dk ? "chevron-up" : "chevron-down"
              }), dk ? "Show less" : `Show all ${bk} lines`]
            })]
          })
        }
        var Ek = Bk(4460);
        var Sk = Bk(4467);
        const Nk = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Hk(kk) {
          const Fk = new Map;
          let Bk, Rk = [],
            tk = !1;
          const ak = () => {
            Bk && Fk.set(Bk.name, Bk.lines.join("\n").trimEnd())
          };
          for (const Xk of kk.split("\n")) {
            const kk = Xk.match(Nk);
            tk || Xk.startsWith("/*") ? (tk || (ak(), Bk = void 0), Rk.push(Xk), tk = !Xk.includes("*/")) : kk ? (ak(), Bk = {
              name: kk[1],
              lines: [...Rk, Xk]
            }, Rk = []) : Bk && (Xk.startsWith(" ") || Xk.startsWith("\t") || /^[}\])|]/.test(Xk)) ? Bk.lines.push(Xk) : Bk && "" !== Xk.trim() && (ak(), Bk = void 0)
          }
          return ak(), Fk
        }

        function uk(kk) {
          return "methods" === kk || "callbacks" === kk || "settings" === kk
        }
        const Mk = {
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
              setterSnippet: (kk, Fk) => `api.setClientOption(playerId, "${kk}", ${Fk})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (kk, Fk) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${kk}", ${Fk})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (kk, Fk) => `api.setMobSetting(mobId, "${kk}", ${Fk})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (kk, Fk) => `api.setVehicleSetting(vehicleId, "${kk}", ${Fk})`
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
          gk = {
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

        function Uk(kk) {
          return kk.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function ck(kk) {
          let Fk = !1;
          return kk.split("\n").map((kk => (kk.startsWith("```") && (Fk = !Fk), !Fk && /^#{3,} /.test(kk) ? kk.slice(1) : kk))).join("\n")
        }

        function Gk(kk) {
          return "readme" === kk ? "getting-started" : Uk(kk)
        }
        const Tk = "## Glossary of Referenced Types";
        const rk = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...Sk.e.flatMap((kk => {
            const Fk = {
              id: kk.id,
              slug: Gk(kk.id),
              title: kk.title,
              markdown: kk.content,
              ...Mk[kk.id]
            };
            if ("readme" === kk.id) return function(kk) {
              const Fk = kk.markdown.indexOf(Tk),
                Bk = kk.markdown.indexOf("\n```", Fk),
                Rk = kk.markdown.indexOf("\n```", Bk + 1);
              if (-1 === Fk || -1 === Bk || -1 === Rk) throw new Error(`Getting started has no "${Tk}" section with a code block`);
              const tk = kk.markdown.slice(Fk + 31, Bk).trim(),
                ak = [...Hk(kk.markdown.slice(kk.markdown.indexOf("\n", Bk + 1) + 1, Rk))].map((kk => {
                  let [Fk, Bk] = kk;
                  return `## ${Fk}\n\n\`\`\`ts\n${Bk}\n\`\`\`\n`
                })),
                Xk = kk.markdown.slice(kk.markdown.indexOf("\n", Rk + 1) + 1);
              return [{
                ...kk,
                markdown: `${kk.markdown.slice(0,Fk)}${Xk}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${tk}\n\n${ak.join("\n")}`
              }]
            }(Fk);
            if ("howTo" === kk.id) {
              const {
                parent: kk,
                guides: Bk
              } = function(kk) {
                const [Fk, ...Bk] = kk.markdown.split(/^(?=## )/m), Rk = [Fk], tk = [];
                for (const Xk of Bk) {
                  var ak;
                  const Fk = Xk.indexOf("\n"),
                    Bk = Xk.slice(3, Fk).trim(),
                    bk = Xk.slice(Fk + 1);
                  if (!bk.includes("```")) {
                    Rk.push(Xk);
                    continue
                  }
                  const wk = null !== (ak = gk[Bk]) && void 0 !== ak ? ak : {
                    icon: "lightbulb",
                    summary: `How to use ${Bk.toLowerCase()} in World Code.`
                  };
                  tk.push({
                    id: `${kk.id}${Bk.split(/[^A-Za-z0-9]+/).map((kk=>kk.charAt(0).toUpperCase()+kk.slice(1))).join("")}`,
                    slug: `${kk.slug}-${Uk(Bk)}`,
                    title: Bk,
                    layout: "article",
                    sourceAnchor: (0, Ek.m)(Bk),
                    markdown: `# ${Bk}\n\n${ck(bk)}`,
                    ...wk
                  })
                }
                return {
                  parent: {
                    ...kk,
                    markdown: Rk.join(""),
                    childPageIds: tk.map((kk => kk.id))
                  },
                  guides: tk
                }
              }(Fk);
              return [kk, ...Bk]
            }
            return [Fk]
          }))],
          Dk = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...rk.filter((kk => void 0 !== kk.sourceAnchor)).map((kk => kk.id))]
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

        function zk(kk) {
          return rk.find((Fk => Fk.id === kk))
        }
        const Pk = new Map;

        function hk(kk) {
          let Fk = Pk.get(kk.id);
          return Fk || (Fk = (0, Ek.r)(kk.markdown, "changelog" === kk.layout ? 3 : 2), Pk.set(kk.id, Fk)), Fk
        }

        function qk(kk, Fk) {
          return hk(kk).sections.some((kk => kk.heading.anchor === Fk || kk.blocks.some((kk => "heading" === kk.kind && kk.anchor === Fk))))
        }

        function Ck(kk) {
          const [Fk, ...Bk] = kk.replace(/^#/, "").split("-"), Rk = rk.find((kk => kk.id === Fk));
          if (!Rk) return null;
          const tk = Bk.length > 0 ? (0, Ek.m)(Bk.join("-")) : "";
          for (const Xk of null !== (ak = Rk.childPageIds) && void 0 !== ak ? ak : []) {
            var ak;
            const kk = zk(Xk);
            if (kk.sourceAnchor === tk) return {
              page: kk,
              anchor: ""
            };
            if (qk(kk, tk)) return {
              page: kk,
              anchor: tk
            }
          }
          return {
            page: Rk,
            anchor: tk
          }
        }
        const Zk = {
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

        function pk(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Rk = Fk.slug ? `${kk}/${Fk.slug}` : kk;
          return Bk ? `${Rk}#${Bk}` : Rk
        }
        var Kk = Bk(4487);
        const xk = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          jk = new Set(["GameApi", "Console", "_TypeOf"]),
          lk = 4;

        function nk(kk) {
          let Fk = kk.length;
          for (; Fk > 0 && "" === kk[Fk - 1].trim();) Fk--;
          return kk.slice(0, Fk)
        }

        function Ik(kk) {
          var Fk;
          const Bk = nk(kk);
          if (null === (Fk = Bk.at(-1)) || void 0 === Fk || !Fk.trimEnd().endsWith("*/")) return {
            lines: Bk,
            doc: ""
          };
          const Rk = Bk.findLastIndex((kk => kk.startsWith("/**")));
          return -1 === Rk ? {
            lines: Bk,
            doc: ""
          } : {
            lines: nk(Bk.slice(0, Rk)),
            doc: Bk.slice(Rk).join("\n")
          }
        }

        function Qk(kk) {
          var Fk;
          const Bk = kk.split("\n"),
            Rk = Bk.flatMap(((kk, Fk) => xk.test(kk) ? [Fk] : []));
          let tk = Ik(Bk.slice(0, null !== (Fk = Rk[0]) && void 0 !== Fk ? Fk : Bk.length)).doc;
          return Rk.map(((kk, Fk) => {
            var ak;
            const Xk = Ik(Bk.slice(kk, null !== (ak = Rk[Fk + 1]) && void 0 !== ak ? ak : Bk.length)),
              bk = {
                name: Bk[kk].match(xk)[1],
                doc: tk,
                lines: Xk.lines
              };
            return tk = Xk.doc, bk
          }))
        }

        function kF(kk) {
          var Fk;
          const Bk = kk.match(/^readonly \[([\s\S]*)\]$/);
          return Bk ? null !== (Fk = Bk[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Fk ? Fk : [] : null
        }

        function FF(kk) {
          if (!kk.startsWith("{") || !kk.endsWith("}")) return null;
          const Fk = {
              keys: [],
              values: []
            },
            Bk = kk => {
              const Bk = kk.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              Bk && (Fk.keys.push(Bk[1].startsWith('"') ? Bk[1] : `"${Bk[1]}"`), Fk.values.push(Bk[2].trim()))
            };
          let Rk = 0,
            tk = "";
          for (const ak of kk.slice(1, -1)) "{[(".includes(ak) ? Rk++ : "}])".includes(ak) && Rk--, ";" === ak && 0 === Rk ? (Bk(tk), tk = "") : tk += ak;
          return Bk(tk), Fk
        }

        function BF(kk) {
          return kk.length > lk ? `\n\t| ${kk.join("\n\t| ")}` : kk.join(" | ")
        }

        function RF(kk, Fk) {
          const Bk = function(kk, Fk) {
            return kk.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((kk, Bk) => {
              var Rk;
              const tk = null === (Rk = Fk.get(Bk)) || void 0 === Rk ? void 0 : Rk.object;
              return tk ? BF(tk.values) : kk
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((kk, Bk) => {
              var Rk, tk;
              const ak = null === (Rk = Fk.get(Bk)) || void 0 === Rk || null === (tk = Rk.object) || void 0 === tk ? void 0 : tk.values.map(kF);
              return null !== ak && void 0 !== ak && ak.every((kk => null !== kk)) ? BF([...new Set(ak.flat())]) : kk
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((kk, Bk) => {
              var Rk;
              const tk = null === (Rk = Fk.get(Bk)) || void 0 === Rk ? void 0 : Rk.members;
              return tk ? BF(tk) : kk
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((kk, Bk) => {
              var Rk;
              const tk = null === (Rk = Fk.get(Bk)) || void 0 === Rk ? void 0 : Rk.object;
              return tk ? BF(tk.keys) : kk
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((kk, Bk) => {
              var Rk, tk;
              return null !== (Rk = null === (tk = Fk.get(Bk)) || void 0 === tk ? void 0 : tk.text) && void 0 !== Rk ? Rk : kk
            }))
          }(kk.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), Fk);
          return [kk.doc, Bk].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function tF(kk) {
          const Fk = Qk(kk),
            Bk = function(kk) {
              const Fk = new Map,
                Bk = kk.find((kk => "_TypeOf" === kk.name));
              let Rk = null;
              const tk = () => {
                if (Rk) {
                  const kk = Rk.lines.join("\n");
                  Fk.set(Rk.name, {
                    text: kk,
                    members: kF(kk),
                    object: FF(kk)
                  })
                }
              };
              for (const ak of Bk.lines.slice(1, -1)) {
                const kk = ak.match(/^\t([\w$]+): (.+)$/);
                kk ? (tk(), Rk = {
                  name: kk[1],
                  lines: [kk[2]]
                }) : Rk && Rk.lines.push(ak.replace(/^\t/, ""))
              }
              return tk(), Fk
            }(Fk),
            Rk = new Map;
          for (const tk of Fk) jk.has(tk.name) || Rk.has(tk.name) || Rk.set(tk.name, RF(tk, Bk));
          return Rk
        }
        let aF, XF, bF;

        function wF() {
          return XF ??= function(kk) {
            const Fk = Qk(kk).find((kk => "GameApi" === kk.name)),
              Bk = new Map,
              Rk = Fk.lines;
            for (let ak = 0; ak < Rk.length; ak++) {
              var tk;
              if (!Rk[ak].trimStart().startsWith("/**")) continue;
              const kk = ak;
              for (; ak < Rk.length && !Rk[ak].includes("*/");) ak++;
              const Fk = null === (tk = Rk[ak + 1]) || void 0 === tk ? void 0 : tk.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!Fk) continue;
              let Xk = null;
              const bk = [];
              let wk = "description",
                dk = !1;
              for (const Bk of Rk.slice(kk, ak + 1).join("\n").split("\n").map((kk => kk.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const kk = Bk.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                kk ? (Xk = kk[1].trim(), wk = "deprecation") : Bk.startsWith("@") ? (wk = "otherTag", dk = !0) : "" === Bk.trim() ? dk || (wk = "description", bk.push(Bk)) : "deprecation" !== wk || /^[A-Z]/.test(Bk.trim()) ? "otherTag" !== wk && (wk = "description", bk.push(Bk)) : Xk = `${Xk} ${Bk.trim()}`.trim()
              }
              Bk.set(Fk[1], {
                deprecation: Xk,
                description: bk.join("\n").trim()
              })
            }
            return Bk
          }(Kk.default), XF
        }

        function dF() {
          if (!bF) {
            bF = new Map;
            for (const kk of rk) {
              const Fk = (0, Ek.q)(hk(kk)).flatMap((kk => kk.blocks));
              for (const kk of (0, Ek.g)(Fk))
                if ("ts" === kk.lang || "typescript" === kk.lang)
                  for (const [Fk, Bk] of Hk(kk.code)) bF.set(Fk, Bk)
            }
            for (const [kk, Fk] of(aF ??= tF(Kk.default), aF)) bF.has(kk) || bF.set(kk, Fk)
          }
          return bF
        }
        const sF = {
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
        let VF;

        function JF() {
          if (!VF) {
            VF = new Map;
            for (const kk of rk)
              if (uk(kk.layout))
                for (const Fk of hk(kk).sections) VF.has(Fk.heading.text) || VF.set(Fk.heading.text, {
                  pageId: kk.id,
                  anchor: Fk.heading.anchor
                })
          }
          return VF
        }

        function AF(kk) {
          const Fk = kk.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return Fk ? JF().get(Fk[1]) : void 0
        }
        const eF = (0, Rk.createContext)("/docs"),
          yF = (0, Rk.createContext)(null),
          fF = (0, Rk.createContext)(!1),
          mF = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function WF(kk) {
          const Fk = kk.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return Fk ? Fk[1] : null
        }

        function vF(kk) {
          let {
            colour: Fk
          } = kk;
          return (0, ek.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: Fk
            },
            "aria-hidden": "true"
          })
        }

        function iF(kk) {
          const Fk = [];
          let Bk = 0;
          for (const Rk of kk.matchAll(mF)) Fk.push(kk.slice(Bk, Rk.index), (0, ek.jsx)(vF, {
            colour: Rk[0]
          }), Rk[0]), Bk = Rk.index + Rk[0].length;
          return Fk.push(kk.slice(Bk)), Fk
        }

        function YF(kk) {
          let {
            href: Fk,
            children: Bk
          } = kk;
          const tk = (0, Rk.useContext)(eF);
          if (Fk.startsWith("#")) {
            const kk = Ck(Fk);
            if (kk) return (0, ek.jsx)(Xk.b, {
              to: pk(tk, kk.page, kk.anchor),
              children: (0, ek.jsx)(fF.Provider, {
                value: !0,
                children: Bk
              })
            })
          }
          return (0, ek.jsx)("a", {
            href: Fk,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, ek.jsx)(fF.Provider, {
              value: !0,
              children: Bk
            })
          })
        }

        function oF(kk) {
          let {
            code: Fk
          } = kk;
          const Bk = (0, Rk.useContext)(eF);
          if ((0, Rk.useContext)(fF)) return (0, ek.jsx)("code", {
            className: "DocsInlineCode",
            children: Fk
          });
          if (dF().has(Fk)) return (0, ek.jsx)(SF, {
            type: Fk
          });
          const tk = AF(Fk);
          if (tk) return (0, ek.jsx)(Xk.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: pk(Bk, zk(tk.pageId), tk.anchor),
            children: Fk
          });
          const ak = WF(Fk);
          return (0, ek.jsxs)("code", {
            className: "DocsInlineCode",
            children: [ak && (0, ek.jsx)(vF, {
              colour: ak
            }), Fk]
          })
        }

        function LF(kk) {
          let {
            text: Fk
          } = kk;
          const Bk = [];
          let tk = 0;
          for (const Rk of Fk.matchAll(Ek.d)) {
            Rk.index > tk && Bk.push(...iF(Fk.slice(tk, Rk.index)));
            const [, kk, ak, Xk, bk, wk] = Rk;
            kk ? Bk.push((0, ek.jsx)(oF, {
              code: (0, Ek.h)(kk, ak)
            })) : Xk ? Bk.push((0, ek.jsx)("strong", {
              children: (0, ek.jsx)(LF, {
                text: Xk
              })
            })) : Bk.push((0, ek.jsx)(YF, {
              href: wk,
              children: (0, ek.jsx)(LF, {
                text: bk
              })
            })), tk = Rk.index + Rk[0].length
          }
          return tk < Fk.length && Bk.push(...iF(Fk.slice(tk))), (0, ek.jsx)(ek.Fragment, {
            children: Bk.map(((kk, Fk) => (0, ek.jsx)(Rk.Fragment, {
              children: kk
            }, Fk)))
          })
        }
        const OF = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          EF = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function SF(kk) {
          let {
            type: Fk
          } = kk;
          const Bk = dF(),
            tk = [];
          for (const Rk of Fk.trim().matchAll(OF)) {
            const [kk, Fk, ak, Xk, bk] = Rk;
            Fk ? tk.push((0, ek.jsx)("span", {
              className: "DocsTypeString",
              children: kk
            })) : ak && Bk.has(ak) ? tk.push((0, ek.jsx)(gF, {
              name: ak,
              definition: Bk.get(ak)
            })) : ak ? tk.push((0, ek.jsx)("span", {
              className: EF.has(ak) ? "DocsTypeKeyword" : "DocsTypeName",
              children: kk
            })) : Xk ? tk.push((0, ek.jsx)("span", {
              className: "DocsTypeNumber",
              children: kk
            })) : bk ? tk.push(" ") : tk.push((0, ek.jsx)("span", {
              className: "DocsTypePunctuation",
              children: kk
            }))
          }
          return (0, ek.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: tk.map(((kk, Fk) => (0, ek.jsx)(Rk.Fragment, {
              children: kk
            }, Fk)))
          })
        }
        const NF = 480,
          HF = 6,
          uF = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let MF = 0;

        function gF(kk) {
          let {
            name: Fk,
            definition: Bk
          } = kk;
          const tk = (0, Rk.useContext)(eF),
            ak = sF[Fk],
            bk = (0, Rk.useRef)(null),
            wk = (0, Rk.useRef)(null),
            sk = (0, Rk.useRef)(null),
            [Vk, Jk] = (0, Rk.useState)(!1),
            [Ak, yk] = (0, Rk.useState)(null),
            mk = (0, Rk.useRef)(),
            Wk = (0, Rk.useContext)(yF),
            [vk] = (0, Rk.useState)((() => "DocsTypePopover-" + MF++)),
            ik = () => {
              clearTimeout(mk.current), Jk(!0)
            },
            Yk = () => {
              clearTimeout(mk.current), mk.current = setTimeout((() => {
                Jk(!1)
              }), 120)
            };
          return (0, Rk.useEffect)((() => {
            if (!Vk) return;
            const kk = kk => {
              if ("Escape" === kk.key) {
                var Fk, Bk;
                if (null !== (Fk = wk.current) && void 0 !== Fk && Fk.contains(document.activeElement)) null === (Bk = bk.current) || void 0 === Bk || Bk.focus();
                Jk(!1)
              }
            };
            return document.addEventListener("keydown", kk), () => {
              document.removeEventListener("keydown", kk)
            }
          }), [Vk]), (0, Rk.useEffect)((() => () => {
            clearTimeout(mk.current)
          }), []), (0, Rk.useLayoutEffect)((() => {
            if (!Vk || !bk.current || !wk.current) return void yk(null);
            const kk = bk.current.getBoundingClientRect(),
              Fk = wk.current.offsetHeight,
              Bk = Math.min(NF, window.innerWidth - 32),
              Rk = Math.min(Math.max(16, kk.left), window.innerWidth - Bk - 16),
              tk = kk.bottom + HF + Fk < window.innerHeight;
            yk({
              left: Rk,
              top: tk ? kk.bottom + HF : Math.max(16, kk.top - HF - Fk)
            })
          }), [Vk]), (0, ek.jsxs)(ek.Fragment, {
            children: [(0, ek.jsx)("button", {
              type: "button",
              ref: bk,
              className: "DocsTypeLink",
              "aria-expanded": Vk,
              "aria-describedby": Vk ? vk : void 0,
              onMouseEnter: ik,
              onMouseLeave: Yk,
              onFocus: ik,
              onBlur: Yk,
              onKeyDown: kk => {
                "Tab" === kk.key && !kk.shiftKey && sk.current && (kk.preventDefault(), sk.current.focus())
              },
              onClick: ik,
              children: Fk
            }), Vk && (0, dk.createPortal)((0, ek.jsxs)("span", {
              ref: wk,
              id: vk,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Ak ? {
                left: Ak.left,
                top: Ak.top,
                maxWidth: NF
              } : {
                visibility: "hidden"
              },
              onMouseEnter: ik,
              onMouseLeave: Yk,
              onFocus: ik,
              onBlur: Yk,
              children: [(0, ek.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, ek.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: Fk
                }), ak && (0, ek.jsxs)(Xk.b, {
                  ref: sk,
                  className: "DocsTypePopoverLink",
                  to: pk(tk, zk(ak)),
                  onClick: () => {
                    Jk(!1)
                  },
                  onKeyDown: kk => {
                    if ("Tab" === kk.key) {
                      var Fk;
                      if (kk.preventDefault(), kk.shiftKey || !bk.current || ! function(kk, Fk) {
                          const Bk = [...document.querySelectorAll(uF)],
                            Rk = Bk.slice(Bk.indexOf(kk) + 1).find((kk => kk.getClientRects().length > 0 && !(null !== Fk && void 0 !== Fk && Fk.contains(kk))));
                          return null === Rk || void 0 === Rk || Rk.focus(), void 0 !== Rk
                        }(bk.current, wk.current)) null === (Fk = bk.current) || void 0 === Fk || Fk.focus();
                      kk.shiftKey || Jk(!1)
                    }
                  },
                  children: [zk(ak).title, (0, ek.jsx)(fk, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, ek.jsx)(Ok, {
                lang: "ts",
                code: Bk,
                compact: !0
              })]
            }), null !== Wk && void 0 !== Wk ? Wk : document.body)]
          })
        }
        var UF = Bk(182),
          cF = Bk(4496),
          GF = Bk(4503),
          TF = Bk(4507);
        const rF = {
          progressBar: {
            Uk: 30,
            Gk: .075,
            Tk: 5,
            rk: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Pk: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            qk: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Ck: !0,
            scale: 3,
            rotation: 15,
            Zk: !1
          },
          gravityBar: {
            Uk: 30,
            xk: .25,
            jk: 3,
            lk: .8,
            gravity: 1,
            nk: 1.5,
            Ik: 8,
            Qk: 4,
            rk: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            FF: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            RF: 5,
            tF: 1200,
            aF: .15,
            XF: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var DF = Bk(279),
          zF = Bk(1892);

        function PF(kk) {
          return kk.startsWith("fa-")
        }
        const hF = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          qF = {
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

        function CF(kk) {
          return "string" === typeof kk ? "text" : "entityName" in kk || "translationKey" in kk ? "other" : (0, DF.xb)(kk) ? "progressBar" : (0, DF.tb)(kk) ? "keyBinding" : "icon" in kk ? "icon" : "str" in kk && "string" === typeof kk.str ? "text" : "other"
        }
        const ZF = [{
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
          pF = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...ZF],
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
                options: zF.e
              },
              isRequired: !0
            }, ...ZF],
            other: []
          };

        function KF(kk) {
          return "string" === typeof kk ? {
            str: kk
          } : kk
        }

        function xF(kk, Fk) {
          let Bk = KF(kk);
          for (const Rk of Fk) Bk = Bk && "object" === typeof Bk ? Bk[Rk] : void 0;
          return Bk
        }

        function jF(kk, Fk, Bk) {
          const Rk = (kk, tk) => {
            var ak;
            const Xk = Fk[tk],
              bk = {
                ...kk
              };
            if (tk === Fk.length - 1) return void 0 === Bk ? delete bk[Xk] : bk[Xk] = Bk, bk;
            const wk = Rk(null !== (ak = kk[Xk]) && void 0 !== ak ? ak : {}, tk + 1);
            return 0 === Object.keys(wk).length ? delete bk[Xk] : bk[Xk] = wk, bk
          };
          return function(kk) {
            const Fk = Object.keys(kk);
            return "string" === typeof kk.str && 1 === Fk.length ? kk.str : kk
          }(Rk(KF(kk), 0))
        }

        function lF(kk, Fk) {
          const Bk = CF(kk),
            Rk = pF[Bk].find((kk => kk.path.join(".") === Fk.join("."))),
            tk = null !== Rk && void 0 !== Rk && Rk.isRequired && "other" !== Bk ? xF(qF[Bk], Fk) : void 0;
          return jF(kk, Fk, tk)
        }

        function nF(kk) {
          switch (CF(kk)) {
            case "text":
              return String(xF(kk, ["str"]));
            case "icon":
              return String(xF(kk, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(xF(kk,["progress"])))}%`;
            case "keyBinding":
              return String(xF(kk, ["action"]));
            case "other":
              return JSON.stringify(kk)
          }
        }
        const IF = /^[A-Za-z_$][\w$]*$/;

        function QF(kk) {
          if (Array.isArray(kk)) return `[${kk.map(QF).join(", ")}]`;
          if (kk && "object" === typeof kk) {
            const Fk = Object.entries(kk).map((kk => {
              let [Fk, Bk] = kk;
              return `${IF.test(Fk)?Fk:JSON.stringify(Fk)}: ${QF(Bk)}`
            }));
            return 0 === Fk.length ? "{}" : `{ ${Fk.join(", ")} }`
          }
          return JSON.stringify(kk)
        }

        function kB(kk) {
          const Fk = kk.map(QF),
            Bk = `[${Fk.join(", ")}]`;
          return Bk.length <= 60 ? Bk : `[\n${Fk.map((kk=>`    ${kk},`)).join("\n")}\n]`
        }
        const FB = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function BB(kk) {
          let Fk = "";
          for (let tk = 0; tk < kk.length; tk++) {
            const ak = kk[tk];
            if ("\\" === ak) {
              var Bk;
              const Rk = null !== (Bk = kk[tk + 1]) && void 0 !== Bk ? Bk : "";
              Fk += "'" === Rk ? "'" : ak + Rk, tk++
            } else if ('"' === ak) Fk += '\\"';
            else {
              var Rk;
              Fk += null !== (Rk = FB[ak]) && void 0 !== Rk ? Rk : ak
            }
          }
          return `"${Fk}"`
        }

        function RB(kk) {
          if ("string" === typeof kk) return !0;
          if (!kk || "object" !== typeof kk || Array.isArray(kk)) return !1;
          const Fk = kk;
          return "ProgressBar" === Fk.type ? "number" === typeof Fk.progress : "StyledKeyBinding" === Fk.type ? zF.e.includes(Fk.action) : "string" === typeof Fk.icon || "string" === typeof Fk.str || "string" === typeof Fk.entityName || "string" === typeof Fk.translationKey
        }

        function tB(kk) {
          let Fk;
          try {
            Fk = function(kk) {
              let Fk = "",
                Bk = "",
                Rk = 0;
              const tk = () => {
                Fk += Bk.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), Bk = ""
              };
              for (; Rk < kk.length;) {
                const ak = kk.slice(Rk).search(/["'`]|\/\//);
                if (-1 === ak) {
                  Bk += kk.slice(Rk);
                  break
                }
                Bk += kk.slice(Rk, Rk + ak);
                const Xk = Rk + ak,
                  bk = kk[Xk];
                if ("/" === bk) {
                  const Fk = kk.indexOf("\n", Xk);
                  Rk = -1 === Fk ? kk.length : Fk;
                  continue
                }
                if (tk(), "`" === bk) throw new Error("Use quotes rather than template strings.");
                let wk = Xk + 1;
                for (; wk < kk.length && kk[wk] !== bk;) wk += "\\" === kk[wk] ? 2 : 1;
                if (wk >= kk.length) throw new Error("A string is missing its closing quote.");
                const dk = kk.slice(Xk + 1, wk);
                Fk += BB(dk), Rk = wk + 1
              }
              return tk(), JSON.parse(Fk)
            }(kk.trim())
          } catch (Rk) {
            return {
              parts: null,
              error: Rk instanceof SyntaxError ? "This isn't a valid array yet." : Rk.message
            }
          }
          if (!Array.isArray(Fk)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const Bk = Fk.findIndex((kk => !RB(kk)));
          return -1 !== Bk ? {
            parts: null,
            error: `Part ${Bk+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: Fk,
            error: null
          }
        }
        const aB = 1 / UF.h.clientTicksPerSecond,
          XB = 700,
          bB = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          wB = {
            progressBar: rF.progressBar.Pk,
            timedClick: rF.timedClick.icon,
            gravityBar: rF.gravityBar.icon,
            precisionBar: rF.precisionBar.icon,
            rhythmClick: rF.rhythmClick.icon
          };

        function dB(kk) {
          let {
            type: Fk
          } = kk;
          const [Bk, tk] = (0, Rk.useState)("ready"), [Xk, bk] = (0, Rk.useState)(1), [wk, dk] = (0, Rk.useState)(!0), sk = (0, Rk.useRef)(null), Vk = (0, Rk.useRef)(null), Jk = (0, Rk.useRef)(null), Ak = (0, Rk.useRef)(new Set), yk = (0, Rk.useRef)(!1), mk = wB[Fk], Wk = (0, Rk.useMemo)((() => ({
            getState: () => {
              var kk, Fk;
              return null !== (kk = null === (Fk = Jk.current) || void 0 === Fk ? void 0 : Fk.getState()) && void 0 !== kk ? kk : bB
            },
            onFrame: kk => (Ak.current.add(kk), () => {
              Ak.current.delete(kk)
            })
          })), []);
          (0, Rk.useEffect)((() => {
            const kk = sk.current,
              Fk = Vk.current;
            if (!kk || !Fk) return;
            const Bk = new ResizeObserver((() => {
              bk(kk.clientWidth / Math.max(1, Fk.offsetWidth))
            }));
            return Bk.observe(kk), () => {
              Bk.disconnect()
            }
          }), []), (0, Rk.useEffect)((() => {
            var kk;
            if ("playing" !== Bk) return;
            let Rk = !1;
            const ak = new TF.d[Fk](rF[Fk], (kk => {
              Rk = !0, dk(!1), tk(kk ? "succeeded" : "failed")
            }), (() => {}));
            Jk.current = ak;
            let Xk = 0,
              bk = performance.now(),
              wk = requestAnimationFrame((function kk(Fk) {
                for (Xk += Math.min(.25, (Fk - bk) / 1e3), bk = Fk; Xk >= aB && !Rk;) Xk -= aB, ak.handleTick(aB);
                for (const Bk of Ak.current) Bk();
                Rk || (wk = requestAnimationFrame(kk))
              }));
            return null === (kk = sk.current) || void 0 === kk || kk.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(wk), ak.tearDown(), Jk.current = null, yk.current = !1
            }
          }), [Bk, Fk]), (0, Rk.useEffect)((() => {
            if (wk) return;
            const kk = setTimeout((() => {
              dk(!0)
            }), XB);
            return () => {
              clearTimeout(kk)
            }
          }), [wk]);
          const vk = kk => {
            var Fk;
            "playing" === Bk && yk.current !== kk && (yk.current = kk, null === (Fk = Jk.current) || void 0 === Fk || Fk.handleMouseInput(kk))
          };
          return (0, ek.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, ek.jsxs)("div", {
              ref: sk,
              className: ak()("DocsQteStage", {
                Playing: "playing" === Bk
              }),
              tabIndex: "playing" === Bk ? 0 : -1,
              role: "playing" === Bk ? "button" : void 0,
              "aria-label": "playing" === Bk ? `${Fk} quick time event: click or press Space` : void 0,
              onPointerDown: kk => {
                0 === kk.button && vk(!0)
              },
              onPointerUp: () => {
                vk(!1)
              },
              onPointerLeave: () => {
                vk(!1)
              },
              onPointerCancel: () => {
                vk(!1)
              },
              onKeyDown: kk => {
                "playing" !== Bk || " " !== kk.key && "Enter" !== kk.key || (kk.preventDefault(), vk(!0))
              },
              onKeyUp: kk => {
                "playing" !== Bk || " " !== kk.key && "Enter" !== kk.key || vk(!1)
              },
              children: [(0, ek.jsx)("div", {
                ref: Vk,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Xk})`
                },
                children: "playing" === Bk && (0, ek.jsx)(GF.b.Provider, {
                  value: Wk,
                  children: (0, ek.jsx)(cF.d, {
                    qte: {
                      type: Fk,
                      parameters: rF[Fk]
                    }
                  })
                })
              }), "playing" !== Bk && (0, ek.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== Bk && (0, ek.jsxs)("div", {
                  className: ak()("DocsQteResult", "succeeded" === Bk ? "Succeeded" : "Failed"),
                  children: [(0, ek.jsx)(fk, {
                    name: "succeeded" === Bk ? "check" : "cross",
                    isTinted: !0
                  }), (0, ek.jsx)("span", {
                    children: "succeeded" === Bk ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, ek.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !wk,
                  onClick: () => {
                    tk("playing")
                  },
                  children: [(0, ek.jsx)(fk, {
                    name: "ready" === Bk ? "play" : "replay"
                  }), (0, ek.jsx)("span", {
                    children: "ready" === Bk ? `Try ${Fk}` : "Play again"
                  })]
                })]
              })]
            }), mk && !PF(mk) && (0, ek.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, ek.jsx)("code", {
                children: mk
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function sB(kk) {
          let {
            level: Fk,
            text: Bk,
            anchor: Rk,
            className: tk
          } = kk;
          const Xk = `h${Math.min(Fk,6)}`;
          return (0, ek.jsxs)(Xk, {
                id: Rk,
                className: ak()("DocsHeading", tk),
                children: [(0, ek.jsx)(LF, {
                      text: Bk
                    }), (0, ek.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Rk}`,
                        "aria-label": `Link to ${Bk.replace(/`/g,"")}`,children:"#"})]})}function VB(kk){let{items:Fk,ordered:Bk}=kk;const Rk=Bk?"ol":"ul";return(0,ek.jsx)(Rk,{className:"DocsList",children:Fk.map(((kk,Fk)=>(0,ek.jsxs)("li",{children:[(0,ek.jsx)(LF,{text:kk.text}),kk.children.length>0&&(0,ek.jsx)(VB,{items:kk.children,ordered:Bk})]},Fk)))})}function JB(kk){const Fk=kk[0],Bk="paragraph"===(null===Fk||void 0===Fk?void 0:Fk.kind)?Fk.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(Bk)?"warning":/^\*\*(tip|prefer)/.test(Bk)?"tip":"note"}function AB(kk){let{block:Fk}=kk;switch(Fk.kind){case"heading":return(0,ek.jsx)(sB,{level:Fk.level,text:Fk.text,anchor:Fk.anchor});case"paragraph":return(0,ek.jsx)("p",{children:(0,ek.jsx)(LF,{text:Fk.text})});case"code":{const kk="ts"===Fk.lang?function(kk){const Fk=kk.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return Fk&&Object.hasOwn(rF,Fk[1])?Fk[1]:null}(Fk.code):null;return(0,ek.jsxs)(ek.Fragment,{children:[(0,ek.jsx)(Ok,{code:Fk.code,lang:Fk.lang}),kk&&(0,ek.jsx)(dB,{type:kk})]})}case"table":return(0,ek.jsx)("div",{className:"DocsTableScroll",children:(0,ek.jsxs)("table",{className:"DocsTable",children:[(0,ek.jsx)("thead",{children:(0,ek.jsx)("tr",{children:Fk.header.map(((kk,Fk)=>(0,ek.jsx)("th",{children:(0,ek.jsx)(LF,{text:kk})},Fk)))})}),(0,ek.jsx)("tbody",{children:Fk.rows.map(((kk,Fk)=>(0,ek.jsx)("tr",{children:kk.map(((kk,Fk)=>(0,ek.jsx)("td",{children:(0,ek.jsx)(LF,{text:kk})},Fk)))},Fk)))})]})});case"list":return(0,ek.jsx)(VB,{items:Fk.items,ordered:Fk.ordered});case"quote":return(0,ek.jsx)("aside",{className:ak()("DocsCallout",JB(Fk.blocks)),children:(0,ek.jsx)(eB,{blocks:Fk.blocks})});case"rule":return(0,ek.jsx)("hr",{className:"DocsRule"})}}function eB(kk){let{blocks:Fk}=kk;return(0,ek.jsx)(ek.Fragment,{children:Fk.map(((kk,Fk)=>(0,ek.jsx)(AB,{block:kk},Fk)))})}var yB=Bk(4476),fB=Bk(4480);function mB(kk){return"blocks"===kk||"items"===kk}const WB=new Map;function vB(kk){let Fk=WB.get(kk);return Fk||(Fk=function(kk){const Fk={entries:[],legend:[],notes:[],examples:[]};let Bk=!1;for(const ak of kk.split(/\r?\n/).slice(1)){if(ak.startsWith("#")){const kk=ak.replace(/^# ?/,""),Rk=kk.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Rk?Fk.legend.push({code:Rk[1],meaning:Rk[2],usage:Rk[3].trim()}):/^Examples:/.test(kk.trim())?Bk=!0:Bk&&kk.trim()?Fk.examples.push(kk.trim()):kk.trim()&&!/^\s/.test(kk)&&Fk.notes.push(kk.trim());continue}const kk=ak.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Rk,tk;kk&&Fk.entries.push({name:kk[1],variants:null!==(Rk=null===(tk=kk[2])||void 0===tk?void 0:tk.split(","))&&void 0!==Rk?Rk:[]})}return Fk}("blocks"===kk?yB:fB),WB.set(kk,Fk)),Fk}function iB(kk){let{className:Fk,value:Bk,placeholder:Rk,label:tk,onChange:ak,count:Xk,children:bk}=kk;return(0,ek.jsxs)("div",{className:Fk,children:[(0,ek.jsx)(fk,{name:"magnifying-glass"}),(0,ek.jsx)("input",{type:"search",value:Bk,placeholder:Rk,"aria-label":tk,onChange:kk=>{ak(kk.target.value)}}),bk,Xk&&(0,ek.jsxs)("span",{className:"DocsFilterCount",children:[Xk.visible," of ",Xk.total]})]})}var YB=Bk(1028);function oB(kk){const Fk=kk.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return Fk?Fk[2]:null}function LB(kk){return"paragraph"===kk.kind&&""===kk.text.trim()}function OB(kk){const Fk={name:kk.heading.text,description:[],params:[],returns:null};let Bk="description";for(const tk of kk.blocks)if(!LB(tk))if("heading"===tk.kind&&/^Parameters:?$/.test(tk.text))Bk="params";else if("heading"===tk.kind&&/^Returns:?$/.test(tk.text))Bk="returns",Fk.returns={type:"",description:[]};else if("params"!==Bk||"table"!==tk.kind){if("returns"===Bk&&"paragraph"===tk.kind&&""===Fk.returns.type){const kk=oB(tk.text);if(null!==kk){Fk.returns.type=kk.replaceAll("\\|","|");continue}}"returns"===Bk?Fk.returns.description.push(tk):Fk.description.push(tk)}else for(const[kk,Bk,ak]of tk.rows){var Rk;Fk.params.push({name:kk,type:null!==(Rk=oB(Bk))&&void 0!==Rk?Rk:Bk,description:null!==ak&&void 0!==ak?ak:""})}return Fk}const EB=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function SB(kk){return kk.filter((kk=>!LB(kk)))}const NB=/^[\w][\w .'&!:()-]*$/,HB=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function uB(kk){var Fk;if("code"===kk.kind&&"text"===kk.lang){const Fk=kk.code.split("\n").map((kk=>kk.trim())).filter(Boolean);return Fk.length>0&&Fk.every((kk=>NB.test(kk)))?Fk.map((kk=>({name:kk}))):null}return"paragraph"===kk.kind&&HB.test(kk.text.trim())?[...kk.text.matchAll(/`([ ^ `]+)` / g)].flatMap((kk => kk[1].split(/,\s*/).map((kk => ({
                              name: kk.trim()
                            }))))): "table" === kk.kind && null !== (Fk = kk.header[0]) && void 0 !== Fk && Fk.startsWith("Song") ? kk.rows.map((kk => {
                              let [Fk, Bk] = kk;
                              return {
                                name: Fk.replace(/`/g, ""),
                                caption: Bk
                              }
                            })) : null
                          }

                          function MB(kk) {
                            const Fk = [];
                            for (const Bk of kk) {
                              const kk = uB(Bk),
                                Rk = Fk.at(-1),
                                tk = "table" === Bk.kind;
                              kk ? "names" === (null === Rk || void 0 === Rk ? void 0 : Rk.kind) && Rk.isSongs === tk ? Rk.names.push(...kk) : Fk.push({
                                kind: "names",
                                names: kk,
                                isSongs: tk
                              }) : Fk.push({
                                kind: "block",
                                block: Bk
                              })
                            }
                            return Fk
                          }
                          const gB = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function UB(kk, Fk) {
                            return `${gB[kk]}-${(0,Ek.m)(Fk)}`
                          }
                          const cB = new WeakMap;

                          function GB(kk, Fk, Bk) {
                            let Rk = cB.get(Fk);
                            if (!Rk) {
                              Rk = new Map;
                              const Bk = new Set;
                              for (const tk of (0, Ek.q)(Fk)) {
                                const Fk = MB(SB(tk.blocks)).map((Fk => {
                                  if ("block" === Fk.kind) return Fk;
                                  return {
                                    kind: "names",
                                    names: Fk.names.map((Fk => {
                                      var Rk, ak;
                                      const Xk = UB(kk, Fk.name);
                                      let bk = Xk;
                                      for (let kk = 2; Bk.has(bk); kk++) bk = `${Xk}-${kk}`;
                                      return Bk.add(bk), {
                                        ...Fk,
                                        anchor: bk,
                                        heading: null !== (Rk = null === (ak = tk.heading) || void 0 === ak ? void 0 : ak.text) && void 0 !== Rk ? Rk : ""
                                      }
                                    })),
                                    isSongs: Fk.isSongs
                                  }
                                }));
                                Rk.set(tk.blocks, Fk)
                              }
                              cB.set(Fk, Rk)
                            }
                            const tk = Rk.get(Bk);
                            if (!tk) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return tk
                          }
                          const TB = "/textures/docs/skinPreviews",
                            rB = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var DB = Bk(3980),
                            zB = Bk(4002);

                          function PB(kk) {
                            return Object.hasOwn(DB.f, kk) ? DB.f[kk] : null
                          }
                          const hB = {
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
                            blendMode: zB.d.Standard
                          };

                          function qB(kk, Fk, Bk) {
                            return Fk + (Bk - Fk) * kk()
                          }

                          function CB(kk, Fk, Bk) {
                            return kk + (Fk - kk) * Bk
                          }

                          function ZB(kk) {
                            return kk.length > 0 && "timeFraction" in kk[0]
                          }

                          function pB(kk, Fk) {
                            if (0 === kk.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!ZB(kk.colorGradients)) {
                              const Bk = kk.colorGradients,
                                {
                                  color: Rk
                                } = Bk[Math.floor(Fk() * Bk.length) % Bk.length];
                              return [{
                                at: 0,
                                colour: [Rk[0] / 255, Rk[1] / 255, Rk[2] / 255, 1]
                              }]
                            }
                            return [...kk.colorGradients].sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)).map((kk => {
                              var Bk, Rk, tk;
                              const ak = kk.minColor,
                                Xk = null !== (Bk = kk.maxColor) && void 0 !== Bk ? Bk : ak,
                                bk = Fk(),
                                wk = [CB(ak[0], Xk[0], bk) / 255, CB(ak[1], Xk[1], bk) / 255, CB(ak[2], Xk[2], bk) / 255, CB(null !== (Rk = ak[3]) && void 0 !== Rk ? Rk : 1, null !== (tk = Xk[3]) && void 0 !== tk ? tk : 1, bk)];
                              return {
                                at: kk.timeFraction,
                                colour: wk
                              }
                            }))
                          }

                          function KB(kk, Fk, Bk, Rk) {
                            const tk = qB(Rk, kk.minEmitPower, kk.maxEmitPower),
                              ak = Fk => qB(Rk, Math.min(kk.dir1[Fk], kk.dir2[Fk]), Math.max(kk.dir1[Fk], kk.dir2[Fk])) * tk,
                              Xk = [...kk.velocityGradients].sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)).map((kk => ({
                                at: kk.timeFraction,
                                factor: qB(Rk, kk.factor, kk.factor2)
                              })));
                            return {
                              pos: [qB(Rk, Fk[0], Bk[0]), qB(Rk, Fk[1], Bk[1]), qB(Rk, Fk[2], Bk[2])],
                              dir: [ak(0), ak(1), ak(2)],
                              age: 0,
                              life: qB(Rk, kk.minLifeTime, kk.maxLifeTime),
                              size: qB(Rk, kk.minSize, kk.maxSize),
                              colours: pB(kk, Rk),
                              velocityFactors: Xk
                            }
                          }

                          function xB(kk, Fk, Bk, Rk) {
                            if (Fk < kk[0].at) return Bk(Math.min(1, kk.length - 1));
                            for (let tk = 0; tk < kk.length - 1; tk++)
                              if (Fk <= kk[tk + 1].at) {
                                const ak = kk[tk + 1].at - kk[tk].at;
                                return Rk(Bk(tk), Bk(tk + 1), ak > 0 ? (Fk - kk[tk].at) / ak : 1)
                              } return Bk(kk.length - 1)
                          }

                          function jB(kk) {
                            return xB(kk.colours, kk.age / kk.life, (Fk => kk.colours[Fk].colour), ((kk, Fk, Bk) => [CB(kk[0], Fk[0], Bk), CB(kk[1], Fk[1], Bk), CB(kk[2], Fk[2], Bk), CB(kk[3], Fk[3], Bk)]))
                          }

                          function lB(kk, Fk, Bk) {
                            if (kk.age += Bk, kk.age >= kk.life) return !1;
                            const Rk = function(kk) {
                              return 0 === kk.velocityFactors.length ? 1 : xB(kk.velocityFactors, kk.age / kk.life, (Fk => kk.velocityFactors[Fk].factor), CB)
                            }(kk) * Bk;
                            for (let ak = 0; ak < 3; ak++) {
                              var tk;
                              kk.pos[ak] += kk.dir[ak] * Rk, kk.dir[ak] += (null !== (tk = Fk[ak]) && void 0 !== tk ? tk : 0) * Bk
                            }
                            return !0
                          }

                          function nB(kk) {
                            return String(Math.round(1e6 * kk) / 1e6)
                          }

                          function IB(kk) {
                            return `[${kk.map(nB).join(", ")}]`
                          }

                          function QB(kk, Fk) {
                            const Bk = `${Fk}    `;
                            return `[\n${(ZB(kk)?kk.map((kk=>{const Fk=[`${Bk}    timeFraction: ${nB(kk.timeFraction)},`,`${Bk}    minColor: ${IB(kk.minColor)},`];return kk.maxColor&&Fk.push(`${Bk}    maxColor: ${IB(kk.maxColor)},`),`${Bk}{\n${Fk.join("\n")}\n${Bk}},`})):kk.map((kk=>`
                            $ {
                              Bk
                            } {
                              color: $ {
                                IB(kk.color)
                              }
                            }, `))).join("\n")}\n${Fk}]`
                          }
                          const kR = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            FR = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const BR = .6;

                          function RR(kk, Fk) {
                            return `${Fk?"song":"sound"}:${kk}`
                          }
                          let tR = {
                              track: null,
                              volume: BR
                            },
                            aR = null,
                            XR = 0,
                            bR = 0;
                          const wR = new Set;

                          function dR(kk) {
                            tR = {
                              ...tR,
                              ...kk
                            }, wR.forEach((kk => {
                              kk()
                            }))
                          }

                          function sR(kk) {
                            tR.track && dR({
                              track: {
                                ...tR.track,
                                ...kk
                              }
                            })
                          }

                          function VR(kk) {
                            const [Fk, Bk] = (0, Rk.useState)((() => kk(tR))), tk = (0, Rk.useRef)(kk);
                            return tk.current = kk, (0, Rk.useEffect)((() => {
                              const kk = () => {
                                Bk((() => tk.current(tR)))
                              };
                              return wR.add(kk), kk(), () => {
                                wR.delete(kk)
                              }
                            }), []), Fk
                          }

                          function JR() {
                            XR++;
                            const kk = aR;
                            aR = null, null === kk || void 0 === kk || kk.stop()
                          }

                          function AR(kk, Fk) {
                            let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            JR();
                            const tk = XR,
                              {
                                track: ak
                              } = tR,
                              Xk = ak && ak.name === kk && ak.isSong === Fk ? ak.duration : 0;
                            bR = Rk, dR({
                              track: {
                                name: kk,
                                isSong: Fk,
                                status: "loading",
                                duration: Xk
                              }
                            }), Promise.all([Bk.e(215), Bk.e(239)]).then((() => Bk(39218))).then((Bk => {
                              let {
                                playDocsSound: ak
                              } = Bk;
                              tk === XR && (aR = ak(kk, Fk, tR.volume, Rk, {
                                onPlay: kk => {
                                  tk === XR && sR({
                                    status: "playing",
                                    duration: kk
                                  })
                                },
                                onEnd: kk => {
                                  var Fk, Bk;
                                  tk === XR && (aR = null, kk ? dR({
                                    track: null
                                  }) : (bR = null !== (Fk = null === (Bk = tR.track) || void 0 === Bk ? void 0 : Bk.duration) && void 0 !== Fk ? Fk : 0, sR({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((Fk => {
                              console.error(`Could not play docs sound ${kk}`, Fk), tk === XR && dR({
                                track: null
                              })
                            }))
                          }

                          function eR() {
                            const {
                              track: kk
                            } = tR;
                            if (!kk) return;
                            if ("playing" === kk.status && aR) return bR = aR.rW(), aR.pause(), void sR({
                              status: "paused"
                            });
                            if ("loading" === kk.status) return JR(), void sR({
                              status: "paused"
                            });
                            if (aR) return void aR.resume();
                            const Fk = kk.duration > 0 && bR >= kk.duration - .05;
                            AR(kk.name, kk.isSong, Fk ? 0 : bR)
                          }

                          function yR() {
                            var kk;
                            return aR && "playing" === (null === (kk = tR.track) || void 0 === kk ? void 0 : kk.status) ? aR.rW() : bR
                          }

                          function fR(kk) {
                            var Fk;
                            null === (Fk = aR) || void 0 === Fk || Fk.setVolume(kk), dR({
                              volume: kk
                            })
                          }

                          function mR() {
                            JR(), bR = 0, dR({
                              track: null
                            })
                          }
                          const WR = (0, Rk.createContext)(null);
                          let vR = null;

                          function iR() {
                            const [kk, Fk] = (0, Rk.useState)(null);
                            return (0, Rk.useEffect)((() => {
                              let kk = !1;
                              return vR ??= Promise.all([Bk.e(69), Bk.e(72), Bk.e(71), Bk.e(70), Bk.e(196), Bk.e(96), Bk.e(220)]).then((() => Bk(39212))), vR.then((Bk => {
                                kk || Fk(Bk)
                              }), (kk => {
                                console.error("Could not load the docs gallery's textures", kk), vR = null
                              })), () => {
                                kk = !0
                              }
                            }), []), kk
                          }
                          const YR = 24,
                            oR = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function LR(kk, Fk) {
                            const Bk = "skins" === kk ? function(kk, Fk) {
                              const Bk = rB.find((Fk => kk.startsWith(Fk.heading)));
                              return Bk ? function(kk, Fk) {
                                return `${kk}-${Fk}`
                              }(Bk.prefix, Fk) : null
                            }(Fk.heading, Fk.name) : null;
                            return null === Bk ? null : `${TB}/${Bk}.webp`
                          }

                          function OR(kk) {
                            let {
                              kind: Fk,
                              entry: Bk,
                              assets: tk,
                              renderedUrl: Xk
                            } = kk;
                            const {
                              name: bk
                            } = Bk, [wk, dk] = (0, Rk.useState)(!1);
                            if ("icons" === Fk && PF(bk)) return (0, ek.jsx)(YB.d, {
                              className: "DocsTileIcon",
                              name: bk
                            });
                            let sk = null;
                            var Vk;
                            if ("icons" === Fk) sk = null !== (Vk = null === tk || void 0 === tk ? void 0 : tk.getIngameIconUrl(bk)) && void 0 !== Vk ? Vk : null;
                            else if ("particles" === Fk) {
                              var Jk, Ak, yk;
                              sk = null !== (Jk = null === tk || void 0 === tk ? void 0 : tk.getParticleTextureUrl(null !== (Ak = null === (yk = PB(bk)) || void 0 === yk ? void 0 : yk.texture) && void 0 !== Ak ? Ak : bk)) && void 0 !== Jk ? Jk : null
                            } else "skins" === Fk && (sk = null !== Xk && void 0 !== Xk ? Xk : oR.test(bk) ? `/textures/charSkins/previews/${bk}_preview.png` : null);
                            return !sk || wk ? (0, ek.jsx)(fk, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === Fk ? "person" : "image"
                            }) : (0, ek.jsx)("img", {
                              className: ak()("DocsTileImage", {
                                Pixelated: "skins" !== Fk
                              }),
                              src: sk,
                              srcSet: sk === Xk ? `${sk} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${sk}`), dk(!0)
                              }
                            })
                          }

                          function ER(kk) {
                            let {
                              entry: Fk,
                              isSong: Bk
                            } = kk;
                            const Rk = VR((kk => {
                                let {
                                  track: Rk
                                } = kk;
                                return (null === Rk || void 0 === Rk ? void 0 : Rk.name) === Fk.name && Rk.isSong === Bk ? Rk.status : null
                              })),
                              tk = null !== Rk && "paused" !== Rk;
                            return (0, ek.jsxs)("button", {
                              type: "button",
                              id: Fk.anchor,
                              className: ak()("DocsSoundTile", {
                                Playing: tk
                              }),
                              "data-docs-track": RR(Fk.name, Bk),
                              "aria-label": tk ? `Pause ${Fk.name}` : `Play ${Fk.name}`,
                              onClick: () => {
                                null !== Rk ? eR() : AR(Fk.name, Bk)
                              },
                              children: [(0, ek.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, ek.jsx)(fk, {
                                  name: tk ? "pause" : "play"
                                })
                              }), (0, ek.jsx)("code", {
                                className: "DocsSoundName",
                                children: Fk.name
                              }), Fk.caption && (0, ek.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: Fk.caption
                              })]
                            })
                          }

                          function SR(kk) {
                            let {
                              kind: Fk,
                              names: Bk,
                              isSongs: tk
                            } = kk;
                            const Xk = iR(),
                              [bk, wk] = Wk(),
                              dk = !1 === (null === bk || void 0 === bk ? void 0 : bk.failed) ? bk.text : null,
                              sk = (0, Rk.useContext)(WR),
                              [Vk, Jk] = (0, Rk.useState)(""),
                              Ak = Vk.trim().toLowerCase(),
                              yk = Ak ? Bk.filter((kk => kk.name.toLowerCase().includes(Ak))) : Bk;
                            return (0, ek.jsxs)("div", {
                              className: "DocsGallery",
                              children: [Bk.length > YR && (0, ek.jsx)(iB, {
                                className: "DocsGalleryFilter",
                                value: Vk,
                                placeholder: `Filter ${Bk.length} names\u2026`,
                                label: "Filter names",
                                onChange: Jk,
                                count: Ak ? {
                                  visible: yk.length,
                                  total: Bk.length
                                } : null
                              }), (0, ek.jsx)("div", {
                                className: ak()("DocsGalleryGrid", `Kind-${Fk}`, {
                                  Songs: tk
                                }),
                                children: yk.map((kk => {
                                  if ("sounds" === Fk) return (0, ek.jsx)(ER, {
                                    entry: kk,
                                    isSong: tk
                                  }, kk.anchor);
                                  if (sk && "particles" === Fk && PB(kk.name)) return (0, ek.jsxs)("button", {
                                    type: "button",
                                    id: kk.anchor,
                                    className: ak()("DocsTile Previewable", {
                                      Copied: dk === kk.name
                                    }),
                                    title: `Play "${kk.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      sk(kk.name), wk(kk.name)
                                    },
                                    children: [(0, ek.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, ek.jsx)(OR, {
                                        kind: Fk,
                                        entry: kk,
                                        assets: Xk,
                                        renderedUrl: null
                                      }), (0, ek.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, ek.jsx)(fk, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, ek.jsx)("span", {
                                      className: "DocsTileName",
                                      children: dk === kk.name ? "Copied!" : kk.name
                                    })]
                                  }, kk.anchor);
                                  const Bk = LR(Fk, kk);
                                  return (0, ek.jsxs)("button", {
                                    type: "button",
                                    id: kk.anchor,
                                    className: ak()("DocsTile", {
                                      Copied: dk === kk.name
                                    }),
                                    title: `Copy "${kk.name}"`,
                                    onClick: () => {
                                      wk(kk.name)
                                    },
                                    children: [(0, ek.jsx)("span", {
                                      className: ak()("DocsTilePreview", {
                                        Rendered: null !== Bk
                                      }),
                                      children: (0, ek.jsx)(OR, {
                                        kind: Fk,
                                        entry: kk,
                                        assets: Xk,
                                        renderedUrl: Bk
                                      })
                                    }), (0, ek.jsx)("span", {
                                      className: "DocsTileName",
                                      children: dk === kk.name ? "Copied!" : kk.name
                                    })]
                                  }, kk.anchor)
                                }))
                              })]
                            })
                          }

                          function NR(kk) {
                            let {
                              kind: Fk,
                              content: Bk,
                              blocks: Rk
                            } = kk;
                            return (0, ek.jsx)(ek.Fragment, {
                              children: GB(Fk, Bk, Rk).map(((kk, Bk) => "block" === kk.kind ? (0, ek.jsx)(AB, {
                                block: kk.block
                              }, Bk) : (0, ek.jsx)(SR, {
                                kind: Fk,
                                names: kk.names,
                                isSongs: kk.isSongs
                              }, Bk)))
                            })
                          }
                          const HR = [{
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

                          function uR(kk) {
                            let {
                              cards: Fk = HR,
                              label: Bk = "Start here"
                            } = kk;
                            const tk = (0, Rk.useContext)(eF);
                            return (0, ek.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": Bk,
                              children: Fk.map((kk => {
                                let {
                                  pageId: Fk,
                                  countNoun: Bk
                                } = kk;
                                const Rk = zk(Fk);
                                return (0, ek.jsxs)(Xk.b, {
                                  to: pk(tk, Rk),
                                  className: "DocsLandingCard",
                                  children: [(0, ek.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, ek.jsx)(fk, {
                                      name: Rk.icon
                                    })
                                  }), (0, ek.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Rk.title
                                  }), (0, ek.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Rk.summary
                                  }), Bk && (0, ek.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [hk(Rk).sections.length, " ", Bk]
                                  })]
                                }, Fk)
                              }))
                            })
                          }
                          const MR = 240;

                          function gR(kk) {
                            let {
                              faces: Fk
                            } = kk;
                            return (0, ek.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, ek.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${Fk.top}")`
                                }
                              }), (0, ek.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${Fk.left}")`
                                }
                              }), (0, ek.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${Fk.right}")`
                                }
                              })]
                            })
                          }

                          function UR(kk) {
                            let {
                              src: Fk
                            } = kk;
                            const [Bk, tk] = (0, Rk.useState)(!1);
                            return Bk ? null : (0, ek.jsx)("img", {
                              src: Fk,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${Fk}`), tk(!0)
                              }
                            })
                          }

                          function cR(kk) {
                            let {
                              kind: Fk
                            } = kk;
                            const Bk = vB(Fk),
                              tk = iR(),
                              Xk = (0, bk.s)(),
                              [wk, dk] = (0, Rk.useState)(""),
                              [sk, Vk] = (0, Rk.useState)(null),
                              [Jk, Ak] = (0, Rk.useState)(MR),
                              [yk, mk] = (0, Rk.useState)(null),
                              Wk = (0, Rk.useRef)(null),
                              ik = wk.trim().toLowerCase();
                            (0, Rk.useEffect)((() => {
                              const kk = (0, Ek.k)(Xk.hash),
                                Rk = Bk.entries.find((Bk => UB(Fk, Bk.name) === kk));
                              if (Rk) Wk.current = Rk.name, dk(Rk.name), Vk(null), mk(Rk.name);
                              else if (null !== Wk.current) {
                                const kk = Wk.current;
                                Wk.current = null, dk((Fk => Fk === kk ? "" : Fk)), mk(null)
                              }
                            }), [Bk, Fk, Xk.hash, Xk.key]), (0, Rk.useEffect)((() => {
                              var kk;
                              null !== yk && (null === (kk = document.getElementById(UB(Fk, yk))) || void 0 === kk || kk.scrollIntoView({
                                block: "center"
                              }))
                            }), [Fk, yk]);
                            const Yk = Bk.entries.filter((kk => (!ik || kk.name.toLowerCase().includes(ik)) && (!sk || kk.variants.includes(sk))));
                            return (0, ek.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [Bk.notes.length > 0 && (0, ek.jsx)("div", {
                                className: "DocsProse",
                                children: Bk.notes.map((kk => (0, ek.jsx)("p", {
                                  children: kk
                                }, kk)))
                              }), Bk.legend.length > 0 && (0, ek.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, ek.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, ek.jsx)("thead", {
                                    children: (0, ek.jsxs)("tr", {
                                      children: [(0, ek.jsx)("th", {
                                        children: "Code"
                                      }), (0, ek.jsx)("th", {
                                        children: "Variant"
                                      }), (0, ek.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, ek.jsx)("tbody", {
                                    children: Bk.legend.map((kk => (0, ek.jsxs)("tr", {
                                      children: [(0, ek.jsx)("td", {
                                        children: (0, ek.jsx)("button", {
                                          type: "button",
                                          className: ak()("DocsVariantChip", {
                                            Active: sk === kk.code
                                          }),
                                          "aria-pressed": sk === kk.code,
                                          title: `Show only ${Fk} with ${kk.meaning} variants`,
                                          onClick: () => {
                                            Vk(sk === kk.code ? null : kk.code)
                                          },
                                          children: kk.code
                                        })
                                      }), (0, ek.jsx)("td", {
                                        children: kk.meaning
                                      }), (0, ek.jsx)("td", {
                                        children: (0, ek.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: kk.usage
                                        })
                                      })]
                                    }, kk.code)))
                                  })]
                                })
                              }), Bk.examples.length > 0 && (0, ek.jsx)(Ok, {
                                lang: "text",
                                code: Bk.examples.join("\n")
                              }), (0, ek.jsx)(iB, {
                                className: "DocsFilterBar",
                                value: wk,
                                placeholder: `Search ${Bk.entries.length} ${Fk}\u2026`,
                                label: `Search ${Fk}`,
                                onChange: kk => {
                                  dk(kk), Ak(MR)
                                },
                                count: ik || sk ? {
                                  visible: Yk.length,
                                  total: Bk.entries.length
                                } : null,
                                children: sk && (0, ek.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Vk(null)
                                  },
                                  children: [sk, " ", (0, ek.jsx)(fk, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, ek.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Yk.slice(0, Jk).map((kk => {
                                  const Bk = "blocks" === Fk ? null === tk || void 0 === tk ? void 0 : tk.getBlockFaces(kk.name) : null,
                                    Rk = tk && !Bk ? tk.getItemTextureUrl(kk.name) : null;
                                  return (0, ek.jsxs)("div", {
                                    id: UB(Fk, kk.name),
                                    className: ak()("DocsCatalogueTile", {
                                      Linked: kk.name === yk
                                    }),
                                    children: [(0, ek.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [Bk && (0, ek.jsx)(gR, {
                                        faces: Bk
                                      }), Rk && (0, ek.jsx)(UR, {
                                        src: Rk
                                      })]
                                    }), (0, ek.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: kk.name
                                    }), kk.variants.length > 0 && (0, ek.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: kk.variants.map((kk => (0, ek.jsx)("span", {
                                        children: kk
                                      }, kk)))
                                    }), (0, ek.jsx)(vk, {
                                      text: kk.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, kk.name)
                                }))
                              }), Yk.length > Jk && (0, ek.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Ak(Yk.length)
                                },
                                children: ["Show all ", Yk.length]
                              }), 0 === Yk.length && (0, ek.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", Fk, " match."]
                              })]
                            })
                          }
                          var GR = Bk(4553),
                            TR = Bk(1535);
                          const rR = .95 * GR.c;

                          function DR(kk) {
                            return /^\s*```/.test(kk)
                          }

                          function zR(kk, Fk) {
                            const Bk = [
                              []
                            ];
                            let Rk = !1;
                            for (const tk of kk.split("\n")) !Rk && Fk(tk) && Bk.at(-1).length > 0 && Bk.push([]), DR(tk) && (Rk = !Rk), Bk.at(-1).push(tk);
                            return Bk.map((kk => kk.join("\n").trim())).filter(Boolean)
                          }

                          function PR(kk, Fk) {
                            const Bk = `${"#".repeat(Fk)} `,
                              Rk = [];
                            let tk = !1;
                            for (const ak of kk.split("\n")) DR(ak) ? tk = !tk : !tk && ak.startsWith(Bk) && Rk.push(ak.slice(Bk.length).trim());
                            return Rk
                          }

                          function hR(kk) {
                            return kk.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class qR {
                            constructor(kk, Fk) {
                              this.origin = Fk, this.pages = void 0, this.partPaths = new Map;
                              const Bk = kk.map((kk => {
                                const Fk = Fk => this.resolveLinks(kk, Fk).length,
                                  Bk = function(kk, Fk) {
                                    const Bk = kk.map((kk => Fk(kk.markdown) + 2)),
                                      Rk = Bk.reduce(((kk, Fk) => kk + Fk), 0),
                                      tk = Rk / Math.ceil(Rk / rR),
                                      ak = [];
                                    let Xk = 0;
                                    return kk.forEach(((kk, Fk) => {
                                      const Rk = Bk[Fk];
                                      (0 === ak.length || Xk + Rk > rR || Xk + Rk / 2 > tk) && (ak.push([]), Xk = 0), ak.at(-1).push(kk), Xk += Rk
                                    })), ak
                                  }(function(kk, Fk) {
                                    return zR(kk, (kk => kk.startsWith("## "))).flatMap((kk => {
                                      var Bk;
                                      const Rk = null !== (Bk = PR(kk, 2)[0]) && void 0 !== Bk ? Bk : "";
                                      if (Fk(kk) <= rR) return [{
                                        markdown: kk,
                                        section: Rk
                                      }];
                                      let tk = !1,
                                        ak = "";
                                      return zR(kk, (kk => {
                                        const Fk = tk && "" !== kk.trim();
                                        return tk = "" === kk.trim(), Fk
                                      })).map((kk => {
                                        var Fk;
                                        const Bk = PR(kk, 3),
                                          tk = kk.startsWith("### ") ? Bk[0] : ak;
                                        return ak = null !== (Fk = Bk.at(-1)) && void 0 !== Fk ? Fk : ak, {
                                          markdown: kk,
                                          section: Rk || tk
                                        }
                                      }))
                                    }))
                                  }(hR(kk), Fk), Fk);
                                return {
                                  page: kk,
                                  groups: Bk.length > 1 ? Bk : []
                                }
                              }));
                              for (const {
                                  page: Rk,
                                  groups: tk
                                }
                                of Bk) tk.forEach(((kk, Fk) => {
                                const Bk = (0, GR.t)(Rk.slug, Fk);
                                for (const tk of kk.flatMap((kk => [...PR(kk.markdown, 2), ...PR(kk.markdown, 3)]))) {
                                  const kk = `${Rk.id}#${(0,Ek.m)(tk)}`;
                                  this.partPaths.has(kk) || this.partPaths.set(kk, Bk)
                                }
                              }));
                              this.pages = Bk.map((kk => {
                                let {
                                  page: Fk,
                                  groups: Bk
                                } = kk;
                                return {
                                  page: Fk,
                                  path: (0, GR.p)(Fk.slug),
                                  markdown: `# ${Fk.title}\n\n${this.resolveLinks(Fk,hR(Fk))}\n`,
                                  parts: Bk.map(((kk, Rk) => this.renderPart(Fk, kk, Rk, Bk.length)))
                                }
                              }))
                            }
                            url(kk) {
                              return `${this.origin}${kk}`
                            }
                            getPage(kk) {
                              return this.pages.find((Fk => Fk.page.id === kk))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((kk => (kk.parts.length > 0 ? kk.parts : [{
                                path: kk.path,
                                label: "",
                                markdown: kk.markdown
                              }]).filter((kk => kk.markdown.length > GR.c))))
                            }
                            markdownUrl(kk, Fk) {
                              const Bk = Fk && this.partPaths.get(`${kk.id}#${Fk}`) || (0, GR.p)(kk.slug);
                              return this.url(Fk ? `${Bk}#${Fk}` : Bk)
                            }
                            resolveLinks(kk, Fk) {
                              return Fk.replace(/\]\((#[^)]+)\)/g, ((Fk, Bk) => {
                                var Rk;
                                const tk = null !== (Rk = Ck(Bk)) && void 0 !== Rk ? Rk : this.samePageTarget(kk, Bk);
                                return tk ? `](${this.markdownUrl(tk.page,tk.anchor)})` : Fk
                              }))
                            }
                            samePageTarget(kk, Fk) {
                              const Bk = (0, Ek.m)(Fk.slice(1));
                              return qk(kk, Bk) ? {
                                page: kk,
                                anchor: Bk
                              } : null
                            }
                            renderPart(kk, Fk, Bk, Rk) {
                              const tk = function(kk) {
                                  const Fk = kk.map((kk => kk.section)).filter(Boolean);
                                  if (0 === Fk.length) return "";
                                  const Bk = Fk[0],
                                    Rk = Fk.at(-1);
                                  return Bk === Rk ? Bk : `${Bk} to ${Rk}`
                                }(Fk),
                                ak = Fk.map((kk => kk.markdown)).join("\n\n"),
                                Xk = tk ? `It covers ${tk}. ` : "",
                                bk = `Part ${Bk+1} of ${Rk} of [${kk.title}](${this.url((0,GR.p)(kk.slug))}). ${Xk}[llms.txt](${this.url(GR.i)}) lists every part.`;
                              return {
                                path: (0, GR.t)(kk.slug, Bk),
                                label: tk,
                                markdown: `# ${kk.title}, part ${Bk+1} of ${Rk}\n\n${bk}\n\n${this.resolveLinks(kk,ak)}\n`
                              }
                            }
                            llmsTxt(kk) {
                              const Fk = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${CR(GR.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const Bk of Dk) {
                                Fk.push("", `## ${Bk.title}`, "");
                                for (const kk of Bk.pageIds) {
                                  const Bk = this.getPage(kk),
                                    {
                                      page: Rk,
                                      parts: tk
                                    } = Bk,
                                    ak = `About ${CR(Bk.markdown.length)} tokens${tk.length>0?`, in ${tk.length} parts:`:"."}`;
                                  Fk.push(`- [${Rk.title}](${this.url(Bk.path)}): ${Rk.summary} ${ak}`), tk.forEach(((kk, Bk) => {
                                    Fk.push(`  - [Part ${Bk+1}${kk.label?`: ${kk.label}`:""}](${this.url(kk.path)})`)
                                  }))
                                }
                              }
                              return Fk.push("", "## Optional", "", `- [Every page in one file](${this.url(GR.f)}): About ${CR(kk.length)} tokens, for a model with a large context window.`, ""), Fk.join("\n")
                            }
                            llmsFullTxt() {
                              return Dk.flatMap((kk => kk.pageIds.map((kk => this.getPage(kk).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const kk = this.llmsFullTxt(),
                                Fk = this.llmsTxt(kk),
                                Bk = new Map([
                                  [GR.k, Fk],
                                  [GR.i, Fk],
                                  [GR.f, kk]
                                ]);
                              for (const Rk of this.pages) {
                                Bk.set(Rk.path, Rk.markdown);
                                for (const kk of Rk.parts) Bk.set(kk.path, kk.markdown)
                              }
                              return Bk
                            }
                          }

                          function CR(kk) {
                            return `${Math.max(1,Math.round(kk/4e3))}K`
                          }
                          let ZR = null;

                          function pR() {
                            return ZR ??= new qR(rk, TR.b), ZR
                          }
                          const KR = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function xR(kk) {
                            return pR().getPage(kk.id).parts.length > 0 ? `Read ${GR.j}, then the parts of the Bloxd Code API's ${kk.title} page it lists, so I can ask questions about it.` : `Read ${TR.b}${(0,GR.p)(kk.slug)} so I can ask questions about it. ${GR.j} lists every page of the Bloxd Code API docs.`
                          }

                          function jR(kk) {
                            let {
                              page: Fk
                            } = kk;
                            const [Bk, Rk] = Wk();
                            return (0, ek.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, ek.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Rk(pR().getPage(Fk.id).markdown)
                                },
                                children: [(0, ek.jsx)(fk, {
                                  name: !1 === (null === Bk || void 0 === Bk ? void 0 : Bk.failed) ? "check" : "copy"
                                }), (0, ek.jsx)("span", {
                                  children: Bk ? Bk.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), KR.map((kk => (0, ek.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${kk.url}${encodeURIComponent(xR(Fk))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, ek.jsx)(fk, {
                                  name: "external-link"
                                }), (0, ek.jsxs)("span", {
                                  children: ["Open in ", kk.name]
                                })]
                              }, kk.name)))]
                            })
                          }

                          function lR(kk) {
                            return `#${[0,1,2].map((Fk=>Math.round(Math.min(255,Math.max(0,kk[Fk]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function nR(kk) {
                            return [parseInt(kk.slice(1, 3), 16), parseInt(kk.slice(3, 5), 16), parseInt(kk.slice(5, 7), 16)]
                          }

                          function IR(kk) {
                            let {
                              label: Fk,
                              min: Bk,
                              max: Rk,
                              step: tk,
                              low: ak,
                              high: Xk,
                              onChange: bk
                            } = kk;
                            return (0, ek.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ek.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ek.jsx)("span", {
                                  children: Fk
                                }), (0, ek.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: ak === Xk ? ak : `${ak}\u2013${Xk}`
                                })]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, ek.jsx)("input", {
                                  type: "range",
                                  min: Bk,
                                  max: Rk,
                                  step: tk,
                                  value: Math.min(Rk, ak),
                                  "aria-label": `Minimum ${Fk.toLowerCase()}`,
                                  onChange: kk => {
                                    const Fk = Number(kk.target.value);
                                    bk(Fk, Math.max(Fk, Xk))
                                  }
                                }), (0, ek.jsx)("input", {
                                  type: "range",
                                  min: Bk,
                                  max: Rk,
                                  step: tk,
                                  value: Math.min(Rk, Xk),
                                  "aria-label": `Maximum ${Fk.toLowerCase()}`,
                                  onChange: kk => {
                                    const Fk = Number(kk.target.value);
                                    bk(Math.min(Fk, ak), Fk)
                                  }
                                })]
                              })]
                            })
                          }

                          function QR(kk) {
                            let {
                              label: Fk,
                              min: Bk,
                              max: Rk,
                              step: tk,
                              value: ak,
                              onChange: Xk,
                              format: bk = String
                            } = kk;
                            return (0, ek.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ek.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ek.jsx)("span", {
                                  children: Fk
                                }), (0, ek.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: bk(ak)
                                })]
                              }), (0, ek.jsx)("input", {
                                type: "range",
                                min: Bk,
                                max: Rk,
                                step: tk,
                                value: Math.min(Rk, Math.max(Bk, ak)),
                                "aria-label": Fk,
                                onChange: kk => {
                                  Xk(Number(kk.target.value))
                                }
                              })]
                            })
                          }

                          function kt(kk) {
                            let {
                              opts: Fk,
                              onChange: Bk
                            } = kk;
                            const Rk = Fk.colorGradients;
                            if (!ZB(Rk)) return (0, ek.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ek.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, ek.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, ek.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Rk.map(((kk, Fk) => (0, ek.jsx)("input", {
                                  type: "color",
                                  value: lR(kk.color),
                                  "aria-label": `Colour ${Fk+1}`,
                                  onChange: kk => {
                                    const tk = [...Rk];
                                    tk[Fk] = {
                                      color: nR(kk.target.value)
                                    }, Bk(tk)
                                  }
                                }, Fk)))
                              })]
                            });
                            const tk = (kk, Fk) => {
                              const tk = [...Rk];
                              tk[kk] = Fk, Bk(tk)
                            };
                            return (0, ek.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ek.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ek.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, ek.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Rk.map(((kk, Fk) => {
                                var Bk;
                                const Rk = null !== (Bk = kk.maxColor) && void 0 !== Bk ? Bk : kk.minColor;
                                return (0, ek.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, ek.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * kk.timeFraction), "%"]
                                  }), (0, ek.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${lR(kk.minColor)}, ${lR(Rk)})`
                                    }
                                  }), (0, ek.jsx)("input", {
                                    type: "color",
                                    value: lR(kk.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*kk.timeFraction)}%`,
                                    onChange: Bk => {
                                      tk(Fk, {
                                        ...kk,
                                        minColor: [...nR(Bk.target.value), kk.minColor[3]]
                                      })
                                    }
                                  }), (0, ek.jsx)("input", {
                                    type: "color",
                                    value: lR(Rk),
                                    "aria-label": `Maximum colour at ${Math.round(100*kk.timeFraction)}%`,
                                    onChange: Bk => {
                                      tk(Fk, {
                                        ...kk,
                                        maxColor: [...nR(Bk.target.value), Rk[3]]
                                      })
                                    }
                                  })]
                                }, Fk)
                              }))]
                            })
                          }
                          const Ft = [-.5, -.5, -.5],
                            Bt = [.5, .5, .5],
                            Rt = [0, 1, 2, 3, 4, 5, 6, 7].map((kk => [1 & kk ? Bt[0] : Ft[0], 2 & kk ? Bt[1] : Ft[1], 4 & kk ? Bt[2] : Ft[2]]));class tt {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(kk, Fk, Bk, Rk) {
                              const tk = Math.round(31 * Fk),
                                ak = Math.round(31 * Bk),
                                Xk = Math.round(31 * Rk),
                                bk = `${tk}|${ak}|${Xk}`;
                              let wk = this.tints.get(kk);
                              (!wk || wk.size > 2e3) && (wk = new Map, this.tints.set(kk, wk));
                              let dk = wk.get(bk);
                              if (dk) return dk;
                              dk = document.createElement("canvas"), dk.width = kk.naturalWidth || 16, dk.height = kk.naturalHeight || 16;
                              const sk = dk.getContext("2d");
                              return sk ? (sk.imageSmoothingEnabled = !1, sk.drawImage(kk, 0, 0, dk.width, dk.height), sk.globalCompositeOperation = "multiply", sk.fillStyle = `rgb(${tk/31*255}, ${ak/31*255}, ${Xk/31*255})`, sk.fillRect(0, 0, dk.width, dk.height), sk.globalCompositeOperation = "destination-in", sk.drawImage(kk, 0, 0, dk.width, dk.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), wk.set(bk, dk), dk
                            }
                          }

                          function Xt(kk) {
                            let {
                              opts: Fk,
                              textureUrl: Bk,
                              burst: tk,
                              paused: ak
                            } = kk;
                            const Xk = (0, Rk.useRef)(null),
                              bk = (0, Rk.useRef)(Fk);
                            bk.current = Fk;
                            const wk = (0, Rk.useRef)(ak);
                            wk.current = ak;
                            const dk = (0, Rk.useRef)(null),
                              sk = (0, Rk.useRef)(null),
                              Vk = (0, Rk.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(kk) {
                                let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const Bk = [-.5, -.5, -.5],
                                  Rk = [.5, .5, .5];
                                let tk = .5;
                                for (let ak = 0; ak < 40; ak++) {
                                  const ak = KB(kk, Bk, Rk, Fk),
                                    Xk = Math.max(ak.life / 30, .001);
                                  for (; lB(ak, kk.gravity, Xk);) tk = Math.max(tk, Math.hypot(ak.pos[0], ak.pos[1], ak.pos[2]) + ak.size / 2)
                                }
                                return tk
                              }(Fk)))), [Fk]),
                              Jk = (0, Rk.useRef)(Vk);
                            return Jk.current = Vk, (0, Rk.useEffect)((() => {
                              if (dk.current = null, !Bk) return;
                              const kk = new Image;
                              let Fk = !1;
                              return kk.onload = () => {
                                Fk || (dk.current = kk)
                              }, kk.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${Bk}`)
                              }, kk.src = Bk, () => {
                                Fk = !0
                              }
                            }), [Bk]), (0, Rk.useEffect)((() => {
                              var kk;
                              null === (kk = sk.current) || void 0 === kk || kk.call(sk)
                            }), [Fk, tk]), (0, Rk.useEffect)((() => {
                              const kk = Xk.current,
                                Fk = null === kk || void 0 === kk ? void 0 : kk.getContext("2d");
                              if (!kk || !Fk) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const Bk = new tt;
                              let Rk = [],
                                tk = 0,
                                ak = -.7,
                                Vk = Jk.current,
                                Ak = performance.now(),
                                ek = 0,
                                yk = !0,
                                fk = null;
                              const mk = () => {
                                const kk = bk.current,
                                  Fk = Math.min(400, Math.max(0, Math.ceil(kk.manualEmitCount)));
                                Rk = [];
                                for (let Bk = 0; Bk < Fk; Bk++) Rk.push(KB(kk, Ft, Bt, Math.random));
                                tk = 0
                              };
                              sk.current = mk, mk();
                              const Wk = Xk => {
                                ek = requestAnimationFrame(Wk);
                                const sk = Math.min(.05, (Xk - Ak) / 1e3);
                                if (Ak = Xk, !yk) return;
                                const vk = window.devicePixelRatio || 1,
                                  ik = Math.round(kk.clientWidth * vk),
                                  Yk = Math.round(kk.clientHeight * vk);
                                if (0 === ik || 0 === Yk) return;
                                kk.width === ik && kk.height === Yk || (kk.width = ik, kk.height = Yk);
                                const Lk = bk.current;
                                null === fk && (ak += .18 * sk), Vk += (Jk.current - Vk) * Math.min(1, 4 * sk);
                                const Ok = .6 * sk;
                                Rk = Rk.filter((kk => lB(kk, Lk.gravity, Ok))), 0 !== Rk.length || wk.current || (tk += sk, tk > .6 && mk());
                                const Ek = function(kk, Fk, Bk, Rk) {
                                  const tk = 3.2 * Rk,
                                    ak = .44 * Math.min(kk, Fk) * tk / Rk,
                                    Xk = Math.cos(Bk),
                                    bk = Math.sin(Bk),
                                    wk = Math.cos(.42),
                                    dk = Math.sin(.42);
                                  return (Bk, Rk, sk) => {
                                    const Vk = Bk * bk + sk * Xk,
                                      Jk = tk - (Rk * dk + Vk * wk);
                                    if (Jk < .05) return null;
                                    const Ak = ak / Jk;
                                    return {
                                      x: kk / 2 + (Bk * Xk - sk * bk) * Ak,
                                      y: Fk / 2 - (Rk * wk - Vk * dk) * Ak,
                                      scale: Ak,
                                      depth: Jk
                                    }
                                  }
                                }(ik, Yk, ak, Vk);
                                ! function(kk, Fk, Bk, Rk, tk) {
                                  const ak = kk.createLinearGradient(0, 0, 0, Bk);
                                  ak.addColorStop(0, "#23262d"), ak.addColorStop(1, "#16181c"), kk.globalCompositeOperation = "source-over", kk.globalAlpha = 1, kk.fillStyle = ak, kk.fillRect(0, 0, Fk, Bk);
                                  const Xk = (Fk, Bk) => {
                                      const tk = Rk(Fk[0], Fk[1], Fk[2]),
                                        ak = Rk(Bk[0], Bk[1], Bk[2]);
                                      tk && ak && (kk.beginPath(), kk.moveTo(tk.x, tk.y), kk.lineTo(ak.x, ak.y), kk.stroke())
                                    },
                                    bk = Math.ceil(tk) + 1,
                                    wk = Ft[1];
                                  kk.lineWidth = 1, kk.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let dk = -bk; dk <= bk; dk++) Xk([dk + .5, wk, .5 - bk], [dk + .5, wk, bk + .5]), Xk([.5 - bk, wk, dk + .5], [bk + .5, wk, dk + .5]);
                                  kk.strokeStyle = "rgba(255, 255, 255, 0.28)", kk.setLineDash([4, 4]);
                                  for (const dk of Rt)
                                    for (const kk of Rt) {
                                      const Fk = [0, 1, 2].filter((Fk => dk[Fk] !== kk[Fk]));
                                      1 === Fk.length && dk[Fk[0]] < kk[Fk[0]] && Xk(dk, kk)
                                    }
                                  kk.setLineDash([])
                                }(Fk, ik, Yk, Ek, Vk);
                                const Sk = dk.current,
                                  Nk = Rk.map((kk => ({
                                    particle: kk,
                                    at: Ek(kk.pos[0], kk.pos[1], kk.pos[2])
                                  }))).filter((kk => null !== kk.at)).sort(((kk, Fk) => Fk.at.depth - kk.at.depth));
                                Fk.imageSmoothingEnabled = !1;
                                for (const kk of function(kk) {
                                    switch (kk) {
                                      case zB.d.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case zB.d.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case zB.d.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case zB.d.MultiplyAdd:
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
                                  }(Lk.blendMode)) {
                                  Fk.globalCompositeOperation = kk.operation;
                                  for (const {
                                      particle: Rk,
                                      at: tk
                                    }
                                    of Nk) {
                                    const [ak, Xk, bk, wk] = jB(Rk), dk = Math.max(1, Rk.size * tk.scale);
                                    Fk.globalAlpha = kk.usesAlpha ? Math.min(1, Math.max(0, wk)) : 1, Sk ? Fk.drawImage(Bk.get(Sk, ak, Xk, bk), tk.x - dk / 2, tk.y - dk / 2, dk, dk) : (Fk.fillStyle = `rgb(${255*ak}, ${255*Xk}, ${255*bk})`, Fk.fillRect(tk.x - dk / 2, tk.y - dk / 2, dk, dk))
                                  }
                                }
                                Fk.globalCompositeOperation = "source-over", Fk.globalAlpha = 1
                              };
                              ek = requestAnimationFrame(Wk);
                              const vk = new IntersectionObserver((kk => {
                                let [Fk] = kk;
                                yk = Fk.isIntersecting
                              }));
                              vk.observe(kk);
                              const ik = Fk => {
                                  fk = Fk.clientX, kk.setPointerCapture(Fk.pointerId)
                                },
                                Yk = kk => {
                                  null !== fk && (ak += .01 * (kk.clientX - fk), fk = kk.clientX)
                                },
                                Lk = () => {
                                  fk = null
                                };
                              return kk.addEventListener("pointerdown", ik), kk.addEventListener("pointermove", Yk), kk.addEventListener("pointerup", Lk), kk.addEventListener("pointercancel", Lk), () => {
                                cancelAnimationFrame(ek), vk.disconnect(), sk.current = null, kk.removeEventListener("pointerdown", ik), kk.removeEventListener("pointermove", Yk), kk.removeEventListener("pointerup", Lk), kk.removeEventListener("pointercancel", Lk)
                              }
                            }), []), (0, ek.jsx)("canvas", {
                              ref: Xk,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${Fk.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const bt = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            wt = [{
                              mode: zB.d.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: zB.d.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: zB.d.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: zB.d.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: zB.d.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            dt = (0, Rk.forwardRef)((function(kk, Fk) {
                              var Bk, tk;
                              let {
                                textures: Xk
                              } = kk;
                              const bk = iR(),
                                wk = (0, Rk.useRef)(null),
                                [dk, sk] = (0, Rk.useState)(hB),
                                [Vk, Jk] = (0, Rk.useState)("example"),
                                [Ak, yk] = (0, Rk.useState)(0),
                                [mk, Wk] = (0, Rk.useState)(!1),
                                ik = kk => {
                                  const Fk = "example" === kk ? hB : PB(kk);
                                  Fk && (sk(Fk), Jk(kk))
                                };
                              (0, Rk.useImperativeHandle)(Fk, (() => ({
                                preview: kk => {
                                  var Fk;
                                  ik(kk), null === (Fk = wk.current) || void 0 === Fk || Fk.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Yk = kk => {
                                  sk({
                                    ...dk,
                                    ...kk
                                  }), Jk(null)
                                },
                                Lk = function(kk, Fk) {
                                  if (null !== Fk) return `${kR}    presetId: "${Fk}",\n${FR}\n})`;
                                  const Bk = kk.velocityGradients.map((kk => `        {\n            timeFraction: ${nB(kk.timeFraction)},\n            factor: ${nB(kk.factor)},\n            factor2: ${nB(kk.factor2)},\n        },`)),
                                    Rk = [`    dir1: ${IB(kk.dir1)},`, `    dir2: ${IB(kk.dir2)},`, FR, `    texture: "${kk.texture}",`, `    minLifeTime: ${nB(kk.minLifeTime)},`, `    maxLifeTime: ${nB(kk.maxLifeTime)},`, `    minEmitPower: ${nB(kk.minEmitPower)},`, `    maxEmitPower: ${nB(kk.maxEmitPower)},`, `    minSize: ${nB(kk.minSize)},`, `    maxSize: ${nB(kk.maxSize)},`, `    manualEmitCount: ${nB(kk.manualEmitCount)},`, `    gravity: ${IB(kk.gravity)},`, `    colorGradients: ${QB(kk.colorGradients,"    ")},`, `    velocityGradients: ${Bk.length>0?`[\n${Bk.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${nB(kk.blendMode)},`];
                                  return void 0 !== kk.hideDist && Rk.push(`    hideDist: ${nB(kk.hideDist)},`), `${kR}${Rk.join("\n")}\n})`
                                }(dk, null === Vk || "example" === Vk ? null : Vk),
                                Ek = Xk.includes(dk.texture) ? Xk : [...Xk, dk.texture];
                              return (0, ek.jsxs)("section", {
                                ref: wk,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, ek.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, ek.jsxs)("div", {
                                    children: [(0, ek.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, ek.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, ek.jsx)(vk, {
                                    text: Lk,
                                    label: "Copy code"
                                  })]
                                }), (0, ek.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, ek.jsx)("button", {
                                    type: "button",
                                    className: ak()("DocsVariantChip", {
                                      Active: "example" === Vk
                                    }),
                                    onClick: () => {
                                      ik("example")
                                    },
                                    children: "Example"
                                  }), bt.filter((kk => null !== PB(kk))).map((kk => (0, ek.jsx)("button", {
                                    type: "button",
                                    className: ak()("DocsVariantChip", {
                                      Active: Vk === kk
                                    }),
                                    onClick: () => {
                                      ik(kk)
                                    },
                                    children: kk
                                  }, kk))), (0, ek.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Vk && void 0 !== Vk ? Vk : "custom",
                                    "aria-label": "Preset",
                                    onChange: kk => {
                                      ik(kk.target.value)
                                    },
                                    children: [(0, ek.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Vk && (0, ek.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), DB.d.map((kk => (0, ek.jsx)("option", {
                                      value: kk,
                                      children: kk
                                    }, kk)))]
                                  })]
                                }), (0, ek.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, ek.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, ek.jsx)(Xt, {
                                      opts: dk,
                                      textureUrl: null !== (Bk = null === bk || void 0 === bk ? void 0 : bk.getParticleTextureUrl(dk.texture)) && void 0 !== Bk ? Bk : null,
                                      burst: Ak,
                                      paused: mk
                                    }), (0, ek.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, ek.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          yk(Ak + 1)
                                        },
                                        children: [(0, ek.jsx)(fk, {
                                          name: "replay"
                                        }), (0, ek.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, ek.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": mk,
                                        onClick: () => {
                                          Wk(!mk)
                                        },
                                        children: [(0, ek.jsx)(fk, {
                                          name: mk ? "play" : "pause"
                                        }), (0, ek.jsx)("span", {
                                          children: mk ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, ek.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, ek.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, ek.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, ek.jsx)("span", {
                                          children: "Texture"
                                        }), (0, ek.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: dk.texture
                                        })]
                                      }), (0, ek.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: Ek.map((kk => {
                                          var Fk;
                                          const Bk = null !== (Fk = null === bk || void 0 === bk ? void 0 : bk.getParticleTextureUrl(kk)) && void 0 !== Fk ? Fk : null;
                                          return (0, ek.jsx)("button", {
                                            type: "button",
                                            className: ak()("DocsParticleTexture", {
                                              Active: dk.texture === kk
                                            }),
                                            title: kk,
                                            "aria-label": kk,
                                            "aria-pressed": dk.texture === kk,
                                            onClick: () => {
                                              Yk({
                                                texture: kk
                                              })
                                            },
                                            children: Bk ? (0, ek.jsx)("img", {
                                              src: Bk,
                                              alt: ""
                                            }) : (0, ek.jsx)(fk, {
                                              name: "image"
                                            })
                                          }, kk)
                                        }))
                                      })]
                                    }), (0, ek.jsx)(QR, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: dk.manualEmitCount,
                                      onChange: kk => {
                                        Yk({
                                          manualEmitCount: kk
                                        })
                                      }
                                    }), (0, ek.jsx)(IR, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: dk.minLifeTime,
                                      high: dk.maxLifeTime,
                                      onChange: (kk, Fk) => {
                                        Yk({
                                          minLifeTime: kk,
                                          maxLifeTime: Fk
                                        })
                                      }
                                    }), (0, ek.jsx)(IR, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: dk.minEmitPower,
                                      high: dk.maxEmitPower,
                                      onChange: (kk, Fk) => {
                                        Yk({
                                          minEmitPower: kk,
                                          maxEmitPower: Fk
                                        })
                                      }
                                    }), (0, ek.jsx)(IR, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: dk.minSize,
                                      high: dk.maxSize,
                                      onChange: (kk, Fk) => {
                                        Yk({
                                          minSize: kk,
                                          maxSize: Fk
                                        })
                                      }
                                    }), (0, ek.jsx)(QR, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (tk = dk.gravity[1]) && void 0 !== tk ? tk : 0,
                                      onChange: kk => {
                                        var Fk, Bk;
                                        Yk({
                                          gravity: [null !== (Fk = dk.gravity[0]) && void 0 !== Fk ? Fk : 0, kk, null !== (Bk = dk.gravity[2]) && void 0 !== Bk ? Bk : 0]
                                        })
                                      }
                                    }), (0, ek.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, ek.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, ek.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, ek.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: dk.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: kk => {
                                          Yk({
                                            blendMode: Number(kk.target.value)
                                          })
                                        },
                                        children: wt.map((kk => {
                                          let {
                                            mode: Fk,
                                            label: Bk
                                          } = kk;
                                          return (0, ek.jsx)("option", {
                                            value: Fk,
                                            children: Bk
                                          }, Fk)
                                        }))
                                      })]
                                    }), (0, ek.jsx)(kt, {
                                      opts: dk,
                                      onChange: kk => {
                                        Yk({
                                          colorGradients: kk
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, ek.jsx)(Ok, {
                                  code: Lk,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var st = Bk(4210),
                            Vt = Bk(1812);

                          function Jt(kk, Fk) {
                            return kk ? st.d.includes(Fk) ? kk.getIngameIconUrl(Fk) : kk.getItemIconUrl(Fk) : null
                          }

                          function At(kk) {
                            var Fk, Bk, Rk;
                            let {
                              part: tk,
                              assets: Xk
                            } = kk;
                            const bk = Jt(Xk, tk.icon),
                              wk = null !== (Fk = null === (Bk = tk.style) || void 0 === Bk ? void 0 : Bk.fontSize) && void 0 !== Fk ? Fk : "1.8em",
                              dk = (0, DF.Xb)(tk.style);
                            return (0, ek.jsxs)("span", {
                              className: ak()("DocsBloxdTextIcon", {
                                Missing: !bk
                              }),
                              style: {
                                width: wk,
                                height: wk,
                                opacity: null === (Rk = tk.style) || void 0 === Rk ? void 0 : Rk.opacity
                              },
                              title: bk ? void 0 : `No Bloxd icon, item or block is called "${tk.icon}"`,
                              children: [bk && dk && (0, ek.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: dk,
                                  maskImage: `url("${bk}")`,
                                  WebkitMaskImage: `url("${bk}")`
                                }
                              }), bk ? (0, ek.jsx)("img", {
                                src: bk,
                                alt: "",
                                className: ak()({
                                  Tinted: dk
                                })
                              }) : (0, ek.jsx)(fk, {
                                name: "image"
                              })]
                            })
                          }

                          function et(kk) {
                            let {
                              parts: Fk,
                              className: Bk
                            } = kk;
                            const Rk = iR(),
                              tk = [];
                            let Xk = [];
                            const bk = kk => {
                              Xk.length > 0 && (tk.push((0, ek.jsx)(Vt.d, {
                                text: Xk
                              }, `run-${kk}`)), Xk = [])
                            };
                            return Fk.forEach(((kk, Fk) => {
                              "icon" !== CF(kk) || PF(kk.icon) ? Xk.push(kk) : (bk(Fk), tk.push((0, ek.jsx)(At, {
                                part: kk,
                                assets: Rk
                              }, `icon-${Fk}`)))
                            })), bk(Fk.length), (0, ek.jsx)("div", {
                              className: ak()("DocsStyledTextPreview", Bk),
                              children: tk
                            })
                          }
                          const yt = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let ft = null;

                          function mt(kk) {
                            if (ft ??= document.createElement("canvas").getContext("2d"), !ft) return "#000000";
                            ft.fillStyle = "#000000", ft.fillStyle = kk;
                            const Fk = ft.fillStyle;
                            return Fk.startsWith("#") ? Fk : "#000000"
                          }

                          function Wt(kk) {
                            let {
                              value: Fk,
                              label: Bk,
                              onChange: Rk
                            } = kk;
                            return (0, ek.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, ek.jsx)("input", {
                                type: "color",
                                value: mt(Fk),
                                "aria-label": `${Bk} picker`,
                                onChange: kk => {
                                  Rk(kk.target.value)
                                }
                              }), (0, ek.jsx)("input", {
                                type: "text",
                                value: Fk,
                                placeholder: "#ffb914 or gold",
                                "aria-label": Bk,
                                spellCheck: !1,
                                onChange: kk => {
                                  Rk(kk.target.value)
                                }
                              })]
                            })
                          }

                          function vt(kk) {
                            let {
                              value: Fk,
                              fontAwesomeIcons: Bk,
                              onChange: tk
                            } = kk;
                            const Xk = iR(),
                              [bk, wk] = (0, Rk.useState)(PF(Fk) ? "fontAwesome" : "bloxd"),
                              [dk, sk] = (0, Rk.useState)(""),
                              Vk = dk.trim().toLowerCase(),
                              Jk = "bloxd" === bk ? st.d : Bk,
                              Ak = Vk ? Jk.filter((kk => kk.toLowerCase().includes(Vk))) : Jk;
                            return (0, ek.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, ek.jsx)("input", {
                                type: "text",
                                value: Fk,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: kk => {
                                  tk(kk.target.value)
                                }
                              }), (0, ek.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, ek.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((kk => (0, ek.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": bk === kk,
                                    className: ak()("DocsVariantChip", {
                                      Active: bk === kk
                                    }),
                                    onClick: () => {
                                      wk(kk)
                                    },
                                    children: "bloxd" === kk ? `Bloxd icons (${st.d.length})` : `Font Awesome (${Bk.length})`
                                  }, kk))), (0, ek.jsx)("input", {
                                    type: "search",
                                    value: dk,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: kk => {
                                      sk(kk.target.value)
                                    }
                                  })
                                ]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Ak.map((kk => {
                                  const Bk = "bloxd" === bk ? Jt(Xk, kk) : null;
                                  return (0, ek.jsx)("button", {
                                    type: "button",
                                    title: kk,
                                    "aria-label": kk,
                                    "aria-pressed": kk === Fk,
                                    className: ak()("DocsIconPickerOption", {
                                      Active: kk === Fk
                                    }),
                                    onClick: () => {
                                      tk(kk)
                                    },
                                    children: "fontAwesome" === bk ? (0, ek.jsx)(YB.d, {
                                      name: kk
                                    }) : Bk ? (0, ek.jsx)("img", {
                                      src: Bk,
                                      alt: ""
                                    }) : (0, ek.jsx)(fk, {
                                      name: "image"
                                    })
                                  }, kk)
                                })), 0 === Ak.length && (0, ek.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", dk, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function it(kk) {
                            let {
                              property: Fk,
                              value: Bk,
                              fontAwesomeIcons: Rk,
                              onChange: tk
                            } = kk;
                            const {
                              field: ak,
                              label: Xk
                            } = Fk, bk = kk => "" !== kk || Fk.isRequired ? kk : void 0;
                            switch (ak.kind) {
                              case "text":
                                return ak.multiline ? (0, ek.jsx)("textarea", {
                                  value: String(null !== Bk && void 0 !== Bk ? Bk : ""),
                                  rows: 2,
                                  "aria-label": Xk,
                                  onChange: kk => {
                                    tk(kk.target.value)
                                  }
                                }) : (0, ek.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Bk && void 0 !== Bk ? Bk : ""),
                                  "aria-label": Xk,
                                  onChange: kk => {
                                    tk(bk(kk.target.value))
                                  }
                                });
                              case "size":
                                return (0, ek.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Bk && void 0 !== Bk ? Bk : ""),
                                  placeholder: Fk.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Xk,
                                  spellCheck: !1,
                                  onChange: kk => {
                                    tk(bk(kk.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, ek.jsx)(Wt, {
                                  value: String(null !== Bk && void 0 !== Bk ? Bk : ""),
                                  label: Xk,
                                  onChange: kk => {
                                    tk(bk(kk))
                                  }
                                });
                              case "colours": {
                                const kk = Array.isArray(Bk) ? Bk : [],
                                  Fk = kk => {
                                    tk(kk.length > 0 ? kk : void 0)
                                  };
                                return (0, ek.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [kk.map(((Bk, Rk) => (0, ek.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, ek.jsx)(Wt, {
                                      value: Bk,
                                      label: `${Xk} ${Rk+1}`,
                                      onChange: Bk => {
                                        Fk(kk.map(((kk, Fk) => Fk === Rk ? Bk : kk)))
                                      }
                                    }), (0, ek.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Rk+1}`,
                                      onClick: () => {
                                        Fk(kk.filter(((kk, Fk) => Fk !== Rk)))
                                      },
                                      children: (0, ek.jsx)(fk, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Rk))), (0, ek.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var Bk;
                                      Fk([...kk, null !== (Bk = kk.at(-1)) && void 0 !== Bk ? Bk : "#ffffff"])
                                    },
                                    children: [(0, ek.jsx)(fk, {
                                      name: "plus"
                                    }), 0 === kk.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var wk;
                                const kk = "number" === typeof Bk ? Bk : Number(null !== (wk = Fk.defaultText) && void 0 !== wk ? wk : 0);
                                return (0, ek.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, ek.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: kk,
                                    "aria-label": Xk,
                                    onChange: kk => {
                                      tk(Number(kk.target.value))
                                    }
                                  }), (0, ek.jsx)("output", {
                                    children: kk.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, ek.jsxs)("select", {
                                  value: String(null !== Bk && void 0 !== Bk ? Bk : ""),
                                  "aria-label": Xk,
                                  onChange: kk => {
                                    tk(bk(kk.target.value))
                                  },
                                  children: [!Fk.isRequired && (0, ek.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", Fk.defaultText, ")"]
                                  }), ak.options.map((kk => (0, ek.jsx)("option", {
                                    value: kk,
                                    children: kk
                                  }, kk)))]
                                });
                              case "icon":
                                return (0, ek.jsx)(vt, {
                                  value: String(null !== Bk && void 0 !== Bk ? Bk : ""),
                                  fontAwesomeIcons: Rk,
                                  onChange: tk
                                })
                            }
                          }

                          function Yt(kk) {
                            let Fk;
                            try {
                              Fk = JSON.parse(kk)
                            } catch (Bk) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${Bk.message}`
                              }
                            }
                            return RB(Fk) ? {
                              part: Fk,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function ot(kk) {
                            let {
                              parts: Fk,
                              index: Bk,
                              fontAwesomeIcons: tk,
                              onChange: ak,
                              yE: Xk,
                              onClose: bk
                            } = kk;
                            const wk = (0, Rk.useContext)(yF),
                              sk = (0, Rk.useRef)(null),
                              Vk = Fk[Bk],
                              Jk = CF(Vk),
                              [Ak, yk] = (0, Rk.useState)((() => JSON.stringify(Vk, null, 2))),
                              mk = (0, Rk.useMemo)((() => "other" === Jk ? Yt(Ak).error : null), [Jk, Ak]);
                            (0, Rk.useEffect)((() => {
                              var kk;
                              null === (kk = sk.current) || void 0 === kk || kk.focus()
                            }), []);
                            const Wk = (0, ek.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: kk => {
                                kk.target === kk.currentTarget && bk()
                              },
                              children: (0, ek.jsxs)("div", {
                                ref: sk,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${Bk+1}: ${hF[Jk]}`,
                                tabIndex: -1,
                                onKeyDown: kk => {
                                  "Escape" === kk.key ? (kk.stopPropagation(), bk()) : "Tab" === kk.key && sk.current && function(kk, Fk) {
                                    const Bk = Array.from(kk.querySelectorAll(uF)),
                                      Rk = Bk[0],
                                      tk = Bk.at(-1);
                                    if (!Rk || !tk) return;
                                    const ak = document.activeElement;
                                    !Fk.shiftKey || ak !== Rk && ak !== kk ? Fk.shiftKey || ak !== tk || (Fk.preventDefault(), Rk.focus()) : (Fk.preventDefault(), tk.focus())
                                  }(sk.current, kk)
                                },
                                children: [(0, ek.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, ek.jsxs)("div", {
                                    children: [(0, ek.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", Bk + 1]
                                    }), (0, ek.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: hF[Jk]
                                    })]
                                  }), (0, ek.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: bk,
                                    children: (0, ek.jsx)(fk, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, ek.jsx)(et, {
                                  parts: Fk,
                                  className: "DocsTextDialogPreview"
                                }), (0, ek.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Jk ? (0, ek.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, ek.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, ek.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Ak,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: kk => {
                                        yk(kk.target.value);
                                        const Fk = Yt(kk.target.value);
                                        null !== Fk.part && ak(Fk.part)
                                      }
                                    }), mk && (0, ek.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: mk
                                    })]
                                  }) : pF[Jk].map((kk => {
                                    const Fk = xF(Vk, kk.path),
                                      Bk = kk.isRequired ? JSON.stringify(lF(Vk, kk.path)) === JSON.stringify(Vk) : void 0 === Fk;
                                    return (0, ek.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, ek.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, ek.jsx)("span", {
                                          children: kk.label
                                        }), (0, ek.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: Bk,
                                          "aria-label": `Reset ${kk.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            ak(lF(Vk, kk.path))
                                          },
                                          children: [(0, ek.jsx)(fk, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, ek.jsx)(it, {
                                        property: kk,
                                        value: Fk,
                                        fontAwesomeIcons: tk,
                                        onChange: Fk => {
                                          ak(jF(Vk, kk.path, Fk))
                                        }
                                      }), !kk.isRequired && (0, ek.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", kk.defaultText]
                                      })]
                                    }, kk.path.join("."))
                                  }))
                                }), (0, ek.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, ek.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Xk,
                                    children: [(0, ek.jsx)(fk, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, ek.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: bk,
                                    children: "Done"
                                  })]
                                }), (0, ek.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: yt.map((kk => (0, ek.jsx)("option", {
                                    value: kk
                                  }, kk)))
                                })]
                              })
                            });
                            return wk ? (0, dk.createPortal)(Wk, wk) : Wk
                          }
                          const Lt = [{
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
                            Ot = Object.keys(qF);

                          function Et(kk) {
                            let {
                              fontAwesomeIcons: Fk
                            } = kk;
                            const [Bk, tk] = (0, Rk.useState)(Lt[0].parts), [Xk, bk] = (0, Rk.useState)((() => kB(Lt[0].parts))), [wk, dk] = (0, Rk.useState)(null), [sk, Vk] = (0, Rk.useState)(!1), [Jk, Ak] = (0, Rk.useState)(null), [yk, mk] = (0, Rk.useState)(!1), [Wk, vk] = (0, Rk.useState)(null), ik = (0, Rk.useRef)(null), Yk = kB(Bk);
                            (0, Rk.useLayoutEffect)((() => {
                              var kk;
                              if (!Wk) return;
                              const Fk = kk => {
                                  var Fk;
                                  return null === (Fk = ik.current) || void 0 === Fk ? void 0 : Fk.querySelector(`[data-focus-key="${kk}"]`)
                                },
                                Bk = Fk(Wk.key);
                              null === (kk = Bk && !Bk.disabled ? Bk : Fk(Wk.fallback)) || void 0 === kk || kk.focus(), vk(null)
                            }), [Wk]);
                            const Lk = kk => {
                                tk(kk), bk(kB(kk)), dk(null)
                              },
                              Ek = kk => {
                                Lk(Bk.filter(((Fk, Bk) => Bk !== kk))), vk({
                                  key: `edit-${Math.min(kk,Bk.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              Sk = (kk, Fk) => {
                                const Rk = [...Bk],
                                  [tk] = Rk.splice(kk, 1);
                                Rk.splice(kk + Fk, 0, tk), Lk(Rk);
                                vk({
                                  key: `${Fk<0?"up":"down"}-${kk+Fk}`,
                                  fallback: `edit-${kk+Fk}`
                                })
                              };
                            return (0, ek.jsxs)("section", {
                              ref: ik,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, ek.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, ek.jsxs)("div", {
                                  children: [(0, ek.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, ek.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, ek.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Lt.map((kk => (0, ek.jsx)("button", {
                                  type: "button",
                                  className: ak()("DocsVariantChip", {
                                    Active: Yk === kB(kk.parts)
                                  }),
                                  onClick: () => {
                                    Lk(kk.parts)
                                  },
                                  children: kk.label
                                }, kk.label)))
                              }), (0, ek.jsx)(et, {
                                parts: Bk,
                                className: "DocsTextEditorPreview"
                              }), (0, ek.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, ek.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, ek.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, ek.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [Bk.map(((kk, Fk) => {
                                      const Rk = CF(kk);
                                      return (0, ek.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, ek.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${Fk}`,
                                          "aria-label": `Edit part ${Fk+1}, ${hF[Rk]}`,
                                          onClick: () => {
                                            Ak(Fk)
                                          },
                                          children: [(0, ek.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: hF[Rk]
                                          }), (0, ek.jsx)(et, {
                                            parts: [kk],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Rk && (0, ek.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: nF(kk)
                                          })]
                                        }), (0, ek.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, ek.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Fk+1} up`,
                                            "data-focus-key": `up-${Fk}`,
                                            disabled: 0 === Fk,
                                            onClick: () => {
                                              Sk(Fk, -1)
                                            },
                                            children: (0, ek.jsx)(fk, {
                                              name: "chevron-up"
                                            })
                                          }), (0, ek.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Fk+1} down`,
                                            "data-focus-key": `down-${Fk}`,
                                            disabled: Fk === Bk.length - 1,
                                            onClick: () => {
                                              Sk(Fk, 1)
                                            },
                                            children: (0, ek.jsx)(fk, {
                                              name: "chevron-down"
                                            })
                                          }), (0, ek.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${Fk+1}`,
                                            onClick: () => {
                                              Ek(Fk)
                                            },
                                            children: (0, ek.jsx)(fk, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, Fk)
                                    })), 0 === Bk.length && (0, ek.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, ek.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: kk => {
                                      "Escape" === kk.key && yk && (kk.stopPropagation(), mk(!1), vk({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, ek.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": yk,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        mk(!yk)
                                      },
                                      children: [(0, ek.jsx)(fk, {
                                        name: "plus"
                                      }), "Add a part", (0, ek.jsx)(fk, {
                                        name: yk ? "chevron-up" : "chevron-down"
                                      })]
                                    }), yk && (0, ek.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: Ot.map((kk => (0, ek.jsx)("li", {
                                        children: (0, ek.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (kk => {
                                              Lk([...Bk, qF[kk]]), mk(!1), Ak(Bk.length)
                                            })(kk)
                                          },
                                          children: hF[kk]
                                        })
                                      }, kk)))
                                    })]
                                  })]
                                }), (0, ek.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, ek.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, ek.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": sk,
                                      onClick: () => {
                                        Vk(!sk)
                                      },
                                      children: [(0, ek.jsx)(fk, {
                                        name: sk ? "check" : "pencil"
                                      }), sk ? "Done" : "Edit"]
                                    })]
                                  }), sk ? (0, ek.jsxs)(ek.Fragment, {
                                    children: [(0, ek.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Xk,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: kk => {
                                        bk(kk.target.value);
                                        const Fk = tB(kk.target.value);
                                        dk(Fk.error), Fk.parts && tk(Fk.parts)
                                      }
                                    }), wk && (0, ek.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: wk
                                    })]
                                  }) : (0, ek.jsx)(Ok, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Yk})`
                                  })]
                                })]
                              }), null !== Jk && Jk < Bk.length && (0, ek.jsx)(ot, {
                                parts: Bk,
                                index: Jk,
                                fontAwesomeIcons: Fk,
                                onChange: kk => {
                                  ((kk, Fk) => {
                                    Lk(Bk.map(((Bk, Rk) => Rk === kk ? Fk : Bk)))
                                  })(Jk, kk)
                                },
                                yE: () => {
                                  Ek(Jk), Ak(null)
                                },
                                onClose: () => {
                                  Ak(null), vk({
                                    key: `edit-${Jk}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var St = Bk(4570),
                            Nt = Bk(4559),
                            Ht = Bk(4568),
                            ut = Bk(4573);
                          const Mt = 40,
                            gt = 800,
                            Ut = 150,
                            ct = 8e3,
                            Gt = 2e3;

                          function Tt(kk, Fk) {
                            return 12 * Math.log2(Fk / kk)
                          }

                          function rt(kk, Fk) {
                            return Math.round(kk * 2 ** (Fk / 12) * 10) / 10
                          }

                          function Dt(kk) {
                            return `${kk} ms`
                          }

                          function zt(kk) {
                            return `${kk} st`
                          }
                          const Pt = [{
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

                          function ht(kk) {
                            let {
                              synth: Fk,
                              onChange: Bk
                            } = kk;
                            const Rk = (0, St.l)(Fk);
                            return (0, ek.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, ek.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ek.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, ek.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, ek.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, ek.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, ek.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: St.i.map((kk => (0, ek.jsx)("button", {
                                      type: "button",
                                      className: ak()("DocsVariantChip", {
                                        Active: Fk.waveform === kk
                                      }),
                                      "aria-pressed": Fk.waveform === kk,
                                      onClick: () => {
                                        Bk({
                                          waveform: kk
                                        })
                                      },
                                      children: kk
                                    }, kk)))
                                  })]
                                }), (0, ek.jsx)(QR, {
                                  label: "Pitch",
                                  min: 0,
                                  max: Tt(Mt, gt),
                                  step: .1,
                                  value: Tt(Mt, Fk.pitchHz),
                                  format: () => `${Fk.pitchHz} Hz`,
                                  onChange: kk => {
                                    Bk({
                                      pitchHz: rt(Mt, kk)
                                    })
                                  }
                                }), (0, ek.jsx)(QR, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: Fk.syllableMs,
                                  format: Dt,
                                  onChange: kk => {
                                    Bk({
                                      syllableMs: kk
                                    })
                                  }
                                }), (0, ek.jsx)(QR, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: Fk.volume,
                                  onChange: kk => {
                                    Bk({
                                      volume: kk
                                    })
                                  }
                                })]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ek.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, ek.jsx)(QR, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: Fk.durationMs,
                                  format: Dt,
                                  onChange: kk => {
                                    Bk({
                                      durationMs: kk
                                    })
                                  }
                                }), (0, ek.jsx)(QR, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Rk.durationMs,
                                  step: 1,
                                  value: Rk.attackMs,
                                  format: Dt,
                                  onChange: kk => {
                                    Bk({
                                      attackMs: kk
                                    })
                                  }
                                }), (0, ek.jsx)(QR, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Rk.durationMs - Rk.attackMs,
                                  step: 1,
                                  value: Rk.releaseMs,
                                  format: Dt,
                                  onChange: kk => {
                                    Bk({
                                      releaseMs: kk
                                    })
                                  }
                                }), (0, ek.jsx)(QR, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: Fk.glideSemitones,
                                  format: zt,
                                  onChange: kk => {
                                    Bk({
                                      glideSemitones: kk
                                    })
                                  }
                                }), (0, ek.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, ek.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== Fk.lowpassHz,
                                    onChange: kk => {
                                      Bk({
                                        lowpassHz: kk.target.checked ? Gt : null
                                      })
                                    }
                                  }), (0, ek.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== Fk.lowpassHz && (0, ek.jsx)(QR, {
                                  label: "Filter",
                                  min: 0,
                                  max: Tt(Ut, ct),
                                  step: .1,
                                  value: Tt(Ut, Fk.lowpassHz),
                                  format: () => `${Fk.lowpassHz} Hz`,
                                  onChange: kk => {
                                    Bk({
                                      lowpassHz: rt(Ut, kk)
                                    })
                                  }
                                })]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ek.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), Pt.map((kk => {
                                  let {
                                    key: Rk,
                                    label: tk,
                                    max: ak
                                  } = kk;
                                  return (0, ek.jsx)(QR, {
                                    label: tk,
                                    min: 0,
                                    max: ak,
                                    step: .1,
                                    value: Fk.intonation[Rk],
                                    format: zt,
                                    onChange: kk => {
                                      Bk({
                                        intonation: {
                                          ...Fk.intonation,
                                          [Rk]: kk
                                        }
                                      })
                                    }
                                  }, Rk)
                                }))]
                              })]
                            })
                          }
                          const qt = Object.keys(St.j),
                            Ct = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function Zt(kk) {
                            var Fk;
                            const Bk = JSON.stringify((0, St.l)(kk));
                            return null !== (Fk = qt.find((kk => JSON.stringify((0, St.l)(St.j[kk])) === Bk))) && void 0 !== Fk ? Fk : null
                          }

                          function pt(kk) {
                            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof kk || null === kk) return JSON.stringify(kk);
                            return `{\n${Object.entries(kk).map((kk=>{let[Bk,Rk]=kk;return`${Fk}    ${Bk}: ${pt(Rk,`${Fk}    `)},`})).join("\n")}\n${Fk}}`
                          }

                          function Kt(kk, Fk, Bk) {
                            const Rk = Zt(kk),
                              tk = [`    line: ${JSON.stringify(Fk)},`];
                            return Bk && tk.push(`    speakerName: ${JSON.stringify(Bk)},`), tk.push("    voice,"), `const voice = ${Rk?JSON.stringify(Rk):pt((0,St.l)(kk))}\n\napi.setClientOption(playerId, "dialogue", {\n${tk.join("\n")}\n})`
                          }
                          const xt = 400,
                            jt = 90;
                          let lt = null;

                          function nt(kk, Fk, Bk) {
                            return lt ??= new AudioContext, lt.resume(), (0, ut.e)(lt, lt.destination, kk, Fk, Bk, (() => {}))
                          }

                          function It() {
                            const [kk, Fk] = (0, Rk.useState)(St.j.regular), [Bk, tk] = (0, Rk.useState)(Ct[0]), [Xk, bk] = (0, Rk.useState)("Innkeeper"), [wk, dk] = (0, Rk.useState)(0), sk = VR((kk => kk.volume)), Vk = (0, Rk.useRef)(null), Jk = (0, Rk.useRef)(0), Ak = (0, Rk.useRef)(0), yk = () => {
                              var kk;
                              null === (kk = Vk.current) || void 0 === kk || kk.call(Vk), Vk.current = null
                            };
                            (0, Rk.useEffect)((() => () => {
                              var kk;
                              null === (kk = Vk.current) || void 0 === kk || kk.call(Vk), window.clearTimeout(Jk.current)
                            }), []);
                            const mk = (0, Rk.useMemo)((() => ({
                                line: Bk,
                                speakerName: Xk || void 0,
                                voice: kk
                              })), [Bk, Xk, kk]),
                              Wk = (0, Rk.useRef)(mk);
                            Wk.current = mk;
                            const ik = Zt(kk),
                              Yk = kk => {
                                window.clearTimeout(Jk.current), yk();
                                const {
                                  plan: Fk,
                                  synth: Bk
                                } = (0, Ht.h)(kk);
                                Bk && (Vk.current = nt(Bk, Fk.blips, sk)), dk((kk => kk + 1))
                              },
                              Lk = Kt(kk, Bk, Xk);
                            return (0, ek.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, ek.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, ek.jsxs)("div", {
                                  children: [(0, ek.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, ek.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, ek.jsx)(vk, {
                                  text: Lk,
                                  label: "Copy code"
                                })]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [qt.map((kk => (0, ek.jsx)("button", {
                                  type: "button",
                                  className: ak()("DocsVariantChip", {
                                    Active: ik === kk
                                  }),
                                  "aria-pressed": ik === kk,
                                  onClick: () => {
                                    (kk => {
                                      const Bk = St.j[kk];
                                      Fk(Bk), Yk({
                                        ...mk,
                                        voice: Bk
                                      })
                                    })(kk)
                                  },
                                  children: kk
                                }, kk))), !ik && (0, ek.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, ek.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, ek.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, ek.jsx)(Nt.d, {
                                      display: mk
                                    }, wk)
                                  }), (0, ek.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: kk => {
                                      kk.preventDefault(), Yk(mk)
                                    },
                                    children: [(0, ek.jsx)("input", {
                                      value: Bk,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: kk => {
                                        tk(kk.target.value)
                                      }
                                    }), (0, ek.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, ek.jsx)(fk, {
                                        name: "play"
                                      }), (0, ek.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, ek.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: Ct.map((kk => (0, ek.jsx)("button", {
                                      type: "button",
                                      className: ak()("DocsVariantChip", {
                                        Active: Bk === kk
                                      }),
                                      onClick: () => {
                                        var Fk;
                                        tk(Fk = kk), Yk({
                                          ...mk,
                                          line: Fk
                                        })
                                      },
                                      children: kk
                                    }, kk)))
                                  }), (0, ek.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, ek.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, ek.jsx)("input", {
                                      value: Xk,
                                      placeholder: "No name",
                                      onChange: kk => {
                                        bk(kk.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, ek.jsx)(ht, {
                                  synth: kk,
                                  onChange: Bk => {
                                    const Rk = {
                                      ...kk,
                                      ...Bk
                                    };
                                    Fk(Rk);
                                    const tk = {
                                        ...mk,
                                        voice: Rk
                                      },
                                      ak = performance.now();
                                    if (ak - Ak.current >= jt) {
                                      Ak.current = ak, yk();
                                      const kk = (0, Ht.h)(tk).plan.blips[0];
                                      kk && (Vk.current = nt((0, St.l)(Rk), [{
                                        ...kk,
                                        atMs: 0
                                      }], sk))
                                    }
                                    window.clearTimeout(Jk.current), Jk.current = window.setTimeout((() => {
                                      Yk(Wk.current)
                                    }), xt)
                                  }
                                })]
                              }), (0, ek.jsx)(Ok, {
                                code: Lk,
                                lang: "ts"
                              })]
                            })
                          }
                          var Qt = Bk(4583);
                          const ka = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            Fa = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Ba = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Fa}`, "g"), Qt.r],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Qt.r]
                            ];

                          function Ra(kk) {
                            return `${kk.pageId}#${kk.anchor}`
                          }
                          let ta, aa, Xa;

                          function ba(kk) {
                            const Fk = (0, Ek.e)(kk),
                              Bk = new Set;
                            for (const [, , Rk] of Fk.matchAll(Ek.b)) {
                              const kk = Rk.startsWith("#") ? Ck(Rk) : null,
                                Fk = kk ? Ra({
                                  pageId: kk.page.id,
                                  anchor: kk.anchor
                                }) : null;
                              null !== Fk && (ta || (ta = new Set(rk.flatMap((kk => uk(kk.layout) ? hk(kk).sections.map((Fk => Ra({
                                pageId: kk.id,
                                anchor: Fk.heading.anchor
                              }))) : [])))), ta).has(Fk) && Bk.add(Fk)
                            }
                            for (const [, , Rk] of Fk.matchAll(ka)) {
                              const kk = AF(Rk);
                              kk && Bk.add(Ra(kk))
                            }
                            return Bk
                          }

                          function wa(kk, Fk) {
                            const Bk = new Set,
                              Rk = function(kk) {
                                return kk.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(kk);
                            for (const [, tk] of Rk.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) Bk.add(tk);
                            for (const [tk, ak] of Ba)
                              for (const [, kk] of(0, Qt.i)(Rk, tk, ak)) Fk.has(kk) && Bk.add(kk);
                            return Bk
                          }

                          function da(kk, Fk, Bk, Rk) {
                            const tk = kk.get(Fk);
                            tk ? !Rk && tk.some((kk => kk.pageId === Bk.pageId)) || tk.push(Bk) : kk.set(Fk, [Bk])
                          }
                          const sa = /^[A-Za-z_$][\w$]*$/;

                          function Va(kk) {
                            return sa.test(kk.name) ? kk.name : "options"
                          }

                          function Ja(kk, Fk) {
                            const Bk = kk.params.map(Va).join(", ");
                            return Fk ? `${kk.name} = (${Bk}) => {\n\t\n}` : `api.${kk.name}(${Bk})`
                          }

                          function Aa(kk) {
                            let {
                              method: Fk,
                              isCallback: Bk
                            } = kk;
                            return (0, ek.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, ek.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [Bk ? (0, ek.jsxs)(ek.Fragment, {
                                  children: [(0, ek.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Fk.name
                                  }), (0, ek.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, ek.jsxs)(ek.Fragment, {
                                  children: [(0, ek.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, ek.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Fk.name
                                  }), (0, ek.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), Fk.params.map(((kk, Bk) => (0, ek.jsxs)(Rk.Fragment, {
                                  children: [Bk > 0 && (0, ek.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, ek.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${Fk.name}-${Va(kk)}`,
                                    children: kk.name
                                  })]
                                }, kk.name))), (0, ek.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: Bk ? ") => " : ")"
                                }), Bk && !Fk.returns && (0, ek.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), Fk.returns && Fk.returns.type && (0, ek.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!Bk && (0, ek.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, ek.jsx)(SF, {
                                  type: Fk.returns.type
                                })]
                              })]
                            })
                          }

                          function ea(kk) {
                            let {
                              title: Fk,
                              references: Bk
                            } = kk;
                            const tk = (0, Rk.useContext)(eF);
                            return (0, ek.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, ek.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: Fk
                              }), Bk.map((kk => (0, ek.jsx)(Xk.b, {
                                to: pk(tk, zk(kk.pageId), kk.anchor),
                                children: kk.label
                              }, `${kk.pageId}#${kk.anchor}`)))]
                            })
                          }

                          function ya(kk) {
                            var Fk, Bk;
                            let {
                              pageId: Rk,
                              anchor: tk
                            } = kk;
                            const ak = Ra({
                                pageId: Rk,
                                anchor: tk
                              }),
                              Xk = null !== (Fk = function() {
                                if (!Xa) {
                                  Xa = new Map;
                                  const Rk = new Set(rk.filter((kk => "callbacks" === kk.layout)).flatMap((kk => hk(kk).sections.map((kk => kk.heading.text)))));
                                  for (const tk of rk)
                                    if ("article" === tk.layout || "snippets" === tk.layout)
                                      for (const ak of (0, Ek.q)(hk(tk)))
                                        for (const {
                                            code: Xk
                                          }
                                          of(0, Ek.g)(ak.blocks))
                                          for (const bk of wa(Xk, Rk)) {
                                            const Rk = JF().get(bk);
                                            if (Rk) {
                                              var kk, Fk, Bk;
                                              const Xk = {
                                                pageId: tk.id,
                                                anchor: null !== (kk = null === (Fk = ak.heading) || void 0 === Fk ? void 0 : Fk.anchor) && void 0 !== kk ? kk : "",
                                                label: null !== (Bk = tk.navTitle) && void 0 !== Bk ? Bk : tk.title
                                              };
                                              da(Xa, Ra(Rk), Xk, !1)
                                            }
                                          }
                                }
                                return Xa
                              }().get(ak)) && void 0 !== Fk ? Fk : [],
                              bk = null !== (Bk = function() {
                                if (!aa) {
                                  aa = new Map;
                                  const kk = zk("changelog");
                                  for (const Fk of hk(kk).sections) {
                                    const Bk = new Set(Fk.blocks.flatMap((kk => [...ba(kk)])));
                                    for (const Rk of Bk) {
                                      const Bk = {
                                        pageId: kk.id,
                                        anchor: Fk.heading.anchor,
                                        label: Fk.heading.text
                                      };
                                      da(aa, Rk, Bk, !0)
                                    }
                                  }
                                }
                                return aa
                              }().get(ak)) && void 0 !== Bk ? Bk : [];
                            return 0 === Xk.length && 0 === bk.length ? null : (0, ek.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Xk.length > 0 && (0, ek.jsx)(ea, {
                                title: "Used in",
                                references: Xk
                              }), bk.length > 0 && (0, ek.jsx)(ea, {
                                title: "Changelog",
                                references: bk
                              })]
                            })
                          }

                          function fa(kk) {
                            let {
                              method: Fk,
                              pageId: Bk,
                              anchor: Rk,
                              isCallback: tk
                            } = kk;
                            const ak = tk ? void 0 : wF().get(Fk.name),
                              Xk = Fk.description.length > 0 || null === ak || void 0 === ak || !ak.description ? Fk.description : (0, Ek.s)(ak.description);
                            return (0, ek.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, ek.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, ek.jsx)(sB, {
                                  level: 2,
                                  text: Fk.name,
                                  anchor: Rk,
                                  className: "DocsCardTitle"
                                }), (0, ek.jsx)(vk, {
                                  text: Ja(Fk, tk),
                                  label: tk ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, ek.jsx)(Aa, {
                                method: Fk,
                                isCallback: tk
                              }), ak && null !== ak.deprecation && (0, ek.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, ek.jsx)("strong", {
                                  children: "Deprecated"
                                }), ak.deprecation && (0, ek.jsxs)(ek.Fragment, {
                                  children: [": ", (0, ek.jsx)(LF, {
                                    text: (bk = ak.deprecation, (0, Qt.y)(bk, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Qt.n)("`\\w"), (kk => {
                                      let [Fk] = kk;
                                      return JF().has(Fk) ? `\`${Fk}\`` : Fk
                                    })))
                                  })]
                                })]
                              }), Xk.length > 0 && (0, ek.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, ek.jsx)(eB, {
                                  blocks: Xk
                                })
                              }), Fk.params.length > 0 && (0, ek.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, ek.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, ek.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: Fk.params.map((kk => (0, ek.jsxs)("div", {
                                    id: `${Fk.name}-${Va(kk)}`,
                                    className: "DocsParam",
                                    children: [(0, ek.jsxs)("dt", {
                                      children: [(0, ek.jsx)("code", {
                                        className: "DocsParamName",
                                        children: kk.name
                                      }), (0, ek.jsx)(SF, {
                                        type: kk.type
                                      })]
                                    }), kk.description && (0, ek.jsx)("dd", {
                                      children: (0, ek.jsx)(LF, {
                                        text: kk.description
                                      })
                                    })]
                                  }, kk.name)))
                                })]
                              }), Fk.returns && (Fk.returns.type || Fk.returns.description.length > 0) && (0, ek.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, ek.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, ek.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [Fk.returns.type && (0, ek.jsx)(SF, {
                                    type: Fk.returns.type
                                  }), Fk.returns.description.length > 0 && (0, ek.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, ek.jsx)(eB, {
                                      blocks: Fk.returns.description
                                    })
                                  })]
                                })]
                              }), (0, ek.jsx)(ya, {
                                pageId: Bk,
                                anchor: Rk
                              })]
                            });
                            var bk
                          }

                          function ma(kk) {
                            var Fk;
                            return null !== kk.defaultValue && "undefined" !== kk.defaultValue ? kk.defaultValue : null !== (Fk = kk.example) && void 0 !== Fk ? Fk : "value"
                          }

                          function Wa(kk) {
                            let {
                              setting: Fk,
                              pageId: Bk,
                              anchor: Rk,
                              setterSnippet: tk
                            } = kk;
                            const ak = null === Fk.defaultValue ? null : WF(Fk.defaultValue);
                            return (0, ek.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, ek.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, ek.jsx)(sB, {
                                  level: 2,
                                  text: Fk.name,
                                  anchor: Rk,
                                  className: "DocsCardTitle"
                                }), (0, ek.jsx)(vk, {
                                  text: tk(Fk.name, ma(Fk)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, ek.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, ek.jsxs)("div", {
                                  children: [(0, ek.jsx)("dt", {
                                    children: "Type"
                                  }), (0, ek.jsx)("dd", {
                                    children: (0, ek.jsx)(SF, {
                                      type: Fk.type
                                    })
                                  })]
                                }), null !== Fk.defaultValue && (0, ek.jsxs)("div", {
                                  children: [(0, ek.jsx)("dt", {
                                    children: "Default"
                                  }), (0, ek.jsx)("dd", {
                                    children: (0, ek.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [ak && (0, ek.jsx)(vF, {
                                        colour: ak
                                      }), Fk.defaultValue]
                                    })
                                  })]
                                }), null !== Fk.example && (0, ek.jsxs)("div", {
                                  children: [(0, ek.jsx)("dt", {
                                    children: "Example"
                                  }), (0, ek.jsx)("dd", {
                                    children: (0, ek.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: Fk.example
                                    })
                                  })]
                                })]
                              }), Fk.description.length > 0 && (0, ek.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, ek.jsx)(eB, {
                                  blocks: Fk.description
                                })
                              }), (0, ek.jsx)(ya, {
                                pageId: Bk,
                                anchor: Rk
                              })]
                            })
                          }

                          function va(kk) {
                            let {
                              section: Fk
                            } = kk;
                            return (0, ek.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, ek.jsx)(sB, {
                                level: 2,
                                text: Fk.heading.text,
                                anchor: Fk.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, ek.jsx)("div", {
                                className: "DocsProse",
                                children: (0, ek.jsx)(eB, {
                                  blocks: Fk.blocks
                                })
                              })]
                            })
                          }

                          function ia(kk) {
                            let {
                              section: Fk
                            } = kk;
                            return (0, ek.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, ek.jsx)(sB, {
                                level: Fk.heading.level,
                                text: Fk.heading.text,
                                anchor: Fk.heading.anchor
                              }), (0, ek.jsx)(eB, {
                                blocks: Fk.blocks
                              })]
                            })
                          }
                          const Ya = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function oa(kk) {
                            let {
                              page: Fk,
                              section: Bk
                            } = kk;
                            if ("methods" === Fk.layout || "callbacks" === Fk.layout) return (0, ek.jsx)(fa, {
                              method: OB(Bk),
                              pageId: Fk.id,
                              anchor: Bk.heading.anchor,
                              isCallback: "callbacks" === Fk.layout
                            });
                            if ("settings" === Fk.layout) {
                              const kk = function(kk) {
                                const Fk = {
                                  name: kk.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Rk of kk.blocks) {
                                  var Bk;
                                  if (LB(Rk)) continue;
                                  const kk = "paragraph" === Rk.kind ? Rk.text.match(EB) : null;
                                  if (!kk) {
                                    Fk.description.push(Rk);
                                    continue
                                  }
                                  const tk = null !== (Bk = oB(kk[2])) && void 0 !== Bk ? Bk : kk[2];
                                  "Type" === kk[1] ? Fk.type = tk : "Default" === kk[1] ? Fk.defaultValue = tk : "" !== tk && (Fk.example = tk)
                                }
                                return Fk.type ? Fk : null
                              }(Bk);
                              if (kk) return (0, ek.jsx)(Wa, {
                                setting: kk,
                                pageId: Fk.id,
                                anchor: Bk.heading.anchor,
                                setterSnippet: Fk.setterSnippet
                              })
                            }
                            return "snippets" === Fk.layout ? (0, ek.jsx)(va, {
                              section: Bk
                            }) : "changelog" === Fk.layout ? (0, ek.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, ek.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, ek.jsx)(sB, {
                                  level: 2,
                                  text: Bk.heading.text,
                                  anchor: Bk.heading.anchor
                                })
                              }), (0, ek.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, ek.jsx)(eB, {
                                  blocks: SB(Bk.blocks)
                                })
                              })]
                            }) : Fk.gallery ? (0, ek.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, ek.jsx)(sB, {
                                level: Bk.heading.level,
                                text: Bk.heading.text,
                                anchor: Bk.heading.anchor
                              }), (0, ek.jsx)(NR, {
                                kind: Fk.gallery,
                                content: hk(Fk),
                                blocks: Bk.blocks
                              })]
                            }) : (0, ek.jsx)(ia, {
                              section: Bk
                            })
                          }

                          function La(kk) {
                            let {
                              page: Fk,
                              onTocChange: Bk
                            } = kk;
                            const tk = hk(Fk),
                              [ak, Xk] = (0, Rk.useState)(""),
                              bk = "article" !== Fk.layout,
                              wk = mB(Fk.gallery) ? Fk.gallery : null,
                              dk = null !== wk,
                              sk = ak.trim().toLowerCase(),
                              Vk = (0, Rk.useRef)(null),
                              Jk = (0, Rk.useCallback)((kk => {
                                var Fk;
                                null === (Fk = Vk.current) || void 0 === Fk || Fk.preview(kk)
                              }), []),
                              Ak = (0, Rk.useMemo)((() => {
                                if (!Fk.hasParticlePlayground) return [];
                                const kk = MB(tk.intro).find((kk => "names" === kk.kind && !kk.names.some((kk => null !== PB(kk.name)))));
                                return "names" === (null === kk || void 0 === kk ? void 0 : kk.kind) ? kk.names.map((kk => kk.name)) : []
                              }), [Fk, tk]),
                              yk = (0, Rk.useMemo)((() => {
                                if (!Fk.hasTextPlayground) return [];
                                const kk = tk.sections.flatMap((kk => kk.blocks.flatMap((kk => {
                                  var Fk;
                                  return (null !== (Fk = uB(kk)) && void 0 !== Fk ? Fk : []).flatMap((kk => PF(kk.name) ? [kk.name] : []))
                                }))));
                                return [...new Set(kk)]
                              }), [Fk, tk]),
                              fk = (0, Rk.useMemo)((() => sk ? tk.sections.filter((kk => function(kk, Fk) {
                                return !!kk.heading.text.toLowerCase().includes(Fk) || kk.blocks.some((kk => (0, Ek.e)(kk).toLowerCase().includes(Fk)))
                              }(kk, sk))) : tk.sections), [tk, sk]),
                              mk = (0, Rk.useMemo)((() => function(kk, Fk) {
                                return "article" !== kk.layout ? Fk.map((kk => ({
                                  anchor: kk.heading.anchor,
                                  text: kk.heading.text,
                                  level: 2
                                }))) : Fk.flatMap((kk => {
                                  const Fk = kk.blocks.flatMap((kk => "heading" === kk.kind && 3 === kk.level ? [{
                                    anchor: kk.anchor,
                                    text: kk.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: kk.heading.anchor,
                                    text: kk.heading.text,
                                    level: 2
                                  }, ...Fk]
                                }))
                              }(Fk, fk)), [Fk, fk]);
                            return (0, Rk.useEffect)((() => {
                              Bk(mk)
                            }), [mk, Bk]), (0, ek.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, ek.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, ek.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: tk.title || Fk.title
                                }), (0, ek.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: Fk.summary
                                }), (0, ek.jsx)(jR, {
                                  page: Fk
                                }), bk && (0, ek.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, ek.jsxs)("span", {
                                    children: [(0, ek.jsx)("strong", {
                                      children: tk.sections.length
                                    }), " ", Ya[Fk.layout]]
                                  })
                                })]
                              }), "" === Fk.slug && (0, ek.jsx)(uR, {}), wk && (0, ek.jsx)(cR, {
                                kind: wk
                              }, wk), Fk.hasParticlePlayground && (0, ek.jsx)(dt, {
                                ref: Vk,
                                textures: Ak
                              }), !dk && tk.intro.length > 0 && (0, ek.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: Fk.gallery ? (0, ek.jsx)(WR.Provider, {
                                  value: Fk.hasParticlePlayground ? Jk : null,
                                  children: (0, ek.jsx)(NR, {
                                    kind: Fk.gallery,
                                    content: tk,
                                    blocks: tk.intro
                                  })
                                }) : (0, ek.jsx)(eB, {
                                  blocks: SB(tk.intro)
                                })
                              }), Fk.hasTextPlayground && (0, ek.jsx)(Et, {
                                fontAwesomeIcons: yk
                              }), Fk.hasVoicePlayground && (0, ek.jsx)(It, {}), Fk.childPageIds && (0, ek.jsx)(uR, {
                                cards: Fk.childPageIds.map((kk => ({
                                  pageId: kk
                                }))),
                                label: Fk.title
                              }), bk && (0, ek.jsx)(iB, {
                                className: "DocsFilterBar",
                                value: ak,
                                placeholder: `Filter ${tk.sections.length} ${Ya[Fk.layout]}\u2026`,
                                label: `Filter ${Ya[Fk.layout]}`,
                                onChange: Xk,
                                count: sk ? {
                                  visible: fk.length,
                                  total: tk.sections.length
                                } : null
                              }), !dk && (0, ek.jsxs)("div", {
                                className: `DocsSections Layout-${Fk.layout}`,
                                children: [fk.map((kk => (0, ek.jsx)(oa, {
                                  page: Fk,
                                  section: kk
                                }, kk.heading.anchor))), 0 === fk.length && (0, ek.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Ya[Fk.layout], " match \u201c", ak, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Oa = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Ea(kk) {
                            let {
                              entry: Fk,
                              isActive: Bk,
                              onNavigate: Rk,
                              label: tk,
                              children: Xk
                            } = kk;
                            return (0, ek.jsx)("a", {
                              href: `#${Fk.anchor}`,
                              "aria-label": tk,
                              className: ak()(`Level${Fk.level}`, {
                                Active: Bk
                              }),
                              "aria-current": Bk ? "location" : void 0,
                              onClick: kk => {
                                kk.preventDefault(), Rk(Fk.anchor)
                              },
                              children: Xk
                            })
                          }

                          function Sa(kk) {
                            let {
                              toc: Fk,
                              activeAnchor: Bk,
                              onNavigate: tk
                            } = kk;
                            const Xk = Math.max(0, Fk.findIndex((kk => kk.anchor === Bk))),
                              bk = (0, Rk.useRef)(null),
                              wk = (0, Rk.useRef)(!1);
                            (0, Rk.useEffect)((() => {
                              var kk, Bk;
                              const Rk = null === (kk = bk.current) || void 0 === kk ? void 0 : kk.closest(".DocsToc"),
                                tk = null === (Bk = bk.current) || void 0 === Bk ? void 0 : Bk.querySelector(".DocsTimelineNotch.Active");
                              if (!Rk || !tk) return;
                              let ak = 0;
                              if (Xk === Fk.length - 1) ak = Rk.scrollHeight;
                              else if (Xk > 0) {
                                const kk = Rk.getBoundingClientRect(),
                                  Fk = tk.getBoundingClientRect();
                                ak = Rk.scrollTop + Fk.top + Fk.height / 2 - (kk.top + Rk.clientHeight / 2)
                              }
                              Rk.scrollTo({
                                top: ak,
                                behavior: wk.current ? "smooth" : "auto"
                              }), wk.current = !0
                            }), [Xk, Fk.length]);
                            const dk = [];
                            return Fk.forEach(((kk, Fk) => {
                              var Bk, Rk, tk;
                              const ak = function(kk) {
                                  const Fk = kk.trim().match(Oa);
                                  return Fk ? {
                                    day: Fk[1],
                                    month: `${Fk[2]} ${Fk[3]}`
                                  } : null
                                }(kk.text),
                                Xk = null !== (Bk = null === ak || void 0 === ak ? void 0 : ak.month) && void 0 !== Bk ? Bk : null;
                              null !== Xk && (null === (Rk = dk.at(-1)) || void 0 === Rk ? void 0 : Rk.month) === Xk || dk.push({
                                month: Xk,
                                entries: []
                              }), dk.at(-1).entries.push({
                                entry: kk,
                                day: null !== (tk = null === ak || void 0 === ak ? void 0 : ak.day) && void 0 !== tk ? tk : null,
                                index: Fk
                              })
                            })), (0, ek.jsx)("ol", {
                              ref: bk,
                              className: "DocsTimeline",
                              children: dk.map((kk => {
                                let {
                                  month: Fk,
                                  entries: Bk
                                } = kk;
                                return (0, ek.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [Fk && (0, ek.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: Fk
                                  }), (0, ek.jsx)("ol", {
                                    children: Bk.map((kk => {
                                      let {
                                        entry: Fk,
                                        day: Bk,
                                        index: Rk
                                      } = kk;
                                      return (0, ek.jsx)("li", {
                                        className: ak()("DocsTimelineNotch", {
                                          Passed: Rk < Xk,
                                          Active: Rk === Xk
                                        }),
                                        children: (0, ek.jsx)(Ea, {
                                          entry: Fk,
                                          isActive: Rk === Xk,
                                          onNavigate: tk,
                                          label: Fk.text,
                                          children: (0, ek.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== Bk && void 0 !== Bk ? Bk : Fk.text
                                          })
                                        })
                                      }, Fk.anchor)
                                    }))
                                  })]
                                }, Bk[0].entry.anchor)
                              }))
                            })
                          }

                          function Na(kk) {
                            let {
                              isChangelog: Fk,
                              toc: Bk,
                              activeAnchor: Rk,
                              onNavigate: tk
                            } = kk;
                            return 0 === Bk.length ? null : (0, ek.jsxs)(ek.Fragment, {
                              children: [(0, ek.jsx)("div", {
                                className: "DocsTocTitle",
                                children: Fk ? "Updates" : "On this page"
                              }), Fk ? (0, ek.jsx)(Sa, {
                                toc: Bk,
                                activeAnchor: Rk,
                                onNavigate: tk
                              }) : (0, ek.jsx)("ul", {
                                children: Bk.map((kk => (0, ek.jsx)("li", {
                                  children: (0, ek.jsx)(Ea, {
                                    entry: kk,
                                    isActive: kk.anchor === Rk,
                                    onNavigate: tk,
                                    children: kk.text.replace(/`/g, "")
                                  })
                                }, kk.anchor)))
                              })]
                            })
                          }
                          const Ha = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            ua = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Ma = 20,
                            ga = 10,
                            Ua = 40,
                            ca = 120;
                          let Ga;

                          function Ta(kk) {
                            const Fk = kk.gallery;
                            if (!Fk) return [];
                            if (mB(Fk)) return function(kk) {
                              return vB(kk).entries.map((kk => kk.name))
                            }(Fk).map((Bk => ({
                              page: kk,
                              anchor: UB(Fk, Bk),
                              title: Bk,
                              kind: ua[Fk],
                              text: "",
                              listedUnder: kk.title
                            })));
                            const Bk = hk(kk);
                            return (0, Ek.q)(Bk).flatMap((Rk => {
                              const tk = Rk.heading ? `${kk.title} \u203a ${Rk.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : kk.title;
                              return GB(Fk, Bk, Rk.blocks).flatMap((Bk => "names" !== Bk.kind ? [] : Bk.names.map((Rk => {
                                const ak = Bk.isSongs ? "Song" : ua[Fk];
                                return {
                                  page: kk,
                                  anchor: Rk.anchor,
                                  title: Rk.name,
                                  kind: ak,
                                  text: "",
                                  listedUnder: tk
                                }
                              }))))
                            }))
                          }

                          function ra(kk, Fk, Bk) {
                            const Rk = kk.title.toLowerCase();
                            let tk = 0;
                            if (Rk === Fk) tk = 100;
                            else if (Rk.startsWith(Fk)) tk = 80;
                            else if (Rk.includes(Fk)) tk = 60;
                            else if (Bk.every((kk => Rk.includes(kk)))) tk = 45;
                            else {
                              if (!kk.text.toLowerCase().includes(Fk)) return 0;
                              tk = 20
                            }
                            return tk - Math.min(Rk.length / 10, 9) + ("Page" === kk.kind ? 8 : "Method" === kk.kind ? 3 : 0) - (kk.listedUnder ? Ma : 0)
                          }

                          function Da(kk, Fk) {
                            const Bk = kk.toLowerCase().indexOf(Fk),
                              Rk = Math.max(0, Bk - ca / 3);
                            return `${Rk>0?"\u2026":""}${kk.slice(Rk,Rk+ca)}${Rk+ca<kk.length?"\u2026":""}`
                          }

                          function za(kk) {
                            let {
                              text: Fk,
                              query: Bk
                            } = kk;
                            const Rk = Bk ? Fk.toLowerCase().indexOf(Bk) : -1;
                            return -1 === Rk ? (0, ek.jsx)(ek.Fragment, {
                              children: Fk
                            }) : (0, ek.jsxs)(ek.Fragment, {
                              children: [Fk.slice(0, Rk), (0, ek.jsx)("mark", {
                                children: Fk.slice(Rk, Rk + Bk.length)
                              }), Fk.slice(Rk + Bk.length)]
                            })
                          }

                          function Pa(kk) {
                            let {
                              basePath: Fk,
                              onClose: Bk
                            } = kk;
                            const tk = (0, bk.u)(),
                              [Xk, wk] = (0, Rk.useState)(""),
                              [dk, sk] = (0, Rk.useState)(0),
                              Vk = (0, Rk.useRef)(null),
                              Jk = (0, Rk.useRef)(null),
                              Ak = Xk.trim().toLowerCase(),
                              yk = (0, Rk.useMemo)((() => {
                                const kk = (Ga || (Ga = rk.flatMap((kk => {
                                  const Fk = hk(kk);
                                  return [{
                                    page: kk,
                                    anchor: "",
                                    title: kk.title,
                                    kind: "Page",
                                    text: kk.summary
                                  }, ...Fk.sections.flatMap((Fk => {
                                    const Bk = Fk.blocks.filter((kk => "paragraph" === kk.kind)).map(Ek.e).join(" ").replace(/[`*]/g, ""),
                                      Rk = {
                                        page: kk,
                                        anchor: Fk.heading.anchor,
                                        title: Fk.heading.text.replace(/`/g, ""),
                                        kind: Ha[kk.layout],
                                        text: Bk
                                      },
                                      tk = Fk.blocks.flatMap((Fk => "article" === kk.layout && "heading" === Fk.kind && 3 === Fk.level ? [{
                                        page: kk,
                                        anchor: Fk.anchor,
                                        title: Fk.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Rk.title
                                      }] : []));
                                    return [Rk, ...tk]
                                  })), ...Ta(kk)]
                                }))), Ga);
                                if (!Ak) return kk.filter((kk => "Page" === kk.kind));
                                const Fk = Ak.split(/\s+/);
                                let Bk = 0;
                                return kk.map((kk => ({
                                  entry: kk,
                                  score: ra(kk, Ak, Fk)
                                }))).filter((kk => kk.score > 0)).sort(((kk, Fk) => Fk.score - kk.score)).filter((kk => !kk.entry.listedUnder || (Bk++, Bk <= ga))).slice(0, Ua).map((kk => kk.entry))
                              }), [Ak]);
                            (0, Rk.useEffect)((() => {
                              sk(0)
                            }), [Ak]), (0, Rk.useEffect)((() => {
                              const kk = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === kk || void 0 === kk || kk.focus()
                              }
                            }), []), (0, Rk.useEffect)((() => {
                              var kk, Fk;
                              null === (kk = Vk.current) || void 0 === kk || null === (Fk = kk.querySelector(".Active")) || void 0 === Fk || Fk.scrollIntoView({
                                block: "nearest"
                              })
                            }), [dk]);
                            const mk = kk => {
                              tk(pk(Fk, kk.page, kk.anchor)), Bk()
                            };
                            return (0, ek.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: kk => {
                                kk.target === kk.currentTarget && Bk()
                              },
                              children: (0, ek.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: kk => {
                                  kk.target !== Jk.current && kk.preventDefault()
                                },
                                onKeyDown: kk => {
                                  if ("Escape" === kk.key) Bk();
                                  else if ("Tab" === kk.key) {
                                    var Fk;
                                    kk.preventDefault(), null === (Fk = Jk.current) || void 0 === Fk || Fk.focus()
                                  }
                                },
                                children: [(0, ek.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, ek.jsx)(fk, {
                                    name: "magnifying-glass"
                                  }), (0, ek.jsx)("input", {
                                    ref: Jk,
                                    autoFocus: !0,
                                    value: Xk,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": yk.length > 0 ? `DocsSearchResult-${dk}` : void 0,
                                    onChange: kk => {
                                      wk(kk.target.value)
                                    },
                                    onKeyDown: kk => {
                                      if ("ArrowDown" === kk.key || "ArrowUp" === kk.key) {
                                        kk.preventDefault();
                                        const Fk = "ArrowDown" === kk.key ? 1 : -1;
                                        sk((dk + Fk + yk.length) % Math.max(yk.length, 1))
                                      } else "Enter" === kk.key && yk[dk] && mk(yk[dk])
                                    }
                                  }), (0, ek.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, ek.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Vk,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Ak && (0, ek.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), yk.map(((kk, Fk) => {
                                    var Bk;
                                    return (0, ek.jsxs)("li", {
                                      id: `DocsSearchResult-${Fk}`,
                                      role: "option",
                                      "aria-selected": Fk === dk,
                                      className: ak()("DocsSearchResult", {
                                        Active: Fk === dk
                                      }),
                                      onMouseMove: () => {
                                        sk(Fk)
                                      },
                                      onClick: () => {
                                        mk(kk)
                                      },
                                      children: [(0, ek.jsx)(fk, {
                                        name: kk.page.icon
                                      }), (0, ek.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, ek.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, ek.jsx)(za, {
                                            text: kk.title,
                                            query: Ak
                                          })
                                        }), kk.text && (0, ek.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, ek.jsx)(za, {
                                            text: Da(kk.text, Ak),
                                            query: Ak
                                          })
                                        })]
                                      }), (0, ek.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === kk.kind ? "Page" : null !== (Bk = kk.listedUnder) && void 0 !== Bk ? Bk : `${kk.kind} \xb7 ${kk.page.title}`
                                      })]
                                    }, `${kk.page.id}#${kk.anchor}`)
                                  })), Ak && 0 === yk.length && (0, ek.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Xk, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function ha(kk, Fk) {
                            if (Fk < 10) return `${kk.toFixed(1)}s`;
                            const Bk = Math.floor(kk);
                            return `${Math.floor(Bk/60)}:${String(Bk%60).padStart(2,"0")}`
                          }

                          function qa() {
                            const kk = VR((kk => kk.track)),
                              Fk = VR((kk => kk.volume)),
                              [Bk, tk] = (0, Rk.useState)(0),
                              Xk = (0, Rk.useRef)(BR);
                            if ((0, Rk.useEffect)((() => {
                                if (!kk) return;
                                if (tk(yR()), "playing" !== kk.status) return;
                                let Fk = 0;
                                const Bk = () => {
                                  tk(yR()), Fk = requestAnimationFrame(Bk)
                                };
                                return Fk = requestAnimationFrame(Bk), () => {
                                  cancelAnimationFrame(Fk)
                                }
                              }), [kk]), !kk) return null;
                            const bk = "paused" !== kk.status,
                              wk = Math.min(Bk, kk.duration);
                            return (0, ek.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, ek.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, ek.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": bk ? `Pause ${kk.name}` : `Play ${kk.name}`,
                                  onClick: eR,
                                  children: (0, ek.jsx)(fk, {
                                    name: bk ? "pause" : "play"
                                  })
                                }), (0, ek.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, ek.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, ek.jsx)("code", {
                                      children: kk.name
                                    }), (0, ek.jsx)("span", {
                                      children: kk.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, ek.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, ek.jsx)("span", {
                                      children: ha(wk, kk.duration)
                                    }), (0, ek.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: kk.duration || 1,
                                      step: .01,
                                      value: wk,
                                      disabled: 0 === kk.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${ha(wk,kk.duration)} of ${ha(kk.duration,kk.duration)}`,
                                      onChange: kk => {
                                        const Fk = Number(kk.target.value);
                                        ! function(kk) {
                                          var Fk;
                                          bR = kk, null === (Fk = aR) || void 0 === Fk || Fk.seek(kk)
                                        }(Fk), tk(Fk)
                                      }
                                    }), (0, ek.jsx)("span", {
                                      children: kk.duration > 0 ? ha(kk.duration, kk.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, ek.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, ek.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === Fk ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === Fk ? fR(Xk.current) : (Xk.current = Fk, fR(0))
                                    },
                                    children: (0, ek.jsx)(fk, {
                                      name: "volume",
                                      className: ak()({
                                        Muted: 0 === Fk
                                      })
                                    })
                                  }), (0, ek.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: Fk,
                                    "aria-label": "Volume",
                                    onChange: kk => {
                                      fR(Number(kk.target.value))
                                    }
                                  })]
                                }), (0, ek.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var Fk;
                                    null === (Fk = document.querySelector(`[data-docs-track="${CSS.escape(RR(kk.name,kk.isSong))}"]`)) || void 0 === Fk || Fk.focus(), mR()
                                  },
                                  children: (0, ek.jsx)(fk, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var Ca = Bk(42);
                          const Za = "docsTheme",
                            pa = window.matchMedia("(prefers-color-scheme: light)");

                          function Ka(kk) {
                            let {
                              theme: Fk,
                              onChange: Bk
                            } = kk;
                            const Rk = "dark" === Fk ? "light" : "dark";
                            return (0, ek.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Rk} theme`,
                              title: `Switch to ${Rk} theme`,
                              onClick: () => {
                                Bk(Rk)
                              },
                              children: (0, ek.jsx)(fk, {
                                name: "dark" === Fk ? "moon" : "sun"
                              })
                            })
                          }
                          const xa = "https://github.com/Bloxdy/code-api",
                            ja = "https://discord.gg/playbloxd",
                            la = 180,
                            na = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function Ia(kk) {
                            let {
                              basePath: Fk,
                              activePageId: Bk,
                              onNavigate: Rk
                            } = kk;
                            return (0, ek.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Dk.map((kk => (0, ek.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, ek.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: kk.title
                                }), kk.pageIds.map((kk => {
                                  var tk;
                                  const bk = zk(kk);
                                  return (0, ek.jsxs)(Xk.b, {
                                    to: pk(Fk, bk),
                                    className: ak()("DocsNavLink", {
                                      Active: bk.id === Bk
                                    }),
                                    "aria-current": bk.id === Bk ? "page" : void 0,
                                    onClick: Rk,
                                    children: [(0, ek.jsx)(fk, {
                                      name: bk.icon
                                    }), (0, ek.jsx)("span", {
                                      children: null !== (tk = bk.navTitle) && void 0 !== tk ? tk : bk.title
                                    })]
                                  }, bk.id)
                                }))]
                              }, kk.title)))
                            })
                          }

                          function Qa(kk) {
                            let {
                              basePath: Fk,
                              pageId: Bk
                            } = kk;
                            const Rk = Dk.flatMap((kk => kk.pageIds)),
                              tk = Rk.indexOf(Bk),
                              ak = tk > 0 ? zk(Rk[tk - 1]) : null,
                              bk = tk < Rk.length - 1 ? zk(Rk[tk + 1]) : null;
                            return (0, ek.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [ak ? (0, ek.jsxs)(Xk.b, {
                                className: "DocsPagerLink Previous",
                                to: pk(Fk, ak),
                                children: [(0, ek.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, ek.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: ak.title
                                })]
                              }) : (0, ek.jsx)("span", {}), bk && (0, ek.jsxs)(Xk.b, {
                                className: "DocsPagerLink Next",
                                to: pk(Fk, bk),
                                children: [(0, ek.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, ek.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: bk.title
                                })]
                              })]
                            })
                          }

                          function kX(kk) {
                            let {
                              basePath: Fk,
                              embedded: Bk = !1
                            } = kk;
                            const {
                              pageSlug: tk = ""
                            } = (0, bk.x)(), dk = (0, bk.s)(), sk = (0, bk.u)(), Vk = (Jk = tk, rk.find((kk => kk.slug === Jk)));
                            var Jk;
                            const [Ak, yk] = function() {
                              const [kk, Fk] = (0, Rk.useState)((() => {
                                const kk = Ca.i.getItem(Za);
                                return "dark" === kk || "light" === kk ? kk : null
                              })), [Bk, tk] = (0, Rk.useState)(pa.matches ? "light" : "dark");
                              return (0, Rk.useEffect)((() => {
                                const kk = () => {
                                  tk(pa.matches ? "light" : "dark")
                                };
                                return pa.addEventListener("change", kk), () => {
                                  pa.removeEventListener("change", kk)
                                }
                              }), []), [null !== kk && void 0 !== kk ? kk : Bk, kk => {
                                Ca.i.setItem(Za, kk), Fk(kk)
                              }]
                            }(), [mk, Wk] = (0, Rk.useState)(null), [vk, ik] = (0, Rk.useState)(!1), [Yk, Lk] = (0, Rk.useState)(!1), [Ok, Sk] = (0, Rk.useState)([]), Nk = function(kk, Fk) {
                              const [Bk, tk] = (0, Rk.useState)("");
                              return (0, Rk.useEffect)((() => {
                                if (!Fk) return;
                                let Bk = 0;
                                const Rk = () => {
                                    var Rk, ak;
                                    Bk = 0;
                                    const Xk = Fk.getBoundingClientRect().top + la;
                                    let bk = null !== (Rk = null === (ak = kk[0]) || void 0 === ak ? void 0 : ak.anchor) && void 0 !== Rk ? Rk : "";
                                    for (const Fk of kk) {
                                      const kk = document.getElementById(Fk.anchor);
                                      kk && kk.getBoundingClientRect().top <= Xk && (bk = Fk.anchor)
                                    }
                                    Fk.scrollTop + Fk.clientHeight >= Fk.scrollHeight - 2 && Fk.scrollTop > 0 && kk.length > 0 && (bk = kk[kk.length - 1].anchor), tk(bk)
                                  },
                                  ak = () => {
                                    Bk || (Bk = requestAnimationFrame(Rk))
                                  };
                                return Rk(), Fk.addEventListener("scroll", ak, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(Bk), Fk.removeEventListener("scroll", ak)
                                }
                              }), [kk, Fk]), Bk
                            }(Ok, mk), Hk = "" === tk && dk.hash ? function(kk) {
                              const Fk = (0, Ek.k)(kk);
                              if (qk(zk("welcome"), Fk)) return null;
                              const Bk = Object.hasOwn(Zk, Fk) ? Zk[Fk] : null;
                              if (Bk) return {
                                page: zk(Bk.pageId),
                                anchor: Bk.anchor
                              };
                              const Rk = zk("readme");
                              return qk(Rk, Fk) ? {
                                page: Rk,
                                anchor: Fk
                              } : Ck(`#${Fk}`)
                            }(dk.hash) : null;
                            (0, Rk.useEffect)((() => (wk.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              wk.c.set({
                                musicOnFromPage: !0
                              }), mR()
                            })), []), (0, Rk.useEffect)((() => {
                              const kk = kk => {
                                const Fk = kk.target;
                                if (Fk.closest(".DocsTextDialog")) return;
                                const Bk = Fk.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(Fk.tagName);
                                "k" === kk.key && (kk.metaKey || kk.ctrlKey) || "/" === kk.key && !Bk ? (kk.preventDefault(), Lk(!0)) : "Escape" === kk.key && ik(!1)
                              };
                              return window.addEventListener("keydown", kk), () => {
                                window.removeEventListener("keydown", kk)
                              }
                            }), []);
                            const uk = (0, Rk.useRef)(null);
                            (0, Rk.useLayoutEffect)((() => {
                              var kk, Fk;
                              if (!mk) return;
                              const Bk = uk.current === dk.pathname;
                              uk.current = dk.pathname;
                              const Rk = (0, Ek.k)(dk.hash),
                                tk = Rk ? document.getElementById(Rk) : null;
                              if (null === (kk = mk.querySelector(".DocsTargeted")) || void 0 === kk || kk.classList.remove("DocsTargeted"), null === tk || void 0 === tk || null === (Fk = tk.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === Fk || Fk.classList.add("DocsTargeted"), tk) {
                                var ak;
                                const kk = tk.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (ak = tk.closest(".DocsChangelogEntry")) && void 0 !== ak ? ak : tk).scrollIntoView({
                                  block: kk ? "center" : "start",
                                  behavior: Bk ? "smooth" : "auto"
                                })
                              } else Bk || mk.scrollTo({
                                top: 0
                              })
                            }), [mk, dk.pathname, dk.hash, dk.key]);
                            const Mk = (0, Rk.useCallback)((() => {
                                ik(!1)
                              }), []),
                              gk = (0, Rk.useCallback)((kk => {
                                sk({
                                  hash: kk
                                })
                              }), [sk]);
                            if (Hk) return (0, ek.jsx)(bk.d, {
                              replace: !0,
                              to: pk(Fk, Hk.page, Hk.anchor)
                            });
                            if (!Vk) return (0, ek.jsx)(bk.d, {
                              replace: !0,
                              to: Fk
                            });
                            const Uk = Bk ? "div" : "main";
                            return (0, ek.jsx)(eF.Provider, {
                              value: Fk,
                              children: (0, ek.jsx)(yF.Provider, {
                                value: mk,
                                children: (0, ek.jsxs)("div", {
                                  ref: Wk,
                                  className: ak()("DocsSite", {
                                    Embedded: Bk,
                                    NavOpen: vk
                                  }),
                                  "data-theme": Ak,
                                  children: [(0, ek.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, ek.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": vk ? "Close menu" : "Open menu",
                                      "aria-expanded": vk,
                                      onClick: () => {
                                        ik(!vk)
                                      },
                                      children: (0, ek.jsx)(fk, {
                                        name: vk ? "cross" : "menu"
                                      })
                                    }), (0, ek.jsxs)(Xk.b, {
                                      to: Fk,
                                      className: "DocsBrand",
                                      children: [(0, ek.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, ek.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, ek.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, ek.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        Lk(!0)
                                      },
                                      children: [(0, ek.jsx)(fk, {
                                        name: "magnifying-glass"
                                      }), (0, ek.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, ek.jsxs)("kbd", {
                                        children: [na ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, ek.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, ek.jsxs)("a", {
                                        href: ja,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, ek.jsx)(fk, {
                                          name: "discord"
                                        }), (0, ek.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, ek.jsxs)("a", {
                                        href: xa,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, ek.jsx)(fk, {
                                          name: "external-link"
                                        }), (0, ek.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !Bk && (0, ek.jsxs)(Xk.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, ek.jsx)(fk, {
                                          name: "play"
                                        }), (0, ek.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, ek.jsx)(Ka, {
                                        theme: Ak,
                                        onChange: yk
                                      })]
                                    })]
                                  }), (0, ek.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, ek.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, ek.jsx)(Ia, {
                                        basePath: Fk,
                                        activePageId: Vk.id,
                                        onNavigate: Mk
                                      })
                                    }), (0, ek.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Mk
                                    }), (0, ek.jsxs)(Uk, {
                                      className: "DocsMain",
                                      children: [(0, ek.jsx)(La, {
                                        page: Vk,
                                        onTocChange: Sk
                                      }, Vk.id), (0, ek.jsx)(Qa, {
                                        basePath: Fk,
                                        pageId: Vk.id
                                      })]
                                    }), (0, ek.jsx)("aside", {
                                      className: ak()("DocsToc", {
                                        Timeline: "changelog" === Vk.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, ek.jsx)(Na, {
                                        isChangelog: "changelog" === Vk.layout,
                                        toc: Ok,
                                        activeAnchor: Nk,
                                        onNavigate: gk
                                      })
                                    })]
                                  }), (0, ek.jsx)(qa, {}), Yk && (0, ek.jsx)(Pa, {
                                    basePath: Fk,
                                    onClose: () => {
                                      Lk(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4460: (kk, Fk, Bk) => {
                          Bk.d(Fk, {
                            b: () => Rk,
                            d: () => Xk,
                            e: () => fk,
                            g: () => yk,
                            h: () => bk,
                            k: () => tk,
                            m: () => ak,
                            q: () => ek,
                            r: () => Ak,
                            s: () => Jk
                          });
                          const Rk = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function tk(kk) {
                            try {
                              return decodeURIComponent(kk.slice(1))
                            } catch {
                              return kk.slice(1)
                            }
                          }

                          function ak(kk) {
                            return kk.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Xk = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Rk.source}`, "g");

                          function bk(kk, Fk) {
                            return 2 === kk.length ? Fk.replace(/^ (.*) $/, "$1") : Fk
                          }

                          function wk(kk) {
                            return "" === kk.trim()
                          }

                          function dk(kk) {
                            const Fk = [];
                            for (const Bk of kk.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Fk.length > 0 && Fk[Fk.length - 1].endsWith("\\") ? Fk[Fk.length - 1] += `|${Bk}` : Fk.push(Bk);
                            return Fk.map((kk => kk.trim().replaceAll("\\|", "|")))
                          }
                          const sk = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Vk(kk) {
                            const Fk = [],
                              Bk = [{
                                indent: -1,
                                items: Fk
                              }];
                            let Rk = null;
                            for (const tk of kk) {
                              const kk = tk.match(sk);
                              if (!kk) {
                                Rk && (Rk.text += ` ${tk.trim()}`);
                                continue
                              }
                              const Fk = kk[1].replace(/\t/g, "  ").length;
                              for (; Fk <= Bk[Bk.length - 1].indent;) Bk.pop();
                              Rk = {
                                text: kk[3].trim(),
                                children: []
                              }, Bk[Bk.length - 1].items.push(Rk), Bk.push({
                                indent: Fk,
                                items: Rk.children
                              })
                            }
                            return Fk
                          }

                          function Jk(kk) {
                            const Fk = kk.replace(/\r\n/g, "\n").split("\n"),
                              Bk = [];
                            let Rk = 0;
                            for (; Rk < Fk.length;) {
                              const kk = Fk[Rk];
                              if (wk(kk)) {
                                Rk++;
                                continue
                              }
                              const tk = kk.match(/^\s*```\s*(\w*)\s*$/);
                              if (tk) {
                                const kk = [];
                                for (Rk++; Rk < Fk.length && !/^\s*```\s*$/.test(Fk[Rk]);) kk.push(Fk[Rk]), Rk++;
                                Rk++, Bk.push({
                                  kind: "code",
                                  lang: tk[1] || "text",
                                  code: kk.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Xk = kk.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Xk) {
                                const kk = Xk[2].trim();
                                Bk.push({
                                  kind: "heading",
                                  level: Xk[1].length,
                                  text: kk,
                                  anchor: ak(kk)
                                }), Rk++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(kk)) {
                                Bk.push({
                                  kind: "rule"
                                }), Rk++;
                                continue
                              }
                              if (kk.trim().startsWith("|") && Rk + 1 < Fk.length && /^\s*\|[\s:|-]+\|\s*$/.test(Fk[Rk + 1])) {
                                const tk = dk(kk),
                                  ak = [];
                                for (Rk += 2; Rk < Fk.length && Fk[Rk].trim().startsWith("|");) ak.push(dk(Fk[Rk])), Rk++;
                                Bk.push({
                                  kind: "table",
                                  header: tk,
                                  rows: ak
                                });
                                continue
                              }
                              if (kk.startsWith(">")) {
                                const kk = [];
                                for (; Rk < Fk.length && Fk[Rk].startsWith(">");) kk.push(Fk[Rk].replace(/^>\s?/, "")), Rk++;
                                Bk.push({
                                  kind: "quote",
                                  blocks: Jk(kk.join("\n"))
                                });
                                continue
                              }
                              if (sk.test(kk)) {
                                const tk = [],
                                  ak = /^\s*\d+\./.test(kk);
                                for (; Rk < Fk.length && !wk(Fk[Rk]) && (sk.test(Fk[Rk]) || /^\s+\S/.test(Fk[Rk]));) tk.push(Fk[Rk]), Rk++;
                                Bk.push({
                                  kind: "list",
                                  ordered: ak,
                                  items: Vk(tk)
                                });
                                continue
                              }
                              const bk = [];
                              for (; Rk < Fk.length && !wk(Fk[Rk]) && !/^\s*```/.test(Fk[Rk]) && !/^#{1,6}\s/.test(Fk[Rk]) && !Fk[Rk].startsWith(">") && !sk.test(Fk[Rk]) && (!Fk[Rk].trim().startsWith("|") || 0 !== bk.length);) bk.push(Fk[Rk].trim()), Rk++;
                              0 === bk.length && (bk.push(Fk[Rk].trim()), Rk++), Bk.push({
                                kind: "paragraph",
                                text: bk.join(" ")
                              })
                            }
                            return Bk
                          }

                          function Ak(kk) {
                            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const Bk = Jk(kk);
                            let Rk = "";
                            const tk = [],
                              ak = [],
                              Xk = new Map;
                            for (const dk of Bk) {
                              if ("heading" === dk.kind) {
                                var bk;
                                const kk = (null !== (bk = Xk.get(dk.anchor)) && void 0 !== bk ? bk : 0) + 1;
                                Xk.set(dk.anchor, kk), kk > 1 && (dk.anchor = `${dk.anchor}-${kk}`)
                              }
                              if ("heading" === dk.kind && 1 === dk.level && !Rk) {
                                Rk = dk.text;
                                continue
                              }
                              if ("heading" === dk.kind && dk.level <= Fk) {
                                ak.push({
                                  heading: dk,
                                  blocks: []
                                });
                                continue
                              }
                              const kk = ak.at(-1);
                              kk ? kk.blocks.push(dk) : tk.push(dk)
                            }
                            const wk = kk => {
                              for (;
                                "rule" === (null === (Fk = kk.at(-1)) || void 0 === Fk ? void 0 : Fk.kind);) {
                                var Fk;
                                kk.pop()
                              }
                            };
                            wk(tk);
                            for (const dk of ak) wk(dk.blocks);
                            return {
                              title: Rk,
                              intro: tk,
                              sections: ak
                            }
                          }

                          function ek(kk) {
                            return [{
                              heading: null,
                              blocks: kk.intro
                            }, ...kk.sections.map((kk => ({
                              heading: kk.heading,
                              blocks: kk.blocks
                            })))]
                          }

                          function yk(kk) {
                            return kk.flatMap((kk => "code" === kk.kind ? [kk] : "quote" === kk.kind ? yk(kk.blocks) : []))
                          }

                          function fk(kk) {
                            switch (kk.kind) {
                              case "heading":
                              case "paragraph":
                                return kk.text;
                              case "code":
                                return kk.code;
                              case "table":
                                return [kk.header, ...kk.rows].map((kk => kk.join(" "))).join(" ");
                              case "list": {
                                const Fk = kk => kk.map((kk => `${kk.text} ${Fk(kk.children)}`)).join(" ");
                                return Fk(kk.items)
                              }
                              case "quote":
                                return kk.blocks.map(fk).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4566: (kk, Fk, Bk) => {
                          Bk.d(Fk, {
                            c: () => bk
                          });
                          var Rk = Bk(61),
                            tk = Bk(279),
                            ak = Bk(1835),
                            Xk = Bk(1069);

                          function bk(kk) {
                            let {
                              text: Fk
                            } = kk;
                            const Bk = [];
                            let bk = "";
                            return (0, tk.bc)(Fk).forEach(((kk, Fk) => {
                              if ("string" === typeof kk || !(0, ak.f)(kk.icon)) return void(bk += "string" === typeof kk ? kk : kk.icon);
                              const tk = Math.max(0, bk.trimEnd().search(/\S{1,12}$/));
                              Bk.push((0, Xk.jsxs)(Rk.Fragment, {
                                children: [bk.slice(0, tk), (0, Xk.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [bk.slice(tk), (0, Xk.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": kk.icon,
                                    children: (0, Xk.jsx)(ak.e, {
                                      itemName: kk.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, Fk)), bk = ""
                            })), Bk.push(bk), (0, Xk.jsx)(Xk.Fragment, {
                              children: Bk
                            })
                          }
                        }, 4496: (kk, Fk, Bk) => {
                          Bk.d(Fk, {
                            f: () => Wk,
                            d: () => mk
                          });
                          var Rk = Bk(61),
                            tk = Bk(1387),
                            ak = Bk(1812),
                            Xk = Bk(4503),
                            bk = Bk(1069);
                          const wk = (0, Rk.memo)((function(kk) {
                            let {
                              initialParameters: Fk
                            } = kk;
                            const Bk = (0, Rk.useRef)(null),
                              tk = (0, Rk.useRef)(null),
                              wk = (0, Rk.useRef)(0),
                              dk = (0, Rk.useRef)(null),
                              sk = Fk.description,
                              Vk = Fk.Pk,
                              {
                                scale: Jk,
                                rotation: Ak
                              } = null !== Fk && void 0 !== Fk ? Fk : {},
                              ek = (0, Xk.f)();
                            return (0, Rk.useEffect)((() => {
                              const kk = ek.onFrame((() => {
                                const kk = ek.getState();
                                if (!kk.isActive || !Bk.current || !tk.current) return;
                                const Fk = kk.state;
                                if (Bk.current.value = Fk.progress, Fk.clickCount > wk.current) {
                                  wk.current = Fk.clickCount;
                                  const kk = tk.current;
                                  kk.classList.add("pulse"), dk.current = setTimeout((() => {
                                    kk.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(dk.current), kk()
                              }
                            }), [ek]), (0, bk.jsx)(bk.Fragment, {
                              children: (0, bk.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Jk && {
                                    "--scale": Jk
                                  },
                                  ...null !== Ak && {
                                    "--rotation": `${Ak}deg`
                                  }
                                },
                                children: [(0, bk.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: Bk
                                }), (0, bk.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: tk,
                                  children: (0, bk.jsx)(ak.d, {
                                    text: [{
                                      icon: Vk
                                    }]
                                  })
                                }), (0, bk.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, bk.jsx)(ak.d, {
                                    text: sk
                                  })
                                })]
                              })
                            })
                          }));
                          var dk = Bk(1020),
                            sk = Bk.n(dk);
                          const Vk = 2 * Math.PI * 90,
                            Jk = (0, Rk.memo)((function(kk) {
                              let {
                                initialParameters: Fk
                              } = kk;
                              const Bk = (0, Rk.useRef)(null),
                                tk = (0, Rk.useRef)(null),
                                wk = (0, Rk.useRef)(null),
                                dk = Fk.label,
                                Jk = Fk.icon,
                                Ak = Fk.Ck,
                                {
                                  scale: ek,
                                  rotation: yk,
                                  Zk: fk
                                } = null !== Fk && void 0 !== Fk ? Fk : {},
                                mk = (0, Xk.f)();
                              return (0, Rk.useEffect)((() => {
                                const kk = mk.onFrame((() => {
                                  var kk, Fk;
                                  const Rk = mk.getState();
                                  if (!Rk.isActive || !tk.current) return;
                                  const ak = Rk.state,
                                    Xk = null !== (kk = ak.timeRemaining) && void 0 !== kk ? kk : 0,
                                    bk = null !== (Fk = ak.qk) && void 0 !== Fk ? Fk : 1,
                                    dk = Vk * (1 - Xk / bk);
                                  tk.current.style.strokeDashoffset = `${dk}`, Bk.current && (Bk.current.style.opacity = Xk > 0 ? "1" : "0"), wk.current && Ak && (wk.current.textContent = `${(Xk/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  kk()
                                }
                              }), [mk, Ak]), (0, bk.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: Bk,
                                style: {
                                  ...null !== ek && {
                                    "--scale": ek
                                  },
                                  ...null !== yk && {
                                    "--rotation": `${yk}deg`
                                  }
                                },
                                children: [(0, bk.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, bk.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, bk.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, bk.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Vk,
                                      ref: tk
                                    })]
                                  }), (0, bk.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, bk.jsx)(ak.d, {
                                      text: [{
                                        icon: Jk
                                      }],
                                      className: sk()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: fk
                                      })
                                    })
                                  })]
                                }), (0, bk.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, bk.jsx)(ak.d, {
                                    text: dk,
                                    className: "QTETimedClickLabelText"
                                  }), Ak && (0, bk.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: wk
                                  })]
                                })]
                              })
                            })),
                            Ak = (0, Rk.memo)((function(kk) {
                              let {
                                initialParameters: Fk
                              } = kk;
                              const Bk = (0, Rk.useRef)(null),
                                tk = (0, Rk.useRef)(null),
                                wk = (0, Rk.useRef)(null),
                                dk = (0, Rk.useRef)(!1),
                                sk = Fk.description,
                                Vk = null === Fk || void 0 === Fk ? void 0 : Fk.icon,
                                Jk = (0, Xk.f)();
                              return (0, Rk.useEffect)((() => {
                                const kk = Jk.onFrame((() => {
                                  const kk = Jk.getState();
                                  if (!kk.isActive) return;
                                  const Fk = kk.state;
                                  if (Bk.current) {
                                    const kk = 100 * (Fk.catchZonePosition - Fk.xk / 2);
                                    Bk.current.style.left = `${kk}%`, Bk.current.style.width = 100 * Fk.xk + "%", Fk.isCatching !== dk.current && (dk.current = Fk.isCatching, Fk.isCatching ? Bk.current.classList.add("catching") : Bk.current.classList.remove("catching"))
                                  }
                                  tk.current && (tk.current.style.left = 100 * Fk.moverPosition + "%"), wk.current && (wk.current.value = Fk.progress)
                                }));
                                return () => {
                                  kk()
                                }
                              }), [Jk]), (0, bk.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, bk.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, bk.jsx)(ak.d, {
                                    text: sk
                                  })
                                }), (0, bk.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: wk
                                }), (0, bk.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, bk.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: Bk
                                  }), (0, bk.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: tk,
                                    children: (0, bk.jsx)("span", {
                                      children: Vk && (0, bk.jsx)(ak.d, {
                                        text: [{
                                          icon: Vk,
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
                          var ek = Bk(606);
                          const yk = (0, Rk.memo)((function(kk) {
                              let {
                                initialParameters: Fk
                              } = kk;
                              const Bk = (0, Rk.useRef)(null),
                                tk = Fk.label,
                                wk = Fk.FF,
                                {
                                  icon: dk,
                                  scale: sk,
                                  rotation: Vk
                                } = null !== Fk && void 0 !== Fk ? Fk : {},
                                Jk = 100 * (.5 - wk / 2),
                                Ak = 100 * wk,
                                yk = (0, Xk.f)();
                              return (0, Rk.useEffect)((() => {
                                const kk = yk.onFrame((() => {
                                  const kk = yk.getState();
                                  if (!kk.isActive || !Bk.current) return;
                                  const Fk = kk.state;
                                  Bk.current.style.left = 100 * Fk.markerPosition + "%"
                                }));
                                return () => {
                                  kk()
                                }
                              }), [yk]), (0, bk.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, ek.F)(sk) && {
                                    "--scale": sk
                                  },
                                  ...!(0, ek.F)(Vk) && {
                                    "--rotation": `${Vk}deg`
                                  }
                                },
                                children: [dk && (0, bk.jsx)(ak.d, {
                                  text: [{
                                    icon: dk
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, bk.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, bk.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Jk}%`,
                                      width: `${Ak}%`
                                    }
                                  }), (0, bk.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: Bk
                                  })]
                                }), (0, bk.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, bk.jsx)(ak.d, {
                                    text: tk
                                  })
                                })]
                              })
                            })),
                            fk = (0, Rk.memo)((function(kk) {
                              let {
                                initialParameters: Fk
                              } = kk;
                              const Bk = (0, Rk.useRef)(null),
                                [tk, wk] = (0, Rk.useState)((() => new Array(Fk.RF).fill("pending"))),
                                [dk, sk] = (0, Rk.useState)((() => {
                                  const kk = Fk.XF;
                                  return (0, ek.F)(kk) || kk <= 0 ? [] : new Array(kk).fill("pending")
                                })),
                                Vk = Fk.label,
                                {
                                  icon: Jk
                                } = Fk,
                                Ak = (0, Rk.useRef)(0),
                                yk = (0, Rk.useRef)(0),
                                fk = (0, Rk.useRef)([]),
                                mk = (0, Xk.f)();
                              return (0, Rk.useEffect)((() => {
                                const kk = mk.onFrame((() => {
                                  const kk = mk.getState();
                                  if (!kk.isActive || !Bk.current) return;
                                  const Fk = kk.state,
                                    Rk = 30 + 60 * Fk.outerCircleProgress;
                                  if (Bk.current.setAttribute("r", String(Rk)), !0 === Fk.lastClickResult && Fk.successes > Ak.current) {
                                    Bk.current.classList.remove("QTERhythmClickOuterCircle--miss"), Bk.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const kk = setTimeout((() => {
                                      var kk;
                                      null === (kk = Bk.current) || void 0 === kk || kk.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    fk.current.push(kk)
                                  } else if (!1 === Fk.lastClickResult && Fk.misses > yk.current) {
                                    Bk.current.classList.remove("QTERhythmClickOuterCircle--hit"), Bk.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const kk = setTimeout((() => {
                                      var kk;
                                      null === (kk = Bk.current) || void 0 === kk || kk.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    fk.current.push(kk)
                                  }
                                  Fk.successes === Ak.current && Fk.misses === yk.current || (Ak.current = Fk.successes, yk.current = Fk.misses, wk((kk => {
                                    const Bk = [...kk];
                                    for (let Rk = 0; Rk < Fk.RF; Rk++) Bk[Rk] = Rk < Fk.successes ? "success" : "pending";
                                    return Bk
                                  })), sk((kk => {
                                    if (0 === kk.length) return kk;
                                    const Bk = [...kk];
                                    for (let Rk = 0; Rk < Bk.length; Rk++) Bk[Rk] = Rk < Fk.misses ? "miss" : "pending";
                                    return Bk
                                  })))
                                }));
                                return () => {
                                  kk();
                                  for (const kk of fk.current) clearTimeout(kk);
                                  fk.current = []
                                }
                              }), [mk]), (0, bk.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, bk.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: tk.map(((kk, Fk) => (0, bk.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === kk ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, Fk)))
                                }), (0, bk.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, bk.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, bk.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, bk.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: Bk
                                    })]
                                  }), Jk && (0, bk.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, bk.jsx)(ak.d, {
                                      text: [{
                                        icon: Jk
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), dk.length > 0 && (0, bk.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: dk.map(((kk, Fk) => (0, bk.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === kk ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, Fk)))
                                }), (0, bk.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, bk.jsx)(ak.d, {
                                    text: Vk
                                  })
                                })]
                              })
                            }));

                          function mk(kk) {
                            let {
                              qte: Fk
                            } = kk;
                            switch (Fk.type) {
                              case "progressBar":
                                return (0, bk.jsx)(wk, {
                                  initialParameters: Fk.parameters
                                });
                              case "timedClick":
                                return (0, bk.jsx)(Jk, {
                                  initialParameters: Fk.parameters
                                });
                              case "gravityBar":
                                return (0, bk.jsx)(Ak, {
                                  initialParameters: Fk.parameters
                                });
                              case "precisionBar":
                                return (0, bk.jsx)(yk, {
                                  initialParameters: Fk.parameters
                                });
                              case "rhythmClick":
                                return (0, bk.jsx)(fk, {
                                  initialParameters: Fk.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Wk = (0, Rk.memo)((function() {
                            const [kk, Fk] = (0, Rk.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, tk.f)("qteStateUpdated", (kk => {
                              Fk(kk)
                            })), kk.isActive && kk.type ? (0, bk.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, bk.jsx)(mk, {
                                qte: kk
                              })
                            }) : null
                          }))
                        }, 4503: (kk, Fk, Bk) => {
                          Bk.d(Fk, {
                            b: () => bk,
                            f: () => wk
                          });
                          var Rk = Bk(61),
                            tk = Bk(1245),
                            ak = Bk(4507);
                          const Xk = {
                              getState: () => ak.b.getCurrentState(),
                              onFrame: tk.h
                            },
                            bk = (0, Rk.createContext)(Xk);

                          function wk() {
                            return (0, Rk.useContext)(bk)
                          }
                        }, 4568: (kk, Fk, Bk) => {
                          Bk.d(Fk, {
                            e: () => Gk,
                            h: () => ck
                          });
                          var Rk = Bk(4570),
                            tk = Bk(279);
                          const ak = 120,
                            Xk = 260,
                            bk = 1.15,
                            wk = 1.2,
                            dk = 2,
                            sk = 1.08,
                            Vk = .8,
                            Jk = .95,
                            Ak = 8,
                            ek = "[\"')\\]\u300d\u300f\uff09]*",
                            yk = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ek}$`),
                            fk = new RegExp(`[?\uff1f]${ek}$`),
                            mk = new RegExp(`[!\uff01]${ek}$`),
                            Wk = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            vk = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            ik = new RegExp(`[${vk}]`),
                            Yk = new RegExp(`[${vk}]|[^${vk}]+`, "g"),
                            Lk = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Ok(kk) {
                            let Fk = 2166136261;
                            for (let Bk = 0; Bk < kk.length; Bk++) Fk ^= kk.charCodeAt(Bk), Fk = Math.imul(Fk, 16777619);
                            return (Fk >>> 0) / 4294967295 * 2 - 1
                          }

                          function Ek(kk) {
                            var Fk;
                            if (ik.test(kk)) return 1;
                            const Bk = kk.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Rk = Bk.replace(/[^0-9]/g, "");
                            if (Rk.length > 0 && !/\p{L}/u.test(Bk)) return Math.min(Rk.length, 4);
                            const tk = null !== (Fk = Bk.match(Lk)) && void 0 !== Fk ? Fk : [];
                            if (0 === tk.length) {
                              var ak, Xk;
                              const kk = null !== (ak = null === (Xk = Bk.match(/\p{L}/gu)) || void 0 === Xk ? void 0 : Xk.length) && void 0 !== ak ? ak : 0;
                              return 0 === kk ? 0 : Math.min(Math.max(1, Math.round(kk / 2.5)), Ak)
                            }
                            const bk = Bk.replace(/[^\p{L}]/gu, ""),
                              wk = tk.length > 1 && "e" === tk.at(-1) && bk.endsWith("e") && !bk.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(kk.replace(/[^\p{L}]/gu, ""));
                            return Math.min(tk.length - (wk ? 1 : 0), Ak)
                          }

                          function Sk(kk) {
                            return kk.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Nk(kk) {
                            const Fk = kk.replace(/[^\p{L}]/gu, "");
                            return Fk.length >= 2 && Fk === Fk.toUpperCase() && Fk !== Fk.toLowerCase()
                          }

                          function Hk(kk, Fk) {
                            var Bk;
                            const Ak = Fk && (0, Rk.l)(Fk),
                              ek = null !== (Bk = null === Ak || void 0 === Ak ? void 0 : Ak.syllableMs) && void 0 !== Bk ? Bk : Rk.e,
                              vk = function(kk) {
                                const Fk = [];
                                for (const Rk of (0, tk.bc)(kk))
                                  if ("string" === typeof Rk)
                                    for (const kk of Rk.split(/(\s+)/)) {
                                      if ("" === kk) continue;
                                      if (/^\s+$/.test(kk)) {
                                        Fk.push({
                                          kind: "space",
                                          text: kk
                                        });
                                        continue
                                      }
                                      if (!ik.test(kk)) {
                                        Fk.push({
                                          kind: "word",
                                          text: kk,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Rk = !0;
                                      for (const tk of null !== (Bk = kk.match(Yk)) && void 0 !== Bk ? Bk : []) {
                                        var Bk;
                                        const kk = Fk.at(-1);
                                        Rk || "word" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || ik.test(tk) || /[\p{L}\p{N}]/u.test(tk) ? (Rk || Fk.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), Fk.push({
                                          kind: "word",
                                          text: tk,
                                          delayMs: 0
                                        }), Rk = !1) : kk.text += tk
                                      }
                                    } else Fk.push({
                                      kind: "icon",
                                      text: Rk.icon,
                                      delayMs: 0
                                    });
                                return Fk
                              }(kk),
                              Lk = [];
                            let Hk = [];
                            for (const Rk of vk) "space" !== Rk.kind && (Hk.push(Rk), yk.test(Rk.text) && (Lk.push(Hk), Hk = []));
                            Lk.push(Hk);
                            const uk = [];
                            let Mk = 0;
                            for (const Rk of Lk) {
                              var gk, Uk;
                              const kk = null !== (gk = null === (Uk = Rk.at(-1)) || void 0 === Uk ? void 0 : Uk.text) && void 0 !== gk ? gk : "",
                                Fk = fk.test(kk),
                                Bk = mk.test(kk),
                                tk = Rk.map((kk => "word" === kk.kind ? Ek(kk.text) : 1)),
                                vk = tk.findLastIndex((kk => kk > 0));
                              for (const [fk, mk] of Rk.entries()) {
                                const kk = "word" === mk.kind,
                                  Rk = tk[fk];
                                mk.delayMs = Mk;
                                for (let tk = 0; Ak && tk < Rk; tk++) {
                                  const {
                                    intonation: ak
                                  } = Ak;
                                  let Xk = vk > 0 ? -ak.declineSemitones * (fk / vk) : 0;
                                  Xk += Ok(`${Sk(mk.text)}|${tk}`) * ak.variationSemitones;
                                  const yk = Math.min(1, ak.variationSemitones);
                                  let Wk = Ak.glideSemitones,
                                    ik = 1;
                                  Bk && (Xk += ak.exclaimLiftSemitones, ik *= bk), Fk && fk === vk && (Xk += ak.questionRiseSemitones * (Rk > 1 ? .5 + .5 * tk / (Rk - 1) : 1), tk === Rk - 1 && (Wk = Math.abs(Wk) + ak.questionRiseSemitones / 2)), kk && Nk(mk.text) && (Xk += dk * yk, ik *= wk), Rk > 1 && 0 === tk && (Xk += Vk * yk, ik *= sk), uk.push({
                                    atMs: Mk + tk * ek,
                                    semitones: Xk,
                                    glideSemitones: Wk,
                                    durationMs: tk < Rk - 1 ? Math.min(Ak.durationMs, ek * Jk) : Ak.durationMs,
                                    level: ik
                                  })
                                }
                                Mk += Rk * ek + (yk.test(mk.text) ? Xk : Wk.test(mk.text) ? ak : 0)
                              }
                            }
                            return {
                              pieces: vk.map((kk => "space" === kk.kind ? kk : "icon" === kk.kind ? {
                                kind: "icon",
                                icon: kk.text,
                                delayMs: kk.delayMs
                              } : {
                                kind: "word",
                                text: kk.text,
                                delayMs: kk.delayMs
                              })),
                              blips: uk
                            }
                          }
                          var uk = Bk(1149),
                            Mk = Bk(1203),
                            gk = Bk(1849);

                          function Uk(kk) {
                            if ("string" === typeof kk) return kk;
                            const Fk = Mk.c.get().getCurrentLanguageCode();
                            return (0, uk.m)(Fk, kk.translationKey, (0, uk.k)(kk.params, gk.b.shown))
                          }

                          function ck(kk) {
                            const Fk = void 0 === kk.voice ? null : (0, Rk.m)(kk.voice),
                              Bk = Fk && (0, Rk.l)(Fk);
                            return {
                              plan: Hk(Uk(kk.line), Bk),
                              synth: Bk
                            }
                          }

                          function Gk(kk) {
                            const Fk = [];
                            let Bk = [];
                            for (const [tk, ak] of kk.entries()) {
                              var Rk;
                              "space" === ak.kind && (" " !== ak.text || "icon" !== (null === (Rk = kk[tk + 1]) || void 0 === Rk ? void 0 : Rk.kind)) ? (Bk.length > 0 && Fk.push(Bk), Fk.push([ak]), Bk = []) : Bk.push(ak)
                            }
                            return Bk.length > 0 && Fk.push(Bk), Fk
                          }
                        }, 4573: (kk, Fk, Bk) => {
                          Bk.d(Fk, {
                            e: () => sk,
                            f: () => Vk
                          });
                          var Rk = Bk(4575),
                            tk = Bk(22);
                          const ak = .25,
                            Xk = .85,
                            bk = .02,
                            wk = .01;

                          function dk(kk, Fk, Bk, Rk, tk, ak, bk) {
                            const {
                              waveform: wk,
                              pitchHz: dk,
                              attackMs: sk,
                              releaseMs: Vk,
                              lowpassHz: Jk
                            } = Bk, Ak = tk + Rk.durationMs / 1e3, ek = dk * 2 ** (Rk.semitones / 12), yk = kk.createOscillator();
                            yk.type = wk, yk.frequency.setValueAtTime(ek, tk), yk.frequency.exponentialRampToValueAtTime(ek * 2 ** (Rk.glideSemitones / 12), Ak);
                            const fk = tk + Math.min(sk, Rk.durationMs) / 1e3,
                              mk = kk.createGain();
                            mk.gain.setValueAtTime(0, tk), mk.gain.linearRampToValueAtTime(ak, fk), mk.gain.linearRampToValueAtTime(ak * Xk, Math.max(fk, Ak - Vk / 1e3)), mk.gain.linearRampToValueAtTime(0, Ak);
                            const Wk = [yk];
                            if (null !== Jk) {
                              const Fk = kk.createBiquadFilter();
                              Fk.type = "lowpass", Fk.frequency.value = Jk, Wk.push(Fk)
                            }
                            Wk.push(mk, Fk);
                            for (let Xk = 1; Xk < Wk.length; Xk++) Wk[Xk - 1].connect(Wk[Xk]);
                            return yk.onended = () => {
                              for (const kk of Wk.slice(0, -1)) kk.disconnect();
                              bk()
                            }, yk.start(tk), yk.stop(Ak), yk
                          }

                          function sk(kk, Fk, Bk, Rk, tk, Xk) {
                            if (0 === Rk.length) return Xk(), () => {};
                            const sk = ak * Bk.volume * tk,
                              Vk = kk.createGain();
                            Vk.connect(Fk);
                            const Jk = kk.currentTime + bk,
                              Ak = new Set;
                            for (const ak of Rk) {
                              const Fk = dk(kk, Vk, Bk, ak, Jk + ak.atMs / 1e3, sk * ak.level, (() => {
                                Ak.delete(Fk), 0 === Ak.size && (Vk.disconnect(), Xk())
                              }));
                              Ak.add(Fk)
                            }
                            return () => {
                              const Fk = kk.currentTime;
                              Vk.gain.setTargetAtTime(0, Fk, wk);
                              for (const kk of Ak) try {
                                kk.stop(Fk + 5 * wk)
                              } catch {}
                            }
                          }

                          function Vk(kk, Fk) {
                            var Bk;
                            const ak = Rk.Howler.ctx,
                              Xk = Rk.Howler.masterGain;
                            if (!ak || !Xk || !tk.c.get("soundOnFromAd")) return () => {};
                            const bk = Rk.Howler;
                            return null === (Bk = bk._autoResume) || void 0 === Bk || Bk.call(bk), sk(ak, Xk, kk, Fk, tk.c.get("soundVolume"), (() => {
                              var kk;
                              null === (kk = bk._autoSuspend) || void 0 === kk || kk.call(bk)
                            }))
                          }
                        }, 4575: (kk, Fk, Bk) => {
                          Bk.r(Fk), Bk.d(Fk, {
                            Howl: () => tk.Howl,
                            Howler: () => tk.Howler,
                            iosAudio: () => wk,
                            musicOutput: () => fk,
                            readyAudioContext: () => mk
                          });
                          var Rk, tk = Bk(4579),
                            ak = Bk(98);
                          const Xk = tk.Howler;
                          let bk;

                          function wk() {
                            return bk ??= "ios" === (0, ak.getOperatingSystem)(), bk
                          }

                          function dk() {
                            var kk, Fk;
                            if (Xk.ctx || !Xk.usingWebAudio || "undefined" === typeof AudioContext || !wk()) return;
                            const Bk = navigator.audioSession;
                            let Rk;
                            "auto" === (null === Bk || void 0 === Bk ? void 0 : Bk.type) && (Bk.type = "ambient");
                            try {
                              Rk = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const tk = Rk.createGain();
                            tk.gain.setValueAtTime(Xk._muted ? 0 : null !== (kk = Xk._volume) && void 0 !== kk ? kk : 1, Rk.currentTime), tk.connect(Rk.destination), Xk.ctx = Rk, Xk.masterGain = tk, null === (Fk = Xk._setup) || void 0 === Fk || Fk.call(Xk)
                          }
                          Xk._mobileUnloaded = !0;
                          const sk = Xk.volume.bind(tk.Howler);
                          Xk.volume = function() {
                            return dk(), sk(...arguments)
                          };
                          const Vk = Xk.mute.bind(tk.Howler);
                          Xk.mute = kk => (dk(), Vk(kk));
                          const Jk = tk.Howl.prototype,
                            Ak = Jk.init;
                          Jk.init = function(kk) {
                            return dk(), Ak.call(this, kk)
                          };
                          let ek = 0;
                          const yk = null === (Rk = Xk._autoSuspend) || void 0 === Rk ? void 0 : Rk.bind(tk.Howler);

                          function fk() {
                            mk();
                            const {
                              ctx: kk,
                              masterGain: Fk
                            } = Xk;
                            return kk && Fk ? {
                              ctx: kk,
                              destination: Fk,
                              holdAwake: kk => {
                                var Fk, Bk;
                                (ek += kk ? 1 : -1, kk) ? null === (Fk = Xk._autoResume) || void 0 === Fk || Fk.call(Xk): null === (Bk = Xk._autoSuspend) || void 0 === Bk || Bk.call(Xk)
                              },
                              wake: () => {
                                var Fk;
                                "running" !== kk.state && (null === (Fk = Xk._autoResume) || void 0 === Fk || Fk.call(Xk), kk.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function mk() {
                            var kk;
                            (Xk.volume(), Xk.ctx && Xk.autoUnlock) && (null === (kk = Xk._unlockAudio) || void 0 === kk || kk.call(Xk))
                          }
                          yk && (Xk._autoSuspend = () => ek > 0 ? tk.Howler : yk())
                        }, 4583: (kk, Fk, Bk) => {
                          function Rk(kk) {
                            return {
                              notAfter: kk
                            }
                          }
                          Bk.d(Fk, {
                            B: () => Vk,
                            e: () => wk,
                            i: () => dk,
                            l: () => bk,
                            n: () => Rk,
                            r: () => tk,
                            s: () => ak,
                            w: () => Xk,
                            y: () => sk
                          });
                          const tk = Rk("\\w$."),
                            ak = Rk("\\w.,");

                          function Xk(kk) {
                            return Fk => wk(Fk, kk)
                          }

                          function bk(kk) {
                            return Fk => !kk.test(Fk.input.slice(0, Fk.index))
                          }

                          function wk(kk, Fk) {
                            return kk.index > 0 && new RegExp(`[${Fk}]`).test(kk.input[kk.index - 1])
                          }

                          function dk(kk, Fk, Bk) {
                            return function(kk) {
                              return void 0 !== kk && "function" !== typeof kk
                            }(Bk) ? function(kk, Fk, Bk) {
                              const Rk = Fk.flags.replace(/[gy]/g, ""),
                                tk = new RegExp(`[^${Bk}](?:${Fk.source})`, `${Rk}g`),
                                ak = [],
                                Xk = Bk => {
                                  const Rk = Bk.index + Bk[0].length;
                                  return ("" === Bk[0] ? Jk(kk, Fk, Rk) : Rk) - 1
                                },
                                bk = new RegExp(`(?:${Fk.source})`, `${Rk}y`).exec(kk);
                              if (bk) {
                                if (ak.push(bk), !Fk.global) return ak;
                                tk.lastIndex = Xk(bk)
                              }
                              for (let wk = tk.exec(kk); wk; wk = tk.exec(kk)) {
                                const Bk = Jk(kk, Fk, wk.index) - wk.index;
                                if (wk[0] = wk[0].slice(Bk), wk.index += Bk, ak.push(wk), !Fk.global) break;
                                tk.lastIndex = Xk(wk)
                              }
                              return ak
                            }(kk, Fk, Bk.notAfter) : function(kk, Fk, Bk) {
                              const Rk = new RegExp(Fk.source, `${Fk.flags.replace(/[gy]/g,"")}g`),
                                tk = [];
                              for (let ak = Rk.exec(kk); ak; ak = Rk.exec(kk))
                                if (!Bk || Bk(ak)) {
                                  if (tk.push(ak), !Fk.global) break;
                                  "" === ak[0] && (Rk.lastIndex = Jk(kk, Fk, Rk.lastIndex))
                                } else Rk.lastIndex = Jk(kk, Fk, ak.index);
                              return tk
                            }(kk, Fk, Bk)
                          }

                          function sk(kk, Fk, Bk, Rk) {
                            let tk = "",
                              ak = 0;
                            for (const Xk of dk(kk, Fk, Bk)) tk += kk.slice(ak, Xk.index) + Rk(Xk), ak = Xk.index + Xk[0].length;
                            return tk + kk.slice(ak)
                          }

                          function Vk(kk, Fk, Bk) {
                            const Rk = [];
                            let tk = 0;
                            for (const ak of dk(kk, Fk, Bk)) Rk.push(kk.slice(tk, ak.index)), tk = ak.index + ak[0].length;
                            return [...Rk, kk.slice(tk)]
                          }

                          function Jk(kk, Fk, Bk) {
                            var Rk;
                            return Bk + (Fk.unicode && (null !== (Rk = kk.codePointAt(Bk)) && void 0 !== Rk ? Rk : 0) > 65535 ? 2 : 1)
                          }
                        }, 4553: (kk, Fk, Bk) => {
                          Bk.d(Fk, {
                            A: () => Ak,
                            c: () => tk,
                            f: () => wk,
                            i: () => ak,
                            j: () => Xk,
                            k: () => bk,
                            l: () => fk,
                            p: () => sk,
                            t: () => Vk,
                            w: () => yk
                          });
                          var Rk = Bk(1535);
                          const tk = 24e3,
                            ak = "/docs/llms.txt",
                            Xk = `${Rk.b}${ak}`,
                            bk = "/llms.txt",
                            wk = "/docs/llms-full.txt";

                          function dk(kk) {
                            return kk || "index"
                          }

                          function sk(kk) {
                            return `/docs/${dk(kk)}.md`
                          }

                          function Vk(kk, Fk) {
                            return `/docs/${dk(kk)}/${Fk+1}.md`
                          }
                          const Jk = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Ak(kk) {
                            const Fk = Jk.exec(kk);
                            return null === Fk ? null : {
                              name: Fk[1],
                              part: void 0 === Fk[2] ? null : Number(Fk[2])
                            }
                          }
                          const ek = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function yk(kk) {
                            const Fk = ek.exec(kk);
                            if (null === Fk) return null;
                            const [, Bk = "", Rk] = Fk;
                            return void 0 === Rk ? sk(Bk) : Vk(Bk, Number(Rk) - 1)
                          }

                          function fk(kk) {
                            return `/docsHtml/${dk(kk)}.html`
                          }
                        }, 4570: (kk, Fk, Bk) => {
                          Bk.d(Fk, {
                            e: () => tk,
                            i: () => Rk,
                            j: () => ak,
                            l: () => wk,
                            m: () => Xk
                          });
                          const Rk = ["sine", "triangle", "square", "sawtooth"],
                            tk = 55,
                            ak = {
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

                          function Xk(kk) {
                            return "string" !== typeof kk ? kk : Object.hasOwn(ak, kk) ? ak[kk] : null
                          }

                          function bk(kk, Fk, Bk) {
                            return Math.min(Bk, Math.max(Fk, kk))
                          }

                          function wk(kk) {
                            const Fk = bk(kk.durationMs, 10, 500),
                              Bk = bk(kk.attackMs, 0, Fk),
                              {
                                intonation: tk
                              } = kk;
                            return {
                              waveform: Rk.includes(kk.waveform) ? kk.waveform : "sine",
                              pitchHz: bk(kk.pitchHz, 20, 4e3),
                              glideSemitones: bk(kk.glideSemitones, -24, 24),
                              durationMs: Fk,
                              attackMs: Bk,
                              releaseMs: bk(kk.releaseMs, 0, Fk - Bk),
                              lowpassHz: null === kk.lowpassHz ? null : bk(kk.lowpassHz, 20, 2e4),
                              volume: bk(kk.volume, 0, 2),
                              intonation: {
                                variationSemitones: bk(tk.variationSemitones, 0, 6),
                                declineSemitones: bk(tk.declineSemitones, 0, 12),
                                questionRiseSemitones: bk(tk.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: bk(tk.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: bk(kk.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const kk in modules) Object.freeze(modules[kk]);