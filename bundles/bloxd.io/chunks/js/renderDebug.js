export const id = 49;
export const ids = [49];
export const modules = {
  4779: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(2912);
    const NB = 3e4,
      uB = 1e3;

    function UB() {
      return "visible" === document.visibilityState && "inGame" === QB.c.get("gameState") && (0, dB.y)()
    }

    function aB(BB, jB) {
      (0, IB.t)() || function(BB, jB, zB) {
        let QB = 0;
        const nB = setInterval((() => {
          jB() && (QB += uB, QB >= BB && (clearInterval(nB), zB()))
        }), uB)
      }(NB, UB, (() => {
        jB().then((() => {
          BB(`saved for the player after ${NB/1e3} s of play`), (0, IB.E)(), nB.n.Ly("chat", {
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
  4773: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      installRenderDebug: () => pz,
      renderDebugPlayable: () => sz,
      startRenderDebug: () => rz,
      waitForDraw: () => Jz
    });
    var QB = zB(1867),
      nB = zB(4779),
      dB = zB(2912);
    const IB = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function NB(BB) {
      return 7 & BB
    }

    function uB(BB) {
      return BB >>> 11 & 1
    }

    function UB(BB) {
      return [1 + (BB >>> 18 & 63), 1 + (BB >>> 24 & 63)]
    }

    function aB(BB, jB) {
      const [zB, , QB] = BB, nB = NB(QB), dB = function(BB, jB, zB) {
        return jB + (1 === (22 >>> BB & 1) ? 4 - zB : zB) & 3
      }(nB, uB(QB), jB), IB = nB >>> 1, [aB, pB] = UB(zB), rB = 1 === dB || 2 === dB ? aB : 0, sB = dB >= 2 ? pB : 0, JB = [63 & zB, zB >>> 6 & 63, zB >>> 12 & 63];
      return JB[2 === IB ? 0 : 2] += rB, JB[1 === IB ? 0 : 1] += sB, JB
    }

    function pB(BB) {
      const jB = Math.max(...UB(BB[0]));
      return 1 === jB ? "1" : jB <= 4 ? "2-4" : jB <= 16 ? "5-16" : "17-64"
    }
    const rB = 16;

    function sB(BB) {
      let jB = 2166136261;
      for (let zB = 0; zB < BB.length; zB++) jB = Math.imul(jB ^ BB[zB], 16777619);
      return jB >>> 0
    }

    function JB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const QB = Math.max(0, jB - zB),
        nB = Math.min(BB.length, jB + zB),
        dB = [];
      for (let IB = QB; IB < nB; IB++) {
        const zB = BB[IB].toString(16).padStart(2, "0");
        dB.push(IB === jB ? `[${zB}]` : zB)
      }
      return dB.join(" ")
    }
    const mB = {
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
      yB = "_vs2fs_location0";
    const kB = 0,
      GB = 4,
      LB = 6,
      gB = [0, 1, 2, 0, 2, 3],
      tB = 2048,
      SB = 4,
      MB = 256,
      EB = 64,
      iB = 268435456,
      qB = 65536,
      fB = /^#version [^\n]*\/\/ program (\S+)$/m;

    function oB(BB) {
      return null === BB.name ? `#${BB.id}` : `#${BB.id} ${BB.name}`
    }
    const HB = [],
      DB = new WeakMap,
      FB = new WeakMap,
      YB = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let VB = 1;
    const hB = new WeakMap;

    function XB(BB) {
      if (null === BB) return 0;
      let jB = hB.get(BB);
      return void 0 === jB && (jB = VB++, hB.set(BB, jB)), jB
    }
    class ZB {
      constructor(BB, jB) {
        this.print = BB, this.now = jB, this.shown = 0, this.DN = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.Cs = [], this.dropped = 0
      }
      line(BB) {
        const jB = this.now();
        if (jB - this.second >= 1e3 && (this.second = jB, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.DN++, void this.store(BB);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${BB} (the last line here: the rest go to bloxdDebug.save())` : BB)
      }
      keep(BB) {
        this.sections++, this.store(BB)
      }
      store(BB) {
        this.Cs.push(`${new Date(Date.now()).toISOString()} ${BB}`), this.Cs.length > 2e4 && (this.Cs.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.DN} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.Cs].join("\n")
      }
    }
    let AB = null;

    function TB() {
      if (null === AB) {
        const BB = new ZB((BB => {
          (0, dB.n)("render", BB)
        }), (() => performance.now()));
        (0, dB.j)("render", (() => BB.dump())), AB = BB
      }
      return AB
    }

    function PB(BB) {
      TB().line(BB)
    }

    function WB(BB) {
      TB().keep(BB)
    }

    function eB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return BB.length <= jB ? BB : `${BB.slice(0,jB)}... (${BB.length-jB} more characters)`
    }

    function lB(BB, jB, zB, QB, nB, dB) {
      const IB = YB.pendingCheck;
      if (null === IB) return;
      const NB = "undefined" !== typeof WebGL2RenderingContext && BB instanceof WebGL2RenderingContext,
        uB = {
          gl: BB,
          program: zB,
          call: QB,
          gy: nB,
          instances: dB,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (IB.draws.push(uB), NB) try {
        const QB = function(BB) {
          const jB = [],
            zB = new Map,
            QB = Math.min(16, BB.getParameter(mB.MAX_VERTEX_ATTRIBS));
          for (let nB = 0; nB < QB; nB++) {
            if (!BB.getVertexAttrib(nB, mB.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const QB = BB.getVertexAttrib(nB, mB.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              dB = BB.getVertexAttribOffset(nB, mB.VERTEX_ATTRIB_ARRAY_POINTER),
              IB = BB.getVertexAttrib(nB, mB.VERTEX_ATTRIB_ARRAY_STRIDE),
              NB = BB.getVertexAttrib(nB, mB.VERTEX_ATTRIB_ARRAY_SIZE),
              uB = BB.getVertexAttrib(nB, mB.VERTEX_ATTRIB_ARRAY_TYPE),
              UB = "VERTEX_ATTRIB_ARRAY_INTEGER" in BB && BB.getVertexAttrib(nB, mB.VERTEX_ATTRIB_ARRAY_INTEGER),
              aB = "VERTEX_ATTRIB_ARRAY_DIVISOR" in BB ? BB.getVertexAttrib(nB, mB.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            zB.set(nB, {
              buffer: QB,
              offset: dB,
              stride: IB
            }), jB.push(`@${nB} buf#${XB(QB)} +${dB} stride ${IB} ${NB}x0x${uB.toString(16)}${UB?" int":""} div ${aB}`)
          }
          return {
            lines: jB,
            byLocation: zB
          }
        }(BB);
        if (uB.attributes = QB.lines, "inst" === zB.terrain) {
          const {
            group: nB,
            chunk: NB
          } = function(BB, jB, zB) {
            const QB = jB.get(LB),
              nB = BB.getVertexAttrib(LB, mB.CURRENT_VERTEX_ATTRIB),
              dB = QB ? `+${QB.offset}` : nB ? Array.from(nB).slice(0, 3).join(",") : "?";
            let IB = zB.groups.get(dB);
            return void 0 === IB && (IB = zB.groups.size, zB.groups.set(dB, IB)), {
              group: IB,
              chunk: dB
            }
          }(BB, QB.byLocation, IB);
          uB.group = nB, uB.chunk = NB;
          for (const BB of [kB, GB]) {
            var UB;
            const jB = null === (UB = QB.byLocation.get(BB)) || void 0 === UB ? void 0 : UB.buffer;
            jB && uB.pages.push({
              kind: "buf",
              buffer: jB
            })
          }! function(BB, jB, zB, QB, nB, dB, IB) {
            const NB = QB.get(kB),
              uB = IB.parts.get(dB);
            if (void 0 === uB && IB.parts.size >= SB) return;
            const UB = Math.min(nB, EB, MB - (null !== uB && void 0 !== uB ? uB : 0));
            if (null === NB || void 0 === NB || !NB.buffer || UB <= 0) return;
            const aB = wB(BB, jB, zB);
            if (!aB) return;
            const pB = NB.stride || 12,
              rB = bB(BB, NB.buffer, NB.offset, (UB - 1) * pB + 12),
              sB = new DataView(rB.buffer),
              JB = function(BB, jB) {
                const zB = function(BB) {
                    const jB = OB.get(BB);
                    if (void 0 !== jB && (null === jB || BB.isProgram(jB))) return jB;
                    YB.inProbe = !0;
                    let zB = null;
                    try {
                      zB = xB(BB, vB, RB, "fed", "the record feed")
                    } finally {
                      YB.inProbe = !1
                    }
                    return OB.set(BB, zB), zB
                  }(BB),
                  QB = zB ? cB(BB, zB, jB, (() => {
                    BB.drawArraysInstanced(mB.POINTS, 0, 1, jB)
                  }), "decode probe input (the record feed)") : null;
                return QB ? new Uint32Array(QB.buffer) : null
              }(BB, UB);
            JB || IB.fed.failed++;
            const yB = cB(BB, aB, 4 * UB, (() => {
              BB.drawArraysInstanced(mB.POINTS, 0, 4, UB)
            }));
            if (!yB) return;
            IB.parts.set(dB, (null !== uB && void 0 !== uB ? uB : 0) + UB);
            for (let mB = 0; mB < UB; mB++) {
              const BB = mB * pB,
                jB = [sB.getUint32(BB, !0), sB.getUint32(BB + 4, !0), sB.getUint32(BB + 8, !0)],
                zB = JB ? [JB[3 * mB], JB[3 * mB + 1], JB[3 * mB + 2]] : jB;
              JB && (IB.fed.records++, zB.some(((BB, zB) => BB !== jB[zB])) && (IB.fed.differing++, IB.fed.first.length < 8 && IB.fed.first.push(`part ${dB} instance ${mB}: fed ${zB.map(nj).join(" ")} buffer ${jB.map(nj).join(" ")}`)));
              for (let QB = 0; QB < 4; QB++) {
                const BB = 3 * (4 * mB + QB);
                IB.vertices.push({
                  record: zB,
                  slot: QB,
                  group: dB,
                  gpu: [yB[BB], yB[BB + 1], yB[BB + 2]]
                })
              }
            }
          }(BB, jB, zB, QB.byLocation, dB, nB, IB)
        } else {
          const QB = Bj(BB, jB, 16),
            dB = Bj(BB, jB, 8);
          for (const BB of [QB, dB]) BB && uB.pages.push({
            kind: "tex",
            texture: BB
          });
          QB && function(BB, jB, zB, QB, nB, dB) {
            if (dB.parts.size >= SB) return;
            const IB = wB(BB, jB, zB);
            if (!IB) return;
            let NB = 6 * MB;
            const uB = [];
            for (const [sB, JB] of nB) {
              const BB = Math.min(JB, NB, Math.max(6, 6 * Math.floor(MB / nB.length)));
              BB > 0 && (uB.push([sB, BB]), NB -= BB)
            }
            const UB = uB.reduce(((BB, jB) => {
                let [, zB] = jB;
                return BB + zB
              }), 0),
              aB = cB(BB, IB, UB, (() => {
                for (const [jB, zB] of uB) BB.drawArrays(mB.POINTS, jB, zB)
              }));
            if (!aB) return;
            let pB = 0;
            for (const [sB, JB] of uB) {
              const jB = Math.floor(sB / 6),
                zB = Math.floor((sB + JB - 1) / 6) - jB + 1,
                nB = jj(BB, QB, tB, jB, zB);
              for (let BB = sB; BB < sB + JB; BB++, pB++) {
                var rB;
                const zB = 4 * (Math.floor(BB / 6) - jB),
                  QB = [nB[zB], nB[zB + 1], nB[zB + 2]];
                dB.parts.set(nB[zB + 3], (null !== (rB = dB.parts.get(nB[zB + 3])) && void 0 !== rB ? rB : 0) + (BB % 6 === 0 ? 1 : 0)), dB.vertices.push({
                  record: QB,
                  slot: gB[BB % 6],
                  group: nB[zB + 3],
                  gpu: [aB[3 * pB], aB[3 * pB + 1], aB[3 * pB + 2]]
                })
              }
            }
          }(BB, jB, zB, QB, nB, IB)
        }
      } catch (aB) {
        PB(`decode probe failed on program ${oB(zB)}: ${String(aB)}`)
      }
    }

    function wB(BB, jB, zB) {
      if (void 0 !== zB.probe) return zB.probe && KB(BB, jB, zB.probe), zB.probe;
      zB.probe = null, YB.inProbe = !0;
      try {
        zB.probe = function(BB, jB) {
          return xB(BB, (zB = jB.vertex, zB.replace(`\nvec3 ${yB} = vec3(0);\n`, `\nout vec3 ${yB};\n`)), jB.fragment, yB, `program ${oB(jB)}'s twin`);
          var zB
        }(BB, zB)
      } finally {
        YB.inProbe = !1
      }
      return zB.probe && KB(BB, jB, zB.probe), zB.probe
    }

    function xB(BB, jB, zB, QB, nB) {
      const dB = [BB.createShader(mB.VERTEX_SHADER), BB.createShader(mB.FRAGMENT_SHADER)],
        IB = BB.createProgram();
      if (!IB || !dB[0] || !dB[1]) return null;
      BB.shaderSource(dB[0], jB), BB.shaderSource(dB[1], zB);
      for (const uB of dB) BB.compileShader(uB), BB.attachShader(IB, uB);
      BB.transformFeedbackVaryings(IB, [QB], mB.INTERLEAVED_ATTRIBS), BB.linkProgram(IB);
      for (const uB of dB) BB.deleteShader(uB);
      var NB;
      return BB.getProgramParameter(IB, mB.LINK_STATUS) ? IB : (PB(`decode probe: ${nB} failed to link: ${eB(null!==(NB=BB.getProgramInfoLog(IB))&&void 0!==NB?NB:"",300)}`), BB.deleteProgram(IB), null)
    }

    function KB(BB, jB, zB) {
      const QB = BB.getProgramParameter(jB, mB.ACTIVE_UNIFORM_BLOCKS);
      for (let NB = 0; NB < QB; NB++) {
        const QB = BB.getActiveUniformBlockName(jB, NB),
          nB = null === QB ? mB.INVALID_INDEX : BB.getUniformBlockIndex(zB, QB);
        nB !== mB.INVALID_INDEX && BB.uniformBlockBinding(zB, nB, BB.getActiveUniformBlockParameter(jB, NB, mB.UNIFORM_BLOCK_BINDING))
      }
      const nB = BB.getParameter(mB.CURRENT_PROGRAM);
      BB.useProgram(zB);
      const dB = BB.getProgramParameter(jB, mB.ACTIVE_UNIFORMS),
        IB = BB.getActiveUniforms(jB, [...Array(dB).keys()], mB.UNIFORM_BLOCK_INDEX);
      for (let NB = 0; NB < dB; NB++) {
        const QB = BB.getActiveUniform(jB, NB);
        if (!QB || -1 !== IB[NB]) continue;
        const nB = QB.name.replace(/\[0\]$/, "");
        for (let dB = 0; dB < QB.size; dB++) {
          const IB = QB.size > 1 ? `${nB}[${dB}]` : QB.name,
            NB = BB.getUniformLocation(jB, IB),
            uB = BB.getUniformLocation(zB, IB);
          NB && uB && CB(BB, uB, QB.type, BB.getUniform(jB, NB))
        }
      }
      BB.useProgram(nB)
    }

    function CB(BB, jB, zB, QB) {
      const nB = ArrayBuffer.isView(QB) ? Array.from(QB) : [Number(QB)];
      switch (zB) {
        case mB.FLOAT:
          return void BB.uniform1f(jB, nB[0]);
        case mB.FLOAT_VEC2:
          return void BB.uniform2fv(jB, nB);
        case mB.FLOAT_VEC3:
          return void BB.uniform3fv(jB, nB);
        case mB.FLOAT_VEC4:
          return void BB.uniform4fv(jB, nB);
        case mB.FLOAT_MAT3:
          return void BB.uniformMatrix3fv(jB, !1, nB);
        case mB.FLOAT_MAT4:
          return void BB.uniformMatrix4fv(jB, !1, nB);
        case mB.UNSIGNED_INT:
          return void BB.uniform1ui(jB, nB[0]);
        case mB.UNSIGNED_INT_VEC2:
          return void BB.uniform2uiv(jB, nB);
        case mB.UNSIGNED_INT_VEC3:
          return void BB.uniform3uiv(jB, nB);
        case mB.UNSIGNED_INT_VEC4:
          return void BB.uniform4uiv(jB, nB);
        case mB.INT_VEC2:
          return void BB.uniform2iv(jB, nB);
        case mB.INT_VEC3:
          return void BB.uniform3iv(jB, nB);
        case mB.INT_VEC4:
          return void BB.uniform4iv(jB, nB);
        default:
          BB.uniform1i(jB, nB[0])
      }
    }

    function cB(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const dB = BB.getParameter(mB.CURRENT_PROGRAM),
        IB = BB.getParameter(mB.TRANSFORM_FEEDBACK_BINDING),
        NB = BB.getParameter(mB.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        uB = BB.getParameter(mB.COPY_READ_BUFFER_BINDING),
        UB = BB.isEnabled(mB.RASTERIZER_DISCARD),
        aB = BB.createTransformFeedback(),
        pB = BB.createBuffer();
      YB.inProbe = !0;
      try {
        const dB = BB.getError();
        dB !== mB.NO_ERROR && PB(`GL error 0x${dB.toString(16)} pending before the decode probe (the renderer's)`), BB.useProgram(jB), BB.bindTransformFeedback(mB.TRANSFORM_FEEDBACK, aB), BB.bindBuffer(mB.TRANSFORM_FEEDBACK_BUFFER, pB), BB.bufferData(mB.TRANSFORM_FEEDBACK_BUFFER, 12 * zB, mB.STREAM_READ), BB.bindBufferBase(mB.TRANSFORM_FEEDBACK_BUFFER, 0, pB), BB.enable(mB.RASTERIZER_DISCARD), BB.beginTransformFeedback(mB.POINTS), QB(), BB.endTransformFeedback(), BB.bindBufferBase(mB.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const IB = BB.getError();
        if (IB !== mB.NO_ERROR) return PB(`${nB}: GL error 0x${IB.toString(16)} on the feedback draw`), null;
        const NB = new Float32Array(3 * zB);
        return BB.bindBuffer(mB.COPY_READ_BUFFER, pB), BB.getBufferSubData(mB.COPY_READ_BUFFER, 0, NB), NB
      } finally {
        UB || BB.disable(mB.RASTERIZER_DISCARD), BB.bindTransformFeedback(mB.TRANSFORM_FEEDBACK, IB), BB.bindBuffer(mB.TRANSFORM_FEEDBACK_BUFFER, NB), BB.bindBuffer(mB.COPY_READ_BUFFER, uB), BB.deleteTransformFeedback(aB), BB.deleteBuffer(pB), BB.useProgram(dB), YB.inProbe = !1
      }
    }

    function bB(BB, jB, zB, QB) {
      const nB = BB.getParameter(mB.COPY_READ_BUFFER_BINDING),
        dB = new Uint8Array(QB);
      return BB.bindBuffer(mB.COPY_READ_BUFFER, jB), BB.getBufferSubData(mB.COPY_READ_BUFFER, zB, dB), BB.bindBuffer(mB.COPY_READ_BUFFER, nB), dB
    }
    const vB = `#version 300 es\nlayout(location = ${kB}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      RB = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      OB = new WeakMap;

    function Bj(BB, jB, zB) {
      const QB = BB.getProgramParameter(jB, mB.ACTIVE_UNIFORMS),
        nB = BB.getParameter(mB.ACTIVE_TEXTURE);
      try {
        for (let nB = 0; nB < QB; nB++) {
          const QB = BB.getActiveUniform(jB, nB);
          if ((null === QB || void 0 === QB ? void 0 : QB.type) !== mB.UNSIGNED_INT_SAMPLER_2D) continue;
          const dB = BB.getUniformLocation(jB, QB.name),
            IB = dB ? BB.getUniform(jB, dB) : -1;
          if (IB < 0) continue;
          BB.activeTexture(mB.TEXTURE0 + IB);
          const NB = BB.getParameter(mB.TEXTURE_BINDING_2D);
          if (NB && FB.get(NB) === zB) return NB
        }
        return null
      } finally {
        BB.activeTexture(nB)
      }
    }

    function jj(BB, jB, zB, QB, nB) {
      const dB = new Uint32Array(4 * nB),
        IB = BB.getParameter(mB.READ_FRAMEBUFFER_BINDING),
        NB = BB.createFramebuffer();
      BB.bindFramebuffer(mB.READ_FRAMEBUFFER, NB), BB.framebufferTexture2D(mB.READ_FRAMEBUFFER, mB.COLOR_ATTACHMENT0, mB.TEXTURE_2D, jB, 0);
      try {
        let jB = 0;
        for (; jB < nB;) {
          const IB = QB + jB,
            NB = IB % zB,
            uB = Math.min(nB - jB, zB - NB);
          BB.readPixels(NB, Math.floor(IB / zB), uB, 1, mB.RGBA_INTEGER, mB.UNSIGNED_INT, dB.subarray(4 * jB, 4 * (jB + uB))), jB += uB
        }
      } finally {
        BB.bindFramebuffer(mB.READ_FRAMEBUFFER, IB), BB.deleteFramebuffer(NB)
      }
      return dB
    }

    function zj(BB, jB, zB) {
      let QB = 0,
        nB = 0;
      for (let uB = 0; uB < jB.bytes.length; uB += qB) {
        QB++;
        const BB = Math.min(uB + qB, jB.bytes.length);
        sB(jB.bytes.subarray(uB, BB)) !== sB(zB.subarray(uB, BB)) && nB++
      }
      const dB = `${BB} ${jB.bytes.length} B cpu ${sB(jB.bytes).toString(16)} gpu ${sB(zB).toString(16)}, ${nB}/${QB} blocks differ${jB.missed?`, ${jB.missed} GPU-side writes uncopied`:""}`;
      if (0 === nB) return dB;
      const {
        count: IB,
        offsets: NB
      } = function(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const QB = Math.min(BB.length, jB.length);
        let nB = Math.abs(BB.length - jB.length);
        const dB = [];
        for (let IB = 0; IB < QB; IB++) BB[IB] !== jB[IB] && (nB++, dB.length < zB && dB.push(IB));
        return {
          count: nB,
          offsets: dB
        }
      }(jB.bytes, zB);
      return WB([`${dB}: ${IB} bytes differ`, ...NB.map((BB => `  +${BB}: cpu ${JB(jB.bytes,BB)} | gpu ${JB(zB,BB)}`))].join("\n")), `${dB}: ${IB} bytes differ, first at ${NB.join(", ")} (context in the saved file)`
    }

    function Qj(BB) {
      if (0 === BB.vertices.length) return void PB(`decode probe (${BB.reason}): no terrain draw probed (${BB.draws.length} seen)`);
      const jB = function(BB) {
          const jB = new Map;
          for (const QB of BB) {
            const BB = jB.get(QB.group);
            BB ? BB.push(QB) : jB.set(QB.group, [QB])
          }
          const zB = {
            vertices: BB.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [QB, nB] of jB) {
            const BB = new Map,
              jB = nB.map((jB => {
                const zB = aB(jB.record, jB.slot),
                  QB = [jB.gpu[0] - zB[0], jB.gpu[1] - zB[1], jB.gpu[2] - zB[2]],
                  nB = QB.map((BB => Math.round(64 * BB))).join(","),
                  dB = BB.get(nB);
                return dB ? dB.count++ : BB.set(nB, {
                  count: 1,
                  offset: QB
                }), zB
              }));
            let dB = [0, 0, 0],
              IB = 0;
            for (const zB of BB.values()) zB.count > IB && (IB = zB.count, dB = zB.offset);
            zB.translations.set(QB, dB), nB.forEach(((BB, QB) => {
              var nB;
              const IB = [jB[QB][0] + dB[0], jB[QB][1] + dB[1], jB[QB][2] + dB[2]];
              if (IB.every(((jB, zB) => {
                  return QB = BB.gpu[zB], nB = jB, Math.abs(QB - nB) <= Math.max(.001, 1e-6 * Math.abs(nB));
                  var QB, nB
                }))) return;
              zB.mismatches++, zB.byDirection[NB(BB.record[2])]++, zB.byDiagonal[uB(BB.record[2])]++;
              const UB = pB(BB.record);
              zB.byBand[UB] = (null !== (nB = zB.byBand[UB]) && void 0 !== nB ? nB : 0) + 1, zB.first.length < rB && zB.first.push({
                ...BB,
                expected: IB
              })
            }))
          }
          return zB
        }(BB.vertices),
        zB = jB.byDirection.map(((BB, jB) => BB ? `${IB[jB]} ${BB}` : "")).filter(Boolean).join(" "),
        QB = Object.entries(jB.byBand).map((BB => {
          let [jB, zB] = BB;
          return `${jB}: ${zB}`
        })).join(" ");
      if (PB(`decode probe (${BB.reason}): ${jB.mismatches}/${jB.vertices} vertices differ from the CPU decode over ${BB.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (jB.mismatches ? ` by direction [${zB}] diagonal [0: ${jB.byDiagonal[0]} 1: ${jB.byDiagonal[1]}] extent [${QB}]` : "")), BB.fed.records > 0 || BB.fed.failed > 0) {
        PB(`decode probe input: ${BB.fed.differing}/${BB.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (BB.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (BB.fed.failed ? `; the feed failed on ${BB.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const jB of BB.fed.first) PB(`  ${jB}`)
      }
      for (const nB of jB.first) {
        const [BB, jB, zB] = nB.record;
        PB(`  mismatch part ${nB.group} r0 ${BB.toString(16)} r1 ${jB.toString(16)} r2 ${zB.toString(16)} slot ${nB.slot} (${IB[NB(zB)]}): expected ${nB.expected.map(dj).join(",")} gpu ${nB.gpu.map(dj).join(",")}`)
      }
      WB(`decode probe translations: ${[...jB.translations].map((BB=>{let[jB,zB]=BB;return`${jB}: ${zB.map(dj).join(",")}`})).join("; ")}`)
    }

    function nj(BB) {
      return BB.toString(16)
    }

    function dj(BB) {
      return Number.isInteger(BB) ? String(BB) : BB.toFixed(3)
    }

    function Ij(BB) {
      return null !== YB.pendingCheck ? Promise.resolve() : new Promise((jB => {
        let zB = !1;
        const QB = {
          reason: BB,
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
        YB.pendingCheck = QB;
        const nB = () => {
            YB.pendingCheck = null;
            try {
              ! function(BB) {
                PB(`draw ranges (${BB.reason}): ${BB.terrainDraws} terrain draws in the frame, the first ${BB.draws.length} here`);
                for (const jB of BB.draws) {
                  const BB = jB.gy.slice(0, 8).map((BB => {
                      let [jB, zB] = BB;
                      return `${jB}+${zB}`
                    })).join(" "),
                    zB = jB.gy.length > 8 ? ` (+${jB.gy.length-8} ranges)` : "";
                  PB(`  ${oB(jB.program)} ${jB.program.terrain} ${jB.call} ${BB}${zB} x${jB.instances}${jB.group>=0?` part ${jB.group} chunk ${jB.chunk}`:""} | ${jB.attributes.join(" | ")}`)
                }
              }(QB), Qj(QB);
              QB.draws.some((BB => "undefined" !== typeof WebGL2RenderingContext && BB.gl instanceof WebGL2RenderingContext)) || 0 === QB.draws.length ? function(BB) {
                const jB = [],
                  zB = new Map;
                for (const QB of BB)
                  if ("undefined" !== typeof WebGL2RenderingContext && QB.gl instanceof WebGL2RenderingContext)
                    for (const BB of QB.pages) zB.set("buf" === BB.kind ? BB.buffer : BB.texture, {
                      page: BB,
                      gl: QB.gl
                    });
                for (const [QB, {
                    page: nB,
                    gl: dB
                  }] of zB) {
                  const BB = DB.get(QB);
                  if (!BB) {
                    jB.push(`${nB.kind}#${XB(QB)}: no CPU copy (${YB.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === nB.kind) {
                    jB.push(zj(`buf#${BB.id}`, BB, bB(dB, nB.buffer, 0, BB.bytes.length)));
                    continue
                  }
                  const zB = jj(dB, nB.texture, BB.width, 0, BB.width * BB.height),
                    IB = 16 === BB.texelBytes ? new Uint8Array(zB.buffer) : new Uint8Array(new Uint16Array(zB).buffer);
                  jB.push(zj(`tex#${BB.id} (${16===BB.texelBytes?"records":"light"})`, BB, IB))
                }
                for (const QB of jB) PB(`page readback ${QB}`)
              }(QB.draws) : PB("page readback: none on WebGL1 (no buffer readback)")
            } catch (BB) {
              PB(`check failed: ${String(BB)}`)
            }
            jB()
          },
          dB = () => {
            if (QB.draws.length > 0 && !zB) return zB = !0, void setTimeout(nB, 0);
            zB || requestAnimationFrame(dB)
          };
        requestAnimationFrame(dB), setTimeout((() => {
          zB || (zB = !0, nB())
        }), 5e3)
      }))
    }
    var Nj = zB(4782);
    const uj = 20,
      Uj = 24,
      aj = Reflect.apply;

    function pj(BB, jB, zB) {
      if (!BB) return;
      const QB = BB[jB];
      if ("function" === typeof QB) {
        const nB = zB(QB);
        BB[jB] = nB, (0, Nj.r)(nB, QB)
      }
    }
    let rj = !1;
    const sj = new WeakMap,
      Jj = new WeakMap,
      mj = new WeakMap,
      yj = {
        gl: 0,
        lost: 0
      };
    let kj = {
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
      Gj = {
        buffer: 0,
        texture: 0
      },
      Lj = 0;

    function gj(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (BB instanceof ArrayBuffer) return new Uint8Array(BB, jB, zB || void 0);
      if (!ArrayBuffer.isView(BB)) return null;
      const QB = "BYTES_PER_ELEMENT" in BB ? BB.BYTES_PER_ELEMENT : 1,
        nB = BB.byteOffset + jB * QB,
        dB = zB ? zB * QB : BB.byteLength - jB * QB;
      return new Uint8Array(BB.buffer, nB, Math.max(0, dB))
    }

    function tj(BB, jB) {
      const zB = function(BB) {
        switch (BB) {
          case mB.ARRAY_BUFFER:
            return mB.ARRAY_BUFFER_BINDING;
          case mB.ELEMENT_ARRAY_BUFFER:
            return mB.ELEMENT_ARRAY_BUFFER_BINDING;
          case mB.COPY_READ_BUFFER:
            return mB.COPY_READ_BUFFER_BINDING;
          case mB.COPY_WRITE_BUFFER:
            return mB.COPY_WRITE_BUFFER_BINDING;
          case mB.UNIFORM_BUFFER:
            return mB.UNIFORM_BUFFER_BINDING;
          case mB.PIXEL_UNPACK_BUFFER:
            return mB.PIXEL_UNPACK_BUFFER_BINDING;
          case mB.TRANSFORM_FEEDBACK_BUFFER:
            return mB.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(jB);
      return zB ? BB.getParameter(zB) : null
    }

    function Sj(BB) {
      const jB = DB.get(BB);
      jB && (YB.shadowBytes -= jB.bytes.length, DB.delete(BB))
    }

    function Mj(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Sj(BB), YB.shadowBytes + jB > iB ? YB.uncopied++ : (YB.shadowBytes += jB, DB.set(BB, {
        id: XB(BB),
        bytes: new Uint8Array(jB),
        width: zB,
        height: QB,
        texelBytes: nB,
        missed: 0
      }))
    }

    function Ej(BB, jB) {
      for (const zB of ["deleteBuffer", "deleteTexture"]) pj(BB, zB, (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        return zB[0] && Sj(zB[0]), aj(BB, this, zB)
      }));
      pj(BB, "shaderSource", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        return zB[0] && "string" === typeof zB[1] && sj.set(zB[0], zB[1]), aj(BB, this, zB)
      })), pj(BB, "attachShader", (BB => function() {
        for (var jB, zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
        const dB = QB[0],
          IB = null !== (jB = Jj.get(dB)) && void 0 !== jB ? jB : [];
        return IB.push(QB[1]), Jj.set(dB, IB), aj(BB, this, QB)
      })), pj(BB, "linkProgram", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        const nB = aj(BB, this, zB);
        return YB.inProbe || function(BB, jB) {
          var zB, QB, nB;
          "undefined" !== typeof HTMLCanvasElement && BB.canvas instanceof HTMLCanvasElement && function(BB) {
            if (Dj.has(BB)) return;
            Dj.add(BB);
            for (const jB of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) BB.addEventListener(jB, (BB => {
              yj.lost < uj && (yj.lost++, PB(`${jB}${"statusMessage"in BB?`: ${String(BB.statusMessage)}`:""}`))
            }))
          }(BB.canvas);
          YB.context ??= BB;
          const dB = null !== (zB = Jj.get(jB)) && void 0 !== zB ? zB : [];
          let IB = "",
            NB = "";
          for (const aB of dB) {
            var uB;
            const BB = null !== (uB = sj.get(aB)) && void 0 !== uB ? uB : "";
            /\bgl_Position\b/.test(BB) ? IB = BB : NB = BB
          }
          const UB = {
            id: XB(jB),
            name: null !== (QB = null === (nB = fB.exec(IB)) || void 0 === nB ? void 0 : nB[1]) && void 0 !== QB ? QB : null,
            gl: BB,
            vertex: IB,
            fragment: NB,
            terrain: qj(IB),
            checked: !1,
            firstDraw: !1
          };
          if (mj.set(jB, UB), HB.push([jB, UB]), null !== UB.terrain) {
            const jB = dB.map((jB => {
              var zB;
              return null !== (zB = BB.getShaderInfoLog(jB)) && void 0 !== zB ? zB : ""
            })).filter((BB => "" !== BB.trim()));
            jB.length > 0 && WB(`program ${oB(UB)} (${UB.terrain}) shader logs:\n${eB(jB.join("\n"))}`)
          }
        }(this, zB[0]), nB
      })), pj(BB, "bufferData", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        const nB = aj(BB, this, zB);
        if (!YB.inProbe) {
          const BB = tj(this, zB[0]);
          if (BB) {
            var dB, IB, NB;
            const jB = "number" === typeof zB[1] ? null : gj(zB[1], null !== (dB = zB[3]) && void 0 !== dB ? dB : 0, null !== (IB = zB[4]) && void 0 !== IB ? IB : 0);
            var uB;
            if (Mj(BB, "number" === typeof zB[1] ? zB[1] : null !== (NB = null === jB || void 0 === jB ? void 0 : jB.length) && void 0 !== NB ? NB : 0), jB) null === (uB = DB.get(BB)) || void 0 === uB || uB.bytes.set(jB)
          }
        }
        return nB
      })), pj(BB, "bufferSubData", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        const nB = aj(BB, this, zB);
        if (!YB.inProbe) {
          var dB, IB;
          const BB = tj(this, zB[0]),
            jB = BB ? DB.get(BB) : void 0,
            QB = gj(zB[2], null !== (dB = zB[3]) && void 0 !== dB ? dB : 0, null !== (IB = zB[4]) && void 0 !== IB ? IB : 0);
          if (jB && QB) {
            const BB = zB[1];
            jB.bytes.set(QB.subarray(0, Math.max(0, jB.bytes.length - BB)), BB), ij("buffer", jB, BB, QB.length)
          }
        }
        return nB
      })), jB && (pj(BB, "copyBufferSubData", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        const nB = aj(BB, this, zB);
        if (!YB.inProbe) {
          const [BB, jB, QB, nB, dB] = zB, IB = tj(this, BB), NB = tj(this, jB), uB = IB ? DB.get(IB) : void 0, UB = NB ? DB.get(NB) : void 0;
          UB && (uB ? UB.bytes.set(uB.bytes.slice(QB, QB + dB), nB) : UB.missed++)
        }
        return nB
      })), pj(BB, "texStorage2D", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        const nB = aj(BB, this, zB),
          [, , dB, IB, NB] = zB;
        if (!YB.inProbe && (dB === mB.RGBA32UI || dB === mB.RGBA16UI)) {
          const BB = this.getParameter(mB.TEXTURE_BINDING_2D),
            jB = dB === mB.RGBA32UI ? 16 : 8;
          BB && (FB.set(BB, jB), Mj(BB, IB * NB * jB, IB, NB, jB))
        }
        return nB
      })), pj(BB, "texSubImage2D", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        const nB = aj(BB, this, zB);
        return !YB.inProbe && zB.length >= 9 && zB[0] === mB.TEXTURE_2D && 0 === zB[1] && function(BB, jB) {
          var zB;
          const QB = BB.getParameter(mB.TEXTURE_BINDING_2D),
            nB = QB ? DB.get(QB) : void 0;
          if (!nB) return;
          const [, , dB, IB, NB, uB] = jB;
          let UB = gj(jB[8], null !== (zB = jB[9]) && void 0 !== zB ? zB : 0);
          if (null === UB && "number" === typeof jB[8]) {
            const zB = tj(BB, mB.PIXEL_UNPACK_BUFFER),
              QB = zB ? DB.get(zB) : void 0;
            UB = QB ? QB.bytes.subarray(jB[8]) : null
          }
          if (null === UB) return void nB.missed++;
          const aB = BB.getParameter(mB.UNPACK_ROW_LENGTH) || NB,
            pB = BB.getParameter(mB.UNPACK_SKIP_ROWS),
            rB = BB.getParameter(mB.UNPACK_SKIP_PIXELS),
            sB = nB.texelBytes;
          for (let JB = 0; JB < uB; JB++) {
            const BB = ((pB + JB) * aB + rB) * sB,
              jB = ((IB + JB) * nB.width + dB) * sB;
            nB.bytes.set(UB.subarray(BB, BB + NB * sB), jB)
          }
          ij("texture", nB, (IB * nB.width + dB) * sB, NB * uB * sB)
        }(this, zB), nB
      })), pj(BB, "copyTexSubImage2D", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        const nB = zB[0] === mB.TEXTURE_2D ? this.getParameter(mB.TEXTURE_BINDING_2D) : null,
          dB = nB ? DB.get(nB) : void 0;
        return dB && dB.missed++, aj(BB, this, zB)
      })));
      for (const zB of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) pj(BB, zB, (BB => function() {
        for (var jB = arguments.length, QB = new Array(jB), nB = 0; nB < jB; nB++) QB[nB] = arguments[nB];
        const dB = aj(BB, this, QB);
        return YB.inProbe || oj(this, zB, QB), dB
      }));
      pj(BB, "getExtension", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        const nB = aj(BB, this, zB);
        return nB && "object" === typeof nB && function(BB, jB, zB) {
          const QB = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(jB in QB) || zB.bloxdRenderDebug) return;
          zB.bloxdRenderDebug = !0;
          for (const nB of QB[jB]) {
            const jB = zB[nB];
            "function" === typeof jB && (zB[nB] = function() {
              for (var QB = arguments.length, dB = new Array(QB), IB = 0; IB < QB; IB++) dB[IB] = arguments[IB];
              const NB = aj(jB, zB, dB);
              return YB.inProbe || oj(BB, nB, dB), NB
            })
          }
        }(this, zB[0], nB), nB
      }))
    }

    function ij(BB, jB, zB, QB) {
      Gj[BB] += QB, Lj < 32 && jB.bytes.length >= 1 << 20 && (Lj++, WB(`upload ${BB} #${jB.id} +${zB} ${QB} B`))
    }

    function qj(BB) {
      if (!BB.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(BB) || /in uvec3 _p2vs_location0\b/.test(BB) ? "inst" : "tex"
    }

    function fj(BB, jB, zB) {
      var QB;
      if (zB.checked) return;
      zB.checked = !0;
      const nB = BB.getProgramParameter(jB, mB.LINK_STATUS),
        dB = (null !== (QB = BB.getProgramInfoLog(jB)) && void 0 !== QB ? QB : "").trim();
      var IB;
      null === zB.terrain && nB || (PB(`program ${oB(zB)} ${null!==(IB=zB.terrain)&&void 0!==IB?IB:"other"} link ${nB?"ok":"FAILED"}${dB?`: ${eB(dB,300)}`:""}`), dB && WB(`program ${oB(zB)} link log:\n${eB(dB)}`))
    }

    function oj(BB, jB, zB) {
      var QB;
      const nB = BB.getParameter(mB.CURRENT_PROGRAM),
        dB = nB ? mj.get(nB) : void 0;
      if (!nB || !dB) return;
      const IB = null !== (QB = dB.terrain) && void 0 !== QB ? QB : "other",
        {
          gy: NB,
          instances: uB
        } = function(BB, jB) {
          switch (BB) {
            case "drawArrays":
              return {
                gy: [
                  [jB[1], jB[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                gy: [
                  [jB[1], jB[2]]
                ], instances: jB[3]
              };
            case "drawElements":
              return {
                gy: [
                  [0, jB[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                gy: [
                  [0, jB[1]]
                ], instances: jB[4]
              };
            case "multiDrawArraysWEBGL": {
              const BB = jB[1],
                zB = jB[3],
                QB = jB[2],
                nB = jB[4],
                dB = [];
              for (let IB = 0; IB < jB[5]; IB++) dB.push([BB[QB + IB], zB[nB + IB]]);
              return {
                gy: dB,
                instances: 1
              }
            }
            default:
              return {
                gy: [], instances: 0
              }
          }
        }(jB, zB),
        UB = "inst" === dB.terrain ? uB : NB.reduce(((BB, jB) => {
          let [, zB] = jB;
          return BB + zB
        }), 0) / 6;
      if (kj[IB].draws++, kj[IB].faces += UB, null === dB.terrain) return;
      if (YB.context = BB, !dB.firstDraw) {
        dB.firstDraw = !0, fj(BB, nB, dB), Hj || (Hj = !0, PB(function(BB) {
          var jB;
          const zB = BB.getParameter(mB.DEPTH_FUNC),
            QB = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let nB = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in BB && BB.getParameter(mB.DRAW_FRAMEBUFFER_BINDING)) {
            const jB = BB;
            nB = jB.getFramebufferAttachmentParameter(mB.DRAW_FRAMEBUFFER, mB.DEPTH_ATTACHMENT, mB.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(jB.getFramebufferAttachmentParameter(mB.DRAW_FRAMEBUFFER,mB.DEPTH_ATTACHMENT,mB.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(jB.getFramebufferAttachmentParameter(mB.DRAW_FRAMEBUFFER,mB.DEPTH_ATTACHMENT,mB.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const dB = BB.getParameter(mB.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(jB=QB[zB])&&void 0!==jB?jB:`0x${zB.toString(16)}`} clear ${dB}${516===zB||518===zB?" (reverse-Z)":""}, samples ${String(BB.getParameter(mB.SAMPLES))}, ${nB}`
        }(BB)));
        const zB = BB.getError();
        zB !== mB.NO_ERROR && yj.gl < uj && (yj.gl++, PB(`GL error 0x${zB.toString(16)} after program ${oB(dB)}'s first terrain draw (${jB})`))
      }
      const aB = YB.pendingCheck;
      null !== aB && (aB.terrainDraws++, aB.draws.length < Uj && lB(BB, nB, dB, jB, NB, uB))
    }
    let Hj = !1;
    const Dj = new WeakSet;
    var Fj = zB(4635),
      Yj = zB(4786);
    const Vj = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let hj = !1;
    const Xj = new WeakSet,
      Zj = new WeakMap,
      Aj = new WeakMap,
      Tj = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let Pj = 0,
      Wj = !1,
      ej = null,
      lj = {
        draws: 0,
        faces: 0
      };

    function wj(BB) {
      const jB = globalThis[BB];
      return null === jB || void 0 === jB ? void 0 : jB.prototype
    }

    function xj(BB) {
      return BB && "function" === typeof BB[Symbol.iterator] ? [...BB].sort().join(" ") : ""
    }

    function Kj(BB, jB) {
      const zB = null !== BB && void 0 !== BB ? BB : {},
        QB = null !== jB && void 0 !== jB ? jB : Object.keys(Object.getPrototypeOf(zB)).concat(Object.keys(zB));
      return [...new Set(QB)].filter((BB => "number" === typeof zB[BB])).map((BB => `${BB} ${String(zB[BB])}`)).join(", ")
    }

    function Cj(BB, jB) {
      var zB;
      const QB = null !== (zB = jB.vertex) && void 0 !== zB ? zB : {};
      if (QB.module && Xj.has(QB.module)) {
        var nB;
        const zB = String(null !== (nB = QB.entryPoint) && void 0 !== nB ? nB : "");
        if (zB.startsWith("vs_packed") && Zj.set(BB, zB), !Wj) {
          var dB, IB, NB, uB, UB;
          Wj = !0;
          const BB = null !== (dB = jB.depthStencil) && void 0 !== dB ? dB : {},
            QB = null !== (IB = jB.multisample) && void 0 !== IB ? IB : {},
            nB = String(null !== (NB = BB.depthCompare) && void 0 !== NB ? NB : "");
          PB(`WebGPU terrain pipeline ${zB}: depth ${String(null!==(uB=BB.format)&&void 0!==uB?uB:"none")} ${nB}${nB.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(UB=QB.count)&&void 0!==UB?UB:1)}`)
        }
      }
    }

    function cj(BB) {
      pj(BB, "setPipeline", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        return Aj.set(this, zB[0]), aj(BB, this, zB)
      }));
      for (const jB of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) pj(BB, jB, (BB => function() {
        const zB = Aj.get(this),
          QB = zB ? Zj.get(zB) : void 0;
        for (var nB = arguments.length, dB = new Array(nB), IB = 0; IB < nB; IB++) dB[IB] = arguments[IB];
        return void 0 !== QB && bj(jB, QB, dB), aj(BB, this, dB)
      }))
    }

    function bj(BB, jB, zB) {
      var QB;
      (lj.draws++, "draw" === BB || "drawIndexed" === BB) && (lj.faces += zB[0] * (null !== (QB = zB[1]) && void 0 !== QB ? QB : 1) / 6);
      if (null !== ej && ej.length < Uj) {
        const QB = ("draw" === BB ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === BB ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((jB, QB) => {
          const nB = BB.endsWith("Indirect") ? zB[1] : zB[QB];
          return `${jB} ${String(null!==nB&&void 0!==nB?nB:"instances"===jB?1:0)}`
        }));
        ej.push(`  ${jB} ${BB} ${QB.join(" ")}`)
      }
    }

    function vj() {
      if (hj || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      hj = !0, pj(wj("GPU"), "requestAdapter", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        return aj(BB, this, zB).then((BB => {
          var jB;
          BB ? function(BB) {
            var jB;
            const zB = null !== (jB = BB.info) && void 0 !== jB ? jB : {};
            PB(`WebGPU adapter ${["vendor","architecture","device","description"].map((BB=>{var jB;return`${BB} "${String(null!==(jB=zB[BB])&&void 0!==jB?jB:"")}"`})).join(" ")}${BB.isFallbackAdapter?" (fallback)":""}`), PB(`WebGPU adapter features ${xj(BB.features)}`), PB(`WebGPU adapter limits ${Kj(BB.limits,Vj)}`), WB(`WebGPU adapter all limits ${Kj(BB.limits,null)}`)
          }(BB) : PB(`WebGPU requestAdapter(${JSON.stringify(null!==(jB=zB[0])&&void 0!==jB?jB:{})}) gave none`);
          return BB
        }))
      })), pj(wj("GPUAdapter"), "requestDevice", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        return aj(BB, this, zB).then((BB => (function(BB) {
          PB(`WebGPU device features ${xj(BB.features)}`), PB(`WebGPU device limits ${Kj(BB.limits,Vj)}`), BB.addEventListener("uncapturederror", (BB => {
            if (Tj.uncaptured < uj) {
              var jB, zB, QB;
              Tj.uncaptured++;
              const nB = BB.error;
              PB(`WebGPU uncaptured ${null!==(jB=null===nB||void 0===nB||null===(zB=nB.constructor)||void 0===zB?void 0:zB.name)&&void 0!==jB?jB:"error"}: ${eB(String(null!==(QB=null===nB||void 0===nB?void 0:nB.message)&&void 0!==QB?QB:""),600)}`)
            }
          }));
          const jB = BB.lost;
          null === jB || void 0 === jB || jB.then((BB => {
            var jB;
            PB(`WebGPU device lost (${String(BB.reason)}): ${eB(String(null!==(jB=BB.message)&&void 0!==jB?jB:""),600)}`)
          }))
        }(BB), BB)), (BB => {
          throw PB(`WebGPU requestDevice failed: ${String(BB)}`), BB
        }))
      }));
      const BB = wj("GPUDevice");
      pj(BB, "createShaderModule", (BB => function() {
        for (var jB, zB, QB = arguments.length, nB = new Array(QB), dB = 0; dB < QB; dB++) nB[dB] = arguments[dB];
        const IB = aj(BB, this, nB);
        return function(BB, jB) {
          const zB = jB.includes("decodeQuad");
          zB && Xj.add(BB);
          const QB = BB.getCompilationInfo;
          null === QB || void 0 === QB || QB.call(BB).then((BB => {
            if (0 === BB.messages.length && !zB) return;
            const jB = {};
            for (const zB of BB.messages) {
              var QB;
              jB[String(zB.type)] = (null !== (QB = jB[String(zB.type)]) && void 0 !== QB ? QB : 0) + 1
            }
            const nB = BB.messages.map((BB => `${String(BB.type)} ${String(BB.lineNum)}:${String(BB.linePos)} ${String(BB.message)}`)).join("\n");
            Tj.compile < uj && (Tj.compile++, PB(`WebGPU ${zB?"terrain ":""}shader module compiled: ${JSON.stringify(jB)}${nB?` first: ${eB(nB.split("\n")[0],300)}`:""}`)), nB && WB(`WebGPU shader module messages:\n${eB(nB)}`)
          }))
        }(IB, String(null !== (jB = (null !== (zB = nB[0]) && void 0 !== zB ? zB : {}).code) && void 0 !== jB ? jB : "")), IB
      })), pj(BB, "createRenderPipeline", (BB => function() {
        for (var jB, zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
        const dB = aj(BB, this, QB);
        return Cj(dB, null !== (jB = QB[0]) && void 0 !== jB ? jB : {}), dB
      })), pj(BB, "createRenderPipelineAsync", (BB => function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        return aj(BB, this, zB).then((BB => {
          var jB;
          return Cj(BB, null !== (jB = zB[0]) && void 0 !== jB ? jB : {}), BB
        }), (BB => {
          var jB;
          throw function(BB, jB) {
            var zB, QB, nB;
            if (Tj.rejected >= uj) return;
            Tj.rejected++;
            const {
              reason: dB,
              message: IB
            } = null !== jB && void 0 !== jB ? jB : {}, NB = String(null !== (zB = (null !== (QB = BB.vertex) && void 0 !== QB ? QB : {}).entryPoint) && void 0 !== zB ? zB : "");
            PB(`WebGPU pipeline "${String(null!==(nB=BB.label)&&void 0!==nB?nB:"")}" ${NB} rejected (${String(null!==dB&&void 0!==dB?dB:"no reason")}): ${eB(String(null!==IB&&void 0!==IB?IB:jB),600)}`)
          }(null !== (jB = zB[0]) && void 0 !== jB ? jB : {}, BB), BB
        }))
      })), pj(wj("GPUCanvasContext"), "configure", (BB => function() {
        for (var jB, zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
        const dB = null !== (jB = QB[0]) && void 0 !== jB ? jB : {};
        var IB, NB;
        Pj++ < 3 && PB(`WebGPU canvas ${String(dB.format)} ${String(null!==(IB=dB.colorSpace)&&void 0!==IB?IB:"srgb")} alpha ${String(null!==(NB=dB.alphaMode)&&void 0!==NB?NB:"opaque")}`);
        return aj(BB, this, QB)
      })), cj(wj("GPURenderPassEncoder")), cj(wj("GPURenderBundleEncoder"))
    }
    const Rj = 1e4,
      Oj = 6e4,
      Bz = 5e3,
      jz = 3e3,
      zz = 100;
    let Qz = null,
      nz = !1,
      dz = {
        ...Fj.c
      },
      Iz = !1,
      Nz = null,
      uz = 0,
      Uz = () => {};
    const az = new Promise((BB => {
      Uz = BB
    }));

    function pz() {
      var BB;
      nz || (nz = !0, dz = Object.assign(window.bloxdRenderDebug ??= {
        ...Fj.c
      }, {
        faceCull: "0" === (0, dB.o)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (BB = (0, dB.o)("adrenoProbe")) && void 0 !== BB ? BB : ""
      }), PB("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), rj || "undefined" === typeof window || (rj = !0, "undefined" !== typeof WebGL2RenderingContext && Ej(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && Ej(WebGLRenderingContext.prototype, !1)), vj(), (0, dB.d)("renderProbe", (() => {
        kz("console")
      })), mz(), setInterval(Lz, Bz))
    }

    function rz(BB) {
      var jB, zB;
      pz(), Qz = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.backend) && void 0 !== jB ? jB : null;
      const QB = `, renderer param ${null!==(zB=(0,dB.o)("renderer"))&&void 0!==zB?zB:"none"}, faceCull ${"0"===dz.faceCull?"off (whole parts)":"on"}, adrenoProbe ${dz.adrenoProbe||"none"}`;
      PB(`${(0,Yj.e)(BB)}${null===BB?"":QB}`)
    }

    function sz() {
      const BB = performance.now(),
        jB = Jz(az, Rj, Oj).then((jB => kz(`${Math.round((performance.now()-BB)/1e3)} s after playable${jB?"":", no terrain drawn yet"}`)));
      (0, nB.d)(PB, (async () => {
        await jB, await Nz
      }))
    }
    async function Jz(BB, jB, zB) {
      const nB = (0, QB.b)(zB).then((() => !1));
      return await (0, QB.b)(jB), Promise.race([BB.then((() => !0)), nB])
    }

    function mz() {
      requestAnimationFrame((() => {
        uz++, mz()
      }))
    }

    function yz() {
      var BB, jB, zB;
      if (Iz) return;
      (Iz = !0, PB(`renderer caps ${null!==(BB=dz.caps)&&void 0!==BB?BB:"(not noted)"}; terrain fetch ${null!==(jB=dz.fetch)&&void 0!==jB?jB:"(not noted)"}`), dz.adrenoProbe) && PB(`adrenoProbe ${dz.adrenoProbe} asked; in force (storage fetch only): ${null!==(zB=dz.probe)&&void 0!==zB?zB:"(not noted)"}`);
      const QB = YB.context;
      if (QB) {
        for (const BB of function(BB) {
            var jB;
            const zB = [],
              QB = BB.getExtension("WEBGL_debug_renderer_info"),
              nB = QB ? BB.getParameter(QB.UNMASKED_VENDOR_WEBGL) : "(masked)",
              dB = QB ? BB.getParameter(QB.UNMASKED_RENDERER_WEBGL) : "(masked)";
            zB.push(`GL ${String(BB.getParameter(BB.VERSION))} | ${String(BB.getParameter(BB.SHADING_LANGUAGE_VERSION))} | ${String(BB.getParameter(BB.VENDOR))} / ${String(BB.getParameter(BB.RENDERER))}`), zB.push(`GL unmasked ${nB} / ${dB}`);
            const IB = [
              ["MAX_TEXTURE_SIZE", BB.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", BB.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", BB.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", BB.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", BB.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", BB.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", BB.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in BB && IB.push(["MAX_UNIFORM_BLOCK_SIZE", BB.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", BB.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", BB.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", BB.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), zB.push(`GL limits ${IB.map((jB=>{let[zB,QB]=jB;return`${zB} ${String(BB.getParameter(QB))}`})).join(", ")}`);
            const NB = (jB, zB) => {
              const QB = BB.getShaderPrecisionFormat(jB, BB.HIGH_FLOAT),
                nB = BB.getShaderPrecisionFormat(jB, BB.HIGH_INT);
              return `${zB} highp float ${QB?`${QB.rangeMin}/${QB.rangeMax}/${QB.precision}`:"?"} int ${nB?`${nB.rangeMin}/${nB.rangeMax}/${nB.precision}`:"?"}`
            };
            zB.push(`GL precision ${NB(BB.VERTEX_SHADER,"VS")}, ${NB(BB.FRAGMENT_SHADER,"FS")}`);
            const uB = BB.getContextAttributes();
            return zB.push(`GL context ${JSON.stringify(uB)} drawingBuffer ${BB.drawingBufferWidth}x${BB.drawingBufferHeight}${"drawingBufferFormat"in BB?` format 0x${Number(BB.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in BB?` ${String(BB.drawingBufferColorSpace)}`:""}`), zB.push(`GL extensions ${(null!==(jB=BB.getSupportedExtensions())&&void 0!==jB?jB:[]).join(" ")}`), zB
          }(QB)) PB(BB);
        ! function() {
          if (!YB.context) return;
          let BB = 0,
            jB = 0;
          for (const [zB, QB] of HB) !QB.gl.isContextLost() && QB.gl.isProgram(zB) && (jB++, fj(QB.gl, zB, QB), null !== QB.terrain && BB++);
          PB(`programs: ${jB} live of ${HB.length} linked, ${BB} packed terrain; CPU page copies ${Math.round(YB.shadowBytes/1048576)} MiB (${YB.uncopied} over budget)`)
        }()
      }
    }

    function kz(BB) {
      return Nz ??= async function(BB) {
        yz(), "webgpu" === Qz ? (Gz(), "1" === dz.slotCheck && PB("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), dz.slotCheck = "1", await
          function(BB) {
            if (null !== ej) return Promise.resolve();
            const jB = [];
            return ej = jB, new Promise((zB => {
              setTimeout((() => {
                ej = null, PB(`WebGPU draw ranges (${BB}): ${jB.length} terrain draws recorded in a second (first ${Uj}; bundles replay without new ones)`);
                for (const BB of jB) PB(BB);
                zB()
              }), 1e3)
            }))
          }(BB), await async function() {
            if (await (0, Fj.g)(dz, "slotCheck", ["1"], jz, zz), "1" === dz.slotCheck) return void PB(`slot check: no answer in ${jz} ms (only the storage fetch has one; a later answer logs on its own)`);
            Gz()
          }()) : await Ij(BB);
        PB(`check (${BB}) done: bloxdDebug.save() downloads it all`)
      }(BB).catch((jB => {
        PB(`check (${BB}) failed: ${String(jB)}`)
      })).finally((() => {
        Nz = null
      })), Nz
    }

    function Gz() {
      void 0 !== dz.slotCheck && "1" !== dz.slotCheck && (PB(dz.slotCheck), delete dz.slotCheck)
    }

    function Lz() {
      const BB = BB => uz ? (BB / uz).toFixed(1) : "0",
        jB = function() {
          const BB = lj;
          return lj = {
            draws: 0,
            faces: 0
          }, BB
        }(),
        zB = function() {
          const BB = kj;
          return kj = {
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
          }, BB
        }(),
        QB = function() {
          const BB = Gj;
          return Gj = {
            buffer: 0,
            texture: 0
          }, BB
        }();
      Gz(), ("webgpu" === Qz ? jB.draws : zB.inst.draws + zB.tex.draws) > 0 && Uz();
      const nB = "webgpu" === Qz ? [`terrain ${BB(jB.draws)} draws ${BB(jB.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((BB => zB[BB].draws > 0)).map((jB => `${jB} ${BB(zB[jB].draws)} draws ${BB(zB[jB].faces)} faces a frame`));
      PB(`${uz} frames: ${nB.join(", ")||"no draws"}; uploaded ${Math.round(QB.buffer/1024)} KiB to buffers, ${Math.round(QB.texture/1024)} KiB to data textures`), uz = 0
    }
  },
  4786: (BB, jB, zB) => {
    function QB(BB) {
      if (null === BB) return "backend: none picked (no renderer build)";
      const jB = BB.adapter ? `${BB.adapter.vendor}/${BB.adapter.architecture}` : "none";
      return `backend ${BB.backend}: reason ${BB.reason}, source ${BB.source}, adapter ${jB}`
    }
    zB.d(jB, {
      e: () => QB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);