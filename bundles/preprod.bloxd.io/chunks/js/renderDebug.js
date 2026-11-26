export const id = 56;
export const ids = [56];
export const modules = {
  5139: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(3105);
    const tH = 3e4,
      zH = 1e3;

    function CH() {
      return "visible" === document.visibilityState && "inGame" === AH.c.get("gameState") && (0, SH.A)()
    }

    function EH(HH, BH) {
      (0, hH.s)() || function(HH, BH, LH) {
        let AH = 0;
        const rH = setInterval((() => {
          BH() && (AH += zH, AH >= HH && (clearInterval(rH), LH()))
        }), zH)
      }(tH, CH, (() => {
        BH().then((() => {
          HH(`saved for the player after ${tH/1e3} s of play`), (0, hH.B)(), rH.k.AX("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  5137: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      installRenderDebug: () => XL,
      renderDebugPlayable: () => YL,
      startRenderDebug: () => GL,
      waitForDraw: () => uL
    });
    var AH = LH(1885),
      rH = LH(5139),
      SH = LH(3105);
    const hH = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function tH(HH) {
      return 7 & HH
    }

    function zH(HH) {
      return HH >>> 11 & 1
    }

    function CH(HH) {
      return [1 + (HH >>> 18 & 63), 1 + (HH >>> 24 & 63)]
    }

    function EH(HH, BH) {
      const [LH, , AH] = HH, rH = tH(AH), SH = function(HH, BH, LH) {
        return BH + (1 === (22 >>> HH & 1) ? 4 - LH : LH) & 3
      }(rH, zH(AH), BH), hH = rH >>> 1, [EH, XH] = CH(LH), GH = 1 === SH || 2 === SH ? EH : 0, YH = SH >= 2 ? XH : 0, uH = [63 & LH, LH >>> 6 & 63, LH >>> 12 & 63];
      return uH[2 === hH ? 0 : 2] += GH, uH[1 === hH ? 0 : 1] += YH, uH
    }

    function XH(HH) {
      const BH = Math.max(...CH(HH[0]));
      return 1 === BH ? "1" : BH <= 4 ? "2-4" : BH <= 16 ? "5-16" : "17-64"
    }
    const GH = 16;

    function YH(HH) {
      let BH = 2166136261;
      for (let LH = 0; LH < HH.length; LH++) BH = Math.imul(BH ^ HH[LH], 16777619);
      return BH >>> 0
    }

    function uH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const AH = Math.max(0, BH - LH),
        rH = Math.min(HH.length, BH + LH),
        SH = [];
      for (let hH = AH; hH < rH; hH++) {
        const LH = HH[hH].toString(16).padStart(2, "0");
        SH.push(hH === BH ? `[${LH}]` : LH)
      }
      return SH.join(" ")
    }
    const QH = {
        NO_ERROR: 0,
        POINTS: 0,
        ARRAY_BUFFER: 34962,
        ELEMENT_ARRAY_BUFFER: 34963,
        ARRAY_BUFFER_BINDING: 34964,
        ELEMENT_ARRAY_BUFFER_BINDING: 34965,
        COPY_READ_BUFFER: 36662,
        COPY_WRITE_BUFFER: 36663,
        COPY_READ_BUFFER_BINDING: 36662,
        COPY_WRITE_BUFFER_BINDING: 36663,
        UNIFORM_BUFFER: 35345,
        UNIFORM_BUFFER_BINDING: 35368,
        PIXEL_UNPACK_BUFFER: 35052,
        PIXEL_UNPACK_BUFFER_BINDING: 35055,
        TRANSFORM_FEEDBACK_BUFFER: 35982,
        TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
        TRANSFORM_FEEDBACK: 36386,
        TRANSFORM_FEEDBACK_BINDING: 36389,
        INTERLEAVED_ATTRIBS: 35980,
        RASTERIZER_DISCARD: 35977,
        STREAM_READ: 35041,
        CURRENT_PROGRAM: 35725,
        LINK_STATUS: 35714,
        VERTEX_SHADER: 35633,
        FRAGMENT_SHADER: 35632,
        DEPTH_FUNC: 2932,
        DEPTH_CLEAR_VALUE: 2931,
        SAMPLES: 32937,
        DRAW_FRAMEBUFFER: 36009,
        DEPTH_ATTACHMENT: 36096,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
        DRAW_FRAMEBUFFER_BINDING: 36006,
        ACTIVE_UNIFORMS: 35718,
        ACTIVE_UNIFORM_BLOCKS: 35382,
        UNIFORM_BLOCK_BINDING: 35391,
        UNIFORM_BLOCK_INDEX: 35386,
        INVALID_INDEX: 4294967295,
        MAX_VERTEX_ATTRIBS: 34921,
        VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
        VERTEX_ATTRIB_ARRAY_SIZE: 34339,
        VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
        VERTEX_ATTRIB_ARRAY_TYPE: 34341,
        VERTEX_ATTRIB_ARRAY_POINTER: 34373,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
        VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
        VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
        CURRENT_VERTEX_ATTRIB: 34342,
        TEXTURE_2D: 3553,
        TEXTURE0: 33984,
        ACTIVE_TEXTURE: 34016,
        TEXTURE_BINDING_2D: 32873,
        READ_FRAMEBUFFER: 36008,
        READ_FRAMEBUFFER_BINDING: 36010,
        COLOR_ATTACHMENT0: 36064,
        RGBA_INTEGER: 36249,
        UNSIGNED_INT: 5125,
        RGBA32UI: 36208,
        RGBA16UI: 36214,
        UNSIGNED_INT_SAMPLER_2D: 36306,
        UNPACK_ROW_LENGTH: 3314,
        UNPACK_SKIP_ROWS: 3315,
        UNPACK_SKIP_PIXELS: 3316,
        FLOAT: 5126,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        INT_VEC2: 35667,
        INT_VEC3: 35668,
        INT_VEC4: 35669,
        UNSIGNED_INT_VEC2: 36294,
        UNSIGNED_INT_VEC3: 36295,
        UNSIGNED_INT_VEC4: 36296,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676
      },
      WH = "_vs2fs_location0";
    const MH = 0,
      xH = 4,
      vH = 6,
      PH = [0, 1, 2, 0, 2, 3],
      TH = 2048,
      UH = 4,
      VH = 256,
      OH = 64,
      bH = 268435456,
      kH = 65536,
      mH = /^#version [^\n]*\/\/ program (\S+)$/m;

    function oH(HH) {
      return null === HH.name ? `#${HH.id}` : `#${HH.id} ${HH.name}`
    }
    const IH = [],
      fH = new WeakMap,
      lH = new WeakMap,
      KH = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let cH = 1;
    const eH = new WeakMap;

    function qH(HH) {
      if (null === HH) return 0;
      let BH = eH.get(HH);
      return void 0 === BH && (BH = cH++, eH.set(HH, BH)), BH
    }
    class gH {
      constructor(HH, BH) {
        this.print = HH, this.now = BH, this.shown = 0, this.LX = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.hX = [], this.dropped = 0
      }
      line(HH) {
        const BH = this.now();
        if (BH - this.second >= 1e3 && (this.second = BH, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.LX++, void this.store(HH);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${HH} (the last line here: the rest go to bloxdDebug.save())` : HH)
      }
      keep(HH) {
        this.sections++, this.store(HH)
      }
      store(HH) {
        this.hX.push(`${new Date(Date.now()).toISOString()} ${HH}`), this.hX.length > 2e4 && (this.hX.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.LX} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.hX].join("\n")
      }
    }
    let NH = null;

    function RH() {
      if (null === NH) {
        const HH = new gH((HH => {
          (0, SH.j)("render", HH)
        }), (() => performance.now()));
        (0, SH.i)("render", (() => HH.dump())), NH = HH
      }
      return NH
    }

    function jH(HH) {
      RH().line(HH)
    }

    function nH(HH) {
      RH().keep(HH)
    }

    function FH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return HH.length <= BH ? HH : `${HH.slice(0,BH)}... (${HH.length-BH} more characters)`
    }

    function DH(HH, BH, LH, AH, rH, SH) {
      const hH = KH.pendingCheck;
      if (null === hH) return;
      const tH = "undefined" !== typeof WebGL2RenderingContext && HH instanceof WebGL2RenderingContext,
        zH = {
          gl: HH,
          program: LH,
          call: AH,
          rW: rH,
          instances: SH,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (hH.draws.push(zH), tH) try {
        const AH = function(HH) {
          const BH = [],
            LH = new Map,
            AH = Math.min(16, HH.getParameter(QH.MAX_VERTEX_ATTRIBS));
          for (let rH = 0; rH < AH; rH++) {
            if (!HH.getVertexAttrib(rH, QH.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const AH = HH.getVertexAttrib(rH, QH.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              SH = HH.getVertexAttribOffset(rH, QH.VERTEX_ATTRIB_ARRAY_POINTER),
              hH = HH.getVertexAttrib(rH, QH.VERTEX_ATTRIB_ARRAY_STRIDE),
              tH = HH.getVertexAttrib(rH, QH.VERTEX_ATTRIB_ARRAY_SIZE),
              zH = HH.getVertexAttrib(rH, QH.VERTEX_ATTRIB_ARRAY_TYPE),
              CH = "VERTEX_ATTRIB_ARRAY_INTEGER" in HH && HH.getVertexAttrib(rH, QH.VERTEX_ATTRIB_ARRAY_INTEGER),
              EH = "VERTEX_ATTRIB_ARRAY_DIVISOR" in HH ? HH.getVertexAttrib(rH, QH.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            LH.set(rH, {
              buffer: AH,
              offset: SH,
              stride: hH
            }), BH.push(`@${rH} buf#${qH(AH)} +${SH} stride ${hH} ${tH}x0x${zH.toString(16)}${CH?" int":""} div ${EH}`)
          }
          return {
            lines: BH,
            byLocation: LH
          }
        }(HH);
        if (zH.attributes = AH.lines, "inst" === LH.terrain) {
          const {
            group: rH,
            chunk: tH
          } = function(HH, BH, LH) {
            const AH = BH.get(vH),
              rH = HH.getVertexAttrib(vH, QH.CURRENT_VERTEX_ATTRIB),
              SH = AH ? `+${AH.offset}` : rH ? Array.from(rH).slice(0, 3).join(",") : "?";
            let hH = LH.groups.get(SH);
            return void 0 === hH && (hH = LH.groups.size, LH.groups.set(SH, hH)), {
              group: hH,
              chunk: SH
            }
          }(HH, AH.byLocation, hH);
          zH.group = rH, zH.chunk = tH;
          for (const HH of [MH, xH]) {
            var CH;
            const BH = null === (CH = AH.byLocation.get(HH)) || void 0 === CH ? void 0 : CH.buffer;
            BH && zH.pages.push({
              kind: "buf",
              buffer: BH
            })
          }! function(HH, BH, LH, AH, rH, SH, hH) {
            const tH = AH.get(MH),
              zH = hH.parts.get(SH);
            if (void 0 === zH && hH.parts.size >= UH) return;
            const CH = Math.min(rH, OH, VH - (null !== zH && void 0 !== zH ? zH : 0));
            if (null === tH || void 0 === tH || !tH.buffer || CH <= 0) return;
            const EH = wH(HH, BH, LH);
            if (!EH) return;
            const XH = tH.stride || 12,
              GH = JH(HH, tH.buffer, tH.offset, (CH - 1) * XH + 12),
              YH = new DataView(GH.buffer),
              uH = function(HH, BH) {
                const LH = function(HH) {
                    const BH = yH.get(HH);
                    if (void 0 !== BH && (null === BH || HH.isProgram(BH))) return BH;
                    KH.inProbe = !0;
                    let LH = null;
                    try {
                      LH = ZH(HH, iH, pH, "fed", "the record feed")
                    } finally {
                      KH.inProbe = !1
                    }
                    return yH.set(HH, LH), LH
                  }(HH),
                  AH = LH ? sH(HH, LH, BH, (() => {
                    HH.drawArraysInstanced(QH.POINTS, 0, 1, BH)
                  }), "decode probe input (the record feed)") : null;
                return AH ? new Uint32Array(AH.buffer) : null
              }(HH, CH);
            uH || hH.fed.failed++;
            const WH = sH(HH, EH, 4 * CH, (() => {
              HH.drawArraysInstanced(QH.POINTS, 0, 4, CH)
            }));
            if (!WH) return;
            hH.parts.set(SH, (null !== zH && void 0 !== zH ? zH : 0) + CH);
            for (let QH = 0; QH < CH; QH++) {
              const HH = QH * XH,
                BH = [YH.getUint32(HH, !0), YH.getUint32(HH + 4, !0), YH.getUint32(HH + 8, !0)],
                LH = uH ? [uH[3 * QH], uH[3 * QH + 1], uH[3 * QH + 2]] : BH;
              uH && (hH.fed.records++, LH.some(((HH, LH) => HH !== BH[LH])) && (hH.fed.differing++, hH.fed.first.length < 8 && hH.fed.first.push(`part ${SH} instance ${QH}: fed ${LH.map(rB).join(" ")} buffer ${BH.map(rB).join(" ")}`)));
              for (let AH = 0; AH < 4; AH++) {
                const HH = 3 * (4 * QH + AH);
                hH.vertices.push({
                  record: LH,
                  slot: AH,
                  group: SH,
                  gpu: [WH[HH], WH[HH + 1], WH[HH + 2]]
                })
              }
            }
          }(HH, BH, LH, AH.byLocation, SH, rH, hH)
        } else {
          const AH = HB(HH, BH, 16),
            SH = HB(HH, BH, 8);
          for (const HH of [AH, SH]) HH && zH.pages.push({
            kind: "tex",
            texture: HH
          });
          AH && function(HH, BH, LH, AH, rH, SH) {
            if (SH.parts.size >= UH) return;
            const hH = wH(HH, BH, LH);
            if (!hH) return;
            let tH = 6 * VH;
            const zH = [];
            for (const [YH, uH] of rH) {
              const HH = Math.min(uH, tH, Math.max(6, 6 * Math.floor(VH / rH.length)));
              HH > 0 && (zH.push([YH, HH]), tH -= HH)
            }
            const CH = zH.reduce(((HH, BH) => {
                let [, LH] = BH;
                return HH + LH
              }), 0),
              EH = sH(HH, hH, CH, (() => {
                for (const [BH, LH] of zH) HH.drawArrays(QH.POINTS, BH, LH)
              }));
            if (!EH) return;
            let XH = 0;
            for (const [YH, uH] of zH) {
              const BH = Math.floor(YH / 6),
                LH = Math.floor((YH + uH - 1) / 6) - BH + 1,
                rH = BB(HH, AH, TH, BH, LH);
              for (let HH = YH; HH < YH + uH; HH++, XH++) {
                var GH;
                const LH = 4 * (Math.floor(HH / 6) - BH),
                  AH = [rH[LH], rH[LH + 1], rH[LH + 2]];
                SH.parts.set(rH[LH + 3], (null !== (GH = SH.parts.get(rH[LH + 3])) && void 0 !== GH ? GH : 0) + (HH % 6 === 0 ? 1 : 0)), SH.vertices.push({
                  record: AH,
                  slot: PH[HH % 6],
                  group: rH[LH + 3],
                  gpu: [EH[3 * XH], EH[3 * XH + 1], EH[3 * XH + 2]]
                })
              }
            }
          }(HH, BH, LH, AH, rH, hH)
        }
      } catch (EH) {
        jH(`decode probe failed on program ${oH(LH)}: ${String(EH)}`)
      }
    }

    function wH(HH, BH, LH) {
      if (void 0 !== LH.probe) return LH.probe && dH(HH, BH, LH.probe), LH.probe;
      LH.probe = null, KH.inProbe = !0;
      try {
        LH.probe = function(HH, BH) {
          return ZH(HH, (LH = BH.vertex, LH.replace(`\nvec3 ${WH} = vec3(0);\n`, `\nout vec3 ${WH};\n`)), BH.fragment, WH, `program ${oH(BH)}'s twin`);
          var LH
        }(HH, LH)
      } finally {
        KH.inProbe = !1
      }
      return LH.probe && dH(HH, BH, LH.probe), LH.probe
    }

    function ZH(HH, BH, LH, AH, rH) {
      const SH = [HH.createShader(QH.VERTEX_SHADER), HH.createShader(QH.FRAGMENT_SHADER)],
        hH = HH.createProgram();
      if (!hH || !SH[0] || !SH[1]) return null;
      HH.shaderSource(SH[0], BH), HH.shaderSource(SH[1], LH);
      for (const zH of SH) HH.compileShader(zH), HH.attachShader(hH, zH);
      HH.transformFeedbackVaryings(hH, [AH], QH.INTERLEAVED_ATTRIBS), HH.linkProgram(hH);
      for (const zH of SH) HH.deleteShader(zH);
      var tH;
      return HH.getProgramParameter(hH, QH.LINK_STATUS) ? hH : (jH(`decode probe: ${rH} failed to link: ${FH(null!==(tH=HH.getProgramInfoLog(hH))&&void 0!==tH?tH:"",300)}`), HH.deleteProgram(hH), null)
    }

    function dH(HH, BH, LH) {
      const AH = HH.getProgramParameter(BH, QH.ACTIVE_UNIFORM_BLOCKS);
      for (let tH = 0; tH < AH; tH++) {
        const AH = HH.getActiveUniformBlockName(BH, tH),
          rH = null === AH ? QH.INVALID_INDEX : HH.getUniformBlockIndex(LH, AH);
        rH !== QH.INVALID_INDEX && HH.uniformBlockBinding(LH, rH, HH.getActiveUniformBlockParameter(BH, tH, QH.UNIFORM_BLOCK_BINDING))
      }
      const rH = HH.getParameter(QH.CURRENT_PROGRAM);
      HH.useProgram(LH);
      const SH = HH.getProgramParameter(BH, QH.ACTIVE_UNIFORMS),
        hH = HH.getActiveUniforms(BH, [...Array(SH).keys()], QH.UNIFORM_BLOCK_INDEX);
      for (let tH = 0; tH < SH; tH++) {
        const AH = HH.getActiveUniform(BH, tH);
        if (!AH || -1 !== hH[tH]) continue;
        const rH = AH.name.replace(/\[0\]$/, "");
        for (let SH = 0; SH < AH.size; SH++) {
          const hH = AH.size > 1 ? `${rH}[${SH}]` : AH.name,
            tH = HH.getUniformLocation(BH, hH),
            zH = HH.getUniformLocation(LH, hH);
          tH && zH && aH(HH, zH, AH.type, HH.getUniform(BH, tH))
        }
      }
      HH.useProgram(rH)
    }

    function aH(HH, BH, LH, AH) {
      const rH = ArrayBuffer.isView(AH) ? Array.from(AH) : [Number(AH)];
      switch (LH) {
        case QH.FLOAT:
          return void HH.uniform1f(BH, rH[0]);
        case QH.FLOAT_VEC2:
          return void HH.uniform2fv(BH, rH);
        case QH.FLOAT_VEC3:
          return void HH.uniform3fv(BH, rH);
        case QH.FLOAT_VEC4:
          return void HH.uniform4fv(BH, rH);
        case QH.FLOAT_MAT3:
          return void HH.uniformMatrix3fv(BH, !1, rH);
        case QH.FLOAT_MAT4:
          return void HH.uniformMatrix4fv(BH, !1, rH);
        case QH.UNSIGNED_INT:
          return void HH.uniform1ui(BH, rH[0]);
        case QH.UNSIGNED_INT_VEC2:
          return void HH.uniform2uiv(BH, rH);
        case QH.UNSIGNED_INT_VEC3:
          return void HH.uniform3uiv(BH, rH);
        case QH.UNSIGNED_INT_VEC4:
          return void HH.uniform4uiv(BH, rH);
        case QH.INT_VEC2:
          return void HH.uniform2iv(BH, rH);
        case QH.INT_VEC3:
          return void HH.uniform3iv(BH, rH);
        case QH.INT_VEC4:
          return void HH.uniform4iv(BH, rH);
        default:
          HH.uniform1i(BH, rH[0])
      }
    }

    function sH(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const SH = HH.getParameter(QH.CURRENT_PROGRAM),
        hH = HH.getParameter(QH.TRANSFORM_FEEDBACK_BINDING),
        tH = HH.getParameter(QH.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        zH = HH.getParameter(QH.COPY_READ_BUFFER_BINDING),
        CH = HH.isEnabled(QH.RASTERIZER_DISCARD),
        EH = HH.createTransformFeedback(),
        XH = HH.createBuffer();
      KH.inProbe = !0;
      try {
        const SH = HH.getError();
        SH !== QH.NO_ERROR && jH(`GL error 0x${SH.toString(16)} pending before the decode probe (the renderer's)`), HH.useProgram(BH), HH.bindTransformFeedback(QH.TRANSFORM_FEEDBACK, EH), HH.bindBuffer(QH.TRANSFORM_FEEDBACK_BUFFER, XH), HH.bufferData(QH.TRANSFORM_FEEDBACK_BUFFER, 12 * LH, QH.STREAM_READ), HH.bindBufferBase(QH.TRANSFORM_FEEDBACK_BUFFER, 0, XH), HH.enable(QH.RASTERIZER_DISCARD), HH.beginTransformFeedback(QH.POINTS), AH(), HH.endTransformFeedback(), HH.bindBufferBase(QH.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const hH = HH.getError();
        if (hH !== QH.NO_ERROR) return jH(`${rH}: GL error 0x${hH.toString(16)} on the feedback draw`), null;
        const tH = new Float32Array(3 * LH);
        return HH.bindBuffer(QH.COPY_READ_BUFFER, XH), HH.getBufferSubData(QH.COPY_READ_BUFFER, 0, tH), tH
      } finally {
        CH || HH.disable(QH.RASTERIZER_DISCARD), HH.bindTransformFeedback(QH.TRANSFORM_FEEDBACK, hH), HH.bindBuffer(QH.TRANSFORM_FEEDBACK_BUFFER, tH), HH.bindBuffer(QH.COPY_READ_BUFFER, zH), HH.deleteTransformFeedback(EH), HH.deleteBuffer(XH), HH.useProgram(SH), KH.inProbe = !1
      }
    }

    function JH(HH, BH, LH, AH) {
      const rH = HH.getParameter(QH.COPY_READ_BUFFER_BINDING),
        SH = new Uint8Array(AH);
      return HH.bindBuffer(QH.COPY_READ_BUFFER, BH), HH.getBufferSubData(QH.COPY_READ_BUFFER, LH, SH), HH.bindBuffer(QH.COPY_READ_BUFFER, rH), SH
    }
    const iH = `#version 300 es\nlayout(location = ${MH}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      pH = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      yH = new WeakMap;

    function HB(HH, BH, LH) {
      const AH = HH.getProgramParameter(BH, QH.ACTIVE_UNIFORMS),
        rH = HH.getParameter(QH.ACTIVE_TEXTURE);
      try {
        for (let rH = 0; rH < AH; rH++) {
          const AH = HH.getActiveUniform(BH, rH);
          if ((null === AH || void 0 === AH ? void 0 : AH.type) !== QH.UNSIGNED_INT_SAMPLER_2D) continue;
          const SH = HH.getUniformLocation(BH, AH.name),
            hH = SH ? HH.getUniform(BH, SH) : -1;
          if (hH < 0) continue;
          HH.activeTexture(QH.TEXTURE0 + hH);
          const tH = HH.getParameter(QH.TEXTURE_BINDING_2D);
          if (tH && lH.get(tH) === LH) return tH
        }
        return null
      } finally {
        HH.activeTexture(rH)
      }
    }

    function BB(HH, BH, LH, AH, rH) {
      const SH = new Uint32Array(4 * rH),
        hH = HH.getParameter(QH.READ_FRAMEBUFFER_BINDING),
        tH = HH.createFramebuffer();
      HH.bindFramebuffer(QH.READ_FRAMEBUFFER, tH), HH.framebufferTexture2D(QH.READ_FRAMEBUFFER, QH.COLOR_ATTACHMENT0, QH.TEXTURE_2D, BH, 0);
      try {
        let BH = 0;
        for (; BH < rH;) {
          const hH = AH + BH,
            tH = hH % LH,
            zH = Math.min(rH - BH, LH - tH);
          HH.readPixels(tH, Math.floor(hH / LH), zH, 1, QH.RGBA_INTEGER, QH.UNSIGNED_INT, SH.subarray(4 * BH, 4 * (BH + zH))), BH += zH
        }
      } finally {
        HH.bindFramebuffer(QH.READ_FRAMEBUFFER, hH), HH.deleteFramebuffer(tH)
      }
      return SH
    }

    function LB(HH, BH, LH) {
      let AH = 0,
        rH = 0;
      for (let zH = 0; zH < BH.bytes.length; zH += kH) {
        AH++;
        const HH = Math.min(zH + kH, BH.bytes.length);
        YH(BH.bytes.subarray(zH, HH)) !== YH(LH.subarray(zH, HH)) && rH++
      }
      const SH = `${HH} ${BH.bytes.length} B cpu ${YH(BH.bytes).toString(16)} gpu ${YH(LH).toString(16)}, ${rH}/${AH} blocks differ${BH.missed?`, ${BH.missed} GPU-side writes uncopied`:""}`;
      if (0 === rH) return SH;
      const {
        count: hH,
        offsets: tH
      } = function(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const AH = Math.min(HH.length, BH.length);
        let rH = Math.abs(HH.length - BH.length);
        const SH = [];
        for (let hH = 0; hH < AH; hH++) HH[hH] !== BH[hH] && (rH++, SH.length < LH && SH.push(hH));
        return {
          count: rH,
          offsets: SH
        }
      }(BH.bytes, LH);
      return nH([`${SH}: ${hH} bytes differ`, ...tH.map((HH => `  +${HH}: cpu ${uH(BH.bytes,HH)} | gpu ${uH(LH,HH)}`))].join("\n")), `${SH}: ${hH} bytes differ, first at ${tH.join(", ")} (context in the saved file)`
    }

    function AB(HH) {
      if (0 === HH.vertices.length) return void jH(`decode probe (${HH.reason}): no terrain draw probed (${HH.draws.length} seen)`);
      const BH = function(HH) {
          const BH = new Map;
          for (const AH of HH) {
            const HH = BH.get(AH.group);
            HH ? HH.push(AH) : BH.set(AH.group, [AH])
          }
          const LH = {
            vertices: HH.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [AH, rH] of BH) {
            const HH = new Map,
              BH = rH.map((BH => {
                const LH = EH(BH.record, BH.slot),
                  AH = [BH.gpu[0] - LH[0], BH.gpu[1] - LH[1], BH.gpu[2] - LH[2]],
                  rH = AH.map((HH => Math.round(64 * HH))).join(","),
                  SH = HH.get(rH);
                return SH ? SH.count++ : HH.set(rH, {
                  count: 1,
                  offset: AH
                }), LH
              }));
            let SH = [0, 0, 0],
              hH = 0;
            for (const LH of HH.values()) LH.count > hH && (hH = LH.count, SH = LH.offset);
            LH.translations.set(AH, SH), rH.forEach(((HH, AH) => {
              var rH;
              const hH = [BH[AH][0] + SH[0], BH[AH][1] + SH[1], BH[AH][2] + SH[2]];
              if (hH.every(((BH, LH) => {
                  return AH = HH.gpu[LH], rH = BH, Math.abs(AH - rH) <= Math.max(.001, 1e-6 * Math.abs(rH));
                  var AH, rH
                }))) return;
              LH.mismatches++, LH.byDirection[tH(HH.record[2])]++, LH.byDiagonal[zH(HH.record[2])]++;
              const CH = XH(HH.record);
              LH.byBand[CH] = (null !== (rH = LH.byBand[CH]) && void 0 !== rH ? rH : 0) + 1, LH.first.length < GH && LH.first.push({
                ...HH,
                expected: hH
              })
            }))
          }
          return LH
        }(HH.vertices),
        LH = BH.byDirection.map(((HH, BH) => HH ? `${hH[BH]} ${HH}` : "")).filter(Boolean).join(" "),
        AH = Object.entries(BH.byBand).map((HH => {
          let [BH, LH] = HH;
          return `${BH}: ${LH}`
        })).join(" ");
      if (jH(`decode probe (${HH.reason}): ${BH.mismatches}/${BH.vertices} vertices differ from the CPU decode over ${HH.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (BH.mismatches ? ` by direction [${LH}] diagonal [0: ${BH.byDiagonal[0]} 1: ${BH.byDiagonal[1]}] extent [${AH}]` : "")), HH.fed.records > 0 || HH.fed.failed > 0) {
        jH(`decode probe input: ${HH.fed.differing}/${HH.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (HH.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (HH.fed.failed ? `; the feed failed on ${HH.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const BH of HH.fed.first) jH(`  ${BH}`)
      }
      for (const rH of BH.first) {
        const [HH, BH, LH] = rH.record;
        jH(`  mismatch part ${rH.group} r0 ${HH.toString(16)} r1 ${BH.toString(16)} r2 ${LH.toString(16)} slot ${rH.slot} (${hH[tH(LH)]}): expected ${rH.expected.map(SB).join(",")} gpu ${rH.gpu.map(SB).join(",")}`)
      }
      nH(`decode probe translations: ${[...BH.translations].map((HH=>{let[BH,LH]=HH;return`${BH}: ${LH.map(SB).join(",")}`})).join("; ")}`)
    }

    function rB(HH) {
      return HH.toString(16)
    }

    function SB(HH) {
      return Number.isInteger(HH) ? String(HH) : HH.toFixed(3)
    }

    function hB(HH) {
      return null !== KH.pendingCheck ? Promise.resolve() : new Promise((BH => {
        let LH = !1;
        const AH = {
          reason: HH,
          terrainDraws: 0,
          draws: [],
          vertices: [],
          parts: new Map,
          groups: new Map,
          fed: {
            records: 0,
            differing: 0,
            first: [],
            failed: 0
          }
        };
        KH.pendingCheck = AH;
        const rH = () => {
            KH.pendingCheck = null;
            try {
              ! function(HH) {
                jH(`draw ranges (${HH.reason}): ${HH.terrainDraws} terrain draws in the frame, the first ${HH.draws.length} here`);
                for (const BH of HH.draws) {
                  const HH = BH.rW.slice(0, 8).map((HH => {
                      let [BH, LH] = HH;
                      return `${BH}+${LH}`
                    })).join(" "),
                    LH = BH.rW.length > 8 ? ` (+${BH.rW.length-8} ranges)` : "";
                  jH(`  ${oH(BH.program)} ${BH.program.terrain} ${BH.call} ${HH}${LH} x${BH.instances}${BH.group>=0?` part ${BH.group} chunk ${BH.chunk}`:""} | ${BH.attributes.join(" | ")}`)
                }
              }(AH), AB(AH);
              AH.draws.some((HH => "undefined" !== typeof WebGL2RenderingContext && HH.gl instanceof WebGL2RenderingContext)) || 0 === AH.draws.length ? function(HH) {
                const BH = [],
                  LH = new Map;
                for (const AH of HH)
                  if ("undefined" !== typeof WebGL2RenderingContext && AH.gl instanceof WebGL2RenderingContext)
                    for (const HH of AH.pages) LH.set("buf" === HH.kind ? HH.buffer : HH.texture, {
                      page: HH,
                      gl: AH.gl
                    });
                for (const [AH, {
                    page: rH,
                    gl: SH
                  }] of LH) {
                  const HH = fH.get(AH);
                  if (!HH) {
                    BH.push(`${rH.kind}#${qH(AH)}: no CPU copy (${KH.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === rH.kind) {
                    BH.push(LB(`buf#${HH.id}`, HH, JH(SH, rH.buffer, 0, HH.bytes.length)));
                    continue
                  }
                  const LH = BB(SH, rH.texture, HH.width, 0, HH.width * HH.height),
                    hH = 16 === HH.texelBytes ? new Uint8Array(LH.buffer) : new Uint8Array(new Uint16Array(LH).buffer);
                  BH.push(LB(`tex#${HH.id} (${16===HH.texelBytes?"records":"light"})`, HH, hH))
                }
                for (const AH of BH) jH(`page readback ${AH}`)
              }(AH.draws) : jH("page readback: none on WebGL1 (no buffer readback)")
            } catch (HH) {
              jH(`check failed: ${String(HH)}`)
            }
            BH()
          },
          SH = () => {
            if (AH.draws.length > 0 && !LH) return LH = !0, void setTimeout(rH, 0);
            LH || requestAnimationFrame(SH)
          };
        requestAnimationFrame(SH), setTimeout((() => {
          LH || (LH = !0, rH())
        }), 5e3)
      }))
    }
    var tB = LH(5143);
    const zB = 20,
      CB = 24,
      EB = Reflect.apply;

    function XB(HH, BH, LH) {
      if (!HH) return;
      const AH = HH[BH];
      if ("function" === typeof AH) {
        const rH = LH(AH);
        HH[BH] = rH, (0, tB.r)(rH, AH)
      }
    }
    let GB = !1;
    const YB = new WeakMap,
      uB = new WeakMap,
      QB = new WeakMap,
      WB = {
        gl: 0,
        lost: 0
      };
    let MB = {
        inst: {
          draws: 0,
          faces: 0
        },
        tex: {
          draws: 0,
          faces: 0
        },
        other: {
          draws: 0,
          faces: 0
        }
      },
      xB = {
        buffer: 0,
        texture: 0
      },
      vB = 0;

    function PB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (HH instanceof ArrayBuffer) return new Uint8Array(HH, BH, LH || void 0);
      if (!ArrayBuffer.isView(HH)) return null;
      const AH = "BYTES_PER_ELEMENT" in HH ? HH.BYTES_PER_ELEMENT : 1,
        rH = HH.byteOffset + BH * AH,
        SH = LH ? LH * AH : HH.byteLength - BH * AH;
      return new Uint8Array(HH.buffer, rH, Math.max(0, SH))
    }

    function TB(HH, BH) {
      const LH = function(HH) {
        switch (HH) {
          case QH.ARRAY_BUFFER:
            return QH.ARRAY_BUFFER_BINDING;
          case QH.ELEMENT_ARRAY_BUFFER:
            return QH.ELEMENT_ARRAY_BUFFER_BINDING;
          case QH.COPY_READ_BUFFER:
            return QH.COPY_READ_BUFFER_BINDING;
          case QH.COPY_WRITE_BUFFER:
            return QH.COPY_WRITE_BUFFER_BINDING;
          case QH.UNIFORM_BUFFER:
            return QH.UNIFORM_BUFFER_BINDING;
          case QH.PIXEL_UNPACK_BUFFER:
            return QH.PIXEL_UNPACK_BUFFER_BINDING;
          case QH.TRANSFORM_FEEDBACK_BUFFER:
            return QH.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(BH);
      return LH ? HH.getParameter(LH) : null
    }

    function UB(HH) {
      const BH = fH.get(HH);
      BH && (KH.shadowBytes -= BH.bytes.length, fH.delete(HH))
    }

    function VB(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      UB(HH), KH.shadowBytes + BH > bH ? KH.uncopied++ : (KH.shadowBytes += BH, fH.set(HH, {
        id: qH(HH),
        bytes: new Uint8Array(BH),
        width: LH,
        height: AH,
        texelBytes: rH,
        missed: 0
      }))
    }

    function OB(HH, BH) {
      for (const LH of ["deleteBuffer", "deleteTexture"]) XB(HH, LH, (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        return LH[0] && UB(LH[0]), EB(HH, this, LH)
      }));
      XB(HH, "shaderSource", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        return LH[0] && "string" === typeof LH[1] && YB.set(LH[0], LH[1]), EB(HH, this, LH)
      })), XB(HH, "attachShader", (HH => function() {
        for (var BH, LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
        const SH = AH[0],
          hH = null !== (BH = uB.get(SH)) && void 0 !== BH ? BH : [];
        return hH.push(AH[1]), uB.set(SH, hH), EB(HH, this, AH)
      })), XB(HH, "linkProgram", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        const rH = EB(HH, this, LH);
        return KH.inProbe || function(HH, BH) {
          var LH, AH, rH;
          "undefined" !== typeof HTMLCanvasElement && HH.canvas instanceof HTMLCanvasElement && function(HH) {
            if (fB.has(HH)) return;
            fB.add(HH);
            for (const BH of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) HH.addEventListener(BH, (HH => {
              WB.lost < zB && (WB.lost++, jH(`${BH}${"statusMessage"in HH?`: ${String(HH.statusMessage)}`:""}`))
            }))
          }(HH.canvas);
          KH.context ??= HH;
          const SH = null !== (LH = uB.get(BH)) && void 0 !== LH ? LH : [];
          let hH = "",
            tH = "";
          for (const EH of SH) {
            var zH;
            const HH = null !== (zH = YB.get(EH)) && void 0 !== zH ? zH : "";
            /\bgl_Position\b/.test(HH) ? hH = HH : tH = HH
          }
          const CH = {
            id: qH(BH),
            name: null !== (AH = null === (rH = mH.exec(hH)) || void 0 === rH ? void 0 : rH[1]) && void 0 !== AH ? AH : null,
            gl: HH,
            vertex: hH,
            fragment: tH,
            terrain: kB(hH),
            checked: !1,
            firstDraw: !1
          };
          if (QB.set(BH, CH), IH.push([BH, CH]), null !== CH.terrain) {
            const BH = SH.map((BH => {
              var LH;
              return null !== (LH = HH.getShaderInfoLog(BH)) && void 0 !== LH ? LH : ""
            })).filter((HH => "" !== HH.trim()));
            BH.length > 0 && nH(`program ${oH(CH)} (${CH.terrain}) shader logs:\n${FH(BH.join("\n"))}`)
          }
        }(this, LH[0]), rH
      })), XB(HH, "bufferData", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        const rH = EB(HH, this, LH);
        if (!KH.inProbe) {
          const HH = TB(this, LH[0]);
          if (HH) {
            var SH, hH, tH;
            const BH = "number" === typeof LH[1] ? null : PB(LH[1], null !== (SH = LH[3]) && void 0 !== SH ? SH : 0, null !== (hH = LH[4]) && void 0 !== hH ? hH : 0);
            var zH;
            if (VB(HH, "number" === typeof LH[1] ? LH[1] : null !== (tH = null === BH || void 0 === BH ? void 0 : BH.length) && void 0 !== tH ? tH : 0), BH) null === (zH = fH.get(HH)) || void 0 === zH || zH.bytes.set(BH)
          }
        }
        return rH
      })), XB(HH, "bufferSubData", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        const rH = EB(HH, this, LH);
        if (!KH.inProbe) {
          var SH, hH;
          const HH = TB(this, LH[0]),
            BH = HH ? fH.get(HH) : void 0,
            AH = PB(LH[2], null !== (SH = LH[3]) && void 0 !== SH ? SH : 0, null !== (hH = LH[4]) && void 0 !== hH ? hH : 0);
          if (BH && AH) {
            const HH = LH[1];
            BH.bytes.set(AH.subarray(0, Math.max(0, BH.bytes.length - HH)), HH), bB("buffer", BH, HH, AH.length)
          }
        }
        return rH
      })), BH && (XB(HH, "copyBufferSubData", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        const rH = EB(HH, this, LH);
        if (!KH.inProbe) {
          const [HH, BH, AH, rH, SH] = LH, hH = TB(this, HH), tH = TB(this, BH), zH = hH ? fH.get(hH) : void 0, CH = tH ? fH.get(tH) : void 0;
          CH && (zH ? CH.bytes.set(zH.bytes.slice(AH, AH + SH), rH) : CH.missed++)
        }
        return rH
      })), XB(HH, "texStorage2D", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        const rH = EB(HH, this, LH),
          [, , SH, hH, tH] = LH;
        if (!KH.inProbe && (SH === QH.RGBA32UI || SH === QH.RGBA16UI)) {
          const HH = this.getParameter(QH.TEXTURE_BINDING_2D),
            BH = SH === QH.RGBA32UI ? 16 : 8;
          HH && (lH.set(HH, BH), VB(HH, hH * tH * BH, hH, tH, BH))
        }
        return rH
      })), XB(HH, "texSubImage2D", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        const rH = EB(HH, this, LH);
        return !KH.inProbe && LH.length >= 9 && LH[0] === QH.TEXTURE_2D && 0 === LH[1] && function(HH, BH) {
          var LH;
          const AH = HH.getParameter(QH.TEXTURE_BINDING_2D),
            rH = AH ? fH.get(AH) : void 0;
          if (!rH) return;
          const [, , SH, hH, tH, zH] = BH;
          let CH = PB(BH[8], null !== (LH = BH[9]) && void 0 !== LH ? LH : 0);
          if (null === CH && "number" === typeof BH[8]) {
            const LH = TB(HH, QH.PIXEL_UNPACK_BUFFER),
              AH = LH ? fH.get(LH) : void 0;
            CH = AH ? AH.bytes.subarray(BH[8]) : null
          }
          if (null === CH) return void rH.missed++;
          const EH = HH.getParameter(QH.UNPACK_ROW_LENGTH) || tH,
            XH = HH.getParameter(QH.UNPACK_SKIP_ROWS),
            GH = HH.getParameter(QH.UNPACK_SKIP_PIXELS),
            YH = rH.texelBytes;
          for (let uH = 0; uH < zH; uH++) {
            const HH = ((XH + uH) * EH + GH) * YH,
              BH = ((hH + uH) * rH.width + SH) * YH;
            rH.bytes.set(CH.subarray(HH, HH + tH * YH), BH)
          }
          bB("texture", rH, (hH * rH.width + SH) * YH, tH * zH * YH)
        }(this, LH), rH
      })), XB(HH, "copyTexSubImage2D", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        const rH = LH[0] === QH.TEXTURE_2D ? this.getParameter(QH.TEXTURE_BINDING_2D) : null,
          SH = rH ? fH.get(rH) : void 0;
        return SH && SH.missed++, EB(HH, this, LH)
      })));
      for (const LH of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) XB(HH, LH, (HH => function() {
        for (var BH = arguments.length, AH = new Array(BH), rH = 0; rH < BH; rH++) AH[rH] = arguments[rH];
        const SH = EB(HH, this, AH);
        return KH.inProbe || oB(this, LH, AH), SH
      }));
      XB(HH, "getExtension", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        const rH = EB(HH, this, LH);
        return rH && "object" === typeof rH && function(HH, BH, LH) {
          const AH = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(BH in AH) || LH.bloxdRenderDebug) return;
          LH.bloxdRenderDebug = !0;
          for (const rH of AH[BH]) {
            const BH = LH[rH];
            "function" === typeof BH && (LH[rH] = function() {
              for (var AH = arguments.length, SH = new Array(AH), hH = 0; hH < AH; hH++) SH[hH] = arguments[hH];
              const tH = EB(BH, LH, SH);
              return KH.inProbe || oB(HH, rH, SH), tH
            })
          }
        }(this, LH[0], rH), rH
      }))
    }

    function bB(HH, BH, LH, AH) {
      xB[HH] += AH, vB < 32 && BH.bytes.length >= 1 << 20 && (vB++, nH(`upload ${HH} #${BH.id} +${LH} ${AH} B`))
    }

    function kB(HH) {
      if (!HH.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(HH) || /in uvec3 _p2vs_location0\b/.test(HH) ? "inst" : "tex"
    }

    function mB(HH, BH, LH) {
      var AH;
      if (LH.checked) return;
      LH.checked = !0;
      const rH = HH.getProgramParameter(BH, QH.LINK_STATUS),
        SH = (null !== (AH = HH.getProgramInfoLog(BH)) && void 0 !== AH ? AH : "").trim();
      var hH;
      null === LH.terrain && rH || (jH(`program ${oH(LH)} ${null!==(hH=LH.terrain)&&void 0!==hH?hH:"other"} link ${rH?"ok":"FAILED"}${SH?`: ${FH(SH,300)}`:""}`), SH && nH(`program ${oH(LH)} link log:\n${FH(SH)}`))
    }

    function oB(HH, BH, LH) {
      var AH;
      const rH = HH.getParameter(QH.CURRENT_PROGRAM),
        SH = rH ? QB.get(rH) : void 0;
      if (!rH || !SH) return;
      const hH = null !== (AH = SH.terrain) && void 0 !== AH ? AH : "other",
        {
          rW: tH,
          instances: zH
        } = function(HH, BH) {
          switch (HH) {
            case "drawArrays":
              return {
                rW: [
                  [BH[1], BH[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                rW: [
                  [BH[1], BH[2]]
                ], instances: BH[3]
              };
            case "drawElements":
              return {
                rW: [
                  [0, BH[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                rW: [
                  [0, BH[1]]
                ], instances: BH[4]
              };
            case "multiDrawArraysWEBGL": {
              const HH = BH[1],
                LH = BH[3],
                AH = BH[2],
                rH = BH[4],
                SH = [];
              for (let hH = 0; hH < BH[5]; hH++) SH.push([HH[AH + hH], LH[rH + hH]]);
              return {
                rW: SH,
                instances: 1
              }
            }
            default:
              return {
                rW: [], instances: 0
              }
          }
        }(BH, LH),
        CH = "inst" === SH.terrain ? zH : tH.reduce(((HH, BH) => {
          let [, LH] = BH;
          return HH + LH
        }), 0) / 6;
      if (MB[hH].draws++, MB[hH].faces += CH, null === SH.terrain) return;
      if (KH.context = HH, !SH.firstDraw) {
        SH.firstDraw = !0, mB(HH, rH, SH), IB || (IB = !0, jH(function(HH) {
          var BH;
          const LH = HH.getParameter(QH.DEPTH_FUNC),
            AH = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let rH = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in HH && HH.getParameter(QH.DRAW_FRAMEBUFFER_BINDING)) {
            const BH = HH;
            rH = BH.getFramebufferAttachmentParameter(QH.DRAW_FRAMEBUFFER, QH.DEPTH_ATTACHMENT, QH.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(BH.getFramebufferAttachmentParameter(QH.DRAW_FRAMEBUFFER,QH.DEPTH_ATTACHMENT,QH.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(BH.getFramebufferAttachmentParameter(QH.DRAW_FRAMEBUFFER,QH.DEPTH_ATTACHMENT,QH.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const SH = HH.getParameter(QH.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(BH=AH[LH])&&void 0!==BH?BH:`0x${LH.toString(16)}`} clear ${SH}${516===LH||518===LH?" (reverse-Z)":""}, samples ${String(HH.getParameter(QH.SAMPLES))}, ${rH}`
        }(HH)));
        const LH = HH.getError();
        LH !== QH.NO_ERROR && WB.gl < zB && (WB.gl++, jH(`GL error 0x${LH.toString(16)} after program ${oH(SH)}'s first terrain draw (${BH})`))
      }
      const EH = KH.pendingCheck;
      null !== EH && (EH.terrainDraws++, EH.draws.length < CB && DH(HH, rH, SH, BH, tH, zH))
    }
    let IB = !1;
    const fB = new WeakSet;
    var lB = LH(4921),
      KB = LH(5150);
    const cB = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let eB = !1;
    const qB = new WeakSet,
      gB = new WeakMap,
      NB = new WeakMap,
      RB = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let jB = 0,
      nB = !1,
      FB = null,
      DB = {
        draws: 0,
        faces: 0
      };

    function wB(HH) {
      const BH = globalThis[HH];
      return null === BH || void 0 === BH ? void 0 : BH.prototype
    }

    function ZB(HH) {
      return HH && "function" === typeof HH[Symbol.iterator] ? [...HH].sort().join(" ") : ""
    }

    function dB(HH, BH) {
      const LH = null !== HH && void 0 !== HH ? HH : {},
        AH = null !== BH && void 0 !== BH ? BH : Object.keys(Object.getPrototypeOf(LH)).concat(Object.keys(LH));
      return [...new Set(AH)].filter((HH => "number" === typeof LH[HH])).map((HH => `${HH} ${String(LH[HH])}`)).join(", ")
    }

    function aB(HH, BH) {
      var LH;
      const AH = null !== (LH = BH.vertex) && void 0 !== LH ? LH : {};
      if (AH.module && qB.has(AH.module)) {
        var rH;
        const LH = String(null !== (rH = AH.entryPoint) && void 0 !== rH ? rH : "");
        if (LH.startsWith("vs_packed") && gB.set(HH, LH), !nB) {
          var SH, hH, tH, zH, CH;
          nB = !0;
          const HH = null !== (SH = BH.depthStencil) && void 0 !== SH ? SH : {},
            AH = null !== (hH = BH.multisample) && void 0 !== hH ? hH : {},
            rH = String(null !== (tH = HH.depthCompare) && void 0 !== tH ? tH : "");
          jH(`WebGPU terrain pipeline ${LH}: depth ${String(null!==(zH=HH.format)&&void 0!==zH?zH:"none")} ${rH}${rH.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(CH=AH.count)&&void 0!==CH?CH:1)}`)
        }
      }
    }

    function sB(HH) {
      XB(HH, "setPipeline", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        return NB.set(this, LH[0]), EB(HH, this, LH)
      }));
      for (const BH of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) XB(HH, BH, (HH => function() {
        const LH = NB.get(this),
          AH = LH ? gB.get(LH) : void 0;
        for (var rH = arguments.length, SH = new Array(rH), hH = 0; hH < rH; hH++) SH[hH] = arguments[hH];
        return void 0 !== AH && JB(BH, AH, SH), EB(HH, this, SH)
      }))
    }

    function JB(HH, BH, LH) {
      var AH;
      (DB.draws++, "draw" === HH || "drawIndexed" === HH) && (DB.faces += LH[0] * (null !== (AH = LH[1]) && void 0 !== AH ? AH : 1) / 6);
      if (null !== FB && FB.length < CB) {
        const AH = ("draw" === HH ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === HH ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((BH, AH) => {
          const rH = HH.endsWith("Indirect") ? LH[1] : LH[AH];
          return `${BH} ${String(null!==rH&&void 0!==rH?rH:"instances"===BH?1:0)}`
        }));
        FB.push(`  ${BH} ${HH} ${AH.join(" ")}`)
      }
    }

    function iB() {
      if (eB || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      eB = !0, XB(wB("GPU"), "requestAdapter", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        return EB(HH, this, LH).then((HH => {
          var BH;
          HH ? function(HH) {
            var BH;
            const LH = null !== (BH = HH.info) && void 0 !== BH ? BH : {};
            jH(`WebGPU adapter ${["vendor","architecture","device","description"].map((HH=>{var BH;return`${HH} "${String(null!==(BH=LH[HH])&&void 0!==BH?BH:"")}"`})).join(" ")}${HH.isFallbackAdapter?" (fallback)":""}`), jH(`WebGPU adapter features ${ZB(HH.features)}`), jH(`WebGPU adapter limits ${dB(HH.limits,cB)}`), nH(`WebGPU adapter all limits ${dB(HH.limits,null)}`)
          }(HH) : jH(`WebGPU requestAdapter(${JSON.stringify(null!==(BH=LH[0])&&void 0!==BH?BH:{})}) gave none`);
          return HH
        }))
      })), XB(wB("GPUAdapter"), "requestDevice", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        return EB(HH, this, LH).then((HH => (function(HH) {
          jH(`WebGPU device features ${ZB(HH.features)}`), jH(`WebGPU device limits ${dB(HH.limits,cB)}`), HH.addEventListener("uncapturederror", (HH => {
            if (RB.uncaptured < zB) {
              var BH, LH, AH;
              RB.uncaptured++;
              const rH = HH.error;
              jH(`WebGPU uncaptured ${null!==(BH=null===rH||void 0===rH||null===(LH=rH.constructor)||void 0===LH?void 0:LH.name)&&void 0!==BH?BH:"error"}: ${FH(String(null!==(AH=null===rH||void 0===rH?void 0:rH.message)&&void 0!==AH?AH:""),600)}`)
            }
          }));
          const BH = HH.lost;
          null === BH || void 0 === BH || BH.then((HH => {
            var BH;
            jH(`WebGPU device lost (${String(HH.reason)}): ${FH(String(null!==(BH=HH.message)&&void 0!==BH?BH:""),600)}`)
          }))
        }(HH), HH)), (HH => {
          throw jH(`WebGPU requestDevice failed: ${String(HH)}`), HH
        }))
      }));
      const HH = wB("GPUDevice");
      XB(HH, "createShaderModule", (HH => function() {
        for (var BH, LH, AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
        const hH = EB(HH, this, rH);
        return function(HH, BH) {
          const LH = BH.includes("decodeQuad");
          LH && qB.add(HH);
          const AH = HH.getCompilationInfo;
          null === AH || void 0 === AH || AH.call(HH).then((HH => {
            if (0 === HH.messages.length && !LH) return;
            const BH = {};
            for (const LH of HH.messages) {
              var AH;
              BH[String(LH.type)] = (null !== (AH = BH[String(LH.type)]) && void 0 !== AH ? AH : 0) + 1
            }
            const rH = HH.messages.map((HH => `${String(HH.type)} ${String(HH.lineNum)}:${String(HH.linePos)} ${String(HH.message)}`)).join("\n");
            RB.compile < zB && (RB.compile++, jH(`WebGPU ${LH?"terrain ":""}shader module compiled: ${JSON.stringify(BH)}${rH?` first: ${FH(rH.split("\n")[0],300)}`:""}`)), rH && nH(`WebGPU shader module messages:\n${FH(rH)}`)
          }))
        }(hH, String(null !== (BH = (null !== (LH = rH[0]) && void 0 !== LH ? LH : {}).code) && void 0 !== BH ? BH : "")), hH
      })), XB(HH, "createRenderPipeline", (HH => function() {
        for (var BH, LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
        const SH = EB(HH, this, AH);
        return aB(SH, null !== (BH = AH[0]) && void 0 !== BH ? BH : {}), SH
      })), XB(HH, "createRenderPipelineAsync", (HH => function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        return EB(HH, this, LH).then((HH => {
          var BH;
          return aB(HH, null !== (BH = LH[0]) && void 0 !== BH ? BH : {}), HH
        }), (HH => {
          var BH;
          throw function(HH, BH) {
            var LH, AH, rH;
            if (RB.rejected >= zB) return;
            RB.rejected++;
            const {
              reason: SH,
              message: hH
            } = null !== BH && void 0 !== BH ? BH : {}, tH = String(null !== (LH = (null !== (AH = HH.vertex) && void 0 !== AH ? AH : {}).entryPoint) && void 0 !== LH ? LH : "");
            jH(`WebGPU pipeline "${String(null!==(rH=HH.label)&&void 0!==rH?rH:"")}" ${tH} rejected (${String(null!==SH&&void 0!==SH?SH:"no reason")}): ${FH(String(null!==hH&&void 0!==hH?hH:BH),600)}`)
          }(null !== (BH = LH[0]) && void 0 !== BH ? BH : {}, HH), HH
        }))
      })), XB(wB("GPUCanvasContext"), "configure", (HH => function() {
        for (var BH, LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
        const SH = null !== (BH = AH[0]) && void 0 !== BH ? BH : {};
        var hH, tH;
        jB++ < 3 && jH(`WebGPU canvas ${String(SH.format)} ${String(null!==(hH=SH.colorSpace)&&void 0!==hH?hH:"srgb")} alpha ${String(null!==(tH=SH.alphaMode)&&void 0!==tH?tH:"opaque")}`);
        return EB(HH, this, AH)
      })), sB(wB("GPURenderPassEncoder")), sB(wB("GPURenderBundleEncoder"))
    }
    const pB = 1e4,
      yB = 6e4,
      HL = 5e3,
      BL = 3e3,
      LL = 100;
    let AL = null,
      rL = !1,
      SL = {
        ...lB.c
      },
      hL = !1,
      tL = null,
      zL = 0,
      CL = () => {};
    const EL = new Promise((HH => {
      CL = HH
    }));

    function XL() {
      var HH;
      rL || (rL = !0, SL = Object.assign(window.bloxdRenderDebug ??= {
        ...lB.c
      }, {
        faceCull: "0" === (0, SH.n)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (HH = (0, SH.n)("adrenoProbe")) && void 0 !== HH ? HH : ""
      }), jH("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), GB || "undefined" === typeof window || (GB = !0, "undefined" !== typeof WebGL2RenderingContext && OB(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && OB(WebGLRenderingContext.prototype, !1)), iB(), (0, SH.d)("renderProbe", (() => {
        ML("console")
      })), QL(), setInterval(vL, HL))
    }

    function GL(HH) {
      var BH, LH;
      XL(), AL = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.backend) && void 0 !== BH ? BH : null;
      const AH = `, renderer param ${null!==(LH=(0,SH.n)("renderer"))&&void 0!==LH?LH:"none"}, faceCull ${"0"===SL.faceCull?"off (whole parts)":"on"}, adrenoProbe ${SL.adrenoProbe||"none"}`;
      jH(`${(0,KB.e)(HH)}${null===HH?"":AH}`)
    }

    function YL() {
      const HH = performance.now(),
        BH = uL(EL, pB, yB).then((BH => ML(`${Math.round((performance.now()-HH)/1e3)} s after playable${BH?"":", no terrain drawn yet"}`)));
      (0, rH.c)(jH, (async () => {
        await BH, await tL
      }))
    }
    async function uL(HH, BH, LH) {
      const rH = (0, AH.d)(LH).then((() => !1));
      return await (0, AH.d)(BH), Promise.race([HH.then((() => !0)), rH])
    }

    function QL() {
      requestAnimationFrame((() => {
        zL++, QL()
      }))
    }

    function WL() {
      var HH, BH, LH;
      if (hL) return;
      (hL = !0, jH(`renderer caps ${null!==(HH=SL.caps)&&void 0!==HH?HH:"(not noted)"}; terrain fetch ${null!==(BH=SL.fetch)&&void 0!==BH?BH:"(not noted)"}`), SL.adrenoProbe) && jH(`adrenoProbe ${SL.adrenoProbe} asked; in force (storage fetch only): ${null!==(LH=SL.probe)&&void 0!==LH?LH:"(not noted)"}`);
      const AH = KH.context;
      if (AH) {
        for (const HH of function(HH) {
            var BH;
            const LH = [],
              AH = HH.getExtension("WEBGL_debug_renderer_info"),
              rH = AH ? HH.getParameter(AH.UNMASKED_VENDOR_WEBGL) : "(masked)",
              SH = AH ? HH.getParameter(AH.UNMASKED_RENDERER_WEBGL) : "(masked)";
            LH.push(`GL ${String(HH.getParameter(HH.VERSION))} | ${String(HH.getParameter(HH.SHADING_LANGUAGE_VERSION))} | ${String(HH.getParameter(HH.VENDOR))} / ${String(HH.getParameter(HH.RENDERER))}`), LH.push(`GL unmasked ${rH} / ${SH}`);
            const hH = [
              ["MAX_TEXTURE_SIZE", HH.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", HH.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", HH.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", HH.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", HH.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", HH.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", HH.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in HH && hH.push(["MAX_UNIFORM_BLOCK_SIZE", HH.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", HH.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", HH.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", HH.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), LH.push(`GL limits ${hH.map((BH=>{let[LH,AH]=BH;return`${LH} ${String(HH.getParameter(AH))}`})).join(", ")}`);
            const tH = (BH, LH) => {
              const AH = HH.getShaderPrecisionFormat(BH, HH.HIGH_FLOAT),
                rH = HH.getShaderPrecisionFormat(BH, HH.HIGH_INT);
              return `${LH} highp float ${AH?`${AH.rangeMin}/${AH.rangeMax}/${AH.precision}`:"?"} int ${rH?`${rH.rangeMin}/${rH.rangeMax}/${rH.precision}`:"?"}`
            };
            LH.push(`GL precision ${tH(HH.VERTEX_SHADER,"VS")}, ${tH(HH.FRAGMENT_SHADER,"FS")}`);
            const zH = HH.getContextAttributes();
            return LH.push(`GL context ${JSON.stringify(zH)} drawingBuffer ${HH.drawingBufferWidth}x${HH.drawingBufferHeight}${"drawingBufferFormat"in HH?` format 0x${Number(HH.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in HH?` ${String(HH.drawingBufferColorSpace)}`:""}`), LH.push(`GL extensions ${(null!==(BH=HH.getSupportedExtensions())&&void 0!==BH?BH:[]).join(" ")}`), LH
          }(AH)) jH(HH);
        ! function() {
          if (!KH.context) return;
          let HH = 0,
            BH = 0;
          for (const [LH, AH] of IH) !AH.gl.isContextLost() && AH.gl.isProgram(LH) && (BH++, mB(AH.gl, LH, AH), null !== AH.terrain && HH++);
          jH(`programs: ${BH} live of ${IH.length} linked, ${HH} packed terrain; CPU page copies ${Math.round(KH.shadowBytes/1048576)} MiB (${KH.uncopied} over budget)`)
        }()
      }
    }

    function ML(HH) {
      return tL ??= async function(HH) {
        WL(), "webgpu" === AL ? (xL(), "1" === SL.slotCheck && jH("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), SL.slotCheck = "1", await
          function(HH) {
            if (null !== FB) return Promise.resolve();
            const BH = [];
            return FB = BH, new Promise((LH => {
              setTimeout((() => {
                FB = null, jH(`WebGPU draw ranges (${HH}): ${BH.length} terrain draws recorded in a second (first ${CB}; bundles replay without new ones)`);
                for (const HH of BH) jH(HH);
                LH()
              }), 1e3)
            }))
          }(HH), await async function() {
            if (await (0, lB.k)(SL, "slotCheck", ["1"], BL, LL), "1" === SL.slotCheck) return void jH(`slot check: no answer in ${BL} ms (only the storage fetch has one; a later answer logs on its own)`);
            xL()
          }()) : await hB(HH);
        jH(`check (${HH}) done: bloxdDebug.save() downloads it all`)
      }(HH).catch((BH => {
        jH(`check (${HH}) failed: ${String(BH)}`)
      })).finally((() => {
        tL = null
      })), tL
    }

    function xL() {
      void 0 !== SL.slotCheck && "1" !== SL.slotCheck && (jH(SL.slotCheck), delete SL.slotCheck)
    }

    function vL() {
      const HH = HH => zL ? (HH / zL).toFixed(1) : "0",
        BH = function() {
          const HH = DB;
          return DB = {
            draws: 0,
            faces: 0
          }, HH
        }(),
        LH = function() {
          const HH = MB;
          return MB = {
            inst: {
              draws: 0,
              faces: 0
            },
            tex: {
              draws: 0,
              faces: 0
            },
            other: {
              draws: 0,
              faces: 0
            }
          }, HH
        }(),
        AH = function() {
          const HH = xB;
          return xB = {
            buffer: 0,
            texture: 0
          }, HH
        }();
      xL(), ("webgpu" === AL ? BH.draws : LH.inst.draws + LH.tex.draws) > 0 && CL();
      const rH = "webgpu" === AL ? [`terrain ${HH(BH.draws)} draws ${HH(BH.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((HH => LH[HH].draws > 0)).map((BH => `${BH} ${HH(LH[BH].draws)} draws ${HH(LH[BH].faces)} faces a frame`));
      jH(`${zL} frames: ${rH.join(", ")||"no draws"}; uploaded ${Math.round(AH.buffer/1024)} KiB to buffers, ${Math.round(AH.texture/1024)} KiB to data textures`), zL = 0
    }
  },
  5150: (HH, BH, LH) => {
    function AH(HH) {
      if (null === HH) return "backend: none picked (no renderer build)";
      const BH = HH.adapter ? `${HH.adapter.vendor}/${HH.adapter.architecture}` : "none";
      return `backend ${HH.backend}: reason ${HH.reason}, source ${HH.source}, adapter ${BH}`
    }
    LH.d(BH, {
      e: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);