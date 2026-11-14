export const id = 230;
export const ids = [230];
export const modules = {
  38116: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      g: () => Oc,
      j: () => Mc,
      k: () => fc,
      m: () => Pc,
      q: () => sc,
      s: () => qB
    });
    var Vc = nc(37191),
      Ic = nc(38118);

    function rB(cB, Bc, nc, Vc) {
      switch (Bc) {
        case 5120: {
          let Bc = cB.getInt8(nc);
          return Vc && (Bc = Math.max(Bc / 127, -1)), Bc
        }
        case 5121: {
          let Bc = cB.getUint8(nc);
          return Vc && (Bc /= 255), Bc
        }
        case 5122: {
          let Bc = cB.getInt16(nc, !0);
          return Vc && (Bc = Math.max(Bc / 32767, -1)), Bc
        }
        case 5123: {
          let Bc = cB.getUint16(nc, !0);
          return Vc && (Bc /= 65535), Bc
        }
        case 5131:
          return (0, Ic.c)(cB.getUint16(nc, !0));
        case 5124:
          return cB.getInt32(nc, !0);
        case 5125:
          return cB.getUint32(nc, !0);
        case 5126:
          return cB.getFloat32(nc, !0);
        default:
          throw new Error(`Invalid component type ${Bc}`)
      }
    }

    function uc(cB, Bc, nc, Vc, rB) {
      switch (Bc) {
        case 5120:
          Vc && (rB = Math.round(127 * rB)), cB.setInt8(nc, rB);
          break;
        case 5121:
          Vc && (rB = Math.round(255 * rB)), cB.setUint8(nc, rB);
          break;
        case 5122:
          Vc && (rB = Math.round(32767 * rB)), cB.setInt16(nc, rB, !0);
          break;
        case 5123:
          Vc && (rB = Math.round(65535 * rB)), cB.setUint16(nc, rB, !0);
          break;
        case 5131:
          cB.setUint16(nc, (0, Ic.g)(rB), !0);
          break;
        case 5124:
          cB.setInt32(nc, rB, !0);
          break;
        case 5125:
          cB.setUint32(nc, rB, !0);
          break;
        case 5126:
          cB.setFloat32(nc, rB, !0);
          break;
        default:
          throw new Error(`Invalid component type ${Bc}`)
      }
    }

    function sc(cB) {
      switch (cB) {
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
          throw new Error(`Invalid type '${cB}'`)
      }
    }

    function Mc(cB, Bc, nc, Vc, Ic, Mc, Pc, qB) {
      const Oc = new Array(Vc),
        Tc = new Array(Vc);
      if (cB instanceof Array) {
        let Ic = Bc / 4;
        const rB = nc / 4;
        for (let Bc = 0; Bc < Mc; Bc += Vc) {
          for (let Bc = 0; Bc < Vc; Bc++) Oc[Bc] = Tc[Bc] = cB[Ic + Bc];
          qB(Tc, Bc);
          for (let Bc = 0; Bc < Vc; Bc++) Oc[Bc] !== Tc[Bc] && (cB[Ic + Bc] = Tc[Bc]);
          Ic += rB
        }
      } else {
        const fc = ArrayBuffer.isView(cB) ? new DataView(cB.buffer, cB.byteOffset, cB.byteLength) : new DataView(cB),
          mB = sc(Ic);
        for (let cB = 0; cB < Mc; cB += Vc) {
          for (let cB = 0, nc = Bc; cB < Vc; cB++, nc += mB) Oc[cB] = Tc[cB] = rB(fc, Ic, nc, Pc);
          qB(Tc, cB);
          for (let cB = 0, nc = Bc; cB < Vc; cB++, nc += mB) Oc[cB] !== Tc[cB] && uc(fc, Ic, nc, Pc, Tc[cB]);
          Bc += nc
        }
      }
    }

    function Pc(cB, Bc, nc, Ic, rB, uc, Pc, qB) {
      const Oc = Bc * sc(nc),
        Tc = Pc * Bc;
      if (5126 !== nc || rB !== Oc) {
        const Vc = new Float32Array(Tc);
        return Mc(cB, Ic, rB, Bc, nc, Tc, uc, ((cB, nc) => {
          for (let Ic = 0; Ic < Bc; Ic++) Vc[nc + Ic] = cB[Ic]
        })), Vc
      }
      if (!(cB instanceof Array || cB instanceof Float32Array) || 0 !== Ic || cB.length !== Tc) {
        if (cB instanceof Array) {
          const Bc = Ic / 4;
          return cB.slice(Bc, Bc + Tc)
        }
        if (ArrayBuffer.isView(cB)) {
          const Bc = cB.byteOffset + Ic;
          return 0 !== (3 & Bc) && (Vc.c.Warn("Float array must be aligned to 4-bytes border"), qB = !0), qB ? new Float32Array(cB.buffer.slice(Bc, Bc + Tc * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(cB.buffer, Bc, Tc)
        }
        return new Float32Array(cB, Ic, Tc)
      }
      return qB ? cB.slice() : cB
    }

    function qB(cB, Bc, nc, Ic, rB, uc, Pc) {
      const qB = sc(nc),
        Oc = function(cB) {
          switch (cB) {
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
              throw new Error(`Invalid component type '${cB}'`)
          }
        }(nc),
        Tc = uc * Bc;
      if (Array.isArray(cB)) {
        if (0 !== (3 & Ic) || 0 !== (3 & rB)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Vc = Ic / 4,
          sc = rB / 4;
        if (Vc + (uc - 1) * sc + Bc > cB.length) throw new Error("Last accessed index is out of bounds.");
        if (sc < Bc) throw new Error("Data stride cannot be smaller than the component size.");
        if (sc !== Bc) {
          const Vc = new Oc(Tc);
          return Mc(cB, Ic, rB, Bc, nc, Tc, !1, ((cB, nc) => {
            for (let Ic = 0; Ic < Bc; Ic++) Vc[nc + Ic] = cB[Ic]
          })), Vc
        }
        return new Oc(cB.slice(Vc, Vc + Tc))
      }
      let fc, mB = Ic;
      ArrayBuffer.isView(cB) ? (fc = cB.buffer, mB += cB.byteOffset) : fc = cB;
      if (mB + (uc - 1) * rB + Bc * qB > fc.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const ec = Bc * qB;
      if (rB < ec) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (rB !== ec) {
        const cB = new Oc(Tc),
          nc = new Uint8Array(fc, mB),
          Vc = new Uint8Array(cB.buffer),
          Ic = Bc * qB;
        for (let Bc = 0, sc = 0, Mc = 0; Bc < uc; Bc++, sc += rB, Mc += Ic) Vc.set(nc.subarray(sc, sc + Ic), Mc);
        return cB
      }
      return 1 !== qB && 0 !== (mB & qB - 1) && (Vc.c.Warn("Array must be aligned to border of element size. Data will be copied."), Pc = !0), Pc ? new Oc(fc.slice(mB, mB + Tc * qB)) : new Oc(fc, mB, Tc)
    }

    function Oc(cB, Bc, nc, Ic, rB, uc, Pc, qB) {
      const Oc = Bc * sc(nc),
        Tc = Pc * Bc;
      if (qB.length !== Tc) throw new Error("Output length is not valid");
      if (5126 === nc && rB === Oc)
        if (cB instanceof Array) {
          const Bc = Ic / 4;
          qB.set(cB, Bc)
        } else if (ArrayBuffer.isView(cB)) {
        const Bc = cB.byteOffset + Ic;
        if (0 !== (3 & Bc)) return Vc.c.Warn("Float array must be aligned to 4-bytes border"), void qB.set(new Float32Array(cB.buffer.slice(Bc, Bc + Tc * Float32Array.BYTES_PER_ELEMENT)));
        const nc = new Float32Array(cB.buffer, Bc, Tc);
        qB.set(nc)
      } else {
        const Bc = new Float32Array(cB, Ic, Tc);
        qB.set(Bc)
      } else Mc(cB, Ic, rB, Bc, nc, Tc, uc, ((cB, nc) => {
        for (let Vc = 0; Vc < Bc; Vc++) qB[nc + Vc] = cB[Vc]
      }))
    }

    function Tc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(cB)) {
        for (let Ic = 0; Ic < Bc; Ic++)
          if (cB[nc + Ic] - Vc > 65535) return !0;
        return !1
      }
      return 4 === cB.BYTES_PER_ELEMENT
    }

    function fc(cB) {
      const Bc = cB.buffer;
      if (Bc instanceof ArrayBuffer) return cB;
      const nc = new ArrayBuffer(cB.byteLength);
      return new Uint8Array(nc).set(new Uint8Array(Bc, cB.byteOffset, cB.byteLength)), nc
    }
  },
  37959: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Yc,
      e: () => aB,
      j: () => lc,
      f: () => Cc,
      m: () => vB
    });
    class Vc {
      constructor() {
        this.children = []
      }
      isValid(cB) {
        return !0
      }
      process(cB, Bc, nc) {
        let Vc = "";
        if (this.line) {
          let nc = this.line;
          const Ic = Bc.processor;
          if (Ic) {
            Ic.lineProcessor && (nc = Ic.lineProcessor(nc, Bc.isFragment, Bc.processingContext));
            const Vc = Bc.processor?.attributeKeywordName ?? "attribute",
              rB = Bc.isFragment && Bc.processor?.varyingFragmentKeywordName ? Bc.processor?.varyingFragmentKeywordName : !Bc.isFragment && Bc.processor?.varyingVertexKeywordName ? Bc.processor?.varyingVertexKeywordName : "varying";
            if (!Bc.isFragment && Ic.attributeProcessor && this.line.startsWith(Vc)) nc = Ic.attributeProcessor(this.line, cB, Bc.processingContext);
            else if (Ic.varyingProcessor && (Ic.varyingCheck?.(this.line, Bc.isFragment) || !Ic.varyingCheck && this.line.startsWith(rB))) nc = Ic.varyingProcessor(this.line, Bc.isFragment, cB, Bc.processingContext);
            else if (Ic.uniformProcessor && Ic.uniformRegexp && Ic.uniformRegexp.test(this.line)) Bc.lookForClosingBracketForUniformBuffer || (nc = Ic.uniformProcessor(this.line, Bc.isFragment, cB, Bc.processingContext));
            else if (Ic.uniformBufferProcessor && Ic.uniformBufferRegexp && Ic.uniformBufferRegexp.test(this.line)) Bc.lookForClosingBracketForUniformBuffer || (nc = Ic.uniformBufferProcessor(this.line, Bc.isFragment, Bc.processingContext), Bc.lookForClosingBracketForUniformBuffer = !0);
            else if (Ic.textureProcessor && Ic.textureRegexp && Ic.textureRegexp.test(this.line)) nc = Ic.textureProcessor(this.line, Bc.isFragment, cB, Bc.processingContext);
            else if ((Ic.uniformProcessor || Ic.uniformBufferProcessor) && this.line.startsWith("uniform") && !Bc.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Ic.uniformProcessor && (nc = Ic.uniformProcessor(this.line, Bc.isFragment, cB, Bc.processingContext)) : Ic.uniformBufferProcessor && (nc = Ic.uniformBufferProcessor(this.line, Bc.isFragment, Bc.processingContext), Bc.lookForClosingBracketForUniformBuffer = !0)
            }
            Bc.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (Bc.lookForClosingBracketForUniformBuffer = !1, Ic.endOfUniformBufferProcessor && (nc = Ic.endOfUniformBufferProcessor(this.line, Bc.isFragment, Bc.processingContext)))
          }
          Vc += nc + "\n"
        }
        for (const Ic of this.children) Vc += Ic.process(cB, Bc, nc);
        return this.additionalDefineKey && (cB[this.additionalDefineKey] = this.additionalDefineValue || "true", nc[this.additionalDefineKey] = cB[this.additionalDefineKey]), Vc
      }
    }
    class Ic {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(cB) {
        this._lines.length = 0;
        for (const Bc of cB) {
          if (!Bc || "\r" === Bc) continue;
          if ("#" === Bc[0]) {
            this._lines.push(Bc);
            continue
          }
          const cB = Bc.trim();
          if (!cB) continue;
          if (cB.startsWith("//")) {
            this._lines.push(Bc);
            continue
          }
          const nc = cB.indexOf(";");
          if (-1 === nc) this._lines.push(cB);
          else if (nc === cB.length - 1) cB.length > 1 && this._lines.push(cB);
          else {
            const cB = Bc.split(";");
            for (let Bc = 0; Bc < cB.length; Bc++) {
              let nc = cB[Bc];
              nc && (nc = nc.trim(), nc && this._lines.push(nc + (Bc !== cB.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class rB extends Vc {
      process(cB, Bc, nc) {
        for (let Vc = 0; Vc < this.children.length; Vc++) {
          const Ic = this.children[Vc];
          if (Ic.isValid(cB)) return Ic.process(cB, Bc, nc)
        }
        return ""
      }
    }
    class uc extends Vc {
      isValid(cB) {
        return this.testExpression.isTrue(cB)
      }
    }
    class sc {
      isTrue(cB) {
        return !0
      }
      static postfixToInfix(cB) {
        const Bc = [];
        for (const nc of cB)
          if (void 0 === sc._OperatorPriority[nc]) Bc.push(nc);
          else {
            const cB = Bc[Bc.length - 1],
              Vc = Bc[Bc.length - 2];
            Bc.length -= 2, Bc.push(`(${Vc}${nc}${cB})`)
          } return Bc[Bc.length - 1]
      }
      static infixToPostfix(cB) {
        const Bc = sc._InfixToPostfixCache.get(cB);
        if (Bc) return Bc.accessTime = Date.now(), Bc.result;
        if (!cB.includes("&&") && !cB.includes("||") && !cB.includes(")") && !cB.includes("(")) return [cB];
        const nc = [];
        let Vc = -1;
        const Ic = () => {
            qB = qB.trim(), "" !== qB && (nc.push(qB), qB = "")
          },
          rB = cB => {
            Vc < sc._Stack.length - 1 && (sc._Stack[++Vc] = cB)
          },
          uc = () => sc._Stack[Vc],
          Mc = () => -1 === Vc ? "!!INVALID EXPRESSION!!" : sc._Stack[Vc--];
        let Pc = 0,
          qB = "";
        for (; Pc < cB.length;) {
          const Bc = cB.charAt(Pc),
            Oc = Pc < cB.length - 1 ? cB.substring(Pc, 2 + Pc) : "";
          if ("(" === Bc) qB = "", rB(Bc);
          else if (")" === Bc) {
            for (Ic(); - 1 !== Vc && "(" !== uc();) nc.push(Mc());
            Mc()
          } else if (sc._OperatorPriority[Oc] > 1) {
            for (Ic(); - 1 !== Vc && sc._OperatorPriority[uc()] >= sc._OperatorPriority[Oc];) nc.push(Mc());
            rB(Oc), Pc++
          } else qB += Bc;
          Pc++
        }
        for (Ic(); - 1 !== Vc;) "(" === uc() ? Mc() : nc.push(Mc());
        return sc._InfixToPostfixCache.size >= sc.InfixToPostfixCacheLimitSize && sc.ClearCache(), sc._InfixToPostfixCache.set(cB, {
          result: nc,
          accessTime: Date.now()
        }), nc
      }
      static ClearCache() {
        const cB = Array.from(sc._InfixToPostfixCache.entries()).sort(((cB, Bc) => cB[1].accessTime - Bc[1].accessTime));
        for (let Bc = 0; Bc < sc.InfixToPostfixCacheCleanupSize; Bc++) sc._InfixToPostfixCache.delete(cB[Bc][0])
      }
    }
    sc.InfixToPostfixCacheLimitSize = 5e4, sc.InfixToPostfixCacheCleanupSize = 25e3, sc._InfixToPostfixCache = new Map, sc._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, sc._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Mc extends sc {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = cB, this.not = Bc
      }
      isTrue(cB) {
        let Bc = void 0 !== cB[this.define];
        return this.not && (Bc = !Bc), Bc
      }
    }
    class Pc extends sc {
      isTrue(cB) {
        return this.leftOperand.isTrue(cB) || this.rightOperand.isTrue(cB)
      }
    }
    class qB extends sc {
      isTrue(cB) {
        return this.leftOperand.isTrue(cB) && this.rightOperand.isTrue(cB)
      }
    }
    class Oc extends sc {
      constructor(cB, Bc, nc) {
        super(), this.define = cB, this.operand = Bc, this.testValue = nc
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(cB) {
        let Bc = !1;
        const nc = parseInt(void 0 != cB[this.define] ? cB[this.define] : this.define),
          Vc = parseInt(void 0 != cB[this.testValue] ? cB[this.testValue] : this.testValue);
        if (isNaN(nc) || isNaN(Vc)) return !1;
        switch (this.operand) {
          case ">":
            Bc = nc > Vc;
            break;
          case "<":
            Bc = nc < Vc;
            break;
          case "<=":
            Bc = nc <= Vc;
            break;
          case ">=":
            Bc = nc >= Vc;
            break;
          case "==":
            Bc = nc === Vc;
            break;
          case "!=":
            Bc = nc !== Vc
        }
        return Bc
      }
    }
    var Tc = nc(37953),
      fc = nc(37945);
    const mB = /defined\s*?\((.+?)\)/g,
      ec = /defined\s*?\[(.+?)\]/g,
      tB = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      Sc = /__decl__/,
      yB = /light\{X\}.(\w*)/g,
      zB = /\{X\}/g,
      pc = [],
      hc = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function aB(cB) {
      cB.processor && cB.processor.initializeShaders && cB.processor.initializeShaders(cB.processingContext)
    }

    function lc(cB, Bc, nc, Vc) {
      Bc.processor?.preProcessShaderCode && (cB = Bc.processor.preProcessShaderCode(cB, Bc.isFragment)), Cc(cB, Bc, (cB => {
        Bc.processCodeAfterIncludes && (cB = Bc.processCodeAfterIncludes(Bc.isFragment ? "fragment" : "vertex", cB, Bc.defines));
        const Ic = function(cB, Bc, nc) {
          let Vc = function(cB, Bc) {
            if (Bc.processor?.noPrecision) return cB;
            const nc = Bc.shouldUseHighPrecisionShader; - 1 === cB.indexOf("precision highp float") ? cB = nc ? "precision highp float;\n" + cB : "precision mediump float;\n" + cB : nc || (cB = cB.replace("precision highp float", "precision mediump float"));
            return cB
          }(cB, Bc);
          if (!Bc.processor) return Vc;
          if (0 === Bc.processor.shaderLanguage && -1 !== Vc.indexOf("#version 3") && (Vc = Vc.replace("#version 300 es", ""), !Bc.processor.parseGLES3)) return Vc;
          const Ic = Bc.defines,
            rB = Qc(Bc, nc);
          Bc.processor.preProcessor && (Vc = Bc.processor.preProcessor(Vc, Ic, rB, Bc.isFragment, Bc.processingContext));
          const uc = {};
          Vc = Zc(Vc, rB, Bc, uc), Bc.processor.postProcessor && (Vc = Bc.processor.postProcessor(Vc, Ic, Bc.isFragment, Bc.processingContext, nc ? {
            drawBuffersExtensionDisabled: !nc.getCaps().drawBuffersExtension
          } : {}, rB, uc));
          nc?._features.needShaderCodeInlining && (Vc = nc.inlineShaderCode(Vc));
          return Vc
        }(cB, Bc, Vc);
        nc(Ic, cB)
      }))
    }

    function Yc(cB, Bc, nc) {
      return nc.processor && nc.processor.finalizeShaders ? nc.processor.finalizeShaders(cB, Bc, nc.processingContext) : {
        vertexCode: cB,
        fragmentCode: Bc
      }
    }

    function Lc(cB) {
      const Bc = /defined\((.+)\)/.exec(cB);
      if (Bc && Bc.length) return new Mc(Bc[1].trim(), "!" === cB[0]);
      const nc = ["==", "!=", ">=", "<=", "<", ">"];
      let Vc = "",
        Ic = 0;
      for (Vc of nc)
        if (Ic = cB.indexOf(Vc), Ic > -1) break;
      if (-1 === Ic) return new Mc(cB);
      const rB = cB.substring(0, Ic).trim(),
        uc = cB.substring(Ic + Vc.length).trim();
      return new Oc(rB, Vc, uc)
    }

    function gB(cB, Bc) {
      const nc = new uc,
        Vc = cB.substring(0, Bc);
      let Ic = cB.substring(Bc);
      return Ic = Ic.substring(0, (Ic.indexOf("//") + 1 || Ic.length + 1) - 1).trim(), nc.testExpression = "#ifdef" === Vc ? new Mc(Ic) : "#ifndef" === Vc ? new Mc(Ic, !0) : function(cB) {
        cB = cB.replace(mB, "defined[$1]");
        const Bc = sc.infixToPostfix(cB),
          nc = [];
        for (const Ic of Bc)
          if ("||" !== Ic && "&&" !== Ic) nc.push(Ic);
          else if (nc.length >= 2) {
          let cB = nc[nc.length - 1],
            Bc = nc[nc.length - 2];
          nc.length -= 2;
          const Vc = "&&" == Ic ? new qB : new Pc;
          "string" === typeof cB && (cB = cB.replace(ec, "defined($1)")), "string" === typeof Bc && (Bc = Bc.replace(ec, "defined($1)")), Vc.leftOperand = "string" === typeof Bc ? Lc(Bc) : Bc, Vc.rightOperand = "string" === typeof cB ? Lc(cB) : cB, nc.push(Vc)
        }
        let Vc = nc[nc.length - 1];
        return "string" === typeof Vc && (Vc = Vc.replace(ec, "defined($1)")), "string" === typeof Vc ? Lc(Vc) : Vc
      }(Ic), nc
    }

    function Uc(cB, Bc, nc, Ic) {
      let rB;
      for (; bB(cB, nc, Ic);) {
        rB = cB.currentLine;
        const uc = rB.substring(0, 5).toLowerCase();
        if ("#else" === uc) {
          const nc = new Vc;
          return Bc.children.push(nc), void bB(cB, nc, Ic)
        }
        if ("#elif" === uc) {
          const cB = gB(rB, 5);
          Bc.children.push(cB), nc = cB
        }
      }
    }

    function bB(cB, Bc, nc) {
      for (; cB.canRead;) {
        cB.lineIndex++;
        const Ic = cB.currentLine;
        if (Ic.indexOf("#") >= 0) {
          const Vc = hc.exec(Ic);
          if (Vc && Vc.length) {
            switch (Vc[0]) {
              case "#ifdef": {
                const Vc = new rB;
                Bc.children.push(Vc);
                const uc = gB(Ic, 6);
                Vc.children.push(uc), Uc(cB, Vc, uc, nc);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Vc = new rB;
                Bc.children.push(Vc);
                const uc = gB(Ic, 7);
                Vc.children.push(uc), Uc(cB, Vc, uc, nc);
                break
              }
              case "#if": {
                const Vc = new rB,
                  uc = gB(Ic, 3);
                Bc.children.push(Vc), Vc.children.push(uc), Uc(cB, Vc, uc, nc);
                break
              }
            }
            continue
          }
        }
        const uc = new Vc;
        if (uc.line = Ic, Bc.children.push(uc), "#" === Ic[0] && "d" === Ic[1]) {
          const cB = Ic.replace(";", "").split(" ");
          uc.additionalDefineKey = cB[1], 3 === cB.length && (uc.additionalDefineValue = cB[2])
        }
      }
      return !1
    }

    function Zc(cB, Bc, nc, rB) {
      const uc = new Vc,
        sc = new Ic;
      return sc.lineIndex = -1, sc.lines = cB.split("\n"), bB(sc, uc, rB), uc.process(Bc, nc, rB)
    }

    function Qc(cB, Bc) {
      const nc = cB.defines,
        Vc = {};
      for (const Ic of nc) {
        const cB = Ic.replace("#define", "").replace(";", "").trim().split(" ");
        Vc[cB[0]] = cB.length > 1 ? cB[1] : ""
      }
      return 0 === cB.processor?.shaderLanguage && (Vc.GL_ES = "true"), Vc.__VERSION__ = cB.version, Vc[cB.platformName] = "true", (0, fc.k)(Vc, Bc?.isNDCHalfZRange, Bc?.HPc, Bc?.useExactSrgbConversions), Vc
    }

    function Cc(cB, Bc, nc) {
      let Vc;
      for (pc.length = 0; null !== (Vc = tB.exec(cB));) pc.push(Vc);
      let Ic = [cB],
        rB = !1;
      for (const sc of pc) {
        let cB = sc[1];
        if (-1 !== cB.indexOf("__decl__") && (cB = cB.replace(Sc, ""), Bc.supportsUniformBuffers && (cB = cB.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), cB += "Declaration"), !Bc.includesShadersStore[cB]) {
          const Vc = Bc.shadersRepository + "ShadersInclude/" + cB + ".fx";
          return void vB.loadFile(Vc, (Vc => {
            Bc.includesShadersStore[cB] = Vc, Cc(Ic.join(""), Bc, nc)
          }))
        } {
          let nc = Bc.includesShadersStore[cB];
          if (sc[2]) {
            const cB = sc[3].split(",");
            for (let Bc = 0; Bc < cB.length; Bc += 2) {
              const Vc = new RegExp(cB[Bc], "g"),
                Ic = cB[Bc + 1];
              nc = nc.replace(Vc, Ic)
            }
          }
          if (sc[4]) {
            const cB = sc[5];
            if (-1 !== cB.indexOf("..")) {
              const Vc = cB.split(".."),
                Ic = parseInt(Vc[0]);
              let rB = parseInt(Vc[1]),
                uc = nc.slice(0);
              nc = "", isNaN(rB) && (rB = Bc.indexParameters[Vc[1]]);
              for (let cB = Ic; cB < rB; cB++) Bc.supportsUniformBuffers || (uc = uc.replace(yB, ((cB, Bc) => Bc + "{X}"))), nc += uc.replace(zB, cB.toString()) + "\n"
            } else Bc.supportsUniformBuffers || (nc = nc.replace(yB, ((cB, Bc) => Bc + "{X}"))), nc = nc.replace(zB, cB)
          }
          const Vc = [];
          for (const cB of Ic) {
            const Bc = cB.split(sc[0]);
            for (let cB = 0; cB < Bc.length - 1; cB++) Vc.push(Bc[cB]), Vc.push(nc);
            Vc.push(Bc[Bc.length - 1])
          }
          Ic = Vc, rB = rB || nc.indexOf("#include<") >= 0 || nc.indexOf("#include <") >= 0
        }
      }
      pc.length = 0;
      const uc = Ic.join("");
      rB ? Cc(uc.toString(), Bc, nc) : nc(uc)
    }
    const vB = {
      loadFile: (cB, Bc, nc, Vc, Ic, rB) => {
        throw (0, Tc.k)("FileTools")
      }
    }
  },
  37945: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      g: () => rB,
      k: () => sc,
      o: () => uc,
      q: () => Mc
    });
    var Vc = nc(37953);
    const Ic = {};

    function rB(cB, Bc) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Bc ? Bc + "\n" : "") + cB
    }

    function uc(cB, Bc, nc, rB, uc, sc, Mc) {
      const Pc = Mc || Ic.loadFile;
      if (!Pc) throw (0, Vc.k)("FileTools");
      return Pc(cB, Bc, nc, rB, uc, sc)
    }

    function sc(cB, Bc, nc, Vc) {
      if (cB) return Bc ? cB.IS_NDC_HALF_ZRANGE = "" : delete cB.IS_NDC_HALF_ZRANGE, nc ? cB.USE_REVERSE_DEPTHBUFFER = "" : delete cB.USE_REVERSE_DEPTHBUFFER, void(Vc ? cB.USE_EXACT_SRGB_CONVERSIONS = "" : delete cB.USE_EXACT_SRGB_CONVERSIONS);
      {
        let cB = "";
        return Bc && (cB += "#define IS_NDC_HALF_ZRANGE"), nc && (cB && (cB += "\n"), cB += "#define USE_REVERSE_DEPTHBUFFER"), Vc && (cB && (cB += "\n"), cB += "#define USE_EXACT_SRGB_CONVERSIONS"), cB
      }
    }

    function Mc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Vc = arguments.length > 3 ? arguments[3] : void 0;
      switch (cB) {
        case 3: {
          const cB = new Int8Array(Bc);
          return Vc && cB.set(new Int8Array(Vc)), cB
        }
        case 0: {
          const cB = new Uint8Array(Bc);
          return Vc && cB.set(new Uint8Array(Vc)), cB
        }
        case 4: {
          const cB = "number" !== typeof Bc ? new Int16Array(Bc) : new Int16Array(nc ? Bc / 2 : Bc);
          return Vc && cB.set(new Int16Array(Vc)), cB
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const cB = "number" !== typeof Bc ? new Uint16Array(Bc) : new Uint16Array(nc ? Bc / 2 : Bc);
          return Vc && cB.set(new Uint16Array(Vc)), cB
        }
        case 6: {
          const cB = "number" !== typeof Bc ? new Int32Array(Bc) : new Int32Array(nc ? Bc / 4 : Bc);
          return Vc && cB.set(new Int32Array(Vc)), cB
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const cB = "number" !== typeof Bc ? new Uint32Array(Bc) : new Uint32Array(nc ? Bc / 4 : Bc);
          return Vc && cB.set(new Uint32Array(Vc)), cB
        }
        case 1: {
          const cB = "number" !== typeof Bc ? new Float32Array(Bc) : new Float32Array(nc ? Bc / 4 : Bc);
          return Vc && cB.set(new Float32Array(Vc)), cB
        }
      }
      const Ic = new Uint8Array(Bc);
      return Vc && Ic.set(new Uint8Array(Vc)), Ic
    }
  },
  37953: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Pc,
      e: () => qB,
      h: () => Mc,
      k: () => Ic
    });
    const Vc = {};

    function Ic(cB) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Vc[cB]) return Vc[cB] = !0, `${cB} needs to be imported before as it contains a side-effect required by your code.`
    }
    const rB = {};
    let uc = !1,
      sc = 0;

    function Mc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Vc = function() {
        if ((nc || uc) && 0 === sc) {
          const nc = `${cB}.${Bc}`;
          rB[nc] || (rB[nc] = !0, console.warn(`[Babylon.js] ${nc}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Vc.__isSideEffectStub = !0, Vc
    }

    function Pc(cB) {
      return !!cB && !cB.__isSideEffectStub
    }

    function qB(cB, Bc) {
      return {
        get() {},
        set(cB) {
          Object.defineProperty(this, Bc, {
            value: cB,
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
  37937: (cB, Bc, nc) => {
    function Vc() {
      return "undefined" !== typeof window
    }

    function Ic() {
      return "undefined" !== typeof navigator
    }

    function rB() {
      return "undefined" !== typeof document
    }

    function uc(cB) {
      let Bc = "",
        nc = cB.firstChild;
      for (; nc;) 3 === nc.nodeType && (Bc += nc.textContent), nc = nc.nextSibling;
      return Bc
    }
    nc.d(Bc, {
      d: () => uc,
      f: () => rB,
      h: () => Ic,
      k: () => Vc
    })
  },
  38108: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      e: () => Ic,
      i: () => rB
    });
    class Vc extends Error {}
    Vc._setPrototypeOf = Object.setPrototypeOf || ((cB, Bc) => (cB.__proto__ = Bc, cB));
    const Ic = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class rB extends Vc {
      constructor(cB, Bc, nc) {
        super(cB), this.errorCode = Bc, this.innerError = nc, this.name = "RuntimeError", Vc._setPrototypeOf(this, rB.prototype)
      }
    }
  },
  38090: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Qc,
      f: () => zB,
      h: () => gB,
      l: () => bB,
      n: () => Yc,
      p: () => aB,
      q: () => lc,
      t: () => Ec,
      w: () => Lc,
      y: () => pc
    });
    var Vc = nc(38099),
      Ic = nc(37937),
      rB = nc(35783);
    class uc {}
    uc.FilesToLoad = {};
    var sc = nc(38108),
      Mc = nc(38111),
      Pc = nc(35780),
      qB = nc(37945),
      Oc = nc(37959),
      Tc = nc(37191),
      fc = nc(37963),
      mB = nc(38116);
    const ec = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class tB extends sc.i {
      constructor(cB, Bc) {
        super(cB, sc.e.LoadFileError), this.name = "LoadFileError", sc.d._setPrototypeOf(this, tB.prototype), Bc instanceof Vc.c ? this.request = Bc : this.file = Bc
      }
    }
    class Sc extends sc.i {
      constructor(cB, Bc) {
        super(cB, sc.e.RequestFileError), this.request = Bc, this.name = "RequestFileError", sc.d._setPrototypeOf(this, Sc.prototype)
      }
    }
    class yB extends sc.i {
      constructor(cB, Bc) {
        super(cB, sc.e.ReadFileError), this.file = Bc, this.name = "ReadFileError", sc.d._setPrototypeOf(this, yB.prototype)
      }
    }
    const zB = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (nc, Vc, Ic) => 0 !== Vc.status || Ic >= cB || -1 !== nc.indexOf("file:") ? -1 : Math.pow(2, Ic) * Bc
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: cB => cB,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: cB => cB,
        CleanUrl: cB => cB = cB.replace(/#/gm, "%23")
      },
      pc = (cB, Bc) => {
        if ((!cB || 0 !== cB.indexOf("data:")) && zB.CorsBehavior)
          if ("string" === typeof zB.CorsBehavior || zB.CorsBehavior instanceof String) Bc.crossOrigin = zB.CorsBehavior;
          else {
            const nc = zB.CorsBehavior(cB);
            nc && (Bc.crossOrigin = nc)
          }
      },
      hc = {
        getRequiredSize: null
      },
      aB = function(cB, Bc, nc, Ic) {
        let rB, sc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          qB = arguments.length > 5 ? arguments[5] : void 0,
          Oc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Pc.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Oc?._features.forceBitmapOverHTMLImageElement) return nc("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Oc?._features.forceBitmapOverHTMLImageElement && "string" !== typeof cB && "undefined" !== typeof Blob) {
          let Vc;
          if (cB instanceof Blob) Vc = cB;
          else {
            const Bc = cB instanceof ArrayBuffer ? cB : (0, mB.k)(cB);
            Vc = new Blob([Bc], {
              type: sc
            })
          }
          return Oc.createImageBitmap(Vc, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...qB
          }).then(Bc).catch((Bc => {
            nc && nc("Error while trying to load image: " + cB, Bc)
          })), null
        }
        let Tc = !1;
        if (cB instanceof ArrayBuffer || ArrayBuffer.isView(cB))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let Bc;
            Bc = cB instanceof ArrayBuffer ? cB : (0, mB.k)(cB), rB = URL.createObjectURL(new Blob([Bc], {
              type: sc
            })), Tc = !0
          } else rB = `data:${sc};base64,` + (0, Mc.e)(cB);
        else cB instanceof Blob ? (rB = URL.createObjectURL(cB), Tc = !0) : (rB = zB.CleanUrl(cB), rB = zB.PreprocessUrl(rB));
        const fc = Bc => {
          if (nc) {
            const Vc = rB || cB.toString();
            nc(`Error while trying to load image: ${0===Vc.indexOf("http")||Vc.length<=128?Vc:Vc.slice(0,128)+"..."}`, Bc)
          }
        };
        if (Oc?._features.forceBitmapOverHTMLImageElement) return Yc(rB, (Vc => {
          Oc.createImageBitmap(new Blob([Vc], {
            type: sc
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...qB
          }).then((cB => {
            Bc(cB), Tc && URL.revokeObjectURL(rB)
          })).catch((Bc => {
            nc && nc("Error while trying to load image: " + cB, Bc)
          }))
        }), void 0, Ic || void 0, !0, ((cB, Bc) => {
          fc(Bc)
        })), null;
        const ec = new Image;
        if (hc.getRequiredSize) {
          const Bc = hc.getRequiredSize(cB);
          Bc.width && (ec.width = Bc.width), Bc.height && (ec.height = Bc.height)
        }
        pc(rB, ec);
        const tB = [],
          Sc = () => {
            for (const cB of tB) cB.target.removeEventListener(cB.name, cB.handler);
            tB.length = 0
          };
        tB.push({
          target: ec,
          name: "load",
          handler: () => {
            Sc(), Bc(ec), Tc && ec.src && URL.revokeObjectURL(ec.src)
          }
        }), tB.push({
          target: ec,
          name: "error",
          handler: cB => {
            Sc(), fc(cB), Tc && ec.src && URL.revokeObjectURL(ec.src)
          }
        }), tB.push({
          target: document,
          name: "securitypolicyviolation",
          handler: cB => {
            if (cB.blockedURI !== ec.src || "PV" === cB.disposition) return;
            Sc();
            const Bc = new Error(`CSP violation of policy ${cB.effectiveDirective} ${cB.blockedURI}. Current policy is ${cB.originalPolicy}`);
            Pc.d.UseFallbackTexture = !1, fc(Bc), Tc && ec.src && URL.revokeObjectURL(ec.src), ec.src = ""
          }
        }), (() => {
          for (const cB of tB) cB.target.addEventListener(cB.name, cB.handler)
        })();
        const yB = "blob:" === rB.substring(0, 5),
          aB = "data:" === rB.substring(0, 5),
          lc = () => {
            yB || aB || !Vc.c.IsCustomRequestAvailable ? ec.src = rB : Yc(rB, ((cB, Bc, nc) => {
              const Vc = new Blob([cB], {
                  type: !sc && nc ? nc : sc
                }),
                Ic = URL.createObjectURL(Vc);
              Tc = !0, ec.src = Ic
            }), void 0, Ic || void 0, !0, ((cB, Bc) => {
              fc(Bc)
            }))
          },
          Lc = () => {
            Ic && Ic.loadImage(rB, ec)
          };
        if (!yB && !aB && Ic && Ic.enableTexturesOffline) Ic.open(Lc, lc);
        else {
          if (-1 !== rB.indexOf("file:")) {
            const cB = decodeURIComponent(rB.substring(5).toLowerCase());
            if (uc.FilesToLoad[cB] && "undefined" !== typeof URL) {
              try {
                let Bc;
                try {
                  Bc = URL.createObjectURL(uc.FilesToLoad[cB])
                } catch (gB) {
                  Bc = URL.createObjectURL(uc.FilesToLoad[cB])
                }
                ec.src = Bc, Tc = !0
              } catch (Uc) {
                ec.src = ""
              }
              return ec
            }
          }
          lc()
        }
        return ec
      },
      lc = (cB, Bc, nc, Vc, Ic) => {
        const uc = new FileReader,
          sc = {
            onCompleteObservable: new rB.c,
            abort: () => uc.abort()
          };
        return uc.onloadend = () => sc.onCompleteObservable.notifyObservers(sc), Ic && (uc.onerror = () => {
          Ic(new yB(`Unable to read ${cB.name}`, cB))
        }), uc.onload = cB => {
          Bc(cB.target.result)
        }, nc && (uc.onprogress = nc), Vc ? uc.readAsArrayBuffer(cB) : uc.readAsText(cB), sc
      },
      Yc = (cB, Bc, nc, Vc, Ic, Mc, Pc) => {
        if (cB.name) return lc(cB, Bc, nc, Ic, Mc ? cB => {
          Mc(void 0, cB)
        } : void 0);
        const qB = cB;
        if (-1 !== qB.indexOf("file:")) {
          let cB = decodeURIComponent(qB.substring(5).toLowerCase());
          0 === cB.indexOf("./") && (cB = cB.substring(2));
          const Vc = uc.FilesToLoad[cB];
          if (Vc) return lc(Vc, Bc, nc, Ic, Mc ? cB => Mc(void 0, new tB(cB.message, cB.file)) : void 0)
        }
        const {
          match: Oc,
          type: mB
        } = Zc(qB);
        if (Oc) {
          const cB = {
            onCompleteObservable: new rB.c,
            abort: () => () => {}
          };
          try {
            const cB = Ic ? Qc(qB) : Cc(qB);
            Bc(cB, void 0, mB)
          } catch (sc) {
            Mc ? Mc(void 0, sc) : Tc.c.Error(sc.message || "Failed to parse the Data URL")
          }
          return fc.e.SetImmediate((() => {
            cB.onCompleteObservable.notifyObservers(cB)
          })), cB
        }
        return Lc(qB, ((cB, nc) => {
          Bc(cB, nc?.responseURL, nc?.getResponseHeader("content-type"))
        }), nc, Vc, Ic, Mc ? cB => {
          Mc(cB.request, new tB(cB.message, cB.request))
        } : void 0, Pc)
      },
      Lc = (cB, Bc, nc, uc, sc, Mc, qB) => {
        null !== uc && (uc ?? (uc = Pc.d.LastCreatedScene?.offlineProvider)), cB = zB.CleanUrl(cB), cB = zB.PreprocessUrl(cB);
        const Oc = zB.BaseUrl + cB;
        let fc = !1;
        const mB = {
            onCompleteObservable: new rB.c,
            abort: () => fc = !0
          },
          ec = () => {
            let cB, rB = new Vc.c,
              uc = null;
            const Pc = () => {
              rB && (nc && rB.removeEventListener("progress", nc), cB && rB.removeEventListener("readystatechange", cB), rB.removeEventListener("loadend", ec))
            };
            let ec = () => {
              Pc(), mB.onCompleteObservable.notifyObservers(mB), mB.onCompleteObservable.clear(), nc = void 0, cB = null, ec = null, Mc = void 0, qB = void 0, Bc = void 0
            };
            mB.abort = () => {
              fc = !0, ec && ec(), rB && rB.readyState !== (XMLHttpRequest.DONE || 4) && rB.abort(), null !== uc && (clearTimeout(uc), uc = null), rB = null
            };
            const tB = cB => {
                const Bc = cB.message || "Unknown error";
                Mc && rB ? Mc(new Sc(Bc, rB)) : Tc.c.Error(Bc)
              },
              yB = Tc => {
                if (rB) {
                  if (rB.open("GET", Oc), qB) try {
                    qB(rB)
                  } catch (mB) {
                    return void tB(mB)
                  }
                  sc && (rB.responseType = "arraybuffer"), nc && rB.addEventListener("progress", nc), ec && rB.addEventListener("loadend", ec), cB = () => {
                    if (!fc && rB && rB.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (cB && rB.removeEventListener("readystatechange", cB), rB.status >= 200 && rB.status < 300 || 0 === rB.status && (!(0, Ic.k)() || Uc())) {
                        const cB = sc ? rB.response : rB.responseText;
                        if (null !== cB) {
                          try {
                            Bc && Bc(cB, rB)
                          } catch (mB) {
                            tB(mB)
                          }
                          return
                        }
                      }
                      const nc = zB.DefaultRetryStrategy;
                      if (nc) {
                        const cB = nc(Oc, rB, Tc);
                        if (-1 !== cB) return Pc(), rB = new Vc.c, void(uc = setTimeout((() => yB(Tc + 1)), cB))
                      }
                      const qB = new Sc("Error status: " + rB.status + " " + rB.statusText + " - Unable to load " + Oc, rB);
                      Mc && Mc(qB)
                    }
                  }, rB.addEventListener("readystatechange", cB), rB.send()
                }
              };
            yB(0)
          };
        if (uc && uc.enableSceneOffline && !cB.startsWith("blob:")) {
          const Vc = cB => {
              cB && cB.status > 400 ? Mc && Mc(cB) : ec()
            },
            Ic = () => {
              uc && uc.loadFile(zB.BaseUrl + cB, (cB => {
                !fc && Bc && Bc(cB), mB.onCompleteObservable.notifyObservers(mB)
              }), nc ? cB => {
                !fc && nc && nc(cB)
              } : void 0, Vc, sc)
            };
          uc.open(Ic, Vc)
        } else ec();
        return mB
      },
      gB = cB => {
        const {
          match: Bc,
          type: nc
        } = Zc(cB);
        if (Bc) return nc || void 0;
        const Vc = cB.lastIndexOf(".");
        switch (cB.substring(Vc + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "vqc":
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
      Uc = () => "undefined" !== typeof location && "file:" === location.protocol,
      bB = cB => ec.test(cB),
      Zc = cB => {
        const Bc = ec.exec(cB);
        if (null === Bc || 0 === Bc.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: Bc[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Qc(cB) {
      return (0, Mc.c)(cB.split(",")[1])
    }
    const Cc = cB => (0, Mc.d)(cB.split(",")[1]);
    let vB;
    const Dc = (cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) => {
      vB = {
        DecodeBase64UrlToBinary: cB,
        DecodeBase64UrlToString: Bc,
        DefaultRetryStrategy: nc.DefaultRetryStrategy,
        BaseUrl: nc.BaseUrl,
        CorsBehavior: nc.CorsBehavior,
        PreprocessUrl: nc.PreprocessUrl,
        IsBase64DataUrl: Vc,
        IsFileURL: Ic,
        LoadFile: rB,
        LoadImage: uc,
        ReadFile: sc,
        RequestFile: Mc,
        SetCorsBehavior: Pc
      }, Object.defineProperty(vB, "DefaultRetryStrategy", {
        get: function() {
          return nc.DefaultRetryStrategy
        },
        set: function(cB) {
          nc.DefaultRetryStrategy = cB
        }
      }), Object.defineProperty(vB, "BaseUrl", {
        get: function() {
          return nc.BaseUrl
        },
        set: function(cB) {
          nc.BaseUrl = cB
        }
      }), Object.defineProperty(vB, "PreprocessUrl", {
        get: function() {
          return nc.PreprocessUrl
        },
        set: function(cB) {
          nc.PreprocessUrl = cB
        }
      }), Object.defineProperty(vB, "CorsBehavior", {
        get: function() {
          return nc.CorsBehavior
        },
        set: function(cB) {
          nc.CorsBehavior = cB
        }
      })
    };
    let Nc = !1;

    function Ec() {
      Nc || (Nc = !0, Dc(Qc, Cc, zB, bB, Uc, Yc, aB, lc, Lc, pc), qB.c.loadFile = Yc, qB.c.loadImage = aB, Oc.m.loadFile = Yc)
    }
  },
  38118: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc,
      e: () => rB,
      g: () => uc
    });
    let Vc = null;

    function Ic() {
      if (Vc) return Vc;
      const cB = new ArrayBuffer(4),
        Bc = new Float32Array(cB),
        nc = new Uint32Array(cB),
        Ic = new Uint32Array(512),
        rB = new Uint32Array(512);
      for (let Vc = 0; Vc < 256; ++Vc) {
        const cB = Vc - 127;
        cB < -24 ? (Ic[Vc] = 0, Ic[256 | Vc] = 32768, rB[Vc] = 24, rB[256 | Vc] = 24) : cB < -14 ? (Ic[Vc] = 1024 >> -cB - 14, Ic[256 | Vc] = 1024 >> -cB - 14 | 32768, rB[Vc] = -cB - 1, rB[256 | Vc] = -cB - 1) : cB <= 15 ? (Ic[Vc] = cB + 15 << 10, Ic[256 | Vc] = cB + 15 << 10 | 32768, rB[Vc] = 13, rB[256 | Vc] = 13) : cB < 128 ? (Ic[Vc] = 31744, Ic[256 | Vc] = 64512, rB[Vc] = 24, rB[256 | Vc] = 24) : (Ic[Vc] = 31744, Ic[256 | Vc] = 64512, rB[Vc] = 13, rB[256 | Vc] = 13)
      }
      const uc = new Uint32Array(2048),
        sc = new Uint32Array(64),
        Mc = new Uint32Array(64);
      for (let Vc = 1; Vc < 1024; ++Vc) {
        let cB = Vc << 13,
          Bc = 0;
        for (; 0 === (8388608 & cB);) cB <<= 1, Bc -= 8388608;
        cB &= -8388609, Bc += 947912704, uc[Vc] = cB | Bc
      }
      for (let Vc = 1024; Vc < 2048; ++Vc) uc[Vc] = 939524096 + (Vc - 1024 << 13);
      for (let Vc = 1; Vc < 31; ++Vc) sc[Vc] = Vc << 23;
      sc[31] = 1199570944, sc[32] = 2147483648;
      for (let Vc = 33; Vc < 63; ++Vc) sc[Vc] = 2147483648 + (Vc - 32 << 23);
      sc[63] = 3347054592;
      for (let Vc = 1; Vc < 64; ++Vc) 32 !== Vc && (Mc[Vc] = 1024);
      return Vc = {
        floatView: Bc,
        uint32View: nc,
        baseTable: Ic,
        shiftTable: rB,
        mantissaTable: uc,
        exponentTable: sc,
        offsetTable: Mc
      }, Vc
    }
    const rB = 65504;

    function uc(cB) {
      const Bc = Ic();
      Bc.floatView[0] = cB;
      const nc = Bc.uint32View[0],
        Vc = nc >> 23 & 511;
      return Bc.baseTable[Vc] + ((8388607 & nc) >> Bc.shiftTable[Vc])
    }

    function sc(cB) {
      const Bc = Ic();
      return Bc.uint32View[0] = Bc.mantissaTable[Bc.offsetTable[cB >> 10] + (1023 & cB)] + Bc.exponentTable[cB >> 10], Bc.floatView[0]
    }
  },
  38111: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB,
      d: () => Ic,
      e: () => Vc
    });
    const Vc = cB => {
        const Bc = ArrayBuffer.isView(cB) ? new Uint8Array(cB.buffer, cB.byteOffset, cB.byteLength) : new Uint8Array(cB);
        return "function" === typeof Bc.toBase64 ? Bc.toBase64() : function(cB) {
          const Bc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let nc, Vc, Ic, rB, uc, sc, Mc, Pc = "",
            qB = 0;
          for (; qB < cB.length;) nc = cB[qB++], Vc = qB < cB.length ? cB[qB++] : Number.NaN, Ic = qB < cB.length ? cB[qB++] : Number.NaN, rB = nc >> 2, uc = (3 & nc) << 4 | Vc >> 4, sc = (15 & Vc) << 2 | Ic >> 6, Mc = 63 & Ic, isNaN(Vc) ? sc = Mc = 64 : isNaN(Ic) && (Mc = 64), Pc += Bc.charAt(rB) + Bc.charAt(uc) + Bc.charAt(sc) + Bc.charAt(Mc);
          return Pc
        }(Bc)
      },
      Ic = cB => atob(cB),
      rB = cB => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(cB).buffer : function(cB) {
        const Bc = Ic(cB),
          nc = Bc.length,
          Vc = new Uint8Array(new ArrayBuffer(nc));
        for (let Ic = 0; Ic < nc; Ic++) Vc[Ic] = Bc.charCodeAt(Ic);
        return Vc.buffer
      }(cB)
  },
  37963: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      h: () => uc
    });
    let Vc = [];
    class Ic {
      static SetImmediate(cB) {
        0 === Vc.length && setTimeout((() => {
          const cB = Vc;
          Vc = [];
          for (const Bc of cB) Bc()
        }), 1), Vc.push(cB)
      }
    }

    function rB(cB, Bc, nc) {
      try {
        if (cB()) return Bc(), !0
      } catch (Vc) {
        return nc?.(Vc), !0
      }
      return !1
    }
    const uc = function(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        uc = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && rB(cB, Bc, nc)) return null;
      const sc = setInterval((() => {
        rB(cB, Bc, nc) ? clearInterval(sc) : (Ic -= Vc, Ic < 0 && (clearInterval(sc), nc?.(new Error("Operation timed out after maximum retries. " + (uc || "")), !0)))
      }), Vc);
      return () => clearInterval(sc)
    }
  },
  38099: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Vc.CustomRequestHeaders).length > 0 || Vc.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(cB) {
        return cB = (cB = cB.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(cB) {
        return Vc.SkipRequestModificationForBabylonCDN && (cB.includes("preview.babylonjs.com") || cB.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(cB) {
        const Bc = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Vc._ShouldSkipRequestModifications(cB)) return {
          url: cB,
          headers: Bc
        };
        for (const Ic in Vc.CustomRequestHeaders) {
          const cB = Vc.CustomRequestHeaders[Ic];
          cB && (Bc[Ic] = cB)
        }
        const nc = {
          setRequestHeader: (cB, nc) => {
            Bc[cB] = nc
          }
        };
        for (const Ic of Vc.CustomRequestModifiers) {
          if (Vc._ShouldSkipRequestModifications(cB)) break;
          const Bc = Ic(nc, cB);
          "string" === typeof Bc && (cB = Bc)
        }
        return {
          url: cB,
          headers: Bc
        }
      }
      static async FetchAsync(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const nc = Bc.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Ic,
            headers: rB
          } = Vc._CollectCustomizations(Vc._CleanUrl(cB), Bc.headers ?? {});
          return await fetch(Ic, {
            method: nc,
            headers: rB,
            body: Bc.body ?? void 0
          })
        }
        return await new Promise(((Ic, rB) => {
          const uc = new Vc;
          uc.responseType = "arraybuffer", uc.addEventListener("readystatechange", (() => {
            if (4 === uc.readyState)
              if (uc.status >= 200 && uc.status < 300) {
                const cB = "undefined" !== typeof Headers ? new Headers : void 0,
                  Bc = uc.getResponseHeader("Content-Type");
                Bc && cB && cB.set("Content-Type", Bc), "undefined" !== typeof Response ? Ic(new Response(uc.response, {
                  status: uc.status,
                  statusText: uc.statusText,
                  headers: cB
                })) : Ic({
                  ok: !0,
                  status: uc.status,
                  statusText: uc.statusText,
                  headers: {
                    get: cB => uc.getResponseHeader(cB)
                  },
                  arrayBuffer: async () => await Promise.resolve(uc.response)
                })
              } else rB(new Error(`HTTP ${uc.status} loading '${uc.requestURL}': ${uc.statusText}`))
          })), uc.open(nc, cB, Bc.headers), uc.send(Bc.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(cB) {
        this._xhr.onprogress = cB
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
      set responseType(cB) {
        this._xhr.responseType = cB
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(cB) {
        this._xhr.timeout = cB
      }
      addEventListener(cB, Bc, nc) {
        this._xhr.addEventListener(cB, Bc, nc)
      }
      removeEventListener(cB, Bc, nc) {
        this._xhr.removeEventListener(cB, Bc, nc)
      }
      abort() {
        this._xhr.abort()
      }
      send(cB) {
        this._xhr.send(cB)
      }
      open(cB, Bc, nc) {
        const {
          url: Ic,
          headers: rB
        } = Vc._CollectCustomizations(Bc, nc);
        this._requestURL = Vc._CleanUrl(Ic), this._xhr.open(cB, this._requestURL, !0);
        for (const Vc in rB) this._xhr.setRequestHeader(Vc, rB[Vc])
      }
      setRequestHeader(cB, Bc) {
        this._xhr.setRequestHeader(cB, Bc)
      }
      getResponseHeader(cB) {
        return this._xhr.getResponseHeader(cB)
      }
    }
    Vc.CustomRequestHeaders = {}, Vc.CustomRequestModifiers = new Array, Vc.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);