export const id = 48;
export const ids = [48];
export const modules = {
  4718: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(2811);
    const LD = 3e4,
      cD = 1e3;

    function gD() {
      return "visible" === document.visibilityState && "inGame" === pD.e.get("gameState") && (0, KD.s)()
    }

    function RD(DD, zD) {
      (0, rD.v)() || function(DD, zD, wD) {
        let pD = 0;
        const sD = setInterval((() => {
          zD() && (pD += cD, pD >= DD && (clearInterval(sD), wD()))
        }), cD)
      }(LD, gD, (() => {
        zD().then((() => {
          DD(`saved for the player after ${LD/1e3} s of play`), (0, rD.D)(), sD.l.KG("chat", {
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
  4710: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      installRenderDebug: () => Uw,
      renderDebugPlayable: () => Iw,
      startRenderDebug: () => fw,
      waitForDraw: () => Bw
    });
    var pD = wD(1819),
      sD = wD(4718),
      KD = wD(2811);
    const rD = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function LD(DD) {
      return 7 & DD
    }

    function cD(DD) {
      return DD >>> 11 & 1
    }

    function gD(DD) {
      return [1 + (DD >>> 18 & 63), 1 + (DD >>> 24 & 63)]
    }

    function RD(DD, zD) {
      const [wD, , pD] = DD, sD = LD(pD), KD = function(DD, zD, wD) {
        return zD + (1 === (22 >>> DD & 1) ? 4 - wD : wD) & 3
      }(sD, cD(pD), zD), rD = sD >>> 1, [RD, AD] = gD(wD), UD = 1 === KD || 2 === KD ? RD : 0, fD = KD >= 2 ? AD : 0, ID = [63 & wD, wD >>> 6 & 63, wD >>> 12 & 63];
      return ID[2 === rD ? 0 : 2] += UD, ID[1 === rD ? 0 : 1] += fD, ID
    }

    function AD(DD) {
      const zD = Math.max(...gD(DD[0]));
      return 1 === zD ? "1" : zD <= 4 ? "2-4" : zD <= 16 ? "5-16" : "17-64"
    }
    const UD = 16;

    function fD(DD) {
      let zD = 2166136261;
      for (let wD = 0; wD < DD.length; wD++) zD = Math.imul(zD ^ DD[wD], 16777619);
      return zD >>> 0
    }

    function ID(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const pD = Math.max(0, zD - wD),
        sD = Math.min(DD.length, zD + wD),
        KD = [];
      for (let rD = pD; rD < sD; rD++) {
        const wD = DD[rD].toString(16).padStart(2, "0");
        KD.push(rD === zD ? `[${wD}]` : wD)
      }
      return KD.join(" ")
    }
    const BD = {
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
      GD = "_vs2fs_location0";
    const hD = 0,
      nD = 4,
      MD = 6,
      OD = [0, 1, 2, 0, 2, 3],
      JD = 2048,
      ED = 4,
      QD = 256,
      XD = 64,
      VD = 268435456,
      PD = 65536,
      CD = /^#version [^\n]*\/\/ program (\S+)$/m;

    function xD(DD) {
      return null === DD.name ? `#${DD.id}` : `#${DD.id} ${DD.name}`
    }
    const TD = [],
      bD = new WeakMap,
      jD = new WeakMap,
      dD = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let SD = 1;
    const iD = new WeakMap;

    function lD(DD) {
      if (null === DD) return 0;
      let zD = iD.get(DD);
      return void 0 === zD && (zD = SD++, iD.set(DD, zD)), zD
    }
    class WD {
      constructor(DD, zD) {
        this.print = DD, this.now = zD, this.shown = 0, this.Qg = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.Nf = [], this.dropped = 0
      }
      line(DD) {
        const zD = this.now();
        if (zD - this.second >= 1e3 && (this.second = zD, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Qg++, void this.store(DD);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${DD} (the last line here: the rest go to bloxdDebug.save())` : DD)
      }
      keep(DD) {
        this.sections++, this.store(DD)
      }
      store(DD) {
        this.Nf.push(`${new Date(Date.now()).toISOString()} ${DD}`), this.Nf.length > 2e4 && (this.Nf.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Qg} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.Nf].join("\n")
      }
    }
    let ND = null;

    function ZD() {
      if (null === ND) {
        const DD = new WD((DD => {
          (0, KD.l)("render", DD)
        }), (() => performance.now()));
        (0, KD.i)("render", (() => DD.dump())), ND = DD
      }
      return ND
    }

    function yD(DD) {
      ZD().line(DD)
    }

    function kD(DD) {
      ZD().keep(DD)
    }

    function mD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return DD.length <= zD ? DD : `${DD.slice(0,zD)}... (${DD.length-zD} more characters)`
    }

    function eD(DD, zD, wD, pD, sD, KD) {
      const rD = dD.pendingCheck;
      if (null === rD) return;
      const LD = "undefined" !== typeof WebGL2RenderingContext && DD instanceof WebGL2RenderingContext,
        cD = {
          gl: DD,
          program: wD,
          call: pD,
          rG: sD,
          instances: KD,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (rD.draws.push(cD), LD) try {
        const pD = function(DD) {
          const zD = [],
            wD = new Map,
            pD = Math.min(16, DD.getParameter(BD.MAX_VERTEX_ATTRIBS));
          for (let sD = 0; sD < pD; sD++) {
            if (!DD.getVertexAttrib(sD, BD.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const pD = DD.getVertexAttrib(sD, BD.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              KD = DD.getVertexAttribOffset(sD, BD.VERTEX_ATTRIB_ARRAY_POINTER),
              rD = DD.getVertexAttrib(sD, BD.VERTEX_ATTRIB_ARRAY_STRIDE),
              LD = DD.getVertexAttrib(sD, BD.VERTEX_ATTRIB_ARRAY_SIZE),
              cD = DD.getVertexAttrib(sD, BD.VERTEX_ATTRIB_ARRAY_TYPE),
              gD = "VERTEX_ATTRIB_ARRAY_INTEGER" in DD && DD.getVertexAttrib(sD, BD.VERTEX_ATTRIB_ARRAY_INTEGER),
              RD = "VERTEX_ATTRIB_ARRAY_DIVISOR" in DD ? DD.getVertexAttrib(sD, BD.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            wD.set(sD, {
              buffer: pD,
              offset: KD,
              stride: rD
            }), zD.push(`@${sD} buf#${lD(pD)} +${KD} stride ${rD} ${LD}x0x${cD.toString(16)}${gD?" int":""} div ${RD}`)
          }
          return {
            lines: zD,
            byLocation: wD
          }
        }(DD);
        if (cD.attributes = pD.lines, "inst" === wD.terrain) {
          const {
            group: sD,
            chunk: LD
          } = function(DD, zD, wD) {
            const pD = zD.get(MD),
              sD = DD.getVertexAttrib(MD, BD.CURRENT_VERTEX_ATTRIB),
              KD = pD ? `+${pD.offset}` : sD ? Array.from(sD).slice(0, 3).join(",") : "?";
            let rD = wD.groups.get(KD);
            return void 0 === rD && (rD = wD.groups.size, wD.groups.set(KD, rD)), {
              group: rD,
              chunk: KD
            }
          }(DD, pD.byLocation, rD);
          cD.group = sD, cD.chunk = LD;
          for (const DD of [hD, nD]) {
            var gD;
            const zD = null === (gD = pD.byLocation.get(DD)) || void 0 === gD ? void 0 : gD.buffer;
            zD && cD.pages.push({
              kind: "buf",
              buffer: zD
            })
          }! function(DD, zD, wD, pD, sD, KD, rD) {
            const LD = pD.get(hD),
              cD = rD.parts.get(KD);
            if (void 0 === cD && rD.parts.size >= ED) return;
            const gD = Math.min(sD, XD, QD - (null !== cD && void 0 !== cD ? cD : 0));
            if (null === LD || void 0 === LD || !LD.buffer || gD <= 0) return;
            const RD = oD(DD, zD, wD);
            if (!RD) return;
            const AD = LD.stride || 12,
              UD = FD(DD, LD.buffer, LD.offset, (gD - 1) * AD + 12),
              fD = new DataView(UD.buffer),
              ID = function(DD, zD) {
                const wD = function(DD) {
                    const zD = qD.get(DD);
                    if (void 0 !== zD && (null === zD || DD.isProgram(zD))) return zD;
                    dD.inProbe = !0;
                    let wD = null;
                    try {
                      wD = aD(DD, YD, HD, "fed", "the record feed")
                    } finally {
                      dD.inProbe = !1
                    }
                    return qD.set(DD, wD), wD
                  }(DD),
                  pD = wD ? tD(DD, wD, zD, (() => {
                    DD.drawArraysInstanced(BD.POINTS, 0, 1, zD)
                  }), "decode probe input (the record feed)") : null;
                return pD ? new Uint32Array(pD.buffer) : null
              }(DD, gD);
            ID || rD.fed.failed++;
            const GD = tD(DD, RD, 4 * gD, (() => {
              DD.drawArraysInstanced(BD.POINTS, 0, 4, gD)
            }));
            if (!GD) return;
            rD.parts.set(KD, (null !== cD && void 0 !== cD ? cD : 0) + gD);
            for (let BD = 0; BD < gD; BD++) {
              const DD = BD * AD,
                zD = [fD.getUint32(DD, !0), fD.getUint32(DD + 4, !0), fD.getUint32(DD + 8, !0)],
                wD = ID ? [ID[3 * BD], ID[3 * BD + 1], ID[3 * BD + 2]] : zD;
              ID && (rD.fed.records++, wD.some(((DD, wD) => DD !== zD[wD])) && (rD.fed.differing++, rD.fed.first.length < 8 && rD.fed.first.push(`part ${KD} instance ${BD}: fed ${wD.map(sz).join(" ")} buffer ${zD.map(sz).join(" ")}`)));
              for (let pD = 0; pD < 4; pD++) {
                const DD = 3 * (4 * BD + pD);
                rD.vertices.push({
                  record: wD,
                  slot: pD,
                  group: KD,
                  gpu: [GD[DD], GD[DD + 1], GD[DD + 2]]
                })
              }
            }
          }(DD, zD, wD, pD.byLocation, KD, sD, rD)
        } else {
          const pD = Dz(DD, zD, 16),
            KD = Dz(DD, zD, 8);
          for (const DD of [pD, KD]) DD && cD.pages.push({
            kind: "tex",
            texture: DD
          });
          pD && function(DD, zD, wD, pD, sD, KD) {
            if (KD.parts.size >= ED) return;
            const rD = oD(DD, zD, wD);
            if (!rD) return;
            let LD = 6 * QD;
            const cD = [];
            for (const [fD, ID] of sD) {
              const DD = Math.min(ID, LD, Math.max(6, 6 * Math.floor(QD / sD.length)));
              DD > 0 && (cD.push([fD, DD]), LD -= DD)
            }
            const gD = cD.reduce(((DD, zD) => {
                let [, wD] = zD;
                return DD + wD
              }), 0),
              RD = tD(DD, rD, gD, (() => {
                for (const [zD, wD] of cD) DD.drawArrays(BD.POINTS, zD, wD)
              }));
            if (!RD) return;
            let AD = 0;
            for (const [fD, ID] of cD) {
              const zD = Math.floor(fD / 6),
                wD = Math.floor((fD + ID - 1) / 6) - zD + 1,
                sD = zz(DD, pD, JD, zD, wD);
              for (let DD = fD; DD < fD + ID; DD++, AD++) {
                var UD;
                const wD = 4 * (Math.floor(DD / 6) - zD),
                  pD = [sD[wD], sD[wD + 1], sD[wD + 2]];
                KD.parts.set(sD[wD + 3], (null !== (UD = KD.parts.get(sD[wD + 3])) && void 0 !== UD ? UD : 0) + (DD % 6 === 0 ? 1 : 0)), KD.vertices.push({
                  record: pD,
                  slot: OD[DD % 6],
                  group: sD[wD + 3],
                  gpu: [RD[3 * AD], RD[3 * AD + 1], RD[3 * AD + 2]]
                })
              }
            }
          }(DD, zD, wD, pD, sD, rD)
        }
      } catch (RD) {
        yD(`decode probe failed on program ${xD(wD)}: ${String(RD)}`)
      }
    }

    function oD(DD, zD, wD) {
      if (void 0 !== wD.probe) return wD.probe && uD(DD, zD, wD.probe), wD.probe;
      wD.probe = null, dD.inProbe = !0;
      try {
        wD.probe = function(DD, zD) {
          return aD(DD, (wD = zD.vertex, wD.replace(`\nvec3 ${GD} = vec3(0);\n`, `\nout vec3 ${GD};\n`)), zD.fragment, GD, `program ${xD(zD)}'s twin`);
          var wD
        }(DD, wD)
      } finally {
        dD.inProbe = !1
      }
      return wD.probe && uD(DD, zD, wD.probe), wD.probe
    }

    function aD(DD, zD, wD, pD, sD) {
      const KD = [DD.createShader(BD.VERTEX_SHADER), DD.createShader(BD.FRAGMENT_SHADER)],
        rD = DD.createProgram();
      if (!rD || !KD[0] || !KD[1]) return null;
      DD.shaderSource(KD[0], zD), DD.shaderSource(KD[1], wD);
      for (const cD of KD) DD.compileShader(cD), DD.attachShader(rD, cD);
      DD.transformFeedbackVaryings(rD, [pD], BD.INTERLEAVED_ATTRIBS), DD.linkProgram(rD);
      for (const cD of KD) DD.deleteShader(cD);
      var LD;
      return DD.getProgramParameter(rD, BD.LINK_STATUS) ? rD : (yD(`decode probe: ${sD} failed to link: ${mD(null!==(LD=DD.getProgramInfoLog(rD))&&void 0!==LD?LD:"",300)}`), DD.deleteProgram(rD), null)
    }

    function uD(DD, zD, wD) {
      const pD = DD.getProgramParameter(zD, BD.ACTIVE_UNIFORM_BLOCKS);
      for (let LD = 0; LD < pD; LD++) {
        const pD = DD.getActiveUniformBlockName(zD, LD),
          sD = null === pD ? BD.INVALID_INDEX : DD.getUniformBlockIndex(wD, pD);
        sD !== BD.INVALID_INDEX && DD.uniformBlockBinding(wD, sD, DD.getActiveUniformBlockParameter(zD, LD, BD.UNIFORM_BLOCK_BINDING))
      }
      const sD = DD.getParameter(BD.CURRENT_PROGRAM);
      DD.useProgram(wD);
      const KD = DD.getProgramParameter(zD, BD.ACTIVE_UNIFORMS),
        rD = DD.getActiveUniforms(zD, [...Array(KD).keys()], BD.UNIFORM_BLOCK_INDEX);
      for (let LD = 0; LD < KD; LD++) {
        const pD = DD.getActiveUniform(zD, LD);
        if (!pD || -1 !== rD[LD]) continue;
        const sD = pD.name.replace(/\[0\]$/, "");
        for (let KD = 0; KD < pD.size; KD++) {
          const rD = pD.size > 1 ? `${sD}[${KD}]` : pD.name,
            LD = DD.getUniformLocation(zD, rD),
            cD = DD.getUniformLocation(wD, rD);
          LD && cD && vD(DD, cD, pD.type, DD.getUniform(zD, LD))
        }
      }
      DD.useProgram(sD)
    }

    function vD(DD, zD, wD, pD) {
      const sD = ArrayBuffer.isView(pD) ? Array.from(pD) : [Number(pD)];
      switch (wD) {
        case BD.FLOAT:
          return void DD.uniform1f(zD, sD[0]);
        case BD.FLOAT_VEC2:
          return void DD.uniform2fv(zD, sD);
        case BD.FLOAT_VEC3:
          return void DD.uniform3fv(zD, sD);
        case BD.FLOAT_VEC4:
          return void DD.uniform4fv(zD, sD);
        case BD.FLOAT_MAT3:
          return void DD.uniformMatrix3fv(zD, !1, sD);
        case BD.FLOAT_MAT4:
          return void DD.uniformMatrix4fv(zD, !1, sD);
        case BD.UNSIGNED_INT:
          return void DD.uniform1ui(zD, sD[0]);
        case BD.UNSIGNED_INT_VEC2:
          return void DD.uniform2uiv(zD, sD);
        case BD.UNSIGNED_INT_VEC3:
          return void DD.uniform3uiv(zD, sD);
        case BD.UNSIGNED_INT_VEC4:
          return void DD.uniform4uiv(zD, sD);
        case BD.INT_VEC2:
          return void DD.uniform2iv(zD, sD);
        case BD.INT_VEC3:
          return void DD.uniform3iv(zD, sD);
        case BD.INT_VEC4:
          return void DD.uniform4iv(zD, sD);
        default:
          DD.uniform1i(zD, sD[0])
      }
    }

    function tD(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const KD = DD.getParameter(BD.CURRENT_PROGRAM),
        rD = DD.getParameter(BD.TRANSFORM_FEEDBACK_BINDING),
        LD = DD.getParameter(BD.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        cD = DD.getParameter(BD.COPY_READ_BUFFER_BINDING),
        gD = DD.isEnabled(BD.RASTERIZER_DISCARD),
        RD = DD.createTransformFeedback(),
        AD = DD.createBuffer();
      dD.inProbe = !0;
      try {
        const KD = DD.getError();
        KD !== BD.NO_ERROR && yD(`GL error 0x${KD.toString(16)} pending before the decode probe (the renderer's)`), DD.useProgram(zD), DD.bindTransformFeedback(BD.TRANSFORM_FEEDBACK, RD), DD.bindBuffer(BD.TRANSFORM_FEEDBACK_BUFFER, AD), DD.bufferData(BD.TRANSFORM_FEEDBACK_BUFFER, 12 * wD, BD.STREAM_READ), DD.bindBufferBase(BD.TRANSFORM_FEEDBACK_BUFFER, 0, AD), DD.enable(BD.RASTERIZER_DISCARD), DD.beginTransformFeedback(BD.POINTS), pD(), DD.endTransformFeedback(), DD.bindBufferBase(BD.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const rD = DD.getError();
        if (rD !== BD.NO_ERROR) return yD(`${sD}: GL error 0x${rD.toString(16)} on the feedback draw`), null;
        const LD = new Float32Array(3 * wD);
        return DD.bindBuffer(BD.COPY_READ_BUFFER, AD), DD.getBufferSubData(BD.COPY_READ_BUFFER, 0, LD), LD
      } finally {
        gD || DD.disable(BD.RASTERIZER_DISCARD), DD.bindTransformFeedback(BD.TRANSFORM_FEEDBACK, rD), DD.bindBuffer(BD.TRANSFORM_FEEDBACK_BUFFER, LD), DD.bindBuffer(BD.COPY_READ_BUFFER, cD), DD.deleteTransformFeedback(RD), DD.deleteBuffer(AD), DD.useProgram(KD), dD.inProbe = !1
      }
    }

    function FD(DD, zD, wD, pD) {
      const sD = DD.getParameter(BD.COPY_READ_BUFFER_BINDING),
        KD = new Uint8Array(pD);
      return DD.bindBuffer(BD.COPY_READ_BUFFER, zD), DD.getBufferSubData(BD.COPY_READ_BUFFER, wD, KD), DD.bindBuffer(BD.COPY_READ_BUFFER, sD), KD
    }
    const YD = `#version 300 es\nlayout(location = ${hD}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      HD = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      qD = new WeakMap;

    function Dz(DD, zD, wD) {
      const pD = DD.getProgramParameter(zD, BD.ACTIVE_UNIFORMS),
        sD = DD.getParameter(BD.ACTIVE_TEXTURE);
      try {
        for (let sD = 0; sD < pD; sD++) {
          const pD = DD.getActiveUniform(zD, sD);
          if ((null === pD || void 0 === pD ? void 0 : pD.type) !== BD.UNSIGNED_INT_SAMPLER_2D) continue;
          const KD = DD.getUniformLocation(zD, pD.name),
            rD = KD ? DD.getUniform(zD, KD) : -1;
          if (rD < 0) continue;
          DD.activeTexture(BD.TEXTURE0 + rD);
          const LD = DD.getParameter(BD.TEXTURE_BINDING_2D);
          if (LD && jD.get(LD) === wD) return LD
        }
        return null
      } finally {
        DD.activeTexture(sD)
      }
    }

    function zz(DD, zD, wD, pD, sD) {
      const KD = new Uint32Array(4 * sD),
        rD = DD.getParameter(BD.READ_FRAMEBUFFER_BINDING),
        LD = DD.createFramebuffer();
      DD.bindFramebuffer(BD.READ_FRAMEBUFFER, LD), DD.framebufferTexture2D(BD.READ_FRAMEBUFFER, BD.COLOR_ATTACHMENT0, BD.TEXTURE_2D, zD, 0);
      try {
        let zD = 0;
        for (; zD < sD;) {
          const rD = pD + zD,
            LD = rD % wD,
            cD = Math.min(sD - zD, wD - LD);
          DD.readPixels(LD, Math.floor(rD / wD), cD, 1, BD.RGBA_INTEGER, BD.UNSIGNED_INT, KD.subarray(4 * zD, 4 * (zD + cD))), zD += cD
        }
      } finally {
        DD.bindFramebuffer(BD.READ_FRAMEBUFFER, rD), DD.deleteFramebuffer(LD)
      }
      return KD
    }

    function wz(DD, zD, wD) {
      let pD = 0,
        sD = 0;
      for (let cD = 0; cD < zD.bytes.length; cD += PD) {
        pD++;
        const DD = Math.min(cD + PD, zD.bytes.length);
        fD(zD.bytes.subarray(cD, DD)) !== fD(wD.subarray(cD, DD)) && sD++
      }
      const KD = `${DD} ${zD.bytes.length} B cpu ${fD(zD.bytes).toString(16)} gpu ${fD(wD).toString(16)}, ${sD}/${pD} blocks differ${zD.missed?`, ${zD.missed} GPU-side writes uncopied`:""}`;
      if (0 === sD) return KD;
      const {
        count: rD,
        offsets: LD
      } = function(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const pD = Math.min(DD.length, zD.length);
        let sD = Math.abs(DD.length - zD.length);
        const KD = [];
        for (let rD = 0; rD < pD; rD++) DD[rD] !== zD[rD] && (sD++, KD.length < wD && KD.push(rD));
        return {
          count: sD,
          offsets: KD
        }
      }(zD.bytes, wD);
      return kD([`${KD}: ${rD} bytes differ`, ...LD.map((DD => `  +${DD}: cpu ${ID(zD.bytes,DD)} | gpu ${ID(wD,DD)}`))].join("\n")), `${KD}: ${rD} bytes differ, first at ${LD.join(", ")} (context in the saved file)`
    }

    function pz(DD) {
      if (0 === DD.vertices.length) return void yD(`decode probe (${DD.reason}): no terrain draw probed (${DD.draws.length} seen)`);
      const zD = function(DD) {
          const zD = new Map;
          for (const pD of DD) {
            const DD = zD.get(pD.group);
            DD ? DD.push(pD) : zD.set(pD.group, [pD])
          }
          const wD = {
            vertices: DD.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [pD, sD] of zD) {
            const DD = new Map,
              zD = sD.map((zD => {
                const wD = RD(zD.record, zD.slot),
                  pD = [zD.gpu[0] - wD[0], zD.gpu[1] - wD[1], zD.gpu[2] - wD[2]],
                  sD = pD.map((DD => Math.round(64 * DD))).join(","),
                  KD = DD.get(sD);
                return KD ? KD.count++ : DD.set(sD, {
                  count: 1,
                  offset: pD
                }), wD
              }));
            let KD = [0, 0, 0],
              rD = 0;
            for (const wD of DD.values()) wD.count > rD && (rD = wD.count, KD = wD.offset);
            wD.translations.set(pD, KD), sD.forEach(((DD, pD) => {
              var sD;
              const rD = [zD[pD][0] + KD[0], zD[pD][1] + KD[1], zD[pD][2] + KD[2]];
              if (rD.every(((zD, wD) => {
                  return pD = DD.gpu[wD], sD = zD, Math.abs(pD - sD) <= Math.max(.001, 1e-6 * Math.abs(sD));
                  var pD, sD
                }))) return;
              wD.mismatches++, wD.byDirection[LD(DD.record[2])]++, wD.byDiagonal[cD(DD.record[2])]++;
              const gD = AD(DD.record);
              wD.byBand[gD] = (null !== (sD = wD.byBand[gD]) && void 0 !== sD ? sD : 0) + 1, wD.first.length < UD && wD.first.push({
                ...DD,
                expected: rD
              })
            }))
          }
          return wD
        }(DD.vertices),
        wD = zD.byDirection.map(((DD, zD) => DD ? `${rD[zD]} ${DD}` : "")).filter(Boolean).join(" "),
        pD = Object.entries(zD.byBand).map((DD => {
          let [zD, wD] = DD;
          return `${zD}: ${wD}`
        })).join(" ");
      if (yD(`decode probe (${DD.reason}): ${zD.mismatches}/${zD.vertices} vertices differ from the CPU decode over ${DD.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (zD.mismatches ? ` by direction [${wD}] diagonal [0: ${zD.byDiagonal[0]} 1: ${zD.byDiagonal[1]}] extent [${pD}]` : "")), DD.fed.records > 0 || DD.fed.failed > 0) {
        yD(`decode probe input: ${DD.fed.differing}/${DD.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (DD.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (DD.fed.failed ? `; the feed failed on ${DD.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const zD of DD.fed.first) yD(`  ${zD}`)
      }
      for (const sD of zD.first) {
        const [DD, zD, wD] = sD.record;
        yD(`  mismatch part ${sD.group} r0 ${DD.toString(16)} r1 ${zD.toString(16)} r2 ${wD.toString(16)} slot ${sD.slot} (${rD[LD(wD)]}): expected ${sD.expected.map(Kz).join(",")} gpu ${sD.gpu.map(Kz).join(",")}`)
      }
      kD(`decode probe translations: ${[...zD.translations].map((DD=>{let[zD,wD]=DD;return`${zD}: ${wD.map(Kz).join(",")}`})).join("; ")}`)
    }

    function sz(DD) {
      return DD.toString(16)
    }

    function Kz(DD) {
      return Number.isInteger(DD) ? String(DD) : DD.toFixed(3)
    }

    function rz(DD) {
      return null !== dD.pendingCheck ? Promise.resolve() : new Promise((zD => {
        let wD = !1;
        const pD = {
          reason: DD,
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
        dD.pendingCheck = pD;
        const sD = () => {
            dD.pendingCheck = null;
            try {
              ! function(DD) {
                yD(`draw ranges (${DD.reason}): ${DD.terrainDraws} terrain draws in the frame, the first ${DD.draws.length} here`);
                for (const zD of DD.draws) {
                  const DD = zD.rG.slice(0, 8).map((DD => {
                      let [zD, wD] = DD;
                      return `${zD}+${wD}`
                    })).join(" "),
                    wD = zD.rG.length > 8 ? ` (+${zD.rG.length-8} ranges)` : "";
                  yD(`  ${xD(zD.program)} ${zD.program.terrain} ${zD.call} ${DD}${wD} x${zD.instances}${zD.group>=0?` part ${zD.group} chunk ${zD.chunk}`:""} | ${zD.attributes.join(" | ")}`)
                }
              }(pD), pz(pD);
              pD.draws.some((DD => "undefined" !== typeof WebGL2RenderingContext && DD.gl instanceof WebGL2RenderingContext)) || 0 === pD.draws.length ? function(DD) {
                const zD = [],
                  wD = new Map;
                for (const pD of DD)
                  if ("undefined" !== typeof WebGL2RenderingContext && pD.gl instanceof WebGL2RenderingContext)
                    for (const DD of pD.pages) wD.set("buf" === DD.kind ? DD.buffer : DD.texture, {
                      page: DD,
                      gl: pD.gl
                    });
                for (const [pD, {
                    page: sD,
                    gl: KD
                  }] of wD) {
                  const DD = bD.get(pD);
                  if (!DD) {
                    zD.push(`${sD.kind}#${lD(pD)}: no CPU copy (${dD.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === sD.kind) {
                    zD.push(wz(`buf#${DD.id}`, DD, FD(KD, sD.buffer, 0, DD.bytes.length)));
                    continue
                  }
                  const wD = zz(KD, sD.texture, DD.width, 0, DD.width * DD.height),
                    rD = 16 === DD.texelBytes ? new Uint8Array(wD.buffer) : new Uint8Array(new Uint16Array(wD).buffer);
                  zD.push(wz(`tex#${DD.id} (${16===DD.texelBytes?"records":"light"})`, DD, rD))
                }
                for (const pD of zD) yD(`page readback ${pD}`)
              }(pD.draws) : yD("page readback: none on WebGL1 (no buffer readback)")
            } catch (DD) {
              yD(`check failed: ${String(DD)}`)
            }
            zD()
          },
          KD = () => {
            if (pD.draws.length > 0 && !wD) return wD = !0, void setTimeout(sD, 0);
            wD || requestAnimationFrame(KD)
          };
        requestAnimationFrame(KD), setTimeout((() => {
          wD || (wD = !0, sD())
        }), 5e3)
      }))
    }
    var Lz = wD(4722);
    const cz = 20,
      gz = 24,
      Rz = Reflect.apply;

    function Az(DD, zD, wD) {
      if (!DD) return;
      const pD = DD[zD];
      if ("function" === typeof pD) {
        const sD = wD(pD);
        DD[zD] = sD, (0, Lz.x)(sD, pD)
      }
    }
    let Uz = !1;
    const fz = new WeakMap,
      Iz = new WeakMap,
      Bz = new WeakMap,
      Gz = {
        gl: 0,
        lost: 0
      };
    let hz = {
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
      nz = {
        buffer: 0,
        texture: 0
      },
      Mz = 0;

    function Oz(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (DD instanceof ArrayBuffer) return new Uint8Array(DD, zD, wD || void 0);
      if (!ArrayBuffer.isView(DD)) return null;
      const pD = "BYTES_PER_ELEMENT" in DD ? DD.BYTES_PER_ELEMENT : 1,
        sD = DD.byteOffset + zD * pD,
        KD = wD ? wD * pD : DD.byteLength - zD * pD;
      return new Uint8Array(DD.buffer, sD, Math.max(0, KD))
    }

    function Jz(DD, zD) {
      const wD = function(DD) {
        switch (DD) {
          case BD.ARRAY_BUFFER:
            return BD.ARRAY_BUFFER_BINDING;
          case BD.ELEMENT_ARRAY_BUFFER:
            return BD.ELEMENT_ARRAY_BUFFER_BINDING;
          case BD.COPY_READ_BUFFER:
            return BD.COPY_READ_BUFFER_BINDING;
          case BD.COPY_WRITE_BUFFER:
            return BD.COPY_WRITE_BUFFER_BINDING;
          case BD.UNIFORM_BUFFER:
            return BD.UNIFORM_BUFFER_BINDING;
          case BD.PIXEL_UNPACK_BUFFER:
            return BD.PIXEL_UNPACK_BUFFER_BINDING;
          case BD.TRANSFORM_FEEDBACK_BUFFER:
            return BD.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(zD);
      return wD ? DD.getParameter(wD) : null
    }

    function Ez(DD) {
      const zD = bD.get(DD);
      zD && (dD.shadowBytes -= zD.bytes.length, bD.delete(DD))
    }

    function Qz(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Ez(DD), dD.shadowBytes + zD > VD ? dD.uncopied++ : (dD.shadowBytes += zD, bD.set(DD, {
        id: lD(DD),
        bytes: new Uint8Array(zD),
        width: wD,
        height: pD,
        texelBytes: sD,
        missed: 0
      }))
    }

    function Xz(DD, zD) {
      for (const wD of ["deleteBuffer", "deleteTexture"]) Az(DD, wD, (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        return wD[0] && Ez(wD[0]), Rz(DD, this, wD)
      }));
      Az(DD, "shaderSource", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        return wD[0] && "string" === typeof wD[1] && fz.set(wD[0], wD[1]), Rz(DD, this, wD)
      })), Az(DD, "attachShader", (DD => function() {
        for (var zD, wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
        const KD = pD[0],
          rD = null !== (zD = Iz.get(KD)) && void 0 !== zD ? zD : [];
        return rD.push(pD[1]), Iz.set(KD, rD), Rz(DD, this, pD)
      })), Az(DD, "linkProgram", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        const sD = Rz(DD, this, wD);
        return dD.inProbe || function(DD, zD) {
          var wD, pD, sD;
          "undefined" !== typeof HTMLCanvasElement && DD.canvas instanceof HTMLCanvasElement && function(DD) {
            if (bz.has(DD)) return;
            bz.add(DD);
            for (const zD of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) DD.addEventListener(zD, (DD => {
              Gz.lost < cz && (Gz.lost++, yD(`${zD}${"statusMessage"in DD?`: ${String(DD.statusMessage)}`:""}`))
            }))
          }(DD.canvas);
          dD.context ??= DD;
          const KD = null !== (wD = Iz.get(zD)) && void 0 !== wD ? wD : [];
          let rD = "",
            LD = "";
          for (const RD of KD) {
            var cD;
            const DD = null !== (cD = fz.get(RD)) && void 0 !== cD ? cD : "";
            /\bgl_Position\b/.test(DD) ? rD = DD : LD = DD
          }
          const gD = {
            id: lD(zD),
            name: null !== (pD = null === (sD = CD.exec(rD)) || void 0 === sD ? void 0 : sD[1]) && void 0 !== pD ? pD : null,
            gl: DD,
            vertex: rD,
            fragment: LD,
            terrain: Pz(rD),
            checked: !1,
            firstDraw: !1
          };
          if (Bz.set(zD, gD), TD.push([zD, gD]), null !== gD.terrain) {
            const zD = KD.map((zD => {
              var wD;
              return null !== (wD = DD.getShaderInfoLog(zD)) && void 0 !== wD ? wD : ""
            })).filter((DD => "" !== DD.trim()));
            zD.length > 0 && kD(`program ${xD(gD)} (${gD.terrain}) shader logs:\n${mD(zD.join("\n"))}`)
          }
        }(this, wD[0]), sD
      })), Az(DD, "bufferData", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        const sD = Rz(DD, this, wD);
        if (!dD.inProbe) {
          const DD = Jz(this, wD[0]);
          if (DD) {
            var KD, rD, LD;
            const zD = "number" === typeof wD[1] ? null : Oz(wD[1], null !== (KD = wD[3]) && void 0 !== KD ? KD : 0, null !== (rD = wD[4]) && void 0 !== rD ? rD : 0);
            var cD;
            if (Qz(DD, "number" === typeof wD[1] ? wD[1] : null !== (LD = null === zD || void 0 === zD ? void 0 : zD.length) && void 0 !== LD ? LD : 0), zD) null === (cD = bD.get(DD)) || void 0 === cD || cD.bytes.set(zD)
          }
        }
        return sD
      })), Az(DD, "bufferSubData", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        const sD = Rz(DD, this, wD);
        if (!dD.inProbe) {
          var KD, rD;
          const DD = Jz(this, wD[0]),
            zD = DD ? bD.get(DD) : void 0,
            pD = Oz(wD[2], null !== (KD = wD[3]) && void 0 !== KD ? KD : 0, null !== (rD = wD[4]) && void 0 !== rD ? rD : 0);
          if (zD && pD) {
            const DD = wD[1];
            zD.bytes.set(pD.subarray(0, Math.max(0, zD.bytes.length - DD)), DD), Vz("buffer", zD, DD, pD.length)
          }
        }
        return sD
      })), zD && (Az(DD, "copyBufferSubData", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        const sD = Rz(DD, this, wD);
        if (!dD.inProbe) {
          const [DD, zD, pD, sD, KD] = wD, rD = Jz(this, DD), LD = Jz(this, zD), cD = rD ? bD.get(rD) : void 0, gD = LD ? bD.get(LD) : void 0;
          gD && (cD ? gD.bytes.set(cD.bytes.slice(pD, pD + KD), sD) : gD.missed++)
        }
        return sD
      })), Az(DD, "texStorage2D", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        const sD = Rz(DD, this, wD),
          [, , KD, rD, LD] = wD;
        if (!dD.inProbe && (KD === BD.RGBA32UI || KD === BD.RGBA16UI)) {
          const DD = this.getParameter(BD.TEXTURE_BINDING_2D),
            zD = KD === BD.RGBA32UI ? 16 : 8;
          DD && (jD.set(DD, zD), Qz(DD, rD * LD * zD, rD, LD, zD))
        }
        return sD
      })), Az(DD, "texSubImage2D", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        const sD = Rz(DD, this, wD);
        return !dD.inProbe && wD.length >= 9 && wD[0] === BD.TEXTURE_2D && 0 === wD[1] && function(DD, zD) {
          var wD;
          const pD = DD.getParameter(BD.TEXTURE_BINDING_2D),
            sD = pD ? bD.get(pD) : void 0;
          if (!sD) return;
          const [, , KD, rD, LD, cD] = zD;
          let gD = Oz(zD[8], null !== (wD = zD[9]) && void 0 !== wD ? wD : 0);
          if (null === gD && "number" === typeof zD[8]) {
            const wD = Jz(DD, BD.PIXEL_UNPACK_BUFFER),
              pD = wD ? bD.get(wD) : void 0;
            gD = pD ? pD.bytes.subarray(zD[8]) : null
          }
          if (null === gD) return void sD.missed++;
          const RD = DD.getParameter(BD.UNPACK_ROW_LENGTH) || LD,
            AD = DD.getParameter(BD.UNPACK_SKIP_ROWS),
            UD = DD.getParameter(BD.UNPACK_SKIP_PIXELS),
            fD = sD.texelBytes;
          for (let ID = 0; ID < cD; ID++) {
            const DD = ((AD + ID) * RD + UD) * fD,
              zD = ((rD + ID) * sD.width + KD) * fD;
            sD.bytes.set(gD.subarray(DD, DD + LD * fD), zD)
          }
          Vz("texture", sD, (rD * sD.width + KD) * fD, LD * cD * fD)
        }(this, wD), sD
      })), Az(DD, "copyTexSubImage2D", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        const sD = wD[0] === BD.TEXTURE_2D ? this.getParameter(BD.TEXTURE_BINDING_2D) : null,
          KD = sD ? bD.get(sD) : void 0;
        return KD && KD.missed++, Rz(DD, this, wD)
      })));
      for (const wD of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Az(DD, wD, (DD => function() {
        for (var zD = arguments.length, pD = new Array(zD), sD = 0; sD < zD; sD++) pD[sD] = arguments[sD];
        const KD = Rz(DD, this, pD);
        return dD.inProbe || xz(this, wD, pD), KD
      }));
      Az(DD, "getExtension", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        const sD = Rz(DD, this, wD);
        return sD && "object" === typeof sD && function(DD, zD, wD) {
          const pD = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(zD in pD) || wD.bloxdRenderDebug) return;
          wD.bloxdRenderDebug = !0;
          for (const sD of pD[zD]) {
            const zD = wD[sD];
            "function" === typeof zD && (wD[sD] = function() {
              for (var pD = arguments.length, KD = new Array(pD), rD = 0; rD < pD; rD++) KD[rD] = arguments[rD];
              const LD = Rz(zD, wD, KD);
              return dD.inProbe || xz(DD, sD, KD), LD
            })
          }
        }(this, wD[0], sD), sD
      }))
    }

    function Vz(DD, zD, wD, pD) {
      nz[DD] += pD, Mz < 32 && zD.bytes.length >= 1 << 20 && (Mz++, kD(`upload ${DD} #${zD.id} +${wD} ${pD} B`))
    }

    function Pz(DD) {
      if (!DD.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(DD) || /in uvec3 _p2vs_location0\b/.test(DD) ? "inst" : "tex"
    }

    function Cz(DD, zD, wD) {
      var pD;
      if (wD.checked) return;
      wD.checked = !0;
      const sD = DD.getProgramParameter(zD, BD.LINK_STATUS),
        KD = (null !== (pD = DD.getProgramInfoLog(zD)) && void 0 !== pD ? pD : "").trim();
      var rD;
      null === wD.terrain && sD || (yD(`program ${xD(wD)} ${null!==(rD=wD.terrain)&&void 0!==rD?rD:"other"} link ${sD?"ok":"FAILED"}${KD?`: ${mD(KD,300)}`:""}`), KD && kD(`program ${xD(wD)} link log:\n${mD(KD)}`))
    }

    function xz(DD, zD, wD) {
      var pD;
      const sD = DD.getParameter(BD.CURRENT_PROGRAM),
        KD = sD ? Bz.get(sD) : void 0;
      if (!sD || !KD) return;
      const rD = null !== (pD = KD.terrain) && void 0 !== pD ? pD : "other",
        {
          rG: LD,
          instances: cD
        } = function(DD, zD) {
          switch (DD) {
            case "drawArrays":
              return {
                rG: [
                  [zD[1], zD[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                rG: [
                  [zD[1], zD[2]]
                ], instances: zD[3]
              };
            case "drawElements":
              return {
                rG: [
                  [0, zD[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                rG: [
                  [0, zD[1]]
                ], instances: zD[4]
              };
            case "multiDrawArraysWEBGL": {
              const DD = zD[1],
                wD = zD[3],
                pD = zD[2],
                sD = zD[4],
                KD = [];
              for (let rD = 0; rD < zD[5]; rD++) KD.push([DD[pD + rD], wD[sD + rD]]);
              return {
                rG: KD,
                instances: 1
              }
            }
            default:
              return {
                rG: [], instances: 0
              }
          }
        }(zD, wD),
        gD = "inst" === KD.terrain ? cD : LD.reduce(((DD, zD) => {
          let [, wD] = zD;
          return DD + wD
        }), 0) / 6;
      if (hz[rD].draws++, hz[rD].faces += gD, null === KD.terrain) return;
      if (dD.context = DD, !KD.firstDraw) {
        KD.firstDraw = !0, Cz(DD, sD, KD), Tz || (Tz = !0, yD(function(DD) {
          var zD;
          const wD = DD.getParameter(BD.DEPTH_FUNC),
            pD = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let sD = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in DD && DD.getParameter(BD.DRAW_FRAMEBUFFER_BINDING)) {
            const zD = DD;
            sD = zD.getFramebufferAttachmentParameter(BD.DRAW_FRAMEBUFFER, BD.DEPTH_ATTACHMENT, BD.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(zD.getFramebufferAttachmentParameter(BD.DRAW_FRAMEBUFFER,BD.DEPTH_ATTACHMENT,BD.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(zD.getFramebufferAttachmentParameter(BD.DRAW_FRAMEBUFFER,BD.DEPTH_ATTACHMENT,BD.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const KD = DD.getParameter(BD.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(zD=pD[wD])&&void 0!==zD?zD:`0x${wD.toString(16)}`} clear ${KD}${516===wD||518===wD?" (reverse-Z)":""}, samples ${String(DD.getParameter(BD.SAMPLES))}, ${sD}`
        }(DD)));
        const wD = DD.getError();
        wD !== BD.NO_ERROR && Gz.gl < cz && (Gz.gl++, yD(`GL error 0x${wD.toString(16)} after program ${xD(KD)}'s first terrain draw (${zD})`))
      }
      const RD = dD.pendingCheck;
      null !== RD && (RD.terrainDraws++, RD.draws.length < gz && eD(DD, sD, KD, zD, LD, cD))
    }
    let Tz = !1;
    const bz = new WeakSet;
    var jz = wD(4527),
      dz = wD(4729);
    const Sz = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let iz = !1;
    const lz = new WeakSet,
      Wz = new WeakMap,
      Nz = new WeakMap,
      Zz = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let yz = 0,
      kz = !1,
      mz = null,
      ez = {
        draws: 0,
        faces: 0
      };

    function oz(DD) {
      const zD = globalThis[DD];
      return null === zD || void 0 === zD ? void 0 : zD.prototype
    }

    function az(DD) {
      return DD && "function" === typeof DD[Symbol.iterator] ? [...DD].sort().join(" ") : ""
    }

    function uz(DD, zD) {
      const wD = null !== DD && void 0 !== DD ? DD : {},
        pD = null !== zD && void 0 !== zD ? zD : Object.keys(Object.getPrototypeOf(wD)).concat(Object.keys(wD));
      return [...new Set(pD)].filter((DD => "number" === typeof wD[DD])).map((DD => `${DD} ${String(wD[DD])}`)).join(", ")
    }

    function vz(DD, zD) {
      var wD;
      const pD = null !== (wD = zD.vertex) && void 0 !== wD ? wD : {};
      if (pD.module && lz.has(pD.module)) {
        var sD;
        const wD = String(null !== (sD = pD.entryPoint) && void 0 !== sD ? sD : "");
        if (wD.startsWith("vs_packed") && Wz.set(DD, wD), !kz) {
          var KD, rD, LD, cD, gD;
          kz = !0;
          const DD = null !== (KD = zD.depthStencil) && void 0 !== KD ? KD : {},
            pD = null !== (rD = zD.multisample) && void 0 !== rD ? rD : {},
            sD = String(null !== (LD = DD.depthCompare) && void 0 !== LD ? LD : "");
          yD(`WebGPU terrain pipeline ${wD}: depth ${String(null!==(cD=DD.format)&&void 0!==cD?cD:"none")} ${sD}${sD.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(gD=pD.count)&&void 0!==gD?gD:1)}`)
        }
      }
    }

    function tz(DD) {
      Az(DD, "setPipeline", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        return Nz.set(this, wD[0]), Rz(DD, this, wD)
      }));
      for (const zD of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Az(DD, zD, (DD => function() {
        const wD = Nz.get(this),
          pD = wD ? Wz.get(wD) : void 0;
        for (var sD = arguments.length, KD = new Array(sD), rD = 0; rD < sD; rD++) KD[rD] = arguments[rD];
        return void 0 !== pD && Fz(zD, pD, KD), Rz(DD, this, KD)
      }))
    }

    function Fz(DD, zD, wD) {
      var pD;
      (ez.draws++, "draw" === DD || "drawIndexed" === DD) && (ez.faces += wD[0] * (null !== (pD = wD[1]) && void 0 !== pD ? pD : 1) / 6);
      if (null !== mz && mz.length < gz) {
        const pD = ("draw" === DD ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === DD ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((zD, pD) => {
          const sD = DD.endsWith("Indirect") ? wD[1] : wD[pD];
          return `${zD} ${String(null!==sD&&void 0!==sD?sD:"instances"===zD?1:0)}`
        }));
        mz.push(`  ${zD} ${DD} ${pD.join(" ")}`)
      }
    }

    function Yz() {
      if (iz || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      iz = !0, Az(oz("GPU"), "requestAdapter", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        return Rz(DD, this, wD).then((DD => {
          var zD;
          DD ? function(DD) {
            var zD;
            const wD = null !== (zD = DD.info) && void 0 !== zD ? zD : {};
            yD(`WebGPU adapter ${["vendor","architecture","device","description"].map((DD=>{var zD;return`${DD} "${String(null!==(zD=wD[DD])&&void 0!==zD?zD:"")}"`})).join(" ")}${DD.isFallbackAdapter?" (fallback)":""}`), yD(`WebGPU adapter features ${az(DD.features)}`), yD(`WebGPU adapter limits ${uz(DD.limits,Sz)}`), kD(`WebGPU adapter all limits ${uz(DD.limits,null)}`)
          }(DD) : yD(`WebGPU requestAdapter(${JSON.stringify(null!==(zD=wD[0])&&void 0!==zD?zD:{})}) gave none`);
          return DD
        }))
      })), Az(oz("GPUAdapter"), "requestDevice", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        return Rz(DD, this, wD).then((DD => (function(DD) {
          yD(`WebGPU device features ${az(DD.features)}`), yD(`WebGPU device limits ${uz(DD.limits,Sz)}`), DD.addEventListener("uncapturederror", (DD => {
            if (Zz.uncaptured < cz) {
              var zD, wD, pD;
              Zz.uncaptured++;
              const sD = DD.error;
              yD(`WebGPU uncaptured ${null!==(zD=null===sD||void 0===sD||null===(wD=sD.constructor)||void 0===wD?void 0:wD.name)&&void 0!==zD?zD:"error"}: ${mD(String(null!==(pD=null===sD||void 0===sD?void 0:sD.message)&&void 0!==pD?pD:""),600)}`)
            }
          }));
          const zD = DD.lost;
          null === zD || void 0 === zD || zD.then((DD => {
            var zD;
            yD(`WebGPU device lost (${String(DD.reason)}): ${mD(String(null!==(zD=DD.message)&&void 0!==zD?zD:""),600)}`)
          }))
        }(DD), DD)), (DD => {
          throw yD(`WebGPU requestDevice failed: ${String(DD)}`), DD
        }))
      }));
      const DD = oz("GPUDevice");
      Az(DD, "createShaderModule", (DD => function() {
        for (var zD, wD, pD = arguments.length, sD = new Array(pD), KD = 0; KD < pD; KD++) sD[KD] = arguments[KD];
        const rD = Rz(DD, this, sD);
        return function(DD, zD) {
          const wD = zD.includes("decodeQuad");
          wD && lz.add(DD);
          const pD = DD.getCompilationInfo;
          null === pD || void 0 === pD || pD.call(DD).then((DD => {
            if (0 === DD.messages.length && !wD) return;
            const zD = {};
            for (const wD of DD.messages) {
              var pD;
              zD[String(wD.type)] = (null !== (pD = zD[String(wD.type)]) && void 0 !== pD ? pD : 0) + 1
            }
            const sD = DD.messages.map((DD => `${String(DD.type)} ${String(DD.lineNum)}:${String(DD.linePos)} ${String(DD.message)}`)).join("\n");
            Zz.compile < cz && (Zz.compile++, yD(`WebGPU ${wD?"terrain ":""}shader module compiled: ${JSON.stringify(zD)}${sD?` first: ${mD(sD.split("\n")[0],300)}`:""}`)), sD && kD(`WebGPU shader module messages:\n${mD(sD)}`)
          }))
        }(rD, String(null !== (zD = (null !== (wD = sD[0]) && void 0 !== wD ? wD : {}).code) && void 0 !== zD ? zD : "")), rD
      })), Az(DD, "createRenderPipeline", (DD => function() {
        for (var zD, wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
        const KD = Rz(DD, this, pD);
        return vz(KD, null !== (zD = pD[0]) && void 0 !== zD ? zD : {}), KD
      })), Az(DD, "createRenderPipelineAsync", (DD => function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        return Rz(DD, this, wD).then((DD => {
          var zD;
          return vz(DD, null !== (zD = wD[0]) && void 0 !== zD ? zD : {}), DD
        }), (DD => {
          var zD;
          throw function(DD, zD) {
            var wD, pD, sD;
            if (Zz.rejected >= cz) return;
            Zz.rejected++;
            const {
              reason: KD,
              message: rD
            } = null !== zD && void 0 !== zD ? zD : {}, LD = String(null !== (wD = (null !== (pD = DD.vertex) && void 0 !== pD ? pD : {}).entryPoint) && void 0 !== wD ? wD : "");
            yD(`WebGPU pipeline "${String(null!==(sD=DD.label)&&void 0!==sD?sD:"")}" ${LD} rejected (${String(null!==KD&&void 0!==KD?KD:"no reason")}): ${mD(String(null!==rD&&void 0!==rD?rD:zD),600)}`)
          }(null !== (zD = wD[0]) && void 0 !== zD ? zD : {}, DD), DD
        }))
      })), Az(oz("GPUCanvasContext"), "configure", (DD => function() {
        for (var zD, wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
        const KD = null !== (zD = pD[0]) && void 0 !== zD ? zD : {};
        var rD, LD;
        yz++ < 3 && yD(`WebGPU canvas ${String(KD.format)} ${String(null!==(rD=KD.colorSpace)&&void 0!==rD?rD:"srgb")} alpha ${String(null!==(LD=KD.alphaMode)&&void 0!==LD?LD:"opaque")}`);
        return Rz(DD, this, pD)
      })), tz(oz("GPURenderPassEncoder")), tz(oz("GPURenderBundleEncoder"))
    }
    const Hz = 1e4,
      qz = 6e4,
      Dw = 5e3,
      zw = 3e3,
      ww = 100;
    let pw = null,
      sw = !1,
      Kw = {
        ...jz.e
      },
      rw = !1,
      Lw = null,
      gw = 0,
      Rw = () => {};
    const Aw = new Promise((DD => {
      Rw = DD
    }));

    function Uw() {
      var DD;
      sw || (sw = !0, Kw = Object.assign(window.bloxdRenderDebug ??= {
        ...jz.e
      }, {
        faceCull: "0" === (0, KD.p)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (DD = (0, KD.p)("adrenoProbe")) && void 0 !== DD ? DD : ""
      }), yD("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Uz || "undefined" === typeof window || (Uz = !0, "undefined" !== typeof WebGL2RenderingContext && Xz(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && Xz(WebGLRenderingContext.prototype, !1)), Yz(), (0, KD.c)("renderProbe", (() => {
        nw("console")
      })), Gw(), setInterval(Ow, Dw))
    }

    function fw(DD) {
      var zD, wD;
      Uw(), pw = null !== (zD = null === DD || void 0 === DD ? void 0 : DD.backend) && void 0 !== zD ? zD : null;
      const pD = `, renderer param ${null!==(wD=(0,KD.p)("renderer"))&&void 0!==wD?wD:"none"}, faceCull ${"0"===Kw.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Kw.adrenoProbe||"none"}`;
      yD(`${(0,dz.d)(DD)}${null===DD?"":pD}`)
    }

    function Iw() {
      const DD = performance.now(),
        zD = Bw(Aw, Hz, qz).then((zD => nw(`${Math.round((performance.now()-DD)/1e3)} s after playable${zD?"":", no terrain drawn yet"}`)));
      (0, sD.d)(yD, (async () => {
        await zD, await Lw
      }))
    }
    async function Bw(DD, zD, wD) {
      const sD = (0, pD.e)(wD).then((() => !1));
      return await (0, pD.e)(zD), Promise.race([DD.then((() => !0)), sD])
    }

    function Gw() {
      requestAnimationFrame((() => {
        gw++, Gw()
      }))
    }

    function hw() {
      var DD, zD, wD;
      if (rw) return;
      (rw = !0, yD(`renderer caps ${null!==(DD=Kw.caps)&&void 0!==DD?DD:"(not noted)"}; terrain fetch ${null!==(zD=Kw.fetch)&&void 0!==zD?zD:"(not noted)"}`), Kw.adrenoProbe) && yD(`adrenoProbe ${Kw.adrenoProbe} asked; in force (storage fetch only): ${null!==(wD=Kw.probe)&&void 0!==wD?wD:"(not noted)"}`);
      const pD = dD.context;
      if (pD) {
        for (const DD of function(DD) {
            var zD;
            const wD = [],
              pD = DD.getExtension("WEBGL_debug_renderer_info"),
              sD = pD ? DD.getParameter(pD.UNMASKED_VENDOR_WEBGL) : "(masked)",
              KD = pD ? DD.getParameter(pD.UNMASKED_RENDERER_WEBGL) : "(masked)";
            wD.push(`GL ${String(DD.getParameter(DD.VERSION))} | ${String(DD.getParameter(DD.SHADING_LANGUAGE_VERSION))} | ${String(DD.getParameter(DD.VENDOR))} / ${String(DD.getParameter(DD.RENDERER))}`), wD.push(`GL unmasked ${sD} / ${KD}`);
            const rD = [
              ["MAX_TEXTURE_SIZE", DD.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", DD.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", DD.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", DD.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", DD.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", DD.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", DD.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in DD && rD.push(["MAX_UNIFORM_BLOCK_SIZE", DD.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", DD.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", DD.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", DD.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), wD.push(`GL limits ${rD.map((zD=>{let[wD,pD]=zD;return`${wD} ${String(DD.getParameter(pD))}`})).join(", ")}`);
            const LD = (zD, wD) => {
              const pD = DD.getShaderPrecisionFormat(zD, DD.HIGH_FLOAT),
                sD = DD.getShaderPrecisionFormat(zD, DD.HIGH_INT);
              return `${wD} highp float ${pD?`${pD.rangeMin}/${pD.rangeMax}/${pD.precision}`:"?"} int ${sD?`${sD.rangeMin}/${sD.rangeMax}/${sD.precision}`:"?"}`
            };
            wD.push(`GL precision ${LD(DD.VERTEX_SHADER,"VS")}, ${LD(DD.FRAGMENT_SHADER,"FS")}`);
            const cD = DD.getContextAttributes();
            return wD.push(`GL context ${JSON.stringify(cD)} drawingBuffer ${DD.drawingBufferWidth}x${DD.drawingBufferHeight}${"drawingBufferFormat"in DD?` format 0x${Number(DD.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in DD?` ${String(DD.drawingBufferColorSpace)}`:""}`), wD.push(`GL extensions ${(null!==(zD=DD.getSupportedExtensions())&&void 0!==zD?zD:[]).join(" ")}`), wD
          }(pD)) yD(DD);
        ! function() {
          if (!dD.context) return;
          let DD = 0,
            zD = 0;
          for (const [wD, pD] of TD) !pD.gl.isContextLost() && pD.gl.isProgram(wD) && (zD++, Cz(pD.gl, wD, pD), null !== pD.terrain && DD++);
          yD(`programs: ${zD} live of ${TD.length} linked, ${DD} packed terrain; CPU page copies ${Math.round(dD.shadowBytes/1048576)} MiB (${dD.uncopied} over budget)`)
        }()
      }
    }

    function nw(DD) {
      return Lw ??= async function(DD) {
        hw(), "webgpu" === pw ? (Mw(), "1" === Kw.slotCheck && yD("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Kw.slotCheck = "1", await
          function(DD) {
            if (null !== mz) return Promise.resolve();
            const zD = [];
            return mz = zD, new Promise((wD => {
              setTimeout((() => {
                mz = null, yD(`WebGPU draw ranges (${DD}): ${zD.length} terrain draws recorded in a second (first ${gz}; bundles replay without new ones)`);
                for (const DD of zD) yD(DD);
                wD()
              }), 1e3)
            }))
          }(DD), await async function() {
            if (await (0, jz.j)(Kw, "slotCheck", ["1"], zw, ww), "1" === Kw.slotCheck) return void yD(`slot check: no answer in ${zw} ms (only the storage fetch has one; a later answer logs on its own)`);
            Mw()
          }()) : await rz(DD);
        yD(`check (${DD}) done: bloxdDebug.save() downloads it all`)
      }(DD).catch((zD => {
        yD(`check (${DD}) failed: ${String(zD)}`)
      })).finally((() => {
        Lw = null
      })), Lw
    }

    function Mw() {
      void 0 !== Kw.slotCheck && "1" !== Kw.slotCheck && (yD(Kw.slotCheck), delete Kw.slotCheck)
    }

    function Ow() {
      const DD = DD => gw ? (DD / gw).toFixed(1) : "0",
        zD = function() {
          const DD = ez;
          return ez = {
            draws: 0,
            faces: 0
          }, DD
        }(),
        wD = function() {
          const DD = hz;
          return hz = {
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
          }, DD
        }(),
        pD = function() {
          const DD = nz;
          return nz = {
            buffer: 0,
            texture: 0
          }, DD
        }();
      Mw(), ("webgpu" === pw ? zD.draws : wD.inst.draws + wD.tex.draws) > 0 && Rw();
      const sD = "webgpu" === pw ? [`terrain ${DD(zD.draws)} draws ${DD(zD.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((DD => wD[DD].draws > 0)).map((zD => `${zD} ${DD(wD[zD].draws)} draws ${DD(wD[zD].faces)} faces a frame`));
      yD(`${gw} frames: ${sD.join(", ")||"no draws"}; uploaded ${Math.round(pD.buffer/1024)} KiB to buffers, ${Math.round(pD.texture/1024)} KiB to data textures`), gw = 0
    }
  },
  4729: (DD, zD, wD) => {
    function pD(DD) {
      if (null === DD) return "backend: none picked (no renderer build)";
      const zD = DD.adapter ? `${DD.adapter.vendor}/${DD.adapter.architecture}` : "none";
      return `backend ${DD.backend}: reason ${DD.reason}, source ${DD.source}, adapter ${zD}`
    }
    wD.d(zD, {
      d: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);