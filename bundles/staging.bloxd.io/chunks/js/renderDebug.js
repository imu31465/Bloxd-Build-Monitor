export const id = 57;
export const ids = [57];
export const modules = {
  5424: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW
    });
    var mW = OW(25),
      EW = OW(27),
      NW = OW(1294),
      PW = OW(3866);
    const LW = 3e4,
      cW = 1e3;

    function wW() {
      return "visible" === document.visibilityState && "inGame" === mW.d.get("gameState") && (0, NW.z)()
    }

    function tW(WW, iW) {
      (0, PW.x)() || function(WW, iW, OW) {
        let mW = 0;
        const EW = setInterval((() => {
          iW() && (mW += cW, mW >= WW && (clearInterval(EW), OW()))
        }), cW)
      }(LW, wW, (() => {
        iW().then((() => {
          WW(`saved for the player after ${LW/1e3} s of play`), (0, PW.J)(), EW.l.iZ("chat", {
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
  5419: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      installRenderDebug: () => lO,
      renderDebugPlayable: () => bO,
      startRenderDebug: () => AO,
      waitForDraw: () => jO
    });
    var mW = OW(1943),
      EW = OW(5424),
      NW = OW(3866);
    const PW = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function LW(WW) {
      return 7 & WW
    }

    function cW(WW) {
      return WW >>> 11 & 1
    }

    function wW(WW) {
      return [1 + (WW >>> 18 & 63), 1 + (WW >>> 24 & 63)]
    }

    function tW(WW, iW) {
      const [OW, , mW] = WW, EW = LW(mW), NW = function(WW, iW, OW) {
        return iW + (1 === (22 >>> WW & 1) ? 4 - OW : OW) & 3
      }(EW, cW(mW), iW), PW = EW >>> 1, [tW, ZW] = wW(OW), xW = 1 === NW || 2 === NW ? tW : 0, lW = NW >= 2 ? ZW : 0, AW = [63 & OW, OW >>> 6 & 63, OW >>> 12 & 63];
      return AW[2 === PW ? 0 : 2] += xW, AW[1 === PW ? 0 : 1] += lW, AW
    }

    function ZW(WW) {
      const iW = Math.max(...wW(WW[0]));
      return 1 === iW ? "1" : iW <= 4 ? "2-4" : iW <= 16 ? "5-16" : "17-64"
    }
    const xW = 16;

    function lW(WW) {
      let iW = 2166136261;
      for (let OW = 0; OW < WW.length; OW++) iW = Math.imul(iW ^ WW[OW], 16777619);
      return iW >>> 0
    }

    function AW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const mW = Math.max(0, iW - OW),
        EW = Math.min(WW.length, iW + OW),
        NW = [];
      for (let PW = mW; PW < EW; PW++) {
        const OW = WW[PW].toString(16).padStart(2, "0");
        NW.push(PW === iW ? `[${OW}]` : OW)
      }
      return NW.join(" ")
    }
    const bW = {
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
      jW = "_vs2fs_location0";
    const UW = 0,
      kW = 4,
      sW = 6,
      MW = [0, 1, 2, 0, 2, 3],
      KW = 2048,
      SW = 4,
      YW = 256,
      yW = 64,
      TW = 268435456,
      JW = 65536,
      hW = /^#version [^\n]*\/\/ program (\S+)$/m;

    function HW(WW) {
      return null === WW.name ? `#${WW.id}` : `#${WW.id} ${WW.name}`
    }
    const nW = [],
      uW = new WeakMap,
      oW = new WeakMap,
      dW = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let eW = 1;
    const vW = new WeakMap;

    function gW(WW) {
      if (null === WW) return 0;
      let iW = vW.get(WW);
      return void 0 === iW && (iW = eW++, vW.set(WW, iW)), iW
    }
    class DW {
      constructor(WW, iW) {
        this.print = WW, this.now = iW, this.shown = 0, this.BL = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.EZ = [], this.dropped = 0
      }
      line(WW) {
        const iW = this.now();
        if (iW - this.second >= 1e3 && (this.second = iW, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.BL++, void this.store(WW);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${WW} (the last line here: the rest go to bloxdDebug.save())` : WW)
      }
      keep(WW) {
        this.sections++, this.store(WW)
      }
      store(WW) {
        this.EZ.push(`${new Date(Date.now()).toISOString()} ${WW}`), this.EZ.length > 2e4 && (this.EZ.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.BL} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.EZ].join("\n")
      }
    }
    let VW = null;

    function pW() {
      if (null === VW) {
        const WW = new DW((WW => {
          (0, NW.m)("render", WW)
        }), (() => performance.now()));
        (0, NW.l)("render", (() => WW.dump())), VW = WW
      }
      return VW
    }

    function fW(WW) {
      pW().line(WW)
    }

    function CW(WW) {
      pW().keep(WW)
    }

    function XW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return WW.length <= iW ? WW : `${WW.slice(0,iW)}... (${WW.length-iW} more characters)`
    }

    function BW(WW, iW, OW, mW, EW, NW) {
      const PW = dW.pendingCheck;
      if (null === PW) return;
      const LW = "undefined" !== typeof WebGL2RenderingContext && WW instanceof WebGL2RenderingContext,
        cW = {
          gl: WW,
          program: OW,
          call: mW,
          kj: EW,
          instances: NW,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (PW.draws.push(cW), LW) try {
        const mW = function(WW) {
          const iW = [],
            OW = new Map,
            mW = Math.min(16, WW.getParameter(bW.MAX_VERTEX_ATTRIBS));
          for (let EW = 0; EW < mW; EW++) {
            if (!WW.getVertexAttrib(EW, bW.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const mW = WW.getVertexAttrib(EW, bW.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              NW = WW.getVertexAttribOffset(EW, bW.VERTEX_ATTRIB_ARRAY_POINTER),
              PW = WW.getVertexAttrib(EW, bW.VERTEX_ATTRIB_ARRAY_STRIDE),
              LW = WW.getVertexAttrib(EW, bW.VERTEX_ATTRIB_ARRAY_SIZE),
              cW = WW.getVertexAttrib(EW, bW.VERTEX_ATTRIB_ARRAY_TYPE),
              wW = "VERTEX_ATTRIB_ARRAY_INTEGER" in WW && WW.getVertexAttrib(EW, bW.VERTEX_ATTRIB_ARRAY_INTEGER),
              tW = "VERTEX_ATTRIB_ARRAY_DIVISOR" in WW ? WW.getVertexAttrib(EW, bW.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            OW.set(EW, {
              buffer: mW,
              offset: NW,
              stride: PW
            }), iW.push(`@${EW} buf#${gW(mW)} +${NW} stride ${PW} ${LW}x0x${cW.toString(16)}${wW?" int":""} div ${tW}`)
          }
          return {
            lines: iW,
            byLocation: OW
          }
        }(WW);
        if (cW.attributes = mW.lines, "inst" === OW.terrain) {
          const {
            group: EW,
            chunk: LW
          } = function(WW, iW, OW) {
            const mW = iW.get(sW),
              EW = WW.getVertexAttrib(sW, bW.CURRENT_VERTEX_ATTRIB),
              NW = mW ? `+${mW.offset}` : EW ? Array.from(EW).slice(0, 3).join(",") : "?";
            let PW = OW.groups.get(NW);
            return void 0 === PW && (PW = OW.groups.size, OW.groups.set(NW, PW)), {
              group: PW,
              chunk: NW
            }
          }(WW, mW.byLocation, PW);
          cW.group = EW, cW.chunk = LW;
          for (const WW of [UW, kW]) {
            var wW;
            const iW = null === (wW = mW.byLocation.get(WW)) || void 0 === wW ? void 0 : wW.buffer;
            iW && cW.pages.push({
              kind: "buf",
              buffer: iW
            })
          }! function(WW, iW, OW, mW, EW, NW, PW) {
            const LW = mW.get(UW),
              cW = PW.parts.get(NW);
            if (void 0 === cW && PW.parts.size >= SW) return;
            const wW = Math.min(EW, yW, YW - (null !== cW && void 0 !== cW ? cW : 0));
            if (null === LW || void 0 === LW || !LW.buffer || wW <= 0) return;
            const tW = qW(WW, iW, OW);
            if (!tW) return;
            const ZW = LW.stride || 12,
              xW = rW(WW, LW.buffer, LW.offset, (wW - 1) * ZW + 12),
              lW = new DataView(xW.buffer),
              AW = function(WW, iW) {
                const OW = function(WW) {
                    const iW = QW.get(WW);
                    if (void 0 !== iW && (null === iW || WW.isProgram(iW))) return iW;
                    dW.inProbe = !0;
                    let OW = null;
                    try {
                      OW = RW(WW, zW, FW, "fed", "the record feed")
                    } finally {
                      dW.inProbe = !1
                    }
                    return QW.set(WW, OW), OW
                  }(WW),
                  mW = OW ? aW(WW, OW, iW, (() => {
                    WW.drawArraysInstanced(bW.POINTS, 0, 1, iW)
                  }), "decode probe input (the record feed)") : null;
                return mW ? new Uint32Array(mW.buffer) : null
              }(WW, wW);
            AW || PW.fed.failed++;
            const jW = aW(WW, tW, 4 * wW, (() => {
              WW.drawArraysInstanced(bW.POINTS, 0, 4, wW)
            }));
            if (!jW) return;
            PW.parts.set(NW, (null !== cW && void 0 !== cW ? cW : 0) + wW);
            for (let bW = 0; bW < wW; bW++) {
              const WW = bW * ZW,
                iW = [lW.getUint32(WW, !0), lW.getUint32(WW + 4, !0), lW.getUint32(WW + 8, !0)],
                OW = AW ? [AW[3 * bW], AW[3 * bW + 1], AW[3 * bW + 2]] : iW;
              AW && (PW.fed.records++, OW.some(((WW, OW) => WW !== iW[OW])) && (PW.fed.differing++, PW.fed.first.length < 8 && PW.fed.first.push(`part ${NW} instance ${bW}: fed ${OW.map(Ei).join(" ")} buffer ${iW.map(Ei).join(" ")}`)));
              for (let mW = 0; mW < 4; mW++) {
                const WW = 3 * (4 * bW + mW);
                PW.vertices.push({
                  record: OW,
                  slot: mW,
                  group: NW,
                  gpu: [jW[WW], jW[WW + 1], jW[WW + 2]]
                })
              }
            }
          }(WW, iW, OW, mW.byLocation, NW, EW, PW)
        } else {
          const mW = Wi(WW, iW, 16),
            NW = Wi(WW, iW, 8);
          for (const WW of [mW, NW]) WW && cW.pages.push({
            kind: "tex",
            texture: WW
          });
          mW && function(WW, iW, OW, mW, EW, NW) {
            if (NW.parts.size >= SW) return;
            const PW = qW(WW, iW, OW);
            if (!PW) return;
            let LW = 6 * YW;
            const cW = [];
            for (const [lW, AW] of EW) {
              const WW = Math.min(AW, LW, Math.max(6, 6 * Math.floor(YW / EW.length)));
              WW > 0 && (cW.push([lW, WW]), LW -= WW)
            }
            const wW = cW.reduce(((WW, iW) => {
                let [, OW] = iW;
                return WW + OW
              }), 0),
              tW = aW(WW, PW, wW, (() => {
                for (const [iW, OW] of cW) WW.drawArrays(bW.POINTS, iW, OW)
              }));
            if (!tW) return;
            let ZW = 0;
            for (const [lW, AW] of cW) {
              const iW = Math.floor(lW / 6),
                OW = Math.floor((lW + AW - 1) / 6) - iW + 1,
                EW = ii(WW, mW, KW, iW, OW);
              for (let WW = lW; WW < lW + AW; WW++, ZW++) {
                var xW;
                const OW = 4 * (Math.floor(WW / 6) - iW),
                  mW = [EW[OW], EW[OW + 1], EW[OW + 2]];
                NW.parts.set(EW[OW + 3], (null !== (xW = NW.parts.get(EW[OW + 3])) && void 0 !== xW ? xW : 0) + (WW % 6 === 0 ? 1 : 0)), NW.vertices.push({
                  record: mW,
                  slot: MW[WW % 6],
                  group: EW[OW + 3],
                  gpu: [tW[3 * ZW], tW[3 * ZW + 1], tW[3 * ZW + 2]]
                })
              }
            }
          }(WW, iW, OW, mW, EW, PW)
        }
      } catch (tW) {
        fW(`decode probe failed on program ${HW(OW)}: ${String(tW)}`)
      }
    }

    function qW(WW, iW, OW) {
      if (void 0 !== OW.probe) return OW.probe && GW(WW, iW, OW.probe), OW.probe;
      OW.probe = null, dW.inProbe = !0;
      try {
        OW.probe = function(WW, iW) {
          return RW(WW, (OW = iW.vertex, OW.replace(`\nvec3 ${jW} = vec3(0);\n`, `\nout vec3 ${jW};\n`)), iW.fragment, jW, `program ${HW(iW)}'s twin`);
          var OW
        }(WW, OW)
      } finally {
        dW.inProbe = !1
      }
      return OW.probe && GW(WW, iW, OW.probe), OW.probe
    }

    function RW(WW, iW, OW, mW, EW) {
      const NW = [WW.createShader(bW.VERTEX_SHADER), WW.createShader(bW.FRAGMENT_SHADER)],
        PW = WW.createProgram();
      if (!PW || !NW[0] || !NW[1]) return null;
      WW.shaderSource(NW[0], iW), WW.shaderSource(NW[1], OW);
      for (const cW of NW) WW.compileShader(cW), WW.attachShader(PW, cW);
      WW.transformFeedbackVaryings(PW, [mW], bW.INTERLEAVED_ATTRIBS), WW.linkProgram(PW);
      for (const cW of NW) WW.deleteShader(cW);
      var LW;
      return WW.getProgramParameter(PW, bW.LINK_STATUS) ? PW : (fW(`decode probe: ${EW} failed to link: ${XW(null!==(LW=WW.getProgramInfoLog(PW))&&void 0!==LW?LW:"",300)}`), WW.deleteProgram(PW), null)
    }

    function GW(WW, iW, OW) {
      const mW = WW.getProgramParameter(iW, bW.ACTIVE_UNIFORM_BLOCKS);
      for (let LW = 0; LW < mW; LW++) {
        const mW = WW.getActiveUniformBlockName(iW, LW),
          EW = null === mW ? bW.INVALID_INDEX : WW.getUniformBlockIndex(OW, mW);
        EW !== bW.INVALID_INDEX && WW.uniformBlockBinding(OW, EW, WW.getActiveUniformBlockParameter(iW, LW, bW.UNIFORM_BLOCK_BINDING))
      }
      const EW = WW.getParameter(bW.CURRENT_PROGRAM);
      WW.useProgram(OW);
      const NW = WW.getProgramParameter(iW, bW.ACTIVE_UNIFORMS),
        PW = WW.getActiveUniforms(iW, [...Array(NW).keys()], bW.UNIFORM_BLOCK_INDEX);
      for (let LW = 0; LW < NW; LW++) {
        const mW = WW.getActiveUniform(iW, LW);
        if (!mW || -1 !== PW[LW]) continue;
        const EW = mW.name.replace(/\[0\]$/, "");
        for (let NW = 0; NW < mW.size; NW++) {
          const PW = mW.size > 1 ? `${EW}[${NW}]` : mW.name,
            LW = WW.getUniformLocation(iW, PW),
            cW = WW.getUniformLocation(OW, PW);
          LW && cW && IW(WW, cW, mW.type, WW.getUniform(iW, LW))
        }
      }
      WW.useProgram(EW)
    }

    function IW(WW, iW, OW, mW) {
      const EW = ArrayBuffer.isView(mW) ? Array.from(mW) : [Number(mW)];
      switch (OW) {
        case bW.FLOAT:
          return void WW.uniform1f(iW, EW[0]);
        case bW.FLOAT_VEC2:
          return void WW.uniform2fv(iW, EW);
        case bW.FLOAT_VEC3:
          return void WW.uniform3fv(iW, EW);
        case bW.FLOAT_VEC4:
          return void WW.uniform4fv(iW, EW);
        case bW.FLOAT_MAT3:
          return void WW.uniformMatrix3fv(iW, !1, EW);
        case bW.FLOAT_MAT4:
          return void WW.uniformMatrix4fv(iW, !1, EW);
        case bW.UNSIGNED_INT:
          return void WW.uniform1ui(iW, EW[0]);
        case bW.UNSIGNED_INT_VEC2:
          return void WW.uniform2uiv(iW, EW);
        case bW.UNSIGNED_INT_VEC3:
          return void WW.uniform3uiv(iW, EW);
        case bW.UNSIGNED_INT_VEC4:
          return void WW.uniform4uiv(iW, EW);
        case bW.INT_VEC2:
          return void WW.uniform2iv(iW, EW);
        case bW.INT_VEC3:
          return void WW.uniform3iv(iW, EW);
        case bW.INT_VEC4:
          return void WW.uniform4iv(iW, EW);
        default:
          WW.uniform1i(iW, EW[0])
      }
    }

    function aW(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const NW = WW.getParameter(bW.CURRENT_PROGRAM),
        PW = WW.getParameter(bW.TRANSFORM_FEEDBACK_BINDING),
        LW = WW.getParameter(bW.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        cW = WW.getParameter(bW.COPY_READ_BUFFER_BINDING),
        wW = WW.isEnabled(bW.RASTERIZER_DISCARD),
        tW = WW.createTransformFeedback(),
        ZW = WW.createBuffer();
      dW.inProbe = !0;
      try {
        const NW = WW.getError();
        NW !== bW.NO_ERROR && fW(`GL error 0x${NW.toString(16)} pending before the decode probe (the renderer's)`), WW.useProgram(iW), WW.bindTransformFeedback(bW.TRANSFORM_FEEDBACK, tW), WW.bindBuffer(bW.TRANSFORM_FEEDBACK_BUFFER, ZW), WW.bufferData(bW.TRANSFORM_FEEDBACK_BUFFER, 12 * OW, bW.STREAM_READ), WW.bindBufferBase(bW.TRANSFORM_FEEDBACK_BUFFER, 0, ZW), WW.enable(bW.RASTERIZER_DISCARD), WW.beginTransformFeedback(bW.POINTS), mW(), WW.endTransformFeedback(), WW.bindBufferBase(bW.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const PW = WW.getError();
        if (PW !== bW.NO_ERROR) return fW(`${EW}: GL error 0x${PW.toString(16)} on the feedback draw`), null;
        const LW = new Float32Array(3 * OW);
        return WW.bindBuffer(bW.COPY_READ_BUFFER, ZW), WW.getBufferSubData(bW.COPY_READ_BUFFER, 0, LW), LW
      } finally {
        wW || WW.disable(bW.RASTERIZER_DISCARD), WW.bindTransformFeedback(bW.TRANSFORM_FEEDBACK, PW), WW.bindBuffer(bW.TRANSFORM_FEEDBACK_BUFFER, LW), WW.bindBuffer(bW.COPY_READ_BUFFER, cW), WW.deleteTransformFeedback(tW), WW.deleteBuffer(ZW), WW.useProgram(NW), dW.inProbe = !1
      }
    }

    function rW(WW, iW, OW, mW) {
      const EW = WW.getParameter(bW.COPY_READ_BUFFER_BINDING),
        NW = new Uint8Array(mW);
      return WW.bindBuffer(bW.COPY_READ_BUFFER, iW), WW.getBufferSubData(bW.COPY_READ_BUFFER, OW, NW), WW.bindBuffer(bW.COPY_READ_BUFFER, EW), NW
    }
    const zW = `#version 300 es\nlayout(location = ${UW}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      FW = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      QW = new WeakMap;

    function Wi(WW, iW, OW) {
      const mW = WW.getProgramParameter(iW, bW.ACTIVE_UNIFORMS),
        EW = WW.getParameter(bW.ACTIVE_TEXTURE);
      try {
        for (let EW = 0; EW < mW; EW++) {
          const mW = WW.getActiveUniform(iW, EW);
          if ((null === mW || void 0 === mW ? void 0 : mW.type) !== bW.UNSIGNED_INT_SAMPLER_2D) continue;
          const NW = WW.getUniformLocation(iW, mW.name),
            PW = NW ? WW.getUniform(iW, NW) : -1;
          if (PW < 0) continue;
          WW.activeTexture(bW.TEXTURE0 + PW);
          const LW = WW.getParameter(bW.TEXTURE_BINDING_2D);
          if (LW && oW.get(LW) === OW) return LW
        }
        return null
      } finally {
        WW.activeTexture(EW)
      }
    }

    function ii(WW, iW, OW, mW, EW) {
      const NW = new Uint32Array(4 * EW),
        PW = WW.getParameter(bW.READ_FRAMEBUFFER_BINDING),
        LW = WW.createFramebuffer();
      WW.bindFramebuffer(bW.READ_FRAMEBUFFER, LW), WW.framebufferTexture2D(bW.READ_FRAMEBUFFER, bW.COLOR_ATTACHMENT0, bW.TEXTURE_2D, iW, 0);
      try {
        let iW = 0;
        for (; iW < EW;) {
          const PW = mW + iW,
            LW = PW % OW,
            cW = Math.min(EW - iW, OW - LW);
          WW.readPixels(LW, Math.floor(PW / OW), cW, 1, bW.RGBA_INTEGER, bW.UNSIGNED_INT, NW.subarray(4 * iW, 4 * (iW + cW))), iW += cW
        }
      } finally {
        WW.bindFramebuffer(bW.READ_FRAMEBUFFER, PW), WW.deleteFramebuffer(LW)
      }
      return NW
    }

    function Oi(WW, iW, OW) {
      let mW = 0,
        EW = 0;
      for (let cW = 0; cW < iW.bytes.length; cW += JW) {
        mW++;
        const WW = Math.min(cW + JW, iW.bytes.length);
        lW(iW.bytes.subarray(cW, WW)) !== lW(OW.subarray(cW, WW)) && EW++
      }
      const NW = `${WW} ${iW.bytes.length} B cpu ${lW(iW.bytes).toString(16)} gpu ${lW(OW).toString(16)}, ${EW}/${mW} blocks differ${iW.missed?`, ${iW.missed} GPU-side writes uncopied`:""}`;
      if (0 === EW) return NW;
      const {
        count: PW,
        offsets: LW
      } = function(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const mW = Math.min(WW.length, iW.length);
        let EW = Math.abs(WW.length - iW.length);
        const NW = [];
        for (let PW = 0; PW < mW; PW++) WW[PW] !== iW[PW] && (EW++, NW.length < OW && NW.push(PW));
        return {
          count: EW,
          offsets: NW
        }
      }(iW.bytes, OW);
      return CW([`${NW}: ${PW} bytes differ`, ...LW.map((WW => `  +${WW}: cpu ${AW(iW.bytes,WW)} | gpu ${AW(OW,WW)}`))].join("\n")), `${NW}: ${PW} bytes differ, first at ${LW.join(", ")} (context in the saved file)`
    }

    function mi(WW) {
      if (0 === WW.vertices.length) return void fW(`decode probe (${WW.reason}): no terrain draw probed (${WW.draws.length} seen)`);
      const iW = function(WW) {
          const iW = new Map;
          for (const mW of WW) {
            const WW = iW.get(mW.group);
            WW ? WW.push(mW) : iW.set(mW.group, [mW])
          }
          const OW = {
            vertices: WW.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [mW, EW] of iW) {
            const WW = new Map,
              iW = EW.map((iW => {
                const OW = tW(iW.record, iW.slot),
                  mW = [iW.gpu[0] - OW[0], iW.gpu[1] - OW[1], iW.gpu[2] - OW[2]],
                  EW = mW.map((WW => Math.round(64 * WW))).join(","),
                  NW = WW.get(EW);
                return NW ? NW.count++ : WW.set(EW, {
                  count: 1,
                  offset: mW
                }), OW
              }));
            let NW = [0, 0, 0],
              PW = 0;
            for (const OW of WW.values()) OW.count > PW && (PW = OW.count, NW = OW.offset);
            OW.translations.set(mW, NW), EW.forEach(((WW, mW) => {
              var EW;
              const PW = [iW[mW][0] + NW[0], iW[mW][1] + NW[1], iW[mW][2] + NW[2]];
              if (PW.every(((iW, OW) => {
                  return mW = WW.gpu[OW], EW = iW, Math.abs(mW - EW) <= Math.max(.001, 1e-6 * Math.abs(EW));
                  var mW, EW
                }))) return;
              OW.mismatches++, OW.byDirection[LW(WW.record[2])]++, OW.byDiagonal[cW(WW.record[2])]++;
              const wW = ZW(WW.record);
              OW.byBand[wW] = (null !== (EW = OW.byBand[wW]) && void 0 !== EW ? EW : 0) + 1, OW.first.length < xW && OW.first.push({
                ...WW,
                expected: PW
              })
            }))
          }
          return OW
        }(WW.vertices),
        OW = iW.byDirection.map(((WW, iW) => WW ? `${PW[iW]} ${WW}` : "")).filter(Boolean).join(" "),
        mW = Object.entries(iW.byBand).map((WW => {
          let [iW, OW] = WW;
          return `${iW}: ${OW}`
        })).join(" ");
      if (fW(`decode probe (${WW.reason}): ${iW.mismatches}/${iW.vertices} vertices differ from the CPU decode over ${WW.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (iW.mismatches ? ` by direction [${OW}] diagonal [0: ${iW.byDiagonal[0]} 1: ${iW.byDiagonal[1]}] extent [${mW}]` : "")), WW.fed.records > 0 || WW.fed.failed > 0) {
        fW(`decode probe input: ${WW.fed.differing}/${WW.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (WW.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (WW.fed.failed ? `; the feed failed on ${WW.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const iW of WW.fed.first) fW(`  ${iW}`)
      }
      for (const EW of iW.first) {
        const [WW, iW, OW] = EW.record;
        fW(`  mismatch part ${EW.group} r0 ${WW.toString(16)} r1 ${iW.toString(16)} r2 ${OW.toString(16)} slot ${EW.slot} (${PW[LW(OW)]}): expected ${EW.expected.map(Ni).join(",")} gpu ${EW.gpu.map(Ni).join(",")}`)
      }
      CW(`decode probe translations: ${[...iW.translations].map((WW=>{let[iW,OW]=WW;return`${iW}: ${OW.map(Ni).join(",")}`})).join("; ")}`)
    }

    function Ei(WW) {
      return WW.toString(16)
    }

    function Ni(WW) {
      return Number.isInteger(WW) ? String(WW) : WW.toFixed(3)
    }

    function Pi(WW) {
      return null !== dW.pendingCheck ? Promise.resolve() : new Promise((iW => {
        let OW = !1;
        const mW = {
          reason: WW,
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
        dW.pendingCheck = mW;
        const EW = () => {
            dW.pendingCheck = null;
            try {
              ! function(WW) {
                fW(`draw ranges (${WW.reason}): ${WW.terrainDraws} terrain draws in the frame, the first ${WW.draws.length} here`);
                for (const iW of WW.draws) {
                  const WW = iW.kj.slice(0, 8).map((WW => {
                      let [iW, OW] = WW;
                      return `${iW}+${OW}`
                    })).join(" "),
                    OW = iW.kj.length > 8 ? ` (+${iW.kj.length-8} ranges)` : "";
                  fW(`  ${HW(iW.program)} ${iW.program.terrain} ${iW.call} ${WW}${OW} x${iW.instances}${iW.group>=0?` part ${iW.group} chunk ${iW.chunk}`:""} | ${iW.attributes.join(" | ")}`)
                }
              }(mW), mi(mW);
              mW.draws.some((WW => "undefined" !== typeof WebGL2RenderingContext && WW.gl instanceof WebGL2RenderingContext)) || 0 === mW.draws.length ? function(WW) {
                const iW = [],
                  OW = new Map;
                for (const mW of WW)
                  if ("undefined" !== typeof WebGL2RenderingContext && mW.gl instanceof WebGL2RenderingContext)
                    for (const WW of mW.pages) OW.set("buf" === WW.kind ? WW.buffer : WW.texture, {
                      page: WW,
                      gl: mW.gl
                    });
                for (const [mW, {
                    page: EW,
                    gl: NW
                  }] of OW) {
                  const WW = uW.get(mW);
                  if (!WW) {
                    iW.push(`${EW.kind}#${gW(mW)}: no CPU copy (${dW.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === EW.kind) {
                    iW.push(Oi(`buf#${WW.id}`, WW, rW(NW, EW.buffer, 0, WW.bytes.length)));
                    continue
                  }
                  const OW = ii(NW, EW.texture, WW.width, 0, WW.width * WW.height),
                    PW = 16 === WW.texelBytes ? new Uint8Array(OW.buffer) : new Uint8Array(new Uint16Array(OW).buffer);
                  iW.push(Oi(`tex#${WW.id} (${16===WW.texelBytes?"records":"light"})`, WW, PW))
                }
                for (const mW of iW) fW(`page readback ${mW}`)
              }(mW.draws) : fW("page readback: none on WebGL1 (no buffer readback)")
            } catch (WW) {
              fW(`check failed: ${String(WW)}`)
            }
            iW()
          },
          NW = () => {
            if (mW.draws.length > 0 && !OW) return OW = !0, void setTimeout(EW, 0);
            OW || requestAnimationFrame(NW)
          };
        requestAnimationFrame(NW), setTimeout((() => {
          OW || (OW = !0, EW())
        }), 5e3)
      }))
    }
    var Li = OW(5427);
    const ci = 20,
      wi = 24,
      ti = Reflect.apply;

    function Zi(WW, iW, OW) {
      if (!WW) return;
      const mW = WW[iW];
      if ("function" === typeof mW) {
        const EW = OW(mW);
        WW[iW] = EW, (0, Li.v)(EW, mW)
      }
    }
    let xi = !1;
    const li = new WeakMap,
      Ai = new WeakMap,
      bi = new WeakMap,
      ji = {
        gl: 0,
        lost: 0
      };
    let Ui = {
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
      ki = {
        buffer: 0,
        texture: 0
      },
      si = 0;

    function Mi(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (WW instanceof ArrayBuffer) return new Uint8Array(WW, iW, OW || void 0);
      if (!ArrayBuffer.isView(WW)) return null;
      const mW = "BYTES_PER_ELEMENT" in WW ? WW.BYTES_PER_ELEMENT : 1,
        EW = WW.byteOffset + iW * mW,
        NW = OW ? OW * mW : WW.byteLength - iW * mW;
      return new Uint8Array(WW.buffer, EW, Math.max(0, NW))
    }

    function Ki(WW, iW) {
      const OW = function(WW) {
        switch (WW) {
          case bW.ARRAY_BUFFER:
            return bW.ARRAY_BUFFER_BINDING;
          case bW.ELEMENT_ARRAY_BUFFER:
            return bW.ELEMENT_ARRAY_BUFFER_BINDING;
          case bW.COPY_READ_BUFFER:
            return bW.COPY_READ_BUFFER_BINDING;
          case bW.COPY_WRITE_BUFFER:
            return bW.COPY_WRITE_BUFFER_BINDING;
          case bW.UNIFORM_BUFFER:
            return bW.UNIFORM_BUFFER_BINDING;
          case bW.PIXEL_UNPACK_BUFFER:
            return bW.PIXEL_UNPACK_BUFFER_BINDING;
          case bW.TRANSFORM_FEEDBACK_BUFFER:
            return bW.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(iW);
      return OW ? WW.getParameter(OW) : null
    }

    function Si(WW) {
      const iW = uW.get(WW);
      iW && (dW.shadowBytes -= iW.bytes.length, uW.delete(WW))
    }

    function Yi(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Si(WW), dW.shadowBytes + iW > TW ? dW.uncopied++ : (dW.shadowBytes += iW, uW.set(WW, {
        id: gW(WW),
        bytes: new Uint8Array(iW),
        width: OW,
        height: mW,
        texelBytes: EW,
        missed: 0
      }))
    }

    function yi(WW, iW) {
      for (const OW of ["deleteBuffer", "deleteTexture"]) Zi(WW, OW, (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        return OW[0] && Si(OW[0]), ti(WW, this, OW)
      }));
      Zi(WW, "shaderSource", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        return OW[0] && "string" === typeof OW[1] && li.set(OW[0], OW[1]), ti(WW, this, OW)
      })), Zi(WW, "attachShader", (WW => function() {
        for (var iW, OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
        const NW = mW[0],
          PW = null !== (iW = Ai.get(NW)) && void 0 !== iW ? iW : [];
        return PW.push(mW[1]), Ai.set(NW, PW), ti(WW, this, mW)
      })), Zi(WW, "linkProgram", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        const EW = ti(WW, this, OW);
        return dW.inProbe || function(WW, iW) {
          var OW, mW, EW;
          "undefined" !== typeof HTMLCanvasElement && WW.canvas instanceof HTMLCanvasElement && function(WW) {
            if (oi.has(WW)) return;
            oi.add(WW);
            for (const iW of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) WW.addEventListener(iW, (WW => {
              ji.lost < ci && (ji.lost++, fW(`${iW}${"statusMessage"in WW?`: ${String(WW.statusMessage)}`:""}`))
            }))
          }(WW.canvas);
          dW.context ??= WW;
          const NW = null !== (OW = Ai.get(iW)) && void 0 !== OW ? OW : [];
          let PW = "",
            LW = "";
          for (const tW of NW) {
            var cW;
            const WW = null !== (cW = li.get(tW)) && void 0 !== cW ? cW : "";
            /\bgl_Position\b/.test(WW) ? PW = WW : LW = WW
          }
          const wW = {
            id: gW(iW),
            name: null !== (mW = null === (EW = hW.exec(PW)) || void 0 === EW ? void 0 : EW[1]) && void 0 !== mW ? mW : null,
            gl: WW,
            vertex: PW,
            fragment: LW,
            terrain: Ji(PW),
            checked: !1,
            firstDraw: !1
          };
          if (bi.set(iW, wW), nW.push([iW, wW]), null !== wW.terrain) {
            const iW = NW.map((iW => {
              var OW;
              return null !== (OW = WW.getShaderInfoLog(iW)) && void 0 !== OW ? OW : ""
            })).filter((WW => "" !== WW.trim()));
            iW.length > 0 && CW(`program ${HW(wW)} (${wW.terrain}) shader logs:\n${XW(iW.join("\n"))}`)
          }
        }(this, OW[0]), EW
      })), Zi(WW, "bufferData", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        const EW = ti(WW, this, OW);
        if (!dW.inProbe) {
          const WW = Ki(this, OW[0]);
          if (WW) {
            var NW, PW, LW;
            const iW = "number" === typeof OW[1] ? null : Mi(OW[1], null !== (NW = OW[3]) && void 0 !== NW ? NW : 0, null !== (PW = OW[4]) && void 0 !== PW ? PW : 0);
            var cW;
            if (Yi(WW, "number" === typeof OW[1] ? OW[1] : null !== (LW = null === iW || void 0 === iW ? void 0 : iW.length) && void 0 !== LW ? LW : 0), iW) null === (cW = uW.get(WW)) || void 0 === cW || cW.bytes.set(iW)
          }
        }
        return EW
      })), Zi(WW, "bufferSubData", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        const EW = ti(WW, this, OW);
        if (!dW.inProbe) {
          var NW, PW;
          const WW = Ki(this, OW[0]),
            iW = WW ? uW.get(WW) : void 0,
            mW = Mi(OW[2], null !== (NW = OW[3]) && void 0 !== NW ? NW : 0, null !== (PW = OW[4]) && void 0 !== PW ? PW : 0);
          if (iW && mW) {
            const WW = OW[1];
            iW.bytes.set(mW.subarray(0, Math.max(0, iW.bytes.length - WW)), WW), Ti("buffer", iW, WW, mW.length)
          }
        }
        return EW
      })), iW && (Zi(WW, "copyBufferSubData", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        const EW = ti(WW, this, OW);
        if (!dW.inProbe) {
          const [WW, iW, mW, EW, NW] = OW, PW = Ki(this, WW), LW = Ki(this, iW), cW = PW ? uW.get(PW) : void 0, wW = LW ? uW.get(LW) : void 0;
          wW && (cW ? wW.bytes.set(cW.bytes.slice(mW, mW + NW), EW) : wW.missed++)
        }
        return EW
      })), Zi(WW, "texStorage2D", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        const EW = ti(WW, this, OW),
          [, , NW, PW, LW] = OW;
        if (!dW.inProbe && (NW === bW.RGBA32UI || NW === bW.RGBA16UI)) {
          const WW = this.getParameter(bW.TEXTURE_BINDING_2D),
            iW = NW === bW.RGBA32UI ? 16 : 8;
          WW && (oW.set(WW, iW), Yi(WW, PW * LW * iW, PW, LW, iW))
        }
        return EW
      })), Zi(WW, "texSubImage2D", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        const EW = ti(WW, this, OW);
        return !dW.inProbe && OW.length >= 9 && OW[0] === bW.TEXTURE_2D && 0 === OW[1] && function(WW, iW) {
          var OW;
          const mW = WW.getParameter(bW.TEXTURE_BINDING_2D),
            EW = mW ? uW.get(mW) : void 0;
          if (!EW) return;
          const [, , NW, PW, LW, cW] = iW;
          let wW = Mi(iW[8], null !== (OW = iW[9]) && void 0 !== OW ? OW : 0);
          if (null === wW && "number" === typeof iW[8]) {
            const OW = Ki(WW, bW.PIXEL_UNPACK_BUFFER),
              mW = OW ? uW.get(OW) : void 0;
            wW = mW ? mW.bytes.subarray(iW[8]) : null
          }
          if (null === wW) return void EW.missed++;
          const tW = WW.getParameter(bW.UNPACK_ROW_LENGTH) || LW,
            ZW = WW.getParameter(bW.UNPACK_SKIP_ROWS),
            xW = WW.getParameter(bW.UNPACK_SKIP_PIXELS),
            lW = EW.texelBytes;
          for (let AW = 0; AW < cW; AW++) {
            const WW = ((ZW + AW) * tW + xW) * lW,
              iW = ((PW + AW) * EW.width + NW) * lW;
            EW.bytes.set(wW.subarray(WW, WW + LW * lW), iW)
          }
          Ti("texture", EW, (PW * EW.width + NW) * lW, LW * cW * lW)
        }(this, OW), EW
      })), Zi(WW, "copyTexSubImage2D", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        const EW = OW[0] === bW.TEXTURE_2D ? this.getParameter(bW.TEXTURE_BINDING_2D) : null,
          NW = EW ? uW.get(EW) : void 0;
        return NW && NW.missed++, ti(WW, this, OW)
      })));
      for (const OW of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Zi(WW, OW, (WW => function() {
        for (var iW = arguments.length, mW = new Array(iW), EW = 0; EW < iW; EW++) mW[EW] = arguments[EW];
        const NW = ti(WW, this, mW);
        return dW.inProbe || ni(this, OW, mW), NW
      }));
      Zi(WW, "getExtension", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        const EW = ti(WW, this, OW);
        return EW && "object" === typeof EW && function(WW, iW, OW) {
          const mW = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(iW in mW) || OW.bloxdRenderDebug) return;
          OW.bloxdRenderDebug = !0;
          for (const EW of mW[iW]) {
            const iW = OW[EW];
            "function" === typeof iW && (OW[EW] = function() {
              for (var mW = arguments.length, NW = new Array(mW), PW = 0; PW < mW; PW++) NW[PW] = arguments[PW];
              const LW = ti(iW, OW, NW);
              return dW.inProbe || ni(WW, EW, NW), LW
            })
          }
        }(this, OW[0], EW), EW
      }))
    }

    function Ti(WW, iW, OW, mW) {
      ki[WW] += mW, si < 32 && iW.bytes.length >= 1 << 20 && (si++, CW(`upload ${WW} #${iW.id} +${OW} ${mW} B`))
    }

    function Ji(WW) {
      if (!WW.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(WW) || /in uvec3 _p2vs_location0\b/.test(WW) ? "inst" : "tex"
    }

    function Hi(WW, iW, OW) {
      var mW;
      if (OW.checked) return;
      OW.checked = !0;
      const EW = WW.getProgramParameter(iW, bW.LINK_STATUS),
        NW = (null !== (mW = WW.getProgramInfoLog(iW)) && void 0 !== mW ? mW : "").trim();
      var PW;
      null === OW.terrain && EW || (fW(`program ${HW(OW)} ${null!==(PW=OW.terrain)&&void 0!==PW?PW:"other"} link ${EW?"ok":"FAILED"}${NW?`: ${XW(NW,300)}`:""}`), NW && CW(`program ${HW(OW)} link log:\n${XW(NW)}`))
    }

    function ni(WW, iW, OW) {
      var mW;
      const EW = WW.getParameter(bW.CURRENT_PROGRAM),
        NW = EW ? bi.get(EW) : void 0;
      if (!EW || !NW) return;
      const PW = null !== (mW = NW.terrain) && void 0 !== mW ? mW : "other",
        {
          kj: LW,
          instances: cW
        } = function(WW, iW) {
          switch (WW) {
            case "drawArrays":
              return {
                kj: [
                  [iW[1], iW[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                kj: [
                  [iW[1], iW[2]]
                ], instances: iW[3]
              };
            case "drawElements":
              return {
                kj: [
                  [0, iW[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                kj: [
                  [0, iW[1]]
                ], instances: iW[4]
              };
            case "multiDrawArraysWEBGL": {
              const WW = iW[1],
                OW = iW[3],
                mW = iW[2],
                EW = iW[4],
                NW = [];
              for (let PW = 0; PW < iW[5]; PW++) NW.push([WW[mW + PW], OW[EW + PW]]);
              return {
                kj: NW,
                instances: 1
              }
            }
            default:
              return {
                kj: [], instances: 0
              }
          }
        }(iW, OW),
        wW = "inst" === NW.terrain ? cW : LW.reduce(((WW, iW) => {
          let [, OW] = iW;
          return WW + OW
        }), 0) / 6;
      if (Ui[PW].draws++, Ui[PW].faces += wW, null === NW.terrain) return;
      if (dW.context = WW, !NW.firstDraw) {
        NW.firstDraw = !0, Hi(WW, EW, NW), ui || (ui = !0, fW(function(WW) {
          var iW;
          const OW = WW.getParameter(bW.DEPTH_FUNC),
            mW = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let EW = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in WW && WW.getParameter(bW.DRAW_FRAMEBUFFER_BINDING)) {
            const iW = WW;
            EW = iW.getFramebufferAttachmentParameter(bW.DRAW_FRAMEBUFFER, bW.DEPTH_ATTACHMENT, bW.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(iW.getFramebufferAttachmentParameter(bW.DRAW_FRAMEBUFFER,bW.DEPTH_ATTACHMENT,bW.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(iW.getFramebufferAttachmentParameter(bW.DRAW_FRAMEBUFFER,bW.DEPTH_ATTACHMENT,bW.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const NW = WW.getParameter(bW.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(iW=mW[OW])&&void 0!==iW?iW:`0x${OW.toString(16)}`} clear ${NW}${516===OW||518===OW?" (reverse-Z)":""}, samples ${String(WW.getParameter(bW.SAMPLES))}, ${EW}`
        }(WW)));
        const OW = WW.getError();
        OW !== bW.NO_ERROR && ji.gl < ci && (ji.gl++, fW(`GL error 0x${OW.toString(16)} after program ${HW(NW)}'s first terrain draw (${iW})`))
      }
      const tW = dW.pendingCheck;
      null !== tW && (tW.terrainDraws++, tW.draws.length < wi && BW(WW, EW, NW, iW, LW, cW))
    }
    let ui = !1;
    const oi = new WeakSet;
    var di = OW(5217),
      ei = OW(5431);
    const vi = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let gi = !1;
    const Di = new WeakSet,
      Vi = new WeakMap,
      fi = new WeakMap,
      Ci = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let Xi = 0,
      Bi = !1,
      qi = null,
      Ri = {
        draws: 0,
        faces: 0
      };

    function Gi(WW) {
      const iW = globalThis[WW];
      return null === iW || void 0 === iW ? void 0 : iW.prototype
    }

    function Ii(WW) {
      return WW && "function" === typeof WW[Symbol.iterator] ? [...WW].sort().join(" ") : ""
    }

    function ai(WW, iW) {
      const OW = null !== WW && void 0 !== WW ? WW : {},
        mW = null !== iW && void 0 !== iW ? iW : Object.keys(Object.getPrototypeOf(OW)).concat(Object.keys(OW));
      return [...new Set(mW)].filter((WW => "number" === typeof OW[WW])).map((WW => `${WW} ${String(OW[WW])}`)).join(", ")
    }

    function ri(WW, iW) {
      var OW;
      const mW = null !== (OW = iW.vertex) && void 0 !== OW ? OW : {};
      if (mW.module && Di.has(mW.module)) {
        var EW;
        const OW = String(null !== (EW = mW.entryPoint) && void 0 !== EW ? EW : "");
        if (OW.startsWith("vs_packed") && Vi.set(WW, OW), !Bi) {
          var NW, PW, LW, cW, wW;
          Bi = !0;
          const WW = null !== (NW = iW.depthStencil) && void 0 !== NW ? NW : {},
            mW = null !== (PW = iW.multisample) && void 0 !== PW ? PW : {},
            EW = String(null !== (LW = WW.depthCompare) && void 0 !== LW ? LW : "");
          fW(`WebGPU terrain pipeline ${OW}: depth ${String(null!==(cW=WW.format)&&void 0!==cW?cW:"none")} ${EW}${EW.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(wW=mW.count)&&void 0!==wW?wW:1)}`)
        }
      }
    }

    function zi(WW) {
      Zi(WW, "setPipeline", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        return fi.set(this, OW[0]), ti(WW, this, OW)
      }));
      for (const iW of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Zi(WW, iW, (WW => function() {
        const OW = fi.get(this),
          mW = OW ? Vi.get(OW) : void 0;
        for (var EW = arguments.length, NW = new Array(EW), PW = 0; PW < EW; PW++) NW[PW] = arguments[PW];
        return void 0 !== mW && Fi(iW, mW, NW), ti(WW, this, NW)
      }))
    }

    function Fi(WW, iW, OW) {
      var mW;
      (Ri.draws++, "draw" === WW || "drawIndexed" === WW) && (Ri.faces += OW[0] * (null !== (mW = OW[1]) && void 0 !== mW ? mW : 1) / 6);
      if (null !== qi && qi.length < wi) {
        const mW = ("draw" === WW ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === WW ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((iW, mW) => {
          const EW = WW.endsWith("Indirect") ? OW[1] : OW[mW];
          return `${iW} ${String(null!==EW&&void 0!==EW?EW:"instances"===iW?1:0)}`
        }));
        qi.push(`  ${iW} ${WW} ${mW.join(" ")}`)
      }
    }

    function Qi() {
      if (gi || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      gi = !0, Zi(Gi("GPU"), "requestAdapter", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        return ti(WW, this, OW).then((WW => {
          var iW;
          WW ? function(WW) {
            var iW;
            const OW = null !== (iW = WW.info) && void 0 !== iW ? iW : {};
            fW(`WebGPU adapter ${["vendor","architecture","device","description"].map((WW=>{var iW;return`${WW} "${String(null!==(iW=OW[WW])&&void 0!==iW?iW:"")}"`})).join(" ")}${WW.isFallbackAdapter?" (fallback)":""}`), fW(`WebGPU adapter features ${Ii(WW.features)}`), fW(`WebGPU adapter limits ${ai(WW.limits,vi)}`), CW(`WebGPU adapter all limits ${ai(WW.limits,null)}`)
          }(WW) : fW(`WebGPU requestAdapter(${JSON.stringify(null!==(iW=OW[0])&&void 0!==iW?iW:{})}) gave none`);
          return WW
        }))
      })), Zi(Gi("GPUAdapter"), "requestDevice", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        return ti(WW, this, OW).then((WW => (function(WW) {
          fW(`WebGPU device features ${Ii(WW.features)}`), fW(`WebGPU device limits ${ai(WW.limits,vi)}`), WW.addEventListener("uncapturederror", (WW => {
            if (Ci.uncaptured < ci) {
              var iW, OW, mW;
              Ci.uncaptured++;
              const EW = WW.error;
              fW(`WebGPU uncaptured ${null!==(iW=null===EW||void 0===EW||null===(OW=EW.constructor)||void 0===OW?void 0:OW.name)&&void 0!==iW?iW:"error"}: ${XW(String(null!==(mW=null===EW||void 0===EW?void 0:EW.message)&&void 0!==mW?mW:""),600)}`)
            }
          }));
          const iW = WW.lost;
          null === iW || void 0 === iW || iW.then((WW => {
            var iW;
            fW(`WebGPU device lost (${String(WW.reason)}): ${XW(String(null!==(iW=WW.message)&&void 0!==iW?iW:""),600)}`)
          }))
        }(WW), WW)), (WW => {
          throw fW(`WebGPU requestDevice failed: ${String(WW)}`), WW
        }))
      }));
      const WW = Gi("GPUDevice");
      Zi(WW, "createShaderModule", (WW => function() {
        for (var iW, OW, mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
        const PW = ti(WW, this, EW);
        return function(WW, iW) {
          const OW = iW.includes("decodeQuad");
          OW && Di.add(WW);
          const mW = WW.getCompilationInfo;
          null === mW || void 0 === mW || mW.call(WW).then((WW => {
            if (0 === WW.messages.length && !OW) return;
            const iW = {};
            for (const OW of WW.messages) {
              var mW;
              iW[String(OW.type)] = (null !== (mW = iW[String(OW.type)]) && void 0 !== mW ? mW : 0) + 1
            }
            const EW = WW.messages.map((WW => `${String(WW.type)} ${String(WW.lineNum)}:${String(WW.linePos)} ${String(WW.message)}`)).join("\n");
            Ci.compile < ci && (Ci.compile++, fW(`WebGPU ${OW?"terrain ":""}shader module compiled: ${JSON.stringify(iW)}${EW?` first: ${XW(EW.split("\n")[0],300)}`:""}`)), EW && CW(`WebGPU shader module messages:\n${XW(EW)}`)
          }))
        }(PW, String(null !== (iW = (null !== (OW = EW[0]) && void 0 !== OW ? OW : {}).code) && void 0 !== iW ? iW : "")), PW
      })), Zi(WW, "createRenderPipeline", (WW => function() {
        for (var iW, OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
        const NW = ti(WW, this, mW);
        return ri(NW, null !== (iW = mW[0]) && void 0 !== iW ? iW : {}), NW
      })), Zi(WW, "createRenderPipelineAsync", (WW => function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        return ti(WW, this, OW).then((WW => {
          var iW;
          return ri(WW, null !== (iW = OW[0]) && void 0 !== iW ? iW : {}), WW
        }), (WW => {
          var iW;
          throw function(WW, iW) {
            var OW, mW, EW;
            if (Ci.rejected >= ci) return;
            Ci.rejected++;
            const {
              reason: NW,
              message: PW
            } = null !== iW && void 0 !== iW ? iW : {}, LW = String(null !== (OW = (null !== (mW = WW.vertex) && void 0 !== mW ? mW : {}).entryPoint) && void 0 !== OW ? OW : "");
            fW(`WebGPU pipeline "${String(null!==(EW=WW.label)&&void 0!==EW?EW:"")}" ${LW} rejected (${String(null!==NW&&void 0!==NW?NW:"no reason")}): ${XW(String(null!==PW&&void 0!==PW?PW:iW),600)}`)
          }(null !== (iW = OW[0]) && void 0 !== iW ? iW : {}, WW), WW
        }))
      })), Zi(Gi("GPUCanvasContext"), "configure", (WW => function() {
        for (var iW, OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
        const NW = null !== (iW = mW[0]) && void 0 !== iW ? iW : {};
        var PW, LW;
        Xi++ < 3 && fW(`WebGPU canvas ${String(NW.format)} ${String(null!==(PW=NW.colorSpace)&&void 0!==PW?PW:"srgb")} alpha ${String(null!==(LW=NW.alphaMode)&&void 0!==LW?LW:"opaque")}`);
        return ti(WW, this, mW)
      })), zi(Gi("GPURenderPassEncoder")), zi(Gi("GPURenderBundleEncoder"))
    }
    const WO = 1e4,
      iO = 6e4,
      OO = 5e3,
      mO = 3e3,
      EO = 100;
    let NO = null,
      PO = !1,
      LO = {
        ...di.b
      },
      cO = !1,
      wO = null,
      tO = 0,
      ZO = () => {};
    const xO = new Promise((WW => {
      ZO = WW
    }));

    function lO() {
      var WW;
      PO || (PO = !0, LO = Object.assign(window.bloxdRenderDebug ??= {
        ...di.b
      }, {
        faceCull: "0" === (0, NW.p)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (WW = (0, NW.p)("adrenoProbe")) && void 0 !== WW ? WW : ""
      }), fW("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), xi || "undefined" === typeof window || (xi = !0, "undefined" !== typeof WebGL2RenderingContext && yi(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && yi(WebGLRenderingContext.prototype, !1)), Qi(), (0, NW.e)("renderProbe", (() => {
        sO("console")
      })), UO(), setInterval(KO, OO))
    }

    function AO(WW) {
      var iW, OW;
      lO(), NO = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.backend) && void 0 !== iW ? iW : null;
      const mW = `, renderer param ${null!==(OW=(0,NW.p)("renderer"))&&void 0!==OW?OW:"none"}, faceCull ${"0"===LO.faceCull?"off (whole parts)":"on"}, adrenoProbe ${LO.adrenoProbe||"none"}`;
      fW(`${(0,ei.e)(WW)}${null===WW?"":mW}`)
    }

    function bO() {
      const WW = performance.now(),
        iW = jO(xO, WO, iO).then((iW => sO(`${Math.round((performance.now()-WW)/1e3)} s after playable${iW?"":", no terrain drawn yet"}`)));
      (0, EW.c)(fW, (async () => {
        await iW, await wO
      }))
    }
    async function jO(WW, iW, OW) {
      const EW = (0, mW.b)(OW).then((() => !1));
      return await (0, mW.b)(iW), Promise.race([WW.then((() => !0)), EW])
    }

    function UO() {
      requestAnimationFrame((() => {
        tO++, UO()
      }))
    }

    function kO() {
      var WW, iW, OW;
      if (cO) return;
      (cO = !0, fW(`renderer caps ${null!==(WW=LO.caps)&&void 0!==WW?WW:"(not noted)"}; terrain fetch ${null!==(iW=LO.fetch)&&void 0!==iW?iW:"(not noted)"}`), LO.adrenoProbe) && fW(`adrenoProbe ${LO.adrenoProbe} asked; in force (storage fetch only): ${null!==(OW=LO.probe)&&void 0!==OW?OW:"(not noted)"}`);
      const mW = dW.context;
      if (mW) {
        for (const WW of function(WW) {
            var iW;
            const OW = [],
              mW = WW.getExtension("WEBGL_debug_renderer_info"),
              EW = mW ? WW.getParameter(mW.UNMASKED_VENDOR_WEBGL) : "(masked)",
              NW = mW ? WW.getParameter(mW.UNMASKED_RENDERER_WEBGL) : "(masked)";
            OW.push(`GL ${String(WW.getParameter(WW.VERSION))} | ${String(WW.getParameter(WW.SHADING_LANGUAGE_VERSION))} | ${String(WW.getParameter(WW.VENDOR))} / ${String(WW.getParameter(WW.RENDERER))}`), OW.push(`GL unmasked ${EW} / ${NW}`);
            const PW = [
              ["MAX_TEXTURE_SIZE", WW.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", WW.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", WW.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", WW.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", WW.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", WW.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", WW.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in WW && PW.push(["MAX_UNIFORM_BLOCK_SIZE", WW.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", WW.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", WW.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", WW.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), OW.push(`GL limits ${PW.map((iW=>{let[OW,mW]=iW;return`${OW} ${String(WW.getParameter(mW))}`})).join(", ")}`);
            const LW = (iW, OW) => {
              const mW = WW.getShaderPrecisionFormat(iW, WW.HIGH_FLOAT),
                EW = WW.getShaderPrecisionFormat(iW, WW.HIGH_INT);
              return `${OW} highp float ${mW?`${mW.rangeMin}/${mW.rangeMax}/${mW.precision}`:"?"} int ${EW?`${EW.rangeMin}/${EW.rangeMax}/${EW.precision}`:"?"}`
            };
            OW.push(`GL precision ${LW(WW.VERTEX_SHADER,"VS")}, ${LW(WW.FRAGMENT_SHADER,"FS")}`);
            const cW = WW.getContextAttributes();
            return OW.push(`GL context ${JSON.stringify(cW)} drawingBuffer ${WW.drawingBufferWidth}x${WW.drawingBufferHeight}${"drawingBufferFormat"in WW?` format 0x${Number(WW.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in WW?` ${String(WW.drawingBufferColorSpace)}`:""}`), OW.push(`GL extensions ${(null!==(iW=WW.getSupportedExtensions())&&void 0!==iW?iW:[]).join(" ")}`), OW
          }(mW)) fW(WW);
        ! function() {
          if (!dW.context) return;
          let WW = 0,
            iW = 0;
          for (const [OW, mW] of nW) !mW.gl.isContextLost() && mW.gl.isProgram(OW) && (iW++, Hi(mW.gl, OW, mW), null !== mW.terrain && WW++);
          fW(`programs: ${iW} live of ${nW.length} linked, ${WW} packed terrain; CPU page copies ${Math.round(dW.shadowBytes/1048576)} MiB (${dW.uncopied} over budget)`)
        }()
      }
    }

    function sO(WW) {
      return wO ??= async function(WW) {
        kO(), "webgpu" === NO ? (MO(), "1" === LO.slotCheck && fW("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), LO.slotCheck = "1", await
          function(WW) {
            if (null !== qi) return Promise.resolve();
            const iW = [];
            return qi = iW, new Promise((OW => {
              setTimeout((() => {
                qi = null, fW(`WebGPU draw ranges (${WW}): ${iW.length} terrain draws recorded in a second (first ${wi}; bundles replay without new ones)`);
                for (const WW of iW) fW(WW);
                OW()
              }), 1e3)
            }))
          }(WW), await async function() {
            if (await (0, di.e)(LO, "slotCheck", ["1"], mO, EO), "1" === LO.slotCheck) return void fW(`slot check: no answer in ${mO} ms (only the storage fetch has one; a later answer logs on its own)`);
            MO()
          }()) : await Pi(WW);
        fW(`check (${WW}) done: bloxdDebug.save() downloads it all`)
      }(WW).catch((iW => {
        fW(`check (${WW}) failed: ${String(iW)}`)
      })).finally((() => {
        wO = null
      })), wO
    }

    function MO() {
      void 0 !== LO.slotCheck && "1" !== LO.slotCheck && (fW(LO.slotCheck), delete LO.slotCheck)
    }

    function KO() {
      const WW = WW => tO ? (WW / tO).toFixed(1) : "0",
        iW = function() {
          const WW = Ri;
          return Ri = {
            draws: 0,
            faces: 0
          }, WW
        }(),
        OW = function() {
          const WW = Ui;
          return Ui = {
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
          }, WW
        }(),
        mW = function() {
          const WW = ki;
          return ki = {
            buffer: 0,
            texture: 0
          }, WW
        }();
      MO(), ("webgpu" === NO ? iW.draws : OW.inst.draws + OW.tex.draws) > 0 && ZO();
      const EW = "webgpu" === NO ? [`terrain ${WW(iW.draws)} draws ${WW(iW.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((WW => OW[WW].draws > 0)).map((iW => `${iW} ${WW(OW[iW].draws)} draws ${WW(OW[iW].faces)} faces a frame`));
      fW(`${tO} frames: ${EW.join(", ")||"no draws"}; uploaded ${Math.round(mW.buffer/1024)} KiB to buffers, ${Math.round(mW.texture/1024)} KiB to data textures`), tO = 0
    }
  },
  5431: (WW, iW, OW) => {
    function mW(WW) {
      if (null === WW) return "backend: none picked (no renderer build)";
      const iW = WW.adapter ? `${WW.adapter.vendor}/${WW.adapter.architecture}` : "none";
      return `backend ${WW.backend}: reason ${WW.reason}, source ${WW.source}, adapter ${iW}`
    }
    OW.d(iW, {
      e: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);