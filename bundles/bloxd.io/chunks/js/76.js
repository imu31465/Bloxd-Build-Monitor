export const id = 76;
export const ids = [76];
export const modules = {
  4402: bb => {
    function ab(bb) {
      return bb instanceof Map ? bb.clear = bb.delete = bb.set = function() {
        throw new Error("map is read-only")
      } : bb instanceof Set && (bb.add = bb.clear = bb.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(bb), Object.getOwnPropertyNames(bb).forEach((Ub => {
        const Ab = bb[Ub],
          Mb = typeof Ab;
        "object" !== Mb && "function" !== Mb || Object.isFrozen(Ab) || ab(Ab)
      })), bb
    }
    class Ub {
      constructor(bb) {
        void 0 === bb.data && (bb.data = {}), this.data = bb.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Ab(bb) {
      return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Mb(bb) {
      const ab = Object.create(null);
      for (const Tb in bb) ab[Tb] = bb[Tb];
      for (var Ub = arguments.length, Ab = new Array(Ub > 1 ? Ub - 1 : 0), Mb = 1; Mb < Ub; Mb++) Ab[Mb - 1] = arguments[Mb];
      return Ab.forEach((function(bb) {
        for (const Ub in bb) ab[Ub] = bb[Ub]
      })), ab
    }
    const Tb = bb => !!bb.scope;
    class Eb {
      constructor(bb, ab) {
        this.buffer = "", this.classPrefix = ab.classPrefix, bb.walk(this)
      }
      addText(bb) {
        this.buffer += Ab(bb)
      }
      openNode(bb) {
        if (!Tb(bb)) return;
        const ab = ((bb, ab) => {
          let {
            prefix: Ub
          } = ab;
          if (bb.startsWith("language:")) return bb.replace("language:", "language-");
          if (bb.includes(".")) {
            const ab = bb.split(".");
            return [`${Ub}${ab.shift()}`, ...ab.map(((bb, ab) => `${bb}${"_".repeat(ab+1)}`))].join(" ")
          }
          return `${Ub}${bb}`
        })(bb.scope, {
          prefix: this.classPrefix
        });
        this.span(ab)
      }
      closeNode(bb) {
        Tb(bb) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(bb) {
        this.buffer += `<span class="${bb}">`
      }
    }
    const Yb = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ab = {
        children: []
      };
      return Object.assign(ab, bb), ab
    };
    class Bb {
      constructor() {
        this.aZ = Yb(), this.stack = [this.aZ]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.aZ
      }
      add(bb) {
        this.top.children.push(bb)
      }
      openNode(bb) {
        const ab = Yb({
          scope: bb
        });
        this.add(ab), this.stack.push(ab)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.aZ, null, 4)
      }
      walk(bb) {
        return this.constructor._walk(bb, this.aZ)
      }
      static _walk(bb, ab) {
        return "string" === typeof ab ? bb.addText(ab) : ab.children && (bb.openNode(ab), ab.children.forEach((ab => this._walk(bb, ab))), bb.closeNode(ab)), bb
      }
      static _collapse(bb) {
        "string" !== typeof bb && bb.children && (bb.children.every((bb => "string" === typeof bb)) ? bb.children = [bb.children.join("")] : bb.children.forEach((bb => {
          Bb._collapse(bb)
        })))
      }
    }
    class eb extends Bb {
      constructor(bb) {
        super(), this.options = bb
      }
      addText(bb) {
        "" !== bb && this.add(bb)
      }
      startScope(bb) {
        this.openNode(bb)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(bb, ab) {
        const Ub = bb.root;
        ab && (Ub.scope = `language:${ab}`), this.add(Ub)
      }
      toHTML() {
        return new Eb(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function vb(bb) {
      return bb ? "string" === typeof bb ? bb : bb.source : null
    }

    function Lb(bb) {
      return jb("(?=", bb, ")")
    }

    function Pb(bb) {
      return jb("(?:", bb, ")*")
    }

    function Xb(bb) {
      return jb("(?:", bb, ")?")
    }

    function jb() {
      for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
      return ab.map((bb => vb(bb))).join("")
    }

    function Rb() {
      for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
      const Ab = function(bb) {
        const ab = bb[bb.length - 1];
        return "object" === typeof ab && ab.constructor === Object ? (bb.splice(bb.length - 1, 1), ab) : {}
      }(ab);
      return "(" + (Ab.capture ? "" : "?:") + ab.map((bb => vb(bb))).join("|") + ")"
    }

    function kb(bb) {
      return new RegExp(bb.toString() + "|").exec("").length - 1
    }
    const yb = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Zb(bb, ab) {
      let {
        joinWith: Ub
      } = ab, Ab = 0;
      return bb.map((bb => {
        Ab += 1;
        const ab = Ab;
        let Ub = vb(bb),
          Mb = "";
        for (; Ub.length > 0;) {
          const bb = yb.exec(Ub);
          if (!bb) {
            Mb += Ub;
            break
          }
          Mb += Ub.substring(0, bb.index), Ub = Ub.substring(bb.index + bb[0].length), "\\" === bb[0][0] && bb[1] ? Mb += "\\" + String(Number(bb[1]) + ab) : (Mb += bb[0], "(" === bb[0] && Ab++)
        }
        return Mb
      })).map((bb => `(${bb})`)).join(Ub)
    }
    const Db = "[a-zA-Z]\\w*",
      zb = "[a-zA-Z_]\\w*",
      xb = "\\b\\d+(\\.\\d+)?",
      ib = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      fb = "\\b(0b[01]+)",
      mb = {
        bX: "\\\\[\\s\\S]",
        relevance: 0
      },
      pb = {
        scope: "string",
        bX: "'",
        end: "'",
        illegal: "\\n",
        contains: [mb]
      },
      Nb = {
        scope: "string",
        bX: '"',
        end: '"',
        illegal: "\\n",
        contains: [mb]
      },
      Wb = function(bb, ab) {
        const Ub = Mb({
          scope: "comment",
          bX: bb,
          end: ab,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        Ub.contains.push({
          scope: "doctag",
          bX: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Ab = Rb("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return Ub.contains.push({
          bX: jb(/[ ]+/, "(", Ab, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), Ub
      },
      Hb = Wb("//", "$"),
      Ib = Wb("/\\*", "\\*/"),
      db = Wb("#", "$"),
      Fb = {
        scope: "number",
        bX: xb,
        relevance: 0
      },
      hb = {
        scope: "number",
        bX: ib,
        relevance: 0
      },
      Gb = {
        scope: "number",
        bX: fb,
        relevance: 0
      },
      Qb = {
        scope: "regexp",
        bX: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [mb, {
          bX: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [mb]
        }]
      },
      qb = {
        scope: "title",
        bX: Db,
        relevance: 0
      },
      ub = {
        scope: "title",
        bX: zb,
        relevance: 0
      },
      rb = {
        bX: "\\.\\s*" + zb,
        relevance: 0
      };
    var Kb = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: pb,
      BACKSLASH_ESCAPE: mb,
      BINARY_NUMBER_MODE: Gb,
      BINARY_NUMBER_RE: fb,
      COMMENT: Wb,
      C_BLOCK_COMMENT_MODE: Ib,
      C_LINE_COMMENT_MODE: Hb,
      C_NUMBER_MODE: hb,
      C_NUMBER_RE: ib,
      END_SAME_AS_BEGIN: function(bb) {
        return Object.assign(bb, {
          "on:begin": (bb, ab) => {
            ab.data._beginMatch = bb[1]
          },
          "on:end": (bb, ab) => {
            ab.data._beginMatch !== bb[1] && ab.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: db,
      IDENT_RE: Db,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: rb,
      NUMBER_MODE: Fb,
      NUMBER_RE: xb,
      PHRASAL_WORDS_MODE: {
        bX: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: Nb,
      REGEXP_MODE: Qb,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const ab = /^#![ ]*\//;
        return bb.binary && (bb.bX = jb(ab, /.*\b/, bb.binary, /\b.*/)), Mb({
          scope: "meta",
          bX: ab,
          end: /$/,
          relevance: 0,
          "on:begin": (bb, ab) => {
            0 !== bb.index && ab.ignoreMatch()
          }
        }, bb)
      },
      TITLE_MODE: qb,
      UNDERSCORE_IDENT_RE: zb,
      UNDERSCORE_TITLE_MODE: ub
    });

    function ob(bb, ab) {
      "." === bb.input[bb.index - 1] && ab.ignoreMatch()
    }

    function lb(bb, ab) {
      void 0 !== bb.className && (bb.scope = bb.className, delete bb.className)
    }

    function tb(bb, ab) {
      ab && bb.beginKeywords && (bb.bX = "\\b(" + bb.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", bb.__beforeBegin = ob, bb.keywords = bb.keywords || bb.beginKeywords, delete bb.beginKeywords, void 0 === bb.relevance && (bb.relevance = 0))
    }

    function wb(bb, ab) {
      Array.isArray(bb.illegal) && (bb.illegal = Rb(...bb.illegal))
    }

    function sb(bb, ab) {
      if (bb.match) {
        if (bb.bX || bb.end) throw new Error("begin & end are not supported with match");
        bb.bX = bb.match, delete bb.match
      }
    }

    function gb(bb, ab) {
      void 0 === bb.relevance && (bb.relevance = 1)
    }
    const Cb = (bb, ab) => {
        if (!bb.beforeMatch) return;
        if (bb.starts) throw new Error("beforeMatch cannot be used with starts");
        const Ub = Object.assign({}, bb);
        Object.keys(bb).forEach((ab => {
          delete bb[ab]
        })), bb.keywords = Ub.keywords, bb.bX = jb(Ub.beforeMatch, Lb(Ub.bX)), bb.starts = {
          relevance: 0,
          contains: [Object.assign(Ub, {
            endsParent: !0
          })]
        }, bb.relevance = 0, delete Ub.beforeMatch
      },
      Vb = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function Ob(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Ab = Object.create(null);
      return "string" === typeof bb ? Mb(Ub, bb.split(" ")) : Array.isArray(bb) ? Mb(Ub, bb) : Object.keys(bb).forEach((function(Ub) {
        Object.assign(Ab, Ob(bb[Ub], ab, Ub))
      })), Ab;

      function Mb(bb, Ub) {
        ab && (Ub = Ub.map((bb => bb.toLowerCase()))), Ub.forEach((function(ab) {
          const Ub = ab.split("|");
          Ab[Ub[0]] = [bb, cb(Ub[0], Ub[1])]
        }))
      }
    }

    function cb(bb, ab) {
      return ab ? Number(ab) : function(bb) {
        return Vb.includes(bb.toLowerCase())
      }(bb) ? 0 : 1
    }
    const Jb = {},
      nb = bb => {
        console.error(bb)
      },
      Sb = function(bb) {
        for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
        console.log(`WARN: ${bb}`, ...Ub)
      },
      ba = (bb, ab) => {
        Jb[`${bb}/${ab}`] || (console.log(`Deprecated as of ${bb}. ${ab}`), Jb[`${bb}/${ab}`] = !0)
      },
      aa = new Error;

    function Ua(bb, ab, Ub) {
      let {
        key: Ab
      } = Ub, Mb = 0;
      const Tb = bb[Ab],
        Eb = {},
        Yb = {};
      for (let Bb = 1; Bb <= ab.length; Bb++) Yb[Bb + Mb] = Tb[Bb], Eb[Bb + Mb] = !0, Mb += kb(ab[Bb - 1]);
      bb[Ab] = Yb, bb[Ab]._emit = Eb, bb[Ab]._multi = !0
    }

    function Aa(bb) {
      ! function(bb) {
        bb.scope && "object" === typeof bb.scope && null !== bb.scope && (bb.beginScope = bb.scope, delete bb.scope)
      }(bb), "string" === typeof bb.beginScope && (bb.beginScope = {
          _wrap: bb.beginScope
        }), "string" === typeof bb.endScope && (bb.endScope = {
          _wrap: bb.endScope
        }),
        function(bb) {
          if (Array.isArray(bb.bX)) {
            if (bb.skip || bb.excludeBegin || bb.returnBegin) throw nb("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), aa;
            if ("object" !== typeof bb.beginScope || null === bb.beginScope) throw nb("beginScope must be object"), aa;
            Ua(bb, bb.bX, {
              key: "beginScope"
            }), bb.bX = Zb(bb.bX, {
              joinWith: ""
            })
          }
        }(bb),
        function(bb) {
          if (Array.isArray(bb.end)) {
            if (bb.skip || bb.excludeEnd || bb.returnEnd) throw nb("skip, excludeEnd, returnEnd not compatible with endScope: {}"), aa;
            if ("object" !== typeof bb.endScope || null === bb.endScope) throw nb("endScope must be object"), aa;
            Ua(bb, bb.end, {
              key: "endScope"
            }), bb.end = Zb(bb.end, {
              joinWith: ""
            })
          }
        }(bb)
    }

    function Ma(bb) {
      function ab(ab, Ub) {
        return new RegExp(vb(ab), "m" + (bb.case_insensitive ? "i" : "") + (bb.unicodeRegex ? "u" : "") + (Ub ? "g" : ""))
      }
      class Ub {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(bb, ab) {
          ab.position = this.position++, this.matchIndexes[this.matchAt] = ab, this.regexes.push([ab, bb]), this.matchAt += kb(bb) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const bb = this.regexes.map((bb => bb[1]));
          this.matcherRe = ab(Zb(bb, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(bb) {
          this.matcherRe.lastIndex = this.lastIndex;
          const ab = this.matcherRe.exec(bb);
          if (!ab) return null;
          const Ub = ab.findIndex(((bb, ab) => ab > 0 && void 0 !== bb)),
            Ab = this.matchIndexes[Ub];
          return ab.splice(0, Ub), Object.assign(ab, Ab)
        }
      }
      class Ab {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(bb) {
          if (this.multiRegexes[bb]) return this.multiRegexes[bb];
          const ab = new Ub;
          return this.rules.slice(bb).forEach((bb => {
            let [Ub, Ab] = bb;
            return ab.addRule(Ub, Ab)
          })), ab.compile(), this.multiRegexes[bb] = ab, ab
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(bb, ab) {
          this.rules.push([bb, ab]), "bX" === ab.type && this.count++
        }
        exec(bb) {
          const ab = this.getMatcher(this.regexIndex);
          ab.lastIndex = this.lastIndex;
          let Ub = ab.exec(bb);
          if (this.resumingScanAtSamePosition())
            if (Ub && Ub.index === this.lastIndex);
            else {
              const ab = this.getMatcher(0);
              ab.lastIndex = this.lastIndex + 1, Ub = ab.exec(bb)
            } return Ub && (this.regexIndex += Ub.position + 1, this.regexIndex === this.count && this.considerAll()), Ub
        }
      }
      if (bb.compilerExtensions || (bb.compilerExtensions = []), bb.contains && bb.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return bb.classNameAliases = Mb(bb.classNameAliases || {}),
        function Ub(Tb, Eb) {
          const Yb = Tb;
          if (Tb.isCompiled) return Yb;
          [lb, sb, Aa, Cb].forEach((bb => bb(Tb, Eb))), bb.compilerExtensions.forEach((bb => bb(Tb, Eb))), Tb.__beforeBegin = null, [tb, wb, gb].forEach((bb => bb(Tb, Eb))), Tb.isCompiled = !0;
          let Bb = null;
          return "object" === typeof Tb.keywords && Tb.keywords.$pattern && (Tb.keywords = Object.assign({}, Tb.keywords), Bb = Tb.keywords.$pattern, delete Tb.keywords.$pattern), Bb = Bb || /\w+/, Tb.keywords && (Tb.keywords = Ob(Tb.keywords, bb.case_insensitive)), Yb.keywordPatternRe = ab(Bb, !0), Eb && (Tb.bX || (Tb.bX = /\B|\b/), Yb.beginRe = ab(Yb.bX), Tb.end || Tb.endsWithParent || (Tb.end = /\B|\b/), Tb.end && (Yb.endRe = ab(Yb.end)), Yb.terminatorEnd = vb(Yb.end) || "", Tb.endsWithParent && Eb.terminatorEnd && (Yb.terminatorEnd += (Tb.end ? "|" : "") + Eb.terminatorEnd)), Tb.illegal && (Yb.illegalRe = ab(Tb.illegal)), Tb.contains || (Tb.contains = []), Tb.contains = [].concat(...Tb.contains.map((function(bb) {
            return function(bb) {
              bb.variants && !bb.cachedVariants && (bb.cachedVariants = bb.variants.map((function(ab) {
                return Mb(bb, {
                  variants: null
                }, ab)
              })));
              if (bb.cachedVariants) return bb.cachedVariants;
              if (Ta(bb)) return Mb(bb, {
                starts: bb.starts ? Mb(bb.starts) : null
              });
              if (Object.isFrozen(bb)) return Mb(bb);
              return bb
            }("self" === bb ? Tb : bb)
          }))), Tb.contains.forEach((function(bb) {
            Ub(bb, Yb)
          })), Tb.starts && Ub(Tb.starts, Eb), Yb.matcher = function(bb) {
            const ab = new Ab;
            return bb.contains.forEach((bb => ab.addRule(bb.bX, {
              rule: bb,
              type: "bX"
            }))), bb.terminatorEnd && ab.addRule(bb.terminatorEnd, {
              type: "end"
            }), bb.illegal && ab.addRule(bb.illegal, {
              type: "illegal"
            }), ab
          }(Yb), Yb
        }(bb)
    }

    function Ta(bb) {
      return !!bb && (bb.endsWithParent || Ta(bb.starts))
    }
    class Ea extends Error {
      constructor(bb, ab) {
        super(bb), this.name = "HTMLInjectionError", this.html = ab
      }
    }
    const Ya = Ab,
      Ba = Mb,
      ea = Symbol("nomatch"),
      va = function(bb) {
        const Ab = Object.create(null),
          Mb = Object.create(null),
          Tb = [];
        let Eb = !0;
        const Yb = "Could not find the language '{}', did you forget to load/include a language module?",
          Bb = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let vb = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: eb
        };

        function kb(bb) {
          return vb.noHighlightRe.test(bb)
        }

        function yb(bb, ab, Ub) {
          let Ab = "",
            Mb = "";
          "object" === typeof ab ? (Ab = bb, Ub = ab.ignoreIllegals, Mb = ab.language) : (ba("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ba("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Mb = bb, Ab = ab), void 0 === Ub && (Ub = !0);
          const Tb = {
            code: Ab,
            language: Mb
          };
          Nb("before:highlight", Tb);
          const Eb = Tb.result ? Tb.result : Zb(Tb.language, Tb.code, Ub);
          return Eb.code = Tb.code, Nb("after:highlight", Eb), Eb
        }

        function Zb(bb, ab, Mb, Tb) {
          const Bb = Object.create(null);

          function eb() {
            if (!Nb.keywords) return void Hb.addText(Ib);
            let bb = 0;
            Nb.keywordPatternRe.lastIndex = 0;
            let ab = Nb.keywordPatternRe.exec(Ib),
              Ub = "";
            for (; ab;) {
              Ub += Ib.substring(bb, ab.index);
              const Mb = ib.case_insensitive ? ab[0].toLowerCase() : ab[0],
                Tb = (Ab = Mb, Nb.keywords[Ab]);
              if (Tb) {
                const [bb, Ab] = Tb;
                if (Hb.addText(Ub), Ub = "", Bb[Mb] = (Bb[Mb] || 0) + 1, Bb[Mb] <= 7 && (db += Ab), bb.startsWith("_")) Ub += ab[0];
                else {
                  const Ub = ib.classNameAliases[bb] || bb;
                  Pb(ab[0], Ub)
                }
              } else Ub += ab[0];
              bb = Nb.keywordPatternRe.lastIndex, ab = Nb.keywordPatternRe.exec(Ib)
            }
            var Ab;
            Ub += Ib.substring(bb), Hb.addText(Ub)
          }

          function Lb() {
            null != Nb.subLanguage ? function() {
              if ("" === Ib) return;
              let bb = null;
              if ("string" === typeof Nb.subLanguage) {
                if (!Ab[Nb.subLanguage]) return void Hb.addText(Ib);
                bb = Zb(Nb.subLanguage, Ib, !0, Wb[Nb.subLanguage]), Wb[Nb.subLanguage] = bb._top
              } else bb = Db(Ib, Nb.subLanguage.length ? Nb.subLanguage : null);
              Nb.relevance > 0 && (db += bb.relevance), Hb.__addSublanguage(bb._emitter, bb.language)
            }() : eb(), Ib = ""
          }

          function Pb(bb, ab) {
            "" !== bb && (Hb.startScope(ab), Hb.addText(bb), Hb.endScope())
          }

          function Xb(bb, ab) {
            let Ub = 1;
            const Ab = ab.length - 1;
            for (; Ub <= Ab;) {
              if (!bb._emit[Ub]) {
                Ub++;
                continue
              }
              const Ab = ib.classNameAliases[bb[Ub]] || bb[Ub],
                Mb = ab[Ub];
              Ab ? Pb(Mb, Ab) : (Ib = Mb, eb(), Ib = ""), Ub++
            }
          }

          function jb(bb, ab) {
            return bb.scope && "string" === typeof bb.scope && Hb.openNode(ib.classNameAliases[bb.scope] || bb.scope), bb.beginScope && (bb.beginScope._wrap ? (Pb(Ib, ib.classNameAliases[bb.beginScope._wrap] || bb.beginScope._wrap), Ib = "") : bb.beginScope._multi && (Xb(bb.beginScope, ab), Ib = "")), Nb = Object.create(bb, {
              parent: {
                value: Nb
              }
            }), Nb
          }

          function Rb(bb, ab, Ab) {
            let Mb = function(bb, ab) {
              const Ub = bb && bb.exec(ab);
              return Ub && 0 === Ub.index
            }(bb.endRe, Ab);
            if (Mb) {
              if (bb["on:end"]) {
                const Ab = new Ub(bb);
                bb["on:end"](ab, Ab), Ab.isMatchIgnored && (Mb = !1)
              }
              if (Mb) {
                for (; bb.endsParent && bb.parent;) bb = bb.parent;
                return bb
              }
            }
            if (bb.endsWithParent) return Rb(bb.parent, ab, Ab)
          }

          function kb(bb) {
            return 0 === Nb.matcher.regexIndex ? (Ib += bb[0], 1) : (Gb = !0, 0)
          }

          function yb(bb) {
            const Ub = bb[0],
              Ab = ab.substring(bb.index),
              Mb = Rb(Nb, bb, Ab);
            if (!Mb) return ea;
            const Tb = Nb;
            Nb.endScope && Nb.endScope._wrap ? (Lb(), Pb(Ub, Nb.endScope._wrap)) : Nb.endScope && Nb.endScope._multi ? (Lb(), Xb(Nb.endScope, bb)) : Tb.skip ? Ib += Ub : (Tb.returnEnd || Tb.excludeEnd || (Ib += Ub), Lb(), Tb.excludeEnd && (Ib = Ub));
            do {
              Nb.scope && Hb.closeNode(), Nb.skip || Nb.subLanguage || (db += Nb.relevance), Nb = Nb.parent
            } while (Nb !== Mb.parent);
            return Mb.starts && jb(Mb.starts, bb), Tb.returnEnd ? 0 : Ub.length
          }
          let zb = {};

          function xb(Ab, Tb) {
            const Yb = Tb && Tb[0];
            if (Ib += Ab, null == Yb) return Lb(), 0;
            if ("bX" === zb.type && "end" === Tb.type && zb.index === Tb.index && "" === Yb) {
              if (Ib += ab.slice(Tb.index, Tb.index + 1), !Eb) {
                const ab = new Error(`0 width match regex (${bb})`);
                throw ab.languageName = bb, ab.badRule = zb.rule, ab
              }
              return 1
            }
            if (zb = Tb, "bX" === Tb.type) return function(bb) {
              const ab = bb[0],
                Ab = bb.rule,
                Mb = new Ub(Ab),
                Tb = [Ab.__beforeBegin, Ab["on:begin"]];
              for (const Ub of Tb)
                if (Ub && (Ub(bb, Mb), Mb.isMatchIgnored)) return kb(ab);
              return Ab.skip ? Ib += ab : (Ab.excludeBegin && (Ib += ab), Lb(), Ab.returnBegin || Ab.excludeBegin || (Ib = ab)), jb(Ab, bb), Ab.returnBegin ? 0 : ab.length
            }(Tb);
            if ("illegal" === Tb.type && !Mb) {
              const bb = new Error('Illegal lexeme "' + Yb + '" for mode "' + (Nb.scope || "<unnamed>") + '"');
              throw bb.mode = Nb, bb
            }
            if ("end" === Tb.type) {
              const bb = yb(Tb);
              if (bb !== ea) return bb
            }
            if ("illegal" === Tb.type && "" === Yb) return Ib += "\n", 1;
            if (hb > 1e5 && hb > 3 * Tb.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Ib += Yb, Yb.length
          }
          const ib = fb(bb);
          if (!ib) throw nb(Yb.replace("{}", bb)), new Error('Unknown language: "' + bb + '"');
          const mb = Ma(ib);
          let pb = "",
            Nb = Tb || mb;
          const Wb = {},
            Hb = new vb.__emitter(vb);
          ! function() {
            const bb = [];
            for (let ab = Nb; ab !== ib; ab = ab.parent) ab.scope && bb.unshift(ab.scope);
            bb.forEach((bb => Hb.openNode(bb)))
          }();
          let Ib = "",
            db = 0,
            Fb = 0,
            hb = 0,
            Gb = !1;
          try {
            if (ib.__emitTokens) ib.__emitTokens(ab, Hb);
            else {
              for (Nb.matcher.considerAll();;) {
                hb++, Gb ? Gb = !1 : Nb.matcher.considerAll(), Nb.matcher.lastIndex = Fb;
                const bb = Nb.matcher.exec(ab);
                if (!bb) break;
                const Ub = xb(ab.substring(Fb, bb.index), bb);
                Fb = bb.index + Ub
              }
              xb(ab.substring(Fb))
            }
            return Hb.finalize(), pb = Hb.toHTML(), {
              language: bb,
              value: pb,
              relevance: db,
              illegal: !1,
              _emitter: Hb,
              _top: Nb
            }
          } catch (Qb) {
            if (Qb.message && Qb.message.includes("Illegal")) return {
              language: bb,
              value: Ya(ab),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: Qb.message,
                index: Fb,
                context: ab.slice(Fb - 100, Fb + 100),
                mode: Qb.mode,
                resultSoFar: pb
              },
              _emitter: Hb
            };
            if (Eb) return {
              language: bb,
              value: Ya(ab),
              illegal: !1,
              relevance: 0,
              errorRaised: Qb,
              _emitter: Hb,
              _top: Nb
            };
            throw Qb
          }
        }

        function Db(bb, ab) {
          ab = ab || vb.languages || Object.keys(Ab);
          const Ub = function(bb) {
              const ab = {
                value: Ya(bb),
                illegal: !1,
                relevance: 0,
                _top: Bb,
                _emitter: new vb.__emitter(vb)
              };
              return ab._emitter.addText(bb), ab
            }(bb),
            Mb = ab.filter(fb).filter(pb).map((ab => Zb(ab, bb, !1)));
          Mb.unshift(Ub);
          const Tb = Mb.sort(((bb, ab) => {
              if (bb.relevance !== ab.relevance) return ab.relevance - bb.relevance;
              if (bb.language && ab.language) {
                if (fb(bb.language).supersetOf === ab.language) return 1;
                if (fb(ab.language).supersetOf === bb.language) return -1
              }
              return 0
            })),
            [Eb, Yb] = Tb,
            eb = Eb;
          return eb.secondBest = Yb, eb
        }

        function zb(bb) {
          let ab = null;
          const Ub = function(bb) {
            let ab = bb.className + " ";
            ab += bb.parentNode ? bb.parentNode.className : "";
            const Ub = vb.languageDetectRe.exec(ab);
            if (Ub) {
              const ab = fb(Ub[1]);
              return ab || (Sb(Yb.replace("{}", Ub[1])), Sb("Falling back to no-highlight mode for this block.", bb)), ab ? Ub[1] : "no-highlight"
            }
            return ab.split(/\s+/).find((bb => kb(bb) || fb(bb)))
          }(bb);
          if (kb(Ub)) return;
          if (Nb("before:highlightElement", {
              el: bb,
              language: Ub
            }), bb.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", bb);
          if (bb.children.length > 0 && (vb.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(bb)), vb.throwUnescapedHTML)) {
            throw new Ea("One of your code blocks includes unescaped HTML.", bb.innerHTML)
          }
          ab = bb;
          const Ab = ab.textContent,
            Tb = Ub ? yb(Ab, {
              language: Ub,
              ignoreIllegals: !0
            }) : Db(Ab);
          bb.innerHTML = Tb.value, bb.dataset.highlighted = "yes",
            function(bb, ab, Ub) {
              const Ab = ab && Mb[ab] || Ub;
              bb.classList.add("hljs"), bb.classList.add(`language-${Ab}`)
            }(bb, Ub, Tb.language), bb.result = {
              language: Tb.language,
              re: Tb.relevance,
              relevance: Tb.relevance
            }, Tb.secondBest && (bb.secondBest = {
              language: Tb.secondBest.language,
              relevance: Tb.secondBest.relevance
            }), Nb("after:highlightElement", {
              el: bb,
              result: Tb,
              text: Ab
            })
        }
        let xb = !1;

        function ib() {
          if ("loading" === document.readyState) return xb || window.addEventListener("DOMContentLoaded", (function() {
            ib()
          }), !1), void(xb = !0);
          document.querySelectorAll(vb.cssSelector).forEach(zb)
        }

        function fb(bb) {
          return bb = (bb || "").toLowerCase(), Ab[bb] || Ab[Mb[bb]]
        }

        function mb(bb, ab) {
          let {
            languageName: Ub
          } = ab;
          "string" === typeof bb && (bb = [bb]), bb.forEach((bb => {
            Mb[bb.toLowerCase()] = Ub
          }))
        }

        function pb(bb) {
          const ab = fb(bb);
          return ab && !ab.disableAutodetect
        }

        function Nb(bb, ab) {
          const Ub = bb;
          Tb.forEach((function(bb) {
            bb[Ub] && bb[Ub](ab)
          }))
        }
        Object.assign(bb, {
          highlight: yb,
          highlightAuto: Db,
          highlightAll: ib,
          highlightElement: zb,
          highlightBlock: function(bb) {
            return ba("10.7.0", "highlightBlock will be removed entirely in v12.0"), ba("10.7.0", "Please use highlightElement now."), zb(bb)
          },
          configure: function(bb) {
            vb = Ba(vb, bb)
          },
          initHighlighting: () => {
            ib(), ba("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            ib(), ba("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(ab, Ub) {
            let Mb = null;
            try {
              Mb = Ub(bb)
            } catch (Tb) {
              if (nb("Language definition for '{}' could not be registered.".replace("{}", ab)), !Eb) throw Tb;
              nb(Tb), Mb = Bb
            }
            Mb.name || (Mb.name = ab), Ab[ab] = Mb, Mb.rawDefinition = Ub.bind(null, bb), Mb.aliases && mb(Mb.aliases, {
              languageName: ab
            })
          },
          unregisterLanguage: function(bb) {
            delete Ab[bb];
            for (const ab of Object.keys(Mb)) Mb[ab] === bb && delete Mb[ab]
          },
          listLanguages: function() {
            return Object.keys(Ab)
          },
          getLanguage: fb,
          registerAliases: mb,
          autoDetection: pb,
          inherit: Ba,
          addPlugin: function(bb) {
            ! function(bb) {
              bb["before:highlightBlock"] && !bb["before:highlightElement"] && (bb["before:highlightElement"] = ab => {
                bb["before:highlightBlock"](Object.assign({
                  block: ab.el
                }, ab))
              }), bb["after:highlightBlock"] && !bb["after:highlightElement"] && (bb["after:highlightElement"] = ab => {
                bb["after:highlightBlock"](Object.assign({
                  block: ab.el
                }, ab))
              })
            }(bb), Tb.push(bb)
          },
          removePlugin: function(bb) {
            const ab = Tb.indexOf(bb); - 1 !== ab && Tb.splice(ab, 1)
          }
        }), bb.debugMode = function() {
          Eb = !1
        }, bb.safeMode = function() {
          Eb = !0
        }, bb.versionString = "11.11.1", bb.regex = {
          concat: jb,
          lookahead: Lb,
          either: Rb,
          optional: Xb,
          anyNumberOfTimes: Pb
        };
        for (const Ub in Kb) "object" === typeof Kb[Ub] && ab(Kb[Ub]);
        return Object.assign(bb, Kb), bb
      },
      La = va({});
    La.newInstance = () => va({}), bb.exports = La, La.HighlightJS = La, La.default = La
  },
  4399: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    const Ab = Ub(4402)
  },
  4405: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Lb
    });
    const Ab = "[A-Za-z$_][0-9A-Za-z$_]*",
      Mb = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Tb = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Eb = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Yb = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Bb = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      eb = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      vb = [].concat(Bb, Eb, Yb);

    function Lb(bb) {
      const ab = bb.regex,
        Ub = Ab,
        Lb = "<>",
        Pb = "</>",
        Xb = {
          bX: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (bb, ab) => {
            const Ub = bb[0].length + bb.index,
              Ab = bb.input[Ub];
            if ("<" === Ab || "," === Ab) return void ab.ignoreMatch();
            let Mb;
            ">" === Ab && (((bb, ab) => {
              let {
                after: Ub
              } = ab;
              const Ab = "</" + bb[0].slice(1);
              return -1 !== bb.input.indexOf(Ab, Ub)
            })(bb, {
              after: Ub
            }) || ab.ignoreMatch());
            const Tb = bb.input.substring(Ub);
            ((Mb = Tb.match(/^\s*=/)) || (Mb = Tb.match(/^\s+extends\s+/)) && 0 === Mb.index) && ab.ignoreMatch()
          }
        },
        jb = {
          $pattern: Ab,
          keyword: Mb,
          literal: Tb,
          built_in: vb,
          "variable.language": eb
        },
        Rb = "[0-9](_?[0-9])*",
        kb = `\\.(${Rb})`,
        yb = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Zb = {
          className: "number",
          variants: [{
            bX: `(\\b(${yb})((${kb})|\\.)?|(${kb}))[eE][+-]?(${Rb})\\b`
          }, {
            bX: `\\b(${yb})\\b((${kb})\\b|\\.)?|(${kb})\\b`
          }, {
            bX: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            bX: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            bX: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            bX: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            bX: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Db = {
          className: "subst",
          bX: "\\$\\{",
          end: "\\}",
          keywords: jb,
          contains: []
        },
        zb = {
          bX: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Db],
            subLanguage: "xml"
          }
        },
        xb = {
          bX: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Db],
            subLanguage: "css"
          }
        },
        ib = {
          bX: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Db],
            subLanguage: "graphql"
          }
        },
        fb = {
          className: "string",
          bX: "`",
          end: "`",
          contains: [bb.BACKSLASH_ESCAPE, Db]
        },
        mb = {
          className: "comment",
          variants: [bb.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              bX: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                bX: "@[A-Za-z]+"
              }, {
                className: "type",
                bX: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                bX: Ub + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                bX: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), bb.C_BLOCK_COMMENT_MODE, bb.C_LINE_COMMENT_MODE]
        },
        pb = [bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, zb, xb, ib, fb, {
          match: /\$\d+/
        }, Zb];
      Db.contains = pb.concat({
        bX: /\{/,
        end: /\}/,
        keywords: jb,
        contains: ["self"].concat(pb)
      });
      const Nb = [].concat(mb, Db.contains),
        Wb = Nb.concat([{
          bX: /(\s*)\(/,
          end: /\)/,
          keywords: jb,
          contains: ["self"].concat(Nb)
        }]),
        Hb = {
          className: "params",
          bX: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: jb,
          contains: Wb
        },
        Ib = {
          variants: [{
            match: [/class/, /\s+/, Ub, /\s+/, /extends/, /\s+/, ab.concat(Ub, "(", ab.concat(/\./, Ub), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Ub],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        db = {
          relevance: 0,
          match: ab.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Eb, ...Yb]
          }
        },
        Fb = {
          variants: [{
            match: [/function/, /\s+/, Ub, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Hb],
          illegal: /%/
        };
      const hb = {
        match: ab.concat(/\b/, (Gb = [...Bb, "super", "import"].map((bb => `${bb}\\s*\\(`)), ab.concat("(?!", Gb.join("|"), ")")), Ub, ab.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Gb;
      const Qb = {
          bX: ab.concat(/\./, ab.lookahead(ab.concat(Ub, /(?![0-9A-Za-z$_(])/))),
          end: Ub,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        qb = {
          match: [/get|set/, /\s+/, Ub, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            bX: /\(\)/
          }, Hb]
        },
        ub = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + bb.UNDERSCORE_IDENT_RE + ")\\s*=>",
        rb = {
          match: [/const|var|let/, /\s+/, Ub, /\s*/, /=\s*/, /(async\s*)?/, ab.lookahead(ub)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Hb]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: jb,
        exports: {
          PARAMS_CONTAINS: Wb,
          CLASS_REFERENCE: db
        },
        illegal: /#(?![$_A-z])/,
        contains: [bb.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          bX: /^\s*['"]use (strict|asm)['"]/
        }, bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, zb, xb, ib, fb, mb, {
          match: /\$\d+/
        }, Zb, db, {
          scope: "attr",
          match: Ub + ab.lookahead(":"),
          relevance: 0
        }, rb, {
          bX: "(" + bb.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [mb, bb.REGEXP_MODE, {
            className: "function",
            bX: ub,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                bX: bb.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                bX: /\(\s*\)/,
                skip: !0
              }, {
                bX: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: jb,
                contains: Wb
              }]
            }]
          }, {
            bX: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              bX: Lb,
              end: Pb
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              bX: Xb.bX,
              "on:begin": Xb.isTrulyOpeningTag,
              end: Xb.end
            }],
            subLanguage: "xml",
            contains: [{
              bX: Xb.bX,
              end: Xb.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Fb, {
          beginKeywords: "while if switch catch for"
        }, {
          bX: "\\b(?!function)" + bb.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Hb, bb.inherit(bb.TITLE_MODE, {
            bX: Ub,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Qb, {
          match: "\\$" + Ub,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Hb]
        }, hb, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Ib, qb, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4413: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Pb
    });
    const Ab = "[A-Za-z$_][0-9A-Za-z$_]*",
      Mb = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Tb = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Eb = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Yb = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Bb = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      eb = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      vb = [].concat(Bb, Eb, Yb);

    function Lb(bb) {
      const ab = bb.regex,
        Ub = Ab,
        Lb = "<>",
        Pb = "</>",
        Xb = {
          bX: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (bb, ab) => {
            const Ub = bb[0].length + bb.index,
              Ab = bb.input[Ub];
            if ("<" === Ab || "," === Ab) return void ab.ignoreMatch();
            let Mb;
            ">" === Ab && (((bb, ab) => {
              let {
                after: Ub
              } = ab;
              const Ab = "</" + bb[0].slice(1);
              return -1 !== bb.input.indexOf(Ab, Ub)
            })(bb, {
              after: Ub
            }) || ab.ignoreMatch());
            const Tb = bb.input.substring(Ub);
            ((Mb = Tb.match(/^\s*=/)) || (Mb = Tb.match(/^\s+extends\s+/)) && 0 === Mb.index) && ab.ignoreMatch()
          }
        },
        jb = {
          $pattern: Ab,
          keyword: Mb,
          literal: Tb,
          built_in: vb,
          "variable.language": eb
        },
        Rb = "[0-9](_?[0-9])*",
        kb = `\\.(${Rb})`,
        yb = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Zb = {
          className: "number",
          variants: [{
            bX: `(\\b(${yb})((${kb})|\\.)?|(${kb}))[eE][+-]?(${Rb})\\b`
          }, {
            bX: `\\b(${yb})\\b((${kb})\\b|\\.)?|(${kb})\\b`
          }, {
            bX: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            bX: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            bX: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            bX: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            bX: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Db = {
          className: "subst",
          bX: "\\$\\{",
          end: "\\}",
          keywords: jb,
          contains: []
        },
        zb = {
          bX: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Db],
            subLanguage: "xml"
          }
        },
        xb = {
          bX: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Db],
            subLanguage: "css"
          }
        },
        ib = {
          bX: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Db],
            subLanguage: "graphql"
          }
        },
        fb = {
          className: "string",
          bX: "`",
          end: "`",
          contains: [bb.BACKSLASH_ESCAPE, Db]
        },
        mb = {
          className: "comment",
          variants: [bb.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              bX: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                bX: "@[A-Za-z]+"
              }, {
                className: "type",
                bX: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                bX: Ub + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                bX: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), bb.C_BLOCK_COMMENT_MODE, bb.C_LINE_COMMENT_MODE]
        },
        pb = [bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, zb, xb, ib, fb, {
          match: /\$\d+/
        }, Zb];
      Db.contains = pb.concat({
        bX: /\{/,
        end: /\}/,
        keywords: jb,
        contains: ["self"].concat(pb)
      });
      const Nb = [].concat(mb, Db.contains),
        Wb = Nb.concat([{
          bX: /(\s*)\(/,
          end: /\)/,
          keywords: jb,
          contains: ["self"].concat(Nb)
        }]),
        Hb = {
          className: "params",
          bX: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: jb,
          contains: Wb
        },
        Ib = {
          variants: [{
            match: [/class/, /\s+/, Ub, /\s+/, /extends/, /\s+/, ab.concat(Ub, "(", ab.concat(/\./, Ub), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, Ub],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        db = {
          relevance: 0,
          match: ab.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Eb, ...Yb]
          }
        },
        Fb = {
          variants: [{
            match: [/function/, /\s+/, Ub, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Hb],
          illegal: /%/
        };
      const hb = {
        match: ab.concat(/\b/, (Gb = [...Bb, "super", "import"].map((bb => `${bb}\\s*\\(`)), ab.concat("(?!", Gb.join("|"), ")")), Ub, ab.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Gb;
      const Qb = {
          bX: ab.concat(/\./, ab.lookahead(ab.concat(Ub, /(?![0-9A-Za-z$_(])/))),
          end: Ub,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        qb = {
          match: [/get|set/, /\s+/, Ub, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            bX: /\(\)/
          }, Hb]
        },
        ub = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + bb.UNDERSCORE_IDENT_RE + ")\\s*=>",
        rb = {
          match: [/const|var|let/, /\s+/, Ub, /\s*/, /=\s*/, /(async\s*)?/, ab.lookahead(ub)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Hb]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: jb,
        exports: {
          PARAMS_CONTAINS: Wb,
          CLASS_REFERENCE: db
        },
        illegal: /#(?![$_A-z])/,
        contains: [bb.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          bX: /^\s*['"]use (strict|asm)['"]/
        }, bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, zb, xb, ib, fb, mb, {
          match: /\$\d+/
        }, Zb, db, {
          scope: "attr",
          match: Ub + ab.lookahead(":"),
          relevance: 0
        }, rb, {
          bX: "(" + bb.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [mb, bb.REGEXP_MODE, {
            className: "function",
            bX: ub,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                bX: bb.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                bX: /\(\s*\)/,
                skip: !0
              }, {
                bX: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: jb,
                contains: Wb
              }]
            }]
          }, {
            bX: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              bX: Lb,
              end: Pb
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              bX: Xb.bX,
              "on:begin": Xb.isTrulyOpeningTag,
              end: Xb.end
            }],
            subLanguage: "xml",
            contains: [{
              bX: Xb.bX,
              end: Xb.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Fb, {
          beginKeywords: "while if switch catch for"
        }, {
          bX: "\\b(?!function)" + bb.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Hb, bb.inherit(bb.TITLE_MODE, {
            bX: Ub,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Qb, {
          match: "\\$" + Ub,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Hb]
        }, hb, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Ib, qb, {
          match: /\$[(.]/
        }]
      }
    }

    function Pb(bb) {
      const ab = bb.regex,
        Ub = Lb(bb),
        Eb = Ab,
        Yb = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Bb = {
          bX: [/namespace/, /\s+/, bb.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Pb = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: Yb
          },
          contains: [Ub.exports.CLASS_REFERENCE]
        },
        Xb = {
          $pattern: Ab,
          keyword: Mb.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Tb,
          built_in: vb.concat(Yb),
          "variable.language": eb
        },
        jb = {
          className: "meta",
          bX: "@" + Eb
        },
        Rb = (bb, ab, Ub) => {
          const Ab = bb.contains.findIndex((bb => bb.label === ab));
          if (-1 === Ab) throw new Error("can not find mode to replace");
          bb.contains.splice(Ab, 1, Ub)
        };
      Object.assign(Ub.keywords, Xb), Ub.exports.PARAMS_CONTAINS.push(jb);
      const kb = Ub.contains.find((bb => "attr" === bb.scope)),
        yb = Object.assign({}, kb, {
          match: ab.concat(Eb, ab.lookahead(/\s*\?:/))
        });
      Ub.exports.PARAMS_CONTAINS.push([Ub.exports.CLASS_REFERENCE, kb, yb]), Ub.contains = Ub.contains.concat([jb, Bb, Pb, yb]), Rb(Ub, "shebang", bb.SHEBANG()), Rb(Ub, "use_strict", {
        className: "meta",
        relevance: 10,
        bX: /^\s*['"]use strict['"]/
      });
      return Ub.contains.find((bb => "func.def" === bb.label)).relevance = 0, Object.assign(Ub, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), Ub
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);