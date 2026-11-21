export const id = 76;
export const ids = [76, 92];
export const modules = {
    4722: (dd, Jd, kd) => {
      kd.d(Jd, {
        b: () => ed,
        d: () => Rd
      });
      var pd = kd(1044),
        Nd = kd.n(pd),
        Wd = kd(56),
        Pd = kd(1211),
        Zd = kd(4726),
        gd = kd(1904),
        Cd = kd(2357),
        Kd = kd(4729),
        od = kd(1103);
      const ld = new WeakMap;
      let Qd = 0;

      function Ld(dd) {
        let Jd = ld.get(dd);
        return void 0 === Jd && (Jd = Qd++, ld.set(dd, Jd)), Jd
      }

      function Od(dd) {
        let {
          piece: Jd
        } = dd;
        return "space" === Jd.kind ? (0, od.jsx)(od.Fragment, {
          children: Jd.text
        }) : (0, od.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${Jd.delayMs}ms`
          },
          children: (0, od.jsx)(Zd.b, {
            text: "icon" === Jd.kind ? `[[${Jd.icon}]]` : Jd.text
          })
        })
      }

      function ed(dd) {
        let {
          display: Jd
        } = dd;
        const {
          selectedLanguage: kd
        } = (0, Pd.B)(), pd = (0, Wd.useMemo)((() => (0, Kd.c)((0, Kd.d)(Jd).plan.pieces)), [Jd, kd.code]);
        return (0, od.jsxs)("div", {
          className: Nd()("Dialogue", {
            DialogueAnimateIn: !1 !== Jd.animateIn
          }),
          children: [Jd.speakerName && (0, od.jsx)(gd.c, {
            text: Jd.speakerName,
            className: "DialogueSpeaker"
          }), (0, od.jsx)("p", {
            className: "DialogueLine",
            children: pd.map(((dd, Jd) => 1 === dd.length && "space" === dd[0].kind ? dd[0].text : (0, od.jsx)("span", {
              className: "DialogueGlue",
              children: dd.map(((dd, Jd) => (0, od.jsx)(Od, {
                piece: dd
              }, Jd)))
            }, Jd)))
          })]
        })
      }
      const Rd = (0, Wd.memo)((function() {
        const dd = (0, Cd.j)("dialogue");
        return (0, od.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: dd && (0, od.jsx)(ed, {
            display: dd
          }, Ld(dd))
        })
      }))
    },
    4578: (dd, Jd, kd) => {
        kd.r(Jd), kd.d(Jd, {
          default: () => JP
        });
        var pd = kd(56),
          Nd = kd(1044),
          Wd = kd.n(Nd),
          Pd = kd(1551),
          Zd = kd(1557),
          gd = kd(22),
          Cd = kd(72),
          Kd = kd(4583),
          od = kd(4599),
          ld = kd(4603),
          Qd = kd(4195),
          Ld = kd(1103);
        const Od = "/textures/docs/icons";

        function ed(dd) {
          let {
            name: Jd,
            isTinted: kd,
            className: pd,
            style: Nd
          } = dd;
          const Pd = `${Od}/${Jd}.png`;
          return kd ? (0, Ld.jsxs)("span", {
            className: Wd()("DocsPixelIcon", "Tinted", pd),
            "aria-hidden": "true",
            style: Nd,
            children: [(0, Ld.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Pd}")`,
                WebkitMaskImage: `url("${Pd}")`
              }
            }), (0, Ld.jsx)("img", {
              src: Pd,
              alt: ""
            })]
          }) : (0, Ld.jsx)("img", {
            className: Wd()("DocsPixelIcon", pd),
            src: Pd,
            alt: "",
            "aria-hidden": "true",
            style: Nd
          })
        }
        const Rd = 1500;

        function Id() {
          const [dd, Jd] = (0, pd.useState)(null);
          (0, pd.useEffect)((() => {
            if (null === dd) return;
            const kd = setTimeout((() => {
              Jd(null)
            }), Rd);
            return () => {
              clearTimeout(kd)
            }
          }), [dd]);
          return [dd, dd => {
            (0, Qd.d)(dd).then((() => {
              Jd({
                text: dd,
                failed: !1
              })
            }), (kd => {
              console.error("Could not copy to the clipboard", kd), Jd({
                text: dd,
                failed: !0
              })
            }))
          }]
        }

        function Gd(dd) {
          let {
            text: Jd,
            label: kd,
            className: pd
          } = dd;
          const [Nd, Pd] = Id(), Zd = !1 === (null === Nd || void 0 === Nd ? void 0 : Nd.failed);
          return (0, Ld.jsxs)("button", {
            type: "button",
            className: Wd()("DocsCopyButton", pd, {
              Copied: Zd
            }),
            title: `Copy ${Jd.length>40?"to clipboard":Jd}`,
            "aria-label": kd ? void 0 : `Copy ${Jd}`,
            onClick: dd => {
              dd.stopPropagation(), Pd(Jd)
            },
            children: [(0, Ld.jsx)(ed, {
              name: Zd ? "check" : "copy"
            }), kd && (0, Ld.jsx)("span", {
              children: Zd ? "Copied" : null !== Nd && void 0 !== Nd && Nd.failed ? "Copy failed" : kd
            })]
          })
        }
        Kd.d.registerLanguage("javascript", od.b), Kd.d.registerLanguage("typescript", ld.d);
        const vd = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          xd = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          qd = 24;

        function Bd(dd) {
          let {
            code: Jd,
            lang: kd,
            compact: Nd = !1
          } = dd;
          const Pd = (0, pd.useMemo)((() => function(dd, Jd) {
              const kd = vd[Jd];
              return kd ? Kd.d.highlight(dd, {
                language: kd
              }).value : dd.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(Jd, kd)), [Jd, kd]),
            Zd = Jd.split("\n").length,
            gd = !Nd && Zd > qd + 6,
            [Cd, od] = (0, pd.useState)(!1),
            ld = vd[kd];
          return (0, Ld.jsxs)("div", {
            className: Wd()("DocsCodeBlock", {
              Compact: Nd,
              Collapsed: gd && !Cd
            }),
            children: [!Nd && (0, Ld.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, Ld.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: ld ? xd[ld] : "Text"
              }), (0, Ld.jsx)(Gd, {
                text: Jd,
                label: "Copy"
              })]
            }), (0, Ld.jsx)("pre", {
              children: (0, Ld.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Pd
                }
              })
            }), gd && (0, Ld.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Cd,
              onClick: () => {
                od(!Cd)
              },
              children: [(0, Ld.jsx)(ed, {
                name: Cd ? "chevron-up" : "chevron-down"
              }), Cd ? "Show less" : `Show all ${Zd} lines`]
            })]
          })
        }
        var sd = kd(4612);
        var ad = kd(4620);
        const Md = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Fd(dd) {
          const Jd = new Map;
          let kd, pd = [],
            Nd = !1;
          const Wd = () => {
            kd && Jd.set(kd.name, kd.lines.join("\n").trimEnd())
          };
          for (const Pd of dd.split("\n")) {
            const dd = Pd.match(Md);
            Nd || Pd.startsWith("/*") ? (Nd || (Wd(), kd = void 0), pd.push(Pd), Nd = !Pd.includes("*/")) : dd ? (Wd(), kd = {
              name: dd[1],
              lines: [...pd, Pd]
            }, pd = []) : kd && (Pd.startsWith(" ") || Pd.startsWith("\t") || /^[}\])|]/.test(Pd)) ? kd.lines.push(Pd) : kd && "" !== Pd.trim() && (Wd(), kd = void 0)
          }
          return Wd(), Jd
        }

        function Yd(dd) {
          return "methods" === dd || "callbacks" === dd || "settings" === dd
        }
        const md = {
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
              setterSnippet: (dd, Jd) => `api.setClientOption(playerId, "${dd}", ${Jd})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (dd, Jd) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${dd}", ${Jd})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (dd, Jd) => `api.setMobSetting(mobId, "${dd}", ${Jd})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (dd, Jd) => `api.setVehicleSetting(vehicleId, "${dd}", ${Jd})`
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
          bd = {
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

        function Sd(dd) {
          return dd.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function jd(dd) {
          let Jd = !1;
          return dd.split("\n").map((dd => (dd.startsWith("```") && (Jd = !Jd), !Jd && /^#{3,} /.test(dd) ? dd.slice(1) : dd))).join("\n")
        }

        function Xd(dd) {
          return "readme" === dd ? "getting-started" : Sd(dd)
        }
        const fd = "## Glossary of Referenced Types";
        const nd = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...ad.e.flatMap((dd => {
            const Jd = {
              id: dd.id,
              slug: Xd(dd.id),
              title: dd.title,
              markdown: dd.content,
              ...md[dd.id]
            };
            if ("readme" === dd.id) return function(dd) {
              const Jd = dd.markdown.indexOf(fd),
                kd = dd.markdown.indexOf("\n```", Jd),
                pd = dd.markdown.indexOf("\n```", kd + 1);
              if (-1 === Jd || -1 === kd || -1 === pd) throw new Error(`Getting started has no "${fd}" section with a code block`);
              const Nd = dd.markdown.slice(Jd + 31, kd).trim(),
                Wd = [...Fd(dd.markdown.slice(dd.markdown.indexOf("\n", kd + 1) + 1, pd))].map((dd => {
                  let [Jd, kd] = dd;
                  return `## ${Jd}\n\n\`\`\`ts\n${kd}\n\`\`\`\n`
                })),
                Pd = dd.markdown.slice(dd.markdown.indexOf("\n", pd + 1) + 1);
              return [{
                ...dd,
                markdown: `${dd.markdown.slice(0,Jd)}${Pd}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Nd}\n\n${Wd.join("\n")}`
              }]
            }(Jd);
            if ("howTo" === dd.id) {
              const {
                parent: dd,
                guides: kd
              } = function(dd) {
                const [Jd, ...kd] = dd.markdown.split(/^(?=## )/m), pd = [Jd], Nd = [];
                for (const Pd of kd) {
                  var Wd;
                  const Jd = Pd.indexOf("\n"),
                    kd = Pd.slice(3, Jd).trim(),
                    Zd = Pd.slice(Jd + 1);
                  if (!Zd.includes("```")) {
                    pd.push(Pd);
                    continue
                  }
                  const gd = null !== (Wd = bd[kd]) && void 0 !== Wd ? Wd : {
                    icon: "lightbulb",
                    summary: `How to use ${kd.toLowerCase()} in World Code.`
                  };
                  Nd.push({
                    id: `${dd.id}${kd.split(/[^A-Za-z0-9]+/).map((dd=>dd.charAt(0).toUpperCase()+dd.slice(1))).join("")}`,
                    slug: `${dd.slug}-${Sd(kd)}`,
                    title: kd,
                    layout: "article",
                    sourceAnchor: (0, sd.r)(kd),
                    markdown: `# ${kd}\n\n${jd(Zd)}`,
                    ...gd
                  })
                }
                return {
                  parent: {
                    ...dd,
                    markdown: pd.join(""),
                    childPageIds: Nd.map((dd => dd.id))
                  },
                  guides: Nd
                }
              }(Jd);
              return [dd, ...kd]
            }
            return [Jd]
          }))],
          Ud = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...nd.filter((dd => void 0 !== dd.sourceAnchor)).map((dd => dd.id))]
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

        function yd(dd) {
          return nd.find((Jd => Jd.id === dd))
        }
        const Dd = new Map;

        function Td(dd) {
          let Jd = Dd.get(dd.id);
          return Jd || (Jd = (0, sd.v)(dd.markdown, "changelog" === dd.layout ? 3 : 2), Dd.set(dd.id, Jd)), Jd
        }

        function Ed(dd, Jd) {
          return Td(dd).sections.some((dd => dd.heading.anchor === Jd || dd.blocks.some((dd => "heading" === dd.kind && dd.anchor === Jd))))
        }

        function cd(dd) {
          const [Jd, ...kd] = dd.replace(/^#/, "").split("-"), pd = nd.find((dd => dd.id === Jd));
          if (!pd) return null;
          const Nd = kd.length > 0 ? (0, sd.r)(kd.join("-")) : "";
          for (const Pd of null !== (Wd = pd.childPageIds) && void 0 !== Wd ? Wd : []) {
            var Wd;
            const dd = yd(Pd);
            if (dd.sourceAnchor === Nd) return {
              page: dd,
              anchor: ""
            };
            if (Ed(dd, Nd)) return {
              page: dd,
              anchor: Nd
            }
          }
          return {
            page: pd,
            anchor: Nd
          }
        }
        const hd = {
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

        function rd(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const pd = Jd.slug ? `${dd}/${Jd.slug}` : dd;
          return kd ? `${pd}#${kd}` : pd
        }
        var ud = kd(4636);
        const td = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Vd = new Set(["GameApi", "Console", "_TypeOf"]),
          zd = 4;

        function Hd(dd) {
          let Jd = dd.length;
          for (; Jd > 0 && "" === dd[Jd - 1].trim();) Jd--;
          return dd.slice(0, Jd)
        }

        function wd(dd) {
          var Jd;
          const kd = Hd(dd);
          if (null === (Jd = kd.at(-1)) || void 0 === Jd || !Jd.trimEnd().endsWith("*/")) return {
            lines: kd,
            doc: ""
          };
          const pd = kd.findLastIndex((dd => dd.startsWith("/**")));
          return -1 === pd ? {
            lines: kd,
            doc: ""
          } : {
            lines: Hd(kd.slice(0, pd)),
            doc: kd.slice(pd).join("\n")
          }
        }

        function Ad(dd) {
          var Jd;
          const kd = dd.split("\n"),
            pd = kd.flatMap(((dd, Jd) => td.test(dd) ? [Jd] : []));
          let Nd = wd(kd.slice(0, null !== (Jd = pd[0]) && void 0 !== Jd ? Jd : kd.length)).doc;
          return pd.map(((dd, Jd) => {
            var Wd;
            const Pd = wd(kd.slice(dd, null !== (Wd = pd[Jd + 1]) && void 0 !== Wd ? Wd : kd.length)),
              Zd = {
                name: kd[dd].match(td)[1],
                doc: Nd,
                lines: Pd.lines
              };
            return Nd = Pd.doc, Zd
          }))
        }

        function dJ(dd) {
          var Jd;
          const kd = dd.match(/^readonly \[([\s\S]*)\]$/);
          return kd ? null !== (Jd = kd[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Jd ? Jd : [] : null
        }

        function JJ(dd) {
          if (!dd.startsWith("{") || !dd.endsWith("}")) return null;
          const Jd = {
              keys: [],
              values: []
            },
            kd = dd => {
              const kd = dd.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              kd && (Jd.keys.push(kd[1].startsWith('"') ? kd[1] : `"${kd[1]}"`), Jd.values.push(kd[2].trim()))
            };
          let pd = 0,
            Nd = "";
          for (const Wd of dd.slice(1, -1)) "{[(".includes(Wd) ? pd++ : "}])".includes(Wd) && pd--, ";" === Wd && 0 === pd ? (kd(Nd), Nd = "") : Nd += Wd;
          return kd(Nd), Jd
        }

        function kJ(dd) {
          return dd.length > zd ? `\n\t| ${dd.join("\n\t| ")}` : dd.join(" | ")
        }

        function pJ(dd, Jd) {
          const kd = function(dd, Jd) {
            return dd.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((dd, kd) => {
              var pd;
              const Nd = null === (pd = Jd.get(kd)) || void 0 === pd ? void 0 : pd.object;
              return Nd ? kJ(Nd.values) : dd
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((dd, kd) => {
              var pd, Nd;
              const Wd = null === (pd = Jd.get(kd)) || void 0 === pd || null === (Nd = pd.object) || void 0 === Nd ? void 0 : Nd.values.map(dJ);
              return null !== Wd && void 0 !== Wd && Wd.every((dd => null !== dd)) ? kJ([...new Set(Wd.flat())]) : dd
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((dd, kd) => {
              var pd;
              const Nd = null === (pd = Jd.get(kd)) || void 0 === pd ? void 0 : pd.members;
              return Nd ? kJ(Nd) : dd
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((dd, kd) => {
              var pd;
              const Nd = null === (pd = Jd.get(kd)) || void 0 === pd ? void 0 : pd.object;
              return Nd ? kJ(Nd.keys) : dd
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((dd, kd) => {
              var pd, Nd;
              return null !== (pd = null === (Nd = Jd.get(kd)) || void 0 === Nd ? void 0 : Nd.text) && void 0 !== pd ? pd : dd
            }))
          }(dd.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), Jd);
          return [dd.doc, kd].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function NJ(dd) {
          const Jd = Ad(dd),
            kd = function(dd) {
              const Jd = new Map,
                kd = dd.find((dd => "_TypeOf" === dd.name));
              let pd = null;
              const Nd = () => {
                if (pd) {
                  const dd = pd.lines.join("\n");
                  Jd.set(pd.name, {
                    text: dd,
                    members: dJ(dd),
                    object: JJ(dd)
                  })
                }
              };
              for (const Wd of kd.lines.slice(1, -1)) {
                const dd = Wd.match(/^\t([\w$]+): (.+)$/);
                dd ? (Nd(), pd = {
                  name: dd[1],
                  lines: [dd[2]]
                }) : pd && pd.lines.push(Wd.replace(/^\t/, ""))
              }
              return Nd(), Jd
            }(Jd),
            pd = new Map;
          for (const Nd of Jd) Vd.has(Nd.name) || pd.has(Nd.name) || pd.set(Nd.name, pJ(Nd, kd));
          return pd
        }
        let WJ, PJ, ZJ;

        function gJ() {
          return PJ ??= function(dd) {
            const Jd = Ad(dd).find((dd => "GameApi" === dd.name)),
              kd = new Map,
              pd = Jd.lines;
            for (let Wd = 0; Wd < pd.length; Wd++) {
              var Nd;
              if (!pd[Wd].trimStart().startsWith("/**")) continue;
              const dd = Wd;
              for (; Wd < pd.length && !pd[Wd].includes("*/");) Wd++;
              const Jd = null === (Nd = pd[Wd + 1]) || void 0 === Nd ? void 0 : Nd.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!Jd) continue;
              let Pd = null;
              const Zd = [];
              let gd = "description",
                Cd = !1;
              for (const kd of pd.slice(dd, Wd + 1).join("\n").split("\n").map((dd => dd.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const dd = kd.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                dd ? (Pd = dd[1].trim(), gd = "deprecation") : kd.startsWith("@") ? (gd = "otherTag", Cd = !0) : "" === kd.trim() ? Cd || (gd = "description", Zd.push(kd)) : "deprecation" !== gd || /^[A-Z]/.test(kd.trim()) ? "otherTag" !== gd && (gd = "description", Zd.push(kd)) : Pd = `${Pd} ${kd.trim()}`.trim()
              }
              kd.set(Jd[1], {
                deprecation: Pd,
                description: Zd.join("\n").trim()
              })
            }
            return kd
          }(ud.default), PJ
        }

        function CJ() {
          if (!ZJ) {
            ZJ = new Map;
            for (const dd of nd) {
              const Jd = (0, sd.t)(Td(dd)).flatMap((dd => dd.blocks));
              for (const dd of (0, sd.k)(Jd))
                if ("ts" === dd.lang || "typescript" === dd.lang)
                  for (const [Jd, kd] of Fd(dd.code)) ZJ.set(Jd, kd)
            }
            for (const [dd, Jd] of(WJ ??= NJ(ud.default), WJ)) ZJ.has(dd) || ZJ.set(dd, Jd)
          }
          return ZJ
        }
        const KJ = {
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
        let oJ;

        function lJ() {
          if (!oJ) {
            oJ = new Map;
            for (const dd of nd)
              if (Yd(dd.layout))
                for (const Jd of Td(dd).sections) oJ.has(Jd.heading.text) || oJ.set(Jd.heading.text, {
                  pageId: dd.id,
                  anchor: Jd.heading.anchor
                })
          }
          return oJ
        }

        function QJ(dd) {
          const Jd = dd.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return Jd ? lJ().get(Jd[1]) : void 0
        }
        const LJ = (0, pd.createContext)("/docs"),
          OJ = (0, pd.createContext)(null),
          eJ = (0, pd.createContext)(!1),
          RJ = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function IJ(dd) {
          const Jd = dd.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return Jd ? Jd[1] : null
        }

        function GJ(dd) {
          let {
            colour: Jd
          } = dd;
          return (0, Ld.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: Jd
            },
            "aria-hidden": "true"
          })
        }

        function vJ(dd) {
          const Jd = [];
          let kd = 0;
          for (const pd of dd.matchAll(RJ)) Jd.push(dd.slice(kd, pd.index), (0, Ld.jsx)(GJ, {
            colour: pd[0]
          }), pd[0]), kd = pd.index + pd[0].length;
          return Jd.push(dd.slice(kd)), Jd
        }

        function xJ(dd) {
          let {
            href: Jd,
            children: kd
          } = dd;
          const Nd = (0, pd.useContext)(LJ);
          if (Jd.startsWith("#")) {
            const dd = cd(Jd);
            if (dd) return (0, Ld.jsx)(Pd.d, {
              to: rd(Nd, dd.page, dd.anchor),
              children: (0, Ld.jsx)(eJ.Provider, {
                value: !0,
                children: kd
              })
            })
          }
          return (0, Ld.jsx)("a", {
            href: Jd,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, Ld.jsx)(eJ.Provider, {
              value: !0,
              children: kd
            })
          })
        }

        function qJ(dd) {
          let {
            code: Jd
          } = dd;
          const kd = (0, pd.useContext)(LJ);
          if ((0, pd.useContext)(eJ)) return (0, Ld.jsx)("code", {
            className: "DocsInlineCode",
            children: Jd
          });
          if (CJ().has(Jd)) return (0, Ld.jsx)(aJ, {
            type: Jd
          });
          const Nd = QJ(Jd);
          if (Nd) return (0, Ld.jsx)(Pd.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: rd(kd, yd(Nd.pageId), Nd.anchor),
            children: Jd
          });
          const Wd = IJ(Jd);
          return (0, Ld.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Wd && (0, Ld.jsx)(GJ, {
              colour: Wd
            }), Jd]
          })
        }

        function BJ(dd) {
          let {
            text: Jd
          } = dd;
          const kd = [];
          let Nd = 0;
          for (const pd of Jd.matchAll(sd.f)) {
            pd.index > Nd && kd.push(...vJ(Jd.slice(Nd, pd.index)));
            const [, dd, Wd, Pd, Zd, gd] = pd;
            dd ? kd.push((0, Ld.jsx)(qJ, {
              code: (0, sd.m)(dd, Wd)
            })) : Pd ? kd.push((0, Ld.jsx)("strong", {
              children: (0, Ld.jsx)(BJ, {
                text: Pd
              })
            })) : kd.push((0, Ld.jsx)(xJ, {
              href: gd,
              children: (0, Ld.jsx)(BJ, {
                text: Zd
              })
            })), Nd = pd.index + pd[0].length
          }
          return Nd < Jd.length && kd.push(...vJ(Jd.slice(Nd))), (0, Ld.jsx)(Ld.Fragment, {
            children: kd.map(((dd, Jd) => (0, Ld.jsx)(pd.Fragment, {
              children: dd
            }, Jd)))
          })
        }
        const sJ = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          iJ = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function aJ(dd) {
          let {
            type: Jd
          } = dd;
          const kd = CJ(),
            Nd = [];
          for (const pd of Jd.trim().matchAll(sJ)) {
            const [dd, Jd, Wd, Pd, Zd] = pd;
            Jd ? Nd.push((0, Ld.jsx)("span", {
              className: "DocsTypeString",
              children: dd
            })) : Wd && kd.has(Wd) ? Nd.push((0, Ld.jsx)(bJ, {
              name: Wd,
              definition: kd.get(Wd)
            })) : Wd ? Nd.push((0, Ld.jsx)("span", {
              className: iJ.has(Wd) ? "DocsTypeKeyword" : "DocsTypeName",
              children: dd
            })) : Pd ? Nd.push((0, Ld.jsx)("span", {
              className: "DocsTypeNumber",
              children: dd
            })) : Zd ? Nd.push(" ") : Nd.push((0, Ld.jsx)("span", {
              className: "DocsTypePunctuation",
              children: dd
            }))
          }
          return (0, Ld.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Nd.map(((dd, Jd) => (0, Ld.jsx)(pd.Fragment, {
              children: dd
            }, Jd)))
          })
        }
        const MJ = 480,
          FJ = 6,
          YJ = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let mJ = 0;

        function bJ(dd) {
          let {
            name: Jd,
            definition: kd
          } = dd;
          const Nd = (0, pd.useContext)(LJ),
            Wd = KJ[Jd],
            Zd = (0, pd.useRef)(null),
            gd = (0, pd.useRef)(null),
            Kd = (0, pd.useRef)(null),
            [od, ld] = (0, pd.useState)(!1),
            [Qd, Od] = (0, pd.useState)(null),
            Rd = (0, pd.useRef)(),
            Id = (0, pd.useContext)(OJ),
            [Gd] = (0, pd.useState)((() => "DocsTypePopover-" + mJ++)),
            vd = () => {
              clearTimeout(Rd.current), ld(!0)
            },
            xd = () => {
              clearTimeout(Rd.current), Rd.current = setTimeout((() => {
                ld(!1)
              }), 120)
            };
          return (0, pd.useEffect)((() => {
            if (!od) return;
            const dd = dd => {
              if ("Escape" === dd.key) {
                var Jd, kd;
                if (null !== (Jd = gd.current) && void 0 !== Jd && Jd.contains(document.activeElement)) null === (kd = Zd.current) || void 0 === kd || kd.focus();
                ld(!1)
              }
            };
            return document.addEventListener("keydown", dd), () => {
              document.removeEventListener("keydown", dd)
            }
          }), [od]), (0, pd.useEffect)((() => () => {
            clearTimeout(Rd.current)
          }), []), (0, pd.useLayoutEffect)((() => {
            if (!od || !Zd.current || !gd.current) return void Od(null);
            const dd = Zd.current.getBoundingClientRect(),
              Jd = gd.current.offsetHeight,
              kd = Math.min(MJ, window.innerWidth - 32),
              pd = Math.min(Math.max(16, dd.left), window.innerWidth - kd - 16),
              Nd = dd.bottom + FJ + Jd < window.innerHeight;
            Od({
              left: pd,
              top: Nd ? dd.bottom + FJ : Math.max(16, dd.top - FJ - Jd)
            })
          }), [od]), (0, Ld.jsxs)(Ld.Fragment, {
            children: [(0, Ld.jsx)("button", {
              type: "button",
              ref: Zd,
              className: "DocsTypeLink",
              "aria-expanded": od,
              "aria-describedby": od ? Gd : void 0,
              onMouseEnter: vd,
              onMouseLeave: xd,
              onFocus: vd,
              onBlur: xd,
              onKeyDown: dd => {
                "Tab" === dd.key && !dd.shiftKey && Kd.current && (dd.preventDefault(), Kd.current.focus())
              },
              onClick: vd,
              children: Jd
            }), od && (0, Cd.createPortal)((0, Ld.jsxs)("span", {
              ref: gd,
              id: Gd,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Qd ? {
                left: Qd.left,
                top: Qd.top,
                maxWidth: MJ
              } : {
                visibility: "hidden"
              },
              onMouseEnter: vd,
              onMouseLeave: xd,
              onFocus: vd,
              onBlur: xd,
              children: [(0, Ld.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, Ld.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: Jd
                }), Wd && (0, Ld.jsxs)(Pd.d, {
                  ref: Kd,
                  className: "DocsTypePopoverLink",
                  to: rd(Nd, yd(Wd)),
                  onClick: () => {
                    ld(!1)
                  },
                  onKeyDown: dd => {
                    if ("Tab" === dd.key) {
                      var Jd;
                      if (dd.preventDefault(), dd.shiftKey || !Zd.current || ! function(dd, Jd) {
                          const kd = [...document.querySelectorAll(YJ)],
                            pd = kd.slice(kd.indexOf(dd) + 1).find((dd => dd.getClientRects().length > 0 && !(null !== Jd && void 0 !== Jd && Jd.contains(dd))));
                          return null === pd || void 0 === pd || pd.focus(), void 0 !== pd
                        }(Zd.current, gd.current)) null === (Jd = Zd.current) || void 0 === Jd || Jd.focus();
                      dd.shiftKey || ld(!1)
                    }
                  },
                  children: [yd(Wd).title, (0, Ld.jsx)(ed, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, Ld.jsx)(Bd, {
                lang: "ts",
                code: kd,
                compact: !0
              })]
            }), null !== Id && void 0 !== Id ? Id : document.body)]
          })
        }
        var SJ = kd(193),
          jJ = kd(4642),
          XJ = kd(4649),
          fJ = kd(4657);
        const nJ = {
          progressBar: {
            cp: 30,
            hp: .075,
            rp: 5,
            tp: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Vp: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Hp: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            wp: !0,
            scale: 3,
            rotation: 15,
            Ap: !1
          },
          gravityBar: {
            cp: 30,
            JN: .25,
            kN: 3,
            pN: .8,
            gravity: 1,
            NN: 1.5,
            WN: 8,
            PN: 4,
            tp: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            gN: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            KN: 5,
            oN: 1200,
            lN: .15,
            QN: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var UJ = kd(300),
          yJ = kd(1982);

        function DJ(dd) {
          return dd.startsWith("fa-")
        }
        const TJ = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          EJ = {
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

        function cJ(dd) {
          return "string" === typeof dd ? "text" : "entityName" in dd || "translationKey" in dd ? "other" : (0, UJ.sb)(dd) ? "progressBar" : (0, UJ.qb)(dd) ? "keyBinding" : "icon" in dd ? "icon" : "str" in dd && "string" === typeof dd.str ? "text" : "other"
        }
        const hJ = [{
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
          rJ = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...hJ],
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
                options: yJ.i
              },
              isRequired: !0
            }, ...hJ],
            other: []
          };

        function uJ(dd) {
          return "string" === typeof dd ? {
            str: dd
          } : dd
        }

        function tJ(dd, Jd) {
          let kd = uJ(dd);
          for (const pd of Jd) kd = kd && "object" === typeof kd ? kd[pd] : void 0;
          return kd
        }

        function VJ(dd, Jd, kd) {
          const pd = (dd, Nd) => {
            var Wd;
            const Pd = Jd[Nd],
              Zd = {
                ...dd
              };
            if (Nd === Jd.length - 1) return void 0 === kd ? delete Zd[Pd] : Zd[Pd] = kd, Zd;
            const gd = pd(null !== (Wd = dd[Pd]) && void 0 !== Wd ? Wd : {}, Nd + 1);
            return 0 === Object.keys(gd).length ? delete Zd[Pd] : Zd[Pd] = gd, Zd
          };
          return function(dd) {
            const Jd = Object.keys(dd);
            return "string" === typeof dd.str && 1 === Jd.length ? dd.str : dd
          }(pd(uJ(dd), 0))
        }

        function zJ(dd, Jd) {
          const kd = cJ(dd),
            pd = rJ[kd].find((dd => dd.path.join(".") === Jd.join("."))),
            Nd = null !== pd && void 0 !== pd && pd.isRequired && "other" !== kd ? tJ(EJ[kd], Jd) : void 0;
          return VJ(dd, Jd, Nd)
        }

        function HJ(dd) {
          switch (cJ(dd)) {
            case "text":
              return String(tJ(dd, ["str"]));
            case "icon":
              return String(tJ(dd, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(tJ(dd,["progress"])))}%`;
            case "keyBinding":
              return String(tJ(dd, ["action"]));
            case "other":
              return JSON.stringify(dd)
          }
        }
        const wJ = /^[A-Za-z_$][\w$]*$/;

        function AJ(dd) {
          if (Array.isArray(dd)) return `[${dd.map(AJ).join(", ")}]`;
          if (dd && "object" === typeof dd) {
            const Jd = Object.entries(dd).map((dd => {
              let [Jd, kd] = dd;
              return `${wJ.test(Jd)?Jd:JSON.stringify(Jd)}: ${AJ(kd)}`
            }));
            return 0 === Jd.length ? "{}" : `{ ${Jd.join(", ")} }`
          }
          return JSON.stringify(dd)
        }

        function dk(dd) {
          const Jd = dd.map(AJ),
            kd = `[${Jd.join(", ")}]`;
          return kd.length <= 60 ? kd : `[\n${Jd.map((dd=>`    ${dd},`)).join("\n")}\n]`
        }
        const Jk = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function kk(dd) {
          let Jd = "";
          for (let Nd = 0; Nd < dd.length; Nd++) {
            const Wd = dd[Nd];
            if ("\\" === Wd) {
              var kd;
              const pd = null !== (kd = dd[Nd + 1]) && void 0 !== kd ? kd : "";
              Jd += "'" === pd ? "'" : Wd + pd, Nd++
            } else if ('"' === Wd) Jd += '\\"';
            else {
              var pd;
              Jd += null !== (pd = Jk[Wd]) && void 0 !== pd ? pd : Wd
            }
          }
          return `"${Jd}"`
        }

        function pk(dd) {
          if ("string" === typeof dd) return !0;
          if (!dd || "object" !== typeof dd || Array.isArray(dd)) return !1;
          const Jd = dd;
          return "ProgressBar" === Jd.type ? "number" === typeof Jd.progress : "StyledKeyBinding" === Jd.type ? yJ.i.includes(Jd.action) : "string" === typeof Jd.icon || "string" === typeof Jd.str || "string" === typeof Jd.entityName || "string" === typeof Jd.translationKey
        }

        function Nk(dd) {
          let Jd;
          try {
            Jd = function(dd) {
              let Jd = "",
                kd = "",
                pd = 0;
              const Nd = () => {
                Jd += kd.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), kd = ""
              };
              for (; pd < dd.length;) {
                const Wd = dd.slice(pd).search(/["'`]|\/\//);
                if (-1 === Wd) {
                  kd += dd.slice(pd);
                  break
                }
                kd += dd.slice(pd, pd + Wd);
                const Pd = pd + Wd,
                  Zd = dd[Pd];
                if ("/" === Zd) {
                  const Jd = dd.indexOf("\n", Pd);
                  pd = -1 === Jd ? dd.length : Jd;
                  continue
                }
                if (Nd(), "`" === Zd) throw new Error("Use quotes rather than template strings.");
                let gd = Pd + 1;
                for (; gd < dd.length && dd[gd] !== Zd;) gd += "\\" === dd[gd] ? 2 : 1;
                if (gd >= dd.length) throw new Error("A string is missing its closing quote.");
                const Cd = dd.slice(Pd + 1, gd);
                Jd += kk(Cd), pd = gd + 1
              }
              return Nd(), JSON.parse(Jd)
            }(dd.trim())
          } catch (pd) {
            return {
              parts: null,
              error: pd instanceof SyntaxError ? "This isn't a valid array yet." : pd.message
            }
          }
          if (!Array.isArray(Jd)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const kd = Jd.findIndex((dd => !pk(dd)));
          return -1 !== kd ? {
            parts: null,
            error: `Part ${kd+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: Jd,
            error: null
          }
        }
        const Wk = 1 / SJ.g.clientTicksPerSecond,
          Pk = 700,
          Zk = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          gk = {
            progressBar: nJ.progressBar.Vp,
            timedClick: nJ.timedClick.icon,
            gravityBar: nJ.gravityBar.icon,
            precisionBar: nJ.precisionBar.icon,
            rhythmClick: nJ.rhythmClick.icon
          };

        function Ck(dd) {
          let {
            type: Jd
          } = dd;
          const [kd, Nd] = (0, pd.useState)("ready"), [Pd, Zd] = (0, pd.useState)(1), [gd, Cd] = (0, pd.useState)(!0), Kd = (0, pd.useRef)(null), od = (0, pd.useRef)(null), ld = (0, pd.useRef)(null), Qd = (0, pd.useRef)(new Set), Od = (0, pd.useRef)(!1), Rd = gk[Jd], Id = (0, pd.useMemo)((() => ({
            getState: () => {
              var dd, Jd;
              return null !== (dd = null === (Jd = ld.current) || void 0 === Jd ? void 0 : Jd.getState()) && void 0 !== dd ? dd : Zk
            },
            onFrame: dd => (Qd.current.add(dd), () => {
              Qd.current.delete(dd)
            })
          })), []);
          (0, pd.useEffect)((() => {
            const dd = Kd.current,
              Jd = od.current;
            if (!dd || !Jd) return;
            const kd = new ResizeObserver((() => {
              Zd(dd.clientWidth / Math.max(1, Jd.offsetWidth))
            }));
            return kd.observe(dd), () => {
              kd.disconnect()
            }
          }), []), (0, pd.useEffect)((() => {
            var dd;
            if ("playing" !== kd) return;
            let pd = !1;
            const Wd = new fJ.h[Jd](nJ[Jd], (dd => {
              pd = !0, Cd(!1), Nd(dd ? "succeeded" : "failed")
            }), (() => {}));
            ld.current = Wd;
            let Pd = 0,
              Zd = performance.now(),
              gd = requestAnimationFrame((function dd(Jd) {
                for (Pd += Math.min(.25, (Jd - Zd) / 1e3), Zd = Jd; Pd >= Wk && !pd;) Pd -= Wk, Wd.handleTick(Wk);
                for (const kd of Qd.current) kd();
                pd || (gd = requestAnimationFrame(dd))
              }));
            return null === (dd = Kd.current) || void 0 === dd || dd.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(gd), Wd.tearDown(), ld.current = null, Od.current = !1
            }
          }), [kd, Jd]), (0, pd.useEffect)((() => {
            if (gd) return;
            const dd = setTimeout((() => {
              Cd(!0)
            }), Pk);
            return () => {
              clearTimeout(dd)
            }
          }), [gd]);
          const Gd = dd => {
            var Jd;
            "playing" === kd && Od.current !== dd && (Od.current = dd, null === (Jd = ld.current) || void 0 === Jd || Jd.handleMouseInput(dd))
          };
          return (0, Ld.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, Ld.jsxs)("div", {
              ref: Kd,
              className: Wd()("DocsQteStage", {
                Playing: "playing" === kd
              }),
              tabIndex: "playing" === kd ? 0 : -1,
              role: "playing" === kd ? "button" : void 0,
              "aria-label": "playing" === kd ? `${Jd} quick time event: click or press Space` : void 0,
              onPointerDown: dd => {
                0 === dd.button && Gd(!0)
              },
              onPointerUp: () => {
                Gd(!1)
              },
              onPointerLeave: () => {
                Gd(!1)
              },
              onPointerCancel: () => {
                Gd(!1)
              },
              onKeyDown: dd => {
                "playing" !== kd || " " !== dd.key && "Enter" !== dd.key || (dd.preventDefault(), Gd(!0))
              },
              onKeyUp: dd => {
                "playing" !== kd || " " !== dd.key && "Enter" !== dd.key || Gd(!1)
              },
              children: [(0, Ld.jsx)("div", {
                ref: od,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Pd})`
                },
                children: "playing" === kd && (0, Ld.jsx)(XJ.e.Provider, {
                  value: Id,
                  children: (0, Ld.jsx)(jJ.d, {
                    qte: {
                      type: Jd,
                      parameters: nJ[Jd]
                    }
                  })
                })
              }), "playing" !== kd && (0, Ld.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== kd && (0, Ld.jsxs)("div", {
                  className: Wd()("DocsQteResult", "succeeded" === kd ? "Succeeded" : "Failed"),
                  children: [(0, Ld.jsx)(ed, {
                    name: "succeeded" === kd ? "check" : "cross",
                    isTinted: !0
                  }), (0, Ld.jsx)("span", {
                    children: "succeeded" === kd ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, Ld.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !gd,
                  onClick: () => {
                    Nd("playing")
                  },
                  children: [(0, Ld.jsx)(ed, {
                    name: "ready" === kd ? "play" : "replay"
                  }), (0, Ld.jsx)("span", {
                    children: "ready" === kd ? `Try ${Jd}` : "Play again"
                  })]
                })]
              })]
            }), Rd && !DJ(Rd) && (0, Ld.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, Ld.jsx)("code", {
                children: Rd
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Kk(dd) {
          let {
            level: Jd,
            text: kd,
            anchor: pd,
            className: Nd
          } = dd;
          const Pd = `h${Math.min(Jd,6)}`;
          return (0, Ld.jsxs)(Pd, {
                id: pd,
                className: Wd()("DocsHeading", Nd),
                children: [(0, Ld.jsx)(BJ, {
                      text: kd
                    }), (0, Ld.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${pd}`,
                        "aria-label": `Link to ${kd.replace(/`/g,"")}`,children:"#"})]})}function lk(dd){let{items:Jd,ordered:kd}=dd;const pd=kd?"ol":"ul";return(0,Ld.jsx)(pd,{className:"DocsList",children:Jd.map(((dd,Jd)=>(0,Ld.jsxs)("li",{children:[(0,Ld.jsx)(BJ,{text:dd.text}),dd.children.length>0&&(0,Ld.jsx)(lk,{items:dd.children,ordered:kd})]},Jd)))})}function Qk(dd){const Jd=dd[0],kd="paragraph"===(null===Jd||void 0===Jd?void 0:Jd.kind)?Jd.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(kd)?"warning":/^\*\*(tip|prefer)/.test(kd)?"tip":"note"}function Lk(dd){let{block:Jd}=dd;switch(Jd.kind){case"heading":return(0,Ld.jsx)(Kk,{level:Jd.level,text:Jd.text,anchor:Jd.anchor});case"paragraph":return(0,Ld.jsx)("p",{children:(0,Ld.jsx)(BJ,{text:Jd.text})});case"code":{const dd="ts"===Jd.lang?function(dd){const Jd=dd.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return Jd&&Object.hasOwn(nJ,Jd[1])?Jd[1]:null}(Jd.code):null;return(0,Ld.jsxs)(Ld.Fragment,{children:[(0,Ld.jsx)(Bd,{code:Jd.code,lang:Jd.lang}),dd&&(0,Ld.jsx)(Ck,{type:dd})]})}case"table":return(0,Ld.jsx)("div",{className:"DocsTableScroll",children:(0,Ld.jsxs)("table",{className:"DocsTable",children:[(0,Ld.jsx)("thead",{children:(0,Ld.jsx)("tr",{children:Jd.header.map(((dd,Jd)=>(0,Ld.jsx)("th",{children:(0,Ld.jsx)(BJ,{text:dd})},Jd)))})}),(0,Ld.jsx)("tbody",{children:Jd.rows.map(((dd,Jd)=>(0,Ld.jsx)("tr",{children:dd.map(((dd,Jd)=>(0,Ld.jsx)("td",{children:(0,Ld.jsx)(BJ,{text:dd})},Jd)))},Jd)))})]})});case"list":return(0,Ld.jsx)(lk,{items:Jd.items,ordered:Jd.ordered});case"quote":return(0,Ld.jsx)("aside",{className:Wd()("DocsCallout",Qk(Jd.blocks)),children:(0,Ld.jsx)(Ok,{blocks:Jd.blocks})});case"rule":return(0,Ld.jsx)("hr",{className:"DocsRule"})}}function Ok(dd){let{blocks:Jd}=dd;return(0,Ld.jsx)(Ld.Fragment,{children:Jd.map(((dd,Jd)=>(0,Ld.jsx)(Lk,{block:dd},Jd)))})}var ek=kd(4623),Rk=kd(4630);function Ik(dd){return"blocks"===dd||"items"===dd}const Gk=new Map;function vk(dd){let Jd=Gk.get(dd);return Jd||(Jd=function(dd){const Jd={entries:[],legend:[],notes:[],examples:[]};let kd=!1;for(const Wd of dd.split(/\r?\n/).slice(1)){if(Wd.startsWith("#")){const dd=Wd.replace(/^# ?/,""),pd=dd.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);pd?Jd.legend.push({code:pd[1],meaning:pd[2],usage:pd[3].trim()}):/^Examples:/.test(dd.trim())?kd=!0:kd&&dd.trim()?Jd.examples.push(dd.trim()):dd.trim()&&!/^\s/.test(dd)&&Jd.notes.push(dd.trim());continue}const dd=Wd.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var pd,Nd;dd&&Jd.entries.push({name:dd[1],variants:null!==(pd=null===(Nd=dd[2])||void 0===Nd?void 0:Nd.split(","))&&void 0!==pd?pd:[]})}return Jd}("blocks"===dd?ek:Rk),Gk.set(dd,Jd)),Jd}function xk(dd){let{className:Jd,value:kd,placeholder:pd,label:Nd,onChange:Wd,count:Pd,children:Zd}=dd;return(0,Ld.jsxs)("div",{className:Jd,children:[(0,Ld.jsx)(ed,{name:"magnifying-glass"}),(0,Ld.jsx)("input",{type:"search",value:kd,placeholder:pd,"aria-label":Nd,onChange:dd=>{Wd(dd.target.value)}}),Zd,Pd&&(0,Ld.jsxs)("span",{className:"DocsFilterCount",children:[Pd.visible," of ",Pd.total]})]})}var qk=kd(1059);function Bk(dd){const Jd=dd.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return Jd?Jd[2]:null}function sk(dd){return"paragraph"===dd.kind&&""===dd.text.trim()}function ik(dd){const Jd={name:dd.heading.text,description:[],params:[],returns:null};let kd="description";for(const Nd of dd.blocks)if(!sk(Nd))if("heading"===Nd.kind&&/^Parameters:?$/.test(Nd.text))kd="params";else if("heading"===Nd.kind&&/^Returns:?$/.test(Nd.text))kd="returns",Jd.returns={type:"",description:[]};else if("params"!==kd||"table"!==Nd.kind){if("returns"===kd&&"paragraph"===Nd.kind&&""===Jd.returns.type){const dd=Bk(Nd.text);if(null!==dd){Jd.returns.type=dd.replaceAll("\\|","|");continue}}"returns"===kd?Jd.returns.description.push(Nd):Jd.description.push(Nd)}else for(const[dd,kd,Wd]of Nd.rows){var pd;Jd.params.push({name:dd,type:null!==(pd=Bk(kd))&&void 0!==pd?pd:kd,description:null!==Wd&&void 0!==Wd?Wd:""})}return Jd}const ak=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function Mk(dd){return dd.filter((dd=>!sk(dd)))}const Fk=/^[\w][\w .'&!:()-]*$/,Yk=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function mk(dd){var Jd;if("code"===dd.kind&&"text"===dd.lang){const Jd=dd.code.split("\n").map((dd=>dd.trim())).filter(Boolean);return Jd.length>0&&Jd.every((dd=>Fk.test(dd)))?Jd.map((dd=>({name:dd}))):null}return"paragraph"===dd.kind&&Yk.test(dd.text.trim())?[...dd.text.matchAll(/`([ ^ `]+)` / g)].flatMap((dd => dd[1].split(/,\s*/).map((dd => ({
                              name: dd.trim()
                            }))))): "table" === dd.kind && null !== (Jd = dd.header[0]) && void 0 !== Jd && Jd.startsWith("Song") ? dd.rows.map((dd => {
                              let [Jd, kd] = dd;
                              return {
                                name: Jd.replace(/`/g, ""),
                                caption: kd
                              }
                            })) : null
                          }

                          function bk(dd) {
                            const Jd = [];
                            for (const kd of dd) {
                              const dd = mk(kd),
                                pd = Jd.at(-1),
                                Nd = "table" === kd.kind;
                              dd ? "names" === (null === pd || void 0 === pd ? void 0 : pd.kind) && pd.isSongs === Nd ? pd.names.push(...dd) : Jd.push({
                                kind: "names",
                                names: dd,
                                isSongs: Nd
                              }) : Jd.push({
                                kind: "block",
                                block: kd
                              })
                            }
                            return Jd
                          }
                          const Sk = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function jk(dd, Jd) {
                            return `${Sk[dd]}-${(0,sd.r)(Jd)}`
                          }
                          const Xk = new WeakMap;

                          function fk(dd, Jd, kd) {
                            let pd = Xk.get(Jd);
                            if (!pd) {
                              pd = new Map;
                              const kd = new Set;
                              for (const Nd of (0, sd.t)(Jd)) {
                                const Jd = bk(Mk(Nd.blocks)).map((Jd => {
                                  if ("block" === Jd.kind) return Jd;
                                  return {
                                    kind: "names",
                                    names: Jd.names.map((Jd => {
                                      var pd, Wd;
                                      const Pd = jk(dd, Jd.name);
                                      let Zd = Pd;
                                      for (let dd = 2; kd.has(Zd); dd++) Zd = `${Pd}-${dd}`;
                                      return kd.add(Zd), {
                                        ...Jd,
                                        anchor: Zd,
                                        heading: null !== (pd = null === (Wd = Nd.heading) || void 0 === Wd ? void 0 : Wd.text) && void 0 !== pd ? pd : ""
                                      }
                                    })),
                                    isSongs: Jd.isSongs
                                  }
                                }));
                                pd.set(Nd.blocks, Jd)
                              }
                              Xk.set(Jd, pd)
                            }
                            const Nd = pd.get(kd);
                            if (!Nd) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Nd
                          }
                          const nk = "/textures/docs/skinPreviews",
                            Uk = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var yk = kd(4081),
                            Dk = kd(4090);

                          function Tk(dd) {
                            return Object.hasOwn(yk.d, dd) ? yk.d[dd] : null
                          }
                          const Ek = {
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
                            blendMode: Dk.d.Standard
                          };

                          function ck(dd, Jd, kd) {
                            return Jd + (kd - Jd) * dd()
                          }

                          function hk(dd, Jd, kd) {
                            return dd + (Jd - dd) * kd
                          }

                          function rk(dd) {
                            return dd.length > 0 && "timeFraction" in dd[0]
                          }

                          function uk(dd, Jd) {
                            if (0 === dd.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!rk(dd.colorGradients)) {
                              const kd = dd.colorGradients,
                                {
                                  color: pd
                                } = kd[Math.floor(Jd() * kd.length) % kd.length];
                              return [{
                                at: 0,
                                colour: [pd[0] / 255, pd[1] / 255, pd[2] / 255, 1]
                              }]
                            }
                            return [...dd.colorGradients].sort(((dd, Jd) => dd.timeFraction - Jd.timeFraction)).map((dd => {
                              var kd, pd, Nd;
                              const Wd = dd.minColor,
                                Pd = null !== (kd = dd.maxColor) && void 0 !== kd ? kd : Wd,
                                Zd = Jd(),
                                gd = [hk(Wd[0], Pd[0], Zd) / 255, hk(Wd[1], Pd[1], Zd) / 255, hk(Wd[2], Pd[2], Zd) / 255, hk(null !== (pd = Wd[3]) && void 0 !== pd ? pd : 1, null !== (Nd = Pd[3]) && void 0 !== Nd ? Nd : 1, Zd)];
                              return {
                                at: dd.timeFraction,
                                colour: gd
                              }
                            }))
                          }

                          function tk(dd, Jd, kd, pd) {
                            const Nd = ck(pd, dd.minEmitPower, dd.maxEmitPower),
                              Wd = Jd => ck(pd, Math.min(dd.dir1[Jd], dd.dir2[Jd]), Math.max(dd.dir1[Jd], dd.dir2[Jd])) * Nd,
                              Pd = [...dd.velocityGradients].sort(((dd, Jd) => dd.timeFraction - Jd.timeFraction)).map((dd => ({
                                at: dd.timeFraction,
                                factor: ck(pd, dd.factor, dd.factor2)
                              })));
                            return {
                              pos: [ck(pd, Jd[0], kd[0]), ck(pd, Jd[1], kd[1]), ck(pd, Jd[2], kd[2])],
                              dir: [Wd(0), Wd(1), Wd(2)],
                              age: 0,
                              life: ck(pd, dd.minLifeTime, dd.maxLifeTime),
                              size: ck(pd, dd.minSize, dd.maxSize),
                              colours: uk(dd, pd),
                              velocityFactors: Pd
                            }
                          }

                          function Vk(dd, Jd, kd, pd) {
                            if (Jd < dd[0].at) return kd(Math.min(1, dd.length - 1));
                            for (let Nd = 0; Nd < dd.length - 1; Nd++)
                              if (Jd <= dd[Nd + 1].at) {
                                const Wd = dd[Nd + 1].at - dd[Nd].at;
                                return pd(kd(Nd), kd(Nd + 1), Wd > 0 ? (Jd - dd[Nd].at) / Wd : 1)
                              } return kd(dd.length - 1)
                          }

                          function zk(dd) {
                            return Vk(dd.colours, dd.age / dd.life, (Jd => dd.colours[Jd].colour), ((dd, Jd, kd) => [hk(dd[0], Jd[0], kd), hk(dd[1], Jd[1], kd), hk(dd[2], Jd[2], kd), hk(dd[3], Jd[3], kd)]))
                          }

                          function Hk(dd, Jd, kd) {
                            if (dd.age += kd, dd.age >= dd.life) return !1;
                            const pd = function(dd) {
                              return 0 === dd.velocityFactors.length ? 1 : Vk(dd.velocityFactors, dd.age / dd.life, (Jd => dd.velocityFactors[Jd].factor), hk)
                            }(dd) * kd;
                            for (let Wd = 0; Wd < 3; Wd++) {
                              var Nd;
                              dd.pos[Wd] += dd.dir[Wd] * pd, dd.dir[Wd] += (null !== (Nd = Jd[Wd]) && void 0 !== Nd ? Nd : 0) * kd
                            }
                            return !0
                          }

                          function wk(dd) {
                            return String(Math.round(1e6 * dd) / 1e6)
                          }

                          function Ak(dd) {
                            return `[${dd.map(wk).join(", ")}]`
                          }

                          function dp(dd, Jd) {
                            const kd = `${Jd}    `;
                            return `[\n${(rk(dd)?dd.map((dd=>{const Jd=[`${kd}    timeFraction: ${wk(dd.timeFraction)},`,`${kd}    minColor: ${Ak(dd.minColor)},`];return dd.maxColor&&Jd.push(`${kd}    maxColor: ${Ak(dd.maxColor)},`),`${kd}{\n${Jd.join("\n")}\n${kd}},`})):dd.map((dd=>`
                            $ {
                              kd
                            } {
                              color: $ {
                                Ak(dd.color)
                              }
                            }, `))).join("\n")}\n${Jd}]`
                          }
                          const Jp = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            kp = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const pp = .6;

                          function Np(dd, Jd) {
                            return `${Jd?"song":"sound"}:${dd}`
                          }
                          let Wp = {
                              track: null,
                              volume: pp
                            },
                            Pp = null,
                            Zp = 0,
                            gp = 0;
                          const Cp = new Set;

                          function Kp(dd) {
                            Wp = {
                              ...Wp,
                              ...dd
                            }, Cp.forEach((dd => {
                              dd()
                            }))
                          }

                          function op(dd) {
                            Wp.track && Kp({
                              track: {
                                ...Wp.track,
                                ...dd
                              }
                            })
                          }

                          function lp(dd) {
                            const [Jd, kd] = (0, pd.useState)((() => dd(Wp))), Nd = (0, pd.useRef)(dd);
                            return Nd.current = dd, (0, pd.useEffect)((() => {
                              const dd = () => {
                                kd((() => Nd.current(Wp)))
                              };
                              return Cp.add(dd), dd(), () => {
                                Cp.delete(dd)
                              }
                            }), []), Jd
                          }

                          function Qp() {
                            Zp++;
                            const dd = Pp;
                            Pp = null, null === dd || void 0 === dd || dd.stop()
                          }

                          function Lp(dd, Jd) {
                            let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            Qp();
                            const Nd = Zp,
                              {
                                track: Wd
                              } = Wp,
                              Pd = Wd && Wd.name === dd && Wd.isSong === Jd ? Wd.duration : 0;
                            gp = pd, Kp({
                              track: {
                                name: dd,
                                isSong: Jd,
                                status: "loading",
                                duration: Pd
                              }
                            }), Promise.all([kd.e(217), kd.e(241)]).then((() => kd(39770))).then((kd => {
                              let {
                                playDocsSound: Wd
                              } = kd;
                              Nd === Zp && (Pp = Wd(dd, Jd, Wp.volume, pd, {
                                onPlay: dd => {
                                  Nd === Zp && op({
                                    status: "playing",
                                    duration: dd
                                  })
                                },
                                onEnd: dd => {
                                  var Jd, kd;
                                  Nd === Zp && (Pp = null, dd ? Kp({
                                    track: null
                                  }) : (gp = null !== (Jd = null === (kd = Wp.track) || void 0 === kd ? void 0 : kd.duration) && void 0 !== Jd ? Jd : 0, op({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((Jd => {
                              console.error(`Could not play docs sound ${dd}`, Jd), Nd === Zp && Kp({
                                track: null
                              })
                            }))
                          }

                          function Op() {
                            const {
                              track: dd
                            } = Wp;
                            if (!dd) return;
                            if ("playing" === dd.status && Pp) return gp = Pp.yI(), Pp.pause(), void op({
                              status: "paused"
                            });
                            if ("loading" === dd.status) return Qp(), void op({
                              status: "paused"
                            });
                            if (Pp) return void Pp.resume();
                            const Jd = dd.duration > 0 && gp >= dd.duration - .05;
                            Lp(dd.name, dd.isSong, Jd ? 0 : gp)
                          }

                          function ep() {
                            var dd;
                            return Pp && "playing" === (null === (dd = Wp.track) || void 0 === dd ? void 0 : dd.status) ? Pp.yI() : gp
                          }

                          function Rp(dd) {
                            var Jd;
                            null === (Jd = Pp) || void 0 === Jd || Jd.setVolume(dd), Kp({
                              volume: dd
                            })
                          }

                          function Ip() {
                            Qp(), gp = 0, Kp({
                              track: null
                            })
                          }
                          const Gp = (0, pd.createContext)(null);
                          let vp = null;

                          function xp() {
                            const [dd, Jd] = (0, pd.useState)(null);
                            return (0, pd.useEffect)((() => {
                              let dd = !1;
                              return vp ??= Promise.all([kd.e(70), kd.e(73), kd.e(72), kd.e(71), kd.e(197), kd.e(97), kd.e(221)]).then((() => kd(39763))), vp.then((kd => {
                                dd || Jd(kd)
                              }), (dd => {
                                console.error("Could not load the docs gallery's textures", dd), vp = null
                              })), () => {
                                dd = !0
                              }
                            }), []), dd
                          }
                          const qp = 24,
                            Bp = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function sp(dd, Jd) {
                            const kd = "skins" === dd ? function(dd, Jd) {
                              const kd = Uk.find((Jd => dd.startsWith(Jd.heading)));
                              return kd ? function(dd, Jd) {
                                return `${dd}-${Jd}`
                              }(kd.prefix, Jd) : null
                            }(Jd.heading, Jd.name) : null;
                            return null === kd ? null : `${nk}/${kd}.webp`
                          }

                          function ip(dd) {
                            let {
                              kind: Jd,
                              entry: kd,
                              assets: Nd,
                              renderedUrl: Pd
                            } = dd;
                            const {
                              name: Zd
                            } = kd, [gd, Cd] = (0, pd.useState)(!1);
                            if ("icons" === Jd && DJ(Zd)) return (0, Ld.jsx)(qk.e, {
                              className: "DocsTileIcon",
                              name: Zd
                            });
                            let Kd = null;
                            var od;
                            if ("icons" === Jd) Kd = null !== (od = null === Nd || void 0 === Nd ? void 0 : Nd.getIngameIconUrl(Zd)) && void 0 !== od ? od : null;
                            else if ("particles" === Jd) {
                              var ld, Qd, Od;
                              Kd = null !== (ld = null === Nd || void 0 === Nd ? void 0 : Nd.getParticleTextureUrl(null !== (Qd = null === (Od = Tk(Zd)) || void 0 === Od ? void 0 : Od.texture) && void 0 !== Qd ? Qd : Zd)) && void 0 !== ld ? ld : null
                            } else "skins" === Jd && (Kd = null !== Pd && void 0 !== Pd ? Pd : Bp.test(Zd) ? `/textures/charSkins/previews/${Zd}_preview.png` : null);
                            return !Kd || gd ? (0, Ld.jsx)(ed, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === Jd ? "person" : "image"
                            }) : (0, Ld.jsx)("img", {
                              className: Wd()("DocsTileImage", {
                                Pixelated: "skins" !== Jd
                              }),
                              src: Kd,
                              srcSet: Kd === Pd ? `${Kd} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Kd}`), Cd(!0)
                              }
                            })
                          }

                          function ap(dd) {
                            let {
                              entry: Jd,
                              isSong: kd
                            } = dd;
                            const pd = lp((dd => {
                                let {
                                  track: pd
                                } = dd;
                                return (null === pd || void 0 === pd ? void 0 : pd.name) === Jd.name && pd.isSong === kd ? pd.status : null
                              })),
                              Nd = null !== pd && "paused" !== pd;
                            return (0, Ld.jsxs)("button", {
                              type: "button",
                              id: Jd.anchor,
                              className: Wd()("DocsSoundTile", {
                                Playing: Nd
                              }),
                              "data-docs-track": Np(Jd.name, kd),
                              "aria-label": Nd ? `Pause ${Jd.name}` : `Play ${Jd.name}`,
                              onClick: () => {
                                null !== pd ? Op() : Lp(Jd.name, kd)
                              },
                              children: [(0, Ld.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, Ld.jsx)(ed, {
                                  name: Nd ? "pause" : "play"
                                })
                              }), (0, Ld.jsx)("code", {
                                className: "DocsSoundName",
                                children: Jd.name
                              }), Jd.caption && (0, Ld.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: Jd.caption
                              })]
                            })
                          }

                          function Mp(dd) {
                            let {
                              kind: Jd,
                              names: kd,
                              isSongs: Nd
                            } = dd;
                            const Pd = xp(),
                              [Zd, gd] = Id(),
                              Cd = !1 === (null === Zd || void 0 === Zd ? void 0 : Zd.failed) ? Zd.text : null,
                              Kd = (0, pd.useContext)(Gp),
                              [od, ld] = (0, pd.useState)(""),
                              Qd = od.trim().toLowerCase(),
                              Od = Qd ? kd.filter((dd => dd.name.toLowerCase().includes(Qd))) : kd;
                            return (0, Ld.jsxs)("div", {
                              className: "DocsGallery",
                              children: [kd.length > qp && (0, Ld.jsx)(xk, {
                                className: "DocsGalleryFilter",
                                value: od,
                                placeholder: `Filter ${kd.length} names\u2026`,
                                label: "Filter names",
                                onChange: ld,
                                count: Qd ? {
                                  visible: Od.length,
                                  total: kd.length
                                } : null
                              }), (0, Ld.jsx)("div", {
                                className: Wd()("DocsGalleryGrid", `Kind-${Jd}`, {
                                  Songs: Nd
                                }),
                                children: Od.map((dd => {
                                  if ("sounds" === Jd) return (0, Ld.jsx)(ap, {
                                    entry: dd,
                                    isSong: Nd
                                  }, dd.anchor);
                                  if (Kd && "particles" === Jd && Tk(dd.name)) return (0, Ld.jsxs)("button", {
                                    type: "button",
                                    id: dd.anchor,
                                    className: Wd()("DocsTile Previewable", {
                                      Copied: Cd === dd.name
                                    }),
                                    title: `Play "${dd.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Kd(dd.name), gd(dd.name)
                                    },
                                    children: [(0, Ld.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, Ld.jsx)(ip, {
                                        kind: Jd,
                                        entry: dd,
                                        assets: Pd,
                                        renderedUrl: null
                                      }), (0, Ld.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, Ld.jsx)(ed, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, Ld.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Cd === dd.name ? "Copied!" : dd.name
                                    })]
                                  }, dd.anchor);
                                  const kd = sp(Jd, dd);
                                  return (0, Ld.jsxs)("button", {
                                    type: "button",
                                    id: dd.anchor,
                                    className: Wd()("DocsTile", {
                                      Copied: Cd === dd.name
                                    }),
                                    title: `Copy "${dd.name}"`,
                                    onClick: () => {
                                      gd(dd.name)
                                    },
                                    children: [(0, Ld.jsx)("span", {
                                      className: Wd()("DocsTilePreview", {
                                        Rendered: null !== kd
                                      }),
                                      children: (0, Ld.jsx)(ip, {
                                        kind: Jd,
                                        entry: dd,
                                        assets: Pd,
                                        renderedUrl: kd
                                      })
                                    }), (0, Ld.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Cd === dd.name ? "Copied!" : dd.name
                                    })]
                                  }, dd.anchor)
                                }))
                              })]
                            })
                          }

                          function Fp(dd) {
                            let {
                              kind: Jd,
                              content: kd,
                              blocks: pd
                            } = dd;
                            return (0, Ld.jsx)(Ld.Fragment, {
                              children: fk(Jd, kd, pd).map(((dd, kd) => "block" === dd.kind ? (0, Ld.jsx)(Lk, {
                                block: dd.block
                              }, kd) : (0, Ld.jsx)(Mp, {
                                kind: Jd,
                                names: dd.names,
                                isSongs: dd.isSongs
                              }, kd)))
                            })
                          }
                          const Yp = [{
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

                          function mp(dd) {
                            let {
                              cards: Jd = Yp,
                              label: kd = "Start here"
                            } = dd;
                            const Nd = (0, pd.useContext)(LJ);
                            return (0, Ld.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": kd,
                              children: Jd.map((dd => {
                                let {
                                  pageId: Jd,
                                  countNoun: kd
                                } = dd;
                                const pd = yd(Jd);
                                return (0, Ld.jsxs)(Pd.d, {
                                  to: rd(Nd, pd),
                                  className: "DocsLandingCard",
                                  children: [(0, Ld.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, Ld.jsx)(ed, {
                                      name: pd.icon
                                    })
                                  }), (0, Ld.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: pd.title
                                  }), (0, Ld.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: pd.summary
                                  }), kd && (0, Ld.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [Td(pd).sections.length, " ", kd]
                                  })]
                                }, Jd)
                              }))
                            })
                          }
                          const bp = 240;

                          function Sp(dd) {
                            let {
                              faces: Jd
                            } = dd;
                            return (0, Ld.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, Ld.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${Jd.top}")`
                                }
                              }), (0, Ld.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${Jd.left}")`
                                }
                              }), (0, Ld.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${Jd.right}")`
                                }
                              })]
                            })
                          }

                          function jp(dd) {
                            let {
                              src: Jd
                            } = dd;
                            const [kd, Nd] = (0, pd.useState)(!1);
                            return kd ? null : (0, Ld.jsx)("img", {
                              src: Jd,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${Jd}`), Nd(!0)
                              }
                            })
                          }

                          function Xp(dd) {
                            let {
                              kind: Jd
                            } = dd;
                            const kd = vk(Jd),
                              Nd = xp(),
                              Pd = (0, Zd.v)(),
                              [gd, Cd] = (0, pd.useState)(""),
                              [Kd, od] = (0, pd.useState)(null),
                              [ld, Qd] = (0, pd.useState)(bp),
                              [Od, Rd] = (0, pd.useState)(null),
                              Id = (0, pd.useRef)(null),
                              vd = gd.trim().toLowerCase();
                            (0, pd.useEffect)((() => {
                              const dd = (0, sd.q)(Pd.hash),
                                pd = kd.entries.find((kd => jk(Jd, kd.name) === dd));
                              if (pd) Id.current = pd.name, Cd(pd.name), od(null), Rd(pd.name);
                              else if (null !== Id.current) {
                                const dd = Id.current;
                                Id.current = null, Cd((Jd => Jd === dd ? "" : Jd)), Rd(null)
                              }
                            }), [kd, Jd, Pd.hash, Pd.key]), (0, pd.useEffect)((() => {
                              var dd;
                              null !== Od && (null === (dd = document.getElementById(jk(Jd, Od))) || void 0 === dd || dd.scrollIntoView({
                                block: "center"
                              }))
                            }), [Jd, Od]);
                            const xd = kd.entries.filter((dd => (!vd || dd.name.toLowerCase().includes(vd)) && (!Kd || dd.variants.includes(Kd))));
                            return (0, Ld.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [kd.notes.length > 0 && (0, Ld.jsx)("div", {
                                className: "DocsProse",
                                children: kd.notes.map((dd => (0, Ld.jsx)("p", {
                                  children: dd
                                }, dd)))
                              }), kd.legend.length > 0 && (0, Ld.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, Ld.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, Ld.jsx)("thead", {
                                    children: (0, Ld.jsxs)("tr", {
                                      children: [(0, Ld.jsx)("th", {
                                        children: "Code"
                                      }), (0, Ld.jsx)("th", {
                                        children: "Variant"
                                      }), (0, Ld.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, Ld.jsx)("tbody", {
                                    children: kd.legend.map((dd => (0, Ld.jsxs)("tr", {
                                      children: [(0, Ld.jsx)("td", {
                                        children: (0, Ld.jsx)("button", {
                                          type: "button",
                                          className: Wd()("DocsVariantChip", {
                                            Active: Kd === dd.code
                                          }),
                                          "aria-pressed": Kd === dd.code,
                                          title: `Show only ${Jd} with ${dd.meaning} variants`,
                                          onClick: () => {
                                            od(Kd === dd.code ? null : dd.code)
                                          },
                                          children: dd.code
                                        })
                                      }), (0, Ld.jsx)("td", {
                                        children: dd.meaning
                                      }), (0, Ld.jsx)("td", {
                                        children: (0, Ld.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: dd.usage
                                        })
                                      })]
                                    }, dd.code)))
                                  })]
                                })
                              }), kd.examples.length > 0 && (0, Ld.jsx)(Bd, {
                                lang: "text",
                                code: kd.examples.join("\n")
                              }), (0, Ld.jsx)(xk, {
                                className: "DocsFilterBar",
                                value: gd,
                                placeholder: `Search ${kd.entries.length} ${Jd}\u2026`,
                                label: `Search ${Jd}`,
                                onChange: dd => {
                                  Cd(dd), Qd(bp)
                                },
                                count: vd || Kd ? {
                                  visible: xd.length,
                                  total: kd.entries.length
                                } : null,
                                children: Kd && (0, Ld.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    od(null)
                                  },
                                  children: [Kd, " ", (0, Ld.jsx)(ed, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, Ld.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: xd.slice(0, ld).map((dd => {
                                  const kd = "blocks" === Jd ? null === Nd || void 0 === Nd ? void 0 : Nd.getBlockFaces(dd.name) : null,
                                    pd = Nd && !kd ? Nd.getItemTextureUrl(dd.name) : null;
                                  return (0, Ld.jsxs)("div", {
                                    id: jk(Jd, dd.name),
                                    className: Wd()("DocsCatalogueTile", {
                                      Linked: dd.name === Od
                                    }),
                                    children: [(0, Ld.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [kd && (0, Ld.jsx)(Sp, {
                                        faces: kd
                                      }), pd && (0, Ld.jsx)(jp, {
                                        src: pd
                                      })]
                                    }), (0, Ld.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: dd.name
                                    }), dd.variants.length > 0 && (0, Ld.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: dd.variants.map((dd => (0, Ld.jsx)("span", {
                                        children: dd
                                      }, dd)))
                                    }), (0, Ld.jsx)(Gd, {
                                      text: dd.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, dd.name)
                                }))
                              }), xd.length > ld && (0, Ld.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Qd(xd.length)
                                },
                                children: ["Show all ", xd.length]
                              }), 0 === xd.length && (0, Ld.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", Jd, " match."]
                              })]
                            })
                          }
                          var fp = kd(4718),
                            np = kd(1627);
                          const Up = .95 * fp.d;

                          function yp(dd) {
                            return /^\s*```/.test(dd)
                          }

                          function Dp(dd, Jd) {
                            const kd = [
                              []
                            ];
                            let pd = !1;
                            for (const Nd of dd.split("\n")) !pd && Jd(Nd) && kd.at(-1).length > 0 && kd.push([]), yp(Nd) && (pd = !pd), kd.at(-1).push(Nd);
                            return kd.map((dd => dd.join("\n").trim())).filter(Boolean)
                          }

                          function Tp(dd, Jd) {
                            const kd = `${"#".repeat(Jd)} `,
                              pd = [];
                            let Nd = !1;
                            for (const Wd of dd.split("\n")) yp(Wd) ? Nd = !Nd : !Nd && Wd.startsWith(kd) && pd.push(Wd.slice(kd.length).trim());
                            return pd
                          }

                          function Ep(dd) {
                            return dd.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class cp {
                            constructor(dd, Jd) {
                              this.origin = Jd, this.pages = void 0, this.partPaths = new Map;
                              const kd = dd.map((dd => {
                                const Jd = Jd => this.resolveLinks(dd, Jd).length,
                                  kd = function(dd, Jd) {
                                    const kd = dd.map((dd => Jd(dd.markdown) + 2)),
                                      pd = kd.reduce(((dd, Jd) => dd + Jd), 0),
                                      Nd = pd / Math.ceil(pd / Up),
                                      Wd = [];
                                    let Pd = 0;
                                    return dd.forEach(((dd, Jd) => {
                                      const pd = kd[Jd];
                                      (0 === Wd.length || Pd + pd > Up || Pd + pd / 2 > Nd) && (Wd.push([]), Pd = 0), Wd.at(-1).push(dd), Pd += pd
                                    })), Wd
                                  }(function(dd, Jd) {
                                    return Dp(dd, (dd => dd.startsWith("## "))).flatMap((dd => {
                                      var kd;
                                      const pd = null !== (kd = Tp(dd, 2)[0]) && void 0 !== kd ? kd : "";
                                      if (Jd(dd) <= Up) return [{
                                        markdown: dd,
                                        section: pd
                                      }];
                                      let Nd = !1,
                                        Wd = "";
                                      return Dp(dd, (dd => {
                                        const Jd = Nd && "" !== dd.trim();
                                        return Nd = "" === dd.trim(), Jd
                                      })).map((dd => {
                                        var Jd;
                                        const kd = Tp(dd, 3),
                                          Nd = dd.startsWith("### ") ? kd[0] : Wd;
                                        return Wd = null !== (Jd = kd.at(-1)) && void 0 !== Jd ? Jd : Wd, {
                                          markdown: dd,
                                          section: pd || Nd
                                        }
                                      }))
                                    }))
                                  }(Ep(dd), Jd), Jd);
                                return {
                                  page: dd,
                                  groups: kd.length > 1 ? kd : []
                                }
                              }));
                              for (const {
                                  page: pd,
                                  groups: Nd
                                }
                                of kd) Nd.forEach(((dd, Jd) => {
                                const kd = (0, fp.s)(pd.slug, Jd);
                                for (const Nd of dd.flatMap((dd => [...Tp(dd.markdown, 2), ...Tp(dd.markdown, 3)]))) {
                                  const dd = `${pd.id}#${(0,sd.r)(Nd)}`;
                                  this.partPaths.has(dd) || this.partPaths.set(dd, kd)
                                }
                              }));
                              this.pages = kd.map((dd => {
                                let {
                                  page: Jd,
                                  groups: kd
                                } = dd;
                                return {
                                  page: Jd,
                                  path: (0, fp.p)(Jd.slug),
                                  markdown: `# ${Jd.title}\n\n${this.resolveLinks(Jd,Ep(Jd))}\n`,
                                  parts: kd.map(((dd, pd) => this.renderPart(Jd, dd, pd, kd.length)))
                                }
                              }))
                            }
                            url(dd) {
                              return `${this.origin}${dd}`
                            }
                            getPage(dd) {
                              return this.pages.find((Jd => Jd.page.id === dd))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((dd => (dd.parts.length > 0 ? dd.parts : [{
                                path: dd.path,
                                label: "",
                                markdown: dd.markdown
                              }]).filter((dd => dd.markdown.length > fp.d))))
                            }
                            markdownUrl(dd, Jd) {
                              const kd = Jd && this.partPaths.get(`${dd.id}#${Jd}`) || (0, fp.p)(dd.slug);
                              return this.url(Jd ? `${kd}#${Jd}` : kd)
                            }
                            resolveLinks(dd, Jd) {
                              return Jd.replace(/\]\((#[^)]+)\)/g, ((Jd, kd) => {
                                var pd;
                                const Nd = null !== (pd = cd(kd)) && void 0 !== pd ? pd : this.samePageTarget(dd, kd);
                                return Nd ? `](${this.markdownUrl(Nd.page,Nd.anchor)})` : Jd
                              }))
                            }
                            samePageTarget(dd, Jd) {
                              const kd = (0, sd.r)(Jd.slice(1));
                              return Ed(dd, kd) ? {
                                page: dd,
                                anchor: kd
                              } : null
                            }
                            renderPart(dd, Jd, kd, pd) {
                              const Nd = function(dd) {
                                  const Jd = dd.map((dd => dd.section)).filter(Boolean);
                                  if (0 === Jd.length) return "";
                                  const kd = Jd[0],
                                    pd = Jd.at(-1);
                                  return kd === pd ? kd : `${kd} to ${pd}`
                                }(Jd),
                                Wd = Jd.map((dd => dd.markdown)).join("\n\n"),
                                Pd = Nd ? `It covers ${Nd}. ` : "",
                                Zd = `Part ${kd+1} of ${pd} of [${dd.title}](${this.url((0,fp.p)(dd.slug))}). ${Pd}[llms.txt](${this.url(fp.h)}) lists every part.`;
                              return {
                                path: (0, fp.s)(dd.slug, kd),
                                label: Nd,
                                markdown: `# ${dd.title}, part ${kd+1} of ${pd}\n\n${Zd}\n\n${this.resolveLinks(dd,Wd)}\n`
                              }
                            }
                            llmsTxt(dd) {
                              const Jd = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${hp(fp.d)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const kd of Ud) {
                                Jd.push("", `## ${kd.title}`, "");
                                for (const dd of kd.pageIds) {
                                  const kd = this.getPage(dd),
                                    {
                                      page: pd,
                                      parts: Nd
                                    } = kd,
                                    Wd = `About ${hp(kd.markdown.length)} tokens${Nd.length>0?`, in ${Nd.length} parts:`:"."}`;
                                  Jd.push(`- [${pd.title}](${this.url(kd.path)}): ${pd.summary} ${Wd}`), Nd.forEach(((dd, kd) => {
                                    Jd.push(`  - [Part ${kd+1}${dd.label?`: ${dd.label}`:""}](${this.url(dd.path)})`)
                                  }))
                                }
                              }
                              return Jd.push("", "## Optional", "", `- [Every page in one file](${this.url(fp.g)}): About ${hp(dd.length)} tokens, for a model with a large context window.`, ""), Jd.join("\n")
                            }
                            llmsFullTxt() {
                              return Ud.flatMap((dd => dd.pageIds.map((dd => this.getPage(dd).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const dd = this.llmsFullTxt(),
                                Jd = this.llmsTxt(dd),
                                kd = new Map([
                                  [fp.m, Jd],
                                  [fp.h, Jd],
                                  [fp.g, dd]
                                ]);
                              for (const pd of this.pages) {
                                kd.set(pd.path, pd.markdown);
                                for (const dd of pd.parts) kd.set(dd.path, dd.markdown)
                              }
                              return kd
                            }
                          }

                          function hp(dd) {
                            return `${Math.max(1,Math.round(dd/4e3))}K`
                          }
                          let rp = null;

                          function tp() {
                            return rp ??= new cp(nd, np.b), rp
                          }
                          const Vp = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function zp(dd) {
                            return tp().getPage(dd.id).parts.length > 0 ? `Read ${fp.i}, then the parts of the Bloxd Code API's ${dd.title} page it lists, so I can ask questions about it.` : `Read ${np.b}${(0,fp.p)(dd.slug)} so I can ask questions about it. ${fp.i} lists every page of the Bloxd Code API docs.`
                          }

                          function Hp(dd) {
                            let {
                              page: Jd
                            } = dd;
                            const [kd, pd] = Id();
                            return (0, Ld.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, Ld.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  pd(tp().getPage(Jd.id).markdown)
                                },
                                children: [(0, Ld.jsx)(ed, {
                                  name: !1 === (null === kd || void 0 === kd ? void 0 : kd.failed) ? "check" : "copy"
                                }), (0, Ld.jsx)("span", {
                                  children: kd ? kd.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), Vp.map((dd => (0, Ld.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${dd.url}${encodeURIComponent(zp(Jd))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, Ld.jsx)(ed, {
                                  name: "external-link"
                                }), (0, Ld.jsxs)("span", {
                                  children: ["Open in ", dd.name]
                                })]
                              }, dd.name)))]
                            })
                          }

                          function wp(dd) {
                            return `#${[0,1,2].map((Jd=>Math.round(Math.min(255,Math.max(0,dd[Jd]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function Ap(dd) {
                            return [parseInt(dd.slice(1, 3), 16), parseInt(dd.slice(3, 5), 16), parseInt(dd.slice(5, 7), 16)]
                          }

                          function dN(dd) {
                            let {
                              label: Jd,
                              min: kd,
                              max: pd,
                              step: Nd,
                              low: Wd,
                              high: Pd,
                              onChange: Zd
                            } = dd;
                            return (0, Ld.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ld.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Ld.jsx)("span", {
                                  children: Jd
                                }), (0, Ld.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Wd === Pd ? Wd : `${Wd}\u2013${Pd}`
                                })]
                              }), (0, Ld.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, Ld.jsx)("input", {
                                  type: "range",
                                  min: kd,
                                  max: pd,
                                  step: Nd,
                                  value: Math.min(pd, Wd),
                                  "aria-label": `Minimum ${Jd.toLowerCase()}`,
                                  onChange: dd => {
                                    const Jd = Number(dd.target.value);
                                    Zd(Jd, Math.max(Jd, Pd))
                                  }
                                }), (0, Ld.jsx)("input", {
                                  type: "range",
                                  min: kd,
                                  max: pd,
                                  step: Nd,
                                  value: Math.min(pd, Pd),
                                  "aria-label": `Maximum ${Jd.toLowerCase()}`,
                                  onChange: dd => {
                                    const Jd = Number(dd.target.value);
                                    Zd(Math.min(Jd, Wd), Jd)
                                  }
                                })]
                              })]
                            })
                          }

                          function JN(dd) {
                            let {
                              label: Jd,
                              min: kd,
                              max: pd,
                              step: Nd,
                              value: Wd,
                              onChange: Pd,
                              format: Zd = String
                            } = dd;
                            return (0, Ld.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ld.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Ld.jsx)("span", {
                                  children: Jd
                                }), (0, Ld.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Zd(Wd)
                                })]
                              }), (0, Ld.jsx)("input", {
                                type: "range",
                                min: kd,
                                max: pd,
                                step: Nd,
                                value: Math.min(pd, Math.max(kd, Wd)),
                                "aria-label": Jd,
                                onChange: dd => {
                                  Pd(Number(dd.target.value))
                                }
                              })]
                            })
                          }

                          function kN(dd) {
                            let {
                              opts: Jd,
                              onChange: kd
                            } = dd;
                            const pd = Jd.colorGradients;
                            if (!rk(pd)) return (0, Ld.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ld.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, Ld.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, Ld.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: pd.map(((dd, Jd) => (0, Ld.jsx)("input", {
                                  type: "color",
                                  value: wp(dd.color),
                                  "aria-label": `Colour ${Jd+1}`,
                                  onChange: dd => {
                                    const Nd = [...pd];
                                    Nd[Jd] = {
                                      color: Ap(dd.target.value)
                                    }, kd(Nd)
                                  }
                                }, Jd)))
                              })]
                            });
                            const Nd = (dd, Jd) => {
                              const Nd = [...pd];
                              Nd[dd] = Jd, kd(Nd)
                            };
                            return (0, Ld.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Ld.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Ld.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, Ld.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), pd.map(((dd, Jd) => {
                                var kd;
                                const pd = null !== (kd = dd.maxColor) && void 0 !== kd ? kd : dd.minColor;
                                return (0, Ld.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, Ld.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * dd.timeFraction), "%"]
                                  }), (0, Ld.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${wp(dd.minColor)}, ${wp(pd)})`
                                    }
                                  }), (0, Ld.jsx)("input", {
                                    type: "color",
                                    value: wp(dd.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*dd.timeFraction)}%`,
                                    onChange: kd => {
                                      Nd(Jd, {
                                        ...dd,
                                        minColor: [...Ap(kd.target.value), dd.minColor[3]]
                                      })
                                    }
                                  }), (0, Ld.jsx)("input", {
                                    type: "color",
                                    value: wp(pd),
                                    "aria-label": `Maximum colour at ${Math.round(100*dd.timeFraction)}%`,
                                    onChange: kd => {
                                      Nd(Jd, {
                                        ...dd,
                                        maxColor: [...Ap(kd.target.value), pd[3]]
                                      })
                                    }
                                  })]
                                }, Jd)
                              }))]
                            })
                          }
                          const pN = [-.5, -.5, -.5],
                            NN = [.5, .5, .5],
                            WN = [0, 1, 2, 3, 4, 5, 6, 7].map((dd => [1 & dd ? NN[0] : pN[0], 2 & dd ? NN[1] : pN[1], 4 & dd ? NN[2] : pN[2]]));class PN {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(dd, Jd, kd, pd) {
                              const Nd = Math.round(31 * Jd),
                                Wd = Math.round(31 * kd),
                                Pd = Math.round(31 * pd),
                                Zd = `${Nd}|${Wd}|${Pd}`;
                              let gd = this.tints.get(dd);
                              (!gd || gd.size > 2e3) && (gd = new Map, this.tints.set(dd, gd));
                              let Cd = gd.get(Zd);
                              if (Cd) return Cd;
                              Cd = document.createElement("canvas"), Cd.width = dd.naturalWidth || 16, Cd.height = dd.naturalHeight || 16;
                              const Kd = Cd.getContext("2d");
                              return Kd ? (Kd.imageSmoothingEnabled = !1, Kd.drawImage(dd, 0, 0, Cd.width, Cd.height), Kd.globalCompositeOperation = "multiply", Kd.fillStyle = `rgb(${Nd/31*255}, ${Wd/31*255}, ${Pd/31*255})`, Kd.fillRect(0, 0, Cd.width, Cd.height), Kd.globalCompositeOperation = "destination-in", Kd.drawImage(dd, 0, 0, Cd.width, Cd.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), gd.set(Zd, Cd), Cd
                            }
                          }

                          function ZN(dd) {
                            let {
                              opts: Jd,
                              textureUrl: kd,
                              burst: Nd,
                              paused: Wd
                            } = dd;
                            const Pd = (0, pd.useRef)(null),
                              Zd = (0, pd.useRef)(Jd);
                            Zd.current = Jd;
                            const gd = (0, pd.useRef)(Wd);
                            gd.current = Wd;
                            const Cd = (0, pd.useRef)(null),
                              Kd = (0, pd.useRef)(null),
                              od = (0, pd.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(dd) {
                                let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const kd = [-.5, -.5, -.5],
                                  pd = [.5, .5, .5];
                                let Nd = .5;
                                for (let Wd = 0; Wd < 40; Wd++) {
                                  const Wd = tk(dd, kd, pd, Jd),
                                    Pd = Math.max(Wd.life / 30, .001);
                                  for (; Hk(Wd, dd.gravity, Pd);) Nd = Math.max(Nd, Math.hypot(Wd.pos[0], Wd.pos[1], Wd.pos[2]) + Wd.size / 2)
                                }
                                return Nd
                              }(Jd)))), [Jd]),
                              ld = (0, pd.useRef)(od);
                            return ld.current = od, (0, pd.useEffect)((() => {
                              if (Cd.current = null, !kd) return;
                              const dd = new Image;
                              let Jd = !1;
                              return dd.onload = () => {
                                Jd || (Cd.current = dd)
                              }, dd.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${kd}`)
                              }, dd.src = kd, () => {
                                Jd = !0
                              }
                            }), [kd]), (0, pd.useEffect)((() => {
                              var dd;
                              null === (dd = Kd.current) || void 0 === dd || dd.call(Kd)
                            }), [Jd, Nd]), (0, pd.useEffect)((() => {
                              const dd = Pd.current,
                                Jd = null === dd || void 0 === dd ? void 0 : dd.getContext("2d");
                              if (!dd || !Jd) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const kd = new PN;
                              let pd = [],
                                Nd = 0,
                                Wd = -.7,
                                od = ld.current,
                                Qd = performance.now(),
                                Ld = 0,
                                Od = !0,
                                ed = null;
                              const Rd = () => {
                                const dd = Zd.current,
                                  Jd = Math.min(400, Math.max(0, Math.ceil(dd.manualEmitCount)));
                                pd = [];
                                for (let kd = 0; kd < Jd; kd++) pd.push(tk(dd, pN, NN, Math.random));
                                Nd = 0
                              };
                              Kd.current = Rd, Rd();
                              const Id = Pd => {
                                Ld = requestAnimationFrame(Id);
                                const Kd = Math.min(.05, (Pd - Qd) / 1e3);
                                if (Qd = Pd, !Od) return;
                                const Gd = window.devicePixelRatio || 1,
                                  vd = Math.round(dd.clientWidth * Gd),
                                  xd = Math.round(dd.clientHeight * Gd);
                                if (0 === vd || 0 === xd) return;
                                dd.width === vd && dd.height === xd || (dd.width = vd, dd.height = xd);
                                const qd = Zd.current;
                                null === ed && (Wd += .18 * Kd), od += (ld.current - od) * Math.min(1, 4 * Kd);
                                const Bd = .6 * Kd;
                                pd = pd.filter((dd => Hk(dd, qd.gravity, Bd))), 0 !== pd.length || gd.current || (Nd += Kd, Nd > .6 && Rd());
                                const sd = function(dd, Jd, kd, pd) {
                                  const Nd = 3.2 * pd,
                                    Wd = .44 * Math.min(dd, Jd) * Nd / pd,
                                    Pd = Math.cos(kd),
                                    Zd = Math.sin(kd),
                                    gd = Math.cos(.42),
                                    Cd = Math.sin(.42);
                                  return (kd, pd, Kd) => {
                                    const od = kd * Zd + Kd * Pd,
                                      ld = Nd - (pd * Cd + od * gd);
                                    if (ld < .05) return null;
                                    const Qd = Wd / ld;
                                    return {
                                      x: dd / 2 + (kd * Pd - Kd * Zd) * Qd,
                                      y: Jd / 2 - (pd * gd - od * Cd) * Qd,
                                      scale: Qd,
                                      depth: ld
                                    }
                                  }
                                }(vd, xd, Wd, od);
                                ! function(dd, Jd, kd, pd, Nd) {
                                  const Wd = dd.createLinearGradient(0, 0, 0, kd);
                                  Wd.addColorStop(0, "#23262d"), Wd.addColorStop(1, "#16181c"), dd.globalCompositeOperation = "source-over", dd.globalAlpha = 1, dd.fillStyle = Wd, dd.fillRect(0, 0, Jd, kd);
                                  const Pd = (Jd, kd) => {
                                      const Nd = pd(Jd[0], Jd[1], Jd[2]),
                                        Wd = pd(kd[0], kd[1], kd[2]);
                                      Nd && Wd && (dd.beginPath(), dd.moveTo(Nd.x, Nd.y), dd.lineTo(Wd.x, Wd.y), dd.stroke())
                                    },
                                    Zd = Math.ceil(Nd) + 1,
                                    gd = pN[1];
                                  dd.lineWidth = 1, dd.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Cd = -Zd; Cd <= Zd; Cd++) Pd([Cd + .5, gd, .5 - Zd], [Cd + .5, gd, Zd + .5]), Pd([.5 - Zd, gd, Cd + .5], [Zd + .5, gd, Cd + .5]);
                                  dd.strokeStyle = "rgba(255, 255, 255, 0.28)", dd.setLineDash([4, 4]);
                                  for (const Cd of WN)
                                    for (const dd of WN) {
                                      const Jd = [0, 1, 2].filter((Jd => Cd[Jd] !== dd[Jd]));
                                      1 === Jd.length && Cd[Jd[0]] < dd[Jd[0]] && Pd(Cd, dd)
                                    }
                                  dd.setLineDash([])
                                }(Jd, vd, xd, sd, od);
                                const ad = Cd.current,
                                  Md = pd.map((dd => ({
                                    particle: dd,
                                    at: sd(dd.pos[0], dd.pos[1], dd.pos[2])
                                  }))).filter((dd => null !== dd.at)).sort(((dd, Jd) => Jd.at.depth - dd.at.depth));
                                Jd.imageSmoothingEnabled = !1;
                                for (const dd of function(dd) {
                                    switch (dd) {
                                      case Dk.d.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Dk.d.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Dk.d.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Dk.d.MultiplyAdd:
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
                                  }(qd.blendMode)) {
                                  Jd.globalCompositeOperation = dd.operation;
                                  for (const {
                                      particle: pd,
                                      at: Nd
                                    }
                                    of Md) {
                                    const [Wd, Pd, Zd, gd] = zk(pd), Cd = Math.max(1, pd.size * Nd.scale);
                                    Jd.globalAlpha = dd.usesAlpha ? Math.min(1, Math.max(0, gd)) : 1, ad ? Jd.drawImage(kd.get(ad, Wd, Pd, Zd), Nd.x - Cd / 2, Nd.y - Cd / 2, Cd, Cd) : (Jd.fillStyle = `rgb(${255*Wd}, ${255*Pd}, ${255*Zd})`, Jd.fillRect(Nd.x - Cd / 2, Nd.y - Cd / 2, Cd, Cd))
                                  }
                                }
                                Jd.globalCompositeOperation = "source-over", Jd.globalAlpha = 1
                              };
                              Ld = requestAnimationFrame(Id);
                              const Gd = new IntersectionObserver((dd => {
                                let [Jd] = dd;
                                Od = Jd.isIntersecting
                              }));
                              Gd.observe(dd);
                              const vd = Jd => {
                                  ed = Jd.clientX, dd.setPointerCapture(Jd.pointerId)
                                },
                                xd = dd => {
                                  null !== ed && (Wd += .01 * (dd.clientX - ed), ed = dd.clientX)
                                },
                                qd = () => {
                                  ed = null
                                };
                              return dd.addEventListener("pointerdown", vd), dd.addEventListener("pointermove", xd), dd.addEventListener("pointerup", qd), dd.addEventListener("pointercancel", qd), () => {
                                cancelAnimationFrame(Ld), Gd.disconnect(), Kd.current = null, dd.removeEventListener("pointerdown", vd), dd.removeEventListener("pointermove", xd), dd.removeEventListener("pointerup", qd), dd.removeEventListener("pointercancel", qd)
                              }
                            }), []), (0, Ld.jsx)("canvas", {
                              ref: Pd,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${Jd.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const gN = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            CN = [{
                              mode: Dk.d.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Dk.d.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Dk.d.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Dk.d.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Dk.d.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            KN = (0, pd.forwardRef)((function(dd, Jd) {
                              var kd, Nd;
                              let {
                                textures: Pd
                              } = dd;
                              const Zd = xp(),
                                gd = (0, pd.useRef)(null),
                                [Cd, Kd] = (0, pd.useState)(Ek),
                                [od, ld] = (0, pd.useState)("example"),
                                [Qd, Od] = (0, pd.useState)(0),
                                [Rd, Id] = (0, pd.useState)(!1),
                                vd = dd => {
                                  const Jd = "example" === dd ? Ek : Tk(dd);
                                  Jd && (Kd(Jd), ld(dd))
                                };
                              (0, pd.useImperativeHandle)(Jd, (() => ({
                                preview: dd => {
                                  var Jd;
                                  vd(dd), null === (Jd = gd.current) || void 0 === Jd || Jd.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const xd = dd => {
                                  Kd({
                                    ...Cd,
                                    ...dd
                                  }), ld(null)
                                },
                                qd = function(dd, Jd) {
                                  if (null !== Jd) return `${Jp}    presetId: "${Jd}",\n${kp}\n})`;
                                  const kd = dd.velocityGradients.map((dd => `        {\n            timeFraction: ${wk(dd.timeFraction)},\n            factor: ${wk(dd.factor)},\n            factor2: ${wk(dd.factor2)},\n        },`)),
                                    pd = [`    dir1: ${Ak(dd.dir1)},`, `    dir2: ${Ak(dd.dir2)},`, kp, `    texture: "${dd.texture}",`, `    minLifeTime: ${wk(dd.minLifeTime)},`, `    maxLifeTime: ${wk(dd.maxLifeTime)},`, `    minEmitPower: ${wk(dd.minEmitPower)},`, `    maxEmitPower: ${wk(dd.maxEmitPower)},`, `    minSize: ${wk(dd.minSize)},`, `    maxSize: ${wk(dd.maxSize)},`, `    manualEmitCount: ${wk(dd.manualEmitCount)},`, `    gravity: ${Ak(dd.gravity)},`, `    colorGradients: ${dp(dd.colorGradients,"    ")},`, `    velocityGradients: ${kd.length>0?`[\n${kd.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${wk(dd.blendMode)},`];
                                  return void 0 !== dd.hideDist && pd.push(`    hideDist: ${wk(dd.hideDist)},`), `${Jp}${pd.join("\n")}\n})`
                                }(Cd, null === od || "example" === od ? null : od),
                                sd = Pd.includes(Cd.texture) ? Pd : [...Pd, Cd.texture];
                              return (0, Ld.jsxs)("section", {
                                ref: gd,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, Ld.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, Ld.jsxs)("div", {
                                    children: [(0, Ld.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, Ld.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, Ld.jsx)(Gd, {
                                    text: qd,
                                    label: "Copy code"
                                  })]
                                }), (0, Ld.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, Ld.jsx)("button", {
                                    type: "button",
                                    className: Wd()("DocsVariantChip", {
                                      Active: "example" === od
                                    }),
                                    onClick: () => {
                                      vd("example")
                                    },
                                    children: "Example"
                                  }), gN.filter((dd => null !== Tk(dd))).map((dd => (0, Ld.jsx)("button", {
                                    type: "button",
                                    className: Wd()("DocsVariantChip", {
                                      Active: od === dd
                                    }),
                                    onClick: () => {
                                      vd(dd)
                                    },
                                    children: dd
                                  }, dd))), (0, Ld.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== od && void 0 !== od ? od : "custom",
                                    "aria-label": "Preset",
                                    onChange: dd => {
                                      vd(dd.target.value)
                                    },
                                    children: [(0, Ld.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === od && (0, Ld.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), yk.c.map((dd => (0, Ld.jsx)("option", {
                                      value: dd,
                                      children: dd
                                    }, dd)))]
                                  })]
                                }), (0, Ld.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, Ld.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, Ld.jsx)(ZN, {
                                      opts: Cd,
                                      textureUrl: null !== (kd = null === Zd || void 0 === Zd ? void 0 : Zd.getParticleTextureUrl(Cd.texture)) && void 0 !== kd ? kd : null,
                                      burst: Qd,
                                      paused: Rd
                                    }), (0, Ld.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, Ld.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Od(Qd + 1)
                                        },
                                        children: [(0, Ld.jsx)(ed, {
                                          name: "replay"
                                        }), (0, Ld.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, Ld.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": Rd,
                                        onClick: () => {
                                          Id(!Rd)
                                        },
                                        children: [(0, Ld.jsx)(ed, {
                                          name: Rd ? "play" : "pause"
                                        }), (0, Ld.jsx)("span", {
                                          children: Rd ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, Ld.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, Ld.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Ld.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, Ld.jsx)("span", {
                                          children: "Texture"
                                        }), (0, Ld.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Cd.texture
                                        })]
                                      }), (0, Ld.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: sd.map((dd => {
                                          var Jd;
                                          const kd = null !== (Jd = null === Zd || void 0 === Zd ? void 0 : Zd.getParticleTextureUrl(dd)) && void 0 !== Jd ? Jd : null;
                                          return (0, Ld.jsx)("button", {
                                            type: "button",
                                            className: Wd()("DocsParticleTexture", {
                                              Active: Cd.texture === dd
                                            }),
                                            title: dd,
                                            "aria-label": dd,
                                            "aria-pressed": Cd.texture === dd,
                                            onClick: () => {
                                              xd({
                                                texture: dd
                                              })
                                            },
                                            children: kd ? (0, Ld.jsx)("img", {
                                              src: kd,
                                              alt: ""
                                            }) : (0, Ld.jsx)(ed, {
                                              name: "image"
                                            })
                                          }, dd)
                                        }))
                                      })]
                                    }), (0, Ld.jsx)(JN, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Cd.manualEmitCount,
                                      onChange: dd => {
                                        xd({
                                          manualEmitCount: dd
                                        })
                                      }
                                    }), (0, Ld.jsx)(dN, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Cd.minLifeTime,
                                      high: Cd.maxLifeTime,
                                      onChange: (dd, Jd) => {
                                        xd({
                                          minLifeTime: dd,
                                          maxLifeTime: Jd
                                        })
                                      }
                                    }), (0, Ld.jsx)(dN, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Cd.minEmitPower,
                                      high: Cd.maxEmitPower,
                                      onChange: (dd, Jd) => {
                                        xd({
                                          minEmitPower: dd,
                                          maxEmitPower: Jd
                                        })
                                      }
                                    }), (0, Ld.jsx)(dN, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Cd.minSize,
                                      high: Cd.maxSize,
                                      onChange: (dd, Jd) => {
                                        xd({
                                          minSize: dd,
                                          maxSize: Jd
                                        })
                                      }
                                    }), (0, Ld.jsx)(JN, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Nd = Cd.gravity[1]) && void 0 !== Nd ? Nd : 0,
                                      onChange: dd => {
                                        var Jd, kd;
                                        xd({
                                          gravity: [null !== (Jd = Cd.gravity[0]) && void 0 !== Jd ? Jd : 0, dd, null !== (kd = Cd.gravity[2]) && void 0 !== kd ? kd : 0]
                                        })
                                      }
                                    }), (0, Ld.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Ld.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, Ld.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, Ld.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Cd.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: dd => {
                                          xd({
                                            blendMode: Number(dd.target.value)
                                          })
                                        },
                                        children: CN.map((dd => {
                                          let {
                                            mode: Jd,
                                            label: kd
                                          } = dd;
                                          return (0, Ld.jsx)("option", {
                                            value: Jd,
                                            children: kd
                                          }, Jd)
                                        }))
                                      })]
                                    }), (0, Ld.jsx)(kN, {
                                      opts: Cd,
                                      onChange: dd => {
                                        xd({
                                          colorGradients: dd
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, Ld.jsx)(Bd, {
                                  code: qd,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var oN = kd(4326),
                            lN = kd(1904);

                          function QN(dd, Jd) {
                            return dd ? oN.b.includes(Jd) ? dd.getIngameIconUrl(Jd) : dd.getItemIconUrl(Jd) : null
                          }

                          function LN(dd) {
                            var Jd, kd, pd;
                            let {
                              part: Nd,
                              assets: Pd
                            } = dd;
                            const Zd = QN(Pd, Nd.icon),
                              gd = null !== (Jd = null === (kd = Nd.style) || void 0 === kd ? void 0 : kd.fontSize) && void 0 !== Jd ? Jd : "1.8em",
                              Cd = (0, UJ.Ob)(Nd.style);
                            return (0, Ld.jsxs)("span", {
                              className: Wd()("DocsBloxdTextIcon", {
                                Missing: !Zd
                              }),
                              style: {
                                width: gd,
                                height: gd,
                                opacity: null === (pd = Nd.style) || void 0 === pd ? void 0 : pd.opacity
                              },
                              title: Zd ? void 0 : `No Bloxd icon, item or block is called "${Nd.icon}"`,
                              children: [Zd && Cd && (0, Ld.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Cd,
                                  maskImage: `url("${Zd}")`,
                                  WebkitMaskImage: `url("${Zd}")`
                                }
                              }), Zd ? (0, Ld.jsx)("img", {
                                src: Zd,
                                alt: "",
                                className: Wd()({
                                  Tinted: Cd
                                })
                              }) : (0, Ld.jsx)(ed, {
                                name: "image"
                              })]
                            })
                          }

                          function ON(dd) {
                            let {
                              parts: Jd,
                              className: kd
                            } = dd;
                            const pd = xp(),
                              Nd = [];
                            let Pd = [];
                            const Zd = dd => {
                              Pd.length > 0 && (Nd.push((0, Ld.jsx)(lN.c, {
                                text: Pd
                              }, `run-${dd}`)), Pd = [])
                            };
                            return Jd.forEach(((dd, Jd) => {
                              "icon" !== cJ(dd) || DJ(dd.icon) ? Pd.push(dd) : (Zd(Jd), Nd.push((0, Ld.jsx)(LN, {
                                part: dd,
                                assets: pd
                              }, `icon-${Jd}`)))
                            })), Zd(Jd.length), (0, Ld.jsx)("div", {
                              className: Wd()("DocsStyledTextPreview", kd),
                              children: Nd
                            })
                          }
                          const eN = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let RN = null;

                          function IN(dd) {
                            if (RN ??= document.createElement("canvas").getContext("2d"), !RN) return "#000000";
                            RN.fillStyle = "#000000", RN.fillStyle = dd;
                            const Jd = RN.fillStyle;
                            return Jd.startsWith("#") ? Jd : "#000000"
                          }

                          function GN(dd) {
                            let {
                              value: Jd,
                              label: kd,
                              onChange: pd
                            } = dd;
                            return (0, Ld.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, Ld.jsx)("input", {
                                type: "color",
                                value: IN(Jd),
                                "aria-label": `${kd} picker`,
                                onChange: dd => {
                                  pd(dd.target.value)
                                }
                              }), (0, Ld.jsx)("input", {
                                type: "text",
                                value: Jd,
                                placeholder: "#ffb914 or gold",
                                "aria-label": kd,
                                spellCheck: !1,
                                onChange: dd => {
                                  pd(dd.target.value)
                                }
                              })]
                            })
                          }

                          function vN(dd) {
                            let {
                              value: Jd,
                              fontAwesomeIcons: kd,
                              onChange: Nd
                            } = dd;
                            const Pd = xp(),
                              [Zd, gd] = (0, pd.useState)(DJ(Jd) ? "fontAwesome" : "bloxd"),
                              [Cd, Kd] = (0, pd.useState)(""),
                              od = Cd.trim().toLowerCase(),
                              ld = "bloxd" === Zd ? oN.b : kd,
                              Qd = od ? ld.filter((dd => dd.toLowerCase().includes(od))) : ld;
                            return (0, Ld.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, Ld.jsx)("input", {
                                type: "text",
                                value: Jd,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: dd => {
                                  Nd(dd.target.value)
                                }
                              }), (0, Ld.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, Ld.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((dd => (0, Ld.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": Zd === dd,
                                    className: Wd()("DocsVariantChip", {
                                      Active: Zd === dd
                                    }),
                                    onClick: () => {
                                      gd(dd)
                                    },
                                    children: "bloxd" === dd ? `Bloxd icons (${oN.b.length})` : `Font Awesome (${kd.length})`
                                  }, dd))), (0, Ld.jsx)("input", {
                                    type: "search",
                                    value: Cd,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: dd => {
                                      Kd(dd.target.value)
                                    }
                                  })
                                ]
                              }), (0, Ld.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Qd.map((dd => {
                                  const kd = "bloxd" === Zd ? QN(Pd, dd) : null;
                                  return (0, Ld.jsx)("button", {
                                    type: "button",
                                    title: dd,
                                    "aria-label": dd,
                                    "aria-pressed": dd === Jd,
                                    className: Wd()("DocsIconPickerOption", {
                                      Active: dd === Jd
                                    }),
                                    onClick: () => {
                                      Nd(dd)
                                    },
                                    children: "fontAwesome" === Zd ? (0, Ld.jsx)(qk.e, {
                                      name: dd
                                    }) : kd ? (0, Ld.jsx)("img", {
                                      src: kd,
                                      alt: ""
                                    }) : (0, Ld.jsx)(ed, {
                                      name: "image"
                                    })
                                  }, dd)
                                })), 0 === Qd.length && (0, Ld.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Cd, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function xN(dd) {
                            let {
                              property: Jd,
                              value: kd,
                              fontAwesomeIcons: pd,
                              onChange: Nd
                            } = dd;
                            const {
                              field: Wd,
                              label: Pd
                            } = Jd, Zd = dd => "" !== dd || Jd.isRequired ? dd : void 0;
                            switch (Wd.kind) {
                              case "text":
                                return Wd.multiline ? (0, Ld.jsx)("textarea", {
                                  value: String(null !== kd && void 0 !== kd ? kd : ""),
                                  rows: 2,
                                  "aria-label": Pd,
                                  onChange: dd => {
                                    Nd(dd.target.value)
                                  }
                                }) : (0, Ld.jsx)("input", {
                                  type: "text",
                                  value: String(null !== kd && void 0 !== kd ? kd : ""),
                                  "aria-label": Pd,
                                  onChange: dd => {
                                    Nd(Zd(dd.target.value))
                                  }
                                });
                              case "size":
                                return (0, Ld.jsx)("input", {
                                  type: "text",
                                  value: String(null !== kd && void 0 !== kd ? kd : ""),
                                  placeholder: Jd.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Pd,
                                  spellCheck: !1,
                                  onChange: dd => {
                                    Nd(Zd(dd.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, Ld.jsx)(GN, {
                                  value: String(null !== kd && void 0 !== kd ? kd : ""),
                                  label: Pd,
                                  onChange: dd => {
                                    Nd(Zd(dd))
                                  }
                                });
                              case "colours": {
                                const dd = Array.isArray(kd) ? kd : [],
                                  Jd = dd => {
                                    Nd(dd.length > 0 ? dd : void 0)
                                  };
                                return (0, Ld.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [dd.map(((kd, pd) => (0, Ld.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, Ld.jsx)(GN, {
                                      value: kd,
                                      label: `${Pd} ${pd+1}`,
                                      onChange: kd => {
                                        Jd(dd.map(((dd, Jd) => Jd === pd ? kd : dd)))
                                      }
                                    }), (0, Ld.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${pd+1}`,
                                      onClick: () => {
                                        Jd(dd.filter(((dd, Jd) => Jd !== pd)))
                                      },
                                      children: (0, Ld.jsx)(ed, {
                                        name: "cross"
                                      })
                                    })]
                                  }, pd))), (0, Ld.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var kd;
                                      Jd([...dd, null !== (kd = dd.at(-1)) && void 0 !== kd ? kd : "#ffffff"])
                                    },
                                    children: [(0, Ld.jsx)(ed, {
                                      name: "plus"
                                    }), 0 === dd.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var gd;
                                const dd = "number" === typeof kd ? kd : Number(null !== (gd = Jd.defaultText) && void 0 !== gd ? gd : 0);
                                return (0, Ld.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, Ld.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: dd,
                                    "aria-label": Pd,
                                    onChange: dd => {
                                      Nd(Number(dd.target.value))
                                    }
                                  }), (0, Ld.jsx)("output", {
                                    children: dd.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, Ld.jsxs)("select", {
                                  value: String(null !== kd && void 0 !== kd ? kd : ""),
                                  "aria-label": Pd,
                                  onChange: dd => {
                                    Nd(Zd(dd.target.value))
                                  },
                                  children: [!Jd.isRequired && (0, Ld.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", Jd.defaultText, ")"]
                                  }), Wd.options.map((dd => (0, Ld.jsx)("option", {
                                    value: dd,
                                    children: dd
                                  }, dd)))]
                                });
                              case "icon":
                                return (0, Ld.jsx)(vN, {
                                  value: String(null !== kd && void 0 !== kd ? kd : ""),
                                  fontAwesomeIcons: pd,
                                  onChange: Nd
                                })
                            }
                          }

                          function qN(dd) {
                            let Jd;
                            try {
                              Jd = JSON.parse(dd)
                            } catch (kd) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${kd.message}`
                              }
                            }
                            return pk(Jd) ? {
                              part: Jd,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function BN(dd) {
                            let {
                              parts: Jd,
                              index: kd,
                              fontAwesomeIcons: Nd,
                              onChange: Wd,
                              RY: Pd,
                              onClose: Zd
                            } = dd;
                            const gd = (0, pd.useContext)(OJ),
                              Kd = (0, pd.useRef)(null),
                              od = Jd[kd],
                              ld = cJ(od),
                              [Qd, Od] = (0, pd.useState)((() => JSON.stringify(od, null, 2))),
                              Rd = (0, pd.useMemo)((() => "other" === ld ? qN(Qd).error : null), [ld, Qd]);
                            (0, pd.useEffect)((() => {
                              var dd;
                              null === (dd = Kd.current) || void 0 === dd || dd.focus()
                            }), []);
                            const Id = (0, Ld.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: dd => {
                                dd.target === dd.currentTarget && Zd()
                              },
                              children: (0, Ld.jsxs)("div", {
                                ref: Kd,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${kd+1}: ${TJ[ld]}`,
                                tabIndex: -1,
                                onKeyDown: dd => {
                                  "Escape" === dd.key ? (dd.stopPropagation(), Zd()) : "Tab" === dd.key && Kd.current && function(dd, Jd) {
                                    const kd = Array.from(dd.querySelectorAll(YJ)),
                                      pd = kd[0],
                                      Nd = kd.at(-1);
                                    if (!pd || !Nd) return;
                                    const Wd = document.activeElement;
                                    !Jd.shiftKey || Wd !== pd && Wd !== dd ? Jd.shiftKey || Wd !== Nd || (Jd.preventDefault(), pd.focus()) : (Jd.preventDefault(), Nd.focus())
                                  }(Kd.current, dd)
                                },
                                children: [(0, Ld.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, Ld.jsxs)("div", {
                                    children: [(0, Ld.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", kd + 1]
                                    }), (0, Ld.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: TJ[ld]
                                    })]
                                  }), (0, Ld.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: Zd,
                                    children: (0, Ld.jsx)(ed, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, Ld.jsx)(ON, {
                                  parts: Jd,
                                  className: "DocsTextDialogPreview"
                                }), (0, Ld.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === ld ? (0, Ld.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, Ld.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, Ld.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Qd,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: dd => {
                                        Od(dd.target.value);
                                        const Jd = qN(dd.target.value);
                                        null !== Jd.part && Wd(Jd.part)
                                      }
                                    }), Rd && (0, Ld.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: Rd
                                    })]
                                  }) : rJ[ld].map((dd => {
                                    const Jd = tJ(od, dd.path),
                                      kd = dd.isRequired ? JSON.stringify(zJ(od, dd.path)) === JSON.stringify(od) : void 0 === Jd;
                                    return (0, Ld.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, Ld.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, Ld.jsx)("span", {
                                          children: dd.label
                                        }), (0, Ld.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: kd,
                                          "aria-label": `Reset ${dd.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Wd(zJ(od, dd.path))
                                          },
                                          children: [(0, Ld.jsx)(ed, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, Ld.jsx)(xN, {
                                        property: dd,
                                        value: Jd,
                                        fontAwesomeIcons: Nd,
                                        onChange: Jd => {
                                          Wd(VJ(od, dd.path, Jd))
                                        }
                                      }), !dd.isRequired && (0, Ld.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", dd.defaultText]
                                      })]
                                    }, dd.path.join("."))
                                  }))
                                }), (0, Ld.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, Ld.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Pd,
                                    children: [(0, Ld.jsx)(ed, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, Ld.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: Zd,
                                    children: "Done"
                                  })]
                                }), (0, Ld.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: eN.map((dd => (0, Ld.jsx)("option", {
                                    value: dd
                                  }, dd)))
                                })]
                              })
                            });
                            return gd ? (0, Cd.createPortal)(Id, gd) : Id
                          }
                          const sN = [{
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
                            iN = Object.keys(EJ);

                          function aN(dd) {
                            let {
                              fontAwesomeIcons: Jd
                            } = dd;
                            const [kd, Nd] = (0, pd.useState)(sN[0].parts), [Pd, Zd] = (0, pd.useState)((() => dk(sN[0].parts))), [gd, Cd] = (0, pd.useState)(null), [Kd, od] = (0, pd.useState)(!1), [ld, Qd] = (0, pd.useState)(null), [Od, Rd] = (0, pd.useState)(!1), [Id, Gd] = (0, pd.useState)(null), vd = (0, pd.useRef)(null), xd = dk(kd);
                            (0, pd.useLayoutEffect)((() => {
                              var dd;
                              if (!Id) return;
                              const Jd = dd => {
                                  var Jd;
                                  return null === (Jd = vd.current) || void 0 === Jd ? void 0 : Jd.querySelector(`[data-focus-key="${dd}"]`)
                                },
                                kd = Jd(Id.key);
                              null === (dd = kd && !kd.disabled ? kd : Jd(Id.fallback)) || void 0 === dd || dd.focus(), Gd(null)
                            }), [Id]);
                            const qd = dd => {
                                Nd(dd), Zd(dk(dd)), Cd(null)
                              },
                              sd = dd => {
                                qd(kd.filter(((Jd, kd) => kd !== dd))), Gd({
                                  key: `edit-${Math.min(dd,kd.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              ad = (dd, Jd) => {
                                const pd = [...kd],
                                  [Nd] = pd.splice(dd, 1);
                                pd.splice(dd + Jd, 0, Nd), qd(pd);
                                Gd({
                                  key: `${Jd<0?"up":"down"}-${dd+Jd}`,
                                  fallback: `edit-${dd+Jd}`
                                })
                              };
                            return (0, Ld.jsxs)("section", {
                              ref: vd,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, Ld.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, Ld.jsxs)("div", {
                                  children: [(0, Ld.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, Ld.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, Ld.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: sN.map((dd => (0, Ld.jsx)("button", {
                                  type: "button",
                                  className: Wd()("DocsVariantChip", {
                                    Active: xd === dk(dd.parts)
                                  }),
                                  onClick: () => {
                                    qd(dd.parts)
                                  },
                                  children: dd.label
                                }, dd.label)))
                              }), (0, Ld.jsx)(ON, {
                                parts: kd,
                                className: "DocsTextEditorPreview"
                              }), (0, Ld.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, Ld.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Ld.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, Ld.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [kd.map(((dd, Jd) => {
                                      const pd = cJ(dd);
                                      return (0, Ld.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, Ld.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${Jd}`,
                                          "aria-label": `Edit part ${Jd+1}, ${TJ[pd]}`,
                                          onClick: () => {
                                            Qd(Jd)
                                          },
                                          children: [(0, Ld.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: TJ[pd]
                                          }), (0, Ld.jsx)(ON, {
                                            parts: [dd],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== pd && (0, Ld.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: HJ(dd)
                                          })]
                                        }), (0, Ld.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, Ld.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Jd+1} up`,
                                            "data-focus-key": `up-${Jd}`,
                                            disabled: 0 === Jd,
                                            onClick: () => {
                                              ad(Jd, -1)
                                            },
                                            children: (0, Ld.jsx)(ed, {
                                              name: "chevron-up"
                                            })
                                          }), (0, Ld.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Jd+1} down`,
                                            "data-focus-key": `down-${Jd}`,
                                            disabled: Jd === kd.length - 1,
                                            onClick: () => {
                                              ad(Jd, 1)
                                            },
                                            children: (0, Ld.jsx)(ed, {
                                              name: "chevron-down"
                                            })
                                          }), (0, Ld.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${Jd+1}`,
                                            onClick: () => {
                                              sd(Jd)
                                            },
                                            children: (0, Ld.jsx)(ed, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, Jd)
                                    })), 0 === kd.length && (0, Ld.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, Ld.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: dd => {
                                      "Escape" === dd.key && Od && (dd.stopPropagation(), Rd(!1), Gd({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, Ld.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Od,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        Rd(!Od)
                                      },
                                      children: [(0, Ld.jsx)(ed, {
                                        name: "plus"
                                      }), "Add a part", (0, Ld.jsx)(ed, {
                                        name: Od ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Od && (0, Ld.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: iN.map((dd => (0, Ld.jsx)("li", {
                                        children: (0, Ld.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (dd => {
                                              qd([...kd, EJ[dd]]), Rd(!1), Qd(kd.length)
                                            })(dd)
                                          },
                                          children: TJ[dd]
                                        })
                                      }, dd)))
                                    })]
                                  })]
                                }), (0, Ld.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Ld.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, Ld.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Kd,
                                      onClick: () => {
                                        od(!Kd)
                                      },
                                      children: [(0, Ld.jsx)(ed, {
                                        name: Kd ? "check" : "pencil"
                                      }), Kd ? "Done" : "Edit"]
                                    })]
                                  }), Kd ? (0, Ld.jsxs)(Ld.Fragment, {
                                    children: [(0, Ld.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Pd,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: dd => {
                                        Zd(dd.target.value);
                                        const Jd = Nk(dd.target.value);
                                        Cd(Jd.error), Jd.parts && Nd(Jd.parts)
                                      }
                                    }), gd && (0, Ld.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: gd
                                    })]
                                  }) : (0, Ld.jsx)(Bd, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${xd})`
                                  })]
                                })]
                              }), null !== ld && ld < kd.length && (0, Ld.jsx)(BN, {
                                parts: kd,
                                index: ld,
                                fontAwesomeIcons: Jd,
                                onChange: dd => {
                                  ((dd, Jd) => {
                                    qd(kd.map(((kd, pd) => pd === dd ? Jd : kd)))
                                  })(ld, dd)
                                },
                                RY: () => {
                                  sd(ld), Qd(null)
                                },
                                onClose: () => {
                                  Qd(null), Gd({
                                    key: `edit-${ld}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var MN = kd(4733),
                            FN = kd(4722),
                            YN = kd(4729),
                            mN = kd(4740);
                          const bN = 40,
                            SN = 800,
                            jN = 150,
                            XN = 8e3,
                            fN = 2e3;

                          function nN(dd, Jd) {
                            return 12 * Math.log2(Jd / dd)
                          }

                          function UN(dd, Jd) {
                            return Math.round(dd * 2 ** (Jd / 12) * 10) / 10
                          }

                          function yN(dd) {
                            return `${dd} ms`
                          }

                          function DN(dd) {
                            return `${dd} st`
                          }
                          const TN = [{
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

                          function EN(dd) {
                            let {
                              synth: Jd,
                              onChange: kd
                            } = dd;
                            const pd = (0, MN.k)(Jd);
                            return (0, Ld.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, Ld.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Ld.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, Ld.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, Ld.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, Ld.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, Ld.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: MN.f.map((dd => (0, Ld.jsx)("button", {
                                      type: "button",
                                      className: Wd()("DocsVariantChip", {
                                        Active: Jd.waveform === dd
                                      }),
                                      "aria-pressed": Jd.waveform === dd,
                                      onClick: () => {
                                        kd({
                                          waveform: dd
                                        })
                                      },
                                      children: dd
                                    }, dd)))
                                  })]
                                }), (0, Ld.jsx)(JN, {
                                  label: "Pitch",
                                  min: 0,
                                  max: nN(bN, SN),
                                  step: .1,
                                  value: nN(bN, Jd.pitchHz),
                                  format: () => `${Jd.pitchHz} Hz`,
                                  onChange: dd => {
                                    kd({
                                      pitchHz: UN(bN, dd)
                                    })
                                  }
                                }), (0, Ld.jsx)(JN, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: Jd.syllableMs,
                                  format: yN,
                                  onChange: dd => {
                                    kd({
                                      syllableMs: dd
                                    })
                                  }
                                }), (0, Ld.jsx)(JN, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: Jd.volume,
                                  onChange: dd => {
                                    kd({
                                      volume: dd
                                    })
                                  }
                                })]
                              }), (0, Ld.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Ld.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, Ld.jsx)(JN, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: Jd.durationMs,
                                  format: yN,
                                  onChange: dd => {
                                    kd({
                                      durationMs: dd
                                    })
                                  }
                                }), (0, Ld.jsx)(JN, {
                                  label: "Fade in",
                                  min: 0,
                                  max: pd.durationMs,
                                  step: 1,
                                  value: pd.attackMs,
                                  format: yN,
                                  onChange: dd => {
                                    kd({
                                      attackMs: dd
                                    })
                                  }
                                }), (0, Ld.jsx)(JN, {
                                  label: "Fade out",
                                  min: 0,
                                  max: pd.durationMs - pd.attackMs,
                                  step: 1,
                                  value: pd.releaseMs,
                                  format: yN,
                                  onChange: dd => {
                                    kd({
                                      releaseMs: dd
                                    })
                                  }
                                }), (0, Ld.jsx)(JN, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: Jd.glideSemitones,
                                  format: DN,
                                  onChange: dd => {
                                    kd({
                                      glideSemitones: dd
                                    })
                                  }
                                }), (0, Ld.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, Ld.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== Jd.lowpassHz,
                                    onChange: dd => {
                                      kd({
                                        lowpassHz: dd.target.checked ? fN : null
                                      })
                                    }
                                  }), (0, Ld.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== Jd.lowpassHz && (0, Ld.jsx)(JN, {
                                  label: "Filter",
                                  min: 0,
                                  max: nN(jN, XN),
                                  step: .1,
                                  value: nN(jN, Jd.lowpassHz),
                                  format: () => `${Jd.lowpassHz} Hz`,
                                  onChange: dd => {
                                    kd({
                                      lowpassHz: UN(jN, dd)
                                    })
                                  }
                                })]
                              }), (0, Ld.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Ld.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), TN.map((dd => {
                                  let {
                                    key: pd,
                                    label: Nd,
                                    max: Wd
                                  } = dd;
                                  return (0, Ld.jsx)(JN, {
                                    label: Nd,
                                    min: 0,
                                    max: Wd,
                                    step: .1,
                                    value: Jd.intonation[pd],
                                    format: DN,
                                    onChange: dd => {
                                      kd({
                                        intonation: {
                                          ...Jd.intonation,
                                          [pd]: dd
                                        }
                                      })
                                    }
                                  }, pd)
                                }))]
                              })]
                            })
                          }
                          const cN = Object.keys(MN.i),
                            hN = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function rN(dd) {
                            var Jd;
                            const kd = JSON.stringify((0, MN.k)(dd));
                            return null !== (Jd = cN.find((dd => JSON.stringify((0, MN.k)(MN.i[dd])) === kd))) && void 0 !== Jd ? Jd : null
                          }

                          function uN(dd) {
                            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof dd || null === dd) return JSON.stringify(dd);
                            return `{\n${Object.entries(dd).map((dd=>{let[kd,pd]=dd;return`${Jd}    ${kd}: ${uN(pd,`${Jd}    `)},`})).join("\n")}\n${Jd}}`
                          }

                          function tN(dd, Jd, kd) {
                            const pd = rN(dd),
                              Nd = [`    line: ${JSON.stringify(Jd)},`];
                            return kd && Nd.push(`    speakerName: ${JSON.stringify(kd)},`), Nd.push("    voice,"), `const voice = ${pd?JSON.stringify(pd):uN((0,MN.k)(dd))}\n\napi.setClientOption(playerId, "dialogue", {\n${Nd.join("\n")}\n})`
                          }
                          const VN = 400,
                            zN = 90;
                          let HN = null;

                          function wN(dd, Jd, kd) {
                            return HN ??= new AudioContext, HN.resume(), (0, mN.d)(HN, HN.destination, dd, Jd, kd, (() => {}))
                          }

                          function AN() {
                            const [dd, Jd] = (0, pd.useState)(MN.i.regular), [kd, Nd] = (0, pd.useState)(hN[0]), [Pd, Zd] = (0, pd.useState)("Innkeeper"), [gd, Cd] = (0, pd.useState)(0), Kd = lp((dd => dd.volume)), od = (0, pd.useRef)(null), ld = (0, pd.useRef)(0), Qd = (0, pd.useRef)(0), Od = () => {
                              var dd;
                              null === (dd = od.current) || void 0 === dd || dd.call(od), od.current = null
                            };
                            (0, pd.useEffect)((() => () => {
                              var dd;
                              null === (dd = od.current) || void 0 === dd || dd.call(od), window.clearTimeout(ld.current)
                            }), []);
                            const Rd = (0, pd.useMemo)((() => ({
                                line: kd,
                                speakerName: Pd || void 0,
                                voice: dd
                              })), [kd, Pd, dd]),
                              Id = (0, pd.useRef)(Rd);
                            Id.current = Rd;
                            const vd = rN(dd),
                              xd = dd => {
                                window.clearTimeout(ld.current), Od();
                                const {
                                  plan: Jd,
                                  synth: kd
                                } = (0, YN.d)(dd);
                                kd && (od.current = wN(kd, Jd.blips, Kd)), Cd((dd => dd + 1))
                              },
                              qd = tN(dd, kd, Pd);
                            return (0, Ld.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, Ld.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, Ld.jsxs)("div", {
                                  children: [(0, Ld.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, Ld.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, Ld.jsx)(Gd, {
                                  text: qd,
                                  label: "Copy code"
                                })]
                              }), (0, Ld.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [cN.map((dd => (0, Ld.jsx)("button", {
                                  type: "button",
                                  className: Wd()("DocsVariantChip", {
                                    Active: vd === dd
                                  }),
                                  "aria-pressed": vd === dd,
                                  onClick: () => {
                                    (dd => {
                                      const kd = MN.i[dd];
                                      Jd(kd), xd({
                                        ...Rd,
                                        voice: kd
                                      })
                                    })(dd)
                                  },
                                  children: dd
                                }, dd))), !vd && (0, Ld.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, Ld.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, Ld.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, Ld.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, Ld.jsx)(FN.b, {
                                      display: Rd
                                    }, gd)
                                  }), (0, Ld.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: dd => {
                                      dd.preventDefault(), xd(Rd)
                                    },
                                    children: [(0, Ld.jsx)("input", {
                                      value: kd,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: dd => {
                                        Nd(dd.target.value)
                                      }
                                    }), (0, Ld.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, Ld.jsx)(ed, {
                                        name: "play"
                                      }), (0, Ld.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, Ld.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: hN.map((dd => (0, Ld.jsx)("button", {
                                      type: "button",
                                      className: Wd()("DocsVariantChip", {
                                        Active: kd === dd
                                      }),
                                      onClick: () => {
                                        var Jd;
                                        Nd(Jd = dd), xd({
                                          ...Rd,
                                          line: Jd
                                        })
                                      },
                                      children: dd
                                    }, dd)))
                                  }), (0, Ld.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, Ld.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, Ld.jsx)("input", {
                                      value: Pd,
                                      placeholder: "No name",
                                      onChange: dd => {
                                        Zd(dd.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, Ld.jsx)(EN, {
                                  synth: dd,
                                  onChange: kd => {
                                    const pd = {
                                      ...dd,
                                      ...kd
                                    };
                                    Jd(pd);
                                    const Nd = {
                                        ...Rd,
                                        voice: pd
                                      },
                                      Wd = performance.now();
                                    if (Wd - Qd.current >= zN) {
                                      Qd.current = Wd, Od();
                                      const dd = (0, YN.d)(Nd).plan.blips[0];
                                      dd && (od.current = wN((0, MN.k)(pd), [{
                                        ...dd,
                                        atMs: 0
                                      }], Kd))
                                    }
                                    window.clearTimeout(ld.current), ld.current = window.setTimeout((() => {
                                      xd(Id.current)
                                    }), VN)
                                  }
                                })]
                              }), (0, Ld.jsx)(Bd, {
                                code: qd,
                                lang: "ts"
                              })]
                            })
                          }
                          var dW = kd(4752);
                          const JW = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            kW = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            pW = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${kW}`, "g"), dW.m],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, dW.m]
                            ];

                          function NW(dd) {
                            return `${dd.pageId}#${dd.anchor}`
                          }
                          let WW, PW, ZW;

                          function gW(dd) {
                            const Jd = (0, sd.h)(dd),
                              kd = new Set;
                            for (const [, , pd] of Jd.matchAll(sd.e)) {
                              const dd = pd.startsWith("#") ? cd(pd) : null,
                                Jd = dd ? NW({
                                  pageId: dd.page.id,
                                  anchor: dd.anchor
                                }) : null;
                              null !== Jd && (WW || (WW = new Set(nd.flatMap((dd => Yd(dd.layout) ? Td(dd).sections.map((Jd => NW({
                                pageId: dd.id,
                                anchor: Jd.heading.anchor
                              }))) : [])))), WW).has(Jd) && kd.add(Jd)
                            }
                            for (const [, , pd] of Jd.matchAll(JW)) {
                              const dd = QJ(pd);
                              dd && kd.add(NW(dd))
                            }
                            return kd
                          }

                          function CW(dd, Jd) {
                            const kd = new Set,
                              pd = function(dd) {
                                return dd.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(dd);
                            for (const [, Nd] of pd.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) kd.add(Nd);
                            for (const [Nd, Wd] of pW)
                              for (const [, dd] of(0, dW.f)(pd, Nd, Wd)) Jd.has(dd) && kd.add(dd);
                            return kd
                          }

                          function KW(dd, Jd, kd, pd) {
                            const Nd = dd.get(Jd);
                            Nd ? !pd && Nd.some((dd => dd.pageId === kd.pageId)) || Nd.push(kd) : dd.set(Jd, [kd])
                          }
                          const oW = /^[A-Za-z_$][\w$]*$/;

                          function lW(dd) {
                            return oW.test(dd.name) ? dd.name : "options"
                          }

                          function QW(dd, Jd) {
                            const kd = dd.params.map(lW).join(", ");
                            return Jd ? `${dd.name} = (${kd}) => {\n\t\n}` : `api.${dd.name}(${kd})`
                          }

                          function LW(dd) {
                            let {
                              method: Jd,
                              isCallback: kd
                            } = dd;
                            return (0, Ld.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, Ld.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [kd ? (0, Ld.jsxs)(Ld.Fragment, {
                                  children: [(0, Ld.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Jd.name
                                  }), (0, Ld.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, Ld.jsxs)(Ld.Fragment, {
                                  children: [(0, Ld.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, Ld.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Jd.name
                                  }), (0, Ld.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), Jd.params.map(((dd, kd) => (0, Ld.jsxs)(pd.Fragment, {
                                  children: [kd > 0 && (0, Ld.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, Ld.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${Jd.name}-${lW(dd)}`,
                                    children: dd.name
                                  })]
                                }, dd.name))), (0, Ld.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: kd ? ") => " : ")"
                                }), kd && !Jd.returns && (0, Ld.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), Jd.returns && Jd.returns.type && (0, Ld.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!kd && (0, Ld.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, Ld.jsx)(aJ, {
                                  type: Jd.returns.type
                                })]
                              })]
                            })
                          }

                          function OW(dd) {
                            let {
                              title: Jd,
                              references: kd
                            } = dd;
                            const Nd = (0, pd.useContext)(LJ);
                            return (0, Ld.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, Ld.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: Jd
                              }), kd.map((dd => (0, Ld.jsx)(Pd.d, {
                                to: rd(Nd, yd(dd.pageId), dd.anchor),
                                children: dd.label
                              }, `${dd.pageId}#${dd.anchor}`)))]
                            })
                          }

                          function eW(dd) {
                            var Jd, kd;
                            let {
                              pageId: pd,
                              anchor: Nd
                            } = dd;
                            const Wd = NW({
                                pageId: pd,
                                anchor: Nd
                              }),
                              Pd = null !== (Jd = function() {
                                if (!ZW) {
                                  ZW = new Map;
                                  const pd = new Set(nd.filter((dd => "callbacks" === dd.layout)).flatMap((dd => Td(dd).sections.map((dd => dd.heading.text)))));
                                  for (const Nd of nd)
                                    if ("article" === Nd.layout || "snippets" === Nd.layout)
                                      for (const Wd of (0, sd.t)(Td(Nd)))
                                        for (const {
                                            code: Pd
                                          }
                                          of(0, sd.k)(Wd.blocks))
                                          for (const Zd of CW(Pd, pd)) {
                                            const pd = lJ().get(Zd);
                                            if (pd) {
                                              var dd, Jd, kd;
                                              const Pd = {
                                                pageId: Nd.id,
                                                anchor: null !== (dd = null === (Jd = Wd.heading) || void 0 === Jd ? void 0 : Jd.anchor) && void 0 !== dd ? dd : "",
                                                label: null !== (kd = Nd.navTitle) && void 0 !== kd ? kd : Nd.title
                                              };
                                              KW(ZW, NW(pd), Pd, !1)
                                            }
                                          }
                                }
                                return ZW
                              }().get(Wd)) && void 0 !== Jd ? Jd : [],
                              Zd = null !== (kd = function() {
                                if (!PW) {
                                  PW = new Map;
                                  const dd = yd("changelog");
                                  for (const Jd of Td(dd).sections) {
                                    const kd = new Set(Jd.blocks.flatMap((dd => [...gW(dd)])));
                                    for (const pd of kd) {
                                      const kd = {
                                        pageId: dd.id,
                                        anchor: Jd.heading.anchor,
                                        label: Jd.heading.text
                                      };
                                      KW(PW, pd, kd, !0)
                                    }
                                  }
                                }
                                return PW
                              }().get(Wd)) && void 0 !== kd ? kd : [];
                            return 0 === Pd.length && 0 === Zd.length ? null : (0, Ld.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Pd.length > 0 && (0, Ld.jsx)(OW, {
                                title: "Used in",
                                references: Pd
                              }), Zd.length > 0 && (0, Ld.jsx)(OW, {
                                title: "Changelog",
                                references: Zd
                              })]
                            })
                          }

                          function RW(dd) {
                            let {
                              method: Jd,
                              pageId: kd,
                              anchor: pd,
                              isCallback: Nd
                            } = dd;
                            const Wd = Nd ? void 0 : gJ().get(Jd.name),
                              Pd = Jd.description.length > 0 || null === Wd || void 0 === Wd || !Wd.description ? Jd.description : (0, sd.y)(Wd.description);
                            return (0, Ld.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, Ld.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Ld.jsx)(Kk, {
                                  level: 2,
                                  text: Jd.name,
                                  anchor: pd,
                                  className: "DocsCardTitle"
                                }), (0, Ld.jsx)(Gd, {
                                  text: QW(Jd, Nd),
                                  label: Nd ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Ld.jsx)(LW, {
                                method: Jd,
                                isCallback: Nd
                              }), Wd && null !== Wd.deprecation && (0, Ld.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, Ld.jsx)("strong", {
                                  children: "Deprecated"
                                }), Wd.deprecation && (0, Ld.jsxs)(Ld.Fragment, {
                                  children: [": ", (0, Ld.jsx)(BJ, {
                                    text: (Zd = Wd.deprecation, (0, dW.s)(Zd, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, dW.k)("`\\w"), (dd => {
                                      let [Jd] = dd;
                                      return lJ().has(Jd) ? `\`${Jd}\`` : Jd
                                    })))
                                  })]
                                })]
                              }), Pd.length > 0 && (0, Ld.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Ld.jsx)(Ok, {
                                  blocks: Pd
                                })
                              }), Jd.params.length > 0 && (0, Ld.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Ld.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, Ld.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: Jd.params.map((dd => (0, Ld.jsxs)("div", {
                                    id: `${Jd.name}-${lW(dd)}`,
                                    className: "DocsParam",
                                    children: [(0, Ld.jsxs)("dt", {
                                      children: [(0, Ld.jsx)("code", {
                                        className: "DocsParamName",
                                        children: dd.name
                                      }), (0, Ld.jsx)(aJ, {
                                        type: dd.type
                                      })]
                                    }), dd.description && (0, Ld.jsx)("dd", {
                                      children: (0, Ld.jsx)(BJ, {
                                        text: dd.description
                                      })
                                    })]
                                  }, dd.name)))
                                })]
                              }), Jd.returns && (Jd.returns.type || Jd.returns.description.length > 0) && (0, Ld.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Ld.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, Ld.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [Jd.returns.type && (0, Ld.jsx)(aJ, {
                                    type: Jd.returns.type
                                  }), Jd.returns.description.length > 0 && (0, Ld.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, Ld.jsx)(Ok, {
                                      blocks: Jd.returns.description
                                    })
                                  })]
                                })]
                              }), (0, Ld.jsx)(eW, {
                                pageId: kd,
                                anchor: pd
                              })]
                            });
                            var Zd
                          }

                          function IW(dd) {
                            var Jd;
                            return null !== dd.defaultValue && "undefined" !== dd.defaultValue ? dd.defaultValue : null !== (Jd = dd.example) && void 0 !== Jd ? Jd : "value"
                          }

                          function GW(dd) {
                            let {
                              setting: Jd,
                              pageId: kd,
                              anchor: pd,
                              setterSnippet: Nd
                            } = dd;
                            const Wd = null === Jd.defaultValue ? null : IJ(Jd.defaultValue);
                            return (0, Ld.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, Ld.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Ld.jsx)(Kk, {
                                  level: 2,
                                  text: Jd.name,
                                  anchor: pd,
                                  className: "DocsCardTitle"
                                }), (0, Ld.jsx)(Gd, {
                                  text: Nd(Jd.name, IW(Jd)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Ld.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, Ld.jsxs)("div", {
                                  children: [(0, Ld.jsx)("dt", {
                                    children: "Type"
                                  }), (0, Ld.jsx)("dd", {
                                    children: (0, Ld.jsx)(aJ, {
                                      type: Jd.type
                                    })
                                  })]
                                }), null !== Jd.defaultValue && (0, Ld.jsxs)("div", {
                                  children: [(0, Ld.jsx)("dt", {
                                    children: "Default"
                                  }), (0, Ld.jsx)("dd", {
                                    children: (0, Ld.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Wd && (0, Ld.jsx)(GJ, {
                                        colour: Wd
                                      }), Jd.defaultValue]
                                    })
                                  })]
                                }), null !== Jd.example && (0, Ld.jsxs)("div", {
                                  children: [(0, Ld.jsx)("dt", {
                                    children: "Example"
                                  }), (0, Ld.jsx)("dd", {
                                    children: (0, Ld.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: Jd.example
                                    })
                                  })]
                                })]
                              }), Jd.description.length > 0 && (0, Ld.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Ld.jsx)(Ok, {
                                  blocks: Jd.description
                                })
                              }), (0, Ld.jsx)(eW, {
                                pageId: kd,
                                anchor: pd
                              })]
                            })
                          }

                          function vW(dd) {
                            let {
                              section: Jd
                            } = dd;
                            return (0, Ld.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, Ld.jsx)(Kk, {
                                level: 2,
                                text: Jd.heading.text,
                                anchor: Jd.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, Ld.jsx)("div", {
                                className: "DocsProse",
                                children: (0, Ld.jsx)(Ok, {
                                  blocks: Jd.blocks
                                })
                              })]
                            })
                          }

                          function xW(dd) {
                            let {
                              section: Jd
                            } = dd;
                            return (0, Ld.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Ld.jsx)(Kk, {
                                level: Jd.heading.level,
                                text: Jd.heading.text,
                                anchor: Jd.heading.anchor
                              }), (0, Ld.jsx)(Ok, {
                                blocks: Jd.blocks
                              })]
                            })
                          }
                          const qW = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function BW(dd) {
                            let {
                              page: Jd,
                              section: kd
                            } = dd;
                            if ("methods" === Jd.layout || "callbacks" === Jd.layout) return (0, Ld.jsx)(RW, {
                              method: ik(kd),
                              pageId: Jd.id,
                              anchor: kd.heading.anchor,
                              isCallback: "callbacks" === Jd.layout
                            });
                            if ("settings" === Jd.layout) {
                              const dd = function(dd) {
                                const Jd = {
                                  name: dd.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const pd of dd.blocks) {
                                  var kd;
                                  if (sk(pd)) continue;
                                  const dd = "paragraph" === pd.kind ? pd.text.match(ak) : null;
                                  if (!dd) {
                                    Jd.description.push(pd);
                                    continue
                                  }
                                  const Nd = null !== (kd = Bk(dd[2])) && void 0 !== kd ? kd : dd[2];
                                  "Type" === dd[1] ? Jd.type = Nd : "Default" === dd[1] ? Jd.defaultValue = Nd : "" !== Nd && (Jd.example = Nd)
                                }
                                return Jd.type ? Jd : null
                              }(kd);
                              if (dd) return (0, Ld.jsx)(GW, {
                                setting: dd,
                                pageId: Jd.id,
                                anchor: kd.heading.anchor,
                                setterSnippet: Jd.setterSnippet
                              })
                            }
                            return "snippets" === Jd.layout ? (0, Ld.jsx)(vW, {
                              section: kd
                            }) : "changelog" === Jd.layout ? (0, Ld.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, Ld.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, Ld.jsx)(Kk, {
                                  level: 2,
                                  text: kd.heading.text,
                                  anchor: kd.heading.anchor
                                })
                              }), (0, Ld.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, Ld.jsx)(Ok, {
                                  blocks: Mk(kd.blocks)
                                })
                              })]
                            }) : Jd.gallery ? (0, Ld.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Ld.jsx)(Kk, {
                                level: kd.heading.level,
                                text: kd.heading.text,
                                anchor: kd.heading.anchor
                              }), (0, Ld.jsx)(Fp, {
                                kind: Jd.gallery,
                                content: Td(Jd),
                                blocks: kd.blocks
                              })]
                            }) : (0, Ld.jsx)(xW, {
                              section: kd
                            })
                          }

                          function sW(dd) {
                            let {
                              page: Jd,
                              onTocChange: kd
                            } = dd;
                            const Nd = Td(Jd),
                              [Wd, Pd] = (0, pd.useState)(""),
                              Zd = "article" !== Jd.layout,
                              gd = Ik(Jd.gallery) ? Jd.gallery : null,
                              Cd = null !== gd,
                              Kd = Wd.trim().toLowerCase(),
                              od = (0, pd.useRef)(null),
                              ld = (0, pd.useCallback)((dd => {
                                var Jd;
                                null === (Jd = od.current) || void 0 === Jd || Jd.preview(dd)
                              }), []),
                              Qd = (0, pd.useMemo)((() => {
                                if (!Jd.hasParticlePlayground) return [];
                                const dd = bk(Nd.intro).find((dd => "names" === dd.kind && !dd.names.some((dd => null !== Tk(dd.name)))));
                                return "names" === (null === dd || void 0 === dd ? void 0 : dd.kind) ? dd.names.map((dd => dd.name)) : []
                              }), [Jd, Nd]),
                              Od = (0, pd.useMemo)((() => {
                                if (!Jd.hasTextPlayground) return [];
                                const dd = Nd.sections.flatMap((dd => dd.blocks.flatMap((dd => {
                                  var Jd;
                                  return (null !== (Jd = mk(dd)) && void 0 !== Jd ? Jd : []).flatMap((dd => DJ(dd.name) ? [dd.name] : []))
                                }))));
                                return [...new Set(dd)]
                              }), [Jd, Nd]),
                              ed = (0, pd.useMemo)((() => Kd ? Nd.sections.filter((dd => function(dd, Jd) {
                                return !!dd.heading.text.toLowerCase().includes(Jd) || dd.blocks.some((dd => (0, sd.h)(dd).toLowerCase().includes(Jd)))
                              }(dd, Kd))) : Nd.sections), [Nd, Kd]),
                              Rd = (0, pd.useMemo)((() => function(dd, Jd) {
                                return "article" !== dd.layout ? Jd.map((dd => ({
                                  anchor: dd.heading.anchor,
                                  text: dd.heading.text,
                                  level: 2
                                }))) : Jd.flatMap((dd => {
                                  const Jd = dd.blocks.flatMap((dd => "heading" === dd.kind && 3 === dd.level ? [{
                                    anchor: dd.anchor,
                                    text: dd.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: dd.heading.anchor,
                                    text: dd.heading.text,
                                    level: 2
                                  }, ...Jd]
                                }))
                              }(Jd, ed)), [Jd, ed]);
                            return (0, pd.useEffect)((() => {
                              kd(Rd)
                            }), [Rd, kd]), (0, Ld.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, Ld.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, Ld.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Nd.title || Jd.title
                                }), (0, Ld.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: Jd.summary
                                }), (0, Ld.jsx)(Hp, {
                                  page: Jd
                                }), Zd && (0, Ld.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, Ld.jsxs)("span", {
                                    children: [(0, Ld.jsx)("strong", {
                                      children: Nd.sections.length
                                    }), " ", qW[Jd.layout]]
                                  })
                                })]
                              }), "" === Jd.slug && (0, Ld.jsx)(mp, {}), gd && (0, Ld.jsx)(Xp, {
                                kind: gd
                              }, gd), Jd.hasParticlePlayground && (0, Ld.jsx)(KN, {
                                ref: od,
                                textures: Qd
                              }), !Cd && Nd.intro.length > 0 && (0, Ld.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: Jd.gallery ? (0, Ld.jsx)(Gp.Provider, {
                                  value: Jd.hasParticlePlayground ? ld : null,
                                  children: (0, Ld.jsx)(Fp, {
                                    kind: Jd.gallery,
                                    content: Nd,
                                    blocks: Nd.intro
                                  })
                                }) : (0, Ld.jsx)(Ok, {
                                  blocks: Mk(Nd.intro)
                                })
                              }), Jd.hasTextPlayground && (0, Ld.jsx)(aN, {
                                fontAwesomeIcons: Od
                              }), Jd.hasVoicePlayground && (0, Ld.jsx)(AN, {}), Jd.childPageIds && (0, Ld.jsx)(mp, {
                                cards: Jd.childPageIds.map((dd => ({
                                  pageId: dd
                                }))),
                                label: Jd.title
                              }), Zd && (0, Ld.jsx)(xk, {
                                className: "DocsFilterBar",
                                value: Wd,
                                placeholder: `Filter ${Nd.sections.length} ${qW[Jd.layout]}\u2026`,
                                label: `Filter ${qW[Jd.layout]}`,
                                onChange: Pd,
                                count: Kd ? {
                                  visible: ed.length,
                                  total: Nd.sections.length
                                } : null
                              }), !Cd && (0, Ld.jsxs)("div", {
                                className: `DocsSections Layout-${Jd.layout}`,
                                children: [ed.map((dd => (0, Ld.jsx)(BW, {
                                  page: Jd,
                                  section: dd
                                }, dd.heading.anchor))), 0 === ed.length && (0, Ld.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", qW[Jd.layout], " match \u201c", Wd, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const iW = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function aW(dd) {
                            let {
                              entry: Jd,
                              isActive: kd,
                              onNavigate: pd,
                              label: Nd,
                              children: Pd
                            } = dd;
                            return (0, Ld.jsx)("a", {
                              href: `#${Jd.anchor}`,
                              "aria-label": Nd,
                              className: Wd()(`Level${Jd.level}`, {
                                Active: kd
                              }),
                              "aria-current": kd ? "location" : void 0,
                              onClick: dd => {
                                dd.preventDefault(), pd(Jd.anchor)
                              },
                              children: Pd
                            })
                          }

                          function MW(dd) {
                            let {
                              toc: Jd,
                              activeAnchor: kd,
                              onNavigate: Nd
                            } = dd;
                            const Pd = Math.max(0, Jd.findIndex((dd => dd.anchor === kd))),
                              Zd = (0, pd.useRef)(null),
                              gd = (0, pd.useRef)(!1);
                            (0, pd.useEffect)((() => {
                              var dd, kd;
                              const pd = null === (dd = Zd.current) || void 0 === dd ? void 0 : dd.closest(".DocsToc"),
                                Nd = null === (kd = Zd.current) || void 0 === kd ? void 0 : kd.querySelector(".DocsTimelineNotch.Active");
                              if (!pd || !Nd) return;
                              let Wd = 0;
                              if (Pd === Jd.length - 1) Wd = pd.scrollHeight;
                              else if (Pd > 0) {
                                const dd = pd.getBoundingClientRect(),
                                  Jd = Nd.getBoundingClientRect();
                                Wd = pd.scrollTop + Jd.top + Jd.height / 2 - (dd.top + pd.clientHeight / 2)
                              }
                              pd.scrollTo({
                                top: Wd,
                                behavior: gd.current ? "smooth" : "auto"
                              }), gd.current = !0
                            }), [Pd, Jd.length]);
                            const Cd = [];
                            return Jd.forEach(((dd, Jd) => {
                              var kd, pd, Nd;
                              const Wd = function(dd) {
                                  const Jd = dd.trim().match(iW);
                                  return Jd ? {
                                    day: Jd[1],
                                    month: `${Jd[2]} ${Jd[3]}`
                                  } : null
                                }(dd.text),
                                Pd = null !== (kd = null === Wd || void 0 === Wd ? void 0 : Wd.month) && void 0 !== kd ? kd : null;
                              null !== Pd && (null === (pd = Cd.at(-1)) || void 0 === pd ? void 0 : pd.month) === Pd || Cd.push({
                                month: Pd,
                                entries: []
                              }), Cd.at(-1).entries.push({
                                entry: dd,
                                day: null !== (Nd = null === Wd || void 0 === Wd ? void 0 : Wd.day) && void 0 !== Nd ? Nd : null,
                                index: Jd
                              })
                            })), (0, Ld.jsx)("ol", {
                              ref: Zd,
                              className: "DocsTimeline",
                              children: Cd.map((dd => {
                                let {
                                  month: Jd,
                                  entries: kd
                                } = dd;
                                return (0, Ld.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [Jd && (0, Ld.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: Jd
                                  }), (0, Ld.jsx)("ol", {
                                    children: kd.map((dd => {
                                      let {
                                        entry: Jd,
                                        day: kd,
                                        index: pd
                                      } = dd;
                                      return (0, Ld.jsx)("li", {
                                        className: Wd()("DocsTimelineNotch", {
                                          Passed: pd < Pd,
                                          Active: pd === Pd
                                        }),
                                        children: (0, Ld.jsx)(aW, {
                                          entry: Jd,
                                          isActive: pd === Pd,
                                          onNavigate: Nd,
                                          label: Jd.text,
                                          children: (0, Ld.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== kd && void 0 !== kd ? kd : Jd.text
                                          })
                                        })
                                      }, Jd.anchor)
                                    }))
                                  })]
                                }, kd[0].entry.anchor)
                              }))
                            })
                          }

                          function FW(dd) {
                            let {
                              isChangelog: Jd,
                              toc: kd,
                              activeAnchor: pd,
                              onNavigate: Nd
                            } = dd;
                            return 0 === kd.length ? null : (0, Ld.jsxs)(Ld.Fragment, {
                              children: [(0, Ld.jsx)("div", {
                                className: "DocsTocTitle",
                                children: Jd ? "Updates" : "On this page"
                              }), Jd ? (0, Ld.jsx)(MW, {
                                toc: kd,
                                activeAnchor: pd,
                                onNavigate: Nd
                              }) : (0, Ld.jsx)("ul", {
                                children: kd.map((dd => (0, Ld.jsx)("li", {
                                  children: (0, Ld.jsx)(aW, {
                                    entry: dd,
                                    isActive: dd.anchor === pd,
                                    onNavigate: Nd,
                                    children: dd.text.replace(/`/g, "")
                                  })
                                }, dd.anchor)))
                              })]
                            })
                          }
                          const YW = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            mW = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            bW = 20,
                            SW = 10,
                            jW = 40,
                            XW = 120;
                          let fW;

                          function nW(dd) {
                            const Jd = dd.gallery;
                            if (!Jd) return [];
                            if (Ik(Jd)) return function(dd) {
                              return vk(dd).entries.map((dd => dd.name))
                            }(Jd).map((kd => ({
                              page: dd,
                              anchor: jk(Jd, kd),
                              title: kd,
                              kind: mW[Jd],
                              text: "",
                              listedUnder: dd.title
                            })));
                            const kd = Td(dd);
                            return (0, sd.t)(kd).flatMap((pd => {
                              const Nd = pd.heading ? `${dd.title} \u203a ${pd.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : dd.title;
                              return fk(Jd, kd, pd.blocks).flatMap((kd => "names" !== kd.kind ? [] : kd.names.map((pd => {
                                const Wd = kd.isSongs ? "Song" : mW[Jd];
                                return {
                                  page: dd,
                                  anchor: pd.anchor,
                                  title: pd.name,
                                  kind: Wd,
                                  text: "",
                                  listedUnder: Nd
                                }
                              }))))
                            }))
                          }

                          function UW(dd, Jd, kd) {
                            const pd = dd.title.toLowerCase();
                            let Nd = 0;
                            if (pd === Jd) Nd = 100;
                            else if (pd.startsWith(Jd)) Nd = 80;
                            else if (pd.includes(Jd)) Nd = 60;
                            else if (kd.every((dd => pd.includes(dd)))) Nd = 45;
                            else {
                              if (!dd.text.toLowerCase().includes(Jd)) return 0;
                              Nd = 20
                            }
                            return Nd - Math.min(pd.length / 10, 9) + ("Page" === dd.kind ? 8 : "Method" === dd.kind ? 3 : 0) - (dd.listedUnder ? bW : 0)
                          }

                          function yW(dd, Jd) {
                            const kd = dd.toLowerCase().indexOf(Jd),
                              pd = Math.max(0, kd - XW / 3);
                            return `${pd>0?"\u2026":""}${dd.slice(pd,pd+XW)}${pd+XW<dd.length?"\u2026":""}`
                          }

                          function DW(dd) {
                            let {
                              text: Jd,
                              query: kd
                            } = dd;
                            const pd = kd ? Jd.toLowerCase().indexOf(kd) : -1;
                            return -1 === pd ? (0, Ld.jsx)(Ld.Fragment, {
                              children: Jd
                            }) : (0, Ld.jsxs)(Ld.Fragment, {
                              children: [Jd.slice(0, pd), (0, Ld.jsx)("mark", {
                                children: Jd.slice(pd, pd + kd.length)
                              }), Jd.slice(pd + kd.length)]
                            })
                          }

                          function TW(dd) {
                            let {
                              basePath: Jd,
                              onClose: kd
                            } = dd;
                            const Nd = (0, Zd.w)(),
                              [Pd, gd] = (0, pd.useState)(""),
                              [Cd, Kd] = (0, pd.useState)(0),
                              od = (0, pd.useRef)(null),
                              ld = (0, pd.useRef)(null),
                              Qd = Pd.trim().toLowerCase(),
                              Od = (0, pd.useMemo)((() => {
                                const dd = (fW || (fW = nd.flatMap((dd => {
                                  const Jd = Td(dd);
                                  return [{
                                    page: dd,
                                    anchor: "",
                                    title: dd.title,
                                    kind: "Page",
                                    text: dd.summary
                                  }, ...Jd.sections.flatMap((Jd => {
                                    const kd = Jd.blocks.filter((dd => "paragraph" === dd.kind)).map(sd.h).join(" ").replace(/[`*]/g, ""),
                                      pd = {
                                        page: dd,
                                        anchor: Jd.heading.anchor,
                                        title: Jd.heading.text.replace(/`/g, ""),
                                        kind: YW[dd.layout],
                                        text: kd
                                      },
                                      Nd = Jd.blocks.flatMap((Jd => "article" === dd.layout && "heading" === Jd.kind && 3 === Jd.level ? [{
                                        page: dd,
                                        anchor: Jd.anchor,
                                        title: Jd.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: pd.title
                                      }] : []));
                                    return [pd, ...Nd]
                                  })), ...nW(dd)]
                                }))), fW);
                                if (!Qd) return dd.filter((dd => "Page" === dd.kind));
                                const Jd = Qd.split(/\s+/);
                                let kd = 0;
                                return dd.map((dd => ({
                                  entry: dd,
                                  score: UW(dd, Qd, Jd)
                                }))).filter((dd => dd.score > 0)).sort(((dd, Jd) => Jd.score - dd.score)).filter((dd => !dd.entry.listedUnder || (kd++, kd <= SW))).slice(0, jW).map((dd => dd.entry))
                              }), [Qd]);
                            (0, pd.useEffect)((() => {
                              Kd(0)
                            }), [Qd]), (0, pd.useEffect)((() => {
                              const dd = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === dd || void 0 === dd || dd.focus()
                              }
                            }), []), (0, pd.useEffect)((() => {
                              var dd, Jd;
                              null === (dd = od.current) || void 0 === dd || null === (Jd = dd.querySelector(".Active")) || void 0 === Jd || Jd.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Cd]);
                            const Rd = dd => {
                              Nd(rd(Jd, dd.page, dd.anchor)), kd()
                            };
                            return (0, Ld.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: dd => {
                                dd.target === dd.currentTarget && kd()
                              },
                              children: (0, Ld.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: dd => {
                                  dd.target !== ld.current && dd.preventDefault()
                                },
                                onKeyDown: dd => {
                                  if ("Escape" === dd.key) kd();
                                  else if ("Tab" === dd.key) {
                                    var Jd;
                                    dd.preventDefault(), null === (Jd = ld.current) || void 0 === Jd || Jd.focus()
                                  }
                                },
                                children: [(0, Ld.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, Ld.jsx)(ed, {
                                    name: "magnifying-glass"
                                  }), (0, Ld.jsx)("input", {
                                    ref: ld,
                                    autoFocus: !0,
                                    value: Pd,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Od.length > 0 ? `DocsSearchResult-${Cd}` : void 0,
                                    onChange: dd => {
                                      gd(dd.target.value)
                                    },
                                    onKeyDown: dd => {
                                      if ("ArrowDown" === dd.key || "ArrowUp" === dd.key) {
                                        dd.preventDefault();
                                        const Jd = "ArrowDown" === dd.key ? 1 : -1;
                                        Kd((Cd + Jd + Od.length) % Math.max(Od.length, 1))
                                      } else "Enter" === dd.key && Od[Cd] && Rd(Od[Cd])
                                    }
                                  }), (0, Ld.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, Ld.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: od,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Qd && (0, Ld.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Od.map(((dd, Jd) => {
                                    var kd;
                                    return (0, Ld.jsxs)("li", {
                                      id: `DocsSearchResult-${Jd}`,
                                      role: "option",
                                      "aria-selected": Jd === Cd,
                                      className: Wd()("DocsSearchResult", {
                                        Active: Jd === Cd
                                      }),
                                      onMouseMove: () => {
                                        Kd(Jd)
                                      },
                                      onClick: () => {
                                        Rd(dd)
                                      },
                                      children: [(0, Ld.jsx)(ed, {
                                        name: dd.page.icon
                                      }), (0, Ld.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, Ld.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, Ld.jsx)(DW, {
                                            text: dd.title,
                                            query: Qd
                                          })
                                        }), dd.text && (0, Ld.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, Ld.jsx)(DW, {
                                            text: yW(dd.text, Qd),
                                            query: Qd
                                          })
                                        })]
                                      }), (0, Ld.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === dd.kind ? "Page" : null !== (kd = dd.listedUnder) && void 0 !== kd ? kd : `${dd.kind} \xb7 ${dd.page.title}`
                                      })]
                                    }, `${dd.page.id}#${dd.anchor}`)
                                  })), Qd && 0 === Od.length && (0, Ld.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Pd, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function EW(dd, Jd) {
                            if (Jd < 10) return `${dd.toFixed(1)}s`;
                            const kd = Math.floor(dd);
                            return `${Math.floor(kd/60)}:${String(kd%60).padStart(2,"0")}`
                          }

                          function cW() {
                            const dd = lp((dd => dd.track)),
                              Jd = lp((dd => dd.volume)),
                              [kd, Nd] = (0, pd.useState)(0),
                              Pd = (0, pd.useRef)(pp);
                            if ((0, pd.useEffect)((() => {
                                if (!dd) return;
                                if (Nd(ep()), "playing" !== dd.status) return;
                                let Jd = 0;
                                const kd = () => {
                                  Nd(ep()), Jd = requestAnimationFrame(kd)
                                };
                                return Jd = requestAnimationFrame(kd), () => {
                                  cancelAnimationFrame(Jd)
                                }
                              }), [dd]), !dd) return null;
                            const Zd = "paused" !== dd.status,
                              gd = Math.min(kd, dd.duration);
                            return (0, Ld.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, Ld.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, Ld.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": Zd ? `Pause ${dd.name}` : `Play ${dd.name}`,
                                  onClick: Op,
                                  children: (0, Ld.jsx)(ed, {
                                    name: Zd ? "pause" : "play"
                                  })
                                }), (0, Ld.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, Ld.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, Ld.jsx)("code", {
                                      children: dd.name
                                    }), (0, Ld.jsx)("span", {
                                      children: dd.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, Ld.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, Ld.jsx)("span", {
                                      children: EW(gd, dd.duration)
                                    }), (0, Ld.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: dd.duration || 1,
                                      step: .01,
                                      value: gd,
                                      disabled: 0 === dd.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${EW(gd,dd.duration)} of ${EW(dd.duration,dd.duration)}`,
                                      onChange: dd => {
                                        const Jd = Number(dd.target.value);
                                        ! function(dd) {
                                          var Jd;
                                          gp = dd, null === (Jd = Pp) || void 0 === Jd || Jd.seek(dd)
                                        }(Jd), Nd(Jd)
                                      }
                                    }), (0, Ld.jsx)("span", {
                                      children: dd.duration > 0 ? EW(dd.duration, dd.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, Ld.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, Ld.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === Jd ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === Jd ? Rp(Pd.current) : (Pd.current = Jd, Rp(0))
                                    },
                                    children: (0, Ld.jsx)(ed, {
                                      name: "volume",
                                      className: Wd()({
                                        Muted: 0 === Jd
                                      })
                                    })
                                  }), (0, Ld.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: Jd,
                                    "aria-label": "Volume",
                                    onChange: dd => {
                                      Rp(Number(dd.target.value))
                                    }
                                  })]
                                }), (0, Ld.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var Jd;
                                    null === (Jd = document.querySelector(`[data-docs-track="${CSS.escape(Np(dd.name,dd.isSong))}"]`)) || void 0 === Jd || Jd.focus(), Ip()
                                  },
                                  children: (0, Ld.jsx)(ed, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var hW = kd(33);
                          const rW = "docsTheme",
                            uW = window.matchMedia("(prefers-color-scheme: light)");

                          function tW(dd) {
                            let {
                              theme: Jd,
                              onChange: kd
                            } = dd;
                            const pd = "dark" === Jd ? "light" : "dark";
                            return (0, Ld.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${pd} theme`,
                              title: `Switch to ${pd} theme`,
                              onClick: () => {
                                kd(pd)
                              },
                              children: (0, Ld.jsx)(ed, {
                                name: "dark" === Jd ? "moon" : "sun"
                              })
                            })
                          }
                          const VW = "https://github.com/Bloxdy/code-api",
                            zW = "https://discord.gg/playbloxd",
                            HW = 180,
                            wW = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function AW(dd) {
                            let {
                              basePath: Jd,
                              activePageId: kd,
                              onNavigate: pd
                            } = dd;
                            return (0, Ld.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Ud.map((dd => (0, Ld.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, Ld.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: dd.title
                                }), dd.pageIds.map((dd => {
                                  var Nd;
                                  const Zd = yd(dd);
                                  return (0, Ld.jsxs)(Pd.d, {
                                    to: rd(Jd, Zd),
                                    className: Wd()("DocsNavLink", {
                                      Active: Zd.id === kd
                                    }),
                                    "aria-current": Zd.id === kd ? "page" : void 0,
                                    onClick: pd,
                                    children: [(0, Ld.jsx)(ed, {
                                      name: Zd.icon
                                    }), (0, Ld.jsx)("span", {
                                      children: null !== (Nd = Zd.navTitle) && void 0 !== Nd ? Nd : Zd.title
                                    })]
                                  }, Zd.id)
                                }))]
                              }, dd.title)))
                            })
                          }

                          function dP(dd) {
                            let {
                              basePath: Jd,
                              pageId: kd
                            } = dd;
                            const pd = Ud.flatMap((dd => dd.pageIds)),
                              Nd = pd.indexOf(kd),
                              Wd = Nd > 0 ? yd(pd[Nd - 1]) : null,
                              Zd = Nd < pd.length - 1 ? yd(pd[Nd + 1]) : null;
                            return (0, Ld.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Wd ? (0, Ld.jsxs)(Pd.d, {
                                className: "DocsPagerLink Previous",
                                to: rd(Jd, Wd),
                                children: [(0, Ld.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, Ld.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Wd.title
                                })]
                              }) : (0, Ld.jsx)("span", {}), Zd && (0, Ld.jsxs)(Pd.d, {
                                className: "DocsPagerLink Next",
                                to: rd(Jd, Zd),
                                children: [(0, Ld.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, Ld.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Zd.title
                                })]
                              })]
                            })
                          }

                          function JP(dd) {
                            let {
                              basePath: Jd,
                              embedded: kd = !1
                            } = dd;
                            const {
                              pageSlug: Nd = ""
                            } = (0, Zd.y)(), Cd = (0, Zd.v)(), Kd = (0, Zd.w)(), od = (ld = Nd, nd.find((dd => dd.slug === ld)));
                            var ld;
                            const [Qd, Od] = function() {
                              const [dd, Jd] = (0, pd.useState)((() => {
                                const dd = hW.i.getItem(rW);
                                return "dark" === dd || "light" === dd ? dd : null
                              })), [kd, Nd] = (0, pd.useState)(uW.matches ? "light" : "dark");
                              return (0, pd.useEffect)((() => {
                                const dd = () => {
                                  Nd(uW.matches ? "light" : "dark")
                                };
                                return uW.addEventListener("change", dd), () => {
                                  uW.removeEventListener("change", dd)
                                }
                              }), []), [null !== dd && void 0 !== dd ? dd : kd, dd => {
                                hW.i.setItem(rW, dd), Jd(dd)
                              }]
                            }(), [Rd, Id] = (0, pd.useState)(null), [Gd, vd] = (0, pd.useState)(!1), [xd, qd] = (0, pd.useState)(!1), [Bd, ad] = (0, pd.useState)([]), Md = function(dd, Jd) {
                              const [kd, Nd] = (0, pd.useState)("");
                              return (0, pd.useEffect)((() => {
                                if (!Jd) return;
                                let kd = 0;
                                const pd = () => {
                                    var pd, Wd;
                                    kd = 0;
                                    const Pd = Jd.getBoundingClientRect().top + HW;
                                    let Zd = null !== (pd = null === (Wd = dd[0]) || void 0 === Wd ? void 0 : Wd.anchor) && void 0 !== pd ? pd : "";
                                    for (const Jd of dd) {
                                      const dd = document.getElementById(Jd.anchor);
                                      dd && dd.getBoundingClientRect().top <= Pd && (Zd = Jd.anchor)
                                    }
                                    Jd.scrollTop + Jd.clientHeight >= Jd.scrollHeight - 2 && Jd.scrollTop > 0 && dd.length > 0 && (Zd = dd[dd.length - 1].anchor), Nd(Zd)
                                  },
                                  Wd = () => {
                                    kd || (kd = requestAnimationFrame(pd))
                                  };
                                return pd(), Jd.addEventListener("scroll", Wd, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(kd), Jd.removeEventListener("scroll", Wd)
                                }
                              }), [dd, Jd]), kd
                            }(Bd, Rd), Fd = "" === Nd && Cd.hash ? function(dd) {
                              const Jd = (0, sd.q)(dd);
                              if (Ed(yd("welcome"), Jd)) return null;
                              const kd = Object.hasOwn(hd, Jd) ? hd[Jd] : null;
                              if (kd) return {
                                page: yd(kd.pageId),
                                anchor: kd.anchor
                              };
                              const pd = yd("readme");
                              return Ed(pd, Jd) ? {
                                page: pd,
                                anchor: Jd
                              } : cd(`#${Jd}`)
                            }(Cd.hash) : null;
                            (0, pd.useEffect)((() => (gd.d.set({
                              musicOnFromPage: !1
                            }), () => {
                              gd.d.set({
                                musicOnFromPage: !0
                              }), Ip()
                            })), []), (0, pd.useEffect)((() => {
                              const dd = dd => {
                                const Jd = dd.target;
                                if (Jd.closest(".DocsTextDialog")) return;
                                const kd = Jd.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(Jd.tagName);
                                "k" === dd.key && (dd.metaKey || dd.ctrlKey) || "/" === dd.key && !kd ? (dd.preventDefault(), qd(!0)) : "Escape" === dd.key && vd(!1)
                              };
                              return window.addEventListener("keydown", dd), () => {
                                window.removeEventListener("keydown", dd)
                              }
                            }), []);
                            const Yd = (0, pd.useRef)(null);
                            (0, pd.useLayoutEffect)((() => {
                              var dd, Jd;
                              if (!Rd) return;
                              const kd = Yd.current === Cd.pathname;
                              Yd.current = Cd.pathname;
                              const pd = (0, sd.q)(Cd.hash),
                                Nd = pd ? document.getElementById(pd) : null;
                              if (null === (dd = Rd.querySelector(".DocsTargeted")) || void 0 === dd || dd.classList.remove("DocsTargeted"), null === Nd || void 0 === Nd || null === (Jd = Nd.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === Jd || Jd.classList.add("DocsTargeted"), Nd) {
                                var Wd;
                                const dd = Nd.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Wd = Nd.closest(".DocsChangelogEntry")) && void 0 !== Wd ? Wd : Nd).scrollIntoView({
                                  block: dd ? "center" : "start",
                                  behavior: kd ? "smooth" : "auto"
                                })
                              } else kd || Rd.scrollTo({
                                top: 0
                              })
                            }), [Rd, Cd.pathname, Cd.hash, Cd.key]);
                            const md = (0, pd.useCallback)((() => {
                                vd(!1)
                              }), []),
                              bd = (0, pd.useCallback)((dd => {
                                Kd({
                                  hash: dd
                                })
                              }), [Kd]);
                            if (Fd) return (0, Ld.jsx)(Zd.e, {
                              replace: !0,
                              to: rd(Jd, Fd.page, Fd.anchor)
                            });
                            if (!od) return (0, Ld.jsx)(Zd.e, {
                              replace: !0,
                              to: Jd
                            });
                            const Sd = kd ? "div" : "main";
                            return (0, Ld.jsx)(LJ.Provider, {
                              value: Jd,
                              children: (0, Ld.jsx)(OJ.Provider, {
                                value: Rd,
                                children: (0, Ld.jsxs)("div", {
                                  ref: Id,
                                  className: Wd()("DocsSite", {
                                    Embedded: kd,
                                    NavOpen: Gd
                                  }),
                                  "data-theme": Qd,
                                  children: [(0, Ld.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, Ld.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Gd ? "Close menu" : "Open menu",
                                      "aria-expanded": Gd,
                                      onClick: () => {
                                        vd(!Gd)
                                      },
                                      children: (0, Ld.jsx)(ed, {
                                        name: Gd ? "cross" : "menu"
                                      })
                                    }), (0, Ld.jsxs)(Pd.d, {
                                      to: Jd,
                                      className: "DocsBrand",
                                      children: [(0, Ld.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, Ld.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, Ld.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, Ld.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        qd(!0)
                                      },
                                      children: [(0, Ld.jsx)(ed, {
                                        name: "magnifying-glass"
                                      }), (0, Ld.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, Ld.jsxs)("kbd", {
                                        children: [wW ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, Ld.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, Ld.jsxs)("a", {
                                        href: zW,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Ld.jsx)(ed, {
                                          name: "discord"
                                        }), (0, Ld.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, Ld.jsxs)("a", {
                                        href: VW,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Ld.jsx)(ed, {
                                          name: "external-link"
                                        }), (0, Ld.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !kd && (0, Ld.jsxs)(Pd.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, Ld.jsx)(ed, {
                                          name: "play"
                                        }), (0, Ld.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, Ld.jsx)(tW, {
                                        theme: Qd,
                                        onChange: Od
                                      })]
                                    })]
                                  }), (0, Ld.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, Ld.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, Ld.jsx)(AW, {
                                        basePath: Jd,
                                        activePageId: od.id,
                                        onNavigate: md
                                      })
                                    }), (0, Ld.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: md
                                    }), (0, Ld.jsxs)(Sd, {
                                      className: "DocsMain",
                                      children: [(0, Ld.jsx)(sW, {
                                        page: od,
                                        onTocChange: ad
                                      }, od.id), (0, Ld.jsx)(dP, {
                                        basePath: Jd,
                                        pageId: od.id
                                      })]
                                    }), (0, Ld.jsx)("aside", {
                                      className: Wd()("DocsToc", {
                                        Timeline: "changelog" === od.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, Ld.jsx)(FW, {
                                        isChangelog: "changelog" === od.layout,
                                        toc: Bd,
                                        activeAnchor: Md,
                                        onNavigate: bd
                                      })
                                    })]
                                  }), (0, Ld.jsx)(cW, {}), xd && (0, Ld.jsx)(TW, {
                                    basePath: Jd,
                                    onClose: () => {
                                      qd(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4612: (dd, Jd, kd) => {
                          kd.d(Jd, {
                            e: () => pd,
                            f: () => Pd,
                            h: () => ed,
                            k: () => Od,
                            m: () => Zd,
                            q: () => Nd,
                            r: () => Wd,
                            t: () => Ld,
                            v: () => Qd,
                            y: () => ld
                          });
                          const pd = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Nd(dd) {
                            try {
                              return decodeURIComponent(dd.slice(1))
                            } catch {
                              return dd.slice(1)
                            }
                          }

                          function Wd(dd) {
                            return dd.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Pd = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${pd.source}`, "g");

                          function Zd(dd, Jd) {
                            return 2 === dd.length ? Jd.replace(/^ (.*) $/, "$1") : Jd
                          }

                          function gd(dd) {
                            return "" === dd.trim()
                          }

                          function Cd(dd) {
                            const Jd = [];
                            for (const kd of dd.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Jd.length > 0 && Jd[Jd.length - 1].endsWith("\\") ? Jd[Jd.length - 1] += `|${kd}` : Jd.push(kd);
                            return Jd.map((dd => dd.trim().replaceAll("\\|", "|")))
                          }
                          const Kd = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function od(dd) {
                            const Jd = [],
                              kd = [{
                                indent: -1,
                                items: Jd
                              }];
                            let pd = null;
                            for (const Nd of dd) {
                              const dd = Nd.match(Kd);
                              if (!dd) {
                                pd && (pd.text += ` ${Nd.trim()}`);
                                continue
                              }
                              const Jd = dd[1].replace(/\t/g, "  ").length;
                              for (; Jd <= kd[kd.length - 1].indent;) kd.pop();
                              pd = {
                                text: dd[3].trim(),
                                children: []
                              }, kd[kd.length - 1].items.push(pd), kd.push({
                                indent: Jd,
                                items: pd.children
                              })
                            }
                            return Jd
                          }

                          function ld(dd) {
                            const Jd = dd.replace(/\r\n/g, "\n").split("\n"),
                              kd = [];
                            let pd = 0;
                            for (; pd < Jd.length;) {
                              const dd = Jd[pd];
                              if (gd(dd)) {
                                pd++;
                                continue
                              }
                              const Nd = dd.match(/^\s*```\s*(\w*)\s*$/);
                              if (Nd) {
                                const dd = [];
                                for (pd++; pd < Jd.length && !/^\s*```\s*$/.test(Jd[pd]);) dd.push(Jd[pd]), pd++;
                                pd++, kd.push({
                                  kind: "code",
                                  lang: Nd[1] || "text",
                                  code: dd.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Pd = dd.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Pd) {
                                const dd = Pd[2].trim();
                                kd.push({
                                  kind: "heading",
                                  level: Pd[1].length,
                                  text: dd,
                                  anchor: Wd(dd)
                                }), pd++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(dd)) {
                                kd.push({
                                  kind: "rule"
                                }), pd++;
                                continue
                              }
                              if (dd.trim().startsWith("|") && pd + 1 < Jd.length && /^\s*\|[\s:|-]+\|\s*$/.test(Jd[pd + 1])) {
                                const Nd = Cd(dd),
                                  Wd = [];
                                for (pd += 2; pd < Jd.length && Jd[pd].trim().startsWith("|");) Wd.push(Cd(Jd[pd])), pd++;
                                kd.push({
                                  kind: "table",
                                  header: Nd,
                                  rows: Wd
                                });
                                continue
                              }
                              if (dd.startsWith(">")) {
                                const dd = [];
                                for (; pd < Jd.length && Jd[pd].startsWith(">");) dd.push(Jd[pd].replace(/^>\s?/, "")), pd++;
                                kd.push({
                                  kind: "quote",
                                  blocks: ld(dd.join("\n"))
                                });
                                continue
                              }
                              if (Kd.test(dd)) {
                                const Nd = [],
                                  Wd = /^\s*\d+\./.test(dd);
                                for (; pd < Jd.length && !gd(Jd[pd]) && (Kd.test(Jd[pd]) || /^\s+\S/.test(Jd[pd]));) Nd.push(Jd[pd]), pd++;
                                kd.push({
                                  kind: "list",
                                  ordered: Wd,
                                  items: od(Nd)
                                });
                                continue
                              }
                              const Zd = [];
                              for (; pd < Jd.length && !gd(Jd[pd]) && !/^\s*```/.test(Jd[pd]) && !/^#{1,6}\s/.test(Jd[pd]) && !Jd[pd].startsWith(">") && !Kd.test(Jd[pd]) && (!Jd[pd].trim().startsWith("|") || 0 !== Zd.length);) Zd.push(Jd[pd].trim()), pd++;
                              0 === Zd.length && (Zd.push(Jd[pd].trim()), pd++), kd.push({
                                kind: "paragraph",
                                text: Zd.join(" ")
                              })
                            }
                            return kd
                          }

                          function Qd(dd) {
                            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const kd = ld(dd);
                            let pd = "";
                            const Nd = [],
                              Wd = [],
                              Pd = new Map;
                            for (const Cd of kd) {
                              if ("heading" === Cd.kind) {
                                var Zd;
                                const dd = (null !== (Zd = Pd.get(Cd.anchor)) && void 0 !== Zd ? Zd : 0) + 1;
                                Pd.set(Cd.anchor, dd), dd > 1 && (Cd.anchor = `${Cd.anchor}-${dd}`)
                              }
                              if ("heading" === Cd.kind && 1 === Cd.level && !pd) {
                                pd = Cd.text;
                                continue
                              }
                              if ("heading" === Cd.kind && Cd.level <= Jd) {
                                Wd.push({
                                  heading: Cd,
                                  blocks: []
                                });
                                continue
                              }
                              const dd = Wd.at(-1);
                              dd ? dd.blocks.push(Cd) : Nd.push(Cd)
                            }
                            const gd = dd => {
                              for (;
                                "rule" === (null === (Jd = dd.at(-1)) || void 0 === Jd ? void 0 : Jd.kind);) {
                                var Jd;
                                dd.pop()
                              }
                            };
                            gd(Nd);
                            for (const Cd of Wd) gd(Cd.blocks);
                            return {
                              title: pd,
                              intro: Nd,
                              sections: Wd
                            }
                          }

                          function Ld(dd) {
                            return [{
                              heading: null,
                              blocks: dd.intro
                            }, ...dd.sections.map((dd => ({
                              heading: dd.heading,
                              blocks: dd.blocks
                            })))]
                          }

                          function Od(dd) {
                            return dd.flatMap((dd => "code" === dd.kind ? [dd] : "quote" === dd.kind ? Od(dd.blocks) : []))
                          }

                          function ed(dd) {
                            switch (dd.kind) {
                              case "heading":
                              case "paragraph":
                                return dd.text;
                              case "code":
                                return dd.code;
                              case "table":
                                return [dd.header, ...dd.rows].map((dd => dd.join(" "))).join(" ");
                              case "list": {
                                const Jd = dd => dd.map((dd => `${dd.text} ${Jd(dd.children)}`)).join(" ");
                                return Jd(dd.items)
                              }
                              case "quote":
                                return dd.blocks.map(ed).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4726: (dd, Jd, kd) => {
                          kd.d(Jd, {
                            b: () => Zd
                          });
                          var pd = kd(56),
                            Nd = kd(300),
                            Wd = kd(1924),
                            Pd = kd(1103);

                          function Zd(dd) {
                            let {
                              text: Jd
                            } = dd;
                            const kd = [];
                            let Zd = "";
                            return (0, Nd.Wb)(Jd).forEach(((dd, Jd) => {
                              if ("string" === typeof dd || !(0, Wd.f)(dd.icon)) return void(Zd += "string" === typeof dd ? dd : dd.icon);
                              const Nd = Math.max(0, Zd.trimEnd().search(/\S{1,12}$/));
                              kd.push((0, Pd.jsxs)(pd.Fragment, {
                                children: [Zd.slice(0, Nd), (0, Pd.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [Zd.slice(Nd), (0, Pd.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": dd.icon,
                                    children: (0, Pd.jsx)(Wd.d, {
                                      itemName: dd.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, Jd)), Zd = ""
                            })), kd.push(Zd), (0, Pd.jsx)(Pd.Fragment, {
                              children: kd
                            })
                          }
                        }, 4642: (dd, Jd, kd) => {
                          kd.d(Jd, {
                            f: () => Id,
                            d: () => Rd
                          });
                          var pd = kd(56),
                            Nd = kd(1459),
                            Wd = kd(1904),
                            Pd = kd(4649),
                            Zd = kd(1103);
                          const gd = (0, pd.memo)((function(dd) {
                            let {
                              initialParameters: Jd
                            } = dd;
                            const kd = (0, pd.useRef)(null),
                              Nd = (0, pd.useRef)(null),
                              gd = (0, pd.useRef)(0),
                              Cd = (0, pd.useRef)(null),
                              Kd = Jd.description,
                              od = Jd.Vp,
                              {
                                scale: ld,
                                rotation: Qd
                              } = null !== Jd && void 0 !== Jd ? Jd : {},
                              Ld = (0, Pd.h)();
                            return (0, pd.useEffect)((() => {
                              const dd = Ld.onFrame((() => {
                                const dd = Ld.getState();
                                if (!dd.isActive || !kd.current || !Nd.current) return;
                                const Jd = dd.state;
                                if (kd.current.value = Jd.progress, Jd.clickCount > gd.current) {
                                  gd.current = Jd.clickCount;
                                  const dd = Nd.current;
                                  dd.classList.add("pulse"), Cd.current = setTimeout((() => {
                                    dd.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Cd.current), dd()
                              }
                            }), [Ld]), (0, Zd.jsx)(Zd.Fragment, {
                              children: (0, Zd.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== ld && {
                                    "--scale": ld
                                  },
                                  ...null !== Qd && {
                                    "--rotation": `${Qd}deg`
                                  }
                                },
                                children: [(0, Zd.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: kd
                                }), (0, Zd.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Nd,
                                  children: (0, Zd.jsx)(Wd.c, {
                                    text: [{
                                      icon: od
                                    }]
                                  })
                                }), (0, Zd.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, Zd.jsx)(Wd.c, {
                                    text: Kd
                                  })
                                })]
                              })
                            })
                          }));
                          var Cd = kd(1044),
                            Kd = kd.n(Cd);
                          const od = 2 * Math.PI * 90,
                            ld = (0, pd.memo)((function(dd) {
                              let {
                                initialParameters: Jd
                              } = dd;
                              const kd = (0, pd.useRef)(null),
                                Nd = (0, pd.useRef)(null),
                                gd = (0, pd.useRef)(null),
                                Cd = Jd.label,
                                ld = Jd.icon,
                                Qd = Jd.wp,
                                {
                                  scale: Ld,
                                  rotation: Od,
                                  Ap: ed
                                } = null !== Jd && void 0 !== Jd ? Jd : {},
                                Rd = (0, Pd.h)();
                              return (0, pd.useEffect)((() => {
                                const dd = Rd.onFrame((() => {
                                  var dd, Jd;
                                  const pd = Rd.getState();
                                  if (!pd.isActive || !Nd.current) return;
                                  const Wd = pd.state,
                                    Pd = null !== (dd = Wd.timeRemaining) && void 0 !== dd ? dd : 0,
                                    Zd = null !== (Jd = Wd.Hp) && void 0 !== Jd ? Jd : 1,
                                    Cd = od * (1 - Pd / Zd);
                                  Nd.current.style.strokeDashoffset = `${Cd}`, kd.current && (kd.current.style.opacity = Pd > 0 ? "1" : "0"), gd.current && Qd && (gd.current.textContent = `${(Pd/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  dd()
                                }
                              }), [Rd, Qd]), (0, Zd.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: kd,
                                style: {
                                  ...null !== Ld && {
                                    "--scale": Ld
                                  },
                                  ...null !== Od && {
                                    "--rotation": `${Od}deg`
                                  }
                                },
                                children: [(0, Zd.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, Zd.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Zd.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, Zd.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: od,
                                      ref: Nd
                                    })]
                                  }), (0, Zd.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, Zd.jsx)(Wd.c, {
                                      text: [{
                                        icon: ld
                                      }],
                                      className: Kd()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: ed
                                      })
                                    })
                                  })]
                                }), (0, Zd.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, Zd.jsx)(Wd.c, {
                                    text: Cd,
                                    className: "QTETimedClickLabelText"
                                  }), Qd && (0, Zd.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: gd
                                  })]
                                })]
                              })
                            })),
                            Qd = (0, pd.memo)((function(dd) {
                              let {
                                initialParameters: Jd
                              } = dd;
                              const kd = (0, pd.useRef)(null),
                                Nd = (0, pd.useRef)(null),
                                gd = (0, pd.useRef)(null),
                                Cd = (0, pd.useRef)(!1),
                                Kd = Jd.description,
                                od = null === Jd || void 0 === Jd ? void 0 : Jd.icon,
                                ld = (0, Pd.h)();
                              return (0, pd.useEffect)((() => {
                                const dd = ld.onFrame((() => {
                                  const dd = ld.getState();
                                  if (!dd.isActive) return;
                                  const Jd = dd.state;
                                  if (kd.current) {
                                    const dd = 100 * (Jd.catchZonePosition - Jd.JN / 2);
                                    kd.current.style.left = `${dd}%`, kd.current.style.width = 100 * Jd.JN + "%", Jd.isCatching !== Cd.current && (Cd.current = Jd.isCatching, Jd.isCatching ? kd.current.classList.add("catching") : kd.current.classList.remove("catching"))
                                  }
                                  Nd.current && (Nd.current.style.left = 100 * Jd.moverPosition + "%"), gd.current && (gd.current.value = Jd.progress)
                                }));
                                return () => {
                                  dd()
                                }
                              }), [ld]), (0, Zd.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, Zd.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, Zd.jsx)(Wd.c, {
                                    text: Kd
                                  })
                                }), (0, Zd.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: gd
                                }), (0, Zd.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, Zd.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: kd
                                  }), (0, Zd.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Nd,
                                    children: (0, Zd.jsx)("span", {
                                      children: od && (0, Zd.jsx)(Wd.c, {
                                        text: [{
                                          icon: od,
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
                          var Ld = kd(610);
                          const Od = (0, pd.memo)((function(dd) {
                              let {
                                initialParameters: Jd
                              } = dd;
                              const kd = (0, pd.useRef)(null),
                                Nd = Jd.label,
                                gd = Jd.gN,
                                {
                                  icon: Cd,
                                  scale: Kd,
                                  rotation: od
                                } = null !== Jd && void 0 !== Jd ? Jd : {},
                                ld = 100 * (.5 - gd / 2),
                                Qd = 100 * gd,
                                Od = (0, Pd.h)();
                              return (0, pd.useEffect)((() => {
                                const dd = Od.onFrame((() => {
                                  const dd = Od.getState();
                                  if (!dd.isActive || !kd.current) return;
                                  const Jd = dd.state;
                                  kd.current.style.left = 100 * Jd.markerPosition + "%"
                                }));
                                return () => {
                                  dd()
                                }
                              }), [Od]), (0, Zd.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, Ld.I)(Kd) && {
                                    "--scale": Kd
                                  },
                                  ...!(0, Ld.I)(od) && {
                                    "--rotation": `${od}deg`
                                  }
                                },
                                children: [Cd && (0, Zd.jsx)(Wd.c, {
                                  text: [{
                                    icon: Cd
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, Zd.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, Zd.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${ld}%`,
                                      width: `${Qd}%`
                                    }
                                  }), (0, Zd.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: kd
                                  })]
                                }), (0, Zd.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, Zd.jsx)(Wd.c, {
                                    text: Nd
                                  })
                                })]
                              })
                            })),
                            ed = (0, pd.memo)((function(dd) {
                              let {
                                initialParameters: Jd
                              } = dd;
                              const kd = (0, pd.useRef)(null),
                                [Nd, gd] = (0, pd.useState)((() => new Array(Jd.KN).fill("pending"))),
                                [Cd, Kd] = (0, pd.useState)((() => {
                                  const dd = Jd.QN;
                                  return (0, Ld.I)(dd) || dd <= 0 ? [] : new Array(dd).fill("pending")
                                })),
                                od = Jd.label,
                                {
                                  icon: ld
                                } = Jd,
                                Qd = (0, pd.useRef)(0),
                                Od = (0, pd.useRef)(0),
                                ed = (0, pd.useRef)([]),
                                Rd = (0, Pd.h)();
                              return (0, pd.useEffect)((() => {
                                const dd = Rd.onFrame((() => {
                                  const dd = Rd.getState();
                                  if (!dd.isActive || !kd.current) return;
                                  const Jd = dd.state,
                                    pd = 30 + 60 * Jd.outerCircleProgress;
                                  if (kd.current.setAttribute("r", String(pd)), !0 === Jd.lastClickResult && Jd.successes > Qd.current) {
                                    kd.current.classList.remove("QTERhythmClickOuterCircle--miss"), kd.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const dd = setTimeout((() => {
                                      var dd;
                                      null === (dd = kd.current) || void 0 === dd || dd.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    ed.current.push(dd)
                                  } else if (!1 === Jd.lastClickResult && Jd.misses > Od.current) {
                                    kd.current.classList.remove("QTERhythmClickOuterCircle--hit"), kd.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const dd = setTimeout((() => {
                                      var dd;
                                      null === (dd = kd.current) || void 0 === dd || dd.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    ed.current.push(dd)
                                  }
                                  Jd.successes === Qd.current && Jd.misses === Od.current || (Qd.current = Jd.successes, Od.current = Jd.misses, gd((dd => {
                                    const kd = [...dd];
                                    for (let pd = 0; pd < Jd.KN; pd++) kd[pd] = pd < Jd.successes ? "success" : "pending";
                                    return kd
                                  })), Kd((dd => {
                                    if (0 === dd.length) return dd;
                                    const kd = [...dd];
                                    for (let pd = 0; pd < kd.length; pd++) kd[pd] = pd < Jd.misses ? "miss" : "pending";
                                    return kd
                                  })))
                                }));
                                return () => {
                                  dd();
                                  for (const dd of ed.current) clearTimeout(dd);
                                  ed.current = []
                                }
                              }), [Rd]), (0, Zd.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, Zd.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Nd.map(((dd, Jd) => (0, Zd.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === dd ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, Jd)))
                                }), (0, Zd.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, Zd.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Zd.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, Zd.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: kd
                                    })]
                                  }), ld && (0, Zd.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, Zd.jsx)(Wd.c, {
                                      text: [{
                                        icon: ld
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Cd.length > 0 && (0, Zd.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Cd.map(((dd, Jd) => (0, Zd.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === dd ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, Jd)))
                                }), (0, Zd.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, Zd.jsx)(Wd.c, {
                                    text: od
                                  })
                                })]
                              })
                            }));

                          function Rd(dd) {
                            let {
                              qte: Jd
                            } = dd;
                            switch (Jd.type) {
                              case "progressBar":
                                return (0, Zd.jsx)(gd, {
                                  initialParameters: Jd.parameters
                                });
                              case "timedClick":
                                return (0, Zd.jsx)(ld, {
                                  initialParameters: Jd.parameters
                                });
                              case "gravityBar":
                                return (0, Zd.jsx)(Qd, {
                                  initialParameters: Jd.parameters
                                });
                              case "precisionBar":
                                return (0, Zd.jsx)(Od, {
                                  initialParameters: Jd.parameters
                                });
                              case "rhythmClick":
                                return (0, Zd.jsx)(ed, {
                                  initialParameters: Jd.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Id = (0, pd.memo)((function() {
                            const [dd, Jd] = (0, pd.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Nd.h)("qteStateUpdated", (dd => {
                              Jd(dd)
                            })), dd.isActive && dd.type ? (0, Zd.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, Zd.jsx)(Rd, {
                                qte: dd
                              })
                            }) : null
                          }))
                        }, 4649: (dd, Jd, kd) => {
                          kd.d(Jd, {
                            e: () => Zd,
                            h: () => gd
                          });
                          var pd = kd(56),
                            Nd = kd(1320),
                            Wd = kd(4657);
                          const Pd = {
                              getState: () => Wd.d.getCurrentState(),
                              onFrame: Nd.p
                            },
                            Zd = (0, pd.createContext)(Pd);

                          function gd() {
                            return (0, pd.useContext)(Zd)
                          }
                        }, 4729: (dd, Jd, kd) => {
                          kd.d(Jd, {
                            c: () => Xd,
                            d: () => jd
                          });
                          var pd = kd(4733),
                            Nd = kd(300);
                          const Wd = 120,
                            Pd = 260,
                            Zd = 1.15,
                            gd = 1.2,
                            Cd = 2,
                            Kd = 1.08,
                            od = .8,
                            ld = .95,
                            Qd = 8,
                            Ld = "[\"')\\]\u300d\u300f\uff09]*",
                            Od = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ld}$`),
                            ed = new RegExp(`[?\uff1f]${Ld}$`),
                            Rd = new RegExp(`[!\uff01]${Ld}$`),
                            Id = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Gd = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            vd = new RegExp(`[${Gd}]`),
                            xd = new RegExp(`[${Gd}]|[^${Gd}]+`, "g"),
                            qd = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Bd(dd) {
                            let Jd = 2166136261;
                            for (let kd = 0; kd < dd.length; kd++) Jd ^= dd.charCodeAt(kd), Jd = Math.imul(Jd, 16777619);
                            return (Jd >>> 0) / 4294967295 * 2 - 1
                          }

                          function sd(dd) {
                            var Jd;
                            if (vd.test(dd)) return 1;
                            const kd = dd.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              pd = kd.replace(/[^0-9]/g, "");
                            if (pd.length > 0 && !/\p{L}/u.test(kd)) return Math.min(pd.length, 4);
                            const Nd = null !== (Jd = kd.match(qd)) && void 0 !== Jd ? Jd : [];
                            if (0 === Nd.length) {
                              var Wd, Pd;
                              const dd = null !== (Wd = null === (Pd = kd.match(/\p{L}/gu)) || void 0 === Pd ? void 0 : Pd.length) && void 0 !== Wd ? Wd : 0;
                              return 0 === dd ? 0 : Math.min(Math.max(1, Math.round(dd / 2.5)), Qd)
                            }
                            const Zd = kd.replace(/[^\p{L}]/gu, ""),
                              gd = Nd.length > 1 && "e" === Nd.at(-1) && Zd.endsWith("e") && !Zd.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(dd.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Nd.length - (gd ? 1 : 0), Qd)
                          }

                          function ad(dd) {
                            return dd.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Md(dd) {
                            const Jd = dd.replace(/[^\p{L}]/gu, "");
                            return Jd.length >= 2 && Jd === Jd.toUpperCase() && Jd !== Jd.toLowerCase()
                          }

                          function Fd(dd, Jd) {
                            var kd;
                            const Qd = Jd && (0, pd.k)(Jd),
                              Ld = null !== (kd = null === Qd || void 0 === Qd ? void 0 : Qd.syllableMs) && void 0 !== kd ? kd : pd.b,
                              Gd = function(dd) {
                                const Jd = [];
                                for (const pd of (0, Nd.Wb)(dd))
                                  if ("string" === typeof pd)
                                    for (const dd of pd.split(/(\s+)/)) {
                                      if ("" === dd) continue;
                                      if (/^\s+$/.test(dd)) {
                                        Jd.push({
                                          kind: "space",
                                          text: dd
                                        });
                                        continue
                                      }
                                      if (!vd.test(dd)) {
                                        Jd.push({
                                          kind: "word",
                                          text: dd,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let pd = !0;
                                      for (const Nd of null !== (kd = dd.match(xd)) && void 0 !== kd ? kd : []) {
                                        var kd;
                                        const dd = Jd.at(-1);
                                        pd || "word" !== (null === dd || void 0 === dd ? void 0 : dd.kind) || vd.test(Nd) || /[\p{L}\p{N}]/u.test(Nd) ? (pd || Jd.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), Jd.push({
                                          kind: "word",
                                          text: Nd,
                                          delayMs: 0
                                        }), pd = !1) : dd.text += Nd
                                      }
                                    } else Jd.push({
                                      kind: "icon",
                                      text: pd.icon,
                                      delayMs: 0
                                    });
                                return Jd
                              }(dd),
                              qd = [];
                            let Fd = [];
                            for (const pd of Gd) "space" !== pd.kind && (Fd.push(pd), Od.test(pd.text) && (qd.push(Fd), Fd = []));
                            qd.push(Fd);
                            const Yd = [];
                            let md = 0;
                            for (const pd of qd) {
                              var bd, Sd;
                              const dd = null !== (bd = null === (Sd = pd.at(-1)) || void 0 === Sd ? void 0 : Sd.text) && void 0 !== bd ? bd : "",
                                Jd = ed.test(dd),
                                kd = Rd.test(dd),
                                Nd = pd.map((dd => "word" === dd.kind ? sd(dd.text) : 1)),
                                Gd = Nd.findLastIndex((dd => dd > 0));
                              for (const [ed, Rd] of pd.entries()) {
                                const dd = "word" === Rd.kind,
                                  pd = Nd[ed];
                                Rd.delayMs = md;
                                for (let Nd = 0; Qd && Nd < pd; Nd++) {
                                  const {
                                    intonation: Wd
                                  } = Qd;
                                  let Pd = Gd > 0 ? -Wd.declineSemitones * (ed / Gd) : 0;
                                  Pd += Bd(`${ad(Rd.text)}|${Nd}`) * Wd.variationSemitones;
                                  const Od = Math.min(1, Wd.variationSemitones);
                                  let Id = Qd.glideSemitones,
                                    vd = 1;
                                  kd && (Pd += Wd.exclaimLiftSemitones, vd *= Zd), Jd && ed === Gd && (Pd += Wd.questionRiseSemitones * (pd > 1 ? .5 + .5 * Nd / (pd - 1) : 1), Nd === pd - 1 && (Id = Math.abs(Id) + Wd.questionRiseSemitones / 2)), dd && Md(Rd.text) && (Pd += Cd * Od, vd *= gd), pd > 1 && 0 === Nd && (Pd += od * Od, vd *= Kd), Yd.push({
                                    atMs: md + Nd * Ld,
                                    semitones: Pd,
                                    glideSemitones: Id,
                                    durationMs: Nd < pd - 1 ? Math.min(Qd.durationMs, Ld * ld) : Qd.durationMs,
                                    level: vd
                                  })
                                }
                                md += pd * Ld + (Od.test(Rd.text) ? Pd : Id.test(Rd.text) ? Wd : 0)
                              }
                            }
                            return {
                              pieces: Gd.map((dd => "space" === dd.kind ? dd : "icon" === dd.kind ? {
                                kind: "icon",
                                icon: dd.text,
                                delayMs: dd.delayMs
                              } : {
                                kind: "word",
                                text: dd.text,
                                delayMs: dd.delayMs
                              })),
                              blips: Yd
                            }
                          }
                          var Yd = kd(1211),
                            md = kd(1273),
                            bd = kd(1938);

                          function Sd(dd) {
                            if ("string" === typeof dd) return dd;
                            const Jd = md.c.get().getCurrentLanguageCode();
                            return (0, Yd.t)(Jd, dd.translationKey, (0, Yd.r)(dd.params, bd.d.shown))
                          }

                          function jd(dd) {
                            const Jd = void 0 === dd.voice ? null : (0, pd.m)(dd.voice),
                              kd = Jd && (0, pd.k)(Jd);
                            return {
                              plan: Fd(Sd(dd.line), kd),
                              synth: kd
                            }
                          }

                          function Xd(dd) {
                            const Jd = [];
                            let kd = [];
                            for (const [Nd, Wd] of dd.entries()) {
                              var pd;
                              "space" === Wd.kind && (" " !== Wd.text || "icon" !== (null === (pd = dd[Nd + 1]) || void 0 === pd ? void 0 : pd.kind)) ? (kd.length > 0 && Jd.push(kd), Jd.push([Wd]), kd = []) : kd.push(Wd)
                            }
                            return kd.length > 0 && Jd.push(kd), Jd
                          }
                        }, 4740: (dd, Jd, kd) => {
                          kd.d(Jd, {
                            d: () => Kd,
                            h: () => od
                          });
                          var pd = kd(4743),
                            Nd = kd(22);
                          const Wd = .25,
                            Pd = .85,
                            Zd = .02,
                            gd = .01;

                          function Cd(dd, Jd, kd, pd, Nd, Wd, Zd) {
                            const {
                              waveform: gd,
                              pitchHz: Cd,
                              attackMs: Kd,
                              releaseMs: od,
                              lowpassHz: ld
                            } = kd, Qd = Nd + pd.durationMs / 1e3, Ld = Cd * 2 ** (pd.semitones / 12), Od = dd.createOscillator();
                            Od.type = gd, Od.frequency.setValueAtTime(Ld, Nd), Od.frequency.exponentialRampToValueAtTime(Ld * 2 ** (pd.glideSemitones / 12), Qd);
                            const ed = Nd + Math.min(Kd, pd.durationMs) / 1e3,
                              Rd = dd.createGain();
                            Rd.gain.setValueAtTime(0, Nd), Rd.gain.linearRampToValueAtTime(Wd, ed), Rd.gain.linearRampToValueAtTime(Wd * Pd, Math.max(ed, Qd - od / 1e3)), Rd.gain.linearRampToValueAtTime(0, Qd);
                            const Id = [Od];
                            if (null !== ld) {
                              const Jd = dd.createBiquadFilter();
                              Jd.type = "lowpass", Jd.frequency.value = ld, Id.push(Jd)
                            }
                            Id.push(Rd, Jd);
                            for (let Pd = 1; Pd < Id.length; Pd++) Id[Pd - 1].connect(Id[Pd]);
                            return Od.onended = () => {
                              for (const dd of Id.slice(0, -1)) dd.disconnect();
                              Zd()
                            }, Od.start(Nd), Od.stop(Qd), Od
                          }

                          function Kd(dd, Jd, kd, pd, Nd, Pd) {
                            if (0 === pd.length) return Pd(), () => {};
                            const Kd = Wd * kd.volume * Nd,
                              od = dd.createGain();
                            od.connect(Jd);
                            const ld = dd.currentTime + Zd,
                              Qd = new Set;
                            for (const Wd of pd) {
                              const Jd = Cd(dd, od, kd, Wd, ld + Wd.atMs / 1e3, Kd * Wd.level, (() => {
                                Qd.delete(Jd), 0 === Qd.size && (od.disconnect(), Pd())
                              }));
                              Qd.add(Jd)
                            }
                            return () => {
                              const Jd = dd.currentTime;
                              od.gain.setTargetAtTime(0, Jd, gd);
                              for (const dd of Qd) try {
                                dd.stop(Jd + 5 * gd)
                              } catch {}
                            }
                          }

                          function od(dd, Jd) {
                            var kd;
                            const Wd = pd.Howler.ctx,
                              Pd = pd.Howler.masterGain;
                            if (!Wd || !Pd || !Nd.d.get("soundOnFromAd")) return () => {};
                            const Zd = pd.Howler;
                            return null === (kd = Zd._autoResume) || void 0 === kd || kd.call(Zd), Kd(Wd, Pd, dd, Jd, Nd.d.get("soundVolume"), (() => {
                              var dd;
                              null === (dd = Zd._autoSuspend) || void 0 === dd || dd.call(Zd)
                            }))
                          }
                        }, 4743: (dd, Jd, kd) => {
                          kd.r(Jd), kd.d(Jd, {
                            Howl: () => Nd.Howl,
                            Howler: () => Nd.Howler,
                            musicOutput: () => Ld,
                            readyAudioContext: () => Od
                          });
                          var pd, Nd = kd(4745),
                            Wd = kd(4516);
                          const Pd = Nd.Howler;

                          function Zd() {
                            var dd, Jd;
                            if (Pd.ctx || !Pd.usingWebAudio || "undefined" === typeof AudioContext || !(0, Wd.h)()) return;
                            const kd = navigator.audioSession;
                            let pd;
                            "auto" === (null === kd || void 0 === kd ? void 0 : kd.type) && (kd.type = "ambient");
                            try {
                              pd = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Nd = pd.createGain();
                            Nd.gain.setValueAtTime(Pd._muted ? 0 : null !== (dd = Pd._volume) && void 0 !== dd ? dd : 1, pd.currentTime), Nd.connect(pd.destination), Pd.ctx = pd, Pd.masterGain = Nd, null === (Jd = Pd._setup) || void 0 === Jd || Jd.call(Pd)
                          }
                          Pd._mobileUnloaded = !0;
                          const gd = Pd.volume.bind(Nd.Howler);
                          Pd.volume = function() {
                            return Zd(), gd(...arguments)
                          };
                          const Cd = Pd.mute.bind(Nd.Howler);
                          Pd.mute = dd => (Zd(), Cd(dd));
                          const Kd = Nd.Howl.prototype,
                            od = Kd.init;
                          Kd.init = function(dd) {
                            return Zd(), od.call(this, dd)
                          };
                          let ld = 0;
                          const Qd = null === (pd = Pd._autoSuspend) || void 0 === pd ? void 0 : pd.bind(Nd.Howler);

                          function Ld() {
                            Od();
                            const {
                              ctx: dd,
                              masterGain: Jd
                            } = Pd;
                            return dd && Jd ? {
                              ctx: dd,
                              destination: Jd,
                              holdAwake: dd => {
                                var Jd, kd;
                                (ld += dd ? 1 : -1, dd) ? null === (Jd = Pd._autoResume) || void 0 === Jd || Jd.call(Pd): null === (kd = Pd._autoSuspend) || void 0 === kd || kd.call(Pd)
                              },
                              wake: () => {
                                var Jd;
                                "running" !== dd.state && (null === (Jd = Pd._autoResume) || void 0 === Jd || Jd.call(Pd), dd.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function Od() {
                            var dd;
                            (Pd.volume(), Pd.ctx && Pd.autoUnlock) && (null === (dd = Pd._unlockAudio) || void 0 === dd || dd.call(Pd))
                          }
                          Qd && (Pd._autoSuspend = () => ld > 0 ? Nd.Howler : Qd())
                        }, 4752: (dd, Jd, kd) => {
                          function pd(dd) {
                            return {
                              notAfter: dd
                            }
                          }
                          kd.d(Jd, {
                            e: () => gd,
                            f: () => Cd,
                            i: () => Zd,
                            k: () => pd,
                            m: () => Nd,
                            q: () => Wd,
                            r: () => Pd,
                            s: () => Kd,
                            u: () => od
                          });
                          const Nd = pd("\\w$."),
                            Wd = pd("\\w.,");

                          function Pd(dd) {
                            return Jd => gd(Jd, dd)
                          }

                          function Zd(dd) {
                            return Jd => !dd.test(Jd.input.slice(0, Jd.index))
                          }

                          function gd(dd, Jd) {
                            return dd.index > 0 && new RegExp(`[${Jd}]`).test(dd.input[dd.index - 1])
                          }

                          function Cd(dd, Jd, kd) {
                            return function(dd) {
                              return void 0 !== dd && "function" !== typeof dd
                            }(kd) ? function(dd, Jd, kd) {
                              const pd = Jd.flags.replace(/[gy]/g, ""),
                                Nd = new RegExp(`[^${kd}](?:${Jd.source})`, `${pd}g`),
                                Wd = [],
                                Pd = kd => {
                                  const pd = kd.index + kd[0].length;
                                  return ("" === kd[0] ? ld(dd, Jd, pd) : pd) - 1
                                },
                                Zd = new RegExp(`(?:${Jd.source})`, `${pd}y`).exec(dd);
                              if (Zd) {
                                if (Wd.push(Zd), !Jd.global) return Wd;
                                Nd.lastIndex = Pd(Zd)
                              }
                              for (let gd = Nd.exec(dd); gd; gd = Nd.exec(dd)) {
                                const kd = ld(dd, Jd, gd.index) - gd.index;
                                if (gd[0] = gd[0].slice(kd), gd.index += kd, Wd.push(gd), !Jd.global) break;
                                Nd.lastIndex = Pd(gd)
                              }
                              return Wd
                            }(dd, Jd, kd.notAfter) : function(dd, Jd, kd) {
                              const pd = new RegExp(Jd.source, `${Jd.flags.replace(/[gy]/g,"")}g`),
                                Nd = [];
                              for (let Wd = pd.exec(dd); Wd; Wd = pd.exec(dd))
                                if (!kd || kd(Wd)) {
                                  if (Nd.push(Wd), !Jd.global) break;
                                  "" === Wd[0] && (pd.lastIndex = ld(dd, Jd, pd.lastIndex))
                                } else pd.lastIndex = ld(dd, Jd, Wd.index);
                              return Nd
                            }(dd, Jd, kd)
                          }

                          function Kd(dd, Jd, kd, pd) {
                            let Nd = "",
                              Wd = 0;
                            for (const Pd of Cd(dd, Jd, kd)) Nd += dd.slice(Wd, Pd.index) + pd(Pd), Wd = Pd.index + Pd[0].length;
                            return Nd + dd.slice(Wd)
                          }

                          function od(dd, Jd, kd) {
                            const pd = [];
                            let Nd = 0;
                            for (const Wd of Cd(dd, Jd, kd)) pd.push(dd.slice(Nd, Wd.index)), Nd = Wd.index + Wd[0].length;
                            return [...pd, dd.slice(Nd)]
                          }

                          function ld(dd, Jd, kd) {
                            var pd;
                            return kd + (Jd.unicode && (null !== (pd = dd.codePointAt(kd)) && void 0 !== pd ? pd : 0) > 65535 ? 2 : 1)
                          }
                        }, 4718: (dd, Jd, kd) => {
                          kd.d(Jd, {
                            d: () => Nd,
                            g: () => gd,
                            h: () => Wd,
                            i: () => Pd,
                            m: () => Zd,
                            n: () => ed,
                            p: () => Kd,
                            s: () => od,
                            w: () => Od,
                            y: () => Qd
                          });
                          var pd = kd(1627);
                          const Nd = 24e3,
                            Wd = "/docs/llms.txt",
                            Pd = `${pd.b}${Wd}`,
                            Zd = "/llms.txt",
                            gd = "/docs/llms-full.txt";

                          function Cd(dd) {
                            return dd || "index"
                          }

                          function Kd(dd) {
                            return `/docs/${Cd(dd)}.md`
                          }

                          function od(dd, Jd) {
                            return `/docs/${Cd(dd)}/${Jd+1}.md`
                          }
                          const ld = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Qd(dd) {
                            const Jd = ld.exec(dd);
                            return null === Jd ? null : {
                              name: Jd[1],
                              part: void 0 === Jd[2] ? null : Number(Jd[2])
                            }
                          }
                          const Ld = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Od(dd) {
                            const Jd = Ld.exec(dd);
                            if (null === Jd) return null;
                            const [, kd = "", pd] = Jd;
                            return void 0 === pd ? Kd(kd) : od(kd, Number(pd) - 1)
                          }

                          function ed(dd) {
                            return `/docsHtml/${Cd(dd)}.html`
                          }
                        }, 4733: (dd, Jd, kd) => {
                          kd.d(Jd, {
                            b: () => Nd,
                            f: () => pd,
                            i: () => Wd,
                            k: () => gd,
                            m: () => Pd
                          });
                          const pd = ["sine", "triangle", "square", "sawtooth"],
                            Nd = 55,
                            Wd = {
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

                          function Pd(dd) {
                            return "string" !== typeof dd ? dd : Object.hasOwn(Wd, dd) ? Wd[dd] : null
                          }

                          function Zd(dd, Jd, kd) {
                            return Math.min(kd, Math.max(Jd, dd))
                          }

                          function gd(dd) {
                            const Jd = Zd(dd.durationMs, 10, 500),
                              kd = Zd(dd.attackMs, 0, Jd),
                              {
                                intonation: Nd
                              } = dd;
                            return {
                              waveform: pd.includes(dd.waveform) ? dd.waveform : "sine",
                              pitchHz: Zd(dd.pitchHz, 20, 4e3),
                              glideSemitones: Zd(dd.glideSemitones, -24, 24),
                              durationMs: Jd,
                              attackMs: kd,
                              releaseMs: Zd(dd.releaseMs, 0, Jd - kd),
                              lowpassHz: null === dd.lowpassHz ? null : Zd(dd.lowpassHz, 20, 2e4),
                              volume: Zd(dd.volume, 0, 2),
                              intonation: {
                                variationSemitones: Zd(Nd.variationSemitones, 0, 6),
                                declineSemitones: Zd(Nd.declineSemitones, 0, 12),
                                questionRiseSemitones: Zd(Nd.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: Zd(Nd.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: Zd(dd.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const dd in modules) Object.freeze(modules[dd]);