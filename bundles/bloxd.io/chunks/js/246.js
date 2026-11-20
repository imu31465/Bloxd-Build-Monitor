export const id = 246;
export const ids = [246];
export const modules = {
  39533: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      f: () => Hb,
      j: () => Yb,
      l: () => Zb,
      o: () => Sb,
      r: () => Lb,
      s: () => ab
    });
    var Bb = hb(38302),
      Ob = hb(39536);

    function Gb(bb, ub, hb, Bb) {
      switch (ub) {
        case 5120: {
          let ub = bb.getInt8(hb);
          return Bb && (ub = Math.max(ub / 127, -1)), ub
        }
        case 5121: {
          let ub = bb.getUint8(hb);
          return Bb && (ub /= 255), ub
        }
        case 5122: {
          let ub = bb.getInt16(hb, !0);
          return Bb && (ub = Math.max(ub / 32767, -1)), ub
        }
        case 5123: {
          let ub = bb.getUint16(hb, !0);
          return Bb && (ub /= 65535), ub
        }
        case 5131:
          return (0, Ob.b)(bb.getUint16(hb, !0));
        case 5124:
          return bb.getInt32(hb, !0);
        case 5125:
          return bb.getUint32(hb, !0);
        case 5126:
          return bb.getFloat32(hb, !0);
        default:
          throw new Error(`Invalid component type ${ub}`)
      }
    }

    function Ub(bb, ub, hb, Bb, Gb) {
      switch (ub) {
        case 5120:
          Bb && (Gb = Math.round(127 * Gb)), bb.setInt8(hb, Gb);
          break;
        case 5121:
          Bb && (Gb = Math.round(255 * Gb)), bb.setUint8(hb, Gb);
          break;
        case 5122:
          Bb && (Gb = Math.round(32767 * Gb)), bb.setInt16(hb, Gb, !0);
          break;
        case 5123:
          Bb && (Gb = Math.round(65535 * Gb)), bb.setUint16(hb, Gb, !0);
          break;
        case 5131:
          bb.setUint16(hb, (0, Ob.i)(Gb), !0);
          break;
        case 5124:
          bb.setInt32(hb, Gb, !0);
          break;
        case 5125:
          bb.setUint32(hb, Gb, !0);
          break;
        case 5126:
          bb.setFloat32(hb, Gb, !0);
          break;
        default:
          throw new Error(`Invalid component type ${ub}`)
      }
    }

    function Lb(bb) {
      switch (bb) {
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
          throw new Error(`Invalid type '${bb}'`)
      }
    }

    function Yb(bb, ub, hb, Bb, Ob, Yb, Sb, ab) {
      const Hb = new Array(Bb),
        wb = new Array(Bb);
      if (bb instanceof Array) {
        let Ob = ub / 4;
        const Gb = hb / 4;
        for (let ub = 0; ub < Yb; ub += Bb) {
          for (let ub = 0; ub < Bb; ub++) Hb[ub] = wb[ub] = bb[Ob + ub];
          ab(wb, ub);
          for (let ub = 0; ub < Bb; ub++) Hb[ub] !== wb[ub] && (bb[Ob + ub] = wb[ub]);
          Ob += Gb
        }
      } else {
        const Zb = ArrayBuffer.isView(bb) ? new DataView(bb.buffer, bb.byteOffset, bb.byteLength) : new DataView(bb),
          Xb = Lb(Ob);
        for (let bb = 0; bb < Yb; bb += Bb) {
          for (let bb = 0, hb = ub; bb < Bb; bb++, hb += Xb) Hb[bb] = wb[bb] = Gb(Zb, Ob, hb, Sb);
          ab(wb, bb);
          for (let bb = 0, hb = ub; bb < Bb; bb++, hb += Xb) Hb[bb] !== wb[bb] && Ub(Zb, Ob, hb, Sb, wb[bb]);
          ub += hb
        }
      }
    }

    function Sb(bb, ub, hb, Ob, Gb, Ub, Sb, ab) {
      const Hb = ub * Lb(hb),
        wb = Sb * ub;
      if (5126 !== hb || Gb !== Hb) {
        const Bb = new Float32Array(wb);
        return Yb(bb, Ob, Gb, ub, hb, wb, Ub, ((bb, hb) => {
          for (let Ob = 0; Ob < ub; Ob++) Bb[hb + Ob] = bb[Ob]
        })), Bb
      }
      if (!(bb instanceof Array || bb instanceof Float32Array) || 0 !== Ob || bb.length !== wb) {
        if (bb instanceof Array) {
          const ub = Ob / 4;
          return bb.slice(ub, ub + wb)
        }
        if (ArrayBuffer.isView(bb)) {
          const ub = bb.byteOffset + Ob;
          return 0 !== (3 & ub) && (Bb.b.Warn("Float array must be aligned to 4-bytes border"), ab = !0), ab ? new Float32Array(bb.buffer.slice(ub, ub + wb * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(bb.buffer, ub, wb)
        }
        return new Float32Array(bb, Ob, wb)
      }
      return ab ? bb.slice() : bb
    }

    function ab(bb, ub, hb, Ob, Gb, Ub, Sb) {
      const ab = Lb(hb),
        Hb = function(bb) {
          switch (bb) {
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
              throw new Error(`Invalid component type '${bb}'`)
          }
        }(hb),
        wb = Ub * ub;
      if (Array.isArray(bb)) {
        if (0 !== (3 & Ob) || 0 !== (3 & Gb)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Bb = Ob / 4,
          Lb = Gb / 4;
        if (Bb + (Ub - 1) * Lb + ub > bb.length) throw new Error("Last accessed index is out of bounds.");
        if (Lb < ub) throw new Error("Data stride cannot be smaller than the component size.");
        if (Lb !== ub) {
          const Bb = new Hb(wb);
          return Yb(bb, Ob, Gb, ub, hb, wb, !1, ((bb, hb) => {
            for (let Ob = 0; Ob < ub; Ob++) Bb[hb + Ob] = bb[Ob]
          })), Bb
        }
        return new Hb(bb.slice(Bb, Bb + wb))
      }
      let Zb, Xb = Ob;
      ArrayBuffer.isView(bb) ? (Zb = bb.buffer, Xb += bb.byteOffset) : Zb = bb;
      if (Xb + (Ub - 1) * Gb + ub * ab > Zb.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const pb = ub * ab;
      if (Gb < pb) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Gb !== pb) {
        const bb = new Hb(wb),
          hb = new Uint8Array(Zb, Xb),
          Bb = new Uint8Array(bb.buffer),
          Ob = ub * ab;
        for (let ub = 0, Lb = 0, Yb = 0; ub < Ub; ub++, Lb += Gb, Yb += Ob) Bb.set(hb.subarray(Lb, Lb + Ob), Yb);
        return bb
      }
      return 1 !== ab && 0 !== (Xb & ab - 1) && (Bb.b.Warn("Array must be aligned to border of element size. Data will be copied."), Sb = !0), Sb ? new Hb(Zb.slice(Xb, Xb + wb * ab)) : new Hb(Zb, Xb, wb)
    }

    function Hb(bb, ub, hb, Ob, Gb, Ub, Sb, ab) {
      const Hb = ub * Lb(hb),
        wb = Sb * ub;
      if (ab.length !== wb) throw new Error("Output length is not valid");
      if (5126 === hb && Gb === Hb)
        if (bb instanceof Array) {
          const ub = Ob / 4;
          ab.set(bb, ub)
        } else if (ArrayBuffer.isView(bb)) {
        const ub = bb.byteOffset + Ob;
        if (0 !== (3 & ub)) return Bb.b.Warn("Float array must be aligned to 4-bytes border"), void ab.set(new Float32Array(bb.buffer.slice(ub, ub + wb * Float32Array.BYTES_PER_ELEMENT)));
        const hb = new Float32Array(bb.buffer, ub, wb);
        ab.set(hb)
      } else {
        const ub = new Float32Array(bb, Ob, wb);
        ab.set(ub)
      } else Yb(bb, Ob, Gb, ub, hb, wb, Ub, ((bb, hb) => {
        for (let Bb = 0; Bb < ub; Bb++) ab[hb + Bb] = bb[Bb]
      }))
    }

    function wb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(bb)) {
        for (let Ob = 0; Ob < ub; Ob++)
          if (bb[hb + Ob] - Bb > 65535) return !0;
        return !1
      }
      return 4 === bb.BYTES_PER_ELEMENT
    }

    function Zb(bb) {
      const ub = bb.buffer;
      if (ub instanceof ArrayBuffer) return bb;
      const hb = new ArrayBuffer(bb.byteLength);
      return new Uint8Array(hb).set(new Uint8Array(ub, bb.byteOffset, bb.byteLength)), hb
    }
  },
  39339: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => jb,
      h: () => db,
      p: () => rb,
      l: () => vb,
      q: () => tb
    });
    class Bb {
      constructor() {
        this.children = []
      }
      isValid(bb) {
        return !0
      }
      process(bb, ub, hb) {
        let Bb = "";
        if (this.line) {
          let hb = this.line;
          const Ob = ub.processor;
          if (Ob) {
            Ob.lineProcessor && (hb = Ob.lineProcessor(hb, ub.isFragment, ub.processingContext));
            const Bb = ub.processor?.attributeKeywordName ?? "attribute",
              Gb = ub.isFragment && ub.processor?.varyingFragmentKeywordName ? ub.processor?.varyingFragmentKeywordName : !ub.isFragment && ub.processor?.varyingVertexKeywordName ? ub.processor?.varyingVertexKeywordName : "varying";
            if (!ub.isFragment && Ob.attributeProcessor && this.line.startsWith(Bb)) hb = Ob.attributeProcessor(this.line, bb, ub.processingContext);
            else if (Ob.varyingProcessor && (Ob.varyingCheck?.(this.line, ub.isFragment) || !Ob.varyingCheck && this.line.startsWith(Gb))) hb = Ob.varyingProcessor(this.line, ub.isFragment, bb, ub.processingContext);
            else if (Ob.uniformProcessor && Ob.uniformRegexp && Ob.uniformRegexp.test(this.line)) ub.lookForClosingBracketForUniformBuffer || (hb = Ob.uniformProcessor(this.line, ub.isFragment, bb, ub.processingContext));
            else if (Ob.uniformBufferProcessor && Ob.uniformBufferRegexp && Ob.uniformBufferRegexp.test(this.line)) ub.lookForClosingBracketForUniformBuffer || (hb = Ob.uniformBufferProcessor(this.line, ub.isFragment, ub.processingContext), ub.lookForClosingBracketForUniformBuffer = !0);
            else if (Ob.textureProcessor && Ob.textureRegexp && Ob.textureRegexp.test(this.line)) hb = Ob.textureProcessor(this.line, ub.isFragment, bb, ub.processingContext);
            else if ((Ob.uniformProcessor || Ob.uniformBufferProcessor) && this.line.startsWith("uniform") && !ub.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Ob.uniformProcessor && (hb = Ob.uniformProcessor(this.line, ub.isFragment, bb, ub.processingContext)) : Ob.uniformBufferProcessor && (hb = Ob.uniformBufferProcessor(this.line, ub.isFragment, ub.processingContext), ub.lookForClosingBracketForUniformBuffer = !0)
            }
            ub.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (ub.lookForClosingBracketForUniformBuffer = !1, Ob.endOfUniformBufferProcessor && (hb = Ob.endOfUniformBufferProcessor(this.line, ub.isFragment, ub.processingContext)))
          }
          Bb += hb + "\n"
        }
        for (const Ob of this.children) Bb += Ob.process(bb, ub, hb);
        return this.additionalDefineKey && (bb[this.additionalDefineKey] = this.additionalDefineValue || "true", hb[this.additionalDefineKey] = bb[this.additionalDefineKey]), Bb
      }
    }
    class Ob {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(bb) {
        this._lines.length = 0;
        for (const ub of bb) {
          if (!ub || "\r" === ub) continue;
          if ("#" === ub[0]) {
            this._lines.push(ub);
            continue
          }
          const bb = ub.trim();
          if (!bb) continue;
          if (bb.startsWith("//")) {
            this._lines.push(ub);
            continue
          }
          const hb = bb.indexOf(";");
          if (-1 === hb) this._lines.push(bb);
          else if (hb === bb.length - 1) bb.length > 1 && this._lines.push(bb);
          else {
            const bb = ub.split(";");
            for (let ub = 0; ub < bb.length; ub++) {
              let hb = bb[ub];
              hb && (hb = hb.trim(), hb && this._lines.push(hb + (ub !== bb.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Gb extends Bb {
      process(bb, ub, hb) {
        for (let Bb = 0; Bb < this.children.length; Bb++) {
          const Ob = this.children[Bb];
          if (Ob.isValid(bb)) return Ob.process(bb, ub, hb)
        }
        return ""
      }
    }
    class Ub extends Bb {
      isValid(bb) {
        return this.testExpression.isTrue(bb)
      }
    }
    class Lb {
      isTrue(bb) {
        return !0
      }
      static postfixToInfix(bb) {
        const ub = [];
        for (const hb of bb)
          if (void 0 === Lb._OperatorPriority[hb]) ub.push(hb);
          else {
            const bb = ub[ub.length - 1],
              Bb = ub[ub.length - 2];
            ub.length -= 2, ub.push(`(${Bb}${hb}${bb})`)
          } return ub[ub.length - 1]
      }
      static infixToPostfix(bb) {
        const ub = Lb._InfixToPostfixCache.get(bb);
        if (ub) return ub.accessTime = Date.now(), ub.result;
        if (!bb.includes("&&") && !bb.includes("||") && !bb.includes(")") && !bb.includes("(")) return [bb];
        const hb = [];
        let Bb = -1;
        const Ob = () => {
            ab = ab.trim(), "" !== ab && (hb.push(ab), ab = "")
          },
          Gb = bb => {
            Bb < Lb._Stack.length - 1 && (Lb._Stack[++Bb] = bb)
          },
          Ub = () => Lb._Stack[Bb],
          Yb = () => -1 === Bb ? "!!INVALID EXPRESSION!!" : Lb._Stack[Bb--];
        let Sb = 0,
          ab = "";
        for (; Sb < bb.length;) {
          const ub = bb.charAt(Sb),
            Hb = Sb < bb.length - 1 ? bb.substring(Sb, 2 + Sb) : "";
          if ("(" === ub) ab = "", Gb(ub);
          else if (")" === ub) {
            for (Ob(); - 1 !== Bb && "(" !== Ub();) hb.push(Yb());
            Yb()
          } else if (Lb._OperatorPriority[Hb] > 1) {
            for (Ob(); - 1 !== Bb && Lb._OperatorPriority[Ub()] >= Lb._OperatorPriority[Hb];) hb.push(Yb());
            Gb(Hb), Sb++
          } else ab += ub;
          Sb++
        }
        for (Ob(); - 1 !== Bb;) "(" === Ub() ? Yb() : hb.push(Yb());
        return Lb._InfixToPostfixCache.size >= Lb.InfixToPostfixCacheLimitSize && Lb.ClearCache(), Lb._InfixToPostfixCache.set(bb, {
          result: hb,
          accessTime: Date.now()
        }), hb
      }
      static ClearCache() {
        const bb = Array.from(Lb._InfixToPostfixCache.entries()).sort(((bb, ub) => bb[1].accessTime - ub[1].accessTime));
        for (let ub = 0; ub < Lb.InfixToPostfixCacheCleanupSize; ub++) Lb._InfixToPostfixCache.delete(bb[ub][0])
      }
    }
    Lb.InfixToPostfixCacheLimitSize = 5e4, Lb.InfixToPostfixCacheCleanupSize = 25e3, Lb._InfixToPostfixCache = new Map, Lb._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, Lb._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Yb extends Lb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = bb, this.not = ub
      }
      isTrue(bb) {
        let ub = void 0 !== bb[this.define];
        return this.not && (ub = !ub), ub
      }
    }
    class Sb extends Lb {
      isTrue(bb) {
        return this.leftOperand.isTrue(bb) || this.rightOperand.isTrue(bb)
      }
    }
    class ab extends Lb {
      isTrue(bb) {
        return this.leftOperand.isTrue(bb) && this.rightOperand.isTrue(bb)
      }
    }
    class Hb extends Lb {
      constructor(bb, ub, hb) {
        super(), this.define = bb, this.operand = ub, this.testValue = hb
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(bb) {
        let ub = !1;
        const hb = parseInt(void 0 != bb[this.define] ? bb[this.define] : this.define),
          Bb = parseInt(void 0 != bb[this.testValue] ? bb[this.testValue] : this.testValue);
        if (isNaN(hb) || isNaN(Bb)) return !1;
        switch (this.operand) {
          case ">":
            ub = hb > Bb;
            break;
          case "<":
            ub = hb < Bb;
            break;
          case "<=":
            ub = hb <= Bb;
            break;
          case ">=":
            ub = hb >= Bb;
            break;
          case "==":
            ub = hb === Bb;
            break;
          case "!=":
            ub = hb !== Bb
        }
        return ub
      }
    }
    var wb = hb(39333),
      Zb = hb(39331);
    const Xb = /defined\s*?\((.+?)\)/g,
      pb = /defined\s*?\[(.+?)\]/g,
      ob = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      Ab = /__decl__/,
      lb = /light\{X\}.(\w*)/g,
      Kb = /\{X\}/g,
      Wb = [],
      Cb = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function db(bb) {
      bb.processor && bb.processor.initializeShaders && bb.processor.initializeShaders(bb.processingContext)
    }

    function rb(bb, ub, hb, Bb) {
      ub.processor?.preProcessShaderCode && (bb = ub.processor.preProcessShaderCode(bb, ub.isFragment)), vb(bb, ub, (bb => {
        ub.processCodeAfterIncludes && (bb = ub.processCodeAfterIncludes(ub.isFragment ? "fragment" : "vertex", bb, ub.defines));
        const Ob = function(bb, ub, hb) {
          let Bb = function(bb, ub) {
            if (ub.processor?.noPrecision) return bb;
            const hb = ub.shouldUseHighPrecisionShader; - 1 === bb.indexOf("precision highp float") ? bb = hb ? "precision highp float;\n" + bb : "precision mediump float;\n" + bb : hb || (bb = bb.replace("precision highp float", "precision mediump float"));
            return bb
          }(bb, ub);
          if (!ub.processor) return Bb;
          if (0 === ub.processor.shaderLanguage && -1 !== Bb.indexOf("#version 3") && (Bb = Bb.replace("#version 300 es", ""), !ub.processor.parseGLES3)) return Bb;
          const Ob = ub.defines,
            Gb = ib(ub, hb);
          ub.processor.preProcessor && (Bb = ub.processor.preProcessor(Bb, Ob, Gb, ub.isFragment, ub.processingContext));
          const Ub = {};
          Bb = gb(Bb, Gb, ub, Ub), ub.processor.postProcessor && (Bb = ub.processor.postProcessor(Bb, Ob, ub.isFragment, ub.processingContext, hb ? {
            drawBuffersExtensionDisabled: !hb.getCaps().drawBuffersExtension
          } : {}, Gb, Ub));
          hb?._features.needShaderCodeInlining && (Bb = hb.inlineShaderCode(Bb));
          return Bb
        }(bb, ub, Bb);
        hb(Ob, bb)
      }))
    }

    function jb(bb, ub, hb) {
      return hb.processor && hb.processor.finalizeShaders ? hb.processor.finalizeShaders(bb, ub, hb.processingContext) : {
        vertexCode: bb,
        fragmentCode: ub
      }
    }

    function nb(bb) {
      const ub = /defined\((.+)\)/.exec(bb);
      if (ub && ub.length) return new Yb(ub[1].trim(), "!" === bb[0]);
      const hb = ["==", "!=", ">=", "<=", "<", ">"];
      let Bb = "",
        Ob = 0;
      for (Bb of hb)
        if (Ob = bb.indexOf(Bb), Ob > -1) break;
      if (-1 === Ob) return new Yb(bb);
      const Gb = bb.substring(0, Ob).trim(),
        Ub = bb.substring(Ob + Bb.length).trim();
      return new Hb(Gb, Bb, Ub)
    }

    function Db(bb, ub) {
      const hb = new Ub,
        Bb = bb.substring(0, ub);
      let Ob = bb.substring(ub);
      return Ob = Ob.substring(0, (Ob.indexOf("//") + 1 || Ob.length + 1) - 1).trim(), hb.testExpression = "#ifdef" === Bb ? new Yb(Ob) : "#ifndef" === Bb ? new Yb(Ob, !0) : function(bb) {
        bb = bb.replace(Xb, "defined[$1]");
        const ub = Lb.infixToPostfix(bb),
          hb = [];
        for (const Ob of ub)
          if ("||" !== Ob && "&&" !== Ob) hb.push(Ob);
          else if (hb.length >= 2) {
          let bb = hb[hb.length - 1],
            ub = hb[hb.length - 2];
          hb.length -= 2;
          const Bb = "&&" == Ob ? new ab : new Sb;
          "string" === typeof bb && (bb = bb.replace(pb, "defined($1)")), "string" === typeof ub && (ub = ub.replace(pb, "defined($1)")), Bb.leftOperand = "string" === typeof ub ? nb(ub) : ub, Bb.rightOperand = "string" === typeof bb ? nb(bb) : bb, hb.push(Bb)
        }
        let Bb = hb[hb.length - 1];
        return "string" === typeof Bb && (Bb = Bb.replace(pb, "defined($1)")), "string" === typeof Bb ? nb(Bb) : Bb
      }(Ob), hb
    }

    function xb(bb, ub, hb, Ob) {
      let Gb;
      for (; zb(bb, hb, Ob);) {
        Gb = bb.currentLine;
        const Ub = Gb.substring(0, 5).toLowerCase();
        if ("#else" === Ub) {
          const hb = new Bb;
          return ub.children.push(hb), void zb(bb, hb, Ob)
        }
        if ("#elif" === Ub) {
          const bb = Db(Gb, 5);
          ub.children.push(bb), hb = bb
        }
      }
    }

    function zb(bb, ub, hb) {
      for (; bb.canRead;) {
        bb.lineIndex++;
        const Ob = bb.currentLine;
        if (Ob.indexOf("#") >= 0) {
          const Bb = Cb.exec(Ob);
          if (Bb && Bb.length) {
            switch (Bb[0]) {
              case "#ifdef": {
                const Bb = new Gb;
                ub.children.push(Bb);
                const Ub = Db(Ob, 6);
                Bb.children.push(Ub), xb(bb, Bb, Ub, hb);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Bb = new Gb;
                ub.children.push(Bb);
                const Ub = Db(Ob, 7);
                Bb.children.push(Ub), xb(bb, Bb, Ub, hb);
                break
              }
              case "#if": {
                const Bb = new Gb,
                  Ub = Db(Ob, 3);
                ub.children.push(Bb), Bb.children.push(Ub), xb(bb, Bb, Ub, hb);
                break
              }
            }
            continue
          }
        }
        const Ub = new Bb;
        if (Ub.line = Ob, ub.children.push(Ub), "#" === Ob[0] && "d" === Ob[1]) {
          const bb = Ob.replace(";", "").split(" ");
          Ub.additionalDefineKey = bb[1], 3 === bb.length && (Ub.additionalDefineValue = bb[2])
        }
      }
      return !1
    }

    function gb(bb, ub, hb, Gb) {
      const Ub = new Bb,
        Lb = new Ob;
      return Lb.lineIndex = -1, Lb.lines = bb.split("\n"), zb(Lb, Ub, Gb), Ub.process(ub, hb, Gb)
    }

    function ib(bb, ub) {
      const hb = bb.defines,
        Bb = {};
      for (const Ob of hb) {
        const bb = Ob.replace("#define", "").replace(";", "").trim().split(" ");
        Bb[bb[0]] = bb.length > 1 ? bb[1] : ""
      }
      return 0 === bb.processor?.shaderLanguage && (Bb.GL_ES = "true"), Bb.__VERSION__ = bb.version, Bb[bb.platformName] = "true", (0, Zb.e)(Bb, ub?.isNDCHalfZRange, ub?.aBb, ub?.useExactSrgbConversions), Bb
    }

    function vb(bb, ub, hb) {
      let Bb;
      for (Wb.length = 0; null !== (Bb = ob.exec(bb));) Wb.push(Bb);
      let Ob = [bb],
        Gb = !1;
      for (const Lb of Wb) {
        let bb = Lb[1];
        if (-1 !== bb.indexOf("__decl__") && (bb = bb.replace(Ab, ""), ub.supportsUniformBuffers && (bb = bb.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), bb += "Declaration"), !ub.includesShadersStore[bb]) {
          const Bb = ub.shadersRepository + "ShadersInclude/" + bb + ".fx";
          return void tb.loadFile(Bb, (Bb => {
            ub.includesShadersStore[bb] = Bb, vb(Ob.join(""), ub, hb)
          }))
        } {
          let hb = ub.includesShadersStore[bb];
          if (Lb[2]) {
            const bb = Lb[3].split(",");
            for (let ub = 0; ub < bb.length; ub += 2) {
              const Bb = new RegExp(bb[ub], "g"),
                Ob = bb[ub + 1];
              hb = hb.replace(Bb, Ob)
            }
          }
          if (Lb[4]) {
            const bb = Lb[5];
            if (-1 !== bb.indexOf("..")) {
              const Bb = bb.split(".."),
                Ob = parseInt(Bb[0]);
              let Gb = parseInt(Bb[1]),
                Ub = hb.slice(0);
              hb = "", isNaN(Gb) && (Gb = ub.indexParameters[Bb[1]]);
              for (let bb = Ob; bb < Gb; bb++) ub.supportsUniformBuffers || (Ub = Ub.replace(lb, ((bb, ub) => ub + "{X}"))), hb += Ub.replace(Kb, bb.toString()) + "\n"
            } else ub.supportsUniformBuffers || (hb = hb.replace(lb, ((bb, ub) => ub + "{X}"))), hb = hb.replace(Kb, bb)
          }
          const Bb = [];
          for (const bb of Ob) {
            const ub = bb.split(Lb[0]);
            for (let bb = 0; bb < ub.length - 1; bb++) Bb.push(ub[bb]), Bb.push(hb);
            Bb.push(ub[ub.length - 1])
          }
          Ob = Bb, Gb = Gb || hb.indexOf("#include<") >= 0 || hb.indexOf("#include <") >= 0
        }
      }
      Wb.length = 0;
      const Ub = Ob.join("");
      Gb ? vb(Ub.toString(), ub, hb) : hb(Ub)
    }
    const tb = {
      loadFile: (bb, ub, hb, Bb, Ob, Gb) => {
        throw (0, wb.m)("FileTools")
      }
    }
  },
  39331: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      d: () => Gb,
      e: () => Lb,
      f: () => Ub,
      g: () => Yb
    });
    var Bb = hb(39333);
    const Ob = {};

    function Gb(bb, ub) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (ub ? ub + "\n" : "") + bb
    }

    function Ub(bb, ub, hb, Gb, Ub, Lb, Yb) {
      const Sb = Yb || Ob.loadFile;
      if (!Sb) throw (0, Bb.m)("FileTools");
      return Sb(bb, ub, hb, Gb, Ub, Lb)
    }

    function Lb(bb, ub, hb, Bb) {
      if (bb) return ub ? bb.IS_NDC_HALF_ZRANGE = "" : delete bb.IS_NDC_HALF_ZRANGE, hb ? bb.USE_REVERSE_DEPTHBUFFER = "" : delete bb.USE_REVERSE_DEPTHBUFFER, void(Bb ? bb.USE_EXACT_SRGB_CONVERSIONS = "" : delete bb.USE_EXACT_SRGB_CONVERSIONS);
      {
        let bb = "";
        return ub && (bb += "#define IS_NDC_HALF_ZRANGE"), hb && (bb && (bb += "\n"), bb += "#define USE_REVERSE_DEPTHBUFFER"), Bb && (bb && (bb += "\n"), bb += "#define USE_EXACT_SRGB_CONVERSIONS"), bb
      }
    }

    function Yb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Bb = arguments.length > 3 ? arguments[3] : void 0;
      switch (bb) {
        case 3: {
          const bb = new Int8Array(ub);
          return Bb && bb.set(new Int8Array(Bb)), bb
        }
        case 0: {
          const bb = new Uint8Array(ub);
          return Bb && bb.set(new Uint8Array(Bb)), bb
        }
        case 4: {
          const bb = "number" !== typeof ub ? new Int16Array(ub) : new Int16Array(hb ? ub / 2 : ub);
          return Bb && bb.set(new Int16Array(Bb)), bb
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const bb = "number" !== typeof ub ? new Uint16Array(ub) : new Uint16Array(hb ? ub / 2 : ub);
          return Bb && bb.set(new Uint16Array(Bb)), bb
        }
        case 6: {
          const bb = "number" !== typeof ub ? new Int32Array(ub) : new Int32Array(hb ? ub / 4 : ub);
          return Bb && bb.set(new Int32Array(Bb)), bb
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const bb = "number" !== typeof ub ? new Uint32Array(ub) : new Uint32Array(hb ? ub / 4 : ub);
          return Bb && bb.set(new Uint32Array(Bb)), bb
        }
        case 1: {
          const bb = "number" !== typeof ub ? new Float32Array(ub) : new Float32Array(hb ? ub / 4 : ub);
          return Bb && bb.set(new Float32Array(Bb)), bb
        }
      }
      const Ob = new Uint8Array(ub);
      return Bb && Ob.set(new Uint8Array(Bb)), Ob
    }
  },
  39333: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Sb,
      f: () => ab,
      j: () => Yb,
      m: () => Ob
    });
    const Bb = {};

    function Ob(bb) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Bb[bb]) return Bb[bb] = !0, `${bb} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Gb = {};
    let Ub = !1,
      Lb = 0;

    function Yb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Bb = function() {
        if ((hb || Ub) && 0 === Lb) {
          const hb = `${bb}.${ub}`;
          Gb[hb] || (Gb[hb] = !0, console.warn(`[Babylon.js] ${hb}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Bb.__isSideEffectStub = !0, Bb
    }

    function Sb(bb) {
      return !!bb && !bb.__isSideEffectStub
    }

    function ab(bb, ub) {
      return {
        get() {},
        set(bb) {
          Object.defineProperty(this, ub, {
            value: bb,
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
  39316: (bb, ub, hb) => {
    function Bb() {
      return "undefined" !== typeof window
    }

    function Ob() {
      return "undefined" !== typeof navigator
    }

    function Gb() {
      return "undefined" !== typeof document
    }

    function Ub(bb) {
      let ub = "",
        hb = bb.firstChild;
      for (; hb;) 3 === hb.nodeType && (ub += hb.textContent), hb = hb.nextSibling;
      return ub
    }
    hb.d(ub, {
      d: () => Ub,
      e: () => Gb,
      h: () => Ob,
      k: () => Bb
    })
  },
  39525: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb,
      e: () => Ob,
      h: () => Gb
    });
    class Bb extends Error {}
    Bb._setPrototypeOf = Object.setPrototypeOf || ((bb, ub) => (bb.__proto__ = ub, bb));
    const Ob = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Gb extends Bb {
      constructor(bb, ub, hb) {
        super(bb), this.errorCode = ub, this.innerError = hb, this.name = "RuntimeError", Bb._setPrototypeOf(this, Gb.prototype)
      }
    }
  },
  39511: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => ib,
      f: () => Kb,
      h: () => Db,
      i: () => zb,
      k: () => jb,
      o: () => db,
      r: () => rb,
      s: () => Nb,
      t: () => nb,
      w: () => Wb
    });
    var Bb = hb(39520),
      Ob = hb(39316),
      Gb = hb(36753);
    class Ub {}
    Ub.FilesToLoad = {};
    var Lb = hb(39525),
      Yb = hb(39530),
      Sb = hb(36748),
      ab = hb(39331),
      Hb = hb(39339),
      wb = hb(38302),
      Zb = hb(39343),
      Xb = hb(39533);
    const pb = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class ob extends Lb.h {
      constructor(bb, ub) {
        super(bb, Lb.e.LoadFileError), this.name = "LoadFileError", Lb.c._setPrototypeOf(this, ob.prototype), ub instanceof Bb.b ? this.request = ub : this.file = ub
      }
    }
    class Ab extends Lb.h {
      constructor(bb, ub) {
        super(bb, Lb.e.RequestFileError), this.request = ub, this.name = "RequestFileError", Lb.c._setPrototypeOf(this, Ab.prototype)
      }
    }
    class lb extends Lb.h {
      constructor(bb, ub) {
        super(bb, Lb.e.ReadFileError), this.file = ub, this.name = "ReadFileError", Lb.c._setPrototypeOf(this, lb.prototype)
      }
    }
    const Kb = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (hb, Bb, Ob) => 0 !== Bb.status || Ob >= bb || -1 !== hb.indexOf("file:") ? -1 : Math.pow(2, Ob) * ub
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: bb => bb,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: bb => bb,
        CleanUrl: bb => bb = bb.replace(/#/gm, "%23")
      },
      Wb = (bb, ub) => {
        if ((!bb || 0 !== bb.indexOf("data:")) && Kb.CorsBehavior)
          if ("string" === typeof Kb.CorsBehavior || Kb.CorsBehavior instanceof String) ub.crossOrigin = Kb.CorsBehavior;
          else {
            const hb = Kb.CorsBehavior(bb);
            hb && (ub.crossOrigin = hb)
          }
      },
      Cb = {
        getRequiredSize: null
      },
      db = function(bb, ub, hb, Ob) {
        let Gb, Lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          ab = arguments.length > 5 ? arguments[5] : void 0,
          Hb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Sb.b.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Hb?._features.forceBitmapOverHTMLImageElement) return hb("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Hb?._features.forceBitmapOverHTMLImageElement && "string" !== typeof bb && "undefined" !== typeof Blob) {
          let Bb;
          if (bb instanceof Blob) Bb = bb;
          else {
            const ub = bb instanceof ArrayBuffer ? bb : (0, Xb.l)(bb);
            Bb = new Blob([ub], {
              type: Lb
            })
          }
          return Hb.createImageBitmap(Bb, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...ab
          }).then(ub).catch((ub => {
            hb && hb("Error while trying to load image: " + bb, ub)
          })), null
        }
        let wb = !1;
        if (bb instanceof ArrayBuffer || ArrayBuffer.isView(bb))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let ub;
            ub = bb instanceof ArrayBuffer ? bb : (0, Xb.l)(bb), Gb = URL.createObjectURL(new Blob([ub], {
              type: Lb
            })), wb = !0
          } else Gb = `data:${Lb};base64,` + (0, Yb.i)(bb);
        else bb instanceof Blob ? (Gb = URL.createObjectURL(bb), wb = !0) : (Gb = Kb.CleanUrl(bb), Gb = Kb.PreprocessUrl(Gb));
        const Zb = ub => {
          if (hb) {
            const Bb = Gb || bb.toString();
            hb(`Error while trying to load image: ${0===Bb.indexOf("http")||Bb.length<=128?Bb:Bb.slice(0,128)+"..."}`, ub)
          }
        };
        if (Hb?._features.forceBitmapOverHTMLImageElement) return jb(Gb, (Bb => {
          Hb.createImageBitmap(new Blob([Bb], {
            type: Lb
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...ab
          }).then((bb => {
            ub(bb), wb && URL.revokeObjectURL(Gb)
          })).catch((ub => {
            hb && hb("Error while trying to load image: " + bb, ub)
          }))
        }), void 0, Ob || void 0, !0, ((bb, ub) => {
          Zb(ub)
        })), null;
        const pb = new Image;
        if (Cb.getRequiredSize) {
          const ub = Cb.getRequiredSize(bb);
          ub.width && (pb.width = ub.width), ub.height && (pb.height = ub.height)
        }
        Wb(Gb, pb);
        const ob = [],
          Ab = () => {
            for (const bb of ob) bb.target.removeEventListener(bb.name, bb.handler);
            ob.length = 0
          };
        ob.push({
          target: pb,
          name: "load",
          handler: () => {
            Ab(), ub(pb), wb && pb.src && URL.revokeObjectURL(pb.src)
          }
        }), ob.push({
          target: pb,
          name: "error",
          handler: bb => {
            Ab(), Zb(bb), wb && pb.src && URL.revokeObjectURL(pb.src)
          }
        }), ob.push({
          target: document,
          name: "securitypolicyviolation",
          handler: bb => {
            if (bb.blockedURI !== pb.src || "iZ" === bb.disposition) return;
            Ab();
            const ub = new Error(`CSP violation of policy ${bb.effectiveDirective} ${bb.blockedURI}. Current policy is ${bb.originalPolicy}`);
            Sb.b.UseFallbackTexture = !1, Zb(ub), wb && pb.src && URL.revokeObjectURL(pb.src), pb.src = ""
          }
        }), (() => {
          for (const bb of ob) bb.target.addEventListener(bb.name, bb.handler)
        })();
        const lb = "blob:" === Gb.substring(0, 5),
          db = "data:" === Gb.substring(0, 5),
          rb = () => {
            lb || db || !Bb.b.IsCustomRequestAvailable ? pb.src = Gb : jb(Gb, ((bb, ub, hb) => {
              const Bb = new Blob([bb], {
                  type: !Lb && hb ? hb : Lb
                }),
                Ob = URL.createObjectURL(Bb);
              wb = !0, pb.src = Ob
            }), void 0, Ob || void 0, !0, ((bb, ub) => {
              Zb(ub)
            }))
          },
          nb = () => {
            Ob && Ob.loadImage(Gb, pb)
          };
        if (!lb && !db && Ob && Ob.enableTexturesOffline) Ob.open(nb, rb);
        else {
          if (-1 !== Gb.indexOf("file:")) {
            const bb = decodeURIComponent(Gb.substring(5).toLowerCase());
            if (Ub.FilesToLoad[bb] && "undefined" !== typeof URL) {
              try {
                let ub;
                try {
                  ub = URL.createObjectURL(Ub.FilesToLoad[bb])
                } catch (Db) {
                  ub = URL.createObjectURL(Ub.FilesToLoad[bb])
                }
                pb.src = ub, wb = !0
              } catch (xb) {
                pb.src = ""
              }
              return pb
            }
          }
          rb()
        }
        return pb
      },
      rb = (bb, ub, hb, Bb, Ob) => {
        const Ub = new FileReader,
          Lb = {
            onCompleteObservable: new Gb.e,
            abort: () => Ub.abort()
          };
        return Ub.onloadend = () => Lb.onCompleteObservable.notifyObservers(Lb), Ob && (Ub.onerror = () => {
          Ob(new lb(`Unable to read ${bb.name}`, bb))
        }), Ub.onload = bb => {
          ub(bb.target.result)
        }, hb && (Ub.onprogress = hb), Bb ? Ub.readAsArrayBuffer(bb) : Ub.readAsText(bb), Lb
      },
      jb = (bb, ub, hb, Bb, Ob, Yb, Sb) => {
        if (bb.name) return rb(bb, ub, hb, Ob, Yb ? bb => {
          Yb(void 0, bb)
        } : void 0);
        const ab = bb;
        if (-1 !== ab.indexOf("file:")) {
          let bb = decodeURIComponent(ab.substring(5).toLowerCase());
          0 === bb.indexOf("./") && (bb = bb.substring(2));
          const Bb = Ub.FilesToLoad[bb];
          if (Bb) return rb(Bb, ub, hb, Ob, Yb ? bb => Yb(void 0, new ob(bb.message, bb.file)) : void 0)
        }
        const {
          match: Hb,
          type: Xb
        } = gb(ab);
        if (Hb) {
          const bb = {
            onCompleteObservable: new Gb.e,
            abort: () => () => {}
          };
          try {
            const bb = Ob ? ib(ab) : vb(ab);
            ub(bb, void 0, Xb)
          } catch (Lb) {
            Yb ? Yb(void 0, Lb) : wb.b.Error(Lb.message || "Failed to parse the Data URL")
          }
          return Zb.c.SetImmediate((() => {
            bb.onCompleteObservable.notifyObservers(bb)
          })), bb
        }
        return nb(ab, ((bb, hb) => {
          ub(bb, hb?.responseURL, hb?.getResponseHeader("content-type"))
        }), hb, Bb, Ob, Yb ? bb => {
          Yb(bb.request, new ob(bb.message, bb.request))
        } : void 0, Sb)
      },
      nb = (bb, ub, hb, Ub, Lb, Yb, ab) => {
        null !== Ub && (Ub ?? (Ub = Sb.b.LastCreatedScene?.offlineProvider)), bb = Kb.CleanUrl(bb), bb = Kb.PreprocessUrl(bb);
        const Hb = Kb.BaseUrl + bb;
        let Zb = !1;
        const Xb = {
            onCompleteObservable: new Gb.e,
            abort: () => Zb = !0
          },
          pb = () => {
            let bb, Gb = new Bb.b,
              Ub = null;
            const Sb = () => {
              Gb && (hb && Gb.removeEventListener("progress", hb), bb && Gb.removeEventListener("readystatechange", bb), Gb.removeEventListener("loadend", pb))
            };
            let pb = () => {
              Sb(), Xb.onCompleteObservable.notifyObservers(Xb), Xb.onCompleteObservable.clear(), hb = void 0, bb = null, pb = null, Yb = void 0, ab = void 0, ub = void 0
            };
            Xb.abort = () => {
              Zb = !0, pb && pb(), Gb && Gb.readyState !== (XMLHttpRequest.DONE || 4) && Gb.abort(), null !== Ub && (clearTimeout(Ub), Ub = null), Gb = null
            };
            const ob = bb => {
                const ub = bb.message || "Unknown error";
                Yb && Gb ? Yb(new Ab(ub, Gb)) : wb.b.Error(ub)
              },
              lb = wb => {
                if (Gb) {
                  if (Gb.open("GET", Hb), ab) try {
                    ab(Gb)
                  } catch (Xb) {
                    return void ob(Xb)
                  }
                  Lb && (Gb.responseType = "arraybuffer"), hb && Gb.addEventListener("progress", hb), pb && Gb.addEventListener("loadend", pb), bb = () => {
                    if (!Zb && Gb && Gb.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (bb && Gb.removeEventListener("readystatechange", bb), Gb.status >= 200 && Gb.status < 300 || 0 === Gb.status && (!(0, Ob.k)() || xb())) {
                        const bb = Lb ? Gb.response : Gb.responseText;
                        if (null !== bb) {
                          try {
                            ub && ub(bb, Gb)
                          } catch (Xb) {
                            ob(Xb)
                          }
                          return
                        }
                      }
                      const hb = Kb.DefaultRetryStrategy;
                      if (hb) {
                        const bb = hb(Hb, Gb, wb);
                        if (-1 !== bb) return Sb(), Gb = new Bb.b, void(Ub = setTimeout((() => lb(wb + 1)), bb))
                      }
                      const ab = new Ab("Error status: " + Gb.status + " " + Gb.statusText + " - Unable to load " + Hb, Gb);
                      Yb && Yb(ab)
                    }
                  }, Gb.addEventListener("readystatechange", bb), Gb.send()
                }
              };
            lb(0)
          };
        if (Ub && Ub.enableSceneOffline && !bb.startsWith("blob:")) {
          const Bb = bb => {
              bb && bb.status > 400 ? Yb && Yb(bb) : pb()
            },
            Ob = () => {
              Ub && Ub.loadFile(Kb.BaseUrl + bb, (bb => {
                !Zb && ub && ub(bb), Xb.onCompleteObservable.notifyObservers(Xb)
              }), hb ? bb => {
                !Zb && hb && hb(bb)
              } : void 0, Bb, Lb)
            };
          Ub.open(Ob, Bb)
        } else pb();
        return Xb
      },
      Db = bb => {
        const {
          match: ub,
          type: hb
        } = gb(bb);
        if (ub) return hb || void 0;
        const Bb = bb.lastIndexOf(".");
        switch (bb.substring(Bb + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "yJ":
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
      xb = () => "undefined" !== typeof location && "file:" === location.protocol,
      zb = bb => pb.test(bb),
      gb = bb => {
        const ub = pb.exec(bb);
        if (null === ub || 0 === ub.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: ub[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function ib(bb) {
      return (0, Yb.d)(bb.split(",")[1])
    }
    const vb = bb => (0, Yb.h)(bb.split(",")[1]);
    let tb;
    const Jb = (bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) => {
      tb = {
        DecodeBase64UrlToBinary: bb,
        DecodeBase64UrlToString: ub,
        DefaultRetryStrategy: hb.DefaultRetryStrategy,
        BaseUrl: hb.BaseUrl,
        CorsBehavior: hb.CorsBehavior,
        PreprocessUrl: hb.PreprocessUrl,
        IsBase64DataUrl: Bb,
        IsFileURL: Ob,
        LoadFile: Gb,
        LoadImage: Ub,
        ReadFile: Lb,
        RequestFile: Yb,
        SetCorsBehavior: Sb
      }, Object.defineProperty(tb, "DefaultRetryStrategy", {
        get: function() {
          return hb.DefaultRetryStrategy
        },
        set: function(bb) {
          hb.DefaultRetryStrategy = bb
        }
      }), Object.defineProperty(tb, "BaseUrl", {
        get: function() {
          return hb.BaseUrl
        },
        set: function(bb) {
          hb.BaseUrl = bb
        }
      }), Object.defineProperty(tb, "PreprocessUrl", {
        get: function() {
          return hb.PreprocessUrl
        },
        set: function(bb) {
          hb.PreprocessUrl = bb
        }
      }), Object.defineProperty(tb, "CorsBehavior", {
        get: function() {
          return hb.CorsBehavior
        },
        set: function(bb) {
          hb.CorsBehavior = bb
        }
      })
    };
    let eb = !1;

    function Nb() {
      eb || (eb = !0, Jb(ib, vb, Kb, zb, xb, jb, db, rb, nb, Wb), ab.c.loadFile = jb, ab.c.loadImage = db, Hb.q.loadFile = jb)
    }
  },
  39536: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb,
      e: () => Gb,
      i: () => Ub
    });
    let Bb = null;

    function Ob() {
      if (Bb) return Bb;
      const bb = new ArrayBuffer(4),
        ub = new Float32Array(bb),
        hb = new Uint32Array(bb),
        Ob = new Uint32Array(512),
        Gb = new Uint32Array(512);
      for (let Bb = 0; Bb < 256; ++Bb) {
        const bb = Bb - 127;
        bb < -24 ? (Ob[Bb] = 0, Ob[256 | Bb] = 32768, Gb[Bb] = 24, Gb[256 | Bb] = 24) : bb < -14 ? (Ob[Bb] = 1024 >> -bb - 14, Ob[256 | Bb] = 1024 >> -bb - 14 | 32768, Gb[Bb] = -bb - 1, Gb[256 | Bb] = -bb - 1) : bb <= 15 ? (Ob[Bb] = bb + 15 << 10, Ob[256 | Bb] = bb + 15 << 10 | 32768, Gb[Bb] = 13, Gb[256 | Bb] = 13) : bb < 128 ? (Ob[Bb] = 31744, Ob[256 | Bb] = 64512, Gb[Bb] = 24, Gb[256 | Bb] = 24) : (Ob[Bb] = 31744, Ob[256 | Bb] = 64512, Gb[Bb] = 13, Gb[256 | Bb] = 13)
      }
      const Ub = new Uint32Array(2048),
        Lb = new Uint32Array(64),
        Yb = new Uint32Array(64);
      for (let Bb = 1; Bb < 1024; ++Bb) {
        let bb = Bb << 13,
          ub = 0;
        for (; 0 === (8388608 & bb);) bb <<= 1, ub -= 8388608;
        bb &= -8388609, ub += 947912704, Ub[Bb] = bb | ub
      }
      for (let Bb = 1024; Bb < 2048; ++Bb) Ub[Bb] = 939524096 + (Bb - 1024 << 13);
      for (let Bb = 1; Bb < 31; ++Bb) Lb[Bb] = Bb << 23;
      Lb[31] = 1199570944, Lb[32] = 2147483648;
      for (let Bb = 33; Bb < 63; ++Bb) Lb[Bb] = 2147483648 + (Bb - 32 << 23);
      Lb[63] = 3347054592;
      for (let Bb = 1; Bb < 64; ++Bb) 32 !== Bb && (Yb[Bb] = 1024);
      return Bb = {
        floatView: ub,
        uint32View: hb,
        baseTable: Ob,
        shiftTable: Gb,
        mantissaTable: Ub,
        exponentTable: Lb,
        offsetTable: Yb
      }, Bb
    }
    const Gb = 65504;

    function Ub(bb) {
      const ub = Ob();
      ub.floatView[0] = bb;
      const hb = ub.uint32View[0],
        Bb = hb >> 23 & 511;
      return ub.baseTable[Bb] + ((8388607 & hb) >> ub.shiftTable[Bb])
    }

    function Lb(bb) {
      const ub = Ob();
      return ub.uint32View[0] = ub.mantissaTable[ub.offsetTable[bb >> 10] + (1023 & bb)] + ub.exponentTable[bb >> 10], ub.floatView[0]
    }
  },
  39530: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      h: () => Ob,
      i: () => Bb
    });
    const Bb = bb => {
        const ub = ArrayBuffer.isView(bb) ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : new Uint8Array(bb);
        return "function" === typeof ub.toBase64 ? ub.toBase64() : function(bb) {
          const ub = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb = "",
            ab = 0;
          for (; ab < bb.length;) hb = bb[ab++], Bb = ab < bb.length ? bb[ab++] : Number.NaN, Ob = ab < bb.length ? bb[ab++] : Number.NaN, Gb = hb >> 2, Ub = (3 & hb) << 4 | Bb >> 4, Lb = (15 & Bb) << 2 | Ob >> 6, Yb = 63 & Ob, isNaN(Bb) ? Lb = Yb = 64 : isNaN(Ob) && (Yb = 64), Sb += ub.charAt(Gb) + ub.charAt(Ub) + ub.charAt(Lb) + ub.charAt(Yb);
          return Sb
        }(ub)
      },
      Ob = bb => atob(bb),
      Gb = bb => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(bb).buffer : function(bb) {
        const ub = Ob(bb),
          hb = ub.length,
          Bb = new Uint8Array(new ArrayBuffer(hb));
        for (let Ob = 0; Ob < hb; Ob++) Bb[Ob] = ub.charCodeAt(Ob);
        return Bb.buffer
      }(bb)
  },
  39343: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob,
      g: () => Ub
    });
    let Bb = [];
    class Ob {
      static SetImmediate(bb) {
        0 === Bb.length && setTimeout((() => {
          const bb = Bb;
          Bb = [];
          for (const ub of bb) ub()
        }), 1), Bb.push(bb)
      }
    }

    function Gb(bb, ub, hb) {
      try {
        if (bb()) return ub(), !0
      } catch (Bb) {
        return hb?.(Bb), !0
      }
      return !1
    }
    const Ub = function(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Ub = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Gb(bb, ub, hb)) return null;
      const Lb = setInterval((() => {
        Gb(bb, ub, hb) ? clearInterval(Lb) : (Ob -= Bb, Ob < 0 && (clearInterval(Lb), hb?.(new Error("Operation timed out after maximum retries. " + (Ub || "")), !0)))
      }), Bb);
      return () => clearInterval(Lb)
    }
  },
  39520: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    class Bb {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Bb.CustomRequestHeaders).length > 0 || Bb.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(bb) {
        return bb = (bb = bb.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(bb) {
        return Bb.SkipRequestModificationForBabylonCDN && (bb.includes("preview.babylonjs.com") || bb.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(bb) {
        const ub = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Bb._ShouldSkipRequestModifications(bb)) return {
          url: bb,
          headers: ub
        };
        for (const Ob in Bb.CustomRequestHeaders) {
          const bb = Bb.CustomRequestHeaders[Ob];
          bb && (ub[Ob] = bb)
        }
        const hb = {
          setRequestHeader: (bb, hb) => {
            ub[bb] = hb
          }
        };
        for (const Ob of Bb.CustomRequestModifiers) {
          if (Bb._ShouldSkipRequestModifications(bb)) break;
          const ub = Ob(hb, bb);
          "string" === typeof ub && (bb = ub)
        }
        return {
          url: bb,
          headers: ub
        }
      }
      static async FetchAsync(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const hb = ub.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Ob,
            headers: Gb
          } = Bb._CollectCustomizations(Bb._CleanUrl(bb), ub.headers ?? {});
          return await fetch(Ob, {
            method: hb,
            headers: Gb,
            body: ub.body ?? void 0
          })
        }
        return await new Promise(((Ob, Gb) => {
          const Ub = new Bb;
          Ub.responseType = "arraybuffer", Ub.addEventListener("readystatechange", (() => {
            if (4 === Ub.readyState)
              if (Ub.status >= 200 && Ub.status < 300) {
                const bb = "undefined" !== typeof Headers ? new Headers : void 0,
                  ub = Ub.getResponseHeader("Content-Type");
                ub && bb && bb.set("Content-Type", ub), "undefined" !== typeof Response ? Ob(new Response(Ub.response, {
                  status: Ub.status,
                  statusText: Ub.statusText,
                  headers: bb
                })) : Ob({
                  ok: !0,
                  status: Ub.status,
                  statusText: Ub.statusText,
                  headers: {
                    get: bb => Ub.getResponseHeader(bb)
                  },
                  arrayBuffer: async () => await Promise.resolve(Ub.response)
                })
              } else Gb(new Error(`HTTP ${Ub.status} loading '${Ub.requestURL}': ${Ub.statusText}`))
          })), Ub.open(hb, bb, ub.headers), Ub.send(ub.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(bb) {
        this._xhr.onprogress = bb
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
      set responseType(bb) {
        this._xhr.responseType = bb
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(bb) {
        this._xhr.timeout = bb
      }
      addEventListener(bb, ub, hb) {
        this._xhr.addEventListener(bb, ub, hb)
      }
      removeEventListener(bb, ub, hb) {
        this._xhr.removeEventListener(bb, ub, hb)
      }
      abort() {
        this._xhr.abort()
      }
      send(bb) {
        this._xhr.send(bb)
      }
      open(bb, ub, hb) {
        const {
          url: Ob,
          headers: Gb
        } = Bb._CollectCustomizations(ub, hb);
        this._requestURL = Bb._CleanUrl(Ob), this._xhr.open(bb, this._requestURL, !0);
        for (const Bb in Gb) this._xhr.setRequestHeader(Bb, Gb[Bb])
      }
      setRequestHeader(bb, ub) {
        this._xhr.setRequestHeader(bb, ub)
      }
      getResponseHeader(bb) {
        return this._xhr.getResponseHeader(bb)
      }
    }
    Bb.CustomRequestHeaders = {}, Bb.CustomRequestModifiers = new Array, Bb.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);