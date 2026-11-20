export const id = 77;
export const ids = [77];
export const modules = {
  4546: qq => {
    function Eq(qq) {
      return qq instanceof Map ? qq.clear = qq.delete = qq.set = function() {
        throw new Error("map is read-only")
      } : qq instanceof Set && (qq.add = qq.clear = qq.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(qq), Object.getOwnPropertyNames(qq).forEach((gq => {
        const Yq = qq[gq],
          lq = typeof Yq;
        "object" !== lq && "function" !== lq || Object.isFrozen(Yq) || Eq(Yq)
      })), qq
    }
    class gq {
      constructor(qq) {
        void 0 === qq.data && (qq.data = {}), this.data = qq.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Yq(qq) {
      return qq.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function lq(qq) {
      const Eq = Object.create(null);
      for (const Oq in qq) Eq[Oq] = qq[Oq];
      for (var gq = arguments.length, Yq = new Array(gq > 1 ? gq - 1 : 0), lq = 1; lq < gq; lq++) Yq[lq - 1] = arguments[lq];
      return Yq.forEach((function(qq) {
        for (const gq in qq) Eq[gq] = qq[gq]
      })), Eq
    }
    const Oq = qq => !!qq.scope;
    class mq {
      constructor(qq, Eq) {
        this.buffer = "", this.classPrefix = Eq.classPrefix, qq.walk(this)
      }
      addText(qq) {
        this.buffer += Yq(qq)
      }
      openNode(qq) {
        if (!Oq(qq)) return;
        const Eq = ((qq, Eq) => {
          let {
            prefix: gq
          } = Eq;
          if (qq.startsWith("language:")) return qq.replace("language:", "language-");
          if (qq.includes(".")) {
            const Eq = qq.split(".");
            return [`${gq}${Eq.shift()}`, ...Eq.map(((qq, Eq) => `${qq}${"_".repeat(Eq+1)}`))].join(" ")
          }
          return `${gq}${qq}`
        })(qq.scope, {
          prefix: this.classPrefix
        });
        this.span(Eq)
      }
      closeNode(qq) {
        Oq(qq) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(qq) {
        this.buffer += `<span class="${qq}">`
      }
    }
    const xq = function() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Eq = {
        children: []
      };
      return Object.assign(Eq, qq), Eq
    };
    class Aq {
      constructor() {
        this.jy = xq(), this.stack = [this.jy]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.jy
      }
      add(qq) {
        this.top.children.push(qq)
      }
      openNode(qq) {
        const Eq = xq({
          scope: qq
        });
        this.add(Eq), this.stack.push(Eq)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.jy, null, 4)
      }
      walk(qq) {
        return this.constructor._walk(qq, this.jy)
      }
      static _walk(qq, Eq) {
        return "string" === typeof Eq ? qq.addText(Eq) : Eq.children && (qq.openNode(Eq), Eq.children.forEach((Eq => this._walk(qq, Eq))), qq.closeNode(Eq)), qq
      }
      static _collapse(qq) {
        "string" !== typeof qq && qq.children && (qq.children.every((qq => "string" === typeof qq)) ? qq.children = [qq.children.join("")] : qq.children.forEach((qq => {
          Aq._collapse(qq)
        })))
      }
    }
    class cq extends Aq {
      constructor(qq) {
        super(), this.options = qq
      }
      addText(qq) {
        "" !== qq && this.add(qq)
      }
      startScope(qq) {
        this.openNode(qq)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(qq, Eq) {
        const gq = qq.root;
        Eq && (gq.scope = `language:${Eq}`), this.add(gq)
      }
      toHTML() {
        return new mq(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function uq(qq) {
      return qq ? "string" === typeof qq ? qq : qq.source : null
    }

    function Bq(qq) {
      return aq("(?=", qq, ")")
    }

    function Wq(qq) {
      return aq("(?:", qq, ")*")
    }

    function Nq(qq) {
      return aq("(?:", qq, ")?")
    }

    function aq() {
      for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
      return Eq.map((qq => uq(qq))).join("")
    }

    function Vq() {
      for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
      const Yq = function(qq) {
        const Eq = qq[qq.length - 1];
        return "object" === typeof Eq && Eq.constructor === Object ? (qq.splice(qq.length - 1, 1), Eq) : {}
      }(Eq);
      return "(" + (Yq.capture ? "" : "?:") + Eq.map((qq => uq(qq))).join("|") + ")"
    }

    function dq(qq) {
      return new RegExp(qq.toString() + "|").exec("").length - 1
    }
    const jq = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Hq(qq, Eq) {
      let {
        joinWith: gq
      } = Eq, Yq = 0;
      return qq.map((qq => {
        Yq += 1;
        const Eq = Yq;
        let gq = uq(qq),
          lq = "";
        for (; gq.length > 0;) {
          const qq = jq.exec(gq);
          if (!qq) {
            lq += gq;
            break
          }
          lq += gq.substring(0, qq.index), gq = gq.substring(qq.index + qq[0].length), "\\" === qq[0][0] && qq[1] ? lq += "\\" + String(Number(qq[1]) + Eq) : (lq += qq[0], "(" === qq[0] && Yq++)
        }
        return lq
      })).map((qq => `(${qq})`)).join(gq)
    }
    const oq = "[a-zA-Z]\\w*",
      Pq = "[a-zA-Z_]\\w*",
      Qq = "\\b\\d+(\\.\\d+)?",
      yq = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      tq = "\\b(0b[01]+)",
      rq = {
        gN: "\\\\[\\s\\S]",
        relevance: 0
      },
      vq = {
        scope: "string",
        gN: "'",
        end: "'",
        illegal: "\\n",
        contains: [rq]
      },
      hq = {
        scope: "string",
        gN: '"',
        end: '"',
        illegal: "\\n",
        contains: [rq]
      },
      nq = function(qq, Eq) {
        const gq = lq({
          scope: "comment",
          gN: qq,
          end: Eq,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        gq.contains.push({
          scope: "doctag",
          gN: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Yq = Vq("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return gq.contains.push({
          gN: aq(/[ ]+/, "(", Yq, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), gq
      },
      bq = nq("//", "$"),
      iq = nq("/\\*", "\\*/"),
      Zq = nq("#", "$"),
      fq = {
        scope: "number",
        gN: Qq,
        relevance: 0
      },
      Mq = {
        scope: "number",
        gN: yq,
        relevance: 0
      },
      Tq = {
        scope: "number",
        gN: tq,
        relevance: 0
      },
      zq = {
        scope: "regexp",
        gN: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [rq, {
          gN: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [rq]
        }]
      },
      Sq = {
        scope: "title",
        gN: oq,
        relevance: 0
      },
      pq = {
        scope: "title",
        gN: Pq,
        relevance: 0
      },
      Gq = {
        gN: "\\.\\s*" + Pq,
        relevance: 0
      };
    var Lq = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: vq,
      BACKSLASH_ESCAPE: rq,
      BINARY_NUMBER_MODE: Tq,
      BINARY_NUMBER_RE: tq,
      COMMENT: nq,
      C_BLOCK_COMMENT_MODE: iq,
      C_LINE_COMMENT_MODE: bq,
      C_NUMBER_MODE: Mq,
      C_NUMBER_RE: yq,
      END_SAME_AS_BEGIN: function(qq) {
        return Object.assign(qq, {
          "on:begin": (qq, Eq) => {
            Eq.data._beginMatch = qq[1]
          },
          "on:end": (qq, Eq) => {
            Eq.data._beginMatch !== qq[1] && Eq.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Zq,
      IDENT_RE: oq,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Gq,
      NUMBER_MODE: fq,
      NUMBER_RE: Qq,
      PHRASAL_WORDS_MODE: {
        gN: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: hq,
      REGEXP_MODE: zq,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const Eq = /^#![ ]*\//;
        return qq.binary && (qq.gN = aq(Eq, /.*\b/, qq.binary, /\b.*/)), lq({
          scope: "meta",
          gN: Eq,
          end: /$/,
          relevance: 0,
          "on:begin": (qq, Eq) => {
            0 !== qq.index && Eq.ignoreMatch()
          }
        }, qq)
      },
      TITLE_MODE: Sq,
      UNDERSCORE_IDENT_RE: Pq,
      UNDERSCORE_TITLE_MODE: pq
    });

    function Jq(qq, Eq) {
      "." === qq.input[qq.index - 1] && Eq.ignoreMatch()
    }

    function kq(qq, Eq) {
      void 0 !== qq.className && (qq.scope = qq.className, delete qq.className)
    }

    function Rq(qq, Eq) {
      Eq && qq.beginKeywords && (qq.gN = "\\b(" + qq.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", qq.__beforeBegin = Jq, qq.keywords = qq.keywords || qq.beginKeywords, delete qq.beginKeywords, void 0 === qq.relevance && (qq.relevance = 0))
    }

    function Uq(qq, Eq) {
      Array.isArray(qq.illegal) && (qq.illegal = Vq(...qq.illegal))
    }

    function Fq(qq, Eq) {
      if (qq.match) {
        if (qq.gN || qq.end) throw new Error("begin & end are not supported with match");
        qq.gN = qq.match, delete qq.match
      }
    }

    function sq(qq, Eq) {
      void 0 === qq.relevance && (qq.relevance = 1)
    }
    const Xq = (qq, Eq) => {
        if (!qq.beforeMatch) return;
        if (qq.starts) throw new Error("beforeMatch cannot be used with starts");
        const gq = Object.assign({}, qq);
        Object.keys(qq).forEach((Eq => {
          delete qq[Eq]
        })), qq.keywords = gq.keywords, qq.gN = aq(gq.beforeMatch, Bq(gq.gN)), qq.starts = {
          relevance: 0,
          contains: [Object.assign(gq, {
            endsParent: !0
          })]
        }, qq.relevance = 0, delete gq.beforeMatch
      },
      wq = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function Kq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Yq = Object.create(null);
      return "string" === typeof qq ? lq(gq, qq.split(" ")) : Array.isArray(qq) ? lq(gq, qq) : Object.keys(qq).forEach((function(gq) {
        Object.assign(Yq, Kq(qq[gq], Eq, gq))
      })), Yq;

      function lq(qq, gq) {
        Eq && (gq = gq.map((qq => qq.toLowerCase()))), gq.forEach((function(Eq) {
          const gq = Eq.split("|");
          Yq[gq[0]] = [qq, Cq(gq[0], gq[1])]
        }))
      }
    }

    function Cq(qq, Eq) {
      return Eq ? Number(Eq) : function(qq) {
        return wq.includes(qq.toLowerCase())
      }(qq) ? 0 : 1
    }
    const Iq = {},
      eq = qq => {
        console.error(qq)
      },
      Dq = function(qq) {
        for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
        console.log(`WARN: ${qq}`, ...gq)
      },
      qE = (qq, Eq) => {
        Iq[`${qq}/${Eq}`] || (console.log(`Deprecated as of ${qq}. ${Eq}`), Iq[`${qq}/${Eq}`] = !0)
      },
      EE = new Error;

    function gE(qq, Eq, gq) {
      let {
        key: Yq
      } = gq, lq = 0;
      const Oq = qq[Yq],
        mq = {},
        xq = {};
      for (let Aq = 1; Aq <= Eq.length; Aq++) xq[Aq + lq] = Oq[Aq], mq[Aq + lq] = !0, lq += dq(Eq[Aq - 1]);
      qq[Yq] = xq, qq[Yq]._emit = mq, qq[Yq]._multi = !0
    }

    function YE(qq) {
      ! function(qq) {
        qq.scope && "object" === typeof qq.scope && null !== qq.scope && (qq.beginScope = qq.scope, delete qq.scope)
      }(qq), "string" === typeof qq.beginScope && (qq.beginScope = {
          _wrap: qq.beginScope
        }), "string" === typeof qq.endScope && (qq.endScope = {
          _wrap: qq.endScope
        }),
        function(qq) {
          if (Array.isArray(qq.gN)) {
            if (qq.skip || qq.excludeBegin || qq.returnBegin) throw eq("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), EE;
            if ("object" !== typeof qq.beginScope || null === qq.beginScope) throw eq("beginScope must be object"), EE;
            gE(qq, qq.gN, {
              key: "beginScope"
            }), qq.gN = Hq(qq.gN, {
              joinWith: ""
            })
          }
        }(qq),
        function(qq) {
          if (Array.isArray(qq.end)) {
            if (qq.skip || qq.excludeEnd || qq.returnEnd) throw eq("skip, excludeEnd, returnEnd not compatible with endScope: {}"), EE;
            if ("object" !== typeof qq.endScope || null === qq.endScope) throw eq("endScope must be object"), EE;
            gE(qq, qq.end, {
              key: "endScope"
            }), qq.end = Hq(qq.end, {
              joinWith: ""
            })
          }
        }(qq)
    }

    function lE(qq) {
      function Eq(Eq, gq) {
        return new RegExp(uq(Eq), "m" + (qq.case_insensitive ? "i" : "") + (qq.unicodeRegex ? "u" : "") + (gq ? "g" : ""))
      }
      class gq {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(qq, Eq) {
          Eq.position = this.position++, this.matchIndexes[this.matchAt] = Eq, this.regexes.push([Eq, qq]), this.matchAt += dq(qq) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const qq = this.regexes.map((qq => qq[1]));
          this.matcherRe = Eq(Hq(qq, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(qq) {
          this.matcherRe.lastIndex = this.lastIndex;
          const Eq = this.matcherRe.exec(qq);
          if (!Eq) return null;
          const gq = Eq.findIndex(((qq, Eq) => Eq > 0 && void 0 !== qq)),
            Yq = this.matchIndexes[gq];
          return Eq.splice(0, gq), Object.assign(Eq, Yq)
        }
      }
      class Yq {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(qq) {
          if (this.multiRegexes[qq]) return this.multiRegexes[qq];
          const Eq = new gq;
          return this.rules.slice(qq).forEach((qq => {
            let [gq, Yq] = qq;
            return Eq.addRule(gq, Yq)
          })), Eq.compile(), this.multiRegexes[qq] = Eq, Eq
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(qq, Eq) {
          this.rules.push([qq, Eq]), "gN" === Eq.type && this.count++
        }
        exec(qq) {
          const Eq = this.getMatcher(this.regexIndex);
          Eq.lastIndex = this.lastIndex;
          let gq = Eq.exec(qq);
          if (this.resumingScanAtSamePosition())
            if (gq && gq.index === this.lastIndex);
            else {
              const Eq = this.getMatcher(0);
              Eq.lastIndex = this.lastIndex + 1, gq = Eq.exec(qq)
            } return gq && (this.regexIndex += gq.position + 1, this.regexIndex === this.count && this.considerAll()), gq
        }
      }
      if (qq.compilerExtensions || (qq.compilerExtensions = []), qq.contains && qq.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return qq.classNameAliases = lq(qq.classNameAliases || {}),
        function gq(Oq, mq) {
          const xq = Oq;
          if (Oq.isCompiled) return xq;
          [kq, Fq, YE, Xq].forEach((qq => qq(Oq, mq))), qq.compilerExtensions.forEach((qq => qq(Oq, mq))), Oq.__beforeBegin = null, [Rq, Uq, sq].forEach((qq => qq(Oq, mq))), Oq.isCompiled = !0;
          let Aq = null;
          return "object" === typeof Oq.keywords && Oq.keywords.$pattern && (Oq.keywords = Object.assign({}, Oq.keywords), Aq = Oq.keywords.$pattern, delete Oq.keywords.$pattern), Aq = Aq || /\w+/, Oq.keywords && (Oq.keywords = Kq(Oq.keywords, qq.case_insensitive)), xq.keywordPatternRe = Eq(Aq, !0), mq && (Oq.gN || (Oq.gN = /\B|\b/), xq.beginRe = Eq(xq.gN), Oq.end || Oq.endsWithParent || (Oq.end = /\B|\b/), Oq.end && (xq.endRe = Eq(xq.end)), xq.terminatorEnd = uq(xq.end) || "", Oq.endsWithParent && mq.terminatorEnd && (xq.terminatorEnd += (Oq.end ? "|" : "") + mq.terminatorEnd)), Oq.illegal && (xq.illegalRe = Eq(Oq.illegal)), Oq.contains || (Oq.contains = []), Oq.contains = [].concat(...Oq.contains.map((function(qq) {
            return function(qq) {
              qq.variants && !qq.cachedVariants && (qq.cachedVariants = qq.variants.map((function(Eq) {
                return lq(qq, {
                  variants: null
                }, Eq)
              })));
              if (qq.cachedVariants) return qq.cachedVariants;
              if (OE(qq)) return lq(qq, {
                starts: qq.starts ? lq(qq.starts) : null
              });
              if (Object.isFrozen(qq)) return lq(qq);
              return qq
            }("self" === qq ? Oq : qq)
          }))), Oq.contains.forEach((function(qq) {
            gq(qq, xq)
          })), Oq.starts && gq(Oq.starts, mq), xq.matcher = function(qq) {
            const Eq = new Yq;
            return qq.contains.forEach((qq => Eq.addRule(qq.gN, {
              rule: qq,
              type: "gN"
            }))), qq.terminatorEnd && Eq.addRule(qq.terminatorEnd, {
              type: "end"
            }), qq.illegal && Eq.addRule(qq.illegal, {
              type: "illegal"
            }), Eq
          }(xq), xq
        }(qq)
    }

    function OE(qq) {
      return !!qq && (qq.endsWithParent || OE(qq.starts))
    }
    class mE extends Error {
      constructor(qq, Eq) {
        super(qq), this.name = "HTMLInjectionError", this.html = Eq
      }
    }
    const xE = Yq,
      AE = lq,
      cE = Symbol("nomatch"),
      uE = function(qq) {
        const Yq = Object.create(null),
          lq = Object.create(null),
          Oq = [];
        let mq = !0;
        const xq = "Could not find the language '{}', did you forget to load/include a language module?",
          Aq = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let uq = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: cq
        };

        function dq(qq) {
          return uq.noHighlightRe.test(qq)
        }

        function jq(qq, Eq, gq) {
          let Yq = "",
            lq = "";
          "object" === typeof Eq ? (Yq = qq, gq = Eq.ignoreIllegals, lq = Eq.language) : (qE("10.7.0", "highlight(lang, code, ...args) has been deprecated."), qE("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), lq = qq, Yq = Eq), void 0 === gq && (gq = !0);
          const Oq = {
            code: Yq,
            language: lq
          };
          hq("before:highlight", Oq);
          const mq = Oq.result ? Oq.result : Hq(Oq.language, Oq.code, gq);
          return mq.code = Oq.code, hq("after:highlight", mq), mq
        }

        function Hq(qq, Eq, lq, Oq) {
          const Aq = Object.create(null);

          function cq() {
            if (!hq.keywords) return void bq.addText(iq);
            let qq = 0;
            hq.keywordPatternRe.lastIndex = 0;
            let Eq = hq.keywordPatternRe.exec(iq),
              gq = "";
            for (; Eq;) {
              gq += iq.substring(qq, Eq.index);
              const lq = yq.case_insensitive ? Eq[0].toLowerCase() : Eq[0],
                Oq = (Yq = lq, hq.keywords[Yq]);
              if (Oq) {
                const [qq, Yq] = Oq;
                if (bq.addText(gq), gq = "", Aq[lq] = (Aq[lq] || 0) + 1, Aq[lq] <= 7 && (Zq += Yq), qq.startsWith("_")) gq += Eq[0];
                else {
                  const gq = yq.classNameAliases[qq] || qq;
                  Wq(Eq[0], gq)
                }
              } else gq += Eq[0];
              qq = hq.keywordPatternRe.lastIndex, Eq = hq.keywordPatternRe.exec(iq)
            }
            var Yq;
            gq += iq.substring(qq), bq.addText(gq)
          }

          function Bq() {
            null != hq.subLanguage ? function() {
              if ("" === iq) return;
              let qq = null;
              if ("string" === typeof hq.subLanguage) {
                if (!Yq[hq.subLanguage]) return void bq.addText(iq);
                qq = Hq(hq.subLanguage, iq, !0, nq[hq.subLanguage]), nq[hq.subLanguage] = qq._top
              } else qq = oq(iq, hq.subLanguage.length ? hq.subLanguage : null);
              hq.relevance > 0 && (Zq += qq.relevance), bq.__addSublanguage(qq._emitter, qq.language)
            }() : cq(), iq = ""
          }

          function Wq(qq, Eq) {
            "" !== qq && (bq.startScope(Eq), bq.addText(qq), bq.endScope())
          }

          function Nq(qq, Eq) {
            let gq = 1;
            const Yq = Eq.length - 1;
            for (; gq <= Yq;) {
              if (!qq._emit[gq]) {
                gq++;
                continue
              }
              const Yq = yq.classNameAliases[qq[gq]] || qq[gq],
                lq = Eq[gq];
              Yq ? Wq(lq, Yq) : (iq = lq, cq(), iq = ""), gq++
            }
          }

          function aq(qq, Eq) {
            return qq.scope && "string" === typeof qq.scope && bq.openNode(yq.classNameAliases[qq.scope] || qq.scope), qq.beginScope && (qq.beginScope._wrap ? (Wq(iq, yq.classNameAliases[qq.beginScope._wrap] || qq.beginScope._wrap), iq = "") : qq.beginScope._multi && (Nq(qq.beginScope, Eq), iq = "")), hq = Object.create(qq, {
              parent: {
                value: hq
              }
            }), hq
          }

          function Vq(qq, Eq, Yq) {
            let lq = function(qq, Eq) {
              const gq = qq && qq.exec(Eq);
              return gq && 0 === gq.index
            }(qq.endRe, Yq);
            if (lq) {
              if (qq["on:end"]) {
                const Yq = new gq(qq);
                qq["on:end"](Eq, Yq), Yq.isMatchIgnored && (lq = !1)
              }
              if (lq) {
                for (; qq.endsParent && qq.parent;) qq = qq.parent;
                return qq
              }
            }
            if (qq.endsWithParent) return Vq(qq.parent, Eq, Yq)
          }

          function dq(qq) {
            return 0 === hq.matcher.regexIndex ? (iq += qq[0], 1) : (Tq = !0, 0)
          }

          function jq(qq) {
            const gq = qq[0],
              Yq = Eq.substring(qq.index),
              lq = Vq(hq, qq, Yq);
            if (!lq) return cE;
            const Oq = hq;
            hq.endScope && hq.endScope._wrap ? (Bq(), Wq(gq, hq.endScope._wrap)) : hq.endScope && hq.endScope._multi ? (Bq(), Nq(hq.endScope, qq)) : Oq.skip ? iq += gq : (Oq.returnEnd || Oq.excludeEnd || (iq += gq), Bq(), Oq.excludeEnd && (iq = gq));
            do {
              hq.scope && bq.closeNode(), hq.skip || hq.subLanguage || (Zq += hq.relevance), hq = hq.parent
            } while (hq !== lq.parent);
            return lq.starts && aq(lq.starts, qq), Oq.returnEnd ? 0 : gq.length
          }
          let Pq = {};

          function Qq(Yq, Oq) {
            const xq = Oq && Oq[0];
            if (iq += Yq, null == xq) return Bq(), 0;
            if ("gN" === Pq.type && "end" === Oq.type && Pq.index === Oq.index && "" === xq) {
              if (iq += Eq.slice(Oq.index, Oq.index + 1), !mq) {
                const Eq = new Error(`0 width match regex (${qq})`);
                throw Eq.languageName = qq, Eq.badRule = Pq.rule, Eq
              }
              return 1
            }
            if (Pq = Oq, "gN" === Oq.type) return function(qq) {
              const Eq = qq[0],
                Yq = qq.rule,
                lq = new gq(Yq),
                Oq = [Yq.__beforeBegin, Yq["on:begin"]];
              for (const gq of Oq)
                if (gq && (gq(qq, lq), lq.isMatchIgnored)) return dq(Eq);
              return Yq.skip ? iq += Eq : (Yq.excludeBegin && (iq += Eq), Bq(), Yq.returnBegin || Yq.excludeBegin || (iq = Eq)), aq(Yq, qq), Yq.returnBegin ? 0 : Eq.length
            }(Oq);
            if ("illegal" === Oq.type && !lq) {
              const qq = new Error('Illegal lexeme "' + xq + '" for mode "' + (hq.scope || "<unnamed>") + '"');
              throw qq.mode = hq, qq
            }
            if ("end" === Oq.type) {
              const qq = jq(Oq);
              if (qq !== cE) return qq
            }
            if ("illegal" === Oq.type && "" === xq) return iq += "\n", 1;
            if (Mq > 1e5 && Mq > 3 * Oq.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return iq += xq, xq.length
          }
          const yq = tq(qq);
          if (!yq) throw eq(xq.replace("{}", qq)), new Error('Unknown language: "' + qq + '"');
          const rq = lE(yq);
          let vq = "",
            hq = Oq || rq;
          const nq = {},
            bq = new uq.__emitter(uq);
          ! function() {
            const qq = [];
            for (let Eq = hq; Eq !== yq; Eq = Eq.parent) Eq.scope && qq.unshift(Eq.scope);
            qq.forEach((qq => bq.openNode(qq)))
          }();
          let iq = "",
            Zq = 0,
            fq = 0,
            Mq = 0,
            Tq = !1;
          try {
            if (yq.__emitTokens) yq.__emitTokens(Eq, bq);
            else {
              for (hq.matcher.considerAll();;) {
                Mq++, Tq ? Tq = !1 : hq.matcher.considerAll(), hq.matcher.lastIndex = fq;
                const qq = hq.matcher.exec(Eq);
                if (!qq) break;
                const gq = Qq(Eq.substring(fq, qq.index), qq);
                fq = qq.index + gq
              }
              Qq(Eq.substring(fq))
            }
            return bq.finalize(), vq = bq.toHTML(), {
              language: qq,
              value: vq,
              relevance: Zq,
              illegal: !1,
              _emitter: bq,
              _top: hq
            }
          } catch (zq) {
            if (zq.message && zq.message.includes("Illegal")) return {
              language: qq,
              value: xE(Eq),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: zq.message,
                index: fq,
                context: Eq.slice(fq - 100, fq + 100),
                mode: zq.mode,
                resultSoFar: vq
              },
              _emitter: bq
            };
            if (mq) return {
              language: qq,
              value: xE(Eq),
              illegal: !1,
              relevance: 0,
              errorRaised: zq,
              _emitter: bq,
              _top: hq
            };
            throw zq
          }
        }

        function oq(qq, Eq) {
          Eq = Eq || uq.languages || Object.keys(Yq);
          const gq = function(qq) {
              const Eq = {
                value: xE(qq),
                illegal: !1,
                relevance: 0,
                _top: Aq,
                _emitter: new uq.__emitter(uq)
              };
              return Eq._emitter.addText(qq), Eq
            }(qq),
            lq = Eq.filter(tq).filter(vq).map((Eq => Hq(Eq, qq, !1)));
          lq.unshift(gq);
          const Oq = lq.sort(((qq, Eq) => {
              if (qq.relevance !== Eq.relevance) return Eq.relevance - qq.relevance;
              if (qq.language && Eq.language) {
                if (tq(qq.language).supersetOf === Eq.language) return 1;
                if (tq(Eq.language).supersetOf === qq.language) return -1
              }
              return 0
            })),
            [mq, xq] = Oq,
            cq = mq;
          return cq.secondBest = xq, cq
        }

        function Pq(qq) {
          let Eq = null;
          const gq = function(qq) {
            let Eq = qq.className + " ";
            Eq += qq.parentNode ? qq.parentNode.className : "";
            const gq = uq.languageDetectRe.exec(Eq);
            if (gq) {
              const Eq = tq(gq[1]);
              return Eq || (Dq(xq.replace("{}", gq[1])), Dq("Falling back to no-highlight mode for this block.", qq)), Eq ? gq[1] : "no-highlight"
            }
            return Eq.split(/\s+/).find((qq => dq(qq) || tq(qq)))
          }(qq);
          if (dq(gq)) return;
          if (hq("before:highlightElement", {
              el: qq,
              language: gq
            }), qq.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", qq);
          if (qq.children.length > 0 && (uq.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(qq)), uq.throwUnescapedHTML)) {
            throw new mE("One of your code blocks includes unescaped HTML.", qq.innerHTML)
          }
          Eq = qq;
          const Yq = Eq.textContent,
            Oq = gq ? jq(Yq, {
              language: gq,
              ignoreIllegals: !0
            }) : oq(Yq);
          qq.innerHTML = Oq.value, qq.dataset.highlighted = "yes",
            function(qq, Eq, gq) {
              const Yq = Eq && lq[Eq] || gq;
              qq.classList.add("hljs"), qq.classList.add(`language-${Yq}`)
            }(qq, gq, Oq.language), qq.result = {
              language: Oq.language,
              re: Oq.relevance,
              relevance: Oq.relevance
            }, Oq.secondBest && (qq.secondBest = {
              language: Oq.secondBest.language,
              relevance: Oq.secondBest.relevance
            }), hq("after:highlightElement", {
              el: qq,
              result: Oq,
              text: Yq
            })
        }
        let Qq = !1;

        function yq() {
          if ("loading" === document.readyState) return Qq || window.addEventListener("DOMContentLoaded", (function() {
            yq()
          }), !1), void(Qq = !0);
          document.querySelectorAll(uq.cssSelector).forEach(Pq)
        }

        function tq(qq) {
          return qq = (qq || "").toLowerCase(), Yq[qq] || Yq[lq[qq]]
        }

        function rq(qq, Eq) {
          let {
            languageName: gq
          } = Eq;
          "string" === typeof qq && (qq = [qq]), qq.forEach((qq => {
            lq[qq.toLowerCase()] = gq
          }))
        }

        function vq(qq) {
          const Eq = tq(qq);
          return Eq && !Eq.disableAutodetect
        }

        function hq(qq, Eq) {
          const gq = qq;
          Oq.forEach((function(qq) {
            qq[gq] && qq[gq](Eq)
          }))
        }
        Object.assign(qq, {
          highlight: jq,
          highlightAuto: oq,
          highlightAll: yq,
          highlightElement: Pq,
          highlightBlock: function(qq) {
            return qE("10.7.0", "highlightBlock will be removed entirely in v12.0"), qE("10.7.0", "Please use highlightElement now."), Pq(qq)
          },
          configure: function(qq) {
            uq = AE(uq, qq)
          },
          initHighlighting: () => {
            yq(), qE("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            yq(), qE("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(Eq, gq) {
            let lq = null;
            try {
              lq = gq(qq)
            } catch (Oq) {
              if (eq("Language definition for '{}' could not be registered.".replace("{}", Eq)), !mq) throw Oq;
              eq(Oq), lq = Aq
            }
            lq.name || (lq.name = Eq), Yq[Eq] = lq, lq.rawDefinition = gq.bind(null, qq), lq.aliases && rq(lq.aliases, {
              languageName: Eq
            })
          },
          unregisterLanguage: function(qq) {
            delete Yq[qq];
            for (const Eq of Object.keys(lq)) lq[Eq] === qq && delete lq[Eq]
          },
          listLanguages: function() {
            return Object.keys(Yq)
          },
          getLanguage: tq,
          registerAliases: rq,
          autoDetection: vq,
          inherit: AE,
          addPlugin: function(qq) {
            ! function(qq) {
              qq["before:highlightBlock"] && !qq["before:highlightElement"] && (qq["before:highlightElement"] = Eq => {
                qq["before:highlightBlock"](Object.assign({
                  block: Eq.el
                }, Eq))
              }), qq["after:highlightBlock"] && !qq["after:highlightElement"] && (qq["after:highlightElement"] = Eq => {
                qq["after:highlightBlock"](Object.assign({
                  block: Eq.el
                }, Eq))
              })
            }(qq), Oq.push(qq)
          },
          removePlugin: function(qq) {
            const Eq = Oq.indexOf(qq); - 1 !== Eq && Oq.splice(Eq, 1)
          }
        }), qq.debugMode = function() {
          mq = !1
        }, qq.safeMode = function() {
          mq = !0
        }, qq.versionString = "11.11.1", qq.regex = {
          concat: aq,
          lookahead: Bq,
          either: Vq,
          optional: Nq,
          anyNumberOfTimes: Wq
        };
        for (const gq in Lq) "object" === typeof Lq[gq] && Eq(Lq[gq]);
        return Object.assign(qq, Lq), qq
      },
      BE = uE({});
    BE.newInstance = () => uE({}), qq.exports = BE, BE.HighlightJS = BE, BE.default = BE
  },
  4540: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    const Yq = gq(4546)
  },
  4553: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Bq
    });
    const Yq = "[A-Za-z$_][0-9A-Za-z$_]*",
      lq = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Oq = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      mq = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      xq = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Aq = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      cq = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      uq = [].concat(Aq, mq, xq);

    function Bq(qq) {
      const Eq = qq.regex,
        gq = Yq,
        Bq = "<>",
        Wq = "</>",
        Nq = {
          gN: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (qq, Eq) => {
            const gq = qq[0].length + qq.index,
              Yq = qq.input[gq];
            if ("<" === Yq || "," === Yq) return void Eq.ignoreMatch();
            let lq;
            ">" === Yq && (((qq, Eq) => {
              let {
                after: gq
              } = Eq;
              const Yq = "</" + qq[0].slice(1);
              return -1 !== qq.input.indexOf(Yq, gq)
            })(qq, {
              after: gq
            }) || Eq.ignoreMatch());
            const Oq = qq.input.substring(gq);
            ((lq = Oq.match(/^\s*=/)) || (lq = Oq.match(/^\s+extends\s+/)) && 0 === lq.index) && Eq.ignoreMatch()
          }
        },
        aq = {
          $pattern: Yq,
          keyword: lq,
          literal: Oq,
          built_in: uq,
          "variable.language": cq
        },
        Vq = "[0-9](_?[0-9])*",
        dq = `\\.(${Vq})`,
        jq = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Hq = {
          className: "number",
          variants: [{
            gN: `(\\b(${jq})((${dq})|\\.)?|(${dq}))[eE][+-]?(${Vq})\\b`
          }, {
            gN: `\\b(${jq})\\b((${dq})\\b|\\.)?|(${dq})\\b`
          }, {
            gN: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            gN: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            gN: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            gN: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            gN: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        oq = {
          className: "subst",
          gN: "\\$\\{",
          end: "\\}",
          keywords: aq,
          contains: []
        },
        Pq = {
          gN: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [qq.BACKSLASH_ESCAPE, oq],
            subLanguage: "xml"
          }
        },
        Qq = {
          gN: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [qq.BACKSLASH_ESCAPE, oq],
            subLanguage: "css"
          }
        },
        yq = {
          gN: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [qq.BACKSLASH_ESCAPE, oq],
            subLanguage: "graphql"
          }
        },
        tq = {
          className: "string",
          gN: "`",
          end: "`",
          contains: [qq.BACKSLASH_ESCAPE, oq]
        },
        rq = {
          className: "comment",
          variants: [qq.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              gN: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                gN: "@[A-Za-z]+"
              }, {
                className: "type",
                gN: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                gN: gq + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                gN: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), qq.C_BLOCK_COMMENT_MODE, qq.C_LINE_COMMENT_MODE]
        },
        vq = [qq.APOS_STRING_MODE, qq.QUOTE_STRING_MODE, Pq, Qq, yq, tq, {
          match: /\$\d+/
        }, Hq];
      oq.contains = vq.concat({
        gN: /\{/,
        end: /\}/,
        keywords: aq,
        contains: ["self"].concat(vq)
      });
      const hq = [].concat(rq, oq.contains),
        nq = hq.concat([{
          gN: /(\s*)\(/,
          end: /\)/,
          keywords: aq,
          contains: ["self"].concat(hq)
        }]),
        bq = {
          className: "params",
          gN: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: aq,
          contains: nq
        },
        iq = {
          variants: [{
            match: [/class/, /\s+/, gq, /\s+/, /extends/, /\s+/, Eq.concat(gq, "(", Eq.concat(/\./, gq), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, gq],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Zq = {
          relevance: 0,
          match: Eq.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...mq, ...xq]
          }
        },
        fq = {
          variants: [{
            match: [/function/, /\s+/, gq, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [bq],
          illegal: /%/
        };
      const Mq = {
        match: Eq.concat(/\b/, (Tq = [...Aq, "super", "import"].map((qq => `${qq}\\s*\\(`)), Eq.concat("(?!", Tq.join("|"), ")")), gq, Eq.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Tq;
      const zq = {
          gN: Eq.concat(/\./, Eq.lookahead(Eq.concat(gq, /(?![0-9A-Za-z$_(])/))),
          end: gq,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Sq = {
          match: [/get|set/, /\s+/, gq, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            gN: /\(\)/
          }, bq]
        },
        pq = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + qq.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Gq = {
          match: [/const|var|let/, /\s+/, gq, /\s*/, /=\s*/, /(async\s*)?/, Eq.lookahead(pq)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [bq]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: aq,
        exports: {
          PARAMS_CONTAINS: nq,
          CLASS_REFERENCE: Zq
        },
        illegal: /#(?![$_A-z])/,
        contains: [qq.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          gN: /^\s*['"]use (strict|asm)['"]/
        }, qq.APOS_STRING_MODE, qq.QUOTE_STRING_MODE, Pq, Qq, yq, tq, rq, {
          match: /\$\d+/
        }, Hq, Zq, {
          scope: "attr",
          match: gq + Eq.lookahead(":"),
          relevance: 0
        }, Gq, {
          gN: "(" + qq.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [rq, qq.REGEXP_MODE, {
            className: "function",
            gN: pq,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                gN: qq.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                gN: /\(\s*\)/,
                skip: !0
              }, {
                gN: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: aq,
                contains: nq
              }]
            }]
          }, {
            gN: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              gN: Bq,
              end: Wq
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              gN: Nq.gN,
              "on:begin": Nq.isTrulyOpeningTag,
              end: Nq.end
            }],
            subLanguage: "xml",
            contains: [{
              gN: Nq.gN,
              end: Nq.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, fq, {
          beginKeywords: "while if switch catch for"
        }, {
          gN: "\\b(?!function)" + qq.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [bq, qq.inherit(qq.TITLE_MODE, {
            gN: gq,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, zq, {
          match: "\\$" + gq,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [bq]
        }, Mq, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, iq, Sq, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4562: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Wq
    });
    const Yq = "[A-Za-z$_][0-9A-Za-z$_]*",
      lq = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Oq = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      mq = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      xq = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Aq = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      cq = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      uq = [].concat(Aq, mq, xq);

    function Bq(qq) {
      const Eq = qq.regex,
        gq = Yq,
        Bq = "<>",
        Wq = "</>",
        Nq = {
          gN: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (qq, Eq) => {
            const gq = qq[0].length + qq.index,
              Yq = qq.input[gq];
            if ("<" === Yq || "," === Yq) return void Eq.ignoreMatch();
            let lq;
            ">" === Yq && (((qq, Eq) => {
              let {
                after: gq
              } = Eq;
              const Yq = "</" + qq[0].slice(1);
              return -1 !== qq.input.indexOf(Yq, gq)
            })(qq, {
              after: gq
            }) || Eq.ignoreMatch());
            const Oq = qq.input.substring(gq);
            ((lq = Oq.match(/^\s*=/)) || (lq = Oq.match(/^\s+extends\s+/)) && 0 === lq.index) && Eq.ignoreMatch()
          }
        },
        aq = {
          $pattern: Yq,
          keyword: lq,
          literal: Oq,
          built_in: uq,
          "variable.language": cq
        },
        Vq = "[0-9](_?[0-9])*",
        dq = `\\.(${Vq})`,
        jq = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Hq = {
          className: "number",
          variants: [{
            gN: `(\\b(${jq})((${dq})|\\.)?|(${dq}))[eE][+-]?(${Vq})\\b`
          }, {
            gN: `\\b(${jq})\\b((${dq})\\b|\\.)?|(${dq})\\b`
          }, {
            gN: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            gN: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            gN: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            gN: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            gN: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        oq = {
          className: "subst",
          gN: "\\$\\{",
          end: "\\}",
          keywords: aq,
          contains: []
        },
        Pq = {
          gN: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [qq.BACKSLASH_ESCAPE, oq],
            subLanguage: "xml"
          }
        },
        Qq = {
          gN: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [qq.BACKSLASH_ESCAPE, oq],
            subLanguage: "css"
          }
        },
        yq = {
          gN: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [qq.BACKSLASH_ESCAPE, oq],
            subLanguage: "graphql"
          }
        },
        tq = {
          className: "string",
          gN: "`",
          end: "`",
          contains: [qq.BACKSLASH_ESCAPE, oq]
        },
        rq = {
          className: "comment",
          variants: [qq.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              gN: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                gN: "@[A-Za-z]+"
              }, {
                className: "type",
                gN: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                gN: gq + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                gN: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), qq.C_BLOCK_COMMENT_MODE, qq.C_LINE_COMMENT_MODE]
        },
        vq = [qq.APOS_STRING_MODE, qq.QUOTE_STRING_MODE, Pq, Qq, yq, tq, {
          match: /\$\d+/
        }, Hq];
      oq.contains = vq.concat({
        gN: /\{/,
        end: /\}/,
        keywords: aq,
        contains: ["self"].concat(vq)
      });
      const hq = [].concat(rq, oq.contains),
        nq = hq.concat([{
          gN: /(\s*)\(/,
          end: /\)/,
          keywords: aq,
          contains: ["self"].concat(hq)
        }]),
        bq = {
          className: "params",
          gN: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: aq,
          contains: nq
        },
        iq = {
          variants: [{
            match: [/class/, /\s+/, gq, /\s+/, /extends/, /\s+/, Eq.concat(gq, "(", Eq.concat(/\./, gq), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, gq],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Zq = {
          relevance: 0,
          match: Eq.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...mq, ...xq]
          }
        },
        fq = {
          variants: [{
            match: [/function/, /\s+/, gq, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [bq],
          illegal: /%/
        };
      const Mq = {
        match: Eq.concat(/\b/, (Tq = [...Aq, "super", "import"].map((qq => `${qq}\\s*\\(`)), Eq.concat("(?!", Tq.join("|"), ")")), gq, Eq.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Tq;
      const zq = {
          gN: Eq.concat(/\./, Eq.lookahead(Eq.concat(gq, /(?![0-9A-Za-z$_(])/))),
          end: gq,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Sq = {
          match: [/get|set/, /\s+/, gq, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            gN: /\(\)/
          }, bq]
        },
        pq = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + qq.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Gq = {
          match: [/const|var|let/, /\s+/, gq, /\s*/, /=\s*/, /(async\s*)?/, Eq.lookahead(pq)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [bq]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: aq,
        exports: {
          PARAMS_CONTAINS: nq,
          CLASS_REFERENCE: Zq
        },
        illegal: /#(?![$_A-z])/,
        contains: [qq.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          gN: /^\s*['"]use (strict|asm)['"]/
        }, qq.APOS_STRING_MODE, qq.QUOTE_STRING_MODE, Pq, Qq, yq, tq, rq, {
          match: /\$\d+/
        }, Hq, Zq, {
          scope: "attr",
          match: gq + Eq.lookahead(":"),
          relevance: 0
        }, Gq, {
          gN: "(" + qq.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [rq, qq.REGEXP_MODE, {
            className: "function",
            gN: pq,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                gN: qq.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                gN: /\(\s*\)/,
                skip: !0
              }, {
                gN: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: aq,
                contains: nq
              }]
            }]
          }, {
            gN: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              gN: Bq,
              end: Wq
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              gN: Nq.gN,
              "on:begin": Nq.isTrulyOpeningTag,
              end: Nq.end
            }],
            subLanguage: "xml",
            contains: [{
              gN: Nq.gN,
              end: Nq.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, fq, {
          beginKeywords: "while if switch catch for"
        }, {
          gN: "\\b(?!function)" + qq.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [bq, qq.inherit(qq.TITLE_MODE, {
            gN: gq,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, zq, {
          match: "\\$" + gq,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [bq]
        }, Mq, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, iq, Sq, {
          match: /\$[(.]/
        }]
      }
    }

    function Wq(qq) {
      const Eq = qq.regex,
        gq = Bq(qq),
        mq = Yq,
        xq = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Aq = {
          gN: [/namespace/, /\s+/, qq.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Wq = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: xq
          },
          contains: [gq.exports.CLASS_REFERENCE]
        },
        Nq = {
          $pattern: Yq,
          keyword: lq.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Oq,
          built_in: uq.concat(xq),
          "variable.language": cq
        },
        aq = {
          className: "meta",
          gN: "@" + mq
        },
        Vq = (qq, Eq, gq) => {
          const Yq = qq.contains.findIndex((qq => qq.label === Eq));
          if (-1 === Yq) throw new Error("can not find mode to replace");
          qq.contains.splice(Yq, 1, gq)
        };
      Object.assign(gq.keywords, Nq), gq.exports.PARAMS_CONTAINS.push(aq);
      const dq = gq.contains.find((qq => "attr" === qq.scope)),
        jq = Object.assign({}, dq, {
          match: Eq.concat(mq, Eq.lookahead(/\s*\?:/))
        });
      gq.exports.PARAMS_CONTAINS.push([gq.exports.CLASS_REFERENCE, dq, jq]), gq.contains = gq.contains.concat([aq, Aq, Wq, jq]), Vq(gq, "shebang", qq.SHEBANG()), Vq(gq, "use_strict", {
        className: "meta",
        relevance: 10,
        gN: /^\s*['"]use strict['"]/
      });
      return gq.contains.find((qq => "func.def" === qq.label)).relevance = 0, Object.assign(gq, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), gq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);