export const id = 55;
export const ids = [55];
export const modules = {
  5174: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(1332),
      yV = xV(3142);
    const pV = 3e4,
      QV = 1e3;

    function nV() {
      return "visible" === document.visibilityState && "inGame" === JV.b.get("gameState") && (0, UV.r)()
    }

    function wV(VV, eV) {
      (0, yV.p)() || function(VV, eV, xV) {
        let JV = 0;
        const YV = setInterval((() => {
          eV() && (JV += QV, JV >= VV && (clearInterval(YV), xV()))
        }), QV)
      }(pV, nV, (() => {
        eV().then((() => {
          VV(`saved for the player after ${pV/1e3} s of play`), (0, yV.A)(), YV.h.QZ("chat", {
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
  5166: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      installRenderDebug: () => Zx,
      renderDebugPlayable: () => rx,
      startRenderDebug: () => vx,
      waitForDraw: () => kx
    });
    var JV = xV(1922),
      YV = xV(5174),
      UV = xV(3142);
    const yV = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function pV(VV) {
      return 7 & VV
    }

    function QV(VV) {
      return VV >>> 11 & 1
    }

    function nV(VV) {
      return [1 + (VV >>> 18 & 63), 1 + (VV >>> 24 & 63)]
    }

    function wV(VV, eV) {
      const [xV, , JV] = VV, YV = pV(JV), UV = function(VV, eV, xV) {
        return eV + (1 === (22 >>> VV & 1) ? 4 - xV : xV) & 3
      }(YV, QV(JV), eV), yV = YV >>> 1, [wV, ZV] = nV(xV), vV = 1 === UV || 2 === UV ? wV : 0, rV = UV >= 2 ? ZV : 0, kV = [63 & xV, xV >>> 6 & 63, xV >>> 12 & 63];
      return kV[2 === yV ? 0 : 2] += vV, kV[1 === yV ? 0 : 1] += rV, kV
    }

    function ZV(VV) {
      const eV = Math.max(...nV(VV[0]));
      return 1 === eV ? "1" : eV <= 4 ? "2-4" : eV <= 16 ? "5-16" : "17-64"
    }
    const vV = 16;

    function rV(VV) {
      let eV = 2166136261;
      for (let xV = 0; xV < VV.length; xV++) eV = Math.imul(eV ^ VV[xV], 16777619);
      return eV >>> 0
    }

    function kV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const JV = Math.max(0, eV - xV),
        YV = Math.min(VV.length, eV + xV),
        UV = [];
      for (let yV = JV; yV < YV; yV++) {
        const xV = VV[yV].toString(16).padStart(2, "0");
        UV.push(yV === eV ? `[${xV}]` : xV)
      }
      return UV.join(" ")
    }
    const bV = {
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
      EV = "_vs2fs_location0";
    const BV = 0,
      jV = 4,
      qV = 6,
      tV = [0, 1, 2, 0, 2, 3],
      FV = 2048,
      TV = 4,
      PV = 256,
      AV = 64,
      NV = 268435456,
      XV = 65536,
      MV = /^#version [^\n]*\/\/ program (\S+)$/m;

    function zV(VV) {
      return null === VV.name ? `#${VV.id}` : `#${VV.id} ${VV.name}`
    }
    const GV = [],
      WV = new WeakMap,
      RV = new WeakMap,
      gV = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let DV = 1;
    const iV = new WeakMap;

    function CV(VV) {
      if (null === VV) return 0;
      let eV = iV.get(VV);
      return void 0 === eV && (eV = DV++, iV.set(VV, eV)), eV
    }
    class aV {
      constructor(VV, eV) {
        this.print = VV, this.now = eV, this.shown = 0, this.hn = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.ZZ = [], this.dropped = 0
      }
      line(VV) {
        const eV = this.now();
        if (eV - this.second >= 1e3 && (this.second = eV, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.hn++, void this.store(VV);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${VV} (the last line here: the rest go to bloxdDebug.save())` : VV)
      }
      keep(VV) {
        this.sections++, this.store(VV)
      }
      store(VV) {
        this.ZZ.push(`${new Date(Date.now()).toISOString()} ${VV}`), this.ZZ.length > 2e4 && (this.ZZ.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.hn} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.ZZ].join("\n")
      }
    }
    let oV = null;

    function cV() {
      if (null === oV) {
        const VV = new aV((VV => {
          (0, UV.i)("render", VV)
        }), (() => performance.now()));
        (0, UV.h)("render", (() => VV.dump())), oV = VV
      }
      return oV
    }

    function hV(VV) {
      cV().line(VV)
    }

    function lV(VV) {
      cV().keep(VV)
    }

    function LV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return VV.length <= eV ? VV : `${VV.slice(0,eV)}... (${VV.length-eV} more characters)`
    }

    function fV(VV, eV, xV, JV, YV, UV) {
      const yV = gV.pendingCheck;
      if (null === yV) return;
      const pV = "undefined" !== typeof WebGL2RenderingContext && VV instanceof WebGL2RenderingContext,
        QV = {
          gl: VV,
          program: xV,
          call: JV,
          TE: YV,
          instances: UV,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (yV.draws.push(QV), pV) try {
        const JV = function(VV) {
          const eV = [],
            xV = new Map,
            JV = Math.min(16, VV.getParameter(bV.MAX_VERTEX_ATTRIBS));
          for (let YV = 0; YV < JV; YV++) {
            if (!VV.getVertexAttrib(YV, bV.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const JV = VV.getVertexAttrib(YV, bV.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              UV = VV.getVertexAttribOffset(YV, bV.VERTEX_ATTRIB_ARRAY_POINTER),
              yV = VV.getVertexAttrib(YV, bV.VERTEX_ATTRIB_ARRAY_STRIDE),
              pV = VV.getVertexAttrib(YV, bV.VERTEX_ATTRIB_ARRAY_SIZE),
              QV = VV.getVertexAttrib(YV, bV.VERTEX_ATTRIB_ARRAY_TYPE),
              nV = "VERTEX_ATTRIB_ARRAY_INTEGER" in VV && VV.getVertexAttrib(YV, bV.VERTEX_ATTRIB_ARRAY_INTEGER),
              wV = "VERTEX_ATTRIB_ARRAY_DIVISOR" in VV ? VV.getVertexAttrib(YV, bV.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            xV.set(YV, {
              buffer: JV,
              offset: UV,
              stride: yV
            }), eV.push(`@${YV} buf#${CV(JV)} +${UV} stride ${yV} ${pV}x0x${QV.toString(16)}${nV?" int":""} div ${wV}`)
          }
          return {
            lines: eV,
            byLocation: xV
          }
        }(VV);
        if (QV.attributes = JV.lines, "inst" === xV.terrain) {
          const {
            group: YV,
            chunk: pV
          } = function(VV, eV, xV) {
            const JV = eV.get(qV),
              YV = VV.getVertexAttrib(qV, bV.CURRENT_VERTEX_ATTRIB),
              UV = JV ? `+${JV.offset}` : YV ? Array.from(YV).slice(0, 3).join(",") : "?";
            let yV = xV.groups.get(UV);
            return void 0 === yV && (yV = xV.groups.size, xV.groups.set(UV, yV)), {
              group: yV,
              chunk: UV
            }
          }(VV, JV.byLocation, yV);
          QV.group = YV, QV.chunk = pV;
          for (const VV of [BV, jV]) {
            var nV;
            const eV = null === (nV = JV.byLocation.get(VV)) || void 0 === nV ? void 0 : nV.buffer;
            eV && QV.pages.push({
              kind: "buf",
              buffer: eV
            })
          }! function(VV, eV, xV, JV, YV, UV, yV) {
            const pV = JV.get(BV),
              QV = yV.parts.get(UV);
            if (void 0 === QV && yV.parts.size >= TV) return;
            const nV = Math.min(YV, AV, PV - (null !== QV && void 0 !== QV ? QV : 0));
            if (null === pV || void 0 === pV || !pV.buffer || nV <= 0) return;
            const wV = mV(VV, eV, xV);
            if (!wV) return;
            const ZV = pV.stride || 12,
              vV = SV(VV, pV.buffer, pV.offset, (nV - 1) * ZV + 12),
              rV = new DataView(vV.buffer),
              kV = function(VV, eV) {
                const xV = function(VV) {
                    const eV = OV.get(VV);
                    if (void 0 !== eV && (null === eV || VV.isProgram(eV))) return eV;
                    gV.inProbe = !0;
                    let xV = null;
                    try {
                      xV = KV(VV, IV, dV, "fed", "the record feed")
                    } finally {
                      gV.inProbe = !1
                    }
                    return OV.set(VV, xV), xV
                  }(VV),
                  JV = xV ? sV(VV, xV, eV, (() => {
                    VV.drawArraysInstanced(bV.POINTS, 0, 1, eV)
                  }), "decode probe input (the record feed)") : null;
                return JV ? new Uint32Array(JV.buffer) : null
              }(VV, nV);
            kV || yV.fed.failed++;
            const EV = sV(VV, wV, 4 * nV, (() => {
              VV.drawArraysInstanced(bV.POINTS, 0, 4, nV)
            }));
            if (!EV) return;
            yV.parts.set(UV, (null !== QV && void 0 !== QV ? QV : 0) + nV);
            for (let bV = 0; bV < nV; bV++) {
              const VV = bV * ZV,
                eV = [rV.getUint32(VV, !0), rV.getUint32(VV + 4, !0), rV.getUint32(VV + 8, !0)],
                xV = kV ? [kV[3 * bV], kV[3 * bV + 1], kV[3 * bV + 2]] : eV;
              kV && (yV.fed.records++, xV.some(((VV, xV) => VV !== eV[xV])) && (yV.fed.differing++, yV.fed.first.length < 8 && yV.fed.first.push(`part ${UV} instance ${bV}: fed ${xV.map(Ye).join(" ")} buffer ${eV.map(Ye).join(" ")}`)));
              for (let JV = 0; JV < 4; JV++) {
                const VV = 3 * (4 * bV + JV);
                yV.vertices.push({
                  record: xV,
                  slot: JV,
                  group: UV,
                  gpu: [EV[VV], EV[VV + 1], EV[VV + 2]]
                })
              }
            }
          }(VV, eV, xV, JV.byLocation, UV, YV, yV)
        } else {
          const JV = Ve(VV, eV, 16),
            UV = Ve(VV, eV, 8);
          for (const VV of [JV, UV]) VV && QV.pages.push({
            kind: "tex",
            texture: VV
          });
          JV && function(VV, eV, xV, JV, YV, UV) {
            if (UV.parts.size >= TV) return;
            const yV = mV(VV, eV, xV);
            if (!yV) return;
            let pV = 6 * PV;
            const QV = [];
            for (const [rV, kV] of YV) {
              const VV = Math.min(kV, pV, Math.max(6, 6 * Math.floor(PV / YV.length)));
              VV > 0 && (QV.push([rV, VV]), pV -= VV)
            }
            const nV = QV.reduce(((VV, eV) => {
                let [, xV] = eV;
                return VV + xV
              }), 0),
              wV = sV(VV, yV, nV, (() => {
                for (const [eV, xV] of QV) VV.drawArrays(bV.POINTS, eV, xV)
              }));
            if (!wV) return;
            let ZV = 0;
            for (const [rV, kV] of QV) {
              const eV = Math.floor(rV / 6),
                xV = Math.floor((rV + kV - 1) / 6) - eV + 1,
                YV = ee(VV, JV, FV, eV, xV);
              for (let VV = rV; VV < rV + kV; VV++, ZV++) {
                var vV;
                const xV = 4 * (Math.floor(VV / 6) - eV),
                  JV = [YV[xV], YV[xV + 1], YV[xV + 2]];
                UV.parts.set(YV[xV + 3], (null !== (vV = UV.parts.get(YV[xV + 3])) && void 0 !== vV ? vV : 0) + (VV % 6 === 0 ? 1 : 0)), UV.vertices.push({
                  record: JV,
                  slot: tV[VV % 6],
                  group: YV[xV + 3],
                  gpu: [wV[3 * ZV], wV[3 * ZV + 1], wV[3 * ZV + 2]]
                })
              }
            }
          }(VV, eV, xV, JV, YV, yV)
        }
      } catch (wV) {
        hV(`decode probe failed on program ${zV(xV)}: ${String(wV)}`)
      }
    }

    function mV(VV, eV, xV) {
      if (void 0 !== xV.probe) return xV.probe && HV(VV, eV, xV.probe), xV.probe;
      xV.probe = null, gV.inProbe = !0;
      try {
        xV.probe = function(VV, eV) {
          return KV(VV, (xV = eV.vertex, xV.replace(`\nvec3 ${EV} = vec3(0);\n`, `\nout vec3 ${EV};\n`)), eV.fragment, EV, `program ${zV(eV)}'s twin`);
          var xV
        }(VV, xV)
      } finally {
        gV.inProbe = !1
      }
      return xV.probe && HV(VV, eV, xV.probe), xV.probe
    }

    function KV(VV, eV, xV, JV, YV) {
      const UV = [VV.createShader(bV.VERTEX_SHADER), VV.createShader(bV.FRAGMENT_SHADER)],
        yV = VV.createProgram();
      if (!yV || !UV[0] || !UV[1]) return null;
      VV.shaderSource(UV[0], eV), VV.shaderSource(UV[1], xV);
      for (const QV of UV) VV.compileShader(QV), VV.attachShader(yV, QV);
      VV.transformFeedbackVaryings(yV, [JV], bV.INTERLEAVED_ATTRIBS), VV.linkProgram(yV);
      for (const QV of UV) VV.deleteShader(QV);
      var pV;
      return VV.getProgramParameter(yV, bV.LINK_STATUS) ? yV : (hV(`decode probe: ${YV} failed to link: ${LV(null!==(pV=VV.getProgramInfoLog(yV))&&void 0!==pV?pV:"",300)}`), VV.deleteProgram(yV), null)
    }

    function HV(VV, eV, xV) {
      const JV = VV.getProgramParameter(eV, bV.ACTIVE_UNIFORM_BLOCKS);
      for (let pV = 0; pV < JV; pV++) {
        const JV = VV.getActiveUniformBlockName(eV, pV),
          YV = null === JV ? bV.INVALID_INDEX : VV.getUniformBlockIndex(xV, JV);
        YV !== bV.INVALID_INDEX && VV.uniformBlockBinding(xV, YV, VV.getActiveUniformBlockParameter(eV, pV, bV.UNIFORM_BLOCK_BINDING))
      }
      const YV = VV.getParameter(bV.CURRENT_PROGRAM);
      VV.useProgram(xV);
      const UV = VV.getProgramParameter(eV, bV.ACTIVE_UNIFORMS),
        yV = VV.getActiveUniforms(eV, [...Array(UV).keys()], bV.UNIFORM_BLOCK_INDEX);
      for (let pV = 0; pV < UV; pV++) {
        const JV = VV.getActiveUniform(eV, pV);
        if (!JV || -1 !== yV[pV]) continue;
        const YV = JV.name.replace(/\[0\]$/, "");
        for (let UV = 0; UV < JV.size; UV++) {
          const yV = JV.size > 1 ? `${YV}[${UV}]` : JV.name,
            pV = VV.getUniformLocation(eV, yV),
            QV = VV.getUniformLocation(xV, yV);
          pV && QV && uV(VV, QV, JV.type, VV.getUniform(eV, pV))
        }
      }
      VV.useProgram(YV)
    }

    function uV(VV, eV, xV, JV) {
      const YV = ArrayBuffer.isView(JV) ? Array.from(JV) : [Number(JV)];
      switch (xV) {
        case bV.FLOAT:
          return void VV.uniform1f(eV, YV[0]);
        case bV.FLOAT_VEC2:
          return void VV.uniform2fv(eV, YV);
        case bV.FLOAT_VEC3:
          return void VV.uniform3fv(eV, YV);
        case bV.FLOAT_VEC4:
          return void VV.uniform4fv(eV, YV);
        case bV.FLOAT_MAT3:
          return void VV.uniformMatrix3fv(eV, !1, YV);
        case bV.FLOAT_MAT4:
          return void VV.uniformMatrix4fv(eV, !1, YV);
        case bV.UNSIGNED_INT:
          return void VV.uniform1ui(eV, YV[0]);
        case bV.UNSIGNED_INT_VEC2:
          return void VV.uniform2uiv(eV, YV);
        case bV.UNSIGNED_INT_VEC3:
          return void VV.uniform3uiv(eV, YV);
        case bV.UNSIGNED_INT_VEC4:
          return void VV.uniform4uiv(eV, YV);
        case bV.INT_VEC2:
          return void VV.uniform2iv(eV, YV);
        case bV.INT_VEC3:
          return void VV.uniform3iv(eV, YV);
        case bV.INT_VEC4:
          return void VV.uniform4iv(eV, YV);
        default:
          VV.uniform1i(eV, YV[0])
      }
    }

    function sV(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const UV = VV.getParameter(bV.CURRENT_PROGRAM),
        yV = VV.getParameter(bV.TRANSFORM_FEEDBACK_BINDING),
        pV = VV.getParameter(bV.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        QV = VV.getParameter(bV.COPY_READ_BUFFER_BINDING),
        nV = VV.isEnabled(bV.RASTERIZER_DISCARD),
        wV = VV.createTransformFeedback(),
        ZV = VV.createBuffer();
      gV.inProbe = !0;
      try {
        const UV = VV.getError();
        UV !== bV.NO_ERROR && hV(`GL error 0x${UV.toString(16)} pending before the decode probe (the renderer's)`), VV.useProgram(eV), VV.bindTransformFeedback(bV.TRANSFORM_FEEDBACK, wV), VV.bindBuffer(bV.TRANSFORM_FEEDBACK_BUFFER, ZV), VV.bufferData(bV.TRANSFORM_FEEDBACK_BUFFER, 12 * xV, bV.STREAM_READ), VV.bindBufferBase(bV.TRANSFORM_FEEDBACK_BUFFER, 0, ZV), VV.enable(bV.RASTERIZER_DISCARD), VV.beginTransformFeedback(bV.POINTS), JV(), VV.endTransformFeedback(), VV.bindBufferBase(bV.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const yV = VV.getError();
        if (yV !== bV.NO_ERROR) return hV(`${YV}: GL error 0x${yV.toString(16)} on the feedback draw`), null;
        const pV = new Float32Array(3 * xV);
        return VV.bindBuffer(bV.COPY_READ_BUFFER, ZV), VV.getBufferSubData(bV.COPY_READ_BUFFER, 0, pV), pV
      } finally {
        nV || VV.disable(bV.RASTERIZER_DISCARD), VV.bindTransformFeedback(bV.TRANSFORM_FEEDBACK, yV), VV.bindBuffer(bV.TRANSFORM_FEEDBACK_BUFFER, pV), VV.bindBuffer(bV.COPY_READ_BUFFER, QV), VV.deleteTransformFeedback(wV), VV.deleteBuffer(ZV), VV.useProgram(UV), gV.inProbe = !1
      }
    }

    function SV(VV, eV, xV, JV) {
      const YV = VV.getParameter(bV.COPY_READ_BUFFER_BINDING),
        UV = new Uint8Array(JV);
      return VV.bindBuffer(bV.COPY_READ_BUFFER, eV), VV.getBufferSubData(bV.COPY_READ_BUFFER, xV, UV), VV.bindBuffer(bV.COPY_READ_BUFFER, YV), UV
    }
    const IV = `#version 300 es\nlayout(location = ${BV}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      dV = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      OV = new WeakMap;

    function Ve(VV, eV, xV) {
      const JV = VV.getProgramParameter(eV, bV.ACTIVE_UNIFORMS),
        YV = VV.getParameter(bV.ACTIVE_TEXTURE);
      try {
        for (let YV = 0; YV < JV; YV++) {
          const JV = VV.getActiveUniform(eV, YV);
          if ((null === JV || void 0 === JV ? void 0 : JV.type) !== bV.UNSIGNED_INT_SAMPLER_2D) continue;
          const UV = VV.getUniformLocation(eV, JV.name),
            yV = UV ? VV.getUniform(eV, UV) : -1;
          if (yV < 0) continue;
          VV.activeTexture(bV.TEXTURE0 + yV);
          const pV = VV.getParameter(bV.TEXTURE_BINDING_2D);
          if (pV && RV.get(pV) === xV) return pV
        }
        return null
      } finally {
        VV.activeTexture(YV)
      }
    }

    function ee(VV, eV, xV, JV, YV) {
      const UV = new Uint32Array(4 * YV),
        yV = VV.getParameter(bV.READ_FRAMEBUFFER_BINDING),
        pV = VV.createFramebuffer();
      VV.bindFramebuffer(bV.READ_FRAMEBUFFER, pV), VV.framebufferTexture2D(bV.READ_FRAMEBUFFER, bV.COLOR_ATTACHMENT0, bV.TEXTURE_2D, eV, 0);
      try {
        let eV = 0;
        for (; eV < YV;) {
          const yV = JV + eV,
            pV = yV % xV,
            QV = Math.min(YV - eV, xV - pV);
          VV.readPixels(pV, Math.floor(yV / xV), QV, 1, bV.RGBA_INTEGER, bV.UNSIGNED_INT, UV.subarray(4 * eV, 4 * (eV + QV))), eV += QV
        }
      } finally {
        VV.bindFramebuffer(bV.READ_FRAMEBUFFER, yV), VV.deleteFramebuffer(pV)
      }
      return UV
    }

    function xe(VV, eV, xV) {
      let JV = 0,
        YV = 0;
      for (let QV = 0; QV < eV.bytes.length; QV += XV) {
        JV++;
        const VV = Math.min(QV + XV, eV.bytes.length);
        rV(eV.bytes.subarray(QV, VV)) !== rV(xV.subarray(QV, VV)) && YV++
      }
      const UV = `${VV} ${eV.bytes.length} B cpu ${rV(eV.bytes).toString(16)} gpu ${rV(xV).toString(16)}, ${YV}/${JV} blocks differ${eV.missed?`, ${eV.missed} GPU-side writes uncopied`:""}`;
      if (0 === YV) return UV;
      const {
        count: yV,
        offsets: pV
      } = function(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const JV = Math.min(VV.length, eV.length);
        let YV = Math.abs(VV.length - eV.length);
        const UV = [];
        for (let yV = 0; yV < JV; yV++) VV[yV] !== eV[yV] && (YV++, UV.length < xV && UV.push(yV));
        return {
          count: YV,
          offsets: UV
        }
      }(eV.bytes, xV);
      return lV([`${UV}: ${yV} bytes differ`, ...pV.map((VV => `  +${VV}: cpu ${kV(eV.bytes,VV)} | gpu ${kV(xV,VV)}`))].join("\n")), `${UV}: ${yV} bytes differ, first at ${pV.join(", ")} (context in the saved file)`
    }

    function Je(VV) {
      if (0 === VV.vertices.length) return void hV(`decode probe (${VV.reason}): no terrain draw probed (${VV.draws.length} seen)`);
      const eV = function(VV) {
          const eV = new Map;
          for (const JV of VV) {
            const VV = eV.get(JV.group);
            VV ? VV.push(JV) : eV.set(JV.group, [JV])
          }
          const xV = {
            vertices: VV.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [JV, YV] of eV) {
            const VV = new Map,
              eV = YV.map((eV => {
                const xV = wV(eV.record, eV.slot),
                  JV = [eV.gpu[0] - xV[0], eV.gpu[1] - xV[1], eV.gpu[2] - xV[2]],
                  YV = JV.map((VV => Math.round(64 * VV))).join(","),
                  UV = VV.get(YV);
                return UV ? UV.count++ : VV.set(YV, {
                  count: 1,
                  offset: JV
                }), xV
              }));
            let UV = [0, 0, 0],
              yV = 0;
            for (const xV of VV.values()) xV.count > yV && (yV = xV.count, UV = xV.offset);
            xV.translations.set(JV, UV), YV.forEach(((VV, JV) => {
              var YV;
              const yV = [eV[JV][0] + UV[0], eV[JV][1] + UV[1], eV[JV][2] + UV[2]];
              if (yV.every(((eV, xV) => {
                  return JV = VV.gpu[xV], YV = eV, Math.abs(JV - YV) <= Math.max(.001, 1e-6 * Math.abs(YV));
                  var JV, YV
                }))) return;
              xV.mismatches++, xV.byDirection[pV(VV.record[2])]++, xV.byDiagonal[QV(VV.record[2])]++;
              const nV = ZV(VV.record);
              xV.byBand[nV] = (null !== (YV = xV.byBand[nV]) && void 0 !== YV ? YV : 0) + 1, xV.first.length < vV && xV.first.push({
                ...VV,
                expected: yV
              })
            }))
          }
          return xV
        }(VV.vertices),
        xV = eV.byDirection.map(((VV, eV) => VV ? `${yV[eV]} ${VV}` : "")).filter(Boolean).join(" "),
        JV = Object.entries(eV.byBand).map((VV => {
          let [eV, xV] = VV;
          return `${eV}: ${xV}`
        })).join(" ");
      if (hV(`decode probe (${VV.reason}): ${eV.mismatches}/${eV.vertices} vertices differ from the CPU decode over ${VV.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (eV.mismatches ? ` by direction [${xV}] diagonal [0: ${eV.byDiagonal[0]} 1: ${eV.byDiagonal[1]}] extent [${JV}]` : "")), VV.fed.records > 0 || VV.fed.failed > 0) {
        hV(`decode probe input: ${VV.fed.differing}/${VV.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (VV.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (VV.fed.failed ? `; the feed failed on ${VV.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const eV of VV.fed.first) hV(`  ${eV}`)
      }
      for (const YV of eV.first) {
        const [VV, eV, xV] = YV.record;
        hV(`  mismatch part ${YV.group} r0 ${VV.toString(16)} r1 ${eV.toString(16)} r2 ${xV.toString(16)} slot ${YV.slot} (${yV[pV(xV)]}): expected ${YV.expected.map(Ue).join(",")} gpu ${YV.gpu.map(Ue).join(",")}`)
      }
      lV(`decode probe translations: ${[...eV.translations].map((VV=>{let[eV,xV]=VV;return`${eV}: ${xV.map(Ue).join(",")}`})).join("; ")}`)
    }

    function Ye(VV) {
      return VV.toString(16)
    }

    function Ue(VV) {
      return Number.isInteger(VV) ? String(VV) : VV.toFixed(3)
    }

    function ye(VV) {
      return null !== gV.pendingCheck ? Promise.resolve() : new Promise((eV => {
        let xV = !1;
        const JV = {
          reason: VV,
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
        gV.pendingCheck = JV;
        const YV = () => {
            gV.pendingCheck = null;
            try {
              ! function(VV) {
                hV(`draw ranges (${VV.reason}): ${VV.terrainDraws} terrain draws in the frame, the first ${VV.draws.length} here`);
                for (const eV of VV.draws) {
                  const VV = eV.TE.slice(0, 8).map((VV => {
                      let [eV, xV] = VV;
                      return `${eV}+${xV}`
                    })).join(" "),
                    xV = eV.TE.length > 8 ? ` (+${eV.TE.length-8} ranges)` : "";
                  hV(`  ${zV(eV.program)} ${eV.program.terrain} ${eV.call} ${VV}${xV} x${eV.instances}${eV.group>=0?` part ${eV.group} chunk ${eV.chunk}`:""} | ${eV.attributes.join(" | ")}`)
                }
              }(JV), Je(JV);
              JV.draws.some((VV => "undefined" !== typeof WebGL2RenderingContext && VV.gl instanceof WebGL2RenderingContext)) || 0 === JV.draws.length ? function(VV) {
                const eV = [],
                  xV = new Map;
                for (const JV of VV)
                  if ("undefined" !== typeof WebGL2RenderingContext && JV.gl instanceof WebGL2RenderingContext)
                    for (const VV of JV.pages) xV.set("buf" === VV.kind ? VV.buffer : VV.texture, {
                      page: VV,
                      gl: JV.gl
                    });
                for (const [JV, {
                    page: YV,
                    gl: UV
                  }] of xV) {
                  const VV = WV.get(JV);
                  if (!VV) {
                    eV.push(`${YV.kind}#${CV(JV)}: no CPU copy (${gV.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === YV.kind) {
                    eV.push(xe(`buf#${VV.id}`, VV, SV(UV, YV.buffer, 0, VV.bytes.length)));
                    continue
                  }
                  const xV = ee(UV, YV.texture, VV.width, 0, VV.width * VV.height),
                    yV = 16 === VV.texelBytes ? new Uint8Array(xV.buffer) : new Uint8Array(new Uint16Array(xV).buffer);
                  eV.push(xe(`tex#${VV.id} (${16===VV.texelBytes?"records":"light"})`, VV, yV))
                }
                for (const JV of eV) hV(`page readback ${JV}`)
              }(JV.draws) : hV("page readback: none on WebGL1 (no buffer readback)")
            } catch (VV) {
              hV(`check failed: ${String(VV)}`)
            }
            eV()
          },
          UV = () => {
            if (JV.draws.length > 0 && !xV) return xV = !0, void setTimeout(YV, 0);
            xV || requestAnimationFrame(UV)
          };
        requestAnimationFrame(UV), setTimeout((() => {
          xV || (xV = !0, YV())
        }), 5e3)
      }))
    }
    var pe = xV(5180);
    const Qe = 20,
      ne = 24,
      we = Reflect.apply;

    function Ze(VV, eV, xV) {
      if (!VV) return;
      const JV = VV[eV];
      if ("function" === typeof JV) {
        const YV = xV(JV);
        VV[eV] = YV, (0, pe.r)(YV, JV)
      }
    }
    let ve = !1;
    const re = new WeakMap,
      ke = new WeakMap,
      be = new WeakMap,
      Ee = {
        gl: 0,
        lost: 0
      };
    let Be = {
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
      je = {
        buffer: 0,
        texture: 0
      },
      qe = 0;

    function te(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (VV instanceof ArrayBuffer) return new Uint8Array(VV, eV, xV || void 0);
      if (!ArrayBuffer.isView(VV)) return null;
      const JV = "BYTES_PER_ELEMENT" in VV ? VV.BYTES_PER_ELEMENT : 1,
        YV = VV.byteOffset + eV * JV,
        UV = xV ? xV * JV : VV.byteLength - eV * JV;
      return new Uint8Array(VV.buffer, YV, Math.max(0, UV))
    }

    function Fe(VV, eV) {
      const xV = function(VV) {
        switch (VV) {
          case bV.ARRAY_BUFFER:
            return bV.ARRAY_BUFFER_BINDING;
          case bV.ELEMENT_ARRAY_BUFFER:
            return bV.ELEMENT_ARRAY_BUFFER_BINDING;
          case bV.COPY_READ_BUFFER:
            return bV.COPY_READ_BUFFER_BINDING;
          case bV.COPY_WRITE_BUFFER:
            return bV.COPY_WRITE_BUFFER_BINDING;
          case bV.UNIFORM_BUFFER:
            return bV.UNIFORM_BUFFER_BINDING;
          case bV.PIXEL_UNPACK_BUFFER:
            return bV.PIXEL_UNPACK_BUFFER_BINDING;
          case bV.TRANSFORM_FEEDBACK_BUFFER:
            return bV.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(eV);
      return xV ? VV.getParameter(xV) : null
    }

    function Te(VV) {
      const eV = WV.get(VV);
      eV && (gV.shadowBytes -= eV.bytes.length, WV.delete(VV))
    }

    function Pe(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Te(VV), gV.shadowBytes + eV > NV ? gV.uncopied++ : (gV.shadowBytes += eV, WV.set(VV, {
        id: CV(VV),
        bytes: new Uint8Array(eV),
        width: xV,
        height: JV,
        texelBytes: YV,
        missed: 0
      }))
    }

    function Ae(VV, eV) {
      for (const xV of ["deleteBuffer", "deleteTexture"]) Ze(VV, xV, (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        return xV[0] && Te(xV[0]), we(VV, this, xV)
      }));
      Ze(VV, "shaderSource", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        return xV[0] && "string" === typeof xV[1] && re.set(xV[0], xV[1]), we(VV, this, xV)
      })), Ze(VV, "attachShader", (VV => function() {
        for (var eV, xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
        const UV = JV[0],
          yV = null !== (eV = ke.get(UV)) && void 0 !== eV ? eV : [];
        return yV.push(JV[1]), ke.set(UV, yV), we(VV, this, JV)
      })), Ze(VV, "linkProgram", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        const YV = we(VV, this, xV);
        return gV.inProbe || function(VV, eV) {
          var xV, JV, YV;
          "undefined" !== typeof HTMLCanvasElement && VV.canvas instanceof HTMLCanvasElement && function(VV) {
            if (We.has(VV)) return;
            We.add(VV);
            for (const eV of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) VV.addEventListener(eV, (VV => {
              Ee.lost < Qe && (Ee.lost++, hV(`${eV}${"statusMessage"in VV?`: ${String(VV.statusMessage)}`:""}`))
            }))
          }(VV.canvas);
          gV.context ??= VV;
          const UV = null !== (xV = ke.get(eV)) && void 0 !== xV ? xV : [];
          let yV = "",
            pV = "";
          for (const wV of UV) {
            var QV;
            const VV = null !== (QV = re.get(wV)) && void 0 !== QV ? QV : "";
            /\bgl_Position\b/.test(VV) ? yV = VV : pV = VV
          }
          const nV = {
            id: CV(eV),
            name: null !== (JV = null === (YV = MV.exec(yV)) || void 0 === YV ? void 0 : YV[1]) && void 0 !== JV ? JV : null,
            gl: VV,
            vertex: yV,
            fragment: pV,
            terrain: Xe(yV),
            checked: !1,
            firstDraw: !1
          };
          if (be.set(eV, nV), GV.push([eV, nV]), null !== nV.terrain) {
            const eV = UV.map((eV => {
              var xV;
              return null !== (xV = VV.getShaderInfoLog(eV)) && void 0 !== xV ? xV : ""
            })).filter((VV => "" !== VV.trim()));
            eV.length > 0 && lV(`program ${zV(nV)} (${nV.terrain}) shader logs:\n${LV(eV.join("\n"))}`)
          }
        }(this, xV[0]), YV
      })), Ze(VV, "bufferData", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        const YV = we(VV, this, xV);
        if (!gV.inProbe) {
          const VV = Fe(this, xV[0]);
          if (VV) {
            var UV, yV, pV;
            const eV = "number" === typeof xV[1] ? null : te(xV[1], null !== (UV = xV[3]) && void 0 !== UV ? UV : 0, null !== (yV = xV[4]) && void 0 !== yV ? yV : 0);
            var QV;
            if (Pe(VV, "number" === typeof xV[1] ? xV[1] : null !== (pV = null === eV || void 0 === eV ? void 0 : eV.length) && void 0 !== pV ? pV : 0), eV) null === (QV = WV.get(VV)) || void 0 === QV || QV.bytes.set(eV)
          }
        }
        return YV
      })), Ze(VV, "bufferSubData", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        const YV = we(VV, this, xV);
        if (!gV.inProbe) {
          var UV, yV;
          const VV = Fe(this, xV[0]),
            eV = VV ? WV.get(VV) : void 0,
            JV = te(xV[2], null !== (UV = xV[3]) && void 0 !== UV ? UV : 0, null !== (yV = xV[4]) && void 0 !== yV ? yV : 0);
          if (eV && JV) {
            const VV = xV[1];
            eV.bytes.set(JV.subarray(0, Math.max(0, eV.bytes.length - VV)), VV), Ne("buffer", eV, VV, JV.length)
          }
        }
        return YV
      })), eV && (Ze(VV, "copyBufferSubData", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        const YV = we(VV, this, xV);
        if (!gV.inProbe) {
          const [VV, eV, JV, YV, UV] = xV, yV = Fe(this, VV), pV = Fe(this, eV), QV = yV ? WV.get(yV) : void 0, nV = pV ? WV.get(pV) : void 0;
          nV && (QV ? nV.bytes.set(QV.bytes.slice(JV, JV + UV), YV) : nV.missed++)
        }
        return YV
      })), Ze(VV, "texStorage2D", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        const YV = we(VV, this, xV),
          [, , UV, yV, pV] = xV;
        if (!gV.inProbe && (UV === bV.RGBA32UI || UV === bV.RGBA16UI)) {
          const VV = this.getParameter(bV.TEXTURE_BINDING_2D),
            eV = UV === bV.RGBA32UI ? 16 : 8;
          VV && (RV.set(VV, eV), Pe(VV, yV * pV * eV, yV, pV, eV))
        }
        return YV
      })), Ze(VV, "texSubImage2D", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        const YV = we(VV, this, xV);
        return !gV.inProbe && xV.length >= 9 && xV[0] === bV.TEXTURE_2D && 0 === xV[1] && function(VV, eV) {
          var xV;
          const JV = VV.getParameter(bV.TEXTURE_BINDING_2D),
            YV = JV ? WV.get(JV) : void 0;
          if (!YV) return;
          const [, , UV, yV, pV, QV] = eV;
          let nV = te(eV[8], null !== (xV = eV[9]) && void 0 !== xV ? xV : 0);
          if (null === nV && "number" === typeof eV[8]) {
            const xV = Fe(VV, bV.PIXEL_UNPACK_BUFFER),
              JV = xV ? WV.get(xV) : void 0;
            nV = JV ? JV.bytes.subarray(eV[8]) : null
          }
          if (null === nV) return void YV.missed++;
          const wV = VV.getParameter(bV.UNPACK_ROW_LENGTH) || pV,
            ZV = VV.getParameter(bV.UNPACK_SKIP_ROWS),
            vV = VV.getParameter(bV.UNPACK_SKIP_PIXELS),
            rV = YV.texelBytes;
          for (let kV = 0; kV < QV; kV++) {
            const VV = ((ZV + kV) * wV + vV) * rV,
              eV = ((yV + kV) * YV.width + UV) * rV;
            YV.bytes.set(nV.subarray(VV, VV + pV * rV), eV)
          }
          Ne("texture", YV, (yV * YV.width + UV) * rV, pV * QV * rV)
        }(this, xV), YV
      })), Ze(VV, "copyTexSubImage2D", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        const YV = xV[0] === bV.TEXTURE_2D ? this.getParameter(bV.TEXTURE_BINDING_2D) : null,
          UV = YV ? WV.get(YV) : void 0;
        return UV && UV.missed++, we(VV, this, xV)
      })));
      for (const xV of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Ze(VV, xV, (VV => function() {
        for (var eV = arguments.length, JV = new Array(eV), YV = 0; YV < eV; YV++) JV[YV] = arguments[YV];
        const UV = we(VV, this, JV);
        return gV.inProbe || ze(this, xV, JV), UV
      }));
      Ze(VV, "getExtension", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        const YV = we(VV, this, xV);
        return YV && "object" === typeof YV && function(VV, eV, xV) {
          const JV = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(eV in JV) || xV.bloxdRenderDebug) return;
          xV.bloxdRenderDebug = !0;
          for (const YV of JV[eV]) {
            const eV = xV[YV];
            "function" === typeof eV && (xV[YV] = function() {
              for (var JV = arguments.length, UV = new Array(JV), yV = 0; yV < JV; yV++) UV[yV] = arguments[yV];
              const pV = we(eV, xV, UV);
              return gV.inProbe || ze(VV, YV, UV), pV
            })
          }
        }(this, xV[0], YV), YV
      }))
    }

    function Ne(VV, eV, xV, JV) {
      je[VV] += JV, qe < 32 && eV.bytes.length >= 1 << 20 && (qe++, lV(`upload ${VV} #${eV.id} +${xV} ${JV} B`))
    }

    function Xe(VV) {
      if (!VV.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(VV) || /in uvec3 _p2vs_location0\b/.test(VV) ? "inst" : "tex"
    }

    function Me(VV, eV, xV) {
      var JV;
      if (xV.checked) return;
      xV.checked = !0;
      const YV = VV.getProgramParameter(eV, bV.LINK_STATUS),
        UV = (null !== (JV = VV.getProgramInfoLog(eV)) && void 0 !== JV ? JV : "").trim();
      var yV;
      null === xV.terrain && YV || (hV(`program ${zV(xV)} ${null!==(yV=xV.terrain)&&void 0!==yV?yV:"other"} link ${YV?"ok":"FAILED"}${UV?`: ${LV(UV,300)}`:""}`), UV && lV(`program ${zV(xV)} link log:\n${LV(UV)}`))
    }

    function ze(VV, eV, xV) {
      var JV;
      const YV = VV.getParameter(bV.CURRENT_PROGRAM),
        UV = YV ? be.get(YV) : void 0;
      if (!YV || !UV) return;
      const yV = null !== (JV = UV.terrain) && void 0 !== JV ? JV : "other",
        {
          TE: pV,
          instances: QV
        } = function(VV, eV) {
          switch (VV) {
            case "drawArrays":
              return {
                TE: [
                  [eV[1], eV[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                TE: [
                  [eV[1], eV[2]]
                ], instances: eV[3]
              };
            case "drawElements":
              return {
                TE: [
                  [0, eV[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                TE: [
                  [0, eV[1]]
                ], instances: eV[4]
              };
            case "multiDrawArraysWEBGL": {
              const VV = eV[1],
                xV = eV[3],
                JV = eV[2],
                YV = eV[4],
                UV = [];
              for (let yV = 0; yV < eV[5]; yV++) UV.push([VV[JV + yV], xV[YV + yV]]);
              return {
                TE: UV,
                instances: 1
              }
            }
            default:
              return {
                TE: [], instances: 0
              }
          }
        }(eV, xV),
        nV = "inst" === UV.terrain ? QV : pV.reduce(((VV, eV) => {
          let [, xV] = eV;
          return VV + xV
        }), 0) / 6;
      if (Be[yV].draws++, Be[yV].faces += nV, null === UV.terrain) return;
      if (gV.context = VV, !UV.firstDraw) {
        UV.firstDraw = !0, Me(VV, YV, UV), Ge || (Ge = !0, hV(function(VV) {
          var eV;
          const xV = VV.getParameter(bV.DEPTH_FUNC),
            JV = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let YV = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in VV && VV.getParameter(bV.DRAW_FRAMEBUFFER_BINDING)) {
            const eV = VV;
            YV = eV.getFramebufferAttachmentParameter(bV.DRAW_FRAMEBUFFER, bV.DEPTH_ATTACHMENT, bV.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(eV.getFramebufferAttachmentParameter(bV.DRAW_FRAMEBUFFER,bV.DEPTH_ATTACHMENT,bV.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(eV.getFramebufferAttachmentParameter(bV.DRAW_FRAMEBUFFER,bV.DEPTH_ATTACHMENT,bV.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const UV = VV.getParameter(bV.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(eV=JV[xV])&&void 0!==eV?eV:`0x${xV.toString(16)}`} clear ${UV}${516===xV||518===xV?" (reverse-Z)":""}, samples ${String(VV.getParameter(bV.SAMPLES))}, ${YV}`
        }(VV)));
        const xV = VV.getError();
        xV !== bV.NO_ERROR && Ee.gl < Qe && (Ee.gl++, hV(`GL error 0x${xV.toString(16)} after program ${zV(UV)}'s first terrain draw (${eV})`))
      }
      const wV = gV.pendingCheck;
      null !== wV && (wV.terrainDraws++, wV.draws.length < ne && fV(VV, YV, UV, eV, pV, QV))
    }
    let Ge = !1;
    const We = new WeakSet;
    var Re = xV(4981),
      ge = xV(5189);
    const De = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let ie = !1;
    const Ce = new WeakSet,
      ae = new WeakMap,
      oe = new WeakMap,
      ce = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let he = 0,
      le = !1,
      Le = null,
      fe = {
        draws: 0,
        faces: 0
      };

    function me(VV) {
      const eV = globalThis[VV];
      return null === eV || void 0 === eV ? void 0 : eV.prototype
    }

    function Ke(VV) {
      return VV && "function" === typeof VV[Symbol.iterator] ? [...VV].sort().join(" ") : ""
    }

    function He(VV, eV) {
      const xV = null !== VV && void 0 !== VV ? VV : {},
        JV = null !== eV && void 0 !== eV ? eV : Object.keys(Object.getPrototypeOf(xV)).concat(Object.keys(xV));
      return [...new Set(JV)].filter((VV => "number" === typeof xV[VV])).map((VV => `${VV} ${String(xV[VV])}`)).join(", ")
    }

    function ue(VV, eV) {
      var xV;
      const JV = null !== (xV = eV.vertex) && void 0 !== xV ? xV : {};
      if (JV.module && Ce.has(JV.module)) {
        var YV;
        const xV = String(null !== (YV = JV.entryPoint) && void 0 !== YV ? YV : "");
        if (xV.startsWith("vs_packed") && ae.set(VV, xV), !le) {
          var UV, yV, pV, QV, nV;
          le = !0;
          const VV = null !== (UV = eV.depthStencil) && void 0 !== UV ? UV : {},
            JV = null !== (yV = eV.multisample) && void 0 !== yV ? yV : {},
            YV = String(null !== (pV = VV.depthCompare) && void 0 !== pV ? pV : "");
          hV(`WebGPU terrain pipeline ${xV}: depth ${String(null!==(QV=VV.format)&&void 0!==QV?QV:"none")} ${YV}${YV.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(nV=JV.count)&&void 0!==nV?nV:1)}`)
        }
      }
    }

    function se(VV) {
      Ze(VV, "setPipeline", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        return oe.set(this, xV[0]), we(VV, this, xV)
      }));
      for (const eV of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Ze(VV, eV, (VV => function() {
        const xV = oe.get(this),
          JV = xV ? ae.get(xV) : void 0;
        for (var YV = arguments.length, UV = new Array(YV), yV = 0; yV < YV; yV++) UV[yV] = arguments[yV];
        return void 0 !== JV && Se(eV, JV, UV), we(VV, this, UV)
      }))
    }

    function Se(VV, eV, xV) {
      var JV;
      (fe.draws++, "draw" === VV || "drawIndexed" === VV) && (fe.faces += xV[0] * (null !== (JV = xV[1]) && void 0 !== JV ? JV : 1) / 6);
      if (null !== Le && Le.length < ne) {
        const JV = ("draw" === VV ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === VV ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((eV, JV) => {
          const YV = VV.endsWith("Indirect") ? xV[1] : xV[JV];
          return `${eV} ${String(null!==YV&&void 0!==YV?YV:"instances"===eV?1:0)}`
        }));
        Le.push(`  ${eV} ${VV} ${JV.join(" ")}`)
      }
    }

    function Ie() {
      if (ie || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      ie = !0, Ze(me("GPU"), "requestAdapter", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        return we(VV, this, xV).then((VV => {
          var eV;
          VV ? function(VV) {
            var eV;
            const xV = null !== (eV = VV.info) && void 0 !== eV ? eV : {};
            hV(`WebGPU adapter ${["vendor","architecture","device","description"].map((VV=>{var eV;return`${VV} "${String(null!==(eV=xV[VV])&&void 0!==eV?eV:"")}"`})).join(" ")}${VV.isFallbackAdapter?" (fallback)":""}`), hV(`WebGPU adapter features ${Ke(VV.features)}`), hV(`WebGPU adapter limits ${He(VV.limits,De)}`), lV(`WebGPU adapter all limits ${He(VV.limits,null)}`)
          }(VV) : hV(`WebGPU requestAdapter(${JSON.stringify(null!==(eV=xV[0])&&void 0!==eV?eV:{})}) gave none`);
          return VV
        }))
      })), Ze(me("GPUAdapter"), "requestDevice", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        return we(VV, this, xV).then((VV => (function(VV) {
          hV(`WebGPU device features ${Ke(VV.features)}`), hV(`WebGPU device limits ${He(VV.limits,De)}`), VV.addEventListener("uncapturederror", (VV => {
            if (ce.uncaptured < Qe) {
              var eV, xV, JV;
              ce.uncaptured++;
              const YV = VV.error;
              hV(`WebGPU uncaptured ${null!==(eV=null===YV||void 0===YV||null===(xV=YV.constructor)||void 0===xV?void 0:xV.name)&&void 0!==eV?eV:"error"}: ${LV(String(null!==(JV=null===YV||void 0===YV?void 0:YV.message)&&void 0!==JV?JV:""),600)}`)
            }
          }));
          const eV = VV.lost;
          null === eV || void 0 === eV || eV.then((VV => {
            var eV;
            hV(`WebGPU device lost (${String(VV.reason)}): ${LV(String(null!==(eV=VV.message)&&void 0!==eV?eV:""),600)}`)
          }))
        }(VV), VV)), (VV => {
          throw hV(`WebGPU requestDevice failed: ${String(VV)}`), VV
        }))
      }));
      const VV = me("GPUDevice");
      Ze(VV, "createShaderModule", (VV => function() {
        for (var eV, xV, JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
        const yV = we(VV, this, YV);
        return function(VV, eV) {
          const xV = eV.includes("decodeQuad");
          xV && Ce.add(VV);
          const JV = VV.getCompilationInfo;
          null === JV || void 0 === JV || JV.call(VV).then((VV => {
            if (0 === VV.messages.length && !xV) return;
            const eV = {};
            for (const xV of VV.messages) {
              var JV;
              eV[String(xV.type)] = (null !== (JV = eV[String(xV.type)]) && void 0 !== JV ? JV : 0) + 1
            }
            const YV = VV.messages.map((VV => `${String(VV.type)} ${String(VV.lineNum)}:${String(VV.linePos)} ${String(VV.message)}`)).join("\n");
            ce.compile < Qe && (ce.compile++, hV(`WebGPU ${xV?"terrain ":""}shader module compiled: ${JSON.stringify(eV)}${YV?` first: ${LV(YV.split("\n")[0],300)}`:""}`)), YV && lV(`WebGPU shader module messages:\n${LV(YV)}`)
          }))
        }(yV, String(null !== (eV = (null !== (xV = YV[0]) && void 0 !== xV ? xV : {}).code) && void 0 !== eV ? eV : "")), yV
      })), Ze(VV, "createRenderPipeline", (VV => function() {
        for (var eV, xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
        const UV = we(VV, this, JV);
        return ue(UV, null !== (eV = JV[0]) && void 0 !== eV ? eV : {}), UV
      })), Ze(VV, "createRenderPipelineAsync", (VV => function() {
        for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
        return we(VV, this, xV).then((VV => {
          var eV;
          return ue(VV, null !== (eV = xV[0]) && void 0 !== eV ? eV : {}), VV
        }), (VV => {
          var eV;
          throw function(VV, eV) {
            var xV, JV, YV;
            if (ce.rejected >= Qe) return;
            ce.rejected++;
            const {
              reason: UV,
              message: yV
            } = null !== eV && void 0 !== eV ? eV : {}, pV = String(null !== (xV = (null !== (JV = VV.vertex) && void 0 !== JV ? JV : {}).entryPoint) && void 0 !== xV ? xV : "");
            hV(`WebGPU pipeline "${String(null!==(YV=VV.label)&&void 0!==YV?YV:"")}" ${pV} rejected (${String(null!==UV&&void 0!==UV?UV:"no reason")}): ${LV(String(null!==yV&&void 0!==yV?yV:eV),600)}`)
          }(null !== (eV = xV[0]) && void 0 !== eV ? eV : {}, VV), VV
        }))
      })), Ze(me("GPUCanvasContext"), "configure", (VV => function() {
        for (var eV, xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
        const UV = null !== (eV = JV[0]) && void 0 !== eV ? eV : {};
        var yV, pV;
        he++ < 3 && hV(`WebGPU canvas ${String(UV.format)} ${String(null!==(yV=UV.colorSpace)&&void 0!==yV?yV:"srgb")} alpha ${String(null!==(pV=UV.alphaMode)&&void 0!==pV?pV:"opaque")}`);
        return we(VV, this, JV)
      })), se(me("GPURenderPassEncoder")), se(me("GPURenderBundleEncoder"))
    }
    const de = 1e4,
      Oe = 6e4,
      Vx = 5e3,
      ex = 3e3,
      xx = 100;
    let Jx = null,
      Yx = !1,
      Ux = {
        ...Re.b
      },
      yx = !1,
      px = null,
      Qx = 0,
      nx = () => {};
    const wx = new Promise((VV => {
      nx = VV
    }));

    function Zx() {
      var VV;
      Yx || (Yx = !0, Ux = Object.assign(window.bloxdRenderDebug ??= {
        ...Re.b
      }, {
        faceCull: "0" === (0, UV.k)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (VV = (0, UV.k)("adrenoProbe")) && void 0 !== VV ? VV : ""
      }), hV("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), ve || "undefined" === typeof window || (ve = !0, "undefined" !== typeof WebGL2RenderingContext && Ae(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && Ae(WebGLRenderingContext.prototype, !1)), Ie(), (0, UV.d)("renderProbe", (() => {
        Bx("console")
      })), bx(), setInterval(qx, Vx))
    }

    function vx(VV) {
      var eV, xV;
      Zx(), Jx = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.backend) && void 0 !== eV ? eV : null;
      const JV = `, renderer param ${null!==(xV=(0,UV.k)("renderer"))&&void 0!==xV?xV:"none"}, faceCull ${"0"===Ux.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Ux.adrenoProbe||"none"}`;
      hV(`${(0,ge.d)(VV)}${null===VV?"":JV}`)
    }

    function rx() {
      const VV = performance.now(),
        eV = kx(wx, de, Oe).then((eV => Bx(`${Math.round((performance.now()-VV)/1e3)} s after playable${eV?"":", no terrain drawn yet"}`)));
      (0, YV.c)(hV, (async () => {
        await eV, await px
      }))
    }
    async function kx(VV, eV, xV) {
      const YV = (0, JV.d)(xV).then((() => !1));
      return await (0, JV.d)(eV), Promise.race([VV.then((() => !0)), YV])
    }

    function bx() {
      requestAnimationFrame((() => {
        Qx++, bx()
      }))
    }

    function Ex() {
      var VV, eV, xV;
      if (yx) return;
      (yx = !0, hV(`renderer caps ${null!==(VV=Ux.caps)&&void 0!==VV?VV:"(not noted)"}; terrain fetch ${null!==(eV=Ux.fetch)&&void 0!==eV?eV:"(not noted)"}`), Ux.adrenoProbe) && hV(`adrenoProbe ${Ux.adrenoProbe} asked; in force (storage fetch only): ${null!==(xV=Ux.probe)&&void 0!==xV?xV:"(not noted)"}`);
      const JV = gV.context;
      if (JV) {
        for (const VV of function(VV) {
            var eV;
            const xV = [],
              JV = VV.getExtension("WEBGL_debug_renderer_info"),
              YV = JV ? VV.getParameter(JV.UNMASKED_VENDOR_WEBGL) : "(masked)",
              UV = JV ? VV.getParameter(JV.UNMASKED_RENDERER_WEBGL) : "(masked)";
            xV.push(`GL ${String(VV.getParameter(VV.VERSION))} | ${String(VV.getParameter(VV.SHADING_LANGUAGE_VERSION))} | ${String(VV.getParameter(VV.VENDOR))} / ${String(VV.getParameter(VV.RENDERER))}`), xV.push(`GL unmasked ${YV} / ${UV}`);
            const yV = [
              ["MAX_TEXTURE_SIZE", VV.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", VV.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", VV.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", VV.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", VV.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", VV.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", VV.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in VV && yV.push(["MAX_UNIFORM_BLOCK_SIZE", VV.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", VV.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", VV.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", VV.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), xV.push(`GL limits ${yV.map((eV=>{let[xV,JV]=eV;return`${xV} ${String(VV.getParameter(JV))}`})).join(", ")}`);
            const pV = (eV, xV) => {
              const JV = VV.getShaderPrecisionFormat(eV, VV.HIGH_FLOAT),
                YV = VV.getShaderPrecisionFormat(eV, VV.HIGH_INT);
              return `${xV} highp float ${JV?`${JV.rangeMin}/${JV.rangeMax}/${JV.precision}`:"?"} int ${YV?`${YV.rangeMin}/${YV.rangeMax}/${YV.precision}`:"?"}`
            };
            xV.push(`GL precision ${pV(VV.VERTEX_SHADER,"VS")}, ${pV(VV.FRAGMENT_SHADER,"FS")}`);
            const QV = VV.getContextAttributes();
            return xV.push(`GL context ${JSON.stringify(QV)} drawingBuffer ${VV.drawingBufferWidth}x${VV.drawingBufferHeight}${"drawingBufferFormat"in VV?` format 0x${Number(VV.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in VV?` ${String(VV.drawingBufferColorSpace)}`:""}`), xV.push(`GL extensions ${(null!==(eV=VV.getSupportedExtensions())&&void 0!==eV?eV:[]).join(" ")}`), xV
          }(JV)) hV(VV);
        ! function() {
          if (!gV.context) return;
          let VV = 0,
            eV = 0;
          for (const [xV, JV] of GV) !JV.gl.isContextLost() && JV.gl.isProgram(xV) && (eV++, Me(JV.gl, xV, JV), null !== JV.terrain && VV++);
          hV(`programs: ${eV} live of ${GV.length} linked, ${VV} packed terrain; CPU page copies ${Math.round(gV.shadowBytes/1048576)} MiB (${gV.uncopied} over budget)`)
        }()
      }
    }

    function Bx(VV) {
      return px ??= async function(VV) {
        Ex(), "webgpu" === Jx ? (jx(), "1" === Ux.slotCheck && hV("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Ux.slotCheck = "1", await
          function(VV) {
            if (null !== Le) return Promise.resolve();
            const eV = [];
            return Le = eV, new Promise((xV => {
              setTimeout((() => {
                Le = null, hV(`WebGPU draw ranges (${VV}): ${eV.length} terrain draws recorded in a second (first ${ne}; bundles replay without new ones)`);
                for (const VV of eV) hV(VV);
                xV()
              }), 1e3)
            }))
          }(VV), await async function() {
            if (await (0, Re.g)(Ux, "slotCheck", ["1"], ex, xx), "1" === Ux.slotCheck) return void hV(`slot check: no answer in ${ex} ms (only the storage fetch has one; a later answer logs on its own)`);
            jx()
          }()) : await ye(VV);
        hV(`check (${VV}) done: bloxdDebug.save() downloads it all`)
      }(VV).catch((eV => {
        hV(`check (${VV}) failed: ${String(eV)}`)
      })).finally((() => {
        px = null
      })), px
    }

    function jx() {
      void 0 !== Ux.slotCheck && "1" !== Ux.slotCheck && (hV(Ux.slotCheck), delete Ux.slotCheck)
    }

    function qx() {
      const VV = VV => Qx ? (VV / Qx).toFixed(1) : "0",
        eV = function() {
          const VV = fe;
          return fe = {
            draws: 0,
            faces: 0
          }, VV
        }(),
        xV = function() {
          const VV = Be;
          return Be = {
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
          }, VV
        }(),
        JV = function() {
          const VV = je;
          return je = {
            buffer: 0,
            texture: 0
          }, VV
        }();
      jx(), ("webgpu" === Jx ? eV.draws : xV.inst.draws + xV.tex.draws) > 0 && nx();
      const YV = "webgpu" === Jx ? [`terrain ${VV(eV.draws)} draws ${VV(eV.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((VV => xV[VV].draws > 0)).map((eV => `${eV} ${VV(xV[eV].draws)} draws ${VV(xV[eV].faces)} faces a frame`));
      hV(`${Qx} frames: ${YV.join(", ")||"no draws"}; uploaded ${Math.round(JV.buffer/1024)} KiB to buffers, ${Math.round(JV.texture/1024)} KiB to data textures`), Qx = 0
    }
  },
  5189: (VV, eV, xV) => {
    function JV(VV) {
      if (null === VV) return "backend: none picked (no renderer build)";
      const eV = VV.adapter ? `${VV.adapter.vendor}/${VV.adapter.architecture}` : "none";
      return `backend ${VV.backend}: reason ${VV.reason}, source ${VV.source}, adapter ${eV}`
    }
    xV.d(eV, {
      d: () => JV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);