export const id = 246;
export const ids = [246];
export const modules = {
  40032: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => ld,
      e: () => od,
      h: () => gd,
      l: () => Qd,
      o: () => Cd,
      q: () => Zd,
      t: () => Kd
    });
    var pd = kd(38812),
      Nd = kd(40037);

    function Wd(dd, Jd, kd, pd) {
      switch (Jd) {
        case 5120: {
          let Jd = dd.getInt8(kd);
          return pd && (Jd = Math.max(Jd / 127, -1)), Jd
        }
        case 5121: {
          let Jd = dd.getUint8(kd);
          return pd && (Jd /= 255), Jd
        }
        case 5122: {
          let Jd = dd.getInt16(kd, !0);
          return pd && (Jd = Math.max(Jd / 32767, -1)), Jd
        }
        case 5123: {
          let Jd = dd.getUint16(kd, !0);
          return pd && (Jd /= 65535), Jd
        }
        case 5131:
          return (0, Nd.e)(dd.getUint16(kd, !0));
        case 5124:
          return dd.getInt32(kd, !0);
        case 5125:
          return dd.getUint32(kd, !0);
        case 5126:
          return dd.getFloat32(kd, !0);
        default:
          throw new Error(`Invalid component type ${Jd}`)
      }
    }

    function Pd(dd, Jd, kd, pd, Wd) {
      switch (Jd) {
        case 5120:
          pd && (Wd = Math.round(127 * Wd)), dd.setInt8(kd, Wd);
          break;
        case 5121:
          pd && (Wd = Math.round(255 * Wd)), dd.setUint8(kd, Wd);
          break;
        case 5122:
          pd && (Wd = Math.round(32767 * Wd)), dd.setInt16(kd, Wd, !0);
          break;
        case 5123:
          pd && (Wd = Math.round(65535 * Wd)), dd.setUint16(kd, Wd, !0);
          break;
        case 5131:
          dd.setUint16(kd, (0, Nd.l)(Wd), !0);
          break;
        case 5124:
          dd.setInt32(kd, Wd, !0);
          break;
        case 5125:
          dd.setUint32(kd, Wd, !0);
          break;
        case 5126:
          dd.setFloat32(kd, Wd, !0);
          break;
        default:
          throw new Error(`Invalid component type ${Jd}`)
      }
    }

    function Zd(dd) {
      switch (dd) {
        case 5120:
        case 5121:
          return 1;
        case 5122:
        case 5123:
        case 5131:
          return 2;
        case 5124:
        case 5125:
        case 5126:
          return 4;
        default:
          throw new Error(`Invalid type '${dd}'`)
      }
    }

    function gd(dd, Jd, kd, pd, Nd, gd, Cd, Kd) {
      const od = new Array(pd),
        ld = new Array(pd);
      if (dd instanceof Array) {
        let Nd = Jd / 4;
        const Wd = kd / 4;
        for (let Jd = 0; Jd < gd; Jd += pd) {
          for (let Jd = 0; Jd < pd; Jd++) od[Jd] = ld[Jd] = dd[Nd + Jd];
          Kd(ld, Jd);
          for (let Jd = 0; Jd < pd; Jd++) od[Jd] !== ld[Jd] && (dd[Nd + Jd] = ld[Jd]);
          Nd += Wd
        }
      } else {
        const Qd = ArrayBuffer.isView(dd) ? new DataView(dd.buffer, dd.byteOffset, dd.byteLength) : new DataView(dd),
          Ld = Zd(Nd);
        for (let dd = 0; dd < gd; dd += pd) {
          for (let dd = 0, kd = Jd; dd < pd; dd++, kd += Ld) od[dd] = ld[dd] = Wd(Qd, Nd, kd, Cd);
          Kd(ld, dd);
          for (let dd = 0, kd = Jd; dd < pd; dd++, kd += Ld) od[dd] !== ld[dd] && Pd(Qd, Nd, kd, Cd, ld[dd]);
          Jd += kd
        }
      }
    }

    function Cd(dd, Jd, kd, Nd, Wd, Pd, Cd, Kd) {
      const od = Jd * Zd(kd),
        ld = Cd * Jd;
      if (5126 !== kd || Wd !== od) {
        const pd = new Float32Array(ld);
        return gd(dd, Nd, Wd, Jd, kd, ld, Pd, ((dd, kd) => {
          for (let Nd = 0; Nd < Jd; Nd++) pd[kd + Nd] = dd[Nd]
        })), pd
      }
      if (!(dd instanceof Array || dd instanceof Float32Array) || 0 !== Nd || dd.length !== ld) {
        if (dd instanceof Array) {
          const Jd = Nd / 4;
          return dd.slice(Jd, Jd + ld)
        }
        if (ArrayBuffer.isView(dd)) {
          const Jd = dd.byteOffset + Nd;
          return 0 !== (3 & Jd) && (pd.c.Warn("Float array must be aligned to 4-bytes border"), Kd = !0), Kd ? new Float32Array(dd.buffer.slice(Jd, Jd + ld * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(dd.buffer, Jd, ld)
        }
        return new Float32Array(dd, Nd, ld)
      }
      return Kd ? dd.slice() : dd
    }

    function Kd(dd, Jd, kd, Nd, Wd, Pd, Cd) {
      const Kd = Zd(kd),
        od = function(dd) {
          switch (dd) {
            case 5120:
              return Int8Array;
            case 5121:
              return Uint8Array;
            case 5122:
              return Int16Array;
            case 5123:
            case 5131:
              return Uint16Array;
            case 5124:
              return Int32Array;
            case 5125:
              return Uint32Array;
            case 5126:
              return Float32Array;
            default:
              throw new Error(`Invalid component type '${dd}'`)
          }
        }(kd),
        ld = Pd * Jd;
      if (Array.isArray(dd)) {
        if (0 !== (3 & Nd) || 0 !== (3 & Wd)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const pd = Nd / 4,
          Zd = Wd / 4;
        if (pd + (Pd - 1) * Zd + Jd > dd.length) throw new Error("Last accessed index is out of bounds.");
        if (Zd < Jd) throw new Error("Data stride cannot be smaller than the component size.");
        if (Zd !== Jd) {
          const pd = new od(ld);
          return gd(dd, Nd, Wd, Jd, kd, ld, !1, ((dd, kd) => {
            for (let Nd = 0; Nd < Jd; Nd++) pd[kd + Nd] = dd[Nd]
          })), pd
        }
        return new od(dd.slice(pd, pd + ld))
      }
      let Qd, Ld = Nd;
      ArrayBuffer.isView(dd) ? (Qd = dd.buffer, Ld += dd.byteOffset) : Qd = dd;
      if (Ld + (Pd - 1) * Wd + Jd * Kd > Qd.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Od = Jd * Kd;
      if (Wd < Od) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Wd !== Od) {
        const dd = new od(ld),
          kd = new Uint8Array(Qd, Ld),
          pd = new Uint8Array(dd.buffer),
          Nd = Jd * Kd;
        for (let Jd = 0, Zd = 0, gd = 0; Jd < Pd; Jd++, Zd += Wd, gd += Nd) pd.set(kd.subarray(Zd, Zd + Nd), gd);
        return dd
      }
      return 1 !== Kd && 0 !== (Ld & Kd - 1) && (pd.c.Warn("Array must be aligned to border of element size. Data will be copied."), Cd = !0), Cd ? new od(Qd.slice(Ld, Ld + ld * Kd)) : new od(Qd, Ld, ld)
    }

    function od(dd, Jd, kd, Nd, Wd, Pd, Cd, Kd) {
      const od = Jd * Zd(kd),
        ld = Cd * Jd;
      if (Kd.length !== ld) throw new Error("Output length is not valid");
      if (5126 === kd && Wd === od)
        if (dd instanceof Array) {
          const Jd = Nd / 4;
          Kd.set(dd, Jd)
        } else if (ArrayBuffer.isView(dd)) {
        const Jd = dd.byteOffset + Nd;
        if (0 !== (3 & Jd)) return pd.c.Warn("Float array must be aligned to 4-bytes border"), void Kd.set(new Float32Array(dd.buffer.slice(Jd, Jd + ld * Float32Array.BYTES_PER_ELEMENT)));
        const kd = new Float32Array(dd.buffer, Jd, ld);
        Kd.set(kd)
      } else {
        const Jd = new Float32Array(dd, Nd, ld);
        Kd.set(Jd)
      } else gd(dd, Nd, Wd, Jd, kd, ld, Pd, ((dd, kd) => {
        for (let pd = 0; pd < Jd; pd++) Kd[kd + pd] = dd[pd]
      }))
    }

    function ld(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(dd)) {
        for (let Nd = 0; Nd < Jd; Nd++)
          if (dd[kd + Nd] - pd > 65535) return !0;
        return !1
      }
      return 4 === dd.BYTES_PER_ELEMENT
    }

    function Qd(dd) {
      const Jd = dd.buffer;
      if (Jd instanceof ArrayBuffer) return dd;
      const kd = new ArrayBuffer(dd.byteLength);
      return new Uint8Array(kd).set(new Uint8Array(Jd, dd.byteOffset, dd.byteLength)), kd
    }
  },
  39862: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => sd,
      h: () => qd,
      l: () => Bd,
      i: () => Sd,
      m: () => jd
    });
    class pd {
      constructor() {
        this.children = []
      }
      isValid(dd) {
        return !0
      }
      process(dd, Jd, kd) {
        let pd = "";
        if (this.line) {
          let kd = this.line;
          const Nd = Jd.processor;
          if (Nd) {
            Nd.lineProcessor && (kd = Nd.lineProcessor(kd, Jd.isFragment, Jd.processingContext));
            const pd = Jd.processor?.attributeKeywordName ?? "attribute",
              Wd = Jd.isFragment && Jd.processor?.varyingFragmentKeywordName ? Jd.processor?.varyingFragmentKeywordName : !Jd.isFragment && Jd.processor?.varyingVertexKeywordName ? Jd.processor?.varyingVertexKeywordName : "varying";
            if (!Jd.isFragment && Nd.attributeProcessor && this.line.startsWith(pd)) kd = Nd.attributeProcessor(this.line, dd, Jd.processingContext);
            else if (Nd.varyingProcessor && (Nd.varyingCheck?.(this.line, Jd.isFragment) || !Nd.varyingCheck && this.line.startsWith(Wd))) kd = Nd.varyingProcessor(this.line, Jd.isFragment, dd, Jd.processingContext);
            else if (Nd.uniformProcessor && Nd.uniformRegexp && Nd.uniformRegexp.test(this.line)) Jd.lookForClosingBracketForUniformBuffer || (kd = Nd.uniformProcessor(this.line, Jd.isFragment, dd, Jd.processingContext));
            else if (Nd.uniformBufferProcessor && Nd.uniformBufferRegexp && Nd.uniformBufferRegexp.test(this.line)) Jd.lookForClosingBracketForUniformBuffer || (kd = Nd.uniformBufferProcessor(this.line, Jd.isFragment, Jd.processingContext), Jd.lookForClosingBracketForUniformBuffer = !0);
            else if (Nd.textureProcessor && Nd.textureRegexp && Nd.textureRegexp.test(this.line)) kd = Nd.textureProcessor(this.line, Jd.isFragment, dd, Jd.processingContext);
            else if ((Nd.uniformProcessor || Nd.uniformBufferProcessor) && this.line.startsWith("uniform") && !Jd.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Nd.uniformProcessor && (kd = Nd.uniformProcessor(this.line, Jd.isFragment, dd, Jd.processingContext)) : Nd.uniformBufferProcessor && (kd = Nd.uniformBufferProcessor(this.line, Jd.isFragment, Jd.processingContext), Jd.lookForClosingBracketForUniformBuffer = !0)
            }
            Jd.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (Jd.lookForClosingBracketForUniformBuffer = !1, Nd.endOfUniformBufferProcessor && (kd = Nd.endOfUniformBufferProcessor(this.line, Jd.isFragment, Jd.processingContext)))
          }
          pd += kd + "\n"
        }
        for (const Nd of this.children) pd += Nd.process(dd, Jd, kd);
        return this.additionalDefineKey && (dd[this.additionalDefineKey] = this.additionalDefineValue || "true", kd[this.additionalDefineKey] = dd[this.additionalDefineKey]), pd
      }
    }
    class Nd {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(dd) {
        this._lines.length = 0;
        for (const Jd of dd) {
          if (!Jd || "\r" === Jd) continue;
          if ("#" === Jd[0]) {
            this._lines.push(Jd);
            continue
          }
          const dd = Jd.trim();
          if (!dd) continue;
          if (dd.startsWith("//")) {
            this._lines.push(Jd);
            continue
          }
          const kd = dd.indexOf(";");
          if (-1 === kd) this._lines.push(dd);
          else if (kd === dd.length - 1) dd.length > 1 && this._lines.push(dd);
          else {
            const dd = Jd.split(";");
            for (let Jd = 0; Jd < dd.length; Jd++) {
              let kd = dd[Jd];
              kd && (kd = kd.trim(), kd && this._lines.push(kd + (Jd !== dd.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Wd extends pd {
      process(dd, Jd, kd) {
        for (let pd = 0; pd < this.children.length; pd++) {
          const Nd = this.children[pd];
          if (Nd.isValid(dd)) return Nd.process(dd, Jd, kd)
        }
        return ""
      }
    }
    class Pd extends pd {
      isValid(dd) {
        return this.testExpression.isTrue(dd)
      }
    }
    class Zd {
      isTrue(dd) {
        return !0
      }
      static postfixToInfix(dd) {
        const Jd = [];
        for (const kd of dd)
          if (void 0 === Zd._OperatorPriority[kd]) Jd.push(kd);
          else {
            const dd = Jd[Jd.length - 1],
              pd = Jd[Jd.length - 2];
            Jd.length -= 2, Jd.push(`(${pd}${kd}${dd})`)
          } return Jd[Jd.length - 1]
      }
      static infixToPostfix(dd) {
        const Jd = Zd._InfixToPostfixCache.get(dd);
        if (Jd) return Jd.accessTime = Date.now(), Jd.result;
        if (!dd.includes("&&") && !dd.includes("||") && !dd.includes(")") && !dd.includes("(")) return [dd];
        const kd = [];
        let pd = -1;
        const Nd = () => {
            Kd = Kd.trim(), "" !== Kd && (kd.push(Kd), Kd = "")
          },
          Wd = dd => {
            pd < Zd._Stack.length - 1 && (Zd._Stack[++pd] = dd)
          },
          Pd = () => Zd._Stack[pd],
          gd = () => -1 === pd ? "!!INVALID EXPRESSION!!" : Zd._Stack[pd--];
        let Cd = 0,
          Kd = "";
        for (; Cd < dd.length;) {
          const Jd = dd.charAt(Cd),
            od = Cd < dd.length - 1 ? dd.substring(Cd, 2 + Cd) : "";
          if ("(" === Jd) Kd = "", Wd(Jd);
          else if (")" === Jd) {
            for (Nd(); - 1 !== pd && "(" !== Pd();) kd.push(gd());
            gd()
          } else if (Zd._OperatorPriority[od] > 1) {
            for (Nd(); - 1 !== pd && Zd._OperatorPriority[Pd()] >= Zd._OperatorPriority[od];) kd.push(gd());
            Wd(od), Cd++
          } else Kd += Jd;
          Cd++
        }
        for (Nd(); - 1 !== pd;) "(" === Pd() ? gd() : kd.push(gd());
        return Zd._InfixToPostfixCache.size >= Zd.InfixToPostfixCacheLimitSize && Zd.ClearCache(), Zd._InfixToPostfixCache.set(dd, {
          result: kd,
          accessTime: Date.now()
        }), kd
      }
      static ClearCache() {
        const dd = Array.from(Zd._InfixToPostfixCache.entries()).sort(((dd, Jd) => dd[1].accessTime - Jd[1].accessTime));
        for (let Jd = 0; Jd < Zd.InfixToPostfixCacheCleanupSize; Jd++) Zd._InfixToPostfixCache.delete(dd[Jd][0])
      }
    }
    Zd.InfixToPostfixCacheLimitSize = 5e4, Zd.InfixToPostfixCacheCleanupSize = 25e3, Zd._InfixToPostfixCache = new Map, Zd._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, Zd._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class gd extends Zd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = dd, this.not = Jd
      }
      isTrue(dd) {
        let Jd = void 0 !== dd[this.define];
        return this.not && (Jd = !Jd), Jd
      }
    }
    class Cd extends Zd {
      isTrue(dd) {
        return this.leftOperand.isTrue(dd) || this.rightOperand.isTrue(dd)
      }
    }
    class Kd extends Zd {
      isTrue(dd) {
        return this.leftOperand.isTrue(dd) && this.rightOperand.isTrue(dd)
      }
    }
    class od extends Zd {
      constructor(dd, Jd, kd) {
        super(), this.define = dd, this.operand = Jd, this.testValue = kd
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(dd) {
        let Jd = !1;
        const kd = parseInt(void 0 != dd[this.define] ? dd[this.define] : this.define),
          pd = parseInt(void 0 != dd[this.testValue] ? dd[this.testValue] : this.testValue);
        if (isNaN(kd) || isNaN(pd)) return !1;
        switch (this.operand) {
          case ">":
            Jd = kd > pd;
            break;
          case "<":
            Jd = kd < pd;
            break;
          case "<=":
            Jd = kd <= pd;
            break;
          case ">=":
            Jd = kd >= pd;
            break;
          case "==":
            Jd = kd === pd;
            break;
          case "!=":
            Jd = kd !== pd
        }
        return Jd
      }
    }
    var ld = kd(39860),
      Qd = kd(39851);
    const Ld = /defined\s*?\((.+?)\)/g,
      Od = /defined\s*?\[(.+?)\]/g,
      ed = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      Rd = /__decl__/,
      Id = /light\{X\}.(\w*)/g,
      Gd = /\{X\}/g,
      vd = [],
      xd = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function qd(dd) {
      dd.processor && dd.processor.initializeShaders && dd.processor.initializeShaders(dd.processingContext)
    }

    function Bd(dd, Jd, kd, pd) {
      Jd.processor?.preProcessShaderCode && (dd = Jd.processor.preProcessShaderCode(dd, Jd.isFragment)), Sd(dd, Jd, (dd => {
        Jd.processCodeAfterIncludes && (dd = Jd.processCodeAfterIncludes(Jd.isFragment ? "fragment" : "vertex", dd, Jd.defines));
        const Nd = function(dd, Jd, kd) {
          let pd = function(dd, Jd) {
            if (Jd.processor?.noPrecision) return dd;
            const kd = Jd.shouldUseHighPrecisionShader; - 1 === dd.indexOf("precision highp float") ? dd = kd ? "precision highp float;\n" + dd : "precision mediump float;\n" + dd : kd || (dd = dd.replace("precision highp float", "precision mediump float"));
            return dd
          }(dd, Jd);
          if (!Jd.processor) return pd;
          if (0 === Jd.processor.shaderLanguage && -1 !== pd.indexOf("#version 3") && (pd = pd.replace("#version 300 es", ""), !Jd.processor.parseGLES3)) return pd;
          const Nd = Jd.defines,
            Wd = bd(Jd, kd);
          Jd.processor.preProcessor && (pd = Jd.processor.preProcessor(pd, Nd, Wd, Jd.isFragment, Jd.processingContext));
          const Pd = {};
          pd = md(pd, Wd, Jd, Pd), Jd.processor.postProcessor && (pd = Jd.processor.postProcessor(pd, Nd, Jd.isFragment, Jd.processingContext, kd ? {
            drawBuffersExtensionDisabled: !kd.getCaps().drawBuffersExtension
          } : {}, Wd, Pd));
          kd?._features.needShaderCodeInlining && (pd = kd.inlineShaderCode(pd));
          return pd
        }(dd, Jd, pd);
        kd(Nd, dd)
      }))
    }

    function sd(dd, Jd, kd) {
      return kd.processor && kd.processor.finalizeShaders ? kd.processor.finalizeShaders(dd, Jd, kd.processingContext) : {
        vertexCode: dd,
        fragmentCode: Jd
      }
    }

    function ad(dd) {
      const Jd = /defined\((.+)\)/.exec(dd);
      if (Jd && Jd.length) return new gd(Jd[1].trim(), "!" === dd[0]);
      const kd = ["==", "!=", ">=", "<=", "<", ">"];
      let pd = "",
        Nd = 0;
      for (pd of kd)
        if (Nd = dd.indexOf(pd), Nd > -1) break;
      if (-1 === Nd) return new gd(dd);
      const Wd = dd.substring(0, Nd).trim(),
        Pd = dd.substring(Nd + pd.length).trim();
      return new od(Wd, pd, Pd)
    }

    function Md(dd, Jd) {
      const kd = new Pd,
        pd = dd.substring(0, Jd);
      let Nd = dd.substring(Jd);
      return Nd = Nd.substring(0, (Nd.indexOf("//") + 1 || Nd.length + 1) - 1).trim(), kd.testExpression = "#ifdef" === pd ? new gd(Nd) : "#ifndef" === pd ? new gd(Nd, !0) : function(dd) {
        dd = dd.replace(Ld, "defined[$1]");
        const Jd = Zd.infixToPostfix(dd),
          kd = [];
        for (const Nd of Jd)
          if ("||" !== Nd && "&&" !== Nd) kd.push(Nd);
          else if (kd.length >= 2) {
          let dd = kd[kd.length - 1],
            Jd = kd[kd.length - 2];
          kd.length -= 2;
          const pd = "&&" == Nd ? new Kd : new Cd;
          "string" === typeof dd && (dd = dd.replace(Od, "defined($1)")), "string" === typeof Jd && (Jd = Jd.replace(Od, "defined($1)")), pd.leftOperand = "string" === typeof Jd ? ad(Jd) : Jd, pd.rightOperand = "string" === typeof dd ? ad(dd) : dd, kd.push(pd)
        }
        let pd = kd[kd.length - 1];
        return "string" === typeof pd && (pd = pd.replace(Od, "defined($1)")), "string" === typeof pd ? ad(pd) : pd
      }(Nd), kd
    }

    function Fd(dd, Jd, kd, Nd) {
      let Wd;
      for (; Yd(dd, kd, Nd);) {
        Wd = dd.currentLine;
        const Pd = Wd.substring(0, 5).toLowerCase();
        if ("#else" === Pd) {
          const kd = new pd;
          return Jd.children.push(kd), void Yd(dd, kd, Nd)
        }
        if ("#elif" === Pd) {
          const dd = Md(Wd, 5);
          Jd.children.push(dd), kd = dd
        }
      }
    }

    function Yd(dd, Jd, kd) {
      for (; dd.canRead;) {
        dd.lineIndex++;
        const Nd = dd.currentLine;
        if (Nd.indexOf("#") >= 0) {
          const pd = xd.exec(Nd);
          if (pd && pd.length) {
            switch (pd[0]) {
              case "#ifdef": {
                const pd = new Wd;
                Jd.children.push(pd);
                const Pd = Md(Nd, 6);
                pd.children.push(Pd), Fd(dd, pd, Pd, kd);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const pd = new Wd;
                Jd.children.push(pd);
                const Pd = Md(Nd, 7);
                pd.children.push(Pd), Fd(dd, pd, Pd, kd);
                break
              }
              case "#if": {
                const pd = new Wd,
                  Pd = Md(Nd, 3);
                Jd.children.push(pd), pd.children.push(Pd), Fd(dd, pd, Pd, kd);
                break
              }
            }
            continue
          }
        }
        const Pd = new pd;
        if (Pd.line = Nd, Jd.children.push(Pd), "#" === Nd[0] && "d" === Nd[1]) {
          const dd = Nd.replace(";", "").split(" ");
          Pd.additionalDefineKey = dd[1], 3 === dd.length && (Pd.additionalDefineValue = dd[2])
        }
      }
      return !1
    }

    function md(dd, Jd, kd, Wd) {
      const Pd = new pd,
        Zd = new Nd;
      return Zd.lineIndex = -1, Zd.lines = dd.split("\n"), Yd(Zd, Pd, Wd), Pd.process(Jd, kd, Wd)
    }

    function bd(dd, Jd) {
      const kd = dd.defines,
        pd = {};
      for (const Nd of kd) {
        const dd = Nd.replace("#define", "").replace(";", "").trim().split(" ");
        pd[dd[0]] = dd.length > 1 ? dd[1] : ""
      }
      return 0 === dd.processor?.shaderLanguage && (pd.GL_ES = "true"), pd.__VERSION__ = dd.version, pd[dd.platformName] = "true", (0, Qd.k)(pd, Jd?.isNDCHalfZRange, Jd?.vpd, Jd?.useExactSrgbConversions), pd
    }

    function Sd(dd, Jd, kd) {
      let pd;
      for (vd.length = 0; null !== (pd = ed.exec(dd));) vd.push(pd);
      let Nd = [dd],
        Wd = !1;
      for (const Zd of vd) {
        let dd = Zd[1];
        if (-1 !== dd.indexOf("__decl__") && (dd = dd.replace(Rd, ""), Jd.supportsUniformBuffers && (dd = dd.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), dd += "Declaration"), !Jd.includesShadersStore[dd]) {
          const pd = Jd.shadersRepository + "ShadersInclude/" + dd + ".fx";
          return void jd.loadFile(pd, (pd => {
            Jd.includesShadersStore[dd] = pd, Sd(Nd.join(""), Jd, kd)
          }))
        } {
          let kd = Jd.includesShadersStore[dd];
          if (Zd[2]) {
            const dd = Zd[3].split(",");
            for (let Jd = 0; Jd < dd.length; Jd += 2) {
              const pd = new RegExp(dd[Jd], "g"),
                Nd = dd[Jd + 1];
              kd = kd.replace(pd, Nd)
            }
          }
          if (Zd[4]) {
            const dd = Zd[5];
            if (-1 !== dd.indexOf("..")) {
              const pd = dd.split(".."),
                Nd = parseInt(pd[0]);
              let Wd = parseInt(pd[1]),
                Pd = kd.slice(0);
              kd = "", isNaN(Wd) && (Wd = Jd.indexParameters[pd[1]]);
              for (let dd = Nd; dd < Wd; dd++) Jd.supportsUniformBuffers || (Pd = Pd.replace(Id, ((dd, Jd) => Jd + "{X}"))), kd += Pd.replace(Gd, dd.toString()) + "\n"
            } else Jd.supportsUniformBuffers || (kd = kd.replace(Id, ((dd, Jd) => Jd + "{X}"))), kd = kd.replace(Gd, dd)
          }
          const pd = [];
          for (const dd of Nd) {
            const Jd = dd.split(Zd[0]);
            for (let dd = 0; dd < Jd.length - 1; dd++) pd.push(Jd[dd]), pd.push(kd);
            pd.push(Jd[Jd.length - 1])
          }
          Nd = pd, Wd = Wd || kd.indexOf("#include<") >= 0 || kd.indexOf("#include <") >= 0
        }
      }
      vd.length = 0;
      const Pd = Nd.join("");
      Wd ? Sd(Pd.toString(), Jd, kd) : kd(Pd)
    }
    const jd = {
      loadFile: (dd, Jd, kd, pd, Nd, Wd) => {
        throw (0, ld.n)("FileTools")
      }
    }
  },
  39851: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      h: () => Wd,
      k: () => Zd,
      m: () => Pd,
      o: () => gd
    });
    var pd = kd(39860);
    const Nd = {};

    function Wd(dd, Jd) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Jd ? Jd + "\n" : "") + dd
    }

    function Pd(dd, Jd, kd, Wd, Pd, Zd, gd) {
      const Cd = gd || Nd.loadFile;
      if (!Cd) throw (0, pd.n)("FileTools");
      return Cd(dd, Jd, kd, Wd, Pd, Zd)
    }

    function Zd(dd, Jd, kd, pd) {
      if (dd) return Jd ? dd.IS_NDC_HALF_ZRANGE = "" : delete dd.IS_NDC_HALF_ZRANGE, kd ? dd.USE_REVERSE_DEPTHBUFFER = "" : delete dd.USE_REVERSE_DEPTHBUFFER, void(pd ? dd.USE_EXACT_SRGB_CONVERSIONS = "" : delete dd.USE_EXACT_SRGB_CONVERSIONS);
      {
        let dd = "";
        return Jd && (dd += "#define IS_NDC_HALF_ZRANGE"), kd && (dd && (dd += "\n"), dd += "#define USE_REVERSE_DEPTHBUFFER"), pd && (dd && (dd += "\n"), dd += "#define USE_EXACT_SRGB_CONVERSIONS"), dd
      }
    }

    function gd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pd = arguments.length > 3 ? arguments[3] : void 0;
      switch (dd) {
        case 3: {
          const dd = new Int8Array(Jd);
          return pd && dd.set(new Int8Array(pd)), dd
        }
        case 0: {
          const dd = new Uint8Array(Jd);
          return pd && dd.set(new Uint8Array(pd)), dd
        }
        case 4: {
          const dd = "number" !== typeof Jd ? new Int16Array(Jd) : new Int16Array(kd ? Jd / 2 : Jd);
          return pd && dd.set(new Int16Array(pd)), dd
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const dd = "number" !== typeof Jd ? new Uint16Array(Jd) : new Uint16Array(kd ? Jd / 2 : Jd);
          return pd && dd.set(new Uint16Array(pd)), dd
        }
        case 6: {
          const dd = "number" !== typeof Jd ? new Int32Array(Jd) : new Int32Array(kd ? Jd / 4 : Jd);
          return pd && dd.set(new Int32Array(pd)), dd
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const dd = "number" !== typeof Jd ? new Uint32Array(Jd) : new Uint32Array(kd ? Jd / 4 : Jd);
          return pd && dd.set(new Uint32Array(pd)), dd
        }
        case 1: {
          const dd = "number" !== typeof Jd ? new Float32Array(Jd) : new Float32Array(kd ? Jd / 4 : Jd);
          return pd && dd.set(new Float32Array(pd)), dd
        }
      }
      const Nd = new Uint8Array(Jd);
      return pd && Nd.set(new Uint8Array(pd)), Nd
    }
  },
  39860: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Cd,
      g: () => Kd,
      j: () => gd,
      n: () => Nd
    });
    const pd = {};

    function Nd(dd) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !pd[dd]) return pd[dd] = !0, `${dd} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Wd = {};
    let Pd = !1,
      Zd = 0;

    function gd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const pd = function() {
        if ((kd || Pd) && 0 === Zd) {
          const kd = `${dd}.${Jd}`;
          Wd[kd] || (Wd[kd] = !0, console.warn(`[Babylon.js] ${kd}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return pd.__isSideEffectStub = !0, pd
    }

    function Cd(dd) {
      return !!dd && !dd.__isSideEffectStub
    }

    function Kd(dd, Jd) {
      return {
        get() {},
        set(dd) {
          Object.defineProperty(this, Jd, {
            value: dd,
            writable: !0,
            configurable: !0,
            enumerable: !0
          })
        },
        configurable: !0,
        enumerable: !0
      }
    }
  },
  39840: (dd, Jd, kd) => {
    function pd() {
      return "undefined" !== typeof window
    }

    function Nd() {
      return "undefined" !== typeof navigator
    }

    function Wd() {
      return "undefined" !== typeof document
    }

    function Pd(dd) {
      let Jd = "",
        kd = dd.firstChild;
      for (; kd;) 3 === kd.nodeType && (Jd += kd.textContent), kd = kd.nextSibling;
      return Jd
    }
    kd.d(Jd, {
      d: () => Pd,
      f: () => Wd,
      j: () => Nd,
      l: () => pd
    })
  },
  40014: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd,
      e: () => Nd,
      i: () => Wd
    });
    class pd extends Error {}
    pd._setPrototypeOf = Object.setPrototypeOf || ((dd, Jd) => (dd.__proto__ = Jd, dd));
    const Nd = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Wd extends pd {
      constructor(dd, Jd, kd) {
        super(dd), this.errorCode = Jd, this.innerError = kd, this.name = "RuntimeError", pd._setPrototypeOf(this, Wd.prototype)
      }
    }
  },
  40007: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => bd,
      g: () => Gd,
      i: () => Md,
      j: () => Yd,
      n: () => sd,
      r: () => qd,
      s: () => Bd,
      w: () => nd,
      x: () => ad,
      y: () => vd
    });
    var pd = kd(40010),
      Nd = kd(39840),
      Wd = kd(37280);
    class Pd {}
    Pd.FilesToLoad = {};
    var Zd = kd(40014),
      gd = kd(40023),
      Cd = kd(37277),
      Kd = kd(39851),
      od = kd(39862),
      ld = kd(38812),
      Qd = kd(39866),
      Ld = kd(40032);
    const Od = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class ed extends Zd.i {
      constructor(dd, Jd) {
        super(dd, Zd.e.LoadFileError), this.name = "LoadFileError", Zd.b._setPrototypeOf(this, ed.prototype), Jd instanceof pd.b ? this.request = Jd : this.file = Jd
      }
    }
    class Rd extends Zd.i {
      constructor(dd, Jd) {
        super(dd, Zd.e.RequestFileError), this.request = Jd, this.name = "RequestFileError", Zd.b._setPrototypeOf(this, Rd.prototype)
      }
    }
    class Id extends Zd.i {
      constructor(dd, Jd) {
        super(dd, Zd.e.ReadFileError), this.file = Jd, this.name = "ReadFileError", Zd.b._setPrototypeOf(this, Id.prototype)
      }
    }
    const Gd = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (kd, pd, Nd) => 0 !== pd.status || Nd >= dd || -1 !== kd.indexOf("file:") ? -1 : Math.pow(2, Nd) * Jd
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: dd => dd,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: dd => dd,
        CleanUrl: dd => dd = dd.replace(/#/gm, "%23")
      },
      vd = (dd, Jd) => {
        if ((!dd || 0 !== dd.indexOf("data:")) && Gd.CorsBehavior)
          if ("string" === typeof Gd.CorsBehavior || Gd.CorsBehavior instanceof String) Jd.crossOrigin = Gd.CorsBehavior;
          else {
            const kd = Gd.CorsBehavior(dd);
            kd && (Jd.crossOrigin = kd)
          }
      },
      xd = {
        getRequiredSize: null
      },
      qd = function(dd, Jd, kd, Nd) {
        let Wd, Zd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Kd = arguments.length > 5 ? arguments[5] : void 0,
          od = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Cd.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !od?._features.forceBitmapOverHTMLImageElement) return kd("LoadImage is only supported in web or BabylonNative environments."), null;
        if (od?._features.forceBitmapOverHTMLImageElement && "string" !== typeof dd && "undefined" !== typeof Blob) {
          let pd;
          if (dd instanceof Blob) pd = dd;
          else {
            const Jd = dd instanceof ArrayBuffer ? dd : (0, Ld.l)(dd);
            pd = new Blob([Jd], {
              type: Zd
            })
          }
          return od.createImageBitmap(pd, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Kd
          }).then(Jd).catch((Jd => {
            kd && kd("Error while trying to load image: " + dd, Jd)
          })), null
        }
        let ld = !1;
        if (dd instanceof ArrayBuffer || ArrayBuffer.isView(dd))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let Jd;
            Jd = dd instanceof ArrayBuffer ? dd : (0, Ld.l)(dd), Wd = URL.createObjectURL(new Blob([Jd], {
              type: Zd
            })), ld = !0
          } else Wd = `data:${Zd};base64,` + (0, gd.j)(dd);
        else dd instanceof Blob ? (Wd = URL.createObjectURL(dd), ld = !0) : (Wd = Gd.CleanUrl(dd), Wd = Gd.PreprocessUrl(Wd));
        const Qd = Jd => {
          if (kd) {
            const pd = Wd || dd.toString();
            kd(`Error while trying to load image: ${0===pd.indexOf("http")||pd.length<=128?pd:pd.slice(0,128)+"..."}`, Jd)
          }
        };
        if (od?._features.forceBitmapOverHTMLImageElement) return sd(Wd, (pd => {
          od.createImageBitmap(new Blob([pd], {
            type: Zd
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Kd
          }).then((dd => {
            Jd(dd), ld && URL.revokeObjectURL(Wd)
          })).catch((Jd => {
            kd && kd("Error while trying to load image: " + dd, Jd)
          }))
        }), void 0, Nd || void 0, !0, ((dd, Jd) => {
          Qd(Jd)
        })), null;
        const Od = new Image;
        if (xd.getRequiredSize) {
          const Jd = xd.getRequiredSize(dd);
          Jd.width && (Od.width = Jd.width), Jd.height && (Od.height = Jd.height)
        }
        vd(Wd, Od);
        const ed = [],
          Rd = () => {
            for (const dd of ed) dd.target.removeEventListener(dd.name, dd.handler);
            ed.length = 0
          };
        ed.push({
          target: Od,
          name: "load",
          handler: () => {
            Rd(), Jd(Od), ld && Od.src && URL.revokeObjectURL(Od.src)
          }
        }), ed.push({
          target: Od,
          name: "error",
          handler: dd => {
            Rd(), Qd(dd), ld && Od.src && URL.revokeObjectURL(Od.src)
          }
        }), ed.push({
          target: document,
          name: "securitypolicyviolation",
          handler: dd => {
            if (dd.blockedURI !== Od.src || "TQ" === dd.disposition) return;
            Rd();
            const Jd = new Error(`CSP violation of policy ${dd.effectiveDirective} ${dd.blockedURI}. Current policy is ${dd.originalPolicy}`);
            Cd.d.UseFallbackTexture = !1, Qd(Jd), ld && Od.src && URL.revokeObjectURL(Od.src), Od.src = ""
          }
        }), (() => {
          for (const dd of ed) dd.target.addEventListener(dd.name, dd.handler)
        })();
        const Id = "blob:" === Wd.substring(0, 5),
          qd = "data:" === Wd.substring(0, 5),
          Bd = () => {
            Id || qd || !pd.b.IsCustomRequestAvailable ? Od.src = Wd : sd(Wd, ((dd, Jd, kd) => {
              const pd = new Blob([dd], {
                  type: !Zd && kd ? kd : Zd
                }),
                Nd = URL.createObjectURL(pd);
              ld = !0, Od.src = Nd
            }), void 0, Nd || void 0, !0, ((dd, Jd) => {
              Qd(Jd)
            }))
          },
          ad = () => {
            Nd && Nd.loadImage(Wd, Od)
          };
        if (!Id && !qd && Nd && Nd.enableTexturesOffline) Nd.open(ad, Bd);
        else {
          if (-1 !== Wd.indexOf("file:")) {
            const dd = decodeURIComponent(Wd.substring(5).toLowerCase());
            if (Pd.FilesToLoad[dd] && "undefined" !== typeof URL) {
              try {
                let Jd;
                try {
                  Jd = URL.createObjectURL(Pd.FilesToLoad[dd])
                } catch (Md) {
                  Jd = URL.createObjectURL(Pd.FilesToLoad[dd])
                }
                Od.src = Jd, ld = !0
              } catch (Fd) {
                Od.src = ""
              }
              return Od
            }
          }
          Bd()
        }
        return Od
      },
      Bd = (dd, Jd, kd, pd, Nd) => {
        const Pd = new FileReader,
          Zd = {
            onCompleteObservable: new Wd.e,
            abort: () => Pd.abort()
          };
        return Pd.onloadend = () => Zd.onCompleteObservable.notifyObservers(Zd), Nd && (Pd.onerror = () => {
          Nd(new Id(`Unable to read ${dd.name}`, dd))
        }), Pd.onload = dd => {
          Jd(dd.target.result)
        }, kd && (Pd.onprogress = kd), pd ? Pd.readAsArrayBuffer(dd) : Pd.readAsText(dd), Zd
      },
      sd = (dd, Jd, kd, pd, Nd, gd, Cd) => {
        if (dd.name) return Bd(dd, Jd, kd, Nd, gd ? dd => {
          gd(void 0, dd)
        } : void 0);
        const Kd = dd;
        if (-1 !== Kd.indexOf("file:")) {
          let dd = decodeURIComponent(Kd.substring(5).toLowerCase());
          0 === dd.indexOf("./") && (dd = dd.substring(2));
          const pd = Pd.FilesToLoad[dd];
          if (pd) return Bd(pd, Jd, kd, Nd, gd ? dd => gd(void 0, new ed(dd.message, dd.file)) : void 0)
        }
        const {
          match: od,
          type: Ld
        } = md(Kd);
        if (od) {
          const dd = {
            onCompleteObservable: new Wd.e,
            abort: () => () => {}
          };
          try {
            const dd = Nd ? bd(Kd) : Sd(Kd);
            Jd(dd, void 0, Ld)
          } catch (Zd) {
            gd ? gd(void 0, Zd) : ld.c.Error(Zd.message || "Failed to parse the Data URL")
          }
          return Qd.d.SetImmediate((() => {
            dd.onCompleteObservable.notifyObservers(dd)
          })), dd
        }
        return ad(Kd, ((dd, kd) => {
          Jd(dd, kd?.responseURL, kd?.getResponseHeader("content-type"))
        }), kd, pd, Nd, gd ? dd => {
          gd(dd.request, new ed(dd.message, dd.request))
        } : void 0, Cd)
      },
      ad = (dd, Jd, kd, Pd, Zd, gd, Kd) => {
        null !== Pd && (Pd ?? (Pd = Cd.d.LastCreatedScene?.offlineProvider)), dd = Gd.CleanUrl(dd), dd = Gd.PreprocessUrl(dd);
        const od = Gd.BaseUrl + dd;
        let Qd = !1;
        const Ld = {
            onCompleteObservable: new Wd.e,
            abort: () => Qd = !0
          },
          Od = () => {
            let dd, Wd = new pd.b,
              Pd = null;
            const Cd = () => {
              Wd && (kd && Wd.removeEventListener("progress", kd), dd && Wd.removeEventListener("readystatechange", dd), Wd.removeEventListener("loadend", Od))
            };
            let Od = () => {
              Cd(), Ld.onCompleteObservable.notifyObservers(Ld), Ld.onCompleteObservable.clear(), kd = void 0, dd = null, Od = null, gd = void 0, Kd = void 0, Jd = void 0
            };
            Ld.abort = () => {
              Qd = !0, Od && Od(), Wd && Wd.readyState !== (XMLHttpRequest.DONE || 4) && Wd.abort(), null !== Pd && (clearTimeout(Pd), Pd = null), Wd = null
            };
            const ed = dd => {
                const Jd = dd.message || "Unknown error";
                gd && Wd ? gd(new Rd(Jd, Wd)) : ld.c.Error(Jd)
              },
              Id = ld => {
                if (Wd) {
                  if (Wd.open("GET", od), Kd) try {
                    Kd(Wd)
                  } catch (Ld) {
                    return void ed(Ld)
                  }
                  Zd && (Wd.responseType = "arraybuffer"), kd && Wd.addEventListener("progress", kd), Od && Wd.addEventListener("loadend", Od), dd = () => {
                    if (!Qd && Wd && Wd.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (dd && Wd.removeEventListener("readystatechange", dd), Wd.status >= 200 && Wd.status < 300 || 0 === Wd.status && (!(0, Nd.l)() || Fd())) {
                        const dd = Zd ? Wd.response : Wd.responseText;
                        if (null !== dd) {
                          try {
                            Jd && Jd(dd, Wd)
                          } catch (Ld) {
                            ed(Ld)
                          }
                          return
                        }
                      }
                      const kd = Gd.DefaultRetryStrategy;
                      if (kd) {
                        const dd = kd(od, Wd, ld);
                        if (-1 !== dd) return Cd(), Wd = new pd.b, void(Pd = setTimeout((() => Id(ld + 1)), dd))
                      }
                      const Kd = new Rd("Error status: " + Wd.status + " " + Wd.statusText + " - Unable to load " + od, Wd);
                      gd && gd(Kd)
                    }
                  }, Wd.addEventListener("readystatechange", dd), Wd.send()
                }
              };
            Id(0)
          };
        if (Pd && Pd.enableSceneOffline && !dd.startsWith("blob:")) {
          const pd = dd => {
              dd && dd.status > 400 ? gd && gd(dd) : Od()
            },
            Nd = () => {
              Pd && Pd.loadFile(Gd.BaseUrl + dd, (dd => {
                !Qd && Jd && Jd(dd), Ld.onCompleteObservable.notifyObservers(Ld)
              }), kd ? dd => {
                !Qd && kd && kd(dd)
              } : void 0, pd, Zd)
            };
          Pd.open(Nd, pd)
        } else Od();
        return Ld
      },
      Md = dd => {
        const {
          match: Jd,
          type: kd
        } = md(dd);
        if (Jd) return kd || void 0;
        const pd = dd.lastIndexOf(".");
        switch (dd.substring(pd + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "hY":
            return "model/gltf+json";
          case "jpg":
          case "jpeg":
            return "image/jpeg";
          case "png":
            return "image/png";
          case "webp":
            return "image/webp";
          case "ktx":
            return "image/ktx";
          case "ktx2":
            return "image/ktx2";
          case "avif":
            return "image/avif";
          default:
            return
        }
      },
      Fd = () => "undefined" !== typeof location && "file:" === location.protocol,
      Yd = dd => Od.test(dd),
      md = dd => {
        const Jd = Od.exec(dd);
        if (null === Jd || 0 === Jd.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: Jd[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function bd(dd) {
      return (0, gd.e)(dd.split(",")[1])
    }
    const Sd = dd => (0, gd.f)(dd.split(",")[1]);
    let jd;
    const Xd = (dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) => {
      jd = {
        DecodeBase64UrlToBinary: dd,
        DecodeBase64UrlToString: Jd,
        DefaultRetryStrategy: kd.DefaultRetryStrategy,
        BaseUrl: kd.BaseUrl,
        CorsBehavior: kd.CorsBehavior,
        PreprocessUrl: kd.PreprocessUrl,
        IsBase64DataUrl: pd,
        IsFileURL: Nd,
        LoadFile: Wd,
        LoadImage: Pd,
        ReadFile: Zd,
        RequestFile: gd,
        SetCorsBehavior: Cd
      }, Object.defineProperty(jd, "DefaultRetryStrategy", {
        get: function() {
          return kd.DefaultRetryStrategy
        },
        set: function(dd) {
          kd.DefaultRetryStrategy = dd
        }
      }), Object.defineProperty(jd, "BaseUrl", {
        get: function() {
          return kd.BaseUrl
        },
        set: function(dd) {
          kd.BaseUrl = dd
        }
      }), Object.defineProperty(jd, "PreprocessUrl", {
        get: function() {
          return kd.PreprocessUrl
        },
        set: function(dd) {
          kd.PreprocessUrl = dd
        }
      }), Object.defineProperty(jd, "CorsBehavior", {
        get: function() {
          return kd.CorsBehavior
        },
        set: function(dd) {
          kd.CorsBehavior = dd
        }
      })
    };
    let fd = !1;

    function nd() {
      fd || (fd = !0, Xd(bd, Sd, Gd, Yd, Fd, sd, qd, Bd, ad, vd), Kd.d.loadFile = sd, Kd.d.loadImage = qd, od.m.loadFile = sd)
    }
  },
  40037: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      h: () => Wd,
      l: () => Pd
    });
    let pd = null;

    function Nd() {
      if (pd) return pd;
      const dd = new ArrayBuffer(4),
        Jd = new Float32Array(dd),
        kd = new Uint32Array(dd),
        Nd = new Uint32Array(512),
        Wd = new Uint32Array(512);
      for (let pd = 0; pd < 256; ++pd) {
        const dd = pd - 127;
        dd < -24 ? (Nd[pd] = 0, Nd[256 | pd] = 32768, Wd[pd] = 24, Wd[256 | pd] = 24) : dd < -14 ? (Nd[pd] = 1024 >> -dd - 14, Nd[256 | pd] = 1024 >> -dd - 14 | 32768, Wd[pd] = -dd - 1, Wd[256 | pd] = -dd - 1) : dd <= 15 ? (Nd[pd] = dd + 15 << 10, Nd[256 | pd] = dd + 15 << 10 | 32768, Wd[pd] = 13, Wd[256 | pd] = 13) : dd < 128 ? (Nd[pd] = 31744, Nd[256 | pd] = 64512, Wd[pd] = 24, Wd[256 | pd] = 24) : (Nd[pd] = 31744, Nd[256 | pd] = 64512, Wd[pd] = 13, Wd[256 | pd] = 13)
      }
      const Pd = new Uint32Array(2048),
        Zd = new Uint32Array(64),
        gd = new Uint32Array(64);
      for (let pd = 1; pd < 1024; ++pd) {
        let dd = pd << 13,
          Jd = 0;
        for (; 0 === (8388608 & dd);) dd <<= 1, Jd -= 8388608;
        dd &= -8388609, Jd += 947912704, Pd[pd] = dd | Jd
      }
      for (let pd = 1024; pd < 2048; ++pd) Pd[pd] = 939524096 + (pd - 1024 << 13);
      for (let pd = 1; pd < 31; ++pd) Zd[pd] = pd << 23;
      Zd[31] = 1199570944, Zd[32] = 2147483648;
      for (let pd = 33; pd < 63; ++pd) Zd[pd] = 2147483648 + (pd - 32 << 23);
      Zd[63] = 3347054592;
      for (let pd = 1; pd < 64; ++pd) 32 !== pd && (gd[pd] = 1024);
      return pd = {
        floatView: Jd,
        uint32View: kd,
        baseTable: Nd,
        shiftTable: Wd,
        mantissaTable: Pd,
        exponentTable: Zd,
        offsetTable: gd
      }, pd
    }
    const Wd = 65504;

    function Pd(dd) {
      const Jd = Nd();
      Jd.floatView[0] = dd;
      const kd = Jd.uint32View[0],
        pd = kd >> 23 & 511;
      return Jd.baseTable[pd] + ((8388607 & kd) >> Jd.shiftTable[pd])
    }

    function Zd(dd) {
      const Jd = Nd();
      return Jd.uint32View[0] = Jd.mantissaTable[Jd.offsetTable[dd >> 10] + (1023 & dd)] + Jd.exponentTable[dd >> 10], Jd.floatView[0]
    }
  },
  40023: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      f: () => Nd,
      j: () => pd
    });
    const pd = dd => {
        const Jd = ArrayBuffer.isView(dd) ? new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength) : new Uint8Array(dd);
        return "function" === typeof Jd.toBase64 ? Jd.toBase64() : function(dd) {
          const Jd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let kd, pd, Nd, Wd, Pd, Zd, gd, Cd = "",
            Kd = 0;
          for (; Kd < dd.length;) kd = dd[Kd++], pd = Kd < dd.length ? dd[Kd++] : Number.NaN, Nd = Kd < dd.length ? dd[Kd++] : Number.NaN, Wd = kd >> 2, Pd = (3 & kd) << 4 | pd >> 4, Zd = (15 & pd) << 2 | Nd >> 6, gd = 63 & Nd, isNaN(pd) ? Zd = gd = 64 : isNaN(Nd) && (gd = 64), Cd += Jd.charAt(Wd) + Jd.charAt(Pd) + Jd.charAt(Zd) + Jd.charAt(gd);
          return Cd
        }(Jd)
      },
      Nd = dd => atob(dd),
      Wd = dd => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(dd).buffer : function(dd) {
        const Jd = Nd(dd),
          kd = Jd.length,
          pd = new Uint8Array(new ArrayBuffer(kd));
        for (let Nd = 0; Nd < kd; Nd++) pd[Nd] = Jd.charCodeAt(Nd);
        return pd.buffer
      }(dd)
  },
  39866: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      f: () => Pd
    });
    let pd = [];
    class Nd {
      static SetImmediate(dd) {
        0 === pd.length && setTimeout((() => {
          const dd = pd;
          pd = [];
          for (const Jd of dd) Jd()
        }), 1), pd.push(dd)
      }
    }

    function Wd(dd, Jd, kd) {
      try {
        if (dd()) return Jd(), !0
      } catch (pd) {
        return kd?.(pd), !0
      }
      return !1
    }
    const Pd = function(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Pd = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Wd(dd, Jd, kd)) return null;
      const Zd = setInterval((() => {
        Wd(dd, Jd, kd) ? clearInterval(Zd) : (Nd -= pd, Nd < 0 && (clearInterval(Zd), kd?.(new Error("Operation timed out after maximum retries. " + (Pd || "")), !0)))
      }), pd);
      return () => clearInterval(Zd)
    }
  },
  40010: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(pd.CustomRequestHeaders).length > 0 || pd.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(dd) {
        return dd = (dd = dd.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(dd) {
        return pd.SkipRequestModificationForBabylonCDN && (dd.includes("preview.babylonjs.com") || dd.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(dd) {
        const Jd = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (pd._ShouldSkipRequestModifications(dd)) return {
          url: dd,
          headers: Jd
        };
        for (const Nd in pd.CustomRequestHeaders) {
          const dd = pd.CustomRequestHeaders[Nd];
          dd && (Jd[Nd] = dd)
        }
        const kd = {
          setRequestHeader: (dd, kd) => {
            Jd[dd] = kd
          }
        };
        for (const Nd of pd.CustomRequestModifiers) {
          if (pd._ShouldSkipRequestModifications(dd)) break;
          const Jd = Nd(kd, dd);
          "string" === typeof Jd && (dd = Jd)
        }
        return {
          url: dd,
          headers: Jd
        }
      }
      static async FetchAsync(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const kd = Jd.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Nd,
            headers: Wd
          } = pd._CollectCustomizations(pd._CleanUrl(dd), Jd.headers ?? {});
          return await fetch(Nd, {
            method: kd,
            headers: Wd,
            body: Jd.body ?? void 0
          })
        }
        return await new Promise(((Nd, Wd) => {
          const Pd = new pd;
          Pd.responseType = "arraybuffer", Pd.addEventListener("readystatechange", (() => {
            if (4 === Pd.readyState)
              if (Pd.status >= 200 && Pd.status < 300) {
                const dd = "undefined" !== typeof Headers ? new Headers : void 0,
                  Jd = Pd.getResponseHeader("Content-Type");
                Jd && dd && dd.set("Content-Type", Jd), "undefined" !== typeof Response ? Nd(new Response(Pd.response, {
                  status: Pd.status,
                  statusText: Pd.statusText,
                  headers: dd
                })) : Nd({
                  ok: !0,
                  status: Pd.status,
                  statusText: Pd.statusText,
                  headers: {
                    get: dd => Pd.getResponseHeader(dd)
                  },
                  arrayBuffer: async () => await Promise.resolve(Pd.response)
                })
              } else Wd(new Error(`HTTP ${Pd.status} loading '${Pd.requestURL}': ${Pd.statusText}`))
          })), Pd.open(kd, dd, Jd.headers), Pd.send(Jd.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(dd) {
        this._xhr.onprogress = dd
      }
      get readyState() {
        return this._xhr.readyState
      }
      get status() {
        return this._xhr.status
      }
      get statusText() {
        return this._xhr.statusText
      }
      get response() {
        return this._xhr.response
      }
      get responseURL() {
        return this._xhr.responseURL
      }
      get responseText() {
        return this._xhr.responseText
      }
      get responseType() {
        return this._xhr.responseType
      }
      set responseType(dd) {
        this._xhr.responseType = dd
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(dd) {
        this._xhr.timeout = dd
      }
      addEventListener(dd, Jd, kd) {
        this._xhr.addEventListener(dd, Jd, kd)
      }
      removeEventListener(dd, Jd, kd) {
        this._xhr.removeEventListener(dd, Jd, kd)
      }
      abort() {
        this._xhr.abort()
      }
      send(dd) {
        this._xhr.send(dd)
      }
      open(dd, Jd, kd) {
        const {
          url: Nd,
          headers: Wd
        } = pd._CollectCustomizations(Jd, kd);
        this._requestURL = pd._CleanUrl(Nd), this._xhr.open(dd, this._requestURL, !0);
        for (const pd in Wd) this._xhr.setRequestHeader(pd, Wd[pd])
      }
      setRequestHeader(dd, Jd) {
        this._xhr.setRequestHeader(dd, Jd)
      }
      getResponseHeader(dd) {
        return this._xhr.getResponseHeader(dd)
      }
    }
    pd.CustomRequestHeaders = {}, pd.CustomRequestModifiers = new Array, pd.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);