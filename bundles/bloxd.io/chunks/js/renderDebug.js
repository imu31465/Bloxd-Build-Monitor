export const id = 57;
export const ids = [57];
export const modules = {
  5547: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR
    });
    var yR = GR(25),
      tR = GR(32),
      uR = GR(1383),
      ZR = GR(3960);
    const qR = 3e4,
      iR = 1e3;

    function fR() {
      return "visible" === document.visibilityState && "inGame" === yR.d.get("gameState") && (0, uR.u)()
    }

    function VR(RR, JR) {
      (0, ZR.p)() || function(RR, JR, GR) {
        let yR = 0;
        const tR = setInterval((() => {
          JR() && (yR += iR, yR >= RR && (clearInterval(tR), GR()))
        }), iR)
      }(qR, fR, (() => {
        JR().then((() => {
          RR(`saved for the player after ${qR/1e3} s of play`), (0, ZR.C)(), tR.n.JK("chat", {
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
  5539: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      installRenderDebug: () => KG,
      renderDebugPlayable: () => rG,
      startRenderDebug: () => wG,
      waitForDraw: () => eG
    });
    var yR = GR(2023),
      tR = GR(5547),
      uR = GR(3960);
    const ZR = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function qR(RR) {
      return 7 & RR
    }

    function iR(RR) {
      return RR >>> 11 & 1
    }

    function fR(RR) {
      return [1 + (RR >>> 18 & 63), 1 + (RR >>> 24 & 63)]
    }

    function VR(RR, JR) {
      const [GR, , yR] = RR, tR = qR(yR), uR = function(RR, JR, GR) {
        return JR + (1 === (22 >>> RR & 1) ? 4 - GR : GR) & 3
      }(tR, iR(yR), JR), ZR = tR >>> 1, [VR, KR] = fR(GR), wR = 1 === uR || 2 === uR ? VR : 0, rR = uR >= 2 ? KR : 0, eR = [63 & GR, GR >>> 6 & 63, GR >>> 12 & 63];
      return eR[2 === ZR ? 0 : 2] += wR, eR[1 === ZR ? 0 : 1] += rR, eR
    }

    function KR(RR) {
      const JR = Math.max(...fR(RR[0]));
      return 1 === JR ? "1" : JR <= 4 ? "2-4" : JR <= 16 ? "5-16" : "17-64"
    }
    const wR = 16;

    function rR(RR) {
      let JR = 2166136261;
      for (let GR = 0; GR < RR.length; GR++) JR = Math.imul(JR ^ RR[GR], 16777619);
      return JR >>> 0
    }

    function eR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const yR = Math.max(0, JR - GR),
        tR = Math.min(RR.length, JR + GR),
        uR = [];
      for (let ZR = yR; ZR < tR; ZR++) {
        const GR = RR[ZR].toString(16).padStart(2, "0");
        uR.push(ZR === JR ? `[${GR}]` : GR)
      }
      return uR.join(" ")
    }
    const aR = {
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
      LR = "_vs2fs_location0";
    const nR = 0,
      UR = 4,
      WR = 6,
      AR = [0, 1, 2, 0, 2, 3],
      CR = 2048,
      XR = 4,
      MR = 256,
      BR = 64,
      lR = 268435456,
      pR = 65536,
      gR = /^#version [^\n]*\/\/ program (\S+)$/m;

    function bR(RR) {
      return null === RR.name ? `#${RR.id}` : `#${RR.id} ${RR.name}`
    }
    const vR = [],
      OR = new WeakMap,
      xR = new WeakMap,
      NR = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let DR = 1;
    const HR = new WeakMap;

    function oR(RR) {
      if (null === RR) return 0;
      let JR = HR.get(RR);
      return void 0 === JR && (JR = DR++, HR.set(RR, JR)), JR
    }
    class cR {
      constructor(RR, JR) {
        this.print = RR, this.now = JR, this.shown = 0, this.Qq = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.tK = [], this.dropped = 0
      }
      line(RR) {
        const JR = this.now();
        if (JR - this.second >= 1e3 && (this.second = JR, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Qq++, void this.store(RR);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${RR} (the last line here: the rest go to bloxdDebug.save())` : RR)
      }
      keep(RR) {
        this.sections++, this.store(RR)
      }
      store(RR) {
        this.tK.push(`${new Date(Date.now()).toISOString()} ${RR}`), this.tK.length > 2e4 && (this.tK.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Qq} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.tK].join("\n")
      }
    }
    let PR = null;

    function IR() {
      if (null === PR) {
        const RR = new cR((RR => {
          (0, uR.k)("render", RR)
        }), (() => performance.now()));
        (0, uR.i)("render", (() => RR.dump())), PR = RR
      }
      return PR
    }

    function mR(RR) {
      IR().line(RR)
    }

    function zR(RR) {
      IR().keep(RR)
    }

    function SR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return RR.length <= JR ? RR : `${RR.slice(0,JR)}... (${RR.length-JR} more characters)`
    }

    function jR(RR, JR, GR, yR, tR, uR) {
      const ZR = NR.pendingCheck;
      if (null === ZR) return;
      const qR = "undefined" !== typeof WebGL2RenderingContext && RR instanceof WebGL2RenderingContext,
        iR = {
          gl: RR,
          program: GR,
          call: yR,
          WL: tR,
          instances: uR,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (ZR.draws.push(iR), qR) try {
        const yR = function(RR) {
          const JR = [],
            GR = new Map,
            yR = Math.min(16, RR.getParameter(aR.MAX_VERTEX_ATTRIBS));
          for (let tR = 0; tR < yR; tR++) {
            if (!RR.getVertexAttrib(tR, aR.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const yR = RR.getVertexAttrib(tR, aR.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              uR = RR.getVertexAttribOffset(tR, aR.VERTEX_ATTRIB_ARRAY_POINTER),
              ZR = RR.getVertexAttrib(tR, aR.VERTEX_ATTRIB_ARRAY_STRIDE),
              qR = RR.getVertexAttrib(tR, aR.VERTEX_ATTRIB_ARRAY_SIZE),
              iR = RR.getVertexAttrib(tR, aR.VERTEX_ATTRIB_ARRAY_TYPE),
              fR = "VERTEX_ATTRIB_ARRAY_INTEGER" in RR && RR.getVertexAttrib(tR, aR.VERTEX_ATTRIB_ARRAY_INTEGER),
              VR = "VERTEX_ATTRIB_ARRAY_DIVISOR" in RR ? RR.getVertexAttrib(tR, aR.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            GR.set(tR, {
              buffer: yR,
              offset: uR,
              stride: ZR
            }), JR.push(`@${tR} buf#${oR(yR)} +${uR} stride ${ZR} ${qR}x0x${iR.toString(16)}${fR?" int":""} div ${VR}`)
          }
          return {
            lines: JR,
            byLocation: GR
          }
        }(RR);
        if (iR.attributes = yR.lines, "inst" === GR.terrain) {
          const {
            group: tR,
            chunk: qR
          } = function(RR, JR, GR) {
            const yR = JR.get(WR),
              tR = RR.getVertexAttrib(WR, aR.CURRENT_VERTEX_ATTRIB),
              uR = yR ? `+${yR.offset}` : tR ? Array.from(tR).slice(0, 3).join(",") : "?";
            let ZR = GR.groups.get(uR);
            return void 0 === ZR && (ZR = GR.groups.size, GR.groups.set(uR, ZR)), {
              group: ZR,
              chunk: uR
            }
          }(RR, yR.byLocation, ZR);
          iR.group = tR, iR.chunk = qR;
          for (const RR of [nR, UR]) {
            var fR;
            const JR = null === (fR = yR.byLocation.get(RR)) || void 0 === fR ? void 0 : fR.buffer;
            JR && iR.pages.push({
              kind: "buf",
              buffer: JR
            })
          }! function(RR, JR, GR, yR, tR, uR, ZR) {
            const qR = yR.get(nR),
              iR = ZR.parts.get(uR);
            if (void 0 === iR && ZR.parts.size >= XR) return;
            const fR = Math.min(tR, BR, MR - (null !== iR && void 0 !== iR ? iR : 0));
            if (null === qR || void 0 === qR || !qR.buffer || fR <= 0) return;
            const VR = dR(RR, JR, GR);
            if (!VR) return;
            const KR = qR.stride || 12,
              wR = FR(RR, qR.buffer, qR.offset, (fR - 1) * KR + 12),
              rR = new DataView(wR.buffer),
              eR = function(RR, JR) {
                const GR = function(RR) {
                    const JR = hR.get(RR);
                    if (void 0 !== JR && (null === JR || RR.isProgram(JR))) return JR;
                    NR.inProbe = !0;
                    let GR = null;
                    try {
                      GR = ER(RR, TR, sR, "fed", "the record feed")
                    } finally {
                      NR.inProbe = !1
                    }
                    return hR.set(RR, GR), GR
                  }(RR),
                  yR = GR ? QR(RR, GR, JR, (() => {
                    RR.drawArraysInstanced(aR.POINTS, 0, 1, JR)
                  }), "decode probe input (the record feed)") : null;
                return yR ? new Uint32Array(yR.buffer) : null
              }(RR, fR);
            eR || ZR.fed.failed++;
            const LR = QR(RR, VR, 4 * fR, (() => {
              RR.drawArraysInstanced(aR.POINTS, 0, 4, fR)
            }));
            if (!LR) return;
            ZR.parts.set(uR, (null !== iR && void 0 !== iR ? iR : 0) + fR);
            for (let aR = 0; aR < fR; aR++) {
              const RR = aR * KR,
                JR = [rR.getUint32(RR, !0), rR.getUint32(RR + 4, !0), rR.getUint32(RR + 8, !0)],
                GR = eR ? [eR[3 * aR], eR[3 * aR + 1], eR[3 * aR + 2]] : JR;
              eR && (ZR.fed.records++, GR.some(((RR, GR) => RR !== JR[GR])) && (ZR.fed.differing++, ZR.fed.first.length < 8 && ZR.fed.first.push(`part ${uR} instance ${aR}: fed ${GR.map(tJ).join(" ")} buffer ${JR.map(tJ).join(" ")}`)));
              for (let yR = 0; yR < 4; yR++) {
                const RR = 3 * (4 * aR + yR);
                ZR.vertices.push({
                  record: GR,
                  slot: yR,
                  group: uR,
                  gpu: [LR[RR], LR[RR + 1], LR[RR + 2]]
                })
              }
            }
          }(RR, JR, GR, yR.byLocation, uR, tR, ZR)
        } else {
          const yR = RJ(RR, JR, 16),
            uR = RJ(RR, JR, 8);
          for (const RR of [yR, uR]) RR && iR.pages.push({
            kind: "tex",
            texture: RR
          });
          yR && function(RR, JR, GR, yR, tR, uR) {
            if (uR.parts.size >= XR) return;
            const ZR = dR(RR, JR, GR);
            if (!ZR) return;
            let qR = 6 * MR;
            const iR = [];
            for (const [rR, eR] of tR) {
              const RR = Math.min(eR, qR, Math.max(6, 6 * Math.floor(MR / tR.length)));
              RR > 0 && (iR.push([rR, RR]), qR -= RR)
            }
            const fR = iR.reduce(((RR, JR) => {
                let [, GR] = JR;
                return RR + GR
              }), 0),
              VR = QR(RR, ZR, fR, (() => {
                for (const [JR, GR] of iR) RR.drawArrays(aR.POINTS, JR, GR)
              }));
            if (!VR) return;
            let KR = 0;
            for (const [rR, eR] of iR) {
              const JR = Math.floor(rR / 6),
                GR = Math.floor((rR + eR - 1) / 6) - JR + 1,
                tR = JJ(RR, yR, CR, JR, GR);
              for (let RR = rR; RR < rR + eR; RR++, KR++) {
                var wR;
                const GR = 4 * (Math.floor(RR / 6) - JR),
                  yR = [tR[GR], tR[GR + 1], tR[GR + 2]];
                uR.parts.set(tR[GR + 3], (null !== (wR = uR.parts.get(tR[GR + 3])) && void 0 !== wR ? wR : 0) + (RR % 6 === 0 ? 1 : 0)), uR.vertices.push({
                  record: yR,
                  slot: AR[RR % 6],
                  group: tR[GR + 3],
                  gpu: [VR[3 * KR], VR[3 * KR + 1], VR[3 * KR + 2]]
                })
              }
            }
          }(RR, JR, GR, yR, tR, ZR)
        }
      } catch (VR) {
        mR(`decode probe failed on program ${bR(GR)}: ${String(VR)}`)
      }
    }

    function dR(RR, JR, GR) {
      if (void 0 !== GR.probe) return GR.probe && YR(RR, JR, GR.probe), GR.probe;
      GR.probe = null, NR.inProbe = !0;
      try {
        GR.probe = function(RR, JR) {
          return ER(RR, (GR = JR.vertex, GR.replace(`\nvec3 ${LR} = vec3(0);\n`, `\nout vec3 ${LR};\n`)), JR.fragment, LR, `program ${bR(JR)}'s twin`);
          var GR
        }(RR, GR)
      } finally {
        NR.inProbe = !1
      }
      return GR.probe && YR(RR, JR, GR.probe), GR.probe
    }

    function ER(RR, JR, GR, yR, tR) {
      const uR = [RR.createShader(aR.VERTEX_SHADER), RR.createShader(aR.FRAGMENT_SHADER)],
        ZR = RR.createProgram();
      if (!ZR || !uR[0] || !uR[1]) return null;
      RR.shaderSource(uR[0], JR), RR.shaderSource(uR[1], GR);
      for (const iR of uR) RR.compileShader(iR), RR.attachShader(ZR, iR);
      RR.transformFeedbackVaryings(ZR, [yR], aR.INTERLEAVED_ATTRIBS), RR.linkProgram(ZR);
      for (const iR of uR) RR.deleteShader(iR);
      var qR;
      return RR.getProgramParameter(ZR, aR.LINK_STATUS) ? ZR : (mR(`decode probe: ${tR} failed to link: ${SR(null!==(qR=RR.getProgramInfoLog(ZR))&&void 0!==qR?qR:"",300)}`), RR.deleteProgram(ZR), null)
    }

    function YR(RR, JR, GR) {
      const yR = RR.getProgramParameter(JR, aR.ACTIVE_UNIFORM_BLOCKS);
      for (let qR = 0; qR < yR; qR++) {
        const yR = RR.getActiveUniformBlockName(JR, qR),
          tR = null === yR ? aR.INVALID_INDEX : RR.getUniformBlockIndex(GR, yR);
        tR !== aR.INVALID_INDEX && RR.uniformBlockBinding(GR, tR, RR.getActiveUniformBlockParameter(JR, qR, aR.UNIFORM_BLOCK_BINDING))
      }
      const tR = RR.getParameter(aR.CURRENT_PROGRAM);
      RR.useProgram(GR);
      const uR = RR.getProgramParameter(JR, aR.ACTIVE_UNIFORMS),
        ZR = RR.getActiveUniforms(JR, [...Array(uR).keys()], aR.UNIFORM_BLOCK_INDEX);
      for (let qR = 0; qR < uR; qR++) {
        const yR = RR.getActiveUniform(JR, qR);
        if (!yR || -1 !== ZR[qR]) continue;
        const tR = yR.name.replace(/\[0\]$/, "");
        for (let uR = 0; uR < yR.size; uR++) {
          const ZR = yR.size > 1 ? `${tR}[${uR}]` : yR.name,
            qR = RR.getUniformLocation(JR, ZR),
            iR = RR.getUniformLocation(GR, ZR);
          qR && iR && kR(RR, iR, yR.type, RR.getUniform(JR, qR))
        }
      }
      RR.useProgram(tR)
    }

    function kR(RR, JR, GR, yR) {
      const tR = ArrayBuffer.isView(yR) ? Array.from(yR) : [Number(yR)];
      switch (GR) {
        case aR.FLOAT:
          return void RR.uniform1f(JR, tR[0]);
        case aR.FLOAT_VEC2:
          return void RR.uniform2fv(JR, tR);
        case aR.FLOAT_VEC3:
          return void RR.uniform3fv(JR, tR);
        case aR.FLOAT_VEC4:
          return void RR.uniform4fv(JR, tR);
        case aR.FLOAT_MAT3:
          return void RR.uniformMatrix3fv(JR, !1, tR);
        case aR.FLOAT_MAT4:
          return void RR.uniformMatrix4fv(JR, !1, tR);
        case aR.UNSIGNED_INT:
          return void RR.uniform1ui(JR, tR[0]);
        case aR.UNSIGNED_INT_VEC2:
          return void RR.uniform2uiv(JR, tR);
        case aR.UNSIGNED_INT_VEC3:
          return void RR.uniform3uiv(JR, tR);
        case aR.UNSIGNED_INT_VEC4:
          return void RR.uniform4uiv(JR, tR);
        case aR.INT_VEC2:
          return void RR.uniform2iv(JR, tR);
        case aR.INT_VEC3:
          return void RR.uniform3iv(JR, tR);
        case aR.INT_VEC4:
          return void RR.uniform4iv(JR, tR);
        default:
          RR.uniform1i(JR, tR[0])
      }
    }

    function QR(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const uR = RR.getParameter(aR.CURRENT_PROGRAM),
        ZR = RR.getParameter(aR.TRANSFORM_FEEDBACK_BINDING),
        qR = RR.getParameter(aR.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        iR = RR.getParameter(aR.COPY_READ_BUFFER_BINDING),
        fR = RR.isEnabled(aR.RASTERIZER_DISCARD),
        VR = RR.createTransformFeedback(),
        KR = RR.createBuffer();
      NR.inProbe = !0;
      try {
        const uR = RR.getError();
        uR !== aR.NO_ERROR && mR(`GL error 0x${uR.toString(16)} pending before the decode probe (the renderer's)`), RR.useProgram(JR), RR.bindTransformFeedback(aR.TRANSFORM_FEEDBACK, VR), RR.bindBuffer(aR.TRANSFORM_FEEDBACK_BUFFER, KR), RR.bufferData(aR.TRANSFORM_FEEDBACK_BUFFER, 12 * GR, aR.STREAM_READ), RR.bindBufferBase(aR.TRANSFORM_FEEDBACK_BUFFER, 0, KR), RR.enable(aR.RASTERIZER_DISCARD), RR.beginTransformFeedback(aR.POINTS), yR(), RR.endTransformFeedback(), RR.bindBufferBase(aR.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const ZR = RR.getError();
        if (ZR !== aR.NO_ERROR) return mR(`${tR}: GL error 0x${ZR.toString(16)} on the feedback draw`), null;
        const qR = new Float32Array(3 * GR);
        return RR.bindBuffer(aR.COPY_READ_BUFFER, KR), RR.getBufferSubData(aR.COPY_READ_BUFFER, 0, qR), qR
      } finally {
        fR || RR.disable(aR.RASTERIZER_DISCARD), RR.bindTransformFeedback(aR.TRANSFORM_FEEDBACK, ZR), RR.bindBuffer(aR.TRANSFORM_FEEDBACK_BUFFER, qR), RR.bindBuffer(aR.COPY_READ_BUFFER, iR), RR.deleteTransformFeedback(VR), RR.deleteBuffer(KR), RR.useProgram(uR), NR.inProbe = !1
      }
    }

    function FR(RR, JR, GR, yR) {
      const tR = RR.getParameter(aR.COPY_READ_BUFFER_BINDING),
        uR = new Uint8Array(yR);
      return RR.bindBuffer(aR.COPY_READ_BUFFER, JR), RR.getBufferSubData(aR.COPY_READ_BUFFER, GR, uR), RR.bindBuffer(aR.COPY_READ_BUFFER, tR), uR
    }
    const TR = `#version 300 es\nlayout(location = ${nR}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      sR = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      hR = new WeakMap;

    function RJ(RR, JR, GR) {
      const yR = RR.getProgramParameter(JR, aR.ACTIVE_UNIFORMS),
        tR = RR.getParameter(aR.ACTIVE_TEXTURE);
      try {
        for (let tR = 0; tR < yR; tR++) {
          const yR = RR.getActiveUniform(JR, tR);
          if ((null === yR || void 0 === yR ? void 0 : yR.type) !== aR.UNSIGNED_INT_SAMPLER_2D) continue;
          const uR = RR.getUniformLocation(JR, yR.name),
            ZR = uR ? RR.getUniform(JR, uR) : -1;
          if (ZR < 0) continue;
          RR.activeTexture(aR.TEXTURE0 + ZR);
          const qR = RR.getParameter(aR.TEXTURE_BINDING_2D);
          if (qR && xR.get(qR) === GR) return qR
        }
        return null
      } finally {
        RR.activeTexture(tR)
      }
    }

    function JJ(RR, JR, GR, yR, tR) {
      const uR = new Uint32Array(4 * tR),
        ZR = RR.getParameter(aR.READ_FRAMEBUFFER_BINDING),
        qR = RR.createFramebuffer();
      RR.bindFramebuffer(aR.READ_FRAMEBUFFER, qR), RR.framebufferTexture2D(aR.READ_FRAMEBUFFER, aR.COLOR_ATTACHMENT0, aR.TEXTURE_2D, JR, 0);
      try {
        let JR = 0;
        for (; JR < tR;) {
          const ZR = yR + JR,
            qR = ZR % GR,
            iR = Math.min(tR - JR, GR - qR);
          RR.readPixels(qR, Math.floor(ZR / GR), iR, 1, aR.RGBA_INTEGER, aR.UNSIGNED_INT, uR.subarray(4 * JR, 4 * (JR + iR))), JR += iR
        }
      } finally {
        RR.bindFramebuffer(aR.READ_FRAMEBUFFER, ZR), RR.deleteFramebuffer(qR)
      }
      return uR
    }

    function GJ(RR, JR, GR) {
      let yR = 0,
        tR = 0;
      for (let iR = 0; iR < JR.bytes.length; iR += pR) {
        yR++;
        const RR = Math.min(iR + pR, JR.bytes.length);
        rR(JR.bytes.subarray(iR, RR)) !== rR(GR.subarray(iR, RR)) && tR++
      }
      const uR = `${RR} ${JR.bytes.length} B cpu ${rR(JR.bytes).toString(16)} gpu ${rR(GR).toString(16)}, ${tR}/${yR} blocks differ${JR.missed?`, ${JR.missed} GPU-side writes uncopied`:""}`;
      if (0 === tR) return uR;
      const {
        count: ZR,
        offsets: qR
      } = function(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const yR = Math.min(RR.length, JR.length);
        let tR = Math.abs(RR.length - JR.length);
        const uR = [];
        for (let ZR = 0; ZR < yR; ZR++) RR[ZR] !== JR[ZR] && (tR++, uR.length < GR && uR.push(ZR));
        return {
          count: tR,
          offsets: uR
        }
      }(JR.bytes, GR);
      return zR([`${uR}: ${ZR} bytes differ`, ...qR.map((RR => `  +${RR}: cpu ${eR(JR.bytes,RR)} | gpu ${eR(GR,RR)}`))].join("\n")), `${uR}: ${ZR} bytes differ, first at ${qR.join(", ")} (context in the saved file)`
    }

    function yJ(RR) {
      if (0 === RR.vertices.length) return void mR(`decode probe (${RR.reason}): no terrain draw probed (${RR.draws.length} seen)`);
      const JR = function(RR) {
          const JR = new Map;
          for (const yR of RR) {
            const RR = JR.get(yR.group);
            RR ? RR.push(yR) : JR.set(yR.group, [yR])
          }
          const GR = {
            vertices: RR.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [yR, tR] of JR) {
            const RR = new Map,
              JR = tR.map((JR => {
                const GR = VR(JR.record, JR.slot),
                  yR = [JR.gpu[0] - GR[0], JR.gpu[1] - GR[1], JR.gpu[2] - GR[2]],
                  tR = yR.map((RR => Math.round(64 * RR))).join(","),
                  uR = RR.get(tR);
                return uR ? uR.count++ : RR.set(tR, {
                  count: 1,
                  offset: yR
                }), GR
              }));
            let uR = [0, 0, 0],
              ZR = 0;
            for (const GR of RR.values()) GR.count > ZR && (ZR = GR.count, uR = GR.offset);
            GR.translations.set(yR, uR), tR.forEach(((RR, yR) => {
              var tR;
              const ZR = [JR[yR][0] + uR[0], JR[yR][1] + uR[1], JR[yR][2] + uR[2]];
              if (ZR.every(((JR, GR) => {
                  return yR = RR.gpu[GR], tR = JR, Math.abs(yR - tR) <= Math.max(.001, 1e-6 * Math.abs(tR));
                  var yR, tR
                }))) return;
              GR.mismatches++, GR.byDirection[qR(RR.record[2])]++, GR.byDiagonal[iR(RR.record[2])]++;
              const fR = KR(RR.record);
              GR.byBand[fR] = (null !== (tR = GR.byBand[fR]) && void 0 !== tR ? tR : 0) + 1, GR.first.length < wR && GR.first.push({
                ...RR,
                expected: ZR
              })
            }))
          }
          return GR
        }(RR.vertices),
        GR = JR.byDirection.map(((RR, JR) => RR ? `${ZR[JR]} ${RR}` : "")).filter(Boolean).join(" "),
        yR = Object.entries(JR.byBand).map((RR => {
          let [JR, GR] = RR;
          return `${JR}: ${GR}`
        })).join(" ");
      if (mR(`decode probe (${RR.reason}): ${JR.mismatches}/${JR.vertices} vertices differ from the CPU decode over ${RR.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (JR.mismatches ? ` by direction [${GR}] diagonal [0: ${JR.byDiagonal[0]} 1: ${JR.byDiagonal[1]}] extent [${yR}]` : "")), RR.fed.records > 0 || RR.fed.failed > 0) {
        mR(`decode probe input: ${RR.fed.differing}/${RR.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (RR.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (RR.fed.failed ? `; the feed failed on ${RR.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const JR of RR.fed.first) mR(`  ${JR}`)
      }
      for (const tR of JR.first) {
        const [RR, JR, GR] = tR.record;
        mR(`  mismatch part ${tR.group} r0 ${RR.toString(16)} r1 ${JR.toString(16)} r2 ${GR.toString(16)} slot ${tR.slot} (${ZR[qR(GR)]}): expected ${tR.expected.map(uJ).join(",")} gpu ${tR.gpu.map(uJ).join(",")}`)
      }
      zR(`decode probe translations: ${[...JR.translations].map((RR=>{let[JR,GR]=RR;return`${JR}: ${GR.map(uJ).join(",")}`})).join("; ")}`)
    }

    function tJ(RR) {
      return RR.toString(16)
    }

    function uJ(RR) {
      return Number.isInteger(RR) ? String(RR) : RR.toFixed(3)
    }

    function ZJ(RR) {
      return null !== NR.pendingCheck ? Promise.resolve() : new Promise((JR => {
        let GR = !1;
        const yR = {
          reason: RR,
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
        NR.pendingCheck = yR;
        const tR = () => {
            NR.pendingCheck = null;
            try {
              ! function(RR) {
                mR(`draw ranges (${RR.reason}): ${RR.terrainDraws} terrain draws in the frame, the first ${RR.draws.length} here`);
                for (const JR of RR.draws) {
                  const RR = JR.WL.slice(0, 8).map((RR => {
                      let [JR, GR] = RR;
                      return `${JR}+${GR}`
                    })).join(" "),
                    GR = JR.WL.length > 8 ? ` (+${JR.WL.length-8} ranges)` : "";
                  mR(`  ${bR(JR.program)} ${JR.program.terrain} ${JR.call} ${RR}${GR} x${JR.instances}${JR.group>=0?` part ${JR.group} chunk ${JR.chunk}`:""} | ${JR.attributes.join(" | ")}`)
                }
              }(yR), yJ(yR);
              yR.draws.some((RR => "undefined" !== typeof WebGL2RenderingContext && RR.gl instanceof WebGL2RenderingContext)) || 0 === yR.draws.length ? function(RR) {
                const JR = [],
                  GR = new Map;
                for (const yR of RR)
                  if ("undefined" !== typeof WebGL2RenderingContext && yR.gl instanceof WebGL2RenderingContext)
                    for (const RR of yR.pages) GR.set("buf" === RR.kind ? RR.buffer : RR.texture, {
                      page: RR,
                      gl: yR.gl
                    });
                for (const [yR, {
                    page: tR,
                    gl: uR
                  }] of GR) {
                  const RR = OR.get(yR);
                  if (!RR) {
                    JR.push(`${tR.kind}#${oR(yR)}: no CPU copy (${NR.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === tR.kind) {
                    JR.push(GJ(`buf#${RR.id}`, RR, FR(uR, tR.buffer, 0, RR.bytes.length)));
                    continue
                  }
                  const GR = JJ(uR, tR.texture, RR.width, 0, RR.width * RR.height),
                    ZR = 16 === RR.texelBytes ? new Uint8Array(GR.buffer) : new Uint8Array(new Uint16Array(GR).buffer);
                  JR.push(GJ(`tex#${RR.id} (${16===RR.texelBytes?"records":"light"})`, RR, ZR))
                }
                for (const yR of JR) mR(`page readback ${yR}`)
              }(yR.draws) : mR("page readback: none on WebGL1 (no buffer readback)")
            } catch (RR) {
              mR(`check failed: ${String(RR)}`)
            }
            JR()
          },
          uR = () => {
            if (yR.draws.length > 0 && !GR) return GR = !0, void setTimeout(tR, 0);
            GR || requestAnimationFrame(uR)
          };
        requestAnimationFrame(uR), setTimeout((() => {
          GR || (GR = !0, tR())
        }), 5e3)
      }))
    }
    var qJ = GR(5554);
    const iJ = 20,
      fJ = 24,
      VJ = Reflect.apply;

    function KJ(RR, JR, GR) {
      if (!RR) return;
      const yR = RR[JR];
      if ("function" === typeof yR) {
        const tR = GR(yR);
        RR[JR] = tR, (0, qJ.D)(tR, yR)
      }
    }
    let wJ = !1;
    const rJ = new WeakMap,
      eJ = new WeakMap,
      aJ = new WeakMap,
      LJ = {
        gl: 0,
        lost: 0
      };
    let nJ = {
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
      UJ = {
        buffer: 0,
        texture: 0
      },
      WJ = 0;

    function AJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (RR instanceof ArrayBuffer) return new Uint8Array(RR, JR, GR || void 0);
      if (!ArrayBuffer.isView(RR)) return null;
      const yR = "BYTES_PER_ELEMENT" in RR ? RR.BYTES_PER_ELEMENT : 1,
        tR = RR.byteOffset + JR * yR,
        uR = GR ? GR * yR : RR.byteLength - JR * yR;
      return new Uint8Array(RR.buffer, tR, Math.max(0, uR))
    }

    function CJ(RR, JR) {
      const GR = function(RR) {
        switch (RR) {
          case aR.ARRAY_BUFFER:
            return aR.ARRAY_BUFFER_BINDING;
          case aR.ELEMENT_ARRAY_BUFFER:
            return aR.ELEMENT_ARRAY_BUFFER_BINDING;
          case aR.COPY_READ_BUFFER:
            return aR.COPY_READ_BUFFER_BINDING;
          case aR.COPY_WRITE_BUFFER:
            return aR.COPY_WRITE_BUFFER_BINDING;
          case aR.UNIFORM_BUFFER:
            return aR.UNIFORM_BUFFER_BINDING;
          case aR.PIXEL_UNPACK_BUFFER:
            return aR.PIXEL_UNPACK_BUFFER_BINDING;
          case aR.TRANSFORM_FEEDBACK_BUFFER:
            return aR.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(JR);
      return GR ? RR.getParameter(GR) : null
    }

    function XJ(RR) {
      const JR = OR.get(RR);
      JR && (NR.shadowBytes -= JR.bytes.length, OR.delete(RR))
    }

    function MJ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      XJ(RR), NR.shadowBytes + JR > lR ? NR.uncopied++ : (NR.shadowBytes += JR, OR.set(RR, {
        id: oR(RR),
        bytes: new Uint8Array(JR),
        width: GR,
        height: yR,
        texelBytes: tR,
        missed: 0
      }))
    }

    function BJ(RR, JR) {
      for (const GR of ["deleteBuffer", "deleteTexture"]) KJ(RR, GR, (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        return GR[0] && XJ(GR[0]), VJ(RR, this, GR)
      }));
      KJ(RR, "shaderSource", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        return GR[0] && "string" === typeof GR[1] && rJ.set(GR[0], GR[1]), VJ(RR, this, GR)
      })), KJ(RR, "attachShader", (RR => function() {
        for (var JR, GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
        const uR = yR[0],
          ZR = null !== (JR = eJ.get(uR)) && void 0 !== JR ? JR : [];
        return ZR.push(yR[1]), eJ.set(uR, ZR), VJ(RR, this, yR)
      })), KJ(RR, "linkProgram", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        const tR = VJ(RR, this, GR);
        return NR.inProbe || function(RR, JR) {
          var GR, yR, tR;
          "undefined" !== typeof HTMLCanvasElement && RR.canvas instanceof HTMLCanvasElement && function(RR) {
            if (OJ.has(RR)) return;
            OJ.add(RR);
            for (const JR of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) RR.addEventListener(JR, (RR => {
              LJ.lost < iJ && (LJ.lost++, mR(`${JR}${"statusMessage"in RR?`: ${String(RR.statusMessage)}`:""}`))
            }))
          }(RR.canvas);
          NR.context ??= RR;
          const uR = null !== (GR = eJ.get(JR)) && void 0 !== GR ? GR : [];
          let ZR = "",
            qR = "";
          for (const VR of uR) {
            var iR;
            const RR = null !== (iR = rJ.get(VR)) && void 0 !== iR ? iR : "";
            /\bgl_Position\b/.test(RR) ? ZR = RR : qR = RR
          }
          const fR = {
            id: oR(JR),
            name: null !== (yR = null === (tR = gR.exec(ZR)) || void 0 === tR ? void 0 : tR[1]) && void 0 !== yR ? yR : null,
            gl: RR,
            vertex: ZR,
            fragment: qR,
            terrain: pJ(ZR),
            checked: !1,
            firstDraw: !1
          };
          if (aJ.set(JR, fR), vR.push([JR, fR]), null !== fR.terrain) {
            const JR = uR.map((JR => {
              var GR;
              return null !== (GR = RR.getShaderInfoLog(JR)) && void 0 !== GR ? GR : ""
            })).filter((RR => "" !== RR.trim()));
            JR.length > 0 && zR(`program ${bR(fR)} (${fR.terrain}) shader logs:\n${SR(JR.join("\n"))}`)
          }
        }(this, GR[0]), tR
      })), KJ(RR, "bufferData", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        const tR = VJ(RR, this, GR);
        if (!NR.inProbe) {
          const RR = CJ(this, GR[0]);
          if (RR) {
            var uR, ZR, qR;
            const JR = "number" === typeof GR[1] ? null : AJ(GR[1], null !== (uR = GR[3]) && void 0 !== uR ? uR : 0, null !== (ZR = GR[4]) && void 0 !== ZR ? ZR : 0);
            var iR;
            if (MJ(RR, "number" === typeof GR[1] ? GR[1] : null !== (qR = null === JR || void 0 === JR ? void 0 : JR.length) && void 0 !== qR ? qR : 0), JR) null === (iR = OR.get(RR)) || void 0 === iR || iR.bytes.set(JR)
          }
        }
        return tR
      })), KJ(RR, "bufferSubData", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        const tR = VJ(RR, this, GR);
        if (!NR.inProbe) {
          var uR, ZR;
          const RR = CJ(this, GR[0]),
            JR = RR ? OR.get(RR) : void 0,
            yR = AJ(GR[2], null !== (uR = GR[3]) && void 0 !== uR ? uR : 0, null !== (ZR = GR[4]) && void 0 !== ZR ? ZR : 0);
          if (JR && yR) {
            const RR = GR[1];
            JR.bytes.set(yR.subarray(0, Math.max(0, JR.bytes.length - RR)), RR), lJ("buffer", JR, RR, yR.length)
          }
        }
        return tR
      })), JR && (KJ(RR, "copyBufferSubData", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        const tR = VJ(RR, this, GR);
        if (!NR.inProbe) {
          const [RR, JR, yR, tR, uR] = GR, ZR = CJ(this, RR), qR = CJ(this, JR), iR = ZR ? OR.get(ZR) : void 0, fR = qR ? OR.get(qR) : void 0;
          fR && (iR ? fR.bytes.set(iR.bytes.slice(yR, yR + uR), tR) : fR.missed++)
        }
        return tR
      })), KJ(RR, "texStorage2D", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        const tR = VJ(RR, this, GR),
          [, , uR, ZR, qR] = GR;
        if (!NR.inProbe && (uR === aR.RGBA32UI || uR === aR.RGBA16UI)) {
          const RR = this.getParameter(aR.TEXTURE_BINDING_2D),
            JR = uR === aR.RGBA32UI ? 16 : 8;
          RR && (xR.set(RR, JR), MJ(RR, ZR * qR * JR, ZR, qR, JR))
        }
        return tR
      })), KJ(RR, "texSubImage2D", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        const tR = VJ(RR, this, GR);
        return !NR.inProbe && GR.length >= 9 && GR[0] === aR.TEXTURE_2D && 0 === GR[1] && function(RR, JR) {
          var GR;
          const yR = RR.getParameter(aR.TEXTURE_BINDING_2D),
            tR = yR ? OR.get(yR) : void 0;
          if (!tR) return;
          const [, , uR, ZR, qR, iR] = JR;
          let fR = AJ(JR[8], null !== (GR = JR[9]) && void 0 !== GR ? GR : 0);
          if (null === fR && "number" === typeof JR[8]) {
            const GR = CJ(RR, aR.PIXEL_UNPACK_BUFFER),
              yR = GR ? OR.get(GR) : void 0;
            fR = yR ? yR.bytes.subarray(JR[8]) : null
          }
          if (null === fR) return void tR.missed++;
          const VR = RR.getParameter(aR.UNPACK_ROW_LENGTH) || qR,
            KR = RR.getParameter(aR.UNPACK_SKIP_ROWS),
            wR = RR.getParameter(aR.UNPACK_SKIP_PIXELS),
            rR = tR.texelBytes;
          for (let eR = 0; eR < iR; eR++) {
            const RR = ((KR + eR) * VR + wR) * rR,
              JR = ((ZR + eR) * tR.width + uR) * rR;
            tR.bytes.set(fR.subarray(RR, RR + qR * rR), JR)
          }
          lJ("texture", tR, (ZR * tR.width + uR) * rR, qR * iR * rR)
        }(this, GR), tR
      })), KJ(RR, "copyTexSubImage2D", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        const tR = GR[0] === aR.TEXTURE_2D ? this.getParameter(aR.TEXTURE_BINDING_2D) : null,
          uR = tR ? OR.get(tR) : void 0;
        return uR && uR.missed++, VJ(RR, this, GR)
      })));
      for (const GR of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) KJ(RR, GR, (RR => function() {
        for (var JR = arguments.length, yR = new Array(JR), tR = 0; tR < JR; tR++) yR[tR] = arguments[tR];
        const uR = VJ(RR, this, yR);
        return NR.inProbe || bJ(this, GR, yR), uR
      }));
      KJ(RR, "getExtension", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        const tR = VJ(RR, this, GR);
        return tR && "object" === typeof tR && function(RR, JR, GR) {
          const yR = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(JR in yR) || GR.bloxdRenderDebug) return;
          GR.bloxdRenderDebug = !0;
          for (const tR of yR[JR]) {
            const JR = GR[tR];
            "function" === typeof JR && (GR[tR] = function() {
              for (var yR = arguments.length, uR = new Array(yR), ZR = 0; ZR < yR; ZR++) uR[ZR] = arguments[ZR];
              const qR = VJ(JR, GR, uR);
              return NR.inProbe || bJ(RR, tR, uR), qR
            })
          }
        }(this, GR[0], tR), tR
      }))
    }

    function lJ(RR, JR, GR, yR) {
      UJ[RR] += yR, WJ < 32 && JR.bytes.length >= 1 << 20 && (WJ++, zR(`upload ${RR} #${JR.id} +${GR} ${yR} B`))
    }

    function pJ(RR) {
      if (!RR.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(RR) || /in uvec3 _p2vs_location0\b/.test(RR) ? "inst" : "tex"
    }

    function gJ(RR, JR, GR) {
      var yR;
      if (GR.checked) return;
      GR.checked = !0;
      const tR = RR.getProgramParameter(JR, aR.LINK_STATUS),
        uR = (null !== (yR = RR.getProgramInfoLog(JR)) && void 0 !== yR ? yR : "").trim();
      var ZR;
      null === GR.terrain && tR || (mR(`program ${bR(GR)} ${null!==(ZR=GR.terrain)&&void 0!==ZR?ZR:"other"} link ${tR?"ok":"FAILED"}${uR?`: ${SR(uR,300)}`:""}`), uR && zR(`program ${bR(GR)} link log:\n${SR(uR)}`))
    }

    function bJ(RR, JR, GR) {
      var yR;
      const tR = RR.getParameter(aR.CURRENT_PROGRAM),
        uR = tR ? aJ.get(tR) : void 0;
      if (!tR || !uR) return;
      const ZR = null !== (yR = uR.terrain) && void 0 !== yR ? yR : "other",
        {
          WL: qR,
          instances: iR
        } = function(RR, JR) {
          switch (RR) {
            case "drawArrays":
              return {
                WL: [
                  [JR[1], JR[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                WL: [
                  [JR[1], JR[2]]
                ], instances: JR[3]
              };
            case "drawElements":
              return {
                WL: [
                  [0, JR[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                WL: [
                  [0, JR[1]]
                ], instances: JR[4]
              };
            case "multiDrawArraysWEBGL": {
              const RR = JR[1],
                GR = JR[3],
                yR = JR[2],
                tR = JR[4],
                uR = [];
              for (let ZR = 0; ZR < JR[5]; ZR++) uR.push([RR[yR + ZR], GR[tR + ZR]]);
              return {
                WL: uR,
                instances: 1
              }
            }
            default:
              return {
                WL: [], instances: 0
              }
          }
        }(JR, GR),
        fR = "inst" === uR.terrain ? iR : qR.reduce(((RR, JR) => {
          let [, GR] = JR;
          return RR + GR
        }), 0) / 6;
      if (nJ[ZR].draws++, nJ[ZR].faces += fR, null === uR.terrain) return;
      if (NR.context = RR, !uR.firstDraw) {
        uR.firstDraw = !0, gJ(RR, tR, uR), vJ || (vJ = !0, mR(function(RR) {
          var JR;
          const GR = RR.getParameter(aR.DEPTH_FUNC),
            yR = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let tR = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in RR && RR.getParameter(aR.DRAW_FRAMEBUFFER_BINDING)) {
            const JR = RR;
            tR = JR.getFramebufferAttachmentParameter(aR.DRAW_FRAMEBUFFER, aR.DEPTH_ATTACHMENT, aR.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(JR.getFramebufferAttachmentParameter(aR.DRAW_FRAMEBUFFER,aR.DEPTH_ATTACHMENT,aR.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(JR.getFramebufferAttachmentParameter(aR.DRAW_FRAMEBUFFER,aR.DEPTH_ATTACHMENT,aR.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const uR = RR.getParameter(aR.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(JR=yR[GR])&&void 0!==JR?JR:`0x${GR.toString(16)}`} clear ${uR}${516===GR||518===GR?" (reverse-Z)":""}, samples ${String(RR.getParameter(aR.SAMPLES))}, ${tR}`
        }(RR)));
        const GR = RR.getError();
        GR !== aR.NO_ERROR && LJ.gl < iJ && (LJ.gl++, mR(`GL error 0x${GR.toString(16)} after program ${bR(uR)}'s first terrain draw (${JR})`))
      }
      const VR = NR.pendingCheck;
      null !== VR && (VR.terrainDraws++, VR.draws.length < fJ && jR(RR, tR, uR, JR, qR, iR))
    }
    let vJ = !1;
    const OJ = new WeakSet;
    var xJ = GR(5316),
      NJ = GR(5563);
    const DJ = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let HJ = !1;
    const oJ = new WeakSet,
      cJ = new WeakMap,
      PJ = new WeakMap,
      IJ = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let mJ = 0,
      zJ = !1,
      SJ = null,
      jJ = {
        draws: 0,
        faces: 0
      };

    function dJ(RR) {
      const JR = globalThis[RR];
      return null === JR || void 0 === JR ? void 0 : JR.prototype
    }

    function EJ(RR) {
      return RR && "function" === typeof RR[Symbol.iterator] ? [...RR].sort().join(" ") : ""
    }

    function YJ(RR, JR) {
      const GR = null !== RR && void 0 !== RR ? RR : {},
        yR = null !== JR && void 0 !== JR ? JR : Object.keys(Object.getPrototypeOf(GR)).concat(Object.keys(GR));
      return [...new Set(yR)].filter((RR => "number" === typeof GR[RR])).map((RR => `${RR} ${String(GR[RR])}`)).join(", ")
    }

    function kJ(RR, JR) {
      var GR;
      const yR = null !== (GR = JR.vertex) && void 0 !== GR ? GR : {};
      if (yR.module && oJ.has(yR.module)) {
        var tR;
        const GR = String(null !== (tR = yR.entryPoint) && void 0 !== tR ? tR : "");
        if (GR.startsWith("vs_packed") && cJ.set(RR, GR), !zJ) {
          var uR, ZR, qR, iR, fR;
          zJ = !0;
          const RR = null !== (uR = JR.depthStencil) && void 0 !== uR ? uR : {},
            yR = null !== (ZR = JR.multisample) && void 0 !== ZR ? ZR : {},
            tR = String(null !== (qR = RR.depthCompare) && void 0 !== qR ? qR : "");
          mR(`WebGPU terrain pipeline ${GR}: depth ${String(null!==(iR=RR.format)&&void 0!==iR?iR:"none")} ${tR}${tR.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(fR=yR.count)&&void 0!==fR?fR:1)}`)
        }
      }
    }

    function QJ(RR) {
      KJ(RR, "setPipeline", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        return PJ.set(this, GR[0]), VJ(RR, this, GR)
      }));
      for (const JR of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) KJ(RR, JR, (RR => function() {
        const GR = PJ.get(this),
          yR = GR ? cJ.get(GR) : void 0;
        for (var tR = arguments.length, uR = new Array(tR), ZR = 0; ZR < tR; ZR++) uR[ZR] = arguments[ZR];
        return void 0 !== yR && FJ(JR, yR, uR), VJ(RR, this, uR)
      }))
    }

    function FJ(RR, JR, GR) {
      var yR;
      (jJ.draws++, "draw" === RR || "drawIndexed" === RR) && (jJ.faces += GR[0] * (null !== (yR = GR[1]) && void 0 !== yR ? yR : 1) / 6);
      if (null !== SJ && SJ.length < fJ) {
        const yR = ("draw" === RR ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === RR ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((JR, yR) => {
          const tR = RR.endsWith("Indirect") ? GR[1] : GR[yR];
          return `${JR} ${String(null!==tR&&void 0!==tR?tR:"instances"===JR?1:0)}`
        }));
        SJ.push(`  ${JR} ${RR} ${yR.join(" ")}`)
      }
    }

    function TJ() {
      if (HJ || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      HJ = !0, KJ(dJ("GPU"), "requestAdapter", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        return VJ(RR, this, GR).then((RR => {
          var JR;
          RR ? function(RR) {
            var JR;
            const GR = null !== (JR = RR.info) && void 0 !== JR ? JR : {};
            mR(`WebGPU adapter ${["vendor","architecture","device","description"].map((RR=>{var JR;return`${RR} "${String(null!==(JR=GR[RR])&&void 0!==JR?JR:"")}"`})).join(" ")}${RR.isFallbackAdapter?" (fallback)":""}`), mR(`WebGPU adapter features ${EJ(RR.features)}`), mR(`WebGPU adapter limits ${YJ(RR.limits,DJ)}`), zR(`WebGPU adapter all limits ${YJ(RR.limits,null)}`)
          }(RR) : mR(`WebGPU requestAdapter(${JSON.stringify(null!==(JR=GR[0])&&void 0!==JR?JR:{})}) gave none`);
          return RR
        }))
      })), KJ(dJ("GPUAdapter"), "requestDevice", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        return VJ(RR, this, GR).then((RR => (function(RR) {
          mR(`WebGPU device features ${EJ(RR.features)}`), mR(`WebGPU device limits ${YJ(RR.limits,DJ)}`), RR.addEventListener("uncapturederror", (RR => {
            if (IJ.uncaptured < iJ) {
              var JR, GR, yR;
              IJ.uncaptured++;
              const tR = RR.error;
              mR(`WebGPU uncaptured ${null!==(JR=null===tR||void 0===tR||null===(GR=tR.constructor)||void 0===GR?void 0:GR.name)&&void 0!==JR?JR:"error"}: ${SR(String(null!==(yR=null===tR||void 0===tR?void 0:tR.message)&&void 0!==yR?yR:""),600)}`)
            }
          }));
          const JR = RR.lost;
          null === JR || void 0 === JR || JR.then((RR => {
            var JR;
            mR(`WebGPU device lost (${String(RR.reason)}): ${SR(String(null!==(JR=RR.message)&&void 0!==JR?JR:""),600)}`)
          }))
        }(RR), RR)), (RR => {
          throw mR(`WebGPU requestDevice failed: ${String(RR)}`), RR
        }))
      }));
      const RR = dJ("GPUDevice");
      KJ(RR, "createShaderModule", (RR => function() {
        for (var JR, GR, yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
        const ZR = VJ(RR, this, tR);
        return function(RR, JR) {
          const GR = JR.includes("decodeQuad");
          GR && oJ.add(RR);
          const yR = RR.getCompilationInfo;
          null === yR || void 0 === yR || yR.call(RR).then((RR => {
            if (0 === RR.messages.length && !GR) return;
            const JR = {};
            for (const GR of RR.messages) {
              var yR;
              JR[String(GR.type)] = (null !== (yR = JR[String(GR.type)]) && void 0 !== yR ? yR : 0) + 1
            }
            const tR = RR.messages.map((RR => `${String(RR.type)} ${String(RR.lineNum)}:${String(RR.linePos)} ${String(RR.message)}`)).join("\n");
            IJ.compile < iJ && (IJ.compile++, mR(`WebGPU ${GR?"terrain ":""}shader module compiled: ${JSON.stringify(JR)}${tR?` first: ${SR(tR.split("\n")[0],300)}`:""}`)), tR && zR(`WebGPU shader module messages:\n${SR(tR)}`)
          }))
        }(ZR, String(null !== (JR = (null !== (GR = tR[0]) && void 0 !== GR ? GR : {}).code) && void 0 !== JR ? JR : "")), ZR
      })), KJ(RR, "createRenderPipeline", (RR => function() {
        for (var JR, GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
        const uR = VJ(RR, this, yR);
        return kJ(uR, null !== (JR = yR[0]) && void 0 !== JR ? JR : {}), uR
      })), KJ(RR, "createRenderPipelineAsync", (RR => function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        return VJ(RR, this, GR).then((RR => {
          var JR;
          return kJ(RR, null !== (JR = GR[0]) && void 0 !== JR ? JR : {}), RR
        }), (RR => {
          var JR;
          throw function(RR, JR) {
            var GR, yR, tR;
            if (IJ.rejected >= iJ) return;
            IJ.rejected++;
            const {
              reason: uR,
              message: ZR
            } = null !== JR && void 0 !== JR ? JR : {}, qR = String(null !== (GR = (null !== (yR = RR.vertex) && void 0 !== yR ? yR : {}).entryPoint) && void 0 !== GR ? GR : "");
            mR(`WebGPU pipeline "${String(null!==(tR=RR.label)&&void 0!==tR?tR:"")}" ${qR} rejected (${String(null!==uR&&void 0!==uR?uR:"no reason")}): ${SR(String(null!==ZR&&void 0!==ZR?ZR:JR),600)}`)
          }(null !== (JR = GR[0]) && void 0 !== JR ? JR : {}, RR), RR
        }))
      })), KJ(dJ("GPUCanvasContext"), "configure", (RR => function() {
        for (var JR, GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
        const uR = null !== (JR = yR[0]) && void 0 !== JR ? JR : {};
        var ZR, qR;
        mJ++ < 3 && mR(`WebGPU canvas ${String(uR.format)} ${String(null!==(ZR=uR.colorSpace)&&void 0!==ZR?ZR:"srgb")} alpha ${String(null!==(qR=uR.alphaMode)&&void 0!==qR?qR:"opaque")}`);
        return VJ(RR, this, yR)
      })), QJ(dJ("GPURenderPassEncoder")), QJ(dJ("GPURenderBundleEncoder"))
    }
    const sJ = 1e4,
      hJ = 6e4,
      RG = 5e3,
      JG = 3e3,
      GG = 100;
    let yG = null,
      tG = !1,
      uG = {
        ...xJ.b
      },
      ZG = !1,
      qG = null,
      iG = 0,
      fG = () => {};
    const VG = new Promise((RR => {
      fG = RR
    }));

    function KG() {
      var RR;
      tG || (tG = !0, uG = Object.assign(window.bloxdRenderDebug ??= {
        ...xJ.b
      }, {
        faceCull: "0" === (0, uR.l)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (RR = (0, uR.l)("adrenoProbe")) && void 0 !== RR ? RR : ""
      }), mR("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), wJ || "undefined" === typeof window || (wJ = !0, "undefined" !== typeof WebGL2RenderingContext && BJ(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && BJ(WebGLRenderingContext.prototype, !1)), TJ(), (0, uR.b)("renderProbe", (() => {
        nG("console")
      })), aG(), setInterval(WG, RG))
    }

    function wG(RR) {
      var JR, GR;
      KG(), yG = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.backend) && void 0 !== JR ? JR : null;
      const yR = `, renderer param ${null!==(GR=(0,uR.l)("renderer"))&&void 0!==GR?GR:"none"}, faceCull ${"0"===uG.faceCull?"off (whole parts)":"on"}, adrenoProbe ${uG.adrenoProbe||"none"}`;
      mR(`${(0,NJ.b)(RR)}${null===RR?"":yR}`)
    }

    function rG() {
      const RR = performance.now(),
        JR = eG(VG, sJ, hJ).then((JR => nG(`${Math.round((performance.now()-RR)/1e3)} s after playable${JR?"":", no terrain drawn yet"}`)));
      (0, tR.b)(mR, (async () => {
        await JR, await qG
      }))
    }
    async function eG(RR, JR, GR) {
      const tR = (0, yR.b)(GR).then((() => !1));
      return await (0, yR.b)(JR), Promise.race([RR.then((() => !0)), tR])
    }

    function aG() {
      requestAnimationFrame((() => {
        iG++, aG()
      }))
    }

    function LG() {
      var RR, JR, GR;
      if (ZG) return;
      (ZG = !0, mR(`renderer caps ${null!==(RR=uG.caps)&&void 0!==RR?RR:"(not noted)"}; terrain fetch ${null!==(JR=uG.fetch)&&void 0!==JR?JR:"(not noted)"}`), uG.adrenoProbe) && mR(`adrenoProbe ${uG.adrenoProbe} asked; in force (storage fetch only): ${null!==(GR=uG.probe)&&void 0!==GR?GR:"(not noted)"}`);
      const yR = NR.context;
      if (yR) {
        for (const RR of function(RR) {
            var JR;
            const GR = [],
              yR = RR.getExtension("WEBGL_debug_renderer_info"),
              tR = yR ? RR.getParameter(yR.UNMASKED_VENDOR_WEBGL) : "(masked)",
              uR = yR ? RR.getParameter(yR.UNMASKED_RENDERER_WEBGL) : "(masked)";
            GR.push(`GL ${String(RR.getParameter(RR.VERSION))} | ${String(RR.getParameter(RR.SHADING_LANGUAGE_VERSION))} | ${String(RR.getParameter(RR.VENDOR))} / ${String(RR.getParameter(RR.RENDERER))}`), GR.push(`GL unmasked ${tR} / ${uR}`);
            const ZR = [
              ["MAX_TEXTURE_SIZE", RR.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", RR.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", RR.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", RR.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", RR.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", RR.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", RR.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in RR && ZR.push(["MAX_UNIFORM_BLOCK_SIZE", RR.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", RR.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", RR.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", RR.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), GR.push(`GL limits ${ZR.map((JR=>{let[GR,yR]=JR;return`${GR} ${String(RR.getParameter(yR))}`})).join(", ")}`);
            const qR = (JR, GR) => {
              const yR = RR.getShaderPrecisionFormat(JR, RR.HIGH_FLOAT),
                tR = RR.getShaderPrecisionFormat(JR, RR.HIGH_INT);
              return `${GR} highp float ${yR?`${yR.rangeMin}/${yR.rangeMax}/${yR.precision}`:"?"} int ${tR?`${tR.rangeMin}/${tR.rangeMax}/${tR.precision}`:"?"}`
            };
            GR.push(`GL precision ${qR(RR.VERTEX_SHADER,"VS")}, ${qR(RR.FRAGMENT_SHADER,"FS")}`);
            const iR = RR.getContextAttributes();
            return GR.push(`GL context ${JSON.stringify(iR)} drawingBuffer ${RR.drawingBufferWidth}x${RR.drawingBufferHeight}${"drawingBufferFormat"in RR?` format 0x${Number(RR.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in RR?` ${String(RR.drawingBufferColorSpace)}`:""}`), GR.push(`GL extensions ${(null!==(JR=RR.getSupportedExtensions())&&void 0!==JR?JR:[]).join(" ")}`), GR
          }(yR)) mR(RR);
        ! function() {
          if (!NR.context) return;
          let RR = 0,
            JR = 0;
          for (const [GR, yR] of vR) !yR.gl.isContextLost() && yR.gl.isProgram(GR) && (JR++, gJ(yR.gl, GR, yR), null !== yR.terrain && RR++);
          mR(`programs: ${JR} live of ${vR.length} linked, ${RR} packed terrain; CPU page copies ${Math.round(NR.shadowBytes/1048576)} MiB (${NR.uncopied} over budget)`)
        }()
      }
    }

    function nG(RR) {
      return qG ??= async function(RR) {
        LG(), "webgpu" === yG ? (UG(), "1" === uG.slotCheck && mR("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), uG.slotCheck = "1", await
          function(RR) {
            if (null !== SJ) return Promise.resolve();
            const JR = [];
            return SJ = JR, new Promise((GR => {
              setTimeout((() => {
                SJ = null, mR(`WebGPU draw ranges (${RR}): ${JR.length} terrain draws recorded in a second (first ${fJ}; bundles replay without new ones)`);
                for (const RR of JR) mR(RR);
                GR()
              }), 1e3)
            }))
          }(RR), await async function() {
            if (await (0, xJ.e)(uG, "slotCheck", ["1"], JG, GG), "1" === uG.slotCheck) return void mR(`slot check: no answer in ${JG} ms (only the storage fetch has one; a later answer logs on its own)`);
            UG()
          }()) : await ZJ(RR);
        mR(`check (${RR}) done: bloxdDebug.save() downloads it all`)
      }(RR).catch((JR => {
        mR(`check (${RR}) failed: ${String(JR)}`)
      })).finally((() => {
        qG = null
      })), qG
    }

    function UG() {
      void 0 !== uG.slotCheck && "1" !== uG.slotCheck && (mR(uG.slotCheck), delete uG.slotCheck)
    }

    function WG() {
      const RR = RR => iG ? (RR / iG).toFixed(1) : "0",
        JR = function() {
          const RR = jJ;
          return jJ = {
            draws: 0,
            faces: 0
          }, RR
        }(),
        GR = function() {
          const RR = nJ;
          return nJ = {
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
          }, RR
        }(),
        yR = function() {
          const RR = UJ;
          return UJ = {
            buffer: 0,
            texture: 0
          }, RR
        }();
      UG(), ("webgpu" === yG ? JR.draws : GR.inst.draws + GR.tex.draws) > 0 && fG();
      const tR = "webgpu" === yG ? [`terrain ${RR(JR.draws)} draws ${RR(JR.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((RR => GR[RR].draws > 0)).map((JR => `${JR} ${RR(GR[JR].draws)} draws ${RR(GR[JR].faces)} faces a frame`));
      mR(`${iG} frames: ${tR.join(", ")||"no draws"}; uploaded ${Math.round(yR.buffer/1024)} KiB to buffers, ${Math.round(yR.texture/1024)} KiB to data textures`), iG = 0
    }
  },
  5563: (RR, JR, GR) => {
    function yR(RR) {
      if (null === RR) return "backend: none picked (no renderer build)";
      const JR = RR.adapter ? `${RR.adapter.vendor}/${RR.adapter.architecture}` : "none";
      return `backend ${RR.backend}: reason ${RR.reason}, source ${RR.source}, adapter ${JR}`
    }
    GR.d(JR, {
      b: () => yR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);