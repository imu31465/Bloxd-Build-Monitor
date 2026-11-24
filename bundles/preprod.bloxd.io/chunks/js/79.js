export const id = 79;
export const ids = [79, 95];
export const modules = {
    4950: (pp, ip, cp) => {
      cp.d(ip, {
        e: () => wp,
        i: () => vp
      });
      var Op = cp(1049),
        op = cp.n(Op),
        Ip = cp(62),
        Sp = cp(1201),
        xp = cp(4956),
        Lp = cp(1929),
        Yp = cp(2492),
        Dp = cp(4964),
        Ap = cp(1112);
      const Pp = new WeakMap;
      let Wp = 0;

      function yp(pp) {
        let ip = Pp.get(pp);
        return void 0 === ip && (ip = Wp++, Pp.set(pp, ip)), ip
      }

      function Up(pp) {
        let {
          piece: ip
        } = pp;
        return "space" === ip.kind ? (0, Ap.jsx)(Ap.Fragment, {
          children: ip.text
        }) : (0, Ap.jsx)("span", {
          className: "DialogueWord",
          style: {
            "--word-delay": `${ip.delayMs}ms`
          },
          children: (0, Ap.jsx)(xp.d, {
            text: "icon" === ip.kind ? `[[${ip.icon}]]` : ip.text
          })
        })
      }

      function wp(pp) {
        let {
          display: ip
        } = pp;
        const {
          selectedLanguage: cp
        } = (0, Sp.H)(), Op = (0, Ip.useMemo)((() => (0, Dp.e)((0, Dp.h)(ip).plan.pieces)), [ip, cp.code]);
        return (0, Ap.jsxs)("div", {
          className: op()("Dialogue", {
            DialogueAnimateIn: !1 !== ip.animateIn
          }),
          children: [ip.speakerName && (0, Ap.jsx)(Lp.e, {
            text: ip.speakerName,
            className: "DialogueSpeaker"
          }), (0, Ap.jsx)("p", {
            className: "DialogueLine",
            children: Op.map(((pp, ip) => 1 === pp.length && "space" === pp[0].kind ? pp[0].text : (0, Ap.jsx)("span", {
              className: "DialogueGlue",
              children: pp.map(((pp, ip) => (0, Ap.jsx)(Up, {
                piece: pp
              }, ip)))
            }, ip)))
          })]
        })
      }
      const vp = (0, Ip.memo)((function() {
        const pp = (0, Yp.i)("dialogue");
        return (0, Ap.jsx)("div", {
          className: "DialogueAnchor",
          "data-camera-keeper": "",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: pp && (0, Ap.jsx)(wp, {
            display: pp
          }, yp(pp))
        })
      }))
    },
    4817: (pp, ip, cp) => {
        cp.r(ip), cp.d(ip, {
          default: () => oS
        });
        var Op = cp(62),
          op = cp(1049),
          Ip = cp.n(op),
          Sp = cp(1540),
          xp = cp(1543),
          Lp = cp(25),
          Yp = cp(82),
          Dp = cp(4819),
          Ap = cp(4831),
          Pp = cp(4838),
          Wp = cp(4458),
          yp = cp(1112);
        const Up = "/textures/docs/icons";

        function wp(pp) {
          let {
            name: ip,
            isTinted: cp,
            className: Op,
            style: op
          } = pp;
          const Sp = `${Up}/${ip}.png`;
          return cp ? (0, yp.jsxs)("span", {
            className: Ip()("DocsPixelIcon", "Tinted", Op),
            "aria-hidden": "true",
            style: op,
            children: [(0, yp.jsx)("span", {
              className: "DocsPixelIconTint",
              style: {
                maskImage: `url("${Sp}")`,
                WebkitMaskImage: `url("${Sp}")`
              }
            }), (0, yp.jsx)("img", {
              src: Sp,
              alt: ""
            })]
          }) : (0, yp.jsx)("img", {
            className: Ip()("DocsPixelIcon", Op),
            src: Sp,
            alt: "",
            "aria-hidden": "true",
            style: op
          })
        }
        const vp = 1500;

        function tp() {
          const [pp, ip] = (0, Op.useState)(null);
          (0, Op.useEffect)((() => {
            if (null === pp) return;
            const cp = setTimeout((() => {
              ip(null)
            }), vp);
            return () => {
              clearTimeout(cp)
            }
          }), [pp]);
          return [pp, pp => {
            (0, Wp.d)(pp).then((() => {
              ip({
                text: pp,
                failed: !1
              })
            }), (cp => {
              console.error("Could not copy to the clipboard", cp), ip({
                text: pp,
                failed: !0
              })
            }))
          }]
        }

        function Hp(pp) {
          let {
            text: ip,
            label: cp,
            className: Op
          } = pp;
          const [op, Sp] = tp(), xp = !1 === (null === op || void 0 === op ? void 0 : op.failed);
          return (0, yp.jsxs)("button", {
            type: "button",
            className: Ip()("DocsCopyButton", Op, {
              Copied: xp
            }),
            title: `Copy ${ip.length>40?"to clipboard":ip}`,
            "aria-label": cp ? void 0 : `Copy ${ip}`,
            onClick: pp => {
              pp.stopPropagation(), Sp(ip)
            },
            children: [(0, yp.jsx)(wp, {
              name: xp ? "check" : "copy"
            }), cp && (0, yp.jsx)("span", {
              children: xp ? "Copied" : null !== op && void 0 !== op && op.failed ? "Copy failed" : cp
            })]
          })
        }
        Dp.d.registerLanguage("javascript", Ap.d), Dp.d.registerLanguage("typescript", Pp.d);
        const dp = {
            js: "javascript",
            ts: "typescript",
            javascript: "javascript",
            typescript: "typescript"
          },
          ep = {
            javascript: "JavaScript",
            typescript: "TypeScript"
          },
          jp = 24;

        function kp(pp) {
          let {
            code: ip,
            lang: cp,
            compact: op = !1
          } = pp;
          const Sp = (0, Op.useMemo)((() => function(pp, ip) {
              const cp = dp[ip];
              return cp ? Dp.d.highlight(pp, {
                language: cp
              }).value : pp.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }(ip, cp)), [ip, cp]),
            xp = ip.split("\n").length,
            Lp = !op && xp > jp + 6,
            [Yp, Ap] = (0, Op.useState)(!1),
            Pp = dp[cp];
          return (0, yp.jsxs)("div", {
            className: Ip()("DocsCodeBlock", {
              Compact: op,
              Collapsed: Lp && !Yp
            }),
            children: [!op && (0, yp.jsxs)("div", {
              className: "DocsCodeBlockHeader",
              children: [(0, yp.jsx)("span", {
                className: "DocsCodeBlockLanguage",
                children: Pp ? ep[Pp] : "Text"
              }), (0, yp.jsx)(Hp, {
                text: ip,
                label: "Copy"
              })]
            }), (0, yp.jsx)("pre", {
              children: (0, yp.jsx)("code", {
                className: "hljs",
                dangerouslySetInnerHTML: {
                  __html: Sp
                }
              })
            }), Lp && (0, yp.jsxs)("button", {
              type: "button",
              className: "DocsCodeBlockExpand",
              "aria-expanded": Yp,
              onClick: () => {
                Ap(!Yp)
              },
              children: [(0, yp.jsx)(wp, {
                name: Yp ? "chevron-up" : "chevron-down"
              }), Yp ? "Show less" : `Show all ${xp} lines`]
            })]
          })
        }
        var mp = cp(4844);
        var Rp = cp(4852);
        const qp = /^(?:export\s+)?(?:declare\s+)?(?:type|interface|enum|const enum)\s+([A-Za-z_$][\w$]*)/;

        function Mp(pp) {
          const ip = new Map;
          let cp, Op = [],
            op = !1;
          const Ip = () => {
            cp && ip.set(cp.name, cp.lines.join("\n").trimEnd())
          };
          for (const Sp of pp.split("\n")) {
            const pp = Sp.match(qp);
            op || Sp.startsWith("/*") ? (op || (Ip(), cp = void 0), Op.push(Sp), op = !Sp.includes("*/")) : pp ? (Ip(), cp = {
              name: pp[1],
              lines: [...Op, Sp]
            }, Op = []) : cp && (Sp.startsWith(" ") || Sp.startsWith("\t") || /^[}\])|]/.test(Sp)) ? cp.lines.push(Sp) : cp && "" !== Sp.trim() && (Ip(), cp = void 0)
          }
          return Ip(), ip
        }

        function Cp(pp) {
          return "methods" === pp || "callbacks" === pp || "settings" === pp
        }
        const Ep = {
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
              setterSnippet: (pp, ip) => `api.setClientOption(playerId, "${pp}", ${ip})`
            },
            entitySettings: {
              icon: "eye",
              summary: "How one player sees and interacts with another entity.",
              layout: "settings",
              setterSnippet: (pp, ip) => `api.setOtherEntitySetting(playerId, targetedEntityId, "${pp}", ${ip})`
            },
            mobSettings: {
              icon: "mob",
              summary: "Health, movement, combat and AI settings for mobs.",
              layout: "settings",
              setterSnippet: (pp, ip) => `api.setMobSetting(mobId, "${pp}", ${ip})`
            },
            vehicleSettings: {
              icon: "car",
              summary: "Movement, physics and camera settings for vehicles.",
              layout: "settings",
              setterSnippet: (pp, ip) => `api.setVehicleSetting(vehicleId, "${pp}", ${ip})`
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
          Xp = {
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

        function lp(pp) {
          return pp.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function Qp(pp) {
          let ip = !1;
          return pp.split("\n").map((pp => (pp.startsWith("```") && (ip = !ip), !ip && /^#{3,} /.test(pp) ? pp.slice(1) : pp))).join("\n")
        }

        function Jp(pp) {
          return "readme" === pp ? "getting-started" : lp(pp)
        }
        const Bp = "## Glossary of Referenced Types";
        const Np = [{
            id: "welcome",
            slug: "",
            title: "Welcome",
            icon: "house",
            summary: "Run JavaScript in Bloxd, from a single block to a whole custom game.",
            layout: "article",
            markdown: "# Welcome to the Bloxd Code API\n\nWrite JavaScript that runs inside Bloxd: make a block launch players into the sky, give your world its own shop, or build a whole custom game with rounds, teams and a winner.\n\n## New to coding in Bloxd?\n\nStart with [Getting started](#readme), which explains code blocks, boards and World Code, and where each one runs. Then copy something from [Snippets](#snippets) into a code block and change it to see what happens.\n\n## Building a game\n\n[Callbacks](#callbacks) let your World Code react to players joining, chatting, breaking blocks and more. The [How-Tos](#howTo) walk through bigger features step by step, from plugins to a complete team game.\n\n## Looking something up\n\nThe [API Reference](#apiReference) lists every method on `api`. Settings for players, entities, mobs and vehicles each have their own page, and the Assets pages list every block, item, sound, particle, icon and skin name you can use. Press Ctrl K, or \u2318 K on a Mac, to search all of it.\n\n## What's new\n\nThe [Changelog](#changelog) lists what has changed in the Code API, newest first.\n\n## Get help\n\nAsk questions, report problems and suggest features on [our Discord](https://discord.gg/playbloxd)."
          }, ...Rp.d.flatMap((pp => {
            const ip = {
              id: pp.id,
              slug: Jp(pp.id),
              title: pp.title,
              markdown: pp.content,
              ...Ep[pp.id]
            };
            if ("readme" === pp.id) return function(pp) {
              const ip = pp.markdown.indexOf(Bp),
                cp = pp.markdown.indexOf("\n```", ip),
                Op = pp.markdown.indexOf("\n```", cp + 1);
              if (-1 === ip || -1 === cp || -1 === Op) throw new Error(`Getting started has no "${Bp}" section with a code block`);
              const op = pp.markdown.slice(ip + 31, cp).trim(),
                Ip = [...Mp(pp.markdown.slice(pp.markdown.indexOf("\n", cp + 1) + 1, Op))].map((pp => {
                  let [ip, cp] = pp;
                  return `## ${ip}\n\n\`\`\`ts\n${cp}\n\`\`\`\n`
                })),
                Sp = pp.markdown.slice(pp.markdown.indexOf("\n", Op + 1) + 1);
              return [{
                ...pp,
                markdown: `${pp.markdown.slice(0,ip)}${Sp}`
              }, {
                id: "types",
                slug: "types",
                title: "Types",
                icon: "tag",
                summary: "The types the API Reference's parameters and return values refer to.",
                layout: "article",
                markdown: `# Types\n\n${op}\n\n${Ip.join("\n")}`
              }]
            }(ip);
            if ("howTo" === pp.id) {
              const {
                parent: pp,
                guides: cp
              } = function(pp) {
                const [ip, ...cp] = pp.markdown.split(/^(?=## )/m), Op = [ip], op = [];
                for (const Sp of cp) {
                  var Ip;
                  const ip = Sp.indexOf("\n"),
                    cp = Sp.slice(3, ip).trim(),
                    xp = Sp.slice(ip + 1);
                  if (!xp.includes("```")) {
                    Op.push(Sp);
                    continue
                  }
                  const Lp = null !== (Ip = Xp[cp]) && void 0 !== Ip ? Ip : {
                    icon: "lightbulb",
                    summary: `How to use ${cp.toLowerCase()} in World Code.`
                  };
                  op.push({
                    id: `${pp.id}${cp.split(/[^A-Za-z0-9]+/).map((pp=>pp.charAt(0).toUpperCase()+pp.slice(1))).join("")}`,
                    slug: `${pp.slug}-${lp(cp)}`,
                    title: cp,
                    layout: "article",
                    sourceAnchor: (0, mp.s)(cp),
                    markdown: `# ${cp}\n\n${Qp(xp)}`,
                    ...Lp
                  })
                }
                return {
                  parent: {
                    ...pp,
                    markdown: Op.join(""),
                    childPageIds: op.map((pp => pp.id))
                  },
                  guides: op
                }
              }(ip);
              return [pp, ...cp]
            }
            return [ip]
          }))],
          Tp = [{
            title: "Get started",
            pageIds: ["welcome", "readme", "snippets", "changelog"]
          }, {
            title: "How-Tos",
            pageIds: ["howTo", ...Np.filter((pp => void 0 !== pp.sourceAnchor)).map((pp => pp.id))]
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

        function fp(pp) {
          return Np.find((ip => ip.id === pp))
        }
        const bp = new Map;

        function hp(pp) {
          let ip = bp.get(pp.id);
          return ip || (ip = (0, mp.w)(pp.markdown, "changelog" === pp.layout ? 3 : 2), bp.set(pp.id, ip)), ip
        }

        function ap(pp, ip) {
          return hp(pp).sections.some((pp => pp.heading.anchor === ip || pp.blocks.some((pp => "heading" === pp.kind && pp.anchor === ip))))
        }

        function np(pp) {
          const [ip, ...cp] = pp.replace(/^#/, "").split("-"), Op = Np.find((pp => pp.id === ip));
          if (!Op) return null;
          const op = cp.length > 0 ? (0, mp.s)(cp.join("-")) : "";
          for (const Sp of null !== (Ip = Op.childPageIds) && void 0 !== Ip ? Ip : []) {
            var Ip;
            const pp = fp(Sp);
            if (pp.sourceAnchor === op) return {
              page: pp,
              anchor: ""
            };
            if (ap(pp, op)) return {
              page: pp,
              anchor: op
            }
          }
          return {
            page: Op,
            anchor: op
          }
        }
        const Fp = {
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

        function gp(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Op = ip.slug ? `${pp}/${ip.slug}` : pp;
          return cp ? `${Op}#${cp}` : Op
        }
        var Gp = cp(4874);
        const rp = /^export\s+(?:declare\s+)?(?:type|interface|enum|const enum|class)\s+([A-Za-z_$][\w$]*)/,
          Zp = new Set(["GameApi", "Console", "_TypeOf"]),
          zp = 4;

        function sp(pp) {
          let ip = pp.length;
          for (; ip > 0 && "" === pp[ip - 1].trim();) ip--;
          return pp.slice(0, ip)
        }

        function Kp(pp) {
          var ip;
          const cp = sp(pp);
          if (null === (ip = cp.at(-1)) || void 0 === ip || !ip.trimEnd().endsWith("*/")) return {
            lines: cp,
            doc: ""
          };
          const Op = cp.findLastIndex((pp => pp.startsWith("/**")));
          return -1 === Op ? {
            lines: cp,
            doc: ""
          } : {
            lines: sp(cp.slice(0, Op)),
            doc: cp.slice(Op).join("\n")
          }
        }

        function Vp(pp) {
          var ip;
          const cp = pp.split("\n"),
            Op = cp.flatMap(((pp, ip) => rp.test(pp) ? [ip] : []));
          let op = Kp(cp.slice(0, null !== (ip = Op[0]) && void 0 !== ip ? ip : cp.length)).doc;
          return Op.map(((pp, ip) => {
            var Ip;
            const Sp = Kp(cp.slice(pp, null !== (Ip = Op[ip + 1]) && void 0 !== Ip ? Ip : cp.length)),
              xp = {
                name: cp[pp].match(rp)[1],
                doc: op,
                lines: Sp.lines
              };
            return op = Sp.doc, xp
          }))
        }

        function ii(pp) {
          var ip;
          const cp = pp.match(/^readonly \[([\s\S]*)\]$/);
          return cp ? null !== (ip = cp[1].match(/"(?:[^"\\]|\\.)*"/g)) && void 0 !== ip ? ip : [] : null
        }

        function ci(pp) {
          if (!pp.startsWith("{") || !pp.endsWith("}")) return null;
          const ip = {
              keys: [],
              values: []
            },
            cp = pp => {
              const cp = pp.trim().match(/^(?:readonly\s+)?("[^"]*"|[\w$]+)\??:\s*([\s\S]*)$/);
              cp && (ip.keys.push(cp[1].startsWith('"') ? cp[1] : `"${cp[1]}"`), ip.values.push(cp[2].trim()))
            };
          let Op = 0,
            op = "";
          for (const Ip of pp.slice(1, -1)) "{[(".includes(Ip) ? Op++ : "}])".includes(Ip) && Op--, ";" === Ip && 0 === Op ? (cp(op), op = "") : op += Ip;
          return cp(op), ip
        }

        function Oi(pp) {
          return pp.length > zp ? `\n\t| ${pp.join("\n\t| ")}` : pp.join(" | ")
        }

        function oi(pp, ip) {
          const cp = function(pp, ip) {
            return pp.replace(/\(_TypeOf\["([\w$]+)"\]\)\[keyof _TypeOf\["\1"\]\]/g, ((pp, cp) => {
              var Op;
              const op = null === (Op = ip.get(cp)) || void 0 === Op ? void 0 : Op.object;
              return op ? Oi(op.values) : pp
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[[A-Za-z_$][\w$]*\]\[number\]/g, ((pp, cp) => {
              var Op, op;
              const Ip = null === (Op = ip.get(cp)) || void 0 === Op || null === (op = Op.object) || void 0 === op ? void 0 : op.values.map(ii);
              return null !== Ip && void 0 !== Ip && Ip.every((pp => null !== pp)) ? Oi([...new Set(Ip.flat())]) : pp
            })).replace(/\(_TypeOf\["([\w$]+)"\]\)\[number\]/g, ((pp, cp) => {
              var Op;
              const op = null === (Op = ip.get(cp)) || void 0 === Op ? void 0 : Op.members;
              return op ? Oi(op) : pp
            })).replace(/keyof _TypeOf\["([\w$]+)"\]/g, ((pp, cp) => {
              var Op;
              const op = null === (Op = ip.get(cp)) || void 0 === Op ? void 0 : Op.object;
              return op ? Oi(op.keys) : pp
            })).replace(/_TypeOf\["([\w$]+)"\]/g, ((pp, cp) => {
              var Op, op;
              return null !== (Op = null === (op = ip.get(cp)) || void 0 === op ? void 0 : op.text) && void 0 !== Op ? Op : pp
            }))
          }(pp.lines.join("\n").replace(/^export\s+(?:declare\s+)?/, ""), ip);
          return [pp.doc, cp].filter(Boolean).join("\n").replace(/\\(`|\$\{)/g, "$1").replace(/ +\n/g, "\n")
        }

        function Ii(pp) {
          const ip = Vp(pp),
            cp = function(pp) {
              const ip = new Map,
                cp = pp.find((pp => "_TypeOf" === pp.name));
              let Op = null;
              const op = () => {
                if (Op) {
                  const pp = Op.lines.join("\n");
                  ip.set(Op.name, {
                    text: pp,
                    members: ii(pp),
                    object: ci(pp)
                  })
                }
              };
              for (const Ip of cp.lines.slice(1, -1)) {
                const pp = Ip.match(/^\t([\w$]+): (.+)$/);
                pp ? (op(), Op = {
                  name: pp[1],
                  lines: [pp[2]]
                }) : Op && Op.lines.push(Ip.replace(/^\t/, ""))
              }
              return op(), ip
            }(ip),
            Op = new Map;
          for (const op of ip) Zp.has(op.name) || Op.has(op.name) || Op.set(op.name, oi(op, cp));
          return Op
        }
        let Si, xi, Li;

        function Yi() {
          return xi ??= function(pp) {
            const ip = Vp(pp).find((pp => "GameApi" === pp.name)),
              cp = new Map,
              Op = ip.lines;
            for (let Ip = 0; Ip < Op.length; Ip++) {
              var op;
              if (!Op[Ip].trimStart().startsWith("/**")) continue;
              const pp = Ip;
              for (; Ip < Op.length && !Op[Ip].includes("*/");) Ip++;
              const ip = null === (op = Op[Ip + 1]) || void 0 === op ? void 0 : op.match(/^\s*([A-Za-z_$][\w$]*)\s*[<(]/);
              if (!ip) continue;
              let Sp = null;
              const xp = [];
              let Lp = "description",
                Yp = !1;
              for (const cp of Op.slice(pp, Ip + 1).join("\n").split("\n").map((pp => pp.replace(/^\s*\/\*\*\s?/, "").replace(/\s*\*\/\s*$/, "").replace(/^\s*\*\s?/, "").replace(/\\(`|\$\{)/g, "$1")))) {
                const pp = cp.match(/^@deprecated\s*(?:-\s*)?(.*)$/);
                pp ? (Sp = pp[1].trim(), Lp = "deprecation") : cp.startsWith("@") ? (Lp = "otherTag", Yp = !0) : "" === cp.trim() ? Yp || (Lp = "description", xp.push(cp)) : "deprecation" !== Lp || /^[A-Z]/.test(cp.trim()) ? "otherTag" !== Lp && (Lp = "description", xp.push(cp)) : Sp = `${Sp} ${cp.trim()}`.trim()
              }
              cp.set(ip[1], {
                deprecation: Sp,
                description: xp.join("\n").trim()
              })
            }
            return cp
          }(Gp.default), xi
        }

        function Di() {
          if (!Li) {
            Li = new Map;
            for (const pp of Np) {
              const ip = (0, mp.t)(hp(pp)).flatMap((pp => pp.blocks));
              for (const pp of (0, mp.n)(ip))
                if ("ts" === pp.lang || "typescript" === pp.lang)
                  for (const [ip, cp] of Mp(pp.code)) Li.set(ip, cp)
            }
            for (const [pp, ip] of(Si ??= Ii(Gp.default), Si)) Li.has(pp) || Li.set(pp, ip)
          }
          return Li
        }
        const Ai = {
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
        let Pi;

        function Wi() {
          if (!Pi) {
            Pi = new Map;
            for (const pp of Np)
              if (Cp(pp.layout))
                for (const ip of hp(pp).sections) Pi.has(ip.heading.text) || Pi.set(ip.heading.text, {
                  pageId: pp.id,
                  anchor: ip.heading.anchor
                })
          }
          return Pi
        }

        function yi(pp) {
          const ip = pp.trim().match(/^(?:api\.)?([A-Za-z_$][\w$]*)(?:\(.*\))?$/);
          return ip ? Wi().get(ip[1]) : void 0
        }
        const Ui = (0, Op.createContext)("/docs"),
          wi = (0, Op.createContext)(null),
          vi = (0, Op.createContext)(!1),
          ti = /#(?=\d*[a-fA-F])[0-9a-fA-F]{6}\b/g;

        function Hi(pp) {
          const ip = pp.match(/^["']?(#[0-9a-fA-F]{6})["']?$/);
          return ip ? ip[1] : null
        }

        function di(pp) {
          let {
            colour: ip
          } = pp;
          return (0, yp.jsx)("span", {
            className: "DocsColourSwatch",
            style: {
              background: ip
            },
            "aria-hidden": "true"
          })
        }

        function ei(pp) {
          const ip = [];
          let cp = 0;
          for (const Op of pp.matchAll(ti)) ip.push(pp.slice(cp, Op.index), (0, yp.jsx)(di, {
            colour: Op[0]
          }), Op[0]), cp = Op.index + Op[0].length;
          return ip.push(pp.slice(cp)), ip
        }

        function ui(pp) {
          let {
            href: ip,
            children: cp
          } = pp;
          const op = (0, Op.useContext)(Ui);
          if (ip.startsWith("#")) {
            const pp = np(ip);
            if (pp) return (0, yp.jsx)(Sp.c, {
              to: gp(op, pp.page, pp.anchor),
              children: (0, yp.jsx)(vi.Provider, {
                value: !0,
                children: cp
              })
            })
          }
          return (0, yp.jsx)("a", {
            href: ip,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, yp.jsx)(vi.Provider, {
              value: !0,
              children: cp
            })
          })
        }

        function ji(pp) {
          let {
            code: ip
          } = pp;
          const cp = (0, Op.useContext)(Ui);
          if ((0, Op.useContext)(vi)) return (0, yp.jsx)("code", {
            className: "DocsInlineCode",
            children: ip
          });
          if (Di().has(ip)) return (0, yp.jsx)(qi, {
            type: ip
          });
          const op = yi(ip);
          if (op) return (0, yp.jsx)(Sp.c, {
            className: "DocsInlineCode DocsSymbolLink",
            to: gp(cp, fp(op.pageId), op.anchor),
            children: ip
          });
          const Ip = Hi(ip);
          return (0, yp.jsxs)("code", {
            className: "DocsInlineCode",
            children: [Ip && (0, yp.jsx)(di, {
              colour: Ip
            }), ip]
          })
        }

        function ki(pp) {
          let {
            text: ip
          } = pp;
          const cp = [];
          let op = 0;
          for (const Op of ip.matchAll(mp.g)) {
            Op.index > op && cp.push(...ei(ip.slice(op, Op.index)));
            const [, pp, Ip, Sp, xp, Lp] = Op;
            pp ? cp.push((0, yp.jsx)(ji, {
              code: (0, mp.q)(pp, Ip)
            })) : Sp ? cp.push((0, yp.jsx)("strong", {
              children: (0, yp.jsx)(ki, {
                text: Sp
              })
            })) : cp.push((0, yp.jsx)(ui, {
              href: Lp,
              children: (0, yp.jsx)(ki, {
                text: xp
              })
            })), op = Op.index + Op[0].length
          }
          return op < ip.length && cp.push(...ei(ip.slice(op))), (0, yp.jsx)(yp.Fragment, {
            children: cp.map(((pp, ip) => (0, yp.jsx)(Op.Fragment, {
              children: pp
            }, ip)))
          })
        }
        const mi = /("[^"]*"|'[^']*'|`[^`]*`)|([A-Za-z_$][\w$]*)|(\d+(?:\.\d+)?)|(\s+)|([^\w\s"'`$]+)/g,
          Ri = new Set(["string", "number", "boolean", "null", "undefined", "void", "any", "unknown", "never", "object", "true", "false", "keyof", "typeof", "in", "extends", "readonly"]);

        function qi(pp) {
          let {
            type: ip
          } = pp;
          const cp = Di(),
            op = [];
          for (const Op of ip.trim().matchAll(mi)) {
            const [pp, ip, Ip, Sp, xp] = Op;
            ip ? op.push((0, yp.jsx)("span", {
              className: "DocsTypeString",
              children: pp
            })) : Ip && cp.has(Ip) ? op.push((0, yp.jsx)(li, {
              name: Ip,
              definition: cp.get(Ip)
            })) : Ip ? op.push((0, yp.jsx)("span", {
              className: Ri.has(Ip) ? "DocsTypeKeyword" : "DocsTypeName",
              children: pp
            })) : Sp ? op.push((0, yp.jsx)("span", {
              className: "DocsTypeNumber",
              children: pp
            })) : xp ? op.push(" ") : op.push((0, yp.jsx)("span", {
              className: "DocsTypePunctuation",
              children: pp
            }))
          }
          return (0, yp.jsx)("code", {
            className: "DocsInlineCode DocsTypeText",
            children: op.map(((pp, ip) => (0, yp.jsx)(Op.Fragment, {
              children: pp
            }, ip)))
          })
        }
        const Mi = 480,
          Ci = 6,
          Ei = "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
        let Xi = 0;

        function li(pp) {
          let {
            name: ip,
            definition: cp
          } = pp;
          const op = (0, Op.useContext)(Ui),
            Ip = Ai[ip],
            xp = (0, Op.useRef)(null),
            Lp = (0, Op.useRef)(null),
            Dp = (0, Op.useRef)(null),
            [Ap, Pp] = (0, Op.useState)(!1),
            [Wp, Up] = (0, Op.useState)(null),
            vp = (0, Op.useRef)(),
            tp = (0, Op.useContext)(wi),
            [Hp] = (0, Op.useState)((() => "DocsTypePopover-" + Xi++)),
            dp = () => {
              clearTimeout(vp.current), Pp(!0)
            },
            ep = () => {
              clearTimeout(vp.current), vp.current = setTimeout((() => {
                Pp(!1)
              }), 120)
            };
          return (0, Op.useEffect)((() => {
            if (!Ap) return;
            const pp = pp => {
              if ("Escape" === pp.key) {
                var ip, cp;
                if (null !== (ip = Lp.current) && void 0 !== ip && ip.contains(document.activeElement)) null === (cp = xp.current) || void 0 === cp || cp.focus();
                Pp(!1)
              }
            };
            return document.addEventListener("keydown", pp), () => {
              document.removeEventListener("keydown", pp)
            }
          }), [Ap]), (0, Op.useEffect)((() => () => {
            clearTimeout(vp.current)
          }), []), (0, Op.useLayoutEffect)((() => {
            if (!Ap || !xp.current || !Lp.current) return void Up(null);
            const pp = xp.current.getBoundingClientRect(),
              ip = Lp.current.offsetHeight,
              cp = Math.min(Mi, window.innerWidth - 32),
              Op = Math.min(Math.max(16, pp.left), window.innerWidth - cp - 16),
              op = pp.bottom + Ci + ip < window.innerHeight;
            Up({
              left: Op,
              top: op ? pp.bottom + Ci : Math.max(16, pp.top - Ci - ip)
            })
          }), [Ap]), (0, yp.jsxs)(yp.Fragment, {
            children: [(0, yp.jsx)("button", {
              type: "button",
              ref: xp,
              className: "DocsTypeLink",
              "aria-expanded": Ap,
              "aria-describedby": Ap ? Hp : void 0,
              onMouseEnter: dp,
              onMouseLeave: ep,
              onFocus: dp,
              onBlur: ep,
              onKeyDown: pp => {
                "Tab" === pp.key && !pp.shiftKey && Dp.current && (pp.preventDefault(), Dp.current.focus())
              },
              onClick: dp,
              children: ip
            }), Ap && (0, Yp.createPortal)((0, yp.jsxs)("span", {
              ref: Lp,
              id: Hp,
              className: "DocsTypePopover",
              role: "tooltip",
              style: Wp ? {
                left: Wp.left,
                top: Wp.top,
                maxWidth: Mi
              } : {
                visibility: "hidden"
              },
              onMouseEnter: dp,
              onMouseLeave: ep,
              onFocus: dp,
              onBlur: ep,
              children: [(0, yp.jsxs)("span", {
                className: "DocsTypePopoverHeader",
                children: [(0, yp.jsx)("span", {
                  className: "DocsTypePopoverTitle",
                  children: ip
                }), Ip && (0, yp.jsxs)(Sp.c, {
                  ref: Dp,
                  className: "DocsTypePopoverLink",
                  to: gp(op, fp(Ip)),
                  onClick: () => {
                    Pp(!1)
                  },
                  onKeyDown: pp => {
                    if ("Tab" === pp.key) {
                      var ip;
                      if (pp.preventDefault(), pp.shiftKey || !xp.current || ! function(pp, ip) {
                          const cp = [...document.querySelectorAll(Ei)],
                            Op = cp.slice(cp.indexOf(pp) + 1).find((pp => pp.getClientRects().length > 0 && !(null !== ip && void 0 !== ip && ip.contains(pp))));
                          return null === Op || void 0 === Op || Op.focus(), void 0 !== Op
                        }(xp.current, Lp.current)) null === (ip = xp.current) || void 0 === ip || ip.focus();
                      pp.shiftKey || Pp(!1)
                    }
                  },
                  children: [fp(Ip).title, (0, yp.jsx)(wp, {
                    name: "arrow-right"
                  })]
                })]
              }), (0, yp.jsx)(kp, {
                lang: "ts",
                code: cp,
                compact: !0
              })]
            }), null !== tp && void 0 !== tp ? tp : document.body)]
          })
        }
        var Qi = cp(195),
          Ji = cp(4876),
          Bi = cp(4880),
          Ni = cp(4882);
        const Ti = {
          progressBar: {
            Oi: 30,
            oi: .075,
            Ii: 5,
            Si: !1,
            description: [{
              str: "Click repeatedly to complete!"
            }],
            Yi: "fa-solid fa-computer-mouse",
            scale: 3,
            rotation: 15
          },
          timedClick: {
            Ai: 3e3,
            icon: "fa-solid fa-computer-mouse",
            label: [{
              str: "Click to complete the QTE!"
            }],
            Pi: !0,
            scale: 3,
            rotation: 15,
            Wi: !1
          },
          gravityBar: {
            Oi: 30,
            Ui: .25,
            Hi: 3,
            ui: .8,
            gravity: 1,
            ji: 1.5,
            ki: 8,
            mi: 4,
            Si: !1,
            description: [{
              str: "Hold to catch!"
            }],
            icon: "Moonfish"
          },
          precisionBar: {
            speed: .5,
            qi: .15,
            label: [{
              str: "Click when the marker is within the green zone."
            }],
            icon: "",
            scale: 1,
            rotation: 0
          },
          rhythmClick: {
            Ci: 5,
            Ei: 1200,
            Xi: .15,
            li: 3,
            label: [{
              str: "Click when the circles align!"
            }],
            icon: ""
          }
        };
        var fi = cp(322),
          bi = cp(2028);

        function ai(pp) {
          return pp.startsWith("fa-")
        }
        const ni = {
            text: "Text",
            icon: "Icon",
            progressBar: "Progress bar",
            keyBinding: "Key binding",
            other: "Other"
          },
          Fi = {
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

        function gi(pp) {
          return "string" === typeof pp ? "text" : "entityName" in pp || "translationKey" in pp ? "other" : (0, fi.Eb)(pp) ? "progressBar" : (0, fi.Cb)(pp) ? "keyBinding" : "icon" in pp ? "icon" : "str" in pp && "string" === typeof pp.str ? "text" : "other"
        }
        const Gi = [{
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
          ri = {
            text: [{
              path: ["str"],
              label: "Text",
              field: {
                kind: "text",
                multiline: !0
              },
              isRequired: !0
            }, ...Gi],
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
                options: bi.n
              },
              isRequired: !0
            }, ...Gi],
            other: []
          };

        function Zi(pp) {
          return "string" === typeof pp ? {
            str: pp
          } : pp
        }

        function zi(pp, ip) {
          let cp = Zi(pp);
          for (const Op of ip) cp = cp && "object" === typeof cp ? cp[Op] : void 0;
          return cp
        }

        function si(pp, ip, cp) {
          const Op = (pp, op) => {
            var Ip;
            const Sp = ip[op],
              xp = {
                ...pp
              };
            if (op === ip.length - 1) return void 0 === cp ? delete xp[Sp] : xp[Sp] = cp, xp;
            const Lp = Op(null !== (Ip = pp[Sp]) && void 0 !== Ip ? Ip : {}, op + 1);
            return 0 === Object.keys(Lp).length ? delete xp[Sp] : xp[Sp] = Lp, xp
          };
          return function(pp) {
            const ip = Object.keys(pp);
            return "string" === typeof pp.str && 1 === ip.length ? pp.str : pp
          }(Op(Zi(pp), 0))
        }

        function Ki(pp, ip) {
          const cp = gi(pp),
            Op = ri[cp].find((pp => pp.path.join(".") === ip.join("."))),
            op = null !== Op && void 0 !== Op && Op.isRequired && "other" !== cp ? zi(Fi[cp], ip) : void 0;
          return si(pp, ip, op)
        }

        function Vi(pp) {
          switch (gi(pp)) {
            case "text":
              return String(zi(pp, ["str"]));
            case "icon":
              return String(zi(pp, ["icon"]));
            case "progressBar":
              return `${Math.round(100*Number(zi(pp,["progress"])))}%`;
            case "keyBinding":
              return String(zi(pp, ["action"]));
            case "other":
              return JSON.stringify(pp)
          }
        }
        const pc = /^[A-Za-z_$][\w$]*$/;

        function ic(pp) {
          if (Array.isArray(pp)) return `[${pp.map(ic).join(", ")}]`;
          if (pp && "object" === typeof pp) {
            const ip = Object.entries(pp).map((pp => {
              let [ip, cp] = pp;
              return `${pc.test(ip)?ip:JSON.stringify(ip)}: ${ic(cp)}`
            }));
            return 0 === ip.length ? "{}" : `{ ${ip.join(", ")} }`
          }
          return JSON.stringify(pp)
        }

        function cc(pp) {
          const ip = pp.map(ic),
            cp = `[${ip.join(", ")}]`;
          return cp.length <= 60 ? cp : `[\n${ip.map((pp=>`    ${pp},`)).join("\n")}\n]`
        }
        const Oc = {
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t"
        };

        function oc(pp) {
          let ip = "";
          for (let op = 0; op < pp.length; op++) {
            const Ip = pp[op];
            if ("\\" === Ip) {
              var cp;
              const Op = null !== (cp = pp[op + 1]) && void 0 !== cp ? cp : "";
              ip += "'" === Op ? "'" : Ip + Op, op++
            } else if ('"' === Ip) ip += '\\"';
            else {
              var Op;
              ip += null !== (Op = Oc[Ip]) && void 0 !== Op ? Op : Ip
            }
          }
          return `"${ip}"`
        }

        function Ic(pp) {
          if ("string" === typeof pp) return !0;
          if (!pp || "object" !== typeof pp || Array.isArray(pp)) return !1;
          const ip = pp;
          return "ProgressBar" === ip.type ? "number" === typeof ip.progress : "StyledKeyBinding" === ip.type ? bi.n.includes(ip.action) : "string" === typeof ip.icon || "string" === typeof ip.str || "string" === typeof ip.entityName || "string" === typeof ip.translationKey
        }

        function Sc(pp) {
          let ip;
          try {
            ip = function(pp) {
              let ip = "",
                cp = "",
                Op = 0;
              const op = () => {
                ip += cp.replace(/([A-Za-z_$][\w$]*)\s*:/g, '"$1":').replace(/,(\s*[\]}])/g, "$1"), cp = ""
              };
              for (; Op < pp.length;) {
                const Ip = pp.slice(Op).search(/["'`]|\/\//);
                if (-1 === Ip) {
                  cp += pp.slice(Op);
                  break
                }
                cp += pp.slice(Op, Op + Ip);
                const Sp = Op + Ip,
                  xp = pp[Sp];
                if ("/" === xp) {
                  const ip = pp.indexOf("\n", Sp);
                  Op = -1 === ip ? pp.length : ip;
                  continue
                }
                if (op(), "`" === xp) throw new Error("Use quotes rather than template strings.");
                let Lp = Sp + 1;
                for (; Lp < pp.length && pp[Lp] !== xp;) Lp += "\\" === pp[Lp] ? 2 : 1;
                if (Lp >= pp.length) throw new Error("A string is missing its closing quote.");
                const Yp = pp.slice(Sp + 1, Lp);
                ip += oc(Yp), Op = Lp + 1
              }
              return op(), JSON.parse(ip)
            }(pp.trim())
          } catch (Op) {
            return {
              parts: null,
              error: Op instanceof SyntaxError ? "This isn't a valid array yet." : Op.message
            }
          }
          if (!Array.isArray(ip)) return {
            parts: null,
            error: 'Styled text is an array, e.g. ["Hello ", { str: "world" }]'
          };
          const cp = ip.findIndex((pp => !Ic(pp)));
          return -1 !== cp ? {
            parts: null,
            error: `Part ${cp+1} isn't one Bloxd draws: use a string, { str }, { icon }, a ProgressBar or a StyledKeyBinding.`
          } : {
            parts: ip,
            error: null
          }
        }
        const xc = 1 / Qi.g.clientTicksPerSecond,
          Lc = 700,
          Yc = {
            type: null,
            parameters: null,
            state: null,
            isActive: !1
          },
          Dc = {
            progressBar: Ti.progressBar.Yi,
            timedClick: Ti.timedClick.icon,
            gravityBar: Ti.gravityBar.icon,
            precisionBar: Ti.precisionBar.icon,
            rhythmClick: Ti.rhythmClick.icon
          };

        function Ac(pp) {
          let {
            type: ip
          } = pp;
          const [cp, op] = (0, Op.useState)("ready"), [Sp, xp] = (0, Op.useState)(1), [Lp, Yp] = (0, Op.useState)(!0), Dp = (0, Op.useRef)(null), Ap = (0, Op.useRef)(null), Pp = (0, Op.useRef)(null), Wp = (0, Op.useRef)(new Set), Up = (0, Op.useRef)(!1), vp = Dc[ip], tp = (0, Op.useMemo)((() => ({
            getState: () => {
              var pp, ip;
              return null !== (pp = null === (ip = Pp.current) || void 0 === ip ? void 0 : ip.getState()) && void 0 !== pp ? pp : Yc
            },
            onFrame: pp => (Wp.current.add(pp), () => {
              Wp.current.delete(pp)
            })
          })), []);
          (0, Op.useEffect)((() => {
            const pp = Dp.current,
              ip = Ap.current;
            if (!pp || !ip) return;
            const cp = new ResizeObserver((() => {
              xp(pp.clientWidth / Math.max(1, ip.offsetWidth))
            }));
            return cp.observe(pp), () => {
              cp.disconnect()
            }
          }), []), (0, Op.useEffect)((() => {
            var pp;
            if ("playing" !== cp) return;
            let Op = !1;
            const Ip = new Ni.e[ip](Ti[ip], (pp => {
              Op = !0, Yp(!1), op(pp ? "succeeded" : "failed")
            }), (() => {}));
            Pp.current = Ip;
            let Sp = 0,
              xp = performance.now(),
              Lp = requestAnimationFrame((function pp(ip) {
                for (Sp += Math.min(.25, (ip - xp) / 1e3), xp = ip; Sp >= xc && !Op;) Sp -= xc, Ip.handleTick(xc);
                for (const cp of Wp.current) cp();
                Op || (Lp = requestAnimationFrame(pp))
              }));
            return null === (pp = Dp.current) || void 0 === pp || pp.focus({
              preventScroll: !0
            }), () => {
              cancelAnimationFrame(Lp), Ip.tearDown(), Pp.current = null, Up.current = !1
            }
          }), [cp, ip]), (0, Op.useEffect)((() => {
            if (Lp) return;
            const pp = setTimeout((() => {
              Yp(!0)
            }), Lc);
            return () => {
              clearTimeout(pp)
            }
          }), [Lp]);
          const Hp = pp => {
            var ip;
            "playing" === cp && Up.current !== pp && (Up.current = pp, null === (ip = Pp.current) || void 0 === ip || ip.handleMouseInput(pp))
          };
          return (0, yp.jsxs)("div", {
            className: "DocsQteDemo",
            children: [(0, yp.jsxs)("div", {
              ref: Dp,
              className: Ip()("DocsQteStage", {
                Playing: "playing" === cp
              }),
              tabIndex: "playing" === cp ? 0 : -1,
              role: "playing" === cp ? "button" : void 0,
              "aria-label": "playing" === cp ? `${ip} quick time event: click or press Space` : void 0,
              onPointerDown: pp => {
                0 === pp.button && Hp(!0)
              },
              onPointerUp: () => {
                Hp(!1)
              },
              onPointerLeave: () => {
                Hp(!1)
              },
              onPointerCancel: () => {
                Hp(!1)
              },
              onKeyDown: pp => {
                "playing" !== cp || " " !== pp.key && "Enter" !== pp.key || (pp.preventDefault(), Hp(!0))
              },
              onKeyUp: pp => {
                "playing" !== cp || " " !== pp.key && "Enter" !== pp.key || Hp(!1)
              },
              children: [(0, yp.jsx)("div", {
                ref: Ap,
                className: "DocsQteScreen",
                style: {
                  transform: `scale(${Sp})`
                },
                children: "playing" === cp && (0, yp.jsx)(Bi.b.Provider, {
                  value: tp,
                  children: (0, yp.jsx)(Ji.c, {
                    qte: {
                      type: ip,
                      parameters: Ti[ip]
                    }
                  })
                })
              }), "playing" !== cp && (0, yp.jsxs)("div", {
                className: "DocsQteOverlay",
                children: ["ready" !== cp && (0, yp.jsxs)("div", {
                  className: Ip()("DocsQteResult", "succeeded" === cp ? "Succeeded" : "Failed"),
                  children: [(0, yp.jsx)(wp, {
                    name: "succeeded" === cp ? "check" : "cross",
                    isTinted: !0
                  }), (0, yp.jsx)("span", {
                    children: "succeeded" === cp ? "Succeeded: onPlayerFinishQTE gets true" : "Failed: onPlayerFinishQTE gets false"
                  })]
                }), (0, yp.jsxs)("button", {
                  type: "button",
                  className: "DocsQtePlay",
                  disabled: !Lp,
                  onClick: () => {
                    op("playing")
                  },
                  children: [(0, yp.jsx)(wp, {
                    name: "ready" === cp ? "play" : "replay"
                  }), (0, yp.jsx)("span", {
                    children: "ready" === cp ? `Try ${ip}` : "Play again"
                  })]
                })]
              })]
            }), vp && !ai(vp) && (0, yp.jsxs)("p", {
              className: "DocsQteCaption",
              children: ["The ", (0, yp.jsx)("code", {
                children: vp
              }), " icon is a Bloxd item, so it shows in game only."]
            })]
          })
        }

        function Pc(pp) {
          let {
            level: ip,
            text: cp,
            anchor: Op,
            className: op
          } = pp;
          const Sp = `h${Math.min(ip,6)}`;
          return (0, yp.jsxs)(Sp, {
                id: Op,
                className: Ip()("DocsHeading", op),
                children: [(0, yp.jsx)(ki, {
                      text: cp
                    }), (0, yp.jsx)("a", {
                        className: "DocsHeadingAnchor",
                        href: `#${Op}`,
                        "aria-label": `Link to ${cp.replace(/`/g,"")}`,children:"#"})]})}function Wc(pp){let{items:ip,ordered:cp}=pp;const Op=cp?"ol":"ul";return(0,yp.jsx)(Op,{className:"DocsList",children:ip.map(((pp,ip)=>(0,yp.jsxs)("li",{children:[(0,yp.jsx)(ki,{text:pp.text}),pp.children.length>0&&(0,yp.jsx)(Wc,{items:pp.children,ordered:cp})]},ip)))})}function yc(pp){const ip=pp[0],cp="paragraph"===(null===ip||void 0===ip?void 0:ip.kind)?ip.text.toLowerCase():"";return/^\*\*(warning|important|caution)/.test(cp)?"warning":/^\*\*(tip|prefer)/.test(cp)?"tip":"note"}function Uc(pp){let{block:ip}=pp;switch(ip.kind){case"heading":return(0,yp.jsx)(Pc,{level:ip.level,text:ip.text,anchor:ip.anchor});case"paragraph":return(0,yp.jsx)("p",{children:(0,yp.jsx)(ki,{text:ip.text})});case"code":{const pp="ts"===ip.lang?function(pp){const ip=pp.match(/^api\.addQTE\(playerId, \{\s*type: "(\w+)"/);return ip&&Object.hasOwn(Ti,ip[1])?ip[1]:null}(ip.code):null;return(0,yp.jsxs)(yp.Fragment,{children:[(0,yp.jsx)(kp,{code:ip.code,lang:ip.lang}),pp&&(0,yp.jsx)(Ac,{type:pp})]})}case"table":return(0,yp.jsx)("div",{className:"DocsTableScroll",children:(0,yp.jsxs)("table",{className:"DocsTable",children:[(0,yp.jsx)("thead",{children:(0,yp.jsx)("tr",{children:ip.header.map(((pp,ip)=>(0,yp.jsx)("th",{children:(0,yp.jsx)(ki,{text:pp})},ip)))})}),(0,yp.jsx)("tbody",{children:ip.rows.map(((pp,ip)=>(0,yp.jsx)("tr",{children:pp.map(((pp,ip)=>(0,yp.jsx)("td",{children:(0,yp.jsx)(ki,{text:pp})},ip)))},ip)))})]})});case"list":return(0,yp.jsx)(Wc,{items:ip.items,ordered:ip.ordered});case"quote":return(0,yp.jsx)("aside",{className:Ip()("DocsCallout",yc(ip.blocks)),children:(0,yp.jsx)(wc,{blocks:ip.blocks})});case"rule":return(0,yp.jsx)("hr",{className:"DocsRule"})}}function wc(pp){let{blocks:ip}=pp;return(0,yp.jsx)(yp.Fragment,{children:ip.map(((pp,ip)=>(0,yp.jsx)(Uc,{block:pp},ip)))})}var vc=cp(4861),tc=cp(4868);function Hc(pp){return"blocks"===pp||"items"===pp}const dc=new Map;function ec(pp){let ip=dc.get(pp);return ip||(ip=function(pp){const ip={entries:[],legend:[],notes:[],examples:[]};let cp=!1;for(const Ip of pp.split(/\r?\n/).slice(1)){if(Ip.startsWith("#")){const pp=Ip.replace(/^# ?/,""),Op=pp.match(/^\s+([A-Z]+)\s+=\s+(\w+)\s+->\s+(.+)$/);Op?ip.legend.push({code:Op[1],meaning:Op[2],usage:Op[3].trim()}):/^Examples:/.test(pp.trim())?cp=!0:cp&&pp.trim()?ip.examples.push(pp.trim()):pp.trim()&&!/^\s/.test(pp)&&ip.notes.push(pp.trim());continue}const pp=Ip.trim().match(/^(.+?)(?:\s+\[([A-Z,]+)\])?$/);var Op,op;pp&&ip.entries.push({name:pp[1],variants:null!==(Op=null===(op=pp[2])||void 0===op?void 0:op.split(","))&&void 0!==Op?Op:[]})}return ip}("blocks"===pp?vc:tc),dc.set(pp,ip)),ip}function uc(pp){let{className:ip,value:cp,placeholder:Op,label:op,onChange:Ip,count:Sp,children:xp}=pp;return(0,yp.jsxs)("div",{className:ip,children:[(0,yp.jsx)(wp,{name:"magnifying-glass"}),(0,yp.jsx)("input",{type:"search",value:cp,placeholder:Op,"aria-label":op,onChange:pp=>{Ip(pp.target.value)}}),xp,Sp&&(0,yp.jsxs)("span",{className:"DocsFilterCount",children:[Sp.visible," of ",Sp.total]})]})}var jc=cp(1060);function kc(pp){const ip=pp.trim().match(/^(` {
                          1,
                          2
                        })\ s * ([ ^ `]+?)\s*\1$/);return ip?ip[2]:null}function mc(pp){return"paragraph"===pp.kind&&""===pp.text.trim()}function Rc(pp){const ip={name:pp.heading.text,description:[],params:[],returns:null};let cp="description";for(const op of pp.blocks)if(!mc(op))if("heading"===op.kind&&/^Parameters:?$/.test(op.text))cp="params";else if("heading"===op.kind&&/^Returns:?$/.test(op.text))cp="returns",ip.returns={type:"",description:[]};else if("params"!==cp||"table"!==op.kind){if("returns"===cp&&"paragraph"===op.kind&&""===ip.returns.type){const pp=kc(op.text);if(null!==pp){ip.returns.type=pp.replaceAll("\\|","|");continue}}"returns"===cp?ip.returns.description.push(op):ip.description.push(op)}else for(const[pp,cp,Ip]of op.rows){var Op;ip.params.push({name:pp,type:null!==(Op=kc(cp))&&void 0!==Op?Op:cp,description:null!==Ip&&void 0!==Ip?Ip:""})}return ip}const qc=/^\*\*(Type|Default|Example):\*\*\s*(.*)$/;function Mc(pp){return pp.filter((pp=>!mc(pp)))}const Cc=/^[\w][\w .'&!:()-]*$/,Ec=/^` [ ^ `]+`( ? : [\s, ] * `[^`] + `)*$/;function Xc(pp){var ip;if("code"===pp.kind&&"text"===pp.lang){const ip=pp.code.split("\n").map((pp=>pp.trim())).filter(Boolean);return ip.length>0&&ip.every((pp=>Cc.test(pp)))?ip.map((pp=>({name:pp}))):null}return"paragraph"===pp.kind&&Ec.test(pp.text.trim())?[...pp.text.matchAll(/`([ ^ `]+)` / g)].flatMap((pp => pp[1].split(/,\s*/).map((pp => ({
                              name: pp.trim()
                            }))))): "table" === pp.kind && null !== (ip = pp.header[0]) && void 0 !== ip && ip.startsWith("Song") ? pp.rows.map((pp => {
                              let [ip, cp] = pp;
                              return {
                                name: ip.replace(/`/g, ""),
                                caption: cp
                              }
                            })) : null
                          }

                          function lc(pp) {
                            const ip = [];
                            for (const cp of pp) {
                              const pp = Xc(cp),
                                Op = ip.at(-1),
                                op = "table" === cp.kind;
                              pp ? "names" === (null === Op || void 0 === Op ? void 0 : Op.kind) && Op.isSongs === op ? Op.names.push(...pp) : ip.push({
                                kind: "names",
                                names: pp,
                                isSongs: op
                              }) : ip.push({
                                kind: "block",
                                block: cp
                              })
                            }
                            return ip
                          }
                          const Qc = {
                            icons: "icon",
                            particles: "particle",
                            sounds: "sound",
                            skins: "skin",
                            blocks: "block",
                            items: "item"
                          };

                          function Jc(pp, ip) {
                            return `${Qc[pp]}-${(0,mp.s)(ip)}`
                          }
                          const Bc = new WeakMap;

                          function Nc(pp, ip, cp) {
                            let Op = Bc.get(ip);
                            if (!Op) {
                              Op = new Map;
                              const cp = new Set;
                              for (const op of (0, mp.t)(ip)) {
                                const ip = lc(Mc(op.blocks)).map((ip => {
                                  if ("block" === ip.kind) return ip;
                                  return {
                                    kind: "names",
                                    names: ip.names.map((ip => {
                                      var Op, Ip;
                                      const Sp = Jc(pp, ip.name);
                                      let xp = Sp;
                                      for (let pp = 2; cp.has(xp); pp++) xp = `${Sp}-${pp}`;
                                      return cp.add(xp), {
                                        ...ip,
                                        anchor: xp,
                                        heading: null !== (Op = null === (Ip = op.heading) || void 0 === Ip ? void 0 : Ip.text) && void 0 !== Op ? Op : ""
                                      }
                                    })),
                                    isSongs: ip.isSongs
                                  }
                                }));
                                Op.set(op.blocks, ip)
                              }
                              Bc.set(ip, Op)
                            }
                            const op = Op.get(cp);
                            if (!op) throw new Error("Gallery blocks must be the page's intro or one of its sections");
                            return op
                          }
                          const Tc = "/textures/docs/skinPreviews",
                            fc = [{
                              heading: "NPC Skins",
                              prefix: "npc"
                            }, {
                              heading: "Poses",
                              prefix: "pose"
                            }];
                          var bc = cp(4317),
                            hc = cp(4341);

                          function ac(pp) {
                            return Object.hasOwn(bc.f, pp) ? bc.f[pp] : null
                          }
                          const nc = {
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
                            blendMode: hc.g.Standard
                          };

                          function Fc(pp, ip, cp) {
                            return ip + (cp - ip) * pp()
                          }

                          function gc(pp, ip, cp) {
                            return pp + (ip - pp) * cp
                          }

                          function Gc(pp) {
                            return pp.length > 0 && "timeFraction" in pp[0]
                          }

                          function rc(pp, ip) {
                            if (0 === pp.colorGradients.length) return [{
                              at: 0,
                              colour: [1, 1, 1, 1]
                            }];
                            if (!Gc(pp.colorGradients)) {
                              const cp = pp.colorGradients,
                                {
                                  color: Op
                                } = cp[Math.floor(ip() * cp.length) % cp.length];
                              return [{
                                at: 0,
                                colour: [Op[0] / 255, Op[1] / 255, Op[2] / 255, 1]
                              }]
                            }
                            return [...pp.colorGradients].sort(((pp, ip) => pp.timeFraction - ip.timeFraction)).map((pp => {
                              var cp, Op, op;
                              const Ip = pp.minColor,
                                Sp = null !== (cp = pp.maxColor) && void 0 !== cp ? cp : Ip,
                                xp = ip(),
                                Lp = [gc(Ip[0], Sp[0], xp) / 255, gc(Ip[1], Sp[1], xp) / 255, gc(Ip[2], Sp[2], xp) / 255, gc(null !== (Op = Ip[3]) && void 0 !== Op ? Op : 1, null !== (op = Sp[3]) && void 0 !== op ? op : 1, xp)];
                              return {
                                at: pp.timeFraction,
                                colour: Lp
                              }
                            }))
                          }

                          function Zc(pp, ip, cp, Op) {
                            const op = Fc(Op, pp.minEmitPower, pp.maxEmitPower),
                              Ip = ip => Fc(Op, Math.min(pp.dir1[ip], pp.dir2[ip]), Math.max(pp.dir1[ip], pp.dir2[ip])) * op,
                              Sp = [...pp.velocityGradients].sort(((pp, ip) => pp.timeFraction - ip.timeFraction)).map((pp => ({
                                at: pp.timeFraction,
                                factor: Fc(Op, pp.factor, pp.factor2)
                              })));
                            return {
                              pos: [Fc(Op, ip[0], cp[0]), Fc(Op, ip[1], cp[1]), Fc(Op, ip[2], cp[2])],
                              dir: [Ip(0), Ip(1), Ip(2)],
                              age: 0,
                              life: Fc(Op, pp.minLifeTime, pp.maxLifeTime),
                              size: Fc(Op, pp.minSize, pp.maxSize),
                              colours: rc(pp, Op),
                              velocityFactors: Sp
                            }
                          }

                          function zc(pp, ip, cp, Op) {
                            if (ip < pp[0].at) return cp(Math.min(1, pp.length - 1));
                            for (let op = 0; op < pp.length - 1; op++)
                              if (ip <= pp[op + 1].at) {
                                const Ip = pp[op + 1].at - pp[op].at;
                                return Op(cp(op), cp(op + 1), Ip > 0 ? (ip - pp[op].at) / Ip : 1)
                              } return cp(pp.length - 1)
                          }

                          function sc(pp) {
                            return zc(pp.colours, pp.age / pp.life, (ip => pp.colours[ip].colour), ((pp, ip, cp) => [gc(pp[0], ip[0], cp), gc(pp[1], ip[1], cp), gc(pp[2], ip[2], cp), gc(pp[3], ip[3], cp)]))
                          }

                          function Kc(pp, ip, cp) {
                            if (pp.age += cp, pp.age >= pp.life) return !1;
                            const Op = function(pp) {
                              return 0 === pp.velocityFactors.length ? 1 : zc(pp.velocityFactors, pp.age / pp.life, (ip => pp.velocityFactors[ip].factor), gc)
                            }(pp) * cp;
                            for (let Ip = 0; Ip < 3; Ip++) {
                              var op;
                              pp.pos[Ip] += pp.dir[Ip] * Op, pp.dir[Ip] += (null !== (op = ip[Ip]) && void 0 !== op ? op : 0) * cp
                            }
                            return !0
                          }

                          function Vc(pp) {
                            return String(Math.round(1e6 * pp) / 1e6)
                          }

                          function pO(pp) {
                            return `[${pp.map(Vc).join(", ")}]`
                          }

                          function iO(pp, ip) {
                            const cp = `${ip}    `;
                            return `[\n${(Gc(pp)?pp.map((pp=>{const ip=[`${cp}    timeFraction: ${Vc(pp.timeFraction)},`,`${cp}    minColor: ${pO(pp.minColor)},`];return pp.maxColor&&ip.push(`${cp}    maxColor: ${pO(pp.maxColor)},`),`${cp}{\n${ip.join("\n")}\n${cp}},`})):pp.map((pp=>`
                            $ {
                              cp
                            } {
                              color: $ {
                                pO(pp.color)
                              }
                            }, `))).join("\n")}\n${ip}]`
                          }
                          const cO = "let [x, y, z] = thisPos\ny += 1\napi.playParticleEffect({\n",
                            OO = "    pos1: [x, y, z],\n    pos2: [x + 1, y + 1, z + 1],";
                          const oO = .6;

                          function IO(pp, ip) {
                            return `${ip?"song":"sound"}:${pp}`
                          }
                          let SO = {
                              track: null,
                              volume: oO
                            },
                            xO = null,
                            LO = 0,
                            YO = 0;
                          const DO = new Set;

                          function AO(pp) {
                            SO = {
                              ...SO,
                              ...pp
                            }, DO.forEach((pp => {
                              pp()
                            }))
                          }

                          function PO(pp) {
                            SO.track && AO({
                              track: {
                                ...SO.track,
                                ...pp
                              }
                            })
                          }

                          function WO(pp) {
                            const [ip, cp] = (0, Op.useState)((() => pp(SO))), op = (0, Op.useRef)(pp);
                            return op.current = pp, (0, Op.useEffect)((() => {
                              const pp = () => {
                                cp((() => op.current(SO)))
                              };
                              return DO.add(pp), pp(), () => {
                                DO.delete(pp)
                              }
                            }), []), ip
                          }

                          function yO() {
                            LO++;
                            const pp = xO;
                            xO = null, null === pp || void 0 === pp || pp.stop()
                          }

                          function UO(pp, ip) {
                            let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            yO();
                            const op = LO,
                              {
                                track: Ip
                              } = SO,
                              Sp = Ip && Ip.name === pp && Ip.isSong === ip ? Ip.duration : 0;
                            YO = Op, AO({
                              track: {
                                name: pp,
                                isSong: ip,
                                status: "loading",
                                duration: Sp
                              }
                            }), Promise.all([cp.e(227), cp.e(253)]).then((() => cp(40003))).then((cp => {
                              let {
                                playDocsSound: Ip
                              } = cp;
                              op === LO && (xO = Ip(pp, ip, SO.volume, Op, {
                                onPlay: pp => {
                                  op === LO && PO({
                                    status: "playing",
                                    duration: pp
                                  })
                                },
                                onEnd: pp => {
                                  var ip, cp;
                                  op === LO && (xO = null, pp ? AO({
                                    track: null
                                  }) : (YO = null !== (ip = null === (cp = SO.track) || void 0 === cp ? void 0 : cp.duration) && void 0 !== ip ? ip : 0, PO({
                                    status: "paused"
                                  })))
                                }
                              }))
                            })).catch((ip => {
                              console.error(`Could not play docs sound ${pp}`, ip), op === LO && AO({
                                track: null
                              })
                            }))
                          }

                          function wO() {
                            const {
                              track: pp
                            } = SO;
                            if (!pp) return;
                            if ("playing" === pp.status && xO) return YO = xO.sH(), xO.pause(), void PO({
                              status: "paused"
                            });
                            if ("loading" === pp.status) return yO(), void PO({
                              status: "paused"
                            });
                            if (xO) return void xO.resume();
                            const ip = pp.duration > 0 && YO >= pp.duration - .05;
                            UO(pp.name, pp.isSong, ip ? 0 : YO)
                          }

                          function vO() {
                            var pp;
                            return xO && "playing" === (null === (pp = SO.track) || void 0 === pp ? void 0 : pp.status) ? xO.sH() : YO
                          }

                          function tO(pp) {
                            var ip;
                            null === (ip = xO) || void 0 === ip || ip.setVolume(pp), AO({
                              volume: pp
                            })
                          }

                          function HO() {
                            yO(), YO = 0, AO({
                              track: null
                            })
                          }
                          const dO = (0, Op.createContext)(null);
                          let eO = null;

                          function uO() {
                            const [pp, ip] = (0, Op.useState)(null);
                            return (0, Op.useEffect)((() => {
                              let pp = !1;
                              return eO ??= Promise.all([cp.e(73), cp.e(76), cp.e(75), cp.e(74), cp.e(188), cp.e(100), cp.e(231)]).then((() => cp(40001))), eO.then((cp => {
                                pp || ip(cp)
                              }), (pp => {
                                console.error("Could not load the docs gallery's textures", pp), eO = null
                              })), () => {
                                pp = !0
                              }
                            }), []), pp
                          }
                          const jO = 24,
                            kO = /^[a-z]+_(\d+(_\d+)?|none)$/;

                          function mO(pp, ip) {
                            const cp = "skins" === pp ? function(pp, ip) {
                              const cp = fc.find((ip => pp.startsWith(ip.heading)));
                              return cp ? function(pp, ip) {
                                return `${pp}-${ip}`
                              }(cp.prefix, ip) : null
                            }(ip.heading, ip.name) : null;
                            return null === cp ? null : `${Tc}/${cp}.webp`
                          }

                          function RO(pp) {
                            let {
                              kind: ip,
                              entry: cp,
                              assets: op,
                              renderedUrl: Sp
                            } = pp;
                            const {
                              name: xp
                            } = cp, [Lp, Yp] = (0, Op.useState)(!1);
                            if ("icons" === ip && ai(xp)) return (0, yp.jsx)(jc.d, {
                              className: "DocsTileIcon",
                              name: xp
                            });
                            let Dp = null;
                            var Ap;
                            if ("icons" === ip) Dp = null !== (Ap = null === op || void 0 === op ? void 0 : op.getIngameIconUrl(xp)) && void 0 !== Ap ? Ap : null;
                            else if ("particles" === ip) {
                              var Pp, Wp, Up;
                              Dp = null !== (Pp = null === op || void 0 === op ? void 0 : op.getParticleTextureUrl(null !== (Wp = null === (Up = ac(xp)) || void 0 === Up ? void 0 : Up.texture) && void 0 !== Wp ? Wp : xp)) && void 0 !== Pp ? Pp : null
                            } else "skins" === ip && (Dp = null !== Sp && void 0 !== Sp ? Sp : kO.test(xp) ? `/textures/charSkins/previews/${xp}_preview.png` : null);
                            return !Dp || Lp ? (0, yp.jsx)(wp, {
                              className: "DocsTileIcon Placeholder",
                              name: "skins" === ip ? "person" : "image"
                            }) : (0, yp.jsx)("img", {
                              className: Ip()("DocsTileImage", {
                                Pixelated: "skins" !== ip
                              }),
                              src: Dp,
                              srcSet: Dp === Sp ? `${Dp} 2x` : void 0,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs gallery: could not load ${Dp}`), Yp(!0)
                              }
                            })
                          }

                          function qO(pp) {
                            let {
                              entry: ip,
                              isSong: cp
                            } = pp;
                            const Op = WO((pp => {
                                let {
                                  track: Op
                                } = pp;
                                return (null === Op || void 0 === Op ? void 0 : Op.name) === ip.name && Op.isSong === cp ? Op.status : null
                              })),
                              op = null !== Op && "paused" !== Op;
                            return (0, yp.jsxs)("button", {
                              type: "button",
                              id: ip.anchor,
                              className: Ip()("DocsSoundTile", {
                                Playing: op
                              }),
                              "data-docs-track": IO(ip.name, cp),
                              "aria-label": op ? `Pause ${ip.name}` : `Play ${ip.name}`,
                              onClick: () => {
                                null !== Op ? wO() : UO(ip.name, cp)
                              },
                              children: [(0, yp.jsx)("span", {
                                className: "DocsSoundPlay",
                                children: (0, yp.jsx)(wp, {
                                  name: op ? "pause" : "play"
                                })
                              }), (0, yp.jsx)("code", {
                                className: "DocsSoundName",
                                children: ip.name
                              }), ip.caption && (0, yp.jsx)("span", {
                                className: "DocsSoundCaption",
                                children: ip.caption
                              })]
                            })
                          }

                          function MO(pp) {
                            let {
                              kind: ip,
                              names: cp,
                              isSongs: op
                            } = pp;
                            const Sp = uO(),
                              [xp, Lp] = tp(),
                              Yp = !1 === (null === xp || void 0 === xp ? void 0 : xp.failed) ? xp.text : null,
                              Dp = (0, Op.useContext)(dO),
                              [Ap, Pp] = (0, Op.useState)(""),
                              Wp = Ap.trim().toLowerCase(),
                              Up = Wp ? cp.filter((pp => pp.name.toLowerCase().includes(Wp))) : cp;
                            return (0, yp.jsxs)("div", {
                              className: "DocsGallery",
                              children: [cp.length > jO && (0, yp.jsx)(uc, {
                                className: "DocsGalleryFilter",
                                value: Ap,
                                placeholder: `Filter ${cp.length} names\u2026`,
                                label: "Filter names",
                                onChange: Pp,
                                count: Wp ? {
                                  visible: Up.length,
                                  total: cp.length
                                } : null
                              }), (0, yp.jsx)("div", {
                                className: Ip()("DocsGalleryGrid", `Kind-${ip}`, {
                                  Songs: op
                                }),
                                children: Up.map((pp => {
                                  if ("sounds" === ip) return (0, yp.jsx)(qO, {
                                    entry: pp,
                                    isSong: op
                                  }, pp.anchor);
                                  if (Dp && "particles" === ip && ac(pp.name)) return (0, yp.jsxs)("button", {
                                    type: "button",
                                    id: pp.anchor,
                                    className: Ip()("DocsTile Previewable", {
                                      Copied: Yp === pp.name
                                    }),
                                    title: `Play "${pp.name}" in the playground and copy its name`,
                                    onClick: () => {
                                      Dp(pp.name), Lp(pp.name)
                                    },
                                    children: [(0, yp.jsxs)("span", {
                                      className: "DocsTilePreview",
                                      children: [(0, yp.jsx)(RO, {
                                        kind: ip,
                                        entry: pp,
                                        assets: Sp,
                                        renderedUrl: null
                                      }), (0, yp.jsx)("span", {
                                        className: "DocsTilePlayBadge",
                                        children: (0, yp.jsx)(wp, {
                                          name: "play"
                                        })
                                      })]
                                    }), (0, yp.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Yp === pp.name ? "Copied!" : pp.name
                                    })]
                                  }, pp.anchor);
                                  const cp = mO(ip, pp);
                                  return (0, yp.jsxs)("button", {
                                    type: "button",
                                    id: pp.anchor,
                                    className: Ip()("DocsTile", {
                                      Copied: Yp === pp.name
                                    }),
                                    title: `Copy "${pp.name}"`,
                                    onClick: () => {
                                      Lp(pp.name)
                                    },
                                    children: [(0, yp.jsx)("span", {
                                      className: Ip()("DocsTilePreview", {
                                        Rendered: null !== cp
                                      }),
                                      children: (0, yp.jsx)(RO, {
                                        kind: ip,
                                        entry: pp,
                                        assets: Sp,
                                        renderedUrl: cp
                                      })
                                    }), (0, yp.jsx)("span", {
                                      className: "DocsTileName",
                                      children: Yp === pp.name ? "Copied!" : pp.name
                                    })]
                                  }, pp.anchor)
                                }))
                              })]
                            })
                          }

                          function CO(pp) {
                            let {
                              kind: ip,
                              content: cp,
                              blocks: Op
                            } = pp;
                            return (0, yp.jsx)(yp.Fragment, {
                              children: Nc(ip, cp, Op).map(((pp, cp) => "block" === pp.kind ? (0, yp.jsx)(Uc, {
                                block: pp.block
                              }, cp) : (0, yp.jsx)(MO, {
                                kind: ip,
                                names: pp.names,
                                isSongs: pp.isSongs
                              }, cp)))
                            })
                          }
                          const EO = [{
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

                          function XO(pp) {
                            let {
                              cards: ip = EO,
                              label: cp = "Start here"
                            } = pp;
                            const op = (0, Op.useContext)(Ui);
                            return (0, yp.jsx)("nav", {
                              className: "DocsLandingCards",
                              "aria-label": cp,
                              children: ip.map((pp => {
                                let {
                                  pageId: ip,
                                  countNoun: cp
                                } = pp;
                                const Op = fp(ip);
                                return (0, yp.jsxs)(Sp.c, {
                                  to: gp(op, Op),
                                  className: "DocsLandingCard",
                                  children: [(0, yp.jsx)("span", {
                                    className: "DocsLandingCardIcon",
                                    children: (0, yp.jsx)(wp, {
                                      name: Op.icon
                                    })
                                  }), (0, yp.jsx)("span", {
                                    className: "DocsLandingCardTitle",
                                    children: Op.title
                                  }), (0, yp.jsx)("span", {
                                    className: "DocsLandingCardSummary",
                                    children: Op.summary
                                  }), cp && (0, yp.jsxs)("span", {
                                    className: "DocsLandingCardCount",
                                    children: [hp(Op).sections.length, " ", cp]
                                  })]
                                }, ip)
                              }))
                            })
                          }
                          const lO = 240;

                          function QO(pp) {
                            let {
                              faces: ip
                            } = pp;
                            return (0, yp.jsxs)("span", {
                              className: "DocsCube",
                              "aria-hidden": "true",
                              children: [(0, yp.jsx)("span", {
                                className: "DocsCubeFace Top",
                                style: {
                                  backgroundImage: `url("${ip.top}")`
                                }
                              }), (0, yp.jsx)("span", {
                                className: "DocsCubeFace Left",
                                style: {
                                  backgroundImage: `url("${ip.left}")`
                                }
                              }), (0, yp.jsx)("span", {
                                className: "DocsCubeFace Right",
                                style: {
                                  backgroundImage: `url("${ip.right}")`
                                }
                              })]
                            })
                          }

                          function JO(pp) {
                            let {
                              src: ip
                            } = pp;
                            const [cp, op] = (0, Op.useState)(!1);
                            return cp ? null : (0, yp.jsx)("img", {
                              src: ip,
                              alt: "",
                              loading: "lazy",
                              onError: () => {
                                console.warn(`Docs catalogue: could not load ${ip}`), op(!0)
                              }
                            })
                          }

                          function BO(pp) {
                            let {
                              kind: ip
                            } = pp;
                            const cp = ec(ip),
                              op = uO(),
                              Sp = (0, xp.r)(),
                              [Lp, Yp] = (0, Op.useState)(""),
                              [Dp, Ap] = (0, Op.useState)(null),
                              [Pp, Wp] = (0, Op.useState)(lO),
                              [Up, vp] = (0, Op.useState)(null),
                              tp = (0, Op.useRef)(null),
                              dp = Lp.trim().toLowerCase();
                            (0, Op.useEffect)((() => {
                              const pp = (0, mp.r)(Sp.hash),
                                Op = cp.entries.find((cp => Jc(ip, cp.name) === pp));
                              if (Op) tp.current = Op.name, Yp(Op.name), Ap(null), vp(Op.name);
                              else if (null !== tp.current) {
                                const pp = tp.current;
                                tp.current = null, Yp((ip => ip === pp ? "" : ip)), vp(null)
                              }
                            }), [cp, ip, Sp.hash, Sp.key]), (0, Op.useEffect)((() => {
                              var pp;
                              null !== Up && (null === (pp = document.getElementById(Jc(ip, Up))) || void 0 === pp || pp.scrollIntoView({
                                block: "center"
                              }))
                            }), [ip, Up]);
                            const ep = cp.entries.filter((pp => (!dp || pp.name.toLowerCase().includes(dp)) && (!Dp || pp.variants.includes(Dp))));
                            return (0, yp.jsxs)("div", {
                              className: "DocsCatalogue",
                              children: [cp.notes.length > 0 && (0, yp.jsx)("div", {
                                className: "DocsProse",
                                children: cp.notes.map((pp => (0, yp.jsx)("p", {
                                  children: pp
                                }, pp)))
                              }), cp.legend.length > 0 && (0, yp.jsx)("div", {
                                className: "DocsTableScroll",
                                children: (0, yp.jsxs)("table", {
                                  className: "DocsTable DocsVariantLegend",
                                  children: [(0, yp.jsx)("thead", {
                                    children: (0, yp.jsxs)("tr", {
                                      children: [(0, yp.jsx)("th", {
                                        children: "Code"
                                      }), (0, yp.jsx)("th", {
                                        children: "Variant"
                                      }), (0, yp.jsx)("th", {
                                        children: "Name to use"
                                      })]
                                    })
                                  }), (0, yp.jsx)("tbody", {
                                    children: cp.legend.map((pp => (0, yp.jsxs)("tr", {
                                      children: [(0, yp.jsx)("td", {
                                        children: (0, yp.jsx)("button", {
                                          type: "button",
                                          className: Ip()("DocsVariantChip", {
                                            Active: Dp === pp.code
                                          }),
                                          "aria-pressed": Dp === pp.code,
                                          title: `Show only ${ip} with ${pp.meaning} variants`,
                                          onClick: () => {
                                            Ap(Dp === pp.code ? null : pp.code)
                                          },
                                          children: pp.code
                                        })
                                      }), (0, yp.jsx)("td", {
                                        children: pp.meaning
                                      }), (0, yp.jsx)("td", {
                                        children: (0, yp.jsx)("code", {
                                          className: "DocsInlineCode",
                                          children: pp.usage
                                        })
                                      })]
                                    }, pp.code)))
                                  })]
                                })
                              }), cp.examples.length > 0 && (0, yp.jsx)(kp, {
                                lang: "text",
                                code: cp.examples.join("\n")
                              }), (0, yp.jsx)(uc, {
                                className: "DocsFilterBar",
                                value: Lp,
                                placeholder: `Search ${cp.entries.length} ${ip}\u2026`,
                                label: `Search ${ip}`,
                                onChange: pp => {
                                  Yp(pp), Wp(lO)
                                },
                                count: dp || Dp ? {
                                  visible: ep.length,
                                  total: cp.entries.length
                                } : null,
                                children: Dp && (0, yp.jsxs)("button", {
                                  type: "button",
                                  className: "DocsVariantChip Active",
                                  onClick: () => {
                                    Ap(null)
                                  },
                                  children: [Dp, " ", (0, yp.jsx)(wp, {
                                    name: "cross"
                                  })]
                                })
                              }), (0, yp.jsx)("div", {
                                className: "DocsCatalogueGrid",
                                children: ep.slice(0, Pp).map((pp => {
                                  const cp = "blocks" === ip ? null === op || void 0 === op ? void 0 : op.getBlockFaces(pp.name) : null,
                                    Op = op && !cp ? op.getItemTextureUrl(pp.name) : null;
                                  return (0, yp.jsxs)("div", {
                                    id: Jc(ip, pp.name),
                                    className: Ip()("DocsCatalogueTile", {
                                      Linked: pp.name === Up
                                    }),
                                    children: [(0, yp.jsxs)("span", {
                                      className: "DocsCatalogueTexture",
                                      children: [cp && (0, yp.jsx)(QO, {
                                        faces: cp
                                      }), Op && (0, yp.jsx)(JO, {
                                        src: Op
                                      })]
                                    }), (0, yp.jsx)("span", {
                                      className: "DocsCatalogueName",
                                      children: pp.name
                                    }), pp.variants.length > 0 && (0, yp.jsx)("span", {
                                      className: "DocsCatalogueVariants",
                                      children: pp.variants.map((pp => (0, yp.jsx)("span", {
                                        children: pp
                                      }, pp)))
                                    }), (0, yp.jsx)(Hp, {
                                      text: pp.name,
                                      className: "DocsCatalogueCopy"
                                    })]
                                  }, pp.name)
                                }))
                              }), ep.length > Pp && (0, yp.jsxs)("button", {
                                type: "button",
                                className: "DocsShowMore",
                                onClick: () => {
                                  Wp(ep.length)
                                },
                                children: ["Show all ", ep.length]
                              }), 0 === ep.length && (0, yp.jsxs)("p", {
                                className: "DocsEmpty",
                                children: ["No ", ip, " match."]
                              })]
                            })
                          }
                          var NO = cp(4933),
                            TO = cp(1603);
                          const fO = .95 * NO.e;

                          function bO(pp) {
                            return /^\s*```/.test(pp)
                          }

                          function hO(pp, ip) {
                            const cp = [
                              []
                            ];
                            let Op = !1;
                            for (const op of pp.split("\n")) !Op && ip(op) && cp.at(-1).length > 0 && cp.push([]), bO(op) && (Op = !Op), cp.at(-1).push(op);
                            return cp.map((pp => pp.join("\n").trim())).filter(Boolean)
                          }

                          function aO(pp, ip) {
                            const cp = `${"#".repeat(ip)} `,
                              Op = [];
                            let op = !1;
                            for (const Ip of pp.split("\n")) bO(Ip) ? op = !op : !op && Ip.startsWith(cp) && Op.push(Ip.slice(cp.length).trim());
                            return Op
                          }

                          function nO(pp) {
                            return pp.markdown.replace(/^\s*# .*\n/, "").trim()
                          }
                          class FO {
                            constructor(pp, ip) {
                              this.origin = ip, this.pages = void 0, this.partPaths = new Map;
                              const cp = pp.map((pp => {
                                const ip = ip => this.resolveLinks(pp, ip).length,
                                  cp = function(pp, ip) {
                                    const cp = pp.map((pp => ip(pp.markdown) + 2)),
                                      Op = cp.reduce(((pp, ip) => pp + ip), 0),
                                      op = Op / Math.ceil(Op / fO),
                                      Ip = [];
                                    let Sp = 0;
                                    return pp.forEach(((pp, ip) => {
                                      const Op = cp[ip];
                                      (0 === Ip.length || Sp + Op > fO || Sp + Op / 2 > op) && (Ip.push([]), Sp = 0), Ip.at(-1).push(pp), Sp += Op
                                    })), Ip
                                  }(function(pp, ip) {
                                    return hO(pp, (pp => pp.startsWith("## "))).flatMap((pp => {
                                      var cp;
                                      const Op = null !== (cp = aO(pp, 2)[0]) && void 0 !== cp ? cp : "";
                                      if (ip(pp) <= fO) return [{
                                        markdown: pp,
                                        section: Op
                                      }];
                                      let op = !1,
                                        Ip = "";
                                      return hO(pp, (pp => {
                                        const ip = op && "" !== pp.trim();
                                        return op = "" === pp.trim(), ip
                                      })).map((pp => {
                                        var ip;
                                        const cp = aO(pp, 3),
                                          op = pp.startsWith("### ") ? cp[0] : Ip;
                                        return Ip = null !== (ip = cp.at(-1)) && void 0 !== ip ? ip : Ip, {
                                          markdown: pp,
                                          section: Op || op
                                        }
                                      }))
                                    }))
                                  }(nO(pp), ip), ip);
                                return {
                                  page: pp,
                                  groups: cp.length > 1 ? cp : []
                                }
                              }));
                              for (const {
                                  page: Op,
                                  groups: op
                                }
                                of cp) op.forEach(((pp, ip) => {
                                const cp = (0, NO.u)(Op.slug, ip);
                                for (const op of pp.flatMap((pp => [...aO(pp.markdown, 2), ...aO(pp.markdown, 3)]))) {
                                  const pp = `${Op.id}#${(0,mp.s)(op)}`;
                                  this.partPaths.has(pp) || this.partPaths.set(pp, cp)
                                }
                              }));
                              this.pages = cp.map((pp => {
                                let {
                                  page: ip,
                                  groups: cp
                                } = pp;
                                return {
                                  page: ip,
                                  path: (0, NO.r)(ip.slug),
                                  markdown: `# ${ip.title}\n\n${this.resolveLinks(ip,nO(ip))}\n`,
                                  parts: cp.map(((pp, Op) => this.renderPart(ip, pp, Op, cp.length)))
                                }
                              }))
                            }
                            url(pp) {
                              return `${this.origin}${pp}`
                            }
                            getPage(pp) {
                              return this.pages.find((ip => ip.page.id === pp))
                            }
                            oversizedFiles() {
                              return this.pages.flatMap((pp => (pp.parts.length > 0 ? pp.parts : [{
                                path: pp.path,
                                label: "",
                                markdown: pp.markdown
                              }]).filter((pp => pp.markdown.length > NO.e))))
                            }
                            markdownUrl(pp, ip) {
                              const cp = ip && this.partPaths.get(`${pp.id}#${ip}`) || (0, NO.r)(pp.slug);
                              return this.url(ip ? `${cp}#${ip}` : cp)
                            }
                            resolveLinks(pp, ip) {
                              return ip.replace(/\]\((#[^)]+)\)/g, ((ip, cp) => {
                                var Op;
                                const op = null !== (Op = np(cp)) && void 0 !== Op ? Op : this.samePageTarget(pp, cp);
                                return op ? `](${this.markdownUrl(op.page,op.anchor)})` : ip
                              }))
                            }
                            samePageTarget(pp, ip) {
                              const cp = (0, mp.s)(ip.slice(1));
                              return ap(pp, cp) ? {
                                page: pp,
                                anchor: cp
                              } : null
                            }
                            renderPart(pp, ip, cp, Op) {
                              const op = function(pp) {
                                  const ip = pp.map((pp => pp.section)).filter(Boolean);
                                  if (0 === ip.length) return "";
                                  const cp = ip[0],
                                    Op = ip.at(-1);
                                  return cp === Op ? cp : `${cp} to ${Op}`
                                }(ip),
                                Ip = ip.map((pp => pp.markdown)).join("\n\n"),
                                Sp = op ? `It covers ${op}. ` : "",
                                xp = `Part ${cp+1} of ${Op} of [${pp.title}](${this.url((0,NO.r)(pp.slug))}). ${Sp}[llms.txt](${this.url(NO.j)}) lists every part.`;
                              return {
                                path: (0, NO.u)(pp.slug, cp),
                                label: op,
                                markdown: `# ${pp.title}, part ${cp+1} of ${Op}\n\n${xp}\n\n${this.resolveLinks(pp,Ip)}\n`
                              }
                            }
                            llmsTxt(pp) {
                              const ip = ["# Bloxd Code API", "", "> JavaScript that runs inside Bloxd, in code blocks, boards and World Code: from a block that launches players into the sky to a whole custom game. Code calls methods on the `api` object and defines callbacks that react to game events.", "", `Each link is a page of the docs as Markdown. A page longer than about ${gO(NO.e)} tokens is also split into parts, listed under it, so that each fits a small context window. People read the same docs at ${this.url("/docs")}.`];
                              for (const cp of Tp) {
                                ip.push("", `## ${cp.title}`, "");
                                for (const pp of cp.pageIds) {
                                  const cp = this.getPage(pp),
                                    {
                                      page: Op,
                                      parts: op
                                    } = cp,
                                    Ip = `About ${gO(cp.markdown.length)} tokens${op.length>0?`, in ${op.length} parts:`:"."}`;
                                  ip.push(`- [${Op.title}](${this.url(cp.path)}): ${Op.summary} ${Ip}`), op.forEach(((pp, cp) => {
                                    ip.push(`  - [Part ${cp+1}${pp.label?`: ${pp.label}`:""}](${this.url(pp.path)})`)
                                  }))
                                }
                              }
                              return ip.push("", "## Optional", "", `- [Every page in one file](${this.url(NO.i)}): About ${gO(pp.length)} tokens, for a model with a large context window.`, ""), ip.join("\n")
                            }
                            llmsFullTxt() {
                              return Tp.flatMap((pp => pp.pageIds.map((pp => this.getPage(pp).markdown)))).join("\n---\n\n")
                            }
                            files() {
                              const pp = this.llmsFullTxt(),
                                ip = this.llmsTxt(pp),
                                cp = new Map([
                                  [NO.o, ip],
                                  [NO.j, ip],
                                  [NO.i, pp]
                                ]);
                              for (const Op of this.pages) {
                                cp.set(Op.path, Op.markdown);
                                for (const pp of Op.parts) cp.set(pp.path, pp.markdown)
                              }
                              return cp
                            }
                          }

                          function gO(pp) {
                            return `${Math.max(1,Math.round(pp/4e3))}K`
                          }
                          let GO = null;

                          function rO() {
                            return GO ??= new FO(Np, TO.b), GO
                          }
                          var ZO = cp(4941);
                          const zO = [ZO.f, ZO.o];

                          function sO(pp) {
                            return rO().getPage(pp.id).parts.length > 0 ? `Read ${NO.n}, then the parts of the Bloxd Code API's ${pp.title} page it lists, so I can ask questions about it.` : `Read ${TO.b}${(0,NO.r)(pp.slug)} so I can ask questions about it. ${ZO.k}`
                          }

                          function KO(pp) {
                            let {
                              page: ip
                            } = pp;
                            const [cp, Op] = tp();
                            return (0, yp.jsxs)("div", {
                              className: "DocsPageAgentActions",
                              children: [(0, yp.jsxs)("button", {
                                type: "button",
                                className: "DocsPageAgentAction",
                                onClick: () => {
                                  Op(rO().getPage(ip.id).markdown)
                                },
                                children: [(0, yp.jsx)(wp, {
                                  name: !1 === (null === cp || void 0 === cp ? void 0 : cp.failed) ? "check" : "copy"
                                }), (0, yp.jsx)("span", {
                                  children: cp ? cp.failed ? "Copy failed" : "Copied" : "Copy page"
                                })]
                              }), zO.map((pp => (0, yp.jsxs)("a", {
                                className: "DocsPageAgentAction",
                                href: (0, ZO.e)(pp, sO(ip)),
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0, yp.jsx)(wp, {
                                  name: "external-link"
                                }), (0, yp.jsxs)("span", {
                                  children: ["Open in ", pp.name]
                                })]
                              }, pp.name)))]
                            })
                          }

                          function VO(pp) {
                            return `#${[0,1,2].map((ip=>Math.round(Math.min(255,Math.max(0,pp[ip]))).toString(16).padStart(2,"0"))).join("")}`
                          }

                          function po(pp) {
                            return [parseInt(pp.slice(1, 3), 16), parseInt(pp.slice(3, 5), 16), parseInt(pp.slice(5, 7), 16)]
                          }

                          function io(pp) {
                            let {
                              label: ip,
                              min: cp,
                              max: Op,
                              step: op,
                              low: Ip,
                              high: Sp,
                              onChange: xp
                            } = pp;
                            return (0, yp.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, yp.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, yp.jsx)("span", {
                                  children: ip
                                }), (0, yp.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: Ip === Sp ? Ip : `${Ip}\u2013${Sp}`
                                })]
                              }), (0, yp.jsxs)("div", {
                                className: "DocsParticleRange",
                                children: [(0, yp.jsx)("input", {
                                  type: "range",
                                  min: cp,
                                  max: Op,
                                  step: op,
                                  value: Math.min(Op, Ip),
                                  "aria-label": `Minimum ${ip.toLowerCase()}`,
                                  onChange: pp => {
                                    const ip = Number(pp.target.value);
                                    xp(ip, Math.max(ip, Sp))
                                  }
                                }), (0, yp.jsx)("input", {
                                  type: "range",
                                  min: cp,
                                  max: Op,
                                  step: op,
                                  value: Math.min(Op, Sp),
                                  "aria-label": `Maximum ${ip.toLowerCase()}`,
                                  onChange: pp => {
                                    const ip = Number(pp.target.value);
                                    xp(Math.min(ip, Ip), ip)
                                  }
                                })]
                              })]
                            })
                          }

                          function co(pp) {
                            let {
                              label: ip,
                              min: cp,
                              max: Op,
                              step: op,
                              value: Ip,
                              onChange: Sp,
                              format: xp = String
                            } = pp;
                            return (0, yp.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, yp.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, yp.jsx)("span", {
                                  children: ip
                                }), (0, yp.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: xp(Ip)
                                })]
                              }), (0, yp.jsx)("input", {
                                type: "range",
                                min: cp,
                                max: Op,
                                step: op,
                                value: Math.min(Op, Math.max(cp, Ip)),
                                "aria-label": ip,
                                onChange: pp => {
                                  Sp(Number(pp.target.value))
                                }
                              })]
                            })
                          }

                          function Oo(pp) {
                            let {
                              opts: ip,
                              onChange: cp
                            } = pp;
                            const Op = ip.colorGradients;
                            if (!Gc(Op)) return (0, yp.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, yp.jsx)("div", {
                                className: "DocsControlLabel",
                                children: (0, yp.jsx)("span", {
                                  children: "Colours, one per particle"
                                })
                              }), (0, yp.jsx)("div", {
                                className: "DocsParticleSwatches",
                                children: Op.map(((pp, ip) => (0, yp.jsx)("input", {
                                  type: "color",
                                  value: VO(pp.color),
                                  "aria-label": `Colour ${ip+1}`,
                                  onChange: pp => {
                                    const op = [...Op];
                                    op[ip] = {
                                      color: po(pp.target.value)
                                    }, cp(op)
                                  }
                                }, ip)))
                              })]
                            });
                            const op = (pp, ip) => {
                              const op = [...Op];
                              op[pp] = ip, cp(op)
                            };
                            return (0, yp.jsxs)("div", {
                              className: "DocsControl",
                              children: [(0, yp.jsxs)("div", {
                                className: "DocsControlLabel",
                                children: [(0, yp.jsx)("span", {
                                  children: "Colour over lifetime"
                                }), (0, yp.jsx)("span", {
                                  className: "DocsControlValue",
                                  children: "min \xb7 max"
                                })]
                              }), Op.map(((pp, ip) => {
                                var cp;
                                const Op = null !== (cp = pp.maxColor) && void 0 !== cp ? cp : pp.minColor;
                                return (0, yp.jsxs)("div", {
                                  className: "DocsParticleStop",
                                  children: [(0, yp.jsxs)("span", {
                                    className: "DocsParticleStopTime",
                                    children: [Math.round(100 * pp.timeFraction), "%"]
                                  }), (0, yp.jsx)("span", {
                                    className: "DocsParticleStopBar",
                                    style: {
                                      background: `linear-gradient(90deg, ${VO(pp.minColor)}, ${VO(Op)})`
                                    }
                                  }), (0, yp.jsx)("input", {
                                    type: "color",
                                    value: VO(pp.minColor),
                                    "aria-label": `Minimum colour at ${Math.round(100*pp.timeFraction)}%`,
                                    onChange: cp => {
                                      op(ip, {
                                        ...pp,
                                        minColor: [...po(cp.target.value), pp.minColor[3]]
                                      })
                                    }
                                  }), (0, yp.jsx)("input", {
                                    type: "color",
                                    value: VO(Op),
                                    "aria-label": `Maximum colour at ${Math.round(100*pp.timeFraction)}%`,
                                    onChange: cp => {
                                      op(ip, {
                                        ...pp,
                                        maxColor: [...po(cp.target.value), Op[3]]
                                      })
                                    }
                                  })]
                                }, ip)
                              }))]
                            })
                          }
                          const oo = [-.5, -.5, -.5],
                            Io = [.5, .5, .5],
                            So = [0, 1, 2, 3, 4, 5, 6, 7].map((pp => [1 & pp ? Io[0] : oo[0], 2 & pp ? Io[1] : oo[1], 4 & pp ? Io[2] : oo[2]]));class xo {
                            constructor() {
                              this.tints = new WeakMap
                            }
                            get(pp, ip, cp, Op) {
                              const op = Math.round(31 * ip),
                                Ip = Math.round(31 * cp),
                                Sp = Math.round(31 * Op),
                                xp = `${op}|${Ip}|${Sp}`;
                              let Lp = this.tints.get(pp);
                              (!Lp || Lp.size > 2e3) && (Lp = new Map, this.tints.set(pp, Lp));
                              let Yp = Lp.get(xp);
                              if (Yp) return Yp;
                              Yp = document.createElement("canvas"), Yp.width = pp.naturalWidth || 16, Yp.height = pp.naturalHeight || 16;
                              const Dp = Yp.getContext("2d");
                              return Dp ? (Dp.imageSmoothingEnabled = !1, Dp.drawImage(pp, 0, 0, Yp.width, Yp.height), Dp.globalCompositeOperation = "multiply", Dp.fillStyle = `rgb(${op/31*255}, ${Ip/31*255}, ${Sp/31*255})`, Dp.fillRect(0, 0, Yp.width, Yp.height), Dp.globalCompositeOperation = "destination-in", Dp.drawImage(pp, 0, 0, Yp.width, Yp.height)) : console.warn("Particle preview: no 2D canvas context to tint a texture with"), Lp.set(xp, Yp), Yp
                            }
                          }

                          function Lo(pp) {
                            let {
                              opts: ip,
                              textureUrl: cp,
                              burst: op,
                              paused: Ip
                            } = pp;
                            const Sp = (0, Op.useRef)(null),
                              xp = (0, Op.useRef)(ip);
                            xp.current = ip;
                            const Lp = (0, Op.useRef)(Ip);
                            Lp.current = Ip;
                            const Yp = (0, Op.useRef)(null),
                              Dp = (0, Op.useRef)(null),
                              Ap = (0, Op.useMemo)((() => Math.min(16, Math.max(1.6, 1.05 * function(pp) {
                                let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                const cp = [-.5, -.5, -.5],
                                  Op = [.5, .5, .5];
                                let op = .5;
                                for (let Ip = 0; Ip < 40; Ip++) {
                                  const Ip = Zc(pp, cp, Op, ip),
                                    Sp = Math.max(Ip.life / 30, .001);
                                  for (; Kc(Ip, pp.gravity, Sp);) op = Math.max(op, Math.hypot(Ip.pos[0], Ip.pos[1], Ip.pos[2]) + Ip.size / 2)
                                }
                                return op
                              }(ip)))), [ip]),
                              Pp = (0, Op.useRef)(Ap);
                            return Pp.current = Ap, (0, Op.useEffect)((() => {
                              if (Yp.current = null, !cp) return;
                              const pp = new Image;
                              let ip = !1;
                              return pp.onload = () => {
                                ip || (Yp.current = pp)
                              }, pp.onerror = () => {
                                console.warn(`Particle preview: could not load the texture ${cp}`)
                              }, pp.src = cp, () => {
                                ip = !0
                              }
                            }), [cp]), (0, Op.useEffect)((() => {
                              var pp;
                              null === (pp = Dp.current) || void 0 === pp || pp.call(Dp)
                            }), [ip, op]), (0, Op.useEffect)((() => {
                              const pp = Sp.current,
                                ip = null === pp || void 0 === pp ? void 0 : pp.getContext("2d");
                              if (!pp || !ip) return void console.warn("Particle preview: no 2D canvas context to draw on");
                              const cp = new xo;
                              let Op = [],
                                op = 0,
                                Ip = -.7,
                                Ap = Pp.current,
                                Wp = performance.now(),
                                yp = 0,
                                Up = !0,
                                wp = null;
                              const vp = () => {
                                const pp = xp.current,
                                  ip = Math.min(400, Math.max(0, Math.ceil(pp.manualEmitCount)));
                                Op = [];
                                for (let cp = 0; cp < ip; cp++) Op.push(Zc(pp, oo, Io, Math.random));
                                op = 0
                              };
                              Dp.current = vp, vp();
                              const tp = Sp => {
                                yp = requestAnimationFrame(tp);
                                const Dp = Math.min(.05, (Sp - Wp) / 1e3);
                                if (Wp = Sp, !Up) return;
                                const Hp = window.devicePixelRatio || 1,
                                  dp = Math.round(pp.clientWidth * Hp),
                                  ep = Math.round(pp.clientHeight * Hp);
                                if (0 === dp || 0 === ep) return;
                                pp.width === dp && pp.height === ep || (pp.width = dp, pp.height = ep);
                                const jp = xp.current;
                                null === wp && (Ip += .18 * Dp), Ap += (Pp.current - Ap) * Math.min(1, 4 * Dp);
                                const kp = .6 * Dp;
                                Op = Op.filter((pp => Kc(pp, jp.gravity, kp))), 0 !== Op.length || Lp.current || (op += Dp, op > .6 && vp());
                                const mp = function(pp, ip, cp, Op) {
                                  const op = 3.2 * Op,
                                    Ip = .44 * Math.min(pp, ip) * op / Op,
                                    Sp = Math.cos(cp),
                                    xp = Math.sin(cp),
                                    Lp = Math.cos(.42),
                                    Yp = Math.sin(.42);
                                  return (cp, Op, Dp) => {
                                    const Ap = cp * xp + Dp * Sp,
                                      Pp = op - (Op * Yp + Ap * Lp);
                                    if (Pp < .05) return null;
                                    const Wp = Ip / Pp;
                                    return {
                                      x: pp / 2 + (cp * Sp - Dp * xp) * Wp,
                                      y: ip / 2 - (Op * Lp - Ap * Yp) * Wp,
                                      scale: Wp,
                                      depth: Pp
                                    }
                                  }
                                }(dp, ep, Ip, Ap);
                                ! function(pp, ip, cp, Op, op) {
                                  const Ip = pp.createLinearGradient(0, 0, 0, cp);
                                  Ip.addColorStop(0, "#23262d"), Ip.addColorStop(1, "#16181c"), pp.globalCompositeOperation = "source-over", pp.globalAlpha = 1, pp.fillStyle = Ip, pp.fillRect(0, 0, ip, cp);
                                  const Sp = (ip, cp) => {
                                      const op = Op(ip[0], ip[1], ip[2]),
                                        Ip = Op(cp[0], cp[1], cp[2]);
                                      op && Ip && (pp.beginPath(), pp.moveTo(op.x, op.y), pp.lineTo(Ip.x, Ip.y), pp.stroke())
                                    },
                                    xp = Math.ceil(op) + 1,
                                    Lp = oo[1];
                                  pp.lineWidth = 1, pp.strokeStyle = "rgba(255, 255, 255, 0.07)";
                                  for (let Yp = -xp; Yp <= xp; Yp++) Sp([Yp + .5, Lp, .5 - xp], [Yp + .5, Lp, xp + .5]), Sp([.5 - xp, Lp, Yp + .5], [xp + .5, Lp, Yp + .5]);
                                  pp.strokeStyle = "rgba(255, 255, 255, 0.28)", pp.setLineDash([4, 4]);
                                  for (const Yp of So)
                                    for (const pp of So) {
                                      const ip = [0, 1, 2].filter((ip => Yp[ip] !== pp[ip]));
                                      1 === ip.length && Yp[ip[0]] < pp[ip[0]] && Sp(Yp, pp)
                                    }
                                  pp.setLineDash([])
                                }(ip, dp, ep, mp, Ap);
                                const Rp = Yp.current,
                                  qp = Op.map((pp => ({
                                    particle: pp,
                                    at: mp(pp.pos[0], pp.pos[1], pp.pos[2])
                                  }))).filter((pp => null !== pp.at)).sort(((pp, ip) => ip.at.depth - pp.at.depth));
                                ip.imageSmoothingEnabled = !1;
                                for (const pp of function(pp) {
                                    switch (pp) {
                                      case hc.g.OneOne:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !1
                                        }];
                                      case hc.g.Add:
                                        return [{
                                          operation: "lighter",
                                          usesAlpha: !0
                                        }];
                                      case hc.g.Multiply:
                                        return [{
                                          operation: "multiply",
                                          usesAlpha: !0
                                        }];
                                      case hc.g.MultiplyAdd:
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
                                  }(jp.blendMode)) {
                                  ip.globalCompositeOperation = pp.operation;
                                  for (const {
                                      particle: Op,
                                      at: op
                                    }
                                    of qp) {
                                    const [Ip, Sp, xp, Lp] = sc(Op), Yp = Math.max(1, Op.size * op.scale);
                                    ip.globalAlpha = pp.usesAlpha ? Math.min(1, Math.max(0, Lp)) : 1, Rp ? ip.drawImage(cp.get(Rp, Ip, Sp, xp), op.x - Yp / 2, op.y - Yp / 2, Yp, Yp) : (ip.fillStyle = `rgb(${255*Ip}, ${255*Sp}, ${255*xp})`, ip.fillRect(op.x - Yp / 2, op.y - Yp / 2, Yp, Yp))
                                  }
                                }
                                ip.globalCompositeOperation = "source-over", ip.globalAlpha = 1
                              };
                              yp = requestAnimationFrame(tp);
                              const Hp = new IntersectionObserver((pp => {
                                let [ip] = pp;
                                Up = ip.isIntersecting
                              }));
                              Hp.observe(pp);
                              const dp = ip => {
                                  wp = ip.clientX, pp.setPointerCapture(ip.pointerId)
                                },
                                ep = pp => {
                                  null !== wp && (Ip += .01 * (pp.clientX - wp), wp = pp.clientX)
                                },
                                jp = () => {
                                  wp = null
                                };
                              return pp.addEventListener("pointerdown", dp), pp.addEventListener("pointermove", ep), pp.addEventListener("pointerup", jp), pp.addEventListener("pointercancel", jp), () => {
                                cancelAnimationFrame(yp), Hp.disconnect(), Dp.current = null, pp.removeEventListener("pointerdown", dp), pp.removeEventListener("pointermove", ep), pp.removeEventListener("pointerup", jp), pp.removeEventListener("pointercancel", jp)
                              }
                            }), []), (0, yp.jsx)("canvas", {
                              ref: Sp,
                              className: "DocsParticleCanvas",
                              role: "img",
                              "aria-label": `Preview of a ${ip.texture} particle effect. Drag to turn the view.`
                            })
                          }
                          const Yo = ["aura", "stomp", "brainRot", "mobTameSuccess", "mango", "redFirecrackerLarge"],
                            Do = [{
                              mode: hc.g.OneOne,
                              label: "0 \xb7 OneOne (glow)"
                            }, {
                              mode: hc.g.Standard,
                              label: "1 \xb7 Standard"
                            }, {
                              mode: hc.g.Add,
                              label: "2 \xb7 Add"
                            }, {
                              mode: hc.g.Multiply,
                              label: "3 \xb7 Multiply"
                            }, {
                              mode: hc.g.MultiplyAdd,
                              label: "4 \xb7 MultiplyAdd"
                            }],
                            Ao = (0, Op.forwardRef)((function(pp, ip) {
                              var cp, op;
                              let {
                                textures: Sp
                              } = pp;
                              const xp = uO(),
                                Lp = (0, Op.useRef)(null),
                                [Yp, Dp] = (0, Op.useState)(nc),
                                [Ap, Pp] = (0, Op.useState)("example"),
                                [Wp, Up] = (0, Op.useState)(0),
                                [vp, tp] = (0, Op.useState)(!1),
                                dp = pp => {
                                  const ip = "example" === pp ? nc : ac(pp);
                                  ip && (Dp(ip), Pp(pp))
                                };
                              (0, Op.useImperativeHandle)(ip, (() => ({
                                preview: pp => {
                                  var ip;
                                  dp(pp), null === (ip = Lp.current) || void 0 === ip || ip.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                  })
                                }
                              })));
                              const ep = pp => {
                                  Dp({
                                    ...Yp,
                                    ...pp
                                  }), Pp(null)
                                },
                                jp = function(pp, ip) {
                                  if (null !== ip) return `${cO}    presetId: "${ip}",\n${OO}\n})`;
                                  const cp = pp.velocityGradients.map((pp => `        {\n            timeFraction: ${Vc(pp.timeFraction)},\n            factor: ${Vc(pp.factor)},\n            factor2: ${Vc(pp.factor2)},\n        },`)),
                                    Op = [`    dir1: ${pO(pp.dir1)},`, `    dir2: ${pO(pp.dir2)},`, OO, `    texture: "${pp.texture}",`, `    minLifeTime: ${Vc(pp.minLifeTime)},`, `    maxLifeTime: ${Vc(pp.maxLifeTime)},`, `    minEmitPower: ${Vc(pp.minEmitPower)},`, `    maxEmitPower: ${Vc(pp.maxEmitPower)},`, `    minSize: ${Vc(pp.minSize)},`, `    maxSize: ${Vc(pp.maxSize)},`, `    manualEmitCount: ${Vc(pp.manualEmitCount)},`, `    gravity: ${pO(pp.gravity)},`, `    colorGradients: ${iO(pp.colorGradients,"    ")},`, `    velocityGradients: ${cp.length>0?`[\n${cp.join("\n")}\n    ]`:"[]"},`, `    blendMode: ${Vc(pp.blendMode)},`];
                                  return void 0 !== pp.hideDist && Op.push(`    hideDist: ${Vc(pp.hideDist)},`), `${cO}${Op.join("\n")}\n})`
                                }(Yp, null === Ap || "example" === Ap ? null : Ap),
                                mp = Sp.includes(Yp.texture) ? Sp : [...Sp, Yp.texture];
                              return (0, yp.jsxs)("section", {
                                ref: Lp,
                                className: "DocsPlayground DocsParticlePlayground",
                                "aria-label": "Particle effect playground",
                                children: [(0, yp.jsxs)("header", {
                                  className: "DocsPlaygroundHeader",
                                  children: [(0, yp.jsxs)("div", {
                                    children: [(0, yp.jsx)("div", {
                                      className: "DocsPlaygroundTitle",
                                      children: "Try it: particle effects"
                                    }), (0, yp.jsx)("div", {
                                      className: "DocsPlaygroundHint",
                                      children: "Pick a preset or change the settings, and the burst replays. Drag the preview to turn it."
                                    })]
                                  }), (0, yp.jsx)(Hp, {
                                    text: jp,
                                    label: "Copy code"
                                  })]
                                }), (0, yp.jsxs)("div", {
                                  className: "DocsPlaygroundPresets",
                                  children: [(0, yp.jsx)("button", {
                                    type: "button",
                                    className: Ip()("DocsVariantChip", {
                                      Active: "example" === Ap
                                    }),
                                    onClick: () => {
                                      dp("example")
                                    },
                                    children: "Example"
                                  }), Yo.filter((pp => null !== ac(pp))).map((pp => (0, yp.jsx)("button", {
                                    type: "button",
                                    className: Ip()("DocsVariantChip", {
                                      Active: Ap === pp
                                    }),
                                    onClick: () => {
                                      dp(pp)
                                    },
                                    children: pp
                                  }, pp))), (0, yp.jsxs)("select", {
                                    className: "DocsParticleSelect",
                                    value: null !== Ap && void 0 !== Ap ? Ap : "custom",
                                    "aria-label": "Preset",
                                    onChange: pp => {
                                      dp(pp.target.value)
                                    },
                                    children: [(0, yp.jsx)("option", {
                                      value: "example",
                                      children: "Example effect"
                                    }), null === Ap && (0, yp.jsx)("option", {
                                      value: "custom",
                                      children: "Custom"
                                    }), bc.d.map((pp => (0, yp.jsx)("option", {
                                      value: pp,
                                      children: pp
                                    }, pp)))]
                                  })]
                                }), (0, yp.jsxs)("div", {
                                  className: "DocsParticleBody",
                                  children: [(0, yp.jsxs)("div", {
                                    className: "DocsParticleStageWrap",
                                    children: [(0, yp.jsx)(Lo, {
                                      opts: Yp,
                                      textureUrl: null !== (cp = null === xp || void 0 === xp ? void 0 : xp.getParticleTextureUrl(Yp.texture)) && void 0 !== cp ? cp : null,
                                      burst: Wp,
                                      paused: vp
                                    }), (0, yp.jsxs)("div", {
                                      className: "DocsParticleStageButtons",
                                      children: [(0, yp.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        onClick: () => {
                                          Up(Wp + 1)
                                        },
                                        children: [(0, yp.jsx)(wp, {
                                          name: "replay"
                                        }), (0, yp.jsx)("span", {
                                          children: "Replay"
                                        })]
                                      }), (0, yp.jsxs)("button", {
                                        type: "button",
                                        className: "DocsParticleStageButton",
                                        "aria-pressed": vp,
                                        onClick: () => {
                                          tp(!vp)
                                        },
                                        children: [(0, yp.jsx)(wp, {
                                          name: vp ? "play" : "pause"
                                        }), (0, yp.jsx)("span", {
                                          children: vp ? "Loop" : "Stop looping"
                                        })]
                                      })]
                                    })]
                                  }), (0, yp.jsxs)("div", {
                                    className: "DocsParticleControls",
                                    children: [(0, yp.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, yp.jsxs)("div", {
                                        className: "DocsControlLabel",
                                        children: [(0, yp.jsx)("span", {
                                          children: "Texture"
                                        }), (0, yp.jsx)("code", {
                                          className: "DocsControlValue",
                                          children: Yp.texture
                                        })]
                                      }), (0, yp.jsx)("div", {
                                        className: "DocsParticleTextures",
                                        children: mp.map((pp => {
                                          var ip;
                                          const cp = null !== (ip = null === xp || void 0 === xp ? void 0 : xp.getParticleTextureUrl(pp)) && void 0 !== ip ? ip : null;
                                          return (0, yp.jsx)("button", {
                                            type: "button",
                                            className: Ip()("DocsParticleTexture", {
                                              Active: Yp.texture === pp
                                            }),
                                            title: pp,
                                            "aria-label": pp,
                                            "aria-pressed": Yp.texture === pp,
                                            onClick: () => {
                                              ep({
                                                texture: pp
                                              })
                                            },
                                            children: cp ? (0, yp.jsx)("img", {
                                              src: cp,
                                              alt: ""
                                            }) : (0, yp.jsx)(wp, {
                                              name: "image"
                                            })
                                          }, pp)
                                        }))
                                      })]
                                    }), (0, yp.jsx)(co, {
                                      label: "Particles",
                                      min: 1,
                                      max: 400,
                                      step: 1,
                                      value: Yp.manualEmitCount,
                                      onChange: pp => {
                                        ep({
                                          manualEmitCount: pp
                                        })
                                      }
                                    }), (0, yp.jsx)(io, {
                                      label: "Lifetime",
                                      min: .05,
                                      max: 3,
                                      step: .05,
                                      low: Yp.minLifeTime,
                                      high: Yp.maxLifeTime,
                                      onChange: (pp, ip) => {
                                        ep({
                                          minLifeTime: pp,
                                          maxLifeTime: ip
                                        })
                                      }
                                    }), (0, yp.jsx)(io, {
                                      label: "Emit power",
                                      min: 0,
                                      max: 40,
                                      step: .5,
                                      low: Yp.minEmitPower,
                                      high: Yp.maxEmitPower,
                                      onChange: (pp, ip) => {
                                        ep({
                                          minEmitPower: pp,
                                          maxEmitPower: ip
                                        })
                                      }
                                    }), (0, yp.jsx)(io, {
                                      label: "Size",
                                      min: .05,
                                      max: 2,
                                      step: .05,
                                      low: Yp.minSize,
                                      high: Yp.maxSize,
                                      onChange: (pp, ip) => {
                                        ep({
                                          minSize: pp,
                                          maxSize: ip
                                        })
                                      }
                                    }), (0, yp.jsx)(co, {
                                      label: "Gravity (up)",
                                      min: -40,
                                      max: 40,
                                      step: 1,
                                      value: null !== (op = Yp.gravity[1]) && void 0 !== op ? op : 0,
                                      onChange: pp => {
                                        var ip, cp;
                                        ep({
                                          gravity: [null !== (ip = Yp.gravity[0]) && void 0 !== ip ? ip : 0, pp, null !== (cp = Yp.gravity[2]) && void 0 !== cp ? cp : 0]
                                        })
                                      }
                                    }), (0, yp.jsxs)("div", {
                                      className: "DocsControl",
                                      children: [(0, yp.jsx)("div", {
                                        className: "DocsControlLabel",
                                        children: (0, yp.jsx)("span", {
                                          children: "Blend mode"
                                        })
                                      }), (0, yp.jsx)("select", {
                                        className: "DocsParticleSelect",
                                        value: Yp.blendMode,
                                        "aria-label": "Blend mode",
                                        onChange: pp => {
                                          ep({
                                            blendMode: Number(pp.target.value)
                                          })
                                        },
                                        children: Do.map((pp => {
                                          let {
                                            mode: ip,
                                            label: cp
                                          } = pp;
                                          return (0, yp.jsx)("option", {
                                            value: ip,
                                            children: cp
                                          }, ip)
                                        }))
                                      })]
                                    }), (0, yp.jsx)(Oo, {
                                      opts: Yp,
                                      onChange: pp => {
                                        ep({
                                          colorGradients: pp
                                        })
                                      }
                                    })]
                                  })]
                                }), (0, yp.jsx)(kp, {
                                  code: jp,
                                  lang: "ts"
                                })]
                              })
                            }));
                          var Po = cp(4556),
                            Wo = cp(1929);

                          function yo(pp, ip) {
                            return pp ? Po.d.includes(ip) ? pp.getIngameIconUrl(ip) : pp.getItemIconUrl(ip) : null
                          }

                          function Uo(pp) {
                            var ip, cp, Op;
                            let {
                              part: op,
                              assets: Sp
                            } = pp;
                            const xp = yo(Sp, op.icon),
                              Lp = null !== (ip = null === (cp = op.style) || void 0 === cp ? void 0 : cp.fontSize) && void 0 !== ip ? ip : "1.8em",
                              Yp = (0, fi.fc)(op.style);
                            return (0, yp.jsxs)("span", {
                              className: Ip()("DocsBloxdTextIcon", {
                                Missing: !xp
                              }),
                              style: {
                                width: Lp,
                                height: Lp,
                                opacity: null === (Op = op.style) || void 0 === Op ? void 0 : Op.opacity
                              },
                              title: xp ? void 0 : `No Bloxd icon, item or block is called "${op.icon}"`,
                              children: [xp && Yp && (0, yp.jsx)("span", {
                                className: "DocsBloxdTextIconTint",
                                style: {
                                  background: Yp,
                                  maskImage: `url("${xp}")`,
                                  WebkitMaskImage: `url("${xp}")`
                                }
                              }), xp ? (0, yp.jsx)("img", {
                                src: xp,
                                alt: "",
                                className: Ip()({
                                  Tinted: Yp
                                })
                              }) : (0, yp.jsx)(wp, {
                                name: "image"
                              })]
                            })
                          }

                          function wo(pp) {
                            let {
                              parts: ip,
                              className: cp
                            } = pp;
                            const Op = uO(),
                              op = [];
                            let Sp = [];
                            const xp = pp => {
                              Sp.length > 0 && (op.push((0, yp.jsx)(Wo.e, {
                                text: Sp
                              }, `run-${pp}`)), Sp = [])
                            };
                            return ip.forEach(((pp, ip) => {
                              "icon" !== gi(pp) || ai(pp.icon) ? Sp.push(pp) : (xp(ip), op.push((0, yp.jsx)(Uo, {
                                part: pp,
                                assets: Op
                              }, `icon-${ip}`)))
                            })), xp(ip.length), (0, yp.jsx)("div", {
                              className: Ip()("DocsStyledTextPreview", cp),
                              children: op
                            })
                          }
                          const vo = ["0.75em", "1em", "1.25em", "1.5em", "2em", "3em"];
                          let to = null;

                          function Ho(pp) {
                            if (to ??= document.createElement("canvas").getContext("2d"), !to) return "#000000";
                            to.fillStyle = "#000000", to.fillStyle = pp;
                            const ip = to.fillStyle;
                            return ip.startsWith("#") ? ip : "#000000"
                          }

                          function eo(pp) {
                            let {
                              value: ip,
                              label: cp,
                              onChange: Op
                            } = pp;
                            return (0, yp.jsxs)("span", {
                              className: "DocsColourInput",
                              children: [(0, yp.jsx)("input", {
                                type: "color",
                                value: Ho(ip),
                                "aria-label": `${cp} picker`,
                                onChange: pp => {
                                  Op(pp.target.value)
                                }
                              }), (0, yp.jsx)("input", {
                                type: "text",
                                value: ip,
                                placeholder: "#ffb914 or gold",
                                "aria-label": cp,
                                spellCheck: !1,
                                onChange: pp => {
                                  Op(pp.target.value)
                                }
                              })]
                            })
                          }

                          function uo(pp) {
                            let {
                              value: ip,
                              fontAwesomeIcons: cp,
                              onChange: op
                            } = pp;
                            const Sp = uO(),
                              [xp, Lp] = (0, Op.useState)(ai(ip) ? "fontAwesome" : "bloxd"),
                              [Yp, Dp] = (0, Op.useState)(""),
                              Ap = Yp.trim().toLowerCase(),
                              Pp = "bloxd" === xp ? Po.d : cp,
                              Wp = Ap ? Pp.filter((pp => pp.toLowerCase().includes(Ap))) : Pp;
                            return (0, yp.jsxs)("div", {
                              className: "DocsIconPicker",
                              children: [(0, yp.jsx)("input", {
                                type: "text",
                                value: ip,
                                "aria-label": "Icon name",
                                spellCheck: !1,
                                onChange: pp => {
                                  op(pp.target.value)
                                }
                              }), (0, yp.jsx)("p", {
                                className: "DocsTextFieldHint",
                                children: "Pick one below, or type any item or block name."
                              }), (0, yp.jsxs)("div", {
                                className: "DocsIconPickerTabs",
                                role: "tablist",
                                children: [
                                  ["bloxd", "fontAwesome"].map((pp => (0, yp.jsx)("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": xp === pp,
                                    className: Ip()("DocsVariantChip", {
                                      Active: xp === pp
                                    }),
                                    onClick: () => {
                                      Lp(pp)
                                    },
                                    children: "bloxd" === pp ? `Bloxd icons (${Po.d.length})` : `Font Awesome (${cp.length})`
                                  }, pp))), (0, yp.jsx)("input", {
                                    type: "search",
                                    value: Yp,
                                    placeholder: "Filter\u2026",
                                    "aria-label": "Filter icons",
                                    onChange: pp => {
                                      Dp(pp.target.value)
                                    }
                                  })
                                ]
                              }), (0, yp.jsxs)("div", {
                                className: "DocsIconPickerGrid",
                                role: "tabpanel",
                                children: [Wp.map((pp => {
                                  const cp = "bloxd" === xp ? yo(Sp, pp) : null;
                                  return (0, yp.jsx)("button", {
                                    type: "button",
                                    title: pp,
                                    "aria-label": pp,
                                    "aria-pressed": pp === ip,
                                    className: Ip()("DocsIconPickerOption", {
                                      Active: pp === ip
                                    }),
                                    onClick: () => {
                                      op(pp)
                                    },
                                    children: "fontAwesome" === xp ? (0, yp.jsx)(jc.d, {
                                      name: pp
                                    }) : cp ? (0, yp.jsx)("img", {
                                      src: cp,
                                      alt: ""
                                    }) : (0, yp.jsx)(wp, {
                                      name: "image"
                                    })
                                  }, pp)
                                })), 0 === Wp.length && (0, yp.jsxs)("p", {
                                  className: "DocsTextFieldHint",
                                  children: ["No icons match \u201c", Yp, "\u201d."]
                                })]
                              })]
                            })
                          }

                          function jo(pp) {
                            let {
                              property: ip,
                              value: cp,
                              fontAwesomeIcons: Op,
                              onChange: op
                            } = pp;
                            const {
                              field: Ip,
                              label: Sp
                            } = ip, xp = pp => "" !== pp || ip.isRequired ? pp : void 0;
                            switch (Ip.kind) {
                              case "text":
                                return Ip.multiline ? (0, yp.jsx)("textarea", {
                                  value: String(null !== cp && void 0 !== cp ? cp : ""),
                                  rows: 2,
                                  "aria-label": Sp,
                                  onChange: pp => {
                                    op(pp.target.value)
                                  }
                                }) : (0, yp.jsx)("input", {
                                  type: "text",
                                  value: String(null !== cp && void 0 !== cp ? cp : ""),
                                  "aria-label": Sp,
                                  onChange: pp => {
                                    op(xp(pp.target.value))
                                  }
                                });
                              case "size":
                                return (0, yp.jsx)("input", {
                                  type: "text",
                                  value: String(null !== cp && void 0 !== cp ? cp : ""),
                                  placeholder: ip.defaultText,
                                  list: "DocsTextSizeSuggestions",
                                  "aria-label": Sp,
                                  spellCheck: !1,
                                  onChange: pp => {
                                    op(xp(pp.target.value.trim()))
                                  }
                                });
                              case "colour":
                                return (0, yp.jsx)(eo, {
                                  value: String(null !== cp && void 0 !== cp ? cp : ""),
                                  label: Sp,
                                  onChange: pp => {
                                    op(xp(pp))
                                  }
                                });
                              case "colours": {
                                const pp = Array.isArray(cp) ? cp : [],
                                  ip = pp => {
                                    op(pp.length > 0 ? pp : void 0)
                                  };
                                return (0, yp.jsxs)("div", {
                                  className: "DocsColourList",
                                  children: [pp.map(((cp, Op) => (0, yp.jsxs)("span", {
                                    className: "DocsColourListRow",
                                    children: [(0, yp.jsx)(eo, {
                                      value: cp,
                                      label: `${Sp} ${Op+1}`,
                                      onChange: cp => {
                                        ip(pp.map(((pp, ip) => ip === Op ? cp : pp)))
                                      }
                                    }), (0, yp.jsx)("button", {
                                      type: "button",
                                      className: "DocsTextIconButton",
                                      "aria-label": `Remove colour ${Op+1}`,
                                      onClick: () => {
                                        ip(pp.filter(((pp, ip) => ip !== Op)))
                                      },
                                      children: (0, yp.jsx)(wp, {
                                        name: "cross"
                                      })
                                    })]
                                  }, Op))), (0, yp.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextAddButton",
                                    onClick: () => {
                                      var cp;
                                      ip([...pp, null !== (cp = pp.at(-1)) && void 0 !== cp ? cp : "#ffffff"])
                                    },
                                    children: [(0, yp.jsx)(wp, {
                                      name: "plus"
                                    }), 0 === pp.length ? "Add a colour" : "Add a colour to the gradient"]
                                  })]
                                })
                              }
                              case "fraction": {
                                var Lp;
                                const pp = "number" === typeof cp ? cp : Number(null !== (Lp = ip.defaultText) && void 0 !== Lp ? Lp : 0);
                                return (0, yp.jsxs)("span", {
                                  className: "DocsFractionInput",
                                  children: [(0, yp.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: pp,
                                    "aria-label": Sp,
                                    onChange: pp => {
                                      op(Number(pp.target.value))
                                    }
                                  }), (0, yp.jsx)("output", {
                                    children: pp.toFixed(2)
                                  })]
                                })
                              }
                              case "choice":
                                return (0, yp.jsxs)("select", {
                                  value: String(null !== cp && void 0 !== cp ? cp : ""),
                                  "aria-label": Sp,
                                  onChange: pp => {
                                    op(xp(pp.target.value))
                                  },
                                  children: [!ip.isRequired && (0, yp.jsxs)("option", {
                                    value: "",
                                    children: ["Default (", ip.defaultText, ")"]
                                  }), Ip.options.map((pp => (0, yp.jsx)("option", {
                                    value: pp,
                                    children: pp
                                  }, pp)))]
                                });
                              case "icon":
                                return (0, yp.jsx)(uo, {
                                  value: String(null !== cp && void 0 !== cp ? cp : ""),
                                  fontAwesomeIcons: Op,
                                  onChange: op
                                })
                            }
                          }

                          function ko(pp) {
                            let ip;
                            try {
                              ip = JSON.parse(pp)
                            } catch (cp) {
                              return {
                                part: null,
                                error: `Not valid JSON yet: ${cp.message}`
                              }
                            }
                            return Ic(ip) ? {
                              part: ip,
                              error: null
                            } : {
                              part: null,
                              error: "Not a part Bloxd draws: use a string or an object such as { entityName } or { translationKey }."
                            }
                          }

                          function mo(pp) {
                            let {
                              parts: ip,
                              index: cp,
                              fontAwesomeIcons: op,
                              onChange: Ip,
                              uE: Sp,
                              onClose: xp
                            } = pp;
                            const Lp = (0, Op.useContext)(wi),
                              Dp = (0, Op.useRef)(null),
                              Ap = ip[cp],
                              Pp = gi(Ap),
                              [Wp, Up] = (0, Op.useState)((() => JSON.stringify(Ap, null, 2))),
                              vp = (0, Op.useMemo)((() => "other" === Pp ? ko(Wp).error : null), [Pp, Wp]);
                            (0, Op.useEffect)((() => {
                              var pp;
                              null === (pp = Dp.current) || void 0 === pp || pp.focus()
                            }), []);
                            const tp = (0, yp.jsx)("div", {
                              className: "DocsTextDialogOverlay",
                              onMouseDown: pp => {
                                pp.target === pp.currentTarget && xp()
                              },
                              children: (0, yp.jsxs)("div", {
                                ref: Dp,
                                className: "DocsTextDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": `Edit part ${cp+1}: ${ni[Pp]}`,
                                tabIndex: -1,
                                onKeyDown: pp => {
                                  "Escape" === pp.key ? (pp.stopPropagation(), xp()) : "Tab" === pp.key && Dp.current && function(pp, ip) {
                                    const cp = Array.from(pp.querySelectorAll(Ei)),
                                      Op = cp[0],
                                      op = cp.at(-1);
                                    if (!Op || !op) return;
                                    const Ip = document.activeElement;
                                    !ip.shiftKey || Ip !== Op && Ip !== pp ? ip.shiftKey || Ip !== op || (ip.preventDefault(), Op.focus()) : (ip.preventDefault(), op.focus())
                                  }(Dp.current, pp)
                                },
                                children: [(0, yp.jsxs)("header", {
                                  className: "DocsTextDialogHeader",
                                  children: [(0, yp.jsxs)("div", {
                                    children: [(0, yp.jsxs)("div", {
                                      className: "DocsTextDialogKind",
                                      children: ["Part ", cp + 1]
                                    }), (0, yp.jsx)("div", {
                                      className: "DocsTextDialogTitle",
                                      children: ni[Pp]
                                    })]
                                  }), (0, yp.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextIconButton",
                                    "aria-label": "Close",
                                    onClick: xp,
                                    children: (0, yp.jsx)(wp, {
                                      name: "cross"
                                    })
                                  })]
                                }), (0, yp.jsx)(wo, {
                                  parts: ip,
                                  className: "DocsTextDialogPreview"
                                }), (0, yp.jsx)("div", {
                                  className: "DocsTextDialogFields",
                                  children: "other" === Pp ? (0, yp.jsxs)("label", {
                                    className: "DocsTextField",
                                    children: [(0, yp.jsx)("span", {
                                      className: "DocsTextFieldLabel",
                                      children: "JSON"
                                    }), (0, yp.jsx)("textarea", {
                                      className: "DocsTextJson",
                                      value: Wp,
                                      rows: 6,
                                      spellCheck: !1,
                                      onChange: pp => {
                                        Up(pp.target.value);
                                        const ip = ko(pp.target.value);
                                        null !== ip.part && Ip(ip.part)
                                      }
                                    }), vp && (0, yp.jsx)("span", {
                                      className: "DocsTextFieldError",
                                      children: vp
                                    })]
                                  }) : ri[Pp].map((pp => {
                                    const ip = zi(Ap, pp.path),
                                      cp = pp.isRequired ? JSON.stringify(Ki(Ap, pp.path)) === JSON.stringify(Ap) : void 0 === ip;
                                    return (0, yp.jsxs)("div", {
                                      className: "DocsTextField",
                                      children: [(0, yp.jsxs)("div", {
                                        className: "DocsTextFieldLabel",
                                        children: [(0, yp.jsx)("span", {
                                          children: pp.label
                                        }), (0, yp.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextResetButton",
                                          disabled: cp,
                                          "aria-label": `Reset ${pp.label.toLowerCase()} to default`,
                                          onClick: () => {
                                            Ip(Ki(Ap, pp.path))
                                          },
                                          children: [(0, yp.jsx)(wp, {
                                            name: "replay"
                                          }), "Reset"]
                                        })]
                                      }), (0, yp.jsx)(jo, {
                                        property: pp,
                                        value: ip,
                                        fontAwesomeIcons: op,
                                        onChange: ip => {
                                          Ip(si(Ap, pp.path, ip))
                                        }
                                      }), !pp.isRequired && (0, yp.jsxs)("span", {
                                        className: "DocsTextFieldHint",
                                        children: ["Default: ", pp.defaultText]
                                      })]
                                    }, pp.path.join("."))
                                  }))
                                }), (0, yp.jsxs)("footer", {
                                  className: "DocsTextDialogFooter",
                                  children: [(0, yp.jsxs)("button", {
                                    type: "button",
                                    className: "DocsTextRemoveButton",
                                    onClick: Sp,
                                    children: [(0, yp.jsx)(wp, {
                                      name: "trash"
                                    }), "Remove part"]
                                  }), (0, yp.jsx)("button", {
                                    type: "button",
                                    className: "DocsTextDoneButton",
                                    onClick: xp,
                                    children: "Done"
                                  })]
                                }), (0, yp.jsx)("datalist", {
                                  id: "DocsTextSizeSuggestions",
                                  children: vo.map((pp => (0, yp.jsx)("option", {
                                    value: pp
                                  }, pp)))
                                })]
                              })
                            });
                            return Lp ? (0, Yp.createPortal)(tp, Lp) : tp
                          }
                          const Ro = [{
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
                            qo = Object.keys(Fi);

                          function Mo(pp) {
                            let {
                              fontAwesomeIcons: ip
                            } = pp;
                            const [cp, op] = (0, Op.useState)(Ro[0].parts), [Sp, xp] = (0, Op.useState)((() => cc(Ro[0].parts))), [Lp, Yp] = (0, Op.useState)(null), [Dp, Ap] = (0, Op.useState)(!1), [Pp, Wp] = (0, Op.useState)(null), [Up, vp] = (0, Op.useState)(!1), [tp, Hp] = (0, Op.useState)(null), dp = (0, Op.useRef)(null), ep = cc(cp);
                            (0, Op.useLayoutEffect)((() => {
                              var pp;
                              if (!tp) return;
                              const ip = pp => {
                                  var ip;
                                  return null === (ip = dp.current) || void 0 === ip ? void 0 : ip.querySelector(`[data-focus-key="${pp}"]`)
                                },
                                cp = ip(tp.key);
                              null === (pp = cp && !cp.disabled ? cp : ip(tp.fallback)) || void 0 === pp || pp.focus(), Hp(null)
                            }), [tp]);
                            const jp = pp => {
                                op(pp), xp(cc(pp)), Yp(null)
                              },
                              mp = pp => {
                                jp(cp.filter(((ip, cp) => cp !== pp))), Hp({
                                  key: `edit-${Math.min(pp,cp.length-2)}`,
                                  fallback: "add"
                                })
                              },
                              Rp = (pp, ip) => {
                                const Op = [...cp],
                                  [op] = Op.splice(pp, 1);
                                Op.splice(pp + ip, 0, op), jp(Op);
                                Hp({
                                  key: `${ip<0?"up":"down"}-${pp+ip}`,
                                  fallback: `edit-${pp+ip}`
                                })
                              };
                            return (0, yp.jsxs)("section", {
                              ref: dp,
                              className: "DocsPlayground DocsTextEditor",
                              "aria-label": "Styled text editor",
                              children: [(0, yp.jsx)("header", {
                                className: "DocsPlaygroundHeader",
                                children: (0, yp.jsxs)("div", {
                                  children: [(0, yp.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Styled text editor"
                                  }), (0, yp.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Add parts, click one to style it, and copy the code. The preview draws it as the game does."
                                  })]
                                })
                              }), (0, yp.jsx)("div", {
                                className: "DocsPlaygroundPresets",
                                children: Ro.map((pp => (0, yp.jsx)("button", {
                                  type: "button",
                                  className: Ip()("DocsVariantChip", {
                                    Active: ep === cc(pp.parts)
                                  }),
                                  onClick: () => {
                                    jp(pp.parts)
                                  },
                                  children: pp.label
                                }, pp.label)))
                              }), (0, yp.jsx)(wo, {
                                parts: cp,
                                className: "DocsTextEditorPreview"
                              }), (0, yp.jsxs)("div", {
                                className: "DocsTextEditorBody",
                                children: [(0, yp.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, yp.jsx)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: "Parts"
                                  }), (0, yp.jsxs)("ol", {
                                    className: "DocsTextParts",
                                    children: [cp.map(((pp, ip) => {
                                      const Op = gi(pp);
                                      return (0, yp.jsxs)("li", {
                                        className: "DocsTextPart",
                                        children: [(0, yp.jsxs)("button", {
                                          type: "button",
                                          className: "DocsTextPartMain",
                                          "data-focus-key": `edit-${ip}`,
                                          "aria-label": `Edit part ${ip+1}, ${ni[Op]}`,
                                          onClick: () => {
                                            Wp(ip)
                                          },
                                          children: [(0, yp.jsx)("span", {
                                            className: "DocsTextPartKind",
                                            children: ni[Op]
                                          }), (0, yp.jsx)(wo, {
                                            parts: [pp],
                                            className: "DocsTextPartPreview"
                                          }), "text" !== Op && (0, yp.jsx)("code", {
                                            className: "DocsTextPartName",
                                            children: Vi(pp)
                                          })]
                                        }), (0, yp.jsxs)("span", {
                                          className: "DocsTextPartActions",
                                          children: [(0, yp.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${ip+1} up`,
                                            "data-focus-key": `up-${ip}`,
                                            disabled: 0 === ip,
                                            onClick: () => {
                                              Rp(ip, -1)
                                            },
                                            children: (0, yp.jsx)(wp, {
                                              name: "chevron-up"
                                            })
                                          }), (0, yp.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Move part ${ip+1} down`,
                                            "data-focus-key": `down-${ip}`,
                                            disabled: ip === cp.length - 1,
                                            onClick: () => {
                                              Rp(ip, 1)
                                            },
                                            children: (0, yp.jsx)(wp, {
                                              name: "chevron-down"
                                            })
                                          }), (0, yp.jsx)("button", {
                                            type: "button",
                                            className: "DocsTextIconButton",
                                            "aria-label": `Remove part ${ip+1}`,
                                            onClick: () => {
                                              mp(ip)
                                            },
                                            children: (0, yp.jsx)(wp, {
                                              name: "cross"
                                            })
                                          })]
                                        })]
                                      }, ip)
                                    })), 0 === cp.length && (0, yp.jsx)("li", {
                                      className: "DocsTextPartsEmpty",
                                      children: "No parts yet. Add one below."
                                    })]
                                  }), (0, yp.jsxs)("div", {
                                    className: "DocsTextAddPart",
                                    onKeyDown: pp => {
                                      "Escape" === pp.key && Up && (pp.stopPropagation(), vp(!1), Hp({
                                        key: "add",
                                        fallback: "add"
                                      }))
                                    },
                                    children: [(0, yp.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextAddPartButton",
                                      "data-focus-key": "add",
                                      "aria-expanded": Up,
                                      "aria-controls": "DocsTextAddPartMenu",
                                      onClick: () => {
                                        vp(!Up)
                                      },
                                      children: [(0, yp.jsx)(wp, {
                                        name: "plus"
                                      }), "Add a part", (0, yp.jsx)(wp, {
                                        name: Up ? "chevron-up" : "chevron-down"
                                      })]
                                    }), Up && (0, yp.jsx)("ul", {
                                      id: "DocsTextAddPartMenu",
                                      className: "DocsTextAddPartMenu",
                                      children: qo.map((pp => (0, yp.jsx)("li", {
                                        children: (0, yp.jsx)("button", {
                                          type: "button",
                                          onClick: () => {
                                            (pp => {
                                              jp([...cp, Fi[pp]]), vp(!1), Wp(cp.length)
                                            })(pp)
                                          },
                                          children: ni[pp]
                                        })
                                      }, pp)))
                                    })]
                                  })]
                                }), (0, yp.jsxs)("div", {
                                  className: "DocsTextEditorPanel",
                                  children: [(0, yp.jsxs)("div", {
                                    className: "DocsTextEditorPanelTitle",
                                    children: ["Code", (0, yp.jsxs)("button", {
                                      type: "button",
                                      className: "DocsTextEditCodeButton",
                                      "aria-pressed": Dp,
                                      onClick: () => {
                                        Ap(!Dp)
                                      },
                                      children: [(0, yp.jsx)(wp, {
                                        name: Dp ? "check" : "pencil"
                                      }), Dp ? "Done" : "Edit"]
                                    })]
                                  }), Dp ? (0, yp.jsxs)(yp.Fragment, {
                                    children: [(0, yp.jsx)("textarea", {
                                      className: "DocsPlaygroundInput",
                                      value: Sp,
                                      spellCheck: !1,
                                      "aria-label": "Styled text as code",
                                      onChange: pp => {
                                        xp(pp.target.value);
                                        const ip = Sc(pp.target.value);
                                        Yp(ip.error), ip.parts && op(ip.parts)
                                      }
                                    }), Lp && (0, yp.jsx)("p", {
                                      className: "DocsPlaygroundError",
                                      children: Lp
                                    })]
                                  }) : (0, yp.jsx)(kp, {
                                    lang: "js",
                                    code: `api.sendMessage(playerId, ${ep})`
                                  })]
                                })]
                              }), null !== Pp && Pp < cp.length && (0, yp.jsx)(mo, {
                                parts: cp,
                                index: Pp,
                                fontAwesomeIcons: ip,
                                onChange: pp => {
                                  ((pp, ip) => {
                                    jp(cp.map(((cp, Op) => Op === pp ? ip : cp)))
                                  })(Pp, pp)
                                },
                                uE: () => {
                                  mp(Pp), Wp(null)
                                },
                                onClose: () => {
                                  Wp(null), Hp({
                                    key: `edit-${Pp}`,
                                    fallback: "add"
                                  })
                                }
                              })]
                            })
                          }
                          var Co = cp(4970),
                            Eo = cp(4950),
                            Xo = cp(4964),
                            Qo = cp(4972);
                          const Jo = 40,
                            Bo = 800,
                            No = 150,
                            To = 8e3,
                            fo = 2e3;

                          function bo(pp, ip) {
                            return 12 * Math.log2(ip / pp)
                          }

                          function ho(pp, ip) {
                            return Math.round(pp * 2 ** (ip / 12) * 10) / 10
                          }

                          function ao(pp) {
                            return `${pp} ms`
                          }

                          function no(pp) {
                            return `${pp} st`
                          }
                          const Fo = [{
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

                          function go(pp) {
                            let {
                              synth: ip,
                              onChange: cp
                            } = pp;
                            const Op = (0, Co.m)(ip);
                            return (0, yp.jsxs)("div", {
                              className: "DocsVoiceControls",
                              children: [(0, yp.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, yp.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Voice"
                                }), (0, yp.jsxs)("div", {
                                  className: "DocsControl",
                                  children: [(0, yp.jsx)("div", {
                                    className: "DocsControlLabel",
                                    children: (0, yp.jsx)("span", {
                                      children: "Tone"
                                    })
                                  }), (0, yp.jsx)("div", {
                                    className: "DocsVoiceWaveforms",
                                    children: Co.f.map((pp => (0, yp.jsx)("button", {
                                      type: "button",
                                      className: Ip()("DocsVariantChip", {
                                        Active: ip.waveform === pp
                                      }),
                                      "aria-pressed": ip.waveform === pp,
                                      onClick: () => {
                                        cp({
                                          waveform: pp
                                        })
                                      },
                                      children: pp
                                    }, pp)))
                                  })]
                                }), (0, yp.jsx)(co, {
                                  label: "Pitch",
                                  min: 0,
                                  max: bo(Jo, Bo),
                                  step: .1,
                                  value: bo(Jo, ip.pitchHz),
                                  format: () => `${ip.pitchHz} Hz`,
                                  onChange: pp => {
                                    cp({
                                      pitchHz: ho(Jo, pp)
                                    })
                                  }
                                }), (0, yp.jsx)(co, {
                                  label: "Time per syllable",
                                  min: 25,
                                  max: 200,
                                  step: 1,
                                  value: ip.syllableMs,
                                  format: ao,
                                  onChange: pp => {
                                    cp({
                                      syllableMs: pp
                                    })
                                  }
                                }), (0, yp.jsx)(co, {
                                  label: "Volume",
                                  min: 0,
                                  max: 2,
                                  step: .05,
                                  value: ip.volume,
                                  onChange: pp => {
                                    cp({
                                      volume: pp
                                    })
                                  }
                                })]
                              }), (0, yp.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, yp.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Each blip"
                                }), (0, yp.jsx)(co, {
                                  label: "Length",
                                  min: 10,
                                  max: 300,
                                  step: 1,
                                  value: ip.durationMs,
                                  format: ao,
                                  onChange: pp => {
                                    cp({
                                      durationMs: pp
                                    })
                                  }
                                }), (0, yp.jsx)(co, {
                                  label: "Fade in",
                                  min: 0,
                                  max: Op.durationMs,
                                  step: 1,
                                  value: Op.attackMs,
                                  format: ao,
                                  onChange: pp => {
                                    cp({
                                      attackMs: pp
                                    })
                                  }
                                }), (0, yp.jsx)(co, {
                                  label: "Fade out",
                                  min: 0,
                                  max: Op.durationMs - Op.attackMs,
                                  step: 1,
                                  value: Op.releaseMs,
                                  format: ao,
                                  onChange: pp => {
                                    cp({
                                      releaseMs: pp
                                    })
                                  }
                                }), (0, yp.jsx)(co, {
                                  label: "Glide",
                                  min: -12,
                                  max: 12,
                                  step: .1,
                                  value: ip.glideSemitones,
                                  format: no,
                                  onChange: pp => {
                                    cp({
                                      glideSemitones: pp
                                    })
                                  }
                                }), (0, yp.jsxs)("label", {
                                  className: "DocsVoiceToggle",
                                  children: [(0, yp.jsx)("input", {
                                    type: "checkbox",
                                    checked: null !== ip.lowpassHz,
                                    onChange: pp => {
                                      cp({
                                        lowpassHz: pp.target.checked ? fo : null
                                      })
                                    }
                                  }), (0, yp.jsx)("span", {
                                    children: "Muffle with a filter"
                                  })]
                                }), null !== ip.lowpassHz && (0, yp.jsx)(co, {
                                  label: "Filter",
                                  min: 0,
                                  max: bo(No, To),
                                  step: .1,
                                  value: bo(No, ip.lowpassHz),
                                  format: () => `${ip.lowpassHz} Hz`,
                                  onChange: pp => {
                                    cp({
                                      lowpassHz: ho(No, pp)
                                    })
                                  }
                                })]
                              }), (0, yp.jsxs)("div", {
                                className: "DocsVoiceGroup",
                                children: [(0, yp.jsx)("div", {
                                  className: "DocsVoiceGroupTitle",
                                  children: "Intonation"
                                }), Fo.map((pp => {
                                  let {
                                    key: Op,
                                    label: op,
                                    max: Ip
                                  } = pp;
                                  return (0, yp.jsx)(co, {
                                    label: op,
                                    min: 0,
                                    max: Ip,
                                    step: .1,
                                    value: ip.intonation[Op],
                                    format: no,
                                    onChange: pp => {
                                      cp({
                                        intonation: {
                                          ...ip.intonation,
                                          [Op]: pp
                                        }
                                      })
                                    }
                                  }, Op)
                                }))]
                              })]
                            })
                          }
                          const Go = Object.keys(Co.i),
                            ro = ["Welcome, traveller. The road ahead is long.", "Have you seen my lost sheep anywhere?", "Watch out, the bridge is about to collapse!"];

                          function Zo(pp) {
                            var ip;
                            const cp = JSON.stringify((0, Co.m)(pp));
                            return null !== (ip = Go.find((pp => JSON.stringify((0, Co.m)(Co.i[pp])) === cp))) && void 0 !== ip ? ip : null
                          }

                          function zo(pp) {
                            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if ("object" !== typeof pp || null === pp) return JSON.stringify(pp);
                            return `{\n${Object.entries(pp).map((pp=>{let[cp,Op]=pp;return`${ip}    ${cp}: ${zo(Op,`${ip}    `)},`})).join("\n")}\n${ip}}`
                          }

                          function so(pp, ip, cp) {
                            const Op = Zo(pp),
                              op = [`    line: ${JSON.stringify(ip)},`];
                            return cp && op.push(`    speakerName: ${JSON.stringify(cp)},`), op.push("    voice,"), `const voice = ${Op?JSON.stringify(Op):zo((0,Co.m)(pp))}\n\napi.setClientOption(playerId, "dialogue", {\n${op.join("\n")}\n})`
                          }
                          const Ko = 400,
                            Vo = 90;
                          let pI = null;

                          function iI(pp, ip, cp) {
                            return pI ??= new AudioContext, pI.resume(), (0, Qo.e)(pI, pI.destination, pp, ip, cp, (() => {}))
                          }

                          function cI() {
                            const [pp, ip] = (0, Op.useState)(Co.i.regular), [cp, op] = (0, Op.useState)(ro[0]), [Sp, xp] = (0, Op.useState)("Innkeeper"), [Lp, Yp] = (0, Op.useState)(0), Dp = WO((pp => pp.volume)), Ap = (0, Op.useRef)(null), Pp = (0, Op.useRef)(0), Wp = (0, Op.useRef)(0), Up = () => {
                              var pp;
                              null === (pp = Ap.current) || void 0 === pp || pp.call(Ap), Ap.current = null
                            };
                            (0, Op.useEffect)((() => () => {
                              var pp;
                              null === (pp = Ap.current) || void 0 === pp || pp.call(Ap), window.clearTimeout(Pp.current)
                            }), []);
                            const vp = (0, Op.useMemo)((() => ({
                                line: cp,
                                speakerName: Sp || void 0,
                                voice: pp
                              })), [cp, Sp, pp]),
                              tp = (0, Op.useRef)(vp);
                            tp.current = vp;
                            const dp = Zo(pp),
                              ep = pp => {
                                window.clearTimeout(Pp.current), Up();
                                const {
                                  plan: ip,
                                  synth: cp
                                } = (0, Xo.h)(pp);
                                cp && (Ap.current = iI(cp, ip.blips, Dp)), Yp((pp => pp + 1))
                              },
                              jp = so(pp, cp, Sp);
                            return (0, yp.jsxs)("section", {
                              className: "DocsPlayground DocsVoicePlayground",
                              "aria-label": "Voice playground",
                              children: [(0, yp.jsxs)("header", {
                                className: "DocsPlaygroundHeader",
                                children: [(0, yp.jsxs)("div", {
                                  children: [(0, yp.jsx)("div", {
                                    className: "DocsPlaygroundTitle",
                                    children: "Try it: voices"
                                  }), (0, yp.jsx)("div", {
                                    className: "DocsPlaygroundHint",
                                    children: "Start from a preset and change it to suit your character. The line replays as you go."
                                  })]
                                }), (0, yp.jsx)(Hp, {
                                  text: jp,
                                  label: "Copy code"
                                })]
                              }), (0, yp.jsxs)("div", {
                                className: "DocsPlaygroundPresets",
                                children: [Go.map((pp => (0, yp.jsx)("button", {
                                  type: "button",
                                  className: Ip()("DocsVariantChip", {
                                    Active: dp === pp
                                  }),
                                  "aria-pressed": dp === pp,
                                  onClick: () => {
                                    (pp => {
                                      const cp = Co.i[pp];
                                      ip(cp), ep({
                                        ...vp,
                                        voice: cp
                                      })
                                    })(pp)
                                  },
                                  children: pp
                                }, pp))), !dp && (0, yp.jsx)("span", {
                                  className: "DocsVariantChip Active DocsVoiceCustomChip",
                                  children: "custom"
                                })]
                              }), (0, yp.jsxs)("div", {
                                className: "DocsVoiceBody",
                                children: [(0, yp.jsxs)("div", {
                                  className: "DocsVoiceScene",
                                  children: [(0, yp.jsx)("div", {
                                    className: "DocsVoiceStage",
                                    children: (0, yp.jsx)(Eo.e, {
                                      display: vp
                                    }, Lp)
                                  }), (0, yp.jsxs)("form", {
                                    className: "DocsVoiceLineRow",
                                    onSubmit: pp => {
                                      pp.preventDefault(), ep(vp)
                                    },
                                    children: [(0, yp.jsx)("input", {
                                      value: cp,
                                      "aria-label": "Line",
                                      placeholder: "Type a line to hear it",
                                      onChange: pp => {
                                        op(pp.target.value)
                                      }
                                    }), (0, yp.jsxs)("button", {
                                      type: "submit",
                                      className: "DocsVoiceSpeakButton",
                                      children: [(0, yp.jsx)(wp, {
                                        name: "play"
                                      }), (0, yp.jsx)("span", {
                                        children: "Speak"
                                      })]
                                    })]
                                  }), (0, yp.jsx)("div", {
                                    className: "DocsVoiceSamples",
                                    children: ro.map((pp => (0, yp.jsx)("button", {
                                      type: "button",
                                      className: Ip()("DocsVariantChip", {
                                        Active: cp === pp
                                      }),
                                      onClick: () => {
                                        var ip;
                                        op(ip = pp), ep({
                                          ...vp,
                                          line: ip
                                        })
                                      },
                                      children: pp
                                    }, pp)))
                                  }), (0, yp.jsxs)("label", {
                                    className: "DocsVoiceSpeaker",
                                    children: [(0, yp.jsx)("span", {
                                      children: "Speaker"
                                    }), (0, yp.jsx)("input", {
                                      value: Sp,
                                      placeholder: "No name",
                                      onChange: pp => {
                                        xp(pp.target.value)
                                      }
                                    })]
                                  })]
                                }), (0, yp.jsx)(go, {
                                  synth: pp,
                                  onChange: cp => {
                                    const Op = {
                                      ...pp,
                                      ...cp
                                    };
                                    ip(Op);
                                    const op = {
                                        ...vp,
                                        voice: Op
                                      },
                                      Ip = performance.now();
                                    if (Ip - Wp.current >= Vo) {
                                      Wp.current = Ip, Up();
                                      const pp = (0, Xo.h)(op).plan.blips[0];
                                      pp && (Ap.current = iI((0, Co.m)(Op), [{
                                        ...pp,
                                        atMs: 0
                                      }], Dp))
                                    }
                                    window.clearTimeout(Pp.current), Pp.current = window.setTimeout((() => {
                                      ep(tp.current)
                                    }), Ko)
                                  }
                                })]
                              }), (0, yp.jsx)(kp, {
                                code: jp,
                                lang: "ts"
                              })]
                            })
                          }
                          var OI = cp(4984);
                          const oI = /(`{1,2})\s*(.+?)\s*\1(?!`)/g,
                            II = String.raw`(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)`,
                            SI = [
                              [new RegExp(String.raw`([A-Za-z_$][\w$]*)\s*(?:=(?![=>])|:)\s*${II}`, "g"), OI.m],
                              [/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g],
                              [/([A-Za-z_$][\w$]*)\s*\([^()]*\)\s*\{/g, OI.m]
                            ];

                          function xI(pp) {
                            return `${pp.pageId}#${pp.anchor}`
                          }
                          let LI, YI, DI;

                          function AI(pp) {
                            const ip = (0, mp.k)(pp),
                              cp = new Set;
                            for (const [, , Op] of ip.matchAll(mp.d)) {
                              const pp = Op.startsWith("#") ? np(Op) : null,
                                ip = pp ? xI({
                                  pageId: pp.page.id,
                                  anchor: pp.anchor
                                }) : null;
                              null !== ip && (LI || (LI = new Set(Np.flatMap((pp => Cp(pp.layout) ? hp(pp).sections.map((ip => xI({
                                pageId: pp.id,
                                anchor: ip.heading.anchor
                              }))) : [])))), LI).has(ip) && cp.add(ip)
                            }
                            for (const [, , Op] of ip.matchAll(oI)) {
                              const pp = yi(Op);
                              pp && cp.add(xI(pp))
                            }
                            return cp
                          }

                          function PI(pp, ip) {
                            const cp = new Set,
                              Op = function(pp) {
                                return pp.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, '""')
                              }(pp);
                            for (const [, op] of Op.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)) cp.add(op);
                            for (const [op, Ip] of SI)
                              for (const [, pp] of(0, OI.f)(Op, op, Ip)) ip.has(pp) && cp.add(pp);
                            return cp
                          }

                          function WI(pp, ip, cp, Op) {
                            const op = pp.get(ip);
                            op ? !Op && op.some((pp => pp.pageId === cp.pageId)) || op.push(cp) : pp.set(ip, [cp])
                          }
                          const yI = /^[A-Za-z_$][\w$]*$/;

                          function UI(pp) {
                            return yI.test(pp.name) ? pp.name : "options"
                          }

                          function wI(pp, ip) {
                            const cp = pp.params.map(UI).join(", ");
                            return ip ? `${pp.name} = (${cp}) => {\n\t\n}` : `api.${pp.name}(${cp})`
                          }

                          function vI(pp) {
                            let {
                              method: ip,
                              isCallback: cp
                            } = pp;
                            return (0, yp.jsxs)("div", {
                              className: "DocsSignature",
                              children: [(0, yp.jsxs)("span", {
                                className: "DocsSignatureCode",
                                children: [cp ? (0, yp.jsxs)(yp.Fragment, {
                                  children: [(0, yp.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: ip.name
                                  }), (0, yp.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: " = ("
                                  })]
                                }) : (0, yp.jsxs)(yp.Fragment, {
                                  children: [(0, yp.jsx)("span", {
                                    className: "DocsSignatureObject",
                                    children: "api."
                                  }), (0, yp.jsx)("span", {
                                    className: "DocsSignatureName",
                                    children: ip.name
                                  }), (0, yp.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: "("
                                  })]
                                }), ip.params.map(((pp, cp) => (0, yp.jsxs)(Op.Fragment, {
                                  children: [cp > 0 && (0, yp.jsx)("span", {
                                    className: "DocsTypePunctuation",
                                    children: ", "
                                  }), (0, yp.jsx)("a", {
                                    className: "DocsSignatureParam",
                                    href: `#${ip.name}-${UI(pp)}`,
                                    children: pp.name
                                  })]
                                }, pp.name))), (0, yp.jsx)("span", {
                                  className: "DocsTypePunctuation",
                                  children: cp ? ") => " : ")"
                                }), cp && !ip.returns && (0, yp.jsx)("span", {
                                  className: "DocsTypeKeyword",
                                  children: "void"
                                })]
                              }), ip.returns && ip.returns.type && (0, yp.jsxs)("span", {
                                className: "DocsSignatureReturns",
                                children: [!cp && (0, yp.jsx)("span", {
                                  className: "DocsSignatureArrow",
                                  children: "\u2192"
                                }), (0, yp.jsx)(qi, {
                                  type: ip.returns.type
                                })]
                              })]
                            })
                          }

                          function tI(pp) {
                            let {
                              title: ip,
                              references: cp
                            } = pp;
                            const op = (0, Op.useContext)(Ui);
                            return (0, yp.jsxs)("div", {
                              className: "DocsCardReferences",
                              children: [(0, yp.jsx)("span", {
                                className: "DocsCardReferencesTitle",
                                children: ip
                              }), cp.map((pp => (0, yp.jsx)(Sp.c, {
                                to: gp(op, fp(pp.pageId), pp.anchor),
                                children: pp.label
                              }, `${pp.pageId}#${pp.anchor}`)))]
                            })
                          }

                          function HI(pp) {
                            var ip, cp;
                            let {
                              pageId: Op,
                              anchor: op
                            } = pp;
                            const Ip = xI({
                                pageId: Op,
                                anchor: op
                              }),
                              Sp = null !== (ip = function() {
                                if (!DI) {
                                  DI = new Map;
                                  const Op = new Set(Np.filter((pp => "callbacks" === pp.layout)).flatMap((pp => hp(pp).sections.map((pp => pp.heading.text)))));
                                  for (const op of Np)
                                    if ("article" === op.layout || "snippets" === op.layout)
                                      for (const Ip of (0, mp.t)(hp(op)))
                                        for (const {
                                            code: Sp
                                          }
                                          of(0, mp.n)(Ip.blocks))
                                          for (const xp of PI(Sp, Op)) {
                                            const Op = Wi().get(xp);
                                            if (Op) {
                                              var pp, ip, cp;
                                              const Sp = {
                                                pageId: op.id,
                                                anchor: null !== (pp = null === (ip = Ip.heading) || void 0 === ip ? void 0 : ip.anchor) && void 0 !== pp ? pp : "",
                                                label: null !== (cp = op.navTitle) && void 0 !== cp ? cp : op.title
                                              };
                                              WI(DI, xI(Op), Sp, !1)
                                            }
                                          }
                                }
                                return DI
                              }().get(Ip)) && void 0 !== ip ? ip : [],
                              xp = null !== (cp = function() {
                                if (!YI) {
                                  YI = new Map;
                                  const pp = fp("changelog");
                                  for (const ip of hp(pp).sections) {
                                    const cp = new Set(ip.blocks.flatMap((pp => [...AI(pp)])));
                                    for (const Op of cp) {
                                      const cp = {
                                        pageId: pp.id,
                                        anchor: ip.heading.anchor,
                                        label: ip.heading.text
                                      };
                                      WI(YI, Op, cp, !0)
                                    }
                                  }
                                }
                                return YI
                              }().get(Ip)) && void 0 !== cp ? cp : [];
                            return 0 === Sp.length && 0 === xp.length ? null : (0, yp.jsxs)("footer", {
                              className: "DocsCardFooter",
                              children: [Sp.length > 0 && (0, yp.jsx)(tI, {
                                title: "Used in",
                                references: Sp
                              }), xp.length > 0 && (0, yp.jsx)(tI, {
                                title: "Changelog",
                                references: xp
                              })]
                            })
                          }

                          function dI(pp) {
                            let {
                              method: ip,
                              pageId: cp,
                              anchor: Op,
                              isCallback: op
                            } = pp;
                            const Ip = op ? void 0 : Yi().get(ip.name),
                              Sp = ip.description.length > 0 || null === Ip || void 0 === Ip || !Ip.description ? ip.description : (0, mp.x)(Ip.description);
                            return (0, yp.jsxs)("article", {
                              className: "DocsCard DocsMethodCard",
                              children: [(0, yp.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, yp.jsx)(Pc, {
                                  level: 2,
                                  text: ip.name,
                                  anchor: Op,
                                  className: "DocsCardTitle"
                                }), (0, yp.jsx)(Hp, {
                                  text: wI(ip, op),
                                  label: op ? "Copy handler" : "Copy call",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, yp.jsx)(vI, {
                                method: ip,
                                isCallback: op
                              }), Ip && null !== Ip.deprecation && (0, yp.jsxs)("aside", {
                                className: "DocsCallout warning DocsDeprecation",
                                children: [(0, yp.jsx)("strong", {
                                  children: "Deprecated"
                                }), Ip.deprecation && (0, yp.jsxs)(yp.Fragment, {
                                  children: [": ", (0, yp.jsx)(ki, {
                                    text: (xp = Ip.deprecation, (0, OI.r)(xp, /[a-z][\w$]*[A-Z][\w$]*\b/g, (0, OI.k)("`\\w"), (pp => {
                                      let [ip] = pp;
                                      return Wi().has(ip) ? `\`${ip}\`` : ip
                                    })))
                                  })]
                                })]
                              }), Sp.length > 0 && (0, yp.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, yp.jsx)(wc, {
                                  blocks: Sp
                                })
                              }), ip.params.length > 0 && (0, yp.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, yp.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Parameters"
                                }), (0, yp.jsx)("dl", {
                                  className: "DocsParamList",
                                  children: ip.params.map((pp => (0, yp.jsxs)("div", {
                                    id: `${ip.name}-${UI(pp)}`,
                                    className: "DocsParam",
                                    children: [(0, yp.jsxs)("dt", {
                                      children: [(0, yp.jsx)("code", {
                                        className: "DocsParamName",
                                        children: pp.name
                                      }), (0, yp.jsx)(qi, {
                                        type: pp.type
                                      })]
                                    }), pp.description && (0, yp.jsx)("dd", {
                                      children: (0, yp.jsx)(ki, {
                                        text: pp.description
                                      })
                                    })]
                                  }, pp.name)))
                                })]
                              }), ip.returns && (ip.returns.type || ip.returns.description.length > 0) && (0, yp.jsxs)("section", {
                                className: "DocsCardPart",
                                children: [(0, yp.jsx)("h3", {
                                  className: "DocsCardPartTitle",
                                  children: "Returns"
                                }), (0, yp.jsxs)("div", {
                                  className: "DocsReturns",
                                  children: [ip.returns.type && (0, yp.jsx)(qi, {
                                    type: ip.returns.type
                                  }), ip.returns.description.length > 0 && (0, yp.jsx)("div", {
                                    className: "DocsProse",
                                    children: (0, yp.jsx)(wc, {
                                      blocks: ip.returns.description
                                    })
                                  })]
                                })]
                              }), (0, yp.jsx)(HI, {
                                pageId: cp,
                                anchor: Op
                              })]
                            });
                            var xp
                          }

                          function eI(pp) {
                            var ip;
                            return null !== pp.defaultValue && "undefined" !== pp.defaultValue ? pp.defaultValue : null !== (ip = pp.example) && void 0 !== ip ? ip : "value"
                          }

                          function uI(pp) {
                            let {
                              setting: ip,
                              pageId: cp,
                              anchor: Op,
                              setterSnippet: op
                            } = pp;
                            const Ip = null === ip.defaultValue ? null : Hi(ip.defaultValue);
                            return (0, yp.jsxs)("article", {
                              className: "DocsCard DocsSettingCard",
                              children: [(0, yp.jsxs)("header", {
                                className: "DocsCardHeader",
                                children: [(0, yp.jsx)(Pc, {
                                  level: 2,
                                  text: ip.name,
                                  anchor: Op,
                                  className: "DocsCardTitle"
                                }), (0, yp.jsx)(Hp, {
                                  text: op(ip.name, eI(ip)),
                                  label: "Copy setter",
                                  className: "DocsCardCopy"
                                })]
                              }), (0, yp.jsxs)("dl", {
                                className: "DocsSettingFacts",
                                children: [(0, yp.jsxs)("div", {
                                  children: [(0, yp.jsx)("dt", {
                                    children: "Type"
                                  }), (0, yp.jsx)("dd", {
                                    children: (0, yp.jsx)(qi, {
                                      type: ip.type
                                    })
                                  })]
                                }), null !== ip.defaultValue && (0, yp.jsxs)("div", {
                                  children: [(0, yp.jsx)("dt", {
                                    children: "Default"
                                  }), (0, yp.jsx)("dd", {
                                    children: (0, yp.jsxs)("code", {
                                      className: "DocsInlineCode DocsDefaultValue",
                                      children: [Ip && (0, yp.jsx)(di, {
                                        colour: Ip
                                      }), ip.defaultValue]
                                    })
                                  })]
                                }), null !== ip.example && (0, yp.jsxs)("div", {
                                  children: [(0, yp.jsx)("dt", {
                                    children: "Example"
                                  }), (0, yp.jsx)("dd", {
                                    children: (0, yp.jsx)("code", {
                                      className: "DocsInlineCode",
                                      children: ip.example
                                    })
                                  })]
                                })]
                              }), ip.description.length > 0 && (0, yp.jsx)("div", {
                                className: "DocsProse DocsCardBody",
                                children: (0, yp.jsx)(wc, {
                                  blocks: ip.description
                                })
                              }), (0, yp.jsx)(HI, {
                                pageId: cp,
                                anchor: Op
                              })]
                            })
                          }

                          function jI(pp) {
                            let {
                              section: ip
                            } = pp;
                            return (0, yp.jsxs)("article", {
                              className: "DocsCard DocsSnippetCard",
                              children: [(0, yp.jsx)(Pc, {
                                level: 2,
                                text: ip.heading.text,
                                anchor: ip.heading.anchor,
                                className: "DocsCardTitle"
                              }), (0, yp.jsx)("div", {
                                className: "DocsProse",
                                children: (0, yp.jsx)(wc, {
                                  blocks: ip.blocks
                                })
                              })]
                            })
                          }

                          function kI(pp) {
                            let {
                              section: ip
                            } = pp;
                            return (0, yp.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, yp.jsx)(Pc, {
                                level: ip.heading.level,
                                text: ip.heading.text,
                                anchor: ip.heading.anchor
                              }), (0, yp.jsx)(wc, {
                                blocks: ip.blocks
                              })]
                            })
                          }
                          const mI = {
                            methods: "methods",
                            callbacks: "callbacks",
                            settings: "settings",
                            changelog: "updates",
                            snippets: "snippets",
                            article: "sections"
                          };

                          function RI(pp) {
                            let {
                              page: ip,
                              section: cp
                            } = pp;
                            if ("methods" === ip.layout || "callbacks" === ip.layout) return (0, yp.jsx)(dI, {
                              method: Rc(cp),
                              pageId: ip.id,
                              anchor: cp.heading.anchor,
                              isCallback: "callbacks" === ip.layout
                            });
                            if ("settings" === ip.layout) {
                              const pp = function(pp) {
                                const ip = {
                                  name: pp.heading.text,
                                  type: "",
                                  defaultValue: null,
                                  example: null,
                                  description: []
                                };
                                for (const Op of pp.blocks) {
                                  var cp;
                                  if (mc(Op)) continue;
                                  const pp = "paragraph" === Op.kind ? Op.text.match(qc) : null;
                                  if (!pp) {
                                    ip.description.push(Op);
                                    continue
                                  }
                                  const op = null !== (cp = kc(pp[2])) && void 0 !== cp ? cp : pp[2];
                                  "Type" === pp[1] ? ip.type = op : "Default" === pp[1] ? ip.defaultValue = op : "" !== op && (ip.example = op)
                                }
                                return ip.type ? ip : null
                              }(cp);
                              if (pp) return (0, yp.jsx)(uI, {
                                setting: pp,
                                pageId: ip.id,
                                anchor: cp.heading.anchor,
                                setterSnippet: ip.setterSnippet
                              })
                            }
                            return "snippets" === ip.layout ? (0, yp.jsx)(jI, {
                              section: cp
                            }) : "changelog" === ip.layout ? (0, yp.jsxs)("section", {
                              className: "DocsChangelogEntry",
                              children: [(0, yp.jsx)("div", {
                                className: "DocsChangelogDate",
                                children: (0, yp.jsx)(Pc, {
                                  level: 2,
                                  text: cp.heading.text,
                                  anchor: cp.heading.anchor
                                })
                              }), (0, yp.jsx)("div", {
                                className: "DocsProse DocsChangelogBody",
                                children: (0, yp.jsx)(wc, {
                                  blocks: Mc(cp.blocks)
                                })
                              })]
                            }) : ip.gallery ? (0, yp.jsxs)("section", {
                              className: "DocsProse DocsArticleSection",
                              children: [(0, yp.jsx)(Pc, {
                                level: cp.heading.level,
                                text: cp.heading.text,
                                anchor: cp.heading.anchor
                              }), (0, yp.jsx)(CO, {
                                kind: ip.gallery,
                                content: hp(ip),
                                blocks: cp.blocks
                              })]
                            }) : (0, yp.jsx)(kI, {
                              section: cp
                            })
                          }

                          function qI(pp) {
                            let {
                              page: ip,
                              onTocChange: cp
                            } = pp;
                            const op = hp(ip),
                              [Ip, Sp] = (0, Op.useState)(""),
                              xp = "article" !== ip.layout,
                              Lp = Hc(ip.gallery) ? ip.gallery : null,
                              Yp = null !== Lp,
                              Dp = Ip.trim().toLowerCase(),
                              Ap = (0, Op.useRef)(null),
                              Pp = (0, Op.useCallback)((pp => {
                                var ip;
                                null === (ip = Ap.current) || void 0 === ip || ip.preview(pp)
                              }), []),
                              Wp = (0, Op.useMemo)((() => {
                                if (!ip.hasParticlePlayground) return [];
                                const pp = lc(op.intro).find((pp => "names" === pp.kind && !pp.names.some((pp => null !== ac(pp.name)))));
                                return "names" === (null === pp || void 0 === pp ? void 0 : pp.kind) ? pp.names.map((pp => pp.name)) : []
                              }), [ip, op]),
                              Up = (0, Op.useMemo)((() => {
                                if (!ip.hasTextPlayground) return [];
                                const pp = op.sections.flatMap((pp => pp.blocks.flatMap((pp => {
                                  var ip;
                                  return (null !== (ip = Xc(pp)) && void 0 !== ip ? ip : []).flatMap((pp => ai(pp.name) ? [pp.name] : []))
                                }))));
                                return [...new Set(pp)]
                              }), [ip, op]),
                              wp = (0, Op.useMemo)((() => Dp ? op.sections.filter((pp => function(pp, ip) {
                                return !!pp.heading.text.toLowerCase().includes(ip) || pp.blocks.some((pp => (0, mp.k)(pp).toLowerCase().includes(ip)))
                              }(pp, Dp))) : op.sections), [op, Dp]),
                              vp = (0, Op.useMemo)((() => function(pp, ip) {
                                return "article" !== pp.layout ? ip.map((pp => ({
                                  anchor: pp.heading.anchor,
                                  text: pp.heading.text,
                                  level: 2
                                }))) : ip.flatMap((pp => {
                                  const ip = pp.blocks.flatMap((pp => "heading" === pp.kind && 3 === pp.level ? [{
                                    anchor: pp.anchor,
                                    text: pp.text,
                                    level: 3
                                  }] : []));
                                  return [{
                                    anchor: pp.heading.anchor,
                                    text: pp.heading.text,
                                    level: 2
                                  }, ...ip]
                                }))
                              }(ip, wp)), [ip, wp]);
                            return (0, Op.useEffect)((() => {
                              cp(vp)
                            }), [vp, cp]), (0, yp.jsxs)("article", {
                              className: "DocsPage",
                              children: [(0, yp.jsxs)("header", {
                                className: "DocsPageHeader",
                                children: [(0, yp.jsx)("h1", {
                                  className: "DocsPageTitle",
                                  children: op.title || ip.title
                                }), (0, yp.jsx)("p", {
                                  className: "DocsPageSummary",
                                  children: ip.summary
                                }), (0, yp.jsx)(KO, {
                                  page: ip
                                }), xp && (0, yp.jsx)("div", {
                                  className: "DocsPageStats",
                                  children: (0, yp.jsxs)("span", {
                                    children: [(0, yp.jsx)("strong", {
                                      children: op.sections.length
                                    }), " ", mI[ip.layout]]
                                  })
                                })]
                              }), "" === ip.slug && (0, yp.jsx)(XO, {}), Lp && (0, yp.jsx)(BO, {
                                kind: Lp
                              }, Lp), ip.hasParticlePlayground && (0, yp.jsx)(Ao, {
                                ref: Ap,
                                textures: Wp
                              }), !Yp && op.intro.length > 0 && (0, yp.jsx)("div", {
                                className: "DocsProse DocsPageIntro",
                                children: ip.gallery ? (0, yp.jsx)(dO.Provider, {
                                  value: ip.hasParticlePlayground ? Pp : null,
                                  children: (0, yp.jsx)(CO, {
                                    kind: ip.gallery,
                                    content: op,
                                    blocks: op.intro
                                  })
                                }) : (0, yp.jsx)(wc, {
                                  blocks: Mc(op.intro)
                                })
                              }), ip.hasTextPlayground && (0, yp.jsx)(Mo, {
                                fontAwesomeIcons: Up
                              }), ip.hasVoicePlayground && (0, yp.jsx)(cI, {}), ip.childPageIds && (0, yp.jsx)(XO, {
                                cards: ip.childPageIds.map((pp => ({
                                  pageId: pp
                                }))),
                                label: ip.title
                              }), xp && (0, yp.jsx)(uc, {
                                className: "DocsFilterBar",
                                value: Ip,
                                placeholder: `Filter ${op.sections.length} ${mI[ip.layout]}\u2026`,
                                label: `Filter ${mI[ip.layout]}`,
                                onChange: Sp,
                                count: Dp ? {
                                  visible: wp.length,
                                  total: op.sections.length
                                } : null
                              }), !Yp && (0, yp.jsxs)("div", {
                                className: `DocsSections Layout-${ip.layout}`,
                                children: [wp.map((pp => (0, yp.jsx)(RI, {
                                  page: ip,
                                  section: pp
                                }, pp.heading.anchor))), 0 === wp.length && (0, yp.jsxs)("p", {
                                  className: "DocsEmpty",
                                  children: ["No ", mI[ip.layout], " match \u201c", Ip, "\u201d."]
                                })]
                              })]
                            })
                          }
                          const MI = /^(\d+)(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})$/;

                          function CI(pp) {
                            let {
                              entry: ip,
                              isActive: cp,
                              onNavigate: Op,
                              label: op,
                              children: Sp
                            } = pp;
                            return (0, yp.jsx)("a", {
                              href: `#${ip.anchor}`,
                              "aria-label": op,
                              className: Ip()(`Level${ip.level}`, {
                                Active: cp
                              }),
                              "aria-current": cp ? "location" : void 0,
                              onClick: pp => {
                                pp.preventDefault(), Op(ip.anchor)
                              },
                              children: Sp
                            })
                          }

                          function EI(pp) {
                            let {
                              toc: ip,
                              activeAnchor: cp,
                              onNavigate: op
                            } = pp;
                            const Sp = Math.max(0, ip.findIndex((pp => pp.anchor === cp))),
                              xp = (0, Op.useRef)(null),
                              Lp = (0, Op.useRef)(!1);
                            (0, Op.useEffect)((() => {
                              var pp, cp;
                              const Op = null === (pp = xp.current) || void 0 === pp ? void 0 : pp.closest(".DocsToc"),
                                op = null === (cp = xp.current) || void 0 === cp ? void 0 : cp.querySelector(".DocsTimelineNotch.Active");
                              if (!Op || !op) return;
                              let Ip = 0;
                              if (Sp === ip.length - 1) Ip = Op.scrollHeight;
                              else if (Sp > 0) {
                                const pp = Op.getBoundingClientRect(),
                                  ip = op.getBoundingClientRect();
                                Ip = Op.scrollTop + ip.top + ip.height / 2 - (pp.top + Op.clientHeight / 2)
                              }
                              Op.scrollTo({
                                top: Ip,
                                behavior: Lp.current ? "smooth" : "auto"
                              }), Lp.current = !0
                            }), [Sp, ip.length]);
                            const Yp = [];
                            return ip.forEach(((pp, ip) => {
                              var cp, Op, op;
                              const Ip = function(pp) {
                                  const ip = pp.trim().match(MI);
                                  return ip ? {
                                    day: ip[1],
                                    month: `${ip[2]} ${ip[3]}`
                                  } : null
                                }(pp.text),
                                Sp = null !== (cp = null === Ip || void 0 === Ip ? void 0 : Ip.month) && void 0 !== cp ? cp : null;
                              null !== Sp && (null === (Op = Yp.at(-1)) || void 0 === Op ? void 0 : Op.month) === Sp || Yp.push({
                                month: Sp,
                                entries: []
                              }), Yp.at(-1).entries.push({
                                entry: pp,
                                day: null !== (op = null === Ip || void 0 === Ip ? void 0 : Ip.day) && void 0 !== op ? op : null,
                                index: ip
                              })
                            })), (0, yp.jsx)("ol", {
                              ref: xp,
                              className: "DocsTimeline",
                              children: Yp.map((pp => {
                                let {
                                  month: ip,
                                  entries: cp
                                } = pp;
                                return (0, yp.jsxs)("li", {
                                  className: "DocsTimelineMonth",
                                  children: [ip && (0, yp.jsx)("span", {
                                    className: "DocsTimelineMonthName",
                                    children: ip
                                  }), (0, yp.jsx)("ol", {
                                    children: cp.map((pp => {
                                      let {
                                        entry: ip,
                                        day: cp,
                                        index: Op
                                      } = pp;
                                      return (0, yp.jsx)("li", {
                                        className: Ip()("DocsTimelineNotch", {
                                          Passed: Op < Sp,
                                          Active: Op === Sp
                                        }),
                                        children: (0, yp.jsx)(CI, {
                                          entry: ip,
                                          isActive: Op === Sp,
                                          onNavigate: op,
                                          label: ip.text,
                                          children: (0, yp.jsx)("span", {
                                            className: "DocsTimelineDay",
                                            children: null !== cp && void 0 !== cp ? cp : ip.text
                                          })
                                        })
                                      }, ip.anchor)
                                    }))
                                  })]
                                }, cp[0].entry.anchor)
                              }))
                            })
                          }

                          function XI(pp) {
                            let {
                              isChangelog: ip,
                              toc: cp,
                              activeAnchor: Op,
                              onNavigate: op
                            } = pp;
                            return 0 === cp.length ? null : (0, yp.jsxs)(yp.Fragment, {
                              children: [(0, yp.jsx)("div", {
                                className: "DocsTocTitle",
                                children: ip ? "Updates" : "On this page"
                              }), ip ? (0, yp.jsx)(EI, {
                                toc: cp,
                                activeAnchor: Op,
                                onNavigate: op
                              }) : (0, yp.jsx)("ul", {
                                children: cp.map((pp => (0, yp.jsx)("li", {
                                  children: (0, yp.jsx)(CI, {
                                    entry: pp,
                                    isActive: pp.anchor === Op,
                                    onNavigate: op,
                                    children: pp.text.replace(/`/g, "")
                                  })
                                }, pp.anchor)))
                              })]
                            })
                          }
                          const lI = {
                              methods: "Method",
                              callbacks: "Callback",
                              settings: "Setting",
                              changelog: "Update",
                              snippets: "Snippet",
                              article: "Section"
                            },
                            QI = {
                              icons: "Icon",
                              particles: "Particle",
                              sounds: "Sound",
                              skins: "Skin",
                              blocks: "Block",
                              items: "Item"
                            },
                            JI = 20,
                            BI = 10,
                            NI = 40,
                            TI = 120;
                          let fI;

                          function bI(pp) {
                            const ip = pp.gallery;
                            if (!ip) return [];
                            if (Hc(ip)) return function(pp) {
                              return ec(pp).entries.map((pp => pp.name))
                            }(ip).map((cp => ({
                              page: pp,
                              anchor: Jc(ip, cp),
                              title: cp,
                              kind: QI[ip],
                              text: "",
                              listedUnder: pp.title
                            })));
                            const cp = hp(pp);
                            return (0, mp.t)(cp).flatMap((Op => {
                              const op = Op.heading ? `${pp.title} \u203a ${Op.heading.text.replace(/\s*\(\d+[^)]*\)$/,"")}` : pp.title;
                              return Nc(ip, cp, Op.blocks).flatMap((cp => "names" !== cp.kind ? [] : cp.names.map((Op => {
                                const Ip = cp.isSongs ? "Song" : QI[ip];
                                return {
                                  page: pp,
                                  anchor: Op.anchor,
                                  title: Op.name,
                                  kind: Ip,
                                  text: "",
                                  listedUnder: op
                                }
                              }))))
                            }))
                          }

                          function hI(pp, ip, cp) {
                            const Op = pp.title.toLowerCase();
                            let op = 0;
                            if (Op === ip) op = 100;
                            else if (Op.startsWith(ip)) op = 80;
                            else if (Op.includes(ip)) op = 60;
                            else if (cp.every((pp => Op.includes(pp)))) op = 45;
                            else {
                              if (!pp.text.toLowerCase().includes(ip)) return 0;
                              op = 20
                            }
                            return op - Math.min(Op.length / 10, 9) + ("Page" === pp.kind ? 8 : "Method" === pp.kind ? 3 : 0) - (pp.listedUnder ? JI : 0)
                          }

                          function aI(pp, ip) {
                            const cp = pp.toLowerCase().indexOf(ip),
                              Op = Math.max(0, cp - TI / 3);
                            return `${Op>0?"\u2026":""}${pp.slice(Op,Op+TI)}${Op+TI<pp.length?"\u2026":""}`
                          }

                          function nI(pp) {
                            let {
                              text: ip,
                              query: cp
                            } = pp;
                            const Op = cp ? ip.toLowerCase().indexOf(cp) : -1;
                            return -1 === Op ? (0, yp.jsx)(yp.Fragment, {
                              children: ip
                            }) : (0, yp.jsxs)(yp.Fragment, {
                              children: [ip.slice(0, Op), (0, yp.jsx)("mark", {
                                children: ip.slice(Op, Op + cp.length)
                              }), ip.slice(Op + cp.length)]
                            })
                          }

                          function FI(pp) {
                            let {
                              basePath: ip,
                              onClose: cp
                            } = pp;
                            const op = (0, xp.t)(),
                              [Sp, Lp] = (0, Op.useState)(""),
                              [Yp, Dp] = (0, Op.useState)(0),
                              Ap = (0, Op.useRef)(null),
                              Pp = (0, Op.useRef)(null),
                              Wp = Sp.trim().toLowerCase(),
                              Up = (0, Op.useMemo)((() => {
                                const pp = (fI || (fI = Np.flatMap((pp => {
                                  const ip = hp(pp);
                                  return [{
                                    page: pp,
                                    anchor: "",
                                    title: pp.title,
                                    kind: "Page",
                                    text: pp.summary
                                  }, ...ip.sections.flatMap((ip => {
                                    const cp = ip.blocks.filter((pp => "paragraph" === pp.kind)).map(mp.k).join(" ").replace(/[`*]/g, ""),
                                      Op = {
                                        page: pp,
                                        anchor: ip.heading.anchor,
                                        title: ip.heading.text.replace(/`/g, ""),
                                        kind: lI[pp.layout],
                                        text: cp
                                      },
                                      op = ip.blocks.flatMap((ip => "article" === pp.layout && "heading" === ip.kind && 3 === ip.level ? [{
                                        page: pp,
                                        anchor: ip.anchor,
                                        title: ip.text.replace(/`/g, ""),
                                        kind: "Section",
                                        text: Op.title
                                      }] : []));
                                    return [Op, ...op]
                                  })), ...bI(pp)]
                                }))), fI);
                                if (!Wp) return pp.filter((pp => "Page" === pp.kind));
                                const ip = Wp.split(/\s+/);
                                let cp = 0;
                                return pp.map((pp => ({
                                  entry: pp,
                                  score: hI(pp, Wp, ip)
                                }))).filter((pp => pp.score > 0)).sort(((pp, ip) => ip.score - pp.score)).filter((pp => !pp.entry.listedUnder || (cp++, cp <= BI))).slice(0, NI).map((pp => pp.entry))
                              }), [Wp]);
                            (0, Op.useEffect)((() => {
                              Dp(0)
                            }), [Wp]), (0, Op.useEffect)((() => {
                              const pp = document.activeElement instanceof HTMLElement ? document.activeElement : null;
                              return () => {
                                null === pp || void 0 === pp || pp.focus()
                              }
                            }), []), (0, Op.useEffect)((() => {
                              var pp, ip;
                              null === (pp = Ap.current) || void 0 === pp || null === (ip = pp.querySelector(".Active")) || void 0 === ip || ip.scrollIntoView({
                                block: "nearest"
                              })
                            }), [Yp]);
                            const vp = pp => {
                              op(gp(ip, pp.page, pp.anchor)), cp()
                            };
                            return (0, yp.jsx)("div", {
                              className: "DocsSearchOverlay",
                              onMouseDown: pp => {
                                pp.target === pp.currentTarget && cp()
                              },
                              children: (0, yp.jsxs)("div", {
                                className: "DocsSearchDialog",
                                role: "dialog",
                                "aria-modal": "true",
                                "aria-label": "Search the docs",
                                onMouseDown: pp => {
                                  pp.target !== Pp.current && pp.preventDefault()
                                },
                                onKeyDown: pp => {
                                  if ("Escape" === pp.key) cp();
                                  else if ("Tab" === pp.key) {
                                    var ip;
                                    pp.preventDefault(), null === (ip = Pp.current) || void 0 === ip || ip.focus()
                                  }
                                },
                                children: [(0, yp.jsxs)("div", {
                                  className: "DocsSearchInputRow",
                                  children: [(0, yp.jsx)(wp, {
                                    name: "magnifying-glass"
                                  }), (0, yp.jsx)("input", {
                                    ref: Pp,
                                    autoFocus: !0,
                                    value: Sp,
                                    placeholder: "Search methods, callbacks, settings and guides\u2026",
                                    "aria-label": "Search the docs",
                                    "aria-controls": "DocsSearchResults",
                                    "aria-activedescendant": Up.length > 0 ? `DocsSearchResult-${Yp}` : void 0,
                                    onChange: pp => {
                                      Lp(pp.target.value)
                                    },
                                    onKeyDown: pp => {
                                      if ("ArrowDown" === pp.key || "ArrowUp" === pp.key) {
                                        pp.preventDefault();
                                        const ip = "ArrowDown" === pp.key ? 1 : -1;
                                        Dp((Yp + ip + Up.length) % Math.max(Up.length, 1))
                                      } else "Enter" === pp.key && Up[Yp] && vp(Up[Yp])
                                    }
                                  }), (0, yp.jsx)("kbd", {
                                    children: "Esc"
                                  })]
                                }), (0, yp.jsxs)("ul", {
                                  id: "DocsSearchResults",
                                  ref: Ap,
                                  className: "DocsSearchResults",
                                  role: "listbox",
                                  children: [!Wp && (0, yp.jsx)("li", {
                                    className: "DocsSearchHint",
                                    children: "Jump to a page"
                                  }), Up.map(((pp, ip) => {
                                    var cp;
                                    return (0, yp.jsxs)("li", {
                                      id: `DocsSearchResult-${ip}`,
                                      role: "option",
                                      "aria-selected": ip === Yp,
                                      className: Ip()("DocsSearchResult", {
                                        Active: ip === Yp
                                      }),
                                      onMouseMove: () => {
                                        Dp(ip)
                                      },
                                      onClick: () => {
                                        vp(pp)
                                      },
                                      children: [(0, yp.jsx)(wp, {
                                        name: pp.page.icon
                                      }), (0, yp.jsxs)("div", {
                                        className: "DocsSearchResultText",
                                        children: [(0, yp.jsx)("div", {
                                          className: "DocsSearchResultTitle",
                                          children: (0, yp.jsx)(nI, {
                                            text: pp.title,
                                            query: Wp
                                          })
                                        }), pp.text && (0, yp.jsx)("div", {
                                          className: "DocsSearchResultSnippet",
                                          children: (0, yp.jsx)(nI, {
                                            text: aI(pp.text, Wp),
                                            query: Wp
                                          })
                                        })]
                                      }), (0, yp.jsx)("span", {
                                        className: "DocsSearchResultMeta",
                                        children: "Page" === pp.kind ? "Page" : null !== (cp = pp.listedUnder) && void 0 !== cp ? cp : `${pp.kind} \xb7 ${pp.page.title}`
                                      })]
                                    }, `${pp.page.id}#${pp.anchor}`)
                                  })), Wp && 0 === Up.length && (0, yp.jsxs)("li", {
                                    className: "DocsSearchHint",
                                    children: ["Nothing matches \u201c", Sp, "\u201d."]
                                  })]
                                })]
                              })
                            })
                          }

                          function gI(pp, ip) {
                            if (ip < 10) return `${pp.toFixed(1)}s`;
                            const cp = Math.floor(pp);
                            return `${Math.floor(cp/60)}:${String(cp%60).padStart(2,"0")}`
                          }

                          function GI() {
                            const pp = WO((pp => pp.track)),
                              ip = WO((pp => pp.volume)),
                              [cp, op] = (0, Op.useState)(0),
                              Sp = (0, Op.useRef)(oO);
                            if ((0, Op.useEffect)((() => {
                                if (!pp) return;
                                if (op(vO()), "playing" !== pp.status) return;
                                let ip = 0;
                                const cp = () => {
                                  op(vO()), ip = requestAnimationFrame(cp)
                                };
                                return ip = requestAnimationFrame(cp), () => {
                                  cancelAnimationFrame(ip)
                                }
                              }), [pp]), !pp) return null;
                            const xp = "paused" !== pp.status,
                              Lp = Math.min(cp, pp.duration);
                            return (0, yp.jsx)("div", {
                              className: "DocsSoundPlayerDock",
                              children: (0, yp.jsxs)("section", {
                                className: "DocsSoundPlayer",
                                "aria-label": "Sound player",
                                children: [(0, yp.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerToggle",
                                  "aria-label": xp ? `Pause ${pp.name}` : `Play ${pp.name}`,
                                  onClick: wO,
                                  children: (0, yp.jsx)(wp, {
                                    name: xp ? "pause" : "play"
                                  })
                                }), (0, yp.jsxs)("div", {
                                  className: "DocsSoundPlayerTrack",
                                  children: [(0, yp.jsxs)("div", {
                                    className: "DocsSoundPlayerTitle",
                                    children: [(0, yp.jsx)("code", {
                                      children: pp.name
                                    }), (0, yp.jsx)("span", {
                                      children: pp.isSong ? "Song" : "Sound"
                                    })]
                                  }), (0, yp.jsxs)("div", {
                                    className: "DocsSoundPlayerScrubber",
                                    children: [(0, yp.jsx)("span", {
                                      children: gI(Lp, pp.duration)
                                    }), (0, yp.jsx)("input", {
                                      type: "range",
                                      min: 0,
                                      max: pp.duration || 1,
                                      step: .01,
                                      value: Lp,
                                      disabled: 0 === pp.duration,
                                      "aria-label": "Position",
                                      "aria-valuetext": `${gI(Lp,pp.duration)} of ${gI(pp.duration,pp.duration)}`,
                                      onChange: pp => {
                                        const ip = Number(pp.target.value);
                                        ! function(pp) {
                                          var ip;
                                          YO = pp, null === (ip = xO) || void 0 === ip || ip.seek(pp)
                                        }(ip), op(ip)
                                      }
                                    }), (0, yp.jsx)("span", {
                                      children: pp.duration > 0 ? gI(pp.duration, pp.duration) : "\u2013"
                                    })]
                                  })]
                                }), (0, yp.jsxs)("div", {
                                  className: "DocsSoundPlayerVolume",
                                  children: [(0, yp.jsx)("button", {
                                    type: "button",
                                    "aria-label": 0 === ip ? "Unmute" : "Mute",
                                    onClick: () => {
                                      0 === ip ? tO(Sp.current) : (Sp.current = ip, tO(0))
                                    },
                                    children: (0, yp.jsx)(wp, {
                                      name: "volume",
                                      className: Ip()({
                                        Muted: 0 === ip
                                      })
                                    })
                                  }), (0, yp.jsx)("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: ip,
                                    "aria-label": "Volume",
                                    onChange: pp => {
                                      tO(Number(pp.target.value))
                                    }
                                  })]
                                }), (0, yp.jsx)("button", {
                                  type: "button",
                                  className: "DocsSoundPlayerClose",
                                  "aria-label": "Close the player",
                                  onClick: () => {
                                    var ip;
                                    null === (ip = document.querySelector(`[data-docs-track="${CSS.escape(IO(pp.name,pp.isSong))}"]`)) || void 0 === ip || ip.focus(), HO()
                                  },
                                  children: (0, yp.jsx)(wp, {
                                    name: "cross"
                                  })
                                })]
                              })
                            })
                          }
                          var rI = cp(44);
                          const ZI = "docsTheme",
                            zI = window.matchMedia("(prefers-color-scheme: light)");

                          function sI(pp) {
                            let {
                              theme: ip,
                              onChange: cp
                            } = pp;
                            const Op = "dark" === ip ? "light" : "dark";
                            return (0, yp.jsx)("button", {
                              type: "button",
                              className: "DocsIconButton DocsThemeToggle",
                              "aria-label": `Switch to ${Op} theme`,
                              title: `Switch to ${Op} theme`,
                              onClick: () => {
                                cp(Op)
                              },
                              children: (0, yp.jsx)(wp, {
                                name: "dark" === ip ? "moon" : "sun"
                              })
                            })
                          }
                          const KI = "https://github.com/Bloxdy/code-api",
                            VI = "https://discord.gg/playbloxd",
                            pS = 180,
                            iS = /Mac|iPhone|iPad/.test(navigator.userAgent);

                          function cS(pp) {
                            let {
                              basePath: ip,
                              activePageId: cp,
                              onNavigate: Op
                            } = pp;
                            return (0, yp.jsx)("nav", {
                              className: "DocsNav",
                              "aria-label": "Documentation",
                              children: Tp.map((pp => (0, yp.jsxs)("div", {
                                className: "DocsNavGroup",
                                children: [(0, yp.jsx)("div", {
                                  className: "DocsNavGroupTitle",
                                  children: pp.title
                                }), pp.pageIds.map((pp => {
                                  var op;
                                  const xp = fp(pp);
                                  return (0, yp.jsxs)(Sp.c, {
                                    to: gp(ip, xp),
                                    className: Ip()("DocsNavLink", {
                                      Active: xp.id === cp
                                    }),
                                    "aria-current": xp.id === cp ? "page" : void 0,
                                    onClick: Op,
                                    children: [(0, yp.jsx)(wp, {
                                      name: xp.icon
                                    }), (0, yp.jsx)("span", {
                                      children: null !== (op = xp.navTitle) && void 0 !== op ? op : xp.title
                                    })]
                                  }, xp.id)
                                }))]
                              }, pp.title)))
                            })
                          }

                          function OS(pp) {
                            let {
                              basePath: ip,
                              pageId: cp
                            } = pp;
                            const Op = Tp.flatMap((pp => pp.pageIds)),
                              op = Op.indexOf(cp),
                              Ip = op > 0 ? fp(Op[op - 1]) : null,
                              xp = op < Op.length - 1 ? fp(Op[op + 1]) : null;
                            return (0, yp.jsxs)("nav", {
                              className: "DocsPager",
                              "aria-label": "Pages",
                              children: [Ip ? (0, yp.jsxs)(Sp.c, {
                                className: "DocsPagerLink Previous",
                                to: gp(ip, Ip),
                                children: [(0, yp.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Previous"
                                }), (0, yp.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: Ip.title
                                })]
                              }) : (0, yp.jsx)("span", {}), xp && (0, yp.jsxs)(Sp.c, {
                                className: "DocsPagerLink Next",
                                to: gp(ip, xp),
                                children: [(0, yp.jsx)("span", {
                                  className: "DocsPagerLabel",
                                  children: "Next"
                                }), (0, yp.jsx)("span", {
                                  className: "DocsPagerTitle",
                                  children: xp.title
                                })]
                              })]
                            })
                          }

                          function oS(pp) {
                            let {
                              basePath: ip,
                              embedded: cp = !1
                            } = pp;
                            const {
                              pageSlug: op = ""
                            } = (0, xp.A)(), Yp = (0, xp.r)(), Dp = (0, xp.t)(), Ap = (Pp = op, Np.find((pp => pp.slug === Pp)));
                            var Pp;
                            const [Wp, Up] = function() {
                              const [pp, ip] = (0, Op.useState)((() => {
                                const pp = rI.h.getItem(ZI);
                                return "dark" === pp || "light" === pp ? pp : null
                              })), [cp, op] = (0, Op.useState)(zI.matches ? "light" : "dark");
                              return (0, Op.useEffect)((() => {
                                const pp = () => {
                                  op(zI.matches ? "light" : "dark")
                                };
                                return zI.addEventListener("change", pp), () => {
                                  zI.removeEventListener("change", pp)
                                }
                              }), []), [null !== pp && void 0 !== pp ? pp : cp, pp => {
                                rI.h.setItem(ZI, pp), ip(pp)
                              }]
                            }(), [vp, tp] = (0, Op.useState)(null), [Hp, dp] = (0, Op.useState)(!1), [ep, jp] = (0, Op.useState)(!1), [kp, Rp] = (0, Op.useState)([]), qp = function(pp, ip) {
                              const [cp, op] = (0, Op.useState)("");
                              return (0, Op.useEffect)((() => {
                                if (!ip) return;
                                let cp = 0;
                                const Op = () => {
                                    var Op, Ip;
                                    cp = 0;
                                    const Sp = ip.getBoundingClientRect().top + pS;
                                    let xp = null !== (Op = null === (Ip = pp[0]) || void 0 === Ip ? void 0 : Ip.anchor) && void 0 !== Op ? Op : "";
                                    for (const ip of pp) {
                                      const pp = document.getElementById(ip.anchor);
                                      pp && pp.getBoundingClientRect().top <= Sp && (xp = ip.anchor)
                                    }
                                    ip.scrollTop + ip.clientHeight >= ip.scrollHeight - 2 && ip.scrollTop > 0 && pp.length > 0 && (xp = pp[pp.length - 1].anchor), op(xp)
                                  },
                                  Ip = () => {
                                    cp || (cp = requestAnimationFrame(Op))
                                  };
                                return Op(), ip.addEventListener("scroll", Ip, {
                                  passive: !0
                                }), () => {
                                  cancelAnimationFrame(cp), ip.removeEventListener("scroll", Ip)
                                }
                              }), [pp, ip]), cp
                            }(kp, vp), Mp = "" === op && Yp.hash ? function(pp) {
                              const ip = (0, mp.r)(pp);
                              if (ap(fp("welcome"), ip)) return null;
                              const cp = Object.hasOwn(Fp, ip) ? Fp[ip] : null;
                              if (cp) return {
                                page: fp(cp.pageId),
                                anchor: cp.anchor
                              };
                              const Op = fp("readme");
                              return ap(Op, ip) ? {
                                page: Op,
                                anchor: ip
                              } : np(`#${ip}`)
                            }(Yp.hash) : null;
                            (0, Op.useEffect)((() => (Lp.c.set({
                              musicOnFromPage: !1
                            }), () => {
                              Lp.c.set({
                                musicOnFromPage: !0
                              }), HO()
                            })), []), (0, Op.useEffect)((() => {
                              const pp = pp => {
                                const ip = pp.target;
                                if (ip.closest(".DocsTextDialog")) return;
                                const cp = ip.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(ip.tagName);
                                "k" === pp.key && (pp.metaKey || pp.ctrlKey) || "/" === pp.key && !cp ? (pp.preventDefault(), jp(!0)) : "Escape" === pp.key && dp(!1)
                              };
                              return window.addEventListener("keydown", pp), () => {
                                window.removeEventListener("keydown", pp)
                              }
                            }), []);
                            const Cp = (0, Op.useRef)(null);
                            (0, Op.useLayoutEffect)((() => {
                              var pp, ip;
                              if (!vp) return;
                              const cp = Cp.current === Yp.pathname;
                              Cp.current = Yp.pathname;
                              const Op = (0, mp.r)(Yp.hash),
                                op = Op ? document.getElementById(Op) : null;
                              if (null === (pp = vp.querySelector(".DocsTargeted")) || void 0 === pp || pp.classList.remove("DocsTargeted"), null === op || void 0 === op || null === (ip = op.closest(".DocsCard, .DocsParam, .DocsTile, .DocsSoundTile")) || void 0 === ip || ip.classList.add("DocsTargeted"), op) {
                                var Ip;
                                const pp = op.matches(".DocsTile, .DocsSoundTile, .DocsCatalogueTile");
                                (null !== (Ip = op.closest(".DocsChangelogEntry")) && void 0 !== Ip ? Ip : op).scrollIntoView({
                                  block: pp ? "center" : "start",
                                  behavior: cp ? "smooth" : "auto"
                                })
                              } else cp || vp.scrollTo({
                                top: 0
                              })
                            }), [vp, Yp.pathname, Yp.hash, Yp.key]);
                            const Ep = (0, Op.useCallback)((() => {
                                dp(!1)
                              }), []),
                              Xp = (0, Op.useCallback)((pp => {
                                Dp({
                                  hash: pp
                                })
                              }), [Dp]);
                            if (Mp) return (0, yp.jsx)(xp.d, {
                              replace: !0,
                              to: gp(ip, Mp.page, Mp.anchor)
                            });
                            if (!Ap) return (0, yp.jsx)(xp.d, {
                              replace: !0,
                              to: ip
                            });
                            const lp = cp ? "div" : "main";
                            return (0, yp.jsx)(Ui.Provider, {
                              value: ip,
                              children: (0, yp.jsx)(wi.Provider, {
                                value: vp,
                                children: (0, yp.jsxs)("div", {
                                  ref: tp,
                                  className: Ip()("DocsSite", {
                                    Embedded: cp,
                                    NavOpen: Hp
                                  }),
                                  "data-theme": Wp,
                                  children: [(0, yp.jsxs)("header", {
                                    className: "DocsTopBar",
                                    children: [(0, yp.jsx)("button", {
                                      type: "button",
                                      className: "DocsIconButton DocsMenuButton",
                                      "aria-label": Hp ? "Close menu" : "Open menu",
                                      "aria-expanded": Hp,
                                      onClick: () => {
                                        dp(!Hp)
                                      },
                                      children: (0, yp.jsx)(wp, {
                                        name: Hp ? "cross" : "menu"
                                      })
                                    }), (0, yp.jsxs)(Sp.c, {
                                      to: ip,
                                      className: "DocsBrand",
                                      children: [(0, yp.jsx)("img", {
                                        src: "/favicon.svg",
                                        alt: "",
                                        width: 28,
                                        height: 28
                                      }), (0, yp.jsx)("span", {
                                        className: "DocsBrandName",
                                        children: "Bloxd"
                                      }), (0, yp.jsx)("span", {
                                        className: "DocsBrandTag",
                                        children: "Code API"
                                      })]
                                    }), (0, yp.jsxs)("button", {
                                      type: "button",
                                      className: "DocsSearchTrigger",
                                      onClick: () => {
                                        jp(!0)
                                      },
                                      children: [(0, yp.jsx)(wp, {
                                        name: "magnifying-glass"
                                      }), (0, yp.jsx)("span", {
                                        className: "DocsSearchTriggerLabel",
                                        children: "Search docs"
                                      }), (0, yp.jsxs)("kbd", {
                                        children: [iS ? "\u2318" : "Ctrl", " K"]
                                      })]
                                    }), (0, yp.jsxs)("div", {
                                      className: "DocsTopBarLinks",
                                      children: [(0, yp.jsxs)("a", {
                                        href: VI,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, yp.jsx)(wp, {
                                          name: "discord"
                                        }), (0, yp.jsx)("span", {
                                          children: "Discord"
                                        })]
                                      }), (0, yp.jsxs)("a", {
                                        href: KI,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "DocsTopBarLink",
                                        children: [(0, yp.jsx)(wp, {
                                          name: "external-link"
                                        }), (0, yp.jsx)("span", {
                                          children: "GitHub"
                                        })]
                                      }), !cp && (0, yp.jsxs)(Sp.c, {
                                        to: "/",
                                        className: "DocsTopBarLink DocsPlayLink",
                                        children: [(0, yp.jsx)(wp, {
                                          name: "play"
                                        }), (0, yp.jsx)("span", {
                                          children: "Play Bloxd"
                                        })]
                                      }), (0, yp.jsx)(sI, {
                                        theme: Wp,
                                        onChange: Up
                                      })]
                                    })]
                                  }), (0, yp.jsxs)("div", {
                                    className: "DocsSiteBody",
                                    children: [(0, yp.jsx)("aside", {
                                      className: "DocsSidebar",
                                      children: (0, yp.jsx)(cS, {
                                        basePath: ip,
                                        activePageId: Ap.id,
                                        onNavigate: Ep
                                      })
                                    }), (0, yp.jsx)("div", {
                                      className: "DocsNavScrim",
                                      onClick: Ep
                                    }), (0, yp.jsxs)(lp, {
                                      className: "DocsMain",
                                      children: [(0, yp.jsx)(qI, {
                                        page: Ap,
                                        onTocChange: Rp
                                      }, Ap.id), (0, yp.jsx)(OS, {
                                        basePath: ip,
                                        pageId: Ap.id
                                      })]
                                    }), (0, yp.jsx)("aside", {
                                      className: Ip()("DocsToc", {
                                        Timeline: "changelog" === Ap.layout
                                      }),
                                      "aria-label": "On this page",
                                      children: (0, yp.jsx)(XI, {
                                        isChangelog: "changelog" === Ap.layout,
                                        toc: kp,
                                        activeAnchor: qp,
                                        onNavigate: Xp
                                      })
                                    })]
                                  }), (0, yp.jsx)(GI, {}), ep && (0, yp.jsx)(FI, {
                                    basePath: ip,
                                    onClose: () => {
                                      jp(!1)
                                    }
                                  })]
                                })
                              })
                            })
                          }
                        }, 4844: (pp, ip, cp) => {
                          cp.d(ip, {
                            d: () => Op,
                            g: () => Sp,
                            k: () => wp,
                            n: () => Up,
                            q: () => xp,
                            r: () => op,
                            s: () => Ip,
                            t: () => yp,
                            w: () => Wp,
                            x: () => Pp
                          });
                          const Op = /\[([^\]]+)\]\((#[^)]+|[^)\s]+)\)/g;

                          function op(pp) {
                            try {
                              return decodeURIComponent(pp.slice(1))
                            } catch {
                              return pp.slice(1)
                            }
                          }

                          function Ip(pp) {
                            return pp.replace(/`/g, "").trim().replace(/[^\w{}$-]+/g, "-").replace(/^-+|-+$/g, "")
                          }
                          const Sp = new RegExp(`${/(`{1,2})(.+?)\1(?!`)|\*\*(.+?)\*\*|/.source}${Op.source}`, "g");

                          function xp(pp, ip) {
                            return 2 === pp.length ? ip.replace(/^ (.*) $/, "$1") : ip
                          }

                          function Lp(pp) {
                            return "" === pp.trim()
                          }

                          function Yp(pp) {
                            const ip = [];
                            for (const cp of pp.trim().replace(/^\|/, "").replace(/\|$/, "").split("|")) ip.length > 0 && ip[ip.length - 1].endsWith("\\") ? ip[ip.length - 1] += `|${cp}` : ip.push(cp);
                            return ip.map((pp => pp.trim().replaceAll("\\|", "|")))
                          }
                          const Dp = /^([ \t]*)([-*]|\d+\.)[ \t]+(.*)$/;

                          function Ap(pp) {
                            const ip = [],
                              cp = [{
                                indent: -1,
                                items: ip
                              }];
                            let Op = null;
                            for (const op of pp) {
                              const pp = op.match(Dp);
                              if (!pp) {
                                Op && (Op.text += ` ${op.trim()}`);
                                continue
                              }
                              const ip = pp[1].replace(/\t/g, "  ").length;
                              for (; ip <= cp[cp.length - 1].indent;) cp.pop();
                              Op = {
                                text: pp[3].trim(),
                                children: []
                              }, cp[cp.length - 1].items.push(Op), cp.push({
                                indent: ip,
                                items: Op.children
                              })
                            }
                            return ip
                          }

                          function Pp(pp) {
                            const ip = pp.replace(/\r\n/g, "\n").split("\n"),
                              cp = [];
                            let Op = 0;
                            for (; Op < ip.length;) {
                              const pp = ip[Op];
                              if (Lp(pp)) {
                                Op++;
                                continue
                              }
                              const op = pp.match(/^\s*```\s*(\w*)\s*$/);
                              if (op) {
                                const pp = [];
                                for (Op++; Op < ip.length && !/^\s*```\s*$/.test(ip[Op]);) pp.push(ip[Op]), Op++;
                                Op++, cp.push({
                                  kind: "code",
                                  lang: op[1] || "text",
                                  code: pp.join("\n").replace(/\s+$/, "")
                                });
                                continue
                              }
                              const Sp = pp.match(/^(#{1,6})\s+(.+?)\s*#*$/);
                              if (Sp) {
                                const pp = Sp[2].trim();
                                cp.push({
                                  kind: "heading",
                                  level: Sp[1].length,
                                  text: pp,
                                  anchor: Ip(pp)
                                }), Op++;
                                continue
                              }
                              if (/^\s*(-{3,}|\*{3,})\s*$/.test(pp)) {
                                cp.push({
                                  kind: "rule"
                                }), Op++;
                                continue
                              }
                              if (pp.trim().startsWith("|") && Op + 1 < ip.length && /^\s*\|[\s:|-]+\|\s*$/.test(ip[Op + 1])) {
                                const op = Yp(pp),
                                  Ip = [];
                                for (Op += 2; Op < ip.length && ip[Op].trim().startsWith("|");) Ip.push(Yp(ip[Op])), Op++;
                                cp.push({
                                  kind: "table",
                                  header: op,
                                  rows: Ip
                                });
                                continue
                              }
                              if (pp.startsWith(">")) {
                                const pp = [];
                                for (; Op < ip.length && ip[Op].startsWith(">");) pp.push(ip[Op].replace(/^>\s?/, "")), Op++;
                                cp.push({
                                  kind: "quote",
                                  blocks: Pp(pp.join("\n"))
                                });
                                continue
                              }
                              if (Dp.test(pp)) {
                                const op = [],
                                  Ip = /^\s*\d+\./.test(pp);
                                for (; Op < ip.length && !Lp(ip[Op]) && (Dp.test(ip[Op]) || /^\s+\S/.test(ip[Op]));) op.push(ip[Op]), Op++;
                                cp.push({
                                  kind: "list",
                                  ordered: Ip,
                                  items: Ap(op)
                                });
                                continue
                              }
                              const xp = [];
                              for (; Op < ip.length && !Lp(ip[Op]) && !/^\s*```/.test(ip[Op]) && !/^#{1,6}\s/.test(ip[Op]) && !ip[Op].startsWith(">") && !Dp.test(ip[Op]) && (!ip[Op].trim().startsWith("|") || 0 !== xp.length);) xp.push(ip[Op].trim()), Op++;
                              0 === xp.length && (xp.push(ip[Op].trim()), Op++), cp.push({
                                kind: "paragraph",
                                text: xp.join(" ")
                              })
                            }
                            return cp
                          }

                          function Wp(pp) {
                            let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            const cp = Pp(pp);
                            let Op = "";
                            const op = [],
                              Ip = [],
                              Sp = new Map;
                            for (const Yp of cp) {
                              if ("heading" === Yp.kind) {
                                var xp;
                                const pp = (null !== (xp = Sp.get(Yp.anchor)) && void 0 !== xp ? xp : 0) + 1;
                                Sp.set(Yp.anchor, pp), pp > 1 && (Yp.anchor = `${Yp.anchor}-${pp}`)
                              }
                              if ("heading" === Yp.kind && 1 === Yp.level && !Op) {
                                Op = Yp.text;
                                continue
                              }
                              if ("heading" === Yp.kind && Yp.level <= ip) {
                                Ip.push({
                                  heading: Yp,
                                  blocks: []
                                });
                                continue
                              }
                              const pp = Ip.at(-1);
                              pp ? pp.blocks.push(Yp) : op.push(Yp)
                            }
                            const Lp = pp => {
                              for (;
                                "rule" === (null === (ip = pp.at(-1)) || void 0 === ip ? void 0 : ip.kind);) {
                                var ip;
                                pp.pop()
                              }
                            };
                            Lp(op);
                            for (const Yp of Ip) Lp(Yp.blocks);
                            return {
                              title: Op,
                              intro: op,
                              sections: Ip
                            }
                          }

                          function yp(pp) {
                            return [{
                              heading: null,
                              blocks: pp.intro
                            }, ...pp.sections.map((pp => ({
                              heading: pp.heading,
                              blocks: pp.blocks
                            })))]
                          }

                          function Up(pp) {
                            return pp.flatMap((pp => "code" === pp.kind ? [pp] : "quote" === pp.kind ? Up(pp.blocks) : []))
                          }

                          function wp(pp) {
                            switch (pp.kind) {
                              case "heading":
                              case "paragraph":
                                return pp.text;
                              case "code":
                                return pp.code;
                              case "table":
                                return [pp.header, ...pp.rows].map((pp => pp.join(" "))).join(" ");
                              case "list": {
                                const ip = pp => pp.map((pp => `${pp.text} ${ip(pp.children)}`)).join(" ");
                                return ip(pp.items)
                              }
                              case "quote":
                                return pp.blocks.map(wp).join(" ");
                              case "rule":
                                return ""
                            }
                          }
                        }, 4956: (pp, ip, cp) => {
                          cp.d(ip, {
                            d: () => xp
                          });
                          var Op = cp(62),
                            op = cp(322),
                            Ip = cp(1941),
                            Sp = cp(1112);

                          function xp(pp) {
                            let {
                              text: ip
                            } = pp;
                            const cp = [];
                            let xp = "";
                            return (0, op.nc)(ip).forEach(((pp, ip) => {
                              if ("string" === typeof pp || !(0, Ip.f)(pp.icon)) return void(xp += "string" === typeof pp ? pp : pp.icon);
                              const op = Math.max(0, xp.trimEnd().search(/\S{1,12}$/));
                              cp.push((0, Sp.jsxs)(Op.Fragment, {
                                children: [xp.slice(0, op), (0, Sp.jsxs)("span", {
                                  className: "InlineIconTextGlue",
                                  children: [xp.slice(op), (0, Sp.jsx)("span", {
                                    className: "InlineIconTextIcon",
                                    role: "img",
                                    "aria-label": pp.icon,
                                    children: (0, Sp.jsx)(Ip.d, {
                                      itemName: pp.icon,
                                      amount: 0
                                    })
                                  })]
                                })]
                              }, ip)), xp = ""
                            })), cp.push(xp), (0, Sp.jsx)(Sp.Fragment, {
                              children: cp
                            })
                          }
                        }, 4876: (pp, ip, cp) => {
                          cp.d(ip, {
                            e: () => tp,
                            c: () => vp
                          });
                          var Op = cp(62),
                            op = cp(1476),
                            Ip = cp(1929),
                            Sp = cp(4880),
                            xp = cp(1112);
                          const Lp = (0, Op.memo)((function(pp) {
                            let {
                              initialParameters: ip
                            } = pp;
                            const cp = (0, Op.useRef)(null),
                              op = (0, Op.useRef)(null),
                              Lp = (0, Op.useRef)(0),
                              Yp = (0, Op.useRef)(null),
                              Dp = ip.description,
                              Ap = ip.Yi,
                              {
                                scale: Pp,
                                rotation: Wp
                              } = null !== ip && void 0 !== ip ? ip : {},
                              yp = (0, Sp.d)();
                            return (0, Op.useEffect)((() => {
                              const pp = yp.onFrame((() => {
                                const pp = yp.getState();
                                if (!pp.isActive || !cp.current || !op.current) return;
                                const ip = pp.state;
                                if (cp.current.value = ip.progress, ip.clickCount > Lp.current) {
                                  Lp.current = ip.clickCount;
                                  const pp = op.current;
                                  pp.classList.add("pulse"), Yp.current = setTimeout((() => {
                                    pp.classList.remove("pulse")
                                  }), 100)
                                }
                              }));
                              return () => {
                                clearTimeout(Yp.current), pp()
                              }
                            }), [yp]), (0, xp.jsx)(xp.Fragment, {
                              children: (0, xp.jsxs)("div", {
                                className: "QTEProgressBarWrapper",
                                style: {
                                  ...null !== Pp && {
                                    "--scale": Pp
                                  },
                                  ...null !== Wp && {
                                    "--rotation": `${Wp}deg`
                                  }
                                },
                                children: [(0, xp.jsx)("progress", {
                                  id: "catch",
                                  max: 100,
                                  className: "QTEProgressBar",
                                  ref: cp
                                }), (0, xp.jsx)("span", {
                                  className: "QTEProgressBarInteractionIndicator",
                                  ref: op,
                                  children: (0, xp.jsx)(Ip.e, {
                                    text: [{
                                      icon: Ap
                                    }]
                                  })
                                }), (0, xp.jsx)("div", {
                                  className: "QTEProgressBarDescription",
                                  children: (0, xp.jsx)(Ip.e, {
                                    text: Dp
                                  })
                                })]
                              })
                            })
                          }));
                          var Yp = cp(1049),
                            Dp = cp.n(Yp);
                          const Ap = 2 * Math.PI * 90,
                            Pp = (0, Op.memo)((function(pp) {
                              let {
                                initialParameters: ip
                              } = pp;
                              const cp = (0, Op.useRef)(null),
                                op = (0, Op.useRef)(null),
                                Lp = (0, Op.useRef)(null),
                                Yp = ip.label,
                                Pp = ip.icon,
                                Wp = ip.Pi,
                                {
                                  scale: yp,
                                  rotation: Up,
                                  Wi: wp
                                } = null !== ip && void 0 !== ip ? ip : {},
                                vp = (0, Sp.d)();
                              return (0, Op.useEffect)((() => {
                                const pp = vp.onFrame((() => {
                                  var pp, ip;
                                  const Op = vp.getState();
                                  if (!Op.isActive || !op.current) return;
                                  const Ip = Op.state,
                                    Sp = null !== (pp = Ip.timeRemaining) && void 0 !== pp ? pp : 0,
                                    xp = null !== (ip = Ip.Ai) && void 0 !== ip ? ip : 1,
                                    Yp = Ap * (1 - Sp / xp);
                                  op.current.style.strokeDashoffset = `${Yp}`, cp.current && (cp.current.style.opacity = Sp > 0 ? "1" : "0"), Lp.current && Wp && (Lp.current.textContent = `${(Sp/1e3).toFixed(1)}s`)
                                }));
                                return () => {
                                  pp()
                                }
                              }), [vp, Wp]), (0, xp.jsxs)("div", {
                                className: "QTETimedClick",
                                ref: cp,
                                style: {
                                  ...null !== yp && {
                                    "--scale": yp
                                  },
                                  ...null !== Up && {
                                    "--rotation": `${Up}deg`
                                  }
                                },
                                children: [(0, xp.jsxs)("div", {
                                  className: "QTETimedClickCircleContainer",
                                  children: [(0, xp.jsxs)("svg", {
                                    className: "QTETimedClickCircularProgress",
                                    viewBox: "0 0 200 200",
                                    children: [(0, xp.jsx)("circle", {
                                      className: "QTETimedClickProgressTrack",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12"
                                    }), (0, xp.jsx)("circle", {
                                      className: "QTETimedClickProgressArc",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      fill: "none",
                                      strokeWidth: "12",
                                      strokeLinecap: "square",
                                      strokeDasharray: Ap,
                                      ref: op
                                    })]
                                  }), (0, xp.jsx)("div", {
                                    className: "QTETimedClickCenterContent",
                                    children: (0, xp.jsx)(Ip.e, {
                                      text: [{
                                        icon: Pp
                                      }],
                                      className: Dp()("QTETimedClickInnerText", {
                                        QTETimedClickBreathe: wp
                                      })
                                    })
                                  })]
                                }), (0, xp.jsxs)("div", {
                                  className: "QTETimedClickRightTextContainer",
                                  children: [(0, xp.jsx)(Ip.e, {
                                    text: Yp,
                                    className: "QTETimedClickLabelText"
                                  }), Wp && (0, xp.jsx)("span", {
                                    className: "QTETimedClickTimeText",
                                    ref: Lp
                                  })]
                                })]
                              })
                            })),
                            Wp = (0, Op.memo)((function(pp) {
                              let {
                                initialParameters: ip
                              } = pp;
                              const cp = (0, Op.useRef)(null),
                                op = (0, Op.useRef)(null),
                                Lp = (0, Op.useRef)(null),
                                Yp = (0, Op.useRef)(!1),
                                Dp = ip.description,
                                Ap = null === ip || void 0 === ip ? void 0 : ip.icon,
                                Pp = (0, Sp.d)();
                              return (0, Op.useEffect)((() => {
                                const pp = Pp.onFrame((() => {
                                  const pp = Pp.getState();
                                  if (!pp.isActive) return;
                                  const ip = pp.state;
                                  if (cp.current) {
                                    const pp = 100 * (ip.catchZonePosition - ip.Ui / 2);
                                    cp.current.style.left = `${pp}%`, cp.current.style.width = 100 * ip.Ui + "%", ip.isCatching !== Yp.current && (Yp.current = ip.isCatching, ip.isCatching ? cp.current.classList.add("catching") : cp.current.classList.remove("catching"))
                                  }
                                  op.current && (op.current.style.left = 100 * ip.moverPosition + "%"), Lp.current && (Lp.current.value = ip.progress)
                                }));
                                return () => {
                                  pp()
                                }
                              }), [Pp]), (0, xp.jsxs)("div", {
                                className: "QTEGravityBar",
                                children: [(0, xp.jsx)("div", {
                                  className: "QTEGravityBarDescription",
                                  children: (0, xp.jsx)(Ip.e, {
                                    text: Dp
                                  })
                                }), (0, xp.jsx)("progress", {
                                  max: 100,
                                  className: "QTEGravityBarProgress",
                                  ref: Lp
                                }), (0, xp.jsxs)("div", {
                                  className: "QTEGravityBarTrack",
                                  children: [(0, xp.jsx)("div", {
                                    className: "QTEGravityBarCatchZone",
                                    ref: cp
                                  }), (0, xp.jsx)("div", {
                                    className: "QTEGravityBarMover",
                                    ref: op,
                                    children: (0, xp.jsx)("span", {
                                      children: Ap && (0, xp.jsx)(Ip.e, {
                                        text: [{
                                          icon: Ap,
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
                          var yp = cp(640);
                          const Up = (0, Op.memo)((function(pp) {
                              let {
                                initialParameters: ip
                              } = pp;
                              const cp = (0, Op.useRef)(null),
                                op = ip.label,
                                Lp = ip.qi,
                                {
                                  icon: Yp,
                                  scale: Dp,
                                  rotation: Ap
                                } = null !== ip && void 0 !== ip ? ip : {},
                                Pp = 100 * (.5 - Lp / 2),
                                Wp = 100 * Lp,
                                Up = (0, Sp.d)();
                              return (0, Op.useEffect)((() => {
                                const pp = Up.onFrame((() => {
                                  const pp = Up.getState();
                                  if (!pp.isActive || !cp.current) return;
                                  const ip = pp.state;
                                  cp.current.style.left = 100 * ip.markerPosition + "%"
                                }));
                                return () => {
                                  pp()
                                }
                              }), [Up]), (0, xp.jsxs)("div", {
                                className: "QTEPrecisionBarWrapper",
                                style: {
                                  ...!(0, yp.G)(Dp) && {
                                    "--scale": Dp
                                  },
                                  ...!(0, yp.G)(Ap) && {
                                    "--rotation": `${Ap}deg`
                                  }
                                },
                                children: [Yp && (0, xp.jsx)(Ip.e, {
                                  text: [{
                                    icon: Yp
                                  }],
                                  className: "QTEPrecisionBarIcon"
                                }), (0, xp.jsxs)("div", {
                                  className: "QTEPrecisionBarTrack",
                                  children: [(0, xp.jsx)("div", {
                                    className: "QTEPrecisionBarSuccessZone",
                                    style: {
                                      left: `${Pp}%`,
                                      width: `${Wp}%`
                                    }
                                  }), (0, xp.jsx)("div", {
                                    className: "QTEPrecisionBarMarker",
                                    ref: cp
                                  })]
                                }), (0, xp.jsx)("div", {
                                  className: "QTEPrecisionBarLabel",
                                  children: (0, xp.jsx)(Ip.e, {
                                    text: op
                                  })
                                })]
                              })
                            })),
                            wp = (0, Op.memo)((function(pp) {
                              let {
                                initialParameters: ip
                              } = pp;
                              const cp = (0, Op.useRef)(null),
                                [op, Lp] = (0, Op.useState)((() => new Array(ip.Ci).fill("pending"))),
                                [Yp, Dp] = (0, Op.useState)((() => {
                                  const pp = ip.li;
                                  return (0, yp.G)(pp) || pp <= 0 ? [] : new Array(pp).fill("pending")
                                })),
                                Ap = ip.label,
                                {
                                  icon: Pp
                                } = ip,
                                Wp = (0, Op.useRef)(0),
                                Up = (0, Op.useRef)(0),
                                wp = (0, Op.useRef)([]),
                                vp = (0, Sp.d)();
                              return (0, Op.useEffect)((() => {
                                const pp = vp.onFrame((() => {
                                  const pp = vp.getState();
                                  if (!pp.isActive || !cp.current) return;
                                  const ip = pp.state,
                                    Op = 30 + 60 * ip.outerCircleProgress;
                                  if (cp.current.setAttribute("r", String(Op)), !0 === ip.lastClickResult && ip.successes > Wp.current) {
                                    cp.current.classList.remove("QTERhythmClickOuterCircle--miss"), cp.current.classList.add("QTERhythmClickOuterCircle--hit");
                                    const pp = setTimeout((() => {
                                      var pp;
                                      null === (pp = cp.current) || void 0 === pp || pp.classList.remove("QTERhythmClickOuterCircle--hit")
                                    }), 200);
                                    wp.current.push(pp)
                                  } else if (!1 === ip.lastClickResult && ip.misses > Up.current) {
                                    cp.current.classList.remove("QTERhythmClickOuterCircle--hit"), cp.current.classList.add("QTERhythmClickOuterCircle--miss");
                                    const pp = setTimeout((() => {
                                      var pp;
                                      null === (pp = cp.current) || void 0 === pp || pp.classList.remove("QTERhythmClickOuterCircle--miss")
                                    }), 200);
                                    wp.current.push(pp)
                                  }
                                  ip.successes === Wp.current && ip.misses === Up.current || (Wp.current = ip.successes, Up.current = ip.misses, Lp((pp => {
                                    const cp = [...pp];
                                    for (let Op = 0; Op < ip.Ci; Op++) cp[Op] = Op < ip.successes ? "success" : "pending";
                                    return cp
                                  })), Dp((pp => {
                                    if (0 === pp.length) return pp;
                                    const cp = [...pp];
                                    for (let Op = 0; Op < cp.length; Op++) cp[Op] = Op < ip.misses ? "miss" : "pending";
                                    return cp
                                  })))
                                }));
                                return () => {
                                  pp();
                                  for (const pp of wp.current) clearTimeout(pp);
                                  wp.current = []
                                }
                              }), [vp]), (0, xp.jsxs)("div", {
                                className: "QTERhythmClickWrapper",
                                children: [(0, xp.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: op.map(((pp, ip) => (0, xp.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("success" === pp ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
                                  }, ip)))
                                }), (0, xp.jsxs)("div", {
                                  className: "QTERhythmClickCircleContainer",
                                  children: [(0, xp.jsxs)("svg", {
                                    className: "QTERhythmClickSvg",
                                    viewBox: "0 0 200 200",
                                    children: [(0, xp.jsx)("circle", {
                                      className: "QTERhythmClickInnerCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 30
                                    }), (0, xp.jsx)("circle", {
                                      className: "QTERhythmClickOuterCircle",
                                      cx: "100",
                                      cy: "100",
                                      r: 90,
                                      ref: cp
                                    })]
                                  }), Pp && (0, xp.jsx)("div", {
                                    className: "QTERhythmClickCenterContent",
                                    children: (0, xp.jsx)(Ip.e, {
                                      text: [{
                                        icon: Pp
                                      }],
                                      className: "QTERhythmClickIcon"
                                    })
                                  })]
                                }), Yp.length > 0 && (0, xp.jsx)("div", {
                                  className: "QTERhythmClickProgress",
                                  children: Yp.map(((pp, ip) => (0, xp.jsx)("div", {
                                    className: "QTERhythmClickDot" + ("miss" === pp ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
                                  }, ip)))
                                }), (0, xp.jsx)("div", {
                                  className: "QTERhythmClickLabel",
                                  children: (0, xp.jsx)(Ip.e, {
                                    text: Ap
                                  })
                                })]
                              })
                            }));

                          function vp(pp) {
                            let {
                              qte: ip
                            } = pp;
                            switch (ip.type) {
                              case "progressBar":
                                return (0, xp.jsx)(Lp, {
                                  initialParameters: ip.parameters
                                });
                              case "timedClick":
                                return (0, xp.jsx)(Pp, {
                                  initialParameters: ip.parameters
                                });
                              case "gravityBar":
                                return (0, xp.jsx)(Wp, {
                                  initialParameters: ip.parameters
                                });
                              case "precisionBar":
                                return (0, xp.jsx)(Up, {
                                  initialParameters: ip.parameters
                                });
                              case "rhythmClick":
                                return (0, xp.jsx)(wp, {
                                  initialParameters: ip.parameters
                                });
                              default:
                                return console.warn("Unknown QTE type"), null
                            }
                          }
                          const tp = (0, Op.memo)((function() {
                            const [pp, ip] = (0, Op.useState)({
                              type: null,
                              parameters: null,
                              state: null,
                              isActive: !1
                            });
                            return (0, op.f)("qteStateUpdated", (pp => {
                              ip(pp)
                            })), pp.isActive && pp.type ? (0, xp.jsx)("div", {
                              className: "QTE",
                              "data-camera-keeper": "",
                              children: (0, xp.jsx)(vp, {
                                qte: pp
                              })
                            }) : null
                          }))
                        }, 4880: (pp, ip, cp) => {
                          cp.d(ip, {
                            b: () => xp,
                            d: () => Lp
                          });
                          var Op = cp(62),
                            op = cp(1317),
                            Ip = cp(4882);
                          const Sp = {
                              getState: () => Ip.b.getCurrentState(),
                              onFrame: op.q
                            },
                            xp = (0, Op.createContext)(Sp);

                          function Lp() {
                            return (0, Op.useContext)(xp)
                          }
                        }, 4964: (pp, ip, cp) => {
                          cp.d(ip, {
                            e: () => Jp,
                            h: () => Qp
                          });
                          var Op = cp(4970),
                            op = cp(322);
                          const Ip = 120,
                            Sp = 260,
                            xp = 1.15,
                            Lp = 1.2,
                            Yp = 2,
                            Dp = 1.08,
                            Ap = .8,
                            Pp = .95,
                            Wp = 8,
                            yp = "[\"')\\]\u300d\u300f\uff09]*",
                            Up = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yp}$`),
                            wp = new RegExp(`[?\uff1f]${yp}$`),
                            vp = new RegExp(`[!\uff01]${yp}$`),
                            tp = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
                            Hp = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
                            dp = new RegExp(`[${Hp}]`),
                            ep = new RegExp(`[${Hp}]|[^${Hp}]+`, "g"),
                            jp = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

                          function kp(pp) {
                            let ip = 2166136261;
                            for (let cp = 0; cp < pp.length; cp++) ip ^= pp.charCodeAt(cp), ip = Math.imul(ip, 16777619);
                            return (ip >>> 0) / 4294967295 * 2 - 1
                          }

                          function mp(pp) {
                            var ip;
                            if (dp.test(pp)) return 1;
                            const cp = pp.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
                              Op = cp.replace(/[^0-9]/g, "");
                            if (Op.length > 0 && !/\p{L}/u.test(cp)) return Math.min(Op.length, 4);
                            const op = null !== (ip = cp.match(jp)) && void 0 !== ip ? ip : [];
                            if (0 === op.length) {
                              var Ip, Sp;
                              const pp = null !== (Ip = null === (Sp = cp.match(/\p{L}/gu)) || void 0 === Sp ? void 0 : Sp.length) && void 0 !== Ip ? Ip : 0;
                              return 0 === pp ? 0 : Math.min(Math.max(1, Math.round(pp / 2.5)), Wp)
                            }
                            const xp = cp.replace(/[^\p{L}]/gu, ""),
                              Lp = op.length > 1 && "e" === op.at(-1) && xp.endsWith("e") && !xp.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(pp.replace(/[^\p{L}]/gu, ""));
                            return Math.min(op.length - (Lp ? 1 : 0), Wp)
                          }

                          function Rp(pp) {
                            return pp.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
                          }

                          function qp(pp) {
                            const ip = pp.replace(/[^\p{L}]/gu, "");
                            return ip.length >= 2 && ip === ip.toUpperCase() && ip !== ip.toLowerCase()
                          }

                          function Mp(pp, ip) {
                            var cp;
                            const Wp = ip && (0, Op.m)(ip),
                              yp = null !== (cp = null === Wp || void 0 === Wp ? void 0 : Wp.syllableMs) && void 0 !== cp ? cp : Op.d,
                              Hp = function(pp) {
                                const ip = [];
                                for (const Op of (0, op.nc)(pp))
                                  if ("string" === typeof Op)
                                    for (const pp of Op.split(/(\s+)/)) {
                                      if ("" === pp) continue;
                                      if (/^\s+$/.test(pp)) {
                                        ip.push({
                                          kind: "space",
                                          text: pp
                                        });
                                        continue
                                      }
                                      if (!dp.test(pp)) {
                                        ip.push({
                                          kind: "word",
                                          text: pp,
                                          delayMs: 0
                                        });
                                        continue
                                      }
                                      let Op = !0;
                                      for (const op of null !== (cp = pp.match(ep)) && void 0 !== cp ? cp : []) {
                                        var cp;
                                        const pp = ip.at(-1);
                                        Op || "word" !== (null === pp || void 0 === pp ? void 0 : pp.kind) || dp.test(op) || /[\p{L}\p{N}]/u.test(op) ? (Op || ip.push({
                                          kind: "space",
                                          text: "\u200b"
                                        }), ip.push({
                                          kind: "word",
                                          text: op,
                                          delayMs: 0
                                        }), Op = !1) : pp.text += op
                                      }
                                    } else ip.push({
                                      kind: "icon",
                                      text: Op.icon,
                                      delayMs: 0
                                    });
                                return ip
                              }(pp),
                              jp = [];
                            let Mp = [];
                            for (const Op of Hp) "space" !== Op.kind && (Mp.push(Op), Up.test(Op.text) && (jp.push(Mp), Mp = []));
                            jp.push(Mp);
                            const Cp = [];
                            let Ep = 0;
                            for (const Op of jp) {
                              var Xp, lp;
                              const pp = null !== (Xp = null === (lp = Op.at(-1)) || void 0 === lp ? void 0 : lp.text) && void 0 !== Xp ? Xp : "",
                                ip = wp.test(pp),
                                cp = vp.test(pp),
                                op = Op.map((pp => "word" === pp.kind ? mp(pp.text) : 1)),
                                Hp = op.findLastIndex((pp => pp > 0));
                              for (const [wp, vp] of Op.entries()) {
                                const pp = "word" === vp.kind,
                                  Op = op[wp];
                                vp.delayMs = Ep;
                                for (let op = 0; Wp && op < Op; op++) {
                                  const {
                                    intonation: Ip
                                  } = Wp;
                                  let Sp = Hp > 0 ? -Ip.declineSemitones * (wp / Hp) : 0;
                                  Sp += kp(`${Rp(vp.text)}|${op}`) * Ip.variationSemitones;
                                  const Up = Math.min(1, Ip.variationSemitones);
                                  let tp = Wp.glideSemitones,
                                    dp = 1;
                                  cp && (Sp += Ip.exclaimLiftSemitones, dp *= xp), ip && wp === Hp && (Sp += Ip.questionRiseSemitones * (Op > 1 ? .5 + .5 * op / (Op - 1) : 1), op === Op - 1 && (tp = Math.abs(tp) + Ip.questionRiseSemitones / 2)), pp && qp(vp.text) && (Sp += Yp * Up, dp *= Lp), Op > 1 && 0 === op && (Sp += Ap * Up, dp *= Dp), Cp.push({
                                    atMs: Ep + op * yp,
                                    semitones: Sp,
                                    glideSemitones: tp,
                                    durationMs: op < Op - 1 ? Math.min(Wp.durationMs, yp * Pp) : Wp.durationMs,
                                    level: dp
                                  })
                                }
                                Ep += Op * yp + (Up.test(vp.text) ? Sp : tp.test(vp.text) ? Ip : 0)
                              }
                            }
                            return {
                              pieces: Hp.map((pp => "space" === pp.kind ? pp : "icon" === pp.kind ? {
                                kind: "icon",
                                icon: pp.text,
                                delayMs: pp.delayMs
                              } : {
                                kind: "word",
                                text: pp.text,
                                delayMs: pp.delayMs
                              })),
                              blips: Cp
                            }
                          }
                          var Cp = cp(1201),
                            Ep = cp(1260),
                            Xp = cp(1963);

                          function lp(pp) {
                            if ("string" === typeof pp) return pp;
                            const ip = Ep.g.get().getCurrentLanguageCode();
                            return (0, Cp.w)(ip, pp.translationKey, (0, Cp.t)(pp.params, Xp.d.shown))
                          }

                          function Qp(pp) {
                            const ip = void 0 === pp.voice ? null : (0, Op.o)(pp.voice),
                              cp = ip && (0, Op.m)(ip);
                            return {
                              plan: Mp(lp(pp.line), cp),
                              synth: cp
                            }
                          }

                          function Jp(pp) {
                            const ip = [];
                            let cp = [];
                            for (const [op, Ip] of pp.entries()) {
                              var Op;
                              "space" === Ip.kind && (" " !== Ip.text || "icon" !== (null === (Op = pp[op + 1]) || void 0 === Op ? void 0 : Op.kind)) ? (cp.length > 0 && ip.push(cp), ip.push([Ip]), cp = []) : cp.push(Ip)
                            }
                            return cp.length > 0 && ip.push(cp), ip
                          }
                        }, 4972: (pp, ip, cp) => {
                          cp.d(ip, {
                            e: () => Dp,
                            f: () => Ap
                          });
                          var Op = cp(4974),
                            op = cp(25);
                          const Ip = .25,
                            Sp = .85,
                            xp = .02,
                            Lp = .01;

                          function Yp(pp, ip, cp, Op, op, Ip, xp) {
                            const {
                              waveform: Lp,
                              pitchHz: Yp,
                              attackMs: Dp,
                              releaseMs: Ap,
                              lowpassHz: Pp
                            } = cp, Wp = op + Op.durationMs / 1e3, yp = Yp * 2 ** (Op.semitones / 12), Up = pp.createOscillator();
                            Up.type = Lp, Up.frequency.setValueAtTime(yp, op), Up.frequency.exponentialRampToValueAtTime(yp * 2 ** (Op.glideSemitones / 12), Wp);
                            const wp = op + Math.min(Dp, Op.durationMs) / 1e3,
                              vp = pp.createGain();
                            vp.gain.setValueAtTime(0, op), vp.gain.linearRampToValueAtTime(Ip, wp), vp.gain.linearRampToValueAtTime(Ip * Sp, Math.max(wp, Wp - Ap / 1e3)), vp.gain.linearRampToValueAtTime(0, Wp);
                            const tp = [Up];
                            if (null !== Pp) {
                              const ip = pp.createBiquadFilter();
                              ip.type = "lowpass", ip.frequency.value = Pp, tp.push(ip)
                            }
                            tp.push(vp, ip);
                            for (let Sp = 1; Sp < tp.length; Sp++) tp[Sp - 1].connect(tp[Sp]);
                            return Up.onended = () => {
                              for (const pp of tp.slice(0, -1)) pp.disconnect();
                              xp()
                            }, Up.start(op), Up.stop(Wp), Up
                          }

                          function Dp(pp, ip, cp, Op, op, Sp) {
                            if (0 === Op.length) return Sp(), () => {};
                            const Dp = Ip * cp.volume * op,
                              Ap = pp.createGain();
                            Ap.connect(ip);
                            const Pp = pp.currentTime + xp,
                              Wp = new Set;
                            for (const Ip of Op) {
                              const ip = Yp(pp, Ap, cp, Ip, Pp + Ip.atMs / 1e3, Dp * Ip.level, (() => {
                                Wp.delete(ip), 0 === Wp.size && (Ap.disconnect(), Sp())
                              }));
                              Wp.add(ip)
                            }
                            return () => {
                              const ip = pp.currentTime;
                              Ap.gain.setTargetAtTime(0, ip, Lp);
                              for (const pp of Wp) try {
                                pp.stop(ip + 5 * Lp)
                              } catch {}
                            }
                          }

                          function Ap(pp, ip) {
                            var cp;
                            const Ip = Op.Howler.ctx,
                              Sp = Op.Howler.masterGain;
                            if (!Ip || !Sp || !op.c.get("soundOnFromAd")) return () => {};
                            const xp = Op.Howler;
                            return null === (cp = xp._autoResume) || void 0 === cp || cp.call(xp), Dp(Ip, Sp, pp, ip, op.c.get("soundVolume"), (() => {
                              var pp;
                              null === (pp = xp._autoSuspend) || void 0 === pp || pp.call(xp)
                            }))
                          }
                        }, 4941: (pp, ip, cp) => {
                          cp.d(ip, {
                            e: () => xp,
                            f: () => op,
                            h: () => Lp,
                            k: () => Sp,
                            o: () => Ip
                          });
                          var Op = cp(4933);
                          const op = {
                              name: "ChatGPT",
                              url: "https://chatgpt.com/?hints=search&q="
                            },
                            Ip = {
                              name: "Claude",
                              url: "https://claude.ai/new?q="
                            },
                            Sp = `${Op.n} lists every page of the Bloxd Code API docs.`;

                          function xp(pp, ip) {
                            return `${pp.url}${encodeURIComponent(ip.toWellFormed())}`
                          }

                          function Lp(pp) {
                            const ip = xp(op, pp);
                            return ip.length <= 3e4 ? {
                              url: ip,
                              sendsPrompt: !0
                            } : {
                              url: new URL(op.url).origin,
                              sendsPrompt: !1
                            }
                          }
                        }, 4974: (pp, ip, cp) => {
                          cp.r(ip), cp.d(ip, {
                            Howl: () => op.Howl,
                            Howler: () => op.Howler,
                            musicOutput: () => wp,
                            readyAudioContext: () => vp
                          });
                          var Op, op = cp(4977),
                            Ip = cp(3546),
                            Sp = cp(4743);
                          const xp = op.Howler;

                          function Lp() {
                            var pp, ip;
                            if (xp.ctx || !xp.usingWebAudio || "undefined" === typeof AudioContext || !(0, Sp.f)()) return;
                            const cp = navigator.audioSession;
                            let Op;
                            "auto" === (null === cp || void 0 === cp ? void 0 : cp.type) && (cp.type = "ambient");
                            try {
                              Op = new AudioContext({
                                sampleRate: 44100
                              })
                            } catch {
                              return
                            }
                            const op = Op.createGain();
                            op.gain.setValueAtTime(xp._muted ? 0 : null !== (pp = xp._volume) && void 0 !== pp ? pp : 1, Op.currentTime), op.connect(Op.destination), xp.ctx = Op, xp.masterGain = op, null === (ip = xp._setup) || void 0 === ip || ip.call(xp)
                          }
                          xp._mobileUnloaded = !0;
                          const Yp = xp.volume.bind(op.Howler);
                          xp.volume = function() {
                            return Lp(), Yp(...arguments)
                          };
                          const Dp = xp.mute.bind(op.Howler);
                          xp.mute = pp => (Lp(), Dp(pp));
                          const Ap = op.Howl.prototype,
                            Pp = Ap.init;

                          function Wp() {
                            for (; xp._html5AudioPool.length < xp.html5PoolSize;) {
                              const pp = new Audio;
                              pp._unlocked = !0, xp._releaseHtml5Audio(pp)
                            }
                            for (const ip of xp._howls)
                              if (!ip._webAudio)
                                for (const cp of ip._getSoundIds()) {
                                  var pp;
                                  const Op = null === (pp = ip._soundById(cp)) || void 0 === pp ? void 0 : pp._node;
                                  Op && !Op._unlocked && (Op._unlocked = !0, Op.load())
                                }
                          }
                          Ap.init = function(pp) {
                            return Lp(), Pp.call(this, pp)
                          }, (0, Sp.f)() && (xp._unlockAudio = () => {
                            const pp = xp.ctx;
                            if (xp._audioUnlocked || !pp) return;
                            xp.autoUnlock = !1;
                            const ip = pp.createBuffer(1, 1, 22050);
                            xp._scratchBuffer = ip;
                            const cp = new AbortController;
                            let Op = "afterPaint";
                            const op = () => {
                                var Op;
                                if (xp._audioUnlocked) return;
                                null === (Op = xp._autoResume) || void 0 === Op || Op.call(xp);
                                const op = pp.createBufferSource();
                                op.buffer = ip, op.connect(pp.destination), op.start(0), pp.resume().catch((() => {})), op.onended = () => {
                                  op.disconnect(0), xp._audioUnlocked = !0, cp.abort();
                                  for (const pp of xp._howls) pp._emit("unlock")
                                }
                              },
                              Lp = () => {
                                Wp(), op()
                              },
                              Yp = ip => {
                                if (Wp(), "inTap" === Op) {
                                  if ("running" === pp.state) return;
                                  console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), op()
                                } else "afterPaint" === Op && (Op = "queued", (0, Ip.e)(ip.timeStamp, (() => {
                                  Op = "inTap", op()
                                })))
                              };
                            for (const Ip of ["touchstart", "touchend"]) document.addEventListener(Ip, Lp, {
                              capture: !0,
                              signal: cp.signal
                            });
                            for (const Ip of Sp.c) document.addEventListener(Ip, Yp, {
                              capture: !0,
                              signal: cp.signal
                            })
                          });
                          let yp = 0;
                          const Up = null === (Op = xp._autoSuspend) || void 0 === Op ? void 0 : Op.bind(op.Howler);

                          function wp() {
                            vp();
                            const {
                              ctx: pp,
                              masterGain: ip
                            } = xp;
                            return pp && ip ? {
                              ctx: pp,
                              destination: ip,
                              holdAwake: pp => {
                                var ip, cp;
                                (yp += pp ? 1 : -1, pp) ? null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp): null === (cp = xp._autoSuspend) || void 0 === cp || cp.call(xp)
                              },
                              wake: () => {
                                var ip;
                                "running" !== pp.state && (null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp), pp.resume().catch((() => {})))
                              }
                            } : null
                          }

                          function vp() {
                            var pp;
                            (xp.volume(), xp.ctx && xp.autoUnlock) && (null === (pp = xp._unlockAudio) || void 0 === pp || pp.call(xp))
                          }
                          Up && (xp._autoSuspend = () => yp > 0 ? op.Howler : Up())
                        }, 4984: (pp, ip, cp) => {
                          function Op(pp) {
                            return {
                              notAfter: pp
                            }
                          }
                          cp.d(ip, {
                            c: () => Lp,
                            f: () => Yp,
                            j: () => xp,
                            k: () => Op,
                            m: () => op,
                            n: () => Ip,
                            p: () => Sp,
                            r: () => Dp,
                            s: () => Ap
                          });
                          const op = Op("\\w$."),
                            Ip = Op("\\w.,");

                          function Sp(pp) {
                            return ip => Lp(ip, pp)
                          }

                          function xp(pp) {
                            return ip => !pp.test(ip.input.slice(0, ip.index))
                          }

                          function Lp(pp, ip) {
                            return pp.index > 0 && new RegExp(`[${ip}]`).test(pp.input[pp.index - 1])
                          }

                          function Yp(pp, ip, cp) {
                            return function(pp) {
                              return void 0 !== pp && "function" !== typeof pp
                            }(cp) ? function(pp, ip, cp) {
                              const Op = ip.flags.replace(/[gy]/g, ""),
                                op = new RegExp(`[^${cp}](?:${ip.source})`, `${Op}g`),
                                Ip = [],
                                Sp = cp => {
                                  const Op = cp.index + cp[0].length;
                                  return ("" === cp[0] ? Pp(pp, ip, Op) : Op) - 1
                                },
                                xp = new RegExp(`(?:${ip.source})`, `${Op}y`).exec(pp);
                              if (xp) {
                                if (Ip.push(xp), !ip.global) return Ip;
                                op.lastIndex = Sp(xp)
                              }
                              for (let Lp = op.exec(pp); Lp; Lp = op.exec(pp)) {
                                const cp = Pp(pp, ip, Lp.index) - Lp.index;
                                if (Lp[0] = Lp[0].slice(cp), Lp.index += cp, Ip.push(Lp), !ip.global) break;
                                op.lastIndex = Sp(Lp)
                              }
                              return Ip
                            }(pp, ip, cp.notAfter) : function(pp, ip, cp) {
                              const Op = new RegExp(ip.source, `${ip.flags.replace(/[gy]/g,"")}g`),
                                op = [];
                              for (let Ip = Op.exec(pp); Ip; Ip = Op.exec(pp))
                                if (!cp || cp(Ip)) {
                                  if (op.push(Ip), !ip.global) break;
                                  "" === Ip[0] && (Op.lastIndex = Pp(pp, ip, Op.lastIndex))
                                } else Op.lastIndex = Pp(pp, ip, Ip.index);
                              return op
                            }(pp, ip, cp)
                          }

                          function Dp(pp, ip, cp, Op) {
                            let op = "",
                              Ip = 0;
                            for (const Sp of Yp(pp, ip, cp)) op += pp.slice(Ip, Sp.index) + Op(Sp), Ip = Sp.index + Sp[0].length;
                            return op + pp.slice(Ip)
                          }

                          function Ap(pp, ip, cp) {
                            const Op = [];
                            let op = 0;
                            for (const Ip of Yp(pp, ip, cp)) Op.push(pp.slice(op, Ip.index)), op = Ip.index + Ip[0].length;
                            return [...Op, pp.slice(op)]
                          }

                          function Pp(pp, ip, cp) {
                            var Op;
                            return cp + (ip.unicode && (null !== (Op = pp.codePointAt(cp)) && void 0 !== Op ? Op : 0) > 65535 ? 2 : 1)
                          }
                        }, 4933: (pp, ip, cp) => {
                          cp.d(ip, {
                            e: () => op,
                            i: () => Lp,
                            j: () => Ip,
                            n: () => Sp,
                            o: () => xp,
                            q: () => wp,
                            r: () => Dp,
                            u: () => Ap,
                            v: () => Up,
                            y: () => Wp
                          });
                          var Op = cp(1603);
                          const op = 24e3,
                            Ip = "/docs/llms.txt",
                            Sp = `${Op.b}${Ip}`,
                            xp = "/llms.txt",
                            Lp = "/docs/llms-full.txt";

                          function Yp(pp) {
                            return pp || "index"
                          }

                          function Dp(pp) {
                            return `/docs/${Yp(pp)}.md`
                          }

                          function Ap(pp, ip) {
                            return `/docs/${Yp(pp)}/${ip+1}.md`
                          }
                          const Pp = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

                          function Wp(pp) {
                            const ip = Pp.exec(pp);
                            return null === ip ? null : {
                              name: ip[1],
                              part: void 0 === ip[2] ? null : Number(ip[2])
                            }
                          }
                          const yp = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

                          function Up(pp) {
                            const ip = yp.exec(pp);
                            if (null === ip) return null;
                            const [, cp = "", Op] = ip;
                            return void 0 === Op ? Dp(cp) : Ap(cp, Number(Op) - 1)
                          }

                          function wp(pp) {
                            return `/docsHtml/${Yp(pp)}.html`
                          }
                        }, 4970: (pp, ip, cp) => {
                          cp.d(ip, {
                            d: () => op,
                            f: () => Op,
                            i: () => Ip,
                            m: () => Lp,
                            o: () => Sp
                          });
                          const Op = ["sine", "triangle", "square", "sawtooth"],
                            op = 55,
                            Ip = {
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

                          function Sp(pp) {
                            return "string" !== typeof pp ? pp : Object.hasOwn(Ip, pp) ? Ip[pp] : null
                          }

                          function xp(pp, ip, cp) {
                            return Math.min(cp, Math.max(ip, pp))
                          }

                          function Lp(pp) {
                            const ip = xp(pp.durationMs, 10, 500),
                              cp = xp(pp.attackMs, 0, ip),
                              {
                                intonation: op
                              } = pp;
                            return {
                              waveform: Op.includes(pp.waveform) ? pp.waveform : "sine",
                              pitchHz: xp(pp.pitchHz, 20, 4e3),
                              glideSemitones: xp(pp.glideSemitones, -24, 24),
                              durationMs: ip,
                              attackMs: cp,
                              releaseMs: xp(pp.releaseMs, 0, ip - cp),
                              lowpassHz: null === pp.lowpassHz ? null : xp(pp.lowpassHz, 20, 2e4),
                              volume: xp(pp.volume, 0, 2),
                              intonation: {
                                variationSemitones: xp(op.variationSemitones, 0, 6),
                                declineSemitones: xp(op.declineSemitones, 0, 12),
                                questionRiseSemitones: xp(op.questionRiseSemitones, 0, 12),
                                exclaimLiftSemitones: xp(op.exclaimLiftSemitones, 0, 12)
                              },
                              syllableMs: xp(pp.syllableMs, 25, 200)
                            }
                          }
                        }
                      }; Object.freeze(modules);
                      for (const pp in modules) Object.freeze(modules[pp]);