export const id = 75;
export const ids = [75, 91];
export const modules = {
    4590: (zz, uz, bz) => {
      bz.d(uz, {
        b: () => Kz,
        f: () => wz
      });
      var Ez = bz(1038),
        nz = bz.n(Ez),
        iz = bz(56),
        lz = bz(1181),
        Mz = bz(4598),
        tz = bz(1846),
        Hz = bz(2313),
        Oz = bz(4601),
        pz = bz(1089);
      const dz = new WeakMap;
      let Fz = 0;

      function Zz(zz) {
        let uz = dz.get(zz);
        return void 0 === uz && (uz = Fz++, dz.set(zz, uz)), uz
      }

      function Rz(zz) {
        let {
          piece: uz
        } = zz;
        return "space" === uz.kind ? (0, pz.jsx)(pz.Fragment, {
          children: uz.text
        }) : (0, pz.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${uz.delayMs}ms`
          },
          children: (0, pz.jsx)(Mz.b, {
            text: "icon" === uz.kind ? `[[${uz.icon}]]` : uz.text
          })
        })
      }

      function Kz(zz) {
        let {
          display: uz
        } = zz;
        const {
          selectedLanguage: bz
        } = (0, lz.F)(), Ez = (0, iz.useMemo)((() => (0, Oz.e)((0, Oz.g)(uz).plan.pieces)), [uz, bz.code]);
        return (0, pz.jsxs)("div", {
          className: nz()("Dialogue", {
            DialogueAnimateIn: !1 !== uz.animateIn
          }),
          children: [uz.speakerName && (0, pz.jsx)(tz.b, {
            text: uz.speakerName,
            className: "DialogueSpeaker"
          }), (0, pz.jsx)("p", {
            className: "DialogueLine",
            children: Ez.map(((zz, uz) => 1 === zz.length && "space" === zz[0].kind ? zz[0].text : (0, pz.jsx)("span", {
              className: "DialogueGlue",
              children: zz.map(((zz, uz) => (0, pz.jsx)(Rz, {
                piece: zz
              }, uz)))
            }, uz)))
          })]
        })
      }
      const wz = (0, iz.memo)((function() {
        const zz = (0, Hz.g)("dialogue");
        return (0, pz.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: zz && (0, pz.jsx)(Kz, {
            display: zz
          }, Zz(zz))
        })
      }))
    },
    4463: (zz, uz, bz) => {
        bz.r(uz), bz.d(uz, {
          default: () => El
        });
        var Ez = bz(56),
          nz = bz(1038),
          iz = bz.n(nz),
          lz = bz(1485),
          Mz = bz(1490),
          tz = bz(20),
          Hz = bz(79),
          Oz = bz(4465),
          pz = bz(4480),
          dz = bz(4483),
          Fz = bz(4139),
          Zz = bz(1089);
        const Rz = "/textures/docs/icons";

        function Kz(zz) {
          let {
            name: uz,
            isTinted: bz,
            className: Ez,
            style: nz
          } = zz;
          const lz = `${Rz}/${uz}.png`;
          return bz ? (0, Zz.jsxs)("span", {
            className: iz()("DocsPixelIcon", "Tinted", Ez),
            "aria-hidden": "true",
            style: nz,
            children: [(0, Zz.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${lz}")`,
                WebkitMaskImage: `url("${lz}")`
              }
            }), (0, Zz.jsx)("img", {
              src: lz,
              alt: ""
            })]
          }) : (0, Zz.jsx)("img", {
            className: iz()("DocsPixelIcon", Ez),
            src: lz,
            alt: "",
            "aria-hidden": "true",
            style: nz
          })
        }
        const wz = 1500;

        function Xz() {
          const [zz, uz] = (0, Ez.useState)(null);
          (0, Ez.useEffect)((() => {
            if (null === zz) return;
            const bz = setTimeout((() => {
              uz(null)
            }), wz);
            return () => {
              clearTimeout(bz)
            }
          }), [zz]);
          return [zz, zz => {
            (0, Fz.b)(zz).then((() => {
              uz({
                text: zz,
                failed: !1
              })
            }), (bz => {
              console.error("Could not copy to the clipboard", bz), uz({
                text: zz,
                failed: !0
              })
            }))
          }]
        }

        function fz(zz) {
          let {
            text: uz,
            label: bz,
            className: Ez
          } = zz;
          const [nz, lz] = Xz(), Mz = !1 === (null === nz || void 0 === nz ? void 0 : nz.failed);
          return (0, Zz.jsxs)("button", {
            type: "button",
            className: iz()("DocsCopyButton", Ez, {
              Copied: Mz
            }),
            title: `Copy ${uz.length>40?"to clipboard":uz}`,
            "aria-label": bz ? void 0 : `Copy ${uz}`,
            onClick: zz => {
              zz.stopPropagation(), lz(uz)
            },
            children: [(0, Zz.jsx)(Kz, {
              name: Mz ? "check" : "copy"
            }), bz && (0, Zz.jsx)("span", {
              children: Mz ? "Copied" : null !== nz && void 0 !== nz && nz.failed ? "Copy failed" : bz
            })]
          })
        }
        Oz.e.registerLanguage("javascript", pz.d), Oz.e.registerLanguage("typescript", dz.e);
        const sz = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          rz = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          oz = 24;

        function Nz(zz) {
          let {
            code: uz,
            lang: bz,
            compact: nz = !1
          } = zz;
          const lz = (0, Ez.useMemo)((() => function(zz, uz) {
              const bz = sz[uz];
              return bz ? Oz.e.highlight(zz, {
                language: bz
              }).value : zz.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(uz, bz)), [uz, bz]),
            Mz = uz.split("\n").length,
            tz = !nz && Mz > oz + 6,
            [Hz, pz] = (0, Ez.useState)(!1),
            dz = sz[bz];
          return (0, Zz.jsxs)("div", {
            className: iz()("DocsCodeBlock", {
              Compact: nz,
              Collapsed: tz && !Hz
            }),
            children: [!nz && (0, Zz.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, Zz.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: dz ? rz[dz] : "Text"
              }), (0, Zz.jsx)(fz, {
                text: uz,
                label: "Copy"
              })]
            }), (0, Zz.jsx)("pre", {
              children: (0, Zz.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: lz
                }
              })
            }), tz && (0, Zz.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Hz,
              onClick: () => {
                pz(!Hz)
              },
              children: [(0, Zz.jsx)(Kz, {
                name: Hz ? "chevron-up" : "chevron-down"
              }), Hz ? "Show less" : `Show all ${Mz} lines`]
            })]
          })
        }
        var vz = bz(4489);
        var xz = bz(4497);
        const Jz = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Az(zz) {
          const uz = new Map;
          let bz, Ez = [],
            nz = !1;
          const iz = () => {
            bz && uz.set(bz.name, bz.lines.join("\n").trimEnd())
          };
          for (const lz of zz.split("\n")) {
            const zz = lz.match(Jz);
            nz || lz.startsWith("/*") ? (nz || (iz(), bz = void 0), Ez.push(lz), nz = !lz.includes("*/")) : zz ? (iz(), bz = {
              name: zz[1],
              lines: [...Ez, lz]
            }, Ez = []) : bz && (lz.startsWith(" ") || lz.startsWith("\t") || /^[}\])|]/.test(lz)) ? bz.lines.push(lz) : bz && "" !== lz.trim() && (iz(), bz = void 0)
          }
          return iz(), uz
        }

        function Tz(zz) {
          return "methods" === zz || "callbacks" === zz || "settings" === zz
        }
        const Lz = {
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
              setterSnippet: (zz, uz) => `api.setClientOption(playerId, "${zz}", ${uz})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (zz, uz) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${zz}", ${uz})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (zz, uz) => `api.setMobSetting(mobId, "${zz}", ${uz})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (zz, uz) => `api.setVehicleSetting(vehicleId, "${zz}", ${uz})`
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
          Pz = {
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

        function Gz(zz) {
          return zz.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function az(zz) {
          let uz = !1;
          return zz.split("\n").map((zz => (zz.startsWith("```") && (uz = !uz), !uz && /^#{3,} /.test(zz) ? zz.slice(1) : zz))).join("\n")
        }

        function Vz(zz) {
          return "readme" === zz ? "getting-started" : Gz(zz)
        }
        const mz = "## Glossary of Referenced Types";
        const qz = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...xz.d.flatMap((zz => {
            const uz = {
              id: zz.id,
              slug: Vz(zz.id),
              title: zz.title,
              markdown: zz.content,
              ...Lz[zz.id]
            };
            if ("readme" === zz.id) return function(zz) {
              const uz = zz.markdown.indexOf(mz),
                bz = zz.markdown.indexOf("\n```", uz),
                Ez = zz.markdown.indexOf("\n```", bz + 1);
              if (-1 === uz || -1 === bz || -1 === Ez) throw new Error(`Getting started has no "${mz}" section with a code block`);
              const nz = zz.markdown.slice(uz + 31, bz).trim(),
                iz = [...Az(zz.markdown.slice(zz.markdown.indexOf("\n", bz + 1) + 1, Ez))].map((zz => {
                  let [uz, bz] = zz;
                  return `## ${uz}\n\n\`\`\`ts\n${bz}\n\`\`\`\n`
                })),
                lz = zz.markdown.slice(zz.markdown.indexOf("\n", Ez + 1) + 1);
              return [{
                ...zz,
                markdown: `${zz.markdown.slice(0,uz)}${lz}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${nz}\n\n${iz.join("\n")}`
              }]
            }(uz);
            if ("howTo" === zz.id) {
              const {
                parent: zz,
                guides: bz
              } = function(zz) {
                const [uz, ...bz] = zz.markdown.split(/^(?=## )/m), Ez = [uz], nz = [];
                for (const lz of bz) {
                  var iz;
                  const uz = lz.indexOf("\n"),
                    bz = lz.slice(3, uz).trim(),
                    Mz = lz.slice(uz + 1);
                  if (!Mz.includes("```")) {
                    Ez.push(lz);
                    continue
                  }
                  const tz = null !== (iz = Pz[bz]) && void 0 !== iz ? iz : {
                    icon: "lightbulb",
                    summary: `How to use ${bz.toLowerCase()} in World Code.`
                  };
                  nz.push({
                    id: `${zz.id}${bz.split(/[^A-Za-z0-9]+/).map((zz=>zz.charAt(0).toUpperCase()+zz.slice(1))).join("")}`,
                    slug: `${zz.slug}-${Gz(bz)}`,
                    title: bz,
                    layout: "article",
                    sourceAnchor: (0, vz.k)(bz),
                    markdown: `# ${bz}\n\n${az(Mz)}`,
                    ...tz
                  })
                }
                return {
                  parent: {
                    ...zz,
                    markdown: Ez.join(""),
                    childPageIds: nz.map((zz => zz.id))
                  },
                  guides: nz
                }
              }(uz);
              return [zz, ...bz]
            }
            return [uz]
          }))],
          hz = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...qz.filter((zz => void 0 !== zz.sourceAnchor)).map((zz => zz.id))]
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

        function Uz(zz) {
          return qz.find((uz => uz.id === zz))
        }
        const cz = new Map;

        function gz(zz) {
          let uz = cz.get(zz.id);
          return uz || (uz = (0, vz.q)(zz.markdown, "changelog" === zz.layout ? 3 : 2), cz.set(zz.id, uz)), uz
        }

        function Sz(zz, uz) {
          return gz(zz).sections.some((zz => zz.heading.anchor === uz || zz.blocks.some((zz => "heading" === zz.kind && zz.anchor === uz))))
        }

        function yz(zz) {
          const [uz, ...bz] = zz.replace(/^#/, "").split("-"), Ez = qz.find((zz => zz.id === uz));
          if (!Ez) return null;
          const nz = bz.length > 0 ? (0, vz.k)(bz.join("-")) : "";
          for (const lz of null !== (iz = Ez.childPageIds) && void 0 !== iz ? iz : []) {
            var iz;
            const zz = Uz(lz);
            if (zz.sourceAnchor === nz) return {
              page: zz,
              anchor: ""
            };
            if (Sz(zz, nz)) return {
              page: zz,
              anchor: nz
            }
          }
          return {
            page: Ez,
            anchor: nz
          }
        }
        const Dz = {
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

        function Qz(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Ez = uz.slug ? `${zz}/${uz.slug}` : zz;
          return bz ? `${Ez}#${bz}` : Ez
        }
        var Wz = bz(4517);
        const ez = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          jz = new Set(["GameApi", "Console", "_TypeOf"]),
          Iz = 4;

        function Bz(zz) {
          let uz = zz.length;
          for (; uz > 0 && "" === zz[uz - 1].trim();) uz--;
          return zz.slice(0, uz)
        }

        function Cz(zz) {
          var uz;
          const bz = Bz(zz);
          if (null === (uz = bz.at(-1)) || void 0 === uz || !uz.trimEnd().endsWith("*/")) return {
            lines: bz,
            doc: ""
          };
          const Ez = bz.findLastIndex((zz => zz.startsWith("/**")));
          return -1 === Ez ? {
            lines: bz,
            doc: ""
          } : {
            lines: Bz(bz.slice(0, Ez)),
            doc: bz.slice(Ez).join("\n")
          }
        }

        function Yz(zz) {
          var uz;
          const bz = zz.split("\n"),
            Ez = bz.flatMap(((zz, uz) => ez.test(zz) ? [uz] : []));
          let nz = Cz(bz.slice(0, null !== (uz = Ez[0]) && void 0 !== uz ? uz : bz.length)).doc;
          return Ez.map(((zz, uz) => {
            var iz;
            const lz = Cz(bz.slice(zz, null !== (iz = Ez[uz + 1]) && void 0 !== iz ? iz : bz.length)),
              Mz = {
                name: bz[zz].match(ez)[1],
                doc: nz,
                lines: lz.lines
              };
            return nz = lz.doc, Mz
          }))
        }

        function kz(zz) {
          var uz;
          const bz = zz.match(/^readonly \[([\s\S]*)\]$/);
          return bz ? null !== (uz = bz[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== uz ? uz : [] : null
        }

        function zu(zz) {
          if (!zz.startsWith("{") || !zz.endsWith("}")) return null;
          const uz = {
              keys: [],
              values: []
            },
            bz = zz => {
              const bz = zz.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              bz && (uz.keys.push(bz[1].startsWith('"') ? bz[1] : `"${bz[1]}"`), uz.values.push(bz[2].trim()))
            };
          let Ez = 0,
            nz = "";
          for (const iz of zz.slice(1, -1)) "{[(".includes(iz) ? Ez++ : "}])".includes(iz) && Ez--, ";" === iz && 0 === Ez ? (bz(nz), nz = "") : nz += iz;
          return bz(nz), uz
        }

        function uu(zz) {
          return zz.length > Iz ? `\n\t| ${zz.join("\n\t| ")}` : zz.join(" | ")
        }

        function bu(zz, uz) {
          const bz = function(zz, uz) {
            return zz.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((zz, bz) => {
              var Ez;
              const nz = null === (Ez = uz.get(bz)) || void 0 === Ez ? void 0 : Ez.object;
              return nz ? uu(nz.values) : zz
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((zz, bz) => {
              var Ez, nz;
              const iz = null === (Ez = uz.get(bz)) || void 0 === Ez || null === (nz = Ez.object) || void 0 === nz ? void 0 : nz.values.map(kz);
              return null !== iz && void 0 !== iz && iz.every((zz => null !== zz)) ? uu([...new Set(iz.flat())]) : zz
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((zz, bz) => {
              var Ez;
              const nz = null === (Ez = uz.get(bz)) || void 0 === Ez ? void 0 : Ez.members;
              return nz ? uu(nz) : zz
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((zz, bz) => {
              var Ez;
              const nz = null === (Ez = uz.get(bz)) || void 0 === Ez ? void 0 : Ez.object;
              return nz ? uu(nz.keys) : zz
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((zz, bz) => {
              var Ez, nz;
              return null !== (Ez = null === (nz = uz.get(bz)) || void 0 === nz ? void 0 : nz.text) && void 0 !== Ez ? Ez : zz
            }))
          }(zz.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), uz);
          return [zz.doc, bz].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Eu(zz) {
          const uz = Yz(zz),
            bz = function(zz) {
              const uz = new Map,
                bz = zz.find((zz => "_TypeOf" === zz.name));
              let Ez = null;
              const nz = () => {
                if (Ez) {
                  const zz = Ez.lines.join("\n");
                  uz.set(Ez.name, {
                    text: zz,
                    members: kz(zz),
                    object: zu(zz)
                  })
                }
              };
              for (const iz of bz.lines.slice(1, -1)) {
                const zz = iz.match(/^\t([\w$]+): (.+)$/);
                zz ? (nz(), Ez = {
                  name: zz[1],
                  lines: [zz[2]]
                }) : Ez && Ez.lines.push(iz.replace(/^\t/, ""))
              }
              return nz(), uz
            }(uz),
            Ez = new Map;
          for (const nz of uz) jz.has(nz.name) || Ez.has(nz.name) || Ez.set(nz.name, bu(nz, bz));
          return Ez
        }
        let nu, iu, lu;

        function Mu() {
          return iu ??= function(zz) {
            const uz = Yz(zz).find((zz => "GameApi" === zz.name)),
              bz = new Map,
              Ez = uz.lines;
            for (let iz = 0; iz < Ez.length; iz++) {
              var nz;
              if (!Ez[iz].trimStart().startsWith("/**")) continue;
              const zz = iz;
              for (; iz < Ez.length && !Ez[iz].includes("*/");) iz++;
              const uz = null === (nz = Ez[iz + 1]) || void 0 === nz ? void 0 : nz.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!uz) continue;
              let lz = null;
              const Mz = [];
              let tz = "description",
                Hz = !1;
              for (const bz of Ez.slice(zz, iz + 1).join("\n").split("\n").map((zz => zz.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const zz = bz.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                zz ? (lz = zz[1].trim(), tz = "deprecation") : bz.startsWith("@") ? (tz = "otherTag", Hz = !0) : "" === bz.trim() ? Hz || (tz = "description", Mz.push(bz)) : "deprecation" !== tz || /^[A-Z]/.test(bz.trim()) ? "otherTag" !== tz && (tz = "description", Mz.push(bz)) : lz = `${lz} ${bz.trim()}`.trim()
              }
              bz.set(uz[1], {
                deprecation: lz,
                description: Mz.join("\n").trim()
              })
            }
            return bz
          }(Wz.default), iu
        }

        function tu() {
          if (!lu) {
            lu = new Map;
            for (const zz of qz) {
              const uz = (0, vz.n)(gz(zz)).flatMap((zz => zz.blocks));
              for (const zz of (0, vz.f)(uz))
                if ("ts" === zz.lang || "typescript" === zz.lang)
                  for (const [uz, bz] of Az(zz.code)) lu.set(uz, bz)
            }
            for (const [zz, uz] of(nu ??= Eu(Wz.default), nu)) lu.has(zz) || lu.set(zz, uz)
          }
          return lu
        }
        const Hu = {
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
        let Ou;

        function pu() {
          if (!Ou) {
            Ou = new Map;
            for (const zz of qz)
              if (Tz(zz.layout))
                for (const uz of gz(zz).sections) Ou.has(uz.heading.text) || Ou.set(uz.heading.text, {
                  pageId: zz.id,
                  anchor: uz.heading.anchor
                })
          }
          return Ou
        }

        function du(zz) {
          const uz = zz.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return uz ? pu().get(uz[1]) : void 0
        }
        const Fu = (0, Ez.createContext)("/docs"),
          Zu = (0, Ez.createContext)(null),
          Ru = (0, Ez.createContext)(!1),
          Ku = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function wu(zz) {
          const uz = zz.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return uz ? uz[1] : null
        }

        function Xu(zz) {
          let {
            colour: uz
          } = zz;
          return (0, Zz.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: uz
            },
            "aria-hidden": "true"
          })
        }

        function fu(zz) {
          const uz = [];
          let bz = 0;
          for (const Ez of zz.matchAll(Ku)) uz.push(zz.slice(bz, Ez.index), (0, Zz.jsx)(Xu, {
            colour: Ez[0]
          }), Ez[0]), bz = Ez.index + Ez[0].length;
          return uz.push(zz.slice(bz)), uz
        }

        function su(zz) {
          let {
            href: uz,
            children: bz
          } = zz;
          const nz = (0, Ez.useContext)(Fu);
          if (uz.startsWith("#")) {
            const zz = yz(uz);
            if (zz) return (0, Zz.jsx)(lz.e, {
              to: Qz(nz, zz.page, zz.anchor),
              children: (0, Zz.jsx)(Ru.Provider, {
                value: !0,
                children: bz
              })
            })
          }
          return (0, Zz.jsx)("a", {
            href: uz,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, Zz.jsx)(Ru.Provider, {
              value: !0,
              children: bz
            })
          })
        }

        function ru(zz) {
          let {
            code: uz
          } = zz;
          const bz = (0, Ez.useContext)(Fu);
          if ((0, Ez.useContext)(Ru)) return (0, Zz.jsx)("code", {
            className: "DocsInlineCode",
            children: uz
          });
          if (tu().has(uz)) return (0, Zz.jsx)(xu, {
            type: uz
          });
          const nz = du(uz);
          if (nz) return (0, Zz.jsx)(lz.e, {
            className: "DocsInlineCode DocsSymbolLink",
            to: Qz(bz, Uz(nz.pageId), nz.anchor),
            children: uz
          });
          const iz = wu(uz);
          return (0, Zz.jsxs)("code", {
            className: "DocsInlineCode",
            children: [iz && (0, Zz.jsx)(Xu, {
              colour: iz
            }), uz]
          })
        }

        function ou(zz) {
          let {
            text: uz
          } = zz;
          const bz = [];
          let nz = 0;
          for (const Ez of uz.matchAll(vz.c)) {
            Ez.index > nz && bz.push(...fu(uz.slice(nz, Ez.index)));
            const [, zz, iz, lz, Mz, tz] = Ez;
            zz ? bz.push((0, Zz.jsx)(ru, {
              code: (0, vz.g)(zz, iz)
            })) : lz ? bz.push((0, Zz.jsx)("strong", {
              children: (0, Zz.jsx)(ou, {
                text: lz
              })
            })) : bz.push((0, Zz.jsx)(su, {
              href: tz,
              children: (0, Zz.jsx)(ou, {
                text: Mz
              })
            })), nz = Ez.index + Ez[0].length
          }
          return nz < uz.length && bz.push(...fu(uz.slice(nz))), (0, Zz.jsx)(Zz.Fragment, {
            children: bz.map(((zz, uz) => (0, Zz.jsx)(Ez.Fragment, {
              children: zz
            }, uz)))
          })
        }
        const Nu = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          vu = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function xu(zz) {
          let {
            type: uz
          } = zz;
          const bz = tu(),
            nz = [];
          for (const Ez of uz.trim().matchAll(Nu)) {
            const [zz, uz, iz, lz, Mz] = Ez;
            uz ? nz.push((0, Zz.jsx)("span", {
              className: "DocsTypeString",
              children: zz
            })) : iz && bz.has(iz) ? nz.push((0, Zz.jsx)(Pu, {
              name: iz,
              definition: bz.get(iz)
            })) : iz ? nz.push((0, Zz.jsx)("span", {
              className: vu.has(iz) ? "DocsTypeKeyword" : "DocsTypeName",
              children: zz
            })) : lz ? nz.push((0, Zz.jsx)("span", {
              className: "DocsTypeNumber",
              children: zz
            })) : Mz ? nz.push(" ") : nz.push((0, Zz.jsx)("span", {
              className: "DocsTypePunctuation",
              children: zz
            }))
          }
          return (0, Zz.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: nz.map(((zz, uz) => (0, Zz.jsx)(Ez.Fragment, {
              children: zz
            }, uz)))
          })
        }
        const Ju = 480,
          Au = 6,
          Tu = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Lu = 0;

        function Pu(zz) {
          let {
            name: uz,
            definition: bz
          } = zz;
          const nz = (0, Ez.useContext)(Fu),
            iz = Hu[uz],
            Mz = (0, Ez.useRef)(null),
            tz = (0, Ez.useRef)(null),
            Oz = (0, Ez.useRef)(null),
            [pz, dz] = (0, Ez.useState)(!1),
            [Fz, Rz] = (0, Ez.useState)(null),
            wz = (0, Ez.useRef)(),
            Xz = (0, Ez.useContext)(Zu),
            [fz] = (0, Ez.useState)((() => "DocsTypePopover-" + Lu++)),
            sz = () => {
              clearTimeout(wz.current), dz(!0)
            },
            rz = () => {
              clearTimeout(wz.current), wz.current = setTimeout((() => {
                dz(!1)
              }), 120)
            };
          return (0, Ez.useEffect)((() => {
            if (!pz) return;
            const zz = zz => {
              if ("Escape" === zz.key) {
                var uz, bz;
                if (null !== (uz = tz.current) && void 0 !== uz && uz.contains(document.activeElement)) null === (bz = Mz.current) || void 0 === bz || bz.focus();
                dz(!1)
              }
            };
            return document.addEventListener("keydown", zz), () => {
              document.removeEventListener("keydown", zz)
            }
          }), [pz]), (0, Ez.useEffect)((() => () => {
            clearTimeout(wz.current)
          }), []), (0, Ez.useLayoutEffect)((() => {
            if (!pz || !Mz.current || !tz.current) return void Rz(null);
            const zz = Mz.current.getBoundingClientRect(),
              uz = tz.current.offsetHeight,
              bz = Math.min(Ju, window.innerWidth - 32),
              Ez = Math.min(Math.max(16, zz.left), window.innerWidth - bz - 16),
              nz = zz.bottom + Au + uz < window.innerHeight;
            Rz({
              left: Ez,
              top: nz ? zz.bottom + Au : Math.max(16, zz.top - Au - uz)
            })
          }), [pz]), (0, Zz.jsxs)(Zz.Fragment, {
            children: [(0, Zz.jsx)("button", {
              type: "button",
              ref: Mz,
              className: "DocsTypeLink",
              "aria-expanded": pz,
              "aria-describedby": pz ? fz : void 0,
              onMouseEnter: sz,
              onMouseLeave: rz,
              onFocus: sz,
              onBlur: rz,
              onKeyDown: zz => {
                "Tab" === zz.key && !zz.shiftKey && Oz.current && (zz.preventDefault(), Oz.current.focus())
              },
              onClick: sz,
              children: uz
            }), pz && (0, Hz.createPortal)((0, Zz.jsxs)("span", {
              ref: tz,
              id: fz,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Fz ? {
                left: Fz.left,
                top: Fz.top,
                maxWidth: Ju
              } : {
                visibility: "hidden"
              },
              onMouseEnter: sz,
              onMouseLeave: rz,
              onFocus: sz,
              onBlur: rz,
              children: [(0, Zz.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, Zz.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: uz
                }), iz && (0, Zz.jsxs)(lz.e, {
                  ref: Oz,
                  className: "DocsTypePopoverLink",
                  to: Qz(nz, Uz(iz)),
                  onClick: () => {
                    dz(!1)
                  },
                  onKeyDown: zz => {
                    if ("Tab" === zz.key) {
                      var uz;
                      if (zz.preventDefault(), zz.shiftKey || !Mz.current || ! function(zz, uz) {
                          const bz = [...document.querySelectorAll(Tu)],
                            Ez = bz.slice(bz.indexOf(zz) + 1).find((zz => zz.getClientRects().length > 0 && !(null !== uz && void 0 !== uz && uz.contains(zz))));
                          return null === Ez || void 0 === Ez || Ez.focus(), void 0 !== Ez
                        }(Mz.current, tz.current)) null === (uz = Mz.current) || void 0 === uz || uz.focus();
                      zz.shiftKey || dz(!1)
                    }
                  },
                  children: [Uz(iz).title, (0, Zz.jsx)(Kz, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, Zz.jsx)(Nz, {
                lang: "ts",
                code: bz,
                compact: !0
              })]
            }), null !== Xz && void 0 !== Xz ? Xz : document.body)]
          })
        }
        var Gu = bz(195),
          au = bz(4524),
          Vu = bz(4531),
          mu = bz(4540);
        const qu = {
          progressBar: {
            Vz: 30,
            mz: .075,
            qz: 5,
            hz: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Sz: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Dz: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Qz: !0,
            scale: 3,
            rotation: 15,
            Wz: !1
          },
          gravityBar: {
            Vz: 30,
            jz: .25,
            Iz: 3,
            Bz: .8,
            gravity: 1,
            Cz: 1.5,
            Yz: 8,
            kz: 4,
            hz: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            uu: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            nu: 5,
            iu: 1200,
            lu: .15,
            Mu: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var hu = bz(316),
          Uu = bz(1934);

        function cu(zz) {
          return zz.startsWith("fa-")
        }
        const gu = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Su = {
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

        function yu(zz) {
          return "string" === typeof zz ? "text" : "entityName" in zz || "translationKey" in zz ? "other" : (0, hu.Kb)(zz) ? "progressBar" : (0, hu.Gb)(zz) ? "keyBinding" : "icon" in zz ? "icon" : "str" in zz && "string" === typeof zz.str ? "text" : "other"
        }
        const Du = [{
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
          Qu = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...Du],
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
                options: Uu.m
              },
              isRequired: !0
            }, ...Du],
            other: []
          };

        function Wu(zz) {
          return "string" === typeof zz ? {
            str: zz
          } : zz
        }

        function eu(zz, uz) {
          let bz = Wu(zz);
          for (const Ez of uz) bz = bz && "object" === typeof bz ? bz[Ez] : void 0;
          return bz
        }

        function ju(zz, uz, bz) {
          const Ez = (zz, nz) => {
            var iz;
            const lz = uz[nz],
              Mz = {
                ...zz
              };
            if (nz === uz.length - 1) return void 0 === bz ? delete Mz[lz] : Mz[lz] = bz, Mz;
            const tz = Ez(null !== (iz = zz[lz]) && void 0 !== iz ? iz : {}, nz + 1);
            return 0 === Object.keys(tz).length ? delete Mz[lz] : Mz[lz] = tz, Mz
          };
          return function(zz) {
            const uz = Object.keys(zz);
            return "string" === typeof zz.str && 1 === uz.length ? zz.str : zz
          }(Ez(Wu(zz), 0))
        }

        function Iu(zz, uz) {
          const bz = yu(zz),
            Ez = Qu[bz].find((zz => zz.path.join(".") === uz.join("."))),
            nz = null !== Ez && void 0 !== Ez && Ez.isRequired && "other" !== bz ? eu(Su[bz], uz) : void 0;
          return ju(zz, uz, nz)
        }

        function Bu(zz) {
          switch (yu(zz)) {
            case "text":
              return String(eu(zz, ["str"]));
            case "icon":
              return String(eu(zz, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(eu(zz,["progress"])))}%`;
            case "keyBinding":
              return String(eu(zz, ["action"]));
            case "other":
              return JSON.stringify(zz)
          }
        }
        const Cu = /^[A-Za-z_$][\w$]*$/;

        function Yu(zz) {
          if (Array.isArray(zz)) return `[${zz.map(Yu).join(", ")}]`;
          if (zz && "object" === typeof zz) {
            const uz = Object.entries(zz).map((zz => {
              let [uz, bz] = zz;
              return `${Cu.test(uz)?uz:JSON.stringify(uz)}: ${Yu(bz)}`
            }));
            return 0 === uz.length ? "{}" : `{ ${uz.join(", ")} }`
          }
          return JSON.stringify(zz)
        }

        function ku(zz) {
          const uz = zz.map(Yu),
            bz = `[${uz.join(", ")}]`;
          return bz.length <= 60 ? bz : `[\n${uz.map((zz=>`    ${zz},`)).join("\n")}\n]`
        }
        const zb = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function ub(zz) {
          let uz = "";
          for (let nz = 0; nz < zz.length; nz++) {
            const iz = zz[nz];
            if ("\\" === iz) {
              var bz;
              const Ez = null !== (bz = zz[nz + 1]) && void 0 !== bz ? bz : "";
              uz += "'" === Ez ? "'" : iz + Ez, nz++
            } else if ('"' === iz) uz += '\\"';
            else {
              var Ez;
              uz += null !== (Ez = zb[iz]) && void 0 !== Ez ? Ez : iz
            }
          }
          return `"${uz}"`
        }

        function bb(zz) {
          if ("string" === typeof zz) return !0;
          if (!zz || "object" !== typeof zz || Array.isArray(zz)) return !1;
          const uz = zz;
          return "ProgressBar" === uz.type ? "number" === typeof uz.progress : "StyledKeyBinding" === uz.type ? Uu.m.includes(uz.action) : "string" === typeof uz.icon || "string" === typeof uz.str || "string" === typeof uz.entityName || "string" === typeof uz.translationKey
        }

        function Eb(zz) {
          let uz;
          try {
            uz = function(zz) {
              let uz = "",
                bz = "",
                Ez = 0;
              const nz = () => {
                uz += bz.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), bz = ""
              };
              for (; Ez < zz.length;) {
                const iz = zz.slice(Ez).search(/["'`]|\/\//);
                if (-1 === iz) {
                  bz += zz.slice(Ez);
                  break
                }
                bz += zz.slice(Ez, Ez + iz);
                const lz = Ez + iz,
                  Mz = zz[lz];
                if ("/" === Mz) {
                  const uz = zz.indexOf("\n", lz);
                  Ez = -1 === uz ? zz.length : uz;
                  continue
                }
                if (nz(), "`" === Mz) throw new Error("Use quotes rather than template strings.");
                let tz = lz + 1;
                for (; tz < zz.length && zz[tz] !== Mz;) tz += "\\" === zz[tz] ? 2 : 1;
                if (tz >= zz.length) throw new Error("A string is missing its closing quote.");
                const Hz = zz.slice(lz + 1, tz);
                uz += ub(Hz), Ez = tz + 1
              }
              return nz(), JSON.parse(uz)
            }(zz.trim())
          } catch (Ez) {
            return {
              parts: null,
              error: Ez instanceof SyntaxError ? "This isn't a valid array yet." : Ez.message
            }
          }
          if (!Array.isArray(uz)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const bz = uz.findIndex((zz => !bb(zz)));
          return -1 !== bz ? {
            parts: null,
            error: `Part ${bz+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: uz,
            error: null
          }
        }
        const nb = 1 / Gu.e.clientTicksPerSecond,
          ib = 700,
          lb = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Mb = {
            progressBar: qu.progressBar.Sz,
            timedClick: qu.timedClick.icon,
            gravityBar: qu.gravityBar.icon,
            precisionBar: qu.precisionBar.icon,
            rhythmClick: qu.rhythmClick.icon
          };

        function tb(zz) {
          let {
            type: uz
          } = zz;
          const [bz, nz] = (0, Ez.useState)("ready"), [lz, Mz] = (0, Ez.useState)(1), [tz, Hz] = (0, Ez.useState)(!0), Oz = (0, Ez.useRef)(null), pz = (0, Ez.useRef)(null), dz = (0, Ez.useRef)(null), Fz = (0, Ez.useRef)(new Set), Rz = (0, Ez.useRef)(!1), wz = Mb[uz], Xz = (0, Ez.useMemo)((() => ({
            getState: () => {
              var zz, uz;
              return null !== (zz = null === (uz = dz.current) || void 0 === uz ? void 0 : uz.getState()) && void 0 !== zz ? zz : lb
            },
            onFrame: zz => (Fz.current.add(zz), () => {
              Fz.current.delete(zz)
            })
          })), []);
          (0, Ez.useEffect)((() => {
            const zz = Oz.current,
              uz = pz.current;
            if (!zz || !uz) return;
            const bz = new ResizeObserver((() => {
              Mz(zz.clientWidth / Math.max(1, uz.offsetWidth))
            }));
            return bz.observe(zz), () => {
              bz.disconnect()
            }
          }), []), (0, Ez.useEffect)((() => {
            var zz;
            if ("playing" !== bz) return;
            let Ez = !1;
            const iz = new mu.f[uz](qu[uz], (zz => {
              Ez = !0, Hz(!1), nz(zz ? "succeeded" : "failed")
            }), (() => {}));
            dz.current = iz;
            let lz = 0,
              Mz = performance.now(),
              tz = requestAnimationFrame((function zz(uz) {
                for (lz += Math.min(.25, (uz - Mz) / 1e3), Mz = uz; lz >= nb && !Ez;) lz -= nb, iz.handleTick(nb);
                for (const bz of Fz.current) bz();
                Ez || (tz = requestAnimationFrame(zz))
              }));
            return null === (zz = Oz.current) || void 0 === zz || zz.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(tz), iz.tearDown(), dz.current = null, Rz.current = !1
            }
          }), [bz, uz]), (0, Ez.useEffect)((() => {
            if (tz) return;
            const zz = setTimeout((() => {
              Hz(!0)
            }), ib);
            return () => {
              clearTimeout(zz)
            }
          }), [tz]);
          const fz = zz => {
            var uz;
            "playing" === bz && Rz.current !== zz && (Rz.current = zz, null === (uz = dz.current) || void 0 === uz || uz.handleMouseInput(zz))
          };
          return (0, Zz.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, Zz.jsxs)("div", {
              ref: Oz,
              className: iz()("DocsQteStage", {
                Playing: "playing" === bz
              }),
              tabIndex: "playing" === bz ? 0 : -1,
              role: "playing" === bz ? "button" : void 0,
              "aria-label": "playing" === bz ? `${uz} quick time event: click or press Space` : void 0,
              onPointerDown: zz => {
                0 === zz.button && fz(!0)
              },
              onPointerUp: () => {
                fz(!1)
              },
              onPointerLeave: () => {
                fz(!1)
              },
              onPointerCancel: () => {
                fz(!1)
              },
              onKeyDown: zz => {
                "playing" !== bz || " " !== zz.key && "Enter" !== zz.key || (zz.preventDefault(), fz(!0))
              },
              onKeyUp: zz => {
                "playing" !== bz || " " !== zz.key && "Enter" !== zz.key || fz(!1)
              },
              children: [(0, Zz.jsx)("div", {
                ref: pz,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${lz})`
                },
                children: "playing" === bz && (0, Zz.jsx)(Vu.e.Provider, {
                  value: Xz,
                  children: (0, Zz.jsx)(au.b, {
                    qte: {
                      type: uz,
                      parameters: qu[uz]
                    }
                  })
                })
              }), "playing" !== bz && (0, Zz.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== bz && (0, Zz.jsxs)("div", {
                  className: iz()("DocsQteResult", "succeeded" === bz ? "Succeeded" : "Failed"),
                  children: [(0, Zz.jsx)(Kz, {
                    name: "succeeded" === bz ? "check" : "cross",
                    isTinted: !0
                  }), (0, Zz.jsx)("span", {
                    children: "succeeded" === bz ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, Zz.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !tz,
                  onClick: () => {
                    nz("playing")
                  },
                  children: [(0, Zz.jsx)(Kz, {
                    name: "ready" === bz ? "play" : "replay"
                  }), (0, Zz.jsx)("span", {
                    children: "ready" === bz ? `Try ${uz}` : "Play again"
                  })]
                })]
              })]
            }), wz && !cu(wz) && (0, Zz.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, Zz.jsx)("code", {
                children: wz
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Hb(zz) {
          let {
            level: uz,
            text: bz,
            anchor: Ez,
            className: nz
          } = zz;
          const lz = `h${Math.min(uz,6)}`;
          return (0, Zz.jsxs)(lz, {
                id: Ez,
                className: iz()("DocsHeading", nz),
                children: [(0, Zz.jsx)(ou, {
                      text: bz
                    }), (0, Zz.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Ez}`,
                        "aria-label": `Link to ${bz.replace(/`/g,"")}`,children:"#"})]})}function Ob(zz){let{items:uz,ordered:bz}=zz;const Ez=bz?"ol":"ul";return(0,Zz.jsx)(Ez,{className:"DocsList",children:uz.map(((zz,uz)=>(0,Zz.jsxs)("li",{children:[(0,Zz.jsx)(ou,{text:zz.text}),zz.children.length>0&&(0,Zz.jsx)(Ob,{items:zz.children,ordered:bz})]},uz)))})}function pb(zz){const uz=zz[0],bz="paragraph"===(null===uz||void 0===uz?void 0:uz.kind)?uz.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(bz)?"warning":/^\*\*(tip|prefer)/.test(bz)?"tip":"note"}function db(zz){let{block:uz}=zz;switch(uz.kind){case"heading":return(0,Zz.jsx)(Hb,{level:uz.level,text:uz.text,anchor:uz.anchor});case"paragraph":return(0,Zz.jsx)("p",{children:(0,Zz.jsx)(ou,{text:uz.text})});case"code":{const zz="ts"===uz.lang?function(zz){const uz=zz.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return uz&&Object.hasOwn(qu,uz[1])?uz[1]:null}(uz.code):null;return(0,Zz.jsxs)(Zz.Fragment,{children:[(0,Zz.jsx)(Nz,{code:uz.code,lang:uz.lang}),zz&&(0,Zz.jsx)(tb,{type:zz})]})}case"table":return(0,Zz.jsx)("div",{className:"DocsTableScroll",children:(0,Zz.jsxs)("table",{className:"DocsTable",children:[(0,Zz.jsx)("thead",{children:(0,Zz.jsx)("tr",{children:uz.header.map(((zz,uz)=>(0,Zz.jsx)("th",{children:(0,Zz.jsx)(ou,{text:zz})},uz)))})}),(0,Zz.jsx)("tbody",{children:uz.rows.map(((zz,uz)=>(0,Zz.jsx)("tr",{children:zz.map(((zz,uz)=>(0,Zz.jsx)("td",{children:(0,Zz.jsx)(ou,{text:zz})},uz)))},uz)))})]})});case"list":return(0,Zz.jsx)(Ob,{items:uz.items,ordered:uz.ordered});case"quote":return(0,Zz.jsx)("aside",{className:iz()("DocsCallout",pb(uz.blocks)),children:(0,Zz.jsx)(Fb,{blocks:uz.blocks})});case"rule":return(0,Zz.jsx)("hr",{className:"DocsRule"})}}function Fb(zz){let{blocks:uz}=zz;return(0,Zz.jsx)(Zz.Fragment,{children:uz.map(((zz,uz)=>(0,Zz.jsx)(db,{block:zz},uz)))})}var Zb=bz(4503),Rb=bz(4509);function Kb(zz){return"blocks"===zz||"items"===zz}const wb=new Map;function Xb(zz){let uz=wb.get(zz);return uz||(uz=function(zz){const uz={entries:[],legend:[],notes:[],examples:[]};let bz=!1;for(const iz of zz.split(/\r?\n/).slice(1)){if(iz.startsWith("#")){const zz=iz.replace(/^# ?/,""),Ez=zz.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Ez?uz.legend.push({code:Ez[1],meaning:Ez[2],usage:Ez[3].trim()}):/^Examples:/.test(zz.trim())?bz=!0:bz&&zz.trim()?uz.examples.push(zz.trim()):zz.trim()&&!/^\s/.test(zz)&&uz.notes.push(zz.trim());continue}const zz=iz.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Ez,nz;zz&&uz.entries.push({name:zz[1],variants:null!==(Ez=null===(nz=zz[2])||void 0===nz?void 0:nz.split(","))&&void 0!==Ez?Ez:[]})}return uz}("blocks"===zz?Zb:Rb),wb.set(zz,uz)),uz}function fb(zz){let{className:uz,value:bz,placeholder:Ez,label:nz,onChange:iz,count:lz,children:Mz}=zz;return(0,Zz.jsxs)("div",{className:uz,children:[(0,Zz.jsx)(Kz,{name:"magnifying-glass"}),(0,Zz.jsx)("input",{type:"search",value:bz,placeholder:Ez,"aria-label":nz,onChange:zz=>{iz(zz.target.value)}}),Mz,lz&&(0,Zz.jsxs)("span",{className:"DocsFilterCount",children:[lz.visible," of ",lz.total]})]})}var sb=bz(1047);function rb(zz){const uz=zz.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return uz?uz[2]:null}function ob(zz){return"paragraph"===zz.kind&&""===zz.text.trim()}function Nb(zz){const uz={name:zz.heading.text,description:[],params:[],returns:null};let bz="description";for(const nz of zz.blocks)if(!ob(nz))if("heading"===nz.kind&&/^Parameters:?$/.test(nz.text))bz="params";else if("heading"===nz.kind&&/^Returns:?$/.test(nz.text))bz="returns",uz.returns={type:"",description:[]};else if("params"!==bz||"table"!==nz.kind){if("returns"===bz&&"paragraph"===nz.kind&&""===uz.returns.type){const zz=rb(nz.text);if(null!==zz){uz.returns.type=zz.replaceAll("\\|","|");continue}}"returns"===bz?uz.returns.description.push(nz):uz.description.push(nz)}else for(const[zz,bz,iz]of nz.rows){var Ez;uz.params.push({name:zz,type:null!==(Ez=rb(bz))&&void 0!==Ez?Ez:bz,description:null!==iz&&void 0!==iz?iz:""})}return uz}const vb=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function xb(zz){return zz.filter((zz=>!ob(zz)))}const Jb=/^[\w][\w .'&!:()-]*$/,Ab=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Tb(zz){var uz;if("code"===zz.kind&&"text"===zz.lang){const uz=zz.code.split("\n").map((zz=>zz.trim())).filter(Boolean);return uz.length>0&&uz.every((zz=>Jb.test(zz)))?uz.map((zz=>({name:zz}))):null}return"paragraph"===zz.kind&&Ab.test(zz.text.trim())?[...zz.text.matchAll(/`([ ^ `]+)` / g)].flatMap((zz => zz[1].split(/,\s*/).map((zz => ({
                              name: zz.trim()
                            }))))): "table" === zz.kind && null !== (uz = zz.header[0]) && void 0 !== uz && uz.startsWith("Song") ? zz.rows.map((zz => {
                              let [uz, bz] = zz;
                              return {
                                name: uz.replace(/`/g, ""),
                                caption: bz
                              }
                            })) : null
                          }

                          function Lb(zz) {
                            const uz = [];
                            for (const bz of zz) {
                              const zz = Tb(bz),
                                Ez = uz.at(-1),
                                nz = "table" === bz.kind;
                              zz ? "names" === (null === Ez || void 0 === Ez ? void 0 : Ez.kind) && Ez.isSongs === nz ? Ez.names.push(...zz) : uz.push({
                                kind: "names",
                                names: zz,
                                isSongs: nz
                              }) : uz.push({
                                kind: "block",
                                block: bz
                              })
                            }
                            return uz
                          }
                          const Pb = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Gb(zz, uz) {
                            return `${Pb[zz]}-${(0,vz.k)(uz)}`
                          }
                          const ab = new WeakMap;

                          function Vb(zz, uz, bz) {
                            let Ez = ab.get(uz);
                            if (!Ez) {
                              Ez = new Map;
                              const bz = new Set;
                              for (const nz of (0, vz.n)(uz)) {
                                const uz = Lb(xb(nz.blocks)).map((uz => {
                                  if ("block" === uz.kind) return uz;
                                  return {
                                    kind: "names",
                                    names: uz.names.map((uz => {
                                      var Ez, iz;
                                      const lz = Gb(zz, uz.name);
                                      let Mz = lz;
                                      for (let zz = 2; bz.has(Mz); zz++) Mz = `${lz}-${zz}`;
                                      return bz.add(Mz), {
                                        ...uz,
                                        anchor: Mz,
                                        heading: null !== (Ez = null === (iz = nz.heading) || void 0 === iz ? void 0 : iz.text) && void 0 !== Ez ? Ez : ""
                                      }
                                    })),
                                    isSongs: uz.isSongs
                                  }
                                }));
                                Ez.set(nz.blocks, uz)
                              }
                              ab.set(uz, Ez)
                            }
                            const nz = Ez.get(bz);
                            if (!nz) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return nz
                          }
                          const mb = "/textures/docs/skinPreviews",
                            qb = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var hb = bz(4018),
                            Ub = bz(4035);

                          function cb(zz) {
                            return Object.hasOwn(hb.e, zz) ? hb.e[zz] : null
                          }
                          const gb = {
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
                            blendMode: Ub.d.Standard
                          };

                          function Sb(zz, uz, bz) {
                            return uz + (bz - uz) * zz()
                          }

                          function yb(zz, uz, bz) {
                            return zz + (uz - zz) * bz
                          }

                          function Db(zz) {
                            return zz.length > 0 && "timeFraction" in zz[0]
                          }

                          function Qb(zz, uz) {
                            if (0 === zz.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Db(zz.colorGradients)) {
                              const bz = zz.colorGradients,
                                {
                                  color: Ez
                                } = bz[Math.floor(uz() * bz.length) % bz.length];
                              return [{
                                at: 0,
                                colour: [Ez[0] / 255, Ez[1] / 255, Ez[2] / 255, 1]
                              }]
                            }
                            return [...zz.colorGradients].sort(((zz, uz) => zz.timeFraction - uz.timeFraction)).map((zz => {
                              var bz, Ez, nz;
                              const iz = zz.minColor,
                                lz = null !== (bz = zz.maxColor) && void 0 !== bz ? bz : iz,
                                Mz = uz(),
                                tz = [yb(iz[0], lz[0], Mz) / 255, yb(iz[1], lz[1], Mz) / 255, yb(iz[2], lz[2], Mz) / 255, yb(null !== (Ez = iz[3]) && void 0 !== Ez ? Ez : 1, null !== (nz = lz[3]) && void 0 !== nz ? nz : 1, Mz)];
                              return {
                                at: zz.timeFraction,
                                colour: tz
                              }
                            }))
                          }

                          function Wb(zz, uz, bz, Ez) {
                            const nz = Sb(Ez, zz.minEmitPower, zz.maxEmitPower),
                              iz = uz => Sb(Ez, Math.min(zz.dir1[uz], zz.dir2[uz]), Math.max(zz.dir1[uz], zz.dir2[uz])) * nz,
                              lz = [...zz.velocityGradients].sort(((zz, uz) => zz.timeFraction - uz.timeFraction)).map((zz => ({
                                at: zz.timeFraction,
                                factor: Sb(Ez, zz.factor, zz.factor2)
                              })));
                            return {
                              pos: [Sb(Ez, uz[0], bz[0]), Sb(Ez, uz[1], bz[1]), Sb(Ez, uz[2], bz[2])],
                              dir: [iz(0), iz(1), iz(2)],
                              age: 0,
                              life: Sb(Ez, zz.minLifeTime, zz.maxLifeTime),
                              size: Sb(Ez, zz.minSize, zz.maxSize),
                              colours: Qb(zz, Ez),
                              velocityFactors: lz
                            }
                          }

                          function eb(zz, uz, bz, Ez) {
                            if (uz < zz[0].at) return bz(Math.min(1, zz.length - 1));
                            for (let nz = 0; nz < zz.length - 1; nz++)
                              if (uz <= zz[nz + 1].at) {
                                const iz = zz[nz + 1].at - zz[nz].at;
                                return Ez(bz(nz), bz(nz + 1), iz > 0 ? (uz - zz[nz].at) / iz : 1)
                              } return bz(zz.length - 1)
                          }

                          function jb(zz) {
                            return eb(zz.colours, zz.age / zz.life, (uz => zz.colours[uz].colour), ((zz, uz, bz) => [yb(zz[0], uz[0], bz), yb(zz[1], uz[1], bz), yb(zz[2], uz[2], bz), yb(zz[3], uz[3], bz)]))
                          }

                          function Ib(zz, uz, bz) {
                            if (zz.age += bz, zz.age >= zz.life) return !1;
                            const Ez = function(zz) {
                              return 0 === zz.velocityFactors.length ? 1 : eb(zz.velocityFactors, zz.age / zz.life, (uz => zz.velocityFactors[uz].factor), yb)
                            }(zz) * bz;
                            for (let iz = 0; iz < 3; iz++) {
                              var nz;
                              zz.pos[iz] += zz.dir[iz] * Ez, zz.dir[iz] += (null !== (nz = uz[iz]) && void 0 !== nz ? nz : 0) * bz
                            }
                            return !0
                          }

                          function Bb(zz) {
                            return String(Math.round(1e6 * zz) / 1e6)
                          }

                          function Cb(zz) {
                            return `[${zz.map(Bb).join(", ")}]`
                          }

                          function Yb(zz, uz) {
                            const bz = `${uz}    `;
                            return `[\n${(Db(zz)?zz.map((zz=>{const uz=[`${bz}    timeFraction: ${Bb(zz.timeFraction)},`,`${bz}    minColor: ${Cb(zz.minColor)},`];return zz.maxColor&&uz.push(`${bz}    maxColor: ${Cb(zz.maxColor)},`),`${bz}{\n${uz.join("\n")}\n${bz}},`})):zz.map((zz=>`
                            $ {
                              bz
                            } {
                              color: $ {
                                Cb(zz.color)
                              }
                            }, `))).join("\n")}\n${uz}]`
                          }
                          const kb = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            zE = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const uE = .6;

                          function bE(zz, uz) {
                            return `${uz?"song":"sound"}:${zz}`
                          }
                          let EE = {
                              track: null,
                              volume: uE
                            },
                            nE = null,
                            iE = 0,
                            lE = 0;
                          const ME = new Set;

                          function tE(zz) {
                            EE = {
                              ...EE,
                              ...zz
                            }, ME.forEach((zz => {
                              zz()
                            }))
                          }

                          function HE(zz) {
                            EE.track && tE({
                              track: {
                                ...EE.track,
                                ...zz
                              }
                            })
                          }

                          function OE(zz) {
                            const [uz, bz] = (0, Ez.useState)((() => zz(EE))), nz = (0, Ez.useRef)(zz);
                            return nz.current = zz, (0, Ez.useEffect)((() => {
                              const zz = () => {
                                bz((() => nz.current(EE)))
                              };
                              return ME.add(zz), zz(), () => {
                                ME.delete(zz)
                              }
                            }), []), uz
                          }

                          function pE() {
                            iE++;
                            const zz = nE;
                            nE = null, null === zz || void 0 === zz || zz.stop()
                          }

                          function dE(zz, uz) {
                            let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            pE();
                            const nz = iE,
                              {
                                track: iz
                              } = EE,
                              lz = iz && iz.name === zz && iz.isSong === uz ? iz.duration : 0;
                            lE = Ez, tE({
                              track: {
                                name: zz,
                                isSong: uz,
                                status: "loading",
                                duration: lz
                              }
                            }), Promise.all([bz.e(215), bz.e(239)]).then((() => bz(38987))).then((bz => {
                              let {
                                playDocsSound: iz
                              } = bz;
                              nz === iE && (nE = iz(zz, uz, EE.volume, Ez, {
                                onPlay: zz => {
                                  nz === iE && HE({
                                    status: "playing",
                                    duration: zz
                                  })
                                },
                                onEnd: zz => {
                                  var uz, bz;
                                  nz === iE && (nE = null, zz ? tE({
                                    track: null
                                  }) : (lE = null !== (uz = null === (bz = EE.track) || void 0 === bz ? void 0 : bz.duration) && void 0 !== uz ? uz : 0, HE({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((uz => {
                              console.error(`Could not play docs sound ${zz}`, uz), nz === iE && tE({
                                track: null
                              })
                            }))
                          }

                          function FE() {
                            const {
                              track: zz
                            } = EE;
                            if (!zz) return;
                            if ("playing" === zz.status && nE) return lE = nE.Gs(), nE.pause(), void HE({
                              status: "paused"
                            });
                            if ("loading" === zz.status) return pE(), void HE({
                              status: "paused"
                            });
                            if (nE) return void nE.resume();
                            const uz = zz.duration > 0 && lE >= zz.duration - .05;
                            dE(zz.name, zz.isSong, uz ? 0 : lE)
                          }

                          function ZE() {
                            var zz;
                            return nE && "playing" === (null === (zz = EE.track) || void 0 === zz ? void 0 : zz.status) ? nE.Gs() : lE
                          }

                          function RE(zz) {
                            var uz;
                            null === (uz = nE) || void 0 === uz || uz.setVolume(zz), tE({
                              volume: zz
                            })
                          }

                          function KE() {
                            pE(), lE = 0, tE({
                              track: null
                            })
                          }
                          const wE = (0, Ez.createContext)(null);
                          let XE = null;

                          function fE() {
                            const [zz, uz] = (0, Ez.useState)(null);
                            return (0, Ez.useEffect)((() => {
                              let zz = !1;
                              return XE ??= Promise.all([bz.e(69), bz.e(72), bz.e(71), bz.e(70), bz.e(196), bz.e(96), bz.e(220)]).then((() => bz(38983))), XE.then((bz => {
                                zz || uz(bz)
                              }), (zz => {
                                console.error("Could not load the docs gallery's textures", zz), XE = null
                              })), () => {
                                zz = !0
                              }
                            }), []), zz
                          }
                          const sE = 24,
                            rE = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function oE(zz, uz) {
                            const bz = "skins" === zz ? function(zz, uz) {
                              const bz = qb.find((uz => zz.startsWith(uz.heading)));
                              return bz ? function(zz, uz) {
                                return `${zz}-${uz}`
                              }(bz.prefix, uz) : null
                            }(uz.heading, uz.name) : null;
                            return null === bz ? null : `${mb}/${bz}.webp`
                          }

                          function NE(zz) {
                            let {
                              kind: uz,
                              entry: bz,
                              assets: nz,
                              renderedUrl: lz
                            } = zz;
                            const {
                              name: Mz
                            } = bz, [tz, Hz] = (0, Ez.useState)(!1);
                            if ("icons" === uz && cu(Mz)) return (0, Zz.jsx)(sb.c, {
                              className: "DocsTileIcon",
                              name: Mz
                            });
                            let Oz = null;
                            var pz;
                            if ("icons" === uz) Oz = null !== (pz = null === nz || void 0 === nz ? void 0 : nz.getIngameIconUrl(Mz)) && void 0 !== pz ? pz : null;
                            else if ("particles" === uz) {
                              var dz, Fz, Rz;
                              Oz = null !== (dz = null === nz || void 0 === nz ? void 0 : nz.getParticleTextureUrl(null !== (Fz = null === (Rz = cb(Mz)) || void 0 === Rz ? void 0 : Rz.texture) && void 0 !== Fz ? Fz : Mz)) && void 0 !== dz ? dz : null
                            } else "skins" === uz && (Oz = null !== lz && void 0 !== lz ? lz : rE.test(Mz) ? `/textures/charSkins/previews/${Mz}_preview.png` : null);
                            return !Oz || tz ? (0, Zz.jsx)(Kz, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === uz ? "person" : "image"
                            }) : (0, Zz.jsx)("img", {
                              className: iz()("DocsTileImage", {
                                Pixelated: "skins" !== uz
                              }),
                              src: Oz,
                              srcSet: Oz === lz ? `${Oz} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Oz}`), Hz(!0)
                              }
                            })
                          }

                          function vE(zz) {
                            let {
                              entry: uz,
                              isSong: bz
                            } = zz;
                            const Ez = OE((zz => {
                                let {
                                  track: Ez
                                } = zz;
                                return (null === Ez || void 0 === Ez ? void 0 : Ez.name) === uz.name && Ez.isSong === bz ? Ez.status : null
                              })),
                              nz = null !== Ez && "paused" !== Ez;
                            return (0, Zz.jsxs)("button", {
                              type: "button",
                              id: uz.anchor,
                              className: iz()("DocsSoundTile", {
                                Playing: nz
                              }),
                              "data-docs-track": bE(uz.name, bz),
                              "aria-label": nz ? `Pause ${uz.name}` : `Play ${uz.name}`,
                              onClick: () => {
                                null !== Ez ? FE() : dE(uz.name, bz)
                              },
                              children: [(0, Zz.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, Zz.jsx)(Kz, {
                                  name: nz ? "pause" : "play"
                                })
                              }), (0, Zz.jsx)("code", {
                                className: "DocsSoundName",
                                children: uz.name
                              }), uz.caption && (0, Zz.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: uz.caption
                              })]
                            })
                          }

                          function xE(zz) {
                            let {
                              kind: uz,
                              names: bz,
                              isSongs: nz
                            } = zz;
                            const lz = fE(),
                              [Mz, tz] = Xz(),
                              Hz = !1 === (null === Mz || void 0 === Mz ? void 0 : Mz.failed) ? Mz.text : null,
                              Oz = (0, Ez.useContext)(wE),
                              [pz, dz] = (0, Ez.useState)(""),
                              Fz = pz.trim().toLowerCase(),
                              Rz = Fz ? bz.filter((zz => zz.name.toLowerCase().includes(Fz))) : bz;
                            return (0, Zz.jsxs)("div", {
                              className: "DocsGallery",
                              children: [bz.length > sE && (0, Zz.jsx)(fb, {
                                className: "DocsGalleryFilter",
                                value: pz,
                                placeholder: `Filter ${bz.length} names\u2026`,
                                label: "Filter names",
                                onChange: dz,
                                count: Fz ? {
                                  visible: Rz.length,
                                  total: bz.length
                                } : null
                              }), (0, Zz.jsx)("div", {
                                className: iz()("DocsGalleryGrid", `Kind-${uz}`, {
                                  Songs: nz
                                }),
                                children: Rz.map((zz => {
                                  if ("sounds" === uz) return (0, Zz.jsx)(vE, {
                                    entry: zz,
                                    isSong: nz
                                  }, zz.anchor);
                                  if (Oz && "particles" === uz && cb(zz.name)) return (0, Zz.jsxs)("button", {
                                    type: "button",
                                    id: zz.anchor,
                                    className: iz()("DocsTile Previewable", {
                                      Copied: Hz === zz.name
                                    }),
                                    title: `Play "${zz.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Oz(zz.name), tz(zz.name)
                                    },
                                    children: [(0, Zz.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, Zz.jsx)(NE, {
                                        kind: uz,
                                        entry: zz,
                                        assets: lz,
                                        renderedUrl: null
                                      }), (0, Zz.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, Zz.jsx)(Kz, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, Zz.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Hz === zz.name ? "Copied!" : zz.name
                                    })]
                                  }, zz.anchor);
                                  const bz = oE(uz, zz);
                                  return (0, Zz.jsxs)("button", {
                                    type: "button",
                                    id: zz.anchor,
                                    className: iz()("DocsTile", {
                                      Copied: Hz === zz.name
                                    }),
                                    title: `Copy "${zz.name}"`,
                                    onClick: () => {
                                      tz(zz.name)
                                    },
                                    children: [(0, Zz.jsx)("span", {
                                      className: iz()("DocsTilePreview", {
                                        Rendered: null !== bz
                                      }),
                                      children: (0, Zz.jsx)(NE, {
                                        kind: uz,
                                        entry: zz,
                                        assets: lz,
                                        renderedUrl: bz
                                      })
                                    }), (0, Zz.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Hz === zz.name ? "Copied!" : zz.name
                                    })]
                                  }, zz.anchor)
                                }))
                              })]
                            })
                          }

                          function JE(zz) {
                            let {
                              kind: uz,
                              content: bz,
                              blocks: Ez
                            } = zz;
                            return (0, Zz.jsx)(Zz.Fragment, {
                              children: Vb(uz, bz, Ez).map(((zz, bz) => "block" === zz.kind ? (0, Zz.jsx)(db, {
                                block: zz.block
                              }, bz) : (0, Zz.jsx)(xE, {
                                kind: uz,
                                names: zz.names,
                                isSongs: zz.isSongs
                              }, bz)))
                            })
                          }
                          const AE = [{
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

                          function TE(zz) {
                            let {
                              cards: uz = AE,
                              label: bz = "Start here"
                            } = zz;
                            const nz = (0, Ez.useContext)(Fu);
                            return (0, Zz.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": bz,
                              children: uz.map((zz => {
                                let {
                                  pageId: uz,
                                  countNoun: bz
                                } = zz;
                                const Ez = Uz(uz);
                                return (0, Zz.jsxs)(lz.e, {
                                  to: Qz(nz, Ez),
                                  className: "DocsLandingCard",
                                  children: [(0, Zz.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, Zz.jsx)(Kz, {
                                      name: Ez.icon
                                    })
                                  }), (0, Zz.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Ez.title
                                  }), (0, Zz.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Ez.summary
                                  }), bz && (0, Zz.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [gz(Ez).sections.length, " ", bz]
                                  })]
                                }, uz)
                              }))
                            })
                          }
                          const LE = 240;

                          function PE(zz) {
                            let {
                              faces: uz
                            } = zz;
                            return (0, Zz.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, Zz.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${uz.top}")`
                                }
                              }), (0, Zz.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${uz.left}")`
                                }
                              }), (0, Zz.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${uz.right}")`
                                }
                              })]
                            })
                          }

                          function GE(zz) {
                            let {
                              src: uz
                            } = zz;
                            const [bz, nz] = (0, Ez.useState)(!1);
                            return bz ? null : (0, Zz.jsx)("img", {
                              src: uz,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${uz}`), nz(!0)
                              }
                            })
                          }

                          function aE(zz) {
                            let {
                              kind: uz
                            } = zz;
                            const bz = Xb(uz),
                              nz = fE(),
                              lz = (0, Mz.v)(),
                              [tz, Hz] = (0, Ez.useState)(""),
                              [Oz, pz] = (0, Ez.useState)(null),
                              [dz, Fz] = (0, Ez.useState)(LE),
                              [Rz, wz] = (0, Ez.useState)(null),
                              Xz = (0, Ez.useRef)(null),
                              sz = tz.trim().toLowerCase();
                            (0, Ez.useEffect)((() => {
                              const zz = (0, vz.h)(lz.hash),
                                Ez = bz.entries.find((bz => Gb(uz, bz.name) === zz));
                              if (Ez) Xz.current = Ez.name, Hz(Ez.name), pz(null), wz(Ez.name);
                              else if (null !== Xz.current) {
                                const zz = Xz.current;
                                Xz.current = null, Hz((uz => uz === zz ? "" : uz)), wz(null)
                              }
                            }), [bz, uz, lz.hash, lz.key]), (0, Ez.useEffect)((() => {
                              var zz;
                              null !== Rz && (null === (zz = document.getElementById(Gb(uz, Rz))) || void 0 === zz || zz.scrollIntoView({
                                block: "center"
                              }))
                            }), [uz, Rz]);
                            const rz = bz.entries.filter((zz => (!sz || zz.name.toLowerCase().includes(sz)) && (!Oz || zz.variants.includes(Oz))));
                            return (0, Zz.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [bz.notes.length > 0 && (0, Zz.jsx)("div", {
                                className: "DocsProse",
                                children: bz.notes.map((zz => (0, Zz.jsx)("p", {
                                  children: zz
                                }, zz)))
                              }), bz.legend.length > 0 && (0, Zz.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, Zz.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, Zz.jsx)("thead", {
                                    children: (0, Zz.jsxs)("tr", {
                                      children: [(0, Zz.jsx)("th", {
                                        children: "Code"
                                      }), (0, Zz.jsx)("th", {
                                        children: "Variant"
                                      }), (0, Zz.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, Zz.jsx)("tbody", {
                                    children: bz.legend.map((zz => (0, Zz.jsxs)("tr", {
                                      children: [(0, Zz.jsx)("td", {
                                        children: (0, Zz.jsx)("button", {
                                          type: "button",
                                          className: iz()("DocsVariantChip", {
                                            Active: Oz === zz.code
                                          }),
                                          "aria-pressed": Oz === zz.code,
                                          title: `Show only ${uz} with ${zz.meaning} variants`,
                                          onClick: () => {
                                            pz(Oz === zz.code ? null : zz.code)
                                          },
                                          children: zz.code
                                        })
                                      }), (0, Zz.jsx)("td", {
                                        children: zz.meaning
                                      }), (0, Zz.jsx)("td", {
                                        children: (0, Zz.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: zz.usage
                                        })
                                      })]
                                    }, zz.code)))
                                  })]
                                })
                              }), bz.examples.length > 0 && (0, Zz.jsx)(Nz, {
                                lang: "text",
                                code: bz.examples.join("\n")
                              }), (0, Zz.jsx)(fb, {
                                className: "DocsFilterBar",
                                value: tz,
                                placeholder: `Search ${bz.entries.length} ${uz}\u2026`,
                                label: `Search ${uz}`,
                                onChange: zz => {
                                  Hz(zz), Fz(LE)
                                },
                                count: sz || Oz ? {
                                  visible: rz.length,
                                  total: bz.entries.length
                                } : null,
                                children: Oz && (0, Zz.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    pz(null)
                                  },
                                  children: [Oz, " ", (0, Zz.jsx)(Kz, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, Zz.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: rz.slice(0, dz).map((zz => {
                                  const bz = "blocks" === uz ? null === nz || void 0 === nz ? void 0 : nz.getBlockFaces(zz.name) : null,
                                    Ez = nz && !bz ? nz.getItemTextureUrl(zz.name) : null;
                                  return (0, Zz.jsxs)("div", {
                                    id: Gb(uz, zz.name),
                                    className: iz()("DocsCatalogueTile", {
                                      Linked: zz.name === Rz
                                    }),
                                    children: [(0, Zz.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [bz && (0, Zz.jsx)(PE, {
                                        faces: bz
                                      }), Ez && (0, Zz.jsx)(GE, {
                                        src: Ez
                                      })]
                                    }), (0, Zz.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: zz.name
                                    }), zz.variants.length > 0 && (0, Zz.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: zz.variants.map((zz => (0, Zz.jsx)("span", {
                                        children: zz
                                      }, zz)))
                                    }), (0, Zz.jsx)(fz, {
                                      text: zz.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, zz.name)
                                }))
                              }), rz.length > dz && (0, Zz.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Fz(rz.length)
                                },
                                children: ["Show all ", rz.length]
                              }), 0 === rz.length && (0, Zz.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", uz, " match."]
                              })]
                            })
                          }
                          var VE = bz(4581),
                            mE = bz(1547);
                          const qE = .95 * VE.e;

                          function hE(zz) {
                            return /^\s*```/.test(zz)
                          }

                          function UE(zz, uz) {
                            const bz = [
                              []
                            ];
                            let Ez = !1;
                            for (const nz of zz.split("\n")) !Ez && uz(nz) && bz.at(-1).length > 0 && bz.push([]), hE(nz) && (Ez = !Ez), bz.at(-1).push(nz);
                            return bz.map((zz => zz.join("\n").trim())).filter(Boolean)
                          }

                          function cE(zz, uz) {
                            const bz = `${"#".repeat(uz)} `,
                              Ez = [];
                            let nz = !1;
                            for (const iz of zz.split("\n")) hE(iz) ? nz = !nz : !nz && iz.startsWith(bz) && Ez.push(iz.slice(bz.length).trim());
                            return Ez
                          }

                          function gE(zz) {
                            return zz.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class SE {
                            constructor(zz, uz) {
                              this.origin = uz, this.pages = void 0, this.partPaths = new Map;
                              const bz = zz.map((zz => {
                                const uz = uz => this.resolveLinks(zz, uz).length,
                                  bz = function(zz, uz) {
                                    const bz = zz.map((zz => uz(zz.markdown) + 2)),
                                      Ez = bz.reduce(((zz, uz) => zz + uz), 0),
                                      nz = Ez / Math.ceil(Ez / qE),
                                      iz = [];
                                    let lz = 0;
                                    return zz.forEach(((zz, uz) => {
                                      const Ez = bz[uz];
                                      (0 === iz.length || lz + Ez > qE || lz + Ez / 2 > nz) && (iz.push([]), lz = 0), iz.at(-1).push(zz), lz += Ez
                                    })), iz
                                  }(function(zz, uz) {
                                    return UE(zz, (zz => zz.startsWith("## "))).flatMap((zz => {
                                      var bz;
                                      const Ez = null !== (bz = cE(zz, 2)[0]) && void 0 !== bz ? bz : "";
                                      if (uz(zz) <= qE) return [{
                                        markdown: zz,
                                        section: Ez
                                      }];
                                      let nz = !1,
                                        iz = "";
                                      return UE(zz, (zz => {
                                        const uz = nz && "" !== zz.trim();
                                        return nz = "" === zz.trim(), uz
                                      })).map((zz => {
                                        var uz;
                                        const bz = cE(zz, 3),
                                          nz = zz.startsWith("### ") ? bz[0] : iz;
                                        return iz = null !== (uz = bz.at(-1)) && void 0 !== uz ? uz : iz, {
                                          markdown: zz,
                                          section: Ez || nz
                                        }
                                      }))
                                    }))
                                  }(gE(zz), uz), uz);
                                return {
                                  page: zz,
                                  groups: bz.length > 1 ? bz : []
                                }
                              }));
                              for (const {
                                  page: Ez,
                                  groups: nz
                                }
                                of bz) nz.forEach(((zz, uz) => {
                                const bz = (0, VE.s)(Ez.slug, uz);
                                for (const nz of zz.flatMap((zz => [...cE(zz.markdown, 2), ...cE(zz.markdown, 3)]))) {
                                  const zz = `${Ez.id}#${(0,vz.k)(nz)}`;
                                  this.partPaths.has(zz) || this.partPaths.set(zz, bz)
                                }
                              }));
                              this.pages = bz.map((zz => {
                                let {
                                  page: uz,
                                  groups: bz
                                } = zz;
                                return {
                                  page: uz,
                                  path: (0, VE.r)(uz.slug),
                                  markdown: `# ${uz.title}\n\n${this.resolveLinks(uz,gE(uz))}\n`,
                                  parts: bz.map(((zz, Ez) => this.renderPart(uz, zz, Ez, bz.length)))
                                }
                              }))
                            }
                            url(zz) {
                              return `${this.origin}${zz}`
                            }
                            getPage(zz) {
                              return this.pages.find((uz => uz.page.id === zz))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((zz => (zz.parts.length > 0 ? zz.parts : [{
                                path: zz.path,
                                label: "",
                                markdown: zz.markdown
                              }]).filter((zz => zz.markdown.length > VE.e))))
                            }
                            markdownUrl(zz, uz) {
                              const bz = uz && this.partPaths.get(`${zz.id}#${uz}`) || (0, VE.r)(zz.slug);
                              return this.url(uz ? `${bz}#${uz}` : bz)
                            }
                            resolveLinks(zz, uz) {
                              return uz.replace(/\]\((#[^)]+)\)/g, ((uz, bz) => {
                                var Ez;
                                const nz = null !== (Ez = yz(bz)) && void 0 !== Ez ? Ez : this.samePageTarget(zz, bz);
                                return nz ? `](${this.markdownUrl(nz.page,nz.anchor)})` : uz
                              }))
                            }
                            samePageTarget(zz, uz) {
                              const bz = (0, vz.k)(uz.slice(1));
                              return Sz(zz, bz) ? {
                                page: zz,
                                anchor: bz
                              } : null
                            }
                            renderPart(zz, uz, bz, Ez) {
                              const nz = function(zz) {
                                  const uz = zz.map((zz => zz.section)).filter(Boolean);
                                  if (0 === uz.length) return "";
                                  const bz = uz[0],
                                    Ez = uz.at(-1);
                                  return bz === Ez ? bz : `${bz} to ${Ez}`
                                }(uz),
                                iz = uz.map((zz => zz.markdown)).join("\n\n"),
                                lz = nz ? `It covers ${nz}. ` : "",
                                Mz = `Part ${bz+1} of ${Ez} of [${zz.title}](${this.url((0,VE.r)(zz.slug))}). ${lz}[llms.txt](${this.url(VE.i)}) lists every part.`;
                              return {
                                path: (0, VE.s)(zz.slug, bz),
                                label: nz,
                                markdown: `# ${zz.title}, part ${bz+1} of ${Ez}\n\n${Mz}\n\n${this.resolveLinks(zz,iz)}\n`
                              }
                            }
                            llmsTxt(zz) {
                              const uz = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${yE(VE.e)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const bz of hz) {
                                uz.push("", `## ${bz.title}`, "");
                                for (const zz of bz.pageIds) {
                                  const bz = this.getPage(zz),
                                    {
                                      page: Ez,
                                      parts: nz
                                    } = bz,
                                    iz = `About ${yE(bz.markdown.length)} tokens${nz.length>0?`, in ${nz.length} parts:`:"."}`;
                                  uz.push(`- [${Ez.title}](${this.url(bz.path)}): ${Ez.summary} ${iz}`), nz.forEach(((zz, bz) => {
                                    uz.push(`  - [Part ${bz+1}${zz.label?`: ${zz.label}`:""}](${this.url(zz.path)})`)
                                  }))
                                }
                              }
                              return uz.push("", "## Optional", "", `- [Every page in one file](${this.url(VE.g)}): About ${yE(zz.length)} tokens, for a model with a large context window.`, ""), uz.join("\n")
                            }
                            llmsFullTxt() {
                              return hz.flatMap((zz => zz.pageIds.map((zz => this.getPage(zz).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const zz = this.llmsFullTxt(),
                                uz = this.llmsTxt(zz),
                                bz = new Map([
                                  [VE.n, uz],
                                  [VE.i, uz],
                                  [VE.g, zz]
                                ]);
                              for (const Ez of this.pages) {
                                bz.set(Ez.path, Ez.markdown);
                                for (const zz of Ez.parts) bz.set(zz.path, zz.markdown)
                              }
                              return bz
                            }
                          }

                          function yE(zz) {
                            return `${Math.max(1,Math.round(zz/4e3))}K`
                          }
                          let DE = null;

                          function QE() {
                            return DE ??= new SE(qz, mE.e), DE
                          }
                          const WE = [{
                            name: "ChatGPT",
                            url: "https://chatgpt.com/?hints=search&q="
                          }, {
                            name: "Claude",
                            url: "https://claude.ai/new?q="
                          }];

                          function eE(zz) {
                            return QE().getPage(zz.id).parts.length > 0 ? `Read ${VE.k}, then the parts of the Bloxd Code API's ${zz.title} page it lists, so I can ask questions about it.` : `Read ${mE.e}${(0,VE.r)(zz.slug)} so I can ask questions about it. ${VE.k} lists every page of the Bloxd Code API docs.`
                          }

                          function jE(zz) {
                            let {
                              page: uz
                            } = zz;
                            const [bz, Ez] = Xz();
                            return (0, Zz.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, Zz.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Ez(QE().getPage(uz.id).markdown)
                                },
                                children: [(0, Zz.jsx)(Kz, {
                                  name: !1 === (null === bz || void 0 === bz ? void 0 : bz.failed) ? "check" : "copy"
                                }), (0, Zz.jsx)("span", {
                                  children: bz ? bz.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), WE.map((zz => (0, Zz.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: `${zz.url}${encodeURIComponent(eE(uz))}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, Zz.jsx)(Kz, {
                                  name: "external-link"
                                }), (0, Zz.jsxs)("span", {
                                  children: ["Open in ", zz.name]
                                })]
                              }, zz.name)))]
                            })
                          }

                          function IE(zz) {
                            return `#${[0,1,2].map((uz=>Math.round(Math.min(255,Math.max(0,zz[uz]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function BE(zz) {
                            return [parseInt(zz.slice(1, 3), 16), parseInt(zz.slice(3, 5), 16), parseInt(zz.slice(5, 7), 16)]
                          }

                          function CE(zz) {
                            let {
                              label: uz,
                              min: bz,
                              max: Ez,
                              step: nz,
                              low: iz,
                              high: lz,
                              onChange: Mz
                            } = zz;
                            return (0, Zz.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Zz.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Zz.jsx)("span", {
                                  children: uz
                                }), (0, Zz.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: iz === lz ? iz : `${iz}\u2013${lz}`
                                })]
                              }), (0, Zz.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, Zz.jsx)("input", {
                                  type: "range",
                                  min: bz,
                                  max: Ez,
                                  step: nz,
                                  value: Math.min(Ez, iz),
                                  "aria-label": `Minimum ${uz.toLowerCase()}`,
                                  onChange: zz => {
                                    const uz = Number(zz.target.value);
                                    Mz(uz, Math.max(uz, lz))
                                  }
                                }), (0, Zz.jsx)("input", {
                                  type: "range",
                                  min: bz,
                                  max: Ez,
                                  step: nz,
                                  value: Math.min(Ez, lz),
                                  "aria-label": `Maximum ${uz.toLowerCase()}`,
                                  onChange: zz => {
                                    const uz = Number(zz.target.value);
                                    Mz(Math.min(uz, iz), uz)
                                  }
                                })]
                              })]
                            })
                          }

                          function YE(zz) {
                            let {
                              label: uz,
                              min: bz,
                              max: Ez,
                              step: nz,
                              value: iz,
                              onChange: lz,
                              format: Mz = String
                            } = zz;
                            return (0, Zz.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Zz.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Zz.jsx)("span", {
                                  children: uz
                                }), (0, Zz.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Mz(iz)
                                })]
                              }), (0, Zz.jsx)("input", {
                                type: "range",
                                min: bz,
                                max: Ez,
                                step: nz,
                                value: Math.min(Ez, Math.max(bz, iz)),
                                "aria-label": uz,
                                onChange: zz => {
                                  lz(Number(zz.target.value))
                                }
                              })]
                            })
                          }

                          function kE(zz) {
                            let {
                              opts: uz,
                              onChange: bz
                            } = zz;
                            const Ez = uz.colorGradients;
                            if (!Db(Ez)) return (0, Zz.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Zz.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, Zz.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, Zz.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Ez.map(((zz, uz) => (0, Zz.jsx)("input", {
                                  type: "color",
                                  value: IE(zz.color),
                                  "aria-label": `Colour ${uz+1}`,
                                  onChange: zz => {
                                    const nz = [...Ez];
                                    nz[uz] = {
                                      color: BE(zz.target.value)
                                    }, bz(nz)
                                  }
                                }, uz)))
                              })]
                            });
                            const nz = (zz, uz) => {
                              const nz = [...Ez];
                              nz[zz] = uz, bz(nz)
                            };
                            return (0, Zz.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, Zz.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, Zz.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, Zz.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Ez.map(((zz, uz) => {
                                var bz;
                                const Ez = null !== (bz = zz.maxColor) && void 0 !== bz ? bz : zz.minColor;
                                return (0, Zz.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, Zz.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * zz.timeFraction), "%"]
                                  }), (0, Zz.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${IE(zz.minColor)}, ${IE(Ez)})`
                                    }
                                  }), (0, Zz.jsx)("input", {
                                    type: "color",
                                    value: IE(zz.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*zz.timeFraction)}%`,
                                    onChange: bz => {
                                      nz(uz, {
                                        ...zz,
                                        minColor: [...BE(bz.target.value), zz.minColor[3]]
                                      })
                                    }
                                  }), (0, Zz.jsx)("input", {
                                    type: "color",
                                    value: IE(Ez),
                                    "aria-label": `Maximum colour at ${Math.round(100*zz.timeFraction)}%`,
                                    onChange: bz => {
                                      nz(uz, {
                                        ...zz,
                                        maxColor: [...BE(bz.target.value), Ez[3]]
                                      })
                                    }
                                  })]
                                }, uz)
                              }))]
                            })
                          }
                          const zn = [-.5, -.5, -.5],
                            un = [.5, .5, .5],
                            bn = [0, 1, 2, 3, 4, 5, 6, 7].map((zz => [1 & zz ? un[0] : zn[0], 2 & zz ? un[1] : zn[1], 4 & zz ? un[2] : zn[2]]));class En {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(zz, uz, bz, Ez) {
                              const nz = Math.round(31 * uz),
                                iz = Math.round(31 * bz),
                                lz = Math.round(31 * Ez),
                                Mz = `${nz}|${iz}|${lz}`;
                              let tz = this.tints.get(zz);
                              (!tz || tz.size > 2e3) && (tz = new Map, this.tints.set(zz, tz));
                              let Hz = tz.get(Mz);
                              if (Hz) return Hz;
                              Hz = document.createElement("canvas"), Hz.width = zz.naturalWidth || 16, Hz.height = zz.naturalHeight || 16;
                              const Oz = Hz.getContext("2d");
                              return Oz ? (Oz.imageSmoothingEnabled = !1, Oz.drawImage(zz, 0, 0, Hz.width, Hz.height), Oz.globalCompositeOperation = "multiply", Oz.fillStyle = `rgb(${nz/31*255}, ${iz/31*255}, ${lz/31*255})`, Oz.fillRect(0, 0, Hz.width, Hz.height), Oz.globalCompositeOperation = "destination-in", Oz.drawImage(zz, 0, 0, Hz.width, Hz.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), tz.set(Mz, Hz), Hz
                            }
                          }

                          function nn(zz) {
                            let {
                              opts: uz,
                              textureUrl: bz,
                              burst: nz,
                              paused: iz
                            } = zz;
                            const lz = (0, Ez.useRef)(null),
                              Mz = (0, Ez.useRef)(uz);
                            Mz.current = uz;
                            const tz = (0, Ez.useRef)(iz);
                            tz.current = iz;
                            const Hz = (0, Ez.useRef)(null),
                              Oz = (0, Ez.useRef)(null),
                              pz = (0, Ez.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(zz) {
                                let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const bz = [-.5, -.5, -.5],
                                  Ez = [.5, .5, .5];
                                let nz = .5;
                                for (let iz = 0; iz < 40; iz++) {
                                  const iz = Wb(zz, bz, Ez, uz),
                                    lz = Math.max(iz.life / 30, .001);
                                  for (; Ib(iz, zz.gravity, lz);) nz = Math.max(nz, Math.hypot(iz.pos[0], iz.pos[1], iz.pos[2]) + iz.size / 2)
                                }
                                return nz
                              }(uz)))), [uz]),
                              dz = (0, Ez.useRef)(pz);
                            return dz.current = pz, (0, Ez.useEffect)((() => {
                              if (Hz.current = null, !bz) return;
                              const zz = new Image;
                              let uz = !1;
                              return zz.onload = () => {
                                uz || (Hz.current = zz)
                              }, zz.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${bz}`)
                              }, zz.src = bz, () => {
                                uz = !0
                              }
                            }), [bz]), (0, Ez.useEffect)((() => {
                              var zz;
                              null === (zz = Oz.current) || void 0 === zz || zz.call(Oz)
                            }), [uz, nz]), (0, Ez.useEffect)((() => {
                              const zz = lz.current,
                                uz = null === zz || void 0 === zz ? void 0 : zz.getContext("2d");
                              if (!zz || !uz) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const bz = new En;
                              let Ez = [],
                                nz = 0,
                                iz = -.7,
                                pz = dz.current,
                                Fz = performance.now(),
                                Zz = 0,
                                Rz = !0,
                                Kz = null;
                              const wz = () => {
                                const zz = Mz.current,
                                  uz = Math.min(400, Math.max(0, Math.ceil(zz.manualEmitCount)));
                                Ez = [];
                                for (let bz = 0; bz < uz; bz++) Ez.push(Wb(zz, zn, un, Math.random));
                                nz = 0
                              };
                              Oz.current = wz, wz();
                              const Xz = lz => {
                                Zz = requestAnimationFrame(Xz);
                                const Oz = Math.min(.05, (lz - Fz) / 1e3);
                                if (Fz = lz, !Rz) return;
                                const fz = window.devicePixelRatio || 1,
                                  sz = Math.round(zz.clientWidth * fz),
                                  rz = Math.round(zz.clientHeight * fz);
                                if (0 === sz || 0 === rz) return;
                                zz.width === sz && zz.height === rz || (zz.width = sz, zz.height = rz);
                                const oz = Mz.current;
                                null === Kz && (iz += .18 * Oz), pz += (dz.current - pz) * Math.min(1, 4 * Oz);
                                const Nz = .6 * Oz;
                                Ez = Ez.filter((zz => Ib(zz, oz.gravity, Nz))), 0 !== Ez.length || tz.current || (nz += Oz, nz > .6 && wz());
                                const vz = function(zz, uz, bz, Ez) {
                                  const nz = 3.2 * Ez,
                                    iz = .44 * Math.min(zz, uz) * nz / Ez,
                                    lz = Math.cos(bz),
                                    Mz = Math.sin(bz),
                                    tz = Math.cos(.42),
                                    Hz = Math.sin(.42);
                                  return (bz, Ez, Oz) => {
                                    const pz = bz * Mz + Oz * lz,
                                      dz = nz - (Ez * Hz + pz * tz);
                                    if (dz < .05) return null;
                                    const Fz = iz / dz;
                                    return {
                                      x: zz / 2 + (bz * lz - Oz * Mz) * Fz,
                                      y: uz / 2 - (Ez * tz - pz * Hz) * Fz,
                                      scale: Fz,
                                      depth: dz
                                    }
                                  }
                                }(sz, rz, iz, pz);
                                ! function(zz, uz, bz, Ez, nz) {
                                  const iz = zz.createLinearGradient(0, 0, 0, bz);
                                  iz.addColorStop(0, "#23262d"), iz.addColorStop(1, "#16181c"), zz.globalCompositeOperation = "source-over", zz.globalAlpha = 1, zz.fillStyle = iz, zz.fillRect(0, 0, uz, bz);
                                  const lz = (uz, bz) => {
                                      const nz = Ez(uz[0], uz[1], uz[2]),
                                        iz = Ez(bz[0], bz[1], bz[2]);
                                      nz && iz && (zz.beginPath(), zz.moveTo(nz.x, nz.y), zz.lineTo(iz.x, iz.y), zz.stroke())
                                    },
                                    Mz = Math.ceil(nz) + 1,
                                    tz = zn[1];
                                  zz.lineWidth = 1, zz.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Hz = -Mz; Hz <= Mz; Hz++) lz([Hz + .5, tz, .5 - Mz], [Hz + .5, tz, Mz + .5]), lz([.5 - Mz, tz, Hz + .5], [Mz + .5, tz, Hz + .5]);
                                  zz.strokeStyle = "rgba(255, 255, 255, 0.28)", zz.setLineDash([4, 4]);
                                  for (const Hz of bn)
                                    for (const zz of bn) {
                                      const uz = [0, 1, 2].filter((uz => Hz[uz] !== zz[uz]));
                                      1 === uz.length && Hz[uz[0]] < zz[uz[0]] && lz(Hz, zz)
                                    }
                                  zz.setLineDash([])
                                }(uz, sz, rz, vz, pz);
                                const xz = Hz.current,
                                  Jz = Ez.map((zz => ({
                                    particle: zz,
                                    at: vz(zz.pos[0], zz.pos[1], zz.pos[2])
                                  }))).filter((zz => null !== zz.at)).sort(((zz, uz) => uz.at.depth - zz.at.depth));
                                uz.imageSmoothingEnabled = !1;
                                for (const zz of function(zz) {
                                    switch (zz) {
                                      case Ub.d.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case Ub.d.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case Ub.d.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case Ub.d.MultiplyAdd:
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
                                  }(oz.blendMode)) {
                                  uz.globalCompositeOperation = zz.operation;
                                  for (const {
                                      particle: Ez,
                                      at: nz
                                    }
                                    of Jz) {
                                    const [iz, lz, Mz, tz] = jb(Ez), Hz = Math.max(1, Ez.size * nz.scale);
                                    uz.globalAlpha = zz.usesAlpha ? Math.min(1, Math.max(0, tz)) : 1, xz ? uz.drawImage(bz.get(xz, iz, lz, Mz), nz.x - Hz / 2, nz.y - Hz / 2, Hz, Hz) : (uz.fillStyle = `rgb(${255*iz}, ${255*lz}, ${255*Mz})`, uz.fillRect(nz.x - Hz / 2, nz.y - Hz / 2, Hz, Hz))
                                  }
                                }
                                uz.globalCompositeOperation = "source-over", uz.globalAlpha = 1
                              };
                              Zz = requestAnimationFrame(Xz);
                              const fz = new IntersectionObserver((zz => {
                                let [uz] = zz;
                                Rz = uz.isIntersecting
                              }));
                              fz.observe(zz);
                              const sz = uz => {
                                  Kz = uz.clientX, zz.setPointerCapture(uz.pointerId)
                                },
                                rz = zz => {
                                  null !== Kz && (iz += .01 * (zz.clientX - Kz), Kz = zz.clientX)
                                },
                                oz = () => {
                                  Kz = null
                                };
                              return zz.addEventListener("pointerdown", sz), zz.addEventListener("pointermove", rz), zz.addEventListener("pointerup", oz), zz.addEventListener("pointercancel", oz), () => {
                                cancelAnimationFrame(Zz), fz.disconnect(), Oz.current = null, zz.removeEventListener("pointerdown", sz), zz.removeEventListener("pointermove", rz), zz.removeEventListener("pointerup", oz), zz.removeEventListener("pointercancel", oz)
                              }
                            }), []), (0, Zz.jsx)("canvas", {
                              ref: lz,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${uz.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const Mn = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            tn = [{
                              mode: Ub.d.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: Ub.d.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: Ub.d.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: Ub.d.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: Ub.d.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            Hn = (0, Ez.forwardRef)((function(zz, uz) {
                              var bz, nz;
                              let {
                                textures: lz
                              } = zz;
                              const Mz = fE(),
                                tz = (0, Ez.useRef)(null),
                                [Hz, Oz] = (0, Ez.useState)(gb),
                                [pz, dz] = (0, Ez.useState)("example"),
                                [Fz, Rz] = (0, Ez.useState)(0),
                                [wz, Xz] = (0, Ez.useState)(!1),
                                sz = zz => {
                                  const uz = "example" === zz ? gb : cb(zz);
                                  uz && (Oz(uz), dz(zz))
                                };
                              (0, Ez.useImperativeHandle)(uz, (() => ({
                                preview: zz => {
                                  var uz;
                                  sz(zz), null === (uz = tz.current) || void 0 === uz || uz.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const rz = zz => {
                                  Oz({
                                    ...Hz,
                                    ...zz
                                  }), dz(null)
                                },
                                oz = function(zz, uz) {
                                  if (null !== uz) return `${kb}    presetId: "${uz}",\n${zE}\n})`;
                                  const bz = zz.velocityGradients.map((zz => `        {\n            timeFraction: ${Bb(zz.timeFraction)},\n            factor: ${Bb(zz.factor)},\n            factor2: ${Bb(zz.factor2)},\n        },`)),
                                    Ez = [`    dir1: ${Cb(zz.dir1)},`, `    dir2: ${Cb(zz.dir2)},`, zE, `    texture: "${zz.texture}",`, `    minLifeTime: ${Bb(zz.minLifeTime)},`, `    maxLifeTime: ${Bb(zz.maxLifeTime)},`, `    minEmitPower: ${Bb(zz.minEmitPower)},`, `    maxEmitPower: ${Bb(zz.maxEmitPower)},`, `    minSize: ${Bb(zz.minSize)},`, `    maxSize: ${Bb(zz.maxSize)},`, `    manualEmitCount: ${Bb(zz.manualEmitCount)},`, `    gravity: ${Cb(zz.gravity)},`, `    colorGradients: ${Yb(zz.colorGradients,"    ")},`, `    velocityGradients: ${bz.length>0?`[\n${bz.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Bb(zz.blendMode)},`];
                                  return void 0 !== zz.hideDist && Ez.push(`    hideDist: ${Bb(zz.hideDist)},`), `${kb}${Ez.join("\n")}\n})`
                                }(Hz, null === pz || "example" === pz ? null : pz),
                                vz = lz.includes(Hz.texture) ? lz : [...lz, Hz.texture];
                              return (0, Zz.jsxs)("section", {
                                ref: tz,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, Zz.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, Zz.jsxs)("div", {
                                    children: [(0, Zz.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, Zz.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, Zz.jsx)(fz, {
                                    text: oz,
                                    label: "Copy code"
                                  })]
                                }), (0, Zz.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, Zz.jsx)("button", {
                                    type: "button",
                                    className: iz()("DocsVariantChip", {
                                      Active: "example" === pz
                                    }),
                                    onClick: () => {
                                      sz("example")
                                    },
                                    children: "Example"
                                  }), Mn.filter((zz => null !== cb(zz))).map((zz => (0, Zz.jsx)("button", {
                                    type: "button",
                                    className: iz()("DocsVariantChip", {
                                      Active: pz === zz
                                    }),
                                    onClick: () => {
                                      sz(zz)
                                    },
                                    children: zz
                                  }, zz))), (0, Zz.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== pz && void 0 !== pz ? pz : "custom",
                                    "aria-label": "Preset",
                                    onChange: zz => {
                                      sz(zz.target.value)
                                    },
                                    children: [(0, Zz.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === pz && (0, Zz.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), hb.d.map((zz => (0, Zz.jsx)("option", {
                                      value: zz,
                                      children: zz
                                    }, zz)))]
                                  })]
                                }), (0, Zz.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, Zz.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, Zz.jsx)(nn, {
                                      opts: Hz,
                                      textureUrl: null !== (bz = null === Mz || void 0 === Mz ? void 0 : Mz.getParticleTextureUrl(Hz.texture)) && void 0 !== bz ? bz : null,
                                      burst: Fz,
                                      paused: wz
                                    }), (0, Zz.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, Zz.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Rz(Fz + 1)
                                        },
                                        children: [(0, Zz.jsx)(Kz, {
                                          name: "replay"
                                        }), (0, Zz.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, Zz.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": wz,
                                        onClick: () => {
                                          Xz(!wz)
                                        },
                                        children: [(0, Zz.jsx)(Kz, {
                                          name: wz ? "play" : "pause"
                                        }), (0, Zz.jsx)("span", {
                                          children: wz ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, Zz.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, Zz.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Zz.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, Zz.jsx)("span", {
                                          children: "Texture"
                                        }), (0, Zz.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Hz.texture
                                        })]
                                      }), (0, Zz.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: vz.map((zz => {
                                          var uz;
                                          const bz = null !== (uz = null === Mz || void 0 === Mz ? void 0 : Mz.getParticleTextureUrl(zz)) && void 0 !== uz ? uz : null;
                                          return (0, Zz.jsx)("button", {
                                            type: "button",
                                            className: iz()("DocsParticleTexture", {
                                              Active: Hz.texture === zz
                                            }),
                                            title: zz,
                                            "aria-label": zz,
                                            "aria-pressed": Hz.texture === zz,
                                            onClick: () => {
                                              rz({
                                                texture: zz
                                              })
                                            },
                                            children: bz ? (0, Zz.jsx)("img", {
                                              src: bz,
                                              alt: ""
                                            }) : (0, Zz.jsx)(Kz, {
                                              name: "image"
                                            })
                                          }, zz)
                                        }))
                                      })]
                                    }), (0, Zz.jsx)(YE, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Hz.manualEmitCount,
                                      onChange: zz => {
                                        rz({
                                          manualEmitCount: zz
                                        })
                                      }
                                    }), (0, Zz.jsx)(CE, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Hz.minLifeTime,
                                      high: Hz.maxLifeTime,
                                      onChange: (zz, uz) => {
                                        rz({
                                          minLifeTime: zz,
                                          maxLifeTime: uz
                                        })
                                      }
                                    }), (0, Zz.jsx)(CE, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Hz.minEmitPower,
                                      high: Hz.maxEmitPower,
                                      onChange: (zz, uz) => {
                                        rz({
                                          minEmitPower: zz,
                                          maxEmitPower: uz
                                        })
                                      }
                                    }), (0, Zz.jsx)(CE, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Hz.minSize,
                                      high: Hz.maxSize,
                                      onChange: (zz, uz) => {
                                        rz({
                                          minSize: zz,
                                          maxSize: uz
                                        })
                                      }
                                    }), (0, Zz.jsx)(YE, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (nz = Hz.gravity[1]) && void 0 !== nz ? nz : 0,
                                      onChange: zz => {
                                        var uz, bz;
                                        rz({
                                          gravity: [null !== (uz = Hz.gravity[0]) && void 0 !== uz ? uz : 0, zz, null !== (bz = Hz.gravity[2]) && void 0 !== bz ? bz : 0]
                                        })
                                      }
                                    }), (0, Zz.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, Zz.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, Zz.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, Zz.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Hz.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: zz => {
                                          rz({
                                            blendMode: Number(zz.target.value)
                                          })
                                        },
                                        children: tn.map((zz => {
                                          let {
                                            mode: uz,
                                            label: bz
                                          } = zz;
                                          return (0, Zz.jsx)("option", {
                                            value: uz,
                                            children: bz
                                          }, uz)
                                        }))
                                      })]
                                    }), (0, Zz.jsx)(kE, {
                                      opts: Hz,
                                      onChange: zz => {
                                        rz({
                                          colorGradients: zz
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, Zz.jsx)(Nz, {
                                  code: oz,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var On = bz(4249),
                            pn = bz(1846);

                          function dn(zz, uz) {
                            return zz ? On.d.includes(uz) ? zz.getIngameIconUrl(uz) : zz.getItemIconUrl(uz) : null
                          }

                          function Fn(zz) {
                            var uz, bz, Ez;
                            let {
                              part: nz,
                              assets: lz
                            } = zz;
                            const Mz = dn(lz, nz.icon),
                              tz = null !== (uz = null === (bz = nz.style) || void 0 === bz ? void 0 : bz.fontSize) && void 0 !== uz ? uz : "1.8em",
                              Hz = (0, hu.jc)(nz.style);
                            return (0, Zz.jsxs)("span", {
                              className: iz()("DocsBloxdTextIcon", {
                                Missing: !Mz
                              }),
                              style: {
                                width: tz,
                                height: tz,
                                opacity: null === (Ez = nz.style) || void 0 === Ez ? void 0 : Ez.opacity
                              },
                              title: Mz ? void 0 : `No Bloxd icon, item or block is called "${nz.icon}"`,
                              children: [Mz && Hz && (0, Zz.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Hz,
                                  maskImage: `url("${Mz}")`,
                                  WebkitMaskImage: `url("${Mz}")`
                                }
                              }), Mz ? (0, Zz.jsx)("img", {
                                src: Mz,
                                alt: "",
                                className: iz()({
                                  Tinted: Hz
                                })
                              }) : (0, Zz.jsx)(Kz, {
                                name: "image"
                              })]
                            })
                          }

                          function Zn(zz) {
                            let {
                              parts: uz,
                              className: bz
                            } = zz;
                            const Ez = fE(),
                              nz = [];
                            let lz = [];
                            const Mz = zz => {
                              lz.length > 0 && (nz.push((0, Zz.jsx)(pn.b, {
                                text: lz
                              }, `run-${zz}`)), lz = [])
                            };
                            return uz.forEach(((zz, uz) => {
                              "icon" !== yu(zz) || cu(zz.icon) ? lz.push(zz) : (Mz(uz), nz.push((0, Zz.jsx)(Fn, {
                                part: zz,
                                assets: Ez
                              }, `icon-${uz}`)))
                            })), Mz(uz.length), (0, Zz.jsx)("div", {
                              className: iz()("DocsStyledTextPreview", bz),
                              children: nz
                            })
                          }
                          const Rn = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let Kn = null;

                          function wn(zz) {
                            if (Kn ??= document.createElement("canvas").getContext("2d"), !Kn) return "#000000";
                            Kn.fillStyle = "#000000", Kn.fillStyle = zz;
                            const uz = Kn.fillStyle;
                            return uz.startsWith("#") ? uz : "#000000"
                          }

                          function Xn(zz) {
                            let {
                              value: uz,
                              label: bz,
                              onChange: Ez
                            } = zz;
                            return (0, Zz.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, Zz.jsx)("input", {
                                type: "color",
                                value: wn(uz),
                                "aria-label": `${bz} picker`,
                                onChange: zz => {
                                  Ez(zz.target.value)
                                }
                              }), (0, Zz.jsx)("input", {
                                type: "text",
                                value: uz,
                                placeholder: "#ffb914 or gold",
                                "aria-label": bz,
                                spellCheck: !1,
                                onChange: zz => {
                                  Ez(zz.target.value)
                                }
                              })]
                            })
                          }

                          function fn(zz) {
                            let {
                              value: uz,
                              fontAwesomeIcons: bz,
                              onChange: nz
                            } = zz;
                            const lz = fE(),
                              [Mz, tz] = (0, Ez.useState)(cu(uz) ? "fontAwesome" : "bloxd"),
                              [Hz, Oz] = (0, Ez.useState)(""),
                              pz = Hz.trim().toLowerCase(),
                              dz = "bloxd" === Mz ? On.d : bz,
                              Fz = pz ? dz.filter((zz => zz.toLowerCase().includes(pz))) : dz;
                            return (0, Zz.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, Zz.jsx)("input", {
                                type: "text",
                                value: uz,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: zz => {
                                  nz(zz.target.value)
                                }
                              }), (0, Zz.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, Zz.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((zz => (0, Zz.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": Mz === zz,
                                    className: iz()("DocsVariantChip", {
                                      Active: Mz === zz
                                    }),
                                    onClick: () => {
                                      tz(zz)
                                    },
                                    children: "bloxd" === zz ? `Bloxd icons (${On.d.length})` : `Font Awesome (${bz.length})`
                                  }, zz))), (0, Zz.jsx)("input", {
                                    type: "search",
                                    value: Hz,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: zz => {
                                      Oz(zz.target.value)
                                    }
                                  })
                                ]
                              }), (0, Zz.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Fz.map((zz => {
                                  const bz = "bloxd" === Mz ? dn(lz, zz) : null;
                                  return (0, Zz.jsx)("button", {
                                    type: "button",
                                    title: zz,
                                    "aria-label": zz,
                                    "aria-pressed": zz === uz,
                                    className: iz()("DocsIconPickerOption", {
                                      Active: zz === uz
                                    }),
                                    onClick: () => {
                                      nz(zz)
                                    },
                                    children: "fontAwesome" === Mz ? (0, Zz.jsx)(sb.c, {
                                      name: zz
                                    }) : bz ? (0, Zz.jsx)("img", {
                                      src: bz,
                                      alt: ""
                                    }) : (0, Zz.jsx)(Kz, {
                                      name: "image"
                                    })
                                  }, zz)
                                })), 0 === Fz.length && (0, Zz.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Hz, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function sn(zz) {
                            let {
                              property: uz,
                              value: bz,
                              fontAwesomeIcons: Ez,
                              onChange: nz
                            } = zz;
                            const {
                              field: iz,
                              label: lz
                            } = uz, Mz = zz => "" !== zz || uz.isRequired ? zz : void 0;
                            switch (iz.kind) {
                              case "text":
                                return iz.multiline ? (0, Zz.jsx)("textarea", {
                                  value: String(null !== bz && void 0 !== bz ? bz : ""),
                                  rows: 2,
                                  "aria-label": lz,
                                  onChange: zz => {
                                    nz(zz.target.value)
                                  }
                                }) : (0, Zz.jsx)("input", {
                                  type: "text",
                                  value: String(null !== bz && void 0 !== bz ? bz : ""),
                                  "aria-label": lz,
                                  onChange: zz => {
                                    nz(Mz(zz.target.value))
                                  }
                                });
                              case "size":
                                return (0, Zz.jsx)("input", {
                                  type: "text",
                                  value: String(null !== bz && void 0 !== bz ? bz : ""),
                                  placeholder: uz.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": lz,
                                  spellCheck: !1,
                                  onChange: zz => {
                                    nz(Mz(zz.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, Zz.jsx)(Xn, {
                                  value: String(null !== bz && void 0 !== bz ? bz : ""),
                                  label: lz,
                                  onChange: zz => {
                                    nz(Mz(zz))
                                  }
                                });
                              case "colours": {
                                const zz = Array.isArray(bz) ? bz : [],
                                  uz = zz => {
                                    nz(zz.length > 0 ? zz : void 0)
                                  };
                                return (0, Zz.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [zz.map(((bz, Ez) => (0, Zz.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, Zz.jsx)(Xn, {
                                      value: bz,
                                      label: `${lz} ${Ez+1}`,
                                      onChange: bz => {
                                        uz(zz.map(((zz, uz) => uz === Ez ? bz : zz)))
                                      }
                                    }), (0, Zz.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Ez+1}`,
                                      onClick: () => {
                                        uz(zz.filter(((zz, uz) => uz !== Ez)))
                                      },
                                      children: (0, Zz.jsx)(Kz, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Ez))), (0, Zz.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var bz;
                                      uz([...zz, null !== (bz = zz.at(-1)) && void 0 !== bz ? bz : "#ffffff"])
                                    },
                                    children: [(0, Zz.jsx)(Kz, {
                                      name: "plus"
                                    }), 0 === zz.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var tz;
                                const zz = "number" === typeof bz ? bz : Number(null !== (tz = uz.defaultText) && void 0 !== tz ? tz : 0);
                                return (0, Zz.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, Zz.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: zz,
                                    "aria-label": lz,
                                    onChange: zz => {
                                      nz(Number(zz.target.value))
                                    }
                                  }), (0, Zz.jsx)("output", {
                                    children: zz.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, Zz.jsxs)("select", {
                                  value: String(null !== bz && void 0 !== bz ? bz : ""),
                                  "aria-label": lz,
                                  onChange: zz => {
                                    nz(Mz(zz.target.value))
                                  },
                                  children: [!uz.isRequired && (0, Zz.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", uz.defaultText, ")"]
                                  }), iz.options.map((zz => (0, Zz.jsx)("option", {
                                    value: zz,
                                    children: zz
                                  }, zz)))]
                                });
                              case "icon":
                                return (0, Zz.jsx)(fn, {
                                  value: String(null !== bz && void 0 !== bz ? bz : ""),
                                  fontAwesomeIcons: Ez,
                                  onChange: nz
                                })
                            }
                          }

                          function rn(zz) {
                            let uz;
                            try {
                              uz = JSON.parse(zz)
                            } catch (bz) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${bz.message}`
                              }
                            }
                            return bb(uz) ? {
                              part: uz,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function Nn(zz) {
                            let {
                              parts: uz,
                              index: bz,
                              fontAwesomeIcons: nz,
                              onChange: iz,
                              aJ: lz,
                              onClose: Mz
                            } = zz;
                            const tz = (0, Ez.useContext)(Zu),
                              Oz = (0, Ez.useRef)(null),
                              pz = uz[bz],
                              dz = yu(pz),
                              [Fz, Rz] = (0, Ez.useState)((() => JSON.stringify(pz, null, 2))),
                              wz = (0, Ez.useMemo)((() => "other" === dz ? rn(Fz).error : null), [dz, Fz]);
                            (0, Ez.useEffect)((() => {
                              var zz;
                              null === (zz = Oz.current) || void 0 === zz || zz.focus()
                            }), []);
                            const Xz = (0, Zz.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: zz => {
                                zz.target === zz.currentTarget && Mz()
                              },
                              children: (0, Zz.jsxs)("div", {
                                ref: Oz,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${bz+1}: ${gu[dz]}`,
                                tabIndex: -1,
                                onKeyDown: zz => {
                                  "Escape" === zz.key ? (zz.stopPropagation(), Mz()) : "Tab" === zz.key && Oz.current && function(zz, uz) {
                                    const bz = Array.from(zz.querySelectorAll(Tu)),
                                      Ez = bz[0],
                                      nz = bz.at(-1);
                                    if (!Ez || !nz) return;
                                    const iz = document.activeElement;
                                    !uz.shiftKey || iz !== Ez && iz !== zz ? uz.shiftKey || iz !== nz || (uz.preventDefault(), Ez.focus()) : (uz.preventDefault(), nz.focus())
                                  }(Oz.current, zz)
                                },
                                children: [(0, Zz.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, Zz.jsxs)("div", {
                                    children: [(0, Zz.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", bz + 1]
                                    }), (0, Zz.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: gu[dz]
                                    })]
                                  }), (0, Zz.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: Mz,
                                    children: (0, Zz.jsx)(Kz, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, Zz.jsx)(Zn, {
                                  parts: uz,
                                  className: "DocsTextDialogPreview"
                                }), (0, Zz.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === dz ? (0, Zz.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, Zz.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, Zz.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Fz,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: zz => {
                                        Rz(zz.target.value);
                                        const uz = rn(zz.target.value);
                                        null !== uz.part && iz(uz.part)
                                      }
                                    }), wz && (0, Zz.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: wz
                                    })]
                                  }) : Qu[dz].map((zz => {
                                    const uz = eu(pz, zz.path),
                                      bz = zz.isRequired ? JSON.stringify(Iu(pz, zz.path)) === JSON.stringify(pz) : void 0 === uz;
                                    return (0, Zz.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, Zz.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, Zz.jsx)("span", {
                                          children: zz.label
                                        }), (0, Zz.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: bz,
                                          "aria-label": `Reset ${zz.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            iz(Iu(pz, zz.path))
                                          },
                                          children: [(0, Zz.jsx)(Kz, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, Zz.jsx)(sn, {
                                        property: zz,
                                        value: uz,
                                        fontAwesomeIcons: nz,
                                        onChange: uz => {
                                          iz(ju(pz, zz.path, uz))
                                        }
                                      }), !zz.isRequired && (0, Zz.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", zz.defaultText]
                                      })]
                                    }, zz.path.join("."))
                                  }))
                                }), (0, Zz.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, Zz.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: lz,
                                    children: [(0, Zz.jsx)(Kz, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, Zz.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: Mz,
                                    children: "Done"
                                  })]
                                }), (0, Zz.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: Rn.map((zz => (0, Zz.jsx)("option", {
                                    value: zz
                                  }, zz)))
                                })]
                              })
                            });
                            return tz ? (0, Hz.createPortal)(Xz, tz) : Xz
                          }
                          const vn = [{
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
                            xn = Object.keys(Su);

                          function Jn(zz) {
                            let {
                              fontAwesomeIcons: uz
                            } = zz;
                            const [bz, nz] = (0, Ez.useState)(vn[0].parts), [lz, Mz] = (0, Ez.useState)((() => ku(vn[0].parts))), [tz, Hz] = (0, Ez.useState)(null), [Oz, pz] = (0, Ez.useState)(!1), [dz, Fz] = (0, Ez.useState)(null), [Rz, wz] = (0, Ez.useState)(!1), [Xz, fz] = (0, Ez.useState)(null), sz = (0, Ez.useRef)(null), rz = ku(bz);
                            (0, Ez.useLayoutEffect)((() => {
                              var zz;
                              if (!Xz) return;
                              const uz = zz => {
                                  var uz;
                                  return null === (uz = sz.current) || void 0 === uz ? void 0 : uz.querySelector(`[data-focus-key="${zz}"]`)
                                },
                                bz = uz(Xz.key);
                              null === (zz = bz && !bz.disabled ? bz : uz(Xz.fallback)) || void 0 === zz || zz.focus(), fz(null)
                            }), [Xz]);
                            const oz = zz => {
                                nz(zz), Mz(ku(zz)), Hz(null)
                              },
                              vz = zz => {
                                oz(bz.filter(((uz, bz) => bz !== zz))), fz({
                                  key: `edit-${Math.min(zz,bz.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              xz = (zz, uz) => {
                                const Ez = [...bz],
                                  [nz] = Ez.splice(zz, 1);
                                Ez.splice(zz + uz, 0, nz), oz(Ez);
                                fz({
                                  key: `${uz<0?"up":"down"}-${zz+uz}`,
                                  fallback: `edit-${zz+uz}`
                                })
                              };
                            return (0, Zz.jsxs)("section", {
                              ref: sz,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, Zz.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, Zz.jsxs)("div", {
                                  children: [(0, Zz.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, Zz.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, Zz.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: vn.map((zz => (0, Zz.jsx)("button", {
                                  type: "button",
                                  className: iz()("DocsVariantChip", {
                                    Active: rz === ku(zz.parts)
                                  }),
                                  onClick: () => {
                                    oz(zz.parts)
                                  },
                                  children: zz.label
                                }, zz.label)))
                              }), (0, Zz.jsx)(Zn, {
                                parts: bz,
                                className: "DocsTextEditorPreview"
                              }), (0, Zz.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, Zz.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Zz.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, Zz.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [bz.map(((zz, uz) => {
                                      const Ez = yu(zz);
                                      return (0, Zz.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, Zz.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${uz}`,
                                          "aria-label": `Edit part ${uz+1}, ${gu[Ez]}`,
                                          onClick: () => {
                                            Fz(uz)
                                          },
                                          children: [(0, Zz.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: gu[Ez]
                                          }), (0, Zz.jsx)(Zn, {
                                            parts: [zz],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Ez && (0, Zz.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Bu(zz)
                                          })]
                                        }), (0, Zz.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, Zz.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${uz+1} up`,
                                            "data-focus-key": `up-${uz}`,
                                            disabled: 0 === uz,
                                            onClick: () => {
                                              xz(uz, -1)
                                            },
                                            children: (0, Zz.jsx)(Kz, {
                                              name: "chevron-up"
                                            })
                                          }), (0, Zz.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${uz+1} down`,
                                            "data-focus-key": `down-${uz}`,
                                            disabled: uz === bz.length - 1,
                                            onClick: () => {
                                              xz(uz, 1)
                                            },
                                            children: (0, Zz.jsx)(Kz, {
                                              name: "chevron-down"
                                            })
                                          }), (0, Zz.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${uz+1}`,
                                            onClick: () => {
                                              vz(uz)
                                            },
                                            children: (0, Zz.jsx)(Kz, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, uz)
                                    })), 0 === bz.length && (0, Zz.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, Zz.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: zz => {
                                      "Escape" === zz.key && Rz && (zz.stopPropagation(), wz(!1), fz({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, Zz.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Rz,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        wz(!Rz)
                                      },
                                      children: [(0, Zz.jsx)(Kz, {
                                        name: "plus"
                                      }), "Add a part", (0, Zz.jsx)(Kz, {
                                        name: Rz ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Rz && (0, Zz.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: xn.map((zz => (0, Zz.jsx)("li", {
                                        children: (0, Zz.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (zz => {
                                              oz([...bz, Su[zz]]), wz(!1), Fz(bz.length)
                                            })(zz)
                                          },
                                          children: gu[zz]
                                        })
                                      }, zz)))
                                    })]
                                  })]
                                }), (0, Zz.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, Zz.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, Zz.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Oz,
                                      onClick: () => {
                                        pz(!Oz)
                                      },
                                      children: [(0, Zz.jsx)(Kz, {
                                        name: Oz ? "check" : "pencil"
                                      }), Oz ? "Done" : "Edit"]
                                    })]
                                  }), Oz ? (0, Zz.jsxs)(Zz.Fragment, {
                                    children: [(0, Zz.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: lz,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: zz => {
                                        Mz(zz.target.value);
                                        const uz = Eb(zz.target.value);
                                        Hz(uz.error), uz.parts && nz(uz.parts)
                                      }
                                    }), tz && (0, Zz.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: tz
                                    })]
                                  }) : (0, Zz.jsx)(Nz, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${rz})`
                                  })]
                                })]
                              }), null !== dz && dz < bz.length && (0, Zz.jsx)(Nn, {
                                parts: bz,
                                index: dz,
                                fontAwesomeIcons: uz,
                                onChange: zz => {
                                  ((zz, uz) => {
                                    oz(bz.map(((bz, Ez) => Ez === zz ? uz : bz)))
                                  })(dz, zz)
                                },
                                aJ: () => {
                                  vz(dz), Fz(null)
                                },
                                onClose: () => {
                                  Fz(null), fz({
                                    key: `edit-${dz}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var An = bz(4605),
                            Tn = bz(4590),
                            Ln = bz(4601),
                            Pn = bz(4609);
                          const Gn = 40,
                            an = 800,
                            Vn = 150,
                            mn = 8e3,
                            qn = 2e3;

                          function hn(zz, uz) {
                            return 12 * Math.log2(uz / zz)
                          }

                          function Un(zz, uz) {
                            return Math.round(zz * 2 ** (uz / 12) * 10) / 10
                          }

                          function cn(zz) {
                            return `${zz} ms`
                          }

                          function gn(zz) {
                            return `${zz} st`
                          }
                          const Sn = [{
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

                          function yn(zz) {
                            let {
                              synth: uz,
                              onChange: bz
                            } = zz;
                            const Ez = (0, An.k)(uz);
                            return (0, Zz.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, Zz.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Zz.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, Zz.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, Zz.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, Zz.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, Zz.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: An.h.map((zz => (0, Zz.jsx)("button", {
                                      type: "button",
                                      className: iz()("DocsVariantChip", {
                                        Active: uz.waveform === zz
                                      }),
                                      "aria-pressed": uz.waveform === zz,
                                      onClick: () => {
                                        bz({
                                          waveform: zz
                                        })
                                      },
                                      children: zz
                                    }, zz)))
                                  })]
                                }), (0, Zz.jsx)(YE, {
                                  label: "Pitch",
                                  min: 0,
                                  max: hn(Gn, an),
                                  step: .1,
                                  value: hn(Gn, uz.pitchHz),
                                  format: () => `${uz.pitchHz} Hz`,
                                  onChange: zz => {
                                    bz({
                                      pitchHz: Un(Gn, zz)
                                    })
                                  }
                                }), (0, Zz.jsx)(YE, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: uz.syllableMs,
                                  format: cn,
                                  onChange: zz => {
                                    bz({
                                      syllableMs: zz
                                    })
                                  }
                                }), (0, Zz.jsx)(YE, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: uz.volume,
                                  onChange: zz => {
                                    bz({
                                      volume: zz
                                    })
                                  }
                                })]
                              }), (0, Zz.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Zz.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, Zz.jsx)(YE, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: uz.durationMs,
                                  format: cn,
                                  onChange: zz => {
                                    bz({
                                      durationMs: zz
                                    })
                                  }
                                }), (0, Zz.jsx)(YE, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Ez.durationMs,
                                  step: 1,
                                  value: Ez.attackMs,
                                  format: cn,
                                  onChange: zz => {
                                    bz({
                                      attackMs: zz
                                    })
                                  }
                                }), (0, Zz.jsx)(YE, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Ez.durationMs - Ez.attackMs,
                                  step: 1,
                                  value: Ez.releaseMs,
                                  format: cn,
                                  onChange: zz => {
                                    bz({
                                      releaseMs: zz
                                    })
                                  }
                                }), (0, Zz.jsx)(YE, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: uz.glideSemitones,
                                  format: gn,
                                  onChange: zz => {
                                    bz({
                                      glideSemitones: zz
                                    })
                                  }
                                }), (0, Zz.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, Zz.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== uz.lowpassHz,
                                    onChange: zz => {
                                      bz({
                                        lowpassHz: zz.target.checked ? qn : null
                                      })
                                    }
                                  }), (0, Zz.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== uz.lowpassHz && (0, Zz.jsx)(YE, {
                                  label: "Filter",
                                  min: 0,
                                  max: hn(Vn, mn),
                                  step: .1,
                                  value: hn(Vn, uz.lowpassHz),
                                  format: () => `${uz.lowpassHz} Hz`,
                                  onChange: zz => {
                                    bz({
                                      lowpassHz: Un(Vn, zz)
                                    })
                                  }
                                })]
                              }), (0, Zz.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, Zz.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), Sn.map((zz => {
                                  let {
                                    key: Ez,
                                    label: nz,
                                    max: iz
                                  } = zz;
                                  return (0, Zz.jsx)(YE, {
                                    label: nz,
                                    min: 0,
                                    max: iz,
                                    step: .1,
                                    value: uz.intonation[Ez],
                                    format: gn,
                                    onChange: zz => {
                                      bz({
                                        intonation: {
                                          ...uz.intonation,
                                          [Ez]: zz
                                        }
                                      })
                                    }
                                  }, Ez)
                                }))]
                              })]
                            })
                          }
                          const Dn = Object.keys(An.i),
                            Qn = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function Wn(zz) {
                            var uz;
                            const bz = JSON.stringify((0, An.k)(zz));
                            return null !== (uz = Dn.find((zz => JSON.stringify((0, An.k)(An.i[zz])) === bz))) && void 0 !== uz ? uz : null
                          }

                          function en(zz) {
                            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof zz || null === zz) return JSON.stringify(zz);
                            return `{\n${Object.entries(zz).map((zz=>{let[bz,Ez]=zz;return`${uz}    ${bz}: ${en(Ez,`${uz}    `)},`})).join("\n")}\n${uz}}`
                          }

                          function jn(zz, uz, bz) {
                            const Ez = Wn(zz),
                              nz = [`    line: ${JSON.stringify(uz)},`];
                            return bz && nz.push(`    speakerName: ${JSON.stringify(bz)},`), nz.push("    voice,"), `const voice = ${Ez?JSON.stringify(Ez):en((0,An.k)(zz))}\n\napi.setClientOption(playerId, "dialogue", {\n${nz.join("\n")}\n})`
                          }
                          const In = 400,
                            Bn = 90;
                          let Cn = null;

                          function Yn(zz, uz, bz) {
                            return Cn ??= new AudioContext, Cn.resume(), (0, Pn.c)(Cn, Cn.destination, zz, uz, bz, (() => {}))
                          }

                          function kn() {
                            const [zz, uz] = (0, Ez.useState)(An.i.regular), [bz, nz] = (0, Ez.useState)(Qn[0]), [lz, Mz] = (0, Ez.useState)("Innkeeper"), [tz, Hz] = (0, Ez.useState)(0), Oz = OE((zz => zz.volume)), pz = (0, Ez.useRef)(null), dz = (0, Ez.useRef)(0), Fz = (0, Ez.useRef)(0), Rz = () => {
                              var zz;
                              null === (zz = pz.current) || void 0 === zz || zz.call(pz), pz.current = null
                            };
                            (0, Ez.useEffect)((() => () => {
                              var zz;
                              null === (zz = pz.current) || void 0 === zz || zz.call(pz), window.clearTimeout(dz.current)
                            }), []);
                            const wz = (0, Ez.useMemo)((() => ({
                                line: bz,
                                speakerName: lz || void 0,
                                voice: zz
                              })), [bz, lz, zz]),
                              Xz = (0, Ez.useRef)(wz);
                            Xz.current = wz;
                            const sz = Wn(zz),
                              rz = zz => {
                                window.clearTimeout(dz.current), Rz();
                                const {
                                  plan: uz,
                                  synth: bz
                                } = (0, Ln.g)(zz);
                                bz && (pz.current = Yn(bz, uz.blips, Oz)), Hz((zz => zz + 1))
                              },
                              oz = jn(zz, bz, lz);
                            return (0, Zz.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, Zz.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, Zz.jsxs)("div", {
                                  children: [(0, Zz.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, Zz.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, Zz.jsx)(fz, {
                                  text: oz,
                                  label: "Copy code"
                                })]
                              }), (0, Zz.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [Dn.map((zz => (0, Zz.jsx)("button", {
                                  type: "button",
                                  className: iz()("DocsVariantChip", {
                                    Active: sz === zz
                                  }),
                                  "aria-pressed": sz === zz,
                                  onClick: () => {
                                    (zz => {
                                      const bz = An.i[zz];
                                      uz(bz), rz({
                                        ...wz,
                                        voice: bz
                                      })
                                    })(zz)
                                  },
                                  children: zz
                                }, zz))), !sz && (0, Zz.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, Zz.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, Zz.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, Zz.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, Zz.jsx)(Tn.b, {
                                      display: wz
                                    }, tz)
                                  }), (0, Zz.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: zz => {
                                      zz.preventDefault(), rz(wz)
                                    },
                                    children: [(0, Zz.jsx)("input", {
                                      value: bz,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: zz => {
                                        nz(zz.target.value)
                                      }
                                    }), (0, Zz.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, Zz.jsx)(Kz, {
                                        name: "play"
                                      }), (0, Zz.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, Zz.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: Qn.map((zz => (0, Zz.jsx)("button", {
                                      type: "button",
                                      className: iz()("DocsVariantChip", {
                                        Active: bz === zz
                                      }),
                                      onClick: () => {
                                        var uz;
                                        nz(uz = zz), rz({
                                          ...wz,
                                          line: uz
                                        })
                                      },
                                      children: zz
                                    }, zz)))
                                  }), (0, Zz.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, Zz.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, Zz.jsx)("input", {
                                      value: lz,
                                      placeholder: "No name",
                                      onChange: zz => {
                                        Mz(zz.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, Zz.jsx)(yn, {
                                  synth: zz,
                                  onChange: bz => {
                                    const Ez = {
                                      ...zz,
                                      ...bz
                                    };
                                    uz(Ez);
                                    const nz = {
                                        ...wz,
                                        voice: Ez
                                      },
                                      iz = performance.now();
                                    if (iz - Fz.current >= Bn) {
                                      Fz.current = iz, Rz();
                                      const zz = (0, Ln.g)(nz).plan.blips[0];
                                      zz && (pz.current = Yn((0, An.k)(Ez), [{
                                        ...zz,
                                        atMs: 0
                                      }], Oz))
                                    }
                                    window.clearTimeout(dz.current), dz.current = window.setTimeout((() => {
                                      rz(Xz.current)
                                    }), In)
                                  }
                                })]
                              }), (0, Zz.jsx)(Nz, {
                                code: oz,
                                lang: "ts"
                              })]
                            })
                          }
                          var zi = bz(4629);
                          const ui = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            bi = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            Ei = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${bi}`, "g"), zi.l],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, zi.l]
                            ];

                          function ni(zz) {
                            return `${zz.pageId}#${zz.anchor}`
                          }
                          let ii, li, Mi;

                          function ti(zz) {
                            const uz = (0, vz.e)(zz),
                              bz = new Set;
                            for (const [, , Ez] of uz.matchAll(vz.b)) {
                              const zz = Ez.startsWith("#") ? yz(Ez) : null,
                                uz = zz ? ni({
                                  pageId: zz.page.id,
                                  anchor: zz.anchor
                                }) : null;
                              null !== uz && (ii || (ii = new Set(qz.flatMap((zz => Tz(zz.layout) ? gz(zz).sections.map((uz => ni({
                                pageId: zz.id,
                                anchor: uz.heading.anchor
                              }))) : [])))), ii).has(uz) && bz.add(uz)
                            }
                            for (const [, , Ez] of uz.matchAll(ui)) {
                              const zz = du(Ez);
                              zz && bz.add(ni(zz))
                            }
                            return bz
                          }

                          function Hi(zz, uz) {
                            const bz = new Set,
                              Ez = function(zz) {
                                return zz.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(zz);
                            for (const [, nz] of Ez.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) bz.add(nz);
                            for (const [nz, iz] of Ei)
                              for (const [, zz] of(0, zi.e)(Ez, nz, iz)) uz.has(zz) && bz.add(zz);
                            return bz
                          }

                          function Oi(zz, uz, bz, Ez) {
                            const nz = zz.get(uz);
                            nz ? !Ez && nz.some((zz => zz.pageId === bz.pageId)) || nz.push(bz) : zz.set(uz, [bz])
                          }
                          const di = /^[A-Za-z_$][\w$]*$/;

                          function Fi(zz) {
                            return di.test(zz.name) ? zz.name : "options"
                          }

                          function Zi(zz, uz) {
                            const bz = zz.params.map(Fi).join(", ");
                            return uz ? `${zz.name} = (${bz}) => {\n\t\n}` : `api.${zz.name}(${bz})`
                          }

                          function Ri(zz) {
                            let {
                              method: uz,
                              isCallback: bz
                            } = zz;
                            return (0, Zz.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, Zz.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [bz ? (0, Zz.jsxs)(Zz.Fragment, {
                                  children: [(0, Zz.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: uz.name
                                  }), (0, Zz.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, Zz.jsxs)(Zz.Fragment, {
                                  children: [(0, Zz.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, Zz.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: uz.name
                                  }), (0, Zz.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), uz.params.map(((zz, bz) => (0, Zz.jsxs)(Ez.Fragment, {
                                  children: [bz > 0 && (0, Zz.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, Zz.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${uz.name}-${Fi(zz)}`,
                                    children: zz.name
                                  })]
                                }, zz.name))), (0, Zz.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: bz ? ") => " : ")"
                                }), bz && !uz.returns && (0, Zz.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), uz.returns && uz.returns.type && (0, Zz.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!bz && (0, Zz.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, Zz.jsx)(xu, {
                                  type: uz.returns.type
                                })]
                              })]
                            })
                          }

                          function Ki(zz) {
                            let {
                              title: uz,
                              references: bz
                            } = zz;
                            const nz = (0, Ez.useContext)(Fu);
                            return (0, Zz.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, Zz.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: uz
                              }), bz.map((zz => (0, Zz.jsx)(lz.e, {
                                to: Qz(nz, Uz(zz.pageId), zz.anchor),
                                children: zz.label
                              }, `${zz.pageId}#${zz.anchor}`)))]
                            })
                          }

                          function wi(zz) {
                            var uz, bz;
                            let {
                              pageId: Ez,
                              anchor: nz
                            } = zz;
                            const iz = ni({
                                pageId: Ez,
                                anchor: nz
                              }),
                              lz = null !== (uz = function() {
                                if (!Mi) {
                                  Mi = new Map;
                                  const Ez = new Set(qz.filter((zz => "callbacks" === zz.layout)).flatMap((zz => gz(zz).sections.map((zz => zz.heading.text)))));
                                  for (const nz of qz)
                                    if ("article" === nz.layout || "snippets" === nz.layout)
                                      for (const iz of (0, vz.n)(gz(nz)))
                                        for (const {
                                            code: lz
                                          }
                                          of(0, vz.f)(iz.blocks))
                                          for (const Mz of Hi(lz, Ez)) {
                                            const Ez = pu().get(Mz);
                                            if (Ez) {
                                              var zz, uz, bz;
                                              const lz = {
                                                pageId: nz.id,
                                                anchor: null !== (zz = null === (uz = iz.heading) || void 0 === uz ? void 0 : uz.anchor) && void 0 !== zz ? zz : "",
                                                label: null !== (bz = nz.navTitle) && void 0 !== bz ? bz : nz.title
                                              };
                                              Oi(Mi, ni(Ez), lz, !1)
                                            }
                                          }
                                }
                                return Mi
                              }().get(iz)) && void 0 !== uz ? uz : [],
                              Mz = null !== (bz = function() {
                                if (!li) {
                                  li = new Map;
                                  const zz = Uz("changelog");
                                  for (const uz of gz(zz).sections) {
                                    const bz = new Set(uz.blocks.flatMap((zz => [...ti(zz)])));
                                    for (const Ez of bz) {
                                      const bz = {
                                        pageId: zz.id,
                                        anchor: uz.heading.anchor,
                                        label: uz.heading.text
                                      };
                                      Oi(li, Ez, bz, !0)
                                    }
                                  }
                                }
                                return li
                              }().get(iz)) && void 0 !== bz ? bz : [];
                            return 0 === lz.length && 0 === Mz.length ? null : (0, Zz.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [lz.length > 0 && (0, Zz.jsx)(Ki, {
                                title: "Used in",
                                references: lz
                              }), Mz.length > 0 && (0, Zz.jsx)(Ki, {
                                title: "Changelog",
                                references: Mz
                              })]
                            })
                          }

                          function Xi(zz) {
                            let {
                              method: uz,
                              pageId: bz,
                              anchor: Ez,
                              isCallback: nz
                            } = zz;
                            const iz = nz ? void 0 : Mu().get(uz.name),
                              lz = uz.description.length > 0 || null === iz || void 0 === iz || !iz.description ? uz.description : (0, vz.t)(iz.description);
                            return (0, Zz.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, Zz.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Zz.jsx)(Hb, {
                                  level: 2,
                                  text: uz.name,
                                  anchor: Ez,
                                  className: "DocsCardTitle"
                                }), (0, Zz.jsx)(fz, {
                                  text: Zi(uz, nz),
                                  label: nz ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Zz.jsx)(Ri, {
                                method: uz,
                                isCallback: nz
                              }), iz && null !== iz.deprecation && (0, Zz.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, Zz.jsx)("strong", {
                                  children: "Deprecated"
                                }), iz.deprecation && (0, Zz.jsxs)(Zz.Fragment, {
                                  children: [": ", (0, Zz.jsx)(ou, {
                                    text: (Mz = iz.deprecation, (0, zi.t)(Mz, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, zi.j)("`\\w"), (zz => {
                                      let [uz] = zz;
                                      return pu().has(uz) ? `\`${uz}\`` : uz
                                    })))
                                  })]
                                })]
                              }), lz.length > 0 && (0, Zz.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Zz.jsx)(Fb, {
                                  blocks: lz
                                })
                              }), uz.params.length > 0 && (0, Zz.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Zz.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, Zz.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: uz.params.map((zz => (0, Zz.jsxs)("div", {
                                    id: `${uz.name}-${Fi(zz)}`,
                                    className: "DocsParam",
                                    children: [(0, Zz.jsxs)("dt", {
                                      children: [(0, Zz.jsx)("code", {
                                        className: "DocsParamName",
                                        children: zz.name
                                      }), (0, Zz.jsx)(xu, {
                                        type: zz.type
                                      })]
                                    }), zz.description && (0, Zz.jsx)("dd", {
                                      children: (0, Zz.jsx)(ou, {
                                        text: zz.description
                                      })
                                    })]
                                  }, zz.name)))
                                })]
                              }), uz.returns && (uz.returns.type || uz.returns.description.length > 0) && (0, Zz.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, Zz.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, Zz.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [uz.returns.type && (0, Zz.jsx)(xu, {
                                    type: uz.returns.type
                                  }), uz.returns.description.length > 0 && (0, Zz.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, Zz.jsx)(Fb, {
                                      blocks: uz.returns.description
                                    })
                                  })]
                                })]
                              }), (0, Zz.jsx)(wi, {
                                pageId: bz,
                                anchor: Ez
                              })]
                            });
                            var Mz
                          }

                          function fi(zz) {
                            var uz;
                            return null !== zz.defaultValue && "undefined" !== zz.defaultValue ? zz.defaultValue : null !== (uz = zz.example) && void 0 !== uz ? uz : "value"
                          }

                          function si(zz) {
                            let {
                              setting: uz,
                              pageId: bz,
                              anchor: Ez,
                              setterSnippet: nz
                            } = zz;
                            const iz = null === uz.defaultValue ? null : wu(uz.defaultValue);
                            return (0, Zz.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, Zz.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, Zz.jsx)(Hb, {
                                  level: 2,
                                  text: uz.name,
                                  anchor: Ez,
                                  className: "DocsCardTitle"
                                }), (0, Zz.jsx)(fz, {
                                  text: nz(uz.name, fi(uz)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, Zz.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, Zz.jsxs)("div", {
                                  children: [(0, Zz.jsx)("dt", {
                                    children: "Type"
                                  }), (0, Zz.jsx)("dd", {
                                    children: (0, Zz.jsx)(xu, {
                                      type: uz.type
                                    })
                                  })]
                                }), null !== uz.defaultValue && (0, Zz.jsxs)("div", {
                                  children: [(0, Zz.jsx)("dt", {
                                    children: "Default"
                                  }), (0, Zz.jsx)("dd", {
                                    children: (0, Zz.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [iz && (0, Zz.jsx)(Xu, {
                                        colour: iz
                                      }), uz.defaultValue]
                                    })
                                  })]
                                }), null !== uz.example && (0, Zz.jsxs)("div", {
                                  children: [(0, Zz.jsx)("dt", {
                                    children: "Example"
                                  }), (0, Zz.jsx)("dd", {
                                    children: (0, Zz.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: uz.example
                                    })
                                  })]
                                })]
                              }), uz.description.length > 0 && (0, Zz.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, Zz.jsx)(Fb, {
                                  blocks: uz.description
                                })
                              }), (0, Zz.jsx)(wi, {
                                pageId: bz,
                                anchor: Ez
                              })]
                            })
                          }

                          function ri(zz) {
                            let {
                              section: uz
                            } = zz;
                            return (0, Zz.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, Zz.jsx)(Hb, {
                                level: 2,
                                text: uz.heading.text,
                                anchor: uz.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, Zz.jsx)("div", {
                                className: "DocsProse",
                                children: (0, Zz.jsx)(Fb, {
                                  blocks: uz.blocks
                                })
                              })]
                            })
                          }

                          function oi(zz) {
                            let {
                              section: uz
                            } = zz;
                            return (0, Zz.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Zz.jsx)(Hb, {
                                level: uz.heading.level,
                                text: uz.heading.text,
                                anchor: uz.heading.anchor
                              }), (0, Zz.jsx)(Fb, {
                                blocks: uz.blocks
                              })]
                            })
                          }
                          const Ni = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function vi(zz) {
                            let {
                              page: uz,
                              section: bz
                            } = zz;
                            if ("methods" === uz.layout || "callbacks" === uz.layout) return (0, Zz.jsx)(Xi, {
                              method: Nb(bz),
                              pageId: uz.id,
                              anchor: bz.heading.anchor,
                              isCallback: "callbacks" === uz.layout
                            });
                            if ("settings" === uz.layout) {
                              const zz = function(zz) {
                                const uz = {
                                  name: zz.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Ez of zz.blocks) {
                                  var bz;
                                  if (ob(Ez)) continue;
                                  const zz = "paragraph" === Ez.kind ? Ez.text.match(vb) : null;
                                  if (!zz) {
                                    uz.description.push(Ez);
                                    continue
                                  }
                                  const nz = null !== (bz = rb(zz[2])) && void 0 !== bz ? bz : zz[2];
                                  "Type" === zz[1] ? uz.type = nz : "Default" === zz[1] ? uz.defaultValue = nz : "" !== nz && (uz.example = nz)
                                }
                                return uz.type ? uz : null
                              }(bz);
                              if (zz) return (0, Zz.jsx)(si, {
                                setting: zz,
                                pageId: uz.id,
                                anchor: bz.heading.anchor,
                                setterSnippet: uz.setterSnippet
                              })
                            }
                            return "snippets" === uz.layout ? (0, Zz.jsx)(ri, {
                              section: bz
                            }) : "changelog" === uz.layout ? (0, Zz.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, Zz.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, Zz.jsx)(Hb, {
                                  level: 2,
                                  text: bz.heading.text,
                                  anchor: bz.heading.anchor
                                })
                              }), (0, Zz.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, Zz.jsx)(Fb, {
                                  blocks: xb(bz.blocks)
                                })
                              })]
                            }) : uz.gallery ? (0, Zz.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, Zz.jsx)(Hb, {
                                level: bz.heading.level,
                                text: bz.heading.text,
                                anchor: bz.heading.anchor
                              }), (0, Zz.jsx)(JE, {
                                kind: uz.gallery,
                                content: gz(uz),
                                blocks: bz.blocks
                              })]
                            }) : (0, Zz.jsx)(oi, {
                              section: bz
                            })
                          }

                          function xi(zz) {
                            let {
                              page: uz,
                              onTocChange: bz
                            } = zz;
                            const nz = gz(uz),
                              [iz, lz] = (0, Ez.useState)(""),
                              Mz = "article" !== uz.layout,
                              tz = Kb(uz.gallery) ? uz.gallery : null,
                              Hz = null !== tz,
                              Oz = iz.trim().toLowerCase(),
                              pz = (0, Ez.useRef)(null),
                              dz = (0, Ez.useCallback)((zz => {
                                var uz;
                                null === (uz = pz.current) || void 0 === uz || uz.preview(zz)
                              }), []),
                              Fz = (0, Ez.useMemo)((() => {
                                if (!uz.hasParticlePlayground) return [];
                                const zz = Lb(nz.intro).find((zz => "names" === zz.kind && !zz.names.some((zz => null !== cb(zz.name)))));
                                return "names" === (null === zz || void 0 === zz ? void 0 : zz.kind) ? zz.names.map((zz => zz.name)) : []
                              }), [uz, nz]),
                              Rz = (0, Ez.useMemo)((() => {
                                if (!uz.hasTextPlayground) return [];
                                const zz = nz.sections.flatMap((zz => zz.blocks.flatMap((zz => {
                                  var uz;
                                  return (null !== (uz = Tb(zz)) && void 0 !== uz ? uz : []).flatMap((zz => cu(zz.name) ? [zz.name] : []))
                                }))));
                                return [...new Set(zz)]
                              }), [uz, nz]),
                              Kz = (0, Ez.useMemo)((() => Oz ? nz.sections.filter((zz => function(zz, uz) {
                                return !!zz.heading.text.toLowerCase().includes(uz) || zz.blocks.some((zz => (0, vz.e)(zz).toLowerCase().includes(uz)))
                              }(zz, Oz))) : nz.sections), [nz, Oz]),
                              wz = (0, Ez.useMemo)((() => function(zz, uz) {
                                return "article" !== zz.layout ? uz.map((zz => ({
                                  anchor: zz.heading.anchor,
                                  text: zz.heading.text,
                                  level: 2
                                }))) : uz.flatMap((zz => {
                                  const uz = zz.blocks.flatMap((zz => "heading" === zz.kind && 3 === zz.level ? [{
                                    anchor: zz.anchor,
                                    text: zz.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: zz.heading.anchor,
                                    text: zz.heading.text,
                                    level: 2
                                  }, ...uz]
                                }))
                              }(uz, Kz)), [uz, Kz]);
                            return (0, Ez.useEffect)((() => {
                              bz(wz)
                            }), [wz, bz]), (0, Zz.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, Zz.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, Zz.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: nz.title || uz.title
                                }), (0, Zz.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: uz.summary
                                }), (0, Zz.jsx)(jE, {
                                  page: uz
                                }), Mz && (0, Zz.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, Zz.jsxs)("span", {
                                    children: [(0, Zz.jsx)("strong", {
                                      children: nz.sections.length
                                    }), " ", Ni[uz.layout]]
                                  })
                                })]
                              }), "" === uz.slug && (0, Zz.jsx)(TE, {}), tz && (0, Zz.jsx)(aE, {
                                kind: tz
                              }, tz), uz.hasParticlePlayground && (0, Zz.jsx)(Hn, {
                                ref: pz,
                                textures: Fz
                              }), !Hz && nz.intro.length > 0 && (0, Zz.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: uz.gallery ? (0, Zz.jsx)(wE.Provider, {
                                  value: uz.hasParticlePlayground ? dz : null,
                                  children: (0, Zz.jsx)(JE, {
                                    kind: uz.gallery,
                                    content: nz,
                                    blocks: nz.intro
                                  })
                                }) : (0, Zz.jsx)(Fb, {
                                  blocks: xb(nz.intro)
                                })
                              }), uz.hasTextPlayground && (0, Zz.jsx)(Jn, {
                                fontAwesomeIcons: Rz
                              }), uz.hasVoicePlayground && (0, Zz.jsx)(kn, {}), uz.childPageIds && (0, Zz.jsx)(TE, {
                                cards: uz.childPageIds.map((zz => ({
                                  pageId: zz
                                }))),
                                label: uz.title
                              }), Mz && (0, Zz.jsx)(fb, {
                                className: "DocsFilterBar",
                                value: iz,
                                placeholder: `Filter ${nz.sections.length} ${Ni[uz.layout]}\u2026`,
                                label: `Filter ${Ni[uz.layout]}`,
                                onChange: lz,
                                count: Oz ? {
                                  visible: Kz.length,
                                  total: nz.sections.length
                                } : null
                              }), !Hz && (0, Zz.jsxs)("div", {
                                className: `DocsSections Layout-${uz.layout}`,
                                children: [Kz.map((zz => (0, Zz.jsx)(vi, {
                                  page: uz,
                                  section: zz
                                }, zz.heading.anchor))), 0 === Kz.length && (0, Zz.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", Ni[uz.layout], " match \u201c", iz, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const Ji = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function Ai(zz) {
                            let {
                              entry: uz,
                              isActive: bz,
                              onNavigate: Ez,
                              label: nz,
                              children: lz
                            } = zz;
                            return (0, Zz.jsx)("a", {
                              href: `#${uz.anchor}`,
                              "aria-label": nz,
                              className: iz()(`Level${uz.level}`, {
                                Active: bz
                              }),
                              "aria-current": bz ? "location" : void 0,
                              onClick: zz => {
                                zz.preventDefault(), Ez(uz.anchor)
                              },
                              children: lz
                            })
                          }

                          function Ti(zz) {
                            let {
                              toc: uz,
                              activeAnchor: bz,
                              onNavigate: nz
                            } = zz;
                            const lz = Math.max(0, uz.findIndex((zz => zz.anchor === bz))),
                              Mz = (0, Ez.useRef)(null),
                              tz = (0, Ez.useRef)(!1);
                            (0, Ez.useEffect)((() => {
                              var zz, bz;
                              const Ez = null === (zz = Mz.current) || void 0 === zz ? void 0 : zz.closest(".DocsToc"),
                                nz = null === (bz = Mz.current) || void 0 === bz ? void 0 : bz.querySelector(".DocsTimelineNotch.Active");
                              if (!Ez || !nz) return;
                              let iz = 0;
                              if (lz === uz.length - 1) iz = Ez.scrollHeight;
                              else if (lz > 0) {
                                const zz = Ez.getBoundingClientRect(),
                                  uz = nz.getBoundingClientRect();
                                iz = Ez.scrollTop + uz.top + uz.height / 2 - (zz.top + Ez.clientHeight / 2)
                              }
                              Ez.scrollTo({
                                top: iz,
                                behavior: tz.current ? "smooth" : "auto"
                              }), tz.current = !0
                            }), [lz, uz.length]);
                            const Hz = [];
                            return uz.forEach(((zz, uz) => {
                              var bz, Ez, nz;
                              const iz = function(zz) {
                                  const uz = zz.trim().match(Ji);
                                  return uz ? {
                                    day: uz[1],
                                    month: `${uz[2]} ${uz[3]}`
                                  } : null
                                }(zz.text),
                                lz = null !== (bz = null === iz || void 0 === iz ? void 0 : iz.month) && void 0 !== bz ? bz : null;
                              null !== lz && (null === (Ez = Hz.at(-1)) || void 0 === Ez ? void 0 : Ez.month) === lz || Hz.push({
                                month: lz,
                                entries: []
                              }), Hz.at(-1).entries.push({
                                entry: zz,
                                day: null !== (nz = null === iz || void 0 === iz ? void 0 : iz.day) && void 0 !== nz ? nz : null,
                                index: uz
                              })
                            })), (0, Zz.jsx)("ol", {
                              ref: Mz,
                              className: "DocsTimeline",
                              children: Hz.map((zz => {
                                let {
                                  month: uz,
                                  entries: bz
                                } = zz;
                                return (0, Zz.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [uz && (0, Zz.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: uz
                                  }), (0, Zz.jsx)("ol", {
                                    children: bz.map((zz => {
                                      let {
                                        entry: uz,
                                        day: bz,
                                        index: Ez
                                      } = zz;
                                      return (0, Zz.jsx)("li", {
                                        className: iz()("DocsTimelineNotch", {
                                          Passed: Ez < lz,
                                          Active: Ez === lz
                                        }),
                                        children: (0, Zz.jsx)(Ai, {
                                          entry: uz,
                                          isActive: Ez === lz,
                                          onNavigate: nz,
                                          label: uz.text,
                                          children: (0, Zz.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== bz && void 0 !== bz ? bz : uz.text
                                          })
                                        })
                                      }, uz.anchor)
                                    }))
                                  })]
                                }, bz[0].entry.anchor)
                              }))
                            })
                          }

                          function Li(zz) {
                            let {
                              isChangelog: uz,
                              toc: bz,
                              activeAnchor: Ez,
                              onNavigate: nz
                            } = zz;
                            return 0 === bz.length ? null : (0, Zz.jsxs)(Zz.Fragment, {
                              children: [(0, Zz.jsx)("div", {
                                className: "DocsTocTitle",
                                children: uz ? "Updates" : "On this page"
                              }), uz ? (0, Zz.jsx)(Ti, {
                                toc: bz,
                                activeAnchor: Ez,
                                onNavigate: nz
                              }) : (0, Zz.jsx)("ul", {
                                children: bz.map((zz => (0, Zz.jsx)("li", {
                                  children: (0, Zz.jsx)(Ai, {
                                    entry: zz,
                                    isActive: zz.anchor === Ez,
                                    onNavigate: nz,
                                    children: zz.text.replace(/`/g, "")
                                  })
                                }, zz.anchor)))
                              })]
                            })
                          }
                          const Pi = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            Gi = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            ai = 20,
                            Vi = 10,
                            mi = 40,
                            qi = 120;
                          let Ui;

                          function ci(zz) {
                            const uz = zz.gallery;
                            if (!uz) return [];
                            if (Kb(uz)) return function(zz) {
                              return Xb(zz).entries.map((zz => zz.name))
                            }(uz).map((bz => ({
                              page: zz,
                              anchor: Gb(uz, bz),
                              title: bz,
                              kind: Gi[uz],
                              text: "",
                              listedUnder: zz.title
                            })));
                            const bz = gz(zz);
                            return (0, vz.n)(bz).flatMap((Ez => {
                              const nz = Ez.heading ? `${zz.title} \u203a ${Ez.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : zz.title;
                              return Vb(uz, bz, Ez.blocks).flatMap((bz => "names" !== bz.kind ? [] : bz.names.map((Ez => {
                                const iz = bz.isSongs ? "Song" : Gi[uz];
                                return {
                                  page: zz,
                                  anchor: Ez.anchor,
                                  title: Ez.name,
                                  kind: iz,
                                  text: "",
                                  listedUnder: nz
                                }
                              }))))
                            }))
                          }

                          function gi(zz, uz, bz) {
                            const Ez = zz.title.toLowerCase();
                            let nz = 0;
                            if (Ez === uz) nz = 100;
                            else if (Ez.startsWith(uz)) nz = 80;
                            else if (Ez.includes(uz)) nz = 60;
                            else if (bz.every((zz => Ez.includes(zz)))) nz = 45;
                            else {
                              if (!zz.text.toLowerCase().includes(uz)) return 0;
                              nz = 20
                            }
                            return nz - Math.min(Ez.length / 10, 9) + ("Page" === zz.kind ? 8 : "Method" === zz.kind ? 3 : 0) - (zz.listedUnder ? ai : 0)
                          }

                          function Si(zz, uz) {
                            const bz = zz.toLowerCase().indexOf(uz),
                              Ez = Math.max(0, bz - qi / 3);
                            return `${Ez>0?"\u2026":""}${zz.slice(Ez,Ez+qi)}${Ez+qi<zz.length?"\u2026":""}`
                          }

                          function yi(zz) {
                            let {
                              text: uz,
                              query: bz
                            } = zz;
                            const Ez = bz ? uz.toLowerCase().indexOf(bz) : -1;
                            return -1 === Ez ? (0, Zz.jsx)(Zz.Fragment, {
                              children: uz
                            }) : (0, Zz.jsxs)(Zz.Fragment, {
                              children: [uz.slice(0, Ez), (0, Zz.jsx)("mark", {
                                children: uz.slice(Ez, Ez + bz.length)
                              }), uz.slice(Ez + bz.length)]
                            })
                          }

                          function Di(zz) {
                            let {
                              basePath: uz,
                              onClose: bz
                            } = zz;
                            const nz = (0, Mz.z)(),
                              [lz, tz] = (0, Ez.useState)(""),
                              [Hz, Oz] = (0, Ez.useState)(0),
                              pz = (0, Ez.useRef)(null),
                              dz = (0, Ez.useRef)(null),
                              Fz = lz.trim().toLowerCase(),
                              Rz = (0, Ez.useMemo)((() => {
                                const zz = (Ui || (Ui = qz.flatMap((zz => {
                                  const uz = gz(zz);
                                  return [{
                                    page: zz,
                                    anchor: "",
                                    title: zz.title,
                                    kind: "Page",
                                    text: zz.summary
                                  }, ...uz.sections.flatMap((uz => {
                                    const bz = uz.blocks.filter((zz => "paragraph" === zz.kind)).map(vz.e).join(" ").replace(/[`*]/g, ""),
                                      Ez = {
                                        page: zz,
                                        anchor: uz.heading.anchor,
                                        title: uz.heading.text.replace(/`/g, ""),
                                        kind: Pi[zz.layout],
                                        text: bz
                                      },
                                      nz = uz.blocks.flatMap((uz => "article" === zz.layout && "heading" === uz.kind && 3 === uz.level ? [{
                                        page: zz,
                                        anchor: uz.anchor,
                                        title: uz.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Ez.title
                                      }] : []));
                                    return [Ez, ...nz]
                                  })), ...ci(zz)]
                                }))), Ui);
                                if (!Fz) return zz.filter((zz => "Page" === zz.kind));
                                const uz = Fz.split(/\s+/);
                                let bz = 0;
                                return zz.map((zz => ({
                                  entry: zz,
                                  score: gi(zz, Fz, uz)
                                }))).filter((zz => zz.score > 0)).sort(((zz, uz) => uz.score - zz.score)).filter((zz => !zz.entry.listedUnder || (bz++, bz <= Vi))).slice(0, mi).map((zz => zz.entry))
                              }), [Fz]);
                            (0, Ez.useEffect)((() => {
                              Oz(0)
                            }), [Fz]), (0, Ez.useEffect)((() => {
                              const zz = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === zz || void 0 === zz || zz.focus()
                              }
                            }), []), (0, Ez.useEffect)((() => {
                              var zz, uz;
                              null === (zz = pz.current) || void 0 === zz || null === (uz = zz.querySelector(".Active")) || void 0 === uz || uz.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Hz]);
                            const wz = zz => {
                              nz(Qz(uz, zz.page, zz.anchor)), bz()
                            };
                            return (0, Zz.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: zz => {
                                zz.target === zz.currentTarget && bz()
                              },
                              children: (0, Zz.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: zz => {
                                  zz.target !== dz.current && zz.preventDefault()
                                },
                                onKeyDown: zz => {
                                  if ("Escape" === zz.key) bz();
                                  else if ("Tab" === zz.key) {
                                    var uz;
                                    zz.preventDefault(), null === (uz = dz.current) || void 0 === uz || uz.focus()
                                  }
                                },
                                children: [(0, Zz.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, Zz.jsx)(Kz, {
                                    name: "magnifying-glass"
                                  }), (0, Zz.jsx)("input", {
                                    ref: dz,
                                    autoFocus: !0,
                                    value: lz,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Rz.length > 0 ? `DocsSearchResult-${Hz}` : void 0,
                                    onChange: zz => {
                                      tz(zz.target.value)
                                    },
                                    onKeyDown: zz => {
                                      if ("ArrowDown" === zz.key || "ArrowUp" === zz.key) {
                                        zz.preventDefault();
                                        const uz = "ArrowDown" === zz.key ? 1 : -1;
                                        Oz((Hz + uz + Rz.length) % Math.max(Rz.length, 1))
                                      } else "Enter" === zz.key && Rz[Hz] && wz(Rz[Hz])
                                    }
                                  }), (0, Zz.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, Zz.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: pz,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Fz && (0, Zz.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Rz.map(((zz, uz) => {
                                    var bz;
                                    return (0, Zz.jsxs)("li", {
                                      id: `DocsSearchResult-${uz}`,
                                      role: "option",
                                      "aria-selected": uz === Hz,
                                      className: iz()("DocsSearchResult", {
                                        Active: uz === Hz
                                      }),
                                      onMouseMove: () => {
                                        Oz(uz)
                                      },
                                      onClick: () => {
                                        wz(zz)
                                      },
                                      children: [(0, Zz.jsx)(Kz, {
                                        name: zz.page.icon
                                      }), (0, Zz.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, Zz.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, Zz.jsx)(yi, {
                                            text: zz.title,
                                            query: Fz
                                          })
                                        }), zz.text && (0, Zz.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, Zz.jsx)(yi, {
                                            text: Si(zz.text, Fz),
                                            query: Fz
                                          })
                                        })]
                                      }), (0, Zz.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === zz.kind ? "Page" : null !== (bz = zz.listedUnder) && void 0 !== bz ? bz : `${zz.kind} \xb7 ${zz.page.title}`
                                      })]
                                    }, `${zz.page.id}#${zz.anchor}`)
                                  })), Fz && 0 === Rz.length && (0, Zz.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", lz, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function Qi(zz, uz) {
                            if (uz < 10) return `${zz.toFixed(1)}s`;
                            const bz = Math.floor(zz);
                            return `${Math.floor(bz/60)}:${String(bz%60).padStart(2,"0")}`
                          }

                          function Wi() {
                            const zz = OE((zz => zz.track)),
                              uz = OE((zz => zz.volume)),
                              [bz, nz] = (0, Ez.useState)(0),
                              lz = (0, Ez.useRef)(uE);
                            if ((0, Ez.useEffect)((() => {
                                if (!zz) return;
                                if (nz(ZE()), "playing" !== zz.status) return;
                                let uz = 0;
                                const bz = () => {
                                  nz(ZE()), uz = requestAnimationFrame(bz)
                                };
                                return uz = requestAnimationFrame(bz), () => {
                                  cancelAnimationFrame(uz)
                                }
                              }), [zz]), !zz) return null;
                            const Mz = "paused" !== zz.status,
                              tz = Math.min(bz, zz.duration);
                            return (0, Zz.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, Zz.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, Zz.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": Mz ? `Pause ${zz.name}` : `Play ${zz.name}`,
                                  onClick: FE,
                                  children: (0, Zz.jsx)(Kz, {
                                    name: Mz ? "pause" : "play"
                                  })
                                }), (0, Zz.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, Zz.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, Zz.jsx)("code", {
                                      children: zz.name
                                    }), (0, Zz.jsx)("span", {
                                      children: zz.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, Zz.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, Zz.jsx)("span", {
                                      children: Qi(tz, zz.duration)
                                    }), (0, Zz.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: zz.duration || 1,
                                      step: .01,
                                      value: tz,
                                      disabled: 0 === zz.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${Qi(tz,zz.duration)} of ${Qi(zz.duration,zz.duration)}`,
                                      onChange: zz => {
                                        const uz = Number(zz.target.value);
                                        ! function(zz) {
                                          var uz;
                                          lE = zz, null === (uz = nE) || void 0 === uz || uz.seek(zz)
                                        }(uz), nz(uz)
                                      }
                                    }), (0, Zz.jsx)("span", {
                                      children: zz.duration > 0 ? Qi(zz.duration, zz.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, Zz.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, Zz.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === uz ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === uz ? RE(lz.current) : (lz.current = uz, RE(0))
                                    },
                                    children: (0, Zz.jsx)(Kz, {
                                      name: "volume",
                                      className: iz()({
                                        Muted: 0 === uz
                                      })
                                    })
                                  }), (0, Zz.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: uz,
                                    "aria-label": "Volume",
                                    onChange: zz => {
                                      RE(Number(zz.target.value))
                                    }
                                  })]
                                }), (0, Zz.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var uz;
                                    null === (uz = document.querySelector(`[data-docs-track="${CSS.escape(bE(zz.name,zz.isSong))}"]`)) || void 0 === uz || uz.focus(), KE()
                                  },
                                  children: (0, Zz.jsx)(Kz, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var ei = bz(33);
                          const ji = "docsTheme",
                            Ii = window.matchMedia("(prefers-color-scheme: light)");

                          function Bi(zz) {
                            let {
                              theme: uz,
                              onChange: bz
                            } = zz;
                            const Ez = "dark" === uz ? "light" : "dark";
                            return (0, Zz.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Ez} theme`,
                              title: `Switch to ${Ez} theme`,
                              onClick: () => {
                                bz(Ez)
                              },
                              children: (0, Zz.jsx)(Kz, {
                                name: "dark" === uz ? "moon" : "sun"
                              })
                            })
                          }
                          const Ci = "https://github.com/Bloxdy/code-api",
                            Yi = "https://discord.gg/playbloxd",
                            ki = 180,
                            zl = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function ul(zz) {
                            let {
                              basePath: uz,
                              activePageId: bz,
                              onNavigate: Ez
                            } = zz;
                            return (0, Zz.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: hz.map((zz => (0, Zz.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, Zz.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: zz.title
                                }), zz.pageIds.map((zz => {
                                  var nz;
                                  const Mz = Uz(zz);
                                  return (0, Zz.jsxs)(lz.e, {
                                    to: Qz(uz, Mz),
                                    className: iz()("DocsNavLink", {
                                      Active: Mz.id === bz
                                    }),
                                    "aria-current": Mz.id === bz ? "page" : void 0,
                                    onClick: Ez,
                                    children: [(0, Zz.jsx)(Kz, {
                                      name: Mz.icon
                                    }), (0, Zz.jsx)("span", {
                                      children: null !== (nz = Mz.navTitle) && void 0 !== nz ? nz : Mz.title
                                    })]
                                  }, Mz.id)
                                }))]
                              }, zz.title)))
                            })
                          }

                          function bl(zz) {
                            let {
                              basePath: uz,
                              pageId: bz
                            } = zz;
                            const Ez = hz.flatMap((zz => zz.pageIds)),
                              nz = Ez.indexOf(bz),
                              iz = nz > 0 ? Uz(Ez[nz - 1]) : null,
                              Mz = nz < Ez.length - 1 ? Uz(Ez[nz + 1]) : null;
                            return (0, Zz.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [iz ? (0, Zz.jsxs)(lz.e, {
                                className: "DocsPagerLink Previous",
                                to: Qz(uz, iz),
                                children: [(0, Zz.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, Zz.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: iz.title
                                })]
                              }) : (0, Zz.jsx)("span", {}), Mz && (0, Zz.jsxs)(lz.e, {
                                className: "DocsPagerLink Next",
                                to: Qz(uz, Mz),
                                children: [(0, Zz.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, Zz.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Mz.title
                                })]
                              })]
                            })
                          }

                          function El(zz) {
                            let {
                              basePath: uz,
                              embedded: bz = !1
                            } = zz;
                            const {
                              pageSlug: nz = ""
                            } = (0, Mz.D)(), Hz = (0, Mz.v)(), Oz = (0, Mz.z)(), pz = (dz = nz, qz.find((zz => zz.slug === dz)));
                            var dz;
                            const [Fz, Rz] = function() {
                              const [zz, uz] = (0, Ez.useState)((() => {
                                const zz = ei.g.getItem(ji);
                                return "dark" === zz || "light" === zz ? zz : null
                              })), [bz, nz] = (0, Ez.useState)(Ii.matches ? "light" : "dark");
                              return (0, Ez.useEffect)((() => {
                                const zz = () => {
                                  nz(Ii.matches ? "light" : "dark")
                                };
                                return Ii.addEventListener("change", zz), () => {
                                  Ii.removeEventListener("change", zz)
                                }
                              }), []), [null !== zz && void 0 !== zz ? zz : bz, zz => {
                                ei.g.setItem(ji, zz), uz(zz)
                              }]
                            }(), [wz, Xz] = (0, Ez.useState)(null), [fz, sz] = (0, Ez.useState)(!1), [rz, oz] = (0, Ez.useState)(!1), [Nz, xz] = (0, Ez.useState)([]), Jz = function(zz, uz) {
                              const [bz, nz] = (0, Ez.useState)("");
                              return (0, Ez.useEffect)((() => {
                                if (!uz) return;
                                let bz = 0;
                                const Ez = () => {
                                    var Ez, iz;
                                    bz = 0;
                                    const lz = uz.getBoundingClientRect().top + ki;
                                    let Mz = null !== (Ez = null === (iz = zz[0]) || void 0 === iz ? void 0 : iz.anchor) && void 0 !== Ez ? Ez : "";
                                    for (const uz of zz) {
                                      const zz = document.getElementById(uz.anchor);
                                      zz && zz.getBoundingClientRect().top <= lz && (Mz = uz.anchor)
                                    }
                                    uz.scrollTop + uz.clientHeight >= uz.scrollHeight - 2 && uz.scrollTop > 0 && zz.length > 0 && (Mz = zz[zz.length - 1].anchor), nz(Mz)
                                  },
                                  iz = () => {
                                    bz || (bz = requestAnimationFrame(Ez))
                                  };
                                return Ez(), uz.addEventListener("scroll", iz, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(bz), uz.removeEventListener("scroll", iz)
                                }
                              }), [zz, uz]), bz
                            }(Nz, wz), Az = "" === nz && Hz.hash ? function(zz) {
                              const uz = (0, vz.h)(zz);
                              if (Sz(Uz("welcome"), uz)) return null;
                              const bz = Object.hasOwn(Dz, uz) ? Dz[uz] : null;
                              if (bz) return {
                                page: Uz(bz.pageId),
                                anchor: bz.anchor
                              };
                              const Ez = Uz("readme");
                              return Sz(Ez, uz) ? {
                                page: Ez,
                                anchor: uz
                              } : yz(`#${uz}`)
                            }(Hz.hash) : null;
                            (0, Ez.useEffect)((() => (tz.e.set({
                              musicOnFromPage: !1
                            }), () => {
                              tz.e.set({
                                musicOnFromPage: !0
                              }), KE()
                            })), []), (0, Ez.useEffect)((() => {
                              const zz = zz => {
                                const uz = zz.target;
                                if (uz.closest(".DocsTextDialog")) return;
                                const bz = uz.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(uz.tagName);
                                "k" === zz.key && (zz.metaKey || zz.ctrlKey) || "/" === zz.key && !bz ? (zz.preventDefault(), oz(!0)) : "Escape" === zz.key && sz(!1)
                              };
                              return window.addEventListener("keydown", zz), () => {
                                window.removeEventListener("keydown", zz)
                              }
                            }), []);
                            const Tz = (0, Ez.useRef)(null);
                            (0, Ez.useLayoutEffect)((() => {
                              var zz, uz;
                              if (!wz) return;
                              const bz = Tz.current === Hz.pathname;
                              Tz.current = Hz.pathname;
                              const Ez = (0, vz.h)(Hz.hash),
                                nz = Ez ? document.getElementById(Ez) : null;
                              if (null === (zz = wz.querySelector(".DocsTargeted")) || void 0 === zz || zz.classList.remove("DocsTargeted"), null === nz || void 0 === nz || null === (uz = nz.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === uz || uz.classList.add("DocsTargeted"), nz) {
                                var iz;
                                const zz = nz.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (iz = nz.closest(".DocsChangelogEntry")) && void 0 !== iz ? iz : nz).scrollIntoView({
                                  block: zz ? "center" : "start",
                                  behavior: bz ? "smooth" : "auto"
                                })
                              } else bz || wz.scrollTo({
                                top: 0
                              })
                            }), [wz, Hz.pathname, Hz.hash, Hz.key]);
                            const Lz = (0, Ez.useCallback)((() => {
                                sz(!1)
                              }), []),
                              Pz = (0, Ez.useCallback)((zz => {
                                Oz({
                                  hash: zz
                                })
                              }), [Oz]);
                            if (Az) return (0, Zz.jsx)(Mz.c, {
                              replace: !0,
                              to: Qz(uz, Az.page, Az.anchor)
                            });
                            if (!pz) return (0, Zz.jsx)(Mz.c, {
                              replace: !0,
                              to: uz
                            });
                            const Gz = bz ? "div" : "main";
                            return (0, Zz.jsx)(Fu.Provider, {
                              value: uz,
                              children: (0, Zz.jsx)(Zu.Provider, {
                                value: wz,
                                children: (0, Zz.jsxs)("div", {
                                  ref: Xz,
                                  className: iz()("DocsSite", {
                                    Embedded: bz,
                                    NavOpen: fz
                                  }),
                                  "data-theme": Fz,
                                  children: [(0, Zz.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, Zz.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": fz ? "Close menu" : "Open menu",
                                      "aria-expanded": fz,
                                      onClick: () => {
                                        sz(!fz)
                                      },
                                      children: (0, Zz.jsx)(Kz, {
                                        name: fz ? "cross" : "menu"
                                      })
                                    }), (0, Zz.jsxs)(lz.e, {
                                      to: uz,
                                      className: "DocsBrand",
                                      children: [(0, Zz.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, Zz.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, Zz.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, Zz.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        oz(!0)
                                      },
                                      children: [(0, Zz.jsx)(Kz, {
                                        name: "magnifying-glass"
                                      }), (0, Zz.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, Zz.jsxs)("kbd", {
                                        children: [zl ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, Zz.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, Zz.jsxs)("a", {
                                        href: Yi,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Zz.jsx)(Kz, {
                                          name: "discord"
                                        }), (0, Zz.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, Zz.jsxs)("a", {
                                        href: Ci,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, Zz.jsx)(Kz, {
                                          name: "external-link"
                                        }), (0, Zz.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !bz && (0, Zz.jsxs)(lz.e, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, Zz.jsx)(Kz, {
                                          name: "play"
                                        }), (0, Zz.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, Zz.jsx)(Bi, {
                                        theme: Fz,
                                        onChange: Rz
                                      })]
                                    })]
                                  }), (0, Zz.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, Zz.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, Zz.jsx)(ul, {
                                        basePath: uz,
                                        activePageId: pz.id,
                                        onNavigate: Lz
                                      })
                                    }), (0, Zz.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Lz
                                    }), (0, Zz.jsxs)(Gz, {
                                      className: "DocsMain",
                                      children: [(0, Zz.jsx)(xi, {
                                        page: pz,
                                        onTocChange: xz
                                      }, pz.id), (0, Zz.jsx)(bl, {
                                        basePath: uz,
                                        pageId: pz.id
                                      })]
                                    }), (0, Zz.jsx)("aside", {
                                      className: iz()("DocsToc", {
                                        Timeline: "changelog" === pz.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, Zz.jsx)(Li, {
                                        isChangelog: "changelog" === pz.layout,
                                        toc: Nz,
                                        activeAnchor: Jz,
                                        onNavigate: Pz
                                      })
                                    })]
                                  }), (0, Zz.jsx)(Wi, {}), rz && (0, Zz.jsx)(Di, {
                                    basePath: uz,
                                    onClose: () => {
                                      oz(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4489: (zz, uz, bz) => {
                          bz.d(uz, {
                            b: () => Ez,
                            c: () => lz,
                            e: () => Kz,
                            f: () => Rz,
                            g: () => Mz,
                            h: () => nz,
                            k: () => iz,
                            n: () => Zz,
                            q: () => Fz,
                            t: () => dz
                          });
                          const Ez = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function nz(zz) {
                            try {
                              return decodeURIComponent(zz.slice(1))
                            } catch {
                              return zz.slice(1)
                            }
                          }

                          function iz(zz) {
                            return zz.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const lz = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Ez.source}`, "g");

                          function Mz(zz, uz) {
                            return 2 === zz.length ? uz.replace(/^ (.*) $/, "$1") : uz
                          }

                          function tz(zz) {
                            return "" === zz.trim()
                          }

                          function Hz(zz) {
                            const uz = [];
                            for (const bz of zz.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) uz.length > 0 && uz[uz.length - 1].endsWith("\\") ? uz[uz.length - 1] += `|${bz}` : uz.push(bz);
                            return uz.map((zz => zz.trim().replaceAll("\\|", "|")))
                          }
                          const Oz = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function pz(zz) {
                            const uz = [],
                              bz = [{
                                indent: -1,
                                items: uz
                              }];
                            let Ez = null;
                            for (const nz of zz) {
                              const zz = nz.match(Oz);
                              if (!zz) {
                                Ez && (Ez.text += ` ${nz.trim()}`);
                                continue
                              }
                              const uz = zz[1].replace(/\t/g, "  ").length;
                              for (; uz <= bz[bz.length - 1].indent;) bz.pop();
                              Ez = {
                                text: zz[3].trim(),
                                children: []
                              }, bz[bz.length - 1].items.push(Ez), bz.push({
                                indent: uz,
                                items: Ez.children
                              })
                            }
                            return uz
                          }

                          function dz(zz) {
                            const uz = zz.replace(/\r\n/g, "\n").split("\n"),
                              bz = [];
                            let Ez = 0;
                            for (; Ez < uz.length;) {
                              const zz = uz[Ez];
                              if (tz(zz)) {
                                Ez++;
                                continue
                              }
                              const nz = zz.match(/^\s*```\s*(\w*)\s*$/);
                              if (nz) {
                                const zz = [];
                                for (Ez++; Ez < uz.length && !/^\s*```\s*$/.test(uz[Ez]);) zz.push(uz[Ez]), Ez++;
                                Ez++, bz.push({
                                  kind: "code",
                                  lang: nz[1] || "text",
                                  code: zz.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const lz = zz.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (lz) {
                                const zz = lz[2].trim();
                                bz.push({
                                  kind: "heading",
                                  level: lz[1].length,
                                  text: zz,
                                  anchor: iz(zz)
                                }), Ez++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(zz)) {
                                bz.push({
                                  kind: "rule"
                                }), Ez++;
                                continue
                              }
                              if (zz.trim().startsWith("|") && Ez + 1 < uz.length && /^\s*\|[\s:|-]+\|\s*$/.test(uz[Ez + 1])) {
                                const nz = Hz(zz),
                                  iz = [];
                                for (Ez += 2; Ez < uz.length && uz[Ez].trim().startsWith("|");) iz.push(Hz(uz[Ez])), Ez++;
                                bz.push({
                                  kind: "table",
                                  header: nz,
                                  rows: iz
                                });
                                continue
                              }
                              if (zz.startsWith(">")) {
                                const zz = [];
                                for (; Ez < uz.length && uz[Ez].startsWith(">");) zz.push(uz[Ez].replace(/^>\s?/, "")), Ez++;
                                bz.push({
                                  kind: "quote",
                                  blocks: dz(zz.join("\n"))
                                });
                                continue
                              }
                              if (Oz.test(zz)) {
                                const nz = [],
                                  iz = /^\s*\d+\./.test(zz);
                                for (; Ez < uz.length && !tz(uz[Ez]) && (Oz.test(uz[Ez]) || /^\s+\S/.test(uz[Ez]));) nz.push(uz[Ez]), Ez++;
                                bz.push({
                                  kind: "list",
                                  ordered: iz,
                                  items: pz(nz)
                                });
                                continue
                              }
                              const Mz = [];
                              for (; Ez < uz.length && !tz(uz[Ez]) && !/^\s*```/.test(uz[Ez]) && !/^#{1,6}\s/.test(uz[Ez]) && !uz[Ez].startsWith(">") && !Oz.test(uz[Ez]) && (!uz[Ez].trim().startsWith("|") || 0 !== Mz.length);) Mz.push(uz[Ez].trim()), Ez++;
                              0 === Mz.length && (Mz.push(uz[Ez].trim()), Ez++), bz.push({
                                kind: "paragraph",
                                text: Mz.join(" ")
                              })
                            }
                            return bz
                          }

                          function Fz(zz) {
                            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const bz = dz(zz);
                            let Ez = "";
                            const nz = [],
                              iz = [],
                              lz = new Map;
                            for (const Hz of bz) {
                              if ("heading" === Hz.kind) {
                                var Mz;
                                const zz = (null !== (Mz = lz.get(Hz.anchor)) && void 0 !== Mz ? Mz : 0) + 1;
                                lz.set(Hz.anchor, zz), zz > 1 && (Hz.anchor = `${Hz.anchor}-${zz}`)
                              }
                              if ("heading" === Hz.kind && 1 === Hz.level && !Ez) {
                                Ez = Hz.text;
                                continue
                              }
                              if ("heading" === Hz.kind && Hz.level <= uz) {
                                iz.push({
                                  heading: Hz,
                                  blocks: []
                                });
                                continue
                              }
                              const zz = iz.at(-1);
                              zz ? zz.blocks.push(Hz) : nz.push(Hz)
                            }
                            const tz = zz => {
                              for (;
                                "rule" === (null === (uz = zz.at(-1)) || void 0 === uz ? void 0 : uz.kind);) {
                                var uz;
                                zz.pop()
                              }
                            };
                            tz(nz);
                            for (const Hz of iz) tz(Hz.blocks);
                            return {
                              title: Ez,
                              intro: nz,
                              sections: iz
                            }
                          }

                          function Zz(zz) {
                            return [{
                              heading: null,
                              blocks: zz.intro
                            }, ...zz.sections.map((zz => ({
                              heading: zz.heading,
                              blocks: zz.blocks
                            })))]
                          }

                          function Rz(zz) {
                            return zz.flatMap((zz => "code" === zz.kind ? [zz] : "quote" === zz.kind ? Rz(zz.blocks) : []))
                          }

                          function Kz(zz) {
                            switch (zz.kind) {
                              case "heading":
                              case "paragraph":
                                return zz.text;
                              case "code":
                                return zz.code;
                              case "table":
                                return [zz.header, ...zz.rows].map((zz => zz.join(" "))).join(" ");
                              case "list": {
                                const uz = zz => zz.map((zz => `${zz.text} ${uz(zz.children)}`)).join(" ");
                                return uz(zz.items)
                              }
                              case "quote":
                                return zz.blocks.map(Kz).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4598: (zz, uz, bz) => {
                          bz.d(uz, {
                            b: () => Mz
                          });
                          var Ez = bz(56),
                            nz = bz(316),
                            iz = bz(1856),
                            lz = bz(1089);

                          function Mz(zz) {
                            let {
                              text: uz
                            } = zz;
                            const bz = [];
                            let Mz = "";
                            return (0, nz.uc)(uz).forEach(((zz, uz) => {
                              if ("string" === typeof zz || !(0, iz.d)(zz.icon)) return void(Mz += "string" === typeof zz ? zz : zz.icon);
                              const nz = Math.max(0, Mz.trimEnd().search(/\S{1,12}$/));
                              bz.push((0, lz.jsxs)(Ez.Fragment, {
                                children: [Mz.slice(0, nz), (0, lz.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [Mz.slice(nz), (0, lz.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": zz.icon,
                                    children: (0, lz.jsx)(iz.c, {
                                      itemName: zz.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, uz)), Mz = ""
                            })), bz.push(Mz), (0, lz.jsx)(lz.Fragment, {
                              children: bz
                            })
                          }
                        }, 4524: (zz, uz, bz) => {
                          bz.d(uz, {
                            c: () => Xz,
                            b: () => wz
                          });
                          var Ez = bz(56),
                            nz = bz(1417),
                            iz = bz(1846),
                            lz = bz(4531),
                            Mz = bz(1089);
                          const tz = (0, Ez.memo)((function(zz) {
                            let {
                              initialParameters: uz
                            } = zz;
                            const bz = (0, Ez.useRef)(null),
                              nz = (0, Ez.useRef)(null),
                              tz = (0, Ez.useRef)(0),
                              Hz = (0, Ez.useRef)(null),
                              Oz = uz.description,
                              pz = uz.Sz,
                              {
                                scale: dz,
                                rotation: Fz
                              } = null !== uz && void 0 !== uz ? uz : {},
                              Zz = (0, lz.f)();
                            return (0, Ez.useEffect)((() => {
                              const zz = Zz.onFrame((() => {
                                const zz = Zz.getState();
                                if (!zz.isActive || !bz.current || !nz.current) return;
                                const uz = zz.state;
                                if (bz.current.value = uz.progress, uz.clickCount > tz.current) {
                                  tz.current = uz.clickCount;
                                  const zz = nz.current;
                                  zz.classList.add("pulse"), Hz.current = setTimeout((() => {
                                    zz.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Hz.current), zz()
                              }
                            }), [Zz]), (0, Mz.jsx)(Mz.Fragment, {
                              children: (0, Mz.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== dz && {
                                    "--scale": dz
                                  },
                                  ...null !== Fz && {
                                    "--rotation": `${Fz}deg`
                                  }
                                },
                                children: [(0, Mz.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: bz
                                }), (0, Mz.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: nz,
                                  children: (0, Mz.jsx)(iz.b, {
                                    text: [{
                                      icon: pz
                                    }]
                                  })
                                }), (0, Mz.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, Mz.jsx)(iz.b, {
                                    text: Oz
                                  })
                                })]
                              })
                            })
                          }));
                          var Hz = bz(1038),
                            Oz = bz.n(Hz);
                          const pz = 2 * Math.PI * 90,
                            dz = (0, Ez.memo)((function(zz) {
                              let {
                                initialParameters: uz
                              } = zz;
                              const bz = (0, Ez.useRef)(null),
                                nz = (0, Ez.useRef)(null),
                                tz = (0, Ez.useRef)(null),
                                Hz = uz.label,
                                dz = uz.icon,
                                Fz = uz.Qz,
                                {
                                  scale: Zz,
                                  rotation: Rz,
                                  Wz: Kz
                                } = null !== uz && void 0 !== uz ? uz : {},
                                wz = (0, lz.f)();
                              return (0, Ez.useEffect)((() => {
                                const zz = wz.onFrame((() => {
                                  var zz, uz;
                                  const Ez = wz.getState();
                                  if (!Ez.isActive || !nz.current) return;
                                  const iz = Ez.state,
                                    lz = null !== (zz = iz.timeRemaining) && void 0 !== zz ? zz : 0,
                                    Mz = null !== (uz = iz.Dz) && void 0 !== uz ? uz : 1,
                                    Hz = pz * (1 - lz / Mz);
                                  nz.current.style.strokeDashoffset = `${Hz}`, bz.current && (bz.current.style.opacity = lz > 0 ? "1" : "0"), tz.current && Fz && (tz.current.textContent = `${(lz/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  zz()
                                }
                              }), [wz, Fz]), (0, Mz.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: bz,
                                style: {
                                  ...null !== Zz && {
                                    "--scale": Zz
                                  },
                                  ...null !== Rz && {
                                    "--rotation": `${Rz}deg`
                                  }
                                },
                                children: [(0, Mz.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, Mz.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Mz.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, Mz.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: pz,
                                      ref: nz
                                    })]
                                  }), (0, Mz.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, Mz.jsx)(iz.b, {
                                      text: [{
                                        icon: dz
                                      }],
                                      className: Oz()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: Kz
                                      })
                                    })
                                  })]
                                }), (0, Mz.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, Mz.jsx)(iz.b, {
                                    text: Hz,
                                    className: "QTETimedClickLabelText"
                                  }), Fz && (0, Mz.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: tz
                                  })]
                                })]
                              })
                            })),
                            Fz = (0, Ez.memo)((function(zz) {
                              let {
                                initialParameters: uz
                              } = zz;
                              const bz = (0, Ez.useRef)(null),
                                nz = (0, Ez.useRef)(null),
                                tz = (0, Ez.useRef)(null),
                                Hz = (0, Ez.useRef)(!1),
                                Oz = uz.description,
                                pz = null === uz || void 0 === uz ? void 0 : uz.icon,
                                dz = (0, lz.f)();
                              return (0, Ez.useEffect)((() => {
                                const zz = dz.onFrame((() => {
                                  const zz = dz.getState();
                                  if (!zz.isActive) return;
                                  const uz = zz.state;
                                  if (bz.current) {
                                    const zz = 100 * (uz.catchZonePosition - uz.jz / 2);
                                    bz.current.style.left = `${zz}%`, bz.current.style.width = 100 * uz.jz + "%", uz.isCatching !== Hz.current && (Hz.current = uz.isCatching, uz.isCatching ? bz.current.classList.add("catching") : bz.current.classList.remove("catching"))
                                  }
                                  nz.current && (nz.current.style.left = 100 * uz.moverPosition + "%"), tz.current && (tz.current.value = uz.progress)
                                }));
                                return () => {
                                  zz()
                                }
                              }), [dz]), (0, Mz.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, Mz.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, Mz.jsx)(iz.b, {
                                    text: Oz
                                  })
                                }), (0, Mz.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: tz
                                }), (0, Mz.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, Mz.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: bz
                                  }), (0, Mz.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: nz,
                                    children: (0, Mz.jsx)("span", {
                                      children: pz && (0, Mz.jsx)(iz.b, {
                                        text: [{
                                          icon: pz,
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
                          var Zz = bz(588);
                          const Rz = (0, Ez.memo)((function(zz) {
                              let {
                                initialParameters: uz
                              } = zz;
                              const bz = (0, Ez.useRef)(null),
                                nz = uz.label,
                                tz = uz.uu,
                                {
                                  icon: Hz,
                                  scale: Oz,
                                  rotation: pz
                                } = null !== uz && void 0 !== uz ? uz : {},
                                dz = 100 * (.5 - tz / 2),
                                Fz = 100 * tz,
                                Rz = (0, lz.f)();
                              return (0, Ez.useEffect)((() => {
                                const zz = Rz.onFrame((() => {
                                  const zz = Rz.getState();
                                  if (!zz.isActive || !bz.current) return;
                                  const uz = zz.state;
                                  bz.current.style.left = 100 * uz.markerPosition + "%"
                                }));
                                return () => {
                                  zz()
                                }
                              }), [Rz]), (0, Mz.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, Zz.F)(Oz) && {
                                    "--scale": Oz
                                  },
                                  ...!(0, Zz.F)(pz) && {
                                    "--rotation": `${pz}deg`
                                  }
                                },
                                children: [Hz && (0, Mz.jsx)(iz.b, {
                                  text: [{
                                    icon: Hz
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, Mz.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, Mz.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${dz}%`,
                                      width: `${Fz}%`
                                    }
                                  }), (0, Mz.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: bz
                                  })]
                                }), (0, Mz.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, Mz.jsx)(iz.b, {
                                    text: nz
                                  })
                                })]
                              })
                            })),
                            Kz = (0, Ez.memo)((function(zz) {
                              let {
                                initialParameters: uz
                              } = zz;
                              const bz = (0, Ez.useRef)(null),
                                [nz, tz] = (0, Ez.useState)((() => new Array(uz.nu).fill("pending"))),
                                [Hz, Oz] = (0, Ez.useState)((() => {
                                  const zz = uz.Mu;
                                  return (0, Zz.F)(zz) || zz <= 0 ? [] : new Array(zz).fill("pending")
                                })),
                                pz = uz.label,
                                {
                                  icon: dz
                                } = uz,
                                Fz = (0, Ez.useRef)(0),
                                Rz = (0, Ez.useRef)(0),
                                Kz = (0, Ez.useRef)([]),
                                wz = (0, lz.f)();
                              return (0, Ez.useEffect)((() => {
                                const zz = wz.onFrame((() => {
                                  const zz = wz.getState();
                                  if (!zz.isActive || !bz.current) return;
                                  const uz = zz.state,
                                    Ez = 30 + 60 * uz.outerCircleProgress;
                                  if (bz.current.setAttribute("r", String(Ez)), !0 === uz.lastClickResult && uz.successes > Fz.current) {
                                    bz.current.classList.remove("QTERhythmClickOuterCircle--miss"), bz.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const zz = setTimeout((() => {
                                      var zz;
                                      null === (zz = bz.current) || void 0 === zz || zz.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    Kz.current.push(zz)
                                  } else if (!1 === uz.lastClickResult && uz.misses > Rz.current) {
                                    bz.current.classList.remove("QTERhythmClickOuterCircle--hit"), bz.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const zz = setTimeout((() => {
                                      var zz;
                                      null === (zz = bz.current) || void 0 === zz || zz.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    Kz.current.push(zz)
                                  }
                                  uz.successes === Fz.current && uz.misses === Rz.current || (Fz.current = uz.successes, Rz.current = uz.misses, tz((zz => {
                                    const bz = [...zz];
                                    for (let Ez = 0; Ez < uz.nu; Ez++) bz[Ez] = Ez < uz.successes ? "success" : "pending";
                                    return bz
                                  })), Oz((zz => {
                                    if (0 === zz.length) return zz;
                                    const bz = [...zz];
                                    for (let Ez = 0; Ez < bz.length; Ez++) bz[Ez] = Ez < uz.misses ? "miss" : "pending";
                                    return bz
                                  })))
                                }));
                                return () => {
                                  zz();
                                  for (const zz of Kz.current) clearTimeout(zz);
                                  Kz.current = []
                                }
                              }), [wz]), (0, Mz.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, Mz.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: nz.map(((zz, uz) => (0, Mz.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === zz ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, uz)))
                                }), (0, Mz.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, Mz.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, Mz.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, Mz.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: bz
                                    })]
                                  }), dz && (0, Mz.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, Mz.jsx)(iz.b, {
                                      text: [{
                                        icon: dz
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Hz.length > 0 && (0, Mz.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Hz.map(((zz, uz) => (0, Mz.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === zz ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, uz)))
                                }), (0, Mz.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, Mz.jsx)(iz.b, {
                                    text: pz
                                  })
                                })]
                              })
                            }));

                          function wz(zz) {
                            let {
                              qte: uz
                            } = zz;
                            switch (uz.type) {
                              case "progressBar":
                                return (0, Mz.jsx)(tz, {
                                  initialParameters: uz.parameters
                                });
                              case "timedClick":
                                return (0, Mz.jsx)(dz, {
                                  initialParameters: uz.parameters
                                });
                              case "gravityBar":
                                return (0, Mz.jsx)(Fz, {
                                  initialParameters: uz.parameters
                                });
                              case "precisionBar":
                                return (0, Mz.jsx)(Rz, {
                                  initialParameters: uz.parameters
                                });
                              case "rhythmClick":
                                return (0, Mz.jsx)(Kz, {
                                  initialParameters: uz.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const Xz = (0, Ez.memo)((function() {
                            const [zz, uz] = (0, Ez.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, nz.g)("qteStateUpdated", (zz => {
                              uz(zz)
                            })), zz.isActive && zz.type ? (0, Mz.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, Mz.jsx)(wz, {
                                qte: zz
                              })
                            }) : null
                          }))
                        }, 4531: (zz, uz, bz) => {
                          bz.d(uz, {
                            e: () => Mz,
                            f: () => tz
                          });
                          var Ez = bz(56),
                            nz = bz(1273),
                            iz = bz(4540);
                          const lz = {
                              getState: () => iz.d.getCurrentState(),
                              onFrame: nz.m
                            },
                            Mz = (0, Ez.createContext)(lz);

                          function tz() {
                            return (0, Ez.useContext)(Mz)
                          }
                        }, 4601: (zz, uz, bz) => {
                          bz.d(uz, {
                            e: () => Vz,
                            g: () => az
                          });
                          var Ez = bz(4605),
                            nz = bz(316);
                          const iz = 120,
                            lz = 260,
                            Mz = 1.15,
                            tz = 1.2,
                            Hz = 2,
                            Oz = 1.08,
                            pz = .8,
                            dz = .95,
                            Fz = 8,
                            Zz = "[\"')\\]\u300d\u300f\uff09]*",
                            Rz = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Zz}$`),
                            Kz = new RegExp(`[?\uff1f]${Zz}$`),
                            wz = new RegExp(`[!\uff01]${Zz}$`),
                            Xz = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            fz = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            sz = new RegExp(`[${fz}]`),
                            rz = new RegExp(`[${fz}]|[^${fz}]+`, "g"),
                            oz = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function Nz(zz) {
                            let uz = 2166136261;
                            for (let bz = 0; bz < zz.length; bz++) uz ^= zz.charCodeAt(bz), uz = Math.imul(uz, 16777619);
                            return (uz >>> 0) / 4294967295 * 2 - 1
                          }

                          function vz(zz) {
                            var uz;
                            if (sz.test(zz)) return 1;
                            const bz = zz.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Ez = bz.replace(/[^0-9]/g, "");
                            if (Ez.length > 0 && !/\p{L}/u.test(bz)) return Math.min(Ez.length, 4);
                            const nz = null !== (uz = bz.match(oz)) && void 0 !== uz ? uz : [];
                            if (0 === nz.length) {
                              var iz, lz;
                              const zz = null !== (iz = null === (lz = bz.match(/\p{L}/gu)) || void 0 === lz ? void 0 : lz.length) && void 0 !== iz ? iz : 0;
                              return 0 === zz ? 0 : Math.min(Math.max(1, Math.round(zz / 2.5)), Fz)
                            }
                            const Mz = bz.replace(/[^\p{L}]/gu, ""),
                              tz = nz.length > 1 && "e" === nz.at(-1) && Mz.endsWith("e") && !Mz.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(zz.replace(/[^\p{L}]/gu, ""));
                            return Math.min(nz.length - (tz ? 1 : 0), Fz)
                          }

                          function xz(zz) {
                            return zz.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function Jz(zz) {
                            const uz = zz.replace(/[^\p{L}]/gu, "");
                            return uz.length >= 2 && uz === uz.toUpperCase() && uz !== uz.toLowerCase()
                          }

                          function Az(zz, uz) {
                            var bz;
                            const Fz = uz && (0, Ez.k)(uz),
                              Zz = null !== (bz = null === Fz || void 0 === Fz ? void 0 : Fz.syllableMs) && void 0 !== bz ? bz : Ez.e,
                              fz = function(zz) {
                                const uz = [];
                                for (const Ez of (0, nz.uc)(zz))
                                  if ("string" === typeof Ez)
                                    for (const zz of Ez.split(/(\s+)/)) {
                                      if ("" === zz) continue;
                                      if (/^\s+$/.test(zz)) {
                                        uz.push({
                                          kind: "space",
                                          text: zz
                                        });
                                        continue
                                      }
                                      if (!sz.test(zz)) {
                                        uz.push({
                                          kind: "word",
                                          text: zz,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Ez = !0;
                                      for (const nz of null !== (bz = zz.match(rz)) && void 0 !== bz ? bz : []) {
                                        var bz;
                                        const zz = uz.at(-1);
                                        Ez || "word" !== (null === zz || void 0 === zz ? void 0 : zz.kind) || sz.test(nz) || /[\p{L}\p{N}]/u.test(nz) ? (Ez || uz.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), uz.push({
                                          kind: "word",
                                          text: nz,
                                          delayMs: 0
                                        }), Ez = !1) : zz.text += nz
                                      }
                                    } else uz.push({
                                      kind: "icon",
                                      text: Ez.icon,
                                      delayMs: 0
                                    });
                                return uz
                              }(zz),
                              oz = [];
                            let Az = [];
                            for (const Ez of fz) "space" !== Ez.kind && (Az.push(Ez), Rz.test(Ez.text) && (oz.push(Az), Az = []));
                            oz.push(Az);
                            const Tz = [];
                            let Lz = 0;
                            for (const Ez of oz) {
                              var Pz, Gz;
                              const zz = null !== (Pz = null === (Gz = Ez.at(-1)) || void 0 === Gz ? void 0 : Gz.text) && void 0 !== Pz ? Pz : "",
                                uz = Kz.test(zz),
                                bz = wz.test(zz),
                                nz = Ez.map((zz => "word" === zz.kind ? vz(zz.text) : 1)),
                                fz = nz.findLastIndex((zz => zz > 0));
                              for (const [Kz, wz] of Ez.entries()) {
                                const zz = "word" === wz.kind,
                                  Ez = nz[Kz];
                                wz.delayMs = Lz;
                                for (let nz = 0; Fz && nz < Ez; nz++) {
                                  const {
                                    intonation: iz
                                  } = Fz;
                                  let lz = fz > 0 ? -iz.declineSemitones * (Kz / fz) : 0;
                                  lz += Nz(`${xz(wz.text)}|${nz}`) * iz.variationSemitones;
                                  const Rz = Math.min(1, iz.variationSemitones);
                                  let Xz = Fz.glideSemitones,
                                    sz = 1;
                                  bz && (lz += iz.exclaimLiftSemitones, sz *= Mz), uz && Kz === fz && (lz += iz.questionRiseSemitones * (Ez > 1 ? .5 + .5 * nz / (Ez - 1) : 1), nz === Ez - 1 && (Xz = Math.abs(Xz) + iz.questionRiseSemitones / 2)), zz && Jz(wz.text) && (lz += Hz * Rz, sz *= tz), Ez > 1 && 0 === nz && (lz += pz * Rz, sz *= Oz), Tz.push({
                                    atMs: Lz + nz * Zz,
                                    semitones: lz,
                                    glideSemitones: Xz,
                                    durationMs: nz < Ez - 1 ? Math.min(Fz.durationMs, Zz * dz) : Fz.durationMs,
                                    level: sz
                                  })
                                }
                                Lz += Ez * Zz + (Rz.test(wz.text) ? lz : Xz.test(wz.text) ? iz : 0)
                              }
                            }
                            return {
                              pieces: fz.map((zz => "space" === zz.kind ? zz : "icon" === zz.kind ? {
                                kind: "icon",
                                icon: zz.text,
                                delayMs: zz.delayMs
                              } : {
                                kind: "word",
                                text: zz.text,
                                delayMs: zz.delayMs
                              })),
                              blips: Tz
                            }
                          }
                          var Tz = bz(1181),
                            Lz = bz(1241),
                            Pz = bz(1873);

                          function Gz(zz) {
                            if ("string" === typeof zz) return zz;
                            const uz = Lz.h.get().getCurrentLanguageCode();
                            return (0, Tz.s)(uz, zz.translationKey, (0, Tz.q)(zz.params, Pz.b.shown))
                          }

                          function az(zz) {
                            const uz = void 0 === zz.voice ? null : (0, Ez.n)(zz.voice),
                              bz = uz && (0, Ez.k)(uz);
                            return {
                              plan: Az(Gz(zz.line), bz),
                              synth: bz
                            }
                          }

                          function Vz(zz) {
                            const uz = [];
                            let bz = [];
                            for (const [nz, iz] of zz.entries()) {
                              var Ez;
                              "space" === iz.kind && (" " !== iz.text || "icon" !== (null === (Ez = zz[nz + 1]) || void 0 === Ez ? void 0 : Ez.kind)) ? (bz.length > 0 && uz.push(bz), uz.push([iz]), bz = []) : bz.push(iz)
                            }
                            return bz.length > 0 && uz.push(bz), uz
                          }
                        }, 4609: (zz, uz, bz) => {
                          bz.d(uz, {
                            c: () => Oz,
                            d: () => pz
                          });
                          var Ez = bz(4616),
                            nz = bz(20);
                          const iz = .25,
                            lz = .85,
                            Mz = .02,
                            tz = .01;

                          function Hz(zz, uz, bz, Ez, nz, iz, Mz) {
                            const {
                              waveform: tz,
                              pitchHz: Hz,
                              attackMs: Oz,
                              releaseMs: pz,
                              lowpassHz: dz
                            } = bz, Fz = nz + Ez.durationMs / 1e3, Zz = Hz * 2 ** (Ez.semitones / 12), Rz = zz.createOscillator();
                            Rz.type = tz, Rz.frequency.setValueAtTime(Zz, nz), Rz.frequency.exponentialRampToValueAtTime(Zz * 2 ** (Ez.glideSemitones / 12), Fz);
                            const Kz = nz + Math.min(Oz, Ez.durationMs) / 1e3,
                              wz = zz.createGain();
                            wz.gain.setValueAtTime(0, nz), wz.gain.linearRampToValueAtTime(iz, Kz), wz.gain.linearRampToValueAtTime(iz * lz, Math.max(Kz, Fz - pz / 1e3)), wz.gain.linearRampToValueAtTime(0, Fz);
                            const Xz = [Rz];
                            if (null !== dz) {
                              const uz = zz.createBiquadFilter();
                              uz.type = "lowpass", uz.frequency.value = dz, Xz.push(uz)
                            }
                            Xz.push(wz, uz);
                            for (let lz = 1; lz < Xz.length; lz++) Xz[lz - 1].connect(Xz[lz]);
                            return Rz.onended = () => {
                              for (const zz of Xz.slice(0, -1)) zz.disconnect();
                              Mz()
                            }, Rz.start(nz), Rz.stop(Fz), Rz
                          }

                          function Oz(zz, uz, bz, Ez, nz, lz) {
                            if (0 === Ez.length) return lz(), () => {};
                            const Oz = iz * bz.volume * nz,
                              pz = zz.createGain();
                            pz.connect(uz);
                            const dz = zz.currentTime + Mz,
                              Fz = new Set;
                            for (const iz of Ez) {
                              const uz = Hz(zz, pz, bz, iz, dz + iz.atMs / 1e3, Oz * iz.level, (() => {
                                Fz.delete(uz), 0 === Fz.size && (pz.disconnect(), lz())
                              }));
                              Fz.add(uz)
                            }
                            return () => {
                              const uz = zz.currentTime;
                              pz.gain.setTargetAtTime(0, uz, tz);
                              for (const zz of Fz) try {
                                zz.stop(uz + 5 * tz)
                              } catch {}
                            }
                          }

                          function pz(zz, uz) {
                            var bz;
                            const iz = Ez.Howler.ctx,
                              lz = Ez.Howler.masterGain;
                            if (!iz || !lz || !nz.e.get("soundOnFromAd")) return () => {};
                            const Mz = Ez.Howler;
                            return null === (bz = Mz._autoResume) || void 0 === bz || bz.call(Mz), Oz(iz, lz, zz, uz, nz.e.get("soundVolume"), (() => {
                              var zz;
                              null === (zz = Mz._autoSuspend) || void 0 === zz || zz.call(Mz)
                            }))
                          }
                        }, 4616: (zz, uz, bz) => {
                          bz.r(uz), bz.d(uz, {
                            Howl: () => nz.Howl,
                            Howler: () => nz.Howler,
                            iosAudio: () => tz,
                            musicOutput: () => Kz,
                            readyAudioContext: () => wz
                          });
                          var Ez, nz = bz(4625),
                            iz = bz(96);
                          const lz = nz.Howler;
                          let Mz;

                          function tz() {
                            return Mz ??= "ios" === (0, iz.getOperatingSystem)(), Mz
                          }

                          function Hz() {
                            var zz, uz;
                            if (lz.ctx || !lz.usingWebAudio || "undefined" === typeof AudioContext || !tz()) return;
                            const bz = navigator.audioSession;
                            let Ez;
                            "auto" === (null === bz || void 0 === bz ? void 0 : bz.type) && (bz.type = "ambient");
                            try {
                              Ez = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const nz = Ez.createGain();
                            nz.gain.setValueAtTime(lz._muted ? 0 : null !== (zz = lz._volume) && void 0 !== zz ? zz : 1, Ez.currentTime), nz.connect(Ez.destination), lz.ctx = Ez, lz.masterGain = nz, null === (uz = lz._setup) || void 0 === uz || uz.call(lz)
                          }
                          lz._mobileUnloaded = !0;
                          const Oz = lz.volume.bind(nz.Howler);
                          lz.volume = function() {
                            return Hz(), Oz(...arguments)
                          };
                          const pz = lz.mute.bind(nz.Howler);
                          lz.mute = zz => (Hz(), pz(zz));
                          const dz = nz.Howl.prototype,
                            Fz = dz.init;
                          dz.init = function(zz) {
                            return Hz(), Fz.call(this, zz)
                          };
                          let Zz = 0;
                          const Rz = null === (Ez = lz._autoSuspend) || void 0 === Ez ? void 0 : Ez.bind(nz.Howler);

                          function Kz() {
                            wz();
                            const {
                              ctx: zz,
                              masterGain: uz
                            } = lz;
                            return zz && uz ? {
                              ctx: zz,
                              destination: uz,
                              holdAwake: zz => {
                                var uz, bz;
                                (Zz += zz ? 1 : -1, zz) ? null === (uz = lz._autoResume) || void 0 === uz || uz.call(lz): null === (bz = lz._autoSuspend) || void 0 === bz || bz.call(lz)
                              },
                              wake: () => {
                                var uz;
                                "running" !== zz.state && (null === (uz = lz._autoResume) || void 0 === uz || uz.call(lz), zz.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function wz() {
                            var zz;
                            (lz.volume(), lz.ctx && lz.autoUnlock) && (null === (zz = lz._unlockAudio) || void 0 === zz || zz.call(lz))
                          }
                          Rz && (lz._autoSuspend = () => Zz > 0 ? nz.Howler : Rz())
                        }, 4629: (zz, uz, bz) => {
                          function Ez(zz) {
                            return {
                              notAfter: zz
                            }
                          }
                          bz.d(uz, {
                            c: () => tz,
                            e: () => Hz,
                            i: () => Mz,
                            j: () => Ez,
                            l: () => nz,
                            m: () => iz,
                            q: () => lz,
                            t: () => Oz,
                            u: () => pz
                          });
                          const nz = Ez("\\w$."),
                            iz = Ez("\\w.,");

                          function lz(zz) {
                            return uz => tz(uz, zz)
                          }

                          function Mz(zz) {
                            return uz => !zz.test(uz.input.slice(0, uz.index))
                          }

                          function tz(zz, uz) {
                            return zz.index > 0 && new RegExp(`[${uz}]`).test(zz.input[zz.index - 1])
                          }

                          function Hz(zz, uz, bz) {
                            return function(zz) {
                              return void 0 !== zz && "function" !== typeof zz
                            }(bz) ? function(zz, uz, bz) {
                              const Ez = uz.flags.replace(/[gy]/g, ""),
                                nz = new RegExp(`[^${bz}](?:${uz.source})`, `${Ez}g`),
                                iz = [],
                                lz = bz => {
                                  const Ez = bz.index + bz[0].length;
                                  return ("" === bz[0] ? dz(zz, uz, Ez) : Ez) - 1
                                },
                                Mz = new RegExp(`(?:${uz.source})`, `${Ez}y`).exec(zz);
                              if (Mz) {
                                if (iz.push(Mz), !uz.global) return iz;
                                nz.lastIndex = lz(Mz)
                              }
                              for (let tz = nz.exec(zz); tz; tz = nz.exec(zz)) {
                                const bz = dz(zz, uz, tz.index) - tz.index;
                                if (tz[0] = tz[0].slice(bz), tz.index += bz, iz.push(tz), !uz.global) break;
                                nz.lastIndex = lz(tz)
                              }
                              return iz
                            }(zz, uz, bz.notAfter) : function(zz, uz, bz) {
                              const Ez = new RegExp(uz.source, `${uz.flags.replace(/[gy]/g,"")}g`),
                                nz = [];
                              for (let iz = Ez.exec(zz); iz; iz = Ez.exec(zz))
                                if (!bz || bz(iz)) {
                                  if (nz.push(iz), !uz.global) break;
                                  "" === iz[0] && (Ez.lastIndex = dz(zz, uz, Ez.lastIndex))
                                } else Ez.lastIndex = dz(zz, uz, iz.index);
                              return nz
                            }(zz, uz, bz)
                          }

                          function Oz(zz, uz, bz, Ez) {
                            let nz = "",
                              iz = 0;
                            for (const lz of Hz(zz, uz, bz)) nz += zz.slice(iz, lz.index) + Ez(lz), iz = lz.index + lz[0].length;
                            return nz + zz.slice(iz)
                          }

                          function pz(zz, uz, bz) {
                            const Ez = [];
                            let nz = 0;
                            for (const iz of Hz(zz, uz, bz)) Ez.push(zz.slice(nz, iz.index)), nz = iz.index + iz[0].length;
                            return [...Ez, zz.slice(nz)]
                          }

                          function dz(zz, uz, bz) {
                            var Ez;
                            return bz + (uz.unicode && (null !== (Ez = zz.codePointAt(bz)) && void 0 !== Ez ? Ez : 0) > 65535 ? 2 : 1)
                          }
                        }, 4581: (zz, uz, bz) => {
                          bz.d(uz, {
                            A: () => Fz,
                            e: () => nz,
                            g: () => tz,
                            i: () => iz,
                            k: () => lz,
                            n: () => Mz,
                            p: () => Kz,
                            r: () => Oz,
                            s: () => pz,
                            w: () => Rz
                          });
                          var Ez = bz(1547);
                          const nz = 24e3,
                            iz = "/docs/llms.txt",
                            lz = `${Ez.e}${iz}`,
                            Mz = "/llms.txt",
                            tz = "/docs/llms-full.txt";

                          function Hz(zz) {
                            return zz || "index"
                          }

                          function Oz(zz) {
                            return `/docs/${Hz(zz)}.md`
                          }

                          function pz(zz, uz) {
                            return `/docs/${Hz(zz)}/${uz+1}.md`
                          }
                          const dz = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Fz(zz) {
                            const uz = dz.exec(zz);
                            return null === uz ? null : {
                              name: uz[1],
                              part: void 0 === uz[2] ? null : Number(uz[2])
                            }
                          }
                          const Zz = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Rz(zz) {
                            const uz = Zz.exec(zz);
                            if (null === uz) return null;
                            const [, bz = "", Ez] = uz;
                            return void 0 === Ez ? Oz(bz) : pz(bz, Number(Ez) - 1)
                          }

                          function Kz(zz) {
                            return `/docsHtml/${Hz(zz)}.html`
                          }
                        }, 4605: (zz, uz, bz) => {
                          bz.d(uz, {
                            e: () => nz,
                            h: () => Ez,
                            i: () => iz,
                            k: () => tz,
                            n: () => lz
                          });
                          const Ez = ["sine", "triangle", "square", "sawtooth"],
                            nz = 55,
                            iz = {
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

                          function lz(zz) {
                            return "string" !== typeof zz ? zz : Object.hasOwn(iz, zz) ? iz[zz] : null
                          }

                          function Mz(zz, uz, bz) {
                            return Math.min(bz, Math.max(uz, zz))
                          }

                          function tz(zz) {
                            const uz = Mz(zz.durationMs, 10, 500),
                              bz = Mz(zz.attackMs, 0, uz),
                              {
                                intonation: nz
                              } = zz;
                            return {
                              waveform: Ez.includes(zz.waveform) ? zz.waveform : "sine",
                              pitchHz: Mz(zz.pitchHz, 20, 4e3),
                              glideSemitones: Mz(zz.glideSemitones, -24, 24),
                              durationMs: uz,
                              attackMs: bz,
                              releaseMs: Mz(zz.releaseMs, 0, uz - bz),
                              lowpassHz: null === zz.lowpassHz ? null : Mz(zz.lowpassHz, 20, 2e4),
                              volume: Mz(zz.volume, 0, 2),
                              intonation: {
                                variationSemitones: Mz(nz.variationSemitones, 0, 6),
                                declineSemitones: Mz(nz.declineSemitones, 0, 12),
                                questionRiseSemitones: Mz(nz.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: Mz(nz.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: Mz(zz.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const zz in modules) Object.freeze(modules[zz]);