export const id = 76;
export const ids = [76, 92];
export const modules = {
    4648: (qq, Eq, gq) => {
      gq.d(Eq, {
        e: () => dq,
        g: () => jq
      });
      var Yq = gq(1018),
        lq = gq.n(Yq),
        Oq = gq(57),
        mq = gq(1183),
        xq = gq(4656),
        Aq = gq(1876),
        cq = gq(2383),
        uq = gq(4662),
        Bq = gq(1070);
      const Wq = new WeakMap;
      let Nq = 0;

      function aq(qq) {
        let Eq = Wq.get(qq);
        return void 0 === Eq && (Eq = Nq++, Wq.set(qq, Eq)), Eq
      }

      function Vq(qq) {
        let {
          piece: Eq
        } = qq;
        return "space" === Eq.kind ? (0, Bq.jsx)(Bq.Fragment, {
          children: Eq.text
        }) : (0, Bq.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${Eq.delayMs}ms`
          },
          children: (0, Bq.jsx)(xq.e, {
            text: "icon" === Eq.kind ? `[[${Eq.icon}]]` : Eq.text
          })
        })
      }

      function dq(qq) {
        let {
          display: Eq
        } = qq;
        const {
          selectedLanguage: gq
        } = (0, mq.v)(), Yq = (0, Oq.useMemo)((() => (0, uq.b)((0, uq.f)(Eq).plan.pieces)), [Eq, gq.code]);
        return (0, Bq.jsxs)("div", {
          className: lq()("Dialogue", {
            DialogueAnimateIn: !1 !== Eq.animateIn
          }),
          children: [Eq.speakerName && (0, Bq.jsx)(Aq.c, {
            text: Eq.speakerName,
            className: "DialogueSpeaker"
          }), (0, Bq.jsx)("p", {
            className: "DialogueLine",
            children: Yq.map(((qq, Eq) => 1 === qq.length && "space" === qq[0].kind ? qq[0].text : (0, Bq.jsx)("span", {
              className: "DialogueGlue",
              children: qq.map(((qq, Eq) => (0, Bq.jsx)(Vq, {
                piece: qq
              }, Eq)))
            }, Eq)))
          })]
        })
      }
      const jq = (0, Oq.memo)((function() {
        const qq = (0, cq.h)("dialogue");
        return (0, Bq.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: qq && (0, Bq.jsx)(dq, {
            display: qq
          }, aq(qq))
        })
      }))
    },
    4535: (qq, Eq, gq) => {
        gq.r(Eq), gq.d(Eq, {
          default: () => eO
        });
        var Yq = gq(57),
          lq = gq(1018),
          Oq = gq.n(lq),
          mq = gq(1505),
          xq = gq(1512),
          Aq = gq(24),
          cq = gq(71),
          uq = gq(4540),
          Bq = gq(4553),
          Wq = gq(4562),
          Nq = gq(4191),
          aq = gq(1070);
        const Vq = "/textures/docs/icons";

        function dq(qq) {
          let {
            name: Eq,
            isTinted: gq,
            className: Yq,
            style: lq
          } = qq;
          const mq = `${Vq}/${Eq}.png`;
          return gq ? (0, aq.jsxs)("span", {
            className: Oq()("DocsPixelIcon", "Tinted", Yq),
            "aria-hidden": "true",
            style: lq,
            children: [(0, aq.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${mq}")`,
                WebkitMaskImage: `url("${mq}")`
              }
            }), (0, aq.jsx)("img", {
              src: mq,
              alt: ""
            })]
          }) : (0, aq.jsx)("img", {
            className: Oq()("DocsPixelIcon", Yq),
            src: mq,
            alt: "",
            "aria-hidden": "true",
            style: lq
          })
        }
        const jq = 1500;

        function Hq() {
          const [qq, Eq] = (0, Yq.useState)(null);
          (0, Yq.useEffect)((() => {
            if (null === qq) return;
            const gq = setTimeout((() => {
              Eq(null)
            }), jq);
            return () => {
              clearTimeout(gq)
            }
          }), [qq]);
          return [qq, qq => {
            (0, Nq.d)(qq).then((() => {
              Eq({
                text: qq,
                failed: !1
              })
            }), (gq => {
              console.error("Could not copy to the clipboard", gq), Eq({
                text: qq,
                failed: !0
              })
            }))
          }]
        }

        function oq(qq) {
          let {
            text: Eq,
            label: gq,
            className: Yq
          } = qq;
          const [lq, mq] = Hq(), xq = !1 === (null === lq || void 0 === lq ? void 0 : lq.failed);
          return (0, aq.jsxs)("button", {
            type: "button",
            className: Oq()("DocsCopyButton", Yq, {
              Copied: xq
            }),
            title: `Copy ${Eq.length>40?"to clipboard":Eq}`,
            "aria-label": gq ? void 0 : `Copy ${Eq}`,
            onClick: qq => {
              qq.stopPropagation(), mq(Eq)
            },
            children: [(0, aq.jsx)(dq, {
              name: xq ? "check" : "copy"
            }), gq && (0, aq.jsx)("span", {
              children: xq ? "Copied" : null !== lq && void 0 !== lq && lq.failed ? "Copy failed" : gq
            })]
          })
        }
        uq.b.registerLanguage("javascript", Bq.e), uq.b.registerLanguage("typescript", Wq.b);
        const Pq = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Qq = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          yq = 24;

        function tq(qq) {
          let {
            code: Eq,
            lang: gq,
            compact: lq = !1
          } = qq;
          const mq = (0, Yq.useMemo)((() => function(qq, Eq) {
              const gq = Pq[Eq];
              return gq ? uq.b.highlight(qq, {
                language: gq
              }).value : qq.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(Eq, gq)), [Eq, gq]),
            xq = Eq.split("\n").length,
            Aq = !lq && xq > yq + 6,
            [cq, Bq] = (0, Yq.useState)(!1),
            Wq = Pq[gq];
          return (0, aq.jsxs)("div", {
            className: Oq()("DocsCodeBlock", {
              Compact: lq,
              Collapsed: Aq && !cq
            }),
            children: [!lq && (0, aq.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, aq.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Wq ? Qq[Wq] : "Text"
              }), (0, aq.jsx)(oq, {
                text: Eq,
                label: "Copy"
              })]
            }), (0, aq.jsx)("pre", {
              children: (0, aq.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: mq
                }
              })
            }), Aq && (0, aq.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": cq,
              onClick: () => {
                Bq(!cq)
              },
              children: [(0, aq.jsx)(dq, {
                name: cq ? "chevron-up" : "chevron-down"
              }), cq ? "Show less" : `Show all ${xq} lines`]
            })]
          })
        }
        var rq = gq(4565);
        var vq = gq(4572);
        const hq = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function nq(qq) {
          const Eq = new Map;
          let gq, Yq = [],
            lq = !1;
          const Oq = () => {
            gq && Eq.set(gq.name, gq.lines.join("\n").trimEnd())
          };
          for (const mq of qq.split("\n")) {
            const qq = mq.match(hq);
            lq || mq.startsWith("/*") ? (lq || (Oq(), gq = void 0), Yq.push(mq), lq = !mq.includes("*/")) : qq ? (Oq(), gq = {
              name: qq[1],
              lines: [...Yq, mq]
            }, Yq = []) : gq && (mq.startsWith(" ") || mq.startsWith("\t") || /^[}\])|]/.test(mq)) ? gq.lines.push(mq) : gq && "" !== mq.trim() && (Oq(), gq = void 0)
          }
          return Oq(), Eq
        }

        function bq(qq) {
          return "methods" === qq || "callbacks" === qq || "settings" === qq
        }
        const iq = {
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
              setterSnippet: (qq, Eq) => `api.setClientOption(playerId, "${qq}", ${Eq})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (qq, Eq) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${qq}", ${Eq})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (qq, Eq) => `api.setMobSetting(mobId, "${qq}", ${Eq})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (qq, Eq) => `api.setVehicleSetting(vehicleId, "${qq}", ${Eq})`
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
          Zq = {
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

        function fq(qq) {
          return qq.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function Mq(qq) {
          let Eq = !1;
          return qq.split("\n").map((qq => (qq.startsWith("```") && (Eq = !Eq), !Eq && /^#{3,} /.test(qq) ? qq.slice(1) : qq))).join("\n")
        }

        function Tq(qq) {
          return "readme" === qq ? "getting-started" : fq(qq)
        }
        const zq = "## Glossary of Referenced Types";
        const Sq = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...vq.e.flatMap((qq => {
            const Eq = {
              id: qq.id,
              slug: Tq(qq.id),
              title: qq.title,
              markdown: qq.content,
              ...iq[qq.id]
            };
            if ("readme" === qq.id) return function(qq) {
              const Eq = qq.markdown.indexOf(zq),
                gq = qq.markdown.indexOf("\n```", Eq),
                Yq = qq.markdown.indexOf("\n```", gq + 1);
              if (-1 === Eq || -1 === gq || -1 === Yq) throw new Error(`Getting started has no "${zq}" section with a code block`);
              const lq = qq.markdown.slice(Eq + 31, gq).trim(),
                Oq = [...nq(qq.markdown.slice(qq.markdown.indexOf("\n", gq + 1) + 1, Yq))].map((qq => {
                  let [Eq, gq] = qq;
                  return `## ${Eq}\n\n\`\`\`ts\n${gq}\n\`\`\`\n`
                })),
                mq = qq.markdown.slice(qq.markdown.indexOf("\n", Yq + 1) + 1);
              return [{
                ...qq,
                markdown: `${qq.markdown.slice(0,Eq)}${mq}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${lq}\n\n${Oq.join("\n")}`
              }]
            }(Eq);
            if ("howTo" === qq.id) {
              const {
                parent: qq,
                guides: gq
              } = function(qq) {
                const [Eq, ...gq] = qq.markdown.split(/^(?=## )/m), Yq = [Eq], lq = [];
                for (const mq of gq) {
                  var Oq;
                  const Eq = mq.indexOf("\n"),
                    gq = mq.slice(3, Eq).trim(),
                    xq = mq.slice(Eq + 1);
                  if (!xq.includes("```")) {
                    Yq.push(mq);
                    continue
                  }
                  const Aq = null !== (Oq = Zq[gq]) && void 0 !== Oq ? Oq : {
                    icon: "lightbulb",
                    summary: `How to use ${gq.toLowerCase()} in World Code.`
                  };
                  lq.push({
                    id: `${qq.id}${gq.split(/[^A-Za-z0-9]+/).map((qq=>qq.charAt(0).toUpperCase()+qq.slice(1))).join("")}`,
                    slug: `${qq.slug}-${fq(gq)}`,
                    title: gq,
                    layout: "article",
                    sourceAnchor: (0, rq.t)(gq),
                    markdown: `# ${gq}\n\n${Mq(xq)}`,
                    ...Aq
                  })
                }
                return {
                  parent: {
                    ...qq,
                    markdown: Yq.join(""),
                    childPageIds: lq.map((qq => qq.id))
                  },
                  guides: lq
                }
              }(Eq);
              return [qq, ...gq]
            }
            return [Eq]
          }))],
          pq = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Sq.filter((qq => void 0 !== qq.sourceAnchor)).map((qq => qq.id))]
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

        function Gq(qq) {
          return Sq.find((Eq => Eq.id === qq))
        }
        const Lq = new Map;

        function Jq(qq) {
          let Eq = Lq.get(qq.id);
          return Eq || (Eq = (0, rq.w)(qq.markdown, "changelog" === qq.layout ? 3 : 2), Lq.set(qq.id, Eq)), Eq
        }

        function kq(qq, Eq) {
          return Jq(qq).sections.some((qq => qq.heading.anchor === Eq || qq.blocks.some((qq => "heading" === qq.kind && qq.anchor === Eq))))
        }

        function Rq(qq) {
          const [Eq, ...gq] = qq.replace(/^#/, "").split("-"), Yq = Sq.find((qq => qq.id === Eq));
          if (!Yq) return null;
          const lq = gq.length > 0 ? (0, rq.t)(gq.join("-")) : "";
          for (const mq of null !== (Oq = Yq.childPageIds) && void 0 !== Oq ? Oq : []) {
            var Oq;
            const qq = Gq(mq);
            if (qq.sourceAnchor === lq) return {
              page: qq,
              anchor: ""
            };
            if (kq(qq, lq)) return {
              page: qq,
              anchor: lq
            }
          }
          return {
            page: Yq,
            anchor: lq
          }
        }
        const Uq = {
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

        function Fq(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Yq = Eq.slug ? `${qq}/${Eq.slug}` : qq;
          return gq ? `${Yq}#${gq}` : Yq
        }
        var sq = gq(4583);
        const Xq = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          wq = new Set(["GameApi", "Console", "_TypeOf"]),
          Kq = 4;

        function Cq(qq) {
          let Eq = qq.length;
          for (; Eq > 0 && "" === qq[Eq - 1].trim();) Eq--;
          return qq.slice(0, Eq)
        }

        function Iq(qq) {
          var Eq;
          const gq = Cq(qq);
          if (null === (Eq = gq.at(-1)) || void 0 === Eq || !Eq.trimEnd().endsWith("*/")) return {
            lines: gq,
            doc: ""
          };
          const Yq = gq.findLastIndex((qq => qq.startsWith("/**")));
          return -1 === Yq ? {
            lines: gq,
            doc: ""
          } : {
            lines: Cq(gq.slice(0, Yq)),
            doc: gq.slice(Yq).join("\n")
          }
        }

        function eq(qq) {
          var Eq;
          const gq = qq.split("\n"),
            Yq = gq.flatMap(((qq, Eq) => Xq.test(qq) ? [Eq] : []));
          let lq = Iq(gq.slice(0, null !== (Eq = Yq[0]) && void 0 !== Eq ? Eq : gq.length)).doc;
          return Yq.map(((qq, Eq) => {
            var Oq;
            const mq = Iq(gq.slice(qq, null !== (Oq = Yq[Eq + 1]) && void 0 !== Oq ? Oq : gq.length)),
              xq = {
                name: gq[qq].match(Xq)[1],
                doc: lq,
                lines: mq.lines
              };
            return lq = mq.doc, xq
          }))
        }

        function Dq(qq) {
          var Eq;
          const gq = qq.match(/^readonly \[([\s\S]*)\]$/);
          return gq ? null !== (Eq = gq[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Eq ? Eq : [] : null
        }

        function qE(qq) {
          if (!qq.startsWith("{") || !qq.endsWith("}")) return null;
          const Eq = {
              keys: [],
              values: []
            },
            gq = qq => {
              const gq = qq.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              gq && (Eq.keys.push(gq[1].startsWith('"') ? gq[1] : `"${gq[1]}"`), Eq.values.push(gq[2].trim()))
            };
          let Yq = 0,
            lq = "";
          for (const Oq of qq.slice(1, -1)) "{[(".includes(Oq) ? Yq++ : "}])".includes(Oq) && Yq--, ";" === Oq && 0 === Yq ? (gq(lq), lq = "") : lq += Oq;
          return gq(lq), Eq
        }

        function EE(qq) {
          return qq.length > Kq ? `\n\t| ${qq.join("\n\t| ")}` : qq.join(" | ")
        }

        function gE(qq, Eq) {
          const gq = function(qq, Eq) {
            return qq.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((qq, gq) => {
              var Yq;
              const lq = null === (Yq = Eq.get(gq)) || void 0 === Yq ? void 0 : Yq.object;
              return lq ? EE(lq.values) : qq
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((qq, gq) => {
              var Yq, lq;
              const Oq = null === (Yq = Eq.get(gq)) || void 0 === Yq || null === (lq = Yq.object) || void 0 === lq ? void 0 : lq.values.map(Dq);
              return null !== Oq && void 0 !== Oq && Oq.every((qq => null !== qq)) ? EE([...new Set(Oq.flat())]) : qq
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((qq, gq) => {
              var Yq;
              const lq = null === (Yq = Eq.get(gq)) || void 0 === Yq ? void 0 : Yq.members;
              return lq ? EE(lq) : qq
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((qq, gq) => {
              var Yq;
              const lq = null === (Yq = Eq.get(gq)) || void 0 === Yq ? void 0 : Yq.object;
              return lq ? EE(lq.keys) : qq
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((qq, gq) => {
              var Yq, lq;
              return null !== (Yq = null === (lq = Eq.get(gq)) || void 0 === lq ? void 0 : lq.text) && void 0 !== Yq ? Yq : qq
            }))
          }(qq.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), Eq);
          return [qq.doc, gq].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function YE(qq) {
          const Eq = eq(qq),
            gq = function(qq) {
              const Eq = new Map,
                gq = qq.find((qq => "_TypeOf" === qq.name));
              let Yq = null;
              const lq = () => {
                if (Yq) {
                  const qq = Yq.lines.join("\n");
                  Eq.set(Yq.name, {
                    text: qq,
                    members: Dq(qq),
                    object: qE(qq)
                  })
                }
              };
              for (const Oq of gq.lines.slice(1, -1)) {
                const qq = Oq.match(/^\t([\w$]+): (.+)$/);
                qq ? (lq(), Yq = {
                  name: qq[1],
                  lines: [qq[2]]
                }) : Yq && Yq.lines.push(Oq.replace(/^\t/, ""))
              }
              return lq(), Eq
            }(Eq),
            Yq = new Map;
          for (const lq of Eq) wq.has(lq.name) || Yq.has(lq.name) || Yq.set(lq.name, gE(lq, gq));
          return Yq
        }
        let lE, OE, mE;

        function xE() {
          return OE ??= function(qq) {
            const Eq = eq(qq).find((qq => "GameApi" === qq.name)),
              gq = new Map,
              Yq = Eq.lines;
            for (let Oq = 0; Oq < Yq.length; Oq++) {
              var lq;
              if (!Yq[Oq].trimStart().startsWith("/**")) continue;
              const qq = Oq;
              for (; Oq < Yq.length && !Yq[Oq].includes("*/");) Oq++;
              const Eq = null === (lq = Yq[Oq + 1]) || void 0 === lq ? void 0 : lq.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!Eq) continue;
              let mq = null;
              const xq = [];
              let Aq = "description",
                cq = !1;
              for (const gq of Yq.slice(qq, Oq + 1).join("\n").split("\n").map((qq => qq.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const qq = gq.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                qq ? (mq = qq[1].trim(), Aq = "deprecation") : gq.startsWith("@") ? (Aq = "otherTag", cq = !0) : "" === gq.trim() ? cq || (Aq = "description", xq.push(gq)) : "deprecation" !== Aq || /^[A-Z]/.test(gq.trim()) ? "otherTag" !== Aq && (Aq = "description", xq.push(gq)) : mq = `${mq} ${gq.trim()}`.trim()
              }
              gq.set(Eq[1], {
                deprecation: mq,
                description: xq.join("\n").trim()
              })
            }
            return gq
          }(sq.default), OE
        }

        function AE() {
          if (!mE) {
            mE = new Map;
            for (const qq of Sq) {
              const Eq = (0, rq.u)(Jq(qq)).flatMap((qq => qq.blocks));
              for (const qq of (0, rq.n)(Eq))
                if ("ts" === qq.lang || "typescript" === qq.lang)
                  for (const [Eq, gq] of nq(qq.code)) mE.set(Eq, gq)
            }
            for (const [qq, Eq] of(lE ??= YE(sq.default), lE)) mE.has(qq) || mE.set(qq, Eq)
          }
          return mE
        }
        const cE = {
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
        let uE;

        function BE() {
          if (!uE) {
            uE = new Map;
            for (const qq of Sq)
              if (bq(qq.layout))
                for (const Eq of Jq(qq).sections) uE.has(Eq.heading.text) || uE.set(Eq.heading.text, {
                  pageId: qq.id,
                  anchor: Eq.heading.anchor
                })
          }
          return uE
        }

        function WE(qq) {
          const Eq = qq.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return Eq ? BE().get(Eq[1]) : void 0
        }
        const NE = (0, Yq.createContext)("/docs"),
          aE = (0, Yq.createContext)(null),
          VE = (0, Yq.createContext)(!1),
          dE = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function jE(qq) {
          const Eq = qq.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return Eq ? Eq[1] : null
        }

        function HE(qq) {
          let {
            colour: Eq
          } = qq;
          return (0, aq.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: Eq
            },
            "aria-hidden": "true"
          })
        }

        function oE(qq) {
          const Eq = [];
          let gq = 0;
          for (const Yq of qq.matchAll(dE)) Eq.push(qq.slice(gq, Yq.index), (0, aq.jsx)(HE, {
            colour: Yq[0]
          }), Yq[0]), gq = Yq.index + Yq[0].length;
          return Eq.push(qq.slice(gq)), Eq
        }

        function PE(qq) {
          let {
            href: Eq,
            children: gq
          } = qq;
          const lq = (0, Yq.useContext)(NE);
          if (Eq.startsWith("#")) {
            const qq = Rq(Eq);
            if (qq) return (0, aq.jsx)(mq.c, {
              to: Fq(lq, qq.page, qq.anchor),
              children: (0, aq.jsx)(VE.Provider, {
                value: !0,
                children: gq
              })
            })
          }
          return (0, aq.jsx)("a", {
            href: Eq,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, aq.jsx)(VE.Provider, {
              value: !0,
              children: gq
            })
          })
        }

        function QE(qq) {
          let {
            code: Eq
          } = qq;
          const gq = (0, Yq.useContext)(NE);
          if ((0, Yq.useContext)(VE)) return (0, aq.jsx)("code", {
            className: "DocsInlineCode",
            children: Eq
          });
          if (AE().has(Eq)) return (0, aq.jsx)(vE, {
            type: Eq
          });
          const lq = WE(Eq);
          if (lq) return (0, aq.jsx)(mq.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: Fq(gq, Gq(lq.pageId), lq.anchor),
            children: Eq
          });
          const Oq = jE(Eq);
          return (0, aq.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Oq && (0, aq.jsx)(HE, {
              colour: Oq
            }), Eq]
          })
        }

        function yE(qq) {
          let {
            text: Eq
          } = qq;
          const gq = [];
          let lq = 0;
          for (const Yq of Eq.matchAll(rq.g)) {
            Yq.index > lq && gq.push(...oE(Eq.slice(lq, Yq.index)));
            const [, qq, Oq, mq, xq, Aq] = Yq;
            qq ? gq.push((0, aq.jsx)(QE, {
              code: (0, rq.p)(qq, Oq)
            })) : mq ? gq.push((0, aq.jsx)("strong", {
              children: (0, aq.jsx)(yE, {
                text: mq
              })
            })) : gq.push((0, aq.jsx)(PE, {
              href: Aq,
              children: (0, aq.jsx)(yE, {
                text: xq
              })
            })), lq = Yq.index + Yq[0].length
          }
          return lq < Eq.length && gq.push(...oE(Eq.slice(lq))), (0, aq.jsx)(aq.Fragment, {
            children: gq.map(((qq, Eq) => (0, aq.jsx)(Yq.Fragment, {
              children: qq
            }, Eq)))
          })
        }
        const tE = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          rE = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function vE(qq) {
          let {
            type: Eq
          } = qq;
          const gq = AE(),
            lq = [];
          for (const Yq of Eq.trim().matchAll(tE)) {
            const [qq, Eq, Oq, mq, xq] = Yq;
            Eq ? lq.push((0, aq.jsx)("span", {
              className: "DocsTypeString",
              children: qq
            })) : Oq && gq.has(Oq) ? lq.push((0, aq.jsx)(ZE, {
              name: Oq,
              definition: gq.get(Oq)
            })) : Oq ? lq.push((0, aq.jsx)("span", {
              className: rE.has(Oq) ? "DocsTypeKeyword" : "DocsTypeName",
              children: qq
            })) : mq ? lq.push((0, aq.jsx)("span", {
              className: "DocsTypeNumber",
              children: qq
            })) : xq ? lq.push(" ") : lq.push((0, aq.jsx)("span", {
              className: "DocsTypePunctuation",
              children: qq
            }))
          }
          return (0, aq.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: lq.map(((qq, Eq) => (0, aq.jsx)(Yq.Fragment, {
              children: qq
            }, Eq)))
          })
        }
        const hE = 480,
          nE = 6,
          bE = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let iE = 0;

        function ZE(qq) {
          let {
            name: Eq,
            definition: gq
          } = qq;
          const lq = (0, Yq.useContext)(NE),
            Oq = cE[Eq],
            xq = (0, Yq.useRef)(null),
            Aq = (0, Yq.useRef)(null),
            uq = (0, Yq.useRef)(null),
            [Bq, Wq] = (0, Yq.useState)(!1),
            [Nq, Vq] = (0, Yq.useState)(null),
            jq = (0, Yq.useRef)(),
            Hq = (0, Yq.useContext)(aE),
            [oq] = (0, Yq.useState)((() => "DocsTypePopover-" + iE++)),
            Pq = () => {
              clearTimeout(jq.current), Wq(!0)
            },
            Qq = () => {
              clearTimeout(jq.current), jq.current = setTimeout((() => {
                Wq(!1)
              }), 120)
            };
          return (0, Yq.useEffect)((() => {
            if (!Bq) return;
            const qq = qq => {
              if ("Escape" === qq.key) {
                var Eq, gq;
                if (null !== (Eq = Aq.current) && void 0 !== Eq && Eq.contains(document.activeElement)) null === (gq = xq.current) || void 0 === gq || gq.focus();
                Wq(!1)
              }
            };
            return document.addEventListener("keydown", qq), () => {
              document.removeEventListener("keydown", qq)
            }
          }), [Bq]), (0, Yq.useEffect)((() => () => {
            clearTimeout(jq.current)
          }), []), (0, Yq.useLayoutEffect)((() => {
            if (!Bq || !xq.current || !Aq.current) return void Vq(null);
            const qq = xq.current.getBoundingClientRect(),
              Eq = Aq.current.offsetHeight,
              gq = Math.min(hE, window.innerWidth - 32),
              Yq = Math.min(Math.max(16, qq.left), window.innerWidth - gq - 16),
              lq = qq.bottom + nE + Eq < window.innerHeight;
            Vq({
              left: Yq,
              top: lq ? qq.bottom + nE : Math.max(16, qq.top - nE - Eq)
            })
          }), [Bq]), (0, aq.jsxs)(aq.Fragment, {
            children: [(0, aq.jsx)("button", {
              type: "button",
              ref: xq,
              className: "DocsTypeLink",
              "aria-expanded": Bq,
              "aria-describedby": Bq ? oq : void 0,
              onMouseEnter: Pq,
              onMouseLeave: Qq,
              onFocus: Pq,
              onBlur: Qq,
              onKeyDown: qq => {
                "Tab" === qq.key && !qq.shiftKey && uq.current && (qq.preventDefault(), uq.current.focus())
              },
              onClick: Pq,
              children: Eq
            }), Bq && (0, cq.createPortal)((0, aq.jsxs)("span", {
              ref: Aq,
              id: oq,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Nq ? {
                left: Nq.left,
                top: Nq.top,
                maxWidth: hE
              } : {
                visibility: "hidden"
              },
              onMouseEnter: Pq,
              onMouseLeave: Qq,
              onFocus: Pq,
              onBlur: Qq,
              children: [(0, aq.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, aq.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: Eq
                }), Oq && (0, aq.jsxs)(mq.c, {
                  ref: uq,
                  className: "DocsTypePopoverLink",
                  to: Fq(lq, Gq(Oq)),
                  onClick: () => {
                    Wq(!1)
                  },
                  onKeyDown: qq => {
                    if ("Tab" === qq.key) {
                      var Eq;
                      if (qq.preventDefault(), qq.shiftKey || !xq.current || ! function(qq, Eq) {
                          const gq = [...document.querySelectorAll(bE)],
                            Yq = gq.slice(gq.indexOf(qq) + 1).find((qq => qq.getClientRects().length > 0 && !(null !== Eq && void 0 !== Eq && Eq.contains(qq))));
                          return null === Yq || void 0 === Yq || Yq.focus(), void 0 !== Yq
                        }(xq.current, Aq.current)) null === (Eq = xq.current) || void 0 === Eq || Eq.focus();
                      qq.shiftKey || Wq(!1)
                    }
                  },
                  children: [Gq(Oq).title, (0, aq.jsx)(dq, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, aq.jsx)(tq, {
                lang: "ts",
                code: gq,
                compact: !0
              })]
            }), null !== Hq && void 0 !== Hq ? Hq : document.body)]
          })
        }
        var fE = gq(190),
          ME = gq(4588),
          TE = gq(4597),
          zE = gq(4606);
        const SE = {
          progressBar: {
            ZY: 30,
            fY: .075,
            MY: 5,
            TY: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            zY: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            pY: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            GY: !0,
            scale: 3,
            rotation: 15,
            LY: !1
          },
          gravityBar: {
            ZY: 30,
            kY: .25,
            RY: 3,
            UY: .8,
            gravity: 1,
            FY: 1.5,
            sY: 8,
            XY: 4,
            TY: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            KY: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            IY: 5,
            eY: 1200,
            DY: .15,
            ql: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var pE = gq(296),
          GE = gq(1968);

        function LE(qq) {
          return qq.startsWith("fa-")
        }
        const JE = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          kE = {
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

        function RE(qq) {
          return "string" === typeof qq ? "text" : "entityName" in qq || "translationKey" in qq ? "other" : (0, pE.wb)(qq) ? "progressBar" : (0, pE.sb)(qq) ? "keyBinding" : "icon" in qq ? "icon" : "str" in qq && "string" === typeof qq.str ? "text" : "other"
        }
        const UE = [{
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
          FE = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...UE],
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
                options: GE.j
              },
              isRequired: !0
            }, ...UE],
            other: []
          };

        function sE(qq) {
          return "string" === typeof qq ? {
            str: qq
          } : qq
        }

        function XE(qq, Eq) {
          let gq = sE(qq);
          for (const Yq of Eq) gq = gq && "object" === typeof gq ? gq[Yq] : void 0;
          return gq
        }

        function wE(qq, Eq, gq) {
          const Yq = (qq, lq) => {
            var Oq;
            const mq = Eq[lq],
              xq = {
                ...qq
              };
            if (lq === Eq.length - 1) return void 0 === gq ? delete xq[mq] : xq[mq] = gq, xq;
            const Aq = Yq(null !== (Oq = qq[mq]) && void 0 !== Oq ? Oq : {}, lq + 1);
            return 0 === Object.keys(Aq).length ? delete xq[mq] : xq[mq] = Aq, xq
          };
          return function(qq) {
            const Eq = Object.keys(qq);
            return "string" === typeof qq.str && 1 === Eq.length ? qq.str : qq
          }(Yq(sE(qq), 0))
        }

        function KE(qq, Eq) {
          const gq = RE(qq),
            Yq = FE[gq].find((qq => qq.path.join(".") === Eq.join("."))),
            lq = null !== Yq && void 0 !== Yq && Yq.isRequired && "other" !== gq ? XE(kE[gq], Eq) : void 0;
          return wE(qq, Eq, lq)
        }

        function CE(qq) {
          switch (RE(qq)) {
            case "text":
              return String(XE(qq, ["str"]));
            case "icon":
              return String(XE(qq, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(XE(qq,["progress"])))}%`;
            case "keyBinding":
              return String(XE(qq, ["action"]));
            case "other":
              return JSON.stringify(qq)
          }
        }
        const IE = /^[A-Za-z_$][\w$]*$/;

        function eE(qq) {
          if (Array.isArray(qq)) return `[${qq.map(eE).join(", ")}]`;
          if (qq && "object" === typeof qq) {
            const Eq = Object.entries(qq).map((qq => {
              let [Eq, gq] = qq;
              return `${IE.test(Eq)?Eq:JSON.stringify(Eq)}: ${eE(gq)}`
            }));
            return 0 === Eq.length ? "{}" : `{ ${Eq.join(", ")} }`
          }
          return JSON.stringify(qq)
        }

        function DE(qq) {
          const Eq = qq.map(eE),
            gq = `[${Eq.join(", ")}]`;
          return gq.length <= 60 ? gq : `[\n${Eq.map((qq=>`    ${qq},`)).join("\n")}\n]`
        }
        const qg = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Eg(qq) {
          let Eq = "";
          for (let lq = 0; lq < qq.length; lq++) {
            const Oq = qq[lq];
            if ("\\" === Oq) {
              var gq;
              const Yq = null !== (gq = qq[lq + 1]) && void 0 !== gq ? gq : "";
              Eq += "'" === Yq ? "'" : Oq + Yq, lq++
            } else if ('"' === Oq) Eq += '\\"';
            else {
              var Yq;
              Eq += null !== (Yq = qg[Oq]) && void 0 !== Yq ? Yq : Oq
            }
          }
          return `"${Eq}"`
        }

        function gg(qq) {
          if ("string" === typeof qq) return !0;
          if (!qq || "object" !== typeof qq || Array.isArray(qq)) return !1;
          const Eq = qq;
          return "ProgressBar" === Eq.type ? "number" === typeof Eq.progress : "StyledKeyBinding" === Eq.type ? GE.j.includes(Eq.action) : "string" === typeof Eq.icon || "string" === typeof Eq.str || "string" === typeof Eq.entityName || "string" === typeof Eq.translationKey
        }

        function Yg(qq) {
          let Eq;
          try {
            Eq = function(qq) {
              let Eq = "",
                gq = "",
                Yq = 0;
              const lq = () => {
                Eq += gq.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), gq = ""
              };
              for (; Yq < qq.length;) {
                const Oq = qq.slice(Yq).search(/["'`]|\/\//);
                if (-1 === Oq) {
                  gq += qq.slice(Yq);
                  break
                }
                gq += qq.slice(Yq, Yq + Oq);
                const mq = Yq + Oq,
                  xq = qq[mq];
                if ("/" === xq) {
                  const Eq = qq.indexOf("\n", mq);
                  Yq = -1 === Eq ? qq.length : Eq;
                  continue
                }
                if (lq(), "`" === xq) throw new Error("Use quotes rather than template strings.");
                let Aq = mq + 1;
                for (; Aq < qq.length && qq[Aq] !== xq;) Aq += "\\" === qq[Aq] ? 2 : 1;
                if (Aq >= qq.length) throw new Error("A string is missing its closing quote.");
                const cq = qq.slice(mq + 1, Aq);
                Eq += Eg(cq), Yq = Aq + 1
              }
              return lq(), JSON.parse(Eq)
            }(qq.trim())
          } catch (Yq) {
            return {
              parts: null,
              error: Yq instanceof SyntaxError ? "This isn't a valid array yet." : Yq.message
            }
          }
          if (!Array.isArray(Eq)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const gq = Eq.findIndex((qq => !gg(qq)));
          return -1 !== gq ? {
            parts: null,
            error: `Part ${gq+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: Eq,
            error: null
          }
        }
        const lg = 1 / fE.c.clientTicksPerSecond,
          Og = 700,
          mg = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          xg = {
            progressBar: SE.progressBar.zY,
            timedClick: SE.timedClick.icon,
            gravityBar: SE.gravityBar.icon,
            precisionBar: SE.precisionBar.icon,
            rhythmClick: SE.rhythmClick.icon
          };

        function Ag(qq) {
          let {
            type: Eq
          } = qq;
          const [gq, lq] = (0, Yq.useState)("ready"), [mq, xq] = (0, Yq.useState)(1), [Aq, cq] = (0, Yq.useState)(!0), uq = (0, Yq.useRef)(null), Bq = (0, Yq.useRef)(null), Wq = (0, Yq.useRef)(null), Nq = (0, Yq.useRef)(new Set), Vq = (0, Yq.useRef)(!1), jq = xg[Eq], Hq = (0, Yq.useMemo)((() => ({
            getState: () => {
              var qq, Eq;
              return null !== (qq = null === (Eq = Wq.current) || void 0 === Eq ? void 0 : Eq.getState()) && void 0 !== qq ? qq : mg
            },
            onFrame: qq => (Nq.current.add(qq), () => {
              Nq.current.delete(qq)
            })
          })), []);
          (0, Yq.useEffect)((() => {
            const qq = uq.current,
              Eq = Bq.current;
            if (!qq || !Eq) return;
            const gq = new ResizeObserver((() => {
              xq(qq.clientWidth / Math.max(1, Eq.offsetWidth))
            }));
            return gq.observe(qq), () => {
              gq.disconnect()
            }
          }), []), (0, Yq.useEffect)((() => {
            var qq;
            if ("playing" !== gq) return;
            let Yq = !1;
            const Oq = new zE.d[Eq](SE[Eq], (qq => {
              Yq = !0, cq(!1), lq(qq ? "succeeded" : "failed")
            }), (() => {}));
            Wq.current = Oq;
            let mq = 0,
              xq = performance.now(),
              Aq = requestAnimationFrame((function qq(Eq) {
                for (mq += Math.min(.25, (Eq - xq) / 1e3), xq = Eq; mq >= lg && !Yq;) mq -= lg, Oq.handleTick(lg);
                for (const gq of Nq.current) gq();
                Yq || (Aq = requestAnimationFrame(qq))
              }));
            return null === (qq = uq.current) || void 0 === qq || qq.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Aq), Oq.tearDown(), Wq.current = null, Vq.current = !1
            }
          }), [gq, Eq]), (0, Yq.useEffect)((() => {
            if (Aq) return;
            const qq = setTimeout((() => {
              cq(!0)
            }), Og);
            return () => {
              clearTimeout(qq)
            }
          }), [Aq]);
          const oq = qq => {
            var Eq;
            "playing" === gq && Vq.current !== qq && (Vq.current = qq, null === (Eq = Wq.current) || void 0 === Eq || Eq.handleMouseInput(qq))
          };
          return (0, aq.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, aq.jsxs)("div", {
              ref: uq,
              className: Oq()("DocsQteStage", {
                Playing: "playing" === gq
              }),
              tabIndex: "playing" === gq ? 0 : -1,
              role: "playing" === gq ? "button" : void 0,
              "aria-label": "playing" === gq ? `${Eq} quick time event: click or press Space` : void 0,
              onPointerDown: qq => {
                0 === qq.button && oq(!0)
              },
              onPointerUp: () => {
                oq(!1)
              },
              onPointerLeave: () => {
                oq(!1)
              },
              onPointerCancel: () => {
                oq(!1)
              },
              onKeyDown: qq => {
                "playing" !== gq || " " !== qq.key && "Enter" !== qq.key || (qq.preventDefault(), oq(!0))
              },
              onKeyUp: qq => {
                "playing" !== gq || " " !== qq.key && "Enter" !== qq.key || oq(!1)
              },
              children: [(0, aq.jsx)("div", {
                ref: Bq,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${mq})`
                },
                children: "playing" === gq && (0, aq.jsx)(TE.b.Provider, {
                  value: Hq,
                  children: (0, aq.jsx)(ME.d, {
                    qte: {
                      type: Eq,
                      parameters: SE[Eq]
                    }
                  })
                })
              }), "playing" !== gq && (0, aq.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== gq && (0, aq.jsxs)("div", {
                  className: Oq()("DocsQteResult", "succeeded" === gq ? "Succeeded" : "Failed"),
                  children: [(0, aq.jsx)(dq, {
                    name: "succeeded" === gq ? "check" : "cross",
                    isTinted: !0
                  }), (0, aq.jsx)("span", {
                    children: "succeeded" === gq ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, aq.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Aq,
                  onClick: () => {
                    lq("playing")
                  },
                  children: [(0, aq.jsx)(dq, {
                    name: "ready" === gq ? "play" : "replay"
                  }), (0, aq.jsx)("span", {
                    children: "ready" === gq ? `Try ${Eq}` : "Play again"
                  })]
                })]
              })]
            }), jq && !LE(jq) && (0, aq.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, aq.jsx)("code", {
                children: jq
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function cg(qq) {
          let {
            level: Eq,
            text: gq,
            anchor: Yq,
            className: lq
          } = qq;
          const mq = `h${Math.min(Eq,6)}`;
          return (0, aq.jsxs)(mq, {
                id: Yq,
                className: Oq()("DocsHeading", lq),
                children: [(0, aq.jsx)(yE, {
                      text: gq
                    }), (0, aq.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Yq}`,
                        "aria-label": `Link to ${gq.replace(/`/g,"")}`,children:"#"})]})}function ug(qq){let{items:Eq,ordered:gq}=qq;const Yq=gq?"ol":"ul";return(0,aq.jsx)(Yq,{className:"DocsList",children:Eq.map(((qq,Eq)=>(0,aq.jsxs)("li",{children:[(0,aq.jsx)(yE,{text:qq.text}),qq.children.length>0&&(0,aq.jsx)(ug,{items:qq.children,ordered:gq})]},Eq)))})}function Bg(qq){const Eq=qq[0],gq="paragraph"===(null===Eq||void 0===Eq?void 0:Eq.kind)?Eq.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(gq)?"warning":/^\*\*(tip|prefer)/.test(gq)?"tip":"note"}function Wg(qq){let{block:Eq}=qq;switch(Eq.kind){case"heading":return(0,aq.jsx)(cg,{level:Eq.level,text:Eq.text,anchor:Eq.anchor});case"paragraph":return(0,aq.jsx)("p",{children:(0,aq.jsx)(yE,{text:Eq.text})});case"code":{const qq="ts"===Eq.lang?function(qq){const Eq=qq.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return Eq&&Object.hasOwn(SE,Eq[1])?Eq[1]:null}(Eq.code):null;return(0,aq.jsxs)(aq.Fragment,{children:[(0,aq.jsx)(tq,{code:Eq.code,lang:Eq.lang}),qq&&(0,aq.jsx)(Ag,{type:qq})]})}case"table":return(0,aq.jsx)("div",{className:"DocsTableScroll",children:(0,aq.jsxs)("table",{className:"DocsTable",children:[(0,aq.jsx)("thead",{children:(0,aq.jsx)("tr",{children:Eq.header.map(((qq,Eq)=>(0,aq.jsx)("th",{children:(0,aq.jsx)(yE,{text:qq})},Eq)))})}),(0,aq.jsx)("tbody",{children:Eq.rows.map(((qq,Eq)=>(0,aq.jsx)("tr",{children:qq.map(((qq,Eq)=>(0,aq.jsx)("td",{children:(0,aq.jsx)(yE,{text:qq})},Eq)))},Eq)))})]})});case"list":return(0,aq.jsx)(ug,{items:Eq.items,ordered:Eq.ordered});case"quote":return(0,aq.jsx)("aside",{className:Oq()("DocsCallout",Bg(Eq.blocks)),children:(0,aq.jsx)(Ng,{blocks:Eq.blocks})});case"rule":return(0,aq.jsx)("hr",{className:"DocsRule"})}}function Ng(qq){let{blocks:Eq}=qq;return(0,aq.jsx)(aq.Fragment,{children:Eq.map(((qq,Eq)=>(0,aq.jsx)(Wg,{block:qq},Eq)))})}var ag=gq(4579),Vg=gq(4581);function dg(qq){return"blocks"===qq||"items"===qq}const jg=new Map;function Hg(qq){let Eq=jg.get(qq);return Eq||(Eq=function(qq){const Eq={entries:[],legend:[],notes:[],examples:[]};let gq=!1;for(const Oq of qq.split(/\r?\n/).slice(1)){if(Oq.startsWith("#")){const qq=Oq.replace(/^# ?/,""),Yq=qq.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Yq?Eq.legend.push({code:Yq[1],meaning:Yq[2],usage:Yq[3].trim()}):/^Examples:/.test(qq.trim())?gq=!0:gq&&qq.trim()?Eq.examples.push(qq.trim()):qq.trim()&&!/^\s/.test(qq)&&Eq.notes.push(qq.trim());continue}const qq=Oq.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Yq,lq;qq&&Eq.entries.push({name:qq[1],variants:null!==(Yq=null===(lq=qq[2])||void 0===lq?void 0:lq.split(","))&&void 0!==Yq?Yq:[]})}return Eq}("blocks"===qq?ag:Vg),jg.set(qq,Eq)),Eq}function og(qq){let{className:Eq,value:gq,placeholder:Yq,label:lq,onChange:Oq,count:mq,children:xq}=qq;return(0,aq.jsxs)("div",{className:Eq,children:[(0,aq.jsx)(dq,{name:"magnifying-glass"}),(0,aq.jsx)("input",{type:"search",value:gq,placeholder:Yq,"aria-label":lq,onChange:qq=>{Oq(qq.target.value)}}),xq,mq&&(0,aq.jsxs)("span",{className:"DocsFilterCount",children:[mq.visible," of ",mq.total]})]})}var Pg=gq(1025);function Qg(qq){const Eq=qq.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return Eq?Eq[2]:null}function yg(qq){return"paragraph"===qq.kind&&""===qq.text.trim()}function tg(qq){const Eq={name:qq.heading.text,description:[],params:[],returns:null};let gq="description";for(const lq of qq.blocks)if(!yg(lq))if("heading"===lq.kind&&/^Parameters:?$/.test(lq.text))gq="params";else if("heading"===lq.kind&&/^Returns:?$/.test(lq.text))gq="returns",Eq.returns={type:"",description:[]};else if("params"!==gq||"table"!==lq.kind){if("returns"===gq&&"paragraph"===lq.kind&&""===Eq.returns.type){const qq=Qg(lq.text);if(null!==qq){Eq.returns.type=qq.replaceAll("\\|","|");continue}}"returns"===gq?Eq.returns.description.push(lq):Eq.description.push(lq)}else for(const[qq,gq,Oq]of lq.rows){var Yq;Eq.params.push({name:qq,type:null!==(Yq=Qg(gq))&&void 0!==Yq?Yq:gq,description:null!==Oq&&void 0!==Oq?Oq:""})}return Eq}const rg=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function vg(qq){return qq.filter((qq=>!yg(qq)))}const hg=/^[\w][\w .'&!:()-]*$/,ng=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function bg(qq){var Eq;if("code"===qq.kind&&"text"===qq.lang){const Eq=qq.code.split("\n").map((qq=>qq.trim())).filter(Boolean);return Eq.length>0&&Eq.every((qq=>hg.test(qq)))?Eq.map((qq=>({name:qq}))):null}return"paragraph"===qq.kind&&ng.test(qq.text.trim())?[...qq.text.matchAll(/`([ ^ `]+)` / g)].flatMap((qq => qq[1].split(/,\s*/).map((qq => ({
                              name: qq.trim()
                            }))))): "table" === qq.kind && null !== (Eq = qq.header[0]) && void 0 !== Eq && Eq.startsWith("Song") ? qq.rows.map((qq => {
                              let [Eq, gq] = qq;
                              return {
                                name: Eq.replace(/`/g, ""),
                                caption: gq
                              }
                            })) : null
                          }

                          function ig(qq) {
                            const Eq = [];
                            for (const gq of qq) {
                              const qq = bg(gq),
                                Yq = Eq.at(-1),
                                lq = "table" === gq.kind;
                              qq ? "names" === (null === Yq || void 0 === Yq ? void 0 : Yq.kind) && Yq.isSongs === lq ? Yq.names.push(...qq) : Eq.push({
                                kind: "names",
                                names: qq,
                                isSongs: lq
                              }) : Eq.push({
                                kind: "block",
                                block: gq
                              })
                            }
                            return Eq
                          }
                          const Zg = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function fg(qq, Eq) {
                            return `${Zg[qq]}-${(0,rq.t)(Eq)}`
                          }
                          const Mg = new WeakMap;

                          function Tg(qq, Eq, gq) {
                            let Yq = Mg.get(Eq);
                            if (!Yq) {
                              Yq = new Map;
                              const gq = new Set;
                              for (const lq of (0, rq.u)(Eq)) {
                                const Eq = ig(vg(lq.blocks)).map((Eq => {
                                  if ("block" === Eq.kind) return Eq;
                                  return {
                                    kind: "names",
                                    names: Eq.names.map((Eq => {
                                      var Yq, Oq;
                                      const mq = fg(qq, Eq.name);
                                      let xq = mq;
                                      for (let qq = 2; gq.has(xq); qq++) xq = `${mq}-${qq}`;
                                      return gq.add(xq), {
                                        ...Eq,
                                        anchor: xq,
                                        heading: null !== (Yq = null === (Oq = lq.heading) || void 0 === Oq ? void 0 : Oq.text) && void 0 !== Yq ? Yq : ""
                                      }
                                    })),
                                    isSongs: Eq.isSongs
                                  }
                                }));
                                Yq.set(lq.blocks, Eq)
                              }
                              Mg.set(Eq, Yq)
                            }
                            const lq = Yq.get(gq);
                            if (!lq) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return lq
                          }
                          const zg = "/textures/docs/skinPreviews",
                            Sg = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var pg = gq(4076),
                            Gg = gq(4096);

                          function Lg(qq) {
                            return Object.hasOwn(pg.g, qq) ? pg.g[qq] : null
                          }
                          const Jg = {
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
                            blendMode: Gg.h.Standard
                          };

                          function kg(qq, Eq, gq) {
                            return Eq + (gq - Eq) * qq()
                          }

                          function Rg(qq, Eq, gq) {
                            return qq + (Eq - qq) * gq
                          }

                          function Ug(qq) {
                            return qq.length > 0 && "timeFraction" in qq[0]
                          }

                          function Fg(qq, Eq) {
                            if (0 === qq.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Ug(qq.colorGradients)) {
                              const gq = qq.colorGradients,
                                {
                                  color: Yq
                                } = gq[Math.floor(Eq() * gq.length) % gq.length];
                              return [{
                                at: 0,
                                colour: [Yq[0] / 255, Yq[1] / 255, Yq[2] / 255, 1]
                              }]
                            }
                            return [...qq.colorGradients].sort(((qq, Eq) => qq.timeFraction - Eq.timeFraction)).map((qq => {
                              var gq, Yq, lq;
                              const Oq = qq.minColor,
                                mq = null !== (gq = qq.maxColor) && void 0 !== gq ? gq : Oq,
                                xq = Eq(),
                                Aq = [Rg(Oq[0], mq[0], xq) / 255, Rg(Oq[1], mq[1], xq) / 255, Rg(Oq[2], mq[2], xq) / 255, Rg(null !== (Yq = Oq[3]) && void 0 !== Yq ? Yq : 1, null !== (lq = mq[3]) && void 0 !== lq ? lq : 1, xq)];
                              return {
                                at: qq.timeFraction,
                                colour: Aq
                              }
                            }))
                          }

                          function sg(qq, Eq, gq, Yq) {
                            const lq = kg(Yq, qq.minEmitPower, qq.maxEmitPower),
                              Oq = Eq => kg(Yq, Math.min(qq.dir1[Eq], qq.dir2[Eq]), Math.max(qq.dir1[Eq], qq.dir2[Eq])) * lq,
                              mq = [...qq.velocityGradients].sort(((qq, Eq) => qq.timeFraction - Eq.timeFraction)).map((qq => ({
                                at: qq.timeFraction,
                                factor: kg(Yq, qq.factor, qq.factor2)
                              })));
                            return {
                              pos: [kg(Yq, Eq[0], gq[0]), kg(Yq, Eq[1], gq[1]), kg(Yq, Eq[2], gq[2])],
                              dir: [Oq(0), Oq(1), Oq(2)],
                              age: 0,
                              life: kg(Yq, qq.minLifeTime, qq.maxLifeTime),
                              size: kg(Yq, qq.minSize, qq.maxSize),
                              colours: Fg(qq, Yq),
                              velocityFactors: mq
                            }
                          }

                          function Xg(qq, Eq, gq, Yq) {
                            if (Eq < qq[0].at) return gq(Math.min(1, qq.length - 1));
                            for (let lq = 0; lq < qq.length - 1; lq++)
                              if (Eq <= qq[lq + 1].at) {
                                const Oq = qq[lq + 1].at - qq[lq].at;
                                return Yq(gq(lq), gq(lq + 1), Oq > 0 ? (Eq - qq[lq].at) / Oq : 1)
                              } return gq(qq.length - 1)
                          }

                          function wg(qq) {
                            return Xg(qq.colours, qq.age / qq.life, (Eq => qq.colours[Eq].colour), ((qq, Eq, gq) => [Rg(qq[0], Eq[0], gq), Rg(qq[1], Eq[1], gq), Rg(qq[2], Eq[2], gq), Rg(qq[3], Eq[3], gq)]))
                          }

                          function Kg(qq, Eq, gq) {
                            if (qq.age += gq, qq.age >= qq.life) return !1;
                            const Yq = function(qq) {
                              return 0 === qq.velocityFactors.length ? 1 : Xg(qq.velocityFactors, qq.age / qq.life, (Eq => qq.velocityFactors[Eq].factor), Rg)
                            }(qq) * gq;
                            for (let Oq = 0; Oq < 3; Oq++) {
                              var lq;
                              qq.pos[Oq] += qq.dir[Oq] * Yq, qq.dir[Oq] += (null !== (lq = Eq[Oq]) && void 0 !== lq ? lq : 0) * gq
                            }
                            return !0
                          }

                          function Cg(qq) {
                            return String(Math.round(1e6 * qq) / 1e6)
                          }

                          function Ig(qq) {
                            return `[${qq.map(Cg).join(", ")}]`
                          }

                          function eg(qq, Eq) {
                            const gq = `${Eq}    `;
                            return `[\n${(Ug(qq)?qq.map((qq=>{const Eq=[`${gq}    timeFraction: ${Cg(qq.timeFraction)},`,`${gq}    minColor: ${Ig(qq.minColor)},`];return qq.maxColor&&Eq.push(`${gq}    maxColor: ${Ig(qq.maxColor)},`),`${gq}{\n${Eq.join("\n")}\n${gq}},`})):qq.map((qq=>`
                            $ {
                              gq
                            } {
                              color: $ {
                                Ig(qq.color)
                              }
                            }, `))).join("\n")}\n${Eq}]`
                          }
                          const Dg = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            qY = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const EY = .6;

                          function gY(qq, Eq) {
                            return `${Eq?"song":"sound"}:${qq}`
                          }
                          let YY = {
                              track: null,
                              volume: EY
                            },
                            lY = null,
                            OY = 0,
                            mY = 0;
                          const xY = new Set;

                          function AY(qq) {
                            YY = {
                              ...YY,
                              ...qq
                            }, xY.forEach((qq => {
                              qq()
                            }))
                          }

                          function cY(qq) {
                            YY.track && AY({
                              track: {
                                ...YY.track,
                                ...qq
                              }
                            })
                          }

                          function uY(qq) {
                            const [Eq, gq] = (0, Yq.useState)((() => qq(YY))), lq = (0, Yq.useRef)(qq);
                            return lq.current = qq, (0, Yq.useEffect)((() => {
                              const qq = () => {
                                gq((() => lq.current(YY)))
                              };
                              return xY.add(qq), qq(), () => {
                                xY.delete(qq)
                              }
                            }), []), Eq
                          }

                          function BY() {
                            OY++;
                            const qq = lY;
                            lY = null, null === qq || void 0 === qq || qq.stop()
                          }

                          function WY(qq, Eq) {
                            let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            BY();
                            const lq = OY,
                              {
                                track: Oq
                              } = YY,
                              mq = Oq && Oq.name === qq && Oq.isSong === Eq ? Oq.duration : 0;
                            mY = Yq, AY({
                              track: {
                                name: qq,
                                isSong: Eq,
                                status: "loading",
                                duration: mq
                              }
                            }), Promise.all([gq.e(217), gq.e(241)]).then((() => gq(39569))).then((gq => {
                              let {
                                playDocsSound: Oq
                              } = gq;
                              lq === OY && (lY = Oq(qq, Eq, YY.volume, Yq, {
                                onPlay: qq => {
                                  lq === OY && cY({
                                    status: "playing",
                                    duration: qq
                                  })
                                },
                                onEnd: qq => {
                                  var Eq, gq;
                                  lq === OY && (lY = null, qq ? AY({
                                    track: null
                                  }) : (mY = null !== (Eq = null === (gq = YY.track) || void 0 === gq ? void 0 : gq.duration) && void 0 !== Eq ? Eq : 0, cY({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((Eq => {
                              console.error(`Could not play docs sound ${qq}`, Eq), lq === OY && AY({
                                track: null
                              })
                            }))
                          }

                          function NY() {
                            const {
                              track: qq
                            } = YY;
                            if (!qq) return;
                            if ("playing" === qq.status && lY) return mY = lY.Py(), lY.pause(), void cY({
                              status: "paused"
                            });
                            if ("loading" === qq.status) return BY(), void cY({
                              status: "paused"
                            });
                            if (lY) return void lY.resume();
                            const Eq = qq.duration > 0 && mY >= qq.duration - .05;
                            WY(qq.name, qq.isSong, Eq ? 0 : mY)
                          }

                          function aY() {
                            var qq;
                            return lY && "playing" === (null === (qq = YY.track) || void 0 === qq ? void 0 : qq.status) ? lY.Py() : mY
                          }

                          function VY(qq) {
                            var Eq;
                            null === (Eq = lY) || void 0 === Eq || Eq.setVolume(qq), AY({
                              volume: qq
                            })
                          }

                          function dY() {
                            BY(), mY = 0, AY({
                              track: null
                            })
                          }
                          const jY = (0, Yq.createContext)(null);
                          let HY = null;

                          function oY() {
                            const [qq, Eq] = (0, Yq.useState)(null);
                            return (0, Yq.useEffect)((() => {
                              let qq = !1;
                              return HY ??= Promise.all([gq.e(70), gq.e(73), gq.e(72), gq.e(71), gq.e(197), gq.e(97), gq.e(221)]).then((() => gq(39563))), HY.then((gq => {
                                qq || Eq(gq)
                              }), (qq => {
                                console.error("Could not load the docs gallery's textures", qq), HY = null
                              })), () => {
                                qq = !0
                              }
                            }), []), qq
                          }
                          const PY = 24,
                            QY = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function yY(qq, Eq) {
                            const gq = "skins" === qq ? function(qq, Eq) {
                              const gq = Sg.find((Eq => qq.startsWith(Eq.heading)));
                              return gq ? function(qq, Eq) {
                                return `${qq}-${Eq}`
                              }(gq.prefix, Eq) : null
                            }(Eq.heading, Eq.name) : null;
                            return null === gq ? null : `${zg}/${gq}.webp`
                          }

                          function tY(qq) {
                            let {
                              kind: Eq,
                              entry: gq,
                              assets: lq,
                              renderedUrl: mq
                            } = qq;
                            const {
                              name: xq
                            } = gq, [Aq, cq] = (0, Yq.useState)(!1);
                            if ("icons" === Eq && LE(xq)) return (0, aq.jsx)(Pg.d, {
                              className: "DocsTileIcon",
                              name: xq
                            });
                            let uq = null;
                            var Bq;
                            if ("icons" === Eq) uq = null !== (Bq = null === lq || void 0 === lq ? void 0 : lq.getIngameIconUrl(xq)) && void 0 !== Bq ? Bq : null;
                            else if ("particles" === Eq) {
                              var Wq, Nq, Vq;
                              uq = null !== (Wq = null === lq || void 0 === lq ? void 0 : lq.getParticleTextureUrl(null !== (Nq = null === (Vq = Lg(xq)) || void 0 === Vq ? void 0 : Vq.texture) && void 0 !== Nq ? Nq : xq)) && void 0 !== Wq ? Wq : null
                            } else "skins" === Eq && (uq = null !== mq && void 0 !== mq ? mq : QY.test(xq) ? `/textures/charSkins/previews/${xq}_preview.png` : null);
                            return !uq || Aq ? (0, aq.jsx)(dq, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === Eq ? "person" : "image"
                            }) : (0, aq.jsx)("img", {
                              className: Oq()("DocsTileImage", {
                                Pixelated: "skins" !== Eq
                              }),
                              src: uq,
                              srcSet: uq === mq ? `${uq} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${uq}`), cq(!0)
                              }
                            })
                          }

                          function rY(qq) {
                            let {
                              entry: Eq,
                              isSong: gq
                            } = qq;
                            const Yq = uY((qq => {
                                let {
                                  track: Yq
                                } = qq;
                                return (null === Yq || void 0 === Yq ? void 0 : Yq.name) === Eq.name && Yq.isSong === gq ? Yq.status : null
                              })),
                              lq = null !== Yq && "paused" !== Yq;
                            return (0, aq.jsxs)("button", {
                              type: "button",
                              id: Eq.anchor,
                              className: Oq()("DocsSoundTile", {
                                Playing: lq
                              }),
                              "data-docs-track": gY(Eq.name, gq),
                              "aria-label": lq ? `Pause ${Eq.name}` : `Play ${Eq.name}`,
                              onClick: () => {
                                null !== Yq ? NY() : WY(Eq.name, gq)
                              },
                              children: [(0, aq.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, aq.jsx)(dq, {
                                  name: lq ? "pause" : "play"
                                })
                              }), (0, aq.jsx)("code", {
                                className: "DocsSoundName",
                                children: Eq.name
                              }), Eq.caption && (0, aq.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: Eq.caption
                              })]
                            })
                          }

                          function vY(qq) {
                            let {
                              kind: Eq,
                              names: gq,
                              isSongs: lq
                            } = qq;
                            const mq = oY(),
                              [xq, Aq] = Hq(),
                              cq = !1 === (null === xq || void 0 === xq ? void 0 : xq.failed) ? xq.text : null,
                              uq = (0, Yq.useContext)(jY),
                              [Bq, Wq] = (0, Yq.useState)(""),
                              Nq = Bq.trim().toLowerCase(),
                              Vq = Nq ? gq.filter((qq => qq.name.toLowerCase().includes(Nq))) : gq;
                            return (0, aq.jsxs)("div", {
                              className: "DocsGallery",
                              children: [gq.length > PY && (0, aq.jsx)(og, {
                                className: "DocsGalleryFilter",
                                value: Bq,
                                placeholder: `Filter ${gq.length} names\u2026`,
                                label: "Filter names",
                                onChange: Wq,
                                count: Nq ? {
                                  visible: Vq.length,
                                  total: gq.length
                                } : null
                              }), (0, aq.jsx)("div", {
                                className: Oq()("DocsGalleryGrid", `Kind-${Eq}`, {
                                  Songs: lq
                                }),
                                children: Vq.map((qq => {
                                  if ("sounds" === Eq) return (0, aq.jsx)(rY, {
                                    entry: qq,
                                    isSong: lq
                                  }, qq.anchor);
                                  if (uq && "particles" === Eq && Lg(qq.name)) return (0, aq.jsxs)("button", {
                                    type: "button",
                                    id: qq.anchor,
                                    className: Oq()("DocsTile Previewable", {
                                      Copied: cq === qq.name
                                    }),
                                    title: `Play "${qq.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      uq(qq.name), Aq(qq.name)
                                    },
                                    children: [(0, aq.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, aq.jsx)(tY, {
                                        kind: Eq,
                                        entry: qq,
                                        assets: mq,
                                        renderedUrl: null
                                      }), (0, aq.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, aq.jsx)(dq, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, aq.jsx)("span", {
                                      className: "DocsTileName",
                                      children: cq === qq.name ? "Copied!" : qq.name
                                    })]
                                  }, qq.anchor);
                                  const gq = yY(Eq, qq);
                                  return (0, aq.jsxs)("button", {
                                    type: "button",
                                    id: qq.anchor,
                                    className: Oq()("DocsTile", {
                                      Copied: cq === qq.name
                                    }),
                                    title: `Copy "${qq.name}"`,
                                    onClick: () => {
                                      Aq(qq.name)
                                    },
                                    children: [(0, aq.jsx)("span", {
                                      className: Oq()("DocsTilePreview", {
                                        Rendered: null !== gq
                                      }),
                                      children: (0, aq.jsx)(tY, {
                                        kind: Eq,
                                        entry: qq,
                                        assets: mq,
                                        renderedUrl: gq
                                      })
                                    }), (0, aq.jsx)("span", {
                                      className: "DocsTileName",
                                      children: cq === qq.name ? "Copied!" : qq.name
                                    })]
                                  }, qq.anchor)
                                }))
                              })]
                            })
                          }

                          function hY(qq) {
                            let {
                              kind: Eq,
                              content: gq,
                              blocks: Yq
                            } = qq;
                            return (0, aq.jsx)(aq.Fragment, {
                              children: Tg(Eq, gq, Yq).map(((qq, gq) => "block" === qq.kind ? (0, aq.jsx)(Wg, {
                                block: qq.block
                              }, gq) : (0, aq.jsx)(vY, {
                                kind: Eq,
                                names: qq.names,
                                isSongs: qq.isSongs
                              }, gq)))
                            })
                          }
                          const nY = [{
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

                          function bY(qq) {
                            let {
                              cards: Eq = nY,
                              label: gq = "Start here"
                            } = qq;
                            const lq = (0, Yq.useContext)(NE);
                            return (0, aq.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": gq,
                              children: Eq.map((qq => {
                                let {
                                  pageId: Eq,
                                  countNoun: gq
                                } = qq;
                                const Yq = Gq(Eq);
                                return (0, aq.jsxs)(mq.c, {
                                  to: Fq(lq, Yq),
                                  className: "DocsLandingCard",
                                  children: [(0, aq.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, aq.jsx)(dq, {
                                      name: Yq.icon
                                    })
                                  }), (0, aq.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Yq.title
                                  }), (0, aq.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Yq.summary
                                  }), gq && (0, aq.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [Jq(Yq).sections.length, " ", gq]
                                  })]
                                }, Eq)
                              }))
                            })
                          }
                          const iY = 240;

                          function ZY(qq) {
                            let {
                              faces: Eq
                            } = qq;
                            return (0, aq.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, aq.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${Eq.top}")`
                                }
                              }), (0, aq.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${Eq.left}")`
                                }
                              }), (0, aq.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${Eq.right}")`
                                }
                              })]
                            })
                          }

                          function fY(qq) {
                            let {
                              src: Eq
                            } = qq;
                            const [gq, lq] = (0, Yq.useState)(!1);
                            return gq ? null : (0, aq.jsx)("img", {
                              src: Eq,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${Eq}`), lq(!0)
                              }
                            })
                          }

                          function MY(qq) {
                            let {
                              kind: Eq
                            } = qq;
                            const gq = Hg(Eq),
                              lq = oY(),
                              mq = (0, xq.q)(),
                              [Aq, cq] = (0, Yq.useState)(""),
                              [uq, Bq] = (0, Yq.useState)(null),
                              [Wq, Nq] = (0, Yq.useState)(iY),
                              [Vq, jq] = (0, Yq.useState)(null),
                              Hq = (0, Yq.useRef)(null),
                              Pq = Aq.trim().toLowerCase();
                            (0, Yq.useEffect)((() => {
                              const qq = (0, rq.s)(mq.hash),
                                Yq = gq.entries.find((gq => fg(Eq, gq.name) === qq));
                              if (Yq) Hq.current = Yq.name, cq(Yq.name), Bq(null), jq(Yq.name);
                              else if (null !== Hq.current) {
                                const qq = Hq.current;
                                Hq.current = null, cq((Eq => Eq === qq ? "" : Eq)), jq(null)
                              }
                            }), [gq, Eq, mq.hash, mq.key]), (0, Yq.useEffect)((() => {
                              var qq;
                              null !== Vq && (null === (qq = document.getElementById(fg(Eq, Vq))) || void 0 === qq || qq.scrollIntoView({
                                block: "center"
                              }))
                            }), [Eq, Vq]);
                            const Qq = gq.entries.filter((qq => (!Pq || qq.name.toLowerCase().includes(Pq)) && (!uq || qq.variants.includes(uq))));
                            return (0, aq.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [gq.notes.length > 0 && (0, aq.jsx)("div", {
                                className: "DocsProse",
                                children: gq.notes.map((qq => (0, aq.jsx)("p", {
                                  children: qq
                                }, qq)))
                              }), gq.legend.length > 0 && (0, aq.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, aq.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, aq.jsx)("thead", {
                                    children: (0, aq.jsxs)("tr", {
                                      children: [(0, aq.jsx)("th", {
                                        children: "Code"
                                      }), (0, aq.jsx)("th", {
                                        children: "Variant"
                                      }), (0, aq.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, aq.jsx)("tbody", {
                                    children: gq.legend.map((qq => (0, aq.jsxs)("tr", {
                                      children: [(0, aq.jsx)("td", {
                                        children: (0, aq.jsx)("button", {
                                          type: "button",
                                          className: Oq()("DocsVariantChip", {
                                            Active: uq === qq.code
                                          }),
                                          "aria-pressed": uq === qq.code,
                                          title: `Show only ${Eq} with ${qq.meaning} variants`,
                                          onClick: () => {
                                            Bq(uq === qq.code ? null : qq.code)
                                          },
                                          children: qq.code
                                        })
                                      }), (0, aq.jsx)("td", {
                                        children: qq.meaning
                                      }), (0, aq.jsx)("td", {
                                        children: (0, aq.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: qq.usage
                                        })
                                      })]
                                    }, qq.code)))
                                  })]
                                })
                              }), gq.examples.length > 0 && (0, aq.jsx)(tq, {
                                lang: "text",
                                code: gq.examples.join("\n")
                              }), (0, aq.jsx)(og, {
                                className: "DocsFilterBar",
                                value: Aq,
                                placeholder: `Search ${gq.entries.length} ${Eq}\u2026`,
                                label: `Search ${Eq}`,
                                onChange: qq => {
                                  cq(qq), Nq(iY)
                                },
                                count: Pq || uq ? {
                                  visible: Qq.length,
                                  total: gq.entries.length
                                } : null,
                                children: uq && (0, aq.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Bq(null)
                                  },
                                  children: [uq, " ", (0, aq.jsx)(dq, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, aq.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Qq.slice(0, Wq).map((qq => {
                                  const gq = "blocks" === Eq ? null === lq || void 0 === lq ? void 0 : lq.getBlockFaces(qq.name) : null,
                                    Yq = lq && !gq ? lq.getItemTextureUrl(qq.name) : null;
                                  return (0, aq.jsxs)("div", {
                                    id: fg(Eq, qq.name),
                                    className: Oq()("DocsCatalogueTile", {
                                      Linked: qq.name === Vq
                                    }),
                                    children: [(0, aq.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [gq && (0, aq.jsx)(ZY, {
                                        faces: gq
                                      }), Yq && (0, aq.jsx)(fY, {
                                        src: Yq
                                      })]
                                    }), (0, aq.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: qq.name
                                    }), qq.variants.length > 0 && (0, aq.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: qq.variants.map((qq => (0, aq.jsx)("span", {
                                        children: qq
                                      }, qq)))
                                    }), (0, aq.jsx)(oq, {
                                      text: qq.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, qq.name)
                                }))
                              }), Qq.length > Wq && (0, aq.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Nq(Qq.length)
                                },
                                children: ["Show all ", Qq.length]
                              }), 0 === Qq.length && (0, aq.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", Eq, " match."]
                              })]
                            })
                          }
                          var TY = gq(4643),
                            zY = gq(1566);
                          const SY = .95 * TY.e;

                          function pY(qq) {
                            return /^\s*```/.test(qq)
                          }

                          function GY(qq, Eq) {
                            const gq = [
                              []
                            ];
                            let Yq = !1;
                            for (const lq of qq.split("\n")) !Yq && Eq(lq) && gq.at(-1).length > 0 && gq.push([]), pY(lq) && (Yq = !Yq), gq.at(-1).push(lq);
                            return gq.map((qq => qq.join("\n").trim())).filter(Boolean)
                          }

                          function LY(qq, Eq) {
                            const gq = `${"#".repeat(Eq)} `,
                              Yq = [];
                            let lq = !1;
                            for (const Oq of qq.split("\n")) pY(Oq) ? lq = !lq : !lq && Oq.startsWith(gq) && Yq.push(Oq.slice(gq.length).trim());
                            return Yq
                          }

                          function JY(qq) {
                            return qq.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class kY {
                            constructor(qq, Eq) {
                              this.origin = Eq, this.pages = void 0, this.partPaths = new Map;
                              const gq = qq.map((qq => {
                                const Eq = Eq => this.resolveLinks(qq, Eq).length,
                                  gq = function(qq, Eq) {
                                    const gq = qq.map((qq => Eq(qq.markdown) + 2)),
                                      Yq = gq.reduce(((qq, Eq) => qq + Eq), 0),
                                      lq = Yq / Math.ceil(Yq / SY),
                                      Oq = [];
                                    let mq = 0;
                                    return qq.forEach(((qq, Eq) => {
                                      const Yq = gq[Eq];
                                      (0 === Oq.length || mq + Yq > SY || mq + Yq / 2 > lq) && (Oq.push([]), mq = 0), Oq.at(-1).push(qq), mq += Yq
                                    })), Oq
                                  }(function(qq, Eq) {
                                    return GY(qq, (qq => qq.startsWith("## "))).flatMap((qq => {
                                      var gq;
                                      const Yq = null !== (gq = LY(qq, 2)[0]) && void 0 !== gq ? gq : "";
                                      if (Eq(qq) <= SY) return [{
                                        markdown: qq,
                                        section: Yq
                                      }];
                                      let lq = !1,
                                        Oq = "";
                                      return GY(qq, (qq => {
                                        const Eq = lq && "" !== qq.trim();
                                        return lq = "" === qq.trim(), Eq
                                      })).map((qq => {
                                        var Eq;
                                        const gq = LY(qq, 3),
                                          lq = qq.startsWith("### ") ? gq[0] : Oq;
                                        return Oq = null !== (Eq = gq.at(-1)) && void 0 !== Eq ? Eq : Oq, {
                                          markdown: qq,
                                          section: Yq || lq
                                        }
                                      }))
                                    }))
                                  }(JY(qq), Eq), Eq);
                                return {
                                  page: qq,
                                  groups: gq.length > 1 ? gq : []
                                }
                              }));
                              for (const {
                                  page: Yq,
                                  groups: lq
                                }
                                of gq) lq.forEach(((qq, Eq) => {
                                const gq = (0, TY.u)(Yq.slug, Eq);
                                for (const lq of qq.flatMap((qq => [...LY(qq.markdown, 2), ...LY(qq.markdown, 3)]))) {
                                  const qq = `${Yq.id}#${(0,rq.t)(lq)}`;
                                  this.partPaths.has(qq) || this.partPaths.set(qq, gq)
                                }
                              }));
                              this.pages = gq.map((qq => {
                                let {
                                  page: Eq,
                                  groups: gq
                                } = qq;
                                return {
                                  page: Eq,
                                  path: (0, TY.s)(Eq.slug),
                                  markdown: `# ${Eq.title}\n\n${this.resolveLinks(Eq,JY(Eq))}\n`,
                                  parts: gq.map(((qq, Yq) => this.renderPart(Eq, qq, Yq, gq.length)))
                                }
                              }))
                            }
                            url(qq) {
                              return `${this.origin}${qq}`
                            }
                            getPage(qq) {
                              return this.pages.find((Eq => Eq.page.id === qq))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((qq => (qq.parts.length > 0 ? qq.parts : [{
                                path: qq.path,
                                label: "",
                                markdown: qq.markdown
                              }]).filter((qq => qq.markdown.length > TY.e))))
                            }
                            markdownUrl(qq, Eq) {
                              const gq = Eq && this.partPaths.get(`${qq.id}#${Eq}`) || (0, TY.s)(qq.slug);
                              return this.url(Eq ? `${gq}#${Eq}` : gq)
                            }
                            resolveLinks(qq, Eq) {
                              return Eq.replace(/\]\((#[^)]+)\)/g, ((Eq, gq) => {
                                var Yq;
                                const lq = null !== (Yq = Rq(gq)) && void 0 !== Yq ? Yq : this.samePageTarget(qq, gq);
                                return lq ? `](${this.markdownUrl(lq.page,lq.anchor)})` : Eq
                              }))
                            }
                            samePageTarget(qq, Eq) {
                              const gq = (0, rq.t)(Eq.slice(1));
                              return kq(qq, gq) ? {
                                page: qq,
                                anchor: gq
                              } : null
                            }
                            renderPart(qq, Eq, gq, Yq) {
                              const lq = function(qq) {
                                  const Eq = qq.map((qq => qq.section)).filter(Boolean);
                                  if (0 === Eq.length) return "";
                                  const gq = Eq[0],
                                    Yq = Eq.at(-1);
                                  return gq === Yq ? gq : `${gq} to ${Yq}`
                                }(Eq),
                                Oq = Eq.map((qq => qq.markdown)).join("\n\n"),
                                mq = lq ? `It covers ${lq}. ` : "",
                                xq = `Part ${gq+1} of ${Yq} of [${qq.title}](${this.url((0,TY.s)(qq.slug))}). ${mq}[llms.txt](${this.url(TY.i)}) lists every part.`;
                              return {
                                path: (0, TY.u)(qq.slug, gq),
                                label: lq,
                                markdown: `# ${qq.title}, part ${gq+1} of ${Yq}\n\n${xq}\n\n${this.resolveLinks(qq,Oq)}\n`
                              }
                            }
                            llmsTxt(qq) {
                              const Eq = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${RY(TY.e)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const gq of pq) {
                                Eq.push("", `## ${gq.title}`, "");
                                for (const qq of gq.pageIds) {
                                  const gq = this.getPage(qq),
                                    {
                                      page: Yq,
                                      parts: lq
                                    } = gq,
                                    Oq = `About ${RY(gq.markdown.length)} tokens${lq.length>0?`, in ${lq.length} parts:`:"."}`;
                                  Eq.push(`- [${Yq.title}](${this.url(gq.path)}): ${Yq.summary} ${Oq}`), lq.forEach(((qq, gq) => {
                                    Eq.push(`  - [Part ${gq+1}${qq.label?`: ${qq.label}`:""}](${this.url(qq.path)})`)
                                  }))
                                }
                              }
                              return Eq.push("", "## Optional", "", `- [Every page in one file](${this.url(TY.g)}): About ${RY(qq.length)} tokens, for a model with a large context window.`, ""), Eq.join("\n")
                            }
                            llmsFullTxt() {
                              return pq.flatMap((qq => qq.pageIds.map((qq => this.getPage(qq).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const qq = this.llmsFullTxt(),
                                Eq = this.llmsTxt(qq),
                                gq = new Map([
                                  [TY.o, Eq],
                                  [TY.i, Eq],
                                  [TY.g, qq]
                                ]);
                              for (const Yq of this.pages) {
                                gq.set(Yq.path, Yq.markdown);
                                for (const qq of Yq.parts) gq.set(qq.path, qq.markdown)
                              }
                              return gq
                            }
                          }

                          function RY(qq) {
                            return `${Math.max(1,Math.round(qq/4e3))}K`
                          }
                          let UY = null;

                          function FY() {
                            return UY ??= new kY(Sq, zY.c), UY
                          }
                          const sY = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function XY(qq) {
                            return FY().getPage(qq.id).parts.length > 0 ? `Read ${TY.l}, then the parts of the Bloxd Code API's ${qq.title} page it lists, so I can ask questions about it.` : `Read ${zY.c}${(0,TY.s)(qq.slug)} so I can ask questions about it. ${TY.l} lists every page of the Bloxd Code API docs.`
                          }

                          function wY(qq) {
                            let {
                              page: Eq
                            } = qq;
                            const [gq, Yq] = Hq();
                            return (0, aq.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, aq.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Yq(FY().getPage(Eq.id).markdown)
                                },
                                children: [(0, aq.jsx)(dq, {
                                  name: !1 === (null === gq || void 0 === gq ? void 0 : gq.failed) ? "check" : "copy"
                                }), (0, aq.jsx)("span", {
                                  children: gq ? gq.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), sY.map((qq => (0, aq.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${qq.url}${encodeURIComponent(XY(Eq))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, aq.jsx)(dq, {
                                  name: "external-link"
                                }), (0, aq.jsxs)("span", {
                                  children: ["Open in ", qq.name]
                                })]
                              }, qq.name)))]
                            })
                          }

                          function KY(qq) {
                            return `#${[0,1,2].map((Eq=>Math.round(Math.min(255,Math.max(0,qq[Eq]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function CY(qq) {
                            return [parseInt(qq.slice(1, 3), 16), parseInt(qq.slice(3, 5), 16), parseInt(qq.slice(5, 7), 16)]
                          }

                          function IY(qq) {
                            let {
                              label: Eq,
                              min: gq,
                              max: Yq,
                              step: lq,
                              low: Oq,
                              high: mq,
                              onChange: xq
                            } = qq;
                            return (0, aq.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, aq.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, aq.jsx)("span", {
                                  children: Eq
                                }), (0, aq.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Oq === mq ? Oq : `${Oq}\u2013${mq}`
                                })]
                              }), (0, aq.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, aq.jsx)("input", {
                                  type: "range",
                                  min: gq,
                                  max: Yq,
                                  step: lq,
                                  value: Math.min(Yq, Oq),
                                  "aria-label": `Minimum ${Eq.toLowerCase()}`,
                                  onChange: qq => {
                                    const Eq = Number(qq.target.value);
                                    xq(Eq, Math.max(Eq, mq))
                                  }
                                }), (0, aq.jsx)("input", {
                                  type: "range",
                                  min: gq,
                                  max: Yq,
                                  step: lq,
                                  value: Math.min(Yq, mq),
                                  "aria-label": `Maximum ${Eq.toLowerCase()}`,
                                  onChange: qq => {
                                    const Eq = Number(qq.target.value);
                                    xq(Math.min(Eq, Oq), Eq)
                                  }
                                })]
                              })]
                            })
                          }

                          function eY(qq) {
                            let {
                              label: Eq,
                              min: gq,
                              max: Yq,
                              step: lq,
                              value: Oq,
                              onChange: mq,
                              format: xq = String
                            } = qq;
                            return (0, aq.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, aq.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, aq.jsx)("span", {
                                  children: Eq
                                }), (0, aq.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: xq(Oq)
                                })]
                              }), (0, aq.jsx)("input", {
                                type: "range",
                                min: gq,
                                max: Yq,
                                step: lq,
                                value: Math.min(Yq, Math.max(gq, Oq)),
                                "aria-label": Eq,
                                onChange: qq => {
                                  mq(Number(qq.target.value))
                                }
                              })]
                            })
                          }

                          function DY(qq) {
                            let {
                              opts: Eq,
                              onChange: gq
                            } = qq;
                            const Yq = Eq.colorGradients;
                            if (!Ug(Yq)) return (0, aq.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, aq.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, aq.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, aq.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Yq.map(((qq, Eq) => (0, aq.jsx)("input", {
                                  type: "color",
                                  value: KY(qq.color),
                                  "aria-label": `Colour ${Eq+1}`,
                                  onChange: qq => {
                                    const lq = [...Yq];
                                    lq[Eq] = {
                                      color: CY(qq.target.value)
                                    }, gq(lq)
                                  }
                                }, Eq)))
                              })]
                            });
                            const lq = (qq, Eq) => {
                              const lq = [...Yq];
                              lq[qq] = Eq, gq(lq)
                            };
                            return (0, aq.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, aq.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, aq.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, aq.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Yq.map(((qq, Eq) => {
                                var gq;
                                const Yq = null !== (gq = qq.maxColor) && void 0 !== gq ? gq : qq.minColor;
                                return (0, aq.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, aq.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * qq.timeFraction), "%"]
                                  }), (0, aq.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${KY(qq.minColor)}, ${KY(Yq)})`
                                    }
                                  }), (0, aq.jsx)("input", {
                                    type: "color",
                                    value: KY(qq.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*qq.timeFraction)}%`,
                                    onChange: gq => {
                                      lq(Eq, {
                                        ...qq,
                                        minColor: [...CY(gq.target.value), qq.minColor[3]]
                                      })
                                    }
                                  }), (0, aq.jsx)("input", {
                                    type: "color",
                                    value: KY(Yq),
                                    "aria-label": `Maximum colour at ${Math.round(100*qq.timeFraction)}%`,
                                    onChange: gq => {
                                      lq(Eq, {
                                        ...qq,
                                        maxColor: [...CY(gq.target.value), Yq[3]]
                                      })
                                    }
                                  })]
                                }, Eq)
                              }))]
                            })
                          }
                          const ql = [-.5, -.5, -.5],
                            El = [.5, .5, .5],
                            gl = [0, 1, 2, 3, 4, 5, 6, 7].map((qq => [1 & qq ? El[0] : ql[0], 2 & qq ? El[1] : ql[1], 4 & qq ? El[2] : ql[2]]));class Yl {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(qq, Eq, gq, Yq) {
                              const lq = Math.round(31 * Eq),
                                Oq = Math.round(31 * gq),
                                mq = Math.round(31 * Yq),
                                xq = `${lq}|${Oq}|${mq}`;
                              let Aq = this.tints.get(qq);
                              (!Aq || Aq.size > 2e3) && (Aq = new Map, this.tints.set(qq, Aq));
                              let cq = Aq.get(xq);
                              if (cq) return cq;
                              cq = document.createElement("canvas"), cq.width = qq.naturalWidth || 16, cq.height = qq.naturalHeight || 16;
                              const uq = cq.getContext("2d");
                              return uq ? (uq.imageSmoothingEnabled = !1, uq.drawImage(qq, 0, 0, cq.width, cq.height), uq.globalCompositeOperation = "multiply", uq.fillStyle = `rgb(${lq/31*255}, ${Oq/31*255}, ${mq/31*255})`, uq.fillRect(0, 0, cq.width, cq.height), uq.globalCompositeOperation = "destination-in", uq.drawImage(qq, 0, 0, cq.width, cq.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Aq.set(xq, cq), cq
                            }
                          }

                          function ll(qq) {
                            let {
                              opts: Eq,
                              textureUrl: gq,
                              burst: lq,
                              paused: Oq
                            } = qq;
                            const mq = (0, Yq.useRef)(null),
                              xq = (0, Yq.useRef)(Eq);
                            xq.current = Eq;
                            const Aq = (0, Yq.useRef)(Oq);
                            Aq.current = Oq;
                            const cq = (0, Yq.useRef)(null),
                              uq = (0, Yq.useRef)(null),
                              Bq = (0, Yq.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(qq) {
                                let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const gq = [-.5, -.5, -.5],
                                  Yq = [.5, .5, .5];
                                let lq = .5;
                                for (let Oq = 0; Oq < 40; Oq++) {
                                  const Oq = sg(qq, gq, Yq, Eq),
                                    mq = Math.max(Oq.life / 30, .001);
                                  for (; Kg(Oq, qq.gravity, mq);) lq = Math.max(lq, Math.hypot(Oq.pos[0], Oq.pos[1], Oq.pos[2]) + Oq.size / 2)
                                }
                                return lq
                              }(Eq)))), [Eq]),
                              Wq = (0, Yq.useRef)(Bq);
                            return Wq.current = Bq, (0, Yq.useEffect)((() => {
                              if (cq.current = null, !gq) return;
                              const qq = new Image;
                              let Eq = !1;
                              return qq.onload = () => {
                                Eq || (cq.current = qq)
                              }, qq.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${gq}`)
                              }, qq.src = gq, () => {
                                Eq = !0
                              }
                            }), [gq]), (0, Yq.useEffect)((() => {
                              var qq;
                              null === (qq = uq.current) || void 0 === qq || qq.call(uq)
                            }), [Eq, lq]), (0, Yq.useEffect)((() => {
                              const qq = mq.current,
                                Eq = null === qq || void 0 === qq ? void 0 : qq.getContext("2d");
                              if (!qq || !Eq) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const gq = new Yl;
                              let Yq = [],
                                lq = 0,
                                Oq = -.7,
                                Bq = Wq.current,
                                Nq = performance.now(),
                                aq = 0,
                                Vq = !0,
                                dq = null;
                              const jq = () => {
                                const qq = xq.current,
                                  Eq = Math.min(400, Math.max(0, Math.ceil(qq.manualEmitCount)));
                                Yq = [];
                                for (let gq = 0; gq < Eq; gq++) Yq.push(sg(qq, ql, El, Math.random));
                                lq = 0
                              };
                              uq.current = jq, jq();
                              const Hq = mq => {
                                aq = requestAnimationFrame(Hq);
                                const uq = Math.min(.05, (mq - Nq) / 1e3);
                                if (Nq = mq, !Vq) return;
                                const oq = window.devicePixelRatio || 1,
                                  Pq = Math.round(qq.clientWidth * oq),
                                  Qq = Math.round(qq.clientHeight * oq);
                                if (0 === Pq || 0 === Qq) return;
                                qq.width === Pq && qq.height === Qq || (qq.width = Pq, qq.height = Qq);
                                const yq = xq.current;
                                null === dq && (Oq += .18 * uq), Bq += (Wq.current - Bq) * Math.min(1, 4 * uq);
                                const tq = .6 * uq;
                                Yq = Yq.filter((qq => Kg(qq, yq.gravity, tq))), 0 !== Yq.length || Aq.current || (lq += uq, lq > .6 && jq());
                                const rq = function(qq, Eq, gq, Yq) {
                                  const lq = 3.2 * Yq,
                                    Oq = .44 * Math.min(qq, Eq) * lq / Yq,
                                    mq = Math.cos(gq),
                                    xq = Math.sin(gq),
                                    Aq = Math.cos(.42),
                                    cq = Math.sin(.42);
                                  return (gq, Yq, uq) => {
                                    const Bq = gq * xq + uq * mq,
                                      Wq = lq - (Yq * cq + Bq * Aq);
                                    if (Wq < .05) return null;
                                    const Nq = Oq / Wq;
                                    return {
                                      x: qq / 2 + (gq * mq - uq * xq) * Nq,
                                      y: Eq / 2 - (Yq * Aq - Bq * cq) * Nq,
                                      scale: Nq,
                                      depth: Wq
                                    }
                                  }
                                }(Pq, Qq, Oq, Bq);
                                ! function(qq, Eq, gq, Yq, lq) {
                                  const Oq = qq.createLinearGradient(0, 0, 0, gq);
                                  Oq.addColorStop(0, "#23262d"), Oq.addColorStop(1, "#16181c"), qq.globalCompositeOperation = "source-over", qq.globalAlpha = 1, qq.fillStyle = Oq, qq.fillRect(0, 0, Eq, gq);
                                  const mq = (Eq, gq) => {
                                      const lq = Yq(Eq[0], Eq[1], Eq[2]),
                                        Oq = Yq(gq[0], gq[1], gq[2]);
                                      lq && Oq && (qq.beginPath(), qq.moveTo(lq.x, lq.y), qq.lineTo(Oq.x, Oq.y), qq.stroke())
                                    },
                                    xq = Math.ceil(lq) + 1,
                                    Aq = ql[1];
                                  qq.lineWidth = 1, qq.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let cq = -xq; cq <= xq; cq++) mq([cq + .5, Aq, .5 - xq], [cq + .5, Aq, xq + .5]), mq([.5 - xq, Aq, cq + .5], [xq + .5, Aq, cq + .5]);
                                  qq.strokeStyle = "rgba(255, 255, 255, 0.28)", qq.setLineDash([4, 4]);
                                  for (const cq of gl)
                                    for (const qq of gl) {
                                      const Eq = [0, 1, 2].filter((Eq => cq[Eq] !== qq[Eq]));
                                      1 === Eq.length && cq[Eq[0]] < qq[Eq[0]] && mq(cq, qq)
                                    }
                                  qq.setLineDash([])
                                }(Eq, Pq, Qq, rq, Bq);
                                const vq = cq.current,
                                  hq = Yq.map((qq => ({
                                    particle: qq,
                                    at: rq(qq.pos[0], qq.pos[1], qq.pos[2])
                                  }))).filter((qq => null !== qq.at)).sort(((qq, Eq) => Eq.at.depth - qq.at.depth));
                                Eq.imageSmoothingEnabled = !1;
                                for (const qq of function(qq) {
                                    switch (qq) {
                                      case Gg.h.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Gg.h.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Gg.h.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Gg.h.MultiplyAdd:
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
                                  }(yq.blendMode)) {
                                  Eq.globalCompositeOperation = qq.operation;
                                  for (const {
                                      particle: Yq,
                                      at: lq
                                    }
                                    of hq) {
                                    const [Oq, mq, xq, Aq] = wg(Yq), cq = Math.max(1, Yq.size * lq.scale);
                                    Eq.globalAlpha = qq.usesAlpha ? Math.min(1, Math.max(0, Aq)) : 1, vq ? Eq.drawImage(gq.get(vq, Oq, mq, xq), lq.x - cq / 2, lq.y - cq / 2, cq, cq) : (Eq.fillStyle = `rgb(${255*Oq}, ${255*mq}, ${255*xq})`, Eq.fillRect(lq.x - cq / 2, lq.y - cq / 2, cq, cq))
                                  }
                                }
                                Eq.globalCompositeOperation = "source-over", Eq.globalAlpha = 1
                              };
                              aq = requestAnimationFrame(Hq);
                              const oq = new IntersectionObserver((qq => {
                                let [Eq] = qq;
                                Vq = Eq.isIntersecting
                              }));
                              oq.observe(qq);
                              const Pq = Eq => {
                                  dq = Eq.clientX, qq.setPointerCapture(Eq.pointerId)
                                },
                                Qq = qq => {
                                  null !== dq && (Oq += .01 * (qq.clientX - dq), dq = qq.clientX)
                                },
                                yq = () => {
                                  dq = null
                                };
                              return qq.addEventListener("pointerdown", Pq), qq.addEventListener("pointermove", Qq), qq.addEventListener("pointerup", yq), qq.addEventListener("pointercancel", yq), () => {
                                cancelAnimationFrame(aq), oq.disconnect(), uq.current = null, qq.removeEventListener("pointerdown", Pq), qq.removeEventListener("pointermove", Qq), qq.removeEventListener("pointerup", yq), qq.removeEventListener("pointercancel", yq)
                              }
                            }), []), (0, aq.jsx)("canvas", {
                              ref: mq,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${Eq.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const Ol = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            ml = [{
                              mode: Gg.h.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Gg.h.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Gg.h.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Gg.h.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Gg.h.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            xl = (0, Yq.forwardRef)((function(qq, Eq) {
                              var gq, lq;
                              let {
                                textures: mq
                              } = qq;
                              const xq = oY(),
                                Aq = (0, Yq.useRef)(null),
                                [cq, uq] = (0, Yq.useState)(Jg),
                                [Bq, Wq] = (0, Yq.useState)("example"),
                                [Nq, Vq] = (0, Yq.useState)(0),
                                [jq, Hq] = (0, Yq.useState)(!1),
                                Pq = qq => {
                                  const Eq = "example" === qq ? Jg : Lg(qq);
                                  Eq && (uq(Eq), Wq(qq))
                                };
                              (0, Yq.useImperativeHandle)(Eq, (() => ({
                                preview: qq => {
                                  var Eq;
                                  Pq(qq), null === (Eq = Aq.current) || void 0 === Eq || Eq.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Qq = qq => {
                                  uq({
                                    ...cq,
                                    ...qq
                                  }), Wq(null)
                                },
                                yq = function(qq, Eq) {
                                  if (null !== Eq) return `${Dg}    presetId: "${Eq}",\n${qY}\n})`;
                                  const gq = qq.velocityGradients.map((qq => `        {\n            timeFraction: ${Cg(qq.timeFraction)},\n            factor: ${Cg(qq.factor)},\n            factor2: ${Cg(qq.factor2)},\n        },`)),
                                    Yq = [`    dir1: ${Ig(qq.dir1)},`, `    dir2: ${Ig(qq.dir2)},`, qY, `    texture: "${qq.texture}",`, `    minLifeTime: ${Cg(qq.minLifeTime)},`, `    maxLifeTime: ${Cg(qq.maxLifeTime)},`, `    minEmitPower: ${Cg(qq.minEmitPower)},`, `    maxEmitPower: ${Cg(qq.maxEmitPower)},`, `    minSize: ${Cg(qq.minSize)},`, `    maxSize: ${Cg(qq.maxSize)},`, `    manualEmitCount: ${Cg(qq.manualEmitCount)},`, `    gravity: ${Ig(qq.gravity)},`, `    colorGradients: ${eg(qq.colorGradients,"    ")},`, `    velocityGradients: ${gq.length>0?`[\n${gq.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Cg(qq.blendMode)},`];
                                  return void 0 !== qq.hideDist && Yq.push(`    hideDist: ${Cg(qq.hideDist)},`), `${Dg}${Yq.join("\n")}\n})`
                                }(cq, null === Bq || "example" === Bq ? null : Bq),
                                rq = mq.includes(cq.texture) ? mq : [...mq, cq.texture];
                              return (0, aq.jsxs)("section", {
                                ref: Aq,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, aq.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, aq.jsxs)("div", {
                                    children: [(0, aq.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, aq.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, aq.jsx)(oq, {
                                    text: yq,
                                    label: "Copy code"
                                  })]
                                }), (0, aq.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, aq.jsx)("button", {
                                    type: "button",
                                    className: Oq()("DocsVariantChip", {
                                      Active: "example" === Bq
                                    }),
                                    onClick: () => {
                                      Pq("example")
                                    },
                                    children: "Example"
                                  }), Ol.filter((qq => null !== Lg(qq))).map((qq => (0, aq.jsx)("button", {
                                    type: "button",
                                    className: Oq()("DocsVariantChip", {
                                      Active: Bq === qq
                                    }),
                                    onClick: () => {
                                      Pq(qq)
                                    },
                                    children: qq
                                  }, qq))), (0, aq.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Bq && void 0 !== Bq ? Bq : "custom",
                                    "aria-label": "Preset",
                                    onChange: qq => {
                                      Pq(qq.target.value)
                                    },
                                    children: [(0, aq.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Bq && (0, aq.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), pg.d.map((qq => (0, aq.jsx)("option", {
                                      value: qq,
                                      children: qq
                                    }, qq)))]
                                  })]
                                }), (0, aq.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, aq.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, aq.jsx)(ll, {
                                      opts: cq,
                                      textureUrl: null !== (gq = null === xq || void 0 === xq ? void 0 : xq.getParticleTextureUrl(cq.texture)) && void 0 !== gq ? gq : null,
                                      burst: Nq,
                                      paused: jq
                                    }), (0, aq.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, aq.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Vq(Nq + 1)
                                        },
                                        children: [(0, aq.jsx)(dq, {
                                          name: "replay"
                                        }), (0, aq.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, aq.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": jq,
                                        onClick: () => {
                                          Hq(!jq)
                                        },
                                        children: [(0, aq.jsx)(dq, {
                                          name: jq ? "play" : "pause"
                                        }), (0, aq.jsx)("span", {
                                          children: jq ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, aq.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, aq.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, aq.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, aq.jsx)("span", {
                                          children: "Texture"
                                        }), (0, aq.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: cq.texture
                                        })]
                                      }), (0, aq.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: rq.map((qq => {
                                          var Eq;
                                          const gq = null !== (Eq = null === xq || void 0 === xq ? void 0 : xq.getParticleTextureUrl(qq)) && void 0 !== Eq ? Eq : null;
                                          return (0, aq.jsx)("button", {
                                            type: "button",
                                            className: Oq()("DocsParticleTexture", {
                                              Active: cq.texture === qq
                                            }),
                                            title: qq,
                                            "aria-label": qq,
                                            "aria-pressed": cq.texture === qq,
                                            onClick: () => {
                                              Qq({
                                                texture: qq
                                              })
                                            },
                                            children: gq ? (0, aq.jsx)("img", {
                                              src: gq,
                                              alt: ""
                                            }) : (0, aq.jsx)(dq, {
                                              name: "image"
                                            })
                                          }, qq)
                                        }))
                                      })]
                                    }), (0, aq.jsx)(eY, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: cq.manualEmitCount,
                                      onChange: qq => {
                                        Qq({
                                          manualEmitCount: qq
                                        })
                                      }
                                    }), (0, aq.jsx)(IY, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: cq.minLifeTime,
                                      high: cq.maxLifeTime,
                                      onChange: (qq, Eq) => {
                                        Qq({
                                          minLifeTime: qq,
                                          maxLifeTime: Eq
                                        })
                                      }
                                    }), (0, aq.jsx)(IY, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: cq.minEmitPower,
                                      high: cq.maxEmitPower,
                                      onChange: (qq, Eq) => {
                                        Qq({
                                          minEmitPower: qq,
                                          maxEmitPower: Eq
                                        })
                                      }
                                    }), (0, aq.jsx)(IY, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: cq.minSize,
                                      high: cq.maxSize,
                                      onChange: (qq, Eq) => {
                                        Qq({
                                          minSize: qq,
                                          maxSize: Eq
                                        })
                                      }
                                    }), (0, aq.jsx)(eY, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (lq = cq.gravity[1]) && void 0 !== lq ? lq : 0,
                                      onChange: qq => {
                                        var Eq, gq;
                                        Qq({
                                          gravity: [null !== (Eq = cq.gravity[0]) && void 0 !== Eq ? Eq : 0, qq, null !== (gq = cq.gravity[2]) && void 0 !== gq ? gq : 0]
                                        })
                                      }
                                    }), (0, aq.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, aq.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, aq.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, aq.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: cq.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: qq => {
                                          Qq({
                                            blendMode: Number(qq.target.value)
                                          })
                                        },
                                        children: ml.map((qq => {
                                          let {
                                            mode: Eq,
                                            label: gq
                                          } = qq;
                                          return (0, aq.jsx)("option", {
                                            value: Eq,
                                            children: gq
                                          }, Eq)
                                        }))
                                      })]
                                    }), (0, aq.jsx)(DY, {
                                      opts: cq,
                                      onChange: qq => {
                                        Qq({
                                          colorGradients: qq
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, aq.jsx)(tq, {
                                  code: yq,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Al = gq(4294),
                            cl = gq(1876);

                          function ul(qq, Eq) {
                            return qq ? Al.e.includes(Eq) ? qq.getIngameIconUrl(Eq) : qq.getItemIconUrl(Eq) : null
                          }

                          function Bl(qq) {
                            var Eq, gq, Yq;
                            let {
                              part: lq,
                              assets: mq
                            } = qq;
                            const xq = ul(mq, lq.icon),
                              Aq = null !== (Eq = null === (gq = lq.style) || void 0 === gq ? void 0 : gq.fontSize) && void 0 !== Eq ? Eq : "1.8em",
                              cq = (0, pE.Tb)(lq.style);
                            return (0, aq.jsxs)("span", {
                              className: Oq()("DocsBloxdTextIcon", {
                                Missing: !xq
                              }),
                              style: {
                                width: Aq,
                                height: Aq,
                                opacity: null === (Yq = lq.style) || void 0 === Yq ? void 0 : Yq.opacity
                              },
                              title: xq ? void 0 : `No Bloxd icon, item or block is called "${lq.icon}"`,
                              children: [xq && cq && (0, aq.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: cq,
                                  maskImage: `url("${xq}")`,
                                  WebkitMaskImage: `url("${xq}")`
                                }
                              }), xq ? (0, aq.jsx)("img", {
                                src: xq,
                                alt: "",
                                className: Oq()({
                                  Tinted: cq
                                })
                              }) : (0, aq.jsx)(dq, {
                                name: "image"
                              })]
                            })
                          }

                          function Wl(qq) {
                            let {
                              parts: Eq,
                              className: gq
                            } = qq;
                            const Yq = oY(),
                              lq = [];
                            let mq = [];
                            const xq = qq => {
                              mq.length > 0 && (lq.push((0, aq.jsx)(cl.c, {
                                text: mq
                              }, `run-${qq}`)), mq = [])
                            };
                            return Eq.forEach(((qq, Eq) => {
                              "icon" !== RE(qq) || LE(qq.icon) ? mq.push(qq) : (xq(Eq), lq.push((0, aq.jsx)(Bl, {
                                part: qq,
                                assets: Yq
                              }, `icon-${Eq}`)))
                            })), xq(Eq.length), (0, aq.jsx)("div", {
                              className: Oq()("DocsStyledTextPreview", gq),
                              children: lq
                            })
                          }
                          const Nl = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let al = null;

                          function Vl(qq) {
                            if (al ??= document.createElement("canvas").getContext("2d"), !al) return "#000000";
                            al.fillStyle = "#000000", al.fillStyle = qq;
                            const Eq = al.fillStyle;
                            return Eq.startsWith("#") ? Eq : "#000000"
                          }

                          function dl(qq) {
                            let {
                              value: Eq,
                              label: gq,
                              onChange: Yq
                            } = qq;
                            return (0, aq.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, aq.jsx)("input", {
                                type: "color",
                                value: Vl(Eq),
                                "aria-label": `${gq} picker`,
                                onChange: qq => {
                                  Yq(qq.target.value)
                                }
                              }), (0, aq.jsx)("input", {
                                type: "text",
                                value: Eq,
                                placeholder: "#ffb914 or gold",
                                "aria-label": gq,
                                spellCheck: !1,
                                onChange: qq => {
                                  Yq(qq.target.value)
                                }
                              })]
                            })
                          }

                          function jl(qq) {
                            let {
                              value: Eq,
                              fontAwesomeIcons: gq,
                              onChange: lq
                            } = qq;
                            const mq = oY(),
                              [xq, Aq] = (0, Yq.useState)(LE(Eq) ? "fontAwesome" : "bloxd"),
                              [cq, uq] = (0, Yq.useState)(""),
                              Bq = cq.trim().toLowerCase(),
                              Wq = "bloxd" === xq ? Al.e : gq,
                              Nq = Bq ? Wq.filter((qq => qq.toLowerCase().includes(Bq))) : Wq;
                            return (0, aq.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, aq.jsx)("input", {
                                type: "text",
                                value: Eq,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: qq => {
                                  lq(qq.target.value)
                                }
                              }), (0, aq.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, aq.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((qq => (0, aq.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": xq === qq,
                                    className: Oq()("DocsVariantChip", {
                                      Active: xq === qq
                                    }),
                                    onClick: () => {
                                      Aq(qq)
                                    },
                                    children: "bloxd" === qq ? `Bloxd icons (${Al.e.length})` : `Font Awesome (${gq.length})`
                                  }, qq))), (0, aq.jsx)("input", {
                                    type: "search",
                                    value: cq,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: qq => {
                                      uq(qq.target.value)
                                    }
                                  })
                                ]
                              }), (0, aq.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Nq.map((qq => {
                                  const gq = "bloxd" === xq ? ul(mq, qq) : null;
                                  return (0, aq.jsx)("button", {
                                    type: "button",
                                    title: qq,
                                    "aria-label": qq,
                                    "aria-pressed": qq === Eq,
                                    className: Oq()("DocsIconPickerOption", {
                                      Active: qq === Eq
                                    }),
                                    onClick: () => {
                                      lq(qq)
                                    },
                                    children: "fontAwesome" === xq ? (0, aq.jsx)(Pg.d, {
                                      name: qq
                                    }) : gq ? (0, aq.jsx)("img", {
                                      src: gq,
                                      alt: ""
                                    }) : (0, aq.jsx)(dq, {
                                      name: "image"
                                    })
                                  }, qq)
                                })), 0 === Nq.length && (0, aq.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", cq, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function Hl(qq) {
                            let {
                              property: Eq,
                              value: gq,
                              fontAwesomeIcons: Yq,
                              onChange: lq
                            } = qq;
                            const {
                              field: Oq,
                              label: mq
                            } = Eq, xq = qq => "" !== qq || Eq.isRequired ? qq : void 0;
                            switch (Oq.kind) {
                              case "text":
                                return Oq.multiline ? (0, aq.jsx)("textarea", {
                                  value: String(null !== gq && void 0 !== gq ? gq : ""),
                                  rows: 2,
                                  "aria-label": mq,
                                  onChange: qq => {
                                    lq(qq.target.value)
                                  }
                                }) : (0, aq.jsx)("input", {
                                  type: "text",
                                  value: String(null !== gq && void 0 !== gq ? gq : ""),
                                  "aria-label": mq,
                                  onChange: qq => {
                                    lq(xq(qq.target.value))
                                  }
                                });
                              case "size":
                                return (0, aq.jsx)("input", {
                                  type: "text",
                                  value: String(null !== gq && void 0 !== gq ? gq : ""),
                                  placeholder: Eq.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": mq,
                                  spellCheck: !1,
                                  onChange: qq => {
                                    lq(xq(qq.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, aq.jsx)(dl, {
                                  value: String(null !== gq && void 0 !== gq ? gq : ""),
                                  label: mq,
                                  onChange: qq => {
                                    lq(xq(qq))
                                  }
                                });
                              case "colours": {
                                const qq = Array.isArray(gq) ? gq : [],
                                  Eq = qq => {
                                    lq(qq.length > 0 ? qq : void 0)
                                  };
                                return (0, aq.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [qq.map(((gq, Yq) => (0, aq.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, aq.jsx)(dl, {
                                      value: gq,
                                      label: `${mq} ${Yq+1}`,
                                      onChange: gq => {
                                        Eq(qq.map(((qq, Eq) => Eq === Yq ? gq : qq)))
                                      }
                                    }), (0, aq.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Yq+1}`,
                                      onClick: () => {
                                        Eq(qq.filter(((qq, Eq) => Eq !== Yq)))
                                      },
                                      children: (0, aq.jsx)(dq, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Yq))), (0, aq.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var gq;
                                      Eq([...qq, null !== (gq = qq.at(-1)) && void 0 !== gq ? gq : "#ffffff"])
                                    },
                                    children: [(0, aq.jsx)(dq, {
                                      name: "plus"
                                    }), 0 === qq.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Aq;
                                const qq = "number" === typeof gq ? gq : Number(null !== (Aq = Eq.defaultText) && void 0 !== Aq ? Aq : 0);
                                return (0, aq.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, aq.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: qq,
                                    "aria-label": mq,
                                    onChange: qq => {
                                      lq(Number(qq.target.value))
                                    }
                                  }), (0, aq.jsx)("output", {
                                    children: qq.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, aq.jsxs)("select", {
                                  value: String(null !== gq && void 0 !== gq ? gq : ""),
                                  "aria-label": mq,
                                  onChange: qq => {
                                    lq(xq(qq.target.value))
                                  },
                                  children: [!Eq.isRequired && (0, aq.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", Eq.defaultText, ")"]
                                  }), Oq.options.map((qq => (0, aq.jsx)("option", {
                                    value: qq,
                                    children: qq
                                  }, qq)))]
                                });
                              case "icon":
                                return (0, aq.jsx)(jl, {
                                  value: String(null !== gq && void 0 !== gq ? gq : ""),
                                  fontAwesomeIcons: Yq,
                                  onChange: lq
                                })
                            }
                          }

                          function ol(qq) {
                            let Eq;
                            try {
                              Eq = JSON.parse(qq)
                            } catch (gq) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${gq.message}`
                              }
                            }
                            return gg(Eq) ? {
                              part: Eq,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Pl(qq) {
                            let {
                              parts: Eq,
                              index: gq,
                              fontAwesomeIcons: lq,
                              onChange: Oq,
                              OJ: mq,
                              onClose: xq
                            } = qq;
                            const Aq = (0, Yq.useContext)(aE),
                              uq = (0, Yq.useRef)(null),
                              Bq = Eq[gq],
                              Wq = RE(Bq),
                              [Nq, Vq] = (0, Yq.useState)((() => JSON.stringify(Bq, null, 2))),
                              jq = (0, Yq.useMemo)((() => "other" === Wq ? ol(Nq).error : null), [Wq, Nq]);
                            (0, Yq.useEffect)((() => {
                              var qq;
                              null === (qq = uq.current) || void 0 === qq || qq.focus()
                            }), []);
                            const Hq = (0, aq.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: qq => {
                                qq.target === qq.currentTarget && xq()
                              },
                              children: (0, aq.jsxs)("div", {
                                ref: uq,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${gq+1}: ${JE[Wq]}`,
                                tabIndex: -1,
                                onKeyDown: qq => {
                                  "Escape" === qq.key ? (qq.stopPropagation(), xq()) : "Tab" === qq.key && uq.current && function(qq, Eq) {
                                    const gq = Array.from(qq.querySelectorAll(bE)),
                                      Yq = gq[0],
                                      lq = gq.at(-1);
                                    if (!Yq || !lq) return;
                                    const Oq = document.activeElement;
                                    !Eq.shiftKey || Oq !== Yq && Oq !== qq ? Eq.shiftKey || Oq !== lq || (Eq.preventDefault(), Yq.focus()) : (Eq.preventDefault(), lq.focus())
                                  }(uq.current, qq)
                                },
                                children: [(0, aq.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, aq.jsxs)("div", {
                                    children: [(0, aq.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", gq + 1]
                                    }), (0, aq.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: JE[Wq]
                                    })]
                                  }), (0, aq.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: xq,
                                    children: (0, aq.jsx)(dq, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, aq.jsx)(Wl, {
                                  parts: Eq,
                                  className: "DocsTextDialogPreview"
                                }), (0, aq.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Wq ? (0, aq.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, aq.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, aq.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Nq,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: qq => {
                                        Vq(qq.target.value);
                                        const Eq = ol(qq.target.value);
                                        null !== Eq.part && Oq(Eq.part)
                                      }
                                    }), jq && (0, aq.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: jq
                                    })]
                                  }) : FE[Wq].map((qq => {
                                    const Eq = XE(Bq, qq.path),
                                      gq = qq.isRequired ? JSON.stringify(KE(Bq, qq.path)) === JSON.stringify(Bq) : void 0 === Eq;
                                    return (0, aq.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, aq.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, aq.jsx)("span", {
                                          children: qq.label
                                        }), (0, aq.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: gq,
                                          "aria-label": `Reset ${qq.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Oq(KE(Bq, qq.path))
                                          },
                                          children: [(0, aq.jsx)(dq, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, aq.jsx)(Hl, {
                                        property: qq,
                                        value: Eq,
                                        fontAwesomeIcons: lq,
                                        onChange: Eq => {
                                          Oq(wE(Bq, qq.path, Eq))
                                        }
                                      }), !qq.isRequired && (0, aq.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", qq.defaultText]
                                      })]
                                    }, qq.path.join("."))
                                  }))
                                }), (0, aq.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, aq.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: mq,
                                    children: [(0, aq.jsx)(dq, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, aq.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: xq,
                                    children: "Done"
                                  })]
                                }), (0, aq.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: Nl.map((qq => (0, aq.jsx)("option", {
                                    value: qq
                                  }, qq)))
                                })]
                              })
                            });
                            return Aq ? (0, cq.createPortal)(Hq, Aq) : Hq
                          }
                          const Ql = [{
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
                            yl = Object.keys(kE);

                          function tl(qq) {
                            let {
                              fontAwesomeIcons: Eq
                            } = qq;
                            const [gq, lq] = (0, Yq.useState)(Ql[0].parts), [mq, xq] = (0, Yq.useState)((() => DE(Ql[0].parts))), [Aq, cq] = (0, Yq.useState)(null), [uq, Bq] = (0, Yq.useState)(!1), [Wq, Nq] = (0, Yq.useState)(null), [Vq, jq] = (0, Yq.useState)(!1), [Hq, oq] = (0, Yq.useState)(null), Pq = (0, Yq.useRef)(null), Qq = DE(gq);
                            (0, Yq.useLayoutEffect)((() => {
                              var qq;
                              if (!Hq) return;
                              const Eq = qq => {
                                  var Eq;
                                  return null === (Eq = Pq.current) || void 0 === Eq ? void 0 : Eq.querySelector(`[data-focus-key="${qq}"]`)
                                },
                                gq = Eq(Hq.key);
                              null === (qq = gq && !gq.disabled ? gq : Eq(Hq.fallback)) || void 0 === qq || qq.focus(), oq(null)
                            }), [Hq]);
                            const yq = qq => {
                                lq(qq), xq(DE(qq)), cq(null)
                              },
                              rq = qq => {
                                yq(gq.filter(((Eq, gq) => gq !== qq))), oq({
                                  key: `edit-${Math.min(qq,gq.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              vq = (qq, Eq) => {
                                const Yq = [...gq],
                                  [lq] = Yq.splice(qq, 1);
                                Yq.splice(qq + Eq, 0, lq), yq(Yq);
                                oq({
                                  key: `${Eq<0?"up":"down"}-${qq+Eq}`,
                                  fallback: `edit-${qq+Eq}`
                                })
                              };
                            return (0, aq.jsxs)("section", {
                              ref: Pq,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, aq.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, aq.jsxs)("div", {
                                  children: [(0, aq.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, aq.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, aq.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Ql.map((qq => (0, aq.jsx)("button", {
                                  type: "button",
                                  className: Oq()("DocsVariantChip", {
                                    Active: Qq === DE(qq.parts)
                                  }),
                                  onClick: () => {
                                    yq(qq.parts)
                                  },
                                  children: qq.label
                                }, qq.label)))
                              }), (0, aq.jsx)(Wl, {
                                parts: gq,
                                className: "DocsTextEditorPreview"
                              }), (0, aq.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, aq.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, aq.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, aq.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [gq.map(((qq, Eq) => {
                                      const Yq = RE(qq);
                                      return (0, aq.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, aq.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${Eq}`,
                                          "aria-label": `Edit part ${Eq+1}, ${JE[Yq]}`,
                                          onClick: () => {
                                            Nq(Eq)
                                          },
                                          children: [(0, aq.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: JE[Yq]
                                          }), (0, aq.jsx)(Wl, {
                                            parts: [qq],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Yq && (0, aq.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: CE(qq)
                                          })]
                                        }), (0, aq.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, aq.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Eq+1} up`,
                                            "data-focus-key": `up-${Eq}`,
                                            disabled: 0 === Eq,
                                            onClick: () => {
                                              vq(Eq, -1)
                                            },
                                            children: (0, aq.jsx)(dq, {
                                              name: "chevron-up"
                                            })
                                          }), (0, aq.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Eq+1} down`,
                                            "data-focus-key": `down-${Eq}`,
                                            disabled: Eq === gq.length - 1,
                                            onClick: () => {
                                              vq(Eq, 1)
                                            },
                                            children: (0, aq.jsx)(dq, {
                                              name: "chevron-down"
                                            })
                                          }), (0, aq.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${Eq+1}`,
                                            onClick: () => {
                                              rq(Eq)
                                            },
                                            children: (0, aq.jsx)(dq, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, Eq)
                                    })), 0 === gq.length && (0, aq.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, aq.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: qq => {
                                      "Escape" === qq.key && Vq && (qq.stopPropagation(), jq(!1), oq({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, aq.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Vq,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        jq(!Vq)
                                      },
                                      children: [(0, aq.jsx)(dq, {
                                        name: "plus"
                                      }), "Add a part", (0, aq.jsx)(dq, {
                                        name: Vq ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Vq && (0, aq.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: yl.map((qq => (0, aq.jsx)("li", {
                                        children: (0, aq.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (qq => {
                                              yq([...gq, kE[qq]]), jq(!1), Nq(gq.length)
                                            })(qq)
                                          },
                                          children: JE[qq]
                                        })
                                      }, qq)))
                                    })]
                                  })]
                                }), (0, aq.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, aq.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, aq.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": uq,
                                      onClick: () => {
                                        Bq(!uq)
                                      },
                                      children: [(0, aq.jsx)(dq, {
                                        name: uq ? "check" : "pencil"
                                      }), uq ? "Done" : "Edit"]
                                    })]
                                  }), uq ? (0, aq.jsxs)(aq.Fragment, {
                                    children: [(0, aq.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: mq,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: qq => {
                                        xq(qq.target.value);
                                        const Eq = Yg(qq.target.value);
                                        cq(Eq.error), Eq.parts && lq(Eq.parts)
                                      }
                                    }), Aq && (0, aq.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Aq
                                    })]
                                  }) : (0, aq.jsx)(tq, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Qq})`
                                  })]
                                })]
                              }), null !== Wq && Wq < gq.length && (0, aq.jsx)(Pl, {
                                parts: gq,
                                index: Wq,
                                fontAwesomeIcons: Eq,
                                onChange: qq => {
                                  ((qq, Eq) => {
                                    yq(gq.map(((gq, Yq) => Yq === qq ? Eq : gq)))
                                  })(Wq, qq)
                                },
                                OJ: () => {
                                  rq(Wq), Nq(null)
                                },
                                onClose: () => {
                                  Nq(null), oq({
                                    key: `edit-${Wq}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var rl = gq(4671),
                            vl = gq(4648),
                            hl = gq(4662),
                            nl = gq(4679);
                          const bl = 40,
                            il = 800,
                            Zl = 150,
                            fl = 8e3,
                            Ml = 2e3;

                          function Tl(qq, Eq) {
                            return 12 * Math.log2(Eq / qq)
                          }

                          function zl(qq, Eq) {
                            return Math.round(qq * 2 ** (Eq / 12) * 10) / 10
                          }

                          function Sl(qq) {
                            return `${qq} ms`
                          }

                          function pl(qq) {
                            return `${qq} st`
                          }
                          const Gl = [{
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

                          function Ll(qq) {
                            let {
                              synth: Eq,
                              onChange: gq
                            } = qq;
                            const Yq = (0, rl.i)(Eq);
                            return (0, aq.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, aq.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, aq.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, aq.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, aq.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, aq.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, aq.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: rl.d.map((qq => (0, aq.jsx)("button", {
                                      type: "button",
                                      className: Oq()("DocsVariantChip", {
                                        Active: Eq.waveform === qq
                                      }),
                                      "aria-pressed": Eq.waveform === qq,
                                      onClick: () => {
                                        gq({
                                          waveform: qq
                                        })
                                      },
                                      children: qq
                                    }, qq)))
                                  })]
                                }), (0, aq.jsx)(eY, {
                                  label: "Pitch",
                                  min: 0,
                                  max: Tl(bl, il),
                                  step: .1,
                                  value: Tl(bl, Eq.pitchHz),
                                  format: () => `${Eq.pitchHz} Hz`,
                                  onChange: qq => {
                                    gq({
                                      pitchHz: zl(bl, qq)
                                    })
                                  }
                                }), (0, aq.jsx)(eY, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: Eq.syllableMs,
                                  format: Sl,
                                  onChange: qq => {
                                    gq({
                                      syllableMs: qq
                                    })
                                  }
                                }), (0, aq.jsx)(eY, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: Eq.volume,
                                  onChange: qq => {
                                    gq({
                                      volume: qq
                                    })
                                  }
                                })]
                              }), (0, aq.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, aq.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, aq.jsx)(eY, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: Eq.durationMs,
                                  format: Sl,
                                  onChange: qq => {
                                    gq({
                                      durationMs: qq
                                    })
                                  }
                                }), (0, aq.jsx)(eY, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Yq.durationMs,
                                  step: 1,
                                  value: Yq.attackMs,
                                  format: Sl,
                                  onChange: qq => {
                                    gq({
                                      attackMs: qq
                                    })
                                  }
                                }), (0, aq.jsx)(eY, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Yq.durationMs - Yq.attackMs,
                                  step: 1,
                                  value: Yq.releaseMs,
                                  format: Sl,
                                  onChange: qq => {
                                    gq({
                                      releaseMs: qq
                                    })
                                  }
                                }), (0, aq.jsx)(eY, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: Eq.glideSemitones,
                                  format: pl,
                                  onChange: qq => {
                                    gq({
                                      glideSemitones: qq
                                    })
                                  }
                                }), (0, aq.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, aq.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== Eq.lowpassHz,
                                    onChange: qq => {
                                      gq({
                                        lowpassHz: qq.target.checked ? Ml : null
                                      })
                                    }
                                  }), (0, aq.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== Eq.lowpassHz && (0, aq.jsx)(eY, {
                                  label: "Filter",
                                  min: 0,
                                  max: Tl(Zl, fl),
                                  step: .1,
                                  value: Tl(Zl, Eq.lowpassHz),
                                  format: () => `${Eq.lowpassHz} Hz`,
                                  onChange: qq => {
                                    gq({
                                      lowpassHz: zl(Zl, qq)
                                    })
                                  }
                                })]
                              }), (0, aq.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, aq.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), Gl.map((qq => {
                                  let {
                                    key: Yq,
                                    label: lq,
                                    max: Oq
                                  } = qq;
                                  return (0, aq.jsx)(eY, {
                                    label: lq,
                                    min: 0,
                                    max: Oq,
                                    step: .1,
                                    value: Eq.intonation[Yq],
                                    format: pl,
                                    onChange: qq => {
                                      gq({
                                        intonation: {
                                          ...Eq.intonation,
                                          [Yq]: qq
                                        }
                                      })
                                    }
                                  }, Yq)
                                }))]
                              })]
                            })
                          }
                          const Jl = Object.keys(rl.f),
                            kl = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function Rl(qq) {
                            var Eq;
                            const gq = JSON.stringify((0, rl.i)(qq));
                            return null !== (Eq = Jl.find((qq => JSON.stringify((0, rl.i)(rl.f[qq])) === gq))) && void 0 !== Eq ? Eq : null
                          }

                          function Ul(qq) {
                            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof qq || null === qq) return JSON.stringify(qq);
                            return `{\n${Object.entries(qq).map((qq=>{let[gq,Yq]=qq;return`${Eq}    ${gq}: ${Ul(Yq,`${Eq}    `)},`})).join("\n")}\n${Eq}}`
                          }

                          function Fl(qq, Eq, gq) {
                            const Yq = Rl(qq),
                              lq = [`    line: ${JSON.stringify(Eq)},`];
                            return gq && lq.push(`    speakerName: ${JSON.stringify(gq)},`), lq.push("    voice,"), `const voice = ${Yq?JSON.stringify(Yq):Ul((0,rl.i)(qq))}\n\napi.setClientOption(playerId, "dialogue", {\n${lq.join("\n")}\n})`
                          }
                          const sl = 400,
                            Xl = 90;
                          let wl = null;

                          function Kl(qq, Eq, gq) {
                            return wl ??= new AudioContext, wl.resume(), (0, nl.e)(wl, wl.destination, qq, Eq, gq, (() => {}))
                          }

                          function Cl() {
                            const [qq, Eq] = (0, Yq.useState)(rl.f.regular), [gq, lq] = (0, Yq.useState)(kl[0]), [mq, xq] = (0, Yq.useState)("Innkeeper"), [Aq, cq] = (0, Yq.useState)(0), uq = uY((qq => qq.volume)), Bq = (0, Yq.useRef)(null), Wq = (0, Yq.useRef)(0), Nq = (0, Yq.useRef)(0), Vq = () => {
                              var qq;
                              null === (qq = Bq.current) || void 0 === qq || qq.call(Bq), Bq.current = null
                            };
                            (0, Yq.useEffect)((() => () => {
                              var qq;
                              null === (qq = Bq.current) || void 0 === qq || qq.call(Bq), window.clearTimeout(Wq.current)
                            }), []);
                            const jq = (0, Yq.useMemo)((() => ({
                                line: gq,
                                speakerName: mq || void 0,
                                voice: qq
                              })), [gq, mq, qq]),
                              Hq = (0, Yq.useRef)(jq);
                            Hq.current = jq;
                            const Pq = Rl(qq),
                              Qq = qq => {
                                window.clearTimeout(Wq.current), Vq();
                                const {
                                  plan: Eq,
                                  synth: gq
                                } = (0, hl.f)(qq);
                                gq && (Bq.current = Kl(gq, Eq.blips, uq)), cq((qq => qq + 1))
                              },
                              yq = Fl(qq, gq, mq);
                            return (0, aq.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, aq.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, aq.jsxs)("div", {
                                  children: [(0, aq.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, aq.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, aq.jsx)(oq, {
                                  text: yq,
                                  label: "Copy code"
                                })]
                              }), (0, aq.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [Jl.map((qq => (0, aq.jsx)("button", {
                                  type: "button",
                                  className: Oq()("DocsVariantChip", {
                                    Active: Pq === qq
                                  }),
                                  "aria-pressed": Pq === qq,
                                  onClick: () => {
                                    (qq => {
                                      const gq = rl.f[qq];
                                      Eq(gq), Qq({
                                        ...jq,
                                        voice: gq
                                      })
                                    })(qq)
                                  },
                                  children: qq
                                }, qq))), !Pq && (0, aq.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, aq.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, aq.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, aq.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, aq.jsx)(vl.e, {
                                      display: jq
                                    }, Aq)
                                  }), (0, aq.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: qq => {
                                      qq.preventDefault(), Qq(jq)
                                    },
                                    children: [(0, aq.jsx)("input", {
                                      value: gq,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: qq => {
                                        lq(qq.target.value)
                                      }
                                    }), (0, aq.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, aq.jsx)(dq, {
                                        name: "play"
                                      }), (0, aq.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, aq.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: kl.map((qq => (0, aq.jsx)("button", {
                                      type: "button",
                                      className: Oq()("DocsVariantChip", {
                                        Active: gq === qq
                                      }),
                                      onClick: () => {
                                        var Eq;
                                        lq(Eq = qq), Qq({
                                          ...jq,
                                          line: Eq
                                        })
                                      },
                                      children: qq
                                    }, qq)))
                                  }), (0, aq.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, aq.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, aq.jsx)("input", {
                                      value: mq,
                                      placeholder: "No name",
                                      onChange: qq => {
                                        xq(qq.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, aq.jsx)(Ll, {
                                  synth: qq,
                                  onChange: gq => {
                                    const Yq = {
                                      ...qq,
                                      ...gq
                                    };
                                    Eq(Yq);
                                    const lq = {
                                        ...jq,
                                        voice: Yq
                                      },
                                      Oq = performance.now();
                                    if (Oq - Nq.current >= Xl) {
                                      Nq.current = Oq, Vq();
                                      const qq = (0, hl.f)(lq).plan.blips[0];
                                      qq && (Bq.current = Kl((0, rl.i)(Yq), [{
                                        ...qq,
                                        atMs: 0
                                      }], uq))
                                    }
                                    window.clearTimeout(Wq.current), Wq.current = window.setTimeout((() => {
                                      Qq(Hq.current)
                                    }), sl)
                                  }
                                })]
                              }), (0, aq.jsx)(tq, {
                                code: yq,
                                lang: "ts"
                              })]
                            })
                          }
                          var Il = gq(4701);
                          const el = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            Dl = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            qO = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${Dl}`, "g"), Il.l],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, Il.l]
                            ];

                          function EO(qq) {
                            return `${qq.pageId}#${qq.anchor}`
                          }
                          let gO, YO, lO;

                          function OO(qq) {
                            const Eq = (0, rq.j)(qq),
                              gq = new Set;
                            for (const [, , Yq] of Eq.matchAll(rq.d)) {
                              const qq = Yq.startsWith("#") ? Rq(Yq) : null,
                                Eq = qq ? EO({
                                  pageId: qq.page.id,
                                  anchor: qq.anchor
                                }) : null;
                              null !== Eq && (gO || (gO = new Set(Sq.flatMap((qq => bq(qq.layout) ? Jq(qq).sections.map((Eq => EO({
                                pageId: qq.id,
                                anchor: Eq.heading.anchor
                              }))) : [])))), gO).has(Eq) && gq.add(Eq)
                            }
                            for (const [, , Yq] of Eq.matchAll(el)) {
                              const qq = WE(Yq);
                              qq && gq.add(EO(qq))
                            }
                            return gq
                          }

                          function mO(qq, Eq) {
                            const gq = new Set,
                              Yq = function(qq) {
                                return qq.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(qq);
                            for (const [, lq] of Yq.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) gq.add(lq);
                            for (const [lq, Oq] of qO)
                              for (const [, qq] of(0, Il.d)(Yq, lq, Oq)) Eq.has(qq) && gq.add(qq);
                            return gq
                          }

                          function xO(qq, Eq, gq, Yq) {
                            const lq = qq.get(Eq);
                            lq ? !Yq && lq.some((qq => qq.pageId === gq.pageId)) || lq.push(gq) : qq.set(Eq, [gq])
                          }
                          const AO = /^[A-Za-z_$][\w$]*$/;

                          function cO(qq) {
                            return AO.test(qq.name) ? qq.name : "options"
                          }

                          function uO(qq, Eq) {
                            const gq = qq.params.map(cO).join(", ");
                            return Eq ? `${qq.name} = (${gq}) => {\n\t\n}` : `api.${qq.name}(${gq})`
                          }

                          function BO(qq) {
                            let {
                              method: Eq,
                              isCallback: gq
                            } = qq;
                            return (0, aq.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, aq.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [gq ? (0, aq.jsxs)(aq.Fragment, {
                                  children: [(0, aq.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Eq.name
                                  }), (0, aq.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, aq.jsxs)(aq.Fragment, {
                                  children: [(0, aq.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, aq.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Eq.name
                                  }), (0, aq.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), Eq.params.map(((qq, gq) => (0, aq.jsxs)(Yq.Fragment, {
                                  children: [gq > 0 && (0, aq.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, aq.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${Eq.name}-${cO(qq)}`,
                                    children: qq.name
                                  })]
                                }, qq.name))), (0, aq.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: gq ? ") => " : ")"
                                }), gq && !Eq.returns && (0, aq.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), Eq.returns && Eq.returns.type && (0, aq.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!gq && (0, aq.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, aq.jsx)(vE, {
                                  type: Eq.returns.type
                                })]
                              })]
                            })
                          }

                          function WO(qq) {
                            let {
                              title: Eq,
                              references: gq
                            } = qq;
                            const lq = (0, Yq.useContext)(NE);
                            return (0, aq.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, aq.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: Eq
                              }), gq.map((qq => (0, aq.jsx)(mq.c, {
                                to: Fq(lq, Gq(qq.pageId), qq.anchor),
                                children: qq.label
                              }, `${qq.pageId}#${qq.anchor}`)))]
                            })
                          }

                          function NO(qq) {
                            var Eq, gq;
                            let {
                              pageId: Yq,
                              anchor: lq
                            } = qq;
                            const Oq = EO({
                                pageId: Yq,
                                anchor: lq
                              }),
                              mq = null !== (Eq = function() {
                                if (!lO) {
                                  lO = new Map;
                                  const Yq = new Set(Sq.filter((qq => "callbacks" === qq.layout)).flatMap((qq => Jq(qq).sections.map((qq => qq.heading.text)))));
                                  for (const lq of Sq)
                                    if ("article" === lq.layout || "snippets" === lq.layout)
                                      for (const Oq of (0, rq.u)(Jq(lq)))
                                        for (const {
                                            code: mq
                                          }
                                          of(0, rq.n)(Oq.blocks))
                                          for (const xq of mO(mq, Yq)) {
                                            const Yq = BE().get(xq);
                                            if (Yq) {
                                              var qq, Eq, gq;
                                              const mq = {
                                                pageId: lq.id,
                                                anchor: null !== (qq = null === (Eq = Oq.heading) || void 0 === Eq ? void 0 : Eq.anchor) && void 0 !== qq ? qq : "",
                                                label: null !== (gq = lq.navTitle) && void 0 !== gq ? gq : lq.title
                                              };
                                              xO(lO, EO(Yq), mq, !1)
                                            }
                                          }
                                }
                                return lO
                              }().get(Oq)) && void 0 !== Eq ? Eq : [],
                              xq = null !== (gq = function() {
                                if (!YO) {
                                  YO = new Map;
                                  const qq = Gq("changelog");
                                  for (const Eq of Jq(qq).sections) {
                                    const gq = new Set(Eq.blocks.flatMap((qq => [...OO(qq)])));
                                    for (const Yq of gq) {
                                      const gq = {
                                        pageId: qq.id,
                                        anchor: Eq.heading.anchor,
                                        label: Eq.heading.text
                                      };
                                      xO(YO, Yq, gq, !0)
                                    }
                                  }
                                }
                                return YO
                              }().get(Oq)) && void 0 !== gq ? gq : [];
                            return 0 === mq.length && 0 === xq.length ? null : (0, aq.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [mq.length > 0 && (0, aq.jsx)(WO, {
                                title: "Used in",
                                references: mq
                              }), xq.length > 0 && (0, aq.jsx)(WO, {
                                title: "Changelog",
                                references: xq
                              })]
                            })
                          }

                          function aO(qq) {
                            let {
                              method: Eq,
                              pageId: gq,
                              anchor: Yq,
                              isCallback: lq
                            } = qq;
                            const Oq = lq ? void 0 : xE().get(Eq.name),
                              mq = Eq.description.length > 0 || null === Oq || void 0 === Oq || !Oq.description ? Eq.description : (0, rq.A)(Oq.description);
                            return (0, aq.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, aq.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, aq.jsx)(cg, {
                                  level: 2,
                                  text: Eq.name,
                                  anchor: Yq,
                                  className: "DocsCardTitle"
                                }), (0, aq.jsx)(oq, {
                                  text: uO(Eq, lq),
                                  label: lq ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, aq.jsx)(BO, {
                                method: Eq,
                                isCallback: lq
                              }), Oq && null !== Oq.deprecation && (0, aq.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, aq.jsx)("strong", {
                                  children: "Deprecated"
                                }), Oq.deprecation && (0, aq.jsxs)(aq.Fragment, {
                                  children: [": ", (0, aq.jsx)(yE, {
                                    text: (xq = Oq.deprecation, (0, Il.t)(xq, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, Il.i)("`\\w"), (qq => {
                                      let [Eq] = qq;
                                      return BE().has(Eq) ? `\`${Eq}\`` : Eq
                                    })))
                                  })]
                                })]
                              }), mq.length > 0 && (0, aq.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, aq.jsx)(Ng, {
                                  blocks: mq
                                })
                              }), Eq.params.length > 0 && (0, aq.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, aq.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, aq.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: Eq.params.map((qq => (0, aq.jsxs)("div", {
                                    id: `${Eq.name}-${cO(qq)}`,
                                    className: "DocsParam",
                                    children: [(0, aq.jsxs)("dt", {
                                      children: [(0, aq.jsx)("code", {
                                        className: "DocsParamName",
                                        children: qq.name
                                      }), (0, aq.jsx)(vE, {
                                        type: qq.type
                                      })]
                                    }), qq.description && (0, aq.jsx)("dd", {
                                      children: (0, aq.jsx)(yE, {
                                        text: qq.description
                                      })
                                    })]
                                  }, qq.name)))
                                })]
                              }), Eq.returns && (Eq.returns.type || Eq.returns.description.length > 0) && (0, aq.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, aq.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, aq.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [Eq.returns.type && (0, aq.jsx)(vE, {
                                    type: Eq.returns.type
                                  }), Eq.returns.description.length > 0 && (0, aq.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, aq.jsx)(Ng, {
                                      blocks: Eq.returns.description
                                    })
                                  })]
                                })]
                              }), (0, aq.jsx)(NO, {
                                pageId: gq,
                                anchor: Yq
                              })]
                            });
                            var xq
                          }

                          function VO(qq) {
                            var Eq;
                            return null !== qq.defaultValue && "undefined" !== qq.defaultValue ? qq.defaultValue : null !== (Eq = qq.example) && void 0 !== Eq ? Eq : "value"
                          }

                          function dO(qq) {
                            let {
                              setting: Eq,
                              pageId: gq,
                              anchor: Yq,
                              setterSnippet: lq
                            } = qq;
                            const Oq = null === Eq.defaultValue ? null : jE(Eq.defaultValue);
                            return (0, aq.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, aq.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, aq.jsx)(cg, {
                                  level: 2,
                                  text: Eq.name,
                                  anchor: Yq,
                                  className: "DocsCardTitle"
                                }), (0, aq.jsx)(oq, {
                                  text: lq(Eq.name, VO(Eq)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, aq.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, aq.jsxs)("div", {
                                  children: [(0, aq.jsx)("dt", {
                                    children: "Type"
                                  }), (0, aq.jsx)("dd", {
                                    children: (0, aq.jsx)(vE, {
                                      type: Eq.type
                                    })
                                  })]
                                }), null !== Eq.defaultValue && (0, aq.jsxs)("div", {
                                  children: [(0, aq.jsx)("dt", {
                                    children: "Default"
                                  }), (0, aq.jsx)("dd", {
                                    children: (0, aq.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Oq && (0, aq.jsx)(HE, {
                                        colour: Oq
                                      }), Eq.defaultValue]
                                    })
                                  })]
                                }), null !== Eq.example && (0, aq.jsxs)("div", {
                                  children: [(0, aq.jsx)("dt", {
                                    children: "Example"
                                  }), (0, aq.jsx)("dd", {
                                    children: (0, aq.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: Eq.example
                                    })
                                  })]
                                })]
                              }), Eq.description.length > 0 && (0, aq.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, aq.jsx)(Ng, {
                                  blocks: Eq.description
                                })
                              }), (0, aq.jsx)(NO, {
                                pageId: gq,
                                anchor: Yq
                              })]
                            })
                          }

                          function jO(qq) {
                            let {
                              section: Eq
                            } = qq;
                            return (0, aq.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, aq.jsx)(cg, {
                                level: 2,
                                text: Eq.heading.text,
                                anchor: Eq.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, aq.jsx)("div", {
                                className: "DocsProse",
                                children: (0, aq.jsx)(Ng, {
                                  blocks: Eq.blocks
                                })
                              })]
                            })
                          }

                          function HO(qq) {
                            let {
                              section: Eq
                            } = qq;
                            return (0, aq.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, aq.jsx)(cg, {
                                level: Eq.heading.level,
                                text: Eq.heading.text,
                                anchor: Eq.heading.anchor
                              }), (0, aq.jsx)(Ng, {
                                blocks: Eq.blocks
                              })]
                            })
                          }
                          const oO = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function PO(qq) {
                            let {
                              page: Eq,
                              section: gq
                            } = qq;
                            if ("methods" === Eq.layout || "callbacks" === Eq.layout) return (0, aq.jsx)(aO, {
                              method: tg(gq),
                              pageId: Eq.id,
                              anchor: gq.heading.anchor,
                              isCallback: "callbacks" === Eq.layout
                            });
                            if ("settings" === Eq.layout) {
                              const qq = function(qq) {
                                const Eq = {
                                  name: qq.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Yq of qq.blocks) {
                                  var gq;
                                  if (yg(Yq)) continue;
                                  const qq = "paragraph" === Yq.kind ? Yq.text.match(rg) : null;
                                  if (!qq) {
                                    Eq.description.push(Yq);
                                    continue
                                  }
                                  const lq = null !== (gq = Qg(qq[2])) && void 0 !== gq ? gq : qq[2];
                                  "Type" === qq[1] ? Eq.type = lq : "Default" === qq[1] ? Eq.defaultValue = lq : "" !== lq && (Eq.example = lq)
                                }
                                return Eq.type ? Eq : null
                              }(gq);
                              if (qq) return (0, aq.jsx)(dO, {
                                setting: qq,
                                pageId: Eq.id,
                                anchor: gq.heading.anchor,
                                setterSnippet: Eq.setterSnippet
                              })
                            }
                            return "snippets" === Eq.layout ? (0, aq.jsx)(jO, {
                              section: gq
                            }) : "changelog" === Eq.layout ? (0, aq.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, aq.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, aq.jsx)(cg, {
                                  level: 2,
                                  text: gq.heading.text,
                                  anchor: gq.heading.anchor
                                })
                              }), (0, aq.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, aq.jsx)(Ng, {
                                  blocks: vg(gq.blocks)
                                })
                              })]
                            }) : Eq.gallery ? (0, aq.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, aq.jsx)(cg, {
                                level: gq.heading.level,
                                text: gq.heading.text,
                                anchor: gq.heading.anchor
                              }), (0, aq.jsx)(hY, {
                                kind: Eq.gallery,
                                content: Jq(Eq),
                                blocks: gq.blocks
                              })]
                            }) : (0, aq.jsx)(HO, {
                              section: gq
                            })
                          }

                          function QO(qq) {
                            let {
                              page: Eq,
                              onTocChange: gq
                            } = qq;
                            const lq = Jq(Eq),
                              [Oq, mq] = (0, Yq.useState)(""),
                              xq = "article" !== Eq.layout,
                              Aq = dg(Eq.gallery) ? Eq.gallery : null,
                              cq = null !== Aq,
                              uq = Oq.trim().toLowerCase(),
                              Bq = (0, Yq.useRef)(null),
                              Wq = (0, Yq.useCallback)((qq => {
                                var Eq;
                                null === (Eq = Bq.current) || void 0 === Eq || Eq.preview(qq)
                              }), []),
                              Nq = (0, Yq.useMemo)((() => {
                                if (!Eq.hasParticlePlayground) return [];
                                const qq = ig(lq.intro).find((qq => "names" === qq.kind && !qq.names.some((qq => null !== Lg(qq.name)))));
                                return "names" === (null === qq || void 0 === qq ? void 0 : qq.kind) ? qq.names.map((qq => qq.name)) : []
                              }), [Eq, lq]),
                              Vq = (0, Yq.useMemo)((() => {
                                if (!Eq.hasTextPlayground) return [];
                                const qq = lq.sections.flatMap((qq => qq.blocks.flatMap((qq => {
                                  var Eq;
                                  return (null !== (Eq = bg(qq)) && void 0 !== Eq ? Eq : []).flatMap((qq => LE(qq.name) ? [qq.name] : []))
                                }))));
                                return [...new Set(qq)]
                              }), [Eq, lq]),
                              dq = (0, Yq.useMemo)((() => uq ? lq.sections.filter((qq => function(qq, Eq) {
                                return !!qq.heading.text.toLowerCase().includes(Eq) || qq.blocks.some((qq => (0, rq.j)(qq).toLowerCase().includes(Eq)))
                              }(qq, uq))) : lq.sections), [lq, uq]),
                              jq = (0, Yq.useMemo)((() => function(qq, Eq) {
                                return "article" !== qq.layout ? Eq.map((qq => ({
                                  anchor: qq.heading.anchor,
                                  text: qq.heading.text,
                                  level: 2
                                }))) : Eq.flatMap((qq => {
                                  const Eq = qq.blocks.flatMap((qq => "heading" === qq.kind && 3 === qq.level ? [{
                                    anchor: qq.anchor,
                                    text: qq.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: qq.heading.anchor,
                                    text: qq.heading.text,
                                    level: 2
                                  }, ...Eq]
                                }))
                              }(Eq, dq)), [Eq, dq]);
                            return (0, Yq.useEffect)((() => {
                              gq(jq)
                            }), [jq, gq]), (0, aq.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, aq.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, aq.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: lq.title || Eq.title
                                }), (0, aq.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: Eq.summary
                                }), (0, aq.jsx)(wY, {
                                  page: Eq
                                }), xq && (0, aq.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, aq.jsxs)("span", {
                                    children: [(0, aq.jsx)("strong", {
                                      children: lq.sections.length
                                    }), " ", oO[Eq.layout]]
                                  })
                                })]
                              }), "" === Eq.slug && (0, aq.jsx)(bY, {}), Aq && (0, aq.jsx)(MY, {
                                kind: Aq
                              }, Aq), Eq.hasParticlePlayground && (0, aq.jsx)(xl, {
                                ref: Bq,
                                textures: Nq
                              }), !cq && lq.intro.length > 0 && (0, aq.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: Eq.gallery ? (0, aq.jsx)(jY.Provider, {
                                  value: Eq.hasParticlePlayground ? Wq : null,
                                  children: (0, aq.jsx)(hY, {
                                    kind: Eq.gallery,
                                    content: lq,
                                    blocks: lq.intro
                                  })
                                }) : (0, aq.jsx)(Ng, {
                                  blocks: vg(lq.intro)
                                })
                              }), Eq.hasTextPlayground && (0, aq.jsx)(tl, {
                                fontAwesomeIcons: Vq
                              }), Eq.hasVoicePlayground && (0, aq.jsx)(Cl, {}), Eq.childPageIds && (0, aq.jsx)(bY, {
                                cards: Eq.childPageIds.map((qq => ({
                                  pageId: qq
                                }))),
                                label: Eq.title
                              }), xq && (0, aq.jsx)(og, {
                                className: "DocsFilterBar",
                                value: Oq,
                                placeholder: `Filter ${lq.sections.length} ${oO[Eq.layout]}\u2026`,
                                label: `Filter ${oO[Eq.layout]}`,
                                onChange: mq,
                                count: uq ? {
                                  visible: dq.length,
                                  total: lq.sections.length
                                } : null
                              }), !cq && (0, aq.jsxs)("div", {
                                className: `DocsSections Layout-${Eq.layout}`,
                                children: [dq.map((qq => (0, aq.jsx)(PO, {
                                  page: Eq,
                                  section: qq
                                }, qq.heading.anchor))), 0 === dq.length && (0, aq.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", oO[Eq.layout], " match \u201c", Oq, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const yO = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function tO(qq) {
                            let {
                              entry: Eq,
                              isActive: gq,
                              onNavigate: Yq,
                              label: lq,
                              children: mq
                            } = qq;
                            return (0, aq.jsx)("a", {
                              href: `#${Eq.anchor}`,
                              "aria-label": lq,
                              className: Oq()(`Level${Eq.level}`, {
                                Active: gq
                              }),
                              "aria-current": gq ? "location" : void 0,
                              onClick: qq => {
                                qq.preventDefault(), Yq(Eq.anchor)
                              },
                              children: mq
                            })
                          }

                          function rO(qq) {
                            let {
                              toc: Eq,
                              activeAnchor: gq,
                              onNavigate: lq
                            } = qq;
                            const mq = Math.max(0, Eq.findIndex((qq => qq.anchor === gq))),
                              xq = (0, Yq.useRef)(null),
                              Aq = (0, Yq.useRef)(!1);
                            (0, Yq.useEffect)((() => {
                              var qq, gq;
                              const Yq = null === (qq = xq.current) || void 0 === qq ? void 0 : qq.closest(".DocsToc"),
                                lq = null === (gq = xq.current) || void 0 === gq ? void 0 : gq.querySelector(".DocsTimelineNotch.Active");
                              if (!Yq || !lq) return;
                              let Oq = 0;
                              if (mq === Eq.length - 1) Oq = Yq.scrollHeight;
                              else if (mq > 0) {
                                const qq = Yq.getBoundingClientRect(),
                                  Eq = lq.getBoundingClientRect();
                                Oq = Yq.scrollTop + Eq.top + Eq.height / 2 - (qq.top + Yq.clientHeight / 2)
                              }
                              Yq.scrollTo({
                                top: Oq,
                                behavior: Aq.current ? "smooth" : "auto"
                              }), Aq.current = !0
                            }), [mq, Eq.length]);
                            const cq = [];
                            return Eq.forEach(((qq, Eq) => {
                              var gq, Yq, lq;
                              const Oq = function(qq) {
                                  const Eq = qq.trim().match(yO);
                                  return Eq ? {
                                    day: Eq[1],
                                    month: `${Eq[2]} ${Eq[3]}`
                                  } : null
                                }(qq.text),
                                mq = null !== (gq = null === Oq || void 0 === Oq ? void 0 : Oq.month) && void 0 !== gq ? gq : null;
                              null !== mq && (null === (Yq = cq.at(-1)) || void 0 === Yq ? void 0 : Yq.month) === mq || cq.push({
                                month: mq,
                                entries: []
                              }), cq.at(-1).entries.push({
                                entry: qq,
                                day: null !== (lq = null === Oq || void 0 === Oq ? void 0 : Oq.day) && void 0 !== lq ? lq : null,
                                index: Eq
                              })
                            })), (0, aq.jsx)("ol", {
                              ref: xq,
                              className: "DocsTimeline",
                              children: cq.map((qq => {
                                let {
                                  month: Eq,
                                  entries: gq
                                } = qq;
                                return (0, aq.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [Eq && (0, aq.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: Eq
                                  }), (0, aq.jsx)("ol", {
                                    children: gq.map((qq => {
                                      let {
                                        entry: Eq,
                                        day: gq,
                                        index: Yq
                                      } = qq;
                                      return (0, aq.jsx)("li", {
                                        className: Oq()("DocsTimelineNotch", {
                                          Passed: Yq < mq,
                                          Active: Yq === mq
                                        }),
                                        children: (0, aq.jsx)(tO, {
                                          entry: Eq,
                                          isActive: Yq === mq,
                                          onNavigate: lq,
                                          label: Eq.text,
                                          children: (0, aq.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== gq && void 0 !== gq ? gq : Eq.text
                                          })
                                        })
                                      }, Eq.anchor)
                                    }))
                                  })]
                                }, gq[0].entry.anchor)
                              }))
                            })
                          }

                          function vO(qq) {
                            let {
                              isChangelog: Eq,
                              toc: gq,
                              activeAnchor: Yq,
                              onNavigate: lq
                            } = qq;
                            return 0 === gq.length ? null : (0, aq.jsxs)(aq.Fragment, {
                              children: [(0, aq.jsx)("div", {
                                className: "DocsTocTitle",
                                children: Eq ? "Updates" : "On this page"
                              }), Eq ? (0, aq.jsx)(rO, {
                                toc: gq,
                                activeAnchor: Yq,
                                onNavigate: lq
                              }) : (0, aq.jsx)("ul", {
                                children: gq.map((qq => (0, aq.jsx)("li", {
                                  children: (0, aq.jsx)(tO, {
                                    entry: qq,
                                    isActive: qq.anchor === Yq,
                                    onNavigate: lq,
                                    children: qq.text.replace(/`/g, "")
                                  })
                                }, qq.anchor)))
                              })]
                            })
                          }
                          const hO = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            nO = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            bO = 20,
                            iO = 10,
                            ZO = 40,
                            fO = 120;
                          let MO;

                          function TO(qq) {
                            const Eq = qq.gallery;
                            if (!Eq) return [];
                            if (dg(Eq)) return function(qq) {
                              return Hg(qq).entries.map((qq => qq.name))
                            }(Eq).map((gq => ({
                              page: qq,
                              anchor: fg(Eq, gq),
                              title: gq,
                              kind: nO[Eq],
                              text: "",
                              listedUnder: qq.title
                            })));
                            const gq = Jq(qq);
                            return (0, rq.u)(gq).flatMap((Yq => {
                              const lq = Yq.heading ? `${qq.title} \u203a ${Yq.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : qq.title;
                              return Tg(Eq, gq, Yq.blocks).flatMap((gq => "names" !== gq.kind ? [] : gq.names.map((Yq => {
                                const Oq = gq.isSongs ? "Song" : nO[Eq];
                                return {
                                  page: qq,
                                  anchor: Yq.anchor,
                                  title: Yq.name,
                                  kind: Oq,
                                  text: "",
                                  listedUnder: lq
                                }
                              }))))
                            }))
                          }

                          function zO(qq, Eq, gq) {
                            const Yq = qq.title.toLowerCase();
                            let lq = 0;
                            if (Yq === Eq) lq = 100;
                            else if (Yq.startsWith(Eq)) lq = 80;
                            else if (Yq.includes(Eq)) lq = 60;
                            else if (gq.every((qq => Yq.includes(qq)))) lq = 45;
                            else {
                              if (!qq.text.toLowerCase().includes(Eq)) return 0;
                              lq = 20
                            }
                            return lq - Math.min(Yq.length / 10, 9) + ("Page" === qq.kind ? 8 : "Method" === qq.kind ? 3 : 0) - (qq.listedUnder ? bO : 0)
                          }

                          function SO(qq, Eq) {
                            const gq = qq.toLowerCase().indexOf(Eq),
                              Yq = Math.max(0, gq - fO / 3);
                            return `${Yq>0?"\u2026":""}${qq.slice(Yq,Yq+fO)}${Yq+fO<qq.length?"\u2026":""}`
                          }

                          function pO(qq) {
                            let {
                              text: Eq,
                              query: gq
                            } = qq;
                            const Yq = gq ? Eq.toLowerCase().indexOf(gq) : -1;
                            return -1 === Yq ? (0, aq.jsx)(aq.Fragment, {
                              children: Eq
                            }) : (0, aq.jsxs)(aq.Fragment, {
                              children: [Eq.slice(0, Yq), (0, aq.jsx)("mark", {
                                children: Eq.slice(Yq, Yq + gq.length)
                              }), Eq.slice(Yq + gq.length)]
                            })
                          }

                          function GO(qq) {
                            let {
                              basePath: Eq,
                              onClose: gq
                            } = qq;
                            const lq = (0, xq.r)(),
                              [mq, Aq] = (0, Yq.useState)(""),
                              [cq, uq] = (0, Yq.useState)(0),
                              Bq = (0, Yq.useRef)(null),
                              Wq = (0, Yq.useRef)(null),
                              Nq = mq.trim().toLowerCase(),
                              Vq = (0, Yq.useMemo)((() => {
                                const qq = (MO || (MO = Sq.flatMap((qq => {
                                  const Eq = Jq(qq);
                                  return [{
                                    page: qq,
                                    anchor: "",
                                    title: qq.title,
                                    kind: "Page",
                                    text: qq.summary
                                  }, ...Eq.sections.flatMap((Eq => {
                                    const gq = Eq.blocks.filter((qq => "paragraph" === qq.kind)).map(rq.j).join(" ").replace(/[`*]/g, ""),
                                      Yq = {
                                        page: qq,
                                        anchor: Eq.heading.anchor,
                                        title: Eq.heading.text.replace(/`/g, ""),
                                        kind: hO[qq.layout],
                                        text: gq
                                      },
                                      lq = Eq.blocks.flatMap((Eq => "article" === qq.layout && "heading" === Eq.kind && 3 === Eq.level ? [{
                                        page: qq,
                                        anchor: Eq.anchor,
                                        title: Eq.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Yq.title
                                      }] : []));
                                    return [Yq, ...lq]
                                  })), ...TO(qq)]
                                }))), MO);
                                if (!Nq) return qq.filter((qq => "Page" === qq.kind));
                                const Eq = Nq.split(/\s+/);
                                let gq = 0;
                                return qq.map((qq => ({
                                  entry: qq,
                                  score: zO(qq, Nq, Eq)
                                }))).filter((qq => qq.score > 0)).sort(((qq, Eq) => Eq.score - qq.score)).filter((qq => !qq.entry.listedUnder || (gq++, gq <= iO))).slice(0, ZO).map((qq => qq.entry))
                              }), [Nq]);
                            (0, Yq.useEffect)((() => {
                              uq(0)
                            }), [Nq]), (0, Yq.useEffect)((() => {
                              const qq = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === qq || void 0 === qq || qq.focus()
                              }
                            }), []), (0, Yq.useEffect)((() => {
                              var qq, Eq;
                              null === (qq = Bq.current) || void 0 === qq || null === (Eq = qq.querySelector(".Active")) || void 0 === Eq || Eq.scrollIntoView({
                                block: "nearest"
                              })
                            }), [cq]);
                            const jq = qq => {
                              lq(Fq(Eq, qq.page, qq.anchor)), gq()
                            };
                            return (0, aq.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: qq => {
                                qq.target === qq.currentTarget && gq()
                              },
                              children: (0, aq.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: qq => {
                                  qq.target !== Wq.current && qq.preventDefault()
                                },
                                onKeyDown: qq => {
                                  if ("Escape" === qq.key) gq();
                                  else if ("Tab" === qq.key) {
                                    var Eq;
                                    qq.preventDefault(), null === (Eq = Wq.current) || void 0 === Eq || Eq.focus()
                                  }
                                },
                                children: [(0, aq.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, aq.jsx)(dq, {
                                    name: "magnifying-glass"
                                  }), (0, aq.jsx)("input", {
                                    ref: Wq,
                                    autoFocus: !0,
                                    value: mq,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Vq.length > 0 ? `DocsSearchResult-${cq}` : void 0,
                                    onChange: qq => {
                                      Aq(qq.target.value)
                                    },
                                    onKeyDown: qq => {
                                      if ("ArrowDown" === qq.key || "ArrowUp" === qq.key) {
                                        qq.preventDefault();
                                        const Eq = "ArrowDown" === qq.key ? 1 : -1;
                                        uq((cq + Eq + Vq.length) % Math.max(Vq.length, 1))
                                      } else "Enter" === qq.key && Vq[cq] && jq(Vq[cq])
                                    }
                                  }), (0, aq.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, aq.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Bq,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Nq && (0, aq.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Vq.map(((qq, Eq) => {
                                    var gq;
                                    return (0, aq.jsxs)("li", {
                                      id: `DocsSearchResult-${Eq}`,
                                      role: "option",
                                      "aria-selected": Eq === cq,
                                      className: Oq()("DocsSearchResult", {
                                        Active: Eq === cq
                                      }),
                                      onMouseMove: () => {
                                        uq(Eq)
                                      },
                                      onClick: () => {
                                        jq(qq)
                                      },
                                      children: [(0, aq.jsx)(dq, {
                                        name: qq.page.icon
                                      }), (0, aq.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, aq.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, aq.jsx)(pO, {
                                            text: qq.title,
                                            query: Nq
                                          })
                                        }), qq.text && (0, aq.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, aq.jsx)(pO, {
                                            text: SO(qq.text, Nq),
                                            query: Nq
                                          })
                                        })]
                                      }), (0, aq.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === qq.kind ? "Page" : null !== (gq = qq.listedUnder) && void 0 !== gq ? gq : `${qq.kind} \xb7 ${qq.page.title}`
                                      })]
                                    }, `${qq.page.id}#${qq.anchor}`)
                                  })), Nq && 0 === Vq.length && (0, aq.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", mq, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function LO(qq, Eq) {
                            if (Eq < 10) return `${qq.toFixed(1)}s`;
                            const gq = Math.floor(qq);
                            return `${Math.floor(gq/60)}:${String(gq%60).padStart(2,"0")}`
                          }

                          function JO() {
                            const qq = uY((qq => qq.track)),
                              Eq = uY((qq => qq.volume)),
                              [gq, lq] = (0, Yq.useState)(0),
                              mq = (0, Yq.useRef)(EY);
                            if ((0, Yq.useEffect)((() => {
                                if (!qq) return;
                                if (lq(aY()), "playing" !== qq.status) return;
                                let Eq = 0;
                                const gq = () => {
                                  lq(aY()), Eq = requestAnimationFrame(gq)
                                };
                                return Eq = requestAnimationFrame(gq), () => {
                                  cancelAnimationFrame(Eq)
                                }
                              }), [qq]), !qq) return null;
                            const xq = "paused" !== qq.status,
                              Aq = Math.min(gq, qq.duration);
                            return (0, aq.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, aq.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, aq.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": xq ? `Pause ${qq.name}` : `Play ${qq.name}`,
                                  onClick: NY,
                                  children: (0, aq.jsx)(dq, {
                                    name: xq ? "pause" : "play"
                                  })
                                }), (0, aq.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, aq.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, aq.jsx)("code", {
                                      children: qq.name
                                    }), (0, aq.jsx)("span", {
                                      children: qq.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, aq.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, aq.jsx)("span", {
                                      children: LO(Aq, qq.duration)
                                    }), (0, aq.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: qq.duration || 1,
                                      step: .01,
                                      value: Aq,
                                      disabled: 0 === qq.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${LO(Aq,qq.duration)} of ${LO(qq.duration,qq.duration)}`,
                                      onChange: qq => {
                                        const Eq = Number(qq.target.value);
                                        ! function(qq) {
                                          var Eq;
                                          mY = qq, null === (Eq = lY) || void 0 === Eq || Eq.seek(qq)
                                        }(Eq), lq(Eq)
                                      }
                                    }), (0, aq.jsx)("span", {
                                      children: qq.duration > 0 ? LO(qq.duration, qq.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, aq.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, aq.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === Eq ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === Eq ? VY(mq.current) : (mq.current = Eq, VY(0))
                                    },
                                    children: (0, aq.jsx)(dq, {
                                      name: "volume",
                                      className: Oq()({
                                        Muted: 0 === Eq
                                      })
                                    })
                                  }), (0, aq.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: Eq,
                                    "aria-label": "Volume",
                                    onChange: qq => {
                                      VY(Number(qq.target.value))
                                    }
                                  })]
                                }), (0, aq.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var Eq;
                                    null === (Eq = document.querySelector(`[data-docs-track="${CSS.escape(gY(qq.name,qq.isSong))}"]`)) || void 0 === Eq || Eq.focus(), dY()
                                  },
                                  children: (0, aq.jsx)(dq, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var kO = gq(38);
                          const RO = "docsTheme",
                            UO = window.matchMedia("(prefers-color-scheme: light)");

                          function FO(qq) {
                            let {
                              theme: Eq,
                              onChange: gq
                            } = qq;
                            const Yq = "dark" === Eq ? "light" : "dark";
                            return (0, aq.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Yq} theme`,
                              title: `Switch to ${Yq} theme`,
                              onClick: () => {
                                gq(Yq)
                              },
                              children: (0, aq.jsx)(dq, {
                                name: "dark" === Eq ? "moon" : "sun"
                              })
                            })
                          }
                          const sO = "https://github.com/Bloxdy/code-api",
                            XO = "https://discord.gg/playbloxd",
                            wO = 180,
                            KO = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function CO(qq) {
                            let {
                              basePath: Eq,
                              activePageId: gq,
                              onNavigate: Yq
                            } = qq;
                            return (0, aq.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: pq.map((qq => (0, aq.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, aq.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: qq.title
                                }), qq.pageIds.map((qq => {
                                  var lq;
                                  const xq = Gq(qq);
                                  return (0, aq.jsxs)(mq.c, {
                                    to: Fq(Eq, xq),
                                    className: Oq()("DocsNavLink", {
                                      Active: xq.id === gq
                                    }),
                                    "aria-current": xq.id === gq ? "page" : void 0,
                                    onClick: Yq,
                                    children: [(0, aq.jsx)(dq, {
                                      name: xq.icon
                                    }), (0, aq.jsx)("span", {
                                      children: null !== (lq = xq.navTitle) && void 0 !== lq ? lq : xq.title
                                    })]
                                  }, xq.id)
                                }))]
                              }, qq.title)))
                            })
                          }

                          function IO(qq) {
                            let {
                              basePath: Eq,
                              pageId: gq
                            } = qq;
                            const Yq = pq.flatMap((qq => qq.pageIds)),
                              lq = Yq.indexOf(gq),
                              Oq = lq > 0 ? Gq(Yq[lq - 1]) : null,
                              xq = lq < Yq.length - 1 ? Gq(Yq[lq + 1]) : null;
                            return (0, aq.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Oq ? (0, aq.jsxs)(mq.c, {
                                className: "DocsPagerLink Previous",
                                to: Fq(Eq, Oq),
                                children: [(0, aq.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, aq.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Oq.title
                                })]
                              }) : (0, aq.jsx)("span", {}), xq && (0, aq.jsxs)(mq.c, {
                                className: "DocsPagerLink Next",
                                to: Fq(Eq, xq),
                                children: [(0, aq.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, aq.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: xq.title
                                })]
                              })]
                            })
                          }

                          function eO(qq) {
                            let {
                              basePath: Eq,
                              embedded: gq = !1
                            } = qq;
                            const {
                              pageSlug: lq = ""
                            } = (0, xq.v)(), cq = (0, xq.q)(), uq = (0, xq.r)(), Bq = (Wq = lq, Sq.find((qq => qq.slug === Wq)));
                            var Wq;
                            const [Nq, Vq] = function() {
                              const [qq, Eq] = (0, Yq.useState)((() => {
                                const qq = kO.i.getItem(RO);
                                return "dark" === qq || "light" === qq ? qq : null
                              })), [gq, lq] = (0, Yq.useState)(UO.matches ? "light" : "dark");
                              return (0, Yq.useEffect)((() => {
                                const qq = () => {
                                  lq(UO.matches ? "light" : "dark")
                                };
                                return UO.addEventListener("change", qq), () => {
                                  UO.removeEventListener("change", qq)
                                }
                              }), []), [null !== qq && void 0 !== qq ? qq : gq, qq => {
                                kO.i.setItem(RO, qq), Eq(qq)
                              }]
                            }(), [jq, Hq] = (0, Yq.useState)(null), [oq, Pq] = (0, Yq.useState)(!1), [Qq, yq] = (0, Yq.useState)(!1), [tq, vq] = (0, Yq.useState)([]), hq = function(qq, Eq) {
                              const [gq, lq] = (0, Yq.useState)("");
                              return (0, Yq.useEffect)((() => {
                                if (!Eq) return;
                                let gq = 0;
                                const Yq = () => {
                                    var Yq, Oq;
                                    gq = 0;
                                    const mq = Eq.getBoundingClientRect().top + wO;
                                    let xq = null !== (Yq = null === (Oq = qq[0]) || void 0 === Oq ? void 0 : Oq.anchor) && void 0 !== Yq ? Yq : "";
                                    for (const Eq of qq) {
                                      const qq = document.getElementById(Eq.anchor);
                                      qq && qq.getBoundingClientRect().top <= mq && (xq = Eq.anchor)
                                    }
                                    Eq.scrollTop + Eq.clientHeight >= Eq.scrollHeight - 2 && Eq.scrollTop > 0 && qq.length > 0 && (xq = qq[qq.length - 1].anchor), lq(xq)
                                  },
                                  Oq = () => {
                                    gq || (gq = requestAnimationFrame(Yq))
                                  };
                                return Yq(), Eq.addEventListener("scroll", Oq, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(gq), Eq.removeEventListener("scroll", Oq)
                                }
                              }), [qq, Eq]), gq
                            }(tq, jq), nq = "" === lq && cq.hash ? function(qq) {
                              const Eq = (0, rq.s)(qq);
                              if (kq(Gq("welcome"), Eq)) return null;
                              const gq = Object.hasOwn(Uq, Eq) ? Uq[Eq] : null;
                              if (gq) return {
                                page: Gq(gq.pageId),
                                anchor: gq.anchor
                              };
                              const Yq = Gq("readme");
                              return kq(Yq, Eq) ? {
                                page: Yq,
                                anchor: Eq
                              } : Rq(`#${Eq}`)
                            }(cq.hash) : null;
                            (0, Yq.useEffect)((() => (Aq.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              Aq.b.set({
                                musicOnFromPage: !0
                              }), dY()
                            })), []), (0, Yq.useEffect)((() => {
                              const qq = qq => {
                                const Eq = qq.target;
                                if (Eq.closest(".DocsTextDialog")) return;
                                const gq = Eq.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(Eq.tagName);
                                "k" === qq.key && (qq.metaKey || qq.ctrlKey) || "/" === qq.key && !gq ? (qq.preventDefault(), yq(!0)) : "Escape" === qq.key && Pq(!1)
                              };
                              return window.addEventListener("keydown", qq), () => {
                                window.removeEventListener("keydown", qq)
                              }
                            }), []);
                            const bq = (0, Yq.useRef)(null);
                            (0, Yq.useLayoutEffect)((() => {
                              var qq, Eq;
                              if (!jq) return;
                              const gq = bq.current === cq.pathname;
                              bq.current = cq.pathname;
                              const Yq = (0, rq.s)(cq.hash),
                                lq = Yq ? document.getElementById(Yq) : null;
                              if (null === (qq = jq.querySelector(".DocsTargeted")) || void 0 === qq || qq.classList.remove("DocsTargeted"), null === lq || void 0 === lq || null === (Eq = lq.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === Eq || Eq.classList.add("DocsTargeted"), lq) {
                                var Oq;
                                const qq = lq.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Oq = lq.closest(".DocsChangelogEntry")) && void 0 !== Oq ? Oq : lq).scrollIntoView({
                                  block: qq ? "center" : "start",
                                  behavior: gq ? "smooth" : "auto"
                                })
                              } else gq || jq.scrollTo({
                                top: 0
                              })
                            }), [jq, cq.pathname, cq.hash, cq.key]);
                            const iq = (0, Yq.useCallback)((() => {
                                Pq(!1)
                              }), []),
                              Zq = (0, Yq.useCallback)((qq => {
                                uq({
                                  hash: qq
                                })
                              }), [uq]);
                            if (nq) return (0, aq.jsx)(xq.c, {
                              replace: !0,
                              to: Fq(Eq, nq.page, nq.anchor)
                            });
                            if (!Bq) return (0, aq.jsx)(xq.c, {
                              replace: !0,
                              to: Eq
                            });
                            const fq = gq ? "div" : "main";
                            return (0, aq.jsx)(NE.Provider, {
                              value: Eq,
                              children: (0, aq.jsx)(aE.Provider, {
                                value: jq,
                                children: (0, aq.jsxs)("div", {
                                  ref: Hq,
                                  className: Oq()("DocsSite", {
                                    Embedded: gq,
                                    NavOpen: oq
                                  }),
                                  "data-theme": Nq,
                                  children: [(0, aq.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, aq.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": oq ? "Close menu" : "Open menu",
                                      "aria-expanded": oq,
                                      onClick: () => {
                                        Pq(!oq)
                                      },
                                      children: (0, aq.jsx)(dq, {
                                        name: oq ? "cross" : "menu"
                                      })
                                    }), (0, aq.jsxs)(mq.c, {
                                      to: Eq,
                                      className: "DocsBrand",
                                      children: [(0, aq.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, aq.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, aq.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, aq.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        yq(!0)
                                      },
                                      children: [(0, aq.jsx)(dq, {
                                        name: "magnifying-glass"
                                      }), (0, aq.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, aq.jsxs)("kbd", {
                                        children: [KO ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, aq.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, aq.jsxs)("a", {
                                        href: XO,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, aq.jsx)(dq, {
                                          name: "discord"
                                        }), (0, aq.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, aq.jsxs)("a", {
                                        href: sO,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, aq.jsx)(dq, {
                                          name: "external-link"
                                        }), (0, aq.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !gq && (0, aq.jsxs)(mq.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, aq.jsx)(dq, {
                                          name: "play"
                                        }), (0, aq.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, aq.jsx)(FO, {
                                        theme: Nq,
                                        onChange: Vq
                                      })]
                                    })]
                                  }), (0, aq.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, aq.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, aq.jsx)(CO, {
                                        basePath: Eq,
                                        activePageId: Bq.id,
                                        onNavigate: iq
                                      })
                                    }), (0, aq.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: iq
                                    }), (0, aq.jsxs)(fq, {
                                      className: "DocsMain",
                                      children: [(0, aq.jsx)(QO, {
                                        page: Bq,
                                        onTocChange: vq
                                      }, Bq.id), (0, aq.jsx)(IO, {
                                        basePath: Eq,
                                        pageId: Bq.id
                                      })]
                                    }), (0, aq.jsx)("aside", {
                                      className: Oq()("DocsToc", {
                                        Timeline: "changelog" === Bq.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, aq.jsx)(vO, {
                                        isChangelog: "changelog" === Bq.layout,
                                        toc: tq,
                                        activeAnchor: hq,
                                        onNavigate: Zq
                                      })
                                    })]
                                  }), (0, aq.jsx)(JO, {}), Qq && (0, aq.jsx)(GO, {
                                    basePath: Eq,
                                    onClose: () => {
                                      yq(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4565: (qq, Eq, gq) => {
                          gq.d(Eq, {
                            A: () => Wq,
                            d: () => Yq,
                            g: () => mq,
                            j: () => dq,
                            n: () => Vq,
                            p: () => xq,
                            s: () => lq,
                            t: () => Oq,
                            u: () => aq,
                            w: () => Nq
                          });
                          const Yq = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function lq(qq) {
                            try {
                              return decodeURIComponent(qq.slice(1))
                            } catch {
                              return qq.slice(1)
                            }
                          }

                          function Oq(qq) {
                            return qq.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const mq = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Yq.source}`, "g");

                          function xq(qq, Eq) {
                            return 2 === qq.length ? Eq.replace(/^ (.*) $/, "$1") : Eq
                          }

                          function Aq(qq) {
                            return "" === qq.trim()
                          }

                          function cq(qq) {
                            const Eq = [];
                            for (const gq of qq.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Eq.length > 0 && Eq[Eq.length - 1].endsWith("\\") ? Eq[Eq.length - 1] += `|${gq}` : Eq.push(gq);
                            return Eq.map((qq => qq.trim().replaceAll("\\|", "|")))
                          }
                          const uq = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Bq(qq) {
                            const Eq = [],
                              gq = [{
                                indent: -1,
                                items: Eq
                              }];
                            let Yq = null;
                            for (const lq of qq) {
                              const qq = lq.match(uq);
                              if (!qq) {
                                Yq && (Yq.text += ` ${lq.trim()}`);
                                continue
                              }
                              const Eq = qq[1].replace(/\t/g, "  ").length;
                              for (; Eq <= gq[gq.length - 1].indent;) gq.pop();
                              Yq = {
                                text: qq[3].trim(),
                                children: []
                              }, gq[gq.length - 1].items.push(Yq), gq.push({
                                indent: Eq,
                                items: Yq.children
                              })
                            }
                            return Eq
                          }

                          function Wq(qq) {
                            const Eq = qq.replace(/\r\n/g, "\n").split("\n"),
                              gq = [];
                            let Yq = 0;
                            for (; Yq < Eq.length;) {
                              const qq = Eq[Yq];
                              if (Aq(qq)) {
                                Yq++;
                                continue
                              }
                              const lq = qq.match(/^\s*```\s*(\w*)\s*$/);
                              if (lq) {
                                const qq = [];
                                for (Yq++; Yq < Eq.length && !/^\s*```\s*$/.test(Eq[Yq]);) qq.push(Eq[Yq]), Yq++;
                                Yq++, gq.push({
                                  kind: "code",
                                  lang: lq[1] || "text",
                                  code: qq.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const mq = qq.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (mq) {
                                const qq = mq[2].trim();
                                gq.push({
                                  kind: "heading",
                                  level: mq[1].length,
                                  text: qq,
                                  anchor: Oq(qq)
                                }), Yq++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(qq)) {
                                gq.push({
                                  kind: "rule"
                                }), Yq++;
                                continue
                              }
                              if (qq.trim().startsWith("|") && Yq + 1 < Eq.length && /^\s*\|[\s:|-]+\|\s*$/.test(Eq[Yq + 1])) {
                                const lq = cq(qq),
                                  Oq = [];
                                for (Yq += 2; Yq < Eq.length && Eq[Yq].trim().startsWith("|");) Oq.push(cq(Eq[Yq])), Yq++;
                                gq.push({
                                  kind: "table",
                                  header: lq,
                                  rows: Oq
                                });
                                continue
                              }
                              if (qq.startsWith(">")) {
                                const qq = [];
                                for (; Yq < Eq.length && Eq[Yq].startsWith(">");) qq.push(Eq[Yq].replace(/^>\s?/, "")), Yq++;
                                gq.push({
                                  kind: "quote",
                                  blocks: Wq(qq.join("\n"))
                                });
                                continue
                              }
                              if (uq.test(qq)) {
                                const lq = [],
                                  Oq = /^\s*\d+\./.test(qq);
                                for (; Yq < Eq.length && !Aq(Eq[Yq]) && (uq.test(Eq[Yq]) || /^\s+\S/.test(Eq[Yq]));) lq.push(Eq[Yq]), Yq++;
                                gq.push({
                                  kind: "list",
                                  ordered: Oq,
                                  items: Bq(lq)
                                });
                                continue
                              }
                              const xq = [];
                              for (; Yq < Eq.length && !Aq(Eq[Yq]) && !/^\s*```/.test(Eq[Yq]) && !/^#{1,6}\s/.test(Eq[Yq]) && !Eq[Yq].startsWith(">") && !uq.test(Eq[Yq]) && (!Eq[Yq].trim().startsWith("|") || 0 !== xq.length);) xq.push(Eq[Yq].trim()), Yq++;
                              0 === xq.length && (xq.push(Eq[Yq].trim()), Yq++), gq.push({
                                kind: "paragraph",
                                text: xq.join(" ")
                              })
                            }
                            return gq
                          }

                          function Nq(qq) {
                            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const gq = Wq(qq);
                            let Yq = "";
                            const lq = [],
                              Oq = [],
                              mq = new Map;
                            for (const cq of gq) {
                              if ("heading" === cq.kind) {
                                var xq;
                                const qq = (null !== (xq = mq.get(cq.anchor)) && void 0 !== xq ? xq : 0) + 1;
                                mq.set(cq.anchor, qq), qq > 1 && (cq.anchor = `${cq.anchor}-${qq}`)
                              }
                              if ("heading" === cq.kind && 1 === cq.level && !Yq) {
                                Yq = cq.text;
                                continue
                              }
                              if ("heading" === cq.kind && cq.level <= Eq) {
                                Oq.push({
                                  heading: cq,
                                  blocks: []
                                });
                                continue
                              }
                              const qq = Oq.at(-1);
                              qq ? qq.blocks.push(cq) : lq.push(cq)
                            }
                            const Aq = qq => {
                              for (;
                                "rule" === (null === (Eq = qq.at(-1)) || void 0 === Eq ? void 0 : Eq.kind);) {
                                var Eq;
                                qq.pop()
                              }
                            };
                            Aq(lq);
                            for (const cq of Oq) Aq(cq.blocks);
                            return {
                              title: Yq,
                              intro: lq,
                              sections: Oq
                            }
                          }

                          function aq(qq) {
                            return [{
                              heading: null,
                              blocks: qq.intro
                            }, ...qq.sections.map((qq => ({
                              heading: qq.heading,
                              blocks: qq.blocks
                            })))]
                          }

                          function Vq(qq) {
                            return qq.flatMap((qq => "code" === qq.kind ? [qq] : "quote" === qq.kind ? Vq(qq.blocks) : []))
                          }

                          function dq(qq) {
                            switch (qq.kind) {
                              case "heading":
                              case "paragraph":
                                return qq.text;
                              case "code":
                                return qq.code;
                              case "table":
                                return [qq.header, ...qq.rows].map((qq => qq.join(" "))).join(" ");
                              case "list": {
                                const Eq = qq => qq.map((qq => `${qq.text} ${Eq(qq.children)}`)).join(" ");
                                return Eq(qq.items)
                              }
                              case "quote":
                                return qq.blocks.map(dq).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4656: (qq, Eq, gq) => {
                          gq.d(Eq, {
                            e: () => xq
                          });
                          var Yq = gq(57),
                            lq = gq(296),
                            Oq = gq(1895),
                            mq = gq(1070);

                          function xq(qq) {
                            let {
                              text: Eq
                            } = qq;
                            const gq = [];
                            let xq = "";
                            return (0, lq.Zb)(Eq).forEach(((qq, Eq) => {
                              if ("string" === typeof qq || !(0, Oq.i)(qq.icon)) return void(xq += "string" === typeof qq ? qq : qq.icon);
                              const lq = Math.max(0, xq.trimEnd().search(/\S{1,12}$/));
                              gq.push((0, mq.jsxs)(Yq.Fragment, {
                                children: [xq.slice(0, lq), (0, mq.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [xq.slice(lq), (0, mq.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": qq.icon,
                                    children: (0, mq.jsx)(Oq.e, {
                                      itemName: qq.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, Eq)), xq = ""
                            })), gq.push(xq), (0, mq.jsx)(mq.Fragment, {
                              children: gq
                            })
                          }
                        }, 4588: (qq, Eq, gq) => {
                          gq.d(Eq, {
                            f: () => Hq,
                            d: () => jq
                          });
                          var Yq = gq(57),
                            lq = gq(1416),
                            Oq = gq(1876),
                            mq = gq(4597),
                            xq = gq(1070);
                          const Aq = (0, Yq.memo)((function(qq) {
                            let {
                              initialParameters: Eq
                            } = qq;
                            const gq = (0, Yq.useRef)(null),
                              lq = (0, Yq.useRef)(null),
                              Aq = (0, Yq.useRef)(0),
                              cq = (0, Yq.useRef)(null),
                              uq = Eq.description,
                              Bq = Eq.zY,
                              {
                                scale: Wq,
                                rotation: Nq
                              } = null !== Eq && void 0 !== Eq ? Eq : {},
                              aq = (0, mq.f)();
                            return (0, Yq.useEffect)((() => {
                              const qq = aq.onFrame((() => {
                                const qq = aq.getState();
                                if (!qq.isActive || !gq.current || !lq.current) return;
                                const Eq = qq.state;
                                if (gq.current.value = Eq.progress, Eq.clickCount > Aq.current) {
                                  Aq.current = Eq.clickCount;
                                  const qq = lq.current;
                                  qq.classList.add("pulse"), cq.current = setTimeout((() => {
                                    qq.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(cq.current), qq()
                              }
                            }), [aq]), (0, xq.jsx)(xq.Fragment, {
                              children: (0, xq.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Wq && {
                                    "--scale": Wq
                                  },
                                  ...null !== Nq && {
                                    "--rotation": `${Nq}deg`
                                  }
                                },
                                children: [(0, xq.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: gq
                                }), (0, xq.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: lq,
                                  children: (0, xq.jsx)(Oq.c, {
                                    text: [{
                                      icon: Bq
                                    }]
                                  })
                                }), (0, xq.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, xq.jsx)(Oq.c, {
                                    text: uq
                                  })
                                })]
                              })
                            })
                          }));
                          var cq = gq(1018),
                            uq = gq.n(cq);
                          const Bq = 2 * Math.PI * 90,
                            Wq = (0, Yq.memo)((function(qq) {
                              let {
                                initialParameters: Eq
                              } = qq;
                              const gq = (0, Yq.useRef)(null),
                                lq = (0, Yq.useRef)(null),
                                Aq = (0, Yq.useRef)(null),
                                cq = Eq.label,
                                Wq = Eq.icon,
                                Nq = Eq.GY,
                                {
                                  scale: aq,
                                  rotation: Vq,
                                  LY: dq
                                } = null !== Eq && void 0 !== Eq ? Eq : {},
                                jq = (0, mq.f)();
                              return (0, Yq.useEffect)((() => {
                                const qq = jq.onFrame((() => {
                                  var qq, Eq;
                                  const Yq = jq.getState();
                                  if (!Yq.isActive || !lq.current) return;
                                  const Oq = Yq.state,
                                    mq = null !== (qq = Oq.timeRemaining) && void 0 !== qq ? qq : 0,
                                    xq = null !== (Eq = Oq.pY) && void 0 !== Eq ? Eq : 1,
                                    cq = Bq * (1 - mq / xq);
                                  lq.current.style.strokeDashoffset = `${cq}`, gq.current && (gq.current.style.opacity = mq > 0 ? "1" : "0"), Aq.current && Nq && (Aq.current.textContent = `${(mq/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  qq()
                                }
                              }), [jq, Nq]), (0, xq.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: gq,
                                style: {
                                  ...null !== aq && {
                                    "--scale": aq
                                  },
                                  ...null !== Vq && {
                                    "--rotation": `${Vq}deg`
                                  }
                                },
                                children: [(0, xq.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, xq.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, xq.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, xq.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Bq,
                                      ref: lq
                                    })]
                                  }), (0, xq.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, xq.jsx)(Oq.c, {
                                      text: [{
                                        icon: Wq
                                      }],
                                      className: uq()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: dq
                                      })
                                    })
                                  })]
                                }), (0, xq.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, xq.jsx)(Oq.c, {
                                    text: cq,
                                    className: "QTETimedClickLabelText"
                                  }), Nq && (0, xq.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: Aq
                                  })]
                                })]
                              })
                            })),
                            Nq = (0, Yq.memo)((function(qq) {
                              let {
                                initialParameters: Eq
                              } = qq;
                              const gq = (0, Yq.useRef)(null),
                                lq = (0, Yq.useRef)(null),
                                Aq = (0, Yq.useRef)(null),
                                cq = (0, Yq.useRef)(!1),
                                uq = Eq.description,
                                Bq = null === Eq || void 0 === Eq ? void 0 : Eq.icon,
                                Wq = (0, mq.f)();
                              return (0, Yq.useEffect)((() => {
                                const qq = Wq.onFrame((() => {
                                  const qq = Wq.getState();
                                  if (!qq.isActive) return;
                                  const Eq = qq.state;
                                  if (gq.current) {
                                    const qq = 100 * (Eq.catchZonePosition - Eq.kY / 2);
                                    gq.current.style.left = `${qq}%`, gq.current.style.width = 100 * Eq.kY + "%", Eq.isCatching !== cq.current && (cq.current = Eq.isCatching, Eq.isCatching ? gq.current.classList.add("catching") : gq.current.classList.remove("catching"))
                                  }
                                  lq.current && (lq.current.style.left = 100 * Eq.moverPosition + "%"), Aq.current && (Aq.current.value = Eq.progress)
                                }));
                                return () => {
                                  qq()
                                }
                              }), [Wq]), (0, xq.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, xq.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, xq.jsx)(Oq.c, {
                                    text: uq
                                  })
                                }), (0, xq.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: Aq
                                }), (0, xq.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, xq.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: gq
                                  }), (0, xq.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: lq,
                                    children: (0, xq.jsx)("span", {
                                      children: Bq && (0, xq.jsx)(Oq.c, {
                                        text: [{
                                          icon: Bq,
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
                          var aq = gq(598);
                          const Vq = (0, Yq.memo)((function(qq) {
                              let {
                                initialParameters: Eq
                              } = qq;
                              const gq = (0, Yq.useRef)(null),
                                lq = Eq.label,
                                Aq = Eq.KY,
                                {
                                  icon: cq,
                                  scale: uq,
                                  rotation: Bq
                                } = null !== Eq && void 0 !== Eq ? Eq : {},
                                Wq = 100 * (.5 - Aq / 2),
                                Nq = 100 * Aq,
                                Vq = (0, mq.f)();
                              return (0, Yq.useEffect)((() => {
                                const qq = Vq.onFrame((() => {
                                  const qq = Vq.getState();
                                  if (!qq.isActive || !gq.current) return;
                                  const Eq = qq.state;
                                  gq.current.style.left = 100 * Eq.markerPosition + "%"
                                }));
                                return () => {
                                  qq()
                                }
                              }), [Vq]), (0, xq.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, aq.H)(uq) && {
                                    "--scale": uq
                                  },
                                  ...!(0, aq.H)(Bq) && {
                                    "--rotation": `${Bq}deg`
                                  }
                                },
                                children: [cq && (0, xq.jsx)(Oq.c, {
                                  text: [{
                                    icon: cq
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, xq.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, xq.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Wq}%`,
                                      width: `${Nq}%`
                                    }
                                  }), (0, xq.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: gq
                                  })]
                                }), (0, xq.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, xq.jsx)(Oq.c, {
                                    text: lq
                                  })
                                })]
                              })
                            })),
                            dq = (0, Yq.memo)((function(qq) {
                              let {
                                initialParameters: Eq
                              } = qq;
                              const gq = (0, Yq.useRef)(null),
                                [lq, Aq] = (0, Yq.useState)((() => new Array(Eq.IY).fill("pending"))),
                                [cq, uq] = (0, Yq.useState)((() => {
                                  const qq = Eq.ql;
                                  return (0, aq.H)(qq) || qq <= 0 ? [] : new Array(qq).fill("pending")
                                })),
                                Bq = Eq.label,
                                {
                                  icon: Wq
                                } = Eq,
                                Nq = (0, Yq.useRef)(0),
                                Vq = (0, Yq.useRef)(0),
                                dq = (0, Yq.useRef)([]),
                                jq = (0, mq.f)();
                              return (0, Yq.useEffect)((() => {
                                const qq = jq.onFrame((() => {
                                  const qq = jq.getState();
                                  if (!qq.isActive || !gq.current) return;
                                  const Eq = qq.state,
                                    Yq = 30 + 60 * Eq.outerCircleProgress;
                                  if (gq.current.setAttribute("r", String(Yq)), !0 === Eq.lastClickResult && Eq.successes > Nq.current) {
                                    gq.current.classList.remove("QTERhythmClickOuterCircle--miss"), gq.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const qq = setTimeout((() => {
                                      var qq;
                                      null === (qq = gq.current) || void 0 === qq || qq.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    dq.current.push(qq)
                                  } else if (!1 === Eq.lastClickResult && Eq.misses > Vq.current) {
                                    gq.current.classList.remove("QTERhythmClickOuterCircle--hit"), gq.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const qq = setTimeout((() => {
                                      var qq;
                                      null === (qq = gq.current) || void 0 === qq || qq.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    dq.current.push(qq)
                                  }
                                  Eq.successes === Nq.current && Eq.misses === Vq.current || (Nq.current = Eq.successes, Vq.current = Eq.misses, Aq((qq => {
                                    const gq = [...qq];
                                    for (let Yq = 0; Yq < Eq.IY; Yq++) gq[Yq] = Yq < Eq.successes ? "success" : "pending";
                                    return gq
                                  })), uq((qq => {
                                    if (0 === qq.length) return qq;
                                    const gq = [...qq];
                                    for (let Yq = 0; Yq < gq.length; Yq++) gq[Yq] = Yq < Eq.misses ? "miss" : "pending";
                                    return gq
                                  })))
                                }));
                                return () => {
                                  qq();
                                  for (const qq of dq.current) clearTimeout(qq);
                                  dq.current = []
                                }
                              }), [jq]), (0, xq.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, xq.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: lq.map(((qq, Eq) => (0, xq.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === qq ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, Eq)))
                                }), (0, xq.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, xq.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, xq.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, xq.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: gq
                                    })]
                                  }), Wq && (0, xq.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, xq.jsx)(Oq.c, {
                                      text: [{
                                        icon: Wq
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), cq.length > 0 && (0, xq.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: cq.map(((qq, Eq) => (0, xq.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === qq ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, Eq)))
                                }), (0, xq.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, xq.jsx)(Oq.c, {
                                    text: Bq
                                  })
                                })]
                              })
                            }));

                          function jq(qq) {
                            let {
                              qte: Eq
                            } = qq;
                            switch (Eq.type) {
                              case "progressBar":
                                return (0, xq.jsx)(Aq, {
                                  initialParameters: Eq.parameters
                                });
                              case "timedClick":
                                return (0, xq.jsx)(Wq, {
                                  initialParameters: Eq.parameters
                                });
                              case "gravityBar":
                                return (0, xq.jsx)(Nq, {
                                  initialParameters: Eq.parameters
                                });
                              case "precisionBar":
                                return (0, xq.jsx)(Vq, {
                                  initialParameters: Eq.parameters
                                });
                              case "rhythmClick":
                                return (0, xq.jsx)(dq, {
                                  initialParameters: Eq.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Hq = (0, Yq.memo)((function() {
                            const [qq, Eq] = (0, Yq.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, lq.f)("qteStateUpdated", (qq => {
                              Eq(qq)
                            })), qq.isActive && qq.type ? (0, xq.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, xq.jsx)(jq, {
                                qte: qq
                              })
                            }) : null
                          }))
                        }, 4597: (qq, Eq, gq) => {
                          gq.d(Eq, {
                            b: () => xq,
                            f: () => Aq
                          });
                          var Yq = gq(57),
                            lq = gq(1283),
                            Oq = gq(4606);
                          const mq = {
                              getState: () => Oq.b.getCurrentState(),
                              onFrame: lq.s
                            },
                            xq = (0, Yq.createContext)(mq);

                          function Aq() {
                            return (0, Yq.useContext)(xq)
                          }
                        }, 4662: (qq, Eq, gq) => {
                          gq.d(Eq, {
                            b: () => Tq,
                            f: () => Mq
                          });
                          var Yq = gq(4671),
                            lq = gq(296);
                          const Oq = 120,
                            mq = 260,
                            xq = 1.15,
                            Aq = 1.2,
                            cq = 2,
                            uq = 1.08,
                            Bq = .8,
                            Wq = .95,
                            Nq = 8,
                            aq = "[\"')\\]\u300d\u300f\uff09]*",
                            Vq = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${aq}$`),
                            dq = new RegExp(`[?\uff1f]${aq}$`),
                            jq = new RegExp(`[!\uff01]${aq}$`),
                            Hq = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            oq = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            Pq = new RegExp(`[${oq}]`),
                            Qq = new RegExp(`[${oq}]|[^${oq}]+`, "g"),
                            yq = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function tq(qq) {
                            let Eq = 2166136261;
                            for (let gq = 0; gq < qq.length; gq++) Eq ^= qq.charCodeAt(gq), Eq = Math.imul(Eq, 16777619);
                            return (Eq >>> 0) / 4294967295 * 2 - 1
                          }

                          function rq(qq) {
                            var Eq;
                            if (Pq.test(qq)) return 1;
                            const gq = qq.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Yq = gq.replace(/[^0-9]/g, "");
                            if (Yq.length > 0 && !/\p{L}/u.test(gq)) return Math.min(Yq.length, 4);
                            const lq = null !== (Eq = gq.match(yq)) && void 0 !== Eq ? Eq : [];
                            if (0 === lq.length) {
                              var Oq, mq;
                              const qq = null !== (Oq = null === (mq = gq.match(/\p{L}/gu)) || void 0 === mq ? void 0 : mq.length) && void 0 !== Oq ? Oq : 0;
                              return 0 === qq ? 0 : Math.min(Math.max(1, Math.round(qq / 2.5)), Nq)
                            }
                            const xq = gq.replace(/[^\p{L}]/gu, ""),
                              Aq = lq.length > 1 && "e" === lq.at(-1) && xq.endsWith("e") && !xq.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(qq.replace(/[^\p{L}]/gu, ""));
                            return Math.min(lq.length - (Aq ? 1 : 0), Nq)
                          }

                          function vq(qq) {
                            return qq.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function hq(qq) {
                            const Eq = qq.replace(/[^\p{L}]/gu, "");
                            return Eq.length >= 2 && Eq === Eq.toUpperCase() && Eq !== Eq.toLowerCase()
                          }

                          function nq(qq, Eq) {
                            var gq;
                            const Nq = Eq && (0, Yq.i)(Eq),
                              aq = null !== (gq = null === Nq || void 0 === Nq ? void 0 : Nq.syllableMs) && void 0 !== gq ? gq : Yq.b,
                              oq = function(qq) {
                                const Eq = [];
                                for (const Yq of (0, lq.Zb)(qq))
                                  if ("string" === typeof Yq)
                                    for (const qq of Yq.split(/(\s+)/)) {
                                      if ("" === qq) continue;
                                      if (/^\s+$/.test(qq)) {
                                        Eq.push({
                                          kind: "space",
                                          text: qq
                                        });
                                        continue
                                      }
                                      if (!Pq.test(qq)) {
                                        Eq.push({
                                          kind: "word",
                                          text: qq,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Yq = !0;
                                      for (const lq of null !== (gq = qq.match(Qq)) && void 0 !== gq ? gq : []) {
                                        var gq;
                                        const qq = Eq.at(-1);
                                        Yq || "word" !== (null === qq || void 0 === qq ? void 0 : qq.kind) || Pq.test(lq) || /[\p{L}\p{N}]/u.test(lq) ? (Yq || Eq.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), Eq.push({
                                          kind: "word",
                                          text: lq,
                                          delayMs: 0
                                        }), Yq = !1) : qq.text += lq
                                      }
                                    } else Eq.push({
                                      kind: "icon",
                                      text: Yq.icon,
                                      delayMs: 0
                                    });
                                return Eq
                              }(qq),
                              yq = [];
                            let nq = [];
                            for (const Yq of oq) "space" !== Yq.kind && (nq.push(Yq), Vq.test(Yq.text) && (yq.push(nq), nq = []));
                            yq.push(nq);
                            const bq = [];
                            let iq = 0;
                            for (const Yq of yq) {
                              var Zq, fq;
                              const qq = null !== (Zq = null === (fq = Yq.at(-1)) || void 0 === fq ? void 0 : fq.text) && void 0 !== Zq ? Zq : "",
                                Eq = dq.test(qq),
                                gq = jq.test(qq),
                                lq = Yq.map((qq => "word" === qq.kind ? rq(qq.text) : 1)),
                                oq = lq.findLastIndex((qq => qq > 0));
                              for (const [dq, jq] of Yq.entries()) {
                                const qq = "word" === jq.kind,
                                  Yq = lq[dq];
                                jq.delayMs = iq;
                                for (let lq = 0; Nq && lq < Yq; lq++) {
                                  const {
                                    intonation: Oq
                                  } = Nq;
                                  let mq = oq > 0 ? -Oq.declineSemitones * (dq / oq) : 0;
                                  mq += tq(`${vq(jq.text)}|${lq}`) * Oq.variationSemitones;
                                  const Vq = Math.min(1, Oq.variationSemitones);
                                  let Hq = Nq.glideSemitones,
                                    Pq = 1;
                                  gq && (mq += Oq.exclaimLiftSemitones, Pq *= xq), Eq && dq === oq && (mq += Oq.questionRiseSemitones * (Yq > 1 ? .5 + .5 * lq / (Yq - 1) : 1), lq === Yq - 1 && (Hq = Math.abs(Hq) + Oq.questionRiseSemitones / 2)), qq && hq(jq.text) && (mq += cq * Vq, Pq *= Aq), Yq > 1 && 0 === lq && (mq += Bq * Vq, Pq *= uq), bq.push({
                                    atMs: iq + lq * aq,
                                    semitones: mq,
                                    glideSemitones: Hq,
                                    durationMs: lq < Yq - 1 ? Math.min(Nq.durationMs, aq * Wq) : Nq.durationMs,
                                    level: Pq
                                  })
                                }
                                iq += Yq * aq + (Vq.test(jq.text) ? mq : Hq.test(jq.text) ? Oq : 0)
                              }
                            }
                            return {
                              pieces: oq.map((qq => "space" === qq.kind ? qq : "icon" === qq.kind ? {
                                kind: "icon",
                                icon: qq.text,
                                delayMs: qq.delayMs
                              } : {
                                kind: "word",
                                text: qq.text,
                                delayMs: qq.delayMs
                              })),
                              blips: bq
                            }
                          }
                          var bq = gq(1183),
                            iq = gq(1241),
                            Zq = gq(1906);

                          function fq(qq) {
                            if ("string" === typeof qq) return qq;
                            const Eq = iq.h.get().getCurrentLanguageCode();
                            return (0, bq.n)(Eq, qq.translationKey, (0, bq.j)(qq.params, Zq.d.shown))
                          }

                          function Mq(qq) {
                            const Eq = void 0 === qq.voice ? null : (0, Yq.m)(qq.voice),
                              gq = Eq && (0, Yq.i)(Eq);
                            return {
                              plan: nq(fq(qq.line), gq),
                              synth: gq
                            }
                          }

                          function Tq(qq) {
                            const Eq = [];
                            let gq = [];
                            for (const [lq, Oq] of qq.entries()) {
                              var Yq;
                              "space" === Oq.kind && (" " !== Oq.text || "icon" !== (null === (Yq = qq[lq + 1]) || void 0 === Yq ? void 0 : Yq.kind)) ? (gq.length > 0 && Eq.push(gq), Eq.push([Oq]), gq = []) : gq.push(Oq)
                            }
                            return gq.length > 0 && Eq.push(gq), Eq
                          }
                        }, 4679: (qq, Eq, gq) => {
                          gq.d(Eq, {
                            e: () => uq,
                            g: () => Bq
                          });
                          var Yq = gq(4684),
                            lq = gq(24);
                          const Oq = .25,
                            mq = .85,
                            xq = .02,
                            Aq = .01;

                          function cq(qq, Eq, gq, Yq, lq, Oq, xq) {
                            const {
                              waveform: Aq,
                              pitchHz: cq,
                              attackMs: uq,
                              releaseMs: Bq,
                              lowpassHz: Wq
                            } = gq, Nq = lq + Yq.durationMs / 1e3, aq = cq * 2 ** (Yq.semitones / 12), Vq = qq.createOscillator();
                            Vq.type = Aq, Vq.frequency.setValueAtTime(aq, lq), Vq.frequency.exponentialRampToValueAtTime(aq * 2 ** (Yq.glideSemitones / 12), Nq);
                            const dq = lq + Math.min(uq, Yq.durationMs) / 1e3,
                              jq = qq.createGain();
                            jq.gain.setValueAtTime(0, lq), jq.gain.linearRampToValueAtTime(Oq, dq), jq.gain.linearRampToValueAtTime(Oq * mq, Math.max(dq, Nq - Bq / 1e3)), jq.gain.linearRampToValueAtTime(0, Nq);
                            const Hq = [Vq];
                            if (null !== Wq) {
                              const Eq = qq.createBiquadFilter();
                              Eq.type = "lowpass", Eq.frequency.value = Wq, Hq.push(Eq)
                            }
                            Hq.push(jq, Eq);
                            for (let mq = 1; mq < Hq.length; mq++) Hq[mq - 1].connect(Hq[mq]);
                            return Vq.onended = () => {
                              for (const qq of Hq.slice(0, -1)) qq.disconnect();
                              xq()
                            }, Vq.start(lq), Vq.stop(Nq), Vq
                          }

                          function uq(qq, Eq, gq, Yq, lq, mq) {
                            if (0 === Yq.length) return mq(), () => {};
                            const uq = Oq * gq.volume * lq,
                              Bq = qq.createGain();
                            Bq.connect(Eq);
                            const Wq = qq.currentTime + xq,
                              Nq = new Set;
                            for (const Oq of Yq) {
                              const Eq = cq(qq, Bq, gq, Oq, Wq + Oq.atMs / 1e3, uq * Oq.level, (() => {
                                Nq.delete(Eq), 0 === Nq.size && (Bq.disconnect(), mq())
                              }));
                              Nq.add(Eq)
                            }
                            return () => {
                              const Eq = qq.currentTime;
                              Bq.gain.setTargetAtTime(0, Eq, Aq);
                              for (const qq of Nq) try {
                                qq.stop(Eq + 5 * Aq)
                              } catch {}
                            }
                          }

                          function Bq(qq, Eq) {
                            var gq;
                            const Oq = Yq.Howler.ctx,
                              mq = Yq.Howler.masterGain;
                            if (!Oq || !mq || !lq.b.get("soundOnFromAd")) return () => {};
                            const xq = Yq.Howler;
                            return null === (gq = xq._autoResume) || void 0 === gq || gq.call(xq), uq(Oq, mq, qq, Eq, lq.b.get("soundVolume"), (() => {
                              var qq;
                              null === (qq = xq._autoSuspend) || void 0 === qq || qq.call(xq)
                            }))
                          }
                        }, 4684: (qq, Eq, gq) => {
                          gq.r(Eq), gq.d(Eq, {
                            Howl: () => lq.Howl,
                            Howler: () => lq.Howler,
                            musicOutput: () => aq,
                            readyAudioContext: () => Vq
                          });
                          var Yq, lq = gq(4692),
                            Oq = gq(4477);
                          const mq = lq.Howler;

                          function xq() {
                            var qq, Eq;
                            if (mq.ctx || !mq.usingWebAudio || "undefined" === typeof AudioContext || !(0, Oq.f)()) return;
                            const gq = navigator.audioSession;
                            let Yq;
                            "auto" === (null === gq || void 0 === gq ? void 0 : gq.type) && (gq.type = "ambient");
                            try {
                              Yq = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const lq = Yq.createGain();
                            lq.gain.setValueAtTime(mq._muted ? 0 : null !== (qq = mq._volume) && void 0 !== qq ? qq : 1, Yq.currentTime), lq.connect(Yq.destination), mq.ctx = Yq, mq.masterGain = lq, null === (Eq = mq._setup) || void 0 === Eq || Eq.call(mq)
                          }
                          mq._mobileUnloaded = !0;
                          const Aq = mq.volume.bind(lq.Howler);
                          mq.volume = function() {
                            return xq(), Aq(...arguments)
                          };
                          const cq = mq.mute.bind(lq.Howler);
                          mq.mute = qq => (xq(), cq(qq));
                          const uq = lq.Howl.prototype,
                            Bq = uq.init;
                          uq.init = function(qq) {
                            return xq(), Bq.call(this, qq)
                          };
                          let Wq = 0;
                          const Nq = null === (Yq = mq._autoSuspend) || void 0 === Yq ? void 0 : Yq.bind(lq.Howler);

                          function aq() {
                            Vq();
                            const {
                              ctx: qq,
                              masterGain: Eq
                            } = mq;
                            return qq && Eq ? {
                              ctx: qq,
                              destination: Eq,
                              holdAwake: qq => {
                                var Eq, gq;
                                (Wq += qq ? 1 : -1, qq) ? null === (Eq = mq._autoResume) || void 0 === Eq || Eq.call(mq): null === (gq = mq._autoSuspend) || void 0 === gq || gq.call(mq)
                              },
                              wake: () => {
                                var Eq;
                                "running" !== qq.state && (null === (Eq = mq._autoResume) || void 0 === Eq || Eq.call(mq), qq.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function Vq() {
                            var qq;
                            (mq.volume(), mq.ctx && mq.autoUnlock) && (null === (qq = mq._unlockAudio) || void 0 === qq || qq.call(mq))
                          }
                          Nq && (mq._autoSuspend = () => Wq > 0 ? lq.Howler : Nq())
                        }, 4701: (qq, Eq, gq) => {
                          function Yq(qq) {
                            return {
                              notAfter: qq
                            }
                          }
                          gq.d(Eq, {
                            b: () => Aq,
                            d: () => cq,
                            f: () => xq,
                            i: () => Yq,
                            l: () => lq,
                            p: () => Oq,
                            s: () => mq,
                            t: () => uq,
                            x: () => Bq
                          });
                          const lq = Yq("\\w$."),
                            Oq = Yq("\\w.,");

                          function mq(qq) {
                            return Eq => Aq(Eq, qq)
                          }

                          function xq(qq) {
                            return Eq => !qq.test(Eq.input.slice(0, Eq.index))
                          }

                          function Aq(qq, Eq) {
                            return qq.index > 0 && new RegExp(`[${Eq}]`).test(qq.input[qq.index - 1])
                          }

                          function cq(qq, Eq, gq) {
                            return function(qq) {
                              return void 0 !== qq && "function" !== typeof qq
                            }(gq) ? function(qq, Eq, gq) {
                              const Yq = Eq.flags.replace(/[gy]/g, ""),
                                lq = new RegExp(`[^${gq}](?:${Eq.source})`, `${Yq}g`),
                                Oq = [],
                                mq = gq => {
                                  const Yq = gq.index + gq[0].length;
                                  return ("" === gq[0] ? Wq(qq, Eq, Yq) : Yq) - 1
                                },
                                xq = new RegExp(`(?:${Eq.source})`, `${Yq}y`).exec(qq);
                              if (xq) {
                                if (Oq.push(xq), !Eq.global) return Oq;
                                lq.lastIndex = mq(xq)
                              }
                              for (let Aq = lq.exec(qq); Aq; Aq = lq.exec(qq)) {
                                const gq = Wq(qq, Eq, Aq.index) - Aq.index;
                                if (Aq[0] = Aq[0].slice(gq), Aq.index += gq, Oq.push(Aq), !Eq.global) break;
                                lq.lastIndex = mq(Aq)
                              }
                              return Oq
                            }(qq, Eq, gq.notAfter) : function(qq, Eq, gq) {
                              const Yq = new RegExp(Eq.source, `${Eq.flags.replace(/[gy]/g,"")}g`),
                                lq = [];
                              for (let Oq = Yq.exec(qq); Oq; Oq = Yq.exec(qq))
                                if (!gq || gq(Oq)) {
                                  if (lq.push(Oq), !Eq.global) break;
                                  "" === Oq[0] && (Yq.lastIndex = Wq(qq, Eq, Yq.lastIndex))
                                } else Yq.lastIndex = Wq(qq, Eq, Oq.index);
                              return lq
                            }(qq, Eq, gq)
                          }

                          function uq(qq, Eq, gq, Yq) {
                            let lq = "",
                              Oq = 0;
                            for (const mq of cq(qq, Eq, gq)) lq += qq.slice(Oq, mq.index) + Yq(mq), Oq = mq.index + mq[0].length;
                            return lq + qq.slice(Oq)
                          }

                          function Bq(qq, Eq, gq) {
                            const Yq = [];
                            let lq = 0;
                            for (const Oq of cq(qq, Eq, gq)) Yq.push(qq.slice(lq, Oq.index)), lq = Oq.index + Oq[0].length;
                            return [...Yq, qq.slice(lq)]
                          }

                          function Wq(qq, Eq, gq) {
                            var Yq;
                            return gq + (Eq.unicode && (null !== (Yq = qq.codePointAt(gq)) && void 0 !== Yq ? Yq : 0) > 65535 ? 2 : 1)
                          }
                        }, 4643: (qq, Eq, gq) => {
                          gq.d(Eq, {
                            B: () => Nq,
                            e: () => lq,
                            g: () => Aq,
                            i: () => Oq,
                            l: () => mq,
                            o: () => xq,
                            q: () => dq,
                            s: () => uq,
                            u: () => Bq,
                            y: () => Vq
                          });
                          var Yq = gq(1566);
                          const lq = 24e3,
                            Oq = "/docs/llms.txt",
                            mq = `${Yq.c}${Oq}`,
                            xq = "/llms.txt",
                            Aq = "/docs/llms-full.txt";

                          function cq(qq) {
                            return qq || "index"
                          }

                          function uq(qq) {
                            return `/docs/${cq(qq)}.md`
                          }

                          function Bq(qq, Eq) {
                            return `/docs/${cq(qq)}/${Eq+1}.md`
                          }
                          const Wq = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Nq(qq) {
                            const Eq = Wq.exec(qq);
                            return null === Eq ? null : {
                              name: Eq[1],
                              part: void 0 === Eq[2] ? null : Number(Eq[2])
                            }
                          }
                          const aq = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Vq(qq) {
                            const Eq = aq.exec(qq);
                            if (null === Eq) return null;
                            const [, gq = "", Yq] = Eq;
                            return void 0 === Yq ? uq(gq) : Bq(gq, Number(Yq) - 1)
                          }

                          function dq(qq) {
                            return `/docsHtml/${cq(qq)}.html`
                          }
                        }, 4671: (qq, Eq, gq) => {
                          gq.d(Eq, {
                            b: () => lq,
                            d: () => Yq,
                            f: () => Oq,
                            i: () => Aq,
                            m: () => mq
                          });
                          const Yq = ["sine", "triangle", "square", "sawtooth"],
                            lq = 55,
                            Oq = {
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

                          function mq(qq) {
                            return "string" !== typeof qq ? qq : Object.hasOwn(Oq, qq) ? Oq[qq] : null
                          }

                          function xq(qq, Eq, gq) {
                            return Math.min(gq, Math.max(Eq, qq))
                          }

                          function Aq(qq) {
                            const Eq = xq(qq.durationMs, 10, 500),
                              gq = xq(qq.attackMs, 0, Eq),
                              {
                                intonation: lq
                              } = qq;
                            return {
                              waveform: Yq.includes(qq.waveform) ? qq.waveform : "sine",
                              pitchHz: xq(qq.pitchHz, 20, 4e3),
                              glideSemitones: xq(qq.glideSemitones, -24, 24),
                              durationMs: Eq,
                              attackMs: gq,
                              releaseMs: xq(qq.releaseMs, 0, Eq - gq),
                              lowpassHz: null === qq.lowpassHz ? null : xq(qq.lowpassHz, 20, 2e4),
                              volume: xq(qq.volume, 0, 2),
                              intonation: {
                                variationSemitones: xq(lq.variationSemitones, 0, 6),
                                declineSemitones: xq(lq.declineSemitones, 0, 12),
                                questionRiseSemitones: xq(lq.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: xq(lq.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: xq(qq.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const qq in modules) Object.freeze(modules[qq]);