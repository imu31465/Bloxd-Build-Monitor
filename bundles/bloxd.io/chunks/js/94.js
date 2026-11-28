export const id = 94;
export const ids = [94, 110];
export const modules = {
    5609: (dd, Od, md) => {
      md.d(Od, {
        e: () => yd,
        f: () => bd
      });
      var Wd = md(1155),
        Fd = md.n(Wd),
        Rd = md(66),
        Xd = md(1238),
        Kd = md(5616),
        hd = md(2060),
        vd = md(3403),
        Qd = md(5620),
        td = md(1341);
      const od = new WeakMap;
      let Nd = 0;

      function qd(dd) {
        let Od = od.get(dd);
        return void 0 === Od && (Od = Nd++, od.set(dd, Od)), Od
      }

      function Hd(dd) {
        let {
          piece: Od
        } = dd;
        return "space" === Od.kind ? (0, td.jsx)(td.Fragment, {
          children: Od.text
        }) : (0, td.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${Od.delayMs}ms`
          },
          children: (0, td.jsx)(Kd.c, {
            text: "icon" === Od.kind ? `[[${Od.icon}]]` : Od.text
          })
        })
      }

      function yd(dd) {
        let {
          display: Od
        } = dd;
        const {
          selectedLanguage: md
        } = (0, Xd.G)(), Wd = (0, Rd.useMemo)((() => (0, Qd.c)((0, Qd.e)(Od).plan.pieces)), [Od, md.code]);
        return (0, td.jsxs)("div", {
          className: Fd()("Dialogue", {
            DialogueAnimateIn: !1 !== Od.animateIn
          }),
          children: [Od.speakerName && (0, td.jsx)(hd.d, {
            text: Od.speakerName,
            className: "DialogueSpeaker"
          }), (0, td.jsx)("p", {
            className: "DialogueLine",
            children: Wd.map(((dd, Od) => 1 === dd.length && "space" === dd[0].kind ? dd[0].text : (0, td.jsx)("span", {
              className: "DialogueGlue",
              children: dd.map(((dd, Od) => (0, td.jsx)(Hd, {
                piece: dd
              }, Od)))
            }, Od)))
          })]
        })
      }
      const bd = (0, Rd.memo)((function() {
        const dd = (0, vd.j)("dialogue");
        return (0, td.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: dd && (0, td.jsx)(yd, {
            display: dd
          }, qd(dd))
        })
      }))
    },
    5480: (dd, Od, md) => {
        md.r(Od), md.d(Od, {
          default: () => mX
        });
        var Wd = md(66),
          Fd = md(1155),
          Rd = md.n(Fd),
          Xd = md(1648),
          Kd = md(1650),
          hd = md(29),
          vd = md(86),
          Qd = md(5489),
          td = md(5495),
          od = md(5504),
          Nd = md(4998),
          qd = md(1341);
        const Hd = "/textures/docs/icons";

        function yd(dd) {
          let {
            name: Od,
            isTinted: md,
            className: Wd,
            style: Fd
          } = dd;
          const Xd = `${Hd}/${Od}.png`;
          return md ? (0, qd.jsxs)("span", {
            className: Rd()("DocsPixelIcon", "Tinted", Wd),
            "aria-hidden": "true",
            style: Fd,
            children: [(0, qd.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Xd}")`,
                WebkitMaskImage: `url("${Xd}")`
              }
            }), (0, qd.jsx)("img", {
              src: Xd,
              alt: ""
            })]
          }) : (0, qd.jsx)("img", {
            className: Rd()("DocsPixelIcon", Wd),
            src: Xd,
            alt: "",
            "aria-hidden": "true",
            style: Fd
          })
        }
        const bd = 1500;

        function Td() {
          const [dd, Od] = (0, Wd.useState)(null);
          (0, Wd.useEffect)((() => {
            if (null === dd) return;
            const md = setTimeout((() => {
              Od(null)
            }), bd);
            return () => {
              clearTimeout(md)
            }
          }), [dd]);
          return [dd, dd => {
            (0, Nd.e)(dd).then((() => {
              Od({
                text: dd,
                failed: !1
              })
            }), (md => {
              console.error("Could not copy to the clipboard", md), Od({
                text: dd,
                failed: !0
              })
            }))
          }]
        }

        function pd(dd) {
          let {
            text: Od,
            label: md,
            className: Wd
          } = dd;
          const [Fd, Xd] = Td(), Kd = !1 === (null === Fd || void 0 === Fd ? void 0 : Fd.failed);
          return (0, qd.jsxs)("button", {
            type: "button",
            className: Rd()("DocsCopyButton", Wd, {
              Copied: Kd
            }),
            title: "Copy to clipboard",
            "aria-label": md ? void 0 : `Copy ${Od}`,
            onClick: dd => {
              dd.stopPropagation(), Xd(Od)
            },
            children: [(0, qd.jsx)(yd, {
              name: Kd ? "check" : "copy"
            }), md && (0, qd.jsx)("span", {
              children: Kd ? "Copied" : null !== Fd && void 0 !== Fd && Fd.failed ? "Copy failed" : md
            })]
          })
        }
        Qd.e.registerLanguage("javascript", td.b), Qd.e.registerLanguage("typescript", od.e);
        const Yd = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          gd = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          wd = 24;

        function Ed(dd) {
          let {
            code: Od,
            lang: md,
            compact: Fd = !1
          } = dd;
          const Xd = (0, Wd.useMemo)((() => function(dd, Od) {
              const md = Yd[Od];
              return md ? Qd.e.highlight(dd, {
                language: md
              }).value : dd.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(Od, md)), [Od, md]),
            Kd = Od.split("\n").length,
            hd = !Fd && Kd > wd + 6,
            [vd, td] = (0, Wd.useState)(!1),
            od = Yd[md];
          return (0, qd.jsxs)("div", {
            className: Rd()("DocsCodeBlock", {
              Compact: Fd,
              Collapsed: hd && !vd
            }),
            children: [!Fd && (0, qd.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, qd.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: od ? gd[od] : "Text"
              }), (0, qd.jsx)(pd, {
                text: Od,
                label: "Copy"
              })]
            }), (0, qd.jsx)("pre", {
              children: (0, qd.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Xd
                }
              })
            }), hd && (0, qd.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": vd,
              onClick: () => {
                td(!vd)
              },
              children: [(0, qd.jsx)(yd, {
                name: vd ? "chevron-up" : "chevron-down"
              }), vd ? "Show less" : `Show all ${Kd} lines`]
            })]
          })
        }
        var Jd = md(5509);
        var Ud = md(5513);
        const xd = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Bd(dd) {
          const Od = new Map;
          let md, Wd = [],
            Fd = !1;
          const Rd = () => {
            md && Od.set(md.name, md.lines.join("\n").trimEnd())
          };
          for (const Xd of dd.split("\n")) {
            const dd = Xd.match(xd);
            Fd || Xd.startsWith("/*") ? (Fd || (Rd(), md = void 0), Wd.push(Xd), Fd = !Xd.includes("*/")) : dd ? (Rd(), md = {
              name: dd[1],
              lines: [...Wd, Xd]
            }, Wd = []) : md && (Xd.startsWith(" ") || Xd.startsWith("\t") || /^[}\])|]/.test(Xd)) ? md.lines.push(Xd) : md && "" !== Xd.trim() && (Rd(), md = void 0)
          }
          return Rd(), Od
        }

        function Sd(dd) {
          return "methods" === dd || "callbacks" === dd || "settings" === dd
        }
        const sd = {
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
              setterSnippet: (dd, Od) => `api.setClientOption(playerId, "${dd}", ${Od})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (dd, Od) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${dd}", ${Od})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (dd, Od) => `api.setMobSetting(mobId, "${dd}", ${Od})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (dd, Od) => `api.setVehicleSetting(vehicleId, "${dd}", ${Od})`
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
          ud = {
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

        function Vd(dd) {
          return dd.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function Ad(dd) {
          let Od = !1;
          return dd.split("\n").map((dd => (dd.startsWith("```") && (Od = !Od), !Od && /^#{3,} /.test(dd) ? dd.slice(1) : dd))).join("\n")
        }

        function rd(dd) {
          return "readme" === dd ? "getting-started" : Vd(dd)
        }
        const Gd = "## Glossary of Referenced Types";
        const nd = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...Ud.c.flatMap((dd => {
            const Od = {
              id: dd.id,
              slug: rd(dd.id),
              title: dd.title,
              markdown: dd.content,
              ...sd[dd.id]
            };
            if ("readme" === dd.id) return function(dd) {
              const Od = dd.markdown.indexOf(Gd),
                md = dd.markdown.indexOf("\n```", Od),
                Wd = dd.markdown.indexOf("\n```", md + 1);
              if (-1 === Od || -1 === md || -1 === Wd) throw new Error(`Getting started has no "${Gd}" section with a code block`);
              const Fd = dd.markdown.slice(Od + 31, md).trim(),
                Rd = [...Bd(dd.markdown.slice(dd.markdown.indexOf("\n", md + 1) + 1, Wd))].map((dd => {
                  let [Od, md] = dd;
                  return `## ${Od}\n\n\`\`\`ts\n${md}\n\`\`\`\n`
                })),
                Xd = dd.markdown.slice(dd.markdown.indexOf("\n", Wd + 1) + 1);
              return [{
                ...dd,
                markdown: `${dd.markdown.slice(0,Od)}${Xd}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Fd}\n\n${Rd.join("\n")}`
              }]
            }(Od);
            if ("howTo" === dd.id) {
              const {
                parent: dd,
                guides: md
              } = function(dd) {
                const [Od, ...md] = dd.markdown.split(/^(?=## )/m), Wd = [Od], Fd = [];
                for (const Xd of md) {
                  var Rd;
                  const Od = Xd.indexOf("\n"),
                    md = Xd.slice(3, Od).trim(),
                    Kd = Xd.slice(Od + 1);
                  if (!Kd.includes("```")) {
                    Wd.push(Xd);
                    continue
                  }
                  const hd = null !== (Rd = ud[md]) && void 0 !== Rd ? Rd : {
                    icon: "lightbulb",
                    summary: `How to use ${md.toLowerCase()} in World Code.`
                  };
                  Fd.push({
                    id: `${dd.id}${md.split(/[^A-Za-z0-9]+/).map((dd=>dd.charAt(0).toUpperCase()+dd.slice(1))).join("")}`,
                    slug: `${dd.slug}-${Vd(md)}`,
                    title: md,
                    layout: "article",
                    sourceAnchor: (0, Jd.m)(md),
                    markdown: `# ${md}\n\n${Ad(Kd)}`,
                    ...hd
                  })
                }
                return {
                  parent: {
                    ...dd,
                    markdown: Wd.join(""),
                    childPageIds: Fd.map((dd => dd.id))
                  },
                  guides: Fd
                }
              }(Od);
              return [dd, ...md]
            }
            return [Od]
          }))],
          Ld = [{
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

        function Pd(dd) {
          return nd.find((Od => Od.id === dd))
        }
        const zd = new Map;

        function cd(dd) {
          let Od = zd.get(dd.id);
          return Od || (Od = (0, Jd.r)(dd.markdown, "changelog" === dd.layout ? 3 : 2), zd.set(dd.id, Od)), Od
        }

        function jd(dd, Od) {
          return cd(dd).sections.some((dd => dd.heading.anchor === Od || dd.blocks.some((dd => "heading" === dd.kind && dd.anchor === Od))))
        }

        function Dd(dd) {
          const [Od, ...md] = dd.replace(/^#/, "").split("-"), Wd = nd.find((dd => dd.id === Od));
          if (!Wd) return null;
          const Fd = md.length > 0 ? (0, Jd.m)(md.join("-")) : "";
          for (const Xd of null !== (Rd = Wd.childPageIds) && void 0 !== Rd ? Rd : []) {
            var Rd;
            const dd = Pd(Xd);
            if (dd.sourceAnchor === Fd) return {
              page: dd,
              anchor: ""
            };
            if (jd(dd, Fd)) return {
              page: dd,
              anchor: Fd
            }
          }
          return {
            page: Wd,
            anchor: Fd
          }
        }
        const ed = {
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

        function Id(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Wd = Od.slug ? `${dd}/${Od.slug}` : dd;
          return md ? `${Wd}#${md}` : Wd
        }
        var ld = md(5534);
        const Cd = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Zd = new Set(["GameApi", "Console", "_TypeOf"]),
          kd = 4;

        function fd(dd) {
          let Od = dd.length;
          for (; Od > 0 && "" === dd[Od - 1].trim();) Od--;
          return dd.slice(0, Od)
        }

        function Md(dd) {
          var Od;
          const md = fd(dd);
          if (null === (Od = md.at(-1)) || void 0 === Od || !Od.trimEnd().endsWith("*/")) return {
            lines: md,
            doc: ""
          };
          const Wd = md.findLastIndex((dd => dd.startsWith("/**")));
          return -1 === Wd ? {
            lines: md,
            doc: ""
          } : {
            lines: fd(md.slice(0, Wd)),
            doc: md.slice(Wd).join("\n")
          }
        }

        function dO(dd) {
          var Od;
          const md = dd.split("\n"),
            Wd = md.flatMap(((dd, Od) => Cd.test(dd) ? [Od] : []));
          let Fd = Md(md.slice(0, null !== (Od = Wd[0]) && void 0 !== Od ? Od : md.length)).doc;
          return Wd.map(((dd, Od) => {
            var Rd;
            const Xd = Md(md.slice(dd, null !== (Rd = Wd[Od + 1]) && void 0 !== Rd ? Rd : md.length)),
              Kd = {
                name: md[dd].match(Cd)[1],
                doc: Fd,
                lines: Xd.lines
              };
            return Fd = Xd.doc, Kd
          }))
        }

        function OO(dd) {
          var Od;
          const md = dd.match(/^readonly \[([\s\S]*)\]$/);
          return md ? null !== (Od = md[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== Od ? Od : [] : null
        }

        function mO(dd) {
          if (!dd.startsWith("{") || !dd.endsWith("}")) return null;
          const Od = {
              keys: [],
              values: []
            },
            md = dd => {
              const md = dd.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              md && (Od.keys.push(md[1].startsWith('"') ? md[1] : `"${md[1]}"`), Od.values.push(md[2].trim()))
            };
          let Wd = 0,
            Fd = "";
          for (const Rd of dd.slice(1, -1)) "{[(".includes(Rd) ? Wd++ : "}])".includes(Rd) && Wd--, ";" === Rd && 0 === Wd ? (md(Fd), Fd = "") : Fd += Rd;
          return md(Fd), Od
        }

        function WO(dd) {
          return dd.length > kd ? `\n\t| ${dd.join("\n\t| ")}` : dd.join(" | ")
        }

        function FO(dd, Od) {
          const md = function(dd, Od) {
            return dd.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((dd, md) => {
              var Wd;
              const Fd = null === (Wd = Od.get(md)) || void 0 === Wd ? void 0 : Wd.object;
              return Fd ? WO(Fd.values) : dd
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((dd, md) => {
              var Wd, Fd;
              const Rd = null === (Wd = Od.get(md)) || void 0 === Wd || null === (Fd = Wd.object) || void 0 === Fd ? void 0 : Fd.values.map(OO);
              return null !== Rd && void 0 !== Rd && Rd.every((dd => null !== dd)) ? WO([...new Set(Rd.flat())]) : dd
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((dd, md) => {
              var Wd;
              const Fd = null === (Wd = Od.get(md)) || void 0 === Wd ? void 0 : Wd.members;
              return Fd ? WO(Fd) : dd
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((dd, md) => {
              var Wd;
              const Fd = null === (Wd = Od.get(md)) || void 0 === Wd ? void 0 : Wd.object;
              return Fd ? WO(Fd.keys) : dd
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((dd, md) => {
              var Wd, Fd;
              return null !== (Wd = null === (Fd = Od.get(md)) || void 0 === Fd ? void 0 : Fd.text) && void 0 !== Wd ? Wd : dd
            }))
          }(dd.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), Od);
          return [dd.doc, md].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function RO(dd) {
          const Od = dO(dd),
            md = function(dd) {
              const Od = new Map,
                md = dd.find((dd => "_TypeOf" === dd.name));
              let Wd = null;
              const Fd = () => {
                if (Wd) {
                  const dd = Wd.lines.join("\n");
                  Od.set(Wd.name, {
                    text: dd,
                    members: OO(dd),
                    object: mO(dd)
                  })
                }
              };
              for (const Rd of md.lines.slice(1, -1)) {
                const dd = Rd.match(/^\t([\w$]+): (.+)$/);
                dd ? (Fd(), Wd = {
                  name: dd[1],
                  lines: [dd[2]]
                }) : Wd && Wd.lines.push(Rd.replace(/^\t/, ""))
              }
              return Fd(), Od
            }(Od),
            Wd = new Map;
          for (const Fd of Od) Zd.has(Fd.name) || Wd.has(Fd.name) || Wd.set(Fd.name, FO(Fd, md));
          return Wd
        }
        let XO, KO, hO;

        function vO() {
          return KO ??= function(dd) {
            const Od = dO(dd).find((dd => "GameApi" === dd.name)),
              md = new Map,
              Wd = Od.lines;
            for (let Rd = 0; Rd < Wd.length; Rd++) {
              var Fd;
              if (!Wd[Rd].trimStart().startsWith("/**")) continue;
              const dd = Rd;
              for (; Rd < Wd.length && !Wd[Rd].includes("*/");) Rd++;
              const Od = null === (Fd = Wd[Rd + 1]) || void 0 === Fd ? void 0 : Fd.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!Od) continue;
              let Xd = null;
              const Kd = [];
              let hd = "description",
                vd = !1;
              for (const md of Wd.slice(dd, Rd + 1).join("\n").split("\n").map((dd => dd.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const dd = md.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                dd ? (Xd = dd[1].trim(), hd = "deprecation") : md.startsWith("@") ? (hd = "otherTag", vd = !0) : "" === md.trim() ? vd || (hd = "description", Kd.push(md)) : "deprecation" !== hd || /^[A-Z]/.test(md.trim()) ? "otherTag" !== hd && (hd = "description", Kd.push(md)) : Xd = `${Xd} ${md.trim()}`.trim()
              }
              md.set(Od[1], {
                deprecation: Xd,
                description: Kd.join("\n").trim()
              })
            }
            return md
          }(ld.default), KO
        }

        function QO() {
          if (!hO) {
            hO = new Map;
            for (const dd of nd) {
              const Od = (0, Jd.q)(cd(dd)).flatMap((dd => dd.blocks));
              for (const dd of (0, Jd.h)(Od))
                if ("ts" === dd.lang || "typescript" === dd.lang)
                  for (const [Od, md] of Bd(dd.code)) hO.set(Od, md)
            }
            for (const [dd, Od] of(XO ??= RO(ld.default), XO)) hO.has(dd) || hO.set(dd, Od)
          }
          return hO
        }
        const tO = {
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
        let oO;

        function NO() {
          if (!oO) {
            oO = new Map;
            for (const dd of nd)
              if (Sd(dd.layout))
                for (const Od of cd(dd).sections) oO.has(Od.heading.text) || oO.set(Od.heading.text, {
                  pageId: dd.id,
                  anchor: Od.heading.anchor
                })
          }
          return oO
        }

        function qO(dd) {
          const Od = dd.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return Od ? NO().get(Od[1]) : void 0
        }
        const HO = (0, Wd.createContext)("/docs"),
          yO = (0, Wd.createContext)(null),
          bO = (0, Wd.createContext)(!1),
          TO = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function pO(dd) {
          const Od = dd.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return Od ? Od[1] : null
        }

        function YO(dd) {
          let {
            colour: Od
          } = dd;
          return (0, qd.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: Od
            },
            "aria-hidden": "true"
          })
        }

        function gO(dd) {
          const Od = [];
          let md = 0;
          for (const Wd of dd.matchAll(TO)) Od.push(dd.slice(md, Wd.index), (0, qd.jsx)(YO, {
            colour: Wd[0]
          }), Wd[0]), md = Wd.index + Wd[0].length;
          return Od.push(dd.slice(md)), Od
        }

        function wO(dd) {
          let {
            href: Od,
            children: md
          } = dd;
          const Fd = (0, Wd.useContext)(HO);
          if (Od.startsWith("#")) {
            const dd = Dd(Od);
            if (dd) return (0, qd.jsx)(Xd.c, {
              to: Id(Fd, dd.page, dd.anchor),
              children: (0, qd.jsx)(bO.Provider, {
                value: !0,
                children: md
              })
            })
          }
          return (0, qd.jsx)("a", {
            href: Od,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, qd.jsx)(bO.Provider, {
              value: !0,
              children: md
            })
          })
        }

        function aO(dd) {
          let {
            code: Od
          } = dd;
          const md = (0, Wd.useContext)(HO);
          if ((0, Wd.useContext)(bO)) return (0, qd.jsx)("code", {
            className: "DocsInlineCode",
            children: Od
          });
          if (QO().has(Od)) return (0, qd.jsx)(xO, {
            type: Od
          });
          const Fd = qO(Od);
          if (Fd) return (0, qd.jsx)(Xd.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: Id(md, Pd(Fd.pageId), Fd.anchor),
            children: Od
          });
          const Rd = pO(Od);
          return (0, qd.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Rd && (0, qd.jsx)(YO, {
              colour: Rd
            }), Od]
          })
        }

        function EO(dd) {
          let {
            text: Od
          } = dd;
          const md = [];
          let Fd = 0;
          for (const Wd of Od.matchAll(Jd.c)) {
            Wd.index > Fd && md.push(...gO(Od.slice(Fd, Wd.index)));
            const [, dd, Rd, Xd, Kd, hd] = Wd;
            dd ? md.push((0, qd.jsx)(aO, {
              code: (0, Jd.k)(dd, Rd)
            })) : Xd ? md.push((0, qd.jsx)("strong", {
              children: (0, qd.jsx)(EO, {
                text: Xd
              })
            })) : md.push((0, qd.jsx)(wO, {
              href: hd,
              children: (0, qd.jsx)(EO, {
                text: Kd
              })
            })), Fd = Wd.index + Wd[0].length
          }
          return Fd < Od.length && md.push(...gO(Od.slice(Fd))), (0, qd.jsx)(qd.Fragment, {
            children: md.map(((dd, Od) => (0, qd.jsx)(Wd.Fragment, {
              children: dd
            }, Od)))
          })
        }
        const JO = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          UO = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function xO(dd) {
          let {
            type: Od
          } = dd;
          const md = QO(),
            Fd = [];
          for (const Wd of Od.trim().matchAll(JO)) {
            const [dd, Od, Rd, Xd, Kd] = Wd;
            Od ? Fd.push((0, qd.jsx)("span", {
              className: "DocsTypeString",
              children: dd
            })) : Rd && md.has(Rd) ? Fd.push((0, qd.jsx)(VO, {
              name: Rd,
              definition: md.get(Rd)
            })) : Rd ? Fd.push((0, qd.jsx)("span", {
              className: UO.has(Rd) ? "DocsTypeKeyword" : "DocsTypeName",
              children: dd
            })) : Xd ? Fd.push((0, qd.jsx)("span", {
              className: "DocsTypeNumber",
              children: dd
            })) : Kd ? Fd.push(" ") : Fd.push((0, qd.jsx)("span", {
              className: "DocsTypePunctuation",
              children: dd
            }))
          }
          return (0, qd.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Fd.map(((dd, Od) => (0, qd.jsx)(Wd.Fragment, {
              children: dd
            }, Od)))
          })
        }
        const BO = 480,
          SO = 6,
          sO = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let uO = 0;

        function VO(dd) {
          let {
            name: Od,
            definition: md
          } = dd;
          const Fd = (0, Wd.useContext)(HO),
            Rd = tO[Od],
            Kd = (0, Wd.useRef)(null),
            hd = (0, Wd.useRef)(null),
            Qd = (0, Wd.useRef)(null),
            [td, od] = (0, Wd.useState)(!1),
            [Nd, Hd] = (0, Wd.useState)(null),
            bd = (0, Wd.useRef)(),
            Td = (0, Wd.useContext)(yO),
            [pd] = (0, Wd.useState)((() => "DocsTypePopover-" + uO++)),
            Yd = () => {
              clearTimeout(bd.current), od(!0)
            },
            gd = () => {
              clearTimeout(bd.current), bd.current = setTimeout((() => {
                od(!1)
              }), 120)
            };
          return (0, Wd.useEffect)((() => {
            if (!td) return;
            const dd = dd => {
              if ("Escape" === dd.key) {
                var Od, md;
                if (null !== (Od = hd.current) && void 0 !== Od && Od.contains(document.activeElement)) null === (md = Kd.current) || void 0 === md || md.focus();
                od(!1)
              }
            };
            return document.addEventListener("keydown", dd), () => {
              document.removeEventListener("keydown", dd)
            }
          }), [td]), (0, Wd.useEffect)((() => () => {
            clearTimeout(bd.current)
          }), []), (0, Wd.useLayoutEffect)((() => {
            if (!td || !Kd.current || !hd.current) return void Hd(null);
            const dd = Kd.current.getBoundingClientRect(),
              Od = hd.current.offsetHeight,
              md = Math.min(BO, window.innerWidth - 32),
              Wd = Math.min(Math.max(16, dd.left), window.innerWidth - md - 16),
              Fd = dd.bottom + SO + Od < window.innerHeight;
            Hd({
              left: Wd,
              top: Fd ? dd.bottom + SO : Math.max(16, dd.top - SO - Od)
            })
          }), [td]), (0, qd.jsxs)(qd.Fragment, {
            children: [(0, qd.jsx)("button", {
              type: "button",
              ref: Kd,
              className: "DocsTypeLink",
              "aria-expanded": td,
              "aria-describedby": td ? pd : void 0,
              onMouseEnter: Yd,
              onMouseLeave: gd,
              onFocus: Yd,
              onBlur: gd,
              onKeyDown: dd => {
                "Tab" === dd.key && !dd.shiftKey && Qd.current && (dd.preventDefault(), Qd.current.focus())
              },
              onClick: Yd,
              children: Od
            }), td && (0, vd.createPortal)((0, qd.jsxs)("span", {
              ref: hd,
              id: pd,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Nd ? {
                left: Nd.left,
                top: Nd.top,
                maxWidth: BO
              } : {
                visibility: "hidden"
              },
              onMouseEnter: Yd,
              onMouseLeave: gd,
              onFocus: Yd,
              onBlur: gd,
              children: [(0, qd.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, qd.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: Od
                }), Rd && (0, qd.jsxs)(Xd.c, {
                  ref: Qd,
                  className: "DocsTypePopoverLink",
                  to: Id(Fd, Pd(Rd)),
                  onClick: () => {
                    od(!1)
                  },
                  onKeyDown: dd => {
                    if ("Tab" === dd.key) {
                      var Od;
                      if (dd.preventDefault(), dd.shiftKey || !Kd.current || ! function(dd, Od) {
                          const md = [...document.querySelectorAll(sO)],
                            Wd = md.slice(md.indexOf(dd) + 1).find((dd => dd.getClientRects().length > 0 && !(null !== Od && void 0 !== Od && Od.contains(dd))));
                          return null === Wd || void 0 === Wd || Wd.focus(), void 0 !== Wd
                        }(Kd.current, hd.current)) null === (Od = Kd.current) || void 0 === Od || Od.focus();
                      dd.shiftKey || od(!1)
                    }
                  },
                  children: [Pd(Rd).title, (0, qd.jsx)(yd, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, qd.jsx)(Ed, {
                lang: "ts",
                code: md,
                compact: !0
              })]
            }), null !== Td && void 0 !== Td ? Td : document.body)]
          })
        }
        var iO = md(218),
          AO = md(5540),
          rO = md(5548),
          GO = md(5550);
        const nO = {
          progressBar: {
            gR: 30,
            wR: .075,
            aR: 5,
            ER: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            JR: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            xR: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            BR: !0,
            scale: 3,
            rotation: 15,
            sR: !1
          },
          gravityBar: {
            gR: 30,
            VR: .25,
            iR: 3,
            AR: .8,
            gravity: 1,
            rR: 1.5,
            GR: 8,
            nR: 4,
            ER: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            PR: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            cR: 5,
            jR: 1200,
            DR: .15,
            eR: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var LO = md(387),
          PO = md(2141);

        function zO(dd) {
          return dd.startsWith("fa-")
        }
        const cO = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          jO = {
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

        function DO(dd) {
          return "string" === typeof dd ? "text" : "entityName" in dd || "translationKey" in dd ? "other" : (0, LO.wb)(dd) ? "progressBar" : (0, LO.sb)(dd) ? "keyBinding" : "icon" in dd ? "icon" : "str" in dd && "string" === typeof dd.str ? "text" : "other"
        }
        const eO = [{
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
          IO = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...eO],
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
                options: PO.m
              },
              isRequired: !0
            }, ...eO],
            other: []
          };

        function lO(dd) {
          return "string" === typeof dd ? {
            str: dd
          } : dd
        }

        function CO(dd, Od) {
          let md = lO(dd);
          for (const Wd of Od) md = md && "object" === typeof md ? md[Wd] : void 0;
          return md
        }

        function ZO(dd, Od, md) {
          const Wd = (dd, Fd) => {
            var Rd;
            const Xd = Od[Fd],
              Kd = {
                ...dd
              };
            if (Fd === Od.length - 1) return void 0 === md ? delete Kd[Xd] : Kd[Xd] = md, Kd;
            const hd = Wd(null !== (Rd = dd[Xd]) && void 0 !== Rd ? Rd : {}, Fd + 1);
            return 0 === Object.keys(hd).length ? delete Kd[Xd] : Kd[Xd] = hd, Kd
          };
          return function(dd) {
            const Od = Object.keys(dd);
            return "string" === typeof dd.str && 1 === Od.length ? dd.str : dd
          }(Wd(lO(dd), 0))
        }

        function kO(dd, Od) {
          const md = DO(dd),
            Wd = IO[md].find((dd => dd.path.join(".") === Od.join("."))),
            Fd = null !== Wd && void 0 !== Wd && Wd.isRequired && "other" !== md ? CO(jO[md], Od) : void 0;
          return ZO(dd, Od, Fd)
        }

        function fO(dd) {
          switch (DO(dd)) {
            case "text":
              return String(CO(dd, ["str"]));
            case "icon":
              return String(CO(dd, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(CO(dd,["progress"])))}%`;
            case "keyBinding":
              return String(CO(dd, ["action"]));
            case "other":
              return JSON.stringify(dd)
          }
        }
        const MO = /^[A-Za-z_$][\w$]*$/;

        function dm(dd) {
          if (Array.isArray(dd)) return `[${dd.map(dm).join(", ")}]`;
          if (dd && "object" === typeof dd) {
            const Od = Object.entries(dd).map((dd => {
              let [Od, md] = dd;
              return `${MO.test(Od)?Od:JSON.stringify(Od)}: ${dm(md)}`
            }));
            return 0 === Od.length ? "{}" : `{ ${Od.join(", ")} }`
          }
          return JSON.stringify(dd)
        }

        function Om(dd) {
          const Od = dd.map(dm),
            md = `[${Od.join(", ")}]`;
          return md.length <= 60 ? md : `[\n${Od.map((dd=>`    ${dd},`)).join("\n")}\n]`
        }
        const mm = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function Wm(dd) {
          let Od = "";
          for (let Fd = 0; Fd < dd.length; Fd++) {
            const Rd = dd[Fd];
            if ("\\" === Rd) {
              var md;
              const Wd = null !== (md = dd[Fd + 1]) && void 0 !== md ? md : "";
              Od += "'" === Wd ? "'" : Rd + Wd, Fd++
            } else if ('"' === Rd) Od += '\\"';
            else {
              var Wd;
              Od += null !== (Wd = mm[Rd]) && void 0 !== Wd ? Wd : Rd
            }
          }
          return `"${Od}"`
        }

        function Fm(dd) {
          if ("string" === typeof dd) return !0;
          if (!dd || "object" !== typeof dd || Array.isArray(dd)) return !1;
          const Od = dd;
          return "ProgressBar" === Od.type ? "number" === typeof Od.progress : "StyledKeyBinding" === Od.type ? PO.m.includes(Od.action) : "string" === typeof Od.icon || "string" === typeof Od.str || "string" === typeof Od.entityName || "string" === typeof Od.translationKey
        }

        function Rm(dd) {
          let Od;
          try {
            Od = function(dd) {
              let Od = "",
                md = "",
                Wd = 0;
              const Fd = () => {
                Od += md.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), md = ""
              };
              for (; Wd < dd.length;) {
                const Rd = dd.slice(Wd).search(/["'`]|\/\//);
                if (-1 === Rd) {
                  md += dd.slice(Wd);
                  break
                }
                md += dd.slice(Wd, Wd + Rd);
                const Xd = Wd + Rd,
                  Kd = dd[Xd];
                if ("/" === Kd) {
                  const Od = dd.indexOf("\n", Xd);
                  Wd = -1 === Od ? dd.length : Od;
                  continue
                }
                if (Fd(), "`" === Kd) throw new Error("Use quotes rather than template strings.");
                let hd = Xd + 1;
                for (; hd < dd.length && dd[hd] !== Kd;) hd += "\\" === dd[hd] ? 2 : 1;
                if (hd >= dd.length) throw new Error("A string is missing its closing quote.");
                const vd = dd.slice(Xd + 1, hd);
                Od += Wm(vd), Wd = hd + 1
              }
              return Fd(), JSON.parse(Od)
            }(dd.trim())
          } catch (Wd) {
            return {
              parts: null,
              error: Wd instanceof SyntaxError ? "This isn't a valid array yet." : Wd.message
            }
          }
          if (!Array.isArray(Od)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const md = Od.findIndex((dd => !Fm(dd)));
          return -1 !== md ? {
            parts: null,
            error: `Part ${md+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: Od,
            error: null
          }
        }
        const Xm = 1 / iO.i.clientTicksPerSecond,
          Km = 700,
          hm = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Qm = {
            progressBar: nO.progressBar.JR,
            timedClick: nO.timedClick.icon,
            gravityBar: nO.gravityBar.icon,
            precisionBar: nO.precisionBar.icon,
            rhythmClick: nO.rhythmClick.icon
          };

        function tm(dd) {
          let {
            type: Od
          } = dd;
          const [md, Fd] = (0, Wd.useState)("ready"), [Xd, Kd] = (0, Wd.useState)(1), [hd, vd] = (0, Wd.useState)(!0), Qd = (0, Wd.useRef)(null), td = (0, Wd.useRef)(null), od = (0, Wd.useRef)(null), Nd = (0, Wd.useRef)(new Set), Hd = (0, Wd.useRef)(!1), bd = Qm[Od], Td = (0, Wd.useMemo)((() => ({
            getState: () => {
              var dd, Od;
              return null !== (dd = null === (Od = od.current) || void 0 === Od ? void 0 : Od.getState()) && void 0 !== dd ? dd : hm
            },
            onFrame: dd => (Nd.current.add(dd), () => {
              Nd.current.delete(dd)
            })
          })), []);
          (0, Wd.useEffect)((() => {
            const dd = Qd.current,
              Od = td.current;
            if (!dd || !Od) return;
            const md = new ResizeObserver((() => {
              Kd(dd.clientWidth / Math.max(1, Od.offsetWidth))
            }));
            return md.observe(dd), () => {
              md.disconnect()
            }
          }), []), (0, Wd.useEffect)((() => {
            var dd;
            if ("playing" !== md) return;
            let Wd = !1;
            const Rd = new GO.h[Od](nO[Od], (dd => {
              Wd = !0, vd(!1), Fd(dd ? "succeeded" : "failed")
            }), (() => {}));
            od.current = Rd;
            let Xd = 0,
              Kd = performance.now(),
              hd = requestAnimationFrame((function dd(Od) {
                for (Xd += Math.min(.25, (Od - Kd) / 1e3), Kd = Od; Xd >= Xm && !Wd;) Xd -= Xm, Rd.handleTick(Xm);
                for (const md of Nd.current) md();
                Wd || (hd = requestAnimationFrame(dd))
              }));
            return null === (dd = Qd.current) || void 0 === dd || dd.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(hd), Rd.tearDown(), od.current = null, Hd.current = !1
            }
          }), [md, Od]), (0, Wd.useEffect)((() => {
            if (hd) return;
            const dd = setTimeout((() => {
              vd(!0)
            }), Km);
            return () => {
              clearTimeout(dd)
            }
          }), [hd]);
          const pd = dd => {
            var Od;
            "playing" === md && Hd.current !== dd && (Hd.current = dd, null === (Od = od.current) || void 0 === Od || Od.handleMouseInput(dd))
          };
          return (0, qd.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, qd.jsxs)("div", {
              ref: Qd,
              className: Rd()("DocsQteStage", {
                Playing: "playing" === md
              }),
              tabIndex: "playing" === md ? 0 : -1,
              role: "playing" === md ? "button" : void 0,
              "aria-label": "playing" === md ? `${Od} quick time event: click or press Space` : void 0,
              onPointerDown: dd => {
                0 === dd.button && pd(!0)
              },
              onPointerUp: () => {
                pd(!1)
              },
              onPointerLeave: () => {
                pd(!1)
              },
              onPointerCancel: () => {
                pd(!1)
              },
              onKeyDown: dd => {
                "playing" !== md || " " !== dd.key && "Enter" !== dd.key || (dd.preventDefault(), pd(!0))
              },
              onKeyUp: dd => {
                "playing" !== md || " " !== dd.key && "Enter" !== dd.key || pd(!1)
              },
              children: [(0, qd.jsx)("div", {
                ref: td,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Xd})`
                },
                children: "playing" === md && (0, qd.jsx)(rO.d.Provider, {
                  value: Td,
                  children: (0, qd.jsx)(AO.e, {
                    qte: {
                      type: Od,
                      parameters: nO[Od]
                    }
                  })
                })
              }), "playing" !== md && (0, qd.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== md && (0, qd.jsxs)("div", {
                  className: Rd()("DocsQteResult", "succeeded" === md ? "Succeeded" : "Failed"),
                  children: [(0, qd.jsx)(yd, {
                    name: "succeeded" === md ? "check" : "cross",
                    isTinted: !0
                  }), (0, qd.jsx)("span", {
                    children: "succeeded" === md ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, qd.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !hd,
                  onClick: () => {
                    Fd("playing")
                  },
                  children: [(0, qd.jsx)(yd, {
                    name: "ready" === md ? "play" : "replay"
                  }), (0, qd.jsx)("span", {
                    children: "ready" === md ? `Try ${Od}` : "Play again"
                  })]
                })]
              })]
            }), bd && !zO(bd) && (0, qd.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, qd.jsx)("code", {
                children: bd
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function om(dd) {
          let {
            level: Od,
            text: md,
            anchor: Wd,
            className: Fd
          } = dd;
          const Xd = `h${Math.min(Od,6)}`;
          return (0, qd.jsxs)(Xd, {
                id: Wd,
                className: Rd()("DocsHeading", Fd),
                children: [(0, qd.jsx)(EO, {
                      text: md
                    }), (0, qd.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Wd}`,
                        "aria-label": `Link to ${md.replace(/`/g,"")}`,children:"#"})]})}function Nm(dd){let{items:Od,ordered:md}=dd;const Wd=md?"ol":"ul";return(0,qd.jsx)(Wd,{className:"DocsList",children:Od.map(((dd,Od)=>(0,qd.jsxs)("li",{children:[(0,qd.jsx)(EO,{text:dd.text}),dd.children.length>0&&(0,qd.jsx)(Nm,{items:dd.children,ordered:md})]},Od)))})}function qm(dd){const Od=dd[0],md="paragraph"===(null===Od||void 0===Od?void 0:Od.kind)?Od.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(md)?"warning":/^\*\*(tip|prefer)/.test(md)?"tip":"note"}function Hm(dd){let{block:Od}=dd;switch(Od.kind){case"heading":return(0,qd.jsx)(om,{level:Od.level,text:Od.text,anchor:Od.anchor});case"paragraph":return(0,qd.jsx)("p",{children:(0,qd.jsx)(EO,{text:Od.text})});case"code":{const dd="ts"===Od.lang?function(dd){const Od=dd.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return Od&&Object.hasOwn(nO,Od[1])?Od[1]:null}(Od.code):null;return(0,qd.jsxs)(qd.Fragment,{children:[(0,qd.jsx)(Ed,{code:Od.code,lang:Od.lang}),dd&&(0,qd.jsx)(tm,{type:dd})]})}case"table":return(0,qd.jsx)("div",{className:"DocsTableScroll",children:(0,qd.jsxs)("table",{className:"DocsTable",children:[(0,qd.jsx)("thead",{children:(0,qd.jsx)("tr",{children:Od.header.map(((dd,Od)=>(0,qd.jsx)("th",{children:(0,qd.jsx)(EO,{text:dd})},Od)))})}),(0,qd.jsx)("tbody",{children:Od.rows.map(((dd,Od)=>(0,qd.jsx)("tr",{children:dd.map(((dd,Od)=>(0,qd.jsx)("td",{children:(0,qd.jsx)(EO,{text:dd})},Od)))},Od)))})]})});case"list":return(0,qd.jsx)(Nm,{items:Od.items,ordered:Od.ordered});case"quote":return(0,qd.jsx)("aside",{className:Rd()("DocsCallout",qm(Od.blocks)),children:(0,qd.jsx)(ym,{blocks:Od.blocks})});case"rule":return(0,qd.jsx)("hr",{className:"DocsRule"})}}function ym(dd){let{blocks:Od}=dd;return(0,qd.jsx)(qd.Fragment,{children:Od.map(((dd,Od)=>(0,qd.jsx)(Hm,{block:dd},Od)))})}var bm=md(5516),Tm=md(5525);function pm(dd){return"blocks"===dd||"items"===dd}const Ym=new Map;function gm(dd){let Od=Ym.get(dd);return Od||(Od=function(dd){const Od={entries:[],legend:[],notes:[],examples:[]};let md=!1;for(const Rd of dd.split(/\r?\n/).slice(1)){if(Rd.startsWith("#")){const dd=Rd.replace(/^# ?/,""),Wd=dd.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Wd?Od.legend.push({code:Wd[1],meaning:Wd[2],usage:Wd[3].trim()}):/^Examples:/.test(dd.trim())?md=!0:md&&dd.trim()?Od.examples.push(dd.trim()):dd.trim()&&!/^\s/.test(dd)&&Od.notes.push(dd.trim());continue}const dd=Rd.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Wd,Fd;dd&&Od.entries.push({name:dd[1],variants:null!==(Wd=null===(Fd=dd[2])||void 0===Fd?void 0:Fd.split(","))&&void 0!==Wd?Wd:[]})}return Od}("blocks"===dd?bm:Tm),Ym.set(dd,Od)),Od}function wm(dd){let{className:Od,value:md,placeholder:Wd,label:Fd,onChange:Rd,count:Xd,children:Kd}=dd;return(0,qd.jsxs)("div",{className:Od,children:[(0,qd.jsx)(yd,{name:"magnifying-glass"}),(0,qd.jsx)("input",{type:"search",value:md,placeholder:Wd,"aria-label":Fd,onChange:dd=>{Rd(dd.target.value)}}),Kd,Xd&&(0,qd.jsxs)("span",{className:"DocsFilterCount",children:[Xd.visible," of ",Xd.total]})]})}var am=md(1443);function Em(dd){const Od=dd.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return Od?Od[2]:null}function Jm(dd){return"paragraph"===dd.kind&&""===dd.text.trim()}function Um(dd){const Od={name:dd.heading.text,description:[],params:[],returns:null};let md="description";for(const Fd of dd.blocks)if(!Jm(Fd))if("heading"===Fd.kind&&/^Parameters:?$/.test(Fd.text))md="params";else if("heading"===Fd.kind&&/^Returns:?$/.test(Fd.text))md="returns",Od.returns={type:"",description:[]};else if("params"!==md||"table"!==Fd.kind){if("returns"===md&&"paragraph"===Fd.kind&&""===Od.returns.type){const dd=Em(Fd.text);if(null!==dd){Od.returns.type=dd.replaceAll("\\|","|");continue}}"returns"===md?Od.returns.description.push(Fd):Od.description.push(Fd)}else for(const[dd,md,Rd]of Fd.rows){var Wd;Od.params.push({name:dd,type:null!==(Wd=Em(md))&&void 0!==Wd?Wd:md,description:null!==Rd&&void 0!==Rd?Rd:""})}return Od}const xm=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function Bm(dd){return dd.filter((dd=>!Jm(dd)))}const Sm=/^[\w][\w .'&!:()-]*$/,sm=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function um(dd){var Od;if("code"===dd.kind&&"text"===dd.lang){const Od=dd.code.split("\n").map((dd=>dd.trim())).filter(Boolean);return Od.length>0&&Od.every((dd=>Sm.test(dd)))?Od.map((dd=>({name:dd}))):null}return"paragraph"===dd.kind&&sm.test(dd.text.trim())?[...dd.text.matchAll(/`([ ^ `]+)` / g)].flatMap((dd => dd[1].split(/,\s*/).map((dd => ({
                              name: dd.trim()
                            }))))): "table" === dd.kind && null !== (Od = dd.header[0]) && void 0 !== Od && Od.startsWith("Song") ? dd.rows.map((dd => {
                              let [Od, md] = dd;
                              return {
                                name: Od.replace(/`/g, ""),
                                caption: md
                              }
                            })) : null
                          }

                          function Vm(dd) {
                            const Od = [];
                            for (const md of dd) {
                              const dd = um(md),
                                Wd = Od.at(-1),
                                Fd = "table" === md.kind;
                              dd ? "names" === (null === Wd || void 0 === Wd ? void 0 : Wd.kind) && Wd.isSongs === Fd ? Wd.names.push(...dd) : Od.push({
                                kind: "names",
                                names: dd,
                                isSongs: Fd
                              }) : Od.push({
                                kind: "block",
                                block: md
                              })
                            }
                            return Od
                          }
                          const im = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Am(dd, Od) {
                            return `${im[dd]}-${(0,Jd.m)(Od)}`
                          }
                          const rm = new WeakMap;

                          function Gm(dd, Od, md) {
                            let Wd = rm.get(Od);
                            if (!Wd) {
                              Wd = new Map;
                              const md = new Set;
                              for (const Fd of (0, Jd.q)(Od)) {
                                const Od = Vm(Bm(Fd.blocks)).map((Od => {
                                  if ("block" === Od.kind) return Od;
                                  return {
                                    kind: "names",
                                    names: Od.names.map((Od => {
                                      var Wd, Rd;
                                      const Xd = Am(dd, Od.name);
                                      let Kd = Xd;
                                      for (let dd = 2; md.has(Kd); dd++) Kd = `${Xd}-${dd}`;
                                      return md.add(Kd), {
                                        ...Od,
                                        anchor: Kd,
                                        heading: null !== (Wd = null === (Rd = Fd.heading) || void 0 === Rd ? void 0 : Rd.text) && void 0 !== Wd ? Wd : ""
                                      }
                                    })),
                                    isSongs: Od.isSongs
                                  }
                                }));
                                Wd.set(Fd.blocks, Od)
                              }
                              rm.set(Od, Wd)
                            }
                            const Fd = Wd.get(md);
                            if (!Fd) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Fd
                          }
                          const nm = "/textures/docs/skinPreviews",
                            Lm = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var Pm = md(2972),
                            zm = md(2991);

                          function cm(dd) {
                            return Object.hasOwn(Pm.g, dd) ? Pm.g[dd] : null
                          }
                          const jm = {
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
                            blendMode: zm.g.Standard
                          };

                          function Dm(dd, Od, md) {
                            return Od + (md - Od) * dd()
                          }

                          function em(dd, Od, md) {
                            return dd + (Od - dd) * md
                          }

                          function Im(dd) {
                            return dd.length > 0 && "timeFraction" in dd[0]
                          }

                          function lm(dd, Od) {
                            if (0 === dd.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Im(dd.colorGradients)) {
                              const md = dd.colorGradients,
                                {
                                  color: Wd
                                } = md[Math.floor(Od() * md.length) % md.length];
                              return [{
                                at: 0,
                                colour: [Wd[0] / 255, Wd[1] / 255, Wd[2] / 255, 1]
                              }]
                            }
                            return [...dd.colorGradients].sort(((dd, Od) => dd.timeFraction - Od.timeFraction)).map((dd => {
                              var md, Wd, Fd;
                              const Rd = dd.minColor,
                                Xd = null !== (md = dd.maxColor) && void 0 !== md ? md : Rd,
                                Kd = Od(),
                                hd = [em(Rd[0], Xd[0], Kd) / 255, em(Rd[1], Xd[1], Kd) / 255, em(Rd[2], Xd[2], Kd) / 255, em(null !== (Wd = Rd[3]) && void 0 !== Wd ? Wd : 1, null !== (Fd = Xd[3]) && void 0 !== Fd ? Fd : 1, Kd)];
                              return {
                                at: dd.timeFraction,
                                colour: hd
                              }
                            }))
                          }

                          function Cm(dd, Od, md, Wd) {
                            const Fd = Dm(Wd, dd.minEmitPower, dd.maxEmitPower),
                              Rd = Od => Dm(Wd, Math.min(dd.dir1[Od], dd.dir2[Od]), Math.max(dd.dir1[Od], dd.dir2[Od])) * Fd,
                              Xd = [...dd.velocityGradients].sort(((dd, Od) => dd.timeFraction - Od.timeFraction)).map((dd => ({
                                at: dd.timeFraction,
                                factor: Dm(Wd, dd.factor, dd.factor2)
                              })));
                            return {
                              pos: [Dm(Wd, Od[0], md[0]), Dm(Wd, Od[1], md[1]), Dm(Wd, Od[2], md[2])],
                              dir: [Rd(0), Rd(1), Rd(2)],
                              age: 0,
                              life: Dm(Wd, dd.minLifeTime, dd.maxLifeTime),
                              size: Dm(Wd, dd.minSize, dd.maxSize),
                              colours: lm(dd, Wd),
                              velocityFactors: Xd
                            }
                          }

                          function Zm(dd, Od, md, Wd) {
                            if (Od < dd[0].at) return md(Math.min(1, dd.length - 1));
                            for (let Fd = 0; Fd < dd.length - 1; Fd++)
                              if (Od <= dd[Fd + 1].at) {
                                const Rd = dd[Fd + 1].at - dd[Fd].at;
                                return Wd(md(Fd), md(Fd + 1), Rd > 0 ? (Od - dd[Fd].at) / Rd : 1)
                              } return md(dd.length - 1)
                          }

                          function km(dd) {
                            return Zm(dd.colours, dd.age / dd.life, (Od => dd.colours[Od].colour), ((dd, Od, md) => [em(dd[0], Od[0], md), em(dd[1], Od[1], md), em(dd[2], Od[2], md), em(dd[3], Od[3], md)]))
                          }

                          function fm(dd, Od, md) {
                            if (dd.age += md, dd.age >= dd.life) return !1;
                            const Wd = function(dd) {
                              return 0 === dd.velocityFactors.length ? 1 : Zm(dd.velocityFactors, dd.age / dd.life, (Od => dd.velocityFactors[Od].factor), em)
                            }(dd) * md;
                            for (let Rd = 0; Rd < 3; Rd++) {
                              var Fd;
                              dd.pos[Rd] += dd.dir[Rd] * Wd, dd.dir[Rd] += (null !== (Fd = Od[Rd]) && void 0 !== Fd ? Fd : 0) * md
                            }
                            return !0
                          }

                          function Mm(dd) {
                            return String(Math.round(1e6 * dd) / 1e6)
                          }

                          function dW(dd) {
                            return `[${dd.map(Mm).join(", ")}]`
                          }

                          function OW(dd, Od) {
                            const md = `${Od}    `;
                            return `[\n${(Im(dd)?dd.map((dd=>{const Od=[`${md}    timeFraction: ${Mm(dd.timeFraction)},`,`${md}    minColor: ${dW(dd.minColor)},`];return dd.maxColor&&Od.push(`${md}    maxColor: ${dW(dd.maxColor)},`),`${md}{\n${Od.join("\n")}\n${md}},`})):dd.map((dd=>`
                            $ {
                              md
                            } {
                              color: $ {
                                dW(dd.color)
                              }
                            }, `))).join("\n")}\n${Od}]`
                          }
                          const mW = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            WW = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const FW = .6;

                          function RW(dd, Od) {
                            return `${Od?"song":"sound"}:${dd}`
                          }
                          let XW = {
                              track: null,
                              volume: FW
                            },
                            KW = null,
                            hW = 0,
                            vW = 0;
                          const QW = new Set;

                          function tW(dd) {
                            XW = {
                              ...XW,
                              ...dd
                            }, QW.forEach((dd => {
                              dd()
                            }))
                          }

                          function oW(dd) {
                            XW.track && tW({
                              track: {
                                ...XW.track,
                                ...dd
                              }
                            })
                          }

                          function NW(dd) {
                            const [Od, md] = (0, Wd.useState)((() => dd(XW))), Fd = (0, Wd.useRef)(dd);
                            return Fd.current = dd, (0, Wd.useEffect)((() => {
                              const dd = () => {
                                md((() => Fd.current(XW)))
                              };
                              return QW.add(dd), dd(), () => {
                                QW.delete(dd)
                              }
                            }), []), Od
                          }

                          function qW() {
                            hW++;
                            const dd = KW;
                            KW = null, null === dd || void 0 === dd || dd.stop()
                          }

                          function HW(dd, Od) {
                            let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            qW();
                            const Fd = hW,
                              {
                                track: Rd
                              } = XW,
                              Xd = Rd && Rd.name === dd && Rd.isSong === Od ? Rd.duration : 0;
                            vW = Wd, tW({
                              track: {
                                name: dd,
                                isSong: Od,
                                status: "loading",
                                duration: Xd
                              }
                            }), Promise.all([md.e(253), md.e(285)]).then((() => md(41740))).then((md => {
                              let {
                                playDocsSound: Rd
                              } = md;
                              Fd === hW && (KW = Rd(dd, Od, XW.volume, Wd, {
                                onPlay: dd => {
                                  Fd === hW && oW({
                                    status: "playing",
                                    duration: dd
                                  })
                                },
                                onEnd: dd => {
                                  var Od, md;
                                  Fd === hW && (KW = null, dd ? tW({
                                    track: null
                                  }) : (vW = null !== (Od = null === (md = XW.track) || void 0 === md ? void 0 : md.duration) && void 0 !== Od ? Od : 0, oW({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((Od => {
                              console.error(`Could not play docs sound ${dd}`, Od), Fd === hW && tW({
                                track: null
                              })
                            }))
                          }

                          function yW() {
                            const {
                              track: dd
                            } = XW;
                            if (!dd) return;
                            if ("playing" === dd.status && KW) return vW = KW.hY(), KW.pause(), void oW({
                              status: "paused"
                            });
                            if ("loading" === dd.status) return qW(), void oW({
                              status: "paused"
                            });
                            if (KW) return void KW.resume();
                            const Od = dd.duration > 0 && vW >= dd.duration - .05;
                            HW(dd.name, dd.isSong, Od ? 0 : vW)
                          }

                          function bW() {
                            var dd;
                            return KW && "playing" === (null === (dd = XW.track) || void 0 === dd ? void 0 : dd.status) ? KW.hY() : vW
                          }

                          function TW(dd) {
                            var Od;
                            null === (Od = KW) || void 0 === Od || Od.setVolume(dd), tW({
                              volume: dd
                            })
                          }

                          function pW() {
                            qW(), vW = 0, tW({
                              track: null
                            })
                          }
                          const YW = (0, Wd.createContext)(null);
                          let gW = null;

                          function wW() {
                            const [dd, Od] = (0, Wd.useState)(null);
                            return (0, Wd.useEffect)((() => {
                              let dd = !1;
                              return gW ??= Promise.all([md.e(85), md.e(89), md.e(86), md.e(87), md.e(88), md.e(124), md.e(36), md.e(259)]).then((() => md(41734))), gW.then((md => {
                                dd || Od(md)
                              }), (dd => {
                                console.error("Could not load the docs gallery's textures", dd), gW = null
                              })), () => {
                                dd = !0
                              }
                            }), []), dd
                          }
                          const aW = 24,
                            EW = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function JW(dd, Od) {
                            const md = "skins" === dd ? function(dd, Od) {
                              const md = Lm.find((Od => dd.startsWith(Od.heading)));
                              return md ? function(dd, Od) {
                                return `${dd}-${Od}`
                              }(md.prefix, Od) : null
                            }(Od.heading, Od.name) : null;
                            return null === md ? null : `${nm}/${md}.webp`
                          }

                          function UW(dd) {
                            let {
                              kind: Od,
                              entry: md,
                              assets: Fd,
                              renderedUrl: Xd
                            } = dd;
                            const {
                              name: Kd
                            } = md, [hd, vd] = (0, Wd.useState)(!1);
                            if ("icons" === Od && zO(Kd)) return (0, qd.jsx)(am.c, {
                              className: "DocsTileIcon",
                              name: Kd
                            });
                            let Qd = null;
                            var td;
                            if ("icons" === Od) Qd = null !== (td = null === Fd || void 0 === Fd ? void 0 : Fd.getIngameIconUrl(Kd)) && void 0 !== td ? td : null;
                            else if ("particles" === Od) {
                              var od, Nd, Hd;
                              Qd = null !== (od = null === Fd || void 0 === Fd ? void 0 : Fd.getParticleTextureUrl(null !== (Nd = null === (Hd = cm(Kd)) || void 0 === Hd ? void 0 : Hd.texture) && void 0 !== Nd ? Nd : Kd)) && void 0 !== od ? od : null
                            } else "skins" === Od && (Qd = null !== Xd && void 0 !== Xd ? Xd : EW.test(Kd) ? `/textures/charSkins/previews/${Kd}_preview.png` : null);
                            return !Qd || hd ? (0, qd.jsx)(yd, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === Od ? "person" : "image"
                            }) : (0, qd.jsx)("img", {
                              className: Rd()("DocsTileImage", {
                                Pixelated: "skins" !== Od
                              }),
                              src: Qd,
                              srcSet: Qd === Xd ? `${Qd} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Qd}`), vd(!0)
                              }
                            })
                          }

                          function xW(dd) {
                            let {
                              entry: Od,
                              isSong: md
                            } = dd;
                            const Wd = NW((dd => {
                                let {
                                  track: Wd
                                } = dd;
                                return (null === Wd || void 0 === Wd ? void 0 : Wd.name) === Od.name && Wd.isSong === md ? Wd.status : null
                              })),
                              Fd = null !== Wd && "paused" !== Wd;
                            return (0, qd.jsxs)("button", {
                              type: "button",
                              id: Od.anchor,
                              className: Rd()("DocsSoundTile", {
                                Playing: Fd
                              }),
                              "data-docs-track": RW(Od.name, md),
                              "aria-label": Fd ? `Pause ${Od.name}` : `Play ${Od.name}`,
                              onClick: () => {
                                null !== Wd ? yW() : HW(Od.name, md)
                              },
                              children: [(0, qd.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, qd.jsx)(yd, {
                                  name: Fd ? "pause" : "play"
                                })
                              }), (0, qd.jsx)("code", {
                                className: "DocsSoundName",
                                children: Od.name
                              }), Od.caption && (0, qd.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: Od.caption
                              })]
                            })
                          }

                          function BW(dd) {
                            let {
                              kind: Od,
                              names: md,
                              isSongs: Fd
                            } = dd;
                            const Xd = wW(),
                              [Kd, hd] = Td(),
                              vd = !1 === (null === Kd || void 0 === Kd ? void 0 : Kd.failed) ? Kd.text : null,
                              Qd = (0, Wd.useContext)(YW),
                              [td, od] = (0, Wd.useState)(""),
                              Nd = td.trim().toLowerCase(),
                              Hd = Nd ? md.filter((dd => dd.name.toLowerCase().includes(Nd))) : md;
                            return (0, qd.jsxs)("div", {
                              className: "DocsGallery",
                              children: [md.length > aW && (0, qd.jsx)(wm, {
                                className: "DocsGalleryFilter",
                                value: td,
                                placeholder: `Filter ${md.length} names\u2026`,
                                label: "Filter names",
                                onChange: od,
                                count: Nd ? {
                                  visible: Hd.length,
                                  total: md.length
                                } : null
                              }), (0, qd.jsx)("div", {
                                className: Rd()("DocsGalleryGrid", `Kind-${Od}`, {
                                  Songs: Fd
                                }),
                                children: Hd.map((dd => {
                                  if ("sounds" === Od) return (0, qd.jsx)(xW, {
                                    entry: dd,
                                    isSong: Fd
                                  }, dd.anchor);
                                  if (Qd && "particles" === Od && cm(dd.name)) return (0, qd.jsxs)("button", {
                                    type: "button",
                                    id: dd.anchor,
                                    className: Rd()("DocsTile Previewable", {
                                      Copied: vd === dd.name
                                    }),
                                    title: `Play "${dd.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Qd(dd.name), hd(dd.name)
                                    },
                                    children: [(0, qd.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, qd.jsx)(UW, {
                                        kind: Od,
                                        entry: dd,
                                        assets: Xd,
                                        renderedUrl: null
                                      }), (0, qd.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, qd.jsx)(yd, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, qd.jsx)("span", {
                                      className: "DocsTileName",
                                      children: vd === dd.name ? "Copied!" : dd.name
                                    })]
                                  }, dd.anchor);
                                  const md = JW(Od, dd);
                                  return (0, qd.jsxs)("button", {
                                    type: "button",
                                    id: dd.anchor,
                                    className: Rd()("DocsTile", {
                                      Copied: vd === dd.name
                                    }),
                                    title: `Copy "${dd.name}"`,
                                    onClick: () => {
                                      hd(dd.name)
                                    },
                                    children: [(0, qd.jsx)("span", {
                                      className: Rd()("DocsTilePreview", {
                                        Rendered: null !== md
                                      }),
                                      children: (0, qd.jsx)(UW, {
                                        kind: Od,
                                        entry: dd,
                                        assets: Xd,
                                        renderedUrl: md
                                      })
                                    }), (0, qd.jsx)("span", {
                                      className: "DocsTileName",
                                      children: vd === dd.name ? "Copied!" : dd.name
                                    })]
                                  }, dd.anchor)
                                }))
                              })]
                            })
                          }

                          function SW(dd) {
                            let {
                              kind: Od,
                              content: md,
                              blocks: Wd
                            } = dd;
                            return (0, qd.jsx)(qd.Fragment, {
                              children: Gm(Od, md, Wd).map(((dd, md) => "block" === dd.kind ? (0, qd.jsx)(Hm, {
                                block: dd.block
                              }, md) : (0, qd.jsx)(BW, {
                                kind: Od,
                                names: dd.names,
                                isSongs: dd.isSongs
                              }, md)))
                            })
                          }
                          const sW = [{
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

                          function uW(dd) {
                            let {
                              cards: Od = sW,
                              label: md = "Start here"
                            } = dd;
                            const Fd = (0, Wd.useContext)(HO);
                            return (0, qd.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": md,
                              children: Od.map((dd => {
                                let {
                                  pageId: Od,
                                  countNoun: md
                                } = dd;
                                const Wd = Pd(Od);
                                return (0, qd.jsxs)(Xd.c, {
                                  to: Id(Fd, Wd),
                                  className: "DocsLandingCard",
                                  children: [(0, qd.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, qd.jsx)(yd, {
                                      name: Wd.icon
                                    })
                                  }), (0, qd.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Wd.title
                                  }), (0, qd.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Wd.summary
                                  }), md && (0, qd.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [cd(Wd).sections.length, " ", md]
                                  })]
                                }, Od)
                              }))
                            })
                          }
                          const VW = 240;

                          function iW(dd) {
                            let {
                              faces: Od
                            } = dd;
                            return (0, qd.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, qd.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${Od.top}")`
                                }
                              }), (0, qd.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${Od.left}")`
                                }
                              }), (0, qd.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${Od.right}")`
                                }
                              })]
                            })
                          }

                          function AW(dd) {
                            let {
                              src: Od
                            } = dd;
                            const [md, Fd] = (0, Wd.useState)(!1);
                            return md ? null : (0, qd.jsx)("img", {
                              src: Od,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${Od}`), Fd(!0)
                              }
                            })
                          }

                          function rW(dd) {
                            let {
                              kind: Od
                            } = dd;
                            const md = gm(Od),
                              Fd = wW(),
                              Xd = (0, Kd.p)(),
                              [hd, vd] = (0, Wd.useState)(""),
                              [Qd, td] = (0, Wd.useState)(null),
                              [od, Nd] = (0, Wd.useState)(VW),
                              [Hd, bd] = (0, Wd.useState)(null),
                              Td = (0, Wd.useRef)(null),
                              Yd = hd.trim().toLowerCase();
                            (0, Wd.useEffect)((() => {
                              const dd = (0, Jd.l)(Xd.hash),
                                Wd = md.entries.find((md => Am(Od, md.name) === dd));
                              if (Wd) Td.current = Wd.name, vd(Wd.name), td(null), bd(Wd.name);
                              else if (null !== Td.current) {
                                const dd = Td.current;
                                Td.current = null, vd((Od => Od === dd ? "" : Od)), bd(null)
                              }
                            }), [md, Od, Xd.hash, Xd.key]), (0, Wd.useEffect)((() => {
                              var dd;
                              null !== Hd && (null === (dd = document.getElementById(Am(Od, Hd))) || void 0 === dd || dd.scrollIntoView({
                                block: "center"
                              }))
                            }), [Od, Hd]);
                            const gd = md.entries.filter((dd => (!Yd || dd.name.toLowerCase().includes(Yd)) && (!Qd || dd.variants.includes(Qd))));
                            return (0, qd.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [md.notes.length > 0 && (0, qd.jsx)("div", {
                                className: "DocsProse",
                                children: md.notes.map((dd => (0, qd.jsx)("p", {
                                  children: dd
                                }, dd)))
                              }), md.legend.length > 0 && (0, qd.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, qd.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, qd.jsx)("thead", {
                                    children: (0, qd.jsxs)("tr", {
                                      children: [(0, qd.jsx)("th", {
                                        children: "Code"
                                      }), (0, qd.jsx)("th", {
                                        children: "Variant"
                                      }), (0, qd.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, qd.jsx)("tbody", {
                                    children: md.legend.map((dd => (0, qd.jsxs)("tr", {
                                      children: [(0, qd.jsx)("td", {
                                        children: (0, qd.jsx)("button", {
                                          type: "button",
                                          className: Rd()("DocsVariantChip", {
                                            Active: Qd === dd.code
                                          }),
                                          "aria-pressed": Qd === dd.code,
                                          title: `Show only ${Od} with ${dd.meaning} variants`,
                                          onClick: () => {
                                            td(Qd === dd.code ? null : dd.code)
                                          },
                                          children: dd.code
                                        })
                                      }), (0, qd.jsx)("td", {
                                        children: dd.meaning
                                      }), (0, qd.jsx)("td", {
                                        children: (0, qd.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: dd.usage
                                        })
                                      })]
                                    }, dd.code)))
                                  })]
                                })
                              }), md.examples.length > 0 && (0, qd.jsx)(Ed, {
                                lang: "text",
                                code: md.examples.join("\n")
                              }), (0, qd.jsx)(wm, {
                                className: "DocsFilterBar",
                                value: hd,
                                placeholder: `Search ${md.entries.length} ${Od}\u2026`,
                                label: `Search ${Od}`,
                                onChange: dd => {
                                  vd(dd), Nd(VW)
                                },
                                count: Yd || Qd ? {
                                  visible: gd.length,
                                  total: md.entries.length
                                } : null,
                                children: Qd && (0, qd.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    td(null)
                                  },
                                  children: [Qd, " ", (0, qd.jsx)(yd, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, qd.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: gd.slice(0, od).map((dd => {
                                  const md = "blocks" === Od ? null === Fd || void 0 === Fd ? void 0 : Fd.getBlockFaces(dd.name) : null,
                                    Wd = Fd && !md ? Fd.getItemTextureUrl(dd.name) : null;
                                  return (0, qd.jsxs)("div", {
                                    id: Am(Od, dd.name),
                                    className: Rd()("DocsCatalogueTile", {
                                      Linked: dd.name === Hd
                                    }),
                                    children: [(0, qd.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [md && (0, qd.jsx)(iW, {
                                        faces: md
                                      }), Wd && (0, qd.jsx)(AW, {
                                        src: Wd
                                      })]
                                    }), (0, qd.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: dd.name
                                    }), dd.variants.length > 0 && (0, qd.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: dd.variants.map((dd => (0, qd.jsx)("span", {
                                        children: dd
                                      }, dd)))
                                    }), (0, qd.jsx)(pd, {
                                      text: dd.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, dd.name)
                                }))
                              }), gd.length > od && (0, qd.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Nd(gd.length)
                                },
                                children: ["Show all ", gd.length]
                              }), 0 === gd.length && (0, qd.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", Od, " match."]
                              })]
                            })
                          }
                          var GW = md(5599),
                            nW = md(1714);
                          const LW = .95 * GW.c;

                          function PW(dd) {
                            return /^\s*```/.test(dd)
                          }

                          function zW(dd, Od) {
                            const md = [
                              []
                            ];
                            let Wd = !1;
                            for (const Fd of dd.split("\n")) !Wd && Od(Fd) && md.at(-1).length > 0 && md.push([]), PW(Fd) && (Wd = !Wd), md.at(-1).push(Fd);
                            return md.map((dd => dd.join("\n").trim())).filter(Boolean)
                          }

                          function cW(dd, Od) {
                            const md = `${"#".repeat(Od)} `,
                              Wd = [];
                            let Fd = !1;
                            for (const Rd of dd.split("\n")) PW(Rd) ? Fd = !Fd : !Fd && Rd.startsWith(md) && Wd.push(Rd.slice(md.length).trim());
                            return Wd
                          }

                          function jW(dd) {
                            return dd.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class DW {
                            constructor(dd, Od) {
                              this.origin = Od, this.pages = void 0, this.partPaths = new Map;
                              const md = dd.map((dd => {
                                const Od = Od => this.resolveLinks(dd, Od).length,
                                  md = function(dd, Od) {
                                    const md = dd.map((dd => Od(dd.markdown) + 2)),
                                      Wd = md.reduce(((dd, Od) => dd + Od), 0),
                                      Fd = Wd / Math.ceil(Wd / LW),
                                      Rd = [];
                                    let Xd = 0;
                                    return dd.forEach(((dd, Od) => {
                                      const Wd = md[Od];
                                      (0 === Rd.length || Xd + Wd > LW || Xd + Wd / 2 > Fd) && (Rd.push([]), Xd = 0), Rd.at(-1).push(dd), Xd += Wd
                                    })), Rd
                                  }(function(dd, Od) {
                                    return zW(dd, (dd => dd.startsWith("## "))).flatMap((dd => {
                                      var md;
                                      const Wd = null !== (md = cW(dd, 2)[0]) && void 0 !== md ? md : "";
                                      if (Od(dd) <= LW) return [{
                                        markdown: dd,
                                        section: Wd
                                      }];
                                      let Fd = !1,
                                        Rd = "";
                                      return zW(dd, (dd => {
                                        const Od = Fd && "" !== dd.trim();
                                        return Fd = "" === dd.trim(), Od
                                      })).map((dd => {
                                        var Od;
                                        const md = cW(dd, 3),
                                          Fd = dd.startsWith("### ") ? md[0] : Rd;
                                        return Rd = null !== (Od = md.at(-1)) && void 0 !== Od ? Od : Rd, {
                                          markdown: dd,
                                          section: Wd || Fd
                                        }
                                      }))
                                    }))
                                  }(jW(dd), Od), Od);
                                return {
                                  page: dd,
                                  groups: md.length > 1 ? md : []
                                }
                              }));
                              for (const {
                                  page: Wd,
                                  groups: Fd
                                }
                                of md) Fd.forEach(((dd, Od) => {
                                const md = (0, GW.t)(Wd.slug, Od);
                                for (const Fd of dd.flatMap((dd => [...cW(dd.markdown, 2), ...cW(dd.markdown, 3)]))) {
                                  const dd = `${Wd.id}#${(0,Jd.m)(Fd)}`;
                                  this.partPaths.has(dd) || this.partPaths.set(dd, md)
                                }
                              }));
                              this.pages = md.map((dd => {
                                let {
                                  page: Od,
                                  groups: md
                                } = dd;
                                return {
                                  page: Od,
                                  path: (0, GW.s)(Od.slug),
                                  markdown: `# ${Od.title}\n\n${this.resolveLinks(Od,jW(Od))}\n`,
                                  parts: md.map(((dd, Wd) => this.renderPart(Od, dd, Wd, md.length)))
                                }
                              }))
                            }
                            url(dd) {
                              return `${this.origin}${dd}`
                            }
                            getPage(dd) {
                              return this.pages.find((Od => Od.page.id === dd))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((dd => (dd.parts.length > 0 ? dd.parts : [{
                                path: dd.path,
                                label: "",
                                markdown: dd.markdown
                              }]).filter((dd => dd.markdown.length > GW.c))))
                            }
                            markdownUrl(dd, Od) {
                              const md = Od && this.partPaths.get(`${dd.id}#${Od}`) || (0, GW.s)(dd.slug);
                              return this.url(Od ? `${md}#${Od}` : md)
                            }
                            resolveLinks(dd, Od) {
                              return Od.replace(/\]\((#[^)]+)\)/g, ((Od, md) => {
                                var Wd;
                                const Fd = null !== (Wd = Dd(md)) && void 0 !== Wd ? Wd : this.samePageTarget(dd, md);
                                return Fd ? `](${this.markdownUrl(Fd.page,Fd.anchor)})` : Od
                              }))
                            }
                            samePageTarget(dd, Od) {
                              const md = (0, Jd.m)(Od.slice(1));
                              return jd(dd, md) ? {
                                page: dd,
                                anchor: md
                              } : null
                            }
                            renderPart(dd, Od, md, Wd) {
                              const Fd = function(dd) {
                                  const Od = dd.map((dd => dd.section)).filter(Boolean);
                                  if (0 === Od.length) return "";
                                  const md = Od[0],
                                    Wd = Od.at(-1);
                                  return md === Wd ? md : `${md} to ${Wd}`
                                }(Od),
                                Rd = Od.map((dd => dd.markdown)).join("\n\n"),
                                Xd = Fd ? `It covers ${Fd}. ` : "",
                                Kd = `Part ${md+1} of ${Wd} of [${dd.title}](${this.url((0,GW.s)(dd.slug))}). ${Xd}[llms.txt](${this.url(GW.g)}) lists every part.`;
                              return {
                                path: (0, GW.t)(dd.slug, md),
                                label: Fd,
                                markdown: `# ${dd.title}, part ${md+1} of ${Wd}\n\n${Kd}\n\n${this.resolveLinks(dd,Rd)}\n`
                              }
                            }
                            llmsTxt(dd) {
                              const Od = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${eW(GW.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const md of Ld) {
                                Od.push("", `## ${md.title}`, "");
                                for (const dd of md.pageIds) {
                                  const md = this.getPage(dd),
                                    {
                                      page: Wd,
                                      parts: Fd
                                    } = md,
                                    Rd = `About ${eW(md.markdown.length)} tokens${Fd.length>0?`, in ${Fd.length} parts:`:"."}`;
                                  Od.push(`- [${Wd.title}](${this.url(md.path)}): ${Wd.summary} ${Rd}`), Fd.forEach(((dd, md) => {
                                    Od.push(`  - [Part ${md+1}${dd.label?`: ${dd.label}`:""}](${this.url(dd.path)})`)
                                  }))
                                }
                              }
                              return Od.push("", "## Optional", "", `- [Every page in one file](${this.url(GW.e)}): About ${eW(dd.length)} tokens, for a model with a large context window.`, ""), Od.join("\n")
                            }
                            llmsFullTxt() {
                              return Ld.flatMap((dd => dd.pageIds.map((dd => this.getPage(dd).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const dd = this.llmsFullTxt(),
                                Od = this.llmsTxt(dd),
                                md = new Map([
                                  [GW.m, Od],
                                  [GW.g, Od],
                                  [GW.e, dd]
                                ]);
                              for (const Wd of this.pages) {
                                md.set(Wd.path, Wd.markdown);
                                for (const dd of Wd.parts) md.set(dd.path, dd.markdown)
                              }
                              return md
                            }
                          }

                          function eW(dd) {
                            return `${Math.max(1,Math.round(dd/4e3))}K`
                          }
                          let IW = null;

                          function lW() {
                            return IW ??= new DW(nd, nW.c), IW
                          }
                          var CW = md(5607);
                          const ZW = [CW.f, CW.k];

                          function kW(dd) {
                            return lW().getPage(dd.id).parts.length > 0 ? `Read ${GW.k}, then the parts of the Bloxd Code API's ${dd.title} page it lists, so I can ask questions about it.` : `Read ${nW.c}${(0,GW.s)(dd.slug)} so I can ask questions about it. ${CW.i}`
                          }

                          function fW(dd) {
                            let {
                              page: Od
                            } = dd;
                            const [md, Wd] = Td();
                            return (0, qd.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, qd.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Wd(lW().getPage(Od.id).markdown)
                                },
                                children: [(0, qd.jsx)(yd, {
                                  name: !1 === (null === md || void 0 === md ? void 0 : md.failed) ? "check" : "copy"
                                }), (0, qd.jsx)("span", {
                                  children: md ? md.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), ZW.map((dd => (0, qd.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, CW.d)(dd, kW(Od)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, qd.jsx)(yd, {
                                  name: "external-link"
                                }), (0, qd.jsxs)("span", {
                                  children: ["Open in ", dd.name]
                                })]
                              }, dd.name)))]
                            })
                          }

                          function MW(dd) {
                            return `#${[0,1,2].map((Od=>Math.round(Math.min(255,Math.max(0,dd[Od]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function dF(dd) {
                            return [parseInt(dd.slice(1, 3), 16), parseInt(dd.slice(3, 5), 16), parseInt(dd.slice(5, 7), 16)]
                          }

                          function OF(dd) {
                            let {
                              label: Od,
                              min: md,
                              max: Wd,
                              step: Fd,
                              low: Rd,
                              high: Xd,
                              onChange: Kd
                            } = dd;
                            return (0, qd.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, qd.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, qd.jsx)("span", {
                                  children: Od
                                }), (0, qd.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Rd === Xd ? Rd : `${Rd}\u2013${Xd}`
                                })]
                              }), (0, qd.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, qd.jsx)("input", {
                                  type: "range",
                                  min: md,
                                  max: Wd,
                                  step: Fd,
                                  value: Math.min(Wd, Rd),
                                  "aria-label": `Minimum ${Od.toLowerCase()}`,
                                  onChange: dd => {
                                    const Od = Number(dd.target.value);
                                    Kd(Od, Math.max(Od, Xd))
                                  }
                                }), (0, qd.jsx)("input", {
                                  type: "range",
                                  min: md,
                                  max: Wd,
                                  step: Fd,
                                  value: Math.min(Wd, Xd),
                                  "aria-label": `Maximum ${Od.toLowerCase()}`,
                                  onChange: dd => {
                                    const Od = Number(dd.target.value);
                                    Kd(Math.min(Od, Rd), Od)
                                  }
                                })]
                              })]
                            })
                          }

                          function mF(dd) {
                            let {
                              label: Od,
                              min: md,
                              max: Wd,
                              step: Fd,
                              value: Rd,
                              onChange: Xd,
                              format: Kd = String
                            } = dd;
                            return (0, qd.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, qd.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, qd.jsx)("span", {
                                  children: Od
                                }), (0, qd.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Kd(Rd)
                                })]
                              }), (0, qd.jsx)("input", {
                                type: "range",
                                min: md,
                                max: Wd,
                                step: Fd,
                                value: Math.min(Wd, Math.max(md, Rd)),
                                "aria-label": Od,
                                onChange: dd => {
                                  Xd(Number(dd.target.value))
                                }
                              })]
                            })
                          }

                          function WF(dd) {
                            let {
                              opts: Od,
                              onChange: md
                            } = dd;
                            const Wd = Od.colorGradients;
                            if (!Im(Wd)) return (0, qd.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, qd.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, qd.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, qd.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Wd.map(((dd, Od) => (0, qd.jsx)("input", {
                                  type: "color",
                                  value: MW(dd.color),
                                  "aria-label": `Colour ${Od+1}`,
                                  onChange: dd => {
                                    const Fd = [...Wd];
                                    Fd[Od] = {
                                      color: dF(dd.target.value)
                                    }, md(Fd)
                                  }
                                }, Od)))
                              })]
                            });
                            const Fd = (dd, Od) => {
                              const Fd = [...Wd];
                              Fd[dd] = Od, md(Fd)
                            };
                            return (0, qd.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, qd.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, qd.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, qd.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Wd.map(((dd, Od) => {
                                var md;
                                const Wd = null !== (md = dd.maxColor) && void 0 !== md ? md : dd.minColor;
                                return (0, qd.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, qd.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * dd.timeFraction), "%"]
                                  }), (0, qd.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${MW(dd.minColor)}, ${MW(Wd)})`
                                    }
                                  }), (0, qd.jsx)("input", {
                                    type: "color",
                                    value: MW(dd.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*dd.timeFraction)}%`,
                                    onChange: md => {
                                      Fd(Od, {
                                        ...dd,
                                        minColor: [...dF(md.target.value), dd.minColor[3]]
                                      })
                                    }
                                  }), (0, qd.jsx)("input", {
                                    type: "color",
                                    value: MW(Wd),
                                    "aria-label": `Maximum colour at ${Math.round(100*dd.timeFraction)}%`,
                                    onChange: md => {
                                      Fd(Od, {
                                        ...dd,
                                        maxColor: [...dF(md.target.value), Wd[3]]
                                      })
                                    }
                                  })]
                                }, Od)
                              }))]
                            })
                          }
                          const FF = [-.5, -.5, -.5],
                            RF = [.5, .5, .5],
                            XF = [0, 1, 2, 3, 4, 5, 6, 7].map((dd => [1 & dd ? RF[0] : FF[0], 2 & dd ? RF[1] : FF[1], 4 & dd ? RF[2] : FF[2]]));class KF {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(dd, Od, md, Wd) {
                              const Fd = Math.round(31 * Od),
                                Rd = Math.round(31 * md),
                                Xd = Math.round(31 * Wd),
                                Kd = `${Fd}|${Rd}|${Xd}`;
                              let hd = this.tints.get(dd);
                              (!hd || hd.size > 2e3) && (hd = new Map, this.tints.set(dd, hd));
                              let vd = hd.get(Kd);
                              if (vd) return vd;
                              vd = document.createElement("canvas"), vd.width = dd.naturalWidth || 16, vd.height = dd.naturalHeight || 16;
                              const Qd = vd.getContext("2d");
                              return Qd ? (Qd.imageSmoothingEnabled = !1, Qd.drawImage(dd, 0, 0, vd.width, vd.height), Qd.globalCompositeOperation = "multiply", Qd.fillStyle = `rgb(${Fd/31*255}, ${Rd/31*255}, ${Xd/31*255})`, Qd.fillRect(0, 0, vd.width, vd.height), Qd.globalCompositeOperation = "destination-in", Qd.drawImage(dd, 0, 0, vd.width, vd.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), hd.set(Kd, vd), vd
                            }
                          }

                          function hF(dd) {
                            let {
                              opts: Od,
                              textureUrl: md,
                              burst: Fd,
                              paused: Rd
                            } = dd;
                            const Xd = (0, Wd.useRef)(null),
                              Kd = (0, Wd.useRef)(Od);
                            Kd.current = Od;
                            const hd = (0, Wd.useRef)(Rd);
                            hd.current = Rd;
                            const vd = (0, Wd.useRef)(null),
                              Qd = (0, Wd.useRef)(null),
                              td = (0, Wd.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(dd) {
                                let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const md = [-.5, -.5, -.5],
                                  Wd = [.5, .5, .5];
                                let Fd = .5;
                                for (let Rd = 0; Rd < 40; Rd++) {
                                  const Rd = Cm(dd, md, Wd, Od),
                                    Xd = Math.max(Rd.life / 30, .001);
                                  for (; fm(Rd, dd.gravity, Xd);) Fd = Math.max(Fd, Math.hypot(Rd.pos[0], Rd.pos[1], Rd.pos[2]) + Rd.size / 2)
                                }
                                return Fd
                              }(Od)))), [Od]),
                              od = (0, Wd.useRef)(td);
                            return od.current = td, (0, Wd.useEffect)((() => {
                              if (vd.current = null, !md) return;
                              const dd = new Image;
                              let Od = !1;
                              return dd.onload = () => {
                                Od || (vd.current = dd)
                              }, dd.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${md}`)
                              }, dd.src = md, () => {
                                Od = !0
                              }
                            }), [md]), (0, Wd.useEffect)((() => {
                              var dd;
                              null === (dd = Qd.current) || void 0 === dd || dd.call(Qd)
                            }), [Od, Fd]), (0, Wd.useEffect)((() => {
                              const dd = Xd.current,
                                Od = null === dd || void 0 === dd ? void 0 : dd.getContext("2d");
                              if (!dd || !Od) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const md = new KF;
                              let Wd = [],
                                Fd = 0,
                                Rd = -.7,
                                td = od.current,
                                Nd = performance.now(),
                                qd = 0,
                                Hd = !0,
                                yd = null;
                              const bd = () => {
                                const dd = Kd.current,
                                  Od = Math.min(400, Math.max(0, Math.ceil(dd.manualEmitCount)));
                                Wd = [];
                                for (let md = 0; md < Od; md++) Wd.push(Cm(dd, FF, RF, Math.random));
                                Fd = 0
                              };
                              Qd.current = bd, bd();
                              const Td = Xd => {
                                qd = requestAnimationFrame(Td);
                                const Qd = Math.min(.05, (Xd - Nd) / 1e3);
                                if (Nd = Xd, !Hd) return;
                                const pd = window.devicePixelRatio || 1,
                                  Yd = Math.round(dd.clientWidth * pd),
                                  gd = Math.round(dd.clientHeight * pd);
                                if (0 === Yd || 0 === gd) return;
                                dd.width === Yd && dd.height === gd || (dd.width = Yd, dd.height = gd);
                                const wd = Kd.current;
                                null === yd && (Rd += .18 * Qd), td += (od.current - td) * Math.min(1, 4 * Qd);
                                const Ed = .6 * Qd;
                                Wd = Wd.filter((dd => fm(dd, wd.gravity, Ed))), 0 !== Wd.length || hd.current || (Fd += Qd, Fd > .6 && bd());
                                const Jd = function(dd, Od, md, Wd) {
                                  const Fd = 3.2 * Wd,
                                    Rd = .44 * Math.min(dd, Od) * Fd / Wd,
                                    Xd = Math.cos(md),
                                    Kd = Math.sin(md),
                                    hd = Math.cos(.42),
                                    vd = Math.sin(.42);
                                  return (md, Wd, Qd) => {
                                    const td = md * Kd + Qd * Xd,
                                      od = Fd - (Wd * vd + td * hd);
                                    if (od < .05) return null;
                                    const Nd = Rd / od;
                                    return {
                                      x: dd / 2 + (md * Xd - Qd * Kd) * Nd,
                                      y: Od / 2 - (Wd * hd - td * vd) * Nd,
                                      scale: Nd,
                                      depth: od
                                    }
                                  }
                                }(Yd, gd, Rd, td);
                                ! function(dd, Od, md, Wd, Fd) {
                                  const Rd = dd.createLinearGradient(0, 0, 0, md);
                                  Rd.addColorStop(0, "#23262d"), Rd.addColorStop(1, "#16181c"), dd.globalCompositeOperation = "source-over", dd.globalAlpha = 1, dd.fillStyle = Rd, dd.fillRect(0, 0, Od, md);
                                  const Xd = (Od, md) => {
                                      const Fd = Wd(Od[0], Od[1], Od[2]),
                                        Rd = Wd(md[0], md[1], md[2]);
                                      Fd && Rd && (dd.beginPath(), dd.moveTo(Fd.x, Fd.y), dd.lineTo(Rd.x, Rd.y), dd.stroke())
                                    },
                                    Kd = Math.ceil(Fd) + 1,
                                    hd = FF[1];
                                  dd.lineWidth = 1, dd.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let vd = -Kd; vd <= Kd; vd++) Xd([vd + .5, hd, .5 - Kd], [vd + .5, hd, Kd + .5]), Xd([.5 - Kd, hd, vd + .5], [Kd + .5, hd, vd + .5]);
                                  dd.strokeStyle = "rgba(255, 255, 255, 0.28)", dd.setLineDash([4, 4]);
                                  for (const vd of XF)
                                    for (const dd of XF) {
                                      const Od = [0, 1, 2].filter((Od => vd[Od] !== dd[Od]));
                                      1 === Od.length && vd[Od[0]] < dd[Od[0]] && Xd(vd, dd)
                                    }
                                  dd.setLineDash([])
                                }(Od, Yd, gd, Jd, td);
                                const Ud = vd.current,
                                  xd = Wd.map((dd => ({
                                    particle: dd,
                                    at: Jd(dd.pos[0], dd.pos[1], dd.pos[2])
                                  }))).filter((dd => null !== dd.at)).sort(((dd, Od) => Od.at.depth - dd.at.depth));
                                Od.imageSmoothingEnabled = !1;
                                for (const dd of function(dd) {
                                    switch (dd) {
                                      case zm.g.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case zm.g.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case zm.g.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case zm.g.MultiplyAdd:
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
                                  }(wd.blendMode)) {
                                  Od.globalCompositeOperation = dd.operation;
                                  for (const {
                                      particle: Wd,
                                      at: Fd
                                    }
                                    of xd) {
                                    const [Rd, Xd, Kd, hd] = km(Wd), vd = Math.max(1, Wd.size * Fd.scale);
                                    Od.globalAlpha = dd.usesAlpha ? Math.min(1, Math.max(0, hd)) : 1, Ud ? Od.drawImage(md.get(Ud, Rd, Xd, Kd), Fd.x - vd / 2, Fd.y - vd / 2, vd, vd) : (Od.fillStyle = `rgb(${255*Rd}, ${255*Xd}, ${255*Kd})`, Od.fillRect(Fd.x - vd / 2, Fd.y - vd / 2, vd, vd))
                                  }
                                }
                                Od.globalCompositeOperation = "source-over", Od.globalAlpha = 1
                              };
                              qd = requestAnimationFrame(Td);
                              const pd = new IntersectionObserver((dd => {
                                let [Od] = dd;
                                Hd = Od.isIntersecting
                              }));
                              pd.observe(dd);
                              const Yd = Od => {
                                  yd = Od.clientX, dd.setPointerCapture(Od.pointerId)
                                },
                                gd = dd => {
                                  null !== yd && (Rd += .01 * (dd.clientX - yd), yd = dd.clientX)
                                },
                                wd = () => {
                                  yd = null
                                };
                              return dd.addEventListener("pointerdown", Yd), dd.addEventListener("pointermove", gd), dd.addEventListener("pointerup", wd), dd.addEventListener("pointercancel", wd), () => {
                                cancelAnimationFrame(qd), pd.disconnect(), Qd.current = null, dd.removeEventListener("pointerdown", Yd), dd.removeEventListener("pointermove", gd), dd.removeEventListener("pointerup", wd), dd.removeEventListener("pointercancel", wd)
                              }
                            }), []), (0, qd.jsx)("canvas", {
                              ref: Xd,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${Od.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const vF = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            QF = [{
                              mode: zm.g.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: zm.g.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: zm.g.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: zm.g.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: zm.g.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            tF = (0, Wd.forwardRef)((function(dd, Od) {
                              var md, Fd;
                              let {
                                textures: Xd
                              } = dd;
                              const Kd = wW(),
                                hd = (0, Wd.useRef)(null),
                                [vd, Qd] = (0, Wd.useState)(jm),
                                [td, od] = (0, Wd.useState)("example"),
                                [Nd, Hd] = (0, Wd.useState)(0),
                                [bd, Td] = (0, Wd.useState)(!1),
                                Yd = dd => {
                                  const Od = "example" === dd ? jm : cm(dd);
                                  Od && (Qd(Od), od(dd))
                                };
                              (0, Wd.useImperativeHandle)(Od, (() => ({
                                preview: dd => {
                                  var Od;
                                  Yd(dd), null === (Od = hd.current) || void 0 === Od || Od.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const gd = dd => {
                                  Qd({
                                    ...vd,
                                    ...dd
                                  }), od(null)
                                },
                                wd = function(dd, Od) {
                                  if (null !== Od) return `${mW}    presetId: "${Od}",\n${WW}\n})`;
                                  const md = dd.velocityGradients.map((dd => `        {\n            timeFraction: ${Mm(dd.timeFraction)},\n            factor: ${Mm(dd.factor)},\n            factor2: ${Mm(dd.factor2)},\n        },`)),
                                    Wd = [`    dir1: ${dW(dd.dir1)},`, `    dir2: ${dW(dd.dir2)},`, WW, `    texture: "${dd.texture}",`, `    minLifeTime: ${Mm(dd.minLifeTime)},`, `    maxLifeTime: ${Mm(dd.maxLifeTime)},`, `    minEmitPower: ${Mm(dd.minEmitPower)},`, `    maxEmitPower: ${Mm(dd.maxEmitPower)},`, `    minSize: ${Mm(dd.minSize)},`, `    maxSize: ${Mm(dd.maxSize)},`, `    manualEmitCount: ${Mm(dd.manualEmitCount)},`, `    gravity: ${dW(dd.gravity)},`, `    colorGradients: ${OW(dd.colorGradients,"    ")},`, `    velocityGradients: ${md.length>0?`[\n${md.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Mm(dd.blendMode)},`];
                                  return void 0 !== dd.hideDist && Wd.push(`    hideDist: ${Mm(dd.hideDist)},`), `${mW}${Wd.join("\n")}\n})`
                                }(vd, null === td || "example" === td ? null : td),
                                Jd = Xd.includes(vd.texture) ? Xd : [...Xd, vd.texture];
                              return (0, qd.jsxs)("section", {
                                ref: hd,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, qd.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, qd.jsxs)("div", {
                                    children: [(0, qd.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, qd.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, qd.jsx)(pd, {
                                    text: wd,
                                    label: "Copy code"
                                  })]
                                }), (0, qd.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, qd.jsx)("button", {
                                    type: "button",
                                    className: Rd()("DocsVariantChip", {
                                      Active: "example" === td
                                    }),
                                    onClick: () => {
                                      Yd("example")
                                    },
                                    children: "Example"
                                  }), vF.filter((dd => null !== cm(dd))).map((dd => (0, qd.jsx)("button", {
                                    type: "button",
                                    className: Rd()("DocsVariantChip", {
                                      Active: td === dd
                                    }),
                                    onClick: () => {
                                      Yd(dd)
                                    },
                                    children: dd
                                  }, dd))), (0, qd.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== td && void 0 !== td ? td : "custom",
                                    "aria-label": "Preset",
                                    onChange: dd => {
                                      Yd(dd.target.value)
                                    },
                                    children: [(0, qd.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === td && (0, qd.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), Pm.d.map((dd => (0, qd.jsx)("option", {
                                      value: dd,
                                      children: dd
                                    }, dd)))]
                                  })]
                                }), (0, qd.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, qd.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, qd.jsx)(hF, {
                                      opts: vd,
                                      textureUrl: null !== (md = null === Kd || void 0 === Kd ? void 0 : Kd.getParticleTextureUrl(vd.texture)) && void 0 !== md ? md : null,
                                      burst: Nd,
                                      paused: bd
                                    }), (0, qd.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, qd.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Hd(Nd + 1)
                                        },
                                        children: [(0, qd.jsx)(yd, {
                                          name: "replay"
                                        }), (0, qd.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, qd.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": bd,
                                        onClick: () => {
                                          Td(!bd)
                                        },
                                        children: [(0, qd.jsx)(yd, {
                                          name: bd ? "play" : "pause"
                                        }), (0, qd.jsx)("span", {
                                          children: bd ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, qd.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, qd.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, qd.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, qd.jsx)("span", {
                                          children: "Texture"
                                        }), (0, qd.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: vd.texture
                                        })]
                                      }), (0, qd.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: Jd.map((dd => {
                                          var Od;
                                          const md = null !== (Od = null === Kd || void 0 === Kd ? void 0 : Kd.getParticleTextureUrl(dd)) && void 0 !== Od ? Od : null;
                                          return (0, qd.jsx)("button", {
                                            type: "button",
                                            className: Rd()("DocsParticleTexture", {
                                              Active: vd.texture === dd
                                            }),
                                            title: dd,
                                            "aria-label": dd,
                                            "aria-pressed": vd.texture === dd,
                                            onClick: () => {
                                              gd({
                                                texture: dd
                                              })
                                            },
                                            children: md ? (0, qd.jsx)("img", {
                                              src: md,
                                              alt: ""
                                            }) : (0, qd.jsx)(yd, {
                                              name: "image"
                                            })
                                          }, dd)
                                        }))
                                      })]
                                    }), (0, qd.jsx)(mF, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: vd.manualEmitCount,
                                      onChange: dd => {
                                        gd({
                                          manualEmitCount: dd
                                        })
                                      }
                                    }), (0, qd.jsx)(OF, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: vd.minLifeTime,
                                      high: vd.maxLifeTime,
                                      onChange: (dd, Od) => {
                                        gd({
                                          minLifeTime: dd,
                                          maxLifeTime: Od
                                        })
                                      }
                                    }), (0, qd.jsx)(OF, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: vd.minEmitPower,
                                      high: vd.maxEmitPower,
                                      onChange: (dd, Od) => {
                                        gd({
                                          minEmitPower: dd,
                                          maxEmitPower: Od
                                        })
                                      }
                                    }), (0, qd.jsx)(OF, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: vd.minSize,
                                      high: vd.maxSize,
                                      onChange: (dd, Od) => {
                                        gd({
                                          minSize: dd,
                                          maxSize: Od
                                        })
                                      }
                                    }), (0, qd.jsx)(mF, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Fd = vd.gravity[1]) && void 0 !== Fd ? Fd : 0,
                                      onChange: dd => {
                                        var Od, md;
                                        gd({
                                          gravity: [null !== (Od = vd.gravity[0]) && void 0 !== Od ? Od : 0, dd, null !== (md = vd.gravity[2]) && void 0 !== md ? md : 0]
                                        })
                                      }
                                    }), (0, qd.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, qd.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, qd.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, qd.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: vd.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: dd => {
                                          gd({
                                            blendMode: Number(dd.target.value)
                                          })
                                        },
                                        children: QF.map((dd => {
                                          let {
                                            mode: Od,
                                            label: md
                                          } = dd;
                                          return (0, qd.jsx)("option", {
                                            value: Od,
                                            children: md
                                          }, Od)
                                        }))
                                      })]
                                    }), (0, qd.jsx)(WF, {
                                      opts: vd,
                                      onChange: dd => {
                                        gd({
                                          colorGradients: dd
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, qd.jsx)(Ed, {
                                  code: wd,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var oF = md(5134),
                            NF = md(2060);

                          function qF(dd, Od) {
                            return dd ? oF.e.includes(Od) ? dd.getIngameIconUrl(Od) : dd.getItemIconUrl(Od) : null
                          }

                          function HF(dd) {
                            var Od, md, Wd;
                            let {
                              part: Fd,
                              assets: Xd
                            } = dd;
                            const Kd = qF(Xd, Fd.icon),
                              hd = null !== (Od = null === (md = Fd.style) || void 0 === md ? void 0 : md.fontSize) && void 0 !== Od ? Od : "1.8em",
                              vd = (0, LO.Yb)(Fd.style);
                            return (0, qd.jsxs)("span", {
                              className: Rd()("DocsBloxdTextIcon", {
                                Missing: !Kd
                              }),
                              style: {
                                width: hd,
                                height: hd,
                                opacity: null === (Wd = Fd.style) || void 0 === Wd ? void 0 : Wd.opacity
                              },
                              title: Kd ? void 0 : "No Bloxd icon, item or block has this name",
                              children: [Kd && vd && (0, qd.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: vd,
                                  maskImage: `url("${Kd}")`,
                                  WebkitMaskImage: `url("${Kd}")`
                                }
                              }), Kd ? (0, qd.jsx)("img", {
                                src: Kd,
                                alt: "",
                                className: Rd()({
                                  Tinted: vd
                                })
                              }) : (0, qd.jsx)(yd, {
                                name: "image"
                              })]
                            })
                          }

                          function yF(dd) {
                            let {
                              parts: Od,
                              className: md
                            } = dd;
                            const Wd = wW(),
                              Fd = [];
                            let Xd = [];
                            const Kd = dd => {
                              Xd.length > 0 && (Fd.push((0, qd.jsx)(NF.d, {
                                text: Xd
                              }, `run-${dd}`)), Xd = [])
                            };
                            return Od.forEach(((dd, Od) => {
                              "icon" !== DO(dd) || zO(dd.icon) ? Xd.push(dd) : (Kd(Od), Fd.push((0, qd.jsx)(HF, {
                                part: dd,
                                assets: Wd
                              }, `icon-${Od}`)))
                            })), Kd(Od.length), (0, qd.jsx)("div", {
                              className: Rd()("DocsStyledTextPreview", md),
                              children: Fd
                            })
                          }
                          const bF = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let TF = null;

                          function pF(dd) {
                            if (TF ??= document.createElement("canvas").getContext("2d"), !TF) return "#000000";
                            TF.fillStyle = "#000000", TF.fillStyle = dd;
                            const Od = TF.fillStyle;
                            return Od.startsWith("#") ? Od : "#000000"
                          }

                          function YF(dd) {
                            let {
                              value: Od,
                              label: md,
                              onChange: Wd
                            } = dd;
                            return (0, qd.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, qd.jsx)("input", {
                                type: "color",
                                value: pF(Od),
                                "aria-label": `${md} picker`,
                                onChange: dd => {
                                  Wd(dd.target.value)
                                }
                              }), (0, qd.jsx)("input", {
                                type: "text",
                                value: Od,
                                placeholder: "#ffb914 or gold",
                                "aria-label": md,
                                spellCheck: !1,
                                onChange: dd => {
                                  Wd(dd.target.value)
                                }
                              })]
                            })
                          }

                          function gF(dd) {
                            let {
                              value: Od,
                              fontAwesomeIcons: md,
                              onChange: Fd
                            } = dd;
                            const Xd = wW(),
                              [Kd, hd] = (0, Wd.useState)(zO(Od) ? "fontAwesome" : "bloxd"),
                              [vd, Qd] = (0, Wd.useState)(""),
                              td = vd.trim().toLowerCase(),
                              od = "bloxd" === Kd ? oF.e : md,
                              Nd = td ? od.filter((dd => dd.toLowerCase().includes(td))) : od;
                            return (0, qd.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, qd.jsx)("input", {
                                type: "text",
                                value: Od,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: dd => {
                                  Fd(dd.target.value)
                                }
                              }), (0, qd.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, qd.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((dd => (0, qd.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": Kd === dd,
                                    className: Rd()("DocsVariantChip", {
                                      Active: Kd === dd
                                    }),
                                    onClick: () => {
                                      hd(dd)
                                    },
                                    children: "bloxd" === dd ? `Bloxd icons (${oF.e.length})` : `Font Awesome (${md.length})`
                                  }, dd))), (0, qd.jsx)("input", {
                                    type: "search",
                                    value: vd,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: dd => {
                                      Qd(dd.target.value)
                                    }
                                  })
                                ]
                              }), (0, qd.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Nd.map((dd => {
                                  const md = "bloxd" === Kd ? qF(Xd, dd) : null;
                                  return (0, qd.jsx)("button", {
                                    type: "button",
                                    title: dd,
                                    "aria-label": dd,
                                    "aria-pressed": dd === Od,
                                    className: Rd()("DocsIconPickerOption", {
                                      Active: dd === Od
                                    }),
                                    onClick: () => {
                                      Fd(dd)
                                    },
                                    children: "fontAwesome" === Kd ? (0, qd.jsx)(am.c, {
                                      name: dd
                                    }) : md ? (0, qd.jsx)("img", {
                                      src: md,
                                      alt: ""
                                    }) : (0, qd.jsx)(yd, {
                                      name: "image"
                                    })
                                  }, dd)
                                })), 0 === Nd.length && (0, qd.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", vd, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function wF(dd) {
                            let {
                              property: Od,
                              value: md,
                              fontAwesomeIcons: Wd,
                              onChange: Fd
                            } = dd;
                            const {
                              field: Rd,
                              label: Xd
                            } = Od, Kd = dd => "" !== dd || Od.isRequired ? dd : void 0;
                            switch (Rd.kind) {
                              case "text":
                                return Rd.multiline ? (0, qd.jsx)("textarea", {
                                  value: String(null !== md && void 0 !== md ? md : ""),
                                  rows: 2,
                                  "aria-label": Xd,
                                  onChange: dd => {
                                    Fd(dd.target.value)
                                  }
                                }) : (0, qd.jsx)("input", {
                                  type: "text",
                                  value: String(null !== md && void 0 !== md ? md : ""),
                                  "aria-label": Xd,
                                  onChange: dd => {
                                    Fd(Kd(dd.target.value))
                                  }
                                });
                              case "size":
                                return (0, qd.jsx)("input", {
                                  type: "text",
                                  value: String(null !== md && void 0 !== md ? md : ""),
                                  placeholder: Od.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Xd,
                                  spellCheck: !1,
                                  onChange: dd => {
                                    Fd(Kd(dd.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, qd.jsx)(YF, {
                                  value: String(null !== md && void 0 !== md ? md : ""),
                                  label: Xd,
                                  onChange: dd => {
                                    Fd(Kd(dd))
                                  }
                                });
                              case "colours": {
                                const dd = Array.isArray(md) ? md : [],
                                  Od = dd => {
                                    Fd(dd.length > 0 ? dd : void 0)
                                  };
                                return (0, qd.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [dd.map(((md, Wd) => (0, qd.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, qd.jsx)(YF, {
                                      value: md,
                                      label: `${Xd} ${Wd+1}`,
                                      onChange: md => {
                                        Od(dd.map(((dd, Od) => Od === Wd ? md : dd)))
                                      }
                                    }), (0, qd.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Wd+1}`,
                                      onClick: () => {
                                        Od(dd.filter(((dd, Od) => Od !== Wd)))
                                      },
                                      children: (0, qd.jsx)(yd, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Wd))), (0, qd.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var md;
                                      Od([...dd, null !== (md = dd.at(-1)) && void 0 !== md ? md : "#ffffff"])
                                    },
                                    children: [(0, qd.jsx)(yd, {
                                      name: "plus"
                                    }), 0 === dd.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var hd;
                                const dd = "number" === typeof md ? md : Number(null !== (hd = Od.defaultText) && void 0 !== hd ? hd : 0);
                                return (0, qd.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, qd.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: dd,
                                    "aria-label": Xd,
                                    onChange: dd => {
                                      Fd(Number(dd.target.value))
                                    }
                                  }), (0, qd.jsx)("output", {
                                    children: dd.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, qd.jsxs)("select", {
                                  value: String(null !== md && void 0 !== md ? md : ""),
                                  "aria-label": Xd,
                                  onChange: dd => {
                                    Fd(Kd(dd.target.value))
                                  },
                                  children: [!Od.isRequired && (0, qd.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", Od.defaultText, ")"]
                                  }), Rd.options.map((dd => (0, qd.jsx)("option", {
                                    value: dd,
                                    children: dd
                                  }, dd)))]
                                });
                              case "icon":
                                return (0, qd.jsx)(gF, {
                                  value: String(null !== md && void 0 !== md ? md : ""),
                                  fontAwesomeIcons: Wd,
                                  onChange: Fd
                                })
                            }
                          }

                          function aF(dd) {
                            let Od;
                            try {
                              Od = JSON.parse(dd)
                            } catch (md) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${md.message}`
                              }
                            }
                            return Fm(Od) ? {
                              part: Od,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function EF(dd) {
                            let {
                              parts: Od,
                              index: md,
                              fontAwesomeIcons: Fd,
                              onChange: Rd,
                              qS: Xd,
                              onClose: Kd
                            } = dd;
                            const hd = (0, Wd.useContext)(yO),
                              Qd = (0, Wd.useRef)(null),
                              td = Od[md],
                              od = DO(td),
                              [Nd, Hd] = (0, Wd.useState)((() => JSON.stringify(td, null, 2))),
                              bd = (0, Wd.useMemo)((() => "other" === od ? aF(Nd).error : null), [od, Nd]);
                            (0, Wd.useEffect)((() => {
                              var dd;
                              null === (dd = Qd.current) || void 0 === dd || dd.focus()
                            }), []);
                            const Td = (0, qd.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: dd => {
                                dd.target === dd.currentTarget && Kd()
                              },
                              children: (0, qd.jsxs)("div", {
                                ref: Qd,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${md+1}: ${cO[od]}`,
                                tabIndex: -1,
                                onKeyDown: dd => {
                                  "Escape" === dd.key ? (dd.stopPropagation(), Kd()) : "Tab" === dd.key && Qd.current && function(dd, Od) {
                                    const md = Array.from(dd.querySelectorAll(sO)),
                                      Wd = md[0],
                                      Fd = md.at(-1);
                                    if (!Wd || !Fd) return;
                                    const Rd = document.activeElement;
                                    !Od.shiftKey || Rd !== Wd && Rd !== dd ? Od.shiftKey || Rd !== Fd || (Od.preventDefault(), Wd.focus()) : (Od.preventDefault(), Fd.focus())
                                  }(Qd.current, dd)
                                },
                                children: [(0, qd.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, qd.jsxs)("div", {
                                    children: [(0, qd.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", md + 1]
                                    }), (0, qd.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: cO[od]
                                    })]
                                  }), (0, qd.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: Kd,
                                    children: (0, qd.jsx)(yd, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, qd.jsx)(yF, {
                                  parts: Od,
                                  className: "DocsTextDialogPreview"
                                }), (0, qd.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === od ? (0, qd.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, qd.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, qd.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Nd,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: dd => {
                                        Hd(dd.target.value);
                                        const Od = aF(dd.target.value);
                                        null !== Od.part && Rd(Od.part)
                                      }
                                    }), bd && (0, qd.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: bd
                                    })]
                                  }) : IO[od].map((dd => {
                                    const Od = CO(td, dd.path),
                                      md = dd.isRequired ? JSON.stringify(kO(td, dd.path)) === JSON.stringify(td) : void 0 === Od;
                                    return (0, qd.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, qd.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, qd.jsx)("span", {
                                          children: dd.label
                                        }), (0, qd.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: md,
                                          "aria-label": `Reset ${dd.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Rd(kO(td, dd.path))
                                          },
                                          children: [(0, qd.jsx)(yd, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, qd.jsx)(wF, {
                                        property: dd,
                                        value: Od,
                                        fontAwesomeIcons: Fd,
                                        onChange: Od => {
                                          Rd(ZO(td, dd.path, Od))
                                        }
                                      }), !dd.isRequired && (0, qd.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", dd.defaultText]
                                      })]
                                    }, dd.path.join("."))
                                  }))
                                }), (0, qd.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, qd.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Xd,
                                    children: [(0, qd.jsx)(yd, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, qd.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: Kd,
                                    children: "Done"
                                  })]
                                }), (0, qd.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: bF.map((dd => (0, qd.jsx)("option", {
                                    value: dd
                                  }, dd)))
                                })]
                              })
                            });
                            return hd ? (0, vd.createPortal)(Td, hd) : Td
                          }
                          const JF = [{
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
                            UF = Object.keys(jO);

                          function xF(dd) {
                            let {
                              fontAwesomeIcons: Od
                            } = dd;
                            const [md, Fd] = (0, Wd.useState)(JF[0].parts), [Xd, Kd] = (0, Wd.useState)((() => Om(JF[0].parts))), [hd, vd] = (0, Wd.useState)(null), [Qd, td] = (0, Wd.useState)(!1), [od, Nd] = (0, Wd.useState)(null), [Hd, bd] = (0, Wd.useState)(!1), [Td, pd] = (0, Wd.useState)(null), Yd = (0, Wd.useRef)(null), gd = Om(md);
                            (0, Wd.useLayoutEffect)((() => {
                              var dd;
                              if (!Td) return;
                              const Od = dd => {
                                  var Od;
                                  return null === (Od = Yd.current) || void 0 === Od ? void 0 : Od.querySelector(`[data-focus-key="${dd}"]`)
                                },
                                md = Od(Td.key);
                              null === (dd = md && !md.disabled ? md : Od(Td.fallback)) || void 0 === dd || dd.focus(), pd(null)
                            }), [Td]);
                            const wd = dd => {
                                Fd(dd), Kd(Om(dd)), vd(null)
                              },
                              Jd = dd => {
                                wd(md.filter(((Od, md) => md !== dd))), pd({
                                  key: `edit-${Math.min(dd,md.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              Ud = (dd, Od) => {
                                const Wd = [...md],
                                  [Fd] = Wd.splice(dd, 1);
                                Wd.splice(dd + Od, 0, Fd), wd(Wd);
                                pd({
                                  key: `${Od<0?"up":"down"}-${dd+Od}`,
                                  fallback: `edit-${dd+Od}`
                                })
                              };
                            return (0, qd.jsxs)("section", {
                              ref: Yd,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, qd.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, qd.jsxs)("div", {
                                  children: [(0, qd.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, qd.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, qd.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: JF.map((dd => (0, qd.jsx)("button", {
                                  type: "button",
                                  className: Rd()("DocsVariantChip", {
                                    Active: gd === Om(dd.parts)
                                  }),
                                  onClick: () => {
                                    wd(dd.parts)
                                  },
                                  children: dd.label
                                }, dd.label)))
                              }), (0, qd.jsx)(yF, {
                                parts: md,
                                className: "DocsTextEditorPreview"
                              }), (0, qd.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, qd.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, qd.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, qd.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [md.map(((dd, Od) => {
                                      const Wd = DO(dd);
                                      return (0, qd.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, qd.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${Od}`,
                                          "aria-label": `Edit part ${Od+1}, ${cO[Wd]}`,
                                          onClick: () => {
                                            Nd(Od)
                                          },
                                          children: [(0, qd.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: cO[Wd]
                                          }), (0, qd.jsx)(yF, {
                                            parts: [dd],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Wd && (0, qd.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: fO(dd)
                                          })]
                                        }), (0, qd.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, qd.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Od+1} up`,
                                            "data-focus-key": `up-${Od}`,
                                            disabled: 0 === Od,
                                            onClick: () => {
                                              Ud(Od, -1)
                                            },
                                            children: (0, qd.jsx)(yd, {
                                              name: "chevron-up"
                                            })
                                          }), (0, qd.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${Od+1} down`,
                                            "data-focus-key": `down-${Od}`,
                                            disabled: Od === md.length - 1,
                                            onClick: () => {
                                              Ud(Od, 1)
                                            },
                                            children: (0, qd.jsx)(yd, {
                                              name: "chevron-down"
                                            })
                                          }), (0, qd.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${Od+1}`,
                                            onClick: () => {
                                              Jd(Od)
                                            },
                                            children: (0, qd.jsx)(yd, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, Od)
                                    })), 0 === md.length && (0, qd.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, qd.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: dd => {
                                      "Escape" === dd.key && Hd && (dd.stopPropagation(), bd(!1), pd({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, qd.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Hd,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        bd(!Hd)
                                      },
                                      children: [(0, qd.jsx)(yd, {
                                        name: "plus"
                                      }), "Add a part", (0, qd.jsx)(yd, {
                                        name: Hd ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Hd && (0, qd.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: UF.map((dd => (0, qd.jsx)("li", {
                                        children: (0, qd.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (dd => {
                                              wd([...md, jO[dd]]), bd(!1), Nd(md.length)
                                            })(dd)
                                          },
                                          children: cO[dd]
                                        })
                                      }, dd)))
                                    })]
                                  })]
                                }), (0, qd.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, qd.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, qd.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Qd,
                                      onClick: () => {
                                        td(!Qd)
                                      },
                                      children: [(0, qd.jsx)(yd, {
                                        name: Qd ? "check" : "pencil"
                                      }), Qd ? "Done" : "Edit"]
                                    })]
                                  }), Qd ? (0, qd.jsxs)(qd.Fragment, {
                                    children: [(0, qd.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Xd,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: dd => {
                                        Kd(dd.target.value);
                                        const Od = Rm(dd.target.value);
                                        vd(Od.error), Od.parts && Fd(Od.parts)
                                      }
                                    }), hd && (0, qd.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: hd
                                    })]
                                  }) : (0, qd.jsx)(Ed, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${gd})`
                                  })]
                                })]
                              }), null !== od && od < md.length && (0, qd.jsx)(EF, {
                                parts: md,
                                index: od,
                                fontAwesomeIcons: Od,
                                onChange: dd => {
                                  ((dd, Od) => {
                                    wd(md.map(((md, Wd) => Wd === dd ? Od : md)))
                                  })(od, dd)
                                },
                                qS: () => {
                                  Jd(od), Nd(null)
                                },
                                onClose: () => {
                                  Nd(null), pd({
                                    key: `edit-${od}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var BF = md(5623),
                            SF = md(5609),
                            sF = md(5620),
                            uF = md(5632);
                          const VF = 40,
                            iF = 800,
                            AF = 150,
                            rF = 8e3,
                            GF = 2e3;

                          function nF(dd, Od) {
                            return 12 * Math.log2(Od / dd)
                          }

                          function LF(dd, Od) {
                            return Math.round(dd * 2 ** (Od / 12) * 10) / 10
                          }

                          function PF(dd) {
                            return `${dd} ms`
                          }

                          function zF(dd) {
                            return `${dd} st`
                          }
                          const cF = [{
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

                          function jF(dd) {
                            let {
                              synth: Od,
                              onChange: md
                            } = dd;
                            const Wd = (0, BF.k)(Od);
                            return (0, qd.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, qd.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, qd.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, qd.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, qd.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, qd.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, qd.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: BF.h.map((dd => (0, qd.jsx)("button", {
                                      type: "button",
                                      className: Rd()("DocsVariantChip", {
                                        Active: Od.waveform === dd
                                      }),
                                      "aria-pressed": Od.waveform === dd,
                                      onClick: () => {
                                        md({
                                          waveform: dd
                                        })
                                      },
                                      children: dd
                                    }, dd)))
                                  })]
                                }), (0, qd.jsx)(mF, {
                                  label: "Pitch",
                                  min: 0,
                                  max: nF(VF, iF),
                                  step: .1,
                                  value: nF(VF, Od.pitchHz),
                                  format: () => `${Od.pitchHz} Hz`,
                                  onChange: dd => {
                                    md({
                                      pitchHz: LF(VF, dd)
                                    })
                                  }
                                }), (0, qd.jsx)(mF, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: Od.syllableMs,
                                  format: PF,
                                  onChange: dd => {
                                    md({
                                      syllableMs: dd
                                    })
                                  }
                                }), (0, qd.jsx)(mF, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: Od.volume,
                                  onChange: dd => {
                                    md({
                                      volume: dd
                                    })
                                  }
                                })]
                              }), (0, qd.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, qd.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, qd.jsx)(mF, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: Od.durationMs,
                                  format: PF,
                                  onChange: dd => {
                                    md({
                                      durationMs: dd
                                    })
                                  }
                                }), (0, qd.jsx)(mF, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Wd.durationMs,
                                  step: 1,
                                  value: Wd.attackMs,
                                  format: PF,
                                  onChange: dd => {
                                    md({
                                      attackMs: dd
                                    })
                                  }
                                }), (0, qd.jsx)(mF, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Wd.durationMs - Wd.attackMs,
                                  step: 1,
                                  value: Wd.releaseMs,
                                  format: PF,
                                  onChange: dd => {
                                    md({
                                      releaseMs: dd
                                    })
                                  }
                                }), (0, qd.jsx)(mF, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: Od.glideSemitones,
                                  format: zF,
                                  onChange: dd => {
                                    md({
                                      glideSemitones: dd
                                    })
                                  }
                                }), (0, qd.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, qd.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== Od.lowpassHz,
                                    onChange: dd => {
                                      md({
                                        lowpassHz: dd.target.checked ? GF : null
                                      })
                                    }
                                  }), (0, qd.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== Od.lowpassHz && (0, qd.jsx)(mF, {
                                  label: "Filter",
                                  min: 0,
                                  max: nF(AF, rF),
                                  step: .1,
                                  value: nF(AF, Od.lowpassHz),
                                  format: () => `${Od.lowpassHz} Hz`,
                                  onChange: dd => {
                                    md({
                                      lowpassHz: LF(AF, dd)
                                    })
                                  }
                                })]
                              }), (0, qd.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, qd.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), cF.map((dd => {
                                  let {
                                    key: Wd,
                                    label: Fd,
                                    max: Rd
                                  } = dd;
                                  return (0, qd.jsx)(mF, {
                                    label: Fd,
                                    min: 0,
                                    max: Rd,
                                    step: .1,
                                    value: Od.intonation[Wd],
                                    format: zF,
                                    onChange: dd => {
                                      md({
                                        intonation: {
                                          ...Od.intonation,
                                          [Wd]: dd
                                        }
                                      })
                                    }
                                  }, Wd)
                                }))]
                              })]
                            })
                          }
                          const DF = Object.keys(BF.j),
                            eF = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function IF(dd) {
                            var Od;
                            const md = JSON.stringify((0, BF.k)(dd));
                            return null !== (Od = DF.find((dd => JSON.stringify((0, BF.k)(BF.j[dd])) === md))) && void 0 !== Od ? Od : null
                          }

                          function lF(dd) {
                            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof dd || null === dd) return JSON.stringify(dd);
                            return `{\n${Object.entries(dd).map((dd=>{let[md,Wd]=dd;return`${Od}    ${md}: ${lF(Wd,`${Od}    `)},`})).join("\n")}\n${Od}}`
                          }

                          function CF(dd, Od, md) {
                            const Wd = IF(dd),
                              Fd = [`    line: ${JSON.stringify(Od)},`];
                            return md && Fd.push(`    speakerName: ${JSON.stringify(md)},`), Fd.push("    voice,"), `const voice = ${Wd?JSON.stringify(Wd):lF((0,BF.k)(dd))}\n\napi.setClientOption(playerId, "dialogue", {\n${Fd.join("\n")}\n})`
                          }
                          const ZF = 400,
                            kF = 90;
                          let fF = null;

                          function MF(dd, Od, md) {
                            return fF ??= new AudioContext, fF.resume(), (0, uF.b)(fF, fF.destination, dd, Od, md, (() => {}))
                          }

                          function dR() {
                            const [dd, Od] = (0, Wd.useState)(BF.j.regular), [md, Fd] = (0, Wd.useState)(eF[0]), [Xd, Kd] = (0, Wd.useState)("Innkeeper"), [hd, vd] = (0, Wd.useState)(0), Qd = NW((dd => dd.volume)), td = (0, Wd.useRef)(null), od = (0, Wd.useRef)(0), Nd = (0, Wd.useRef)(0), Hd = () => {
                              var dd;
                              null === (dd = td.current) || void 0 === dd || dd.call(td), td.current = null
                            };
                            (0, Wd.useEffect)((() => () => {
                              var dd;
                              null === (dd = td.current) || void 0 === dd || dd.call(td), window.clearTimeout(od.current)
                            }), []);
                            const bd = (0, Wd.useMemo)((() => ({
                                line: md,
                                speakerName: Xd || void 0,
                                voice: dd
                              })), [md, Xd, dd]),
                              Td = (0, Wd.useRef)(bd);
                            Td.current = bd;
                            const Yd = IF(dd),
                              gd = dd => {
                                window.clearTimeout(od.current), Hd();
                                const {
                                  plan: Od,
                                  synth: md
                                } = (0, sF.e)(dd);
                                md && (td.current = MF(md, Od.blips, Qd)), vd((dd => dd + 1))
                              },
                              wd = CF(dd, md, Xd);
                            return (0, qd.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, qd.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, qd.jsxs)("div", {
                                  children: [(0, qd.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, qd.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, qd.jsx)(pd, {
                                  text: wd,
                                  label: "Copy code"
                                })]
                              }), (0, qd.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [DF.map((dd => (0, qd.jsx)("button", {
                                  type: "button",
                                  className: Rd()("DocsVariantChip", {
                                    Active: Yd === dd
                                  }),
                                  "aria-pressed": Yd === dd,
                                  onClick: () => {
                                    (dd => {
                                      const md = BF.j[dd];
                                      Od(md), gd({
                                        ...bd,
                                        voice: md
                                      })
                                    })(dd)
                                  },
                                  children: dd
                                }, dd))), !Yd && (0, qd.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, qd.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, qd.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, qd.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, qd.jsx)(SF.e, {
                                      display: bd
                                    }, hd)
                                  }), (0, qd.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: dd => {
                                      dd.preventDefault(), gd(bd)
                                    },
                                    children: [(0, qd.jsx)("input", {
                                      value: md,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: dd => {
                                        Fd(dd.target.value)
                                      }
                                    }), (0, qd.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, qd.jsx)(yd, {
                                        name: "play"
                                      }), (0, qd.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, qd.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: eF.map((dd => (0, qd.jsx)("button", {
                                      type: "button",
                                      className: Rd()("DocsVariantChip", {
                                        Active: md === dd
                                      }),
                                      onClick: () => {
                                        var Od;
                                        Fd(Od = dd), gd({
                                          ...bd,
                                          line: Od
                                        })
                                      },
                                      children: dd
                                    }, dd)))
                                  }), (0, qd.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, qd.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, qd.jsx)("input", {
                                      value: Xd,
                                      placeholder: "No name",
                                      onChange: dd => {
                                        Kd(dd.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, qd.jsx)(jF, {
                                  synth: dd,
                                  onChange: md => {
                                    const Wd = {
                                      ...dd,
                                      ...md
                                    };
                                    Od(Wd);
                                    const Fd = {
                                        ...bd,
                                        voice: Wd
                                      },
                                      Rd = performance.now();
                                    if (Rd - Nd.current >= kF) {
                                      Nd.current = Rd, Hd();
                                      const dd = (0, sF.e)(Fd).plan.blips[0];
                                      dd && (td.current = MF((0, BF.k)(Wd), [{
                                        ...dd,
                                        atMs: 0
                                      }], Qd))
                                    }
                                    window.clearTimeout(od.current), od.current = window.setTimeout((() => {
                                      gd(Td.current)
                                    }), ZF)
                                  }
                                })]
                              }), (0, qd.jsx)(Ed, {
                                code: wd,
                                lang: "ts"
                              })]
                            })
                          }
                          var OR = md(5656);
                          const mR = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            WR = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            FR = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${WR}`, "g"), OR.o],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, OR.o]
                            ];

                          function RR(dd) {
                            return `${dd.pageId}#${dd.anchor}`
                          }
                          let XR, KR, hR;

                          function vR(dd) {
                            const Od = (0, Jd.e)(dd),
                              md = new Set;
                            for (const [, , Wd] of Od.matchAll(Jd.b)) {
                              const dd = Wd.startsWith("#") ? Dd(Wd) : null,
                                Od = dd ? RR({
                                  pageId: dd.page.id,
                                  anchor: dd.anchor
                                }) : null;
                              null !== Od && (XR || (XR = new Set(nd.flatMap((dd => Sd(dd.layout) ? cd(dd).sections.map((Od => RR({
                                pageId: dd.id,
                                anchor: Od.heading.anchor
                              }))) : [])))), XR).has(Od) && md.add(Od)
                            }
                            for (const [, , Wd] of Od.matchAll(mR)) {
                              const dd = qO(Wd);
                              dd && md.add(RR(dd))
                            }
                            return md
                          }

                          function QR(dd, Od) {
                            const md = new Set,
                              Wd = function(dd) {
                                return dd.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(dd);
                            for (const [, Fd] of Wd.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) md.add(Fd);
                            for (const [Fd, Rd] of FR)
                              for (const [, dd] of(0, OR.g)(Wd, Fd, Rd)) Od.has(dd) && md.add(dd);
                            return md
                          }

                          function tR(dd, Od, md, Wd) {
                            const Fd = dd.get(Od);
                            Fd ? !Wd && Fd.some((dd => dd.pageId === md.pageId)) || Fd.push(md) : dd.set(Od, [md])
                          }
                          const oR = /^[A-Za-z_$][\w$]*$/;

                          function NR(dd) {
                            return oR.test(dd.name) ? dd.name : "options"
                          }

                          function qR(dd, Od) {
                            const md = dd.params.map(NR).join(", ");
                            return Od ? `${dd.name} = (${md}) => {\n\t\n}` : `api.${dd.name}(${md})`
                          }

                          function HR(dd) {
                            let {
                              method: Od,
                              isCallback: md
                            } = dd;
                            return (0, qd.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, qd.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [md ? (0, qd.jsxs)(qd.Fragment, {
                                  children: [(0, qd.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Od.name
                                  }), (0, qd.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, qd.jsxs)(qd.Fragment, {
                                  children: [(0, qd.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, qd.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: Od.name
                                  }), (0, qd.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), Od.params.map(((dd, md) => (0, qd.jsxs)(Wd.Fragment, {
                                  children: [md > 0 && (0, qd.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, qd.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${Od.name}-${NR(dd)}`,
                                    children: dd.name
                                  })]
                                }, dd.name))), (0, qd.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: md ? ") => " : ")"
                                }), md && !Od.returns && (0, qd.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), Od.returns && Od.returns.type && (0, qd.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!md && (0, qd.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, qd.jsx)(xO, {
                                  type: Od.returns.type
                                })]
                              })]
                            })
                          }

                          function yR(dd) {
                            let {
                              title: Od,
                              references: md
                            } = dd;
                            const Fd = (0, Wd.useContext)(HO);
                            return (0, qd.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, qd.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: Od
                              }), md.map((dd => (0, qd.jsx)(Xd.c, {
                                to: Id(Fd, Pd(dd.pageId), dd.anchor),
                                children: dd.label
                              }, `${dd.pageId}#${dd.anchor}`)))]
                            })
                          }

                          function bR(dd) {
                            var Od, md;
                            let {
                              pageId: Wd,
                              anchor: Fd
                            } = dd;
                            const Rd = RR({
                                pageId: Wd,
                                anchor: Fd
                              }),
                              Xd = null !== (Od = function() {
                                if (!hR) {
                                  hR = new Map;
                                  const Wd = new Set(nd.filter((dd => "callbacks" === dd.layout)).flatMap((dd => cd(dd).sections.map((dd => dd.heading.text)))));
                                  for (const Fd of nd)
                                    if ("article" === Fd.layout || "snippets" === Fd.layout)
                                      for (const Rd of (0, Jd.q)(cd(Fd)))
                                        for (const {
                                            code: Xd
                                          }
                                          of(0, Jd.h)(Rd.blocks))
                                          for (const Kd of QR(Xd, Wd)) {
                                            const Wd = NO().get(Kd);
                                            if (Wd) {
                                              var dd, Od, md;
                                              const Xd = {
                                                pageId: Fd.id,
                                                anchor: null !== (dd = null === (Od = Rd.heading) || void 0 === Od ? void 0 : Od.anchor) && void 0 !== dd ? dd : "",
                                                label: null !== (md = Fd.navTitle) && void 0 !== md ? md : Fd.title
                                              };
                                              tR(hR, RR(Wd), Xd, !1)
                                            }
                                          }
                                }
                                return hR
                              }().get(Rd)) && void 0 !== Od ? Od : [],
                              Kd = null !== (md = function() {
                                if (!KR) {
                                  KR = new Map;
                                  const dd = Pd("changelog");
                                  for (const Od of cd(dd).sections) {
                                    const md = new Set(Od.blocks.flatMap((dd => [...vR(dd)])));
                                    for (const Wd of md) {
                                      const md = {
                                        pageId: dd.id,
                                        anchor: Od.heading.anchor,
                                        label: Od.heading.text
                                      };
                                      tR(KR, Wd, md, !0)
                                    }
                                  }
                                }
                                return KR
                              }().get(Rd)) && void 0 !== md ? md : [];
                            return 0 === Xd.length && 0 === Kd.length ? null : (0, qd.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Xd.length > 0 && (0, qd.jsx)(yR, {
                                title: "Used in",
                                references: Xd
                              }), Kd.length > 0 && (0, qd.jsx)(yR, {
                                title: "Changelog",
                                references: Kd
                              })]
                            })
                          }

                          function TR(dd) {
                            let {
                              method: Od,
                              pageId: md,
                              anchor: Wd,
                              isCallback: Fd
                            } = dd;
                            const Rd = Fd ? void 0 : vO().get(Od.name),
                              Xd = Od.description.length > 0 || null === Rd || void 0 === Rd || !Rd.description ? Od.description : (0, Jd.s)(Rd.description);
                            return (0, qd.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, qd.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, qd.jsx)(om, {
                                  level: 2,
                                  text: Od.name,
                                  anchor: Wd,
                                  className: "DocsCardTitle"
                                }), (0, qd.jsx)(pd, {
                                  text: qR(Od, Fd),
                                  label: Fd ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, qd.jsx)(HR, {
                                method: Od,
                                isCallback: Fd
                              }), Rd && null !== Rd.deprecation && (0, qd.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, qd.jsx)("strong", {
                                  children: "Deprecated"
                                }), Rd.deprecation && (0, qd.jsxs)(qd.Fragment, {
                                  children: [": ", (0, qd.jsx)(EO, {
                                    text: (Kd = Rd.deprecation, (0, OR.v)(Kd, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, OR.l)("`\\w"), (dd => {
                                      let [Od] = dd;
                                      return NO().has(Od) ? `\`${Od}\`` : Od
                                    })))
                                  })]
                                })]
                              }), Xd.length > 0 && (0, qd.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, qd.jsx)(ym, {
                                  blocks: Xd
                                })
                              }), Od.params.length > 0 && (0, qd.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, qd.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, qd.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: Od.params.map((dd => (0, qd.jsxs)("div", {
                                    id: `${Od.name}-${NR(dd)}`,
                                    className: "DocsParam",
                                    children: [(0, qd.jsxs)("dt", {
                                      children: [(0, qd.jsx)("code", {
                                        className: "DocsParamName",
                                        children: dd.name
                                      }), (0, qd.jsx)(xO, {
                                        type: dd.type
                                      })]
                                    }), dd.description && (0, qd.jsx)("dd", {
                                      children: (0, qd.jsx)(EO, {
                                        text: dd.description
                                      })
                                    })]
                                  }, dd.name)))
                                })]
                              }), Od.returns && (Od.returns.type || Od.returns.description.length > 0) && (0, qd.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, qd.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, qd.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [Od.returns.type && (0, qd.jsx)(xO, {
                                    type: Od.returns.type
                                  }), Od.returns.description.length > 0 && (0, qd.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, qd.jsx)(ym, {
                                      blocks: Od.returns.description
                                    })
                                  })]
                                })]
                              }), (0, qd.jsx)(bR, {
                                pageId: md,
                                anchor: Wd
                              })]
                            });
                            var Kd
                          }

                          function pR(dd) {
                            var Od;
                            return null !== dd.defaultValue && "undefined" !== dd.defaultValue ? dd.defaultValue : null !== (Od = dd.example) && void 0 !== Od ? Od : "value"
                          }

                          function YR(dd) {
                            let {
                              setting: Od,
                              pageId: md,
                              anchor: Wd,
                              setterSnippet: Fd
                            } = dd;
                            const Rd = null === Od.defaultValue ? null : pO(Od.defaultValue);
                            return (0, qd.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, qd.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, qd.jsx)(om, {
                                  level: 2,
                                  text: Od.name,
                                  anchor: Wd,
                                  className: "DocsCardTitle"
                                }), (0, qd.jsx)(pd, {
                                  text: Fd(Od.name, pR(Od)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, qd.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, qd.jsxs)("div", {
                                  children: [(0, qd.jsx)("dt", {
                                    children: "Type"
                                  }), (0, qd.jsx)("dd", {
                                    children: (0, qd.jsx)(xO, {
                                      type: Od.type
                                    })
                                  })]
                                }), null !== Od.defaultValue && (0, qd.jsxs)("div", {
                                  children: [(0, qd.jsx)("dt", {
                                    children: "Default"
                                  }), (0, qd.jsx)("dd", {
                                    children: (0, qd.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Rd && (0, qd.jsx)(YO, {
                                        colour: Rd
                                      }), Od.defaultValue]
                                    })
                                  })]
                                }), null !== Od.example && (0, qd.jsxs)("div", {
                                  children: [(0, qd.jsx)("dt", {
                                    children: "Example"
                                  }), (0, qd.jsx)("dd", {
                                    children: (0, qd.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: Od.example
                                    })
                                  })]
                                })]
                              }), Od.description.length > 0 && (0, qd.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, qd.jsx)(ym, {
                                  blocks: Od.description
                                })
                              }), (0, qd.jsx)(bR, {
                                pageId: md,
                                anchor: Wd
                              })]
                            })
                          }

                          function gR(dd) {
                            let {
                              section: Od
                            } = dd;
                            return (0, qd.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, qd.jsx)(om, {
                                level: 2,
                                text: Od.heading.text,
                                anchor: Od.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, qd.jsx)("div", {
                                className: "DocsProse",
                                children: (0, qd.jsx)(ym, {
                                  blocks: Od.blocks
                                })
                              })]
                            })
                          }

                          function wR(dd) {
                            let {
                              section: Od
                            } = dd;
                            return (0, qd.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, qd.jsx)(om, {
                                level: Od.heading.level,
                                text: Od.heading.text,
                                anchor: Od.heading.anchor
                              }), (0, qd.jsx)(ym, {
                                blocks: Od.blocks
                              })]
                            })
                          }
                          const aR = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function ER(dd) {
                            let {
                              page: Od,
                              section: md
                            } = dd;
                            if ("methods" === Od.layout || "callbacks" === Od.layout) return (0, qd.jsx)(TR, {
                              method: Um(md),
                              pageId: Od.id,
                              anchor: md.heading.anchor,
                              isCallback: "callbacks" === Od.layout
                            });
                            if ("settings" === Od.layout) {
                              const dd = function(dd) {
                                const Od = {
                                  name: dd.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Wd of dd.blocks) {
                                  var md;
                                  if (Jm(Wd)) continue;
                                  const dd = "paragraph" === Wd.kind ? Wd.text.match(xm) : null;
                                  if (!dd) {
                                    Od.description.push(Wd);
                                    continue
                                  }
                                  const Fd = null !== (md = Em(dd[2])) && void 0 !== md ? md : dd[2];
                                  "Type" === dd[1] ? Od.type = Fd : "Default" === dd[1] ? Od.defaultValue = Fd : "" !== Fd && (Od.example = Fd)
                                }
                                return Od.type ? Od : null
                              }(md);
                              if (dd) return (0, qd.jsx)(YR, {
                                setting: dd,
                                pageId: Od.id,
                                anchor: md.heading.anchor,
                                setterSnippet: Od.setterSnippet
                              })
                            }
                            return "snippets" === Od.layout ? (0, qd.jsx)(gR, {
                              section: md
                            }) : "changelog" === Od.layout ? (0, qd.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, qd.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, qd.jsx)(om, {
                                  level: 2,
                                  text: md.heading.text,
                                  anchor: md.heading.anchor
                                })
                              }), (0, qd.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, qd.jsx)(ym, {
                                  blocks: Bm(md.blocks)
                                })
                              })]
                            }) : Od.gallery ? (0, qd.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, qd.jsx)(om, {
                                level: md.heading.level,
                                text: md.heading.text,
                                anchor: md.heading.anchor
                              }), (0, qd.jsx)(SW, {
                                kind: Od.gallery,
                                content: cd(Od),
                                blocks: md.blocks
                              })]
                            }) : (0, qd.jsx)(wR, {
                              section: md
                            })
                          }

                          function JR(dd) {
                            let {
                              page: Od,
                              onTocChange: md
                            } = dd;
                            const Fd = cd(Od),
                              [Rd, Xd] = (0, Wd.useState)(""),
                              Kd = "article" !== Od.layout,
                              hd = pm(Od.gallery) ? Od.gallery : null,
                              vd = null !== hd,
                              Qd = Rd.trim().toLowerCase(),
                              td = (0, Wd.useRef)(null),
                              od = (0, Wd.useCallback)((dd => {
                                var Od;
                                null === (Od = td.current) || void 0 === Od || Od.preview(dd)
                              }), []),
                              Nd = (0, Wd.useMemo)((() => {
                                if (!Od.hasParticlePlayground) return [];
                                const dd = Vm(Fd.intro).find((dd => "names" === dd.kind && !dd.names.some((dd => null !== cm(dd.name)))));
                                return "names" === (null === dd || void 0 === dd ? void 0 : dd.kind) ? dd.names.map((dd => dd.name)) : []
                              }), [Od, Fd]),
                              Hd = (0, Wd.useMemo)((() => {
                                if (!Od.hasTextPlayground) return [];
                                const dd = Fd.sections.flatMap((dd => dd.blocks.flatMap((dd => {
                                  var Od;
                                  return (null !== (Od = um(dd)) && void 0 !== Od ? Od : []).flatMap((dd => zO(dd.name) ? [dd.name] : []))
                                }))));
                                return [...new Set(dd)]
                              }), [Od, Fd]),
                              yd = (0, Wd.useMemo)((() => Qd ? Fd.sections.filter((dd => function(dd, Od) {
                                return !!dd.heading.text.toLowerCase().includes(Od) || dd.blocks.some((dd => (0, Jd.e)(dd).toLowerCase().includes(Od)))
                              }(dd, Qd))) : Fd.sections), [Fd, Qd]),
                              bd = (0, Wd.useMemo)((() => function(dd, Od) {
                                return "article" !== dd.layout ? Od.map((dd => ({
                                  anchor: dd.heading.anchor,
                                  text: dd.heading.text,
                                  level: 2
                                }))) : Od.flatMap((dd => {
                                  const Od = dd.blocks.flatMap((dd => "heading" === dd.kind && 3 === dd.level ? [{
                                    anchor: dd.anchor,
                                    text: dd.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: dd.heading.anchor,
                                    text: dd.heading.text,
                                    level: 2
                                  }, ...Od]
                                }))
                              }(Od, yd)), [Od, yd]);
                            return (0, Wd.useEffect)((() => {
                              md(bd)
                            }), [bd, md]), (0, qd.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, qd.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, qd.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Fd.title || Od.title
                                }), (0, qd.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: Od.summary
                                }), (0, qd.jsx)(fW, {
                                  page: Od
                                }), Kd && (0, qd.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, qd.jsxs)("span", {
                                    children: [(0, qd.jsx)("strong", {
                                      children: Fd.sections.length
                                    }), " ", aR[Od.layout]]
                                  })
                                })]
                              }), "" === Od.slug && (0, qd.jsx)(uW, {}), hd && (0, qd.jsx)(rW, {
                                kind: hd
                              }, hd), Od.hasParticlePlayground && (0, qd.jsx)(tF, {
                                ref: td,
                                textures: Nd
                              }), !vd && Fd.intro.length > 0 && (0, qd.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: Od.gallery ? (0, qd.jsx)(YW.Provider, {
                                  value: Od.hasParticlePlayground ? od : null,
                                  children: (0, qd.jsx)(SW, {
                                    kind: Od.gallery,
                                    content: Fd,
                                    blocks: Fd.intro
                                  })
                                }) : (0, qd.jsx)(ym, {
                                  blocks: Bm(Fd.intro)
                                })
                              }), Od.hasTextPlayground && (0, qd.jsx)(xF, {
                                fontAwesomeIcons: Hd
                              }), Od.hasVoicePlayground && (0, qd.jsx)(dR, {}), Od.childPageIds && (0, qd.jsx)(uW, {
                                cards: Od.childPageIds.map((dd => ({
                                  pageId: dd
                                }))),
                                label: Od.title
                              }), Kd && (0, qd.jsx)(wm, {
                                className: "DocsFilterBar",
                                value: Rd,
                                placeholder: `Filter ${Fd.sections.length} ${aR[Od.layout]}\u2026`,
                                label: `Filter ${aR[Od.layout]}`,
                                onChange: Xd,
                                count: Qd ? {
                                  visible: yd.length,
                                  total: Fd.sections.length
                                } : null
                              }), !vd && (0, qd.jsxs)("div", {
                                className: `DocsSections Layout-${Od.layout}`,
                                children: [yd.map((dd => (0, qd.jsx)(ER, {
                                  page: Od,
                                  section: dd
                                }, dd.heading.anchor))), 0 === yd.length && (0, qd.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", aR[Od.layout], " match \u201c", Rd, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const UR = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function xR(dd) {
                            let {
                              entry: Od,
                              isActive: md,
                              onNavigate: Wd,
                              label: Fd,
                              children: Xd
                            } = dd;
                            return (0, qd.jsx)("a", {
                              href: `#${Od.anchor}`,
                              "aria-label": Fd,
                              className: Rd()(`Level${Od.level}`, {
                                Active: md
                              }),
                              "aria-current": md ? "location" : void 0,
                              onClick: dd => {
                                dd.preventDefault(), Wd(Od.anchor)
                              },
                              children: Xd
                            })
                          }

                          function BR(dd) {
                            let {
                              toc: Od,
                              activeAnchor: md,
                              onNavigate: Fd
                            } = dd;
                            const Xd = Math.max(0, Od.findIndex((dd => dd.anchor === md))),
                              Kd = (0, Wd.useRef)(null),
                              hd = (0, Wd.useRef)(!1);
                            (0, Wd.useEffect)((() => {
                              var dd, md;
                              const Wd = null === (dd = Kd.current) || void 0 === dd ? void 0 : dd.closest(".DocsToc"),
                                Fd = null === (md = Kd.current) || void 0 === md ? void 0 : md.querySelector(".DocsTimelineNotch.Active");
                              if (!Wd || !Fd) return;
                              let Rd = 0;
                              if (Xd === Od.length - 1) Rd = Wd.scrollHeight;
                              else if (Xd > 0) {
                                const dd = Wd.getBoundingClientRect(),
                                  Od = Fd.getBoundingClientRect();
                                Rd = Wd.scrollTop + Od.top + Od.height / 2 - (dd.top + Wd.clientHeight / 2)
                              }
                              Wd.scrollTo({
                                top: Rd,
                                behavior: hd.current ? "smooth" : "auto"
                              }), hd.current = !0
                            }), [Xd, Od.length]);
                            const vd = [];
                            return Od.forEach(((dd, Od) => {
                              var md, Wd, Fd;
                              const Rd = function(dd) {
                                  const Od = dd.trim().match(UR);
                                  return Od ? {
                                    day: Od[1],
                                    month: `${Od[2]} ${Od[3]}`
                                  } : null
                                }(dd.text),
                                Xd = null !== (md = null === Rd || void 0 === Rd ? void 0 : Rd.month) && void 0 !== md ? md : null;
                              null !== Xd && (null === (Wd = vd.at(-1)) || void 0 === Wd ? void 0 : Wd.month) === Xd || vd.push({
                                month: Xd,
                                entries: []
                              }), vd.at(-1).entries.push({
                                entry: dd,
                                day: null !== (Fd = null === Rd || void 0 === Rd ? void 0 : Rd.day) && void 0 !== Fd ? Fd : null,
                                index: Od
                              })
                            })), (0, qd.jsx)("ol", {
                              ref: Kd,
                              className: "DocsTimeline",
                              children: vd.map((dd => {
                                let {
                                  month: Od,
                                  entries: md
                                } = dd;
                                return (0, qd.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [Od && (0, qd.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: Od
                                  }), (0, qd.jsx)("ol", {
                                    children: md.map((dd => {
                                      let {
                                        entry: Od,
                                        day: md,
                                        index: Wd
                                      } = dd;
                                      return (0, qd.jsx)("li", {
                                        className: Rd()("DocsTimelineNotch", {
                                          Passed: Wd < Xd,
                                          Active: Wd === Xd
                                        }),
                                        children: (0, qd.jsx)(xR, {
                                          entry: Od,
                                          isActive: Wd === Xd,
                                          onNavigate: Fd,
                                          label: Od.text,
                                          children: (0, qd.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== md && void 0 !== md ? md : Od.text
                                          })
                                        })
                                      }, Od.anchor)
                                    }))
                                  })]
                                }, md[0].entry.anchor)
                              }))
                            })
                          }

                          function SR(dd) {
                            let {
                              isChangelog: Od,
                              toc: md,
                              activeAnchor: Wd,
                              onNavigate: Fd
                            } = dd;
                            return 0 === md.length ? null : (0, qd.jsxs)(qd.Fragment, {
                              children: [(0, qd.jsx)("div", {
                                className: "DocsTocTitle",
                                children: Od ? "Updates" : "On this page"
                              }), Od ? (0, qd.jsx)(BR, {
                                toc: md,
                                activeAnchor: Wd,
                                onNavigate: Fd
                              }) : (0, qd.jsx)("ul", {
                                children: md.map((dd => (0, qd.jsx)("li", {
                                  children: (0, qd.jsx)(xR, {
                                    entry: dd,
                                    isActive: dd.anchor === Wd,
                                    onNavigate: Fd,
                                    children: dd.text.replace(/`/g, "")
                                  })
                                }, dd.anchor)))
                              })]
                            })
                          }
                          const sR = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            uR = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            VR = 20,
                            iR = 10,
                            AR = 40,
                            rR = 120;
                          let GR;

                          function nR(dd) {
                            const Od = dd.gallery;
                            if (!Od) return [];
                            if (pm(Od)) return function(dd) {
                              return gm(dd).entries.map((dd => dd.name))
                            }(Od).map((md => ({
                              page: dd,
                              anchor: Am(Od, md),
                              title: md,
                              kind: uR[Od],
                              text: "",
                              listedUnder: dd.title
                            })));
                            const md = cd(dd);
                            return (0, Jd.q)(md).flatMap((Wd => {
                              const Fd = Wd.heading ? `${dd.title} \u203a ${Wd.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : dd.title;
                              return Gm(Od, md, Wd.blocks).flatMap((md => "names" !== md.kind ? [] : md.names.map((Wd => {
                                const Rd = md.isSongs ? "Song" : uR[Od];
                                return {
                                  page: dd,
                                  anchor: Wd.anchor,
                                  title: Wd.name,
                                  kind: Rd,
                                  text: "",
                                  listedUnder: Fd
                                }
                              }))))
                            }))
                          }

                          function LR(dd, Od, md) {
                            const Wd = dd.title.toLowerCase();
                            let Fd = 0;
                            if (Wd === Od) Fd = 100;
                            else if (Wd.startsWith(Od)) Fd = 80;
                            else if (Wd.includes(Od)) Fd = 60;
                            else if (md.every((dd => Wd.includes(dd)))) Fd = 45;
                            else {
                              if (!dd.text.toLowerCase().includes(Od)) return 0;
                              Fd = 20
                            }
                            return Fd - Math.min(Wd.length / 10, 9) + ("Page" === dd.kind ? 8 : "Method" === dd.kind ? 3 : 0) - (dd.listedUnder ? VR : 0)
                          }

                          function PR(dd, Od) {
                            const md = dd.toLowerCase().indexOf(Od),
                              Wd = Math.max(0, md - rR / 3);
                            return `${Wd>0?"\u2026":""}${dd.slice(Wd,Wd+rR)}${Wd+rR<dd.length?"\u2026":""}`
                          }

                          function zR(dd) {
                            let {
                              text: Od,
                              query: md
                            } = dd;
                            const Wd = md ? Od.toLowerCase().indexOf(md) : -1;
                            return -1 === Wd ? (0, qd.jsx)(qd.Fragment, {
                              children: Od
                            }) : (0, qd.jsxs)(qd.Fragment, {
                              children: [Od.slice(0, Wd), (0, qd.jsx)("mark", {
                                children: Od.slice(Wd, Wd + md.length)
                              }), Od.slice(Wd + md.length)]
                            })
                          }

                          function cR(dd) {
                            let {
                              basePath: Od,
                              onClose: md
                            } = dd;
                            const Fd = (0, Kd.s)(),
                              [Xd, hd] = (0, Wd.useState)(""),
                              [vd, Qd] = (0, Wd.useState)(0),
                              td = (0, Wd.useRef)(null),
                              od = (0, Wd.useRef)(null),
                              Nd = Xd.trim().toLowerCase(),
                              Hd = (0, Wd.useMemo)((() => {
                                const dd = (GR || (GR = nd.flatMap((dd => {
                                  const Od = cd(dd);
                                  return [{
                                    page: dd,
                                    anchor: "",
                                    title: dd.title,
                                    kind: "Page",
                                    text: dd.summary
                                  }, ...Od.sections.flatMap((Od => {
                                    const md = Od.blocks.filter((dd => "paragraph" === dd.kind)).map(Jd.e).join(" ").replace(/[`*]/g, ""),
                                      Wd = {
                                        page: dd,
                                        anchor: Od.heading.anchor,
                                        title: Od.heading.text.replace(/`/g, ""),
                                        kind: sR[dd.layout],
                                        text: md
                                      },
                                      Fd = Od.blocks.flatMap((Od => "article" === dd.layout && "heading" === Od.kind && 3 === Od.level ? [{
                                        page: dd,
                                        anchor: Od.anchor,
                                        title: Od.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Wd.title
                                      }] : []));
                                    return [Wd, ...Fd]
                                  })), ...nR(dd)]
                                }))), GR);
                                if (!Nd) return dd.filter((dd => "Page" === dd.kind));
                                const Od = Nd.split(/\s+/);
                                let md = 0;
                                return dd.map((dd => ({
                                  entry: dd,
                                  score: LR(dd, Nd, Od)
                                }))).filter((dd => dd.score > 0)).sort(((dd, Od) => Od.score - dd.score)).filter((dd => !dd.entry.listedUnder || (md++, md <= iR))).slice(0, AR).map((dd => dd.entry))
                              }), [Nd]);
                            (0, Wd.useEffect)((() => {
                              Qd(0)
                            }), [Nd]), (0, Wd.useEffect)((() => {
                              const dd = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === dd || void 0 === dd || dd.focus()
                              }
                            }), []), (0, Wd.useEffect)((() => {
                              var dd, Od;
                              null === (dd = td.current) || void 0 === dd || null === (Od = dd.querySelector(".Active")) || void 0 === Od || Od.scrollIntoView({
                                block: "nearest"
                              })
                            }), [vd]);
                            const bd = dd => {
                              Fd(Id(Od, dd.page, dd.anchor)), md()
                            };
                            return (0, qd.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: dd => {
                                dd.target === dd.currentTarget && md()
                              },
                              children: (0, qd.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: dd => {
                                  dd.target !== od.current && dd.preventDefault()
                                },
                                onKeyDown: dd => {
                                  if ("Escape" === dd.key) md();
                                  else if ("Tab" === dd.key) {
                                    var Od;
                                    dd.preventDefault(), null === (Od = od.current) || void 0 === Od || Od.focus()
                                  }
                                },
                                children: [(0, qd.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, qd.jsx)(yd, {
                                    name: "magnifying-glass"
                                  }), (0, qd.jsx)("input", {
                                    ref: od,
                                    autoFocus: !0,
                                    value: Xd,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Hd.length > 0 ? `DocsSearchResult-${vd}` : void 0,
                                    onChange: dd => {
                                      hd(dd.target.value)
                                    },
                                    onKeyDown: dd => {
                                      if ("ArrowDown" === dd.key || "ArrowUp" === dd.key) {
                                        dd.preventDefault();
                                        const Od = "ArrowDown" === dd.key ? 1 : -1;
                                        Qd((vd + Od + Hd.length) % Math.max(Hd.length, 1))
                                      } else "Enter" === dd.key && Hd[vd] && bd(Hd[vd])
                                    }
                                  }), (0, qd.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, qd.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: td,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Nd && (0, qd.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Hd.map(((dd, Od) => {
                                    var md;
                                    return (0, qd.jsxs)("li", {
                                      id: `DocsSearchResult-${Od}`,
                                      role: "option",
                                      "aria-selected": Od === vd,
                                      className: Rd()("DocsSearchResult", {
                                        Active: Od === vd
                                      }),
                                      onMouseMove: () => {
                                        Qd(Od)
                                      },
                                      onClick: () => {
                                        bd(dd)
                                      },
                                      children: [(0, qd.jsx)(yd, {
                                        name: dd.page.icon
                                      }), (0, qd.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, qd.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, qd.jsx)(zR, {
                                            text: dd.title,
                                            query: Nd
                                          })
                                        }), dd.text && (0, qd.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, qd.jsx)(zR, {
                                            text: PR(dd.text, Nd),
                                            query: Nd
                                          })
                                        })]
                                      }), (0, qd.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === dd.kind ? "Page" : null !== (md = dd.listedUnder) && void 0 !== md ? md : `${dd.kind} \xb7 ${dd.page.title}`
                                      })]
                                    }, `${dd.page.id}#${dd.anchor}`)
                                  })), Nd && 0 === Hd.length && (0, qd.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Xd, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function jR(dd, Od) {
                            if (Od < 10) return `${dd.toFixed(1)}s`;
                            const md = Math.floor(dd);
                            return `${Math.floor(md/60)}:${String(md%60).padStart(2,"0")}`
                          }

                          function DR() {
                            const dd = NW((dd => dd.track)),
                              Od = NW((dd => dd.volume)),
                              [md, Fd] = (0, Wd.useState)(0),
                              Xd = (0, Wd.useRef)(FW);
                            if ((0, Wd.useEffect)((() => {
                                if (!dd) return;
                                if (Fd(bW()), "playing" !== dd.status) return;
                                let Od = 0;
                                const md = () => {
                                  Fd(bW()), Od = requestAnimationFrame(md)
                                };
                                return Od = requestAnimationFrame(md), () => {
                                  cancelAnimationFrame(Od)
                                }
                              }), [dd]), !dd) return null;
                            const Kd = "paused" !== dd.status,
                              hd = Math.min(md, dd.duration);
                            return (0, qd.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, qd.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, qd.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": Kd ? `Pause ${dd.name}` : `Play ${dd.name}`,
                                  onClick: yW,
                                  children: (0, qd.jsx)(yd, {
                                    name: Kd ? "pause" : "play"
                                  })
                                }), (0, qd.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, qd.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, qd.jsx)("code", {
                                      children: dd.name
                                    }), (0, qd.jsx)("span", {
                                      children: dd.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, qd.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, qd.jsx)("span", {
                                      children: jR(hd, dd.duration)
                                    }), (0, qd.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: dd.duration || 1,
                                      step: .01,
                                      value: hd,
                                      disabled: 0 === dd.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${jR(hd,dd.duration)} of ${jR(dd.duration,dd.duration)}`,
                                      onChange: dd => {
                                        const Od = Number(dd.target.value);
                                        ! function(dd) {
                                          var Od;
                                          vW = dd, null === (Od = KW) || void 0 === Od || Od.seek(dd)
                                        }(Od), Fd(Od)
                                      }
                                    }), (0, qd.jsx)("span", {
                                      children: dd.duration > 0 ? jR(dd.duration, dd.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, qd.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, qd.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === Od ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === Od ? TW(Xd.current) : (Xd.current = Od, TW(0))
                                    },
                                    children: (0, qd.jsx)(yd, {
                                      name: "volume",
                                      className: Rd()({
                                        Muted: 0 === Od
                                      })
                                    })
                                  }), (0, qd.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: Od,
                                    "aria-label": "Volume",
                                    onChange: dd => {
                                      TW(Number(dd.target.value))
                                    }
                                  })]
                                }), (0, qd.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var Od;
                                    null === (Od = document.querySelector(`[data-docs-track="${CSS.escape(RW(dd.name,dd.isSong))}"]`)) || void 0 === Od || Od.focus(), pW()
                                  },
                                  children: (0, qd.jsx)(yd, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var eR = md(46);
                          const IR = "docsTheme",
                            lR = window.matchMedia("(prefers-color-scheme: light)");

                          function CR(dd) {
                            let {
                              theme: Od,
                              onChange: md
                            } = dd;
                            const Wd = "dark" === Od ? "light" : "dark";
                            return (0, qd.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Wd} theme`,
                              title: `Switch to ${Wd} theme`,
                              onClick: () => {
                                md(Wd)
                              },
                              children: (0, qd.jsx)(yd, {
                                name: "dark" === Od ? "moon" : "sun"
                              })
                            })
                          }
                          const ZR = "https://github.com/Bloxdy/code-api",
                            kR = "https://discord.gg/playbloxd",
                            fR = 180,
                            MR = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function dX(dd) {
                            let {
                              basePath: Od,
                              activePageId: md,
                              onNavigate: Wd
                            } = dd;
                            return (0, qd.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Ld.map((dd => (0, qd.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, qd.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: dd.title
                                }), dd.pageIds.map((dd => {
                                  var Fd;
                                  const Kd = Pd(dd);
                                  return (0, qd.jsxs)(Xd.c, {
                                    to: Id(Od, Kd),
                                    className: Rd()("DocsNavLink", {
                                      Active: Kd.id === md
                                    }),
                                    "aria-current": Kd.id === md ? "page" : void 0,
                                    onClick: Wd,
                                    children: [(0, qd.jsx)(yd, {
                                      name: Kd.icon
                                    }), (0, qd.jsx)("span", {
                                      children: null !== (Fd = Kd.navTitle) && void 0 !== Fd ? Fd : Kd.title
                                    })]
                                  }, Kd.id)
                                }))]
                              }, dd.title)))
                            })
                          }

                          function OX(dd) {
                            let {
                              basePath: Od,
                              pageId: md
                            } = dd;
                            const Wd = Ld.flatMap((dd => dd.pageIds)),
                              Fd = Wd.indexOf(md),
                              Rd = Fd > 0 ? Pd(Wd[Fd - 1]) : null,
                              Kd = Fd < Wd.length - 1 ? Pd(Wd[Fd + 1]) : null;
                            return (0, qd.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Rd ? (0, qd.jsxs)(Xd.c, {
                                className: "DocsPagerLink Previous",
                                to: Id(Od, Rd),
                                children: [(0, qd.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, qd.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Rd.title
                                })]
                              }) : (0, qd.jsx)("span", {}), Kd && (0, qd.jsxs)(Xd.c, {
                                className: "DocsPagerLink Next",
                                to: Id(Od, Kd),
                                children: [(0, qd.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, qd.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Kd.title
                                })]
                              })]
                            })
                          }

                          function mX(dd) {
                            let {
                              basePath: Od,
                              embedded: md = !1
                            } = dd;
                            const {
                              pageSlug: Fd = ""
                            } = (0, Kd.u)(), vd = (0, Kd.p)(), Qd = (0, Kd.s)(), td = (od = Fd, nd.find((dd => dd.slug === od)));
                            var od;
                            const [Nd, Hd] = function() {
                              const [dd, Od] = (0, Wd.useState)((() => {
                                const dd = eR.k.getItem(IR);
                                return "dark" === dd || "light" === dd ? dd : null
                              })), [md, Fd] = (0, Wd.useState)(lR.matches ? "light" : "dark");
                              return (0, Wd.useEffect)((() => {
                                const dd = () => {
                                  Fd(lR.matches ? "light" : "dark")
                                };
                                return lR.addEventListener("change", dd), () => {
                                  lR.removeEventListener("change", dd)
                                }
                              }), []), [null !== dd && void 0 !== dd ? dd : md, dd => {
                                eR.k.setItem(IR, dd), Od(dd)
                              }]
                            }(), [bd, Td] = (0, Wd.useState)(null), [pd, Yd] = (0, Wd.useState)(!1), [gd, wd] = (0, Wd.useState)(!1), [Ed, Ud] = (0, Wd.useState)([]), xd = function(dd, Od) {
                              const [md, Fd] = (0, Wd.useState)("");
                              return (0, Wd.useEffect)((() => {
                                if (!Od) return;
                                let md = 0;
                                const Wd = () => {
                                    var Wd, Rd;
                                    md = 0;
                                    const Xd = Od.getBoundingClientRect().top + fR;
                                    let Kd = null !== (Wd = null === (Rd = dd[0]) || void 0 === Rd ? void 0 : Rd.anchor) && void 0 !== Wd ? Wd : "";
                                    for (const Od of dd) {
                                      const dd = document.getElementById(Od.anchor);
                                      dd && dd.getBoundingClientRect().top <= Xd && (Kd = Od.anchor)
                                    }
                                    Od.scrollTop + Od.clientHeight >= Od.scrollHeight - 2 && Od.scrollTop > 0 && dd.length > 0 && (Kd = dd[dd.length - 1].anchor), Fd(Kd)
                                  },
                                  Rd = () => {
                                    md || (md = requestAnimationFrame(Wd))
                                  };
                                return Wd(), Od.addEventListener("scroll", Rd, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(md), Od.removeEventListener("scroll", Rd)
                                }
                              }), [dd, Od]), md
                            }(Ed, bd), Bd = "" === Fd && vd.hash ? function(dd) {
                              const Od = (0, Jd.l)(dd);
                              if (jd(Pd("welcome"), Od)) return null;
                              const md = Object.hasOwn(ed, Od) ? ed[Od] : null;
                              if (md) return {
                                page: Pd(md.pageId),
                                anchor: md.anchor
                              };
                              const Wd = Pd("readme");
                              return jd(Wd, Od) ? {
                                page: Wd,
                                anchor: Od
                              } : Dd(`#${Od}`)
                            }(vd.hash) : null;
                            (0, Wd.useEffect)((() => (hd.e.set({
                              musicOnFromPage: !1
                            }), () => {
                              hd.e.set({
                                musicOnFromPage: !0
                              }), pW()
                            })), []), (0, Wd.useEffect)((() => {
                              const dd = dd => {
                                const Od = dd.target;
                                if (Od.closest(".DocsTextDialog")) return;
                                const md = Od.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(Od.tagName);
                                "k" === dd.key && (dd.metaKey || dd.ctrlKey) || "/" === dd.key && !md ? (dd.preventDefault(), wd(!0)) : "Escape" === dd.key && Yd(!1)
                              };
                              return window.addEventListener("keydown", dd), () => {
                                window.removeEventListener("keydown", dd)
                              }
                            }), []);
                            const Sd = (0, Wd.useRef)(null);
                            (0, Wd.useLayoutEffect)((() => {
                              var dd, Od;
                              if (!bd) return;
                              const md = Sd.current === vd.pathname;
                              Sd.current = vd.pathname;
                              const Wd = (0, Jd.l)(vd.hash),
                                Fd = Wd ? document.getElementById(Wd) : null;
                              if (null === (dd = bd.querySelector(".DocsTargeted")) || void 0 === dd || dd.classList.remove("DocsTargeted"), null === Fd || void 0 === Fd || null === (Od = Fd.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === Od || Od.classList.add("DocsTargeted"), Fd) {
                                var Rd;
                                const dd = Fd.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Rd = Fd.closest(".DocsChangelogEntry")) && void 0 !== Rd ? Rd : Fd).scrollIntoView({
                                  block: dd ? "center" : "start",
                                  behavior: md ? "smooth" : "auto"
                                })
                              } else md || bd.scrollTo({
                                top: 0
                              })
                            }), [bd, vd.pathname, vd.hash, vd.key]);
                            const sd = (0, Wd.useCallback)((() => {
                                Yd(!1)
                              }), []),
                              ud = (0, Wd.useCallback)((dd => {
                                Qd({
                                  hash: dd
                                })
                              }), [Qd]);
                            if (Bd) return (0, qd.jsx)(Kd.d, {
                              replace: !0,
                              to: Id(Od, Bd.page, Bd.anchor)
                            });
                            if (!td) return (0, qd.jsx)(Kd.d, {
                              replace: !0,
                              to: Od
                            });
                            const Vd = md ? "div" : "main";
                            return (0, qd.jsx)(HO.Provider, {
                              value: Od,
                              children: (0, qd.jsx)(yO.Provider, {
                                value: bd,
                                children: (0, qd.jsxs)("div", {
                                  ref: Td,
                                  className: Rd()("DocsSite", {
                                    Embedded: md,
                                    NavOpen: pd
                                  }),
                                  "data-theme": Nd,
                                  children: [(0, qd.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, qd.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": pd ? "Close menu" : "Open menu",
                                      "aria-expanded": pd,
                                      onClick: () => {
                                        Yd(!pd)
                                      },
                                      children: (0, qd.jsx)(yd, {
                                        name: pd ? "cross" : "menu"
                                      })
                                    }), (0, qd.jsxs)(Xd.c, {
                                      to: Od,
                                      className: "DocsBrand",
                                      children: [(0, qd.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, qd.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, qd.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, qd.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        wd(!0)
                                      },
                                      children: [(0, qd.jsx)(yd, {
                                        name: "magnifying-glass"
                                      }), (0, qd.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, qd.jsxs)("kbd", {
                                        children: [MR ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, qd.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, qd.jsxs)("a", {
                                        href: kR,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, qd.jsx)(yd, {
                                          name: "discord"
                                        }), (0, qd.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, qd.jsxs)("a", {
                                        href: ZR,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, qd.jsx)(yd, {
                                          name: "external-link"
                                        }), (0, qd.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !md && (0, qd.jsxs)(Xd.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, qd.jsx)(yd, {
                                          name: "play"
                                        }), (0, qd.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, qd.jsx)(CR, {
                                        theme: Nd,
                                        onChange: Hd
                                      })]
                                    })]
                                  }), (0, qd.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, qd.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, qd.jsx)(dX, {
                                        basePath: Od,
                                        activePageId: td.id,
                                        onNavigate: sd
                                      })
                                    }), (0, qd.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: sd
                                    }), (0, qd.jsxs)(Vd, {
                                      className: "DocsMain",
                                      children: [(0, qd.jsx)(JR, {
                                        page: td,
                                        onTocChange: Ud
                                      }, td.id), (0, qd.jsx)(OX, {
                                        basePath: Od,
                                        pageId: td.id
                                      })]
                                    }), (0, qd.jsx)("aside", {
                                      className: Rd()("DocsToc", {
                                        Timeline: "changelog" === td.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, qd.jsx)(SR, {
                                        isChangelog: "changelog" === td.layout,
                                        toc: Ed,
                                        activeAnchor: xd,
                                        onNavigate: ud
                                      })
                                    })]
                                  }), (0, qd.jsx)(DR, {}), gd && (0, qd.jsx)(cR, {
                                    basePath: Od,
                                    onClose: () => {
                                      wd(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 5509: (dd, Od, md) => {
                          md.d(Od, {
                            b: () => Wd,
                            c: () => Xd,
                            e: () => yd,
                            h: () => Hd,
                            k: () => Kd,
                            l: () => Fd,
                            m: () => Rd,
                            q: () => qd,
                            r: () => Nd,
                            s: () => od
                          });
                          const Wd = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Fd(dd) {
                            try {
                              return decodeURIComponent(dd.slice(1))
                            } catch {
                              return dd.slice(1)
                            }
                          }

                          function Rd(dd) {
                            return dd.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Xd = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Wd.source}`, "g");

                          function Kd(dd, Od) {
                            return 2 === dd.length ? Od.replace(/^ (.*) $/, "$1") : Od
                          }

                          function hd(dd) {
                            return "" === dd.trim()
                          }

                          function vd(dd) {
                            const Od = [];
                            for (const md of dd.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) Od.length > 0 && Od[Od.length - 1].endsWith("\\") ? Od[Od.length - 1] += `|${md}` : Od.push(md);
                            return Od.map((dd => dd.trim().replaceAll("\\|", "|")))
                          }
                          const Qd = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function td(dd) {
                            const Od = [],
                              md = [{
                                indent: -1,
                                items: Od
                              }];
                            let Wd = null;
                            for (const Fd of dd) {
                              const dd = Fd.match(Qd);
                              if (!dd) {
                                Wd && (Wd.text += ` ${Fd.trim()}`);
                                continue
                              }
                              const Od = dd[1].replace(/\t/g, "  ").length;
                              for (; Od <= md[md.length - 1].indent;) md.pop();
                              Wd = {
                                text: dd[3].trim(),
                                children: []
                              }, md[md.length - 1].items.push(Wd), md.push({
                                indent: Od,
                                items: Wd.children
                              })
                            }
                            return Od
                          }

                          function od(dd) {
                            const Od = dd.replace(/\r\n/g, "\n").split("\n"),
                              md = [];
                            let Wd = 0;
                            for (; Wd < Od.length;) {
                              const dd = Od[Wd];
                              if (hd(dd)) {
                                Wd++;
                                continue
                              }
                              const Fd = dd.match(/^\s*```\s*(\w*)\s*$/);
                              if (Fd) {
                                const dd = [];
                                for (Wd++; Wd < Od.length && !/^\s*```\s*$/.test(Od[Wd]);) dd.push(Od[Wd]), Wd++;
                                Wd++, md.push({
                                  kind: "code",
                                  lang: Fd[1] || "text",
                                  code: dd.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Xd = dd.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Xd) {
                                const dd = Xd[2].trim();
                                md.push({
                                  kind: "heading",
                                  level: Xd[1].length,
                                  text: dd,
                                  anchor: Rd(dd)
                                }), Wd++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(dd)) {
                                md.push({
                                  kind: "rule"
                                }), Wd++;
                                continue
                              }
                              if (dd.trim().startsWith("|") && Wd + 1 < Od.length && /^\s*\|[\s:|-]+\|\s*$/.test(Od[Wd + 1])) {
                                const Fd = vd(dd),
                                  Rd = [];
                                for (Wd += 2; Wd < Od.length && Od[Wd].trim().startsWith("|");) Rd.push(vd(Od[Wd])), Wd++;
                                md.push({
                                  kind: "table",
                                  header: Fd,
                                  rows: Rd
                                });
                                continue
                              }
                              if (dd.startsWith(">")) {
                                const dd = [];
                                for (; Wd < Od.length && Od[Wd].startsWith(">");) dd.push(Od[Wd].replace(/^>\s?/, "")), Wd++;
                                md.push({
                                  kind: "quote",
                                  blocks: od(dd.join("\n"))
                                });
                                continue
                              }
                              if (Qd.test(dd)) {
                                const Fd = [],
                                  Rd = /^\s*\d+\./.test(dd);
                                for (; Wd < Od.length && !hd(Od[Wd]) && (Qd.test(Od[Wd]) || /^\s+\S/.test(Od[Wd]));) Fd.push(Od[Wd]), Wd++;
                                md.push({
                                  kind: "list",
                                  ordered: Rd,
                                  items: td(Fd)
                                });
                                continue
                              }
                              const Kd = [];
                              for (; Wd < Od.length && !hd(Od[Wd]) && !/^\s*```/.test(Od[Wd]) && !/^#{1,6}\s/.test(Od[Wd]) && !Od[Wd].startsWith(">") && !Qd.test(Od[Wd]) && (!Od[Wd].trim().startsWith("|") || 0 !== Kd.length);) Kd.push(Od[Wd].trim()), Wd++;
                              0 === Kd.length && (Kd.push(Od[Wd].trim()), Wd++), md.push({
                                kind: "paragraph",
                                text: Kd.join(" ")
                              })
                            }
                            return md
                          }

                          function Nd(dd) {
                            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const md = od(dd);
                            let Wd = "";
                            const Fd = [],
                              Rd = [],
                              Xd = new Map;
                            for (const vd of md) {
                              if ("heading" === vd.kind) {
                                var Kd;
                                const dd = (null !== (Kd = Xd.get(vd.anchor)) && void 0 !== Kd ? Kd : 0) + 1;
                                Xd.set(vd.anchor, dd), dd > 1 && (vd.anchor = `${vd.anchor}-${dd}`)
                              }
                              if ("heading" === vd.kind && 1 === vd.level && !Wd) {
                                Wd = vd.text;
                                continue
                              }
                              if ("heading" === vd.kind && vd.level <= Od) {
                                Rd.push({
                                  heading: vd,
                                  blocks: []
                                });
                                continue
                              }
                              const dd = Rd.at(-1);
                              dd ? dd.blocks.push(vd) : Fd.push(vd)
                            }
                            const hd = dd => {
                              for (;
                                "rule" === (null === (Od = dd.at(-1)) || void 0 === Od ? void 0 : Od.kind);) {
                                var Od;
                                dd.pop()
                              }
                            };
                            hd(Fd);
                            for (const vd of Rd) hd(vd.blocks);
                            return {
                              title: Wd,
                              intro: Fd,
                              sections: Rd
                            }
                          }

                          function qd(dd) {
                            return [{
                              heading: null,
                              blocks: dd.intro
                            }, ...dd.sections.map((dd => ({
                              heading: dd.heading,
                              blocks: dd.blocks
                            })))]
                          }

                          function Hd(dd) {
                            return dd.flatMap((dd => "code" === dd.kind ? [dd] : "quote" === dd.kind ? Hd(dd.blocks) : []))
                          }

                          function yd(dd) {
                            switch (dd.kind) {
                              case "heading":
                              case "paragraph":
                                return dd.text;
                              case "code":
                                return dd.code;
                              case "table":
                                return [dd.header, ...dd.rows].map((dd => dd.join(" "))).join(" ");
                              case "list": {
                                const Od = dd => dd.map((dd => `${dd.text} ${Od(dd.children)}`)).join(" ");
                                return Od(dd.items)
                              }
                              case "quote":
                                return dd.blocks.map(yd).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 5616: (dd, Od, md) => {
                          md.d(Od, {
                            c: () => Kd
                          });
                          var Wd = md(66),
                            Fd = md(387),
                            Rd = md(2079),
                            Xd = md(1341);

                          function Kd(dd) {
                            let {
                              text: Od
                            } = dd;
                            const md = [];
                            let Kd = "";
                            return (0, Fd.dc)(Od).forEach(((dd, Od) => {
                              if ("string" === typeof dd || !(0, Rd.f)(dd.icon)) return void(Kd += "string" === typeof dd ? dd : dd.icon);
                              const Fd = Math.max(0, Kd.trimEnd().search(/\S{1,12}$/));
                              md.push((0, Xd.jsxs)(Wd.Fragment, {
                                children: [Kd.slice(0, Fd), (0, Xd.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [Kd.slice(Fd), (0, Xd.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": dd.icon,
                                    children: (0, Xd.jsx)(Rd.c, {
                                      itemName: dd.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, Od)), Kd = ""
                            })), md.push(Kd), (0, Xd.jsx)(Xd.Fragment, {
                              children: md
                            })
                          }
                        }, 5540: (dd, Od, md) => {
                          md.d(Od, {
                            f: () => Td,
                            e: () => bd
                          });
                          var Wd = md(66),
                            Fd = md(1566),
                            Rd = md(2060),
                            Xd = md(5548),
                            Kd = md(1341);
                          const hd = (0, Wd.memo)((function(dd) {
                            let {
                              initialParameters: Od
                            } = dd;
                            const md = (0, Wd.useRef)(null),
                              Fd = (0, Wd.useRef)(null),
                              hd = (0, Wd.useRef)(0),
                              vd = (0, Wd.useRef)(null),
                              Qd = Od.description,
                              td = Od.JR,
                              {
                                scale: od,
                                rotation: Nd
                              } = null !== Od && void 0 !== Od ? Od : {},
                              qd = (0, Xd.f)();
                            return (0, Wd.useEffect)((() => {
                              const dd = qd.onFrame((() => {
                                const dd = qd.getState();
                                if (!dd.isActive || !md.current || !Fd.current) return;
                                const Od = dd.state;
                                if (md.current.value = Od.progress, Od.clickCount > hd.current) {
                                  hd.current = Od.clickCount;
                                  const dd = Fd.current;
                                  dd.classList.add("pulse"), vd.current = setTimeout((() => {
                                    dd.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(vd.current), dd()
                              }
                            }), [qd]), (0, Kd.jsx)(Kd.Fragment, {
                              children: (0, Kd.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== od && {
                                    "--scale": od
                                  },
                                  ...null !== Nd && {
                                    "--rotation": `${Nd}deg`
                                  }
                                },
                                children: [(0, Kd.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: md
                                }), (0, Kd.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Fd,
                                  children: (0, Kd.jsx)(Rd.d, {
                                    text: [{
                                      icon: td
                                    }]
                                  })
                                }), (0, Kd.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, Kd.jsx)(Rd.d, {
                                    text: Qd
                                  })
                                })]
                              })
                            })
                          }));
                          var vd = md(1155),
                            Qd = md.n(vd);
                          const td = 2 * Math.PI * 90,
                            od = (0, Wd.memo)((function(dd) {
                              let {
                                initialParameters: Od
                              } = dd;
                              const md = (0, Wd.useRef)(null),
                                Fd = (0, Wd.useRef)(null),
                                hd = (0, Wd.useRef)(null),
                                vd = Od.label,
                                od = Od.icon,
                                Nd = Od.BR,
                                {
                                  scale: qd,
                                  rotation: Hd,
                                  sR: yd
                                } = null !== Od && void 0 !== Od ? Od : {},
                                bd = (0, Xd.f)();
                              return (0, Wd.useEffect)((() => {
                                const dd = bd.onFrame((() => {
                                  var dd, Od;
                                  const Wd = bd.getState();
                                  if (!Wd.isActive || !Fd.current) return;
                                  const Rd = Wd.state,
                                    Xd = null !== (dd = Rd.timeRemaining) && void 0 !== dd ? dd : 0,
                                    Kd = null !== (Od = Rd.xR) && void 0 !== Od ? Od : 1,
                                    vd = td * (1 - Xd / Kd);
                                  Fd.current.style.strokeDashoffset = `${vd}`, md.current && (md.current.style.opacity = Xd > 0 ? "1" : "0"), hd.current && Nd && (hd.current.textContent = `${(Xd/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  dd()
                                }
                              }), [bd, Nd]), (0, Kd.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: md,
                                style: {
                                  ...null !== qd && {
                                    "--scale": qd
                                  },
                                  ...null !== Hd && {
                                    "--rotation": `${Hd}deg`
                                  }
                                },
                                children: [(0, Kd.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, Kd.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Kd.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, Kd.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: td,
                                      ref: Fd
                                    })]
                                  }), (0, Kd.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, Kd.jsx)(Rd.d, {
                                      text: [{
                                        icon: od
                                      }],
                                      className: Qd()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: yd
                                      })
                                    })
                                  })]
                                }), (0, Kd.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, Kd.jsx)(Rd.d, {
                                    text: vd,
                                    className: "QTETimedClickLabelText"
                                  }), Nd && (0, Kd.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: hd
                                  })]
                                })]
                              })
                            })),
                            Nd = (0, Wd.memo)((function(dd) {
                              let {
                                initialParameters: Od
                              } = dd;
                              const md = (0, Wd.useRef)(null),
                                Fd = (0, Wd.useRef)(null),
                                hd = (0, Wd.useRef)(null),
                                vd = (0, Wd.useRef)(!1),
                                Qd = Od.description,
                                td = null === Od || void 0 === Od ? void 0 : Od.icon,
                                od = (0, Xd.f)();
                              return (0, Wd.useEffect)((() => {
                                const dd = od.onFrame((() => {
                                  const dd = od.getState();
                                  if (!dd.isActive) return;
                                  const Od = dd.state;
                                  if (md.current) {
                                    const dd = 100 * (Od.catchZonePosition - Od.VR / 2);
                                    md.current.style.left = `${dd}%`, md.current.style.width = 100 * Od.VR + "%", Od.isCatching !== vd.current && (vd.current = Od.isCatching, Od.isCatching ? md.current.classList.add("catching") : md.current.classList.remove("catching"))
                                  }
                                  Fd.current && (Fd.current.style.left = 100 * Od.moverPosition + "%"), hd.current && (hd.current.value = Od.progress)
                                }));
                                return () => {
                                  dd()
                                }
                              }), [od]), (0, Kd.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, Kd.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, Kd.jsx)(Rd.d, {
                                    text: Qd
                                  })
                                }), (0, Kd.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: hd
                                }), (0, Kd.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, Kd.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: md
                                  }), (0, Kd.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Fd,
                                    children: (0, Kd.jsx)("span", {
                                      children: td && (0, Kd.jsx)(Rd.d, {
                                        text: [{
                                          icon: td,
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
                          var qd = md(701);
                          const Hd = (0, Wd.memo)((function(dd) {
                              let {
                                initialParameters: Od
                              } = dd;
                              const md = (0, Wd.useRef)(null),
                                Fd = Od.label,
                                hd = Od.PR,
                                {
                                  icon: vd,
                                  scale: Qd,
                                  rotation: td
                                } = null !== Od && void 0 !== Od ? Od : {},
                                od = 100 * (.5 - hd / 2),
                                Nd = 100 * hd,
                                Hd = (0, Xd.f)();
                              return (0, Wd.useEffect)((() => {
                                const dd = Hd.onFrame((() => {
                                  const dd = Hd.getState();
                                  if (!dd.isActive || !md.current) return;
                                  const Od = dd.state;
                                  md.current.style.left = 100 * Od.markerPosition + "%"
                                }));
                                return () => {
                                  dd()
                                }
                              }), [Hd]), (0, Kd.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, qd.O)(Qd) && {
                                    "--scale": Qd
                                  },
                                  ...!(0, qd.O)(td) && {
                                    "--rotation": `${td}deg`
                                  }
                                },
                                children: [vd && (0, Kd.jsx)(Rd.d, {
                                  text: [{
                                    icon: vd
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, Kd.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, Kd.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${od}%`,
                                      width: `${Nd}%`
                                    }
                                  }), (0, Kd.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: md
                                  })]
                                }), (0, Kd.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, Kd.jsx)(Rd.d, {
                                    text: Fd
                                  })
                                })]
                              })
                            })),
                            yd = (0, Wd.memo)((function(dd) {
                              let {
                                initialParameters: Od
                              } = dd;
                              const md = (0, Wd.useRef)(null),
                                [Fd, hd] = (0, Wd.useState)((() => new Array(Od.cR).fill("pending"))),
                                [vd, Qd] = (0, Wd.useState)((() => {
                                  const dd = Od.eR;
                                  return (0, qd.O)(dd) || dd <= 0 ? [] : new Array(dd).fill("pending")
                                })),
                                td = Od.label,
                                {
                                  icon: od
                                } = Od,
                                Nd = (0, Wd.useRef)(0),
                                Hd = (0, Wd.useRef)(0),
                                yd = (0, Wd.useRef)([]),
                                bd = (0, Xd.f)();
                              return (0, Wd.useEffect)((() => {
                                const dd = bd.onFrame((() => {
                                  const dd = bd.getState();
                                  if (!dd.isActive || !md.current) return;
                                  const Od = dd.state,
                                    Wd = 30 + 60 * Od.outerCircleProgress;
                                  if (md.current.setAttribute("r", String(Wd)), !0 === Od.lastClickResult && Od.successes > Nd.current) {
                                    md.current.classList.remove("QTERhythmClickOuterCircle--miss"), md.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const dd = setTimeout((() => {
                                      var dd;
                                      null === (dd = md.current) || void 0 === dd || dd.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    yd.current.push(dd)
                                  } else if (!1 === Od.lastClickResult && Od.misses > Hd.current) {
                                    md.current.classList.remove("QTERhythmClickOuterCircle--hit"), md.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const dd = setTimeout((() => {
                                      var dd;
                                      null === (dd = md.current) || void 0 === dd || dd.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    yd.current.push(dd)
                                  }
                                  Od.successes === Nd.current && Od.misses === Hd.current || (Nd.current = Od.successes, Hd.current = Od.misses, hd((dd => {
                                    const md = [...dd];
                                    for (let Wd = 0; Wd < Od.cR; Wd++) md[Wd] = Wd < Od.successes ? "success" : "pending";
                                    return md
                                  })), Qd((dd => {
                                    if (0 === dd.length) return dd;
                                    const md = [...dd];
                                    for (let Wd = 0; Wd < md.length; Wd++) md[Wd] = Wd < Od.misses ? "miss" : "pending";
                                    return md
                                  })))
                                }));
                                return () => {
                                  dd();
                                  for (const dd of yd.current) clearTimeout(dd);
                                  yd.current = []
                                }
                              }), [bd]), (0, Kd.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, Kd.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Fd.map(((dd, Od) => (0, Kd.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === dd ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, Od)))
                                }), (0, Kd.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, Kd.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Kd.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, Kd.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: md
                                    })]
                                  }), od && (0, Kd.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, Kd.jsx)(Rd.d, {
                                      text: [{
                                        icon: od
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), vd.length > 0 && (0, Kd.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: vd.map(((dd, Od) => (0, Kd.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === dd ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, Od)))
                                }), (0, Kd.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, Kd.jsx)(Rd.d, {
                                    text: td
                                  })
                                })]
                              })
                            }));

                          function bd(dd) {
                            let {
                              qte: Od
                            } = dd;
                            switch (Od.type) {
                              case "progressBar":
                                return (0, Kd.jsx)(hd, {
                                  initialParameters: Od.parameters
                                });
                              case "timedClick":
                                return (0, Kd.jsx)(od, {
                                  initialParameters: Od.parameters
                                });
                              case "gravityBar":
                                return (0, Kd.jsx)(Nd, {
                                  initialParameters: Od.parameters
                                });
                              case "precisionBar":
                                return (0, Kd.jsx)(Hd, {
                                  initialParameters: Od.parameters
                                });
                              case "rhythmClick":
                                return (0, Kd.jsx)(yd, {
                                  initialParameters: Od.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Td = (0, Wd.memo)((function() {
                            const [dd, Od] = (0, Wd.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Fd.f)("qteStateUpdated", (dd => {
                              Od(dd)
                            })), dd.isActive && dd.type ? (0, Kd.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, Kd.jsx)(bd, {
                                qte: dd
                              })
                            }) : null
                          }))
                        }, 5548: (dd, Od, md) => {
                          md.d(Od, {
                            d: () => Kd,
                            f: () => hd
                          });
                          var Wd = md(66),
                            Fd = md(1361),
                            Rd = md(5550);
                          const Xd = {
                              getState: () => Rd.e.getCurrentState(),
                              onFrame: Fd.D
                            },
                            Kd = (0, Wd.createContext)(Xd);

                          function hd() {
                            return (0, Wd.useContext)(Kd)
                          }
                        }, 5620: (dd, Od, md) => {
                          md.d(Od, {
                            c: () => rd,
                            e: () => Ad
                          });
                          var Wd = md(5623),
                            Fd = md(387);
                          const Rd = 120,
                            Xd = 260,
                            Kd = 1.15,
                            hd = 1.2,
                            vd = 2,
                            Qd = 1.08,
                            td = .8,
                            od = .95,
                            Nd = 8,
                            qd = "[\"')\\]\u300d\u300f\uff09]*",
                            Hd = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${qd}$`),
                            yd = new RegExp(`[?\uff1f]${qd}$`),
                            bd = new RegExp(`[!\uff01]${qd}$`),
                            Td = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            pd = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            Yd = new RegExp(`[${pd}]`),
                            gd = new RegExp(`[${pd}]|[^${pd}]+`, "g"),
                            wd = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Ed(dd) {
                            let Od = 2166136261;
                            for (let md = 0; md < dd.length; md++) Od ^= dd.charCodeAt(md), Od = Math.imul(Od, 16777619);
                            return (Od >>> 0) / 4294967295 * 2 - 1
                          }

                          function Jd(dd) {
                            var Od;
                            if (Yd.test(dd)) return 1;
                            const md = dd.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Wd = md.replace(/[^0-9]/g, "");
                            if (Wd.length > 0 && !/\p{L}/u.test(md)) return Math.min(Wd.length, 4);
                            const Fd = null !== (Od = md.match(wd)) && void 0 !== Od ? Od : [];
                            if (0 === Fd.length) {
                              var Rd, Xd;
                              const dd = null !== (Rd = null === (Xd = md.match(/\p{L}/gu)) || void 0 === Xd ? void 0 : Xd.length) && void 0 !== Rd ? Rd : 0;
                              return 0 === dd ? 0 : Math.min(Math.max(1, Math.round(dd / 2.5)), Nd)
                            }
                            const Kd = md.replace(/[^\p{L}]/gu, ""),
                              hd = Fd.length > 1 && "e" === Fd.at(-1) && Kd.endsWith("e") && !Kd.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(dd.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Fd.length - (hd ? 1 : 0), Nd)
                          }

                          function Ud(dd) {
                            return dd.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function xd(dd) {
                            const Od = dd.replace(/[^\p{L}]/gu, "");
                            return Od.length >= 2 && Od === Od.toUpperCase() && Od !== Od.toLowerCase()
                          }

                          function Bd(dd, Od) {
                            var md;
                            const Nd = Od && (0, Wd.k)(Od),
                              qd = null !== (md = null === Nd || void 0 === Nd ? void 0 : Nd.syllableMs) && void 0 !== md ? md : Wd.d,
                              pd = function(dd) {
                                const Od = [];
                                for (const Wd of (0, Fd.dc)(dd))
                                  if ("string" === typeof Wd)
                                    for (const dd of Wd.split(/(\s+)/)) {
                                      if ("" === dd) continue;
                                      if (/^\s+$/.test(dd)) {
                                        Od.push({
                                          kind: "space",
                                          text: dd
                                        });
                                        continue
                                      }
                                      if (!Yd.test(dd)) {
                                        Od.push({
                                          kind: "word",
                                          text: dd,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Wd = !0;
                                      for (const Fd of null !== (md = dd.match(gd)) && void 0 !== md ? md : []) {
                                        var md;
                                        const dd = Od.at(-1);
                                        Wd || "word" !== (null === dd || void 0 === dd ? void 0 : dd.kind) || Yd.test(Fd) || /[\p{L}\p{N}]/u.test(Fd) ? (Wd || Od.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), Od.push({
                                          kind: "word",
                                          text: Fd,
                                          delayMs: 0
                                        }), Wd = !1) : dd.text += Fd
                                      }
                                    } else Od.push({
                                      kind: "icon",
                                      text: Wd.icon,
                                      delayMs: 0
                                    });
                                return Od
                              }(dd),
                              wd = [];
                            let Bd = [];
                            for (const Wd of pd) "space" !== Wd.kind && (Bd.push(Wd), Hd.test(Wd.text) && (wd.push(Bd), Bd = []));
                            wd.push(Bd);
                            const Sd = [];
                            let sd = 0;
                            for (const Wd of wd) {
                              var ud, Vd;
                              const dd = null !== (ud = null === (Vd = Wd.at(-1)) || void 0 === Vd ? void 0 : Vd.text) && void 0 !== ud ? ud : "",
                                Od = yd.test(dd),
                                md = bd.test(dd),
                                Fd = Wd.map((dd => "word" === dd.kind ? Jd(dd.text) : 1)),
                                pd = Fd.findLastIndex((dd => dd > 0));
                              for (const [yd, bd] of Wd.entries()) {
                                const dd = "word" === bd.kind,
                                  Wd = Fd[yd];
                                bd.delayMs = sd;
                                for (let Fd = 0; Nd && Fd < Wd; Fd++) {
                                  const {
                                    intonation: Rd
                                  } = Nd;
                                  let Xd = pd > 0 ? -Rd.declineSemitones * (yd / pd) : 0;
                                  Xd += Ed(`${Ud(bd.text)}|${Fd}`) * Rd.variationSemitones;
                                  const Hd = Math.min(1, Rd.variationSemitones);
                                  let Td = Nd.glideSemitones,
                                    Yd = 1;
                                  md && (Xd += Rd.exclaimLiftSemitones, Yd *= Kd), Od && yd === pd && (Xd += Rd.questionRiseSemitones * (Wd > 1 ? .5 + .5 * Fd / (Wd - 1) : 1), Fd === Wd - 1 && (Td = Math.abs(Td) + Rd.questionRiseSemitones / 2)), dd && xd(bd.text) && (Xd += vd * Hd, Yd *= hd), Wd > 1 && 0 === Fd && (Xd += td * Hd, Yd *= Qd), Sd.push({
                                    atMs: sd + Fd * qd,
                                    semitones: Xd,
                                    glideSemitones: Td,
                                    durationMs: Fd < Wd - 1 ? Math.min(Nd.durationMs, qd * od) : Nd.durationMs,
                                    level: Yd
                                  })
                                }
                                sd += Wd * qd + (Hd.test(bd.text) ? Xd : Td.test(bd.text) ? Rd : 0)
                              }
                            }
                            return {
                              pieces: pd.map((dd => "space" === dd.kind ? dd : "icon" === dd.kind ? {
                                kind: "icon",
                                icon: dd.text,
                                delayMs: dd.delayMs
                              } : {
                                kind: "word",
                                text: dd.text,
                                delayMs: dd.delayMs
                              })),
                              blips: Sd
                            }
                          }
                          var Sd = md(1238),
                            sd = md(1306),
                            ud = md(2094);

                          function Vd(dd) {
                            if ("string" === typeof dd) return dd;
                            const Od = sd.f.get().getCurrentLanguageCode();
                            return (0, Sd.u)(Od, dd.translationKey, (0, Sd.s)(dd.params, ud.c.shown))
                          }

                          function Ad(dd) {
                            const Od = void 0 === dd.voice ? null : (0, Wd.l)(dd.voice),
                              md = Od && (0, Wd.k)(Od);
                            return {
                              plan: Bd(Vd(dd.line), md),
                              synth: md
                            }
                          }

                          function rd(dd) {
                            const Od = [];
                            let md = [];
                            for (const [Fd, Rd] of dd.entries()) {
                              var Wd;
                              "space" === Rd.kind && (" " !== Rd.text || "icon" !== (null === (Wd = dd[Fd + 1]) || void 0 === Wd ? void 0 : Wd.kind)) ? (md.length > 0 && Od.push(md), Od.push([Rd]), md = []) : md.push(Rd)
                            }
                            return md.length > 0 && Od.push(md), Od
                          }
                        }, 5632: (dd, Od, md) => {
                          md.d(Od, {
                            b: () => Qd,
                            f: () => td
                          });
                          var Wd = md(5641),
                            Fd = md(29);
                          const Rd = .25,
                            Xd = .85,
                            Kd = .02,
                            hd = .01;

                          function vd(dd, Od, md, Wd, Fd, Rd, Kd) {
                            const {
                              waveform: hd,
                              pitchHz: vd,
                              attackMs: Qd,
                              releaseMs: td,
                              lowpassHz: od
                            } = md, Nd = Fd + Wd.durationMs / 1e3, qd = vd * 2 ** (Wd.semitones / 12), Hd = dd.createOscillator();
                            Hd.type = hd, Hd.frequency.setValueAtTime(qd, Fd), Hd.frequency.exponentialRampToValueAtTime(qd * 2 ** (Wd.glideSemitones / 12), Nd);
                            const yd = Fd + Math.min(Qd, Wd.durationMs) / 1e3,
                              bd = dd.createGain();
                            bd.gain.setValueAtTime(0, Fd), bd.gain.linearRampToValueAtTime(Rd, yd), bd.gain.linearRampToValueAtTime(Rd * Xd, Math.max(yd, Nd - td / 1e3)), bd.gain.linearRampToValueAtTime(0, Nd);
                            const Td = [Hd];
                            if (null !== od) {
                              const Od = dd.createBiquadFilter();
                              Od.type = "lowpass", Od.frequency.value = od, Td.push(Od)
                            }
                            Td.push(bd, Od);
                            for (let Xd = 1; Xd < Td.length; Xd++) Td[Xd - 1].connect(Td[Xd]);
                            return Hd.onended = () => {
                              for (const dd of Td.slice(0, -1)) dd.disconnect();
                              Kd()
                            }, Hd.start(Fd), Hd.stop(Nd), Hd
                          }

                          function Qd(dd, Od, md, Wd, Fd, Xd) {
                            if (0 === Wd.length) return Xd(), () => {};
                            const Qd = Rd * md.volume * Fd,
                              td = dd.createGain();
                            td.connect(Od);
                            const od = dd.currentTime + Kd,
                              Nd = new Set;
                            for (const Rd of Wd) {
                              const Od = vd(dd, td, md, Rd, od + Rd.atMs / 1e3, Qd * Rd.level, (() => {
                                Nd.delete(Od), 0 === Nd.size && (td.disconnect(), Xd())
                              }));
                              Nd.add(Od)
                            }
                            return () => {
                              const Od = dd.currentTime;
                              td.gain.setTargetAtTime(0, Od, hd);
                              for (const dd of Nd) try {
                                dd.stop(Od + 5 * hd)
                              } catch {}
                            }
                          }

                          function td(dd, Od) {
                            var md;
                            const Rd = Wd.Howler.ctx,
                              Xd = Wd.Howler.masterGain;
                            if (!Rd || !Xd || !Fd.e.get("soundOnFromAd")) return () => {};
                            const Kd = Wd.Howler;
                            return null === (md = Kd._autoResume) || void 0 === md || md.call(Kd), Qd(Rd, Xd, dd, Od, Fd.e.get("soundVolume"), (() => {
                              var dd;
                              null === (dd = Kd._autoSuspend) || void 0 === dd || dd.call(Kd)
                            }))
                          }
                        }, 5607: (dd, Od, md) => {
                          md.d(Od, {
                            d: () => Kd,
                            f: () => Fd,
                            g: () => hd,
                            i: () => Xd,
                            k: () => Rd
                          });
                          var Wd = md(5599);
                          const Fd = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            Rd = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            Xd = `${Wd.k} lists every page of the Bloxd Code API docs.`;

                          function Kd(dd, Od) {
                            return `${dd.url}${encodeURIComponent(Od.toWellFormed())}`
                          }

                          function hd(dd) {
                            const Od = Kd(Fd, dd);
                            return Od.length <= 3e4 ? {
                              url: Od,
                              sendsPrompt: !0
                            } : {
                              url: new URL(Fd.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 5641: (dd, Od, md) => {
                          md.r(Od), md.d(Od, {
                            Howl: () => Fd.Howl,
                            Howler: () => Fd.Howler,
                            musicOutput: () => yd,
                            readyAudioContext: () => bd
                          });
                          var Wd, Fd = md(5650),
                            Rd = md(4664),
                            Xd = md(5326);
                          const Kd = Fd.Howler;

                          function hd() {
                            var dd, Od;
                            if (Kd.ctx || !Kd.usingWebAudio || "undefined" === typeof AudioContext || !(0, Xd.j)()) return;
                            const md = navigator.audioSession;
                            let Wd;
                            "auto" === (null === md || void 0 === md ? void 0 : md.type) && (md.type = "ambient");
                            try {
                              Wd = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Fd = Wd.createGain();
                            Fd.gain.setValueAtTime(Kd._muted ? 0 : null !== (dd = Kd._volume) && void 0 !== dd ? dd : 1, Wd.currentTime), Fd.connect(Wd.destination), Kd.ctx = Wd, Kd.masterGain = Fd, null === (Od = Kd._setup) || void 0 === Od || Od.call(Kd)
                          }
                          Kd._mobileUnloaded = !0;
                          const vd = Kd.volume.bind(Fd.Howler);
                          Kd.volume = function() {
                            return hd(), vd(...arguments)
                          };
                          const Qd = Kd.mute.bind(Fd.Howler);
                          Kd.mute = dd => (hd(), Qd(dd));
                          const td = Fd.Howl.prototype,
                            od = td.init;

                          function Nd() {
                            for (; Kd._html5AudioPool.length < Kd.html5PoolSize;) {
                              const dd = new Audio;
                              dd._unlocked = !0, Kd._releaseHtml5Audio(dd)
                            }
                            for (const Od of Kd._howls)
                              if (!Od._webAudio)
                                for (const md of Od._getSoundIds()) {
                                  var dd;
                                  const Wd = null === (dd = Od._soundById(md)) || void 0 === dd ? void 0 : dd._node;
                                  Wd && !Wd._unlocked && (Wd._unlocked = !0, Wd.load())
                                }
                          }
                          td.init = function(dd) {
                            return hd(), od.call(this, dd)
                          }, (0, Xd.j)() && (Kd._unlockAudio = () => {
                            const dd = Kd.ctx;
                            if (Kd._audioUnlocked || !dd) return;
                            Kd.autoUnlock = !1;
                            const Od = dd.createBuffer(1, 1, 22050);
                            Kd._scratchBuffer = Od;
                            const md = new AbortController;
                            let Wd = "afterPaint";
                            const Fd = () => {
                                var Wd;
                                if (Kd._audioUnlocked) return;
                                null === (Wd = Kd._autoResume) || void 0 === Wd || Wd.call(Kd);
                                const Fd = dd.createBufferSource();
                                Fd.buffer = Od, Fd.connect(dd.destination), Fd.start(0), dd.resume().catch((() => {})), Fd.onended = () => {
                                  Fd.disconnect(0), Kd._audioUnlocked = !0, md.abort();
                                  for (const dd of Kd._howls) dd._emit("unlock")
                                }
                              },
                              hd = () => {
                                Nd(), Fd()
                              },
                              vd = Od => {
                                if (Nd(), "inTap" === Wd) {
                                  if ("running" === dd.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Fd()
                                } else "afterPaint" === Wd && (Wd = "queued", (0, Rd.d)(Od.timeStamp, (() => {
                                  Wd = "inTap", Fd()
                                })))
                              };
                            for (const Rd of ["touchstart", "touchend"]) document.addEventListener(Rd, hd, {
                              capture: !0,
                              signal: md.signal
                            });
                            for (const Rd of Xd.d) document.addEventListener(Rd, vd, {
                              capture: !0,
                              signal: md.signal
                            })
                          });
                          let qd = 0;
                          const Hd = null === (Wd = Kd._autoSuspend) || void 0 === Wd ? void 0 : Wd.bind(Fd.Howler);

                          function yd() {
                            bd();
                            const {
                              ctx: dd,
                              masterGain: Od
                            } = Kd;
                            return dd && Od ? {
                              ctx: dd,
                              destination: Od,
                              holdAwake: dd => {
                                var Od, md;
                                (qd += dd ? 1 : -1, dd) ? null === (Od = Kd._autoResume) || void 0 === Od || Od.call(Kd): null === (md = Kd._autoSuspend) || void 0 === md || md.call(Kd)
                              },
                              wake: () => {
                                var Od;
                                "running" !== dd.state && (null === (Od = Kd._autoResume) || void 0 === Od || Od.call(Kd), dd.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function bd() {
                            var dd;
                            (Kd.volume(), Kd.ctx && Kd.autoUnlock) && (null === (dd = Kd._unlockAudio) || void 0 === dd || dd.call(Kd))
                          }
                          Hd && (Kd._autoSuspend = () => qd > 0 ? Fd.Howler : Hd())
                        }, 5656: (dd, Od, md) => {
                          function Wd(dd) {
                            return {
                              notAfter: dd
                            }
                          }
                          md.d(Od, {
                            d: () => hd,
                            g: () => vd,
                            h: () => Kd,
                            l: () => Wd,
                            o: () => Fd,
                            q: () => Rd,
                            s: () => Xd,
                            v: () => Qd,
                            w: () => td
                          });
                          const Fd = Wd("\\w$."),
                            Rd = Wd("\\w.,");

                          function Xd(dd) {
                            return Od => hd(Od, dd)
                          }

                          function Kd(dd) {
                            return Od => !dd.test(Od.input.slice(0, Od.index))
                          }

                          function hd(dd, Od) {
                            return dd.index > 0 && new RegExp(`[${Od}]`).test(dd.input[dd.index - 1])
                          }

                          function vd(dd, Od, md) {
                            return function(dd) {
                              return void 0 !== dd && "function" !== typeof dd
                            }(md) ? function(dd, Od, md) {
                              const Wd = Od.flags.replace(/[gy]/g, ""),
                                Fd = new RegExp(`[^${md}](?:${Od.source})`, `${Wd}g`),
                                Rd = [],
                                Xd = md => {
                                  const Wd = md.index + md[0].length;
                                  return ("" === md[0] ? od(dd, Od, Wd) : Wd) - 1
                                },
                                Kd = new RegExp(`(?:${Od.source})`, `${Wd}y`).exec(dd);
                              if (Kd) {
                                if (Rd.push(Kd), !Od.global) return Rd;
                                Fd.lastIndex = Xd(Kd)
                              }
                              for (let hd = Fd.exec(dd); hd; hd = Fd.exec(dd)) {
                                const md = od(dd, Od, hd.index) - hd.index;
                                if (hd[0] = hd[0].slice(md), hd.index += md, Rd.push(hd), !Od.global) break;
                                Fd.lastIndex = Xd(hd)
                              }
                              return Rd
                            }(dd, Od, md.notAfter) : function(dd, Od, md) {
                              const Wd = new RegExp(Od.source, `${Od.flags.replace(/[gy]/g,"")}g`),
                                Fd = [];
                              for (let Rd = Wd.exec(dd); Rd; Rd = Wd.exec(dd))
                                if (!md || md(Rd)) {
                                  if (Fd.push(Rd), !Od.global) break;
                                  "" === Rd[0] && (Wd.lastIndex = od(dd, Od, Wd.lastIndex))
                                } else Wd.lastIndex = od(dd, Od, Rd.index);
                              return Fd
                            }(dd, Od, md)
                          }

                          function Qd(dd, Od, md, Wd) {
                            let Fd = "",
                              Rd = 0;
                            for (const Xd of vd(dd, Od, md)) Fd += dd.slice(Rd, Xd.index) + Wd(Xd), Rd = Xd.index + Xd[0].length;
                            return Fd + dd.slice(Rd)
                          }

                          function td(dd, Od, md) {
                            const Wd = [];
                            let Fd = 0;
                            for (const Rd of vd(dd, Od, md)) Wd.push(dd.slice(Fd, Rd.index)), Fd = Rd.index + Rd[0].length;
                            return [...Wd, dd.slice(Fd)]
                          }

                          function od(dd, Od, md) {
                            var Wd;
                            return md + (Od.unicode && (null !== (Wd = dd.codePointAt(md)) && void 0 !== Wd ? Wd : 0) > 65535 ? 2 : 1)
                          }
                        }, 5599: (dd, Od, md) => {
                          md.d(Od, {
                            c: () => Fd,
                            e: () => hd,
                            g: () => Rd,
                            k: () => Xd,
                            m: () => Kd,
                            p: () => yd,
                            s: () => Qd,
                            t: () => td,
                            x: () => Hd,
                            z: () => Nd
                          });
                          var Wd = md(1714);
                          const Fd = 24e3,
                            Rd = "/docs/llms.txt",
                            Xd = `${Wd.c}${Rd}`,
                            Kd = "/llms.txt",
                            hd = "/docs/llms-full.txt";

                          function vd(dd) {
                            return dd || "index"
                          }

                          function Qd(dd) {
                            return `/docs/${vd(dd)}.md`
                          }

                          function td(dd, Od) {
                            return `/docs/${vd(dd)}/${Od+1}.md`
                          }
                          const od = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Nd(dd) {
                            const Od = od.exec(dd);
                            return null === Od ? null : {
                              name: Od[1],
                              part: void 0 === Od[2] ? null : Number(Od[2])
                            }
                          }
                          const qd = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Hd(dd) {
                            const Od = qd.exec(dd);
                            if (null === Od) return null;
                            const [, md = "", Wd] = Od;
                            return void 0 === Wd ? Qd(md) : td(md, Number(Wd) - 1)
                          }

                          function yd(dd) {
                            return `/docsHtml/${vd(dd)}.html`
                          }
                        }, 5623: (dd, Od, md) => {
                          md.d(Od, {
                            d: () => Fd,
                            h: () => Wd,
                            j: () => Rd,
                            k: () => hd,
                            l: () => Xd
                          });
                          const Wd = ["sine", "triangle", "square", "sawtooth"],
                            Fd = 55,
                            Rd = {
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

                          function Xd(dd) {
                            return "string" !== typeof dd ? dd : Object.hasOwn(Rd, dd) ? Rd[dd] : null
                          }

                          function Kd(dd, Od, md) {
                            return Math.min(md, Math.max(Od, dd))
                          }

                          function hd(dd) {
                            const Od = Kd(dd.durationMs, 10, 500),
                              md = Kd(dd.attackMs, 0, Od),
                              {
                                intonation: Fd
                              } = dd;
                            return {
                              waveform: Wd.includes(dd.waveform) ? dd.waveform : "sine",
                              pitchHz: Kd(dd.pitchHz, 20, 4e3),
                              glideSemitones: Kd(dd.glideSemitones, -24, 24),
                              durationMs: Od,
                              attackMs: md,
                              releaseMs: Kd(dd.releaseMs, 0, Od - md),
                              lowpassHz: null === dd.lowpassHz ? null : Kd(dd.lowpassHz, 20, 2e4),
                              volume: Kd(dd.volume, 0, 2),
                              intonation: {
                                variationSemitones: Kd(Fd.variationSemitones, 0, 6),
                                declineSemitones: Kd(Fd.declineSemitones, 0, 12),
                                questionRiseSemitones: Kd(Fd.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: Kd(Fd.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: Kd(dd.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const dd in modules) Object.freeze(modules[dd]);