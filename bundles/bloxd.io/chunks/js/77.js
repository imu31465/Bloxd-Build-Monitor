export const id = 77;
export const ids = [77];
export const modules = {
  4472: vv => {
    function zv(vv) {
      return vv instanceof Map ? vv.clear = vv.delete = vv.set = function() {
        throw new Error("map is read-only")
      } : vv instanceof Set && (vv.add = vv.clear = vv.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(vv), Object.getOwnPropertyNames(vv).forEach((Pv => {
        const hv = vv[Pv],
          Sv = typeof hv;
        "object" !== Sv && "function" !== Sv || Object.isFrozen(hv) || zv(hv)
      })), vv
    }
    class Pv {
      constructor(vv) {
        void 0 === vv.data && (vv.data = {}), this.data = vv.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function hv(vv) {
      return vv.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Sv(vv) {
      const zv = Object.create(null);
      for (const ev in vv) zv[ev] = vv[ev];
      for (var Pv = arguments.length, hv = new Array(Pv > 1 ? Pv - 1 : 0), Sv = 1; Sv < Pv; Sv++) hv[Sv - 1] = arguments[Sv];
      return hv.forEach((function(vv) {
        for (const Pv in vv) zv[Pv] = vv[Pv]
      })), zv
    }
    const ev = vv => !!vv.scope;
    class gv {
      constructor(vv, zv) {
        this.buffer = "", this.classPrefix = zv.classPrefix, vv.walk(this)
      }
      addText(vv) {
        this.buffer += hv(vv)
      }
      openNode(vv) {
        if (!ev(vv)) return;
        const zv = ((vv, zv) => {
          let {
            prefix: Pv
          } = zv;
          if (vv.startsWith("language:")) return vv.replace("language:", "language-");
          if (vv.includes(".")) {
            const zv = vv.split(".");
            return [`${Pv}${zv.shift()}`, ...zv.map(((vv, zv) => `${vv}${"_".repeat(zv+1)}`))].join(" ")
          }
          return `${Pv}${vv}`
        })(vv.scope, {
          prefix: this.classPrefix
        });
        this.span(zv)
      }
      closeNode(vv) {
        ev(vv) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(vv) {
        this.buffer += `<span class="${vv}">`
      }
    }
    const pv = function() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const zv = {
        children: []
      };
      return Object.assign(zv, vv), zv
    };
    class dv {
      constructor() {
        this.QG = pv(), this.stack = [this.QG]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.QG
      }
      add(vv) {
        this.top.children.push(vv)
      }
      openNode(vv) {
        const zv = pv({
          scope: vv
        });
        this.add(zv), this.stack.push(zv)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.QG, null, 4)
      }
      walk(vv) {
        return this.constructor._walk(vv, this.QG)
      }
      static _walk(vv, zv) {
        return "string" === typeof zv ? vv.addText(zv) : zv.children && (vv.openNode(zv), zv.children.forEach((zv => this._walk(vv, zv))), vv.closeNode(zv)), vv
      }
      static _collapse(vv) {
        "string" !== typeof vv && vv.children && (vv.children.every((vv => "string" === typeof vv)) ? vv.children = [vv.children.join("")] : vv.children.forEach((vv => {
          dv._collapse(vv)
        })))
      }
    }
    class Nv extends dv {
      constructor(vv) {
        super(), this.options = vv
      }
      addText(vv) {
        "" !== vv && this.add(vv)
      }
      startScope(vv) {
        this.openNode(vv)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(vv, zv) {
        const Pv = vv.root;
        zv && (Pv.scope = `language:${zv}`), this.add(Pv)
      }
      toHTML() {
        return new gv(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function lv(vv) {
      return vv ? "string" === typeof vv ? vv : vv.source : null
    }

    function Tv(vv) {
      return av("(?=", vv, ")")
    }

    function Wv(vv) {
      return av("(?:", vv, ")*")
    }

    function wv(vv) {
      return av("(?:", vv, ")?")
    }

    function av() {
      for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
      return zv.map((vv => lv(vv))).join("")
    }

    function sv() {
      for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
      const hv = function(vv) {
        const zv = vv[vv.length - 1];
        return "object" === typeof zv && zv.constructor === Object ? (vv.splice(vv.length - 1, 1), zv) : {}
      }(zv);
      return "(" + (hv.capture ? "" : "?:") + zv.map((vv => lv(vv))).join("|") + ")"
    }

    function Cv(vv) {
      return new RegExp(vv.toString() + "|").exec("").length - 1
    }
    const iv = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function cv(vv, zv) {
      let {
        joinWith: Pv
      } = zv, hv = 0;
      return vv.map((vv => {
        hv += 1;
        const zv = hv;
        let Pv = lv(vv),
          Sv = "";
        for (; Pv.length > 0;) {
          const vv = iv.exec(Pv);
          if (!vv) {
            Sv += Pv;
            break
          }
          Sv += Pv.substring(0, vv.index), Pv = Pv.substring(vv.index + vv[0].length), "\\" === vv[0][0] && vv[1] ? Sv += "\\" + String(Number(vv[1]) + zv) : (Sv += vv[0], "(" === vv[0] && hv++)
        }
        return Sv
      })).map((vv => `(${vv})`)).join(Pv)
    }
    const Gv = "[a-zA-Z]\\w*",
      mv = "[a-zA-Z_]\\w*",
      jv = "\\b\\d+(\\.\\d+)?",
      fv = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Fv = "\\b(0b[01]+)",
      Yv = {
        dw: "\\\\[\\s\\S]",
        relevance: 0
      },
      nv = {
        scope: "string",
        dw: "'",
        end: "'",
        illegal: "\\n",
        contains: [Yv]
      },
      Ov = {
        scope: "string",
        dw: '"',
        end: '"',
        illegal: "\\n",
        contains: [Yv]
      },
      Dv = function(vv, zv) {
        const Pv = Sv({
          scope: "comment",
          dw: vv,
          end: zv,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        Pv.contains.push({
          scope: "doctag",
          dw: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const hv = sv("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return Pv.contains.push({
          dw: av(/[ ]+/, "(", hv, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), Pv
      },
      Kv = Dv("//", "$"),
      Vv = Dv("/\\*", "\\*/"),
      Uv = Dv("#", "$"),
      Rv = {
        scope: "number",
        dw: jv,
        relevance: 0
      },
      xv = {
        scope: "number",
        dw: fv,
        relevance: 0
      },
      tv = {
        scope: "number",
        dw: Fv,
        relevance: 0
      },
      qv = {
        scope: "regexp",
        dw: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [Yv, {
          dw: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [Yv]
        }]
      },
      Iv = {
        scope: "title",
        dw: Gv,
        relevance: 0
      },
      Qv = {
        scope: "title",
        dw: mv,
        relevance: 0
      },
      Zv = {
        dw: "\\.\\s*" + mv,
        relevance: 0
      };
    var Av = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: nv,
      BACKSLASH_ESCAPE: Yv,
      BINARY_NUMBER_MODE: tv,
      BINARY_NUMBER_RE: Fv,
      COMMENT: Dv,
      C_BLOCK_COMMENT_MODE: Vv,
      C_LINE_COMMENT_MODE: Kv,
      C_NUMBER_MODE: xv,
      C_NUMBER_RE: fv,
      END_SAME_AS_BEGIN: function(vv) {
        return Object.assign(vv, {
          "on:begin": (vv, zv) => {
            zv.data._beginMatch = vv[1]
          },
          "on:end": (vv, zv) => {
            zv.data._beginMatch !== vv[1] && zv.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Uv,
      IDENT_RE: Gv,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Zv,
      NUMBER_MODE: Rv,
      NUMBER_RE: jv,
      PHRASAL_WORDS_MODE: {
        dw: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Ov,
      REGEXP_MODE: qv,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const zv = /^#![ ]*\//;
        return vv.binary && (vv.dw = av(zv, /.*\b/, vv.binary, /\b.*/)), Sv({
          scope: "meta",
          dw: zv,
          end: /$/,
          relevance: 0,
          "on:begin": (vv, zv) => {
            0 !== vv.index && zv.ignoreMatch()
          }
        }, vv)
      },
      TITLE_MODE: Iv,
      UNDERSCORE_IDENT_RE: mv,
      UNDERSCORE_TITLE_MODE: Qv
    });

    function Lv(vv, zv) {
      "." === vv.input[vv.index - 1] && zv.ignoreMatch()
    }

    function Hv(vv, zv) {
      void 0 !== vv.className && (vv.scope = vv.className, delete vv.className)
    }

    function Mv(vv, zv) {
      zv && vv.beginKeywords && (vv.dw = "\\b(" + vv.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", vv.__beforeBegin = Lv, vv.keywords = vv.keywords || vv.beginKeywords, delete vv.beginKeywords, void 0 === vv.relevance && (vv.relevance = 0))
    }

    function yv(vv, zv) {
      Array.isArray(vv.illegal) && (vv.illegal = sv(...vv.illegal))
    }

    function Bv(vv, zv) {
      if (vv.match) {
        if (vv.dw || vv.end) throw new Error("begin & end are not supported with match");
        vv.dw = vv.match, delete vv.match
      }
    }

    function Jv(vv, zv) {
      void 0 === vv.relevance && (vv.relevance = 1)
    }
    const Ev = (vv, zv) => {
        if (!vv.beforeMatch) return;
        if (vv.starts) throw new Error("beforeMatch cannot be used with starts");
        const Pv = Object.assign({}, vv);
        Object.keys(vv).forEach((zv => {
          delete vv[zv]
        })), vv.keywords = Pv.keywords, vv.dw = av(Pv.beforeMatch, Tv(Pv.dw)), vv.starts = {
          relevance: 0,
          contains: [Object.assign(Pv, {
            endsParent: !0
          })]
        }, vv.relevance = 0, delete Pv.beforeMatch
      },
      ov = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function bv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const hv = Object.create(null);
      return "string" === typeof vv ? Sv(Pv, vv.split(" ")) : Array.isArray(vv) ? Sv(Pv, vv) : Object.keys(vv).forEach((function(Pv) {
        Object.assign(hv, bv(vv[Pv], zv, Pv))
      })), hv;

      function Sv(vv, Pv) {
        zv && (Pv = Pv.map((vv => vv.toLowerCase()))), Pv.forEach((function(zv) {
          const Pv = zv.split("|");
          hv[Pv[0]] = [vv, rv(Pv[0], Pv[1])]
        }))
      }
    }

    function rv(vv, zv) {
      return zv ? Number(zv) : function(vv) {
        return ov.includes(vv.toLowerCase())
      }(vv) ? 0 : 1
    }
    const kv = {},
      Xv = vv => {
        console.error(vv)
      },
      uv = function(vv) {
        for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
        console.log(`WARN: ${vv}`, ...Pv)
      },
      vz = (vv, zv) => {
        kv[`${vv}/${zv}`] || (console.log(`Deprecated as of ${vv}. ${zv}`), kv[`${vv}/${zv}`] = !0)
      },
      zz = new Error;

    function Pz(vv, zv, Pv) {
      let {
        key: hv
      } = Pv, Sv = 0;
      const ev = vv[hv],
        gv = {},
        pv = {};
      for (let dv = 1; dv <= zv.length; dv++) pv[dv + Sv] = ev[dv], gv[dv + Sv] = !0, Sv += Cv(zv[dv - 1]);
      vv[hv] = pv, vv[hv]._emit = gv, vv[hv]._multi = !0
    }

    function hz(vv) {
      ! function(vv) {
        vv.scope && "object" === typeof vv.scope && null !== vv.scope && (vv.beginScope = vv.scope, delete vv.scope)
      }(vv), "string" === typeof vv.beginScope && (vv.beginScope = {
          _wrap: vv.beginScope
        }), "string" === typeof vv.endScope && (vv.endScope = {
          _wrap: vv.endScope
        }),
        function(vv) {
          if (Array.isArray(vv.dw)) {
            if (vv.skip || vv.excludeBegin || vv.returnBegin) throw Xv("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), zz;
            if ("object" !== typeof vv.beginScope || null === vv.beginScope) throw Xv("beginScope must be object"), zz;
            Pz(vv, vv.dw, {
              key: "beginScope"
            }), vv.dw = cv(vv.dw, {
              joinWith: ""
            })
          }
        }(vv),
        function(vv) {
          if (Array.isArray(vv.end)) {
            if (vv.skip || vv.excludeEnd || vv.returnEnd) throw Xv("skip, excludeEnd, returnEnd not compatible with endScope: {}"), zz;
            if ("object" !== typeof vv.endScope || null === vv.endScope) throw Xv("endScope must be object"), zz;
            Pz(vv, vv.end, {
              key: "endScope"
            }), vv.end = cv(vv.end, {
              joinWith: ""
            })
          }
        }(vv)
    }

    function Sz(vv) {
      function zv(zv, Pv) {
        return new RegExp(lv(zv), "m" + (vv.case_insensitive ? "i" : "") + (vv.unicodeRegex ? "u" : "") + (Pv ? "g" : ""))
      }
      class Pv {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(vv, zv) {
          zv.position = this.position++, this.matchIndexes[this.matchAt] = zv, this.regexes.push([zv, vv]), this.matchAt += Cv(vv) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const vv = this.regexes.map((vv => vv[1]));
          this.matcherRe = zv(cv(vv, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(vv) {
          this.matcherRe.lastIndex = this.lastIndex;
          const zv = this.matcherRe.exec(vv);
          if (!zv) return null;
          const Pv = zv.findIndex(((vv, zv) => zv > 0 && void 0 !== vv)),
            hv = this.matchIndexes[Pv];
          return zv.splice(0, Pv), Object.assign(zv, hv)
        }
      }
      class hv {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(vv) {
          if (this.multiRegexes[vv]) return this.multiRegexes[vv];
          const zv = new Pv;
          return this.rules.slice(vv).forEach((vv => {
            let [Pv, hv] = vv;
            return zv.addRule(Pv, hv)
          })), zv.compile(), this.multiRegexes[vv] = zv, zv
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(vv, zv) {
          this.rules.push([vv, zv]), "dw" === zv.type && this.count++
        }
        exec(vv) {
          const zv = this.getMatcher(this.regexIndex);
          zv.lastIndex = this.lastIndex;
          let Pv = zv.exec(vv);
          if (this.resumingScanAtSamePosition())
            if (Pv && Pv.index === this.lastIndex);
            else {
              const zv = this.getMatcher(0);
              zv.lastIndex = this.lastIndex + 1, Pv = zv.exec(vv)
            } return Pv && (this.regexIndex += Pv.position + 1, this.regexIndex === this.count && this.considerAll()), Pv
        }
      }
      if (vv.compilerExtensions || (vv.compilerExtensions = []), vv.contains && vv.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return vv.classNameAliases = Sv(vv.classNameAliases || {}),
        function Pv(ev, gv) {
          const pv = ev;
          if (ev.isCompiled) return pv;
          [Hv, Bv, hz, Ev].forEach((vv => vv(ev, gv))), vv.compilerExtensions.forEach((vv => vv(ev, gv))), ev.__beforeBegin = null, [Mv, yv, Jv].forEach((vv => vv(ev, gv))), ev.isCompiled = !0;
          let dv = null;
          return "object" === typeof ev.keywords && ev.keywords.$pattern && (ev.keywords = Object.assign({}, ev.keywords), dv = ev.keywords.$pattern, delete ev.keywords.$pattern), dv = dv || /\w+/, ev.keywords && (ev.keywords = bv(ev.keywords, vv.case_insensitive)), pv.keywordPatternRe = zv(dv, !0), gv && (ev.dw || (ev.dw = /\B|\b/), pv.beginRe = zv(pv.dw), ev.end || ev.endsWithParent || (ev.end = /\B|\b/), ev.end && (pv.endRe = zv(pv.end)), pv.terminatorEnd = lv(pv.end) || "", ev.endsWithParent && gv.terminatorEnd && (pv.terminatorEnd += (ev.end ? "|" : "") + gv.terminatorEnd)), ev.illegal && (pv.illegalRe = zv(ev.illegal)), ev.contains || (ev.contains = []), ev.contains = [].concat(...ev.contains.map((function(vv) {
            return function(vv) {
              vv.variants && !vv.cachedVariants && (vv.cachedVariants = vv.variants.map((function(zv) {
                return Sv(vv, {
                  variants: null
                }, zv)
              })));
              if (vv.cachedVariants) return vv.cachedVariants;
              if (ez(vv)) return Sv(vv, {
                starts: vv.starts ? Sv(vv.starts) : null
              });
              if (Object.isFrozen(vv)) return Sv(vv);
              return vv
            }("self" === vv ? ev : vv)
          }))), ev.contains.forEach((function(vv) {
            Pv(vv, pv)
          })), ev.starts && Pv(ev.starts, gv), pv.matcher = function(vv) {
            const zv = new hv;
            return vv.contains.forEach((vv => zv.addRule(vv.dw, {
              rule: vv,
              type: "dw"
            }))), vv.terminatorEnd && zv.addRule(vv.terminatorEnd, {
              type: "end"
            }), vv.illegal && zv.addRule(vv.illegal, {
              type: "illegal"
            }), zv
          }(pv), pv
        }(vv)
    }

    function ez(vv) {
      return !!vv && (vv.endsWithParent || ez(vv.starts))
    }
    class gz extends Error {
      constructor(vv, zv) {
        super(vv), this.name = "HTMLInjectionError", this.html = zv
      }
    }
    const pz = hv,
      dz = Sv,
      Nz = Symbol("nomatch"),
      lz = function(vv) {
        const hv = Object.create(null),
          Sv = Object.create(null),
          ev = [];
        let gv = !0;
        const pv = "Could not find the language '{}', did you forget to load/include a language module?",
          dv = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let lv = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Nv
        };

        function Cv(vv) {
          return lv.noHighlightRe.test(vv)
        }

        function iv(vv, zv, Pv) {
          let hv = "",
            Sv = "";
          "object" === typeof zv ? (hv = vv, Pv = zv.ignoreIllegals, Sv = zv.language) : (vz("10.7.0", "highlight(lang, code, ...args) has been deprecated."), vz("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Sv = vv, hv = zv), void 0 === Pv && (Pv = !0);
          const ev = {
            code: hv,
            language: Sv
          };
          Ov("before:highlight", ev);
          const gv = ev.result ? ev.result : cv(ev.language, ev.code, Pv);
          return gv.code = ev.code, Ov("after:highlight", gv), gv
        }

        function cv(vv, zv, Sv, ev) {
          const dv = Object.create(null);

          function Nv() {
            if (!Ov.keywords) return void Kv.addText(Vv);
            let vv = 0;
            Ov.keywordPatternRe.lastIndex = 0;
            let zv = Ov.keywordPatternRe.exec(Vv),
              Pv = "";
            for (; zv;) {
              Pv += Vv.substring(vv, zv.index);
              const Sv = fv.case_insensitive ? zv[0].toLowerCase() : zv[0],
                ev = (hv = Sv, Ov.keywords[hv]);
              if (ev) {
                const [vv, hv] = ev;
                if (Kv.addText(Pv), Pv = "", dv[Sv] = (dv[Sv] || 0) + 1, dv[Sv] <= 7 && (Uv += hv), vv.startsWith("_")) Pv += zv[0];
                else {
                  const Pv = fv.classNameAliases[vv] || vv;
                  Wv(zv[0], Pv)
                }
              } else Pv += zv[0];
              vv = Ov.keywordPatternRe.lastIndex, zv = Ov.keywordPatternRe.exec(Vv)
            }
            var hv;
            Pv += Vv.substring(vv), Kv.addText(Pv)
          }

          function Tv() {
            null != Ov.subLanguage ? function() {
              if ("" === Vv) return;
              let vv = null;
              if ("string" === typeof Ov.subLanguage) {
                if (!hv[Ov.subLanguage]) return void Kv.addText(Vv);
                vv = cv(Ov.subLanguage, Vv, !0, Dv[Ov.subLanguage]), Dv[Ov.subLanguage] = vv._top
              } else vv = Gv(Vv, Ov.subLanguage.length ? Ov.subLanguage : null);
              Ov.relevance > 0 && (Uv += vv.relevance), Kv.__addSublanguage(vv._emitter, vv.language)
            }() : Nv(), Vv = ""
          }

          function Wv(vv, zv) {
            "" !== vv && (Kv.startScope(zv), Kv.addText(vv), Kv.endScope())
          }

          function wv(vv, zv) {
            let Pv = 1;
            const hv = zv.length - 1;
            for (; Pv <= hv;) {
              if (!vv._emit[Pv]) {
                Pv++;
                continue
              }
              const hv = fv.classNameAliases[vv[Pv]] || vv[Pv],
                Sv = zv[Pv];
              hv ? Wv(Sv, hv) : (Vv = Sv, Nv(), Vv = ""), Pv++
            }
          }

          function av(vv, zv) {
            return vv.scope && "string" === typeof vv.scope && Kv.openNode(fv.classNameAliases[vv.scope] || vv.scope), vv.beginScope && (vv.beginScope._wrap ? (Wv(Vv, fv.classNameAliases[vv.beginScope._wrap] || vv.beginScope._wrap), Vv = "") : vv.beginScope._multi && (wv(vv.beginScope, zv), Vv = "")), Ov = Object.create(vv, {
              parent: {
                value: Ov
              }
            }), Ov
          }

          function sv(vv, zv, hv) {
            let Sv = function(vv, zv) {
              const Pv = vv && vv.exec(zv);
              return Pv && 0 === Pv.index
            }(vv.endRe, hv);
            if (Sv) {
              if (vv["on:end"]) {
                const hv = new Pv(vv);
                vv["on:end"](zv, hv), hv.isMatchIgnored && (Sv = !1)
              }
              if (Sv) {
                for (; vv.endsParent && vv.parent;) vv = vv.parent;
                return vv
              }
            }
            if (vv.endsWithParent) return sv(vv.parent, zv, hv)
          }

          function Cv(vv) {
            return 0 === Ov.matcher.regexIndex ? (Vv += vv[0], 1) : (tv = !0, 0)
          }

          function iv(vv) {
            const Pv = vv[0],
              hv = zv.substring(vv.index),
              Sv = sv(Ov, vv, hv);
            if (!Sv) return Nz;
            const ev = Ov;
            Ov.endScope && Ov.endScope._wrap ? (Tv(), Wv(Pv, Ov.endScope._wrap)) : Ov.endScope && Ov.endScope._multi ? (Tv(), wv(Ov.endScope, vv)) : ev.skip ? Vv += Pv : (ev.returnEnd || ev.excludeEnd || (Vv += Pv), Tv(), ev.excludeEnd && (Vv = Pv));
            do {
              Ov.scope && Kv.closeNode(), Ov.skip || Ov.subLanguage || (Uv += Ov.relevance), Ov = Ov.parent
            } while (Ov !== Sv.parent);
            return Sv.starts && av(Sv.starts, vv), ev.returnEnd ? 0 : Pv.length
          }
          let mv = {};

          function jv(hv, ev) {
            const pv = ev && ev[0];
            if (Vv += hv, null == pv) return Tv(), 0;
            if ("dw" === mv.type && "end" === ev.type && mv.index === ev.index && "" === pv) {
              if (Vv += zv.slice(ev.index, ev.index + 1), !gv) {
                const zv = new Error(`0 width match regex (${vv})`);
                throw zv.languageName = vv, zv.badRule = mv.rule, zv
              }
              return 1
            }
            if (mv = ev, "dw" === ev.type) return function(vv) {
              const zv = vv[0],
                hv = vv.rule,
                Sv = new Pv(hv),
                ev = [hv.__beforeBegin, hv["on:begin"]];
              for (const Pv of ev)
                if (Pv && (Pv(vv, Sv), Sv.isMatchIgnored)) return Cv(zv);
              return hv.skip ? Vv += zv : (hv.excludeBegin && (Vv += zv), Tv(), hv.returnBegin || hv.excludeBegin || (Vv = zv)), av(hv, vv), hv.returnBegin ? 0 : zv.length
            }(ev);
            if ("illegal" === ev.type && !Sv) {
              const vv = new Error('Illegal lexeme "' + pv + '" for mode "' + (Ov.scope || "<unnamed>") + '"');
              throw vv.mode = Ov, vv
            }
            if ("end" === ev.type) {
              const vv = iv(ev);
              if (vv !== Nz) return vv
            }
            if ("illegal" === ev.type && "" === pv) return Vv += "\n", 1;
            if (xv > 1e5 && xv > 3 * ev.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Vv += pv, pv.length
          }
          const fv = Fv(vv);
          if (!fv) throw Xv(pv.replace("{}", vv)), new Error('Unknown language: "' + vv + '"');
          const Yv = Sz(fv);
          let nv = "",
            Ov = ev || Yv;
          const Dv = {},
            Kv = new lv.__emitter(lv);
          ! function() {
            const vv = [];
            for (let zv = Ov; zv !== fv; zv = zv.parent) zv.scope && vv.unshift(zv.scope);
            vv.forEach((vv => Kv.openNode(vv)))
          }();
          let Vv = "",
            Uv = 0,
            Rv = 0,
            xv = 0,
            tv = !1;
          try {
            if (fv.__emitTokens) fv.__emitTokens(zv, Kv);
            else {
              for (Ov.matcher.considerAll();;) {
                xv++, tv ? tv = !1 : Ov.matcher.considerAll(), Ov.matcher.lastIndex = Rv;
                const vv = Ov.matcher.exec(zv);
                if (!vv) break;
                const Pv = jv(zv.substring(Rv, vv.index), vv);
                Rv = vv.index + Pv
              }
              jv(zv.substring(Rv))
            }
            return Kv.finalize(), nv = Kv.toHTML(), {
              language: vv,
              value: nv,
              relevance: Uv,
              illegal: !1,
              _emitter: Kv,
              _top: Ov
            }
          } catch (qv) {
            if (qv.message && qv.message.includes("Illegal")) return {
              language: vv,
              value: pz(zv),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: qv.message,
                index: Rv,
                context: zv.slice(Rv - 100, Rv + 100),
                mode: qv.mode,
                resultSoFar: nv
              },
              _emitter: Kv
            };
            if (gv) return {
              language: vv,
              value: pz(zv),
              illegal: !1,
              relevance: 0,
              errorRaised: qv,
              _emitter: Kv,
              _top: Ov
            };
            throw qv
          }
        }

        function Gv(vv, zv) {
          zv = zv || lv.languages || Object.keys(hv);
          const Pv = function(vv) {
              const zv = {
                value: pz(vv),
                illegal: !1,
                relevance: 0,
                _top: dv,
                _emitter: new lv.__emitter(lv)
              };
              return zv._emitter.addText(vv), zv
            }(vv),
            Sv = zv.filter(Fv).filter(nv).map((zv => cv(zv, vv, !1)));
          Sv.unshift(Pv);
          const ev = Sv.sort(((vv, zv) => {
              if (vv.relevance !== zv.relevance) return zv.relevance - vv.relevance;
              if (vv.language && zv.language) {
                if (Fv(vv.language).supersetOf === zv.language) return 1;
                if (Fv(zv.language).supersetOf === vv.language) return -1
              }
              return 0
            })),
            [gv, pv] = ev,
            Nv = gv;
          return Nv.secondBest = pv, Nv
        }

        function mv(vv) {
          let zv = null;
          const Pv = function(vv) {
            let zv = vv.className + " ";
            zv += vv.parentNode ? vv.parentNode.className : "";
            const Pv = lv.languageDetectRe.exec(zv);
            if (Pv) {
              const zv = Fv(Pv[1]);
              return zv || (uv(pv.replace("{}", Pv[1])), uv("Falling back to no-highlight mode for this block.", vv)), zv ? Pv[1] : "no-highlight"
            }
            return zv.split(/\s+/).find((vv => Cv(vv) || Fv(vv)))
          }(vv);
          if (Cv(Pv)) return;
          if (Ov("before:highlightElement", {
              el: vv,
              language: Pv
            }), vv.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", vv);
          if (vv.children.length > 0 && (lv.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(vv)), lv.throwUnescapedHTML)) {
            throw new gz("One of your code blocks includes unescaped HTML.", vv.innerHTML)
          }
          zv = vv;
          const hv = zv.textContent,
            ev = Pv ? iv(hv, {
              language: Pv,
              ignoreIllegals: !0
            }) : Gv(hv);
          vv.innerHTML = ev.value, vv.dataset.highlighted = "yes",
            function(vv, zv, Pv) {
              const hv = zv && Sv[zv] || Pv;
              vv.classList.add("hljs"), vv.classList.add(`language-${hv}`)
            }(vv, Pv, ev.language), vv.result = {
              language: ev.language,
              re: ev.relevance,
              relevance: ev.relevance
            }, ev.secondBest && (vv.secondBest = {
              language: ev.secondBest.language,
              relevance: ev.secondBest.relevance
            }), Ov("after:highlightElement", {
              el: vv,
              result: ev,
              text: hv
            })
        }
        let jv = !1;

        function fv() {
          if ("loading" === document.readyState) return jv || window.addEventListener("DOMContentLoaded", (function() {
            fv()
          }), !1), void(jv = !0);
          document.querySelectorAll(lv.cssSelector).forEach(mv)
        }

        function Fv(vv) {
          return vv = (vv || "").toLowerCase(), hv[vv] || hv[Sv[vv]]
        }

        function Yv(vv, zv) {
          let {
            languageName: Pv
          } = zv;
          "string" === typeof vv && (vv = [vv]), vv.forEach((vv => {
            Sv[vv.toLowerCase()] = Pv
          }))
        }

        function nv(vv) {
          const zv = Fv(vv);
          return zv && !zv.disableAutodetect
        }

        function Ov(vv, zv) {
          const Pv = vv;
          ev.forEach((function(vv) {
            vv[Pv] && vv[Pv](zv)
          }))
        }
        Object.assign(vv, {
          highlight: iv,
          highlightAuto: Gv,
          highlightAll: fv,
          highlightElement: mv,
          highlightBlock: function(vv) {
            return vz("10.7.0", "highlightBlock will be removed entirely in v12.0"), vz("10.7.0", "Please use highlightElement now."), mv(vv)
          },
          configure: function(vv) {
            lv = dz(lv, vv)
          },
          initHighlighting: () => {
            fv(), vz("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            fv(), vz("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(zv, Pv) {
            let Sv = null;
            try {
              Sv = Pv(vv)
            } catch (ev) {
              if (Xv("Language definition for '{}' could not be registered.".replace("{}", zv)), !gv) throw ev;
              Xv(ev), Sv = dv
            }
            Sv.name || (Sv.name = zv), hv[zv] = Sv, Sv.rawDefinition = Pv.bind(null, vv), Sv.aliases && Yv(Sv.aliases, {
              languageName: zv
            })
          },
          unregisterLanguage: function(vv) {
            delete hv[vv];
            for (const zv of Object.keys(Sv)) Sv[zv] === vv && delete Sv[zv]
          },
          listLanguages: function() {
            return Object.keys(hv)
          },
          getLanguage: Fv,
          registerAliases: Yv,
          autoDetection: nv,
          inherit: dz,
          addPlugin: function(vv) {
            ! function(vv) {
              vv["before:highlightBlock"] && !vv["before:highlightElement"] && (vv["before:highlightElement"] = zv => {
                vv["before:highlightBlock"](Object.assign({
                  block: zv.el
                }, zv))
              }), vv["after:highlightBlock"] && !vv["after:highlightElement"] && (vv["after:highlightElement"] = zv => {
                vv["after:highlightBlock"](Object.assign({
                  block: zv.el
                }, zv))
              })
            }(vv), ev.push(vv)
          },
          removePlugin: function(vv) {
            const zv = ev.indexOf(vv); - 1 !== zv && ev.splice(zv, 1)
          }
        }), vv.debugMode = function() {
          gv = !1
        }, vv.safeMode = function() {
          gv = !0
        }, vv.versionString = "11.11.1", vv.regex = {
          concat: av,
          lookahead: Tv,
          either: sv,
          optional: wv,
          anyNumberOfTimes: Wv
        };
        for (const Pv in Av) "object" === typeof Av[Pv] && zv(Av[Pv]);
        return Object.assign(vv, Av), vv
      },
      Tz = lz({});
    Tz.newInstance = () => lz({}), vv.exports = Tz, Tz.HighlightJS = Tz, Tz.default = Tz
  },
  4465: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    const hv = Pv(4472)
  },
  4474: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Tv
    });
    const hv = "[A-Za-z$_][0-9A-Za-z$_]*",
      Sv = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      ev = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      gv = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      pv = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      dv = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Nv = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      lv = [].concat(dv, gv, pv);

    function Tv(vv) {
      const zv = vv.regex,
        Pv = hv,
        Tv = "<>",
        Wv = "</>",
        wv = {
          dw: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (vv, zv) => {
            const Pv = vv[0].length + vv.index,
              hv = vv.input[Pv];
            if ("<" === hv || "," === hv) return void zv.ignoreMatch();
            let Sv;
            ">" === hv && (((vv, zv) => {
              let {
                after: Pv
              } = zv;
              const hv = "</" + vv[0].slice(1);
              return -1 !== vv.input.indexOf(hv, Pv)
            })(vv, {
              after: Pv
            }) || zv.ignoreMatch());
            const ev = vv.input.substring(Pv);
            ((Sv = ev.match(/^\s*=/)) || (Sv = ev.match(/^\s+extends\s+/)) && 0 === Sv.index) && zv.ignoreMatch()
          }
        },
        av = {
          $pattern: hv,
          keyword: Sv,
          literal: ev,
          built_in: lv,
          "variable.language": Nv
        },
        sv = "[0-9](_?[0-9])*",
        Cv = `\\.(${sv})`,
        iv = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        cv = {
          className: "number",
          variants: [{
            dw: `(\\b(${iv})((${Cv})|\\.)?|(${Cv}))[eE][+-]?(${sv})\\b`
          }, {
            dw: `\\b(${iv})\\b((${Cv})\\b|\\.)?|(${Cv})\\b`
          }, {
            dw: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            dw: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            dw: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            dw: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            dw: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Gv = {
          className: "subst",
          dw: "\\$\\{",
          end: "\\}",
          keywords: av,
          contains: []
        },
        mv = {
          dw: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [vv.BACKSLASH_ESCAPE, Gv],
            subLanguage: "xml"
          }
        },
        jv = {
          dw: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [vv.BACKSLASH_ESCAPE, Gv],
            subLanguage: "css"
          }
        },
        fv = {
          dw: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [vv.BACKSLASH_ESCAPE, Gv],
            subLanguage: "graphql"
          }
        },
        Fv = {
          className: "string",
          dw: "`",
          end: "`",
          contains: [vv.BACKSLASH_ESCAPE, Gv]
        },
        Yv = {
          className: "comment",
          variants: [vv.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              dw: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                dw: "@[A-Za-z]+"
              }, {
                className: "type",
                dw: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                dw: Pv + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                dw: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), vv.C_BLOCK_COMMENT_MODE, vv.C_LINE_COMMENT_MODE]
        },
        nv = [vv.APOS_STRING_MODE, vv.QUOTE_STRING_MODE, mv, jv, fv, Fv, {
          match: /\$\d+/
        }, cv];
      Gv.contains = nv.concat({
        dw: /\{/,
        end: /\}/,
        keywords: av,
        contains: ["self"].concat(nv)
      });
      const Ov = [].concat(Yv, Gv.contains),
        Dv = Ov.concat([{
          dw: /(\s*)\(/,
          end: /\)/,
          keywords: av,
          contains: ["self"].concat(Ov)
        }]),
        Kv = {
          className: "params",
          dw: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: av,
          contains: Dv
        },
        Vv = {
          variants: [{
            match: [/class/, /\s+/, Pv, /\s+/, /extends/, /\s+/, zv.concat(Pv, "(", zv.concat(/\./, Pv), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Pv],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Uv = {
          relevance: 0,
          match: zv.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...gv, ...pv]
          }
        },
        Rv = {
          variants: [{
            match: [/function/, /\s+/, Pv, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Kv],
          illegal: /%/
        };
      const xv = {
        match: zv.concat(/\b/, (tv = [...dv, "super", "import"].map((vv => `${vv}\\s*\\(`)), zv.concat("(?!", tv.join("|"), ")")), Pv, zv.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var tv;
      const qv = {
          dw: zv.concat(/\./, zv.lookahead(zv.concat(Pv, /(?![0-9A-Za-z$_(])/))),
          end: Pv,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Iv = {
          match: [/get|set/, /\s+/, Pv, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            dw: /\(\)/
          }, Kv]
        },
        Qv = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + vv.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Zv = {
          match: [/const|var|let/, /\s+/, Pv, /\s*/, /=\s*/, /(async\s*)?/, zv.lookahead(Qv)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Kv]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: av,
        exports: {
          PARAMS_CONTAINS: Dv,
          CLASS_REFERENCE: Uv
        },
        illegal: /#(?![$_A-z])/,
        contains: [vv.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          dw: /^\s*['"]use (strict|asm)['"]/
        }, vv.APOS_STRING_MODE, vv.QUOTE_STRING_MODE, mv, jv, fv, Fv, Yv, {
          match: /\$\d+/
        }, cv, Uv, {
          scope: "attr",
          match: Pv + zv.lookahead(":"),
          relevance: 0
        }, Zv, {
          dw: "(" + vv.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Yv, vv.REGEXP_MODE, {
            className: "function",
            dw: Qv,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                dw: vv.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                dw: /\(\s*\)/,
                skip: !0
              }, {
                dw: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: av,
                contains: Dv
              }]
            }]
          }, {
            dw: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              dw: Tv,
              end: Wv
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              dw: wv.dw,
              "on:begin": wv.isTrulyOpeningTag,
              end: wv.end
            }],
            subLanguage: "xml",
            contains: [{
              dw: wv.dw,
              end: wv.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Rv, {
          beginKeywords: "while if switch catch for"
        }, {
          dw: "\\b(?!function)" + vv.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Kv, vv.inherit(vv.TITLE_MODE, {
            dw: Pv,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, qv, {
          match: "\\$" + Pv,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Kv]
        }, xv, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Vv, Iv, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4483: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv
    });
    const hv = "[A-Za-z$_][0-9A-Za-z$_]*",
      Sv = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      ev = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      gv = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      pv = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      dv = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Nv = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      lv = [].concat(dv, gv, pv);

    function Tv(vv) {
      const zv = vv.regex,
        Pv = hv,
        Tv = "<>",
        Wv = "</>",
        wv = {
          dw: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (vv, zv) => {
            const Pv = vv[0].length + vv.index,
              hv = vv.input[Pv];
            if ("<" === hv || "," === hv) return void zv.ignoreMatch();
            let Sv;
            ">" === hv && (((vv, zv) => {
              let {
                after: Pv
              } = zv;
              const hv = "</" + vv[0].slice(1);
              return -1 !== vv.input.indexOf(hv, Pv)
            })(vv, {
              after: Pv
            }) || zv.ignoreMatch());
            const ev = vv.input.substring(Pv);
            ((Sv = ev.match(/^\s*=/)) || (Sv = ev.match(/^\s+extends\s+/)) && 0 === Sv.index) && zv.ignoreMatch()
          }
        },
        av = {
          $pattern: hv,
          keyword: Sv,
          literal: ev,
          built_in: lv,
          "variable.language": Nv
        },
        sv = "[0-9](_?[0-9])*",
        Cv = `\\.(${sv})`,
        iv = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        cv = {
          className: "number",
          variants: [{
            dw: `(\\b(${iv})((${Cv})|\\.)?|(${Cv}))[eE][+-]?(${sv})\\b`
          }, {
            dw: `\\b(${iv})\\b((${Cv})\\b|\\.)?|(${Cv})\\b`
          }, {
            dw: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            dw: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            dw: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            dw: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            dw: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Gv = {
          className: "subst",
          dw: "\\$\\{",
          end: "\\}",
          keywords: av,
          contains: []
        },
        mv = {
          dw: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [vv.BACKSLASH_ESCAPE, Gv],
            subLanguage: "xml"
          }
        },
        jv = {
          dw: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [vv.BACKSLASH_ESCAPE, Gv],
            subLanguage: "css"
          }
        },
        fv = {
          dw: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [vv.BACKSLASH_ESCAPE, Gv],
            subLanguage: "graphql"
          }
        },
        Fv = {
          className: "string",
          dw: "`",
          end: "`",
          contains: [vv.BACKSLASH_ESCAPE, Gv]
        },
        Yv = {
          className: "comment",
          variants: [vv.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              dw: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                dw: "@[A-Za-z]+"
              }, {
                className: "type",
                dw: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                dw: Pv + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                dw: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), vv.C_BLOCK_COMMENT_MODE, vv.C_LINE_COMMENT_MODE]
        },
        nv = [vv.APOS_STRING_MODE, vv.QUOTE_STRING_MODE, mv, jv, fv, Fv, {
          match: /\$\d+/
        }, cv];
      Gv.contains = nv.concat({
        dw: /\{/,
        end: /\}/,
        keywords: av,
        contains: ["self"].concat(nv)
      });
      const Ov = [].concat(Yv, Gv.contains),
        Dv = Ov.concat([{
          dw: /(\s*)\(/,
          end: /\)/,
          keywords: av,
          contains: ["self"].concat(Ov)
        }]),
        Kv = {
          className: "params",
          dw: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: av,
          contains: Dv
        },
        Vv = {
          variants: [{
            match: [/class/, /\s+/, Pv, /\s+/, /extends/, /\s+/, zv.concat(Pv, "(", zv.concat(/\./, Pv), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Pv],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Uv = {
          relevance: 0,
          match: zv.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...gv, ...pv]
          }
        },
        Rv = {
          variants: [{
            match: [/function/, /\s+/, Pv, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Kv],
          illegal: /%/
        };
      const xv = {
        match: zv.concat(/\b/, (tv = [...dv, "super", "import"].map((vv => `${vv}\\s*\\(`)), zv.concat("(?!", tv.join("|"), ")")), Pv, zv.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var tv;
      const qv = {
          dw: zv.concat(/\./, zv.lookahead(zv.concat(Pv, /(?![0-9A-Za-z$_(])/))),
          end: Pv,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Iv = {
          match: [/get|set/, /\s+/, Pv, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            dw: /\(\)/
          }, Kv]
        },
        Qv = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + vv.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Zv = {
          match: [/const|var|let/, /\s+/, Pv, /\s*/, /=\s*/, /(async\s*)?/, zv.lookahead(Qv)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Kv]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: av,
        exports: {
          PARAMS_CONTAINS: Dv,
          CLASS_REFERENCE: Uv
        },
        illegal: /#(?![$_A-z])/,
        contains: [vv.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          dw: /^\s*['"]use (strict|asm)['"]/
        }, vv.APOS_STRING_MODE, vv.QUOTE_STRING_MODE, mv, jv, fv, Fv, Yv, {
          match: /\$\d+/
        }, cv, Uv, {
          scope: "attr",
          match: Pv + zv.lookahead(":"),
          relevance: 0
        }, Zv, {
          dw: "(" + vv.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Yv, vv.REGEXP_MODE, {
            className: "function",
            dw: Qv,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                dw: vv.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                dw: /\(\s*\)/,
                skip: !0
              }, {
                dw: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: av,
                contains: Dv
              }]
            }]
          }, {
            dw: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              dw: Tv,
              end: Wv
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              dw: wv.dw,
              "on:begin": wv.isTrulyOpeningTag,
              end: wv.end
            }],
            subLanguage: "xml",
            contains: [{
              dw: wv.dw,
              end: wv.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Rv, {
          beginKeywords: "while if switch catch for"
        }, {
          dw: "\\b(?!function)" + vv.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Kv, vv.inherit(vv.TITLE_MODE, {
            dw: Pv,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, qv, {
          match: "\\$" + Pv,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Kv]
        }, xv, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Vv, Iv, {
          match: /\$[(.]/
        }]
      }
    }

    function Wv(vv) {
      const zv = vv.regex,
        Pv = Tv(vv),
        gv = hv,
        pv = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        dv = {
          dw: [/namespace/, /\s+/, vv.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Wv = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: pv
          },
          contains: [Pv.exports.CLASS_REFERENCE]
        },
        wv = {
          $pattern: hv,
          keyword: Sv.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: ev,
          built_in: lv.concat(pv),
          "variable.language": Nv
        },
        av = {
          className: "meta",
          dw: "@" + gv
        },
        sv = (vv, zv, Pv) => {
          const hv = vv.contains.findIndex((vv => vv.label === zv));
          if (-1 === hv) throw new Error("can not find mode to replace");
          vv.contains.splice(hv, 1, Pv)
        };
      Object.assign(Pv.keywords, wv), Pv.exports.PARAMS_CONTAINS.push(av);
      const Cv = Pv.contains.find((vv => "attr" === vv.scope)),
        iv = Object.assign({}, Cv, {
          match: zv.concat(gv, zv.lookahead(/\s*\?:/))
        });
      Pv.exports.PARAMS_CONTAINS.push([Pv.exports.CLASS_REFERENCE, Cv, iv]), Pv.contains = Pv.contains.concat([av, dv, Wv, iv]), sv(Pv, "shebang", vv.SHEBANG()), sv(Pv, "use_strict", {
        className: "meta",
        relevance: 10,
        dw: /^\s*['"]use strict['"]/
      });
      return Pv.contains.find((vv => "func.def" === vv.label)).relevance = 0, Object.assign(Pv, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), Pv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);