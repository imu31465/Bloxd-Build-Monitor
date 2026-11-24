export const id = 80;
export const ids = [80];
export const modules = {
  4824: pp => {
    function ip(pp) {
      return pp instanceof Map ? pp.clear = pp.delete = pp.set = function() {
        throw new Error("map is read-only")
      } : pp instanceof Set && (pp.add = pp.clear = pp.delete = function() {
        throw new Error("set is read-only")
      }), Object.freeze(pp), Object.getOwnPropertyNames(pp).forEach((cp => {
        const Op = pp[cp],
          op = typeof Op;
        "object" !== op && "function" !== op || Object.isFrozen(Op) || ip(Op)
      })), pp
    }
    class cp {
      constructor(pp) {
        void 0 === pp.data && (pp.data = {}), this.data = pp.data, this.isMatchIgnored = !1
      }
      ignoreMatch() {
        this.isMatchIgnored = !0
      }
    }

    function Op(pp) {
      return pp.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function op(pp) {
      const ip = Object.create(null);
      for (const Ip in pp) ip[Ip] = pp[Ip];
      for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
      return Op.forEach((function(pp) {
        for (const cp in pp) ip[cp] = pp[cp]
      })), ip
    }
    const Ip = pp => !!pp.scope;
    class Sp {
      constructor(pp, ip) {
        this.buffer = "", this.classPrefix = ip.classPrefix, pp.walk(this)
      }
      addText(pp) {
        this.buffer += Op(pp)
      }
      openNode(pp) {
        if (!Ip(pp)) return;
        const ip = ((pp, ip) => {
          let {
            prefix: cp
          } = ip;
          if (pp.startsWith("language:")) return pp.replace("language:", "language-");
          if (pp.includes(".")) {
            const ip = pp.split(".");
            return [`${cp}${ip.shift()}`, ...ip.map(((pp, ip) => `${pp}${"_".repeat(ip+1)}`))].join(" ")
          }
          return `${cp}${pp}`
        })(pp.scope, {
          prefix: this.classPrefix
        });
        this.span(ip)
      }
      closeNode(pp) {
        Ip(pp) && (this.buffer += "</span>")
      }
      value() {
        return this.buffer
      }
      span(pp) {
        this.buffer += `<span class="${pp}">`
      }
    }
    const xp = function() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const ip = {
        children: []
      };
      return Object.assign(ip, pp), ip
    };
    class Lp {
      constructor() {
        this.ZH = xp(), this.stack = [this.ZH]
      }
      get top() {
        return this.stack[this.stack.length - 1]
      }
      get root() {
        return this.ZH
      }
      add(pp) {
        this.top.children.push(pp)
      }
      openNode(pp) {
        const ip = xp({
          scope: pp
        });
        this.add(ip), this.stack.push(ip)
      }
      closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
      }
      closeAllNodes() {
        for (; this.closeNode(););
      }
      toJSON() {
        return JSON.stringify(this.ZH, null, 4)
      }
      walk(pp) {
        return this.constructor._walk(pp, this.ZH)
      }
      static _walk(pp, ip) {
        return "string" === typeof ip ? pp.addText(ip) : ip.children && (pp.openNode(ip), ip.children.forEach((ip => this._walk(pp, ip))), pp.closeNode(ip)), pp
      }
      static _collapse(pp) {
        "string" !== typeof pp && pp.children && (pp.children.every((pp => "string" === typeof pp)) ? pp.children = [pp.children.join("")] : pp.children.forEach((pp => {
          Lp._collapse(pp)
        })))
      }
    }
    class Yp extends Lp {
      constructor(pp) {
        super(), this.options = pp
      }
      addText(pp) {
        "" !== pp && this.add(pp)
      }
      startScope(pp) {
        this.openNode(pp)
      }
      endScope() {
        this.closeNode()
      }
      __addSublanguage(pp, ip) {
        const cp = pp.root;
        ip && (cp.scope = `language:${ip}`), this.add(cp)
      }
      toHTML() {
        return new Sp(this, this.options).value()
      }
      finalize() {
        return this.closeAllNodes(), !0
      }
    }

    function Dp(pp) {
      return pp ? "string" === typeof pp ? pp : pp.source : null
    }

    function Ap(pp) {
      return yp("(?=", pp, ")")
    }

    function Pp(pp) {
      return yp("(?:", pp, ")*")
    }

    function Wp(pp) {
      return yp("(?:", pp, ")?")
    }

    function yp() {
      for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
      return ip.map((pp => Dp(pp))).join("")
    }

    function Up() {
      for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
      const Op = function(pp) {
        const ip = pp[pp.length - 1];
        return "object" === typeof ip && ip.constructor === Object ? (pp.splice(pp.length - 1, 1), ip) : {}
      }(ip);
      return "(" + (Op.capture ? "" : "?:") + ip.map((pp => Dp(pp))).join("|") + ")"
    }

    function wp(pp) {
      return new RegExp(pp.toString() + "|").exec("").length - 1
    }
    const vp = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function tp(pp, ip) {
      let {
        joinWith: cp
      } = ip, Op = 0;
      return pp.map((pp => {
        Op += 1;
        const ip = Op;
        let cp = Dp(pp),
          op = "";
        for (; cp.length > 0;) {
          const pp = vp.exec(cp);
          if (!pp) {
            op += cp;
            break
          }
          op += cp.substring(0, pp.index), cp = cp.substring(pp.index + pp[0].length), "\\" === pp[0][0] && pp[1] ? op += "\\" + String(Number(pp[1]) + ip) : (op += pp[0], "(" === pp[0] && Op++)
        }
        return op
      })).map((pp => `(${pp})`)).join(cp)
    }
    const Hp = "[a-zA-Z]\\w*",
      dp = "[a-zA-Z_]\\w*",
      ep = "\\b\\d+(\\.\\d+)?",
      jp = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      kp = "\\b(0b[01]+)",
      mp = {
        mW: "\\\\[\\s\\S]",
        relevance: 0
      },
      Rp = {
        scope: "string",
        mW: "'",
        end: "'",
        illegal: "\\n",
        contains: [mp]
      },
      qp = {
        scope: "string",
        mW: '"',
        end: '"',
        illegal: "\\n",
        contains: [mp]
      },
      Mp = function(pp, ip) {
        const cp = op({
          scope: "comment",
          mW: pp,
          end: ip,
          contains: []
        }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
        cp.contains.push({
          scope: "doctag",
          mW: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0
        });
        const Op = Up("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
        return cp.contains.push({
          mW: yp(/[ ]+/, "(", Op, /[.]?[:]?([.][ ]|[ ])/, "){3}")
        }), cp
      },
      Cp = Mp("//", "$"),
      Ep = Mp("/\\*", "\\*/"),
      Xp = Mp("#", "$"),
      lp = {
        scope: "number",
        mW: ep,
        relevance: 0
      },
      Qp = {
        scope: "number",
        mW: jp,
        relevance: 0
      },
      Jp = {
        scope: "number",
        mW: kp,
        relevance: 0
      },
      Bp = {
        scope: "regexp",
        mW: /\/(?=[^/\n]*\/)/,
        end: /\/[gimuy]*/,
        contains: [mp, {
          mW: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [mp]
        }]
      },
      Np = {
        scope: "title",
        mW: Hp,
        relevance: 0
      },
      Tp = {
        scope: "title",
        mW: dp,
        relevance: 0
      },
      fp = {
        mW: "\\.\\s*" + dp,
        relevance: 0
      };
    var bp = Object.freeze({
      __proto__: null,
      APOS_STRING_MODE: Rp,
      BACKSLASH_ESCAPE: mp,
      BINARY_NUMBER_MODE: Jp,
      BINARY_NUMBER_RE: kp,
      COMMENT: Mp,
      C_BLOCK_COMMENT_MODE: Ep,
      C_LINE_COMMENT_MODE: Cp,
      C_NUMBER_MODE: Qp,
      C_NUMBER_RE: jp,
      END_SAME_AS_BEGIN: function(pp) {
        return Object.assign(pp, {
          "on:begin": (pp, ip) => {
            ip.data._beginMatch = pp[1]
          },
          "on:end": (pp, ip) => {
            ip.data._beginMatch !== pp[1] && ip.ignoreMatch()
          }
        })
      },
      HASH_COMMENT_MODE: Xp,
      IDENT_RE: Hp,
      MATCH_NOTHING_RE: /\b\B/,
      METHOD_GUARD: fp,
      NUMBER_MODE: lp,
      NUMBER_RE: ep,
      PHRASAL_WORDS_MODE: {
        mW: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      },
      QUOTE_STRING_MODE: qp,
      REGEXP_MODE: Bp,
      RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      SHEBANG: function() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const ip = /^#![ ]*\//;
        return pp.binary && (pp.mW = yp(ip, /.*\b/, pp.binary, /\b.*/)), op({
          scope: "meta",
          mW: ip,
          end: /$/,
          relevance: 0,
          "on:begin": (pp, ip) => {
            0 !== pp.index && ip.ignoreMatch()
          }
        }, pp)
      },
      TITLE_MODE: Np,
      UNDERSCORE_IDENT_RE: dp,
      UNDERSCORE_TITLE_MODE: Tp
    });

    function hp(pp, ip) {
      "." === pp.input[pp.index - 1] && ip.ignoreMatch()
    }

    function ap(pp, ip) {
      void 0 !== pp.className && (pp.scope = pp.className, delete pp.className)
    }

    function np(pp, ip) {
      ip && pp.beginKeywords && (pp.mW = "\\b(" + pp.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", pp.__beforeBegin = hp, pp.keywords = pp.keywords || pp.beginKeywords, delete pp.beginKeywords, void 0 === pp.relevance && (pp.relevance = 0))
    }

    function Fp(pp, ip) {
      Array.isArray(pp.illegal) && (pp.illegal = Up(...pp.illegal))
    }

    function gp(pp, ip) {
      if (pp.match) {
        if (pp.mW || pp.end) throw new Error("begin & end are not supported with match");
        pp.mW = pp.match, delete pp.match
      }
    }

    function Gp(pp, ip) {
      void 0 === pp.relevance && (pp.relevance = 1)
    }
    const rp = (pp, ip) => {
        if (!pp.beforeMatch) return;
        if (pp.starts) throw new Error("beforeMatch cannot be used with starts");
        const cp = Object.assign({}, pp);
        Object.keys(pp).forEach((ip => {
          delete pp[ip]
        })), pp.keywords = cp.keywords, pp.mW = yp(cp.beforeMatch, Ap(cp.mW)), pp.starts = {
          relevance: 0,
          contains: [Object.assign(cp, {
            endsParent: !0
          })]
        }, pp.relevance = 0, delete cp.beforeMatch
      },
      Zp = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function zp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keyword";
      const Op = Object.create(null);
      return "string" === typeof pp ? op(cp, pp.split(" ")) : Array.isArray(pp) ? op(cp, pp) : Object.keys(pp).forEach((function(cp) {
        Object.assign(Op, zp(pp[cp], ip, cp))
      })), Op;

      function op(pp, cp) {
        ip && (cp = cp.map((pp => pp.toLowerCase()))), cp.forEach((function(ip) {
          const cp = ip.split("|");
          Op[cp[0]] = [pp, sp(cp[0], cp[1])]
        }))
      }
    }

    function sp(pp, ip) {
      return ip ? Number(ip) : function(pp) {
        return Zp.includes(pp.toLowerCase())
      }(pp) ? 0 : 1
    }
    const Kp = {},
      Vp = pp => {
        console.error(pp)
      },
      ii = function(pp) {
        for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
        console.log(`WARN: ${pp}`, ...cp)
      },
      ci = (pp, ip) => {
        Kp[`${pp}/${ip}`] || (console.log(`Deprecated as of ${pp}. ${ip}`), Kp[`${pp}/${ip}`] = !0)
      },
      Oi = new Error;

    function oi(pp, ip, cp) {
      let {
        key: Op
      } = cp, op = 0;
      const Ip = pp[Op],
        Sp = {},
        xp = {};
      for (let Lp = 1; Lp <= ip.length; Lp++) xp[Lp + op] = Ip[Lp], Sp[Lp + op] = !0, op += wp(ip[Lp - 1]);
      pp[Op] = xp, pp[Op]._emit = Sp, pp[Op]._multi = !0
    }

    function Ii(pp) {
      ! function(pp) {
        pp.scope && "object" === typeof pp.scope && null !== pp.scope && (pp.beginScope = pp.scope, delete pp.scope)
      }(pp), "string" === typeof pp.beginScope && (pp.beginScope = {
          _wrap: pp.beginScope
        }), "string" === typeof pp.endScope && (pp.endScope = {
          _wrap: pp.endScope
        }),
        function(pp) {
          if (Array.isArray(pp.mW)) {
            if (pp.skip || pp.excludeBegin || pp.returnBegin) throw Vp("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Oi;
            if ("object" !== typeof pp.beginScope || null === pp.beginScope) throw Vp("beginScope must be object"), Oi;
            oi(pp, pp.mW, {
              key: "beginScope"
            }), pp.mW = tp(pp.mW, {
              joinWith: ""
            })
          }
        }(pp),
        function(pp) {
          if (Array.isArray(pp.end)) {
            if (pp.skip || pp.excludeEnd || pp.returnEnd) throw Vp("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Oi;
            if ("object" !== typeof pp.endScope || null === pp.endScope) throw Vp("endScope must be object"), Oi;
            oi(pp, pp.end, {
              key: "endScope"
            }), pp.end = tp(pp.end, {
              joinWith: ""
            })
          }
        }(pp)
    }

    function Si(pp) {
      function ip(ip, cp) {
        return new RegExp(Dp(ip), "m" + (pp.case_insensitive ? "i" : "") + (pp.unicodeRegex ? "u" : "") + (cp ? "g" : ""))
      }
      class cp {
        constructor() {
          this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }
        addRule(pp, ip) {
          ip.position = this.position++, this.matchIndexes[this.matchAt] = ip, this.regexes.push([ip, pp]), this.matchAt += wp(pp) + 1
        }
        compile() {
          0 === this.regexes.length && (this.exec = () => null);
          const pp = this.regexes.map((pp => pp[1]));
          this.matcherRe = ip(tp(pp, {
            joinWith: "|"
          }), !0), this.lastIndex = 0
        }
        exec(pp) {
          this.matcherRe.lastIndex = this.lastIndex;
          const ip = this.matcherRe.exec(pp);
          if (!ip) return null;
          const cp = ip.findIndex(((pp, ip) => ip > 0 && void 0 !== pp)),
            Op = this.matchIndexes[cp];
          return ip.splice(0, cp), Object.assign(ip, Op)
        }
      }
      class Op {
        constructor() {
          this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }
        getMatcher(pp) {
          if (this.multiRegexes[pp]) return this.multiRegexes[pp];
          const ip = new cp;
          return this.rules.slice(pp).forEach((pp => {
            let [cp, Op] = pp;
            return ip.addRule(cp, Op)
          })), ip.compile(), this.multiRegexes[pp] = ip, ip
        }
        resumingScanAtSamePosition() {
          return 0 !== this.regexIndex
        }
        considerAll() {
          this.regexIndex = 0
        }
        addRule(pp, ip) {
          this.rules.push([pp, ip]), "mW" === ip.type && this.count++
        }
        exec(pp) {
          const ip = this.getMatcher(this.regexIndex);
          ip.lastIndex = this.lastIndex;
          let cp = ip.exec(pp);
          if (this.resumingScanAtSamePosition())
            if (cp && cp.index === this.lastIndex);
            else {
              const ip = this.getMatcher(0);
              ip.lastIndex = this.lastIndex + 1, cp = ip.exec(pp)
            } return cp && (this.regexIndex += cp.position + 1, this.regexIndex === this.count && this.considerAll()), cp
        }
      }
      if (pp.compilerExtensions || (pp.compilerExtensions = []), pp.contains && pp.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      return pp.classNameAliases = op(pp.classNameAliases || {}),
        function cp(Ip, Sp) {
          const xp = Ip;
          if (Ip.isCompiled) return xp;
          [ap, gp, Ii, rp].forEach((pp => pp(Ip, Sp))), pp.compilerExtensions.forEach((pp => pp(Ip, Sp))), Ip.__beforeBegin = null, [np, Fp, Gp].forEach((pp => pp(Ip, Sp))), Ip.isCompiled = !0;
          let Lp = null;
          return "object" === typeof Ip.keywords && Ip.keywords.$pattern && (Ip.keywords = Object.assign({}, Ip.keywords), Lp = Ip.keywords.$pattern, delete Ip.keywords.$pattern), Lp = Lp || /\w+/, Ip.keywords && (Ip.keywords = zp(Ip.keywords, pp.case_insensitive)), xp.keywordPatternRe = ip(Lp, !0), Sp && (Ip.mW || (Ip.mW = /\B|\b/), xp.beginRe = ip(xp.mW), Ip.end || Ip.endsWithParent || (Ip.end = /\B|\b/), Ip.end && (xp.endRe = ip(xp.end)), xp.terminatorEnd = Dp(xp.end) || "", Ip.endsWithParent && Sp.terminatorEnd && (xp.terminatorEnd += (Ip.end ? "|" : "") + Sp.terminatorEnd)), Ip.illegal && (xp.illegalRe = ip(Ip.illegal)), Ip.contains || (Ip.contains = []), Ip.contains = [].concat(...Ip.contains.map((function(pp) {
            return function(pp) {
              pp.variants && !pp.cachedVariants && (pp.cachedVariants = pp.variants.map((function(ip) {
                return op(pp, {
                  variants: null
                }, ip)
              })));
              if (pp.cachedVariants) return pp.cachedVariants;
              if (xi(pp)) return op(pp, {
                starts: pp.starts ? op(pp.starts) : null
              });
              if (Object.isFrozen(pp)) return op(pp);
              return pp
            }("self" === pp ? Ip : pp)
          }))), Ip.contains.forEach((function(pp) {
            cp(pp, xp)
          })), Ip.starts && cp(Ip.starts, Sp), xp.matcher = function(pp) {
            const ip = new Op;
            return pp.contains.forEach((pp => ip.addRule(pp.mW, {
              rule: pp,
              type: "mW"
            }))), pp.terminatorEnd && ip.addRule(pp.terminatorEnd, {
              type: "end"
            }), pp.illegal && ip.addRule(pp.illegal, {
              type: "illegal"
            }), ip
          }(xp), xp
        }(pp)
    }

    function xi(pp) {
      return !!pp && (pp.endsWithParent || xi(pp.starts))
    }
    class Li extends Error {
      constructor(pp, ip) {
        super(pp), this.name = "HTMLInjectionError", this.html = ip
      }
    }
    const Yi = Op,
      Di = op,
      Ai = Symbol("nomatch"),
      Pi = function(pp) {
        const Op = Object.create(null),
          op = Object.create(null),
          Ip = [];
        let Sp = !0;
        const xp = "Could not find the language '{}', did you forget to load/include a language module?",
          Lp = {
            disableAutodetect: !0,
            name: "Plain text",
            contains: []
          };
        let Dp = {
          ignoreUnescapedHTML: !1,
          throwUnescapedHTML: !1,
          noHighlightRe: /^(no-?highlight)$/i,
          languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
          classPrefix: "hljs-",
          cssSelector: "pre code",
          languages: null,
          __emitter: Yp
        };

        function wp(pp) {
          return Dp.noHighlightRe.test(pp)
        }

        function vp(pp, ip, cp) {
          let Op = "",
            op = "";
          "object" === typeof ip ? (Op = pp, cp = ip.ignoreIllegals, op = ip.language) : (ci("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ci("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), op = pp, Op = ip), void 0 === cp && (cp = !0);
          const Ip = {
            code: Op,
            language: op
          };
          qp("before:highlight", Ip);
          const Sp = Ip.result ? Ip.result : tp(Ip.language, Ip.code, cp);
          return Sp.code = Ip.code, qp("after:highlight", Sp), Sp
        }

        function tp(pp, ip, op, Ip) {
          const Lp = Object.create(null);

          function Yp() {
            if (!qp.keywords) return void Cp.addText(Ep);
            let pp = 0;
            qp.keywordPatternRe.lastIndex = 0;
            let ip = qp.keywordPatternRe.exec(Ep),
              cp = "";
            for (; ip;) {
              cp += Ep.substring(pp, ip.index);
              const op = jp.case_insensitive ? ip[0].toLowerCase() : ip[0],
                Ip = (Op = op, qp.keywords[Op]);
              if (Ip) {
                const [pp, Op] = Ip;
                if (Cp.addText(cp), cp = "", Lp[op] = (Lp[op] || 0) + 1, Lp[op] <= 7 && (Xp += Op), pp.startsWith("_")) cp += ip[0];
                else {
                  const cp = jp.classNameAliases[pp] || pp;
                  Pp(ip[0], cp)
                }
              } else cp += ip[0];
              pp = qp.keywordPatternRe.lastIndex, ip = qp.keywordPatternRe.exec(Ep)
            }
            var Op;
            cp += Ep.substring(pp), Cp.addText(cp)
          }

          function Ap() {
            null != qp.subLanguage ? function() {
              if ("" === Ep) return;
              let pp = null;
              if ("string" === typeof qp.subLanguage) {
                if (!Op[qp.subLanguage]) return void Cp.addText(Ep);
                pp = tp(qp.subLanguage, Ep, !0, Mp[qp.subLanguage]), Mp[qp.subLanguage] = pp._top
              } else pp = Hp(Ep, qp.subLanguage.length ? qp.subLanguage : null);
              qp.relevance > 0 && (Xp += pp.relevance), Cp.__addSublanguage(pp._emitter, pp.language)
            }() : Yp(), Ep = ""
          }

          function Pp(pp, ip) {
            "" !== pp && (Cp.startScope(ip), Cp.addText(pp), Cp.endScope())
          }

          function Wp(pp, ip) {
            let cp = 1;
            const Op = ip.length - 1;
            for (; cp <= Op;) {
              if (!pp._emit[cp]) {
                cp++;
                continue
              }
              const Op = jp.classNameAliases[pp[cp]] || pp[cp],
                op = ip[cp];
              Op ? Pp(op, Op) : (Ep = op, Yp(), Ep = ""), cp++
            }
          }

          function yp(pp, ip) {
            return pp.scope && "string" === typeof pp.scope && Cp.openNode(jp.classNameAliases[pp.scope] || pp.scope), pp.beginScope && (pp.beginScope._wrap ? (Pp(Ep, jp.classNameAliases[pp.beginScope._wrap] || pp.beginScope._wrap), Ep = "") : pp.beginScope._multi && (Wp(pp.beginScope, ip), Ep = "")), qp = Object.create(pp, {
              parent: {
                value: qp
              }
            }), qp
          }

          function Up(pp, ip, Op) {
            let op = function(pp, ip) {
              const cp = pp && pp.exec(ip);
              return cp && 0 === cp.index
            }(pp.endRe, Op);
            if (op) {
              if (pp["on:end"]) {
                const Op = new cp(pp);
                pp["on:end"](ip, Op), Op.isMatchIgnored && (op = !1)
              }
              if (op) {
                for (; pp.endsParent && pp.parent;) pp = pp.parent;
                return pp
              }
            }
            if (pp.endsWithParent) return Up(pp.parent, ip, Op)
          }

          function wp(pp) {
            return 0 === qp.matcher.regexIndex ? (Ep += pp[0], 1) : (Jp = !0, 0)
          }

          function vp(pp) {
            const cp = pp[0],
              Op = ip.substring(pp.index),
              op = Up(qp, pp, Op);
            if (!op) return Ai;
            const Ip = qp;
            qp.endScope && qp.endScope._wrap ? (Ap(), Pp(cp, qp.endScope._wrap)) : qp.endScope && qp.endScope._multi ? (Ap(), Wp(qp.endScope, pp)) : Ip.skip ? Ep += cp : (Ip.returnEnd || Ip.excludeEnd || (Ep += cp), Ap(), Ip.excludeEnd && (Ep = cp));
            do {
              qp.scope && Cp.closeNode(), qp.skip || qp.subLanguage || (Xp += qp.relevance), qp = qp.parent
            } while (qp !== op.parent);
            return op.starts && yp(op.starts, pp), Ip.returnEnd ? 0 : cp.length
          }
          let dp = {};

          function ep(Op, Ip) {
            const xp = Ip && Ip[0];
            if (Ep += Op, null == xp) return Ap(), 0;
            if ("mW" === dp.type && "end" === Ip.type && dp.index === Ip.index && "" === xp) {
              if (Ep += ip.slice(Ip.index, Ip.index + 1), !Sp) {
                const ip = new Error(`0 width match regex (${pp})`);
                throw ip.languageName = pp, ip.badRule = dp.rule, ip
              }
              return 1
            }
            if (dp = Ip, "mW" === Ip.type) return function(pp) {
              const ip = pp[0],
                Op = pp.rule,
                op = new cp(Op),
                Ip = [Op.__beforeBegin, Op["on:begin"]];
              for (const cp of Ip)
                if (cp && (cp(pp, op), op.isMatchIgnored)) return wp(ip);
              return Op.skip ? Ep += ip : (Op.excludeBegin && (Ep += ip), Ap(), Op.returnBegin || Op.excludeBegin || (Ep = ip)), yp(Op, pp), Op.returnBegin ? 0 : ip.length
            }(Ip);
            if ("illegal" === Ip.type && !op) {
              const pp = new Error('Illegal lexeme "' + xp + '" for mode "' + (qp.scope || "<unnamed>") + '"');
              throw pp.mode = qp, pp
            }
            if ("end" === Ip.type) {
              const pp = vp(Ip);
              if (pp !== Ai) return pp
            }
            if ("illegal" === Ip.type && "" === xp) return Ep += "\n", 1;
            if (Qp > 1e5 && Qp > 3 * Ip.index) {
              throw new Error("potential infinite loop, way more iterations than matches")
            }
            return Ep += xp, xp.length
          }
          const jp = kp(pp);
          if (!jp) throw Vp(xp.replace("{}", pp)), new Error('Unknown language: "' + pp + '"');
          const mp = Si(jp);
          let Rp = "",
            qp = Ip || mp;
          const Mp = {},
            Cp = new Dp.__emitter(Dp);
          ! function() {
            const pp = [];
            for (let ip = qp; ip !== jp; ip = ip.parent) ip.scope && pp.unshift(ip.scope);
            pp.forEach((pp => Cp.openNode(pp)))
          }();
          let Ep = "",
            Xp = 0,
            lp = 0,
            Qp = 0,
            Jp = !1;
          try {
            if (jp.__emitTokens) jp.__emitTokens(ip, Cp);
            else {
              for (qp.matcher.considerAll();;) {
                Qp++, Jp ? Jp = !1 : qp.matcher.considerAll(), qp.matcher.lastIndex = lp;
                const pp = qp.matcher.exec(ip);
                if (!pp) break;
                const cp = ep(ip.substring(lp, pp.index), pp);
                lp = pp.index + cp
              }
              ep(ip.substring(lp))
            }
            return Cp.finalize(), Rp = Cp.toHTML(), {
              language: pp,
              value: Rp,
              relevance: Xp,
              illegal: !1,
              _emitter: Cp,
              _top: qp
            }
          } catch (Bp) {
            if (Bp.message && Bp.message.includes("Illegal")) return {
              language: pp,
              value: Yi(ip),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: Bp.message,
                index: lp,
                context: ip.slice(lp - 100, lp + 100),
                mode: Bp.mode,
                resultSoFar: Rp
              },
              _emitter: Cp
            };
            if (Sp) return {
              language: pp,
              value: Yi(ip),
              illegal: !1,
              relevance: 0,
              errorRaised: Bp,
              _emitter: Cp,
              _top: qp
            };
            throw Bp
          }
        }

        function Hp(pp, ip) {
          ip = ip || Dp.languages || Object.keys(Op);
          const cp = function(pp) {
              const ip = {
                value: Yi(pp),
                illegal: !1,
                relevance: 0,
                _top: Lp,
                _emitter: new Dp.__emitter(Dp)
              };
              return ip._emitter.addText(pp), ip
            }(pp),
            op = ip.filter(kp).filter(Rp).map((ip => tp(ip, pp, !1)));
          op.unshift(cp);
          const Ip = op.sort(((pp, ip) => {
              if (pp.relevance !== ip.relevance) return ip.relevance - pp.relevance;
              if (pp.language && ip.language) {
                if (kp(pp.language).supersetOf === ip.language) return 1;
                if (kp(ip.language).supersetOf === pp.language) return -1
              }
              return 0
            })),
            [Sp, xp] = Ip,
            Yp = Sp;
          return Yp.secondBest = xp, Yp
        }

        function dp(pp) {
          let ip = null;
          const cp = function(pp) {
            let ip = pp.className + " ";
            ip += pp.parentNode ? pp.parentNode.className : "";
            const cp = Dp.languageDetectRe.exec(ip);
            if (cp) {
              const ip = kp(cp[1]);
              return ip || (ii(xp.replace("{}", cp[1])), ii("Falling back to no-highlight mode for this block.", pp)), ip ? cp[1] : "no-highlight"
            }
            return ip.split(/\s+/).find((pp => wp(pp) || kp(pp)))
          }(pp);
          if (wp(cp)) return;
          if (qp("before:highlightElement", {
              el: pp,
              language: cp
            }), pp.dataset.highlighted) return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", pp);
          if (pp.children.length > 0 && (Dp.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(pp)), Dp.throwUnescapedHTML)) {
            throw new Li("One of your code blocks includes unescaped HTML.", pp.innerHTML)
          }
          ip = pp;
          const Op = ip.textContent,
            Ip = cp ? vp(Op, {
              language: cp,
              ignoreIllegals: !0
            }) : Hp(Op);
          pp.innerHTML = Ip.value, pp.dataset.highlighted = "yes",
            function(pp, ip, cp) {
              const Op = ip && op[ip] || cp;
              pp.classList.add("hljs"), pp.classList.add(`language-${Op}`)
            }(pp, cp, Ip.language), pp.result = {
              language: Ip.language,
              re: Ip.relevance,
              relevance: Ip.relevance
            }, Ip.secondBest && (pp.secondBest = {
              language: Ip.secondBest.language,
              relevance: Ip.secondBest.relevance
            }), qp("after:highlightElement", {
              el: pp,
              result: Ip,
              text: Op
            })
        }
        let ep = !1;

        function jp() {
          if ("loading" === document.readyState) return ep || window.addEventListener("DOMContentLoaded", (function() {
            jp()
          }), !1), void(ep = !0);
          document.querySelectorAll(Dp.cssSelector).forEach(dp)
        }

        function kp(pp) {
          return pp = (pp || "").toLowerCase(), Op[pp] || Op[op[pp]]
        }

        function mp(pp, ip) {
          let {
            languageName: cp
          } = ip;
          "string" === typeof pp && (pp = [pp]), pp.forEach((pp => {
            op[pp.toLowerCase()] = cp
          }))
        }

        function Rp(pp) {
          const ip = kp(pp);
          return ip && !ip.disableAutodetect
        }

        function qp(pp, ip) {
          const cp = pp;
          Ip.forEach((function(pp) {
            pp[cp] && pp[cp](ip)
          }))
        }
        Object.assign(pp, {
          highlight: vp,
          highlightAuto: Hp,
          highlightAll: jp,
          highlightElement: dp,
          highlightBlock: function(pp) {
            return ci("10.7.0", "highlightBlock will be removed entirely in v12.0"), ci("10.7.0", "Please use highlightElement now."), dp(pp)
          },
          configure: function(pp) {
            Dp = Di(Dp, pp)
          },
          initHighlighting: () => {
            jp(), ci("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
          },
          initHighlightingOnLoad: function() {
            jp(), ci("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
          },
          registerLanguage: function(ip, cp) {
            let op = null;
            try {
              op = cp(pp)
            } catch (Ip) {
              if (Vp("Language definition for '{}' could not be registered.".replace("{}", ip)), !Sp) throw Ip;
              Vp(Ip), op = Lp
            }
            op.name || (op.name = ip), Op[ip] = op, op.rawDefinition = cp.bind(null, pp), op.aliases && mp(op.aliases, {
              languageName: ip
            })
          },
          unregisterLanguage: function(pp) {
            delete Op[pp];
            for (const ip of Object.keys(op)) op[ip] === pp && delete op[ip]
          },
          listLanguages: function() {
            return Object.keys(Op)
          },
          getLanguage: kp,
          registerAliases: mp,
          autoDetection: Rp,
          inherit: Di,
          addPlugin: function(pp) {
            ! function(pp) {
              pp["before:highlightBlock"] && !pp["before:highlightElement"] && (pp["before:highlightElement"] = ip => {
                pp["before:highlightBlock"](Object.assign({
                  block: ip.el
                }, ip))
              }), pp["after:highlightBlock"] && !pp["after:highlightElement"] && (pp["after:highlightElement"] = ip => {
                pp["after:highlightBlock"](Object.assign({
                  block: ip.el
                }, ip))
              })
            }(pp), Ip.push(pp)
          },
          removePlugin: function(pp) {
            const ip = Ip.indexOf(pp); - 1 !== ip && Ip.splice(ip, 1)
          }
        }), pp.debugMode = function() {
          Sp = !1
        }, pp.safeMode = function() {
          Sp = !0
        }, pp.versionString = "11.11.1", pp.regex = {
          concat: yp,
          lookahead: Ap,
          either: Up,
          optional: Wp,
          anyNumberOfTimes: Pp
        };
        for (const cp in bp) "object" === typeof bp[cp] && ip(bp[cp]);
        return Object.assign(pp, bp), pp
      },
      Wi = Pi({});
    Wi.newInstance = () => Pi({}), pp.exports = Wi, Wi.HighlightJS = Wi, Wi.default = Wi
  },
  4819: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    const Op = cp(4824)
  },
  4831: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ap
    });
    const Op = "[A-Za-z$_][0-9A-Za-z$_]*",
      op = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Ip = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Sp = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      xp = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Lp = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Yp = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Dp = [].concat(Lp, Sp, xp);

    function Ap(pp) {
      const ip = pp.regex,
        cp = Op,
        Ap = "<>",
        Pp = "</>",
        Wp = {
          mW: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (pp, ip) => {
            const cp = pp[0].length + pp.index,
              Op = pp.input[cp];
            if ("<" === Op || "," === Op) return void ip.ignoreMatch();
            let op;
            ">" === Op && (((pp, ip) => {
              let {
                after: cp
              } = ip;
              const Op = "</" + pp[0].slice(1);
              return -1 !== pp.input.indexOf(Op, cp)
            })(pp, {
              after: cp
            }) || ip.ignoreMatch());
            const Ip = pp.input.substring(cp);
            ((op = Ip.match(/^\s*=/)) || (op = Ip.match(/^\s+extends\s+/)) && 0 === op.index) && ip.ignoreMatch()
          }
        },
        yp = {
          $pattern: Op,
          keyword: op,
          literal: Ip,
          built_in: Dp,
          "variable.language": Yp
        },
        Up = "[0-9](_?[0-9])*",
        wp = `\\.(${Up})`,
        vp = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        tp = {
          className: "number",
          variants: [{
            mW: `(\\b(${vp})((${wp})|\\.)?|(${wp}))[eE][+-]?(${Up})\\b`
          }, {
            mW: `\\b(${vp})\\b((${wp})\\b|\\.)?|(${wp})\\b`
          }, {
            mW: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            mW: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            mW: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            mW: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            mW: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Hp = {
          className: "subst",
          mW: "\\$\\{",
          end: "\\}",
          keywords: yp,
          contains: []
        },
        dp = {
          mW: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [pp.BACKSLASH_ESCAPE, Hp],
            subLanguage: "xml"
          }
        },
        ep = {
          mW: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [pp.BACKSLASH_ESCAPE, Hp],
            subLanguage: "css"
          }
        },
        jp = {
          mW: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [pp.BACKSLASH_ESCAPE, Hp],
            subLanguage: "graphql"
          }
        },
        kp = {
          className: "string",
          mW: "`",
          end: "`",
          contains: [pp.BACKSLASH_ESCAPE, Hp]
        },
        mp = {
          className: "comment",
          variants: [pp.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              mW: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                mW: "@[A-Za-z]+"
              }, {
                className: "type",
                mW: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                mW: cp + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                mW: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), pp.C_BLOCK_COMMENT_MODE, pp.C_LINE_COMMENT_MODE]
        },
        Rp = [pp.APOS_STRING_MODE, pp.QUOTE_STRING_MODE, dp, ep, jp, kp, {
          match: /\$\d+/
        }, tp];
      Hp.contains = Rp.concat({
        mW: /\{/,
        end: /\}/,
        keywords: yp,
        contains: ["self"].concat(Rp)
      });
      const qp = [].concat(mp, Hp.contains),
        Mp = qp.concat([{
          mW: /(\s*)\(/,
          end: /\)/,
          keywords: yp,
          contains: ["self"].concat(qp)
        }]),
        Cp = {
          className: "params",
          mW: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: yp,
          contains: Mp
        },
        Ep = {
          variants: [{
            match: [/class/, /\s+/, cp, /\s+/, /extends/, /\s+/, ip.concat(cp, "(", ip.concat(/\./, cp), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, cp],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Xp = {
          relevance: 0,
          match: ip.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Sp, ...xp]
          }
        },
        lp = {
          variants: [{
            match: [/function/, /\s+/, cp, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Cp],
          illegal: /%/
        };
      const Qp = {
        match: ip.concat(/\b/, (Jp = [...Lp, "super", "import"].map((pp => `${pp}\\s*\\(`)), ip.concat("(?!", Jp.join("|"), ")")), cp, ip.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Jp;
      const Bp = {
          mW: ip.concat(/\./, ip.lookahead(ip.concat(cp, /(?![0-9A-Za-z$_(])/))),
          end: cp,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Np = {
          match: [/get|set/, /\s+/, cp, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            mW: /\(\)/
          }, Cp]
        },
        Tp = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + pp.UNDERSCORE_IDENT_RE + ")\\s*=>",
        fp = {
          match: [/const|var|let/, /\s+/, cp, /\s*/, /=\s*/, /(async\s*)?/, ip.lookahead(Tp)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Cp]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: yp,
        exports: {
          PARAMS_CONTAINS: Mp,
          CLASS_REFERENCE: Xp
        },
        illegal: /#(?![$_A-z])/,
        contains: [pp.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          mW: /^\s*['"]use (strict|asm)['"]/
        }, pp.APOS_STRING_MODE, pp.QUOTE_STRING_MODE, dp, ep, jp, kp, mp, {
          match: /\$\d+/
        }, tp, Xp, {
          scope: "attr",
          match: cp + ip.lookahead(":"),
          relevance: 0
        }, fp, {
          mW: "(" + pp.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [mp, pp.REGEXP_MODE, {
            className: "function",
            mW: Tp,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                mW: pp.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                mW: /\(\s*\)/,
                skip: !0
              }, {
                mW: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: yp,
                contains: Mp
              }]
            }]
          }, {
            mW: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              mW: Ap,
              end: Pp
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              mW: Wp.mW,
              "on:begin": Wp.isTrulyOpeningTag,
              end: Wp.end
            }],
            subLanguage: "xml",
            contains: [{
              mW: Wp.mW,
              end: Wp.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, lp, {
          beginKeywords: "while if switch catch for"
        }, {
          mW: "\\b(?!function)" + pp.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Cp, pp.inherit(pp.TITLE_MODE, {
            mW: cp,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Bp, {
          match: "\\$" + cp,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Cp]
        }, Qp, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Ep, Np, {
          match: /\$[(.]/
        }]
      }
    }
  },
  4838: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Pp
    });
    const Op = "[A-Za-z$_][0-9A-Za-z$_]*",
      op = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends", "using"],
      Ip = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      Sp = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
      xp = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
      Lp = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
      Yp = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"],
      Dp = [].concat(Lp, Sp, xp);

    function Ap(pp) {
      const ip = pp.regex,
        cp = Op,
        Ap = "<>",
        Pp = "</>",
        Wp = {
          mW: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (pp, ip) => {
            const cp = pp[0].length + pp.index,
              Op = pp.input[cp];
            if ("<" === Op || "," === Op) return void ip.ignoreMatch();
            let op;
            ">" === Op && (((pp, ip) => {
              let {
                after: cp
              } = ip;
              const Op = "</" + pp[0].slice(1);
              return -1 !== pp.input.indexOf(Op, cp)
            })(pp, {
              after: cp
            }) || ip.ignoreMatch());
            const Ip = pp.input.substring(cp);
            ((op = Ip.match(/^\s*=/)) || (op = Ip.match(/^\s+extends\s+/)) && 0 === op.index) && ip.ignoreMatch()
          }
        },
        yp = {
          $pattern: Op,
          keyword: op,
          literal: Ip,
          built_in: Dp,
          "variable.language": Yp
        },
        Up = "[0-9](_?[0-9])*",
        wp = `\\.(${Up})`,
        vp = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        tp = {
          className: "number",
          variants: [{
            mW: `(\\b(${vp})((${wp})|\\.)?|(${wp}))[eE][+-]?(${Up})\\b`
          }, {
            mW: `\\b(${vp})\\b((${wp})\\b|\\.)?|(${wp})\\b`
          }, {
            mW: "\\b(0|[1-9](_?[0-9])*)n\\b"
          }, {
            mW: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
          }, {
            mW: "\\b0[bB][0-1](_?[0-1])*n?\\b"
          }, {
            mW: "\\b0[oO][0-7](_?[0-7])*n?\\b"
          }, {
            mW: "\\b0[0-7]+n?\\b"
          }],
          relevance: 0
        },
        Hp = {
          className: "subst",
          mW: "\\$\\{",
          end: "\\}",
          keywords: yp,
          contains: []
        },
        dp = {
          mW: ".?html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [pp.BACKSLASH_ESCAPE, Hp],
            subLanguage: "xml"
          }
        },
        ep = {
          mW: ".?css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [pp.BACKSLASH_ESCAPE, Hp],
            subLanguage: "css"
          }
        },
        jp = {
          mW: ".?gql`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [pp.BACKSLASH_ESCAPE, Hp],
            subLanguage: "graphql"
          }
        },
        kp = {
          className: "string",
          mW: "`",
          end: "`",
          contains: [pp.BACKSLASH_ESCAPE, Hp]
        },
        mp = {
          className: "comment",
          variants: [pp.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
              mW: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [{
                className: "doctag",
                mW: "@[A-Za-z]+"
              }, {
                className: "type",
                mW: "\\{",
                end: "\\}",
                excludeEnd: !0,
                excludeBegin: !0,
                relevance: 0
              }, {
                className: "variable",
                mW: cp + "(?=\\s*(-)|$)",
                endsParent: !0,
                relevance: 0
              }, {
                mW: /(?=[^\n])\s/,
                relevance: 0
              }]
            }]
          }), pp.C_BLOCK_COMMENT_MODE, pp.C_LINE_COMMENT_MODE]
        },
        Rp = [pp.APOS_STRING_MODE, pp.QUOTE_STRING_MODE, dp, ep, jp, kp, {
          match: /\$\d+/
        }, tp];
      Hp.contains = Rp.concat({
        mW: /\{/,
        end: /\}/,
        keywords: yp,
        contains: ["self"].concat(Rp)
      });
      const qp = [].concat(mp, Hp.contains),
        Mp = qp.concat([{
          mW: /(\s*)\(/,
          end: /\)/,
          keywords: yp,
          contains: ["self"].concat(qp)
        }]),
        Cp = {
          className: "params",
          mW: /(\s*)\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: yp,
          contains: Mp
        },
        Ep = {
          variants: [{
            match: [/class/, /\s+/, cp, /\s+/, /extends/, /\s+/, ip.concat(cp, "(", ip.concat(/\./, cp), ")*")],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited"
            }
          }, {
            match: [/class/, /\s+/, cp],
            scope: {
              1: "keyword",
              3: "title.class"
            }
          }]
        },
        Xp = {
          relevance: 0,
          match: ip.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
          className: "title.class",
          keywords: {
            _: [...Sp, ...xp]
          }
        },
        lp = {
          variants: [{
            match: [/function/, /\s+/, cp, /(?=\s*\()/]
          }, {
            match: [/function/, /\s*(?=\()/]
          }],
          className: {
            1: "keyword",
            3: "title.function"
          },
          label: "func.def",
          contains: [Cp],
          illegal: /%/
        };
      const Qp = {
        match: ip.concat(/\b/, (Jp = [...Lp, "super", "import"].map((pp => `${pp}\\s*\\(`)), ip.concat("(?!", Jp.join("|"), ")")), cp, ip.lookahead(/\s*\(/)),
        className: "title.function",
        relevance: 0
      };
      var Jp;
      const Bp = {
          mW: ip.concat(/\./, ip.lookahead(ip.concat(cp, /(?![0-9A-Za-z$_(])/))),
          end: cp,
          excludeBegin: !0,
          keywords: "prototype",
          className: "property",
          relevance: 0
        },
        Np = {
          match: [/get|set/, /\s+/, cp, /(?=\()/],
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [{
            mW: /\(\)/
          }, Cp]
        },
        Tp = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + pp.UNDERSCORE_IDENT_RE + ")\\s*=>",
        fp = {
          match: [/const|var|let/, /\s+/, cp, /\s*/, /=\s*/, /(async\s*)?/, ip.lookahead(Tp)],
          keywords: "async",
          className: {
            1: "keyword",
            3: "title.function"
          },
          contains: [Cp]
        };
      return {
        name: "JavaScript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: yp,
        exports: {
          PARAMS_CONTAINS: Mp,
          CLASS_REFERENCE: Xp
        },
        illegal: /#(?![$_A-z])/,
        contains: [pp.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }), {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          mW: /^\s*['"]use (strict|asm)['"]/
        }, pp.APOS_STRING_MODE, pp.QUOTE_STRING_MODE, dp, ep, jp, kp, mp, {
          match: /\$\d+/
        }, tp, Xp, {
          scope: "attr",
          match: cp + ip.lookahead(":"),
          relevance: 0
        }, fp, {
          mW: "(" + pp.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [mp, pp.REGEXP_MODE, {
            className: "function",
            mW: Tp,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [{
              className: "params",
              variants: [{
                mW: pp.UNDERSCORE_IDENT_RE,
                relevance: 0
              }, {
                className: null,
                mW: /\(\s*\)/,
                skip: !0
              }, {
                mW: /(\s*)\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: yp,
                contains: Mp
              }]
            }]
          }, {
            mW: /,/,
            relevance: 0
          }, {
            match: /\s+/,
            relevance: 0
          }, {
            variants: [{
              mW: Ap,
              end: Pp
            }, {
              match: /<[A-Za-z0-9\\._:-]+\s*\/>/
            }, {
              mW: Wp.mW,
              "on:begin": Wp.isTrulyOpeningTag,
              end: Wp.end
            }],
            subLanguage: "xml",
            contains: [{
              mW: Wp.mW,
              end: Wp.end,
              skip: !0,
              contains: ["self"]
            }]
          }]
        }, lp, {
          beginKeywords: "while if switch catch for"
        }, {
          mW: "\\b(?!function)" + pp.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [Cp, pp.inherit(pp.TITLE_MODE, {
            mW: cp,
            className: "title.function"
          })]
        }, {
          match: /\.\.\./,
          relevance: 0
        }, Bp, {
          match: "\\$" + cp,
          relevance: 0
        }, {
          match: [/\bconstructor(?=\s*\()/],
          className: {
            1: "title.function"
          },
          contains: [Cp]
        }, Qp, {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant"
        }, Ep, Np, {
          match: /\$[(.]/
        }]
      }
    }

    function Pp(pp) {
      const ip = pp.regex,
        cp = Ap(pp),
        Sp = Op,
        xp = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
        Lp = {
          mW: [/namespace/, /\s+/, pp.IDENT_RE],
          beginScope: {
            1: "keyword",
            3: "title.class"
          }
        },
        Pp = {
          beginKeywords: "interface",
          end: /\{/,
          excludeEnd: !0,
          keywords: {
            keyword: "interface extends",
            built_in: xp
          },
          contains: [cp.exports.CLASS_REFERENCE]
        },
        Wp = {
          $pattern: Op,
          keyword: op.concat(["type", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override", "satisfies"]),
          literal: Ip,
          built_in: Dp.concat(xp),
          "variable.language": Yp
        },
        yp = {
          className: "meta",
          mW: "@" + Sp
        },
        Up = (pp, ip, cp) => {
          const Op = pp.contains.findIndex((pp => pp.label === ip));
          if (-1 === Op) throw new Error("can not find mode to replace");
          pp.contains.splice(Op, 1, cp)
        };
      Object.assign(cp.keywords, Wp), cp.exports.PARAMS_CONTAINS.push(yp);
      const wp = cp.contains.find((pp => "attr" === pp.scope)),
        vp = Object.assign({}, wp, {
          match: ip.concat(Sp, ip.lookahead(/\s*\?:/))
        });
      cp.exports.PARAMS_CONTAINS.push([cp.exports.CLASS_REFERENCE, wp, vp]), cp.contains = cp.contains.concat([yp, Lp, Pp, vp]), Up(cp, "shebang", pp.SHEBANG()), Up(cp, "use_strict", {
        className: "meta",
        relevance: 10,
        mW: /^\s*['"]use strict['"]/
      });
      return cp.contains.find((pp => "func.def" === pp.label)).relevance = 0, Object.assign(cp, {
        name: "TypeScript",
        aliases: ["ts", "tsx", "mts", "cts"]
      }), cp
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);