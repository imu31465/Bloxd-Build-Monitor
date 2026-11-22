export const id = 79;
export const ids = [79];
export const modules = {
  4668: kk => {
    function ek(kk) {
      return kk instanceof Map ? kk.clear = kk.delete = kk.set = function() {
        throw new Error("map is read-only")
      } : kk instanceof Set && (kk.add = kk.clear = kk.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(kk), Object.getOwnPropertyNames(kk).forEach((ik => {
        const Dk = kk[ik],
          fk = typeof Dk;
        "object" !== fk && "function" !== fk || Object.isFrozen(Dk) || ek(Dk)
      })), kk
    }
    class ik {
      constructor(kk) {
        void 0 === kk.data && (kk.data = {}), this.data = kk.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Dk(kk) {
      return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function fk(kk) {
      const ek = Object.create(null);
      for (const Sk in kk) ek[Sk] = kk[Sk];
      for (var ik = arguments.length, Dk = new Array(ik > 1 ? ik - 1 : 0), fk = 1; fk < ik; fk++) Dk[fk - 1] = arguments[fk];
      return Dk.forEach((function(kk) {
        for (const ik in kk) ek[ik] = kk[ik]
      })), ek
    }
    const Sk = kk => !!kk.scope;
    class bk {
      constructor(kk, ek) {
        this.buffer = "", this.classPrefix = ek.classPrefix, kk.walk(this)
      }
      addText(kk) {
        this.buffer += Dk(kk)
      }
      openNode(kk) {
        if (!Sk(kk)) return;
        const ek = ((kk, ek) => {
          let {
            prefix: ik
          } = ek;
          if (kk.startsWith("language:")) return kk.replace("language:", "language-");
          if (kk.includes(".")) {
            const ek = kk.split(".");
            return [`${ik}${ek.shift()}`, ...ek.map(((kk, ek) => `${kk}${"_".repeat(ek+1)}`))].join(" ")
          }
          return `${ik}${kk}`
        })(kk.scope, {
          prefix: this.classPrefix
        });
        this.span(ek)
      }
      closeNode(kk) {
        Sk(kk) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(kk) {
        this.buffer += `<span class="${kk}">`
      }
    }
    const rk = function() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ek = {
        children: []
      };
      return Object.assign(ek, kk), ek
    };
    class Pk {
      constructor() {
        this.Qy = rk(), this.stack = [this.Qy]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.Qy
      }
      add(kk) {
        this.top.children.push(kk)
      }
      openNode(kk) {
        const ek = rk({
          scope: kk
        });
        this.add(ek), this.stack.push(ek)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.Qy, null, 4)
      }
      walk(kk) {
        return this.constructor._walk(kk, this.Qy)
      }
      static _walk(kk, ek) {
        return "string" === typeof ek ? kk.addText(ek) : ek.children && (kk.openNode(ek), ek.children.forEach((ek => this._walk(kk, ek))), kk.closeNode(ek)), kk
      }
      static _collapse(kk) {
        "string" !== typeof kk && kk.children && (kk.children.every((kk => "string" === typeof kk)) ? kk.children = [kk.children.join("")] : kk.children.forEach((kk => {
          Pk._collapse(kk)
        })))
      }
    }
    class mk extends Pk {
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
      __addSublanguage(kk, ek) {
        const ik = kk.root;
        ek && (ik.scope = `language:${ek}`), this.add(ik)
      }
      toHTML() {
        return new bk(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Mk(kk) {
      return kk ? "string" === typeof kk ? kk : kk.source : null
    }

    function Kk(kk) {
      return Uk("(?=", kk, ")")
    }

    function xk(kk) {
      return Uk("(?:", kk, ")*")
    }

    function nk(kk) {
      return Uk("(?:", kk, ")?")
    }

    function Uk() {
      for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
      return ek.map((kk => Mk(kk))).join("")
    }

    function Hk() {
      for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
      const Dk = function(kk) {
        const ek = kk[kk.length - 1];
        return "object" === typeof ek && ek.constructor === Object ? (kk.splice(kk.length - 1, 1), ek) : {}
      }(ek);
      return "(" + (Dk.capture ? "" : "?:") + ek.map((kk => Mk(kk))).join("|") + ")"
    }

    function wk(kk) {
      return new RegExp(kk.toString() + "|").exec("").length - 1
    }
    const lk = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function pk(kk, ek) {
      let {
        joinWith: ik
      } = ek, Dk = 0;
      return kk.map((kk => {
        Dk += 1;
        const ek = Dk;
        let ik = Mk(kk),
          fk = "";
        for (; ik.length > 0;) {
          const kk = lk.exec(ik);
          if (!kk) {
            fk += ik;
            break
          }
          fk += ik.substring(0, kk.index), ik = ik.substring(kk.index + kk[0].length), "\\" === kk[0][0] && kk[1] ? fk += "\\" + String(Number(kk[1]) + ek) : (fk += kk[0], "(" === kk[0] && Dk++)
        }
        return fk
      })).map((kk => `(${kk})`)).join(ik)
    }
    const yk = "[a-zA-Z]\\w*",
      Yk = "[a-zA-Z_]\\w*",
      Lk = "\\b\\d+(\\.\\d+)?",
      Ck = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Ak = "\\b(0b[01]+)",
      jk = {
        tn: "\\\\[\\s\\S]",
        relevance: 0
      },
      sk = {
        scope: "string",
        tn: "'",
        end: "'",
        illegal: "\\n",
        contains: [jk]
      },
      dk = {
        scope: "string",
        tn: '"',
        end: '"',
        illegal: "\\n",
        contains: [jk]
      },
      Vk = function(kk, ek) {
        const ik = fk({
          scope: "comment",
          tn: kk,
          end: ek,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        ik.contains.push({
          scope: "doctag",
          tn: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Dk = Hk("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return ik.contains.push({
          tn: Uk(/[ ]+/, "(", Dk, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), ik
      },
      Fk = Vk("//", "$"),
      uk = Vk("/\\*", "\\*/"),
      qk = Vk("#", "$"),
      Ik = {
        scope: "number",
        tn: Lk,
        relevance: 0
      },
      zk = {
        scope: "number",
        tn: Ck,
        relevance: 0
      },
      Qk = {
        scope: "number",
        tn: Ak,
        relevance: 0
      },
      vk = {
        scope: "regexp",
        tn: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [jk, {
          tn: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [jk]
        }]
      },
      Ek = {
        scope: "title",
        tn: yk,
        relevance: 0
      },
      hk = {
        scope: "title",
        tn: Yk,
        relevance: 0
      },
      ak = {
        tn: "\\.\\s*" + Yk,
        relevance: 0
      };
    var Wk = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: sk,
      BACKSLASH_ESCAPE: jk,
      BINARY_NUMBER_MODE: Qk,
      BINARY_NUMBER_RE: Ak,
      COMMENT: Vk,
      C_BLOCK_COMMENT_MODE: uk,
      C_LINE_COMMENT_MODE: Fk,
      C_NUMBER_MODE: zk,
      C_NUMBER_RE: Ck,
      END_SAME_AS_BEGIN: function(kk) {
        return Object.assign(kk, {
          "on:begin": (kk, ek) => {
            ek.data._beginMatch = kk[1]
          },
          "on:end": (kk, ek) => {
            ek.data._beginMatch !== kk[1] && ek.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: qk,
      IDENT_RE: yk,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: ak,
      NUMBER_MODE: Ik,
      NUMBER_RE: Lk,
      PHRASAL_WORDS_MODE: {
        tn: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: dk,
      REGEXP_MODE: vk,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const ek = /^#![ ]*\//;
        return kk.binary && (kk.tn = Uk(ek, /.*\b/, kk.binary, /\b.*/)), fk({
          scope: "meta",
          tn: ek,
          end: /$/,
          relevance: 0,
          "on:begin": (kk, ek) => {
            0 !== kk.index && ek.ignoreMatch()
          }
        }, kk)
      },
      TITLE_MODE: Ek,
      UNDERSCORE_IDENT_RE: Yk,
      UNDERSCORE_TITLE_MODE: hk
    });

    function tk(kk, ek) {
      "." === kk.input[kk.index - 1] && ek.ignoreMatch()
    }

    function Xk(kk, ek) {
      void 0 !== kk.className && (kk.scope = kk.className, delete kk.className)
    }

    function Bk(kk, ek) {
      ek && kk.beginKeywords && (kk.tn = "\\b(" + kk.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", kk.__beforeBegin = tk, kk.keywords = kk.keywords || kk.beginKeywords, delete kk.beginKeywords, void 0 === kk.relevance && (kk.relevance = 0))
    }

    function ck(kk, ek) {
      Array.isArray(kk.illegal) && (kk.illegal = Hk(...kk.illegal))
    }

    function Tk(kk, ek) {
      if (kk.match) {
        if (kk.tn || kk.end) throw new Error("begin & end are not supported with match");
        kk.tn = kk.match, delete kk.match
      }
    }

    function Zk(kk, ek) {
      void 0 === kk.relevance && (kk.relevance = 1)
    }
    const Ok = (kk, ek) => {
        if (!kk.beforeMatch) return;
        if (kk.starts) throw new Error("beforeMatch cannot be used with starts");
        const ik = Object.assign({}, kk);
        Object.keys(kk).forEach((ek => {
          delete kk[ek]
        })), kk.keywords = ik.keywords, kk.tn = Uk(ik.beforeMatch, Kk(ik.tn)), kk.starts = {
          relevance: 0,
          contains: [Object.assign(ik, {
            endsParent: !0
          })]
        }, kk.relevance = 0, delete ik.beforeMatch
      },
      gk = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function Gk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Dk = Object.create(null);
      return "string" === typeof kk ? fk(ik, kk.split(" ")) : Array.isArray(kk) ? fk(ik, kk) : Object.keys(kk).forEach((function(ik) {
        Object.assign(Dk, Gk(kk[ik], ek, ik))
      })), Dk;

      function fk(kk, ik) {
        ek && (ik = ik.map((kk => kk.toLowerCase()))), ik.forEach((function(ek) {
          const ik = ek.split("|");
          Dk[ik[0]] = [kk, Nk(ik[0], ik[1])]
        }))
      }
    }

    function Nk(kk, ek) {
      return ek ? Number(ek) : function(kk) {
        return gk.includes(kk.toLowerCase())
      }(kk) ? 0 : 1
    }
    const Rk = {},
      Jk = kk => {
        console.error(kk)
      },
      ke = function(kk) {
        for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
        console.log(`WARN: ${kk}`, ...ik)
      },
      ee = (kk, ek) => {
        Rk[`${kk}/${ek}`] || (console.log(`Deprecated as of ${kk}. ${ek}`), Rk[`${kk}/${ek}`] = !0)
      },
      ie = new Error;

    function De(kk, ek, ik) {
      let {
        key: Dk
      } = ik, fk = 0;
      const Sk = kk[Dk],
        bk = {},
        rk = {};
      for (let Pk = 1; Pk <= ek.length; Pk++) rk[Pk + fk] = Sk[Pk], bk[Pk + fk] = !0, fk += wk(ek[Pk - 1]);
      kk[Dk] = rk, kk[Dk]._emit = bk, kk[Dk]._multi = !0
    }

    function fe(kk) {
      ! function(kk) {
        kk.scope && "object" === typeof kk.scope && null !== kk.scope && (kk.beginScope = kk.scope, delete kk.scope)
      }(kk), "string" === typeof kk.beginScope && (kk.beginScope = {
          _wrap: kk.beginScope
        }), "string" === typeof kk.endScope && (kk.endScope = {
          _wrap: kk.endScope
        }),
        function(kk) {
          if (Array.isArray(kk.tn)) {
            if (kk.skip || kk.excludeBegin || kk.returnBegin) throw Jk("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ie;
            if ("object" !== typeof kk.beginScope || null === kk.beginScope) throw Jk("beginScope must be object"), ie;
            De(kk, kk.tn, {
              key: "beginScope"
            }), kk.tn = pk(kk.tn, {
              joinWith: ""
            })
          }
        }(kk),
        function(kk) {
          if (Array.isArray(kk.end)) {
            if (kk.skip || kk.excludeEnd || kk.returnEnd) throw Jk("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ie;
            if ("object" !== typeof kk.endScope || null === kk.endScope) throw Jk("endScope must be object"), ie;
            De(kk, kk.end, {
              key: "endScope"
            }), kk.end = pk(kk.end, {
              joinWith: ""
            })
          }
        }(kk)
    }

    function Se(kk) {
      function ek(ek, ik) {
        return new RegExp(Mk(ek), "m" + (kk.case_insensitive ? "i" : "") + (kk.unicodeRegex ? "u" : "") + (ik ? "g" : ""))
      }
      class ik {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(kk, ek) {
          ek.position = this.position++, this.matchIndexes[this.matchAt] = ek, this.regexes.push([ek, kk]), this.matchAt += wk(kk) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const kk = this.regexes.map((kk => kk[1]));
          this.matcherRe = ek(pk(kk, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(kk) {
          this.matcherRe.lastIndex = this.lastIndex;
          const ek = this.matcherRe.exec(kk);
          if (!ek) return null;
          const ik = ek.findIndex(((kk, ek) => ek > 0 && void 0 !== kk)),
            Dk = this.matchIndexes[ik];
          return ek.splice(0, ik), Object.assign(ek, Dk)
        }
      }
      class Dk {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(kk) {
          if (this.multiRegexes[kk]) return this.multiRegexes[kk];
          const ek = new ik;
          return this.rules.slice(kk).forEach((kk => {
            let [ik, Dk] = kk;
            return ek.addRule(ik, Dk)
          })), ek.compile(), this.multiRegexes[kk] = ek, ek
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(kk, ek) {
          this.rules.push([kk, ek]), "tn" === ek.type && this.count++
        }
        exec(kk) {
          const ek = this.getMatcher(this.regexIndex);
          ek.lastIndex = this.lastIndex;
          let ik = ek.exec(kk);
          if (this.resumingScanAtSamePosition())
            if (ik && ik.index === this.lastIndex);
            else {
              const ek = this.getMatcher(0);
              ek.lastIndex = this.lastIndex + 1, ik = ek.exec(kk)
            } return ik && (this.regexIndex += ik.position + 1, this.regexIndex === this.count && this.considerAll()), ik
        }
      }
      if (kk.compilerExtensions || (kk.compilerExtensions = []), kk.contains && kk.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return kk.classNameAliases = fk(kk.classNameAliases || {}),
        function ik(Sk, bk) {
          const rk = Sk;
          if (Sk.isCompiled) return rk;
          [Xk, Tk, fe, Ok].forEach((kk => kk(Sk, bk))), kk.compilerExtensions.forEach((kk => kk(Sk, bk))), Sk.__beforeBegin = null, [Bk, ck, Zk].forEach((kk => kk(Sk, bk))), Sk.isCompiled = !0;
          let Pk = null;
          return "object" === typeof Sk.keywords && Sk.keywords.$pattern && (Sk.keywords = Object.assign({}, Sk.keywords), Pk = Sk.keywords.$pattern, delete Sk.keywords.$pattern), Pk = Pk || /\w+/, Sk.keywords && (Sk.keywords = Gk(Sk.keywords, kk.case_insensitive)), rk.keywordPatternRe = ek(Pk, !0), bk && (Sk.tn || (Sk.tn = /\B|\b/), rk.beginRe = ek(rk.tn), Sk.end || Sk.endsWithParent || (Sk.end = /\B|\b/), Sk.end && (rk.endRe = ek(rk.end)), rk.terminatorEnd = Mk(rk.end) || "", Sk.endsWithParent && bk.terminatorEnd && (rk.terminatorEnd += (Sk.end ? "|" : "") + bk.terminatorEnd)), Sk.illegal && (rk.illegalRe = ek(Sk.illegal)), Sk.contains || (Sk.contains = []), Sk.contains = [].concat(...Sk.contains.map((function(kk) {
            return function(kk) {
              kk.variants && !kk.cachedVariants && (kk.cachedVariants = kk.variants.map((function(ek) {
                return fk(kk, {
                  variants: null
                }, ek)
              })));
              if (kk.cachedVariants) return kk.cachedVariants;
              if (be(kk)) return fk(kk, {
                starts: kk.starts ? fk(kk.starts) : null
              });
              if (Object.isFrozen(kk)) return fk(kk);
              return kk
            }("self" === kk ? Sk : kk)
          }))), Sk.contains.forEach((function(kk) {
            ik(kk, rk)
          })), Sk.starts && ik(Sk.starts, bk), rk.matcher = function(kk) {
            const ek = new Dk;
            return kk.contains.forEach((kk => ek.addRule(kk.tn, {
              rule: kk,
              type: "tn"
            }))), kk.terminatorEnd && ek.addRule(kk.terminatorEnd, {
              type: "end"
            }), kk.illegal && ek.addRule(kk.illegal, {
              type: "illegal"
            }), ek
          }(rk), rk
        }(kk)
    }

    function be(kk) {
      return !!kk && (kk.endsWithParent || be(kk.starts))
    }
    class re extends Error {
      constructor(kk, ek) {
        super(kk), this.name = "HTMLInjectionError", this.html = ek
      }
    }
    const Pe = Dk,
      me = fk,
      Me = Symbol("nomatch"),
      Ke = function(kk) {
        const Dk = Object.create(null),
          fk = Object.create(null),
          Sk = [];
        let bk = !0;
        const rk = "Could not find the language '{}', did you forget to load/include a language module?",
          Pk = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Mk = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: mk
        };

        function wk(kk) {
          return Mk.noHighlightRe.test(kk)
        }

        function lk(kk, ek, ik) {
          let Dk = "",
            fk = "";
          "object" === typeof ek ? (Dk = kk, ik = ek.ignoreIllegals, fk = ek.language) : (ee("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ee("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), fk = kk, Dk = ek), void 0 === ik && (ik = !0);
          const Sk = {
            code: Dk,
            language: fk
          };
          dk("before:highlight", Sk);
          const bk = Sk.result ? Sk.result : pk(Sk.language, Sk.code, ik);
          return bk.code = Sk.code, dk("after:highlight", bk), bk
        }

        function pk(kk, ek, fk, Sk) {
          const Pk = Object.create(null);

          function mk() {
            if (!dk.keywords) return void Fk.addText(uk);
            let kk = 0;
            dk.keywordPatternRe.lastIndex = 0;
            let ek = dk.keywordPatternRe.exec(uk),
              ik = "";
            for (; ek;) {
              ik += uk.substring(kk, ek.index);
              const fk = Ck.case_insensitive ? ek[0].toLowerCase() : ek[0],
                Sk = (Dk = fk, dk.keywords[Dk]);
              if (Sk) {
                const [kk, Dk] = Sk;
                if (Fk.addText(ik), ik = "", Pk[fk] = (Pk[fk] || 0) + 1, Pk[fk] <= 7 && (qk += Dk), kk.startsWith("_")) ik += ek[0];
                else {
                  const ik = Ck.classNameAliases[kk] || kk;
                  xk(ek[0], ik)
                }
              } else ik += ek[0];
              kk = dk.keywordPatternRe.lastIndex, ek = dk.keywordPatternRe.exec(uk)
            }
            var Dk;
            ik += uk.substring(kk), Fk.addText(ik)
          }

          function Kk() {
            null != dk.subLanguage ? function() {
              if ("" === uk) return;
              let kk = null;
              if ("string" === typeof dk.subLanguage) {
                if (!Dk[dk.subLanguage]) return void Fk.addText(uk);
                kk = pk(dk.subLanguage, uk, !0, Vk[dk.subLanguage]), Vk[dk.subLanguage] = kk._top
              } else kk = yk(uk, dk.subLanguage.length ? dk.subLanguage : null);
              dk.relevance > 0 && (qk += kk.relevance), Fk.__addSublanguage(kk._emitter, kk.language)
            }() : mk(), uk = ""
          }

          function xk(kk, ek) {
            "" !== kk && (Fk.startScope(ek), Fk.addText(kk), Fk.endScope())
          }

          function nk(kk, ek) {
            let ik = 1;
            const Dk = ek.length - 1;
            for (; ik <= Dk;) {
              if (!kk._emit[ik]) {
                ik++;
                continue
              }
              const Dk = Ck.classNameAliases[kk[ik]] || kk[ik],
                fk = ek[ik];
              Dk ? xk(fk, Dk) : (uk = fk, mk(), uk = ""), ik++
            }
          }

          function Uk(kk, ek) {
            return kk.scope && "string" === typeof kk.scope && Fk.openNode(Ck.classNameAliases[kk.scope] || kk.scope), kk.beginScope && (kk.beginScope._wrap ? (xk(uk, Ck.classNameAliases[kk.beginScope._wrap] || kk.beginScope._wrap), uk = "") : kk.beginScope._multi && (nk(kk.beginScope, ek), uk = "")), dk = Object.create(kk, {
              parent: {
                value: dk
              }
            }), dk
          }

          function Hk(kk, ek, Dk) {
            let fk = function(kk, ek) {
              const ik = kk && kk.exec(ek);
              return ik && 0 === ik.index
            }(kk.endRe, Dk);
            if (fk) {
              if (kk["on:end"]) {
                const Dk = new ik(kk);
                kk["on:end"](ek, Dk), Dk.isMatchIgnored && (fk = !1)
              }
              if (fk) {
                for (; kk.endsParent && kk.parent;) kk = kk.parent;
                return kk
              }
            }
            if (kk.endsWithParent) return Hk(kk.parent, ek, Dk)
          }

          function wk(kk) {
            return 0 === dk.matcher.regexIndex ? (uk += kk[0], 1) : (Qk = !0, 0)
          }

          function lk(kk) {
            const ik = kk[0],
              Dk = ek.substring(kk.index),
              fk = Hk(dk, kk, Dk);
            if (!fk) return Me;
            const Sk = dk;
            dk.endScope && dk.endScope._wrap ? (Kk(), xk(ik, dk.endScope._wrap)) : dk.endScope && dk.endScope._multi ? (Kk(), nk(dk.endScope, kk)) : Sk.skip ? uk += ik : (Sk.returnEnd || Sk.excludeEnd || (uk += ik), Kk(), Sk.excludeEnd && (uk = ik));
            do {
              dk.scope && Fk.closeNode(), dk.skip || dk.subLanguage || (qk += dk.relevance), dk = dk.parent
            } while (dk !== fk.parent);
            return fk.starts && Uk(fk.starts, kk), Sk.returnEnd ? 0 : ik.length
          }
          let Yk = {};

          function Lk(Dk, Sk) {
            const rk = Sk && Sk[0];
            if (uk += Dk, null == rk) return Kk(), 0;
            if ("tn" === Yk.type && "end" === Sk.type && Yk.index === Sk.index && "" === rk) {
              if (uk += ek.slice(Sk.index, Sk.index + 1), !bk) {
                const ek = new Error(`0 width match regex (${kk})`);
                throw ek.languageName = kk, ek.badRule = Yk.rule, ek
              }
              return 1
            }
            if (Yk = Sk, "tn" === Sk.type) return function(kk) {
              const ek = kk[0],
                Dk = kk.rule,
                fk = new ik(Dk),
                Sk = [Dk.__beforeBegin, Dk["on:begin"]];
              for (const ik of Sk)
                if (ik && (ik(kk, fk), fk.isMatchIgnored)) return wk(ek);
              return Dk.skip ? uk += ek : (Dk.excludeBegin && (uk += ek), Kk(), Dk.returnBegin || Dk.excludeBegin || (uk = ek)), Uk(Dk, kk), Dk.returnBegin ? 0 : ek.length
            }(Sk);
            if ("illegal" === Sk.type && !fk) {
              const kk = new Error('Illegal lexeme "' + rk + '" for mode "' + (dk.scope || "<unnamed>") + '"');
              throw kk.mode = dk, kk
            }
            if ("end" === Sk.type) {
              const kk = lk(Sk);
              if (kk !== Me) return kk
            }
            if ("illegal" === Sk.type && "" === rk) return uk += "\n", 1;
            if (zk > 1e5 && zk > 3 * Sk.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return uk += rk, rk.length
          }
          const Ck = Ak(kk);
          if (!Ck) throw Jk(rk.replace("{}", kk)), new Error('Unknown language: "' + kk + '"');
          const jk = Se(Ck);
          let sk = "",
            dk = Sk || jk;
          const Vk = {},
            Fk = new Mk.__emitter(Mk);
          ! function() {
            const kk = [];
            for (let ek = dk; ek !== Ck; ek = ek.parent) ek.scope && kk.unshift(ek.scope);
            kk.forEach((kk => Fk.openNode(kk)))
          }();
          let uk = "",
            qk = 0,
            Ik = 0,
            zk = 0,
            Qk = !1;
          try {
            if (Ck.__emitTokens) Ck.__emitTokens(ek, Fk);
            else {
              for (dk.matcher.considerAll();;) {
                zk++, Qk ? Qk = !1 : dk.matcher.considerAll(), dk.matcher.lastIndex = Ik;
                const kk = dk.matcher.exec(ek);
                if (!kk) break;
                const ik = Lk(ek.substring(Ik, kk.index), kk);
                Ik = kk.index + ik
              }
              Lk(ek.substring(Ik))
            }
            return Fk.finalize(), sk = Fk.toHTML(), {
              language: kk,
              value: sk,
              relevance: qk,
              illegal: !1,
              _emitter: Fk,
              _top: dk
            }
          } catch (vk) {
            if (vk.message && vk.message.includes("Illegal")) return {
              language: kk,
              value: Pe(ek),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: vk.message,
                index: Ik,
                context: ek.slice(Ik - 100, Ik + 100),
                mode: vk.mode,
                resultSoFar: sk
              },
              _emitter: Fk
            };
            if (bk) return {
              language: kk,
              value: Pe(ek),
              illegal: !1,
              relevance: 0,
              errorRaised: vk,
              _emitter: Fk,
              _top: dk
            };
            throw vk
          }
        }

        function yk(kk, ek) {
          ek = ek || Mk.languages || Object.keys(Dk);
          const ik = function(kk) {
              const ek = {
                value: Pe(kk),
                illegal: !1,
                relevance: 0,
                _top: Pk,
                _emitter: new Mk.__emitter(Mk)
              };
              return ek._emitter.addText(kk), ek
            }(kk),
            fk = ek.filter(Ak).filter(sk).map((ek => pk(ek, kk, !1)));
          fk.unshift(ik);
          const Sk = fk.sort(((kk, ek) => {
              if (kk.relevance !== ek.relevance) return ek.relevance - kk.relevance;
              if (kk.language && ek.language) {
                if (Ak(kk.language).supersetOf === ek.language) return 1;
                if (Ak(ek.language).supersetOf === kk.language) return -1
              }
              return 0
            })),
            [bk, rk] = Sk,
            mk = bk;
          return mk.secondBest = rk, mk
        }

        function Yk(kk) {
          let ek = null;
          const ik = function(kk) {
            let ek = kk.className + " ";
            ek += kk.parentNode ? kk.parentNode.className : "";
            const ik = Mk.languageDetectRe.exec(ek);
            if (ik) {
              const ek = Ak(ik[1]);
              return ek || (ke(rk.replace("{}", ik[1])), ke("Falling back to no-highlight mode for this block.", kk)), ek ? ik[1] : "no-highlight"
            }
            return ek.split(/\s+/).find((kk => wk(kk) || Ak(kk)))
          }(kk);
          if (wk(ik)) return;
          if (dk("before:highlightElement", {
              el: kk,
              language: ik
            }), kk.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", kk);
          if (kk.children.length > 0 && (Mk.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(kk)), Mk.throwUnescapedHTML)) {
            throw new re("One of your code blocks includes unescaped HTML.", kk.innerHTML)
          }
          ek = kk;
          const Dk = ek.textContent,
            Sk = ik ? lk(Dk, {
              language: ik,
              ignoreIllegals: !0
            }) : yk(Dk);
          kk.innerHTML = Sk.value, kk.dataset.highlighted = "yes",
            function(kk, ek, ik) {
              const Dk = ek && fk[ek] || ik;
              kk.classList.add("hljs"), kk.classList.add(`language-${Dk}`)
            }(kk, ik, Sk.language), kk.result = {
              language: Sk.language,
              re: Sk.relevance,
              relevance: Sk.relevance
            }, Sk.secondBest && (kk.secondBest = {
              language: Sk.secondBest.language,
              relevance: Sk.secondBest.relevance
            }), dk("after:highlightElement", {
              el: kk,
              result: Sk,
              text: Dk
            })
        }
        let Lk = !1;

        function Ck() {
          if ("loading" === document.readyState) return Lk || window.addEventListener("DOMContentLoaded", (function() {
            Ck()
          }), !1), void(Lk = !0);
          document.querySelectorAll(Mk.cssSelector).forEach(Yk)
        }

        function Ak(kk) {
          return kk = (kk || "").toLowerCase(), Dk[kk] || Dk[fk[kk]]
        }

        function jk(kk, ek) {
          let {
            languageName: ik
          } = ek;
          "string" === typeof kk && (kk = [kk]), kk.forEach((kk => {
            fk[kk.toLowerCase()] = ik
          }))
        }

        function sk(kk) {
          const ek = Ak(kk);
          return ek && !ek.disableAutodetect
        }

        function dk(kk, ek) {
          const ik = kk;
          Sk.forEach((function(kk) {
            kk[ik] && kk[ik](ek)
          }))
        }
        Object.assign(kk, {
          highlight: lk,
          highlightAuto: yk,
          highlightAll: Ck,
          highlightElement: Yk,
          highlightBlock: function(kk) {
            return ee("10.7.0", "highlightBlock will be removed entirely in v12.0"), ee("10.7.0", "Please use highlightElement now."), Yk(kk)
          },
          configure: function(kk) {
            Mk = me(Mk, kk)
          },
          initHighlighting: () => {
            Ck(), ee("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            Ck(), ee("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(ek, ik) {
            let fk = null;
            try {
              fk = ik(kk)
            } catch (Sk) {
              if (Jk("Language definition for '{}' could not be registered.".replace("{}", ek)), !bk) throw Sk;
              Jk(Sk), fk = Pk
            }
            fk.name || (fk.name = ek), Dk[ek] = fk, fk.rawDefinition = ik.bind(null, kk), fk.aliases && jk(fk.aliases, {
              languageName: ek
            })
          },
          unregisterLanguage: function(kk) {
            delete Dk[kk];
            for (const ek of Object.keys(fk)) fk[ek] === kk && delete fk[ek]
          },
          listLanguages: function() {
            return Object.keys(Dk)
          },
          getLanguage: Ak,
          registerAliases: jk,
          autoDetection: sk,
          inherit: me,
          addPlugin: function(kk) {
            ! function(kk) {
              kk["before:highlightBlock"] && !kk["before:highlightElement"] && (kk["before:highlightElement"] = ek => {
                kk["before:highlightBlock"](Object.assign({
                  block: ek.el
                }, ek))
              }), kk["after:highlightBlock"] && !kk["after:highlightElement"] && (kk["after:highlightElement"] = ek => {
                kk["after:highlightBlock"](Object.assign({
                  block: ek.el
                }, ek))
              })
            }(kk), Sk.push(kk)
          },
          removePlugin: function(kk) {
            const ek = Sk.indexOf(kk); - 1 !== ek && Sk.splice(ek, 1)
          }
        }), kk.debugMode = function() {
          bk = !1
        }, kk.safeMode = function() {
          bk = !0
        }, kk.versionString = "11.11.1", kk.regex = {
          concat: Uk,
          lookahead: Kk,
          either: Hk,
          optional: nk,
          anyNumberOfTimes: xk
        };
        for (const ik in Wk) "object" === typeof Wk[ik] && ek(Wk[ik]);
        return Object.assign(kk, Wk), kk
      },
      xe = Ke({});
    xe.newInstance = () => Ke({}), kk.exports = xe, xe.HighlightJS = xe, xe.default = xe
  },
  4659: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    const Dk = ik(4668)
  },
  4674: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Kk
    });
    const Dk = "[A-Za-z$_][0-9A-Za-z$_]*",
      fk = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Sk = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      bk = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      rk = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Pk = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      mk = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Mk = [].concat(Pk, bk, rk);

    function Kk(kk) {
      const ek = kk.regex,
        ik = Dk,
        Kk = "<>",
        xk = "</>",
        nk = {
          tn: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (kk, ek) => {
            const ik = kk[0].length + kk.index,
              Dk = kk.input[ik];
            if ("<" === Dk || "," === Dk) return void ek.ignoreMatch();
            let fk;
            ">" === Dk && (((kk, ek) => {
              let {
                after: ik
              } = ek;
              const Dk = "</" + kk[0].slice(1);
              return -1 !== kk.input.indexOf(Dk, ik)
            })(kk, {
              after: ik
            }) || ek.ignoreMatch());
            const Sk = kk.input.substring(ik);
            ((fk = Sk.match(/^\s*=/)) || (fk = Sk.match(/^\s+extends\s+/)) && 0 === fk.index) && ek.ignoreMatch()
          }
        },
        Uk = {
          $pattern: Dk,
          keyword: fk,
          literal: Sk,
          built_in: Mk,
          "variable.language": mk
        },
        Hk = "[0-9](_?[0-9])*",
        wk = `\\.(${Hk})`,
        lk = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        pk = {
          className: "number",
          variants: [{
            tn: `(\\b(${lk})((${wk})|\\.)?|(${wk}))[eE][+-]?(${Hk})\\b`
          }, {
            tn: `\\b(${lk})\\b((${wk})\\b|\\.)?|(${wk})\\b`
          }, {
            tn: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            tn: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            tn: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            tn: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            tn: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        yk = {
          className: "subst",
          tn: "\\$\\{",
          end: "\\}",
          keywords: Uk,
          contains: []
        },
        Yk = {
          tn: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, yk],
            subLanguage: "xml"
          }
        },
        Lk = {
          tn: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, yk],
            subLanguage: "css"
          }
        },
        Ck = {
          tn: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, yk],
            subLanguage: "graphql"
          }
        },
        Ak = {
          className: "string",
          tn: "`",
          end: "`",
          contains: [kk.BACKSLASH_ESCAPE, yk]
        },
        jk = {
          className: "comment",
          variants: [kk.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              tn: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                tn: "@[A-Za-z]+"
              }, {
                className: "type",
                tn: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                tn: ik + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                tn: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), kk.C_BLOCK_COMMENT_MODE, kk.C_LINE_COMMENT_MODE]
        },
        sk = [kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, Yk, Lk, Ck, Ak, {
          match: /\$\d+/
        }, pk];
      yk.contains = sk.concat({
        tn: /\{/,
        end: /\}/,
        keywords: Uk,
        contains: ["self"].concat(sk)
      });
      const dk = [].concat(jk, yk.contains),
        Vk = dk.concat([{
          tn: /(\s*)\(/,
          end: /\)/,
          keywords: Uk,
          contains: ["self"].concat(dk)
        }]),
        Fk = {
          className: "params",
          tn: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Uk,
          contains: Vk
        },
        uk = {
          variants: [{
            match: [/class/, /\s+/, ik, /\s+/, /extends/, /\s+/, ek.concat(ik, "(", ek.concat(/\./, ik), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ik],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        qk = {
          relevance: 0,
          match: ek.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...bk, ...rk]
          }
        },
        Ik = {
          variants: [{
            match: [/function/, /\s+/, ik, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Fk],
          illegal: /%/
        };
      const zk = {
        match: ek.concat(/\b/, (Qk = [...Pk, "super", "import"].map((kk => `${kk}\\s*\\(`)), ek.concat("(?!", Qk.join("|"), ")")), ik, ek.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Qk;
      const vk = {
          tn: ek.concat(/\./, ek.lookahead(ek.concat(ik, /(?![0-9A-Za-z$_(])/))),
          end: ik,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Ek = {
          match: [/get|set/, /\s+/, ik, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            tn: /\(\)/
          }, Fk]
        },
        hk = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + kk.UNDERSCORE_IDENT_RE + ")\\s*=>",
        ak = {
          match: [/const|var|let/, /\s+/, ik, /\s*/, /=\s*/, /(async\s*)?/, ek.lookahead(hk)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Fk]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Uk,
        exports: {
          PARAMS_CONTAINS: Vk,
          CLASS_REFERENCE: qk
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
          tn: /^\s*['"]use (strict|asm)['"]/
        }, kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, Yk, Lk, Ck, Ak, jk, {
          match: /\$\d+/
        }, pk, qk, {
          scope: "attr",
          match: ik + ek.lookahead(":"),
          relevance: 0
        }, ak, {
          tn: "(" + kk.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [jk, kk.REGEXP_MODE, {
            className: "function",
            tn: hk,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                tn: kk.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                tn: /\(\s*\)/,
                skip: !0
              }, {
                tn: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Uk,
                contains: Vk
              }]
            }]
          }, {
            tn: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              tn: Kk,
              end: xk
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              tn: nk.tn,
              "on:begin": nk.isTrulyOpeningTag,
              end: nk.end
            }],
            subLanguage: "xml",
            contains: [{
              tn: nk.tn,
              end: nk.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Ik, {
          beginKeywords: "while if switch catch for"
        }, {
          tn: "\\b(?!function)" + kk.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Fk, kk.inherit(kk.TITLE_MODE, {
            tn: ik,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, vk, {
          match: "\\$" + ik,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Fk]
        }, zk, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, uk, Ek, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4678: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => xk
    });
    const Dk = "[A-Za-z$_][0-9A-Za-z$_]*",
      fk = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Sk = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      bk = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      rk = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Pk = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      mk = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Mk = [].concat(Pk, bk, rk);

    function Kk(kk) {
      const ek = kk.regex,
        ik = Dk,
        Kk = "<>",
        xk = "</>",
        nk = {
          tn: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (kk, ek) => {
            const ik = kk[0].length + kk.index,
              Dk = kk.input[ik];
            if ("<" === Dk || "," === Dk) return void ek.ignoreMatch();
            let fk;
            ">" === Dk && (((kk, ek) => {
              let {
                after: ik
              } = ek;
              const Dk = "</" + kk[0].slice(1);
              return -1 !== kk.input.indexOf(Dk, ik)
            })(kk, {
              after: ik
            }) || ek.ignoreMatch());
            const Sk = kk.input.substring(ik);
            ((fk = Sk.match(/^\s*=/)) || (fk = Sk.match(/^\s+extends\s+/)) && 0 === fk.index) && ek.ignoreMatch()
          }
        },
        Uk = {
          $pattern: Dk,
          keyword: fk,
          literal: Sk,
          built_in: Mk,
          "variable.language": mk
        },
        Hk = "[0-9](_?[0-9])*",
        wk = `\\.(${Hk})`,
        lk = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        pk = {
          className: "number",
          variants: [{
            tn: `(\\b(${lk})((${wk})|\\.)?|(${wk}))[eE][+-]?(${Hk})\\b`
          }, {
            tn: `\\b(${lk})\\b((${wk})\\b|\\.)?|(${wk})\\b`
          }, {
            tn: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            tn: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            tn: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            tn: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            tn: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        yk = {
          className: "subst",
          tn: "\\$\\{",
          end: "\\}",
          keywords: Uk,
          contains: []
        },
        Yk = {
          tn: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, yk],
            subLanguage: "xml"
          }
        },
        Lk = {
          tn: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, yk],
            subLanguage: "css"
          }
        },
        Ck = {
          tn: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [kk.BACKSLASH_ESCAPE, yk],
            subLanguage: "graphql"
          }
        },
        Ak = {
          className: "string",
          tn: "`",
          end: "`",
          contains: [kk.BACKSLASH_ESCAPE, yk]
        },
        jk = {
          className: "comment",
          variants: [kk.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              tn: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                tn: "@[A-Za-z]+"
              }, {
                className: "type",
                tn: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                tn: ik + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                tn: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), kk.C_BLOCK_COMMENT_MODE, kk.C_LINE_COMMENT_MODE]
        },
        sk = [kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, Yk, Lk, Ck, Ak, {
          match: /\$\d+/
        }, pk];
      yk.contains = sk.concat({
        tn: /\{/,
        end: /\}/,
        keywords: Uk,
        contains: ["self"].concat(sk)
      });
      const dk = [].concat(jk, yk.contains),
        Vk = dk.concat([{
          tn: /(\s*)\(/,
          end: /\)/,
          keywords: Uk,
          contains: ["self"].concat(dk)
        }]),
        Fk = {
          className: "params",
          tn: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: Uk,
          contains: Vk
        },
        uk = {
          variants: [{
            match: [/class/, /\s+/, ik, /\s+/, /extends/, /\s+/, ek.concat(ik, "(", ek.concat(/\./, ik), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, ik],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        qk = {
          relevance: 0,
          match: ek.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...bk, ...rk]
          }
        },
        Ik = {
          variants: [{
            match: [/function/, /\s+/, ik, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Fk],
          illegal: /%/
        };
      const zk = {
        match: ek.concat(/\b/, (Qk = [...Pk, "super", "import"].map((kk => `${kk}\\s*\\(`)), ek.concat("(?!", Qk.join("|"), ")")), ik, ek.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Qk;
      const vk = {
          tn: ek.concat(/\./, ek.lookahead(ek.concat(ik, /(?![0-9A-Za-z$_(])/))),
          end: ik,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Ek = {
          match: [/get|set/, /\s+/, ik, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            tn: /\(\)/
          }, Fk]
        },
        hk = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + kk.UNDERSCORE_IDENT_RE + ")\\s*=>",
        ak = {
          match: [/const|var|let/, /\s+/, ik, /\s*/, /=\s*/, /(async\s*)?/, ek.lookahead(hk)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Fk]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: Uk,
        exports: {
          PARAMS_CONTAINS: Vk,
          CLASS_REFERENCE: qk
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
          tn: /^\s*['"]use (strict|asm)['"]/
        }, kk.APOS_STRING_MODE, kk.QUOTE_STRING_MODE, Yk, Lk, Ck, Ak, jk, {
          match: /\$\d+/
        }, pk, qk, {
          scope: "attr",
          match: ik + ek.lookahead(":"),
          relevance: 0
        }, ak, {
          tn: "(" + kk.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [jk, kk.REGEXP_MODE, {
            className: "function",
            tn: hk,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                tn: kk.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                tn: /\(\s*\)/,
                skip: !0
              }, {
                tn: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: Uk,
                contains: Vk
              }]
            }]
          }, {
            tn: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              tn: Kk,
              end: xk
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              tn: nk.tn,
              "on:begin": nk.isTrulyOpeningTag,
              end: nk.end
            }],
            subLanguage: "xml",
            contains: [{
              tn: nk.tn,
              end: nk.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Ik, {
          beginKeywords: "while if switch catch for"
        }, {
          tn: "\\b(?!function)" + kk.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Fk, kk.inherit(kk.TITLE_MODE, {
            tn: ik,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, vk, {
          match: "\\$" + ik,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Fk]
        }, zk, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, uk, Ek, {
          match: /\$[(.]/
        }]
      }
    }

    function xk(kk) {
      const ek = kk.regex,
        ik = Kk(kk),
        bk = Dk,
        rk = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Pk = {
          tn: [/namespace/, /\s+/, kk.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        xk = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: rk
          },
          contains: [ik.exports.CLASS_REFERENCE]
        },
        nk = {
          $pattern: Dk,
          keyword: fk.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Sk,
          built_in: Mk.concat(rk),
          "variable.language": mk
        },
        Uk = {
          className: "meta",
          tn: "@" + bk
        },
        Hk = (kk, ek, ik) => {
          const Dk = kk.contains.findIndex((kk => kk.label === ek));
          if (-1 === Dk) throw new Error("can not find mode to replace");
          kk.contains.splice(Dk, 1, ik)
        };
      Object.assign(ik.keywords, nk), ik.exports.PARAMS_CONTAINS.push(Uk);
      const wk = ik.contains.find((kk => "attr" === kk.scope)),
        lk = Object.assign({}, wk, {
          match: ek.concat(bk, ek.lookahead(/\s*\?:/))
        });
      ik.exports.PARAMS_CONTAINS.push([ik.exports.CLASS_REFERENCE, wk, lk]), ik.contains = ik.contains.concat([Uk, Pk, xk, lk]), Hk(ik, "shebang", kk.SHEBANG()), Hk(ik, "use_strict", {
        className: "meta",
        relevance: 10,
        tn: /^\s*['"]use strict['"]/
      });
      return ik.contains.find((kk => "func.def" === kk.label)).relevance = 0, Object.assign(ik, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), ik
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);