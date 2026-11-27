export const id = 237;
export const ids = [237];
export const modules = {
  53511: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      loadGlbAsset: () => pJ,
      loadGlbTree: () => lJ
    });
    var yR = GR(39062),
      tR = GR(134),
      uR = GR(1287);

    function ZR(RR) {
      return (0, tR.isDiscordClient)() ? `https://${uR.e.discordDomain}/${RR.href}` : RR.href
    }
    const qR = {
      scriptUrl: ZR(new GR.U(GR(53515))),
      wasmBinaryUrl: ZR(new GR.U(GR(53520)))
    };
    var iR = GR(2457),
      fR = GR(37156),
      VR = GR.n(fR);

    function KR() {
      return VR()('(()=>{class RR extends Error{}function JR(JR,GR){const yR=JR._malloc(GR);if(0===yR)throw new RR(`Draco: the decoder\'s heap refused ${GR} bytes`);return yR}function GR(GR,yR,tR,uR){let ZR=null,qR=null,iR=null;try{ZR=new GR.Decoder,qR=new GR.DecoderBuffer,qR.Init(yR,yR.byteLength);let fR=0;const VR=ZR.GetEncodedGeometryType(qR);if(VR===GR.TRIANGULAR_MESH){const JR=new GR.Mesh;iR=JR;const yR=ZR.DecodeBufferToMesh(qR,JR);if(!yR.ok()||0===JR.ptr)throw new RR(yR.error_msg());fR=3*JR.num_faces()}else{if(VR!==GR.POINT_CLOUD)throw new RR(`Draco: Cannot decode invalid geometry type ${VR}`);{const JR=new GR.PointCloud;iR=JR;const yR=ZR.DecodeBufferToPointCloud(qR,JR);if(!yR.ok()||!JR.ptr)throw new RR(yR.error_msg())}}const KR=iR.num_points();if(KR!==uR.vertices||fR!==uR.indices)throw new RR(`Draco: decoded ${KR} vertices and ${fR} indices, the accessors declare ${uR.vertices} and ${uR.indices}`);const wR=function(RR){return{[RR.DT_FLOAT32]:Float32Array,[RR.DT_INT8]:Int8Array,[RR.DT_INT16]:Int16Array,[RR.DT_INT32]:Int32Array,[RR.DT_UINT8]:Uint8Array,[RR.DT_UINT16]:Uint16Array,[RR.DT_UINT32]:Uint32Array}}(GR),rR=[];for(const JR of Object.keys(tR)){const GR=tR[JR],yR=uR.components[JR],qR=ZR.GetAttributeByUniqueId(iR,GR);if(!qR||0===qR.ptr)throw new RR(`Draco: no attribute with id ${GR} (${JR})`);const fR=qR.data_type();if(!wR[fR])throw new RR(`Draco: Cannot decode invalid data type ${fR}`);if(qR.num_components()!==yR)throw new RR(`Draco: ${JR} decodes to ${qR.num_components()} components, its accessor declares ${yR}`);rR.push([JR,qR,wR[fR]])}let eR=null;if(VR===GR.TRIANGULAR_MESH){const RR=4*fR,yR=JR(GR,RR);try{ZR.GetTrianglesUInt32Array(iR,RR,yR),eR=new Uint32Array(fR),eR.set(new Uint32Array(GR.HEAPF32.buffer,yR,fR))}finally{GR._free(yR)}}const aR=[];for(const[RR,yR,tR]of rR){const uR=yR.num_components(),qR=KR*uR,fR=qR*tR.BYTES_PER_ELEMENT,VR=JR(GR,fR);try{ZR.GetAttributeDataArrayForAllPoints(iR,yR,yR.data_type(),fR,VR),aR.push({kind:RR,data:new tR(GR.HEAPF32.buffer,VR,qR).slice(),size:uR,byteOffset:yR.byte_offset(),byteStride:yR.byte_stride(),normalized:yR.normalized()})}finally{GR._free(VR)}}return{indices:eR,attributes:aR,totalVertices:KR}}finally{iR&&GR.destroy(iR),qR&&GR.destroy(qR),ZR&&GR.destroy(ZR)}}const yR=self;let tR=null;self.onmessage=RR=>{let{data:JR}=RR;if("init"===JR.id){try{importScripts(JR.url),tR=DracoDecoderModule({wasmBinary:JR.wasmBinary}),yR.postMessage({id:"initDone"})}catch(fR){yR.postMessage({id:"initError",message:fR instanceof Error?fR.message:String(fR)})}return}const{seq:uR,data:ZR,attributeIds:qR,expected:iR}=JR;tR?tR.then((RR=>{try{const JR=GR(RR,ZR,qR,iR),tR=JR.attributes.map((RR=>RR.data.buffer));JR.indices&&tR.push(JR.indices.buffer),yR.postMessage({id:"decoded",seq:uR,...JR},tR)}catch(fR){yR.postMessage({id:"decodeError",seq:uR,message:fR instanceof Error?fR.message:String(fR)})}}),(RR=>{yR.postMessage({id:"decodeError",seq:uR,message:RR instanceof Error?RR.message:String(RR)})})):yR.postMessage({id:"decodeError",seq:uR,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, GR.p + "dracoDecode.worker.d082dd46.worker.js")
    }
    var wR = GR(103),
      rR = GR(5191),
      eR = GR(327);
    const aR = 2;
    const LR = 1e3;
    let nR = null,
      UR = null;
    const WR = [],
      AR = [];
    let CR = 0;
    const XR = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };
    let MR = null;

    function BR() {
      if (!nR) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: RR,
        wasmBinaryUrl: JR
      } = nR;
      return UR ??= (0, iR.B)(JR), UR.catch((() => {
        UR = null
      })), XR.workersStarted++, Promise.all([UR, (0, eR.k)()]).then((JR => {
        let [GR] = JR;
        return new Promise(((JR, yR) => {
          const tR = new KR;
          tR.onerror = RR => {
            tR.onmessage = null, tR.onerror = null, tR.terminate(), yR(new Error("Draco: the decode worker failed to start" + (RR.message ? `: ${RR.message}` : " (its script did not load)")))
          }, tR.onmessage = RR => {
            let {
              data: GR
            } = RR;
            tR.onmessage = null, tR.onerror = null, "initDone" === GR.id ? JR(tR) : (tR.terminate(), yR(new Error(`Draco: ${"initError"===GR.id?GR.message:"the worker did not start"}`)))
          };
          const uR = GR.slice().buffer,
            ZR = {
              id: "init",
              url: RR,
              wasmBinary: uR
            };
          tR.postMessage(ZR, [uR])
        }))
      }))
    }

    function lR(RR) {
      const JR = WR.indexOf(RR); - 1 !== JR && WR.splice(JR, 1);
      const GR = AR.shift();
      GR && gR(GR)
    }

    function pR(RR, JR) {
      RR.busy = !0, RR.releaseTimer && (clearTimeout(RR.releaseTimer), RR.releaseTimer = null);
      RR.worker.then((GR => {
        const yR = CR++;
        GR.onmessage = tR => {
          let {
            data: uR
          } = tR;
          if (("decoded" === uR.id || "decodeError" === uR.id) && uR.seq === yR) {
            if (GR.onmessage = null, GR.onerror = null, "decoded" === uR.id) return XR.decodes++, JR.resolve({
              indices: uR.indices,
              attributes: uR.attributes,
              totalVertices: uR.totalVertices
            }), void(() => {
              const JR = AR.shift();
              JR ? pR(RR, JR) : (RR.busy = !1, RR.releaseTimer = setTimeout((() => {
                const JR = WR.indexOf(RR); - 1 !== JR && WR.splice(JR, 1), RR.worker.then((RR => {
                  RR.terminate()
                }))
              }), LR))
            })();
            GR.terminate(), JR.reject(new Error(uR.message)), lR(RR)
          }
        }, GR.onerror = yR => {
          GR.onmessage = null, GR.onerror = null, GR.terminate(), JR.reject(new Error(`Draco: the decode worker failed: ${yR.message}`)), lR(RR)
        };
        const tR = {
          id: "decode",
          seq: yR,
          data: JR.data,
          attributeIds: JR.attributeIds,
          expected: JR.expected
        };
        GR.postMessage(tR, [JR.data.buffer])
      }), (GR => {
        JR.reject(GR instanceof Error ? GR : new Error(String(GR))), lR(RR)
      }))
    }

    function gR(RR) {
      const JR = WR.find((RR => !RR.busy));
      if (JR) pR(JR, RR);
      else {
        if (MR ??= (0, rR.e)() ? 1 : function(RR, JR) {
            const GR = RR ? Math.max(1, Math.min(Math.floor(.5 * RR), 4)) : 1;
            return JR ? Math.min(GR, aR) : GR
          }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, wR.isMobile)()), WR.length < MR) {
          const JR = {
            worker: BR(),
            busy: !0,
            releaseTimer: null
          };
          return WR.push(JR), XR.mostWorkers = Math.max(XR.mostWorkers, WR.length), void pR(JR, RR)
        }
        AR.push(RR)
      }
    }

    function bR(RR, JR, GR) {
      return new Promise(((yR, tR) => {
        gR({
          data: new Int8Array(RR.buffer, RR.byteOffset, RR.byteLength).slice(),
          attributeIds: JR,
          expected: GR,
          resolve: yR,
          reject: tR
        })
      }))
    }
    var vR = GR(38516),
      OR = GR(38532),
      xR = GR(35252),
      NR = GR(35244);
    const DR = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function HR(RR) {
      const JR = (0, NR.i)(RR.byteLength);
      if (JR) throw new xR.l(JR);
      const {
        json: GR,
        bin: yR
      } = (0, xR.y)(RR), tR = (0, NR.f)(GR, yR);
      if (tR) throw new xR.l(tR);
      try {
        return function(RR, JR) {
          var GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR;
          const nR = new Map,
            UR = GR => {
              let yR = nR.get(GR);
              if (!yR) {
                var tR;
                const uR = RR.bufferViews[GR],
                  ZR = null !== (tR = uR.byteOffset) && void 0 !== tR ? tR : 0;
                yR = {
                  index: GR,
                  bytes: JR.subarray(ZR, ZR + uR.byteLength),
                  byteStride: uR.byteStride
                }, nR.set(GR, yR)
              }
              return yR
            },
            WR = new Map,
            AR = JR => {
              let GR = WR.get(JR);
              if (!GR) {
                var yR;
                const tR = RR.accessors[JR];
                GR = {
                  index: JR,
                  count: tR.count,
                  type: tR.type,
                  numComponents: xR.n[tR.type],
                  componentType: tR.componentType,
                  normalized: null !== (yR = tR.normalized) && void 0 !== yR && yR,
                  byteOffset: tR.byteOffset,
                  bufferView: void 0 === tR.bufferView ? null : UR(tR.bufferView),
                  min: tR.min,
                  max: tR.max
                }, WR.set(JR, GR)
              }
              return GR
            },
            CR = null !== (GR = null === (yR = RR.extensionsUsed) || void 0 === yR ? void 0 : yR.includes("KHR_draco_mesh_compression")) && void 0 !== GR && GR,
            XR = (null !== (tR = RR.meshes) && void 0 !== tR ? tR : []).map(((JR, GR) => {
              const yR = JR.primitives.map(((JR, GR) => {
                var yR, tR, uR;
                const ZR = CR ? null === (yR = JR.extensions) || void 0 === yR ? void 0 : yR.KHR_draco_mesh_compression : void 0;
                let qR = null;
                const iR = [];
                if (ZR) {
                  const GR = {
                    vertices: RR.accessors[JR.attributes.POSITION].count,
                    indices: void 0 === JR.indices ? 0 : RR.accessors[JR.indices].count,
                    components: {}
                  };
                  qR = {
                    bufferView: UR(ZR.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: GR
                  };
                  for (const [yR, tR] of xR.e) {
                    const uR = ZR.attributes[yR];
                    if (void 0 === uR) continue;
                    qR.attributeIds[tR] = uR;
                    const iR = JR.attributes[yR];
                    var fR;
                    if (void 0 !== iR) qR.normalized[tR] = null !== (fR = RR.accessors[iR].normalized) && void 0 !== fR && fR, GR.components[tR] = xR.n[RR.accessors[iR].type]
                  }
                } else
                  for (const [RR, VR] of xR.e) {
                    const GR = JR.attributes[RR];
                    void 0 !== GR && iR.push({
                      semantic: RR,
                      kind: VR,
                      accessor: AR(GR)
                    })
                  }
                return {
                  index: GR,
                  mode: null !== (tR = JR.mode) && void 0 !== tR ? tR : 4,
                  attributes: iR,
                  indices: ZR || void 0 === JR.indices ? null : AR(JR.indices),
                  position: void 0 === JR.attributes.POSITION ? null : AR(JR.attributes.POSITION),
                  material: null !== (uR = JR.material) && void 0 !== uR ? uR : null,
                  draco: qR
                }
              }));
              return {
                index: GR,
                name: JR.name,
                primitives: yR,
                extras: JR.extras
              }
            })),
            MR = (null !== (uR = RR.nodes) && void 0 !== uR ? uR : []).map(((RR, JR) => {
              var GR, yR;
              return {
                index: JR,
                name: RR.name,
                children: null !== (GR = RR.children) && void 0 !== GR ? GR : [],
                mesh: null !== (yR = RR.mesh) && void 0 !== yR ? yR : null,
                translation: RR.translation,
                rotation: RR.rotation,
                scale: RR.scale,
                hasCamera: void 0 !== RR.camera,
                extras: RR.extras
              }
            })),
            BR = null !== (ZR = null === (qR = RR.extensionsUsed) || void 0 === qR ? void 0 : qR.includes("KHR_materials_unlit")) && void 0 !== ZR && ZR,
            lR = null !== (iR = null === (fR = RR.extensionsUsed) || void 0 === fR ? void 0 : fR.includes("KHR_texture_transform")) && void 0 !== iR && iR,
            pR = (null !== (VR = RR.materials) && void 0 !== VR ? VR : []).map(((RR, JR) => {
              var GR, yR, tR, uR;
              const ZR = RR.pbrMetallicRoughness,
                qR = null === ZR || void 0 === ZR ? void 0 : ZR.baseColorTexture;
              return {
                index: JR,
                name: RR.name,
                extras: RR.extras,
                unlit: BR && void 0 !== (null === (GR = RR.extensions) || void 0 === GR ? void 0 : GR.KHR_materials_unlit),
                pbr: ZR ? {
                  baseColorFactor: ZR.baseColorFactor,
                  metallicFactor: ZR.metallicFactor,
                  roughnessFactor: ZR.roughnessFactor
                } : null,
                baseColorTexture: qR ? {
                  texture: qR.index,
                  transform: lR && (null === (yR = qR.extensions) || void 0 === yR ? void 0 : yR.KHR_texture_transform) || null
                } : null,
                emissiveFactor: RR.emissiveFactor,
                alphaMode: null !== (tR = RR.alphaMode) && void 0 !== tR ? tR : "OPAQUE",
                alphaCutoff: RR.alphaCutoff,
                doubleSided: null !== (uR = RR.doubleSided) && void 0 !== uR && uR
              }
            })),
            gR = (null !== (KR = RR.textures) && void 0 !== KR ? KR : []).map(((JR, GR) => {
              var yR, tR;
              const uR = void 0 === JR.sampler ? DR : {
                index: JR.sampler,
                ...null === (yR = RR.samplers) || void 0 === yR ? void 0 : yR[JR.sampler]
              };
              return {
                index: GR,
                sampler: {
                  index: uR.index,
                  magFilter: uR.magFilter,
                  minFilter: uR.minFilter,
                  wrapS: uR.wrapS,
                  wrapT: uR.wrapT
                },
                image: null !== (tR = JR.source) && void 0 !== tR ? tR : -1
              }
            })),
            bR = (null !== (wR = RR.images) && void 0 !== wR ? wR : []).map(((RR, JR) => ({
              index: JR,
              name: RR.name,
              mimeType: RR.mimeType,
              bufferView: UR(RR.bufferView)
            }))),
            vR = null !== (rR = (0, xR.u)(RR)) && void 0 !== rR ? rR : 0;
          return {
            json: RR,
            rootNodes: null !== (eR = null === (aR = RR.scenes) || void 0 === aR || null === (LR = aR[vR]) || void 0 === LR ? void 0 : LR.nodes) && void 0 !== eR ? eR : [],
            nodes: MR,
            meshes: XR,
            materials: pR,
            textures: gR,
            images: bR
          }
        }(GR, yR)
      } catch (uR) {
        throw uR instanceof xR.i ? uR : new xR.i(`reading the GLB failed: ${uR instanceof Error?uR.message:String(uR)}`)
      }
    }
    async function oR(RR, JR) {
      var GR, yR;
      const tR = RR.draco;
      if (!tR) throw new xR.i("not a Draco primitive");
      let uR;
      try {
        uR = await JR(tR.bufferView.bytes, tR.attributeIds, tR.expected)
      } catch (fR) {
        throw new xR.i(`Draco decoding failed: ${fR instanceof Error?fR.message:String(fR)}`)
      }
      const {
        vertices: ZR,
        indices: qR,
        components: iR
      } = tR.expected;
      if (uR.totalVertices !== ZR || (null !== (GR = null === (yR = uR.indices) || void 0 === yR ? void 0 : yR.length) && void 0 !== GR ? GR : 0) !== qR || uR.attributes.some((RR => RR.size !== iR[RR.kind] || RR.data.length !== ZR * RR.size))) throw new xR.i("Draco decoding gave other counts than the accessors declare");
      for (const VR of uR.attributes) {
        const RR = tR.normalized[VR.kind];
        void 0 !== RR && (VR.normalized = RR)
      }
      return uR
    }
    const cR = new WeakMap;

    function PR(RR, JR) {
      var GR;
      const yR = null !== (GR = cR.get(RR)) && void 0 !== GR ? GR : JR(RR);
      return cR.set(RR, yR), yR
    }

    function IR(RR) {
      const JR = RR.bufferView,
        GR = 5125 === RR.componentType ? Uint32Array : Uint16Array,
        yR = JR.bytes.buffer,
        tR = JR.bytes.byteOffset + (RR.byteOffset || 0);
      return tR % GR.BYTES_PER_ELEMENT !== 0 ? new GR(yR.slice(tR, tR + RR.count * GR.BYTES_PER_ELEMENT), 0) : new GR(yR, tR, RR.count)
    }

    function mR(RR, JR) {
      if (RR.min && RR.max) return [new Float64Array(RR.min), new Float64Array(RR.max)];
      const GR = JR.find((RR => {
          let {
            kind: JR
          } = RR;
          return "position" === JR
        })),
        yR = GR ? (0, OR.h)(GR, RR.count) : new Float32Array(0);
      return (0, OR.r)(yR.length / 3, ((RR, JR) => yR[3 * RR + JR]))
    }

    function zR(RR) {
      const JR = RR.attributes.map((RR => {
          var JR, GR;
          let {
            kind: yR,
            accessor: tR
          } = RR;
          const {
            bufferView: uR,
            numComponents: ZR
          } = tR;
          if (!uR) {
            return {
              kind: yR,
              data: PR(tR, (() => new Float32Array(ZR * tR.count))),
              offset: 0,
              stride: 4 * ZR,
              components: ZR,
              glType: 5126,
              isNormalized: !1
            }
          }
          const qR = null !== (JR = uR.byteStride) && void 0 !== JR ? JR : ZR * xR.b[tR.componentType];
          return {
            kind: yR,
            data: uR.bytes,
            offset: null !== (GR = tR.byteOffset) && void 0 !== GR ? GR : 0,
            stride: qR,
            components: ZR,
            glType: tR.componentType,
            isNormalized: tR.normalized
          }
        })),
        GR = RR.indices,
        yR = GR && PR(GR, IR),
        tR = RR.position;
      return new OR.e(JR, yR, tR.count, ...mR(tR, JR))
    }
    const SR = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function jR(RR, JR) {
      const GR = JR.attributes.map((RR => {
        let {
          kind: JR,
          data: GR,
          size: yR,
          byteOffset: tR,
          byteStride: uR,
          normalized: ZR
        } = RR;
        return {
          kind: JR,
          data: GR,
          offset: tR,
          stride: uR,
          components: yR,
          glType: 5120 + SR.indexOf(GR.constructor),
          isNormalized: ZR
        }
      }));
      return new OR.e(GR, JR.indices, JR.totalVertices, ...mR(RR.position, GR))
    }

    function dR(RR) {
      const JR = RR.lastIndexOf("/");
      return JR < 0 ? RR : RR.substring(JR + 1)
    }

    function ER(RR) {
      const JR = RR.lastIndexOf("/");
      return JR < 0 ? "" : RR.substring(0, JR + 1)
    }

    function YR(RR) {
      return RR.name || `node${RR.index}`
    }
    const kR = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      QR = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      FR = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function TR(RR) {
      var JR, GR, yR, tR;
      const uR = null !== (JR = RR.minFilter) && void 0 !== JR ? JR : 9987;
      return 9729 === (null !== (GR = RR.magFilter) && void 0 !== GR ? GR : 9729) ? null !== (yR = QR[uR]) && void 0 !== yR ? yR : 3 : null !== (tR = FR[uR]) && void 0 !== tR ? tR : 4
    }
    const sR = {
      33071: 0,
      33648: 2
    };

    function hR(RR) {
      var JR;
      return null !== (JR = sR[null !== RR && void 0 !== RR ? RR : 10497]) && void 0 !== JR ? JR : 1
    }

    function RJ(RR) {
      return 9728 === RR.minFilter || 9729 === RR.minFilter
    }

    function JJ(RR) {
      var JR, GR, yR;
      const tR = Float64Array.from(null !== (JR = RR.scale) && void 0 !== JR ? JR : [1, 1, 1]);
      return RR.hasCamera && (tR[0] = -1), {
        translation: Float64Array.from(null !== (GR = RR.translation) && void 0 !== GR ? GR : [0, 0, 0]),
        rotation: Float64Array.from(null !== (yR = RR.rotation) && void 0 !== yR ? yR : [0, 0, 0, 1]),
        scale: tR
      }
    }

    function GJ(RR, JR) {
      let {
        translation: GR,
        rotation: yR,
        scale: tR
      } = RR;
      const uR = new Float32Array(16);
      return (0, vR.b)(tR, 0, yR, 0, GR, 0, uR), JR && (0, vR.n)(uR, JR, 0, uR), uR
    }
    class yJ {
      constructor(RR, JR, GR, yR) {
        this.model = RR, this.decode = JR, this.fileInfo = GR, this.uniqueRootUrl = yR, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const tR = new Set,
          uR = (JR, GR) => {
            const yR = RR.nodes[JR];
            if (this.parents.has(yR)) throw new xR.i(`/nodes/${JR}: Invalid recursive node hierarchy`);
            this.parents.set(yR, GR);
            const ZR = null === yR.mesh ? [] : RR.meshes[yR.mesh].primitives,
              qR = ZR.map((RR => {
                const JR = ZR.length > 1;
                return {
                  name: JR ? `${YR(yR)}_primitive${RR.index}` : YR(yR),
                  node: yR,
                  primitive: RR,
                  part: JR,
                  geometry: null
                }
              }));
            this.uses.set(yR, qR);
            const iR = null !== yR.mesh && tR.has(yR.mesh);
            tR.add(yR.mesh), this.own.set(yR, iR ? [] : qR);
            for (const RR of yR.children) uR(RR, yR)
          };
        for (const ZR of RR.rootNodes) uR(ZR, null);
        this.primitives = RR.nodes.flatMap((RR => {
          var JR;
          return null !== (JR = this.own.get(RR)) && void 0 !== JR ? JR : []
        }))
      }
      decodeGeometries() {
        const RR = new Map;
        return Promise.all(this.primitives.map((async JR => {
          const {
            primitive: GR
          } = JR, yR = GR.draco;
          let tR = yR ? RR.get(yR.bufferView.index) : Promise.resolve(zR(GR));
          tR || (tR = oR(GR, this.decode).then((RR => jR(GR, RR))), RR.set(yR.bufferView.index, tR)), JR.geometry = await tR
        })))
      }
      parentOf(RR) {
        var JR;
        return null !== (JR = this.parents.get(RR)) && void 0 !== JR ? JR : null
      }
      meshesUnder(RR) {
        const JR = this.model.nodes.filter((RR => this.uses.has(RR)));
        for (const yR of JR) {
          const JR = this.uses.get(yR),
            GR = JR.find((JR => JR.name === RR));
          if (GR) return 1 === JR.length ? this.subtree(yR) : this.own.get(yR).includes(GR) ? [GR] : []
        }
        const GR = JR.find((JR => 1 !== this.uses.get(JR).length && YR(JR) === RR));
        return GR ? this.subtree(GR) : null
      }
      subtree(RR) {
        return [...this.own.get(RR), ...RR.children.flatMap((RR => this.subtree(this.model.nodes[RR])))]
      }
      worldMatrix(RR, JR, GR) {
        let yR = GJ(JJ(JR ? kR : {}), null);
        const tR = [];
        for (let ZR = RR.part ? RR.node : this.parentOf(RR.node); ZR; ZR = this.parentOf(ZR)) tR.unshift(ZR);
        for (const ZR of tR) yR = GJ(JJ(ZR), yR);
        const uR = JJ(RR.part ? {} : RR.node);
        return void 0 !== GR && uR.scale.fill(GR), GJ(uR, yR)
      }
      floats(RR) {
        const {
          vertexAttributes: JR,
          vertexCount: GR
        } = RR.geometry;
        return new Map(JR.map((RR => [RR.kind, (0, OR.h)(RR, GR)])))
      }
      imageUrl(RR) {
        return function(RR, JR, GR) {
          let {
            name: yR
          } = JR;
          return `data:${RR}${yR}#image${GR}`
        }(this.uniqueRootUrl, this.fileInfo, RR)
      }
      textureDesc(RR, JR) {
        var GR;
        let {
          texture: yR,
          transform: tR
        } = RR;
        const {
          sampler: uR,
          image: ZR
        } = this.model.textures[yR], {
          bufferView: qR,
          mimeType: iR,
          name: fR
        } = this.model.images[ZR], VR = tR && {
          ...tR.offset ? {
            uOffset: tR.offset[0],
            vOffset: tR.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...tR.rotation ? {
            wAng: -tR.rotation
          } : {},
          ...tR.scale ? {
            uScale: tR.scale[0],
            vScale: tR.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(ZR),
          noMipmap: RJ(uR),
          invertY: !1,
          samplingMode: TR(uR),
          data: {
            bytes: qR.bytes,
            mimeType: iR,
            label: fR,
            context: `/textures/${yR}`
          },
          sets: {
            wrapU: hR(uR.wrapS),
            wrapV: hR(uR.wrapT),
            ...VR,
            coordinatesIndex: null !== (GR = null === tR || void 0 === tR ? void 0 : tR.texCoord) && void 0 !== GR ? GR : 0,
            hasAlpha: JR
          }
        }
      }
    }
    async function tJ(RR, JR, GR, yR, tR, uR) {
      let ZR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const qR = function(RR, JR, GR) {
          return "string" !== typeof JR ? {
            url: "",
            rootUrl: RR,
            name: GR()
          } : JR ? JR.startsWith("data:") ? {
            url: JR,
            rootUrl: RR,
            name: ""
          } : RR ? {
            url: RR + JR,
            rootUrl: RR,
            name: JR
          } : {
            url: JR,
            rootUrl: ER(JR),
            name: dR(JR)
          } : {
            url: RR,
            rootUrl: ER(RR),
            name: dR(RR)
          }
        }(GR, RR, tR),
        iR = {};
      JR.addPendingData(iR);
      try {
        const GR = HR(await async function(RR, JR) {
            return "string" !== typeof JR ? JR : RR.url.startsWith("data:") ? (0, xR.p)(RR.url) : await (0, xR.s)(RR.url)
          }(qR, RR)),
          iR = new yJ(GR, yR, qR, function(RR, JR) {
            let {
              rootUrl: GR,
              name: yR
            } = RR;
            return !GR.startsWith("file:") && yR ? GR : `${GR}${JR()}/`
          }(qR, tR));
        return await uR(iR), JR.importedMeshesFiles && (JR.loadingPluginName = "dD", ZR && JR.importedMeshesFiles.push(qR.url)), iR
      } finally {
        JR.removePendingData(iR)
      }
    }
    var uJ = GR(38650),
      ZJ = GR(38489),
      qJ = GR(39047);

    function iJ(RR) {
      if (null === RR || void 0 === RR || !RR.min || !RR.max) return null;
      const [JR, GR, yR] = RR.min, [tR, uR, ZR] = RR.max, {
        BoundingInfo: qR,
        Fe: iR
      } = (0, uJ.c)();
      return new qR(new iR(JR, GR, yR), new iR(tR, uR, ZR))
    }

    function fJ(RR) {
      (0, ZJ.d)(RR) || (RR.geometry && RR.geometry.useBoundingInfoFromGeometry ? RR._updateBoundingInfo() : RR.refreshBoundingInfo(!0, !0))
    }
    class VJ {
      constructor(RR, JR) {
        this.tL = RR, this.decode = JR, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(RR) {
        let JR = this.viewData.get(RR.index);
        return JR || (JR = this.bufferData.then((() => RR.bytes)), this.viewData.set(RR.index, JR)), JR
      }
      viewBuffer(RR) {
        let JR = this.viewBuffers.get(RR.index);
        return JR || (JR = this.viewBytes(RR).then((RR => new((0, uJ.c)().GK)(this.tL.ke(), RR, !1))), this.viewBuffers.set(RR.index, JR)), JR
      }
      vertexBuffer(RR, JR) {
        const {
          kind: GR,
          data: yR
        } = JR, tR = `${RR.index}:${GR}`;
        let uR = this.vertexBuffers.get(tR);
        if (!uR) {
          const ZR = RR.bufferView;
          uR = ZR ? this.viewBuffer(ZR).then((RR => this.layoutVertexBuffer(RR, JR))) : Promise.resolve(yR).then((RR => new((0, uJ.c)().VertexBuffer)(this.tL.ke(), RR, GR, !1))), this.vertexBuffers.set(tR, uR)
        }
        return uR
      }
      layoutVertexBuffer(RR, JR) {
        let {
          kind: GR,
          offset: yR,
          stride: tR,
          components: uR,
          glType: ZR,
          isNormalized: qR
        } = JR;
        const iR = this.tL.ke();
        return new((0, uJ.c)().VertexBuffer)(iR, RR, GR, !1, void 0, tR, void 0, yR, uR, ZR, qR, !0, void 0, !0)
      }
      load(RR, JR, GR) {
        const yR = (0, ZJ.d)(GR),
          tR = RR => {
            yR || (GR._delayInfo = GR._delayInfo || [], -1 === GR._delayInfo.indexOf(RR) && GR._delayInfo.push(RR))
          },
          uR = JR.draco;
        if (uR) {
          for (const RR in uR.attributeIds) tR(RR);
          let ZR = this.dracoGeometry.get(uR.bufferView.index);
          return ZR || (ZR = this.viewBytes(uR.bufferView).then((async () => {
            let tR;
            try {
              tR = await oR(JR, this.decode)
            } catch (iR) {
              throw new xR.i(`${RR}: ${iR instanceof Error?iR.message:String(iR)}`)
            }
            const uR = jR(JR, tR);
            if (yR) return uR;
            const ZR = iJ(JR.position),
              qR = new((0, uJ.c)().MirroredGeometry)(GR.name, this.tL);
            ZR && (qR._boundingInfo = ZR, qR.useBoundingInfoFromGeometry = !0), uR.indexData && qR.setIndices(uR.indexData);
            for (const RR of uR.vertexAttributes) qR.setVerticesBuffer(this.layoutVertexBuffer(RR.data, RR), uR.vertexCount);
            return qR.link(uR), qR
          })), this.dracoGeometry.set(uR.bufferView.index, ZR)), ZR
        }
        const ZR = [],
          qR = zR(JR);
        if (yR) return GR.isUnIndexed = !qR.indexData, GR.hasVertexAlpha = (0, qJ.f)(JR), Promise.resolve(qR);
        const iR = new((0, uJ.c)().MirroredGeometry)(GR.name, this.tL),
          {
            indexData: fR
          } = qR;
        fR ? ZR.push(this.viewBytes(JR.indices.bufferView).then((() => {
          iR.setIndices(fR)
        }))) : GR.isUnIndexed = !0;
        for (const [VR, {
            kind: KR,
            accessor: wR
          }] of JR.attributes.entries()) tR(KR), ZR.push(this.vertexBuffer(wR, qR.vertexAttributes[VR]).then((RR => {
          if ("position" === RR.getKind()) {
            const RR = iJ(wR);
            RR && (iR._boundingInfo = RR, iR.useBoundingInfoFromGeometry = !0)
          }
          iR.setVerticesBuffer(RR, qR.vertexCount)
        })));
        return (0, qJ.f)(JR) && (GR.hasVertexAlpha = !0), Promise.all(ZR).then((() => (iR.link(qR), iR)))
      }
    }
    var KJ, wJ = GR(38421),
      rJ = GR(38195),
      eJ = GR(39055),
      aJ = GR(38325),
      LJ = GR(38406),
      nJ = GR(2435),
      UJ = GR(38371);

    function WJ(RR, JR) {
      RR.metadata = RR.metadata || {};
      const GR = RR._internalMetadata = RR._internalMetadata || {},
        yR = GR.dD = GR.dD || {};
      (yR.pointers = yR.pointers || []).push(JR)
    }

    function AJ(RR, JR) {
      if (JR && Object.keys(JR).length > 0) {
        const GR = RR.metadata = RR.metadata || {};
        (GR.dD = GR.dD || {}).extras = JR
      }
    }

    function CJ(RR, JR) {
      JR.position = RR.translation ? rJ.Fe.FromArray(RR.translation) : rJ.Fe.Zero(), JR.rotationQuaternion = RR.rotation ? rJ.Quaternion.FromArray(RR.rotation) : rJ.Quaternion.Identity(), JR.MK = RR.scale ? rJ.Fe.FromArray(RR.scale) : rJ.Fe.One()
    }
    class XJ {
      constructor(RR, JR) {
        if (this.tL = RR, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, JR) {
          const JR = RR.ke(),
            GR = RR.YH.add((() => {
              this.dispose()
            })),
            yR = JR.Ye.add((() => {
              for (const RR of [...this.geometries, ...this.meshes, ...this.textures]) RR._rebuild()
            }));
          this.release = () => {
            RR.YH.remove(GR), JR.Ye.remove(yR)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const RR of this.meshes) this.tL.stR(RR);
          for (const RR of this.materials) this.tL.addMaterial(RR);
          for (const RR of this.geometries) this.tL.addGeometry(RR);
          for (const RR of this.transformNodes) this.tL.addTransformNode(RR);
          for (const RR of this.textures) this.tL.addTexture(RR)
        }
      }
      dispose() {
        var RR;
        for (const JR of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const RR of JR.slice()) RR.dispose();
          JR.length = 0
        }
        null === (RR = this.release) || void 0 === RR || RR.call(this), this.release = null
      }
    }
    class MJ {
      constructor(RR, JR, GR, yR, tR, uR, ZR) {
        this.asset = RR, this.tL = JR, this.tree = GR, this.geometryData = tR, this.materials = uR, this.lite = ZR, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = yR ? GR : null
      }
      create(RR) {
        if (this.lite) return RR();
        const JR = this.tL;
        JR._blockEntityCollection = !!this.container;
        try {
          const JR = RR();
          return this.container && (JR._parentContainer = this.container), JR
        } finally {
          JR._blockEntityCollection = !1
        }
      }
      node(RR, JR) {
        return this.create((() => this.lite ? JR ? (0, eJ.i)(this.lite, RR) : (0, eJ.p)(this.lite, RR) : JR ? new((0, uJ.c)().Mesh)(RR, this.tL) : new((0, uJ.c)().TransformNode)(RR, this.tL)))
      }
      async load() {
        var RR;
        this.asset.model.json.nodes && this.createRoot();
        const JR = this.lite ? null : this.tL,
          GR = null !== (RR = null === JR || void 0 === JR ? void 0 : JR.blockMaterialDirtyMechanism) && void 0 !== RR && RR;
        let yR;
        JR && (JR.blockMaterialDirtyMechanism = !0);
        try {
          yR = this.loadScene()
        } finally {
          null === JR || void 0 === JR || JR._forceBlockMaterialDirtyMechanism(GR)
        }
        await yR;
        const {
          root: tR,
          tree: uR
        } = this;
        tR && (tR.JA(!0), uR.meshes.push(tR), uR.rootNodes.push(tR));
        for (const qR of this.asset.model.nodes) {
          const RR = this.nodeObjects.get(qR.index);
          RR && ["TransformNode", "LiteNode"].includes(RR.getClassName()) && uR.transformNodes.push(RR);
          for (const JR of null !== (ZR = this.nodePrimitives.get(qR.index)) && void 0 !== ZR ? ZR : []) {
            var ZR;
            uR.meshes.push(JR);
            const RR = JR.geometry;
            RR && !uR.geometries.includes(RR) && uR.geometries.push(RR)
          }
        }
      }
      createRoot() {
        const RR = this.node("__root__", !0);
        this.root = RR, RR.JA(!1), this.tL.useRightHandedSystem || CJ(kR, RR)
      }
      loadScene() {
        const RR = [];
        for (const JR of this.asset.model.rootNodes) RR.push(this.loadNode(this.asset.model.nodes[JR], (RR => {
          RR.parent = this.root
        })));
        return RR.push(Promise.resolve()), Promise.all(RR).then((() => {}))
      }
      loadNode(RR, JR) {
        const GR = `/nodes/${RR.index}`,
          yR = [],
          tR = tR => {
            if (WJ(tR, GR), CJ(RR, tR), RR.hasCamera && !this.tL.useRightHandedSystem) {
              const {
                MK: RR
              } = tR;
              RR.set(-1, RR.y, RR.z)
            }
            for (const JR of RR.children) yR.push(this.loadNode(this.asset.model.nodes[JR], (RR => {
              RR.parent = tR
            })));
            (GR => {
              AJ(GR, RR.extras), JR(GR)
            })(tR)
          };
        if (null === RR.mesh) {
          const JR = this.node(YR(RR), !1);
          this.nodeObjects.set(RR.index, JR), tR(JR)
        } else {
          const JR = this.asset.model.meshes[RR.mesh];
          yR.push(this.loadMesh(`/meshes/${JR.index}`, RR, JR, tR))
        }
        return Promise.all(yR).then((() => {
          for (const GR of null !== (JR = this.nodePrimitives.get(RR.index)) && void 0 !== JR ? JR : []) {
            var JR;
            fJ(GR)
          }
          return this.nodeObjects.get(RR.index)
        }))
      }
      loadMesh(RR, JR, GR, yR) {
        const tR = [],
          uR = YR(JR);
        if (1 === GR.primitives.length) {
          const yR = GR.primitives[0];
          tR.push(this.loadPrimitive(`${RR}/primitives/${yR.index}`, uR, yR, (RR => {
            this.nodeObjects.set(JR.index, RR), this.nodePrimitives.set(JR.index, [RR])
          })))
        } else {
          const yR = this.node(uR, !1);
          this.nodeObjects.set(JR.index, yR);
          const ZR = [];
          this.nodePrimitives.set(JR.index, ZR);
          for (const JR of GR.primitives) tR.push(this.loadPrimitive(`${RR}/primitives/${JR.index}`, `${uR}_primitive${JR.index}`, JR, (RR => {
            RR.parent = yR, ZR.push(RR)
          })))
        }
        const ZR = this.nodeObjects.get(JR.index);
        return yR(ZR), Promise.all(tR).then((() => ZR))
      }
      loadPrimitive(RR, JR, GR, yR) {
        const tR = [],
          uR = this.node(JR, !0);
        if (uR.sideOrientation = this.tL.useRightHandedSystem ? aJ.d.CounterClockWiseSideOrientation : aJ.d.ClockWiseSideOrientation, tR.push(this.geometryData.load(RR, GR, uR).then((RR => {
            if ((0, ZJ.d)(uR)) {
              var JR, GR;
              const yR = RR;
              uR.replaceModel(yR, Int32Array.of(0, null !== (JR = null === (GR = yR.indexData) || void 0 === GR ? void 0 : GR.length) && void 0 !== JR ? JR : yR.vertexCount, 0, yR.vertexCount))
            } else this.create((() => (RR.applyToMesh(uR), RR)))
          }))), this.materials) {
          const RR = 0 === GR.mode ? aJ.d.PointListDrawMode : aJ.d.TriangleFillMode,
            JR = null === GR.material ? null : this.asset.model.materials[GR.material];
          tR.push(this.loadMaterial(JR, RR, (RR => {
            uR.material = RR
          })))
        }
        return WJ(uR, RR), yR(uR), Promise.all(tR).then((() => uR))
      }
      loadMaterial(RR, JR, GR) {
        var yR;
        const tR = `${null!==(yR=null===RR||void 0===RR?void 0:RR.index)&&void 0!==yR?yR:"default"}:${JR}`;
        let uR = this.materialData.get(tR);
        return uR || (uR = this.createMaterial(RR, JR), this.materialData.set(tR, uR)), GR(uR.material), uR.promise
      }
      createMaterial(RR, JR) {
        const GR = RR ? RR.name || `material${RR.index}` : "__GLTFLoader._default",
          {
            style: yR,
            unlit: tR
          } = this.materials;
        let uR;
        const ZR = this.create((() => {
          const ZR = (0, UJ.b)({
            name: GR,
            tL: this.tL,
            sets: {
              ...(0, qJ.b)(this.asset, RR, yR, tR),
              fillMode: JR
            },
            unrendered: !0
          });
          return uR = ZR.model, ZR.mirror
        }));
        let qR = Promise.resolve();
        if (RR) {
          const JR = `/materials/${RR.index}`,
            yR = uR.diffuseTexture;
          if (yR && !yR.mirror) qR = new Promise((RR => setTimeout(RR)));
          else if (yR) {
            const tR = yR.mirror;
            tR._parentContainer = this.container, tR.name = `${GR} (Base Color)`, WJ(tR, `${JR}${RR.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(tR), qR = (0, LJ.x)(yR)
          }
          AJ(ZR, RR.extras), WJ(ZR, JR)
        }
        return this.tree.materials.push(ZR), {
          material: ZR,
          promise: qR
        }
      }
    }

    function BJ() {
      wJ.d.dracoDecodes = XR.decodes, wJ.d.dracoWorkersStarted = XR.workersStarted, wJ.d.dracoMostWorkers = XR.mostWorkers
    }
    async function lJ(RR, JR, GR, tR, uR) {
      try {
        return await async function(RR, JR, GR, tR, uR, ZR) {
          var qR;
          let iR;
          const fR = null === (qR = (0, nJ.i)()) || void 0 === qR ? void 0 : qR.lK,
            VR = null !== fR && void 0 !== fR && fR.La && JR === fR.jH() ? fR : null,
            KR = uR && !VR;
          return await tJ(RR, JR, GR, tR, yR.c, (RR => (iR = new XJ(JR, KR), new MJ(RR, JR, iR, KR, new VJ(JR, tR), ZR, VR).load())), !uR), iR
        }(RR, JR, GR, bR, tR, uR)
      } finally {
        BJ()
      }
    }
    async function pJ(RR, JR, GR, tR) {
      try {
        return await tJ(RR, JR, GR, bR, yR.c, (RR => tR(RR, new VJ(JR, bR))))
      } finally {
        BJ()
      }
    }
    KJ = qR, nR || (nR = {
      scriptUrl: new URL(KJ.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(KJ.wasmBinaryUrl, location.href).href
    })
  },
  37156: RR => {
    RR.exports = function(RR, JR, GR, yR) {
      var tR = self || window;
      try {
        try {
          var uR;
          try {
            uR = new tR.Blob([RR])
          } catch (fR) {
            (uR = new(tR.BlobBuilder || tR.WebKitBlobBuilder || tR.MozBlobBuilder || tR.MSBlobBuilder)).append(RR), uR = uR.getBlob()
          }
          var ZR = tR.URL || tR.webkitURL,
            qR = ZR.createObjectURL(uR),
            iR = new tR[JR](qR, GR);
          return ZR.revokeObjectURL(qR), iR
        } catch (fR) {
          return new tR[JR]("data:application/javascript,".concat(encodeURIComponent(RR)), GR)
        }
      } catch (fR) {
        if (!yR) throw Error("Inline worker is not supported");
        return new tR[JR](yR, GR)
      }
    }
  },
  53515: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  53520: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);