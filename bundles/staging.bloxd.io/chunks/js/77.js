export const id = 77;
export const ids = [77];
export const modules = {
  4592: dd => {
    function Jd(dd) {
      return dd instanceof Map ? dd.clear = dd.delete = dd.set = function() {
        throw new Error("map is read-only")
      } : dd instanceof Set && (dd.add = dd.clear = dd.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(dd), Object.getOwnPropertyNames(dd).forEach((kd => {
        const pd = dd[kd],
          Nd = typeof pd;
        "object" !== Nd && "function" !== Nd || Object.isFrozen(pd) || Jd(pd)
      })), dd
    }
    class kd {
      constructor(dd) {
        void 0 === dd.data && (dd.data = {}), this.data = dd.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function pd(dd) {
      return dd.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Nd(dd) {
      const Jd = Object.create(null);
      for (const Wd in dd) Jd[Wd] = dd[Wd];
      for (var kd = arguments.length, pd = new Array(kd > 1 ? kd - 1 : 0), Nd = 1; Nd < kd; Nd++) pd[Nd - 1] = arguments[Nd];
      return pd.forEach((function(dd) {
        for (const kd in dd) Jd[kd] = dd[kd]
      })), Jd
    }
    const Wd = dd => !!dd.scope;
    class Pd {
      constructor(dd, Jd) {
        this.buffer = "", this.classPrefix = Jd.classPrefix, dd.walk(this)
      }
      addText(dd) {
        this.buffer += pd(dd)
      }
      openNode(dd) {
        if (!Wd(dd)) return;
        const Jd = ((dd, Jd) => {
          let {
            prefix: kd
          } = Jd;
          if (dd.startsWith("language:")) return dd.replace("language:", "language-");
          if (dd.includes(".")) {
            const Jd = dd.split(".");
            return [`${kd}${Jd.shift()}`, ...Jd.map(((dd, Jd) => `${dd}${"_".repeat(Jd+1)}`))].join(" ")
          }
          return `${kd}${dd}`
        })(dd.scope, {
          prefix: this.classPrefix
        });
        this.span(Jd)
      }
      closeNode(dd) {
        Wd(dd) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(dd) {
        this.buffer += `<span class="${dd}">`
      }
    }
    const Zd = function() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Jd = {
        children: []
      };
      return Object.assign(Jd, dd), Jd
    };
    class gd {
      constructor() {
        this.bI = Zd(), this.stack = [this.bI]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.bI
      }
      add(dd) {
        this.top.children.push(dd)
      }
      openNode(dd) {
        const Jd = Zd({
          scope: dd
        });
        this.add(Jd), this.stack.push(Jd)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.bI, null, 4)
      }
      walk(dd) {
        return this.constructor._walk(dd, this.bI)
      }
      static _walk(dd, Jd) {
        return "string" === typeof Jd ? dd.addText(Jd) : Jd.children && (dd.openNode(Jd), Jd.children.forEach((Jd => this._walk(dd, Jd))), dd.closeNode(Jd)), dd
      }
      static _collapse(dd) {
        "string" !== typeof dd && dd.children && (dd.children.every((dd => "string" === typeof dd)) ? dd.children = [dd.children.join("")] : dd.children.forEach((dd => {
          gd._collapse(dd)
        })))
      }
    }
    class Cd extends gd {
      constructor(dd) {
        super(), this.options = dd
      }
      addText(dd) {
        "" !== dd && this.add(dd)
      }
      startScope(dd) {
        this.openNode(dd)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(dd, Jd) {
        const kd = dd.root;
        Jd && (kd.scope = `language:${Jd}`), this.add(kd)
      }
      toHTML() {
        return new Pd(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Kd(dd) {
      return dd ? "string" === typeof dd ? dd : dd.source : null
    }

    function od(dd) {
      return Ld("(?=", dd, ")")
    }

    function ld(dd) {
      return Ld("(?:", dd, ")*")
    }

    function Qd(dd) {
      return Ld("(?:", dd, ")?")
    }

    function Ld() {
      for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
      return Jd.map((dd => Kd(dd))).join("")
    }

    function Od() {
      for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
      const pd = function(dd) {
        const Jd = dd[dd.length - 1];
        return "object" === typeof Jd && Jd.constructor === Object ? (dd.splice(dd.length - 1, 1), Jd) : {}
      }(Jd);
      return "(" + (pd.capture ? "" : "?:") + Jd.map((dd => Kd(dd))).join("|") + ")"
    }

    function ed(dd) {
      return new RegExp(dd.toString() + "|").exec("").length - 1
    }
    const Rd = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Id(dd, Jd) {
      let {
        joinWith: kd
      } = Jd, pd = 0;
      return dd.map((dd => {
        pd += 1;
        const Jd = pd;
        let kd = Kd(dd),
          Nd = "";
        for (; kd.length > 0;) {
          const dd = Rd.exec(kd);
          if (!dd) {
            Nd += kd;
            break
          }
          Nd += kd.substring(0, dd.index), kd = kd.substring(dd.index + dd[0].length), "\\" === dd[0][0] && dd[1] ? Nd += "\\" + String(Number(dd[1]) + Jd) : (Nd += dd[0], "(" === dd[0] && pd++)
        }
        return Nd
      })).map((dd => `(${dd})`)).join(kd)
    }
    const Gd = "[a-zA-Z]\\w*",
      vd = "[a-zA-Z_]\\w*",
      xd = "\\b\\d+(\\.\\d+)?",
      qd = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Bd = "\\b(0b[01]+)",
      sd = {
        ZQ: "\\\\[\\s\\S]",
        relevance: 0
      },
      ad = {
        scope: "string",
        ZQ: "'",
        end: "'",
        illegal: "\\n",
        contains: [sd]
      },
      Md = {
        scope: "string",
        ZQ: '"',
        end: '"',
        illegal: "\\n",
        contains: [sd]
      },
      Fd = function(dd, Jd) {
        const kd = Nd({
          scope: "comment",
          ZQ: dd,
          end: Jd,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        kd.contains.push({
          scope: "doctag",
          ZQ: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const pd = Od("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return kd.contains.push({
          ZQ: Ld(/[ ]+/, "(", pd, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), kd
      },
      Yd = Fd("//", "$"),
      md = Fd("/\\*", "\\*/"),
      bd = Fd("#", "$"),
      Sd = {
        scope: "number",
        ZQ: xd,
        relevance: 0
      },
      jd = {
        scope: "number",
        ZQ: qd,
        relevance: 0
      },
      Xd = {
        scope: "number",
        ZQ: Bd,
        relevance: 0
      },
      fd = {
        scope: "regexp",
        ZQ: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [sd, {
          ZQ: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [sd]
        }]
      },
      nd = {
        scope: "title",
        ZQ: Gd,
        relevance: 0
      },
      Ud = {
        scope: "title",
        ZQ: vd,
        relevance: 0
      },
      yd = {
        ZQ: "\\.\\s*" + vd,
        relevance: 0
      };
    var Dd = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: ad,
      BACKSLASH_ESCAPE: sd,
      BINARY_NUMBER_MODE: Xd,
      BINARY_NUMBER_RE: Bd,
      COMMENT: Fd,
      C_BLOCK_COMMENT_MODE: md,
      C_LINE_COMMENT_MODE: Yd,
      C_NUMBER_MODE: jd,
      C_NUMBER_RE: qd,
      END_SAME_AS_BEGIN: function(dd) {
        return Object.assign(dd, {
          "on:begin": (dd, Jd) => {
            Jd.data._beginMatch = dd[1]
          },
          "on:end": (dd, Jd) => {
            Jd.data._beginMatch !== dd[1] && Jd.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: bd,
      IDENT_RE: Gd,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: yd,
      NUMBER_MODE: Sd,
      NUMBER_RE: xd,
      PHRASAL_WORDS_MODE: {
        ZQ: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Md,
      REGEXP_MODE: fd,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const Jd = /^#![ ]*\//;
        return dd.binary && (dd.ZQ = Ld(Jd, /.*\b/, dd.binary, /\b.*/)), Nd({
          scope: "meta",
          ZQ: Jd,
          end: /$/,
          relevance: 0,
          "on:begin": (dd, Jd) => {
            0 !== dd.index && Jd.ignoreMatch()
          }
        }, dd)
      },
      TITLE_MODE: nd,
      UNDERSCORE_IDENT_RE: vd,
      UNDERSCORE_TITLE_MODE: Ud
    });

    function Td(dd, Jd) {
      "." === dd.input[dd.index - 1] && Jd.ignoreMatch()
    }

    function Ed(dd, Jd) {
      void 0 !== dd.className && (dd.scope = dd.className, delete dd.className)
    }

    function cd(dd, Jd) {
      Jd && dd.beginKeywords && (dd.ZQ = "\\b(" + dd.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", dd.__beforeBegin = Td, dd.keywords = dd.keywords || dd.beginKeywords, delete dd.beginKeywords, void 0 === dd.relevance && (dd.relevance = 0))
    }

    function hd(dd, Jd) {
      Array.isArray(dd.illegal) && (dd.illegal = Od(...dd.illegal))
    }

    function rd(dd, Jd) {
      if (dd.match) {
        if (dd.ZQ || dd.end) throw new Error("begin & end are not supported with match");
        dd.ZQ = dd.match, delete dd.match
      }
    }

    function ud(dd, Jd) {
      void 0 === dd.relevance && (dd.relevance = 1)
    }
    const td = (dd, Jd) => {
        if (!dd.beforeMatch) return;
        if (dd.starts) throw new Error("beforeMatch cannot be used with starts");
        const kd = Object.assign({}, dd);
        Object.keys(dd).forEach((Jd => {
          delete dd[Jd]
        })), dd.keywords = kd.keywords, dd.ZQ = Ld(kd.beforeMatch, od(kd.ZQ)), dd.starts = {
          relevance: 0,
          contains: [Object.assign(kd, {
            endsParent: !0
          })]
        }, dd.relevance = 0, delete kd.beforeMatch
      },
      Vd = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function zd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const pd = Object.create(null);
      return "string" === typeof dd ? Nd(kd, dd.split(" ")) : Array.isArray(dd) ? Nd(kd, dd) : Object.keys(dd).forEach((function(kd) {
        Object.assign(pd, zd(dd[kd], Jd, kd))
      })), pd;

      function Nd(dd, kd) {
        Jd && (kd = kd.map((dd => dd.toLowerCase()))), kd.forEach((function(Jd) {
          const kd = Jd.split("|");
          pd[kd[0]] = [dd, Hd(kd[0], kd[1])]
        }))
      }
    }

    function Hd(dd, Jd) {
      return Jd ? Number(Jd) : function(dd) {
        return Vd.includes(dd.toLowerCase())
      }(dd) ? 0 : 1
    }
    const wd = {},
      Ad = dd => {
        console.error(dd)
      },
      dJ = function(dd) {
        for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
        console.log(`WARN: ${dd}`, ...kd)
      },
      JJ = (dd, Jd) => {
        wd[`${dd}/${Jd}`] || (console.log(`Deprecated as of ${dd}. ${Jd}`), wd[`${dd}/${Jd}`] = !0)
      },
      kJ = new Error;

    function pJ(dd, Jd, kd) {
      let {
        key: pd
      } = kd, Nd = 0;
      const Wd = dd[pd],
        Pd = {},
        Zd = {};
      for (let gd = 1; gd <= Jd.length; gd++) Zd[gd + Nd] = Wd[gd], Pd[gd + Nd] = !0, Nd += ed(Jd[gd - 1]);
      dd[pd] = Zd, dd[pd]._emit = Pd, dd[pd]._multi = !0
    }

    function NJ(dd) {
      ! function(dd) {
        dd.scope && "object" === typeof dd.scope && null !== dd.scope && (dd.beginScope = dd.scope, delete dd.scope)
      }(dd), "string" === typeof dd.beginScope && (dd.beginScope = {
          _wrap: dd.beginScope
        }), "string" === typeof dd.endScope && (dd.endScope = {
          _wrap: dd.endScope
        }),
        function(dd) {
          if (Array.isArray(dd.ZQ)) {
            if (dd.skip || dd.excludeBegin || dd.returnBegin) throw Ad("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), kJ;
            if ("object" !== typeof dd.beginScope || null === dd.beginScope) throw Ad("beginScope must be object"), kJ;
            pJ(dd, dd.ZQ, {
              key: "beginScope"
            }), dd.ZQ = Id(dd.ZQ, {
              joinWith: ""
            })
          }
        }(dd),
        function(dd) {
          if (Array.isArray(dd.end)) {
            if (dd.skip || dd.excludeEnd || dd.returnEnd) throw Ad("skip, excludeEnd, returnEnd not compatible with endScope: {}"), kJ;
            if ("object" !== typeof dd.endScope || null === dd.endScope) throw Ad("endScope must be object"), kJ;
            pJ(dd, dd.end, {
              key: "endScope"
            }), dd.end = Id(dd.end, {
              joinWith: ""
            })
          }
        }(dd)
    }

    function WJ(dd) {
      function Jd(Jd, kd) {
        return new RegExp(Kd(Jd), "m" + (dd.case_insensitive ? "i" : "") + (dd.unicodeRegex ? "u" : "") + (kd ? "g" : ""))
      }
      class kd {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(dd, Jd) {
          Jd.position = this.position++, this.matchIndexes[this.matchAt] = Jd, this.regexes.push([Jd, dd]), this.matchAt += ed(dd) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const dd = this.regexes.map((dd => dd[1]));
          this.matcherRe = Jd(Id(dd, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(dd) {
          this.matcherRe.lastIndex = this.lastIndex;
          const Jd = this.matcherRe.exec(dd);
          if (!Jd) return null;
          const kd = Jd.findIndex(((dd, Jd) => Jd > 0 && void 0 !== dd)),
            pd = this.matchIndexes[kd];
          return Jd.splice(0, kd), Object.assign(Jd, pd)
        }
      }
      class pd {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(dd) {
          if (this.multiRegexes[dd]) return this.multiRegexes[dd];
          const Jd = new kd;
          return this.rules.slice(dd).forEach((dd => {
            let [kd, pd] = dd;
            return Jd.addRule(kd, pd)
          })), Jd.compile(), this.multiRegexes[dd] = Jd, Jd
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(dd, Jd) {
          this.rules.push([dd, Jd]), "ZQ" === Jd.type && this.count++
        }
        exec(dd) {
          const Jd = this.getMatcher(this.regexIndex);
          Jd.lastIndex = this.lastIndex;
          let kd = Jd.exec(dd);
          if (this.resumingScanAtSamePosition())
            if (kd && kd.index === this.lastIndex);
            else {
              const Jd = this.getMatcher(0);
              Jd.lastIndex = this.lastIndex + 1, kd = Jd.exec(dd)
            } return kd && (this.regexIndex += kd.position + 1, this.regexIndex === this.count && this.considerAll()), kd
        }
      }
      if (dd.compilerExtensions || (dd.compilerExtensions = []), dd.contains && dd.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return dd.classNameAliases = Nd(dd.classNameAliases || {}),
        function kd(Wd, Pd) {
          const Zd = Wd;
          if (Wd.isCompiled) return Zd;
          [Ed, rd, NJ, td].forEach((dd => dd(Wd, Pd))), dd.compilerExtensions.forEach((dd => dd(Wd, Pd))), Wd.__beforeBegin = null, [cd, hd, ud].forEach((dd => dd(Wd, Pd))), Wd.isCompiled = !0;
          let gd = null;
          return "object" === typeof Wd.keywords && Wd.keywords.$pattern && (Wd.keywords = Object.assign({}, Wd.keywords), gd = Wd.keywords.$pattern, delete Wd.keywords.$pattern), gd = gd || /\w+/, Wd.keywords && (Wd.keywords = zd(Wd.keywords, dd.case_insensitive)), Zd.keywordPatternRe = Jd(gd, !0), Pd && (Wd.ZQ || (Wd.ZQ = /\B|\b/), Zd.beginRe = Jd(Zd.ZQ), Wd.end || Wd.endsWithParent || (Wd.end = /\B|\b/), Wd.end && (Zd.endRe = Jd(Zd.end)), Zd.terminatorEnd = Kd(Zd.end) || "", Wd.endsWithParent && Pd.terminatorEnd && (Zd.terminatorEnd += (Wd.end ? "|" : "") + Pd.terminatorEnd)), Wd.illegal && (Zd.illegalRe = Jd(Wd.illegal)), Wd.contains || (Wd.contains = []), Wd.contains = [].concat(...Wd.contains.map((function(dd) {
            return function(dd) {
              dd.variants && !dd.cachedVariants && (dd.cachedVariants = dd.variants.map((function(Jd) {
                return Nd(dd, {
                  variants: null
                }, Jd)
              })));
              if (dd.cachedVariants) return dd.cachedVariants;
              if (PJ(dd)) return Nd(dd, {
                starts: dd.starts ? Nd(dd.starts) : null
              });
              if (Object.isFrozen(dd)) return Nd(dd);
              return dd
            }("self" === dd ? Wd : dd)
          }))), Wd.contains.forEach((function(dd) {
            kd(dd, Zd)
          })), Wd.starts && kd(Wd.starts, Pd), Zd.matcher = function(dd) {
            const Jd = new pd;
            return dd.contains.forEach((dd => Jd.addRule(dd.ZQ, {
              rule: dd,
              type: "ZQ"
            }))), dd.terminatorEnd && Jd.addRule(dd.terminatorEnd, {
              type: "end"
            }), dd.illegal && Jd.addRule(dd.illegal, {
              type: "illegal"
            }), Jd
          }(Zd), Zd
        }(dd)
    }

    function PJ(dd) {
      return !!dd && (dd.endsWithParent || PJ(dd.starts))
    }
    class ZJ extends Error {
      constructor(dd, Jd) {
        super(dd), this.name = "HTMLInjectionError", this.html = Jd
      }
    }
    const gJ = pd,
      CJ = Nd,
      KJ = Symbol("nomatch"),
      oJ = function(dd) {
        const pd = Object.create(null),
          Nd = Object.create(null),
          Wd = [];
        let Pd = !0;
        const Zd = "Could not find the language '{}', did you forget to load/include a language module?",
          gd = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Kd = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Cd
        };

        function ed(dd) {
          return Kd.noHighlightRe.test(dd)
        }

        function Rd(dd, Jd, kd) {
          let pd = "",
            Nd = "";
          "object" === typeof Jd ? (pd = dd, kd = Jd.ignoreIllegals, Nd = Jd.language) : (JJ("10.7.0", "highlight(lang, code, ...args) has been deprecated."), JJ("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Nd = dd, pd = Jd), void 0 === kd && (kd = !0);
          const Wd = {
            code: pd,
            language: Nd
          };
          Md("before:highlight", Wd);
          const Pd = Wd.result ? Wd.result : Id(Wd.language, Wd.code, kd);
          return Pd.code = Wd.code, Md("after:highlight", Pd), Pd
        }

        function Id(dd, Jd, Nd, Wd) {
          const gd = Object.create(null);

          function Cd() {
            if (!Md.keywords) return void Yd.addText(md);
            let dd = 0;
            Md.keywordPatternRe.lastIndex = 0;
            let Jd = Md.keywordPatternRe.exec(md),
              kd = "";
            for (; Jd;) {
              kd += md.substring(dd, Jd.index);
              const Nd = qd.case_insensitive ? Jd[0].toLowerCase() : Jd[0],
                Wd = (pd = Nd, Md.keywords[pd]);
              if (Wd) {
                const [dd, pd] = Wd;
                if (Yd.addText(kd), kd = "", gd[Nd] = (gd[Nd] || 0) + 1, gd[Nd] <= 7 && (bd += pd), dd.startsWith("_")) kd += Jd[0];
                else {
                  const kd = qd.classNameAliases[dd] || dd;
                  ld(Jd[0], kd)
                }
              } else kd += Jd[0];
              dd = Md.keywordPatternRe.lastIndex, Jd = Md.keywordPatternRe.exec(md)
            }
            var pd;
            kd += md.substring(dd), Yd.addText(kd)
          }

          function od() {
            null != Md.subLanguage ? function() {
              if ("" === md) return;
              let dd = null;
              if ("string" === typeof Md.subLanguage) {
                if (!pd[Md.subLanguage]) return void Yd.addText(md);
                dd = Id(Md.subLanguage, md, !0, Fd[Md.subLanguage]), Fd[Md.subLanguage] = dd._top
              } else dd = Gd(md, Md.subLanguage.length ? Md.subLanguage : null);
              Md.relevance > 0 && (bd += dd.relevance), Yd.__addSublanguage(dd._emitter, dd.language)
            }() : Cd(), md = ""
          }

          function ld(dd, Jd) {
            "" !== dd && (Yd.startScope(Jd), Yd.addText(dd), Yd.endScope())
          }

          function Qd(dd, Jd) {
            let kd = 1;
            const pd = Jd.length - 1;
            for (; kd <= pd;) {
              if (!dd._emit[kd]) {
                kd++;
                continue
              }
              const pd = qd.classNameAliases[dd[kd]] || dd[kd],
                Nd = Jd[kd];
              pd ? ld(Nd, pd) : (md = Nd, Cd(), md = ""), kd++
            }
          }

          function Ld(dd, Jd) {
            return dd.scope && "string" === typeof dd.scope && Yd.openNode(qd.classNameAliases[dd.scope] || dd.scope), dd.beginScope && (dd.beginScope._wrap ? (ld(md, qd.classNameAliases[dd.beginScope._wrap] || dd.beginScope._wrap), md = "") : dd.beginScope._multi && (Qd(dd.beginScope, Jd), md = "")), Md = Object.create(dd, {
              parent: {
                value: Md
              }
            }), Md
          }

          function Od(dd, Jd, pd) {
            let Nd = function(dd, Jd) {
              const kd = dd && dd.exec(Jd);
              return kd && 0 === kd.index
            }(dd.endRe, pd);
            if (Nd) {
              if (dd["on:end"]) {
                const pd = new kd(dd);
                dd["on:end"](Jd, pd), pd.isMatchIgnored && (Nd = !1)
              }
              if (Nd) {
                for (; dd.endsParent && dd.parent;) dd = dd.parent;
                return dd
              }
            }
            if (dd.endsWithParent) return Od(dd.parent, Jd, pd)
          }

          function ed(dd) {
            return 0 === Md.matcher.regexIndex ? (md += dd[0], 1) : (Xd = !0, 0)
          }

          function Rd(dd) {
            const kd = dd[0],
              pd = Jd.substring(dd.index),
              Nd = Od(Md, dd, pd);
            if (!Nd) return KJ;
            const Wd = Md;
            Md.endScope && Md.endScope._wrap ? (od(), ld(kd, Md.endScope._wrap)) : Md.endScope && Md.endScope._multi ? (od(), Qd(Md.endScope, dd)) : Wd.skip ? md += kd : (Wd.returnEnd || Wd.excludeEnd || (md += kd), od(), Wd.excludeEnd && (md = kd));
            do {
              Md.scope && Yd.closeNode(), Md.skip || Md.subLanguage || (bd += Md.relevance), Md = Md.parent
            } while (Md !== Nd.parent);
            return Nd.starts && Ld(Nd.starts, dd), Wd.returnEnd ? 0 : kd.length
          }
          let vd = {};

          function xd(pd, Wd) {
            const Zd = Wd && Wd[0];
            if (md += pd, null == Zd) return od(), 0;
            if ("ZQ" === vd.type && "end" === Wd.type && vd.index === Wd.index && "" === Zd) {
              if (md += Jd.slice(Wd.index, Wd.index + 1), !Pd) {
                const Jd = new Error(`0 width match regex (${dd})`);
                throw Jd.languageName = dd, Jd.badRule = vd.rule, Jd
              }
              return 1
            }
            if (vd = Wd, "ZQ" === Wd.type) return function(dd) {
              const Jd = dd[0],
                pd = dd.rule,
                Nd = new kd(pd),
                Wd = [pd.__beforeBegin, pd["on:begin"]];
              for (const kd of Wd)
                if (kd && (kd(dd, Nd), Nd.isMatchIgnored)) return ed(Jd);
              return pd.skip ? md += Jd : (pd.excludeBegin && (md += Jd), od(), pd.returnBegin || pd.excludeBegin || (md = Jd)), Ld(pd, dd), pd.returnBegin ? 0 : Jd.length
            }(Wd);
            if ("illegal" === Wd.type && !Nd) {
              const dd = new Error('Illegal lexeme "' + Zd + '" for mode "' + (Md.scope || "<unnamed>") + '"');
              throw dd.mode = Md, dd
            }
            if ("end" === Wd.type) {
              const dd = Rd(Wd);
              if (dd !== KJ) return dd
            }
            if ("illegal" === Wd.type && "" === Zd) return md += "\n", 1;
            if (jd > 1e5 && jd > 3 * Wd.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return md += Zd, Zd.length
          }
          const qd = Bd(dd);
          if (!qd) throw Ad(Zd.replace("{}", dd)), new Error('Unknown language: "' + dd + '"');
          const sd = WJ(qd);
          let ad = "",
            Md = Wd || sd;
          const Fd = {},
            Yd = new Kd.__emitter(Kd);
          ! function() {
            const dd = [];
            for (let Jd = Md; Jd !== qd; Jd = Jd.parent) Jd.scope && dd.unshift(Jd.scope);
            dd.forEach((dd => Yd.openNode(dd)))
          }();
          let md = "",
            bd = 0,
            Sd = 0,
            jd = 0,
            Xd = !1;
          try {
            if (qd.__emitTokens) qd.__emitTokens(Jd, Yd);
            else {
              for (Md.matcher.considerAll();;) {
                jd++, Xd ? Xd = !1 : Md.matcher.considerAll(), Md.matcher.lastIndex = Sd;
                const dd = Md.matcher.exec(Jd);
                if (!dd) break;
                const kd = xd(Jd.substring(Sd, dd.index), dd);
                Sd = dd.index + kd
              }
              xd(Jd.substring(Sd))
            }
            return Yd.finalize(), ad = Yd.toHTML(), {
              language: dd,
              value: ad,
              relevance: bd,
              illegal: !1,
              _emitter: Yd,
              _top: Md
            }
          } catch (fd) {
            if (fd.message && fd.message.includes("Illegal")) return {
              language: dd,
              value: gJ(Jd),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: fd.message,
                index: Sd,
                context: Jd.slice(Sd - 100, Sd + 100),
                mode: fd.mode,
                resultSoFar: ad
              },
              _emitter: Yd
            };
            if (Pd) return {
              language: dd,
              value: gJ(Jd),
              illegal: !1,
              relevance: 0,
              errorRaised: fd,
              _emitter: Yd,
              _top: Md
            };
            throw fd
          }
        }

        function Gd(dd, Jd) {
          Jd = Jd || Kd.languages || Object.keys(pd);
          const kd = function(dd) {
              const Jd = {
                value: gJ(dd),
                illegal: !1,
                relevance: 0,
                _top: gd,
                _emitter: new Kd.__emitter(Kd)
              };
              return Jd._emitter.addText(dd), Jd
            }(dd),
            Nd = Jd.filter(Bd).filter(ad).map((Jd => Id(Jd, dd, !1)));
          Nd.unshift(kd);
          const Wd = Nd.sort(((dd, Jd) => {
              if (dd.relevance !== Jd.relevance) return Jd.relevance - dd.relevance;
              if (dd.language && Jd.language) {
                if (Bd(dd.language).supersetOf === Jd.language) return 1;
                if (Bd(Jd.language).supersetOf === dd.language) return -1
              }
              return 0
            })),
            [Pd, Zd] = Wd,
            Cd = Pd;
          return Cd.secondBest = Zd, Cd
        }

        function vd(dd) {
          let Jd = null;
          const kd = function(dd) {
            let Jd = dd.className + " ";
            Jd += dd.parentNode ? dd.parentNode.className : "";
            const kd = Kd.languageDetectRe.exec(Jd);
            if (kd) {
              const Jd = Bd(kd[1]);
              return Jd || (dJ(Zd.replace("{}", kd[1])), dJ("Falling back to no-highlight mode for this block.", dd)), Jd ? kd[1] : "no-highlight"
            }
            return Jd.split(/\s+/).find((dd => ed(dd) || Bd(dd)))
          }(dd);
          if (ed(kd)) return;
          if (Md("before:highlightElement", {
              el: dd,
              language: kd
            }), dd.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", dd);
          if (dd.children.length > 0 && (Kd.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(dd)), Kd.throwUnescapedHTML)) {
            throw new ZJ("One of your code blocks includes unescaped HTML.", dd.innerHTML)
          }
          Jd = dd;
          const pd = Jd.textContent,
            Wd = kd ? Rd(pd, {
              language: kd,
              ignoreIllegals: !0
            }) : Gd(pd);
          dd.innerHTML = Wd.value, dd.dataset.highlighted = "yes",
            function(dd, Jd, kd) {
              const pd = Jd && Nd[Jd] || kd;
              dd.classList.add("hljs"), dd.classList.add(`language-${pd}`)
            }(dd, kd, Wd.language), dd.result = {
              language: Wd.language,
              re: Wd.relevance,
              relevance: Wd.relevance
            }, Wd.secondBest && (dd.secondBest = {
              language: Wd.secondBest.language,
              relevance: Wd.secondBest.relevance
            }), Md("after:highlightElement", {
              el: dd,
              result: Wd,
              text: pd
            })
        }
        let xd = !1;

        function qd() {
          if ("loading" === document.readyState) return xd || window.addEventListener("DOMContentLoaded", (function() {
            qd()
          }), !1), void(xd = !0);
          document.querySelectorAll(Kd.cssSelector).forEach(vd)
        }

        function Bd(dd) {
          return dd = (dd || "").toLowerCase(), pd[dd] || pd[Nd[dd]]
        }

        function sd(dd, Jd) {
          let {
            languageName: kd
          } = Jd;
          "string" === typeof dd && (dd = [dd]), dd.forEach((dd => {
            Nd[dd.toLowerCase()] = kd
          }))
        }

        function ad(dd) {
          const Jd = Bd(dd);
          return Jd && !Jd.disableAutodetect
        }

        function Md(dd, Jd) {
          const kd = dd;
          Wd.forEach((function(dd) {
            dd[kd] && dd[kd](Jd)
          }))
        }
        Object.assign(dd, {
          highlight: Rd,
          highlightAuto: Gd,
          highlightAll: qd,
          highlightElement: vd,
          highlightBlock: function(dd) {
            return JJ("10.7.0", "highlightBlock will be removed entirely in v12.0"), JJ("10.7.0", "Please use highlightElement now."), vd(dd)
          },
          configure: function(dd) {
            Kd = CJ(Kd, dd)
          },
          initHighlighting: () => {
            qd(), JJ("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            qd(), JJ("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(Jd, kd) {
            let Nd = null;
            try {
              Nd = kd(dd)
            } catch (Wd) {
              if (Ad("Language definition for '{}' could not be registered.".replace("{}", Jd)), !Pd) throw Wd;
              Ad(Wd), Nd = gd
            }
            Nd.name || (Nd.name = Jd), pd[Jd] = Nd, Nd.rawDefinition = kd.bind(null, dd), Nd.aliases && sd(Nd.aliases, {
              languageName: Jd
            })
          },
          unregisterLanguage: function(dd) {
            delete pd[dd];
            for (const Jd of Object.keys(Nd)) Nd[Jd] === dd && delete Nd[Jd]
          },
          listLanguages: function() {
            return Object.keys(pd)
          },
          getLanguage: Bd,
          registerAliases: sd,
          autoDetection: ad,
          inherit: CJ,
          addPlugin: function(dd) {
            ! function(dd) {
              dd["before:highlightBlock"] && !dd["before:highlightElement"] && (dd["before:highlightElement"] = Jd => {
                dd["before:highlightBlock"](Object.assign({
                  block: Jd.el
                }, Jd))
              }), dd["after:highlightBlock"] && !dd["after:highlightElement"] && (dd["after:highlightElement"] = Jd => {
                dd["after:highlightBlock"](Object.assign({
                  block: Jd.el
                }, Jd))
              })
            }(dd), Wd.push(dd)
          },
          removePlugin: function(dd) {
            const Jd = Wd.indexOf(dd); - 1 !== Jd && Wd.splice(Jd, 1)
          }
        }), dd.debugMode = function() {
          Pd = !1
        }, dd.safeMode = function() {
          Pd = !0
        }, dd.versionString = "11.11.1", dd.regex = {
          concat: Ld,
          lookahead: od,
          either: Od,
          optional: Qd,
          anyNumberOfTimes: ld
        };
        for (const kd in Dd) "object" === typeof Dd[kd] && Jd(Dd[kd]);
        return Object.assign(dd, Dd), dd
      },
      lJ = oJ({});
    lJ.newInstance = () => oJ({}), dd.exports = lJ, lJ.HighlightJS = lJ, lJ.default = lJ
  },
  4583: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    const pd = kd(4592)
  },
  4599: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => od
    });
    const pd = "[A-Za-z$_][0-9A-Za-z$_]*",
      Nd = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Wd = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Pd = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Zd = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      gd = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Cd = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Kd = [].concat(gd, Pd, Zd);

    function od(dd) {
      const Jd = dd.regex,
        kd = pd,
        od = "<>",
        ld = "</>",
        Qd = {
          ZQ: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (dd, Jd) => {
            const kd = dd[0].length + dd.index,
              pd = dd.input[kd];
            if ("<" === pd || "," === pd) return void Jd.ignoreMatch();
            let Nd;
            ">" === pd && (((dd, Jd) => {
              let {
                after: kd
              } = Jd;
              const pd = "</" + dd[0].slice(1);
              return -1 !== dd.input.indexOf(pd, kd)
            })(dd, {
              after: kd
            }) || Jd.ignoreMatch());
            const Wd = dd.input.substring(kd);
            ((Nd = Wd.match(/^\s*=/)) || (Nd = Wd.match(/^\s+extends\s+/)) && 0 === Nd.index) && Jd.ignoreMatch()
          }
        },
        Ld = {
          $pattern: pd,
          keyword: Nd,
          literal: Wd,
          built_in: Kd,
          "variable.language": Cd
        },
        Od = "[0-9](_?[0-9])*",
        ed = `\\.(${Od})`,
        Rd = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Id = {
          className: "number",
          variants: [{
            ZQ: `(\\b(${Rd})((${ed})|\\.)?|(${ed}))[eE][+-]?(${Od})\\b`
          }, {
            ZQ: `\\b(${Rd})\\b((${ed})\\b|\\.)?|(${ed})\\b`
          }, {
            ZQ: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            ZQ: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            ZQ: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            ZQ: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            ZQ: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Gd = {
          className: "subst",
          ZQ: "\\$\\{",
          end: "\\}",
          keywords: Ld,
          contains: []
        },
        vd = {
          ZQ: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, Gd],
            subLanguage: "xml"
          }
        },
        xd = {
          ZQ: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, Gd],
            subLanguage: "css"
          }
        },
        qd = {
          ZQ: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, Gd],
            subLanguage: "graphql"
          }
        },
        Bd = {
          className: "string",
          ZQ: "`",
          end: "`",
          contains: [dd.BACKSLASH_ESCAPE, Gd]
        },
        sd = {
          className: "comment",
          variants: [dd.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              ZQ: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                ZQ: "@[A-Za-z]+"
              }, {
                className: "type",
                ZQ: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                ZQ: kd + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                ZQ: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), dd.C_BLOCK_COMMENT_MODE, dd.C_LINE_COMMENT_MODE]
        },
        ad = [dd.APOS_STRING_MODE, dd.QUOTE_STRING_MODE, vd, xd, qd, Bd, {
          match: /\$\d+/
        }, Id];
      Gd.contains = ad.concat({
        ZQ: /\{/,
        end: /\}/,
        keywords: Ld,
        contains: ["self"].concat(ad)
      });
      const Md = [].concat(sd, Gd.contains),
        Fd = Md.concat([{
          ZQ: /(\s*)\(/,
          end: /\)/,
          keywords: Ld,
          contains: ["self"].concat(Md)
        }]),
        Yd = {
          className: "params",
          ZQ: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Ld,
          contains: Fd
        },
        md = {
          variants: [{
            match: [/class/, /\s+/, kd, /\s+/, /extends/, /\s+/, Jd.concat(kd, "(", Jd.concat(/\./, kd), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, kd],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        bd = {
          relevance: 0,
          match: Jd.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Pd, ...Zd]
          }
        },
        Sd = {
          variants: [{
            match: [/function/, /\s+/, kd, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Yd],
          illegal: /%/
        };
      const jd = {
        match: Jd.concat(/\b/, (Xd = [...gd, "super", "import"].map((dd => `${dd}\\s*\\(`)), Jd.concat("(?!", Xd.join("|"), ")")), kd, Jd.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Xd;
      const fd = {
          ZQ: Jd.concat(/\./, Jd.lookahead(Jd.concat(kd, /(?![0-9A-Za-z$_(])/))),
          end: kd,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        nd = {
          match: [/get|set/, /\s+/, kd, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            ZQ: /\(\)/
          }, Yd]
        },
        Ud = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + dd.UNDERSCORE_IDENT_RE + ")\\s*=>",
        yd = {
          match: [/const|var|let/, /\s+/, kd, /\s*/, /=\s*/, /(async\s*)?/, Jd.lookahead(Ud)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Yd]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Ld,
        exports: {
          PARAMS_CONTAINS: Fd,
          CLASS_REFERENCE: bd
        },
        illegal: /#(?![$_A-z])/,
        contains: [dd.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          ZQ: /^\s*['"]use (strict|asm)['"]/
        }, dd.APOS_STRING_MODE, dd.QUOTE_STRING_MODE, vd, xd, qd, Bd, sd, {
          match: /\$\d+/
        }, Id, bd, {
          scope: "attr",
          match: kd + Jd.lookahead(":"),
          relevance: 0
        }, yd, {
          ZQ: "(" + dd.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [sd, dd.REGEXP_MODE, {
            className: "function",
            ZQ: Ud,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                ZQ: dd.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                ZQ: /\(\s*\)/,
                skip: !0
              }, {
                ZQ: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Ld,
                contains: Fd
              }]
            }]
          }, {
            ZQ: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              ZQ: od,
              end: ld
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              ZQ: Qd.ZQ,
              "on:begin": Qd.isTrulyOpeningTag,
              end: Qd.end
            }],
            subLanguage: "xml",
            contains: [{
              ZQ: Qd.ZQ,
              end: Qd.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Sd, {
          beginKeywords: "while if switch catch for"
        }, {
          ZQ: "\\b(?!function)" + dd.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Yd, dd.inherit(dd.TITLE_MODE, {
            ZQ: kd,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, fd, {
          match: "\\$" + kd,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Yd]
        }, jd, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, md, nd, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4603: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => ld
    });
    const pd = "[A-Za-z$_][0-9A-Za-z$_]*",
      Nd = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Wd = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Pd = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Zd = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      gd = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Cd = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Kd = [].concat(gd, Pd, Zd);

    function od(dd) {
      const Jd = dd.regex,
        kd = pd,
        od = "<>",
        ld = "</>",
        Qd = {
          ZQ: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (dd, Jd) => {
            const kd = dd[0].length + dd.index,
              pd = dd.input[kd];
            if ("<" === pd || "," === pd) return void Jd.ignoreMatch();
            let Nd;
            ">" === pd && (((dd, Jd) => {
              let {
                after: kd
              } = Jd;
              const pd = "</" + dd[0].slice(1);
              return -1 !== dd.input.indexOf(pd, kd)
            })(dd, {
              after: kd
            }) || Jd.ignoreMatch());
            const Wd = dd.input.substring(kd);
            ((Nd = Wd.match(/^\s*=/)) || (Nd = Wd.match(/^\s+extends\s+/)) && 0 === Nd.index) && Jd.ignoreMatch()
          }
        },
        Ld = {
          $pattern: pd,
          keyword: Nd,
          literal: Wd,
          built_in: Kd,
          "variable.language": Cd
        },
        Od = "[0-9](_?[0-9])*",
        ed = `\\.(${Od})`,
        Rd = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Id = {
          className: "number",
          variants: [{
            ZQ: `(\\b(${Rd})((${ed})|\\.)?|(${ed}))[eE][+-]?(${Od})\\b`
          }, {
            ZQ: `\\b(${Rd})\\b((${ed})\\b|\\.)?|(${ed})\\b`
          }, {
            ZQ: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            ZQ: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            ZQ: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            ZQ: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            ZQ: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Gd = {
          className: "subst",
          ZQ: "\\$\\{",
          end: "\\}",
          keywords: Ld,
          contains: []
        },
        vd = {
          ZQ: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, Gd],
            subLanguage: "xml"
          }
        },
        xd = {
          ZQ: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, Gd],
            subLanguage: "css"
          }
        },
        qd = {
          ZQ: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [dd.BACKSLASH_ESCAPE, Gd],
            subLanguage: "graphql"
          }
        },
        Bd = {
          className: "string",
          ZQ: "`",
          end: "`",
          contains: [dd.BACKSLASH_ESCAPE, Gd]
        },
        sd = {
          className: "comment",
          variants: [dd.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              ZQ: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                ZQ: "@[A-Za-z]+"
              }, {
                className: "type",
                ZQ: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                ZQ: kd + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                ZQ: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), dd.C_BLOCK_COMMENT_MODE, dd.C_LINE_COMMENT_MODE]
        },
        ad = [dd.APOS_STRING_MODE, dd.QUOTE_STRING_MODE, vd, xd, qd, Bd, {
          match: /\$\d+/
        }, Id];
      Gd.contains = ad.concat({
        ZQ: /\{/,
        end: /\}/,
        keywords: Ld,
        contains: ["self"].concat(ad)
      });
      const Md = [].concat(sd, Gd.contains),
        Fd = Md.concat([{
          ZQ: /(\s*)\(/,
          end: /\)/,
          keywords: Ld,
          contains: ["self"].concat(Md)
        }]),
        Yd = {
          className: "params",
          ZQ: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Ld,
          contains: Fd
        },
        md = {
          variants: [{
            match: [/class/, /\s+/, kd, /\s+/, /extends/, /\s+/, Jd.concat(kd, "(", Jd.concat(/\./, kd), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, kd],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        bd = {
          relevance: 0,
          match: Jd.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Pd, ...Zd]
          }
        },
        Sd = {
          variants: [{
            match: [/function/, /\s+/, kd, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Yd],
          illegal: /%/
        };
      const jd = {
        match: Jd.concat(/\b/, (Xd = [...gd, "super", "import"].map((dd => `${dd}\\s*\\(`)), Jd.concat("(?!", Xd.join("|"), ")")), kd, Jd.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Xd;
      const fd = {
          ZQ: Jd.concat(/\./, Jd.lookahead(Jd.concat(kd, /(?![0-9A-Za-z$_(])/))),
          end: kd,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        nd = {
          match: [/get|set/, /\s+/, kd, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            ZQ: /\(\)/
          }, Yd]
        },
        Ud = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + dd.UNDERSCORE_IDENT_RE + ")\\s*=>",
        yd = {
          match: [/const|var|let/, /\s+/, kd, /\s*/, /=\s*/, /(async\s*)?/, Jd.lookahead(Ud)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Yd]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Ld,
        exports: {
          PARAMS_CONTAINS: Fd,
          CLASS_REFERENCE: bd
        },
        illegal: /#(?![$_A-z])/,
        contains: [dd.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          ZQ: /^\s*['"]use (strict|asm)['"]/
        }, dd.APOS_STRING_MODE, dd.QUOTE_STRING_MODE, vd, xd, qd, Bd, sd, {
          match: /\$\d+/
        }, Id, bd, {
          scope: "attr",
          match: kd + Jd.lookahead(":"),
          relevance: 0
        }, yd, {
          ZQ: "(" + dd.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [sd, dd.REGEXP_MODE, {
            className: "function",
            ZQ: Ud,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                ZQ: dd.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                ZQ: /\(\s*\)/,
                skip: !0
              }, {
                ZQ: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Ld,
                contains: Fd
              }]
            }]
          }, {
            ZQ: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              ZQ: od,
              end: ld
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              ZQ: Qd.ZQ,
              "on:begin": Qd.isTrulyOpeningTag,
              end: Qd.end
            }],
            subLanguage: "xml",
            contains: [{
              ZQ: Qd.ZQ,
              end: Qd.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Sd, {
          beginKeywords: "while if switch catch for"
        }, {
          ZQ: "\\b(?!function)" + dd.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Yd, dd.inherit(dd.TITLE_MODE, {
            ZQ: kd,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, fd, {
          match: "\\$" + kd,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Yd]
        }, jd, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, md, nd, {
          match: /\$[(.]/
        }]
      }
    }

    function ld(dd) {
      const Jd = dd.regex,
        kd = od(dd),
        Pd = pd,
        Zd = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        gd = {
          ZQ: [/namespace/, /\s+/, dd.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        ld = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: Zd
          },
          contains: [kd.exports.CLASS_REFERENCE]
        },
        Qd = {
          $pattern: pd,
          keyword: Nd.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Wd,
          built_in: Kd.concat(Zd),
          "variable.language": Cd
        },
        Ld = {
          className: "meta",
          ZQ: "@" + Pd
        },
        Od = (dd, Jd, kd) => {
          const pd = dd.contains.findIndex((dd => dd.label === Jd));
          if (-1 === pd) throw new Error("can not find mode to replace");
          dd.contains.splice(pd, 1, kd)
        };
      Object.assign(kd.keywords, Qd), kd.exports.PARAMS_CONTAINS.push(Ld);
      const ed = kd.contains.find((dd => "attr" === dd.scope)),
        Rd = Object.assign({}, ed, {
          match: Jd.concat(Pd, Jd.lookahead(/\s*\?:/))
        });
      kd.exports.PARAMS_CONTAINS.push([kd.exports.CLASS_REFERENCE, ed, Rd]), kd.contains = kd.contains.concat([Ld, gd, ld, Rd]), Od(kd, "shebang", dd.SHEBANG()), Od(kd, "use_strict", {
        className: "meta",
        relevance: 10,
        ZQ: /^\s*['"]use strict['"]/
      });
      return kd.contains.find((dd => "func.def" === dd.label)).relevance = 0, Object.assign(kd, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), kd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);