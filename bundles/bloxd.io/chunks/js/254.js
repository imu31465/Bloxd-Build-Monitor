export const id = 254;
export const ids = [254];
export const modules = {
  40056: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Zk,
      c: () => tk,
      d: () => ak,
      f: () => jk,
      i: () => qk,
      k: () => lk,
      l: () => Lk
    });
    var Xk = Ik(38674),
      Tk = Ik(40064);

    function ik(kk, Fk, Ik, Xk) {
      switch (Fk) {
        case 5120: {
          let Fk = kk.getInt8(Ik);
          return Xk && (Fk = Math.max(Fk / 127, -1)), Fk
        }
        case 5121: {
          let Fk = kk.getUint8(Ik);
          return Xk && (Fk /= 255), Fk
        }
        case 5122: {
          let Fk = kk.getInt16(Ik, !0);
          return Xk && (Fk = Math.max(Fk / 32767, -1)), Fk
        }
        case 5123: {
          let Fk = kk.getUint16(Ik, !0);
          return Xk && (Fk /= 65535), Fk
        }
        case 5131:
          return (0, Tk.c)(kk.getUint16(Ik, !0));
        case 5124:
          return kk.getInt32(Ik, !0);
        case 5125:
          return kk.getUint32(Ik, !0);
        case 5126:
          return kk.getFloat32(Ik, !0);
        default:
          throw new Error(`Invalid component type ${Fk}`)
      }
    }

    function yk(kk, Fk, Ik, Xk, ik) {
      switch (Fk) {
        case 5120:
          Xk && (ik = Math.round(127 * ik)), kk.setInt8(Ik, ik);
          break;
        case 5121:
          Xk && (ik = Math.round(255 * ik)), kk.setUint8(Ik, ik);
          break;
        case 5122:
          Xk && (ik = Math.round(32767 * ik)), kk.setInt16(Ik, ik, !0);
          break;
        case 5123:
          Xk && (ik = Math.round(65535 * ik)), kk.setUint16(Ik, ik, !0);
          break;
        case 5131:
          kk.setUint16(Ik, (0, Tk.i)(ik), !0);
          break;
        case 5124:
          kk.setInt32(Ik, ik, !0);
          break;
        case 5125:
          kk.setUint32(Ik, ik, !0);
          break;
        case 5126:
          kk.setFloat32(Ik, ik, !0);
          break;
        default:
          throw new Error(`Invalid component type ${Fk}`)
      }
    }

    function lk(kk) {
      switch (kk) {
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
          throw new Error(`Invalid type '${kk}'`)
      }
    }

    function ak(kk, Fk, Ik, Xk, Tk, ak, qk, Lk) {
      const tk = new Array(Xk),
        Zk = new Array(Xk);
      if (kk instanceof Array) {
        let Tk = Fk / 4;
        const ik = Ik / 4;
        for (let Fk = 0; Fk < ak; Fk += Xk) {
          for (let Fk = 0; Fk < Xk; Fk++) tk[Fk] = Zk[Fk] = kk[Tk + Fk];
          Lk(Zk, Fk);
          for (let Fk = 0; Fk < Xk; Fk++) tk[Fk] !== Zk[Fk] && (kk[Tk + Fk] = Zk[Fk]);
          Tk += ik
        }
      } else {
        const jk = ArrayBuffer.isView(kk) ? new DataView(kk.buffer, kk.byteOffset, kk.byteLength) : new DataView(kk),
          ek = lk(Tk);
        for (let kk = 0; kk < ak; kk += Xk) {
          for (let kk = 0, Ik = Fk; kk < Xk; kk++, Ik += ek) tk[kk] = Zk[kk] = ik(jk, Tk, Ik, qk);
          Lk(Zk, kk);
          for (let kk = 0, Ik = Fk; kk < Xk; kk++, Ik += ek) tk[kk] !== Zk[kk] && yk(jk, Tk, Ik, qk, Zk[kk]);
          Fk += Ik
        }
      }
    }

    function qk(kk, Fk, Ik, Tk, ik, yk, qk, Lk) {
      const tk = Fk * lk(Ik),
        Zk = qk * Fk;
      if (5126 !== Ik || ik !== tk) {
        const Xk = new Float32Array(Zk);
        return ak(kk, Tk, ik, Fk, Ik, Zk, yk, ((kk, Ik) => {
          for (let Tk = 0; Tk < Fk; Tk++) Xk[Ik + Tk] = kk[Tk]
        })), Xk
      }
      if (!(kk instanceof Array || kk instanceof Float32Array) || 0 !== Tk || kk.length !== Zk) {
        if (kk instanceof Array) {
          const Fk = Tk / 4;
          return kk.slice(Fk, Fk + Zk)
        }
        if (ArrayBuffer.isView(kk)) {
          const Fk = kk.byteOffset + Tk;
          return 0 !== (3 & Fk) && (Xk.e.Warn("Float array must be aligned to 4-bytes border"), Lk = !0), Lk ? new Float32Array(kk.buffer.slice(Fk, Fk + Zk * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(kk.buffer, Fk, Zk)
        }
        return new Float32Array(kk, Tk, Zk)
      }
      return Lk ? kk.slice() : kk
    }

    function Lk(kk, Fk, Ik, Tk, ik, yk, qk) {
      const Lk = lk(Ik),
        tk = function(kk) {
          switch (kk) {
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
              throw new Error(`Invalid component type '${kk}'`)
          }
        }(Ik),
        Zk = yk * Fk;
      if (Array.isArray(kk)) {
        if (0 !== (3 & Tk) || 0 !== (3 & ik)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Xk = Tk / 4,
          lk = ik / 4;
        if (Xk + (yk - 1) * lk + Fk > kk.length) throw new Error("Last accessed index is out of bounds.");
        if (lk < Fk) throw new Error("Data stride cannot be smaller than the component size.");
        if (lk !== Fk) {
          const Xk = new tk(Zk);
          return ak(kk, Tk, ik, Fk, Ik, Zk, !1, ((kk, Ik) => {
            for (let Tk = 0; Tk < Fk; Tk++) Xk[Ik + Tk] = kk[Tk]
          })), Xk
        }
        return new tk(kk.slice(Xk, Xk + Zk))
      }
      let jk, ek = Tk;
      ArrayBuffer.isView(kk) ? (jk = kk.buffer, ek += kk.byteOffset) : jk = kk;
      if (ek + (yk - 1) * ik + Fk * Lk > jk.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const wk = Fk * Lk;
      if (ik < wk) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (ik !== wk) {
        const kk = new tk(Zk),
          Ik = new Uint8Array(jk, ek),
          Xk = new Uint8Array(kk.buffer),
          Tk = Fk * Lk;
        for (let Fk = 0, lk = 0, ak = 0; Fk < yk; Fk++, lk += ik, ak += Tk) Xk.set(Ik.subarray(lk, lk + Tk), ak);
        return kk
      }
      return 1 !== Lk && 0 !== (ek & Lk - 1) && (Xk.e.Warn("Array must be aligned to border of element size. Data will be copied."), qk = !0), qk ? new tk(jk.slice(ek, ek + Zk * Lk)) : new tk(jk, ek, Zk)
    }

    function tk(kk, Fk, Ik, Tk, ik, yk, qk, Lk) {
      const tk = Fk * lk(Ik),
        Zk = qk * Fk;
      if (Lk.length !== Zk) throw new Error("Output length is not valid");
      if (5126 === Ik && ik === tk)
        if (kk instanceof Array) {
          const Fk = Tk / 4;
          Lk.set(kk, Fk)
        } else if (ArrayBuffer.isView(kk)) {
        const Fk = kk.byteOffset + Tk;
        if (0 !== (3 & Fk)) return Xk.e.Warn("Float array must be aligned to 4-bytes border"), void Lk.set(new Float32Array(kk.buffer.slice(Fk, Fk + Zk * Float32Array.BYTES_PER_ELEMENT)));
        const Ik = new Float32Array(kk.buffer, Fk, Zk);
        Lk.set(Ik)
      } else {
        const Fk = new Float32Array(kk, Tk, Zk);
        Lk.set(Fk)
      } else ak(kk, Tk, ik, Fk, Ik, Zk, yk, ((kk, Ik) => {
        for (let Xk = 0; Xk < Fk; Xk++) Lk[Ik + Xk] = kk[Xk]
      }))
    }

    function Zk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(kk)) {
        for (let Tk = 0; Tk < Fk; Tk++)
          if (kk[Ik + Tk] - Xk > 65535) return !0;
        return !1
      }
      return 4 === kk.BYTES_PER_ELEMENT
    }

    function jk(kk) {
      const Fk = kk.buffer;
      if (Fk instanceof ArrayBuffer) return kk;
      const Ik = new ArrayBuffer(kk.byteLength);
      return new Uint8Array(Ik).set(new Uint8Array(Fk, kk.byteOffset, kk.byteLength)), Ik
    }
  },
  39872: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => zk,
      e: () => sk,
      k: () => Vk,
      g: () => pk,
      n: () => uk
    });
    class Xk {
      constructor() {
        this.children = []
      }
      isValid(kk) {
        return !0
      }
      process(kk, Fk, Ik) {
        let Xk = "";
        if (this.line) {
          let Ik = this.line;
          const Tk = Fk.processor;
          if (Tk) {
            Tk.lineProcessor && (Ik = Tk.lineProcessor(Ik, Fk.isFragment, Fk.processingContext));
            const Xk = Fk.processor?.attributeKeywordName ?? "attribute",
              ik = Fk.isFragment && Fk.processor?.varyingFragmentKeywordName ? Fk.processor?.varyingFragmentKeywordName : !Fk.isFragment && Fk.processor?.varyingVertexKeywordName ? Fk.processor?.varyingVertexKeywordName : "varying";
            if (!Fk.isFragment && Tk.attributeProcessor && this.line.startsWith(Xk)) Ik = Tk.attributeProcessor(this.line, kk, Fk.processingContext);
            else if (Tk.varyingProcessor && (Tk.varyingCheck?.(this.line, Fk.isFragment) || !Tk.varyingCheck && this.line.startsWith(ik))) Ik = Tk.varyingProcessor(this.line, Fk.isFragment, kk, Fk.processingContext);
            else if (Tk.uniformProcessor && Tk.uniformRegexp && Tk.uniformRegexp.test(this.line)) Fk.lookForClosingBracketForUniformBuffer || (Ik = Tk.uniformProcessor(this.line, Fk.isFragment, kk, Fk.processingContext));
            else if (Tk.uniformBufferProcessor && Tk.uniformBufferRegexp && Tk.uniformBufferRegexp.test(this.line)) Fk.lookForClosingBracketForUniformBuffer || (Ik = Tk.uniformBufferProcessor(this.line, Fk.isFragment, Fk.processingContext), Fk.lookForClosingBracketForUniformBuffer = !0);
            else if (Tk.textureProcessor && Tk.textureRegexp && Tk.textureRegexp.test(this.line)) Ik = Tk.textureProcessor(this.line, Fk.isFragment, kk, Fk.processingContext);
            else if ((Tk.uniformProcessor || Tk.uniformBufferProcessor) && this.line.startsWith("uniform") && !Fk.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Tk.uniformProcessor && (Ik = Tk.uniformProcessor(this.line, Fk.isFragment, kk, Fk.processingContext)) : Tk.uniformBufferProcessor && (Ik = Tk.uniformBufferProcessor(this.line, Fk.isFragment, Fk.processingContext), Fk.lookForClosingBracketForUniformBuffer = !0)
            }
            Fk.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (Fk.lookForClosingBracketForUniformBuffer = !1, Tk.endOfUniformBufferProcessor && (Ik = Tk.endOfUniformBufferProcessor(this.line, Fk.isFragment, Fk.processingContext)))
          }
          Xk += Ik + "\n"
        }
        for (const Tk of this.children) Xk += Tk.process(kk, Fk, Ik);
        return this.additionalDefineKey && (kk[this.additionalDefineKey] = this.additionalDefineValue || "true", Ik[this.additionalDefineKey] = kk[this.additionalDefineKey]), Xk
      }
    }
    class Tk {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(kk) {
        this._lines.length = 0;
        for (const Fk of kk) {
          if (!Fk || "\r" === Fk) continue;
          if ("#" === Fk[0]) {
            this._lines.push(Fk);
            continue
          }
          const kk = Fk.trim();
          if (!kk) continue;
          if (kk.startsWith("//")) {
            this._lines.push(Fk);
            continue
          }
          const Ik = kk.indexOf(";");
          if (-1 === Ik) this._lines.push(kk);
          else if (Ik === kk.length - 1) kk.length > 1 && this._lines.push(kk);
          else {
            const kk = Fk.split(";");
            for (let Fk = 0; Fk < kk.length; Fk++) {
              let Ik = kk[Fk];
              Ik && (Ik = Ik.trim(), Ik && this._lines.push(Ik + (Fk !== kk.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class ik extends Xk {
      process(kk, Fk, Ik) {
        for (let Xk = 0; Xk < this.children.length; Xk++) {
          const Tk = this.children[Xk];
          if (Tk.isValid(kk)) return Tk.process(kk, Fk, Ik)
        }
        return ""
      }
    }
    class yk extends Xk {
      isValid(kk) {
        return this.testExpression.isTrue(kk)
      }
    }
    class lk {
      isTrue(kk) {
        return !0
      }
      static postfixToInfix(kk) {
        const Fk = [];
        for (const Ik of kk)
          if (void 0 === lk._OperatorPriority[Ik]) Fk.push(Ik);
          else {
            const kk = Fk[Fk.length - 1],
              Xk = Fk[Fk.length - 2];
            Fk.length -= 2, Fk.push(`(${Xk}${Ik}${kk})`)
          } return Fk[Fk.length - 1]
      }
      static infixToPostfix(kk) {
        const Fk = lk._InfixToPostfixCache.get(kk);
        if (Fk) return Fk.accessTime = Date.now(), Fk.result;
        if (!kk.includes("&&") && !kk.includes("||") && !kk.includes(")") && !kk.includes("(")) return [kk];
        const Ik = [];
        let Xk = -1;
        const Tk = () => {
            Lk = Lk.trim(), "" !== Lk && (Ik.push(Lk), Lk = "")
          },
          ik = kk => {
            Xk < lk._Stack.length - 1 && (lk._Stack[++Xk] = kk)
          },
          yk = () => lk._Stack[Xk],
          ak = () => -1 === Xk ? "!!INVALID EXPRESSION!!" : lk._Stack[Xk--];
        let qk = 0,
          Lk = "";
        for (; qk < kk.length;) {
          const Fk = kk.charAt(qk),
            tk = qk < kk.length - 1 ? kk.substring(qk, 2 + qk) : "";
          if ("(" === Fk) Lk = "", ik(Fk);
          else if (")" === Fk) {
            for (Tk(); - 1 !== Xk && "(" !== yk();) Ik.push(ak());
            ak()
          } else if (lk._OperatorPriority[tk] > 1) {
            for (Tk(); - 1 !== Xk && lk._OperatorPriority[yk()] >= lk._OperatorPriority[tk];) Ik.push(ak());
            ik(tk), qk++
          } else Lk += Fk;
          qk++
        }
        for (Tk(); - 1 !== Xk;) "(" === yk() ? ak() : Ik.push(ak());
        return lk._InfixToPostfixCache.size >= lk.InfixToPostfixCacheLimitSize && lk.ClearCache(), lk._InfixToPostfixCache.set(kk, {
          result: Ik,
          accessTime: Date.now()
        }), Ik
      }
      static ClearCache() {
        const kk = Array.from(lk._InfixToPostfixCache.entries()).sort(((kk, Fk) => kk[1].accessTime - Fk[1].accessTime));
        for (let Fk = 0; Fk < lk.InfixToPostfixCacheCleanupSize; Fk++) lk._InfixToPostfixCache.delete(kk[Fk][0])
      }
    }
    lk.InfixToPostfixCacheLimitSize = 5e4, lk.InfixToPostfixCacheCleanupSize = 25e3, lk._InfixToPostfixCache = new Map, lk._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, lk._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class ak extends lk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = kk, this.not = Fk
      }
      isTrue(kk) {
        let Fk = void 0 !== kk[this.define];
        return this.not && (Fk = !Fk), Fk
      }
    }
    class qk extends lk {
      isTrue(kk) {
        return this.leftOperand.isTrue(kk) || this.rightOperand.isTrue(kk)
      }
    }
    class Lk extends lk {
      isTrue(kk) {
        return this.leftOperand.isTrue(kk) && this.rightOperand.isTrue(kk)
      }
    }
    class tk extends lk {
      constructor(kk, Fk, Ik) {
        super(), this.define = kk, this.operand = Fk, this.testValue = Ik
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(kk) {
        let Fk = !1;
        const Ik = parseInt(void 0 != kk[this.define] ? kk[this.define] : this.define),
          Xk = parseInt(void 0 != kk[this.testValue] ? kk[this.testValue] : this.testValue);
        if (isNaN(Ik) || isNaN(Xk)) return !1;
        switch (this.operand) {
          case ">":
            Fk = Ik > Xk;
            break;
          case "<":
            Fk = Ik < Xk;
            break;
          case "<=":
            Fk = Ik <= Xk;
            break;
          case ">=":
            Fk = Ik >= Xk;
            break;
          case "==":
            Fk = Ik === Xk;
            break;
          case "!=":
            Fk = Ik !== Xk
        }
        return Fk
      }
    }
    var Zk = Ik(39863),
      jk = Ik(39860);
    const ek = /defined\s*?\((.+?)\)/g,
      wk = /defined\s*?\[(.+?)\]/g,
      Hk = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      Jk = /__decl__/,
      xk = /light\{X\}.(\w*)/g,
      Pk = /\{X\}/g,
      Kk = [],
      Qk = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function sk(kk) {
      kk.processor && kk.processor.initializeShaders && kk.processor.initializeShaders(kk.processingContext)
    }

    function Vk(kk, Fk, Ik, Xk) {
      Fk.processor?.preProcessShaderCode && (kk = Fk.processor.preProcessShaderCode(kk, Fk.isFragment)), pk(kk, Fk, (kk => {
        Fk.processCodeAfterIncludes && (kk = Fk.processCodeAfterIncludes(Fk.isFragment ? "fragment" : "vertex", kk, Fk.defines));
        const Tk = function(kk, Fk, Ik) {
          let Xk = function(kk, Fk) {
            if (Fk.processor?.noPrecision) return kk;
            const Ik = Fk.shouldUseHighPrecisionShader; - 1 === kk.indexOf("precision highp float") ? kk = Ik ? "precision highp float;\n" + kk : "precision mediump float;\n" + kk : Ik || (kk = kk.replace("precision highp float", "precision mediump float"));
            return kk
          }(kk, Fk);
          if (!Fk.processor) return Xk;
          if (0 === Fk.processor.shaderLanguage && -1 !== Xk.indexOf("#version 3") && (Xk = Xk.replace("#version 300 es", ""), !Fk.processor.parseGLES3)) return Xk;
          const Tk = Fk.defines,
            ik = Gk(Fk, Ik);
          Fk.processor.preProcessor && (Xk = Fk.processor.preProcessor(Xk, Tk, ik, Fk.isFragment, Fk.processingContext));
          const yk = {};
          Xk = nk(Xk, ik, Fk, yk), Fk.processor.postProcessor && (Xk = Fk.processor.postProcessor(Xk, Tk, Fk.isFragment, Fk.processingContext, Ik ? {
            drawBuffersExtensionDisabled: !Ik.getCaps().drawBuffersExtension
          } : {}, ik, yk));
          Ik?._features.needShaderCodeInlining && (Xk = Ik.inlineShaderCode(Xk));
          return Xk
        }(kk, Fk, Xk);
        Ik(Tk, kk)
      }))
    }

    function zk(kk, Fk, Ik) {
      return Ik.processor && Ik.processor.finalizeShaders ? Ik.processor.finalizeShaders(kk, Fk, Ik.processingContext) : {
        vertexCode: kk,
        fragmentCode: Fk
      }
    }

    function Sk(kk) {
      const Fk = /defined\((.+)\)/.exec(kk);
      if (Fk && Fk.length) return new ak(Fk[1].trim(), "!" === kk[0]);
      const Ik = ["==", "!=", ">=", "<=", "<", ">"];
      let Xk = "",
        Tk = 0;
      for (Xk of Ik)
        if (Tk = kk.indexOf(Xk), Tk > -1) break;
      if (-1 === Tk) return new ak(kk);
      const ik = kk.substring(0, Tk).trim(),
        yk = kk.substring(Tk + Xk.length).trim();
      return new tk(ik, Xk, yk)
    }

    function vk(kk, Fk) {
      const Ik = new yk,
        Xk = kk.substring(0, Fk);
      let Tk = kk.substring(Fk);
      return Tk = Tk.substring(0, (Tk.indexOf("//") + 1 || Tk.length + 1) - 1).trim(), Ik.testExpression = "#ifdef" === Xk ? new ak(Tk) : "#ifndef" === Xk ? new ak(Tk, !0) : function(kk) {
        kk = kk.replace(ek, "defined[$1]");
        const Fk = lk.infixToPostfix(kk),
          Ik = [];
        for (const Tk of Fk)
          if ("||" !== Tk && "&&" !== Tk) Ik.push(Tk);
          else if (Ik.length >= 2) {
          let kk = Ik[Ik.length - 1],
            Fk = Ik[Ik.length - 2];
          Ik.length -= 2;
          const Xk = "&&" == Tk ? new Lk : new qk;
          "string" === typeof kk && (kk = kk.replace(wk, "defined($1)")), "string" === typeof Fk && (Fk = Fk.replace(wk, "defined($1)")), Xk.leftOperand = "string" === typeof Fk ? Sk(Fk) : Fk, Xk.rightOperand = "string" === typeof kk ? Sk(kk) : kk, Ik.push(Xk)
        }
        let Xk = Ik[Ik.length - 1];
        return "string" === typeof Xk && (Xk = Xk.replace(wk, "defined($1)")), "string" === typeof Xk ? Sk(Xk) : Xk
      }(Tk), Ik
    }

    function Ek(kk, Fk, Ik, Tk) {
      let ik;
      for (; Ok(kk, Ik, Tk);) {
        ik = kk.currentLine;
        const yk = ik.substring(0, 5).toLowerCase();
        if ("#else" === yk) {
          const Ik = new Xk;
          return Fk.children.push(Ik), void Ok(kk, Ik, Tk)
        }
        if ("#elif" === yk) {
          const kk = vk(ik, 5);
          Fk.children.push(kk), Ik = kk
        }
      }
    }

    function Ok(kk, Fk, Ik) {
      for (; kk.canRead;) {
        kk.lineIndex++;
        const Tk = kk.currentLine;
        if (Tk.indexOf("#") >= 0) {
          const Xk = Qk.exec(Tk);
          if (Xk && Xk.length) {
            switch (Xk[0]) {
              case "#ifdef": {
                const Xk = new ik;
                Fk.children.push(Xk);
                const yk = vk(Tk, 6);
                Xk.children.push(yk), Ek(kk, Xk, yk, Ik);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Xk = new ik;
                Fk.children.push(Xk);
                const yk = vk(Tk, 7);
                Xk.children.push(yk), Ek(kk, Xk, yk, Ik);
                break
              }
              case "#if": {
                const Xk = new ik,
                  yk = vk(Tk, 3);
                Fk.children.push(Xk), Xk.children.push(yk), Ek(kk, Xk, yk, Ik);
                break
              }
            }
            continue
          }
        }
        const yk = new Xk;
        if (yk.line = Tk, Fk.children.push(yk), "#" === Tk[0] && "d" === Tk[1]) {
          const kk = Tk.replace(";", "").split(" ");
          yk.additionalDefineKey = kk[1], 3 === kk.length && (yk.additionalDefineValue = kk[2])
        }
      }
      return !1
    }

    function nk(kk, Fk, Ik, ik) {
      const yk = new Xk,
        lk = new Tk;
      return lk.lineIndex = -1, lk.lines = kk.split("\n"), Ok(lk, yk, ik), yk.process(Fk, Ik, ik)
    }

    function Gk(kk, Fk) {
      const Ik = kk.defines,
        Xk = {};
      for (const Tk of Ik) {
        const kk = Tk.replace("#define", "").replace(";", "").trim().split(" ");
        Xk[kk[0]] = kk.length > 1 ? kk[1] : ""
      }
      return 0 === kk.processor?.shaderLanguage && (Xk.GL_ES = "true"), Xk.__VERSION__ = kk.version, Xk[kk.platformName] = "true", (0, jk.i)(Xk, Fk?.isNDCHalfZRange, Fk?.IXk, Fk?.useExactSrgbConversions), Xk
    }

    function pk(kk, Fk, Ik) {
      let Xk;
      for (Kk.length = 0; null !== (Xk = Hk.exec(kk));) Kk.push(Xk);
      let Tk = [kk],
        ik = !1;
      for (const lk of Kk) {
        let kk = lk[1];
        if (-1 !== kk.indexOf("__decl__") && (kk = kk.replace(Jk, ""), Fk.supportsUniformBuffers && (kk = kk.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), kk += "Declaration"), !Fk.includesShadersStore[kk]) {
          const Xk = Fk.shadersRepository + "ShadersInclude/" + kk + ".fx";
          return void uk.loadFile(Xk, (Xk => {
            Fk.includesShadersStore[kk] = Xk, pk(Tk.join(""), Fk, Ik)
          }))
        } {
          let Ik = Fk.includesShadersStore[kk];
          if (lk[2]) {
            const kk = lk[3].split(",");
            for (let Fk = 0; Fk < kk.length; Fk += 2) {
              const Xk = new RegExp(kk[Fk], "g"),
                Tk = kk[Fk + 1];
              Ik = Ik.replace(Xk, Tk)
            }
          }
          if (lk[4]) {
            const kk = lk[5];
            if (-1 !== kk.indexOf("..")) {
              const Xk = kk.split(".."),
                Tk = parseInt(Xk[0]);
              let ik = parseInt(Xk[1]),
                yk = Ik.slice(0);
              Ik = "", isNaN(ik) && (ik = Fk.indexParameters[Xk[1]]);
              for (let kk = Tk; kk < ik; kk++) Fk.supportsUniformBuffers || (yk = yk.replace(xk, ((kk, Fk) => Fk + "{X}"))), Ik += yk.replace(Pk, kk.toString()) + "\n"
            } else Fk.supportsUniformBuffers || (Ik = Ik.replace(xk, ((kk, Fk) => Fk + "{X}"))), Ik = Ik.replace(Pk, kk)
          }
          const Xk = [];
          for (const kk of Tk) {
            const Fk = kk.split(lk[0]);
            for (let kk = 0; kk < Fk.length - 1; kk++) Xk.push(Fk[kk]), Xk.push(Ik);
            Xk.push(Fk[Fk.length - 1])
          }
          Tk = Xk, ik = ik || Ik.indexOf("#include<") >= 0 || Ik.indexOf("#include <") >= 0
        }
      }
      Kk.length = 0;
      const yk = Tk.join("");
      ik ? pk(yk.toString(), Fk, Ik) : Ik(yk)
    }
    const uk = {
      loadFile: (kk, Fk, Ik, Xk, Tk, ik) => {
        throw (0, Zk.j)("FileTools")
      }
    }
  },
  39860: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      f: () => ik,
      i: () => lk,
      k: () => yk,
      o: () => ak
    });
    var Xk = Ik(39863);
    const Tk = {};

    function ik(kk, Fk) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Fk ? Fk + "\n" : "") + kk
    }

    function yk(kk, Fk, Ik, ik, yk, lk, ak) {
      const qk = ak || Tk.loadFile;
      if (!qk) throw (0, Xk.j)("FileTools");
      return qk(kk, Fk, Ik, ik, yk, lk)
    }

    function lk(kk, Fk, Ik, Xk) {
      if (kk) return Fk ? kk.IS_NDC_HALF_ZRANGE = "" : delete kk.IS_NDC_HALF_ZRANGE, Ik ? kk.USE_REVERSE_DEPTHBUFFER = "" : delete kk.USE_REVERSE_DEPTHBUFFER, void(Xk ? kk.USE_EXACT_SRGB_CONVERSIONS = "" : delete kk.USE_EXACT_SRGB_CONVERSIONS);
      {
        let kk = "";
        return Fk && (kk += "#define IS_NDC_HALF_ZRANGE"), Ik && (kk && (kk += "\n"), kk += "#define USE_REVERSE_DEPTHBUFFER"), Xk && (kk && (kk += "\n"), kk += "#define USE_EXACT_SRGB_CONVERSIONS"), kk
      }
    }

    function ak(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Xk = arguments.length > 3 ? arguments[3] : void 0;
      switch (kk) {
        case 3: {
          const kk = new Int8Array(Fk);
          return Xk && kk.set(new Int8Array(Xk)), kk
        }
        case 0: {
          const kk = new Uint8Array(Fk);
          return Xk && kk.set(new Uint8Array(Xk)), kk
        }
        case 4: {
          const kk = "number" !== typeof Fk ? new Int16Array(Fk) : new Int16Array(Ik ? Fk / 2 : Fk);
          return Xk && kk.set(new Int16Array(Xk)), kk
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const kk = "number" !== typeof Fk ? new Uint16Array(Fk) : new Uint16Array(Ik ? Fk / 2 : Fk);
          return Xk && kk.set(new Uint16Array(Xk)), kk
        }
        case 6: {
          const kk = "number" !== typeof Fk ? new Int32Array(Fk) : new Int32Array(Ik ? Fk / 4 : Fk);
          return Xk && kk.set(new Int32Array(Xk)), kk
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const kk = "number" !== typeof Fk ? new Uint32Array(Fk) : new Uint32Array(Ik ? Fk / 4 : Fk);
          return Xk && kk.set(new Uint32Array(Xk)), kk
        }
        case 1: {
          const kk = "number" !== typeof Fk ? new Float32Array(Fk) : new Float32Array(Ik ? Fk / 4 : Fk);
          return Xk && kk.set(new Float32Array(Xk)), kk
        }
      }
      const Tk = new Uint8Array(Fk);
      return Xk && Tk.set(new Uint8Array(Xk)), Tk
    }
  },
  39863: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk,
      g: () => Lk,
      h: () => ak,
      j: () => Tk
    });
    const Xk = {};

    function Tk(kk) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Xk[kk]) return Xk[kk] = !0, `${kk} needs to be imported before as it contains a side-effect required by your code.`
    }
    const ik = {};
    let yk = !1,
      lk = 0;

    function ak(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Xk = function() {
        if ((Ik || yk) && 0 === lk) {
          const Ik = `${kk}.${Fk}`;
          ik[Ik] || (ik[Ik] = !0, console.warn(`[Babylon.js] ${Ik}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Xk.__isSideEffectStub = !0, Xk
    }

    function qk(kk) {
      return !!kk && !kk.__isSideEffectStub
    }

    function Lk(kk, Fk) {
      return {
        get() {},
        set(kk) {
          Object.defineProperty(this, Fk, {
            value: kk,
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
  39850: (kk, Fk, Ik) => {
    function Xk() {
      return "undefined" !== typeof window
    }

    function Tk() {
      return "undefined" !== typeof navigator
    }

    function ik() {
      return "undefined" !== typeof document
    }

    function yk(kk) {
      let Fk = "",
        Ik = kk.firstChild;
      for (; Ik;) 3 === Ik.nodeType && (Fk += Ik.textContent), Ik = Ik.nextSibling;
      return Fk
    }
    Ik.d(Fk, {
      c: () => yk,
      d: () => ik,
      h: () => Tk,
      j: () => Xk
    })
  },
  40042: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk,
      e: () => Tk,
      f: () => ik
    });
    class Xk extends Error {}
    Xk._setPrototypeOf = Object.setPrototypeOf || ((kk, Fk) => (kk.__proto__ = Fk, kk));
    const Tk = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class ik extends Xk {
      constructor(kk, Fk, Ik) {
        super(kk), this.errorCode = Fk, this.innerError = Ik, this.name = "RuntimeError", Xk._setPrototypeOf(this, ik.prototype)
      }
    }
  },
  40038: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Gk,
      h: () => Pk,
      l: () => vk,
      o: () => Ok,
      p: () => zk,
      t: () => sk,
      w: () => Vk,
      x: () => Uk,
      z: () => Sk,
      B: () => Kk
    });
    var Xk = Ik(40040),
      Tk = Ik(39850),
      ik = Ik(37187);
    class yk {}
    yk.FilesToLoad = {};
    var lk = Ik(40042),
      ak = Ik(40048),
      qk = Ik(37178),
      Lk = Ik(39860),
      tk = Ik(39872),
      Zk = Ik(38674),
      jk = Ik(39878),
      ek = Ik(40056);
    const wk = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class Hk extends lk.f {
      constructor(kk, Fk) {
        super(kk, lk.e.LoadFileError), this.name = "LoadFileError", lk.d._setPrototypeOf(this, Hk.prototype), Fk instanceof Xk.b ? this.request = Fk : this.file = Fk
      }
    }
    class Jk extends lk.f {
      constructor(kk, Fk) {
        super(kk, lk.e.RequestFileError), this.request = Fk, this.name = "RequestFileError", lk.d._setPrototypeOf(this, Jk.prototype)
      }
    }
    class xk extends lk.f {
      constructor(kk, Fk) {
        super(kk, lk.e.ReadFileError), this.file = Fk, this.name = "ReadFileError", lk.d._setPrototypeOf(this, xk.prototype)
      }
    }
    const Pk = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (Ik, Xk, Tk) => 0 !== Xk.status || Tk >= kk || -1 !== Ik.indexOf("file:") ? -1 : Math.pow(2, Tk) * Fk
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: kk => kk,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: kk => kk,
        CleanUrl: kk => kk = kk.replace(/#/gm, "%23")
      },
      Kk = (kk, Fk) => {
        if ((!kk || 0 !== kk.indexOf("data:")) && Pk.CorsBehavior)
          if ("string" === typeof Pk.CorsBehavior || Pk.CorsBehavior instanceof String) Fk.crossOrigin = Pk.CorsBehavior;
          else {
            const Ik = Pk.CorsBehavior(kk);
            Ik && (Fk.crossOrigin = Ik)
          }
      },
      Qk = {
        getRequiredSize: null
      },
      sk = function(kk, Fk, Ik, Tk) {
        let ik, lk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Lk = arguments.length > 5 ? arguments[5] : void 0,
          tk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : qk.e.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !tk?._features.forceBitmapOverHTMLImageElement) return Ik("LoadImage is only supported in web or BabylonNative environments."), null;
        if (tk?._features.forceBitmapOverHTMLImageElement && "string" !== typeof kk && "undefined" !== typeof Blob) {
          let Xk;
          if (kk instanceof Blob) Xk = kk;
          else {
            const Fk = kk instanceof ArrayBuffer ? kk : (0, ek.f)(kk);
            Xk = new Blob([Fk], {
              type: lk
            })
          }
          return tk.createImageBitmap(Xk, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Lk
          }).then(Fk).catch((Fk => {
            Ik && Ik("Error while trying to load image: " + kk, Fk)
          })), null
        }
        let Zk = !1;
        if (kk instanceof ArrayBuffer || ArrayBuffer.isView(kk))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let Fk;
            Fk = kk instanceof ArrayBuffer ? kk : (0, ek.f)(kk), ik = URL.createObjectURL(new Blob([Fk], {
              type: lk
            })), Zk = !0
          } else ik = `data:${lk};base64,` + (0, ak.i)(kk);
        else kk instanceof Blob ? (ik = URL.createObjectURL(kk), Zk = !0) : (ik = Pk.CleanUrl(kk), ik = Pk.PreprocessUrl(ik));
        const jk = Fk => {
          if (Ik) {
            const Xk = ik || kk.toString();
            Ik(`Error while trying to load image: ${0===Xk.indexOf("http")||Xk.length<=128?Xk:Xk.slice(0,128)+"..."}`, Fk)
          }
        };
        if (tk?._features.forceBitmapOverHTMLImageElement) return zk(ik, (Xk => {
          tk.createImageBitmap(new Blob([Xk], {
            type: lk
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Lk
          }).then((kk => {
            Fk(kk), Zk && URL.revokeObjectURL(ik)
          })).catch((Fk => {
            Ik && Ik("Error while trying to load image: " + kk, Fk)
          }))
        }), void 0, Tk || void 0, !0, ((kk, Fk) => {
          jk(Fk)
        })), null;
        const wk = new Image;
        if (Qk.getRequiredSize) {
          const Fk = Qk.getRequiredSize(kk);
          Fk.width && (wk.width = Fk.width), Fk.height && (wk.height = Fk.height)
        }
        Kk(ik, wk);
        const Hk = [],
          Jk = () => {
            for (const kk of Hk) kk.target.removeEventListener(kk.name, kk.handler);
            Hk.length = 0
          };
        Hk.push({
          target: wk,
          name: "load",
          handler: () => {
            Jk(), Fk(wk), Zk && wk.src && URL.revokeObjectURL(wk.src)
          }
        }), Hk.push({
          target: wk,
          name: "error",
          handler: kk => {
            Jk(), jk(kk), Zk && wk.src && URL.revokeObjectURL(wk.src)
          }
        }), Hk.push({
          target: document,
          name: "securitypolicyviolation",
          handler: kk => {
            if (kk.blockedURI !== wk.src || "Mj" === kk.disposition) return;
            Jk();
            const Fk = new Error(`CSP violation of policy ${kk.effectiveDirective} ${kk.blockedURI}. Current policy is ${kk.originalPolicy}`);
            qk.e.UseFallbackTexture = !1, jk(Fk), Zk && wk.src && URL.revokeObjectURL(wk.src), wk.src = ""
          }
        }), (() => {
          for (const kk of Hk) kk.target.addEventListener(kk.name, kk.handler)
        })();
        const xk = "blob:" === ik.substring(0, 5),
          sk = "data:" === ik.substring(0, 5),
          Vk = () => {
            xk || sk || !Xk.b.IsCustomRequestAvailable ? wk.src = ik : zk(ik, ((kk, Fk, Ik) => {
              const Xk = new Blob([kk], {
                  type: !lk && Ik ? Ik : lk
                }),
                Tk = URL.createObjectURL(Xk);
              Zk = !0, wk.src = Tk
            }), void 0, Tk || void 0, !0, ((kk, Fk) => {
              jk(Fk)
            }))
          },
          Sk = () => {
            Tk && Tk.loadImage(ik, wk)
          };
        if (!xk && !sk && Tk && Tk.enableTexturesOffline) Tk.open(Sk, Vk);
        else {
          if (-1 !== ik.indexOf("file:")) {
            const kk = decodeURIComponent(ik.substring(5).toLowerCase());
            if (yk.FilesToLoad[kk] && "undefined" !== typeof URL) {
              try {
                let Fk;
                try {
                  Fk = URL.createObjectURL(yk.FilesToLoad[kk])
                } catch (vk) {
                  Fk = URL.createObjectURL(yk.FilesToLoad[kk])
                }
                wk.src = Fk, Zk = !0
              } catch (Ek) {
                wk.src = ""
              }
              return wk
            }
          }
          Vk()
        }
        return wk
      },
      Vk = (kk, Fk, Ik, Xk, Tk) => {
        const yk = new FileReader,
          lk = {
            onCompleteObservable: new ik.e,
            abort: () => yk.abort()
          };
        return yk.onloadend = () => lk.onCompleteObservable.notifyObservers(lk), Tk && (yk.onerror = () => {
          Tk(new xk(`Unable to read ${kk.name}`, kk))
        }), yk.onload = kk => {
          Fk(kk.target.result)
        }, Ik && (yk.onprogress = Ik), Xk ? yk.readAsArrayBuffer(kk) : yk.readAsText(kk), lk
      },
      zk = (kk, Fk, Ik, Xk, Tk, ak, qk) => {
        if (kk.name) return Vk(kk, Fk, Ik, Tk, ak ? kk => {
          ak(void 0, kk)
        } : void 0);
        const Lk = kk;
        if (-1 !== Lk.indexOf("file:")) {
          let kk = decodeURIComponent(Lk.substring(5).toLowerCase());
          0 === kk.indexOf("./") && (kk = kk.substring(2));
          const Xk = yk.FilesToLoad[kk];
          if (Xk) return Vk(Xk, Fk, Ik, Tk, ak ? kk => ak(void 0, new Hk(kk.message, kk.file)) : void 0)
        }
        const {
          match: tk,
          type: ek
        } = nk(Lk);
        if (tk) {
          const kk = {
            onCompleteObservable: new ik.e,
            abort: () => () => {}
          };
          try {
            const kk = Tk ? Gk(Lk) : pk(Lk);
            Fk(kk, void 0, ek)
          } catch (lk) {
            ak ? ak(void 0, lk) : Zk.e.Error(lk.message || "Failed to parse the Data URL")
          }
          return jk.d.SetImmediate((() => {
            kk.onCompleteObservable.notifyObservers(kk)
          })), kk
        }
        return Sk(Lk, ((kk, Ik) => {
          Fk(kk, Ik?.responseURL, Ik?.getResponseHeader("content-type"))
        }), Ik, Xk, Tk, ak ? kk => {
          ak(kk.request, new Hk(kk.message, kk.request))
        } : void 0, qk)
      },
      Sk = (kk, Fk, Ik, yk, lk, ak, Lk) => {
        null !== yk && (yk ?? (yk = qk.e.LastCreatedScene?.offlineProvider)), kk = Pk.CleanUrl(kk), kk = Pk.PreprocessUrl(kk);
        const tk = Pk.BaseUrl + kk;
        let jk = !1;
        const ek = {
            onCompleteObservable: new ik.e,
            abort: () => jk = !0
          },
          wk = () => {
            let kk, ik = new Xk.b,
              yk = null;
            const qk = () => {
              ik && (Ik && ik.removeEventListener("progress", Ik), kk && ik.removeEventListener("readystatechange", kk), ik.removeEventListener("loadend", wk))
            };
            let wk = () => {
              qk(), ek.onCompleteObservable.notifyObservers(ek), ek.onCompleteObservable.clear(), Ik = void 0, kk = null, wk = null, ak = void 0, Lk = void 0, Fk = void 0
            };
            ek.abort = () => {
              jk = !0, wk && wk(), ik && ik.readyState !== (XMLHttpRequest.DONE || 4) && ik.abort(), null !== yk && (clearTimeout(yk), yk = null), ik = null
            };
            const Hk = kk => {
                const Fk = kk.message || "Unknown error";
                ak && ik ? ak(new Jk(Fk, ik)) : Zk.e.Error(Fk)
              },
              xk = Zk => {
                if (ik) {
                  if (ik.open("GET", tk), Lk) try {
                    Lk(ik)
                  } catch (ek) {
                    return void Hk(ek)
                  }
                  lk && (ik.responseType = "arraybuffer"), Ik && ik.addEventListener("progress", Ik), wk && ik.addEventListener("loadend", wk), kk = () => {
                    if (!jk && ik && ik.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (kk && ik.removeEventListener("readystatechange", kk), ik.status >= 200 && ik.status < 300 || 0 === ik.status && (!(0, Tk.j)() || Ek())) {
                        const kk = lk ? ik.response : ik.responseText;
                        if (null !== kk) {
                          try {
                            Fk && Fk(kk, ik)
                          } catch (ek) {
                            Hk(ek)
                          }
                          return
                        }
                      }
                      const Ik = Pk.DefaultRetryStrategy;
                      if (Ik) {
                        const kk = Ik(tk, ik, Zk);
                        if (-1 !== kk) return qk(), ik = new Xk.b, void(yk = setTimeout((() => xk(Zk + 1)), kk))
                      }
                      const Lk = new Jk("Error status: " + ik.status + " " + ik.statusText + " - Unable to load " + tk, ik);
                      ak && ak(Lk)
                    }
                  }, ik.addEventListener("readystatechange", kk), ik.send()
                }
              };
            xk(0)
          };
        if (yk && yk.enableSceneOffline && !kk.startsWith("blob:")) {
          const Xk = kk => {
              kk && kk.status > 400 ? ak && ak(kk) : wk()
            },
            Tk = () => {
              yk && yk.loadFile(Pk.BaseUrl + kk, (kk => {
                !jk && Fk && Fk(kk), ek.onCompleteObservable.notifyObservers(ek)
              }), Ik ? kk => {
                !jk && Ik && Ik(kk)
              } : void 0, Xk, lk)
            };
          yk.open(Tk, Xk)
        } else wk();
        return ek
      },
      vk = kk => {
        const {
          match: Fk,
          type: Ik
        } = nk(kk);
        if (Fk) return Ik || void 0;
        const Xk = kk.lastIndexOf(".");
        switch (kk.substring(Xk + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "vG":
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
      Ek = () => "undefined" !== typeof location && "file:" === location.protocol,
      Ok = kk => wk.test(kk),
      nk = kk => {
        const Fk = wk.exec(kk);
        if (null === Fk || 0 === Fk.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: Fk[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Gk(kk) {
      return (0, ak.d)(kk.split(",")[1])
    }
    const pk = kk => (0, ak.h)(kk.split(",")[1]);
    let uk;
    const bk = (kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) => {
      uk = {
        DecodeBase64UrlToBinary: kk,
        DecodeBase64UrlToString: Fk,
        DefaultRetryStrategy: Ik.DefaultRetryStrategy,
        BaseUrl: Ik.BaseUrl,
        CorsBehavior: Ik.CorsBehavior,
        PreprocessUrl: Ik.PreprocessUrl,
        IsBase64DataUrl: Xk,
        IsFileURL: Tk,
        LoadFile: ik,
        LoadImage: yk,
        ReadFile: lk,
        RequestFile: ak,
        SetCorsBehavior: qk
      }, Object.defineProperty(uk, "DefaultRetryStrategy", {
        get: function() {
          return Ik.DefaultRetryStrategy
        },
        set: function(kk) {
          Ik.DefaultRetryStrategy = kk
        }
      }), Object.defineProperty(uk, "BaseUrl", {
        get: function() {
          return Ik.BaseUrl
        },
        set: function(kk) {
          Ik.BaseUrl = kk
        }
      }), Object.defineProperty(uk, "PreprocessUrl", {
        get: function() {
          return Ik.PreprocessUrl
        },
        set: function(kk) {
          Ik.PreprocessUrl = kk
        }
      }), Object.defineProperty(uk, "CorsBehavior", {
        get: function() {
          return Ik.CorsBehavior
        },
        set: function(kk) {
          Ik.CorsBehavior = kk
        }
      })
    };
    let Rk = !1;

    function Uk() {
      Rk || (Rk = !0, bk(Gk, pk, Pk, Ok, Ek, zk, sk, Vk, Sk, Kk), Lk.e.loadFile = zk, Lk.e.loadImage = sk, tk.n.loadFile = zk)
    }
  },
  40064: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      f: () => ik,
      i: () => yk
    });
    let Xk = null;

    function Tk() {
      if (Xk) return Xk;
      const kk = new ArrayBuffer(4),
        Fk = new Float32Array(kk),
        Ik = new Uint32Array(kk),
        Tk = new Uint32Array(512),
        ik = new Uint32Array(512);
      for (let Xk = 0; Xk < 256; ++Xk) {
        const kk = Xk - 127;
        kk < -24 ? (Tk[Xk] = 0, Tk[256 | Xk] = 32768, ik[Xk] = 24, ik[256 | Xk] = 24) : kk < -14 ? (Tk[Xk] = 1024 >> -kk - 14, Tk[256 | Xk] = 1024 >> -kk - 14 | 32768, ik[Xk] = -kk - 1, ik[256 | Xk] = -kk - 1) : kk <= 15 ? (Tk[Xk] = kk + 15 << 10, Tk[256 | Xk] = kk + 15 << 10 | 32768, ik[Xk] = 13, ik[256 | Xk] = 13) : kk < 128 ? (Tk[Xk] = 31744, Tk[256 | Xk] = 64512, ik[Xk] = 24, ik[256 | Xk] = 24) : (Tk[Xk] = 31744, Tk[256 | Xk] = 64512, ik[Xk] = 13, ik[256 | Xk] = 13)
      }
      const yk = new Uint32Array(2048),
        lk = new Uint32Array(64),
        ak = new Uint32Array(64);
      for (let Xk = 1; Xk < 1024; ++Xk) {
        let kk = Xk << 13,
          Fk = 0;
        for (; 0 === (8388608 & kk);) kk <<= 1, Fk -= 8388608;
        kk &= -8388609, Fk += 947912704, yk[Xk] = kk | Fk
      }
      for (let Xk = 1024; Xk < 2048; ++Xk) yk[Xk] = 939524096 + (Xk - 1024 << 13);
      for (let Xk = 1; Xk < 31; ++Xk) lk[Xk] = Xk << 23;
      lk[31] = 1199570944, lk[32] = 2147483648;
      for (let Xk = 33; Xk < 63; ++Xk) lk[Xk] = 2147483648 + (Xk - 32 << 23);
      lk[63] = 3347054592;
      for (let Xk = 1; Xk < 64; ++Xk) 32 !== Xk && (ak[Xk] = 1024);
      return Xk = {
        floatView: Fk,
        uint32View: Ik,
        baseTable: Tk,
        shiftTable: ik,
        mantissaTable: yk,
        exponentTable: lk,
        offsetTable: ak
      }, Xk
    }
    const ik = 65504;

    function yk(kk) {
      const Fk = Tk();
      Fk.floatView[0] = kk;
      const Ik = Fk.uint32View[0],
        Xk = Ik >> 23 & 511;
      return Fk.baseTable[Xk] + ((8388607 & Ik) >> Fk.shiftTable[Xk])
    }

    function lk(kk) {
      const Fk = Tk();
      return Fk.uint32View[0] = Fk.mantissaTable[Fk.offsetTable[kk >> 10] + (1023 & kk)] + Fk.exponentTable[kk >> 10], Fk.floatView[0]
    }
  },
  40048: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      h: () => Tk,
      i: () => Xk
    });
    const Xk = kk => {
        const Fk = ArrayBuffer.isView(kk) ? new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength) : new Uint8Array(kk);
        return "function" === typeof Fk.toBase64 ? Fk.toBase64() : function(kk) {
          const Fk = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let Ik, Xk, Tk, ik, yk, lk, ak, qk = "",
            Lk = 0;
          for (; Lk < kk.length;) Ik = kk[Lk++], Xk = Lk < kk.length ? kk[Lk++] : Number.NaN, Tk = Lk < kk.length ? kk[Lk++] : Number.NaN, ik = Ik >> 2, yk = (3 & Ik) << 4 | Xk >> 4, lk = (15 & Xk) << 2 | Tk >> 6, ak = 63 & Tk, isNaN(Xk) ? lk = ak = 64 : isNaN(Tk) && (ak = 64), qk += Fk.charAt(ik) + Fk.charAt(yk) + Fk.charAt(lk) + Fk.charAt(ak);
          return qk
        }(Fk)
      },
      Tk = kk => atob(kk),
      ik = kk => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(kk).buffer : function(kk) {
        const Fk = Tk(kk),
          Ik = Fk.length,
          Xk = new Uint8Array(new ArrayBuffer(Ik));
        for (let Tk = 0; Tk < Ik; Tk++) Xk[Tk] = Fk.charCodeAt(Tk);
        return Xk.buffer
      }(kk)
  },
  39878: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      h: () => yk
    });
    let Xk = [];
    class Tk {
      static SetImmediate(kk) {
        0 === Xk.length && setTimeout((() => {
          const kk = Xk;
          Xk = [];
          for (const Fk of kk) Fk()
        }), 1), Xk.push(kk)
      }
    }

    function ik(kk, Fk, Ik) {
      try {
        if (kk()) return Fk(), !0
      } catch (Xk) {
        return Ik?.(Xk), !0
      }
      return !1
    }
    const yk = function(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        yk = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && ik(kk, Fk, Ik)) return null;
      const lk = setInterval((() => {
        ik(kk, Fk, Ik) ? clearInterval(lk) : (Tk -= Xk, Tk < 0 && (clearInterval(lk), Ik?.(new Error("Operation timed out after maximum retries. " + (yk || "")), !0)))
      }), Xk);
      return () => clearInterval(lk)
    }
  },
  40040: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Xk.CustomRequestHeaders).length > 0 || Xk.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(kk) {
        return kk = (kk = kk.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(kk) {
        return Xk.SkipRequestModificationForBabylonCDN && (kk.includes("preview.babylonjs.com") || kk.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(kk) {
        const Fk = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Xk._ShouldSkipRequestModifications(kk)) return {
          url: kk,
          headers: Fk
        };
        for (const Tk in Xk.CustomRequestHeaders) {
          const kk = Xk.CustomRequestHeaders[Tk];
          kk && (Fk[Tk] = kk)
        }
        const Ik = {
          setRequestHeader: (kk, Ik) => {
            Fk[kk] = Ik
          }
        };
        for (const Tk of Xk.CustomRequestModifiers) {
          if (Xk._ShouldSkipRequestModifications(kk)) break;
          const Fk = Tk(Ik, kk);
          "string" === typeof Fk && (kk = Fk)
        }
        return {
          url: kk,
          headers: Fk
        }
      }
      static async FetchAsync(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ik = Fk.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Tk,
            headers: ik
          } = Xk._CollectCustomizations(Xk._CleanUrl(kk), Fk.headers ?? {});
          return await fetch(Tk, {
            method: Ik,
            headers: ik,
            body: Fk.body ?? void 0
          })
        }
        return await new Promise(((Tk, ik) => {
          const yk = new Xk;
          yk.responseType = "arraybuffer", yk.addEventListener("readystatechange", (() => {
            if (4 === yk.readyState)
              if (yk.status >= 200 && yk.status < 300) {
                const kk = "undefined" !== typeof Headers ? new Headers : void 0,
                  Fk = yk.getResponseHeader("Content-Type");
                Fk && kk && kk.set("Content-Type", Fk), "undefined" !== typeof Response ? Tk(new Response(yk.response, {
                  status: yk.status,
                  statusText: yk.statusText,
                  headers: kk
                })) : Tk({
                  ok: !0,
                  status: yk.status,
                  statusText: yk.statusText,
                  headers: {
                    get: kk => yk.getResponseHeader(kk)
                  },
                  arrayBuffer: async () => await Promise.resolve(yk.response)
                })
              } else ik(new Error(`HTTP ${yk.status} loading '${yk.requestURL}': ${yk.statusText}`))
          })), yk.open(Ik, kk, Fk.headers), yk.send(Fk.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(kk) {
        this._xhr.onprogress = kk
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
      set responseType(kk) {
        this._xhr.responseType = kk
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(kk) {
        this._xhr.timeout = kk
      }
      addEventListener(kk, Fk, Ik) {
        this._xhr.addEventListener(kk, Fk, Ik)
      }
      removeEventListener(kk, Fk, Ik) {
        this._xhr.removeEventListener(kk, Fk, Ik)
      }
      abort() {
        this._xhr.abort()
      }
      send(kk) {
        this._xhr.send(kk)
      }
      open(kk, Fk, Ik) {
        const {
          url: Tk,
          headers: ik
        } = Xk._CollectCustomizations(Fk, Ik);
        this._requestURL = Xk._CleanUrl(Tk), this._xhr.open(kk, this._requestURL, !0);
        for (const Xk in ik) this._xhr.setRequestHeader(Xk, ik[Xk])
      }
      setRequestHeader(kk, Fk) {
        this._xhr.setRequestHeader(kk, Fk)
      }
      getResponseHeader(kk) {
        return this._xhr.getResponseHeader(kk)
      }
    }
    Xk.CustomRequestHeaders = {}, Xk.CustomRequestModifiers = new Array, Xk.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);