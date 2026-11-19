export const id = 76;
export const ids = [76];
export const modules = {
  4472: zz => {
    function uz(zz) {
      return zz instanceof Map ? zz.clear = zz.delete = zz.set = function() {
        throw new Error("map is read-only")
      } : zz instanceof Set && (zz.add = zz.clear = zz.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(zz), Object.getOwnPropertyNames(zz).forEach((bz => {
        const Ez = zz[bz],
          nz = typeof Ez;
        "object" !== nz && "function" !== nz || Object.isFrozen(Ez) || uz(Ez)
      })), zz
    }
    class bz {
      constructor(zz) {
        void 0 === zz.data && (zz.data = {}), this.data = zz.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Ez(zz) {
      return zz.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function nz(zz) {
      const uz = Object.create(null);
      for (const iz in zz) uz[iz] = zz[iz];
      for (var bz = arguments.length, Ez = new Array(bz > 1 ? bz - 1 : 0), nz = 1; nz < bz; nz++) Ez[nz - 1] = arguments[nz];
      return Ez.forEach((function(zz) {
        for (const bz in zz) uz[bz] = zz[bz]
      })), uz
    }
    const iz = zz => !!zz.scope;
    class lz {
      constructor(zz, uz) {
        this.buffer = "", this.classPrefix = uz.classPrefix, zz.walk(this)
      }
      addText(zz) {
        this.buffer += Ez(zz)
      }
      openNode(zz) {
        if (!iz(zz)) return;
        const uz = ((zz, uz) => {
          let {
            prefix: bz
          } = uz;
          if (zz.startsWith("language:")) return zz.replace("language:", "language-");
          if (zz.includes(".")) {
            const uz = zz.split(".");
            return [`${bz}${uz.shift()}`, ...uz.map(((zz, uz) => `${zz}${"_".repeat(uz+1)}`))].join(" ")
          }
          return `${bz}${zz}`
        })(zz.scope, {
          prefix: this.classPrefix
        });
        this.span(uz)
      }
      closeNode(zz) {
        iz(zz) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(zz) {
        this.buffer += `<span class="${zz}">`
      }
    }
    const Mz = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const uz = {
        children: []
      };
      return Object.assign(uz, zz), uz
    };
    class tz {
      constructor() {
        this.Xs = Mz(), this.stack = [this.Xs]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.Xs
      }
      add(zz) {
        this.top.children.push(zz)
      }
      openNode(zz) {
        const uz = Mz({
          scope: zz
        });
        this.add(uz), this.stack.push(uz)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.Xs, null, 4)
      }
      walk(zz) {
        return this.constructor._walk(zz, this.Xs)
      }
      static _walk(zz, uz) {
        return "string" === typeof uz ? zz.addText(uz) : uz.children && (zz.openNode(uz), uz.children.forEach((uz => this._walk(zz, uz))), zz.closeNode(uz)), zz
      }
      static _collapse(zz) {
        "string" !== typeof zz && zz.children && (zz.children.every((zz => "string" === typeof zz)) ? zz.children = [zz.children.join("")] : zz.children.forEach((zz => {
          tz._collapse(zz)
        })))
      }
    }
    class Hz extends tz {
      constructor(zz) {
        super(), this.options = zz
      }
      addText(zz) {
        "" !== zz && this.add(zz)
      }
      startScope(zz) {
        this.openNode(zz)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(zz, uz) {
        const bz = zz.root;
        uz && (bz.scope = `language:${uz}`), this.add(bz)
      }
      toHTML() {
        return new lz(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Oz(zz) {
      return zz ? "string" === typeof zz ? zz : zz.source : null
    }

    function pz(zz) {
      return Zz("(?=", zz, ")")
    }

    function dz(zz) {
      return Zz("(?:", zz, ")*")
    }

    function Fz(zz) {
      return Zz("(?:", zz, ")?")
    }

    function Zz() {
      for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
      return uz.map((zz => Oz(zz))).join("")
    }

    function Rz() {
      for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
      const Ez = function(zz) {
        const uz = zz[zz.length - 1];
        return "object" === typeof uz && uz.constructor === Object ? (zz.splice(zz.length - 1, 1), uz) : {}
      }(uz);
      return "(" + (Ez.capture ? "" : "?:") + uz.map((zz => Oz(zz))).join("|") + ")"
    }

    function Kz(zz) {
      return new RegExp(zz.toString() + "|").exec("").length - 1
    }
    const wz = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Xz(zz, uz) {
      let {
        joinWith: bz
      } = uz, Ez = 0;
      return zz.map((zz => {
        Ez += 1;
        const uz = Ez;
        let bz = Oz(zz),
          nz = "";
        for (; bz.length > 0;) {
          const zz = wz.exec(bz);
          if (!zz) {
            nz += bz;
            break
          }
          nz += bz.substring(0, zz.index), bz = bz.substring(zz.index + zz[0].length), "\\" === zz[0][0] && zz[1] ? nz += "\\" + String(Number(zz[1]) + uz) : (nz += zz[0], "(" === zz[0] && Ez++)
        }
        return nz
      })).map((zz => `(${zz})`)).join(bz)
    }
    const fz = "[a-zA-Z]\\w*",
      sz = "[a-zA-Z_]\\w*",
      rz = "\\b\\d+(\\.\\d+)?",
      oz = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Nz = "\\b(0b[01]+)",
      vz = {
        QF: "\\\\[\\s\\S]",
        relevance: 0
      },
      xz = {
        scope: "string",
        QF: "'",
        end: "'",
        illegal: "\\n",
        contains: [vz]
      },
      Jz = {
        scope: "string",
        QF: '"',
        end: '"',
        illegal: "\\n",
        contains: [vz]
      },
      Az = function(zz, uz) {
        const bz = nz({
          scope: "comment",
          QF: zz,
          end: uz,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        bz.contains.push({
          scope: "doctag",
          QF: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Ez = Rz("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return bz.contains.push({
          QF: Zz(/[ ]+/, "(", Ez, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), bz
      },
      Tz = Az("//", "$"),
      Lz = Az("/\\*", "\\*/"),
      Pz = Az("#", "$"),
      Gz = {
        scope: "number",
        QF: rz,
        relevance: 0
      },
      az = {
        scope: "number",
        QF: oz,
        relevance: 0
      },
      Vz = {
        scope: "number",
        QF: Nz,
        relevance: 0
      },
      mz = {
        scope: "regexp",
        QF: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [vz, {
          QF: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [vz]
        }]
      },
      qz = {
        scope: "title",
        QF: fz,
        relevance: 0
      },
      hz = {
        scope: "title",
        QF: sz,
        relevance: 0
      },
      Uz = {
        QF: "\\.\\s*" + sz,
        relevance: 0
      };
    var cz = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: xz,
      BACKSLASH_ESCAPE: vz,
      BINARY_NUMBER_MODE: Vz,
      BINARY_NUMBER_RE: Nz,
      COMMENT: Az,
      C_BLOCK_COMMENT_MODE: Lz,
      C_LINE_COMMENT_MODE: Tz,
      C_NUMBER_MODE: az,
      C_NUMBER_RE: oz,
      END_SAME_AS_BEGIN: function(zz) {
        return Object.assign(zz, {
          "on:begin": (zz, uz) => {
            uz.data._beginMatch = zz[1]
          },
          "on:end": (zz, uz) => {
            uz.data._beginMatch !== zz[1] && uz.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Pz,
      IDENT_RE: fz,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Uz,
      NUMBER_MODE: Gz,
      NUMBER_RE: rz,
      PHRASAL_WORDS_MODE: {
        QF: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Jz,
      REGEXP_MODE: mz,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const uz = /^#![ ]*\//;
        return zz.binary && (zz.QF = Zz(uz, /.*\b/, zz.binary, /\b.*/)), nz({
          scope: "meta",
          QF: uz,
          end: /$/,
          relevance: 0,
          "on:begin": (zz, uz) => {
            0 !== zz.index && uz.ignoreMatch()
          }
        }, zz)
      },
      TITLE_MODE: qz,
      UNDERSCORE_IDENT_RE: sz,
      UNDERSCORE_TITLE_MODE: hz
    });

    function gz(zz, uz) {
      "." === zz.input[zz.index - 1] && uz.ignoreMatch()
    }

    function Sz(zz, uz) {
      void 0 !== zz.className && (zz.scope = zz.className, delete zz.className)
    }

    function yz(zz, uz) {
      uz && zz.beginKeywords && (zz.QF = "\\b(" + zz.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", zz.__beforeBegin = gz, zz.keywords = zz.keywords || zz.beginKeywords, delete zz.beginKeywords, void 0 === zz.relevance && (zz.relevance = 0))
    }

    function Dz(zz, uz) {
      Array.isArray(zz.illegal) && (zz.illegal = Rz(...zz.illegal))
    }

    function Qz(zz, uz) {
      if (zz.match) {
        if (zz.QF || zz.end) throw new Error("begin & end are not supported with match");
        zz.QF = zz.match, delete zz.match
      }
    }

    function Wz(zz, uz) {
      void 0 === zz.relevance && (zz.relevance = 1)
    }
    const ez = (zz, uz) => {
        if (!zz.beforeMatch) return;
        if (zz.starts) throw new Error("beforeMatch cannot be used with starts");
        const bz = Object.assign({}, zz);
        Object.keys(zz).forEach((uz => {
          delete zz[uz]
        })), zz.keywords = bz.keywords, zz.QF = Zz(bz.beforeMatch, pz(bz.QF)), zz.starts = {
          relevance: 0,
          contains: [Object.assign(bz, {
            endsParent: !0
          })]
        }, zz.relevance = 0, delete bz.beforeMatch
      },
      jz = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function Iz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Ez = Object.create(null);
      return "string" === typeof zz ? nz(bz, zz.split(" ")) : Array.isArray(zz) ? nz(bz, zz) : Object.keys(zz).forEach((function(bz) {
        Object.assign(Ez, Iz(zz[bz], uz, bz))
      })), Ez;

      function nz(zz, bz) {
        uz && (bz = bz.map((zz => zz.toLowerCase()))), bz.forEach((function(uz) {
          const bz = uz.split("|");
          Ez[bz[0]] = [zz, Bz(bz[0], bz[1])]
        }))
      }
    }

    function Bz(zz, uz) {
      return uz ? Number(uz) : function(zz) {
        return jz.includes(zz.toLowerCase())
      }(zz) ? 0 : 1
    }
    const Cz = {},
      Yz = zz => {
        console.error(zz)
      },
      kz = function(zz) {
        for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
        console.log(`WARN: ${zz}`, ...bz)
      },
      zu = (zz, uz) => {
        Cz[`${zz}/${uz}`] || (console.log(`Deprecated as of ${zz}. ${uz}`), Cz[`${zz}/${uz}`] = !0)
      },
      uu = new Error;

    function bu(zz, uz, bz) {
      let {
        key: Ez
      } = bz, nz = 0;
      const iz = zz[Ez],
        lz = {},
        Mz = {};
      for (let tz = 1; tz <= uz.length; tz++) Mz[tz + nz] = iz[tz], lz[tz + nz] = !0, nz += Kz(uz[tz - 1]);
      zz[Ez] = Mz, zz[Ez]._emit = lz, zz[Ez]._multi = !0
    }

    function Eu(zz) {
      ! function(zz) {
        zz.scope && "object" === typeof zz.scope && null !== zz.scope && (zz.beginScope = zz.scope, delete zz.scope)
      }(zz), "string" === typeof zz.beginScope && (zz.beginScope = {
          _wrap: zz.beginScope
        }), "string" === typeof zz.endScope && (zz.endScope = {
          _wrap: zz.endScope
        }),
        function(zz) {
          if (Array.isArray(zz.QF)) {
            if (zz.skip || zz.excludeBegin || zz.returnBegin) throw Yz("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), uu;
            if ("object" !== typeof zz.beginScope || null === zz.beginScope) throw Yz("beginScope must be object"), uu;
            bu(zz, zz.QF, {
              key: "beginScope"
            }), zz.QF = Xz(zz.QF, {
              joinWith: ""
            })
          }
        }(zz),
        function(zz) {
          if (Array.isArray(zz.end)) {
            if (zz.skip || zz.excludeEnd || zz.returnEnd) throw Yz("skip, excludeEnd, returnEnd not compatible with endScope: {}"), uu;
            if ("object" !== typeof zz.endScope || null === zz.endScope) throw Yz("endScope must be object"), uu;
            bu(zz, zz.end, {
              key: "endScope"
            }), zz.end = Xz(zz.end, {
              joinWith: ""
            })
          }
        }(zz)
    }

    function nu(zz) {
      function uz(uz, bz) {
        return new RegExp(Oz(uz), "m" + (zz.case_insensitive ? "i" : "") + (zz.unicodeRegex ? "u" : "") + (bz ? "g" : ""))
      }
      class bz {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(zz, uz) {
          uz.position = this.position++, this.matchIndexes[this.matchAt] = uz, this.regexes.push([uz, zz]), this.matchAt += Kz(zz) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const zz = this.regexes.map((zz => zz[1]));
          this.matcherRe = uz(Xz(zz, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(zz) {
          this.matcherRe.lastIndex = this.lastIndex;
          const uz = this.matcherRe.exec(zz);
          if (!uz) return null;
          const bz = uz.findIndex(((zz, uz) => uz > 0 && void 0 !== zz)),
            Ez = this.matchIndexes[bz];
          return uz.splice(0, bz), Object.assign(uz, Ez)
        }
      }
      class Ez {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(zz) {
          if (this.multiRegexes[zz]) return this.multiRegexes[zz];
          const uz = new bz;
          return this.rules.slice(zz).forEach((zz => {
            let [bz, Ez] = zz;
            return uz.addRule(bz, Ez)
          })), uz.compile(), this.multiRegexes[zz] = uz, uz
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(zz, uz) {
          this.rules.push([zz, uz]), "QF" === uz.type && this.count++
        }
        exec(zz) {
          const uz = this.getMatcher(this.regexIndex);
          uz.lastIndex = this.lastIndex;
          let bz = uz.exec(zz);
          if (this.resumingScanAtSamePosition())
            if (bz && bz.index === this.lastIndex);
            else {
              const uz = this.getMatcher(0);
              uz.lastIndex = this.lastIndex + 1, bz = uz.exec(zz)
            } return bz && (this.regexIndex += bz.position + 1, this.regexIndex === this.count && this.considerAll()), bz
        }
      }
      if (zz.compilerExtensions || (zz.compilerExtensions = []), zz.contains && zz.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return zz.classNameAliases = nz(zz.classNameAliases || {}),
        function bz(iz, lz) {
          const Mz = iz;
          if (iz.isCompiled) return Mz;
          [Sz, Qz, Eu, ez].forEach((zz => zz(iz, lz))), zz.compilerExtensions.forEach((zz => zz(iz, lz))), iz.__beforeBegin = null, [yz, Dz, Wz].forEach((zz => zz(iz, lz))), iz.isCompiled = !0;
          let tz = null;
          return "object" === typeof iz.keywords && iz.keywords.$pattern && (iz.keywords = Object.assign({}, iz.keywords), tz = iz.keywords.$pattern, delete iz.keywords.$pattern), tz = tz || /\w+/, iz.keywords && (iz.keywords = Iz(iz.keywords, zz.case_insensitive)), Mz.keywordPatternRe = uz(tz, !0), lz && (iz.QF || (iz.QF = /\B|\b/), Mz.beginRe = uz(Mz.QF), iz.end || iz.endsWithParent || (iz.end = /\B|\b/), iz.end && (Mz.endRe = uz(Mz.end)), Mz.terminatorEnd = Oz(Mz.end) || "", iz.endsWithParent && lz.terminatorEnd && (Mz.terminatorEnd += (iz.end ? "|" : "") + lz.terminatorEnd)), iz.illegal && (Mz.illegalRe = uz(iz.illegal)), iz.contains || (iz.contains = []), iz.contains = [].concat(...iz.contains.map((function(zz) {
            return function(zz) {
              zz.variants && !zz.cachedVariants && (zz.cachedVariants = zz.variants.map((function(uz) {
                return nz(zz, {
                  variants: null
                }, uz)
              })));
              if (zz.cachedVariants) return zz.cachedVariants;
              if (iu(zz)) return nz(zz, {
                starts: zz.starts ? nz(zz.starts) : null
              });
              if (Object.isFrozen(zz)) return nz(zz);
              return zz
            }("self" === zz ? iz : zz)
          }))), iz.contains.forEach((function(zz) {
            bz(zz, Mz)
          })), iz.starts && bz(iz.starts, lz), Mz.matcher = function(zz) {
            const uz = new Ez;
            return zz.contains.forEach((zz => uz.addRule(zz.QF, {
              rule: zz,
              type: "QF"
            }))), zz.terminatorEnd && uz.addRule(zz.terminatorEnd, {
              type: "end"
            }), zz.illegal && uz.addRule(zz.illegal, {
              type: "illegal"
            }), uz
          }(Mz), Mz
        }(zz)
    }

    function iu(zz) {
      return !!zz && (zz.endsWithParent || iu(zz.starts))
    }
    class lu extends Error {
      constructor(zz, uz) {
        super(zz), this.name = "HTMLInjectionError", this.html = uz
      }
    }
    const Mu = Ez,
      tu = nz,
      Hu = Symbol("nomatch"),
      Ou = function(zz) {
        const Ez = Object.create(null),
          nz = Object.create(null),
          iz = [];
        let lz = !0;
        const Mz = "Could not find the language '{}', did you forget to load/include a language module?",
          tz = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Oz = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Hz
        };

        function Kz(zz) {
          return Oz.noHighlightRe.test(zz)
        }

        function wz(zz, uz, bz) {
          let Ez = "",
            nz = "";
          "object" === typeof uz ? (Ez = zz, bz = uz.ignoreIllegals, nz = uz.language) : (zu("10.7.0", "highlight(lang, code, ...args) has been deprecated."), zu("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), nz = zz, Ez = uz), void 0 === bz && (bz = !0);
          const iz = {
            code: Ez,
            language: nz
          };
          Jz("before:highlight", iz);
          const lz = iz.result ? iz.result : Xz(iz.language, iz.code, bz);
          return lz.code = iz.code, Jz("after:highlight", lz), lz
        }

        function Xz(zz, uz, nz, iz) {
          const tz = Object.create(null);

          function Hz() {
            if (!Jz.keywords) return void Tz.addText(Lz);
            let zz = 0;
            Jz.keywordPatternRe.lastIndex = 0;
            let uz = Jz.keywordPatternRe.exec(Lz),
              bz = "";
            for (; uz;) {
              bz += Lz.substring(zz, uz.index);
              const nz = oz.case_insensitive ? uz[0].toLowerCase() : uz[0],
                iz = (Ez = nz, Jz.keywords[Ez]);
              if (iz) {
                const [zz, Ez] = iz;
                if (Tz.addText(bz), bz = "", tz[nz] = (tz[nz] || 0) + 1, tz[nz] <= 7 && (Pz += Ez), zz.startsWith("_")) bz += uz[0];
                else {
                  const bz = oz.classNameAliases[zz] || zz;
                  dz(uz[0], bz)
                }
              } else bz += uz[0];
              zz = Jz.keywordPatternRe.lastIndex, uz = Jz.keywordPatternRe.exec(Lz)
            }
            var Ez;
            bz += Lz.substring(zz), Tz.addText(bz)
          }

          function pz() {
            null != Jz.subLanguage ? function() {
              if ("" === Lz) return;
              let zz = null;
              if ("string" === typeof Jz.subLanguage) {
                if (!Ez[Jz.subLanguage]) return void Tz.addText(Lz);
                zz = Xz(Jz.subLanguage, Lz, !0, Az[Jz.subLanguage]), Az[Jz.subLanguage] = zz._top
              } else zz = fz(Lz, Jz.subLanguage.length ? Jz.subLanguage : null);
              Jz.relevance > 0 && (Pz += zz.relevance), Tz.__addSublanguage(zz._emitter, zz.language)
            }() : Hz(), Lz = ""
          }

          function dz(zz, uz) {
            "" !== zz && (Tz.startScope(uz), Tz.addText(zz), Tz.endScope())
          }

          function Fz(zz, uz) {
            let bz = 1;
            const Ez = uz.length - 1;
            for (; bz <= Ez;) {
              if (!zz._emit[bz]) {
                bz++;
                continue
              }
              const Ez = oz.classNameAliases[zz[bz]] || zz[bz],
                nz = uz[bz];
              Ez ? dz(nz, Ez) : (Lz = nz, Hz(), Lz = ""), bz++
            }
          }

          function Zz(zz, uz) {
            return zz.scope && "string" === typeof zz.scope && Tz.openNode(oz.classNameAliases[zz.scope] || zz.scope), zz.beginScope && (zz.beginScope._wrap ? (dz(Lz, oz.classNameAliases[zz.beginScope._wrap] || zz.beginScope._wrap), Lz = "") : zz.beginScope._multi && (Fz(zz.beginScope, uz), Lz = "")), Jz = Object.create(zz, {
              parent: {
                value: Jz
              }
            }), Jz
          }

          function Rz(zz, uz, Ez) {
            let nz = function(zz, uz) {
              const bz = zz && zz.exec(uz);
              return bz && 0 === bz.index
            }(zz.endRe, Ez);
            if (nz) {
              if (zz["on:end"]) {
                const Ez = new bz(zz);
                zz["on:end"](uz, Ez), Ez.isMatchIgnored && (nz = !1)
              }
              if (nz) {
                for (; zz.endsParent && zz.parent;) zz = zz.parent;
                return zz
              }
            }
            if (zz.endsWithParent) return Rz(zz.parent, uz, Ez)
          }

          function Kz(zz) {
            return 0 === Jz.matcher.regexIndex ? (Lz += zz[0], 1) : (Vz = !0, 0)
          }

          function wz(zz) {
            const bz = zz[0],
              Ez = uz.substring(zz.index),
              nz = Rz(Jz, zz, Ez);
            if (!nz) return Hu;
            const iz = Jz;
            Jz.endScope && Jz.endScope._wrap ? (pz(), dz(bz, Jz.endScope._wrap)) : Jz.endScope && Jz.endScope._multi ? (pz(), Fz(Jz.endScope, zz)) : iz.skip ? Lz += bz : (iz.returnEnd || iz.excludeEnd || (Lz += bz), pz(), iz.excludeEnd && (Lz = bz));
            do {
              Jz.scope && Tz.closeNode(), Jz.skip || Jz.subLanguage || (Pz += Jz.relevance), Jz = Jz.parent
            } while (Jz !== nz.parent);
            return nz.starts && Zz(nz.starts, zz), iz.returnEnd ? 0 : bz.length
          }
          let sz = {};

          function rz(Ez, iz) {
            const Mz = iz && iz[0];
            if (Lz += Ez, null == Mz) return pz(), 0;
            if ("QF" === sz.type && "end" === iz.type && sz.index === iz.index && "" === Mz) {
              if (Lz += uz.slice(iz.index, iz.index + 1), !lz) {
                const uz = new Error(`0 width match regex (${zz})`);
                throw uz.languageName = zz, uz.badRule = sz.rule, uz
              }
              return 1
            }
            if (sz = iz, "QF" === iz.type) return function(zz) {
              const uz = zz[0],
                Ez = zz.rule,
                nz = new bz(Ez),
                iz = [Ez.__beforeBegin, Ez["on:begin"]];
              for (const bz of iz)
                if (bz && (bz(zz, nz), nz.isMatchIgnored)) return Kz(uz);
              return Ez.skip ? Lz += uz : (Ez.excludeBegin && (Lz += uz), pz(), Ez.returnBegin || Ez.excludeBegin || (Lz = uz)), Zz(Ez, zz), Ez.returnBegin ? 0 : uz.length
            }(iz);
            if ("illegal" === iz.type && !nz) {
              const zz = new Error('Illegal lexeme "' + Mz + '" for mode "' + (Jz.scope || "<unnamed>") + '"');
              throw zz.mode = Jz, zz
            }
            if ("end" === iz.type) {
              const zz = wz(iz);
              if (zz !== Hu) return zz
            }
            if ("illegal" === iz.type && "" === Mz) return Lz += "\n", 1;
            if (az > 1e5 && az > 3 * iz.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Lz += Mz, Mz.length
          }
          const oz = Nz(zz);
          if (!oz) throw Yz(Mz.replace("{}", zz)), new Error('Unknown language: "' + zz + '"');
          const vz = nu(oz);
          let xz = "",
            Jz = iz || vz;
          const Az = {},
            Tz = new Oz.__emitter(Oz);
          ! function() {
            const zz = [];
            for (let uz = Jz; uz !== oz; uz = uz.parent) uz.scope && zz.unshift(uz.scope);
            zz.forEach((zz => Tz.openNode(zz)))
          }();
          let Lz = "",
            Pz = 0,
            Gz = 0,
            az = 0,
            Vz = !1;
          try {
            if (oz.__emitTokens) oz.__emitTokens(uz, Tz);
            else {
              for (Jz.matcher.considerAll();;) {
                az++, Vz ? Vz = !1 : Jz.matcher.considerAll(), Jz.matcher.lastIndex = Gz;
                const zz = Jz.matcher.exec(uz);
                if (!zz) break;
                const bz = rz(uz.substring(Gz, zz.index), zz);
                Gz = zz.index + bz
              }
              rz(uz.substring(Gz))
            }
            return Tz.finalize(), xz = Tz.toHTML(), {
              language: zz,
              value: xz,
              relevance: Pz,
              illegal: !1,
              _emitter: Tz,
              _top: Jz
            }
          } catch (mz) {
            if (mz.message && mz.message.includes("Illegal")) return {
              language: zz,
              value: Mu(uz),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: mz.message,
                index: Gz,
                context: uz.slice(Gz - 100, Gz + 100),
                mode: mz.mode,
                resultSoFar: xz
              },
              _emitter: Tz
            };
            if (lz) return {
              language: zz,
              value: Mu(uz),
              illegal: !1,
              relevance: 0,
              errorRaised: mz,
              _emitter: Tz,
              _top: Jz
            };
            throw mz
          }
        }

        function fz(zz, uz) {
          uz = uz || Oz.languages || Object.keys(Ez);
          const bz = function(zz) {
              const uz = {
                value: Mu(zz),
                illegal: !1,
                relevance: 0,
                _top: tz,
                _emitter: new Oz.__emitter(Oz)
              };
              return uz._emitter.addText(zz), uz
            }(zz),
            nz = uz.filter(Nz).filter(xz).map((uz => Xz(uz, zz, !1)));
          nz.unshift(bz);
          const iz = nz.sort(((zz, uz) => {
              if (zz.relevance !== uz.relevance) return uz.relevance - zz.relevance;
              if (zz.language && uz.language) {
                if (Nz(zz.language).supersetOf === uz.language) return 1;
                if (Nz(uz.language).supersetOf === zz.language) return -1
              }
              return 0
            })),
            [lz, Mz] = iz,
            Hz = lz;
          return Hz.secondBest = Mz, Hz
        }

        function sz(zz) {
          let uz = null;
          const bz = function(zz) {
            let uz = zz.className + " ";
            uz += zz.parentNode ? zz.parentNode.className : "";
            const bz = Oz.languageDetectRe.exec(uz);
            if (bz) {
              const uz = Nz(bz[1]);
              return uz || (kz(Mz.replace("{}", bz[1])), kz("Falling back to no-highlight mode for this block.", zz)), uz ? bz[1] : "no-highlight"
            }
            return uz.split(/\s+/).find((zz => Kz(zz) || Nz(zz)))
          }(zz);
          if (Kz(bz)) return;
          if (Jz("before:highlightElement", {
              el: zz,
              language: bz
            }), zz.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", zz);
          if (zz.children.length > 0 && (Oz.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(zz)), Oz.throwUnescapedHTML)) {
            throw new lu("One of your code blocks includes unescaped HTML.", zz.innerHTML)
          }
          uz = zz;
          const Ez = uz.textContent,
            iz = bz ? wz(Ez, {
              language: bz,
              ignoreIllegals: !0
            }) : fz(Ez);
          zz.innerHTML = iz.value, zz.dataset.highlighted = "yes",
            function(zz, uz, bz) {
              const Ez = uz && nz[uz] || bz;
              zz.classList.add("hljs"), zz.classList.add(`language-${Ez}`)
            }(zz, bz, iz.language), zz.result = {
              language: iz.language,
              re: iz.relevance,
              relevance: iz.relevance
            }, iz.secondBest && (zz.secondBest = {
              language: iz.secondBest.language,
              relevance: iz.secondBest.relevance
            }), Jz("after:highlightElement", {
              el: zz,
              result: iz,
              text: Ez
            })
        }
        let rz = !1;

        function oz() {
          if ("loading" === document.readyState) return rz || window.addEventListener("DOMContentLoaded", (function() {
            oz()
          }), !1), void(rz = !0);
          document.querySelectorAll(Oz.cssSelector).forEach(sz)
        }

        function Nz(zz) {
          return zz = (zz || "").toLowerCase(), Ez[zz] || Ez[nz[zz]]
        }

        function vz(zz, uz) {
          let {
            languageName: bz
          } = uz;
          "string" === typeof zz && (zz = [zz]), zz.forEach((zz => {
            nz[zz.toLowerCase()] = bz
          }))
        }

        function xz(zz) {
          const uz = Nz(zz);
          return uz && !uz.disableAutodetect
        }

        function Jz(zz, uz) {
          const bz = zz;
          iz.forEach((function(zz) {
            zz[bz] && zz[bz](uz)
          }))
        }
        Object.assign(zz, {
          highlight: wz,
          highlightAuto: fz,
          highlightAll: oz,
          highlightElement: sz,
          highlightBlock: function(zz) {
            return zu("10.7.0", "highlightBlock will be removed entirely in v12.0"), zu("10.7.0", "Please use highlightElement now."), sz(zz)
          },
          configure: function(zz) {
            Oz = tu(Oz, zz)
          },
          initHighlighting: () => {
            oz(), zu("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            oz(), zu("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(uz, bz) {
            let nz = null;
            try {
              nz = bz(zz)
            } catch (iz) {
              if (Yz("Language definition for '{}' could not be registered.".replace("{}", uz)), !lz) throw iz;
              Yz(iz), nz = tz
            }
            nz.name || (nz.name = uz), Ez[uz] = nz, nz.rawDefinition = bz.bind(null, zz), nz.aliases && vz(nz.aliases, {
              languageName: uz
            })
          },
          unregisterLanguage: function(zz) {
            delete Ez[zz];
            for (const uz of Object.keys(nz)) nz[uz] === zz && delete nz[uz]
          },
          listLanguages: function() {
            return Object.keys(Ez)
          },
          getLanguage: Nz,
          registerAliases: vz,
          autoDetection: xz,
          inherit: tu,
          addPlugin: function(zz) {
            ! function(zz) {
              zz["before:highlightBlock"] && !zz["before:highlightElement"] && (zz["before:highlightElement"] = uz => {
                zz["before:highlightBlock"](Object.assign({
                  block: uz.el
                }, uz))
              }), zz["after:highlightBlock"] && !zz["after:highlightElement"] && (zz["after:highlightElement"] = uz => {
                zz["after:highlightBlock"](Object.assign({
                  block: uz.el
                }, uz))
              })
            }(zz), iz.push(zz)
          },
          removePlugin: function(zz) {
            const uz = iz.indexOf(zz); - 1 !== uz && iz.splice(uz, 1)
          }
        }), zz.debugMode = function() {
          lz = !1
        }, zz.safeMode = function() {
          lz = !0
        }, zz.versionString = "11.11.1", zz.regex = {
          concat: Zz,
          lookahead: pz,
          either: Rz,
          optional: Fz,
          anyNumberOfTimes: dz
        };
        for (const bz in cz) "object" === typeof cz[bz] && uz(cz[bz]);
        return Object.assign(zz, cz), zz
      },
      pu = Ou({});
    pu.newInstance = () => Ou({}), zz.exports = pu, pu.HighlightJS = pu, pu.default = pu
  },
  4465: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    const Ez = bz(4472)
  },
  4480: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => pz
    });
    const Ez = "[A-Za-z$_][0-9A-Za-z$_]*",
      nz = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      iz = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      lz = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Mz = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      tz = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Hz = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Oz = [].concat(tz, lz, Mz);

    function pz(zz) {
      const uz = zz.regex,
        bz = Ez,
        pz = "<>",
        dz = "</>",
        Fz = {
          QF: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (zz, uz) => {
            const bz = zz[0].length + zz.index,
              Ez = zz.input[bz];
            if ("<" === Ez || "," === Ez) return void uz.ignoreMatch();
            let nz;
            ">" === Ez && (((zz, uz) => {
              let {
                after: bz
              } = uz;
              const Ez = "</" + zz[0].slice(1);
              return -1 !== zz.input.indexOf(Ez, bz)
            })(zz, {
              after: bz
            }) || uz.ignoreMatch());
            const iz = zz.input.substring(bz);
            ((nz = iz.match(/^\s*=/)) || (nz = iz.match(/^\s+extends\s+/)) && 0 === nz.index) && uz.ignoreMatch()
          }
        },
        Zz = {
          $pattern: Ez,
          keyword: nz,
          literal: iz,
          built_in: Oz,
          "variable.language": Hz
        },
        Rz = "[0-9](_?[0-9])*",
        Kz = `\\.(${Rz})`,
        wz = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Xz = {
          className: "number",
          variants: [{
            QF: `(\\b(${wz})((${Kz})|\\.)?|(${Kz}))[eE][+-]?(${Rz})\\b`
          }, {
            QF: `\\b(${wz})\\b((${Kz})\\b|\\.)?|(${Kz})\\b`
          }, {
            QF: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            QF: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            QF: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            QF: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            QF: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        fz = {
          className: "subst",
          QF: "\\$\\{",
          end: "\\}",
          keywords: Zz,
          contains: []
        },
        sz = {
          QF: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, fz],
            subLanguage: "xml"
          }
        },
        rz = {
          QF: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, fz],
            subLanguage: "css"
          }
        },
        oz = {
          QF: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, fz],
            subLanguage: "graphql"
          }
        },
        Nz = {
          className: "string",
          QF: "`",
          end: "`",
          contains: [zz.BACKSLASH_ESCAPE, fz]
        },
        vz = {
          className: "comment",
          variants: [zz.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              QF: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                QF: "@[A-Za-z]+"
              }, {
                className: "type",
                QF: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                QF: bz + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                QF: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), zz.C_BLOCK_COMMENT_MODE, zz.C_LINE_COMMENT_MODE]
        },
        xz = [zz.APOS_STRING_MODE, zz.QUOTE_STRING_MODE, sz, rz, oz, Nz, {
          match: /\$\d+/
        }, Xz];
      fz.contains = xz.concat({
        QF: /\{/,
        end: /\}/,
        keywords: Zz,
        contains: ["self"].concat(xz)
      });
      const Jz = [].concat(vz, fz.contains),
        Az = Jz.concat([{
          QF: /(\s*)\(/,
          end: /\)/,
          keywords: Zz,
          contains: ["self"].concat(Jz)
        }]),
        Tz = {
          className: "params",
          QF: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Zz,
          contains: Az
        },
        Lz = {
          variants: [{
            match: [/class/, /\s+/, bz, /\s+/, /extends/, /\s+/, uz.concat(bz, "(", uz.concat(/\./, bz), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, bz],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Pz = {
          relevance: 0,
          match: uz.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...lz, ...Mz]
          }
        },
        Gz = {
          variants: [{
            match: [/function/, /\s+/, bz, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Tz],
          illegal: /%/
        };
      const az = {
        match: uz.concat(/\b/, (Vz = [...tz, "super", "import"].map((zz => `${zz}\\s*\\(`)), uz.concat("(?!", Vz.join("|"), ")")), bz, uz.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Vz;
      const mz = {
          QF: uz.concat(/\./, uz.lookahead(uz.concat(bz, /(?![0-9A-Za-z$_(])/))),
          end: bz,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        qz = {
          match: [/get|set/, /\s+/, bz, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            QF: /\(\)/
          }, Tz]
        },
        hz = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + zz.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Uz = {
          match: [/const|var|let/, /\s+/, bz, /\s*/, /=\s*/, /(async\s*)?/, uz.lookahead(hz)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Tz]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Zz,
        exports: {
          PARAMS_CONTAINS: Az,
          CLASS_REFERENCE: Pz
        },
        illegal: /#(?![$_A-z])/,
        contains: [zz.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          QF: /^\s*['"]use (strict|asm)['"]/
        }, zz.APOS_STRING_MODE, zz.QUOTE_STRING_MODE, sz, rz, oz, Nz, vz, {
          match: /\$\d+/
        }, Xz, Pz, {
          scope: "attr",
          match: bz + uz.lookahead(":"),
          relevance: 0
        }, Uz, {
          QF: "(" + zz.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [vz, zz.REGEXP_MODE, {
            className: "function",
            QF: hz,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                QF: zz.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                QF: /\(\s*\)/,
                skip: !0
              }, {
                QF: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Zz,
                contains: Az
              }]
            }]
          }, {
            QF: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              QF: pz,
              end: dz
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              QF: Fz.QF,
              "on:begin": Fz.isTrulyOpeningTag,
              end: Fz.end
            }],
            subLanguage: "xml",
            contains: [{
              QF: Fz.QF,
              end: Fz.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Gz, {
          beginKeywords: "while if switch catch for"
        }, {
          QF: "\\b(?!function)" + zz.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Tz, zz.inherit(zz.TITLE_MODE, {
            QF: bz,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, mz, {
          match: "\\$" + bz,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Tz]
        }, az, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Lz, qz, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4483: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => dz
    });
    const Ez = "[A-Za-z$_][0-9A-Za-z$_]*",
      nz = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      iz = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      lz = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Mz = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      tz = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Hz = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Oz = [].concat(tz, lz, Mz);

    function pz(zz) {
      const uz = zz.regex,
        bz = Ez,
        pz = "<>",
        dz = "</>",
        Fz = {
          QF: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (zz, uz) => {
            const bz = zz[0].length + zz.index,
              Ez = zz.input[bz];
            if ("<" === Ez || "," === Ez) return void uz.ignoreMatch();
            let nz;
            ">" === Ez && (((zz, uz) => {
              let {
                after: bz
              } = uz;
              const Ez = "</" + zz[0].slice(1);
              return -1 !== zz.input.indexOf(Ez, bz)
            })(zz, {
              after: bz
            }) || uz.ignoreMatch());
            const iz = zz.input.substring(bz);
            ((nz = iz.match(/^\s*=/)) || (nz = iz.match(/^\s+extends\s+/)) && 0 === nz.index) && uz.ignoreMatch()
          }
        },
        Zz = {
          $pattern: Ez,
          keyword: nz,
          literal: iz,
          built_in: Oz,
          "variable.language": Hz
        },
        Rz = "[0-9](_?[0-9])*",
        Kz = `\\.(${Rz})`,
        wz = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Xz = {
          className: "number",
          variants: [{
            QF: `(\\b(${wz})((${Kz})|\\.)?|(${Kz}))[eE][+-]?(${Rz})\\b`
          }, {
            QF: `\\b(${wz})\\b((${Kz})\\b|\\.)?|(${Kz})\\b`
          }, {
            QF: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            QF: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            QF: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            QF: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            QF: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        fz = {
          className: "subst",
          QF: "\\$\\{",
          end: "\\}",
          keywords: Zz,
          contains: []
        },
        sz = {
          QF: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, fz],
            subLanguage: "xml"
          }
        },
        rz = {
          QF: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, fz],
            subLanguage: "css"
          }
        },
        oz = {
          QF: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, fz],
            subLanguage: "graphql"
          }
        },
        Nz = {
          className: "string",
          QF: "`",
          end: "`",
          contains: [zz.BACKSLASH_ESCAPE, fz]
        },
        vz = {
          className: "comment",
          variants: [zz.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              QF: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                QF: "@[A-Za-z]+"
              }, {
                className: "type",
                QF: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                QF: bz + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                QF: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), zz.C_BLOCK_COMMENT_MODE, zz.C_LINE_COMMENT_MODE]
        },
        xz = [zz.APOS_STRING_MODE, zz.QUOTE_STRING_MODE, sz, rz, oz, Nz, {
          match: /\$\d+/
        }, Xz];
      fz.contains = xz.concat({
        QF: /\{/,
        end: /\}/,
        keywords: Zz,
        contains: ["self"].concat(xz)
      });
      const Jz = [].concat(vz, fz.contains),
        Az = Jz.concat([{
          QF: /(\s*)\(/,
          end: /\)/,
          keywords: Zz,
          contains: ["self"].concat(Jz)
        }]),
        Tz = {
          className: "params",
          QF: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Zz,
          contains: Az
        },
        Lz = {
          variants: [{
            match: [/class/, /\s+/, bz, /\s+/, /extends/, /\s+/, uz.concat(bz, "(", uz.concat(/\./, bz), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, bz],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Pz = {
          relevance: 0,
          match: uz.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...lz, ...Mz]
          }
        },
        Gz = {
          variants: [{
            match: [/function/, /\s+/, bz, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Tz],
          illegal: /%/
        };
      const az = {
        match: uz.concat(/\b/, (Vz = [...tz, "super", "import"].map((zz => `${zz}\\s*\\(`)), uz.concat("(?!", Vz.join("|"), ")")), bz, uz.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Vz;
      const mz = {
          QF: uz.concat(/\./, uz.lookahead(uz.concat(bz, /(?![0-9A-Za-z$_(])/))),
          end: bz,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        qz = {
          match: [/get|set/, /\s+/, bz, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            QF: /\(\)/
          }, Tz]
        },
        hz = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + zz.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Uz = {
          match: [/const|var|let/, /\s+/, bz, /\s*/, /=\s*/, /(async\s*)?/, uz.lookahead(hz)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Tz]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Zz,
        exports: {
          PARAMS_CONTAINS: Az,
          CLASS_REFERENCE: Pz
        },
        illegal: /#(?![$_A-z])/,
        contains: [zz.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          QF: /^\s*['"]use (strict|asm)['"]/
        }, zz.APOS_STRING_MODE, zz.QUOTE_STRING_MODE, sz, rz, oz, Nz, vz, {
          match: /\$\d+/
        }, Xz, Pz, {
          scope: "attr",
          match: bz + uz.lookahead(":"),
          relevance: 0
        }, Uz, {
          QF: "(" + zz.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [vz, zz.REGEXP_MODE, {
            className: "function",
            QF: hz,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                QF: zz.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                QF: /\(\s*\)/,
                skip: !0
              }, {
                QF: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Zz,
                contains: Az
              }]
            }]
          }, {
            QF: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              QF: pz,
              end: dz
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              QF: Fz.QF,
              "on:begin": Fz.isTrulyOpeningTag,
              end: Fz.end
            }],
            subLanguage: "xml",
            contains: [{
              QF: Fz.QF,
              end: Fz.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Gz, {
          beginKeywords: "while if switch catch for"
        }, {
          QF: "\\b(?!function)" + zz.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Tz, zz.inherit(zz.TITLE_MODE, {
            QF: bz,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, mz, {
          match: "\\$" + bz,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Tz]
        }, az, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Lz, qz, {
          match: /\$[(.]/
        }]
      }
    }

    function dz(zz) {
      const uz = zz.regex,
        bz = pz(zz),
        lz = Ez,
        Mz = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        tz = {
          QF: [/namespace/, /\s+/, zz.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        dz = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: Mz
          },
          contains: [bz.exports.CLASS_REFERENCE]
        },
        Fz = {
          $pattern: Ez,
          keyword: nz.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: iz,
          built_in: Oz.concat(Mz),
          "variable.language": Hz
        },
        Zz = {
          className: "meta",
          QF: "@" + lz
        },
        Rz = (zz, uz, bz) => {
          const Ez = zz.contains.findIndex((zz => zz.label === uz));
          if (-1 === Ez) throw new Error("can not find mode to replace");
          zz.contains.splice(Ez, 1, bz)
        };
      Object.assign(bz.keywords, Fz), bz.exports.PARAMS_CONTAINS.push(Zz);
      const Kz = bz.contains.find((zz => "attr" === zz.scope)),
        wz = Object.assign({}, Kz, {
          match: uz.concat(lz, uz.lookahead(/\s*\?:/))
        });
      bz.exports.PARAMS_CONTAINS.push([bz.exports.CLASS_REFERENCE, Kz, wz]), bz.contains = bz.contains.concat([Zz, tz, dz, wz]), Rz(bz, "shebang", zz.SHEBANG()), Rz(bz, "use_strict", {
        className: "meta",
        relevance: 10,
        QF: /^\s*['"]use strict['"]/
      });
      return bz.contains.find((zz => "func.def" === zz.label)).relevance = 0, Object.assign(bz, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), bz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);