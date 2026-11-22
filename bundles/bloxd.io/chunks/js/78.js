export const id = 78;
export const ids = [78, 93];
export const modules = {
    4766: (kk, ek, ik) => {
      ik.d(ek, {
        e: () => wk,
        g: () => lk
      });
      var Dk = ik(1021),
        fk = ik.n(Dk),
        Sk = ik(60),
        bk = ik(1172),
        rk = ik(4769),
        Pk = ik(1858),
        mk = ik(2414),
        Mk = ik(4778),
        Kk = ik(1066);
      const xk = new WeakMap;
      let nk = 0;

      function Uk(kk) {
        let ek = xk.get(kk);
        return void 0 === ek && (ek = nk++, xk.set(kk, ek)), ek
      }

      function Hk(kk) {
        let {
          piece: ek
        } = kk;
        return "space" === ek.kind ? (0, Kk.jsx)(Kk.Fragment, {
          children: ek.text
        }) : (0, Kk.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${ek.delayMs}ms`
          },
          children: (0, Kk.jsx)(rk.e, {
            text: "icon" === ek.kind ? `[[${ek.icon}]]` : ek.text
          })
        })
      }

      function wk(kk) {
        let {
          display: ek
        } = kk;
        const {
          selectedLanguage: ik
        } = (0, bk.D)(), Dk = (0, Sk.useMemo)((() => (0, Mk.d)((0, Mk.f)(ek).plan.pieces)), [ek, ik.code]);
        return (0, Kk.jsxs)("div", {
          className: fk()("Dialogue", {
            DialogueAnimateIn: !1 !== ek.animateIn
          }),
          children: [ek.speakerName && (0, Kk.jsx)(Pk.e, {
            text: ek.speakerName,
            className: "DialogueSpeaker"
          }), (0, Kk.jsx)("p", {
            className: "DialogueLine",
            children: Dk.map(((kk, ek) => 1 === kk.length && "space" === kk[0].kind ? kk[0].text : (0, Kk.jsx)("span", {
              className: "DialogueGlue",
              children: kk.map(((kk, ek) => (0, Kk.jsx)(Hk, {
                piece: kk
              }, ek)))
            }, ek)))
          })]
        })
      }
      const lk = (0, Sk.memo)((function() {
        const kk = (0, mk.e)("dialogue");
        return (0, Kk.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: kk && (0, Kk.jsx)(wk, {
            display: kk
          }, Uk(kk))
        })
      }))
    },
    4652: (kk, ek, ik) => {
        ik.r(ek), ik.d(ek, {
          default: () => Db
        });
        var Dk = ik(60),
          fk = ik(1021),
          Sk = ik.n(fk),
          bk = ik(1488),
          rk = ik(1496),
          Pk = ik(22),
          mk = ik(75),
          Mk = ik(4659),
          Kk = ik(4674),
          xk = ik(4678),
          nk = ik(4317),
          Uk = ik(1066);
        const Hk = "/textures/docs/icons";

        function wk(kk) {
          let {
            name: ek,
            isTinted: ik,
            className: Dk,
            style: fk
          } = kk;
          const bk = `${Hk}/${ek}.png`;
          return ik ? (0, Uk.jsxs)("span", {
            className: Sk()("DocsPixelIcon", "Tinted", Dk),
            "aria-hidden": "true",
            style: fk,
            children: [(0, Uk.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${bk}")`,
                WebkitMaskImage: `url("${bk}")`
              }
            }), (0, Uk.jsx)("img", {
              src: bk,
              alt: ""
            })]
          }) : (0, Uk.jsx)("img", {
            className: Sk()("DocsPixelIcon", Dk),
            src: bk,
            alt: "",
            "aria-hidden": "true",
            style: fk
          })
        }
        const lk = 1500;

        function pk() {
          const [kk, ek] = (0, Dk.useState)(null);
          (0, Dk.useEffect)((() => {
            if (null === kk) return;
            const ik = setTimeout((() => {
              ek(null)
            }), lk);
            return () => {
              clearTimeout(ik)
            }
          }), [kk]);
          return [kk, kk => {
            (0, nk.e)(kk).then((() => {
              ek({
                text: kk,
                failed: !1
              })
            }), (ik => {
              console.error("Could not copy to the clipboard", ik), ek({
                text: kk,
                failed: !0
              })
            }))
          }]
        }

        function yk(kk) {
          let {
            text: ek,
            label: ik,
            className: Dk
          } = kk;
          const [fk, bk] = pk(), rk = !1 === (null === fk || void 0 === fk ? void 0 : fk.failed);
          return (0, Uk.jsxs)("button", {
            type: "button",
            className: Sk()("DocsCopyButton", Dk, {
              Copied: rk
            }),
            title: `Copy ${ek.length>40?"to clipboard":ek}`,
            "aria-label": ik ? void 0 : `Copy ${ek}`,
            onClick: kk => {
              kk.stopPropagation(), bk(ek)
            },
            children: [(0, Uk.jsx)(wk, {
              name: rk ? "check" : "copy"
            }), ik && (0, Uk.jsx)("span", {
              children: rk ? "Copied" : null !== fk && void 0 !== fk && fk.failed ? "Copy failed" : ik
            })]
          })
        }
        Mk.b.registerLanguage("javascript", Kk.d), Mk.b.registerLanguage("typescript", xk.c);
        const Yk = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Lk = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          Ck = 24;

        function Ak(kk) {
          let {
            code: ek,
            lang: ik,
            compact: fk = !1
          } = kk;
          const bk = (0, Dk.useMemo)((() => function(kk, ek) {
              const ik = Yk[ek];
              return ik ? Mk.b.highlight(kk, {
                language: ik
              }).value : kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(ek, ik)), [ek, ik]),
            rk = ek.split("\n").length,
            Pk = !fk && rk > Ck + 6,
            [mk, Kk] = (0, Dk.useState)(!1),
            xk = Yk[ik];
          return (0, Uk.jsxs)("div", {
            className: Sk()("DocsCodeBlock", {
              Compact: fk,
              Collapsed: Pk && !mk
            }),
            children: [!fk && (0, Uk.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, Uk.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: xk ? Lk[xk] : "Text"
              }), (0, Uk.jsx)(yk, {
                text: ek,
                label: "Copy"
              })]
            }), (0, Uk.jsx)("pre", {
              children: (0, Uk.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: bk
                }
              })
            }), Pk && (0, Uk.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": mk,
              onClick: () => {
                Kk(!mk)
              },
              children: [(0, Uk.jsx)(wk, {
                name: mk ? "chevron-up" : "chevron-down"
              }), mk ? "Show less" : `Show all ${rk} lines`]
            })]
          })
        }
        var jk = ik(4685);
        var sk = ik(4689);
        const dk = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Vk(kk) {
          const ek = new Map;
          let ik, Dk = [],
            fk = !1;
          const Sk = () => {
            ik && ek.set(ik.name, ik.lines.join("\n").trimEnd())
          };
          for (const bk of kk.split("\n")) {
            const kk = bk.match(dk);
            fk || bk.startsWith("/*") ? (fk || (Sk(), ik = void 0), Dk.push(bk), fk = !bk.includes("*/")) : kk ? (Sk(), ik = {
              name: kk[1],
              lines: [...Dk, bk]
            }, Dk = []) : ik && (bk.startsWith(" ") || bk.startsWith("\t") || /^[}\])|]/.test(bk)) ? ik.lines.push(bk) : ik && "" !== bk.trim() && (Sk(), ik = void 0)
          }
          return Sk(), ek
        }

        function Fk(kk) {
          return "methods" === kk || "callbacks" === kk || "settings" === kk
        }
        const uk = {
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
              setterSnippet: (kk, ek) => `api.setClientOption(playerId, "${kk}", ${ek})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (kk, ek) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${kk}", ${ek})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (kk, ek) => `api.setMobSetting(mobId, "${kk}", ${ek})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (kk, ek) => `api.setVehicleSetting(vehicleId, "${kk}", ${ek})`
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
          qk = {
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

        function Ik(kk) {
          return kk.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function zk(kk) {
          let ek = !1;
          return kk.split("\n").map((kk => (kk.startsWith("```") && (ek = !ek), !ek && /^#{3,} /.test(kk) ? kk.slice(1) : kk))).join("\n")
        }

        function Qk(kk) {
          return "readme" === kk ? "getting-started" : Ik(kk)
        }
        const vk = "## Glossary of Referenced Types";
        const Ek = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...sk.b.flatMap((kk => {
            const ek = {
              id: kk.id,
              slug: Qk(kk.id),
              title: kk.title,
              markdown: kk.content,
              ...uk[kk.id]
            };
            if ("readme" === kk.id) return function(kk) {
              const ek = kk.markdown.indexOf(vk),
                ik = kk.markdown.indexOf("\n```", ek),
                Dk = kk.markdown.indexOf("\n```", ik + 1);
              if (-1 === ek || -1 === ik || -1 === Dk) throw new Error(`Getting started has no "${vk}" section with a code block`);
              const fk = kk.markdown.slice(ek + 31, ik).trim(),
                Sk = [...Vk(kk.markdown.slice(kk.markdown.indexOf("\n", ik + 1) + 1, Dk))].map((kk => {
                  let [ek, ik] = kk;
                  return `## ${ek}\n\n\`\`\`ts\n${ik}\n\`\`\`\n`
                })),
                bk = kk.markdown.slice(kk.markdown.indexOf("\n", Dk + 1) + 1);
              return [{
                ...kk,
                markdown: `${kk.markdown.slice(0,ek)}${bk}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${fk}\n\n${Sk.join("\n")}`
              }]
            }(ek);
            if ("howTo" === kk.id) {
              const {
                parent: kk,
                guides: ik
              } = function(kk) {
                const [ek, ...ik] = kk.markdown.split(/^(?=## )/m), Dk = [ek], fk = [];
                for (const bk of ik) {
                  var Sk;
                  const ek = bk.indexOf("\n"),
                    ik = bk.slice(3, ek).trim(),
                    rk = bk.slice(ek + 1);
                  if (!rk.includes("```")) {
                    Dk.push(bk);
                    continue
                  }
                  const Pk = null !== (Sk = qk[ik]) && void 0 !== Sk ? Sk : {
                    icon: "lightbulb",
                    summary: `How to use ${ik.toLowerCase()} in World Code.`
                  };
                  fk.push({
                    id: `${kk.id}${ik.split(/[^A-Za-z0-9]+/).map((kk=>kk.charAt(0).toUpperCase()+kk.slice(1))).join("")}`,
                    slug: `${kk.slug}-${Ik(ik)}`,
                    title: ik,
                    layout: "article",
                    sourceAnchor: (0, jk.q)(ik),
                    markdown: `# ${ik}\n\n${zk(rk)}`,
                    ...Pk
                  })
                }
                return {
                  parent: {
                    ...kk,
                    markdown: Dk.join(""),
                    childPageIds: fk.map((kk => kk.id))
                  },
                  guides: fk
                }
              }(ek);
              return [kk, ...ik]
            }
            return [ek]
          }))],
          hk = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Ek.filter((kk => void 0 !== kk.sourceAnchor)).map((kk => kk.id))]
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

        function ak(kk) {
          return Ek.find((ek => ek.id === kk))
        }
        const Wk = new Map;

        function tk(kk) {
          let ek = Wk.get(kk.id);
          return ek || (ek = (0, jk.v)(kk.markdown, "changelog" === kk.layout ? 3 : 2), Wk.set(kk.id, ek)), ek
        }

        function Xk(kk, ek) {
          return tk(kk).sections.some((kk => kk.heading.anchor === ek || kk.blocks.some((kk => "heading" === kk.kind && kk.anchor === ek))))
        }

        function Bk(kk) {
          const [ek, ...ik] = kk.replace(/^#/, "").split("-"), Dk = Ek.find((kk => kk.id === ek));
          if (!Dk) return null;
          const fk = ik.length > 0 ? (0, jk.q)(ik.join("-")) : "";
          for (const bk of null !== (Sk = Dk.childPageIds) && void 0 !== Sk ? Sk : []) {
            var Sk;
            const kk = ak(bk);
            if (kk.sourceAnchor === fk) return {
              page: kk,
              anchor: ""
            };
            if (Xk(kk, fk)) return {
              page: kk,
              anchor: fk
            }
          }
          return {
            page: Dk,
            anchor: fk
          }
        }
        const ck = {
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

        function Tk(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Dk = ek.slug ? `${kk}/${ek.slug}` : kk;
          return ik ? `${Dk}#${ik}` : Dk
        }
        var Zk = ik(4707);
        const Ok = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          gk = new Set(["GameApi", "Console", "_TypeOf"]),
          Gk = 4;

        function Nk(kk) {
          let ek = kk.length;
          for (; ek > 0 && "" === kk[ek - 1].trim();) ek--;
          return kk.slice(0, ek)
        }

        function Rk(kk) {
          var ek;
          const ik = Nk(kk);
          if (null === (ek = ik.at(-1)) || void 0 === ek || !ek.trimEnd().endsWith("*/")) return {
            lines: ik,
            doc: ""
          };
          const Dk = ik.findLastIndex((kk => kk.startsWith("/**")));
          return -1 === Dk ? {
            lines: ik,
            doc: ""
          } : {
            lines: Nk(ik.slice(0, Dk)),
            doc: ik.slice(Dk).join("\n")
          }
        }

        function Jk(kk) {
          var ek;
          const ik = kk.split("\n"),
            Dk = ik.flatMap(((kk, ek) => Ok.test(kk) ? [ek] : []));
          let fk = Rk(ik.slice(0, null !== (ek = Dk[0]) && void 0 !== ek ? ek : ik.length)).doc;
          return Dk.map(((kk, ek) => {
            var Sk;
            const bk = Rk(ik.slice(kk, null !== (Sk = Dk[ek + 1]) && void 0 !== Sk ? Sk : ik.length)),
              rk = {
                name: ik[kk].match(Ok)[1],
                doc: fk,
                lines: bk.lines
              };
            return fk = bk.doc, rk
          }))
        }

        function ke(kk) {
          var ek;
          const ik = kk.match(/^readonly \[([\s\S]*)\]$/);
          return ik ? null !== (ek = ik[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== ek ? ek : [] : null
        }

        function ee(kk) {
          if (!kk.startsWith("{") || !kk.endsWith("}")) return null;
          const ek = {
              keys: [],
              values: []
            },
            ik = kk => {
              const ik = kk.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              ik && (ek.keys.push(ik[1].startsWith('"') ? ik[1] : `"${ik[1]}"`), ek.values.push(ik[2].trim()))
            };
          let Dk = 0,
            fk = "";
          for (const Sk of kk.slice(1, -1)) "{[(".includes(Sk) ? Dk++ : "}])".includes(Sk) && Dk--, ";" === Sk && 0 === Dk ? (ik(fk), fk = "") : fk += Sk;
          return ik(fk), ek
        }

        function ie(kk) {
          return kk.length > Gk ? `\n\t| ${kk.join("\n\t| ")}` : kk.join(" | ")
        }

        function De(kk, ek) {
          const ik = function(kk, ek) {
            return kk.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((kk, ik) => {
              var Dk;
              const fk = null === (Dk = ek.get(ik)) || void 0 === Dk ? void 0 : Dk.object;
              return fk ? ie(fk.values) : kk
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((kk, ik) => {
              var Dk, fk;
              const Sk = null === (Dk = ek.get(ik)) || void 0 === Dk || null === (fk = Dk.object) || void 0 === fk ? void 0 : fk.values.map(ke);
              return null !== Sk && void 0 !== Sk && Sk.every((kk => null !== kk)) ? ie([...new Set(Sk.flat())]) : kk
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((kk, ik) => {
              var Dk;
              const fk = null === (Dk = ek.get(ik)) || void 0 === Dk ? void 0 : Dk.members;
              return fk ? ie(fk) : kk
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((kk, ik) => {
              var Dk;
              const fk = null === (Dk = ek.get(ik)) || void 0 === Dk ? void 0 : Dk.object;
              return fk ? ie(fk.keys) : kk
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((kk, ik) => {
              var Dk, fk;
              return null !== (Dk = null === (fk = ek.get(ik)) || void 0 === fk ? void 0 : fk.text) && void 0 !== Dk ? Dk : kk
            }))
          }(kk.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), ek);
          return [kk.doc, ik].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function fe(kk) {
          const ek = Jk(kk),
            ik = function(kk) {
              const ek = new Map,
                ik = kk.find((kk => "_TypeOf" === kk.name));
              let Dk = null;
              const fk = () => {
                if (Dk) {
                  const kk = Dk.lines.join("\n");
                  ek.set(Dk.name, {
                    text: kk,
                    members: ke(kk),
                    object: ee(kk)
                  })
                }
              };
              for (const Sk of ik.lines.slice(1, -1)) {
                const kk = Sk.match(/^\t([\w$]+): (.+)$/);
                kk ? (fk(), Dk = {
                  name: kk[1],
                  lines: [kk[2]]
                }) : Dk && Dk.lines.push(Sk.replace(/^\t/, ""))
              }
              return fk(), ek
            }(ek),
            Dk = new Map;
          for (const fk of ek) gk.has(fk.name) || Dk.has(fk.name) || Dk.set(fk.name, De(fk, ik));
          return Dk
        }
        let Se, be, re;

        function Pe() {
          return be ??= function(kk) {
            const ek = Jk(kk).find((kk => "GameApi" === kk.name)),
              ik = new Map,
              Dk = ek.lines;
            for (let Sk = 0; Sk < Dk.length; Sk++) {
              var fk;
              if (!Dk[Sk].trimStart().startsWith("/**")) continue;
              const kk = Sk;
              for (; Sk < Dk.length && !Dk[Sk].includes("*/");) Sk++;
              const ek = null === (fk = Dk[Sk + 1]) || void 0 === fk ? void 0 : fk.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!ek) continue;
              let bk = null;
              const rk = [];
              let Pk = "description",
                mk = !1;
              for (const ik of Dk.slice(kk, Sk + 1).join("\n").split("\n").map((kk => kk.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const kk = ik.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                kk ? (bk = kk[1].trim(), Pk = "deprecation") : ik.startsWith("@") ? (Pk = "otherTag", mk = !0) : "" === ik.trim() ? mk || (Pk = "description", rk.push(ik)) : "deprecation" !== Pk || /^[A-Z]/.test(ik.trim()) ? "otherTag" !== Pk && (Pk = "description", rk.push(ik)) : bk = `${bk} ${ik.trim()}`.trim()
              }
              ik.set(ek[1], {
                deprecation: bk,
                description: rk.join("\n").trim()
              })
            }
            return ik
          }(Zk.default), be
        }

        function me() {
          if (!re) {
            re = new Map;
            for (const kk of Ek) {
              const ek = (0, jk.u)(tk(kk)).flatMap((kk => kk.blocks));
              for (const kk of (0, jk.i)(ek))
                if ("ts" === kk.lang || "typescript" === kk.lang)
                  for (const [ek, ik] of Vk(kk.code)) re.set(ek, ik)
            }
            for (const [kk, ek] of(Se ??= fe(Zk.default), Se)) re.has(kk) || re.set(kk, ek)
          }
          return re
        }
        const Me = {
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
        let Ke;

        function xe() {
          if (!Ke) {
            Ke = new Map;
            for (const kk of Ek)
              if (Fk(kk.layout))
                for (const ek of tk(kk).sections) Ke.has(ek.heading.text) || Ke.set(ek.heading.text, {
                  pageId: kk.id,
                  anchor: ek.heading.anchor
                })
          }
          return Ke
        }

        function ne(kk) {
          const ek = kk.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return ek ? xe().get(ek[1]) : void 0
        }
        const Ue = (0, Dk.createContext)("/docs"),
          He = (0, Dk.createContext)(null),
          we = (0, Dk.createContext)(!1),
          le = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function pe(kk) {
          const ek = kk.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return ek ? ek[1] : null
        }

        function ye(kk) {
          let {
            colour: ek
          } = kk;
          return (0, Uk.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: ek
            },
            "aria-hidden": "true"
          })
        }

        function Ye(kk) {
          const ek = [];
          let ik = 0;
          for (const Dk of kk.matchAll(le)) ek.push(kk.slice(ik, Dk.index), (0, Uk.jsx)(ye, {
            colour: Dk[0]
          }), Dk[0]), ik = Dk.index + Dk[0].length;
          return ek.push(kk.slice(ik)), ek
        }

        function Le(kk) {
          let {
            href: ek,
            children: ik
          } = kk;
          const fk = (0, Dk.useContext)(Ue);
          if (ek.startsWith("#")) {
            const kk = Bk(ek);
            if (kk) return (0, Uk.jsx)(bk.b, {
              to: Tk(fk, kk.page, kk.anchor),
              children: (0, Uk.jsx)(we.Provider, {
                value: !0,
                children: ik
              })
            })
          }
          return (0, Uk.jsx)("a", {
            href: ek,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, Uk.jsx)(we.Provider, {
              value: !0,
              children: ik
            })
          })
        }

        function Ce(kk) {
          let {
            code: ek
          } = kk;
          const ik = (0, Dk.useContext)(Ue);
          if ((0, Dk.useContext)(we)) return (0, Uk.jsx)("code", {
            className: "DocsInlineCode",
            children: ek
          });
          if (me().has(ek)) return (0, Uk.jsx)(de, {
            type: ek
          });
          const fk = ne(ek);
          if (fk) return (0, Uk.jsx)(bk.b, {
            className: "DocsInlineCode DocsSymbolLink",
            to: Tk(ik, ak(fk.pageId), fk.anchor),
            children: ek
          });
          const Sk = pe(ek);
          return (0, Uk.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Sk && (0, Uk.jsx)(ye, {
              colour: Sk
            }), ek]
          })
        }

        function Ae(kk) {
          let {
            text: ek
          } = kk;
          const ik = [];
          let fk = 0;
          for (const Dk of ek.matchAll(jk.g)) {
            Dk.index > fk && ik.push(...Ye(ek.slice(fk, Dk.index)));
            const [, kk, Sk, bk, rk, Pk] = Dk;
            kk ? ik.push((0, Uk.jsx)(Ce, {
              code: (0, jk.m)(kk, Sk)
            })) : bk ? ik.push((0, Uk.jsx)("strong", {
              children: (0, Uk.jsx)(Ae, {
                text: bk
              })
            })) : ik.push((0, Uk.jsx)(Le, {
              href: Pk,
              children: (0, Uk.jsx)(Ae, {
                text: rk
              })
            })), fk = Dk.index + Dk[0].length
          }
          return fk < ek.length && ik.push(...Ye(ek.slice(fk))), (0, Uk.jsx)(Uk.Fragment, {
            children: ik.map(((kk, ek) => (0, Uk.jsx)(Dk.Fragment, {
              children: kk
            }, ek)))
          })
        }
        const je = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          se = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function de(kk) {
          let {
            type: ek
          } = kk;
          const ik = me(),
            fk = [];
          for (const Dk of ek.trim().matchAll(je)) {
            const [kk, ek, Sk, bk, rk] = Dk;
            ek ? fk.push((0, Uk.jsx)("span", {
              className: "DocsTypeString",
              children: kk
            })) : Sk && ik.has(Sk) ? fk.push((0, Uk.jsx)(Ie, {
              name: Sk,
              definition: ik.get(Sk)
            })) : Sk ? fk.push((0, Uk.jsx)("span", {
              className: se.has(Sk) ? "DocsTypeKeyword" : "DocsTypeName",
              children: kk
            })) : bk ? fk.push((0, Uk.jsx)("span", {
              className: "DocsTypeNumber",
              children: kk
            })) : rk ? fk.push(" ") : fk.push((0, Uk.jsx)("span", {
              className: "DocsTypePunctuation",
              children: kk
            }))
          }
          return (0, Uk.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: fk.map(((kk, ek) => (0, Uk.jsx)(Dk.Fragment, {
              children: kk
            }, ek)))
          })
        }
        const Ve = 480,
          Fe = 6,
          ue = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let qe = 0;

        function Ie(kk) {
          let {
            name: ek,
            definition: ik
          } = kk;
          const fk = (0, Dk.useContext)(Ue),
            Sk = Me[ek],
            rk = (0, Dk.useRef)(null),
            Pk = (0, Dk.useRef)(null),
            Mk = (0, Dk.useRef)(null),
            [Kk, xk] = (0, Dk.useState)(!1),
            [nk, Hk] = (0, Dk.useState)(null),
            lk = (0, Dk.useRef)(),
            pk = (0, Dk.useContext)(He),
            [yk] = (0, Dk.useState)((() => "DocsTypePopover-" + qe++)),
            Yk = () => {
              clearTimeout(lk.current), xk(!0)
            },
            Lk = () => {
              clearTimeout(lk.current), lk.current = setTimeout((() => {
                xk(!1)
              }), 120)
            };
          return (0, Dk.useEffect)((() => {
            if (!Kk) return;
            const kk = kk => {
              if ("Escape" === kk.key) {
                var ek, ik;
                if (null !== (ek = Pk.current) && void 0 !== ek && ek.contains(document.activeElement)) null === (ik = rk.current) || void 0 === ik || ik.focus();
                xk(!1)
              }
            };
            return document.addEventListener("keydown", kk), () => {
              document.removeEventListener("keydown", kk)
            }
          }), [Kk]), (0, Dk.useEffect)((() => () => {
            clearTimeout(lk.current)
          }), []), (0, Dk.useLayoutEffect)((() => {
            if (!Kk || !rk.current || !Pk.current) return void Hk(null);
            const kk = rk.current.getBoundingClientRect(),
              ek = Pk.current.offsetHeight,
              ik = Math.min(Ve, window.innerWidth - 32),
              Dk = Math.min(Math.max(16, kk.left), window.innerWidth - ik - 16),
              fk = kk.bottom + Fe + ek < window.innerHeight;
            Hk({
              left: Dk,
              top: fk ? kk.bottom + Fe : Math.max(16, kk.top - Fe - ek)
            })
          }), [Kk]), (0, Uk.jsxs)(Uk.Fragment, {
            children: [(0, Uk.jsx)("button", {
              type: "button",
              ref: rk,
              className: "DocsTypeLink",
              "aria-expanded": Kk,
              "aria-describedby": Kk ? yk : void 0,
              onMouseEnter: Yk,
              onMouseLeave: Lk,
              onFocus: Yk,
              onBlur: Lk,
              onKeyDown: kk => {
                "Tab" === kk.key && !kk.shiftKey && Mk.current && (kk.preventDefault(), Mk.current.focus())
              },
              onClick: Yk,
              children: ek
            }), Kk && (0, mk.createPortal)((0, Uk.jsxs)("span", {
              ref: Pk,
              id: yk,
              className: "DocsTypePopover",
              role: "tooltip",
              style: nk ? {
                left: nk.left,
                top: nk.top,
                maxWidth: Ve
              } : {
                visibility: "hidden"
              },
              onMouseEnter: Yk,
              onMouseLeave: Lk,
              onFocus: Yk,
              onBlur: Lk,
              children: [(0, Uk.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, Uk.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: ek
                }), Sk && (0, Uk.jsxs)(bk.b, {
                  ref: Mk,
                  className: "DocsTypePopoverLink",
                  to: Tk(fk, ak(Sk)),
                  onClick: () => {
                    xk(!1)
                  },
                  onKeyDown: kk => {
                    if ("Tab" === kk.key) {
                      var ek;
                      if (kk.preventDefault(), kk.shiftKey || !rk.current || ! function(kk, ek) {
                          const ik = [...document.querySelectorAll(ue)],
                            Dk = ik.slice(ik.indexOf(kk) + 1).find((kk => kk.getClientRects().length > 0 && !(null !== ek && void 0 !== ek && ek.contains(kk))));
                          return null === Dk || void 0 === Dk || Dk.focus(), void 0 !== Dk
                        }(rk.current, Pk.current)) null === (ek = rk.current) || void 0 === ek || ek.focus();
                      kk.shiftKey || xk(!1)
                    }
                  },
                  children: [ak(Sk).title, (0, Uk.jsx)(wk, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, Uk.jsx)(Ak, {
                lang: "ts",
                code: ik,
                compact: !0
              })]
            }), null !== pk && void 0 !== pk ? pk : document.body)]
          })
        }
        var ze = ik(189),
          Qe = ik(4711),
          ve = ik(4713),
          Ee = ik(4716);
        const he = {
          progressBar: {
            Sk: 30,
            bk: .075,
            rk: 5,
            Pk: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Kk: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            nk: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Uk: !0,
            scale: 3,
            rotation: 15,
            Hk: !1
          },
          gravityBar: {
            Sk: 30,
            lk: .25,
            yk: 3,
            Yk: .8,
            gravity: 1,
            Lk: 1.5,
            Ck: 8,
            Ak: 4,
            Pk: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            sk: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Fk: 5,
            uk: 1200,
            qk: .15,
            Ik: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var ae = ik(302),
          We = ik(1946);

        function te(kk) {
          return kk.startsWith("fa-")
        }
        const Xe = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Be = {
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

        function ce(kk) {
          return "string" === typeof kk ? "text" : "entityName" in kk || "translationKey" in kk ? "other" : (0, ae.wb)(kk) ? "progressBar" : (0, ae.tb)(kk) ? "keyBinding" : "icon" in kk ? "icon" : "str" in kk && "string" === typeof kk.str ? "text" : "other"
        }
        const Te = [{
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
          oe = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...Te],
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
                options: We.n
              },
              isRequired: !0
            }, ...Te],
            other: []
          };

        function Ze(kk) {
          return "string" === typeof kk ? {
            str: kk
          } : kk
        }

        function Oe(kk, ek) {
          let ik = Ze(kk);
          for (const Dk of ek) ik = ik && "object" === typeof ik ? ik[Dk] : void 0;
          return ik
        }

        function ge(kk, ek, ik) {
          const Dk = (kk, fk) => {
            var Sk;
            const bk = ek[fk],
              rk = {
                ...kk
              };
            if (fk === ek.length - 1) return void 0 === ik ? delete rk[bk] : rk[bk] = ik, rk;
            const Pk = Dk(null !== (Sk = kk[bk]) && void 0 !== Sk ? Sk : {}, fk + 1);
            return 0 === Object.keys(Pk).length ? delete rk[bk] : rk[bk] = Pk, rk
          };
          return function(kk) {
            const ek = Object.keys(kk);
            return "string" === typeof kk.str && 1 === ek.length ? kk.str : kk
          }(Dk(Ze(kk), 0))
        }

        function Ge(kk, ek) {
          const ik = ce(kk),
            Dk = oe[ik].find((kk => kk.path.join(".") === ek.join("."))),
            fk = null !== Dk && void 0 !== Dk && Dk.isRequired && "other" !== ik ? Oe(Be[ik], ek) : void 0;
          return ge(kk, ek, fk)
        }

        function Ne(kk) {
          switch (ce(kk)) {
            case "text":
              return String(Oe(kk, ["str"]));
            case "icon":
              return String(Oe(kk, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(Oe(kk,["progress"])))}%`;
            case "keyBinding":
              return String(Oe(kk, ["action"]));
            case "other":
              return JSON.stringify(kk)
          }
        }
        const Re = /^[A-Za-z_$][\w$]*$/;

        function Je(kk) {
          if (Array.isArray(kk)) return `[${kk.map(Je).join(", ")}]`;
          if (kk && "object" === typeof kk) {
            const ek = Object.entries(kk).map((kk => {
              let [ek, ik] = kk;
              return `${Re.test(ek)?ek:JSON.stringify(ek)}: ${Je(ik)}`
            }));
            return 0 === ek.length ? "{}" : `{ ${ek.join(", ")} }`
          }
          return JSON.stringify(kk)
        }

        function ki(kk) {
          const ek = kk.map(Je),
            ik = `[${ek.join(", ")}]`;
          return ik.length <= 60 ? ik : `[\n${ek.map((kk=>`    ${kk},`)).join("\n")}\n]`
        }
        const ei = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function ii(kk) {
          let ek = "";
          for (let fk = 0; fk < kk.length; fk++) {
            const Sk = kk[fk];
            if ("\\" === Sk) {
              var ik;
              const Dk = null !== (ik = kk[fk + 1]) && void 0 !== ik ? ik : "";
              ek += "'" === Dk ? "'" : Sk + Dk, fk++
            } else if ('"' === Sk) ek += '\\"';
            else {
              var Dk;
              ek += null !== (Dk = ei[Sk]) && void 0 !== Dk ? Dk : Sk
            }
          }
          return `"${ek}"`
        }

        function Di(kk) {
          if ("string" === typeof kk) return !0;
          if (!kk || "object" !== typeof kk || Array.isArray(kk)) return !1;
          const ek = kk;
          return "ProgressBar" === ek.type ? "number" === typeof ek.progress : "StyledKeyBinding" === ek.type ? We.n.includes(ek.action) : "string" === typeof ek.icon || "string" === typeof ek.str || "string" === typeof ek.entityName || "string" === typeof ek.translationKey
        }

        function fi(kk) {
          let ek;
          try {
            ek = function(kk) {
              let ek = "",
                ik = "",
                Dk = 0;
              const fk = () => {
                ek += ik.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), ik = ""
              };
              for (; Dk < kk.length;) {
                const Sk = kk.slice(Dk).search(/["'`]|\/\//);
                if (-1 === Sk) {
                  ik += kk.slice(Dk);
                  break
                }
                ik += kk.slice(Dk, Dk + Sk);
                const bk = Dk + Sk,
                  rk = kk[bk];
                if ("/" === rk) {
                  const ek = kk.indexOf("\n", bk);
                  Dk = -1 === ek ? kk.length : ek;
                  continue
                }
                if (fk(), "`" === rk) throw new Error("Use quotes rather than template strings.");
                let Pk = bk + 1;
                for (; Pk < kk.length && kk[Pk] !== rk;) Pk += "\\" === kk[Pk] ? 2 : 1;
                if (Pk >= kk.length) throw new Error("A string is missing its closing quote.");
                const mk = kk.slice(bk + 1, Pk);
                ek += ii(mk), Dk = Pk + 1
              }
              return fk(), JSON.parse(ek)
            }(kk.trim())
          } catch (Dk) {
            return {
              parts: null,
              error: Dk instanceof SyntaxError ? "This isn't a valid array yet." : Dk.message
            }
          }
          if (!Array.isArray(ek)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const ik = ek.findIndex((kk => !Di(kk)));
          return -1 !== ik ? {
            parts: null,
            error: `Part ${ik+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: ek,
            error: null
          }
        }
        const Si = 1 / ze.g.clientTicksPerSecond,
          bi = 700,
          ri = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Pi = {
            progressBar: he.progressBar.Kk,
            timedClick: he.timedClick.icon,
            gravityBar: he.gravityBar.icon,
            precisionBar: he.precisionBar.icon,
            rhythmClick: he.rhythmClick.icon
          };

        function mi(kk) {
          let {
            type: ek
          } = kk;
          const [ik, fk] = (0, Dk.useState)("ready"), [bk, rk] = (0, Dk.useState)(1), [Pk, mk] = (0, Dk.useState)(!0), Mk = (0, Dk.useRef)(null), Kk = (0, Dk.useRef)(null), xk = (0, Dk.useRef)(null), nk = (0, Dk.useRef)(new Set), Hk = (0, Dk.useRef)(!1), lk = Pi[ek], pk = (0, Dk.useMemo)((() => ({
            getState: () => {
              var kk, ek;
              return null !== (kk = null === (ek = xk.current) || void 0 === ek ? void 0 : ek.getState()) && void 0 !== kk ? kk : ri
            },
            onFrame: kk => (nk.current.add(kk), () => {
              nk.current.delete(kk)
            })
          })), []);
          (0, Dk.useEffect)((() => {
            const kk = Mk.current,
              ek = Kk.current;
            if (!kk || !ek) return;
            const ik = new ResizeObserver((() => {
              rk(kk.clientWidth / Math.max(1, ek.offsetWidth))
            }));
            return ik.observe(kk), () => {
              ik.disconnect()
            }
          }), []), (0, Dk.useEffect)((() => {
            var kk;
            if ("playing" !== ik) return;
            let Dk = !1;
            const Sk = new Ee.e[ek](he[ek], (kk => {
              Dk = !0, mk(!1), fk(kk ? "succeeded" : "failed")
            }), (() => {}));
            xk.current = Sk;
            let bk = 0,
              rk = performance.now(),
              Pk = requestAnimationFrame((function kk(ek) {
                for (bk += Math.min(.25, (ek - rk) / 1e3), rk = ek; bk >= Si && !Dk;) bk -= Si, Sk.handleTick(Si);
                for (const ik of nk.current) ik();
                Dk || (Pk = requestAnimationFrame(kk))
              }));
            return null === (kk = Mk.current) || void 0 === kk || kk.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Pk), Sk.tearDown(), xk.current = null, Hk.current = !1
            }
          }), [ik, ek]), (0, Dk.useEffect)((() => {
            if (Pk) return;
            const kk = setTimeout((() => {
              mk(!0)
            }), bi);
            return () => {
              clearTimeout(kk)
            }
          }), [Pk]);
          const yk = kk => {
            var ek;
            "playing" === ik && Hk.current !== kk && (Hk.current = kk, null === (ek = xk.current) || void 0 === ek || ek.handleMouseInput(kk))
          };
          return (0, Uk.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, Uk.jsxs)("div", {
              ref: Mk,
              className: Sk()("DocsQteStage", {
                Playing: "playing" === ik
              }),
              tabIndex: "playing" === ik ? 0 : -1,
              role: "playing" === ik ? "button" : void 0,
              "aria-label": "playing" === ik ? `${ek} quick time event: click or press Space` : void 0,
              onPointerDown: kk => {
                0 === kk.button && yk(!0)
              },
              onPointerUp: () => {
                yk(!1)
              },
              onPointerLeave: () => {
                yk(!1)
              },
              onPointerCancel: () => {
                yk(!1)
              },
              onKeyDown: kk => {
                "playing" !== ik || " " !== kk.key && "Enter" !== kk.key || (kk.preventDefault(), yk(!0))
              },
              onKeyUp: kk => {
                "playing" !== ik || " " !== kk.key && "Enter" !== kk.key || yk(!1)
              },
              children: [(0, Uk.jsx)("div", {
                ref: Kk,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${bk})`
                },
                children: "playing" === ik && (0, Uk.jsx)(ve.c.Provider, {
                  value: pk,
                  children: (0, Uk.jsx)(Qe.b, {
                    qte: {
                      type: ek,
                      parameters: he[ek]
                    }
                  })
                })
              }), "playing" !== ik && (0, Uk.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== ik && (0, Uk.jsxs)("div", {
                  className: Sk()("DocsQteResult", "succeeded" === ik ? "Succeeded" : "Failed"),
                  children: [(0, Uk.jsx)(wk, {
                    name: "succeeded" === ik ? "check" : "cross",
                    isTinted: !0
                  }), (0, Uk.jsx)("span", {
                    children: "succeeded" === ik ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, Uk.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Pk,
                  onClick: () => {
                    fk("playing")
                  },
                  children: [(0, Uk.jsx)(wk, {
                    name: "ready" === ik ? "play" : "replay"
                  }), (0, Uk.jsx)("span", {
                    children: "ready" === ik ? `Try ${ek}` : "Play again"
                  })]
                })]
              })]
            }), lk && !te(lk) && (0, Uk.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, Uk.jsx)("code", {
                children: lk
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Mi(kk) {
          let {
            level: ek,
            text: ik,
            anchor: Dk,
            className: fk
          } = kk;
          const bk = `h${Math.min(ek,6)}`;
          return (0, Uk.jsxs)(bk, {
                id: Dk,
                className: Sk()("DocsHeading", fk),
                children: [(0, Uk.jsx)(Ae, {
                      text: ik
                    }), (0, Uk.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Dk}`,
                        "aria-label": `Link to ${ik.replace(/`/g,"")}`,children:"#"})]})}function Ki(kk){let{items:ek,ordered:ik}=kk;const Dk=ik?"ol":"ul";return(0,Uk.jsx)(Dk,{className:"DocsList",children:ek.map(((kk,ek)=>(0,Uk.jsxs)("li",{children:[(0,Uk.jsx)(Ae,{text:kk.text}),kk.children.length>0&&(0,Uk.jsx)(Ki,{items:kk.children,ordered:ik})]},ek)))})}function xi(kk){const ek=kk[0],ik="paragraph"===(null===ek||void 0===ek?void 0:ek.kind)?ek.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(ik)?"warning":/^\*\*(tip|prefer)/.test(ik)?"tip":"note"}function ni(kk){let{block:ek}=kk;switch(ek.kind){case"heading":return(0,Uk.jsx)(Mi,{level:ek.level,text:ek.text,anchor:ek.anchor});case"paragraph":return(0,Uk.jsx)("p",{children:(0,Uk.jsx)(Ae,{text:ek.text})});case"code":{const kk="ts"===ek.lang?function(kk){const ek=kk.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return ek&&Object.hasOwn(he,ek[1])?ek[1]:null}(ek.code):null;return(0,Uk.jsxs)(Uk.Fragment,{children:[(0,Uk.jsx)(Ak,{code:ek.code,lang:ek.lang}),kk&&(0,Uk.jsx)(mi,{type:kk})]})}case"table":return(0,Uk.jsx)("div",{className:"DocsTableScroll",children:(0,Uk.jsxs)("table",{className:"DocsTable",children:[(0,Uk.jsx)("thead",{children:(0,Uk.jsx)("tr",{children:ek.header.map(((kk,ek)=>(0,Uk.jsx)("th",{children:(0,Uk.jsx)(Ae,{text:kk})},ek)))})}),(0,Uk.jsx)("tbody",{children:ek.rows.map(((kk,ek)=>(0,Uk.jsx)("tr",{children:kk.map(((kk,ek)=>(0,Uk.jsx)("td",{children:(0,Uk.jsx)(Ae,{text:kk})},ek)))},ek)))})]})});case"list":return(0,Uk.jsx)(Ki,{items:ek.items,ordered:ek.ordered});case"quote":return(0,Uk.jsx)("aside",{className:Sk()("DocsCallout",xi(ek.blocks)),children:(0,Uk.jsx)(Ui,{blocks:ek.blocks})});case"rule":return(0,Uk.jsx)("hr",{className:"DocsRule"})}}function Ui(kk){let{blocks:ek}=kk;return(0,Uk.jsx)(Uk.Fragment,{children:ek.map(((kk,ek)=>(0,Uk.jsx)(ni,{block:kk},ek)))})}var Hi=ik(4691),wi=ik(4699);function li(kk){return"blocks"===kk||"items"===kk}const yi=new Map;function Yi(kk){let ek=yi.get(kk);return ek||(ek=function(kk){const ek={entries:[],legend:[],notes:[],examples:[]};let ik=!1;for(const Sk of kk.split(/\r?\n/).slice(1)){if(Sk.startsWith("#")){const kk=Sk.replace(/^# ?/,""),Dk=kk.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Dk?ek.legend.push({code:Dk[1],meaning:Dk[2],usage:Dk[3].trim()}):/^Examples:/.test(kk.trim())?ik=!0:ik&&kk.trim()?ek.examples.push(kk.trim()):kk.trim()&&!/^\s/.test(kk)&&ek.notes.push(kk.trim());continue}const kk=Sk.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Dk,fk;kk&&ek.entries.push({name:kk[1],variants:null!==(Dk=null===(fk=kk[2])||void 0===fk?void 0:fk.split(","))&&void 0!==Dk?Dk:[]})}return ek}("blocks"===kk?Hi:wi),yi.set(kk,ek)),ek}function Li(kk){let{className:ek,value:ik,placeholder:Dk,label:fk,onChange:Sk,count:bk,children:rk}=kk;return(0,Uk.jsxs)("div",{className:ek,children:[(0,Uk.jsx)(wk,{name:"magnifying-glass"}),(0,Uk.jsx)("input",{type:"search",value:ik,placeholder:Dk,"aria-label":fk,onChange:kk=>{Sk(kk.target.value)}}),rk,bk&&(0,Uk.jsxs)("span",{className:"DocsFilterCount",children:[bk.visible," of ",bk.total]})]})}var Ci=ik(1033);function Ai(kk){const ek=kk.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return ek?ek[2]:null}function ji(kk){return"paragraph"===kk.kind&&""===kk.text.trim()}function si(kk){const ek={name:kk.heading.text,description:[],params:[],returns:null};let ik="description";for(const fk of kk.blocks)if(!ji(fk))if("heading"===fk.kind&&/^Parameters:?$/.test(fk.text))ik="params";else if("heading"===fk.kind&&/^Returns:?$/.test(fk.text))ik="returns",ek.returns={type:"",description:[]};else if("params"!==ik||"table"!==fk.kind){if("returns"===ik&&"paragraph"===fk.kind&&""===ek.returns.type){const kk=Ai(fk.text);if(null!==kk){ek.returns.type=kk.replaceAll("\\|","|");continue}}"returns"===ik?ek.returns.description.push(fk):ek.description.push(fk)}else for(const[kk,ik,Sk]of fk.rows){var Dk;ek.params.push({name:kk,type:null!==(Dk=Ai(ik))&&void 0!==Dk?Dk:ik,description:null!==Sk&&void 0!==Sk?Sk:""})}return ek}const di=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function Vi(kk){return kk.filter((kk=>!ji(kk)))}const Fi=/^[\w][\w .'&!:()-]*$/,ui=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function qi(kk){var ek;if("code"===kk.kind&&"text"===kk.lang){const ek=kk.code.split("\n").map((kk=>kk.trim())).filter(Boolean);return ek.length>0&&ek.every((kk=>Fi.test(kk)))?ek.map((kk=>({name:kk}))):null}return"paragraph"===kk.kind&&ui.test(kk.text.trim())?[...kk.text.matchAll(/`([ ^ `]+)` / g)].flatMap((kk => kk[1].split(/,\s*/).map((kk => ({
                              name: kk.trim()
                            }))))): "table" === kk.kind && null !== (ek = kk.header[0]) && void 0 !== ek && ek.startsWith("Song") ? kk.rows.map((kk => {
                              let [ek, ik] = kk;
                              return {
                                name: ek.replace(/`/g, ""),
                                caption: ik
                              }
                            })) : null
                          }

                          function Ii(kk) {
                            const ek = [];
                            for (const ik of kk) {
                              const kk = qi(ik),
                                Dk = ek.at(-1),
                                fk = "table" === ik.kind;
                              kk ? "names" === (null === Dk || void 0 === Dk ? void 0 : Dk.kind) && Dk.isSongs === fk ? Dk.names.push(...kk) : ek.push({
                                kind: "names",
                                names: kk,
                                isSongs: fk
                              }) : ek.push({
                                kind: "block",
                                block: ik
                              })
                            }
                            return ek
                          }
                          const zi = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Qi(kk, ek) {
                            return `${zi[kk]}-${(0,jk.q)(ek)}`
                          }
                          const vi = new WeakMap;

                          function Ei(kk, ek, ik) {
                            let Dk = vi.get(ek);
                            if (!Dk) {
                              Dk = new Map;
                              const ik = new Set;
                              for (const fk of (0, jk.u)(ek)) {
                                const ek = Ii(Vi(fk.blocks)).map((ek => {
                                  if ("block" === ek.kind) return ek;
                                  return {
                                    kind: "names",
                                    names: ek.names.map((ek => {
                                      var Dk, Sk;
                                      const bk = Qi(kk, ek.name);
                                      let rk = bk;
                                      for (let kk = 2; ik.has(rk); kk++) rk = `${bk}-${kk}`;
                                      return ik.add(rk), {
                                        ...ek,
                                        anchor: rk,
                                        heading: null !== (Dk = null === (Sk = fk.heading) || void 0 === Sk ? void 0 : Sk.text) && void 0 !== Dk ? Dk : ""
                                      }
                                    })),
                                    isSongs: ek.isSongs
                                  }
                                }));
                                Dk.set(fk.blocks, ek)
                              }
                              vi.set(ek, Dk)
                            }
                            const fk = Dk.get(ik);
                            if (!fk) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return fk
                          }
                          const ai = "/textures/docs/skinPreviews",
                            Wi = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var ti = ik(4172),
                            Xi = ik(4189);

                          function Bi(kk) {
                            return Object.hasOwn(ti.h, kk) ? ti.h[kk] : null
                          }
                          const ci = {
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
                            blendMode: Xi.h.Standard
                          };

                          function Ti(kk, ek, ik) {
                            return ek + (ik - ek) * kk()
                          }

                          function oi(kk, ek, ik) {
                            return kk + (ek - kk) * ik
                          }

                          function Zi(kk) {
                            return kk.length > 0 && "timeFraction" in kk[0]
                          }

                          function Oi(kk, ek) {
                            if (0 === kk.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Zi(kk.colorGradients)) {
                              const ik = kk.colorGradients,
                                {
                                  color: Dk
                                } = ik[Math.floor(ek() * ik.length) % ik.length];
                              return [{
                                at: 0,
                                colour: [Dk[0] / 255, Dk[1] / 255, Dk[2] / 255, 1]
                              }]
                            }
                            return [...kk.colorGradients].sort(((kk, ek) => kk.timeFraction - ek.timeFraction)).map((kk => {
                              var ik, Dk, fk;
                              const Sk = kk.minColor,
                                bk = null !== (ik = kk.maxColor) && void 0 !== ik ? ik : Sk,
                                rk = ek(),
                                Pk = [oi(Sk[0], bk[0], rk) / 255, oi(Sk[1], bk[1], rk) / 255, oi(Sk[2], bk[2], rk) / 255, oi(null !== (Dk = Sk[3]) && void 0 !== Dk ? Dk : 1, null !== (fk = bk[3]) && void 0 !== fk ? fk : 1, rk)];
                              return {
                                at: kk.timeFraction,
                                colour: Pk
                              }
                            }))
                          }

                          function gi(kk, ek, ik, Dk) {
                            const fk = Ti(Dk, kk.minEmitPower, kk.maxEmitPower),
                              Sk = ek => Ti(Dk, Math.min(kk.dir1[ek], kk.dir2[ek]), Math.max(kk.dir1[ek], kk.dir2[ek])) * fk,
                              bk = [...kk.velocityGradients].sort(((kk, ek) => kk.timeFraction - ek.timeFraction)).map((kk => ({
                                at: kk.timeFraction,
                                factor: Ti(Dk, kk.factor, kk.factor2)
                              })));
                            return {
                              pos: [Ti(Dk, ek[0], ik[0]), Ti(Dk, ek[1], ik[1]), Ti(Dk, ek[2], ik[2])],
                              dir: [Sk(0), Sk(1), Sk(2)],
                              age: 0,
                              life: Ti(Dk, kk.minLifeTime, kk.maxLifeTime),
                              size: Ti(Dk, kk.minSize, kk.maxSize),
                              colours: Oi(kk, Dk),
                              velocityFactors: bk
                            }
                          }

                          function Gi(kk, ek, ik, Dk) {
                            if (ek < kk[0].at) return ik(Math.min(1, kk.length - 1));
                            for (let fk = 0; fk < kk.length - 1; fk++)
                              if (ek <= kk[fk + 1].at) {
                                const Sk = kk[fk + 1].at - kk[fk].at;
                                return Dk(ik(fk), ik(fk + 1), Sk > 0 ? (ek - kk[fk].at) / Sk : 1)
                              } return ik(kk.length - 1)
                          }

                          function Ni(kk) {
                            return Gi(kk.colours, kk.age / kk.life, (ek => kk.colours[ek].colour), ((kk, ek, ik) => [oi(kk[0], ek[0], ik), oi(kk[1], ek[1], ik), oi(kk[2], ek[2], ik), oi(kk[3], ek[3], ik)]))
                          }

                          function Ri(kk, ek, ik) {
                            if (kk.age += ik, kk.age >= kk.life) return !1;
                            const Dk = function(kk) {
                              return 0 === kk.velocityFactors.length ? 1 : Gi(kk.velocityFactors, kk.age / kk.life, (ek => kk.velocityFactors[ek].factor), oi)
                            }(kk) * ik;
                            for (let Sk = 0; Sk < 3; Sk++) {
                              var fk;
                              kk.pos[Sk] += kk.dir[Sk] * Dk, kk.dir[Sk] += (null !== (fk = ek[Sk]) && void 0 !== fk ? fk : 0) * ik
                            }
                            return !0
                          }

                          function Ji(kk) {
                            return String(Math.round(1e6 * kk) / 1e6)
                          }

                          function kD(kk) {
                            return `[${kk.map(Ji).join(", ")}]`
                          }

                          function eD(kk, ek) {
                            const ik = `${ek}    `;
                            return `[\n${(Zi(kk)?kk.map((kk=>{const ek=[`${ik}    timeFraction: ${Ji(kk.timeFraction)},`,`${ik}    minColor: ${kD(kk.minColor)},`];return kk.maxColor&&ek.push(`${ik}    maxColor: ${kD(kk.maxColor)},`),`${ik}{\n${ek.join("\n")}\n${ik}},`})):kk.map((kk=>`
                            $ {
                              ik
                            } {
                              color: $ {
                                kD(kk.color)
                              }
                            }, `))).join("\n")}\n${ek}]`
                          }
                          const iD = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            DD = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const fD = .6;

                          function SD(kk, ek) {
                            return `${ek?"song":"sound"}:${kk}`
                          }
                          let bD = {
                              track: null,
                              volume: fD
                            },
                            rD = null,
                            PD = 0,
                            mD = 0;
                          const MD = new Set;

                          function KD(kk) {
                            bD = {
                              ...bD,
                              ...kk
                            }, MD.forEach((kk => {
                              kk()
                            }))
                          }

                          function xD(kk) {
                            bD.track && KD({
                              track: {
                                ...bD.track,
                                ...kk
                              }
                            })
                          }

                          function nD(kk) {
                            const [ek, ik] = (0, Dk.useState)((() => kk(bD))), fk = (0, Dk.useRef)(kk);
                            return fk.current = kk, (0, Dk.useEffect)((() => {
                              const kk = () => {
                                ik((() => fk.current(bD)))
                              };
                              return MD.add(kk), kk(), () => {
                                MD.delete(kk)
                              }
                            }), []), ek
                          }

                          function UD() {
                            PD++;
                            const kk = rD;
                            rD = null, null === kk || void 0 === kk || kk.stop()
                          }

                          function HD(kk, ek) {
                            let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            UD();
                            const fk = PD,
                              {
                                track: Sk
                              } = bD,
                              bk = Sk && Sk.name === kk && Sk.isSong === ek ? Sk.duration : 0;
                            mD = Dk, KD({
                              track: {
                                name: kk,
                                isSong: ek,
                                status: "loading",
                                duration: bk
                              }
                            }), Promise.all([ik.e(220), ik.e(245)]).then((() => ik(39359))).then((ik => {
                              let {
                                playDocsSound: Sk
                              } = ik;
                              fk === PD && (rD = Sk(kk, ek, bD.volume, Dk, {
                                onPlay: kk => {
                                  fk === PD && xD({
                                    status: "playing",
                                    duration: kk
                                  })
                                },
                                onEnd: kk => {
                                  var ek, ik;
                                  fk === PD && (rD = null, kk ? KD({
                                    track: null
                                  }) : (mD = null !== (ek = null === (ik = bD.track) || void 0 === ik ? void 0 : ik.duration) && void 0 !== ek ? ek : 0, xD({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((ek => {
                              console.error(`Could not play docs sound ${kk}`, ek), fk === PD && KD({
                                track: null
                              })
                            }))
                          }

                          function wD() {
                            const {
                              track: kk
                            } = bD;
                            if (!kk) return;
                            if ("playing" === kk.status && rD) return mD = rD.vy(), rD.pause(), void xD({
                              status: "paused"
                            });
                            if ("loading" === kk.status) return UD(), void xD({
                              status: "paused"
                            });
                            if (rD) return void rD.resume();
                            const ek = kk.duration > 0 && mD >= kk.duration - .05;
                            HD(kk.name, kk.isSong, ek ? 0 : mD)
                          }

                          function lD() {
                            var kk;
                            return rD && "playing" === (null === (kk = bD.track) || void 0 === kk ? void 0 : kk.status) ? rD.vy() : mD
                          }

                          function pD(kk) {
                            var ek;
                            null === (ek = rD) || void 0 === ek || ek.setVolume(kk), KD({
                              volume: kk
                            })
                          }

                          function yD() {
                            UD(), mD = 0, KD({
                              track: null
                            })
                          }
                          const YD = (0, Dk.createContext)(null);
                          let LD = null;

                          function CD() {
                            const [kk, ek] = (0, Dk.useState)(null);
                            return (0, Dk.useEffect)((() => {
                              let kk = !1;
                              return LD ??= Promise.all([ik.e(72), ik.e(75), ik.e(74), ik.e(73), ik.e(188), ik.e(98), ik.e(224)]).then((() => ik(39356))), LD.then((ik => {
                                kk || ek(ik)
                              }), (kk => {
                                console.error("Could not load the docs gallery's textures", kk), LD = null
                              })), () => {
                                kk = !0
                              }
                            }), []), kk
                          }
                          const AD = 24,
                            jD = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function sD(kk, ek) {
                            const ik = "skins" === kk ? function(kk, ek) {
                              const ik = Wi.find((ek => kk.startsWith(ek.heading)));
                              return ik ? function(kk, ek) {
                                return `${kk}-${ek}`
                              }(ik.prefix, ek) : null
                            }(ek.heading, ek.name) : null;
                            return null === ik ? null : `${ai}/${ik}.webp`
                          }

                          function dD(kk) {
                            let {
                              kind: ek,
                              entry: ik,
                              assets: fk,
                              renderedUrl: bk
                            } = kk;
                            const {
                              name: rk
                            } = ik, [Pk, mk] = (0, Dk.useState)(!1);
                            if ("icons" === ek && te(rk)) return (0, Uk.jsx)(Ci.d, {
                              className: "DocsTileIcon",
                              name: rk
                            });
                            let Mk = null;
                            var Kk;
                            if ("icons" === ek) Mk = null !== (Kk = null === fk || void 0 === fk ? void 0 : fk.getIngameIconUrl(rk)) && void 0 !== Kk ? Kk : null;
                            else if ("particles" === ek) {
                              var xk, nk, Hk;
                              Mk = null !== (xk = null === fk || void 0 === fk ? void 0 : fk.getParticleTextureUrl(null !== (nk = null === (Hk = Bi(rk)) || void 0 === Hk ? void 0 : Hk.texture) && void 0 !== nk ? nk : rk)) && void 0 !== xk ? xk : null
                            } else "skins" === ek && (Mk = null !== bk && void 0 !== bk ? bk : jD.test(rk) ? `/textures/charSkins/previews/${rk}_preview.png` : null);
                            return !Mk || Pk ? (0, Uk.jsx)(wk, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === ek ? "person" : "image"
                            }) : (0, Uk.jsx)("img", {
                              className: Sk()("DocsTileImage", {
                                Pixelated: "skins" !== ek
                              }),
                              src: Mk,
                              srcSet: Mk === bk ? `${Mk} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Mk}`), mk(!0)
                              }
                            })
                          }

                          function VD(kk) {
                            let {
                              entry: ek,
                              isSong: ik
                            } = kk;
                            const Dk = nD((kk => {
                                let {
                                  track: Dk
                                } = kk;
                                return (null === Dk || void 0 === Dk ? void 0 : Dk.name) === ek.name && Dk.isSong === ik ? Dk.status : null
                              })),
                              fk = null !== Dk && "paused" !== Dk;
                            return (0, Uk.jsxs)("button", {
                              type: "button",
                              id: ek.anchor,
                              className: Sk()("DocsSoundTile", {
                                Playing: fk
                              }),
                              "data-docs-track": SD(ek.name, ik),
                              "aria-label": fk ? `Pause ${ek.name}` : `Play ${ek.name}`,
                              onClick: () => {
                                null !== Dk ? wD() : HD(ek.name, ik)
                              },
                              children: [(0, Uk.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, Uk.jsx)(wk, {
                                  name: fk ? "pause" : "play"
                                })
                              }), (0, Uk.jsx)("code", {
                                className: "DocsSoundName",
                                children: ek.name
                              }), ek.caption && (0, Uk.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: ek.caption
                              })]
                            })
                          }

                          function FD(kk) {
                            let {
                              kind: ek,
                              names: ik,
                              isSongs: fk
                            } = kk;
                            const bk = CD(),
                              [rk, Pk] = pk(),
                              mk = !1 === (null === rk || void 0 === rk ? void 0 : rk.failed) ? rk.text : null,
                              Mk = (0, Dk.useContext)(YD),
                              [Kk, xk] = (0, Dk.useState)(""),
                              nk = Kk.trim().toLowerCase(),
                              Hk = nk ? ik.filter((kk => kk.name.toLowerCase().includes(nk))) : ik;
                            return (0, Uk.jsxs)("div", {
                              className: "DocsGallery",
                              children: [ik.length > AD && (0, Uk.jsx)(Li, {
                                className: "DocsGalleryFilter",
                                value: Kk,
                                placeholder: `Filter ${ik.length} names\u2026`,
                                label: "Filter names",
                                onChange: xk,
                                count: nk ? {
                                  visible: Hk.length,
                                  total: ik.length
                                } : null
                              }), (0, Uk.jsx)("div", {
                                className: Sk()("DocsGalleryGrid", `Kind-${ek}`, {
                                  Songs: fk
                                }),
                                children: Hk.map((kk => {
                                  if ("sounds" === ek) return (0, Uk.jsx)(VD, {
                                    entry: kk,
                                    isSong: fk
                                  }, kk.anchor);
                                  if (Mk && "particles" === ek && Bi(kk.name)) return (0, Uk.jsxs)("button", {
                                    type: "button",
                                    id: kk.anchor,
                                    className: Sk()("DocsTile Previewable", {
                                      Copied: mk === kk.name
                                    }),
                                    title: `Play "${kk.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Mk(kk.name), Pk(kk.name)
                                    },
                                    children: [(0, Uk.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, Uk.jsx)(dD, {
                                        kind: ek,
                                        entry: kk,
                                        assets: bk,
                                        renderedUrl: null
                                      }), (0, Uk.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, Uk.jsx)(wk, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, Uk.jsx)("span", {
                                      className: "DocsTileName",
                                      children: mk === kk.name ? "Copied!" : kk.name
                                    })]
                                  }, kk.anchor);
                                  const ik = sD(ek, kk);
                                  return (0, Uk.jsxs)("button", {
                                    type: "button",
                                    id: kk.anchor,
                                    className: Sk()("DocsTile", {
                                      Copied: mk === kk.name
                                    }),
                                    title: `Copy "${kk.name}"`,
                                    onClick: () => {
                                      Pk(kk.name)
                                    },
                                    children: [(0, Uk.jsx)("span", {
                                      className: Sk()("DocsTilePreview", {
                                        Rendered: null !== ik
                                      }),
                                      children: (0, Uk.jsx)(dD, {
                                        kind: ek,
                                        entry: kk,
                                        assets: bk,
                                        renderedUrl: ik
                                      })
                                    }), (0, Uk.jsx)("span", {
                                      className: "DocsTileName",
                                      children: mk === kk.name ? "Copied!" : kk.name
                                    })]
                                  }, kk.anchor)
                                }))
                              })]
                            })
                          }

                          function uD(kk) {
                            let {
                              kind: ek,
                              content: ik,
                              blocks: Dk
                            } = kk;
                            return (0, Uk.jsx)(Uk.Fragment, {
                              children: Ei(ek, ik, Dk).map(((kk, ik) => "block" === kk.kind ? (0, Uk.jsx)(ni, {
                                block: kk.block
                              }, ik) : (0, Uk.jsx)(FD, {
                                kind: ek,
                                names: kk.names,
                                isSongs: kk.isSongs
                              }, ik)))
                            })
                          }
                          const qD = [{
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

                          function ID(kk) {
                            let {
                              cards: ek = qD,
                              label: ik = "Start here"
                            } = kk;
                            const fk = (0, Dk.useContext)(Ue);
                            return (0, Uk.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": ik,
                              children: ek.map((kk => {
                                let {
                                  pageId: ek,
                                  countNoun: ik
                                } = kk;
                                const Dk = ak(ek);
                                return (0, Uk.jsxs)(bk.b, {
                                  to: Tk(fk, Dk),
                                  className: "DocsLandingCard",
                                  children: [(0, Uk.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, Uk.jsx)(wk, {
                                      name: Dk.icon
                                    })
                                  }), (0, Uk.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Dk.title
                                  }), (0, Uk.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Dk.summary
                                  }), ik && (0, Uk.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [tk(Dk).sections.length, " ", ik]
                                  })]
                                }, ek)
                              }))
                            })
                          }
                          const zD = 240;

                          function QD(kk) {
                            let {
                              faces: ek
                            } = kk;
                            return (0, Uk.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, Uk.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${ek.top}")`
                                }
                              }), (0, Uk.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${ek.left}")`
                                }
                              }), (0, Uk.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${ek.right}")`
                                }
                              })]
                            })
                          }

                          function vD(kk) {
                            let {
                              src: ek
                            } = kk;
                            const [ik, fk] = (0, Dk.useState)(!1);
                            return ik ? null : (0, Uk.jsx)("img", {
                              src: ek,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${ek}`), fk(!0)
                              }
                            })
                          }

                          function ED(kk) {
                            let {
                              kind: ek
                            } = kk;
                            const ik = Yi(ek),
                              fk = CD(),
                              bk = (0, rk.p)(),
                              [Pk, mk] = (0, Dk.useState)(""),
                              [Mk, Kk] = (0, Dk.useState)(null),
                              [xk, nk] = (0, Dk.useState)(zD),
                              [Hk, lk] = (0, Dk.useState)(null),
                              pk = (0, Dk.useRef)(null),
                              Yk = Pk.trim().toLowerCase();
                            (0, Dk.useEffect)((() => {
                              const kk = (0, jk.p)(bk.hash),
                                Dk = ik.entries.find((ik => Qi(ek, ik.name) === kk));
                              if (Dk) pk.current = Dk.name, mk(Dk.name), Kk(null), lk(Dk.name);
                              else if (null !== pk.current) {
                                const kk = pk.current;
                                pk.current = null, mk((ek => ek === kk ? "" : ek)), lk(null)
                              }
                            }), [ik, ek, bk.hash, bk.key]), (0, Dk.useEffect)((() => {
                              var kk;
                              null !== Hk && (null === (kk = document.getElementById(Qi(ek, Hk))) || void 0 === kk || kk.scrollIntoView({
                                block: "center"
                              }))
                            }), [ek, Hk]);
                            const Lk = ik.entries.filter((kk => (!Yk || kk.name.toLowerCase().includes(Yk)) && (!Mk || kk.variants.includes(Mk))));
                            return (0, Uk.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [ik.notes.length > 0 && (0, Uk.jsx)("div", {
                                className: "DocsProse",
                                children: ik.notes.map((kk => (0, Uk.jsx)("p", {
                                  children: kk
                                }, kk)))
                              }), ik.legend.length > 0 && (0, Uk.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, Uk.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, Uk.jsx)("thead", {
                                    children: (0, Uk.jsxs)("tr", {
                                      children: [(0, Uk.jsx)("th", {
                                        children: "Code"
                                      }), (0, Uk.jsx)("th", {
                                        children: "Variant"
                                      }), (0, Uk.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, Uk.jsx)("tbody", {
                                    children: ik.legend.map((kk => (0, Uk.jsxs)("tr", {
                                      children: [(0, Uk.jsx)("td", {
                                        children: (0, Uk.jsx)("button", {
                                          type: "button",
                                          className: Sk()("DocsVariantChip", {
                                            Active: Mk === kk.code
                                          }),
                                          "aria-pressed": Mk === kk.code,
                                          title: `Show only ${ek} with ${kk.meaning} variants`,
                                          onClick: () => {
                                            Kk(Mk === kk.code ? null : kk.code)
                                          },
                                          children: kk.code
                                        })
                                      }), (0, Uk.jsx)("td", {
                                        children: kk.meaning
                                      }), (0, Uk.jsx)("td", {
                                        children: (0, Uk.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: kk.usage
                                        })
                                      })]
                                    }, kk.code)))
                                  })]
                                })
                              }), ik.examples.length > 0 && (0, Uk.jsx)(Ak, {
                                lang: "text",
                                code: ik.examples.join("\n")
                              }), (0, Uk.jsx)(Li, {
                                className: "DocsFilterBar",
                                value: Pk,
                                placeholder: `Search ${ik.entries.length} ${ek}\u2026`,
                                label: `Search ${ek}`,
                                onChange: kk => {
                                  mk(kk), nk(zD)
                                },
                                count: Yk || Mk ? {
                                  visible: Lk.length,
                                  total: ik.entries.length
                                } : null,
                                children: Mk && (0, Uk.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Kk(null)
                                  },
                                  children: [Mk, " ", (0, Uk.jsx)(wk, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, Uk.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Lk.slice(0, xk).map((kk => {
                                  const ik = "blocks" === ek ? null === fk || void 0 === fk ? void 0 : fk.getBlockFaces(kk.name) : null,
                                    Dk = fk && !ik ? fk.getItemTextureUrl(kk.name) : null;
                                  return (0, Uk.jsxs)("div", {
                                    id: Qi(ek, kk.name),
                                    className: Sk()("DocsCatalogueTile", {
                                      Linked: kk.name === Hk
                                    }),
                                    children: [(0, Uk.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [ik && (0, Uk.jsx)(QD, {
                                        faces: ik
                                      }), Dk && (0, Uk.jsx)(vD, {
                                        src: Dk
                                      })]
                                    }), (0, Uk.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: kk.name
                                    }), kk.variants.length > 0 && (0, Uk.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: kk.variants.map((kk => (0, Uk.jsx)("span", {
                                        children: kk
                                      }, kk)))
                                    }), (0, Uk.jsx)(yk, {
                                      text: kk.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, kk.name)
                                }))
                              }), Lk.length > xk && (0, Uk.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  nk(Lk.length)
                                },
                                children: ["Show all ", Lk.length]
                              }), 0 === Lk.length && (0, Uk.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", ek, " match."]
                              })]
                            })
                          }
                          var hD = ik(4759),
                            aD = ik(1557);
                          const WD = .95 * hD.d;

                          function tD(kk) {
                            return /^\s*```/.test(kk)
                          }

                          function XD(kk, ek) {
                            const ik = [
                              []
                            ];
                            let Dk = !1;
                            for (const fk of kk.split("\n")) !Dk && ek(fk) && ik.at(-1).length > 0 && ik.push([]), tD(fk) && (Dk = !Dk), ik.at(-1).push(fk);
                            return ik.map((kk => kk.join("\n").trim())).filter(Boolean)
                          }

                          function BD(kk, ek) {
                            const ik = `${"#".repeat(ek)} `,
                              Dk = [];
                            let fk = !1;
                            for (const Sk of kk.split("\n")) tD(Sk) ? fk = !fk : !fk && Sk.startsWith(ik) && Dk.push(Sk.slice(ik.length).trim());
                            return Dk
                          }

                          function cD(kk) {
                            return kk.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class TD {
                            constructor(kk, ek) {
                              this.origin = ek, this.pages = void 0, this.partPaths = new Map;
                              const ik = kk.map((kk => {
                                const ek = ek => this.resolveLinks(kk, ek).length,
                                  ik = function(kk, ek) {
                                    const ik = kk.map((kk => ek(kk.markdown) + 2)),
                                      Dk = ik.reduce(((kk, ek) => kk + ek), 0),
                                      fk = Dk / Math.ceil(Dk / WD),
                                      Sk = [];
                                    let bk = 0;
                                    return kk.forEach(((kk, ek) => {
                                      const Dk = ik[ek];
                                      (0 === Sk.length || bk + Dk > WD || bk + Dk / 2 > fk) && (Sk.push([]), bk = 0), Sk.at(-1).push(kk), bk += Dk
                                    })), Sk
                                  }(function(kk, ek) {
                                    return XD(kk, (kk => kk.startsWith("## "))).flatMap((kk => {
                                      var ik;
                                      const Dk = null !== (ik = BD(kk, 2)[0]) && void 0 !== ik ? ik : "";
                                      if (ek(kk) <= WD) return [{
                                        markdown: kk,
                                        section: Dk
                                      }];
                                      let fk = !1,
                                        Sk = "";
                                      return XD(kk, (kk => {
                                        const ek = fk && "" !== kk.trim();
                                        return fk = "" === kk.trim(), ek
                                      })).map((kk => {
                                        var ek;
                                        const ik = BD(kk, 3),
                                          fk = kk.startsWith("### ") ? ik[0] : Sk;
                                        return Sk = null !== (ek = ik.at(-1)) && void 0 !== ek ? ek : Sk, {
                                          markdown: kk,
                                          section: Dk || fk
                                        }
                                      }))
                                    }))
                                  }(cD(kk), ek), ek);
                                return {
                                  page: kk,
                                  groups: ik.length > 1 ? ik : []
                                }
                              }));
                              for (const {
                                  page: Dk,
                                  groups: fk
                                }
                                of ik) fk.forEach(((kk, ek) => {
                                const ik = (0, hD.t)(Dk.slug, ek);
                                for (const fk of kk.flatMap((kk => [...BD(kk.markdown, 2), ...BD(kk.markdown, 3)]))) {
                                  const kk = `${Dk.id}#${(0,jk.q)(fk)}`;
                                  this.partPaths.has(kk) || this.partPaths.set(kk, ik)
                                }
                              }));
                              this.pages = ik.map((kk => {
                                let {
                                  page: ek,
                                  groups: ik
                                } = kk;
                                return {
                                  page: ek,
                                  path: (0, hD.r)(ek.slug),
                                  markdown: `# ${ek.title}\n\n${this.resolveLinks(ek,cD(ek))}\n`,
                                  parts: ik.map(((kk, Dk) => this.renderPart(ek, kk, Dk, ik.length)))
                                }
                              }))
                            }
                            url(kk) {
                              return `${this.origin}${kk}`
                            }
                            getPage(kk) {
                              return this.pages.find((ek => ek.page.id === kk))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((kk => (kk.parts.length > 0 ? kk.parts : [{
                                path: kk.path,
                                label: "",
                                markdown: kk.markdown
                              }]).filter((kk => kk.markdown.length > hD.d))))
                            }
                            markdownUrl(kk, ek) {
                              const ik = ek && this.partPaths.get(`${kk.id}#${ek}`) || (0, hD.r)(kk.slug);
                              return this.url(ek ? `${ik}#${ek}` : ik)
                            }
                            resolveLinks(kk, ek) {
                              return ek.replace(/\]\((#[^)]+)\)/g, ((ek, ik) => {
                                var Dk;
                                const fk = null !== (Dk = Bk(ik)) && void 0 !== Dk ? Dk : this.samePageTarget(kk, ik);
                                return fk ? `](${this.markdownUrl(fk.page,fk.anchor)})` : ek
                              }))
                            }
                            samePageTarget(kk, ek) {
                              const ik = (0, jk.q)(ek.slice(1));
                              return Xk(kk, ik) ? {
                                page: kk,
                                anchor: ik
                              } : null
                            }
                            renderPart(kk, ek, ik, Dk) {
                              const fk = function(kk) {
                                  const ek = kk.map((kk => kk.section)).filter(Boolean);
                                  if (0 === ek.length) return "";
                                  const ik = ek[0],
                                    Dk = ek.at(-1);
                                  return ik === Dk ? ik : `${ik} to ${Dk}`
                                }(ek),
                                Sk = ek.map((kk => kk.markdown)).join("\n\n"),
                                bk = fk ? `It covers ${fk}. ` : "",
                                rk = `Part ${ik+1} of ${Dk} of [${kk.title}](${this.url((0,hD.r)(kk.slug))}). ${bk}[llms.txt](${this.url(hD.i)}) lists every part.`;
                              return {
                                path: (0, hD.t)(kk.slug, ik),
                                label: fk,
                                markdown: `# ${kk.title}, part ${ik+1} of ${Dk}\n\n${rk}\n\n${this.resolveLinks(kk,Sk)}\n`
                              }
                            }
                            llmsTxt(kk) {
                              const ek = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${oD(hD.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const ik of hk) {
                                ek.push("", `## ${ik.title}`, "");
                                for (const kk of ik.pageIds) {
                                  const ik = this.getPage(kk),
                                    {
                                      page: Dk,
                                      parts: fk
                                    } = ik,
                                    Sk = `About ${oD(ik.markdown.length)} tokens${fk.length>0?`, in ${fk.length} parts:`:"."}`;
                                  ek.push(`- [${Dk.title}](${this.url(ik.path)}): ${Dk.summary} ${Sk}`), fk.forEach(((kk, ik) => {
                                    ek.push(`  - [Part ${ik+1}${kk.label?`: ${kk.label}`:""}](${this.url(kk.path)})`)
                                  }))
                                }
                              }
                              return ek.push("", "## Optional", "", `- [Every page in one file](${this.url(hD.g)}): About ${oD(kk.length)} tokens, for a model with a large context window.`, ""), ek.join("\n")
                            }
                            llmsFullTxt() {
                              return hk.flatMap((kk => kk.pageIds.map((kk => this.getPage(kk).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const kk = this.llmsFullTxt(),
                                ek = this.llmsTxt(kk),
                                ik = new Map([
                                  [hD.n, ek],
                                  [hD.i, ek],
                                  [hD.g, kk]
                                ]);
                              for (const Dk of this.pages) {
                                ik.set(Dk.path, Dk.markdown);
                                for (const kk of Dk.parts) ik.set(kk.path, kk.markdown)
                              }
                              return ik
                            }
                          }

                          function oD(kk) {
                            return `${Math.max(1,Math.round(kk/4e3))}K`
                          }
                          let ZD = null;

                          function OD() {
                            return ZD ??= new TD(Ek, aD.c), ZD
                          }
                          const gD = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function GD(kk) {
                            return OD().getPage(kk.id).parts.length > 0 ? `Read ${hD.j}, then the parts of the Bloxd Code API's ${kk.title} page it lists, so I can ask questions about it.` : `Read ${aD.c}${(0,hD.r)(kk.slug)} so I can ask questions about it. ${hD.j} lists every page of the Bloxd Code API docs.`
                          }

                          function ND(kk) {
                            let {
                              page: ek
                            } = kk;
                            const [ik, Dk] = pk();
                            return (0, Uk.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, Uk.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Dk(OD().getPage(ek.id).markdown)
                                },
                                children: [(0, Uk.jsx)(wk, {
                                  name: !1 === (null === ik || void 0 === ik ? void 0 : ik.failed) ? "check" : "copy"
                                }), (0, Uk.jsx)("span", {
                                  children: ik ? ik.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), gD.map((kk => (0, Uk.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${kk.url}${encodeURIComponent(GD(ek))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, Uk.jsx)(wk, {
                                  name: "external-link"
                                }), (0, Uk.jsxs)("span", {
                                  children: ["Open in ", kk.name]
                                })]
                              }, kk.name)))]
                            })
                          }

                          function RD(kk) {
                            return `#${[0,1,2].map((ek=>Math.round(Math.min(255,Math.max(0,kk[ek]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function JD(kk) {
                            return [parseInt(kk.slice(1, 3), 16), parseInt(kk.slice(3, 5), 16), parseInt(kk.slice(5, 7), 16)]
                          }

                          function kf(kk) {
                            let {
                              label: ek,
                              min: ik,
                              max: Dk,
                              step: fk,
                              low: Sk,
                              high: bk,
                              onChange: rk
                            } = kk;
                            return (0, Uk.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Uk.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Uk.jsx)("span", {
                                  children: ek
                                }), (0, Uk.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Sk === bk ? Sk : `${Sk}\u2013${bk}`
                                })]
                              }), (0, Uk.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, Uk.jsx)("input", {
                                  type: "range",
                                  min: ik,
                                  max: Dk,
                                  step: fk,
                                  value: Math.min(Dk, Sk),
                                  "aria-label": `Minimum ${ek.toLowerCase()}`,
                                  onChange: kk => {
                                    const ek = Number(kk.target.value);
                                    rk(ek, Math.max(ek, bk))
                                  }
                                }), (0, Uk.jsx)("input", {
                                  type: "range",
                                  min: ik,
                                  max: Dk,
                                  step: fk,
                                  value: Math.min(Dk, bk),
                                  "aria-label": `Maximum ${ek.toLowerCase()}`,
                                  onChange: kk => {
                                    const ek = Number(kk.target.value);
                                    rk(Math.min(ek, Sk), ek)
                                  }
                                })]
                              })]
                            })
                          }

                          function ef(kk) {
                            let {
                              label: ek,
                              min: ik,
                              max: Dk,
                              step: fk,
                              value: Sk,
                              onChange: bk,
                              format: rk = String
                            } = kk;
                            return (0, Uk.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Uk.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Uk.jsx)("span", {
                                  children: ek
                                }), (0, Uk.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: rk(Sk)
                                })]
                              }), (0, Uk.jsx)("input", {
                                type: "range",
                                min: ik,
                                max: Dk,
                                step: fk,
                                value: Math.min(Dk, Math.max(ik, Sk)),
                                "aria-label": ek,
                                onChange: kk => {
                                  bk(Number(kk.target.value))
                                }
                              })]
                            })
                          }

                          function Df(kk) {
                            let {
                              opts: ek,
                              onChange: ik
                            } = kk;
                            const Dk = ek.colorGradients;
                            if (!Zi(Dk)) return (0, Uk.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Uk.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, Uk.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, Uk.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Dk.map(((kk, ek) => (0, Uk.jsx)("input", {
                                  type: "color",
                                  value: RD(kk.color),
                                  "aria-label": `Colour ${ek+1}`,
                                  onChange: kk => {
                                    const fk = [...Dk];
                                    fk[ek] = {
                                      color: JD(kk.target.value)
                                    }, ik(fk)
                                  }
                                }, ek)))
                              })]
                            });
                            const fk = (kk, ek) => {
                              const fk = [...Dk];
                              fk[kk] = ek, ik(fk)
                            };
                            return (0, Uk.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Uk.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Uk.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, Uk.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Dk.map(((kk, ek) => {
                                var ik;
                                const Dk = null !== (ik = kk.maxColor) && void 0 !== ik ? ik : kk.minColor;
                                return (0, Uk.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, Uk.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * kk.timeFraction), "%"]
                                  }), (0, Uk.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${RD(kk.minColor)}, ${RD(Dk)})`
                                    }
                                  }), (0, Uk.jsx)("input", {
                                    type: "color",
                                    value: RD(kk.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*kk.timeFraction)}%`,
                                    onChange: ik => {
                                      fk(ek, {
                                        ...kk,
                                        minColor: [...JD(ik.target.value), kk.minColor[3]]
                                      })
                                    }
                                  }), (0, Uk.jsx)("input", {
                                    type: "color",
                                    value: RD(Dk),
                                    "aria-label": `Maximum colour at ${Math.round(100*kk.timeFraction)}%`,
                                    onChange: ik => {
                                      fk(ek, {
                                        ...kk,
                                        maxColor: [...JD(ik.target.value), Dk[3]]
                                      })
                                    }
                                  })]
                                }, ek)
                              }))]
                            })
                          }
                          const ff = [-.5, -.5, -.5],
                            Sf = [.5, .5, .5],
                            bf = [0, 1, 2, 3, 4, 5, 6, 7].map((kk => [1 & kk ? Sf[0] : ff[0], 2 & kk ? Sf[1] : ff[1], 4 & kk ? Sf[2] : ff[2]]));class rf {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(kk, ek, ik, Dk) {
                              const fk = Math.round(31 * ek),
                                Sk = Math.round(31 * ik),
                                bk = Math.round(31 * Dk),
                                rk = `${fk}|${Sk}|${bk}`;
                              let Pk = this.tints.get(kk);
                              (!Pk || Pk.size > 2e3) && (Pk = new Map, this.tints.set(kk, Pk));
                              let mk = Pk.get(rk);
                              if (mk) return mk;
                              mk = document.createElement("canvas"), mk.width = kk.naturalWidth || 16, mk.height = kk.naturalHeight || 16;
                              const Mk = mk.getContext("2d");
                              return Mk ? (Mk.imageSmoothingEnabled = !1, Mk.drawImage(kk, 0, 0, mk.width, mk.height), Mk.globalCompositeOperation = "multiply", Mk.fillStyle = `rgb(${fk/31*255}, ${Sk/31*255}, ${bk/31*255})`, Mk.fillRect(0, 0, mk.width, mk.height), Mk.globalCompositeOperation = "destination-in", Mk.drawImage(kk, 0, 0, mk.width, mk.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Pk.set(rk, mk), mk
                            }
                          }

                          function Pf(kk) {
                            let {
                              opts: ek,
                              textureUrl: ik,
                              burst: fk,
                              paused: Sk
                            } = kk;
                            const bk = (0, Dk.useRef)(null),
                              rk = (0, Dk.useRef)(ek);
                            rk.current = ek;
                            const Pk = (0, Dk.useRef)(Sk);
                            Pk.current = Sk;
                            const mk = (0, Dk.useRef)(null),
                              Mk = (0, Dk.useRef)(null),
                              Kk = (0, Dk.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(kk) {
                                let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const ik = [-.5, -.5, -.5],
                                  Dk = [.5, .5, .5];
                                let fk = .5;
                                for (let Sk = 0; Sk < 40; Sk++) {
                                  const Sk = gi(kk, ik, Dk, ek),
                                    bk = Math.max(Sk.life / 30, .001);
                                  for (; Ri(Sk, kk.gravity, bk);) fk = Math.max(fk, Math.hypot(Sk.pos[0], Sk.pos[1], Sk.pos[2]) + Sk.size / 2)
                                }
                                return fk
                              }(ek)))), [ek]),
                              xk = (0, Dk.useRef)(Kk);
                            return xk.current = Kk, (0, Dk.useEffect)((() => {
                              if (mk.current = null, !ik) return;
                              const kk = new Image;
                              let ek = !1;
                              return kk.onload = () => {
                                ek || (mk.current = kk)
                              }, kk.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${ik}`)
                              }, kk.src = ik, () => {
                                ek = !0
                              }
                            }), [ik]), (0, Dk.useEffect)((() => {
                              var kk;
                              null === (kk = Mk.current) || void 0 === kk || kk.call(Mk)
                            }), [ek, fk]), (0, Dk.useEffect)((() => {
                              const kk = bk.current,
                                ek = null === kk || void 0 === kk ? void 0 : kk.getContext("2d");
                              if (!kk || !ek) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const ik = new rf;
                              let Dk = [],
                                fk = 0,
                                Sk = -.7,
                                Kk = xk.current,
                                nk = performance.now(),
                                Uk = 0,
                                Hk = !0,
                                wk = null;
                              const lk = () => {
                                const kk = rk.current,
                                  ek = Math.min(400, Math.max(0, Math.ceil(kk.manualEmitCount)));
                                Dk = [];
                                for (let ik = 0; ik < ek; ik++) Dk.push(gi(kk, ff, Sf, Math.random));
                                fk = 0
                              };
                              Mk.current = lk, lk();
                              const pk = bk => {
                                Uk = requestAnimationFrame(pk);
                                const Mk = Math.min(.05, (bk - nk) / 1e3);
                                if (nk = bk, !Hk) return;
                                const yk = window.devicePixelRatio || 1,
                                  Yk = Math.round(kk.clientWidth * yk),
                                  Lk = Math.round(kk.clientHeight * yk);
                                if (0 === Yk || 0 === Lk) return;
                                kk.width === Yk && kk.height === Lk || (kk.width = Yk, kk.height = Lk);
                                const Ck = rk.current;
                                null === wk && (Sk += .18 * Mk), Kk += (xk.current - Kk) * Math.min(1, 4 * Mk);
                                const Ak = .6 * Mk;
                                Dk = Dk.filter((kk => Ri(kk, Ck.gravity, Ak))), 0 !== Dk.length || Pk.current || (fk += Mk, fk > .6 && lk());
                                const jk = function(kk, ek, ik, Dk) {
                                  const fk = 3.2 * Dk,
                                    Sk = .44 * Math.min(kk, ek) * fk / Dk,
                                    bk = Math.cos(ik),
                                    rk = Math.sin(ik),
                                    Pk = Math.cos(.42),
                                    mk = Math.sin(.42);
                                  return (ik, Dk, Mk) => {
                                    const Kk = ik * rk + Mk * bk,
                                      xk = fk - (Dk * mk + Kk * Pk);
                                    if (xk < .05) return null;
                                    const nk = Sk / xk;
                                    return {
                                      x: kk / 2 + (ik * bk - Mk * rk) * nk,
                                      y: ek / 2 - (Dk * Pk - Kk * mk) * nk,
                                      scale: nk,
                                      depth: xk
                                    }
                                  }
                                }(Yk, Lk, Sk, Kk);
                                ! function(kk, ek, ik, Dk, fk) {
                                  const Sk = kk.createLinearGradient(0, 0, 0, ik);
                                  Sk.addColorStop(0, "#23262d"), Sk.addColorStop(1, "#16181c"), kk.globalCompositeOperation = "source-over", kk.globalAlpha = 1, kk.fillStyle = Sk, kk.fillRect(0, 0, ek, ik);
                                  const bk = (ek, ik) => {
                                      const fk = Dk(ek[0], ek[1], ek[2]),
                                        Sk = Dk(ik[0], ik[1], ik[2]);
                                      fk && Sk && (kk.beginPath(), kk.moveTo(fk.x, fk.y), kk.lineTo(Sk.x, Sk.y), kk.stroke())
                                    },
                                    rk = Math.ceil(fk) + 1,
                                    Pk = ff[1];
                                  kk.lineWidth = 1, kk.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let mk = -rk; mk <= rk; mk++) bk([mk + .5, Pk, .5 - rk], [mk + .5, Pk, rk + .5]), bk([.5 - rk, Pk, mk + .5], [rk + .5, Pk, mk + .5]);
                                  kk.strokeStyle = "rgba(255, 255, 255, 0.28)", kk.setLineDash([4, 4]);
                                  for (const mk of bf)
                                    for (const kk of bf) {
                                      const ek = [0, 1, 2].filter((ek => mk[ek] !== kk[ek]));
                                      1 === ek.length && mk[ek[0]] < kk[ek[0]] && bk(mk, kk)
                                    }
                                  kk.setLineDash([])
                                }(ek, Yk, Lk, jk, Kk);
                                const sk = mk.current,
                                  dk = Dk.map((kk => ({
                                    particle: kk,
                                    at: jk(kk.pos[0], kk.pos[1], kk.pos[2])
                                  }))).filter((kk => null !== kk.at)).sort(((kk, ek) => ek.at.depth - kk.at.depth));
                                ek.imageSmoothingEnabled = !1;
                                for (const kk of function(kk) {
                                    switch (kk) {
                                      case Xi.h.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Xi.h.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Xi.h.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Xi.h.MultiplyAdd:
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
                                  }(Ck.blendMode)) {
                                  ek.globalCompositeOperation = kk.operation;
                                  for (const {
                                      particle: Dk,
                                      at: fk
                                    }
                                    of dk) {
                                    const [Sk, bk, rk, Pk] = Ni(Dk), mk = Math.max(1, Dk.size * fk.scale);
                                    ek.globalAlpha = kk.usesAlpha ? Math.min(1, Math.max(0, Pk)) : 1, sk ? ek.drawImage(ik.get(sk, Sk, bk, rk), fk.x - mk / 2, fk.y - mk / 2, mk, mk) : (ek.fillStyle = `rgb(${255*Sk}, ${255*bk}, ${255*rk})`, ek.fillRect(fk.x - mk / 2, fk.y - mk / 2, mk, mk))
                                  }
                                }
                                ek.globalCompositeOperation = "source-over", ek.globalAlpha = 1
                              };
                              Uk = requestAnimationFrame(pk);
                              const yk = new IntersectionObserver((kk => {
                                let [ek] = kk;
                                Hk = ek.isIntersecting
                              }));
                              yk.observe(kk);
                              const Yk = ek => {
                                  wk = ek.clientX, kk.setPointerCapture(ek.pointerId)
                                },
                                Lk = kk => {
                                  null !== wk && (Sk += .01 * (kk.clientX - wk), wk = kk.clientX)
                                },
                                Ck = () => {
                                  wk = null
                                };
                              return kk.addEventListener("pointerdown", Yk), kk.addEventListener("pointermove", Lk), kk.addEventListener("pointerup", Ck), kk.addEventListener("pointercancel", Ck), () => {
                                cancelAnimationFrame(Uk), yk.disconnect(), Mk.current = null, kk.removeEventListener("pointerdown", Yk), kk.removeEventListener("pointermove", Lk), kk.removeEventListener("pointerup", Ck), kk.removeEventListener("pointercancel", Ck)
                              }
                            }), []), (0, Uk.jsx)("canvas", {
                              ref: bk,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${ek.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const mf = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Mf = [{
                              mode: Xi.h.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Xi.h.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Xi.h.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Xi.h.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Xi.h.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            Kf = (0, Dk.forwardRef)((function(kk, ek) {
                              var ik, fk;
                              let {
                                textures: bk
                              } = kk;
                              const rk = CD(),
                                Pk = (0, Dk.useRef)(null),
                                [mk, Mk] = (0, Dk.useState)(ci),
                                [Kk, xk] = (0, Dk.useState)("example"),
                                [nk, Hk] = (0, Dk.useState)(0),
                                [lk, pk] = (0, Dk.useState)(!1),
                                Yk = kk => {
                                  const ek = "example" === kk ? ci : Bi(kk);
                                  ek && (Mk(ek), xk(kk))
                                };
                              (0, Dk.useImperativeHandle)(ek, (() => ({
                                preview: kk => {
                                  var ek;
                                  Yk(kk), null === (ek = Pk.current) || void 0 === ek || ek.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Lk = kk => {
                                  Mk({
                                    ...mk,
                                    ...kk
                                  }), xk(null)
                                },
                                Ck = function(kk, ek) {
                                  if (null !== ek) return `${iD}    presetId: "${ek}",\n${DD}\n})`;
                                  const ik = kk.velocityGradients.map((kk => `        {\n            timeFraction: ${Ji(kk.timeFraction)},\n            factor: ${Ji(kk.factor)},\n            factor2: ${Ji(kk.factor2)},\n        },`)),
                                    Dk = [`    dir1: ${kD(kk.dir1)},`, `    dir2: ${kD(kk.dir2)},`, DD, `    texture: "${kk.texture}",`, `    minLifeTime: ${Ji(kk.minLifeTime)},`, `    maxLifeTime: ${Ji(kk.maxLifeTime)},`, `    minEmitPower: ${Ji(kk.minEmitPower)},`, `    maxEmitPower: ${Ji(kk.maxEmitPower)},`, `    minSize: ${Ji(kk.minSize)},`, `    maxSize: ${Ji(kk.maxSize)},`, `    manualEmitCount: ${Ji(kk.manualEmitCount)},`, `    gravity: ${kD(kk.gravity)},`, `    colorGradients: ${eD(kk.colorGradients,"    ")},`, `    velocityGradients: ${ik.length>0?`[\n${ik.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Ji(kk.blendMode)},`];
                                  return void 0 !== kk.hideDist && Dk.push(`    hideDist: ${Ji(kk.hideDist)},`), `${iD}${Dk.join("\n")}\n})`
                                }(mk, null === Kk || "example" === Kk ? null : Kk),
                                jk = bk.includes(mk.texture) ? bk : [...bk, mk.texture];
                              return (0, Uk.jsxs)("section", {
                                ref: Pk,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, Uk.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, Uk.jsxs)("div", {
                                    children: [(0, Uk.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, Uk.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, Uk.jsx)(yk, {
                                    text: Ck,
                                    label: "Copy code"
                                  })]
                                }), (0, Uk.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, Uk.jsx)("button", {
                                    type: "button",
                                    className: Sk()("DocsVariantChip", {
                                      Active: "example" === Kk
                                    }),
                                    onClick: () => {
                                      Yk("example")
                                    },
                                    children: "Example"
                                  }), mf.filter((kk => null !== Bi(kk))).map((kk => (0, Uk.jsx)("button", {
                                    type: "button",
                                    className: Sk()("DocsVariantChip", {
                                      Active: Kk === kk
                                    }),
                                    onClick: () => {
                                      Yk(kk)
                                    },
                                    children: kk
                                  }, kk))), (0, Uk.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Kk && void 0 !== Kk ? Kk : "custom",
                                    "aria-label": "Preset",
                                    onChange: kk => {
                                      Yk(kk.target.value)
                                    },
                                    children: [(0, Uk.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Kk && (0, Uk.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), ti.d.map((kk => (0, Uk.jsx)("option", {
                                      value: kk,
                                      children: kk
                                    }, kk)))]
                                  })]
                                }), (0, Uk.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, Uk.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, Uk.jsx)(Pf, {
                                      opts: mk,
                                      textureUrl: null !== (ik = null === rk || void 0 === rk ? void 0 : rk.getParticleTextureUrl(mk.texture)) && void 0 !== ik ? ik : null,
                                      burst: nk,
                                      paused: lk
                                    }), (0, Uk.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, Uk.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Hk(nk + 1)
                                        },
                                        children: [(0, Uk.jsx)(wk, {
                                          name: "replay"
                                        }), (0, Uk.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, Uk.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": lk,
                                        onClick: () => {
                                          pk(!lk)
                                        },
                                        children: [(0, Uk.jsx)(wk, {
                                          name: lk ? "play" : "pause"
                                        }), (0, Uk.jsx)("span", {
                                          children: lk ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, Uk.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, Uk.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Uk.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, Uk.jsx)("span", {
                                          children: "Texture"
                                        }), (0, Uk.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: mk.texture
                                        })]
                                      }), (0, Uk.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: jk.map((kk => {
                                          var ek;
                                          const ik = null !== (ek = null === rk || void 0 === rk ? void 0 : rk.getParticleTextureUrl(kk)) && void 0 !== ek ? ek : null;
                                          return (0, Uk.jsx)("button", {
                                            type: "button",
                                            className: Sk()("DocsParticleTexture", {
                                              Active: mk.texture === kk
                                            }),
                                            title: kk,
                                            "aria-label": kk,
                                            "aria-pressed": mk.texture === kk,
                                            onClick: () => {
                                              Lk({
                                                texture: kk
                                              })
                                            },
                                            children: ik ? (0, Uk.jsx)("img", {
                                              src: ik,
                                              alt: ""
                                            }) : (0, Uk.jsx)(wk, {
                                              name: "image"
                                            })
                                          }, kk)
                                        }))
                                      })]
                                    }), (0, Uk.jsx)(ef, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: mk.manualEmitCount,
                                      onChange: kk => {
                                        Lk({
                                          manualEmitCount: kk
                                        })
                                      }
                                    }), (0, Uk.jsx)(kf, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: mk.minLifeTime,
                                      high: mk.maxLifeTime,
                                      onChange: (kk, ek) => {
                                        Lk({
                                          minLifeTime: kk,
                                          maxLifeTime: ek
                                        })
                                      }
                                    }), (0, Uk.jsx)(kf, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: mk.minEmitPower,
                                      high: mk.maxEmitPower,
                                      onChange: (kk, ek) => {
                                        Lk({
                                          minEmitPower: kk,
                                          maxEmitPower: ek
                                        })
                                      }
                                    }), (0, Uk.jsx)(kf, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: mk.minSize,
                                      high: mk.maxSize,
                                      onChange: (kk, ek) => {
                                        Lk({
                                          minSize: kk,
                                          maxSize: ek
                                        })
                                      }
                                    }), (0, Uk.jsx)(ef, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (fk = mk.gravity[1]) && void 0 !== fk ? fk : 0,
                                      onChange: kk => {
                                        var ek, ik;
                                        Lk({
                                          gravity: [null !== (ek = mk.gravity[0]) && void 0 !== ek ? ek : 0, kk, null !== (ik = mk.gravity[2]) && void 0 !== ik ? ik : 0]
                                        })
                                      }
                                    }), (0, Uk.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Uk.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, Uk.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, Uk.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: mk.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: kk => {
                                          Lk({
                                            blendMode: Number(kk.target.value)
                                          })
                                        },
                                        children: Mf.map((kk => {
                                          let {
                                            mode: ek,
                                            label: ik
                                          } = kk;
                                          return (0, Uk.jsx)("option", {
                                            value: ek,
                                            children: ik
                                          }, ek)
                                        }))
                                      })]
                                    }), (0, Uk.jsx)(Df, {
                                      opts: mk,
                                      onChange: kk => {
                                        Lk({
                                          colorGradients: kk
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, Uk.jsx)(Ak, {
                                  code: Ck,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var xf = ik(4415),
                            nf = ik(1858);

                          function Uf(kk, ek) {
                            return kk ? xf.e.includes(ek) ? kk.getIngameIconUrl(ek) : kk.getItemIconUrl(ek) : null
                          }

                          function Hf(kk) {
                            var ek, ik, Dk;
                            let {
                              part: fk,
                              assets: bk
                            } = kk;
                            const rk = Uf(bk, fk.icon),
                              Pk = null !== (ek = null === (ik = fk.style) || void 0 === ik ? void 0 : ik.fontSize) && void 0 !== ek ? ek : "1.8em",
                              mk = (0, ae.$b)(fk.style);
                            return (0, Uk.jsxs)("span", {
                              className: Sk()("DocsBloxdTextIcon", {
                                Missing: !rk
                              }),
                              style: {
                                width: Pk,
                                height: Pk,
                                opacity: null === (Dk = fk.style) || void 0 === Dk ? void 0 : Dk.opacity
                              },
                              title: rk ? void 0 : `No Bloxd icon, item or block is called "${fk.icon}"`,
                              children: [rk && mk && (0, Uk.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: mk,
                                  maskImage: `url("${rk}")`,
                                  WebkitMaskImage: `url("${rk}")`
                                }
                              }), rk ? (0, Uk.jsx)("img", {
                                src: rk,
                                alt: "",
                                className: Sk()({
                                  Tinted: mk
                                })
                              }) : (0, Uk.jsx)(wk, {
                                name: "image"
                              })]
                            })
                          }

                          function wf(kk) {
                            let {
                              parts: ek,
                              className: ik
                            } = kk;
                            const Dk = CD(),
                              fk = [];
                            let bk = [];
                            const rk = kk => {
                              bk.length > 0 && (fk.push((0, Uk.jsx)(nf.e, {
                                text: bk
                              }, `run-${kk}`)), bk = [])
                            };
                            return ek.forEach(((kk, ek) => {
                              "icon" !== ce(kk) || te(kk.icon) ? bk.push(kk) : (rk(ek), fk.push((0, Uk.jsx)(Hf, {
                                part: kk,
                                assets: Dk
                              }, `icon-${ek}`)))
                            })), rk(ek.length), (0, Uk.jsx)("div", {
                              className: Sk()("DocsStyledTextPreview", ik),
                              children: fk
                            })
                          }
                          const lf = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let pf = null;

                          function yf(kk) {
                            if (pf ??= document.createElement("canvas").getContext("2d"), !pf) return "#000000";
                            pf.fillStyle = "#000000", pf.fillStyle = kk;
                            const ek = pf.fillStyle;
                            return ek.startsWith("#") ? ek : "#000000"
                          }

                          function Yf(kk) {
                            let {
                              value: ek,
                              label: ik,
                              onChange: Dk
                            } = kk;
                            return (0, Uk.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, Uk.jsx)("input", {
                                type: "color",
                                value: yf(ek),
                                "aria-label": `${ik} picker`,
                                onChange: kk => {
                                  Dk(kk.target.value)
                                }
                              }), (0, Uk.jsx)("input", {
                                type: "text",
                                value: ek,
                                placeholder: "#ffb914 or gold",
                                "aria-label": ik,
                                spellCheck: !1,
                                onChange: kk => {
                                  Dk(kk.target.value)
                                }
                              })]
                            })
                          }

                          function Lf(kk) {
                            let {
                              value: ek,
                              fontAwesomeIcons: ik,
                              onChange: fk
                            } = kk;
                            const bk = CD(),
                              [rk, Pk] = (0, Dk.useState)(te(ek) ? "fontAwesome" : "bloxd"),
                              [mk, Mk] = (0, Dk.useState)(""),
                              Kk = mk.trim().toLowerCase(),
                              xk = "bloxd" === rk ? xf.e : ik,
                              nk = Kk ? xk.filter((kk => kk.toLowerCase().includes(Kk))) : xk;
                            return (0, Uk.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, Uk.jsx)("input", {
                                type: "text",
                                value: ek,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: kk => {
                                  fk(kk.target.value)
                                }
                              }), (0, Uk.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, Uk.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((kk => (0, Uk.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": rk === kk,
                                    className: Sk()("DocsVariantChip", {
                                      Active: rk === kk
                                    }),
                                    onClick: () => {
                                      Pk(kk)
                                    },
                                    children: "bloxd" === kk ? `Bloxd icons (${xf.e.length})` : `Font Awesome (${ik.length})`
                                  }, kk))), (0, Uk.jsx)("input", {
                                    type: "search",
                                    value: mk,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: kk => {
                                      Mk(kk.target.value)
                                    }
                                  })
                                ]
                              }), (0, Uk.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [nk.map((kk => {
                                  const ik = "bloxd" === rk ? Uf(bk, kk) : null;
                                  return (0, Uk.jsx)("button", {
                                    type: "button",
                                    title: kk,
                                    "aria-label": kk,
                                    "aria-pressed": kk === ek,
                                    className: Sk()("DocsIconPickerOption", {
                                      Active: kk === ek
                                    }),
                                    onClick: () => {
                                      fk(kk)
                                    },
                                    children: "fontAwesome" === rk ? (0, Uk.jsx)(Ci.d, {
                                      name: kk
                                    }) : ik ? (0, Uk.jsx)("img", {
                                      src: ik,
                                      alt: ""
                                    }) : (0, Uk.jsx)(wk, {
                                      name: "image"
                                    })
                                  }, kk)
                                })), 0 === nk.length && (0, Uk.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", mk, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function Cf(kk) {
                            let {
                              property: ek,
                              value: ik,
                              fontAwesomeIcons: Dk,
                              onChange: fk
                            } = kk;
                            const {
                              field: Sk,
                              label: bk
                            } = ek, rk = kk => "" !== kk || ek.isRequired ? kk : void 0;
                            switch (Sk.kind) {
                              case "text":
                                return Sk.multiline ? (0, Uk.jsx)("textarea", {
                                  value: String(null !== ik && void 0 !== ik ? ik : ""),
                                  rows: 2,
                                  "aria-label": bk,
                                  onChange: kk => {
                                    fk(kk.target.value)
                                  }
                                }) : (0, Uk.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ik && void 0 !== ik ? ik : ""),
                                  "aria-label": bk,
                                  onChange: kk => {
                                    fk(rk(kk.target.value))
                                  }
                                });
                              case "size":
                                return (0, Uk.jsx)("input", {
                                  type: "text",
                                  value: String(null !== ik && void 0 !== ik ? ik : ""),
                                  placeholder: ek.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": bk,
                                  spellCheck: !1,
                                  onChange: kk => {
                                    fk(rk(kk.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, Uk.jsx)(Yf, {
                                  value: String(null !== ik && void 0 !== ik ? ik : ""),
                                  label: bk,
                                  onChange: kk => {
                                    fk(rk(kk))
                                  }
                                });
                              case "colours": {
                                const kk = Array.isArray(ik) ? ik : [],
                                  ek = kk => {
                                    fk(kk.length > 0 ? kk : void 0)
                                  };
                                return (0, Uk.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [kk.map(((ik, Dk) => (0, Uk.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, Uk.jsx)(Yf, {
                                      value: ik,
                                      label: `${bk} ${Dk+1}`,
                                      onChange: ik => {
                                        ek(kk.map(((kk, ek) => ek === Dk ? ik : kk)))
                                      }
                                    }), (0, Uk.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Dk+1}`,
                                      onClick: () => {
                                        ek(kk.filter(((kk, ek) => ek !== Dk)))
                                      },
                                      children: (0, Uk.jsx)(wk, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Dk))), (0, Uk.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var ik;
                                      ek([...kk, null !== (ik = kk.at(-1)) && void 0 !== ik ? ik : "#ffffff"])
                                    },
                                    children: [(0, Uk.jsx)(wk, {
                                      name: "plus"
                                    }), 0 === kk.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Pk;
                                const kk = "number" === typeof ik ? ik : Number(null !== (Pk = ek.defaultText) && void 0 !== Pk ? Pk : 0);
                                return (0, Uk.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, Uk.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: kk,
                                    "aria-label": bk,
                                    onChange: kk => {
                                      fk(Number(kk.target.value))
                                    }
                                  }), (0, Uk.jsx)("output", {
                                    children: kk.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, Uk.jsxs)("select", {
                                  value: String(null !== ik && void 0 !== ik ? ik : ""),
                                  "aria-label": bk,
                                  onChange: kk => {
                                    fk(rk(kk.target.value))
                                  },
                                  children: [!ek.isRequired && (0, Uk.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", ek.defaultText, ")"]
                                  }), Sk.options.map((kk => (0, Uk.jsx)("option", {
                                    value: kk,
                                    children: kk
                                  }, kk)))]
                                });
                              case "icon":
                                return (0, Uk.jsx)(Lf, {
                                  value: String(null !== ik && void 0 !== ik ? ik : ""),
                                  fontAwesomeIcons: Dk,
                                  onChange: fk
                                })
                            }
                          }

                          function Af(kk) {
                            let ek;
                            try {
                              ek = JSON.parse(kk)
                            } catch (ik) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${ik.message}`
                              }
                            }
                            return Di(ek) ? {
                              part: ek,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function jf(kk) {
                            let {
                              parts: ek,
                              index: ik,
                              fontAwesomeIcons: fk,
                              onChange: Sk,
                              oV: bk,
                              onClose: rk
                            } = kk;
                            const Pk = (0, Dk.useContext)(He),
                              Mk = (0, Dk.useRef)(null),
                              Kk = ek[ik],
                              xk = ce(Kk),
                              [nk, Hk] = (0, Dk.useState)((() => JSON.stringify(Kk, null, 2))),
                              lk = (0, Dk.useMemo)((() => "other" === xk ? Af(nk).error : null), [xk, nk]);
                            (0, Dk.useEffect)((() => {
                              var kk;
                              null === (kk = Mk.current) || void 0 === kk || kk.focus()
                            }), []);
                            const pk = (0, Uk.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: kk => {
                                kk.target === kk.currentTarget && rk()
                              },
                              children: (0, Uk.jsxs)("div", {
                                ref: Mk,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${ik+1}: ${Xe[xk]}`,
                                tabIndex: -1,
                                onKeyDown: kk => {
                                  "Escape" === kk.key ? (kk.stopPropagation(), rk()) : "Tab" === kk.key && Mk.current && function(kk, ek) {
                                    const ik = Array.from(kk.querySelectorAll(ue)),
                                      Dk = ik[0],
                                      fk = ik.at(-1);
                                    if (!Dk || !fk) return;
                                    const Sk = document.activeElement;
                                    !ek.shiftKey || Sk !== Dk && Sk !== kk ? ek.shiftKey || Sk !== fk || (ek.preventDefault(), Dk.focus()) : (ek.preventDefault(), fk.focus())
                                  }(Mk.current, kk)
                                },
                                children: [(0, Uk.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, Uk.jsxs)("div", {
                                    children: [(0, Uk.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", ik + 1]
                                    }), (0, Uk.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: Xe[xk]
                                    })]
                                  }), (0, Uk.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: rk,
                                    children: (0, Uk.jsx)(wk, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, Uk.jsx)(wf, {
                                  parts: ek,
                                  className: "DocsTextDialogPreview"
                                }), (0, Uk.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === xk ? (0, Uk.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, Uk.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, Uk.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: nk,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: kk => {
                                        Hk(kk.target.value);
                                        const ek = Af(kk.target.value);
                                        null !== ek.part && Sk(ek.part)
                                      }
                                    }), lk && (0, Uk.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: lk
                                    })]
                                  }) : oe[xk].map((kk => {
                                    const ek = Oe(Kk, kk.path),
                                      ik = kk.isRequired ? JSON.stringify(Ge(Kk, kk.path)) === JSON.stringify(Kk) : void 0 === ek;
                                    return (0, Uk.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, Uk.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, Uk.jsx)("span", {
                                          children: kk.label
                                        }), (0, Uk.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: ik,
                                          "aria-label": `Reset ${kk.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Sk(Ge(Kk, kk.path))
                                          },
                                          children: [(0, Uk.jsx)(wk, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, Uk.jsx)(Cf, {
                                        property: kk,
                                        value: ek,
                                        fontAwesomeIcons: fk,
                                        onChange: ek => {
                                          Sk(ge(Kk, kk.path, ek))
                                        }
                                      }), !kk.isRequired && (0, Uk.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", kk.defaultText]
                                      })]
                                    }, kk.path.join("."))
                                  }))
                                }), (0, Uk.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, Uk.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: bk,
                                    children: [(0, Uk.jsx)(wk, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, Uk.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: rk,
                                    children: "Done"
                                  })]
                                }), (0, Uk.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: lf.map((kk => (0, Uk.jsx)("option", {
                                    value: kk
                                  }, kk)))
                                })]
                              })
                            });
                            return Pk ? (0, mk.createPortal)(pk, Pk) : pk
                          }
                          const sf = [{
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
                            df = Object.keys(Be);

                          function Vf(kk) {
                            let {
                              fontAwesomeIcons: ek
                            } = kk;
                            const [ik, fk] = (0, Dk.useState)(sf[0].parts), [bk, rk] = (0, Dk.useState)((() => ki(sf[0].parts))), [Pk, mk] = (0, Dk.useState)(null), [Mk, Kk] = (0, Dk.useState)(!1), [xk, nk] = (0, Dk.useState)(null), [Hk, lk] = (0, Dk.useState)(!1), [pk, yk] = (0, Dk.useState)(null), Yk = (0, Dk.useRef)(null), Lk = ki(ik);
                            (0, Dk.useLayoutEffect)((() => {
                              var kk;
                              if (!pk) return;
                              const ek = kk => {
                                  var ek;
                                  return null === (ek = Yk.current) || void 0 === ek ? void 0 : ek.querySelector(`[data-focus-key="${kk}"]`)
                                },
                                ik = ek(pk.key);
                              null === (kk = ik && !ik.disabled ? ik : ek(pk.fallback)) || void 0 === kk || kk.focus(), yk(null)
                            }), [pk]);
                            const Ck = kk => {
                                fk(kk), rk(ki(kk)), mk(null)
                              },
                              jk = kk => {
                                Ck(ik.filter(((ek, ik) => ik !== kk))), yk({
                                  key: `edit-${Math.min(kk,ik.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              sk = (kk, ek) => {
                                const Dk = [...ik],
                                  [fk] = Dk.splice(kk, 1);
                                Dk.splice(kk + ek, 0, fk), Ck(Dk);
                                yk({
                                  key: `${ek<0?"up":"down"}-${kk+ek}`,
                                  fallback: `edit-${kk+ek}`
                                })
                              };
                            return (0, Uk.jsxs)("section", {
                              ref: Yk,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, Uk.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, Uk.jsxs)("div", {
                                  children: [(0, Uk.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, Uk.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, Uk.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: sf.map((kk => (0, Uk.jsx)("button", {
                                  type: "button",
                                  className: Sk()("DocsVariantChip", {
                                    Active: Lk === ki(kk.parts)
                                  }),
                                  onClick: () => {
                                    Ck(kk.parts)
                                  },
                                  children: kk.label
                                }, kk.label)))
                              }), (0, Uk.jsx)(wf, {
                                parts: ik,
                                className: "DocsTextEditorPreview"
                              }), (0, Uk.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, Uk.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Uk.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, Uk.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [ik.map(((kk, ek) => {
                                      const Dk = ce(kk);
                                      return (0, Uk.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, Uk.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${ek}`,
                                          "aria-label": `Edit part ${ek+1}, ${Xe[Dk]}`,
                                          onClick: () => {
                                            nk(ek)
                                          },
                                          children: [(0, Uk.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: Xe[Dk]
                                          }), (0, Uk.jsx)(wf, {
                                            parts: [kk],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Dk && (0, Uk.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Ne(kk)
                                          })]
                                        }), (0, Uk.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, Uk.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${ek+1} up`,
                                            "data-focus-key": `up-${ek}`,
                                            disabled: 0 === ek,
                                            onClick: () => {
                                              sk(ek, -1)
                                            },
                                            children: (0, Uk.jsx)(wk, {
                                              name: "chevron-up"
                                            })
                                          }), (0, Uk.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${ek+1} down`,
                                            "data-focus-key": `down-${ek}`,
                                            disabled: ek === ik.length - 1,
                                            onClick: () => {
                                              sk(ek, 1)
                                            },
                                            children: (0, Uk.jsx)(wk, {
                                              name: "chevron-down"
                                            })
                                          }), (0, Uk.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${ek+1}`,
                                            onClick: () => {
                                              jk(ek)
                                            },
                                            children: (0, Uk.jsx)(wk, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, ek)
                                    })), 0 === ik.length && (0, Uk.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, Uk.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: kk => {
                                      "Escape" === kk.key && Hk && (kk.stopPropagation(), lk(!1), yk({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, Uk.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Hk,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        lk(!Hk)
                                      },
                                      children: [(0, Uk.jsx)(wk, {
                                        name: "plus"
                                      }), "Add a part", (0, Uk.jsx)(wk, {
                                        name: Hk ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Hk && (0, Uk.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: df.map((kk => (0, Uk.jsx)("li", {
                                        children: (0, Uk.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (kk => {
                                              Ck([...ik, Be[kk]]), lk(!1), nk(ik.length)
                                            })(kk)
                                          },
                                          children: Xe[kk]
                                        })
                                      }, kk)))
                                    })]
                                  })]
                                }), (0, Uk.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Uk.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, Uk.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Mk,
                                      onClick: () => {
                                        Kk(!Mk)
                                      },
                                      children: [(0, Uk.jsx)(wk, {
                                        name: Mk ? "check" : "pencil"
                                      }), Mk ? "Done" : "Edit"]
                                    })]
                                  }), Mk ? (0, Uk.jsxs)(Uk.Fragment, {
                                    children: [(0, Uk.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: bk,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: kk => {
                                        rk(kk.target.value);
                                        const ek = fi(kk.target.value);
                                        mk(ek.error), ek.parts && fk(ek.parts)
                                      }
                                    }), Pk && (0, Uk.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Pk
                                    })]
                                  }) : (0, Uk.jsx)(Ak, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Lk})`
                                  })]
                                })]
                              }), null !== xk && xk < ik.length && (0, Uk.jsx)(jf, {
                                parts: ik,
                                index: xk,
                                fontAwesomeIcons: ek,
                                onChange: kk => {
                                  ((kk, ek) => {
                                    Ck(ik.map(((ik, Dk) => Dk === kk ? ek : ik)))
                                  })(xk, kk)
                                },
                                oV: () => {
                                  jk(xk), nk(null)
                                },
                                onClose: () => {
                                  nk(null), yk({
                                    key: `edit-${xk}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var Ff = ik(4786),
                            uf = ik(4766),
                            qf = ik(4778),
                            If = ik(4791);
                          const zf = 40,
                            Qf = 800,
                            vf = 150,
                            Ef = 8e3,
                            hf = 2e3;

                          function af(kk, ek) {
                            return 12 * Math.log2(ek / kk)
                          }

                          function Wf(kk, ek) {
                            return Math.round(kk * 2 ** (ek / 12) * 10) / 10
                          }

                          function tf(kk) {
                            return `${kk} ms`
                          }

                          function Xf(kk) {
                            return `${kk} st`
                          }
                          const Bf = [{
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

                          function Tf(kk) {
                            let {
                              synth: ek,
                              onChange: ik
                            } = kk;
                            const Dk = (0, Ff.i)(ek);
                            return (0, Uk.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, Uk.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Uk.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, Uk.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, Uk.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, Uk.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, Uk.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: Ff.d.map((kk => (0, Uk.jsx)("button", {
                                      type: "button",
                                      className: Sk()("DocsVariantChip", {
                                        Active: ek.waveform === kk
                                      }),
                                      "aria-pressed": ek.waveform === kk,
                                      onClick: () => {
                                        ik({
                                          waveform: kk
                                        })
                                      },
                                      children: kk
                                    }, kk)))
                                  })]
                                }), (0, Uk.jsx)(ef, {
                                  label: "Pitch",
                                  min: 0,
                                  max: af(zf, Qf),
                                  step: .1,
                                  value: af(zf, ek.pitchHz),
                                  format: () => `${ek.pitchHz} Hz`,
                                  onChange: kk => {
                                    ik({
                                      pitchHz: Wf(zf, kk)
                                    })
                                  }
                                }), (0, Uk.jsx)(ef, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: ek.syllableMs,
                                  format: tf,
                                  onChange: kk => {
                                    ik({
                                      syllableMs: kk
                                    })
                                  }
                                }), (0, Uk.jsx)(ef, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: ek.volume,
                                  onChange: kk => {
                                    ik({
                                      volume: kk
                                    })
                                  }
                                })]
                              }), (0, Uk.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Uk.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, Uk.jsx)(ef, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: ek.durationMs,
                                  format: tf,
                                  onChange: kk => {
                                    ik({
                                      durationMs: kk
                                    })
                                  }
                                }), (0, Uk.jsx)(ef, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Dk.durationMs,
                                  step: 1,
                                  value: Dk.attackMs,
                                  format: tf,
                                  onChange: kk => {
                                    ik({
                                      attackMs: kk
                                    })
                                  }
                                }), (0, Uk.jsx)(ef, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Dk.durationMs - Dk.attackMs,
                                  step: 1,
                                  value: Dk.releaseMs,
                                  format: tf,
                                  onChange: kk => {
                                    ik({
                                      releaseMs: kk
                                    })
                                  }
                                }), (0, Uk.jsx)(ef, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: ek.glideSemitones,
                                  format: Xf,
                                  onChange: kk => {
                                    ik({
                                      glideSemitones: kk
                                    })
                                  }
                                }), (0, Uk.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, Uk.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== ek.lowpassHz,
                                    onChange: kk => {
                                      ik({
                                        lowpassHz: kk.target.checked ? hf : null
                                      })
                                    }
                                  }), (0, Uk.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== ek.lowpassHz && (0, Uk.jsx)(ef, {
                                  label: "Filter",
                                  min: 0,
                                  max: af(vf, Ef),
                                  step: .1,
                                  value: af(vf, ek.lowpassHz),
                                  format: () => `${ek.lowpassHz} Hz`,
                                  onChange: kk => {
                                    ik({
                                      lowpassHz: Wf(vf, kk)
                                    })
                                  }
                                })]
                              }), (0, Uk.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Uk.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), Bf.map((kk => {
                                  let {
                                    key: Dk,
                                    label: fk,
                                    max: Sk
                                  } = kk;
                                  return (0, Uk.jsx)(ef, {
                                    label: fk,
                                    min: 0,
                                    max: Sk,
                                    step: .1,
                                    value: ek.intonation[Dk],
                                    format: Xf,
                                    onChange: kk => {
                                      ik({
                                        intonation: {
                                          ...ek.intonation,
                                          [Dk]: kk
                                        }
                                      })
                                    }
                                  }, Dk)
                                }))]
                              })]
                            })
                          }
                          const of = Object.keys(Ff.g), Zf = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function Of(kk) {
                            var ek;
                            const ik = JSON.stringify((0, Ff.i)(kk));
                            return null !== (ek = of.find((kk => JSON.stringify((0, Ff.i)(Ff.g[kk])) === ik))) && void 0 !== ek ? ek : null
                          }

                          function gf(kk) {
                            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof kk || null === kk) return JSON.stringify(kk);
                            return `{\n${Object.entries(kk).map((kk=>{let[ik,Dk]=kk;return`${ek}    ${ik}: ${gf(Dk,`${ek}    `)},`})).join("\n")}\n${ek}}`
                          }

                          function Gf(kk, ek, ik) {
                            const Dk = Of(kk),
                              fk = [`    line: ${JSON.stringify(ek)},`];
                            return ik && fk.push(`    speakerName: ${JSON.stringify(ik)},`), fk.push("    voice,"), `const voice = ${Dk?JSON.stringify(Dk):gf((0,Ff.i)(kk))}\n\napi.setClientOption(playerId, "dialogue", {\n${fk.join("\n")}\n})`
                          }
                          const Nf = 400,
                            Rf = 90;
                          let Jf = null;

                          function kS(kk, ek, ik) {
                            return Jf ??= new AudioContext, Jf.resume(), (0, If.e)(Jf, Jf.destination, kk, ek, ik, (() => {}))
                          }

                          function eS() {
                            const [kk, ek] = (0, Dk.useState)(Ff.g.regular), [ik, fk] = (0, Dk.useState)(Zf[0]), [bk, rk] = (0, Dk.useState)("Innkeeper"), [Pk, mk] = (0, Dk.useState)(0), Mk = nD((kk => kk.volume)), Kk = (0, Dk.useRef)(null), xk = (0, Dk.useRef)(0), nk = (0, Dk.useRef)(0), Hk = () => {
                              var kk;
                              null === (kk = Kk.current) || void 0 === kk || kk.call(Kk), Kk.current = null
                            };
                            (0, Dk.useEffect)((() => () => {
                              var kk;
                              null === (kk = Kk.current) || void 0 === kk || kk.call(Kk), window.clearTimeout(xk.current)
                            }), []);
                            const lk = (0, Dk.useMemo)((() => ({
                                line: ik,
                                speakerName: bk || void 0,
                                voice: kk
                              })), [ik, bk, kk]),
                              pk = (0, Dk.useRef)(lk);
                            pk.current = lk;
                            const Yk = Of(kk),
                              Lk = kk => {
                                window.clearTimeout(xk.current), Hk();
                                const {
                                  plan: ek,
                                  synth: ik
                                } = (0, qf.f)(kk);
                                ik && (Kk.current = kS(ik, ek.blips, Mk)), mk((kk => kk + 1))
                              },
                              Ck = Gf(kk, ik, bk);
                            return (0, Uk.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, Uk.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, Uk.jsxs)("div", {
                                  children: [(0, Uk.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, Uk.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, Uk.jsx)(yk, {
                                  text: Ck,
                                  label: "Copy code"
                                })]
                              }), (0, Uk.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [of.map((kk => (0, Uk.jsx)("button", {
                                  type: "button",
                                  className: Sk()("DocsVariantChip", {
                                    Active: Yk === kk
                                  }),
                                  "aria-pressed": Yk === kk,
                                  onClick: () => {
                                    (kk => {
                                      const ik = Ff.g[kk];
                                      ek(ik), Lk({
                                        ...lk,
                                        voice: ik
                                      })
                                    })(kk)
                                  },
                                  children: kk
                                }, kk))), !Yk && (0, Uk.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, Uk.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, Uk.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, Uk.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, Uk.jsx)(uf.e, {
                                      display: lk
                                    }, Pk)
                                  }), (0, Uk.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: kk => {
                                      kk.preventDefault(), Lk(lk)
                                    },
                                    children: [(0, Uk.jsx)("input", {
                                      value: ik,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: kk => {
                                        fk(kk.target.value)
                                      }
                                    }), (0, Uk.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, Uk.jsx)(wk, {
                                        name: "play"
                                      }), (0, Uk.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, Uk.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: Zf.map((kk => (0, Uk.jsx)("button", {
                                      type: "button",
                                      className: Sk()("DocsVariantChip", {
                                        Active: ik === kk
                                      }),
                                      onClick: () => {
                                        var ek;
                                        fk(ek = kk), Lk({
                                          ...lk,
                                          line: ek
                                        })
                                      },
                                      children: kk
                                    }, kk)))
                                  }), (0, Uk.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, Uk.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, Uk.jsx)("input", {
                                      value: bk,
                                      placeholder: "No name",
                                      onChange: kk => {
                                        rk(kk.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, Uk.jsx)(Tf, {
                                  synth: kk,
                                  onChange: ik => {
                                    const Dk = {
                                      ...kk,
                                      ...ik
                                    };
                                    ek(Dk);
                                    const fk = {
                                        ...lk,
                                        voice: Dk
                                      },
                                      Sk = performance.now();
                                    if (Sk - nk.current >= Rf) {
                                      nk.current = Sk, Hk();
                                      const kk = (0, qf.f)(fk).plan.blips[0];
                                      kk && (Kk.current = kS((0, Ff.i)(Dk), [{
                                        ...kk,
                                        atMs: 0
                                      }], Mk))
                                    }
                                    window.clearTimeout(xk.current), xk.current = window.setTimeout((() => {
                                      Lk(pk.current)
                                    }), Nf)
                                  }
                                })]
                              }), (0, Uk.jsx)(Ak, {
                                code: Ck,
                                lang: "ts"
                              })]
                            })
                          }
                          var iS = ik(4813);
                          const DS = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            fS = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            SS = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${fS}`, "g"), iS.i],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, iS.i]
                            ];

                          function bS(kk) {
                            return `${kk.pageId}#${kk.anchor}`
                          }
                          let rS, PS, mS;

                          function MS(kk) {
                            const ek = (0, jk.h)(kk),
                              ik = new Set;
                            for (const [, , Dk] of ek.matchAll(jk.c)) {
                              const kk = Dk.startsWith("#") ? Bk(Dk) : null,
                                ek = kk ? bS({
                                  pageId: kk.page.id,
                                  anchor: kk.anchor
                                }) : null;
                              null !== ek && (rS || (rS = new Set(Ek.flatMap((kk => Fk(kk.layout) ? tk(kk).sections.map((ek => bS({
                                pageId: kk.id,
                                anchor: ek.heading.anchor
                              }))) : [])))), rS).has(ek) && ik.add(ek)
                            }
                            for (const [, , Dk] of ek.matchAll(DS)) {
                              const kk = ne(Dk);
                              kk && ik.add(bS(kk))
                            }
                            return ik
                          }

                          function KS(kk, ek) {
                            const ik = new Set,
                              Dk = function(kk) {
                                return kk.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(kk);
                            for (const [, fk] of Dk.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) ik.add(fk);
                            for (const [fk, Sk] of SS)
                              for (const [, kk] of(0, iS.e)(Dk, fk, Sk)) ek.has(kk) && ik.add(kk);
                            return ik
                          }

                          function xS(kk, ek, ik, Dk) {
                            const fk = kk.get(ek);
                            fk ? !Dk && fk.some((kk => kk.pageId === ik.pageId)) || fk.push(ik) : kk.set(ek, [ik])
                          }
                          const nS = /^[A-Za-z_$][\w$]*$/;

                          function US(kk) {
                            return nS.test(kk.name) ? kk.name : "options"
                          }

                          function HS(kk, ek) {
                            const ik = kk.params.map(US).join(", ");
                            return ek ? `${kk.name} = (${ik}) => {\n\t\n}` : `api.${kk.name}(${ik})`
                          }

                          function wS(kk) {
                            let {
                              method: ek,
                              isCallback: ik
                            } = kk;
                            return (0, Uk.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, Uk.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [ik ? (0, Uk.jsxs)(Uk.Fragment, {
                                  children: [(0, Uk.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: ek.name
                                  }), (0, Uk.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, Uk.jsxs)(Uk.Fragment, {
                                  children: [(0, Uk.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, Uk.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: ek.name
                                  }), (0, Uk.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), ek.params.map(((kk, ik) => (0, Uk.jsxs)(Dk.Fragment, {
                                  children: [ik > 0 && (0, Uk.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, Uk.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${ek.name}-${US(kk)}`,
                                    children: kk.name
                                  })]
                                }, kk.name))), (0, Uk.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: ik ? ") => " : ")"
                                }), ik && !ek.returns && (0, Uk.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), ek.returns && ek.returns.type && (0, Uk.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!ik && (0, Uk.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, Uk.jsx)(de, {
                                  type: ek.returns.type
                                })]
                              })]
                            })
                          }

                          function lS(kk) {
                            let {
                              title: ek,
                              references: ik
                            } = kk;
                            const fk = (0, Dk.useContext)(Ue);
                            return (0, Uk.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, Uk.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: ek
                              }), ik.map((kk => (0, Uk.jsx)(bk.b, {
                                to: Tk(fk, ak(kk.pageId), kk.anchor),
                                children: kk.label
                              }, `${kk.pageId}#${kk.anchor}`)))]
                            })
                          }

                          function pS(kk) {
                            var ek, ik;
                            let {
                              pageId: Dk,
                              anchor: fk
                            } = kk;
                            const Sk = bS({
                                pageId: Dk,
                                anchor: fk
                              }),
                              bk = null !== (ek = function() {
                                if (!mS) {
                                  mS = new Map;
                                  const Dk = new Set(Ek.filter((kk => "callbacks" === kk.layout)).flatMap((kk => tk(kk).sections.map((kk => kk.heading.text)))));
                                  for (const fk of Ek)
                                    if ("article" === fk.layout || "snippets" === fk.layout)
                                      for (const Sk of (0, jk.u)(tk(fk)))
                                        for (const {
                                            code: bk
                                          }
                                          of(0, jk.i)(Sk.blocks))
                                          for (const rk of KS(bk, Dk)) {
                                            const Dk = xe().get(rk);
                                            if (Dk) {
                                              var kk, ek, ik;
                                              const bk = {
                                                pageId: fk.id,
                                                anchor: null !== (kk = null === (ek = Sk.heading) || void 0 === ek ? void 0 : ek.anchor) && void 0 !== kk ? kk : "",
                                                label: null !== (ik = fk.navTitle) && void 0 !== ik ? ik : fk.title
                                              };
                                              xS(mS, bS(Dk), bk, !1)
                                            }
                                          }
                                }
                                return mS
                              }().get(Sk)) && void 0 !== ek ? ek : [],
                              rk = null !== (ik = function() {
                                if (!PS) {
                                  PS = new Map;
                                  const kk = ak("changelog");
                                  for (const ek of tk(kk).sections) {
                                    const ik = new Set(ek.blocks.flatMap((kk => [...MS(kk)])));
                                    for (const Dk of ik) {
                                      const ik = {
                                        pageId: kk.id,
                                        anchor: ek.heading.anchor,
                                        label: ek.heading.text
                                      };
                                      xS(PS, Dk, ik, !0)
                                    }
                                  }
                                }
                                return PS
                              }().get(Sk)) && void 0 !== ik ? ik : [];
                            return 0 === bk.length && 0 === rk.length ? null : (0, Uk.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [bk.length > 0 && (0, Uk.jsx)(lS, {
                                title: "Used in",
                                references: bk
                              }), rk.length > 0 && (0, Uk.jsx)(lS, {
                                title: "Changelog",
                                references: rk
                              })]
                            })
                          }

                          function yS(kk) {
                            let {
                              method: ek,
                              pageId: ik,
                              anchor: Dk,
                              isCallback: fk
                            } = kk;
                            const Sk = fk ? void 0 : Pe().get(ek.name),
                              bk = ek.description.length > 0 || null === Sk || void 0 === Sk || !Sk.description ? ek.description : (0, jk.w)(Sk.description);
                            return (0, Uk.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, Uk.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Uk.jsx)(Mi, {
                                  level: 2,
                                  text: ek.name,
                                  anchor: Dk,
                                  className: "DocsCardTitle"
                                }), (0, Uk.jsx)(yk, {
                                  text: HS(ek, fk),
                                  label: fk ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Uk.jsx)(wS, {
                                method: ek,
                                isCallback: fk
                              }), Sk && null !== Sk.deprecation && (0, Uk.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, Uk.jsx)("strong", {
                                  children: "Deprecated"
                                }), Sk.deprecation && (0, Uk.jsxs)(Uk.Fragment, {
                                  children: [": ", (0, Uk.jsx)(Ae, {
                                    text: (rk = Sk.deprecation, (0, iS.p)(rk, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, iS.h)("`\\w"), (kk => {
                                      let [ek] = kk;
                                      return xe().has(ek) ? `\`${ek}\`` : ek
                                    })))
                                  })]
                                })]
                              }), bk.length > 0 && (0, Uk.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Uk.jsx)(Ui, {
                                  blocks: bk
                                })
                              }), ek.params.length > 0 && (0, Uk.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Uk.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, Uk.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: ek.params.map((kk => (0, Uk.jsxs)("div", {
                                    id: `${ek.name}-${US(kk)}`,
                                    className: "DocsParam",
                                    children: [(0, Uk.jsxs)("dt", {
                                      children: [(0, Uk.jsx)("code", {
                                        className: "DocsParamName",
                                        children: kk.name
                                      }), (0, Uk.jsx)(de, {
                                        type: kk.type
                                      })]
                                    }), kk.description && (0, Uk.jsx)("dd", {
                                      children: (0, Uk.jsx)(Ae, {
                                        text: kk.description
                                      })
                                    })]
                                  }, kk.name)))
                                })]
                              }), ek.returns && (ek.returns.type || ek.returns.description.length > 0) && (0, Uk.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Uk.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, Uk.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [ek.returns.type && (0, Uk.jsx)(de, {
                                    type: ek.returns.type
                                  }), ek.returns.description.length > 0 && (0, Uk.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, Uk.jsx)(Ui, {
                                      blocks: ek.returns.description
                                    })
                                  })]
                                })]
                              }), (0, Uk.jsx)(pS, {
                                pageId: ik,
                                anchor: Dk
                              })]
                            });
                            var rk
                          }

                          function YS(kk) {
                            var ek;
                            return null !== kk.defaultValue && "undefined" !== kk.defaultValue ? kk.defaultValue : null !== (ek = kk.example) && void 0 !== ek ? ek : "value"
                          }

                          function LS(kk) {
                            let {
                              setting: ek,
                              pageId: ik,
                              anchor: Dk,
                              setterSnippet: fk
                            } = kk;
                            const Sk = null === ek.defaultValue ? null : pe(ek.defaultValue);
                            return (0, Uk.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, Uk.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Uk.jsx)(Mi, {
                                  level: 2,
                                  text: ek.name,
                                  anchor: Dk,
                                  className: "DocsCardTitle"
                                }), (0, Uk.jsx)(yk, {
                                  text: fk(ek.name, YS(ek)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Uk.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, Uk.jsxs)("div", {
                                  children: [(0, Uk.jsx)("dt", {
                                    children: "Type"
                                  }), (0, Uk.jsx)("dd", {
                                    children: (0, Uk.jsx)(de, {
                                      type: ek.type
                                    })
                                  })]
                                }), null !== ek.defaultValue && (0, Uk.jsxs)("div", {
                                  children: [(0, Uk.jsx)("dt", {
                                    children: "Default"
                                  }), (0, Uk.jsx)("dd", {
                                    children: (0, Uk.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Sk && (0, Uk.jsx)(ye, {
                                        colour: Sk
                                      }), ek.defaultValue]
                                    })
                                  })]
                                }), null !== ek.example && (0, Uk.jsxs)("div", {
                                  children: [(0, Uk.jsx)("dt", {
                                    children: "Example"
                                  }), (0, Uk.jsx)("dd", {
                                    children: (0, Uk.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: ek.example
                                    })
                                  })]
                                })]
                              }), ek.description.length > 0 && (0, Uk.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Uk.jsx)(Ui, {
                                  blocks: ek.description
                                })
                              }), (0, Uk.jsx)(pS, {
                                pageId: ik,
                                anchor: Dk
                              })]
                            })
                          }

                          function CS(kk) {
                            let {
                              section: ek
                            } = kk;
                            return (0, Uk.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, Uk.jsx)(Mi, {
                                level: 2,
                                text: ek.heading.text,
                                anchor: ek.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, Uk.jsx)("div", {
                                className: "DocsProse",
                                children: (0, Uk.jsx)(Ui, {
                                  blocks: ek.blocks
                                })
                              })]
                            })
                          }

                          function AS(kk) {
                            let {
                              section: ek
                            } = kk;
                            return (0, Uk.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Uk.jsx)(Mi, {
                                level: ek.heading.level,
                                text: ek.heading.text,
                                anchor: ek.heading.anchor
                              }), (0, Uk.jsx)(Ui, {
                                blocks: ek.blocks
                              })]
                            })
                          }
                          const jS = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function sS(kk) {
                            let {
                              page: ek,
                              section: ik
                            } = kk;
                            if ("methods" === ek.layout || "callbacks" === ek.layout) return (0, Uk.jsx)(yS, {
                              method: si(ik),
                              pageId: ek.id,
                              anchor: ik.heading.anchor,
                              isCallback: "callbacks" === ek.layout
                            });
                            if ("settings" === ek.layout) {
                              const kk = function(kk) {
                                const ek = {
                                  name: kk.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Dk of kk.blocks) {
                                  var ik;
                                  if (ji(Dk)) continue;
                                  const kk = "paragraph" === Dk.kind ? Dk.text.match(di) : null;
                                  if (!kk) {
                                    ek.description.push(Dk);
                                    continue
                                  }
                                  const fk = null !== (ik = Ai(kk[2])) && void 0 !== ik ? ik : kk[2];
                                  "Type" === kk[1] ? ek.type = fk : "Default" === kk[1] ? ek.defaultValue = fk : "" !== fk && (ek.example = fk)
                                }
                                return ek.type ? ek : null
                              }(ik);
                              if (kk) return (0, Uk.jsx)(LS, {
                                setting: kk,
                                pageId: ek.id,
                                anchor: ik.heading.anchor,
                                setterSnippet: ek.setterSnippet
                              })
                            }
                            return "snippets" === ek.layout ? (0, Uk.jsx)(CS, {
                              section: ik
                            }) : "changelog" === ek.layout ? (0, Uk.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, Uk.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, Uk.jsx)(Mi, {
                                  level: 2,
                                  text: ik.heading.text,
                                  anchor: ik.heading.anchor
                                })
                              }), (0, Uk.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, Uk.jsx)(Ui, {
                                  blocks: Vi(ik.blocks)
                                })
                              })]
                            }) : ek.gallery ? (0, Uk.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Uk.jsx)(Mi, {
                                level: ik.heading.level,
                                text: ik.heading.text,
                                anchor: ik.heading.anchor
                              }), (0, Uk.jsx)(uD, {
                                kind: ek.gallery,
                                content: tk(ek),
                                blocks: ik.blocks
                              })]
                            }) : (0, Uk.jsx)(AS, {
                              section: ik
                            })
                          }

                          function dS(kk) {
                            let {
                              page: ek,
                              onTocChange: ik
                            } = kk;
                            const fk = tk(ek),
                              [Sk, bk] = (0, Dk.useState)(""),
                              rk = "article" !== ek.layout,
                              Pk = li(ek.gallery) ? ek.gallery : null,
                              mk = null !== Pk,
                              Mk = Sk.trim().toLowerCase(),
                              Kk = (0, Dk.useRef)(null),
                              xk = (0, Dk.useCallback)((kk => {
                                var ek;
                                null === (ek = Kk.current) || void 0 === ek || ek.preview(kk)
                              }), []),
                              nk = (0, Dk.useMemo)((() => {
                                if (!ek.hasParticlePlayground) return [];
                                const kk = Ii(fk.intro).find((kk => "names" === kk.kind && !kk.names.some((kk => null !== Bi(kk.name)))));
                                return "names" === (null === kk || void 0 === kk ? void 0 : kk.kind) ? kk.names.map((kk => kk.name)) : []
                              }), [ek, fk]),
                              Hk = (0, Dk.useMemo)((() => {
                                if (!ek.hasTextPlayground) return [];
                                const kk = fk.sections.flatMap((kk => kk.blocks.flatMap((kk => {
                                  var ek;
                                  return (null !== (ek = qi(kk)) && void 0 !== ek ? ek : []).flatMap((kk => te(kk.name) ? [kk.name] : []))
                                }))));
                                return [...new Set(kk)]
                              }), [ek, fk]),
                              wk = (0, Dk.useMemo)((() => Mk ? fk.sections.filter((kk => function(kk, ek) {
                                return !!kk.heading.text.toLowerCase().includes(ek) || kk.blocks.some((kk => (0, jk.h)(kk).toLowerCase().includes(ek)))
                              }(kk, Mk))) : fk.sections), [fk, Mk]),
                              lk = (0, Dk.useMemo)((() => function(kk, ek) {
                                return "article" !== kk.layout ? ek.map((kk => ({
                                  anchor: kk.heading.anchor,
                                  text: kk.heading.text,
                                  level: 2
                                }))) : ek.flatMap((kk => {
                                  const ek = kk.blocks.flatMap((kk => "heading" === kk.kind && 3 === kk.level ? [{
                                    anchor: kk.anchor,
                                    text: kk.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: kk.heading.anchor,
                                    text: kk.heading.text,
                                    level: 2
                                  }, ...ek]
                                }))
                              }(ek, wk)), [ek, wk]);
                            return (0, Dk.useEffect)((() => {
                              ik(lk)
                            }), [lk, ik]), (0, Uk.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, Uk.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, Uk.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: fk.title || ek.title
                                }), (0, Uk.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: ek.summary
                                }), (0, Uk.jsx)(ND, {
                                  page: ek
                                }), rk && (0, Uk.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, Uk.jsxs)("span", {
                                    children: [(0, Uk.jsx)("strong", {
                                      children: fk.sections.length
                                    }), " ", jS[ek.layout]]
                                  })
                                })]
                              }), "" === ek.slug && (0, Uk.jsx)(ID, {}), Pk && (0, Uk.jsx)(ED, {
                                kind: Pk
                              }, Pk), ek.hasParticlePlayground && (0, Uk.jsx)(Kf, {
                                ref: Kk,
                                textures: nk
                              }), !mk && fk.intro.length > 0 && (0, Uk.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: ek.gallery ? (0, Uk.jsx)(YD.Provider, {
                                  value: ek.hasParticlePlayground ? xk : null,
                                  children: (0, Uk.jsx)(uD, {
                                    kind: ek.gallery,
                                    content: fk,
                                    blocks: fk.intro
                                  })
                                }) : (0, Uk.jsx)(Ui, {
                                  blocks: Vi(fk.intro)
                                })
                              }), ek.hasTextPlayground && (0, Uk.jsx)(Vf, {
                                fontAwesomeIcons: Hk
                              }), ek.hasVoicePlayground && (0, Uk.jsx)(eS, {}), ek.childPageIds && (0, Uk.jsx)(ID, {
                                cards: ek.childPageIds.map((kk => ({
                                  pageId: kk
                                }))),
                                label: ek.title
                              }), rk && (0, Uk.jsx)(Li, {
                                className: "DocsFilterBar",
                                value: Sk,
                                placeholder: `Filter ${fk.sections.length} ${jS[ek.layout]}\u2026`,
                                label: `Filter ${jS[ek.layout]}`,
                                onChange: bk,
                                count: Mk ? {
                                  visible: wk.length,
                                  total: fk.sections.length
                                } : null
                              }), !mk && (0, Uk.jsxs)("div", {
                                className: `DocsSections Layout-${ek.layout}`,
                                children: [wk.map((kk => (0, Uk.jsx)(sS, {
                                  page: ek,
                                  section: kk
                                }, kk.heading.anchor))), 0 === wk.length && (0, Uk.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", jS[ek.layout], " match \u201c", Sk, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const VS = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function FS(kk) {
                            let {
                              entry: ek,
                              isActive: ik,
                              onNavigate: Dk,
                              label: fk,
                              children: bk
                            } = kk;
                            return (0, Uk.jsx)("a", {
                              href: `#${ek.anchor}`,
                              "aria-label": fk,
                              className: Sk()(`Level${ek.level}`, {
                                Active: ik
                              }),
                              "aria-current": ik ? "location" : void 0,
                              onClick: kk => {
                                kk.preventDefault(), Dk(ek.anchor)
                              },
                              children: bk
                            })
                          }

                          function uS(kk) {
                            let {
                              toc: ek,
                              activeAnchor: ik,
                              onNavigate: fk
                            } = kk;
                            const bk = Math.max(0, ek.findIndex((kk => kk.anchor === ik))),
                              rk = (0, Dk.useRef)(null),
                              Pk = (0, Dk.useRef)(!1);
                            (0, Dk.useEffect)((() => {
                              var kk, ik;
                              const Dk = null === (kk = rk.current) || void 0 === kk ? void 0 : kk.closest(".DocsToc"),
                                fk = null === (ik = rk.current) || void 0 === ik ? void 0 : ik.querySelector(".DocsTimelineNotch.Active");
                              if (!Dk || !fk) return;
                              let Sk = 0;
                              if (bk === ek.length - 1) Sk = Dk.scrollHeight;
                              else if (bk > 0) {
                                const kk = Dk.getBoundingClientRect(),
                                  ek = fk.getBoundingClientRect();
                                Sk = Dk.scrollTop + ek.top + ek.height / 2 - (kk.top + Dk.clientHeight / 2)
                              }
                              Dk.scrollTo({
                                top: Sk,
                                behavior: Pk.current ? "smooth" : "auto"
                              }), Pk.current = !0
                            }), [bk, ek.length]);
                            const mk = [];
                            return ek.forEach(((kk, ek) => {
                              var ik, Dk, fk;
                              const Sk = function(kk) {
                                  const ek = kk.trim().match(VS);
                                  return ek ? {
                                    day: ek[1],
                                    month: `${ek[2]} ${ek[3]}`
                                  } : null
                                }(kk.text),
                                bk = null !== (ik = null === Sk || void 0 === Sk ? void 0 : Sk.month) && void 0 !== ik ? ik : null;
                              null !== bk && (null === (Dk = mk.at(-1)) || void 0 === Dk ? void 0 : Dk.month) === bk || mk.push({
                                month: bk,
                                entries: []
                              }), mk.at(-1).entries.push({
                                entry: kk,
                                day: null !== (fk = null === Sk || void 0 === Sk ? void 0 : Sk.day) && void 0 !== fk ? fk : null,
                                index: ek
                              })
                            })), (0, Uk.jsx)("ol", {
                              ref: rk,
                              className: "DocsTimeline",
                              children: mk.map((kk => {
                                let {
                                  month: ek,
                                  entries: ik
                                } = kk;
                                return (0, Uk.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [ek && (0, Uk.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: ek
                                  }), (0, Uk.jsx)("ol", {
                                    children: ik.map((kk => {
                                      let {
                                        entry: ek,
                                        day: ik,
                                        index: Dk
                                      } = kk;
                                      return (0, Uk.jsx)("li", {
                                        className: Sk()("DocsTimelineNotch", {
                                          Passed: Dk < bk,
                                          Active: Dk === bk
                                        }),
                                        children: (0, Uk.jsx)(FS, {
                                          entry: ek,
                                          isActive: Dk === bk,
                                          onNavigate: fk,
                                          label: ek.text,
                                          children: (0, Uk.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== ik && void 0 !== ik ? ik : ek.text
                                          })
                                        })
                                      }, ek.anchor)
                                    }))
                                  })]
                                }, ik[0].entry.anchor)
                              }))
                            })
                          }

                          function qS(kk) {
                            let {
                              isChangelog: ek,
                              toc: ik,
                              activeAnchor: Dk,
                              onNavigate: fk
                            } = kk;
                            return 0 === ik.length ? null : (0, Uk.jsxs)(Uk.Fragment, {
                              children: [(0, Uk.jsx)("div", {
                                className: "DocsTocTitle",
                                children: ek ? "Updates" : "On this page"
                              }), ek ? (0, Uk.jsx)(uS, {
                                toc: ik,
                                activeAnchor: Dk,
                                onNavigate: fk
                              }) : (0, Uk.jsx)("ul", {
                                children: ik.map((kk => (0, Uk.jsx)("li", {
                                  children: (0, Uk.jsx)(FS, {
                                    entry: kk,
                                    isActive: kk.anchor === Dk,
                                    onNavigate: fk,
                                    children: kk.text.replace(/`/g, "")
                                  })
                                }, kk.anchor)))
                              })]
                            })
                          }
                          const IS = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            zS = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            QS = 20,
                            vS = 10,
                            ES = 40,
                            hS = 120;
                          let aS;

                          function WS(kk) {
                            const ek = kk.gallery;
                            if (!ek) return [];
                            if (li(ek)) return function(kk) {
                              return Yi(kk).entries.map((kk => kk.name))
                            }(ek).map((ik => ({
                              page: kk,
                              anchor: Qi(ek, ik),
                              title: ik,
                              kind: zS[ek],
                              text: "",
                              listedUnder: kk.title
                            })));
                            const ik = tk(kk);
                            return (0, jk.u)(ik).flatMap((Dk => {
                              const fk = Dk.heading ? `${kk.title} \u203a ${Dk.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : kk.title;
                              return Ei(ek, ik, Dk.blocks).flatMap((ik => "names" !== ik.kind ? [] : ik.names.map((Dk => {
                                const Sk = ik.isSongs ? "Song" : zS[ek];
                                return {
                                  page: kk,
                                  anchor: Dk.anchor,
                                  title: Dk.name,
                                  kind: Sk,
                                  text: "",
                                  listedUnder: fk
                                }
                              }))))
                            }))
                          }

                          function tS(kk, ek, ik) {
                            const Dk = kk.title.toLowerCase();
                            let fk = 0;
                            if (Dk === ek) fk = 100;
                            else if (Dk.startsWith(ek)) fk = 80;
                            else if (Dk.includes(ek)) fk = 60;
                            else if (ik.every((kk => Dk.includes(kk)))) fk = 45;
                            else {
                              if (!kk.text.toLowerCase().includes(ek)) return 0;
                              fk = 20
                            }
                            return fk - Math.min(Dk.length / 10, 9) + ("Page" === kk.kind ? 8 : "Method" === kk.kind ? 3 : 0) - (kk.listedUnder ? QS : 0)
                          }

                          function XS(kk, ek) {
                            const ik = kk.toLowerCase().indexOf(ek),
                              Dk = Math.max(0, ik - hS / 3);
                            return `${Dk>0?"\u2026":""}${kk.slice(Dk,Dk+hS)}${Dk+hS<kk.length?"\u2026":""}`
                          }

                          function BS(kk) {
                            let {
                              text: ek,
                              query: ik
                            } = kk;
                            const Dk = ik ? ek.toLowerCase().indexOf(ik) : -1;
                            return -1 === Dk ? (0, Uk.jsx)(Uk.Fragment, {
                              children: ek
                            }) : (0, Uk.jsxs)(Uk.Fragment, {
                              children: [ek.slice(0, Dk), (0, Uk.jsx)("mark", {
                                children: ek.slice(Dk, Dk + ik.length)
                              }), ek.slice(Dk + ik.length)]
                            })
                          }

                          function cS(kk) {
                            let {
                              basePath: ek,
                              onClose: ik
                            } = kk;
                            const fk = (0, rk.s)(),
                              [bk, Pk] = (0, Dk.useState)(""),
                              [mk, Mk] = (0, Dk.useState)(0),
                              Kk = (0, Dk.useRef)(null),
                              xk = (0, Dk.useRef)(null),
                              nk = bk.trim().toLowerCase(),
                              Hk = (0, Dk.useMemo)((() => {
                                const kk = (aS || (aS = Ek.flatMap((kk => {
                                  const ek = tk(kk);
                                  return [{
                                    page: kk,
                                    anchor: "",
                                    title: kk.title,
                                    kind: "Page",
                                    text: kk.summary
                                  }, ...ek.sections.flatMap((ek => {
                                    const ik = ek.blocks.filter((kk => "paragraph" === kk.kind)).map(jk.h).join(" ").replace(/[`*]/g, ""),
                                      Dk = {
                                        page: kk,
                                        anchor: ek.heading.anchor,
                                        title: ek.heading.text.replace(/`/g, ""),
                                        kind: IS[kk.layout],
                                        text: ik
                                      },
                                      fk = ek.blocks.flatMap((ek => "article" === kk.layout && "heading" === ek.kind && 3 === ek.level ? [{
                                        page: kk,
                                        anchor: ek.anchor,
                                        title: ek.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Dk.title
                                      }] : []));
                                    return [Dk, ...fk]
                                  })), ...WS(kk)]
                                }))), aS);
                                if (!nk) return kk.filter((kk => "Page" === kk.kind));
                                const ek = nk.split(/\s+/);
                                let ik = 0;
                                return kk.map((kk => ({
                                  entry: kk,
                                  score: tS(kk, nk, ek)
                                }))).filter((kk => kk.score > 0)).sort(((kk, ek) => ek.score - kk.score)).filter((kk => !kk.entry.listedUnder || (ik++, ik <= vS))).slice(0, ES).map((kk => kk.entry))
                              }), [nk]);
                            (0, Dk.useEffect)((() => {
                              Mk(0)
                            }), [nk]), (0, Dk.useEffect)((() => {
                              const kk = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === kk || void 0 === kk || kk.focus()
                              }
                            }), []), (0, Dk.useEffect)((() => {
                              var kk, ek;
                              null === (kk = Kk.current) || void 0 === kk || null === (ek = kk.querySelector(".Active")) || void 0 === ek || ek.scrollIntoView({
                                block: "nearest"
                              })
                            }), [mk]);
                            const lk = kk => {
                              fk(Tk(ek, kk.page, kk.anchor)), ik()
                            };
                            return (0, Uk.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: kk => {
                                kk.target === kk.currentTarget && ik()
                              },
                              children: (0, Uk.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: kk => {
                                  kk.target !== xk.current && kk.preventDefault()
                                },
                                onKeyDown: kk => {
                                  if ("Escape" === kk.key) ik();
                                  else if ("Tab" === kk.key) {
                                    var ek;
                                    kk.preventDefault(), null === (ek = xk.current) || void 0 === ek || ek.focus()
                                  }
                                },
                                children: [(0, Uk.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, Uk.jsx)(wk, {
                                    name: "magnifying-glass"
                                  }), (0, Uk.jsx)("input", {
                                    ref: xk,
                                    autoFocus: !0,
                                    value: bk,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Hk.length > 0 ? `DocsSearchResult-${mk}` : void 0,
                                    onChange: kk => {
                                      Pk(kk.target.value)
                                    },
                                    onKeyDown: kk => {
                                      if ("ArrowDown" === kk.key || "ArrowUp" === kk.key) {
                                        kk.preventDefault();
                                        const ek = "ArrowDown" === kk.key ? 1 : -1;
                                        Mk((mk + ek + Hk.length) % Math.max(Hk.length, 1))
                                      } else "Enter" === kk.key && Hk[mk] && lk(Hk[mk])
                                    }
                                  }), (0, Uk.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, Uk.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Kk,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!nk && (0, Uk.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Hk.map(((kk, ek) => {
                                    var ik;
                                    return (0, Uk.jsxs)("li", {
                                      id: `DocsSearchResult-${ek}`,
                                      role: "option",
                                      "aria-selected": ek === mk,
                                      className: Sk()("DocsSearchResult", {
                                        Active: ek === mk
                                      }),
                                      onMouseMove: () => {
                                        Mk(ek)
                                      },
                                      onClick: () => {
                                        lk(kk)
                                      },
                                      children: [(0, Uk.jsx)(wk, {
                                        name: kk.page.icon
                                      }), (0, Uk.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, Uk.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, Uk.jsx)(BS, {
                                            text: kk.title,
                                            query: nk
                                          })
                                        }), kk.text && (0, Uk.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, Uk.jsx)(BS, {
                                            text: XS(kk.text, nk),
                                            query: nk
                                          })
                                        })]
                                      }), (0, Uk.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === kk.kind ? "Page" : null !== (ik = kk.listedUnder) && void 0 !== ik ? ik : `${kk.kind} \xb7 ${kk.page.title}`
                                      })]
                                    }, `${kk.page.id}#${kk.anchor}`)
                                  })), nk && 0 === Hk.length && (0, Uk.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", bk, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function TS(kk, ek) {
                            if (ek < 10) return `${kk.toFixed(1)}s`;
                            const ik = Math.floor(kk);
                            return `${Math.floor(ik/60)}:${String(ik%60).padStart(2,"0")}`
                          }

                          function oS() {
                            const kk = nD((kk => kk.track)),
                              ek = nD((kk => kk.volume)),
                              [ik, fk] = (0, Dk.useState)(0),
                              bk = (0, Dk.useRef)(fD);
                            if ((0, Dk.useEffect)((() => {
                                if (!kk) return;
                                if (fk(lD()), "playing" !== kk.status) return;
                                let ek = 0;
                                const ik = () => {
                                  fk(lD()), ek = requestAnimationFrame(ik)
                                };
                                return ek = requestAnimationFrame(ik), () => {
                                  cancelAnimationFrame(ek)
                                }
                              }), [kk]), !kk) return null;
                            const rk = "paused" !== kk.status,
                              Pk = Math.min(ik, kk.duration);
                            return (0, Uk.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, Uk.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, Uk.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": rk ? `Pause ${kk.name}` : `Play ${kk.name}`,
                                  onClick: wD,
                                  children: (0, Uk.jsx)(wk, {
                                    name: rk ? "pause" : "play"
                                  })
                                }), (0, Uk.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, Uk.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, Uk.jsx)("code", {
                                      children: kk.name
                                    }), (0, Uk.jsx)("span", {
                                      children: kk.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, Uk.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, Uk.jsx)("span", {
                                      children: TS(Pk, kk.duration)
                                    }), (0, Uk.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: kk.duration || 1,
                                      step: .01,
                                      value: Pk,
                                      disabled: 0 === kk.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${TS(Pk,kk.duration)} of ${TS(kk.duration,kk.duration)}`,
                                      onChange: kk => {
                                        const ek = Number(kk.target.value);
                                        ! function(kk) {
                                          var ek;
                                          mD = kk, null === (ek = rD) || void 0 === ek || ek.seek(kk)
                                        }(ek), fk(ek)
                                      }
                                    }), (0, Uk.jsx)("span", {
                                      children: kk.duration > 0 ? TS(kk.duration, kk.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, Uk.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, Uk.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === ek ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === ek ? pD(bk.current) : (bk.current = ek, pD(0))
                                    },
                                    children: (0, Uk.jsx)(wk, {
                                      name: "volume",
                                      className: Sk()({
                                        Muted: 0 === ek
                                      })
                                    })
                                  }), (0, Uk.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: ek,
                                    "aria-label": "Volume",
                                    onChange: kk => {
                                      pD(Number(kk.target.value))
                                    }
                                  })]
                                }), (0, Uk.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var ek;
                                    null === (ek = document.querySelector(`[data-docs-track="${CSS.escape(SD(kk.name,kk.isSong))}"]`)) || void 0 === ek || ek.focus(), yD()
                                  },
                                  children: (0, Uk.jsx)(wk, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var ZS = ik(38);
                          const OS = "docsTheme",
                            gS = window.matchMedia("(prefers-color-scheme: light)");

                          function GS(kk) {
                            let {
                              theme: ek,
                              onChange: ik
                            } = kk;
                            const Dk = "dark" === ek ? "light" : "dark";
                            return (0, Uk.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Dk} theme`,
                              title: `Switch to ${Dk} theme`,
                              onClick: () => {
                                ik(Dk)
                              },
                              children: (0, Uk.jsx)(wk, {
                                name: "dark" === ek ? "moon" : "sun"
                              })
                            })
                          }
                          const NS = "https://github.com/Bloxdy/code-api",
                            RS = "https://discord.gg/playbloxd",
                            JS = 180,
                            kb = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function eb(kk) {
                            let {
                              basePath: ek,
                              activePageId: ik,
                              onNavigate: Dk
                            } = kk;
                            return (0, Uk.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: hk.map((kk => (0, Uk.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, Uk.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: kk.title
                                }), kk.pageIds.map((kk => {
                                  var fk;
                                  const rk = ak(kk);
                                  return (0, Uk.jsxs)(bk.b, {
                                    to: Tk(ek, rk),
                                    className: Sk()("DocsNavLink", {
                                      Active: rk.id === ik
                                    }),
                                    "aria-current": rk.id === ik ? "page" : void 0,
                                    onClick: Dk,
                                    children: [(0, Uk.jsx)(wk, {
                                      name: rk.icon
                                    }), (0, Uk.jsx)("span", {
                                      children: null !== (fk = rk.navTitle) && void 0 !== fk ? fk : rk.title
                                    })]
                                  }, rk.id)
                                }))]
                              }, kk.title)))
                            })
                          }

                          function ib(kk) {
                            let {
                              basePath: ek,
                              pageId: ik
                            } = kk;
                            const Dk = hk.flatMap((kk => kk.pageIds)),
                              fk = Dk.indexOf(ik),
                              Sk = fk > 0 ? ak(Dk[fk - 1]) : null,
                              rk = fk < Dk.length - 1 ? ak(Dk[fk + 1]) : null;
                            return (0, Uk.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Sk ? (0, Uk.jsxs)(bk.b, {
                                className: "DocsPagerLink Previous",
                                to: Tk(ek, Sk),
                                children: [(0, Uk.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, Uk.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Sk.title
                                })]
                              }) : (0, Uk.jsx)("span", {}), rk && (0, Uk.jsxs)(bk.b, {
                                className: "DocsPagerLink Next",
                                to: Tk(ek, rk),
                                children: [(0, Uk.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, Uk.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: rk.title
                                })]
                              })]
                            })
                          }

                          function Db(kk) {
                            let {
                              basePath: ek,
                              embedded: ik = !1
                            } = kk;
                            const {
                              pageSlug: fk = ""
                            } = (0, rk.y)(), mk = (0, rk.p)(), Mk = (0, rk.s)(), Kk = (xk = fk, Ek.find((kk => kk.slug === xk)));
                            var xk;
                            const [nk, Hk] = function() {
                              const [kk, ek] = (0, Dk.useState)((() => {
                                const kk = ZS.f.getItem(OS);
                                return "dark" === kk || "light" === kk ? kk : null
                              })), [ik, fk] = (0, Dk.useState)(gS.matches ? "light" : "dark");
                              return (0, Dk.useEffect)((() => {
                                const kk = () => {
                                  fk(gS.matches ? "light" : "dark")
                                };
                                return gS.addEventListener("change", kk), () => {
                                  gS.removeEventListener("change", kk)
                                }
                              }), []), [null !== kk && void 0 !== kk ? kk : ik, kk => {
                                ZS.f.setItem(OS, kk), ek(kk)
                              }]
                            }(), [lk, pk] = (0, Dk.useState)(null), [yk, Yk] = (0, Dk.useState)(!1), [Lk, Ck] = (0, Dk.useState)(!1), [Ak, sk] = (0, Dk.useState)([]), dk = function(kk, ek) {
                              const [ik, fk] = (0, Dk.useState)("");
                              return (0, Dk.useEffect)((() => {
                                if (!ek) return;
                                let ik = 0;
                                const Dk = () => {
                                    var Dk, Sk;
                                    ik = 0;
                                    const bk = ek.getBoundingClientRect().top + JS;
                                    let rk = null !== (Dk = null === (Sk = kk[0]) || void 0 === Sk ? void 0 : Sk.anchor) && void 0 !== Dk ? Dk : "";
                                    for (const ek of kk) {
                                      const kk = document.getElementById(ek.anchor);
                                      kk && kk.getBoundingClientRect().top <= bk && (rk = ek.anchor)
                                    }
                                    ek.scrollTop + ek.clientHeight >= ek.scrollHeight - 2 && ek.scrollTop > 0 && kk.length > 0 && (rk = kk[kk.length - 1].anchor), fk(rk)
                                  },
                                  Sk = () => {
                                    ik || (ik = requestAnimationFrame(Dk))
                                  };
                                return Dk(), ek.addEventListener("scroll", Sk, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(ik), ek.removeEventListener("scroll", Sk)
                                }
                              }), [kk, ek]), ik
                            }(Ak, lk), Vk = "" === fk && mk.hash ? function(kk) {
                              const ek = (0, jk.p)(kk);
                              if (Xk(ak("welcome"), ek)) return null;
                              const ik = Object.hasOwn(ck, ek) ? ck[ek] : null;
                              if (ik) return {
                                page: ak(ik.pageId),
                                anchor: ik.anchor
                              };
                              const Dk = ak("readme");
                              return Xk(Dk, ek) ? {
                                page: Dk,
                                anchor: ek
                              } : Bk(`#${ek}`)
                            }(mk.hash) : null;
                            (0, Dk.useEffect)((() => (Pk.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              Pk.b.set({
                                musicOnFromPage: !0
                              }), yD()
                            })), []), (0, Dk.useEffect)((() => {
                              const kk = kk => {
                                const ek = kk.target;
                                if (ek.closest(".DocsTextDialog")) return;
                                const ik = ek.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(ek.tagName);
                                "k" === kk.key && (kk.metaKey || kk.ctrlKey) || "/" === kk.key && !ik ? (kk.preventDefault(), Ck(!0)) : "Escape" === kk.key && Yk(!1)
                              };
                              return window.addEventListener("keydown", kk), () => {
                                window.removeEventListener("keydown", kk)
                              }
                            }), []);
                            const Fk = (0, Dk.useRef)(null);
                            (0, Dk.useLayoutEffect)((() => {
                              var kk, ek;
                              if (!lk) return;
                              const ik = Fk.current === mk.pathname;
                              Fk.current = mk.pathname;
                              const Dk = (0, jk.p)(mk.hash),
                                fk = Dk ? document.getElementById(Dk) : null;
                              if (null === (kk = lk.querySelector(".DocsTargeted")) || void 0 === kk || kk.classList.remove("DocsTargeted"), null === fk || void 0 === fk || null === (ek = fk.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === ek || ek.classList.add("DocsTargeted"), fk) {
                                var Sk;
                                const kk = fk.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Sk = fk.closest(".DocsChangelogEntry")) && void 0 !== Sk ? Sk : fk).scrollIntoView({
                                  block: kk ? "center" : "start",
                                  behavior: ik ? "smooth" : "auto"
                                })
                              } else ik || lk.scrollTo({
                                top: 0
                              })
                            }), [lk, mk.pathname, mk.hash, mk.key]);
                            const uk = (0, Dk.useCallback)((() => {
                                Yk(!1)
                              }), []),
                              qk = (0, Dk.useCallback)((kk => {
                                Mk({
                                  hash: kk
                                })
                              }), [Mk]);
                            if (Vk) return (0, Uk.jsx)(rk.c, {
                              replace: !0,
                              to: Tk(ek, Vk.page, Vk.anchor)
                            });
                            if (!Kk) return (0, Uk.jsx)(rk.c, {
                              replace: !0,
                              to: ek
                            });
                            const Ik = ik ? "div" : "main";
                            return (0, Uk.jsx)(Ue.Provider, {
                              value: ek,
                              children: (0, Uk.jsx)(He.Provider, {
                                value: lk,
                                children: (0, Uk.jsxs)("div", {
                                  ref: pk,
                                  className: Sk()("DocsSite", {
                                    Embedded: ik,
                                    NavOpen: yk
                                  }),
                                  "data-theme": nk,
                                  children: [(0, Uk.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, Uk.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": yk ? "Close menu" : "Open menu",
                                      "aria-expanded": yk,
                                      onClick: () => {
                                        Yk(!yk)
                                      },
                                      children: (0, Uk.jsx)(wk, {
                                        name: yk ? "cross" : "menu"
                                      })
                                    }), (0, Uk.jsxs)(bk.b, {
                                      to: ek,
                                      className: "DocsBrand",
                                      children: [(0, Uk.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, Uk.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, Uk.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, Uk.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        Ck(!0)
                                      },
                                      children: [(0, Uk.jsx)(wk, {
                                        name: "magnifying-glass"
                                      }), (0, Uk.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, Uk.jsxs)("kbd", {
                                        children: [kb ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, Uk.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, Uk.jsxs)("a", {
                                        href: RS,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Uk.jsx)(wk, {
                                          name: "discord"
                                        }), (0, Uk.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, Uk.jsxs)("a", {
                                        href: NS,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Uk.jsx)(wk, {
                                          name: "external-link"
                                        }), (0, Uk.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !ik && (0, Uk.jsxs)(bk.b, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, Uk.jsx)(wk, {
                                          name: "play"
                                        }), (0, Uk.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, Uk.jsx)(GS, {
                                        theme: nk,
                                        onChange: Hk
                                      })]
                                    })]
                                  }), (0, Uk.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, Uk.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, Uk.jsx)(eb, {
                                        basePath: ek,
                                        activePageId: Kk.id,
                                        onNavigate: uk
                                      })
                                    }), (0, Uk.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: uk
                                    }), (0, Uk.jsxs)(Ik, {
                                      className: "DocsMain",
                                      children: [(0, Uk.jsx)(dS, {
                                        page: Kk,
                                        onTocChange: sk
                                      }, Kk.id), (0, Uk.jsx)(ib, {
                                        basePath: ek,
                                        pageId: Kk.id
                                      })]
                                    }), (0, Uk.jsx)("aside", {
                                      className: Sk()("DocsToc", {
                                        Timeline: "changelog" === Kk.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, Uk.jsx)(qS, {
                                        isChangelog: "changelog" === Kk.layout,
                                        toc: Ak,
                                        activeAnchor: dk,
                                        onNavigate: qk
                                      })
                                    })]
                                  }), (0, Uk.jsx)(oS, {}), Lk && (0, Uk.jsx)(cS, {
                                    basePath: ek,
                                    onClose: () => {
                                      Ck(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4685: (kk, ek, ik) => {
                          ik.d(ek, {
                            c: () => Dk,
                            g: () => bk,
                            h: () => wk,
                            i: () => Hk,
                            m: () => rk,
                            p: () => fk,
                            q: () => Sk,
                            u: () => Uk,
                            v: () => nk,
                            w: () => xk
                          });
                          const Dk = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function fk(kk) {
                            try {
                              return decodeURIComponent(kk.slice(1))
                            } catch {
                              return kk.slice(1)
                            }
                          }

                          function Sk(kk) {
                            return kk.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const bk = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Dk.source}`, "g");

                          function rk(kk, ek) {
                            return 2 === kk.length ? ek.replace(/^ (.*) $/, "$1") : ek
                          }

                          function Pk(kk) {
                            return "" === kk.trim()
                          }

                          function mk(kk) {
                            const ek = [];
                            for (const ik of kk.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ek.length > 0 && ek[ek.length - 1].endsWith("\\") ? ek[ek.length - 1] += `|${ik}` : ek.push(ik);
                            return ek.map((kk => kk.trim().replaceAll("\\|", "|")))
                          }
                          const Mk = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Kk(kk) {
                            const ek = [],
                              ik = [{
                                indent: -1,
                                items: ek
                              }];
                            let Dk = null;
                            for (const fk of kk) {
                              const kk = fk.match(Mk);
                              if (!kk) {
                                Dk && (Dk.text += ` ${fk.trim()}`);
                                continue
                              }
                              const ek = kk[1].replace(/\t/g, "  ").length;
                              for (; ek <= ik[ik.length - 1].indent;) ik.pop();
                              Dk = {
                                text: kk[3].trim(),
                                children: []
                              }, ik[ik.length - 1].items.push(Dk), ik.push({
                                indent: ek,
                                items: Dk.children
                              })
                            }
                            return ek
                          }

                          function xk(kk) {
                            const ek = kk.replace(/\r\n/g, "\n").split("\n"),
                              ik = [];
                            let Dk = 0;
                            for (; Dk < ek.length;) {
                              const kk = ek[Dk];
                              if (Pk(kk)) {
                                Dk++;
                                continue
                              }
                              const fk = kk.match(/^\s*```\s*(\w*)\s*$/);
                              if (fk) {
                                const kk = [];
                                for (Dk++; Dk < ek.length && !/^\s*```\s*$/.test(ek[Dk]);) kk.push(ek[Dk]), Dk++;
                                Dk++, ik.push({
                                  kind: "code",
                                  lang: fk[1] || "text",
                                  code: kk.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const bk = kk.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (bk) {
                                const kk = bk[2].trim();
                                ik.push({
                                  kind: "heading",
                                  level: bk[1].length,
                                  text: kk,
                                  anchor: Sk(kk)
                                }), Dk++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(kk)) {
                                ik.push({
                                  kind: "rule"
                                }), Dk++;
                                continue
                              }
                              if (kk.trim().startsWith("|") && Dk + 1 < ek.length && /^\s*\|[\s:|-]+\|\s*$/.test(ek[Dk + 1])) {
                                const fk = mk(kk),
                                  Sk = [];
                                for (Dk += 2; Dk < ek.length && ek[Dk].trim().startsWith("|");) Sk.push(mk(ek[Dk])), Dk++;
                                ik.push({
                                  kind: "table",
                                  header: fk,
                                  rows: Sk
                                });
                                continue
                              }
                              if (kk.startsWith(">")) {
                                const kk = [];
                                for (; Dk < ek.length && ek[Dk].startsWith(">");) kk.push(ek[Dk].replace(/^>\s?/, "")), Dk++;
                                ik.push({
                                  kind: "quote",
                                  blocks: xk(kk.join("\n"))
                                });
                                continue
                              }
                              if (Mk.test(kk)) {
                                const fk = [],
                                  Sk = /^\s*\d+\./.test(kk);
                                for (; Dk < ek.length && !Pk(ek[Dk]) && (Mk.test(ek[Dk]) || /^\s+\S/.test(ek[Dk]));) fk.push(ek[Dk]), Dk++;
                                ik.push({
                                  kind: "list",
                                  ordered: Sk,
                                  items: Kk(fk)
                                });
                                continue
                              }
                              const rk = [];
                              for (; Dk < ek.length && !Pk(ek[Dk]) && !/^\s*```/.test(ek[Dk]) && !/^#{1,6}\s/.test(ek[Dk]) && !ek[Dk].startsWith(">") && !Mk.test(ek[Dk]) && (!ek[Dk].trim().startsWith("|") || 0 !== rk.length);) rk.push(ek[Dk].trim()), Dk++;
                              0 === rk.length && (rk.push(ek[Dk].trim()), Dk++), ik.push({
                                kind: "paragraph",
                                text: rk.join(" ")
                              })
                            }
                            return ik
                          }

                          function nk(kk) {
                            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const ik = xk(kk);
                            let Dk = "";
                            const fk = [],
                              Sk = [],
                              bk = new Map;
                            for (const mk of ik) {
                              if ("heading" === mk.kind) {
                                var rk;
                                const kk = (null !== (rk = bk.get(mk.anchor)) && void 0 !== rk ? rk : 0) + 1;
                                bk.set(mk.anchor, kk), kk > 1 && (mk.anchor = `${mk.anchor}-${kk}`)
                              }
                              if ("heading" === mk.kind && 1 === mk.level && !Dk) {
                                Dk = mk.text;
                                continue
                              }
                              if ("heading" === mk.kind && mk.level <= ek) {
                                Sk.push({
                                  heading: mk,
                                  blocks: []
                                });
                                continue
                              }
                              const kk = Sk.at(-1);
                              kk ? kk.blocks.push(mk) : fk.push(mk)
                            }
                            const Pk = kk => {
                              for (;
                                "rule" === (null === (ek = kk.at(-1)) || void 0 === ek ? void 0 : ek.kind);) {
                                var ek;
                                kk.pop()
                              }
                            };
                            Pk(fk);
                            for (const mk of Sk) Pk(mk.blocks);
                            return {
                              title: Dk,
                              intro: fk,
                              sections: Sk
                            }
                          }

                          function Uk(kk) {
                            return [{
                              heading: null,
                              blocks: kk.intro
                            }, ...kk.sections.map((kk => ({
                              heading: kk.heading,
                              blocks: kk.blocks
                            })))]
                          }

                          function Hk(kk) {
                            return kk.flatMap((kk => "code" === kk.kind ? [kk] : "quote" === kk.kind ? Hk(kk.blocks) : []))
                          }

                          function wk(kk) {
                            switch (kk.kind) {
                              case "heading":
                              case "paragraph":
                                return kk.text;
                              case "code":
                                return kk.code;
                              case "table":
                                return [kk.header, ...kk.rows].map((kk => kk.join(" "))).join(" ");
                              case "list": {
                                const ek = kk => kk.map((kk => `${kk.text} ${ek(kk.children)}`)).join(" ");
                                return ek(kk.items)
                              }
                              case "quote":
                                return kk.blocks.map(wk).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4769: (kk, ek, ik) => {
                          ik.d(ek, {
                            e: () => rk
                          });
                          var Dk = ik(60),
                            fk = ik(302),
                            Sk = ik(1877),
                            bk = ik(1066);

                          function rk(kk) {
                            let {
                              text: ek
                            } = kk;
                            const ik = [];
                            let rk = "";
                            return (0, fk.hc)(ek).forEach(((kk, ek) => {
                              if ("string" === typeof kk || !(0, Sk.e)(kk.icon)) return void(rk += "string" === typeof kk ? kk : kk.icon);
                              const fk = Math.max(0, rk.trimEnd().search(/\S{1,12}$/));
                              ik.push((0, bk.jsxs)(Dk.Fragment, {
                                children: [rk.slice(0, fk), (0, bk.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [rk.slice(fk), (0, bk.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": kk.icon,
                                    children: (0, bk.jsx)(Sk.c, {
                                      itemName: kk.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, ek)), rk = ""
                            })), ik.push(rk), (0, bk.jsx)(bk.Fragment, {
                              children: ik
                            })
                          }
                        }, 4711: (kk, ek, ik) => {
                          ik.d(ek, {
                            e: () => pk,
                            b: () => lk
                          });
                          var Dk = ik(60),
                            fk = ik(1406),
                            Sk = ik(1858),
                            bk = ik(4713),
                            rk = ik(1066);
                          const Pk = (0, Dk.memo)((function(kk) {
                            let {
                              initialParameters: ek
                            } = kk;
                            const ik = (0, Dk.useRef)(null),
                              fk = (0, Dk.useRef)(null),
                              Pk = (0, Dk.useRef)(0),
                              mk = (0, Dk.useRef)(null),
                              Mk = ek.description,
                              Kk = ek.Kk,
                              {
                                scale: xk,
                                rotation: nk
                              } = null !== ek && void 0 !== ek ? ek : {},
                              Uk = (0, bk.e)();
                            return (0, Dk.useEffect)((() => {
                              const kk = Uk.onFrame((() => {
                                const kk = Uk.getState();
                                if (!kk.isActive || !ik.current || !fk.current) return;
                                const ek = kk.state;
                                if (ik.current.value = ek.progress, ek.clickCount > Pk.current) {
                                  Pk.current = ek.clickCount;
                                  const kk = fk.current;
                                  kk.classList.add("pulse"), mk.current = setTimeout((() => {
                                    kk.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(mk.current), kk()
                              }
                            }), [Uk]), (0, rk.jsx)(rk.Fragment, {
                              children: (0, rk.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== xk && {
                                    "--scale": xk
                                  },
                                  ...null !== nk && {
                                    "--rotation": `${nk}deg`
                                  }
                                },
                                children: [(0, rk.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: ik
                                }), (0, rk.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: fk,
                                  children: (0, rk.jsx)(Sk.e, {
                                    text: [{
                                      icon: Kk
                                    }]
                                  })
                                }), (0, rk.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, rk.jsx)(Sk.e, {
                                    text: Mk
                                  })
                                })]
                              })
                            })
                          }));
                          var mk = ik(1021),
                            Mk = ik.n(mk);
                          const Kk = 2 * Math.PI * 90,
                            xk = (0, Dk.memo)((function(kk) {
                              let {
                                initialParameters: ek
                              } = kk;
                              const ik = (0, Dk.useRef)(null),
                                fk = (0, Dk.useRef)(null),
                                Pk = (0, Dk.useRef)(null),
                                mk = ek.label,
                                xk = ek.icon,
                                nk = ek.Uk,
                                {
                                  scale: Uk,
                                  rotation: Hk,
                                  Hk: wk
                                } = null !== ek && void 0 !== ek ? ek : {},
                                lk = (0, bk.e)();
                              return (0, Dk.useEffect)((() => {
                                const kk = lk.onFrame((() => {
                                  var kk, ek;
                                  const Dk = lk.getState();
                                  if (!Dk.isActive || !fk.current) return;
                                  const Sk = Dk.state,
                                    bk = null !== (kk = Sk.timeRemaining) && void 0 !== kk ? kk : 0,
                                    rk = null !== (ek = Sk.nk) && void 0 !== ek ? ek : 1,
                                    mk = Kk * (1 - bk / rk);
                                  fk.current.style.strokeDashoffset = `${mk}`, ik.current && (ik.current.style.opacity = bk > 0 ? "1" : "0"), Pk.current && nk && (Pk.current.textContent = `${(bk/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  kk()
                                }
                              }), [lk, nk]), (0, rk.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: ik,
                                style: {
                                  ...null !== Uk && {
                                    "--scale": Uk
                                  },
                                  ...null !== Hk && {
                                    "--rotation": `${Hk}deg`
                                  }
                                },
                                children: [(0, rk.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, rk.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, rk.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, rk.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Kk,
                                      ref: fk
                                    })]
                                  }), (0, rk.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, rk.jsx)(Sk.e, {
                                      text: [{
                                        icon: xk
                                      }],
                                      className: Mk()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: wk
                                      })
                                    })
                                  })]
                                }), (0, rk.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, rk.jsx)(Sk.e, {
                                    text: mk,
                                    className: "QTETimedClickLabelText"
                                  }), nk && (0, rk.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: Pk
                                  })]
                                })]
                              })
                            })),
                            nk = (0, Dk.memo)((function(kk) {
                              let {
                                initialParameters: ek
                              } = kk;
                              const ik = (0, Dk.useRef)(null),
                                fk = (0, Dk.useRef)(null),
                                Pk = (0, Dk.useRef)(null),
                                mk = (0, Dk.useRef)(!1),
                                Mk = ek.description,
                                Kk = null === ek || void 0 === ek ? void 0 : ek.icon,
                                xk = (0, bk.e)();
                              return (0, Dk.useEffect)((() => {
                                const kk = xk.onFrame((() => {
                                  const kk = xk.getState();
                                  if (!kk.isActive) return;
                                  const ek = kk.state;
                                  if (ik.current) {
                                    const kk = 100 * (ek.catchZonePosition - ek.lk / 2);
                                    ik.current.style.left = `${kk}%`, ik.current.style.width = 100 * ek.lk + "%", ek.isCatching !== mk.current && (mk.current = ek.isCatching, ek.isCatching ? ik.current.classList.add("catching") : ik.current.classList.remove("catching"))
                                  }
                                  fk.current && (fk.current.style.left = 100 * ek.moverPosition + "%"), Pk.current && (Pk.current.value = ek.progress)
                                }));
                                return () => {
                                  kk()
                                }
                              }), [xk]), (0, rk.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, rk.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, rk.jsx)(Sk.e, {
                                    text: Mk
                                  })
                                }), (0, rk.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: Pk
                                }), (0, rk.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, rk.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: ik
                                  }), (0, rk.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: fk,
                                    children: (0, rk.jsx)("span", {
                                      children: Kk && (0, rk.jsx)(Sk.e, {
                                        text: [{
                                          icon: Kk,
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
                          var Uk = ik(594);
                          const Hk = (0, Dk.memo)((function(kk) {
                              let {
                                initialParameters: ek
                              } = kk;
                              const ik = (0, Dk.useRef)(null),
                                fk = ek.label,
                                Pk = ek.sk,
                                {
                                  icon: mk,
                                  scale: Mk,
                                  rotation: Kk
                                } = null !== ek && void 0 !== ek ? ek : {},
                                xk = 100 * (.5 - Pk / 2),
                                nk = 100 * Pk,
                                Hk = (0, bk.e)();
                              return (0, Dk.useEffect)((() => {
                                const kk = Hk.onFrame((() => {
                                  const kk = Hk.getState();
                                  if (!kk.isActive || !ik.current) return;
                                  const ek = kk.state;
                                  ik.current.style.left = 100 * ek.markerPosition + "%"
                                }));
                                return () => {
                                  kk()
                                }
                              }), [Hk]), (0, rk.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, Uk.F)(Mk) && {
                                    "--scale": Mk
                                  },
                                  ...!(0, Uk.F)(Kk) && {
                                    "--rotation": `${Kk}deg`
                                  }
                                },
                                children: [mk && (0, rk.jsx)(Sk.e, {
                                  text: [{
                                    icon: mk
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, rk.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, rk.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${xk}%`,
                                      width: `${nk}%`
                                    }
                                  }), (0, rk.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: ik
                                  })]
                                }), (0, rk.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, rk.jsx)(Sk.e, {
                                    text: fk
                                  })
                                })]
                              })
                            })),
                            wk = (0, Dk.memo)((function(kk) {
                              let {
                                initialParameters: ek
                              } = kk;
                              const ik = (0, Dk.useRef)(null),
                                [fk, Pk] = (0, Dk.useState)((() => new Array(ek.Fk).fill("pending"))),
                                [mk, Mk] = (0, Dk.useState)((() => {
                                  const kk = ek.Ik;
                                  return (0, Uk.F)(kk) || kk <= 0 ? [] : new Array(kk).fill("pending")
                                })),
                                Kk = ek.label,
                                {
                                  icon: xk
                                } = ek,
                                nk = (0, Dk.useRef)(0),
                                Hk = (0, Dk.useRef)(0),
                                wk = (0, Dk.useRef)([]),
                                lk = (0, bk.e)();
                              return (0, Dk.useEffect)((() => {
                                const kk = lk.onFrame((() => {
                                  const kk = lk.getState();
                                  if (!kk.isActive || !ik.current) return;
                                  const ek = kk.state,
                                    Dk = 30 + 60 * ek.outerCircleProgress;
                                  if (ik.current.setAttribute("r", String(Dk)), !0 === ek.lastClickResult && ek.successes > nk.current) {
                                    ik.current.classList.remove("QTERhythmClickOuterCircle--miss"), ik.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const kk = setTimeout((() => {
                                      var kk;
                                      null === (kk = ik.current) || void 0 === kk || kk.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    wk.current.push(kk)
                                  } else if (!1 === ek.lastClickResult && ek.misses > Hk.current) {
                                    ik.current.classList.remove("QTERhythmClickOuterCircle--hit"), ik.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const kk = setTimeout((() => {
                                      var kk;
                                      null === (kk = ik.current) || void 0 === kk || kk.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    wk.current.push(kk)
                                  }
                                  ek.successes === nk.current && ek.misses === Hk.current || (nk.current = ek.successes, Hk.current = ek.misses, Pk((kk => {
                                    const ik = [...kk];
                                    for (let Dk = 0; Dk < ek.Fk; Dk++) ik[Dk] = Dk < ek.successes ? "success" : "pending";
                                    return ik
                                  })), Mk((kk => {
                                    if (0 === kk.length) return kk;
                                    const ik = [...kk];
                                    for (let Dk = 0; Dk < ik.length; Dk++) ik[Dk] = Dk < ek.misses ? "miss" : "pending";
                                    return ik
                                  })))
                                }));
                                return () => {
                                  kk();
                                  for (const kk of wk.current) clearTimeout(kk);
                                  wk.current = []
                                }
                              }), [lk]), (0, rk.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, rk.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: fk.map(((kk, ek) => (0, rk.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === kk ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, ek)))
                                }), (0, rk.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, rk.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, rk.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, rk.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: ik
                                    })]
                                  }), xk && (0, rk.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, rk.jsx)(Sk.e, {
                                      text: [{
                                        icon: xk
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), mk.length > 0 && (0, rk.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: mk.map(((kk, ek) => (0, rk.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === kk ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, ek)))
                                }), (0, rk.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, rk.jsx)(Sk.e, {
                                    text: Kk
                                  })
                                })]
                              })
                            }));

                          function lk(kk) {
                            let {
                              qte: ek
                            } = kk;
                            switch (ek.type) {
                              case "progressBar":
                                return (0, rk.jsx)(Pk, {
                                  initialParameters: ek.parameters
                                });
                              case "timedClick":
                                return (0, rk.jsx)(xk, {
                                  initialParameters: ek.parameters
                                });
                              case "gravityBar":
                                return (0, rk.jsx)(nk, {
                                  initialParameters: ek.parameters
                                });
                              case "precisionBar":
                                return (0, rk.jsx)(Hk, {
                                  initialParameters: ek.parameters
                                });
                              case "rhythmClick":
                                return (0, rk.jsx)(wk, {
                                  initialParameters: ek.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const pk = (0, Dk.memo)((function() {
                            const [kk, ek] = (0, Dk.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, fk.c)("qteStateUpdated", (kk => {
                              ek(kk)
                            })), kk.isActive && kk.type ? (0, rk.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, rk.jsx)(lk, {
                                qte: kk
                              })
                            }) : null
                          }))
                        }, 4713: (kk, ek, ik) => {
                          ik.d(ek, {
                            c: () => rk,
                            e: () => Pk
                          });
                          var Dk = ik(60),
                            fk = ik(1284),
                            Sk = ik(4716);
                          const bk = {
                              getState: () => Sk.d.getCurrentState(),
                              onFrame: fk.o
                            },
                            rk = (0, Dk.createContext)(bk);

                          function Pk() {
                            return (0, Dk.useContext)(rk)
                          }
                        }, 4778: (kk, ek, ik) => {
                          ik.d(ek, {
                            d: () => Qk,
                            f: () => zk
                          });
                          var Dk = ik(4786),
                            fk = ik(302);
                          const Sk = 120,
                            bk = 260,
                            rk = 1.15,
                            Pk = 1.2,
                            mk = 2,
                            Mk = 1.08,
                            Kk = .8,
                            xk = .95,
                            nk = 8,
                            Uk = "[\"')\\]\u300d\u300f\uff09]*",
                            Hk = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Uk}$`),
                            wk = new RegExp(`[?\uff1f]${Uk}$`),
                            lk = new RegExp(`[!\uff01]${Uk}$`),
                            pk = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            yk = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            Yk = new RegExp(`[${yk}]`),
                            Lk = new RegExp(`[${yk}]|[^${yk}]+`, "g"),
                            Ck = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Ak(kk) {
                            let ek = 2166136261;
                            for (let ik = 0; ik < kk.length; ik++) ek ^= kk.charCodeAt(ik), ek = Math.imul(ek, 16777619);
                            return (ek >>> 0) / 4294967295 * 2 - 1
                          }

                          function jk(kk) {
                            var ek;
                            if (Yk.test(kk)) return 1;
                            const ik = kk.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Dk = ik.replace(/[^0-9]/g, "");
                            if (Dk.length > 0 && !/\p{L}/u.test(ik)) return Math.min(Dk.length, 4);
                            const fk = null !== (ek = ik.match(Ck)) && void 0 !== ek ? ek : [];
                            if (0 === fk.length) {
                              var Sk, bk;
                              const kk = null !== (Sk = null === (bk = ik.match(/\p{L}/gu)) || void 0 === bk ? void 0 : bk.length) && void 0 !== Sk ? Sk : 0;
                              return 0 === kk ? 0 : Math.min(Math.max(1, Math.round(kk / 2.5)), nk)
                            }
                            const rk = ik.replace(/[^\p{L}]/gu, ""),
                              Pk = fk.length > 1 && "e" === fk.at(-1) && rk.endsWith("e") && !rk.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(kk.replace(/[^\p{L}]/gu, ""));
                            return Math.min(fk.length - (Pk ? 1 : 0), nk)
                          }

                          function sk(kk) {
                            return kk.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function dk(kk) {
                            const ek = kk.replace(/[^\p{L}]/gu, "");
                            return ek.length >= 2 && ek === ek.toUpperCase() && ek !== ek.toLowerCase()
                          }

                          function Vk(kk, ek) {
                            var ik;
                            const nk = ek && (0, Dk.i)(ek),
                              Uk = null !== (ik = null === nk || void 0 === nk ? void 0 : nk.syllableMs) && void 0 !== ik ? ik : Dk.c,
                              yk = function(kk) {
                                const ek = [];
                                for (const Dk of (0, fk.hc)(kk))
                                  if ("string" === typeof Dk)
                                    for (const kk of Dk.split(/(\s+)/)) {
                                      if ("" === kk) continue;
                                      if (/^\s+$/.test(kk)) {
                                        ek.push({
                                          kind: "space",
                                          text: kk
                                        });
                                        continue
                                      }
                                      if (!Yk.test(kk)) {
                                        ek.push({
                                          kind: "word",
                                          text: kk,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Dk = !0;
                                      for (const fk of null !== (ik = kk.match(Lk)) && void 0 !== ik ? ik : []) {
                                        var ik;
                                        const kk = ek.at(-1);
                                        Dk || "word" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || Yk.test(fk) || /[\p{L}\p{N}]/u.test(fk) ? (Dk || ek.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), ek.push({
                                          kind: "word",
                                          text: fk,
                                          delayMs: 0
                                        }), Dk = !1) : kk.text += fk
                                      }
                                    } else ek.push({
                                      kind: "icon",
                                      text: Dk.icon,
                                      delayMs: 0
                                    });
                                return ek
                              }(kk),
                              Ck = [];
                            let Vk = [];
                            for (const Dk of yk) "space" !== Dk.kind && (Vk.push(Dk), Hk.test(Dk.text) && (Ck.push(Vk), Vk = []));
                            Ck.push(Vk);
                            const Fk = [];
                            let uk = 0;
                            for (const Dk of Ck) {
                              var qk, Ik;
                              const kk = null !== (qk = null === (Ik = Dk.at(-1)) || void 0 === Ik ? void 0 : Ik.text) && void 0 !== qk ? qk : "",
                                ek = wk.test(kk),
                                ik = lk.test(kk),
                                fk = Dk.map((kk => "word" === kk.kind ? jk(kk.text) : 1)),
                                yk = fk.findLastIndex((kk => kk > 0));
                              for (const [wk, lk] of Dk.entries()) {
                                const kk = "word" === lk.kind,
                                  Dk = fk[wk];
                                lk.delayMs = uk;
                                for (let fk = 0; nk && fk < Dk; fk++) {
                                  const {
                                    intonation: Sk
                                  } = nk;
                                  let bk = yk > 0 ? -Sk.declineSemitones * (wk / yk) : 0;
                                  bk += Ak(`${sk(lk.text)}|${fk}`) * Sk.variationSemitones;
                                  const Hk = Math.min(1, Sk.variationSemitones);
                                  let pk = nk.glideSemitones,
                                    Yk = 1;
                                  ik && (bk += Sk.exclaimLiftSemitones, Yk *= rk), ek && wk === yk && (bk += Sk.questionRiseSemitones * (Dk > 1 ? .5 + .5 * fk / (Dk - 1) : 1), fk === Dk - 1 && (pk = Math.abs(pk) + Sk.questionRiseSemitones / 2)), kk && dk(lk.text) && (bk += mk * Hk, Yk *= Pk), Dk > 1 && 0 === fk && (bk += Kk * Hk, Yk *= Mk), Fk.push({
                                    atMs: uk + fk * Uk,
                                    semitones: bk,
                                    glideSemitones: pk,
                                    durationMs: fk < Dk - 1 ? Math.min(nk.durationMs, Uk * xk) : nk.durationMs,
                                    level: Yk
                                  })
                                }
                                uk += Dk * Uk + (Hk.test(lk.text) ? bk : pk.test(lk.text) ? Sk : 0)
                              }
                            }
                            return {
                              pieces: yk.map((kk => "space" === kk.kind ? kk : "icon" === kk.kind ? {
                                kind: "icon",
                                icon: kk.text,
                                delayMs: kk.delayMs
                              } : {
                                kind: "word",
                                text: kk.text,
                                delayMs: kk.delayMs
                              })),
                              blips: Fk
                            }
                          }
                          var Fk = ik(1172),
                            uk = ik(1223),
                            qk = ik(1895);

                          function Ik(kk) {
                            if ("string" === typeof kk) return kk;
                            const ek = uk.f.get().getCurrentLanguageCode();
                            return (0, Fk.u)(ek, kk.translationKey, (0, Fk.r)(kk.params, qk.c.shown))
                          }

                          function zk(kk) {
                            const ek = void 0 === kk.voice ? null : (0, Dk.m)(kk.voice),
                              ik = ek && (0, Dk.i)(ek);
                            return {
                              plan: Vk(Ik(kk.line), ik),
                              synth: ik
                            }
                          }

                          function Qk(kk) {
                            const ek = [];
                            let ik = [];
                            for (const [fk, Sk] of kk.entries()) {
                              var Dk;
                              "space" === Sk.kind && (" " !== Sk.text || "icon" !== (null === (Dk = kk[fk + 1]) || void 0 === Dk ? void 0 : Dk.kind)) ? (ik.length > 0 && ek.push(ik), ek.push([Sk]), ik = []) : ik.push(Sk)
                            }
                            return ik.length > 0 && ek.push(ik), ek
                          }
                        }, 4791: (kk, ek, ik) => {
                          ik.d(ek, {
                            e: () => Mk,
                            f: () => Kk
                          });
                          var Dk = ik(4799),
                            fk = ik(22);
                          const Sk = .25,
                            bk = .85,
                            rk = .02,
                            Pk = .01;

                          function mk(kk, ek, ik, Dk, fk, Sk, rk) {
                            const {
                              waveform: Pk,
                              pitchHz: mk,
                              attackMs: Mk,
                              releaseMs: Kk,
                              lowpassHz: xk
                            } = ik, nk = fk + Dk.durationMs / 1e3, Uk = mk * 2 ** (Dk.semitones / 12), Hk = kk.createOscillator();
                            Hk.type = Pk, Hk.frequency.setValueAtTime(Uk, fk), Hk.frequency.exponentialRampToValueAtTime(Uk * 2 ** (Dk.glideSemitones / 12), nk);
                            const wk = fk + Math.min(Mk, Dk.durationMs) / 1e3,
                              lk = kk.createGain();
                            lk.gain.setValueAtTime(0, fk), lk.gain.linearRampToValueAtTime(Sk, wk), lk.gain.linearRampToValueAtTime(Sk * bk, Math.max(wk, nk - Kk / 1e3)), lk.gain.linearRampToValueAtTime(0, nk);
                            const pk = [Hk];
                            if (null !== xk) {
                              const ek = kk.createBiquadFilter();
                              ek.type = "lowpass", ek.frequency.value = xk, pk.push(ek)
                            }
                            pk.push(lk, ek);
                            for (let bk = 1; bk < pk.length; bk++) pk[bk - 1].connect(pk[bk]);
                            return Hk.onended = () => {
                              for (const kk of pk.slice(0, -1)) kk.disconnect();
                              rk()
                            }, Hk.start(fk), Hk.stop(nk), Hk
                          }

                          function Mk(kk, ek, ik, Dk, fk, bk) {
                            if (0 === Dk.length) return bk(), () => {};
                            const Mk = Sk * ik.volume * fk,
                              Kk = kk.createGain();
                            Kk.connect(ek);
                            const xk = kk.currentTime + rk,
                              nk = new Set;
                            for (const Sk of Dk) {
                              const ek = mk(kk, Kk, ik, Sk, xk + Sk.atMs / 1e3, Mk * Sk.level, (() => {
                                nk.delete(ek), 0 === nk.size && (Kk.disconnect(), bk())
                              }));
                              nk.add(ek)
                            }
                            return () => {
                              const ek = kk.currentTime;
                              Kk.gain.setTargetAtTime(0, ek, Pk);
                              for (const kk of nk) try {
                                kk.stop(ek + 5 * Pk)
                              } catch {}
                            }
                          }

                          function Kk(kk, ek) {
                            var ik;
                            const Sk = Dk.Howler.ctx,
                              bk = Dk.Howler.masterGain;
                            if (!Sk || !bk || !fk.b.get("soundOnFromAd")) return () => {};
                            const rk = Dk.Howler;
                            return null === (ik = rk._autoResume) || void 0 === ik || ik.call(rk), Mk(Sk, bk, kk, ek, fk.b.get("soundVolume"), (() => {
                              var kk;
                              null === (kk = rk._autoSuspend) || void 0 === kk || kk.call(rk)
                            }))
                          }
                        }, 4799: (kk, ek, ik) => {
                          ik.r(ek), ik.d(ek, {
                            Howl: () => fk.Howl,
                            Howler: () => fk.Howler,
                            musicOutput: () => wk,
                            readyAudioContext: () => lk
                          });
                          var Dk, fk = ik(4804),
                            Sk = ik(3521),
                            bk = ik(4583);
                          const rk = fk.Howler;

                          function Pk() {
                            var kk, ek;
                            if (rk.ctx || !rk.usingWebAudio || "undefined" === typeof AudioContext || !(0, bk.i)()) return;
                            const ik = navigator.audioSession;
                            let Dk;
                            "auto" === (null === ik || void 0 === ik ? void 0 : ik.type) && (ik.type = "ambient");
                            try {
                              Dk = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const fk = Dk.createGain();
                            fk.gain.setValueAtTime(rk._muted ? 0 : null !== (kk = rk._volume) && void 0 !== kk ? kk : 1, Dk.currentTime), fk.connect(Dk.destination), rk.ctx = Dk, rk.masterGain = fk, null === (ek = rk._setup) || void 0 === ek || ek.call(rk)
                          }
                          rk._mobileUnloaded = !0;
                          const mk = rk.volume.bind(fk.Howler);
                          rk.volume = function() {
                            return Pk(), mk(...arguments)
                          };
                          const Mk = rk.mute.bind(fk.Howler);
                          rk.mute = kk => (Pk(), Mk(kk));
                          const Kk = fk.Howl.prototype,
                            xk = Kk.init;

                          function nk() {
                            for (; rk._html5AudioPool.length < rk.html5PoolSize;) {
                              const kk = new Audio;
                              kk._unlocked = !0, rk._releaseHtml5Audio(kk)
                            }
                            for (const ek of rk._howls)
                              if (!ek._webAudio)
                                for (const ik of ek._getSoundIds()) {
                                  var kk;
                                  const Dk = null === (kk = ek._soundById(ik)) || void 0 === kk ? void 0 : kk._node;
                                  Dk && !Dk._unlocked && (Dk._unlocked = !0, Dk.load())
                                }
                          }
                          Kk.init = function(kk) {
                            return Pk(), xk.call(this, kk)
                          }, (0, bk.i)() && (rk._unlockAudio = () => {
                            const kk = rk.ctx;
                            if (rk._audioUnlocked || !kk) return;
                            rk.autoUnlock = !1;
                            const ek = kk.createBuffer(1, 1, 22050);
                            rk._scratchBuffer = ek;
                            const ik = new AbortController;
                            let Dk = "afterPaint";
                            const fk = () => {
                                var Dk;
                                if (rk._audioUnlocked) return;
                                null === (Dk = rk._autoResume) || void 0 === Dk || Dk.call(rk);
                                const fk = kk.createBufferSource();
                                fk.buffer = ek, fk.connect(kk.destination), fk.start(0), kk.resume().catch((() => {})), fk.onended = () => {
                                  fk.disconnect(0), rk._audioUnlocked = !0, ik.abort();
                                  for (const kk of rk._howls) kk._emit("unlock")
                                }
                              },
                              Pk = () => {
                                nk(), fk()
                              },
                              mk = ek => {
                                if (nk(), "inTap" === Dk) {
                                  if ("running" === kk.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), fk()
                                } else "afterPaint" === Dk && (Dk = "queued", (0, Sk.d)(ek.timeStamp, (() => {
                                  Dk = "inTap", fk()
                                })))
                              };
                            for (const Sk of ["touchstart", "touchend"]) document.addEventListener(Sk, Pk, {
                              capture: !0,
                              signal: ik.signal
                            });
                            for (const Sk of bk.e) document.addEventListener(Sk, mk, {
                              capture: !0,
                              signal: ik.signal
                            })
                          });
                          let Uk = 0;
                          const Hk = null === (Dk = rk._autoSuspend) || void 0 === Dk ? void 0 : Dk.bind(fk.Howler);

                          function wk() {
                            lk();
                            const {
                              ctx: kk,
                              masterGain: ek
                            } = rk;
                            return kk && ek ? {
                              ctx: kk,
                              destination: ek,
                              holdAwake: kk => {
                                var ek, ik;
                                (Uk += kk ? 1 : -1, kk) ? null === (ek = rk._autoResume) || void 0 === ek || ek.call(rk): null === (ik = rk._autoSuspend) || void 0 === ik || ik.call(rk)
                              },
                              wake: () => {
                                var ek;
                                "running" !== kk.state && (null === (ek = rk._autoResume) || void 0 === ek || ek.call(rk), kk.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function lk() {
                            var kk;
                            (rk.volume(), rk.ctx && rk.autoUnlock) && (null === (kk = rk._unlockAudio) || void 0 === kk || kk.call(rk))
                          }
                          Hk && (rk._autoSuspend = () => Uk > 0 ? fk.Howler : Hk())
                        }, 4813: (kk, ek, ik) => {
                          function Dk(kk) {
                            return {
                              notAfter: kk
                            }
                          }
                          ik.d(ek, {
                            d: () => Pk,
                            e: () => mk,
                            f: () => rk,
                            h: () => Dk,
                            i: () => fk,
                            j: () => Sk,
                            l: () => bk,
                            p: () => Mk,
                            r: () => Kk
                          });
                          const fk = Dk("\\w$."),
                            Sk = Dk("\\w.,");

                          function bk(kk) {
                            return ek => Pk(ek, kk)
                          }

                          function rk(kk) {
                            return ek => !kk.test(ek.input.slice(0, ek.index))
                          }

                          function Pk(kk, ek) {
                            return kk.index > 0 && new RegExp(`[${ek}]`).test(kk.input[kk.index - 1])
                          }

                          function mk(kk, ek, ik) {
                            return function(kk) {
                              return void 0 !== kk && "function" !== typeof kk
                            }(ik) ? function(kk, ek, ik) {
                              const Dk = ek.flags.replace(/[gy]/g, ""),
                                fk = new RegExp(`[^${ik}](?:${ek.source})`, `${Dk}g`),
                                Sk = [],
                                bk = ik => {
                                  const Dk = ik.index + ik[0].length;
                                  return ("" === ik[0] ? xk(kk, ek, Dk) : Dk) - 1
                                },
                                rk = new RegExp(`(?:${ek.source})`, `${Dk}y`).exec(kk);
                              if (rk) {
                                if (Sk.push(rk), !ek.global) return Sk;
                                fk.lastIndex = bk(rk)
                              }
                              for (let Pk = fk.exec(kk); Pk; Pk = fk.exec(kk)) {
                                const ik = xk(kk, ek, Pk.index) - Pk.index;
                                if (Pk[0] = Pk[0].slice(ik), Pk.index += ik, Sk.push(Pk), !ek.global) break;
                                fk.lastIndex = bk(Pk)
                              }
                              return Sk
                            }(kk, ek, ik.notAfter) : function(kk, ek, ik) {
                              const Dk = new RegExp(ek.source, `${ek.flags.replace(/[gy]/g,"")}g`),
                                fk = [];
                              for (let Sk = Dk.exec(kk); Sk; Sk = Dk.exec(kk))
                                if (!ik || ik(Sk)) {
                                  if (fk.push(Sk), !ek.global) break;
                                  "" === Sk[0] && (Dk.lastIndex = xk(kk, ek, Dk.lastIndex))
                                } else Dk.lastIndex = xk(kk, ek, Sk.index);
                              return fk
                            }(kk, ek, ik)
                          }

                          function Mk(kk, ek, ik, Dk) {
                            let fk = "",
                              Sk = 0;
                            for (const bk of mk(kk, ek, ik)) fk += kk.slice(Sk, bk.index) + Dk(bk), Sk = bk.index + bk[0].length;
                            return fk + kk.slice(Sk)
                          }

                          function Kk(kk, ek, ik) {
                            const Dk = [];
                            let fk = 0;
                            for (const Sk of mk(kk, ek, ik)) Dk.push(kk.slice(fk, Sk.index)), fk = Sk.index + Sk[0].length;
                            return [...Dk, kk.slice(fk)]
                          }

                          function xk(kk, ek, ik) {
                            var Dk;
                            return ik + (ek.unicode && (null !== (Dk = kk.codePointAt(ik)) && void 0 !== Dk ? Dk : 0) > 65535 ? 2 : 1)
                          }
                        }, 4759: (kk, ek, ik) => {
                          ik.d(ek, {
                            B: () => nk,
                            d: () => fk,
                            g: () => Pk,
                            i: () => Sk,
                            j: () => bk,
                            n: () => rk,
                            q: () => wk,
                            r: () => Mk,
                            t: () => Kk,
                            x: () => Hk
                          });
                          var Dk = ik(1557);
                          const fk = 24e3,
                            Sk = "/docs/llms.txt",
                            bk = `${Dk.c}${Sk}`,
                            rk = "/llms.txt",
                            Pk = "/docs/llms-full.txt";

                          function mk(kk) {
                            return kk || "index"
                          }

                          function Mk(kk) {
                            return `/docs/${mk(kk)}.md`
                          }

                          function Kk(kk, ek) {
                            return `/docs/${mk(kk)}/${ek+1}.md`
                          }
                          const xk = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function nk(kk) {
                            const ek = xk.exec(kk);
                            return null === ek ? null : {
                              name: ek[1],
                              part: void 0 === ek[2] ? null : Number(ek[2])
                            }
                          }
                          const Uk = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Hk(kk) {
                            const ek = Uk.exec(kk);
                            if (null === ek) return null;
                            const [, ik = "", Dk] = ek;
                            return void 0 === Dk ? Mk(ik) : Kk(ik, Number(Dk) - 1)
                          }

                          function wk(kk) {
                            return `/docsHtml/${mk(kk)}.html`
                          }
                        }, 4786: (kk, ek, ik) => {
                          ik.d(ek, {
                            c: () => fk,
                            d: () => Dk,
                            g: () => Sk,
                            i: () => Pk,
                            m: () => bk
                          });
                          const Dk = ["sine", "triangle", "square", "sawtooth"],
                            fk = 55,
                            Sk = {
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

                          function bk(kk) {
                            return "string" !== typeof kk ? kk : Object.hasOwn(Sk, kk) ? Sk[kk] : null
                          }

                          function rk(kk, ek, ik) {
                            return Math.min(ik, Math.max(ek, kk))
                          }

                          function Pk(kk) {
                            const ek = rk(kk.durationMs, 10, 500),
                              ik = rk(kk.attackMs, 0, ek),
                              {
                                intonation: fk
                              } = kk;
                            return {
                              waveform: Dk.includes(kk.waveform) ? kk.waveform : "sine",
                              pitchHz: rk(kk.pitchHz, 20, 4e3),
                              glideSemitones: rk(kk.glideSemitones, -24, 24),
                              durationMs: ek,
                              attackMs: ik,
                              releaseMs: rk(kk.releaseMs, 0, ek - ik),
                              lowpassHz: null === kk.lowpassHz ? null : rk(kk.lowpassHz, 20, 2e4),
                              volume: rk(kk.volume, 0, 2),
                              intonation: {
                                variationSemitones: rk(fk.variationSemitones, 0, 6),
                                declineSemitones: rk(fk.declineSemitones, 0, 12),
                                questionRiseSemitones: rk(fk.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: rk(fk.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: rk(kk.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const kk in modules) Object.freeze(modules[kk]);