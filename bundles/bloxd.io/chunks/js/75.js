export const id = 75;
export const ids = [75, 91];
export const modules = {
    4464: (zz, tz, sz) => {
      sz.d(tz, {
        c: () => gz,
        e: () => Hz
      });
      var Fz = sz(1020),
        Wz = sz.n(Fz),
        Xz = sz(65),
        Oz = sz(1173),
        oz = sz(4467),
        vz = sz(1831),
        Uz = sz(2290),
        Kz = sz(4472),
        uz = sz(1087);
      const Nz = new WeakMap;
      let bz = 0;

      function wz(zz) {
        let tz = Nz.get(zz);
        return void 0 === tz && (tz = bz++, Nz.set(zz, tz)), tz
      }

      function Dz(zz) {
        let {
          piece: tz
        } = zz;
        return "space" === tz.kind ? (0, uz.jsx)(uz.Fragment, {
          children: tz.text
        }) : (0, uz.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${tz.delayMs}ms`
          },
          children: (0, uz.jsx)(oz.b, {
            text: "icon" === tz.kind ? `[[${tz.icon}]]` : tz.text
          })
        })
      }

      function gz(zz) {
        let {
          display: tz
        } = zz;
        const {
          selectedLanguage: sz
        } = (0, Oz.B)(), Fz = (0, Xz.useMemo)((() => (0, Kz.d)((0, Kz.f)(tz).plan.pieces)), [tz, sz.code]);
        return (0, uz.jsxs)("div", {
          className: Wz()("Dialogue", {
            DialogueAnimateIn: !1 !== tz.animateIn
          }),
          children: [tz.speakerName && (0, uz.jsx)(vz.c, {
            text: tz.speakerName,
            className: "DialogueSpeaker"
          }), (0, uz.jsx)("p", {
            className: "DialogueLine",
            children: Fz.map(((zz, tz) => 1 === zz.length && "space" === zz[0].kind ? zz[0].text : (0, uz.jsx)("span", {
              className: "DialogueGlue",
              children: zz.map(((zz, tz) => (0, uz.jsx)(Dz, {
                piece: zz
              }, tz)))
            }, tz)))
          })]
        })
      }
      const Hz = (0, Xz.memo)((function() {
        const zz = (0, Uz.e)("dialogue");
        return (0, uz.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: zz && (0, uz.jsx)(gz, {
            display: zz
          }, wz(zz))
        })
      }))
    },
    4356: (zz, tz, sz) => {
        sz.r(tz), sz.d(tz, {
          default: () => tO
        });
        var Fz = sz(65),
          Wz = sz(1020),
          Xz = sz.n(Wz),
          Oz = sz(1490),
          oz = sz(1493),
          vz = sz(30),
          Uz = sz(78),
          Kz = sz(4359),
          uz = sz(4367),
          Nz = sz(4373),
          bz = sz(4017),
          wz = sz(1087);
        const Dz = "/textures/docs/icons";

        function gz(zz) {
          let {
            name: tz,
            isTinted: sz,
            className: Fz,
            style: Wz
          } = zz;
          const Oz = `${Dz}/${tz}.png`;
          return sz ? (0, wz.jsxs)("span", {
            className: Xz()("DocsPixelIcon", "Tinted", Fz),
            "aria-hidden": "true",
            style: Wz,
            children: [(0, wz.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Oz}")`,
                WebkitMaskImage: `url("${Oz}")`
              }
            }), (0, wz.jsx)("img", {
              src: Oz,
              alt: ""
            })]
          }) : (0, wz.jsx)("img", {
            className: Xz()("DocsPixelIcon", Fz),
            src: Oz,
            alt: "",
            "aria-hidden": "true",
            style: Wz
          })
        }
        const Hz = 1500;

        function Bz() {
          const [zz, tz] = (0, Fz.useState)(null);
          (0, Fz.useEffect)((() => {
            if (null === zz) return;
            const sz = setTimeout((() => {
              tz(null)
            }), Hz);
            return () => {
              clearTimeout(sz)
            }
          }), [zz]);
          return [zz, zz => {
            (0, bz.b)(zz).then((() => {
              tz({
                text: zz,
                failed: !1
              })
            }), (sz => {
              console.error("Could not copy to the clipboard", sz), tz({
                text: zz,
                failed: !0
              })
            }))
          }]
        }

        function Pz(zz) {
          let {
            text: tz,
            label: sz,
            className: Fz
          } = zz;
          const [Wz, Oz] = Bz(), oz = !1 === (null === Wz || void 0 === Wz ? void 0 : Wz.failed);
          return (0, wz.jsxs)("button", {
            type: "button",
            className: Xz()("DocsCopyButton", Fz, {
              Copied: oz
            }),
            title: `Copy ${tz.length>40?"to clipboard":tz}`,
            "aria-label": sz ? void 0 : `Copy ${tz}`,
            onClick: zz => {
              zz.stopPropagation(), Oz(tz)
            },
            children: [(0, wz.jsx)(gz, {
              name: oz ? "check" : "copy"
            }), sz && (0, wz.jsx)("span", {
              children: oz ? "Copied" : null !== Wz && void 0 !== Wz && Wz.failed ? "Copy failed" : sz
            })]
          })
        }
        Kz.d.registerLanguage("javascript", uz.c), Kz.d.registerLanguage("typescript", Nz.e);
        const rz = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          Yz = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          xz = 24;

        function mz(zz) {
          let {
            code: tz,
            lang: sz,
            compact: Wz = !1
          } = zz;
          const Oz = (0, Fz.useMemo)((() => function(zz, tz) {
              const sz = rz[tz];
              return sz ? Kz.d.highlight(zz, {
                language: sz
              }).value : zz.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(tz, sz)), [tz, sz]),
            oz = tz.split("\n").length,
            vz = !Wz && oz > xz + 6,
            [Uz, uz] = (0, Fz.useState)(!1),
            Nz = rz[sz];
          return (0, wz.jsxs)("div", {
            className: Xz()("DocsCodeBlock", {
              Compact: Wz,
              Collapsed: vz && !Uz
            }),
            children: [!Wz && (0, wz.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, wz.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Nz ? Yz[Nz] : "Text"
              }), (0, wz.jsx)(Pz, {
                text: tz,
                label: "Copy"
              })]
            }), (0, wz.jsx)("pre", {
              children: (0, wz.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Oz
                }
              })
            }), vz && (0, wz.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Uz,
              onClick: () => {
                uz(!Uz)
              },
              children: [(0, wz.jsx)(gz, {
                name: Uz ? "chevron-up" : "chevron-down"
              }), Uz ? "Show less" : `Show all ${oz} lines`]
            })]
          })
        }
        var Jz = sz(4379);
        var Iz = sz(4382);
        const Cz = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function ez(zz) {
          const tz = new Map;
          let sz, Fz = [],
            Wz = !1;
          const Xz = () => {
            sz && tz.set(sz.name, sz.lines.join("\n").trimEnd())
          };
          for (const Oz of zz.split("\n")) {
            const zz = Oz.match(Cz);
            Wz || Oz.startsWith("/*") ? (Wz || (Xz(), sz = void 0), Fz.push(Oz), Wz = !Oz.includes("*/")) : zz ? (Xz(), sz = {
              name: zz[1],
              lines: [...Fz, Oz]
            }, Fz = []) : sz && (Oz.startsWith(" ") || Oz.startsWith("\t") || /^[}\])|]/.test(Oz)) ? sz.lines.push(Oz) : sz && "" !== Oz.trim() && (Xz(), sz = void 0)
          }
          return Xz(), tz
        }

        function Zz(zz) {
          return "methods" === zz || "callbacks" === zz || "settings" === zz
        }
        const Gz = {
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
              setterSnippet: (zz, tz) => `api.setClientOption(playerId, "${zz}", ${tz})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (zz, tz) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${zz}", ${tz})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (zz, tz) => `api.setMobSetting(mobId, "${zz}", ${tz})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (zz, tz) => `api.setVehicleSetting(vehicleId, "${zz}", ${tz})`
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
          Tz = {
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

        function cz(zz) {
          return zz.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function jz(zz) {
          let tz = !1;
          return zz.split("\n").map((zz => (zz.startsWith("```") && (tz = !tz), !tz && /^#{3,} /.test(zz) ? zz.slice(1) : zz))).join("\n")
        }

        function Az(zz) {
          return "readme" === zz ? "getting-started" : cz(zz)
        }
        const yz = "## Glossary of Referenced Types";
        const Mz = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...Iz.d.flatMap((zz => {
            const tz = {
              id: zz.id,
              slug: Az(zz.id),
              title: zz.title,
              markdown: zz.content,
              ...Gz[zz.id]
            };
            if ("readme" === zz.id) return function(zz) {
              const tz = zz.markdown.indexOf(yz),
                sz = zz.markdown.indexOf("\n```", tz),
                Fz = zz.markdown.indexOf("\n```", sz + 1);
              if (-1 === tz || -1 === sz || -1 === Fz) throw new Error(`Getting started has no "${yz}" section with a code block`);
              const Wz = zz.markdown.slice(tz + 31, sz).trim(),
                Xz = [...ez(zz.markdown.slice(zz.markdown.indexOf("\n", sz + 1) + 1, Fz))].map((zz => {
                  let [tz, sz] = zz;
                  return `## ${tz}\n\n\`\`\`ts\n${sz}\n\`\`\`\n`
                })),
                Oz = zz.markdown.slice(zz.markdown.indexOf("\n", Fz + 1) + 1);
              return [{
                ...zz,
                markdown: `${zz.markdown.slice(0,tz)}${Oz}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${Wz}\n\n${Xz.join("\n")}`
              }]
            }(tz);
            if ("howTo" === zz.id) {
              const {
                parent: zz,
                guides: sz
              } = function(zz) {
                const [tz, ...sz] = zz.markdown.split(/^(?=## )/m), Fz = [tz], Wz = [];
                for (const Oz of sz) {
                  var Xz;
                  const tz = Oz.indexOf("\n"),
                    sz = Oz.slice(3, tz).trim(),
                    oz = Oz.slice(tz + 1);
                  if (!oz.includes("```")) {
                    Fz.push(Oz);
                    continue
                  }
                  const vz = null !== (Xz = Tz[sz]) && void 0 !== Xz ? Xz : {
                    icon: "lightbulb",
                    summary: `How to use ${sz.toLowerCase()} in World Code.`
                  };
                  Wz.push({
                    id: `${zz.id}${sz.split(/[^A-Za-z0-9]+/).map((zz=>zz.charAt(0).toUpperCase()+zz.slice(1))).join("")}`,
                    slug: `${zz.slug}-${cz(sz)}`,
                    title: sz,
                    layout: "article",
                    sourceAnchor: (0, Jz.t)(sz),
                    markdown: `# ${sz}\n\n${jz(oz)}`,
                    ...vz
                  })
                }
                return {
                  parent: {
                    ...zz,
                    markdown: Fz.join(""),
                    childPageIds: Wz.map((zz => zz.id))
                  },
                  guides: Wz
                }
              }(tz);
              return [zz, ...sz]
            }
            return [tz]
          }))],
          dz = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Mz.filter((zz => void 0 !== zz.sourceAnchor)).map((zz => zz.id))]
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

        function hz(zz) {
          return Mz.find((tz => tz.id === zz))
        }
        const Qz = new Map;

        function kz(zz) {
          let tz = Qz.get(zz.id);
          return tz || (tz = (0, Jz.x)(zz.markdown, "changelog" === zz.layout ? 3 : 2), Qz.set(zz.id, tz)), tz
        }

        function iz(zz, tz) {
          return kz(zz).sections.some((zz => zz.heading.anchor === tz || zz.blocks.some((zz => "heading" === zz.kind && zz.anchor === tz))))
        }

        function Lz(zz) {
          const [tz, ...sz] = zz.replace(/^#/, "").split("-"), Fz = Mz.find((zz => zz.id === tz));
          if (!Fz) return null;
          const Wz = sz.length > 0 ? (0, Jz.t)(sz.join("-")) : "";
          for (const Oz of null !== (Xz = Fz.childPageIds) && void 0 !== Xz ? Xz : []) {
            var Xz;
            const zz = hz(Oz);
            if (zz.sourceAnchor === Wz) return {
              page: zz,
              anchor: ""
            };
            if (iz(zz, Wz)) return {
              page: zz,
              anchor: Wz
            }
          }
          return {
            page: Fz,
            anchor: Wz
          }
        }
        const lz = {
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

        function nz(zz, tz) {
          let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Fz = tz.slug ? `${zz}/${tz.slug}` : zz;
          return sz ? `${Fz}#${sz}` : Fz
        }
        var az = sz(4391);
        const qz = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Sz = new Set(["GameApi", "Console", "_TypeOf"]),
          Vz = 4;

        function Rz(zz) {
          let tz = zz.length;
          for (; tz > 0 && "" === zz[tz - 1].trim();) tz--;
          return zz.slice(0, tz)
        }

        function pz(zz) {
          var tz;
          const sz = Rz(zz);
          if (null === (tz = sz.at(-1)) || void 0 === tz || !tz.trimEnd().endsWith("*/")) return {
            lines: sz,
            doc: ""
          };
          const Fz = sz.findLastIndex((zz => zz.startsWith("/**")));
          return -1 === Fz ? {
            lines: sz,
            doc: ""
          } : {
            lines: Rz(sz.slice(0, Fz)),
            doc: sz.slice(Fz).join("\n")
          }
        }

        function fz(zz) {
          var tz;
          const sz = zz.split("\n"),
            Fz = sz.flatMap(((zz, tz) => qz.test(zz) ? [tz] : []));
          let Wz = pz(sz.slice(0, null !== (tz = Fz[0]) && void 0 !== tz ? tz : sz.length)).doc;
          return Fz.map(((zz, tz) => {
            var Xz;
            const Oz = pz(sz.slice(zz, null !== (Xz = Fz[tz + 1]) && void 0 !== Xz ? Xz : sz.length)),
              oz = {
                name: sz[zz].match(qz)[1],
                doc: Wz,
                lines: Oz.lines
              };
            return Wz = Oz.doc, oz
          }))
        }

        function Ez(zz) {
          var tz;
          const sz = zz.match(/^readonly \[([\s\S]*)\]$/);
          return sz ? null !== (tz = sz[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== tz ? tz : [] : null
        }

        function zt(zz) {
          if (!zz.startsWith("{") || !zz.endsWith("}")) return null;
          const tz = {
              keys: [],
              values: []
            },
            sz = zz => {
              const sz = zz.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              sz && (tz.keys.push(sz[1].startsWith('"') ? sz[1] : `"${sz[1]}"`), tz.values.push(sz[2].trim()))
            };
          let Fz = 0,
            Wz = "";
          for (const Xz of zz.slice(1, -1)) "{[(".includes(Xz) ? Fz++ : "}])".includes(Xz) && Fz--, ";" === Xz && 0 === Fz ? (sz(Wz), Wz = "") : Wz += Xz;
          return sz(Wz), tz
        }

        function tt(zz) {
          return zz.length > Vz ? `\n\t| ${zz.join("\n\t| ")}` : zz.join(" | ")
        }

        function st(zz, tz) {
          const sz = function(zz, tz) {
            return zz.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((zz, sz) => {
              var Fz;
              const Wz = null === (Fz = tz.get(sz)) || void 0 === Fz ? void 0 : Fz.object;
              return Wz ? tt(Wz.values) : zz
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((zz, sz) => {
              var Fz, Wz;
              const Xz = null === (Fz = tz.get(sz)) || void 0 === Fz || null === (Wz = Fz.object) || void 0 === Wz ? void 0 : Wz.values.map(Ez);
              return null !== Xz && void 0 !== Xz && Xz.every((zz => null !== zz)) ? tt([...new Set(Xz.flat())]) : zz
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((zz, sz) => {
              var Fz;
              const Wz = null === (Fz = tz.get(sz)) || void 0 === Fz ? void 0 : Fz.members;
              return Wz ? tt(Wz) : zz
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((zz, sz) => {
              var Fz;
              const Wz = null === (Fz = tz.get(sz)) || void 0 === Fz ? void 0 : Fz.object;
              return Wz ? tt(Wz.keys) : zz
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((zz, sz) => {
              var Fz, Wz;
              return null !== (Fz = null === (Wz = tz.get(sz)) || void 0 === Wz ? void 0 : Wz.text) && void 0 !== Fz ? Fz : zz
            }))
          }(zz.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), tz);
          return [zz.doc, sz].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Ft(zz) {
          const tz = fz(zz),
            sz = function(zz) {
              const tz = new Map,
                sz = zz.find((zz => "_TypeOf" === zz.name));
              let Fz = null;
              const Wz = () => {
                if (Fz) {
                  const zz = Fz.lines.join("\n");
                  tz.set(Fz.name, {
                    text: zz,
                    members: Ez(zz),
                    object: zt(zz)
                  })
                }
              };
              for (const Xz of sz.lines.slice(1, -1)) {
                const zz = Xz.match(/^\t([\w$]+): (.+)$/);
                zz ? (Wz(), Fz = {
                  name: zz[1],
                  lines: [zz[2]]
                }) : Fz && Fz.lines.push(Xz.replace(/^\t/, ""))
              }
              return Wz(), tz
            }(tz),
            Fz = new Map;
          for (const Wz of tz) Sz.has(Wz.name) || Fz.has(Wz.name) || Fz.set(Wz.name, st(Wz, sz));
          return Fz
        }
        let Wt, Xt, Ot;

        function ot() {
          return Xt ??= function(zz) {
            const tz = fz(zz).find((zz => "GameApi" === zz.name)),
              sz = new Map,
              Fz = tz.lines;
            for (let Xz = 0; Xz < Fz.length; Xz++) {
              var Wz;
              if (!Fz[Xz].trimStart().startsWith("/**")) continue;
              const zz = Xz;
              for (; Xz < Fz.length && !Fz[Xz].includes("*/");) Xz++;
              const tz = null === (Wz = Fz[Xz + 1]) || void 0 === Wz ? void 0 : Wz.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!tz) continue;
              let Oz = null;
              const oz = [];
              let vz = "description",
                Uz = !1;
              for (const sz of Fz.slice(zz, Xz + 1).join("\n").split("\n").map((zz => zz.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const zz = sz.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                zz ? (Oz = zz[1].trim(), vz = "deprecation") : sz.startsWith("@") ? (vz = "otherTag", Uz = !0) : "" === sz.trim() ? Uz || (vz = "description", oz.push(sz)) : "deprecation" !== vz || /^[A-Z]/.test(sz.trim()) ? "otherTag" !== vz && (vz = "description", oz.push(sz)) : Oz = `${Oz} ${sz.trim()}`.trim()
              }
              sz.set(tz[1], {
                deprecation: Oz,
                description: oz.join("\n").trim()
              })
            }
            return sz
          }(az.default), Xt
        }

        function vt() {
          if (!Ot) {
            Ot = new Map;
            for (const zz of Mz) {
              const tz = (0, Jz.w)(kz(zz)).flatMap((zz => zz.blocks));
              for (const zz of (0, Jz.l)(tz))
                if ("ts" === zz.lang || "typescript" === zz.lang)
                  for (const [tz, sz] of ez(zz.code)) Ot.set(tz, sz)
            }
            for (const [zz, tz] of(Wt ??= Ft(az.default), Wt)) Ot.has(zz) || Ot.set(zz, tz)
          }
          return Ot
        }
        const Ut = {
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
        let Kt;

        function ut() {
          if (!Kt) {
            Kt = new Map;
            for (const zz of Mz)
              if (Zz(zz.layout))
                for (const tz of kz(zz).sections) Kt.has(tz.heading.text) || Kt.set(tz.heading.text, {
                  pageId: zz.id,
                  anchor: tz.heading.anchor
                })
          }
          return Kt
        }

        function Nt(zz) {
          const tz = zz.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return tz ? ut().get(tz[1]) : void 0
        }
        const bt = (0, Fz.createContext)("/docs"),
          wt = (0, Fz.createContext)(null),
          Dt = (0, Fz.createContext)(!1),
          gt = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function Ht(zz) {
          const tz = zz.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return tz ? tz[1] : null
        }

        function Bt(zz) {
          let {
            colour: tz
          } = zz;
          return (0, wz.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: tz
            },
            "aria-hidden": "true"
          })
        }

        function Pt(zz) {
          const tz = [];
          let sz = 0;
          for (const Fz of zz.matchAll(gt)) tz.push(zz.slice(sz, Fz.index), (0, wz.jsx)(Bt, {
            colour: Fz[0]
          }), Fz[0]), sz = Fz.index + Fz[0].length;
          return tz.push(zz.slice(sz)), tz
        }

        function rt(zz) {
          let {
            href: tz,
            children: sz
          } = zz;
          const Wz = (0, Fz.useContext)(bt);
          if (tz.startsWith("#")) {
            const zz = Lz(tz);
            if (zz) return (0, wz.jsx)(Oz.d, {
              to: nz(Wz, zz.page, zz.anchor),
              children: (0, wz.jsx)(Dt.Provider, {
                value: !0,
                children: sz
              })
            })
          }
          return (0, wz.jsx)("a", {
            href: tz,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, wz.jsx)(Dt.Provider, {
              value: !0,
              children: sz
            })
          })
        }

        function Yt(zz) {
          let {
            code: tz
          } = zz;
          const sz = (0, Fz.useContext)(bt);
          if ((0, Fz.useContext)(Dt)) return (0, wz.jsx)("code", {
            className: "DocsInlineCode",
            children: tz
          });
          if (vt().has(tz)) return (0, wz.jsx)(It, {
            type: tz
          });
          const Wz = Nt(tz);
          if (Wz) return (0, wz.jsx)(Oz.d, {
            className: "DocsInlineCode DocsSymbolLink",
            to: nz(sz, hz(Wz.pageId), Wz.anchor),
            children: tz
          });
          const Xz = Ht(tz);
          return (0, wz.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Xz && (0, wz.jsx)(Bt, {
              colour: Xz
            }), tz]
          })
        }

        function xt(zz) {
          let {
            text: tz
          } = zz;
          const sz = [];
          let Wz = 0;
          for (const Fz of tz.matchAll(Jz.e)) {
            Fz.index > Wz && sz.push(...Pt(tz.slice(Wz, Fz.index)));
            const [, zz, Xz, Oz, oz, vz] = Fz;
            zz ? sz.push((0, wz.jsx)(Yt, {
              code: (0, Jz.n)(zz, Xz)
            })) : Oz ? sz.push((0, wz.jsx)("strong", {
              children: (0, wz.jsx)(xt, {
                text: Oz
              })
            })) : sz.push((0, wz.jsx)(rt, {
              href: vz,
              children: (0, wz.jsx)(xt, {
                text: oz
              })
            })), Wz = Fz.index + Fz[0].length
          }
          return Wz < tz.length && sz.push(...Pt(tz.slice(Wz))), (0, wz.jsx)(wz.Fragment, {
            children: sz.map(((zz, tz) => (0, wz.jsx)(Fz.Fragment, {
              children: zz
            }, tz)))
          })
        }
        const mt = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          Jt = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function It(zz) {
          let {
            type: tz
          } = zz;
          const sz = vt(),
            Wz = [];
          for (const Fz of tz.trim().matchAll(mt)) {
            const [zz, tz, Xz, Oz, oz] = Fz;
            tz ? Wz.push((0, wz.jsx)("span", {
              className: "DocsTypeString",
              children: zz
            })) : Xz && sz.has(Xz) ? Wz.push((0, wz.jsx)(Tt, {
              name: Xz,
              definition: sz.get(Xz)
            })) : Xz ? Wz.push((0, wz.jsx)("span", {
              className: Jt.has(Xz) ? "DocsTypeKeyword" : "DocsTypeName",
              children: zz
            })) : Oz ? Wz.push((0, wz.jsx)("span", {
              className: "DocsTypeNumber",
              children: zz
            })) : oz ? Wz.push(" ") : Wz.push((0, wz.jsx)("span", {
              className: "DocsTypePunctuation",
              children: zz
            }))
          }
          return (0, wz.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: Wz.map(((zz, tz) => (0, wz.jsx)(Fz.Fragment, {
              children: zz
            }, tz)))
          })
        }
        const Ct = 480,
          et = 6,
          Zt = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Gt = 0;

        function Tt(zz) {
          let {
            name: tz,
            definition: sz
          } = zz;
          const Wz = (0, Fz.useContext)(bt),
            Xz = Ut[tz],
            oz = (0, Fz.useRef)(null),
            vz = (0, Fz.useRef)(null),
            Kz = (0, Fz.useRef)(null),
            [uz, Nz] = (0, Fz.useState)(!1),
            [bz, Dz] = (0, Fz.useState)(null),
            Hz = (0, Fz.useRef)(),
            Bz = (0, Fz.useContext)(wt),
            [Pz] = (0, Fz.useState)((() => "DocsTypePopover-" + Gt++)),
            rz = () => {
              clearTimeout(Hz.current), Nz(!0)
            },
            Yz = () => {
              clearTimeout(Hz.current), Hz.current = setTimeout((() => {
                Nz(!1)
              }), 120)
            };
          return (0, Fz.useEffect)((() => {
            if (!uz) return;
            const zz = zz => {
              if ("Escape" === zz.key) {
                var tz, sz;
                if (null !== (tz = vz.current) && void 0 !== tz && tz.contains(document.activeElement)) null === (sz = oz.current) || void 0 === sz || sz.focus();
                Nz(!1)
              }
            };
            return document.addEventListener("keydown", zz), () => {
              document.removeEventListener("keydown", zz)
            }
          }), [uz]), (0, Fz.useEffect)((() => () => {
            clearTimeout(Hz.current)
          }), []), (0, Fz.useLayoutEffect)((() => {
            if (!uz || !oz.current || !vz.current) return void Dz(null);
            const zz = oz.current.getBoundingClientRect(),
              tz = vz.current.offsetHeight,
              sz = Math.min(Ct, window.innerWidth - 32),
              Fz = Math.min(Math.max(16, zz.left), window.innerWidth - sz - 16),
              Wz = zz.bottom + et + tz < window.innerHeight;
            Dz({
              left: Fz,
              top: Wz ? zz.bottom + et : Math.max(16, zz.top - et - tz)
            })
          }), [uz]), (0, wz.jsxs)(wz.Fragment, {
            children: [(0, wz.jsx)("button", {
              type: "button",
              ref: oz,
              className: "DocsTypeLink",
              "aria-expanded": uz,
              "aria-describedby": uz ? Pz : void 0,
              onMouseEnter: rz,
              onMouseLeave: Yz,
              onFocus: rz,
              onBlur: Yz,
              onKeyDown: zz => {
                "Tab" === zz.key && !zz.shiftKey && Kz.current && (zz.preventDefault(), Kz.current.focus())
              },
              onClick: rz,
              children: tz
            }), uz && (0, Uz.createPortal)((0, wz.jsxs)("span", {
              ref: vz,
              id: Pz,
              className: "DocsTypePopover",
              role: "tooltip",
              style: bz ? {
                left: bz.left,
                top: bz.top,
                maxWidth: Ct
              } : {
                visibility: "hidden"
              },
              onMouseEnter: rz,
              onMouseLeave: Yz,
              onFocus: rz,
              onBlur: Yz,
              children: [(0, wz.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, wz.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: tz
                }), Xz && (0, wz.jsxs)(Oz.d, {
                  ref: Kz,
                  className: "DocsTypePopoverLink",
                  to: nz(Wz, hz(Xz)),
                  onClick: () => {
                    Nz(!1)
                  },
                  onKeyDown: zz => {
                    if ("Tab" === zz.key) {
                      var tz;
                      if (zz.preventDefault(), zz.shiftKey || !oz.current || ! function(zz, tz) {
                          const sz = [...document.querySelectorAll(Zt)],
                            Fz = sz.slice(sz.indexOf(zz) + 1).find((zz => zz.getClientRects().length > 0 && !(null !== tz && void 0 !== tz && tz.contains(zz))));
                          return null === Fz || void 0 === Fz || Fz.focus(), void 0 !== Fz
                        }(oz.current, vz.current)) null === (tz = oz.current) || void 0 === tz || tz.focus();
                      zz.shiftKey || Nz(!1)
                    }
                  },
                  children: [hz(Xz).title, (0, wz.jsx)(gz, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, wz.jsx)(mz, {
                lang: "ts",
                code: sz,
                compact: !0
              })]
            }), null !== Bz && void 0 !== Bz ? Bz : document.body)]
          })
        }
        var ct = sz(201),
          jt = sz(4395),
          At = sz(4402),
          yt = sz(4411);
        const Mt = {
          progressBar: {
            yz: 30,
            Mz: .075,
            dz: 5,
            hz: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            iz: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            lz: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            nz: !0,
            scale: 3,
            rotation: 15,
            az: !1
          },
          gravityBar: {
            yz: 30,
            Sz: .25,
            Vz: 3,
            Rz: .8,
            gravity: 1,
            pz: 1.5,
            fz: 8,
            Ez: 4,
            hz: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            tt: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Wt: 5,
            Xt: 1200,
            Ot: .15,
            ot: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var dt = sz(308),
          ht = sz(1920);

        function Qt(zz) {
          return zz.startsWith("fa-")
        }
        const kt = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          it = {
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

        function Lt(zz) {
          return "string" === typeof zz ? "text" : "entityName" in zz || "translationKey" in zz ? "other" : (0, dt.yb)(zz) ? "progressBar" : (0, dt.vb)(zz) ? "keyBinding" : "icon" in zz ? "icon" : "str" in zz && "string" === typeof zz.str ? "text" : "other"
        }
        const lt = [{
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
          nt = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...lt],
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
                options: ht.m
              },
              isRequired: !0
            }, ...lt],
            other: []
          };

        function qt(zz) {
          return "string" === typeof zz ? {
            str: zz
          } : zz
        }

        function St(zz, tz) {
          let sz = qt(zz);
          for (const Fz of tz) sz = sz && "object" === typeof sz ? sz[Fz] : void 0;
          return sz
        }

        function Vt(zz, tz, sz) {
          const Fz = (zz, Wz) => {
            var Xz;
            const Oz = tz[Wz],
              oz = {
                ...zz
              };
            if (Wz === tz.length - 1) return void 0 === sz ? delete oz[Oz] : oz[Oz] = sz, oz;
            const vz = Fz(null !== (Xz = zz[Oz]) && void 0 !== Xz ? Xz : {}, Wz + 1);
            return 0 === Object.keys(vz).length ? delete oz[Oz] : oz[Oz] = vz, oz
          };
          return function(zz) {
            const tz = Object.keys(zz);
            return "string" === typeof zz.str && 1 === tz.length ? zz.str : zz
          }(Fz(qt(zz), 0))
        }

        function Rt(zz, tz) {
          const sz = Lt(zz),
            Fz = nt[sz].find((zz => zz.path.join(".") === tz.join("."))),
            Wz = null !== Fz && void 0 !== Fz && Fz.isRequired && "other" !== sz ? St(it[sz], tz) : void 0;
          return Vt(zz, tz, Wz)
        }

        function pt(zz) {
          switch (Lt(zz)) {
            case "text":
              return String(St(zz, ["str"]));
            case "icon":
              return String(St(zz, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(St(zz,["progress"])))}%`;
            case "keyBinding":
              return String(St(zz, ["action"]));
            case "other":
              return JSON.stringify(zz)
          }
        }
        const ft = /^[A-Za-z_$][\w$]*$/;

        function Et(zz) {
          if (Array.isArray(zz)) return `[${zz.map(Et).join(", ")}]`;
          if (zz && "object" === typeof zz) {
            const tz = Object.entries(zz).map((zz => {
              let [tz, sz] = zz;
              return `${ft.test(tz)?tz:JSON.stringify(tz)}: ${Et(sz)}`
            }));
            return 0 === tz.length ? "{}" : `{ ${tz.join(", ")} }`
          }
          return JSON.stringify(zz)
        }

        function zs(zz) {
          const tz = zz.map(Et),
            sz = `[${tz.join(", ")}]`;
          return sz.length <= 60 ? sz : `[\n${tz.map((zz=>`    ${zz},`)).join("\n")}\n]`
        }
        const ts = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function ss(zz) {
          let tz = "";
          for (let Wz = 0; Wz < zz.length; Wz++) {
            const Xz = zz[Wz];
            if ("\\" === Xz) {
              var sz;
              const Fz = null !== (sz = zz[Wz + 1]) && void 0 !== sz ? sz : "";
              tz += "'" === Fz ? "'" : Xz + Fz, Wz++
            } else if ('"' === Xz) tz += '\\"';
            else {
              var Fz;
              tz += null !== (Fz = ts[Xz]) && void 0 !== Fz ? Fz : Xz
            }
          }
          return `"${tz}"`
        }

        function Fs(zz) {
          if ("string" === typeof zz) return !0;
          if (!zz || "object" !== typeof zz || Array.isArray(zz)) return !1;
          const tz = zz;
          return "ProgressBar" === tz.type ? "number" === typeof tz.progress : "StyledKeyBinding" === tz.type ? ht.m.includes(tz.action) : "string" === typeof tz.icon || "string" === typeof tz.str || "string" === typeof tz.entityName || "string" === typeof tz.translationKey
        }

        function Ws(zz) {
          let tz;
          try {
            tz = function(zz) {
              let tz = "",
                sz = "",
                Fz = 0;
              const Wz = () => {
                tz += sz.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), sz = ""
              };
              for (; Fz < zz.length;) {
                const Xz = zz.slice(Fz).search(/["'`]|\/\//);
                if (-1 === Xz) {
                  sz += zz.slice(Fz);
                  break
                }
                sz += zz.slice(Fz, Fz + Xz);
                const Oz = Fz + Xz,
                  oz = zz[Oz];
                if ("/" === oz) {
                  const tz = zz.indexOf("\n", Oz);
                  Fz = -1 === tz ? zz.length : tz;
                  continue
                }
                if (Wz(), "`" === oz) throw new Error("Use quotes rather than template strings.");
                let vz = Oz + 1;
                for (; vz < zz.length && zz[vz] !== oz;) vz += "\\" === zz[vz] ? 2 : 1;
                if (vz >= zz.length) throw new Error("A string is missing its closing quote.");
                const Uz = zz.slice(Oz + 1, vz);
                tz += ss(Uz), Fz = vz + 1
              }
              return Wz(), JSON.parse(tz)
            }(zz.trim())
          } catch (Fz) {
            return {
              parts: null,
              error: Fz instanceof SyntaxError ? "This isn't a valid array yet." : Fz.message
            }
          }
          if (!Array.isArray(tz)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const sz = tz.findIndex((zz => !Fs(zz)));
          return -1 !== sz ? {
            parts: null,
            error: `Part ${sz+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: tz,
            error: null
          }
        }
        const Xs = 1 / ct.d.clientTicksPerSecond,
          Os = 700,
          os = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          vs = {
            progressBar: Mt.progressBar.iz,
            timedClick: Mt.timedClick.icon,
            gravityBar: Mt.gravityBar.icon,
            precisionBar: Mt.precisionBar.icon,
            rhythmClick: Mt.rhythmClick.icon
          };

        function Us(zz) {
          let {
            type: tz
          } = zz;
          const [sz, Wz] = (0, Fz.useState)("ready"), [Oz, oz] = (0, Fz.useState)(1), [vz, Uz] = (0, Fz.useState)(!0), Kz = (0, Fz.useRef)(null), uz = (0, Fz.useRef)(null), Nz = (0, Fz.useRef)(null), bz = (0, Fz.useRef)(new Set), Dz = (0, Fz.useRef)(!1), Hz = vs[tz], Bz = (0, Fz.useMemo)((() => ({
            getState: () => {
              var zz, tz;
              return null !== (zz = null === (tz = Nz.current) || void 0 === tz ? void 0 : tz.getState()) && void 0 !== zz ? zz : os
            },
            onFrame: zz => (bz.current.add(zz), () => {
              bz.current.delete(zz)
            })
          })), []);
          (0, Fz.useEffect)((() => {
            const zz = Kz.current,
              tz = uz.current;
            if (!zz || !tz) return;
            const sz = new ResizeObserver((() => {
              oz(zz.clientWidth / Math.max(1, tz.offsetWidth))
            }));
            return sz.observe(zz), () => {
              sz.disconnect()
            }
          }), []), (0, Fz.useEffect)((() => {
            var zz;
            if ("playing" !== sz) return;
            let Fz = !1;
            const Xz = new yt.g[tz](Mt[tz], (zz => {
              Fz = !0, Uz(!1), Wz(zz ? "succeeded" : "failed")
            }), (() => {}));
            Nz.current = Xz;
            let Oz = 0,
              oz = performance.now(),
              vz = requestAnimationFrame((function zz(tz) {
                for (Oz += Math.min(.25, (tz - oz) / 1e3), oz = tz; Oz >= Xs && !Fz;) Oz -= Xs, Xz.handleTick(Xs);
                for (const sz of bz.current) sz();
                Fz || (vz = requestAnimationFrame(zz))
              }));
            return null === (zz = Kz.current) || void 0 === zz || zz.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(vz), Xz.tearDown(), Nz.current = null, Dz.current = !1
            }
          }), [sz, tz]), (0, Fz.useEffect)((() => {
            if (vz) return;
            const zz = setTimeout((() => {
              Uz(!0)
            }), Os);
            return () => {
              clearTimeout(zz)
            }
          }), [vz]);
          const Pz = zz => {
            var tz;
            "playing" === sz && Dz.current !== zz && (Dz.current = zz, null === (tz = Nz.current) || void 0 === tz || tz.handleMouseInput(zz))
          };
          return (0, wz.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, wz.jsxs)("div", {
              ref: Kz,
              className: Xz()("DocsQteStage", {
                Playing: "playing" === sz
              }),
              tabIndex: "playing" === sz ? 0 : -1,
              role: "playing" === sz ? "button" : void 0,
              "aria-label": "playing" === sz ? `${tz} quick time event: click or press Space` : void 0,
              onPointerDown: zz => {
                0 === zz.button && Pz(!0)
              },
              onPointerUp: () => {
                Pz(!1)
              },
              onPointerLeave: () => {
                Pz(!1)
              },
              onPointerCancel: () => {
                Pz(!1)
              },
              onKeyDown: zz => {
                "playing" !== sz || " " !== zz.key && "Enter" !== zz.key || (zz.preventDefault(), Pz(!0))
              },
              onKeyUp: zz => {
                "playing" !== sz || " " !== zz.key && "Enter" !== zz.key || Pz(!1)
              },
              children: [(0, wz.jsx)("div", {
                ref: uz,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Oz})`
                },
                children: "playing" === sz && (0, wz.jsx)(At.b.Provider, {
                  value: Bz,
                  children: (0, wz.jsx)(jt.d, {
                    qte: {
                      type: tz,
                      parameters: Mt[tz]
                    }
                  })
                })
              }), "playing" !== sz && (0, wz.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== sz && (0, wz.jsxs)("div", {
                  className: Xz()("DocsQteResult", "succeeded" === sz ? "Succeeded" : "Failed"),
                  children: [(0, wz.jsx)(gz, {
                    name: "succeeded" === sz ? "check" : "cross",
                    isTinted: !0
                  }), (0, wz.jsx)("span", {
                    children: "succeeded" === sz ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, wz.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !vz,
                  onClick: () => {
                    Wz("playing")
                  },
                  children: [(0, wz.jsx)(gz, {
                    name: "ready" === sz ? "play" : "replay"
                  }), (0, wz.jsx)("span", {
                    children: "ready" === sz ? `Try ${tz}` : "Play again"
                  })]
                })]
              })]
            }), Hz && !Qt(Hz) && (0, wz.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, wz.jsx)("code", {
                children: Hz
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Ks(zz) {
          let {
            level: tz,
            text: sz,
            anchor: Fz,
            className: Wz
          } = zz;
          const Oz = `h${Math.min(tz,6)}`;
          return (0, wz.jsxs)(Oz, {
                id: Fz,
                className: Xz()("DocsHeading", Wz),
                children: [(0, wz.jsx)(xt, {
                      text: sz
                    }), (0, wz.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Fz}`,
                        "aria-label": `Link to ${sz.replace(/`/g,"")}`,children:"#"})]})}function us(zz){let{items:tz,ordered:sz}=zz;const Fz=sz?"ol":"ul";return(0,wz.jsx)(Fz,{className:"DocsList",children:tz.map(((zz,tz)=>(0,wz.jsxs)("li",{children:[(0,wz.jsx)(xt,{text:zz.text}),zz.children.length>0&&(0,wz.jsx)(us,{items:zz.children,ordered:sz})]},tz)))})}function Ns(zz){const tz=zz[0],sz="paragraph"===(null===tz||void 0===tz?void 0:tz.kind)?tz.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(sz)?"warning":/^\*\*(tip|prefer)/.test(sz)?"tip":"note"}function bs(zz){let{block:tz}=zz;switch(tz.kind){case"heading":return(0,wz.jsx)(Ks,{level:tz.level,text:tz.text,anchor:tz.anchor});case"paragraph":return(0,wz.jsx)("p",{children:(0,wz.jsx)(xt,{text:tz.text})});case"code":{const zz="ts"===tz.lang?function(zz){const tz=zz.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return tz&&Object.hasOwn(Mt,tz[1])?tz[1]:null}(tz.code):null;return(0,wz.jsxs)(wz.Fragment,{children:[(0,wz.jsx)(mz,{code:tz.code,lang:tz.lang}),zz&&(0,wz.jsx)(Us,{type:zz})]})}case"table":return(0,wz.jsx)("div",{className:"DocsTableScroll",children:(0,wz.jsxs)("table",{className:"DocsTable",children:[(0,wz.jsx)("thead",{children:(0,wz.jsx)("tr",{children:tz.header.map(((zz,tz)=>(0,wz.jsx)("th",{children:(0,wz.jsx)(xt,{text:zz})},tz)))})}),(0,wz.jsx)("tbody",{children:tz.rows.map(((zz,tz)=>(0,wz.jsx)("tr",{children:zz.map(((zz,tz)=>(0,wz.jsx)("td",{children:(0,wz.jsx)(xt,{text:zz})},tz)))},tz)))})]})});case"list":return(0,wz.jsx)(us,{items:tz.items,ordered:tz.ordered});case"quote":return(0,wz.jsx)("aside",{className:Xz()("DocsCallout",Ns(tz.blocks)),children:(0,wz.jsx)(ws,{blocks:tz.blocks})});case"rule":return(0,wz.jsx)("hr",{className:"DocsRule"})}}function ws(zz){let{blocks:tz}=zz;return(0,wz.jsx)(wz.Fragment,{children:tz.map(((zz,tz)=>(0,wz.jsx)(bs,{block:zz},tz)))})}var Ds=sz(4387),gs=sz(4389);function Hs(zz){return"blocks"===zz||"items"===zz}const Bs=new Map;function Ps(zz){let tz=Bs.get(zz);return tz||(tz=function(zz){const tz={entries:[],legend:[],notes:[],examples:[]};let sz=!1;for(const Xz of zz.split(/\r?\n/).slice(1)){if(Xz.startsWith("#")){const zz=Xz.replace(/^# ?/,""),Fz=zz.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Fz?tz.legend.push({code:Fz[1],meaning:Fz[2],usage:Fz[3].trim()}):/^Examples:/.test(zz.trim())?sz=!0:sz&&zz.trim()?tz.examples.push(zz.trim()):zz.trim()&&!/^\s/.test(zz)&&tz.notes.push(zz.trim());continue}const zz=Xz.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Fz,Wz;zz&&tz.entries.push({name:zz[1],variants:null!==(Fz=null===(Wz=zz[2])||void 0===Wz?void 0:Wz.split(","))&&void 0!==Fz?Fz:[]})}return tz}("blocks"===zz?Ds:gs),Bs.set(zz,tz)),tz}function rs(zz){let{className:tz,value:sz,placeholder:Fz,label:Wz,onChange:Xz,count:Oz,children:oz}=zz;return(0,wz.jsxs)("div",{className:tz,children:[(0,wz.jsx)(gz,{name:"magnifying-glass"}),(0,wz.jsx)("input",{type:"search",value:sz,placeholder:Fz,"aria-label":Wz,onChange:zz=>{Xz(zz.target.value)}}),oz,Oz&&(0,wz.jsxs)("span",{className:"DocsFilterCount",children:[Oz.visible," of ",Oz.total]})]})}var Ys=sz(1036);function xs(zz){const tz=zz.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return tz?tz[2]:null}function ms(zz){return"paragraph"===zz.kind&&""===zz.text.trim()}function Is(zz){const tz={name:zz.heading.text,description:[],params:[],returns:null};let sz="description";for(const Wz of zz.blocks)if(!ms(Wz))if("heading"===Wz.kind&&/^Parameters:?$/.test(Wz.text))sz="params";else if("heading"===Wz.kind&&/^Returns:?$/.test(Wz.text))sz="returns",tz.returns={type:"",description:[]};else if("params"!==sz||"table"!==Wz.kind){if("returns"===sz&&"paragraph"===Wz.kind&&""===tz.returns.type){const zz=xs(Wz.text);if(null!==zz){tz.returns.type=zz.replaceAll("\\|","|");continue}}"returns"===sz?tz.returns.description.push(Wz):tz.description.push(Wz)}else for(const[zz,sz,Xz]of Wz.rows){var Fz;tz.params.push({name:zz,type:null!==(Fz=xs(sz))&&void 0!==Fz?Fz:sz,description:null!==Xz&&void 0!==Xz?Xz:""})}return tz}const Cs=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function es(zz){return zz.filter((zz=>!ms(zz)))}const Zs=/^[\w][\w .'&!:()-]*$/,Gs=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Ts(zz){var tz;if("code"===zz.kind&&"text"===zz.lang){const tz=zz.code.split("\n").map((zz=>zz.trim())).filter(Boolean);return tz.length>0&&tz.every((zz=>Zs.test(zz)))?tz.map((zz=>({name:zz}))):null}return"paragraph"===zz.kind&&Gs.test(zz.text.trim())?[...zz.text.matchAll(/`([ ^ `]+)` / g)].flatMap((zz => zz[1].split(/,\s*/).map((zz => ({
                              name: zz.trim()
                            }))))): "table" === zz.kind && null !== (tz = zz.header[0]) && void 0 !== tz && tz.startsWith("Song") ? zz.rows.map((zz => {
                              let [tz, sz] = zz;
                              return {
                                name: tz.replace(/`/g, ""),
                                caption: sz
                              }
                            })) : null
                          }

                          function cs(zz) {
                            const tz = [];
                            for (const sz of zz) {
                              const zz = Ts(sz),
                                Fz = tz.at(-1),
                                Wz = "table" === sz.kind;
                              zz ? "names" === (null === Fz || void 0 === Fz ? void 0 : Fz.kind) && Fz.isSongs === Wz ? Fz.names.push(...zz) : tz.push({
                                kind: "names",
                                names: zz,
                                isSongs: Wz
                              }) : tz.push({
                                kind: "block",
                                block: sz
                              })
                            }
                            return tz
                          }
                          const As = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function ys(zz, tz) {
                            return `${As[zz]}-${(0,Jz.t)(tz)}`
                          }
                          const Ms = new WeakMap;

                          function ds(zz, tz, sz) {
                            let Fz = Ms.get(tz);
                            if (!Fz) {
                              Fz = new Map;
                              const sz = new Set;
                              for (const Wz of (0, Jz.w)(tz)) {
                                const tz = cs(es(Wz.blocks)).map((tz => {
                                  if ("block" === tz.kind) return tz;
                                  return {
                                    kind: "names",
                                    names: tz.names.map((tz => {
                                      var Fz, Xz;
                                      const Oz = ys(zz, tz.name);
                                      let oz = Oz;
                                      for (let zz = 2; sz.has(oz); zz++) oz = `${Oz}-${zz}`;
                                      return sz.add(oz), {
                                        ...tz,
                                        anchor: oz,
                                        heading: null !== (Fz = null === (Xz = Wz.heading) || void 0 === Xz ? void 0 : Xz.text) && void 0 !== Fz ? Fz : ""
                                      }
                                    })),
                                    isSongs: tz.isSongs
                                  }
                                }));
                                Fz.set(Wz.blocks, tz)
                              }
                              Ms.set(tz, Fz)
                            }
                            const Wz = Fz.get(sz);
                            if (!Wz) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return Wz
                          }
                          const hs = "/textures/docs/skinPreviews",
                            Qs = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var ks = sz(3913),
                            is = sz(3926);

                          function Ls(zz) {
                            return Object.hasOwn(ks.e, zz) ? ks.e[zz] : null
                          }
                          const ls = {
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
                            blendMode: is.f.Standard
                          };

                          function ns(zz, tz, sz) {
                            return tz + (sz - tz) * zz()
                          }

                          function as(zz, tz, sz) {
                            return zz + (tz - zz) * sz
                          }

                          function qs(zz) {
                            return zz.length > 0 && "timeFraction" in zz[0]
                          }

                          function Ss(zz, tz) {
                            if (0 === zz.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!qs(zz.colorGradients)) {
                              const sz = zz.colorGradients,
                                {
                                  color: Fz
                                } = sz[Math.floor(tz() * sz.length) % sz.length];
                              return [{
                                at: 0,
                                colour: [Fz[0] / 255, Fz[1] / 255, Fz[2] / 255, 1]
                              }]
                            }
                            return [...zz.colorGradients].sort(((zz, tz) => zz.timeFraction - tz.timeFraction)).map((zz => {
                              var sz, Fz, Wz;
                              const Xz = zz.minColor,
                                Oz = null !== (sz = zz.maxColor) && void 0 !== sz ? sz : Xz,
                                oz = tz(),
                                vz = [as(Xz[0], Oz[0], oz) / 255, as(Xz[1], Oz[1], oz) / 255, as(Xz[2], Oz[2], oz) / 255, as(null !== (Fz = Xz[3]) && void 0 !== Fz ? Fz : 1, null !== (Wz = Oz[3]) && void 0 !== Wz ? Wz : 1, oz)];
                              return {
                                at: zz.timeFraction,
                                colour: vz
                              }
                            }))
                          }

                          function Vs(zz, tz, sz, Fz) {
                            const Wz = ns(Fz, zz.minEmitPower, zz.maxEmitPower),
                              Xz = tz => ns(Fz, Math.min(zz.dir1[tz], zz.dir2[tz]), Math.max(zz.dir1[tz], zz.dir2[tz])) * Wz,
                              Oz = [...zz.velocityGradients].sort(((zz, tz) => zz.timeFraction - tz.timeFraction)).map((zz => ({
                                at: zz.timeFraction,
                                factor: ns(Fz, zz.factor, zz.factor2)
                              })));
                            return {
                              pos: [ns(Fz, tz[0], sz[0]), ns(Fz, tz[1], sz[1]), ns(Fz, tz[2], sz[2])],
                              dir: [Xz(0), Xz(1), Xz(2)],
                              age: 0,
                              life: ns(Fz, zz.minLifeTime, zz.maxLifeTime),
                              size: ns(Fz, zz.minSize, zz.maxSize),
                              colours: Ss(zz, Fz),
                              velocityFactors: Oz
                            }
                          }

                          function Rs(zz, tz, sz, Fz) {
                            if (tz < zz[0].at) return sz(Math.min(1, zz.length - 1));
                            for (let Wz = 0; Wz < zz.length - 1; Wz++)
                              if (tz <= zz[Wz + 1].at) {
                                const Xz = zz[Wz + 1].at - zz[Wz].at;
                                return Fz(sz(Wz), sz(Wz + 1), Xz > 0 ? (tz - zz[Wz].at) / Xz : 1)
                              } return sz(zz.length - 1)
                          }

                          function ps(zz) {
                            return Rs(zz.colours, zz.age / zz.life, (tz => zz.colours[tz].colour), ((zz, tz, sz) => [as(zz[0], tz[0], sz), as(zz[1], tz[1], sz), as(zz[2], tz[2], sz), as(zz[3], tz[3], sz)]))
                          }

                          function fs(zz, tz, sz) {
                            if (zz.age += sz, zz.age >= zz.life) return !1;
                            const Fz = function(zz) {
                              return 0 === zz.velocityFactors.length ? 1 : Rs(zz.velocityFactors, zz.age / zz.life, (tz => zz.velocityFactors[tz].factor), as)
                            }(zz) * sz;
                            for (let Xz = 0; Xz < 3; Xz++) {
                              var Wz;
                              zz.pos[Xz] += zz.dir[Xz] * Fz, zz.dir[Xz] += (null !== (Wz = tz[Xz]) && void 0 !== Wz ? Wz : 0) * sz
                            }
                            return !0
                          }

                          function Es(zz) {
                            return String(Math.round(1e6 * zz) / 1e6)
                          }

                          function zF(zz) {
                            return `[${zz.map(Es).join(", ")}]`
                          }

                          function tF(zz, tz) {
                            const sz = `${tz}    `;
                            return `[\n${(qs(zz)?zz.map((zz=>{const tz=[`${sz}    timeFraction: ${Es(zz.timeFraction)},`,`${sz}    minColor: ${zF(zz.minColor)},`];return zz.maxColor&&tz.push(`${sz}    maxColor: ${zF(zz.maxColor)},`),`${sz}{\n${tz.join("\n")}\n${sz}},`})):zz.map((zz=>`
                            $ {
                              sz
                            } {
                              color: $ {
                                zF(zz.color)
                              }
                            }, `))).join("\n")}\n${tz}]`
                          }
                          const sF = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            FF = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const WF = .6;

                          function XF(zz, tz) {
                            return `${tz?"song":"sound"}:${zz}`
                          }
                          let OF = {
                              track: null,
                              volume: WF
                            },
                            oF = null,
                            vF = 0,
                            UF = 0;
                          const KF = new Set;

                          function uF(zz) {
                            OF = {
                              ...OF,
                              ...zz
                            }, KF.forEach((zz => {
                              zz()
                            }))
                          }

                          function NF(zz) {
                            OF.track && uF({
                              track: {
                                ...OF.track,
                                ...zz
                              }
                            })
                          }

                          function bF(zz) {
                            const [tz, sz] = (0, Fz.useState)((() => zz(OF))), Wz = (0, Fz.useRef)(zz);
                            return Wz.current = zz, (0, Fz.useEffect)((() => {
                              const zz = () => {
                                sz((() => Wz.current(OF)))
                              };
                              return KF.add(zz), zz(), () => {
                                KF.delete(zz)
                              }
                            }), []), tz
                          }

                          function wF() {
                            vF++;
                            const zz = oF;
                            oF = null, null === zz || void 0 === zz || zz.stop()
                          }

                          function DF(zz, tz) {
                            let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            wF();
                            const Wz = vF,
                              {
                                track: Xz
                              } = OF,
                              Oz = Xz && Xz.name === zz && Xz.isSong === tz ? Xz.duration : 0;
                            UF = Fz, uF({
                              track: {
                                name: zz,
                                isSong: tz,
                                status: "loading",
                                duration: Oz
                              }
                            }), Promise.all([sz.e(215), sz.e(239)]).then((() => sz(38990))).then((sz => {
                              let {
                                playDocsSound: Xz
                              } = sz;
                              Wz === vF && (oF = Xz(zz, tz, OF.volume, Fz, {
                                onPlay: zz => {
                                  Wz === vF && NF({
                                    status: "playing",
                                    duration: zz
                                  })
                                },
                                onEnd: zz => {
                                  var tz, sz;
                                  Wz === vF && (oF = null, zz ? uF({
                                    track: null
                                  }) : (UF = null !== (tz = null === (sz = OF.track) || void 0 === sz ? void 0 : sz.duration) && void 0 !== tz ? tz : 0, NF({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((tz => {
                              console.error(`Could not play docs sound ${zz}`, tz), Wz === vF && uF({
                                track: null
                              })
                            }))
                          }

                          function gF() {
                            const {
                              track: zz
                            } = OF;
                            if (!zz) return;
                            if ("playing" === zz.status && oF) return UF = oF.yB(), oF.pause(), void NF({
                              status: "paused"
                            });
                            if ("loading" === zz.status) return wF(), void NF({
                              status: "paused"
                            });
                            if (oF) return void oF.resume();
                            const tz = zz.duration > 0 && UF >= zz.duration - .05;
                            DF(zz.name, zz.isSong, tz ? 0 : UF)
                          }

                          function HF() {
                            var zz;
                            return oF && "playing" === (null === (zz = OF.track) || void 0 === zz ? void 0 : zz.status) ? oF.yB() : UF
                          }

                          function BF(zz) {
                            var tz;
                            null === (tz = oF) || void 0 === tz || tz.setVolume(zz), uF({
                              volume: zz
                            })
                          }

                          function PF() {
                            wF(), UF = 0, uF({
                              track: null
                            })
                          }
                          const rF = (0, Fz.createContext)(null);
                          let YF = null;

                          function xF() {
                            const [zz, tz] = (0, Fz.useState)(null);
                            return (0, Fz.useEffect)((() => {
                              let zz = !1;
                              return YF ??= Promise.all([sz.e(69), sz.e(72), sz.e(71), sz.e(70), sz.e(196), sz.e(96), sz.e(220)]).then((() => sz(38981))), YF.then((sz => {
                                zz || tz(sz)
                              }), (zz => {
                                console.error("Could not load the docs gallery's textures", zz), YF = null
                              })), () => {
                                zz = !0
                              }
                            }), []), zz
                          }
                          const mF = 24,
                            JF = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function IF(zz, tz) {
                            const sz = "skins" === zz ? function(zz, tz) {
                              const sz = Qs.find((tz => zz.startsWith(tz.heading)));
                              return sz ? function(zz, tz) {
                                return `${zz}-${tz}`
                              }(sz.prefix, tz) : null
                            }(tz.heading, tz.name) : null;
                            return null === sz ? null : `${hs}/${sz}.webp`
                          }

                          function CF(zz) {
                            let {
                              kind: tz,
                              entry: sz,
                              assets: Wz,
                              renderedUrl: Oz
                            } = zz;
                            const {
                              name: oz
                            } = sz, [vz, Uz] = (0, Fz.useState)(!1);
                            if ("icons" === tz && Qt(oz)) return (0, wz.jsx)(Ys.c, {
                              className: "DocsTileIcon",
                              name: oz
                            });
                            let Kz = null;
                            var uz;
                            if ("icons" === tz) Kz = null !== (uz = null === Wz || void 0 === Wz ? void 0 : Wz.getIngameIconUrl(oz)) && void 0 !== uz ? uz : null;
                            else if ("particles" === tz) {
                              var Nz, bz, Dz;
                              Kz = null !== (Nz = null === Wz || void 0 === Wz ? void 0 : Wz.getParticleTextureUrl(null !== (bz = null === (Dz = Ls(oz)) || void 0 === Dz ? void 0 : Dz.texture) && void 0 !== bz ? bz : oz)) && void 0 !== Nz ? Nz : null
                            } else "skins" === tz && (Kz = null !== Oz && void 0 !== Oz ? Oz : JF.test(oz) ? `/textures/charSkins/previews/${oz}_preview.png` : null);
                            return !Kz || vz ? (0, wz.jsx)(gz, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === tz ? "person" : "image"
                            }) : (0, wz.jsx)("img", {
                              className: Xz()("DocsTileImage", {
                                Pixelated: "skins" !== tz
                              }),
                              src: Kz,
                              srcSet: Kz === Oz ? `${Kz} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Kz}`), Uz(!0)
                              }
                            })
                          }

                          function eF(zz) {
                            let {
                              entry: tz,
                              isSong: sz
                            } = zz;
                            const Fz = bF((zz => {
                                let {
                                  track: Fz
                                } = zz;
                                return (null === Fz || void 0 === Fz ? void 0 : Fz.name) === tz.name && Fz.isSong === sz ? Fz.status : null
                              })),
                              Wz = null !== Fz && "paused" !== Fz;
                            return (0, wz.jsxs)("button", {
                              type: "button",
                              id: tz.anchor,
                              className: Xz()("DocsSoundTile", {
                                Playing: Wz
                              }),
                              "data-docs-track": XF(tz.name, sz),
                              "aria-label": Wz ? `Pause ${tz.name}` : `Play ${tz.name}`,
                              onClick: () => {
                                null !== Fz ? gF() : DF(tz.name, sz)
                              },
                              children: [(0, wz.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, wz.jsx)(gz, {
                                  name: Wz ? "pause" : "play"
                                })
                              }), (0, wz.jsx)("code", {
                                className: "DocsSoundName",
                                children: tz.name
                              }), tz.caption && (0, wz.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: tz.caption
                              })]
                            })
                          }

                          function ZF(zz) {
                            let {
                              kind: tz,
                              names: sz,
                              isSongs: Wz
                            } = zz;
                            const Oz = xF(),
                              [oz, vz] = Bz(),
                              Uz = !1 === (null === oz || void 0 === oz ? void 0 : oz.failed) ? oz.text : null,
                              Kz = (0, Fz.useContext)(rF),
                              [uz, Nz] = (0, Fz.useState)(""),
                              bz = uz.trim().toLowerCase(),
                              Dz = bz ? sz.filter((zz => zz.name.toLowerCase().includes(bz))) : sz;
                            return (0, wz.jsxs)("div", {
                              className: "DocsGallery",
                              children: [sz.length > mF && (0, wz.jsx)(rs, {
                                className: "DocsGalleryFilter",
                                value: uz,
                                placeholder: `Filter ${sz.length} names\u2026`,
                                label: "Filter names",
                                onChange: Nz,
                                count: bz ? {
                                  visible: Dz.length,
                                  total: sz.length
                                } : null
                              }), (0, wz.jsx)("div", {
                                className: Xz()("DocsGalleryGrid", `Kind-${tz}`, {
                                  Songs: Wz
                                }),
                                children: Dz.map((zz => {
                                  if ("sounds" === tz) return (0, wz.jsx)(eF, {
                                    entry: zz,
                                    isSong: Wz
                                  }, zz.anchor);
                                  if (Kz && "particles" === tz && Ls(zz.name)) return (0, wz.jsxs)("button", {
                                    type: "button",
                                    id: zz.anchor,
                                    className: Xz()("DocsTile Previewable", {
                                      Copied: Uz === zz.name
                                    }),
                                    title: `Play "${zz.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Kz(zz.name), vz(zz.name)
                                    },
                                    children: [(0, wz.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, wz.jsx)(CF, {
                                        kind: tz,
                                        entry: zz,
                                        assets: Oz,
                                        renderedUrl: null
                                      }), (0, wz.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, wz.jsx)(gz, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, wz.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Uz === zz.name ? "Copied!" : zz.name
                                    })]
                                  }, zz.anchor);
                                  const sz = IF(tz, zz);
                                  return (0, wz.jsxs)("button", {
                                    type: "button",
                                    id: zz.anchor,
                                    className: Xz()("DocsTile", {
                                      Copied: Uz === zz.name
                                    }),
                                    title: `Copy "${zz.name}"`,
                                    onClick: () => {
                                      vz(zz.name)
                                    },
                                    children: [(0, wz.jsx)("span", {
                                      className: Xz()("DocsTilePreview", {
                                        Rendered: null !== sz
                                      }),
                                      children: (0, wz.jsx)(CF, {
                                        kind: tz,
                                        entry: zz,
                                        assets: Oz,
                                        renderedUrl: sz
                                      })
                                    }), (0, wz.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Uz === zz.name ? "Copied!" : zz.name
                                    })]
                                  }, zz.anchor)
                                }))
                              })]
                            })
                          }

                          function GF(zz) {
                            let {
                              kind: tz,
                              content: sz,
                              blocks: Fz
                            } = zz;
                            return (0, wz.jsx)(wz.Fragment, {
                              children: ds(tz, sz, Fz).map(((zz, sz) => "block" === zz.kind ? (0, wz.jsx)(bs, {
                                block: zz.block
                              }, sz) : (0, wz.jsx)(ZF, {
                                kind: tz,
                                names: zz.names,
                                isSongs: zz.isSongs
                              }, sz)))
                            })
                          }
                          const TF = [{
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

                          function cF(zz) {
                            let {
                              cards: tz = TF,
                              label: sz = "Start here"
                            } = zz;
                            const Wz = (0, Fz.useContext)(bt);
                            return (0, wz.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": sz,
                              children: tz.map((zz => {
                                let {
                                  pageId: tz,
                                  countNoun: sz
                                } = zz;
                                const Fz = hz(tz);
                                return (0, wz.jsxs)(Oz.d, {
                                  to: nz(Wz, Fz),
                                  className: "DocsLandingCard",
                                  children: [(0, wz.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, wz.jsx)(gz, {
                                      name: Fz.icon
                                    })
                                  }), (0, wz.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Fz.title
                                  }), (0, wz.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Fz.summary
                                  }), sz && (0, wz.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [kz(Fz).sections.length, " ", sz]
                                  })]
                                }, tz)
                              }))
                            })
                          }
                          const jF = 240;

                          function AF(zz) {
                            let {
                              faces: tz
                            } = zz;
                            return (0, wz.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, wz.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${tz.top}")`
                                }
                              }), (0, wz.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${tz.left}")`
                                }
                              }), (0, wz.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${tz.right}")`
                                }
                              })]
                            })
                          }

                          function yF(zz) {
                            let {
                              src: tz
                            } = zz;
                            const [sz, Wz] = (0, Fz.useState)(!1);
                            return sz ? null : (0, wz.jsx)("img", {
                              src: tz,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${tz}`), Wz(!0)
                              }
                            })
                          }

                          function MF(zz) {
                            let {
                              kind: tz
                            } = zz;
                            const sz = Ps(tz),
                              Wz = xF(),
                              Oz = (0, oz.s)(),
                              [vz, Uz] = (0, Fz.useState)(""),
                              [Kz, uz] = (0, Fz.useState)(null),
                              [Nz, bz] = (0, Fz.useState)(jF),
                              [Dz, Hz] = (0, Fz.useState)(null),
                              Bz = (0, Fz.useRef)(null),
                              rz = vz.trim().toLowerCase();
                            (0, Fz.useEffect)((() => {
                              const zz = (0, Jz.q)(Oz.hash),
                                Fz = sz.entries.find((sz => ys(tz, sz.name) === zz));
                              if (Fz) Bz.current = Fz.name, Uz(Fz.name), uz(null), Hz(Fz.name);
                              else if (null !== Bz.current) {
                                const zz = Bz.current;
                                Bz.current = null, Uz((tz => tz === zz ? "" : tz)), Hz(null)
                              }
                            }), [sz, tz, Oz.hash, Oz.key]), (0, Fz.useEffect)((() => {
                              var zz;
                              null !== Dz && (null === (zz = document.getElementById(ys(tz, Dz))) || void 0 === zz || zz.scrollIntoView({
                                block: "center"
                              }))
                            }), [tz, Dz]);
                            const Yz = sz.entries.filter((zz => (!rz || zz.name.toLowerCase().includes(rz)) && (!Kz || zz.variants.includes(Kz))));
                            return (0, wz.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [sz.notes.length > 0 && (0, wz.jsx)("div", {
                                className: "DocsProse",
                                children: sz.notes.map((zz => (0, wz.jsx)("p", {
                                  children: zz
                                }, zz)))
                              }), sz.legend.length > 0 && (0, wz.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, wz.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, wz.jsx)("thead", {
                                    children: (0, wz.jsxs)("tr", {
                                      children: [(0, wz.jsx)("th", {
                                        children: "Code"
                                      }), (0, wz.jsx)("th", {
                                        children: "Variant"
                                      }), (0, wz.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, wz.jsx)("tbody", {
                                    children: sz.legend.map((zz => (0, wz.jsxs)("tr", {
                                      children: [(0, wz.jsx)("td", {
                                        children: (0, wz.jsx)("button", {
                                          type: "button",
                                          className: Xz()("DocsVariantChip", {
                                            Active: Kz === zz.code
                                          }),
                                          "aria-pressed": Kz === zz.code,
                                          title: `Show only ${tz} with ${zz.meaning} variants`,
                                          onClick: () => {
                                            uz(Kz === zz.code ? null : zz.code)
                                          },
                                          children: zz.code
                                        })
                                      }), (0, wz.jsx)("td", {
                                        children: zz.meaning
                                      }), (0, wz.jsx)("td", {
                                        children: (0, wz.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: zz.usage
                                        })
                                      })]
                                    }, zz.code)))
                                  })]
                                })
                              }), sz.examples.length > 0 && (0, wz.jsx)(mz, {
                                lang: "text",
                                code: sz.examples.join("\n")
                              }), (0, wz.jsx)(rs, {
                                className: "DocsFilterBar",
                                value: vz,
                                placeholder: `Search ${sz.entries.length} ${tz}\u2026`,
                                label: `Search ${tz}`,
                                onChange: zz => {
                                  Uz(zz), bz(jF)
                                },
                                count: rz || Kz ? {
                                  visible: Yz.length,
                                  total: sz.entries.length
                                } : null,
                                children: Kz && (0, wz.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    uz(null)
                                  },
                                  children: [Kz, " ", (0, wz.jsx)(gz, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, wz.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: Yz.slice(0, Nz).map((zz => {
                                  const sz = "blocks" === tz ? null === Wz || void 0 === Wz ? void 0 : Wz.getBlockFaces(zz.name) : null,
                                    Fz = Wz && !sz ? Wz.getItemTextureUrl(zz.name) : null;
                                  return (0, wz.jsxs)("div", {
                                    id: ys(tz, zz.name),
                                    className: Xz()("DocsCatalogueTile", {
                                      Linked: zz.name === Dz
                                    }),
                                    children: [(0, wz.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [sz && (0, wz.jsx)(AF, {
                                        faces: sz
                                      }), Fz && (0, wz.jsx)(yF, {
                                        src: Fz
                                      })]
                                    }), (0, wz.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: zz.name
                                    }), zz.variants.length > 0 && (0, wz.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: zz.variants.map((zz => (0, wz.jsx)("span", {
                                        children: zz
                                      }, zz)))
                                    }), (0, wz.jsx)(Pz, {
                                      text: zz.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, zz.name)
                                }))
                              }), Yz.length > Nz && (0, wz.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  bz(Yz.length)
                                },
                                children: ["Show all ", Yz.length]
                              }), 0 === Yz.length && (0, wz.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", tz, " match."]
                              })]
                            })
                          }
                          var dF = sz(4458),
                            hF = sz(1536);
                          const QF = .95 * dF.c;

                          function kF(zz) {
                            return /^\s*```/.test(zz)
                          }

                          function iF(zz, tz) {
                            const sz = [
                              []
                            ];
                            let Fz = !1;
                            for (const Wz of zz.split("\n")) !Fz && tz(Wz) && sz.at(-1).length > 0 && sz.push([]), kF(Wz) && (Fz = !Fz), sz.at(-1).push(Wz);
                            return sz.map((zz => zz.join("\n").trim())).filter(Boolean)
                          }

                          function LF(zz, tz) {
                            const sz = `${"#".repeat(tz)} `,
                              Fz = [];
                            let Wz = !1;
                            for (const Xz of zz.split("\n")) kF(Xz) ? Wz = !Wz : !Wz && Xz.startsWith(sz) && Fz.push(Xz.slice(sz.length).trim());
                            return Fz
                          }

                          function lF(zz) {
                            return zz.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class nF {
                            constructor(zz, tz) {
                              this.origin = tz, this.pages = void 0, this.partPaths = new Map;
                              const sz = zz.map((zz => {
                                const tz = tz => this.resolveLinks(zz, tz).length,
                                  sz = function(zz, tz) {
                                    const sz = zz.map((zz => tz(zz.markdown) + 2)),
                                      Fz = sz.reduce(((zz, tz) => zz + tz), 0),
                                      Wz = Fz / Math.ceil(Fz / QF),
                                      Xz = [];
                                    let Oz = 0;
                                    return zz.forEach(((zz, tz) => {
                                      const Fz = sz[tz];
                                      (0 === Xz.length || Oz + Fz > QF || Oz + Fz / 2 > Wz) && (Xz.push([]), Oz = 0), Xz.at(-1).push(zz), Oz += Fz
                                    })), Xz
                                  }(function(zz, tz) {
                                    return iF(zz, (zz => zz.startsWith("## "))).flatMap((zz => {
                                      var sz;
                                      const Fz = null !== (sz = LF(zz, 2)[0]) && void 0 !== sz ? sz : "";
                                      if (tz(zz) <= QF) return [{
                                        markdown: zz,
                                        section: Fz
                                      }];
                                      let Wz = !1,
                                        Xz = "";
                                      return iF(zz, (zz => {
                                        const tz = Wz && "" !== zz.trim();
                                        return Wz = "" === zz.trim(), tz
                                      })).map((zz => {
                                        var tz;
                                        const sz = LF(zz, 3),
                                          Wz = zz.startsWith("### ") ? sz[0] : Xz;
                                        return Xz = null !== (tz = sz.at(-1)) && void 0 !== tz ? tz : Xz, {
                                          markdown: zz,
                                          section: Fz || Wz
                                        }
                                      }))
                                    }))
                                  }(lF(zz), tz), tz);
                                return {
                                  page: zz,
                                  groups: sz.length > 1 ? sz : []
                                }
                              }));
                              for (const {
                                  page: Fz,
                                  groups: Wz
                                }
                                of sz) Wz.forEach(((zz, tz) => {
                                const sz = (0, dF.p)(Fz.slug, tz);
                                for (const Wz of zz.flatMap((zz => [...LF(zz.markdown, 2), ...LF(zz.markdown, 3)]))) {
                                  const zz = `${Fz.id}#${(0,Jz.t)(Wz)}`;
                                  this.partPaths.has(zz) || this.partPaths.set(zz, sz)
                                }
                              }));
                              this.pages = sz.map((zz => {
                                let {
                                  page: tz,
                                  groups: sz
                                } = zz;
                                return {
                                  page: tz,
                                  path: (0, dF.o)(tz.slug),
                                  markdown: `# ${tz.title}\n\n${this.resolveLinks(tz,lF(tz))}\n`,
                                  parts: sz.map(((zz, Fz) => this.renderPart(tz, zz, Fz, sz.length)))
                                }
                              }))
                            }
                            url(zz) {
                              return `${this.origin}${zz}`
                            }
                            getPage(zz) {
                              return this.pages.find((tz => tz.page.id === zz))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((zz => (zz.parts.length > 0 ? zz.parts : [{
                                path: zz.path,
                                label: "",
                                markdown: zz.markdown
                              }]).filter((zz => zz.markdown.length > dF.c))))
                            }
                            markdownUrl(zz, tz) {
                              const sz = tz && this.partPaths.get(`${zz.id}#${tz}`) || (0, dF.o)(zz.slug);
                              return this.url(tz ? `${sz}#${tz}` : sz)
                            }
                            resolveLinks(zz, tz) {
                              return tz.replace(/\]\((#[^)]+)\)/g, ((tz, sz) => {
                                var Fz;
                                const Wz = null !== (Fz = Lz(sz)) && void 0 !== Fz ? Fz : this.samePageTarget(zz, sz);
                                return Wz ? `](${this.markdownUrl(Wz.page,Wz.anchor)})` : tz
                              }))
                            }
                            samePageTarget(zz, tz) {
                              const sz = (0, Jz.t)(tz.slice(1));
                              return iz(zz, sz) ? {
                                page: zz,
                                anchor: sz
                              } : null
                            }
                            renderPart(zz, tz, sz, Fz) {
                              const Wz = function(zz) {
                                  const tz = zz.map((zz => zz.section)).filter(Boolean);
                                  if (0 === tz.length) return "";
                                  const sz = tz[0],
                                    Fz = tz.at(-1);
                                  return sz === Fz ? sz : `${sz} to ${Fz}`
                                }(tz),
                                Xz = tz.map((zz => zz.markdown)).join("\n\n"),
                                Oz = Wz ? `It covers ${Wz}. ` : "",
                                oz = `Part ${sz+1} of ${Fz} of [${zz.title}](${this.url((0,dF.o)(zz.slug))}). ${Oz}[llms.txt](${this.url(dF.h)}) lists every part.`;
                              return {
                                path: (0, dF.p)(zz.slug, sz),
                                label: Wz,
                                markdown: `# ${zz.title}, part ${sz+1} of ${Fz}\n\n${oz}\n\n${this.resolveLinks(zz,Xz)}\n`
                              }
                            }
                            llmsTxt(zz) {
                              const tz = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${aF(dF.c)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const sz of dz) {
                                tz.push("", `## ${sz.title}`, "");
                                for (const zz of sz.pageIds) {
                                  const sz = this.getPage(zz),
                                    {
                                      page: Fz,
                                      parts: Wz
                                    } = sz,
                                    Xz = `About ${aF(sz.markdown.length)} tokens${Wz.length>0?`, in ${Wz.length} parts:`:"."}`;
                                  tz.push(`- [${Fz.title}](${this.url(sz.path)}): ${Fz.summary} ${Xz}`), Wz.forEach(((zz, sz) => {
                                    tz.push(`  - [Part ${sz+1}${zz.label?`: ${zz.label}`:""}](${this.url(zz.path)})`)
                                  }))
                                }
                              }
                              return tz.push("", "## Optional", "", `- [Every page in one file](${this.url(dF.e)}): About ${aF(zz.length)} tokens, for a model with a large context window.`, ""), tz.join("\n")
                            }
                            llmsFullTxt() {
                              return dz.flatMap((zz => zz.pageIds.map((zz => this.getPage(zz).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const zz = this.llmsFullTxt(),
                                tz = this.llmsTxt(zz),
                                sz = new Map([
                                  [dF.l, tz],
                                  [dF.h, tz],
                                  [dF.e, zz]
                                ]);
                              for (const Fz of this.pages) {
                                sz.set(Fz.path, Fz.markdown);
                                for (const zz of Fz.parts) sz.set(zz.path, zz.markdown)
                              }
                              return sz
                            }
                          }

                          function aF(zz) {
                            return `${Math.max(1,Math.round(zz/4e3))}K`
                          }
                          let qF = null;

                          function SF() {
                            return qF ??= new nF(Mz, hF.c), qF
                          }
                          const VF = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function RF(zz) {
                            return SF().getPage(zz.id).parts.length > 0 ? `Read ${dF.i}, then the parts of the Bloxd Code API's ${zz.title} page it lists, so I can ask questions about it.` : `Read ${hF.c}${(0,dF.o)(zz.slug)} so I can ask questions about it. ${dF.i} lists every page of the Bloxd Code API docs.`
                          }

                          function pF(zz) {
                            let {
                              page: tz
                            } = zz;
                            const [sz, Fz] = Bz();
                            return (0, wz.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, wz.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Fz(SF().getPage(tz.id).markdown)
                                },
                                children: [(0, wz.jsx)(gz, {
                                  name: !1 === (null === sz || void 0 === sz ? void 0 : sz.failed) ? "check" : "copy"
                                }), (0, wz.jsx)("span", {
                                  children: sz ? sz.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), VF.map((zz => (0, wz.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${zz.url}${encodeURIComponent(RF(tz))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, wz.jsx)(gz, {
                                  name: "external-link"
                                }), (0, wz.jsxs)("span", {
                                  children: ["Open in ", zz.name]
                                })]
                              }, zz.name)))]
                            })
                          }

                          function fF(zz) {
                            return `#${[0,1,2].map((tz=>Math.round(Math.min(255,Math.max(0,zz[tz]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function EF(zz) {
                            return [parseInt(zz.slice(1, 3), 16), parseInt(zz.slice(3, 5), 16), parseInt(zz.slice(5, 7), 16)]
                          }

                          function zW(zz) {
                            let {
                              label: tz,
                              min: sz,
                              max: Fz,
                              step: Wz,
                              low: Xz,
                              high: Oz,
                              onChange: oz
                            } = zz;
                            return (0, wz.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, wz.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, wz.jsx)("span", {
                                  children: tz
                                }), (0, wz.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Xz === Oz ? Xz : `${Xz}\u2013${Oz}`
                                })]
                              }), (0, wz.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, wz.jsx)("input", {
                                  type: "range",
                                  min: sz,
                                  max: Fz,
                                  step: Wz,
                                  value: Math.min(Fz, Xz),
                                  "aria-label": `Minimum ${tz.toLowerCase()}`,
                                  onChange: zz => {
                                    const tz = Number(zz.target.value);
                                    oz(tz, Math.max(tz, Oz))
                                  }
                                }), (0, wz.jsx)("input", {
                                  type: "range",
                                  min: sz,
                                  max: Fz,
                                  step: Wz,
                                  value: Math.min(Fz, Oz),
                                  "aria-label": `Maximum ${tz.toLowerCase()}`,
                                  onChange: zz => {
                                    const tz = Number(zz.target.value);
                                    oz(Math.min(tz, Xz), tz)
                                  }
                                })]
                              })]
                            })
                          }

                          function tW(zz) {
                            let {
                              label: tz,
                              min: sz,
                              max: Fz,
                              step: Wz,
                              value: Xz,
                              onChange: Oz,
                              format: oz = String
                            } = zz;
                            return (0, wz.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, wz.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, wz.jsx)("span", {
                                  children: tz
                                }), (0, wz.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: oz(Xz)
                                })]
                              }), (0, wz.jsx)("input", {
                                type: "range",
                                min: sz,
                                max: Fz,
                                step: Wz,
                                value: Math.min(Fz, Math.max(sz, Xz)),
                                "aria-label": tz,
                                onChange: zz => {
                                  Oz(Number(zz.target.value))
                                }
                              })]
                            })
                          }

                          function sW(zz) {
                            let {
                              opts: tz,
                              onChange: sz
                            } = zz;
                            const Fz = tz.colorGradients;
                            if (!qs(Fz)) return (0, wz.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, wz.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, wz.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, wz.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Fz.map(((zz, tz) => (0, wz.jsx)("input", {
                                  type: "color",
                                  value: fF(zz.color),
                                  "aria-label": `Colour ${tz+1}`,
                                  onChange: zz => {
                                    const Wz = [...Fz];
                                    Wz[tz] = {
                                      color: EF(zz.target.value)
                                    }, sz(Wz)
                                  }
                                }, tz)))
                              })]
                            });
                            const Wz = (zz, tz) => {
                              const Wz = [...Fz];
                              Wz[zz] = tz, sz(Wz)
                            };
                            return (0, wz.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, wz.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, wz.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, wz.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Fz.map(((zz, tz) => {
                                var sz;
                                const Fz = null !== (sz = zz.maxColor) && void 0 !== sz ? sz : zz.minColor;
                                return (0, wz.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, wz.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * zz.timeFraction), "%"]
                                  }), (0, wz.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${fF(zz.minColor)}, ${fF(Fz)})`
                                    }
                                  }), (0, wz.jsx)("input", {
                                    type: "color",
                                    value: fF(zz.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*zz.timeFraction)}%`,
                                    onChange: sz => {
                                      Wz(tz, {
                                        ...zz,
                                        minColor: [...EF(sz.target.value), zz.minColor[3]]
                                      })
                                    }
                                  }), (0, wz.jsx)("input", {
                                    type: "color",
                                    value: fF(Fz),
                                    "aria-label": `Maximum colour at ${Math.round(100*zz.timeFraction)}%`,
                                    onChange: sz => {
                                      Wz(tz, {
                                        ...zz,
                                        maxColor: [...EF(sz.target.value), Fz[3]]
                                      })
                                    }
                                  })]
                                }, tz)
                              }))]
                            })
                          }
                          const FW = [-.5, -.5, -.5],
                            WW = [.5, .5, .5],
                            XW = [0, 1, 2, 3, 4, 5, 6, 7].map((zz => [1 & zz ? WW[0] : FW[0], 2 & zz ? WW[1] : FW[1], 4 & zz ? WW[2] : FW[2]]));class OW {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(zz, tz, sz, Fz) {
                              const Wz = Math.round(31 * tz),
                                Xz = Math.round(31 * sz),
                                Oz = Math.round(31 * Fz),
                                oz = `${Wz}|${Xz}|${Oz}`;
                              let vz = this.tints.get(zz);
                              (!vz || vz.size > 2e3) && (vz = new Map, this.tints.set(zz, vz));
                              let Uz = vz.get(oz);
                              if (Uz) return Uz;
                              Uz = document.createElement("canvas"), Uz.width = zz.naturalWidth || 16, Uz.height = zz.naturalHeight || 16;
                              const Kz = Uz.getContext("2d");
                              return Kz ? (Kz.imageSmoothingEnabled = !1, Kz.drawImage(zz, 0, 0, Uz.width, Uz.height), Kz.globalCompositeOperation = "multiply", Kz.fillStyle = `rgb(${Wz/31*255}, ${Xz/31*255}, ${Oz/31*255})`, Kz.fillRect(0, 0, Uz.width, Uz.height), Kz.globalCompositeOperation = "destination-in", Kz.drawImage(zz, 0, 0, Uz.width, Uz.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), vz.set(oz, Uz), Uz
                            }
                          }

                          function oW(zz) {
                            let {
                              opts: tz,
                              textureUrl: sz,
                              burst: Wz,
                              paused: Xz
                            } = zz;
                            const Oz = (0, Fz.useRef)(null),
                              oz = (0, Fz.useRef)(tz);
                            oz.current = tz;
                            const vz = (0, Fz.useRef)(Xz);
                            vz.current = Xz;
                            const Uz = (0, Fz.useRef)(null),
                              Kz = (0, Fz.useRef)(null),
                              uz = (0, Fz.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(zz) {
                                let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const sz = [-.5, -.5, -.5],
                                  Fz = [.5, .5, .5];
                                let Wz = .5;
                                for (let Xz = 0; Xz < 40; Xz++) {
                                  const Xz = Vs(zz, sz, Fz, tz),
                                    Oz = Math.max(Xz.life / 30, .001);
                                  for (; fs(Xz, zz.gravity, Oz);) Wz = Math.max(Wz, Math.hypot(Xz.pos[0], Xz.pos[1], Xz.pos[2]) + Xz.size / 2)
                                }
                                return Wz
                              }(tz)))), [tz]),
                              Nz = (0, Fz.useRef)(uz);
                            return Nz.current = uz, (0, Fz.useEffect)((() => {
                              if (Uz.current = null, !sz) return;
                              const zz = new Image;
                              let tz = !1;
                              return zz.onload = () => {
                                tz || (Uz.current = zz)
                              }, zz.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${sz}`)
                              }, zz.src = sz, () => {
                                tz = !0
                              }
                            }), [sz]), (0, Fz.useEffect)((() => {
                              var zz;
                              null === (zz = Kz.current) || void 0 === zz || zz.call(Kz)
                            }), [tz, Wz]), (0, Fz.useEffect)((() => {
                              const zz = Oz.current,
                                tz = null === zz || void 0 === zz ? void 0 : zz.getContext("2d");
                              if (!zz || !tz) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const sz = new OW;
                              let Fz = [],
                                Wz = 0,
                                Xz = -.7,
                                uz = Nz.current,
                                bz = performance.now(),
                                wz = 0,
                                Dz = !0,
                                gz = null;
                              const Hz = () => {
                                const zz = oz.current,
                                  tz = Math.min(400, Math.max(0, Math.ceil(zz.manualEmitCount)));
                                Fz = [];
                                for (let sz = 0; sz < tz; sz++) Fz.push(Vs(zz, FW, WW, Math.random));
                                Wz = 0
                              };
                              Kz.current = Hz, Hz();
                              const Bz = Oz => {
                                wz = requestAnimationFrame(Bz);
                                const Kz = Math.min(.05, (Oz - bz) / 1e3);
                                if (bz = Oz, !Dz) return;
                                const Pz = window.devicePixelRatio || 1,
                                  rz = Math.round(zz.clientWidth * Pz),
                                  Yz = Math.round(zz.clientHeight * Pz);
                                if (0 === rz || 0 === Yz) return;
                                zz.width === rz && zz.height === Yz || (zz.width = rz, zz.height = Yz);
                                const xz = oz.current;
                                null === gz && (Xz += .18 * Kz), uz += (Nz.current - uz) * Math.min(1, 4 * Kz);
                                const mz = .6 * Kz;
                                Fz = Fz.filter((zz => fs(zz, xz.gravity, mz))), 0 !== Fz.length || vz.current || (Wz += Kz, Wz > .6 && Hz());
                                const Jz = function(zz, tz, sz, Fz) {
                                  const Wz = 3.2 * Fz,
                                    Xz = .44 * Math.min(zz, tz) * Wz / Fz,
                                    Oz = Math.cos(sz),
                                    oz = Math.sin(sz),
                                    vz = Math.cos(.42),
                                    Uz = Math.sin(.42);
                                  return (sz, Fz, Kz) => {
                                    const uz = sz * oz + Kz * Oz,
                                      Nz = Wz - (Fz * Uz + uz * vz);
                                    if (Nz < .05) return null;
                                    const bz = Xz / Nz;
                                    return {
                                      x: zz / 2 + (sz * Oz - Kz * oz) * bz,
                                      y: tz / 2 - (Fz * vz - uz * Uz) * bz,
                                      scale: bz,
                                      depth: Nz
                                    }
                                  }
                                }(rz, Yz, Xz, uz);
                                ! function(zz, tz, sz, Fz, Wz) {
                                  const Xz = zz.createLinearGradient(0, 0, 0, sz);
                                  Xz.addColorStop(0, "#23262d"), Xz.addColorStop(1, "#16181c"), zz.globalCompositeOperation = "source-over", zz.globalAlpha = 1, zz.fillStyle = Xz, zz.fillRect(0, 0, tz, sz);
                                  const Oz = (tz, sz) => {
                                      const Wz = Fz(tz[0], tz[1], tz[2]),
                                        Xz = Fz(sz[0], sz[1], sz[2]);
                                      Wz && Xz && (zz.beginPath(), zz.moveTo(Wz.x, Wz.y), zz.lineTo(Xz.x, Xz.y), zz.stroke())
                                    },
                                    oz = Math.ceil(Wz) + 1,
                                    vz = FW[1];
                                  zz.lineWidth = 1, zz.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Uz = -oz; Uz <= oz; Uz++) Oz([Uz + .5, vz, .5 - oz], [Uz + .5, vz, oz + .5]), Oz([.5 - oz, vz, Uz + .5], [oz + .5, vz, Uz + .5]);
                                  zz.strokeStyle = "rgba(255, 255, 255, 0.28)", zz.setLineDash([4, 4]);
                                  for (const Uz of XW)
                                    for (const zz of XW) {
                                      const tz = [0, 1, 2].filter((tz => Uz[tz] !== zz[tz]));
                                      1 === tz.length && Uz[tz[0]] < zz[tz[0]] && Oz(Uz, zz)
                                    }
                                  zz.setLineDash([])
                                }(tz, rz, Yz, Jz, uz);
                                const Iz = Uz.current,
                                  Cz = Fz.map((zz => ({
                                    particle: zz,
                                    at: Jz(zz.pos[0], zz.pos[1], zz.pos[2])
                                  }))).filter((zz => null !== zz.at)).sort(((zz, tz) => tz.at.depth - zz.at.depth));
                                tz.imageSmoothingEnabled = !1;
                                for (const zz of function(zz) {
                                    switch (zz) {
                                      case is.f.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case is.f.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case is.f.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case is.f.MultiplyAdd:
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
                                  }(xz.blendMode)) {
                                  tz.globalCompositeOperation = zz.operation;
                                  for (const {
                                      particle: Fz,
                                      at: Wz
                                    }
                                    of Cz) {
                                    const [Xz, Oz, oz, vz] = ps(Fz), Uz = Math.max(1, Fz.size * Wz.scale);
                                    tz.globalAlpha = zz.usesAlpha ? Math.min(1, Math.max(0, vz)) : 1, Iz ? tz.drawImage(sz.get(Iz, Xz, Oz, oz), Wz.x - Uz / 2, Wz.y - Uz / 2, Uz, Uz) : (tz.fillStyle = `rgb(${255*Xz}, ${255*Oz}, ${255*oz})`, tz.fillRect(Wz.x - Uz / 2, Wz.y - Uz / 2, Uz, Uz))
                                  }
                                }
                                tz.globalCompositeOperation = "source-over", tz.globalAlpha = 1
                              };
                              wz = requestAnimationFrame(Bz);
                              const Pz = new IntersectionObserver((zz => {
                                let [tz] = zz;
                                Dz = tz.isIntersecting
                              }));
                              Pz.observe(zz);
                              const rz = tz => {
                                  gz = tz.clientX, zz.setPointerCapture(tz.pointerId)
                                },
                                Yz = zz => {
                                  null !== gz && (Xz += .01 * (zz.clientX - gz), gz = zz.clientX)
                                },
                                xz = () => {
                                  gz = null
                                };
                              return zz.addEventListener("pointerdown", rz), zz.addEventListener("pointermove", Yz), zz.addEventListener("pointerup", xz), zz.addEventListener("pointercancel", xz), () => {
                                cancelAnimationFrame(wz), Pz.disconnect(), Kz.current = null, zz.removeEventListener("pointerdown", rz), zz.removeEventListener("pointermove", Yz), zz.removeEventListener("pointerup", xz), zz.removeEventListener("pointercancel", xz)
                              }
                            }), []), (0, wz.jsx)("canvas", {
                              ref: Oz,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${tz.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const vW = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            UW = [{
                              mode: is.f.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: is.f.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: is.f.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: is.f.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: is.f.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            KW = (0, Fz.forwardRef)((function(zz, tz) {
                              var sz, Wz;
                              let {
                                textures: Oz
                              } = zz;
                              const oz = xF(),
                                vz = (0, Fz.useRef)(null),
                                [Uz, Kz] = (0, Fz.useState)(ls),
                                [uz, Nz] = (0, Fz.useState)("example"),
                                [bz, Dz] = (0, Fz.useState)(0),
                                [Hz, Bz] = (0, Fz.useState)(!1),
                                rz = zz => {
                                  const tz = "example" === zz ? ls : Ls(zz);
                                  tz && (Kz(tz), Nz(zz))
                                };
                              (0, Fz.useImperativeHandle)(tz, (() => ({
                                preview: zz => {
                                  var tz;
                                  rz(zz), null === (tz = vz.current) || void 0 === tz || tz.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const Yz = zz => {
                                  Kz({
                                    ...Uz,
                                    ...zz
                                  }), Nz(null)
                                },
                                xz = function(zz, tz) {
                                  if (null !== tz) return `${sF}    presetId: "${tz}",\n${FF}\n})`;
                                  const sz = zz.velocityGradients.map((zz => `        {\n            timeFraction: ${Es(zz.timeFraction)},\n            factor: ${Es(zz.factor)},\n            factor2: ${Es(zz.factor2)},\n        },`)),
                                    Fz = [`    dir1: ${zF(zz.dir1)},`, `    dir2: ${zF(zz.dir2)},`, FF, `    texture: "${zz.texture}",`, `    minLifeTime: ${Es(zz.minLifeTime)},`, `    maxLifeTime: ${Es(zz.maxLifeTime)},`, `    minEmitPower: ${Es(zz.minEmitPower)},`, `    maxEmitPower: ${Es(zz.maxEmitPower)},`, `    minSize: ${Es(zz.minSize)},`, `    maxSize: ${Es(zz.maxSize)},`, `    manualEmitCount: ${Es(zz.manualEmitCount)},`, `    gravity: ${zF(zz.gravity)},`, `    colorGradients: ${tF(zz.colorGradients,"    ")},`, `    velocityGradients: ${sz.length>0?`[\n${sz.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Es(zz.blendMode)},`];
                                  return void 0 !== zz.hideDist && Fz.push(`    hideDist: ${Es(zz.hideDist)},`), `${sF}${Fz.join("\n")}\n})`
                                }(Uz, null === uz || "example" === uz ? null : uz),
                                Jz = Oz.includes(Uz.texture) ? Oz : [...Oz, Uz.texture];
                              return (0, wz.jsxs)("section", {
                                ref: vz,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, wz.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, wz.jsxs)("div", {
                                    children: [(0, wz.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, wz.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, wz.jsx)(Pz, {
                                    text: xz,
                                    label: "Copy code"
                                  })]
                                }), (0, wz.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, wz.jsx)("button", {
                                    type: "button",
                                    className: Xz()("DocsVariantChip", {
                                      Active: "example" === uz
                                    }),
                                    onClick: () => {
                                      rz("example")
                                    },
                                    children: "Example"
                                  }), vW.filter((zz => null !== Ls(zz))).map((zz => (0, wz.jsx)("button", {
                                    type: "button",
                                    className: Xz()("DocsVariantChip", {
                                      Active: uz === zz
                                    }),
                                    onClick: () => {
                                      rz(zz)
                                    },
                                    children: zz
                                  }, zz))), (0, wz.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== uz && void 0 !== uz ? uz : "custom",
                                    "aria-label": "Preset",
                                    onChange: zz => {
                                      rz(zz.target.value)
                                    },
                                    children: [(0, wz.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === uz && (0, wz.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), ks.c.map((zz => (0, wz.jsx)("option", {
                                      value: zz,
                                      children: zz
                                    }, zz)))]
                                  })]
                                }), (0, wz.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, wz.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, wz.jsx)(oW, {
                                      opts: Uz,
                                      textureUrl: null !== (sz = null === oz || void 0 === oz ? void 0 : oz.getParticleTextureUrl(Uz.texture)) && void 0 !== sz ? sz : null,
                                      burst: bz,
                                      paused: Hz
                                    }), (0, wz.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, wz.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Dz(bz + 1)
                                        },
                                        children: [(0, wz.jsx)(gz, {
                                          name: "replay"
                                        }), (0, wz.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, wz.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": Hz,
                                        onClick: () => {
                                          Bz(!Hz)
                                        },
                                        children: [(0, wz.jsx)(gz, {
                                          name: Hz ? "play" : "pause"
                                        }), (0, wz.jsx)("span", {
                                          children: Hz ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, wz.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, wz.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, wz.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, wz.jsx)("span", {
                                          children: "Texture"
                                        }), (0, wz.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Uz.texture
                                        })]
                                      }), (0, wz.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: Jz.map((zz => {
                                          var tz;
                                          const sz = null !== (tz = null === oz || void 0 === oz ? void 0 : oz.getParticleTextureUrl(zz)) && void 0 !== tz ? tz : null;
                                          return (0, wz.jsx)("button", {
                                            type: "button",
                                            className: Xz()("DocsParticleTexture", {
                                              Active: Uz.texture === zz
                                            }),
                                            title: zz,
                                            "aria-label": zz,
                                            "aria-pressed": Uz.texture === zz,
                                            onClick: () => {
                                              Yz({
                                                texture: zz
                                              })
                                            },
                                            children: sz ? (0, wz.jsx)("img", {
                                              src: sz,
                                              alt: ""
                                            }) : (0, wz.jsx)(gz, {
                                              name: "image"
                                            })
                                          }, zz)
                                        }))
                                      })]
                                    }), (0, wz.jsx)(tW, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Uz.manualEmitCount,
                                      onChange: zz => {
                                        Yz({
                                          manualEmitCount: zz
                                        })
                                      }
                                    }), (0, wz.jsx)(zW, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Uz.minLifeTime,
                                      high: Uz.maxLifeTime,
                                      onChange: (zz, tz) => {
                                        Yz({
                                          minLifeTime: zz,
                                          maxLifeTime: tz
                                        })
                                      }
                                    }), (0, wz.jsx)(zW, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Uz.minEmitPower,
                                      high: Uz.maxEmitPower,
                                      onChange: (zz, tz) => {
                                        Yz({
                                          minEmitPower: zz,
                                          maxEmitPower: tz
                                        })
                                      }
                                    }), (0, wz.jsx)(zW, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Uz.minSize,
                                      high: Uz.maxSize,
                                      onChange: (zz, tz) => {
                                        Yz({
                                          minSize: zz,
                                          maxSize: tz
                                        })
                                      }
                                    }), (0, wz.jsx)(tW, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (Wz = Uz.gravity[1]) && void 0 !== Wz ? Wz : 0,
                                      onChange: zz => {
                                        var tz, sz;
                                        Yz({
                                          gravity: [null !== (tz = Uz.gravity[0]) && void 0 !== tz ? tz : 0, zz, null !== (sz = Uz.gravity[2]) && void 0 !== sz ? sz : 0]
                                        })
                                      }
                                    }), (0, wz.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, wz.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, wz.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, wz.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Uz.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: zz => {
                                          Yz({
                                            blendMode: Number(zz.target.value)
                                          })
                                        },
                                        children: UW.map((zz => {
                                          let {
                                            mode: tz,
                                            label: sz
                                          } = zz;
                                          return (0, wz.jsx)("option", {
                                            value: tz,
                                            children: sz
                                          }, tz)
                                        }))
                                      })]
                                    }), (0, wz.jsx)(sW, {
                                      opts: Uz,
                                      onChange: zz => {
                                        Yz({
                                          colorGradients: zz
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, wz.jsx)(mz, {
                                  code: xz,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var uW = sz(4107),
                            NW = sz(1831);

                          function bW(zz, tz) {
                            return zz ? uW.e.includes(tz) ? zz.getIngameIconUrl(tz) : zz.getItemIconUrl(tz) : null
                          }

                          function wW(zz) {
                            var tz, sz, Fz;
                            let {
                              part: Wz,
                              assets: Oz
                            } = zz;
                            const oz = bW(Oz, Wz.icon),
                              vz = null !== (tz = null === (sz = Wz.style) || void 0 === sz ? void 0 : sz.fontSize) && void 0 !== tz ? tz : "1.8em",
                              Uz = (0, dt.Xb)(Wz.style);
                            return (0, wz.jsxs)("span", {
                              className: Xz()("DocsBloxdTextIcon", {
                                Missing: !oz
                              }),
                              style: {
                                width: vz,
                                height: vz,
                                opacity: null === (Fz = Wz.style) || void 0 === Fz ? void 0 : Fz.opacity
                              },
                              title: oz ? void 0 : `No Bloxd icon, item or block is called "${Wz.icon}"`,
                              children: [oz && Uz && (0, wz.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Uz,
                                  maskImage: `url("${oz}")`,
                                  WebkitMaskImage: `url("${oz}")`
                                }
                              }), oz ? (0, wz.jsx)("img", {
                                src: oz,
                                alt: "",
                                className: Xz()({
                                  Tinted: Uz
                                })
                              }) : (0, wz.jsx)(gz, {
                                name: "image"
                              })]
                            })
                          }

                          function DW(zz) {
                            let {
                              parts: tz,
                              className: sz
                            } = zz;
                            const Fz = xF(),
                              Wz = [];
                            let Oz = [];
                            const oz = zz => {
                              Oz.length > 0 && (Wz.push((0, wz.jsx)(NW.c, {
                                text: Oz
                              }, `run-${zz}`)), Oz = [])
                            };
                            return tz.forEach(((zz, tz) => {
                              "icon" !== Lt(zz) || Qt(zz.icon) ? Oz.push(zz) : (oz(tz), Wz.push((0, wz.jsx)(wW, {
                                part: zz,
                                assets: Fz
                              }, `icon-${tz}`)))
                            })), oz(tz.length), (0, wz.jsx)("div", {
                              className: Xz()("DocsStyledTextPreview", sz),
                              children: Wz
                            })
                          }
                          const gW = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let HW = null;

                          function BW(zz) {
                            if (HW ??= document.createElement("canvas").getContext("2d"), !HW) return "#000000";
                            HW.fillStyle = "#000000", HW.fillStyle = zz;
                            const tz = HW.fillStyle;
                            return tz.startsWith("#") ? tz : "#000000"
                          }

                          function PW(zz) {
                            let {
                              value: tz,
                              label: sz,
                              onChange: Fz
                            } = zz;
                            return (0, wz.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, wz.jsx)("input", {
                                type: "color",
                                value: BW(tz),
                                "aria-label": `${sz} picker`,
                                onChange: zz => {
                                  Fz(zz.target.value)
                                }
                              }), (0, wz.jsx)("input", {
                                type: "text",
                                value: tz,
                                placeholder: "#ffb914 or gold",
                                "aria-label": sz,
                                spellCheck: !1,
                                onChange: zz => {
                                  Fz(zz.target.value)
                                }
                              })]
                            })
                          }

                          function rW(zz) {
                            let {
                              value: tz,
                              fontAwesomeIcons: sz,
                              onChange: Wz
                            } = zz;
                            const Oz = xF(),
                              [oz, vz] = (0, Fz.useState)(Qt(tz) ? "fontAwesome" : "bloxd"),
                              [Uz, Kz] = (0, Fz.useState)(""),
                              uz = Uz.trim().toLowerCase(),
                              Nz = "bloxd" === oz ? uW.e : sz,
                              bz = uz ? Nz.filter((zz => zz.toLowerCase().includes(uz))) : Nz;
                            return (0, wz.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, wz.jsx)("input", {
                                type: "text",
                                value: tz,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: zz => {
                                  Wz(zz.target.value)
                                }
                              }), (0, wz.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, wz.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((zz => (0, wz.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": oz === zz,
                                    className: Xz()("DocsVariantChip", {
                                      Active: oz === zz
                                    }),
                                    onClick: () => {
                                      vz(zz)
                                    },
                                    children: "bloxd" === zz ? `Bloxd icons (${uW.e.length})` : `Font Awesome (${sz.length})`
                                  }, zz))), (0, wz.jsx)("input", {
                                    type: "search",
                                    value: Uz,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: zz => {
                                      Kz(zz.target.value)
                                    }
                                  })
                                ]
                              }), (0, wz.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [bz.map((zz => {
                                  const sz = "bloxd" === oz ? bW(Oz, zz) : null;
                                  return (0, wz.jsx)("button", {
                                    type: "button",
                                    title: zz,
                                    "aria-label": zz,
                                    "aria-pressed": zz === tz,
                                    className: Xz()("DocsIconPickerOption", {
                                      Active: zz === tz
                                    }),
                                    onClick: () => {
                                      Wz(zz)
                                    },
                                    children: "fontAwesome" === oz ? (0, wz.jsx)(Ys.c, {
                                      name: zz
                                    }) : sz ? (0, wz.jsx)("img", {
                                      src: sz,
                                      alt: ""
                                    }) : (0, wz.jsx)(gz, {
                                      name: "image"
                                    })
                                  }, zz)
                                })), 0 === bz.length && (0, wz.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Uz, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function YW(zz) {
                            let {
                              property: tz,
                              value: sz,
                              fontAwesomeIcons: Fz,
                              onChange: Wz
                            } = zz;
                            const {
                              field: Xz,
                              label: Oz
                            } = tz, oz = zz => "" !== zz || tz.isRequired ? zz : void 0;
                            switch (Xz.kind) {
                              case "text":
                                return Xz.multiline ? (0, wz.jsx)("textarea", {
                                  value: String(null !== sz && void 0 !== sz ? sz : ""),
                                  rows: 2,
                                  "aria-label": Oz,
                                  onChange: zz => {
                                    Wz(zz.target.value)
                                  }
                                }) : (0, wz.jsx)("input", {
                                  type: "text",
                                  value: String(null !== sz && void 0 !== sz ? sz : ""),
                                  "aria-label": Oz,
                                  onChange: zz => {
                                    Wz(oz(zz.target.value))
                                  }
                                });
                              case "size":
                                return (0, wz.jsx)("input", {
                                  type: "text",
                                  value: String(null !== sz && void 0 !== sz ? sz : ""),
                                  placeholder: tz.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Oz,
                                  spellCheck: !1,
                                  onChange: zz => {
                                    Wz(oz(zz.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, wz.jsx)(PW, {
                                  value: String(null !== sz && void 0 !== sz ? sz : ""),
                                  label: Oz,
                                  onChange: zz => {
                                    Wz(oz(zz))
                                  }
                                });
                              case "colours": {
                                const zz = Array.isArray(sz) ? sz : [],
                                  tz = zz => {
                                    Wz(zz.length > 0 ? zz : void 0)
                                  };
                                return (0, wz.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [zz.map(((sz, Fz) => (0, wz.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, wz.jsx)(PW, {
                                      value: sz,
                                      label: `${Oz} ${Fz+1}`,
                                      onChange: sz => {
                                        tz(zz.map(((zz, tz) => tz === Fz ? sz : zz)))
                                      }
                                    }), (0, wz.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Fz+1}`,
                                      onClick: () => {
                                        tz(zz.filter(((zz, tz) => tz !== Fz)))
                                      },
                                      children: (0, wz.jsx)(gz, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Fz))), (0, wz.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var sz;
                                      tz([...zz, null !== (sz = zz.at(-1)) && void 0 !== sz ? sz : "#ffffff"])
                                    },
                                    children: [(0, wz.jsx)(gz, {
                                      name: "plus"
                                    }), 0 === zz.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var vz;
                                const zz = "number" === typeof sz ? sz : Number(null !== (vz = tz.defaultText) && void 0 !== vz ? vz : 0);
                                return (0, wz.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, wz.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: zz,
                                    "aria-label": Oz,
                                    onChange: zz => {
                                      Wz(Number(zz.target.value))
                                    }
                                  }), (0, wz.jsx)("output", {
                                    children: zz.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, wz.jsxs)("select", {
                                  value: String(null !== sz && void 0 !== sz ? sz : ""),
                                  "aria-label": Oz,
                                  onChange: zz => {
                                    Wz(oz(zz.target.value))
                                  },
                                  children: [!tz.isRequired && (0, wz.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", tz.defaultText, ")"]
                                  }), Xz.options.map((zz => (0, wz.jsx)("option", {
                                    value: zz,
                                    children: zz
                                  }, zz)))]
                                });
                              case "icon":
                                return (0, wz.jsx)(rW, {
                                  value: String(null !== sz && void 0 !== sz ? sz : ""),
                                  fontAwesomeIcons: Fz,
                                  onChange: Wz
                                })
                            }
                          }

                          function xW(zz) {
                            let tz;
                            try {
                              tz = JSON.parse(zz)
                            } catch (sz) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${sz.message}`
                              }
                            }
                            return Fs(tz) ? {
                              part: tz,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function mW(zz) {
                            let {
                              parts: tz,
                              index: sz,
                              fontAwesomeIcons: Wz,
                              onChange: Xz,
                              NJ: Oz,
                              onClose: oz
                            } = zz;
                            const vz = (0, Fz.useContext)(wt),
                              Kz = (0, Fz.useRef)(null),
                              uz = tz[sz],
                              Nz = Lt(uz),
                              [bz, Dz] = (0, Fz.useState)((() => JSON.stringify(uz, null, 2))),
                              Hz = (0, Fz.useMemo)((() => "other" === Nz ? xW(bz).error : null), [Nz, bz]);
                            (0, Fz.useEffect)((() => {
                              var zz;
                              null === (zz = Kz.current) || void 0 === zz || zz.focus()
                            }), []);
                            const Bz = (0, wz.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: zz => {
                                zz.target === zz.currentTarget && oz()
                              },
                              children: (0, wz.jsxs)("div", {
                                ref: Kz,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${sz+1}: ${kt[Nz]}`,
                                tabIndex: -1,
                                onKeyDown: zz => {
                                  "Escape" === zz.key ? (zz.stopPropagation(), oz()) : "Tab" === zz.key && Kz.current && function(zz, tz) {
                                    const sz = Array.from(zz.querySelectorAll(Zt)),
                                      Fz = sz[0],
                                      Wz = sz.at(-1);
                                    if (!Fz || !Wz) return;
                                    const Xz = document.activeElement;
                                    !tz.shiftKey || Xz !== Fz && Xz !== zz ? tz.shiftKey || Xz !== Wz || (tz.preventDefault(), Fz.focus()) : (tz.preventDefault(), Wz.focus())
                                  }(Kz.current, zz)
                                },
                                children: [(0, wz.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, wz.jsxs)("div", {
                                    children: [(0, wz.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", sz + 1]
                                    }), (0, wz.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: kt[Nz]
                                    })]
                                  }), (0, wz.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: oz,
                                    children: (0, wz.jsx)(gz, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, wz.jsx)(DW, {
                                  parts: tz,
                                  className: "DocsTextDialogPreview"
                                }), (0, wz.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Nz ? (0, wz.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, wz.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, wz.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: bz,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: zz => {
                                        Dz(zz.target.value);
                                        const tz = xW(zz.target.value);
                                        null !== tz.part && Xz(tz.part)
                                      }
                                    }), Hz && (0, wz.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: Hz
                                    })]
                                  }) : nt[Nz].map((zz => {
                                    const tz = St(uz, zz.path),
                                      sz = zz.isRequired ? JSON.stringify(Rt(uz, zz.path)) === JSON.stringify(uz) : void 0 === tz;
                                    return (0, wz.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, wz.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, wz.jsx)("span", {
                                          children: zz.label
                                        }), (0, wz.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: sz,
                                          "aria-label": `Reset ${zz.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Xz(Rt(uz, zz.path))
                                          },
                                          children: [(0, wz.jsx)(gz, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, wz.jsx)(YW, {
                                        property: zz,
                                        value: tz,
                                        fontAwesomeIcons: Wz,
                                        onChange: tz => {
                                          Xz(Vt(uz, zz.path, tz))
                                        }
                                      }), !zz.isRequired && (0, wz.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", zz.defaultText]
                                      })]
                                    }, zz.path.join("."))
                                  }))
                                }), (0, wz.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, wz.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Oz,
                                    children: [(0, wz.jsx)(gz, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, wz.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: oz,
                                    children: "Done"
                                  })]
                                }), (0, wz.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: gW.map((zz => (0, wz.jsx)("option", {
                                    value: zz
                                  }, zz)))
                                })]
                              })
                            });
                            return vz ? (0, Uz.createPortal)(Bz, vz) : Bz
                          }
                          const JW = [{
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
                            IW = Object.keys(it);

                          function CW(zz) {
                            let {
                              fontAwesomeIcons: tz
                            } = zz;
                            const [sz, Wz] = (0, Fz.useState)(JW[0].parts), [Oz, oz] = (0, Fz.useState)((() => zs(JW[0].parts))), [vz, Uz] = (0, Fz.useState)(null), [Kz, uz] = (0, Fz.useState)(!1), [Nz, bz] = (0, Fz.useState)(null), [Dz, Hz] = (0, Fz.useState)(!1), [Bz, Pz] = (0, Fz.useState)(null), rz = (0, Fz.useRef)(null), Yz = zs(sz);
                            (0, Fz.useLayoutEffect)((() => {
                              var zz;
                              if (!Bz) return;
                              const tz = zz => {
                                  var tz;
                                  return null === (tz = rz.current) || void 0 === tz ? void 0 : tz.querySelector(`[data-focus-key="${zz}"]`)
                                },
                                sz = tz(Bz.key);
                              null === (zz = sz && !sz.disabled ? sz : tz(Bz.fallback)) || void 0 === zz || zz.focus(), Pz(null)
                            }), [Bz]);
                            const xz = zz => {
                                Wz(zz), oz(zs(zz)), Uz(null)
                              },
                              Jz = zz => {
                                xz(sz.filter(((tz, sz) => sz !== zz))), Pz({
                                  key: `edit-${Math.min(zz,sz.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              Iz = (zz, tz) => {
                                const Fz = [...sz],
                                  [Wz] = Fz.splice(zz, 1);
                                Fz.splice(zz + tz, 0, Wz), xz(Fz);
                                Pz({
                                  key: `${tz<0?"up":"down"}-${zz+tz}`,
                                  fallback: `edit-${zz+tz}`
                                })
                              };
                            return (0, wz.jsxs)("section", {
                              ref: rz,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, wz.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, wz.jsxs)("div", {
                                  children: [(0, wz.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, wz.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, wz.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: JW.map((zz => (0, wz.jsx)("button", {
                                  type: "button",
                                  className: Xz()("DocsVariantChip", {
                                    Active: Yz === zs(zz.parts)
                                  }),
                                  onClick: () => {
                                    xz(zz.parts)
                                  },
                                  children: zz.label
                                }, zz.label)))
                              }), (0, wz.jsx)(DW, {
                                parts: sz,
                                className: "DocsTextEditorPreview"
                              }), (0, wz.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, wz.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, wz.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, wz.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [sz.map(((zz, tz) => {
                                      const Fz = Lt(zz);
                                      return (0, wz.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, wz.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${tz}`,
                                          "aria-label": `Edit part ${tz+1}, ${kt[Fz]}`,
                                          onClick: () => {
                                            bz(tz)
                                          },
                                          children: [(0, wz.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: kt[Fz]
                                          }), (0, wz.jsx)(DW, {
                                            parts: [zz],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Fz && (0, wz.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: pt(zz)
                                          })]
                                        }), (0, wz.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, wz.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${tz+1} up`,
                                            "data-focus-key": `up-${tz}`,
                                            disabled: 0 === tz,
                                            onClick: () => {
                                              Iz(tz, -1)
                                            },
                                            children: (0, wz.jsx)(gz, {
                                              name: "chevron-up"
                                            })
                                          }), (0, wz.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${tz+1} down`,
                                            "data-focus-key": `down-${tz}`,
                                            disabled: tz === sz.length - 1,
                                            onClick: () => {
                                              Iz(tz, 1)
                                            },
                                            children: (0, wz.jsx)(gz, {
                                              name: "chevron-down"
                                            })
                                          }), (0, wz.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${tz+1}`,
                                            onClick: () => {
                                              Jz(tz)
                                            },
                                            children: (0, wz.jsx)(gz, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, tz)
                                    })), 0 === sz.length && (0, wz.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, wz.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: zz => {
                                      "Escape" === zz.key && Dz && (zz.stopPropagation(), Hz(!1), Pz({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, wz.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Dz,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        Hz(!Dz)
                                      },
                                      children: [(0, wz.jsx)(gz, {
                                        name: "plus"
                                      }), "Add a part", (0, wz.jsx)(gz, {
                                        name: Dz ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Dz && (0, wz.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: IW.map((zz => (0, wz.jsx)("li", {
                                        children: (0, wz.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (zz => {
                                              xz([...sz, it[zz]]), Hz(!1), bz(sz.length)
                                            })(zz)
                                          },
                                          children: kt[zz]
                                        })
                                      }, zz)))
                                    })]
                                  })]
                                }), (0, wz.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, wz.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, wz.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Kz,
                                      onClick: () => {
                                        uz(!Kz)
                                      },
                                      children: [(0, wz.jsx)(gz, {
                                        name: Kz ? "check" : "pencil"
                                      }), Kz ? "Done" : "Edit"]
                                    })]
                                  }), Kz ? (0, wz.jsxs)(wz.Fragment, {
                                    children: [(0, wz.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Oz,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: zz => {
                                        oz(zz.target.value);
                                        const tz = Ws(zz.target.value);
                                        Uz(tz.error), tz.parts && Wz(tz.parts)
                                      }
                                    }), vz && (0, wz.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: vz
                                    })]
                                  }) : (0, wz.jsx)(mz, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${Yz})`
                                  })]
                                })]
                              }), null !== Nz && Nz < sz.length && (0, wz.jsx)(mW, {
                                parts: sz,
                                index: Nz,
                                fontAwesomeIcons: tz,
                                onChange: zz => {
                                  ((zz, tz) => {
                                    xz(sz.map(((sz, Fz) => Fz === zz ? tz : sz)))
                                  })(Nz, zz)
                                },
                                NJ: () => {
                                  Jz(Nz), bz(null)
                                },
                                onClose: () => {
                                  bz(null), Pz({
                                    key: `edit-${Nz}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var eW = sz(4476),
                            ZW = sz(4464),
                            GW = sz(4472),
                            TW = sz(4479);
                          const cW = 40,
                            jW = 800,
                            AW = 150,
                            yW = 8e3,
                            MW = 2e3;

                          function dW(zz, tz) {
                            return 12 * Math.log2(tz / zz)
                          }

                          function hW(zz, tz) {
                            return Math.round(zz * 2 ** (tz / 12) * 10) / 10
                          }

                          function QW(zz) {
                            return `${zz} ms`
                          }

                          function kW(zz) {
                            return `${zz} st`
                          }
                          const iW = [{
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

                          function LW(zz) {
                            let {
                              synth: tz,
                              onChange: sz
                            } = zz;
                            const Fz = (0, eW.l)(tz);
                            return (0, wz.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, wz.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, wz.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, wz.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, wz.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, wz.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, wz.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: eW.f.map((zz => (0, wz.jsx)("button", {
                                      type: "button",
                                      className: Xz()("DocsVariantChip", {
                                        Active: tz.waveform === zz
                                      }),
                                      "aria-pressed": tz.waveform === zz,
                                      onClick: () => {
                                        sz({
                                          waveform: zz
                                        })
                                      },
                                      children: zz
                                    }, zz)))
                                  })]
                                }), (0, wz.jsx)(tW, {
                                  label: "Pitch",
                                  min: 0,
                                  max: dW(cW, jW),
                                  step: .1,
                                  value: dW(cW, tz.pitchHz),
                                  format: () => `${tz.pitchHz} Hz`,
                                  onChange: zz => {
                                    sz({
                                      pitchHz: hW(cW, zz)
                                    })
                                  }
                                }), (0, wz.jsx)(tW, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: tz.syllableMs,
                                  format: QW,
                                  onChange: zz => {
                                    sz({
                                      syllableMs: zz
                                    })
                                  }
                                }), (0, wz.jsx)(tW, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: tz.volume,
                                  onChange: zz => {
                                    sz({
                                      volume: zz
                                    })
                                  }
                                })]
                              }), (0, wz.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, wz.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, wz.jsx)(tW, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: tz.durationMs,
                                  format: QW,
                                  onChange: zz => {
                                    sz({
                                      durationMs: zz
                                    })
                                  }
                                }), (0, wz.jsx)(tW, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Fz.durationMs,
                                  step: 1,
                                  value: Fz.attackMs,
                                  format: QW,
                                  onChange: zz => {
                                    sz({
                                      attackMs: zz
                                    })
                                  }
                                }), (0, wz.jsx)(tW, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Fz.durationMs - Fz.attackMs,
                                  step: 1,
                                  value: Fz.releaseMs,
                                  format: QW,
                                  onChange: zz => {
                                    sz({
                                      releaseMs: zz
                                    })
                                  }
                                }), (0, wz.jsx)(tW, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: tz.glideSemitones,
                                  format: kW,
                                  onChange: zz => {
                                    sz({
                                      glideSemitones: zz
                                    })
                                  }
                                }), (0, wz.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, wz.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== tz.lowpassHz,
                                    onChange: zz => {
                                      sz({
                                        lowpassHz: zz.target.checked ? MW : null
                                      })
                                    }
                                  }), (0, wz.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== tz.lowpassHz && (0, wz.jsx)(tW, {
                                  label: "Filter",
                                  min: 0,
                                  max: dW(AW, yW),
                                  step: .1,
                                  value: dW(AW, tz.lowpassHz),
                                  format: () => `${tz.lowpassHz} Hz`,
                                  onChange: zz => {
                                    sz({
                                      lowpassHz: hW(AW, zz)
                                    })
                                  }
                                })]
                              }), (0, wz.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, wz.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), iW.map((zz => {
                                  let {
                                    key: Fz,
                                    label: Wz,
                                    max: Xz
                                  } = zz;
                                  return (0, wz.jsx)(tW, {
                                    label: Wz,
                                    min: 0,
                                    max: Xz,
                                    step: .1,
                                    value: tz.intonation[Fz],
                                    format: kW,
                                    onChange: zz => {
                                      sz({
                                        intonation: {
                                          ...tz.intonation,
                                          [Fz]: zz
                                        }
                                      })
                                    }
                                  }, Fz)
                                }))]
                              })]
                            })
                          }
                          const lW = Object.keys(eW.h),
                            nW = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function aW(zz) {
                            var tz;
                            const sz = JSON.stringify((0, eW.l)(zz));
                            return null !== (tz = lW.find((zz => JSON.stringify((0, eW.l)(eW.h[zz])) === sz))) && void 0 !== tz ? tz : null
                          }

                          function qW(zz) {
                            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof zz || null === zz) return JSON.stringify(zz);
                            return `{\n${Object.entries(zz).map((zz=>{let[sz,Fz]=zz;return`${tz}    ${sz}: ${qW(Fz,`${tz}    `)},`})).join("\n")}\n${tz}}`
                          }

                          function SW(zz, tz, sz) {
                            const Fz = aW(zz),
                              Wz = [`    line: ${JSON.stringify(tz)},`];
                            return sz && Wz.push(`    speakerName: ${JSON.stringify(sz)},`), Wz.push("    voice,"), `const voice = ${Fz?JSON.stringify(Fz):qW((0,eW.l)(zz))}\n\napi.setClientOption(playerId, "dialogue", {\n${Wz.join("\n")}\n})`
                          }
                          const VW = 400,
                            RW = 90;
                          let pW = null;

                          function fW(zz, tz, sz) {
                            return pW ??= new AudioContext, pW.resume(), (0, TW.b)(pW, pW.destination, zz, tz, sz, (() => {}))
                          }

                          function EW() {
                            const [zz, tz] = (0, Fz.useState)(eW.h.regular), [sz, Wz] = (0, Fz.useState)(nW[0]), [Oz, oz] = (0, Fz.useState)("Innkeeper"), [vz, Uz] = (0, Fz.useState)(0), Kz = bF((zz => zz.volume)), uz = (0, Fz.useRef)(null), Nz = (0, Fz.useRef)(0), bz = (0, Fz.useRef)(0), Dz = () => {
                              var zz;
                              null === (zz = uz.current) || void 0 === zz || zz.call(uz), uz.current = null
                            };
                            (0, Fz.useEffect)((() => () => {
                              var zz;
                              null === (zz = uz.current) || void 0 === zz || zz.call(uz), window.clearTimeout(Nz.current)
                            }), []);
                            const Hz = (0, Fz.useMemo)((() => ({
                                line: sz,
                                speakerName: Oz || void 0,
                                voice: zz
                              })), [sz, Oz, zz]),
                              Bz = (0, Fz.useRef)(Hz);
                            Bz.current = Hz;
                            const rz = aW(zz),
                              Yz = zz => {
                                window.clearTimeout(Nz.current), Dz();
                                const {
                                  plan: tz,
                                  synth: sz
                                } = (0, GW.f)(zz);
                                sz && (uz.current = fW(sz, tz.blips, Kz)), Uz((zz => zz + 1))
                              },
                              xz = SW(zz, sz, Oz);
                            return (0, wz.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, wz.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, wz.jsxs)("div", {
                                  children: [(0, wz.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, wz.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, wz.jsx)(Pz, {
                                  text: xz,
                                  label: "Copy code"
                                })]
                              }), (0, wz.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [lW.map((zz => (0, wz.jsx)("button", {
                                  type: "button",
                                  className: Xz()("DocsVariantChip", {
                                    Active: rz === zz
                                  }),
                                  "aria-pressed": rz === zz,
                                  onClick: () => {
                                    (zz => {
                                      const sz = eW.h[zz];
                                      tz(sz), Yz({
                                        ...Hz,
                                        voice: sz
                                      })
                                    })(zz)
                                  },
                                  children: zz
                                }, zz))), !rz && (0, wz.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, wz.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, wz.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, wz.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, wz.jsx)(ZW.c, {
                                      display: Hz
                                    }, vz)
                                  }), (0, wz.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: zz => {
                                      zz.preventDefault(), Yz(Hz)
                                    },
                                    children: [(0, wz.jsx)("input", {
                                      value: sz,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: zz => {
                                        Wz(zz.target.value)
                                      }
                                    }), (0, wz.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, wz.jsx)(gz, {
                                        name: "play"
                                      }), (0, wz.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, wz.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: nW.map((zz => (0, wz.jsx)("button", {
                                      type: "button",
                                      className: Xz()("DocsVariantChip", {
                                        Active: sz === zz
                                      }),
                                      onClick: () => {
                                        var tz;
                                        Wz(tz = zz), Yz({
                                          ...Hz,
                                          line: tz
                                        })
                                      },
                                      children: zz
                                    }, zz)))
                                  }), (0, wz.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, wz.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, wz.jsx)("input", {
                                      value: Oz,
                                      placeholder: "No name",
                                      onChange: zz => {
                                        oz(zz.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, wz.jsx)(LW, {
                                  synth: zz,
                                  onChange: sz => {
                                    const Fz = {
                                      ...zz,
                                      ...sz
                                    };
                                    tz(Fz);
                                    const Wz = {
                                        ...Hz,
                                        voice: Fz
                                      },
                                      Xz = performance.now();
                                    if (Xz - bz.current >= RW) {
                                      bz.current = Xz, Dz();
                                      const zz = (0, GW.f)(Wz).plan.blips[0];
                                      zz && (uz.current = fW((0, eW.l)(Fz), [{
                                        ...zz,
                                        atMs: 0
                                      }], Kz))
                                    }
                                    window.clearTimeout(Nz.current), Nz.current = window.setTimeout((() => {
                                      Yz(Bz.current)
                                    }), VW)
                                  }
                                })]
                              }), (0, wz.jsx)(mz, {
                                code: xz,
                                lang: "ts"
                              })]
                            })
                          }
                          var zX = sz(4495);
                          const tX = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            sX = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            FX = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${sX}`, "g"), zX.n],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, zX.n]
                            ];

                          function WX(zz) {
                            return `${zz.pageId}#${zz.anchor}`
                          }
                          let XX, OX, oX;

                          function vX(zz) {
                            const tz = (0, Jz.i)(zz),
                              sz = new Set;
                            for (const [, , Fz] of tz.matchAll(Jz.d)) {
                              const zz = Fz.startsWith("#") ? Lz(Fz) : null,
                                tz = zz ? WX({
                                  pageId: zz.page.id,
                                  anchor: zz.anchor
                                }) : null;
                              null !== tz && (XX || (XX = new Set(Mz.flatMap((zz => Zz(zz.layout) ? kz(zz).sections.map((tz => WX({
                                pageId: zz.id,
                                anchor: tz.heading.anchor
                              }))) : [])))), XX).has(tz) && sz.add(tz)
                            }
                            for (const [, , Fz] of tz.matchAll(tX)) {
                              const zz = Nt(Fz);
                              zz && sz.add(WX(zz))
                            }
                            return sz
                          }

                          function UX(zz, tz) {
                            const sz = new Set,
                              Fz = function(zz) {
                                return zz.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(zz);
                            for (const [, Wz] of Fz.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) sz.add(Wz);
                            for (const [Wz, Xz] of FX)
                              for (const [, zz] of(0, zX.e)(Fz, Wz, Xz)) tz.has(zz) && sz.add(zz);
                            return sz
                          }

                          function KX(zz, tz, sz, Fz) {
                            const Wz = zz.get(tz);
                            Wz ? !Fz && Wz.some((zz => zz.pageId === sz.pageId)) || Wz.push(sz) : zz.set(tz, [sz])
                          }
                          const uX = /^[A-Za-z_$][\w$]*$/;

                          function NX(zz) {
                            return uX.test(zz.name) ? zz.name : "options"
                          }

                          function bX(zz, tz) {
                            const sz = zz.params.map(NX).join(", ");
                            return tz ? `${zz.name} = (${sz}) => {\n\t\n}` : `api.${zz.name}(${sz})`
                          }

                          function wX(zz) {
                            let {
                              method: tz,
                              isCallback: sz
                            } = zz;
                            return (0, wz.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, wz.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [sz ? (0, wz.jsxs)(wz.Fragment, {
                                  children: [(0, wz.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: tz.name
                                  }), (0, wz.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, wz.jsxs)(wz.Fragment, {
                                  children: [(0, wz.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, wz.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: tz.name
                                  }), (0, wz.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), tz.params.map(((zz, sz) => (0, wz.jsxs)(Fz.Fragment, {
                                  children: [sz > 0 && (0, wz.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, wz.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${tz.name}-${NX(zz)}`,
                                    children: zz.name
                                  })]
                                }, zz.name))), (0, wz.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: sz ? ") => " : ")"
                                }), sz && !tz.returns && (0, wz.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), tz.returns && tz.returns.type && (0, wz.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!sz && (0, wz.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, wz.jsx)(It, {
                                  type: tz.returns.type
                                })]
                              })]
                            })
                          }

                          function DX(zz) {
                            let {
                              title: tz,
                              references: sz
                            } = zz;
                            const Wz = (0, Fz.useContext)(bt);
                            return (0, wz.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, wz.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: tz
                              }), sz.map((zz => (0, wz.jsx)(Oz.d, {
                                to: nz(Wz, hz(zz.pageId), zz.anchor),
                                children: zz.label
                              }, `${zz.pageId}#${zz.anchor}`)))]
                            })
                          }

                          function gX(zz) {
                            var tz, sz;
                            let {
                              pageId: Fz,
                              anchor: Wz
                            } = zz;
                            const Xz = WX({
                                pageId: Fz,
                                anchor: Wz
                              }),
                              Oz = null !== (tz = function() {
                                if (!oX) {
                                  oX = new Map;
                                  const Fz = new Set(Mz.filter((zz => "callbacks" === zz.layout)).flatMap((zz => kz(zz).sections.map((zz => zz.heading.text)))));
                                  for (const Wz of Mz)
                                    if ("article" === Wz.layout || "snippets" === Wz.layout)
                                      for (const Xz of (0, Jz.w)(kz(Wz)))
                                        for (const {
                                            code: Oz
                                          }
                                          of(0, Jz.l)(Xz.blocks))
                                          for (const oz of UX(Oz, Fz)) {
                                            const Fz = ut().get(oz);
                                            if (Fz) {
                                              var zz, tz, sz;
                                              const Oz = {
                                                pageId: Wz.id,
                                                anchor: null !== (zz = null === (tz = Xz.heading) || void 0 === tz ? void 0 : tz.anchor) && void 0 !== zz ? zz : "",
                                                label: null !== (sz = Wz.navTitle) && void 0 !== sz ? sz : Wz.title
                                              };
                                              KX(oX, WX(Fz), Oz, !1)
                                            }
                                          }
                                }
                                return oX
                              }().get(Xz)) && void 0 !== tz ? tz : [],
                              oz = null !== (sz = function() {
                                if (!OX) {
                                  OX = new Map;
                                  const zz = hz("changelog");
                                  for (const tz of kz(zz).sections) {
                                    const sz = new Set(tz.blocks.flatMap((zz => [...vX(zz)])));
                                    for (const Fz of sz) {
                                      const sz = {
                                        pageId: zz.id,
                                        anchor: tz.heading.anchor,
                                        label: tz.heading.text
                                      };
                                      KX(OX, Fz, sz, !0)
                                    }
                                  }
                                }
                                return OX
                              }().get(Xz)) && void 0 !== sz ? sz : [];
                            return 0 === Oz.length && 0 === oz.length ? null : (0, wz.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Oz.length > 0 && (0, wz.jsx)(DX, {
                                title: "Used in",
                                references: Oz
                              }), oz.length > 0 && (0, wz.jsx)(DX, {
                                title: "Changelog",
                                references: oz
                              })]
                            })
                          }

                          function HX(zz) {
                            let {
                              method: tz,
                              pageId: sz,
                              anchor: Fz,
                              isCallback: Wz
                            } = zz;
                            const Xz = Wz ? void 0 : ot().get(tz.name),
                              Oz = tz.description.length > 0 || null === Xz || void 0 === Xz || !Xz.description ? tz.description : (0, Jz.A)(Xz.description);
                            return (0, wz.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, wz.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, wz.jsx)(Ks, {
                                  level: 2,
                                  text: tz.name,
                                  anchor: Fz,
                                  className: "DocsCardTitle"
                                }), (0, wz.jsx)(Pz, {
                                  text: bX(tz, Wz),
                                  label: Wz ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, wz.jsx)(wX, {
                                method: tz,
                                isCallback: Wz
                              }), Xz && null !== Xz.deprecation && (0, wz.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, wz.jsx)("strong", {
                                  children: "Deprecated"
                                }), Xz.deprecation && (0, wz.jsxs)(wz.Fragment, {
                                  children: [": ", (0, wz.jsx)(xt, {
                                    text: (oz = Xz.deprecation, (0, zX.v)(oz, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, zX.l)("`\\w"), (zz => {
                                      let [tz] = zz;
                                      return ut().has(tz) ? `\`${tz}\`` : tz
                                    })))
                                  })]
                                })]
                              }), Oz.length > 0 && (0, wz.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, wz.jsx)(ws, {
                                  blocks: Oz
                                })
                              }), tz.params.length > 0 && (0, wz.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, wz.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, wz.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: tz.params.map((zz => (0, wz.jsxs)("div", {
                                    id: `${tz.name}-${NX(zz)}`,
                                    className: "DocsParam",
                                    children: [(0, wz.jsxs)("dt", {
                                      children: [(0, wz.jsx)("code", {
                                        className: "DocsParamName",
                                        children: zz.name
                                      }), (0, wz.jsx)(It, {
                                        type: zz.type
                                      })]
                                    }), zz.description && (0, wz.jsx)("dd", {
                                      children: (0, wz.jsx)(xt, {
                                        text: zz.description
                                      })
                                    })]
                                  }, zz.name)))
                                })]
                              }), tz.returns && (tz.returns.type || tz.returns.description.length > 0) && (0, wz.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, wz.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, wz.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [tz.returns.type && (0, wz.jsx)(It, {
                                    type: tz.returns.type
                                  }), tz.returns.description.length > 0 && (0, wz.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, wz.jsx)(ws, {
                                      blocks: tz.returns.description
                                    })
                                  })]
                                })]
                              }), (0, wz.jsx)(gX, {
                                pageId: sz,
                                anchor: Fz
                              })]
                            });
                            var oz
                          }

                          function BX(zz) {
                            var tz;
                            return null !== zz.defaultValue && "undefined" !== zz.defaultValue ? zz.defaultValue : null !== (tz = zz.example) && void 0 !== tz ? tz : "value"
                          }

                          function PX(zz) {
                            let {
                              setting: tz,
                              pageId: sz,
                              anchor: Fz,
                              setterSnippet: Wz
                            } = zz;
                            const Xz = null === tz.defaultValue ? null : Ht(tz.defaultValue);
                            return (0, wz.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, wz.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, wz.jsx)(Ks, {
                                  level: 2,
                                  text: tz.name,
                                  anchor: Fz,
                                  className: "DocsCardTitle"
                                }), (0, wz.jsx)(Pz, {
                                  text: Wz(tz.name, BX(tz)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, wz.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, wz.jsxs)("div", {
                                  children: [(0, wz.jsx)("dt", {
                                    children: "Type"
                                  }), (0, wz.jsx)("dd", {
                                    children: (0, wz.jsx)(It, {
                                      type: tz.type
                                    })
                                  })]
                                }), null !== tz.defaultValue && (0, wz.jsxs)("div", {
                                  children: [(0, wz.jsx)("dt", {
                                    children: "Default"
                                  }), (0, wz.jsx)("dd", {
                                    children: (0, wz.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Xz && (0, wz.jsx)(Bt, {
                                        colour: Xz
                                      }), tz.defaultValue]
                                    })
                                  })]
                                }), null !== tz.example && (0, wz.jsxs)("div", {
                                  children: [(0, wz.jsx)("dt", {
                                    children: "Example"
                                  }), (0, wz.jsx)("dd", {
                                    children: (0, wz.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: tz.example
                                    })
                                  })]
                                })]
                              }), tz.description.length > 0 && (0, wz.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, wz.jsx)(ws, {
                                  blocks: tz.description
                                })
                              }), (0, wz.jsx)(gX, {
                                pageId: sz,
                                anchor: Fz
                              })]
                            })
                          }

                          function rX(zz) {
                            let {
                              section: tz
                            } = zz;
                            return (0, wz.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, wz.jsx)(Ks, {
                                level: 2,
                                text: tz.heading.text,
                                anchor: tz.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, wz.jsx)("div", {
                                className: "DocsProse",
                                children: (0, wz.jsx)(ws, {
                                  blocks: tz.blocks
                                })
                              })]
                            })
                          }

                          function YX(zz) {
                            let {
                              section: tz
                            } = zz;
                            return (0, wz.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, wz.jsx)(Ks, {
                                level: tz.heading.level,
                                text: tz.heading.text,
                                anchor: tz.heading.anchor
                              }), (0, wz.jsx)(ws, {
                                blocks: tz.blocks
                              })]
                            })
                          }
                          const xX = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function mX(zz) {
                            let {
                              page: tz,
                              section: sz
                            } = zz;
                            if ("methods" === tz.layout || "callbacks" === tz.layout) return (0, wz.jsx)(HX, {
                              method: Is(sz),
                              pageId: tz.id,
                              anchor: sz.heading.anchor,
                              isCallback: "callbacks" === tz.layout
                            });
                            if ("settings" === tz.layout) {
                              const zz = function(zz) {
                                const tz = {
                                  name: zz.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Fz of zz.blocks) {
                                  var sz;
                                  if (ms(Fz)) continue;
                                  const zz = "paragraph" === Fz.kind ? Fz.text.match(Cs) : null;
                                  if (!zz) {
                                    tz.description.push(Fz);
                                    continue
                                  }
                                  const Wz = null !== (sz = xs(zz[2])) && void 0 !== sz ? sz : zz[2];
                                  "Type" === zz[1] ? tz.type = Wz : "Default" === zz[1] ? tz.defaultValue = Wz : "" !== Wz && (tz.example = Wz)
                                }
                                return tz.type ? tz : null
                              }(sz);
                              if (zz) return (0, wz.jsx)(PX, {
                                setting: zz,
                                pageId: tz.id,
                                anchor: sz.heading.anchor,
                                setterSnippet: tz.setterSnippet
                              })
                            }
                            return "snippets" === tz.layout ? (0, wz.jsx)(rX, {
                              section: sz
                            }) : "changelog" === tz.layout ? (0, wz.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, wz.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, wz.jsx)(Ks, {
                                  level: 2,
                                  text: sz.heading.text,
                                  anchor: sz.heading.anchor
                                })
                              }), (0, wz.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, wz.jsx)(ws, {
                                  blocks: es(sz.blocks)
                                })
                              })]
                            }) : tz.gallery ? (0, wz.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, wz.jsx)(Ks, {
                                level: sz.heading.level,
                                text: sz.heading.text,
                                anchor: sz.heading.anchor
                              }), (0, wz.jsx)(GF, {
                                kind: tz.gallery,
                                content: kz(tz),
                                blocks: sz.blocks
                              })]
                            }) : (0, wz.jsx)(YX, {
                              section: sz
                            })
                          }

                          function JX(zz) {
                            let {
                              page: tz,
                              onTocChange: sz
                            } = zz;
                            const Wz = kz(tz),
                              [Xz, Oz] = (0, Fz.useState)(""),
                              oz = "article" !== tz.layout,
                              vz = Hs(tz.gallery) ? tz.gallery : null,
                              Uz = null !== vz,
                              Kz = Xz.trim().toLowerCase(),
                              uz = (0, Fz.useRef)(null),
                              Nz = (0, Fz.useCallback)((zz => {
                                var tz;
                                null === (tz = uz.current) || void 0 === tz || tz.preview(zz)
                              }), []),
                              bz = (0, Fz.useMemo)((() => {
                                if (!tz.hasParticlePlayground) return [];
                                const zz = cs(Wz.intro).find((zz => "names" === zz.kind && !zz.names.some((zz => null !== Ls(zz.name)))));
                                return "names" === (null === zz || void 0 === zz ? void 0 : zz.kind) ? zz.names.map((zz => zz.name)) : []
                              }), [tz, Wz]),
                              Dz = (0, Fz.useMemo)((() => {
                                if (!tz.hasTextPlayground) return [];
                                const zz = Wz.sections.flatMap((zz => zz.blocks.flatMap((zz => {
                                  var tz;
                                  return (null !== (tz = Ts(zz)) && void 0 !== tz ? tz : []).flatMap((zz => Qt(zz.name) ? [zz.name] : []))
                                }))));
                                return [...new Set(zz)]
                              }), [tz, Wz]),
                              gz = (0, Fz.useMemo)((() => Kz ? Wz.sections.filter((zz => function(zz, tz) {
                                return !!zz.heading.text.toLowerCase().includes(tz) || zz.blocks.some((zz => (0, Jz.i)(zz).toLowerCase().includes(tz)))
                              }(zz, Kz))) : Wz.sections), [Wz, Kz]),
                              Hz = (0, Fz.useMemo)((() => function(zz, tz) {
                                return "article" !== zz.layout ? tz.map((zz => ({
                                  anchor: zz.heading.anchor,
                                  text: zz.heading.text,
                                  level: 2
                                }))) : tz.flatMap((zz => {
                                  const tz = zz.blocks.flatMap((zz => "heading" === zz.kind && 3 === zz.level ? [{
                                    anchor: zz.anchor,
                                    text: zz.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: zz.heading.anchor,
                                    text: zz.heading.text,
                                    level: 2
                                  }, ...tz]
                                }))
                              }(tz, gz)), [tz, gz]);
                            return (0, Fz.useEffect)((() => {
                              sz(Hz)
                            }), [Hz, sz]), (0, wz.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, wz.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, wz.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: Wz.title || tz.title
                                }), (0, wz.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: tz.summary
                                }), (0, wz.jsx)(pF, {
                                  page: tz
                                }), oz && (0, wz.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, wz.jsxs)("span", {
                                    children: [(0, wz.jsx)("strong", {
                                      children: Wz.sections.length
                                    }), " ", xX[tz.layout]]
                                  })
                                })]
                              }), "" === tz.slug && (0, wz.jsx)(cF, {}), vz && (0, wz.jsx)(MF, {
                                kind: vz
                              }, vz), tz.hasParticlePlayground && (0, wz.jsx)(KW, {
                                ref: uz,
                                textures: bz
                              }), !Uz && Wz.intro.length > 0 && (0, wz.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: tz.gallery ? (0, wz.jsx)(rF.Provider, {
                                  value: tz.hasParticlePlayground ? Nz : null,
                                  children: (0, wz.jsx)(GF, {
                                    kind: tz.gallery,
                                    content: Wz,
                                    blocks: Wz.intro
                                  })
                                }) : (0, wz.jsx)(ws, {
                                  blocks: es(Wz.intro)
                                })
                              }), tz.hasTextPlayground && (0, wz.jsx)(CW, {
                                fontAwesomeIcons: Dz
                              }), tz.hasVoicePlayground && (0, wz.jsx)(EW, {}), tz.childPageIds && (0, wz.jsx)(cF, {
                                cards: tz.childPageIds.map((zz => ({
                                  pageId: zz
                                }))),
                                label: tz.title
                              }), oz && (0, wz.jsx)(rs, {
                                className: "DocsFilterBar",
                                value: Xz,
                                placeholder: `Filter ${Wz.sections.length} ${xX[tz.layout]}\u2026`,
                                label: `Filter ${xX[tz.layout]}`,
                                onChange: Oz,
                                count: Kz ? {
                                  visible: gz.length,
                                  total: Wz.sections.length
                                } : null
                              }), !Uz && (0, wz.jsxs)("div", {
                                className: `DocsSections Layout-${tz.layout}`,
                                children: [gz.map((zz => (0, wz.jsx)(mX, {
                                  page: tz,
                                  section: zz
                                }, zz.heading.anchor))), 0 === gz.length && (0, wz.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", xX[tz.layout], " match \u201c", Xz, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const IX = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function CX(zz) {
                            let {
                              entry: tz,
                              isActive: sz,
                              onNavigate: Fz,
                              label: Wz,
                              children: Oz
                            } = zz;
                            return (0, wz.jsx)("a", {
                              href: `#${tz.anchor}`,
                              "aria-label": Wz,
                              className: Xz()(`Level${tz.level}`, {
                                Active: sz
                              }),
                              "aria-current": sz ? "location" : void 0,
                              onClick: zz => {
                                zz.preventDefault(), Fz(tz.anchor)
                              },
                              children: Oz
                            })
                          }

                          function eX(zz) {
                            let {
                              toc: tz,
                              activeAnchor: sz,
                              onNavigate: Wz
                            } = zz;
                            const Oz = Math.max(0, tz.findIndex((zz => zz.anchor === sz))),
                              oz = (0, Fz.useRef)(null),
                              vz = (0, Fz.useRef)(!1);
                            (0, Fz.useEffect)((() => {
                              var zz, sz;
                              const Fz = null === (zz = oz.current) || void 0 === zz ? void 0 : zz.closest(".DocsToc"),
                                Wz = null === (sz = oz.current) || void 0 === sz ? void 0 : sz.querySelector(".DocsTimelineNotch.Active");
                              if (!Fz || !Wz) return;
                              let Xz = 0;
                              if (Oz === tz.length - 1) Xz = Fz.scrollHeight;
                              else if (Oz > 0) {
                                const zz = Fz.getBoundingClientRect(),
                                  tz = Wz.getBoundingClientRect();
                                Xz = Fz.scrollTop + tz.top + tz.height / 2 - (zz.top + Fz.clientHeight / 2)
                              }
                              Fz.scrollTo({
                                top: Xz,
                                behavior: vz.current ? "smooth" : "auto"
                              }), vz.current = !0
                            }), [Oz, tz.length]);
                            const Uz = [];
                            return tz.forEach(((zz, tz) => {
                              var sz, Fz, Wz;
                              const Xz = function(zz) {
                                  const tz = zz.trim().match(IX);
                                  return tz ? {
                                    day: tz[1],
                                    month: `${tz[2]} ${tz[3]}`
                                  } : null
                                }(zz.text),
                                Oz = null !== (sz = null === Xz || void 0 === Xz ? void 0 : Xz.month) && void 0 !== sz ? sz : null;
                              null !== Oz && (null === (Fz = Uz.at(-1)) || void 0 === Fz ? void 0 : Fz.month) === Oz || Uz.push({
                                month: Oz,
                                entries: []
                              }), Uz.at(-1).entries.push({
                                entry: zz,
                                day: null !== (Wz = null === Xz || void 0 === Xz ? void 0 : Xz.day) && void 0 !== Wz ? Wz : null,
                                index: tz
                              })
                            })), (0, wz.jsx)("ol", {
                              ref: oz,
                              className: "DocsTimeline",
                              children: Uz.map((zz => {
                                let {
                                  month: tz,
                                  entries: sz
                                } = zz;
                                return (0, wz.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [tz && (0, wz.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: tz
                                  }), (0, wz.jsx)("ol", {
                                    children: sz.map((zz => {
                                      let {
                                        entry: tz,
                                        day: sz,
                                        index: Fz
                                      } = zz;
                                      return (0, wz.jsx)("li", {
                                        className: Xz()("DocsTimelineNotch", {
                                          Passed: Fz < Oz,
                                          Active: Fz === Oz
                                        }),
                                        children: (0, wz.jsx)(CX, {
                                          entry: tz,
                                          isActive: Fz === Oz,
                                          onNavigate: Wz,
                                          label: tz.text,
                                          children: (0, wz.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== sz && void 0 !== sz ? sz : tz.text
                                          })
                                        })
                                      }, tz.anchor)
                                    }))
                                  })]
                                }, sz[0].entry.anchor)
                              }))
                            })
                          }

                          function ZX(zz) {
                            let {
                              isChangelog: tz,
                              toc: sz,
                              activeAnchor: Fz,
                              onNavigate: Wz
                            } = zz;
                            return 0 === sz.length ? null : (0, wz.jsxs)(wz.Fragment, {
                              children: [(0, wz.jsx)("div", {
                                className: "DocsTocTitle",
                                children: tz ? "Updates" : "On this page"
                              }), tz ? (0, wz.jsx)(eX, {
                                toc: sz,
                                activeAnchor: Fz,
                                onNavigate: Wz
                              }) : (0, wz.jsx)("ul", {
                                children: sz.map((zz => (0, wz.jsx)("li", {
                                  children: (0, wz.jsx)(CX, {
                                    entry: zz,
                                    isActive: zz.anchor === Fz,
                                    onNavigate: Wz,
                                    children: zz.text.replace(/`/g, "")
                                  })
                                }, zz.anchor)))
                              })]
                            })
                          }
                          const GX = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            TX = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            cX = 20,
                            jX = 10,
                            AX = 40,
                            yX = 120;
                          let MX;

                          function dX(zz) {
                            const tz = zz.gallery;
                            if (!tz) return [];
                            if (Hs(tz)) return function(zz) {
                              return Ps(zz).entries.map((zz => zz.name))
                            }(tz).map((sz => ({
                              page: zz,
                              anchor: ys(tz, sz),
                              title: sz,
                              kind: TX[tz],
                              text: "",
                              listedUnder: zz.title
                            })));
                            const sz = kz(zz);
                            return (0, Jz.w)(sz).flatMap((Fz => {
                              const Wz = Fz.heading ? `${zz.title} \u203a ${Fz.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : zz.title;
                              return ds(tz, sz, Fz.blocks).flatMap((sz => "names" !== sz.kind ? [] : sz.names.map((Fz => {
                                const Xz = sz.isSongs ? "Song" : TX[tz];
                                return {
                                  page: zz,
                                  anchor: Fz.anchor,
                                  title: Fz.name,
                                  kind: Xz,
                                  text: "",
                                  listedUnder: Wz
                                }
                              }))))
                            }))
                          }

                          function hX(zz, tz, sz) {
                            const Fz = zz.title.toLowerCase();
                            let Wz = 0;
                            if (Fz === tz) Wz = 100;
                            else if (Fz.startsWith(tz)) Wz = 80;
                            else if (Fz.includes(tz)) Wz = 60;
                            else if (sz.every((zz => Fz.includes(zz)))) Wz = 45;
                            else {
                              if (!zz.text.toLowerCase().includes(tz)) return 0;
                              Wz = 20
                            }
                            return Wz - Math.min(Fz.length / 10, 9) + ("Page" === zz.kind ? 8 : "Method" === zz.kind ? 3 : 0) - (zz.listedUnder ? cX : 0)
                          }

                          function QX(zz, tz) {
                            const sz = zz.toLowerCase().indexOf(tz),
                              Fz = Math.max(0, sz - yX / 3);
                            return `${Fz>0?"\u2026":""}${zz.slice(Fz,Fz+yX)}${Fz+yX<zz.length?"\u2026":""}`
                          }

                          function kX(zz) {
                            let {
                              text: tz,
                              query: sz
                            } = zz;
                            const Fz = sz ? tz.toLowerCase().indexOf(sz) : -1;
                            return -1 === Fz ? (0, wz.jsx)(wz.Fragment, {
                              children: tz
                            }) : (0, wz.jsxs)(wz.Fragment, {
                              children: [tz.slice(0, Fz), (0, wz.jsx)("mark", {
                                children: tz.slice(Fz, Fz + sz.length)
                              }), tz.slice(Fz + sz.length)]
                            })
                          }

                          function iX(zz) {
                            let {
                              basePath: tz,
                              onClose: sz
                            } = zz;
                            const Wz = (0, oz.u)(),
                              [Oz, vz] = (0, Fz.useState)(""),
                              [Uz, Kz] = (0, Fz.useState)(0),
                              uz = (0, Fz.useRef)(null),
                              Nz = (0, Fz.useRef)(null),
                              bz = Oz.trim().toLowerCase(),
                              Dz = (0, Fz.useMemo)((() => {
                                const zz = (MX || (MX = Mz.flatMap((zz => {
                                  const tz = kz(zz);
                                  return [{
                                    page: zz,
                                    anchor: "",
                                    title: zz.title,
                                    kind: "Page",
                                    text: zz.summary
                                  }, ...tz.sections.flatMap((tz => {
                                    const sz = tz.blocks.filter((zz => "paragraph" === zz.kind)).map(Jz.i).join(" ").replace(/[`*]/g, ""),
                                      Fz = {
                                        page: zz,
                                        anchor: tz.heading.anchor,
                                        title: tz.heading.text.replace(/`/g, ""),
                                        kind: GX[zz.layout],
                                        text: sz
                                      },
                                      Wz = tz.blocks.flatMap((tz => "article" === zz.layout && "heading" === tz.kind && 3 === tz.level ? [{
                                        page: zz,
                                        anchor: tz.anchor,
                                        title: tz.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Fz.title
                                      }] : []));
                                    return [Fz, ...Wz]
                                  })), ...dX(zz)]
                                }))), MX);
                                if (!bz) return zz.filter((zz => "Page" === zz.kind));
                                const tz = bz.split(/\s+/);
                                let sz = 0;
                                return zz.map((zz => ({
                                  entry: zz,
                                  score: hX(zz, bz, tz)
                                }))).filter((zz => zz.score > 0)).sort(((zz, tz) => tz.score - zz.score)).filter((zz => !zz.entry.listedUnder || (sz++, sz <= jX))).slice(0, AX).map((zz => zz.entry))
                              }), [bz]);
                            (0, Fz.useEffect)((() => {
                              Kz(0)
                            }), [bz]), (0, Fz.useEffect)((() => {
                              const zz = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === zz || void 0 === zz || zz.focus()
                              }
                            }), []), (0, Fz.useEffect)((() => {
                              var zz, tz;
                              null === (zz = uz.current) || void 0 === zz || null === (tz = zz.querySelector(".Active")) || void 0 === tz || tz.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Uz]);
                            const Hz = zz => {
                              Wz(nz(tz, zz.page, zz.anchor)), sz()
                            };
                            return (0, wz.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: zz => {
                                zz.target === zz.currentTarget && sz()
                              },
                              children: (0, wz.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: zz => {
                                  zz.target !== Nz.current && zz.preventDefault()
                                },
                                onKeyDown: zz => {
                                  if ("Escape" === zz.key) sz();
                                  else if ("Tab" === zz.key) {
                                    var tz;
                                    zz.preventDefault(), null === (tz = Nz.current) || void 0 === tz || tz.focus()
                                  }
                                },
                                children: [(0, wz.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, wz.jsx)(gz, {
                                    name: "magnifying-glass"
                                  }), (0, wz.jsx)("input", {
                                    ref: Nz,
                                    autoFocus: !0,
                                    value: Oz,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Dz.length > 0 ? `DocsSearchResult-${Uz}` : void 0,
                                    onChange: zz => {
                                      vz(zz.target.value)
                                    },
                                    onKeyDown: zz => {
                                      if ("ArrowDown" === zz.key || "ArrowUp" === zz.key) {
                                        zz.preventDefault();
                                        const tz = "ArrowDown" === zz.key ? 1 : -1;
                                        Kz((Uz + tz + Dz.length) % Math.max(Dz.length, 1))
                                      } else "Enter" === zz.key && Dz[Uz] && Hz(Dz[Uz])
                                    }
                                  }), (0, wz.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, wz.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: uz,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!bz && (0, wz.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Dz.map(((zz, tz) => {
                                    var sz;
                                    return (0, wz.jsxs)("li", {
                                      id: `DocsSearchResult-${tz}`,
                                      role: "option",
                                      "aria-selected": tz === Uz,
                                      className: Xz()("DocsSearchResult", {
                                        Active: tz === Uz
                                      }),
                                      onMouseMove: () => {
                                        Kz(tz)
                                      },
                                      onClick: () => {
                                        Hz(zz)
                                      },
                                      children: [(0, wz.jsx)(gz, {
                                        name: zz.page.icon
                                      }), (0, wz.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, wz.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, wz.jsx)(kX, {
                                            text: zz.title,
                                            query: bz
                                          })
                                        }), zz.text && (0, wz.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, wz.jsx)(kX, {
                                            text: QX(zz.text, bz),
                                            query: bz
                                          })
                                        })]
                                      }), (0, wz.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === zz.kind ? "Page" : null !== (sz = zz.listedUnder) && void 0 !== sz ? sz : `${zz.kind} \xb7 ${zz.page.title}`
                                      })]
                                    }, `${zz.page.id}#${zz.anchor}`)
                                  })), bz && 0 === Dz.length && (0, wz.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Oz, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function LX(zz, tz) {
                            if (tz < 10) return `${zz.toFixed(1)}s`;
                            const sz = Math.floor(zz);
                            return `${Math.floor(sz/60)}:${String(sz%60).padStart(2,"0")}`
                          }

                          function lX() {
                            const zz = bF((zz => zz.track)),
                              tz = bF((zz => zz.volume)),
                              [sz, Wz] = (0, Fz.useState)(0),
                              Oz = (0, Fz.useRef)(WF);
                            if ((0, Fz.useEffect)((() => {
                                if (!zz) return;
                                if (Wz(HF()), "playing" !== zz.status) return;
                                let tz = 0;
                                const sz = () => {
                                  Wz(HF()), tz = requestAnimationFrame(sz)
                                };
                                return tz = requestAnimationFrame(sz), () => {
                                  cancelAnimationFrame(tz)
                                }
                              }), [zz]), !zz) return null;
                            const oz = "paused" !== zz.status,
                              vz = Math.min(sz, zz.duration);
                            return (0, wz.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, wz.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, wz.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": oz ? `Pause ${zz.name}` : `Play ${zz.name}`,
                                  onClick: gF,
                                  children: (0, wz.jsx)(gz, {
                                    name: oz ? "pause" : "play"
                                  })
                                }), (0, wz.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, wz.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, wz.jsx)("code", {
                                      children: zz.name
                                    }), (0, wz.jsx)("span", {
                                      children: zz.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, wz.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, wz.jsx)("span", {
                                      children: LX(vz, zz.duration)
                                    }), (0, wz.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: zz.duration || 1,
                                      step: .01,
                                      value: vz,
                                      disabled: 0 === zz.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${LX(vz,zz.duration)} of ${LX(zz.duration,zz.duration)}`,
                                      onChange: zz => {
                                        const tz = Number(zz.target.value);
                                        ! function(zz) {
                                          var tz;
                                          UF = zz, null === (tz = oF) || void 0 === tz || tz.seek(zz)
                                        }(tz), Wz(tz)
                                      }
                                    }), (0, wz.jsx)("span", {
                                      children: zz.duration > 0 ? LX(zz.duration, zz.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, wz.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, wz.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === tz ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === tz ? BF(Oz.current) : (Oz.current = tz, BF(0))
                                    },
                                    children: (0, wz.jsx)(gz, {
                                      name: "volume",
                                      className: Xz()({
                                        Muted: 0 === tz
                                      })
                                    })
                                  }), (0, wz.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: tz,
                                    "aria-label": "Volume",
                                    onChange: zz => {
                                      BF(Number(zz.target.value))
                                    }
                                  })]
                                }), (0, wz.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var tz;
                                    null === (tz = document.querySelector(`[data-docs-track="${CSS.escape(XF(zz.name,zz.isSong))}"]`)) || void 0 === tz || tz.focus(), PF()
                                  },
                                  children: (0, wz.jsx)(gz, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var nX = sz(44);
                          const aX = "docsTheme",
                            qX = window.matchMedia("(prefers-color-scheme: light)");

                          function SX(zz) {
                            let {
                              theme: tz,
                              onChange: sz
                            } = zz;
                            const Fz = "dark" === tz ? "light" : "dark";
                            return (0, wz.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Fz} theme`,
                              title: `Switch to ${Fz} theme`,
                              onClick: () => {
                                sz(Fz)
                              },
                              children: (0, wz.jsx)(gz, {
                                name: "dark" === tz ? "moon" : "sun"
                              })
                            })
                          }
                          const VX = "https://github.com/Bloxdy/code-api",
                            RX = "https://discord.gg/playbloxd",
                            pX = 180,
                            fX = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function EX(zz) {
                            let {
                              basePath: tz,
                              activePageId: sz,
                              onNavigate: Fz
                            } = zz;
                            return (0, wz.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: dz.map((zz => (0, wz.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, wz.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: zz.title
                                }), zz.pageIds.map((zz => {
                                  var Wz;
                                  const oz = hz(zz);
                                  return (0, wz.jsxs)(Oz.d, {
                                    to: nz(tz, oz),
                                    className: Xz()("DocsNavLink", {
                                      Active: oz.id === sz
                                    }),
                                    "aria-current": oz.id === sz ? "page" : void 0,
                                    onClick: Fz,
                                    children: [(0, wz.jsx)(gz, {
                                      name: oz.icon
                                    }), (0, wz.jsx)("span", {
                                      children: null !== (Wz = oz.navTitle) && void 0 !== Wz ? Wz : oz.title
                                    })]
                                  }, oz.id)
                                }))]
                              }, zz.title)))
                            })
                          }

                          function zO(zz) {
                            let {
                              basePath: tz,
                              pageId: sz
                            } = zz;
                            const Fz = dz.flatMap((zz => zz.pageIds)),
                              Wz = Fz.indexOf(sz),
                              Xz = Wz > 0 ? hz(Fz[Wz - 1]) : null,
                              oz = Wz < Fz.length - 1 ? hz(Fz[Wz + 1]) : null;
                            return (0, wz.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Xz ? (0, wz.jsxs)(Oz.d, {
                                className: "DocsPagerLink Previous",
                                to: nz(tz, Xz),
                                children: [(0, wz.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, wz.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Xz.title
                                })]
                              }) : (0, wz.jsx)("span", {}), oz && (0, wz.jsxs)(Oz.d, {
                                className: "DocsPagerLink Next",
                                to: nz(tz, oz),
                                children: [(0, wz.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, wz.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: oz.title
                                })]
                              })]
                            })
                          }

                          function tO(zz) {
                            let {
                              basePath: tz,
                              embedded: sz = !1
                            } = zz;
                            const {
                              pageSlug: Wz = ""
                            } = (0, oz.C)(), Uz = (0, oz.s)(), Kz = (0, oz.u)(), uz = (Nz = Wz, Mz.find((zz => zz.slug === Nz)));
                            var Nz;
                            const [bz, Dz] = function() {
                              const [zz, tz] = (0, Fz.useState)((() => {
                                const zz = nX.f.getItem(aX);
                                return "dark" === zz || "light" === zz ? zz : null
                              })), [sz, Wz] = (0, Fz.useState)(qX.matches ? "light" : "dark");
                              return (0, Fz.useEffect)((() => {
                                const zz = () => {
                                  Wz(qX.matches ? "light" : "dark")
                                };
                                return qX.addEventListener("change", zz), () => {
                                  qX.removeEventListener("change", zz)
                                }
                              }), []), [null !== zz && void 0 !== zz ? zz : sz, zz => {
                                nX.f.setItem(aX, zz), tz(zz)
                              }]
                            }(), [Hz, Bz] = (0, Fz.useState)(null), [Pz, rz] = (0, Fz.useState)(!1), [Yz, xz] = (0, Fz.useState)(!1), [mz, Iz] = (0, Fz.useState)([]), Cz = function(zz, tz) {
                              const [sz, Wz] = (0, Fz.useState)("");
                              return (0, Fz.useEffect)((() => {
                                if (!tz) return;
                                let sz = 0;
                                const Fz = () => {
                                    var Fz, Xz;
                                    sz = 0;
                                    const Oz = tz.getBoundingClientRect().top + pX;
                                    let oz = null !== (Fz = null === (Xz = zz[0]) || void 0 === Xz ? void 0 : Xz.anchor) && void 0 !== Fz ? Fz : "";
                                    for (const tz of zz) {
                                      const zz = document.getElementById(tz.anchor);
                                      zz && zz.getBoundingClientRect().top <= Oz && (oz = tz.anchor)
                                    }
                                    tz.scrollTop + tz.clientHeight >= tz.scrollHeight - 2 && tz.scrollTop > 0 && zz.length > 0 && (oz = zz[zz.length - 1].anchor), Wz(oz)
                                  },
                                  Xz = () => {
                                    sz || (sz = requestAnimationFrame(Fz))
                                  };
                                return Fz(), tz.addEventListener("scroll", Xz, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(sz), tz.removeEventListener("scroll", Xz)
                                }
                              }), [zz, tz]), sz
                            }(mz, Hz), ez = "" === Wz && Uz.hash ? function(zz) {
                              const tz = (0, Jz.q)(zz);
                              if (iz(hz("welcome"), tz)) return null;
                              const sz = Object.hasOwn(lz, tz) ? lz[tz] : null;
                              if (sz) return {
                                page: hz(sz.pageId),
                                anchor: sz.anchor
                              };
                              const Fz = hz("readme");
                              return iz(Fz, tz) ? {
                                page: Fz,
                                anchor: tz
                              } : Lz(`#${tz}`)
                            }(Uz.hash) : null;
                            (0, Fz.useEffect)((() => (vz.b.set({
                              musicOnFromPage: !1
                            }), () => {
                              vz.b.set({
                                musicOnFromPage: !0
                              }), PF()
                            })), []), (0, Fz.useEffect)((() => {
                              const zz = zz => {
                                const tz = zz.target;
                                if (tz.closest(".DocsTextDialog")) return;
                                const sz = tz.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(tz.tagName);
                                "k" === zz.key && (zz.metaKey || zz.ctrlKey) || "/" === zz.key && !sz ? (zz.preventDefault(), xz(!0)) : "Escape" === zz.key && rz(!1)
                              };
                              return window.addEventListener("keydown", zz), () => {
                                window.removeEventListener("keydown", zz)
                              }
                            }), []);
                            const Zz = (0, Fz.useRef)(null);
                            (0, Fz.useLayoutEffect)((() => {
                              var zz, tz;
                              if (!Hz) return;
                              const sz = Zz.current === Uz.pathname;
                              Zz.current = Uz.pathname;
                              const Fz = (0, Jz.q)(Uz.hash),
                                Wz = Fz ? document.getElementById(Fz) : null;
                              if (null === (zz = Hz.querySelector(".DocsTargeted")) || void 0 === zz || zz.classList.remove("DocsTargeted"), null === Wz || void 0 === Wz || null === (tz = Wz.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === tz || tz.classList.add("DocsTargeted"), Wz) {
                                var Xz;
                                const zz = Wz.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Xz = Wz.closest(".DocsChangelogEntry")) && void 0 !== Xz ? Xz : Wz).scrollIntoView({
                                  block: zz ? "center" : "start",
                                  behavior: sz ? "smooth" : "auto"
                                })
                              } else sz || Hz.scrollTo({
                                top: 0
                              })
                            }), [Hz, Uz.pathname, Uz.hash, Uz.key]);
                            const Gz = (0, Fz.useCallback)((() => {
                                rz(!1)
                              }), []),
                              Tz = (0, Fz.useCallback)((zz => {
                                Kz({
                                  hash: zz
                                })
                              }), [Kz]);
                            if (ez) return (0, wz.jsx)(oz.c, {
                              replace: !0,
                              to: nz(tz, ez.page, ez.anchor)
                            });
                            if (!uz) return (0, wz.jsx)(oz.c, {
                              replace: !0,
                              to: tz
                            });
                            const cz = sz ? "div" : "main";
                            return (0, wz.jsx)(bt.Provider, {
                              value: tz,
                              children: (0, wz.jsx)(wt.Provider, {
                                value: Hz,
                                children: (0, wz.jsxs)("div", {
                                  ref: Bz,
                                  className: Xz()("DocsSite", {
                                    Embedded: sz,
                                    NavOpen: Pz
                                  }),
                                  "data-theme": bz,
                                  children: [(0, wz.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, wz.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Pz ? "Close menu" : "Open menu",
                                      "aria-expanded": Pz,
                                      onClick: () => {
                                        rz(!Pz)
                                      },
                                      children: (0, wz.jsx)(gz, {
                                        name: Pz ? "cross" : "menu"
                                      })
                                    }), (0, wz.jsxs)(Oz.d, {
                                      to: tz,
                                      className: "DocsBrand",
                                      children: [(0, wz.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, wz.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, wz.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, wz.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        xz(!0)
                                      },
                                      children: [(0, wz.jsx)(gz, {
                                        name: "magnifying-glass"
                                      }), (0, wz.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, wz.jsxs)("kbd", {
                                        children: [fX ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, wz.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, wz.jsxs)("a", {
                                        href: RX,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, wz.jsx)(gz, {
                                          name: "discord"
                                        }), (0, wz.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, wz.jsxs)("a", {
                                        href: VX,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, wz.jsx)(gz, {
                                          name: "external-link"
                                        }), (0, wz.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !sz && (0, wz.jsxs)(Oz.d, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, wz.jsx)(gz, {
                                          name: "play"
                                        }), (0, wz.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, wz.jsx)(SX, {
                                        theme: bz,
                                        onChange: Dz
                                      })]
                                    })]
                                  }), (0, wz.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, wz.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, wz.jsx)(EX, {
                                        basePath: tz,
                                        activePageId: uz.id,
                                        onNavigate: Gz
                                      })
                                    }), (0, wz.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Gz
                                    }), (0, wz.jsxs)(cz, {
                                      className: "DocsMain",
                                      children: [(0, wz.jsx)(JX, {
                                        page: uz,
                                        onTocChange: Iz
                                      }, uz.id), (0, wz.jsx)(zO, {
                                        basePath: tz,
                                        pageId: uz.id
                                      })]
                                    }), (0, wz.jsx)("aside", {
                                      className: Xz()("DocsToc", {
                                        Timeline: "changelog" === uz.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, wz.jsx)(ZX, {
                                        isChangelog: "changelog" === uz.layout,
                                        toc: mz,
                                        activeAnchor: Cz,
                                        onNavigate: Tz
                                      })
                                    })]
                                  }), (0, wz.jsx)(lX, {}), Yz && (0, wz.jsx)(iX, {
                                    basePath: tz,
                                    onClose: () => {
                                      xz(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4379: (zz, tz, sz) => {
                          sz.d(tz, {
                            A: () => Nz,
                            d: () => Fz,
                            e: () => Oz,
                            i: () => gz,
                            l: () => Dz,
                            n: () => oz,
                            q: () => Wz,
                            t: () => Xz,
                            w: () => wz,
                            x: () => bz
                          });
                          const Fz = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function Wz(zz) {
                            try {
                              return decodeURIComponent(zz.slice(1))
                            } catch {
                              return zz.slice(1)
                            }
                          }

                          function Xz(zz) {
                            return zz.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Oz = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Fz.source}`, "g");

                          function oz(zz, tz) {
                            return 2 === zz.length ? tz.replace(/^ (.*) $/, "$1") : tz
                          }

                          function vz(zz) {
                            return "" === zz.trim()
                          }

                          function Uz(zz) {
                            const tz = [];
                            for (const sz of zz.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) tz.length > 0 && tz[tz.length - 1].endsWith("\\") ? tz[tz.length - 1] += `|${sz}` : tz.push(sz);
                            return tz.map((zz => zz.trim().replaceAll("\\|", "|")))
                          }
                          const Kz = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function uz(zz) {
                            const tz = [],
                              sz = [{
                                indent: -1,
                                items: tz
                              }];
                            let Fz = null;
                            for (const Wz of zz) {
                              const zz = Wz.match(Kz);
                              if (!zz) {
                                Fz && (Fz.text += ` ${Wz.trim()}`);
                                continue
                              }
                              const tz = zz[1].replace(/\t/g, "  ").length;
                              for (; tz <= sz[sz.length - 1].indent;) sz.pop();
                              Fz = {
                                text: zz[3].trim(),
                                children: []
                              }, sz[sz.length - 1].items.push(Fz), sz.push({
                                indent: tz,
                                items: Fz.children
                              })
                            }
                            return tz
                          }

                          function Nz(zz) {
                            const tz = zz.replace(/\r\n/g, "\n").split("\n"),
                              sz = [];
                            let Fz = 0;
                            for (; Fz < tz.length;) {
                              const zz = tz[Fz];
                              if (vz(zz)) {
                                Fz++;
                                continue
                              }
                              const Wz = zz.match(/^\s*```\s*(\w*)\s*$/);
                              if (Wz) {
                                const zz = [];
                                for (Fz++; Fz < tz.length && !/^\s*```\s*$/.test(tz[Fz]);) zz.push(tz[Fz]), Fz++;
                                Fz++, sz.push({
                                  kind: "code",
                                  lang: Wz[1] || "text",
                                  code: zz.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Oz = zz.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Oz) {
                                const zz = Oz[2].trim();
                                sz.push({
                                  kind: "heading",
                                  level: Oz[1].length,
                                  text: zz,
                                  anchor: Xz(zz)
                                }), Fz++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(zz)) {
                                sz.push({
                                  kind: "rule"
                                }), Fz++;
                                continue
                              }
                              if (zz.trim().startsWith("|") && Fz + 1 < tz.length && /^\s*\|[\s:|-]+\|\s*$/.test(tz[Fz + 1])) {
                                const Wz = Uz(zz),
                                  Xz = [];
                                for (Fz += 2; Fz < tz.length && tz[Fz].trim().startsWith("|");) Xz.push(Uz(tz[Fz])), Fz++;
                                sz.push({
                                  kind: "table",
                                  header: Wz,
                                  rows: Xz
                                });
                                continue
                              }
                              if (zz.startsWith(">")) {
                                const zz = [];
                                for (; Fz < tz.length && tz[Fz].startsWith(">");) zz.push(tz[Fz].replace(/^>\s?/, "")), Fz++;
                                sz.push({
                                  kind: "quote",
                                  blocks: Nz(zz.join("\n"))
                                });
                                continue
                              }
                              if (Kz.test(zz)) {
                                const Wz = [],
                                  Xz = /^\s*\d+\./.test(zz);
                                for (; Fz < tz.length && !vz(tz[Fz]) && (Kz.test(tz[Fz]) || /^\s+\S/.test(tz[Fz]));) Wz.push(tz[Fz]), Fz++;
                                sz.push({
                                  kind: "list",
                                  ordered: Xz,
                                  items: uz(Wz)
                                });
                                continue
                              }
                              const oz = [];
                              for (; Fz < tz.length && !vz(tz[Fz]) && !/^\s*```/.test(tz[Fz]) && !/^#{1,6}\s/.test(tz[Fz]) && !tz[Fz].startsWith(">") && !Kz.test(tz[Fz]) && (!tz[Fz].trim().startsWith("|") || 0 !== oz.length);) oz.push(tz[Fz].trim()), Fz++;
                              0 === oz.length && (oz.push(tz[Fz].trim()), Fz++), sz.push({
                                kind: "paragraph",
                                text: oz.join(" ")
                              })
                            }
                            return sz
                          }

                          function bz(zz) {
                            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const sz = Nz(zz);
                            let Fz = "";
                            const Wz = [],
                              Xz = [],
                              Oz = new Map;
                            for (const Uz of sz) {
                              if ("heading" === Uz.kind) {
                                var oz;
                                const zz = (null !== (oz = Oz.get(Uz.anchor)) && void 0 !== oz ? oz : 0) + 1;
                                Oz.set(Uz.anchor, zz), zz > 1 && (Uz.anchor = `${Uz.anchor}-${zz}`)
                              }
                              if ("heading" === Uz.kind && 1 === Uz.level && !Fz) {
                                Fz = Uz.text;
                                continue
                              }
                              if ("heading" === Uz.kind && Uz.level <= tz) {
                                Xz.push({
                                  heading: Uz,
                                  blocks: []
                                });
                                continue
                              }
                              const zz = Xz.at(-1);
                              zz ? zz.blocks.push(Uz) : Wz.push(Uz)
                            }
                            const vz = zz => {
                              for (;
                                "rule" === (null === (tz = zz.at(-1)) || void 0 === tz ? void 0 : tz.kind);) {
                                var tz;
                                zz.pop()
                              }
                            };
                            vz(Wz);
                            for (const Uz of Xz) vz(Uz.blocks);
                            return {
                              title: Fz,
                              intro: Wz,
                              sections: Xz
                            }
                          }

                          function wz(zz) {
                            return [{
                              heading: null,
                              blocks: zz.intro
                            }, ...zz.sections.map((zz => ({
                              heading: zz.heading,
                              blocks: zz.blocks
                            })))]
                          }

                          function Dz(zz) {
                            return zz.flatMap((zz => "code" === zz.kind ? [zz] : "quote" === zz.kind ? Dz(zz.blocks) : []))
                          }

                          function gz(zz) {
                            switch (zz.kind) {
                              case "heading":
                              case "paragraph":
                                return zz.text;
                              case "code":
                                return zz.code;
                              case "table":
                                return [zz.header, ...zz.rows].map((zz => zz.join(" "))).join(" ");
                              case "list": {
                                const tz = zz => zz.map((zz => `${zz.text} ${tz(zz.children)}`)).join(" ");
                                return tz(zz.items)
                              }
                              case "quote":
                                return zz.blocks.map(gz).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4467: (zz, tz, sz) => {
                          sz.d(tz, {
                            b: () => oz
                          });
                          var Fz = sz(65),
                            Wz = sz(308),
                            Xz = sz(1845),
                            Oz = sz(1087);

                          function oz(zz) {
                            let {
                              text: tz
                            } = zz;
                            const sz = [];
                            let oz = "";
                            return (0, Wz.bc)(tz).forEach(((zz, tz) => {
                              if ("string" === typeof zz || !(0, Xz.f)(zz.icon)) return void(oz += "string" === typeof zz ? zz : zz.icon);
                              const Wz = Math.max(0, oz.trimEnd().search(/\S{1,12}$/));
                              sz.push((0, Oz.jsxs)(Fz.Fragment, {
                                children: [oz.slice(0, Wz), (0, Oz.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [oz.slice(Wz), (0, Oz.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": zz.icon,
                                    children: (0, Oz.jsx)(Xz.c, {
                                      itemName: zz.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, tz)), oz = ""
                            })), sz.push(oz), (0, Oz.jsx)(Oz.Fragment, {
                              children: sz
                            })
                          }
                        }, 4395: (zz, tz, sz) => {
                          sz.d(tz, {
                            e: () => Bz,
                            d: () => Hz
                          });
                          var Fz = sz(65),
                            Wz = sz(1416),
                            Xz = sz(1831),
                            Oz = sz(4402),
                            oz = sz(1087);
                          const vz = (0, Fz.memo)((function(zz) {
                            let {
                              initialParameters: tz
                            } = zz;
                            const sz = (0, Fz.useRef)(null),
                              Wz = (0, Fz.useRef)(null),
                              vz = (0, Fz.useRef)(0),
                              Uz = (0, Fz.useRef)(null),
                              Kz = tz.description,
                              uz = tz.iz,
                              {
                                scale: Nz,
                                rotation: bz
                              } = null !== tz && void 0 !== tz ? tz : {},
                              wz = (0, Oz.d)();
                            return (0, Fz.useEffect)((() => {
                              const zz = wz.onFrame((() => {
                                const zz = wz.getState();
                                if (!zz.isActive || !sz.current || !Wz.current) return;
                                const tz = zz.state;
                                if (sz.current.value = tz.progress, tz.clickCount > vz.current) {
                                  vz.current = tz.clickCount;
                                  const zz = Wz.current;
                                  zz.classList.add("pulse"), Uz.current = setTimeout((() => {
                                    zz.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Uz.current), zz()
                              }
                            }), [wz]), (0, oz.jsx)(oz.Fragment, {
                              children: (0, oz.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Nz && {
                                    "--scale": Nz
                                  },
                                  ...null !== bz && {
                                    "--rotation": `${bz}deg`
                                  }
                                },
                                children: [(0, oz.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: sz
                                }), (0, oz.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: Wz,
                                  children: (0, oz.jsx)(Xz.c, {
                                    text: [{
                                      icon: uz
                                    }]
                                  })
                                }), (0, oz.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, oz.jsx)(Xz.c, {
                                    text: Kz
                                  })
                                })]
                              })
                            })
                          }));
                          var Uz = sz(1020),
                            Kz = sz.n(Uz);
                          const uz = 2 * Math.PI * 90,
                            Nz = (0, Fz.memo)((function(zz) {
                              let {
                                initialParameters: tz
                              } = zz;
                              const sz = (0, Fz.useRef)(null),
                                Wz = (0, Fz.useRef)(null),
                                vz = (0, Fz.useRef)(null),
                                Uz = tz.label,
                                Nz = tz.icon,
                                bz = tz.nz,
                                {
                                  scale: wz,
                                  rotation: Dz,
                                  az: gz
                                } = null !== tz && void 0 !== tz ? tz : {},
                                Hz = (0, Oz.d)();
                              return (0, Fz.useEffect)((() => {
                                const zz = Hz.onFrame((() => {
                                  var zz, tz;
                                  const Fz = Hz.getState();
                                  if (!Fz.isActive || !Wz.current) return;
                                  const Xz = Fz.state,
                                    Oz = null !== (zz = Xz.timeRemaining) && void 0 !== zz ? zz : 0,
                                    oz = null !== (tz = Xz.lz) && void 0 !== tz ? tz : 1,
                                    Uz = uz * (1 - Oz / oz);
                                  Wz.current.style.strokeDashoffset = `${Uz}`, sz.current && (sz.current.style.opacity = Oz > 0 ? "1" : "0"), vz.current && bz && (vz.current.textContent = `${(Oz/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  zz()
                                }
                              }), [Hz, bz]), (0, oz.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: sz,
                                style: {
                                  ...null !== wz && {
                                    "--scale": wz
                                  },
                                  ...null !== Dz && {
                                    "--rotation": `${Dz}deg`
                                  }
                                },
                                children: [(0, oz.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, oz.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, oz.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, oz.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: uz,
                                      ref: Wz
                                    })]
                                  }), (0, oz.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, oz.jsx)(Xz.c, {
                                      text: [{
                                        icon: Nz
                                      }],
                                      className: Kz()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: gz
                                      })
                                    })
                                  })]
                                }), (0, oz.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, oz.jsx)(Xz.c, {
                                    text: Uz,
                                    className: "QTETimedClickLabelText"
                                  }), bz && (0, oz.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: vz
                                  })]
                                })]
                              })
                            })),
                            bz = (0, Fz.memo)((function(zz) {
                              let {
                                initialParameters: tz
                              } = zz;
                              const sz = (0, Fz.useRef)(null),
                                Wz = (0, Fz.useRef)(null),
                                vz = (0, Fz.useRef)(null),
                                Uz = (0, Fz.useRef)(!1),
                                Kz = tz.description,
                                uz = null === tz || void 0 === tz ? void 0 : tz.icon,
                                Nz = (0, Oz.d)();
                              return (0, Fz.useEffect)((() => {
                                const zz = Nz.onFrame((() => {
                                  const zz = Nz.getState();
                                  if (!zz.isActive) return;
                                  const tz = zz.state;
                                  if (sz.current) {
                                    const zz = 100 * (tz.catchZonePosition - tz.Sz / 2);
                                    sz.current.style.left = `${zz}%`, sz.current.style.width = 100 * tz.Sz + "%", tz.isCatching !== Uz.current && (Uz.current = tz.isCatching, tz.isCatching ? sz.current.classList.add("catching") : sz.current.classList.remove("catching"))
                                  }
                                  Wz.current && (Wz.current.style.left = 100 * tz.moverPosition + "%"), vz.current && (vz.current.value = tz.progress)
                                }));
                                return () => {
                                  zz()
                                }
                              }), [Nz]), (0, oz.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, oz.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, oz.jsx)(Xz.c, {
                                    text: Kz
                                  })
                                }), (0, oz.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: vz
                                }), (0, oz.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, oz.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: sz
                                  }), (0, oz.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: Wz,
                                    children: (0, oz.jsx)("span", {
                                      children: uz && (0, oz.jsx)(Xz.c, {
                                        text: [{
                                          icon: uz,
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
                          var wz = sz(580);
                          const Dz = (0, Fz.memo)((function(zz) {
                              let {
                                initialParameters: tz
                              } = zz;
                              const sz = (0, Fz.useRef)(null),
                                Wz = tz.label,
                                vz = tz.tt,
                                {
                                  icon: Uz,
                                  scale: Kz,
                                  rotation: uz
                                } = null !== tz && void 0 !== tz ? tz : {},
                                Nz = 100 * (.5 - vz / 2),
                                bz = 100 * vz,
                                Dz = (0, Oz.d)();
                              return (0, Fz.useEffect)((() => {
                                const zz = Dz.onFrame((() => {
                                  const zz = Dz.getState();
                                  if (!zz.isActive || !sz.current) return;
                                  const tz = zz.state;
                                  sz.current.style.left = 100 * tz.markerPosition + "%"
                                }));
                                return () => {
                                  zz()
                                }
                              }), [Dz]), (0, oz.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, wz.G)(Kz) && {
                                    "--scale": Kz
                                  },
                                  ...!(0, wz.G)(uz) && {
                                    "--rotation": `${uz}deg`
                                  }
                                },
                                children: [Uz && (0, oz.jsx)(Xz.c, {
                                  text: [{
                                    icon: Uz
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, oz.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, oz.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Nz}%`,
                                      width: `${bz}%`
                                    }
                                  }), (0, oz.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: sz
                                  })]
                                }), (0, oz.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, oz.jsx)(Xz.c, {
                                    text: Wz
                                  })
                                })]
                              })
                            })),
                            gz = (0, Fz.memo)((function(zz) {
                              let {
                                initialParameters: tz
                              } = zz;
                              const sz = (0, Fz.useRef)(null),
                                [Wz, vz] = (0, Fz.useState)((() => new Array(tz.Wt).fill("pending"))),
                                [Uz, Kz] = (0, Fz.useState)((() => {
                                  const zz = tz.ot;
                                  return (0, wz.G)(zz) || zz <= 0 ? [] : new Array(zz).fill("pending")
                                })),
                                uz = tz.label,
                                {
                                  icon: Nz
                                } = tz,
                                bz = (0, Fz.useRef)(0),
                                Dz = (0, Fz.useRef)(0),
                                gz = (0, Fz.useRef)([]),
                                Hz = (0, Oz.d)();
                              return (0, Fz.useEffect)((() => {
                                const zz = Hz.onFrame((() => {
                                  const zz = Hz.getState();
                                  if (!zz.isActive || !sz.current) return;
                                  const tz = zz.state,
                                    Fz = 30 + 60 * tz.outerCircleProgress;
                                  if (sz.current.setAttribute("r", String(Fz)), !0 === tz.lastClickResult && tz.successes > bz.current) {
                                    sz.current.classList.remove("QTERhythmClickOuterCircle--miss"), sz.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const zz = setTimeout((() => {
                                      var zz;
                                      null === (zz = sz.current) || void 0 === zz || zz.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    gz.current.push(zz)
                                  } else if (!1 === tz.lastClickResult && tz.misses > Dz.current) {
                                    sz.current.classList.remove("QTERhythmClickOuterCircle--hit"), sz.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const zz = setTimeout((() => {
                                      var zz;
                                      null === (zz = sz.current) || void 0 === zz || zz.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    gz.current.push(zz)
                                  }
                                  tz.successes === bz.current && tz.misses === Dz.current || (bz.current = tz.successes, Dz.current = tz.misses, vz((zz => {
                                    const sz = [...zz];
                                    for (let Fz = 0; Fz < tz.Wt; Fz++) sz[Fz] = Fz < tz.successes ? "success" : "pending";
                                    return sz
                                  })), Kz((zz => {
                                    if (0 === zz.length) return zz;
                                    const sz = [...zz];
                                    for (let Fz = 0; Fz < sz.length; Fz++) sz[Fz] = Fz < tz.misses ? "miss" : "pending";
                                    return sz
                                  })))
                                }));
                                return () => {
                                  zz();
                                  for (const zz of gz.current) clearTimeout(zz);
                                  gz.current = []
                                }
                              }), [Hz]), (0, oz.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, oz.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Wz.map(((zz, tz) => (0, oz.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === zz ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, tz)))
                                }), (0, oz.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, oz.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, oz.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, oz.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: sz
                                    })]
                                  }), Nz && (0, oz.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, oz.jsx)(Xz.c, {
                                      text: [{
                                        icon: Nz
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Uz.length > 0 && (0, oz.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Uz.map(((zz, tz) => (0, oz.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === zz ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, tz)))
                                }), (0, oz.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, oz.jsx)(Xz.c, {
                                    text: uz
                                  })
                                })]
                              })
                            }));

                          function Hz(zz) {
                            let {
                              qte: tz
                            } = zz;
                            switch (tz.type) {
                              case "progressBar":
                                return (0, oz.jsx)(vz, {
                                  initialParameters: tz.parameters
                                });
                              case "timedClick":
                                return (0, oz.jsx)(Nz, {
                                  initialParameters: tz.parameters
                                });
                              case "gravityBar":
                                return (0, oz.jsx)(bz, {
                                  initialParameters: tz.parameters
                                });
                              case "precisionBar":
                                return (0, oz.jsx)(Dz, {
                                  initialParameters: tz.parameters
                                });
                              case "rhythmClick":
                                return (0, oz.jsx)(gz, {
                                  initialParameters: tz.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Bz = (0, Fz.memo)((function() {
                            const [zz, tz] = (0, Fz.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, Wz.g)("qteStateUpdated", (zz => {
                              tz(zz)
                            })), zz.isActive && zz.type ? (0, oz.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, oz.jsx)(Hz, {
                                qte: zz
                              })
                            }) : null
                          }))
                        }, 4402: (zz, tz, sz) => {
                          sz.d(tz, {
                            b: () => oz,
                            d: () => vz
                          });
                          var Fz = sz(65),
                            Wz = sz(1279),
                            Xz = sz(4411);
                          const Oz = {
                              getState: () => Xz.e.getCurrentState(),
                              onFrame: Wz.o
                            },
                            oz = (0, Fz.createContext)(Oz);

                          function vz() {
                            return (0, Fz.useContext)(oz)
                          }
                        }, 4472: (zz, tz, sz) => {
                          sz.d(tz, {
                            d: () => Az,
                            f: () => jz
                          });
                          var Fz = sz(4476),
                            Wz = sz(308);
                          const Xz = 120,
                            Oz = 260,
                            oz = 1.15,
                            vz = 1.2,
                            Uz = 2,
                            Kz = 1.08,
                            uz = .8,
                            Nz = .95,
                            bz = 8,
                            wz = "[\"')\\]\u300d\u300f\uff09]*",
                            Dz = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${wz}$`),
                            gz = new RegExp(`[?\uff1f]${wz}$`),
                            Hz = new RegExp(`[!\uff01]${wz}$`),
                            Bz = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Pz = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            rz = new RegExp(`[${Pz}]`),
                            Yz = new RegExp(`[${Pz}]|[^${Pz}]+`, "g"),
                            xz = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function mz(zz) {
                            let tz = 2166136261;
                            for (let sz = 0; sz < zz.length; sz++) tz ^= zz.charCodeAt(sz), tz = Math.imul(tz, 16777619);
                            return (tz >>> 0) / 4294967295 * 2 - 1
                          }

                          function Jz(zz) {
                            var tz;
                            if (rz.test(zz)) return 1;
                            const sz = zz.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Fz = sz.replace(/[^0-9]/g, "");
                            if (Fz.length > 0 && !/\p{L}/u.test(sz)) return Math.min(Fz.length, 4);
                            const Wz = null !== (tz = sz.match(xz)) && void 0 !== tz ? tz : [];
                            if (0 === Wz.length) {
                              var Xz, Oz;
                              const zz = null !== (Xz = null === (Oz = sz.match(/\p{L}/gu)) || void 0 === Oz ? void 0 : Oz.length) && void 0 !== Xz ? Xz : 0;
                              return 0 === zz ? 0 : Math.min(Math.max(1, Math.round(zz / 2.5)), bz)
                            }
                            const oz = sz.replace(/[^\p{L}]/gu, ""),
                              vz = Wz.length > 1 && "e" === Wz.at(-1) && oz.endsWith("e") && !oz.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(zz.replace(/[^\p{L}]/gu, ""));
                            return Math.min(Wz.length - (vz ? 1 : 0), bz)
                          }

                          function Iz(zz) {
                            return zz.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Cz(zz) {
                            const tz = zz.replace(/[^\p{L}]/gu, "");
                            return tz.length >= 2 && tz === tz.toUpperCase() && tz !== tz.toLowerCase()
                          }

                          function ez(zz, tz) {
                            var sz;
                            const bz = tz && (0, Fz.l)(tz),
                              wz = null !== (sz = null === bz || void 0 === bz ? void 0 : bz.syllableMs) && void 0 !== sz ? sz : Fz.e,
                              Pz = function(zz) {
                                const tz = [];
                                for (const Fz of (0, Wz.bc)(zz))
                                  if ("string" === typeof Fz)
                                    for (const zz of Fz.split(/(\s+)/)) {
                                      if ("" === zz) continue;
                                      if (/^\s+$/.test(zz)) {
                                        tz.push({
                                          kind: "space",
                                          text: zz
                                        });
                                        continue
                                      }
                                      if (!rz.test(zz)) {
                                        tz.push({
                                          kind: "word",
                                          text: zz,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Fz = !0;
                                      for (const Wz of null !== (sz = zz.match(Yz)) && void 0 !== sz ? sz : []) {
                                        var sz;
                                        const zz = tz.at(-1);
                                        Fz || "word" !== (null === zz || void 0 === zz ? void 0 : zz.kind) || rz.test(Wz) || /[\p{L}\p{N}]/u.test(Wz) ? (Fz || tz.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), tz.push({
                                          kind: "word",
                                          text: Wz,
                                          delayMs: 0
                                        }), Fz = !1) : zz.text += Wz
                                      }
                                    } else tz.push({
                                      kind: "icon",
                                      text: Fz.icon,
                                      delayMs: 0
                                    });
                                return tz
                              }(zz),
                              xz = [];
                            let ez = [];
                            for (const Fz of Pz) "space" !== Fz.kind && (ez.push(Fz), Dz.test(Fz.text) && (xz.push(ez), ez = []));
                            xz.push(ez);
                            const Zz = [];
                            let Gz = 0;
                            for (const Fz of xz) {
                              var Tz, cz;
                              const zz = null !== (Tz = null === (cz = Fz.at(-1)) || void 0 === cz ? void 0 : cz.text) && void 0 !== Tz ? Tz : "",
                                tz = gz.test(zz),
                                sz = Hz.test(zz),
                                Wz = Fz.map((zz => "word" === zz.kind ? Jz(zz.text) : 1)),
                                Pz = Wz.findLastIndex((zz => zz > 0));
                              for (const [gz, Hz] of Fz.entries()) {
                                const zz = "word" === Hz.kind,
                                  Fz = Wz[gz];
                                Hz.delayMs = Gz;
                                for (let Wz = 0; bz && Wz < Fz; Wz++) {
                                  const {
                                    intonation: Xz
                                  } = bz;
                                  let Oz = Pz > 0 ? -Xz.declineSemitones * (gz / Pz) : 0;
                                  Oz += mz(`${Iz(Hz.text)}|${Wz}`) * Xz.variationSemitones;
                                  const Dz = Math.min(1, Xz.variationSemitones);
                                  let Bz = bz.glideSemitones,
                                    rz = 1;
                                  sz && (Oz += Xz.exclaimLiftSemitones, rz *= oz), tz && gz === Pz && (Oz += Xz.questionRiseSemitones * (Fz > 1 ? .5 + .5 * Wz / (Fz - 1) : 1), Wz === Fz - 1 && (Bz = Math.abs(Bz) + Xz.questionRiseSemitones / 2)), zz && Cz(Hz.text) && (Oz += Uz * Dz, rz *= vz), Fz > 1 && 0 === Wz && (Oz += uz * Dz, rz *= Kz), Zz.push({
                                    atMs: Gz + Wz * wz,
                                    semitones: Oz,
                                    glideSemitones: Bz,
                                    durationMs: Wz < Fz - 1 ? Math.min(bz.durationMs, wz * Nz) : bz.durationMs,
                                    level: rz
                                  })
                                }
                                Gz += Fz * wz + (Dz.test(Hz.text) ? Oz : Bz.test(Hz.text) ? Xz : 0)
                              }
                            }
                            return {
                              pieces: Pz.map((zz => "space" === zz.kind ? zz : "icon" === zz.kind ? {
                                kind: "icon",
                                icon: zz.text,
                                delayMs: zz.delayMs
                              } : {
                                kind: "word",
                                text: zz.text,
                                delayMs: zz.delayMs
                              })),
                              blips: Zz
                            }
                          }
                          var Zz = sz(1173),
                            Gz = sz(1237),
                            Tz = sz(1862);

                          function cz(zz) {
                            if ("string" === typeof zz) return zz;
                            const tz = Gz.g.get().getCurrentLanguageCode();
                            return (0, Zz.s)(tz, zz.translationKey, (0, Zz.r)(zz.params, Tz.d.shown))
                          }

                          function jz(zz) {
                            const tz = void 0 === zz.voice ? null : (0, Fz.n)(zz.voice),
                              sz = tz && (0, Fz.l)(tz);
                            return {
                              plan: ez(cz(zz.line), sz),
                              synth: sz
                            }
                          }

                          function Az(zz) {
                            const tz = [];
                            let sz = [];
                            for (const [Wz, Xz] of zz.entries()) {
                              var Fz;
                              "space" === Xz.kind && (" " !== Xz.text || "icon" !== (null === (Fz = zz[Wz + 1]) || void 0 === Fz ? void 0 : Fz.kind)) ? (sz.length > 0 && tz.push(sz), tz.push([Xz]), sz = []) : sz.push(Xz)
                            }
                            return sz.length > 0 && tz.push(sz), tz
                          }
                        }, 4479: (zz, tz, sz) => {
                          sz.d(tz, {
                            b: () => Kz,
                            e: () => uz
                          });
                          var Fz = sz(4488),
                            Wz = sz(30);
                          const Xz = .25,
                            Oz = .85,
                            oz = .02,
                            vz = .01;

                          function Uz(zz, tz, sz, Fz, Wz, Xz, oz) {
                            const {
                              waveform: vz,
                              pitchHz: Uz,
                              attackMs: Kz,
                              releaseMs: uz,
                              lowpassHz: Nz
                            } = sz, bz = Wz + Fz.durationMs / 1e3, wz = Uz * 2 ** (Fz.semitones / 12), Dz = zz.createOscillator();
                            Dz.type = vz, Dz.frequency.setValueAtTime(wz, Wz), Dz.frequency.exponentialRampToValueAtTime(wz * 2 ** (Fz.glideSemitones / 12), bz);
                            const gz = Wz + Math.min(Kz, Fz.durationMs) / 1e3,
                              Hz = zz.createGain();
                            Hz.gain.setValueAtTime(0, Wz), Hz.gain.linearRampToValueAtTime(Xz, gz), Hz.gain.linearRampToValueAtTime(Xz * Oz, Math.max(gz, bz - uz / 1e3)), Hz.gain.linearRampToValueAtTime(0, bz);
                            const Bz = [Dz];
                            if (null !== Nz) {
                              const tz = zz.createBiquadFilter();
                              tz.type = "lowpass", tz.frequency.value = Nz, Bz.push(tz)
                            }
                            Bz.push(Hz, tz);
                            for (let Oz = 1; Oz < Bz.length; Oz++) Bz[Oz - 1].connect(Bz[Oz]);
                            return Dz.onended = () => {
                              for (const zz of Bz.slice(0, -1)) zz.disconnect();
                              oz()
                            }, Dz.start(Wz), Dz.stop(bz), Dz
                          }

                          function Kz(zz, tz, sz, Fz, Wz, Oz) {
                            if (0 === Fz.length) return Oz(), () => {};
                            const Kz = Xz * sz.volume * Wz,
                              uz = zz.createGain();
                            uz.connect(tz);
                            const Nz = zz.currentTime + oz,
                              bz = new Set;
                            for (const Xz of Fz) {
                              const tz = Uz(zz, uz, sz, Xz, Nz + Xz.atMs / 1e3, Kz * Xz.level, (() => {
                                bz.delete(tz), 0 === bz.size && (uz.disconnect(), Oz())
                              }));
                              bz.add(tz)
                            }
                            return () => {
                              const tz = zz.currentTime;
                              uz.gain.setTargetAtTime(0, tz, vz);
                              for (const zz of bz) try {
                                zz.stop(tz + 5 * vz)
                              } catch {}
                            }
                          }

                          function uz(zz, tz) {
                            var sz;
                            const Xz = Fz.Howler.ctx,
                              Oz = Fz.Howler.masterGain;
                            if (!Xz || !Oz || !Wz.b.get("soundOnFromAd")) return () => {};
                            const oz = Fz.Howler;
                            return null === (sz = oz._autoResume) || void 0 === sz || sz.call(oz), Kz(Xz, Oz, zz, tz, Wz.b.get("soundVolume"), (() => {
                              var zz;
                              null === (zz = oz._autoSuspend) || void 0 === zz || zz.call(oz)
                            }))
                          }
                        }, 4488: (zz, tz, sz) => {
                          sz.r(tz), sz.d(tz, {
                            Howl: () => Wz.Howl,
                            Howler: () => Wz.Howler,
                            iosAudio: () => vz,
                            musicOutput: () => gz,
                            readyAudioContext: () => Hz
                          });
                          var Fz, Wz = sz(4491),
                            Xz = sz(106);
                          const Oz = Wz.Howler;
                          let oz;

                          function vz() {
                            return oz ??= "ios" === (0, Xz.getOperatingSystem)(), oz
                          }

                          function Uz() {
                            var zz, tz;
                            if (Oz.ctx || !Oz.usingWebAudio || "undefined" === typeof AudioContext || !vz()) return;
                            const sz = navigator.audioSession;
                            let Fz;
                            "auto" === (null === sz || void 0 === sz ? void 0 : sz.type) && (sz.type = "ambient");
                            try {
                              Fz = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const Wz = Fz.createGain();
                            Wz.gain.setValueAtTime(Oz._muted ? 0 : null !== (zz = Oz._volume) && void 0 !== zz ? zz : 1, Fz.currentTime), Wz.connect(Fz.destination), Oz.ctx = Fz, Oz.masterGain = Wz, null === (tz = Oz._setup) || void 0 === tz || tz.call(Oz)
                          }
                          Oz._mobileUnloaded = !0;
                          const Kz = Oz.volume.bind(Wz.Howler);
                          Oz.volume = function() {
                            return Uz(), Kz(...arguments)
                          };
                          const uz = Oz.mute.bind(Wz.Howler);
                          Oz.mute = zz => (Uz(), uz(zz));
                          const Nz = Wz.Howl.prototype,
                            bz = Nz.init;
                          Nz.init = function(zz) {
                            return Uz(), bz.call(this, zz)
                          };
                          let wz = 0;
                          const Dz = null === (Fz = Oz._autoSuspend) || void 0 === Fz ? void 0 : Fz.bind(Wz.Howler);

                          function gz() {
                            Hz();
                            const {
                              ctx: zz,
                              masterGain: tz
                            } = Oz;
                            return zz && tz ? {
                              ctx: zz,
                              destination: tz,
                              holdAwake: zz => {
                                var tz, sz;
                                (wz += zz ? 1 : -1, zz) ? null === (tz = Oz._autoResume) || void 0 === tz || tz.call(Oz): null === (sz = Oz._autoSuspend) || void 0 === sz || sz.call(Oz)
                              },
                              wake: () => {
                                var tz;
                                "running" !== zz.state && (null === (tz = Oz._autoResume) || void 0 === tz || tz.call(Oz), zz.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function Hz() {
                            var zz;
                            (Oz.volume(), Oz.ctx && Oz.autoUnlock) && (null === (zz = Oz._unlockAudio) || void 0 === zz || zz.call(Oz))
                          }
                          Dz && (Oz._autoSuspend = () => wz > 0 ? Wz.Howler : Dz())
                        }, 4495: (zz, tz, sz) => {
                          function Fz(zz) {
                            return {
                              notAfter: zz
                            }
                          }
                          sz.d(tz, {
                            d: () => vz,
                            e: () => Uz,
                            h: () => oz,
                            l: () => Fz,
                            n: () => Wz,
                            p: () => Xz,
                            s: () => Oz,
                            v: () => Kz,
                            y: () => uz
                          });
                          const Wz = Fz("\\w$."),
                            Xz = Fz("\\w.,");

                          function Oz(zz) {
                            return tz => vz(tz, zz)
                          }

                          function oz(zz) {
                            return tz => !zz.test(tz.input.slice(0, tz.index))
                          }

                          function vz(zz, tz) {
                            return zz.index > 0 && new RegExp(`[${tz}]`).test(zz.input[zz.index - 1])
                          }

                          function Uz(zz, tz, sz) {
                            return function(zz) {
                              return void 0 !== zz && "function" !== typeof zz
                            }(sz) ? function(zz, tz, sz) {
                              const Fz = tz.flags.replace(/[gy]/g, ""),
                                Wz = new RegExp(`[^${sz}](?:${tz.source})`, `${Fz}g`),
                                Xz = [],
                                Oz = sz => {
                                  const Fz = sz.index + sz[0].length;
                                  return ("" === sz[0] ? Nz(zz, tz, Fz) : Fz) - 1
                                },
                                oz = new RegExp(`(?:${tz.source})`, `${Fz}y`).exec(zz);
                              if (oz) {
                                if (Xz.push(oz), !tz.global) return Xz;
                                Wz.lastIndex = Oz(oz)
                              }
                              for (let vz = Wz.exec(zz); vz; vz = Wz.exec(zz)) {
                                const sz = Nz(zz, tz, vz.index) - vz.index;
                                if (vz[0] = vz[0].slice(sz), vz.index += sz, Xz.push(vz), !tz.global) break;
                                Wz.lastIndex = Oz(vz)
                              }
                              return Xz
                            }(zz, tz, sz.notAfter) : function(zz, tz, sz) {
                              const Fz = new RegExp(tz.source, `${tz.flags.replace(/[gy]/g,"")}g`),
                                Wz = [];
                              for (let Xz = Fz.exec(zz); Xz; Xz = Fz.exec(zz))
                                if (!sz || sz(Xz)) {
                                  if (Wz.push(Xz), !tz.global) break;
                                  "" === Xz[0] && (Fz.lastIndex = Nz(zz, tz, Fz.lastIndex))
                                } else Fz.lastIndex = Nz(zz, tz, Xz.index);
                              return Wz
                            }(zz, tz, sz)
                          }

                          function Kz(zz, tz, sz, Fz) {
                            let Wz = "",
                              Xz = 0;
                            for (const Oz of Uz(zz, tz, sz)) Wz += zz.slice(Xz, Oz.index) + Fz(Oz), Xz = Oz.index + Oz[0].length;
                            return Wz + zz.slice(Xz)
                          }

                          function uz(zz, tz, sz) {
                            const Fz = [];
                            let Wz = 0;
                            for (const Xz of Uz(zz, tz, sz)) Fz.push(zz.slice(Wz, Xz.index)), Wz = Xz.index + Xz[0].length;
                            return [...Fz, zz.slice(Wz)]
                          }

                          function Nz(zz, tz, sz) {
                            var Fz;
                            return sz + (tz.unicode && (null !== (Fz = zz.codePointAt(sz)) && void 0 !== Fz ? Fz : 0) > 65535 ? 2 : 1)
                          }
                        }, 4458: (zz, tz, sz) => {
                          sz.d(tz, {
                            c: () => Wz,
                            e: () => vz,
                            h: () => Xz,
                            i: () => Oz,
                            l: () => oz,
                            n: () => gz,
                            o: () => Kz,
                            p: () => uz,
                            q: () => Dz,
                            t: () => bz
                          });
                          var Fz = sz(1536);
                          const Wz = 24e3,
                            Xz = "/docs/llms.txt",
                            Oz = `${Fz.c}${Xz}`,
                            oz = "/llms.txt",
                            vz = "/docs/llms-full.txt";

                          function Uz(zz) {
                            return zz || "index"
                          }

                          function Kz(zz) {
                            return `/docs/${Uz(zz)}.md`
                          }

                          function uz(zz, tz) {
                            return `/docs/${Uz(zz)}/${tz+1}.md`
                          }
                          const Nz = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function bz(zz) {
                            const tz = Nz.exec(zz);
                            return null === tz ? null : {
                              name: tz[1],
                              part: void 0 === tz[2] ? null : Number(tz[2])
                            }
                          }
                          const wz = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Dz(zz) {
                            const tz = wz.exec(zz);
                            if (null === tz) return null;
                            const [, sz = "", Fz] = tz;
                            return void 0 === Fz ? Kz(sz) : uz(sz, Number(Fz) - 1)
                          }

                          function gz(zz) {
                            return `/docsHtml/${Uz(zz)}.html`
                          }
                        }, 4476: (zz, tz, sz) => {
                          sz.d(tz, {
                            e: () => Wz,
                            f: () => Fz,
                            h: () => Xz,
                            l: () => vz,
                            n: () => Oz
                          });
                          const Fz = ["sine", "triangle", "square", "sawtooth"],
                            Wz = 55,
                            Xz = {
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

                          function Oz(zz) {
                            return "string" !== typeof zz ? zz : Object.hasOwn(Xz, zz) ? Xz[zz] : null
                          }

                          function oz(zz, tz, sz) {
                            return Math.min(sz, Math.max(tz, zz))
                          }

                          function vz(zz) {
                            const tz = oz(zz.durationMs, 10, 500),
                              sz = oz(zz.attackMs, 0, tz),
                              {
                                intonation: Wz
                              } = zz;
                            return {
                              waveform: Fz.includes(zz.waveform) ? zz.waveform : "sine",
                              pitchHz: oz(zz.pitchHz, 20, 4e3),
                              glideSemitones: oz(zz.glideSemitones, -24, 24),
                              durationMs: tz,
                              attackMs: sz,
                              releaseMs: oz(zz.releaseMs, 0, tz - sz),
                              lowpassHz: null === zz.lowpassHz ? null : oz(zz.lowpassHz, 20, 2e4),
                              volume: oz(zz.volume, 0, 2),
                              intonation: {
                                variationSemitones: oz(Wz.variationSemitones, 0, 6),
                                declineSemitones: oz(Wz.declineSemitones, 0, 12),
                                questionRiseSemitones: oz(Wz.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: oz(Wz.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: oz(zz.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const zz in modules) Object.freeze(modules[zz]);