export const id = 244;
export const ids = [244];
export const modules = {
  39167: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Pb,
      f: () => Lb,
      h: () => Bb,
      k: () => Xb,
      l: () => eb,
      n: () => Yb,
      p: () => vb
    });
    var Ab = Ub(37989),
      Mb = Ub(39169);

    function Tb(bb, ab, Ub, Ab) {
      switch (ab) {
        case 5120: {
          let ab = bb.getInt8(Ub);
          return Ab && (ab = Math.max(ab / 127, -1)), ab
        }
        case 5121: {
          let ab = bb.getUint8(Ub);
          return Ab && (ab /= 255), ab
        }
        case 5122: {
          let ab = bb.getInt16(Ub, !0);
          return Ab && (ab = Math.max(ab / 32767, -1)), ab
        }
        case 5123: {
          let ab = bb.getUint16(Ub, !0);
          return Ab && (ab /= 65535), ab
        }
        case 5131:
          return (0, Mb.e)(bb.getUint16(Ub, !0));
        case 5124:
          return bb.getInt32(Ub, !0);
        case 5125:
          return bb.getUint32(Ub, !0);
        case 5126:
          return bb.getFloat32(Ub, !0);
        default:
          throw new Error(`Invalid component type ${ab}`)
      }
    }

    function Eb(bb, ab, Ub, Ab, Tb) {
      switch (ab) {
        case 5120:
          Ab && (Tb = Math.round(127 * Tb)), bb.setInt8(Ub, Tb);
          break;
        case 5121:
          Ab && (Tb = Math.round(255 * Tb)), bb.setUint8(Ub, Tb);
          break;
        case 5122:
          Ab && (Tb = Math.round(32767 * Tb)), bb.setInt16(Ub, Tb, !0);
          break;
        case 5123:
          Ab && (Tb = Math.round(65535 * Tb)), bb.setUint16(Ub, Tb, !0);
          break;
        case 5131:
          bb.setUint16(Ub, (0, Mb.j)(Tb), !0);
          break;
        case 5124:
          bb.setInt32(Ub, Tb, !0);
          break;
        case 5125:
          bb.setUint32(Ub, Tb, !0);
          break;
        case 5126:
          bb.setFloat32(Ub, Tb, !0);
          break;
        default:
          throw new Error(`Invalid component type ${ab}`)
      }
    }

    function Yb(bb) {
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

    function Bb(bb, ab, Ub, Ab, Mb, Bb, eb, vb) {
      const Lb = new Array(Ab),
        Pb = new Array(Ab);
      if (bb instanceof Array) {
        let Mb = ab / 4;
        const Tb = Ub / 4;
        for (let ab = 0; ab < Bb; ab += Ab) {
          for (let ab = 0; ab < Ab; ab++) Lb[ab] = Pb[ab] = bb[Mb + ab];
          vb(Pb, ab);
          for (let ab = 0; ab < Ab; ab++) Lb[ab] !== Pb[ab] && (bb[Mb + ab] = Pb[ab]);
          Mb += Tb
        }
      } else {
        const Xb = ArrayBuffer.isView(bb) ? new DataView(bb.buffer, bb.byteOffset, bb.byteLength) : new DataView(bb),
          jb = Yb(Mb);
        for (let bb = 0; bb < Bb; bb += Ab) {
          for (let bb = 0, Ub = ab; bb < Ab; bb++, Ub += jb) Lb[bb] = Pb[bb] = Tb(Xb, Mb, Ub, eb);
          vb(Pb, bb);
          for (let bb = 0, Ub = ab; bb < Ab; bb++, Ub += jb) Lb[bb] !== Pb[bb] && Eb(Xb, Mb, Ub, eb, Pb[bb]);
          ab += Ub
        }
      }
    }

    function eb(bb, ab, Ub, Mb, Tb, Eb, eb, vb) {
      const Lb = ab * Yb(Ub),
        Pb = eb * ab;
      if (5126 !== Ub || Tb !== Lb) {
        const Ab = new Float32Array(Pb);
        return Bb(bb, Mb, Tb, ab, Ub, Pb, Eb, ((bb, Ub) => {
          for (let Mb = 0; Mb < ab; Mb++) Ab[Ub + Mb] = bb[Mb]
        })), Ab
      }
      if (!(bb instanceof Array || bb instanceof Float32Array) || 0 !== Mb || bb.length !== Pb) {
        if (bb instanceof Array) {
          const ab = Mb / 4;
          return bb.slice(ab, ab + Pb)
        }
        if (ArrayBuffer.isView(bb)) {
          const ab = bb.byteOffset + Mb;
          return 0 !== (3 & ab) && (Ab.e.Warn("Float array must be aligned to 4-bytes border"), vb = !0), vb ? new Float32Array(bb.buffer.slice(ab, ab + Pb * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(bb.buffer, ab, Pb)
        }
        return new Float32Array(bb, Mb, Pb)
      }
      return vb ? bb.slice() : bb
    }

    function vb(bb, ab, Ub, Mb, Tb, Eb, eb) {
      const vb = Yb(Ub),
        Lb = function(bb) {
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
        }(Ub),
        Pb = Eb * ab;
      if (Array.isArray(bb)) {
        if (0 !== (3 & Mb) || 0 !== (3 & Tb)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Ab = Mb / 4,
          Yb = Tb / 4;
        if (Ab + (Eb - 1) * Yb + ab > bb.length) throw new Error("Last accessed index is out of bounds.");
        if (Yb < ab) throw new Error("Data stride cannot be smaller than the component size.");
        if (Yb !== ab) {
          const Ab = new Lb(Pb);
          return Bb(bb, Mb, Tb, ab, Ub, Pb, !1, ((bb, Ub) => {
            for (let Mb = 0; Mb < ab; Mb++) Ab[Ub + Mb] = bb[Mb]
          })), Ab
        }
        return new Lb(bb.slice(Ab, Ab + Pb))
      }
      let Xb, jb = Mb;
      ArrayBuffer.isView(bb) ? (Xb = bb.buffer, jb += bb.byteOffset) : Xb = bb;
      if (jb + (Eb - 1) * Tb + ab * vb > Xb.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Rb = ab * vb;
      if (Tb < Rb) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Tb !== Rb) {
        const bb = new Lb(Pb),
          Ub = new Uint8Array(Xb, jb),
          Ab = new Uint8Array(bb.buffer),
          Mb = ab * vb;
        for (let ab = 0, Yb = 0, Bb = 0; ab < Eb; ab++, Yb += Tb, Bb += Mb) Ab.set(Ub.subarray(Yb, Yb + Mb), Bb);
        return bb
      }
      return 1 !== vb && 0 !== (jb & vb - 1) && (Ab.e.Warn("Array must be aligned to border of element size. Data will be copied."), eb = !0), eb ? new Lb(Xb.slice(jb, jb + Pb * vb)) : new Lb(Xb, jb, Pb)
    }

    function Lb(bb, ab, Ub, Mb, Tb, Eb, eb, vb) {
      const Lb = ab * Yb(Ub),
        Pb = eb * ab;
      if (vb.length !== Pb) throw new Error("Output length is not valid");
      if (5126 === Ub && Tb === Lb)
        if (bb instanceof Array) {
          const ab = Mb / 4;
          vb.set(bb, ab)
        } else if (ArrayBuffer.isView(bb)) {
        const ab = bb.byteOffset + Mb;
        if (0 !== (3 & ab)) return Ab.e.Warn("Float array must be aligned to 4-bytes border"), void vb.set(new Float32Array(bb.buffer.slice(ab, ab + Pb * Float32Array.BYTES_PER_ELEMENT)));
        const Ub = new Float32Array(bb.buffer, ab, Pb);
        vb.set(Ub)
      } else {
        const ab = new Float32Array(bb, Mb, Pb);
        vb.set(ab)
      } else Bb(bb, Mb, Tb, ab, Ub, Pb, Eb, ((bb, Ub) => {
        for (let Ab = 0; Ab < ab; Ab++) vb[Ub + Ab] = bb[Ab]
      }))
    }

    function Pb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(bb)) {
        for (let Mb = 0; Mb < ab; Mb++)
          if (bb[Ub + Mb] - Ab > 65535) return !0;
        return !1
      }
      return 4 === bb.BYTES_PER_ELEMENT
    }

    function Xb(bb) {
      const ab = bb.buffer;
      if (ab instanceof ArrayBuffer) return bb;
      const Ub = new ArrayBuffer(bb.byteLength);
      return new Uint8Array(Ub).set(new Uint8Array(ab, bb.byteOffset, bb.byteLength)), Ub
    }
  },
  38985: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => mb,
      d: () => ib,
      h: () => fb,
      e: () => Fb,
      l: () => hb
    });
    class Ab {
      constructor() {
        this.children = []
      }
      isValid(bb) {
        return !0
      }
      process(bb, ab, Ub) {
        let Ab = "";
        if (this.line) {
          let Ub = this.line;
          const Mb = ab.processor;
          if (Mb) {
            Mb.lineProcessor && (Ub = Mb.lineProcessor(Ub, ab.isFragment, ab.processingContext));
            const Ab = ab.processor?.attributeKeywordName ?? "attribute",
              Tb = ab.isFragment && ab.processor?.varyingFragmentKeywordName ? ab.processor?.varyingFragmentKeywordName : !ab.isFragment && ab.processor?.varyingVertexKeywordName ? ab.processor?.varyingVertexKeywordName : "varying";
            if (!ab.isFragment && Mb.attributeProcessor && this.line.startsWith(Ab)) Ub = Mb.attributeProcessor(this.line, bb, ab.processingContext);
            else if (Mb.varyingProcessor && (Mb.varyingCheck?.(this.line, ab.isFragment) || !Mb.varyingCheck && this.line.startsWith(Tb))) Ub = Mb.varyingProcessor(this.line, ab.isFragment, bb, ab.processingContext);
            else if (Mb.uniformProcessor && Mb.uniformRegexp && Mb.uniformRegexp.test(this.line)) ab.lookForClosingBracketForUniformBuffer || (Ub = Mb.uniformProcessor(this.line, ab.isFragment, bb, ab.processingContext));
            else if (Mb.uniformBufferProcessor && Mb.uniformBufferRegexp && Mb.uniformBufferRegexp.test(this.line)) ab.lookForClosingBracketForUniformBuffer || (Ub = Mb.uniformBufferProcessor(this.line, ab.isFragment, ab.processingContext), ab.lookForClosingBracketForUniformBuffer = !0);
            else if (Mb.textureProcessor && Mb.textureRegexp && Mb.textureRegexp.test(this.line)) Ub = Mb.textureProcessor(this.line, ab.isFragment, bb, ab.processingContext);
            else if ((Mb.uniformProcessor || Mb.uniformBufferProcessor) && this.line.startsWith("uniform") && !ab.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Mb.uniformProcessor && (Ub = Mb.uniformProcessor(this.line, ab.isFragment, bb, ab.processingContext)) : Mb.uniformBufferProcessor && (Ub = Mb.uniformBufferProcessor(this.line, ab.isFragment, ab.processingContext), ab.lookForClosingBracketForUniformBuffer = !0)
            }
            ab.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (ab.lookForClosingBracketForUniformBuffer = !1, Mb.endOfUniformBufferProcessor && (Ub = Mb.endOfUniformBufferProcessor(this.line, ab.isFragment, ab.processingContext)))
          }
          Ab += Ub + "\n"
        }
        for (const Mb of this.children) Ab += Mb.process(bb, ab, Ub);
        return this.additionalDefineKey && (bb[this.additionalDefineKey] = this.additionalDefineValue || "true", Ub[this.additionalDefineKey] = bb[this.additionalDefineKey]), Ab
      }
    }
    class Mb {
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
        for (const ab of bb) {
          if (!ab || "\r" === ab) continue;
          if ("#" === ab[0]) {
            this._lines.push(ab);
            continue
          }
          const bb = ab.trim();
          if (!bb) continue;
          if (bb.startsWith("//")) {
            this._lines.push(ab);
            continue
          }
          const Ub = bb.indexOf(";");
          if (-1 === Ub) this._lines.push(bb);
          else if (Ub === bb.length - 1) bb.length > 1 && this._lines.push(bb);
          else {
            const bb = ab.split(";");
            for (let ab = 0; ab < bb.length; ab++) {
              let Ub = bb[ab];
              Ub && (Ub = Ub.trim(), Ub && this._lines.push(Ub + (ab !== bb.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Tb extends Ab {
      process(bb, ab, Ub) {
        for (let Ab = 0; Ab < this.children.length; Ab++) {
          const Mb = this.children[Ab];
          if (Mb.isValid(bb)) return Mb.process(bb, ab, Ub)
        }
        return ""
      }
    }
    class Eb extends Ab {
      isValid(bb) {
        return this.testExpression.isTrue(bb)
      }
    }
    class Yb {
      isTrue(bb) {
        return !0
      }
      static postfixToInfix(bb) {
        const ab = [];
        for (const Ub of bb)
          if (void 0 === Yb._OperatorPriority[Ub]) ab.push(Ub);
          else {
            const bb = ab[ab.length - 1],
              Ab = ab[ab.length - 2];
            ab.length -= 2, ab.push(`(${Ab}${Ub}${bb})`)
          } return ab[ab.length - 1]
      }
      static infixToPostfix(bb) {
        const ab = Yb._InfixToPostfixCache.get(bb);
        if (ab) return ab.accessTime = Date.now(), ab.result;
        if (!bb.includes("&&") && !bb.includes("||") && !bb.includes(")") && !bb.includes("(")) return [bb];
        const Ub = [];
        let Ab = -1;
        const Mb = () => {
            vb = vb.trim(), "" !== vb && (Ub.push(vb), vb = "")
          },
          Tb = bb => {
            Ab < Yb._Stack.length - 1 && (Yb._Stack[++Ab] = bb)
          },
          Eb = () => Yb._Stack[Ab],
          Bb = () => -1 === Ab ? "!!INVALID EXPRESSION!!" : Yb._Stack[Ab--];
        let eb = 0,
          vb = "";
        for (; eb < bb.length;) {
          const ab = bb.charAt(eb),
            Lb = eb < bb.length - 1 ? bb.substring(eb, 2 + eb) : "";
          if ("(" === ab) vb = "", Tb(ab);
          else if (")" === ab) {
            for (Mb(); - 1 !== Ab && "(" !== Eb();) Ub.push(Bb());
            Bb()
          } else if (Yb._OperatorPriority[Lb] > 1) {
            for (Mb(); - 1 !== Ab && Yb._OperatorPriority[Eb()] >= Yb._OperatorPriority[Lb];) Ub.push(Bb());
            Tb(Lb), eb++
          } else vb += ab;
          eb++
        }
        for (Mb(); - 1 !== Ab;) "(" === Eb() ? Bb() : Ub.push(Bb());
        return Yb._InfixToPostfixCache.size >= Yb.InfixToPostfixCacheLimitSize && Yb.ClearCache(), Yb._InfixToPostfixCache.set(bb, {
          result: Ub,
          accessTime: Date.now()
        }), Ub
      }
      static ClearCache() {
        const bb = Array.from(Yb._InfixToPostfixCache.entries()).sort(((bb, ab) => bb[1].accessTime - ab[1].accessTime));
        for (let ab = 0; ab < Yb.InfixToPostfixCacheCleanupSize; ab++) Yb._InfixToPostfixCache.delete(bb[ab][0])
      }
    }
    Yb.InfixToPostfixCacheLimitSize = 5e4, Yb.InfixToPostfixCacheCleanupSize = 25e3, Yb._InfixToPostfixCache = new Map, Yb._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, Yb._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Bb extends Yb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = bb, this.not = ab
      }
      isTrue(bb) {
        let ab = void 0 !== bb[this.define];
        return this.not && (ab = !ab), ab
      }
    }
    class eb extends Yb {
      isTrue(bb) {
        return this.leftOperand.isTrue(bb) || this.rightOperand.isTrue(bb)
      }
    }
    class vb extends Yb {
      isTrue(bb) {
        return this.leftOperand.isTrue(bb) && this.rightOperand.isTrue(bb)
      }
    }
    class Lb extends Yb {
      constructor(bb, ab, Ub) {
        super(), this.define = bb, this.operand = ab, this.testValue = Ub
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(bb) {
        let ab = !1;
        const Ub = parseInt(void 0 != bb[this.define] ? bb[this.define] : this.define),
          Ab = parseInt(void 0 != bb[this.testValue] ? bb[this.testValue] : this.testValue);
        if (isNaN(Ub) || isNaN(Ab)) return !1;
        switch (this.operand) {
          case ">":
            ab = Ub > Ab;
            break;
          case "<":
            ab = Ub < Ab;
            break;
          case "<=":
            ab = Ub <= Ab;
            break;
          case ">=":
            ab = Ub >= Ab;
            break;
          case "==":
            ab = Ub === Ab;
            break;
          case "!=":
            ab = Ub !== Ab
        }
        return ab
      }
    }
    var Pb = Ub(38982),
      Xb = Ub(38973);
    const jb = /defined\s*?\((.+?)\)/g,
      Rb = /defined\s*?\[(.+?)\]/g,
      kb = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      yb = /__decl__/,
      Zb = /light\{X\}.(\w*)/g,
      Db = /\{X\}/g,
      zb = [],
      xb = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function ib(bb) {
      bb.processor && bb.processor.initializeShaders && bb.processor.initializeShaders(bb.processingContext)
    }

    function fb(bb, ab, Ub, Ab) {
      ab.processor?.preProcessShaderCode && (bb = ab.processor.preProcessShaderCode(bb, ab.isFragment)), Fb(bb, ab, (bb => {
        ab.processCodeAfterIncludes && (bb = ab.processCodeAfterIncludes(ab.isFragment ? "fragment" : "vertex", bb, ab.defines));
        const Mb = function(bb, ab, Ub) {
          let Ab = function(bb, ab) {
            if (ab.processor?.noPrecision) return bb;
            const Ub = ab.shouldUseHighPrecisionShader; - 1 === bb.indexOf("precision highp float") ? bb = Ub ? "precision highp float;\n" + bb : "precision mediump float;\n" + bb : Ub || (bb = bb.replace("precision highp float", "precision mediump float"));
            return bb
          }(bb, ab);
          if (!ab.processor) return Ab;
          if (0 === ab.processor.shaderLanguage && -1 !== Ab.indexOf("#version 3") && (Ab = Ab.replace("#version 300 es", ""), !ab.processor.parseGLES3)) return Ab;
          const Mb = ab.defines,
            Tb = db(ab, Ub);
          ab.processor.preProcessor && (Ab = ab.processor.preProcessor(Ab, Mb, Tb, ab.isFragment, ab.processingContext));
          const Eb = {};
          Ab = Ib(Ab, Tb, ab, Eb), ab.processor.postProcessor && (Ab = ab.processor.postProcessor(Ab, Mb, ab.isFragment, ab.processingContext, Ub ? {
            drawBuffersExtensionDisabled: !Ub.getCaps().drawBuffersExtension
          } : {}, Tb, Eb));
          Ub?._features.needShaderCodeInlining && (Ab = Ub.inlineShaderCode(Ab));
          return Ab
        }(bb, ab, Ab);
        Ub(Mb, bb)
      }))
    }

    function mb(bb, ab, Ub) {
      return Ub.processor && Ub.processor.finalizeShaders ? Ub.processor.finalizeShaders(bb, ab, Ub.processingContext) : {
        vertexCode: bb,
        fragmentCode: ab
      }
    }

    function pb(bb) {
      const ab = /defined\((.+)\)/.exec(bb);
      if (ab && ab.length) return new Bb(ab[1].trim(), "!" === bb[0]);
      const Ub = ["==", "!=", ">=", "<=", "<", ">"];
      let Ab = "",
        Mb = 0;
      for (Ab of Ub)
        if (Mb = bb.indexOf(Ab), Mb > -1) break;
      if (-1 === Mb) return new Bb(bb);
      const Tb = bb.substring(0, Mb).trim(),
        Eb = bb.substring(Mb + Ab.length).trim();
      return new Lb(Tb, Ab, Eb)
    }

    function Nb(bb, ab) {
      const Ub = new Eb,
        Ab = bb.substring(0, ab);
      let Mb = bb.substring(ab);
      return Mb = Mb.substring(0, (Mb.indexOf("//") + 1 || Mb.length + 1) - 1).trim(), Ub.testExpression = "#ifdef" === Ab ? new Bb(Mb) : "#ifndef" === Ab ? new Bb(Mb, !0) : function(bb) {
        bb = bb.replace(jb, "defined[$1]");
        const ab = Yb.infixToPostfix(bb),
          Ub = [];
        for (const Mb of ab)
          if ("||" !== Mb && "&&" !== Mb) Ub.push(Mb);
          else if (Ub.length >= 2) {
          let bb = Ub[Ub.length - 1],
            ab = Ub[Ub.length - 2];
          Ub.length -= 2;
          const Ab = "&&" == Mb ? new vb : new eb;
          "string" === typeof bb && (bb = bb.replace(Rb, "defined($1)")), "string" === typeof ab && (ab = ab.replace(Rb, "defined($1)")), Ab.leftOperand = "string" === typeof ab ? pb(ab) : ab, Ab.rightOperand = "string" === typeof bb ? pb(bb) : bb, Ub.push(Ab)
        }
        let Ab = Ub[Ub.length - 1];
        return "string" === typeof Ab && (Ab = Ab.replace(Rb, "defined($1)")), "string" === typeof Ab ? pb(Ab) : Ab
      }(Mb), Ub
    }

    function Wb(bb, ab, Ub, Mb) {
      let Tb;
      for (; Hb(bb, Ub, Mb);) {
        Tb = bb.currentLine;
        const Eb = Tb.substring(0, 5).toLowerCase();
        if ("#else" === Eb) {
          const Ub = new Ab;
          return ab.children.push(Ub), void Hb(bb, Ub, Mb)
        }
        if ("#elif" === Eb) {
          const bb = Nb(Tb, 5);
          ab.children.push(bb), Ub = bb
        }
      }
    }

    function Hb(bb, ab, Ub) {
      for (; bb.canRead;) {
        bb.lineIndex++;
        const Mb = bb.currentLine;
        if (Mb.indexOf("#") >= 0) {
          const Ab = xb.exec(Mb);
          if (Ab && Ab.length) {
            switch (Ab[0]) {
              case "#ifdef": {
                const Ab = new Tb;
                ab.children.push(Ab);
                const Eb = Nb(Mb, 6);
                Ab.children.push(Eb), Wb(bb, Ab, Eb, Ub);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Ab = new Tb;
                ab.children.push(Ab);
                const Eb = Nb(Mb, 7);
                Ab.children.push(Eb), Wb(bb, Ab, Eb, Ub);
                break
              }
              case "#if": {
                const Ab = new Tb,
                  Eb = Nb(Mb, 3);
                ab.children.push(Ab), Ab.children.push(Eb), Wb(bb, Ab, Eb, Ub);
                break
              }
            }
            continue
          }
        }
        const Eb = new Ab;
        if (Eb.line = Mb, ab.children.push(Eb), "#" === Mb[0] && "d" === Mb[1]) {
          const bb = Mb.replace(";", "").split(" ");
          Eb.additionalDefineKey = bb[1], 3 === bb.length && (Eb.additionalDefineValue = bb[2])
        }
      }
      return !1
    }

    function Ib(bb, ab, Ub, Tb) {
      const Eb = new Ab,
        Yb = new Mb;
      return Yb.lineIndex = -1, Yb.lines = bb.split("\n"), Hb(Yb, Eb, Tb), Eb.process(ab, Ub, Tb)
    }

    function db(bb, ab) {
      const Ub = bb.defines,
        Ab = {};
      for (const Mb of Ub) {
        const bb = Mb.replace("#define", "").replace(";", "").trim().split(" ");
        Ab[bb[0]] = bb.length > 1 ? bb[1] : ""
      }
      return 0 === bb.processor?.shaderLanguage && (Ab.GL_ES = "true"), Ab.__VERSION__ = bb.version, Ab[bb.platformName] = "true", (0, Xb.g)(Ab, ab?.isNDCHalfZRange, ab?.hUb, ab?.useExactSrgbConversions), Ab
    }

    function Fb(bb, ab, Ub) {
      let Ab;
      for (zb.length = 0; null !== (Ab = kb.exec(bb));) zb.push(Ab);
      let Mb = [bb],
        Tb = !1;
      for (const Yb of zb) {
        let bb = Yb[1];
        if (-1 !== bb.indexOf("__decl__") && (bb = bb.replace(yb, ""), ab.supportsUniformBuffers && (bb = bb.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), bb += "Declaration"), !ab.includesShadersStore[bb]) {
          const Ab = ab.shadersRepository + "ShadersInclude/" + bb + ".fx";
          return void hb.loadFile(Ab, (Ab => {
            ab.includesShadersStore[bb] = Ab, Fb(Mb.join(""), ab, Ub)
          }))
        } {
          let Ub = ab.includesShadersStore[bb];
          if (Yb[2]) {
            const bb = Yb[3].split(",");
            for (let ab = 0; ab < bb.length; ab += 2) {
              const Ab = new RegExp(bb[ab], "g"),
                Mb = bb[ab + 1];
              Ub = Ub.replace(Ab, Mb)
            }
          }
          if (Yb[4]) {
            const bb = Yb[5];
            if (-1 !== bb.indexOf("..")) {
              const Ab = bb.split(".."),
                Mb = parseInt(Ab[0]);
              let Tb = parseInt(Ab[1]),
                Eb = Ub.slice(0);
              Ub = "", isNaN(Tb) && (Tb = ab.indexParameters[Ab[1]]);
              for (let bb = Mb; bb < Tb; bb++) ab.supportsUniformBuffers || (Eb = Eb.replace(Zb, ((bb, ab) => ab + "{X}"))), Ub += Eb.replace(Db, bb.toString()) + "\n"
            } else ab.supportsUniformBuffers || (Ub = Ub.replace(Zb, ((bb, ab) => ab + "{X}"))), Ub = Ub.replace(Db, bb)
          }
          const Ab = [];
          for (const bb of Mb) {
            const ab = bb.split(Yb[0]);
            for (let bb = 0; bb < ab.length - 1; bb++) Ab.push(ab[bb]), Ab.push(Ub);
            Ab.push(ab[ab.length - 1])
          }
          Mb = Ab, Tb = Tb || Ub.indexOf("#include<") >= 0 || Ub.indexOf("#include <") >= 0
        }
      }
      zb.length = 0;
      const Eb = Mb.join("");
      Tb ? Fb(Eb.toString(), ab, Ub) : Ub(Eb)
    }
    const hb = {
      loadFile: (bb, ab, Ub, Ab, Mb, Tb) => {
        throw (0, Pb.l)("FileTools")
      }
    }
  },
  38973: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      e: () => Tb,
      g: () => Yb,
      i: () => Eb,
      m: () => Bb
    });
    var Ab = Ub(38982);
    const Mb = {};

    function Tb(bb, ab) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (ab ? ab + "\n" : "") + bb
    }

    function Eb(bb, ab, Ub, Tb, Eb, Yb, Bb) {
      const eb = Bb || Mb.loadFile;
      if (!eb) throw (0, Ab.l)("FileTools");
      return eb(bb, ab, Ub, Tb, Eb, Yb)
    }

    function Yb(bb, ab, Ub, Ab) {
      if (bb) return ab ? bb.IS_NDC_HALF_ZRANGE = "" : delete bb.IS_NDC_HALF_ZRANGE, Ub ? bb.USE_REVERSE_DEPTHBUFFER = "" : delete bb.USE_REVERSE_DEPTHBUFFER, void(Ab ? bb.USE_EXACT_SRGB_CONVERSIONS = "" : delete bb.USE_EXACT_SRGB_CONVERSIONS);
      {
        let bb = "";
        return ab && (bb += "#define IS_NDC_HALF_ZRANGE"), Ub && (bb && (bb += "\n"), bb += "#define USE_REVERSE_DEPTHBUFFER"), Ab && (bb && (bb += "\n"), bb += "#define USE_EXACT_SRGB_CONVERSIONS"), bb
      }
    }

    function Bb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ab = arguments.length > 3 ? arguments[3] : void 0;
      switch (bb) {
        case 3: {
          const bb = new Int8Array(ab);
          return Ab && bb.set(new Int8Array(Ab)), bb
        }
        case 0: {
          const bb = new Uint8Array(ab);
          return Ab && bb.set(new Uint8Array(Ab)), bb
        }
        case 4: {
          const bb = "number" !== typeof ab ? new Int16Array(ab) : new Int16Array(Ub ? ab / 2 : ab);
          return Ab && bb.set(new Int16Array(Ab)), bb
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const bb = "number" !== typeof ab ? new Uint16Array(ab) : new Uint16Array(Ub ? ab / 2 : ab);
          return Ab && bb.set(new Uint16Array(Ab)), bb
        }
        case 6: {
          const bb = "number" !== typeof ab ? new Int32Array(ab) : new Int32Array(Ub ? ab / 4 : ab);
          return Ab && bb.set(new Int32Array(Ab)), bb
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const bb = "number" !== typeof ab ? new Uint32Array(ab) : new Uint32Array(Ub ? ab / 4 : ab);
          return Ab && bb.set(new Uint32Array(Ab)), bb
        }
        case 1: {
          const bb = "number" !== typeof ab ? new Float32Array(ab) : new Float32Array(Ub ? ab / 4 : ab);
          return Ab && bb.set(new Float32Array(Ab)), bb
        }
      }
      const Mb = new Uint8Array(ab);
      return Ab && Mb.set(new Uint8Array(Ab)), Mb
    }
  },
  38982: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => eb,
      g: () => vb,
      i: () => Bb,
      l: () => Mb
    });
    const Ab = {};

    function Mb(bb) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Ab[bb]) return Ab[bb] = !0, `${bb} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Tb = {};
    let Eb = !1,
      Yb = 0;

    function Bb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Ab = function() {
        if ((Ub || Eb) && 0 === Yb) {
          const Ub = `${bb}.${ab}`;
          Tb[Ub] || (Tb[Ub] = !0, console.warn(`[Babylon.js] ${Ub}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Ab.__isSideEffectStub = !0, Ab
    }

    function eb(bb) {
      return !!bb && !bb.__isSideEffectStub
    }

    function vb(bb, ab) {
      return {
        get() {},
        set(bb) {
          Object.defineProperty(this, ab, {
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
  38955: (bb, ab, Ub) => {
    function Ab() {
      return "undefined" !== typeof window
    }

    function Mb() {
      return "undefined" !== typeof navigator
    }

    function Tb() {
      return "undefined" !== typeof document
    }

    function Eb(bb) {
      let ab = "",
        Ub = bb.firstChild;
      for (; Ub;) 3 === Ub.nodeType && (ab += Ub.textContent), Ub = Ub.nextSibling;
      return ab
    }
    Ub.d(ab, {
      b: () => Eb,
      d: () => Tb,
      g: () => Mb,
      k: () => Ab
    })
  },
  39160: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab,
      h: () => Mb,
      i: () => Tb
    });
    class Ab extends Error {}
    Ab._setPrototypeOf = Object.setPrototypeOf || ((bb, ab) => (bb.__proto__ = ab, bb));
    const Mb = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Tb extends Ab {
      constructor(bb, ab, Ub) {
        super(bb), this.errorCode = ab, this.innerError = Ub, this.name = "RuntimeError", Ab._setPrototypeOf(this, Tb.prototype)
      }
    }
  },
  39146: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => db,
      g: () => Db,
      h: () => Nb,
      i: () => Hb,
      j: () => mb,
      m: () => ib,
      n: () => fb,
      q: () => qb,
      s: () => pb,
      t: () => zb
    });
    var Ab = Ub(39153),
      Mb = Ub(38955),
      Tb = Ub(36431);
    class Eb {}
    Eb.FilesToLoad = {};
    var Yb = Ub(39160),
      Bb = Ub(39163),
      eb = Ub(36425),
      vb = Ub(38973),
      Lb = Ub(38985),
      Pb = Ub(37989),
      Xb = Ub(38993),
      jb = Ub(39167);
    const Rb = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class kb extends Yb.i {
      constructor(bb, ab) {
        super(bb, Yb.h.LoadFileError), this.name = "LoadFileError", Yb.d._setPrototypeOf(this, kb.prototype), ab instanceof Ab.d ? this.request = ab : this.file = ab
      }
    }
    class yb extends Yb.i {
      constructor(bb, ab) {
        super(bb, Yb.h.RequestFileError), this.request = ab, this.name = "RequestFileError", Yb.d._setPrototypeOf(this, yb.prototype)
      }
    }
    class Zb extends Yb.i {
      constructor(bb, ab) {
        super(bb, Yb.h.ReadFileError), this.file = ab, this.name = "ReadFileError", Yb.d._setPrototypeOf(this, Zb.prototype)
      }
    }
    const Db = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (Ub, Ab, Mb) => 0 !== Ab.status || Mb >= bb || -1 !== Ub.indexOf("file:") ? -1 : Math.pow(2, Mb) * ab
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: bb => bb,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: bb => bb,
        CleanUrl: bb => bb = bb.replace(/#/gm, "%23")
      },
      zb = (bb, ab) => {
        if ((!bb || 0 !== bb.indexOf("data:")) && Db.CorsBehavior)
          if ("string" === typeof Db.CorsBehavior || Db.CorsBehavior instanceof String) ab.crossOrigin = Db.CorsBehavior;
          else {
            const Ub = Db.CorsBehavior(bb);
            Ub && (ab.crossOrigin = Ub)
          }
      },
      xb = {
        getRequiredSize: null
      },
      ib = function(bb, ab, Ub, Mb) {
        let Tb, Yb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          vb = arguments.length > 5 ? arguments[5] : void 0,
          Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : eb.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Lb?._features.forceBitmapOverHTMLImageElement) return Ub("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Lb?._features.forceBitmapOverHTMLImageElement && "string" !== typeof bb && "undefined" !== typeof Blob) {
          let Ab;
          if (bb instanceof Blob) Ab = bb;
          else {
            const ab = bb instanceof ArrayBuffer ? bb : (0, jb.k)(bb);
            Ab = new Blob([ab], {
              type: Yb
            })
          }
          return Lb.createImageBitmap(Ab, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...vb
          }).then(ab).catch((ab => {
            Ub && Ub("Error while trying to load image: " + bb, ab)
          })), null
        }
        let Pb = !1;
        if (bb instanceof ArrayBuffer || ArrayBuffer.isView(bb))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let ab;
            ab = bb instanceof ArrayBuffer ? bb : (0, jb.k)(bb), Tb = URL.createObjectURL(new Blob([ab], {
              type: Yb
            })), Pb = !0
          } else Tb = `data:${Yb};base64,` + (0, Bb.g)(bb);
        else bb instanceof Blob ? (Tb = URL.createObjectURL(bb), Pb = !0) : (Tb = Db.CleanUrl(bb), Tb = Db.PreprocessUrl(Tb));
        const Xb = ab => {
          if (Ub) {
            const Ab = Tb || bb.toString();
            Ub(`Error while trying to load image: ${0===Ab.indexOf("http")||Ab.length<=128?Ab:Ab.slice(0,128)+"..."}`, ab)
          }
        };
        if (Lb?._features.forceBitmapOverHTMLImageElement) return mb(Tb, (Ab => {
          Lb.createImageBitmap(new Blob([Ab], {
            type: Yb
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...vb
          }).then((bb => {
            ab(bb), Pb && URL.revokeObjectURL(Tb)
          })).catch((ab => {
            Ub && Ub("Error while trying to load image: " + bb, ab)
          }))
        }), void 0, Mb || void 0, !0, ((bb, ab) => {
          Xb(ab)
        })), null;
        const Rb = new Image;
        if (xb.getRequiredSize) {
          const ab = xb.getRequiredSize(bb);
          ab.width && (Rb.width = ab.width), ab.height && (Rb.height = ab.height)
        }
        zb(Tb, Rb);
        const kb = [],
          yb = () => {
            for (const bb of kb) bb.target.removeEventListener(bb.name, bb.handler);
            kb.length = 0
          };
        kb.push({
          target: Rb,
          name: "load",
          handler: () => {
            yb(), ab(Rb), Pb && Rb.src && URL.revokeObjectURL(Rb.src)
          }
        }), kb.push({
          target: Rb,
          name: "error",
          handler: bb => {
            yb(), Xb(bb), Pb && Rb.src && URL.revokeObjectURL(Rb.src)
          }
        }), kb.push({
          target: document,
          name: "securitypolicyviolation",
          handler: bb => {
            if (bb.blockedURI !== Rb.src || "GX" === bb.disposition) return;
            yb();
            const ab = new Error(`CSP violation of policy ${bb.effectiveDirective} ${bb.blockedURI}. Current policy is ${bb.originalPolicy}`);
            eb.d.UseFallbackTexture = !1, Xb(ab), Pb && Rb.src && URL.revokeObjectURL(Rb.src), Rb.src = ""
          }
        }), (() => {
          for (const bb of kb) bb.target.addEventListener(bb.name, bb.handler)
        })();
        const Zb = "blob:" === Tb.substring(0, 5),
          ib = "data:" === Tb.substring(0, 5),
          fb = () => {
            Zb || ib || !Ab.d.IsCustomRequestAvailable ? Rb.src = Tb : mb(Tb, ((bb, ab, Ub) => {
              const Ab = new Blob([bb], {
                  type: !Yb && Ub ? Ub : Yb
                }),
                Mb = URL.createObjectURL(Ab);
              Pb = !0, Rb.src = Mb
            }), void 0, Mb || void 0, !0, ((bb, ab) => {
              Xb(ab)
            }))
          },
          pb = () => {
            Mb && Mb.loadImage(Tb, Rb)
          };
        if (!Zb && !ib && Mb && Mb.enableTexturesOffline) Mb.open(pb, fb);
        else {
          if (-1 !== Tb.indexOf("file:")) {
            const bb = decodeURIComponent(Tb.substring(5).toLowerCase());
            if (Eb.FilesToLoad[bb] && "undefined" !== typeof URL) {
              try {
                let ab;
                try {
                  ab = URL.createObjectURL(Eb.FilesToLoad[bb])
                } catch (Nb) {
                  ab = URL.createObjectURL(Eb.FilesToLoad[bb])
                }
                Rb.src = ab, Pb = !0
              } catch (Wb) {
                Rb.src = ""
              }
              return Rb
            }
          }
          fb()
        }
        return Rb
      },
      fb = (bb, ab, Ub, Ab, Mb) => {
        const Eb = new FileReader,
          Yb = {
            onCompleteObservable: new Tb.b,
            abort: () => Eb.abort()
          };
        return Eb.onloadend = () => Yb.onCompleteObservable.notifyObservers(Yb), Mb && (Eb.onerror = () => {
          Mb(new Zb(`Unable to read ${bb.name}`, bb))
        }), Eb.onload = bb => {
          ab(bb.target.result)
        }, Ub && (Eb.onprogress = Ub), Ab ? Eb.readAsArrayBuffer(bb) : Eb.readAsText(bb), Yb
      },
      mb = (bb, ab, Ub, Ab, Mb, Bb, eb) => {
        if (bb.name) return fb(bb, ab, Ub, Mb, Bb ? bb => {
          Bb(void 0, bb)
        } : void 0);
        const vb = bb;
        if (-1 !== vb.indexOf("file:")) {
          let bb = decodeURIComponent(vb.substring(5).toLowerCase());
          0 === bb.indexOf("./") && (bb = bb.substring(2));
          const Ab = Eb.FilesToLoad[bb];
          if (Ab) return fb(Ab, ab, Ub, Mb, Bb ? bb => Bb(void 0, new kb(bb.message, bb.file)) : void 0)
        }
        const {
          match: Lb,
          type: jb
        } = Ib(vb);
        if (Lb) {
          const bb = {
            onCompleteObservable: new Tb.b,
            abort: () => () => {}
          };
          try {
            const bb = Mb ? db(vb) : Fb(vb);
            ab(bb, void 0, jb)
          } catch (Yb) {
            Bb ? Bb(void 0, Yb) : Pb.e.Error(Yb.message || "Failed to parse the Data URL")
          }
          return Xb.c.SetImmediate((() => {
            bb.onCompleteObservable.notifyObservers(bb)
          })), bb
        }
        return pb(vb, ((bb, Ub) => {
          ab(bb, Ub?.responseURL, Ub?.getResponseHeader("content-type"))
        }), Ub, Ab, Mb, Bb ? bb => {
          Bb(bb.request, new kb(bb.message, bb.request))
        } : void 0, eb)
      },
      pb = (bb, ab, Ub, Eb, Yb, Bb, vb) => {
        null !== Eb && (Eb ?? (Eb = eb.d.LastCreatedScene?.offlineProvider)), bb = Db.CleanUrl(bb), bb = Db.PreprocessUrl(bb);
        const Lb = Db.BaseUrl + bb;
        let Xb = !1;
        const jb = {
            onCompleteObservable: new Tb.b,
            abort: () => Xb = !0
          },
          Rb = () => {
            let bb, Tb = new Ab.d,
              Eb = null;
            const eb = () => {
              Tb && (Ub && Tb.removeEventListener("progress", Ub), bb && Tb.removeEventListener("readystatechange", bb), Tb.removeEventListener("loadend", Rb))
            };
            let Rb = () => {
              eb(), jb.onCompleteObservable.notifyObservers(jb), jb.onCompleteObservable.clear(), Ub = void 0, bb = null, Rb = null, Bb = void 0, vb = void 0, ab = void 0
            };
            jb.abort = () => {
              Xb = !0, Rb && Rb(), Tb && Tb.readyState !== (XMLHttpRequest.DONE || 4) && Tb.abort(), null !== Eb && (clearTimeout(Eb), Eb = null), Tb = null
            };
            const kb = bb => {
                const ab = bb.message || "Unknown error";
                Bb && Tb ? Bb(new yb(ab, Tb)) : Pb.e.Error(ab)
              },
              Zb = Pb => {
                if (Tb) {
                  if (Tb.open("GET", Lb), vb) try {
                    vb(Tb)
                  } catch (jb) {
                    return void kb(jb)
                  }
                  Yb && (Tb.responseType = "arraybuffer"), Ub && Tb.addEventListener("progress", Ub), Rb && Tb.addEventListener("loadend", Rb), bb = () => {
                    if (!Xb && Tb && Tb.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (bb && Tb.removeEventListener("readystatechange", bb), Tb.status >= 200 && Tb.status < 300 || 0 === Tb.status && (!(0, Mb.k)() || Wb())) {
                        const bb = Yb ? Tb.response : Tb.responseText;
                        if (null !== bb) {
                          try {
                            ab && ab(bb, Tb)
                          } catch (jb) {
                            kb(jb)
                          }
                          return
                        }
                      }
                      const Ub = Db.DefaultRetryStrategy;
                      if (Ub) {
                        const bb = Ub(Lb, Tb, Pb);
                        if (-1 !== bb) return eb(), Tb = new Ab.d, void(Eb = setTimeout((() => Zb(Pb + 1)), bb))
                      }
                      const vb = new yb("Error status: " + Tb.status + " " + Tb.statusText + " - Unable to load " + Lb, Tb);
                      Bb && Bb(vb)
                    }
                  }, Tb.addEventListener("readystatechange", bb), Tb.send()
                }
              };
            Zb(0)
          };
        if (Eb && Eb.enableSceneOffline && !bb.startsWith("blob:")) {
          const Ab = bb => {
              bb && bb.status > 400 ? Bb && Bb(bb) : Rb()
            },
            Mb = () => {
              Eb && Eb.loadFile(Db.BaseUrl + bb, (bb => {
                !Xb && ab && ab(bb), jb.onCompleteObservable.notifyObservers(jb)
              }), Ub ? bb => {
                !Xb && Ub && Ub(bb)
              } : void 0, Ab, Yb)
            };
          Eb.open(Mb, Ab)
        } else Rb();
        return jb
      },
      Nb = bb => {
        const {
          match: ab,
          type: Ub
        } = Ib(bb);
        if (ab) return Ub || void 0;
        const Ab = bb.lastIndexOf(".");
        switch (bb.substring(Ab + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "iN":
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
      Wb = () => "undefined" !== typeof location && "file:" === location.protocol,
      Hb = bb => Rb.test(bb),
      Ib = bb => {
        const ab = Rb.exec(bb);
        if (null === ab || 0 === ab.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: ab[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function db(bb) {
      return (0, Bb.d)(bb.split(",")[1])
    }
    const Fb = bb => (0, Bb.e)(bb.split(",")[1]);
    let hb;
    const Gb = (bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) => {
      hb = {
        DecodeBase64UrlToBinary: bb,
        DecodeBase64UrlToString: ab,
        DefaultRetryStrategy: Ub.DefaultRetryStrategy,
        BaseUrl: Ub.BaseUrl,
        CorsBehavior: Ub.CorsBehavior,
        PreprocessUrl: Ub.PreprocessUrl,
        IsBase64DataUrl: Ab,
        IsFileURL: Mb,
        LoadFile: Tb,
        LoadImage: Eb,
        ReadFile: Yb,
        RequestFile: Bb,
        SetCorsBehavior: eb
      }, Object.defineProperty(hb, "DefaultRetryStrategy", {
        get: function() {
          return Ub.DefaultRetryStrategy
        },
        set: function(bb) {
          Ub.DefaultRetryStrategy = bb
        }
      }), Object.defineProperty(hb, "BaseUrl", {
        get: function() {
          return Ub.BaseUrl
        },
        set: function(bb) {
          Ub.BaseUrl = bb
        }
      }), Object.defineProperty(hb, "PreprocessUrl", {
        get: function() {
          return Ub.PreprocessUrl
        },
        set: function(bb) {
          Ub.PreprocessUrl = bb
        }
      }), Object.defineProperty(hb, "CorsBehavior", {
        get: function() {
          return Ub.CorsBehavior
        },
        set: function(bb) {
          Ub.CorsBehavior = bb
        }
      })
    };
    let Qb = !1;

    function qb() {
      Qb || (Qb = !0, Gb(db, Fb, Db, Hb, Wb, mb, ib, fb, pb, zb), vb.c.loadFile = mb, vb.c.loadImage = ib, Lb.l.loadFile = mb)
    }
  },
  39169: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb,
      h: () => Tb,
      j: () => Eb
    });
    let Ab = null;

    function Mb() {
      if (Ab) return Ab;
      const bb = new ArrayBuffer(4),
        ab = new Float32Array(bb),
        Ub = new Uint32Array(bb),
        Mb = new Uint32Array(512),
        Tb = new Uint32Array(512);
      for (let Ab = 0; Ab < 256; ++Ab) {
        const bb = Ab - 127;
        bb < -24 ? (Mb[Ab] = 0, Mb[256 | Ab] = 32768, Tb[Ab] = 24, Tb[256 | Ab] = 24) : bb < -14 ? (Mb[Ab] = 1024 >> -bb - 14, Mb[256 | Ab] = 1024 >> -bb - 14 | 32768, Tb[Ab] = -bb - 1, Tb[256 | Ab] = -bb - 1) : bb <= 15 ? (Mb[Ab] = bb + 15 << 10, Mb[256 | Ab] = bb + 15 << 10 | 32768, Tb[Ab] = 13, Tb[256 | Ab] = 13) : bb < 128 ? (Mb[Ab] = 31744, Mb[256 | Ab] = 64512, Tb[Ab] = 24, Tb[256 | Ab] = 24) : (Mb[Ab] = 31744, Mb[256 | Ab] = 64512, Tb[Ab] = 13, Tb[256 | Ab] = 13)
      }
      const Eb = new Uint32Array(2048),
        Yb = new Uint32Array(64),
        Bb = new Uint32Array(64);
      for (let Ab = 1; Ab < 1024; ++Ab) {
        let bb = Ab << 13,
          ab = 0;
        for (; 0 === (8388608 & bb);) bb <<= 1, ab -= 8388608;
        bb &= -8388609, ab += 947912704, Eb[Ab] = bb | ab
      }
      for (let Ab = 1024; Ab < 2048; ++Ab) Eb[Ab] = 939524096 + (Ab - 1024 << 13);
      for (let Ab = 1; Ab < 31; ++Ab) Yb[Ab] = Ab << 23;
      Yb[31] = 1199570944, Yb[32] = 2147483648;
      for (let Ab = 33; Ab < 63; ++Ab) Yb[Ab] = 2147483648 + (Ab - 32 << 23);
      Yb[63] = 3347054592;
      for (let Ab = 1; Ab < 64; ++Ab) 32 !== Ab && (Bb[Ab] = 1024);
      return Ab = {
        floatView: ab,
        uint32View: Ub,
        baseTable: Mb,
        shiftTable: Tb,
        mantissaTable: Eb,
        exponentTable: Yb,
        offsetTable: Bb
      }, Ab
    }
    const Tb = 65504;

    function Eb(bb) {
      const ab = Mb();
      ab.floatView[0] = bb;
      const Ub = ab.uint32View[0],
        Ab = Ub >> 23 & 511;
      return ab.baseTable[Ab] + ((8388607 & Ub) >> ab.shiftTable[Ab])
    }

    function Yb(bb) {
      const ab = Mb();
      return ab.uint32View[0] = ab.mantissaTable[ab.offsetTable[bb >> 10] + (1023 & bb)] + ab.exponentTable[bb >> 10], ab.floatView[0]
    }
  },
  39163: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      e: () => Mb,
      g: () => Ab
    });
    const Ab = bb => {
        const ab = ArrayBuffer.isView(bb) ? new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength) : new Uint8Array(bb);
        return "function" === typeof ab.toBase64 ? ab.toBase64() : function(bb) {
          const ab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb = "",
            vb = 0;
          for (; vb < bb.length;) Ub = bb[vb++], Ab = vb < bb.length ? bb[vb++] : Number.NaN, Mb = vb < bb.length ? bb[vb++] : Number.NaN, Tb = Ub >> 2, Eb = (3 & Ub) << 4 | Ab >> 4, Yb = (15 & Ab) << 2 | Mb >> 6, Bb = 63 & Mb, isNaN(Ab) ? Yb = Bb = 64 : isNaN(Mb) && (Bb = 64), eb += ab.charAt(Tb) + ab.charAt(Eb) + ab.charAt(Yb) + ab.charAt(Bb);
          return eb
        }(ab)
      },
      Mb = bb => atob(bb),
      Tb = bb => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(bb).buffer : function(bb) {
        const ab = Mb(bb),
          Ub = ab.length,
          Ab = new Uint8Array(new ArrayBuffer(Ub));
        for (let Mb = 0; Mb < Ub; Mb++) Ab[Mb] = ab.charCodeAt(Mb);
        return Ab.buffer
      }(bb)
  },
  38993: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      f: () => Eb
    });
    let Ab = [];
    class Mb {
      static SetImmediate(bb) {
        0 === Ab.length && setTimeout((() => {
          const bb = Ab;
          Ab = [];
          for (const ab of bb) ab()
        }), 1), Ab.push(bb)
      }
    }

    function Tb(bb, ab, Ub) {
      try {
        if (bb()) return ab(), !0
      } catch (Ab) {
        return Ub?.(Ab), !0
      }
      return !1
    }
    const Eb = function(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        Eb = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Tb(bb, ab, Ub)) return null;
      const Yb = setInterval((() => {
        Tb(bb, ab, Ub) ? clearInterval(Yb) : (Mb -= Ab, Mb < 0 && (clearInterval(Yb), Ub?.(new Error("Operation timed out after maximum retries. " + (Eb || "")), !0)))
      }), Ab);
      return () => clearInterval(Yb)
    }
  },
  39153: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Ab.CustomRequestHeaders).length > 0 || Ab.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(bb) {
        return bb = (bb = bb.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(bb) {
        return Ab.SkipRequestModificationForBabylonCDN && (bb.includes("preview.babylonjs.com") || bb.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(bb) {
        const ab = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Ab._ShouldSkipRequestModifications(bb)) return {
          url: bb,
          headers: ab
        };
        for (const Mb in Ab.CustomRequestHeaders) {
          const bb = Ab.CustomRequestHeaders[Mb];
          bb && (ab[Mb] = bb)
        }
        const Ub = {
          setRequestHeader: (bb, Ub) => {
            ab[bb] = Ub
          }
        };
        for (const Mb of Ab.CustomRequestModifiers) {
          if (Ab._ShouldSkipRequestModifications(bb)) break;
          const ab = Mb(Ub, bb);
          "string" === typeof ab && (bb = ab)
        }
        return {
          url: bb,
          headers: ab
        }
      }
      static async FetchAsync(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Ub = ab.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Mb,
            headers: Tb
          } = Ab._CollectCustomizations(Ab._CleanUrl(bb), ab.headers ?? {});
          return await fetch(Mb, {
            method: Ub,
            headers: Tb,
            body: ab.body ?? void 0
          })
        }
        return await new Promise(((Mb, Tb) => {
          const Eb = new Ab;
          Eb.responseType = "arraybuffer", Eb.addEventListener("readystatechange", (() => {
            if (4 === Eb.readyState)
              if (Eb.status >= 200 && Eb.status < 300) {
                const bb = "undefined" !== typeof Headers ? new Headers : void 0,
                  ab = Eb.getResponseHeader("Content-Type");
                ab && bb && bb.set("Content-Type", ab), "undefined" !== typeof Response ? Mb(new Response(Eb.response, {
                  status: Eb.status,
                  statusText: Eb.statusText,
                  headers: bb
                })) : Mb({
                  ok: !0,
                  status: Eb.status,
                  statusText: Eb.statusText,
                  headers: {
                    get: bb => Eb.getResponseHeader(bb)
                  },
                  arrayBuffer: async () => await Promise.resolve(Eb.response)
                })
              } else Tb(new Error(`HTTP ${Eb.status} loading '${Eb.requestURL}': ${Eb.statusText}`))
          })), Eb.open(Ub, bb, ab.headers), Eb.send(ab.body ?? null)
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
      addEventListener(bb, ab, Ub) {
        this._xhr.addEventListener(bb, ab, Ub)
      }
      removeEventListener(bb, ab, Ub) {
        this._xhr.removeEventListener(bb, ab, Ub)
      }
      abort() {
        this._xhr.abort()
      }
      send(bb) {
        this._xhr.send(bb)
      }
      open(bb, ab, Ub) {
        const {
          url: Mb,
          headers: Tb
        } = Ab._CollectCustomizations(ab, Ub);
        this._requestURL = Ab._CleanUrl(Mb), this._xhr.open(bb, this._requestURL, !0);
        for (const Ab in Tb) this._xhr.setRequestHeader(Ab, Tb[Ab])
      }
      setRequestHeader(bb, ab) {
        this._xhr.setRequestHeader(bb, ab)
      }
      getResponseHeader(bb) {
        return this._xhr.getResponseHeader(bb)
      }
    }
    Ab.CustomRequestHeaders = {}, Ab.CustomRequestModifiers = new Array, Ab.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);