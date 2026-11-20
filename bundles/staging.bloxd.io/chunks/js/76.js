export const id = 76;
export const ids = [76];
export const modules = {
  4442: kk => {
    function Fk(kk) {
      return kk instanceof Map ? kk.clear = kk.delete = kk.set = function() {
        throw new Error("map is read-only")
      } : kk instanceof Set && (kk.add = kk.clear = kk.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(kk), Object.getOwnPropertyNames(kk).forEach((Bk => {
        const Rk = kk[Bk],
          tk = typeof Rk;
        "object" !== tk && "function" !== tk || Object.isFrozen(Rk) || Fk(Rk)
      })), kk
    }
    class Bk {
      constructor(kk) {
        void 0 === kk.data && (kk.data = {}), this.data = kk.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Rk(kk) {
      return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function tk(kk) {
      const Fk = Object.create(null);
      for (const ak in kk) Fk[ak] = kk[ak];
      for (var Bk = arguments.length, Rk = new Array(Bk > 1 ? Bk - 1 : 0), tk = 1; tk < Bk; tk++) Rk[tk - 1] = arguments[tk];
      return Rk.forEach((function(kk) {
        for (const Bk in kk) Fk[Bk] = kk[Bk]
      })), Fk
    }
    const ak = kk => !!kk.scope;
    class Xk {
      constructor(kk, Fk) {
        this.buffer = "", this.classPrefix = Fk.classPrefix, kk.walk(this)
      }
      addText(kk) {
        this.buffer += Rk(kk)
      }
      openNode(kk) {
        if (!ak(kk)) return;
        const Fk = ((kk, Fk) => {
          let {
            prefix: Bk
          } = Fk;
          if (kk.startsWith("language:")) return kk.replace("language:", "language-");
          if (kk.includes(".")) {
            const Fk = kk.split(".");
            return [`${Bk}${Fk.shift()}`, ...Fk.map(((kk, Fk) => `${kk}${"_".repeat(Fk+1)}`))].join(" ")
          }
          return `${Bk}${kk}`
        })(kk.scope, {
          prefix: this.classPrefix
        });
        this.span(Fk)
      }
      closeNode(kk) {
        ak(kk) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(kk) {
        this.buffer += `<span class="${kk}">`
      }
    }
    const bk = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Fk = {
        children: []
      };
      return Object.assign(Fk, kk), Fk
    };
    class wk {
      constructor() {
        this.cW = bk(), this.stack = [this.cW]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.cW
      }
      add(kk) {
        this.top.children.push(kk)
      }
      openNode(kk) {
        const Fk = bk({
          scope: kk
        });
        this.add(Fk), this.stack.push(Fk)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.cW, null, 4)
      }
      walk(kk) {
        return this.constructor._walk(kk, this.cW)
      }
      static _walk(kk, Fk) {
        return "string" === typeof Fk ? kk.addText(Fk) : Fk.children && (kk.openNode(Fk), Fk.children.forEach((Fk => this._walk(kk, Fk))), kk.closeNode(Fk)), kk
      }
      static _collapse(kk) {
        "string" !== typeof kk && kk.children && (kk.children.every((kk => "string" === typeof kk)) ? kk.children = [kk.children.join("")] : kk.children.forEach((kk => {
          wk._collapse(kk)
        })))
      }
    }
    class dk extends wk {
      constructor(kk) {
        super(), this.options = kk
      }
      addText(kk) {
        "" !== kk && this.add(kk)
      }
      startScope(kk) {
        this.openNode(kk)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(kk, Fk) {
        const Bk = kk.root;
        Fk && (Bk.scope = `language:${Fk}`), this.add(Bk)
      }
      toHTML() {
        return new Xk(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function sk(kk) {
      return kk ? "string" === typeof kk ? kk : kk.source : null
    }

    function Vk(kk) {
      return ek("(?=", kk, ")")
    }

    function Jk(kk) {
      return ek("(?:", kk, ")*")
    }

    function Ak(kk) {
      return ek("(?:", kk, ")?")
    }

    function ek() {
      for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
      return Fk.map((kk => sk(kk))).join("")
    }

    function yk() {
      for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
      const Rk = function(kk) {
        const Fk = kk[kk.length - 1];
        return "object" === typeof Fk && Fk.constructor === Object ? (kk.splice(kk.length - 1, 1), Fk) : {}
      }(Fk);
      return "(" + (Rk.capture ? "" : "?:") + Fk.map((kk => sk(kk))).join("|") + ")"
    }

    function fk(kk) {
      return new RegExp(kk.toString() + "|").exec("").length - 1
    }
    const mk = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Wk(kk, Fk) {
      let {
        joinWith: Bk
      } = Fk, Rk = 0;
      return kk.map((kk => {
        Rk += 1;
        const Fk = Rk;
        let Bk = sk(kk),
          tk = "";
        for (; Bk.length > 0;) {
          const kk = mk.exec(Bk);
          if (!kk) {
            tk += Bk;
            break
          }
          tk += Bk.substring(0, kk.index), Bk = Bk.substring(kk.index + kk[0].length), "\\" === kk[0][0] && kk[1] ? tk += "\\" + String(Number(kk[1]) + Fk) : (tk += kk[0], "(" === kk[0] && Rk++)
        }
        return tk
      })).map((kk => `(${kk})`)).join(Bk)
    }
    const vk = "[a-zA-Z]\\w*",
      ik = "[a-zA-Z_]\\w*",
      Yk = "\\b\\d+(\\.\\d+)?",
      Lk = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Ok = "\\b(0b[01]+)",
      Ek = {
        UA: "\\\\[\\s\\S]",
        relevance: 0
      },
      Sk = {
        scope: "string",
        UA: "'",
        end: "'",
        illegal: "\\n",
        contains: [Ek]
      },
      Nk = {
        scope: "string",
        UA: '"',
        end: '"',
        illegal: "\\n",
        contains: [Ek]
      },
      Hk = function(kk, Fk) {
        const Bk = tk({
          scope: "comment",
          UA: kk,
          end: Fk,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        Bk.contains.push({
          scope: "doctag",
          UA: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Rk = yk("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return Bk.contains.push({
          UA: ek(/[ ]+/, "(", Rk, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), Bk
      },
      uk = Hk("//", "$"),
      Mk = Hk("/\\*", "\\*/"),
      gk = Hk("#", "$"),
      Uk = {
        scope: "number",
        UA: Yk,
        relevance: 0
      },
      ck = {
        scope: "number",
        UA: Lk,
        relevance: 0
      },
      Gk = {
        scope: "number",
        UA: Ok,
        relevance: 0
      },
      Tk = {
        scope: "regexp",
        UA: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [Ek, {
          UA: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [Ek]
        }]
      },
      rk = {
        scope: "title",
        UA: vk,
        relevance: 0
      },
      Dk = {
        scope: "title",
        UA: ik,
        relevance: 0
      },
      zk = {
        UA: "\\.\\s*" + ik,
        relevance: 0
      };
    var Pk = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: Sk,
      BACKSLASH_ESCAPE: Ek,
      BINARY_NUMBER_MODE: Gk,
      BINARY_NUMBER_RE: Ok,
      COMMENT: Hk,
      C_BLOCK_COMMENT_MODE: Mk,
      C_LINE_COMMENT_MODE: uk,
      C_NUMBER_MODE: ck,
      C_NUMBER_RE: Lk,
      END_SAME_AS_BEGIN: function(kk) {
        return Object.assign(kk, {
          "on:begin": (kk, Fk) => {
            Fk.data._beginMatch = kk[1]
          },
          "on:end": (kk, Fk) => {
            Fk.data._beginMatch !== kk[1] && Fk.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: gk,
      IDENT_RE: vk,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: zk,
      NUMBER_MODE: Uk,
      NUMBER_RE: Yk,
      PHRASAL_WORDS_MODE: {
        UA: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Nk,
      REGEXP_MODE: Tk,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const Fk = /^#![ ]*\//;
        return kk.binary && (kk.UA = ek(Fk, /.*\b/, kk.binary, /\b.*/)), tk({
          scope: "meta",
          UA: Fk,
          end: /$/,
          relevance: 0,
          "on:begin": (kk, Fk) => {
            0 !== kk.index && Fk.ignoreMatch()
          }
        }, kk)
      },
      TITLE_MODE: rk,
      UNDERSCORE_IDENT_RE: ik,
      UNDERSCORE_TITLE_MODE: Dk
    });

    function hk(kk, Fk) {
      "." === kk.input[kk.index - 1] && Fk.ignoreMatch()
    }

    function qk(kk, Fk) {
      void 0 !== kk.className && (kk.scope = kk.className, delete kk.className)
    }

    function Ck(kk, Fk) {
      Fk && kk.beginKeywords && (kk.UA = "\\b(" + kk.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", kk.__beforeBegin = hk, kk.keywords = kk.keywords || kk.beginKeywords, delete kk.beginKeywords, void 0 === kk.relevance && (kk.relevance = 0))
    }

    function Zk(kk, Fk) {
      Array.isArray(kk.illegal) && (kk.illegal = yk(...kk.illegal))
    }

    function pk(kk, Fk) {
      if (kk.match) {
        if (kk.UA || kk.end) throw new Error("begin & end are not supported with match");
        kk.UA = kk.match, delete kk.match
      }
    }

    function Kk(kk, Fk) {
      void 0 === kk.relevance && (kk.relevance = 1)
    }
    const xk = (kk, Fk) => {
        if (!kk.beforeMatch) return;
        if (kk.starts) throw new Error("beforeMatch cannot be used with starts");
        const Bk = Object.assign({}, kk);
        Object.keys(kk).forEach((Fk => {
          delete kk[Fk]
        })), kk.keywords = Bk.keywords, kk.UA = ek(Bk.beforeMatch, Vk(Bk.UA)), kk.starts = {
          relevance: 0,
          contains: [Object.assign(Bk, {
            endsParent: !0
          })]
        }, kk.relevance = 0, delete Bk.beforeMatch
      },
      jk = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function lk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Rk = Object.create(null);
      return "string" === typeof kk ? tk(Bk, kk.split(" ")) : Array.isArray(kk) ? tk(Bk, kk) : Object.keys(kk).forEach((function(Bk) {
        Object.assign(Rk, lk(kk[Bk], Fk, Bk))
      })), Rk;

      function tk(kk, Bk) {
        Fk && (Bk = Bk.map((kk => kk.toLowerCase()))), Bk.forEach((function(Fk) {
          const Bk = Fk.split("|");
          Rk[Bk[0]] = [kk, nk(Bk[0], Bk[1])]
        }))
      }
    }

    function nk(kk, Fk) {
      return Fk ? Number(Fk) : function(kk) {
        return jk.includes(kk.toLowerCase())
      }(kk) ? 0 : 1
    }
    const Ik = {},
      Qk = kk => {
        console.error(kk)
      },
      kF = function(kk) {
        for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
        console.log(`WARN: ${kk}`, ...Bk)
      },
      FF = (kk, Fk) => {
        Ik[`${kk}/${Fk}`] || (console.log(`Deprecated as of ${kk}. ${Fk}`), Ik[`${kk}/${Fk}`] = !0)
      },
      BF = new Error;

    function RF(kk, Fk, Bk) {
      let {
        key: Rk
      } = Bk, tk = 0;
      const ak = kk[Rk],
        Xk = {},
        bk = {};
      for (let wk = 1; wk <= Fk.length; wk++) bk[wk + tk] = ak[wk], Xk[wk + tk] = !0, tk += fk(Fk[wk - 1]);
      kk[Rk] = bk, kk[Rk]._emit = Xk, kk[Rk]._multi = !0
    }

    function tF(kk) {
      ! function(kk) {
        kk.scope && "object" === typeof kk.scope && null !== kk.scope && (kk.beginScope = kk.scope, delete kk.scope)
      }(kk), "string" === typeof kk.beginScope && (kk.beginScope = {
          _wrap: kk.beginScope
        }), "string" === typeof kk.endScope && (kk.endScope = {
          _wrap: kk.endScope
        }),
        function(kk) {
          if (Array.isArray(kk.UA)) {
            if (kk.skip || kk.excludeBegin || kk.returnBegin) throw Qk("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), BF;
            if ("object" !== typeof kk.beginScope || null === kk.beginScope) throw Qk("beginScope must be object"), BF;
            RF(kk, kk.UA, {
              key: "beginScope"
            }), kk.UA = Wk(kk.UA, {
              joinWith: ""
            })
          }
        }(kk),
        function(kk) {
          if (Array.isArray(kk.end)) {
            if (kk.skip || kk.excludeEnd || kk.returnEnd) throw Qk("skip, excludeEnd, returnEnd not compatible with endScope: {}"), BF;
            if ("object" !== typeof kk.endScope || null === kk.endScope) throw Qk("endScope must be object"), BF;
            RF(kk, kk.end, {
              key: "endScope"
            }), kk.end = Wk(kk.end, {
              joinWith: ""
            })
          }
        }(kk)
    }

    function aF(kk) {
      function Fk(Fk, Bk) {
        return new RegExp(sk(Fk), "m" + (kk.case_insensitive ? "i" : "") + (kk.unicodeRegex ? "u" : "") + (Bk ? "g" : ""))
      }
      class Bk {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(kk, Fk) {
          Fk.position = this.position++, this.matchIndexes[this.matchAt] = Fk, this.regexes.push([Fk, kk]), this.matchAt += fk(kk) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const kk = this.regexes.map((kk => kk[1]));
          this.matcherRe = Fk(Wk(kk, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(kk) {
          this.matcherRe.lastIndex = this.lastIndex;
          const Fk = this.matcherRe.exec(kk);
          if (!Fk) return null;
          const Bk = Fk.findIndex(((kk, Fk) => Fk > 0 && void 0 !== kk)),
            Rk = this.matchIndexes[Bk];
          return Fk.splice(0, Bk), Object.assign(Fk, Rk)
        }
      }
      class Rk {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(kk) {
          if (this.multiRegexes[kk]) return this.multiRegexes[kk];
          const Fk = new Bk;
          return this.rules.slice(kk).forEach((kk => {
            let [Bk, Rk] = kk;
            return Fk.addRule(Bk, Rk)
          })), Fk.compile(), this.multiRegexes[kk] = Fk, Fk
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(kk, Fk) {
          this.rules.push([kk, Fk]), "UA" === Fk.type && this.count++
        }
        exec(kk) {
          const Fk = this.getMatcher(this.regexIndex);
          Fk.lastIndex = this.lastIndex;
          let Bk = Fk.exec(kk);
          if (this.resumingScanAtSamePosition())
            if (Bk && Bk.index === this.lastIndex);
            else {
              const Fk = this.getMatcher(0);
              Fk.lastIndex = this.lastIndex + 1, Bk = Fk.exec(kk)
            } return Bk && (this.regexIndex += Bk.position + 1, this.regexIndex === this.count && this.considerAll()), Bk
        }
      }
      if (kk.compilerExtensions || (kk.compilerExtensions = []), kk.contains && kk.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return kk.classNameAliases = tk(kk.classNameAliases || {}),
        function Bk(ak, Xk) {
          const bk = ak;
          if (ak.isCompiled) return bk;
          [qk, pk, tF, xk].forEach((kk => kk(ak, Xk))), kk.compilerExtensions.forEach((kk => kk(ak, Xk))), ak.__beforeBegin = null, [Ck, Zk, Kk].forEach((kk => kk(ak, Xk))), ak.isCompiled = !0;
          let wk = null;
          return "object" === typeof ak.keywords && ak.keywords.$pattern && (ak.keywords = Object.assign({}, ak.keywords), wk = ak.keywords.$pattern, delete ak.keywords.$pattern), wk = wk || /\w+/, ak.keywords && (ak.keywords = lk(ak.keywords, kk.case_insensitive)), bk.keywordPatternRe = Fk(wk, !0), Xk && (ak.UA || (ak.UA = /\B|\b/), bk.beginRe = Fk(bk.UA), ak.end || ak.endsWithParent || (ak.end = /\B|\b/), ak.end && (bk.endRe = Fk(bk.end)), bk.terminatorEnd = sk(bk.end) || "", ak.endsWithParent && Xk.terminatorEnd && (bk.terminatorEnd += (ak.end ? "|" : "") + Xk.terminatorEnd)), ak.illegal && (bk.illegalRe = Fk(ak.illegal)), ak.contains || (ak.contains = []), ak.contains = [].concat(...ak.contains.map((function(kk) {
            return function(kk) {
              kk.variants && !kk.cachedVariants && (kk.cachedVariants = kk.variants.map((function(Fk) {
                return tk(kk, {
                  variants: null
                }, Fk)
              })));
              if (kk.cachedVariants) return kk.cachedVariants;
              if (XF(kk)) return tk(kk, {
                starts: kk.starts ? tk(kk.starts) : null
              });
              if (Object.isFrozen(kk)) return tk(kk);
              return kk
            }("self" === kk ? ak : kk)
          }))), ak.contains.forEach((function(kk) {
            Bk(kk, bk)
          })), ak.starts && Bk(ak.starts, Xk), bk.matcher = function(kk) {
            const Fk = new Rk;
            return kk.contains.forEach((kk => Fk.addRule(kk.UA, {
              rule: kk,
              type: "UA"
            }))), kk.terminatorEnd && Fk.addRule(kk.terminatorEnd, {
              type: "end"
            }), kk.illegal && Fk.addRule(kk.illegal, {
              type: "illegal"
            }), Fk
          }(bk), bk
        }(kk)
    }

    function XF(kk) {
      return !!kk && (kk.endsWithParent || XF(kk.starts))
    }
    class bF extends Error {
      constructor(kk, Fk) {
        super(kk), this.name = "HTMLInjectionError", this.html = Fk
      }
    }
    const wF = Rk,
      dF = tk,
      sF = Symbol("nomatch"),
      VF = function(kk) {
        const Rk = Object.create(null),
          tk = Object.create(null),
          ak = [];
        let Xk = !0;
        const bk = "Could not find the language '{}', did you forget to load/include a language module?",
          wk = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let sk = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: dk
        };

        function fk(kk) {
          return sk.noHighlightRe.test(kk)
        }

        function mk(kk, Fk, Bk) {
          let Rk = "",
            tk = "";
          "object" === typeof Fk ? (Rk = kk, Bk = Fk.ignoreIllegals, tk = Fk.language) : (FF("10.7.0", "highlight(lang, code, ...args) has been deprecated."), FF("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), tk = kk, Rk = Fk), void 0 === Bk && (Bk = !0);
          const ak = {
            code: Rk,
            language: tk
          };
          Nk("before:highlight", ak);
          const Xk = ak.result ? ak.result : Wk(ak.language, ak.code, Bk);
          return Xk.code = ak.code, Nk("after:highlight", Xk), Xk
        }

        function Wk(kk, Fk, tk, ak) {
          const wk = Object.create(null);

          function dk() {
            if (!Nk.keywords) return void uk.addText(Mk);
            let kk = 0;
            Nk.keywordPatternRe.lastIndex = 0;
            let Fk = Nk.keywordPatternRe.exec(Mk),
              Bk = "";
            for (; Fk;) {
              Bk += Mk.substring(kk, Fk.index);
              const tk = Lk.case_insensitive ? Fk[0].toLowerCase() : Fk[0],
                ak = (Rk = tk, Nk.keywords[Rk]);
              if (ak) {
                const [kk, Rk] = ak;
                if (uk.addText(Bk), Bk = "", wk[tk] = (wk[tk] || 0) + 1, wk[tk] <= 7 && (gk += Rk), kk.startsWith("_")) Bk += Fk[0];
                else {
                  const Bk = Lk.classNameAliases[kk] || kk;
                  Jk(Fk[0], Bk)
                }
              } else Bk += Fk[0];
              kk = Nk.keywordPatternRe.lastIndex, Fk = Nk.keywordPatternRe.exec(Mk)
            }
            var Rk;
            Bk += Mk.substring(kk), uk.addText(Bk)
          }

          function Vk() {
            null != Nk.subLanguage ? function() {
              if ("" === Mk) return;
              let kk = null;
              if ("string" === typeof Nk.subLanguage) {
                if (!Rk[Nk.subLanguage]) return void uk.addText(Mk);
                kk = Wk(Nk.subLanguage, Mk, !0, Hk[Nk.subLanguage]), Hk[Nk.subLanguage] = kk._top
              } else kk = vk(Mk, Nk.subLanguage.length ? Nk.subLanguage : null);
              Nk.relevance > 0 && (gk += kk.relevance), uk.__addSublanguage(kk._emitter, kk.language)
            }() : dk(), Mk = ""
          }

          function Jk(kk, Fk) {
            "" !== kk && (uk.startScope(Fk), uk.addText(kk), uk.endScope())
          }

          function Ak(kk, Fk) {
            let Bk = 1;
            const Rk = Fk.length - 1;
            for (; Bk <= Rk;) {
              if (!kk._emit[Bk]) {
                Bk++;
                continue
              }
              const Rk = Lk.classNameAliases[kk[Bk]] || kk[Bk],
                tk = Fk[Bk];
              Rk ? Jk(tk, Rk) : (Mk = tk, dk(), Mk = ""), Bk++
            }
          }

          function ek(kk, Fk) {
            return kk.scope && "string" === typeof kk.scope && uk.openNode(Lk.classNameAliases[kk.scope] || kk.scope), kk.beginScope && (kk.beginScope._wrap ? (Jk(Mk, Lk.classNameAliases[kk.beginScope._wrap] || kk.beginScope._wrap), Mk = "") : kk.beginScope._multi && (Ak(kk.beginScope, Fk), Mk = "")), Nk = Object.create(kk, {
              parent: {
                value: Nk
              }
            }), Nk
          }

          function yk(kk, Fk, Rk) {
            let tk = function(kk, Fk) {
              const Bk = kk && kk.exec(Fk);
              return Bk && 0 === Bk.index
            }(kk.endRe, Rk);
            if (tk) {
              if (kk["on:end"]) {
                const Rk = new Bk(kk);
                kk["on:end"](Fk, Rk), Rk.isMatchIgnored && (tk = !1)
              }
              if (tk) {
                for (; kk.endsParent && kk.parent;) kk = kk.parent;
                return kk
              }
            }
            if (kk.endsWithParent) return yk(kk.parent, Fk, Rk)
          }

          function fk(kk) {
            return 0 === Nk.matcher.regexIndex ? (Mk += kk[0], 1) : (Gk = !0, 0)
          }

          function mk(kk) {
            const Bk = kk[0],
              Rk = Fk.substring(kk.index),
              tk = yk(Nk, kk, Rk);
            if (!tk) return sF;
            const ak = Nk;
            Nk.endScope && Nk.endScope._wrap ? (Vk(), Jk(Bk, Nk.endScope._wrap)) : Nk.endScope && Nk.endScope._multi ? (Vk(), Ak(Nk.endScope, kk)) : ak.skip ? Mk += Bk : (ak.returnEnd || ak.excludeEnd || (Mk += Bk), Vk(), ak.excludeEnd && (Mk = Bk));
            do {
              Nk.scope && uk.closeNode(), Nk.skip || Nk.subLanguage || (gk += Nk.relevance), Nk = Nk.parent
            } while (Nk !== tk.parent);
            return tk.starts && ek(tk.starts, kk), ak.returnEnd ? 0 : Bk.length
          }
          let ik = {};

          function Yk(Rk, ak) {
            const bk = ak && ak[0];
            if (Mk += Rk, null == bk) return Vk(), 0;
            if ("UA" === ik.type && "end" === ak.type && ik.index === ak.index && "" === bk) {
              if (Mk += Fk.slice(ak.index, ak.index + 1), !Xk) {
                const Fk = new Error(`0 width match regex (${kk})`);
                throw Fk.languageName = kk, Fk.badRule = ik.rule, Fk
              }
              return 1
            }
            if (ik = ak, "UA" === ak.type) return function(kk) {
              const Fk = kk[0],
                Rk = kk.rule,
                tk = new Bk(Rk),
                ak = [Rk.__beforeBegin, Rk["on:begin"]];
              for (const Bk of ak)
                if (Bk && (Bk(kk, tk), tk.isMatchIgnored)) return fk(Fk);
              return Rk.skip ? Mk += Fk : (Rk.excludeBegin && (Mk += Fk), Vk(), Rk.returnBegin || Rk.excludeBegin || (Mk = Fk)), ek(Rk, kk), Rk.returnBegin ? 0 : Fk.length
            }(ak);
            if ("illegal" === ak.type && !tk) {
              const kk = new Error('Illegal lexeme "' + bk + '" for mode "' + (Nk.scope || "<unnamed>") + '"');
              throw kk.mode = Nk, kk
            }
            if ("end" === ak.type) {
              const kk = mk(ak);
              if (kk !== sF) return kk
            }
            if ("illegal" === ak.type && "" === bk) return Mk += "\n", 1;
            if (ck > 1e5 && ck > 3 * ak.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Mk += bk, bk.length
          }
          const Lk = Ok(kk);
          if (!Lk) throw Qk(bk.replace("{}", kk)), new Error('Unknown language: "' + kk + '"');
          const Ek = aF(Lk);
          let Sk = "",
            Nk = ak || Ek;
          const Hk = {},
            uk = new sk.__emitter(sk);
          ! function() {
            const kk = [];
            for (let Fk = Nk; Fk !== Lk; Fk = Fk.parent) Fk.scope && kk.unshift(Fk.scope);
            kk.forEach((kk => uk.openNode(kk)))
          }();
          let Mk = "",
            gk = 0,
            Uk = 0,
            ck = 0,
            Gk = !1;
          try {
            if (Lk.__emitTokens) Lk.__emitTokens(Fk, uk);
            else {
              for (Nk.matcher.considerAll();;) {
                ck++, Gk ? Gk = !1 : Nk.matcher.considerAll(), Nk.matcher.lastIndex = Uk;
                const kk = Nk.matcher.exec(Fk);
                if (!kk) break;
                const Bk = Yk(Fk.substring(Uk, kk.index), kk);
                Uk = kk.index + Bk
              }
              Yk(Fk.substring(Uk))
            }
            return uk.finalize(), Sk = uk.toHTML(), {
              language: kk,
              value: Sk,
              relevance: gk,
              illegal: !1,
              _emitter: uk,
              _top: Nk
            }
          } catch (Tk) {
            if (Tk.message && Tk.message.includes("Illegal")) return {
              language: kk,
              value: wF(Fk),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: Tk.message,
                index: Uk,
                context: Fk.slice(Uk - 100, Uk + 100),
                mode: Tk.mode,
                resultSoFar: Sk
              },
              _emitter: uk
            };
            if (Xk) return {
              language: kk,
              value: wF(Fk),
              illegal: !1,
              relevance: 0,
              errorRaised: Tk,
              _emitter: uk,
              _top: Nk
            };
            throw Tk
          }
        }

        function vk(kk, Fk) {
          Fk = Fk || sk.languages || Object.keys(Rk);
          const Bk = function(kk) {
              const Fk = {
                value: wF(kk),
                illegal: !1,
                relevance: 0,
                _top: wk,
                _emitter: new sk.__emitter(sk)
              };
              return Fk._emitter.addText(kk), Fk
            }(kk),
            tk = Fk.filter(Ok).filter(Sk).map((Fk => Wk(Fk, kk, !1)));
          tk.unshift(Bk);
          const ak = tk.sort(((kk, Fk) => {
              if (kk.relevance !== Fk.relevance) return Fk.relevance - kk.relevance;
              if (kk.language && Fk.language) {
                if (Ok(kk.language).supersetOf === Fk.language) return 1;
                if (Ok(Fk.language).supersetOf === kk.language) return -1
              }
              return 0
            })),
            [Xk, bk] = ak,
            dk = Xk;
          return dk.secondBest = bk, dk
        }

        function ik(kk) {
          let Fk = null;
          const Bk = function(kk) {
            let Fk = kk.className + " ";
            Fk += kk.parentNode ? kk.parentNode.className : "";
            const Bk = sk.languageDetectRe.exec(Fk);
            if (Bk) {
              const Fk = Ok(Bk[1]);
              return Fk || (kF(bk.replace("{}", Bk[1])), kF("Falling back to no-highlight mode for this block.", kk)), Fk ? Bk[1] : "no-highlight"
            }
            return Fk.split(/\s+/).find((kk => fk(kk) || Ok(kk)))
          }(kk);
          if (fk(Bk)) return;
          if (Nk("before:highlightElement", {
              el: kk,
              language: Bk
            }), kk.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", kk);
          if (kk.children.length > 0 && (sk.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(kk)), sk.throwUnescapedHTML)) {
            throw new bF("One of your code blocks includes unescaped HTML.", kk.innerHTML)
          }
          Fk = kk;
          const Rk = Fk.textContent,
            ak = Bk ? mk(Rk, {
              language: Bk,
              ignoreIllegals: !0
            }) : vk(Rk);
          kk.innerHTML = ak.value, kk.dataset.highlighted = "yes",
            function(kk, Fk, Bk) {
              const Rk = Fk && tk[Fk] || Bk;
              kk.classList.add("hljs"), kk.classList.add(`language-${Rk}`)
            }(kk, Bk, ak.language), kk.result = {
              language: ak.language,
              re: ak.relevance,
              relevance: ak.relevance
            }, ak.secondBest && (kk.secondBest = {
              language: ak.secondBest.language,
              relevance: ak.secondBest.relevance
            }), Nk("after:highlightElement", {
              el: kk,
              result: ak,
              text: Rk
            })
        }
        let Yk = !1;

        function Lk() {
          if ("loading" === document.readyState) return Yk || window.addEventListener("DOMContentLoaded", (function() {
            Lk()
          }), !1), void(Yk = !0);
          document.querySelectorAll(sk.cssSelector).forEach(ik)
        }

        function Ok(kk) {
          return kk = (kk || "").toLowerCase(), Rk[kk] || Rk[tk[kk]]
        }

        function Ek(kk, Fk) {
          let {
            languageName: Bk
          } = Fk;
          "string" === typeof kk && (kk = [kk]), kk.forEach((kk => {
            tk[kk.toLowerCase()] = Bk
          }))
        }

        function Sk(kk) {
          const Fk = Ok(kk);
          return Fk && !Fk.disableAutodetect
        }

        function Nk(kk, Fk) {
          const Bk = kk;
          ak.forEach((function(kk) {
            kk[Bk] && kk[Bk](Fk)
          }))
        }
        Object.assign(kk, {
          highlight: mk,
          highlightAuto: vk,
          highlightAll: Lk,
          highlightElement: ik,
          highlightBlock: function(kk) {
            return FF("10.7.0", "highlightBlock will be removed entirely in v12.0"), FF("10.7.0", "Please use highlightElement now."), ik(kk)
          },
          configure: function(kk) {
            sk = dF(sk, kk)
          },
          initHighlighting: () => {
            Lk(), FF("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            Lk(), FF("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(Fk, Bk) {
            let tk = null;
            try {
              tk = Bk(kk)
            } catch (ak) {
              if (Qk("Language definition for '{}' could not be registered.".replace("{}", Fk)), !Xk) throw ak;
              Qk(ak), tk = wk
            }
            tk.name || (tk.name = Fk), Rk[Fk] = tk, tk.rawDefinition = Bk.bind(null, kk), tk.aliases && Ek(tk.aliases, {
              languageName: Fk
            })
          },
          unregisterLanguage: function(kk) {
            delete Rk[kk];
            for (const Fk of Object.keys(tk)) tk[Fk] === kk && delete tk[Fk]
          },
          listLanguages: function() {
            return Object.keys(Rk)
          },
          getLanguage: Ok,
          registerAliases: Ek,
          autoDetection: Sk,
          inherit: dF,
          addPlugin: function(kk) {
            ! function(kk) {
              kk["before:highlightBlock"] && !kk["before:highlightElement"] && (kk["before:highlightElement"] = Fk => {
                kk["before:highlightBlock"](Object.assign({
                  block: Fk.el
                }, Fk))
              }), kk["after:highlightBlock"] && !kk["after:highlightElement"] && (kk["after:highlightElement"] = Fk => {
                kk["after:highlightBlock"](Object.assign({
                  block: Fk.el
                }, Fk))
              })
            }(kk), ak.push(kk)
          },
          removePlugin: function(kk) {
            const Fk = ak.indexOf(kk); - 1 !== Fk && ak.splice(Fk, 1)
          }
        }), kk.debugMode = function() {
          Xk = !1
        }, kk.safeMode = function() {
          Xk = !0
        }, kk.versionString = "11.11.1", kk.regex = {
          concat: ek,
          lookahead: Vk,
          either: yk,
          optional: Ak,
          anyNumberOfTimes: Jk
        };
        for (const Bk in Pk) "object" === typeof Pk[Bk] && Fk(Pk[Bk]);
        return Object.assign(kk, Pk), kk
      },
      JF = VF({});
    JF.newInstance = () => VF({}), kk.exports = JF, JF.HighlightJS = JF, JF.default = JF
  },
  4437: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    const Rk = Bk(4442)
  },
  4445: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Vk
    });
    const Rk = "[A-Za-z$_][0-9A-Za-z$_]*",
      tk = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      ak = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Xk = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      bk = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      wk = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      dk = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      sk = [].concat(wk, Xk, bk);

    function Vk(kk) {
      const Fk = kk.regex,
        Bk = Rk,
        Vk = "<>",
        Jk = "</>",
        Ak = {
          UA: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (kk, Fk) => {
            const Bk = kk[0].length + kk.index,
              Rk = kk.input[Bk];
            if ("<" === Rk || "," === Rk) return void Fk.ignoreMatch();
            let tk;
            ">" === Rk && (((kk, Fk) => {
              let {
                after: Bk
              } = Fk;
              const Rk = "</" + kk[0].slice(1);
              return -1 !== kk.input.indexOf(Rk, Bk)
            })(kk, {
              after: Bk
            }) || Fk.ignoreMatch());
            const ak = kk.input.substring(Bk);
            ((tk = ak.match(/^\s*=/)) || (tk = ak.match(/^\s+extends\s+/)) && 0 === tk.index) && Fk.ignoreMatch()
          }
        },
        ek = {
          $pattern: Rk,
          keyword: tk,
          literal: ak,
          built_in: sk,
          "variable.language": dk
        },
        yk = "[0-9](_?[0-9])*",
        fk = `\\.(${yk})`,
        mk = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Wk = {
          className: "number",
          variants: [{
            UA: `(\\b(${mk})((${fk})|\\.)?|(${fk}))[eE][+-]?(${yk})\\b`
          }, {
            UA: `\\b(${mk})\\b((${fk})\\b|\\.)?|(${fk})\\b`
          }, {
            UA: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            UA: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            UA: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            UA: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            UA: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        vk = {
          className: "subst",
          UA: "\\$\\{",
          end: "\\}",
          keywords: ek,
          contains: []
        },
        ik = {
          UA: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, vk],
            subLanguage: "xml"
          }
        },
        Yk = {
          UA: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, vk],
            subLanguage: "css"
          }
        },
        Lk = {
          UA: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, vk],
            subLanguage: "graphql"
          }
        },
        Ok = {
          className: "string",
          UA: "`",
          end: "`",
          contains: [kk.BACKSLASH_ESCAPE, vk]
        },
        Ek = {
          className: "comment",
          variants: [kk.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              UA: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                UA: "@[A-Za-z]+"
              }, {
                className: "type",
                UA: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                UA: Bk + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                UA: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), kk.C_BLOCK_COMMENT_MODE, kk.C_LINE_COMMENT_MODE]
        },
        Sk = [kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, ik, Yk, Lk, Ok, {
          match: /\$\d+/
        }, Wk];
      vk.contains = Sk.concat({
        UA: /\{/,
        end: /\}/,
        keywords: ek,
        contains: ["self"].concat(Sk)
      });
      const Nk = [].concat(Ek, vk.contains),
        Hk = Nk.concat([{
          UA: /(\s*)\(/,
          end: /\)/,
          keywords: ek,
          contains: ["self"].concat(Nk)
        }]),
        uk = {
          className: "params",
          UA: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: ek,
          contains: Hk
        },
        Mk = {
          variants: [{
            match: [/class/, /\s+/, Bk, /\s+/, /extends/, /\s+/, Fk.concat(Bk, "(", Fk.concat(/\./, Bk), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Bk],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        gk = {
          relevance: 0,
          match: Fk.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Xk, ...bk]
          }
        },
        Uk = {
          variants: [{
            match: [/function/, /\s+/, Bk, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [uk],
          illegal: /%/
        };
      const ck = {
        match: Fk.concat(/\b/, (Gk = [...wk, "super", "import"].map((kk => `${kk}\\s*\\(`)), Fk.concat("(?!", Gk.join("|"), ")")), Bk, Fk.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Gk;
      const Tk = {
          UA: Fk.concat(/\./, Fk.lookahead(Fk.concat(Bk, /(?![0-9A-Za-z$_(])/))),
          end: Bk,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        rk = {
          match: [/get|set/, /\s+/, Bk, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            UA: /\(\)/
          }, uk]
        },
        Dk = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + kk.UNDERSCORE_IDENT_RE + ")\\s*=>",
        zk = {
          match: [/const|var|let/, /\s+/, Bk, /\s*/, /=\s*/, /(async\s*)?/, Fk.lookahead(Dk)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [uk]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: ek,
        exports: {
          PARAMS_CONTAINS: Hk,
          CLASS_REFERENCE: gk
        },
        illegal: /#(?![$_A-z])/,
        contains: [kk.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          UA: /^\s*['"]use (strict|asm)['"]/
        }, kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, ik, Yk, Lk, Ok, Ek, {
          match: /\$\d+/
        }, Wk, gk, {
          scope: "attr",
          match: Bk + Fk.lookahead(":"),
          relevance: 0
        }, zk, {
          UA: "(" + kk.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Ek, kk.REGEXP_MODE, {
            className: "function",
            UA: Dk,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                UA: kk.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                UA: /\(\s*\)/,
                skip: !0
              }, {
                UA: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: ek,
                contains: Hk
              }]
            }]
          }, {
            UA: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              UA: Vk,
              end: Jk
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              UA: Ak.UA,
              "on:begin": Ak.isTrulyOpeningTag,
              end: Ak.end
            }],
            subLanguage: "xml",
            contains: [{
              UA: Ak.UA,
              end: Ak.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Uk, {
          beginKeywords: "while if switch catch for"
        }, {
          UA: "\\b(?!function)" + kk.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [uk, kk.inherit(kk.TITLE_MODE, {
            UA: Bk,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Tk, {
          match: "\\$" + Bk,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [uk]
        }, ck, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Mk, rk, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4452: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Jk
    });
    const Rk = "[A-Za-z$_][0-9A-Za-z$_]*",
      tk = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      ak = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Xk = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      bk = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      wk = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      dk = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      sk = [].concat(wk, Xk, bk);

    function Vk(kk) {
      const Fk = kk.regex,
        Bk = Rk,
        Vk = "<>",
        Jk = "</>",
        Ak = {
          UA: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (kk, Fk) => {
            const Bk = kk[0].length + kk.index,
              Rk = kk.input[Bk];
            if ("<" === Rk || "," === Rk) return void Fk.ignoreMatch();
            let tk;
            ">" === Rk && (((kk, Fk) => {
              let {
                after: Bk
              } = Fk;
              const Rk = "</" + kk[0].slice(1);
              return -1 !== kk.input.indexOf(Rk, Bk)
            })(kk, {
              after: Bk
            }) || Fk.ignoreMatch());
            const ak = kk.input.substring(Bk);
            ((tk = ak.match(/^\s*=/)) || (tk = ak.match(/^\s+extends\s+/)) && 0 === tk.index) && Fk.ignoreMatch()
          }
        },
        ek = {
          $pattern: Rk,
          keyword: tk,
          literal: ak,
          built_in: sk,
          "variable.language": dk
        },
        yk = "[0-9](_?[0-9])*",
        fk = `\\.(${yk})`,
        mk = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Wk = {
          className: "number",
          variants: [{
            UA: `(\\b(${mk})((${fk})|\\.)?|(${fk}))[eE][+-]?(${yk})\\b`
          }, {
            UA: `\\b(${mk})\\b((${fk})\\b|\\.)?|(${fk})\\b`
          }, {
            UA: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            UA: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            UA: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            UA: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            UA: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        vk = {
          className: "subst",
          UA: "\\$\\{",
          end: "\\}",
          keywords: ek,
          contains: []
        },
        ik = {
          UA: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, vk],
            subLanguage: "xml"
          }
        },
        Yk = {
          UA: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, vk],
            subLanguage: "css"
          }
        },
        Lk = {
          UA: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, vk],
            subLanguage: "graphql"
          }
        },
        Ok = {
          className: "string",
          UA: "`",
          end: "`",
          contains: [kk.BACKSLASH_ESCAPE, vk]
        },
        Ek = {
          className: "comment",
          variants: [kk.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              UA: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                UA: "@[A-Za-z]+"
              }, {
                className: "type",
                UA: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                UA: Bk + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                UA: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), kk.C_BLOCK_COMMENT_MODE, kk.C_LINE_COMMENT_MODE]
        },
        Sk = [kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, ik, Yk, Lk, Ok, {
          match: /\$\d+/
        }, Wk];
      vk.contains = Sk.concat({
        UA: /\{/,
        end: /\}/,
        keywords: ek,
        contains: ["self"].concat(Sk)
      });
      const Nk = [].concat(Ek, vk.contains),
        Hk = Nk.concat([{
          UA: /(\s*)\(/,
          end: /\)/,
          keywords: ek,
          contains: ["self"].concat(Nk)
        }]),
        uk = {
          className: "params",
          UA: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: ek,
          contains: Hk
        },
        Mk = {
          variants: [{
            match: [/class/, /\s+/, Bk, /\s+/, /extends/, /\s+/, Fk.concat(Bk, "(", Fk.concat(/\./, Bk), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Bk],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        gk = {
          relevance: 0,
          match: Fk.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Xk, ...bk]
          }
        },
        Uk = {
          variants: [{
            match: [/function/, /\s+/, Bk, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [uk],
          illegal: /%/
        };
      const ck = {
        match: Fk.concat(/\b/, (Gk = [...wk, "super", "import"].map((kk => `${kk}\\s*\\(`)), Fk.concat("(?!", Gk.join("|"), ")")), Bk, Fk.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Gk;
      const Tk = {
          UA: Fk.concat(/\./, Fk.lookahead(Fk.concat(Bk, /(?![0-9A-Za-z$_(])/))),
          end: Bk,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        rk = {
          match: [/get|set/, /\s+/, Bk, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            UA: /\(\)/
          }, uk]
        },
        Dk = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + kk.UNDERSCORE_IDENT_RE + ")\\s*=>",
        zk = {
          match: [/const|var|let/, /\s+/, Bk, /\s*/, /=\s*/, /(async\s*)?/, Fk.lookahead(Dk)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [uk]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: ek,
        exports: {
          PARAMS_CONTAINS: Hk,
          CLASS_REFERENCE: gk
        },
        illegal: /#(?![$_A-z])/,
        contains: [kk.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          UA: /^\s*['"]use (strict|asm)['"]/
        }, kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, ik, Yk, Lk, Ok, Ek, {
          match: /\$\d+/
        }, Wk, gk, {
          scope: "attr",
          match: Bk + Fk.lookahead(":"),
          relevance: 0
        }, zk, {
          UA: "(" + kk.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [Ek, kk.REGEXP_MODE, {
            className: "function",
            UA: Dk,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                UA: kk.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                UA: /\(\s*\)/,
                skip: !0
              }, {
                UA: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: ek,
                contains: Hk
              }]
            }]
          }, {
            UA: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              UA: Vk,
              end: Jk
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              UA: Ak.UA,
              "on:begin": Ak.isTrulyOpeningTag,
              end: Ak.end
            }],
            subLanguage: "xml",
            contains: [{
              UA: Ak.UA,
              end: Ak.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Uk, {
          beginKeywords: "while if switch catch for"
        }, {
          UA: "\\b(?!function)" + kk.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [uk, kk.inherit(kk.TITLE_MODE, {
            UA: Bk,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Tk, {
          match: "\\$" + Bk,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [uk]
        }, ck, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Mk, rk, {
          match: /\$[(.]/
        }]
      }
    }

    function Jk(kk) {
      const Fk = kk.regex,
        Bk = Vk(kk),
        Xk = Rk,
        bk = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        wk = {
          UA: [/namespace/, /\s+/, kk.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Jk = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: bk
          },
          contains: [Bk.exports.CLASS_REFERENCE]
        },
        Ak = {
          $pattern: Rk,
          keyword: tk.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: ak,
          built_in: sk.concat(bk),
          "variable.language": dk
        },
        ek = {
          className: "meta",
          UA: "@" + Xk
        },
        yk = (kk, Fk, Bk) => {
          const Rk = kk.contains.findIndex((kk => kk.label === Fk));
          if (-1 === Rk) throw new Error("can not find mode to replace");
          kk.contains.splice(Rk, 1, Bk)
        };
      Object.assign(Bk.keywords, Ak), Bk.exports.PARAMS_CONTAINS.push(ek);
      const fk = Bk.contains.find((kk => "attr" === kk.scope)),
        mk = Object.assign({}, fk, {
          match: Fk.concat(Xk, Fk.lookahead(/\s*\?:/))
        });
      Bk.exports.PARAMS_CONTAINS.push([Bk.exports.CLASS_REFERENCE, fk, mk]), Bk.contains = Bk.contains.concat([ek, wk, Jk, mk]), yk(Bk, "shebang", kk.SHEBANG()), yk(Bk, "use_strict", {
        className: "meta",
        relevance: 10,
        UA: /^\s*['"]use strict['"]/
      });
      return Bk.contains.find((kk => "func.def" === kk.label)).relevance = 0, Object.assign(Bk, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), Bk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);