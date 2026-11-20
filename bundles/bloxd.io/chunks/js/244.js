export const id = 244;
export const ids = [244];
export const modules = {
  39495: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Xb,
      g: () => Mb,
      j: () => Ib,
      m: () => nb,
      p: () => Hb,
      s: () => Ub,
      t: () => fb
    });
    var kb = sb(38284),
      Wb = sb(39503);

    function ab(bb, cb, sb, kb) {
      switch (cb) {
        case 5120: {
          let cb = bb.getInt8(sb);
          return kb && (cb = Math.max(cb / 127, -1)), cb
        }
        case 5121: {
          let cb = bb.getUint8(sb);
          return kb && (cb /= 255), cb
        }
        case 5122: {
          let cb = bb.getInt16(sb, !0);
          return kb && (cb = Math.max(cb / 32767, -1)), cb
        }
        case 5123: {
          let cb = bb.getUint16(sb, !0);
          return kb && (cb /= 65535), cb
        }
        case 5131:
          return (0, Wb.d)(bb.getUint16(sb, !0));
        case 5124:
          return bb.getInt32(sb, !0);
        case 5125:
          return bb.getUint32(sb, !0);
        case 5126:
          return bb.getFloat32(sb, !0);
        default:
          throw new Error(`Invalid component type ${cb}`)
      }
    }

    function Tb(bb, cb, sb, kb, ab) {
      switch (cb) {
        case 5120:
          kb && (ab = Math.round(127 * ab)), bb.setInt8(sb, ab);
          break;
        case 5121:
          kb && (ab = Math.round(255 * ab)), bb.setUint8(sb, ab);
          break;
        case 5122:
          kb && (ab = Math.round(32767 * ab)), bb.setInt16(sb, ab, !0);
          break;
        case 5123:
          kb && (ab = Math.round(65535 * ab)), bb.setUint16(sb, ab, !0);
          break;
        case 5131:
          bb.setUint16(sb, (0, Wb.f)(ab), !0);
          break;
        case 5124:
          bb.setInt32(sb, ab, !0);
          break;
        case 5125:
          bb.setUint32(sb, ab, !0);
          break;
        case 5126:
          bb.setFloat32(sb, ab, !0);
          break;
        default:
          throw new Error(`Invalid component type ${cb}`)
      }
    }

    function Ub(bb) {
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

    function Ib(bb, cb, sb, kb, Wb, Ib, Hb, fb) {
      const Mb = new Array(kb),
        Xb = new Array(kb);
      if (bb instanceof Array) {
        let Wb = cb / 4;
        const ab = sb / 4;
        for (let cb = 0; cb < Ib; cb += kb) {
          for (let cb = 0; cb < kb; cb++) Mb[cb] = Xb[cb] = bb[Wb + cb];
          fb(Xb, cb);
          for (let cb = 0; cb < kb; cb++) Mb[cb] !== Xb[cb] && (bb[Wb + cb] = Xb[cb]);
          Wb += ab
        }
      } else {
        const nb = ArrayBuffer.isView(bb) ? new DataView(bb.buffer, bb.byteOffset, bb.byteLength) : new DataView(bb),
          mb = Ub(Wb);
        for (let bb = 0; bb < Ib; bb += kb) {
          for (let bb = 0, sb = cb; bb < kb; bb++, sb += mb) Mb[bb] = Xb[bb] = ab(nb, Wb, sb, Hb);
          fb(Xb, bb);
          for (let bb = 0, sb = cb; bb < kb; bb++, sb += mb) Mb[bb] !== Xb[bb] && Tb(nb, Wb, sb, Hb, Xb[bb]);
          cb += sb
        }
      }
    }

    function Hb(bb, cb, sb, Wb, ab, Tb, Hb, fb) {
      const Mb = cb * Ub(sb),
        Xb = Hb * cb;
      if (5126 !== sb || ab !== Mb) {
        const kb = new Float32Array(Xb);
        return Ib(bb, Wb, ab, cb, sb, Xb, Tb, ((bb, sb) => {
          for (let Wb = 0; Wb < cb; Wb++) kb[sb + Wb] = bb[Wb]
        })), kb
      }
      if (!(bb instanceof Array || bb instanceof Float32Array) || 0 !== Wb || bb.length !== Xb) {
        if (bb instanceof Array) {
          const cb = Wb / 4;
          return bb.slice(cb, cb + Xb)
        }
        if (ArrayBuffer.isView(bb)) {
          const cb = bb.byteOffset + Wb;
          return 0 !== (3 & cb) && (kb.c.Warn("Float array must be aligned to 4-bytes border"), fb = !0), fb ? new Float32Array(bb.buffer.slice(cb, cb + Xb * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(bb.buffer, cb, Xb)
        }
        return new Float32Array(bb, Wb, Xb)
      }
      return fb ? bb.slice() : bb
    }

    function fb(bb, cb, sb, Wb, ab, Tb, Hb) {
      const fb = Ub(sb),
        Mb = function(bb) {
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
        }(sb),
        Xb = Tb * cb;
      if (Array.isArray(bb)) {
        if (0 !== (3 & Wb) || 0 !== (3 & ab)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const kb = Wb / 4,
          Ub = ab / 4;
        if (kb + (Tb - 1) * Ub + cb > bb.length) throw new Error("Last accessed index is out of bounds.");
        if (Ub < cb) throw new Error("Data stride cannot be smaller than the component size.");
        if (Ub !== cb) {
          const kb = new Mb(Xb);
          return Ib(bb, Wb, ab, cb, sb, Xb, !1, ((bb, sb) => {
            for (let Wb = 0; Wb < cb; Wb++) kb[sb + Wb] = bb[Wb]
          })), kb
        }
        return new Mb(bb.slice(kb, kb + Xb))
      }
      let nb, mb = Wb;
      ArrayBuffer.isView(bb) ? (nb = bb.buffer, mb += bb.byteOffset) : nb = bb;
      if (mb + (Tb - 1) * ab + cb * fb > nb.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const lb = cb * fb;
      if (ab < lb) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (ab !== lb) {
        const bb = new Mb(Xb),
          sb = new Uint8Array(nb, mb),
          kb = new Uint8Array(bb.buffer),
          Wb = cb * fb;
        for (let cb = 0, Ub = 0, Ib = 0; cb < Tb; cb++, Ub += ab, Ib += Wb) kb.set(sb.subarray(Ub, Ub + Wb), Ib);
        return bb
      }
      return 1 !== fb && 0 !== (mb & fb - 1) && (kb.c.Warn("Array must be aligned to border of element size. Data will be copied."), Hb = !0), Hb ? new Mb(nb.slice(mb, mb + Xb * fb)) : new Mb(nb, mb, Xb)
    }

    function Mb(bb, cb, sb, Wb, ab, Tb, Hb, fb) {
      const Mb = cb * Ub(sb),
        Xb = Hb * cb;
      if (fb.length !== Xb) throw new Error("Output length is not valid");
      if (5126 === sb && ab === Mb)
        if (bb instanceof Array) {
          const cb = Wb / 4;
          fb.set(bb, cb)
        } else if (ArrayBuffer.isView(bb)) {
        const cb = bb.byteOffset + Wb;
        if (0 !== (3 & cb)) return kb.c.Warn("Float array must be aligned to 4-bytes border"), void fb.set(new Float32Array(bb.buffer.slice(cb, cb + Xb * Float32Array.BYTES_PER_ELEMENT)));
        const sb = new Float32Array(bb.buffer, cb, Xb);
        fb.set(sb)
      } else {
        const cb = new Float32Array(bb, Wb, Xb);
        fb.set(cb)
      } else Ib(bb, Wb, ab, cb, sb, Xb, Tb, ((bb, sb) => {
        for (let kb = 0; kb < cb; kb++) fb[sb + kb] = bb[kb]
      }))
    }

    function Xb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(bb)) {
        for (let Wb = 0; Wb < cb; Wb++)
          if (bb[sb + Wb] - kb > 65535) return !0;
        return !1
      }
      return 4 === bb.BYTES_PER_ELEMENT
    }

    function nb(bb) {
      const cb = bb.buffer;
      if (cb instanceof ArrayBuffer) return bb;
      const sb = new ArrayBuffer(bb.byteLength);
      return new Uint8Array(sb).set(new Uint8Array(cb, bb.byteOffset, bb.byteLength)), sb
    }
  },
  39298: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => hb,
      f: () => ub,
      k: () => Yb,
      h: () => Db,
      o: () => Eb
    });
    class kb {
      constructor() {
        this.children = []
      }
      isValid(bb) {
        return !0
      }
      process(bb, cb, sb) {
        let kb = "";
        if (this.line) {
          let sb = this.line;
          const Wb = cb.processor;
          if (Wb) {
            Wb.lineProcessor && (sb = Wb.lineProcessor(sb, cb.isFragment, cb.processingContext));
            const kb = cb.processor?.attributeKeywordName ?? "attribute",
              ab = cb.isFragment && cb.processor?.varyingFragmentKeywordName ? cb.processor?.varyingFragmentKeywordName : !cb.isFragment && cb.processor?.varyingVertexKeywordName ? cb.processor?.varyingVertexKeywordName : "varying";
            if (!cb.isFragment && Wb.attributeProcessor && this.line.startsWith(kb)) sb = Wb.attributeProcessor(this.line, bb, cb.processingContext);
            else if (Wb.varyingProcessor && (Wb.varyingCheck?.(this.line, cb.isFragment) || !Wb.varyingCheck && this.line.startsWith(ab))) sb = Wb.varyingProcessor(this.line, cb.isFragment, bb, cb.processingContext);
            else if (Wb.uniformProcessor && Wb.uniformRegexp && Wb.uniformRegexp.test(this.line)) cb.lookForClosingBracketForUniformBuffer || (sb = Wb.uniformProcessor(this.line, cb.isFragment, bb, cb.processingContext));
            else if (Wb.uniformBufferProcessor && Wb.uniformBufferRegexp && Wb.uniformBufferRegexp.test(this.line)) cb.lookForClosingBracketForUniformBuffer || (sb = Wb.uniformBufferProcessor(this.line, cb.isFragment, cb.processingContext), cb.lookForClosingBracketForUniformBuffer = !0);
            else if (Wb.textureProcessor && Wb.textureRegexp && Wb.textureRegexp.test(this.line)) sb = Wb.textureProcessor(this.line, cb.isFragment, bb, cb.processingContext);
            else if ((Wb.uniformProcessor || Wb.uniformBufferProcessor) && this.line.startsWith("uniform") && !cb.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Wb.uniformProcessor && (sb = Wb.uniformProcessor(this.line, cb.isFragment, bb, cb.processingContext)) : Wb.uniformBufferProcessor && (sb = Wb.uniformBufferProcessor(this.line, cb.isFragment, cb.processingContext), cb.lookForClosingBracketForUniformBuffer = !0)
            }
            cb.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (cb.lookForClosingBracketForUniformBuffer = !1, Wb.endOfUniformBufferProcessor && (sb = Wb.endOfUniformBufferProcessor(this.line, cb.isFragment, cb.processingContext)))
          }
          kb += sb + "\n"
        }
        for (const Wb of this.children) kb += Wb.process(bb, cb, sb);
        return this.additionalDefineKey && (bb[this.additionalDefineKey] = this.additionalDefineValue || "true", sb[this.additionalDefineKey] = bb[this.additionalDefineKey]), kb
      }
    }
    class Wb {
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
        for (const cb of bb) {
          if (!cb || "\r" === cb) continue;
          if ("#" === cb[0]) {
            this._lines.push(cb);
            continue
          }
          const bb = cb.trim();
          if (!bb) continue;
          if (bb.startsWith("//")) {
            this._lines.push(cb);
            continue
          }
          const sb = bb.indexOf(";");
          if (-1 === sb) this._lines.push(bb);
          else if (sb === bb.length - 1) bb.length > 1 && this._lines.push(bb);
          else {
            const bb = cb.split(";");
            for (let cb = 0; cb < bb.length; cb++) {
              let sb = bb[cb];
              sb && (sb = sb.trim(), sb && this._lines.push(sb + (cb !== bb.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class ab extends kb {
      process(bb, cb, sb) {
        for (let kb = 0; kb < this.children.length; kb++) {
          const Wb = this.children[kb];
          if (Wb.isValid(bb)) return Wb.process(bb, cb, sb)
        }
        return ""
      }
    }
    class Tb extends kb {
      isValid(bb) {
        return this.testExpression.isTrue(bb)
      }
    }
    class Ub {
      isTrue(bb) {
        return !0
      }
      static postfixToInfix(bb) {
        const cb = [];
        for (const sb of bb)
          if (void 0 === Ub._OperatorPriority[sb]) cb.push(sb);
          else {
            const bb = cb[cb.length - 1],
              kb = cb[cb.length - 2];
            cb.length -= 2, cb.push(`(${kb}${sb}${bb})`)
          } return cb[cb.length - 1]
      }
      static infixToPostfix(bb) {
        const cb = Ub._InfixToPostfixCache.get(bb);
        if (cb) return cb.accessTime = Date.now(), cb.result;
        if (!bb.includes("&&") && !bb.includes("||") && !bb.includes(")") && !bb.includes("(")) return [bb];
        const sb = [];
        let kb = -1;
        const Wb = () => {
            fb = fb.trim(), "" !== fb && (sb.push(fb), fb = "")
          },
          ab = bb => {
            kb < Ub._Stack.length - 1 && (Ub._Stack[++kb] = bb)
          },
          Tb = () => Ub._Stack[kb],
          Ib = () => -1 === kb ? "!!INVALID EXPRESSION!!" : Ub._Stack[kb--];
        let Hb = 0,
          fb = "";
        for (; Hb < bb.length;) {
          const cb = bb.charAt(Hb),
            Mb = Hb < bb.length - 1 ? bb.substring(Hb, 2 + Hb) : "";
          if ("(" === cb) fb = "", ab(cb);
          else if (")" === cb) {
            for (Wb(); - 1 !== kb && "(" !== Tb();) sb.push(Ib());
            Ib()
          } else if (Ub._OperatorPriority[Mb] > 1) {
            for (Wb(); - 1 !== kb && Ub._OperatorPriority[Tb()] >= Ub._OperatorPriority[Mb];) sb.push(Ib());
            ab(Mb), Hb++
          } else fb += cb;
          Hb++
        }
        for (Wb(); - 1 !== kb;) "(" === Tb() ? Ib() : sb.push(Ib());
        return Ub._InfixToPostfixCache.size >= Ub.InfixToPostfixCacheLimitSize && Ub.ClearCache(), Ub._InfixToPostfixCache.set(bb, {
          result: sb,
          accessTime: Date.now()
        }), sb
      }
      static ClearCache() {
        const bb = Array.from(Ub._InfixToPostfixCache.entries()).sort(((bb, cb) => bb[1].accessTime - cb[1].accessTime));
        for (let cb = 0; cb < Ub.InfixToPostfixCacheCleanupSize; cb++) Ub._InfixToPostfixCache.delete(bb[cb][0])
      }
    }
    Ub.InfixToPostfixCacheLimitSize = 5e4, Ub.InfixToPostfixCacheCleanupSize = 25e3, Ub._InfixToPostfixCache = new Map, Ub._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, Ub._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Ib extends Ub {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = bb, this.not = cb
      }
      isTrue(bb) {
        let cb = void 0 !== bb[this.define];
        return this.not && (cb = !cb), cb
      }
    }
    class Hb extends Ub {
      isTrue(bb) {
        return this.leftOperand.isTrue(bb) || this.rightOperand.isTrue(bb)
      }
    }
    class fb extends Ub {
      isTrue(bb) {
        return this.leftOperand.isTrue(bb) && this.rightOperand.isTrue(bb)
      }
    }
    class Mb extends Ub {
      constructor(bb, cb, sb) {
        super(), this.define = bb, this.operand = cb, this.testValue = sb
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(bb) {
        let cb = !1;
        const sb = parseInt(void 0 != bb[this.define] ? bb[this.define] : this.define),
          kb = parseInt(void 0 != bb[this.testValue] ? bb[this.testValue] : this.testValue);
        if (isNaN(sb) || isNaN(kb)) return !1;
        switch (this.operand) {
          case ">":
            cb = sb > kb;
            break;
          case "<":
            cb = sb < kb;
            break;
          case "<=":
            cb = sb <= kb;
            break;
          case ">=":
            cb = sb >= kb;
            break;
          case "==":
            cb = sb === kb;
            break;
          case "!=":
            cb = sb !== kb
        }
        return cb
      }
    }
    var Xb = sb(39296),
      nb = sb(39287);
    const mb = /defined\s*?\((.+?)\)/g,
      lb = /defined\s*?\[(.+?)\]/g,
      Qb = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      eb = /__decl__/,
      Cb = /light\{X\}.(\w*)/g,
      Nb = /\{X\}/g,
      Vb = [],
      Lb = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function ub(bb) {
      bb.processor && bb.processor.initializeShaders && bb.processor.initializeShaders(bb.processingContext)
    }

    function Yb(bb, cb, sb, kb) {
      cb.processor?.preProcessShaderCode && (bb = cb.processor.preProcessShaderCode(bb, cb.isFragment)), Db(bb, cb, (bb => {
        cb.processCodeAfterIncludes && (bb = cb.processCodeAfterIncludes(cb.isFragment ? "fragment" : "vertex", bb, cb.defines));
        const Wb = function(bb, cb, sb) {
          let kb = function(bb, cb) {
            if (cb.processor?.noPrecision) return bb;
            const sb = cb.shouldUseHighPrecisionShader; - 1 === bb.indexOf("precision highp float") ? bb = sb ? "precision highp float;\n" + bb : "precision mediump float;\n" + bb : sb || (bb = bb.replace("precision highp float", "precision mediump float"));
            return bb
          }(bb, cb);
          if (!cb.processor) return kb;
          if (0 === cb.processor.shaderLanguage && -1 !== kb.indexOf("#version 3") && (kb = kb.replace("#version 300 es", ""), !cb.processor.parseGLES3)) return kb;
          const Wb = cb.defines,
            ab = Pb(cb, sb);
          cb.processor.preProcessor && (kb = cb.processor.preProcessor(kb, Wb, ab, cb.isFragment, cb.processingContext));
          const Tb = {};
          kb = yb(kb, ab, cb, Tb), cb.processor.postProcessor && (kb = cb.processor.postProcessor(kb, Wb, cb.isFragment, cb.processingContext, sb ? {
            drawBuffersExtensionDisabled: !sb.getCaps().drawBuffersExtension
          } : {}, ab, Tb));
          sb?._features.needShaderCodeInlining && (kb = sb.inlineShaderCode(kb));
          return kb
        }(bb, cb, kb);
        sb(Wb, bb)
      }))
    }

    function hb(bb, cb, sb) {
      return sb.processor && sb.processor.finalizeShaders ? sb.processor.finalizeShaders(bb, cb, sb.processingContext) : {
        vertexCode: bb,
        fragmentCode: cb
      }
    }

    function Jb(bb) {
      const cb = /defined\((.+)\)/.exec(bb);
      if (cb && cb.length) return new Ib(cb[1].trim(), "!" === bb[0]);
      const sb = ["==", "!=", ">=", "<=", "<", ">"];
      let kb = "",
        Wb = 0;
      for (kb of sb)
        if (Wb = bb.indexOf(kb), Wb > -1) break;
      if (-1 === Wb) return new Ib(bb);
      const ab = bb.substring(0, Wb).trim(),
        Tb = bb.substring(Wb + kb.length).trim();
      return new Mb(ab, kb, Tb)
    }

    function gb(bb, cb) {
      const sb = new Tb,
        kb = bb.substring(0, cb);
      let Wb = bb.substring(cb);
      return Wb = Wb.substring(0, (Wb.indexOf("//") + 1 || Wb.length + 1) - 1).trim(), sb.testExpression = "#ifdef" === kb ? new Ib(Wb) : "#ifndef" === kb ? new Ib(Wb, !0) : function(bb) {
        bb = bb.replace(mb, "defined[$1]");
        const cb = Ub.infixToPostfix(bb),
          sb = [];
        for (const Wb of cb)
          if ("||" !== Wb && "&&" !== Wb) sb.push(Wb);
          else if (sb.length >= 2) {
          let bb = sb[sb.length - 1],
            cb = sb[sb.length - 2];
          sb.length -= 2;
          const kb = "&&" == Wb ? new fb : new Hb;
          "string" === typeof bb && (bb = bb.replace(lb, "defined($1)")), "string" === typeof cb && (cb = cb.replace(lb, "defined($1)")), kb.leftOperand = "string" === typeof cb ? Jb(cb) : cb, kb.rightOperand = "string" === typeof bb ? Jb(bb) : bb, sb.push(kb)
        }
        let kb = sb[sb.length - 1];
        return "string" === typeof kb && (kb = kb.replace(lb, "defined($1)")), "string" === typeof kb ? Jb(kb) : kb
      }(Wb), sb
    }

    function Bb(bb, cb, sb, Wb) {
      let ab;
      for (; tb(bb, sb, Wb);) {
        ab = bb.currentLine;
        const Tb = ab.substring(0, 5).toLowerCase();
        if ("#else" === Tb) {
          const sb = new kb;
          return cb.children.push(sb), void tb(bb, sb, Wb)
        }
        if ("#elif" === Tb) {
          const bb = gb(ab, 5);
          cb.children.push(bb), sb = bb
        }
      }
    }

    function tb(bb, cb, sb) {
      for (; bb.canRead;) {
        bb.lineIndex++;
        const Wb = bb.currentLine;
        if (Wb.indexOf("#") >= 0) {
          const kb = Lb.exec(Wb);
          if (kb && kb.length) {
            switch (kb[0]) {
              case "#ifdef": {
                const kb = new ab;
                cb.children.push(kb);
                const Tb = gb(Wb, 6);
                kb.children.push(Tb), Bb(bb, kb, Tb, sb);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const kb = new ab;
                cb.children.push(kb);
                const Tb = gb(Wb, 7);
                kb.children.push(Tb), Bb(bb, kb, Tb, sb);
                break
              }
              case "#if": {
                const kb = new ab,
                  Tb = gb(Wb, 3);
                cb.children.push(kb), kb.children.push(Tb), Bb(bb, kb, Tb, sb);
                break
              }
            }
            continue
          }
        }
        const Tb = new kb;
        if (Tb.line = Wb, cb.children.push(Tb), "#" === Wb[0] && "d" === Wb[1]) {
          const bb = Wb.replace(";", "").split(" ");
          Tb.additionalDefineKey = bb[1], 3 === bb.length && (Tb.additionalDefineValue = bb[2])
        }
      }
      return !1
    }

    function yb(bb, cb, sb, ab) {
      const Tb = new kb,
        Ub = new Wb;
      return Ub.lineIndex = -1, Ub.lines = bb.split("\n"), tb(Ub, Tb, ab), Tb.process(cb, sb, ab)
    }

    function Pb(bb, cb) {
      const sb = bb.defines,
        kb = {};
      for (const Wb of sb) {
        const bb = Wb.replace("#define", "").replace(";", "").trim().split(" ");
        kb[bb[0]] = bb.length > 1 ? bb[1] : ""
      }
      return 0 === bb.processor?.shaderLanguage && (kb.GL_ES = "true"), kb.__VERSION__ = bb.version, kb[bb.platformName] = "true", (0, nb.k)(kb, cb?.isNDCHalfZRange, cb?.Dsb, cb?.useExactSrgbConversions), kb
    }

    function Db(bb, cb, sb) {
      let kb;
      for (Vb.length = 0; null !== (kb = Qb.exec(bb));) Vb.push(kb);
      let Wb = [bb],
        ab = !1;
      for (const Ub of Vb) {
        let bb = Ub[1];
        if (-1 !== bb.indexOf("__decl__") && (bb = bb.replace(eb, ""), cb.supportsUniformBuffers && (bb = bb.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), bb += "Declaration"), !cb.includesShadersStore[bb]) {
          const kb = cb.shadersRepository + "ShadersInclude/" + bb + ".fx";
          return void Eb.loadFile(kb, (kb => {
            cb.includesShadersStore[bb] = kb, Db(Wb.join(""), cb, sb)
          }))
        } {
          let sb = cb.includesShadersStore[bb];
          if (Ub[2]) {
            const bb = Ub[3].split(",");
            for (let cb = 0; cb < bb.length; cb += 2) {
              const kb = new RegExp(bb[cb], "g"),
                Wb = bb[cb + 1];
              sb = sb.replace(kb, Wb)
            }
          }
          if (Ub[4]) {
            const bb = Ub[5];
            if (-1 !== bb.indexOf("..")) {
              const kb = bb.split(".."),
                Wb = parseInt(kb[0]);
              let ab = parseInt(kb[1]),
                Tb = sb.slice(0);
              sb = "", isNaN(ab) && (ab = cb.indexParameters[kb[1]]);
              for (let bb = Wb; bb < ab; bb++) cb.supportsUniformBuffers || (Tb = Tb.replace(Cb, ((bb, cb) => cb + "{X}"))), sb += Tb.replace(Nb, bb.toString()) + "\n"
            } else cb.supportsUniformBuffers || (sb = sb.replace(Cb, ((bb, cb) => cb + "{X}"))), sb = sb.replace(Nb, bb)
          }
          const kb = [];
          for (const bb of Wb) {
            const cb = bb.split(Ub[0]);
            for (let bb = 0; bb < cb.length - 1; bb++) kb.push(cb[bb]), kb.push(sb);
            kb.push(cb[cb.length - 1])
          }
          Wb = kb, ab = ab || sb.indexOf("#include<") >= 0 || sb.indexOf("#include <") >= 0
        }
      }
      Vb.length = 0;
      const Tb = Wb.join("");
      ab ? Db(Tb.toString(), cb, sb) : sb(Tb)
    }
    const Eb = {
      loadFile: (bb, cb, sb, kb, Wb, ab) => {
        throw (0, Xb.i)("FileTools")
      }
    }
  },
  39287: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      g: () => ab,
      k: () => Ub,
      m: () => Tb,
      q: () => Ib
    });
    var kb = sb(39296);
    const Wb = {};

    function ab(bb, cb) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (cb ? cb + "\n" : "") + bb
    }

    function Tb(bb, cb, sb, ab, Tb, Ub, Ib) {
      const Hb = Ib || Wb.loadFile;
      if (!Hb) throw (0, kb.i)("FileTools");
      return Hb(bb, cb, sb, ab, Tb, Ub)
    }

    function Ub(bb, cb, sb, kb) {
      if (bb) return cb ? bb.IS_NDC_HALF_ZRANGE = "" : delete bb.IS_NDC_HALF_ZRANGE, sb ? bb.USE_REVERSE_DEPTHBUFFER = "" : delete bb.USE_REVERSE_DEPTHBUFFER, void(kb ? bb.USE_EXACT_SRGB_CONVERSIONS = "" : delete bb.USE_EXACT_SRGB_CONVERSIONS);
      {
        let bb = "";
        return cb && (bb += "#define IS_NDC_HALF_ZRANGE"), sb && (bb && (bb += "\n"), bb += "#define USE_REVERSE_DEPTHBUFFER"), kb && (bb && (bb += "\n"), bb += "#define USE_EXACT_SRGB_CONVERSIONS"), bb
      }
    }

    function Ib(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        kb = arguments.length > 3 ? arguments[3] : void 0;
      switch (bb) {
        case 3: {
          const bb = new Int8Array(cb);
          return kb && bb.set(new Int8Array(kb)), bb
        }
        case 0: {
          const bb = new Uint8Array(cb);
          return kb && bb.set(new Uint8Array(kb)), bb
        }
        case 4: {
          const bb = "number" !== typeof cb ? new Int16Array(cb) : new Int16Array(sb ? cb / 2 : cb);
          return kb && bb.set(new Int16Array(kb)), bb
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const bb = "number" !== typeof cb ? new Uint16Array(cb) : new Uint16Array(sb ? cb / 2 : cb);
          return kb && bb.set(new Uint16Array(kb)), bb
        }
        case 6: {
          const bb = "number" !== typeof cb ? new Int32Array(cb) : new Int32Array(sb ? cb / 4 : cb);
          return kb && bb.set(new Int32Array(kb)), bb
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const bb = "number" !== typeof cb ? new Uint32Array(cb) : new Uint32Array(sb ? cb / 4 : cb);
          return kb && bb.set(new Uint32Array(kb)), bb
        }
        case 1: {
          const bb = "number" !== typeof cb ? new Float32Array(cb) : new Float32Array(sb ? cb / 4 : cb);
          return kb && bb.set(new Float32Array(kb)), bb
        }
      }
      const Wb = new Uint8Array(cb);
      return kb && Wb.set(new Uint8Array(kb)), Wb
    }
  },
  39296: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hb,
      d: () => fb,
      e: () => Ib,
      i: () => Wb
    });
    const kb = {};

    function Wb(bb) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !kb[bb]) return kb[bb] = !0, `${bb} needs to be imported before as it contains a side-effect required by your code.`
    }
    const ab = {};
    let Tb = !1,
      Ub = 0;

    function Ib(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const kb = function() {
        if ((sb || Tb) && 0 === Ub) {
          const sb = `${bb}.${cb}`;
          ab[sb] || (ab[sb] = !0, console.warn(`[Babylon.js] ${sb}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return kb.__isSideEffectStub = !0, kb
    }

    function Hb(bb) {
      return !!bb && !bb.__isSideEffectStub
    }

    function fb(bb, cb) {
      return {
        get() {},
        set(bb) {
          Object.defineProperty(this, cb, {
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
  39278: (bb, cb, sb) => {
    function kb() {
      return "undefined" !== typeof window
    }

    function Wb() {
      return "undefined" !== typeof navigator
    }

    function ab() {
      return "undefined" !== typeof document
    }

    function Tb(bb) {
      let cb = "",
        sb = bb.firstChild;
      for (; sb;) 3 === sb.nodeType && (cb += sb.textContent), sb = sb.nextSibling;
      return cb
    }
    sb.d(cb, {
      d: () => Tb,
      f: () => ab,
      h: () => Wb,
      j: () => kb
    })
  },
  39482: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      c: () => Wb,
      f: () => ab
    });
    class kb extends Error {}
    kb._setPrototypeOf = Object.setPrototypeOf || ((bb, cb) => (bb.__proto__ = cb, bb));
    const Wb = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class ab extends kb {
      constructor(bb, cb, sb) {
        super(bb), this.errorCode = cb, this.innerError = sb, this.name = "RuntimeError", kb._setPrototypeOf(this, ab.prototype)
      }
    }
  },
  39466: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Pb,
      e: () => Nb,
      g: () => gb,
      i: () => tb,
      l: () => hb,
      m: () => ub,
      n: () => Yb,
      o: () => Gb,
      r: () => Jb,
      s: () => Vb
    });
    var kb = sb(39475),
      Wb = sb(39278),
      ab = sb(36683);
    class Tb {}
    Tb.FilesToLoad = {};
    var Ub = sb(39482),
      Ib = sb(39487),
      Hb = sb(36677),
      fb = sb(39287),
      Mb = sb(39298),
      Xb = sb(38284),
      nb = sb(39307),
      mb = sb(39495);
    const lb = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class Qb extends Ub.f {
      constructor(bb, cb) {
        super(bb, Ub.c.LoadFileError), this.name = "LoadFileError", Ub.b._setPrototypeOf(this, Qb.prototype), cb instanceof kb.c ? this.request = cb : this.file = cb
      }
    }
    class eb extends Ub.f {
      constructor(bb, cb) {
        super(bb, Ub.c.RequestFileError), this.request = cb, this.name = "RequestFileError", Ub.b._setPrototypeOf(this, eb.prototype)
      }
    }
    class Cb extends Ub.f {
      constructor(bb, cb) {
        super(bb, Ub.c.ReadFileError), this.file = cb, this.name = "ReadFileError", Ub.b._setPrototypeOf(this, Cb.prototype)
      }
    }
    const Nb = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (sb, kb, Wb) => 0 !== kb.status || Wb >= bb || -1 !== sb.indexOf("file:") ? -1 : Math.pow(2, Wb) * cb
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: bb => bb,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: bb => bb,
        CleanUrl: bb => bb = bb.replace(/#/gm, "%23")
      },
      Vb = (bb, cb) => {
        if ((!bb || 0 !== bb.indexOf("data:")) && Nb.CorsBehavior)
          if ("string" === typeof Nb.CorsBehavior || Nb.CorsBehavior instanceof String) cb.crossOrigin = Nb.CorsBehavior;
          else {
            const sb = Nb.CorsBehavior(bb);
            sb && (cb.crossOrigin = sb)
          }
      },
      Lb = {
        getRequiredSize: null
      },
      ub = function(bb, cb, sb, Wb) {
        let ab, Ub = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          fb = arguments.length > 5 ? arguments[5] : void 0,
          Mb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Hb.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Mb?._features.forceBitmapOverHTMLImageElement) return sb("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Mb?._features.forceBitmapOverHTMLImageElement && "string" !== typeof bb && "undefined" !== typeof Blob) {
          let kb;
          if (bb instanceof Blob) kb = bb;
          else {
            const cb = bb instanceof ArrayBuffer ? bb : (0, mb.m)(bb);
            kb = new Blob([cb], {
              type: Ub
            })
          }
          return Mb.createImageBitmap(kb, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...fb
          }).then(cb).catch((cb => {
            sb && sb("Error while trying to load image: " + bb, cb)
          })), null
        }
        let Xb = !1;
        if (bb instanceof ArrayBuffer || ArrayBuffer.isView(bb))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let cb;
            cb = bb instanceof ArrayBuffer ? bb : (0, mb.m)(bb), ab = URL.createObjectURL(new Blob([cb], {
              type: Ub
            })), Xb = !0
          } else ab = `data:${Ub};base64,` + (0, Ib.k)(bb);
        else bb instanceof Blob ? (ab = URL.createObjectURL(bb), Xb = !0) : (ab = Nb.CleanUrl(bb), ab = Nb.PreprocessUrl(ab));
        const nb = cb => {
          if (sb) {
            const kb = ab || bb.toString();
            sb(`Error while trying to load image: ${0===kb.indexOf("http")||kb.length<=128?kb:kb.slice(0,128)+"..."}`, cb)
          }
        };
        if (Mb?._features.forceBitmapOverHTMLImageElement) return hb(ab, (kb => {
          Mb.createImageBitmap(new Blob([kb], {
            type: Ub
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...fb
          }).then((bb => {
            cb(bb), Xb && URL.revokeObjectURL(ab)
          })).catch((cb => {
            sb && sb("Error while trying to load image: " + bb, cb)
          }))
        }), void 0, Wb || void 0, !0, ((bb, cb) => {
          nb(cb)
        })), null;
        const lb = new Image;
        if (Lb.getRequiredSize) {
          const cb = Lb.getRequiredSize(bb);
          cb.width && (lb.width = cb.width), cb.height && (lb.height = cb.height)
        }
        Vb(ab, lb);
        const Qb = [],
          eb = () => {
            for (const bb of Qb) bb.target.removeEventListener(bb.name, bb.handler);
            Qb.length = 0
          };
        Qb.push({
          target: lb,
          name: "load",
          handler: () => {
            eb(), cb(lb), Xb && lb.src && URL.revokeObjectURL(lb.src)
          }
        }), Qb.push({
          target: lb,
          name: "error",
          handler: bb => {
            eb(), nb(bb), Xb && lb.src && URL.revokeObjectURL(lb.src)
          }
        }), Qb.push({
          target: document,
          name: "securitypolicyviolation",
          handler: bb => {
            if (bb.blockedURI !== lb.src || "lm" === bb.disposition) return;
            eb();
            const cb = new Error(`CSP violation of policy ${bb.effectiveDirective} ${bb.blockedURI}. Current policy is ${bb.originalPolicy}`);
            Hb.d.UseFallbackTexture = !1, nb(cb), Xb && lb.src && URL.revokeObjectURL(lb.src), lb.src = ""
          }
        }), (() => {
          for (const bb of Qb) bb.target.addEventListener(bb.name, bb.handler)
        })();
        const Cb = "blob:" === ab.substring(0, 5),
          ub = "data:" === ab.substring(0, 5),
          Yb = () => {
            Cb || ub || !kb.c.IsCustomRequestAvailable ? lb.src = ab : hb(ab, ((bb, cb, sb) => {
              const kb = new Blob([bb], {
                  type: !Ub && sb ? sb : Ub
                }),
                Wb = URL.createObjectURL(kb);
              Xb = !0, lb.src = Wb
            }), void 0, Wb || void 0, !0, ((bb, cb) => {
              nb(cb)
            }))
          },
          Jb = () => {
            Wb && Wb.loadImage(ab, lb)
          };
        if (!Cb && !ub && Wb && Wb.enableTexturesOffline) Wb.open(Jb, Yb);
        else {
          if (-1 !== ab.indexOf("file:")) {
            const bb = decodeURIComponent(ab.substring(5).toLowerCase());
            if (Tb.FilesToLoad[bb] && "undefined" !== typeof URL) {
              try {
                let cb;
                try {
                  cb = URL.createObjectURL(Tb.FilesToLoad[bb])
                } catch (gb) {
                  cb = URL.createObjectURL(Tb.FilesToLoad[bb])
                }
                lb.src = cb, Xb = !0
              } catch (Bb) {
                lb.src = ""
              }
              return lb
            }
          }
          Yb()
        }
        return lb
      },
      Yb = (bb, cb, sb, kb, Wb) => {
        const Tb = new FileReader,
          Ub = {
            onCompleteObservable: new ab.c,
            abort: () => Tb.abort()
          };
        return Tb.onloadend = () => Ub.onCompleteObservable.notifyObservers(Ub), Wb && (Tb.onerror = () => {
          Wb(new Cb(`Unable to read ${bb.name}`, bb))
        }), Tb.onload = bb => {
          cb(bb.target.result)
        }, sb && (Tb.onprogress = sb), kb ? Tb.readAsArrayBuffer(bb) : Tb.readAsText(bb), Ub
      },
      hb = (bb, cb, sb, kb, Wb, Ib, Hb) => {
        if (bb.name) return Yb(bb, cb, sb, Wb, Ib ? bb => {
          Ib(void 0, bb)
        } : void 0);
        const fb = bb;
        if (-1 !== fb.indexOf("file:")) {
          let bb = decodeURIComponent(fb.substring(5).toLowerCase());
          0 === bb.indexOf("./") && (bb = bb.substring(2));
          const kb = Tb.FilesToLoad[bb];
          if (kb) return Yb(kb, cb, sb, Wb, Ib ? bb => Ib(void 0, new Qb(bb.message, bb.file)) : void 0)
        }
        const {
          match: Mb,
          type: mb
        } = yb(fb);
        if (Mb) {
          const bb = {
            onCompleteObservable: new ab.c,
            abort: () => () => {}
          };
          try {
            const bb = Wb ? Pb(fb) : Db(fb);
            cb(bb, void 0, mb)
          } catch (Ub) {
            Ib ? Ib(void 0, Ub) : Xb.c.Error(Ub.message || "Failed to parse the Data URL")
          }
          return nb.c.SetImmediate((() => {
            bb.onCompleteObservable.notifyObservers(bb)
          })), bb
        }
        return Jb(fb, ((bb, sb) => {
          cb(bb, sb?.responseURL, sb?.getResponseHeader("content-type"))
        }), sb, kb, Wb, Ib ? bb => {
          Ib(bb.request, new Qb(bb.message, bb.request))
        } : void 0, Hb)
      },
      Jb = (bb, cb, sb, Tb, Ub, Ib, fb) => {
        null !== Tb && (Tb ?? (Tb = Hb.d.LastCreatedScene?.offlineProvider)), bb = Nb.CleanUrl(bb), bb = Nb.PreprocessUrl(bb);
        const Mb = Nb.BaseUrl + bb;
        let nb = !1;
        const mb = {
            onCompleteObservable: new ab.c,
            abort: () => nb = !0
          },
          lb = () => {
            let bb, ab = new kb.c,
              Tb = null;
            const Hb = () => {
              ab && (sb && ab.removeEventListener("progress", sb), bb && ab.removeEventListener("readystatechange", bb), ab.removeEventListener("loadend", lb))
            };
            let lb = () => {
              Hb(), mb.onCompleteObservable.notifyObservers(mb), mb.onCompleteObservable.clear(), sb = void 0, bb = null, lb = null, Ib = void 0, fb = void 0, cb = void 0
            };
            mb.abort = () => {
              nb = !0, lb && lb(), ab && ab.readyState !== (XMLHttpRequest.DONE || 4) && ab.abort(), null !== Tb && (clearTimeout(Tb), Tb = null), ab = null
            };
            const Qb = bb => {
                const cb = bb.message || "Unknown error";
                Ib && ab ? Ib(new eb(cb, ab)) : Xb.c.Error(cb)
              },
              Cb = Xb => {
                if (ab) {
                  if (ab.open("GET", Mb), fb) try {
                    fb(ab)
                  } catch (mb) {
                    return void Qb(mb)
                  }
                  Ub && (ab.responseType = "arraybuffer"), sb && ab.addEventListener("progress", sb), lb && ab.addEventListener("loadend", lb), bb = () => {
                    if (!nb && ab && ab.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (bb && ab.removeEventListener("readystatechange", bb), ab.status >= 200 && ab.status < 300 || 0 === ab.status && (!(0, Wb.j)() || Bb())) {
                        const bb = Ub ? ab.response : ab.responseText;
                        if (null !== bb) {
                          try {
                            cb && cb(bb, ab)
                          } catch (mb) {
                            Qb(mb)
                          }
                          return
                        }
                      }
                      const sb = Nb.DefaultRetryStrategy;
                      if (sb) {
                        const bb = sb(Mb, ab, Xb);
                        if (-1 !== bb) return Hb(), ab = new kb.c, void(Tb = setTimeout((() => Cb(Xb + 1)), bb))
                      }
                      const fb = new eb("Error status: " + ab.status + " " + ab.statusText + " - Unable to load " + Mb, ab);
                      Ib && Ib(fb)
                    }
                  }, ab.addEventListener("readystatechange", bb), ab.send()
                }
              };
            Cb(0)
          };
        if (Tb && Tb.enableSceneOffline && !bb.startsWith("blob:")) {
          const kb = bb => {
              bb && bb.status > 400 ? Ib && Ib(bb) : lb()
            },
            Wb = () => {
              Tb && Tb.loadFile(Nb.BaseUrl + bb, (bb => {
                !nb && cb && cb(bb), mb.onCompleteObservable.notifyObservers(mb)
              }), sb ? bb => {
                !nb && sb && sb(bb)
              } : void 0, kb, Ub)
            };
          Tb.open(Wb, kb)
        } else lb();
        return mb
      },
      gb = bb => {
        const {
          match: cb,
          type: sb
        } = yb(bb);
        if (cb) return sb || void 0;
        const kb = bb.lastIndexOf(".");
        switch (bb.substring(kb + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "fY":
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
      Bb = () => "undefined" !== typeof location && "file:" === location.protocol,
      tb = bb => lb.test(bb),
      yb = bb => {
        const cb = lb.exec(bb);
        if (null === cb || 0 === cb.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: cb[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Pb(bb) {
      return (0, Ib.e)(bb.split(",")[1])
    }
    const Db = bb => (0, Ib.i)(bb.split(",")[1]);
    let Eb;
    const ib = (bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) => {
      Eb = {
        DecodeBase64UrlToBinary: bb,
        DecodeBase64UrlToString: cb,
        DefaultRetryStrategy: sb.DefaultRetryStrategy,
        BaseUrl: sb.BaseUrl,
        CorsBehavior: sb.CorsBehavior,
        PreprocessUrl: sb.PreprocessUrl,
        IsBase64DataUrl: kb,
        IsFileURL: Wb,
        LoadFile: ab,
        LoadImage: Tb,
        ReadFile: Ub,
        RequestFile: Ib,
        SetCorsBehavior: Hb
      }, Object.defineProperty(Eb, "DefaultRetryStrategy", {
        get: function() {
          return sb.DefaultRetryStrategy
        },
        set: function(bb) {
          sb.DefaultRetryStrategy = bb
        }
      }), Object.defineProperty(Eb, "BaseUrl", {
        get: function() {
          return sb.BaseUrl
        },
        set: function(bb) {
          sb.BaseUrl = bb
        }
      }), Object.defineProperty(Eb, "PreprocessUrl", {
        get: function() {
          return sb.PreprocessUrl
        },
        set: function(bb) {
          sb.PreprocessUrl = bb
        }
      }), Object.defineProperty(Eb, "CorsBehavior", {
        get: function() {
          return sb.CorsBehavior
        },
        set: function(bb) {
          sb.CorsBehavior = bb
        }
      })
    };
    let Ob = !1;

    function Gb() {
      Ob || (Ob = !0, ib(Pb, Db, Nb, tb, Bb, hb, ub, Yb, Jb, Vb), fb.c.loadFile = hb, fb.c.loadImage = ub, Mb.o.loadFile = hb)
    }
  },
  39503: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub,
      e: () => ab,
      f: () => Tb
    });
    let kb = null;

    function Wb() {
      if (kb) return kb;
      const bb = new ArrayBuffer(4),
        cb = new Float32Array(bb),
        sb = new Uint32Array(bb),
        Wb = new Uint32Array(512),
        ab = new Uint32Array(512);
      for (let kb = 0; kb < 256; ++kb) {
        const bb = kb - 127;
        bb < -24 ? (Wb[kb] = 0, Wb[256 | kb] = 32768, ab[kb] = 24, ab[256 | kb] = 24) : bb < -14 ? (Wb[kb] = 1024 >> -bb - 14, Wb[256 | kb] = 1024 >> -bb - 14 | 32768, ab[kb] = -bb - 1, ab[256 | kb] = -bb - 1) : bb <= 15 ? (Wb[kb] = bb + 15 << 10, Wb[256 | kb] = bb + 15 << 10 | 32768, ab[kb] = 13, ab[256 | kb] = 13) : bb < 128 ? (Wb[kb] = 31744, Wb[256 | kb] = 64512, ab[kb] = 24, ab[256 | kb] = 24) : (Wb[kb] = 31744, Wb[256 | kb] = 64512, ab[kb] = 13, ab[256 | kb] = 13)
      }
      const Tb = new Uint32Array(2048),
        Ub = new Uint32Array(64),
        Ib = new Uint32Array(64);
      for (let kb = 1; kb < 1024; ++kb) {
        let bb = kb << 13,
          cb = 0;
        for (; 0 === (8388608 & bb);) bb <<= 1, cb -= 8388608;
        bb &= -8388609, cb += 947912704, Tb[kb] = bb | cb
      }
      for (let kb = 1024; kb < 2048; ++kb) Tb[kb] = 939524096 + (kb - 1024 << 13);
      for (let kb = 1; kb < 31; ++kb) Ub[kb] = kb << 23;
      Ub[31] = 1199570944, Ub[32] = 2147483648;
      for (let kb = 33; kb < 63; ++kb) Ub[kb] = 2147483648 + (kb - 32 << 23);
      Ub[63] = 3347054592;
      for (let kb = 1; kb < 64; ++kb) 32 !== kb && (Ib[kb] = 1024);
      return kb = {
        floatView: cb,
        uint32View: sb,
        baseTable: Wb,
        shiftTable: ab,
        mantissaTable: Tb,
        exponentTable: Ub,
        offsetTable: Ib
      }, kb
    }
    const ab = 65504;

    function Tb(bb) {
      const cb = Wb();
      cb.floatView[0] = bb;
      const sb = cb.uint32View[0],
        kb = sb >> 23 & 511;
      return cb.baseTable[kb] + ((8388607 & sb) >> cb.shiftTable[kb])
    }

    function Ub(bb) {
      const cb = Wb();
      return cb.uint32View[0] = cb.mantissaTable[cb.offsetTable[bb >> 10] + (1023 & bb)] + cb.exponentTable[bb >> 10], cb.floatView[0]
    }
  },
  39487: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      i: () => Wb,
      k: () => kb
    });
    const kb = bb => {
        const cb = ArrayBuffer.isView(bb) ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : new Uint8Array(bb);
        return "function" === typeof cb.toBase64 ? cb.toBase64() : function(bb) {
          const cb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let sb, kb, Wb, ab, Tb, Ub, Ib, Hb = "",
            fb = 0;
          for (; fb < bb.length;) sb = bb[fb++], kb = fb < bb.length ? bb[fb++] : Number.NaN, Wb = fb < bb.length ? bb[fb++] : Number.NaN, ab = sb >> 2, Tb = (3 & sb) << 4 | kb >> 4, Ub = (15 & kb) << 2 | Wb >> 6, Ib = 63 & Wb, isNaN(kb) ? Ub = Ib = 64 : isNaN(Wb) && (Ib = 64), Hb += cb.charAt(ab) + cb.charAt(Tb) + cb.charAt(Ub) + cb.charAt(Ib);
          return Hb
        }(cb)
      },
      Wb = bb => atob(bb),
      ab = bb => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(bb).buffer : function(bb) {
        const cb = Wb(bb),
          sb = cb.length,
          kb = new Uint8Array(new ArrayBuffer(sb));
        for (let Wb = 0; Wb < sb; Wb++) kb[Wb] = cb.charCodeAt(Wb);
        return kb.buffer
      }(bb)
  },
  39307: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      d: () => Tb
    });
    let kb = [];
    class Wb {
      static SetImmediate(bb) {
        0 === kb.length && setTimeout((() => {
          const bb = kb;
          kb = [];
          for (const cb of bb) cb()
        }), 1), kb.push(bb)
      }
    }

    function ab(bb, cb, sb) {
      try {
        if (bb()) return cb(), !0
      } catch (kb) {
        return sb?.(kb), !0
      }
      return !1
    }
    const Tb = function(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Tb = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && ab(bb, cb, sb)) return null;
      const Ub = setInterval((() => {
        ab(bb, cb, sb) ? clearInterval(Ub) : (Wb -= kb, Wb < 0 && (clearInterval(Ub), sb?.(new Error("Operation timed out after maximum retries. " + (Tb || "")), !0)))
      }), kb);
      return () => clearInterval(Ub)
    }
  },
  39475: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(kb.CustomRequestHeaders).length > 0 || kb.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(bb) {
        return bb = (bb = bb.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(bb) {
        return kb.SkipRequestModificationForBabylonCDN && (bb.includes("preview.babylonjs.com") || bb.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(bb) {
        const cb = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (kb._ShouldSkipRequestModifications(bb)) return {
          url: bb,
          headers: cb
        };
        for (const Wb in kb.CustomRequestHeaders) {
          const bb = kb.CustomRequestHeaders[Wb];
          bb && (cb[Wb] = bb)
        }
        const sb = {
          setRequestHeader: (bb, sb) => {
            cb[bb] = sb
          }
        };
        for (const Wb of kb.CustomRequestModifiers) {
          if (kb._ShouldSkipRequestModifications(bb)) break;
          const cb = Wb(sb, bb);
          "string" === typeof cb && (bb = cb)
        }
        return {
          url: bb,
          headers: cb
        }
      }
      static async FetchAsync(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sb = cb.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Wb,
            headers: ab
          } = kb._CollectCustomizations(kb._CleanUrl(bb), cb.headers ?? {});
          return await fetch(Wb, {
            method: sb,
            headers: ab,
            body: cb.body ?? void 0
          })
        }
        return await new Promise(((Wb, ab) => {
          const Tb = new kb;
          Tb.responseType = "arraybuffer", Tb.addEventListener("readystatechange", (() => {
            if (4 === Tb.readyState)
              if (Tb.status >= 200 && Tb.status < 300) {
                const bb = "undefined" !== typeof Headers ? new Headers : void 0,
                  cb = Tb.getResponseHeader("Content-Type");
                cb && bb && bb.set("Content-Type", cb), "undefined" !== typeof Response ? Wb(new Response(Tb.response, {
                  status: Tb.status,
                  statusText: Tb.statusText,
                  headers: bb
                })) : Wb({
                  ok: !0,
                  status: Tb.status,
                  statusText: Tb.statusText,
                  headers: {
                    get: bb => Tb.getResponseHeader(bb)
                  },
                  arrayBuffer: async () => await Promise.resolve(Tb.response)
                })
              } else ab(new Error(`HTTP ${Tb.status} loading '${Tb.requestURL}': ${Tb.statusText}`))
          })), Tb.open(sb, bb, cb.headers), Tb.send(cb.body ?? null)
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
      addEventListener(bb, cb, sb) {
        this._xhr.addEventListener(bb, cb, sb)
      }
      removeEventListener(bb, cb, sb) {
        this._xhr.removeEventListener(bb, cb, sb)
      }
      abort() {
        this._xhr.abort()
      }
      send(bb) {
        this._xhr.send(bb)
      }
      open(bb, cb, sb) {
        const {
          url: Wb,
          headers: ab
        } = kb._CollectCustomizations(cb, sb);
        this._requestURL = kb._CleanUrl(Wb), this._xhr.open(bb, this._requestURL, !0);
        for (const kb in ab) this._xhr.setRequestHeader(kb, ab[kb])
      }
      setRequestHeader(bb, cb) {
        this._xhr.setRequestHeader(bb, cb)
      }
      getResponseHeader(bb) {
        return this._xhr.getResponseHeader(bb)
      }
    }
    kb.CustomRequestHeaders = {}, kb.CustomRequestModifiers = new Array, kb.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);