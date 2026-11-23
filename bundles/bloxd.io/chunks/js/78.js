export const id = 78;
export const ids = [78, 93];
export const modules = {
    4829: (kk, Fk, Ik) => {
      Ik.d(Fk, {
        e: () => Hk,
        h: () => Jk
      });
      var Xk = Ik(1055),
        Tk = Ik.n(Xk),
        ik = Ik(58),
        yk = Ik(1179),
        lk = Ik(4833),
        ak = Ik(1849),
        qk = Ik(2349),
        Lk = Ik(4837),
        tk = Ik(1096);
      const Zk = new WeakMap;
      let jk = 0;

      function ek(kk) {
        let Fk = Zk.get(kk);
        return void 0 === Fk && (Fk = jk++, Zk.set(kk, Fk)), Fk
      }

      function wk(kk) {
        let {
          piece: Fk
        } = kk;
        return "space" === Fk.kind ? (0, tk.jsx)(tk.Fragment, {
          children: Fk.text
        }) : (0, tk.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${Fk.delayMs}ms`
          },
          children: (0, tk.jsx)(lk.b, {
            text: "icon" === Fk.kind ? `[[${Fk.icon}]]` : Fk.text
          })
        })
      }

      function Hk(kk) {
        let {
          display: Fk
        } = kk;
        const {
          selectedLanguage: Ik
        } = (0, yk.y)(), Xk = (0, ik.useMemo)((() => (0, Lk.d)((0, Lk.e)(Fk).plan.pieces)), [Fk, Ik.code]);
        return (0, tk.jsxs)("div", {
          className: Tk()("Dialogue", {
            DialogueAnimateIn: !1 !== Fk.animateIn
          }),
          children: [Fk.speakerName && (0, tk.jsx)(ak.c, {
            text: Fk.speakerName,
            className: "DialogueSpeaker"
          }), (0, tk.jsx)("p", {
            className: "DialogueLine",
            children: Xk.map(((kk, Fk) => 1 === kk.length && "space" === kk[0].kind ? kk[0].text : (0, tk.jsx)("span", {
              className: "DialogueGlue",
              children: kk.map(((kk, Fk) => (0, tk.jsx)(wk, {
                piece: kk
              }, Fk)))
            }, Fk)))
          })]
        })
      }
      const Jk = (0, ik.memo)((function() {
        const kk = (0, qk.j)("dialogue");
        return (0, tk.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: kk && (0, tk.jsx)(Hk, {
            display: kk
          }, ek(kk))
        })
      }))
    },
    4707: (kk, Fk, Ik) => {
        Ik.r(Fk), Ik.d(Fk, {
          default: () => Fy
        });
        var Xk = Ik(58),
          Tk = Ik(1055),
          ik = Ik.n(Tk),
          yk = Ik(1481),
          lk = Ik(1485),
          ak = Ik(25),
          qk = Ik(74),
          Lk = Ik(4714),
          tk = Ik(4729),
          Zk = Ik(4731),
          jk = Ik(4335),
          ek = Ik(1096);
        const wk = "/textures/docs/icons";

        function Hk(kk) {
          let {
            name: Fk,
            isTinted: Ik,
            className: Xk,
            style: Tk
          } = kk;
          const yk = `${wk}/${Fk}.png`;
          return Ik ? (0, ek.jsxs)("span", {
            className: ik()("DocsPixelIcon", "Tinted", Xk),
            "aria-hidden": "true",
            style: Tk,
            children: [(0, ek.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${yk}")`,
                WebkitMaskImage: `url("${yk}")`
              }
            }), (0, ek.jsx)("img", {
              src: yk,
              alt: ""
            })]
          }) : (0, ek.jsx)("img", {
            className: ik()("DocsPixelIcon", Xk),
            src: yk,
            alt: "",
            "aria-hidden": "true",
            style: Tk
          })
        }
        const Jk = 1500;

        function xk() {
          const [kk, Fk] = (0, Xk.useState)(null);
          (0, Xk.useEffect)((() => {
            if (null === kk) return;
            const Ik = setTimeout((() => {
              Fk(null)
            }), Jk);
            return () => {
              clearTimeout(Ik)
            }
          }), [kk]);
          return [kk, kk => {
            (0, jk.b)(kk).then((() => {
              Fk({
                text: kk,
                failed: !1
              })
            }), (Ik => {
              console.error("Could not copy to the clipboard", Ik), Fk({
                text: kk,
                failed: !0
              })
            }))
          }]
        }

        function Pk(kk) {
          let {
            text: Fk,
            label: Ik,
            className: Xk
          } = kk;
          const [Tk, yk] = xk(), lk = !1 === (null === Tk || void 0 === Tk ? void 0 : Tk.failed);
          return (0, ek.jsxs)("button", {
            type: "button",
            className: ik()("DocsCopyButton", Xk, {
              Copied: lk
            }),
            title: `Copy ${Fk.length>40?"to clipboard":Fk}`,
            "aria-label": Ik ? void 0 : `Copy ${Fk}`,
            onClick: kk => {
              kk.stopPropagation(), yk(Fk)
            },
            children: [(0, ek.jsx)(Hk, {
              name: lk ? "check" : "copy"
            }), Ik && (0, ek.jsx)("span", {
              children: lk ? "Copied" : null !== Tk && void 0 !== Tk && Tk.failed ? "Copy failed" : Ik
            })]
          })
        }
        Lk.c.registerLanguage("javascript", tk.b), Lk.c.registerLanguage("typescript", Zk.d);
        const Kk = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Qk = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          sk = 24;

        function Vk(kk) {
          let {
            code: Fk,
            lang: Ik,
            compact: Tk = !1
          } = kk;
          const yk = (0, Xk.useMemo)((() => function(kk, Fk) {
              const Ik = Kk[Fk];
              return Ik ? Lk.c.highlight(kk, {
                language: Ik
              }).value : kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(Fk, Ik)), [Fk, Ik]),
            lk = Fk.split("\n").length,
            ak = !Tk && lk > sk + 6,
            [qk, tk] = (0, Xk.useState)(!1),
            Zk = Kk[Ik];
          return (0, ek.jsxs)("div", {
            className: ik()("DocsCodeBlock", {
              Compact: Tk,
              Collapsed: ak && !qk
            }),
            children: [!Tk && (0, ek.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, ek.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Zk ? Qk[Zk] : "Text"
              }), (0, ek.jsx)(Pk, {
                text: Fk,
                label: "Copy"
              })]
            }), (0, ek.jsx)("pre", {
              children: (0, ek.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: yk
                }
              })
            }), ak && (0, ek.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": qk,
              onClick: () => {
                tk(!qk)
              },
              children: [(0, ek.jsx)(Hk, {
                name: qk ? "chevron-up" : "chevron-down"
              }), qk ? "Show less" : `Show all ${lk} lines`]
            })]
          })
        }
        var zk = Ik(4739);
        var Sk = Ik(4745);
        const vk = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Ek(kk) {
          const Fk = new Map;
          let Ik, Xk = [],
            Tk = !1;
          const ik = () => {
            Ik && Fk.set(Ik.name, Ik.lines.join("\n").trimEnd())
          };
          for (const yk of kk.split("\n")) {
            const kk = yk.match(vk);
            Tk || yk.startsWith("/*") ? (Tk || (ik(), Ik = void 0), Xk.push(yk), Tk = !yk.includes("*/")) : kk ? (ik(), Ik = {
              name: kk[1],
              lines: [...Xk, yk]
            }, Xk = []) : Ik && (yk.startsWith(" ") || yk.startsWith("\t") || /^[}\])|]/.test(yk)) ? Ik.lines.push(yk) : Ik && "" !== yk.trim() && (ik(), Ik = void 0)
          }
          return ik(), Fk
        }

        function Ok(kk) {
          return "methods" === kk || "callbacks" === kk || "settings" === kk
        }
        const nk = {
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
          Gk = {
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

        function pk(kk) {
          return kk.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function uk(kk) {
          let Fk = !1;
          return kk.split("\n").map((kk => (kk.startsWith("```") && (Fk = !Fk), !Fk && /^#{3,} /.test(kk) ? kk.slice(1) : kk))).join("\n")
        }

        function bk(kk) {
          return "readme" === kk ? "getting-started" : pk(kk)
        }
        const Rk = "## Glossary of Referenced Types";
        const Uk = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...Sk.d.flatMap((kk => {
            const Fk = {
              id: kk.id,
              slug: bk(kk.id),
              title: kk.title,
              markdown: kk.content,
              ...nk[kk.id]
            };
            if ("readme" === kk.id) return function(kk) {
              const Fk = kk.markdown.indexOf(Rk),
                Ik = kk.markdown.indexOf("\n```", Fk),
                Xk = kk.markdown.indexOf("\n```", Ik + 1);
              if (-1 === Fk || -1 === Ik || -1 === Xk) throw new Error(`Getting started has no "${Rk}" section with a code block`);
              const Tk = kk.markdown.slice(Fk + 31, Ik).trim(),
                ik = [...Ek(kk.markdown.slice(kk.markdown.indexOf("\n", Ik + 1) + 1, Xk))].map((kk => {
                  let [Fk, Ik] = kk;
                  return `## ${Fk}\n\n\`\`\`ts\n${Ik}\n\`\`\`\n`
                })),
                yk = kk.markdown.slice(kk.markdown.indexOf("\n", Xk + 1) + 1);
              return [{
                ...kk,
                markdown: `${kk.markdown.slice(0,Fk)}${yk}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Tk}\n\n${ik.join("\n")}`
              }]
            }(Fk);
            if ("howTo" === kk.id) {
              const {
                parent: kk,
                guides: Ik
              } = function(kk) {
                const [Fk, ...Ik] = kk.markdown.split(/^(?=## )/m), Xk = [Fk], Tk = [];
                for (const yk of Ik) {
                  var ik;
                  const Fk = yk.indexOf("\n"),
                    Ik = yk.slice(3, Fk).trim(),
                    lk = yk.slice(Fk + 1);
                  if (!lk.includes("```")) {
                    Xk.push(yk);
                    continue
                  }
                  const ak = null !== (ik = Gk[Ik]) && void 0 !== ik ? ik : {
                    icon: "lightbulb",
                    summary: `How to use ${Ik.toLowerCase()} in World Code.`
                  };
                  Tk.push({
                    id: `${kk.id}${Ik.split(/[^A-Za-z0-9]+/).map((kk=>kk.charAt(0).toUpperCase()+kk.slice(1))).join("")}`,
                    slug: `${kk.slug}-${pk(Ik)}`,
                    title: Ik,
                    layout: "article",
                    sourceAnchor: (0, zk.t)(Ik),
                    markdown: `# ${Ik}\n\n${uk(lk)}`,
                    ...ak
                  })
                }
                return {
                  parent: {
                    ...kk,
                    markdown: Xk.join(""),
                    childPageIds: Tk.map((kk => kk.id))
                  },
                  guides: Tk
                }
              }(Fk);
              return [kk, ...Ik]
            }
            return [Fk]
          }))],
          Ck = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Uk.filter((kk => void 0 !== kk.sourceAnchor)).map((kk => kk.id))]
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

        function Nk(kk) {
          return Uk.find((Fk => Fk.id === kk))
        }
        const ck = new Map;

        function Wk(kk) {
          let Fk = ck.get(kk.id);
          return Fk || (Fk = (0, zk.w)(kk.markdown, "changelog" === kk.layout ? 3 : 2), ck.set(kk.id, Fk)), Fk
        }

        function fk(kk, Fk) {
          return Wk(kk).sections.some((kk => kk.heading.anchor === Fk || kk.blocks.some((kk => "heading" === kk.kind && kk.anchor === Fk))))
        }

        function Bk(kk) {
          const [Fk, ...Ik] = kk.replace(/^#/, "").split("-"), Xk = Uk.find((kk => kk.id === Fk));
          if (!Xk) return null;
          const Tk = Ik.length > 0 ? (0, zk.t)(Ik.join("-")) : "";
          for (const yk of null !== (ik = Xk.childPageIds) && void 0 !== ik ? ik : []) {
            var ik;
            const kk = Nk(yk);
            if (kk.sourceAnchor === Tk) return {
              page: kk,
              anchor: ""
            };
            if (fk(kk, Tk)) return {
              page: kk,
              anchor: Tk
            }
          }
          return {
            page: Xk,
            anchor: Tk
          }
        }
        const dk = {
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

        function Yk(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Xk = Fk.slug ? `${kk}/${Fk.slug}` : kk;
          return Ik ? `${Xk}#${Ik}` : Xk
        }
        var Ak = Ik(4761);
        const gk = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          mk = new Set(["GameApi", "Console", "_TypeOf"]),
          hk = 4;

        function rk(kk) {
          let Fk = kk.length;
          for (; Fk > 0 && "" === kk[Fk - 1].trim();) Fk--;
          return kk.slice(0, Fk)
        }

        function Dk(kk) {
          var Fk;
          const Ik = rk(kk);
          if (null === (Fk = Ik.at(-1)) || void 0 === Fk || !Fk.trimEnd().endsWith("*/")) return {
            lines: Ik,
            doc: ""
          };
          const Xk = Ik.findLastIndex((kk => kk.startsWith("/**")));
          return -1 === Xk ? {
            lines: Ik,
            doc: ""
          } : {
            lines: rk(Ik.slice(0, Xk)),
            doc: Ik.slice(Xk).join("\n")
          }
        }

        function Mk(kk) {
          var Fk;
          const Ik = kk.split("\n"),
            Xk = Ik.flatMap(((kk, Fk) => gk.test(kk) ? [Fk] : []));
          let Tk = Dk(Ik.slice(0, null !== (Fk = Xk[0]) && void 0 !== Fk ? Fk : Ik.length)).doc;
          return Xk.map(((kk, Fk) => {
            var ik;
            const yk = Dk(Ik.slice(kk, null !== (ik = Xk[Fk + 1]) && void 0 !== ik ? ik : Ik.length)),
              lk = {
                name: Ik[kk].match(gk)[1],
                doc: Tk,
                lines: yk.lines
              };
            return Tk = yk.doc, lk
          }))
        }

        function kF(kk) {
          var Fk;
          const Ik = kk.match(/^readonly \[([\s\S]*)\]$/);
          return Ik ? null !== (Fk = Ik[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Fk ? Fk : [] : null
        }

        function FF(kk) {
          if (!kk.startsWith("{") || !kk.endsWith("}")) return null;
          const Fk = {
              keys: [],
              values: []
            },
            Ik = kk => {
              const Ik = kk.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              Ik && (Fk.keys.push(Ik[1].startsWith('"') ? Ik[1] : `"${Ik[1]}"`), Fk.values.push(Ik[2].trim()))
            };
          let Xk = 0,
            Tk = "";
          for (const ik of kk.slice(1, -1)) "{[(".includes(ik) ? Xk++ : "}])".includes(ik) && Xk--, ";" === ik && 0 === Xk ? (Ik(Tk), Tk = "") : Tk += ik;
          return Ik(Tk), Fk
        }

        function IF(kk) {
          return kk.length > hk ? `\n\t| ${kk.join("\n\t| ")}` : kk.join(" | ")
        }

        function XF(kk, Fk) {
          const Ik = function(kk, Fk) {
            return kk.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((kk, Ik) => {
              var Xk;
              const Tk = null === (Xk = Fk.get(Ik)) || void 0 === Xk ? void 0 : Xk.object;
              return Tk ? IF(Tk.values) : kk
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((kk, Ik) => {
              var Xk, Tk;
              const ik = null === (Xk = Fk.get(Ik)) || void 0 === Xk || null === (Tk = Xk.object) || void 0 === Tk ? void 0 : Tk.values.map(kF);
              return null !== ik && void 0 !== ik && ik.every((kk => null !== kk)) ? IF([...new Set(ik.flat())]) : kk
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((kk, Ik) => {
              var Xk;
              const Tk = null === (Xk = Fk.get(Ik)) || void 0 === Xk ? void 0 : Xk.members;
              return Tk ? IF(Tk) : kk
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((kk, Ik) => {
              var Xk;
              const Tk = null === (Xk = Fk.get(Ik)) || void 0 === Xk ? void 0 : Xk.object;
              return Tk ? IF(Tk.keys) : kk
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((kk, Ik) => {
              var Xk, Tk;
              return null !== (Xk = null === (Tk = Fk.get(Ik)) || void 0 === Tk ? void 0 : Tk.text) && void 0 !== Xk ? Xk : kk
            }))
          }(kk.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), Fk);
          return [kk.doc, Ik].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function TF(kk) {
          const Fk = Mk(kk),
            Ik = function(kk) {
              const Fk = new Map,
                Ik = kk.find((kk => "_TypeOf" === kk.name));
              let Xk = null;
              const Tk = () => {
                if (Xk) {
                  const kk = Xk.lines.join("\n");
                  Fk.set(Xk.name, {
                    text: kk,
                    members: kF(kk),
                    object: FF(kk)
                  })
                }
              };
              for (const ik of Ik.lines.slice(1, -1)) {
                const kk = ik.match(/^\t([\w$]+): (.+)$/);
                kk ? (Tk(), Xk = {
                  name: kk[1],
                  lines: [kk[2]]
                }) : Xk && Xk.lines.push(ik.replace(/^\t/, ""))
              }
              return Tk(), Fk
            }(Fk),
            Xk = new Map;
          for (const Tk of Fk) mk.has(Tk.name) || Xk.has(Tk.name) || Xk.set(Tk.name, XF(Tk, Ik));
          return Xk
        }
        let iF, yF, lF;

        function aF() {
          return yF ??= function(kk) {
            const Fk = Mk(kk).find((kk => "GameApi" === kk.name)),
              Ik = new Map,
              Xk = Fk.lines;
            for (let ik = 0; ik < Xk.length; ik++) {
              var Tk;
              if (!Xk[ik].trimStart().startsWith("/**")) continue;
              const kk = ik;
              for (; ik < Xk.length && !Xk[ik].includes("*/");) ik++;
              const Fk = null === (Tk = Xk[ik + 1]) || void 0 === Tk ? void 0 : Tk.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!Fk) continue;
              let yk = null;
              const lk = [];
              let ak = "description",
                qk = !1;
              for (const Ik of Xk.slice(kk, ik + 1).join("\n").split("\n").map((kk => kk.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const kk = Ik.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                kk ? (yk = kk[1].trim(), ak = "deprecation") : Ik.startsWith("@") ? (ak = "otherTag", qk = !0) : "" === Ik.trim() ? qk || (ak = "description", lk.push(Ik)) : "deprecation" !== ak || /^[A-Z]/.test(Ik.trim()) ? "otherTag" !== ak && (ak = "description", lk.push(Ik)) : yk = `${yk} ${Ik.trim()}`.trim()
              }
              Ik.set(Fk[1], {
                deprecation: yk,
                description: lk.join("\n").trim()
              })
            }
            return Ik
          }(Ak.default), yF
        }

        function qF() {
          if (!lF) {
            lF = new Map;
            for (const kk of Uk) {
              const Fk = (0, zk.u)(Wk(kk)).flatMap((kk => kk.blocks));
              for (const kk of (0, zk.n)(Fk))
                if ("ts" === kk.lang || "typescript" === kk.lang)
                  for (const [Fk, Ik] of Ek(kk.code)) lF.set(Fk, Ik)
            }
            for (const [kk, Fk] of(iF ??= TF(Ak.default), iF)) lF.has(kk) || lF.set(kk, Fk)
          }
          return lF
        }
        const LF = {
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
        let tF;

        function ZF() {
          if (!tF) {
            tF = new Map;
            for (const kk of Uk)
              if (Ok(kk.layout))
                for (const Fk of Wk(kk).sections) tF.has(Fk.heading.text) || tF.set(Fk.heading.text, {
                  pageId: kk.id,
                  anchor: Fk.heading.anchor
                })
          }
          return tF
        }

        function jF(kk) {
          const Fk = kk.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return Fk ? ZF().get(Fk[1]) : void 0
        }
        const eF = (0, Xk.createContext)("/docs"),
          wF = (0, Xk.createContext)(null),
          HF = (0, Xk.createContext)(!1),
          JF = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function xF(kk) {
          const Fk = kk.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return Fk ? Fk[1] : null
        }

        function PF(kk) {
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

        function KF(kk) {
          const Fk = [];
          let Ik = 0;
          for (const Xk of kk.matchAll(JF)) Fk.push(kk.slice(Ik, Xk.index), (0, ek.jsx)(PF, {
            colour: Xk[0]
          }), Xk[0]), Ik = Xk.index + Xk[0].length;
          return Fk.push(kk.slice(Ik)), Fk
        }

        function QF(kk) {
          let {
            href: Fk,
            children: Ik
          } = kk;
          const Tk = (0, Xk.useContext)(eF);
          if (Fk.startsWith("#")) {
            const kk = Bk(Fk);
            if (kk) return (0, ek.jsx)(yk.e, {
              to: Yk(Tk, kk.page, kk.anchor),
              children: (0, ek.jsx)(HF.Provider, {
                value: !0,
                children: Ik
              })
            })
          }
          return (0, ek.jsx)("a", {
            href: Fk,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, ek.jsx)(HF.Provider, {
              value: !0,
              children: Ik
            })
          })
        }

        function sF(kk) {
          let {
            code: Fk
          } = kk;
          const Ik = (0, Xk.useContext)(eF);
          if ((0, Xk.useContext)(HF)) return (0, ek.jsx)("code", {
            className: "DocsInlineCode",
            children: Fk
          });
          if (qF().has(Fk)) return (0, ek.jsx)(oF, {
            type: Fk
          });
          const Tk = jF(Fk);
          if (Tk) return (0, ek.jsx)(yk.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: Yk(Ik, Nk(Tk.pageId), Tk.anchor),
            children: Fk
          });
          const ik = xF(Fk);
          return (0, ek.jsxs)("code", {
            className: "DocsInlineCode",
            children: [ik && (0, ek.jsx)(PF, {
              colour: ik
            }), Fk]
          })
        }

        function VF(kk) {
          let {
            text: Fk
          } = kk;
          const Ik = [];
          let Tk = 0;
          for (const Xk of Fk.matchAll(zk.h)) {
            Xk.index > Tk && Ik.push(...KF(Fk.slice(Tk, Xk.index)));
            const [, kk, ik, yk, lk, ak] = Xk;
            kk ? Ik.push((0, ek.jsx)(sF, {
              code: (0, zk.p)(kk, ik)
            })) : yk ? Ik.push((0, ek.jsx)("strong", {
              children: (0, ek.jsx)(VF, {
                text: yk
              })
            })) : Ik.push((0, ek.jsx)(QF, {
              href: ak,
              children: (0, ek.jsx)(VF, {
                text: lk
              })
            })), Tk = Xk.index + Xk[0].length
          }
          return Tk < Fk.length && Ik.push(...KF(Fk.slice(Tk))), (0, ek.jsx)(ek.Fragment, {
            children: Ik.map(((kk, Fk) => (0, ek.jsx)(Xk.Fragment, {
              children: kk
            }, Fk)))
          })
        }
        const zF = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          SF = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function oF(kk) {
          let {
            type: Fk
          } = kk;
          const Ik = qF(),
            Tk = [];
          for (const Xk of Fk.trim().matchAll(zF)) {
            const [kk, Fk, ik, yk, lk] = Xk;
            Fk ? Tk.push((0, ek.jsx)("span", {
              className: "DocsTypeString",
              children: kk
            })) : ik && Ik.has(ik) ? Tk.push((0, ek.jsx)(GF, {
              name: ik,
              definition: Ik.get(ik)
            })) : ik ? Tk.push((0, ek.jsx)("span", {
              className: SF.has(ik) ? "DocsTypeKeyword" : "DocsTypeName",
              children: kk
            })) : yk ? Tk.push((0, ek.jsx)("span", {
              className: "DocsTypeNumber",
              children: kk
            })) : lk ? Tk.push(" ") : Tk.push((0, ek.jsx)("span", {
              className: "DocsTypePunctuation",
              children: kk
            }))
          }
          return (0, ek.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Tk.map(((kk, Fk) => (0, ek.jsx)(Xk.Fragment, {
              children: kk
            }, Fk)))
          })
        }
        const vF = 480,
          EF = 6,
          OF = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let nF = 0;

        function GF(kk) {
          let {
            name: Fk,
            definition: Ik
          } = kk;
          const Tk = (0, Xk.useContext)(eF),
            ik = LF[Fk],
            lk = (0, Xk.useRef)(null),
            ak = (0, Xk.useRef)(null),
            Lk = (0, Xk.useRef)(null),
            [tk, Zk] = (0, Xk.useState)(!1),
            [jk, wk] = (0, Xk.useState)(null),
            Jk = (0, Xk.useRef)(),
            xk = (0, Xk.useContext)(wF),
            [Pk] = (0, Xk.useState)((() => "DocsTypePopover-" + nF++)),
            Kk = () => {
              clearTimeout(Jk.current), Zk(!0)
            },
            Qk = () => {
              clearTimeout(Jk.current), Jk.current = setTimeout((() => {
                Zk(!1)
              }), 120)
            };
          return (0, Xk.useEffect)((() => {
            if (!tk) return;
            const kk = kk => {
              if ("Escape" === kk.key) {
                var Fk, Ik;
                if (null !== (Fk = ak.current) && void 0 !== Fk && Fk.contains(document.activeElement)) null === (Ik = lk.current) || void 0 === Ik || Ik.focus();
                Zk(!1)
              }
            };
            return document.addEventListener("keydown", kk), () => {
              document.removeEventListener("keydown", kk)
            }
          }), [tk]), (0, Xk.useEffect)((() => () => {
            clearTimeout(Jk.current)
          }), []), (0, Xk.useLayoutEffect)((() => {
            if (!tk || !lk.current || !ak.current) return void wk(null);
            const kk = lk.current.getBoundingClientRect(),
              Fk = ak.current.offsetHeight,
              Ik = Math.min(vF, window.innerWidth - 32),
              Xk = Math.min(Math.max(16, kk.left), window.innerWidth - Ik - 16),
              Tk = kk.bottom + EF + Fk < window.innerHeight;
            wk({
              left: Xk,
              top: Tk ? kk.bottom + EF : Math.max(16, kk.top - EF - Fk)
            })
          }), [tk]), (0, ek.jsxs)(ek.Fragment, {
            children: [(0, ek.jsx)("button", {
              type: "button",
              ref: lk,
              className: "DocsTypeLink",
              "aria-expanded": tk,
              "aria-describedby": tk ? Pk : void 0,
              onMouseEnter: Kk,
              onMouseLeave: Qk,
              onFocus: Kk,
              onBlur: Qk,
              onKeyDown: kk => {
                "Tab" === kk.key && !kk.shiftKey && Lk.current && (kk.preventDefault(), Lk.current.focus())
              },
              onClick: Kk,
              children: Fk
            }), tk && (0, qk.createPortal)((0, ek.jsxs)("span", {
              ref: ak,
              id: Pk,
              className: "DocsTypePopover",
              role: "tooltip",
              style: jk ? {
                left: jk.left,
                top: jk.top,
                maxWidth: vF
              } : {
                visibility: "hidden"
              },
              onMouseEnter: Kk,
              onMouseLeave: Qk,
              onFocus: Kk,
              onBlur: Qk,
              children: [(0, ek.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, ek.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: Fk
                }), ik && (0, ek.jsxs)(yk.e, {
                  ref: Lk,
                  className: "DocsTypePopoverLink",
                  to: Yk(Tk, Nk(ik)),
                  onClick: () => {
                    Zk(!1)
                  },
                  onKeyDown: kk => {
                    if ("Tab" === kk.key) {
                      var Fk;
                      if (kk.preventDefault(), kk.shiftKey || !lk.current || ! function(kk, Fk) {
                          const Ik = [...document.querySelectorAll(OF)],
                            Xk = Ik.slice(Ik.indexOf(kk) + 1).find((kk => kk.getClientRects().length > 0 && !(null !== Fk && void 0 !== Fk && Fk.contains(kk))));
                          return null === Xk || void 0 === Xk || Xk.focus(), void 0 !== Xk
                        }(lk.current, ak.current)) null === (Fk = lk.current) || void 0 === Fk || Fk.focus();
                      kk.shiftKey || Zk(!1)
                    }
                  },
                  children: [Nk(ik).title, (0, ek.jsx)(Hk, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, ek.jsx)(Vk, {
                lang: "ts",
                code: Ik,
                compact: !0
              })]
            }), null !== xk && void 0 !== xk ? xk : document.body)]
          })
        }
        var pF = Ik(187),
          uF = Ik(4767),
          bF = Ik(4775),
          RF = Ik(4784);
        const UF = {
          progressBar: {
            SI: 30,
            oI: .075,
            vI: 5,
            EI: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            GI: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            uI: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            bI: !0,
            scale: 3,
            rotation: 15,
            RI: !1
          },
          gravityBar: {
            SI: 30,
            CI: .25,
            NI: 3,
            cI: .8,
            gravity: 1,
            WI: 1.5,
            fI: 8,
            BI: 4,
            EI: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            YI: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            gI: 5,
            mI: 1200,
            hI: .15,
            rI: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var CF = Ik(318),
          NF = Ik(1926);

        function cF(kk) {
          return kk.startsWith("fa-")
        }
        const WF = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          fF = {
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

        function BF(kk) {
          return "string" === typeof kk ? "text" : "entityName" in kk || "translationKey" in kk ? "other" : (0, CF.Db)(kk) ? "progressBar" : (0, CF.Ab)(kk) ? "keyBinding" : "icon" in kk ? "icon" : "str" in kk && "string" === typeof kk.str ? "text" : "other"
        }
        const dF = [{
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
          YF = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...dF],
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
                options: NF.l
              },
              isRequired: !0
            }, ...dF],
            other: []
          };

        function AF(kk) {
          return "string" === typeof kk ? {
            str: kk
          } : kk
        }

        function gF(kk, Fk) {
          let Ik = AF(kk);
          for (const Xk of Fk) Ik = Ik && "object" === typeof Ik ? Ik[Xk] : void 0;
          return Ik
        }

        function mF(kk, Fk, Ik) {
          const Xk = (kk, Tk) => {
            var ik;
            const yk = Fk[Tk],
              lk = {
                ...kk
              };
            if (Tk === Fk.length - 1) return void 0 === Ik ? delete lk[yk] : lk[yk] = Ik, lk;
            const ak = Xk(null !== (ik = kk[yk]) && void 0 !== ik ? ik : {}, Tk + 1);
            return 0 === Object.keys(ak).length ? delete lk[yk] : lk[yk] = ak, lk
          };
          return function(kk) {
            const Fk = Object.keys(kk);
            return "string" === typeof kk.str && 1 === Fk.length ? kk.str : kk
          }(Xk(AF(kk), 0))
        }

        function hF(kk, Fk) {
          const Ik = BF(kk),
            Xk = YF[Ik].find((kk => kk.path.join(".") === Fk.join("."))),
            Tk = null !== Xk && void 0 !== Xk && Xk.isRequired && "other" !== Ik ? gF(fF[Ik], Fk) : void 0;
          return mF(kk, Fk, Tk)
        }

        function rF(kk) {
          switch (BF(kk)) {
            case "text":
              return String(gF(kk, ["str"]));
            case "icon":
              return String(gF(kk, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(gF(kk,["progress"])))}%`;
            case "keyBinding":
              return String(gF(kk, ["action"]));
            case "other":
              return JSON.stringify(kk)
          }
        }
        const DF = /^[A-Za-z_$][\w$]*$/;

        function MF(kk) {
          if (Array.isArray(kk)) return `[${kk.map(MF).join(", ")}]`;
          if (kk && "object" === typeof kk) {
            const Fk = Object.entries(kk).map((kk => {
              let [Fk, Ik] = kk;
              return `${DF.test(Fk)?Fk:JSON.stringify(Fk)}: ${MF(Ik)}`
            }));
            return 0 === Fk.length ? "{}" : `{ ${Fk.join(", ")} }`
          }
          return JSON.stringify(kk)
        }

        function kI(kk) {
          const Fk = kk.map(MF),
            Ik = `[${Fk.join(", ")}]`;
          return Ik.length <= 60 ? Ik : `[\n${Fk.map((kk=>`    ${kk},`)).join("\n")}\n]`
        }
        const FI = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function II(kk) {
          let Fk = "";
          for (let Tk = 0; Tk < kk.length; Tk++) {
            const ik = kk[Tk];
            if ("\\" === ik) {
              var Ik;
              const Xk = null !== (Ik = kk[Tk + 1]) && void 0 !== Ik ? Ik : "";
              Fk += "'" === Xk ? "'" : ik + Xk, Tk++
            } else if ('"' === ik) Fk += '\\"';
            else {
              var Xk;
              Fk += null !== (Xk = FI[ik]) && void 0 !== Xk ? Xk : ik
            }
          }
          return `"${Fk}"`
        }

        function XI(kk) {
          if ("string" === typeof kk) return !0;
          if (!kk || "object" !== typeof kk || Array.isArray(kk)) return !1;
          const Fk = kk;
          return "ProgressBar" === Fk.type ? "number" === typeof Fk.progress : "StyledKeyBinding" === Fk.type ? NF.l.includes(Fk.action) : "string" === typeof Fk.icon || "string" === typeof Fk.str || "string" === typeof Fk.entityName || "string" === typeof Fk.translationKey
        }

        function TI(kk) {
          let Fk;
          try {
            Fk = function(kk) {
              let Fk = "",
                Ik = "",
                Xk = 0;
              const Tk = () => {
                Fk += Ik.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), Ik = ""
              };
              for (; Xk < kk.length;) {
                const ik = kk.slice(Xk).search(/["'`]|\/\//);
                if (-1 === ik) {
                  Ik += kk.slice(Xk);
                  break
                }
                Ik += kk.slice(Xk, Xk + ik);
                const yk = Xk + ik,
                  lk = kk[yk];
                if ("/" === lk) {
                  const Fk = kk.indexOf("\n", yk);
                  Xk = -1 === Fk ? kk.length : Fk;
                  continue
                }
                if (Tk(), "`" === lk) throw new Error("Use quotes rather than template strings.");
                let ak = yk + 1;
                for (; ak < kk.length && kk[ak] !== lk;) ak += "\\" === kk[ak] ? 2 : 1;
                if (ak >= kk.length) throw new Error("A string is missing its closing quote.");
                const qk = kk.slice(yk + 1, ak);
                Fk += II(qk), Xk = ak + 1
              }
              return Tk(), JSON.parse(Fk)
            }(kk.trim())
          } catch (Xk) {
            return {
              parts: null,
              error: Xk instanceof SyntaxError ? "This isn't a valid array yet." : Xk.message
            }
          }
          if (!Array.isArray(Fk)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const Ik = Fk.findIndex((kk => !XI(kk)));
          return -1 !== Ik ? {
            parts: null,
            error: `Part ${Ik+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: Fk,
            error: null
          }
        }
        const iI = 1 / pF.f.clientTicksPerSecond,
          yI = 700,
          lI = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          aI = {
            progressBar: UF.progressBar.GI,
            timedClick: UF.timedClick.icon,
            gravityBar: UF.gravityBar.icon,
            precisionBar: UF.precisionBar.icon,
            rhythmClick: UF.rhythmClick.icon
          };

        function qI(kk) {
          let {
            type: Fk
          } = kk;
          const [Ik, Tk] = (0, Xk.useState)("ready"), [yk, lk] = (0, Xk.useState)(1), [ak, qk] = (0, Xk.useState)(!0), Lk = (0, Xk.useRef)(null), tk = (0, Xk.useRef)(null), Zk = (0, Xk.useRef)(null), jk = (0, Xk.useRef)(new Set), wk = (0, Xk.useRef)(!1), Jk = aI[Fk], xk = (0, Xk.useMemo)((() => ({
            getState: () => {
              var kk, Fk;
              return null !== (kk = null === (Fk = Zk.current) || void 0 === Fk ? void 0 : Fk.getState()) && void 0 !== kk ? kk : lI
            },
            onFrame: kk => (jk.current.add(kk), () => {
              jk.current.delete(kk)
            })
          })), []);
          (0, Xk.useEffect)((() => {
            const kk = Lk.current,
              Fk = tk.current;
            if (!kk || !Fk) return;
            const Ik = new ResizeObserver((() => {
              lk(kk.clientWidth / Math.max(1, Fk.offsetWidth))
            }));
            return Ik.observe(kk), () => {
              Ik.disconnect()
            }
          }), []), (0, Xk.useEffect)((() => {
            var kk;
            if ("playing" !== Ik) return;
            let Xk = !1;
            const ik = new RF.c[Fk](UF[Fk], (kk => {
              Xk = !0, qk(!1), Tk(kk ? "succeeded" : "failed")
            }), (() => {}));
            Zk.current = ik;
            let yk = 0,
              lk = performance.now(),
              ak = requestAnimationFrame((function kk(Fk) {
                for (yk += Math.min(.25, (Fk - lk) / 1e3), lk = Fk; yk >= iI && !Xk;) yk -= iI, ik.handleTick(iI);
                for (const Ik of jk.current) Ik();
                Xk || (ak = requestAnimationFrame(kk))
              }));
            return null === (kk = Lk.current) || void 0 === kk || kk.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(ak), ik.tearDown(), Zk.current = null, wk.current = !1
            }
          }), [Ik, Fk]), (0, Xk.useEffect)((() => {
            if (ak) return;
            const kk = setTimeout((() => {
              qk(!0)
            }), yI);
            return () => {
              clearTimeout(kk)
            }
          }), [ak]);
          const Pk = kk => {
            var Fk;
            "playing" === Ik && wk.current !== kk && (wk.current = kk, null === (Fk = Zk.current) || void 0 === Fk || Fk.handleMouseInput(kk))
          };
          return (0, ek.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, ek.jsxs)("div", {
              ref: Lk,
              className: ik()("DocsQteStage", {
                Playing: "playing" === Ik
              }),
              tabIndex: "playing" === Ik ? 0 : -1,
              role: "playing" === Ik ? "button" : void 0,
              "aria-label": "playing" === Ik ? `${Fk} quick time event: click or press Space` : void 0,
              onPointerDown: kk => {
                0 === kk.button && Pk(!0)
              },
              onPointerUp: () => {
                Pk(!1)
              },
              onPointerLeave: () => {
                Pk(!1)
              },
              onPointerCancel: () => {
                Pk(!1)
              },
              onKeyDown: kk => {
                "playing" !== Ik || " " !== kk.key && "Enter" !== kk.key || (kk.preventDefault(), Pk(!0))
              },
              onKeyUp: kk => {
                "playing" !== Ik || " " !== kk.key && "Enter" !== kk.key || Pk(!1)
              },
              children: [(0, ek.jsx)("div", {
                ref: tk,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${yk})`
                },
                children: "playing" === Ik && (0, ek.jsx)(bF.d.Provider, {
                  value: xk,
                  children: (0, ek.jsx)(uF.b, {
                    qte: {
                      type: Fk,
                      parameters: UF[Fk]
                    }
                  })
                })
              }), "playing" !== Ik && (0, ek.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== Ik && (0, ek.jsxs)("div", {
                  className: ik()("DocsQteResult", "succeeded" === Ik ? "Succeeded" : "Failed"),
                  children: [(0, ek.jsx)(Hk, {
                    name: "succeeded" === Ik ? "check" : "cross",
                    isTinted: !0
                  }), (0, ek.jsx)("span", {
                    children: "succeeded" === Ik ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, ek.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !ak,
                  onClick: () => {
                    Tk("playing")
                  },
                  children: [(0, ek.jsx)(Hk, {
                    name: "ready" === Ik ? "play" : "replay"
                  }), (0, ek.jsx)("span", {
                    children: "ready" === Ik ? `Try ${Fk}` : "Play again"
                  })]
                })]
              })]
            }), Jk && !cF(Jk) && (0, ek.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, ek.jsx)("code", {
                children: Jk
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function LI(kk) {
          let {
            level: Fk,
            text: Ik,
            anchor: Xk,
            className: Tk
          } = kk;
          const yk = `h${Math.min(Fk,6)}`;
          return (0, ek.jsxs)(yk, {
                id: Xk,
                className: ik()("DocsHeading", Tk),
                children: [(0, ek.jsx)(VF, {
                      text: Ik
                    }), (0, ek.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Xk}`,
                        "aria-label": `Link to ${Ik.replace(/`/g,"")}`,children:"#"})]})}function tI(kk){let{items:Fk,ordered:Ik}=kk;const Xk=Ik?"ol":"ul";return(0,ek.jsx)(Xk,{className:"DocsList",children:Fk.map(((kk,Fk)=>(0,ek.jsxs)("li",{children:[(0,ek.jsx)(VF,{text:kk.text}),kk.children.length>0&&(0,ek.jsx)(tI,{items:kk.children,ordered:Ik})]},Fk)))})}function ZI(kk){const Fk=kk[0],Ik="paragraph"===(null===Fk||void 0===Fk?void 0:Fk.kind)?Fk.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(Ik)?"warning":/^\*\*(tip|prefer)/.test(Ik)?"tip":"note"}function jI(kk){let{block:Fk}=kk;switch(Fk.kind){case"heading":return(0,ek.jsx)(LI,{level:Fk.level,text:Fk.text,anchor:Fk.anchor});case"paragraph":return(0,ek.jsx)("p",{children:(0,ek.jsx)(VF,{text:Fk.text})});case"code":{const kk="ts"===Fk.lang?function(kk){const Fk=kk.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return Fk&&Object.hasOwn(UF,Fk[1])?Fk[1]:null}(Fk.code):null;return(0,ek.jsxs)(ek.Fragment,{children:[(0,ek.jsx)(Vk,{code:Fk.code,lang:Fk.lang}),kk&&(0,ek.jsx)(qI,{type:kk})]})}case"table":return(0,ek.jsx)("div",{className:"DocsTableScroll",children:(0,ek.jsxs)("table",{className:"DocsTable",children:[(0,ek.jsx)("thead",{children:(0,ek.jsx)("tr",{children:Fk.header.map(((kk,Fk)=>(0,ek.jsx)("th",{children:(0,ek.jsx)(VF,{text:kk})},Fk)))})}),(0,ek.jsx)("tbody",{children:Fk.rows.map(((kk,Fk)=>(0,ek.jsx)("tr",{children:kk.map(((kk,Fk)=>(0,ek.jsx)("td",{children:(0,ek.jsx)(VF,{text:kk})},Fk)))},Fk)))})]})});case"list":return(0,ek.jsx)(tI,{items:Fk.items,ordered:Fk.ordered});case"quote":return(0,ek.jsx)("aside",{className:ik()("DocsCallout",ZI(Fk.blocks)),children:(0,ek.jsx)(eI,{blocks:Fk.blocks})});case"rule":return(0,ek.jsx)("hr",{className:"DocsRule"})}}function eI(kk){let{blocks:Fk}=kk;return(0,ek.jsx)(ek.Fragment,{children:Fk.map(((kk,Fk)=>(0,ek.jsx)(jI,{block:kk},Fk)))})}var wI=Ik(4747),HI=Ik(4755);function JI(kk){return"blocks"===kk||"items"===kk}const xI=new Map;function PI(kk){let Fk=xI.get(kk);return Fk||(Fk=function(kk){const Fk={entries:[],legend:[],notes:[],examples:[]};let Ik=!1;for(const ik of kk.split(/\r?\n/).slice(1)){if(ik.startsWith("#")){const kk=ik.replace(/^# ?/,""),Xk=kk.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Xk?Fk.legend.push({code:Xk[1],meaning:Xk[2],usage:Xk[3].trim()}):/^Examples:/.test(kk.trim())?Ik=!0:Ik&&kk.trim()?Fk.examples.push(kk.trim()):kk.trim()&&!/^\s/.test(kk)&&Fk.notes.push(kk.trim());continue}const kk=ik.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Xk,Tk;kk&&Fk.entries.push({name:kk[1],variants:null!==(Xk=null===(Tk=kk[2])||void 0===Tk?void 0:Tk.split(","))&&void 0!==Xk?Xk:[]})}return Fk}("blocks"===kk?wI:HI),xI.set(kk,Fk)),Fk}function KI(kk){let{className:Fk,value:Ik,placeholder:Xk,label:Tk,onChange:ik,count:yk,children:lk}=kk;return(0,ek.jsxs)("div",{className:Fk,children:[(0,ek.jsx)(Hk,{name:"magnifying-glass"}),(0,ek.jsx)("input",{type:"search",value:Ik,placeholder:Xk,"aria-label":Tk,onChange:kk=>{ik(kk.target.value)}}),lk,yk&&(0,ek.jsxs)("span",{className:"DocsFilterCount",children:[yk.visible," of ",yk.total]})]})}var QI=Ik(1066);function sI(kk){const Fk=kk.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return Fk?Fk[2]:null}function VI(kk){return"paragraph"===kk.kind&&""===kk.text.trim()}function zI(kk){const Fk={name:kk.heading.text,description:[],params:[],returns:null};let Ik="description";for(const Tk of kk.blocks)if(!VI(Tk))if("heading"===Tk.kind&&/^Parameters:?$/.test(Tk.text))Ik="params";else if("heading"===Tk.kind&&/^Returns:?$/.test(Tk.text))Ik="returns",Fk.returns={type:"",description:[]};else if("params"!==Ik||"table"!==Tk.kind){if("returns"===Ik&&"paragraph"===Tk.kind&&""===Fk.returns.type){const kk=sI(Tk.text);if(null!==kk){Fk.returns.type=kk.replaceAll("\\|","|");continue}}"returns"===Ik?Fk.returns.description.push(Tk):Fk.description.push(Tk)}else for(const[kk,Ik,ik]of Tk.rows){var Xk;Fk.params.push({name:kk,type:null!==(Xk=sI(Ik))&&void 0!==Xk?Xk:Ik,description:null!==ik&&void 0!==ik?ik:""})}return Fk}const SI=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function oI(kk){return kk.filter((kk=>!VI(kk)))}const vI=/^[\w][\w .'&!:()-]*$/,EI=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function OI(kk){var Fk;if("code"===kk.kind&&"text"===kk.lang){const Fk=kk.code.split("\n").map((kk=>kk.trim())).filter(Boolean);return Fk.length>0&&Fk.every((kk=>vI.test(kk)))?Fk.map((kk=>({name:kk}))):null}return"paragraph"===kk.kind&&EI.test(kk.text.trim())?[...kk.text.matchAll(/`([ ^ `]+)` / g)].flatMap((kk => kk[1].split(/,\s*/).map((kk => ({
                              name: kk.trim()
                            }))))): "table" === kk.kind && null !== (Fk = kk.header[0]) && void 0 !== Fk && Fk.startsWith("Song") ? kk.rows.map((kk => {
                              let [Fk, Ik] = kk;
                              return {
                                name: Fk.replace(/`/g, ""),
                                caption: Ik
                              }
                            })) : null
                          }

                          function nI(kk) {
                            const Fk = [];
                            for (const Ik of kk) {
                              const kk = OI(Ik),
                                Xk = Fk.at(-1),
                                Tk = "table" === Ik.kind;
                              kk ? "names" === (null === Xk || void 0 === Xk ? void 0 : Xk.kind) && Xk.isSongs === Tk ? Xk.names.push(...kk) : Fk.push({
                                kind: "names",
                                names: kk,
                                isSongs: Tk
                              }) : Fk.push({
                                kind: "block",
                                block: Ik
                              })
                            }
                            return Fk
                          }
                          const GI = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function pI(kk, Fk) {
                            return `${GI[kk]}-${(0,zk.t)(Fk)}`
                          }
                          const uI = new WeakMap;

                          function bI(kk, Fk, Ik) {
                            let Xk = uI.get(Fk);
                            if (!Xk) {
                              Xk = new Map;
                              const Ik = new Set;
                              for (const Tk of (0, zk.u)(Fk)) {
                                const Fk = nI(oI(Tk.blocks)).map((Fk => {
                                  if ("block" === Fk.kind) return Fk;
                                  return {
                                    kind: "names",
                                    names: Fk.names.map((Fk => {
                                      var Xk, ik;
                                      const yk = pI(kk, Fk.name);
                                      let lk = yk;
                                      for (let kk = 2; Ik.has(lk); kk++) lk = `${yk}-${kk}`;
                                      return Ik.add(lk), {
                                        ...Fk,
                                        anchor: lk,
                                        heading: null !== (Xk = null === (ik = Tk.heading) || void 0 === ik ? void 0 : ik.text) && void 0 !== Xk ? Xk : ""
                                      }
                                    })),
                                    isSongs: Fk.isSongs
                                  }
                                }));
                                Xk.set(Tk.blocks, Fk)
                              }
                              uI.set(Fk, Xk)
                            }
                            const Tk = Xk.get(Ik);
                            if (!Tk) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Tk
                          }
                          const RI = "/textures/docs/skinPreviews",
                            UI = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var CI = Ik(4196),
                            NI = Ik(4210);

                          function cI(kk) {
                            return Object.hasOwn(CI.g, kk) ? CI.g[kk] : null
                          }
                          const WI = {
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
                            blendMode: NI.d.Standard
                          };

                          function fI(kk, Fk, Ik) {
                            return Fk + (Ik - Fk) * kk()
                          }

                          function BI(kk, Fk, Ik) {
                            return kk + (Fk - kk) * Ik
                          }

                          function dI(kk) {
                            return kk.length > 0 && "timeFraction" in kk[0]
                          }

                          function YI(kk, Fk) {
                            if (0 === kk.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!dI(kk.colorGradients)) {
                              const Ik = kk.colorGradients,
                                {
                                  color: Xk
                                } = Ik[Math.floor(Fk() * Ik.length) % Ik.length];
                              return [{
                                at: 0,
                                colour: [Xk[0] / 255, Xk[1] / 255, Xk[2] / 255, 1]
                              }]
                            }
                            return [...kk.colorGradients].sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)).map((kk => {
                              var Ik, Xk, Tk;
                              const ik = kk.minColor,
                                yk = null !== (Ik = kk.maxColor) && void 0 !== Ik ? Ik : ik,
                                lk = Fk(),
                                ak = [BI(ik[0], yk[0], lk) / 255, BI(ik[1], yk[1], lk) / 255, BI(ik[2], yk[2], lk) / 255, BI(null !== (Xk = ik[3]) && void 0 !== Xk ? Xk : 1, null !== (Tk = yk[3]) && void 0 !== Tk ? Tk : 1, lk)];
                              return {
                                at: kk.timeFraction,
                                colour: ak
                              }
                            }))
                          }

                          function AI(kk, Fk, Ik, Xk) {
                            const Tk = fI(Xk, kk.minEmitPower, kk.maxEmitPower),
                              ik = Fk => fI(Xk, Math.min(kk.dir1[Fk], kk.dir2[Fk]), Math.max(kk.dir1[Fk], kk.dir2[Fk])) * Tk,
                              yk = [...kk.velocityGradients].sort(((kk, Fk) => kk.timeFraction - Fk.timeFraction)).map((kk => ({
                                at: kk.timeFraction,
                                factor: fI(Xk, kk.factor, kk.factor2)
                              })));
                            return {
                              pos: [fI(Xk, Fk[0], Ik[0]), fI(Xk, Fk[1], Ik[1]), fI(Xk, Fk[2], Ik[2])],
                              dir: [ik(0), ik(1), ik(2)],
                              age: 0,
                              life: fI(Xk, kk.minLifeTime, kk.maxLifeTime),
                              size: fI(Xk, kk.minSize, kk.maxSize),
                              colours: YI(kk, Xk),
                              velocityFactors: yk
                            }
                          }

                          function gI(kk, Fk, Ik, Xk) {
                            if (Fk < kk[0].at) return Ik(Math.min(1, kk.length - 1));
                            for (let Tk = 0; Tk < kk.length - 1; Tk++)
                              if (Fk <= kk[Tk + 1].at) {
                                const ik = kk[Tk + 1].at - kk[Tk].at;
                                return Xk(Ik(Tk), Ik(Tk + 1), ik > 0 ? (Fk - kk[Tk].at) / ik : 1)
                              } return Ik(kk.length - 1)
                          }

                          function mI(kk) {
                            return gI(kk.colours, kk.age / kk.life, (Fk => kk.colours[Fk].colour), ((kk, Fk, Ik) => [BI(kk[0], Fk[0], Ik), BI(kk[1], Fk[1], Ik), BI(kk[2], Fk[2], Ik), BI(kk[3], Fk[3], Ik)]))
                          }

                          function hI(kk, Fk, Ik) {
                            if (kk.age += Ik, kk.age >= kk.life) return !1;
                            const Xk = function(kk) {
                              return 0 === kk.velocityFactors.length ? 1 : gI(kk.velocityFactors, kk.age / kk.life, (Fk => kk.velocityFactors[Fk].factor), BI)
                            }(kk) * Ik;
                            for (let ik = 0; ik < 3; ik++) {
                              var Tk;
                              kk.pos[ik] += kk.dir[ik] * Xk, kk.dir[ik] += (null !== (Tk = Fk[ik]) && void 0 !== Tk ? Tk : 0) * Ik
                            }
                            return !0
                          }

                          function rI(kk) {
                            return String(Math.round(1e6 * kk) / 1e6)
                          }

                          function DI(kk) {
                            return `[${kk.map(rI).join(", ")}]`
                          }

                          function MI(kk, Fk) {
                            const Ik = `${Fk}    `;
                            return `[\n${(dI(kk)?kk.map((kk=>{const Fk=[`${Ik}    timeFraction: ${rI(kk.timeFraction)},`,`${Ik}    minColor: ${DI(kk.minColor)},`];return kk.maxColor&&Fk.push(`${Ik}    maxColor: ${DI(kk.maxColor)},`),`${Ik}{\n${Fk.join("\n")}\n${Ik}},`})):kk.map((kk=>`
                            $ {
                              Ik
                            } {
                              color: $ {
                                DI(kk.color)
                              }
                            }, `))).join("\n")}\n${Fk}]`
                          }
                          const kX = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            FX = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const IX = .6;

                          function XX(kk, Fk) {
                            return `${Fk?"song":"sound"}:${kk}`
                          }
                          let TX = {
                              track: null,
                              volume: IX
                            },
                            iX = null,
                            yX = 0,
                            lX = 0;
                          const aX = new Set;

                          function qX(kk) {
                            TX = {
                              ...TX,
                              ...kk
                            }, aX.forEach((kk => {
                              kk()
                            }))
                          }

                          function LX(kk) {
                            TX.track && qX({
                              track: {
                                ...TX.track,
                                ...kk
                              }
                            })
                          }

                          function tX(kk) {
                            const [Fk, Ik] = (0, Xk.useState)((() => kk(TX))), Tk = (0, Xk.useRef)(kk);
                            return Tk.current = kk, (0, Xk.useEffect)((() => {
                              const kk = () => {
                                Ik((() => Tk.current(TX)))
                              };
                              return aX.add(kk), kk(), () => {
                                aX.delete(kk)
                              }
                            }), []), Fk
                          }

                          function ZX() {
                            yX++;
                            const kk = iX;
                            iX = null, null === kk || void 0 === kk || kk.stop()
                          }

                          function jX(kk, Fk) {
                            let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            ZX();
                            const Tk = yX,
                              {
                                track: ik
                              } = TX,
                              yk = ik && ik.name === kk && ik.isSong === Fk ? ik.duration : 0;
                            lX = Xk, qX({
                              track: {
                                name: kk,
                                isSong: Fk,
                                status: "loading",
                                duration: yk
                              }
                            }), Promise.all([Ik.e(222), Ik.e(249)]).then((() => Ik(39792))).then((Ik => {
                              let {
                                playDocsSound: ik
                              } = Ik;
                              Tk === yX && (iX = ik(kk, Fk, TX.volume, Xk, {
                                onPlay: kk => {
                                  Tk === yX && LX({
                                    status: "playing",
                                    duration: kk
                                  })
                                },
                                onEnd: kk => {
                                  var Fk, Ik;
                                  Tk === yX && (iX = null, kk ? qX({
                                    track: null
                                  }) : (lX = null !== (Fk = null === (Ik = TX.track) || void 0 === Ik ? void 0 : Ik.duration) && void 0 !== Fk ? Fk : 0, LX({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((Fk => {
                              console.error(`Could not play docs sound ${kk}`, Fk), Tk === yX && qX({
                                track: null
                              })
                            }))
                          }

                          function eX() {
                            const {
                              track: kk
                            } = TX;
                            if (!kk) return;
                            if ("playing" === kk.status && iX) return lX = iX.OJ(), iX.pause(), void LX({
                              status: "paused"
                            });
                            if ("loading" === kk.status) return ZX(), void LX({
                              status: "paused"
                            });
                            if (iX) return void iX.resume();
                            const Fk = kk.duration > 0 && lX >= kk.duration - .05;
                            jX(kk.name, kk.isSong, Fk ? 0 : lX)
                          }

                          function wX() {
                            var kk;
                            return iX && "playing" === (null === (kk = TX.track) || void 0 === kk ? void 0 : kk.status) ? iX.OJ() : lX
                          }

                          function HX(kk) {
                            var Fk;
                            null === (Fk = iX) || void 0 === Fk || Fk.setVolume(kk), qX({
                              volume: kk
                            })
                          }

                          function JX() {
                            ZX(), lX = 0, qX({
                              track: null
                            })
                          }
                          const xX = (0, Xk.createContext)(null);
                          let PX = null;

                          function KX() {
                            const [kk, Fk] = (0, Xk.useState)(null);
                            return (0, Xk.useEffect)((() => {
                              let kk = !1;
                              return PX ??= Promise.all([Ik.e(72), Ik.e(75), Ik.e(74), Ik.e(73), Ik.e(186), Ik.e(98), Ik.e(226)]).then((() => Ik(39784))), PX.then((Ik => {
                                kk || Fk(Ik)
                              }), (kk => {
                                console.error("Could not load the docs gallery's textures", kk), PX = null
                              })), () => {
                                kk = !0
                              }
                            }), []), kk
                          }
                          const QX = 24,
                            sX = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function VX(kk, Fk) {
                            const Ik = "skins" === kk ? function(kk, Fk) {
                              const Ik = UI.find((Fk => kk.startsWith(Fk.heading)));
                              return Ik ? function(kk, Fk) {
                                return `${kk}-${Fk}`
                              }(Ik.prefix, Fk) : null
                            }(Fk.heading, Fk.name) : null;
                            return null === Ik ? null : `${RI}/${Ik}.webp`
                          }

                          function zX(kk) {
                            let {
                              kind: Fk,
                              entry: Ik,
                              assets: Tk,
                              renderedUrl: yk
                            } = kk;
                            const {
                              name: lk
                            } = Ik, [ak, qk] = (0, Xk.useState)(!1);
                            if ("icons" === Fk && cF(lk)) return (0, ek.jsx)(QI.e, {
                              className: "DocsTileIcon",
                              name: lk
                            });
                            let Lk = null;
                            var tk;
                            if ("icons" === Fk) Lk = null !== (tk = null === Tk || void 0 === Tk ? void 0 : Tk.getIngameIconUrl(lk)) && void 0 !== tk ? tk : null;
                            else if ("particles" === Fk) {
                              var Zk, jk, wk;
                              Lk = null !== (Zk = null === Tk || void 0 === Tk ? void 0 : Tk.getParticleTextureUrl(null !== (jk = null === (wk = cI(lk)) || void 0 === wk ? void 0 : wk.texture) && void 0 !== jk ? jk : lk)) && void 0 !== Zk ? Zk : null
                            } else "skins" === Fk && (Lk = null !== yk && void 0 !== yk ? yk : sX.test(lk) ? `/textures/charSkins/previews/${lk}_preview.png` : null);
                            return !Lk || ak ? (0, ek.jsx)(Hk, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === Fk ? "person" : "image"
                            }) : (0, ek.jsx)("img", {
                              className: ik()("DocsTileImage", {
                                Pixelated: "skins" !== Fk
                              }),
                              src: Lk,
                              srcSet: Lk === yk ? `${Lk} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Lk}`), qk(!0)
                              }
                            })
                          }

                          function SX(kk) {
                            let {
                              entry: Fk,
                              isSong: Ik
                            } = kk;
                            const Xk = tX((kk => {
                                let {
                                  track: Xk
                                } = kk;
                                return (null === Xk || void 0 === Xk ? void 0 : Xk.name) === Fk.name && Xk.isSong === Ik ? Xk.status : null
                              })),
                              Tk = null !== Xk && "paused" !== Xk;
                            return (0, ek.jsxs)("button", {
                              type: "button",
                              id: Fk.anchor,
                              className: ik()("DocsSoundTile", {
                                Playing: Tk
                              }),
                              "data-docs-track": XX(Fk.name, Ik),
                              "aria-label": Tk ? `Pause ${Fk.name}` : `Play ${Fk.name}`,
                              onClick: () => {
                                null !== Xk ? eX() : jX(Fk.name, Ik)
                              },
                              children: [(0, ek.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, ek.jsx)(Hk, {
                                  name: Tk ? "pause" : "play"
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

                          function oX(kk) {
                            let {
                              kind: Fk,
                              names: Ik,
                              isSongs: Tk
                            } = kk;
                            const yk = KX(),
                              [lk, ak] = xk(),
                              qk = !1 === (null === lk || void 0 === lk ? void 0 : lk.failed) ? lk.text : null,
                              Lk = (0, Xk.useContext)(xX),
                              [tk, Zk] = (0, Xk.useState)(""),
                              jk = tk.trim().toLowerCase(),
                              wk = jk ? Ik.filter((kk => kk.name.toLowerCase().includes(jk))) : Ik;
                            return (0, ek.jsxs)("div", {
                              className: "DocsGallery",
                              children: [Ik.length > QX && (0, ek.jsx)(KI, {
                                className: "DocsGalleryFilter",
                                value: tk,
                                placeholder: `Filter ${Ik.length} names\u2026`,
                                label: "Filter names",
                                onChange: Zk,
                                count: jk ? {
                                  visible: wk.length,
                                  total: Ik.length
                                } : null
                              }), (0, ek.jsx)("div", {
                                className: ik()("DocsGalleryGrid", `Kind-${Fk}`, {
                                  Songs: Tk
                                }),
                                children: wk.map((kk => {
                                  if ("sounds" === Fk) return (0, ek.jsx)(SX, {
                                    entry: kk,
                                    isSong: Tk
                                  }, kk.anchor);
                                  if (Lk && "particles" === Fk && cI(kk.name)) return (0, ek.jsxs)("button", {
                                    type: "button",
                                    id: kk.anchor,
                                    className: ik()("DocsTile Previewable", {
                                      Copied: qk === kk.name
                                    }),
                                    title: `Play "${kk.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Lk(kk.name), ak(kk.name)
                                    },
                                    children: [(0, ek.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, ek.jsx)(zX, {
                                        kind: Fk,
                                        entry: kk,
                                        assets: yk,
                                        renderedUrl: null
                                      }), (0, ek.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, ek.jsx)(Hk, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, ek.jsx)("span", {
                                      className: "DocsTileName",
                                      children: qk === kk.name ? "Copied!" : kk.name
                                    })]
                                  }, kk.anchor);
                                  const Ik = VX(Fk, kk);
                                  return (0, ek.jsxs)("button", {
                                    type: "button",
                                    id: kk.anchor,
                                    className: ik()("DocsTile", {
                                      Copied: qk === kk.name
                                    }),
                                    title: `Copy "${kk.name}"`,
                                    onClick: () => {
                                      ak(kk.name)
                                    },
                                    children: [(0, ek.jsx)("span", {
                                      className: ik()("DocsTilePreview", {
                                        Rendered: null !== Ik
                                      }),
                                      children: (0, ek.jsx)(zX, {
                                        kind: Fk,
                                        entry: kk,
                                        assets: yk,
                                        renderedUrl: Ik
                                      })
                                    }), (0, ek.jsx)("span", {
                                      className: "DocsTileName",
                                      children: qk === kk.name ? "Copied!" : kk.name
                                    })]
                                  }, kk.anchor)
                                }))
                              })]
                            })
                          }

                          function vX(kk) {
                            let {
                              kind: Fk,
                              content: Ik,
                              blocks: Xk
                            } = kk;
                            return (0, ek.jsx)(ek.Fragment, {
                              children: bI(Fk, Ik, Xk).map(((kk, Ik) => "block" === kk.kind ? (0, ek.jsx)(jI, {
                                block: kk.block
                              }, Ik) : (0, ek.jsx)(oX, {
                                kind: Fk,
                                names: kk.names,
                                isSongs: kk.isSongs
                              }, Ik)))
                            })
                          }
                          const EX = [{
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

                          function OX(kk) {
                            let {
                              cards: Fk = EX,
                              label: Ik = "Start here"
                            } = kk;
                            const Tk = (0, Xk.useContext)(eF);
                            return (0, ek.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": Ik,
                              children: Fk.map((kk => {
                                let {
                                  pageId: Fk,
                                  countNoun: Ik
                                } = kk;
                                const Xk = Nk(Fk);
                                return (0, ek.jsxs)(yk.e, {
                                  to: Yk(Tk, Xk),
                                  className: "DocsLandingCard",
                                  children: [(0, ek.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, ek.jsx)(Hk, {
                                      name: Xk.icon
                                    })
                                  }), (0, ek.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Xk.title
                                  }), (0, ek.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Xk.summary
                                  }), Ik && (0, ek.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [Wk(Xk).sections.length, " ", Ik]
                                  })]
                                }, Fk)
                              }))
                            })
                          }
                          const nX = 240;

                          function GX(kk) {
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

                          function pX(kk) {
                            let {
                              src: Fk
                            } = kk;
                            const [Ik, Tk] = (0, Xk.useState)(!1);
                            return Ik ? null : (0, ek.jsx)("img", {
                              src: Fk,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${Fk}`), Tk(!0)
                              }
                            })
                          }

                          function uX(kk) {
                            let {
                              kind: Fk
                            } = kk;
                            const Ik = PI(Fk),
                              Tk = KX(),
                              yk = (0, lk.q)(),
                              [ak, qk] = (0, Xk.useState)(""),
                              [Lk, tk] = (0, Xk.useState)(null),
                              [Zk, jk] = (0, Xk.useState)(nX),
                              [wk, Jk] = (0, Xk.useState)(null),
                              xk = (0, Xk.useRef)(null),
                              Kk = ak.trim().toLowerCase();
                            (0, Xk.useEffect)((() => {
                              const kk = (0, zk.s)(yk.hash),
                                Xk = Ik.entries.find((Ik => pI(Fk, Ik.name) === kk));
                              if (Xk) xk.current = Xk.name, qk(Xk.name), tk(null), Jk(Xk.name);
                              else if (null !== xk.current) {
                                const kk = xk.current;
                                xk.current = null, qk((Fk => Fk === kk ? "" : Fk)), Jk(null)
                              }
                            }), [Ik, Fk, yk.hash, yk.key]), (0, Xk.useEffect)((() => {
                              var kk;
                              null !== wk && (null === (kk = document.getElementById(pI(Fk, wk))) || void 0 === kk || kk.scrollIntoView({
                                block: "center"
                              }))
                            }), [Fk, wk]);
                            const Qk = Ik.entries.filter((kk => (!Kk || kk.name.toLowerCase().includes(Kk)) && (!Lk || kk.variants.includes(Lk))));
                            return (0, ek.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [Ik.notes.length > 0 && (0, ek.jsx)("div", {
                                className: "DocsProse",
                                children: Ik.notes.map((kk => (0, ek.jsx)("p", {
                                  children: kk
                                }, kk)))
                              }), Ik.legend.length > 0 && (0, ek.jsx)("div", {
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
                                    children: Ik.legend.map((kk => (0, ek.jsxs)("tr", {
                                      children: [(0, ek.jsx)("td", {
                                        children: (0, ek.jsx)("button", {
                                          type: "button",
                                          className: ik()("DocsVariantChip", {
                                            Active: Lk === kk.code
                                          }),
                                          "aria-pressed": Lk === kk.code,
                                          title: `Show only ${Fk} with ${kk.meaning} variants`,
                                          onClick: () => {
                                            tk(Lk === kk.code ? null : kk.code)
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
                              }), Ik.examples.length > 0 && (0, ek.jsx)(Vk, {
                                lang: "text",
                                code: Ik.examples.join("\n")
                              }), (0, ek.jsx)(KI, {
                                className: "DocsFilterBar",
                                value: ak,
                                placeholder: `Search ${Ik.entries.length} ${Fk}\u2026`,
                                label: `Search ${Fk}`,
                                onChange: kk => {
                                  qk(kk), jk(nX)
                                },
                                count: Kk || Lk ? {
                                  visible: Qk.length,
                                  total: Ik.entries.length
                                } : null,
                                children: Lk && (0, ek.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    tk(null)
                                  },
                                  children: [Lk, " ", (0, ek.jsx)(Hk, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, ek.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Qk.slice(0, Zk).map((kk => {
                                  const Ik = "blocks" === Fk ? null === Tk || void 0 === Tk ? void 0 : Tk.getBlockFaces(kk.name) : null,
                                    Xk = Tk && !Ik ? Tk.getItemTextureUrl(kk.name) : null;
                                  return (0, ek.jsxs)("div", {
                                    id: pI(Fk, kk.name),
                                    className: ik()("DocsCatalogueTile", {
                                      Linked: kk.name === wk
                                    }),
                                    children: [(0, ek.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [Ik && (0, ek.jsx)(GX, {
                                        faces: Ik
                                      }), Xk && (0, ek.jsx)(pX, {
                                        src: Xk
                                      })]
                                    }), (0, ek.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: kk.name
                                    }), kk.variants.length > 0 && (0, ek.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: kk.variants.map((kk => (0, ek.jsx)("span", {
                                        children: kk
                                      }, kk)))
                                    }), (0, ek.jsx)(Pk, {
                                      text: kk.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, kk.name)
                                }))
                              }), Qk.length > Zk && (0, ek.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  jk(Qk.length)
                                },
                                children: ["Show all ", Qk.length]
                              }), 0 === Qk.length && (0, ek.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", Fk, " match."]
                              })]
                            })
                          }
                          var bX = Ik(4821),
                            RX = Ik(1534);
                          const UX = .95 * bX.d;

                          function CX(kk) {
                            return /^\s*```/.test(kk)
                          }

                          function NX(kk, Fk) {
                            const Ik = [
                              []
                            ];
                            let Xk = !1;
                            for (const Tk of kk.split("\n")) !Xk && Fk(Tk) && Ik.at(-1).length > 0 && Ik.push([]), CX(Tk) && (Xk = !Xk), Ik.at(-1).push(Tk);
                            return Ik.map((kk => kk.join("\n").trim())).filter(Boolean)
                          }

                          function cX(kk, Fk) {
                            const Ik = `${"#".repeat(Fk)} `,
                              Xk = [];
                            let Tk = !1;
                            for (const ik of kk.split("\n")) CX(ik) ? Tk = !Tk : !Tk && ik.startsWith(Ik) && Xk.push(ik.slice(Ik.length).trim());
                            return Xk
                          }

                          function WX(kk) {
                            return kk.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class fX {
                            constructor(kk, Fk) {
                              this.origin = Fk, this.pages = void 0, this.partPaths = new Map;
                              const Ik = kk.map((kk => {
                                const Fk = Fk => this.resolveLinks(kk, Fk).length,
                                  Ik = function(kk, Fk) {
                                    const Ik = kk.map((kk => Fk(kk.markdown) + 2)),
                                      Xk = Ik.reduce(((kk, Fk) => kk + Fk), 0),
                                      Tk = Xk / Math.ceil(Xk / UX),
                                      ik = [];
                                    let yk = 0;
                                    return kk.forEach(((kk, Fk) => {
                                      const Xk = Ik[Fk];
                                      (0 === ik.length || yk + Xk > UX || yk + Xk / 2 > Tk) && (ik.push([]), yk = 0), ik.at(-1).push(kk), yk += Xk
                                    })), ik
                                  }(function(kk, Fk) {
                                    return NX(kk, (kk => kk.startsWith("## "))).flatMap((kk => {
                                      var Ik;
                                      const Xk = null !== (Ik = cX(kk, 2)[0]) && void 0 !== Ik ? Ik : "";
                                      if (Fk(kk) <= UX) return [{
                                        markdown: kk,
                                        section: Xk
                                      }];
                                      let Tk = !1,
                                        ik = "";
                                      return NX(kk, (kk => {
                                        const Fk = Tk && "" !== kk.trim();
                                        return Tk = "" === kk.trim(), Fk
                                      })).map((kk => {
                                        var Fk;
                                        const Ik = cX(kk, 3),
                                          Tk = kk.startsWith("### ") ? Ik[0] : ik;
                                        return ik = null !== (Fk = Ik.at(-1)) && void 0 !== Fk ? Fk : ik, {
                                          markdown: kk,
                                          section: Xk || Tk
                                        }
                                      }))
                                    }))
                                  }(WX(kk), Fk), Fk);
                                return {
                                  page: kk,
                                  groups: Ik.length > 1 ? Ik : []
                                }
                              }));
                              for (const {
                                  page: Xk,
                                  groups: Tk
                                }
                                of Ik) Tk.forEach(((kk, Fk) => {
                                const Ik = (0, bX.t)(Xk.slug, Fk);
                                for (const Tk of kk.flatMap((kk => [...cX(kk.markdown, 2), ...cX(kk.markdown, 3)]))) {
                                  const kk = `${Xk.id}#${(0,zk.t)(Tk)}`;
                                  this.partPaths.has(kk) || this.partPaths.set(kk, Ik)
                                }
                              }));
                              this.pages = Ik.map((kk => {
                                let {
                                  page: Fk,
                                  groups: Ik
                                } = kk;
                                return {
                                  page: Fk,
                                  path: (0, bX.r)(Fk.slug),
                                  markdown: `# ${Fk.title}\n\n${this.resolveLinks(Fk,WX(Fk))}\n`,
                                  parts: Ik.map(((kk, Xk) => this.renderPart(Fk, kk, Xk, Ik.length)))
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
                              }]).filter((kk => kk.markdown.length > bX.d))))
                            }
                            markdownUrl(kk, Fk) {
                              const Ik = Fk && this.partPaths.get(`${kk.id}#${Fk}`) || (0, bX.r)(kk.slug);
                              return this.url(Fk ? `${Ik}#${Fk}` : Ik)
                            }
                            resolveLinks(kk, Fk) {
                              return Fk.replace(/\]\((#[^)]+)\)/g, ((Fk, Ik) => {
                                var Xk;
                                const Tk = null !== (Xk = Bk(Ik)) && void 0 !== Xk ? Xk : this.samePageTarget(kk, Ik);
                                return Tk ? `](${this.markdownUrl(Tk.page,Tk.anchor)})` : Fk
                              }))
                            }
                            samePageTarget(kk, Fk) {
                              const Ik = (0, zk.t)(Fk.slice(1));
                              return fk(kk, Ik) ? {
                                page: kk,
                                anchor: Ik
                              } : null
                            }
                            renderPart(kk, Fk, Ik, Xk) {
                              const Tk = function(kk) {
                                  const Fk = kk.map((kk => kk.section)).filter(Boolean);
                                  if (0 === Fk.length) return "";
                                  const Ik = Fk[0],
                                    Xk = Fk.at(-1);
                                  return Ik === Xk ? Ik : `${Ik} to ${Xk}`
                                }(Fk),
                                ik = Fk.map((kk => kk.markdown)).join("\n\n"),
                                yk = Tk ? `It covers ${Tk}. ` : "",
                                lk = `Part ${Ik+1} of ${Xk} of [${kk.title}](${this.url((0,bX.r)(kk.slug))}). ${yk}[llms.txt](${this.url(bX.g)}) lists every part.`;
                              return {
                                path: (0, bX.t)(kk.slug, Ik),
                                label: Tk,
                                markdown: `# ${kk.title}, part ${Ik+1} of ${Xk}\n\n${lk}\n\n${this.resolveLinks(kk,ik)}\n`
                              }
                            }
                            llmsTxt(kk) {
                              const Fk = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${BX(bX.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const Ik of Ck) {
                                Fk.push("", `## ${Ik.title}`, "");
                                for (const kk of Ik.pageIds) {
                                  const Ik = this.getPage(kk),
                                    {
                                      page: Xk,
                                      parts: Tk
                                    } = Ik,
                                    ik = `About ${BX(Ik.markdown.length)} tokens${Tk.length>0?`, in ${Tk.length} parts:`:"."}`;
                                  Fk.push(`- [${Xk.title}](${this.url(Ik.path)}): ${Xk.summary} ${ik}`), Tk.forEach(((kk, Ik) => {
                                    Fk.push(`  - [Part ${Ik+1}${kk.label?`: ${kk.label}`:""}](${this.url(kk.path)})`)
                                  }))
                                }
                              }
                              return Fk.push("", "## Optional", "", `- [Every page in one file](${this.url(bX.f)}): About ${BX(kk.length)} tokens, for a model with a large context window.`, ""), Fk.join("\n")
                            }
                            llmsFullTxt() {
                              return Ck.flatMap((kk => kk.pageIds.map((kk => this.getPage(kk).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const kk = this.llmsFullTxt(),
                                Fk = this.llmsTxt(kk),
                                Ik = new Map([
                                  [bX.k, Fk],
                                  [bX.g, Fk],
                                  [bX.f, kk]
                                ]);
                              for (const Xk of this.pages) {
                                Ik.set(Xk.path, Xk.markdown);
                                for (const kk of Xk.parts) Ik.set(kk.path, kk.markdown)
                              }
                              return Ik
                            }
                          }

                          function BX(kk) {
                            return `${Math.max(1,Math.round(kk/4e3))}K`
                          }
                          let dX = null;

                          function YX() {
                            return dX ??= new fX(Uk, RX.b), dX
                          }
                          const AX = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function gX(kk) {
                            return YX().getPage(kk.id).parts.length > 0 ? `Read ${bX.h}, then the parts of the Bloxd Code API's ${kk.title} page it lists, so I can ask questions about it.` : `Read ${RX.b}${(0,bX.r)(kk.slug)} so I can ask questions about it. ${bX.h} lists every page of the Bloxd Code API docs.`
                          }

                          function mX(kk) {
                            let {
                              page: Fk
                            } = kk;
                            const [Ik, Xk] = xk();
                            return (0, ek.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, ek.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Xk(YX().getPage(Fk.id).markdown)
                                },
                                children: [(0, ek.jsx)(Hk, {
                                  name: !1 === (null === Ik || void 0 === Ik ? void 0 : Ik.failed) ? "check" : "copy"
                                }), (0, ek.jsx)("span", {
                                  children: Ik ? Ik.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), AX.map((kk => (0, ek.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${kk.url}${encodeURIComponent(gX(Fk))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, ek.jsx)(Hk, {
                                  name: "external-link"
                                }), (0, ek.jsxs)("span", {
                                  children: ["Open in ", kk.name]
                                })]
                              }, kk.name)))]
                            })
                          }

                          function hX(kk) {
                            return `#${[0,1,2].map((Fk=>Math.round(Math.min(255,Math.max(0,kk[Fk]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function rX(kk) {
                            return [parseInt(kk.slice(1, 3), 16), parseInt(kk.slice(3, 5), 16), parseInt(kk.slice(5, 7), 16)]
                          }

                          function DX(kk) {
                            let {
                              label: Fk,
                              min: Ik,
                              max: Xk,
                              step: Tk,
                              low: ik,
                              high: yk,
                              onChange: lk
                            } = kk;
                            return (0, ek.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ek.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ek.jsx)("span", {
                                  children: Fk
                                }), (0, ek.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: ik === yk ? ik : `${ik}\u2013${yk}`
                                })]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, ek.jsx)("input", {
                                  type: "range",
                                  min: Ik,
                                  max: Xk,
                                  step: Tk,
                                  value: Math.min(Xk, ik),
                                  "aria-label": `Minimum ${Fk.toLowerCase()}`,
                                  onChange: kk => {
                                    const Fk = Number(kk.target.value);
                                    lk(Fk, Math.max(Fk, yk))
                                  }
                                }), (0, ek.jsx)("input", {
                                  type: "range",
                                  min: Ik,
                                  max: Xk,
                                  step: Tk,
                                  value: Math.min(Xk, yk),
                                  "aria-label": `Maximum ${Fk.toLowerCase()}`,
                                  onChange: kk => {
                                    const Fk = Number(kk.target.value);
                                    lk(Math.min(Fk, ik), Fk)
                                  }
                                })]
                              })]
                            })
                          }

                          function MX(kk) {
                            let {
                              label: Fk,
                              min: Ik,
                              max: Xk,
                              step: Tk,
                              value: ik,
                              onChange: yk,
                              format: lk = String
                            } = kk;
                            return (0, ek.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ek.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, ek.jsx)("span", {
                                  children: Fk
                                }), (0, ek.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: lk(ik)
                                })]
                              }), (0, ek.jsx)("input", {
                                type: "range",
                                min: Ik,
                                max: Xk,
                                step: Tk,
                                value: Math.min(Xk, Math.max(Ik, ik)),
                                "aria-label": Fk,
                                onChange: kk => {
                                  yk(Number(kk.target.value))
                                }
                              })]
                            })
                          }

                          function kT(kk) {
                            let {
                              opts: Fk,
                              onChange: Ik
                            } = kk;
                            const Xk = Fk.colorGradients;
                            if (!dI(Xk)) return (0, ek.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, ek.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, ek.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, ek.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Xk.map(((kk, Fk) => (0, ek.jsx)("input", {
                                  type: "color",
                                  value: hX(kk.color),
                                  "aria-label": `Colour ${Fk+1}`,
                                  onChange: kk => {
                                    const Tk = [...Xk];
                                    Tk[Fk] = {
                                      color: rX(kk.target.value)
                                    }, Ik(Tk)
                                  }
                                }, Fk)))
                              })]
                            });
                            const Tk = (kk, Fk) => {
                              const Tk = [...Xk];
                              Tk[kk] = Fk, Ik(Tk)
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
                              }), Xk.map(((kk, Fk) => {
                                var Ik;
                                const Xk = null !== (Ik = kk.maxColor) && void 0 !== Ik ? Ik : kk.minColor;
                                return (0, ek.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, ek.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * kk.timeFraction), "%"]
                                  }), (0, ek.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${hX(kk.minColor)}, ${hX(Xk)})`
                                    }
                                  }), (0, ek.jsx)("input", {
                                    type: "color",
                                    value: hX(kk.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*kk.timeFraction)}%`,
                                    onChange: Ik => {
                                      Tk(Fk, {
                                        ...kk,
                                        minColor: [...rX(Ik.target.value), kk.minColor[3]]
                                      })
                                    }
                                  }), (0, ek.jsx)("input", {
                                    type: "color",
                                    value: hX(Xk),
                                    "aria-label": `Maximum colour at ${Math.round(100*kk.timeFraction)}%`,
                                    onChange: Ik => {
                                      Tk(Fk, {
                                        ...kk,
                                        maxColor: [...rX(Ik.target.value), Xk[3]]
                                      })
                                    }
                                  })]
                                }, Fk)
                              }))]
                            })
                          }
                          const FT = [-.5, -.5, -.5],
                            IT = [.5, .5, .5],
                            XT = [0, 1, 2, 3, 4, 5, 6, 7].map((kk => [1 & kk ? IT[0] : FT[0], 2 & kk ? IT[1] : FT[1], 4 & kk ? IT[2] : FT[2]]));class TT {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(kk, Fk, Ik, Xk) {
                              const Tk = Math.round(31 * Fk),
                                ik = Math.round(31 * Ik),
                                yk = Math.round(31 * Xk),
                                lk = `${Tk}|${ik}|${yk}`;
                              let ak = this.tints.get(kk);
                              (!ak || ak.size > 2e3) && (ak = new Map, this.tints.set(kk, ak));
                              let qk = ak.get(lk);
                              if (qk) return qk;
                              qk = document.createElement("canvas"), qk.width = kk.naturalWidth || 16, qk.height = kk.naturalHeight || 16;
                              const Lk = qk.getContext("2d");
                              return Lk ? (Lk.imageSmoothingEnabled = !1, Lk.drawImage(kk, 0, 0, qk.width, qk.height), Lk.globalCompositeOperation = "multiply", Lk.fillStyle = `rgb(${Tk/31*255}, ${ik/31*255}, ${yk/31*255})`, Lk.fillRect(0, 0, qk.width, qk.height), Lk.globalCompositeOperation = "destination-in", Lk.drawImage(kk, 0, 0, qk.width, qk.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), ak.set(lk, qk), qk
                            }
                          }

                          function iT(kk) {
                            let {
                              opts: Fk,
                              textureUrl: Ik,
                              burst: Tk,
                              paused: ik
                            } = kk;
                            const yk = (0, Xk.useRef)(null),
                              lk = (0, Xk.useRef)(Fk);
                            lk.current = Fk;
                            const ak = (0, Xk.useRef)(ik);
                            ak.current = ik;
                            const qk = (0, Xk.useRef)(null),
                              Lk = (0, Xk.useRef)(null),
                              tk = (0, Xk.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(kk) {
                                let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const Ik = [-.5, -.5, -.5],
                                  Xk = [.5, .5, .5];
                                let Tk = .5;
                                for (let ik = 0; ik < 40; ik++) {
                                  const ik = AI(kk, Ik, Xk, Fk),
                                    yk = Math.max(ik.life / 30, .001);
                                  for (; hI(ik, kk.gravity, yk);) Tk = Math.max(Tk, Math.hypot(ik.pos[0], ik.pos[1], ik.pos[2]) + ik.size / 2)
                                }
                                return Tk
                              }(Fk)))), [Fk]),
                              Zk = (0, Xk.useRef)(tk);
                            return Zk.current = tk, (0, Xk.useEffect)((() => {
                              if (qk.current = null, !Ik) return;
                              const kk = new Image;
                              let Fk = !1;
                              return kk.onload = () => {
                                Fk || (qk.current = kk)
                              }, kk.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${Ik}`)
                              }, kk.src = Ik, () => {
                                Fk = !0
                              }
                            }), [Ik]), (0, Xk.useEffect)((() => {
                              var kk;
                              null === (kk = Lk.current) || void 0 === kk || kk.call(Lk)
                            }), [Fk, Tk]), (0, Xk.useEffect)((() => {
                              const kk = yk.current,
                                Fk = null === kk || void 0 === kk ? void 0 : kk.getContext("2d");
                              if (!kk || !Fk) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const Ik = new TT;
                              let Xk = [],
                                Tk = 0,
                                ik = -.7,
                                tk = Zk.current,
                                jk = performance.now(),
                                ek = 0,
                                wk = !0,
                                Hk = null;
                              const Jk = () => {
                                const kk = lk.current,
                                  Fk = Math.min(400, Math.max(0, Math.ceil(kk.manualEmitCount)));
                                Xk = [];
                                for (let Ik = 0; Ik < Fk; Ik++) Xk.push(AI(kk, FT, IT, Math.random));
                                Tk = 0
                              };
                              Lk.current = Jk, Jk();
                              const xk = yk => {
                                ek = requestAnimationFrame(xk);
                                const Lk = Math.min(.05, (yk - jk) / 1e3);
                                if (jk = yk, !wk) return;
                                const Pk = window.devicePixelRatio || 1,
                                  Kk = Math.round(kk.clientWidth * Pk),
                                  Qk = Math.round(kk.clientHeight * Pk);
                                if (0 === Kk || 0 === Qk) return;
                                kk.width === Kk && kk.height === Qk || (kk.width = Kk, kk.height = Qk);
                                const sk = lk.current;
                                null === Hk && (ik += .18 * Lk), tk += (Zk.current - tk) * Math.min(1, 4 * Lk);
                                const Vk = .6 * Lk;
                                Xk = Xk.filter((kk => hI(kk, sk.gravity, Vk))), 0 !== Xk.length || ak.current || (Tk += Lk, Tk > .6 && Jk());
                                const zk = function(kk, Fk, Ik, Xk) {
                                  const Tk = 3.2 * Xk,
                                    ik = .44 * Math.min(kk, Fk) * Tk / Xk,
                                    yk = Math.cos(Ik),
                                    lk = Math.sin(Ik),
                                    ak = Math.cos(.42),
                                    qk = Math.sin(.42);
                                  return (Ik, Xk, Lk) => {
                                    const tk = Ik * lk + Lk * yk,
                                      Zk = Tk - (Xk * qk + tk * ak);
                                    if (Zk < .05) return null;
                                    const jk = ik / Zk;
                                    return {
                                      x: kk / 2 + (Ik * yk - Lk * lk) * jk,
                                      y: Fk / 2 - (Xk * ak - tk * qk) * jk,
                                      scale: jk,
                                      depth: Zk
                                    }
                                  }
                                }(Kk, Qk, ik, tk);
                                ! function(kk, Fk, Ik, Xk, Tk) {
                                  const ik = kk.createLinearGradient(0, 0, 0, Ik);
                                  ik.addColorStop(0, "#23262d"), ik.addColorStop(1, "#16181c"), kk.globalCompositeOperation = "source-over", kk.globalAlpha = 1, kk.fillStyle = ik, kk.fillRect(0, 0, Fk, Ik);
                                  const yk = (Fk, Ik) => {
                                      const Tk = Xk(Fk[0], Fk[1], Fk[2]),
                                        ik = Xk(Ik[0], Ik[1], Ik[2]);
                                      Tk && ik && (kk.beginPath(), kk.moveTo(Tk.x, Tk.y), kk.lineTo(ik.x, ik.y), kk.stroke())
                                    },
                                    lk = Math.ceil(Tk) + 1,
                                    ak = FT[1];
                                  kk.lineWidth = 1, kk.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let qk = -lk; qk <= lk; qk++) yk([qk + .5, ak, .5 - lk], [qk + .5, ak, lk + .5]), yk([.5 - lk, ak, qk + .5], [lk + .5, ak, qk + .5]);
                                  kk.strokeStyle = "rgba(255, 255, 255, 0.28)", kk.setLineDash([4, 4]);
                                  for (const qk of XT)
                                    for (const kk of XT) {
                                      const Fk = [0, 1, 2].filter((Fk => qk[Fk] !== kk[Fk]));
                                      1 === Fk.length && qk[Fk[0]] < kk[Fk[0]] && yk(qk, kk)
                                    }
                                  kk.setLineDash([])
                                }(Fk, Kk, Qk, zk, tk);
                                const Sk = qk.current,
                                  vk = Xk.map((kk => ({
                                    particle: kk,
                                    at: zk(kk.pos[0], kk.pos[1], kk.pos[2])
                                  }))).filter((kk => null !== kk.at)).sort(((kk, Fk) => Fk.at.depth - kk.at.depth));
                                Fk.imageSmoothingEnabled = !1;
                                for (const kk of function(kk) {
                                    switch (kk) {
                                      case NI.d.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case NI.d.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case NI.d.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case NI.d.MultiplyAdd:
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
                                  }(sk.blendMode)) {
                                  Fk.globalCompositeOperation = kk.operation;
                                  for (const {
                                      particle: Xk,
                                      at: Tk
                                    }
                                    of vk) {
                                    const [ik, yk, lk, ak] = mI(Xk), qk = Math.max(1, Xk.size * Tk.scale);
                                    Fk.globalAlpha = kk.usesAlpha ? Math.min(1, Math.max(0, ak)) : 1, Sk ? Fk.drawImage(Ik.get(Sk, ik, yk, lk), Tk.x - qk / 2, Tk.y - qk / 2, qk, qk) : (Fk.fillStyle = `rgb(${255*ik}, ${255*yk}, ${255*lk})`, Fk.fillRect(Tk.x - qk / 2, Tk.y - qk / 2, qk, qk))
                                  }
                                }
                                Fk.globalCompositeOperation = "source-over", Fk.globalAlpha = 1
                              };
                              ek = requestAnimationFrame(xk);
                              const Pk = new IntersectionObserver((kk => {
                                let [Fk] = kk;
                                wk = Fk.isIntersecting
                              }));
                              Pk.observe(kk);
                              const Kk = Fk => {
                                  Hk = Fk.clientX, kk.setPointerCapture(Fk.pointerId)
                                },
                                Qk = kk => {
                                  null !== Hk && (ik += .01 * (kk.clientX - Hk), Hk = kk.clientX)
                                },
                                sk = () => {
                                  Hk = null
                                };
                              return kk.addEventListener("pointerdown", Kk), kk.addEventListener("pointermove", Qk), kk.addEventListener("pointerup", sk), kk.addEventListener("pointercancel", sk), () => {
                                cancelAnimationFrame(ek), Pk.disconnect(), Lk.current = null, kk.removeEventListener("pointerdown", Kk), kk.removeEventListener("pointermove", Qk), kk.removeEventListener("pointerup", sk), kk.removeEventListener("pointercancel", sk)
                              }
                            }), []), (0, ek.jsx)("canvas", {
                              ref: yk,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${Fk.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const yT = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            lT = [{
                              mode: NI.d.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: NI.d.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: NI.d.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: NI.d.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: NI.d.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            aT = (0, Xk.forwardRef)((function(kk, Fk) {
                              var Ik, Tk;
                              let {
                                textures: yk
                              } = kk;
                              const lk = KX(),
                                ak = (0, Xk.useRef)(null),
                                [qk, Lk] = (0, Xk.useState)(WI),
                                [tk, Zk] = (0, Xk.useState)("example"),
                                [jk, wk] = (0, Xk.useState)(0),
                                [Jk, xk] = (0, Xk.useState)(!1),
                                Kk = kk => {
                                  const Fk = "example" === kk ? WI : cI(kk);
                                  Fk && (Lk(Fk), Zk(kk))
                                };
                              (0, Xk.useImperativeHandle)(Fk, (() => ({
                                preview: kk => {
                                  var Fk;
                                  Kk(kk), null === (Fk = ak.current) || void 0 === Fk || Fk.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Qk = kk => {
                                  Lk({
                                    ...qk,
                                    ...kk
                                  }), Zk(null)
                                },
                                sk = function(kk, Fk) {
                                  if (null !== Fk) return `${kX}    presetId: "${Fk}",\n${FX}\n})`;
                                  const Ik = kk.velocityGradients.map((kk => `        {\n            timeFraction: ${rI(kk.timeFraction)},\n            factor: ${rI(kk.factor)},\n            factor2: ${rI(kk.factor2)},\n        },`)),
                                    Xk = [`    dir1: ${DI(kk.dir1)},`, `    dir2: ${DI(kk.dir2)},`, FX, `    texture: "${kk.texture}",`, `    minLifeTime: ${rI(kk.minLifeTime)},`, `    maxLifeTime: ${rI(kk.maxLifeTime)},`, `    minEmitPower: ${rI(kk.minEmitPower)},`, `    maxEmitPower: ${rI(kk.maxEmitPower)},`, `    minSize: ${rI(kk.minSize)},`, `    maxSize: ${rI(kk.maxSize)},`, `    manualEmitCount: ${rI(kk.manualEmitCount)},`, `    gravity: ${DI(kk.gravity)},`, `    colorGradients: ${MI(kk.colorGradients,"    ")},`, `    velocityGradients: ${Ik.length>0?`[\n${Ik.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${rI(kk.blendMode)},`];
                                  return void 0 !== kk.hideDist && Xk.push(`    hideDist: ${rI(kk.hideDist)},`), `${kX}${Xk.join("\n")}\n})`
                                }(qk, null === tk || "example" === tk ? null : tk),
                                zk = yk.includes(qk.texture) ? yk : [...yk, qk.texture];
                              return (0, ek.jsxs)("section", {
                                ref: ak,
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
                                  }), (0, ek.jsx)(Pk, {
                                    text: sk,
                                    label: "Copy code"
                                  })]
                                }), (0, ek.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, ek.jsx)("button", {
                                    type: "button",
                                    className: ik()("DocsVariantChip", {
                                      Active: "example" === tk
                                    }),
                                    onClick: () => {
                                      Kk("example")
                                    },
                                    children: "Example"
                                  }), yT.filter((kk => null !== cI(kk))).map((kk => (0, ek.jsx)("button", {
                                    type: "button",
                                    className: ik()("DocsVariantChip", {
                                      Active: tk === kk
                                    }),
                                    onClick: () => {
                                      Kk(kk)
                                    },
                                    children: kk
                                  }, kk))), (0, ek.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== tk && void 0 !== tk ? tk : "custom",
                                    "aria-label": "Preset",
                                    onChange: kk => {
                                      Kk(kk.target.value)
                                    },
                                    children: [(0, ek.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === tk && (0, ek.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), CI.e.map((kk => (0, ek.jsx)("option", {
                                      value: kk,
                                      children: kk
                                    }, kk)))]
                                  })]
                                }), (0, ek.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, ek.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, ek.jsx)(iT, {
                                      opts: qk,
                                      textureUrl: null !== (Ik = null === lk || void 0 === lk ? void 0 : lk.getParticleTextureUrl(qk.texture)) && void 0 !== Ik ? Ik : null,
                                      burst: jk,
                                      paused: Jk
                                    }), (0, ek.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, ek.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          wk(jk + 1)
                                        },
                                        children: [(0, ek.jsx)(Hk, {
                                          name: "replay"
                                        }), (0, ek.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, ek.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": Jk,
                                        onClick: () => {
                                          xk(!Jk)
                                        },
                                        children: [(0, ek.jsx)(Hk, {
                                          name: Jk ? "play" : "pause"
                                        }), (0, ek.jsx)("span", {
                                          children: Jk ? "Loop" : "Stop looping"
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
                                          children: qk.texture
                                        })]
                                      }), (0, ek.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: zk.map((kk => {
                                          var Fk;
                                          const Ik = null !== (Fk = null === lk || void 0 === lk ? void 0 : lk.getParticleTextureUrl(kk)) && void 0 !== Fk ? Fk : null;
                                          return (0, ek.jsx)("button", {
                                            type: "button",
                                            className: ik()("DocsParticleTexture", {
                                              Active: qk.texture === kk
                                            }),
                                            title: kk,
                                            "aria-label": kk,
                                            "aria-pressed": qk.texture === kk,
                                            onClick: () => {
                                              Qk({
                                                texture: kk
                                              })
                                            },
                                            children: Ik ? (0, ek.jsx)("img", {
                                              src: Ik,
                                              alt: ""
                                            }) : (0, ek.jsx)(Hk, {
                                              name: "image"
                                            })
                                          }, kk)
                                        }))
                                      })]
                                    }), (0, ek.jsx)(MX, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: qk.manualEmitCount,
                                      onChange: kk => {
                                        Qk({
                                          manualEmitCount: kk
                                        })
                                      }
                                    }), (0, ek.jsx)(DX, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: qk.minLifeTime,
                                      high: qk.maxLifeTime,
                                      onChange: (kk, Fk) => {
                                        Qk({
                                          minLifeTime: kk,
                                          maxLifeTime: Fk
                                        })
                                      }
                                    }), (0, ek.jsx)(DX, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: qk.minEmitPower,
                                      high: qk.maxEmitPower,
                                      onChange: (kk, Fk) => {
                                        Qk({
                                          minEmitPower: kk,
                                          maxEmitPower: Fk
                                        })
                                      }
                                    }), (0, ek.jsx)(DX, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: qk.minSize,
                                      high: qk.maxSize,
                                      onChange: (kk, Fk) => {
                                        Qk({
                                          minSize: kk,
                                          maxSize: Fk
                                        })
                                      }
                                    }), (0, ek.jsx)(MX, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Tk = qk.gravity[1]) && void 0 !== Tk ? Tk : 0,
                                      onChange: kk => {
                                        var Fk, Ik;
                                        Qk({
                                          gravity: [null !== (Fk = qk.gravity[0]) && void 0 !== Fk ? Fk : 0, kk, null !== (Ik = qk.gravity[2]) && void 0 !== Ik ? Ik : 0]
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
                                        value: qk.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: kk => {
                                          Qk({
                                            blendMode: Number(kk.target.value)
                                          })
                                        },
                                        children: lT.map((kk => {
                                          let {
                                            mode: Fk,
                                            label: Ik
                                          } = kk;
                                          return (0, ek.jsx)("option", {
                                            value: Fk,
                                            children: Ik
                                          }, Fk)
                                        }))
                                      })]
                                    }), (0, ek.jsx)(kT, {
                                      opts: qk,
                                      onChange: kk => {
                                        Qk({
                                          colorGradients: kk
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, ek.jsx)(Vk, {
                                  code: sk,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var qT = Ik(4466),
                            LT = Ik(1849);

                          function tT(kk, Fk) {
                            return kk ? qT.c.includes(Fk) ? kk.getIngameIconUrl(Fk) : kk.getItemIconUrl(Fk) : null
                          }

                          function ZT(kk) {
                            var Fk, Ik, Xk;
                            let {
                              part: Tk,
                              assets: yk
                            } = kk;
                            const lk = tT(yk, Tk.icon),
                              ak = null !== (Fk = null === (Ik = Tk.style) || void 0 === Ik ? void 0 : Ik.fontSize) && void 0 !== Fk ? Fk : "1.8em",
                              qk = (0, CF.fc)(Tk.style);
                            return (0, ek.jsxs)("span", {
                              className: ik()("DocsBloxdTextIcon", {
                                Missing: !lk
                              }),
                              style: {
                                width: ak,
                                height: ak,
                                opacity: null === (Xk = Tk.style) || void 0 === Xk ? void 0 : Xk.opacity
                              },
                              title: lk ? void 0 : `No Bloxd icon, item or block is called "${Tk.icon}"`,
                              children: [lk && qk && (0, ek.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: qk,
                                  maskImage: `url("${lk}")`,
                                  WebkitMaskImage: `url("${lk}")`
                                }
                              }), lk ? (0, ek.jsx)("img", {
                                src: lk,
                                alt: "",
                                className: ik()({
                                  Tinted: qk
                                })
                              }) : (0, ek.jsx)(Hk, {
                                name: "image"
                              })]
                            })
                          }

                          function jT(kk) {
                            let {
                              parts: Fk,
                              className: Ik
                            } = kk;
                            const Xk = KX(),
                              Tk = [];
                            let yk = [];
                            const lk = kk => {
                              yk.length > 0 && (Tk.push((0, ek.jsx)(LT.c, {
                                text: yk
                              }, `run-${kk}`)), yk = [])
                            };
                            return Fk.forEach(((kk, Fk) => {
                              "icon" !== BF(kk) || cF(kk.icon) ? yk.push(kk) : (lk(Fk), Tk.push((0, ek.jsx)(ZT, {
                                part: kk,
                                assets: Xk
                              }, `icon-${Fk}`)))
                            })), lk(Fk.length), (0, ek.jsx)("div", {
                              className: ik()("DocsStyledTextPreview", Ik),
                              children: Tk
                            })
                          }
                          const eT = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let wT = null;

                          function HT(kk) {
                            if (wT ??= document.createElement("canvas").getContext("2d"), !wT) return "#000000";
                            wT.fillStyle = "#000000", wT.fillStyle = kk;
                            const Fk = wT.fillStyle;
                            return Fk.startsWith("#") ? Fk : "#000000"
                          }

                          function JT(kk) {
                            let {
                              value: Fk,
                              label: Ik,
                              onChange: Xk
                            } = kk;
                            return (0, ek.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, ek.jsx)("input", {
                                type: "color",
                                value: HT(Fk),
                                "aria-label": `${Ik} picker`,
                                onChange: kk => {
                                  Xk(kk.target.value)
                                }
                              }), (0, ek.jsx)("input", {
                                type: "text",
                                value: Fk,
                                placeholder: "#ffb914 or gold",
                                "aria-label": Ik,
                                spellCheck: !1,
                                onChange: kk => {
                                  Xk(kk.target.value)
                                }
                              })]
                            })
                          }

                          function xT(kk) {
                            let {
                              value: Fk,
                              fontAwesomeIcons: Ik,
                              onChange: Tk
                            } = kk;
                            const yk = KX(),
                              [lk, ak] = (0, Xk.useState)(cF(Fk) ? "fontAwesome" : "bloxd"),
                              [qk, Lk] = (0, Xk.useState)(""),
                              tk = qk.trim().toLowerCase(),
                              Zk = "bloxd" === lk ? qT.c : Ik,
                              jk = tk ? Zk.filter((kk => kk.toLowerCase().includes(tk))) : Zk;
                            return (0, ek.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, ek.jsx)("input", {
                                type: "text",
                                value: Fk,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: kk => {
                                  Tk(kk.target.value)
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
                                    "aria-selected": lk === kk,
                                    className: ik()("DocsVariantChip", {
                                      Active: lk === kk
                                    }),
                                    onClick: () => {
                                      ak(kk)
                                    },
                                    children: "bloxd" === kk ? `Bloxd icons (${qT.c.length})` : `Font Awesome (${Ik.length})`
                                  }, kk))), (0, ek.jsx)("input", {
                                    type: "search",
                                    value: qk,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: kk => {
                                      Lk(kk.target.value)
                                    }
                                  })
                                ]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [jk.map((kk => {
                                  const Ik = "bloxd" === lk ? tT(yk, kk) : null;
                                  return (0, ek.jsx)("button", {
                                    type: "button",
                                    title: kk,
                                    "aria-label": kk,
                                    "aria-pressed": kk === Fk,
                                    className: ik()("DocsIconPickerOption", {
                                      Active: kk === Fk
                                    }),
                                    onClick: () => {
                                      Tk(kk)
                                    },
                                    children: "fontAwesome" === lk ? (0, ek.jsx)(QI.e, {
                                      name: kk
                                    }) : Ik ? (0, ek.jsx)("img", {
                                      src: Ik,
                                      alt: ""
                                    }) : (0, ek.jsx)(Hk, {
                                      name: "image"
                                    })
                                  }, kk)
                                })), 0 === jk.length && (0, ek.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", qk, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function PT(kk) {
                            let {
                              property: Fk,
                              value: Ik,
                              fontAwesomeIcons: Xk,
                              onChange: Tk
                            } = kk;
                            const {
                              field: ik,
                              label: yk
                            } = Fk, lk = kk => "" !== kk || Fk.isRequired ? kk : void 0;
                            switch (ik.kind) {
                              case "text":
                                return ik.multiline ? (0, ek.jsx)("textarea", {
                                  value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
                                  rows: 2,
                                  "aria-label": yk,
                                  onChange: kk => {
                                    Tk(kk.target.value)
                                  }
                                }) : (0, ek.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
                                  "aria-label": yk,
                                  onChange: kk => {
                                    Tk(lk(kk.target.value))
                                  }
                                });
                              case "size":
                                return (0, ek.jsx)("input", {
                                  type: "text",
                                  value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
                                  placeholder: Fk.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": yk,
                                  spellCheck: !1,
                                  onChange: kk => {
                                    Tk(lk(kk.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, ek.jsx)(JT, {
                                  value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
                                  label: yk,
                                  onChange: kk => {
                                    Tk(lk(kk))
                                  }
                                });
                              case "colours": {
                                const kk = Array.isArray(Ik) ? Ik : [],
                                  Fk = kk => {
                                    Tk(kk.length > 0 ? kk : void 0)
                                  };
                                return (0, ek.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [kk.map(((Ik, Xk) => (0, ek.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, ek.jsx)(JT, {
                                      value: Ik,
                                      label: `${yk} ${Xk+1}`,
                                      onChange: Ik => {
                                        Fk(kk.map(((kk, Fk) => Fk === Xk ? Ik : kk)))
                                      }
                                    }), (0, ek.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Xk+1}`,
                                      onClick: () => {
                                        Fk(kk.filter(((kk, Fk) => Fk !== Xk)))
                                      },
                                      children: (0, ek.jsx)(Hk, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Xk))), (0, ek.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var Ik;
                                      Fk([...kk, null !== (Ik = kk.at(-1)) && void 0 !== Ik ? Ik : "#ffffff"])
                                    },
                                    children: [(0, ek.jsx)(Hk, {
                                      name: "plus"
                                    }), 0 === kk.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var ak;
                                const kk = "number" === typeof Ik ? Ik : Number(null !== (ak = Fk.defaultText) && void 0 !== ak ? ak : 0);
                                return (0, ek.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, ek.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: kk,
                                    "aria-label": yk,
                                    onChange: kk => {
                                      Tk(Number(kk.target.value))
                                    }
                                  }), (0, ek.jsx)("output", {
                                    children: kk.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, ek.jsxs)("select", {
                                  value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
                                  "aria-label": yk,
                                  onChange: kk => {
                                    Tk(lk(kk.target.value))
                                  },
                                  children: [!Fk.isRequired && (0, ek.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", Fk.defaultText, ")"]
                                  }), ik.options.map((kk => (0, ek.jsx)("option", {
                                    value: kk,
                                    children: kk
                                  }, kk)))]
                                });
                              case "icon":
                                return (0, ek.jsx)(xT, {
                                  value: String(null !== Ik && void 0 !== Ik ? Ik : ""),
                                  fontAwesomeIcons: Xk,
                                  onChange: Tk
                                })
                            }
                          }

                          function KT(kk) {
                            let Fk;
                            try {
                              Fk = JSON.parse(kk)
                            } catch (Ik) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${Ik.message}`
                              }
                            }
                            return XI(Fk) ? {
                              part: Fk,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function QT(kk) {
                            let {
                              parts: Fk,
                              index: Ik,
                              fontAwesomeIcons: Tk,
                              onChange: ik,
                              iG: yk,
                              onClose: lk
                            } = kk;
                            const ak = (0, Xk.useContext)(wF),
                              Lk = (0, Xk.useRef)(null),
                              tk = Fk[Ik],
                              Zk = BF(tk),
                              [jk, wk] = (0, Xk.useState)((() => JSON.stringify(tk, null, 2))),
                              Jk = (0, Xk.useMemo)((() => "other" === Zk ? KT(jk).error : null), [Zk, jk]);
                            (0, Xk.useEffect)((() => {
                              var kk;
                              null === (kk = Lk.current) || void 0 === kk || kk.focus()
                            }), []);
                            const xk = (0, ek.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: kk => {
                                kk.target === kk.currentTarget && lk()
                              },
                              children: (0, ek.jsxs)("div", {
                                ref: Lk,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${Ik+1}: ${WF[Zk]}`,
                                tabIndex: -1,
                                onKeyDown: kk => {
                                  "Escape" === kk.key ? (kk.stopPropagation(), lk()) : "Tab" === kk.key && Lk.current && function(kk, Fk) {
                                    const Ik = Array.from(kk.querySelectorAll(OF)),
                                      Xk = Ik[0],
                                      Tk = Ik.at(-1);
                                    if (!Xk || !Tk) return;
                                    const ik = document.activeElement;
                                    !Fk.shiftKey || ik !== Xk && ik !== kk ? Fk.shiftKey || ik !== Tk || (Fk.preventDefault(), Xk.focus()) : (Fk.preventDefault(), Tk.focus())
                                  }(Lk.current, kk)
                                },
                                children: [(0, ek.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, ek.jsxs)("div", {
                                    children: [(0, ek.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", Ik + 1]
                                    }), (0, ek.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: WF[Zk]
                                    })]
                                  }), (0, ek.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: lk,
                                    children: (0, ek.jsx)(Hk, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, ek.jsx)(jT, {
                                  parts: Fk,
                                  className: "DocsTextDialogPreview"
                                }), (0, ek.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Zk ? (0, ek.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, ek.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, ek.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: jk,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: kk => {
                                        wk(kk.target.value);
                                        const Fk = KT(kk.target.value);
                                        null !== Fk.part && ik(Fk.part)
                                      }
                                    }), Jk && (0, ek.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: Jk
                                    })]
                                  }) : YF[Zk].map((kk => {
                                    const Fk = gF(tk, kk.path),
                                      Ik = kk.isRequired ? JSON.stringify(hF(tk, kk.path)) === JSON.stringify(tk) : void 0 === Fk;
                                    return (0, ek.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, ek.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, ek.jsx)("span", {
                                          children: kk.label
                                        }), (0, ek.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: Ik,
                                          "aria-label": `Reset ${kk.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            ik(hF(tk, kk.path))
                                          },
                                          children: [(0, ek.jsx)(Hk, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, ek.jsx)(PT, {
                                        property: kk,
                                        value: Fk,
                                        fontAwesomeIcons: Tk,
                                        onChange: Fk => {
                                          ik(mF(tk, kk.path, Fk))
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
                                    onClick: yk,
                                    children: [(0, ek.jsx)(Hk, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, ek.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: lk,
                                    children: "Done"
                                  })]
                                }), (0, ek.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: eT.map((kk => (0, ek.jsx)("option", {
                                    value: kk
                                  }, kk)))
                                })]
                              })
                            });
                            return ak ? (0, qk.createPortal)(xk, ak) : xk
                          }
                          const sT = [{
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
                            VT = Object.keys(fF);

                          function zT(kk) {
                            let {
                              fontAwesomeIcons: Fk
                            } = kk;
                            const [Ik, Tk] = (0, Xk.useState)(sT[0].parts), [yk, lk] = (0, Xk.useState)((() => kI(sT[0].parts))), [ak, qk] = (0, Xk.useState)(null), [Lk, tk] = (0, Xk.useState)(!1), [Zk, jk] = (0, Xk.useState)(null), [wk, Jk] = (0, Xk.useState)(!1), [xk, Pk] = (0, Xk.useState)(null), Kk = (0, Xk.useRef)(null), Qk = kI(Ik);
                            (0, Xk.useLayoutEffect)((() => {
                              var kk;
                              if (!xk) return;
                              const Fk = kk => {
                                  var Fk;
                                  return null === (Fk = Kk.current) || void 0 === Fk ? void 0 : Fk.querySelector(`[data-focus-key="${kk}"]`)
                                },
                                Ik = Fk(xk.key);
                              null === (kk = Ik && !Ik.disabled ? Ik : Fk(xk.fallback)) || void 0 === kk || kk.focus(), Pk(null)
                            }), [xk]);
                            const sk = kk => {
                                Tk(kk), lk(kI(kk)), qk(null)
                              },
                              zk = kk => {
                                sk(Ik.filter(((Fk, Ik) => Ik !== kk))), Pk({
                                  key: `edit-${Math.min(kk,Ik.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              Sk = (kk, Fk) => {
                                const Xk = [...Ik],
                                  [Tk] = Xk.splice(kk, 1);
                                Xk.splice(kk + Fk, 0, Tk), sk(Xk);
                                Pk({
                                  key: `${Fk<0?"up":"down"}-${kk+Fk}`,
                                  fallback: `edit-${kk+Fk}`
                                })
                              };
                            return (0, ek.jsxs)("section", {
                              ref: Kk,
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
                                children: sT.map((kk => (0, ek.jsx)("button", {
                                  type: "button",
                                  className: ik()("DocsVariantChip", {
                                    Active: Qk === kI(kk.parts)
                                  }),
                                  onClick: () => {
                                    sk(kk.parts)
                                  },
                                  children: kk.label
                                }, kk.label)))
                              }), (0, ek.jsx)(jT, {
                                parts: Ik,
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
                                    children: [Ik.map(((kk, Fk) => {
                                      const Xk = BF(kk);
                                      return (0, ek.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, ek.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${Fk}`,
                                          "aria-label": `Edit part ${Fk+1}, ${WF[Xk]}`,
                                          onClick: () => {
                                            jk(Fk)
                                          },
                                          children: [(0, ek.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: WF[Xk]
                                          }), (0, ek.jsx)(jT, {
                                            parts: [kk],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Xk && (0, ek.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: rF(kk)
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
                                            children: (0, ek.jsx)(Hk, {
                                              name: "chevron-up"
                                            })
                                          }), (0, ek.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Fk+1} down`,
                                            "data-focus-key": `down-${Fk}`,
                                            disabled: Fk === Ik.length - 1,
                                            onClick: () => {
                                              Sk(Fk, 1)
                                            },
                                            children: (0, ek.jsx)(Hk, {
                                              name: "chevron-down"
                                            })
                                          }), (0, ek.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${Fk+1}`,
                                            onClick: () => {
                                              zk(Fk)
                                            },
                                            children: (0, ek.jsx)(Hk, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, Fk)
                                    })), 0 === Ik.length && (0, ek.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, ek.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: kk => {
                                      "Escape" === kk.key && wk && (kk.stopPropagation(), Jk(!1), Pk({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, ek.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": wk,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        Jk(!wk)
                                      },
                                      children: [(0, ek.jsx)(Hk, {
                                        name: "plus"
                                      }), "Add a part", (0, ek.jsx)(Hk, {
                                        name: wk ? "chevron-up" : "chevron-down"
                                      })]
                                    }), wk && (0, ek.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: VT.map((kk => (0, ek.jsx)("li", {
                                        children: (0, ek.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (kk => {
                                              sk([...Ik, fF[kk]]), Jk(!1), jk(Ik.length)
                                            })(kk)
                                          },
                                          children: WF[kk]
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
                                      "aria-pressed": Lk,
                                      onClick: () => {
                                        tk(!Lk)
                                      },
                                      children: [(0, ek.jsx)(Hk, {
                                        name: Lk ? "check" : "pencil"
                                      }), Lk ? "Done" : "Edit"]
                                    })]
                                  }), Lk ? (0, ek.jsxs)(ek.Fragment, {
                                    children: [(0, ek.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: yk,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: kk => {
                                        lk(kk.target.value);
                                        const Fk = TI(kk.target.value);
                                        qk(Fk.error), Fk.parts && Tk(Fk.parts)
                                      }
                                    }), ak && (0, ek.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: ak
                                    })]
                                  }) : (0, ek.jsx)(Vk, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Qk})`
                                  })]
                                })]
                              }), null !== Zk && Zk < Ik.length && (0, ek.jsx)(QT, {
                                parts: Ik,
                                index: Zk,
                                fontAwesomeIcons: Fk,
                                onChange: kk => {
                                  ((kk, Fk) => {
                                    sk(Ik.map(((Ik, Xk) => Xk === kk ? Fk : Ik)))
                                  })(Zk, kk)
                                },
                                iG: () => {
                                  zk(Zk), jk(null)
                                },
                                onClose: () => {
                                  jk(null), Pk({
                                    key: `edit-${Zk}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var ST = Ik(4843),
                            oT = Ik(4829),
                            vT = Ik(4837),
                            ET = Ik(4850);
                          const OT = 40,
                            nT = 800,
                            GT = 150,
                            pT = 8e3,
                            uT = 2e3;

                          function bT(kk, Fk) {
                            return 12 * Math.log2(Fk / kk)
                          }

                          function RT(kk, Fk) {
                            return Math.round(kk * 2 ** (Fk / 12) * 10) / 10
                          }

                          function UT(kk) {
                            return `${kk} ms`
                          }

                          function CT(kk) {
                            return `${kk} st`
                          }
                          const NT = [{
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

                          function cT(kk) {
                            let {
                              synth: Fk,
                              onChange: Ik
                            } = kk;
                            const Xk = (0, ST.k)(Fk);
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
                                    children: ST.d.map((kk => (0, ek.jsx)("button", {
                                      type: "button",
                                      className: ik()("DocsVariantChip", {
                                        Active: Fk.waveform === kk
                                      }),
                                      "aria-pressed": Fk.waveform === kk,
                                      onClick: () => {
                                        Ik({
                                          waveform: kk
                                        })
                                      },
                                      children: kk
                                    }, kk)))
                                  })]
                                }), (0, ek.jsx)(MX, {
                                  label: "Pitch",
                                  min: 0,
                                  max: bT(OT, nT),
                                  step: .1,
                                  value: bT(OT, Fk.pitchHz),
                                  format: () => `${Fk.pitchHz} Hz`,
                                  onChange: kk => {
                                    Ik({
                                      pitchHz: RT(OT, kk)
                                    })
                                  }
                                }), (0, ek.jsx)(MX, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: Fk.syllableMs,
                                  format: UT,
                                  onChange: kk => {
                                    Ik({
                                      syllableMs: kk
                                    })
                                  }
                                }), (0, ek.jsx)(MX, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: Fk.volume,
                                  onChange: kk => {
                                    Ik({
                                      volume: kk
                                    })
                                  }
                                })]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ek.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, ek.jsx)(MX, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: Fk.durationMs,
                                  format: UT,
                                  onChange: kk => {
                                    Ik({
                                      durationMs: kk
                                    })
                                  }
                                }), (0, ek.jsx)(MX, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Xk.durationMs,
                                  step: 1,
                                  value: Xk.attackMs,
                                  format: UT,
                                  onChange: kk => {
                                    Ik({
                                      attackMs: kk
                                    })
                                  }
                                }), (0, ek.jsx)(MX, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Xk.durationMs - Xk.attackMs,
                                  step: 1,
                                  value: Xk.releaseMs,
                                  format: UT,
                                  onChange: kk => {
                                    Ik({
                                      releaseMs: kk
                                    })
                                  }
                                }), (0, ek.jsx)(MX, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: Fk.glideSemitones,
                                  format: CT,
                                  onChange: kk => {
                                    Ik({
                                      glideSemitones: kk
                                    })
                                  }
                                }), (0, ek.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, ek.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== Fk.lowpassHz,
                                    onChange: kk => {
                                      Ik({
                                        lowpassHz: kk.target.checked ? uT : null
                                      })
                                    }
                                  }), (0, ek.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== Fk.lowpassHz && (0, ek.jsx)(MX, {
                                  label: "Filter",
                                  min: 0,
                                  max: bT(GT, pT),
                                  step: .1,
                                  value: bT(GT, Fk.lowpassHz),
                                  format: () => `${Fk.lowpassHz} Hz`,
                                  onChange: kk => {
                                    Ik({
                                      lowpassHz: RT(GT, kk)
                                    })
                                  }
                                })]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, ek.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), NT.map((kk => {
                                  let {
                                    key: Xk,
                                    label: Tk,
                                    max: ik
                                  } = kk;
                                  return (0, ek.jsx)(MX, {
                                    label: Tk,
                                    min: 0,
                                    max: ik,
                                    step: .1,
                                    value: Fk.intonation[Xk],
                                    format: CT,
                                    onChange: kk => {
                                      Ik({
                                        intonation: {
                                          ...Fk.intonation,
                                          [Xk]: kk
                                        }
                                      })
                                    }
                                  }, Xk)
                                }))]
                              })]
                            })
                          }
                          const WT = Object.keys(ST.g),
                            fT = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function BT(kk) {
                            var Fk;
                            const Ik = JSON.stringify((0, ST.k)(kk));
                            return null !== (Fk = WT.find((kk => JSON.stringify((0, ST.k)(ST.g[kk])) === Ik))) && void 0 !== Fk ? Fk : null
                          }

                          function dT(kk) {
                            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof kk || null === kk) return JSON.stringify(kk);
                            return `{\n${Object.entries(kk).map((kk=>{let[Ik,Xk]=kk;return`${Fk}    ${Ik}: ${dT(Xk,`${Fk}    `)},`})).join("\n")}\n${Fk}}`
                          }

                          function YT(kk, Fk, Ik) {
                            const Xk = BT(kk),
                              Tk = [`    line: ${JSON.stringify(Fk)},`];
                            return Ik && Tk.push(`    speakerName: ${JSON.stringify(Ik)},`), Tk.push("    voice,"), `const voice = ${Xk?JSON.stringify(Xk):dT((0,ST.k)(kk))}\n\napi.setClientOption(playerId, "dialogue", {\n${Tk.join("\n")}\n})`
                          }
                          const AT = 400,
                            gT = 90;
                          let mT = null;

                          function hT(kk, Fk, Ik) {
                            return mT ??= new AudioContext, mT.resume(), (0, ET.e)(mT, mT.destination, kk, Fk, Ik, (() => {}))
                          }

                          function rT() {
                            const [kk, Fk] = (0, Xk.useState)(ST.g.regular), [Ik, Tk] = (0, Xk.useState)(fT[0]), [yk, lk] = (0, Xk.useState)("Innkeeper"), [ak, qk] = (0, Xk.useState)(0), Lk = tX((kk => kk.volume)), tk = (0, Xk.useRef)(null), Zk = (0, Xk.useRef)(0), jk = (0, Xk.useRef)(0), wk = () => {
                              var kk;
                              null === (kk = tk.current) || void 0 === kk || kk.call(tk), tk.current = null
                            };
                            (0, Xk.useEffect)((() => () => {
                              var kk;
                              null === (kk = tk.current) || void 0 === kk || kk.call(tk), window.clearTimeout(Zk.current)
                            }), []);
                            const Jk = (0, Xk.useMemo)((() => ({
                                line: Ik,
                                speakerName: yk || void 0,
                                voice: kk
                              })), [Ik, yk, kk]),
                              xk = (0, Xk.useRef)(Jk);
                            xk.current = Jk;
                            const Kk = BT(kk),
                              Qk = kk => {
                                window.clearTimeout(Zk.current), wk();
                                const {
                                  plan: Fk,
                                  synth: Ik
                                } = (0, vT.e)(kk);
                                Ik && (tk.current = hT(Ik, Fk.blips, Lk)), qk((kk => kk + 1))
                              },
                              sk = YT(kk, Ik, yk);
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
                                }), (0, ek.jsx)(Pk, {
                                  text: sk,
                                  label: "Copy code"
                                })]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [WT.map((kk => (0, ek.jsx)("button", {
                                  type: "button",
                                  className: ik()("DocsVariantChip", {
                                    Active: Kk === kk
                                  }),
                                  "aria-pressed": Kk === kk,
                                  onClick: () => {
                                    (kk => {
                                      const Ik = ST.g[kk];
                                      Fk(Ik), Qk({
                                        ...Jk,
                                        voice: Ik
                                      })
                                    })(kk)
                                  },
                                  children: kk
                                }, kk))), !Kk && (0, ek.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, ek.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, ek.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, ek.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, ek.jsx)(oT.e, {
                                      display: Jk
                                    }, ak)
                                  }), (0, ek.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: kk => {
                                      kk.preventDefault(), Qk(Jk)
                                    },
                                    children: [(0, ek.jsx)("input", {
                                      value: Ik,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: kk => {
                                        Tk(kk.target.value)
                                      }
                                    }), (0, ek.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, ek.jsx)(Hk, {
                                        name: "play"
                                      }), (0, ek.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, ek.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: fT.map((kk => (0, ek.jsx)("button", {
                                      type: "button",
                                      className: ik()("DocsVariantChip", {
                                        Active: Ik === kk
                                      }),
                                      onClick: () => {
                                        var Fk;
                                        Tk(Fk = kk), Qk({
                                          ...Jk,
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
                                      value: yk,
                                      placeholder: "No name",
                                      onChange: kk => {
                                        lk(kk.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, ek.jsx)(cT, {
                                  synth: kk,
                                  onChange: Ik => {
                                    const Xk = {
                                      ...kk,
                                      ...Ik
                                    };
                                    Fk(Xk);
                                    const Tk = {
                                        ...Jk,
                                        voice: Xk
                                      },
                                      ik = performance.now();
                                    if (ik - jk.current >= gT) {
                                      jk.current = ik, wk();
                                      const kk = (0, vT.e)(Tk).plan.blips[0];
                                      kk && (tk.current = hT((0, ST.k)(Xk), [{
                                        ...kk,
                                        atMs: 0
                                      }], Lk))
                                    }
                                    window.clearTimeout(Zk.current), Zk.current = window.setTimeout((() => {
                                      Qk(xk.current)
                                    }), AT)
                                  }
                                })]
                              }), (0, ek.jsx)(Vk, {
                                code: sk,
                                lang: "ts"
                              })]
                            })
                          }
                          var DT = Ik(4866);
                          const MT = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            ki = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Fi = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${ki}`, "g"), DT.l],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, DT.l]
                            ];

                          function Ii(kk) {
                            return `${kk.pageId}#${kk.anchor}`
                          }
                          let Xi, Ti, ii;

                          function yi(kk) {
                            const Fk = (0, zk.l)(kk),
                              Ik = new Set;
                            for (const [, , Xk] of Fk.matchAll(zk.d)) {
                              const kk = Xk.startsWith("#") ? Bk(Xk) : null,
                                Fk = kk ? Ii({
                                  pageId: kk.page.id,
                                  anchor: kk.anchor
                                }) : null;
                              null !== Fk && (Xi || (Xi = new Set(Uk.flatMap((kk => Ok(kk.layout) ? Wk(kk).sections.map((Fk => Ii({
                                pageId: kk.id,
                                anchor: Fk.heading.anchor
                              }))) : [])))), Xi).has(Fk) && Ik.add(Fk)
                            }
                            for (const [, , Xk] of Fk.matchAll(MT)) {
                              const kk = jF(Xk);
                              kk && Ik.add(Ii(kk))
                            }
                            return Ik
                          }

                          function li(kk, Fk) {
                            const Ik = new Set,
                              Xk = function(kk) {
                                return kk.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(kk);
                            for (const [, Tk] of Xk.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) Ik.add(Tk);
                            for (const [Tk, ik] of Fi)
                              for (const [, kk] of(0, DT.e)(Xk, Tk, ik)) Fk.has(kk) && Ik.add(kk);
                            return Ik
                          }

                          function ai(kk, Fk, Ik, Xk) {
                            const Tk = kk.get(Fk);
                            Tk ? !Xk && Tk.some((kk => kk.pageId === Ik.pageId)) || Tk.push(Ik) : kk.set(Fk, [Ik])
                          }
                          const qi = /^[A-Za-z_$][\w$]*$/;

                          function Li(kk) {
                            return qi.test(kk.name) ? kk.name : "options"
                          }

                          function ti(kk, Fk) {
                            const Ik = kk.params.map(Li).join(", ");
                            return Fk ? `${kk.name} = (${Ik}) => {\n\t\n}` : `api.${kk.name}(${Ik})`
                          }

                          function Zi(kk) {
                            let {
                              method: Fk,
                              isCallback: Ik
                            } = kk;
                            return (0, ek.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, ek.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [Ik ? (0, ek.jsxs)(ek.Fragment, {
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
                                }), Fk.params.map(((kk, Ik) => (0, ek.jsxs)(Xk.Fragment, {
                                  children: [Ik > 0 && (0, ek.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, ek.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${Fk.name}-${Li(kk)}`,
                                    children: kk.name
                                  })]
                                }, kk.name))), (0, ek.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: Ik ? ") => " : ")"
                                }), Ik && !Fk.returns && (0, ek.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), Fk.returns && Fk.returns.type && (0, ek.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!Ik && (0, ek.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, ek.jsx)(oF, {
                                  type: Fk.returns.type
                                })]
                              })]
                            })
                          }

                          function ji(kk) {
                            let {
                              title: Fk,
                              references: Ik
                            } = kk;
                            const Tk = (0, Xk.useContext)(eF);
                            return (0, ek.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, ek.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: Fk
                              }), Ik.map((kk => (0, ek.jsx)(yk.e, {
                                to: Yk(Tk, Nk(kk.pageId), kk.anchor),
                                children: kk.label
                              }, `${kk.pageId}#${kk.anchor}`)))]
                            })
                          }

                          function ei(kk) {
                            var Fk, Ik;
                            let {
                              pageId: Xk,
                              anchor: Tk
                            } = kk;
                            const ik = Ii({
                                pageId: Xk,
                                anchor: Tk
                              }),
                              yk = null !== (Fk = function() {
                                if (!ii) {
                                  ii = new Map;
                                  const Xk = new Set(Uk.filter((kk => "callbacks" === kk.layout)).flatMap((kk => Wk(kk).sections.map((kk => kk.heading.text)))));
                                  for (const Tk of Uk)
                                    if ("article" === Tk.layout || "snippets" === Tk.layout)
                                      for (const ik of (0, zk.u)(Wk(Tk)))
                                        for (const {
                                            code: yk
                                          }
                                          of(0, zk.n)(ik.blocks))
                                          for (const lk of li(yk, Xk)) {
                                            const Xk = ZF().get(lk);
                                            if (Xk) {
                                              var kk, Fk, Ik;
                                              const yk = {
                                                pageId: Tk.id,
                                                anchor: null !== (kk = null === (Fk = ik.heading) || void 0 === Fk ? void 0 : Fk.anchor) && void 0 !== kk ? kk : "",
                                                label: null !== (Ik = Tk.navTitle) && void 0 !== Ik ? Ik : Tk.title
                                              };
                                              ai(ii, Ii(Xk), yk, !1)
                                            }
                                          }
                                }
                                return ii
                              }().get(ik)) && void 0 !== Fk ? Fk : [],
                              lk = null !== (Ik = function() {
                                if (!Ti) {
                                  Ti = new Map;
                                  const kk = Nk("changelog");
                                  for (const Fk of Wk(kk).sections) {
                                    const Ik = new Set(Fk.blocks.flatMap((kk => [...yi(kk)])));
                                    for (const Xk of Ik) {
                                      const Ik = {
                                        pageId: kk.id,
                                        anchor: Fk.heading.anchor,
                                        label: Fk.heading.text
                                      };
                                      ai(Ti, Xk, Ik, !0)
                                    }
                                  }
                                }
                                return Ti
                              }().get(ik)) && void 0 !== Ik ? Ik : [];
                            return 0 === yk.length && 0 === lk.length ? null : (0, ek.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [yk.length > 0 && (0, ek.jsx)(ji, {
                                title: "Used in",
                                references: yk
                              }), lk.length > 0 && (0, ek.jsx)(ji, {
                                title: "Changelog",
                                references: lk
                              })]
                            })
                          }

                          function wi(kk) {
                            let {
                              method: Fk,
                              pageId: Ik,
                              anchor: Xk,
                              isCallback: Tk
                            } = kk;
                            const ik = Tk ? void 0 : aF().get(Fk.name),
                              yk = Fk.description.length > 0 || null === ik || void 0 === ik || !ik.description ? Fk.description : (0, zk.A)(ik.description);
                            return (0, ek.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, ek.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, ek.jsx)(LI, {
                                  level: 2,
                                  text: Fk.name,
                                  anchor: Xk,
                                  className: "DocsCardTitle"
                                }), (0, ek.jsx)(Pk, {
                                  text: ti(Fk, Tk),
                                  label: Tk ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, ek.jsx)(Zi, {
                                method: Fk,
                                isCallback: Tk
                              }), ik && null !== ik.deprecation && (0, ek.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, ek.jsx)("strong", {
                                  children: "Deprecated"
                                }), ik.deprecation && (0, ek.jsxs)(ek.Fragment, {
                                  children: [": ", (0, ek.jsx)(VF, {
                                    text: (lk = ik.deprecation, (0, DT.s)(lk, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, DT.j)("`\\w"), (kk => {
                                      let [Fk] = kk;
                                      return ZF().has(Fk) ? `\`${Fk}\`` : Fk
                                    })))
                                  })]
                                })]
                              }), yk.length > 0 && (0, ek.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, ek.jsx)(eI, {
                                  blocks: yk
                                })
                              }), Fk.params.length > 0 && (0, ek.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, ek.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, ek.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: Fk.params.map((kk => (0, ek.jsxs)("div", {
                                    id: `${Fk.name}-${Li(kk)}`,
                                    className: "DocsParam",
                                    children: [(0, ek.jsxs)("dt", {
                                      children: [(0, ek.jsx)("code", {
                                        className: "DocsParamName",
                                        children: kk.name
                                      }), (0, ek.jsx)(oF, {
                                        type: kk.type
                                      })]
                                    }), kk.description && (0, ek.jsx)("dd", {
                                      children: (0, ek.jsx)(VF, {
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
                                  children: [Fk.returns.type && (0, ek.jsx)(oF, {
                                    type: Fk.returns.type
                                  }), Fk.returns.description.length > 0 && (0, ek.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, ek.jsx)(eI, {
                                      blocks: Fk.returns.description
                                    })
                                  })]
                                })]
                              }), (0, ek.jsx)(ei, {
                                pageId: Ik,
                                anchor: Xk
                              })]
                            });
                            var lk
                          }

                          function Hi(kk) {
                            var Fk;
                            return null !== kk.defaultValue && "undefined" !== kk.defaultValue ? kk.defaultValue : null !== (Fk = kk.example) && void 0 !== Fk ? Fk : "value"
                          }

                          function Ji(kk) {
                            let {
                              setting: Fk,
                              pageId: Ik,
                              anchor: Xk,
                              setterSnippet: Tk
                            } = kk;
                            const ik = null === Fk.defaultValue ? null : xF(Fk.defaultValue);
                            return (0, ek.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, ek.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, ek.jsx)(LI, {
                                  level: 2,
                                  text: Fk.name,
                                  anchor: Xk,
                                  className: "DocsCardTitle"
                                }), (0, ek.jsx)(Pk, {
                                  text: Tk(Fk.name, Hi(Fk)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, ek.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, ek.jsxs)("div", {
                                  children: [(0, ek.jsx)("dt", {
                                    children: "Type"
                                  }), (0, ek.jsx)("dd", {
                                    children: (0, ek.jsx)(oF, {
                                      type: Fk.type
                                    })
                                  })]
                                }), null !== Fk.defaultValue && (0, ek.jsxs)("div", {
                                  children: [(0, ek.jsx)("dt", {
                                    children: "Default"
                                  }), (0, ek.jsx)("dd", {
                                    children: (0, ek.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [ik && (0, ek.jsx)(PF, {
                                        colour: ik
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
                                children: (0, ek.jsx)(eI, {
                                  blocks: Fk.description
                                })
                              }), (0, ek.jsx)(ei, {
                                pageId: Ik,
                                anchor: Xk
                              })]
                            })
                          }

                          function xi(kk) {
                            let {
                              section: Fk
                            } = kk;
                            return (0, ek.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, ek.jsx)(LI, {
                                level: 2,
                                text: Fk.heading.text,
                                anchor: Fk.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, ek.jsx)("div", {
                                className: "DocsProse",
                                children: (0, ek.jsx)(eI, {
                                  blocks: Fk.blocks
                                })
                              })]
                            })
                          }

                          function Pi(kk) {
                            let {
                              section: Fk
                            } = kk;
                            return (0, ek.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, ek.jsx)(LI, {
                                level: Fk.heading.level,
                                text: Fk.heading.text,
                                anchor: Fk.heading.anchor
                              }), (0, ek.jsx)(eI, {
                                blocks: Fk.blocks
                              })]
                            })
                          }
                          const Ki = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function Qi(kk) {
                            let {
                              page: Fk,
                              section: Ik
                            } = kk;
                            if ("methods" === Fk.layout || "callbacks" === Fk.layout) return (0, ek.jsx)(wi, {
                              method: zI(Ik),
                              pageId: Fk.id,
                              anchor: Ik.heading.anchor,
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
                                for (const Xk of kk.blocks) {
                                  var Ik;
                                  if (VI(Xk)) continue;
                                  const kk = "paragraph" === Xk.kind ? Xk.text.match(SI) : null;
                                  if (!kk) {
                                    Fk.description.push(Xk);
                                    continue
                                  }
                                  const Tk = null !== (Ik = sI(kk[2])) && void 0 !== Ik ? Ik : kk[2];
                                  "Type" === kk[1] ? Fk.type = Tk : "Default" === kk[1] ? Fk.defaultValue = Tk : "" !== Tk && (Fk.example = Tk)
                                }
                                return Fk.type ? Fk : null
                              }(Ik);
                              if (kk) return (0, ek.jsx)(Ji, {
                                setting: kk,
                                pageId: Fk.id,
                                anchor: Ik.heading.anchor,
                                setterSnippet: Fk.setterSnippet
                              })
                            }
                            return "snippets" === Fk.layout ? (0, ek.jsx)(xi, {
                              section: Ik
                            }) : "changelog" === Fk.layout ? (0, ek.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, ek.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, ek.jsx)(LI, {
                                  level: 2,
                                  text: Ik.heading.text,
                                  anchor: Ik.heading.anchor
                                })
                              }), (0, ek.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, ek.jsx)(eI, {
                                  blocks: oI(Ik.blocks)
                                })
                              })]
                            }) : Fk.gallery ? (0, ek.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, ek.jsx)(LI, {
                                level: Ik.heading.level,
                                text: Ik.heading.text,
                                anchor: Ik.heading.anchor
                              }), (0, ek.jsx)(vX, {
                                kind: Fk.gallery,
                                content: Wk(Fk),
                                blocks: Ik.blocks
                              })]
                            }) : (0, ek.jsx)(Pi, {
                              section: Ik
                            })
                          }

                          function si(kk) {
                            let {
                              page: Fk,
                              onTocChange: Ik
                            } = kk;
                            const Tk = Wk(Fk),
                              [ik, yk] = (0, Xk.useState)(""),
                              lk = "article" !== Fk.layout,
                              ak = JI(Fk.gallery) ? Fk.gallery : null,
                              qk = null !== ak,
                              Lk = ik.trim().toLowerCase(),
                              tk = (0, Xk.useRef)(null),
                              Zk = (0, Xk.useCallback)((kk => {
                                var Fk;
                                null === (Fk = tk.current) || void 0 === Fk || Fk.preview(kk)
                              }), []),
                              jk = (0, Xk.useMemo)((() => {
                                if (!Fk.hasParticlePlayground) return [];
                                const kk = nI(Tk.intro).find((kk => "names" === kk.kind && !kk.names.some((kk => null !== cI(kk.name)))));
                                return "names" === (null === kk || void 0 === kk ? void 0 : kk.kind) ? kk.names.map((kk => kk.name)) : []
                              }), [Fk, Tk]),
                              wk = (0, Xk.useMemo)((() => {
                                if (!Fk.hasTextPlayground) return [];
                                const kk = Tk.sections.flatMap((kk => kk.blocks.flatMap((kk => {
                                  var Fk;
                                  return (null !== (Fk = OI(kk)) && void 0 !== Fk ? Fk : []).flatMap((kk => cF(kk.name) ? [kk.name] : []))
                                }))));
                                return [...new Set(kk)]
                              }), [Fk, Tk]),
                              Hk = (0, Xk.useMemo)((() => Lk ? Tk.sections.filter((kk => function(kk, Fk) {
                                return !!kk.heading.text.toLowerCase().includes(Fk) || kk.blocks.some((kk => (0, zk.l)(kk).toLowerCase().includes(Fk)))
                              }(kk, Lk))) : Tk.sections), [Tk, Lk]),
                              Jk = (0, Xk.useMemo)((() => function(kk, Fk) {
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
                              }(Fk, Hk)), [Fk, Hk]);
                            return (0, Xk.useEffect)((() => {
                              Ik(Jk)
                            }), [Jk, Ik]), (0, ek.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, ek.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, ek.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Tk.title || Fk.title
                                }), (0, ek.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: Fk.summary
                                }), (0, ek.jsx)(mX, {
                                  page: Fk
                                }), lk && (0, ek.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, ek.jsxs)("span", {
                                    children: [(0, ek.jsx)("strong", {
                                      children: Tk.sections.length
                                    }), " ", Ki[Fk.layout]]
                                  })
                                })]
                              }), "" === Fk.slug && (0, ek.jsx)(OX, {}), ak && (0, ek.jsx)(uX, {
                                kind: ak
                              }, ak), Fk.hasParticlePlayground && (0, ek.jsx)(aT, {
                                ref: tk,
                                textures: jk
                              }), !qk && Tk.intro.length > 0 && (0, ek.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: Fk.gallery ? (0, ek.jsx)(xX.Provider, {
                                  value: Fk.hasParticlePlayground ? Zk : null,
                                  children: (0, ek.jsx)(vX, {
                                    kind: Fk.gallery,
                                    content: Tk,
                                    blocks: Tk.intro
                                  })
                                }) : (0, ek.jsx)(eI, {
                                  blocks: oI(Tk.intro)
                                })
                              }), Fk.hasTextPlayground && (0, ek.jsx)(zT, {
                                fontAwesomeIcons: wk
                              }), Fk.hasVoicePlayground && (0, ek.jsx)(rT, {}), Fk.childPageIds && (0, ek.jsx)(OX, {
                                cards: Fk.childPageIds.map((kk => ({
                                  pageId: kk
                                }))),
                                label: Fk.title
                              }), lk && (0, ek.jsx)(KI, {
                                className: "DocsFilterBar",
                                value: ik,
                                placeholder: `Filter ${Tk.sections.length} ${Ki[Fk.layout]}\u2026`,
                                label: `Filter ${Ki[Fk.layout]}`,
                                onChange: yk,
                                count: Lk ? {
                                  visible: Hk.length,
                                  total: Tk.sections.length
                                } : null
                              }), !qk && (0, ek.jsxs)("div", {
                                className: `DocsSections Layout-${Fk.layout}`,
                                children: [Hk.map((kk => (0, ek.jsx)(Qi, {
                                  page: Fk,
                                  section: kk
                                }, kk.heading.anchor))), 0 === Hk.length && (0, ek.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Ki[Fk.layout], " match \u201c", ik, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Vi = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function zi(kk) {
                            let {
                              entry: Fk,
                              isActive: Ik,
                              onNavigate: Xk,
                              label: Tk,
                              children: yk
                            } = kk;
                            return (0, ek.jsx)("a", {
                              href: `#${Fk.anchor}`,
                              "aria-label": Tk,
                              className: ik()(`Level${Fk.level}`, {
                                Active: Ik
                              }),
                              "aria-current": Ik ? "location" : void 0,
                              onClick: kk => {
                                kk.preventDefault(), Xk(Fk.anchor)
                              },
                              children: yk
                            })
                          }

                          function Si(kk) {
                            let {
                              toc: Fk,
                              activeAnchor: Ik,
                              onNavigate: Tk
                            } = kk;
                            const yk = Math.max(0, Fk.findIndex((kk => kk.anchor === Ik))),
                              lk = (0, Xk.useRef)(null),
                              ak = (0, Xk.useRef)(!1);
                            (0, Xk.useEffect)((() => {
                              var kk, Ik;
                              const Xk = null === (kk = lk.current) || void 0 === kk ? void 0 : kk.closest(".DocsToc"),
                                Tk = null === (Ik = lk.current) || void 0 === Ik ? void 0 : Ik.querySelector(".DocsTimelineNotch.Active");
                              if (!Xk || !Tk) return;
                              let ik = 0;
                              if (yk === Fk.length - 1) ik = Xk.scrollHeight;
                              else if (yk > 0) {
                                const kk = Xk.getBoundingClientRect(),
                                  Fk = Tk.getBoundingClientRect();
                                ik = Xk.scrollTop + Fk.top + Fk.height / 2 - (kk.top + Xk.clientHeight / 2)
                              }
                              Xk.scrollTo({
                                top: ik,
                                behavior: ak.current ? "smooth" : "auto"
                              }), ak.current = !0
                            }), [yk, Fk.length]);
                            const qk = [];
                            return Fk.forEach(((kk, Fk) => {
                              var Ik, Xk, Tk;
                              const ik = function(kk) {
                                  const Fk = kk.trim().match(Vi);
                                  return Fk ? {
                                    day: Fk[1],
                                    month: `${Fk[2]} ${Fk[3]}`
                                  } : null
                                }(kk.text),
                                yk = null !== (Ik = null === ik || void 0 === ik ? void 0 : ik.month) && void 0 !== Ik ? Ik : null;
                              null !== yk && (null === (Xk = qk.at(-1)) || void 0 === Xk ? void 0 : Xk.month) === yk || qk.push({
                                month: yk,
                                entries: []
                              }), qk.at(-1).entries.push({
                                entry: kk,
                                day: null !== (Tk = null === ik || void 0 === ik ? void 0 : ik.day) && void 0 !== Tk ? Tk : null,
                                index: Fk
                              })
                            })), (0, ek.jsx)("ol", {
                              ref: lk,
                              className: "DocsTimeline",
                              children: qk.map((kk => {
                                let {
                                  month: Fk,
                                  entries: Ik
                                } = kk;
                                return (0, ek.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [Fk && (0, ek.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: Fk
                                  }), (0, ek.jsx)("ol", {
                                    children: Ik.map((kk => {
                                      let {
                                        entry: Fk,
                                        day: Ik,
                                        index: Xk
                                      } = kk;
                                      return (0, ek.jsx)("li", {
                                        className: ik()("DocsTimelineNotch", {
                                          Passed: Xk < yk,
                                          Active: Xk === yk
                                        }),
                                        children: (0, ek.jsx)(zi, {
                                          entry: Fk,
                                          isActive: Xk === yk,
                                          onNavigate: Tk,
                                          label: Fk.text,
                                          children: (0, ek.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== Ik && void 0 !== Ik ? Ik : Fk.text
                                          })
                                        })
                                      }, Fk.anchor)
                                    }))
                                  })]
                                }, Ik[0].entry.anchor)
                              }))
                            })
                          }

                          function oi(kk) {
                            let {
                              isChangelog: Fk,
                              toc: Ik,
                              activeAnchor: Xk,
                              onNavigate: Tk
                            } = kk;
                            return 0 === Ik.length ? null : (0, ek.jsxs)(ek.Fragment, {
                              children: [(0, ek.jsx)("div", {
                                className: "DocsTocTitle",
                                children: Fk ? "Updates" : "On this page"
                              }), Fk ? (0, ek.jsx)(Si, {
                                toc: Ik,
                                activeAnchor: Xk,
                                onNavigate: Tk
                              }) : (0, ek.jsx)("ul", {
                                children: Ik.map((kk => (0, ek.jsx)("li", {
                                  children: (0, ek.jsx)(zi, {
                                    entry: kk,
                                    isActive: kk.anchor === Xk,
                                    onNavigate: Tk,
                                    children: kk.text.replace(/`/g, "")
                                  })
                                }, kk.anchor)))
                              })]
                            })
                          }
                          const vi = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Ei = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            Oi = 20,
                            ni = 10,
                            Gi = 40,
                            ui = 120;
                          let bi;

                          function Ri(kk) {
                            const Fk = kk.gallery;
                            if (!Fk) return [];
                            if (JI(Fk)) return function(kk) {
                              return PI(kk).entries.map((kk => kk.name))
                            }(Fk).map((Ik => ({
                              page: kk,
                              anchor: pI(Fk, Ik),
                              title: Ik,
                              kind: Ei[Fk],
                              text: "",
                              listedUnder: kk.title
                            })));
                            const Ik = Wk(kk);
                            return (0, zk.u)(Ik).flatMap((Xk => {
                              const Tk = Xk.heading ? `${kk.title} \u203a ${Xk.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : kk.title;
                              return bI(Fk, Ik, Xk.blocks).flatMap((Ik => "names" !== Ik.kind ? [] : Ik.names.map((Xk => {
                                const ik = Ik.isSongs ? "Song" : Ei[Fk];
                                return {
                                  page: kk,
                                  anchor: Xk.anchor,
                                  title: Xk.name,
                                  kind: ik,
                                  text: "",
                                  listedUnder: Tk
                                }
                              }))))
                            }))
                          }

                          function Ui(kk, Fk, Ik) {
                            const Xk = kk.title.toLowerCase();
                            let Tk = 0;
                            if (Xk === Fk) Tk = 100;
                            else if (Xk.startsWith(Fk)) Tk = 80;
                            else if (Xk.includes(Fk)) Tk = 60;
                            else if (Ik.every((kk => Xk.includes(kk)))) Tk = 45;
                            else {
                              if (!kk.text.toLowerCase().includes(Fk)) return 0;
                              Tk = 20
                            }
                            return Tk - Math.min(Xk.length / 10, 9) + ("Page" === kk.kind ? 8 : "Method" === kk.kind ? 3 : 0) - (kk.listedUnder ? Oi : 0)
                          }

                          function Ci(kk, Fk) {
                            const Ik = kk.toLowerCase().indexOf(Fk),
                              Xk = Math.max(0, Ik - ui / 3);
                            return `${Xk>0?"\u2026":""}${kk.slice(Xk,Xk+ui)}${Xk+ui<kk.length?"\u2026":""}`
                          }

                          function Ni(kk) {
                            let {
                              text: Fk,
                              query: Ik
                            } = kk;
                            const Xk = Ik ? Fk.toLowerCase().indexOf(Ik) : -1;
                            return -1 === Xk ? (0, ek.jsx)(ek.Fragment, {
                              children: Fk
                            }) : (0, ek.jsxs)(ek.Fragment, {
                              children: [Fk.slice(0, Xk), (0, ek.jsx)("mark", {
                                children: Fk.slice(Xk, Xk + Ik.length)
                              }), Fk.slice(Xk + Ik.length)]
                            })
                          }

                          function ci(kk) {
                            let {
                              basePath: Fk,
                              onClose: Ik
                            } = kk;
                            const Tk = (0, lk.u)(),
                              [yk, ak] = (0, Xk.useState)(""),
                              [qk, Lk] = (0, Xk.useState)(0),
                              tk = (0, Xk.useRef)(null),
                              Zk = (0, Xk.useRef)(null),
                              jk = yk.trim().toLowerCase(),
                              wk = (0, Xk.useMemo)((() => {
                                const kk = (bi || (bi = Uk.flatMap((kk => {
                                  const Fk = Wk(kk);
                                  return [{
                                    page: kk,
                                    anchor: "",
                                    title: kk.title,
                                    kind: "Page",
                                    text: kk.summary
                                  }, ...Fk.sections.flatMap((Fk => {
                                    const Ik = Fk.blocks.filter((kk => "paragraph" === kk.kind)).map(zk.l).join(" ").replace(/[`*]/g, ""),
                                      Xk = {
                                        page: kk,
                                        anchor: Fk.heading.anchor,
                                        title: Fk.heading.text.replace(/`/g, ""),
                                        kind: vi[kk.layout],
                                        text: Ik
                                      },
                                      Tk = Fk.blocks.flatMap((Fk => "article" === kk.layout && "heading" === Fk.kind && 3 === Fk.level ? [{
                                        page: kk,
                                        anchor: Fk.anchor,
                                        title: Fk.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Xk.title
                                      }] : []));
                                    return [Xk, ...Tk]
                                  })), ...Ri(kk)]
                                }))), bi);
                                if (!jk) return kk.filter((kk => "Page" === kk.kind));
                                const Fk = jk.split(/\s+/);
                                let Ik = 0;
                                return kk.map((kk => ({
                                  entry: kk,
                                  score: Ui(kk, jk, Fk)
                                }))).filter((kk => kk.score > 0)).sort(((kk, Fk) => Fk.score - kk.score)).filter((kk => !kk.entry.listedUnder || (Ik++, Ik <= ni))).slice(0, Gi).map((kk => kk.entry))
                              }), [jk]);
                            (0, Xk.useEffect)((() => {
                              Lk(0)
                            }), [jk]), (0, Xk.useEffect)((() => {
                              const kk = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === kk || void 0 === kk || kk.focus()
                              }
                            }), []), (0, Xk.useEffect)((() => {
                              var kk, Fk;
                              null === (kk = tk.current) || void 0 === kk || null === (Fk = kk.querySelector(".Active")) || void 0 === Fk || Fk.scrollIntoView({
                                block: "nearest"
                              })
                            }), [qk]);
                            const Jk = kk => {
                              Tk(Yk(Fk, kk.page, kk.anchor)), Ik()
                            };
                            return (0, ek.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: kk => {
                                kk.target === kk.currentTarget && Ik()
                              },
                              children: (0, ek.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: kk => {
                                  kk.target !== Zk.current && kk.preventDefault()
                                },
                                onKeyDown: kk => {
                                  if ("Escape" === kk.key) Ik();
                                  else if ("Tab" === kk.key) {
                                    var Fk;
                                    kk.preventDefault(), null === (Fk = Zk.current) || void 0 === Fk || Fk.focus()
                                  }
                                },
                                children: [(0, ek.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, ek.jsx)(Hk, {
                                    name: "magnifying-glass"
                                  }), (0, ek.jsx)("input", {
                                    ref: Zk,
                                    autoFocus: !0,
                                    value: yk,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": wk.length > 0 ? `DocsSearchResult-${qk}` : void 0,
                                    onChange: kk => {
                                      ak(kk.target.value)
                                    },
                                    onKeyDown: kk => {
                                      if ("ArrowDown" === kk.key || "ArrowUp" === kk.key) {
                                        kk.preventDefault();
                                        const Fk = "ArrowDown" === kk.key ? 1 : -1;
                                        Lk((qk + Fk + wk.length) % Math.max(wk.length, 1))
                                      } else "Enter" === kk.key && wk[qk] && Jk(wk[qk])
                                    }
                                  }), (0, ek.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, ek.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: tk,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!jk && (0, ek.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), wk.map(((kk, Fk) => {
                                    var Ik;
                                    return (0, ek.jsxs)("li", {
                                      id: `DocsSearchResult-${Fk}`,
                                      role: "option",
                                      "aria-selected": Fk === qk,
                                      className: ik()("DocsSearchResult", {
                                        Active: Fk === qk
                                      }),
                                      onMouseMove: () => {
                                        Lk(Fk)
                                      },
                                      onClick: () => {
                                        Jk(kk)
                                      },
                                      children: [(0, ek.jsx)(Hk, {
                                        name: kk.page.icon
                                      }), (0, ek.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, ek.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, ek.jsx)(Ni, {
                                            text: kk.title,
                                            query: jk
                                          })
                                        }), kk.text && (0, ek.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, ek.jsx)(Ni, {
                                            text: Ci(kk.text, jk),
                                            query: jk
                                          })
                                        })]
                                      }), (0, ek.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === kk.kind ? "Page" : null !== (Ik = kk.listedUnder) && void 0 !== Ik ? Ik : `${kk.kind} \xb7 ${kk.page.title}`
                                      })]
                                    }, `${kk.page.id}#${kk.anchor}`)
                                  })), jk && 0 === wk.length && (0, ek.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", yk, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function Wi(kk, Fk) {
                            if (Fk < 10) return `${kk.toFixed(1)}s`;
                            const Ik = Math.floor(kk);
                            return `${Math.floor(Ik/60)}:${String(Ik%60).padStart(2,"0")}`
                          }

                          function fi() {
                            const kk = tX((kk => kk.track)),
                              Fk = tX((kk => kk.volume)),
                              [Ik, Tk] = (0, Xk.useState)(0),
                              yk = (0, Xk.useRef)(IX);
                            if ((0, Xk.useEffect)((() => {
                                if (!kk) return;
                                if (Tk(wX()), "playing" !== kk.status) return;
                                let Fk = 0;
                                const Ik = () => {
                                  Tk(wX()), Fk = requestAnimationFrame(Ik)
                                };
                                return Fk = requestAnimationFrame(Ik), () => {
                                  cancelAnimationFrame(Fk)
                                }
                              }), [kk]), !kk) return null;
                            const lk = "paused" !== kk.status,
                              ak = Math.min(Ik, kk.duration);
                            return (0, ek.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, ek.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, ek.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": lk ? `Pause ${kk.name}` : `Play ${kk.name}`,
                                  onClick: eX,
                                  children: (0, ek.jsx)(Hk, {
                                    name: lk ? "pause" : "play"
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
                                      children: Wi(ak, kk.duration)
                                    }), (0, ek.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: kk.duration || 1,
                                      step: .01,
                                      value: ak,
                                      disabled: 0 === kk.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${Wi(ak,kk.duration)} of ${Wi(kk.duration,kk.duration)}`,
                                      onChange: kk => {
                                        const Fk = Number(kk.target.value);
                                        ! function(kk) {
                                          var Fk;
                                          lX = kk, null === (Fk = iX) || void 0 === Fk || Fk.seek(kk)
                                        }(Fk), Tk(Fk)
                                      }
                                    }), (0, ek.jsx)("span", {
                                      children: kk.duration > 0 ? Wi(kk.duration, kk.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, ek.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, ek.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === Fk ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === Fk ? HX(yk.current) : (yk.current = Fk, HX(0))
                                    },
                                    children: (0, ek.jsx)(Hk, {
                                      name: "volume",
                                      className: ik()({
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
                                      HX(Number(kk.target.value))
                                    }
                                  })]
                                }), (0, ek.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var Fk;
                                    null === (Fk = document.querySelector(`[data-docs-track="${CSS.escape(XX(kk.name,kk.isSong))}"]`)) || void 0 === Fk || Fk.focus(), JX()
                                  },
                                  children: (0, ek.jsx)(Hk, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var Bi = Ik(41);
                          const di = "docsTheme",
                            Yi = window.matchMedia("(prefers-color-scheme: light)");

                          function Ai(kk) {
                            let {
                              theme: Fk,
                              onChange: Ik
                            } = kk;
                            const Xk = "dark" === Fk ? "light" : "dark";
                            return (0, ek.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Xk} theme`,
                              title: `Switch to ${Xk} theme`,
                              onClick: () => {
                                Ik(Xk)
                              },
                              children: (0, ek.jsx)(Hk, {
                                name: "dark" === Fk ? "moon" : "sun"
                              })
                            })
                          }
                          const gi = "https://github.com/Bloxdy/code-api",
                            mi = "https://discord.gg/playbloxd",
                            ri = 180,
                            Di = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function Mi(kk) {
                            let {
                              basePath: Fk,
                              activePageId: Ik,
                              onNavigate: Xk
                            } = kk;
                            return (0, ek.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Ck.map((kk => (0, ek.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, ek.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: kk.title
                                }), kk.pageIds.map((kk => {
                                  var Tk;
                                  const lk = Nk(kk);
                                  return (0, ek.jsxs)(yk.e, {
                                    to: Yk(Fk, lk),
                                    className: ik()("DocsNavLink", {
                                      Active: lk.id === Ik
                                    }),
                                    "aria-current": lk.id === Ik ? "page" : void 0,
                                    onClick: Xk,
                                    children: [(0, ek.jsx)(Hk, {
                                      name: lk.icon
                                    }), (0, ek.jsx)("span", {
                                      children: null !== (Tk = lk.navTitle) && void 0 !== Tk ? Tk : lk.title
                                    })]
                                  }, lk.id)
                                }))]
                              }, kk.title)))
                            })
                          }

                          function ky(kk) {
                            let {
                              basePath: Fk,
                              pageId: Ik
                            } = kk;
                            const Xk = Ck.flatMap((kk => kk.pageIds)),
                              Tk = Xk.indexOf(Ik),
                              ik = Tk > 0 ? Nk(Xk[Tk - 1]) : null,
                              lk = Tk < Xk.length - 1 ? Nk(Xk[Tk + 1]) : null;
                            return (0, ek.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [ik ? (0, ek.jsxs)(yk.e, {
                                className: "DocsPagerLink Previous",
                                to: Yk(Fk, ik),
                                children: [(0, ek.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, ek.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: ik.title
                                })]
                              }) : (0, ek.jsx)("span", {}), lk && (0, ek.jsxs)(yk.e, {
                                className: "DocsPagerLink Next",
                                to: Yk(Fk, lk),
                                children: [(0, ek.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, ek.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: lk.title
                                })]
                              })]
                            })
                          }

                          function Fy(kk) {
                            let {
                              basePath: Fk,
                              embedded: Ik = !1
                            } = kk;
                            const {
                              pageSlug: Tk = ""
                            } = (0, lk.A)(), qk = (0, lk.q)(), Lk = (0, lk.u)(), tk = (Zk = Tk, Uk.find((kk => kk.slug === Zk)));
                            var Zk;
                            const [jk, wk] = function() {
                              const [kk, Fk] = (0, Xk.useState)((() => {
                                const kk = Bi.j.getItem(di);
                                return "dark" === kk || "light" === kk ? kk : null
                              })), [Ik, Tk] = (0, Xk.useState)(Yi.matches ? "light" : "dark");
                              return (0, Xk.useEffect)((() => {
                                const kk = () => {
                                  Tk(Yi.matches ? "light" : "dark")
                                };
                                return Yi.addEventListener("change", kk), () => {
                                  Yi.removeEventListener("change", kk)
                                }
                              }), []), [null !== kk && void 0 !== kk ? kk : Ik, kk => {
                                Bi.j.setItem(di, kk), Fk(kk)
                              }]
                            }(), [Jk, xk] = (0, Xk.useState)(null), [Pk, Kk] = (0, Xk.useState)(!1), [Qk, sk] = (0, Xk.useState)(!1), [Vk, Sk] = (0, Xk.useState)([]), vk = function(kk, Fk) {
                              const [Ik, Tk] = (0, Xk.useState)("");
                              return (0, Xk.useEffect)((() => {
                                if (!Fk) return;
                                let Ik = 0;
                                const Xk = () => {
                                    var Xk, ik;
                                    Ik = 0;
                                    const yk = Fk.getBoundingClientRect().top + ri;
                                    let lk = null !== (Xk = null === (ik = kk[0]) || void 0 === ik ? void 0 : ik.anchor) && void 0 !== Xk ? Xk : "";
                                    for (const Fk of kk) {
                                      const kk = document.getElementById(Fk.anchor);
                                      kk && kk.getBoundingClientRect().top <= yk && (lk = Fk.anchor)
                                    }
                                    Fk.scrollTop + Fk.clientHeight >= Fk.scrollHeight - 2 && Fk.scrollTop > 0 && kk.length > 0 && (lk = kk[kk.length - 1].anchor), Tk(lk)
                                  },
                                  ik = () => {
                                    Ik || (Ik = requestAnimationFrame(Xk))
                                  };
                                return Xk(), Fk.addEventListener("scroll", ik, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(Ik), Fk.removeEventListener("scroll", ik)
                                }
                              }), [kk, Fk]), Ik
                            }(Vk, Jk), Ek = "" === Tk && qk.hash ? function(kk) {
                              const Fk = (0, zk.s)(kk);
                              if (fk(Nk("welcome"), Fk)) return null;
                              const Ik = Object.hasOwn(dk, Fk) ? dk[Fk] : null;
                              if (Ik) return {
                                page: Nk(Ik.pageId),
                                anchor: Ik.anchor
                              };
                              const Xk = Nk("readme");
                              return fk(Xk, Fk) ? {
                                page: Xk,
                                anchor: Fk
                              } : Bk(`#${Fk}`)
                            }(qk.hash) : null;
                            (0, Xk.useEffect)((() => (ak.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              ak.d.set({
                                musicOnFromPage: !0
                              }), JX()
                            })), []), (0, Xk.useEffect)((() => {
                              const kk = kk => {
                                const Fk = kk.target;
                                if (Fk.closest(".DocsTextDialog")) return;
                                const Ik = Fk.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(Fk.tagName);
                                "k" === kk.key && (kk.metaKey || kk.ctrlKey) || "/" === kk.key && !Ik ? (kk.preventDefault(), sk(!0)) : "Escape" === kk.key && Kk(!1)
                              };
                              return window.addEventListener("keydown", kk), () => {
                                window.removeEventListener("keydown", kk)
                              }
                            }), []);
                            const Ok = (0, Xk.useRef)(null);
                            (0, Xk.useLayoutEffect)((() => {
                              var kk, Fk;
                              if (!Jk) return;
                              const Ik = Ok.current === qk.pathname;
                              Ok.current = qk.pathname;
                              const Xk = (0, zk.s)(qk.hash),
                                Tk = Xk ? document.getElementById(Xk) : null;
                              if (null === (kk = Jk.querySelector(".DocsTargeted")) || void 0 === kk || kk.classList.remove("DocsTargeted"), null === Tk || void 0 === Tk || null === (Fk = Tk.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === Fk || Fk.classList.add("DocsTargeted"), Tk) {
                                var ik;
                                const kk = Tk.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (ik = Tk.closest(".DocsChangelogEntry")) && void 0 !== ik ? ik : Tk).scrollIntoView({
                                  block: kk ? "center" : "start",
                                  behavior: Ik ? "smooth" : "auto"
                                })
                              } else Ik || Jk.scrollTo({
                                top: 0
                              })
                            }), [Jk, qk.pathname, qk.hash, qk.key]);
                            const nk = (0, Xk.useCallback)((() => {
                                Kk(!1)
                              }), []),
                              Gk = (0, Xk.useCallback)((kk => {
                                Lk({
                                  hash: kk
                                })
                              }), [Lk]);
                            if (Ek) return (0, ek.jsx)(lk.d, {
                              replace: !0,
                              to: Yk(Fk, Ek.page, Ek.anchor)
                            });
                            if (!tk) return (0, ek.jsx)(lk.d, {
                              replace: !0,
                              to: Fk
                            });
                            const pk = Ik ? "div" : "main";
                            return (0, ek.jsx)(eF.Provider, {
                              value: Fk,
                              children: (0, ek.jsx)(wF.Provider, {
                                value: Jk,
                                children: (0, ek.jsxs)("div", {
                                  ref: xk,
                                  className: ik()("DocsSite", {
                                    Embedded: Ik,
                                    NavOpen: Pk
                                  }),
                                  "data-theme": jk,
                                  children: [(0, ek.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, ek.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Pk ? "Close menu" : "Open menu",
                                      "aria-expanded": Pk,
                                      onClick: () => {
                                        Kk(!Pk)
                                      },
                                      children: (0, ek.jsx)(Hk, {
                                        name: Pk ? "cross" : "menu"
                                      })
                                    }), (0, ek.jsxs)(yk.e, {
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
                                        sk(!0)
                                      },
                                      children: [(0, ek.jsx)(Hk, {
                                        name: "magnifying-glass"
                                      }), (0, ek.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, ek.jsxs)("kbd", {
                                        children: [Di ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, ek.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, ek.jsxs)("a", {
                                        href: mi,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, ek.jsx)(Hk, {
                                          name: "discord"
                                        }), (0, ek.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, ek.jsxs)("a", {
                                        href: gi,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, ek.jsx)(Hk, {
                                          name: "external-link"
                                        }), (0, ek.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !Ik && (0, ek.jsxs)(yk.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, ek.jsx)(Hk, {
                                          name: "play"
                                        }), (0, ek.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, ek.jsx)(Ai, {
                                        theme: jk,
                                        onChange: wk
                                      })]
                                    })]
                                  }), (0, ek.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, ek.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, ek.jsx)(Mi, {
                                        basePath: Fk,
                                        activePageId: tk.id,
                                        onNavigate: nk
                                      })
                                    }), (0, ek.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: nk
                                    }), (0, ek.jsxs)(pk, {
                                      className: "DocsMain",
                                      children: [(0, ek.jsx)(si, {
                                        page: tk,
                                        onTocChange: Sk
                                      }, tk.id), (0, ek.jsx)(ky, {
                                        basePath: Fk,
                                        pageId: tk.id
                                      })]
                                    }), (0, ek.jsx)("aside", {
                                      className: ik()("DocsToc", {
                                        Timeline: "changelog" === tk.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, ek.jsx)(oi, {
                                        isChangelog: "changelog" === tk.layout,
                                        toc: Vk,
                                        activeAnchor: vk,
                                        onNavigate: Gk
                                      })
                                    })]
                                  }), (0, ek.jsx)(fi, {}), Qk && (0, ek.jsx)(ci, {
                                    basePath: Fk,
                                    onClose: () => {
                                      sk(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4739: (kk, Fk, Ik) => {
                          Ik.d(Fk, {
                            A: () => Zk,
                            d: () => Xk,
                            h: () => yk,
                            l: () => Hk,
                            n: () => wk,
                            p: () => lk,
                            s: () => Tk,
                            t: () => ik,
                            u: () => ek,
                            w: () => jk
                          });
                          const Xk = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Tk(kk) {
                            try {
                              return decodeURIComponent(kk.slice(1))
                            } catch {
                              return kk.slice(1)
                            }
                          }

                          function ik(kk) {
                            return kk.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const yk = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Xk.source}`, "g");

                          function lk(kk, Fk) {
                            return 2 === kk.length ? Fk.replace(/^ (.*) $/, "$1") : Fk
                          }

                          function ak(kk) {
                            return "" === kk.trim()
                          }

                          function qk(kk) {
                            const Fk = [];
                            for (const Ik of kk.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Fk.length > 0 && Fk[Fk.length - 1].endsWith("\\") ? Fk[Fk.length - 1] += `|${Ik}` : Fk.push(Ik);
                            return Fk.map((kk => kk.trim().replaceAll("\\|", "|")))
                          }
                          const Lk = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function tk(kk) {
                            const Fk = [],
                              Ik = [{
                                indent: -1,
                                items: Fk
                              }];
                            let Xk = null;
                            for (const Tk of kk) {
                              const kk = Tk.match(Lk);
                              if (!kk) {
                                Xk && (Xk.text += ` ${Tk.trim()}`);
                                continue
                              }
                              const Fk = kk[1].replace(/\t/g, "  ").length;
                              for (; Fk <= Ik[Ik.length - 1].indent;) Ik.pop();
                              Xk = {
                                text: kk[3].trim(),
                                children: []
                              }, Ik[Ik.length - 1].items.push(Xk), Ik.push({
                                indent: Fk,
                                items: Xk.children
                              })
                            }
                            return Fk
                          }

                          function Zk(kk) {
                            const Fk = kk.replace(/\r\n/g, "\n").split("\n"),
                              Ik = [];
                            let Xk = 0;
                            for (; Xk < Fk.length;) {
                              const kk = Fk[Xk];
                              if (ak(kk)) {
                                Xk++;
                                continue
                              }
                              const Tk = kk.match(/^\s*```\s*(\w*)\s*$/);
                              if (Tk) {
                                const kk = [];
                                for (Xk++; Xk < Fk.length && !/^\s*```\s*$/.test(Fk[Xk]);) kk.push(Fk[Xk]), Xk++;
                                Xk++, Ik.push({
                                  kind: "code",
                                  lang: Tk[1] || "text",
                                  code: kk.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const yk = kk.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (yk) {
                                const kk = yk[2].trim();
                                Ik.push({
                                  kind: "heading",
                                  level: yk[1].length,
                                  text: kk,
                                  anchor: ik(kk)
                                }), Xk++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(kk)) {
                                Ik.push({
                                  kind: "rule"
                                }), Xk++;
                                continue
                              }
                              if (kk.trim().startsWith("|") && Xk + 1 < Fk.length && /^\s*\|[\s:|-]+\|\s*$/.test(Fk[Xk + 1])) {
                                const Tk = qk(kk),
                                  ik = [];
                                for (Xk += 2; Xk < Fk.length && Fk[Xk].trim().startsWith("|");) ik.push(qk(Fk[Xk])), Xk++;
                                Ik.push({
                                  kind: "table",
                                  header: Tk,
                                  rows: ik
                                });
                                continue
                              }
                              if (kk.startsWith(">")) {
                                const kk = [];
                                for (; Xk < Fk.length && Fk[Xk].startsWith(">");) kk.push(Fk[Xk].replace(/^>\s?/, "")), Xk++;
                                Ik.push({
                                  kind: "quote",
                                  blocks: Zk(kk.join("\n"))
                                });
                                continue
                              }
                              if (Lk.test(kk)) {
                                const Tk = [],
                                  ik = /^\s*\d+\./.test(kk);
                                for (; Xk < Fk.length && !ak(Fk[Xk]) && (Lk.test(Fk[Xk]) || /^\s+\S/.test(Fk[Xk]));) Tk.push(Fk[Xk]), Xk++;
                                Ik.push({
                                  kind: "list",
                                  ordered: ik,
                                  items: tk(Tk)
                                });
                                continue
                              }
                              const lk = [];
                              for (; Xk < Fk.length && !ak(Fk[Xk]) && !/^\s*```/.test(Fk[Xk]) && !/^#{1,6}\s/.test(Fk[Xk]) && !Fk[Xk].startsWith(">") && !Lk.test(Fk[Xk]) && (!Fk[Xk].trim().startsWith("|") || 0 !== lk.length);) lk.push(Fk[Xk].trim()), Xk++;
                              0 === lk.length && (lk.push(Fk[Xk].trim()), Xk++), Ik.push({
                                kind: "paragraph",
                                text: lk.join(" ")
                              })
                            }
                            return Ik
                          }

                          function jk(kk) {
                            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const Ik = Zk(kk);
                            let Xk = "";
                            const Tk = [],
                              ik = [],
                              yk = new Map;
                            for (const qk of Ik) {
                              if ("heading" === qk.kind) {
                                var lk;
                                const kk = (null !== (lk = yk.get(qk.anchor)) && void 0 !== lk ? lk : 0) + 1;
                                yk.set(qk.anchor, kk), kk > 1 && (qk.anchor = `${qk.anchor}-${kk}`)
                              }
                              if ("heading" === qk.kind && 1 === qk.level && !Xk) {
                                Xk = qk.text;
                                continue
                              }
                              if ("heading" === qk.kind && qk.level <= Fk) {
                                ik.push({
                                  heading: qk,
                                  blocks: []
                                });
                                continue
                              }
                              const kk = ik.at(-1);
                              kk ? kk.blocks.push(qk) : Tk.push(qk)
                            }
                            const ak = kk => {
                              for (;
                                "rule" === (null === (Fk = kk.at(-1)) || void 0 === Fk ? void 0 : Fk.kind);) {
                                var Fk;
                                kk.pop()
                              }
                            };
                            ak(Tk);
                            for (const qk of ik) ak(qk.blocks);
                            return {
                              title: Xk,
                              intro: Tk,
                              sections: ik
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

                          function wk(kk) {
                            return kk.flatMap((kk => "code" === kk.kind ? [kk] : "quote" === kk.kind ? wk(kk.blocks) : []))
                          }

                          function Hk(kk) {
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
                                return kk.blocks.map(Hk).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4833: (kk, Fk, Ik) => {
                          Ik.d(Fk, {
                            b: () => lk
                          });
                          var Xk = Ik(58),
                            Tk = Ik(318),
                            ik = Ik(1864),
                            yk = Ik(1096);

                          function lk(kk) {
                            let {
                              text: Fk
                            } = kk;
                            const Ik = [];
                            let lk = "";
                            return (0, Tk.oc)(Fk).forEach(((kk, Fk) => {
                              if ("string" === typeof kk || !(0, ik.e)(kk.icon)) return void(lk += "string" === typeof kk ? kk : kk.icon);
                              const Tk = Math.max(0, lk.trimEnd().search(/\S{1,12}$/));
                              Ik.push((0, yk.jsxs)(Xk.Fragment, {
                                children: [lk.slice(0, Tk), (0, yk.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [lk.slice(Tk), (0, yk.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": kk.icon,
                                    children: (0, yk.jsx)(ik.d, {
                                      itemName: kk.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, Fk)), lk = ""
                            })), Ik.push(lk), (0, yk.jsx)(yk.Fragment, {
                              children: Ik
                            })
                          }
                        }, 4767: (kk, Fk, Ik) => {
                          Ik.d(Fk, {
                            d: () => xk,
                            b: () => Jk
                          });
                          var Xk = Ik(58),
                            Tk = Ik(1402),
                            ik = Ik(1849),
                            yk = Ik(4775),
                            lk = Ik(1096);
                          const ak = (0, Xk.memo)((function(kk) {
                            let {
                              initialParameters: Fk
                            } = kk;
                            const Ik = (0, Xk.useRef)(null),
                              Tk = (0, Xk.useRef)(null),
                              ak = (0, Xk.useRef)(0),
                              qk = (0, Xk.useRef)(null),
                              Lk = Fk.description,
                              tk = Fk.GI,
                              {
                                scale: Zk,
                                rotation: jk
                              } = null !== Fk && void 0 !== Fk ? Fk : {},
                              ek = (0, yk.g)();
                            return (0, Xk.useEffect)((() => {
                              const kk = ek.onFrame((() => {
                                const kk = ek.getState();
                                if (!kk.isActive || !Ik.current || !Tk.current) return;
                                const Fk = kk.state;
                                if (Ik.current.value = Fk.progress, Fk.clickCount > ak.current) {
                                  ak.current = Fk.clickCount;
                                  const kk = Tk.current;
                                  kk.classList.add("pulse"), qk.current = setTimeout((() => {
                                    kk.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(qk.current), kk()
                              }
                            }), [ek]), (0, lk.jsx)(lk.Fragment, {
                              children: (0, lk.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Zk && {
                                    "--scale": Zk
                                  },
                                  ...null !== jk && {
                                    "--rotation": `${jk}deg`
                                  }
                                },
                                children: [(0, lk.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: Ik
                                }), (0, lk.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Tk,
                                  children: (0, lk.jsx)(ik.c, {
                                    text: [{
                                      icon: tk
                                    }]
                                  })
                                }), (0, lk.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, lk.jsx)(ik.c, {
                                    text: Lk
                                  })
                                })]
                              })
                            })
                          }));
                          var qk = Ik(1055),
                            Lk = Ik.n(qk);
                          const tk = 2 * Math.PI * 90,
                            Zk = (0, Xk.memo)((function(kk) {
                              let {
                                initialParameters: Fk
                              } = kk;
                              const Ik = (0, Xk.useRef)(null),
                                Tk = (0, Xk.useRef)(null),
                                ak = (0, Xk.useRef)(null),
                                qk = Fk.label,
                                Zk = Fk.icon,
                                jk = Fk.bI,
                                {
                                  scale: ek,
                                  rotation: wk,
                                  RI: Hk
                                } = null !== Fk && void 0 !== Fk ? Fk : {},
                                Jk = (0, yk.g)();
                              return (0, Xk.useEffect)((() => {
                                const kk = Jk.onFrame((() => {
                                  var kk, Fk;
                                  const Xk = Jk.getState();
                                  if (!Xk.isActive || !Tk.current) return;
                                  const ik = Xk.state,
                                    yk = null !== (kk = ik.timeRemaining) && void 0 !== kk ? kk : 0,
                                    lk = null !== (Fk = ik.uI) && void 0 !== Fk ? Fk : 1,
                                    qk = tk * (1 - yk / lk);
                                  Tk.current.style.strokeDashoffset = `${qk}`, Ik.current && (Ik.current.style.opacity = yk > 0 ? "1" : "0"), ak.current && jk && (ak.current.textContent = `${(yk/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  kk()
                                }
                              }), [Jk, jk]), (0, lk.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: Ik,
                                style: {
                                  ...null !== ek && {
                                    "--scale": ek
                                  },
                                  ...null !== wk && {
                                    "--rotation": `${wk}deg`
                                  }
                                },
                                children: [(0, lk.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, lk.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, lk.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, lk.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: tk,
                                      ref: Tk
                                    })]
                                  }), (0, lk.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, lk.jsx)(ik.c, {
                                      text: [{
                                        icon: Zk
                                      }],
                                      className: Lk()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: Hk
                                      })
                                    })
                                  })]
                                }), (0, lk.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, lk.jsx)(ik.c, {
                                    text: qk,
                                    className: "QTETimedClickLabelText"
                                  }), jk && (0, lk.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: ak
                                  })]
                                })]
                              })
                            })),
                            jk = (0, Xk.memo)((function(kk) {
                              let {
                                initialParameters: Fk
                              } = kk;
                              const Ik = (0, Xk.useRef)(null),
                                Tk = (0, Xk.useRef)(null),
                                ak = (0, Xk.useRef)(null),
                                qk = (0, Xk.useRef)(!1),
                                Lk = Fk.description,
                                tk = null === Fk || void 0 === Fk ? void 0 : Fk.icon,
                                Zk = (0, yk.g)();
                              return (0, Xk.useEffect)((() => {
                                const kk = Zk.onFrame((() => {
                                  const kk = Zk.getState();
                                  if (!kk.isActive) return;
                                  const Fk = kk.state;
                                  if (Ik.current) {
                                    const kk = 100 * (Fk.catchZonePosition - Fk.CI / 2);
                                    Ik.current.style.left = `${kk}%`, Ik.current.style.width = 100 * Fk.CI + "%", Fk.isCatching !== qk.current && (qk.current = Fk.isCatching, Fk.isCatching ? Ik.current.classList.add("catching") : Ik.current.classList.remove("catching"))
                                  }
                                  Tk.current && (Tk.current.style.left = 100 * Fk.moverPosition + "%"), ak.current && (ak.current.value = Fk.progress)
                                }));
                                return () => {
                                  kk()
                                }
                              }), [Zk]), (0, lk.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, lk.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, lk.jsx)(ik.c, {
                                    text: Lk
                                  })
                                }), (0, lk.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: ak
                                }), (0, lk.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, lk.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: Ik
                                  }), (0, lk.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Tk,
                                    children: (0, lk.jsx)("span", {
                                      children: tk && (0, lk.jsx)(ik.c, {
                                        text: [{
                                          icon: tk,
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
                          var ek = Ik(628);
                          const wk = (0, Xk.memo)((function(kk) {
                              let {
                                initialParameters: Fk
                              } = kk;
                              const Ik = (0, Xk.useRef)(null),
                                Tk = Fk.label,
                                ak = Fk.YI,
                                {
                                  icon: qk,
                                  scale: Lk,
                                  rotation: tk
                                } = null !== Fk && void 0 !== Fk ? Fk : {},
                                Zk = 100 * (.5 - ak / 2),
                                jk = 100 * ak,
                                wk = (0, yk.g)();
                              return (0, Xk.useEffect)((() => {
                                const kk = wk.onFrame((() => {
                                  const kk = wk.getState();
                                  if (!kk.isActive || !Ik.current) return;
                                  const Fk = kk.state;
                                  Ik.current.style.left = 100 * Fk.markerPosition + "%"
                                }));
                                return () => {
                                  kk()
                                }
                              }), [wk]), (0, lk.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, ek.Q)(Lk) && {
                                    "--scale": Lk
                                  },
                                  ...!(0, ek.Q)(tk) && {
                                    "--rotation": `${tk}deg`
                                  }
                                },
                                children: [qk && (0, lk.jsx)(ik.c, {
                                  text: [{
                                    icon: qk
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, lk.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, lk.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Zk}%`,
                                      width: `${jk}%`
                                    }
                                  }), (0, lk.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: Ik
                                  })]
                                }), (0, lk.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, lk.jsx)(ik.c, {
                                    text: Tk
                                  })
                                })]
                              })
                            })),
                            Hk = (0, Xk.memo)((function(kk) {
                              let {
                                initialParameters: Fk
                              } = kk;
                              const Ik = (0, Xk.useRef)(null),
                                [Tk, ak] = (0, Xk.useState)((() => new Array(Fk.gI).fill("pending"))),
                                [qk, Lk] = (0, Xk.useState)((() => {
                                  const kk = Fk.rI;
                                  return (0, ek.Q)(kk) || kk <= 0 ? [] : new Array(kk).fill("pending")
                                })),
                                tk = Fk.label,
                                {
                                  icon: Zk
                                } = Fk,
                                jk = (0, Xk.useRef)(0),
                                wk = (0, Xk.useRef)(0),
                                Hk = (0, Xk.useRef)([]),
                                Jk = (0, yk.g)();
                              return (0, Xk.useEffect)((() => {
                                const kk = Jk.onFrame((() => {
                                  const kk = Jk.getState();
                                  if (!kk.isActive || !Ik.current) return;
                                  const Fk = kk.state,
                                    Xk = 30 + 60 * Fk.outerCircleProgress;
                                  if (Ik.current.setAttribute("r", String(Xk)), !0 === Fk.lastClickResult && Fk.successes > jk.current) {
                                    Ik.current.classList.remove("QTERhythmClickOuterCircle--miss"), Ik.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const kk = setTimeout((() => {
                                      var kk;
                                      null === (kk = Ik.current) || void 0 === kk || kk.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    Hk.current.push(kk)
                                  } else if (!1 === Fk.lastClickResult && Fk.misses > wk.current) {
                                    Ik.current.classList.remove("QTERhythmClickOuterCircle--hit"), Ik.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const kk = setTimeout((() => {
                                      var kk;
                                      null === (kk = Ik.current) || void 0 === kk || kk.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    Hk.current.push(kk)
                                  }
                                  Fk.successes === jk.current && Fk.misses === wk.current || (jk.current = Fk.successes, wk.current = Fk.misses, ak((kk => {
                                    const Ik = [...kk];
                                    for (let Xk = 0; Xk < Fk.gI; Xk++) Ik[Xk] = Xk < Fk.successes ? "success" : "pending";
                                    return Ik
                                  })), Lk((kk => {
                                    if (0 === kk.length) return kk;
                                    const Ik = [...kk];
                                    for (let Xk = 0; Xk < Ik.length; Xk++) Ik[Xk] = Xk < Fk.misses ? "miss" : "pending";
                                    return Ik
                                  })))
                                }));
                                return () => {
                                  kk();
                                  for (const kk of Hk.current) clearTimeout(kk);
                                  Hk.current = []
                                }
                              }), [Jk]), (0, lk.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, lk.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Tk.map(((kk, Fk) => (0, lk.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === kk ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, Fk)))
                                }), (0, lk.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, lk.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, lk.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, lk.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: Ik
                                    })]
                                  }), Zk && (0, lk.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, lk.jsx)(ik.c, {
                                      text: [{
                                        icon: Zk
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), qk.length > 0 && (0, lk.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: qk.map(((kk, Fk) => (0, lk.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === kk ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, Fk)))
                                }), (0, lk.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, lk.jsx)(ik.c, {
                                    text: tk
                                  })
                                })]
                              })
                            }));

                          function Jk(kk) {
                            let {
                              qte: Fk
                            } = kk;
                            switch (Fk.type) {
                              case "progressBar":
                                return (0, lk.jsx)(ak, {
                                  initialParameters: Fk.parameters
                                });
                              case "timedClick":
                                return (0, lk.jsx)(Zk, {
                                  initialParameters: Fk.parameters
                                });
                              case "gravityBar":
                                return (0, lk.jsx)(jk, {
                                  initialParameters: Fk.parameters
                                });
                              case "precisionBar":
                                return (0, lk.jsx)(wk, {
                                  initialParameters: Fk.parameters
                                });
                              case "rhythmClick":
                                return (0, lk.jsx)(Hk, {
                                  initialParameters: Fk.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const xk = (0, Xk.memo)((function() {
                            const [kk, Fk] = (0, Xk.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Tk.d)("qteStateUpdated", (kk => {
                              Fk(kk)
                            })), kk.isActive && kk.type ? (0, lk.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, lk.jsx)(Jk, {
                                qte: kk
                              })
                            }) : null
                          }))
                        }, 4775: (kk, Fk, Ik) => {
                          Ik.d(Fk, {
                            d: () => lk,
                            g: () => ak
                          });
                          var Xk = Ik(58),
                            Tk = Ik(1276),
                            ik = Ik(4784);
                          const yk = {
                              getState: () => ik.b.getCurrentState(),
                              onFrame: Tk.u
                            },
                            lk = (0, Xk.createContext)(yk);

                          function ak() {
                            return (0, Xk.useContext)(lk)
                          }
                        }, 4837: (kk, Fk, Ik) => {
                          Ik.d(Fk, {
                            d: () => bk,
                            e: () => uk
                          });
                          var Xk = Ik(4843),
                            Tk = Ik(318);
                          const ik = 120,
                            yk = 260,
                            lk = 1.15,
                            ak = 1.2,
                            qk = 2,
                            Lk = 1.08,
                            tk = .8,
                            Zk = .95,
                            jk = 8,
                            ek = "[\"')\\]\u300d\u300f\uff09]*",
                            wk = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ek}$`),
                            Hk = new RegExp(`[?\uff1f]${ek}$`),
                            Jk = new RegExp(`[!\uff01]${ek}$`),
                            xk = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Pk = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            Kk = new RegExp(`[${Pk}]`),
                            Qk = new RegExp(`[${Pk}]|[^${Pk}]+`, "g"),
                            sk = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Vk(kk) {
                            let Fk = 2166136261;
                            for (let Ik = 0; Ik < kk.length; Ik++) Fk ^= kk.charCodeAt(Ik), Fk = Math.imul(Fk, 16777619);
                            return (Fk >>> 0) / 4294967295 * 2 - 1
                          }

                          function zk(kk) {
                            var Fk;
                            if (Kk.test(kk)) return 1;
                            const Ik = kk.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Xk = Ik.replace(/[^0-9]/g, "");
                            if (Xk.length > 0 && !/\p{L}/u.test(Ik)) return Math.min(Xk.length, 4);
                            const Tk = null !== (Fk = Ik.match(sk)) && void 0 !== Fk ? Fk : [];
                            if (0 === Tk.length) {
                              var ik, yk;
                              const kk = null !== (ik = null === (yk = Ik.match(/\p{L}/gu)) || void 0 === yk ? void 0 : yk.length) && void 0 !== ik ? ik : 0;
                              return 0 === kk ? 0 : Math.min(Math.max(1, Math.round(kk / 2.5)), jk)
                            }
                            const lk = Ik.replace(/[^\p{L}]/gu, ""),
                              ak = Tk.length > 1 && "e" === Tk.at(-1) && lk.endsWith("e") && !lk.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(kk.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Tk.length - (ak ? 1 : 0), jk)
                          }

                          function Sk(kk) {
                            return kk.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function vk(kk) {
                            const Fk = kk.replace(/[^\p{L}]/gu, "");
                            return Fk.length >= 2 && Fk === Fk.toUpperCase() && Fk !== Fk.toLowerCase()
                          }

                          function Ek(kk, Fk) {
                            var Ik;
                            const jk = Fk && (0, Xk.k)(Fk),
                              ek = null !== (Ik = null === jk || void 0 === jk ? void 0 : jk.syllableMs) && void 0 !== Ik ? Ik : Xk.b,
                              Pk = function(kk) {
                                const Fk = [];
                                for (const Xk of (0, Tk.oc)(kk))
                                  if ("string" === typeof Xk)
                                    for (const kk of Xk.split(/(\s+)/)) {
                                      if ("" === kk) continue;
                                      if (/^\s+$/.test(kk)) {
                                        Fk.push({
                                          kind: "space",
                                          text: kk
                                        });
                                        continue
                                      }
                                      if (!Kk.test(kk)) {
                                        Fk.push({
                                          kind: "word",
                                          text: kk,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Xk = !0;
                                      for (const Tk of null !== (Ik = kk.match(Qk)) && void 0 !== Ik ? Ik : []) {
                                        var Ik;
                                        const kk = Fk.at(-1);
                                        Xk || "word" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || Kk.test(Tk) || /[\p{L}\p{N}]/u.test(Tk) ? (Xk || Fk.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), Fk.push({
                                          kind: "word",
                                          text: Tk,
                                          delayMs: 0
                                        }), Xk = !1) : kk.text += Tk
                                      }
                                    } else Fk.push({
                                      kind: "icon",
                                      text: Xk.icon,
                                      delayMs: 0
                                    });
                                return Fk
                              }(kk),
                              sk = [];
                            let Ek = [];
                            for (const Xk of Pk) "space" !== Xk.kind && (Ek.push(Xk), wk.test(Xk.text) && (sk.push(Ek), Ek = []));
                            sk.push(Ek);
                            const Ok = [];
                            let nk = 0;
                            for (const Xk of sk) {
                              var Gk, pk;
                              const kk = null !== (Gk = null === (pk = Xk.at(-1)) || void 0 === pk ? void 0 : pk.text) && void 0 !== Gk ? Gk : "",
                                Fk = Hk.test(kk),
                                Ik = Jk.test(kk),
                                Tk = Xk.map((kk => "word" === kk.kind ? zk(kk.text) : 1)),
                                Pk = Tk.findLastIndex((kk => kk > 0));
                              for (const [Hk, Jk] of Xk.entries()) {
                                const kk = "word" === Jk.kind,
                                  Xk = Tk[Hk];
                                Jk.delayMs = nk;
                                for (let Tk = 0; jk && Tk < Xk; Tk++) {
                                  const {
                                    intonation: ik
                                  } = jk;
                                  let yk = Pk > 0 ? -ik.declineSemitones * (Hk / Pk) : 0;
                                  yk += Vk(`${Sk(Jk.text)}|${Tk}`) * ik.variationSemitones;
                                  const wk = Math.min(1, ik.variationSemitones);
                                  let xk = jk.glideSemitones,
                                    Kk = 1;
                                  Ik && (yk += ik.exclaimLiftSemitones, Kk *= lk), Fk && Hk === Pk && (yk += ik.questionRiseSemitones * (Xk > 1 ? .5 + .5 * Tk / (Xk - 1) : 1), Tk === Xk - 1 && (xk = Math.abs(xk) + ik.questionRiseSemitones / 2)), kk && vk(Jk.text) && (yk += qk * wk, Kk *= ak), Xk > 1 && 0 === Tk && (yk += tk * wk, Kk *= Lk), Ok.push({
                                    atMs: nk + Tk * ek,
                                    semitones: yk,
                                    glideSemitones: xk,
                                    durationMs: Tk < Xk - 1 ? Math.min(jk.durationMs, ek * Zk) : jk.durationMs,
                                    level: Kk
                                  })
                                }
                                nk += Xk * ek + (wk.test(Jk.text) ? yk : xk.test(Jk.text) ? ik : 0)
                              }
                            }
                            return {
                              pieces: Pk.map((kk => "space" === kk.kind ? kk : "icon" === kk.kind ? {
                                kind: "icon",
                                icon: kk.text,
                                delayMs: kk.delayMs
                              } : {
                                kind: "word",
                                text: kk.text,
                                delayMs: kk.delayMs
                              })),
                              blips: Ok
                            }
                          }
                          var Ok = Ik(1179),
                            nk = Ik(1241),
                            Gk = Ik(1881);

                          function pk(kk) {
                            if ("string" === typeof kk) return kk;
                            const Fk = nk.d.get().getCurrentLanguageCode();
                            return (0, Ok.q)(Fk, kk.translationKey, (0, Ok.m)(kk.params, Gk.d.shown))
                          }

                          function uk(kk) {
                            const Fk = void 0 === kk.voice ? null : (0, Xk.n)(kk.voice),
                              Ik = Fk && (0, Xk.k)(Fk);
                            return {
                              plan: Ek(pk(kk.line), Ik),
                              synth: Ik
                            }
                          }

                          function bk(kk) {
                            const Fk = [];
                            let Ik = [];
                            for (const [Tk, ik] of kk.entries()) {
                              var Xk;
                              "space" === ik.kind && (" " !== ik.text || "icon" !== (null === (Xk = kk[Tk + 1]) || void 0 === Xk ? void 0 : Xk.kind)) ? (Ik.length > 0 && Fk.push(Ik), Fk.push([ik]), Ik = []) : Ik.push(ik)
                            }
                            return Ik.length > 0 && Fk.push(Ik), Fk
                          }
                        }, 4850: (kk, Fk, Ik) => {
                          Ik.d(Fk, {
                            e: () => Lk,
                            i: () => tk
                          });
                          var Xk = Ik(4857),
                            Tk = Ik(25);
                          const ik = .25,
                            yk = .85,
                            lk = .02,
                            ak = .01;

                          function qk(kk, Fk, Ik, Xk, Tk, ik, lk) {
                            const {
                              waveform: ak,
                              pitchHz: qk,
                              attackMs: Lk,
                              releaseMs: tk,
                              lowpassHz: Zk
                            } = Ik, jk = Tk + Xk.durationMs / 1e3, ek = qk * 2 ** (Xk.semitones / 12), wk = kk.createOscillator();
                            wk.type = ak, wk.frequency.setValueAtTime(ek, Tk), wk.frequency.exponentialRampToValueAtTime(ek * 2 ** (Xk.glideSemitones / 12), jk);
                            const Hk = Tk + Math.min(Lk, Xk.durationMs) / 1e3,
                              Jk = kk.createGain();
                            Jk.gain.setValueAtTime(0, Tk), Jk.gain.linearRampToValueAtTime(ik, Hk), Jk.gain.linearRampToValueAtTime(ik * yk, Math.max(Hk, jk - tk / 1e3)), Jk.gain.linearRampToValueAtTime(0, jk);
                            const xk = [wk];
                            if (null !== Zk) {
                              const Fk = kk.createBiquadFilter();
                              Fk.type = "lowpass", Fk.frequency.value = Zk, xk.push(Fk)
                            }
                            xk.push(Jk, Fk);
                            for (let yk = 1; yk < xk.length; yk++) xk[yk - 1].connect(xk[yk]);
                            return wk.onended = () => {
                              for (const kk of xk.slice(0, -1)) kk.disconnect();
                              lk()
                            }, wk.start(Tk), wk.stop(jk), wk
                          }

                          function Lk(kk, Fk, Ik, Xk, Tk, yk) {
                            if (0 === Xk.length) return yk(), () => {};
                            const Lk = ik * Ik.volume * Tk,
                              tk = kk.createGain();
                            tk.connect(Fk);
                            const Zk = kk.currentTime + lk,
                              jk = new Set;
                            for (const ik of Xk) {
                              const Fk = qk(kk, tk, Ik, ik, Zk + ik.atMs / 1e3, Lk * ik.level, (() => {
                                jk.delete(Fk), 0 === jk.size && (tk.disconnect(), yk())
                              }));
                              jk.add(Fk)
                            }
                            return () => {
                              const Fk = kk.currentTime;
                              tk.gain.setTargetAtTime(0, Fk, ak);
                              for (const kk of jk) try {
                                kk.stop(Fk + 5 * ak)
                              } catch {}
                            }
                          }

                          function tk(kk, Fk) {
                            var Ik;
                            const ik = Xk.Howler.ctx,
                              yk = Xk.Howler.masterGain;
                            if (!ik || !yk || !Tk.d.get("soundOnFromAd")) return () => {};
                            const lk = Xk.Howler;
                            return null === (Ik = lk._autoResume) || void 0 === Ik || Ik.call(lk), Lk(ik, yk, kk, Fk, Tk.d.get("soundVolume"), (() => {
                              var kk;
                              null === (kk = lk._autoSuspend) || void 0 === kk || kk.call(lk)
                            }))
                          }
                        }, 4857: (kk, Fk, Ik) => {
                          Ik.r(Fk), Ik.d(Fk, {
                            Howl: () => Tk.Howl,
                            Howler: () => Tk.Howler,
                            musicOutput: () => Hk,
                            readyAudioContext: () => Jk
                          });
                          var Xk, Tk = Ik(4863),
                            ik = Ik(3378),
                            yk = Ik(4636);
                          const lk = Tk.Howler;

                          function ak() {
                            var kk, Fk;
                            if (lk.ctx || !lk.usingWebAudio || "undefined" === typeof AudioContext || !(0, yk.h)()) return;
                            const Ik = navigator.audioSession;
                            let Xk;
                            "auto" === (null === Ik || void 0 === Ik ? void 0 : Ik.type) && (Ik.type = "ambient");
                            try {
                              Xk = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Tk = Xk.createGain();
                            Tk.gain.setValueAtTime(lk._muted ? 0 : null !== (kk = lk._volume) && void 0 !== kk ? kk : 1, Xk.currentTime), Tk.connect(Xk.destination), lk.ctx = Xk, lk.masterGain = Tk, null === (Fk = lk._setup) || void 0 === Fk || Fk.call(lk)
                          }
                          lk._mobileUnloaded = !0;
                          const qk = lk.volume.bind(Tk.Howler);
                          lk.volume = function() {
                            return ak(), qk(...arguments)
                          };
                          const Lk = lk.mute.bind(Tk.Howler);
                          lk.mute = kk => (ak(), Lk(kk));
                          const tk = Tk.Howl.prototype,
                            Zk = tk.init;

                          function jk() {
                            for (; lk._html5AudioPool.length < lk.html5PoolSize;) {
                              const kk = new Audio;
                              kk._unlocked = !0, lk._releaseHtml5Audio(kk)
                            }
                            for (const Fk of lk._howls)
                              if (!Fk._webAudio)
                                for (const Ik of Fk._getSoundIds()) {
                                  var kk;
                                  const Xk = null === (kk = Fk._soundById(Ik)) || void 0 === kk ? void 0 : kk._node;
                                  Xk && !Xk._unlocked && (Xk._unlocked = !0, Xk.load())
                                }
                          }
                          tk.init = function(kk) {
                            return ak(), Zk.call(this, kk)
                          }, (0, yk.h)() && (lk._unlockAudio = () => {
                            const kk = lk.ctx;
                            if (lk._audioUnlocked || !kk) return;
                            lk.autoUnlock = !1;
                            const Fk = kk.createBuffer(1, 1, 22050);
                            lk._scratchBuffer = Fk;
                            const Ik = new AbortController;
                            let Xk = "afterPaint";
                            const Tk = () => {
                                var Xk;
                                if (lk._audioUnlocked) return;
                                null === (Xk = lk._autoResume) || void 0 === Xk || Xk.call(lk);
                                const Tk = kk.createBufferSource();
                                Tk.buffer = Fk, Tk.connect(kk.destination), Tk.start(0), kk.resume().catch((() => {})), Tk.onended = () => {
                                  Tk.disconnect(0), lk._audioUnlocked = !0, Ik.abort();
                                  for (const kk of lk._howls) kk._emit("unlock")
                                }
                              },
                              ak = () => {
                                jk(), Tk()
                              },
                              qk = Fk => {
                                if (jk(), "inTap" === Xk) {
                                  if ("running" === kk.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Tk()
                                } else "afterPaint" === Xk && (Xk = "queued", (0, ik.b)(Fk.timeStamp, (() => {
                                  Xk = "inTap", Tk()
                                })))
                              };
                            for (const ik of ["touchstart", "touchend"]) document.addEventListener(ik, ak, {
                              capture: !0,
                              signal: Ik.signal
                            });
                            for (const ik of yk.b) document.addEventListener(ik, qk, {
                              capture: !0,
                              signal: Ik.signal
                            })
                          });
                          let ek = 0;
                          const wk = null === (Xk = lk._autoSuspend) || void 0 === Xk ? void 0 : Xk.bind(Tk.Howler);

                          function Hk() {
                            Jk();
                            const {
                              ctx: kk,
                              masterGain: Fk
                            } = lk;
                            return kk && Fk ? {
                              ctx: kk,
                              destination: Fk,
                              holdAwake: kk => {
                                var Fk, Ik;
                                (ek += kk ? 1 : -1, kk) ? null === (Fk = lk._autoResume) || void 0 === Fk || Fk.call(lk): null === (Ik = lk._autoSuspend) || void 0 === Ik || Ik.call(lk)
                              },
                              wake: () => {
                                var Fk;
                                "running" !== kk.state && (null === (Fk = lk._autoResume) || void 0 === Fk || Fk.call(lk), kk.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function Jk() {
                            var kk;
                            (lk.volume(), lk.ctx && lk.autoUnlock) && (null === (kk = lk._unlockAudio) || void 0 === kk || kk.call(lk))
                          }
                          wk && (lk._autoSuspend = () => ek > 0 ? Tk.Howler : wk())
                        }, 4866: (kk, Fk, Ik) => {
                          function Xk(kk) {
                            return {
                              notAfter: kk
                            }
                          }
                          Ik.d(Fk, {
                            b: () => ak,
                            e: () => qk,
                            g: () => lk,
                            j: () => Xk,
                            l: () => Tk,
                            m: () => ik,
                            o: () => yk,
                            s: () => Lk,
                            u: () => tk
                          });
                          const Tk = Xk("\\w$."),
                            ik = Xk("\\w.,");

                          function yk(kk) {
                            return Fk => ak(Fk, kk)
                          }

                          function lk(kk) {
                            return Fk => !kk.test(Fk.input.slice(0, Fk.index))
                          }

                          function ak(kk, Fk) {
                            return kk.index > 0 && new RegExp(`[${Fk}]`).test(kk.input[kk.index - 1])
                          }

                          function qk(kk, Fk, Ik) {
                            return function(kk) {
                              return void 0 !== kk && "function" !== typeof kk
                            }(Ik) ? function(kk, Fk, Ik) {
                              const Xk = Fk.flags.replace(/[gy]/g, ""),
                                Tk = new RegExp(`[^${Ik}](?:${Fk.source})`, `${Xk}g`),
                                ik = [],
                                yk = Ik => {
                                  const Xk = Ik.index + Ik[0].length;
                                  return ("" === Ik[0] ? Zk(kk, Fk, Xk) : Xk) - 1
                                },
                                lk = new RegExp(`(?:${Fk.source})`, `${Xk}y`).exec(kk);
                              if (lk) {
                                if (ik.push(lk), !Fk.global) return ik;
                                Tk.lastIndex = yk(lk)
                              }
                              for (let ak = Tk.exec(kk); ak; ak = Tk.exec(kk)) {
                                const Ik = Zk(kk, Fk, ak.index) - ak.index;
                                if (ak[0] = ak[0].slice(Ik), ak.index += Ik, ik.push(ak), !Fk.global) break;
                                Tk.lastIndex = yk(ak)
                              }
                              return ik
                            }(kk, Fk, Ik.notAfter) : function(kk, Fk, Ik) {
                              const Xk = new RegExp(Fk.source, `${Fk.flags.replace(/[gy]/g,"")}g`),
                                Tk = [];
                              for (let ik = Xk.exec(kk); ik; ik = Xk.exec(kk))
                                if (!Ik || Ik(ik)) {
                                  if (Tk.push(ik), !Fk.global) break;
                                  "" === ik[0] && (Xk.lastIndex = Zk(kk, Fk, Xk.lastIndex))
                                } else Xk.lastIndex = Zk(kk, Fk, ik.index);
                              return Tk
                            }(kk, Fk, Ik)
                          }

                          function Lk(kk, Fk, Ik, Xk) {
                            let Tk = "",
                              ik = 0;
                            for (const yk of qk(kk, Fk, Ik)) Tk += kk.slice(ik, yk.index) + Xk(yk), ik = yk.index + yk[0].length;
                            return Tk + kk.slice(ik)
                          }

                          function tk(kk, Fk, Ik) {
                            const Xk = [];
                            let Tk = 0;
                            for (const ik of qk(kk, Fk, Ik)) Xk.push(kk.slice(Tk, ik.index)), Tk = ik.index + ik[0].length;
                            return [...Xk, kk.slice(Tk)]
                          }

                          function Zk(kk, Fk, Ik) {
                            var Xk;
                            return Ik + (Fk.unicode && (null !== (Xk = kk.codePointAt(Ik)) && void 0 !== Xk ? Xk : 0) > 65535 ? 2 : 1)
                          }
                        }, 4821: (kk, Fk, Ik) => {
                          Ik.d(Fk, {
                            d: () => Tk,
                            f: () => ak,
                            g: () => ik,
                            h: () => yk,
                            k: () => lk,
                            o: () => Hk,
                            r: () => Lk,
                            t: () => tk,
                            w: () => wk,
                            z: () => jk
                          });
                          var Xk = Ik(1534);
                          const Tk = 24e3,
                            ik = "/docs/llms.txt",
                            yk = `${Xk.b}${ik}`,
                            lk = "/llms.txt",
                            ak = "/docs/llms-full.txt";

                          function qk(kk) {
                            return kk || "index"
                          }

                          function Lk(kk) {
                            return `/docs/${qk(kk)}.md`
                          }

                          function tk(kk, Fk) {
                            return `/docs/${qk(kk)}/${Fk+1}.md`
                          }
                          const Zk = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function jk(kk) {
                            const Fk = Zk.exec(kk);
                            return null === Fk ? null : {
                              name: Fk[1],
                              part: void 0 === Fk[2] ? null : Number(Fk[2])
                            }
                          }
                          const ek = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function wk(kk) {
                            const Fk = ek.exec(kk);
                            if (null === Fk) return null;
                            const [, Ik = "", Xk] = Fk;
                            return void 0 === Xk ? Lk(Ik) : tk(Ik, Number(Xk) - 1)
                          }

                          function Hk(kk) {
                            return `/docsHtml/${qk(kk)}.html`
                          }
                        }, 4843: (kk, Fk, Ik) => {
                          Ik.d(Fk, {
                            b: () => Tk,
                            d: () => Xk,
                            g: () => ik,
                            k: () => ak,
                            n: () => yk
                          });
                          const Xk = ["sine", "triangle", "square", "sawtooth"],
                            Tk = 55,
                            ik = {
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

                          function yk(kk) {
                            return "string" !== typeof kk ? kk : Object.hasOwn(ik, kk) ? ik[kk] : null
                          }

                          function lk(kk, Fk, Ik) {
                            return Math.min(Ik, Math.max(Fk, kk))
                          }

                          function ak(kk) {
                            const Fk = lk(kk.durationMs, 10, 500),
                              Ik = lk(kk.attackMs, 0, Fk),
                              {
                                intonation: Tk
                              } = kk;
                            return {
                              waveform: Xk.includes(kk.waveform) ? kk.waveform : "sine",
                              pitchHz: lk(kk.pitchHz, 20, 4e3),
                              glideSemitones: lk(kk.glideSemitones, -24, 24),
                              durationMs: Fk,
                              attackMs: Ik,
                              releaseMs: lk(kk.releaseMs, 0, Fk - Ik),
                              lowpassHz: null === kk.lowpassHz ? null : lk(kk.lowpassHz, 20, 2e4),
                              volume: lk(kk.volume, 0, 2),
                              intonation: {
                                variationSemitones: lk(Tk.variationSemitones, 0, 6),
                                declineSemitones: lk(Tk.declineSemitones, 0, 12),
                                questionRiseSemitones: lk(Tk.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: lk(Tk.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: lk(kk.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const kk in modules) Object.freeze(modules[kk]);