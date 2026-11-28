export const id = 290;
export const ids = [290];
export const modules = {
  41740: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ub,
      g: () => Ob,
      i: () => lb,
      m: () => tb,
      q: () => Lb,
      r: () => gb,
      s: () => Ib
    });
    var eb = Mb(39971),
      Hb = Mb(41742);

    function pb(bb, wb, Mb, eb) {
      switch (wb) {
        case 5120: {
          let wb = bb.getInt8(Mb);
          return eb && (wb = Math.max(wb / 127, -1)), wb
        }
        case 5121: {
          let wb = bb.getUint8(Mb);
          return eb && (wb /= 255), wb
        }
        case 5122: {
          let wb = bb.getInt16(Mb, !0);
          return eb && (wb = Math.max(wb / 32767, -1)), wb
        }
        case 5123: {
          let wb = bb.getUint16(Mb, !0);
          return eb && (wb /= 65535), wb
        }
        case 5131:
          return (0, Hb.c)(bb.getUint16(Mb, !0));
        case 5124:
          return bb.getInt32(Mb, !0);
        case 5125:
          return bb.getUint32(Mb, !0);
        case 5126:
          return bb.getFloat32(Mb, !0);
        default:
          throw new Error(`Invalid component type ${wb}`)
      }
    }

    function Vb(bb, wb, Mb, eb, pb) {
      switch (wb) {
        case 5120:
          eb && (pb = Math.round(127 * pb)), bb.setInt8(Mb, pb);
          break;
        case 5121:
          eb && (pb = Math.round(255 * pb)), bb.setUint8(Mb, pb);
          break;
        case 5122:
          eb && (pb = Math.round(32767 * pb)), bb.setInt16(Mb, pb, !0);
          break;
        case 5123:
          eb && (pb = Math.round(65535 * pb)), bb.setUint16(Mb, pb, !0);
          break;
        case 5131:
          bb.setUint16(Mb, (0, Hb.i)(pb), !0);
          break;
        case 5124:
          bb.setInt32(Mb, pb, !0);
          break;
        case 5125:
          bb.setUint32(Mb, pb, !0);
          break;
        case 5126:
          bb.setFloat32(Mb, pb, !0);
          break;
        default:
          throw new Error(`Invalid component type ${wb}`)
      }
    }

    function gb(bb) {
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

    function lb(bb, wb, Mb, eb, Hb, lb, Lb, Ib) {
      const Ob = new Array(eb),
        Ub = new Array(eb);
      if (bb instanceof Array) {
        let Hb = wb / 4;
        const pb = Mb / 4;
        for (let wb = 0; wb < lb; wb += eb) {
          for (let wb = 0; wb < eb; wb++) Ob[wb] = Ub[wb] = bb[Hb + wb];
          Ib(Ub, wb);
          for (let wb = 0; wb < eb; wb++) Ob[wb] !== Ub[wb] && (bb[Hb + wb] = Ub[wb]);
          Hb += pb
        }
      } else {
        const tb = ArrayBuffer.isView(bb) ? new DataView(bb.buffer, bb.byteOffset, bb.byteLength) : new DataView(bb),
          Cb = gb(Hb);
        for (let bb = 0; bb < lb; bb += eb) {
          for (let bb = 0, Mb = wb; bb < eb; bb++, Mb += Cb) Ob[bb] = Ub[bb] = pb(tb, Hb, Mb, Lb);
          Ib(Ub, bb);
          for (let bb = 0, Mb = wb; bb < eb; bb++, Mb += Cb) Ob[bb] !== Ub[bb] && Vb(tb, Hb, Mb, Lb, Ub[bb]);
          wb += Mb
        }
      }
    }

    function Lb(bb, wb, Mb, Hb, pb, Vb, Lb, Ib) {
      const Ob = wb * gb(Mb),
        Ub = Lb * wb;
      if (5126 !== Mb || pb !== Ob) {
        const eb = new Float32Array(Ub);
        return lb(bb, Hb, pb, wb, Mb, Ub, Vb, ((bb, Mb) => {
          for (let Hb = 0; Hb < wb; Hb++) eb[Mb + Hb] = bb[Hb]
        })), eb
      }
      if (!(bb instanceof Array || bb instanceof Float32Array) || 0 !== Hb || bb.length !== Ub) {
        if (bb instanceof Array) {
          const wb = Hb / 4;
          return bb.slice(wb, wb + Ub)
        }
        if (ArrayBuffer.isView(bb)) {
          const wb = bb.byteOffset + Hb;
          return 0 !== (3 & wb) && (eb.b.Warn("Float array must be aligned to 4-bytes border"), Ib = !0), Ib ? new Float32Array(bb.buffer.slice(wb, wb + Ub * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(bb.buffer, wb, Ub)
        }
        return new Float32Array(bb, Hb, Ub)
      }
      return Ib ? bb.slice() : bb
    }

    function Ib(bb, wb, Mb, Hb, pb, Vb, Lb) {
      const Ib = gb(Mb),
        Ob = function(bb) {
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
        }(Mb),
        Ub = Vb * wb;
      if (Array.isArray(bb)) {
        if (0 !== (3 & Hb) || 0 !== (3 & pb)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const eb = Hb / 4,
          gb = pb / 4;
        if (eb + (Vb - 1) * gb + wb > bb.length) throw new Error("Last accessed index is out of bounds.");
        if (gb < wb) throw new Error("Data stride cannot be smaller than the component size.");
        if (gb !== wb) {
          const eb = new Ob(Ub);
          return lb(bb, Hb, pb, wb, Mb, Ub, !1, ((bb, Mb) => {
            for (let Hb = 0; Hb < wb; Hb++) eb[Mb + Hb] = bb[Hb]
          })), eb
        }
        return new Ob(bb.slice(eb, eb + Ub))
      }
      let tb, Cb = Hb;
      ArrayBuffer.isView(bb) ? (tb = bb.buffer, Cb += bb.byteOffset) : tb = bb;
      if (Cb + (Vb - 1) * pb + wb * Ib > tb.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Eb = wb * Ib;
      if (pb < Eb) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (pb !== Eb) {
        const bb = new Ob(Ub),
          Mb = new Uint8Array(tb, Cb),
          eb = new Uint8Array(bb.buffer),
          Hb = wb * Ib;
        for (let wb = 0, gb = 0, lb = 0; wb < Vb; wb++, gb += pb, lb += Hb) eb.set(Mb.subarray(gb, gb + Hb), lb);
        return bb
      }
      return 1 !== Ib && 0 !== (Cb & Ib - 1) && (eb.b.Warn("Array must be aligned to border of element size. Data will be copied."), Lb = !0), Lb ? new Ob(tb.slice(Cb, Cb + Ub * Ib)) : new Ob(tb, Cb, Ub)
    }

    function Ob(bb, wb, Mb, Hb, pb, Vb, Lb, Ib) {
      const Ob = wb * gb(Mb),
        Ub = Lb * wb;
      if (Ib.length !== Ub) throw new Error("Output length is not valid");
      if (5126 === Mb && pb === Ob)
        if (bb instanceof Array) {
          const wb = Hb / 4;
          Ib.set(bb, wb)
        } else if (ArrayBuffer.isView(bb)) {
        const wb = bb.byteOffset + Hb;
        if (0 !== (3 & wb)) return eb.b.Warn("Float array must be aligned to 4-bytes border"), void Ib.set(new Float32Array(bb.buffer.slice(wb, wb + Ub * Float32Array.BYTES_PER_ELEMENT)));
        const Mb = new Float32Array(bb.buffer, wb, Ub);
        Ib.set(Mb)
      } else {
        const wb = new Float32Array(bb, Hb, Ub);
        Ib.set(wb)
      } else lb(bb, Hb, pb, wb, Mb, Ub, Vb, ((bb, Mb) => {
        for (let eb = 0; eb < wb; eb++) Ib[Mb + eb] = bb[eb]
      }))
    }

    function Ub(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(bb)) {
        for (let Hb = 0; Hb < wb; Hb++)
          if (bb[Mb + Hb] - eb > 65535) return !0;
        return !1
      }
      return 4 === bb.BYTES_PER_ELEMENT
    }

    function tb(bb) {
      const wb = bb.buffer;
      if (wb instanceof ArrayBuffer) return bb;
      const Mb = new ArrayBuffer(bb.byteLength);
      return new Uint8Array(Mb).set(new Uint8Array(wb, bb.byteOffset, bb.byteLength)), Mb
    }
  },
  41562: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => jb,
      g: () => Xb,
      l: () => xb,
      i: () => Zb,
      m: () => fb
    });
    class eb {
      constructor() {
        this.children = []
      }
      isValid(bb) {
        return !0
      }
      process(bb, wb, Mb) {
        let eb = "";
        if (this.line) {
          let Mb = this.line;
          const Hb = wb.processor;
          if (Hb) {
            Hb.lineProcessor && (Mb = Hb.lineProcessor(Mb, wb.isFragment, wb.processingContext));
            const eb = wb.processor?.attributeKeywordName ?? "attribute",
              pb = wb.isFragment && wb.processor?.varyingFragmentKeywordName ? wb.processor?.varyingFragmentKeywordName : !wb.isFragment && wb.processor?.varyingVertexKeywordName ? wb.processor?.varyingVertexKeywordName : "varying";
            if (!wb.isFragment && Hb.attributeProcessor && this.line.startsWith(eb)) Mb = Hb.attributeProcessor(this.line, bb, wb.processingContext);
            else if (Hb.varyingProcessor && (Hb.varyingCheck?.(this.line, wb.isFragment) || !Hb.varyingCheck && this.line.startsWith(pb))) Mb = Hb.varyingProcessor(this.line, wb.isFragment, bb, wb.processingContext);
            else if (Hb.uniformProcessor && Hb.uniformRegexp && Hb.uniformRegexp.test(this.line)) wb.lookForClosingBracketForUniformBuffer || (Mb = Hb.uniformProcessor(this.line, wb.isFragment, bb, wb.processingContext));
            else if (Hb.uniformBufferProcessor && Hb.uniformBufferRegexp && Hb.uniformBufferRegexp.test(this.line)) wb.lookForClosingBracketForUniformBuffer || (Mb = Hb.uniformBufferProcessor(this.line, wb.isFragment, wb.processingContext), wb.lookForClosingBracketForUniformBuffer = !0);
            else if (Hb.textureProcessor && Hb.textureRegexp && Hb.textureRegexp.test(this.line)) Mb = Hb.textureProcessor(this.line, wb.isFragment, bb, wb.processingContext);
            else if ((Hb.uniformProcessor || Hb.uniformBufferProcessor) && this.line.startsWith("uniform") && !wb.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Hb.uniformProcessor && (Mb = Hb.uniformProcessor(this.line, wb.isFragment, bb, wb.processingContext)) : Hb.uniformBufferProcessor && (Mb = Hb.uniformBufferProcessor(this.line, wb.isFragment, wb.processingContext), wb.lookForClosingBracketForUniformBuffer = !0)
            }
            wb.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (wb.lookForClosingBracketForUniformBuffer = !1, Hb.endOfUniformBufferProcessor && (Mb = Hb.endOfUniformBufferProcessor(this.line, wb.isFragment, wb.processingContext)))
          }
          eb += Mb + "\n"
        }
        for (const Hb of this.children) eb += Hb.process(bb, wb, Mb);
        return this.additionalDefineKey && (bb[this.additionalDefineKey] = this.additionalDefineValue || "true", Mb[this.additionalDefineKey] = bb[this.additionalDefineKey]), eb
      }
    }
    class Hb {
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
        for (const wb of bb) {
          if (!wb || "\r" === wb) continue;
          if ("#" === wb[0]) {
            this._lines.push(wb);
            continue
          }
          const bb = wb.trim();
          if (!bb) continue;
          if (bb.startsWith("//")) {
            this._lines.push(wb);
            continue
          }
          const Mb = bb.indexOf(";");
          if (-1 === Mb) this._lines.push(bb);
          else if (Mb === bb.length - 1) bb.length > 1 && this._lines.push(bb);
          else {
            const bb = wb.split(";");
            for (let wb = 0; wb < bb.length; wb++) {
              let Mb = bb[wb];
              Mb && (Mb = Mb.trim(), Mb && this._lines.push(Mb + (wb !== bb.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class pb extends eb {
      process(bb, wb, Mb) {
        for (let eb = 0; eb < this.children.length; eb++) {
          const Hb = this.children[eb];
          if (Hb.isValid(bb)) return Hb.process(bb, wb, Mb)
        }
        return ""
      }
    }
    class Vb extends eb {
      isValid(bb) {
        return this.testExpression.isTrue(bb)
      }
    }
    class gb {
      isTrue(bb) {
        return !0
      }
      static postfixToInfix(bb) {
        const wb = [];
        for (const Mb of bb)
          if (void 0 === gb._OperatorPriority[Mb]) wb.push(Mb);
          else {
            const bb = wb[wb.length - 1],
              eb = wb[wb.length - 2];
            wb.length -= 2, wb.push(`(${eb}${Mb}${bb})`)
          } return wb[wb.length - 1]
      }
      static infixToPostfix(bb) {
        const wb = gb._InfixToPostfixCache.get(bb);
        if (wb) return wb.accessTime = Date.now(), wb.result;
        if (!bb.includes("&&") && !bb.includes("||") && !bb.includes(")") && !bb.includes("(")) return [bb];
        const Mb = [];
        let eb = -1;
        const Hb = () => {
            Ib = Ib.trim(), "" !== Ib && (Mb.push(Ib), Ib = "")
          },
          pb = bb => {
            eb < gb._Stack.length - 1 && (gb._Stack[++eb] = bb)
          },
          Vb = () => gb._Stack[eb],
          lb = () => -1 === eb ? "!!INVALID EXPRESSION!!" : gb._Stack[eb--];
        let Lb = 0,
          Ib = "";
        for (; Lb < bb.length;) {
          const wb = bb.charAt(Lb),
            Ob = Lb < bb.length - 1 ? bb.substring(Lb, 2 + Lb) : "";
          if ("(" === wb) Ib = "", pb(wb);
          else if (")" === wb) {
            for (Hb(); - 1 !== eb && "(" !== Vb();) Mb.push(lb());
            lb()
          } else if (gb._OperatorPriority[Ob] > 1) {
            for (Hb(); - 1 !== eb && gb._OperatorPriority[Vb()] >= gb._OperatorPriority[Ob];) Mb.push(lb());
            pb(Ob), Lb++
          } else Ib += wb;
          Lb++
        }
        for (Hb(); - 1 !== eb;) "(" === Vb() ? lb() : Mb.push(lb());
        return gb._InfixToPostfixCache.size >= gb.InfixToPostfixCacheLimitSize && gb.ClearCache(), gb._InfixToPostfixCache.set(bb, {
          result: Mb,
          accessTime: Date.now()
        }), Mb
      }
      static ClearCache() {
        const bb = Array.from(gb._InfixToPostfixCache.entries()).sort(((bb, wb) => bb[1].accessTime - wb[1].accessTime));
        for (let wb = 0; wb < gb.InfixToPostfixCacheCleanupSize; wb++) gb._InfixToPostfixCache.delete(bb[wb][0])
      }
    }
    gb.InfixToPostfixCacheLimitSize = 5e4, gb.InfixToPostfixCacheCleanupSize = 25e3, gb._InfixToPostfixCache = new Map, gb._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, gb._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class lb extends gb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = bb, this.not = wb
      }
      isTrue(bb) {
        let wb = void 0 !== bb[this.define];
        return this.not && (wb = !wb), wb
      }
    }
    class Lb extends gb {
      isTrue(bb) {
        return this.leftOperand.isTrue(bb) || this.rightOperand.isTrue(bb)
      }
    }
    class Ib extends gb {
      isTrue(bb) {
        return this.leftOperand.isTrue(bb) && this.rightOperand.isTrue(bb)
      }
    }
    class Ob extends gb {
      constructor(bb, wb, Mb) {
        super(), this.define = bb, this.operand = wb, this.testValue = Mb
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(bb) {
        let wb = !1;
        const Mb = parseInt(void 0 != bb[this.define] ? bb[this.define] : this.define),
          eb = parseInt(void 0 != bb[this.testValue] ? bb[this.testValue] : this.testValue);
        if (isNaN(Mb) || isNaN(eb)) return !1;
        switch (this.operand) {
          case ">":
            wb = Mb > eb;
            break;
          case "<":
            wb = Mb < eb;
            break;
          case "<=":
            wb = Mb <= eb;
            break;
          case ">=":
            wb = Mb >= eb;
            break;
          case "==":
            wb = Mb === eb;
            break;
          case "!=":
            wb = Mb !== eb
        }
        return wb
      }
    }
    var Ub = Mb(41554),
      tb = Mb(41548);
    const Cb = /defined\s*?\((.+?)\)/g,
      Eb = /defined\s*?\[(.+?)\]/g,
      Fb = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      Bb = /__decl__/,
      sb = /light\{X\}.(\w*)/g,
      mb = /\{X\}/g,
      hb = [],
      zb = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function Xb(bb) {
      bb.processor && bb.processor.initializeShaders && bb.processor.initializeShaders(bb.processingContext)
    }

    function xb(bb, wb, Mb, eb) {
      wb.processor?.preProcessShaderCode && (bb = wb.processor.preProcessShaderCode(bb, wb.isFragment)), Zb(bb, wb, (bb => {
        wb.processCodeAfterIncludes && (bb = wb.processCodeAfterIncludes(wb.isFragment ? "fragment" : "vertex", bb, wb.defines));
        const Hb = function(bb, wb, Mb) {
          let eb = function(bb, wb) {
            if (wb.processor?.noPrecision) return bb;
            const Mb = wb.shouldUseHighPrecisionShader; - 1 === bb.indexOf("precision highp float") ? bb = Mb ? "precision highp float;\n" + bb : "precision mediump float;\n" + bb : Mb || (bb = bb.replace("precision highp float", "precision mediump float"));
            return bb
          }(bb, wb);
          if (!wb.processor) return eb;
          if (0 === wb.processor.shaderLanguage && -1 !== eb.indexOf("#version 3") && (eb = eb.replace("#version 300 es", ""), !wb.processor.parseGLES3)) return eb;
          const Hb = wb.defines,
            pb = Yb(wb, Mb);
          wb.processor.preProcessor && (eb = wb.processor.preProcessor(eb, Hb, pb, wb.isFragment, wb.processingContext));
          const Vb = {};
          eb = cb(eb, pb, wb, Vb), wb.processor.postProcessor && (eb = wb.processor.postProcessor(eb, Hb, wb.isFragment, wb.processingContext, Mb ? {
            drawBuffersExtensionDisabled: !Mb.getCaps().drawBuffersExtension
          } : {}, pb, Vb));
          Mb?._features.needShaderCodeInlining && (eb = Mb.inlineShaderCode(eb));
          return eb
        }(bb, wb, eb);
        Mb(Hb, bb)
      }))
    }

    function jb(bb, wb, Mb) {
      return Mb.processor && Mb.processor.finalizeShaders ? Mb.processor.finalizeShaders(bb, wb, Mb.processingContext) : {
        vertexCode: bb,
        fragmentCode: wb
      }
    }

    function Kb(bb) {
      const wb = /defined\((.+)\)/.exec(bb);
      if (wb && wb.length) return new lb(wb[1].trim(), "!" === bb[0]);
      const Mb = ["==", "!=", ">=", "<=", "<", ">"];
      let eb = "",
        Hb = 0;
      for (eb of Mb)
        if (Hb = bb.indexOf(eb), Hb > -1) break;
      if (-1 === Hb) return new lb(bb);
      const pb = bb.substring(0, Hb).trim(),
        Vb = bb.substring(Hb + eb.length).trim();
      return new Ob(pb, eb, Vb)
    }

    function rb(bb, wb) {
      const Mb = new Vb,
        eb = bb.substring(0, wb);
      let Hb = bb.substring(wb);
      return Hb = Hb.substring(0, (Hb.indexOf("//") + 1 || Hb.length + 1) - 1).trim(), Mb.testExpression = "#ifdef" === eb ? new lb(Hb) : "#ifndef" === eb ? new lb(Hb, !0) : function(bb) {
        bb = bb.replace(Cb, "defined[$1]");
        const wb = gb.infixToPostfix(bb),
          Mb = [];
        for (const Hb of wb)
          if ("||" !== Hb && "&&" !== Hb) Mb.push(Hb);
          else if (Mb.length >= 2) {
          let bb = Mb[Mb.length - 1],
            wb = Mb[Mb.length - 2];
          Mb.length -= 2;
          const eb = "&&" == Hb ? new Ib : new Lb;
          "string" === typeof bb && (bb = bb.replace(Eb, "defined($1)")), "string" === typeof wb && (wb = wb.replace(Eb, "defined($1)")), eb.leftOperand = "string" === typeof wb ? Kb(wb) : wb, eb.rightOperand = "string" === typeof bb ? Kb(bb) : bb, Mb.push(eb)
        }
        let eb = Mb[Mb.length - 1];
        return "string" === typeof eb && (eb = eb.replace(Eb, "defined($1)")), "string" === typeof eb ? Kb(eb) : eb
      }(Hb), Mb
    }

    function Rb(bb, wb, Mb, Hb) {
      let pb;
      for (; Db(bb, Mb, Hb);) {
        pb = bb.currentLine;
        const Vb = pb.substring(0, 5).toLowerCase();
        if ("#else" === Vb) {
          const Mb = new eb;
          return wb.children.push(Mb), void Db(bb, Mb, Hb)
        }
        if ("#elif" === Vb) {
          const bb = rb(pb, 5);
          wb.children.push(bb), Mb = bb
        }
      }
    }

    function Db(bb, wb, Mb) {
      for (; bb.canRead;) {
        bb.lineIndex++;
        const Hb = bb.currentLine;
        if (Hb.indexOf("#") >= 0) {
          const eb = zb.exec(Hb);
          if (eb && eb.length) {
            switch (eb[0]) {
              case "#ifdef": {
                const eb = new pb;
                wb.children.push(eb);
                const Vb = rb(Hb, 6);
                eb.children.push(Vb), Rb(bb, eb, Vb, Mb);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const eb = new pb;
                wb.children.push(eb);
                const Vb = rb(Hb, 7);
                eb.children.push(Vb), Rb(bb, eb, Vb, Mb);
                break
              }
              case "#if": {
                const eb = new pb,
                  Vb = rb(Hb, 3);
                wb.children.push(eb), eb.children.push(Vb), Rb(bb, eb, Vb, Mb);
                break
              }
            }
            continue
          }
        }
        const Vb = new eb;
        if (Vb.line = Hb, wb.children.push(Vb), "#" === Hb[0] && "d" === Hb[1]) {
          const bb = Hb.replace(";", "").split(" ");
          Vb.additionalDefineKey = bb[1], 3 === bb.length && (Vb.additionalDefineValue = bb[2])
        }
      }
      return !1
    }

    function cb(bb, wb, Mb, pb) {
      const Vb = new eb,
        gb = new Hb;
      return gb.lineIndex = -1, gb.lines = bb.split("\n"), Db(gb, Vb, pb), Vb.process(wb, Mb, pb)
    }

    function Yb(bb, wb) {
      const Mb = bb.defines,
        eb = {};
      for (const Hb of Mb) {
        const bb = Hb.replace("#define", "").replace(";", "").trim().split(" ");
        eb[bb[0]] = bb.length > 1 ? bb[1] : ""
      }
      return 0 === bb.processor?.shaderLanguage && (eb.GL_ES = "true"), eb.__VERSION__ = bb.version, eb[bb.platformName] = "true", (0, tb.j)(eb, wb?.isNDCHalfZRange, wb?.rHb, wb?.useExactSrgbConversions), eb
    }

    function Zb(bb, wb, Mb) {
      let eb;
      for (hb.length = 0; null !== (eb = Fb.exec(bb));) hb.push(eb);
      let Hb = [bb],
        pb = !1;
      for (const gb of hb) {
        let bb = gb[1];
        if (-1 !== bb.indexOf("__decl__") && (bb = bb.replace(Bb, ""), wb.supportsUniformBuffers && (bb = bb.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), bb += "Declaration"), !wb.includesShadersStore[bb]) {
          const eb = wb.shadersRepository + "ShadersInclude/" + bb + ".fx";
          return void fb.loadFile(eb, (eb => {
            wb.includesShadersStore[bb] = eb, Zb(Hb.join(""), wb, Mb)
          }))
        } {
          let Mb = wb.includesShadersStore[bb];
          if (gb[2]) {
            const bb = gb[3].split(",");
            for (let wb = 0; wb < bb.length; wb += 2) {
              const eb = new RegExp(bb[wb], "g"),
                Hb = bb[wb + 1];
              Mb = Mb.replace(eb, Hb)
            }
          }
          if (gb[4]) {
            const bb = gb[5];
            if (-1 !== bb.indexOf("..")) {
              const eb = bb.split(".."),
                Hb = parseInt(eb[0]);
              let pb = parseInt(eb[1]),
                Vb = Mb.slice(0);
              Mb = "", isNaN(pb) && (pb = wb.indexParameters[eb[1]]);
              for (let bb = Hb; bb < pb; bb++) wb.supportsUniformBuffers || (Vb = Vb.replace(sb, ((bb, wb) => wb + "{X}"))), Mb += Vb.replace(mb, bb.toString()) + "\n"
            } else wb.supportsUniformBuffers || (Mb = Mb.replace(sb, ((bb, wb) => wb + "{X}"))), Mb = Mb.replace(mb, bb)
          }
          const eb = [];
          for (const bb of Hb) {
            const wb = bb.split(gb[0]);
            for (let bb = 0; bb < wb.length - 1; bb++) eb.push(wb[bb]), eb.push(Mb);
            eb.push(wb[wb.length - 1])
          }
          Hb = eb, pb = pb || Mb.indexOf("#include<") >= 0 || Mb.indexOf("#include <") >= 0
        }
      }
      hb.length = 0;
      const Vb = Hb.join("");
      pb ? Zb(Vb.toString(), wb, Mb) : Mb(Vb)
    }
    const fb = {
      loadFile: (bb, wb, Mb, eb, Hb, pb) => {
        throw (0, Ub.k)("FileTools")
      }
    }
  },
  41548: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      h: () => pb,
      j: () => gb,
      l: () => Vb,
      m: () => lb
    });
    var eb = Mb(41554);
    const Hb = {};

    function pb(bb, wb) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (wb ? wb + "\n" : "") + bb
    }

    function Vb(bb, wb, Mb, pb, Vb, gb, lb) {
      const Lb = lb || Hb.loadFile;
      if (!Lb) throw (0, eb.k)("FileTools");
      return Lb(bb, wb, Mb, pb, Vb, gb)
    }

    function gb(bb, wb, Mb, eb) {
      if (bb) return wb ? bb.IS_NDC_HALF_ZRANGE = "" : delete bb.IS_NDC_HALF_ZRANGE, Mb ? bb.USE_REVERSE_DEPTHBUFFER = "" : delete bb.USE_REVERSE_DEPTHBUFFER, void(eb ? bb.USE_EXACT_SRGB_CONVERSIONS = "" : delete bb.USE_EXACT_SRGB_CONVERSIONS);
      {
        let bb = "";
        return wb && (bb += "#define IS_NDC_HALF_ZRANGE"), Mb && (bb && (bb += "\n"), bb += "#define USE_REVERSE_DEPTHBUFFER"), eb && (bb && (bb += "\n"), bb += "#define USE_EXACT_SRGB_CONVERSIONS"), bb
      }
    }

    function lb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        eb = arguments.length > 3 ? arguments[3] : void 0;
      switch (bb) {
        case 3: {
          const bb = new Int8Array(wb);
          return eb && bb.set(new Int8Array(eb)), bb
        }
        case 0: {
          const bb = new Uint8Array(wb);
          return eb && bb.set(new Uint8Array(eb)), bb
        }
        case 4: {
          const bb = "number" !== typeof wb ? new Int16Array(wb) : new Int16Array(Mb ? wb / 2 : wb);
          return eb && bb.set(new Int16Array(eb)), bb
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const bb = "number" !== typeof wb ? new Uint16Array(wb) : new Uint16Array(Mb ? wb / 2 : wb);
          return eb && bb.set(new Uint16Array(eb)), bb
        }
        case 6: {
          const bb = "number" !== typeof wb ? new Int32Array(wb) : new Int32Array(Mb ? wb / 4 : wb);
          return eb && bb.set(new Int32Array(eb)), bb
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const bb = "number" !== typeof wb ? new Uint32Array(wb) : new Uint32Array(Mb ? wb / 4 : wb);
          return eb && bb.set(new Uint32Array(eb)), bb
        }
        case 1: {
          const bb = "number" !== typeof wb ? new Float32Array(wb) : new Float32Array(Mb ? wb / 4 : wb);
          return eb && bb.set(new Float32Array(eb)), bb
        }
      }
      const Hb = new Uint8Array(wb);
      return eb && Hb.set(new Uint8Array(eb)), Hb
    }
  },
  41554: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb,
      g: () => Ib,
      h: () => lb,
      k: () => Hb
    });
    const eb = {};

    function Hb(bb) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !eb[bb]) return eb[bb] = !0, `${bb} needs to be imported before as it contains a side-effect required by your code.`
    }
    const pb = {};
    let Vb = !1,
      gb = 0;

    function lb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const eb = function() {
        if ((Mb || Vb) && 0 === gb) {
          const Mb = `${bb}.${wb}`;
          pb[Mb] || (pb[Mb] = !0, console.warn(`[Babylon.js] ${Mb}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return eb.__isSideEffectStub = !0, eb
    }

    function Lb(bb) {
      return !!bb && !bb.__isSideEffectStub
    }

    function Ib(bb, wb) {
      return {
        get() {},
        set(bb) {
          Object.defineProperty(this, wb, {
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
  41535: (bb, wb, Mb) => {
    function eb() {
      return "undefined" !== typeof window
    }

    function Hb() {
      return "undefined" !== typeof navigator
    }

    function pb() {
      return "undefined" !== typeof document
    }

    function Vb(bb) {
      let wb = "",
        Mb = bb.firstChild;
      for (; Mb;) 3 === Mb.nodeType && (wb += Mb.textContent), Mb = Mb.nextSibling;
      return wb
    }
    Mb.d(wb, {
      e: () => Vb,
      f: () => pb,
      g: () => Hb,
      j: () => eb
    })
  },
  41730: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      g: () => Hb,
      j: () => pb
    });
    class eb extends Error {}
    eb._setPrototypeOf = Object.setPrototypeOf || ((bb, wb) => (bb.__proto__ = wb, bb));
    const Hb = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class pb extends eb {
      constructor(bb, wb, Mb) {
        super(bb), this.errorCode = wb, this.innerError = Mb, this.name = "RuntimeError", eb._setPrototypeOf(this, pb.prototype)
      }
    }
  },
  41722: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Yb,
      c: () => mb,
      d: () => rb,
      g: () => Db,
      k: () => jb,
      o: () => Xb,
      p: () => xb,
      t: () => Jb,
      w: () => Kb,
      x: () => hb
    });
    var eb = Mb(41727),
      Hb = Mb(41535),
      pb = Mb(38318);
    class Vb {}
    Vb.FilesToLoad = {};
    var gb = Mb(41730),
      lb = Mb(41734),
      Lb = Mb(38313),
      Ib = Mb(41548),
      Ob = Mb(41562),
      Ub = Mb(39971),
      tb = Mb(41565),
      Cb = Mb(41740);
    const Eb = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class Fb extends gb.j {
      constructor(bb, wb) {
        super(bb, gb.g.LoadFileError), this.name = "LoadFileError", gb.d._setPrototypeOf(this, Fb.prototype), wb instanceof eb.b ? this.request = wb : this.file = wb
      }
    }
    class Bb extends gb.j {
      constructor(bb, wb) {
        super(bb, gb.g.RequestFileError), this.request = wb, this.name = "RequestFileError", gb.d._setPrototypeOf(this, Bb.prototype)
      }
    }
    class sb extends gb.j {
      constructor(bb, wb) {
        super(bb, gb.g.ReadFileError), this.file = wb, this.name = "ReadFileError", gb.d._setPrototypeOf(this, sb.prototype)
      }
    }
    const mb = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (Mb, eb, Hb) => 0 !== eb.status || Hb >= bb || -1 !== Mb.indexOf("file:") ? -1 : Math.pow(2, Hb) * wb
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: bb => bb,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: bb => bb,
        CleanUrl: bb => bb = bb.replace(/#/gm, "%23")
      },
      hb = (bb, wb) => {
        if ((!bb || 0 !== bb.indexOf("data:")) && mb.CorsBehavior)
          if ("string" === typeof mb.CorsBehavior || mb.CorsBehavior instanceof String) wb.crossOrigin = mb.CorsBehavior;
          else {
            const Mb = mb.CorsBehavior(bb);
            Mb && (wb.crossOrigin = Mb)
          }
      },
      zb = {
        getRequiredSize: null
      },
      Xb = function(bb, wb, Mb, Hb) {
        let pb, gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Ib = arguments.length > 5 ? arguments[5] : void 0,
          Ob = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Lb.e.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Ob?._features.forceBitmapOverHTMLImageElement) return Mb("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Ob?._features.forceBitmapOverHTMLImageElement && "string" !== typeof bb && "undefined" !== typeof Blob) {
          let eb;
          if (bb instanceof Blob) eb = bb;
          else {
            const wb = bb instanceof ArrayBuffer ? bb : (0, Cb.m)(bb);
            eb = new Blob([wb], {
              type: gb
            })
          }
          return Ob.createImageBitmap(eb, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Ib
          }).then(wb).catch((wb => {
            Mb && Mb("Error while trying to load image: " + bb, wb)
          })), null
        }
        let Ub = !1;
        if (bb instanceof ArrayBuffer || ArrayBuffer.isView(bb))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let wb;
            wb = bb instanceof ArrayBuffer ? bb : (0, Cb.m)(bb), pb = URL.createObjectURL(new Blob([wb], {
              type: gb
            })), Ub = !0
          } else pb = `data:${gb};base64,` + (0, lb.h)(bb);
        else bb instanceof Blob ? (pb = URL.createObjectURL(bb), Ub = !0) : (pb = mb.CleanUrl(bb), pb = mb.PreprocessUrl(pb));
        const tb = wb => {
          if (Mb) {
            const eb = pb || bb.toString();
            Mb(`Error while trying to load image: ${0===eb.indexOf("http")||eb.length<=128?eb:eb.slice(0,128)+"..."}`, wb)
          }
        };
        if (Ob?._features.forceBitmapOverHTMLImageElement) return jb(pb, (eb => {
          Ob.createImageBitmap(new Blob([eb], {
            type: gb
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Ib
          }).then((bb => {
            wb(bb), Ub && URL.revokeObjectURL(pb)
          })).catch((wb => {
            Mb && Mb("Error while trying to load image: " + bb, wb)
          }))
        }), void 0, Hb || void 0, !0, ((bb, wb) => {
          tb(wb)
        })), null;
        const Eb = new Image;
        if (zb.getRequiredSize) {
          const wb = zb.getRequiredSize(bb);
          wb.width && (Eb.width = wb.width), wb.height && (Eb.height = wb.height)
        }
        hb(pb, Eb);
        const Fb = [],
          Bb = () => {
            for (const bb of Fb) bb.target.removeEventListener(bb.name, bb.handler);
            Fb.length = 0
          };
        Fb.push({
          target: Eb,
          name: "load",
          handler: () => {
            Bb(), wb(Eb), Ub && Eb.src && URL.revokeObjectURL(Eb.src)
          }
        }), Fb.push({
          target: Eb,
          name: "error",
          handler: bb => {
            Bb(), tb(bb), Ub && Eb.src && URL.revokeObjectURL(Eb.src)
          }
        }), Fb.push({
          target: document,
          name: "securitypolicyviolation",
          handler: bb => {
            if (bb.blockedURI !== Eb.src || "bO" === bb.disposition) return;
            Bb();
            const wb = new Error(`CSP violation of policy ${bb.effectiveDirective} ${bb.blockedURI}. Current policy is ${bb.originalPolicy}`);
            Lb.e.UseFallbackTexture = !1, tb(wb), Ub && Eb.src && URL.revokeObjectURL(Eb.src), Eb.src = ""
          }
        }), (() => {
          for (const bb of Fb) bb.target.addEventListener(bb.name, bb.handler)
        })();
        const sb = "blob:" === pb.substring(0, 5),
          Xb = "data:" === pb.substring(0, 5),
          xb = () => {
            sb || Xb || !eb.b.IsCustomRequestAvailable ? Eb.src = pb : jb(pb, ((bb, wb, Mb) => {
              const eb = new Blob([bb], {
                  type: !gb && Mb ? Mb : gb
                }),
                Hb = URL.createObjectURL(eb);
              Ub = !0, Eb.src = Hb
            }), void 0, Hb || void 0, !0, ((bb, wb) => {
              tb(wb)
            }))
          },
          Kb = () => {
            Hb && Hb.loadImage(pb, Eb)
          };
        if (!sb && !Xb && Hb && Hb.enableTexturesOffline) Hb.open(Kb, xb);
        else {
          if (-1 !== pb.indexOf("file:")) {
            const bb = decodeURIComponent(pb.substring(5).toLowerCase());
            if (Vb.FilesToLoad[bb] && "undefined" !== typeof URL) {
              try {
                let wb;
                try {
                  wb = URL.createObjectURL(Vb.FilesToLoad[bb])
                } catch (rb) {
                  wb = URL.createObjectURL(Vb.FilesToLoad[bb])
                }
                Eb.src = wb, Ub = !0
              } catch (Rb) {
                Eb.src = ""
              }
              return Eb
            }
          }
          xb()
        }
        return Eb
      },
      xb = (bb, wb, Mb, eb, Hb) => {
        const Vb = new FileReader,
          gb = {
            onCompleteObservable: new pb.b,
            abort: () => Vb.abort()
          };
        return Vb.onloadend = () => gb.onCompleteObservable.notifyObservers(gb), Hb && (Vb.onerror = () => {
          Hb(new sb(`Unable to read ${bb.name}`, bb))
        }), Vb.onload = bb => {
          wb(bb.target.result)
        }, Mb && (Vb.onprogress = Mb), eb ? Vb.readAsArrayBuffer(bb) : Vb.readAsText(bb), gb
      },
      jb = (bb, wb, Mb, eb, Hb, lb, Lb) => {
        if (bb.name) return xb(bb, wb, Mb, Hb, lb ? bb => {
          lb(void 0, bb)
        } : void 0);
        const Ib = bb;
        if (-1 !== Ib.indexOf("file:")) {
          let bb = decodeURIComponent(Ib.substring(5).toLowerCase());
          0 === bb.indexOf("./") && (bb = bb.substring(2));
          const eb = Vb.FilesToLoad[bb];
          if (eb) return xb(eb, wb, Mb, Hb, lb ? bb => lb(void 0, new Fb(bb.message, bb.file)) : void 0)
        }
        const {
          match: Ob,
          type: Cb
        } = cb(Ib);
        if (Ob) {
          const bb = {
            onCompleteObservable: new pb.b,
            abort: () => () => {}
          };
          try {
            const bb = Hb ? Yb(Ib) : Zb(Ib);
            wb(bb, void 0, Cb)
          } catch (gb) {
            lb ? lb(void 0, gb) : Ub.b.Error(gb.message || "Failed to parse the Data URL")
          }
          return tb.d.SetImmediate((() => {
            bb.onCompleteObservable.notifyObservers(bb)
          })), bb
        }
        return Kb(Ib, ((bb, Mb) => {
          wb(bb, Mb?.responseURL, Mb?.getResponseHeader("content-type"))
        }), Mb, eb, Hb, lb ? bb => {
          lb(bb.request, new Fb(bb.message, bb.request))
        } : void 0, Lb)
      },
      Kb = (bb, wb, Mb, Vb, gb, lb, Ib) => {
        null !== Vb && (Vb ?? (Vb = Lb.e.LastCreatedScene?.offlineProvider)), bb = mb.CleanUrl(bb), bb = mb.PreprocessUrl(bb);
        const Ob = mb.BaseUrl + bb;
        let tb = !1;
        const Cb = {
            onCompleteObservable: new pb.b,
            abort: () => tb = !0
          },
          Eb = () => {
            let bb, pb = new eb.b,
              Vb = null;
            const Lb = () => {
              pb && (Mb && pb.removeEventListener("progress", Mb), bb && pb.removeEventListener("readystatechange", bb), pb.removeEventListener("loadend", Eb))
            };
            let Eb = () => {
              Lb(), Cb.onCompleteObservable.notifyObservers(Cb), Cb.onCompleteObservable.clear(), Mb = void 0, bb = null, Eb = null, lb = void 0, Ib = void 0, wb = void 0
            };
            Cb.abort = () => {
              tb = !0, Eb && Eb(), pb && pb.readyState !== (XMLHttpRequest.DONE || 4) && pb.abort(), null !== Vb && (clearTimeout(Vb), Vb = null), pb = null
            };
            const Fb = bb => {
                const wb = bb.message || "Unknown error";
                lb && pb ? lb(new Bb(wb, pb)) : Ub.b.Error(wb)
              },
              sb = Ub => {
                if (pb) {
                  if (pb.open("GET", Ob), Ib) try {
                    Ib(pb)
                  } catch (Cb) {
                    return void Fb(Cb)
                  }
                  gb && (pb.responseType = "arraybuffer"), Mb && pb.addEventListener("progress", Mb), Eb && pb.addEventListener("loadend", Eb), bb = () => {
                    if (!tb && pb && pb.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (bb && pb.removeEventListener("readystatechange", bb), pb.status >= 200 && pb.status < 300 || 0 === pb.status && (!(0, Hb.j)() || Rb())) {
                        const bb = gb ? pb.response : pb.responseText;
                        if (null !== bb) {
                          try {
                            wb && wb(bb, pb)
                          } catch (Cb) {
                            Fb(Cb)
                          }
                          return
                        }
                      }
                      const Mb = mb.DefaultRetryStrategy;
                      if (Mb) {
                        const bb = Mb(Ob, pb, Ub);
                        if (-1 !== bb) return Lb(), pb = new eb.b, void(Vb = setTimeout((() => sb(Ub + 1)), bb))
                      }
                      const Ib = new Bb("Error status: " + pb.status + " " + pb.statusText + " - Unable to load " + Ob, pb);
                      lb && lb(Ib)
                    }
                  }, pb.addEventListener("readystatechange", bb), pb.send()
                }
              };
            sb(0)
          };
        if (Vb && Vb.enableSceneOffline && !bb.startsWith("blob:")) {
          const eb = bb => {
              bb && bb.status > 400 ? lb && lb(bb) : Eb()
            },
            Hb = () => {
              Vb && Vb.loadFile(mb.BaseUrl + bb, (bb => {
                !tb && wb && wb(bb), Cb.onCompleteObservable.notifyObservers(Cb)
              }), Mb ? bb => {
                !tb && Mb && Mb(bb)
              } : void 0, eb, gb)
            };
          Vb.open(Hb, eb)
        } else Eb();
        return Cb
      },
      rb = bb => {
        const {
          match: wb,
          type: Mb
        } = cb(bb);
        if (wb) return Mb || void 0;
        const eb = bb.lastIndexOf(".");
        switch (bb.substring(eb + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "dW":
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
      Rb = () => "undefined" !== typeof location && "file:" === location.protocol,
      Db = bb => Eb.test(bb),
      cb = bb => {
        const wb = Eb.exec(bb);
        if (null === wb || 0 === wb.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: wb[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Yb(bb) {
      return (0, lb.b)(bb.split(",")[1])
    }
    const Zb = bb => (0, lb.e)(bb.split(",")[1]);
    let fb;
    const Ab = (bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) => {
      fb = {
        DecodeBase64UrlToBinary: bb,
        DecodeBase64UrlToString: wb,
        DefaultRetryStrategy: Mb.DefaultRetryStrategy,
        BaseUrl: Mb.BaseUrl,
        CorsBehavior: Mb.CorsBehavior,
        PreprocessUrl: Mb.PreprocessUrl,
        IsBase64DataUrl: eb,
        IsFileURL: Hb,
        LoadFile: pb,
        LoadImage: Vb,
        ReadFile: gb,
        RequestFile: lb,
        SetCorsBehavior: Lb
      }, Object.defineProperty(fb, "DefaultRetryStrategy", {
        get: function() {
          return Mb.DefaultRetryStrategy
        },
        set: function(bb) {
          Mb.DefaultRetryStrategy = bb
        }
      }), Object.defineProperty(fb, "BaseUrl", {
        get: function() {
          return Mb.BaseUrl
        },
        set: function(bb) {
          Mb.BaseUrl = bb
        }
      }), Object.defineProperty(fb, "PreprocessUrl", {
        get: function() {
          return Mb.PreprocessUrl
        },
        set: function(bb) {
          Mb.PreprocessUrl = bb
        }
      }), Object.defineProperty(fb, "CorsBehavior", {
        get: function() {
          return Mb.CorsBehavior
        },
        set: function(bb) {
          Mb.CorsBehavior = bb
        }
      })
    };
    let Wb = !1;

    function Jb() {
      Wb || (Wb = !0, Ab(Yb, Zb, mb, Db, Rb, jb, Xb, xb, Kb, hb), Ib.d.loadFile = jb, Ib.d.loadImage = Xb, Ob.m.loadFile = jb)
    }
  },
  41742: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      e: () => pb,
      i: () => Vb
    });
    let eb = null;

    function Hb() {
      if (eb) return eb;
      const bb = new ArrayBuffer(4),
        wb = new Float32Array(bb),
        Mb = new Uint32Array(bb),
        Hb = new Uint32Array(512),
        pb = new Uint32Array(512);
      for (let eb = 0; eb < 256; ++eb) {
        const bb = eb - 127;
        bb < -24 ? (Hb[eb] = 0, Hb[256 | eb] = 32768, pb[eb] = 24, pb[256 | eb] = 24) : bb < -14 ? (Hb[eb] = 1024 >> -bb - 14, Hb[256 | eb] = 1024 >> -bb - 14 | 32768, pb[eb] = -bb - 1, pb[256 | eb] = -bb - 1) : bb <= 15 ? (Hb[eb] = bb + 15 << 10, Hb[256 | eb] = bb + 15 << 10 | 32768, pb[eb] = 13, pb[256 | eb] = 13) : bb < 128 ? (Hb[eb] = 31744, Hb[256 | eb] = 64512, pb[eb] = 24, pb[256 | eb] = 24) : (Hb[eb] = 31744, Hb[256 | eb] = 64512, pb[eb] = 13, pb[256 | eb] = 13)
      }
      const Vb = new Uint32Array(2048),
        gb = new Uint32Array(64),
        lb = new Uint32Array(64);
      for (let eb = 1; eb < 1024; ++eb) {
        let bb = eb << 13,
          wb = 0;
        for (; 0 === (8388608 & bb);) bb <<= 1, wb -= 8388608;
        bb &= -8388609, wb += 947912704, Vb[eb] = bb | wb
      }
      for (let eb = 1024; eb < 2048; ++eb) Vb[eb] = 939524096 + (eb - 1024 << 13);
      for (let eb = 1; eb < 31; ++eb) gb[eb] = eb << 23;
      gb[31] = 1199570944, gb[32] = 2147483648;
      for (let eb = 33; eb < 63; ++eb) gb[eb] = 2147483648 + (eb - 32 << 23);
      gb[63] = 3347054592;
      for (let eb = 1; eb < 64; ++eb) 32 !== eb && (lb[eb] = 1024);
      return eb = {
        floatView: wb,
        uint32View: Mb,
        baseTable: Hb,
        shiftTable: pb,
        mantissaTable: Vb,
        exponentTable: gb,
        offsetTable: lb
      }, eb
    }
    const pb = 65504;

    function Vb(bb) {
      const wb = Hb();
      wb.floatView[0] = bb;
      const Mb = wb.uint32View[0],
        eb = Mb >> 23 & 511;
      return wb.baseTable[eb] + ((8388607 & Mb) >> wb.shiftTable[eb])
    }

    function gb(bb) {
      const wb = Hb();
      return wb.uint32View[0] = wb.mantissaTable[wb.offsetTable[bb >> 10] + (1023 & bb)] + wb.exponentTable[bb >> 10], wb.floatView[0]
    }
  },
  41734: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      e: () => Hb,
      h: () => eb
    });
    const eb = bb => {
        const wb = ArrayBuffer.isView(bb) ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : new Uint8Array(bb);
        return "function" === typeof wb.toBase64 ? wb.toBase64() : function(bb) {
          const wb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let Mb, eb, Hb, pb, Vb, gb, lb, Lb = "",
            Ib = 0;
          for (; Ib < bb.length;) Mb = bb[Ib++], eb = Ib < bb.length ? bb[Ib++] : Number.NaN, Hb = Ib < bb.length ? bb[Ib++] : Number.NaN, pb = Mb >> 2, Vb = (3 & Mb) << 4 | eb >> 4, gb = (15 & eb) << 2 | Hb >> 6, lb = 63 & Hb, isNaN(eb) ? gb = lb = 64 : isNaN(Hb) && (lb = 64), Lb += wb.charAt(pb) + wb.charAt(Vb) + wb.charAt(gb) + wb.charAt(lb);
          return Lb
        }(wb)
      },
      Hb = bb => atob(bb),
      pb = bb => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(bb).buffer : function(bb) {
        const wb = Hb(bb),
          Mb = wb.length,
          eb = new Uint8Array(new ArrayBuffer(Mb));
        for (let Hb = 0; Hb < Mb; Hb++) eb[Hb] = wb.charCodeAt(Hb);
        return eb.buffer
      }(bb)
  },
  41565: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      e: () => Vb
    });
    let eb = [];
    class Hb {
      static SetImmediate(bb) {
        0 === eb.length && setTimeout((() => {
          const bb = eb;
          eb = [];
          for (const wb of bb) wb()
        }), 1), eb.push(bb)
      }
    }

    function pb(bb, wb, Mb) {
      try {
        if (bb()) return wb(), !0
      } catch (eb) {
        return Mb?.(eb), !0
      }
      return !1
    }
    const Vb = function(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Vb = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && pb(bb, wb, Mb)) return null;
      const gb = setInterval((() => {
        pb(bb, wb, Mb) ? clearInterval(gb) : (Hb -= eb, Hb < 0 && (clearInterval(gb), Mb?.(new Error("Operation timed out after maximum retries. " + (Vb || "")), !0)))
      }), eb);
      return () => clearInterval(gb)
    }
  },
  41727: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(eb.CustomRequestHeaders).length > 0 || eb.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(bb) {
        return bb = (bb = bb.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(bb) {
        return eb.SkipRequestModificationForBabylonCDN && (bb.includes("preview.babylonjs.com") || bb.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(bb) {
        const wb = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (eb._ShouldSkipRequestModifications(bb)) return {
          url: bb,
          headers: wb
        };
        for (const Hb in eb.CustomRequestHeaders) {
          const bb = eb.CustomRequestHeaders[Hb];
          bb && (wb[Hb] = bb)
        }
        const Mb = {
          setRequestHeader: (bb, Mb) => {
            wb[bb] = Mb
          }
        };
        for (const Hb of eb.CustomRequestModifiers) {
          if (eb._ShouldSkipRequestModifications(bb)) break;
          const wb = Hb(Mb, bb);
          "string" === typeof wb && (bb = wb)
        }
        return {
          url: bb,
          headers: wb
        }
      }
      static async FetchAsync(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Mb = wb.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Hb,
            headers: pb
          } = eb._CollectCustomizations(eb._CleanUrl(bb), wb.headers ?? {});
          return await fetch(Hb, {
            method: Mb,
            headers: pb,
            body: wb.body ?? void 0
          })
        }
        return await new Promise(((Hb, pb) => {
          const Vb = new eb;
          Vb.responseType = "arraybuffer", Vb.addEventListener("readystatechange", (() => {
            if (4 === Vb.readyState)
              if (Vb.status >= 200 && Vb.status < 300) {
                const bb = "undefined" !== typeof Headers ? new Headers : void 0,
                  wb = Vb.getResponseHeader("Content-Type");
                wb && bb && bb.set("Content-Type", wb), "undefined" !== typeof Response ? Hb(new Response(Vb.response, {
                  status: Vb.status,
                  statusText: Vb.statusText,
                  headers: bb
                })) : Hb({
                  ok: !0,
                  status: Vb.status,
                  statusText: Vb.statusText,
                  headers: {
                    get: bb => Vb.getResponseHeader(bb)
                  },
                  arrayBuffer: async () => await Promise.resolve(Vb.response)
                })
              } else pb(new Error(`HTTP ${Vb.status} loading '${Vb.requestURL}': ${Vb.statusText}`))
          })), Vb.open(Mb, bb, wb.headers), Vb.send(wb.body ?? null)
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
      addEventListener(bb, wb, Mb) {
        this._xhr.addEventListener(bb, wb, Mb)
      }
      removeEventListener(bb, wb, Mb) {
        this._xhr.removeEventListener(bb, wb, Mb)
      }
      abort() {
        this._xhr.abort()
      }
      send(bb) {
        this._xhr.send(bb)
      }
      open(bb, wb, Mb) {
        const {
          url: Hb,
          headers: pb
        } = eb._CollectCustomizations(wb, Mb);
        this._requestURL = eb._CleanUrl(Hb), this._xhr.open(bb, this._requestURL, !0);
        for (const eb in pb) this._xhr.setRequestHeader(eb, pb[eb])
      }
      setRequestHeader(bb, wb) {
        this._xhr.setRequestHeader(bb, wb)
      }
      getResponseHeader(bb) {
        return this._xhr.getResponseHeader(bb)
      }
    }
    eb.CustomRequestHeaders = {}, eb.CustomRequestModifiers = new Array, eb.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);