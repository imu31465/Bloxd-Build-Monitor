export const id = 76;
export const ids = [76];
export const modules = {
  4362: zz => {
    function tz(zz) {
      return zz instanceof Map ? zz.clear = zz.delete = zz.set = function() {
        throw new Error("map is read-only")
      } : zz instanceof Set && (zz.add = zz.clear = zz.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(zz), Object.getOwnPropertyNames(zz).forEach((sz => {
        const Fz = zz[sz],
          Wz = typeof Fz;
        "object" !== Wz && "function" !== Wz || Object.isFrozen(Fz) || tz(Fz)
      })), zz
    }
    class sz {
      constructor(zz) {
        void 0 === zz.data && (zz.data = {}), this.data = zz.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Fz(zz) {
      return zz.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Wz(zz) {
      const tz = Object.create(null);
      for (const Xz in zz) tz[Xz] = zz[Xz];
      for (var sz = arguments.length, Fz = new Array(sz > 1 ? sz - 1 : 0), Wz = 1; Wz < sz; Wz++) Fz[Wz - 1] = arguments[Wz];
      return Fz.forEach((function(zz) {
        for (const sz in zz) tz[sz] = zz[sz]
      })), tz
    }
    const Xz = zz => !!zz.scope;
    class Oz {
      constructor(zz, tz) {
        this.buffer = "", this.classPrefix = tz.classPrefix, zz.walk(this)
      }
      addText(zz) {
        this.buffer += Fz(zz)
      }
      openNode(zz) {
        if (!Xz(zz)) return;
        const tz = ((zz, tz) => {
          let {
            prefix: sz
          } = tz;
          if (zz.startsWith("language:")) return zz.replace("language:", "language-");
          if (zz.includes(".")) {
            const tz = zz.split(".");
            return [`${sz}${tz.shift()}`, ...tz.map(((zz, tz) => `${zz}${"_".repeat(tz+1)}`))].join(" ")
          }
          return `${sz}${zz}`
        })(zz.scope, {
          prefix: this.classPrefix
        });
        this.span(tz)
      }
      closeNode(zz) {
        Xz(zz) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(zz) {
        this.buffer += `<span class="${zz}">`
      }
    }
    const oz = function() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const tz = {
        children: []
      };
      return Object.assign(tz, zz), tz
    };
    class vz {
      constructor() {
        this.JB = oz(), this.stack = [this.JB]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.JB
      }
      add(zz) {
        this.top.children.push(zz)
      }
      openNode(zz) {
        const tz = oz({
          scope: zz
        });
        this.add(tz), this.stack.push(tz)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.JB, null, 4)
      }
      walk(zz) {
        return this.constructor._walk(zz, this.JB)
      }
      static _walk(zz, tz) {
        return "string" === typeof tz ? zz.addText(tz) : tz.children && (zz.openNode(tz), tz.children.forEach((tz => this._walk(zz, tz))), zz.closeNode(tz)), zz
      }
      static _collapse(zz) {
        "string" !== typeof zz && zz.children && (zz.children.every((zz => "string" === typeof zz)) ? zz.children = [zz.children.join("")] : zz.children.forEach((zz => {
          vz._collapse(zz)
        })))
      }
    }
    class Uz extends vz {
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
      __addSublanguage(zz, tz) {
        const sz = zz.root;
        tz && (sz.scope = `language:${tz}`), this.add(sz)
      }
      toHTML() {
        return new Oz(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Kz(zz) {
      return zz ? "string" === typeof zz ? zz : zz.source : null
    }

    function uz(zz) {
      return wz("(?=", zz, ")")
    }

    function Nz(zz) {
      return wz("(?:", zz, ")*")
    }

    function bz(zz) {
      return wz("(?:", zz, ")?")
    }

    function wz() {
      for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
      return tz.map((zz => Kz(zz))).join("")
    }

    function Dz() {
      for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
      const Fz = function(zz) {
        const tz = zz[zz.length - 1];
        return "object" === typeof tz && tz.constructor === Object ? (zz.splice(zz.length - 1, 1), tz) : {}
      }(tz);
      return "(" + (Fz.capture ? "" : "?:") + tz.map((zz => Kz(zz))).join("|") + ")"
    }

    function gz(zz) {
      return new RegExp(zz.toString() + "|").exec("").length - 1
    }
    const Hz = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Bz(zz, tz) {
      let {
        joinWith: sz
      } = tz, Fz = 0;
      return zz.map((zz => {
        Fz += 1;
        const tz = Fz;
        let sz = Kz(zz),
          Wz = "";
        for (; sz.length > 0;) {
          const zz = Hz.exec(sz);
          if (!zz) {
            Wz += sz;
            break
          }
          Wz += sz.substring(0, zz.index), sz = sz.substring(zz.index + zz[0].length), "\\" === zz[0][0] && zz[1] ? Wz += "\\" + String(Number(zz[1]) + tz) : (Wz += zz[0], "(" === zz[0] && Fz++)
        }
        return Wz
      })).map((zz => `(${zz})`)).join(sz)
    }
    const Pz = "[a-zA-Z]\\w*",
      rz = "[a-zA-Z_]\\w*",
      Yz = "\\b\\d+(\\.\\d+)?",
      xz = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      mz = "\\b(0b[01]+)",
      Jz = {
        ib: "\\\\[\\s\\S]",
        relevance: 0
      },
      Iz = {
        scope: "string",
        ib: "'",
        end: "'",
        illegal: "\\n",
        contains: [Jz]
      },
      Cz = {
        scope: "string",
        ib: '"',
        end: '"',
        illegal: "\\n",
        contains: [Jz]
      },
      ez = function(zz, tz) {
        const sz = Wz({
          scope: "comment",
          ib: zz,
          end: tz,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        sz.contains.push({
          scope: "doctag",
          ib: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Fz = Dz("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return sz.contains.push({
          ib: wz(/[ ]+/, "(", Fz, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), sz
      },
      Zz = ez("//", "$"),
      Gz = ez("/\\*", "\\*/"),
      Tz = ez("#", "$"),
      cz = {
        scope: "number",
        ib: Yz,
        relevance: 0
      },
      jz = {
        scope: "number",
        ib: xz,
        relevance: 0
      },
      Az = {
        scope: "number",
        ib: mz,
        relevance: 0
      },
      yz = {
        scope: "regexp",
        ib: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [Jz, {
          ib: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [Jz]
        }]
      },
      Mz = {
        scope: "title",
        ib: Pz,
        relevance: 0
      },
      dz = {
        scope: "title",
        ib: rz,
        relevance: 0
      },
      hz = {
        ib: "\\.\\s*" + rz,
        relevance: 0
      };
    var Qz = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: Iz,
      BACKSLASH_ESCAPE: Jz,
      BINARY_NUMBER_MODE: Az,
      BINARY_NUMBER_RE: mz,
      COMMENT: ez,
      C_BLOCK_COMMENT_MODE: Gz,
      C_LINE_COMMENT_MODE: Zz,
      C_NUMBER_MODE: jz,
      C_NUMBER_RE: xz,
      END_SAME_AS_BEGIN: function(zz) {
        return Object.assign(zz, {
          "on:begin": (zz, tz) => {
            tz.data._beginMatch = zz[1]
          },
          "on:end": (zz, tz) => {
            tz.data._beginMatch !== zz[1] && tz.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Tz,
      IDENT_RE: Pz,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: hz,
      NUMBER_MODE: cz,
      NUMBER_RE: Yz,
      PHRASAL_WORDS_MODE: {
        ib: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Cz,
      REGEXP_MODE: yz,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const tz = /^#![ ]*\//;
        return zz.binary && (zz.ib = wz(tz, /.*\b/, zz.binary, /\b.*/)), Wz({
          scope: "meta",
          ib: tz,
          end: /$/,
          relevance: 0,
          "on:begin": (zz, tz) => {
            0 !== zz.index && tz.ignoreMatch()
          }
        }, zz)
      },
      TITLE_MODE: Mz,
      UNDERSCORE_IDENT_RE: rz,
      UNDERSCORE_TITLE_MODE: dz
    });

    function kz(zz, tz) {
      "." === zz.input[zz.index - 1] && tz.ignoreMatch()
    }

    function iz(zz, tz) {
      void 0 !== zz.className && (zz.scope = zz.className, delete zz.className)
    }

    function Lz(zz, tz) {
      tz && zz.beginKeywords && (zz.ib = "\\b(" + zz.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", zz.__beforeBegin = kz, zz.keywords = zz.keywords || zz.beginKeywords, delete zz.beginKeywords, void 0 === zz.relevance && (zz.relevance = 0))
    }

    function lz(zz, tz) {
      Array.isArray(zz.illegal) && (zz.illegal = Dz(...zz.illegal))
    }

    function nz(zz, tz) {
      if (zz.match) {
        if (zz.ib || zz.end) throw new Error("begin & end are not supported with match");
        zz.ib = zz.match, delete zz.match
      }
    }

    function az(zz, tz) {
      void 0 === zz.relevance && (zz.relevance = 1)
    }
    const qz = (zz, tz) => {
        if (!zz.beforeMatch) return;
        if (zz.starts) throw new Error("beforeMatch cannot be used with starts");
        const sz = Object.assign({}, zz);
        Object.keys(zz).forEach((tz => {
          delete zz[tz]
        })), zz.keywords = sz.keywords, zz.ib = wz(sz.beforeMatch, uz(sz.ib)), zz.starts = {
          relevance: 0,
          contains: [Object.assign(sz, {
            endsParent: !0
          })]
        }, zz.relevance = 0, delete sz.beforeMatch
      },
      Sz = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function Vz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Fz = Object.create(null);
      return "string" === typeof zz ? Wz(sz, zz.split(" ")) : Array.isArray(zz) ? Wz(sz, zz) : Object.keys(zz).forEach((function(sz) {
        Object.assign(Fz, Vz(zz[sz], tz, sz))
      })), Fz;

      function Wz(zz, sz) {
        tz && (sz = sz.map((zz => zz.toLowerCase()))), sz.forEach((function(tz) {
          const sz = tz.split("|");
          Fz[sz[0]] = [zz, Rz(sz[0], sz[1])]
        }))
      }
    }

    function Rz(zz, tz) {
      return tz ? Number(tz) : function(zz) {
        return Sz.includes(zz.toLowerCase())
      }(zz) ? 0 : 1
    }
    const pz = {},
      fz = zz => {
        console.error(zz)
      },
      Ez = function(zz) {
        for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
        console.log(`WARN: ${zz}`, ...sz)
      },
      zt = (zz, tz) => {
        pz[`${zz}/${tz}`] || (console.log(`Deprecated as of ${zz}. ${tz}`), pz[`${zz}/${tz}`] = !0)
      },
      tt = new Error;

    function st(zz, tz, sz) {
      let {
        key: Fz
      } = sz, Wz = 0;
      const Xz = zz[Fz],
        Oz = {},
        oz = {};
      for (let vz = 1; vz <= tz.length; vz++) oz[vz + Wz] = Xz[vz], Oz[vz + Wz] = !0, Wz += gz(tz[vz - 1]);
      zz[Fz] = oz, zz[Fz]._emit = Oz, zz[Fz]._multi = !0
    }

    function Ft(zz) {
      ! function(zz) {
        zz.scope && "object" === typeof zz.scope && null !== zz.scope && (zz.beginScope = zz.scope, delete zz.scope)
      }(zz), "string" === typeof zz.beginScope && (zz.beginScope = {
          _wrap: zz.beginScope
        }), "string" === typeof zz.endScope && (zz.endScope = {
          _wrap: zz.endScope
        }),
        function(zz) {
          if (Array.isArray(zz.ib)) {
            if (zz.skip || zz.excludeBegin || zz.returnBegin) throw fz("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), tt;
            if ("object" !== typeof zz.beginScope || null === zz.beginScope) throw fz("beginScope must be object"), tt;
            st(zz, zz.ib, {
              key: "beginScope"
            }), zz.ib = Bz(zz.ib, {
              joinWith: ""
            })
          }
        }(zz),
        function(zz) {
          if (Array.isArray(zz.end)) {
            if (zz.skip || zz.excludeEnd || zz.returnEnd) throw fz("skip, excludeEnd, returnEnd not compatible with endScope: {}"), tt;
            if ("object" !== typeof zz.endScope || null === zz.endScope) throw fz("endScope must be object"), tt;
            st(zz, zz.end, {
              key: "endScope"
            }), zz.end = Bz(zz.end, {
              joinWith: ""
            })
          }
        }(zz)
    }

    function Wt(zz) {
      function tz(tz, sz) {
        return new RegExp(Kz(tz), "m" + (zz.case_insensitive ? "i" : "") + (zz.unicodeRegex ? "u" : "") + (sz ? "g" : ""))
      }
      class sz {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(zz, tz) {
          tz.position = this.position++, this.matchIndexes[this.matchAt] = tz, this.regexes.push([tz, zz]), this.matchAt += gz(zz) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const zz = this.regexes.map((zz => zz[1]));
          this.matcherRe = tz(Bz(zz, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(zz) {
          this.matcherRe.lastIndex = this.lastIndex;
          const tz = this.matcherRe.exec(zz);
          if (!tz) return null;
          const sz = tz.findIndex(((zz, tz) => tz > 0 && void 0 !== zz)),
            Fz = this.matchIndexes[sz];
          return tz.splice(0, sz), Object.assign(tz, Fz)
        }
      }
      class Fz {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(zz) {
          if (this.multiRegexes[zz]) return this.multiRegexes[zz];
          const tz = new sz;
          return this.rules.slice(zz).forEach((zz => {
            let [sz, Fz] = zz;
            return tz.addRule(sz, Fz)
          })), tz.compile(), this.multiRegexes[zz] = tz, tz
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(zz, tz) {
          this.rules.push([zz, tz]), "ib" === tz.type && this.count++
        }
        exec(zz) {
          const tz = this.getMatcher(this.regexIndex);
          tz.lastIndex = this.lastIndex;
          let sz = tz.exec(zz);
          if (this.resumingScanAtSamePosition())
            if (sz && sz.index === this.lastIndex);
            else {
              const tz = this.getMatcher(0);
              tz.lastIndex = this.lastIndex + 1, sz = tz.exec(zz)
            } return sz && (this.regexIndex += sz.position + 1, this.regexIndex === this.count && this.considerAll()), sz
        }
      }
      if (zz.compilerExtensions || (zz.compilerExtensions = []), zz.contains && zz.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return zz.classNameAliases = Wz(zz.classNameAliases || {}),
        function sz(Xz, Oz) {
          const oz = Xz;
          if (Xz.isCompiled) return oz;
          [iz, nz, Ft, qz].forEach((zz => zz(Xz, Oz))), zz.compilerExtensions.forEach((zz => zz(Xz, Oz))), Xz.__beforeBegin = null, [Lz, lz, az].forEach((zz => zz(Xz, Oz))), Xz.isCompiled = !0;
          let vz = null;
          return "object" === typeof Xz.keywords && Xz.keywords.$pattern && (Xz.keywords = Object.assign({}, Xz.keywords), vz = Xz.keywords.$pattern, delete Xz.keywords.$pattern), vz = vz || /\w+/, Xz.keywords && (Xz.keywords = Vz(Xz.keywords, zz.case_insensitive)), oz.keywordPatternRe = tz(vz, !0), Oz && (Xz.ib || (Xz.ib = /\B|\b/), oz.beginRe = tz(oz.ib), Xz.end || Xz.endsWithParent || (Xz.end = /\B|\b/), Xz.end && (oz.endRe = tz(oz.end)), oz.terminatorEnd = Kz(oz.end) || "", Xz.endsWithParent && Oz.terminatorEnd && (oz.terminatorEnd += (Xz.end ? "|" : "") + Oz.terminatorEnd)), Xz.illegal && (oz.illegalRe = tz(Xz.illegal)), Xz.contains || (Xz.contains = []), Xz.contains = [].concat(...Xz.contains.map((function(zz) {
            return function(zz) {
              zz.variants && !zz.cachedVariants && (zz.cachedVariants = zz.variants.map((function(tz) {
                return Wz(zz, {
                  variants: null
                }, tz)
              })));
              if (zz.cachedVariants) return zz.cachedVariants;
              if (Xt(zz)) return Wz(zz, {
                starts: zz.starts ? Wz(zz.starts) : null
              });
              if (Object.isFrozen(zz)) return Wz(zz);
              return zz
            }("self" === zz ? Xz : zz)
          }))), Xz.contains.forEach((function(zz) {
            sz(zz, oz)
          })), Xz.starts && sz(Xz.starts, Oz), oz.matcher = function(zz) {
            const tz = new Fz;
            return zz.contains.forEach((zz => tz.addRule(zz.ib, {
              rule: zz,
              type: "ib"
            }))), zz.terminatorEnd && tz.addRule(zz.terminatorEnd, {
              type: "end"
            }), zz.illegal && tz.addRule(zz.illegal, {
              type: "illegal"
            }), tz
          }(oz), oz
        }(zz)
    }

    function Xt(zz) {
      return !!zz && (zz.endsWithParent || Xt(zz.starts))
    }
    class Ot extends Error {
      constructor(zz, tz) {
        super(zz), this.name = "HTMLInjectionError", this.html = tz
      }
    }
    const ot = Fz,
      vt = Wz,
      Ut = Symbol("nomatch"),
      Kt = function(zz) {
        const Fz = Object.create(null),
          Wz = Object.create(null),
          Xz = [];
        let Oz = !0;
        const oz = "Could not find the language '{}', did you forget to load/include a language module?",
          vz = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Kz = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Uz
        };

        function gz(zz) {
          return Kz.noHighlightRe.test(zz)
        }

        function Hz(zz, tz, sz) {
          let Fz = "",
            Wz = "";
          "object" === typeof tz ? (Fz = zz, sz = tz.ignoreIllegals, Wz = tz.language) : (zt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), zt("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Wz = zz, Fz = tz), void 0 === sz && (sz = !0);
          const Xz = {
            code: Fz,
            language: Wz
          };
          Cz("before:highlight", Xz);
          const Oz = Xz.result ? Xz.result : Bz(Xz.language, Xz.code, sz);
          return Oz.code = Xz.code, Cz("after:highlight", Oz), Oz
        }

        function Bz(zz, tz, Wz, Xz) {
          const vz = Object.create(null);

          function Uz() {
            if (!Cz.keywords) return void Zz.addText(Gz);
            let zz = 0;
            Cz.keywordPatternRe.lastIndex = 0;
            let tz = Cz.keywordPatternRe.exec(Gz),
              sz = "";
            for (; tz;) {
              sz += Gz.substring(zz, tz.index);
              const Wz = xz.case_insensitive ? tz[0].toLowerCase() : tz[0],
                Xz = (Fz = Wz, Cz.keywords[Fz]);
              if (Xz) {
                const [zz, Fz] = Xz;
                if (Zz.addText(sz), sz = "", vz[Wz] = (vz[Wz] || 0) + 1, vz[Wz] <= 7 && (Tz += Fz), zz.startsWith("_")) sz += tz[0];
                else {
                  const sz = xz.classNameAliases[zz] || zz;
                  Nz(tz[0], sz)
                }
              } else sz += tz[0];
              zz = Cz.keywordPatternRe.lastIndex, tz = Cz.keywordPatternRe.exec(Gz)
            }
            var Fz;
            sz += Gz.substring(zz), Zz.addText(sz)
          }

          function uz() {
            null != Cz.subLanguage ? function() {
              if ("" === Gz) return;
              let zz = null;
              if ("string" === typeof Cz.subLanguage) {
                if (!Fz[Cz.subLanguage]) return void Zz.addText(Gz);
                zz = Bz(Cz.subLanguage, Gz, !0, ez[Cz.subLanguage]), ez[Cz.subLanguage] = zz._top
              } else zz = Pz(Gz, Cz.subLanguage.length ? Cz.subLanguage : null);
              Cz.relevance > 0 && (Tz += zz.relevance), Zz.__addSublanguage(zz._emitter, zz.language)
            }() : Uz(), Gz = ""
          }

          function Nz(zz, tz) {
            "" !== zz && (Zz.startScope(tz), Zz.addText(zz), Zz.endScope())
          }

          function bz(zz, tz) {
            let sz = 1;
            const Fz = tz.length - 1;
            for (; sz <= Fz;) {
              if (!zz._emit[sz]) {
                sz++;
                continue
              }
              const Fz = xz.classNameAliases[zz[sz]] || zz[sz],
                Wz = tz[sz];
              Fz ? Nz(Wz, Fz) : (Gz = Wz, Uz(), Gz = ""), sz++
            }
          }

          function wz(zz, tz) {
            return zz.scope && "string" === typeof zz.scope && Zz.openNode(xz.classNameAliases[zz.scope] || zz.scope), zz.beginScope && (zz.beginScope._wrap ? (Nz(Gz, xz.classNameAliases[zz.beginScope._wrap] || zz.beginScope._wrap), Gz = "") : zz.beginScope._multi && (bz(zz.beginScope, tz), Gz = "")), Cz = Object.create(zz, {
              parent: {
                value: Cz
              }
            }), Cz
          }

          function Dz(zz, tz, Fz) {
            let Wz = function(zz, tz) {
              const sz = zz && zz.exec(tz);
              return sz && 0 === sz.index
            }(zz.endRe, Fz);
            if (Wz) {
              if (zz["on:end"]) {
                const Fz = new sz(zz);
                zz["on:end"](tz, Fz), Fz.isMatchIgnored && (Wz = !1)
              }
              if (Wz) {
                for (; zz.endsParent && zz.parent;) zz = zz.parent;
                return zz
              }
            }
            if (zz.endsWithParent) return Dz(zz.parent, tz, Fz)
          }

          function gz(zz) {
            return 0 === Cz.matcher.regexIndex ? (Gz += zz[0], 1) : (Az = !0, 0)
          }

          function Hz(zz) {
            const sz = zz[0],
              Fz = tz.substring(zz.index),
              Wz = Dz(Cz, zz, Fz);
            if (!Wz) return Ut;
            const Xz = Cz;
            Cz.endScope && Cz.endScope._wrap ? (uz(), Nz(sz, Cz.endScope._wrap)) : Cz.endScope && Cz.endScope._multi ? (uz(), bz(Cz.endScope, zz)) : Xz.skip ? Gz += sz : (Xz.returnEnd || Xz.excludeEnd || (Gz += sz), uz(), Xz.excludeEnd && (Gz = sz));
            do {
              Cz.scope && Zz.closeNode(), Cz.skip || Cz.subLanguage || (Tz += Cz.relevance), Cz = Cz.parent
            } while (Cz !== Wz.parent);
            return Wz.starts && wz(Wz.starts, zz), Xz.returnEnd ? 0 : sz.length
          }
          let rz = {};

          function Yz(Fz, Xz) {
            const oz = Xz && Xz[0];
            if (Gz += Fz, null == oz) return uz(), 0;
            if ("ib" === rz.type && "end" === Xz.type && rz.index === Xz.index && "" === oz) {
              if (Gz += tz.slice(Xz.index, Xz.index + 1), !Oz) {
                const tz = new Error(`0 width match regex (${zz})`);
                throw tz.languageName = zz, tz.badRule = rz.rule, tz
              }
              return 1
            }
            if (rz = Xz, "ib" === Xz.type) return function(zz) {
              const tz = zz[0],
                Fz = zz.rule,
                Wz = new sz(Fz),
                Xz = [Fz.__beforeBegin, Fz["on:begin"]];
              for (const sz of Xz)
                if (sz && (sz(zz, Wz), Wz.isMatchIgnored)) return gz(tz);
              return Fz.skip ? Gz += tz : (Fz.excludeBegin && (Gz += tz), uz(), Fz.returnBegin || Fz.excludeBegin || (Gz = tz)), wz(Fz, zz), Fz.returnBegin ? 0 : tz.length
            }(Xz);
            if ("illegal" === Xz.type && !Wz) {
              const zz = new Error('Illegal lexeme "' + oz + '" for mode "' + (Cz.scope || "<unnamed>") + '"');
              throw zz.mode = Cz, zz
            }
            if ("end" === Xz.type) {
              const zz = Hz(Xz);
              if (zz !== Ut) return zz
            }
            if ("illegal" === Xz.type && "" === oz) return Gz += "\n", 1;
            if (jz > 1e5 && jz > 3 * Xz.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Gz += oz, oz.length
          }
          const xz = mz(zz);
          if (!xz) throw fz(oz.replace("{}", zz)), new Error('Unknown language: "' + zz + '"');
          const Jz = Wt(xz);
          let Iz = "",
            Cz = Xz || Jz;
          const ez = {},
            Zz = new Kz.__emitter(Kz);
          ! function() {
            const zz = [];
            for (let tz = Cz; tz !== xz; tz = tz.parent) tz.scope && zz.unshift(tz.scope);
            zz.forEach((zz => Zz.openNode(zz)))
          }();
          let Gz = "",
            Tz = 0,
            cz = 0,
            jz = 0,
            Az = !1;
          try {
            if (xz.__emitTokens) xz.__emitTokens(tz, Zz);
            else {
              for (Cz.matcher.considerAll();;) {
                jz++, Az ? Az = !1 : Cz.matcher.considerAll(), Cz.matcher.lastIndex = cz;
                const zz = Cz.matcher.exec(tz);
                if (!zz) break;
                const sz = Yz(tz.substring(cz, zz.index), zz);
                cz = zz.index + sz
              }
              Yz(tz.substring(cz))
            }
            return Zz.finalize(), Iz = Zz.toHTML(), {
              language: zz,
              value: Iz,
              relevance: Tz,
              illegal: !1,
              _emitter: Zz,
              _top: Cz
            }
          } catch (yz) {
            if (yz.message && yz.message.includes("Illegal")) return {
              language: zz,
              value: ot(tz),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: yz.message,
                index: cz,
                context: tz.slice(cz - 100, cz + 100),
                mode: yz.mode,
                resultSoFar: Iz
              },
              _emitter: Zz
            };
            if (Oz) return {
              language: zz,
              value: ot(tz),
              illegal: !1,
              relevance: 0,
              errorRaised: yz,
              _emitter: Zz,
              _top: Cz
            };
            throw yz
          }
        }

        function Pz(zz, tz) {
          tz = tz || Kz.languages || Object.keys(Fz);
          const sz = function(zz) {
              const tz = {
                value: ot(zz),
                illegal: !1,
                relevance: 0,
                _top: vz,
                _emitter: new Kz.__emitter(Kz)
              };
              return tz._emitter.addText(zz), tz
            }(zz),
            Wz = tz.filter(mz).filter(Iz).map((tz => Bz(tz, zz, !1)));
          Wz.unshift(sz);
          const Xz = Wz.sort(((zz, tz) => {
              if (zz.relevance !== tz.relevance) return tz.relevance - zz.relevance;
              if (zz.language && tz.language) {
                if (mz(zz.language).supersetOf === tz.language) return 1;
                if (mz(tz.language).supersetOf === zz.language) return -1
              }
              return 0
            })),
            [Oz, oz] = Xz,
            Uz = Oz;
          return Uz.secondBest = oz, Uz
        }

        function rz(zz) {
          let tz = null;
          const sz = function(zz) {
            let tz = zz.className + " ";
            tz += zz.parentNode ? zz.parentNode.className : "";
            const sz = Kz.languageDetectRe.exec(tz);
            if (sz) {
              const tz = mz(sz[1]);
              return tz || (Ez(oz.replace("{}", sz[1])), Ez("Falling back to no-highlight mode for this block.", zz)), tz ? sz[1] : "no-highlight"
            }
            return tz.split(/\s+/).find((zz => gz(zz) || mz(zz)))
          }(zz);
          if (gz(sz)) return;
          if (Cz("before:highlightElement", {
              el: zz,
              language: sz
            }), zz.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", zz);
          if (zz.children.length > 0 && (Kz.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(zz)), Kz.throwUnescapedHTML)) {
            throw new Ot("One of your code blocks includes unescaped HTML.", zz.innerHTML)
          }
          tz = zz;
          const Fz = tz.textContent,
            Xz = sz ? Hz(Fz, {
              language: sz,
              ignoreIllegals: !0
            }) : Pz(Fz);
          zz.innerHTML = Xz.value, zz.dataset.highlighted = "yes",
            function(zz, tz, sz) {
              const Fz = tz && Wz[tz] || sz;
              zz.classList.add("hljs"), zz.classList.add(`language-${Fz}`)
            }(zz, sz, Xz.language), zz.result = {
              language: Xz.language,
              re: Xz.relevance,
              relevance: Xz.relevance
            }, Xz.secondBest && (zz.secondBest = {
              language: Xz.secondBest.language,
              relevance: Xz.secondBest.relevance
            }), Cz("after:highlightElement", {
              el: zz,
              result: Xz,
              text: Fz
            })
        }
        let Yz = !1;

        function xz() {
          if ("loading" === document.readyState) return Yz || window.addEventListener("DOMContentLoaded", (function() {
            xz()
          }), !1), void(Yz = !0);
          document.querySelectorAll(Kz.cssSelector).forEach(rz)
        }

        function mz(zz) {
          return zz = (zz || "").toLowerCase(), Fz[zz] || Fz[Wz[zz]]
        }

        function Jz(zz, tz) {
          let {
            languageName: sz
          } = tz;
          "string" === typeof zz && (zz = [zz]), zz.forEach((zz => {
            Wz[zz.toLowerCase()] = sz
          }))
        }

        function Iz(zz) {
          const tz = mz(zz);
          return tz && !tz.disableAutodetect
        }

        function Cz(zz, tz) {
          const sz = zz;
          Xz.forEach((function(zz) {
            zz[sz] && zz[sz](tz)
          }))
        }
        Object.assign(zz, {
          highlight: Hz,
          highlightAuto: Pz,
          highlightAll: xz,
          highlightElement: rz,
          highlightBlock: function(zz) {
            return zt("10.7.0", "highlightBlock will be removed entirely in v12.0"), zt("10.7.0", "Please use highlightElement now."), rz(zz)
          },
          configure: function(zz) {
            Kz = vt(Kz, zz)
          },
          initHighlighting: () => {
            xz(), zt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            xz(), zt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(tz, sz) {
            let Wz = null;
            try {
              Wz = sz(zz)
            } catch (Xz) {
              if (fz("Language definition for '{}' could not be registered.".replace("{}", tz)), !Oz) throw Xz;
              fz(Xz), Wz = vz
            }
            Wz.name || (Wz.name = tz), Fz[tz] = Wz, Wz.rawDefinition = sz.bind(null, zz), Wz.aliases && Jz(Wz.aliases, {
              languageName: tz
            })
          },
          unregisterLanguage: function(zz) {
            delete Fz[zz];
            for (const tz of Object.keys(Wz)) Wz[tz] === zz && delete Wz[tz]
          },
          listLanguages: function() {
            return Object.keys(Fz)
          },
          getLanguage: mz,
          registerAliases: Jz,
          autoDetection: Iz,
          inherit: vt,
          addPlugin: function(zz) {
            ! function(zz) {
              zz["before:highlightBlock"] && !zz["before:highlightElement"] && (zz["before:highlightElement"] = tz => {
                zz["before:highlightBlock"](Object.assign({
                  block: tz.el
                }, tz))
              }), zz["after:highlightBlock"] && !zz["after:highlightElement"] && (zz["after:highlightElement"] = tz => {
                zz["after:highlightBlock"](Object.assign({
                  block: tz.el
                }, tz))
              })
            }(zz), Xz.push(zz)
          },
          removePlugin: function(zz) {
            const tz = Xz.indexOf(zz); - 1 !== tz && Xz.splice(tz, 1)
          }
        }), zz.debugMode = function() {
          Oz = !1
        }, zz.safeMode = function() {
          Oz = !0
        }, zz.versionString = "11.11.1", zz.regex = {
          concat: wz,
          lookahead: uz,
          either: Dz,
          optional: bz,
          anyNumberOfTimes: Nz
        };
        for (const sz in Qz) "object" === typeof Qz[sz] && tz(Qz[sz]);
        return Object.assign(zz, Qz), zz
      },
      ut = Kt({});
    ut.newInstance = () => Kt({}), zz.exports = ut, ut.HighlightJS = ut, ut.default = ut
  },
  4359: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    const Fz = sz(4362)
  },
  4367: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => uz
    });
    const Fz = "[A-Za-z$_][0-9A-Za-z$_]*",
      Wz = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Xz = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Oz = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      oz = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      vz = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Uz = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Kz = [].concat(vz, Oz, oz);

    function uz(zz) {
      const tz = zz.regex,
        sz = Fz,
        uz = "<>",
        Nz = "</>",
        bz = {
          ib: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (zz, tz) => {
            const sz = zz[0].length + zz.index,
              Fz = zz.input[sz];
            if ("<" === Fz || "," === Fz) return void tz.ignoreMatch();
            let Wz;
            ">" === Fz && (((zz, tz) => {
              let {
                after: sz
              } = tz;
              const Fz = "</" + zz[0].slice(1);
              return -1 !== zz.input.indexOf(Fz, sz)
            })(zz, {
              after: sz
            }) || tz.ignoreMatch());
            const Xz = zz.input.substring(sz);
            ((Wz = Xz.match(/^\s*=/)) || (Wz = Xz.match(/^\s+extends\s+/)) && 0 === Wz.index) && tz.ignoreMatch()
          }
        },
        wz = {
          $pattern: Fz,
          keyword: Wz,
          literal: Xz,
          built_in: Kz,
          "variable.language": Uz
        },
        Dz = "[0-9](_?[0-9])*",
        gz = `\\.(${Dz})`,
        Hz = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Bz = {
          className: "number",
          variants: [{
            ib: `(\\b(${Hz})((${gz})|\\.)?|(${gz}))[eE][+-]?(${Dz})\\b`
          }, {
            ib: `\\b(${Hz})\\b((${gz})\\b|\\.)?|(${gz})\\b`
          }, {
            ib: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            ib: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            ib: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            ib: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            ib: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Pz = {
          className: "subst",
          ib: "\\$\\{",
          end: "\\}",
          keywords: wz,
          contains: []
        },
        rz = {
          ib: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, Pz],
            subLanguage: "xml"
          }
        },
        Yz = {
          ib: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, Pz],
            subLanguage: "css"
          }
        },
        xz = {
          ib: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, Pz],
            subLanguage: "graphql"
          }
        },
        mz = {
          className: "string",
          ib: "`",
          end: "`",
          contains: [zz.BACKSLASH_ESCAPE, Pz]
        },
        Jz = {
          className: "comment",
          variants: [zz.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              ib: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                ib: "@[A-Za-z]+"
              }, {
                className: "type",
                ib: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                ib: sz + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                ib: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), zz.C_BLOCK_COMMENT_MODE, zz.C_LINE_COMMENT_MODE]
        },
        Iz = [zz.APOS_STRING_MODE, zz.QUOTE_STRING_MODE, rz, Yz, xz, mz, {
          match: /\$\d+/
        }, Bz];
      Pz.contains = Iz.concat({
        ib: /\{/,
        end: /\}/,
        keywords: wz,
        contains: ["self"].concat(Iz)
      });
      const Cz = [].concat(Jz, Pz.contains),
        ez = Cz.concat([{
          ib: /(\s*)\(/,
          end: /\)/,
          keywords: wz,
          contains: ["self"].concat(Cz)
        }]),
        Zz = {
          className: "params",
          ib: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: wz,
          contains: ez
        },
        Gz = {
          variants: [{
            match: [/class/, /\s+/, sz, /\s+/, /extends/, /\s+/, tz.concat(sz, "(", tz.concat(/\./, sz), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, sz],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Tz = {
          relevance: 0,
          match: tz.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Oz, ...oz]
          }
        },
        cz = {
          variants: [{
            match: [/function/, /\s+/, sz, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Zz],
          illegal: /%/
        };
      const jz = {
        match: tz.concat(/\b/, (Az = [...vz, "super", "import"].map((zz => `${zz}\\s*\\(`)), tz.concat("(?!", Az.join("|"), ")")), sz, tz.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Az;
      const yz = {
          ib: tz.concat(/\./, tz.lookahead(tz.concat(sz, /(?![0-9A-Za-z$_(])/))),
          end: sz,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Mz = {
          match: [/get|set/, /\s+/, sz, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            ib: /\(\)/
          }, Zz]
        },
        dz = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + zz.UNDERSCORE_IDENT_RE + ")\\s*=>",
        hz = {
          match: [/const|var|let/, /\s+/, sz, /\s*/, /=\s*/, /(async\s*)?/, tz.lookahead(dz)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Zz]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: wz,
        exports: {
          PARAMS_CONTAINS: ez,
          CLASS_REFERENCE: Tz
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
          ib: /^\s*['"]use (strict|asm)['"]/
        }, zz.APOS_STRING_MODE, zz.QUOTE_STRING_MODE, rz, Yz, xz, mz, Jz, {
          match: /\$\d+/
        }, Bz, Tz, {
          scope: "attr",
          match: sz + tz.lookahead(":"),
          relevance: 0
        }, hz, {
          ib: "(" + zz.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Jz, zz.REGEXP_MODE, {
            className: "function",
            ib: dz,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                ib: zz.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                ib: /\(\s*\)/,
                skip: !0
              }, {
                ib: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: wz,
                contains: ez
              }]
            }]
          }, {
            ib: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              ib: uz,
              end: Nz
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              ib: bz.ib,
              "on:begin": bz.isTrulyOpeningTag,
              end: bz.end
            }],
            subLanguage: "xml",
            contains: [{
              ib: bz.ib,
              end: bz.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, cz, {
          beginKeywords: "while if switch catch for"
        }, {
          ib: "\\b(?!function)" + zz.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Zz, zz.inherit(zz.TITLE_MODE, {
            ib: sz,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, yz, {
          match: "\\$" + sz,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Zz]
        }, jz, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Gz, Mz, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4373: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Nz
    });
    const Fz = "[A-Za-z$_][0-9A-Za-z$_]*",
      Wz = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Xz = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Oz = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      oz = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      vz = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Uz = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Kz = [].concat(vz, Oz, oz);

    function uz(zz) {
      const tz = zz.regex,
        sz = Fz,
        uz = "<>",
        Nz = "</>",
        bz = {
          ib: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (zz, tz) => {
            const sz = zz[0].length + zz.index,
              Fz = zz.input[sz];
            if ("<" === Fz || "," === Fz) return void tz.ignoreMatch();
            let Wz;
            ">" === Fz && (((zz, tz) => {
              let {
                after: sz
              } = tz;
              const Fz = "</" + zz[0].slice(1);
              return -1 !== zz.input.indexOf(Fz, sz)
            })(zz, {
              after: sz
            }) || tz.ignoreMatch());
            const Xz = zz.input.substring(sz);
            ((Wz = Xz.match(/^\s*=/)) || (Wz = Xz.match(/^\s+extends\s+/)) && 0 === Wz.index) && tz.ignoreMatch()
          }
        },
        wz = {
          $pattern: Fz,
          keyword: Wz,
          literal: Xz,
          built_in: Kz,
          "variable.language": Uz
        },
        Dz = "[0-9](_?[0-9])*",
        gz = `\\.(${Dz})`,
        Hz = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Bz = {
          className: "number",
          variants: [{
            ib: `(\\b(${Hz})((${gz})|\\.)?|(${gz}))[eE][+-]?(${Dz})\\b`
          }, {
            ib: `\\b(${Hz})\\b((${gz})\\b|\\.)?|(${gz})\\b`
          }, {
            ib: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            ib: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            ib: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            ib: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            ib: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Pz = {
          className: "subst",
          ib: "\\$\\{",
          end: "\\}",
          keywords: wz,
          contains: []
        },
        rz = {
          ib: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, Pz],
            subLanguage: "xml"
          }
        },
        Yz = {
          ib: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, Pz],
            subLanguage: "css"
          }
        },
        xz = {
          ib: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [zz.BACKSLASH_ESCAPE, Pz],
            subLanguage: "graphql"
          }
        },
        mz = {
          className: "string",
          ib: "`",
          end: "`",
          contains: [zz.BACKSLASH_ESCAPE, Pz]
        },
        Jz = {
          className: "comment",
          variants: [zz.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              ib: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                ib: "@[A-Za-z]+"
              }, {
                className: "type",
                ib: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                ib: sz + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                ib: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), zz.C_BLOCK_COMMENT_MODE, zz.C_LINE_COMMENT_MODE]
        },
        Iz = [zz.APOS_STRING_MODE, zz.QUOTE_STRING_MODE, rz, Yz, xz, mz, {
          match: /\$\d+/
        }, Bz];
      Pz.contains = Iz.concat({
        ib: /\{/,
        end: /\}/,
        keywords: wz,
        contains: ["self"].concat(Iz)
      });
      const Cz = [].concat(Jz, Pz.contains),
        ez = Cz.concat([{
          ib: /(\s*)\(/,
          end: /\)/,
          keywords: wz,
          contains: ["self"].concat(Cz)
        }]),
        Zz = {
          className: "params",
          ib: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: wz,
          contains: ez
        },
        Gz = {
          variants: [{
            match: [/class/, /\s+/, sz, /\s+/, /extends/, /\s+/, tz.concat(sz, "(", tz.concat(/\./, sz), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, sz],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Tz = {
          relevance: 0,
          match: tz.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Oz, ...oz]
          }
        },
        cz = {
          variants: [{
            match: [/function/, /\s+/, sz, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Zz],
          illegal: /%/
        };
      const jz = {
        match: tz.concat(/\b/, (Az = [...vz, "super", "import"].map((zz => `${zz}\\s*\\(`)), tz.concat("(?!", Az.join("|"), ")")), sz, tz.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Az;
      const yz = {
          ib: tz.concat(/\./, tz.lookahead(tz.concat(sz, /(?![0-9A-Za-z$_(])/))),
          end: sz,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Mz = {
          match: [/get|set/, /\s+/, sz, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            ib: /\(\)/
          }, Zz]
        },
        dz = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + zz.UNDERSCORE_IDENT_RE + ")\\s*=>",
        hz = {
          match: [/const|var|let/, /\s+/, sz, /\s*/, /=\s*/, /(async\s*)?/, tz.lookahead(dz)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Zz]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: wz,
        exports: {
          PARAMS_CONTAINS: ez,
          CLASS_REFERENCE: Tz
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
          ib: /^\s*['"]use (strict|asm)['"]/
        }, zz.APOS_STRING_MODE, zz.QUOTE_STRING_MODE, rz, Yz, xz, mz, Jz, {
          match: /\$\d+/
        }, Bz, Tz, {
          scope: "attr",
          match: sz + tz.lookahead(":"),
          relevance: 0
        }, hz, {
          ib: "(" + zz.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Jz, zz.REGEXP_MODE, {
            className: "function",
            ib: dz,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                ib: zz.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                ib: /\(\s*\)/,
                skip: !0
              }, {
                ib: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: wz,
                contains: ez
              }]
            }]
          }, {
            ib: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              ib: uz,
              end: Nz
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              ib: bz.ib,
              "on:begin": bz.isTrulyOpeningTag,
              end: bz.end
            }],
            subLanguage: "xml",
            contains: [{
              ib: bz.ib,
              end: bz.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, cz, {
          beginKeywords: "while if switch catch for"
        }, {
          ib: "\\b(?!function)" + zz.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Zz, zz.inherit(zz.TITLE_MODE, {
            ib: sz,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, yz, {
          match: "\\$" + sz,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Zz]
        }, jz, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Gz, Mz, {
          match: /\$[(.]/
        }]
      }
    }

    function Nz(zz) {
      const tz = zz.regex,
        sz = uz(zz),
        Oz = Fz,
        oz = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        vz = {
          ib: [/namespace/, /\s+/, zz.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Nz = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: oz
          },
          contains: [sz.exports.CLASS_REFERENCE]
        },
        bz = {
          $pattern: Fz,
          keyword: Wz.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Xz,
          built_in: Kz.concat(oz),
          "variable.language": Uz
        },
        wz = {
          className: "meta",
          ib: "@" + Oz
        },
        Dz = (zz, tz, sz) => {
          const Fz = zz.contains.findIndex((zz => zz.label === tz));
          if (-1 === Fz) throw new Error("can not find mode to replace");
          zz.contains.splice(Fz, 1, sz)
        };
      Object.assign(sz.keywords, bz), sz.exports.PARAMS_CONTAINS.push(wz);
      const gz = sz.contains.find((zz => "attr" === zz.scope)),
        Hz = Object.assign({}, gz, {
          match: tz.concat(Oz, tz.lookahead(/\s*\?:/))
        });
      sz.exports.PARAMS_CONTAINS.push([sz.exports.CLASS_REFERENCE, gz, Hz]), sz.contains = sz.contains.concat([wz, vz, Nz, Hz]), Dz(sz, "shebang", zz.SHEBANG()), Dz(sz, "use_strict", {
        className: "meta",
        relevance: 10,
        ib: /^\s*['"]use strict['"]/
      });
      return sz.contains.find((zz => "func.def" === zz.label)).relevance = 0, Object.assign(sz, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), sz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);