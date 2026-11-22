export const id = 250;
export const ids = [250];
export const modules = {
  39623: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => xk,
      i: () => Kk,
      l: () => Pk,
      m: () => nk,
      n: () => mk,
      p: () => rk,
      q: () => Mk
    });
    var Dk = ik(38272),
      fk = ik(39628);

    function Sk(kk, ek, ik, Dk) {
      switch (ek) {
        case 5120: {
          let ek = kk.getInt8(ik);
          return Dk && (ek = Math.max(ek / 127, -1)), ek
        }
        case 5121: {
          let ek = kk.getUint8(ik);
          return Dk && (ek /= 255), ek
        }
        case 5122: {
          let ek = kk.getInt16(ik, !0);
          return Dk && (ek = Math.max(ek / 32767, -1)), ek
        }
        case 5123: {
          let ek = kk.getUint16(ik, !0);
          return Dk && (ek /= 65535), ek
        }
        case 5131:
          return (0, fk.e)(kk.getUint16(ik, !0));
        case 5124:
          return kk.getInt32(ik, !0);
        case 5125:
          return kk.getUint32(ik, !0);
        case 5126:
          return kk.getFloat32(ik, !0);
        default:
          throw new Error(`Invalid component type ${ek}`)
      }
    }

    function bk(kk, ek, ik, Dk, Sk) {
      switch (ek) {
        case 5120:
          Dk && (Sk = Math.round(127 * Sk)), kk.setInt8(ik, Sk);
          break;
        case 5121:
          Dk && (Sk = Math.round(255 * Sk)), kk.setUint8(ik, Sk);
          break;
        case 5122:
          Dk && (Sk = Math.round(32767 * Sk)), kk.setInt16(ik, Sk, !0);
          break;
        case 5123:
          Dk && (Sk = Math.round(65535 * Sk)), kk.setUint16(ik, Sk, !0);
          break;
        case 5131:
          kk.setUint16(ik, (0, fk.i)(Sk), !0);
          break;
        case 5124:
          kk.setInt32(ik, Sk, !0);
          break;
        case 5125:
          kk.setUint32(ik, Sk, !0);
          break;
        case 5126:
          kk.setFloat32(ik, Sk, !0);
          break;
        default:
          throw new Error(`Invalid component type ${ek}`)
      }
    }

    function rk(kk) {
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

    function Pk(kk, ek, ik, Dk, fk, Pk, mk, Mk) {
      const Kk = new Array(Dk),
        xk = new Array(Dk);
      if (kk instanceof Array) {
        let fk = ek / 4;
        const Sk = ik / 4;
        for (let ek = 0; ek < Pk; ek += Dk) {
          for (let ek = 0; ek < Dk; ek++) Kk[ek] = xk[ek] = kk[fk + ek];
          Mk(xk, ek);
          for (let ek = 0; ek < Dk; ek++) Kk[ek] !== xk[ek] && (kk[fk + ek] = xk[ek]);
          fk += Sk
        }
      } else {
        const nk = ArrayBuffer.isView(kk) ? new DataView(kk.buffer, kk.byteOffset, kk.byteLength) : new DataView(kk),
          Uk = rk(fk);
        for (let kk = 0; kk < Pk; kk += Dk) {
          for (let kk = 0, ik = ek; kk < Dk; kk++, ik += Uk) Kk[kk] = xk[kk] = Sk(nk, fk, ik, mk);
          Mk(xk, kk);
          for (let kk = 0, ik = ek; kk < Dk; kk++, ik += Uk) Kk[kk] !== xk[kk] && bk(nk, fk, ik, mk, xk[kk]);
          ek += ik
        }
      }
    }

    function mk(kk, ek, ik, fk, Sk, bk, mk, Mk) {
      const Kk = ek * rk(ik),
        xk = mk * ek;
      if (5126 !== ik || Sk !== Kk) {
        const Dk = new Float32Array(xk);
        return Pk(kk, fk, Sk, ek, ik, xk, bk, ((kk, ik) => {
          for (let fk = 0; fk < ek; fk++) Dk[ik + fk] = kk[fk]
        })), Dk
      }
      if (!(kk instanceof Array || kk instanceof Float32Array) || 0 !== fk || kk.length !== xk) {
        if (kk instanceof Array) {
          const ek = fk / 4;
          return kk.slice(ek, ek + xk)
        }
        if (ArrayBuffer.isView(kk)) {
          const ek = kk.byteOffset + fk;
          return 0 !== (3 & ek) && (Dk.b.Warn("Float array must be aligned to 4-bytes border"), Mk = !0), Mk ? new Float32Array(kk.buffer.slice(ek, ek + xk * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(kk.buffer, ek, xk)
        }
        return new Float32Array(kk, fk, xk)
      }
      return Mk ? kk.slice() : kk
    }

    function Mk(kk, ek, ik, fk, Sk, bk, mk) {
      const Mk = rk(ik),
        Kk = function(kk) {
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
        }(ik),
        xk = bk * ek;
      if (Array.isArray(kk)) {
        if (0 !== (3 & fk) || 0 !== (3 & Sk)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Dk = fk / 4,
          rk = Sk / 4;
        if (Dk + (bk - 1) * rk + ek > kk.length) throw new Error("Last accessed index is out of bounds.");
        if (rk < ek) throw new Error("Data stride cannot be smaller than the component size.");
        if (rk !== ek) {
          const Dk = new Kk(xk);
          return Pk(kk, fk, Sk, ek, ik, xk, !1, ((kk, ik) => {
            for (let fk = 0; fk < ek; fk++) Dk[ik + fk] = kk[fk]
          })), Dk
        }
        return new Kk(kk.slice(Dk, Dk + xk))
      }
      let nk, Uk = fk;
      ArrayBuffer.isView(kk) ? (nk = kk.buffer, Uk += kk.byteOffset) : nk = kk;
      if (Uk + (bk - 1) * Sk + ek * Mk > nk.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Hk = ek * Mk;
      if (Sk < Hk) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Sk !== Hk) {
        const kk = new Kk(xk),
          ik = new Uint8Array(nk, Uk),
          Dk = new Uint8Array(kk.buffer),
          fk = ek * Mk;
        for (let ek = 0, rk = 0, Pk = 0; ek < bk; ek++, rk += Sk, Pk += fk) Dk.set(ik.subarray(rk, rk + fk), Pk);
        return kk
      }
      return 1 !== Mk && 0 !== (Uk & Mk - 1) && (Dk.b.Warn("Array must be aligned to border of element size. Data will be copied."), mk = !0), mk ? new Kk(nk.slice(Uk, Uk + xk * Mk)) : new Kk(nk, Uk, xk)
    }

    function Kk(kk, ek, ik, fk, Sk, bk, mk, Mk) {
      const Kk = ek * rk(ik),
        xk = mk * ek;
      if (Mk.length !== xk) throw new Error("Output length is not valid");
      if (5126 === ik && Sk === Kk)
        if (kk instanceof Array) {
          const ek = fk / 4;
          Mk.set(kk, ek)
        } else if (ArrayBuffer.isView(kk)) {
        const ek = kk.byteOffset + fk;
        if (0 !== (3 & ek)) return Dk.b.Warn("Float array must be aligned to 4-bytes border"), void Mk.set(new Float32Array(kk.buffer.slice(ek, ek + xk * Float32Array.BYTES_PER_ELEMENT)));
        const ik = new Float32Array(kk.buffer, ek, xk);
        Mk.set(ik)
      } else {
        const ek = new Float32Array(kk, fk, xk);
        Mk.set(ek)
      } else Pk(kk, fk, Sk, ek, ik, xk, bk, ((kk, ik) => {
        for (let Dk = 0; Dk < ek; Dk++) Mk[ik + Dk] = kk[Dk]
      }))
    }

    function xk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(kk)) {
        for (let fk = 0; fk < ek; fk++)
          if (kk[ik + fk] - Dk > 65535) return !0;
        return !1
      }
      return 4 === kk.BYTES_PER_ELEMENT
    }

    function nk(kk) {
      const ek = kk.buffer;
      if (ek instanceof ArrayBuffer) return kk;
      const ik = new ArrayBuffer(kk.byteLength);
      return new Uint8Array(ik).set(new Uint8Array(ek, kk.byteOffset, kk.byteLength)), ik
    }
  },
  39455: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => jk,
      g: () => Ck,
      k: () => Ak,
      i: () => Ik,
      l: () => zk
    });
    class Dk {
      constructor() {
        this.children = []
      }
      isValid(kk) {
        return !0
      }
      process(kk, ek, ik) {
        let Dk = "";
        if (this.line) {
          let ik = this.line;
          const fk = ek.processor;
          if (fk) {
            fk.lineProcessor && (ik = fk.lineProcessor(ik, ek.isFragment, ek.processingContext));
            const Dk = ek.processor?.attributeKeywordName ?? "attribute",
              Sk = ek.isFragment && ek.processor?.varyingFragmentKeywordName ? ek.processor?.varyingFragmentKeywordName : !ek.isFragment && ek.processor?.varyingVertexKeywordName ? ek.processor?.varyingVertexKeywordName : "varying";
            if (!ek.isFragment && fk.attributeProcessor && this.line.startsWith(Dk)) ik = fk.attributeProcessor(this.line, kk, ek.processingContext);
            else if (fk.varyingProcessor && (fk.varyingCheck?.(this.line, ek.isFragment) || !fk.varyingCheck && this.line.startsWith(Sk))) ik = fk.varyingProcessor(this.line, ek.isFragment, kk, ek.processingContext);
            else if (fk.uniformProcessor && fk.uniformRegexp && fk.uniformRegexp.test(this.line)) ek.lookForClosingBracketForUniformBuffer || (ik = fk.uniformProcessor(this.line, ek.isFragment, kk, ek.processingContext));
            else if (fk.uniformBufferProcessor && fk.uniformBufferRegexp && fk.uniformBufferRegexp.test(this.line)) ek.lookForClosingBracketForUniformBuffer || (ik = fk.uniformBufferProcessor(this.line, ek.isFragment, ek.processingContext), ek.lookForClosingBracketForUniformBuffer = !0);
            else if (fk.textureProcessor && fk.textureRegexp && fk.textureRegexp.test(this.line)) ik = fk.textureProcessor(this.line, ek.isFragment, kk, ek.processingContext);
            else if ((fk.uniformProcessor || fk.uniformBufferProcessor) && this.line.startsWith("uniform") && !ek.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? fk.uniformProcessor && (ik = fk.uniformProcessor(this.line, ek.isFragment, kk, ek.processingContext)) : fk.uniformBufferProcessor && (ik = fk.uniformBufferProcessor(this.line, ek.isFragment, ek.processingContext), ek.lookForClosingBracketForUniformBuffer = !0)
            }
            ek.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (ek.lookForClosingBracketForUniformBuffer = !1, fk.endOfUniformBufferProcessor && (ik = fk.endOfUniformBufferProcessor(this.line, ek.isFragment, ek.processingContext)))
          }
          Dk += ik + "\n"
        }
        for (const fk of this.children) Dk += fk.process(kk, ek, ik);
        return this.additionalDefineKey && (kk[this.additionalDefineKey] = this.additionalDefineValue || "true", ik[this.additionalDefineKey] = kk[this.additionalDefineKey]), Dk
      }
    }
    class fk {
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
        for (const ek of kk) {
          if (!ek || "\r" === ek) continue;
          if ("#" === ek[0]) {
            this._lines.push(ek);
            continue
          }
          const kk = ek.trim();
          if (!kk) continue;
          if (kk.startsWith("//")) {
            this._lines.push(ek);
            continue
          }
          const ik = kk.indexOf(";");
          if (-1 === ik) this._lines.push(kk);
          else if (ik === kk.length - 1) kk.length > 1 && this._lines.push(kk);
          else {
            const kk = ek.split(";");
            for (let ek = 0; ek < kk.length; ek++) {
              let ik = kk[ek];
              ik && (ik = ik.trim(), ik && this._lines.push(ik + (ek !== kk.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Sk extends Dk {
      process(kk, ek, ik) {
        for (let Dk = 0; Dk < this.children.length; Dk++) {
          const fk = this.children[Dk];
          if (fk.isValid(kk)) return fk.process(kk, ek, ik)
        }
        return ""
      }
    }
    class bk extends Dk {
      isValid(kk) {
        return this.testExpression.isTrue(kk)
      }
    }
    class rk {
      isTrue(kk) {
        return !0
      }
      static postfixToInfix(kk) {
        const ek = [];
        for (const ik of kk)
          if (void 0 === rk._OperatorPriority[ik]) ek.push(ik);
          else {
            const kk = ek[ek.length - 1],
              Dk = ek[ek.length - 2];
            ek.length -= 2, ek.push(`(${Dk}${ik}${kk})`)
          } return ek[ek.length - 1]
      }
      static infixToPostfix(kk) {
        const ek = rk._InfixToPostfixCache.get(kk);
        if (ek) return ek.accessTime = Date.now(), ek.result;
        if (!kk.includes("&&") && !kk.includes("||") && !kk.includes(")") && !kk.includes("(")) return [kk];
        const ik = [];
        let Dk = -1;
        const fk = () => {
            Mk = Mk.trim(), "" !== Mk && (ik.push(Mk), Mk = "")
          },
          Sk = kk => {
            Dk < rk._Stack.length - 1 && (rk._Stack[++Dk] = kk)
          },
          bk = () => rk._Stack[Dk],
          Pk = () => -1 === Dk ? "!!INVALID EXPRESSION!!" : rk._Stack[Dk--];
        let mk = 0,
          Mk = "";
        for (; mk < kk.length;) {
          const ek = kk.charAt(mk),
            Kk = mk < kk.length - 1 ? kk.substring(mk, 2 + mk) : "";
          if ("(" === ek) Mk = "", Sk(ek);
          else if (")" === ek) {
            for (fk(); - 1 !== Dk && "(" !== bk();) ik.push(Pk());
            Pk()
          } else if (rk._OperatorPriority[Kk] > 1) {
            for (fk(); - 1 !== Dk && rk._OperatorPriority[bk()] >= rk._OperatorPriority[Kk];) ik.push(Pk());
            Sk(Kk), mk++
          } else Mk += ek;
          mk++
        }
        for (fk(); - 1 !== Dk;) "(" === bk() ? Pk() : ik.push(Pk());
        return rk._InfixToPostfixCache.size >= rk.InfixToPostfixCacheLimitSize && rk.ClearCache(), rk._InfixToPostfixCache.set(kk, {
          result: ik,
          accessTime: Date.now()
        }), ik
      }
      static ClearCache() {
        const kk = Array.from(rk._InfixToPostfixCache.entries()).sort(((kk, ek) => kk[1].accessTime - ek[1].accessTime));
        for (let ek = 0; ek < rk.InfixToPostfixCacheCleanupSize; ek++) rk._InfixToPostfixCache.delete(kk[ek][0])
      }
    }
    rk.InfixToPostfixCacheLimitSize = 5e4, rk.InfixToPostfixCacheCleanupSize = 25e3, rk._InfixToPostfixCache = new Map, rk._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, rk._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Pk extends rk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = kk, this.not = ek
      }
      isTrue(kk) {
        let ek = void 0 !== kk[this.define];
        return this.not && (ek = !ek), ek
      }
    }
    class mk extends rk {
      isTrue(kk) {
        return this.leftOperand.isTrue(kk) || this.rightOperand.isTrue(kk)
      }
    }
    class Mk extends rk {
      isTrue(kk) {
        return this.leftOperand.isTrue(kk) && this.rightOperand.isTrue(kk)
      }
    }
    class Kk extends rk {
      constructor(kk, ek, ik) {
        super(), this.define = kk, this.operand = ek, this.testValue = ik
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(kk) {
        let ek = !1;
        const ik = parseInt(void 0 != kk[this.define] ? kk[this.define] : this.define),
          Dk = parseInt(void 0 != kk[this.testValue] ? kk[this.testValue] : this.testValue);
        if (isNaN(ik) || isNaN(Dk)) return !1;
        switch (this.operand) {
          case ">":
            ek = ik > Dk;
            break;
          case "<":
            ek = ik < Dk;
            break;
          case "<=":
            ek = ik <= Dk;
            break;
          case ">=":
            ek = ik >= Dk;
            break;
          case "==":
            ek = ik === Dk;
            break;
          case "!=":
            ek = ik !== Dk
        }
        return ek
      }
    }
    var xk = ik(39447),
      nk = ik(39445);
    const Uk = /defined\s*?\((.+?)\)/g,
      Hk = /defined\s*?\[(.+?)\]/g,
      wk = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      lk = /__decl__/,
      pk = /light\{X\}.(\w*)/g,
      yk = /\{X\}/g,
      Yk = [],
      Lk = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function Ck(kk) {
      kk.processor && kk.processor.initializeShaders && kk.processor.initializeShaders(kk.processingContext)
    }

    function Ak(kk, ek, ik, Dk) {
      ek.processor?.preProcessShaderCode && (kk = ek.processor.preProcessShaderCode(kk, ek.isFragment)), Ik(kk, ek, (kk => {
        ek.processCodeAfterIncludes && (kk = ek.processCodeAfterIncludes(ek.isFragment ? "fragment" : "vertex", kk, ek.defines));
        const fk = function(kk, ek, ik) {
          let Dk = function(kk, ek) {
            if (ek.processor?.noPrecision) return kk;
            const ik = ek.shouldUseHighPrecisionShader; - 1 === kk.indexOf("precision highp float") ? kk = ik ? "precision highp float;\n" + kk : "precision mediump float;\n" + kk : ik || (kk = kk.replace("precision highp float", "precision mediump float"));
            return kk
          }(kk, ek);
          if (!ek.processor) return Dk;
          if (0 === ek.processor.shaderLanguage && -1 !== Dk.indexOf("#version 3") && (Dk = Dk.replace("#version 300 es", ""), !ek.processor.parseGLES3)) return Dk;
          const fk = ek.defines,
            Sk = qk(ek, ik);
          ek.processor.preProcessor && (Dk = ek.processor.preProcessor(Dk, fk, Sk, ek.isFragment, ek.processingContext));
          const bk = {};
          Dk = uk(Dk, Sk, ek, bk), ek.processor.postProcessor && (Dk = ek.processor.postProcessor(Dk, fk, ek.isFragment, ek.processingContext, ik ? {
            drawBuffersExtensionDisabled: !ik.getCaps().drawBuffersExtension
          } : {}, Sk, bk));
          ik?._features.needShaderCodeInlining && (Dk = ik.inlineShaderCode(Dk));
          return Dk
        }(kk, ek, Dk);
        ik(fk, kk)
      }))
    }

    function jk(kk, ek, ik) {
      return ik.processor && ik.processor.finalizeShaders ? ik.processor.finalizeShaders(kk, ek, ik.processingContext) : {
        vertexCode: kk,
        fragmentCode: ek
      }
    }

    function sk(kk) {
      const ek = /defined\((.+)\)/.exec(kk);
      if (ek && ek.length) return new Pk(ek[1].trim(), "!" === kk[0]);
      const ik = ["==", "!=", ">=", "<=", "<", ">"];
      let Dk = "",
        fk = 0;
      for (Dk of ik)
        if (fk = kk.indexOf(Dk), fk > -1) break;
      if (-1 === fk) return new Pk(kk);
      const Sk = kk.substring(0, fk).trim(),
        bk = kk.substring(fk + Dk.length).trim();
      return new Kk(Sk, Dk, bk)
    }

    function dk(kk, ek) {
      const ik = new bk,
        Dk = kk.substring(0, ek);
      let fk = kk.substring(ek);
      return fk = fk.substring(0, (fk.indexOf("//") + 1 || fk.length + 1) - 1).trim(), ik.testExpression = "#ifdef" === Dk ? new Pk(fk) : "#ifndef" === Dk ? new Pk(fk, !0) : function(kk) {
        kk = kk.replace(Uk, "defined[$1]");
        const ek = rk.infixToPostfix(kk),
          ik = [];
        for (const fk of ek)
          if ("||" !== fk && "&&" !== fk) ik.push(fk);
          else if (ik.length >= 2) {
          let kk = ik[ik.length - 1],
            ek = ik[ik.length - 2];
          ik.length -= 2;
          const Dk = "&&" == fk ? new Mk : new mk;
          "string" === typeof kk && (kk = kk.replace(Hk, "defined($1)")), "string" === typeof ek && (ek = ek.replace(Hk, "defined($1)")), Dk.leftOperand = "string" === typeof ek ? sk(ek) : ek, Dk.rightOperand = "string" === typeof kk ? sk(kk) : kk, ik.push(Dk)
        }
        let Dk = ik[ik.length - 1];
        return "string" === typeof Dk && (Dk = Dk.replace(Hk, "defined($1)")), "string" === typeof Dk ? sk(Dk) : Dk
      }(fk), ik
    }

    function Vk(kk, ek, ik, fk) {
      let Sk;
      for (; Fk(kk, ik, fk);) {
        Sk = kk.currentLine;
        const bk = Sk.substring(0, 5).toLowerCase();
        if ("#else" === bk) {
          const ik = new Dk;
          return ek.children.push(ik), void Fk(kk, ik, fk)
        }
        if ("#elif" === bk) {
          const kk = dk(Sk, 5);
          ek.children.push(kk), ik = kk
        }
      }
    }

    function Fk(kk, ek, ik) {
      for (; kk.canRead;) {
        kk.lineIndex++;
        const fk = kk.currentLine;
        if (fk.indexOf("#") >= 0) {
          const Dk = Lk.exec(fk);
          if (Dk && Dk.length) {
            switch (Dk[0]) {
              case "#ifdef": {
                const Dk = new Sk;
                ek.children.push(Dk);
                const bk = dk(fk, 6);
                Dk.children.push(bk), Vk(kk, Dk, bk, ik);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Dk = new Sk;
                ek.children.push(Dk);
                const bk = dk(fk, 7);
                Dk.children.push(bk), Vk(kk, Dk, bk, ik);
                break
              }
              case "#if": {
                const Dk = new Sk,
                  bk = dk(fk, 3);
                ek.children.push(Dk), Dk.children.push(bk), Vk(kk, Dk, bk, ik);
                break
              }
            }
            continue
          }
        }
        const bk = new Dk;
        if (bk.line = fk, ek.children.push(bk), "#" === fk[0] && "d" === fk[1]) {
          const kk = fk.replace(";", "").split(" ");
          bk.additionalDefineKey = kk[1], 3 === kk.length && (bk.additionalDefineValue = kk[2])
        }
      }
      return !1
    }

    function uk(kk, ek, ik, Sk) {
      const bk = new Dk,
        rk = new fk;
      return rk.lineIndex = -1, rk.lines = kk.split("\n"), Fk(rk, bk, Sk), bk.process(ek, ik, Sk)
    }

    function qk(kk, ek) {
      const ik = kk.defines,
        Dk = {};
      for (const fk of ik) {
        const kk = fk.replace("#define", "").replace(";", "").trim().split(" ");
        Dk[kk[0]] = kk.length > 1 ? kk[1] : ""
      }
      return 0 === kk.processor?.shaderLanguage && (Dk.GL_ES = "true"), Dk.__VERSION__ = kk.version, Dk[kk.platformName] = "true", (0, nk.f)(Dk, ek?.isNDCHalfZRange, ek?.Xik, ek?.useExactSrgbConversions), Dk
    }

    function Ik(kk, ek, ik) {
      let Dk;
      for (Yk.length = 0; null !== (Dk = wk.exec(kk));) Yk.push(Dk);
      let fk = [kk],
        Sk = !1;
      for (const rk of Yk) {
        let kk = rk[1];
        if (-1 !== kk.indexOf("__decl__") && (kk = kk.replace(lk, ""), ek.supportsUniformBuffers && (kk = kk.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), kk += "Declaration"), !ek.includesShadersStore[kk]) {
          const Dk = ek.shadersRepository + "ShadersInclude/" + kk + ".fx";
          return void zk.loadFile(Dk, (Dk => {
            ek.includesShadersStore[kk] = Dk, Ik(fk.join(""), ek, ik)
          }))
        } {
          let ik = ek.includesShadersStore[kk];
          if (rk[2]) {
            const kk = rk[3].split(",");
            for (let ek = 0; ek < kk.length; ek += 2) {
              const Dk = new RegExp(kk[ek], "g"),
                fk = kk[ek + 1];
              ik = ik.replace(Dk, fk)
            }
          }
          if (rk[4]) {
            const kk = rk[5];
            if (-1 !== kk.indexOf("..")) {
              const Dk = kk.split(".."),
                fk = parseInt(Dk[0]);
              let Sk = parseInt(Dk[1]),
                bk = ik.slice(0);
              ik = "", isNaN(Sk) && (Sk = ek.indexParameters[Dk[1]]);
              for (let kk = fk; kk < Sk; kk++) ek.supportsUniformBuffers || (bk = bk.replace(pk, ((kk, ek) => ek + "{X}"))), ik += bk.replace(yk, kk.toString()) + "\n"
            } else ek.supportsUniformBuffers || (ik = ik.replace(pk, ((kk, ek) => ek + "{X}"))), ik = ik.replace(yk, kk)
          }
          const Dk = [];
          for (const kk of fk) {
            const ek = kk.split(rk[0]);
            for (let kk = 0; kk < ek.length - 1; kk++) Dk.push(ek[kk]), Dk.push(ik);
            Dk.push(ek[ek.length - 1])
          }
          fk = Dk, Sk = Sk || ik.indexOf("#include<") >= 0 || ik.indexOf("#include <") >= 0
        }
      }
      Yk.length = 0;
      const bk = fk.join("");
      Sk ? Ik(bk.toString(), ek, ik) : ik(bk)
    }
    const zk = {
      loadFile: (kk, ek, ik, Dk, fk, Sk) => {
        throw (0, xk.k)("FileTools")
      }
    }
  },
  39445: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      c: () => Sk,
      f: () => rk,
      h: () => bk,
      k: () => Pk
    });
    var Dk = ik(39447);
    const fk = {};

    function Sk(kk, ek) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (ek ? ek + "\n" : "") + kk
    }

    function bk(kk, ek, ik, Sk, bk, rk, Pk) {
      const mk = Pk || fk.loadFile;
      if (!mk) throw (0, Dk.k)("FileTools");
      return mk(kk, ek, ik, Sk, bk, rk)
    }

    function rk(kk, ek, ik, Dk) {
      if (kk) return ek ? kk.IS_NDC_HALF_ZRANGE = "" : delete kk.IS_NDC_HALF_ZRANGE, ik ? kk.USE_REVERSE_DEPTHBUFFER = "" : delete kk.USE_REVERSE_DEPTHBUFFER, void(Dk ? kk.USE_EXACT_SRGB_CONVERSIONS = "" : delete kk.USE_EXACT_SRGB_CONVERSIONS);
      {
        let kk = "";
        return ek && (kk += "#define IS_NDC_HALF_ZRANGE"), ik && (kk && (kk += "\n"), kk += "#define USE_REVERSE_DEPTHBUFFER"), Dk && (kk && (kk += "\n"), kk += "#define USE_EXACT_SRGB_CONVERSIONS"), kk
      }
    }

    function Pk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Dk = arguments.length > 3 ? arguments[3] : void 0;
      switch (kk) {
        case 3: {
          const kk = new Int8Array(ek);
          return Dk && kk.set(new Int8Array(Dk)), kk
        }
        case 0: {
          const kk = new Uint8Array(ek);
          return Dk && kk.set(new Uint8Array(Dk)), kk
        }
        case 4: {
          const kk = "number" !== typeof ek ? new Int16Array(ek) : new Int16Array(ik ? ek / 2 : ek);
          return Dk && kk.set(new Int16Array(Dk)), kk
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const kk = "number" !== typeof ek ? new Uint16Array(ek) : new Uint16Array(ik ? ek / 2 : ek);
          return Dk && kk.set(new Uint16Array(Dk)), kk
        }
        case 6: {
          const kk = "number" !== typeof ek ? new Int32Array(ek) : new Int32Array(ik ? ek / 4 : ek);
          return Dk && kk.set(new Int32Array(Dk)), kk
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const kk = "number" !== typeof ek ? new Uint32Array(ek) : new Uint32Array(ik ? ek / 4 : ek);
          return Dk && kk.set(new Uint32Array(Dk)), kk
        }
        case 1: {
          const kk = "number" !== typeof ek ? new Float32Array(ek) : new Float32Array(ik ? ek / 4 : ek);
          return Dk && kk.set(new Float32Array(Dk)), kk
        }
      }
      const fk = new Uint8Array(ek);
      return Dk && fk.set(new Uint8Array(Dk)), fk
    }
  },
  39447: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => mk,
      h: () => Mk,
      i: () => Pk,
      k: () => fk
    });
    const Dk = {};

    function fk(kk) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Dk[kk]) return Dk[kk] = !0, `${kk} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Sk = {};
    let bk = !1,
      rk = 0;

    function Pk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Dk = function() {
        if ((ik || bk) && 0 === rk) {
          const ik = `${kk}.${ek}`;
          Sk[ik] || (Sk[ik] = !0, console.warn(`[Babylon.js] ${ik}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Dk.__isSideEffectStub = !0, Dk
    }

    function mk(kk) {
      return !!kk && !kk.__isSideEffectStub
    }

    function Mk(kk, ek) {
      return {
        get() {},
        set(kk) {
          Object.defineProperty(this, ek, {
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
  39429: (kk, ek, ik) => {
    function Dk() {
      return "undefined" !== typeof window
    }

    function fk() {
      return "undefined" !== typeof navigator
    }

    function Sk() {
      return "undefined" !== typeof document
    }

    function bk(kk) {
      let ek = "",
        ik = kk.firstChild;
      for (; ik;) 3 === ik.nodeType && (ek += ik.textContent), ik = ik.nextSibling;
      return ek
    }
    ik.d(ek, {
      c: () => bk,
      e: () => Sk,
      f: () => fk,
      i: () => Dk
    })
  },
  39617: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      g: () => fk,
      j: () => Sk
    });
    class Dk extends Error {}
    Dk._setPrototypeOf = Object.setPrototypeOf || ((kk, ek) => (kk.__proto__ = ek, kk));
    const fk = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Sk extends Dk {
      constructor(kk, ek, ik) {
        super(kk), this.errorCode = ek, this.innerError = ik, this.name = "RuntimeError", Dk._setPrototypeOf(this, Sk.prototype)
      }
    }
  },
  39607: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => qk,
      e: () => yk,
      f: () => dk,
      h: () => Fk,
      k: () => jk,
      o: () => Ck,
      q: () => Ak,
      s: () => Ek,
      t: () => sk,
      w: () => Yk
    });
    var Dk = ik(39612),
      fk = ik(39429),
      Sk = ik(36726);
    class bk {}
    bk.FilesToLoad = {};
    var rk = ik(39617),
      Pk = ik(39620),
      mk = ik(36722),
      Mk = ik(39445),
      Kk = ik(39455),
      xk = ik(38272),
      nk = ik(39458),
      Uk = ik(39623);
    const Hk = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class wk extends rk.j {
      constructor(kk, ek) {
        super(kk, rk.g.LoadFileError), this.name = "LoadFileError", rk.c._setPrototypeOf(this, wk.prototype), ek instanceof Dk.d ? this.request = ek : this.file = ek
      }
    }
    class lk extends rk.j {
      constructor(kk, ek) {
        super(kk, rk.g.RequestFileError), this.request = ek, this.name = "RequestFileError", rk.c._setPrototypeOf(this, lk.prototype)
      }
    }
    class pk extends rk.j {
      constructor(kk, ek) {
        super(kk, rk.g.ReadFileError), this.file = ek, this.name = "ReadFileError", rk.c._setPrototypeOf(this, pk.prototype)
      }
    }
    const yk = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (ik, Dk, fk) => 0 !== Dk.status || fk >= kk || -1 !== ik.indexOf("file:") ? -1 : Math.pow(2, fk) * ek
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: kk => kk,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: kk => kk,
        CleanUrl: kk => kk = kk.replace(/#/gm, "%23")
      },
      Yk = (kk, ek) => {
        if ((!kk || 0 !== kk.indexOf("data:")) && yk.CorsBehavior)
          if ("string" === typeof yk.CorsBehavior || yk.CorsBehavior instanceof String) ek.crossOrigin = yk.CorsBehavior;
          else {
            const ik = yk.CorsBehavior(kk);
            ik && (ek.crossOrigin = ik)
          }
      },
      Lk = {
        getRequiredSize: null
      },
      Ck = function(kk, ek, ik, fk) {
        let Sk, rk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Mk = arguments.length > 5 ? arguments[5] : void 0,
          Kk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mk.e.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Kk?._features.forceBitmapOverHTMLImageElement) return ik("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Kk?._features.forceBitmapOverHTMLImageElement && "string" !== typeof kk && "undefined" !== typeof Blob) {
          let Dk;
          if (kk instanceof Blob) Dk = kk;
          else {
            const ek = kk instanceof ArrayBuffer ? kk : (0, Uk.m)(kk);
            Dk = new Blob([ek], {
              type: rk
            })
          }
          return Kk.createImageBitmap(Dk, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Mk
          }).then(ek).catch((ek => {
            ik && ik("Error while trying to load image: " + kk, ek)
          })), null
        }
        let xk = !1;
        if (kk instanceof ArrayBuffer || ArrayBuffer.isView(kk))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let ek;
            ek = kk instanceof ArrayBuffer ? kk : (0, Uk.m)(kk), Sk = URL.createObjectURL(new Blob([ek], {
              type: rk
            })), xk = !0
          } else Sk = `data:${rk};base64,` + (0, Pk.i)(kk);
        else kk instanceof Blob ? (Sk = URL.createObjectURL(kk), xk = !0) : (Sk = yk.CleanUrl(kk), Sk = yk.PreprocessUrl(Sk));
        const nk = ek => {
          if (ik) {
            const Dk = Sk || kk.toString();
            ik(`Error while trying to load image: ${0===Dk.indexOf("http")||Dk.length<=128?Dk:Dk.slice(0,128)+"..."}`, ek)
          }
        };
        if (Kk?._features.forceBitmapOverHTMLImageElement) return jk(Sk, (Dk => {
          Kk.createImageBitmap(new Blob([Dk], {
            type: rk
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Mk
          }).then((kk => {
            ek(kk), xk && URL.revokeObjectURL(Sk)
          })).catch((ek => {
            ik && ik("Error while trying to load image: " + kk, ek)
          }))
        }), void 0, fk || void 0, !0, ((kk, ek) => {
          nk(ek)
        })), null;
        const Hk = new Image;
        if (Lk.getRequiredSize) {
          const ek = Lk.getRequiredSize(kk);
          ek.width && (Hk.width = ek.width), ek.height && (Hk.height = ek.height)
        }
        Yk(Sk, Hk);
        const wk = [],
          lk = () => {
            for (const kk of wk) kk.target.removeEventListener(kk.name, kk.handler);
            wk.length = 0
          };
        wk.push({
          target: Hk,
          name: "load",
          handler: () => {
            lk(), ek(Hk), xk && Hk.src && URL.revokeObjectURL(Hk.src)
          }
        }), wk.push({
          target: Hk,
          name: "error",
          handler: kk => {
            lk(), nk(kk), xk && Hk.src && URL.revokeObjectURL(Hk.src)
          }
        }), wk.push({
          target: document,
          name: "securitypolicyviolation",
          handler: kk => {
            if (kk.blockedURI !== Hk.src || "CU" === kk.disposition) return;
            lk();
            const ek = new Error(`CSP violation of policy ${kk.effectiveDirective} ${kk.blockedURI}. Current policy is ${kk.originalPolicy}`);
            mk.e.UseFallbackTexture = !1, nk(ek), xk && Hk.src && URL.revokeObjectURL(Hk.src), Hk.src = ""
          }
        }), (() => {
          for (const kk of wk) kk.target.addEventListener(kk.name, kk.handler)
        })();
        const pk = "blob:" === Sk.substring(0, 5),
          Ck = "data:" === Sk.substring(0, 5),
          Ak = () => {
            pk || Ck || !Dk.d.IsCustomRequestAvailable ? Hk.src = Sk : jk(Sk, ((kk, ek, ik) => {
              const Dk = new Blob([kk], {
                  type: !rk && ik ? ik : rk
                }),
                fk = URL.createObjectURL(Dk);
              xk = !0, Hk.src = fk
            }), void 0, fk || void 0, !0, ((kk, ek) => {
              nk(ek)
            }))
          },
          sk = () => {
            fk && fk.loadImage(Sk, Hk)
          };
        if (!pk && !Ck && fk && fk.enableTexturesOffline) fk.open(sk, Ak);
        else {
          if (-1 !== Sk.indexOf("file:")) {
            const kk = decodeURIComponent(Sk.substring(5).toLowerCase());
            if (bk.FilesToLoad[kk] && "undefined" !== typeof URL) {
              try {
                let ek;
                try {
                  ek = URL.createObjectURL(bk.FilesToLoad[kk])
                } catch (dk) {
                  ek = URL.createObjectURL(bk.FilesToLoad[kk])
                }
                Hk.src = ek, xk = !0
              } catch (Vk) {
                Hk.src = ""
              }
              return Hk
            }
          }
          Ak()
        }
        return Hk
      },
      Ak = (kk, ek, ik, Dk, fk) => {
        const bk = new FileReader,
          rk = {
            onCompleteObservable: new Sk.c,
            abort: () => bk.abort()
          };
        return bk.onloadend = () => rk.onCompleteObservable.notifyObservers(rk), fk && (bk.onerror = () => {
          fk(new pk(`Unable to read ${kk.name}`, kk))
        }), bk.onload = kk => {
          ek(kk.target.result)
        }, ik && (bk.onprogress = ik), Dk ? bk.readAsArrayBuffer(kk) : bk.readAsText(kk), rk
      },
      jk = (kk, ek, ik, Dk, fk, Pk, mk) => {
        if (kk.name) return Ak(kk, ek, ik, fk, Pk ? kk => {
          Pk(void 0, kk)
        } : void 0);
        const Mk = kk;
        if (-1 !== Mk.indexOf("file:")) {
          let kk = decodeURIComponent(Mk.substring(5).toLowerCase());
          0 === kk.indexOf("./") && (kk = kk.substring(2));
          const Dk = bk.FilesToLoad[kk];
          if (Dk) return Ak(Dk, ek, ik, fk, Pk ? kk => Pk(void 0, new wk(kk.message, kk.file)) : void 0)
        }
        const {
          match: Kk,
          type: Uk
        } = uk(Mk);
        if (Kk) {
          const kk = {
            onCompleteObservable: new Sk.c,
            abort: () => () => {}
          };
          try {
            const kk = fk ? qk(Mk) : Ik(Mk);
            ek(kk, void 0, Uk)
          } catch (rk) {
            Pk ? Pk(void 0, rk) : xk.b.Error(rk.message || "Failed to parse the Data URL")
          }
          return nk.e.SetImmediate((() => {
            kk.onCompleteObservable.notifyObservers(kk)
          })), kk
        }
        return sk(Mk, ((kk, ik) => {
          ek(kk, ik?.responseURL, ik?.getResponseHeader("content-type"))
        }), ik, Dk, fk, Pk ? kk => {
          Pk(kk.request, new wk(kk.message, kk.request))
        } : void 0, mk)
      },
      sk = (kk, ek, ik, bk, rk, Pk, Mk) => {
        null !== bk && (bk ?? (bk = mk.e.LastCreatedScene?.offlineProvider)), kk = yk.CleanUrl(kk), kk = yk.PreprocessUrl(kk);
        const Kk = yk.BaseUrl + kk;
        let nk = !1;
        const Uk = {
            onCompleteObservable: new Sk.c,
            abort: () => nk = !0
          },
          Hk = () => {
            let kk, Sk = new Dk.d,
              bk = null;
            const mk = () => {
              Sk && (ik && Sk.removeEventListener("progress", ik), kk && Sk.removeEventListener("readystatechange", kk), Sk.removeEventListener("loadend", Hk))
            };
            let Hk = () => {
              mk(), Uk.onCompleteObservable.notifyObservers(Uk), Uk.onCompleteObservable.clear(), ik = void 0, kk = null, Hk = null, Pk = void 0, Mk = void 0, ek = void 0
            };
            Uk.abort = () => {
              nk = !0, Hk && Hk(), Sk && Sk.readyState !== (XMLHttpRequest.DONE || 4) && Sk.abort(), null !== bk && (clearTimeout(bk), bk = null), Sk = null
            };
            const wk = kk => {
                const ek = kk.message || "Unknown error";
                Pk && Sk ? Pk(new lk(ek, Sk)) : xk.b.Error(ek)
              },
              pk = xk => {
                if (Sk) {
                  if (Sk.open("GET", Kk), Mk) try {
                    Mk(Sk)
                  } catch (Uk) {
                    return void wk(Uk)
                  }
                  rk && (Sk.responseType = "arraybuffer"), ik && Sk.addEventListener("progress", ik), Hk && Sk.addEventListener("loadend", Hk), kk = () => {
                    if (!nk && Sk && Sk.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (kk && Sk.removeEventListener("readystatechange", kk), Sk.status >= 200 && Sk.status < 300 || 0 === Sk.status && (!(0, fk.i)() || Vk())) {
                        const kk = rk ? Sk.response : Sk.responseText;
                        if (null !== kk) {
                          try {
                            ek && ek(kk, Sk)
                          } catch (Uk) {
                            wk(Uk)
                          }
                          return
                        }
                      }
                      const ik = yk.DefaultRetryStrategy;
                      if (ik) {
                        const kk = ik(Kk, Sk, xk);
                        if (-1 !== kk) return mk(), Sk = new Dk.d, void(bk = setTimeout((() => pk(xk + 1)), kk))
                      }
                      const Mk = new lk("Error status: " + Sk.status + " " + Sk.statusText + " - Unable to load " + Kk, Sk);
                      Pk && Pk(Mk)
                    }
                  }, Sk.addEventListener("readystatechange", kk), Sk.send()
                }
              };
            pk(0)
          };
        if (bk && bk.enableSceneOffline && !kk.startsWith("blob:")) {
          const Dk = kk => {
              kk && kk.status > 400 ? Pk && Pk(kk) : Hk()
            },
            fk = () => {
              bk && bk.loadFile(yk.BaseUrl + kk, (kk => {
                !nk && ek && ek(kk), Uk.onCompleteObservable.notifyObservers(Uk)
              }), ik ? kk => {
                !nk && ik && ik(kk)
              } : void 0, Dk, rk)
            };
          bk.open(fk, Dk)
        } else Hk();
        return Uk
      },
      dk = kk => {
        const {
          match: ek,
          type: ik
        } = uk(kk);
        if (ek) return ik || void 0;
        const Dk = kk.lastIndexOf(".");
        switch (kk.substring(Dk + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "YF":
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
      Vk = () => "undefined" !== typeof location && "file:" === location.protocol,
      Fk = kk => Hk.test(kk),
      uk = kk => {
        const ek = Hk.exec(kk);
        if (null === ek || 0 === ek.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: ek[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function qk(kk) {
      return (0, Pk.d)(kk.split(",")[1])
    }
    const Ik = kk => (0, Pk.h)(kk.split(",")[1]);
    let zk;
    const Qk = (kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) => {
      zk = {
        DecodeBase64UrlToBinary: kk,
        DecodeBase64UrlToString: ek,
        DefaultRetryStrategy: ik.DefaultRetryStrategy,
        BaseUrl: ik.BaseUrl,
        CorsBehavior: ik.CorsBehavior,
        PreprocessUrl: ik.PreprocessUrl,
        IsBase64DataUrl: Dk,
        IsFileURL: fk,
        LoadFile: Sk,
        LoadImage: bk,
        ReadFile: rk,
        RequestFile: Pk,
        SetCorsBehavior: mk
      }, Object.defineProperty(zk, "DefaultRetryStrategy", {
        get: function() {
          return ik.DefaultRetryStrategy
        },
        set: function(kk) {
          ik.DefaultRetryStrategy = kk
        }
      }), Object.defineProperty(zk, "BaseUrl", {
        get: function() {
          return ik.BaseUrl
        },
        set: function(kk) {
          ik.BaseUrl = kk
        }
      }), Object.defineProperty(zk, "PreprocessUrl", {
        get: function() {
          return ik.PreprocessUrl
        },
        set: function(kk) {
          ik.PreprocessUrl = kk
        }
      }), Object.defineProperty(zk, "CorsBehavior", {
        get: function() {
          return ik.CorsBehavior
        },
        set: function(kk) {
          ik.CorsBehavior = kk
        }
      })
    };
    let vk = !1;

    function Ek() {
      vk || (vk = !0, Qk(qk, Ik, yk, Fk, Vk, jk, Ck, Ak, sk, Yk), Mk.b.loadFile = jk, Mk.b.loadImage = Ck, Kk.l.loadFile = jk)
    }
  },
  39628: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk,
      h: () => Sk,
      i: () => bk
    });
    let Dk = null;

    function fk() {
      if (Dk) return Dk;
      const kk = new ArrayBuffer(4),
        ek = new Float32Array(kk),
        ik = new Uint32Array(kk),
        fk = new Uint32Array(512),
        Sk = new Uint32Array(512);
      for (let Dk = 0; Dk < 256; ++Dk) {
        const kk = Dk - 127;
        kk < -24 ? (fk[Dk] = 0, fk[256 | Dk] = 32768, Sk[Dk] = 24, Sk[256 | Dk] = 24) : kk < -14 ? (fk[Dk] = 1024 >> -kk - 14, fk[256 | Dk] = 1024 >> -kk - 14 | 32768, Sk[Dk] = -kk - 1, Sk[256 | Dk] = -kk - 1) : kk <= 15 ? (fk[Dk] = kk + 15 << 10, fk[256 | Dk] = kk + 15 << 10 | 32768, Sk[Dk] = 13, Sk[256 | Dk] = 13) : kk < 128 ? (fk[Dk] = 31744, fk[256 | Dk] = 64512, Sk[Dk] = 24, Sk[256 | Dk] = 24) : (fk[Dk] = 31744, fk[256 | Dk] = 64512, Sk[Dk] = 13, Sk[256 | Dk] = 13)
      }
      const bk = new Uint32Array(2048),
        rk = new Uint32Array(64),
        Pk = new Uint32Array(64);
      for (let Dk = 1; Dk < 1024; ++Dk) {
        let kk = Dk << 13,
          ek = 0;
        for (; 0 === (8388608 & kk);) kk <<= 1, ek -= 8388608;
        kk &= -8388609, ek += 947912704, bk[Dk] = kk | ek
      }
      for (let Dk = 1024; Dk < 2048; ++Dk) bk[Dk] = 939524096 + (Dk - 1024 << 13);
      for (let Dk = 1; Dk < 31; ++Dk) rk[Dk] = Dk << 23;
      rk[31] = 1199570944, rk[32] = 2147483648;
      for (let Dk = 33; Dk < 63; ++Dk) rk[Dk] = 2147483648 + (Dk - 32 << 23);
      rk[63] = 3347054592;
      for (let Dk = 1; Dk < 64; ++Dk) 32 !== Dk && (Pk[Dk] = 1024);
      return Dk = {
        floatView: ek,
        uint32View: ik,
        baseTable: fk,
        shiftTable: Sk,
        mantissaTable: bk,
        exponentTable: rk,
        offsetTable: Pk
      }, Dk
    }
    const Sk = 65504;

    function bk(kk) {
      const ek = fk();
      ek.floatView[0] = kk;
      const ik = ek.uint32View[0],
        Dk = ik >> 23 & 511;
      return ek.baseTable[Dk] + ((8388607 & ik) >> ek.shiftTable[Dk])
    }

    function rk(kk) {
      const ek = fk();
      return ek.uint32View[0] = ek.mantissaTable[ek.offsetTable[kk >> 10] + (1023 & kk)] + ek.exponentTable[kk >> 10], ek.floatView[0]
    }
  },
  39620: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      h: () => fk,
      i: () => Dk
    });
    const Dk = kk => {
        const ek = ArrayBuffer.isView(kk) ? new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength) : new Uint8Array(kk);
        return "function" === typeof ek.toBase64 ? ek.toBase64() : function(kk) {
          const ek = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let ik, Dk, fk, Sk, bk, rk, Pk, mk = "",
            Mk = 0;
          for (; Mk < kk.length;) ik = kk[Mk++], Dk = Mk < kk.length ? kk[Mk++] : Number.NaN, fk = Mk < kk.length ? kk[Mk++] : Number.NaN, Sk = ik >> 2, bk = (3 & ik) << 4 | Dk >> 4, rk = (15 & Dk) << 2 | fk >> 6, Pk = 63 & fk, isNaN(Dk) ? rk = Pk = 64 : isNaN(fk) && (Pk = 64), mk += ek.charAt(Sk) + ek.charAt(bk) + ek.charAt(rk) + ek.charAt(Pk);
          return mk
        }(ek)
      },
      fk = kk => atob(kk),
      Sk = kk => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(kk).buffer : function(kk) {
        const ek = fk(kk),
          ik = ek.length,
          Dk = new Uint8Array(new ArrayBuffer(ik));
        for (let fk = 0; fk < ik; fk++) Dk[fk] = ek.charCodeAt(fk);
        return Dk.buffer
      }(kk)
  },
  39458: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      h: () => bk
    });
    let Dk = [];
    class fk {
      static SetImmediate(kk) {
        0 === Dk.length && setTimeout((() => {
          const kk = Dk;
          Dk = [];
          for (const ek of kk) ek()
        }), 1), Dk.push(kk)
      }
    }

    function Sk(kk, ek, ik) {
      try {
        if (kk()) return ek(), !0
      } catch (Dk) {
        return ik?.(Dk), !0
      }
      return !1
    }
    const bk = function(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        bk = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Sk(kk, ek, ik)) return null;
      const rk = setInterval((() => {
        Sk(kk, ek, ik) ? clearInterval(rk) : (fk -= Dk, fk < 0 && (clearInterval(rk), ik?.(new Error("Operation timed out after maximum retries. " + (bk || "")), !0)))
      }), Dk);
      return () => clearInterval(rk)
    }
  },
  39612: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Dk.CustomRequestHeaders).length > 0 || Dk.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(kk) {
        return kk = (kk = kk.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(kk) {
        return Dk.SkipRequestModificationForBabylonCDN && (kk.includes("preview.babylonjs.com") || kk.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(kk) {
        const ek = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Dk._ShouldSkipRequestModifications(kk)) return {
          url: kk,
          headers: ek
        };
        for (const fk in Dk.CustomRequestHeaders) {
          const kk = Dk.CustomRequestHeaders[fk];
          kk && (ek[fk] = kk)
        }
        const ik = {
          setRequestHeader: (kk, ik) => {
            ek[kk] = ik
          }
        };
        for (const fk of Dk.CustomRequestModifiers) {
          if (Dk._ShouldSkipRequestModifications(kk)) break;
          const ek = fk(ik, kk);
          "string" === typeof ek && (kk = ek)
        }
        return {
          url: kk,
          headers: ek
        }
      }
      static async FetchAsync(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const ik = ek.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: fk,
            headers: Sk
          } = Dk._CollectCustomizations(Dk._CleanUrl(kk), ek.headers ?? {});
          return await fetch(fk, {
            method: ik,
            headers: Sk,
            body: ek.body ?? void 0
          })
        }
        return await new Promise(((fk, Sk) => {
          const bk = new Dk;
          bk.responseType = "arraybuffer", bk.addEventListener("readystatechange", (() => {
            if (4 === bk.readyState)
              if (bk.status >= 200 && bk.status < 300) {
                const kk = "undefined" !== typeof Headers ? new Headers : void 0,
                  ek = bk.getResponseHeader("Content-Type");
                ek && kk && kk.set("Content-Type", ek), "undefined" !== typeof Response ? fk(new Response(bk.response, {
                  status: bk.status,
                  statusText: bk.statusText,
                  headers: kk
                })) : fk({
                  ok: !0,
                  status: bk.status,
                  statusText: bk.statusText,
                  headers: {
                    get: kk => bk.getResponseHeader(kk)
                  },
                  arrayBuffer: async () => await Promise.resolve(bk.response)
                })
              } else Sk(new Error(`HTTP ${bk.status} loading '${bk.requestURL}': ${bk.statusText}`))
          })), bk.open(ik, kk, ek.headers), bk.send(ek.body ?? null)
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
      addEventListener(kk, ek, ik) {
        this._xhr.addEventListener(kk, ek, ik)
      }
      removeEventListener(kk, ek, ik) {
        this._xhr.removeEventListener(kk, ek, ik)
      }
      abort() {
        this._xhr.abort()
      }
      send(kk) {
        this._xhr.send(kk)
      }
      open(kk, ek, ik) {
        const {
          url: fk,
          headers: Sk
        } = Dk._CollectCustomizations(ek, ik);
        this._requestURL = Dk._CleanUrl(fk), this._xhr.open(kk, this._requestURL, !0);
        for (const Dk in Sk) this._xhr.setRequestHeader(Dk, Sk[Dk])
      }
      setRequestHeader(kk, ek) {
        this._xhr.setRequestHeader(kk, ek)
      }
      getResponseHeader(kk) {
        return this._xhr.getResponseHeader(kk)
      }
    }
    Dk.CustomRequestHeaders = {}, Dk.CustomRequestModifiers = new Array, Dk.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);