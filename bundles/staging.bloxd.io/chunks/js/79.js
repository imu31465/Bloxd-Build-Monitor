export const id = 79;
export const ids = [79];
export const modules = {
  4722: kk => {
    function Fk(kk) {
      return kk instanceof Map ? kk.clear = kk.delete = kk.set = function() {
        throw new Error("map is read-only")
      } : kk instanceof Set && (kk.add = kk.clear = kk.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(kk), Object.getOwnPropertyNames(kk).forEach((Ik => {
        const Xk = kk[Ik],
          Tk = typeof Xk;
        "object" !== Tk && "function" !== Tk || Object.isFrozen(Xk) || Fk(Xk)
      })), kk
    }
    class Ik {
      constructor(kk) {
        void 0 === kk.data && (kk.data = {}), this.data = kk.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Xk(kk) {
      return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Tk(kk) {
      const Fk = Object.create(null);
      for (const ik in kk) Fk[ik] = kk[ik];
      for (var Ik = arguments.length, Xk = new Array(Ik > 1 ? Ik - 1 : 0), Tk = 1; Tk < Ik; Tk++) Xk[Tk - 1] = arguments[Tk];
      return Xk.forEach((function(kk) {
        for (const Ik in kk) Fk[Ik] = kk[Ik]
      })), Fk
    }
    const ik = kk => !!kk.scope;
    class yk {
      constructor(kk, Fk) {
        this.buffer = "", this.classPrefix = Fk.classPrefix, kk.walk(this)
      }
      addText(kk) {
        this.buffer += Xk(kk)
      }
      openNode(kk) {
        if (!ik(kk)) return;
        const Fk = ((kk, Fk) => {
          let {
            prefix: Ik
          } = Fk;
          if (kk.startsWith("language:")) return kk.replace("language:", "language-");
          if (kk.includes(".")) {
            const Fk = kk.split(".");
            return [`${Ik}${Fk.shift()}`, ...Fk.map(((kk, Fk) => `${kk}${"_".repeat(Fk+1)}`))].join(" ")
          }
          return `${Ik}${kk}`
        })(kk.scope, {
          prefix: this.classPrefix
        });
        this.span(Fk)
      }
      closeNode(kk) {
        ik(kk) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(kk) {
        this.buffer += `<span class="${kk}">`
      }
    }
    const lk = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Fk = {
        children: []
      };
      return Object.assign(Fk, kk), Fk
    };
    class ak {
      constructor() {
        this.vJ = lk(), this.stack = [this.vJ]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.vJ
      }
      add(kk) {
        this.top.children.push(kk)
      }
      openNode(kk) {
        const Fk = lk({
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
        return JSON.stringify(this.vJ, null, 4)
      }
      walk(kk) {
        return this.constructor._walk(kk, this.vJ)
      }
      static _walk(kk, Fk) {
        return "string" === typeof Fk ? kk.addText(Fk) : Fk.children && (kk.openNode(Fk), Fk.children.forEach((Fk => this._walk(kk, Fk))), kk.closeNode(Fk)), kk
      }
      static _collapse(kk) {
        "string" !== typeof kk && kk.children && (kk.children.every((kk => "string" === typeof kk)) ? kk.children = [kk.children.join("")] : kk.children.forEach((kk => {
          ak._collapse(kk)
        })))
      }
    }
    class qk extends ak {
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
        const Ik = kk.root;
        Fk && (Ik.scope = `language:${Fk}`), this.add(Ik)
      }
      toHTML() {
        return new yk(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Lk(kk) {
      return kk ? "string" === typeof kk ? kk : kk.source : null
    }

    function tk(kk) {
      return ek("(?=", kk, ")")
    }

    function Zk(kk) {
      return ek("(?:", kk, ")*")
    }

    function jk(kk) {
      return ek("(?:", kk, ")?")
    }

    function ek() {
      for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
      return Fk.map((kk => Lk(kk))).join("")
    }

    function wk() {
      for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
      const Xk = function(kk) {
        const Fk = kk[kk.length - 1];
        return "object" === typeof Fk && Fk.constructor === Object ? (kk.splice(kk.length - 1, 1), Fk) : {}
      }(Fk);
      return "(" + (Xk.capture ? "" : "?:") + Fk.map((kk => Lk(kk))).join("|") + ")"
    }

    function Hk(kk) {
      return new RegExp(kk.toString() + "|").exec("").length - 1
    }
    const Jk = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function xk(kk, Fk) {
      let {
        joinWith: Ik
      } = Fk, Xk = 0;
      return kk.map((kk => {
        Xk += 1;
        const Fk = Xk;
        let Ik = Lk(kk),
          Tk = "";
        for (; Ik.length > 0;) {
          const kk = Jk.exec(Ik);
          if (!kk) {
            Tk += Ik;
            break
          }
          Tk += Ik.substring(0, kk.index), Ik = Ik.substring(kk.index + kk[0].length), "\\" === kk[0][0] && kk[1] ? Tk += "\\" + String(Number(kk[1]) + Fk) : (Tk += kk[0], "(" === kk[0] && Xk++)
        }
        return Tk
      })).map((kk => `(${kk})`)).join(Ik)
    }
    const Pk = "[a-zA-Z]\\w*",
      Kk = "[a-zA-Z_]\\w*",
      Qk = "\\b\\d+(\\.\\d+)?",
      sk = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Vk = "\\b(0b[01]+)",
      zk = {
        Hj: "\\\\[\\s\\S]",
        relevance: 0
      },
      Sk = {
        scope: "string",
        Hj: "'",
        end: "'",
        illegal: "\\n",
        contains: [zk]
      },
      vk = {
        scope: "string",
        Hj: '"',
        end: '"',
        illegal: "\\n",
        contains: [zk]
      },
      Ek = function(kk, Fk) {
        const Ik = Tk({
          scope: "comment",
          Hj: kk,
          end: Fk,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        Ik.contains.push({
          scope: "doctag",
          Hj: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Xk = wk("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return Ik.contains.push({
          Hj: ek(/[ ]+/, "(", Xk, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), Ik
      },
      Ok = Ek("//", "$"),
      nk = Ek("/\\*", "\\*/"),
      Gk = Ek("#", "$"),
      pk = {
        scope: "number",
        Hj: Qk,
        relevance: 0
      },
      uk = {
        scope: "number",
        Hj: sk,
        relevance: 0
      },
      bk = {
        scope: "number",
        Hj: Vk,
        relevance: 0
      },
      Rk = {
        scope: "regexp",
        Hj: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [zk, {
          Hj: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [zk]
        }]
      },
      Uk = {
        scope: "title",
        Hj: Pk,
        relevance: 0
      },
      Ck = {
        scope: "title",
        Hj: Kk,
        relevance: 0
      },
      Nk = {
        Hj: "\\.\\s*" + Kk,
        relevance: 0
      };
    var ck = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: Sk,
      BACKSLASH_ESCAPE: zk,
      BINARY_NUMBER_MODE: bk,
      BINARY_NUMBER_RE: Vk,
      COMMENT: Ek,
      C_BLOCK_COMMENT_MODE: nk,
      C_LINE_COMMENT_MODE: Ok,
      C_NUMBER_MODE: uk,
      C_NUMBER_RE: sk,
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
      HASH_COMMENT_MODE: Gk,
      IDENT_RE: Pk,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Nk,
      NUMBER_MODE: pk,
      NUMBER_RE: Qk,
      PHRASAL_WORDS_MODE: {
        Hj: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: vk,
      REGEXP_MODE: Rk,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const Fk = /^#![ ]*\//;
        return kk.binary && (kk.Hj = ek(Fk, /.*\b/, kk.binary, /\b.*/)), Tk({
          scope: "meta",
          Hj: Fk,
          end: /$/,
          relevance: 0,
          "on:begin": (kk, Fk) => {
            0 !== kk.index && Fk.ignoreMatch()
          }
        }, kk)
      },
      TITLE_MODE: Uk,
      UNDERSCORE_IDENT_RE: Kk,
      UNDERSCORE_TITLE_MODE: Ck
    });

    function Wk(kk, Fk) {
      "." === kk.input[kk.index - 1] && Fk.ignoreMatch()
    }

    function fk(kk, Fk) {
      void 0 !== kk.className && (kk.scope = kk.className, delete kk.className)
    }

    function Bk(kk, Fk) {
      Fk && kk.beginKeywords && (kk.Hj = "\\b(" + kk.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", kk.__beforeBegin = Wk, kk.keywords = kk.keywords || kk.beginKeywords, delete kk.beginKeywords, void 0 === kk.relevance && (kk.relevance = 0))
    }

    function dk(kk, Fk) {
      Array.isArray(kk.illegal) && (kk.illegal = wk(...kk.illegal))
    }

    function Yk(kk, Fk) {
      if (kk.match) {
        if (kk.Hj || kk.end) throw new Error("begin & end are not supported with match");
        kk.Hj = kk.match, delete kk.match
      }
    }

    function Ak(kk, Fk) {
      void 0 === kk.relevance && (kk.relevance = 1)
    }
    const gk = (kk, Fk) => {
        if (!kk.beforeMatch) return;
        if (kk.starts) throw new Error("beforeMatch cannot be used with starts");
        const Ik = Object.assign({}, kk);
        Object.keys(kk).forEach((Fk => {
          delete kk[Fk]
        })), kk.keywords = Ik.keywords, kk.Hj = ek(Ik.beforeMatch, tk(Ik.Hj)), kk.starts = {
          relevance: 0,
          contains: [Object.assign(Ik, {
            endsParent: !0
          })]
        }, kk.relevance = 0, delete Ik.beforeMatch
      },
      mk = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function hk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Xk = Object.create(null);
      return "string" === typeof kk ? Tk(Ik, kk.split(" ")) : Array.isArray(kk) ? Tk(Ik, kk) : Object.keys(kk).forEach((function(Ik) {
        Object.assign(Xk, hk(kk[Ik], Fk, Ik))
      })), Xk;

      function Tk(kk, Ik) {
        Fk && (Ik = Ik.map((kk => kk.toLowerCase()))), Ik.forEach((function(Fk) {
          const Ik = Fk.split("|");
          Xk[Ik[0]] = [kk, rk(Ik[0], Ik[1])]
        }))
      }
    }

    function rk(kk, Fk) {
      return Fk ? Number(Fk) : function(kk) {
        return mk.includes(kk.toLowerCase())
      }(kk) ? 0 : 1
    }
    const Dk = {},
      Mk = kk => {
        console.error(kk)
      },
      kF = function(kk) {
        for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
        console.log(`WARN: ${kk}`, ...Ik)
      },
      FF = (kk, Fk) => {
        Dk[`${kk}/${Fk}`] || (console.log(`Deprecated as of ${kk}. ${Fk}`), Dk[`${kk}/${Fk}`] = !0)
      },
      IF = new Error;

    function XF(kk, Fk, Ik) {
      let {
        key: Xk
      } = Ik, Tk = 0;
      const ik = kk[Xk],
        yk = {},
        lk = {};
      for (let ak = 1; ak <= Fk.length; ak++) lk[ak + Tk] = ik[ak], yk[ak + Tk] = !0, Tk += Hk(Fk[ak - 1]);
      kk[Xk] = lk, kk[Xk]._emit = yk, kk[Xk]._multi = !0
    }

    function TF(kk) {
      ! function(kk) {
        kk.scope && "object" === typeof kk.scope && null !== kk.scope && (kk.beginScope = kk.scope, delete kk.scope)
      }(kk), "string" === typeof kk.beginScope && (kk.beginScope = {
          _wrap: kk.beginScope
        }), "string" === typeof kk.endScope && (kk.endScope = {
          _wrap: kk.endScope
        }),
        function(kk) {
          if (Array.isArray(kk.Hj)) {
            if (kk.skip || kk.excludeBegin || kk.returnBegin) throw Mk("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), IF;
            if ("object" !== typeof kk.beginScope || null === kk.beginScope) throw Mk("beginScope must be object"), IF;
            XF(kk, kk.Hj, {
              key: "beginScope"
            }), kk.Hj = xk(kk.Hj, {
              joinWith: ""
            })
          }
        }(kk),
        function(kk) {
          if (Array.isArray(kk.end)) {
            if (kk.skip || kk.excludeEnd || kk.returnEnd) throw Mk("skip, excludeEnd, returnEnd not compatible with endScope: {}"), IF;
            if ("object" !== typeof kk.endScope || null === kk.endScope) throw Mk("endScope must be object"), IF;
            XF(kk, kk.end, {
              key: "endScope"
            }), kk.end = xk(kk.end, {
              joinWith: ""
            })
          }
        }(kk)
    }

    function iF(kk) {
      function Fk(Fk, Ik) {
        return new RegExp(Lk(Fk), "m" + (kk.case_insensitive ? "i" : "") + (kk.unicodeRegex ? "u" : "") + (Ik ? "g" : ""))
      }
      class Ik {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(kk, Fk) {
          Fk.position = this.position++, this.matchIndexes[this.matchAt] = Fk, this.regexes.push([Fk, kk]), this.matchAt += Hk(kk) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const kk = this.regexes.map((kk => kk[1]));
          this.matcherRe = Fk(xk(kk, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(kk) {
          this.matcherRe.lastIndex = this.lastIndex;
          const Fk = this.matcherRe.exec(kk);
          if (!Fk) return null;
          const Ik = Fk.findIndex(((kk, Fk) => Fk > 0 && void 0 !== kk)),
            Xk = this.matchIndexes[Ik];
          return Fk.splice(0, Ik), Object.assign(Fk, Xk)
        }
      }
      class Xk {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(kk) {
          if (this.multiRegexes[kk]) return this.multiRegexes[kk];
          const Fk = new Ik;
          return this.rules.slice(kk).forEach((kk => {
            let [Ik, Xk] = kk;
            return Fk.addRule(Ik, Xk)
          })), Fk.compile(), this.multiRegexes[kk] = Fk, Fk
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(kk, Fk) {
          this.rules.push([kk, Fk]), "Hj" === Fk.type && this.count++
        }
        exec(kk) {
          const Fk = this.getMatcher(this.regexIndex);
          Fk.lastIndex = this.lastIndex;
          let Ik = Fk.exec(kk);
          if (this.resumingScanAtSamePosition())
            if (Ik && Ik.index === this.lastIndex);
            else {
              const Fk = this.getMatcher(0);
              Fk.lastIndex = this.lastIndex + 1, Ik = Fk.exec(kk)
            } return Ik && (this.regexIndex += Ik.position + 1, this.regexIndex === this.count && this.considerAll()), Ik
        }
      }
      if (kk.compilerExtensions || (kk.compilerExtensions = []), kk.contains && kk.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return kk.classNameAliases = Tk(kk.classNameAliases || {}),
        function Ik(ik, yk) {
          const lk = ik;
          if (ik.isCompiled) return lk;
          [fk, Yk, TF, gk].forEach((kk => kk(ik, yk))), kk.compilerExtensions.forEach((kk => kk(ik, yk))), ik.__beforeBegin = null, [Bk, dk, Ak].forEach((kk => kk(ik, yk))), ik.isCompiled = !0;
          let ak = null;
          return "object" === typeof ik.keywords && ik.keywords.$pattern && (ik.keywords = Object.assign({}, ik.keywords), ak = ik.keywords.$pattern, delete ik.keywords.$pattern), ak = ak || /\w+/, ik.keywords && (ik.keywords = hk(ik.keywords, kk.case_insensitive)), lk.keywordPatternRe = Fk(ak, !0), yk && (ik.Hj || (ik.Hj = /\B|\b/), lk.beginRe = Fk(lk.Hj), ik.end || ik.endsWithParent || (ik.end = /\B|\b/), ik.end && (lk.endRe = Fk(lk.end)), lk.terminatorEnd = Lk(lk.end) || "", ik.endsWithParent && yk.terminatorEnd && (lk.terminatorEnd += (ik.end ? "|" : "") + yk.terminatorEnd)), ik.illegal && (lk.illegalRe = Fk(ik.illegal)), ik.contains || (ik.contains = []), ik.contains = [].concat(...ik.contains.map((function(kk) {
            return function(kk) {
              kk.variants && !kk.cachedVariants && (kk.cachedVariants = kk.variants.map((function(Fk) {
                return Tk(kk, {
                  variants: null
                }, Fk)
              })));
              if (kk.cachedVariants) return kk.cachedVariants;
              if (yF(kk)) return Tk(kk, {
                starts: kk.starts ? Tk(kk.starts) : null
              });
              if (Object.isFrozen(kk)) return Tk(kk);
              return kk
            }("self" === kk ? ik : kk)
          }))), ik.contains.forEach((function(kk) {
            Ik(kk, lk)
          })), ik.starts && Ik(ik.starts, yk), lk.matcher = function(kk) {
            const Fk = new Xk;
            return kk.contains.forEach((kk => Fk.addRule(kk.Hj, {
              rule: kk,
              type: "Hj"
            }))), kk.terminatorEnd && Fk.addRule(kk.terminatorEnd, {
              type: "end"
            }), kk.illegal && Fk.addRule(kk.illegal, {
              type: "illegal"
            }), Fk
          }(lk), lk
        }(kk)
    }

    function yF(kk) {
      return !!kk && (kk.endsWithParent || yF(kk.starts))
    }
    class lF extends Error {
      constructor(kk, Fk) {
        super(kk), this.name = "HTMLInjectionError", this.html = Fk
      }
    }
    const aF = Xk,
      qF = Tk,
      LF = Symbol("nomatch"),
      tF = function(kk) {
        const Xk = Object.create(null),
          Tk = Object.create(null),
          ik = [];
        let yk = !0;
        const lk = "Could not find the language '{}', did you forget to load/include a language module?",
          ak = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Lk = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: qk
        };

        function Hk(kk) {
          return Lk.noHighlightRe.test(kk)
        }

        function Jk(kk, Fk, Ik) {
          let Xk = "",
            Tk = "";
          "object" === typeof Fk ? (Xk = kk, Ik = Fk.ignoreIllegals, Tk = Fk.language) : (FF("10.7.0", "highlight(lang, code, ...args) has been deprecated."), FF("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Tk = kk, Xk = Fk), void 0 === Ik && (Ik = !0);
          const ik = {
            code: Xk,
            language: Tk
          };
          vk("before:highlight", ik);
          const yk = ik.result ? ik.result : xk(ik.language, ik.code, Ik);
          return yk.code = ik.code, vk("after:highlight", yk), yk
        }

        function xk(kk, Fk, Tk, ik) {
          const ak = Object.create(null);

          function qk() {
            if (!vk.keywords) return void Ok.addText(nk);
            let kk = 0;
            vk.keywordPatternRe.lastIndex = 0;
            let Fk = vk.keywordPatternRe.exec(nk),
              Ik = "";
            for (; Fk;) {
              Ik += nk.substring(kk, Fk.index);
              const Tk = sk.case_insensitive ? Fk[0].toLowerCase() : Fk[0],
                ik = (Xk = Tk, vk.keywords[Xk]);
              if (ik) {
                const [kk, Xk] = ik;
                if (Ok.addText(Ik), Ik = "", ak[Tk] = (ak[Tk] || 0) + 1, ak[Tk] <= 7 && (Gk += Xk), kk.startsWith("_")) Ik += Fk[0];
                else {
                  const Ik = sk.classNameAliases[kk] || kk;
                  Zk(Fk[0], Ik)
                }
              } else Ik += Fk[0];
              kk = vk.keywordPatternRe.lastIndex, Fk = vk.keywordPatternRe.exec(nk)
            }
            var Xk;
            Ik += nk.substring(kk), Ok.addText(Ik)
          }

          function tk() {
            null != vk.subLanguage ? function() {
              if ("" === nk) return;
              let kk = null;
              if ("string" === typeof vk.subLanguage) {
                if (!Xk[vk.subLanguage]) return void Ok.addText(nk);
                kk = xk(vk.subLanguage, nk, !0, Ek[vk.subLanguage]), Ek[vk.subLanguage] = kk._top
              } else kk = Pk(nk, vk.subLanguage.length ? vk.subLanguage : null);
              vk.relevance > 0 && (Gk += kk.relevance), Ok.__addSublanguage(kk._emitter, kk.language)
            }() : qk(), nk = ""
          }

          function Zk(kk, Fk) {
            "" !== kk && (Ok.startScope(Fk), Ok.addText(kk), Ok.endScope())
          }

          function jk(kk, Fk) {
            let Ik = 1;
            const Xk = Fk.length - 1;
            for (; Ik <= Xk;) {
              if (!kk._emit[Ik]) {
                Ik++;
                continue
              }
              const Xk = sk.classNameAliases[kk[Ik]] || kk[Ik],
                Tk = Fk[Ik];
              Xk ? Zk(Tk, Xk) : (nk = Tk, qk(), nk = ""), Ik++
            }
          }

          function ek(kk, Fk) {
            return kk.scope && "string" === typeof kk.scope && Ok.openNode(sk.classNameAliases[kk.scope] || kk.scope), kk.beginScope && (kk.beginScope._wrap ? (Zk(nk, sk.classNameAliases[kk.beginScope._wrap] || kk.beginScope._wrap), nk = "") : kk.beginScope._multi && (jk(kk.beginScope, Fk), nk = "")), vk = Object.create(kk, {
              parent: {
                value: vk
              }
            }), vk
          }

          function wk(kk, Fk, Xk) {
            let Tk = function(kk, Fk) {
              const Ik = kk && kk.exec(Fk);
              return Ik && 0 === Ik.index
            }(kk.endRe, Xk);
            if (Tk) {
              if (kk["on:end"]) {
                const Xk = new Ik(kk);
                kk["on:end"](Fk, Xk), Xk.isMatchIgnored && (Tk = !1)
              }
              if (Tk) {
                for (; kk.endsParent && kk.parent;) kk = kk.parent;
                return kk
              }
            }
            if (kk.endsWithParent) return wk(kk.parent, Fk, Xk)
          }

          function Hk(kk) {
            return 0 === vk.matcher.regexIndex ? (nk += kk[0], 1) : (bk = !0, 0)
          }

          function Jk(kk) {
            const Ik = kk[0],
              Xk = Fk.substring(kk.index),
              Tk = wk(vk, kk, Xk);
            if (!Tk) return LF;
            const ik = vk;
            vk.endScope && vk.endScope._wrap ? (tk(), Zk(Ik, vk.endScope._wrap)) : vk.endScope && vk.endScope._multi ? (tk(), jk(vk.endScope, kk)) : ik.skip ? nk += Ik : (ik.returnEnd || ik.excludeEnd || (nk += Ik), tk(), ik.excludeEnd && (nk = Ik));
            do {
              vk.scope && Ok.closeNode(), vk.skip || vk.subLanguage || (Gk += vk.relevance), vk = vk.parent
            } while (vk !== Tk.parent);
            return Tk.starts && ek(Tk.starts, kk), ik.returnEnd ? 0 : Ik.length
          }
          let Kk = {};

          function Qk(Xk, ik) {
            const lk = ik && ik[0];
            if (nk += Xk, null == lk) return tk(), 0;
            if ("Hj" === Kk.type && "end" === ik.type && Kk.index === ik.index && "" === lk) {
              if (nk += Fk.slice(ik.index, ik.index + 1), !yk) {
                const Fk = new Error(`0 width match regex (${kk})`);
                throw Fk.languageName = kk, Fk.badRule = Kk.rule, Fk
              }
              return 1
            }
            if (Kk = ik, "Hj" === ik.type) return function(kk) {
              const Fk = kk[0],
                Xk = kk.rule,
                Tk = new Ik(Xk),
                ik = [Xk.__beforeBegin, Xk["on:begin"]];
              for (const Ik of ik)
                if (Ik && (Ik(kk, Tk), Tk.isMatchIgnored)) return Hk(Fk);
              return Xk.skip ? nk += Fk : (Xk.excludeBegin && (nk += Fk), tk(), Xk.returnBegin || Xk.excludeBegin || (nk = Fk)), ek(Xk, kk), Xk.returnBegin ? 0 : Fk.length
            }(ik);
            if ("illegal" === ik.type && !Tk) {
              const kk = new Error('Illegal lexeme "' + lk + '" for mode "' + (vk.scope || "<unnamed>") + '"');
              throw kk.mode = vk, kk
            }
            if ("end" === ik.type) {
              const kk = Jk(ik);
              if (kk !== LF) return kk
            }
            if ("illegal" === ik.type && "" === lk) return nk += "\n", 1;
            if (uk > 1e5 && uk > 3 * ik.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return nk += lk, lk.length
          }
          const sk = Vk(kk);
          if (!sk) throw Mk(lk.replace("{}", kk)), new Error('Unknown language: "' + kk + '"');
          const zk = iF(sk);
          let Sk = "",
            vk = ik || zk;
          const Ek = {},
            Ok = new Lk.__emitter(Lk);
          ! function() {
            const kk = [];
            for (let Fk = vk; Fk !== sk; Fk = Fk.parent) Fk.scope && kk.unshift(Fk.scope);
            kk.forEach((kk => Ok.openNode(kk)))
          }();
          let nk = "",
            Gk = 0,
            pk = 0,
            uk = 0,
            bk = !1;
          try {
            if (sk.__emitTokens) sk.__emitTokens(Fk, Ok);
            else {
              for (vk.matcher.considerAll();;) {
                uk++, bk ? bk = !1 : vk.matcher.considerAll(), vk.matcher.lastIndex = pk;
                const kk = vk.matcher.exec(Fk);
                if (!kk) break;
                const Ik = Qk(Fk.substring(pk, kk.index), kk);
                pk = kk.index + Ik
              }
              Qk(Fk.substring(pk))
            }
            return Ok.finalize(), Sk = Ok.toHTML(), {
              language: kk,
              value: Sk,
              relevance: Gk,
              illegal: !1,
              _emitter: Ok,
              _top: vk
            }
          } catch (Rk) {
            if (Rk.message && Rk.message.includes("Illegal")) return {
              language: kk,
              value: aF(Fk),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: Rk.message,
                index: pk,
                context: Fk.slice(pk - 100, pk + 100),
                mode: Rk.mode,
                resultSoFar: Sk
              },
              _emitter: Ok
            };
            if (yk) return {
              language: kk,
              value: aF(Fk),
              illegal: !1,
              relevance: 0,
              errorRaised: Rk,
              _emitter: Ok,
              _top: vk
            };
            throw Rk
          }
        }

        function Pk(kk, Fk) {
          Fk = Fk || Lk.languages || Object.keys(Xk);
          const Ik = function(kk) {
              const Fk = {
                value: aF(kk),
                illegal: !1,
                relevance: 0,
                _top: ak,
                _emitter: new Lk.__emitter(Lk)
              };
              return Fk._emitter.addText(kk), Fk
            }(kk),
            Tk = Fk.filter(Vk).filter(Sk).map((Fk => xk(Fk, kk, !1)));
          Tk.unshift(Ik);
          const ik = Tk.sort(((kk, Fk) => {
              if (kk.relevance !== Fk.relevance) return Fk.relevance - kk.relevance;
              if (kk.language && Fk.language) {
                if (Vk(kk.language).supersetOf === Fk.language) return 1;
                if (Vk(Fk.language).supersetOf === kk.language) return -1
              }
              return 0
            })),
            [yk, lk] = ik,
            qk = yk;
          return qk.secondBest = lk, qk
        }

        function Kk(kk) {
          let Fk = null;
          const Ik = function(kk) {
            let Fk = kk.className + " ";
            Fk += kk.parentNode ? kk.parentNode.className : "";
            const Ik = Lk.languageDetectRe.exec(Fk);
            if (Ik) {
              const Fk = Vk(Ik[1]);
              return Fk || (kF(lk.replace("{}", Ik[1])), kF("Falling back to no-highlight mode for this block.", kk)), Fk ? Ik[1] : "no-highlight"
            }
            return Fk.split(/\s+/).find((kk => Hk(kk) || Vk(kk)))
          }(kk);
          if (Hk(Ik)) return;
          if (vk("before:highlightElement", {
              el: kk,
              language: Ik
            }), kk.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", kk);
          if (kk.children.length > 0 && (Lk.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(kk)), Lk.throwUnescapedHTML)) {
            throw new lF("One of your code blocks includes unescaped HTML.", kk.innerHTML)
          }
          Fk = kk;
          const Xk = Fk.textContent,
            ik = Ik ? Jk(Xk, {
              language: Ik,
              ignoreIllegals: !0
            }) : Pk(Xk);
          kk.innerHTML = ik.value, kk.dataset.highlighted = "yes",
            function(kk, Fk, Ik) {
              const Xk = Fk && Tk[Fk] || Ik;
              kk.classList.add("hljs"), kk.classList.add(`language-${Xk}`)
            }(kk, Ik, ik.language), kk.result = {
              language: ik.language,
              re: ik.relevance,
              relevance: ik.relevance
            }, ik.secondBest && (kk.secondBest = {
              language: ik.secondBest.language,
              relevance: ik.secondBest.relevance
            }), vk("after:highlightElement", {
              el: kk,
              result: ik,
              text: Xk
            })
        }
        let Qk = !1;

        function sk() {
          if ("loading" === document.readyState) return Qk || window.addEventListener("DOMContentLoaded", (function() {
            sk()
          }), !1), void(Qk = !0);
          document.querySelectorAll(Lk.cssSelector).forEach(Kk)
        }

        function Vk(kk) {
          return kk = (kk || "").toLowerCase(), Xk[kk] || Xk[Tk[kk]]
        }

        function zk(kk, Fk) {
          let {
            languageName: Ik
          } = Fk;
          "string" === typeof kk && (kk = [kk]), kk.forEach((kk => {
            Tk[kk.toLowerCase()] = Ik
          }))
        }

        function Sk(kk) {
          const Fk = Vk(kk);
          return Fk && !Fk.disableAutodetect
        }

        function vk(kk, Fk) {
          const Ik = kk;
          ik.forEach((function(kk) {
            kk[Ik] && kk[Ik](Fk)
          }))
        }
        Object.assign(kk, {
          highlight: Jk,
          highlightAuto: Pk,
          highlightAll: sk,
          highlightElement: Kk,
          highlightBlock: function(kk) {
            return FF("10.7.0", "highlightBlock will be removed entirely in v12.0"), FF("10.7.0", "Please use highlightElement now."), Kk(kk)
          },
          configure: function(kk) {
            Lk = qF(Lk, kk)
          },
          initHighlighting: () => {
            sk(), FF("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            sk(), FF("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(Fk, Ik) {
            let Tk = null;
            try {
              Tk = Ik(kk)
            } catch (ik) {
              if (Mk("Language definition for '{}' could not be registered.".replace("{}", Fk)), !yk) throw ik;
              Mk(ik), Tk = ak
            }
            Tk.name || (Tk.name = Fk), Xk[Fk] = Tk, Tk.rawDefinition = Ik.bind(null, kk), Tk.aliases && zk(Tk.aliases, {
              languageName: Fk
            })
          },
          unregisterLanguage: function(kk) {
            delete Xk[kk];
            for (const Fk of Object.keys(Tk)) Tk[Fk] === kk && delete Tk[Fk]
          },
          listLanguages: function() {
            return Object.keys(Xk)
          },
          getLanguage: Vk,
          registerAliases: zk,
          autoDetection: Sk,
          inherit: qF,
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
            }(kk), ik.push(kk)
          },
          removePlugin: function(kk) {
            const Fk = ik.indexOf(kk); - 1 !== Fk && ik.splice(Fk, 1)
          }
        }), kk.debugMode = function() {
          yk = !1
        }, kk.safeMode = function() {
          yk = !0
        }, kk.versionString = "11.11.1", kk.regex = {
          concat: ek,
          lookahead: tk,
          either: wk,
          optional: jk,
          anyNumberOfTimes: Zk
        };
        for (const Ik in ck) "object" === typeof ck[Ik] && Fk(ck[Ik]);
        return Object.assign(kk, ck), kk
      },
      ZF = tF({});
    ZF.newInstance = () => tF({}), kk.exports = ZF, ZF.HighlightJS = ZF, ZF.default = ZF
  },
  4714: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    const Xk = Ik(4722)
  },
  4729: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => tk
    });
    const Xk = "[A-Za-z$_][0-9A-Za-z$_]*",
      Tk = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      ik = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      yk = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      lk = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      ak = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      qk = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Lk = [].concat(ak, yk, lk);

    function tk(kk) {
      const Fk = kk.regex,
        Ik = Xk,
        tk = "<>",
        Zk = "</>",
        jk = {
          Hj: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (kk, Fk) => {
            const Ik = kk[0].length + kk.index,
              Xk = kk.input[Ik];
            if ("<" === Xk || "," === Xk) return void Fk.ignoreMatch();
            let Tk;
            ">" === Xk && (((kk, Fk) => {
              let {
                after: Ik
              } = Fk;
              const Xk = "</" + kk[0].slice(1);
              return -1 !== kk.input.indexOf(Xk, Ik)
            })(kk, {
              after: Ik
            }) || Fk.ignoreMatch());
            const ik = kk.input.substring(Ik);
            ((Tk = ik.match(/^\s*=/)) || (Tk = ik.match(/^\s+extends\s+/)) && 0 === Tk.index) && Fk.ignoreMatch()
          }
        },
        ek = {
          $pattern: Xk,
          keyword: Tk,
          literal: ik,
          built_in: Lk,
          "variable.language": qk
        },
        wk = "[0-9](_?[0-9])*",
        Hk = `\\.(${wk})`,
        Jk = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        xk = {
          className: "number",
          variants: [{
            Hj: `(\\b(${Jk})((${Hk})|\\.)?|(${Hk}))[eE][+-]?(${wk})\\b`
          }, {
            Hj: `\\b(${Jk})\\b((${Hk})\\b|\\.)?|(${Hk})\\b`
          }, {
            Hj: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Hj: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Hj: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Hj: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Hj: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Pk = {
          className: "subst",
          Hj: "\\$\\{",
          end: "\\}",
          keywords: ek,
          contains: []
        },
        Kk = {
          Hj: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, Pk],
            subLanguage: "xml"
          }
        },
        Qk = {
          Hj: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, Pk],
            subLanguage: "css"
          }
        },
        sk = {
          Hj: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, Pk],
            subLanguage: "graphql"
          }
        },
        Vk = {
          className: "string",
          Hj: "`",
          end: "`",
          contains: [kk.BACKSLASH_ESCAPE, Pk]
        },
        zk = {
          className: "comment",
          variants: [kk.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Hj: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Hj: "@[A-Za-z]+"
              }, {
                className: "type",
                Hj: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Hj: Ik + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Hj: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), kk.C_BLOCK_COMMENT_MODE, kk.C_LINE_COMMENT_MODE]
        },
        Sk = [kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, Kk, Qk, sk, Vk, {
          match: /\$\d+/
        }, xk];
      Pk.contains = Sk.concat({
        Hj: /\{/,
        end: /\}/,
        keywords: ek,
        contains: ["self"].concat(Sk)
      });
      const vk = [].concat(zk, Pk.contains),
        Ek = vk.concat([{
          Hj: /(\s*)\(/,
          end: /\)/,
          keywords: ek,
          contains: ["self"].concat(vk)
        }]),
        Ok = {
          className: "params",
          Hj: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: ek,
          contains: Ek
        },
        nk = {
          variants: [{
            match: [/class/, /\s+/, Ik, /\s+/, /extends/, /\s+/, Fk.concat(Ik, "(", Fk.concat(/\./, Ik), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Ik],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Gk = {
          relevance: 0,
          match: Fk.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...yk, ...lk]
          }
        },
        pk = {
          variants: [{
            match: [/function/, /\s+/, Ik, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Ok],
          illegal: /%/
        };
      const uk = {
        match: Fk.concat(/\b/, (bk = [...ak, "super", "import"].map((kk => `${kk}\\s*\\(`)), Fk.concat("(?!", bk.join("|"), ")")), Ik, Fk.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var bk;
      const Rk = {
          Hj: Fk.concat(/\./, Fk.lookahead(Fk.concat(Ik, /(?![0-9A-Za-z$_(])/))),
          end: Ik,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Uk = {
          match: [/get|set/, /\s+/, Ik, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Hj: /\(\)/
          }, Ok]
        },
        Ck = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + kk.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Nk = {
          match: [/const|var|let/, /\s+/, Ik, /\s*/, /=\s*/, /(async\s*)?/, Fk.lookahead(Ck)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Ok]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: ek,
        exports: {
          PARAMS_CONTAINS: Ek,
          CLASS_REFERENCE: Gk
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
          Hj: /^\s*['"]use (strict|asm)['"]/
        }, kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, Kk, Qk, sk, Vk, zk, {
          match: /\$\d+/
        }, xk, Gk, {
          scope: "attr",
          match: Ik + Fk.lookahead(":"),
          relevance: 0
        }, Nk, {
          Hj: "(" + kk.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [zk, kk.REGEXP_MODE, {
            className: "function",
            Hj: Ck,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Hj: kk.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Hj: /\(\s*\)/,
                skip: !0
              }, {
                Hj: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: ek,
                contains: Ek
              }]
            }]
          }, {
            Hj: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Hj: tk,
              end: Zk
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Hj: jk.Hj,
              "on:begin": jk.isTrulyOpeningTag,
              end: jk.end
            }],
            subLanguage: "xml",
            contains: [{
              Hj: jk.Hj,
              end: jk.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, pk, {
          beginKeywords: "while if switch catch for"
        }, {
          Hj: "\\b(?!function)" + kk.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Ok, kk.inherit(kk.TITLE_MODE, {
            Hj: Ik,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Rk, {
          match: "\\$" + Ik,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Ok]
        }, uk, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, nk, Uk, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4731: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Zk
    });
    const Xk = "[A-Za-z$_][0-9A-Za-z$_]*",
      Tk = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      ik = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      yk = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      lk = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      ak = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      qk = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Lk = [].concat(ak, yk, lk);

    function tk(kk) {
      const Fk = kk.regex,
        Ik = Xk,
        tk = "<>",
        Zk = "</>",
        jk = {
          Hj: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (kk, Fk) => {
            const Ik = kk[0].length + kk.index,
              Xk = kk.input[Ik];
            if ("<" === Xk || "," === Xk) return void Fk.ignoreMatch();
            let Tk;
            ">" === Xk && (((kk, Fk) => {
              let {
                after: Ik
              } = Fk;
              const Xk = "</" + kk[0].slice(1);
              return -1 !== kk.input.indexOf(Xk, Ik)
            })(kk, {
              after: Ik
            }) || Fk.ignoreMatch());
            const ik = kk.input.substring(Ik);
            ((Tk = ik.match(/^\s*=/)) || (Tk = ik.match(/^\s+extends\s+/)) && 0 === Tk.index) && Fk.ignoreMatch()
          }
        },
        ek = {
          $pattern: Xk,
          keyword: Tk,
          literal: ik,
          built_in: Lk,
          "variable.language": qk
        },
        wk = "[0-9](_?[0-9])*",
        Hk = `\\.(${wk})`,
        Jk = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        xk = {
          className: "number",
          variants: [{
            Hj: `(\\b(${Jk})((${Hk})|\\.)?|(${Hk}))[eE][+-]?(${wk})\\b`
          }, {
            Hj: `\\b(${Jk})\\b((${Hk})\\b|\\.)?|(${Hk})\\b`
          }, {
            Hj: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Hj: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Hj: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Hj: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Hj: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Pk = {
          className: "subst",
          Hj: "\\$\\{",
          end: "\\}",
          keywords: ek,
          contains: []
        },
        Kk = {
          Hj: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, Pk],
            subLanguage: "xml"
          }
        },
        Qk = {
          Hj: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, Pk],
            subLanguage: "css"
          }
        },
        sk = {
          Hj: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, Pk],
            subLanguage: "graphql"
          }
        },
        Vk = {
          className: "string",
          Hj: "`",
          end: "`",
          contains: [kk.BACKSLASH_ESCAPE, Pk]
        },
        zk = {
          className: "comment",
          variants: [kk.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Hj: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Hj: "@[A-Za-z]+"
              }, {
                className: "type",
                Hj: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Hj: Ik + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Hj: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), kk.C_BLOCK_COMMENT_MODE, kk.C_LINE_COMMENT_MODE]
        },
        Sk = [kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, Kk, Qk, sk, Vk, {
          match: /\$\d+/
        }, xk];
      Pk.contains = Sk.concat({
        Hj: /\{/,
        end: /\}/,
        keywords: ek,
        contains: ["self"].concat(Sk)
      });
      const vk = [].concat(zk, Pk.contains),
        Ek = vk.concat([{
          Hj: /(\s*)\(/,
          end: /\)/,
          keywords: ek,
          contains: ["self"].concat(vk)
        }]),
        Ok = {
          className: "params",
          Hj: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: ek,
          contains: Ek
        },
        nk = {
          variants: [{
            match: [/class/, /\s+/, Ik, /\s+/, /extends/, /\s+/, Fk.concat(Ik, "(", Fk.concat(/\./, Ik), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Ik],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Gk = {
          relevance: 0,
          match: Fk.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...yk, ...lk]
          }
        },
        pk = {
          variants: [{
            match: [/function/, /\s+/, Ik, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Ok],
          illegal: /%/
        };
      const uk = {
        match: Fk.concat(/\b/, (bk = [...ak, "super", "import"].map((kk => `${kk}\\s*\\(`)), Fk.concat("(?!", bk.join("|"), ")")), Ik, Fk.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var bk;
      const Rk = {
          Hj: Fk.concat(/\./, Fk.lookahead(Fk.concat(Ik, /(?![0-9A-Za-z$_(])/))),
          end: Ik,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Uk = {
          match: [/get|set/, /\s+/, Ik, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Hj: /\(\)/
          }, Ok]
        },
        Ck = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + kk.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Nk = {
          match: [/const|var|let/, /\s+/, Ik, /\s*/, /=\s*/, /(async\s*)?/, Fk.lookahead(Ck)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Ok]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: ek,
        exports: {
          PARAMS_CONTAINS: Ek,
          CLASS_REFERENCE: Gk
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
          Hj: /^\s*['"]use (strict|asm)['"]/
        }, kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, Kk, Qk, sk, Vk, zk, {
          match: /\$\d+/
        }, xk, Gk, {
          scope: "attr",
          match: Ik + Fk.lookahead(":"),
          relevance: 0
        }, Nk, {
          Hj: "(" + kk.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [zk, kk.REGEXP_MODE, {
            className: "function",
            Hj: Ck,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Hj: kk.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Hj: /\(\s*\)/,
                skip: !0
              }, {
                Hj: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: ek,
                contains: Ek
              }]
            }]
          }, {
            Hj: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Hj: tk,
              end: Zk
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Hj: jk.Hj,
              "on:begin": jk.isTrulyOpeningTag,
              end: jk.end
            }],
            subLanguage: "xml",
            contains: [{
              Hj: jk.Hj,
              end: jk.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, pk, {
          beginKeywords: "while if switch catch for"
        }, {
          Hj: "\\b(?!function)" + kk.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Ok, kk.inherit(kk.TITLE_MODE, {
            Hj: Ik,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Rk, {
          match: "\\$" + Ik,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Ok]
        }, uk, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, nk, Uk, {
          match: /\$[(.]/
        }]
      }
    }

    function Zk(kk) {
      const Fk = kk.regex,
        Ik = tk(kk),
        yk = Xk,
        lk = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        ak = {
          Hj: [/namespace/, /\s+/, kk.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Zk = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: lk
          },
          contains: [Ik.exports.CLASS_REFERENCE]
        },
        jk = {
          $pattern: Xk,
          keyword: Tk.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: ik,
          built_in: Lk.concat(lk),
          "variable.language": qk
        },
        ek = {
          className: "meta",
          Hj: "@" + yk
        },
        wk = (kk, Fk, Ik) => {
          const Xk = kk.contains.findIndex((kk => kk.label === Fk));
          if (-1 === Xk) throw new Error("can not find mode to replace");
          kk.contains.splice(Xk, 1, Ik)
        };
      Object.assign(Ik.keywords, jk), Ik.exports.PARAMS_CONTAINS.push(ek);
      const Hk = Ik.contains.find((kk => "attr" === kk.scope)),
        Jk = Object.assign({}, Hk, {
          match: Fk.concat(yk, Fk.lookahead(/\s*\?:/))
        });
      Ik.exports.PARAMS_CONTAINS.push([Ik.exports.CLASS_REFERENCE, Hk, Jk]), Ik.contains = Ik.contains.concat([ek, ak, Zk, Jk]), wk(Ik, "shebang", kk.SHEBANG()), wk(Ik, "use_strict", {
        className: "meta",
        relevance: 10,
        Hj: /^\s*['"]use strict['"]/
      });
      return Ik.contains.find((kk => "func.def" === kk.label)).relevance = 0, Object.assign(Ik, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), Ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);