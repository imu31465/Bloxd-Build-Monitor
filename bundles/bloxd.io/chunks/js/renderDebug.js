export const id = 49;
export const ids = [49];
export const modules = {
  4778: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => jT
    });
    var WT = mT(25),
      zT = mT(31),
      MT = mT(1388),
      gT = mT(2929);
    const nT = 3e4,
      HT = 1e3;

    function kT() {
      return "visible" === document.visibilityState && "inGame" === WT.b.get("gameState") && (0, MT.u)()
    }

    function jT(TT, UT) {
      (0, gT.v)() || function(TT, UT, mT) {
        let WT = 0;
        const zT = setInterval((() => {
          UT() && (WT += HT, WT >= TT && (clearInterval(zT), mT()))
        }), HT)
      }(nT, kT, (() => {
        UT().then((() => {
          TT(`saved for the player after ${nT/1e3} s of play`), (0, gT.M)(), zT.j.EZ("chat", {
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
  4771: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      installRenderDebug: () => lm,
      renderDebugPlayable: () => pm,
      startRenderDebug: () => Lm,
      waitForDraw: () => Bm
    });
    var WT = mT(1944),
      zT = mT(4778),
      MT = mT(2929);
    const gT = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function nT(TT) {
      return 7 & TT
    }

    function HT(TT) {
      return TT >>> 11 & 1
    }

    function kT(TT) {
      return [1 + (TT >>> 18 & 63), 1 + (TT >>> 24 & 63)]
    }

    function jT(TT, UT) {
      const [mT, , WT] = TT, zT = nT(WT), MT = function(TT, UT, mT) {
        return UT + (1 === (22 >>> TT & 1) ? 4 - mT : mT) & 3
      }(zT, HT(WT), UT), gT = zT >>> 1, [jT, lT] = kT(mT), LT = 1 === MT || 2 === MT ? jT : 0, pT = MT >= 2 ? lT : 0, BT = [63 & mT, mT >>> 6 & 63, mT >>> 12 & 63];
      return BT[2 === gT ? 0 : 2] += LT, BT[1 === gT ? 0 : 1] += pT, BT
    }

    function lT(TT) {
      const UT = Math.max(...kT(TT[0]));
      return 1 === UT ? "1" : UT <= 4 ? "2-4" : UT <= 16 ? "5-16" : "17-64"
    }
    const LT = 16;

    function pT(TT) {
      let UT = 2166136261;
      for (let mT = 0; mT < TT.length; mT++) UT = Math.imul(UT ^ TT[mT], 16777619);
      return UT >>> 0
    }

    function BT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const WT = Math.max(0, UT - mT),
        zT = Math.min(TT.length, UT + mT),
        MT = [];
      for (let gT = WT; gT < zT; gT++) {
        const mT = TT[gT].toString(16).padStart(2, "0");
        MT.push(gT === UT ? `[${mT}]` : mT)
      }
      return MT.join(" ")
    }
    const ZT = {
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
      cT = "_vs2fs_location0";
    const vT = 0,
      fT = 4,
      qT = 6,
      iT = [0, 1, 2, 0, 2, 3],
      bT = 2048,
      OT = 4,
      eT = 256,
      YT = 64,
      JT = 268435456,
      xT = 65536,
      dT = /^#version [^\n]*\/\/ program (\S+)$/m;

    function wT(TT) {
      return null === TT.name ? `#${TT.id}` : `#${TT.id} ${TT.name}`
    }
    const tT = [],
      aT = new WeakMap,
      yT = new WeakMap,
      XT = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let IT = 1;
    const QT = new WeakMap;

    function sT(TT) {
      if (null === TT) return 0;
      let UT = QT.get(TT);
      return void 0 === UT && (UT = IT++, QT.set(TT, UT)), UT
    }
    class FT {
      constructor(TT, UT) {
        this.print = TT, this.now = UT, this.shown = 0, this.fn = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.Jp = [], this.dropped = 0
      }
      line(TT) {
        const UT = this.now();
        if (UT - this.second >= 1e3 && (this.second = UT, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.fn++, void this.store(TT);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${TT} (the last line here: the rest go to bloxdDebug.save())` : TT)
      }
      keep(TT) {
        this.sections++, this.store(TT)
      }
      store(TT) {
        this.Jp.push(`${new Date(Date.now()).toISOString()} ${TT}`), this.Jp.length > 2e4 && (this.Jp.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.fn} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.Jp].join("\n")
      }
    }
    let PT = null;

    function VT() {
      if (null === PT) {
        const TT = new FT((TT => {
          (0, MT.m)("render", TT)
        }), (() => performance.now()));
        (0, MT.j)("render", (() => TT.dump())), PT = TT
      }
      return PT
    }

    function uT(TT) {
      VT().line(TT)
    }

    function CT(TT) {
      VT().keep(TT)
    }

    function rT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return TT.length <= UT ? TT : `${TT.slice(0,UT)}... (${TT.length-UT} more characters)`
    }

    function KT(TT, UT, mT, WT, zT, MT) {
      const gT = XT.pendingCheck;
      if (null === gT) return;
      const nT = "undefined" !== typeof WebGL2RenderingContext && TT instanceof WebGL2RenderingContext,
        HT = {
          gl: TT,
          program: mT,
          call: WT,
          hZ: zT,
          instances: MT,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (gT.draws.push(HT), nT) try {
        const WT = function(TT) {
          const UT = [],
            mT = new Map,
            WT = Math.min(16, TT.getParameter(ZT.MAX_VERTEX_ATTRIBS));
          for (let zT = 0; zT < WT; zT++) {
            if (!TT.getVertexAttrib(zT, ZT.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const WT = TT.getVertexAttrib(zT, ZT.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              MT = TT.getVertexAttribOffset(zT, ZT.VERTEX_ATTRIB_ARRAY_POINTER),
              gT = TT.getVertexAttrib(zT, ZT.VERTEX_ATTRIB_ARRAY_STRIDE),
              nT = TT.getVertexAttrib(zT, ZT.VERTEX_ATTRIB_ARRAY_SIZE),
              HT = TT.getVertexAttrib(zT, ZT.VERTEX_ATTRIB_ARRAY_TYPE),
              kT = "VERTEX_ATTRIB_ARRAY_INTEGER" in TT && TT.getVertexAttrib(zT, ZT.VERTEX_ATTRIB_ARRAY_INTEGER),
              jT = "VERTEX_ATTRIB_ARRAY_DIVISOR" in TT ? TT.getVertexAttrib(zT, ZT.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            mT.set(zT, {
              buffer: WT,
              offset: MT,
              stride: gT
            }), UT.push(`@${zT} buf#${sT(WT)} +${MT} stride ${gT} ${nT}x0x${HT.toString(16)}${kT?" int":""} div ${jT}`)
          }
          return {
            lines: UT,
            byLocation: mT
          }
        }(TT);
        if (HT.attributes = WT.lines, "inst" === mT.terrain) {
          const {
            group: zT,
            chunk: nT
          } = function(TT, UT, mT) {
            const WT = UT.get(qT),
              zT = TT.getVertexAttrib(qT, ZT.CURRENT_VERTEX_ATTRIB),
              MT = WT ? `+${WT.offset}` : zT ? Array.from(zT).slice(0, 3).join(",") : "?";
            let gT = mT.groups.get(MT);
            return void 0 === gT && (gT = mT.groups.size, mT.groups.set(MT, gT)), {
              group: gT,
              chunk: MT
            }
          }(TT, WT.byLocation, gT);
          HT.group = zT, HT.chunk = nT;
          for (const TT of [vT, fT]) {
            var kT;
            const UT = null === (kT = WT.byLocation.get(TT)) || void 0 === kT ? void 0 : kT.buffer;
            UT && HT.pages.push({
              kind: "buf",
              buffer: UT
            })
          }! function(TT, UT, mT, WT, zT, MT, gT) {
            const nT = WT.get(vT),
              HT = gT.parts.get(MT);
            if (void 0 === HT && gT.parts.size >= OT) return;
            const kT = Math.min(zT, YT, eT - (null !== HT && void 0 !== HT ? HT : 0));
            if (null === nT || void 0 === nT || !nT.buffer || kT <= 0) return;
            const jT = ST(TT, UT, mT);
            if (!jT) return;
            const lT = nT.stride || 12,
              LT = DT(TT, nT.buffer, nT.offset, (kT - 1) * lT + 12),
              pT = new DataView(LT.buffer),
              BT = function(TT, UT) {
                const mT = function(TT) {
                    const UT = RT.get(TT);
                    if (void 0 !== UT && (null === UT || TT.isProgram(UT))) return UT;
                    XT.inProbe = !0;
                    let mT = null;
                    try {
                      mT = GT(TT, oT, AT, "fed", "the record feed")
                    } finally {
                      XT.inProbe = !1
                    }
                    return RT.set(TT, mT), mT
                  }(TT),
                  WT = mT ? hT(TT, mT, UT, (() => {
                    TT.drawArraysInstanced(ZT.POINTS, 0, 1, UT)
                  }), "decode probe input (the record feed)") : null;
                return WT ? new Uint32Array(WT.buffer) : null
              }(TT, kT);
            BT || gT.fed.failed++;
            const cT = hT(TT, jT, 4 * kT, (() => {
              TT.drawArraysInstanced(ZT.POINTS, 0, 4, kT)
            }));
            if (!cT) return;
            gT.parts.set(MT, (null !== HT && void 0 !== HT ? HT : 0) + kT);
            for (let ZT = 0; ZT < kT; ZT++) {
              const TT = ZT * lT,
                UT = [pT.getUint32(TT, !0), pT.getUint32(TT + 4, !0), pT.getUint32(TT + 8, !0)],
                mT = BT ? [BT[3 * ZT], BT[3 * ZT + 1], BT[3 * ZT + 2]] : UT;
              BT && (gT.fed.records++, mT.some(((TT, mT) => TT !== UT[mT])) && (gT.fed.differing++, gT.fed.first.length < 8 && gT.fed.first.push(`part ${MT} instance ${ZT}: fed ${mT.map(zU).join(" ")} buffer ${UT.map(zU).join(" ")}`)));
              for (let WT = 0; WT < 4; WT++) {
                const TT = 3 * (4 * ZT + WT);
                gT.vertices.push({
                  record: mT,
                  slot: WT,
                  group: MT,
                  gpu: [cT[TT], cT[TT + 1], cT[TT + 2]]
                })
              }
            }
          }(TT, UT, mT, WT.byLocation, MT, zT, gT)
        } else {
          const WT = TU(TT, UT, 16),
            MT = TU(TT, UT, 8);
          for (const TT of [WT, MT]) TT && HT.pages.push({
            kind: "tex",
            texture: TT
          });
          WT && function(TT, UT, mT, WT, zT, MT) {
            if (MT.parts.size >= OT) return;
            const gT = ST(TT, UT, mT);
            if (!gT) return;
            let nT = 6 * eT;
            const HT = [];
            for (const [pT, BT] of zT) {
              const TT = Math.min(BT, nT, Math.max(6, 6 * Math.floor(eT / zT.length)));
              TT > 0 && (HT.push([pT, TT]), nT -= TT)
            }
            const kT = HT.reduce(((TT, UT) => {
                let [, mT] = UT;
                return TT + mT
              }), 0),
              jT = hT(TT, gT, kT, (() => {
                for (const [UT, mT] of HT) TT.drawArrays(ZT.POINTS, UT, mT)
              }));
            if (!jT) return;
            let lT = 0;
            for (const [pT, BT] of HT) {
              const UT = Math.floor(pT / 6),
                mT = Math.floor((pT + BT - 1) / 6) - UT + 1,
                zT = UU(TT, WT, bT, UT, mT);
              for (let TT = pT; TT < pT + BT; TT++, lT++) {
                var LT;
                const mT = 4 * (Math.floor(TT / 6) - UT),
                  WT = [zT[mT], zT[mT + 1], zT[mT + 2]];
                MT.parts.set(zT[mT + 3], (null !== (LT = MT.parts.get(zT[mT + 3])) && void 0 !== LT ? LT : 0) + (TT % 6 === 0 ? 1 : 0)), MT.vertices.push({
                  record: WT,
                  slot: iT[TT % 6],
                  group: zT[mT + 3],
                  gpu: [jT[3 * lT], jT[3 * lT + 1], jT[3 * lT + 2]]
                })
              }
            }
          }(TT, UT, mT, WT, zT, gT)
        }
      } catch (jT) {
        uT(`decode probe failed on program ${wT(mT)}: ${String(jT)}`)
      }
    }

    function ST(TT, UT, mT) {
      if (void 0 !== mT.probe) return mT.probe && NT(TT, UT, mT.probe), mT.probe;
      mT.probe = null, XT.inProbe = !0;
      try {
        mT.probe = function(TT, UT) {
          return GT(TT, (mT = UT.vertex, mT.replace(`\nvec3 ${cT} = vec3(0);\n`, `\nout vec3 ${cT};\n`)), UT.fragment, cT, `program ${wT(UT)}'s twin`);
          var mT
        }(TT, mT)
      } finally {
        XT.inProbe = !1
      }
      return mT.probe && NT(TT, UT, mT.probe), mT.probe
    }

    function GT(TT, UT, mT, WT, zT) {
      const MT = [TT.createShader(ZT.VERTEX_SHADER), TT.createShader(ZT.FRAGMENT_SHADER)],
        gT = TT.createProgram();
      if (!gT || !MT[0] || !MT[1]) return null;
      TT.shaderSource(MT[0], UT), TT.shaderSource(MT[1], mT);
      for (const HT of MT) TT.compileShader(HT), TT.attachShader(gT, HT);
      TT.transformFeedbackVaryings(gT, [WT], ZT.INTERLEAVED_ATTRIBS), TT.linkProgram(gT);
      for (const HT of MT) TT.deleteShader(HT);
      var nT;
      return TT.getProgramParameter(gT, ZT.LINK_STATUS) ? gT : (uT(`decode probe: ${zT} failed to link: ${rT(null!==(nT=TT.getProgramInfoLog(gT))&&void 0!==nT?nT:"",300)}`), TT.deleteProgram(gT), null)
    }

    function NT(TT, UT, mT) {
      const WT = TT.getProgramParameter(UT, ZT.ACTIVE_UNIFORM_BLOCKS);
      for (let nT = 0; nT < WT; nT++) {
        const WT = TT.getActiveUniformBlockName(UT, nT),
          zT = null === WT ? ZT.INVALID_INDEX : TT.getUniformBlockIndex(mT, WT);
        zT !== ZT.INVALID_INDEX && TT.uniformBlockBinding(mT, zT, TT.getActiveUniformBlockParameter(UT, nT, ZT.UNIFORM_BLOCK_BINDING))
      }
      const zT = TT.getParameter(ZT.CURRENT_PROGRAM);
      TT.useProgram(mT);
      const MT = TT.getProgramParameter(UT, ZT.ACTIVE_UNIFORMS),
        gT = TT.getActiveUniforms(UT, [...Array(MT).keys()], ZT.UNIFORM_BLOCK_INDEX);
      for (let nT = 0; nT < MT; nT++) {
        const WT = TT.getActiveUniform(UT, nT);
        if (!WT || -1 !== gT[nT]) continue;
        const zT = WT.name.replace(/\[0\]$/, "");
        for (let MT = 0; MT < WT.size; MT++) {
          const gT = WT.size > 1 ? `${zT}[${MT}]` : WT.name,
            nT = TT.getUniformLocation(UT, gT),
            HT = TT.getUniformLocation(mT, gT);
          nT && HT && ET(TT, HT, WT.type, TT.getUniform(UT, nT))
        }
      }
      TT.useProgram(zT)
    }

    function ET(TT, UT, mT, WT) {
      const zT = ArrayBuffer.isView(WT) ? Array.from(WT) : [Number(WT)];
      switch (mT) {
        case ZT.FLOAT:
          return void TT.uniform1f(UT, zT[0]);
        case ZT.FLOAT_VEC2:
          return void TT.uniform2fv(UT, zT);
        case ZT.FLOAT_VEC3:
          return void TT.uniform3fv(UT, zT);
        case ZT.FLOAT_VEC4:
          return void TT.uniform4fv(UT, zT);
        case ZT.FLOAT_MAT3:
          return void TT.uniformMatrix3fv(UT, !1, zT);
        case ZT.FLOAT_MAT4:
          return void TT.uniformMatrix4fv(UT, !1, zT);
        case ZT.UNSIGNED_INT:
          return void TT.uniform1ui(UT, zT[0]);
        case ZT.UNSIGNED_INT_VEC2:
          return void TT.uniform2uiv(UT, zT);
        case ZT.UNSIGNED_INT_VEC3:
          return void TT.uniform3uiv(UT, zT);
        case ZT.UNSIGNED_INT_VEC4:
          return void TT.uniform4uiv(UT, zT);
        case ZT.INT_VEC2:
          return void TT.uniform2iv(UT, zT);
        case ZT.INT_VEC3:
          return void TT.uniform3iv(UT, zT);
        case ZT.INT_VEC4:
          return void TT.uniform4iv(UT, zT);
        default:
          TT.uniform1i(UT, zT[0])
      }
    }

    function hT(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const MT = TT.getParameter(ZT.CURRENT_PROGRAM),
        gT = TT.getParameter(ZT.TRANSFORM_FEEDBACK_BINDING),
        nT = TT.getParameter(ZT.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        HT = TT.getParameter(ZT.COPY_READ_BUFFER_BINDING),
        kT = TT.isEnabled(ZT.RASTERIZER_DISCARD),
        jT = TT.createTransformFeedback(),
        lT = TT.createBuffer();
      XT.inProbe = !0;
      try {
        const MT = TT.getError();
        MT !== ZT.NO_ERROR && uT(`GL error 0x${MT.toString(16)} pending before the decode probe (the renderer's)`), TT.useProgram(UT), TT.bindTransformFeedback(ZT.TRANSFORM_FEEDBACK, jT), TT.bindBuffer(ZT.TRANSFORM_FEEDBACK_BUFFER, lT), TT.bufferData(ZT.TRANSFORM_FEEDBACK_BUFFER, 12 * mT, ZT.STREAM_READ), TT.bindBufferBase(ZT.TRANSFORM_FEEDBACK_BUFFER, 0, lT), TT.enable(ZT.RASTERIZER_DISCARD), TT.beginTransformFeedback(ZT.POINTS), WT(), TT.endTransformFeedback(), TT.bindBufferBase(ZT.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const gT = TT.getError();
        if (gT !== ZT.NO_ERROR) return uT(`${zT}: GL error 0x${gT.toString(16)} on the feedback draw`), null;
        const nT = new Float32Array(3 * mT);
        return TT.bindBuffer(ZT.COPY_READ_BUFFER, lT), TT.getBufferSubData(ZT.COPY_READ_BUFFER, 0, nT), nT
      } finally {
        kT || TT.disable(ZT.RASTERIZER_DISCARD), TT.bindTransformFeedback(ZT.TRANSFORM_FEEDBACK, gT), TT.bindBuffer(ZT.TRANSFORM_FEEDBACK_BUFFER, nT), TT.bindBuffer(ZT.COPY_READ_BUFFER, HT), TT.deleteTransformFeedback(jT), TT.deleteBuffer(lT), TT.useProgram(MT), XT.inProbe = !1
      }
    }

    function DT(TT, UT, mT, WT) {
      const zT = TT.getParameter(ZT.COPY_READ_BUFFER_BINDING),
        MT = new Uint8Array(WT);
      return TT.bindBuffer(ZT.COPY_READ_BUFFER, UT), TT.getBufferSubData(ZT.COPY_READ_BUFFER, mT, MT), TT.bindBuffer(ZT.COPY_READ_BUFFER, zT), MT
    }
    const oT = `#version 300 es\nlayout(location = ${vT}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      AT = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      RT = new WeakMap;

    function TU(TT, UT, mT) {
      const WT = TT.getProgramParameter(UT, ZT.ACTIVE_UNIFORMS),
        zT = TT.getParameter(ZT.ACTIVE_TEXTURE);
      try {
        for (let zT = 0; zT < WT; zT++) {
          const WT = TT.getActiveUniform(UT, zT);
          if ((null === WT || void 0 === WT ? void 0 : WT.type) !== ZT.UNSIGNED_INT_SAMPLER_2D) continue;
          const MT = TT.getUniformLocation(UT, WT.name),
            gT = MT ? TT.getUniform(UT, MT) : -1;
          if (gT < 0) continue;
          TT.activeTexture(ZT.TEXTURE0 + gT);
          const nT = TT.getParameter(ZT.TEXTURE_BINDING_2D);
          if (nT && yT.get(nT) === mT) return nT
        }
        return null
      } finally {
        TT.activeTexture(zT)
      }
    }

    function UU(TT, UT, mT, WT, zT) {
      const MT = new Uint32Array(4 * zT),
        gT = TT.getParameter(ZT.READ_FRAMEBUFFER_BINDING),
        nT = TT.createFramebuffer();
      TT.bindFramebuffer(ZT.READ_FRAMEBUFFER, nT), TT.framebufferTexture2D(ZT.READ_FRAMEBUFFER, ZT.COLOR_ATTACHMENT0, ZT.TEXTURE_2D, UT, 0);
      try {
        let UT = 0;
        for (; UT < zT;) {
          const gT = WT + UT,
            nT = gT % mT,
            HT = Math.min(zT - UT, mT - nT);
          TT.readPixels(nT, Math.floor(gT / mT), HT, 1, ZT.RGBA_INTEGER, ZT.UNSIGNED_INT, MT.subarray(4 * UT, 4 * (UT + HT))), UT += HT
        }
      } finally {
        TT.bindFramebuffer(ZT.READ_FRAMEBUFFER, gT), TT.deleteFramebuffer(nT)
      }
      return MT
    }

    function mU(TT, UT, mT) {
      let WT = 0,
        zT = 0;
      for (let HT = 0; HT < UT.bytes.length; HT += xT) {
        WT++;
        const TT = Math.min(HT + xT, UT.bytes.length);
        pT(UT.bytes.subarray(HT, TT)) !== pT(mT.subarray(HT, TT)) && zT++
      }
      const MT = `${TT} ${UT.bytes.length} B cpu ${pT(UT.bytes).toString(16)} gpu ${pT(mT).toString(16)}, ${zT}/${WT} blocks differ${UT.missed?`, ${UT.missed} GPU-side writes uncopied`:""}`;
      if (0 === zT) return MT;
      const {
        count: gT,
        offsets: nT
      } = function(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const WT = Math.min(TT.length, UT.length);
        let zT = Math.abs(TT.length - UT.length);
        const MT = [];
        for (let gT = 0; gT < WT; gT++) TT[gT] !== UT[gT] && (zT++, MT.length < mT && MT.push(gT));
        return {
          count: zT,
          offsets: MT
        }
      }(UT.bytes, mT);
      return CT([`${MT}: ${gT} bytes differ`, ...nT.map((TT => `  +${TT}: cpu ${BT(UT.bytes,TT)} | gpu ${BT(mT,TT)}`))].join("\n")), `${MT}: ${gT} bytes differ, first at ${nT.join(", ")} (context in the saved file)`
    }

    function WU(TT) {
      if (0 === TT.vertices.length) return void uT(`decode probe (${TT.reason}): no terrain draw probed (${TT.draws.length} seen)`);
      const UT = function(TT) {
          const UT = new Map;
          for (const WT of TT) {
            const TT = UT.get(WT.group);
            TT ? TT.push(WT) : UT.set(WT.group, [WT])
          }
          const mT = {
            vertices: TT.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [WT, zT] of UT) {
            const TT = new Map,
              UT = zT.map((UT => {
                const mT = jT(UT.record, UT.slot),
                  WT = [UT.gpu[0] - mT[0], UT.gpu[1] - mT[1], UT.gpu[2] - mT[2]],
                  zT = WT.map((TT => Math.round(64 * TT))).join(","),
                  MT = TT.get(zT);
                return MT ? MT.count++ : TT.set(zT, {
                  count: 1,
                  offset: WT
                }), mT
              }));
            let MT = [0, 0, 0],
              gT = 0;
            for (const mT of TT.values()) mT.count > gT && (gT = mT.count, MT = mT.offset);
            mT.translations.set(WT, MT), zT.forEach(((TT, WT) => {
              var zT;
              const gT = [UT[WT][0] + MT[0], UT[WT][1] + MT[1], UT[WT][2] + MT[2]];
              if (gT.every(((UT, mT) => {
                  return WT = TT.gpu[mT], zT = UT, Math.abs(WT - zT) <= Math.max(.001, 1e-6 * Math.abs(zT));
                  var WT, zT
                }))) return;
              mT.mismatches++, mT.byDirection[nT(TT.record[2])]++, mT.byDiagonal[HT(TT.record[2])]++;
              const kT = lT(TT.record);
              mT.byBand[kT] = (null !== (zT = mT.byBand[kT]) && void 0 !== zT ? zT : 0) + 1, mT.first.length < LT && mT.first.push({
                ...TT,
                expected: gT
              })
            }))
          }
          return mT
        }(TT.vertices),
        mT = UT.byDirection.map(((TT, UT) => TT ? `${gT[UT]} ${TT}` : "")).filter(Boolean).join(" "),
        WT = Object.entries(UT.byBand).map((TT => {
          let [UT, mT] = TT;
          return `${UT}: ${mT}`
        })).join(" ");
      if (uT(`decode probe (${TT.reason}): ${UT.mismatches}/${UT.vertices} vertices differ from the CPU decode over ${TT.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (UT.mismatches ? ` by direction [${mT}] diagonal [0: ${UT.byDiagonal[0]} 1: ${UT.byDiagonal[1]}] extent [${WT}]` : "")), TT.fed.records > 0 || TT.fed.failed > 0) {
        uT(`decode probe input: ${TT.fed.differing}/${TT.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (TT.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (TT.fed.failed ? `; the feed failed on ${TT.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const UT of TT.fed.first) uT(`  ${UT}`)
      }
      for (const zT of UT.first) {
        const [TT, UT, mT] = zT.record;
        uT(`  mismatch part ${zT.group} r0 ${TT.toString(16)} r1 ${UT.toString(16)} r2 ${mT.toString(16)} slot ${zT.slot} (${gT[nT(mT)]}): expected ${zT.expected.map(MU).join(",")} gpu ${zT.gpu.map(MU).join(",")}`)
      }
      CT(`decode probe translations: ${[...UT.translations].map((TT=>{let[UT,mT]=TT;return`${UT}: ${mT.map(MU).join(",")}`})).join("; ")}`)
    }

    function zU(TT) {
      return TT.toString(16)
    }

    function MU(TT) {
      return Number.isInteger(TT) ? String(TT) : TT.toFixed(3)
    }

    function gU(TT) {
      return null !== XT.pendingCheck ? Promise.resolve() : new Promise((UT => {
        let mT = !1;
        const WT = {
          reason: TT,
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
        XT.pendingCheck = WT;
        const zT = () => {
            XT.pendingCheck = null;
            try {
              ! function(TT) {
                uT(`draw ranges (${TT.reason}): ${TT.terrainDraws} terrain draws in the frame, the first ${TT.draws.length} here`);
                for (const UT of TT.draws) {
                  const TT = UT.hZ.slice(0, 8).map((TT => {
                      let [UT, mT] = TT;
                      return `${UT}+${mT}`
                    })).join(" "),
                    mT = UT.hZ.length > 8 ? ` (+${UT.hZ.length-8} ranges)` : "";
                  uT(`  ${wT(UT.program)} ${UT.program.terrain} ${UT.call} ${TT}${mT} x${UT.instances}${UT.group>=0?` part ${UT.group} chunk ${UT.chunk}`:""} | ${UT.attributes.join(" | ")}`)
                }
              }(WT), WU(WT);
              WT.draws.some((TT => "undefined" !== typeof WebGL2RenderingContext && TT.gl instanceof WebGL2RenderingContext)) || 0 === WT.draws.length ? function(TT) {
                const UT = [],
                  mT = new Map;
                for (const WT of TT)
                  if ("undefined" !== typeof WebGL2RenderingContext && WT.gl instanceof WebGL2RenderingContext)
                    for (const TT of WT.pages) mT.set("buf" === TT.kind ? TT.buffer : TT.texture, {
                      page: TT,
                      gl: WT.gl
                    });
                for (const [WT, {
                    page: zT,
                    gl: MT
                  }] of mT) {
                  const TT = aT.get(WT);
                  if (!TT) {
                    UT.push(`${zT.kind}#${sT(WT)}: no CPU copy (${XT.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === zT.kind) {
                    UT.push(mU(`buf#${TT.id}`, TT, DT(MT, zT.buffer, 0, TT.bytes.length)));
                    continue
                  }
                  const mT = UU(MT, zT.texture, TT.width, 0, TT.width * TT.height),
                    gT = 16 === TT.texelBytes ? new Uint8Array(mT.buffer) : new Uint8Array(new Uint16Array(mT).buffer);
                  UT.push(mU(`tex#${TT.id} (${16===TT.texelBytes?"records":"light"})`, TT, gT))
                }
                for (const WT of UT) uT(`page readback ${WT}`)
              }(WT.draws) : uT("page readback: none on WebGL1 (no buffer readback)")
            } catch (TT) {
              uT(`check failed: ${String(TT)}`)
            }
            UT()
          },
          MT = () => {
            if (WT.draws.length > 0 && !mT) return mT = !0, void setTimeout(zT, 0);
            mT || requestAnimationFrame(MT)
          };
        requestAnimationFrame(MT), setTimeout((() => {
          mT || (mT = !0, zT())
        }), 5e3)
      }))
    }
    var nU = mT(4780);
    const HU = 20,
      kU = 24,
      jU = Reflect.apply;

    function lU(TT, UT, mT) {
      if (!TT) return;
      const WT = TT[UT];
      if ("function" === typeof WT) {
        const zT = mT(WT);
        TT[UT] = zT, (0, nU.w)(zT, WT)
      }
    }
    let LU = !1;
    const pU = new WeakMap,
      BU = new WeakMap,
      ZU = new WeakMap,
      cU = {
        gl: 0,
        lost: 0
      };
    let vU = {
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
      fU = {
        buffer: 0,
        texture: 0
      },
      qU = 0;

    function iU(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (TT instanceof ArrayBuffer) return new Uint8Array(TT, UT, mT || void 0);
      if (!ArrayBuffer.isView(TT)) return null;
      const WT = "BYTES_PER_ELEMENT" in TT ? TT.BYTES_PER_ELEMENT : 1,
        zT = TT.byteOffset + UT * WT,
        MT = mT ? mT * WT : TT.byteLength - UT * WT;
      return new Uint8Array(TT.buffer, zT, Math.max(0, MT))
    }

    function bU(TT, UT) {
      const mT = function(TT) {
        switch (TT) {
          case ZT.ARRAY_BUFFER:
            return ZT.ARRAY_BUFFER_BINDING;
          case ZT.ELEMENT_ARRAY_BUFFER:
            return ZT.ELEMENT_ARRAY_BUFFER_BINDING;
          case ZT.COPY_READ_BUFFER:
            return ZT.COPY_READ_BUFFER_BINDING;
          case ZT.COPY_WRITE_BUFFER:
            return ZT.COPY_WRITE_BUFFER_BINDING;
          case ZT.UNIFORM_BUFFER:
            return ZT.UNIFORM_BUFFER_BINDING;
          case ZT.PIXEL_UNPACK_BUFFER:
            return ZT.PIXEL_UNPACK_BUFFER_BINDING;
          case ZT.TRANSFORM_FEEDBACK_BUFFER:
            return ZT.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(UT);
      return mT ? TT.getParameter(mT) : null
    }

    function OU(TT) {
      const UT = aT.get(TT);
      UT && (XT.shadowBytes -= UT.bytes.length, aT.delete(TT))
    }

    function eU(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      OU(TT), XT.shadowBytes + UT > JT ? XT.uncopied++ : (XT.shadowBytes += UT, aT.set(TT, {
        id: sT(TT),
        bytes: new Uint8Array(UT),
        width: mT,
        height: WT,
        texelBytes: zT,
        missed: 0
      }))
    }

    function YU(TT, UT) {
      for (const mT of ["deleteBuffer", "deleteTexture"]) lU(TT, mT, (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        return mT[0] && OU(mT[0]), jU(TT, this, mT)
      }));
      lU(TT, "shaderSource", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        return mT[0] && "string" === typeof mT[1] && pU.set(mT[0], mT[1]), jU(TT, this, mT)
      })), lU(TT, "attachShader", (TT => function() {
        for (var UT, mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
        const MT = WT[0],
          gT = null !== (UT = BU.get(MT)) && void 0 !== UT ? UT : [];
        return gT.push(WT[1]), BU.set(MT, gT), jU(TT, this, WT)
      })), lU(TT, "linkProgram", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        const zT = jU(TT, this, mT);
        return XT.inProbe || function(TT, UT) {
          var mT, WT, zT;
          "undefined" !== typeof HTMLCanvasElement && TT.canvas instanceof HTMLCanvasElement && function(TT) {
            if (aU.has(TT)) return;
            aU.add(TT);
            for (const UT of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) TT.addEventListener(UT, (TT => {
              cU.lost < HU && (cU.lost++, uT(`${UT}${"statusMessage"in TT?`: ${String(TT.statusMessage)}`:""}`))
            }))
          }(TT.canvas);
          XT.context ??= TT;
          const MT = null !== (mT = BU.get(UT)) && void 0 !== mT ? mT : [];
          let gT = "",
            nT = "";
          for (const jT of MT) {
            var HT;
            const TT = null !== (HT = pU.get(jT)) && void 0 !== HT ? HT : "";
            /\bgl_Position\b/.test(TT) ? gT = TT : nT = TT
          }
          const kT = {
            id: sT(UT),
            name: null !== (WT = null === (zT = dT.exec(gT)) || void 0 === zT ? void 0 : zT[1]) && void 0 !== WT ? WT : null,
            gl: TT,
            vertex: gT,
            fragment: nT,
            terrain: xU(gT),
            checked: !1,
            firstDraw: !1
          };
          if (ZU.set(UT, kT), tT.push([UT, kT]), null !== kT.terrain) {
            const UT = MT.map((UT => {
              var mT;
              return null !== (mT = TT.getShaderInfoLog(UT)) && void 0 !== mT ? mT : ""
            })).filter((TT => "" !== TT.trim()));
            UT.length > 0 && CT(`program ${wT(kT)} (${kT.terrain}) shader logs:\n${rT(UT.join("\n"))}`)
          }
        }(this, mT[0]), zT
      })), lU(TT, "bufferData", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        const zT = jU(TT, this, mT);
        if (!XT.inProbe) {
          const TT = bU(this, mT[0]);
          if (TT) {
            var MT, gT, nT;
            const UT = "number" === typeof mT[1] ? null : iU(mT[1], null !== (MT = mT[3]) && void 0 !== MT ? MT : 0, null !== (gT = mT[4]) && void 0 !== gT ? gT : 0);
            var HT;
            if (eU(TT, "number" === typeof mT[1] ? mT[1] : null !== (nT = null === UT || void 0 === UT ? void 0 : UT.length) && void 0 !== nT ? nT : 0), UT) null === (HT = aT.get(TT)) || void 0 === HT || HT.bytes.set(UT)
          }
        }
        return zT
      })), lU(TT, "bufferSubData", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        const zT = jU(TT, this, mT);
        if (!XT.inProbe) {
          var MT, gT;
          const TT = bU(this, mT[0]),
            UT = TT ? aT.get(TT) : void 0,
            WT = iU(mT[2], null !== (MT = mT[3]) && void 0 !== MT ? MT : 0, null !== (gT = mT[4]) && void 0 !== gT ? gT : 0);
          if (UT && WT) {
            const TT = mT[1];
            UT.bytes.set(WT.subarray(0, Math.max(0, UT.bytes.length - TT)), TT), JU("buffer", UT, TT, WT.length)
          }
        }
        return zT
      })), UT && (lU(TT, "copyBufferSubData", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        const zT = jU(TT, this, mT);
        if (!XT.inProbe) {
          const [TT, UT, WT, zT, MT] = mT, gT = bU(this, TT), nT = bU(this, UT), HT = gT ? aT.get(gT) : void 0, kT = nT ? aT.get(nT) : void 0;
          kT && (HT ? kT.bytes.set(HT.bytes.slice(WT, WT + MT), zT) : kT.missed++)
        }
        return zT
      })), lU(TT, "texStorage2D", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        const zT = jU(TT, this, mT),
          [, , MT, gT, nT] = mT;
        if (!XT.inProbe && (MT === ZT.RGBA32UI || MT === ZT.RGBA16UI)) {
          const TT = this.getParameter(ZT.TEXTURE_BINDING_2D),
            UT = MT === ZT.RGBA32UI ? 16 : 8;
          TT && (yT.set(TT, UT), eU(TT, gT * nT * UT, gT, nT, UT))
        }
        return zT
      })), lU(TT, "texSubImage2D", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        const zT = jU(TT, this, mT);
        return !XT.inProbe && mT.length >= 9 && mT[0] === ZT.TEXTURE_2D && 0 === mT[1] && function(TT, UT) {
          var mT;
          const WT = TT.getParameter(ZT.TEXTURE_BINDING_2D),
            zT = WT ? aT.get(WT) : void 0;
          if (!zT) return;
          const [, , MT, gT, nT, HT] = UT;
          let kT = iU(UT[8], null !== (mT = UT[9]) && void 0 !== mT ? mT : 0);
          if (null === kT && "number" === typeof UT[8]) {
            const mT = bU(TT, ZT.PIXEL_UNPACK_BUFFER),
              WT = mT ? aT.get(mT) : void 0;
            kT = WT ? WT.bytes.subarray(UT[8]) : null
          }
          if (null === kT) return void zT.missed++;
          const jT = TT.getParameter(ZT.UNPACK_ROW_LENGTH) || nT,
            lT = TT.getParameter(ZT.UNPACK_SKIP_ROWS),
            LT = TT.getParameter(ZT.UNPACK_SKIP_PIXELS),
            pT = zT.texelBytes;
          for (let BT = 0; BT < HT; BT++) {
            const TT = ((lT + BT) * jT + LT) * pT,
              UT = ((gT + BT) * zT.width + MT) * pT;
            zT.bytes.set(kT.subarray(TT, TT + nT * pT), UT)
          }
          JU("texture", zT, (gT * zT.width + MT) * pT, nT * HT * pT)
        }(this, mT), zT
      })), lU(TT, "copyTexSubImage2D", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        const zT = mT[0] === ZT.TEXTURE_2D ? this.getParameter(ZT.TEXTURE_BINDING_2D) : null,
          MT = zT ? aT.get(zT) : void 0;
        return MT && MT.missed++, jU(TT, this, mT)
      })));
      for (const mT of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) lU(TT, mT, (TT => function() {
        for (var UT = arguments.length, WT = new Array(UT), zT = 0; zT < UT; zT++) WT[zT] = arguments[zT];
        const MT = jU(TT, this, WT);
        return XT.inProbe || wU(this, mT, WT), MT
      }));
      lU(TT, "getExtension", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        const zT = jU(TT, this, mT);
        return zT && "object" === typeof zT && function(TT, UT, mT) {
          const WT = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(UT in WT) || mT.bloxdRenderDebug) return;
          mT.bloxdRenderDebug = !0;
          for (const zT of WT[UT]) {
            const UT = mT[zT];
            "function" === typeof UT && (mT[zT] = function() {
              for (var WT = arguments.length, MT = new Array(WT), gT = 0; gT < WT; gT++) MT[gT] = arguments[gT];
              const nT = jU(UT, mT, MT);
              return XT.inProbe || wU(TT, zT, MT), nT
            })
          }
        }(this, mT[0], zT), zT
      }))
    }

    function JU(TT, UT, mT, WT) {
      fU[TT] += WT, qU < 32 && UT.bytes.length >= 1 << 20 && (qU++, CT(`upload ${TT} #${UT.id} +${mT} ${WT} B`))
    }

    function xU(TT) {
      if (!TT.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(TT) || /in uvec3 _p2vs_location0\b/.test(TT) ? "inst" : "tex"
    }

    function dU(TT, UT, mT) {
      var WT;
      if (mT.checked) return;
      mT.checked = !0;
      const zT = TT.getProgramParameter(UT, ZT.LINK_STATUS),
        MT = (null !== (WT = TT.getProgramInfoLog(UT)) && void 0 !== WT ? WT : "").trim();
      var gT;
      null === mT.terrain && zT || (uT(`program ${wT(mT)} ${null!==(gT=mT.terrain)&&void 0!==gT?gT:"other"} link ${zT?"ok":"FAILED"}${MT?`: ${rT(MT,300)}`:""}`), MT && CT(`program ${wT(mT)} link log:\n${rT(MT)}`))
    }

    function wU(TT, UT, mT) {
      var WT;
      const zT = TT.getParameter(ZT.CURRENT_PROGRAM),
        MT = zT ? ZU.get(zT) : void 0;
      if (!zT || !MT) return;
      const gT = null !== (WT = MT.terrain) && void 0 !== WT ? WT : "other",
        {
          hZ: nT,
          instances: HT
        } = function(TT, UT) {
          switch (TT) {
            case "drawArrays":
              return {
                hZ: [
                  [UT[1], UT[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                hZ: [
                  [UT[1], UT[2]]
                ], instances: UT[3]
              };
            case "drawElements":
              return {
                hZ: [
                  [0, UT[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                hZ: [
                  [0, UT[1]]
                ], instances: UT[4]
              };
            case "multiDrawArraysWEBGL": {
              const TT = UT[1],
                mT = UT[3],
                WT = UT[2],
                zT = UT[4],
                MT = [];
              for (let gT = 0; gT < UT[5]; gT++) MT.push([TT[WT + gT], mT[zT + gT]]);
              return {
                hZ: MT,
                instances: 1
              }
            }
            default:
              return {
                hZ: [], instances: 0
              }
          }
        }(UT, mT),
        kT = "inst" === MT.terrain ? HT : nT.reduce(((TT, UT) => {
          let [, mT] = UT;
          return TT + mT
        }), 0) / 6;
      if (vU[gT].draws++, vU[gT].faces += kT, null === MT.terrain) return;
      if (XT.context = TT, !MT.firstDraw) {
        MT.firstDraw = !0, dU(TT, zT, MT), tU || (tU = !0, uT(function(TT) {
          var UT;
          const mT = TT.getParameter(ZT.DEPTH_FUNC),
            WT = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let zT = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in TT && TT.getParameter(ZT.DRAW_FRAMEBUFFER_BINDING)) {
            const UT = TT;
            zT = UT.getFramebufferAttachmentParameter(ZT.DRAW_FRAMEBUFFER, ZT.DEPTH_ATTACHMENT, ZT.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(UT.getFramebufferAttachmentParameter(ZT.DRAW_FRAMEBUFFER,ZT.DEPTH_ATTACHMENT,ZT.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(UT.getFramebufferAttachmentParameter(ZT.DRAW_FRAMEBUFFER,ZT.DEPTH_ATTACHMENT,ZT.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const MT = TT.getParameter(ZT.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(UT=WT[mT])&&void 0!==UT?UT:`0x${mT.toString(16)}`} clear ${MT}${516===mT||518===mT?" (reverse-Z)":""}, samples ${String(TT.getParameter(ZT.SAMPLES))}, ${zT}`
        }(TT)));
        const mT = TT.getError();
        mT !== ZT.NO_ERROR && cU.gl < HU && (cU.gl++, uT(`GL error 0x${mT.toString(16)} after program ${wT(MT)}'s first terrain draw (${UT})`))
      }
      const jT = XT.pendingCheck;
      null !== jT && (jT.terrainDraws++, jT.draws.length < kU && KT(TT, zT, MT, UT, nT, HT))
    }
    let tU = !1;
    const aU = new WeakSet;
    var yU = mT(4619),
      XU = mT(4782);
    const IU = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let QU = !1;
    const sU = new WeakSet,
      FU = new WeakMap,
      PU = new WeakMap,
      VU = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let uU = 0,
      CU = !1,
      rU = null,
      KU = {
        draws: 0,
        faces: 0
      };

    function SU(TT) {
      const UT = globalThis[TT];
      return null === UT || void 0 === UT ? void 0 : UT.prototype
    }

    function GU(TT) {
      return TT && "function" === typeof TT[Symbol.iterator] ? [...TT].sort().join(" ") : ""
    }

    function NU(TT, UT) {
      const mT = null !== TT && void 0 !== TT ? TT : {},
        WT = null !== UT && void 0 !== UT ? UT : Object.keys(Object.getPrototypeOf(mT)).concat(Object.keys(mT));
      return [...new Set(WT)].filter((TT => "number" === typeof mT[TT])).map((TT => `${TT} ${String(mT[TT])}`)).join(", ")
    }

    function EU(TT, UT) {
      var mT;
      const WT = null !== (mT = UT.vertex) && void 0 !== mT ? mT : {};
      if (WT.module && sU.has(WT.module)) {
        var zT;
        const mT = String(null !== (zT = WT.entryPoint) && void 0 !== zT ? zT : "");
        if (mT.startsWith("vs_packed") && FU.set(TT, mT), !CU) {
          var MT, gT, nT, HT, kT;
          CU = !0;
          const TT = null !== (MT = UT.depthStencil) && void 0 !== MT ? MT : {},
            WT = null !== (gT = UT.multisample) && void 0 !== gT ? gT : {},
            zT = String(null !== (nT = TT.depthCompare) && void 0 !== nT ? nT : "");
          uT(`WebGPU terrain pipeline ${mT}: depth ${String(null!==(HT=TT.format)&&void 0!==HT?HT:"none")} ${zT}${zT.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(kT=WT.count)&&void 0!==kT?kT:1)}`)
        }
      }
    }

    function hU(TT) {
      lU(TT, "setPipeline", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        return PU.set(this, mT[0]), jU(TT, this, mT)
      }));
      for (const UT of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) lU(TT, UT, (TT => function() {
        const mT = PU.get(this),
          WT = mT ? FU.get(mT) : void 0;
        for (var zT = arguments.length, MT = new Array(zT), gT = 0; gT < zT; gT++) MT[gT] = arguments[gT];
        return void 0 !== WT && DU(UT, WT, MT), jU(TT, this, MT)
      }))
    }

    function DU(TT, UT, mT) {
      var WT;
      (KU.draws++, "draw" === TT || "drawIndexed" === TT) && (KU.faces += mT[0] * (null !== (WT = mT[1]) && void 0 !== WT ? WT : 1) / 6);
      if (null !== rU && rU.length < kU) {
        const WT = ("draw" === TT ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === TT ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((UT, WT) => {
          const zT = TT.endsWith("Indirect") ? mT[1] : mT[WT];
          return `${UT} ${String(null!==zT&&void 0!==zT?zT:"instances"===UT?1:0)}`
        }));
        rU.push(`  ${UT} ${TT} ${WT.join(" ")}`)
      }
    }

    function oU() {
      if (QU || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      QU = !0, lU(SU("GPU"), "requestAdapter", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        return jU(TT, this, mT).then((TT => {
          var UT;
          TT ? function(TT) {
            var UT;
            const mT = null !== (UT = TT.info) && void 0 !== UT ? UT : {};
            uT(`WebGPU adapter ${["vendor","architecture","device","description"].map((TT=>{var UT;return`${TT} "${String(null!==(UT=mT[TT])&&void 0!==UT?UT:"")}"`})).join(" ")}${TT.isFallbackAdapter?" (fallback)":""}`), uT(`WebGPU adapter features ${GU(TT.features)}`), uT(`WebGPU adapter limits ${NU(TT.limits,IU)}`), CT(`WebGPU adapter all limits ${NU(TT.limits,null)}`)
          }(TT) : uT(`WebGPU requestAdapter(${JSON.stringify(null!==(UT=mT[0])&&void 0!==UT?UT:{})}) gave none`);
          return TT
        }))
      })), lU(SU("GPUAdapter"), "requestDevice", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        return jU(TT, this, mT).then((TT => (function(TT) {
          uT(`WebGPU device features ${GU(TT.features)}`), uT(`WebGPU device limits ${NU(TT.limits,IU)}`), TT.addEventListener("uncapturederror", (TT => {
            if (VU.uncaptured < HU) {
              var UT, mT, WT;
              VU.uncaptured++;
              const zT = TT.error;
              uT(`WebGPU uncaptured ${null!==(UT=null===zT||void 0===zT||null===(mT=zT.constructor)||void 0===mT?void 0:mT.name)&&void 0!==UT?UT:"error"}: ${rT(String(null!==(WT=null===zT||void 0===zT?void 0:zT.message)&&void 0!==WT?WT:""),600)}`)
            }
          }));
          const UT = TT.lost;
          null === UT || void 0 === UT || UT.then((TT => {
            var UT;
            uT(`WebGPU device lost (${String(TT.reason)}): ${rT(String(null!==(UT=TT.message)&&void 0!==UT?UT:""),600)}`)
          }))
        }(TT), TT)), (TT => {
          throw uT(`WebGPU requestDevice failed: ${String(TT)}`), TT
        }))
      }));
      const TT = SU("GPUDevice");
      lU(TT, "createShaderModule", (TT => function() {
        for (var UT, mT, WT = arguments.length, zT = new Array(WT), MT = 0; MT < WT; MT++) zT[MT] = arguments[MT];
        const gT = jU(TT, this, zT);
        return function(TT, UT) {
          const mT = UT.includes("decodeQuad");
          mT && sU.add(TT);
          const WT = TT.getCompilationInfo;
          null === WT || void 0 === WT || WT.call(TT).then((TT => {
            if (0 === TT.messages.length && !mT) return;
            const UT = {};
            for (const mT of TT.messages) {
              var WT;
              UT[String(mT.type)] = (null !== (WT = UT[String(mT.type)]) && void 0 !== WT ? WT : 0) + 1
            }
            const zT = TT.messages.map((TT => `${String(TT.type)} ${String(TT.lineNum)}:${String(TT.linePos)} ${String(TT.message)}`)).join("\n");
            VU.compile < HU && (VU.compile++, uT(`WebGPU ${mT?"terrain ":""}shader module compiled: ${JSON.stringify(UT)}${zT?` first: ${rT(zT.split("\n")[0],300)}`:""}`)), zT && CT(`WebGPU shader module messages:\n${rT(zT)}`)
          }))
        }(gT, String(null !== (UT = (null !== (mT = zT[0]) && void 0 !== mT ? mT : {}).code) && void 0 !== UT ? UT : "")), gT
      })), lU(TT, "createRenderPipeline", (TT => function() {
        for (var UT, mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
        const MT = jU(TT, this, WT);
        return EU(MT, null !== (UT = WT[0]) && void 0 !== UT ? UT : {}), MT
      })), lU(TT, "createRenderPipelineAsync", (TT => function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        return jU(TT, this, mT).then((TT => {
          var UT;
          return EU(TT, null !== (UT = mT[0]) && void 0 !== UT ? UT : {}), TT
        }), (TT => {
          var UT;
          throw function(TT, UT) {
            var mT, WT, zT;
            if (VU.rejected >= HU) return;
            VU.rejected++;
            const {
              reason: MT,
              message: gT
            } = null !== UT && void 0 !== UT ? UT : {}, nT = String(null !== (mT = (null !== (WT = TT.vertex) && void 0 !== WT ? WT : {}).entryPoint) && void 0 !== mT ? mT : "");
            uT(`WebGPU pipeline "${String(null!==(zT=TT.label)&&void 0!==zT?zT:"")}" ${nT} rejected (${String(null!==MT&&void 0!==MT?MT:"no reason")}): ${rT(String(null!==gT&&void 0!==gT?gT:UT),600)}`)
          }(null !== (UT = mT[0]) && void 0 !== UT ? UT : {}, TT), TT
        }))
      })), lU(SU("GPUCanvasContext"), "configure", (TT => function() {
        for (var UT, mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
        const MT = null !== (UT = WT[0]) && void 0 !== UT ? UT : {};
        var gT, nT;
        uU++ < 3 && uT(`WebGPU canvas ${String(MT.format)} ${String(null!==(gT=MT.colorSpace)&&void 0!==gT?gT:"srgb")} alpha ${String(null!==(nT=MT.alphaMode)&&void 0!==nT?nT:"opaque")}`);
        return jU(TT, this, WT)
      })), hU(SU("GPURenderPassEncoder")), hU(SU("GPURenderBundleEncoder"))
    }
    const AU = 1e4,
      RU = 6e4,
      Tm = 5e3,
      Um = 3e3,
      mm = 100;
    let Wm = null,
      zm = !1,
      Mm = {
        ...yU.b
      },
      gm = !1,
      nm = null,
      Hm = 0,
      km = () => {};
    const jm = new Promise((TT => {
      km = TT
    }));

    function lm() {
      var TT;
      zm || (zm = !0, Mm = Object.assign(window.bloxdRenderDebug ??= {
        ...yU.b
      }, {
        faceCull: "0" === (0, MT.o)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (TT = (0, MT.o)("adrenoProbe")) && void 0 !== TT ? TT : ""
      }), uT("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), LU || "undefined" === typeof window || (LU = !0, "undefined" !== typeof WebGL2RenderingContext && YU(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && YU(WebGLRenderingContext.prototype, !1)), oU(), (0, MT.b)("renderProbe", (() => {
        fm("console")
      })), Zm(), setInterval(im, Tm))
    }

    function Lm(TT) {
      var UT, mT;
      lm(), Wm = null !== (UT = null === TT || void 0 === TT ? void 0 : TT.backend) && void 0 !== UT ? UT : null;
      const WT = `, renderer param ${null!==(mT=(0,MT.o)("renderer"))&&void 0!==mT?mT:"none"}, faceCull ${"0"===Mm.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Mm.adrenoProbe||"none"}`;
      uT(`${(0,XU.e)(TT)}${null===TT?"":WT}`)
    }

    function pm() {
      const TT = performance.now(),
        UT = Bm(jm, AU, RU).then((UT => fm(`${Math.round((performance.now()-TT)/1e3)} s after playable${UT?"":", no terrain drawn yet"}`)));
      (0, zT.e)(uT, (async () => {
        await UT, await nm
      }))
    }
    async function Bm(TT, UT, mT) {
      const zT = (0, WT.d)(mT).then((() => !1));
      return await (0, WT.d)(UT), Promise.race([TT.then((() => !0)), zT])
    }

    function Zm() {
      requestAnimationFrame((() => {
        Hm++, Zm()
      }))
    }

    function cm() {
      var TT, UT, mT;
      if (gm) return;
      (gm = !0, uT(`renderer caps ${null!==(TT=Mm.caps)&&void 0!==TT?TT:"(not noted)"}; terrain fetch ${null!==(UT=Mm.fetch)&&void 0!==UT?UT:"(not noted)"}`), Mm.adrenoProbe) && uT(`adrenoProbe ${Mm.adrenoProbe} asked; in force (storage fetch only): ${null!==(mT=Mm.probe)&&void 0!==mT?mT:"(not noted)"}`);
      const WT = XT.context;
      if (WT) {
        for (const TT of function(TT) {
            var UT;
            const mT = [],
              WT = TT.getExtension("WEBGL_debug_renderer_info"),
              zT = WT ? TT.getParameter(WT.UNMASKED_VENDOR_WEBGL) : "(masked)",
              MT = WT ? TT.getParameter(WT.UNMASKED_RENDERER_WEBGL) : "(masked)";
            mT.push(`GL ${String(TT.getParameter(TT.VERSION))} | ${String(TT.getParameter(TT.SHADING_LANGUAGE_VERSION))} | ${String(TT.getParameter(TT.VENDOR))} / ${String(TT.getParameter(TT.RENDERER))}`), mT.push(`GL unmasked ${zT} / ${MT}`);
            const gT = [
              ["MAX_TEXTURE_SIZE", TT.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", TT.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", TT.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", TT.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", TT.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", TT.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", TT.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in TT && gT.push(["MAX_UNIFORM_BLOCK_SIZE", TT.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", TT.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", TT.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", TT.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), mT.push(`GL limits ${gT.map((UT=>{let[mT,WT]=UT;return`${mT} ${String(TT.getParameter(WT))}`})).join(", ")}`);
            const nT = (UT, mT) => {
              const WT = TT.getShaderPrecisionFormat(UT, TT.HIGH_FLOAT),
                zT = TT.getShaderPrecisionFormat(UT, TT.HIGH_INT);
              return `${mT} highp float ${WT?`${WT.rangeMin}/${WT.rangeMax}/${WT.precision}`:"?"} int ${zT?`${zT.rangeMin}/${zT.rangeMax}/${zT.precision}`:"?"}`
            };
            mT.push(`GL precision ${nT(TT.VERTEX_SHADER,"VS")}, ${nT(TT.FRAGMENT_SHADER,"FS")}`);
            const HT = TT.getContextAttributes();
            return mT.push(`GL context ${JSON.stringify(HT)} drawingBuffer ${TT.drawingBufferWidth}x${TT.drawingBufferHeight}${"drawingBufferFormat"in TT?` format 0x${Number(TT.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in TT?` ${String(TT.drawingBufferColorSpace)}`:""}`), mT.push(`GL extensions ${(null!==(UT=TT.getSupportedExtensions())&&void 0!==UT?UT:[]).join(" ")}`), mT
          }(WT)) uT(TT);
        ! function() {
          if (!XT.context) return;
          let TT = 0,
            UT = 0;
          for (const [mT, WT] of tT) !WT.gl.isContextLost() && WT.gl.isProgram(mT) && (UT++, dU(WT.gl, mT, WT), null !== WT.terrain && TT++);
          uT(`programs: ${UT} live of ${tT.length} linked, ${TT} packed terrain; CPU page copies ${Math.round(XT.shadowBytes/1048576)} MiB (${XT.uncopied} over budget)`)
        }()
      }
    }

    function fm(TT) {
      return nm ??= async function(TT) {
        cm(), "webgpu" === Wm ? (qm(), "1" === Mm.slotCheck && uT("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Mm.slotCheck = "1", await
          function(TT) {
            if (null !== rU) return Promise.resolve();
            const UT = [];
            return rU = UT, new Promise((mT => {
              setTimeout((() => {
                rU = null, uT(`WebGPU draw ranges (${TT}): ${UT.length} terrain draws recorded in a second (first ${kU}; bundles replay without new ones)`);
                for (const TT of UT) uT(TT);
                mT()
              }), 1e3)
            }))
          }(TT), await async function() {
            if (await (0, yU.g)(Mm, "slotCheck", ["1"], Um, mm), "1" === Mm.slotCheck) return void uT(`slot check: no answer in ${Um} ms (only the storage fetch has one; a later answer logs on its own)`);
            qm()
          }()) : await gU(TT);
        uT(`check (${TT}) done: bloxdDebug.save() downloads it all`)
      }(TT).catch((UT => {
        uT(`check (${TT}) failed: ${String(UT)}`)
      })).finally((() => {
        nm = null
      })), nm
    }

    function qm() {
      void 0 !== Mm.slotCheck && "1" !== Mm.slotCheck && (uT(Mm.slotCheck), delete Mm.slotCheck)
    }

    function im() {
      const TT = TT => Hm ? (TT / Hm).toFixed(1) : "0",
        UT = function() {
          const TT = KU;
          return KU = {
            draws: 0,
            faces: 0
          }, TT
        }(),
        mT = function() {
          const TT = vU;
          return vU = {
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
          }, TT
        }(),
        WT = function() {
          const TT = fU;
          return fU = {
            buffer: 0,
            texture: 0
          }, TT
        }();
      qm(), ("webgpu" === Wm ? UT.draws : mT.inst.draws + mT.tex.draws) > 0 && km();
      const zT = "webgpu" === Wm ? [`terrain ${TT(UT.draws)} draws ${TT(UT.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((TT => mT[TT].draws > 0)).map((UT => `${UT} ${TT(mT[UT].draws)} draws ${TT(mT[UT].faces)} faces a frame`));
      uT(`${Hm} frames: ${zT.join(", ")||"no draws"}; uploaded ${Math.round(WT.buffer/1024)} KiB to buffers, ${Math.round(WT.texture/1024)} KiB to data textures`), Hm = 0
    }
  },
  4782: (TT, UT, mT) => {
    function WT(TT) {
      if (null === TT) return "backend: none picked (no renderer build)";
      const UT = TT.adapter ? `${TT.adapter.vendor}/${TT.adapter.architecture}` : "none";
      return `backend ${TT.backend}: reason ${TT.reason}, source ${TT.source}, adapter ${UT}`
    }
    mT.d(UT, {
      e: () => WT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);