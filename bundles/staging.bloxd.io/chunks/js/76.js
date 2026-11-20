export const id = 76;
export const ids = [76];
export const modules = {
  4449: bb => {
    function cb(bb) {
      return bb instanceof Map ? bb.clear = bb.delete = bb.set = function() {
        throw new Error("map is read-only")
      } : bb instanceof Set && (bb.add = bb.clear = bb.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(bb), Object.getOwnPropertyNames(bb).forEach((sb => {
        const kb = bb[sb],
          Wb = typeof kb;
        "object" !== Wb && "function" !== Wb || Object.isFrozen(kb) || cb(kb)
      })), bb
    }
    class sb {
      constructor(bb) {
        void 0 === bb.data && (bb.data = {}), this.data = bb.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function kb(bb) {
      return bb.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function Wb(bb) {
      const cb = Object.create(null);
      for (const ab in bb) cb[ab] = bb[ab];
      for (var sb = arguments.length, kb = new Array(sb > 1 ? sb - 1 : 0), Wb = 1; Wb < sb; Wb++) kb[Wb - 1] = arguments[Wb];
      return kb.forEach((function(bb) {
        for (const sb in bb) cb[sb] = bb[sb]
      })), cb
    }
    const ab = bb => !!bb.scope;
    class Tb {
      constructor(bb, cb) {
        this.buffer = "", this.classPrefix = cb.classPrefix, bb.walk(this)
      }
      addText(bb) {
        this.buffer += kb(bb)
      }
      openNode(bb) {
        if (!ab(bb)) return;
        const cb = ((bb, cb) => {
          let {
            prefix: sb
          } = cb;
          if (bb.startsWith("language:")) return bb.replace("language:", "language-");
          if (bb.includes(".")) {
            const cb = bb.split(".");
            return [`${sb}${cb.shift()}`, ...cb.map(((bb, cb) => `${bb}${"_".repeat(cb+1)}`))].join(" ")
          }
          return `${sb}${bb}`
        })(bb.scope, {
          prefix: this.classPrefix
        });
        this.span(cb)
      }
      closeNode(bb) {
        ab(bb) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(bb) {
        this.buffer += `<span class="${bb}">`
      }
    }
    const Ub = function() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const cb = {
        children: []
      };
      return Object.assign(cb, bb), cb
    };
    class Ib {
      constructor() {
        this.kN = Ub(), this.stack = [this.kN]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.kN
      }
      add(bb) {
        this.top.children.push(bb)
      }
      openNode(bb) {
        const cb = Ub({
          scope: bb
        });
        this.add(cb), this.stack.push(cb)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.kN, null, 4)
      }
      walk(bb) {
        return this.constructor._walk(bb, this.kN)
      }
      static _walk(bb, cb) {
        return "string" === typeof cb ? bb.addText(cb) : cb.children && (bb.openNode(cb), cb.children.forEach((cb => this._walk(bb, cb))), bb.closeNode(cb)), bb
      }
      static _collapse(bb) {
        "string" !== typeof bb && bb.children && (bb.children.every((bb => "string" === typeof bb)) ? bb.children = [bb.children.join("")] : bb.children.forEach((bb => {
          Ib._collapse(bb)
        })))
      }
    }
    class Hb extends Ib {
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
      __addSublanguage(bb, cb) {
        const sb = bb.root;
        cb && (sb.scope = `language:${cb}`), this.add(sb)
      }
      toHTML() {
        return new Tb(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function fb(bb) {
      return bb ? "string" === typeof bb ? bb : bb.source : null
    }

    function Mb(bb) {
      return mb("(?=", bb, ")")
    }

    function Xb(bb) {
      return mb("(?:", bb, ")*")
    }

    function nb(bb) {
      return mb("(?:", bb, ")?")
    }

    function mb() {
      for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
      return cb.map((bb => fb(bb))).join("")
    }

    function lb() {
      for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
      const kb = function(bb) {
        const cb = bb[bb.length - 1];
        return "object" === typeof cb && cb.constructor === Object ? (bb.splice(bb.length - 1, 1), cb) : {}
      }(cb);
      return "(" + (kb.capture ? "" : "?:") + cb.map((bb => fb(bb))).join("|") + ")"
    }

    function Qb(bb) {
      return new RegExp(bb.toString() + "|").exec("").length - 1
    }
    const eb = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Cb(bb, cb) {
      let {
        joinWith: sb
      } = cb, kb = 0;
      return bb.map((bb => {
        kb += 1;
        const cb = kb;
        let sb = fb(bb),
          Wb = "";
        for (; sb.length > 0;) {
          const bb = eb.exec(sb);
          if (!bb) {
            Wb += sb;
            break
          }
          Wb += sb.substring(0, bb.index), sb = sb.substring(bb.index + bb[0].length), "\\" === bb[0][0] && bb[1] ? Wb += "\\" + String(Number(bb[1]) + cb) : (Wb += bb[0], "(" === bb[0] && kb++)
        }
        return Wb
      })).map((bb => `(${bb})`)).join(sb)
    }
    const Nb = "[a-zA-Z]\\w*",
      Vb = "[a-zA-Z_]\\w*",
      Lb = "\\b\\d+(\\.\\d+)?",
      ub = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Yb = "\\b(0b[01]+)",
      hb = {
        Bn: "\\\\[\\s\\S]",
        relevance: 0
      },
      Jb = {
        scope: "string",
        Bn: "'",
        end: "'",
        illegal: "\\n",
        contains: [hb]
      },
      gb = {
        scope: "string",
        Bn: '"',
        end: '"',
        illegal: "\\n",
        contains: [hb]
      },
      Bb = function(bb, cb) {
        const sb = Wb({
          scope: "comment",
          Bn: bb,
          end: cb,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        sb.contains.push({
          scope: "doctag",
          Bn: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const kb = lb("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return sb.contains.push({
          Bn: mb(/[ ]+/, "(", kb, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), sb
      },
      tb = Bb("//", "$"),
      yb = Bb("/\\*", "\\*/"),
      Pb = Bb("#", "$"),
      Db = {
        scope: "number",
        Bn: Lb,
        relevance: 0
      },
      Eb = {
        scope: "number",
        Bn: ub,
        relevance: 0
      },
      ib = {
        scope: "number",
        Bn: Yb,
        relevance: 0
      },
      Ob = {
        scope: "regexp",
        Bn: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [hb, {
          Bn: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [hb]
        }]
      },
      Gb = {
        scope: "title",
        Bn: Nb,
        relevance: 0
      },
      Kb = {
        scope: "title",
        Bn: Vb,
        relevance: 0
      },
      Zb = {
        Bn: "\\.\\s*" + Vb,
        relevance: 0
      };
    var zb = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: Jb,
      BACKSLASH_ESCAPE: hb,
      BINARY_NUMBER_MODE: ib,
      BINARY_NUMBER_RE: Yb,
      COMMENT: Bb,
      C_BLOCK_COMMENT_MODE: yb,
      C_LINE_COMMENT_MODE: tb,
      C_NUMBER_MODE: Eb,
      C_NUMBER_RE: ub,
      END_SAME_AS_BEGIN: function(bb) {
        return Object.assign(bb, {
          "on:begin": (bb, cb) => {
            cb.data._beginMatch = bb[1]
          },
          "on:end": (bb, cb) => {
            cb.data._beginMatch !== bb[1] && cb.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Pb,
      IDENT_RE: Nb,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: Zb,
      NUMBER_MODE: Db,
      NUMBER_RE: Lb,
      PHRASAL_WORDS_MODE: {
        Bn: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: gb,
      REGEXP_MODE: Ob,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const cb = /^#![ ]*\//;
        return bb.binary && (bb.Bn = mb(cb, /.*\b/, bb.binary, /\b.*/)), Wb({
          scope: "meta",
          Bn: cb,
          end: /$/,
          relevance: 0,
          "on:begin": (bb, cb) => {
            0 !== bb.index && cb.ignoreMatch()
          }
        }, bb)
      },
      TITLE_MODE: Gb,
      UNDERSCORE_IDENT_RE: Vb,
      UNDERSCORE_TITLE_MODE: Kb
    });

    function qb(bb, cb) {
      "." === bb.input[bb.index - 1] && cb.ignoreMatch()
    }

    function db(bb, cb) {
      void 0 !== bb.className && (bb.scope = bb.className, delete bb.className)
    }

    function Ab(bb, cb) {
      cb && bb.beginKeywords && (bb.Bn = "\\b(" + bb.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", bb.__beforeBegin = qb, bb.keywords = bb.keywords || bb.beginKeywords, delete bb.beginKeywords, void 0 === bb.relevance && (bb.relevance = 0))
    }

    function wb(bb, cb) {
      Array.isArray(bb.illegal) && (bb.illegal = lb(...bb.illegal))
    }

    function rb(bb, cb) {
      if (bb.match) {
        if (bb.Bn || bb.end) throw new Error("begin & end are not supported with match");
        bb.Bn = bb.match, delete bb.match
      }
    }

    function ob(bb, cb) {
      void 0 === bb.relevance && (bb.relevance = 1)
    }
    const Sb = (bb, cb) => {
        if (!bb.beforeMatch) return;
        if (bb.starts) throw new Error("beforeMatch cannot be used with starts");
        const sb = Object.assign({}, bb);
        Object.keys(bb).forEach((cb => {
          delete bb[cb]
        })), bb.keywords = sb.keywords, bb.Bn = mb(sb.beforeMatch, Mb(sb.Bn)), bb.starts = {
          relevance: 0,
          contains: [Object.assign(sb, {
            endsParent: !0
          })]
        }, bb.relevance = 0, delete sb.beforeMatch
      },
      Rb = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function vb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const kb = Object.create(null);
      return "string" === typeof bb ? Wb(sb, bb.split(" ")) : Array.isArray(bb) ? Wb(sb, bb) : Object.keys(bb).forEach((function(sb) {
        Object.assign(kb, vb(bb[sb], cb, sb))
      })), kb;

      function Wb(bb, sb) {
        cb && (sb = sb.map((bb => bb.toLowerCase()))), sb.forEach((function(cb) {
          const sb = cb.split("|");
          kb[sb[0]] = [bb, Fb(sb[0], sb[1])]
        }))
      }
    }

    function Fb(bb, cb) {
      return cb ? Number(cb) : function(bb) {
        return Rb.includes(bb.toLowerCase())
      }(bb) ? 0 : 1
    }
    const xb = {},
      jb = bb => {
        console.error(bb)
      },
      pb = function(bb) {
        for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
        console.log(`WARN: ${bb}`, ...sb)
      },
      bc = (bb, cb) => {
        xb[`${bb}/${cb}`] || (console.log(`Deprecated as of ${bb}. ${cb}`), xb[`${bb}/${cb}`] = !0)
      },
      cc = new Error;

    function sc(bb, cb, sb) {
      let {
        key: kb
      } = sb, Wb = 0;
      const ab = bb[kb],
        Tb = {},
        Ub = {};
      for (let Ib = 1; Ib <= cb.length; Ib++) Ub[Ib + Wb] = ab[Ib], Tb[Ib + Wb] = !0, Wb += Qb(cb[Ib - 1]);
      bb[kb] = Ub, bb[kb]._emit = Tb, bb[kb]._multi = !0
    }

    function kc(bb) {
      ! function(bb) {
        bb.scope && "object" === typeof bb.scope && null !== bb.scope && (bb.beginScope = bb.scope, delete bb.scope)
      }(bb), "string" === typeof bb.beginScope && (bb.beginScope = {
          _wrap: bb.beginScope
        }), "string" === typeof bb.endScope && (bb.endScope = {
          _wrap: bb.endScope
        }),
        function(bb) {
          if (Array.isArray(bb.Bn)) {
            if (bb.skip || bb.excludeBegin || bb.returnBegin) throw jb("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), cc;
            if ("object" !== typeof bb.beginScope || null === bb.beginScope) throw jb("beginScope must be object"), cc;
            sc(bb, bb.Bn, {
              key: "beginScope"
            }), bb.Bn = Cb(bb.Bn, {
              joinWith: ""
            })
          }
        }(bb),
        function(bb) {
          if (Array.isArray(bb.end)) {
            if (bb.skip || bb.excludeEnd || bb.returnEnd) throw jb("skip, excludeEnd, returnEnd not compatible with endScope: {}"), cc;
            if ("object" !== typeof bb.endScope || null === bb.endScope) throw jb("endScope must be object"), cc;
            sc(bb, bb.end, {
              key: "endScope"
            }), bb.end = Cb(bb.end, {
              joinWith: ""
            })
          }
        }(bb)
    }

    function Wc(bb) {
      function cb(cb, sb) {
        return new RegExp(fb(cb), "m" + (bb.case_insensitive ? "i" : "") + (bb.unicodeRegex ? "u" : "") + (sb ? "g" : ""))
      }
      class sb {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(bb, cb) {
          cb.position = this.position++, this.matchIndexes[this.matchAt] = cb, this.regexes.push([cb, bb]), this.matchAt += Qb(bb) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const bb = this.regexes.map((bb => bb[1]));
          this.matcherRe = cb(Cb(bb, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(bb) {
          this.matcherRe.lastIndex = this.lastIndex;
          const cb = this.matcherRe.exec(bb);
          if (!cb) return null;
          const sb = cb.findIndex(((bb, cb) => cb > 0 && void 0 !== bb)),
            kb = this.matchIndexes[sb];
          return cb.splice(0, sb), Object.assign(cb, kb)
        }
      }
      class kb {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(bb) {
          if (this.multiRegexes[bb]) return this.multiRegexes[bb];
          const cb = new sb;
          return this.rules.slice(bb).forEach((bb => {
            let [sb, kb] = bb;
            return cb.addRule(sb, kb)
          })), cb.compile(), this.multiRegexes[bb] = cb, cb
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(bb, cb) {
          this.rules.push([bb, cb]), "Bn" === cb.type && this.count++
        }
        exec(bb) {
          const cb = this.getMatcher(this.regexIndex);
          cb.lastIndex = this.lastIndex;
          let sb = cb.exec(bb);
          if (this.resumingScanAtSamePosition())
            if (sb && sb.index === this.lastIndex);
            else {
              const cb = this.getMatcher(0);
              cb.lastIndex = this.lastIndex + 1, sb = cb.exec(bb)
            } return sb && (this.regexIndex += sb.position + 1, this.regexIndex === this.count && this.considerAll()), sb
        }
      }
      if (bb.compilerExtensions || (bb.compilerExtensions = []), bb.contains && bb.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return bb.classNameAliases = Wb(bb.classNameAliases || {}),
        function sb(ab, Tb) {
          const Ub = ab;
          if (ab.isCompiled) return Ub;
          [db, rb, kc, Sb].forEach((bb => bb(ab, Tb))), bb.compilerExtensions.forEach((bb => bb(ab, Tb))), ab.__beforeBegin = null, [Ab, wb, ob].forEach((bb => bb(ab, Tb))), ab.isCompiled = !0;
          let Ib = null;
          return "object" === typeof ab.keywords && ab.keywords.$pattern && (ab.keywords = Object.assign({}, ab.keywords), Ib = ab.keywords.$pattern, delete ab.keywords.$pattern), Ib = Ib || /\w+/, ab.keywords && (ab.keywords = vb(ab.keywords, bb.case_insensitive)), Ub.keywordPatternRe = cb(Ib, !0), Tb && (ab.Bn || (ab.Bn = /\B|\b/), Ub.beginRe = cb(Ub.Bn), ab.end || ab.endsWithParent || (ab.end = /\B|\b/), ab.end && (Ub.endRe = cb(Ub.end)), Ub.terminatorEnd = fb(Ub.end) || "", ab.endsWithParent && Tb.terminatorEnd && (Ub.terminatorEnd += (ab.end ? "|" : "") + Tb.terminatorEnd)), ab.illegal && (Ub.illegalRe = cb(ab.illegal)), ab.contains || (ab.contains = []), ab.contains = [].concat(...ab.contains.map((function(bb) {
            return function(bb) {
              bb.variants && !bb.cachedVariants && (bb.cachedVariants = bb.variants.map((function(cb) {
                return Wb(bb, {
                  variants: null
                }, cb)
              })));
              if (bb.cachedVariants) return bb.cachedVariants;
              if (ac(bb)) return Wb(bb, {
                starts: bb.starts ? Wb(bb.starts) : null
              });
              if (Object.isFrozen(bb)) return Wb(bb);
              return bb
            }("self" === bb ? ab : bb)
          }))), ab.contains.forEach((function(bb) {
            sb(bb, Ub)
          })), ab.starts && sb(ab.starts, Tb), Ub.matcher = function(bb) {
            const cb = new kb;
            return bb.contains.forEach((bb => cb.addRule(bb.Bn, {
              rule: bb,
              type: "Bn"
            }))), bb.terminatorEnd && cb.addRule(bb.terminatorEnd, {
              type: "end"
            }), bb.illegal && cb.addRule(bb.illegal, {
              type: "illegal"
            }), cb
          }(Ub), Ub
        }(bb)
    }

    function ac(bb) {
      return !!bb && (bb.endsWithParent || ac(bb.starts))
    }
    class Tc extends Error {
      constructor(bb, cb) {
        super(bb), this.name = "HTMLInjectionError", this.html = cb
      }
    }
    const Uc = kb,
      Ic = Wb,
      Hc = Symbol("nomatch"),
      fc = function(bb) {
        const kb = Object.create(null),
          Wb = Object.create(null),
          ab = [];
        let Tb = !0;
        const Ub = "Could not find the language '{}', did you forget to load/include a language module?",
          Ib = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let fb = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Hb
        };

        function Qb(bb) {
          return fb.noHighlightRe.test(bb)
        }

        function eb(bb, cb, sb) {
          let kb = "",
            Wb = "";
          "object" === typeof cb ? (kb = bb, sb = cb.ignoreIllegals, Wb = cb.language) : (bc("10.7.0", "highlight(lang, code, ...args) has been deprecated."), bc("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), Wb = bb, kb = cb), void 0 === sb && (sb = !0);
          const ab = {
            code: kb,
            language: Wb
          };
          gb("before:highlight", ab);
          const Tb = ab.result ? ab.result : Cb(ab.language, ab.code, sb);
          return Tb.code = ab.code, gb("after:highlight", Tb), Tb
        }

        function Cb(bb, cb, Wb, ab) {
          const Ib = Object.create(null);

          function Hb() {
            if (!gb.keywords) return void tb.addText(yb);
            let bb = 0;
            gb.keywordPatternRe.lastIndex = 0;
            let cb = gb.keywordPatternRe.exec(yb),
              sb = "";
            for (; cb;) {
              sb += yb.substring(bb, cb.index);
              const Wb = ub.case_insensitive ? cb[0].toLowerCase() : cb[0],
                ab = (kb = Wb, gb.keywords[kb]);
              if (ab) {
                const [bb, kb] = ab;
                if (tb.addText(sb), sb = "", Ib[Wb] = (Ib[Wb] || 0) + 1, Ib[Wb] <= 7 && (Pb += kb), bb.startsWith("_")) sb += cb[0];
                else {
                  const sb = ub.classNameAliases[bb] || bb;
                  Xb(cb[0], sb)
                }
              } else sb += cb[0];
              bb = gb.keywordPatternRe.lastIndex, cb = gb.keywordPatternRe.exec(yb)
            }
            var kb;
            sb += yb.substring(bb), tb.addText(sb)
          }

          function Mb() {
            null != gb.subLanguage ? function() {
              if ("" === yb) return;
              let bb = null;
              if ("string" === typeof gb.subLanguage) {
                if (!kb[gb.subLanguage]) return void tb.addText(yb);
                bb = Cb(gb.subLanguage, yb, !0, Bb[gb.subLanguage]), Bb[gb.subLanguage] = bb._top
              } else bb = Nb(yb, gb.subLanguage.length ? gb.subLanguage : null);
              gb.relevance > 0 && (Pb += bb.relevance), tb.__addSublanguage(bb._emitter, bb.language)
            }() : Hb(), yb = ""
          }

          function Xb(bb, cb) {
            "" !== bb && (tb.startScope(cb), tb.addText(bb), tb.endScope())
          }

          function nb(bb, cb) {
            let sb = 1;
            const kb = cb.length - 1;
            for (; sb <= kb;) {
              if (!bb._emit[sb]) {
                sb++;
                continue
              }
              const kb = ub.classNameAliases[bb[sb]] || bb[sb],
                Wb = cb[sb];
              kb ? Xb(Wb, kb) : (yb = Wb, Hb(), yb = ""), sb++
            }
          }

          function mb(bb, cb) {
            return bb.scope && "string" === typeof bb.scope && tb.openNode(ub.classNameAliases[bb.scope] || bb.scope), bb.beginScope && (bb.beginScope._wrap ? (Xb(yb, ub.classNameAliases[bb.beginScope._wrap] || bb.beginScope._wrap), yb = "") : bb.beginScope._multi && (nb(bb.beginScope, cb), yb = "")), gb = Object.create(bb, {
              parent: {
                value: gb
              }
            }), gb
          }

          function lb(bb, cb, kb) {
            let Wb = function(bb, cb) {
              const sb = bb && bb.exec(cb);
              return sb && 0 === sb.index
            }(bb.endRe, kb);
            if (Wb) {
              if (bb["on:end"]) {
                const kb = new sb(bb);
                bb["on:end"](cb, kb), kb.isMatchIgnored && (Wb = !1)
              }
              if (Wb) {
                for (; bb.endsParent && bb.parent;) bb = bb.parent;
                return bb
              }
            }
            if (bb.endsWithParent) return lb(bb.parent, cb, kb)
          }

          function Qb(bb) {
            return 0 === gb.matcher.regexIndex ? (yb += bb[0], 1) : (ib = !0, 0)
          }

          function eb(bb) {
            const sb = bb[0],
              kb = cb.substring(bb.index),
              Wb = lb(gb, bb, kb);
            if (!Wb) return Hc;
            const ab = gb;
            gb.endScope && gb.endScope._wrap ? (Mb(), Xb(sb, gb.endScope._wrap)) : gb.endScope && gb.endScope._multi ? (Mb(), nb(gb.endScope, bb)) : ab.skip ? yb += sb : (ab.returnEnd || ab.excludeEnd || (yb += sb), Mb(), ab.excludeEnd && (yb = sb));
            do {
              gb.scope && tb.closeNode(), gb.skip || gb.subLanguage || (Pb += gb.relevance), gb = gb.parent
            } while (gb !== Wb.parent);
            return Wb.starts && mb(Wb.starts, bb), ab.returnEnd ? 0 : sb.length
          }
          let Vb = {};

          function Lb(kb, ab) {
            const Ub = ab && ab[0];
            if (yb += kb, null == Ub) return Mb(), 0;
            if ("Bn" === Vb.type && "end" === ab.type && Vb.index === ab.index && "" === Ub) {
              if (yb += cb.slice(ab.index, ab.index + 1), !Tb) {
                const cb = new Error(`0 width match regex (${bb})`);
                throw cb.languageName = bb, cb.badRule = Vb.rule, cb
              }
              return 1
            }
            if (Vb = ab, "Bn" === ab.type) return function(bb) {
              const cb = bb[0],
                kb = bb.rule,
                Wb = new sb(kb),
                ab = [kb.__beforeBegin, kb["on:begin"]];
              for (const sb of ab)
                if (sb && (sb(bb, Wb), Wb.isMatchIgnored)) return Qb(cb);
              return kb.skip ? yb += cb : (kb.excludeBegin && (yb += cb), Mb(), kb.returnBegin || kb.excludeBegin || (yb = cb)), mb(kb, bb), kb.returnBegin ? 0 : cb.length
            }(ab);
            if ("illegal" === ab.type && !Wb) {
              const bb = new Error('Illegal lexeme "' + Ub + '" for mode "' + (gb.scope || "<unnamed>") + '"');
              throw bb.mode = gb, bb
            }
            if ("end" === ab.type) {
              const bb = eb(ab);
              if (bb !== Hc) return bb
            }
            if ("illegal" === ab.type && "" === Ub) return yb += "\n", 1;
            if (Eb > 1e5 && Eb > 3 * ab.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return yb += Ub, Ub.length
          }
          const ub = Yb(bb);
          if (!ub) throw jb(Ub.replace("{}", bb)), new Error('Unknown language: "' + bb + '"');
          const hb = Wc(ub);
          let Jb = "",
            gb = ab || hb;
          const Bb = {},
            tb = new fb.__emitter(fb);
          ! function() {
            const bb = [];
            for (let cb = gb; cb !== ub; cb = cb.parent) cb.scope && bb.unshift(cb.scope);
            bb.forEach((bb => tb.openNode(bb)))
          }();
          let yb = "",
            Pb = 0,
            Db = 0,
            Eb = 0,
            ib = !1;
          try {
            if (ub.__emitTokens) ub.__emitTokens(cb, tb);
            else {
              for (gb.matcher.considerAll();;) {
                Eb++, ib ? ib = !1 : gb.matcher.considerAll(), gb.matcher.lastIndex = Db;
                const bb = gb.matcher.exec(cb);
                if (!bb) break;
                const sb = Lb(cb.substring(Db, bb.index), bb);
                Db = bb.index + sb
              }
              Lb(cb.substring(Db))
            }
            return tb.finalize(), Jb = tb.toHTML(), {
              language: bb,
              value: Jb,
              relevance: Pb,
              illegal: !1,
              _emitter: tb,
              _top: gb
            }
          } catch (Ob) {
            if (Ob.message && Ob.message.includes("Illegal")) return {
              language: bb,
              value: Uc(cb),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: Ob.message,
                index: Db,
                context: cb.slice(Db - 100, Db + 100),
                mode: Ob.mode,
                resultSoFar: Jb
              },
              _emitter: tb
            };
            if (Tb) return {
              language: bb,
              value: Uc(cb),
              illegal: !1,
              relevance: 0,
              errorRaised: Ob,
              _emitter: tb,
              _top: gb
            };
            throw Ob
          }
        }

        function Nb(bb, cb) {
          cb = cb || fb.languages || Object.keys(kb);
          const sb = function(bb) {
              const cb = {
                value: Uc(bb),
                illegal: !1,
                relevance: 0,
                _top: Ib,
                _emitter: new fb.__emitter(fb)
              };
              return cb._emitter.addText(bb), cb
            }(bb),
            Wb = cb.filter(Yb).filter(Jb).map((cb => Cb(cb, bb, !1)));
          Wb.unshift(sb);
          const ab = Wb.sort(((bb, cb) => {
              if (bb.relevance !== cb.relevance) return cb.relevance - bb.relevance;
              if (bb.language && cb.language) {
                if (Yb(bb.language).supersetOf === cb.language) return 1;
                if (Yb(cb.language).supersetOf === bb.language) return -1
              }
              return 0
            })),
            [Tb, Ub] = ab,
            Hb = Tb;
          return Hb.secondBest = Ub, Hb
        }

        function Vb(bb) {
          let cb = null;
          const sb = function(bb) {
            let cb = bb.className + " ";
            cb += bb.parentNode ? bb.parentNode.className : "";
            const sb = fb.languageDetectRe.exec(cb);
            if (sb) {
              const cb = Yb(sb[1]);
              return cb || (pb(Ub.replace("{}", sb[1])), pb("Falling back to no-highlight mode for this block.", bb)), cb ? sb[1] : "no-highlight"
            }
            return cb.split(/\s+/).find((bb => Qb(bb) || Yb(bb)))
          }(bb);
          if (Qb(sb)) return;
          if (gb("before:highlightElement", {
              el: bb,
              language: sb
            }), bb.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", bb);
          if (bb.children.length > 0 && (fb.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(bb)), fb.throwUnescapedHTML)) {
            throw new Tc("One of your code blocks includes unescaped HTML.", bb.innerHTML)
          }
          cb = bb;
          const kb = cb.textContent,
            ab = sb ? eb(kb, {
              language: sb,
              ignoreIllegals: !0
            }) : Nb(kb);
          bb.innerHTML = ab.value, bb.dataset.highlighted = "yes",
            function(bb, cb, sb) {
              const kb = cb && Wb[cb] || sb;
              bb.classList.add("hljs"), bb.classList.add(`language-${kb}`)
            }(bb, sb, ab.language), bb.result = {
              language: ab.language,
              re: ab.relevance,
              relevance: ab.relevance
            }, ab.secondBest && (bb.secondBest = {
              language: ab.secondBest.language,
              relevance: ab.secondBest.relevance
            }), gb("after:highlightElement", {
              el: bb,
              result: ab,
              text: kb
            })
        }
        let Lb = !1;

        function ub() {
          if ("loading" === document.readyState) return Lb || window.addEventListener("DOMContentLoaded", (function() {
            ub()
          }), !1), void(Lb = !0);
          document.querySelectorAll(fb.cssSelector).forEach(Vb)
        }

        function Yb(bb) {
          return bb = (bb || "").toLowerCase(), kb[bb] || kb[Wb[bb]]
        }

        function hb(bb, cb) {
          let {
            languageName: sb
          } = cb;
          "string" === typeof bb && (bb = [bb]), bb.forEach((bb => {
            Wb[bb.toLowerCase()] = sb
          }))
        }

        function Jb(bb) {
          const cb = Yb(bb);
          return cb && !cb.disableAutodetect
        }

        function gb(bb, cb) {
          const sb = bb;
          ab.forEach((function(bb) {
            bb[sb] && bb[sb](cb)
          }))
        }
        Object.assign(bb, {
          highlight: eb,
          highlightAuto: Nb,
          highlightAll: ub,
          highlightElement: Vb,
          highlightBlock: function(bb) {
            return bc("10.7.0", "highlightBlock will be removed entirely in v12.0"), bc("10.7.0", "Please use highlightElement now."), Vb(bb)
          },
          configure: function(bb) {
            fb = Ic(fb, bb)
          },
          initHighlighting: () => {
            ub(), bc("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            ub(), bc("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(cb, sb) {
            let Wb = null;
            try {
              Wb = sb(bb)
            } catch (ab) {
              if (jb("Language definition for '{}' could not be registered.".replace("{}", cb)), !Tb) throw ab;
              jb(ab), Wb = Ib
            }
            Wb.name || (Wb.name = cb), kb[cb] = Wb, Wb.rawDefinition = sb.bind(null, bb), Wb.aliases && hb(Wb.aliases, {
              languageName: cb
            })
          },
          unregisterLanguage: function(bb) {
            delete kb[bb];
            for (const cb of Object.keys(Wb)) Wb[cb] === bb && delete Wb[cb]
          },
          listLanguages: function() {
            return Object.keys(kb)
          },
          getLanguage: Yb,
          registerAliases: hb,
          autoDetection: Jb,
          inherit: Ic,
          addPlugin: function(bb) {
            ! function(bb) {
              bb["before:highlightBlock"] && !bb["before:highlightElement"] && (bb["before:highlightElement"] = cb => {
                bb["before:highlightBlock"](Object.assign({
                  block: cb.el
                }, cb))
              }), bb["after:highlightBlock"] && !bb["after:highlightElement"] && (bb["after:highlightElement"] = cb => {
                bb["after:highlightBlock"](Object.assign({
                  block: cb.el
                }, cb))
              })
            }(bb), ab.push(bb)
          },
          removePlugin: function(bb) {
            const cb = ab.indexOf(bb); - 1 !== cb && ab.splice(cb, 1)
          }
        }), bb.debugMode = function() {
          Tb = !1
        }, bb.safeMode = function() {
          Tb = !0
        }, bb.versionString = "11.11.1", bb.regex = {
          concat: mb,
          lookahead: Mb,
          either: lb,
          optional: nb,
          anyNumberOfTimes: Xb
        };
        for (const sb in zb) "object" === typeof zb[sb] && cb(zb[sb]);
        return Object.assign(bb, zb), bb
      },
      Mc = fc({});
    Mc.newInstance = () => fc({}), bb.exports = Mc, Mc.HighlightJS = Mc, Mc.default = Mc
  },
  4441: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    const kb = sb(4449)
  },
  4451: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Mb
    });
    const kb = "[A-Za-z$_][0-9A-Za-z$_]*",
      Wb = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      ab = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Tb = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Ub = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Ib = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Hb = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      fb = [].concat(Ib, Tb, Ub);

    function Mb(bb) {
      const cb = bb.regex,
        sb = kb,
        Mb = "<>",
        Xb = "</>",
        nb = {
          Bn: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (bb, cb) => {
            const sb = bb[0].length + bb.index,
              kb = bb.input[sb];
            if ("<" === kb || "," === kb) return void cb.ignoreMatch();
            let Wb;
            ">" === kb && (((bb, cb) => {
              let {
                after: sb
              } = cb;
              const kb = "</" + bb[0].slice(1);
              return -1 !== bb.input.indexOf(kb, sb)
            })(bb, {
              after: sb
            }) || cb.ignoreMatch());
            const ab = bb.input.substring(sb);
            ((Wb = ab.match(/^\s*=/)) || (Wb = ab.match(/^\s+extends\s+/)) && 0 === Wb.index) && cb.ignoreMatch()
          }
        },
        mb = {
          $pattern: kb,
          keyword: Wb,
          literal: ab,
          built_in: fb,
          "variable.language": Hb
        },
        lb = "[0-9](_?[0-9])*",
        Qb = `\\.(${lb})`,
        eb = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Cb = {
          className: "number",
          variants: [{
            Bn: `(\\b(${eb})((${Qb})|\\.)?|(${Qb}))[eE][+-]?(${lb})\\b`
          }, {
            Bn: `\\b(${eb})\\b((${Qb})\\b|\\.)?|(${Qb})\\b`
          }, {
            Bn: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Bn: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Bn: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Bn: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Bn: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Nb = {
          className: "subst",
          Bn: "\\$\\{",
          end: "\\}",
          keywords: mb,
          contains: []
        },
        Vb = {
          Bn: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Nb],
            subLanguage: "xml"
          }
        },
        Lb = {
          Bn: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Nb],
            subLanguage: "css"
          }
        },
        ub = {
          Bn: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Nb],
            subLanguage: "graphql"
          }
        },
        Yb = {
          className: "string",
          Bn: "`",
          end: "`",
          contains: [bb.BACKSLASH_ESCAPE, Nb]
        },
        hb = {
          className: "comment",
          variants: [bb.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Bn: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Bn: "@[A-Za-z]+"
              }, {
                className: "type",
                Bn: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Bn: sb + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Bn: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), bb.C_BLOCK_COMMENT_MODE, bb.C_LINE_COMMENT_MODE]
        },
        Jb = [bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, Vb, Lb, ub, Yb, {
          match: /\$\d+/
        }, Cb];
      Nb.contains = Jb.concat({
        Bn: /\{/,
        end: /\}/,
        keywords: mb,
        contains: ["self"].concat(Jb)
      });
      const gb = [].concat(hb, Nb.contains),
        Bb = gb.concat([{
          Bn: /(\s*)\(/,
          end: /\)/,
          keywords: mb,
          contains: ["self"].concat(gb)
        }]),
        tb = {
          className: "params",
          Bn: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: mb,
          contains: Bb
        },
        yb = {
          variants: [{
            match: [/class/, /\s+/, sb, /\s+/, /extends/, /\s+/, cb.concat(sb, "(", cb.concat(/\./, sb), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, sb],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Pb = {
          relevance: 0,
          match: cb.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Tb, ...Ub]
          }
        },
        Db = {
          variants: [{
            match: [/function/, /\s+/, sb, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [tb],
          illegal: /%/
        };
      const Eb = {
        match: cb.concat(/\b/, (ib = [...Ib, "super", "import"].map((bb => `${bb}\\s*\\(`)), cb.concat("(?!", ib.join("|"), ")")), sb, cb.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var ib;
      const Ob = {
          Bn: cb.concat(/\./, cb.lookahead(cb.concat(sb, /(?![0-9A-Za-z$_(])/))),
          end: sb,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Gb = {
          match: [/get|set/, /\s+/, sb, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Bn: /\(\)/
          }, tb]
        },
        Kb = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + bb.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Zb = {
          match: [/const|var|let/, /\s+/, sb, /\s*/, /=\s*/, /(async\s*)?/, cb.lookahead(Kb)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [tb]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: mb,
        exports: {
          PARAMS_CONTAINS: Bb,
          CLASS_REFERENCE: Pb
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
          Bn: /^\s*['"]use (strict|asm)['"]/
        }, bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, Vb, Lb, ub, Yb, hb, {
          match: /\$\d+/
        }, Cb, Pb, {
          scope: "attr",
          match: sb + cb.lookahead(":"),
          relevance: 0
        }, Zb, {
          Bn: "(" + bb.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [hb, bb.REGEXP_MODE, {
            className: "function",
            Bn: Kb,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Bn: bb.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Bn: /\(\s*\)/,
                skip: !0
              }, {
                Bn: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: mb,
                contains: Bb
              }]
            }]
          }, {
            Bn: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Bn: Mb,
              end: Xb
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Bn: nb.Bn,
              "on:begin": nb.isTrulyOpeningTag,
              end: nb.end
            }],
            subLanguage: "xml",
            contains: [{
              Bn: nb.Bn,
              end: nb.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Db, {
          beginKeywords: "while if switch catch for"
        }, {
          Bn: "\\b(?!function)" + bb.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [tb, bb.inherit(bb.TITLE_MODE, {
            Bn: sb,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Ob, {
          match: "\\$" + sb,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [tb]
        }, Eb, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, yb, Gb, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4456: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Xb
    });
    const kb = "[A-Za-z$_][0-9A-Za-z$_]*",
      Wb = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      ab = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Tb = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      Ub = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Ib = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Hb = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      fb = [].concat(Ib, Tb, Ub);

    function Mb(bb) {
      const cb = bb.regex,
        sb = kb,
        Mb = "<>",
        Xb = "</>",
        nb = {
          Bn: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (bb, cb) => {
            const sb = bb[0].length + bb.index,
              kb = bb.input[sb];
            if ("<" === kb || "," === kb) return void cb.ignoreMatch();
            let Wb;
            ">" === kb && (((bb, cb) => {
              let {
                after: sb
              } = cb;
              const kb = "</" + bb[0].slice(1);
              return -1 !== bb.input.indexOf(kb, sb)
            })(bb, {
              after: sb
            }) || cb.ignoreMatch());
            const ab = bb.input.substring(sb);
            ((Wb = ab.match(/^\s*=/)) || (Wb = ab.match(/^\s+extends\s+/)) && 0 === Wb.index) && cb.ignoreMatch()
          }
        },
        mb = {
          $pattern: kb,
          keyword: Wb,
          literal: ab,
          built_in: fb,
          "variable.language": Hb
        },
        lb = "[0-9](_?[0-9])*",
        Qb = `\\.(${lb})`,
        eb = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        Cb = {
          className: "number",
          variants: [{
            Bn: `(\\b(${eb})((${Qb})|\\.)?|(${Qb}))[eE][+-]?(${lb})\\b`
          }, {
            Bn: `\\b(${eb})\\b((${Qb})\\b|\\.)?|(${Qb})\\b`
          }, {
            Bn: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            Bn: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            Bn: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            Bn: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            Bn: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Nb = {
          className: "subst",
          Bn: "\\$\\{",
          end: "\\}",
          keywords: mb,
          contains: []
        },
        Vb = {
          Bn: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Nb],
            subLanguage: "xml"
          }
        },
        Lb = {
          Bn: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Nb],
            subLanguage: "css"
          }
        },
        ub = {
          Bn: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [bb.BACKSLASH_ESCAPE, Nb],
            subLanguage: "graphql"
          }
        },
        Yb = {
          className: "string",
          Bn: "`",
          end: "`",
          contains: [bb.BACKSLASH_ESCAPE, Nb]
        },
        hb = {
          className: "comment",
          variants: [bb.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              Bn: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                Bn: "@[A-Za-z]+"
              }, {
                className: "type",
                Bn: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                Bn: sb + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                Bn: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), bb.C_BLOCK_COMMENT_MODE, bb.C_LINE_COMMENT_MODE]
        },
        Jb = [bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, Vb, Lb, ub, Yb, {
          match: /\$\d+/
        }, Cb];
      Nb.contains = Jb.concat({
        Bn: /\{/,
        end: /\}/,
        keywords: mb,
        contains: ["self"].concat(Jb)
      });
      const gb = [].concat(hb, Nb.contains),
        Bb = gb.concat([{
          Bn: /(\s*)\(/,
          end: /\)/,
          keywords: mb,
          contains: ["self"].concat(gb)
        }]),
        tb = {
          className: "params",
          Bn: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: mb,
          contains: Bb
        },
        yb = {
          variants: [{
            match: [/class/, /\s+/, sb, /\s+/, /extends/, /\s+/, cb.concat(sb, "(", cb.concat(/\./, sb), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, sb],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Pb = {
          relevance: 0,
          match: cb.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Tb, ...Ub]
          }
        },
        Db = {
          variants: [{
            match: [/function/, /\s+/, sb, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [tb],
          illegal: /%/
        };
      const Eb = {
        match: cb.concat(/\b/, (ib = [...Ib, "super", "import"].map((bb => `${bb}\\s*\\(`)), cb.concat("(?!", ib.join("|"), ")")), sb, cb.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var ib;
      const Ob = {
          Bn: cb.concat(/\./, cb.lookahead(cb.concat(sb, /(?![0-9A-Za-z$_(])/))),
          end: sb,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Gb = {
          match: [/get|set/, /\s+/, sb, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            Bn: /\(\)/
          }, tb]
        },
        Kb = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + bb.UNDERSCORE_IDENT_RE + ")\\s*=>",
        Zb = {
          match: [/const|var|let/, /\s+/, sb, /\s*/, /=\s*/, /(async\s*)?/, cb.lookahead(Kb)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [tb]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: mb,
        exports: {
          PARAMS_CONTAINS: Bb,
          CLASS_REFERENCE: Pb
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
          Bn: /^\s*['"]use (strict|asm)['"]/
        }, bb.APOS_STRING_MODE, bb.QUOTE_STRING_MODE, Vb, Lb, ub, Yb, hb, {
          match: /\$\d+/
        }, Cb, Pb, {
          scope: "attr",
          match: sb + cb.lookahead(":"),
          relevance: 0
        }, Zb, {
          Bn: "(" + bb.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [hb, bb.REGEXP_MODE, {
            className: "function",
            Bn: Kb,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                Bn: bb.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                Bn: /\(\s*\)/,
                skip: !0
              }, {
                Bn: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: mb,
                contains: Bb
              }]
            }]
          }, {
            Bn: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              Bn: Mb,
              end: Xb
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              Bn: nb.Bn,
              "on:begin": nb.isTrulyOpeningTag,
              end: nb.end
            }],
            subLanguage: "xml",
            contains: [{
              Bn: nb.Bn,
              end: nb.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, Db, {
          beginKeywords: "while if switch catch for"
        }, {
          Bn: "\\b(?!function)" + bb.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [tb, bb.inherit(bb.TITLE_MODE, {
            Bn: sb,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Ob, {
          match: "\\$" + sb,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [tb]
        }, Eb, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, yb, Gb, {
          match: /\$[(.]/
        }]
      }
    }

    function Xb(bb) {
      const cb = bb.regex,
        sb = Mb(bb),
        Tb = kb,
        Ub = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Ib = {
          Bn: [/namespace/, /\s+/, bb.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Xb = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: Ub
          },
          contains: [sb.exports.CLASS_REFERENCE]
        },
        nb = {
          $pattern: kb,
          keyword: Wb.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: ab,
          built_in: fb.concat(Ub),
          "variable.language": Hb
        },
        mb = {
          className: "meta",
          Bn: "@" + Tb
        },
        lb = (bb, cb, sb) => {
          const kb = bb.contains.findIndex((bb => bb.label === cb));
          if (-1 === kb) throw new Error("can not find mode to replace");
          bb.contains.splice(kb, 1, sb)
        };
      Object.assign(sb.keywords, nb), sb.exports.PARAMS_CONTAINS.push(mb);
      const Qb = sb.contains.find((bb => "attr" === bb.scope)),
        eb = Object.assign({}, Qb, {
          match: cb.concat(Tb, cb.lookahead(/\s*\?:/))
        });
      sb.exports.PARAMS_CONTAINS.push([sb.exports.CLASS_REFERENCE, Qb, eb]), sb.contains = sb.contains.concat([mb, Ib, Xb, eb]), lb(sb, "shebang", bb.SHEBANG()), lb(sb, "use_strict", {
        className: "meta",
        relevance: 10,
        Bn: /^\s*['"]use strict['"]/
      });
      return sb.contains.find((bb => "func.def" === bb.label)).relevance = 0, Object.assign(sb, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), sb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);